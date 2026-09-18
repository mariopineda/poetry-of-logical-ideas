---
type: qod
publish: true
courses:
  - "Math 30-2"
topic: "Polynomial Functions"
show_solution: false
prerequisites:
  - "[[Polynomial Functions - Analyzing a Cubic Function 1]]"
  - "[[Domain and Range - Cube Volume Model]]"
related:
  - "[[Polynomial Functions - Reviewing a Cubic Volume Model 2]]"
  - "[[Polynomial Functions - Reviewing a Cubic Volume Model 3]]"
  - "[[Polynomial Functions 27 - Building a Graph]]"
---

## Question

A company makes a rectangular box with interior dimensions $8$ cm by $5$ cm by $3$ cm. Each dimension will be increased by $x$ centimetres, where $0\le x\le4$.

1. Write a polynomial function, $V(x)$, for the new volume in both **factored form** and **standard form**.
2. From the standard form, state:
   - the degree and name of the function;
   - the sign of the leading coefficient;
   - the constant term and what it represents in this context; and
   - the end behaviour of the unrestricted polynomial.
3. The company wants the new box to have a volume of $350\text{ cm}^3$. Graph $V(x)$ and $y=350$ on a graphing calculator, and determine how much each dimension should be increased.
4. State the **contextual domain and range** in both set-builder notation and interval notation.

## Solution

> [!example]- Show solution
>
> ### 1. Polynomial model
>
> Each original dimension is increased by $x$:
>
> $$
> V(x)=(x+8)(x+5)(x+3).
> $$
>
> Expand the first two factors:
>
> $$
> (x+8)(x+5)=x^2+13x+40.
> $$
>
> Then multiply by $x+3$:
>
> $$
> \begin{aligned}
> V(x)&=(x^2+13x+40)(x+3)\\
> &=x^3+16x^2+79x+120.
> \end{aligned}
> $$
>
> **Factored form:** $V(x)=(x+8)(x+5)(x+3)$
>
> **Standard form:** $V(x)=x^3+16x^2+79x+120$
>
> ### 2. Characteristics
>
> - Degree: $3$
> - Name: cubic function
> - Leading coefficient: $1$, which is positive
> - Constant term: $120$
>
> The constant term is $V(0)$, so it represents the original volume of the box:
>
> $$
> 8(5)(3)=120\text{ cm}^3.
> $$
>
> Because the degree is odd and the leading coefficient is positive, the unrestricted graph extends from **quadrant III to quadrant I**:
>
> $$
> x\to-\infty,\ V(x)\to-\infty
> \qquad\text{and}\qquad
> x\to\infty,\ V(x)\to\infty.
> $$
>
> ### 3. Required increase
>
> Enter
>
> $$
> Y_1=x^3+16x^2+79x+120
> $$
>
> and
>
> $$
> Y_2=350.
> $$
>
> Use the calculator's **intersection** command. The contextual intersection is $(2,350)$.
>
> ![[Polynomial Functions - Reviewing a Cubic Volume Model 1 Graph.png]]
>
> Therefore, each dimension should be increased by **$2$ cm**. Checking:
>
> $$
> (8+2)(5+2)(3+2)=10(7)(5)=350\text{ cm}^3.
> $$
>
> ### 4. Contextual domain and range
>
> The question restricts the increase to $0\le x\le4$. The volume increases throughout this interval.
>
> $$
> V(0)=120
> $$
>
> and
>
> $$
> V(4)=12(9)(7)=756.
> $$
>
> **Domain**
>
> - Set-builder notation: $\{x\in\mathbb{R}\mid0\le x\le4\}$
> - Interval notation: $[0,4]$
>
> **Range**
>
> - Set-builder notation: $\{V\in\mathbb{R}\mid120\le V\le756\}$
> - Interval notation: $[120,756]$

