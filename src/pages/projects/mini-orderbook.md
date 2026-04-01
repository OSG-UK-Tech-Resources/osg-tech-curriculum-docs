---
title: "Mini Orderbook: Market Making Game"
description: A simulated exchange where you play as a market maker, discovering a hidden fair value through two-sided quoting.
---

# Mini Orderbook: Market Making Game

**[View on GitHub →](https://github.com/OSG-UK-Tech-Resources/osg-automated-trading-system)**

You are a **market maker** on a simulated exchange. A hidden **fair value** (between 0 and 100) is randomly generated each game. An automated bot sits on the exchange and trades against you whenever your quotes are mispriced — your job is to find the fair value as quickly and cheaply as possible by quoting two-sided markets and reading the bot's reaction.

---

## What you'll build

Using the provided Python client SDK, you write a **trading strategy** that:

- Quotes bid/ask prices and manages your spread
- Interprets fills from the bot as signals about where fair value lies
- Tracks your inventory and P&L in real time
- Converges on the fair value with minimal losses

---

## What you'll learn

| Concept | Details |
|---|---|
| **Order book mechanics** | How bids, asks, and price-time priority matching work |
| **Market making** | Two-sided quoting, spread control, inventory management |
| **Price discovery** | Using adversarial fills as information signals |
| **Python & REST APIs** | Interacting with a real HTTP server using a Python SDK |
| **Data persistence** | How trade history is stored and queried (SQLite) |

---

## Tech stack

- **Python** — strategy logic and client SDK
- **FastAPI** — exchange server with a REST API
- **SQLite** — trade database
- **Jupyter** — interactive notebook walkthrough

---

## How it works

The exchange server (`server.py`) runs a real order book with full matching logic. You connect via the Python client (`client.py`) and submit orders using simple method calls:

```python
from client import OrderBookClient

c = OrderBookClient(owner="my_strategy")
c.wait_for_server()

# Quote a two-sided market
c.quote(bid_price=45, ask_price=55)

# Check what filled
print(c.my_trades())
print(c.my_pnl())
```

Every time you quote, the bot scans the book and trades against any mispriced orders — use its behaviour to narrow in on fair value.

---

## Gameplay notes

- The bot's fills reveal information about whether your quotes are above or below fair value
- Tightening your market too aggressively improves information gain, but increases losses
- Inventory matters: every trade changes your exposure and affects risk
- A good strategy balances **price discovery**, **spread control**, and **position management**

---

[← Back to Projects](/projects)
