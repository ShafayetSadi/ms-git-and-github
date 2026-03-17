---
title: "Reviewing and Updating PRs"
description: "Handle review feedback and update your pull request professionally."
keywords:
  - GitHub
  - Pull Request
  - Review
  - Open source
  - Shafayet Sadi
---

## PR Reviews Are Normal

A review is not a rejection.
It is a chance to improve the code before merge.

Responding well to reviews is a key open-source skill.

<br><br><br><br><br>

## How to Respond to Feedback

1) Read the comments carefully
2) Reply if you need clarification
3) Make the requested changes
4) Push updates to the same branch

The PR will update automatically.

<br><br><br><br><br>

## Update Your Branch with New Commits

Make changes, then commit and push:

```bash
git add .
git commit -m "Address review feedback"
git push
```

This is the simplest approach.

<br><br><br><br><br>

## Optional: Amend the Last Commit

If you want a cleaner history on your PR branch:

```bash
git commit --amend
```

Then force push:

```bash
git push --force-with-lease
```

Only do this on your own PR branch.
Never force push to shared branches like `main`.

<br><br><br><br><br>

## Summary

PR feedback is part of the process.
Communicate clearly, update your code, and push again.
