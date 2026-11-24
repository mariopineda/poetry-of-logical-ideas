---
type: qod
publish: true
course:
  - Mathematics 30-2
  - Mathematics 30-1
topic: Combinations
show_solution: true
diploma_eligible: true
diploma_ready: false
diploma_screening: strong-candidate-2026-11-22
tags:
  - qod
  - diploma-preparation
qod_id: "QOD-E798AE5B5B25595382CB85B5"
title: "Combinations - Playing Card Hands 1"
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

A standard deck of playing cards contains 52 cards, including 13 cards of each suit and four sevens. Determine how many different **six-card hands** can be dealt if:

**A.** The hand contains exactly **2 clubs and 4 diamonds**.
**B.** The hand contains **no sevens**.

## Solution

> [!example]- Show solution
>
> ### A.
>
> Choose 2 of the 13 clubs **and** 4 of the 13 diamonds. Because both selections must occur, multiply:
>
> $$
> \begin{aligned}
> \binom{13}{2}\binom{13}{4}
> &=78(715)\\
> &=\boxed{55\,770}
> \end{aligned}
> $$
>
> Therefore, **55,770 different hands** satisfy the restriction.
>
> ### B.
>
> Excluding the four sevens leaves $52-4=48$ eligible cards.
>
> Select any 6 of those 48 cards:
>
> $$
> \binom{48}{6}=\boxed{12\,271\,512}
> $$
>
> Therefore, **12,271,512 different hands** contain no sevens.

> [!abstract] Review First
> - [[Math/Combinatorics/Combinations 1|Combinations 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Combinations - Polygon Diagonals 1|Combinations - Polygon Diagonals 1]]
> - [[Math/Combinatorics/Combinations - Research Team 1|Combinations - Research Team 1]]
> - [[Math/Combinatorics/Combinations 3|Combinations 3]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
