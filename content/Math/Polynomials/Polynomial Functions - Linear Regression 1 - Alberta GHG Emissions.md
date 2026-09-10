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
  - "[[Polynomial Functions - Linear Regression 2 - Oil Sands Emissions Intensity]]"
  - "[[Polynomial Functions - Linear Regression 3 - Oil Sands GHG Emissions]]"
  - "[[Polynomial Functions - Analyzing a Polynomial Equation 1]]"
  - "[[Polynomial Functions 27 - Building a Graph]]"
---

## Question

The table shows Alberta's total annual greenhouse gas emissions for selected years. Let $x$ represent the number of years after 2015 and let $y$ represent total greenhouse gas emissions, in megatonnes of carbon dioxide equivalent (Mt CO$_2$e).

| Years after 2015 | GHG emissions (Mt CO2e) |
| ---: | ---: |
| 0 | 288.6 |
| 2 | 284.5 |
| 4 | 285.1 |
| 6 | 266.9 |
| 8 | 260.1 |

a. Determine the **linear regression equation** that models the data. Round all parameters to the nearest thousandth.

b. Use the regression equation to estimate the value in **2020**, to the nearest tenth of a megatonne.

c. According to the regression model, when would the value reach **270.0**? Give the year to the nearest tenth.

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
> a\approx -3.730
> $$
>
> and
>
> $$
> b\approx 291.960.
> $$
>
> Therefore, the linear regression equation is
>
> $$
> \boxed{y=-3.730x+291.960}.
> $$
>
> The scatter plot with the linear regression line superimposed is shown below.
>
> ![[Polynomial Functions - Linear Regression 1 - Alberta GHG Emissions Graph.png]]
>
> ### b. Estimate the value in 2020
>
> For 2020,
>
> $$
> x=5.
> $$
>
> Substitute into the regression equation:
>
> $$
> y=-3.730(5)+291.960
> $$
>
> $$
> y\approx 273.310.
> $$
>
> Therefore, the estimated value is **273.3**.
>
> ### c. Determine when $y=270.0$
>
> Set the regression equation equal to 270.0:
>
> $$
> 270.0=-3.730x+291.960.
> $$
>
> $$
> x\approx 5.887.
> $$
>
> Since $x$ is measured in years after 2015,
>
> $$
> 2015+5.887\approx 2020.9.
> $$
>
> Therefore, according to the linear regression model, the value would reach **270.0** in approximately **2020.9**.
>
> > [!note]
> > A regression equation is a model of the trend in the observed data. It does not imply that the relationship will continue unchanged outside the data set.

> [!info] Data source
> **Government of Alberta — Alberta’s greenhouse gas emissions reduction performance**  
> https://www.alberta.ca/albertas-greenhouse-gas-emissions-reduction-performance  
> Source table: Alberta total emissions, based on Environment and Climate Change Canada, 2026 National Inventory Report 1990–2024.
