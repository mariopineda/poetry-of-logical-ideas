---
type: qod
publish: true
course:
- Mathematics 30-1
- Mathematics 30-2
topic: Permutations
show_solution: true
qod_id: DIP-30-2-N009
diploma_eligible: true
diploma_ready: true
review_status: reviewed-batch-16
question_format: written-response
diploma_cognitive_level: Problem Solving
diploma_performance_standard: Acceptable
diploma_outcomes: '5'
tags:
- qod
- diploma-preparation
- written-response
- supplementary
certified_batch: 16
source_kind: supplementary-practice
assessment_metadata_origin: author-estimated
source_equivalence: not-applicable-supplementary
title: "Reserved seat on a shuttle"
aliases: []
domain: null
learning_order: null
estimated_minutes: null
calculator: null
curriculum_alignment: []
cognitive_level: ["Problem Solving"]
performance_standard: ["Acceptable"]
source: null
source_question: null
source_topic: null
source_format: null
source_percent_correct: null
source_mean_score: null
review_date: null
curriculum_review_required: null
used_in: []
---

A shuttle has **eight distinct seats**, including one designated driver's seat. Five distinct volunteers are travelling, and **one specified volunteer must drive**. The other four volunteers may occupy any four passenger seats.

![[shuttle-seats.svg]]

Determine the number of possible seating arrangements. Explain why the empty passenger seats affect the count.

## Solution

> [!example]- Show solution
> The designated driver has one permitted seat, so that position is fixed. The remaining four distinct volunteers must occupy four of the seven distinct passenger seats.
>
> The number of arrangements is a permutation, because changing who occupies a seat creates a different arrangement:
>
> $$
> {}_7P_4=\frac{7!}{(7-4)!}=7\times6\times5\times4=\boxed{840}.
> $$
>
> There are **three empty passenger seats**. Their locations matter: choosing different occupied seats changes the seating arrangement.

> [!abstract] Review First
> - [[Math/Combinatorics/Permutations 1|Permutations 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Counting Methods Review - Practice 7 - Shuttle Passenger Seating|Counting Methods Review - Practice 7 - Shuttle Passenger Seating]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Permutations with Restrictions - Archaeology Lab 1|Permutations with Restrictions - Archaeology Lab 1]]
