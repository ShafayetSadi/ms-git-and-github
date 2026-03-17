---
title: "Cloning and Pulling a GitHub Repository"
description: "Download a GitHub repository to your computer and keep it up to date."
keywords:
  - git clone
  - git pull
  - GitHub
  - Git
  - remote
  - origin
  - Shafayet Sadi
---

## Clone vs Pull (Do Not Mix Them Up)

### `git clone` = first time download

Clone creates a brand-new local copy of a repository (including history):

```bash
git clone YOUR-REPO-URL
cd REPO-NAME
```

What you get automatically:

- A local Git repository
- A remote named `origin` pointing to GitHub

### `git pull` = update an existing clone

Pull brings the latest commits from GitHub into your current branch:

```bash
git pull
```

If you want to be explicit:

```bash
git pull origin main
```

<br><br><br><br><br>

## A Safe Habit for Shared Projects

When working with others, do this every time before you start coding:

```bash
git status
git pull
```

This reduces merge conflicts and surprises.
