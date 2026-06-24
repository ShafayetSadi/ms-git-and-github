---
title: "Homework: Build a CLI Todo App with Git"
description: "Practice Git by building a Todo application through a series of meaningful commits."
keywords:
  - Git
  - Homework
  - Todo App
  - Commits
  - Missing Semester
  - Shafayet Sadi
---

## Homework Goal

The purpose of this assignment is not to build the perfect Todo application.

The purpose is to practice:

- Building software incrementally
- Making small changes
- Creating meaningful commits
- Thinking in versions instead of final products

By the end, your Git history should tell the story of how your project evolved.

<br><br><br><br><br>

## Project

Build a simple command-line Todo application.

You may use:

- Python
- C
- C++
- Java
- Any language you are comfortable with

The language does not matter.

The Git workflow does.

<br><br><br><br><br>

## Rules

- Create one commit per feature
- Do not combine multiple features into one commit
- Run the program before committing
- Use meaningful commit messages

Good:

```text
Add task creation
Add task deletion
Mark tasks as completed
```

Bad:

```text
update
changes
final
```

<br><br><br><br><br>

## Example Evolution

Follow the first few commits below.

### Commit 1

Create a basic Todo application.

Example:

```text
Todo List

No tasks yet.
```

Commit message:

```text
Create basic todo application
```

<br><br><br>

### Commit 2

Allow users to add tasks.

Example:

```text
1. Buy milk
2. Complete assignment
```

Commit message:

```text
Add task creation
```

<br><br><br>

### Commit 3

Display task numbers.

Example:

```text
1. Buy milk
2. Complete assignment
3. Call friend
```

Commit message:

```text
Add task numbering
```

<br><br><br>

### Commit 4

Allow users to mark tasks as completed.

Example:

```text
[x] Buy milk
[ ] Complete assignment
```

Commit message:

```text
Add task completion status
```

<br><br><br>

### Commit 5

Allow users to delete tasks.

Commit message:

```text
Add task deletion
```

<br><br><br><br><br>

## Continue on Your Own

After the first five commits, continue improving the project.

Possible features:

- Edit existing tasks
- Task priorities
- Due dates
- Categories
- Search tasks
- Filter completed tasks
- Show task statistics
- Save tasks to a file
- Load tasks from a file
- Better menu design
- Colored output
- Confirmation before deletion
- Sort tasks
- Archive completed tasks

You do not need to implement all of them.

Choose features that interest you.

<br><br><br><br><br>

## Submission

Run:

```bash
git log --oneline
```

Take a screenshot and submit it.

Your history should clearly show how the project evolved over time.

Example:

```text
Add task priorities
Add task deletion
Add task completion status
Add task numbering
Add task creation
Create basic todo application
```

The exact commits will be different.

What matters is that the history tells a clear story.

<br><br><br><br><br>

## Success Criteria

You have successfully completed this assignment if:

- The program runs
- Each feature has its own commit
- Commit messages are meaningful
- Your Git history shows the evolution of the project

📌 Remember: We are not grading the Todo application.

We are practicing Git.
