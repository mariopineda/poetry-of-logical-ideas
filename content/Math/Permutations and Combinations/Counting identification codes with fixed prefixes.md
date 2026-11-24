---
type: qod
publish: true
course:
- Mathematics 30-2
- Mathematics 30-1
topic: Permutations and Combinations
show_solution: true
qod_id: DIP-30-2-2013-MC21
diploma_eligible: true
diploma_ready: true
review_status: certified-batch07
question_format: written-response
diploma_cognitive_level: Problem Solving
diploma_performance_standard: Excellence
diploma_outcomes: '4'
tags:
- qod
- diploma-preparation
- written-response
certified_batch: 7
diploma_original_percent_correct: 70.4
diploma_original_item_format: multiple-choice
title: "Counting identification codes with fixed prefixes"
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
source_percent_correct: 70.4
source_mean_score: null
assessment_metadata_origin: null
review_date: null
curriculum_review_required: null
---

A studio inventory label contains a **fixed two-digit production-year prefix**, one category digit chosen from three possible categories, and four additional digits selected from $0$ through $9$ **without repetition among those final four digits**. A final digit may be zero, including the first of the four.

For a specified year prefix, how many different complete inventory labels can be issued? Show the factors used in your count.

## Solution

> [!example]- Show solution
> The two-digit prefix is fixed, contributing $1$ choice. The category contributes $3$ choices. The final four positions are an ordered sample of $4$ distinct digits from $10$:
>
> $$10\times9\times8\times7=5040.$$
>
> By the fundamental counting principle,
>
> $$N=1\times3\times5040=\boxed{15\,120}.$$
>
> The rule forbids repetition only **within the final four digits**; digits may equal those appearing earlier in the fixed prefix or category position.

> [!abstract] Review First
> - [[Math/Combinatorics/Counting ordered and unordered selections|Counting ordered and unordered selections]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Combinations - Practice 7 - Counting Polygon Diagonals|Combinations - Practice 7 - Counting Polygon Diagonals]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Permutations 2|Permutations 2]]
