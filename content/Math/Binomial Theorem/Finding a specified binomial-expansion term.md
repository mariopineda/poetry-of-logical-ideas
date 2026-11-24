---
type: qod
publish: true
course:
- Mathematics 30-1
topic: Binomial Theorem
show_solution: true
qod_id: DIP-30-1-2016-MC27
diploma_eligible: true
diploma_ready: true
review_status: certified-batch06
question_format: written-response
diploma_cognitive_level: Procedural
diploma_performance_standard: Excellence
diploma_outcomes: '4'
tags:
- qod
- diploma-preparation
- written-response
certified_batch: 6
diploma_original_percent_correct: 48.4
diploma_original_item_format: multiple-choice
title: "Finding a specified binomial-expansion term"
aliases: []
domain: null
learning_order: null
estimated_minutes: null
calculator: null
curriculum_alignment: []
cognitive_level: ["Procedural"]
performance_standard: ["Excellence"]
source: null
source_kind: null
source_question: null
source_topic: null
source_format: "multiple-choice"
source_equivalence: null
source_percent_correct: 48.4
source_mean_score: null
assessment_metadata_origin: null
review_date: null
curriculum_review_required: null
---

Determine the fifth term in the expansion of $\left(x^3+\frac{2}{x^2}\right)^7$, written in descending powers of $x$. Show the general-term substitution.

## Solution

> [!example]- Show solution
> The general term in the binomial expansion is
>
> $$T_{r+1}=\binom7r(x^3)^{7-r}(2x^{-2})^r=\binom7r2^r x^{21-5r}.$$
>
> The fifth term has $r=4$, so
>
> $$T_5=\binom74 2^4 x^{21-20}=35(16)x=\boxed{560x}.$$
>
> The powers $21,16,11,6,1,\ldots$ decrease as required.

> [!abstract] Review First
> - [[Math/Calculus/Applications of Derivatives/Acceleration 1|Acceleration 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Calculus/Applications of Derivatives/Acceleration 2|Acceleration 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Calculus/Applications of Derivatives/Acceleration 3|Acceleration 3]]
