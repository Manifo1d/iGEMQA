#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Local HTTP Server & REST API for iGEM Real-Time Defense Assistant
=================================================================
- Serves the web UI on http://127.0.0.1:8788 (so Chrome remembers microphone permissions)
- Automatically syncs `data/qa_items.md` <-> `data/qa_items.json` <-> `data/knowledge_base.js`
- Provides REST API endpoints for reading and modifying the Reference Answer Database:
    GET    /api/kb        -> Returns full knowledge base JSON (qa_items, docs, glossary, slides, system_prompt)
    GET    /api/qa        -> Returns all Q&A items from data/qa_items.json
    POST   /api/qa        -> Upserts a Q&A item (or replaces full array if body is list) and syncs Markdown + JS
    DELETE /api/qa/<id>   -> Deletes a Q&A item by id or code and syncs Markdown + JS
    POST   /api/reload    -> Re-runs scripts/sync_db.py and returns updated counts
"""

import argparse
import http.server
import json
import socketserver
import urllib.parse
from pathlib import Path

from scripts.sync_db import (
    DOCS_JSON_PATH,
    GLOSSARY_JSON_PATH,
    PROMPT_MD_PATH,
    QA_JSON_PATH,
    QA_MD_PATH,
    ROOT_DIR,
    SLIDES_JSON_PATH,
    build_knowledge_base_js,
    export_qa_to_markdown,
    load_json,
    main as sync_main,
    parse_qa_from_markdown,
    save_json,
)


class DefenseAssistantHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT_DIR), **kwargs)

    def _send_json(self, status_code: int, payload: dict | list):
        raw = json.dumps(payload, ensure_ascii=False, indent=2).encode("utf-8")
        self.send_response(status_code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(raw)))
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()
        self.wfile.write(raw)

    def do_OPTIONS(self):
        self._send_json(200, {"ok": True})

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path == "/api/kb":
            # Auto-sync if qa_items.md was edited more recently than qa_items.json
            if QA_MD_PATH.exists() and QA_JSON_PATH.exists():
                if QA_MD_PATH.stat().st_mtime > QA_JSON_PATH.stat().st_mtime:
                    existing = load_json(QA_JSON_PATH, [])
                    updated = parse_qa_from_markdown(QA_MD_PATH.read_text(encoding="utf-8"), existing)
                    save_json(QA_JSON_PATH, updated)
                    build_knowledge_base_js()

            kb = {
                "system_prompt": PROMPT_MD_PATH.read_text(encoding="utf-8").strip() if PROMPT_MD_PATH.exists() else "",
                "slides": load_json(SLIDES_JSON_PATH, []),
                "qa_items": load_json(QA_JSON_PATH, []),
                "docs": load_json(DOCS_JSON_PATH, []),
                "glossary": load_json(GLOSSARY_JSON_PATH, []),
            }
            return self._send_json(200, kb)

        if parsed.path == "/api/qa":
            return self._send_json(200, load_json(QA_JSON_PATH, []))

        return super().do_GET()

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        length = int(self.headers.get("Content-Length", "0"))
        body_raw = self.rfile.read(length).decode("utf-8") if length > 0 else "{}"

        if parsed.path == "/api/reload":
            if QA_MD_PATH.exists():
                existing = load_json(QA_JSON_PATH, [])
                updated = parse_qa_from_markdown(QA_MD_PATH.read_text(encoding="utf-8"), existing)
                save_json(QA_JSON_PATH, updated)
            n_qa, n_docs, n_gloss, n_slides = build_knowledge_base_js()
            return self._send_json(200, {
                "ok": True,
                "qa_count": n_qa,
                "doc_count": n_docs,
                "glossary_count": n_gloss,
                "slide_count": n_slides,
            })

        if parsed.path == "/api/qa":
            try:
                payload = json.loads(body_raw)
            except Exception as e:
                return self._send_json(400, {"ok": False, "error": f"Invalid JSON: {e}"})

            qa_items = load_json(QA_JSON_PATH, [])
            if isinstance(payload, list):
                qa_items = payload
            elif isinstance(payload, dict):
                target_id = str(payload.get("id") or payload.get("code") or "").strip()
                if not target_id:
                    return self._send_json(400, {"ok": False, "error": "Missing id or code"})
                replaced = False
                for idx, item in enumerate(qa_items):
                    if item.get("id") == target_id or item.get("code") == target_id:
                        qa_items[idx] = {**item, **payload}
                        replaced = True
                        break
                if not replaced:
                    qa_items.append(payload)
            else:
                return self._send_json(400, {"ok": False, "error": "Payload must be object or array"})

            save_json(QA_JSON_PATH, qa_items)
            QA_MD_PATH.write_text(export_qa_to_markdown(qa_items), encoding="utf-8")
            build_knowledge_base_js()
            return self._send_json(200, {"ok": True, "qa_count": len(qa_items), "qa_items": qa_items})

        return self._send_json(404, {"ok": False, "error": "Not found"})

    def do_DELETE(self):
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path.startswith("/api/qa/"):
            target = urllib.parse.unquote(parsed.path[len("/api/qa/"):]).strip()
            qa_items = load_json(QA_JSON_PATH, [])
            filtered = [x for x in qa_items if x.get("id") != target and x.get("code") != target]
            save_json(QA_JSON_PATH, filtered)
            QA_MD_PATH.write_text(export_qa_to_markdown(filtered), encoding="utf-8")
            build_knowledge_base_js()
            return self._send_json(200, {"ok": True, "qa_count": len(filtered)})
        return self._send_json(404, {"ok": False, "error": "Not found"})


def run_server(port: int = 8788):
    sync_main([])
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("127.0.0.1", port), DefenseAssistantHandler) as httpd:
        print(f"iGEM Real-Time Defense Assistant running at http://127.0.0.1:{port}/index.html")
        print("REST API endpoints: GET/POST /api/qa | GET /api/kb | POST /api/reload")
        httpd.serve_forever()


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--port", type=int, default=8788)
    args = parser.parse_args()
    run_server(args.port)
