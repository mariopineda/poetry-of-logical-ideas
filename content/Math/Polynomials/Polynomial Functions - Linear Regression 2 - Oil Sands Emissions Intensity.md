---
type: qod
publish: true
courses:
  - "Math 30-2"
topic: "Polynomial Functions"
show_solution: false
prerequisites:
  - "[[Function Notation 1]]"
related:
  - "[[Polynomial Functions - Linear Regression 1 - Alberta GHG Emissions]]"
  - "[[Polynomial Functions - Linear Regression 3 - Oil Sands GHG Emissions]]"
  - "[[Polynomial Functions - Analyzing a Polynomial Equation 1]]"
  - "[[Polynomial Functions 27 - Building a Graph]]"
---

## Question

The table shows the total greenhouse gas emissions intensity of Alberta oil sands bitumen production for selected years. Let $x$ represent the number of years after 2012 and let $y$ represent emissions intensity, in tonnes of CO$_2$e per cubic metre of bitumen.

| Years after 2012 | Emissions intensity (t CO2e/m³) |
| ---: | ---: |
| 0 | 0.542 |
| 3 | 0.452 |
| 6 | 0.421 |
| 9 | 0.411 |
| 12 | 0.391 |

a. Determine the **linear regression equation** that models the data. Round all parameters to the nearest thousandth.

b. Use the regression equation to estimate the value in **2020**, to the nearest thousandth.

c. According to the regression model, when would the value reach **0.400**? Give the year to the nearest tenth.

Use a graphing calculator.

## Solution

> [!example]- Show solution
>
> ### a. Linear regression equation
>
> Enter the $x$-values into $L_1$ and the $y$-values into $L_2$, then perform a linear regression.
>
> The calculator gives
>
> $$
> y=ax+b
> $$
>
> where
>
> $$
> a\approx -0.011
> $$
>
> and
>
> $$
> b\approx 0.512.
> $$
>
> Therefore, the linear regression equation is
>
> $$
> \boxed{y=-0.011x+0.512}.
> $$
>
> The scatter plot with the linear regression line superimposed is shown below.
>
> ![[Polynomial Functions - Linear Regression 2 - Oil Sands Emissions Intensity Graph.png]]
>
> ### b. Estimate the value in 2020
>
> For 2020,
>
> $$
> x=8.
> $$
>
> Substitute into the regression equation:
>
> $$
> y=-0.011(8)+0.512
> $$
>
> $$
> y\approx 0.421.
> $$
>
> Therefore, the estimated value is **0.421**.
>
> ### c. Determine when $y=0.400$
>
> Set the regression equation equal to 0.400:
>
> $$
> 0.400=-0.011x+0.512.
> $$
>
> $$
> x\approx 9.796.
> $$
>
> Since $x$ is measured in years after 2012,
>
> $$
> 2012+9.796\approx 2021.8.
> $$
>
> Therefore, according to the linear regression model, the value would reach **0.400** in approximately **2021.8**.
>
> > [!note]
> > A regression equation is a model of the trend in the observed data. It does not imply that the relationship will continue unchanged outside the data set.

> [!info] Data source
> **Government of Alberta — Alberta’s greenhouse gas emissions reduction performance**  
> https://www.alberta.ca/albertas-greenhouse-gas-emissions-reduction-performance  
> Source table: Alberta oil sands emissions intensity, from the Alberta Oil Sands Greenhouse Gas Emission Intensity Analysis.
