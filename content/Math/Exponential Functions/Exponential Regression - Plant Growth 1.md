---
type: qod
publish: true
course:
  - Mathematics 30-2
  - Mathematics 30-1
topic: "Exponential Equations and Regression"
learning_order: 3403
show_solution: false
source: "Original equivalent of CHC Mathematics 30-2 Exponential Functions, Topic 4 Practice"
source_question: 3
domain: "Exponential Functions"
curriculum_alignment: "30-2 Relations and Functions SO6.4–6.6, exponential regression and interpretation"
curriculum_review_required: false
calculator: required
diploma_eligible: true
diploma_ready: false
diploma_screening: strong-candidate-2026-11-22
tags:
  - qod
  - diploma-preparation
qod_id: "QOD-A651F0D25780B29B8AC1F8DC"
title: "Exponential Regression - Plant Growth 1"
aliases: []
estimated_minutes: null
question_format: null
cognitive_level: []
performance_standard: []
source_kind: null
source_topic: null
source_format: null
source_equivalence: null
source_percent_correct: null
source_mean_score: null
assessment_metadata_origin: null
review_status: null
review_date: null
---

A greenhouse assistant is testing how quickly a climbing vine grows when kept under consistent light and watering conditions. The assistant measures the height of the same vine above the soil at regular intervals. The table gives the day $x$ since the start of the trial and the vine height $y$, in centimetres. Use the measurements to model its growth during this early stage, before the vine reaches the greenhouse support.

| $x$ | 7 | 14 | 21 | 28 | 35 | 42 |
|---|---|---|---|---|---|---|
| $y$ | 12.5 | 23.1 | 41.6 | 74.7 | 134.8 | 242.6 |

A. Create an exponential regression equation, rounding parameters to hundredths.

B. Estimate height on day 10.

C. Estimate height on day 30 and comment on interpolation.

D. Predict day it reaches 60 cm.

> [!abstract] Review First
> - [[Math/Exponential Functions/Common Ratio 4|Common Ratio 4]]
> - [[Math/Exponential Functions/Exponential Growth 2|Exponential Growth 2]]
> - [[Math/Exponential Functions/Exponential Functions 2|Exponential Functions 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Exponential Functions/Exponential Regression - Fish Growth 1|Exponential Regression - Fish Growth 1]]
> - [[Math/Exponential Functions/Exponential Regression - Wildlife Population 1|Exponential Regression - Wildlife Population 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Polynomials/Polynomial Functions - Linear Regression 2 - Oil Sands Emissions Intensity|Polynomial Functions - Linear Regression 2 - Oil Sands Emissions Intensity]]
> - [[Math/Data Analysis/Environmental Data Analysis - Seasonal Sea Ice Extent 1|Environmental Data Analysis - Seasonal Sea Ice Extent 1]]

## Solution

> [!example]- Show solution
>
> **Calculator procedure (TI-83/TI-84 family):**
> 
> 1. Press `STAT` → `1:Edit`; enter the horizontal values in `L1` and the corresponding observations in `L2`.
> 2. Press `2nd` → `Y=` (`STAT PLOT`), choose `Plot1`, turn it **On**, select the scatter-plot icon, and choose `Xlist:L1`, `Ylist:L2`.
> 3. Press `ZOOM` → `9:ZoomStat` to view the measured points. Check that the plot looks approximately exponential.
> 4. Press `STAT` → `CALC` → `0:ExpReg` (menu position can vary), fit `L1,L2`, and, if your model supports it, store the equation in `Y1` using `VARS` → `Y-VARS` → `Function` → `Y1`.
> 5. Press `GRAPH` to view **both** the points and the regression curve. Adjust `WINDOW` if the forecast extends beyond the observed values. Use `2nd` → `TRACE` → `1:value` or `5:intersect` for numerical readings.
> 
> **Why the overlay matters:** the scattered markers are the **actual recorded observations**; the continuous curve is the model's **predicted values**. Their closeness tells us how well the function describes the measured trend. Exponential regression does not mean the points must lie exactly on the curve. Record rounded coefficients for reporting, but retain the calculator's full precision for predictions.
> 
> **Fitted scatter plot and exponential regression curve:**
> 
> ![[EF_Reg_T4_Q03.png]]
> 
> **Interpreting the regression equation:** The calculator fits $y=ab^x$. For this data, using additional digits before rounding,
> 
> $$\boxed{y\approx 7.00406(1.0881870)^x}.$$
> 
> The coefficient $a\approx7.0041$ estimates the value when $x=0$; the base $b\approx1.088187$ is the estimated multiplier for an increase of one horizontal-axis unit. Here $b>1$, so the fitted values increase by approximately $8.82\%$ per unit.
> 
> **A. Equation:** $h(t)=a\,b^t$ with the coefficients above; report them to hundredths as directed, but use more digits for calculations.
> 
> **B. Day 10 (interpolation):**
> 
> $$h(10)=a\,b^{10}\approx\boxed{16.3\text{ cm}}.$$
> 
> **C. Day 30 (interpolation):**
> 
> $$h(30)=a\,b^{30}\approx\boxed{88.4\text{ cm}}.$$
> 
> Both days 10 and 30 lie **inside** the observed day range 7–42. They are interpolations, although no actual measurements were taken on those days.
> 
> **D. Height 60 cm:** set $60=a\,b^t$, then solve:
> 
> $$t=\frac{\ln(60/a)}{\ln b}\approx\boxed{25.4\text{ days}}.$$
> 
> On the graph, this is the $x$-coordinate where the fitted curve intersects `Y2=60`.
