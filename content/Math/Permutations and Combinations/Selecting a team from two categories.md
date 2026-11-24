---
type: qod
publish: true
course:
- Mathematics 30-2
- Mathematics 30-1
topic: Permutations and Combinations
show_solution: true
qod_id: DIP-30-2-2013-MC22
diploma_eligible: true
diploma_ready: true
review_status: certified-batch07
question_format: written-response
diploma_cognitive_level: Problem Solving
diploma_performance_standard: Excellence
diploma_outcomes: '6'
tags:
- qod
- diploma-preparation
- written-response
certified_batch: 7
diploma_original_percent_correct: 51.4
diploma_original_item_format: multiple-choice
title: "Selecting a team from two categories"
aliases: []
domain: null
learning_order: null
estimated_minutes: null
calculator: null
curriculum_alignment: []
cognitive_level: ["Problem Solving"]
performance_standard: ["Excellence"]
source: null
source_kind: null
source_question: null
source_topic: null
source_format: "multiple-choice"
source_equivalence: null
source_percent_correct: 51.4
source_mean_score: null
assessment_metadata_origin: null
review_date: null
curriculum_review_required: null
---

A school has seven mathematics teachers and eight student mentors. A planning team must contain three teachers and two mentors. How many distinct teams can be selected?

## Solution

> [!example]- Show solution
> Within each category, team membership has no order. Choose $3$ of the $7$ teachers and independently choose $2$ of the $8$ mentors:
>
> $$\binom73=\frac{7!}{3!4!}=35,\qquad \binom82=\frac{8!}{2!6!}=28.$$
>
> Each teacher selection can be paired with each mentor selection:
>
> $$N=35\cdot28=\boxed{980\text{ distinct teams}}.$$
>
> Permutations would overcount because changing the order in which team members are named does not create a different team.

> [!abstract] Review First
> - [[Math/Combinatorics/Counting ordered and unordered selections|Counting ordered and unordered selections]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Combinations - Practice 7 - Counting Polygon Diagonals|Combinations - Practice 7 - Counting Polygon Diagonals]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Permutations 2|Permutations 2]]
