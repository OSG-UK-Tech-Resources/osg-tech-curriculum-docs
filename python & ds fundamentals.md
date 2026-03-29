---
title: Python & Data Science Fundamentals
description: Supplementary practice notebooks for Python, NumPy, and Pandas in a quantitative and data science context.
---

# Python & Data Science Fundamentals

> **Not sure if your Python is strong enough? Start here.**
>
> These two practice notebooks are designed for students who want to build confidence with Python in a **data science and quant context** — working with real datasets, numerical computing, and tabular data manipulation using the tools you'll actually encounter in internships and interviews.

This is **supplementary material**. You don't need to complete these to progress through the main DSA curriculum, but if you're finding Python syntax unfamiliar, or you want to strengthen your understanding of NumPy and Pandas (which show up constantly in quant and data-heavy roles), these are the place to start.

---

## 📁 What's in This Folder

| Notebook | Focus | Dataset |
|----------|-------|---------|
| [`python-numpy-practice`](#course-1--python--numpy-practice) | Python fundamentals + linear algebra + NumPy | COVID-19 time series data (2020) |
| [`pandas-practice`](#course-2--pandas-practice) | Pandas for data manipulation and analysis | Stock market data (AAPL, GOOG, MSFT, AMZN, TSLA) |

---

## Course 1 · Python & NumPy Practice

📂 `python-numpy-practice/python_numpy_practice.ipynb`

This notebook starts from the very basics of Python and builds up to numerical computing with NumPy. It's split into two parts.

**Part 1 — Python Fundamentals & Matrix Operations from Scratch**

A thorough walkthrough of core Python syntax: data types (`int`, `float`, `str`, `bool`, `list`, `tuple`, `dict`, `set`), loops, functions, aliasing, lambda functions, `map`, and `filter`. The twist is that you immediately put these skills to work by implementing **matrix operations by hand** — addition, transpose, multiplication, and matrix inversion — without using any libraries. This forces you to write clean, logical Python rather than relying on NumPy shortcuts too early.

**Part 2 — NumPy in Practice**

Once you've earned it, NumPy is introduced properly. You'll learn how NumPy arrays differ from Python lists, how to create and index them efficiently, element-wise operations, axis-based reductions, and matrix multiplication with `@`. The practice section applies all of this to **real COVID-19 time series data** from 2020, where you'll answer data questions about daily case increases, averages, and trends across countries.

> **Good for:** Students who are new to Python, need a refresher before the DSA curriculum, or are targeting quant/data science roles where NumPy is expected.

---

## Course 2 · Pandas Practice

📂 `pandas-practice/pandas_practice.ipynb`

Pandas is the go-to library for working with tabular data in Python — think of it as a programmable spreadsheet with superpowers. This notebook is themed around **stock market data analysis**, which makes it especially relevant if you're targeting finance, quant, or fintech roles.

**Part 1 — Pandas Basics**

Covers everything you need to get comfortable with Pandas: `Series` and `DataFrame` objects, label-based vs position-based indexing (`.loc` and `.iloc`), boolean filtering, adding and removing columns, sorting, `groupby` aggregations, merging DataFrames (like SQL joins), handling missing data (`NaN`), and reading from CSV files.

**Part 2 — Stock Market Analysis Tasks**

You'll apply everything from Part 1 to a real dataset of daily stock prices for AAPL, GOOG, MSFT, AMZN, and TSLA across ~250 trading days. The tasks progressively increase in complexity:

- **Task 2.1** — Compute daily returns: `(close - open) / open`
- **Task 2.2** — Find the best performing day for each ticker using `groupby` + `idxmax`
- **Task 2.3** — Build a rolling (moving) average of closing prices over a sliding window
- **Task 2.4** — Filter by trading volume above a threshold
- **Task 2.5** — Build a monthly average closing price pivot table
- **Task 2.6** — Enrich the dataset by merging in sector and market cap information

> **Good for:** Students targeting roles where data wrangling is expected — quant firms, banks, data-heavy startups, or anyone who wants to make their projects section more credible with real data skills.

---

## Getting Started

**Requirements:** Python 3.9+, Jupyter

```bash
pip install numpy pandas jupyter

# Open the notebook you want to work through
jupyter notebook python-numpy-practice/python_numpy_practice.ipynb
jupyter notebook pandas-practice/pandas_practice.ipynb
```

Each notebook is fully self-contained — just open it, read the explanations, and fill in the code cells as you go.
