---
type: qod
publish: true
courses:
  - Math 30-2
  - Math 10C
topic: Polynomial Functions
show_solution: false
prerequisites:
  - "[[Polynomial Functions 7]]"
  - "[[Function Notation 1]]"
related:
  - "[[Polynomial Functions 24]]"
  - "[[Polynomial Functions 25]]"
---

## Question

The following table shows the distance achieved in a cycling event over several years.

| Years after 2020, $t$ | Distance (km) |
| ---: | ---: |
| 0 | 80.4 |
| 1 | 81.2 |
| 2 | 82.6 |
| 3 | 83.1 |
| 4 | 84.7 |

1. Create a scatter plot and determine an appropriate **regression equation** for the data.
2. **Sketch the scatter plot and regression model.** Your sketch must include:
   - labelled axes with variables and units
   - an appropriate scale
   - the data points
   - the regression model
3. Use the model to predict the distance **two years after the final data point**.
4. Is this prediction **interpolation or extrapolation**? Explain.
5. State a reasonable **domain and range** for the model if it is used from 2020 through the predicted year.

Use your graphing calculator.

## Solution

> [!example]- Show solution
>
> ### 1. Regression equation
>
> A **linear regression** is appropriate because the data follows an approximately linear increasing trend.
>
> The regression equation is
>
> $$
> D(t)=1.05t+80.30
> $$
>
> where $D$ is distance in kilometres.
>
> ### 2. Sketch
>
> ![[Polynomial Functions 23 Solution Graph.png]]
>
> ### 3. Prediction
>
> Two years after the final data point corresponds to
>
> $$
> t=6
> $$
>
> Therefore,
>
> $$
> D(6)=1.05(6)+80.30
> $$
>
> $$
> D(6)=86.60
> $$
>
> The predicted distance is approximately **86.6 km**.
>
> ### 4. Interpolation or extrapolation
>
> This is **extrapolation** because $t=6$ lies outside the observed data interval
>
> $$
> 0\le t\le4
> $$
>
> ### 5. Domain and range
>
> If the model is being used from 2020 through 2026, a reasonable domain is
>
> $$
> 0\le t\le6
> $$
>
> The corresponding regression values range approximately from
>
> $$
> 80.3\le D\le86.6
> $$
>
> where $D$ is measured in kilometres.