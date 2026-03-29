---
title: "Lesson 4 · Heaps & Trees"
description: Binary trees, BSTs, scapegoat trees, tries, and BFS/DFS traversal.
slug: /curriculum/lesson-4
---

# Lesson 4 · Heaps & Trees

> _Hierarchical data structures — the backbone of fast search, autocomplete, and game AI._

Trees are everywhere: file systems, databases, DOM rendering, autocomplete, game engines. This lesson covers binary trees, BSTs, heaps, and advanced self-balancing structures. Your mentor will walk through traversal strategies (BFS & DFS) and show how these structures power real systems.

---

## What You'll Cover

- **Binary Trees:** Structure, balanced vs skewed, recursive properties
- **Tree Traversal:** BFS (level-order) and DFS (pre/in/post-order) with Python implementations
- **Binary Search Trees (BST):** Search, insert, delete — O(log n) average, O(n) worst case
- **Heaps:** Min-heap and max-heap properties, heapify, priority queues
- **Self-balancing trees:** Scapegoat trees and weight-balanced variants
- **LeetCode examples & walkthrough**

---

## Problem Sets

### Self-Balancing Trees & Game AI

[Problem Set 4: Trees I](https://github.com/OSG-UK-Tech-Resources/osg-dsa-python-psets/blob/main/ps4/ps4.ipynb) and [Problem Set 5: Trees II](https://github.com/OSG-UK-Tech-Resources/osg-dsa-python-psets/blob/main/ps5/ps5.ipynb) form a natural pair — PS4 introduces the scapegoat tree and minimax, PS5 extends both.

**Problem Set 4 — Scapegoat Trees & Game AI**

```
📂 ps4/
├── ps4.ipynb            ← Scapegoat trees & game trees explained
├── ps4_solutions.py     ← Your implementations
├── tictac_*.txt         ← Game board test files
└── test_ps4.py          ← Automated tests
```

**What you'll build:** Implement a scapegoat tree (a self-balancing BST) and build a minimax game tree to play perfect tic-tac-toe. Your code will literally play games.

```bash
pytest ps4/test_ps4.py -v
```

**Problem Set 5 — Weight-Balanced Trees & Tries**

```
📂 ps5/
├── ps5.ipynb            ← Weight-balanced trees & tries
├── ps5_solutions.py     ← Your implementations
├── content.txt          ← Autocomplete dictionary
└── test_ps5.py          ← Automated tests
```

**What you'll build:** Extend scapegoat trees with weight-balancing, then implement a Trie with autocomplete — the same tech behind your phone's keyboard suggestions.

```bash
pytest ps5/test_ps5.py -v
```

---

### Markov Model

[Problem Set 6: Markov Model](https://github.com/OSG-UK-Tech-Resources/osg-dsa-python-psets/blob/main/ps6/ps6.ipynb) applies tree-structured thinking to probabilistic text generation.

```
📂 ps6/
├── ps6.ipynb            ← How Markov models work
├── ps6_solutions.py     ← Build your text generator
├── RobertFrost.txt      ← Training data (poetry)
├── aesop.txt            ← Training data (fables)
└── test_ps6.py          ← Automated tests
```

**What you'll build:** Train a character-level Markov model using k-gram frequency tables on real text, then generate new text probabilistically. Feed it Robert Frost and watch it write poetry.

```bash
pytest ps6/test_ps6.py -v
```

---

## LeetCode Practice

### Trees

| Problem |
| --- |
| [Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/) |
| [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/) |
| [Same Tree](https://leetcode.com/problems/same-tree/description/) |
| [Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/) |
| [Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/submissions/) |

### Heaps

| Problem |
| --- |
| [Kth Largest Element in a Stream](https://leetcode.com/problems/kth-largest-element-in-a-stream/) |
| [Last Stone Weight](https://leetcode.com/problems/last-stone-weight/description/) |
| [K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/description/) |

---

[← Back to Curriculum](/curriculum) &nbsp;|&nbsp; [Next: Graphs & Dynamic Programming →](/curriculum/lesson-5)
