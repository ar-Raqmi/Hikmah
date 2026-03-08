import os, json
from dotenv import load_dotenv
load_dotenv(".env")
from app.graph import _get_primary_llm, RESEARCHER_SYSTEM
from langchain_core.messages import SystemMessage, HumanMessage

llm = _get_primary_llm()
prompt = """
Question:
ما حكم النوم بعد العصر؟

Retrieved Database Excerpts:
[Book: Silsilat al-Ahadith ad-Da'ifah, Author: Al-Albani, Grade: da'if, Hadith No: 39]
الحَدِيث: «مَنْ نَامَ بَعْدَ الْعَصْرِ فَاخْتُلِسَ عَقْلُهُ فَلَا يَلُومَنَّ إِلَّا نَفْسَهُ». التخريج: حديث ضعيف جداً أو موضوع. ذكره الألباني في السلسلة الضعيفة وقال عنه ضعيف.
"""

response = llm.invoke([SystemMessage(content=RESEARCHER_SYSTEM), HumanMessage(content=prompt)])
print("LLM Response:")
print(response.content)
