import asyncio
import os
import sys
import logging

logging.basicConfig(level=logging.INFO)

from app.stream import stream_ask

from dotenv import load_dotenv
load_dotenv()

async def test_stream():
    print("Starting stream...")
    gen = stream_ask("Who is Allah?", [])
    try:
        print("Got generator, starting iteration...")
        async for chunk in gen:
            print("CHUNK:", chunk.strip())
            
            # Stop early if we get result
            if '"type": "result"' in chunk:
                break
    except Exception as e:
        print("ERROR:", e)
    print("Stream finished.")

if __name__ == "__main__":
    asyncio.run(test_stream())
