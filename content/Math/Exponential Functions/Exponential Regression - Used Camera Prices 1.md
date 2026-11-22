---
type: qod
publish: true
course:
  - Mathematics 30-2
  - Mathematics 30-1
topic: "Exponential Equations and Regression"
learning_order: 3409
show_solution: false
source: "Original equivalent of CHC Mathematics 30-2 Exponential Functions, Topic 4 Practice"
source_question: 9
domain: "Exponential Functions"
curriculum_alignment: "30-2 Relations and Functions SO6.4–6.6, exponential regression and interpretation"
curriculum_review_required: false
calculator: required
---

A photography student is researching the resale market before buying a used camera body. The student gathers asking prices for similar models in comparable condition, grouping them by age. In the table, $x$ is the age of the camera in years and $y$ is its typical listed price, in Canadian dollars. The goal is to model the overall depreciation trend, not to predict the exact price of an individual camera.

| $x$ | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|
| $y$ | 2700 | 2320 | 2000 | 1720 | 1480 |

A. Find exponential regression $P(t)=ab^t$, coefficients to hundredths.

B. Estimate initial selling price to nearest dollar.

C. Determine percentage loss per year, to nearest whole percent.

> [!abstract] Review First
> - [[Math/Exponential Functions/Common Ratio 4|Common Ratio 4]]
> - [[Math/Exponential Functions/Exponential Decay 1|Exponential Decay 1]]
> - [[Math/Exponential Functions/Exponential Functions 2|Exponential Functions 2]]
> - [[Math/Exponential Functions/Appreciation and Depreciation 1|Appreciation and Depreciation 1]]
> - [[Math/Exponential Functions/Depreciation - Camera Value 1|Depreciation - Camera Value 1]]
> - [[Math/Exponential Functions/Depreciation and Loan Repayment 1|Depreciation and Loan Repayment 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Exponential Functions/Exponential Models from Graphs 1|Exponential Models from Graphs 1]]
> - [[Math/Exponential Functions/Exponential Regression - Production Decline 1|Exponential Regression - Production Decline 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Logarithmic Functions/Logarithmic Functions 1|Logarithmic Functions 1]]
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
> ![[EF_Reg_T4_Q09.png]]
> 
> **Interpreting the regression equation:** The calculator fits $y=ab^x$. For this data, using additional digits before rounding,
> 
> $$\boxed{y\approx 3644.18(0.8605649)^x}.$$
> 
> The coefficient $a\approx3644.1801$ estimates the value when $x=0$; the base $b\approx0.860565$ is the estimated multiplier for an increase of one horizontal-axis unit. Here $b<1$, so the fitted values decrease by approximately $13.94\%$ per unit.
> 
> **A. Regression model:** $P(t)=a\,b^t$, where $t$ is camera age in years, with fitted values shown above.
> 
> **B. Estimate the price when new.** The fitted $y$-intercept is the prediction for $t=0$:
> 
> $$P(0)=a\,b^0=a\approx\boxed{\$3,644}.$$
> 
> **C. Estimate annual depreciation.** The remaining fraction each year is $b$, so the annual percentage lost is
> 
> $$d=(1-b)\times100\%\approx13.94\%\approx\boxed{14\%}.$$
> 
> **Interpretation:** The observations cover ages 2–6 years. Estimating the price at age 0 is **backward extrapolation**, not a recorded retail price. Condition, model changes, and market fluctuations could affect actual prices.
