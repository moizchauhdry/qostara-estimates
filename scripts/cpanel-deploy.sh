#!/usr/bin/env sh
set -eu

cd "$(dirname "$0")/.."

branch="$(git rev-parse --abbrev-ref HEAD)"
if [ "$branch" != "main" ] && [ "$branch" != "master" ]; then
  echo "ERROR: deploy:cpanel must run on main (current: $branch)"
  exit 1
fi

remote_branch="main"
if [ "$branch" = "master" ]; then
  remote_branch="master"
fi

echo "▸ Pulling origin/$remote_branch..."
git pull --ff-only origin "$remote_branch"

if [ ! -d dist/.next ]; then
  echo "ERROR: dist/.next is missing after pull. Push a production dist from main first."
  exit 1
fi

echo "▸ Applying dist/.next → .next"
rm -rf .next
cp -R dist/.next .next

if [ -d dist/public ]; then
  echo "▸ Syncing dist/public → public"
  mkdir -p public
  cp -R dist/public/. public/
fi

if [ -f dist/server.js ]; then
  echo "▸ Copying dist/server.js → server.js"
  cp dist/server.js server.js
fi

mkdir -p tmp
touch tmp/restart.txt
echo "▸ Passenger restart triggered (tmp/restart.txt)"
echo "SUCCESS: cPanel deploy applied."
