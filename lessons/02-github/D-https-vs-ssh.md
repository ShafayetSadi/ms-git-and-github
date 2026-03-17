---
title: "Using HTTPS vs SSH with GitHub"
description: "Understand HTTPS vs SSH authentication, and set up SSH keys for a smoother GitHub workflow."
keywords:
  - SSH
  - HTTPS
  - GitHub
  - authentication
  - PAT
  - Shafayet Sadi
---

## The Big Idea

When Git talks to GitHub, it must prove who you are (authentication).
The two common ways are **HTTPS** and **SSH**.

| Method | What you use | Good for |
| ------ | ------------ | -------- |
| HTTPS  | Personal Access Token (PAT) | quick setup, works everywhere |
| SSH    | key pair (private/public key) | daily use, no typing credentials |

<br><br><br><br><br>

## HTTPS (Token-Based)

If you use an HTTPS remote like:

```bash
https://github.com/USERNAME/REPO.git
```

GitHub will require a **Personal Access Token** instead of your account password.

<br><br><br><br><br>

## SSH (Key-Based)

SSH uses a key pair:

- Private key stays on your computer
- Public key is added to GitHub

After setup, `git push` / `git pull` usually work without asking for credentials.

### 1) Generate a key

```bash
ssh-keygen -t ed25519 -C "your.email@example.com"
```

Press Enter to accept the default path. A passphrase is optional but recommended.

### 2) Copy your public key

```bash
cat ~/.ssh/id_ed25519.pub
```

Copy the full output (it starts with `ssh-ed25519`).

### 3) Add the key to GitHub

GitHub -> Settings -> SSH and GPG keys -> New SSH key -> paste -> Save.

### 4) Test the connection

```bash
ssh -T git@github.com
```

### 5) Switch an existing repo to SSH (optional)

```bash
git remote set-url origin git@github.com:USERNAME/REPO.git
git remote -v
```
