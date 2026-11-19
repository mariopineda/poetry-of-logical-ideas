---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: "Exponential Equations and Regression"
learning_order: 3401
show_solution: false
source: "Original equivalent of CHC Mathematics 30-2 Exponential Functions, Topic 4 Practice"
source_question: 1
domain: "Exponential Functions"
curriculum_alignment: "30-2 Relations and Functions SO6.4–6.6, exponential regression and interpretation"
curriculum_review_required: false
calculator: required
---

# Exponential Regression - Apartment Rent 1

A tenant tracks yearly rent after moving into an apartment:

| $x$ | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| $y$ | 10800 | 11232 | 11682 | 12149 |

a) Find the exponential regression model $y=ab^x$, rounding parameters to hundredths. b) Determine annual rent growth to nearest percent. c) Forecast year 10 rent, nearest dollar.

**Calculator requirement:** Enter the data in `L1` and `L2`, generate a scatter plot, run exponential regression, and display the fitted function on the *same graph* before answering the numerical questions.

> [!abstract] Review First
> - [[Math/Exponential Functions/Common Ratio 4|Common Ratio 4]]
> - [[Math/Exponential Functions/Exponential Functions 2|Exponential Functions 2]]
> - [[Math/Exponential Functions/Exponential Growth - Finance|Exponential Growth - Finance]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Exponential Functions/Exponential Regression - Fish Growth 1|Exponential Regression - Fish Growth 1]]

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
> ![[EF_Reg_T4_Q01.png]]
> 
> **Interpreting the regression equation:** The calculator fits $y=ab^x$. For this data, using additional digits before rounding,
> 
> $$\boxed{y\approx 10800(1.0400184)^x}.$$
> 
> The coefficient $a\approx10799.9832$ estimates the value when $x=0$; the base $b\approx1.040018$ is the estimated multiplier for an increase of one horizontal-axis unit. Here $b>1$, so the fitted values increase by approximately $4.00\%$ per unit.
> 
> **Answer the questions using the fitted model.**
> 
> - **a)** The exponential regression is approximately $R(t)=10799.98(1.04002)^t$. When entering this in the calculator, use stored coefficients rather than the displayed rounded values.
> - **b)** The annual increase is $(1.040018-1)\times100\%\approx4.00\%$, or **4%** to the nearest percent.
> - **c)** Evaluate $R(10)=a\,b^{10}\approx\boxed{\$15,989}$.
> 
> **Interpretation:** The observations and fitted curve almost overlap, suggesting a strong exponential trend across the four years shown. Year 10 is **extrapolation**, outside the measured years 0–3; the predicted rent assumes the growth pattern continues.
