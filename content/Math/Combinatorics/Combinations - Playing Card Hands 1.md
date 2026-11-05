---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: Combinations
show_solution: false
---

## Question

A standard deck of playing cards contains 52 cards, including 13 cards of each suit and four sevens.

Determine how many different **six-card hands** can be dealt if:

### A.

The hand contains exactly **2 clubs and 4 diamonds**.

### B.

The hand contains **no sevens**.

## Solution

> [!example]- Show solution
>
> ### A.
>
> Choose 2 of the 13 clubs **and** 4 of the 13 diamonds. Because both selections must occur, multiply:
>
> $$
> \begin{aligned}
> \binom{13}{2}\binom{13}{4}
> &=78(715)\\
> &=\boxed{55\,770}
> \end{aligned}
> $$
>
> Therefore, **55,770 different hands** satisfy the restriction.
>
> ### B.
>
> Excluding the four sevens leaves $52-4=48$ eligible cards.
>
> Select any 6 of those 48 cards:
>
> $$
> \binom{48}{6}=\boxed{12\,271\,512}
> $$
>
> Therefore, **12,271,512 different hands** contain no sevens.

## Review First

- [[Combinations 1]]

## Explore Also

- [[Combinations - Polygon Diagonals 1]]
- [[Combinations - Research Team 1]]
- [[Combinations 3]]

## Build Toward
