---
type: qod
publish: true
course:
  - Mathematics 30-2
  - Mathematics 30-1
topic: "Exponential Equations and Regression"
learning_order: 3406
show_solution: false
source: "Original equivalent of CHC Mathematics 30-2 Exponential Functions, Topic 4 Practice"
source_question: 6
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
qod_id: "QOD-081122B7A4DC3FF9D7256A46"
title: "Exponential Regression - Culture Growth 1"
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
used_in:
  - "2026-11-27|B1"
---

A technician at a biotechnology laboratory is monitoring the growth of a microorganism culture. The population is estimated at the beginning of the experiment and every hour thereafter.

The table shows the elapsed time $t$, in hours, and the estimated population $N$, in organisms.

| Time $t$ (hours) | 0 | 1 | 2 | 3 | 4 |
|---|---:|---:|---:|---:|---:|
| Population $N$ | 4200 | 6300 | 9450 | 14175 | 21263 |

A. Determine an exponential regression equation of the form $N(t)=ab^t$. Round both coefficients to the nearest hundredth.

B. Using the unrounded regression equation, predict the population 10 hours after the beginning of the experiment. Round your answer to the nearest whole organism.

C. The technician repeats the experiment using a second culture with the same initial population as the first. However, a treatment is applied at the beginning of the experiment that reduces the growth rate to $18\%$ per hour.

Without using exponential regression, write an exponential function that models the population of the treated culture $t$ hours after the beginning of the experiment.

> [!abstract] Review First
> - [[Math/Exponential Functions/Common Ratio 4|Common Ratio 4]]
> - [[Math/Exponential Functions/Exponential Growth 2|Exponential Growth 2]]
> - [[Math/Exponential Functions/Doubling Time - Bacteria 1|Doubling Time - Bacteria 1]]
> - [[Math/Exponential Functions/Doubling Time - Bacteria 2|Doubling Time - Bacteria 2]]
> - [[Math/Exponential Functions/Exponential Growth - Information Spread 1|Exponential Growth - Information Spread 1]]
> - [[Math/Exponential Functions/Exponential Patterns in Tables 1|Exponential Patterns in Tables 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Exponential Functions/Exponential Regression - Substance Decay 1|Exponential Regression - Substance Decay 1]]
> - [[Math/Exponential Functions/Exponential Regression - Wetland Coverage 1|Exponential Regression - Wetland Coverage 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Logarithmic Functions/Logarithmic Functions 1|Logarithmic Functions 1]]
> - [[Math/Data Analysis/Environmental Data Analysis - Glaciers Lost 1|Environmental Data Analysis - Glaciers Lost 1]]

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
> ![[EF_Reg_T4_Q06_ZeroStart.svg]]
>
> **A. Exponential regression equation.** Using `ExpReg` with the times 0 through 4 gives $a\approx4199.980247$ and $b\approx1.500007055$. Rounded to the nearest hundredth:
>
> $$\boxed{N(t)\approx4199.98(1.50)^t}$$
>
> The coefficient $a$ estimates the initial population; the base $b$ is the hourly growth factor. The model estimates an hourly growth rate of approximately $50\%$.
>
> **B. Population after 10 hours.** Use the unrounded regression equation stored in `Y1`. Evaluate `Y1(10)` (or use `2nd` → `TRACE` → `1:value` with $x=10$ and a suitable window).
>
> $$N(10)=ab^{10}\approx242203.4157$$
>
> $$\boxed{242203\text{ organisms}}$$
>
> This is extrapolation beyond the measured interval of 0–4 hours.
>
> **C. Construct the treated-population model.** Read the measured initial population from the table: $N(0)=4200$. The treatment gives an hourly growth rate of $18\%$, so the growth factor is $1+0.18=1.18$. No regression is needed.
>
> $$\boxed{N_{\mathrm{treated}}(t)=4200(1.18)^t}$$
>
> **Check:** $N_{\mathrm{treated}}(0)=4200(1.18)^0=4200$, as required. The new model uses the measured initial population and the specified treatment growth rate.
