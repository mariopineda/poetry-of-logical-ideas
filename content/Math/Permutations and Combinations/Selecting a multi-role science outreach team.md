---
type: qod
publish: true
course:
- Mathematics 30-2
- Mathematics 30-1
topic: Permutations and Combinations
show_solution: true
qod_id: DIP-30-2-2016-MC9
diploma_eligible: true
diploma_ready: true
review_status: certified-batch08
question_format: written-response
diploma_cognitive_level: Problem Solving
diploma_performance_standard: Excellence
diploma_outcomes: '6'
tags:
- qod
- diploma-preparation
- written-response
diploma_original_percent_correct: 65.0
diploma_original_item_format: multiple-choice
diploma_original_topic: PR
certified_batch: 8
---

A conservation festival forms a volunteer team from **four distinct applicant groups**:

| Role group | Applicants | Positions to fill |
|---|---:|---:|
| Field guides | 7 | 3 |
| Photographers | 6 | 2 |
| Technicians | 5 | 2 |
| Greeters | 4 | 1 |

Every applicant belongs to just one group. How many different teams can be formed? Explain why the order of selection **within** each role does not matter.

## Solution

> [!example]- Show solution
> Choose independently within each role; the members of each group are an unordered selection:
>
> $$N=\binom73\binom62\binom52\binom41.$$
>
> The factors are $35$, $15$, $10$, and $4$, giving
>
> $$N=35(15)(10)(4)=\boxed{21\,000\text{ teams}}.$$
>
> Order among selected volunteers does not create a new team. The four categories have separate pools, so the multiplication principle applies.

> [!abstract] Review First
> - [[Math/Combinatorics/Counting Methods Review - Practice 1 - Permutation or Combination|Counting Methods Review - Practice 1 - Permutation or Combination]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Combinations - Practice 1 - Evaluate Combination Notation|Combinations - Practice 1 - Evaluate Combination Notation]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Permutation Formula - Practice 1 - Eco Council Officers|Permutation Formula - Practice 1 - Eco Council Officers]]
