---
title: "Pushing a Local Repo to GitHub"
description: "Learn how to push your local project to GitHub using Git."
keywords:
  - git push
  - GitHub
  - CLI
  - Shafayet Sadi
---

## What is a Push?

A push sends your local commits (changes) to the remote repository on GitHub.

## Steps to Push

1. Create a repository on GitHub (without README).
2. In terminal:

```bash
git remote add origin https://github.com/YOUR-USERNAME/REPO-NAME.git
git branch -M main
git push -u origin main
```

3. Done! You can now see your code on GitHub.

## Quick Recap

- `remote add origin` — connects your local project to GitHub.

- `push` — uploads your commits.

🎯 Tip: You only do remote add origin once. Then, just git push.
