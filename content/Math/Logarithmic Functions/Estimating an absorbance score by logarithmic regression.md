---
type: qod
publish: true
course:
- Mathematics 30-2
topic: Logarithms
show_solution: true
qod_id: DIP-30-2-202108-NR7
diploma_eligible: true
diploma_ready: true
review_status: reviewed-batch13
question_format: written-response
diploma_cognitive_level: Procedural
diploma_performance_standard: Acceptable
diploma_outcomes: '6'
tags:
- qod
- diploma-preparation
- written-response
certified_batch: 13
diploma_original_topic: RF
diploma_original_item_format: numerical-response
diploma_historical_percent_correct: 66.3
---

A light sensor is tested using several ratios $x$ of incident to transmitted light. The sensor's dimensionless attenuation reading $y$ is shown below.

| Ratio $x$ | 1.2 | 2.4 | 3.7 | 5.8 | 9.0 |
|---|---:|---:|---:|---:|---:|
| Reading $y$ | 0.08 | 0.23 | 0.36 | 0.54 | 0.66 |

Fit a logarithmic regression of the form $y=a+b\ln x$ using **all five measurements**. Predict the reading when $x=6.8$, to the nearest hundredth. Display the fitted coefficients and substitution.

## Solution

> [!example]- Show solution
> Regress the measured $y$-values on $z=\ln x$, obtaining
>
> $$y\approx -0.000552+0.296266\ln x.$$
>
> Using full-precision coefficients rather than prematurely rounded coefficients,
>
> $$y(6.8)\approx -0.000552+0.296266\ln(6.8)\approx 0.56737.$$
>
> The predicted sensor reading, to the nearest hundredth, is $\boxed{0.57}$.

> [!abstract] Review First
> - [[Math/Logarithmic Functions/Evaluating Logarithms 1|Evaluating Logarithms 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Logarithmic Functions/Logarithm Laws 1|Logarithm Laws 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Logarithmic Functions/Condensing multiple logarithms|Condensing multiple logarithms]]
