---
type: qod
publish: true
course:
- Mathematics 30-2
- Mathematics 30-1
topic: Permutations and Combinations
show_solution: true
qod_id: DIP-30-2-2013-NR10
diploma_eligible: true
diploma_ready: true
review_status: certified-batch08
question_format: written-response
diploma_cognitive_level: Problem Solving
diploma_performance_standard: Acceptable
diploma_outcomes: '4'
tags:
- qod
- diploma-preparation
- written-response
diploma_original_percent_correct: 66.5
diploma_original_item_format: numerical-response
diploma_original_topic: PR
certified_batch: 8
title: "Comparing codes with and without repetition"
aliases: []
domain: null
learning_order: null
estimated_minutes: null
calculator: null
curriculum_alignment: []
cognitive_level: ["Problem Solving"]
performance_standard: ["Acceptable"]
source: null
source_kind: null
source_question: null
source_topic: "PR"
source_format: "numerical-response"
source_equivalence: null
source_percent_correct: 66.5
source_mean_score: null
assessment_metadata_origin: null
review_date: null
curriculum_review_required: null
---

A research lab considers five-digit access codes made from the digits $0,1,2,3,4,5,6,7$. **Codes may begin with 0.** Compare these policies:

- Policy A: digits may repeat.
- Policy B: no digit may repeat anywhere in the code.

How many **more** codes are possible under Policy A? Explain both counting expressions.

## Solution

> [!example]- Show solution
> Under Policy A, each of the five positions has 8 independent choices:
>
> $$N_A=8^5=32\,768.$$
>
> Under Policy B, selections cannot repeat, so choices decrease with each position:
>
> $$N_B=8\cdot7\cdot6\cdot5\cdot4=6\,720.$$
>
> Hence there are $\boxed{32\,768-6\,720=26\,048}$ more codes under Policy A. Leading zero is allowed under both policies.

> [!abstract] Review First
> - [[Math/Combinatorics/Counting Methods Review - Practice 1 - Permutation or Combination|Counting Methods Review - Practice 1 - Permutation or Combination]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Combinations - Practice 1 - Evaluate Combination Notation|Combinations - Practice 1 - Evaluate Combination Notation]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Permutation Formula - Practice 1 - Eco Council Officers|Permutation Formula - Practice 1 - Eco Council Officers]]
