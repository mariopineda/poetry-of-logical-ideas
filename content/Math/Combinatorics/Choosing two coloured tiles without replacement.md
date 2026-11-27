---
type: qod
publish: true
course:
- Mathematics 30-2
topic: Probability
show_solution: true
qod_id: DIP-30-2-N004
diploma_eligible: true
diploma_ready: true
review_status: ai-reviewed-question-and-solution-batch15
question_format: written-response
diploma_cognitive_level: Procedural
diploma_performance_standard: Acceptable
diploma_outcomes: '3'
tags:
- qod
- diploma-preparation
- written-response
diploma_origin: supplementary
diploma_source_equivalence: not_applicable
assessment_metadata_status: author_estimated
certified_batch: 15
review_date: '2026-11-22'
title: "Choosing two coloured tiles without replacement"
aliases: []
domain: null
learning_order: null
estimated_minutes: null
calculator: null
curriculum_alignment: []
cognitive_level: ["Procedural"]
performance_standard: ["Acceptable"]
source: null
source_kind: null
source_question: null
source_topic: null
source_format: null
source_equivalence: null
source_percent_correct: null
source_mean_score: null
assessment_metadata_origin: null
curriculum_review_required: null
used_in: []
---

A fabric studio has a box containing 5 orange tiles, 7 teal tiles, and 6 grey tiles. Two tiles are drawn one after the other **without replacement**. Determine the probability of drawing teal first, followed by orange, to the nearest hundredth. Show both conditional probabilities.

## Solution

> [!example]- Show solution
> There are $5+7+6=18$ tiles. The first draw being teal has probability
>
> $$P(T_1)=\frac7{18}.$$
>
> After drawing one teal tile there are $17$ tiles, with all $5$ orange tiles still present:
>
> $$P(O_2\mid T_1)=\frac5{17}.$$
>
> By the multiplication rule for dependent events,
>
> $$P(T_1\cap O_2)=\frac7{18}\cdot\frac5{17}=\frac{35}{306}\approx0.11438.$$
>
> **Answer:** $\boxed{0.11}$ to the nearest hundredth. The order matters: orange first, teal second is a different event.

> [!abstract] Review First
> - [[Math/Combinatorics/Counting Methods Review - Practice 1 - Permutation or Combination|Counting Methods Review - Practice 1 - Permutation or Combination]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Fundamental Counting Principle 8 - Wildlife Survey Kits|Fundamental Counting Principle 8 - Wildlife Survey Kits]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Counting Methods Review - Practice 11 - Two-Part Snack Special|Counting Methods Review - Practice 11 - Two-Part Snack Special]]
