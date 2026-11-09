#!/bin/bash
cd "$(dirname "$0")"
PORT=8765
URL="http://127.0.0.1:${PORT}/index.html"

if ! lsof -i ":${PORT}" >/dev/null 2>&1; then
  nohup python3 server.py --port "${PORT}" >/tmp/igem_qa_server.log 2>&1 &
  sleep 0.5
fi

if [ -d "/Applications/Google Chrome.app" ]; then
  open -a "Google Chrome" "$URL"
else
  open "$URL"
fi
