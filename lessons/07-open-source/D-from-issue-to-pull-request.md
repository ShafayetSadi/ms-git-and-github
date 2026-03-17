---
title: "From Issue to Pull Request"
description: "Go from a GitHub issue to a clean pull request with the right steps."
keywords:
  - Open source
  - Issue
  - Pull Request
  - GitHub
  - Shafayet Sadi
---

## The Standard Flow

Open-source contributions follow a predictable path:

1) Find an issue
2) Get confirmation
3) Create a branch
4) Make changes
5) Open a PR

This is the safest and most respectful way to contribute.

<br><br><br><br><br>

## Step-by-Step Example

### 1) Comment on the issue

"Hi, I would like to work on this. Is it okay?"

### 2) Create a branch

```bash
git switch -c fix/typo-readme
```

### 3) Make your changes and commit

```bash
git add .
git commit -m "Fix typo in README"
```

### 4) Push to your fork

```bash
git push -u origin fix/typo-readme
```

### 5) Open a Pull Request on GitHub

In the PR description, link the issue:

```
Fixes #123
```

This will close the issue when merged.

<br><br><br><br><br>

## Keep Your PR Focused

- One PR = one problem
- Do not mix unrelated changes
- Smaller PRs get merged faster

<br><br><br><br><br>

## Summary

Issue -> branch -> commit -> PR.
Follow the steps and your contributions will be welcomed.
