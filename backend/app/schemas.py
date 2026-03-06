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

    # — Set by polyglot_translator —
    arabic_query: str  # Scholarly Arabic reformulation

    # — Set by researcher_agent —
    authentic_chunks: list[dict]  # {text, source, book, hadith_no}
    arabic_scholarly_draft: str  # Dalil-First Arabic answer

    # — Set by verifier_agent —
    amanah_score: int  # 0–100 integrity score
    verification_notes: str  # Auditor remarks (Arabic)

    # — Set by global_spokesperson OR wallahu_alam —
    final_native_answer: str

    # — Error handling —
    error: str | None


# ---------------------------------------------------------------------------
# FastAPI Request / Response
# ---------------------------------------------------------------------------

class AskRequest(BaseModel):
    """Incoming user question."""

    query: str = Field(
        ...,
        min_length=1,
        max_length=2000,
        description="User question in any supported language (ja, it, de, en, ar …)",
        json_schema_extra={"examples": ["الصلاة الفجر كم ركعة؟", "断食の条件は何ですか？"]},
    )


class SourceReference(BaseModel):
    """A single scholarly source citation."""

    book: str = Field(..., description="Book title (e.g. صحيح البخاري)")
    hadith_no: str = Field("", description="Hadith or section number")
    text_snippet: str = Field("", description="Short Arabic excerpt")


class AskResponse(BaseModel):
    """Final response returned to the frontend."""

    answer: str = Field(..., description="Answer in the user's native language")
    source_language: str = Field(..., description="Detected input language (ISO 639-1)")
    amanah_score: int = Field(..., ge=0, le=100, description="Integrity score 0–100")
    sources: list[SourceReference] = Field(default_factory=list)
    is_fallback: bool = Field(
        False,
        description="True when amanah_score < 85 → Wallahu Alam triggered",
    )
    arabic_draft: str = Field("", description="Original Arabic scholarly draft")
    arabic_query: str = Field("", description="Scholarly Arabic translation of the user query")
    verification_notes: str = Field("", description="Verifier audit remarks")
