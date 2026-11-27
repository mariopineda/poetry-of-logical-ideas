---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Optimization"
show_solution: true
qod_id: "QOD-7C0B9768412A4C33C84FBA2B"
title: "Area of a Rectangle"
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

A rectangle has a perimeter of $100$ m.

Determine the dimensions that maximize its area, and state the maximum area.

## Solution

> [!example]- Show solution
>
> Let the rectangle have length $x$ and width $y$.
>
> The perimeter condition is
>
> $$
> 2x+2y=100,
> $$
>
> so
>
> $$
> y=50-x.
> $$
>
> The area is
>
> $$
> A(x)=x(50-x)=50x-x^2.
> $$
>
> Differentiate:
>
> $$
> A'(x)=50-2x.
> $$
>
> Set the derivative equal to zero:
>
> $$
> 50-2x=0,
> $$
>
> so
>
> $$
> x=25.
> $$
>
> Then
>
> $$
> y=50-25=25.
> $$
>
> Since
>
> $$
> A''(x)=-2<0,
> $$
>
> this critical point gives a maximum.
>
> Therefore, the maximizing dimensions are
>
> $$
> \boxed{25\text{ m}\times25\text{ m}},
> $$
>
> and the maximum area is
>
> $$
> \boxed{625\text{ m}^2}.
> $$

> [!abstract] Review First
> - [[Math/Calculus/Derivatives/Derivatives 1|Derivatives 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Calculus/Optimization Problems/Optimization 1|Optimization 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
