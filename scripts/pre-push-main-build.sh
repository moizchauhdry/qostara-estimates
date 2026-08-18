#!/usr/bin/env sh
set -eu

branch="$(git rev-parse --abbrev-ref HEAD)"
case "$branch" in
  main|master) ;;
  *) exit 0 ;;
esac

echo "▸ Building production dist/ for $branch..."
npm run build:dist

if [ -d dist/.next/dev ] || [ -d dist/.next/cache ]; then
  echo "ERROR: dist/.next contains forbidden folder (dev or cache)"
  exit 1
fi

oversized="$(find dist -type f -size +50M -print 2>/dev/null || true)"
if [ -n "$oversized" ]; then
  echo "ERROR: files larger than 50MB in dist/:"
  echo "$oversized"
  exit 1
fi

git add dist

if git diff --cached --quiet -- dist; then
  echo "▸ dist/ unchanged — nothing to commit"
  exit 0
fi

git commit -m "chore: update production dist" -- dist

echo "▸ Pushing $branch with dist/ (no-verify)..."
git push --no-verify

echo ""
echo "SUCCESS: production dist committed and pushed."
echo "The outer husky push is cancelled on purpose (avoids GitHub ref lock)."
echo "Remote $branch is up to date."
exit 1
