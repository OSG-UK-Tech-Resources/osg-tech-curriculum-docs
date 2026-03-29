---
title: "Lesson 2 · Lists, Arrays, Big O & Sorting"
description: Data structures, time complexity, searching and sorting algorithms.
slug: /curriculum/lesson-2
---

# Lesson 2 · Lists, Arrays, Big O & Sorting

> _Your first real data structures — and the language to talk about performance._

This lesson introduces the two most fundamental data structures (arrays and lists), teaches you Big O notation so you can reason about efficiency, and walks through the classic searching and sorting algorithms. This is the vocabulary every technical interview expects you to speak.

---

## What You'll Cover

- **Arrays vs Lists:** Fixed-size contiguous memory vs dynamic resizable collections
- **Big O notation:** O(1), O(log n), O(n), O(n log n), O(n²) — what they mean and when they show up
- **Searching:** Linear search and binary search
- **Sorting algorithms:** Bubble sort, insertion sort, selection sort, merge sort, quicksort — how they work, when to use them, and their complexities
- **Example problem walkthroughs** to start building your problem-solving instincts

---

## Homework — [Problem Set 2: Binary Search](https://github.com/OSG-UK-Tech-Resources/osg-dsa-python-psets/blob/main/ps2/ps2.ipynb)

```
📂 ps2/
├── ps2.ipynb            ← Guided exploration of binary search variants
├── ps2_solutions.py     ← Your implementations
└── test_ps2.py          ← Automated tests
```

**What you'll build:** Search bitonic arrays, apply binary search on answer spaces, and solve a load-balancing optimisation problem.

```bash
pytest ps2/test_ps2.py -v
```

---

## Homework — [Problem Set 3: Sorting Detectives](https://github.com/OSG-UK-Tech-Resources/osg-dsa-python-psets/blob/main/ps3/ps3.ipynb)

```
📂 ps3/
├── ps3.ipynb            ← The mystery begins here
├── ps3_solutions.py     ← Your detective work
├── sorters.py           ← Six mystery sorting algorithms (A–F)
└── test_ps3.py          ← Automated tests
```

**What you'll build:** Six mystery sorters are provided — one is deliberately broken ("Dr. Evil"). You'll implement functions to test correctness and stability, then identify which sorter implements which algorithm. Think CSI, but for code.

```bash
pytest ps3/test_ps3.py -v
```

---

## LeetCode Practice

### Sorting — Implement each algorithm on the same problem

All four sorting problems use [Sort an Array](https://leetcode.com/problems/sort-an-array/description/). The question asks for O(n log n), so you'd need merge sort or quick sort to pass — but implement all four for practice.

| Algorithm | Notes |
| --- | --- |
| [Selection Sort](https://leetcode.com/problems/sort-an-array/description/) | O(n²) — good for understanding in-place swaps |
| [Insertion Sort](https://leetcode.com/problems/sort-an-array/description/) | O(n²) — efficient on nearly-sorted data |
| [Merge Sort](https://leetcode.com/problems/sort-an-array/description/) | O(n log n) — divide and conquer |
| [Quick Sort](https://leetcode.com/problems/sort-an-array/description/) | O(n log n) avg — partition in place |

### Binary Search

| Problem | Notes |
| --- | --- |
| [Binary Search](https://leetcode.com/problems/binary-search/description/) | Implement recursively (iterative version is covered in slides) |
| [Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/) | Binary search on the answer space |

### QuickSelect

| Problem | Notes |
| --- | --- |
| [Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array) | Implement QuickSelect and analyse time & space complexity — you should get O(n) average time |

---

[← Back to Curriculum](/curriculum) &nbsp;|&nbsp; [Next: Linked Lists, Queues, Stacks & Hash Tables →](/curriculum/lesson-3)
