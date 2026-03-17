---
title: "Viewing History Better"
description: "Learn powerful Git log and diff commands to explore history quickly."
keywords:
  - Git
  - History
  - Log
  - Diff
  - Shafayet Sadi
---

## Why History Matters

Git is not just for saving work. It is for **understanding** work.

Good history skills help you:

- Find when a bug was introduced
- See who changed a file and why
- Review progress quickly

<br><br><br><br><br>

## The Most Useful Log View

```bash
git log --oneline --graph --decorate --all
```

This gives you:

- Short commit messages
- Branch lines (graph)
- Tags and branch names

Use this command often.

<br><br><br><br><br>

## See What Changed in a Commit

```bash
git show <commit-hash>
```

Example:

```bash
git show a1b2c3d
```

This shows:

- The commit message
- The files changed
- The exact lines added/removed

<br><br><br><br><br>

## See Summary Instead of Full Diff

```bash
git log --stat
```

If you only want the file list:

```bash
git log --name-only
```

<br><br><br><br><br>

## Compare Two Points in History

```bash
git diff <commit-1> <commit-2>
```

Example:

```bash
git diff main feature/login
```

This shows what would change if you merged.

<br><br><br><br><br>

## Filter the History

By author:

```bash
git log --author="sadi"
```

By date:

```bash
git log --since="2024-01-01"
```

Only for a file:

```bash
git log -- path/to/file
```

<br><br><br><br><br>

## Quick Recipes

Find the last change to a file:

```bash
git log -1 -- path/to/file
```

See who edited each line:

```bash
git blame path/to/file
```

Search commit messages:

```bash
git log --grep="login"
```

<br><br><br><br><br>

## Summary

You do not need to memorize everything.
Just remember the core tools:

- `git log` for history
- `git show` for details
- `git diff` for comparison

These will make you faster and more confident.
