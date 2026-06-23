---
title: "Shell Commands Refresher"
description: "Learn the essential terminal commands you'll use throughout this Git workshop."
keywords:
  - Terminal
  - Shell
  - Git
  - Missing Semesters
  - Shafayet Sadi
---

## Why Learn the Shell?

Git is primarily a **command-line tool**.

Although graphical applications exist, understanding a few basic terminal commands will make working with Git much easier.

Throughout this workshop, you'll use the terminal to:

- Navigate between folders
- Create project files
- Initialize Git repositories
- Run Git commands

Don't worry—you only need a handful of commands to get started.

<br><br><br><br><br>

## Important Note for Windows Users

Most examples in this workshop use a Unix-like shell.

If you are using Windows, you can follow along using:

- Git Bash
- Windows Terminal with WSL

<br><br><br><br><br>

## Common Commands

| Command      | Description                |
| ------------ | -------------------------- |
| `pwd`        | Show the current directory |
| `ls`         | List files and folders     |
| `cd folder`  | Enter a folder             |
| `cd ..`      | Go to the parent folder    |
| `mkdir name` | Create a new directory     |
| `touch file` | Create an empty file       |
| `rm file`    | Remove a file              |
| `clear`      | Clear the terminal screen  |

<br><br><br><br><br>

## Moving Around Directories

Before using Git, you should always know where you are.

- Show Current Directory

  ```bash
  pwd
  ```

- List Files and Folders

  ```bash
  ls
  ```

- Enter a Folder

  ```bash
  cd calculator-app
  ```

- Go Back One Level

  ```bash
  cd ..
  ```

This moves you to the parent directory.

<br><br><br><br><br>

## Creating Files and Folders

- Create a new folder:

  ```bash
  mkdir my-project
  ```

- Create a new file:

  ```bash
  touch main.py
  ```

- Remove a file:

  ```bash
  rm main.py
  ```

<br><br><br><br><br>

## Be Careful with `rm`

The following command deletes a file:

```bash
rm file.txt
```

Unlike dragging a file to the Recycle Bin, terminal deletion is often permanent.

Always double-check before using `rm`.

<br><br><br><br><br>

## A Small Practice Exercise

Open your terminal and run the following commands:

```bash
mkdir git-practice
cd git-practice

touch app.py
touch README.md

ls

echo "Hello, World!" >> README.md
cat README.md
```

Now you know the basics of the shell! Let's move on to Git.
