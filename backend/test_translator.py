import asyncio
import os
import sys

from app.graph import _get_primary_llm, TRANSLATOR_SYSTEM
from langchain_core.messages import SystemMessage, HumanMessage

from dotenv import load_dotenv

load_dotenv()

async def test_translator():
    llm = _get_primary_llm()
    
    query1 = "Who is Allah?"
    
    print(f"Testing Translator Agent for: {query1}")
    response = llm.invoke([
        SystemMessage(content=TRANSLATOR_SYSTEM),
        HumanMessage(content=query1),
    ])
    
    print("\n--- Output ---")
    print(response.content)

if __name__ == "__main__":
    asyncio.run(test_translator())
