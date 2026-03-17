---
title: "Resolving Merge Conflicts"
description: "Learn a simple step-by-step process to fix merge conflicts."
keywords:
  - Git
  - Merge
  - Conflicts
  - Resolution
  - Shafayet Sadi
---

## Step-by-Step Conflict Resolution

When Git reports a conflict, do this:

### 1) Check the files

```bash
git status
```

Git will list the files with conflicts.

### 2) Open the file and edit

Look for markers:

```
<<<<<<< HEAD
Your version
=======
Other version
>>>>>>> branch-name
```

Decide what to keep and **delete the markers**.

### 3) Save the file

Make sure the final code is correct.

### 4) Mark as resolved

```bash
git add path/to/file
```

### 5) Finish the merge

```bash
git commit
```

Git will create a merge commit.

<br><br><br><br><br>

## Optional: Use a Merge Tool

If you prefer a visual tool:

```bash
git mergetool
```

This opens a conflict editor if one is installed.

<br><br><br><br><br>

## After the Merge

Run your tests or app to be safe.
Conflicts can introduce subtle bugs.

<br><br><br><br><br>

## Summary

- Find conflicted files
- Choose the correct code
- Remove conflict markers
- `git add` and `git commit`

Conflicts are normal. The process is always the same.
