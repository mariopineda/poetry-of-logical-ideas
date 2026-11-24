---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Optimization"
show_solution: true
qod_id: "QOD-7F40C2A0D37AA0CBF366AFD6"
title: "Optimization 6"
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

Find the exact maximum volume of a right circular cylinder that can be inscribed in a sphere of radius

$$
R=\sqrt{3}\text{ m}.
$$

## Solution

> [!example]- Show solution
>
> Let $r$ be the cylinder radius and $h$ its height.
>
> A central cross-section gives
>
> $$
> r^2+\left(\frac{h}{2}\right)^2=3.
> $$
>
> Thus,
>
> $$
> r^2=3-\frac{h^2}{4}.
> $$
>
> The volume is
>
> $$
> V(h)=\pi r^2h
> =3\pi h-\frac{\pi}{4}h^3.
> $$
>
> Differentiate:
>
> $$
> V'(h)=3\pi-\frac{3\pi}{4}h^2.
> $$
>
> Set $V'(h)=0$:
>
> $$
> h=2.
> $$
>
> Then
>
> $$
> r^2=3-1=2.
> $$
>
> Therefore,
>
> $$
> V_{\max}=\pi(2)(2)=\boxed{4\pi\text{ m}^3}.
> $$

> [!abstract] Review First
> - [[Math/Calculus/Derivatives/Derivatives 1|Derivatives 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Calculus/Optimization Problems/Optimization 5|Optimization 5]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
