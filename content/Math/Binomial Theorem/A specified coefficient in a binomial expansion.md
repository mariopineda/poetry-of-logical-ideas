---
type: qod
publish: true
course:
- Mathematics 30-1
topic: Binomial Theorem
show_solution: true
qod_id: DIP-30-1-X033
diploma_eligible: true
diploma_ready: true
review_status: ai-reviewed-question-and-solution-batch15
question_format: written-response
diploma_cognitive_level: Procedural
diploma_performance_standard: Acceptable
diploma_outcomes: '4'
tags:
- qod
- diploma-preparation
- written-response
diploma_origin: supplementary
diploma_source_equivalence: not_applicable
assessment_metadata_status: author_estimated
certified_batch: 15
review_date: '2026-11-22'
title: "A specified coefficient in a binomial expansion"
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

Determine the coefficient of $x^3$ in the expansion of $(2x-3)^5$ using the binomial theorem. Identify the term number used.

## Solution

> [!example]- Show solution
> The general term in descending powers of $x$ is
>
> $$T_{r+1}=\binom{5}{r}(2x)^{5-r}(-3)^r.$$
>
> To get $x^3$, solve $5-r=3$, giving $r=2$. This is the **third term**, $T_3$.
>
> $$T_3=\binom{5}{2}(2x)^3(-3)^2=10\cdot8\cdot9x^3=720x^3.$$
>
> **Answer:** The coefficient is $\boxed{720}$, from the **third term**.

> [!abstract] Review First
> - [[Math/Combinatorics/Binomial Theorem 1|Binomial Theorem 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Exponent Laws/Exponent Laws 5|Exponent Laws 5]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Combinations - Practice 1 - Evaluate Combination Notation|Combinations - Practice 1 - Evaluate Combination Notation]]
