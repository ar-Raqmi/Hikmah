import json
import logging
import os
import sys
import uuid
import google.generativeai as genai
from dotenv import load_dotenv

# Add parent dir to path so we can import 'app'
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from app.vectorize import VectorizeClient

logging.basicConfig(level=logging.INFO, format="%(levelname)s: %(message)s")
logger = logging.getLogger("ingest.diverse")

def main():
    load_dotenv(os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), ".env"))
    
    if not os.environ.get("GOOGLE_API_KEY"):
        logger.error("GOOGLE_API_KEY not set in .env")
        sys.exit(1)
        
    cf_account = os.environ.get("CLOUDFLARE_ACCOUNT_ID")
    cf_token = os.environ.get("CLOUDFLARE_API_TOKEN")
    
    if not cf_account or not cf_token:
        logger.error("CLOUDFLARE_ACCOUNT_ID or CLOUDFLARE_API_TOKEN not set in .env")
        sys.exit(1)

    genai.configure(api_key=os.environ["GOOGLE_API_KEY"])
    vc = VectorizeClient(account_id=cf_account, api_token=cf_token, index_name="hikmah-sahih-index")

    data_path = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "diverse_test_data.json")
    
    logger.info(f"Reading test data: {data_path}")
    with open(data_path, "r", encoding="utf-8") as f:
        test_data = json.load(f)

    logger.info(f"Processing {len(test_data)} test items...")
    
    vectors = []
    for item in test_data:
        text = item["text"]
        logger.info(f"Embedding: {item['book']} - {text[:50]}...")
        
        try:
            resp = genai.embed_content(
                model="models/gemini-embedding-001",
                content=text,
                task_type="retrieval_document",
                output_dimensionality=768,
            )
            embedding = resp["embedding"]
            
            doc_id = str(uuid.uuid4())
            vectors.append({
                "id": doc_id,
                "values": embedding,
                "metadata": {
                    "book": item["book"],
                    "author": item["author"],
                    "grade": item["grade"],
                    "type": item["type"],
                    "tags": ",".join(item["tags"]),
                    "source_pipeline": "diverse_suite",
                    "text": text
                }
            })
        except Exception as e:
            logger.error(f"Failed to embed item: {e}")

    if vectors:
        logger.info(f"Upserting {len(vectors)} vectors to Cloudflare...")
        total_upserted = vc.upsert(vectors)
        logger.info(f"Successfully upserted {total_upserted} vectors.")
    else:
        logger.warning("No vectors to upsert.")

if __name__ == "__main__":
    main()
