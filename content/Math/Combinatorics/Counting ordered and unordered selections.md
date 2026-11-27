---
type: qod
publish: true
course:
- Mathematics 30-1
- Mathematics 30-2
topic: Combinatorics
show_solution: true
qod_id: DIP-30-1-X031
diploma_eligible: true
diploma_ready: true
review_status: ai-reviewed-question-and-solution-batch15
question_format: written-response
diploma_cognitive_level: Conceptual
diploma_performance_standard: Acceptable
diploma_outcomes: '2'
tags:
- qod
- diploma-preparation
- written-response
diploma_origin: supplementary
diploma_source_equivalence: not_applicable
assessment_metadata_status: author_estimated
certified_batch: 15
review_date: '2026-11-22'
title: "Counting ordered and unordered selections"
aliases: []
domain: null
learning_order: null
estimated_minutes: null
calculator: null
curriculum_alignment: []
cognitive_level: ["Conceptual"]
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

A science fair has $11$ projects. Two projects are selected to receive a gold award and a silver award. Determine the number of possible outcomes. Compare this with selecting **two finalists without ranking them**, and explain the difference.

## Solution

> [!example]- Show solution
> For distinct gold and silver awards, order matters: there are $11$ choices for gold and $10$ remaining choices for silver.
>
> $$P(11,2)=11(10)=\boxed{110}.$$
>
> If the finalists are selected without ranking, the pair $\{A,B\}$ is the same as $\{B,A\}$. Therefore divide the ordered total by $2!$:
>
> $$\binom{11}{2}=\frac{11(10)}{2}=\boxed{55}.$$
>
> **Conclusion:** The award outcomes are permutations; the unranked finalists are combinations. Every unranked pair has exactly two possible award assignments.

> [!abstract] Review First
> - [[Math/Combinatorics/Counting Methods Review - Practice 1 - Permutation or Combination|Counting Methods Review - Practice 1 - Permutation or Combination]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Permutation Formula - Practice 1 - Eco Council Officers|Permutation Formula - Practice 1 - Eco Council Officers]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Combinations - Practice 1 - Evaluate Combination Notation|Combinations - Practice 1 - Evaluate Combination Notation]]
