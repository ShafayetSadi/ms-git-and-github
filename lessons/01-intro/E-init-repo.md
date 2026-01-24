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
- Git watches files inside it
- Git remembers changes you save
- Git builds a history over time

At the start, it’s just a normal folder — Git only adds **tracking**, not magic.

---

## Creating Your First Repository

Let’s create a new project folder and turn it into a Git repository.

```bash
mkdir git-n-github
cd git-n-github
````

Now initialize Git:

```bash
git init
```

You should see a message saying something like:

```
Initialized empty Git repository
```

### What just happened?

Git created a hidden folder named:

```
.git/
```

This folder stores:

* project history
* commits
* configuration

📌 **Important**
If you delete the `.git` folder, your project is no longer a Git repository.

---

## Adding Files to the Repository

Create a file:

```bash
touch main.py
```

Check Git’s status:

```bash
git status
```

Git will tell you:

* `main.py` is **untracked**
* Git sees it, but is not tracking it yet

---

### Stage the File

```bash
git add main.py
```

Now `main.py` is **staged** — ready to be saved.

---

### Make Your First Commit

```bash
git commit -m "Initial commit"
```

🎉 Congratulations!
You just created your **first version** of the project.

This commit is now a permanent snapshot in history.

---

## How Git Thinks About Your Project

To understand Git, you need to understand **three places**.

```
Working Directory → Staging Area → Repository
```

---

### 1️⃣ Working Directory

This is your actual project folder:

* where you write code
* where you edit files

Any change you make starts here.

---

### 2️⃣ Staging Area

This is where you tell Git:

> “These are the changes I want to save next.”

You move changes here using:

```bash
git add
```

---

### 3️⃣ Repository

This is Git’s memory:

* every commit lives here
* nothing is lost unless you delete history

When you run:

```bash
git commit
```

Git takes everything from the staging area and stores it permanently.

---

### Visual Summary

```
┌──────────────┐
│ Working Dir  │
│ (edit files) │
└───────┬──────┘
        │ git add
        ▼
┌──────────────┐
│ Staging Area │
│ (ready to    │
│  be saved)   │
└───────┬──────┘
        │ git commit
        ▼
┌──────────────┐
│ Repository   │
│ (history)    │
└──────────────┘
```

📌 This mental model will explain **almost every Git command** you’ll learn.

---

## Key Terms (Keep These in Mind)

* **Repository (repo)**
  A project folder tracked by Git

* **Commit**
  A saved snapshot of the entire project at a point in time

* **Working directory**
  Your current files and edits

* **Staging area**
  The place where changes wait before being committed

* **Tracked file**
  A file Git knows about

* **Untracked file**
  A file Git sees but is not tracking yet

You don’t need to memorize these — you’ll use them repeatedly.

---

## What’s Next?

Now that you can:

* create a repository
* add files
* make commits

Next, we’ll learn **basic Git commands** to:

* check project status
* see changes
* explore history
* undo mistakes safely

This is where Git starts to feel powerful 🚀
