---
type: qod
publish: true
courses:
  - Math 30-2
  - Math 30-1
topic: Polynomial Functions
show_solution: false
prerequisites:
  - "[[Polynomial Functions 7]]"
related:
  - "[[Polynomial Functions 23]]"
  - "[[Polynomial Functions 24]]"
  - "[[Polynomial Functions 21]]"
---

## Question

The volume of an inflating balloon is measured at one-second intervals.

| Time, $t$ (s) | Volume, $V$ ($\text{cm}^3$) |
| ---: | ---: |
| 0 | 25 |
| 1 | 45 |
| 2 | 137 |
| 3 | 373 |
| 4 | 825 |

1. Determine an appropriate **cubic regression equation** for the data.
2. **Sketch the scatter plot and cubic regression curve.** Your sketch must include:
   - labelled axes with variables and units
   - an appropriate scale
   - all five data points
   - the regression curve
3. Use the model to estimate the balloon's volume at **$t=2.5$ s**.
4. Is this estimate **interpolation or extrapolation**? Explain.
5. State a reasonable **domain and range** for the model over the observed experiment.

Use your graphing calculator.

## Solution

> [!example]- Show solution
>
> ### 1. Cubic regression
>
> The cubic regression equation is
>
> $$
> V(t)=12t^3+8t+25
> $$
>
> ### 2. Sketch
>
> ![[Polynomial Functions 25 Solution Graph.png]]
>
> ### 3. Volume at $t=2.5$ s
>
> $$
> V(2.5)=12(2.5)^3+8(2.5)+25
> $$
>
> $$
> V(2.5)=232.5
> $$
>
> The estimated volume is
>
> $$
> \boxed{232.5\text{ cm}^3}
> $$
>
> ### 4. Interpolation or extrapolation
>
> This is **interpolation** because $2.5$ s lies between measured times in the data set.
>
> ### 5. Domain and range
>
> For the observed experiment, a reasonable domain is
>
> $$
> 0\le t\le4
> $$
>
> The corresponding volume range is
>
> $$
> 25\le V\le825
> $$
>
> where $t$ is measured in seconds and $V$ is measured in $\text{cm}^3$.