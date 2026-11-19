---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: "Exponential Equations and Regression"
learning_order: 3407
show_solution: false
source: "Original equivalent of CHC Mathematics 30-2 Exponential Functions, Topic 4 Practice"
source_question: 7
domain: "Exponential Functions"
curriculum_alignment: "30-2 Relations and Functions SO6.4–6.6, exponential regression and interpretation"
curriculum_review_required: false
calculator: required
---

A survey records the percentage of a wetland pool covered by floating plants each week:

| Week $t$ | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| Coverage $C$ (%) | 18.0 | 19.8 | 21.8 | 24.0 | 26.4 | 29.0 |

### A.

Enter the observations into the graphing calculator and generate a labelled scatter plot.

### B.

Fit an exponential regression $C(t)=ab^t$ and graph the regression curve on top of the scatter plot.

### C.

Estimate the weekly percentage growth to the nearest percent.

### D.

Use the **unrounded** model to predict when the covered area reaches $60\%$, to the nearest tenth of a week. Explain a limitation of the model.

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
> ![[EF_Reg_T4_Q07.png]]
> 
> **Interpreting the regression equation:** The calculator fits $y=ab^x$. For this data, using additional digits before rounding,
> 
> $$\boxed{y\approx 18.0042(1.1002500)^x}.$$
> 
> The coefficient $a\approx18.0042$ estimates the value when $x=0$; the base $b\approx1.100250$ is the estimated multiplier for an increase of one horizontal-axis unit. Here $b>1$, so the fitted values increase by approximately $10.03\%$ per unit.
> 
> **a–b)** The image overlays the six measured percentages with the best-fit exponential curve. The fitted model is $C(t)=a\,b^t$.
> 
> **c) Weekly growth:**
> 
> $$r=(b-1)\times100\%\approx10.03\%\approx\boxed{10\%\text{ per week}}.$$
> 
> **d) Find 60% coverage:**
> 
> $$60=a\,b^t\implies t=\frac{\ln(60/a)}{\ln b}\approx\boxed{12.6\text{ weeks}}.$$
> 
> **Limitation:** The model cannot remain valid indefinitely: coverage cannot exceed $100\%$. The 60% prediction is outside the observed 18–29% range, so it is an **extrapolation** and should be interpreted cautiously.
