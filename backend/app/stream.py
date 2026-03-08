import json
import logging
from typing import AsyncGenerator

from app.graph import build_graph

logger = logging.getLogger("api.stream")

_graph = None
def _get_cached_graph():
    global _graph
    if _graph is None:
        _graph = build_graph()
    return _graph

async def stream_ask(query: str, history: list) -> AsyncGenerator[str, None]:
    """
    Run the multi-agent pipeline and yield SSE messages.
    """
    graph = _get_cached_graph()
    
    # State mapping to user-friendly messages
    node_messages = {
        "polyglot_translator": "Detecting language and translating to Arabic...",
        "researcher_agent": "Searching classical databases for authentic evidence...",
        "verifier_agent": "Auditing AI output for Amanah (faithfulness)...",
        "wallahu_alam": "No definitive evidence found. Preparing fallback...",
        "global_spokesperson": "Translating verified answer to your native language..."
    }

    try:
        # We manually accumulate state because graph.get_state() fails without a checkpointer
        current_state = {"original_query": query, "conversation_history": history}

        async for output in graph.astream(
            current_state,
            stream_mode="updates",
        ):
            for node_name, node_state in output.items():
                # Accumulate the state updates
                if isinstance(node_state, dict):
                    current_state.update(node_state)

                msg = node_messages.get(node_name, f"Processing {node_name}...")
                
                # Yield a status update
                event = {
                    "type": "status",
                    "status": msg
                }
                yield f"data: {json.dumps(event)}\n\n"
                
                # If this is the final node, yield the final response data
                if node_name in ["global_spokesperson", "wallahu_alam"]:
                    amanah_score = current_state.get("amanah_score", 0)
                    is_fallback = amanah_score < 85

                    sources = [
                        {
                            "book": s.get("book", ""),
                            "hadith_no": str(s.get("hadith_no", "")),
                            "text_snippet": s.get("text_snippet", ""),
                            "translation_snippet": s.get("translation_snippet", ""),
                        }
                        for s in current_state.get("authentic_chunks", [])
                    ]

                    final_data = {
                        "type": "result",
                        "answer": current_state.get("final_native_answer", ""),
                        "source_language": current_state.get("input_language", ""),
                        "amanah_score": amanah_score,
                        "consensus_level": current_state.get("consensus_level", "unknown"),
                        "sources": sources,
                        "is_fallback": is_fallback,
                        "arabic_draft": current_state.get("arabic_scholarly_draft", ""),
                        "arabic_query": current_state.get("arabic_query", ""),
                        "verification_notes": current_state.get("verification_notes", ""),
                        "verification_notes_translation": current_state.get("verification_notes_translation", "")
                    }
                    
                    yield f"data: {json.dumps(final_data)}\n\n"

    except Exception as exc:
        logger.exception("Pipeline streaming error")
        error_msg = str(exc)
        if "429" in error_msg or "quota" in error_msg.lower() or "rate" in error_msg.lower():
            error_msg = "API rate limit reached. Please wait a moment and try again."
            
        err = {"type": "error", "detail": error_msg}
        yield f"data: {json.dumps(err)}\n\n"
