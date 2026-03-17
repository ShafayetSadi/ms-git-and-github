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

### Linux (Ubuntu / Debian-based)

```bash
sudo apt update
sudo apt install git
```

> If you are using another Linux distribution, use your package manager
> (e.g., `dnf`, `pacman`, `zypper`).

### macOS

If you have Homebrew:

```bash
brew install git
```

Or install Apple's command line tools when prompted the first time you run `git`.

### Windows

Download Git from the official website:

👉 [https://git-scm.com/](https://git-scm.com/)

During installation:

* Use the **default options**
* Choose **Git Bash** when prompted

📌 **Recommendation for Windows users**
Use **Git Bash** — it gives you a Unix-like terminal experience similar to Linux and macOS, which we will use throughout this workshop.

<br><br><br><br><br>

## Verify the Installation

After installation, open a terminal (or Git Bash on Windows) and run:

```bash
git --version
```

Example output:

```bash
git version 2.43.0
```

If you see a version number, Git is installed correctly.

### If something goes wrong

* Restart your terminal
* Make sure Git is added to your system PATH
* On Windows, ensure you are using **Git Bash**

<br><br><br><br><br>

## Git Is a Command-Line Tool

Git is primarily used from the **command line**.

This may feel uncomfortable at first — that’s normal.
You only need a **small set of commands**, and we will practice them repeatedly.

You do **not** need to memorize everything.

<br><br><br><br><br>

## Configure Git (Very Important)

Before using Git, we must tell it **who you are**.

Git attaches your name and email to every commit you make.

Run the following commands:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Replace:

* `"Your Name"` with your real name
* `"your.email@example.com"` with your email

📌 **Important**

* This does **not** create a GitHub account
* This only identifies your commits locally

### Set the default branch name to `main` (recommended)

This avoids confusion later when you push to GitHub:

```bash
git config --global init.defaultBranch main
```

<br><br><br><br><br>

## Check Your Configuration

To verify your settings, run:

```bash
git config --list
```

You should see something like:

```
user.name=Your Name
user.email=your.email@example.com
```

That means Git knows who you are.

<br><br><br><br><br>

## Global vs Local Configuration (Concept Only)

Git configurations can be set at different levels.

### Global configuration

* Applies to **all repositories** on your computer
* This is what we just set
* Most students only need this

### Local configuration

* Applies to **one specific repository**
* Overrides global settings for that project

Example (do not run yet unless instructed):

```bash
git config user.name "Another Name"
git config user.email "another.email@example.com"
```

📌 For now, **global configuration is enough**.

<br><br><br><br><br>

## Why Configuring Git Matters

Configuring Git helps you:

* Identify who made each change
* Understand project history clearly
* Receive proper credit for your work
* Collaborate without confusion

Every commit tells a story — your name is part of that story.

<br><br><br><br><br>

## What’s Next?

Now that Git is installed and configured, we are ready to:

* Create our first Git repository
* Track changes
* Save our work safely

Let’s move on to creating your first repository.
