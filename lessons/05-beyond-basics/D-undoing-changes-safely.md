---
title: "Undoing Changes Safely"
description: "Learn safe ways to undo mistakes without destroying your work."
keywords:
  - Git
  - Undo
  - Reset
  - Restore
  - Shafayet Sadi
---

## Git Has Three Areas

Understanding these makes undoing easy:

1) **Working Directory**: your files
2) **Staging Area**: what will be committed
3) **History**: saved commits

Different commands undo different areas.

<br><br><br><br><br>

## Undo Unstaged Changes (Working Directory)

Discard changes in a file:

```bash
git restore path/to/file
```

Discard changes in everything:

```bash
git restore .
```

Use this only if you are sure you want to lose the changes.

<br><br><br><br><br>

## Undo Staged Changes (Keep the File Changes)

Unstage a file but keep its edits:

```bash
git restore --staged path/to/file
```

This is the safe way to fix a wrong `git add`.

<br><br><br><br><br>

## Undo the Last Commit (Keep the Changes)

```bash
git reset --soft HEAD~1
```

This removes the commit but keeps your changes staged.

If you want the changes unstaged instead:

```bash
git reset HEAD~1
```

<br><br><br><br><br>

## Undo a Commit That Was Already Pushed

Use **revert** (safe for shared history):

```bash
git revert <commit-hash>
```

This creates a new commit that reverses the old one.

<br><br><br><br><br>

## Avoid This Unless You Know What You Are Doing

```bash
git reset --hard
```

This deletes changes and commits permanently.
Use it only if you are 100% sure.

<br><br><br><br><br>

## Summary

- `git restore` fixes working directory mistakes
- `git restore --staged` fixes staging mistakes
- `git reset --soft` removes the last commit safely
- `git revert` is safest for shared history

Undoing is easy when you know which area you are in.
