---
title: "Tags and Releases"
description: "Learn how to mark versions with Git tags and create releases on GitHub."
keywords:
  - Git
  - Tags
  - Releases
  - GitHub
  - Shafayet Sadi
---

## Why Tags Exist

A tag is a permanent label on a specific commit.
It is how you say:

- "This is version 1.0"
- "This is the midterm release"
- "This is the demo version"

Tags make it easy to jump to important points in history.

<br><br><br><br><br>

## Two Types of Tags

1) **Lightweight tag** (simple label)
2) **Annotated tag** (recommended)

Annotated tags store:

- Tag message
- Author
- Date

<br><br><br><br><br>

## Create a Tag

Lightweight:

```bash
git tag v1.0.0
```

Annotated (recommended):

```bash
git tag -a v1.0.0 -m "First stable release"
```

List tags:

```bash
git tag
```

Show a tag:

```bash
git show v1.0.0
```

<br><br><br><br><br>

## Push Tags to GitHub

Tags are not pushed automatically.

Push one tag:

```bash
git push origin v1.0.0
```

Push all tags:

```bash
git push origin --tags
```

<br><br><br><br><br>

## GitHub Releases

On GitHub, a **Release** is built from a tag.

Typical flow:

1) Create a tag
2) Push it to GitHub
3) Open the repo -> Releases -> "Draft a new release"

A release can include:

- Version name
- Notes / changelog
- Files or binaries

This makes your project feel professional.

<br><br><br><br><br>

## Summary

- Tags mark important versions
- Annotated tags are better than lightweight
- Push tags manually
- GitHub Releases are based on tags

Tags turn commits into real versions.
