---
title: "Introduction to GitHub"
description: "Understand what GitHub is, why developers use it, and how it works with Git."
keywords:
  - GitHub
  - Git
  - Version Control
  - Missing Semester
  - Shafayet Sadi
---

## What Is GitHub?

**GitHub** is an online platform where developers store Git repositories, collaborate with others, and share their work.

You can think of GitHub as:

- A place to host your Git repositories online
- A collaboration platform for developers
- A public portfolio that showcases your work

📌 GitHub does **not replace Git** — it works together with Git.

<br><br><br><br><br>

## We Already Have Git. Why GitHub?

So far, everything we have done works entirely on our own computer.

We created a repository, made commits, and viewed history without using GitHub at all.

Everything we've done so far has been stored only on our own computer.

That raises an important question:

> If Git already works, why do we need GitHub?

<br><br><br>

Consider these situations:

- Your laptop suddenly stops working
- You buy a new computer
- You want to work from multiple devices
- You want to share your project with a friend
- You want a teacher, senior, or recruiter to see your work

A repository that exists only on your computer has a single point of failure.

> GitHub solves these problems by storing a copy of your repository online.

<br><br><br><br><br>

## Git vs GitHub

This confusion is extremely common, so let's make it clear.

<br><br><br>

### Git

- A tool that runs on your computer
- Tracks changes and manages history
- Works without internet
- Creates commits and repositories

<br><br><br>

### GitHub

- A website that hosts Git repositories
- Stores repositories online
- Makes sharing and collaboration easier
- Requires internet to synchronize with remote repositories

<br><br><br>

### A Simple Analogy

Think of it like this:

- **Git** → Microsoft Word
- **GitHub** → OneDrive

Microsoft Word lets you create and edit documents.

> OneDrive lets you store, sync, and share those documents online.

<br><br><br>

Similarly:

- Git manages your project locally
- GitHub stores and shares your Git repositories online

> You can use Git without GitHub, but GitHub is built around Git.

<br><br><br><br><br>

## Local Repository vs Remote Repository

When working with GitHub, you will frequently hear two terms:

```mermaid
flowchart LR
    LOCAL[Local Repository]
    REMOTE[Remote Repository]

    LOCAL -- git push --> REMOTE
    REMOTE -- git pull --> LOCAL

```

<br><br><br>

### Local Repository

This is the repository stored on your computer.

It contains:

- Your files
- Your commits
- Your project history

This is what we have been using so far.

<br><br><br>

### Remote Repository

This is a copy of your repository hosted online.

Your local repository and remote repository can be synchronized using Git commands.

For this workshop, GitHub will be our remote repository.

A remote repository allows you to:

- Back up your work
- Access projects from multiple devices
- Collaborate with others
- Share projects publicly

📌 In the next lesson, we will learn how to send our local repository to GitHub.

<br><br><br><br><br>

## GitHub for Students

As a student, GitHub can help you:

- Store all your academic projects safely
- Collaborate with teammates
- Showcase hackathon and personal projects
- Build a portfolio for internships and jobs
- Learn industry-standard development workflows

For many students, GitHub becomes their first professional portfolio.

<br><br><br><br><br>

## GitHub Student Developer Pack

Students can also apply for the **GitHub Student Developer Pack**.

It provides access to:

- Developer tools
- Learning resources
- Cloud credits
- Various student benefits

👉 [GitHub Student Developer Pack](https://education.github.com/pack)

You don't need to apply right now. Just remember that it exists—we'll mention it again later.
