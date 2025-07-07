#!/bin/bash
set -e
cd "$(dirname "$0")/.."
cd frontend
npm install
npm run build
cd ..
rm -rf backend/dist
mkdir -p backend/dist
cp -r frontend/dist/* backend/dist/
