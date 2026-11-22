---
type: qod
publish: true
course:
- Mathematics 30-2
topic: Exponential Functions
show_solution: true
qod_id: DIP-30-2-201901-WR2
diploma_eligible: true
diploma_ready: true
review_status: reviewed-batch11
question_format: written-response
diploma_cognitive_level: Conceptual, Procedural, Problem Solving
diploma_performance_standard: Acceptable, Excellence
diploma_outcomes: 5, 6, 2
tags:
- qod
- diploma-preparation
- written-response
certified_batch: 11
diploma_original_topic: RF, LR
diploma_original_item_format: written-response
diploma_original_mean_raw_score: 4.0/7
---

A chemical tracer in a sealed laboratory sample is measured hourly. Its measured quantity is:

| Time $t$ (h) | 0 | 1 | 2 | 3 | 4 |
|:--|--:|--:|--:|--:|--:|
| Tracer mass $M$ (mg) | 180.00 | 144.00 | 115.20 | 92.16 | 73.73 |

(a) Determine an exponential regression model $M=ab^t$. Round $a$ to the nearest whole number and $b$ to the nearest hundredth.

(b) A second sample starts with twice as much tracer but has the same hourly percentage decrease. State its model and interpret what changes.

(c) A *different* tracer begins with $320$ mg and has a half-life of $5$ h. **Algebraically determine** the time, to the nearest hour, until $55$ mg remains.

(d) In a laboratory survey of $96$ employees, $63$ work with microscopy, $46$ work with spectroscopy, and $15$ work with neither. Determine how many work with **both**. Show a set equation.

## Solution

> [!example]- Show solution
> (a) The common hourly factor is approximately $144/180=0.80$. The data are consistent with an exponential fit (last measurement rounded):
>
> $$\boxed{M(t)\approx180(0.80)^t}.$$
>
> (b) Doubling the initial amount doubles the coefficient $a$ but not the decay factor: $\boxed{M_2(t)=360(0.80)^t}$. Both decay by $20\%$ per hour.
>
> (c) For the different tracer, $55=320(1/2)^{t/5}$. Taking logarithms,
>
> $$t=5\frac{\ln(55/320)}{\ln(1/2)}\approx 12.70284\text{ h}.$$
>
> To the nearest hour, $\boxed{13\text{ h}}$.
>
> (d) The union contains $96-15=81$ employees. By inclusion–exclusion,
>
> $$63+46-\lvert M\cap S\rvert=81,$$
>
> so $\boxed{\lvert M\cap S\rvert=28}$ employees work with both methods.

> [!abstract] Review First
> - [[Math/Exponential Functions/Common Ratio 1|Common Ratio 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Exponential Functions/Appreciation and Depreciation 1|Appreciation and Depreciation 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Exponential Functions/Caffeine Decay 1|Caffeine Decay 1]]
