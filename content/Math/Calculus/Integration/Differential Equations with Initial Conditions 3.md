---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Differential Equations"
show_solution: true
qod_id: "QOD-0E4A0C0A5B3043C658A98FB9"
title: "Differential Equations with Initial Conditions 3"
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

On the surface of the Moon, the acceleration due to gravity is $1.6\text{ m/s}^2$ downward. A rock is thrown upward at $31\text{ m/s}$ from a height of $22\text{ m}$.

Assume upward is positive. Determine, to the nearest hundredth:

1. the rock's maximum height;
2. its velocity when it hits the Moon's surface.

## Solution

> [!example]- Show solution
>
> The acceleration is constant:
>
> $$
> a(t)=-1.6.
> $$
>
> Integrating gives
>
> $$
> v(t)=-1.6t+31
> $$
>
> and
>
> $$
> h(t)=-0.8t^2+31t+22.
> $$
>
> ### 1. Maximum height
>
> The maximum occurs when $v(t)=0$:
>
> $$
> -1.6t+31=0
> \Rightarrow t=19.375.
> $$
>
> Then
>
> $$
> h(19.375)=322.3125.
> $$
>
> Therefore,
>
> $$
> \boxed{322.31\text{ m}}.
> $$
>
> ### 2. Velocity on impact
>
> Set $h(t)=0$:
>
> $$
> -0.8t^2+31t+22=0.
> $$
>
> The positive solution is
>
> $$
> t\approx39.4471\text{ s}.
> $$
>
> Therefore,
>
> $$
> v(39.4471)\approx-32.12\text{ m/s}.
> $$
>
> So the rock hits the surface with velocity
>
> $$
> \boxed{-32.12\text{ m/s}},
> $$
>
> or $32.12\text{ m/s}$ downward.

> [!abstract] Review First
> - [[Math/Calculus/Integration/Antiderivative 1|Antiderivative 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Calculus/Integration/Differential Equations with Initial Conditions 2|Differential Equations with Initial Conditions 2]]
> - [[Math/Calculus/Integration/Differential Equations with Initial Conditions 4|Differential Equations with Initial Conditions 4]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
