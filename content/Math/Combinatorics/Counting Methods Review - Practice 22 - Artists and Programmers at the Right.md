---
type: qod
publish: true
course:
  - Mathematics 30-2
  - Mathematics 30-1
topic: "Counting Methods Review"
show_solution: true
prerequisites:
  - "Counting Methods Review - Practice 14 - Research Team Lineup"
related:
  - "Counting Methods Review - Practice 14 - Research Team Lineup"
diploma_eligible: true
diploma_ready: false
diploma_screening: strong-candidate-2026-11-22
tags:
  - qod
  - diploma-preparation
qod_id: "QOD-6A03AEF4FA77A27E1CCCF4CA"
title: "Counting Methods Review - Practice 22 - Artists and Programmers at the Right"
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

Four artists and three programmers (seven **different people**) will sit in a single row.

### A. How many seatings have **exactly two programmers at the far right**, meaning the last two seats are programmers and the seat immediately before them is an artist?
### B. How many have **at most one programmer in the last two seats**?

## Solution

> [!example]- Show solution
>
> ### A.
>
> Fill the rightmost two seats with two of the three programmers in order: ${}_3P_2$ ways. The third seat from the right must be one of four artists. Arrange the remaining four people freely:
>
> $${}_3P_2\cdot4\cdot4!=6\cdot4\cdot24=\boxed{576}.$$
>
> ### B.
>
> **Zero programmers in the last two seats:** order two of four artists there, and arrange the other five freely:
>
> $${}_4P_2\cdot5!=1440.$$
>
> **Exactly one programmer there:** choose which of the two rightmost seats holds a programmer (2 choices), choose one of three programmers and one of four artists for those seats, then arrange the remaining five people:
>
> $$2\cdot3\cdot4\cdot5!=2880.$$
>
> Add disjoint cases:
>
> $$\boxed{1440+2880=4320}.$$

> [!abstract] Review First
> - [[Math/Combinatorics/Counting Methods Review - Practice 14 - Research Team Lineup|Counting Methods Review - Practice 14 - Research Team Lineup]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Counting Methods Review - Practice 14 - Research Team Lineup|Counting Methods Review - Practice 14 - Research Team Lineup]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
