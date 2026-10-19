#!/usr/bin/env bash
# Builds the litt.md gallery with the type lab injected, ready to publish as an artifact.
# Usage: split-test/build.sh <litt.md checkout> <work dir>
# Output: <work dir>/page.html plus <work dir>/littmd/gallery/dist/assets/*
set -euo pipefail
here="$(cd "$(dirname "$0")" && pwd)"
src="$(cd "${1:?litt.md checkout}" && pwd)"
work="$(mkdir -p "${2:?work dir}" && cd "$2" && pwd)"

rm -rf "$work/littmd" && mkdir -p "$work/littmd"
tar --exclude=.git --exclude=node_modules -C "$src" -cf - . | tar -C "$work/littmd" -xf -
cd "$work/littmd/gallery"
npm ci --no-audit --no-fund
npm run -s sync:tokens && npm run -s gen:docs && npm run -s gen:registry && npm run -s gen:llms
npx vite build --base ./
node "$here/inject.mjs" dist/index.html "$work/page.html"
