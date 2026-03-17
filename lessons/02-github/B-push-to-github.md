---
title: "Pushing a Local Repository to GitHub"
description: "Connect a local Git repository to GitHub and push your commits using the command line."
keywords:
  - git push
  - GitHub
  - Git
  - remote
  - origin
  - Shafayet Sadi
---

## Mental Model

Git runs on your computer.
GitHub is a remote place to store a Git repository online.

**Push** means:

> Local commits on your laptop -> remote repository on GitHub

<br><br><br><br><br>

## Before You Push (Checklist)

Make sure:

- You are inside your project folder
- The folder is a Git repository (`git status` works)
- You have at least one commit (`git log --oneline` shows something)
- You have a GitHub account and can create a new repo

<br><br><br><br><br>

## Step-by-Step: Push to a New GitHub Repo

### 1) Create an empty repository on GitHub

- GitHub -> New repository
- Choose a name (example: `cli-guess-game`)
- Do NOT initialize with README / .gitignore / license

### 2) Add the GitHub repo as a remote

Copy the HTTPS or SSH URL from GitHub, then run:

```bash
git remote add origin YOUR-REPO-URL
```

Verify:

```bash
git remote -v
```

### 3) Push your branch

If you set the default branch to `main`, this is usually what you want:

```bash
git push -u origin main
```

After that, future pushes are just:

```bash
git push
```

<br><br><br><br><br>

## Common Issues (Fast Fixes)

### "remote origin already exists"

```bash
git remote -v
```

If you added the wrong URL:

```bash
git remote set-url origin YOUR-REPO-URL
```

### "src refspec main does not match any"

This usually means you have no commits yet, or your branch is not named `main`.

Create a commit first, then:

```bash
git branch -M main
git push -u origin main
```

### GitHub asks for a password (HTTPS)

GitHub no longer accepts account passwords for Git operations over HTTPS.
Use a **Personal Access Token (PAT)** (or switch to SSH, covered in the next lesson).
