#!/usr/bin/env sh
set -eu

branch="$(git rev-parse --abbrev-ref HEAD 2>/dev/null || true)"
if [ -z "$branch" ] || [ "$branch" = "HEAD" ]; then
  branch="$(git symbolic-ref --short HEAD 2>/dev/null || echo "")"
fi

is_main() {
  [ "$branch" = "main" ] || [ "$branch" = "master" ]
}

in_merge_or_rebase() {
  git_dir="$(git rev-parse --git-dir)"
  [ -f "$git_dir/MERGE_HEAD" ] \
    || [ -d "$git_dir/rebase-merge" ] \
    || [ -d "$git_dir/rebase-apply" ]
}

dist_in_index() {
  git diff --cached --name-only | grep -q '^dist/'
}

dist_tracked() {
  git ls-files dist | grep -q .
}

strip_dist() {
  echo "▸ Stripping dist/ from non-main branch ($branch)"
  git rm -r --cached -f dist >/dev/null 2>&1 || true
  rm -rf dist
}

if is_main; then
  exit 0
fi

if in_merge_or_rebase; then
  if dist_tracked || dist_in_index || [ -d dist ]; then
    strip_dist
  fi
  exit 0
fi

if dist_in_index; then
  echo "ERROR: dist/ cannot be committed on '$branch'."
  echo "dist/ is only allowed on main/master."
  echo "Unstage with: git restore --staged dist"
  exit 1
fi

if dist_tracked; then
  echo "ERROR: dist/ is tracked on '$branch'. Remove it:"
  echo "  git rm -r --cached dist && rm -rf dist"
  exit 1
fi

exit 0
