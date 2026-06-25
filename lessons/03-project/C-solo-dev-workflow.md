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
Run/Test
    ↓
git add
    ↓
git commit
    ↓
Repeat
```

That's it. Most development sessions are simply variations of this loop.

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

## One Idea Per Commit

As you improve your project, create one commit for each logical change. For example:

```bash
git commit -m "Improve game messages"

git commit -m "Add score tracking"

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

```text
- Add
- Fix
- Remove
- Improve
- Refactor
- Rename
```

This simple habit makes your project's history much easier to read.

<br><br><br><br><br>

You're now ready to practice this workflow on your own. In the homework, you'll build a small project and apply these habits from start to finish.
