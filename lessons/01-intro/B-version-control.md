---
title: "Version Control Concepts"
description: "Learn what version control is, why it exists, and how it helps you work safely."
keywords:
  - Git
  - Version Control
  - Missing Semesters
  - Shafayet Sadi
---

## What is Version Control?

Imagine you are working on a project.

- Today, everything works perfectly.
- Tomorrow, you make some changes.
- The next day, something breaks.

Now you have questions:

- What changed?
- When did it change?
- Can I go back to the working version?
- Did my teammate modify something?

These are exactly the problems that **version control** solves.

<br><br><br><br><br>

> **Version control** is a system that records changes to files over time, allowing you to see what changed, when it changed, and restore older versions when necessary.

In simple terms, version control helps you:

- Save your work safely
- Track changes over time
- Compare different versions
- Undo mistakes without panic
- Collaborate with others

Think of version control as a **time machine for your project**.

<br><br><br><br><br>

## You Have Probably Used a Bad Version Control System Already

If you have ever created files like these,

```txt
project.zip
project_v2.zip
project_final.zip
project_final_v2.zip
project_final_REAL_final.zip
project_final_REAL_final_last.zip
```

Congratulations. You already invented a form of version control. Just a very bad one.

<br><br><br><br><br>

## A Simple Example

Suppose you are building a calculator application.

- On Monday: Calculator works perfectly.
- On Tuesday: You add a new feature.
- On Wednesday: The application crashes.

Now you cannot remember:

- Which file changed
- What code you modified
- When the bug was introduced

Without version control, you might spend hours trying to fix the problem.

With version control, you can simply ask:

- What changed between the working version and the broken version?

Or even:

- Take me back to the last working version.

**That is the power of version control.**

<br><br><br><br><br>

## Centralized Version Control

A central server stores the project history.

```txt
Developer 1 ---> Server
Developer 2 ---> Server
Developer 3 ---> Server
```

This improves collaboration, but everyone depends on the central server.

If the server becomes unavailable, work becomes difficult.

## Distributed Version Control

Every developer has a complete copy of the project and its history.

```txt
Developer 1  ✓ Full History
Developer 2  ✓ Full History
Developer 3  ✓ Full History
```

Developers can work independently and synchronize later.

This is one of the reasons Git became the most popular version control system in the world.

<br><br><br><br><br>

## Why Git Uses a Distributed Model

Git does not only store your files; it also stores the entire history of your project.

This means:

- You can work offline
- You can save changes locally
- You can inspect old versions
- You can recover from mistakes
- You can collaborate efficiently

Because every developer has a complete copy of the project history, Git is:

- Fast
- Reliable
- Flexible
- Collaboration-friendly

> Don't worry if the idea of "distributed version control" feels abstract right now.

We will revisit this concept after using Git ourselves. Once you create repositories and make commits, the reason Git is called a distributed version control system will become much clearer.
