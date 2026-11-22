---
type: qod
publish: true
course:
- Mathematics 30-1
topic: Combinatorics
show_solution: true
qod_id: DIP-30-1-2017-NR10
diploma_eligible: true
diploma_ready: true
review_status: certified_batch04_proof_and_source_equivalence
question_format: written-response
diploma_original_format: numerical-response
diploma_cognitive_level: Problem Solving
diploma_performance_standard: Excellence
diploma_outcomes: PCBT 1
diploma_historical_percent_correct: 35.9
tags:
- qod
- diploma-preparation
- written-response
certified_batch: 4
---

A facility uses four-digit access codes; a leading zero is not permitted. The **first and last digits must be distinct nonzero even digits**. The **second digit must not be $7$**, and no digit may repeat anywhere in the code. A zero is allowed in the third position.

Determine the total number of valid codes. Give one valid order of choosing digits that avoids casework, and explain how many choices remain at every position.

## Solution

> [!example]- Show solution
> Choose the first and last digits first: they must be distinct members of $\{2,4,6,8\}$, giving $4$ choices for the first and $3$ for the last. These digits are even, so neither is the forbidden digit $7$.
>
> Choose the second digit next. Two digits are already used and $7$ is forbidden, leaving $10-2-1=7$ options. The third position may use any digit not yet used, including zero where available. Since three distinct positions are filled, it also has $10-3=7$ options. Therefore
>
> $$\boxed{4\cdot3\cdot7\cdot7=588\text{ valid codes}}.$$
>
> Counting the most restricted positions before the second and third ensures every choice count is constant and each code is counted exactly once.

> [!abstract] Review First
> - [[Math/Combinatorics/Permutations 1|Permutations 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Permutations - At Least and At Most 1|Permutations - At Least and At Most 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Permutations with Restrictions - Practice 3 - Alternating Observatory Exhibits|Permutations with Restrictions - Practice 3 - Alternating Observatory Exhibits]]
