---
type: qod
publish: true
course:
- Mathematics 30-2
topic: Permutations and Combinations
show_solution: true
qod_id: DIP-30-2-2016-MC8
diploma_eligible: true
diploma_ready: true
review_status: certified-batch08
question_format: written-response
diploma_cognitive_level: Conceptual
diploma_performance_standard: Acceptable
diploma_outcomes: '5'
tags:
- qod
- diploma-preparation
- written-response
diploma_original_percent_correct: 31.3
diploma_original_item_format: multiple-choice
diploma_original_topic: PR
certified_batch: 8
---

A museum access key is assembled from a bank of **nine distinct symbols**. Each valid key contains **seven, eight, or nine symbols**, arranged in a row with **no repeated symbol**.

Write a single exact expression for the total number of valid keys and evaluate it. Explain why combinations would undercount.

## Solution

> [!example]- Show solution
> Since order changes the key, use permutations. The permitted lengths are disjoint cases, so add:
>
> $$N={}_9P_7+{}_9P_8+{}_9P_9.$$
>
> Their values are $9!/2!=181\,440$, $9!/1!=362\,880$, and $9!/0!=362\,880$. Therefore
>
> $$\boxed{N=907\,200}.$$
>
> Combinations ignore the order of the symbols, so they do not count different arrangements of a selected subset.

> [!abstract] Review First
> - [[Math/Combinatorics/Counting Methods Review - Practice 1 - Permutation or Combination|Counting Methods Review - Practice 1 - Permutation or Combination]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Combinations - Practice 1 - Evaluate Combination Notation|Combinations - Practice 1 - Evaluate Combination Notation]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Permutation Formula - Practice 1 - Eco Council Officers|Permutation Formula - Practice 1 - Eco Council Officers]]
