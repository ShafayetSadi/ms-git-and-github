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

## Working Tree, Staging Area, Repository

A **working tree** is the slice of the project at any given moment (usually it’s the current moment). When you add or edit code, you change the working tree.

A **staging area** is where you stage the changes from the working tree before making them permanent.

A **repo** (repository) is the collection of permanent changes (commits) made throughout the history of the project. Typically, there is a single remote repo (managed by GitHub/GitLab/etc) and many local repos — one for each developer involved in a project.

When you make a change in the staging area permanent, it is removed from the staging area and committed to the local repo. A commit is the permanent record of that change. The repo contains all the commits that have been made.

When you checkout a specific commit, the working tree is updated to reflect the project state at the time of that commit.

Local and remote repos are frequently synchronized so that all repos contain all commits from all developers.

```text
┌──────────────┐                 ┌──────────────┐
│ local        │     push ->     │ remote       │
│ repo         │    <- pull      │ repo         │
└──────────────┘                 └──────────────┘
      │
check │   ↑↓ commit / reset
out   │
      │   ┌──────────────┐
      │   │ staging area │
      │   └──────────────┘
      │   
      ▽   ↑↓ add / restore
┌──────────────┐
│ working tree │
│ .            │
│ ├── go.mod   │
│ └── main.go  │
└──────────────┘
```

## Key Terms

- repo: short for repository, a git tracked project
- commit: A point in time representing the project in its entirety.
- staging area
- staged
- tracked
- untracked
-
