---
title: "Pushing a Local Repository to GitHub"
description: "Learn how to connect a local Git repository to GitHub and upload your code."
keywords:
  - git push
  - GitHub
  - Git
  - Missing Semester
  - Shafayet Sadi
---

## What Does "Push" Mean?

So far, everything we have done exists only on our computer.

Our repository contains:

- Files
- Commits
- Project history

But it only exists on your computer.

To send our repository to GitHub, we use:

```bash
git push
```

In simple terms:

```mermaid
flowchart LR
    A[Local Repository] --> C([git push]) --> B[GitHub Repository]

    classDef action fill:#fbbf24,stroke:#f59e0b,color:#111827,stroke-width:2px;
    class C action;
```

> A **push** uploads your commits from your computer to GitHub.

<br><br><br><br><br>

## Let's Put Our Project Online

We will use the repository created in the previous lessons.

<br><br><br><br><br>

## Step 1: Create a Repository on GitHub

Log in to GitHub and create a new repository.

When creating the repository:

- Choose a repository name
- Keep it **Public** or **Private** (your choice)
- Do **NOT** initialize with:

  - README
  - .gitignore
  - License

📌 We already have a repository locally. We want GitHub to start empty.

<br><br><br><br><br>

## Step 2: Connect Your Local Repository

Git needs to know where your GitHub repository lives.

Run:

```bash
git remote add origin https://github.com/YOUR-USERNAME/REPOSITORY-NAME.git
```

Replace:

- `YOUR-USERNAME`
- `REPOSITORY-NAME`

with your own values.

For example:

```bash
git remote add origin https://github.com/USERNAME/ms-git.git
```

<br><br><br>

### What is origin?

Git can communicate with repositories hosted elsewhere.

These connections are called **remotes**.

By convention, the primary remote is usually named:

```text
origin
```

When we run:

```bash
git remote add origin ...
```

we are telling Git:

> "This GitHub repository is where I want to send and receive changes."

<br><br><br>

Verify the connection:

```bash
git remote -v
```

You should see something similar to:

```text
origin  https://github.com/USERNAME/REPOSITORY.git (fetch)
origin  https://github.com/USERNAME/REPOSITORY.git (push)
```

<br><br><br><br><br>

## Step 3: Rename the Branch to main

GitHub uses `main` as the default branch name.

Run:

```bash
git branch -M main
```

This renames your current branch to `main`.

<br><br><br><br><br>

## Step 4: Push Your Repository

Now it's time to upload everything to GitHub.

Run:

```bash
git push -u origin main
```

You may be asked to authenticate with GitHub.

If you're using HTTPS, GitHub may open a browser window asking you to sign in and authorize Git.

After a successful push, you may see output similar to:

```text
Enumerating objects: ...
Counting objects: ...
Writing objects: ...
To https://github.com/USERNAME/REPOSITORY.git
 * [new branch]      main -> main
```

📌 Seeing output like this means the push was successful.

<br><br><br><br><br>

## Step 5: Open GitHub

Refresh your GitHub repository page.

You should now see:

- Your files
- Your commits
- Your project online

🎉 Congratulations!

For the first time, your local repository and GitHub repository are connected.

Your code is now available online.

<br><br><br><br><br>

## Future Pushes

The first push requires a little setup.

After that, your workflow becomes much simpler.

Make changes:

```bash
git add .
git commit -m "Add new feature"
```

Then upload them:

```bash
git push
```

That's it.

📌 You only run `git remote add origin ...` once per project.

<br><br><br><br><br>

## Important Reminder

GitHub does not automatically receive your changes.

This workflow:

```text
Edit Files
    ↓
git add
    ↓
git commit
```

only updates your local repository.

To send those commits to GitHub, you must also run:

```bash
git push
```

> A commit saves changes locally. A push uploads those commits to GitHub.
