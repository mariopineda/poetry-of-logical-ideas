---
type: qod
publish: true
course:
  - "Mathematics 30-1"
  - "Mathematics 30-2"
topic: "Pathway Problems"
show_solution: true
diploma_eligible: true
diploma_ready: false
diploma_screening: strong-candidate-2026-11-22
tags:
  - qod
  - diploma-preparation
qod_id: "QOD-285884666225B1C1E2FBB7A6"
title: "Permutations 2"
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
used_in: []
---

A path begins at

$$
R=(0,0),
$$

must pass through

$$
O=(2,1),
$$

and ends at

$$
G=(5,3).
$$

At every step, you may move only one unit **right** or one unit **up**.

Using **permutations and factorial notation**, determine the number of distinct pathways from $R$ to $G$ that pass through $O$.

## Solution

> [!example]- Show solution
>
> From $R=(0,0)$ to $O=(2,1)$, a path requires:
>
> - $2$ right moves
> - $1$ up move
>
> That is $3$ moves total, so the number of distinct arrangements is
>
> $$
> \frac{3!}{2!1!}=3.
> $$
>
> From $O=(2,1)$ to $G=(5,3)$, a path requires:
>
> - $3$ right moves
> - $2$ up moves
>
> Thus,
>
> $$
> \frac{5!}{3!2!}=10.
> $$
>
> Every valid first section can be paired with every valid second section, so
>
> $$
> 3(10)=\boxed{30}.
> $$

> [!abstract] Review First
> - [[Math/Combinatorics/Factorial Notation 1|Factorial Notation 1]]
> - [[Math/Combinatorics/Fundamental Counting Principle 2|Fundamental Counting Principle 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Permutations 1|Permutations 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Permutations - Map Pathways 1|Permutations - Map Pathways 1]]
