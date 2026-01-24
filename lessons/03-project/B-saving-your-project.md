---
title: "Saving Your Work With Commits"
description: "Evolve a project step by step using feature commits, bug-fix commits, and safe recovery techniques."
keywords:
  - Git
  - Commit
  - git diff
  - git restore
  - Shafayet Sadi
---

## Why This Matters

Real software is never written once. It evolves.

Git helps you:

- Save progress in small, meaningful snapshots
- Understand what changed and why
- Recover confidently when something breaks

## Commit Mindset

Each commit should represent one clear idea:

- Add a feature
- Fix a bug
- Change behavior
- Refactor (no behavior change)

## Version 2: Add Multiple Attempts (Feature Commit)

Update `src/main.py`:

```python
import random

number = random.randint(1, 10)
attempts = 3

while attempts > 0:
    guess = int(input("Guess a number between 1 and 10: "))
    if guess == number:
        print("Correct!")
        break
    else:
        attempts -= 1
        print("Wrong! Attempts left:", attempts)

if attempts == 0:
    print("Game over! The number was", number)
```

Before committing, inspect changes:

```bash
git diff
```

Commit the feature:

```bash
git add src/main.py
git commit -m "Add limited attempts"
```

## Version 3: Fix a Real Crash (Bug Fix Commit)

The game crashes if the user types `abc` (because `int("abc")` fails).

Update `src/main.py` with input validation:

```python
import random

number = random.randint(1, 10)
attempts = 3

while attempts > 0:
    user_input = input("Guess a number between 1 and 10: ")

    if not user_input.isdigit():
        print("Please enter a valid number.")
        continue

    guess = int(user_input)

    if guess < 1 or guess > 10:
        print("Number must be between 1 and 10.")
        continue

    if guess == number:
        print("Correct!")
        break
    else:
        attempts -= 1
        print("Wrong! Attempts left:", attempts)

if attempts == 0:
    print("Game over! The number was", number)
```

Commit the fix:

```bash
git add src/main.py
git commit -m "Fix crash on invalid input"
```

## Version 4: Add Replay Option (Behavior Change)

Replace `src/main.py`:

```python
import random


def play_game():
    number = random.randint(1, 10)
    attempts = 3

    while attempts > 0:
        user_input = input("Guess a number between 1 and 10: ")

        if not user_input.isdigit():
            print("Please enter a valid number.")
            continue

        guess = int(user_input)

        if guess < 1 or guess > 10:
            print("Number must be between 1 and 10.")
            continue

        if guess == number:
            print("Correct!")
            return

        attempts -= 1
        print("Wrong! Attempts left:", attempts)

    print("Game over! The number was", number)


while True:
    play_game()
    again = input("Play again? (y/n): ").lower()
    if again != "y":
        print("Thanks for playing!")
        break
```

Commit it:

```bash
git add src/main.py
git commit -m "Add replay option"
```

## Version 5 (Optional): Score Tracking

Replace `src/main.py`:

```python
import random

score = 0


def play_game():
    global score
    number = random.randint(1, 10)
    attempts = 3

    while attempts > 0:
        user_input = input("Guess a number between 1 and 10: ")

        if not user_input.isdigit():
            print("Invalid input.")
            continue

        guess = int(user_input)

        if guess < 1 or guess > 10:
            print("Number must be between 1 and 10.")
            continue

        if guess == number:
            score += 1
            print("Correct! Score:", score)
            return

        attempts -= 1
        print("Wrong! Attempts left:", attempts)

    print("Game over! The number was", number)


while True:
    play_game()
    again = input("Play again? (y/n): ").lower()
    if again != "y":
        print("Final score:", score)
        break
```

Commit it:

```bash
git add src/main.py
git commit -m "Add score tracking"
```

## Recovery: Undo Mistakes Without Panic

Discard accidental edits:

```bash
git status
git restore src/main.py
```

Recover a deleted file:

```bash
git status
git restore src/main.py
```

## Read Your Project History

These two commands solve most debugging:

```bash
git log --oneline
git show HEAD
```

## Optional: Back It Up On GitHub

If you already created an empty repo on GitHub, connect and push:

```bash
git remote add origin <repo-url>
git branch -M main
git push -u origin main
```

Verify by cloning into a fresh folder:

```bash
cd ..
git clone <repo-url>
cd cli-guess-game
python3 src/main.py
```

## C Version (If You Do Not Know Python)

You can do the exact same Git workflow in C. The only difference is your code file is `src/main.c` instead of `src/main.py`.

Below is a C version that includes:

- 3 attempts
- input validation (no crashes on text input)
- replay loop

Create `src/main.c`:

```c
#include <ctype.h>
#include <errno.h>
#include <limits.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>

static int read_int_in_range(const char *prompt, int min, int max, int *out) {
    char buf[64];
    long value;
    char *end;

    for (;;) {
        printf("%s", prompt);
        if (!fgets(buf, sizeof(buf), stdin)) {
            return 0; /* EOF */
        }

        /* Trim leading spaces */
        char *p = buf;
        while (*p && isspace((unsigned char)*p)) p++;

        errno = 0;
        value = strtol(p, &end, 10);
        if (errno != 0) {
            puts("Please enter a valid number.");
            continue;
        }

        /* Reject if no digits were found */
        if (p == end) {
            puts("Please enter a valid number.");
            continue;
        }

        /* Skip trailing spaces/newline */
        while (*end && isspace((unsigned char)*end)) end++;
        if (*end != '\0') {
            puts("Please enter a valid number.");
            continue;
        }

        if (value < min || value > max) {
            printf("Number must be between %d and %d.\n", min, max);
            continue;
        }

        *out = (int)value;
        return 1;
    }
}

static void play_game(void) {
    int number = (rand() % 10) + 1;
    int attempts = 3;

    while (attempts > 0) {
        int guess;
        if (!read_int_in_range("Guess a number between 1 and 10: ", 1, 10, &guess)) {
            puts("Goodbye.");
            exit(0);
        }

        if (guess == number) {
            puts("Correct!");
            return;
        }

        attempts--;
        printf("Wrong! Attempts left: %d\n", attempts);
    }

    printf("Game over! The number was %d\n", number);
}

int main(void) {
    srand((unsigned)time(NULL));

    for (;;) {
        char again[16];

        play_game();
        printf("Play again? (y/n): ");
        if (!fgets(again, sizeof(again), stdin)) {
            break;
        }

        /* Accept y / Y, everything else exits */
        if (again[0] != 'y' && again[0] != 'Y') {
            puts("Thanks for playing!");
            break;
        }
    }

    return 0;
}
```

Compile and run:

```bash
gcc -std=c11 -Wall -Wextra -O2 -o guess src/main.c
./guess
```

Commit with the same messages, but for `src/main.c`:

```bash
git add src/main.c
git commit -m "Add limited attempts"
```

