---
title: "Build a Small Project with Git"
description: "Build a tiny CLI guessing game and track its progress using Git commits."
keywords:
  - Git
  - Project
  - Commit
  - CLI
  - Shafayet Sadi
---

## Goal

By the end of this section, you will have:

- A real project folder (not random Git commands)
- A Git repository with meaningful commits
- A working CLI program
- Experience with a simple, real Git workflow

## Project Overview

We will build a simple number guessing game:

- The program picks a random number
- The user guesses
- The program tells whether the guess is correct

## Step 1: Project Setup

Create the project structure and initialize Git:

```bash
mkdir cli-guess-game
cd cli-guess-game
mkdir src
git init
```

Check the folder:

```bash
ls -al
```

You should see a `.git` directory - that means Git is active.

## Step 2: Create the Program (Python)

Create `src/main.py` and add the following code:

```python
import random

number = random.randint(1, 10)

guess = int(input("Guess a number between 1 and 10: "))

if guess == number:
    print("Correct!")
else:
    print("Wrong! The number was", number)
```

Run the program:

```bash
python3 src/main.py
```

If it runs, you are ready to commit.

## Step 3: Version 1 - First Commit (Bare Minimum)

Before committing, check Git's status:

```bash
git status
```

Stage the file:

```bash
git add src/main.py
```

Create your first commit:

```bash
git commit -m "Initial version: basic guessing game"
```

View commit history:

```bash
git log --oneline
```

## Notes and Tips

- If `python3` does not work, try `python src/main.py`.
- Commit messages should describe what changed.
- Small commits are better than one big commit.

## C Version (If You Do Not Know Python)

If you want to follow this project in C instead, use `src/main.c` and commit that file. The Git steps are identical.

Create `src/main.c`:

```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(void) {
    int number;
    int guess;

    srand((unsigned)time(NULL));
    number = (rand() % 10) + 1;

    printf("Guess a number between 1 and 10: ");
    if (scanf("%d", &guess) != 1) {
        printf("Invalid input.\n");
        return 1;
    }

    if (guess == number) {
        printf("Correct!\n");
    } else {
        printf("Wrong! The number was %d\n", number);
    }

    return 0;
}
```

Compile and run:

```bash
gcc -std=c11 -Wall -Wextra -O2 -o guess src/main.c
./guess
```

Then commit `src/main.c` (instead of `src/main.py`):

```bash
git add src/main.c
git commit -m "Initial version: basic guessing game"
```

