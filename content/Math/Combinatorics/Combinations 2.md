---
type: qod
publish: true
course:
  - "Mathematics 30-1"
  - "Mathematics 30-2"
topic: "Combinations"
show_solution: true
qod_id: "QOD-98F6E65C471D41244471D617"
title: "Combinations 2"
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

Algebraically determine the solution to $_nC_7 = _{n+1}C_8$.

## Solution

> [!example]- Show solution
>
> Use the combination formula $_nCr = \frac{\displaystyle n!}{\displaystyle(n-r)!r!}$:
> $$
> \frac{n!}{7!(n-7)!} = \frac{(n+1)!}{8!(n+1-8)!}
> $$
> Simplify the right-hand side:
> $$
> \frac{n!}{7!(n-7)!} = \frac{(n+1)!}{8!(n-7)!}
> $$
> Recall that $(n+1)! = (n+1) \cdot n!$:
> $$
> \frac{n!}{7!(n-7)!} = \frac{(n+1) \cdot n!}{8 \cdot 7! \cdot (n-7)!}
> $$
> Cancel $n!$ and $(n-7)!$ from both sides:
> $$
> \frac{1}{7!} = \frac{n+1}{8 \cdot 7!}
> $$
> Multiply both sides by $7!$ to simplify:
> $$
> 1 = \frac{n+1}{8}
> $$
> Solve for $n$:
> $$
> n+1 = 8
> n = 7
> $$
> Thus, the solution to the equation $\binom{n}{7} = \binom{n+1}{8}$ is $n = 7$.
>

> [!abstract] Review First
> - [[Math/Combinatorics/Permutations 1|Permutations 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Combinations 1|Combinations 1]]
> - [[Math/Combinatorics/Combinations 3|Combinations 3]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Combinations - Practice 1 - Evaluate Combination Notation|Combinations - Practice 1 - Evaluate Combination Notation]]
