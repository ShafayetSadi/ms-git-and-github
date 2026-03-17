---
title: "Writing Good Commit Messages"
description: "Write clear commit messages that make history easy to read."
keywords:
  - Git
  - Commits
  - Best Practices
  - Open source
  - Shafayet Sadi
---

## Why Commit Messages Matter

In open source, your commit message is part of the documentation.
It tells others **what** changed and **why**.

Bad messages create confusion.
Good messages build trust.

<br><br><br><br><br>

## The Basic Format

Keep the first line short and clear (50-72 characters).
Use the **imperative** mood (like a command):

- "Add login validation"
- "Fix crash on startup"

If needed, add a blank line and a body:

```
Add login validation

Validate empty email and password fields before submit.
```

<br><br><br><br><br>

## Examples (Good vs Bad)

Good:

- "Add README installation steps"
- "Fix null pointer in parser"
- "Refactor auth middleware"

Bad:

- "stuff"
- "final commit"
- "changes"

Be specific and useful.

<br><br><br><br><br>

## Small Tips

- One commit = one idea
- Do not write essays
- Focus on the intent, not the code details

Great commit history makes a project easy to understand.

<br><br><br><br><br>

## Summary

Clear commit messages are a professional skill.
Write short, specific, and action-oriented lines.
