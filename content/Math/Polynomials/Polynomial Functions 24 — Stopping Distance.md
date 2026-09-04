---
type: qod
publish: true
courses:
  - Math 30-2
  - Math 20-1
  - Math 20-2
topic: Polynomial Functions
show_solution: false
prerequisites:
  - "[[Polynomial Functions 7]]"
  - "[[Polynomial Functions 23 — Cycling Record]]"
---

## Question

The following data shows the approximate stopping distance of a vehicle at different speeds.

| Speed, $s$ (km/h) | Stopping Distance, $d$ (m) |
| ---: | ---: |
| 20 | 6.2 |
| 30 | 10.8 |
| 40 | 17.7 |
| 50 | 26.5 |
| 60 | 37.6 |

1. Determine a **quadratic regression equation** for the data. Record the coefficients to at least five decimal places.
2. **Sketch the scatter plot and quadratic regression curve.** Your sketch must include:
   - labelled axes with variables and units
   - an appropriate scale
   - all five data points
   - the regression curve
3. Use the regression model to estimate the stopping distance at **45 km/h**.
4. Is this estimate **interpolation or extrapolation**? Explain.
5. State a reasonable **domain and range** for the regression model over the observed data.

Use your graphing calculator. Use the calculator's stored regression equation for calculations rather than rounded coefficients.

## Solution

> [!example]- Show solution
>
> ### 1. Quadratic regression
>
> The quadratic regression equation is approximately
>
> $$
> d(s)=0.01064s^2-0.06643s+3.26
> $$
>
> ### 2. Sketch
>
> ![[Polynomial Functions 24 Solution Graph.png]]
>
> ### 3. Stopping distance at 45 km/h
>
> Using the calculator's unrounded regression equation,
>
> $$
> d(45)\approx21.82
> $$
>
> The estimated stopping distance is approximately **21.8 m**.
>
> ### 4. Interpolation or extrapolation
>
> This is **interpolation** because
>
> $$
> 20<45<60
> $$
>
> so the estimate is made within the range of observed speeds.
>
> ### 5. Domain and range
>
> A reasonable domain based on the observed data is
>
> $$
> 20\le s\le60
> $$
>
> Over this interval, the regression model gives approximately
>
> $$
> 6.19\le d\le37.59
> $$
>
> where $s$ is measured in km/h and $d$ is measured in metres.
  - "[[Polynomial Functions 23 — Cycling Record]]"
