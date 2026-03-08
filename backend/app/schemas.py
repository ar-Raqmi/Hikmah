"""Hikmah Schemas — Pydantic models and LangGraph state definition.

Strict typing for the entire pipeline: from user query to verified response.
"""

from __future__ import annotations

from typing import TypedDict

from pydantic import BaseModel, Field


# ---------------------------------------------------------------------------
# LangGraph State
# ---------------------------------------------------------------------------

class HikmahState(TypedDict, total=False):
    """Shared state flowing through the LangGraph pipeline.

    Every node reads/writes specific keys; `total=False` lets nodes
    return partial updates without touching fields they don't own.
    """

    # — Set by entry point —
    original_query: str
    input_language: str  # ISO 639-1 code detected by polyglot_translator
    conversation_history: list[dict]  # [{"role": "user"|"assistant", "content": "..."}]

    # — Set by polyglot_translator —
    arabic_query: str  # Scholarly Arabic reformulation

    # — Set by researcher_agent —
    authentic_chunks: list[dict]  # {text, source, book, hadith_no}
    arabic_scholarly_draft: str  # Dalil-First Arabic answer

    # — Set by verifier_agent —
    amanah_score: int  # 0–100 AI faithfulness score (NOT source grading)
    consensus_level: str # 'agreed_upon', 'majority', 'khilaf', 'hasan_acceptable', 'weak_fabricated', 'unknown'
    verification_notes: str  # Auditor remarks (Arabic)
    verification_notes_translation: str  # Translation of auditor remarks

    # — Set by global_spokesperson OR wallahu_alam —
    final_native_answer: str

    # — Error handling —
    error: str | None


# ---------------------------------------------------------------------------
# FastAPI Request / Response
# ---------------------------------------------------------------------------

class HistoryEntry(BaseModel):
    """A single turn in the conversation history."""

    role: str = Field(..., pattern="^(user|assistant)$", description="Either 'user' or 'assistant'")
    content: str = Field(..., min_length=1, description="The message content")


class AskRequest(BaseModel):
    """Incoming user question with optional conversation history."""

    query: str = Field(
        ...,
        min_length=1,
        max_length=2000,
        description="User question in any supported language (ja, it, de, en, ar …)",
        json_schema_extra={"examples": ["الصلاة الفجر كم ركعة؟", "断食の条件は何ですか？"]},
    )
    history: list[HistoryEntry] = Field(
        default_factory=list,
        description="Previous conversation turns for follow-up context",
    )


class SourceReference(BaseModel):
    """A single scholarly source citation."""

    book: str = Field(..., description="Book title (e.g. صحيح البخاري)")
    hadith_no: str = Field("", description="Hadith or section number")
    text_snippet: str = Field("", description="Short Arabic excerpt")
    translation_snippet: str = Field("", description="Translation of the excerpt in user's language")


class AskResponse(BaseModel):
    """Final response returned to the frontend."""

    answer: str = Field(..., description="Answer in the user's native language")
    source_language: str = Field(..., description="Detected input language (ISO 639-1)")
    amanah_score: int = Field(..., ge=0, le=100, description="Integrity score 0–100")
    consensus_level: str = Field("unknown", description="Scholarly grading level")
    sources: list[SourceReference] = Field(default_factory=list)
    is_fallback: bool = Field(
        False,
        description="True when amanah_score < 85 → Wallahu Alam triggered",
    )
    arabic_draft: str = Field("", description="Original Arabic scholarly draft")
    arabic_query: str = Field("", description="Scholarly Arabic translation of the user query")
    verification_notes: str = Field("", description="Verifier audit remarks")
    verification_notes_translation: str = Field("", description="Translation of verifier audit remarks")
