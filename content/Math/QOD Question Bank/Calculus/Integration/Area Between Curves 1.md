---
type: qod
publish: true
courses:
  - "Math 31"
topic: "Definite Integrals"
show_solution: false
prerequisites:
  - "[[Definite Integrals 1]]"
---

## Question

Find the area of the region bounded by the parabola $y=x^2$ and $y=2x-x^2$.

![[Page Break]]

> [!info]- Hint 
> 1. Determine the points of intersection
> 2. Determine which curve is "upper" and "'lower" in the domain between the intersection points
> 3. Determine $h(x)$ as a difference between the "upper" and "lower" curves 
> 4. Determine $H(x)$
> 5. Determine the area $_aA_b = H(b) - H(a)$ where $b>a$.

## Solution

First we find the points of intersection of the two curves to determine the required interval. They also help us to sketch the curves and identify the region whose area we wish to calculate.
To find the points of intersection set
$$
\begin{align*}
x^2 & = 2x-x^2 \\
2x^2-2x & = 0 \\
2x(x-1) & = 0 \\
x & = 0 \text{ or } x = 1
\end{align*}
$$
The points of intersection are $(0,0)$ and $(1,1)$.
Since $y=2x-x^2$ is above $y=x^2$ for $0<x<1$. Define a new function $h(x)$ as,
$$
\begin{align*}
h(x) & = 2x-x^2-x^2 \\
& = 2x-2x^2
\end{align*}
$$
with the antiderivative
$$
H(x) = x^2 - \frac{2}{3}x^3
$$
The area of the region between the curves
$$
\begin{align*}
_0A_1 & = H(1) - H(0) \\
& = 1 - \frac{2}{3} - 0 \\
& = \frac{1}{3} \text{ units}^2
\end{align*}
$$


