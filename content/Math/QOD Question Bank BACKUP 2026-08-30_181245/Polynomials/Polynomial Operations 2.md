---
type: qod
publish: true
courses:
  - "Math 10C"
topic: "Polynomial Operations"
show_solution: true
prerequisites:
  - "[[Algebraic Expressions 1]]"
related:
  - "[[Polynomial Operations 1]]"
  - "[[Polynomial Review 1]]"
---

## Question

![[Images/Legacy/multiplyingpolynomials.png]]

1. Determine a simplified expression for the area of the shaded region.
2. Determine a simplified expression for the perimeter of the shaded region.

## Solution

### A.

Calculate the area of the entire rectangle $(2x+1)(3x-2)$ and subtract the areas of the four corner squares, each one of which has an area of $x^2$.
$$
\begin{align}
&= (2x+1)(3x-2)-x^2-x^2-x^2-x^2 \\
&= (2x+1)(3x-2)-4x^2\\
&= 6x^2-4x+3x-2-4x^2 \\
&= \boxed{2x^2+x-2}
\end{align}
$$

### B.

Note that to calculate the perimeter we do not have to "remove" the corner squares.
$$
\begin{align}
&= (2x+1)+(3x-2)+(2x+1)+(3x-2) \\
&= 2x+1+3x-2+2x+1+3x-2 \\
&= \boxed{10x-2}
\end{align}
$$

