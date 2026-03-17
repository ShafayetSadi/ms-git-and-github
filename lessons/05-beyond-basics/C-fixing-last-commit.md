---
title: "Fixing the Last Commit"
description: "Learn how to safely amend your most recent commit."
keywords:
  - Git
  - Commit
  - Amend
  - Shafayet Sadi
---

## When You Need This

You just committed, and then you realize:

- You forgot a file
- Your commit message is wrong
- You made a small mistake

You do not need a new commit for tiny fixes.
You can **amend** the last one.

<br><br><br><br><br>

## Fixing a Missing File

1) Stage the missing file

```bash
git add path/to/file
```

2) Amend the last commit

```bash
git commit --amend
```

Git will open your editor.
Save and close to keep the same message or edit it.

<br><br><br><br><br>

## Fixing the Commit Message Only

```bash
git commit --amend -m "Better commit message"
```

This keeps the content but updates the message.

<br><br><br><br><br>

## Important Rule (Very Important)

Only amend commits that are **local** (not pushed).

If you already pushed the commit to GitHub and others may have pulled it:

- Do NOT amend
- Make a new commit instead

Amending a public commit changes history and can confuse teammates.

<br><br><br><br><br>

## Quick Summary

- `git commit --amend` rewrites the last commit
- Use it for small fixes
- Only do it before pushing

This one command saves you from messy history.
