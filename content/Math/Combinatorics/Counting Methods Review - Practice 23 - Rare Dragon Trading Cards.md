---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: "Counting Methods Review"
show_solution: true
prerequisites:
  - "Combinations - Practice 13 - Five-Card Suit and Rank Counts"
related:
  - "Combinations - Practice 13 - Five-Card Suit and Rank Counts"
---

A display box contains **12 different trading cards**: three rare **dragon cards** and nine **landscape cards**. A hand contains **five different cards**, and order does not matter.

How many hands contain **at least two dragon cards**?

![[Counting - MR-23 - Question.png]]

## Solution

> [!example]- Show solution
>
> A valid hand has either exactly two dragon cards or all three. The cases are disjoint:
>
> $$\begin{aligned}
> \text{Exactly 2 dragons: }&\binom32\binom93=252,\\
> \text{Exactly 3 dragons: }&\binom33\binom92=36.
> \end{aligned}$$
>
> Therefore,
>
> $$\boxed{252+36=288}.$$

> [!abstract] Review First
> - [[Math/Combinatorics/Combinations - Practice 13 - Five-Card Suit and Rank Counts|Combinations - Practice 13 - Five-Card Suit and Rank Counts]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Combinations - Practice 13 - Five-Card Suit and Rank Counts|Combinations - Practice 13 - Five-Card Suit and Rank Counts]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
