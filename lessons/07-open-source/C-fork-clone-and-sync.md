---
title: "Fork, Clone, and Sync"
description: "Learn the basic open-source workflow: fork a repo, clone it, and keep it updated."
keywords:
  - Open source
  - Fork
  - Clone
  - Upstream
  - Shafayet Sadi
---

## Why You Fork

In open source, you usually do not have write access to the main repo.
So you create your own copy called a **fork**.

Your fork is where you push your changes.

<br><br><br><br><br>

## Step 1: Fork on GitHub

On the project page, click **Fork**.
This creates a copy under your account.

<br><br><br><br><br>

## Step 2: Clone Your Fork

```bash
git clone https://github.com/YOUR-USERNAME/PROJECT.git
cd PROJECT
```

Now you are working locally.

<br><br><br><br><br>

## Step 3: Add the Original Repo as Upstream

```bash
git remote add upstream https://github.com/ORIGINAL-OWNER/PROJECT.git
```

Check remotes:

```bash
git remote -v
```

You should see `origin` (your fork) and `upstream` (original).

<br><br><br><br><br>

## Step 4: Sync Your Fork

Fetch the latest changes:

```bash
git fetch upstream
```

Update your local main:

```bash
git switch main
git merge upstream/main
```

Push updates to your fork:

```bash
git push origin main
```

Now your fork is up to date.

<br><br><br><br><br>

## Summary

Fork -> clone -> add upstream -> sync often.
This is the standard open-source flow.
