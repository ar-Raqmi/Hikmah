import requests
import json
import sys

API_URL = "http://localhost:8000/ask"
payload = {
    "query": "differences of opinion is a mercy",
    "language_code": "en",
    "session_id": "debug123"
}

print("Invoking /ask endpoint...")
try:
    response = requests.post(API_URL, json=payload, timeout=60)
    print("STATUS:", response.status_code)
    try:
        data = response.json()
        print(json.dumps(data, indent=2, ensure_ascii=False))
    except Exception as e:
        print("Raw text:", response.text)
except Exception as e:
    print("Error:", e)
