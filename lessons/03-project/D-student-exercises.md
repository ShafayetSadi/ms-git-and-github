---
title: "Student Exercises"
description: "Practice Git until it becomes muscle memory: small changes, clean commits, and safe recovery."
keywords:
  - Git
  - Practice
  - Exercises
  - Commits
  - Shafayet Sadi
---

## Rules (Read First)

- One task = one commit
- Run the program before every commit
- Use a meaningful commit message (examples below)

<br><br><br><br><br>

## Exercise 1: Make the Game a Real Project

In your guessing game repo:

1. Create a `README.md` with:
   - project name
   - how to run it
2. Commit it

Suggested commit message:

```
Add README with run instructions
```

<br><br><br><br><br>

## Exercise 2: Break It and Recover It (No Panic)

1. Intentionally break the program so it crashes
2. Confirm it crashes by running it
3. Restore the file back to the last committed version

Commands:

```bash
git status
git restore src/main.py
```

Do not commit the broken version.

<br><br><br><br><br>

## Exercise 3: One Bug Fix = One Commit

Task:

- Make the program crash on invalid input (example: user types `abc`)
- Fix it with input validation

Suggested commit message:

```
Fix crash on invalid input
```

<br><br><br><br><br>

## Exercise 4: Add One Feature = One Commit

Pick ONE feature:

- limited attempts (example: 3 tries)
- score tracking (wins count)
- change range (example: 1 to 100) with hints (too high / too low)

Suggested commit message format:

```
Add <feature name>
```

<br><br><br><br><br>

## Exercise 5: Read Your History

Answer these using Git history only:

- Which commit added your feature?
- Which commit fixed the crash?

Commands:

```bash
git log --oneline
git show <commit-hash>
```

Write down the commit hash and message.

<br><br><br><br><br>

## Submission Checklist

- Program runs
- Each task has its own commit
- `git log --oneline` tells a clear story
