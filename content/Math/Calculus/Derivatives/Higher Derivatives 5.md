---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Higher Derivatives"
show_solution: true
qod_id: "QOD-5A98285AC5533776A82EDA35"
title: "Higher Derivatives 5"
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

Find $y''$ if

$$
y^2-xy=3.
$$

## Solution

> [!example]- Show solution
>
> Differentiate implicitly:
>
> $$
> 2yy'-(xy'+y)=0.
> $$
>
> So
>
> $$
> (2y-x)y'=y
> $$
>
> and
>
> $$
> y'=\frac{y}{2y-x}.
> $$
>
> Differentiate again using the Quotient Rule:
>
> $$
> y''
> =
> \frac{
> y'(2y-x)-y(2y'-1)
> }
> {(2y-x)^2}.
> $$
>
> Since
>
> $$
> y'(2y-x)=y,
> $$
>
> the numerator becomes
>
> $$
> y-2yy'+y
> =
> 2y(1-y').
> $$
>
> Also,
>
> $$
> 1-y'
> =
> 1-\frac{y}{2y-x}
> =
> \frac{y-x}{2y-x}.
> $$
>
> Therefore,
>
> $$
> \boxed{
> y''
> =
> \frac{2y(y-x)}{(2y-x)^3}
> }.
> $$

> [!abstract] Review First
> - [[Math/Calculus/Derivatives/Basic Derivatives 1|Basic Derivatives 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Calculus/Derivatives/Higher Derivatives 4|Higher Derivatives 4]]
> - [[Math/Calculus/Derivatives/Higher Derivatives 6|Higher Derivatives 6]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
