---
title: "Solo Developer Workflow"
description: "Learn the simple workflow that many developers follow every day when working on their own projects."
keywords:
  - Git
  - Workflow
  - Commit Messages
  - Missing Semester
  - Shafayet Sadi
---

## Good Git Workflows Are Boring

Many beginners think experienced developers use complicated Git commands all day.

In reality, most developers repeat the same simple workflow:

```text
Make Change
    ↓
Test It
    ↓
Commit It
    ↓
Repeat
```

A good workflow is not about being clever.

It's about being consistent.

<br><br><br><br><br>

## What Does a Real Work Session Look Like?

Imagine you open your guessing game project to work on it.

Your goal is to improve the game by adding a new feature.

A typical development session looks like this:

```text
Open Project
    ↓
Make Changes
    ↓
Run Program
    ↓
Commit Changes
    ↓
Continue Working
```

That's it.

Most days are just variations of this loop.

<br><br><br><br><br>

## Work in Small Steps

One of the biggest mistakes beginners make is working for hours before creating a commit.

Instead, try this:

```text
Small Change
    ↓
Commit

Small Change
    ↓
Commit

Small Change
    ↓
Commit
```

Rather than:

```text
5 Hours of Changes
    ↓
One Giant Commit
```

Small commits are easier to:

- Understand
- Review
- Debug
- Revert

<br><br><br><br><br>

## A Typical Example

Suppose you want to improve the guessing game.

### Change 1

Improve the game's messages.

```bash
git add src/main.py
git commit -m "Improve game messages"
```

<br><br><br>

### Change 2

Add score tracking.

```bash
git add src/main.py
git commit -m "Add score tracking"
```

<br><br><br>

### Change 3

Improve input validation.

```bash
git add src/main.py
git commit -m "Improve input validation"
```

Notice that each commit represents one idea.

That makes the project history easy to understand.

<br><br><br><br><br>

## Writing Better Commit Messages

A commit message should describe what changed.

Good examples:

```text
Add score tracking
Improve game messages
Validate user input
Fix crash on invalid input
```

Bad examples:

```text
update
changes
fix
final
```

Imagine reading these messages six months from now.

Which history would you rather have?

<br><br><br><br><br>

## A Simple Trick

Start commit messages with a verb.

For example:

- Add
- Fix
- Remove
- Improve
- Refactor
- Rename

Examples:

```text
Add replay option
Fix score calculation
Remove unused code
Refactor game loop
```

This simple habit makes commit history much easier to read.

<br><br><br><br><br>

## The Workflow to Remember

When working on your own projects:

```text
Make Change
    ↓
Run Program
    ↓
Commit
    ↓
Repeat
```

Don't wait until the project is finished.

Commit as the project evolves.

Each commit becomes a checkpoint in your journey.
