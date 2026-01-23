---
title: "Using SSH with GitHub"
description: "Use SSH keys to connect to GitHub securely without typing passwords every time."
keywords:
  - SSH
  - GitHub
  - authentication
  - Shafayet Sadi
---

## Why SSH?

- No need to enter your username and password(access token) every time.
- More secure and faster.

## Steps

1. Generate an SSH Key:

```bash
ssh-keygen -t ed25519 -C "your@email.com"
```

2. Copy your public key:

```bash
cat ~/.ssh/id_ed25519.pub
```

3. Go to GitHub → Settings → SSH and GPG keys → New SSH key.

4. Paste the key and save.

5. Test:

```bash
ssh -T git@github.com
```

## Switch Remote URL to SSH

```bash
git remote set-url origin git@github.com:USERNAME/REPO.git
```

🎯 Now, you can push without typing credentials!
