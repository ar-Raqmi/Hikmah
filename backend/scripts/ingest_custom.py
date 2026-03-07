import argparse
import logging
import os
import sys
import uuid

import google.generativeai as genai
from bs4 import BeautifulSoup
from dotenv import load_dotenv

# Add parent dir to path so we can import 'app'
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from app.vectorize import VectorizeClient

logging.basicConfig(level=logging.INFO, format="%(levelname)s: %(message)s")
logger = logging.getLogger("ingest.custom")


def extract_text(filepath: str) -> str:
    """Extract text based on file extension."""
    ext = os.path.splitext(filepath)[1].lower()
    
    if ext == ".pdf":
        try:
            import pdfplumber
            text_blocks = []
            with pdfplumber.open(filepath) as pdf:
                for page in pdf.pages:
                    # extract_text can return None if page is empty/images
                    page_text = page.extract_text()
                    if page_text:
                        text_blocks.append(page_text)
            return "\n".join(text_blocks)
        except ImportError:
            logger.error("pdfplumber is not installed. Run: pip install pdfplumber")
            sys.exit(1)
            
    elif ext in [".htm", ".html"]:
        try:
            with open(filepath, "r", encoding="utf-8") as f:
                soup = BeautifulSoup(f, "html.parser")
            return soup.get_text(separator="\n", strip=True)
        except UnicodeDecodeError:
            with open(filepath, "r", encoding="windows-1256") as f:
                soup = BeautifulSoup(f, "html.parser")
            return soup.get_text(separator="\n", strip=True)
            
    elif ext in [".txt", ".md"]:
        # Standard text-based formats
        try:
            with open(filepath, "r", encoding="utf-8") as f:
                return f.read()
        except UnicodeDecodeError:
            with open(filepath, "r", encoding="windows-1256") as f:
                return f.read()
    else:
        logger.error(f"Unsupported file format: {ext}")
        sys.exit(1)


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
        if chunk_size_words - overlap_words <= 0:
            break
    return chunks


def main():
    parser = argparse.ArgumentParser(description="Ingest Custom Files (TXT, MD, HTML, PDF) to Hikmah Vectorize.")
    parser.add_argument("file_path", help="Path to the file to ingest")
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
        logger.warning("CLOUDFLARE_ACCOUNT_ID or CLOUDFLARE_API_TOKEN not set in .env. Execution will run as a dry run (embeddings generated but not gracefully skipped on upsert).")

    genai.configure(api_key=os.environ["GOOGLE_API_KEY"])
    vc = VectorizeClient(account_id=cf_account, api_token=cf_token, index_name="hikmah-sahih-index")

    if not os.path.isfile(args.file_path):
        logger.error(f"File not found: {args.file_path}")
        sys.exit(1)

    logger.info(f"Extracting text from {os.path.basename(args.file_path)}...")
    text = extract_text(args.file_path)
    
    if not text.strip():
        logger.error("No text extracted from file. It may be empty, image-based (PDF), or unsupported.")
        sys.exit(1)

    logger.info("Chunking text...")
    text_chunks = chunk_text(text, chunk_size_words=400, overlap_words=50)
    logger.info(f"Created {len(text_chunks)} chunks.")

    vectors = []
    logger.info("Generating embeddings (this may take a while)...")
    
    batch_size = 50
    for i in range(0, len(text_chunks), batch_size):
        batch = text_chunks[i:i + batch_size]
        try:
            resp = genai.embed_content(
                model="models/gemini-embedding-001",
                content=batch,
                task_type="retrieval_document",
                output_dimensionality=768,
            )
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
                        "source_pipeline": "custom",
                        "text": batch[j]
                    }
                })
        except Exception as e:
            logger.error(f"Failed to generate embeddings for batch {i//batch_size}: {e}")
            continue

    logger.info(f"Upserting {len(vectors)} vectors to Cloudflare Vectorize...")
    
    upsert_batch_size = 500
    total_upserted = 0
    for i in range(0, len(vectors), upsert_batch_size):
        batch = vectors[i:i + upsert_batch_size]
        upserted = vc.upsert(batch)
        total_upserted += upserted
        
    logger.info(f"Successfully upserted {total_upserted} vectors.")

if __name__ == "__main__":
    main()
