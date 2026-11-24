---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Optimization"
show_solution: true
qod_id: "QOD-927C1EEF90117DBB526BA0BE"
title: "Optimization 3"
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

Algebraically determine the absolute and local minima and maxima of

$$
f(x)=x^4-8x^2+16
$$

on $[-1,3]$.

## Solution

> [!example]- Show solution
>
> Differentiate:
>
> $$
> f'(x)=4x^3-16x=4x(x-2)(x+2).
> $$
>
> The critical numbers in $[-1,3]$ are $x=0$ and $x=2$.
>
> Evaluate:
>
> $$
> f(-1)=9,\qquad f(0)=16,\qquad f(2)=0,\qquad f(3)=25.
> $$
>
> From the sign of $f'(x)$, the function increases on $(-1,0)$, decreases on $(0,2)$, and increases on $(2,3)$.
>
> Therefore:
>
> - local maximum: $\boxed{(0,16)}$;
> - local minimum: $\boxed{(2,0)}$;
> - absolute maximum: $\boxed{(3,25)}$;
> - absolute minimum: $\boxed{(2,0)}$.

> [!abstract] Review First
> - [[Math/Calculus/Derivatives/Derivatives 1|Derivatives 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Calculus/Optimization Problems/Optimization 2|Optimization 2]]
> - [[Math/Calculus/Optimization Problems/Optimization 4|Optimization 4]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
