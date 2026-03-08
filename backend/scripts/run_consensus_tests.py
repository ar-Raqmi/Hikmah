import requests
import json
import uuid

API_URL = "http://localhost:8000/ask"

tests = [
    {"query": "pillars of islam", "expected_pill": "sahih"},
    {"query": "leaving what does not concern", "expected_pill": "hasan"},
    {"query": "missing asr prayer", "expected_pill": "da'if"},
    {"query": "differences of opinion is a mercy", "expected_pill": "mawdu"},
    {"query": "reciting fatihah behind the imam", "expected_pill": "khilaf"}
]

print("Starting API Test Suite...\n")

for test in tests:
    print(f"Testing Query: '{test['query']}' ...")
    session_id = str(uuid.uuid4())
    payload = {
        "query": test["query"],
        "language_code": "en",
        "session_id": session_id
    }
    try:
        response = requests.post(API_URL, json=payload, timeout=30)
        data = response.json()
        
        amanah_score = data.get("amanah_score", 0)
        is_fallback = data.get("is_fallback", False)
        consensus_level = data.get("consensus_level", "UNKNOWN")
        
        print(f"  Amanah Score: {amanah_score} (Faithfulness)")
        print(f"  Consensus Level: {consensus_level}")
        print(f"  Is Fallback: {is_fallback}")
        print(f"  Translation Snippet:\n  {data.get('answer', '')[:100]}...\n")
        
    except Exception as e:
        import traceback
        print(f"Failed: {e}")
        traceback.print_exc()

print("Testing complete.")
