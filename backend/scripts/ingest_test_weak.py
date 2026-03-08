import os
import sys
from dotenv import load_dotenv
import google.generativeai as genai

sys.path.append('/home/rezephyr/Documents/repo/Hikmah/backend')
load_dotenv('/home/rezephyr/Documents/repo/Hikmah/backend/.env')

from app.vectorize import VectorizeClient

genai.configure(api_key=os.environ["GOOGLE_API_KEY"])

def ingest_test_weak_hadith():
    vc = VectorizeClient(
        account_id=os.environ["CLOUDFLARE_ACCOUNT_ID"],
        api_token=os.environ["CLOUDFLARE_API_TOKEN"],
        index_name="hikmah-sahih-index"
    )

    text_to_embed = "الحَدِيث: «مَنْ نَامَ بَعْدَ الْعَصْرِ فَاخْتُلِسَ عَقْلُهُ فَلَا يَلُومَنَّ إِلَّا نَفْسَهُ». التخريج: حديث ضعيف جداً أو موضوع. ذكره الألباني في السلسلة الضعيفة وقال عنه ضعيف."
    
    embed_result = genai.embed_content(
        model="models/gemini-embedding-001",
        content=text_to_embed,
        task_type="retrieval_document",
        output_dimensionality=768
    )
    
    vector = embed_result["embedding"]
    
    # Generate a unique ID
    import uuid
    doc_id = str(uuid.uuid4())
    
    metadata = {
        "source_pipeline": "custom_test",
        "book": "Silsilat al-Ahadith ad-Da'ifah",
        "author": "Al-Albani",
        "grade": "da'if",
        "hadith_no": "39",
        "text": text_to_embed
    }
    
    vc.upsert([{"id": doc_id, "values": vector, "metadata": metadata}])
    print("Successfully ingested weak hadith test data.")

if __name__ == "__main__":
    ingest_test_weak_hadith()
