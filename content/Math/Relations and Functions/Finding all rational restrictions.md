---
type: qod
publish: true
course:
- Mathematics 20-1
- Mathematics 30-1
- Mathematics 30-2
- Mathematics 31
topic: Rational Expressions
show_solution: true
qod_id: DIP-30-2-V015
diploma_eligible: true
diploma_ready: true
review_status: reviewed-batch-16
question_format: written-response
diploma_cognitive_level: Conceptual
diploma_performance_standard: Acceptable
diploma_outcomes: '1'
tags:
- qod
- diploma-preparation
- written-response
- supplementary
certified_batch: 16
source_kind: supplementary-practice
assessment_metadata_origin: author-estimated
source_equivalence: not-applicable-supplementary
title: "Finding all rational restrictions"
aliases: []
domain: null
learning_order: null
estimated_minutes: null
calculator: null
curriculum_alignment: []
cognitive_level: ["Conceptual"]
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

Simplify the rational expression and determine **all non-permissible values of the original expression**:

$$
\frac{3(x+2)(x-3)}{(x-4)(x^2-9)}.
$$

Explain why cancelling a factor does **not** make a previously excluded value permissible.

## Solution

> [!example]- Show solution
> Factor the denominator:
>
> $$
> (x-4)(x^2-9)=(x-4)(x-3)(x+3).
> $$
>
> The original denominator is zero for $x=4$, $x=3$, or $x=-3$, so
>
> $$
> \boxed{x\ne -3,3,4}.
> $$
>
> For permitted values, cancel the common factor $x-3$:
>
> $$
> \frac{3(x+2)(x-3)}{(x-4)(x-3)(x+3)}
> =\boxed{\frac{3(x+2)}{(x-4)(x+3)}}.
> $$
>
> The cancellation is valid only where $x-3\ne0$. The simplified expression may have a value at $x=3$, but the **original expression does not**; its original restriction remains in force.

> [!abstract] Review First
> - [[Math/Rational Expressions & Equations/Simplifying Rational Expressions 1|Simplifying Rational Expressions 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Rational Expressions & Equations/Rational Functions - Holes and Vertical Asymptotes 1|Rational Functions - Holes and Vertical Asymptotes 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Rational Expressions & Equations/Rational Functions - Multiple Holes and Restrictions 1|Rational Functions - Multiple Holes and Restrictions 1]]
