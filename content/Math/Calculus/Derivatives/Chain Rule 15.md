---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Chain Rule"
show_solution: true
qod_id: "QOD-4F2C8B3D384636D1423A5251"
title: "Chain Rule 15"
aliases: []
domain: null
tags: []
learning_order: null
estimated_minutes: null
calculator: null
question_format: null
curriculum_alignment: []
cognitive_level: []
performance_standard: []
diploma_eligible: null
diploma_ready: null
source: null
source_kind: null
source_question: null
source_topic: null
source_format: null
source_equivalence: null
source_percent_correct: null
source_mean_score: null
assessment_metadata_origin: null
review_status: null
review_date: null
curriculum_review_required: null
used_in: []
---

Differentiate. Assume $f$ and $g$ are differentiable functions.

### A.

$$
y=x^3f(x^2)
$$

### B.

$$
y=f(g(x^3))
$$

## Solution

> [!example]- Show solution
>
> ### A.
>
> Use the Product Rule and Chain Rule:
>
> $$
> y'
> =
> 3x^2f(x^2)
> +
> x^3f'(x^2)(2x).
> $$
>
> Thus,
>
> $$
> \boxed{
> y'
> =
> 3x^2f(x^2)
> +
> 2x^4f'(x^2)
> }.
> $$
>
> Equivalently,
>
> $$
> \boxed{
> y'
> =
> x^2\left[3f(x^2)+2x^2f'(x^2)\right]
> }.
> $$
>
> ### B.
>
> Apply the Chain Rule twice:
>
> $$
> y'
> =
> f'(g(x^3))
> \cdot
> g'(x^3)
> \cdot
> 3x^2.
> $$
>
> Therefore,
>
> $$
> \boxed{
> y'
> =
> 3x^2g'(x^3)f'(g(x^3))
> }.
> $$

> [!abstract] Review First
> - [[Math/Calculus/Derivatives/Basic Derivatives 1|Basic Derivatives 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Calculus/Derivatives/Chain Rule 14|Chain Rule 14]]
> - [[Math/Calculus/Derivatives/Chain Rule 16|Chain Rule 16]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
