---
title: ".gitignore"
description: "Ignore files you do not want to commit (build outputs, secrets, caches)."
keywords:
  - Git
  - gitignore
  - Ignore
  - Shafayet Sadi
---

## Why .gitignore Exists

Git will track everything inside your project unless you tell it not to.
A `.gitignore` file is the place where you say:

- "Do not track build files"
- "Do not track secrets"
- "Do not track caches"

This keeps your repository clean and safe.

<br><br><br><br><br>

## What Goes Inside .gitignore

Common things to ignore:

- Build outputs (`dist/`, `build/`)
- Dependencies (`node_modules/`, `vendor/`)
- System files (`.DS_Store`, `Thumbs.db`)
- Environment files (`.env`, `.env.local`)
- Cache folders (`__pycache__/`, `.cache/`)

A `.gitignore` file is just a list of patterns.
One pattern per line.

<br><br><br><br><br>

## Basic Rules (Simple Cheatsheet)

- `#` starts a comment
- `*` matches anything
- `?` matches one character
- `**` matches folders recursively
- A trailing `/` means a folder
- `!` means "do NOT ignore" (negation)

Example:

```
# Ignore all log files
*.log

# Ignore node_modules folder
node_modules/

# Ignore everything in /build
build/

# But keep this file
!build/README.md
```

<br><br><br><br><br>

## Example .gitignore (Web Project)

```
# Dependencies
node_modules/

# Builds
build/
dist/

# Environment
.env
.env.local

# Logs
*.log

# OS files
.DS_Store
Thumbs.db
```

<br><br><br><br><br>

## Important: It Does NOT Remove Tracked Files

If a file is already committed, adding it to `.gitignore` will not remove it.

To remove a tracked file from Git (but keep it on your computer):

```bash
git rm -r --cached node_modules
git commit -m "Remove node_modules from tracking"
```

<br><br><br><br><br>

## Useful Commands

See ignored files:

```bash
git status --ignored
```

Check why a file is ignored:

```bash
git check-ignore -v path/to/file
```

<br><br><br><br><br>

## Pro Tip: Global .gitignore

If you want to ignore some files in every project:

```bash
git config --global core.excludesfile ~/.gitignore_global
```

Now create `~/.gitignore_global` and add patterns like `.DS_Store`.

Keep your repos clean and your history professional.
