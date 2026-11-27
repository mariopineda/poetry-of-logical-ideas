---
type: qod
publish: true
course:
  - Mathematics 30-2
  - Mathematics 30-1
topic: "Applications of Exponential Functions"
learning_order: 3501
show_solution: false
source: "Original QOD developed for cumulative exponential functions review"
source_question: null
domain: "Exponential Functions"
curriculum_alignment:
  - "Mathematics 30-2 Relations and Functions RF5.2, RF5.3, RF6.2, RF6.5"
  - "Mathematics 30-1 Relations and Functions RF9.3, RF10.2, RF10.5, RF10.6, RF10.8"
curriculum_review_required: false
calculator: allowed
diploma_eligible: true
diploma_ready: false
diploma_screening: strong-candidate-2026-11-26
tags:
  - qod
  - diploma-preparation
  - written-response
qod_id: "QOD-F405A6B1714F5386B67055A5"
title: "Exponential Models - Community Funds 1"
aliases: []
estimated_minutes: 12
question_format: written-response
cognitive_level: ["Problem Solving"]
performance_standard: []
source_kind: original
source_topic: "Cumulative exponential functions review"
source_format: null
source_equivalence: null
source_percent_correct: null
source_mean_score: null
assessment_metadata_origin: "Original authoring and curriculum review; no historical diploma data"
review_status: strong-diploma-candidate
review_date: 2026-11-26
used_in: []
---

A community organization manages two separate funds to support its long-term activities.

The **Development Fund** currently contains 1,800 dollars. The money is invested in an account earning 6% annual interest, compounded annually. No additional deposits or withdrawals are made.

The **Community Grant Fund** currently contains 3,000 dollars. At the end of each year, the organization distributes a fixed percentage of the fund's balance immediately before the distribution as grants to local community projects. The fund earns no interest and receives no additional contributions.

After two complete years, the Community Grant Fund will contain 2,539.20 dollars.

Assume these arrangements remain unchanged.

A. Determine two exponential functions representing the balances of the two funds in terms of time $t$, measured in complete years from today.

B. Determine the percentage of the Community Grant Fund's balance that is distributed each year.

C. Determine the minimum number of complete years required for the balance of the Development Fund to exceed that of the Community Grant Fund. Justify your answer mathematically.

> [!info]- Hint 1 — Part A
> How is the balance of each fund affected by one annual transaction? The grant fund's balance after two years reflects two applications of the same multiplier.

> [!info]- Hint 2 — Part B
> Does the decay factor represent the proportion distributed as grants or the proportion remaining in the fund?

> [!info]- Hint 3 — Part C
> Think about what the intersection of the two graphs represents. Would a fractional year be a valid time for comparing the actual annual balances?

> [!abstract] Review First
> - [[Math/Exponential Functions/Compound Interest - Savings Table 1|Compound Interest - Savings Table 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Exponential Functions/Exponential Growth - Comparing Investments 1|Exponential Growth - Comparing Investments 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Exponential Functions/Compound Interest - Comparing Frequencies 1|Compound Interest - Comparing Frequencies 1]]

## Solution

> [!example]- Show solution
>
> **A. Determine the exponential models.**
>
> Let $D(t)$ and $G(t)$ be the Development Fund and Community Grant Fund balances, respectively, in dollars after $t$ complete years.
>
> The Development Fund has an initial balance of $1800$ and an annual growth factor of $1+0.06=1.06$.
>
> $$\boxed{D(t)=1800(1.06)^t}$$
>
> The Community Grant Fund has an initial balance of $3000$. Let $b$ be its annual decay factor, where $0<b<1$.
>
> $$G(t)=3000b^t$$
>
> Using the balance after two years,
>
> $$\begin{aligned}2539.20&=3000b^2\\ b^2&=\frac{2539.20}{3000}=0.8464\\ b&=\sqrt{0.8464}=0.92.\end{aligned}$$
>
> Only the positive square root is appropriate because the balance is multiplied by a positive factor each year.
>
> $$\boxed{G(t)=3000(0.92)^t}$$
>
> In context, the models are evaluated at $t=0,1,2,3,\ldots$ because both transactions occur annually.
>
> **B. Determine the annual grant distribution rate.**
>
> The factor $0.92$ means that $92\%$ of the balance remains after each annual distribution.
>
> $$r=(1-0.92)\times100\%=\boxed{8\%}$$
>
> The organization distributes $8\%$ of the balance immediately before each annual distribution, not $8\%$ of the original balance each time.
>
> **C. Determine the minimum number of complete years.**
>
> We require $D(t)>G(t)$, not merely equality.
>
> **Method 1 — Graphical solution (TI-83/TI-84).**
>
> 1. In `Y=`, enter `Y1=1800(1.06)^X` and `Y2=3000(0.92)^X`.
> 2. Set `WINDOW` to `Xmin=0`, `Xmax=6`, `Xscl=1`, `Ymin=0`, `Ymax=3500`, `Yscl=500`.
> 3. Press `GRAPH`. Use `2nd` → `TRACE` → `5:intersect`. Select the first and second curves, then move near the intersection and press `ENTER` to confirm the guess.
>
> ![[Exponential_Models_Community_Funds_1_Intersection.svg]]
>
> The intersection of the continuous extensions is approximately $(3.6062,2220.91)$. The solid curves are the mathematical extensions of the annual models; the dots are the balances at completed years. The dashed red guide identifies the intersection's time coordinate.
>
> At the intersection, the two models have equal values. Since $D$ increases and $G$ decreases, the Development Fund exceeds the Community Grant Fund for times to the right of the intersection. Only complete years count in this context.
>
> **Method 2 — Algebraic solution using logarithms (alternative).**
>
> Set the two models equal and solve for the crossover time:
>
> $$\begin{aligned}1800(1.06)^t&=3000(0.92)^t\\ \left(\frac{1.06}{0.92}\right)^t&=\frac{5}{3}\\ t&=\frac{\log(5/3)}{\log(1.06/0.92)}\\ t&\approx3.6062.\end{aligned}$$
>
> Because $1.06/0.92>1$, the ratio $D(t)/G(t)$ increases with time. Thus $D(t)>G(t)$ when $t$ is greater than the crossover time. Logarithms are not required for the graphical method.
>
> **Verify the adjacent complete years (either method).**
>
> | Complete years | Development Fund (dollars) | Community Grant Fund (dollars) |
> |---:|---:|---:|
> | 3 | 2,143.83 | 2,336.06 |
> | 4 | 2,272.46 | 2,149.18 |
>
> The Development Fund is still smaller after three years but is larger after four years. Because the Development Fund increases and the Community Grant Fund decreases each year, no earlier completed year satisfies the condition.
>
> $$\boxed{4\text{ complete years}}$$
>
> A direct year-by-year comparison using a table is also valid; it must establish that the first year satisfying the strict inequality is year 4.
