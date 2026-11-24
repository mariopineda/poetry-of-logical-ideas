---
type: qod
publish: true
course:
- Mathematics 30-1
- Mathematics 30-2
topic: Combinatorics
show_solution: true
qod_id: DIP-30-1-2017-MC27
diploma_eligible: true
diploma_ready: true
review_status: certified_batch04_proof_and_source_equivalence
question_format: written-response
diploma_original_format: multiple-choice
diploma_cognitive_level: Problem Solving
diploma_performance_standard: Excellence
diploma_outcomes: PCBT 3
diploma_historical_percent_correct: 57.7
tags:
- qod
- diploma-preparation
- written-response
certified_batch: 4
title: "Committees with at most one staff member"
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
source_percent_correct: 57.7
source_mean_score: null
assessment_metadata_origin: null
review_date: null
curriculum_review_required: null
---

A volunteer committee of four people will be selected from twelve students and five staff. How many different committees contain **at most one** staff member? Show the two cases separately.

## Solution

> [!example]- Show solution
> At most one staff member means **zero or one**, not two or more. Committees disregard order. With no staff members, choose four of the twelve students:
>
> $$\binom{12}{4}=495.$$
>
> With exactly one staff member, select one of five staff and three of the twelve students:
>
> $$\binom51\binom{12}{3}=5(220)=1100.$$
>
> The cases are disjoint, so the total number is
>
> $$\boxed{495+1100=1595}.$$

> [!abstract] Review First
> - [[Math/Combinatorics/Combinations - Practice 1 - Evaluate Combination Notation|Combinations - Practice 1 - Evaluate Combination Notation]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Combinations - Practice 3 - Field Study Volunteers|Combinations - Practice 3 - Field Study Volunteers]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Combinations - Practice 10 - Science Exhibition Judging Panel|Combinations - Practice 10 - Science Exhibition Judging Panel]]
