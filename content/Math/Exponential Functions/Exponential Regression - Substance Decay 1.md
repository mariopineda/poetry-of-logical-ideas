---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: "Exponential Equations and Regression"
learning_order: 3405
show_solution: false
source: "Original equivalent of CHC Mathematics 30-2 Exponential Functions, Topic 4 Practice"
source_question: 5
domain: "Exponential Functions"
curriculum_alignment: "30-2 Relations and Functions SO6.4–6.6, exponential regression and interpretation"
curriculum_review_required: false
calculator: required
---

A study estimates a substance remaining in a sample:

| $x$ | 0 | 1 | 3 | 4 | 6 |
|---|---|---|---|---|---|
| $y$ | 54 | 42 | 25 | 20 | 12 |

### A.

Fit and graph an exponential regression $C(t)=ab^t$ (three decimals).

### B.

Find when the amount falls below 4 mg, nearest hour.

### C.

Calculate the half-life, nearest tenth of an hour.

**Calculator requirement:** Enter the data in `L1` and `L2`, generate a scatter plot, run exponential regression, and display the fitted function on the *same graph* before answering the numerical questions.

> [!abstract] Review First
> - [[Math/Exponential Functions/Common Ratio 4|Common Ratio 4]]
> - [[Math/Exponential Functions/Exponential Decay 2|Exponential Decay 2]]
> - [[Math/Exponential Functions/Radioactive Decay|Radioactive Decay]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Exponential Functions/Exponential Regression - Wildlife Population 1|Exponential Regression - Wildlife Population 1]]
> - [[Math/Exponential Functions/Exponential Regression - Culture Growth 1|Exponential Regression - Culture Growth 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._

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
> ![[EF_Reg_T4_Q05.png]]
> 
> **Interpreting the regression equation:** The calculator fits $y=ab^x$. For this data, using additional digits before rounding,
> 
> $$\boxed{y\approx 53.8415(0.7785752)^x}.$$
> 
> The coefficient $a\approx53.8415$ estimates the value when $x=0$; the base $b\approx0.778575$ is the estimated multiplier for an increase of one horizontal-axis unit. Here $b<1$, so the fitted values decrease by approximately $22.14\%$ per unit.
> 
> **a) Model:** $C(t)\approx53.842(0.779)^t$. Here the substance declines because $b<1$.
> 
> **b) Find when the amount falls below 4 mg.** First calculate the boundary $C(t)=4$:
> 
> $$4=a\,b^t\implies t=\frac{\ln(4/a)}{\ln b}\approx 10.39\text{ hours}.$$
> 
> Because the model is **decreasing**, the amount is below 4 mg for times **greater than** this boundary. The first whole hour below 4 mg is **hour 11**.
> 
> **c) Half-life:**
> 
> $$t_{1/2}=\frac{\ln0.5}{\ln b}\approx\boxed{2.8\text{ hours}}.$$
> 
> **Graph check:** add the horizontal line `Y2=4`; the intersection indicates the threshold time. This is a mathematical data-modelling exercise, not a medical dosing recommendation.
