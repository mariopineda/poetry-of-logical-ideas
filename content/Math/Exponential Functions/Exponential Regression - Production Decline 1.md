---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: "Exponential Equations and Regression"
learning_order: 3410
show_solution: false
source: "Original equivalent of CHC Mathematics 30-2 Exponential Functions, Topic 4 Practice"
source_question: 10
domain: "Exponential Functions"
curriculum_alignment: "30-2 Relations and Functions SO6.4–6.6, exponential regression and interpretation"
curriculum_review_required: false
calculator: required
---

A small workshop operates a machine that produces a specialized component. As the machine ages without maintenance, its weekly output has been falling. The supervisor estimates that production decreases by roughly $12\%$ each operating week and records the number of usable components made over six weeks. Here $t$ is the number of weeks since the initial measurement and $Q$ is the weekly output, measured in components. A long-term prediction may not remain realistic if repairs or a shutdown occur.

| Operating week $t$ | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| Weekly output $Q$ | 4200 | 3696 | 3252 | 2861 | 2518 | 2216 |

### A.

Enter the measurements in the calculator and produce a scatter plot.

### B.

Calculate an exponential regression equation, and overlay its graph on the plotted data.

### C.

Compare the fitted weekly rate with the expected $12\%$ decrease.

### D.

Predict week-20 output to the nearest unit.

### E.

Estimate when weekly output first falls below six units and discuss the reliability of such a distant forecast.

> [!abstract] Review First
> - [[Math/Exponential Functions/Common Ratio 4|Common Ratio 4]]
> - [[Math/Exponential Functions/Exponential Decay 2|Exponential Decay 2]]
> - [[Math/Exponential Functions/Exponential Functions 1|Exponential Functions 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Exponential Functions/Exponential Regression - Used Camera Prices 1|Exponential Regression - Used Camera Prices 1]]

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
> ![[EF_Reg_T4_Q10.png]]
> 
> **Interpreting the regression equation:** The calculator fits $y=ab^x$. For this data, using additional digits before rounding,
> 
> $$\boxed{y\approx 4199.92(0.8799449)^x}.$$
> 
> The coefficient $a\approx4199.9155$ estimates the value when $x=0$; the base $b\approx0.879945$ is the estimated multiplier for an increase of one horizontal-axis unit. Here $b<1$, so the fitted values decrease by approximately $12.01\%$ per unit.
> 
> **a–b) Graph and fit the model.** Enter the six weekly measurements in `L1` and `L2`. The image shows the scatter plot and the exponential curve fitted by `ExpReg`.
> 
> **c) Compare rates.** The regression predicts a weekly multiplier of $b\approx0.879945$, which corresponds to a decrease of $(1-b)\times100\%\approx12.01\%$. This is close to the stated $12\%$ decrease, with minor differences because the observed outputs were rounded.
> 
> **d) Forecast output at week 20.**
> 
> $$Q(20)=a\,b^{20}\approx\boxed{325\text{ units/week}}.$$
> 
> **e) Solve for output below 6.** Find the crossing of the fitted model and $y=6$:
> 
> $$6=a\,b^t\implies t=\frac{\ln(6/a)}{\ln b}\approx\boxed{51.2\text{ weeks}}.$$
> 
> Because $b<1$, output is below six **after** that crossing. The observed data cover only weeks 0–5, so extending the trend to approximately 51 weeks is a substantial extrapolation; production may stop or stabilize before then.
