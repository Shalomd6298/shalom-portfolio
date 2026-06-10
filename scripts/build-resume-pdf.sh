#!/usr/bin/env bash
# Regenerate public/resume.pdf from the live resume-print page.
# Usage: npm run build && bash scripts/build-resume-pdf.sh && npm run build
# (second build copies the fresh pdf from public/ into dist/)
set -euo pipefail
cd "$(dirname "$0")/.."

PORT="${PORT:-4321}"
URL="http://localhost:${PORT}/resume-print"

curl -sf -o /dev/null "$URL" || { echo "preview server not serving $URL — run 'npm run preview' first"; exit 1; }

npx playwright pdf --paper-format Letter "$URL" public/resume.pdf
echo "wrote public/resume.pdf ($(du -h public/resume.pdf | cut -f1))"
