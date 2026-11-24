---
type: qod
publish: true
course:
  - "Mathematics 10C"
  - "Mathematics 30-1"
  - "Mathematics 30-2"
topic: Polynomial Functions
show_solution: true
diploma_eligible: true
diploma_ready: false
diploma_screening: strong-candidate-2026-11-22
tags:
  - qod
  - diploma-preparation
qod_id: "QOD-91F11F6DE40573AD4E7CA010"
title: "Polynomial Functions 24 — Stopping Distance"
aliases: []
domain: null
learning_order: null
estimated_minutes: null
calculator: null
question_format: null
curriculum_alignment: []
cognitive_level: []
performance_standard: []
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

The following data shows the approximate stopping distance of a vehicle at different speeds.

| Speed, $s$ (km/h) | Stopping Distance, $d$ (m) |
| ---: | ---: |
| 20 | 6.2 |
| 30 | 10.8 |
| 40 | 17.7 |
| 50 | 26.5 |
| 60 | 37.6 |

1. Determine a **quadratic regression equation** for the data. Record the coefficients to at least five decimal places.
2. **Sketch the scatter plot and quadratic regression curve.** Your sketch must include:
   - labelled axes with variables and units
   - an appropriate scale
   - all five data points
   - the regression curve
3. Use the regression model to estimate the stopping distance at **45 km/h**.
4. Is this estimate **interpolation or extrapolation**? Explain.
5. State a reasonable **domain and range** for the regression model over the observed data.

Use your graphing calculator. Use the calculator's stored regression equation for calculations rather than rounded coefficients.

## Solution

> [!example]- Show solution
>
> ### 1. Quadratic regression
>
> The quadratic regression equation is approximately
>
> $$
> d(s)=0.01064s^2-0.06643s+3.26
> $$
>
> ### 2. Sketch
>
> ![[Polynomial Functions 24 Solution Graph.png]]
>
> ### 3. Stopping distance at 45 km/h
>
> Using the calculator's unrounded regression equation,
>
> $$
> d(45)\approx21.82
> $$
>
> The estimated stopping distance is approximately **21.8 m**.
>
> ### 4. Interpolation or extrapolation
>
> This is **interpolation** because
>
> $$
> 20<45<60
> $$
>
> so the estimate is made within the range of observed speeds.
>
> ### 5. Domain and range
>
> A reasonable domain based on the observed data is
>
> $$
> 20\le s\le60
> $$
>
> Over this interval, the regression model gives approximately
>
> $$
> 6.19\le d\le37.59
> $$
>
> where $s$ is measured in km/h and $d$ is measured in metres.

> [!abstract] Review First
> - [[Math/Polynomials/Polynomial Functions 7|Polynomial Functions 7]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> _No linked questions yet._

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Polynomials/Polynomial Functions 25 — Inflating a Balloon|Polynomial Functions 25 — Inflating a Balloon]]
