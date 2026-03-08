import asyncio
import os
import sys

from app.graph import _get_primary_llm, RESEARCHER_SYSTEM
from langchain_core.messages import SystemMessage, HumanMessage

from dotenv import load_dotenv

load_dotenv()

async def test_rejection():
    llm = _get_primary_llm()
    
    arabic_q = "من هو الله؟" # Who is Allah?
    
    # We provide our 5 specific test chunks that have nothing to do with "Who is Allah"
    context_block = """
[Sahih Muslim - Muslim ibn al-Hajjaj] (Grade: sahih, Type: hadith)
الإِيمَانُ بِضْعٌ وَسَبْعُونَ - أَوْ بِضْعٌ وَسِتُّونَ - شُعْبَةً، فَأَفْضَلُهَا قَوْلُ لاَ إِلَهَ إِلاَّ اللهُ...

[Fatawa Bin Baz - Abdul Aziz bin Baz] (Grade: sahih, Type: fatwa)
السنة رفع اليدين عند تكبيرة الإحرام، وعند الركوع...

[Al-Mughni - Ibn Qudamah] (Grade: khilaf, Type: fiqh)
مسألة: الوتر سنة مؤكدة وليس بواجب...

[Silsilat al-Ahadith ad-Da'ifah - Al-Albani] (Grade: da'if, Type: hadith_grading)
مَنْ نَامَ بَعْدَ الْعَصْرِ فَاخْتُلِسَ عَقْلُهُ فَلَا يَلُومَنَّ إِلَّا نَفْسَهُ. هذا حديث ضعيف...

[Sharh Sahih Muslim - An-Nawawi] (Grade: sahih, Type: commentary)
قوله ﷺ: «إنما الأعمال بالنيات» هذا الحديث أصل عظيم...
"""

    user_msg = f"السؤال: {arabic_q}\n\nالنصوص المسترجعة:\n{context_block}"
    
    print("Testing Researcher Agent with unrelated chunks...")
    response = llm.invoke([
        SystemMessage(content=RESEARCHER_SYSTEM),
        HumanMessage(content=user_msg),
    ])
    
    print("\n--- Output ---")
    print(response.content)

if __name__ == "__main__":
    asyncio.run(test_rejection())
