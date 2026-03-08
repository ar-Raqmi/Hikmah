import json, logging, os, sys, uuid
import google.generativeai as genai
from dotenv import load_dotenv
sys.path.append('/home/rezephyr/Documents/repo/Hikmah/backend')
from app.vectorize import VectorizeClient

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("ingest.real")

def main():
    load_dotenv('/home/rezephyr/Documents/repo/Hikmah/backend/.env')
    genai.configure(api_key=os.environ["GOOGLE_API_KEY"])
    vc = VectorizeClient(
        account_id=os.environ["CLOUDFLARE_ACCOUNT_ID"],
        api_token=os.environ["CLOUDFLARE_API_TOKEN"],
        index_name="hikmah-sahih-index"
    )
    
    with open('/home/rezephyr/Documents/repo/Hikmah/backend/real_test_data.json', 'r') as f:
        data = json.load(f)
        
    vectors = []
    for item in data:
        resp = genai.embed_content(
            model="models/gemini-embedding-001",
            content=item["text"],
            task_type="retrieval_document",
            output_dimensionality=768,
        )
        vectors.append({
            "id": str(uuid.uuid4()),
            "values": resp["embedding"],
            "metadata": {
                "book": item["book"],
                "author": item["author"],
                "grade": item["grade"],
                "type": item["type"],
                "tags": ",".join(item["tags"]),
                "source_pipeline": "real_suite",
                "text": item["text"]
            }
        })
    logger.info(f"Upserting {len(vectors)} real vectors...")
    vc.upsert(vectors)
    logger.info("Done.")

if __name__ == "__main__":
    main()
