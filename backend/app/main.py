"""Hikmah API — FastAPI entry point.

Exposes:
  POST /ask   — Submit a question, get a verified scholarly answer
  GET  /health — Liveness check
"""

from __future__ import annotations

import logging
import os

from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from .graph import build_graph
from .schemas import AskRequest, AskResponse, SourceReference

load_dotenv()

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(name)s] %(levelname)s — %(message)s",
)
logger = logging.getLogger("hikmah.api")

# ---------------------------------------------------------------------------
# App
# ---------------------------------------------------------------------------

app = FastAPI(
    title="Hikmah API",
    description="Global Multi-Agent RAG for Authentic Islamic Knowledge",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # tighten in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------------------------------------------------------------------
# Compiled graph (singleton)
# ---------------------------------------------------------------------------

_graph = None


def _get_graph():
    global _graph
    if _graph is None:
        _graph = build_graph()
    return _graph


# ---------------------------------------------------------------------------
# Endpoints
# ---------------------------------------------------------------------------


@app.get("/health")
async def health():
    """Liveness probe."""
    return {"status": "ok", "service": "hikmah"}


@app.post("/ask", response_model=AskResponse)
async def ask(req: AskRequest):
    """Run the full multi-agent pipeline and return a verified answer."""
    logger.info("Received query: %s", req.query[:80])

    graph = _get_graph()

    try:
        result = graph.invoke({"original_query": req.query})
    except Exception as exc:
        logger.exception("Pipeline error")
        raise HTTPException(status_code=500, detail=str(exc)) from exc

    amanah_score = result.get("amanah_score", 0)
    is_fallback = amanah_score < 85

    sources = [
        SourceReference(
            book=s.get("book", ""),
            hadith_no=str(s.get("hadith_no", "")),
            text_snippet=s.get("text_snippet", ""),
        )
        for s in result.get("authentic_chunks", [])
    ]

    return AskResponse(
        answer=result.get("final_native_answer", ""),
        source_language=result.get("input_language", ""),
        amanah_score=amanah_score,
        sources=sources,
        is_fallback=is_fallback,
        arabic_draft=result.get("arabic_scholarly_draft", ""),
        verification_notes=result.get("verification_notes", ""),
    )
