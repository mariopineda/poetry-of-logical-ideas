---
type: qod
publish: true
course:
- Mathematics 30-2
- Mathematics 30-1
topic: Permutations and Combinations
show_solution: true
qod_id: DIP-30-2-2016-MC10
diploma_eligible: true
diploma_ready: true
review_status: certified-batch08
question_format: written-response
diploma_cognitive_level: Conceptual
diploma_performance_standard: Excellence
diploma_outcomes: '6'
tags:
- qod
- diploma-preparation
- written-response
diploma_original_percent_correct: 45.9
diploma_original_item_format: multiple-choice
diploma_original_topic: PR
certified_batch: 8
title: "Selecting music with a restricted genre count"
aliases: []
domain: null
learning_order: null
estimated_minutes: null
calculator: null
curriculum_alignment: []
cognitive_level: ["Conceptual"]
performance_standard: ["Excellence"]
source: null
source_kind: null
source_question: null
source_topic: "PR"
source_format: "multiple-choice"
source_equivalence: null
source_percent_correct: 45.9
source_mean_score: null
assessment_metadata_origin: null
review_date: null
curriculum_review_required: null
used_in: []
---

A concert organizer selects an **unordered set of eight distinct songs** from 9 folk songs and 15 other songs. The selection must contain **exactly two or exactly three folk songs**.

Write the sum of combination products that counts all permitted sets, then evaluate it. Explain why the two cases are added rather than multiplied.

## Solution

> [!example]- Show solution
> For exactly two folk songs, select 2 of 9 folk songs and 6 of 15 others. For exactly three folk songs, select 3 of 9 and 5 of 15 others:
>
> $$N=\binom92\binom{15}6+\binom93\binom{15}5.$$
>
> Compute the two disjoint cases:
>
> $$\binom92\binom{15}6=36(5005)=180\,180,$$
> $$\binom93\binom{15}5=84(3003)=252\,252.$$
>
> Therefore $\boxed{N=432\,432}$ sets. A selection cannot contain exactly two and exactly three folk songs simultaneously, so the alternatives are **added**.

> [!abstract] Review First
> - [[Math/Combinatorics/Counting Methods Review - Practice 1 - Permutation or Combination|Counting Methods Review - Practice 1 - Permutation or Combination]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Combinations - Practice 1 - Evaluate Combination Notation|Combinations - Practice 1 - Evaluate Combination Notation]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Permutation Formula - Practice 1 - Eco Council Officers|Permutation Formula - Practice 1 - Eco Council Officers]]
