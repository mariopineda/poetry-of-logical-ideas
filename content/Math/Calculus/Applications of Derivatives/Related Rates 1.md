---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Related Rates"
show_solution: true
qod_id: "QOD-D9D4AE9E76A29ABDF9EE56B7"
title: "Related Rates 1"
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

A $6$ m ladder is leaning against a vertical wall. Its foot is sliding away from the wall at $1\text{ m/s}$.

At what rate is the top of the ladder falling when the foot of the ladder is $3$ m from the wall?

## Solution

> [!example]- Show solution
>
> Let $x$ be the distance of the foot of the ladder from the wall and $y$ the height of the top of the ladder.
>
> Since the ladder length is constant,
>
> $$
> x^2+y^2=36.
> $$
>
> Differentiate with respect to time:
>
> $$
> 2x\frac{dx}{dt}
> +
> 2y\frac{dy}{dt}
> =0.
> $$
>
> Thus,
>
> $$
> \frac{dy}{dt}
> =
> -\frac{x}{y}\frac{dx}{dt}.
> $$
>
> When $x=3$,
>
> $$
> y=\sqrt{36-9}=3\sqrt3.
> $$
>
> Using
>
> $$
> \frac{dx}{dt}=1,
> $$
>
> we get
>
> $$
> \frac{dy}{dt}
> =
> -\frac{3}{3\sqrt3}
> =
> -\frac{1}{\sqrt3}
> =
> -\frac{\sqrt3}{3}.
> $$
>
> Therefore, the top of the ladder is falling at
>
> $$
> \boxed{\frac{\sqrt3}{3}\text{ m/s}}
> $$
>
> downward.

> [!abstract] Review First
> - [[Math/Calculus/Derivatives/Implicit Differentiation 1|Implicit Differentiation 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Calculus/Trigonometry/Applications of Trig Derivatives 3 - Modeling the Velocity of a Ferris Wheel|Applications of Trig Derivatives 3 - Modeling the Velocity of a Ferris Wheel]]
> - [[Math/Calculus/Applications of Derivatives/Related Rates 2|Related Rates 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
