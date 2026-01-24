Here’s a **homework-style rewrite**, more structured, slightly stricter, and framed like a real assignment.
I’ve also **changed the project to Tic-Tac-Toe**, while keeping the Git learning goals identical.

---

````markdown
---
title: "Homework: Git Practice Project"
description: "Apply Git concepts by building and evolving a small Tic-Tac-Toe CLI project."
keywords:
  - Git
  - Homework
  - Practice
  - Commits
  - Shafayet Sadi
---

## 📌 Homework Overview

This homework is designed to make Git **muscle memory**, not theory.

You will:
- Build a small **CLI Tic-Tac-Toe game**
- Save progress using **clean, meaningful commits**
- Practice **breaking and recovering code**
- Learn to **read Git history like a timeline**

⏱️ Estimated time: 60–90 minutes

---

## Project Rules (Read First)

- Use **one commit per task**
- Do **not** combine multiple changes in one commit
- Run the program before every commit
- Use **clear commit messages** (provided below)

---

## Project Setup

Create a new project:

```bash
mkdir cli-tic-tac-toe
cd cli-tic-tac-toe
mkdir src
git init
````

Create the file:

```
src/main.py
```

---

## 🧪 Exercise 1: Initial Working Version

### Goal

Create a minimal Tic-Tac-Toe board that prints correctly.

### Requirements

* 3×3 board
* Printed using `X`, `O`, and empty cells
* No game logic required yet

Example output:

```
X | O | X
---------
  | X | O
---------
O |   |
```

### Commit Message

```
Initial version: print tic-tac-toe board
```

### Success Check

```bash
git log --oneline
```

---

## 🧨 Exercise 2: Break It and Recover It

### Goal

Practice recovery without panic.

### Steps

1. Delete or break an important line so the program crashes.
2. Run it and confirm it fails.
3. Restore the file back to the last commit.

### Commands

```bash
git status
git restore src/main.py
```

📌 **Do not commit the broken version.**

---

## 🐛 Exercise 3: One Bug Fix = One Commit

### Goal

Learn focused bug-fix commits.

### Task

* Add player input (row & column)
* Make it crash on invalid input (e.g. letters)
* Fix the crash using input validation

### Commit Message

```
Fix crash on invalid player input
```

---

## ✨ Exercise 4: Add a Feature (Turns)

### Goal

Add real game behavior.

### Requirements

* Alternate turns between `X` and `O`
* Prevent overwriting an occupied cell

### Commit Message

```
Add turn-based gameplay
```

---

## 📜 Exercise 5: Read Your History

### Goal

Answer questions using Git history only.

### Tasks

* Find the commit that added turn-based gameplay
* Find the commit that fixed invalid input

### Commands

```bash
git log --oneline
git show <commit-hash>
```

✍️ Write down:

* Commit hash
* Commit message
* What changed

---

## 🎯 Optional Challenges (Choose ONE)

### Option A: Win Detection

* Detect when a player wins
* Print the winner
* Commit message:

```
Add win condition detection
```

### Option B: Replay Option

* Ask the user if they want to play again
* Reset the board properly
* Commit message:

```
Add replay option
```

---

## 📦 Submission Checklist

Before submitting, make sure:

* [ ] Program runs
* [ ] Each feature has its own commit
* [ ] Commit messages are meaningful
* [ ] `git log --oneline` tells a clear story

---

## 🧠 What This Homework Teaches

This assignment is not about Tic-Tac-Toe.

It’s about:

* Thinking in **small changes**
* Using Git as a **safety net**
* Writing commits that explain your thinking
* Building confidence to experiment

➡️ If you can do this comfortably, you are **ready for team workflows**.

```

---

### Why this works well as homework
- Clear grading boundaries (commit-based)
- Forces **discipline**, not just coding
- Project complexity is manageable
- Directly prepares students for:
  - Feature branches
  - Pull requests
  - Code reviews

If you want next, I can:
- Provide a **starter Tic-Tac-Toe skeleton**
- Create a **grading rubric**
- Convert this into a **GitHub Classroom assignment**
- Write a **solution branch strategy** for instructors
```
