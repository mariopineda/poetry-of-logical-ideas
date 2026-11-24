---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Related Rates"
show_solution: true
qod_id: "QOD-73EDEEA45BA58D43809BBD19"
title: "Related Rates 2"
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

The area of an equilatral triangle is decreasing at a rate of 12 cm$^2$/s. Find the rate at which the side is changing when the area is $p \sqrt{3}$ cm$^2$.

## Solution

> [!example]- Show solution
>
> Let $s$ be the side length of the equilateral triangle and $A$ its area.
>
> For an equilateral triangle,
>
> $$
> A=\frac{\sqrt3}{4}s^2.
> $$
>
> Differentiate with respect to time:
>
> $$
> \frac{dA}{dt}
> =
> \frac{\sqrt3}{2}s\frac{ds}{dt}.
> $$
>
> The area is decreasing at $12\text{ cm}^2/\text{s}$, so
>
> $$
> \frac{dA}{dt}=-12.
> $$
>
> When
>
> $$
> A=p\sqrt3,
> $$
>
> we have
>
> $$
> p\sqrt3
> =
> \frac{\sqrt3}{4}s^2.
> $$
>
> Thus,
>
> $$
> s^2=4p
> $$
>
> and, since a side length is positive,
>
> $$
> s=2\sqrt p.
> $$
>
> Substitute into the related-rates equation:
>
> $$
> -12
> =
> \frac{\sqrt3}{2}(2\sqrt p)\frac{ds}{dt}.
> $$
>
> Therefore,
>
> $$
> \boxed{
> \frac{ds}{dt}
> =
> -\frac{12}{\sqrt{3p}}
> \text{ cm/s}
> }.
> $$
>
> The negative sign means the side length is decreasing.

> [!abstract] Review First
> - [[Math/Calculus/Derivatives/Implicit Differentiation 1|Implicit Differentiation 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Calculus/Applications of Derivatives/Related Rates 1|Related Rates 1]]
> - [[Math/Calculus/Applications of Derivatives/Related Rates 3|Related Rates 3]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
