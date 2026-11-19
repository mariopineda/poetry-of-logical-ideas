---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: "Exponential Equations and Regression"
learning_order: 3404
show_solution: false
source: "Original equivalent of CHC Mathematics 30-2 Exponential Functions, Topic 4 Practice"
source_question: 4
domain: "Exponential Functions"
curriculum_alignment: "30-2 Relations and Functions SO6.4–6.6, exponential regression and interpretation"
curriculum_review_required: false
calculator: required
---

Wildlife managers monitoring an isolated island have counted a declining population of small mammals over six annual surveys. The survey method is kept consistent so the counts can be compared from year to year. The table shows the number of years $x$ after the first survey and the estimated number of animals $y$ on the island. The managers want to describe the rate of decline and estimate how quickly the population might halve if the trend continues.

| $x$ | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| $y$ | 720 | 576 | 461 | 369 | 295 | 236 |

A. Estimate yearly percentage decrease without regression.

B. Determine exponential regression function with parameters to hundredths.

C. Determine the population half-life in years, to one decimal.

> [!abstract] Review First
> - [[Math/Exponential Functions/Common Ratio 4|Common Ratio 4]]
> - [[Math/Exponential Functions/Exponential Decay 2|Exponential Decay 2]]
> - [[Math/Exponential Functions/Exponential Functions 2|Exponential Functions 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Exponential Functions/Exponential Regression - Plant Growth 1|Exponential Regression - Plant Growth 1]]
> - [[Math/Exponential Functions/Exponential Regression - Substance Decay 1|Exponential Regression - Substance Decay 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Data Analysis/Environmental Data Analysis - Glaciers Lost 1|Environmental Data Analysis - Glaciers Lost 1]]
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
> ![[EF_Reg_T4_Q04.png]]
> 
> **Interpreting the regression equation:** The calculator fits $y=ab^x$. For this data, using additional digits before rounding,
> 
> $$\boxed{y\approx 720.09(0.8000670)^x}.$$
> 
> The coefficient $a\approx720.0902$ estimates the value when $x=0$; the base $b\approx0.800067$ is the estimated multiplier for an increase of one horizontal-axis unit. Here $b<1$, so the fitted values decrease by approximately $19.99\%$ per unit.
> 
> **A. Estimate the loss directly from the table.** For example, $576/720=0.80$. This means about $80\%$ remains after one year, a decrease of $20\%$; later ratios are close to $0.80$ because population counts were rounded.
> 
> **B. Fitted equation:** $P(t)\approx720.09(0.80007)^t$ (full calculator precision for predictions).
> 
> **C. Find the half-life.** Half-life is the time required for the model to fall to half its starting amount. Divide $P(t)=a/2$ by $a$:
> 
> $$0.5=b^t\implies t=\frac{\ln0.5}{\ln b}\approx\boxed{3.1\text{ years}}.$$
> 
> **Interpretation:** This model describes the observed decline, not its cause. A real population may change because of migration, environmental conditions, and many other factors.
