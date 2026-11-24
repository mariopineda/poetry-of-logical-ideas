---
type: qod
publish: true
course:
  - Mathematics 30-2
  - Mathematics 30-1
topic: Permutations
show_solution: true
diploma_eligible: true
diploma_ready: false
diploma_screening: strong-candidate-2026-11-22
tags:
  - qod
  - diploma-preparation
qod_id: "QOD-2F0DBDA81E54D13BF7FBBC92"
title: "Counting Methods Challenge 1"
aliases: []
domain: null
learning_order: null
estimated_minutes: null
calculator: null
question_format: null
curriculum_alignment: []
cognitive_level: []
performance_standard: []
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

### A.

Evaluate **manually (without a calculator)**:

$$
\frac{10!}{2!\,8!}
$$

### B.

A student is determining how many **4-digit natural numbers** can be made using the digits \(0\) through \(9\), with no repeated digits.

The student calculates:

$$
10(9)(8)(7)=5040
$$

Explain the student's error and determine the correct number of 4-digit natural numbers.

### C.

Nine runners compete in a race.

How many different ordered results are possible for **first, second, third, and fourth place**?

Use permutation notation.

## Solution

> [!example]- Show solution
>
> ### A.
>
> $$
> \begin{aligned}
> \frac{10!}{2!\,8!}
> &=\frac{10\cdot9\cdot8!}{(2\cdot1)\,8!}\\
> &=\frac{90}{2}\\
> &=45
> \end{aligned}
> $$
>
> ### B.
>
> The student's calculation incorrectly allows \(0\) to be used as the first digit. A 4-digit natural number cannot begin with \(0\).
>
> There are \(9\) choices for the first digit, followed by \(9\), \(8\), and \(7\) choices for the remaining digits:
>
> $$
> 9(9)(8)(7)=4536
> $$
>
> Therefore,
>
> $$
> \boxed{4536}
> $$
>
> 4-digit natural numbers are possible.
>
> ### C.
>
> Four ordered finishing positions are filled from \(9\) runners:
>
> $$
> \begin{aligned}
> {}_{9}P_{4}
> &=\frac{9!}{(9-4)!}\\
> &=\frac{9!}{5!}\\
> &=9\cdot8\cdot7\cdot6\\
> &=3024
> \end{aligned}
> $$
>
> Therefore,
>
> $$
> \boxed{3024}
> $$
>
> ordered results are possible.

> [!abstract] Review First
> - [[Math/Combinatorics/Factorial Notation - Applications 1|Factorial Notation - Applications 1]]
> - [[Math/Combinatorics/Fundamental Counting Principle with Restrictions 1|Fundamental Counting Principle with Restrictions 1]]
> - [[Math/Combinatorics/Permutations 1|Permutations 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Counting Methods Challenge 2|Counting Methods Challenge 2]]
> - [[Math/Combinatorics/Counting Methods Challenge 3|Counting Methods Challenge 3]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Factorial Notation - Applications 11 - Five-Digit Number Error|Factorial Notation - Applications 11 - Five-Digit Number Error]]
