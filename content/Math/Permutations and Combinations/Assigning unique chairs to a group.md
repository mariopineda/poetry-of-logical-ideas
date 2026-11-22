---
type: qod
publish: true
course:
- Mathematics 30-1
- Mathematics 30-2
topic: Permutations and Combinations
show_solution: true
qod_id: DIP-30-1-2014-MC11
diploma_eligible: true
diploma_ready: true
review_status: certified-batch05
question_format: written-response
diploma_cognitive_level: Conceptual
diploma_performance_standard: Acceptable
diploma_outcomes: '2'
tags:
- qod
- diploma-preparation
- written-response
certified_batch: 5
diploma_original_percent_correct: 38.4
diploma_original_item_format: multiple-choice
---

Thirteen numbered lockers are available for eight different competitors. Each competitor receives exactly one locker, and no locker may be shared.

Determine the total number of possible locker assignments. Explain why a permutation, rather than a combination, is required.

## Solution

> [!example]- Show solution
>
> Choosing the same eight lockers but assigning them to different competitors gives a different result. Thus the assignment order matters.
>
> There are $13$ choices for the first competitor, then $12$, continuing through $6$ choices for the eighth:
>
> $$
> {}_{13}P_8=13\cdot12\cdot11\cdot10\cdot9\cdot8\cdot7\cdot6
> =\frac{13!}{5!}
> =\boxed{51\,891\,840}.
> $$

> [!abstract] Review First
> - [[Math/Combinatorics/Identical-Object Permutations - Practice 3 - Words and Repeated Letters|Identical-Object Permutations - Practice 3 - Words and Repeated Letters]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Counting Methods Review - Practice 1 - Permutation or Combination|Counting Methods Review - Practice 1 - Permutation or Combination]]
> - [[Math/Combinatorics/Counting Methods Challenge 1|Counting Methods Challenge 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
