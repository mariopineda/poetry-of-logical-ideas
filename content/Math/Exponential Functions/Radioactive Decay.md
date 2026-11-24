---
type: qod
publish: true
course:
  - "Mathematics 30-1"
  - "Mathematics 30-2"
topic: "Exponential Growth and Decay"
show_solution: true
diploma_eligible: true
diploma_ready: false
diploma_screening: strong-candidate-2026-11-22
tags:
  - qod
  - diploma-preparation
qod_id: "QOD-A833F9BF18074A5CF61A7C31"
title: "Radioactive Decay"
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

**Chernobyl Fallout: Modeling Cesium-137 Decay in a Swedish Forest**

Cesium-137 has a half-life of approximately $30$ years. Suppose the concentration of cesium-137 in a Swedish forest was measured at $1200\text{ Bq/kg}$ in 1986.

Let $A(t)$ be the concentration, in Bq/kg, $t$ years after 1986.

1. Write an exponential decay model in the form $A(t)=A_0b^t$.
2. Determine the decay base $b$ from the $30$-year half-life. Round $b$ to four decimal places.
3. Predict the concentration in 2025. Round to the nearest whole number.
4. Determine how many years after 1986 it will take for the concentration to fall below $100\text{ Bq/kg}$. Round to the nearest whole year.

## Solution

> [!example]- Show solution
>
> The initial concentration is $A_0=1200$.
>
> ### 1.
>
> $$
> A(t)=1200b^t.
> $$
>
> ### 2.
>
> A half-life of $30$ years means
>
> $$
> 600=1200b^{30}.
> $$
>
> Thus,
>
> $$
> b=\left(\frac12\right)^{1/30}\approx0.9771599684,
> $$
>
> so
>
> $$
> \boxed{b\approx0.9772}.
> $$
>
> Equivalently,
>
> $$
> \boxed{A(t)=1200\left(\frac12\right)^{t/30}}.
> $$
>
> ### 3.
>
> For 2025,
>
> $$
> t=2025-1986=39.
> $$
>
> Then
>
> $$
> A(39)=1200\left(\frac12\right)^{39/30}
> \approx487.35.
> $$
>
> Therefore,
>
> $$
> \boxed{487\text{ Bq/kg}}.
> $$
>
> ### 4.
>
> Solve
>
> $$
> 1200\left(\frac12\right)^{t/30}<100.
> $$
>
> This gives
>
> $$
> t>
> 30\frac{\ln(1/12)}{\ln(1/2)}
> \approx107.55.
> $$
>
> Therefore,
>
> $$
> \boxed{108\text{ years after 1986}},
> $$
>
> approximately the year
>
> $$
> \boxed{2094}.
> $$

> [!abstract] Review First
> - [[Math/Exponential Functions/Exponential Equations|Exponential Equations]]
> - [[Math/Exponential Functions/Exponential Decay 1|Exponential Decay 1]]
> - [[Math/Exponential Functions/Exponential Decay 2|Exponential Decay 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Exponential Functions/Exponential Growth - Finance|Exponential Growth - Finance]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
