---
title: "Initialize a Git Repository"
description: "Create your first Git repository and understand its structure."
keywords:
  - Git
  - Repository
  - Shafayet Sadi
---

## What is a Repository?

A folder or directory tracked by Git.

## Create One

```bash
mkdir git-n-github
cd git-n-github
```

```bash
git init
```

Now you’ll see a .git/ folder – Git is watching this folder now.

## Add Files

```bash
touch main.py
git add main.py
git commit -m "Initial commit"
```

You’ve made your first version!
