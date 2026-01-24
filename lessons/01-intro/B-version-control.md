---
title: "Version Control Concepts"
description: "Learn what version control is, why it exists, and how it helps you work safely."
keywords:
  - Git
  - Version Control
  - Missing Semester
  - Shafayet Sadi
---

## What Is Version Control?

**Version control** is a system that records **changes to files over time**, so you can:

- See what changed
- Compare different versions
- Go back to a previous state if something breaks

Think of version control as:

- 🕒 A **time machine** for your project  
- 📘 A **shared notebook** where every change is recorded, explained, and dated  

Once a change is recorded, it is **never lost** unless you explicitly delete the history.

---

## Why Version Control Matters (Especially for Students)

Version control is not just for companies or professional developers.  
It is **extremely useful for students**.

### As a student, it helps you with:

- **Assignments**  
  Accidentally deleted a file? Overwrote working code?  
  → You can restore it.

- **Group projects**  
  Multiple people working on the same project  
  → No more sending ZIP files or copying folders.

- **Portfolio & learning**  
  Your commit history shows:
  - how you started
  - how you improved
  - how you solved problems over time  

That history itself is proof of learning.

---

## Types of Version Control Systems

Not all version control systems work the same way.

### 1️⃣ Local Version Control System
- Tracks changes only on your own computer
- Simple, but limited
- No built-in collaboration

📌 Example: manually copying folders like  
`project_v1`, `project_v2`, `final_project`

---

### 2️⃣ Centralized Version Control System
- One central server stores the project
- Everyone connects to that server

**Pros**
- Easy to understand

**Cons**
- If the server is down → work stops
- Single point of failure

📌 Example: SVN

---

### 3️⃣ Distributed Version Control System (DVCS)
- Everyone has a **full copy of the project and its history**
- Works even without internet

📌 Example: **Git**

---

## Git Is a Distributed Version Control System

With Git:

- Every developer has the **entire history** locally
- You can work offline
- You can recover from mistakes easily

This makes Git:

- ⚡ **Fast** — most commands run on your laptop
- 🛡️ **Reliable** — no single point of failure
- 🤝 **Collaboration-friendly** — works perfectly with platforms like GitHub

Git is designed to make **mistakes safe**.

---

## Core Vocabulary (Remember These Three)

You do **not** need to memorize many terms right now.  
Just understand these three:

- **Repository (repo)**  
  A project folder that Git is tracking

- **Commit**  
  A saved snapshot of your project, with a message explaining *why* the change was made

- **History**  
  The timeline of commits that shows how your project evolved

If you understand these, Git will make sense.

---

## What We Will Do Next (Hands-on)

In the next part, you will **actually use Git**, not just read about it.

You will:

- Create a Git repository
- Make changes to files
- Save those changes as commits
- View the project history
- Compare versions

Keep this big idea in mind:

> **Git helps you track, explain, and share your work safely.**

Everything else is built on top of that.
