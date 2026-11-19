---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: "Exponential Equations and Regression"
learning_order: 3406
show_solution: false
source: "Original equivalent of CHC Mathematics 30-2 Exponential Functions, Topic 4 Practice"
source_question: 6
domain: "Exponential Functions"
curriculum_alignment: "30-2 Relations and Functions SO6.4–6.6, exponential regression and interpretation"
curriculum_review_required: false
calculator: required
---

A technician at a biotechnology lab grows a microorganism culture in a nutrient-rich container. Once each hour, the technician estimates how many organisms are present. The table records the observation time $x$, in hours since monitoring began, and the measured population $y$, in organisms. The technician wants to model the original growth and then compare it with a hypothetical treatment that reduces the growth rate.

| $x$ | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| $y$ | 4200 | 6300 | 9450 | 14175 | 21263 |

A. Determine an exponential regression equation to hundredths.

B. Predict the population at observation 10.

C. A treatment changes growth to 18% per hour. Write the treated-population function taking the first observation as $t=1$.

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
> ![[EF_Reg_T4_Q06.png]]
> 
> **Interpreting the regression equation:** The calculator fits $y=ab^x$. For this data, using additional digits before rounding,
> 
> $$\boxed{y\approx 2799.97(1.5000071)^x}.$$
> 
> The coefficient $a\approx2799.9737$ estimates the value when $x=0$; the base $b\approx1.500007$ is the estimated multiplier for an increase of one horizontal-axis unit. Here $b>1$, so the fitted values increase by approximately $50.00\%$ per unit.
> 
> **A. Regression equation:** approximately $N(t)=2799.97(1.50001)^t$. The initial coefficient estimates the population at $t=0$, one hour **before** the first observation.
> 
> **B. Forecast at hour 10.**
> 
> $$N(10)=a\,b^{10}\approx\boxed{161,468\text{ organisms}}.$$
> 
> This is **extrapolation** beyond the measured hours 1–5.
> 
> **C. Change the growth rate to 18% per hour.** The treated model starts at the observed $N(1)=4200$, and each subsequent hour multiplies by $1.18$. Because the starting point is at $t=1$ rather than $t=0$, the exponent is $t-1$:
> 
> $$\boxed{N_{\mathrm{treated}}(t)=4200(1.18)^{t-1}}.$$
> 
> **Check:** At $t=1$, $4200(1.18)^0=4200$, as required. The original regression and new treatment model describe different growth conditions.
