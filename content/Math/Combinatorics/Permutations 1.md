---
type: qod
publish: true
course:
  - "Mathematics 30-1"
  - "Mathematics 30-2"
topic: "Permutations"
show_solution: true
qod_id: "QOD-A3F495D87C0F29272379D6C9"
title: "Permutations 1"
aliases: []
domain: null
tags: []
learning_order: null
estimated_minutes: null
calculator: null
question_format: null
curriculum_alignment: []
cognitive_level: []
performance_standard: []
diploma_eligible: null
diploma_ready: null
source: null
source_kind: null
source_question: null
source_topic: null
source_format: null
source_equivalence: null
source_percent_correct: null
source_mean_score: null
assessment_metadata_origin: null
review_status: null
review_date: null
curriculum_review_required: null
---

Using the digits 2 ,3, 4, and 5 and if no digits can be repeated...
1. How many numbers can be made?
2. How many numbers less than 3000 can be made?
3. How many numbers greater than 3000 can be made?

<div style="page-break-after: always;"></div>

> [!info]- Hint 
> What is the smallest number of digits that a number smaller than 3000 can have?

## Solution

> [!example]- Show solution
>
> Because digits may not repeat, count numbers of each possible length.
>
> ### 1. Total numbers
>
> $$
> {}_4P_1+{}_4P_2+{}_4P_3+{}_4P_4
> =
> 4+12+24+24
> =
> \boxed{64}.
> $$
>
> ### 2. Numbers less than $3000$
>
> All one-, two-, and three-digit numbers are less than $3000$:
>
> $$
> 4+12+24=40.
> $$
>
> For four-digit numbers less than $3000$, the first digit must be $2$. The remaining three digits can be arranged in
>
> $$
> 3!=6
> $$
>
> ways.
>
> Therefore,
>
> $$
> 40+6=\boxed{46}.
> $$
>
> ### 3. Numbers greater than $3000$
>
> A four-digit number greater than $3000$ must begin with $3$, $4$, or $5$. For each first digit, the remaining three digits can be arranged in $3!$ ways:
>
> $$
> 3(3!)=18.
> $$
>
> Therefore,
>
> $$
> \boxed{18}.
> $$

> [!abstract] Review First
> - [[Math/Combinatorics/Factorial Notation 1|Factorial Notation 1]]
> - [[Math/Combinatorics/Fundamental Counting Principle with Restrictions 1|Fundamental Counting Principle with Restrictions 1]]
> - [[Math/Combinatorics/Factorial Notation - Applications 1|Factorial Notation - Applications 1]]
> - [[Math/Combinatorics/Factorial Notation - Applications 3|Factorial Notation - Applications 3]]
> - [[Math/Combinatorics/Fundamental Counting Principle with Restrictions 2|Fundamental Counting Principle with Restrictions 2]]
> - [[Math/Combinatorics/Factorial Notation - Applications 2|Factorial Notation - Applications 2]]
> - [[Math/Combinatorics/Fundamental Counting Principle with Restrictions 3|Fundamental Counting Principle with Restrictions 3]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Permutations 2|Permutations 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Permutations with Identical Objects 1|Permutations with Identical Objects 1]]
> - [[Math/Combinatorics/Permutations with Identical Objects 2|Permutations with Identical Objects 2]]
> - [[Math/Combinatorics/Permutations with Identical Objects 3|Permutations with Identical Objects 3]]
> - [[Math/Combinatorics/Combinations 1|Combinations 1]]
> - [[Math/Combinatorics/Combinations 2|Combinations 2]]
> - [[Math/Combinatorics/Combinations 3|Combinations 3]]
> - [[Math/Combinatorics/Counting Methods Challenge 1|Counting Methods Challenge 1]]
> - [[Math/Combinatorics/Permutation Formula - Practice 1 - Eco Council Officers|Permutation Formula - Practice 1 - Eco Council Officers]]
> - [[Math/Combinatorics/Counting Methods Review - Practice 1 - Permutation or Combination|Counting Methods Review - Practice 1 - Permutation or Combination]]
