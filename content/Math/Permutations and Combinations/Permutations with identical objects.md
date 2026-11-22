---
type: qod
publish: true
course:
- Mathematics 30-2
- Mathematics 30-1
topic: Permutations and Combinations
show_solution: true
qod_id: DIP-30-2-2013-MC20
diploma_eligible: true
diploma_ready: true
review_status: certified-batch07
question_format: written-response
diploma_cognitive_level: Conceptual
diploma_performance_standard: Acceptable
diploma_outcomes: '5'
tags:
- qod
- diploma-preparation
- written-response
certified_batch: 7
diploma_original_percent_correct: 66.9
diploma_original_item_format: multiple-choice
---

A gallery arranges six small printed display cards in a row: **three identical landscape cards**, **two identical bird cards**, and **one abstract card**. Cards that look identical are indistinguishable.

How many visually different linear arrangements can the gallery create? Explain why $6!$ alone gives an overcount.

## Solution

> [!example]- Show solution
> If all six display cards were distinct there would be $6!$ linear orders. Swapping the $3$ landscape cards changes no visible arrangement, so divide by $3!$. Swapping the $2$ bird cards also changes no arrangement, so divide by $2!$:
>
> $$\frac{6!}{3!\,2!\,1!}=\frac{720}{6\cdot2}=\boxed{60}.$$
>
> Equivalently, choose $3$ of $6$ positions for landscape cards and then $2$ of the $3$ remaining positions for bird cards: $\binom63\binom32=20\cdot3=60$.

> [!abstract] Review First
> - [[Math/Combinatorics/Counting ordered and unordered selections|Counting ordered and unordered selections]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Combinations - Practice 7 - Counting Polygon Diagonals|Combinations - Practice 7 - Counting Polygon Diagonals]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Permutations 2|Permutations 2]]
