---
title: "Solo Developer Workflow"
description: "A simple, repeatable Git workflow for solo developers: change, run, diff, commit, repeat."
keywords:
  - Git
  - Workflow
  - Commits
  - Commit messages
  - Shafayet Sadi
---

## The Core Idea

When you work alone, consistency beats cleverness.

Good Git workflows are boring (and that is a good thing).

<br><br><br><br><br>

## The Loop (Memorize This)

Every time you change code:

1. Make one small change
2. Run the program
3. Review what changed
4. Commit with a clear message
5. Repeat

<br><br><br><br><br>

## The Command Loop

Before every commit:

```bash
git status
git diff
```

Commit the change:

```bash
git add src/main.py
git commit -m "Describe what changed and why"
```

Review your history:

```bash
git log --oneline
```

If the history reads like a story, your commits are good.

<br><br><br><br><br>

## Commit Message Cheat Sheet

Start with a verb:

- Add
- Fix
- Remove
- Refactor
- Rename

Bad commit messages (avoid these):

- update
- fix
- changes
- final
