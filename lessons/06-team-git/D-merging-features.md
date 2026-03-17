---
title: "Merging Features"
description: "Merge a feature branch into main safely and cleanly."
keywords:
  - Git
  - Merge
  - Branches
  - Shafayet Sadi
---

## What Merging Means

Merging combines the work from one branch into another.
Most of the time, you merge **feature branches** into `main`.

<br><br><br><br><br>

## The Simple Merge Flow

1) Go to `main`

```bash
git switch main
git pull
```

2) Merge the feature branch

```bash
git merge feature/login-form
```

3) Push the updated main

```bash
git push
```

If Git says "Already up to date" or merges cleanly, you are done.

<br><br><br><br><br>

## Fast-Forward vs Merge Commit

- **Fast-forward**: no conflicts, history is straight
- **Merge commit**: Git records a merge point

Both are normal. Do not fear merge commits.

<br><br><br><br><br>

## After Merge Cleanup

Delete the local branch (optional but clean):

```bash
git branch -d feature/login-form
```

Delete the remote branch:

```bash
git push origin --delete feature/login-form
```

<br><br><br><br><br>

## Summary

Merging is how features become part of the main project.
Keep `main` clean, merge when ready, and remove old branches.
