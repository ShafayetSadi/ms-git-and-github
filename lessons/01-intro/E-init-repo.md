---
title: "Initialize a Git Repository"
description: "Create your first Git repository and understand the basic Git workflow."
keywords:
  - Git
  - Repository
  - Missing Semester
  - Shafayet Sadi
---

## What Is a Git Repository?

A **Git repository (repo)** is simply a **project folder that Git is tracking**.

Once a folder becomes a Git repository:

- Git can track changes to files inside it
- Git remembers changes you save
- Git builds a history over time

At the start, it’s just a normal folder — Git only adds **tracking**, not magic.

<br><br><br><br><br>

## Creating Your First Repository

Let’s create a new project folder and turn it into a Git repository.

- First, create the folder and navigate into it:

  ```bash
  mkdir ms-git
  cd ms-git
  ```

- Now, initialize Git:

  ```bash
  git init
  ```

- You should see a message saying something like:

  ```bash
  ➜  ms-git git init
  Initialized empty Git repository in /shafayetsadi/ms-git/.git/
  ➜  ms-git git:(main)
  ```

<br><br><br>

- Run `ls -la` to see the hidden `.git` folder:

  ```bash
  ls -la
  ```

- You should see the `.git` folder listed:

  ```bash
  ➜  ms-git git:(main) ls -la
  total 12
  drwxrwxr-x  3 shafayetsadi shafayetsadi 4096 Jun 25 09:12 .
  drwxr-xr-x 82 shafayetsadi shafayetsadi 4096 Jun 25 09:13 ..
  drwxrwxr-x  7 shafayetsadi shafayetsadi 4096 Jun 25 09:12 .git
  ➜  ms-git git:(main)
  ```

<br><br><br><br><br>

### What just happened?

Git created a hidden folder named:

```bash
.git/
```

This folder stores:

- project history
- commits
- configuration

📌 If you delete the `.git` folder, your project is no longer a Git repository. And you lose all your history and changes.

<br><br><br><br><br>

## Adding Files to the Repository

- Create a file and add some content:

  ```bash
  touch todo.txt
  echo "Buy groceries" > todo.txt

  cat todo.txt
  ```

- Check Git’s status:

  ```bash
  ➜  ms-git git:(main) git status
  On branch main

  No commits yet

  Untracked files:
          todo.txt

  nothing added to commit but untracked files present
  ➜  ms-git git:(main)
  ```

> Git sees the file, but is not tracking it yet

<br><br><br>

### Stage the File

- To add `todo.txt` to the staging area:

  ```bash
  git add todo.txt
  ```

- Check Git's status again:

  ```bash
  ➜  ms-git git:(main) ✗ git status
  On branch main

  No commits yet

  Changes to be committed:
          new file:   todo.txt

  ➜  ms-git git:(main) ✗
  ```

> So, `todo.txt` is in the **staging area** — ready to be saved.

<br><br><br>

### Make Your First Commit

- To save `todo.txt` to the repository:

  ```bash
  git commit -m "Create initial todo list"
  ```

- Run `git status` again to confirm:

  ```bash
  ➜  ms-git git:(main) git status
  On branch main
  nothing to commit, working tree clean
  ➜  ms-git git:(main)
  ```

This means every change has been saved in a commit.

🎉 Congratulations!

> This commit is a snapshot of your project at this moment in time.

<br><br><br><br><br>

## How Git Thinks About Your Project

To understand Git, you need to understand **three places**.

```mermaid
flowchart LR
    WD[Working Directory]
    ADD([git add])
    SA[Staging Area]
    COMMIT([git commit])
    REPO[Repository History]

    WD --> ADD --> SA --> COMMIT --> REPO
```

📌 This mental model will explain **almost every Git command** you’ll learn.

<br><br><br><br><br>

## Working Directory

This is your actual project folder:

- where you create and edit files

Any change you make starts here.

<br><br><br><br><br>

## Staging Area

- This is where you tell Git:

> “These are the changes I want to save next.”

- You move changes here using:

```bash
git add file_name
```

<br><br><br><br><br>

## Repository

This is Git’s memory

> every commit is stored here as part of your project's history

When you run:

```bash
git commit
```

Git takes everything from the staging area and stores it permanently.

<br><br><br><br><br>

## Key Terms (Keep These in Mind)

- **Working directory:** Your current files and edits
- **Staging area:** The place where changes wait before being committed
- **Repository (repo):** A project folder tracked by Git
- **Commit:** A saved snapshot of the entire project at a point in time
- **Tracked file:** A file Git knows about
- **Untracked file:** A file Git sees but is not tracking yet

You don’t need to memorize these — you’ll use them repeatedly.
