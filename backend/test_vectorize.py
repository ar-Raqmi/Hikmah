import asyncio
import os
import sys

from app.vectorize import VectorizeClient
import google.generativeai as genai

from dotenv import load_dotenv

load_dotenv()

async def test_vectorize():
    cf_account = os.environ.get("CLOUDFLARE_ACCOUNT_ID")
    cf_token = os.environ.get("CLOUDFLARE_API_TOKEN")
    
    if not cf_account or not cf_token:
        print("Missing credentials")
        return
        
    genai.configure(api_key=os.environ["GOOGLE_API_KEY"])
    vc = VectorizeClient(account_id=cf_account, api_token=cf_token, index_name="hikmah-sahih-index")
    
    arabic_q = "من هو الله؟"
    
    print(f"Embedding query: {arabic_q}")
    embed_result = genai.embed_content(
        model="models/gemini-embedding-001",
        content=arabic_q,
        task_type="retrieval_query",
        output_dimensionality=768,
    )
    query_vector = embed_result["embedding"]
    
    print("Querying Vectorize...")
    chunks = vc.query(vector=query_vector, top_k=5)
    
    print(f"Found {len(chunks)} results:")
    for i, c in enumerate(chunks):
        meta = c.get('metadata', {})
        score = c.get('score', 0)
        book = meta.get('book', 'Unknown')
        print(f"  {i+1}. Score: {score:.4f} | Book: {book} | Text: {meta.get('text', '')[:100]}...")

if __name__ == "__main__":
    asyncio.run(test_vectorize())
