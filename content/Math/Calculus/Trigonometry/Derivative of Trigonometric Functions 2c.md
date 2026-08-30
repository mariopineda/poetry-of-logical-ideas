---
type: qod
publish: true
courses:
  - "Math 31"
topic: "Trigonometric Derivatives"
show_solution: false
prerequisites:
  - "[[Chain Rule 1]]"
  - "[[Angular Measure 1]]"
related:
  - "[[Derivative of Trigonometric Functions 2b]]"
  - "[[Derivative of Trigonometric Functions 2d]]"
---

## Question

For $f(x)=\sin(7x)$ find $f^{(101)}(x)$.

## Solution

To find the 101st derivative of $\sin(7x)$, we can use the chain rule repeatedly.

The first few derivatives of $\sin(7x)$ with respect to $x$ are:

1st derivative: $y\prime = 7\cos(7x)$
2nd derivative: $y\prime\prime = -7^2\sin(7x)$
3rd derivative: $y\prime\prime\prime = -7^3\cos(7x)$
4rd derivative: $y^{(4)} = 7^4\cos(7x)$
5rd derivative: $y^{(5)} = -7^5\cos(7x)$

From this pattern, we can see that the 101st derivative will have a sinusoidal term, and since we differentiate sinusoidal functions, we alternate between sine and cosine, and each time we differentiate, the coefficient gets multiplied by $-7^2 = -49$. Since 101 is odd, the 101st derivative will have a sine term.

Therefore, the 101st derivative of $\sin(7x)$ with respect to $x$ will be:

$$
\frac{d^{101}}{dx^{101}}[\sin(7x)] = (-7)^{101}\sin(7x) = -7^{101}\sin(7x)
 $$
