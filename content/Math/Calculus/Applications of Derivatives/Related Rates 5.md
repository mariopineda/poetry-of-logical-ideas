---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Related Rates"
show_solution: true
qod_id: "QOD-8685C4DA6C8DC7C1C575582A"
title: "Related Rates 5"
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

Joe is driving east at 60 km/h, Dave is driving south at 70 km/h. Both cars are approaching the intersection of the two roads. At what rate is the distance betwen the cars decreasing when Joe's car is 0.4 km and Dave's car is 0.3 km from the intersection?

## Solution

> [!example]- Show solution
>
> Let $x$ and $y$ be the cars' distances from the intersection.
>
> At the instant described,
>
> $$
> x=0.4\text{ km},
> \qquad
> y=0.3\text{ km}.
> $$
>
> Because both cars are approaching the intersection,
>
> $$
> \frac{dx}{dt}=-60\text{ km/h}
> $$
>
> and
>
> $$
> \frac{dy}{dt}=-70\text{ km/h}.
> $$
>
> If $z$ is the distance between the cars, then
>
> $$
> z^2=x^2+y^2.
> $$
>
> Differentiate:
>
> $$
> 2z\frac{dz}{dt}
> =
> 2x\frac{dx}{dt}
> +
> 2y\frac{dy}{dt}.
> $$
>
> At this instant,
>
> $$
> z
> =
> \sqrt{0.4^2+0.3^2}
> =
> 0.5.
> $$
>
> Therefore,
>
> $$
> \frac{dz}{dt}
> =
> \frac{0.4(-60)+0.3(-70)}{0.5}.
> $$
>
> Thus,
>
> $$
> \frac{dz}{dt}
> =
> \frac{-24-21}{0.5}
> =
> -90.
> $$
>
> Therefore, the distance between the cars is
>
> $$
> \boxed{\text{decreasing at }90\text{ km/h}}.
> $$
>
> > [!info]- Legacy video solution
> > https://www.youtube.com/embed/QmExrw9s4mk

> [!abstract] Review First
> - [[Math/Calculus/Derivatives/Implicit Differentiation 1|Implicit Differentiation 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Calculus/Applications of Derivatives/Related Rates 4|Related Rates 4]]
> - [[Math/Calculus/Applications of Derivatives/Related Rates 6|Related Rates 6]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
