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
  - "[[Polynomial Functions - Linear Regression 2 - Oil Sands Emissions Intensity]]"
  - "[[Polynomial Functions - Analyzing a Polynomial Equation 1]]"
  - "[[Polynomial Functions 27 - Building a Graph]]"
---

## Question

The table shows total greenhouse gas emissions from Canada's oil sands sector for selected years. The totals combine oil sands upgrading, in situ production, and mining/extraction. Let $x$ represent the number of years after 2010 and let $y$ represent total emissions, in megatonnes of carbon dioxide equivalent (Mt CO$_2$e).

| Years after 2010 | Oil sands emissions (Mt CO2e) |
| ---: | ---: |
| 0 | 54.1 |
| 2 | 62.1 |
| 4 | 69.7 |
| 6 | 69.6 |
| 8 | 81.3 |

a. Determine the **linear regression equation** that models the data. Round all parameters to the nearest thousandth.

b. Use the regression equation to estimate the value in **2015**, to the nearest tenth of a megatonne.

c. According to the regression model, when would the value reach **75.0**? Give the year to the nearest tenth.

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
> a\approx 3.095
> $$
>
> and
>
> $$
> b\approx 54.980.
> $$
>
> Therefore, the linear regression equation is
>
> $$
> \boxed{y=3.095x+54.980}.
> $$
>
> The scatter plot with the linear regression line superimposed is shown below.
>
> ![[Polynomial Functions - Linear Regression 3 - Oil Sands GHG Emissions Graph.png]]
>
> ### b. Estimate the value in 2015
>
> For 2015,
>
> $$
> x=5.
> $$
>
> Substitute into the regression equation:
>
> $$
> y=3.095(5)+54.980
> $$
>
> $$
> y\approx 70.455.
> $$
>
> Therefore, the estimated value is **70.5**.
>
> ### c. Determine when $y=75.0$
>
> Set the regression equation equal to 75.0:
>
> $$
> 75.0=3.095x+54.980.
> $$
>
> $$
> x\approx 6.468.
> $$
>
> Since $x$ is measured in years after 2010,
>
> $$
> 2010+6.468\approx 2016.5.
> $$
>
> Therefore, according to the linear regression model, the value would reach **75.0** in approximately **2016.5**.
>
> > [!note]
> > A regression equation is a model of the trend in the observed data. It does not imply that the relationship will continue unchanged outside the data set.

> [!info] Data source
> **Environment and Climate Change Canada — Canada’s 2030 Emissions Reduction Plan, Chapter 2**  
> https://www.canada.ca/en/services/environment/weather/climatechange/climate-plan/climate-plan-overview/emissions-reduction-2030/plan/chapter-2.html  
> The table values are sums of the published oil sands upgrading, in situ, and mining/extraction emissions for each selected year.
