---
title: "Using HTTPS vs SSH with GitHub"
description: "Learn the difference between HTTPS and SSH, and set up SSH authentication with GitHub."
keywords:
  - SSH
  - HTTPS
  - GitHub
  - Authentication
  - Missing Semester
  - Shafayet Sadi
---

## A Common Annoyance

Imagine this:

```text
git push
    ↓
Authenticate

git pull
    ↓
Authenticate

git push
    ↓
Authenticate
```

Typing credentials repeatedly becomes annoying very quickly.

There is a better solution.

It's called **SSH**.

<br><br><br><br><br>

## HTTPS vs SSH

When Git communicates with GitHub, it needs to prove that you are allowed to access the repository.

There are two common ways to do that.

<br><br><br>

### HTTPS

- Uses a Personal Access Token (PAT)
- May ask you to authenticate
- Easy to understand
- Works everywhere

Example:

```bash
https://github.com/USERNAME/REPOSITORY.git
```

<br><br><br>

### SSH

- Uses cryptographic keys
- No passwords or tokens after setup
- Faster for daily development
- Preferred by many developers

Example:

```bash
git@github.com:USERNAME/REPOSITORY.git
```

<br><br><br>

> 📌 Both URLs point to the same repository. Only the authentication method is different.

<br><br><br><br><br>

## Why Use SSH?

SSH is popular because you set it up once and then forget about it.

Benefits:

- No repeated authentication
- Faster workflow
- Secure authentication
- Great for daily development

> SSH is a "set it once, forget it" solution.

<br><br><br><br><br>

## How SSH Works (Very Simplified)

SSH uses two keys.

### Private Key

- Stays on your computer.

- Never share it.

### Public Key

- Uploaded to GitHub.

- GitHub uses it to recognize you.

<br>

When the keys match, GitHub allows access.

That's all you need to know for now.

<br><br><br><br><br>

## Step 1: Generate an SSH Key

Run:

```bash
ssh-keygen -t ed25519 -C "your@email.com"
```

Press **Enter** to accept the default location.

You may optionally set a passphrase.

This creates:

```text
~/.ssh/id_ed25519
~/.ssh/id_ed25519.pub
```

<br><br><br>

- `id_ed25519` → Private key
- `id_ed25519.pub` → Public key

Never share the private key.

<br><br><br><br><br>

## Step 2: Copy Your Public Key

View the public key:

```bash
cat ~/.ssh/id_ed25519.pub
```

Copy the entire output.

It should start with:

```text
ssh-ed25519 ...
```

<br><br><br><br><br>

## Step 3: Add the Key to GitHub

1. Open GitHub
2. Go to **Settings**
3. Select **SSH and GPG keys**
4. Click **New SSH key**
5. Paste the public key
6. Save

GitHub now knows how to identify your computer.

<br><br><br><br><br>

## Step 4: Test the Connection

Run:

```bash
ssh -T git@github.com
```

If everything works, you'll see something similar to:

```text
Hi username! You've successfully authenticated.
```

🎉 Your SSH connection is ready.

<br><br><br><br><br>

## Switching an Existing Repository to SSH

Suppose your repository currently uses HTTPS.

You can switch it to SSH:

```bash
git remote set-url origin git@github.com:USERNAME/REPOSITORY.git
```

Verify the change:

```bash
git remote -v
```

You should now see:

```text
origin  git@github.com:USERNAME/REPOSITORY.git (fetch)
origin  git@github.com:USERNAME/REPOSITORY.git (push)
```

<br><br><br><br><br>

## Success 🎉

Before SSH:

```text
git push
    ↓
Authenticate
```

After SSH:

```text
git push
    ↓
Done
```

The same applies to:

- `git pull`
- `git fetch`

No passwords.

No access tokens.

Just Git.
