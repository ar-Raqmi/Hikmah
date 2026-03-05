#!/usr/bin/env python3
"""Shamela HTML → Cloudflare Vectorize ingestion pipeline.

Usage:
    python -m scripts.ingest_shamela --input-dir ./shamela_export --batch-size 50

Steps:
  1. Glob *.htm files from the input directory.
  2. Strip HTML tags with BeautifulSoup (preserving Arabic content).
  3. Chunk text into 400-word blocks with 50-word overlap.
  4. Generate embeddings via Google text-embedding-004.
  5. Upsert to Cloudflare Vectorize in batches.
"""

from __future__ import annotations

import argparse
import hashlib
import logging
import os
import sys
from glob import glob
from pathlib import Path

import google.generativeai as genai
from bs4 import BeautifulSoup
from dotenv import load_dotenv

# Add parent to path so we can import the vectorize client
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from app.vectorize import VectorizeClient  # noqa: E402

load_dotenv()
logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s — %(message)s")
logger = logging.getLogger("ingest")

# ---------------------------------------------------------------------------
# 1. Parse HTML
# ---------------------------------------------------------------------------


def extract_text(html_path: str) -> str:
    """Read a Shamela HTML export and return clean Arabic text."""
    with open(html_path, encoding="utf-8", errors="replace") as f:
        soup = BeautifulSoup(f.read(), "html.parser")

    # Remove script/style elements
    for tag in soup(["script", "style", "meta", "link"]):
        tag.decompose()

    text = soup.get_text(separator="\n", strip=True)
    # Collapse excessive whitespace while preserving Arabic structure
    lines = [ln.strip() for ln in text.splitlines() if ln.strip()]
    return "\n".join(lines)


# ---------------------------------------------------------------------------
# 2. Chunk with overlap
# ---------------------------------------------------------------------------


def chunk_text(
    text: str,
    chunk_size: int = 400,
    overlap: int = 50,
) -> list[str]:
    """Split text into word-based chunks with overlap."""
    words = text.split()
    if not words:
        return []

    chunks: list[str] = []
    start = 0
    while start < len(words):
        end = start + chunk_size
        chunk = " ".join(words[start:end])
        chunks.append(chunk)
        start += chunk_size - overlap

    return chunks


# ---------------------------------------------------------------------------
# 3. Embed
# ---------------------------------------------------------------------------


def embed_texts(texts: list[str]) -> list[list[float]]:
    """Generate embeddings using Google text-embedding-004."""
    genai.configure(api_key=os.environ["GOOGLE_API_KEY"])

    vectors: list[list[float]] = []
    # API supports batches of up to 100
    for i in range(0, len(texts), 100):
        batch = texts[i : i + 100]
        result = genai.embed_content(
            model="models/text-embedding-004",
            content=batch,
            task_type="retrieval_document",
        )
        vectors.extend(result["embedding"])
        logger.info("Embedded batch %d–%d", i, i + len(batch))

    return vectors


# ---------------------------------------------------------------------------
# 4. Upsert
# ---------------------------------------------------------------------------


def make_id(filename: str, chunk_idx: int) -> str:
    """Deterministic ID from filename + chunk index."""
    raw = f"{filename}::{chunk_idx}"
    return hashlib.sha256(raw.encode()).hexdigest()[:24]


def run(input_dir: str, batch_size: int = 50) -> None:
    """Full ingestion pipeline."""
    vc = VectorizeClient(
        account_id=os.environ["CLOUDFLARE_ACCOUNT_ID"],
        api_token=os.environ["CLOUDFLARE_API_TOKEN"],
        index_name="hikmah-sahih-index",
    )

    htm_files = sorted(glob(os.path.join(input_dir, "*.htm")))
    if not htm_files:
        logger.error("No .htm files found in %s", input_dir)
        return

    logger.info("Found %d files to process", len(htm_files))

    all_chunks: list[dict] = []
    for fpath in htm_files:
        fname = os.path.basename(fpath)
        text = extract_text(fpath)
        chunks = chunk_text(text)
        logger.info("  %s → %d chunks", fname, len(chunks))

        for idx, chunk in enumerate(chunks):
            all_chunks.append({
                "id": make_id(fname, idx),
                "text": chunk,
                "metadata": {
                    "source_file": fname,
                    "chunk_index": idx,
                    "text": chunk[:500],  # store truncated text in metadata
                },
            })

    logger.info("Total chunks: %d — generating embeddings…", len(all_chunks))

    texts = [c["text"] for c in all_chunks]
    vectors = embed_texts(texts)

    # Build upsert payloads
    payloads = [
        {
            "id": c["id"],
            "values": v,
            "metadata": c["metadata"],
        }
        for c, v in zip(all_chunks, vectors)
    ]

    # Batch upsert
    total_upserted = 0
    for i in range(0, len(payloads), batch_size):
        batch = payloads[i : i + batch_size]
        count = vc.upsert(batch)
        total_upserted += count
        logger.info("Upserted batch %d–%d (%d vectors)", i, i + len(batch), count)

    logger.info("✅ Done — %d vectors upserted to Cloudflare Vectorize", total_upserted)


# ---------------------------------------------------------------------------
# CLI
# ---------------------------------------------------------------------------

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Ingest Shamela HTML → Vectorize")
    parser.add_argument("--input-dir", required=True, help="Directory with *.htm files")
    parser.add_argument("--batch-size", type=int, default=50, help="Upsert batch size")
    args = parser.parse_args()
    run(args.input_dir, args.batch_size)
