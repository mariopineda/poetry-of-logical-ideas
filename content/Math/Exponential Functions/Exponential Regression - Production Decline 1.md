---
type: qod
publish: true
course:
  - Mathematics 30-2
  - Mathematics 30-1
topic: "Exponential Equations and Regression"
learning_order: 3410
show_solution: true
source: "Original equivalent of CHC Mathematics 30-2 Exponential Functions, Topic 4 Practice"
source_question: 10
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
qod_id: "QOD-FA35418907BF89DB2CBDE1FD"
title: "Exponential Regression - Production Decline 1"
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

A small workshop operates a machine that produces a specialized component. As the machine ages without maintenance, its weekly output has been falling. The supervisor estimates that production decreases by roughly $12\%$ each operating week and records the number of usable components made over six weeks. Here $t$ is the number of weeks since the initial measurement and $Q$ is the weekly output, measured in components. A long-term prediction may not remain realistic if repairs or a shutdown occur.

| Operating week $t$ | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| Weekly output $Q$ | 4200 | 3696 | 3252 | 2861 | 2518 | 2216 |

A. Enter the measurements in the calculator and produce a scatter plot.

B. Calculate an exponential regression equation, and overlay its graph on the plotted data.

C. Compare the fitted weekly rate with the expected $12\%$ decrease.

D. Predict week-20 output to the nearest unit.

E. Estimate when weekly output first falls below six units and discuss the reliability of such a distant forecast.

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
> ![[EF_Reg_T4_Q10.png]]
> 
> **Interpreting the regression equation:** The calculator fits $y=ab^x$. For this data, using additional digits before rounding,
> 
> $$\boxed{y\approx 4199.92(0.8799449)^x}.$$
> 
> The coefficient $a\approx4199.9155$ estimates the value when $x=0$; the base $b\approx0.879945$ is the estimated multiplier for an increase of one horizontal-axis unit. Here $b<1$, so the fitted values decrease by approximately $12.01\%$ per unit.
> 
> **A–B. Graph and fit the model.** Enter the six weekly measurements in `L1` and `L2`. The image shows the scatter plot and the exponential curve fitted by `ExpReg`.
> 
> **C. Compare rates.** The regression predicts a weekly multiplier of $b\approx0.879945$, which corresponds to a decrease of $(1-b)\times100\%\approx12.01\%$. This is close to the stated $12\%$ decrease, with minor differences because the observed outputs were rounded.
> 
> **D. Forecast output at week 20.**
> 
> $$Q(20)=a\,b^{20}\approx\boxed{325\text{ units/week}}.$$
> 
> **E. Solve for output below 6.** Find the crossing of the fitted model and $y=6$:
> 
> $$6=a\,b^t\implies t=\frac{\ln(6/a)}{\ln b}\approx\boxed{51.2\text{ weeks}}.$$
> 
> **Graphical method (alternative):** Store the unrounded regression in `Y1` and enter `Y2=6`. Turn off the scatter plot if necessary, set `Xmin=0`, `Xmax=60`, `Ymin=0`, `Ymax=30` (to focus on the crossing), and use `2nd` → `TRACE` → `5:intersect`. The intersection is approximately $(51.22,6)$.
>
> Because $b<1$, output is below six **after** that crossing. For whole operating weeks, $Q(51)\approx6.17$ and $Q(52)\approx5.43$, so the first complete week with predicted output below six is **week 52**. The observed data cover only weeks 0–5, so extending the trend to approximately 51 weeks is a substantial extrapolation; production may stop or stabilize before then.

> [!abstract] Review First
> - [[Math/Exponential Functions/Common Ratio 4|Common Ratio 4]]
> - [[Math/Exponential Functions/Exponential Decay 2|Exponential Decay 2]]
> - [[Math/Exponential Functions/Exponential Functions 1|Exponential Functions 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Exponential Functions/Exponential Regression - Used Camera Prices 1|Exponential Regression - Used Camera Prices 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Polynomials/Polynomial Functions - Linear Regression 3 - Oil Sands GHG Emissions|Polynomial Functions - Linear Regression 3 - Oil Sands GHG Emissions]]
> - [[Math/Data Analysis/Environmental Data Analysis - Glaciers Lost 1|Environmental Data Analysis - Glaciers Lost 1]]
