"""Cloudflare Vectorize client — async REST API wrapper.

Wraps the Cloudflare Vectorize v2 REST API for query and upsert operations.
Designed for use from a FastAPI backend running on Render (not Workers).
"""

from __future__ import annotations

import logging
from typing import Any

import httpx

logger = logging.getLogger("hikmah.vectorize")

_BASE = "https://api.cloudflare.com/client/v4/accounts"


class VectorizeClient:
    """Thin wrapper around Cloudflare Vectorize REST API."""

    def __init__(self, account_id: str, api_token: str, index_name: str) -> None:
        self._account_id = account_id
        self._api_token = api_token
        self._index_name = index_name
        self._base_url = f"{_BASE}/{account_id}/vectorize/v2/indexes/{index_name}"
        self._headers = {
            "Authorization": f"Bearer {api_token}",
            "Content-Type": "application/json",
        }

    # ------------------------------------------------------------------
    # Query — similarity search
    # ------------------------------------------------------------------

    def query(
        self,
        vector: list[float],
        top_k: int = 5,
        return_metadata: bool = True,
    ) -> list[dict[str, Any]]:
        """Search the index for nearest neighbours.

        Returns a list of metadata dicts from the top-k matches.
        Falls back to an empty list if credentials are missing or the
        index is unreachable (allows local dev without Cloudflare).
        """
        if not self._account_id or not self._api_token:
            logger.warning("Vectorize credentials not set — returning empty results")
            return []

        try:
            with httpx.Client(timeout=15) as client:
                resp = client.post(
                    f"{self._base_url}/query",
                    headers=self._headers,
                    json={
                        "vector": vector,
                        "topK": top_k,
                        "returnMetadata": "all" if return_metadata else "none",
                    },
                )
                resp.raise_for_status()
                data = resp.json()

            matches = data.get("result", {}).get("matches", [])
            return [
                {
                    "id": m.get("id", ""),
                    "score": m.get("score", 0.0),
                    "metadata": m.get("metadata", {}),
                }
                for m in matches
            ]
        except httpx.HTTPError as exc:
            logger.error("Vectorize query failed: %s", exc)
            return []

    # ------------------------------------------------------------------
    # Upsert — insert or update vectors
    # ------------------------------------------------------------------

    def upsert(self, vectors: list[dict[str, Any]]) -> int:
        """Upsert vectors into the index.

        Each item in `vectors` should have:
          - id: str
          - values: list[float]
          - metadata: dict (optional)

        Returns the count of successfully upserted vectors.
        """
        if not self._account_id or not self._api_token:
            logger.warning("Vectorize credentials not set — skipping upsert")
            return 0

        # Vectorize expects NDJSON for upsert
        ndjson_lines = []
        for v in vectors:
            import json

            ndjson_lines.append(json.dumps({
                "id": v["id"],
                "values": v["values"],
                "metadata": v.get("metadata", {}),
            }))

        body = "\n".join(ndjson_lines)

        try:
            with httpx.Client(timeout=30) as client:
                resp = client.post(
                    f"{self._base_url}/upsert",
                    headers={
                        **self._headers,
                        "Content-Type": "application/x-ndjson",
                    },
                    content=body,
                )
                resp.raise_for_status()
                data = resp.json()

            count = data.get("result", {}).get("mutationId", 0)
            logger.info("Upserted batch — mutation ID: %s", count)
            return len(vectors)
        except httpx.HTTPError as exc:
            logger.error("Vectorize upsert failed: %s", exc)
            return 0
