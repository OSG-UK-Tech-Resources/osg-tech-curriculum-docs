---
title: "Course 2 · Pandas Practice"
description: Pandas for data manipulation and analysis, applied to real stock market data.
slug: /curriculum/python-ds/pandas
---

# Course 2 · Pandas Practice

📂 [pandas-practice/pandas_practice.ipynb](https://github.com/OSG-UK-Tech-Resources/osg-python-ds-fundamentals/blob/main/pandas-practice/pandas_practice.ipynb)

Pandas is the go-to library for working with tabular data in Python — think of it as a programmable spreadsheet with superpowers. This notebook is themed around **stock market data analysis**, which makes it especially relevant if you're targeting finance, quant, or fintech roles.

---

## Part 1 — Pandas Basics

Covers everything you need to get comfortable with Pandas: `Series` and `DataFrame` objects, label-based vs position-based indexing (`.loc` and `.iloc`), boolean filtering, adding and removing columns, sorting, `groupby` aggregations, merging DataFrames (like SQL joins), handling missing data (`NaN`), and reading from CSV files.

---

## Part 2 — Stock Market Analysis Tasks

You'll apply everything from Part 1 to a real dataset of daily stock prices for AAPL, GOOG, MSFT, AMZN, and TSLA across ~250 trading days. The tasks progressively increase in complexity:

- **Task 2.1** — Compute daily returns: `(close - open) / open`
- **Task 2.2** — Find the best performing day for each ticker using `groupby` + `idxmax`
- **Task 2.3** — Build a rolling (moving) average of closing prices over a sliding window
- **Task 2.4** — Filter by trading volume above a threshold
- **Task 2.5** — Build a monthly average closing price pivot table
- **Task 2.6** — Enrich the dataset by merging in sector and market cap information

---

## Getting Started

**Requirements:** Python 3.9+, Jupyter

```bash
pip install pandas jupyter
jupyter notebook pandas-practice/pandas_practice.ipynb
```

The notebook is fully self-contained — just open it, read the explanations, and fill in the code cells as you go.

:::tip Who this is good for
Students targeting roles where data wrangling is expected — quant firms, banks, data-heavy startups, or anyone who wants to make their projects section more credible with real data skills.
:::
