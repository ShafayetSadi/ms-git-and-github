---
title: "Creating Feature Branches"
description: "Create clean, well-named branches for new features or fixes."
keywords:
  - Git
  - Branches
  - Feature Branch
  - Shafayet Sadi
---

## Why Create Feature Branches?

Every new feature or fix should live in its own branch.
This keeps `main` clean and makes reviews easy.

<br><br><br><br><br>

## Step-by-Step

### 1) Start from the latest main

```bash
git switch main
git pull
```

### 2) Create a new branch

```bash
git switch -c feature/login-form
```

### 3) Work and commit normally

```bash
git add .
git commit -m "Add login form layout"
```

### 4) Push the branch to GitHub

```bash
git push -u origin feature/login-form
```

Now GitHub can see your branch.

<br><br><br><br><br>

## Branch Naming Tips

Use short, clear names:

- `feature/` for new features
- `fix/` for bug fixes
- `docs/` for documentation
- `chore/` for cleanup

Examples:

- `feature/user-profile`
- `fix/login-error`
- `docs/readme-update`

<br><br><br><br><br>

## Summary

Feature branches isolate work and make collaboration clean.
Create them early, keep them focused, and delete them after merge.
