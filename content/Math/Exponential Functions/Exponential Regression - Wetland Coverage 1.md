---
type: qod
publish: true
course:
  - Mathematics 30-2
  - Mathematics 30-1
topic: "Exponential Equations and Regression"
learning_order: 3407
show_solution: false
source: "Original equivalent of CHC Mathematics 30-2 Exponential Functions, Topic 4 Practice"
source_question: 7
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
qod_id: "QOD-F04C95E95FA6FEC5A9125F92"
title: "Exponential Regression - Wetland Coverage 1"
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

During a summer field project, students monitor a small wetland pond where floating plants are spreading across the water surface. They estimate the percentage of the pond covered by plants at the same time each week. The table shows the number of weeks $t$ since the first observation and the percentage $C$ of the water surface covered. A model fitted to these early observations may be useful for short-term prediction, but coverage cannot exceed 100\%.

| Week $t$ | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| Coverage $C$ (%) | 18.0 | 19.8 | 21.8 | 24.0 | 26.4 | 29.0 |

A. Enter the observations into the graphing calculator and generate a labelled scatter plot.

B. Fit an exponential regression $C(t)=ab^t$ and graph the regression curve on top of the scatter plot.

C. Estimate the weekly percentage growth to the nearest percent.

D. Use the **unrounded** model to predict when the covered area reaches $60\%$, to the nearest tenth of a week. Explain a limitation of the model.

> [!abstract] Review First
> - [[Math/Exponential Functions/Common Ratio 4|Common Ratio 4]]
> - [[Math/Exponential Functions/Exponential Growth 2|Exponential Growth 2]]
> - [[Math/Exponential Functions/Exponential Functions 2|Exponential Functions 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Exponential Functions/Exponential Regression - Culture Growth 1|Exponential Regression - Culture Growth 1]]
> - [[Math/Exponential Functions/Exponential Models from Graphs 1|Exponential Models from Graphs 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Data Analysis/Environmental Data Analysis - Seasonal Sea Ice Extent 1|Environmental Data Analysis - Seasonal Sea Ice Extent 1]]
> - [[Math/Polynomials/Polynomial Functions - Linear Regression 1 - Alberta GHG Emissions|Polynomial Functions - Linear Regression 1 - Alberta GHG Emissions]]

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
> ![[EF_Reg_T4_Q07.png]]
> 
> **Interpreting the regression equation:** The calculator fits $y=ab^x$. For this data, using additional digits before rounding,
> 
> $$\boxed{y\approx 18.0042(1.1002500)^x}.$$
> 
> The coefficient $a\approx18.0042$ estimates the value when $x=0$; the base $b\approx1.100250$ is the estimated multiplier for an increase of one horizontal-axis unit. Here $b>1$, so the fitted values increase by approximately $10.03\%$ per unit.
> 
> **A–B.** The image overlays the six measured percentages with the best-fit exponential curve. The fitted model is $C(t)=a\,b^t$.
> 
> **C. Weekly growth:**
> 
> $$r=(b-1)\times100\%\approx10.03\%\approx\boxed{10\%\text{ per week}}.$$
> 
> **D. Find 60% coverage:**
>
> **Method 1 - Graphical solution (Mathematics 30-2):**
>
> 1. Store the unrounded exponential regression model from Part B in `Y1`. The calculator uses $x$ for time $t$.
> 2. In `Y=`, enter `Y2=60`.
> 3. Set `WINDOW`: `Xmin=0`, `Xmax=18`, `Xscl=3`, `Ymin=0`, `Ymax=110`, `Yscl=20`.
> 4. Press `GRAPH`. Then press `2nd` > `TRACE` > `5:intersect`. Select the regression curve and the horizontal line, then move the cursor near their intersection and press `ENTER` to confirm the guess.
>
> ![[EF_Reg_T4_Q07_Intersection.svg]]
>
> The intersection is approximately $(12.5997,60)$. The horizontal coordinate represents time; the vertical coordinate represents the target coverage.
>
> $$\boxed{t\approx12.6\text{ weeks}}$$
>
> The model predicts that the wetland reaches $60\%$ coverage approximately $12.6$ weeks after the first observation.
>
> **Method 2 - Algebraic solution using logarithms (alternative):**
>
> Use the unrounded coefficients from Part B.
>
> $$\begin{aligned}60&=ab^t\\ \frac{60}{a}&=b^t\\ \log(60/a)&=t\log b\\ t&=\frac{\log(60/a)}{\log b}\\ t&\approx12.5997\end{aligned}$$
>
> $$\boxed{t\approx12.6\text{ weeks}}$$
>
> **Limitation:** The model cannot remain valid indefinitely: coverage cannot exceed $100\%$. The 60% prediction is outside the observed 18–29% range, so it is an **extrapolation** and should be interpreted cautiously.
