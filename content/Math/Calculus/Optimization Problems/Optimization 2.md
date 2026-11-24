---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Optimization"
show_solution: true
qod_id: "QOD-47CC56181260FB5B13C476A1"
title: "Optimization 2"
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
---

Find the absolute maximum and absolute minimum of

$$
f(x)=\sqrt[3]{(x^2-9)^2}
$$

on

$$
[-1,6].
$$

## Solution

> [!example]- Show solution
>
> Since
>
> $$
> f(x)=|x^2-9|^{2/3},
> $$
>
> the function is continuous on $[-1,6]$.
>
> Potential extrema occur at endpoints and critical points.
>
> For $-1\leq x<3$,
>
> $$
> f(x)=(9-x^2)^{2/3},
> $$
>
> so
>
> $$
> f'(x)
> =
> -\frac{4x}{3(9-x^2)^{1/3}}.
> $$
>
> This gives the critical number
>
> $$
> x=0.
> $$
>
> The derivative is also undefined at
>
> $$
> x=3,
> $$
>
> where the function itself is defined.
>
> Evaluate the function at the endpoints and critical numbers:
>
> $$
> f(-1)=\sqrt[3]{64}=4,
> $$
>
> $$
> f(0)=\sqrt[3]{81},
> $$
>
> $$
> f(3)=0,
> $$
>
> and
>
> $$
> f(6)=\sqrt[3]{729}=9.
> $$
>
> Therefore, the absolute minimum is
>
> $$
> \boxed{0\text{ at }x=3},
> $$
>
> and the absolute maximum is
>
> $$
> \boxed{9\text{ at }x=6}.
> $$

> [!abstract] Review First
> - [[Math/Calculus/Derivatives/Derivatives 1|Derivatives 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Calculus/Optimization Problems/Optimization 1|Optimization 1]]
> - [[Math/Calculus/Optimization Problems/Optimization 3|Optimization 3]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
