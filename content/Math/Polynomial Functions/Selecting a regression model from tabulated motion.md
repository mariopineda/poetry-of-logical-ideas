---
type: qod
publish: true
course:
- Mathematics 30-2
- Mathematics 30-1
topic: Polynomial Functions
show_solution: true
qod_id: DIP-30-2-2013-MC24
diploma_eligible: true
diploma_ready: true
review_status: certified-batch07
question_format: written-response
diploma_cognitive_level: Conceptual
diploma_performance_standard: Acceptable
diploma_outcomes: '7'
tags:
- qod
- diploma-preparation
- written-response
certified_batch: 7
diploma_original_percent_correct: 78.5
diploma_original_item_format: multiple-choice
title: "Selecting a regression model from tabulated motion"
aliases: []
domain: null
learning_order: null
estimated_minutes: null
calculator: null
curriculum_alignment: []
cognitive_level: ["Conceptual"]
performance_standard: ["Acceptable"]
source: null
source_kind: null
source_question: null
source_topic: null
source_format: "multiple-choice"
source_equivalence: null
source_percent_correct: 78.5
source_mean_score: null
assessment_metadata_origin: null
review_date: null
curriculum_review_required: null
---

A motion sensor records the vertical position of an adjustable camera-crane arm at five equally spaced times:

| Time $t$ (s) | 0 | 1 | 2 | 3 | 4 |
|---|---:|---:|---:|---:|---:|
| Height $h$ (m) | 5 | 13 | 17 | 17 | 13 |

Of **linear, quadratic, sinusoidal, and exponential regression**, which family is most appropriate for these values over the recorded interval? Justify using first and second differences, and give a quadratic formula fitting all five measurements.

## Solution

> [!example]- Show solution
> First differences are
>
> $$13-5=8,\quad17-13=4,\quad17-17=0,\quad13-17=-4.$$
>
> Second differences are constant:
>
> $$4-8=0-4=-4-0=\boxed{-4}.$$
>
> Equal-interval data with constant nonzero second differences are fitted by a quadratic, $h(t)=at^2+bt+c$. Since the time step is $1$, $2a=-4$ and $a=-2$. Also $c=h(0)=5$ and $a+b+c=13$, so $b=10$. Hence
>
> $$\boxed{h(t)=-2t^2+10t+5}.$$
>
> Substituting $t=0,1,2,3,4$ reproduces all five heights. Thus **quadratic regression** is the most appropriate of the four listed families.

> [!abstract] Review First
> - [[Math/Quadratics/Quadratic Functions 1|Quadratic Functions 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Polynomials/Predicting a quadratic regression value|Predicting a quadratic regression value]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Quadratics/Quadratic Equations 2|Quadratic Equations 2]]
