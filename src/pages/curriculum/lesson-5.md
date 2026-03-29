---
title: "Lesson 5 · Graphs & Dynamic Programming"
description: Graph representations, BFS, Dijkstra's, and DP patterns.
slug: /curriculum/lesson-5
---

# Lesson 5 · Graphs & Dynamic Programming

> _The most powerful (and most asked) topics in technical interviews._

Graphs model relationships — social networks, maps, dependencies. DP solves problems that would otherwise take exponential time. Together, they represent the peak of what interviewers test. Your mentor will cover representations, traversal algorithms, and the DP mindset.

---

## What You'll Cover

- **Graph fundamentals:** Nodes, edges, directed vs undirected, weighted vs unweighted
- **Representations:** Adjacency matrix, adjacency list, hash table of hash tables
- **Graph traversal:** DFS (recursion/stack) and BFS (queue) — O(V + E) complexity
- **Shortest path algorithms:** Dijkstra's, plus awareness of Bellman-Ford and Floyd-Warshall
- **Dynamic Programming:** Overlapping subproblems, optimal substructure, memoisation vs tabulation
- **DP problem patterns** with worked examples

---

## Problem Sets

### Maze Series

[PS7a](https://github.com/OSG-UK-Tech-Resources/osg-dsa-python-psets/blob/main/ps7a/ps7a.ipynb), [PS7b](https://github.com/OSG-UK-Tech-Resources/osg-dsa-python-psets/blob/main/ps7b/ps7b.ipynb), and [PS7c](https://github.com/OSG-UK-Tech-Resources/osg-dsa-python-psets/blob/main/ps7c/ps7c.ipynb) are a single escalating series — the same maze environment, each problem set adding a new twist.

**Problem Set 7a — Maze BFS**

```
📂 ps7a/
├── ps7a.ipynb           ← BFS on mazes explained
├── ps7a_solutions.py    ← Your maze solver
├── maze-*.txt           ← Test mazes (sample, dense, horizontal, vertical, empty)
└── test_ps7a.py         ← Automated tests
```

**What you'll build:** Implement BFS to find the shortest path through a maze. Classic graph search in action.

```bash
pytest ps7a/test_ps7a.py -v
```

**Problem Set 7b — Maze BFS + Superpowers**

```
📂 ps7b/
├── ps7b.ipynb           ← BFS with expanded state space
├── ps7b_solutions.py    ← Your enhanced maze solver
├── maze-*.txt           ← Same mazes, new powers
└── test_ps7b.py         ← Automated tests
```

**What you'll build:** Your maze solver can now **break through walls** — but only a limited number of times. You'll expand the BFS state space to track remaining superpowers. A real interview-level twist.

```bash
pytest ps7b/test_ps7b.py -v
```

**Problem Set 7c — Haunted Maze**

```
📂 ps7c/
├── ps7c.ipynb           ← Dijkstra's on weighted mazes
├── ps7c_solutions.py    ← Your Dijkstra implementation
├── haunted-maze-*.txt   ← Spooky mazes with ghost costs
└── test_ps7c.py         ← Automated tests
```

**What you'll build:** The maze is now haunted — wall spirits have a "fear cost" proportional to their ASCII value. Implement Dijkstra's algorithm to find the path of least fear. Weighted graph pathfinding, done properly.

```bash
pytest ps7c/test_ps7c.py -v
```

---

### Travelling Salesman Problem

[Problem Set 8: TSP](https://github.com/OSG-UK-Tech-Resources/osg-dsa-python-psets/blob/main/ps8/ps8.ipynb) is the capstone — it ties together graphs, trees, and greedy algorithms in a single problem.

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

**What you'll build:** Implement a 2-approximation algorithm for the Travelling Salesman Problem — build a Minimum Spanning Tree using Prim's algorithm, then extract a tour via DFS shortcutting.

```bash
pytest ps8/test_ps8.py -v
```

---

## LeetCode Practice

### Dynamic Programming

| Problem |
| --- |
| [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/description/) |
| [Min Cost Climbing Stairs](https://leetcode.com/problems/min-cost-climbing-stairs/description/) |
| [House Robber](https://leetcode.com/problems/house-robber/) |
| [Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/description/) |
| [Coin Change](https://leetcode.com/problems/coin-change/description/) |

### Graphs

| Problem |
| --- |
| [Number of Islands](https://leetcode.com/problems/number-of-islands/description/) |
| [Max Area of Island](https://leetcode.com/problems/max-area-of-island/description/) |
| [Clone Graph](https://leetcode.com/problems/clone-graph/description/) |
| [Rotting Oranges](https://leetcode.com/problems/rotting-oranges/description/) |

---

[← Back to Curriculum](/curriculum) &nbsp;|&nbsp; [Next: Tackling the Coding Interview →](/curriculum/lesson-6)
