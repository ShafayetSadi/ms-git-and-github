---
title: "Basic Git Commands"
description: "Learn the core Git commands used in everyday Git workflows."
keywords:
  - Git
  - Commit
  - Version Control
  - Missing Semester
  - Shafayet Sadi
---

## The Basic Git Workflow

Almost all Git usage follows this simple flow:

```
Edit files → Stage changes → Commit snapshot
```

The commands below support this workflow.

<br><br><br><br><br>

## Track (Stage) Files

When you create or modify a file, Git does **not** save it automatically.  
You must explicitly choose what to include in the next commit.

```bash
git add filename
```

Example:

```bash
git add main.py
```

📌 This moves changes from the **working directory** to the **staging area**.

<br><br><br><br><br>

## See What Changed (`git diff`)

Before you commit, quickly review what you are about to save.

Unstaged changes (working directory):

```bash
git diff
```

Staged changes (what will be committed):

```bash
git diff --staged
```

<br><br><br><br><br>

## Commit Changes

A **commit** saves a snapshot of everything currently in the staging area.

```bash
git commit -m "Descriptive message"
```

Good commit messages:

* explain **what** changed
* explain **why** it changed

Example:

```bash
git commit -m "Add initial guessing game logic"
```

<br><br><br><br><br>

## Check Repository Status

At any time, you can ask Git:

> “What’s going on right now?”

```bash
git status
```

This shows:

* which files are modified
* which files are staged
* which files are untracked

📌 `git status` is your **best friend** while learning Git.

<br><br><br><br><br>

## Undo Accidental Changes (`git restore`)

If you edited something by mistake, you can discard the changes:

```bash
git restore main.py
```

If you staged something by mistake, unstage it:

```bash
git restore --staged main.py
```

<br><br><br><br><br>

## View Commit History

To see the timeline of your project:

```bash
git log
```

This shows:

* commit IDs
* author
* date
* commit message

For a simpler view:

```bash
git log --oneline
```

<br><br><br><br><br>

## Typical Usage Pattern

A very common Git workflow looks like this:

```bash
git status
git add main.py
git commit -m "Fix input validation bug"
```

You will repeat this pattern many times.

<br><br><br><br><br>

## Summary Table

| Command      | Purpose                     |
| ------------ | --------------------------- |
| `git init`   | Initialize a Git repository |
| `git add`    | Stage changes for commit    |
| `git commit` | Save a snapshot to history  |
| `git status` | Show current project state  |
| `git log`    | View commit history         |

<br><br><br><br><br>

## Important Reminder

Git does **not** automatically save your work.

* Editing a file ≠ saving a version
* Only a **commit** creates history

If something is not committed, Git cannot restore it later.

<br><br><br><br><br>

## What’s Next?

Now that you can:

* stage files
* commit changes
* inspect history

Next, we’ll learn how to:

* compare changes
* undo mistakes safely
* recover lost work

This is where Git starts to feel like a safety net 🛡️
