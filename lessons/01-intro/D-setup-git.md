---
title: "Setting Up Git"
description: "Install Git and configure your user identity."
keywords:
  - Git
  - Setup
  - Shafayet Sadi
---

## Installing Git

### Linux

```bash
sudo apt install git
```

### Windows

Download and install from: [https://git-scm.com/](https://git-scm.com/)

## Verify Installation

To verify that Git is installed correctly, run in the terminal:

```bash
➜  ~ git --version
git version 2.43.0
```

If you see a version number like `git version 2.43.0`, Git is installed correctly.

- If you see an error, make sure Git is installed and added to your system's PATH.
- If you are using Windows, you may need to restart your terminal or command prompt after installation.

For windows users, I recommend using `Git Bash`. It will give your a unix like terminal experiance in windows.

## Git is a CLI tool

<br><br><br><br><br>

## Configure Git

We have to tell Git who we are so it can link our commits to us.

```bash
git config --global user.name "Shafayet Sadi"
git config --global user.email "shafayet.sadi@gmail.com"
```

Replace `Shafayet Sadi` and `shafayet.sadi@gmail.com` with your own name and email.

### Check Config

You can check your configuration by running:

```bash
git config --list
```

### Local vs Global Config

You can set configurations globally (for all repositories) or locally (for a specific repository).

- **Global**: Applies to all repositories on your system.
- **Local**: Applies only to the current repository.
  To set a local configuration, navigate to your repository and run the same commands without the `--global` flag:

```bash
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

Now if you run `git config --list`, you will see both global and local configurations.

<br><br><br><br><br>

## Why Configure Git?

Configuring Git with your name and email helps:

- Identify who made changes in a project.
- Keep a clear history of contributions.
- Ensure your commits are linked to your identity.
