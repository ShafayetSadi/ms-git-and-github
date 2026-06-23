---
title: "Setting Up Git"
description: "Install Git and configure your identity so your work is properly tracked."
keywords:
  - Git
  - Setup
  - Missing Semester
  - Shafayet Sadi
---

## Installing Git

Git needs to be installed on your system before we can use it.

<br><br><br><br><br>

### Linux (Ubuntu / Debian-based)

```bash
sudo apt update
sudo apt install git
```

> If you are using another Linux distribution, use your package manager
> (e.g., `dnf`, `pacman`, `zypper`).

<br><br><br><br><br>

### Windows

Download Git from the official website:

👉 [https://git-scm.com/](https://git-scm.com/)

During installation:

- Use the **default options**
- Choose **Git Bash** when prompted

📌 Use **Git Bash** on Windows — it gives you a Unix-like terminal experience similar to Linux

<br><br><br><br><br>

## Verify the Installation

After installation, open a terminal (or Git Bash on Windows) and run:

```bash
git --version
```

Example output:

```bash
git version X.Y.Z
```

If you see a version number, Git is installed correctly.

### If something goes wrong

- Restart your terminal
- Make sure Git is added to your system PATH
- On Windows, ensure you are using **Git Bash**

<br><br><br><br><br>

## Configure Git (Very Important)

Before using Git, we must tell it **who you are**.

Git records your name and email with every commit you make.

Run the following commands:

```bash
git config --global user.name "John Doe"
git config --global user.email "john@example.com"
```

Replace these values with your own information.

📌 **Important**

- This does **not** create a GitHub account
- This only identifies your commits locally

<br><br><br><br><br>

## Check Your Configuration

- To verify your settings, run:

  ```bash
  git config user.name
  git config user.email
  ```

- You should see something like:

  ```text
  John Doe
  john@example.com
  ```

- That means Git knows who you are.

To see all your Git configurations, run:

```bash
git config --list
```

📌 Use `q` to exit the `git config --list` output.

<br><br><br><br><br>

## Global vs Local Configuration

Git configurations can be set at different levels.

### Global configuration

- Applies to **all repositories** on your computer
- This is what we just set
- Most of us only need this

### Local configuration

- Applies to **one specific repository**
- Overrides global settings for that project

📌 For now, **global configuration is enough**.

<br><br><br><br><br>

## Why Configuring Git Matters

Configuring Git helps you:

- Identify who made each change
- Understand project history clearly
- Receive proper credit for your work
- Collaborate without confusion

> Every commit tells a story — your name is part of that story.

<br><br><br><br><br>

## Quick Check

Before moving on, make sure:

- `git --version` works
- `git config user.name` shows your name
- `git config user.email` shows your email

If all three work, you're ready for your first repository.
