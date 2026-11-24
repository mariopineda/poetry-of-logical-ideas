---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Motion and Derivatives"
show_solution: true
qod_id: "QOD-ACE4A9515E2F6410A66B1E19"
title: "Position and Velocity 13"
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

The position of a moving particle on a line is

$$
s(t)=2t^3-21t^2+60t,
\qquad
t\geq0,
$$

where $t$ is measured in seconds and $s$ in metres.

1. What is the velocity after $3$ s and after $6$ s?
2. When is the particle at rest?
3. When is the particle moving in the positive direction?
4. Find the total distance travelled during the first $6$ s.

## Solution

> [!example]- Show solution
>
> Differentiate:
>
> $$
> v(t)=6t^2-42t+60
> =6(t-2)(t-5).
> $$
>
> ### 1.
>
> $$
> v(3)=6(1)(-2)=\boxed{-12\text{ m/s}}
> $$
>
> and
>
> $$
> v(6)=6(4)(1)=\boxed{24\text{ m/s}}.
> $$
>
> ### 2.
>
> The particle is at rest when
>
> $$
> v(t)=0,
> $$
>
> so
>
> $$
> \boxed{t=2\text{ s},\ 5\text{ s}}.
> $$
>
> ### 3.
>
> For $t\geq0$,
>
> $$
> v(t)>0
> $$
>
> when
>
> $$
> \boxed{0\leq t<2\quad\text{or}\quad t>5}.
> $$
>
> ### 4.
>
> The particle changes direction at $t=2$ and $t=5$.
>
> Its positions are
>
> $$
> s(0)=0,
> \qquad
> s(2)=52,
> \qquad
> s(5)=25,
> \qquad
> s(6)=36.
> $$
>
> Therefore, the total distance is
>
> $$
> |52-0|+|25-52|+|36-25|
> $$
>
> $$
> =52+27+11
> =\boxed{90\text{ m}}.
> $$

> [!abstract] Review First
> - [[Math/Calculus/Derivatives/Derivatives 1|Derivatives 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Calculus/Applications of Derivatives/Position and Velocity 12|Position and Velocity 12]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
