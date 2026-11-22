---
type: qod
publish: true
course:
- Mathematics 30-2
- Mathematics 30-1
topic: Polynomial Functions
show_solution: true
qod_id: DIP-30-2-A19-NR6
diploma_eligible: true
diploma_ready: true
review_status: reviewed-batch12
question_format: written-response
diploma_cognitive_level: Procedural
diploma_performance_standard: Acceptable
diploma_outcomes: '7'
diploma_original_item_format: numerical-response
diploma_historical_percent_correct: 67.2
tags:
- diploma-preparation
- qod
- written-response
certified_batch: 12
diploma_original_topic: LR
diploma_original_percent_correct: 67.2
---

During a test run, a robotic arm's vertical position was recorded at six equally spaced times. Measurement error is present.

| Time $t$ (s) | 0 | 1 | 2 | 3 | 4 | 5 |
|:--|--:|--:|--:|--:|--:|--:|
| Height $h$ (cm) | 48 | 79 | 102 | 116 | 113 | 104 |

Use a **quadratic least-squares regression** to model height as $h=at^2+bt+c$. Give $a,b,c$ to at least three decimals and predict the height at $t=6$ seconds to the nearest centimetre. Explain why this is regression rather than an exact quadratic determined from three points.

## Solution

> [!example]- Show solution
> Using all six data points in quadratic least-squares regression gives
>
> $$h(t)\approx -5.428571t^2+38.457143t+47.285714.$$
>
> Substituting $t=6$ using the unrounded coefficients:
>
> $$h(6)\approx 82.6000\ \mathrm{cm}\approx\boxed{83\ \mathrm{cm}}.$$
>
> The measurements do not all lie on a single quadratic curve exactly; minimizing the total squared residuals over all six points, rather than interpolating three points, is required.

> [!abstract] Review First
> - [[Math/Polynomials/Polynomial Functions - Analyzing a Cubic Function 1|Polynomial Functions - Analyzing a Cubic Function 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Polynomials/Polynomial Functions - Linear Regression 1 - Alberta GHG Emissions|Polynomial Functions - Linear Regression 1 - Alberta GHG Emissions]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Polynomials/Polynomial Functions - Analyzing a Cubic Function 2|Polynomial Functions - Analyzing a Cubic Function 2]]
