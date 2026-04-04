---
title: "DSA Learning Resources"
description: Curated videos and articles for every topic in the OSG DSA curriculum — Lessons 1 to 5.
slug: /curriculum/dsa-resources
---

# DSA Learning Resources

> _Curated videos and articles for Lessons 1 – 5 of the OSG Tech Curriculum._

---

## How to Use This Page

This page is your study companion alongside the lesson slides. **Videos are the primary learning path** — they are sequenced so that watching them in order is enough to fully learn each topic. Articles are listed as supplementary reading for deeper understanding, alternative explanations, or quick reference.

For each topic, the recommended approach is:

1. **Watch the videos** — in the order listed. Pause and code along where you can.
2. **Do the homework** (Problem Sets linked in each lesson page).
3. **Read the articles** if you want a second perspective or something isn't clicking.
4. **Practice on LeetCode** using the problems in each lesson.

---

## Lesson 1 — Computer Systems & Python Basics

### 1.1 · How Computers Work

These videos give you the mental model of what a computer actually is before you start writing code. Understanding CPU, RAM, and how programs execute makes everything else click faster.

#### 🎬 Videos

**[CS50 Short: Hardware](https://video.cs50.io/6mbFO0ZLMW8)**
*Harvard CS50 · ~20 min*
Harvard's gold-standard intro. Covers the CPU, RAM, hard disks, flash memory, and how programs load into memory. Precise, visual, and authoritative — the best 20-minute primer on computer hardware you'll find.

**[Crash Course Computer Science — Full Playlist](https://www.youtube.com/playlist?list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo)**
*Crash Course · ~45 min for episodes 1–4*
The first 4 episodes cover how computers work, binary, the CPU, and memory. Beautifully animated, designed for absolute beginners. Watch episodes 1–4 for this course.

#### 📄 Supplementary Articles

- [Computer Organization and Architecture Tutorials — GeeksforGeeks](https://www.geeksforgeeks.org/computer-organization-and-architecture-tutorials/) — Detailed written reference covering CPU architecture, ALU, registers, and memory hierarchies.
- [Computer Hardware Architecture — Python for Everybody](https://runestone.academy/ns/books/published/py4e-int/intro/computerHardwareArch.html) — Short and accessible. Explains main memory, secondary storage, and the CPU's fetch-execute cycle.

---

### 1.2 · Python Fundamentals

Python is the language of choice for this curriculum. These resources will get you from zero to comfortable with variables, types, control flow, loops, and functions.

#### 🎬 Videos

**[Python Programming Beginner Tutorials — Corey Schafer](https://www.youtube.com/playlist?list=PL-osiE80TeTskrapNbzXhwoFUiLCjGgY7)**
*Corey Schafer · 9 hours (playlist)*
The single best free Python beginner series on YouTube. Covers everything: variables, data types (strings, integers, lists, dicts, sets), control flow, loops, and functions. Clear, well-paced, and production-quality. Work through it at your own pace — you can skip topics you already know.

**[Python as Fast as Possible — Tech With Tim](https://www.youtube.com/watch?v=VchuKL44s6E)**
*Tech With Tim · ~75 min*
A condensed, high-speed run through all the essentials. Great for reviewing concepts quickly or for students who already have some coding experience and just need a Python syntax refresher.

#### 📄 Supplementary Articles

- [Python Variables — GeeksforGeeks](https://www.geeksforgeeks.org/python/python-variables/) — Clean reference for variable rules, naming conventions, and the `type()` function.
- [Python Data Types — GeeksforGeeks](https://www.geeksforgeeks.org/python/python-data-types/) — Overview of all built-in types: numeric, string, list, tuple, dict, set, and boolean.

---

### 1.3 · Object-Oriented Programming (OOP)

OOP is one of the most tested concepts in technical interviews. You need to understand classes, objects, inheritance, encapsulation, and abstraction fluently.

#### 🎬 Videos

**[Python OOP Tutorials — Working with Classes — Corey Schafer](https://www.youtube.com/playlist?list=PL-osiE80TeTsqhIuOqKhwlXsIBIdSeYtc)**
*Corey Schafer · ~1.5 hours (playlist)*
The best OOP tutorial series for Python. Walks through classes and instances, class vs instance variables, inheritance, special (dunder) methods, and property decorators. Watch all 6 videos in sequence — they build on each other logically.

**[Object Oriented Programming with Python — freeCodeCamp](https://www.youtube.com/watch?v=Ej_02ICOIgs)**
*freeCodeCamp · ~2 hours*
A complete OOP course covering constructors, class vs static methods, inheritance, and getters/setters. Good as a second pass to reinforce concepts from Corey Schafer's series.

#### 📄 Supplementary Articles

- [Object-Oriented Programming in Python — Real Python](https://realpython.com/python3-object-oriented-programming/) — Comprehensive written guide. Explains how OOP groups data and behaviours into objects, with worked examples.
- [Inheritance and Composition in Python — Real Python](https://realpython.com/inheritance-composition-python/) — Deep dive into "is-a" vs "has-a" relationships — important for designing clean, reusable code.

---

## Lesson 2 — Lists, Arrays, Big O & Sorting

### 2.1 · Big O Notation & Time Complexity

Big O is the language of every technical interview. You must be able to analyse the time and space complexity of any solution you write. These videos will get you there.

#### 🎬 Videos

**[Big O Notation — Full Course — freeCodeCamp](https://www.freecodecamp.org/news/learn-big-o-notation/)**
*freeCodeCamp · ~2 hours*
A comprehensive course covering O(1), O(n), O(log n), O(n log n), O(n²), O(2ⁿ), and space complexity. Uses diagrams, animations, and code examples throughout. The most complete beginner treatment of Big O available for free.

**[Algorithms Playlist — Abdul Bari](https://www.youtube.com/playlist?list=PLIY8eNdw5tW_zX3OCzX7NJ8bL1p6pWfgG)**
*Abdul Bari · 84 videos*
Widely regarded as one of the best DSA YouTube channels. Abdul Bari's early videos (watch the first 10–12) cover algorithm analysis, time complexity, and Big O in exceptional depth. His methodical pace and whiteboard style make difficult concepts stick. Return to this playlist throughout the curriculum.

#### 📄 Supplementary Articles

- [Big O Notation — Big-O Analysis — GeeksforGeeks](https://www.geeksforgeeks.org/dsa/analysis-algorithms-big-o-analysis/) — Concise written reference with examples of each complexity class.
- [Big O Notation — NeetCode Cheatsheet](https://neetcode.io/cheatsheets/big-o-notation) — Quick visual reference for Big O complexity classes — great for revision before interviews.

---

### 2.2 · Arrays and Lists

#### 🎬 Videos

Big O and arrays are taught together in the freeCodeCamp Big O course above and in Abdul Bari's playlist. The NeetCode DSA for Beginners course also covers arrays explicitly:

**[Data Structures and Algorithms for Beginners — NeetCode](https://neetcode.io/courses/dsa-for-beginners/0)**
*NeetCode · Full course (free)*
NeetCode's structured beginner course walks through every data structure and algorithm in the curriculum with short, focused videos (10–20 min each) and links to practice problems. Use this alongside the other videos — NeetCode is specifically tuned for coding interview preparation.

#### 📄 Supplementary Articles

- [Array Data Structure — GeeksforGeeks](https://www.geeksforgeeks.org/dsa/array-data-structure-guide/) — Clear written explanation of arrays: memory layout, indexing, and time complexity of operations.
- [Python Lists — Programiz](https://www.programiz.com/python-programming/list) — Covers Python's dynamic list specifically: creation, indexing, slicing, and built-in methods.

---

### 2.3 · Searching: Linear & Binary Search

#### 🎬 Videos

**[CS50 Short: Binary Search](https://video.cs50.io/T98PIp4omUA)**
*Harvard CS50 · ~10 min*
A perfectly concise visual walkthrough of binary search. CS50's animation-style explanations make the divide-and-conquer intuition clear. Watch this before writing any binary search code.

**[Binary Search — NeetCode DSA for Beginners](https://neetcode.io/courses/dsa-for-beginners/0)**
*NeetCode · ~15 min*
NeetCode's binary search lesson focuses on the implementation and links directly to LeetCode problems. Ideal for making the conceptual understanding concrete with code.

#### 📄 Supplementary Articles

- [Binary Search Algorithm — GeeksforGeeks](https://www.geeksforgeeks.org/dsa/binary-search/) — Written walkthrough of binary search with Python, Java, and C++ implementations.
- [Binary Search — Programiz](https://www.programiz.com/dsa/binary-search) — Illustrated step-by-step explanation with pseudocode and complexity analysis.

---

### 2.4 · Sorting Algorithms

Sorting is a cornerstone of DSA and comes up constantly in interviews. You need to understand how each algorithm works, its time/space complexity, and when to use it.

#### 🎬 Videos

**[Sorting Algorithms Mini-Series — YouTube](https://www.classcentral.com/course/youtube-sorting-algorithms-mini-series-91050)**
*Class Central · ~5 hours*
A comprehensive multi-video series covering Selection Sort, Bubble Sort, Merge Sort, QuickSort, Insertion Sort, and more. Colour-coded visualisations show exactly what each pass does.

**[CS50 2020 Lecture 3 — Algorithms](https://cs50.harvard.edu/college/2020/spring/notes/3/)**
*Harvard CS50 · ~2 hours*
CS50's algorithms lecture introduces selection sort, bubble sort, and merge sort with clear visual demonstrations. The lecture notes are also excellent.

**[Sorting Visualiser — VisuAlgo](https://visualgo.net/en/sorting)**
*VisuAlgo · Interactive tool*
Not a video — but essential. VisuAlgo lets you step through every sorting algorithm visually, at your own pace. Use this alongside the videos to build the intuition for what each algorithm actually does.

#### 📄 Supplementary Articles

- [Merge Sort — GeeksforGeeks](https://www.geeksforgeeks.org/dsa/merge-sort/) — Detailed written explanation of merge sort with diagrams and Python/Java/C++ code.
- [Quick Sort — GeeksforGeeks](https://www.geeksforgeeks.org/dsa/quick-sort-algorithm/) — Covers the partition step and pivot selection strategies clearly.
- [Sorting Algorithms Guide — freeCodeCamp Forum](https://forum.freecodecamp.org/t/sorting-algorithms/297483) — Community-compiled reference comparing all major sorting algorithms.

---

## Lesson 3 — Linked Lists, Queues, Stacks & Hash Tables

### 3.1 · Linked Lists

Linked lists are fundamental for understanding memory, pointers, and the two-pointer technique. They appear directly in interview questions.

#### 🎬 Videos

**[CS50 Short: Singly-Linked Lists](https://video.cs50.io/zQI3FyWm144)**
*Harvard CS50 · ~10 min*
Precise, visual walkthrough of how singly-linked lists work in memory — nodes, pointers, insertion, and deletion. Watch this first.

**[CS50 Short: Doubly-Linked Lists](https://video.cs50.io/FHMPswJDCvU)**
*Harvard CS50 · ~8 min*
Builds on the singly-linked list video to show how bidirectional pointers work. Essential for understanding the full picture.

**[Linked Lists in Technical Interviews — freeCodeCamp](https://www.freecodecamp.org/news/linked-lists-in-technical-interviews/)**
*freeCodeCamp · Article + Video*
Bridges the gap between theory and interviews. Covers common linked list patterns: reversal, cycle detection, and the two-pointer technique — exactly what gets tested.

#### 📄 Supplementary Articles

- [How Does a Linked List Work? — freeCodeCamp](https://www.freecodecamp.org/news/how-linked-lists-work/) — Clear beginner guide: what linked lists are, how they store data, and when to use them over arrays.
- [Introduction to Linked List — GeeksforGeeks](https://www.geeksforgeeks.org/dsa/introduction-to-linked-list-data-structure/) — Thorough reference with visual diagrams and multi-language implementations.

---

### 3.2 · Stacks

Stacks are deceptively simple but incredibly powerful. Bracket matching, undo/redo, call stacks — they all run on this data structure.

#### 🎬 Videos

**[Algorithms Playlist — Abdul Bari](https://www.youtube.com/playlist?list=PLIY8eNdw5tW_zX3OCzX7NJ8bL1p6pWfgG)**
*Abdul Bari · ~20 min for stack videos*
Abdul Bari's stack lectures are among the clearest available. His whiteboard style and step-by-step approach make LIFO, push/pop, and stack applications highly intuitive. Find the "Stack" videos in his playlist.

**[Data Structures Easy to Advanced — freeCodeCamp](https://www.youtube.com/watch?v=RBSGKlAvoiM)**
*freeCodeCamp · 8 hours (full course)*
A complete data structures course by a Google engineer. Covers stacks, queues, linked lists, and hash tables with high-quality animations and implementations. You can jump to specific timestamps for each data structure — the stack section is approximately at the 3-hour mark.

#### 📄 Supplementary Articles

- [Intro to Stacks — freeCodeCamp](https://www.freecodecamp.org/news/intro-to-stacks-data-structure-and-algorithm-tutorial/) — Beginner-friendly written guide: LIFO principle, push/pop, and real-world uses (bracket matching, browser history).
- [Stack Data Structure — Programiz](https://www.programiz.com/dsa/stack) — Concise reference with Python implementation and complexity analysis.

---

### 3.3 · Queues

Queues are the foundation of BFS, task scheduling, and many real-world systems. Understanding them deeply unlocks graph traversal.

#### 🎬 Videos

**[Data Structures Playlist — WilliamFiset](https://www.youtube.com/playlist?list=PLDV1Zeh2NRsB6SWFMQvI6LDyWMEBwxV0q)**
*WilliamFiset · Queue section (~15 min)*
WilliamFiset is a Google engineer whose data structures series is renowned for rigour and clarity. The queue videos cover FIFO, enqueue/dequeue, and real-world applications with clean animations.

**[Data Structures Easy to Advanced — freeCodeCamp](https://www.youtube.com/watch?v=RBSGKlAvoiM)**
*freeCodeCamp · Queue section*
Same 8-hour course as above. The queue section gives a thorough treatment with code. Bookmarked here as a second perspective.

#### 📄 Supplementary Articles

- [Introduction to Queue — GeeksforGeeks](https://www.geeksforgeeks.org/dsa/introduction-to-queue-data-structure-and-algorithm-tutorials/) — FIFO principle, operations, and real-world applications in BFS and task scheduling.
- [Queue Data Structure — Programiz](https://www.programiz.com/dsa/queue) — Python implementation with clear diagrams.

---

### 3.4 · Hash Tables

Hash tables are the single most used data structure in coding interviews. Two Sum, group anagrams, frequency counts — they all run on hash maps.

#### 🎬 Videos

**[Hash Table Implementation — NeetCode DSA for Beginners](https://neetcode.io/courses/dsa-for-beginners/27)**
*NeetCode · ~20 min*
NeetCode's hash map lesson is interview-focused: covers how hash functions work, collision handling, and directly links to practice problems. Ideal for connecting theory to interview problems.

**[Data Structures Easy to Advanced — freeCodeCamp](https://www.youtube.com/watch?v=RBSGKlAvoiM)**
*freeCodeCamp · Hash table section*
The 8-hour course covers hash tables in exceptional depth: separate chaining, open addressing, linear probing, quadratic probing, double hashing, and deletion. This is the most comprehensive free treatment available.

#### 📄 Supplementary Articles

- [Hash Table Explained — freeCodeCamp](https://www.freecodecamp.org/news/hash-tables/) — Key-value storage, hash functions, collision handling, and practical implementation.
- [Hash Table Data Structure — Programiz](https://www.programiz.com/dsa/hash-table) — Covers hash functions, chaining, and implementations in Python, Java, and C++.

---

## Lesson 4 — Heaps & Trees

### 4.1 · Binary Trees & Tree Traversal

Trees are everywhere in interviews. Before you can tackle any tree problem you need to understand the structure and be fluent in all four traversal types.

#### 🎬 Videos

**[Trees Section — NeetCode DSA for Beginners](https://neetcode.io/courses/dsa-for-beginners/0)**
*NeetCode · Trees section (~45 min total)*
NeetCode's tree videos are concise and interview-focused. They cover binary tree structure, recursive properties, and all traversal types (BFS level-order, DFS pre/in/post-order) with linked LeetCode problems after each concept.

**[Binary Tree Bootcamp — Back To Back SWE](https://www.youtube.com/watch?v=BHB0B1jFKQc)**
*Back To Back SWE · ~1 hour*
An in-depth bootcamp covering full, complete, and perfect trees, plus all traversal types. Back To Back SWE's whiteboard explanations are excellent for building deep understanding before the LeetCode grind.

#### 📄 Supplementary Articles

- [Binary Tree Data Structure — GeeksforGeeks](https://www.geeksforgeeks.org/dsa/binary-tree-data-structure/) — Comprehensive written reference: tree terminology, properties, types, and traversal algorithms.
- [Mastering Binary Tree Traversals — Medium](https://medium.com/plain-simple-software/mastering-binary-tree-traversals-a-comprehensive-guide-d7203b1f7fcd) — Visual guide with code for all four traversal types.

---

### 4.2 · Binary Search Trees (BST)

#### 🎬 Videos

**[Binary Search Tree — NeetCode DSA for Beginners, Lesson 17](https://neetcode.io/courses/dsa-for-beginners/17)**
*NeetCode · ~15 min*
Covers BST search, insertion, and deletion with clean code walkthroughs. Linked to LeetCode problems directly.

**[Binary Search Trees — Abdul Bari](https://www.youtube.com/playlist?list=PLIY8eNdw5tW_zX3OCzX7NJ8bL1p6pWfgG)**
*Abdul Bari · BST videos in playlist*
Abdul Bari's BST lectures go into depth on operations and complexity. Find the "Binary Search Tree" videos in his algorithms playlist. His walkthrough of deletion (the trickiest BST operation) is particularly clear.

#### 📄 Supplementary Articles

- [Binary Search Tree — GeeksforGeeks](https://www.geeksforgeeks.org/dsa/binary-search-tree-data-structure/) — Covers insertion, search, deletion with visual diagrams and code.
- [BST Operations — Programiz](https://www.programiz.com/dsa/binary-search-tree) — Illustrated step-by-step for all operations with Python implementation.

---

### 4.3 · Heaps & Priority Queues

Heaps power priority queues, which are essential for Dijkstra's algorithm, scheduling problems, and "top K elements" interview questions.

#### 🎬 Videos

**[Priority Queue / Heap — WilliamFiset Data Structures](https://www.youtube.com/playlist?list=PLDV1Zeh2NRsB6SWFMQvI6LDyWMEBwxV0q)**
*WilliamFiset · Priority Queue section (~30 min)*
WilliamFiset's priority queue videos are widely regarded as the best free explanation available. Covers the heap invariant, min-heap vs max-heap, heapify, insertion, and removal — with clear animations throughout.

**[Heaps / Priority Queue — NeetCode DSA for Beginners](https://neetcode.io/courses/dsa-for-beginners/0)**
*NeetCode · Heaps section*
NeetCode's heaps lesson focuses on practical usage: how to use Python's `heapq` module, and the "top K elements" pattern that appears in many LeetCode problems.

#### 📄 Supplementary Articles

- [Introduction to Priority Queue — GeeksforGeeks](https://www.geeksforgeeks.org/dsa/priority-queue-set-1-introduction/) — Written reference covering priority queue operations, heap implementation, and complexity.
- [Priority Queue Data Structure — Programiz](https://www.programiz.com/dsa/priority-queue) — Concise explainer with Python implementation using `heapq`.

---

### 4.4 · Tries (Prefix Trees)

Tries are used for autocomplete and spell-checkers. They're a less common interview topic but come up at companies like Google and Meta.

#### 🎬 Videos

**[Implement Trie — NeetCode Solution & Explanation](https://neetcode.io/solutions/implement-trie-prefix-tree)**
*NeetCode · ~15 min*
NeetCode's walkthrough of the classic LeetCode Trie problem covers insert, search, and startsWith operations. Clear implementation with interview-ready code.

**[Tries — Back To Back SWE](https://www.youtube.com/watch?v=zIjfhVPRZCg)**
*Back To Back SWE · ~20 min*
An excellent conceptual introduction to how tries work, their node structure, and why they're more efficient than hash maps for prefix-based lookups.

#### 📄 Supplementary Articles

- [The Trie Data Structure — freeCodeCamp](https://www.freecodecamp.org/news/trie-prefix-tree-algorithm-ee7ab3fe3413/) — Beginner-friendly walkthrough of trie structure, with insert/search/startsWith code.
- [Trie Data Structure — GeeksforGeeks](https://www.geeksforgeeks.org/dsa/introduction-to-trie-data-structure-and-algorithm-tutorials/) — Visual explanation with implementation and complexity analysis.

---

## Lesson 5 — Graphs & Dynamic Programming

### 5.1 · Graph Fundamentals & Representations

Graphs are the most complex data structure in the curriculum. Master the fundamentals and representations first — everything else builds on this.

#### 🎬 Videos

**[Algorithms Course — Graph Theory Tutorial from a Google Engineer — freeCodeCamp](https://www.youtube.com/watch?v=09_LlHjoEiY)**
*WilliamFiset on freeCodeCamp · 7 hours*
The most comprehensive free graph algorithms course available. Covers graph representations (adjacency matrix, adjacency list), DFS, BFS, Dijkstra's, Bellman-Ford, Floyd-Warshall, MST, and more — with implementations in Java. You don't need to watch this end to end; use it as a reference and watch the sections that match your current lesson. Topics relevant to this lesson: the first ~2 hours.

**[Intro to Graphs — NeetCode DSA for Beginners, Lesson 28](https://neetcode.io/courses/dsa-for-beginners/28)**
*NeetCode · ~22 min*
NeetCode's concise introduction to graphs — nodes, edges, directed vs undirected, weighted vs unweighted, and the two main representation styles. Interview-focused and directly links to LeetCode practice.

#### 📄 Supplementary Articles

- [Graph Algorithms in Python: BFS, DFS, and Beyond — freeCodeCamp](https://www.freecodecamp.org/news/graph-algorithms-in-python-bfs-dfs-and-beyond/) — Python-specific walkthrough of graph representations and traversal algorithms with code.
- [Complete Guide to Graph Data Structure — Ajit Singh](https://singhajit.com/data-structures/graph/) — Clear visual explanation of adjacency matrix vs adjacency list trade-offs.

---

### 5.2 · Graph Traversal — BFS & DFS

BFS and DFS are two of the most important algorithms you will learn. Nearly every graph problem is a variation of one of them.

#### 🎬 Videos

**[Graph Traversal Crash Course — freeCodeCamp](https://www.freecodecamp.org/news/coding-interview-graph-traversal-crash-course-the-only-one-youll-ever-need/)**
*freeCodeCamp · Article + Video*
The self-described "only graph traversal crash course you'll ever need." Covers BFS (queue-based, layer-by-layer) and DFS (stack/recursion, deep exploration) with interview-oriented explanations and visual animations.

**[Algorithms Course — Graph Theory (WilliamFiset)](https://www.youtube.com/watch?v=09_LlHjoEiY)**
*freeCodeCamp · BFS & DFS sections*
Use the same 7-hour course from above. The BFS and DFS sections provide rigorous implementations with complexity analysis (O(V + E)).

#### 📄 Supplementary Articles

- [Breadth-First Search (BFS) — GeeksforGeeks](https://www.geeksforgeeks.org/dsa/breadth-first-search-or-bfs-for-a-graph/) — Written walkthrough with step-by-step diagrams and Python code.
- [BFS vs DFS: A Guide for Deep Understanding — PuppyGraph](https://www.puppygraph.com/blog/depth-first-search-vs-breadth-first-search) — Side-by-side comparison of when to use BFS vs DFS, with real-world examples.

---

### 5.3 · Dijkstra's Shortest Path Algorithm

Dijkstra's is the most important shortest-path algorithm. It's tested at top firms (especially quant/finance) and powers your Problem Set 7c maze solver.

#### 🎬 Videos

**[Dijkstra's Algorithm — WilliamFiset](https://www.youtube.com/watch?v=09_LlHjoEiY)**
*freeCodeCamp Graph Theory course · Dijkstra section (~30 min)*
WilliamFiset's treatment of Dijkstra's is step-by-step and visual. He builds up the priority queue implementation clearly, explains why greedy works here, and walks through the complexity. Jump to the Dijkstra's section in the graph theory course.

**[Dijkstra's Shortest Path — Abdul Bari](https://www.youtube.com/playlist?list=PLIY8eNdw5tW_zX3OCzX7NJ8bL1p6pWfgG)**
*Abdul Bari · ~25 min*
Abdul Bari's Dijkstra's lecture is whiteboard-based and extremely clear. His worked examples are particularly helpful for building the manual trace intuition that interviews often test.

#### 📄 Supplementary Articles

- [Dijkstra's Algorithm — A Detailed and Visual Introduction — freeCodeCamp](https://www.freecodecamp.org/news/dijkstras-shortest-path-algorithm-visual-introduction/) — Step-by-step graphical walk-through of the algorithm. Great for understanding the logic before writing code.
- [Dijkstra's Algorithm — GeeksforGeeks](https://www.geeksforgeeks.org/dsa/dijkstras-shortest-path-algorithm-greedy-algo-7/) — Implementation-focused with Python code and complexity analysis.

---

### 5.4 · Dynamic Programming

Dynamic programming is the hardest and most rewarding topic in the curriculum. It separates good engineers from great ones. Master memoization and tabulation and you'll unlock a large class of problems.

#### 🎬 Videos

**[Dynamic Programming — Learn to Solve Algorithmic Problems — freeCodeCamp](https://www.youtube.com/watch?v=oBt53YbR9Kk)**
*Alvin Zablan on freeCodeCamp · 5 hours*
**Start here.** This is the definitive beginner DP course. Alvin Zablan builds DP intuition from scratch — starting with Fibonacci and grid traversal, then systematically teaching memoization (top-down) and tabulation (bottom-up) patterns. By the end, you'll have a repeatable framework for approaching any DP problem. One of the highest-rated free programming courses available.

**[1-D Dynamic Programming — NeetCode DSA for Beginners](https://neetcode.io/courses/dsa-for-beginners/0)**
*NeetCode · DP section*
NeetCode's DP lessons bridge the 5-hour freeCodeCamp course above to actual LeetCode problems (Climbing Stairs, House Robber, Coin Change). Use this after the freeCodeCamp course to start applying what you've learned.

#### 📄 Supplementary Articles

- [The Beginner's Guide to Dynamic Programming — Jason Qiu (Medium)](https://medium.com/@jason_qiu/the-beginners-guide-to-dynamic-programming-38fa1053f152) — A clear, accessible introduction to DP concepts with worked examples. Focuses on building intuition around overlapping subproblems and optimal substructure.
- [Dynamic Programming for Beginners — freeCodeCamp](https://www.freecodecamp.org/news/learn-dynamic-programing-to-solve-coding-challenges/) — Written companion to the video course above. Covers memoization and tabulation with visualisations and detailed examples.
- [Tabulation vs Memoization — GeeksforGeeks](https://www.geeksforgeeks.org/dsa/tabulation-vs-memoization/) — Side-by-side comparison of both approaches with code. Good for understanding when to use each.

---

## Quick Reference: Key Channels & Educators

| Educator / Channel | Best For | Link |
|---|---|---|
| **CS50 (Harvard)** | Computer architecture, binary search, linked lists | [YouTube](https://www.youtube.com/@cs50) |
| **Corey Schafer** | Python fundamentals, OOP | [YouTube](https://www.youtube.com/@coreyms) |
| **NeetCode** | All DSA topics, interview-focused | [neetcode.io](https://neetcode.io/courses/dsa-for-beginners) |
| **Abdul Bari** | Big O, sorting, BSTs, Dijkstra's, DP | [YouTube Playlist](https://www.youtube.com/playlist?list=PLIY8eNdw5tW_zX3OCzX7NJ8bL1p6pWfgG) |
| **WilliamFiset** | Graphs, heaps, priority queues | [freeCodeCamp Graph Course](https://www.youtube.com/watch?v=09_LlHjoEiY) |
| **Back To Back SWE** | Trees, tries | [YouTube](https://www.youtube.com/@BackToBackSWE) |
| **freeCodeCamp** | Big O, DP, graphs, linked lists, OOP | [YouTube](https://www.youtube.com/@freecodecamp) |
| **Tech With Tim** | Python basics, OOP | [YouTube](https://www.youtube.com/@TechWithTim) |

---

[← Back to Curriculum](/curriculum)
