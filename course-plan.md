---
title: OSG UK Tech Curriculum
description: The complete course plan for the OSG UK Software Engineering recruiting track — from zero to offer-ready.
slug: /
---

# OSG UK Tech Curriculum

> **From zero programming knowledge to interview-ready.**
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

|  #  | Lesson                                                                                           | Problem Set        | Core Focus                                                       |
| :-: | ------------------------------------------------------------------------------------------------ | ------------------ | ---------------------------------------------------------------- |
|  0  | [UK Tech & SWE Overview](#lesson-0--uk-tech--swe-overview)                                       | —                  | Industry landscape, sectors, salaries, recruitment timeline      |
|  1  | [Computer Systems & Python Basics](#lesson-1--computer-systems--python-basics)                   | PS1                | Architecture fundamentals, Python syntax, OOP                    |
|  2  | [Lists, Arrays, Big O & Sorting](#lesson-2--lists-arrays-big-o--sorting)                         | PS2 + PS3          | Data structures, time complexity, searching & sorting algorithms |
|  3  | [Linked Lists, Queues, Stacks & Hash Tables](#lesson-3--linked-lists-queues-stacks--hash-tables) | PS6                | Linear structures, FIFO/LIFO, hashing, Markov models             |
|  4  | [Heaps & Trees](#lesson-4--heaps--trees)                                                         | PS4 + PS5          | Binary trees, BSTs, scapegoat trees, tries, BFS/DFS traversal    |
|  5  | [Graphs & Dynamic Programming](#lesson-5--graphs--dynamic-programming)                           | PS7a + PS7b + PS7c | Graph representations, BFS, Dijkstra's, DP patterns              |
|  6  | [Tackling the Coding Interview](#lesson-6--tackling-the-coding-interview)                        | PS8                | Interview formats, problem-solving frameworks, TSP approximation |
|  7  | [System Design Basics](#lesson-7--system-design-basics)                                          | —                  | Scalability, load balancing, databases, caching                  |

---

## Lesson 0 · UK Tech & SWE Overview

> _No coding yet — this is your strategic foundation._

Your mentor will walk you through the UK software engineering landscape so you understand **where you're heading** before you write a single line of code. You'll explore the four major sectors hiring SWE talent, compare salaries and career progression paths, and map out the recruitment timeline so nothing catches you off guard.

### What You'll Cover

- **The four sectors:** Finance (banks & hedge funds), Big Tech, Startups, and IT Consulting — what each one actually looks like day-to-day
- **Salary benchmarks:** From ~£40k in consulting to £150k+ at top quant firms
- **Career progression:** Entry level → Senior Engineer → Leadership, and how fast you can move
- **Recruitment timeline:** When applications open (Aug–Sep), when assessments hit (Nov–Jan), and when technical interviews happen (Jan–Mar)
- **A day in the life:** What engineers actually do at a bank vs a trading firm vs a startup

### Homework

> No problem set for this lesson. Instead, start thinking about which sectors interest you most — your mentor will use this to tailor your recruiting strategy.

---

## Lesson 1 · Computer Systems & Python Basics

> _Understand what's happening under the hood, then write your first Python._

This is where the technical journey begins. Your mentor will give you a grounding in how computers actually work — CPU, memory, OS, kernel — before diving into Python. You'll cover variables, control flow, functions, and object-oriented programming. By the end, you'll be writing real code.

### What You'll Cover

- **Why architecture matters:** How understanding hardware makes you a better developer
- **Key system components:** CPU, RAM, OS, kernel space vs user space, I/O
- **Programming languages:** High-level vs low-level, compiled vs interpreted, and why Python is the go-to for interviews
- **Python fundamentals:** Variables & types (`int`, `str`, `list`, `dict`, `set`), control flow (`if`/`elif`/`else`, `for`, `while`), function definitions
- **OOP crash course:** Classes, inheritance, encapsulation, abstraction — the building blocks of clean code

### Homework — Problem Set 1: Python Fundamentals

```
📂 ps1/
├── ps1.ipynb            ← Read this first (guided walkthrough)
├── ps1_solutions.py     ← Implement your solutions here
└── test_ps1.py          ← Run to check your work
```

**What you'll build:** Practice with loops, recursion, and list manipulation to cement the Python basics from the lesson.

```bash
# Test your solutions
pytest ps1/test_ps1.py -v
```

---

## Lesson 2 · Lists, Arrays, Big O & Sorting

> _Your first real data structures — and the language to talk about performance._

This lesson introduces the two most fundamental data structures (arrays and lists), teaches you Big O notation so you can reason about efficiency, and walks through the classic searching and sorting algorithms. This is the vocabulary every technical interview expects you to speak.

### What You'll Cover

- **Arrays vs Lists:** Fixed-size contiguous memory vs dynamic resizable collections
- **Big O notation:** O(1), O(log n), O(n), O(n log n), O(n²) — what they mean and when they show up
- **Searching:** Linear search and binary search
- **Sorting algorithms:** Bubble sort, insertion sort, selection sort, merge sort, quicksort — how they work, when to use them, and their complexities
- **Example problem walkthroughs** to start building your problem-solving instincts

### Homework — Problem Set 2: Binary Search

```
📂 ps2/
├── ps2.ipynb            ← Guided exploration of binary search variants
├── ps2_solutions.py     ← Your implementations
└── test_ps2.py          ← Automated tests
```

**What you'll build:** Search bitonic arrays, apply binary search on answer spaces, and solve a load-balancing optimisation problem.

### Homework — Problem Set 3: Sorting Detectives

```
📂 ps3/
├── ps3.ipynb            ← The mystery begins here
├── ps3_solutions.py     ← Your detective work
├── sorters.py           ← Six mystery sorting algorithms (A–F)
└── test_ps3.py          ← Automated tests
```

**What you'll build:** Six mystery sorters are provided — one is deliberately broken ("Dr. Evil"). You'll implement functions to test correctness and stability, then identify which sorter implements which algorithm. Think CSI, but for code.

```bash
pytest ps2/test_ps2.py -v
pytest ps3/test_ps3.py -v
```

---

## Lesson 3 · Linked Lists, Queues, Stacks & Hash Tables

> _The data structures that power everything from browser history to trading systems._

Your mentor will take you through the core linear data structures that show up constantly in interviews and real-world systems. You'll understand how linked lists differ from arrays at the memory level, learn FIFO and LIFO patterns, and see how hash tables enable O(1) lookups.

### What You'll Cover

- **Linked Lists:** Singly vs doubly linked, nodes & pointers, operations & complexity, two-pointer technique, dummy nodes
- **Queues (FIFO):** Enqueue/dequeue, real-world uses (task scheduling, BFS)
- **Stacks (LIFO):** Push/pop, real-world uses (undo/redo, call stacks, bracket matching)
- **Hash Tables:** Key-value storage, hash functions, collision handling (chaining vs open addressing)
- **LeetCode walkthroughs** with your mentor

### Homework — Problem Set 6: Markov Model

```
📂 ps6/
├── ps6.ipynb            ← How Markov models work
├── ps6_solutions.py     ← Build your text generator
├── RobertFrost.txt      ← Training data (poetry)
├── aesop.txt            ← Training data (fables)
└── test_ps6.py          ← Automated tests
```

**What you'll build:** Train a character-level Markov model using k-gram frequency tables (hash maps in action!) on real text, then generate new text probabilistically. Feed it Robert Frost and watch it write poetry.

### LeetCode Practice

Your mentor will also assign problems from the slides. Key ones to hit:

- [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)
- [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)
- [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)
- [Remove Nth Node From End](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)

```bash
pytest ps6/test_ps6.py -v
```

---

## Lesson 4 · Heaps & Trees

> _Hierarchical data structures — the backbone of fast search, autocomplete, and game AI._

Trees are everywhere: file systems, databases, DOM rendering, autocomplete, game engines. This lesson covers binary trees, BSTs, heaps, and advanced self-balancing structures. Your mentor will walk through traversal strategies (BFS & DFS) and show how these structures power real systems.

### What You'll Cover

- **Binary Trees:** Structure, balanced vs skewed, recursive properties
- **Tree Traversal:** BFS (level-order) and DFS (pre/in/post-order) with Python implementations
- **Binary Search Trees (BST):** Search, insert, delete — O(log n) average, O(n) worst case
- **Heaps:** Min-heap and max-heap properties, heapify, priority queues
- **Self-balancing trees:** Scapegoat trees and weight-balanced variants
- **LeetCode examples & walkthrough**

### Homework — Problem Set 4: Trees I

```
📂 ps4/
├── ps4.ipynb            ← Scapegoat trees & game trees explained
├── ps4_solutions.py     ← Your implementations
├── tictac_*.txt         ← Game board test files
└── test_ps4.py          ← Automated tests
```

**What you'll build:** Implement a scapegoat tree (a self-balancing BST) and build a minimax game tree to play perfect tic-tac-toe. Your code will literally play games.

### Homework — Problem Set 5: Trees II

```
📂 ps5/
├── ps5.ipynb            ← Weight-balanced trees & tries
├── ps5_solutions.py     ← Your implementations
├── content.txt          ← Autocomplete dictionary
└── test_ps5.py          ← Automated tests
```

**What you'll build:** Extend scapegoat trees with weight-balancing, then implement a Trie data structure with autocomplete functionality — the same tech behind your phone's keyboard suggestions.

```bash
pytest ps4/test_ps4.py -v
pytest ps5/test_ps5.py -v
```

---

## Lesson 5 · Graphs & Dynamic Programming

> _The most powerful (and most asked) topics in technical interviews._

Graphs model relationships — social networks, maps, dependencies. DP solves problems that would otherwise take exponential time. Together, they represent the peak of what interviewers test. Your mentor will cover representations, traversal algorithms, and the DP mindset.

### What You'll Cover

- **Graph fundamentals:** Nodes, edges, directed vs undirected, weighted vs unweighted
- **Representations:** Adjacency matrix, adjacency list, hash table of hash tables
- **Graph traversal:** DFS (recursion/stack) and BFS (queue) — O(V + E) complexity
- **Shortest path algorithms:** Dijkstra's, plus awareness of Bellman-Ford and Floyd-Warshall
- **Dynamic Programming:** Overlapping subproblems, optimal substructure, memoisation vs tabulation
- **DP problem patterns** with worked examples

### Homework — Problem Set 7a: Maze BFS

```
📂 ps7a/
├── ps7a.ipynb           ← BFS on mazes explained
├── ps7a_solutions.py    ← Your maze solver
├── maze-*.txt           ← Test mazes (sample, dense, horizontal, vertical, empty)
└── test_ps7a.py         ← Automated tests
```

**What you'll build:** Implement BFS to find the shortest path through a maze. Classic graph search in action.

### Homework — Problem Set 7b: Maze BFS + Superpowers

```
📂 ps7b/
├── ps7b.ipynb           ← BFS with expanded state space
├── ps7b_solutions.py    ← Your enhanced maze solver
├── maze-*.txt           ← Same mazes, new powers
└── test_ps7b.py         ← Automated tests
```

**What you'll build:** Now your maze solver can **break through walls** — but only a limited number of times. You'll expand the BFS state space to track remaining superpowers. This is a real interview-level twist.

### Homework — Problem Set 7c: Haunted Maze

```
📂 ps7c/
├── ps7c.ipynb           ← Dijkstra's on weighted mazes
├── ps7c_solutions.py    ← Your Dijkstra implementation
├── haunted-maze-*.txt   ← Spooky mazes with ghost costs
└── test_ps7c.py         ← Automated tests
```

**What you'll build:** The maze is now haunted — wall spirits have a "fear cost" proportional to their ASCII value. You'll implement Dijkstra's algorithm to find the path of least fear. Weighted graph pathfinding, done properly.

```bash
pytest ps7a/test_ps7a.py -v
pytest ps7b/test_ps7b.py -v
pytest ps7c/test_ps7c.py -v
```

---

## Lesson 6 · Tackling the Coding Interview

> _You know the theory. Now learn how to perform under pressure._

This lesson shifts from "learning algorithms" to "passing interviews." Your mentor will break down the three types of coding interviews you'll face, teach you a structured framework for approaching any problem, and walk through a full example question in real time.

### What You'll Cover

- **Types of coding interviews:**
  - **Video/Async** (HireVue, HackerRank) — timed, 1–5 questions, code quality + correctness
  - **Live coding** (CoderPad, shared screen) — 1 question, communication is key, ask clarifications
  - **Take-home projects** — untimed, code quality & modularity matter most
- **The problem-solving framework:** Understand → plan → code → test → optimise
- **What interviewers look for:** Clean code, edge case handling, communication, complexity analysis
- **What to do when stuck:** Simplify the problem, think out loud, ask for hints
- **Full example walkthrough** with your mentor

### Homework — Problem Set 8: Travelling Salesman

```
📂 ps8/
├── ps8.ipynb            ← TSP & MST-based approximation explained
├── ps8_solutions.py     ← Your implementation
├── tenpoints.txt        ← Test data (10, 20, 50, 100 cities)
├── twentypoints.txt
├── fiftypoints.txt
├── hundredpoints.txt
└── test_ps8.py          ← Automated tests
```

**What you'll build:** Implement a 2-approximation algorithm for the Travelling Salesman Problem: build a Minimum Spanning Tree using Prim's algorithm, then extract a tour via DFS shortcutting. This is a capstone problem that ties together graphs, trees, and greedy algorithms.

### LeetCode Grind List

Your mentor will provide an extensive homework list of LeetCode problems covering all topics from the course. Aim for **3–5 problems per week** — consistency beats cramming.

```bash
pytest ps8/test_ps8.py -v
```

---

## Lesson 7 · System Design Basics

> _Think beyond algorithms — how do real systems work at scale?_

The final lesson zooms out from code to architecture. System design questions are increasingly common in interviews, especially at Big Tech and senior-ish roles. Your mentor will introduce the key building blocks and walk through how to approach a system design problem.

### What You'll Cover

- **What is system design?** Defining how components interact, scale, and operate under real-world constraints
- **Scalability:** Vertical (scale up) vs horizontal (scale out)
- **Load balancing:** Round robin, least connections, IP hashing, weighted balancing — tools like NGINX, AWS ELB
- **Databases:** SQL (PostgreSQL, MySQL) vs NoSQL (MongoDB, Redis, Cassandra) — when to use which
- **Caching:** Why it matters, where to put it, cache invalidation strategies
- **Tackling system design problems:** A structured framework for whiteboard interviews
- **Example walkthroughs:** Design a URL shortener, a chat app, a news feed

### Homework

> No problem set for this lesson. Instead, practice explaining system designs out loud — your mentor will run mock system design interviews once you're comfortable with the concepts.

---

## Submitting Your Work

All problem sets are submitted via **Pull Request** on GitHub:

1. **Fork** the `osg-dsa-python-psets` repo (one-time setup)
2. **Implement** the `_solutions.py` file for the problem set you're working on
3. **Run tests locally** to make sure everything passes
4. **Push** to your fork and open a PR titled `OSG-YourName-PSX`

Two automated checks run on every PR:

| Check                     | What It Does                                    |
| ------------------------- | ----------------------------------------------- |
| **Guard Protected Files** | Ensures you only modified `_solutions.py` files |
| **Grade Problem Set**     | Runs the test suite and reports pass/fail       |

:::tip
Open a **Draft PR** early to get CI feedback while you're still working. Convert to "Ready for Review" when you're done.
:::

---

## Getting Set Up

```bash
# 1. Fork the repo on GitHub, then clone your fork
git clone git@github.com:YOUR-USERNAME/osg-dsa-python-psets.git
cd osg-dsa-python-psets

# 2. Add upstream for future updates
git remote add upstream git@github.com:OSG-UK-Tech-Resources/osg-dsa-python-psets.git

# 3. Install dependencies (Python 3.9+)
pip install -r requirements.txt

# 4. Open in VS Code — testing sidebar is pre-configured
code .
```

---

<div align="center">

**Built with care by the OSG UK Tech Team**

_Questions? Reach out to your Lead Mentor._

</div>
