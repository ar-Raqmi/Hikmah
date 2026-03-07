import argparse
import logging
import os
import re
import sys
import uuid
import uuid

import google.generativeai as genai
from dotenv import load_dotenv

# Add parent dir to path so we can import 'app'
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from app.vectorize import VectorizeClient

logging.basicConfig(level=logging.INFO, format="%(levelname)s: %(message)s")
logger = logging.getLogger("ingest.openiti")

# Regex to strip metadata header blocks before "### |" or similar
META_HEADER_REGEX = re.compile(r"######(.*?)### \|", re.DOTALL)
# Regex to strip OpenITI tags like PageV01P023, ms, rh, etc.
OPENITI_TAGS_REGEX = re.compile(r"(PageV\d+P\d+|ms\d+|rh|#|~~|%)")


def parse_openiti(text: str) -> str:
    """Strip OpenITI metadata headers and structural tags."""
    # Remove large metadata blocks at the start if present
    text = META_HEADER_REGEX.sub("", text)
    # Remove inline tags
    text = OPENITI_TAGS_REGEX.sub("", text)
    # Collapse multiple whitespaces/newlines
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def chunk_text(text: str, chunk_size_words: int = 400, overlap_words: int = 50) -> list[str]:
    """Split text into chunks by word count with specified overlap."""
    words = text.split()
    chunks = []
    i = 0
    while i < len(words):
        chunk_end = min(i + chunk_size_words, len(words))
        chunk = " ".join(words[i:chunk_end])
        if chunk.strip():
            chunks.append(chunk)
        i += chunk_size_words - overlap_words
        # Avoid infinite loop if overlap >= size
        if chunk_size_words - overlap_words <= 0:
            break
    return chunks


def main():
    parser = argparse.ArgumentParser(description="Ingest OpenITI mARkdown into Hikmah Vectorize index.")
    parser.add_argument("file_path", help="Path to the OpenITI file (e.g., .mARkdown)")
    parser.add_argument("--book", required=True, help="Name of the book or collection")
    parser.add_argument("--author", required=True, help="Author of the text")
    parser.add_argument("--grade", default="ungraded", help="Default grading (e.g. sahih, hasan, ungraded)")
    args = parser.parse_args()

    load_dotenv()
    if not os.environ.get("GOOGLE_API_KEY"):
        logger.error("GOOGLE_API_KEY not set in .env")
        sys.exit(1)
        
    cf_account = os.environ.get("CLOUDFLARE_ACCOUNT_ID")
    cf_token = os.environ.get("CLOUDFLARE_API_TOKEN")
    
    if not cf_account or not cf_token:
        logger.warning("CLOUDFLARE_ACCOUNT_ID or CLOUDFLARE_API_TOKEN not set in .env. Execution will run as a dry run.")

    genai.configure(api_key=os.environ["GOOGLE_API_KEY"])
    vc = VectorizeClient(account_id=cf_account, api_token=cf_token, index_name="hikmah-sahih-index")

    logger.info(f"Reading file: {args.file_path}")
    try:
        with open(args.file_path, "r", encoding="utf-8") as f:
            raw_text = f.read()
    except Exception as e:
        logger.error(f"Failed to read file: {e}")
        sys.exit(1)

    logger.info("Parsing OpenITI formats...")
    clean_text = parse_openiti(raw_text)
    
    logger.info("Chunking text...")
    text_chunks = chunk_text(clean_text, chunk_size_words=400, overlap_words=50)
    logger.info(f"Created {len(text_chunks)} chunks.")

    vectors = []
    logger.info("Generating embeddings (this may take a while)...")
    
    # Process in batches of 100 to avoid API limits (Gemini limit: 100 per request)
    batch_size = 50
    for i in range(0, len(text_chunks), batch_size):
        batch = text_chunks[i:i + batch_size]
        try:
            resp = genai.embed_content(
                model="models/gemini-embedding-001",
                content=batch,
                task_type="retrieval_document",
            )
            # `embed_content` returns a dict with 'embedding': list[list[float]] when passed a list of strings
            batch_embeddings = resp["embedding"]
            
            for j, emb in enumerate(batch_embeddings):
                doc_id = str(uuid.uuid4())
                vectors.append({
                    "id": doc_id,
                    "values": emb,
                    "metadata": {
                        "book": args.book,
                        "author": args.author,
                        "grade": args.grade,
                        "source_pipeline": "openiti",
                        "text": batch[j]
                    }
                })
        except Exception as e:
            logger.error(f"Failed to generate embeddings for batch {i//batch_size}: {e}")
            sys.exit(1)
            
        logger.info(f"Processed batch {i//batch_size + 1}/{(len(text_chunks) + batch_size - 1)//batch_size}")

    logger.info(f"Upserting {len(vectors)} vectors to Cloudflare Vectorize...")
    
    # Vectorize REST API limits upsert bodies payload size
    # Safe batch size for upsert
    upsert_batch_size = 500
    total_upserted = 0
    for i in range(0, len(vectors), upsert_batch_size):
        batch = vectors[i:i + upsert_batch_size]
        upserted = vc.upsert(batch)
        total_upserted += upserted
        
    logger.info(f"Successfully upserted {total_upserted} vectors.")

if __name__ == "__main__":
    main()
