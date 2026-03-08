from dotenv import load_dotenv
load_dotenv(override=True)

from app.graph import verifier_agent

state = {
    "arabic_scholarly_draft": "الحديث: (اختلاف أمتي رحمة). تفيد المصادر أن هذا الحديث لا أصل له وهو حديث موضوع. قال الألباني إنه لا أصل له وقال ابن حزم هذا من أفسد قول يكون.",
    "authentic_chunks": [
        {
            "book": "Al-Mawdu'at",
            "author": "Ibn al-Jawzi",
            "hadith_no": "",
            "text_snippet": "الحديث: (اختلاف أمتي رحمة). قال ابن حزم: هذا من أفسد قول يكون، لأنه لو كان الاختلاف رحمة لكان الاتفاق سخطاً. وقال الألباني: لا أصل له، وذكره السبكي وقال: لم أقف له على سند صحيح ولا ضعيف ولا موضوع."
        }
    ]
}

res = verifier_agent(state)
print("AMANAH SCORE:", res["amanah_score"])
print("CONSENSUS LEVEL:", res["consensus_level"])
print("NOTES:", res["verification_notes"])
