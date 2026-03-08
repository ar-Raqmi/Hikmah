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

_openrouter: ChatOpenAI | None = None
_gpt4o: ChatOpenAI | None = None

def _get_api_key(key_name: str) -> str:
    from dotenv import dotenv_values
    env_dict = dotenv_values(".env")
    return env_dict.get(key_name, "").strip()


def _get_primary_llm() -> ChatOpenAI:
    """Return OpenRouter gpt-4o-mini as the primary fast & cheap engine."""
    global _openrouter
    api_key = _get_api_key("OPENAI_API_KEY")
    if not api_key:
        raise RuntimeError("Missing OPENAI_API_KEY in .env for OpenRouter")
        
    if _openrouter is None:
        _openrouter = ChatOpenAI(
            model="gpt-4o-mini",
            api_key=api_key,
            base_url="https://openrouter.ai/api/v1",
            temperature=0.2,
        )
    return _openrouter


def _get_gpt4o() -> ChatOpenAI:
    """Return OpenRouter gpt-4o for the Verifier (stricter reasoning)."""
    global _gpt4o
    api_key = _get_api_key("OPENAI_API_KEY")
    if not api_key:
         raise RuntimeError("Missing OPENAI_API_KEY in .env for OpenRouter")
         
    if _gpt4o is None:
        _gpt4o = ChatOpenAI(
            model="openai/gpt-4o",
            api_key=api_key,
            base_url="https://openrouter.ai/api/v1",
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
1. Detect the source language of the *user's question* and return its ISO 639-1 code (e.g., 'en' for English, 'fr' for French).
   - CRITICAL: If the language is ambiguous, or if it is a short phrase that could be English, DEFAULT TO 'en' (English). 
2. Translate the question into precise Classical Arabic suitable for searching
   hadith and fiqh databases. Preserve the scholarly nuance.

Return ONLY valid JSON — no markdown, no explanation:
{"language": "<iso-code>", "arabic_query": "<translated query>"}
"""


def polyglot_translator(state: HikmahState) -> dict:
    """Detect language and produce scholarly Arabic query."""
    llm = _get_primary_llm()
    query = state["original_query"]
    history = state.get("conversation_history", [])

    messages = [SystemMessage(content=TRANSLATOR_SYSTEM)]
    if history:
        history_str = "\n".join(f"{h['role']}: {h['content']}" for h in history)
        messages.append(HumanMessage(content=f"Previous Conversation:\n{history_str}\n\nCurrent Question:\n{query}"))
    else:
        messages.append(HumanMessage(content=query))

    response = llm.invoke(messages)

    parsed = _parse_json_response(response.content)
    return {
        "input_language": parsed["language"],
        "arabic_query": parsed["arabic_query"],
    }


# ---------------------------------------------------------------------------
# Node 2 — Researcher Agent
# ---------------------------------------------------------------------------

RESEARCHER_SYSTEM = """\
You are an evidence-first Islamic investigator.

You receive text chunks retrieved from a scholarly database. These chunks may contain Sahih, Hasan, Da'if, or even Mawdu' (Fabricated) reports, along with what scholars said about them.

Strict Rules:
1. **Mirroring**: Present whatever the database says about the text, including its grading.
2. **Relevance Gateway**: Evaluate if the retrieved chunks directly or indirectly relate to the user's specific query.
   - Be very lenient. Even if the wording is colloquial (e.g., "makes me crazy" vs "snatched mind"), match it semantically.
   - If the chunks are COMPLETELY unrelated, you MUST return: `{"error": "NO_DIRECT_MATCH"}`.
3. **Drafting**: If relevant, lead with the Arabic evidence text, then explain its meaning and scholarly grading based ONLY on the provided chunks.
4. **Grading Awareness**: You MUST explicitly identify if a hadith is weak (Da'if) or fabricated (Mawdu') inside your draft. Do not omit the grade.
5. **JSON Format**: Return ONLY valid JSON:
  {"draft": "<arabic scholarly draft>", "sources": [{"book": "...", "hadith_no": "...", "text_snippet": "..."}]}
  OR
  {"error": "NO_DIRECT_MATCH"}
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
            logger.info("RAG search query (Arabic): %s", arabic_q)
            genai.configure(api_key=os.environ["GOOGLE_API_KEY"])
            embed_result = genai.embed_content(
                model="models/gemini-embedding-001",
                content=arabic_q,
                task_type="retrieval_query",
                output_dimensionality=768,
            )
            query_vector = embed_result["embedding"]
            chunks = vc.query(vector=query_vector, top_k=5)
            if chunks:
                logger.info("Retrieved %d relevant chunks from database.", len(chunks))
                for i, c in enumerate(chunks):
                    meta = c.get('metadata', {})
                    logger.info("  Chunk %d: %s (Book: %s, Author: %s)", i+1, c['id'], meta.get('book', 'Unknown'), meta.get('author', 'Unknown'))
        except Exception as exc:
            logger.warning("Vectorize query failed, continuing without RAG: %s", exc)

    history = state.get("conversation_history", [])
    history_context = ""
    if history:
         history_context = "السياق السابق:\n" + "\n".join(f"{h['role']}: {h['content']}" for h in history) + "\n\n"

    if chunks:
        context_items = []
        state_chunks = []
        for c in chunks:
            m = c.get("metadata", {})
            text = m.get("text") or m.get("content") or ""
            book = m.get("book") or "مصدر"
            author = m.get("author") or ""
            grade = m.get("grade") or "ungraded"
            src_type = m.get("type") or "hadith"
            
            info = f"[{book} - {author}] (Grade: {grade}, Type: {src_type})"
            context_items.append(f"{info}\n{text}")
            
            # Store full metadata for the Verifier to see later
            state_chunks.append({
                "book": book,
                "author": author,
                "grade": grade,
                "type": src_type,
                "text_snippet": text,
                "hadith_no": m.get("hadith_no", "")
            })
            
        context_block = "\n\n---\n\n".join(context_items)
        user_msg = f"{history_context}السؤال: {arabic_q}\n\nالنصوص المسترجعة:\n{context_block}"
    else:
        logger.info("No Vectorize results — using LLM built-in knowledge")
        state_chunks = []
        user_msg = (
            f"{history_context}السؤال: {arabic_q}\n\n"
            "لا توجد نصوص مسترجعة من قاعدة البيانات. "
            "استخدم معرفتك بالأحاديث الصحيحة من البخاري ومسلم وفتح الباري."
        )

    response = llm.invoke([
        SystemMessage(content=RESEARCHER_SYSTEM),
        HumanMessage(content=user_msg),
    ])

    parsed = _parse_json_response(response.content)
    if parsed.get("error") == "NO_DIRECT_MATCH":
        return {
            "authentic_chunks": [],
            "arabic_scholarly_draft": "NO_DIRECT_MATCH",
        }

    # If the researcher provided specific sources in its JSON, we can use those too, 
    # but primarily we want the raw chunks we found in the database.
    return {
        "authentic_chunks": state_chunks,
        "arabic_scholarly_draft": parsed.get("draft", ""),
    }


# ---------------------------------------------------------------------------
# Node 3 — Verifier Agent (Antigravity Audit)
# ---------------------------------------------------------------------------

VERIFIER_SYSTEM = """\
You are The Verifier — an independent auditor of Islamic scholarly AI output.
You perform the "Antigravity Audit": evaluating the "Amanah" (Faithfulness & Certainty) of the AI's draft compared to the raw evidence chunks.

Strict Rules:
1. **Relevance Check**: If the Researcher Agent output "NO_DIRECT_MATCH", you MUST return an `amanah_score` of **0**.
2. **Amanah Scoring (Faithfulness)**: Your score (0-100) reflects the **faithfulness** of the AI draft to the provided chunks. If the chunks say a hadith is fabricated, and the AI correctly reports it as fabricated, the Amanah score should be 100. Do NOT punish the AI's Amanah score for correctly reporting weak hadiths.
3. **Draft Accuracy**:
    - If the AI hallucinates details, contradicts the chunks, or fails to warn about a Da'if/Mawdu' hadith when the chunks explicitly say it is weak, drop the Amanah score below 85.
4. **Consensus Level**: Separate from Amanah, you must determine the actual scholarly grading/consensus of the topic based on the sources. Choose EXACTLY ONE of the following:
    - `agreed_upon`: Verbatim foundational texts from Sahihayn (Bukhari/Muslim) or explicit consensus (Ijma').
    - `majority`: Strong majority opinion (Jumhur) without significant valid counter-evidence.
    - `khilaf`: Significant scholarly dispute with valid evidence on multiple sides (Valid Difference).
    - `hasan_acceptable`: Generally accepted or Hasan rating, but not reaching agreed upon status.
    - `weak_fabricated`: The sources explicitly state the hadith/claim is Da'if (Weak) or Mawdu' (Fabricated).
    - `unknown`: No clear grading can be established.
5. **JSON Format**: Return ONLY valid JSON:
{
  "amanah_score": <integer 0-100>,
  "consensus_level": "<one of the exact strings from rule 4>",
  "notes": "<Arabic notes explaining the scholarly consensus level and why this score was given>"
}
"""


def verifier_agent(state: HikmahState) -> dict:
    """Antigravity Audit. Uses GPT-4o if available, otherwise best available LLM."""
    # Prefer GPT-4o for verification rigour, fall back to Gemini/Groq
    llm = _get_gpt4o() or _get_primary_llm()
    logger.info("Verifier using: %s", llm.__class__.__name__)

    draft = state["arabic_scholarly_draft"]
    chunks = state.get("authentic_chunks", [])
    history = state.get("conversation_history", [])

    evidence_block = "\n".join(
        f"- [{c.get('book', '')} #{c.get('hadith_no', '')}] {c.get('text_snippet', '')}"
        for c in chunks
    ) or "لا يوجد دليل"

    history_context = ""
    if history:
         history_context = "السياق السابق:\n" + "\n".join(f"{h['role']}: {h['content']}" for h in history) + "\n\n"

    response = llm.invoke([
        SystemMessage(content=VERIFIER_SYSTEM),
        HumanMessage(
            content=f"{history_context}المسودة العلمية:\n{draft}\n\nالأدلة المسترجعة:\n{evidence_block}"
        ),
    ])

    parsed = _parse_json_response(response.content)
    return {
        "amanah_score": int(parsed.get("amanah_score", 0)),
        "consensus_level": parsed.get("consensus_level", "unknown"),
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
- A list of raw Arabic evidence snippets from the sources.

Your job:
1. Translate the Arabic draft into the user's language with scholarly dignity.
2. **Friendly Disclaimer**: Check if the Arabic draft starts with the marker `[[تنبيه: لا توجد إجابة مباشرة]]`.
   - If YES: Start your answer with this exact sentence (translated to user's language): "After researching the available archives, I found no direct answer to your specific question. However, I found the following scholarly evidence that may be of benefit:"
   - If NO: Proceed without a disclaimer.
3. **Evidence Translation**: In your main answer, provide a dedicated "Translated Evidence" section.
   - Look for the primary Arabic Hadith or Ayah in the draft and provide a faithful, precise translation of it.
4. **Source Snippet Translation**: For EACH of the provided raw Arabic evidence snippets, provide a FULL AND COMPLETE translation in the user's language. DO NOT use ellipses (`...`) or truncate the translation. Even if the source Arabic text is truncated or incomplete, translate what is there and simply end the sentence without adding trailing dots or ellipses.
6. **Verification Notes Translation**: Translate the provided raw Arabic verifier notes into the user's language.
7. Format the MAIN answer with clear Markdown sections using ## headings:

## Evidence
Present the primary hadith or Qur'anic evidence. Always include the original Arabic text.
## Evidence Translation
Provide the translation of the primary Arabic evidence text. Use a blockquote.
## Explanation
Provide a clear scholarly explanation in the user's language.
## Source
List all references with book name and hadith number.

Return ALWAYS valid JSON:
{
  "answer": "<The full markdown response with headers and sections>",
  "source_translations": ["translation of snippet 1", "translation of snippet 2", ...],
  "verification_translation": "<concise translation of the verifier notes>"
}
"""


def global_spokesperson(state: HikmahState) -> dict:
    """Translate verified Arabic → user's native language and source snippets."""
    llm = _get_primary_llm()
    lang = state.get("input_language", "en")
    draft = state["arabic_scholarly_draft"]
    notes = state.get("verification_notes", "")
    chunks = state.get("authentic_chunks", [])

    # Prepare snippets for targeted translation
    snippets = [c.get("text_snippet", "") for c in chunks]
    snippets_str = "\n".join([f"{i+1}. {s}" for i, s in enumerate(snippets)])

    response = llm.invoke([
        SystemMessage(content=SPOKESPERSON_SYSTEM),
        HumanMessage(
            content=(
                f"Target language: {lang}\n"
                f"Verified Arabic draft:\n{draft}\n"
                f"Verifier notes:\n{notes}\n"
                f"Raw original snippets to translate:\n{snippets_str}"
            )
        ),
    ])

    parsed = _parse_json_response(response.content)
    answer = parsed.get("answer", response.content)
    translations = parsed.get("source_translations", [])
    ver_trans = parsed.get("verification_translation", "")

    # Update chunks with translations for the final response
    for i, trans in enumerate(translations):
        if i < len(chunks):
            chunks[i]["translation_snippet"] = trans

    return {
        "final_native_answer": answer,
        "authentic_chunks": chunks,
        "verification_notes_translation": ver_trans,
    }


# ---------------------------------------------------------------------------
# Wallahu Alam — Humble Fallback Node
# ---------------------------------------------------------------------------

WALLAHU_ALAM_MESSAGES: dict[str, str] = {
    "ja": (
        "現在の信頼できる典拠では、この質問に必要な精度で"
        "お答えすることができません。資格のある学者にご相談ください。"
    ),
    "de": (
        "Die verfügbaren authentischen Quellen beantworten diese Frage "
        "nicht mit der erforderlichen Genauigkeit. Bitte konsultieren "
        "Sie einen qualifizierten Gelehrten."
    ),
    "it": (
        "Le fonti autentiche disponibili non rispondono a questa domanda "
        "con la precisione richiesta. Si prega di consultare uno studioso "
        "qualificato."
    ),
    "ar": (
        "لم تتوفر أدلة صحيحة كافية للإجابة على هذا السؤال بالدقة المطلوبة. "
        "يُرجى الرجوع إلى أهل العلم."
    ),
    "en": (
        "At this moment, my library of classical scholarly texts does not contain "
        "a direct answer to your specific query with the required precision. "
        "We are currently expanding our archives to include more verified sources. "
        "Please consult a qualified scholar for urgent matters."
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
    """Route based on amanah_score: >= 85 → spokesperson, < 85 → fallback."""
    score = state.get("amanah_score", 0)
    # If a score >= 85 is achieved, the AI faithfully represented the sources.
    if score >= 85:
        logger.info("Amanah score %d >= 85 → global_spokesperson", score)
        return "pass"
    logger.warning("Amanah score %d < 85 → wallahu_alam (AI failed faithfulness)", score)
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
