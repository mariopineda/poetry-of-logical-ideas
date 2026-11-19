---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: "Exponential Equations and Regression"
learning_order: 3402
show_solution: false
source: "Original equivalent of CHC Mathematics 30-2 Exponential Functions, Topic 4 Practice"
source_question: 2
domain: "Exponential Functions"
curriculum_alignment: "30-2 Relations and Functions SO6.4–6.6, exponential regression and interpretation"
curriculum_review_required: false
calculator: required
---

Aquatic biologists are studying fish from the same population in a freshwater lake. They measure each fish from snout to tail and record its mass. The dataset lists the length $L$ of each fish, in millimetres, and its mass $M$, in grams. The researchers want to investigate whether an exponential model is a useful approximation **over the observed length range**. The table pairs each length with the mass of the same fish.

| $x$ | 245 | 285 | 320 | 350 | 380 | 410 | 300 | 365 |
|---|---|---|---|---|---|---|---|---|
| $y$ | 182 | 250 | 320 | 385 | 460 | 548 | 275 | 414 |

A. Make a scatter plot.

B. Fit an exponential model $M=ab^L$ and plot the curve; round parameters to thousandths.

C. Predict mass at $L=400$ mm.

D. Find length for $M=650$ g; explain how you read each estimate.

> [!abstract] Review First
> - [[Math/Exponential Functions/Common Ratio 4|Common Ratio 4]]
> - [[Math/Exponential Functions/Exponential Functions 1|Exponential Functions 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Exponential Functions/Exponential Regression - Apartment Rent 1|Exponential Regression - Apartment Rent 1]]
> - [[Math/Exponential Functions/Exponential Regression - Plant Growth 1|Exponential Regression - Plant Growth 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Polynomials/Polynomial Functions - Linear Regression 1 - Alberta GHG Emissions|Polynomial Functions - Linear Regression 1 - Alberta GHG Emissions]]
> - [[Math/Data Analysis/Environmental Data Analysis - Sea Level Trend 1|Environmental Data Analysis - Sea Level Trend 1]]

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
> ![[EF_Reg_T4_Q02.png]]
> 
> **Interpreting the regression equation:** The calculator fits $y=ab^x$. For this data, using additional digits before rounding,
> 
> $$\boxed{y\approx 37.6206(1.0066157)^x}.$$
> 
> The coefficient $a\approx37.6206$ estimates the value when $x=0$; the base $b\approx1.006616$ is the estimated multiplier for an increase of one horizontal-axis unit. Here $b>1$, so the fitted values increase by approximately $0.66\%$ per unit.
> 
> **Use the regression to answer the biological questions.**
> 
> **A–B. Model:** $M(L)=a\,b^L$ with coefficients shown above. The horizontal axis is length in **millimetres**, not time; so the factor $b$ corresponds to a one-millimetre change in length.
> 
> **C. Predict at 400 mm.** Substitute $L=400$ using the unrounded regression coefficients:
> 
> $$M(400)=a\,b^{400}\approx\boxed{526\text{ g}}.$$
> 
> You can also use `2nd` → `TRACE` → `1:value` at $x=400$ on the plotted fitted curve.
> 
> **D. Solve for a mass of 650 g.** Set the fitted function equal to 650:
> 
> $$650=a\,b^L\implies L=\frac{\ln(650/a)}{\ln b}\approx\boxed{432\text{ mm}}.$$
> 
> Graphically, plot the horizontal line `Y2=650` and use `intersect`. Since 650 g is higher than the observed maximum of 548 g, this is **extrapolation**; treat it with greater caution than the 400-mm prediction.
