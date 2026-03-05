"""Hikmah LangGraph — The 4-Agent "Global Council" pipeline.

Nodes:
  1. polyglot_translator  — Detect language, translate → scholarly Arabic
  2. researcher_agent     — Query Vectorize, format Dalil-First Arabic draft
  3. verifier_agent       — Antigravity Audit (GPT-4o), return amanah_score
  4. global_spokesperson  — Translate verified Arabic → user's native tongue

Routing:
  verifier_agent → amanah_score ≥ 85 → global_spokesperson
  verifier_agent → amanah_score < 85  → wallahu_alam (humble fallback)
"""

from __future__ import annotations

import json
import logging
import os
import re

from langchain_core.messages import HumanMessage, SystemMessage
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_openai import ChatOpenAI

try:
    from langchain_groq import ChatGroq
    _GROQ_AVAILABLE = True
except ImportError:
    _GROQ_AVAILABLE = False
from langgraph.graph import END, StateGraph

from .schemas import HikmahState
from .vectorize import VectorizeClient

logger = logging.getLogger("hikmah.graph")


# ---------------------------------------------------------------------------
# JSON parsing helper — handles LLM output quirks
# ---------------------------------------------------------------------------

def _parse_json_response(raw: str) -> dict:
    """Extract JSON from an LLM response, tolerating markdown fences and preamble."""
    text = raw.strip()
    # Strip ```json ... ``` fences
    text = re.sub(r"^```(?:json)?\s*", "", text)
    text = re.sub(r"\s*```$", "", text)
    # Try direct parse first
    try:
        return json.loads(text)
    except json.JSONDecodeError:
        pass
    # Try to find JSON object in the text
    match = re.search(r"\{[\s\S]*\}", text)
    if match:
        try:
            return json.loads(match.group())
        except json.JSONDecodeError:
            pass
    logger.error("Failed to parse JSON from LLM response: %s", text[:200])
    raise ValueError(f"Could not extract valid JSON from LLM response: {text[:200]}")


# ---------------------------------------------------------------------------
# LLM singletons (initialised lazily via env vars)
# ---------------------------------------------------------------------------

_gemini: ChatGoogleGenerativeAI | None = None
_gpt4o: ChatOpenAI | None = None
_groq: "ChatGroq | None" = None


def _get_api_key(key_name: str) -> str:
    from dotenv import dotenv_values
    env_dict = dotenv_values(".env")
    return env_dict.get(key_name, "").strip()

def _get_gemini() -> ChatGoogleGenerativeAI | None:
    """Return Gemini client if GOOGLE_API_KEY is set, else None."""
    global _gemini
    api_key = _get_api_key("GOOGLE_API_KEY")
    if not api_key:
        return None
    if _gemini is None:
        _gemini = ChatGoogleGenerativeAI(
            model="gemini-2.0-flash",
            google_api_key=api_key,
            temperature=0.2,
        )
    return _gemini

def _get_groq():
    """Return Groq (Llama 3.3 70B) client if GROQ_API_KEY is set, else None."""
    global _groq
    if not _GROQ_AVAILABLE:
        return None
    api_key = _get_api_key("GROQ_API_KEY")
    if not api_key:
        return None
    if _groq is None:
        _groq = ChatGroq(  # type: ignore[assignment]
            model="llama-3.3-70b-versatile",
            api_key=api_key,
            temperature=0.2,
        )
    return _groq


def _get_primary_llm():
    """Return the best available LLM: Gemini → Groq (fallback)."""
    llm = _get_gemini() or _get_groq()
    if llm is None:
        raise RuntimeError(
            "No LLM configured. Set GOOGLE_API_KEY (Gemini) or GROQ_API_KEY (Groq) in .env"
        )
    logger.info("Using LLM provider: %s", llm.__class__.__name__)
    return llm


def _get_gpt4o() -> ChatOpenAI | None:
    """Return GPT-4o client if OPENAI_API_KEY is set, else None."""
    global _gpt4o
    api_key = os.environ.get("OPENAI_API_KEY", "").strip()
    if not api_key:
        return None
    if _gpt4o is None:
        _gpt4o = ChatOpenAI(
            model="gpt-4o",
            api_key=api_key,
            temperature=0.0,
        )
    return _gpt4o


# ---------------------------------------------------------------------------
# Vectorize client
# ---------------------------------------------------------------------------

_vectorize: VectorizeClient | None = None


def _get_vectorize() -> VectorizeClient:
    global _vectorize
    if _vectorize is None:
        _vectorize = VectorizeClient(
            account_id=os.environ.get("CLOUDFLARE_ACCOUNT_ID", ""),
            api_token=os.environ.get("CLOUDFLARE_API_TOKEN", ""),
            index_name="hikmah-sahih-index",
        )
    return _vectorize


# ---------------------------------------------------------------------------
# Node 1 — Polyglot Translator
# ---------------------------------------------------------------------------

TRANSLATOR_SYSTEM = """\
You are a scholarly Islamic translation engine.

Given a user question in ANY language, you MUST:
1. Detect the source language and return its ISO 639-1 code.
2. Translate the question into precise Classical Arabic suitable for searching
   hadith and fiqh databases. Preserve the scholarly nuance.

Return ONLY valid JSON — no markdown, no explanation:
{"language": "<iso-code>", "arabic_query": "<translated query>"}
"""


def polyglot_translator(state: HikmahState) -> dict:
    """Detect language and produce scholarly Arabic query."""
    llm = _get_primary_llm()
    query = state["original_query"]

    response = llm.invoke([
        SystemMessage(content=TRANSLATOR_SYSTEM),
        HumanMessage(content=query),
    ])

    parsed = _parse_json_response(response.content)
    return {
        "input_language": parsed["language"],
        "arabic_query": parsed["arabic_query"],
    }


# ---------------------------------------------------------------------------
# Node 2 — Researcher Agent
# ---------------------------------------------------------------------------

RESEARCHER_SYSTEM = """\
You are an evidence-first Islamic researcher.

You may receive hadith chunks retrieved from a scholarly database. If chunks
are provided, use them as primary evidence. If NO chunks are available, draw
from your trained knowledge of authentic (Sahih) hadith collections.

Rules:
- Cite ONLY Sahih (authentic) hadith — Bukhari, Muslim, or major scholarly
  consensus (e.g. Fath al-Bari by Ibn Hajar).
- Structure your answer as a "Dalil-First" draft: lead with the Arabic
  evidence text, then provide scholarly explanation.
- If no authentic evidence is available, state: "لم أجد دليلاً صحيحاً"
- Write entirely in Classical Arabic.
- Return ONLY valid JSON:
  {"draft": "<arabic scholarly draft>", "sources": [{"book": "...", "hadith_no": "...", "text_snippet": "..."}]}
"""


def researcher_agent(state: HikmahState) -> dict:
    """Search Vectorize (if available) and draft Dalil-First Arabic answer."""
    llm = _get_primary_llm()
    arabic_q = state["arabic_query"]

    # --- Try Vectorize if credentials are set ---
    chunks: list[dict] = []
    vc = _get_vectorize()
    if vc._account_id and vc._api_token:
        try:
            import google.generativeai as genai

            genai.configure(api_key=os.environ["GOOGLE_API_KEY"])
            embed_result = genai.embed_content(
                model="models/text-embedding-004",
                content=arabic_q,
                task_type="retrieval_query",
            )
            query_vector = embed_result["embedding"]
            chunks = vc.query(vector=query_vector, top_k=5)
        except Exception as exc:
            logger.warning("Vectorize query failed, continuing without RAG: %s", exc)

    if chunks:
        context_block = "\n\n---\n\n".join(
            f"[{c.get('book', 'مصدر')}  #{c.get('hadith_no', '')}]\n{c.get('text', '')}"
            for c in chunks
        )
        user_msg = f"السؤال: {arabic_q}\n\nالنصوص المسترجعة:\n{context_block}"
    else:
        logger.info("No Vectorize results — using LLM built-in knowledge")
        user_msg = (
            f"السؤال: {arabic_q}\n\n"
            "لا توجد نصوص مسترجعة من قاعدة البيانات. "
            "استخدم معرفتك بالأحاديث الصحيحة من البخاري ومسلم وفتح الباري."
        )

    response = llm.invoke([
        SystemMessage(content=RESEARCHER_SYSTEM),
        HumanMessage(content=user_msg),
    ])

    parsed = _parse_json_response(response.content)
    return {
        "authentic_chunks": parsed.get("sources", []),
        "arabic_scholarly_draft": parsed["draft"],
    }


# ---------------------------------------------------------------------------
# Node 3 — Verifier Agent (Antigravity Audit)
# ---------------------------------------------------------------------------

VERIFIER_SYSTEM = """\
You are The Verifier — an independent auditor of Islamic scholarly AI output.
You perform the "Antigravity Audit": checking that every claim is grounded
in Sahih evidence and free from:
  • Isra'iliyyat (Judeo-Christian narrations without Islamic basis)
  • Weak (Da'if) or fabricated (Mawdu') narrations
  • Logical gaps or unsupported jumps in reasoning

You receive the scholarly Arabic draft and the raw evidence chunks.

Return ONLY valid JSON — no markdown:
{
  "amanah_score": <integer 0-100>,
  "notes": "<Arabic notes on any issues found or confirmation of integrity>"
}

Scoring guide:
  90-100 — All claims backed by Sahih with clear isnad references
  75-89  — Mostly sound, minor gaps in citation precision
  50-74  — Significant reliance on unverified or weak material
  0-49   — Major integrity failures: fabricated hadith or Isra'iliyyat detected
"""


def verifier_agent(state: HikmahState) -> dict:
    """Antigravity Audit. Uses GPT-4o if available, otherwise best available LLM."""
    # Prefer GPT-4o for verification rigour, fall back to Gemini/Groq
    llm = _get_gpt4o() or _get_primary_llm()
    logger.info("Verifier using: %s", llm.__class__.__name__)

    draft = state["arabic_scholarly_draft"]
    chunks = state.get("authentic_chunks", [])

    evidence_block = "\n".join(
        f"- [{c.get('book', '')} #{c.get('hadith_no', '')}] {c.get('text_snippet', '')}"
        for c in chunks
    ) or "لا يوجد دليل"

    response = llm.invoke([
        SystemMessage(content=VERIFIER_SYSTEM),
        HumanMessage(
            content=f"المسودة العلمية:\n{draft}\n\nالأدلة المسترجعة:\n{evidence_block}"
        ),
    ])

    parsed = _parse_json_response(response.content)
    return {
        "amanah_score": int(parsed["amanah_score"]),
        "verification_notes": parsed.get("notes", ""),
    }


# ---------------------------------------------------------------------------
# Node 4 — Global Spokesperson
# ---------------------------------------------------------------------------

SPOKESPERSON_SYSTEM = """\
You are the Global Spokesperson for "Hikmah", an Islamic knowledge system.

You receive:
- A verified scholarly Arabic draft.
- The user's original language code.

Your job:
1. Translate the Arabic draft into the user's language with scholarly dignity.
2. Preserve all hadith citations (book + number) in their original Arabic form.
3. Keep the tone accessible yet respectful.
4. Format the answer with clear Markdown sections using ## headings:

## Evidence
Present the primary hadith or Qur'anic evidence. Always include the original Arabic text of the hadith/ayah.
Mention the source grading when known (e.g. **Sahih** — Authentic, **Hasan** — Good, **Da'if** — Weak).

## Explanation
Provide a clear scholarly explanation in the user's language.
Break down complex concepts into digestible points using bullet lists if helpful.

## Source
List all references with book name and hadith number.
Include chain of narration information if available.

Additional rules:
- Use **bold** for key terms and hadith gradings.
- Use *italic* for transliterations of Arabic terms.
- Use > blockquotes for direct hadith text translations.
- Always keep the original Arabic hadith text in Arabic script — do NOT transliterate it.
- If the source is from Sahih Bukhari or Sahih Muslim, explicitly note it as **Sahih** (Authentic).
- If there are known issues with any narration, mention the grade (Da'if, Mawdu', Isra'iliyyat).

Return the final answer as Markdown text (not JSON). Use the user's language.
"""


def global_spokesperson(state: HikmahState) -> dict:
    """Translate verified Arabic → user's native language."""
    llm = _get_primary_llm()
    lang = state.get("input_language", "en")
    draft = state["arabic_scholarly_draft"]
    notes = state.get("verification_notes", "")

    response = llm.invoke([
        SystemMessage(content=SPOKESPERSON_SYSTEM),
        HumanMessage(
            content=(
                f"Target language: {lang}\n"
                f"Verified Arabic draft:\n{draft}\n"
                f"Verifier notes:\n{notes}"
            )
        ),
    ])

    return {"final_native_answer": response.content.strip()}


# ---------------------------------------------------------------------------
# Wallahu Alam — Humble Fallback Node
# ---------------------------------------------------------------------------

WALLAHU_ALAM_MESSAGES: dict[str, str] = {
    "ja": (
        "والله أعلم\n\n"
        "現在の信頼できる典拠では、この質問に必要な精度で"
        "お答えすることができません。資格のある学者にご相談ください。"
    ),
    "de": (
        "والله أعلم\n\n"
        "Die verfügbaren authentischen Quellen beantworten diese Frage "
        "nicht mit der erforderlichen Genauigkeit. Bitte konsultieren "
        "Sie einen qualifizierten Gelehrten."
    ),
    "it": (
        "والله أعلم\n\n"
        "Le fonti autentiche disponibili non rispondono a questa domanda "
        "con la precisione richiesta. Si prega di consultare uno studioso "
        "qualificato."
    ),
    "ar": (
        "والله أعلم\n\n"
        "لم تتوفر أدلة صحيحة كافية للإجابة على هذا السؤال بالدقة المطلوبة. "
        "يُرجى الرجوع إلى أهل العلم."
    ),
    "en": (
        "والله أعلم — And Allah knows best.\n\n"
        "The available authentic sources do not conclusively answer this "
        "question with the precision required. Please consult a qualified scholar."
    ),
}

WALLAHU_ALAM_DEFAULT = WALLAHU_ALAM_MESSAGES["en"]


def wallahu_alam(state: HikmahState) -> dict:
    """Humble fallback when amanah_score < 85."""
    lang = state.get("input_language", "en")
    message = WALLAHU_ALAM_MESSAGES.get(lang, WALLAHU_ALAM_DEFAULT)
    return {"final_native_answer": message}


# ---------------------------------------------------------------------------
# Routing function — The 85% Amanah Rule
# ---------------------------------------------------------------------------

def amanah_router(state: HikmahState) -> str:
    """Route based on amanah_score: ≥ 85 → spokesperson, < 85 → fallback."""
    score = state.get("amanah_score", 0)
    if score >= 85:
        logger.info("Amanah score %d ≥ 85 → global_spokesperson", score)
        return "pass"
    logger.warning("Amanah score %d < 85 → wallahu_alam", score)
    return "fail"


# ---------------------------------------------------------------------------
# Graph Builder
# ---------------------------------------------------------------------------

def build_graph() -> StateGraph:
    """Construct and compile the Hikmah LangGraph pipeline."""
    graph = StateGraph(HikmahState)

    # — Add nodes —
    graph.add_node("polyglot_translator", polyglot_translator)
    graph.add_node("researcher_agent", researcher_agent)
    graph.add_node("verifier_agent", verifier_agent)
    graph.add_node("global_spokesperson", global_spokesperson)
    graph.add_node("wallahu_alam", wallahu_alam)

    # — Linear edges —
    graph.set_entry_point("polyglot_translator")
    graph.add_edge("polyglot_translator", "researcher_agent")
    graph.add_edge("researcher_agent", "verifier_agent")

    # — Conditional routing (The 85% Amanah Rule) —
    graph.add_conditional_edges(
        "verifier_agent",
        amanah_router,
        {"pass": "global_spokesperson", "fail": "wallahu_alam"},
    )

    # — Terminal edges —
    graph.add_edge("global_spokesperson", END)
    graph.add_edge("wallahu_alam", END)

    return graph.compile()
