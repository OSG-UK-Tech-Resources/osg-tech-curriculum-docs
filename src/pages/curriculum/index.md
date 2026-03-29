---
title: OSG UK Tech Curriculum
description: The complete course plan for the OSG UK Software Engineering recruiting track — from zero to offer-ready.
slug: /curriculum
---

# OSG UK Tech Curriculum

> **From zero programming knowledge to interview-ready in 8 lessons.**
>
> This curriculum is designed to get you onto mock interviews as fast as possible. Each lesson pairs a live mentor session with hands-on problem sets so you build real coding fluency — not just theory.

---

## How It Works

```
📖 Mentor Session  →  💻 Problem Set  →  ✅ Submit PR  →  🔁 Repeat
```

Every lesson follows the same rhythm. Your mentor walks you through the concepts live, you solidify them by completing a problem set on your own, and you submit your work via a Pull Request on GitHub for automated grading.

**Language:** Python &nbsp;|&nbsp; **Target:** 3–5 LeetCode problems per week alongside problem sets

---

## Course Overview

|  #  | Lesson                                          | Core Focus                                                       |
| :-: | ----------------------------------------------- | ---------------------------------------------------------------- |
|  0  | [UK Tech & SWE Overview](/curriculum/lesson-0)  | Industry landscape, sectors, salaries, recruitment timeline      |
|  1  | [Computer Systems & Python Basics](/curriculum/lesson-1) | Architecture fundamentals, Python syntax, OOP           |
|  2  | [Lists, Arrays, Big O & Sorting](/curriculum/lesson-2)   | Data structures, time complexity, searching & sorting   |
|  3  | [Linked Lists, Queues, Stacks & Hash Tables](/curriculum/lesson-3) | Linear structures, FIFO/LIFO, hashing           |
|  4  | [Heaps & Trees](/curriculum/lesson-4)           | Binary trees, BSTs, scapegoat trees, tries, Markov models        |
|  5  | [Graphs & Dynamic Programming](/curriculum/lesson-5)     | Graph traversal, Dijkstra's, DP patterns, TSP          |
|  6  | [Tackling the Coding Interview](/curriculum/lesson-6)    | Interview formats, problem-solving frameworks           |
|  7  | [System Design Basics](/curriculum/lesson-7)    | Scalability, load balancing, databases, caching                  |

---

## Problem Sets

All problem sets live in the course GitHub repository:

**[OSG-UK-Tech-Resources/osg-dsa-python-psets](https://github.com/OSG-UK-Tech-Resources/osg-dsa-python-psets)**

```bash
# Fork the repo on GitHub, then clone your fork
git clone git@github.com:YOUR-USERNAME/osg-dsa-python-psets.git
cd osg-dsa-python-psets

# Add upstream for future updates
git remote add upstream git@github.com:OSG-UK-Tech-Resources/osg-dsa-python-psets.git

# Install dependencies (Python 3.9+)
pip install -r requirements.txt
```

---

## Submitting Your Work

All problem sets are submitted via **Pull Request** on GitHub:

1. **Fork** the `osg-dsa-python-psets` repo (one-time setup)
2. **Implement** your solution — see below for what you can submit
3. **Run tests locally** to make sure everything passes
4. **Push** to your fork and open a PR titled `OSG-YourName-PSX`

Two automated checks run on every PR:

| Check                     | What It Does                                           |
| ------------------------- | ------------------------------------------------------ |
| **Guard Protected Files** | Blocks changes to infrastructure and CI files          |
| **Grade Problem Set**     | Runs the test suite and reports pass/fail              |

**What you can submit:** You're free to include any of the following in your PR:
- `_solutions.py` — your implementations
- Jupyter notebooks (`.ipynb`) — for exploration and write-ups
- Notes and write-ups (`.txt`, `.md`)
- Timing output files or any other supporting files

**What is blocked** (these files define the problem or CI pipeline and must not be changed):
- `.github/` — CI workflows
- `sorters.py`, `maze.py` — infrastructure that defines the problem
- Test files (`test_*.py`)

:::tip
Open a **Draft PR** early to get CI feedback while you're still working. Convert to "Ready for Review" when you're done.
:::

---

## Optional Courses

Supplementary material for students who want extra depth before starting the main curriculum, or who are targeting quant and data-heavy roles.

| # | Course | Focus |
|:-:| ------ | ----- |
| — | [Python & NumPy Practice](/curriculum/python-ds/python-numpy) | Python fundamentals + matrix operations + NumPy |
| — | [Pandas Practice](/curriculum/python-ds/pandas) | Data manipulation and analysis with Pandas |
