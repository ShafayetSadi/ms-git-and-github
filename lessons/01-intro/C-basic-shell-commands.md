---
title: "Shell Commands Refresher"
description: "Understand essential terminal commands used alongside Git."
keywords:
  - Terminal
  - Shell
  - Git
  - Shafayet Sadi
---

## Why Shell?

Git is primarily a CLI tool. To be productive (and to avoid copy-pasting random commands), you need a few terminal basics.

If you are on Windows, use **Git Bash** for this workshop so the commands match.

## Common Commands

| Command      | Description               |
| ------------ | ------------------------- |
| `pwd`        | Print current directory   |
| `ls`         | List files and folders    |
| `cd folder`  | Change directory          |
| `mkdir name` | Make a new folder         |
| `touch file` | Create an empty file      |
| `cat file`   | Print a file              |
| `code .`     | Open the current folder in VS Code (if installed) |
| `mv a b`     | Rename / move files       |
| `cp a b`     | Copy files                |
| `rm file`    | Remove a file             |
| `clear`      | Clear the terminal screen |

<br>
    
### A quick warning about `rm`

`rm` deletes files immediately (no recycle bin). If you are not sure, do not use it yet.

## Practice Tip

Open your terminal and try this mini-exercise:

```bash
mkdir git-practice
cd git-practice
touch notes.txt
ls
pwd
```

Then edit `notes.txt` (any editor), add one line, and run:

```bash
nano notes.txt
cat notes.txt
```
