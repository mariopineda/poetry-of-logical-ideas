---
type: qod
publish: true
course:
- Mathematics 30-2
- Mathematics 30-1
topic: Polynomial Functions
show_solution: true
qod_id: DIP-30-2-202108-MC24
diploma_eligible: true
diploma_ready: true
review_status: reviewed-batch13
question_format: written-response
diploma_cognitive_level: Problem Solving
diploma_performance_standard: Acceptable
diploma_outcomes: '7'
tags:
- qod
- diploma-preparation
- written-response
certified_batch: 13
diploma_original_topic: RF
diploma_original_item_format: multiple-choice
diploma_historical_percent_correct: 79.1
---

A community workshop experimented with different hourly rental prices and recorded the resulting total daily revenue.

| Hourly price, $x$ ($) | 4 | 6 | 8 | 10 | 12 |
|---|---:|---:|---:|---:|---:|
| Daily revenue, $R$ ($) | 850 | 1100 | 1200 | 1090 | 850 |

1. Use **quadratic regression**, rather than an exact interpolation through three points, to model these data by $R(x)=ax^2+bx+c$.
2. Determine the hourly rental price that maximizes the **modelled** revenue and the corresponding modelled maximum revenue. Round both to the nearest cent.
3. Explain how the sign of $a$ confirms that you found a maximum.

## Solution

> [!example]- Show solution
> Fit the five data pairs by least squares to $R(x)=ax^2+bx+c$. The coefficients (shown to six decimals) are
>
> $$R(x)\approx -21.250000x^2+339.500000x+(-168.000000).$$
>
> A quadratic with $a<0$ opens downward, so its vertex is the maximum of the fitted model. Using full-precision regression coefficients,
>
> $$x=-\frac{b}{2a}\approx 7.98824,$$
>
> $$R(x)\approx 1188.00294.$$
>
> The estimated revenue-maximizing hourly price is **$\boxed{\$7.99}$** and the predicted maximum daily revenue is **$\boxed{\$1188.00}$**. These are fitted predictions, not necessarily one of the observed data values.
>
> ![[batch13-quadratic-regression-solution.svg]]

> [!abstract] Review First
> - [[Math/Polynomials/Polynomial Review 1|Polynomial Review 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Polynomials/Finding the dimensions of a shipping crate|Finding the dimensions of a shipping crate]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Polynomials/Predicting an unmeasured value with quadratic regression|Predicting an unmeasured value with quadratic regression]]
