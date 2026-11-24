---
type: qod
publish: true
course:
  - Mathematics 30-2
  - Mathematics 30-1
topic: Pathway Problems
show_solution: true
diploma_eligible: true
diploma_ready: false
diploma_screening: strong-candidate-2026-11-22
tags:
  - qod
  - diploma-preparation
qod_id: "QOD-C1844B7B04BE8E67A2B3355D"
title: "Permutations - Map Pathways 2"
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

The map shows a pedestrian travelling from the **Bus Terminal** to the **Museum**. The intersection marked **Road Closure** cannot be used.

At every intersection, the pedestrian may move only **one block right** or **one block up**.

Using **permutations and factorial notation**, determine the number of distinct shortest pathways from the Bus Terminal to the Museum that **avoid the Road Closure**.

![[Pathway Map Grid 2.png]]

## Solution

> [!example]- Show solution
>
> First count **all** shortest pathways from the Bus Terminal to the Museum.
>
> The trip requires:
>
> - $6$ blocks right
> - $4$ blocks up
>
> There are $10$ moves altogether, so the number of distinct arrangements is
>
> $$
> \frac{10!}{6!4!}=210.
> $$
>
> Next count the pathways that pass through the **Road Closure**.
>
> From the Bus Terminal to the Road Closure:
>
> $$
> \frac{5!}{3!2!}=10.
> $$
>
> From the Road Closure to the Museum:
>
> $$
> \frac{5!}{3!2!}=10.
> $$
>
> Therefore, the number of shortest pathways that pass through the Road Closure is
>
> $$
> 10(10)=100.
> $$
>
> Subtract these from the total:
>
> $$
> 210-100=\boxed{110}.
> $$

> [!abstract] Review First
> - [[Math/Combinatorics/Permutations 3|Permutations 3]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Permutations - Map Pathways 1|Permutations - Map Pathways 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Permutations - Map Pathways 3|Permutations - Map Pathways 3]]
> - [[Math/Combinatorics/Identical-Object Permutations - Practice 5 - Monotone Grid Walks|Identical-Object Permutations - Practice 5 - Monotone Grid Walks]]
