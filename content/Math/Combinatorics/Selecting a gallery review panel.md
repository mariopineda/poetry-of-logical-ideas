---
type: qod
publish: true
course:
- Mathematics 30-1
- Mathematics 30-2
topic: Combinations
show_solution: true
qod_id: DIP-30-2-N010
diploma_eligible: true
diploma_ready: true
review_status: reviewed-batch-16
question_format: written-response
diploma_cognitive_level: Procedural
diploma_performance_standard: Acceptable
diploma_outcomes: '6'
tags:
- qod
- diploma-preparation
- written-response
- supplementary
certified_batch: 16
source_kind: supplementary-practice
assessment_metadata_origin: author-estimated
source_equivalence: not-applicable-supplementary
title: "Selecting a gallery review panel"
aliases: []
domain: null
learning_order: null
estimated_minutes: null
calculator: null
curriculum_alignment: []
cognitive_level: ["Procedural"]
performance_standard: ["Acceptable"]
source: null
source_question: null
source_topic: null
source_format: null
source_percent_correct: null
source_mean_score: null
review_date: null
curriculum_review_required: null
---

A museum forms a five-person judging panel from $9$ professional artists and $14$ photography students. The panel must contain **exactly four students**.

How many distinct panels can be formed? Show why combinations, not permutations, are appropriate.

## Solution

> [!example]- Show solution
> Exactly four of the five panel members must be students, so the remaining one must be a professional artist.
>
> Choose the students and artist independently:
>
> $$
> \binom{14}{4}=1001,\qquad\binom91=9.
> $$
>
> The total number of panels is
>
> $$
> \binom{14}{4}\binom91=1001(9)=\boxed{9009}.
> $$
>
> A panel is an unordered group: assigning the same people to different listed positions does not create a new panel.

> [!abstract] Review First
> - [[Math/Combinatorics/Fundamental Counting Principle 1|Fundamental Counting Principle 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Combinations 1|Combinations 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Combinations - Practice 10 - Science Exhibition Judging Panel|Combinations - Practice 10 - Science Exhibition Judging Panel]]
