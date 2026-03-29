---
title: "Course 1 · Python & NumPy Practice"
description: Python fundamentals, matrix operations from scratch, and NumPy applied to real COVID-19 data.
slug: /curriculum/python-ds/python-numpy
---

# Course 1 · Python & NumPy Practice

📂 [python-numpy-practice/python_numpy_practice.ipynb](https://github.com/OSG-UK-Tech-Resources/osg-python-ds-fundamentals/blob/main/python-numpy-practice/python_numpy_practice.ipynb)

This notebook starts from the very basics of Python and builds up to numerical computing with NumPy. It's split into two parts.

---

## Part 1 — Python Fundamentals & Matrix Operations from Scratch

A thorough walkthrough of core Python syntax: data types (`int`, `float`, `str`, `bool`, `list`, `tuple`, `dict`, `set`), loops, functions, aliasing, lambda functions, `map`, and `filter`. The twist is that you immediately put these skills to work by implementing **matrix operations by hand** — addition, transpose, multiplication, and matrix inversion — without using any libraries. This forces you to write clean, logical Python rather than relying on NumPy shortcuts too early.

---

## Part 2 — NumPy in Practice

Once you've earned it, NumPy is introduced properly. You'll learn how NumPy arrays differ from Python lists, how to create and index them efficiently, element-wise operations, axis-based reductions, and matrix multiplication with `@`. The practice section applies all of this to **real COVID-19 time series data** from 2020, where you'll answer data questions about daily case increases, averages, and trends across countries.

---

## Getting Started

**Requirements:** Python 3.9+, Jupyter

```bash
pip install numpy jupyter
jupyter notebook python-numpy-practice/python_numpy_practice.ipynb
```

The notebook is fully self-contained — just open it, read the explanations, and fill in the code cells as you go.

:::tip Who this is good for
Students who are new to Python, need a refresher before the DSA curriculum, or are targeting quant/data science roles where NumPy is expected.
:::
