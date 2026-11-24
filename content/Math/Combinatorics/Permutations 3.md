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
qod_id: "QOD-59E2CB011716673F1E0C3131"
title: "Permutations 3"
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

A path begins at

$$
R=(0,0),
$$

must pass through

$$
O=(3,2),
$$

and ends at

$$
G=(6,4).
$$

At every step, you may move only one unit **right** or one unit **up**.

Using **permutations and factorial notation**, determine the number of distinct pathways from $R$ to $G$ that pass through $O$.

## Solution

> [!example]- Show solution
>
> From $R$ to $O$, a path requires:
>
> - $3$ right moves
> - $2$ up moves
>
> There are $5$ moves altogether, so the number of distinct arrangements is
>
> $$
> \frac{5!}{3!2!}=10.
> $$
>
> From $O$ to $G$, a path again requires:
>
> - $3$ right moves
> - $2$ up moves
>
> Therefore, the number of distinct arrangements is
>
> $$
> \frac{5!}{3!2!}=10.
> $$
>
> Every valid pathway from $R$ to $O$ can be paired with every valid pathway from $O$ to $G$, so
>
> $$
> 10(10)=\boxed{100}.
> $$

> [!abstract] Review First
> - [[Math/Combinatorics/Factorial Notation 1|Factorial Notation 1]]
> - [[Math/Combinatorics/Permutations - Map Pathways 1|Permutations - Map Pathways 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Permutations 2|Permutations 2]]
> - [[Math/Combinatorics/Permutations 4|Permutations 4]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Permutations - Map Pathways 2|Permutations - Map Pathways 2]]
