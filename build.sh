#!/bin/sh
set -e

echo ">>> Building main site..."
npm run build:main

echo ">>> Done! Output is in dist/"
