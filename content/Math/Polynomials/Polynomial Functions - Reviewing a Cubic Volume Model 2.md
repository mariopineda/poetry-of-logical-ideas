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
  - "[[Polynomial Functions - Reviewing a Cubic Volume Model 1]]"
  - "[[Polynomial Functions - Reviewing a Cubic Volume Model 3]]"
  - "[[Polynomial Functions 27 - Building a Graph]]"
---

## Question

A company makes a rectangular package with interior dimensions $10$ cm by $6$ cm by $4$ cm. Each dimension will be increased by $x$ centimetres, where $0\le x\le3$.

1. Write a polynomial function, $V(x)$, for the new volume in both **factored form** and **standard form**.
2. From the standard form, state:
   - the degree and name of the function;
   - the sign of the leading coefficient;
   - the constant term and what it represents in this context; and
   - the end behaviour of the unrestricted polynomial.
3. The company wants the new package to have a volume of $576\text{ cm}^3$. Graph $V(x)$ and $y=576$ on a graphing calculator, and determine how much each dimension should be increased.
4. State the **contextual domain and range** in both set-builder notation and interval notation.

## Solution

> [!example]- Show solution
>
> ### 1. Polynomial model
>
> Each original dimension is increased by $x$:
>
> $$
> V(x)=(x+10)(x+6)(x+4).
> $$
>
> Expand the first two factors:
>
> $$
> (x+10)(x+6)=x^2+16x+60.
> $$
>
> Then multiply by $x+4$:
>
> $$
> \begin{aligned}
> V(x)&=(x^2+16x+60)(x+4)\\
> &=x^3+20x^2+124x+240.
> \end{aligned}
> $$
>
> **Factored form:** $V(x)=(x+10)(x+6)(x+4)$
>
> **Standard form:** $V(x)=x^3+20x^2+124x+240$
>
> ### 2. Characteristics
>
> - Degree: $3$
> - Name: cubic function
> - Leading coefficient: $1$, which is positive
> - Constant term: $240$
>
> The constant term is $V(0)$, so it represents the original volume of the package:
>
> $$
> 10(6)(4)=240\text{ cm}^3.
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
> Y_1=x^3+20x^2+124x+240
> $$
>
> and
>
> $$
> Y_2=576.
> $$
>
> Use the calculator's **intersection** command. The contextual intersection is $(2,576)$.
>
> ![[Polynomial Functions - Reviewing a Cubic Volume Model 2 Graph.png]]
>
> Therefore, each dimension should be increased by **$2$ cm**. Checking:
>
> $$
> (10+2)(6+2)(4+2)=12(8)(6)=576\text{ cm}^3.
> $$
>
> ### 4. Contextual domain and range
>
> The question restricts the increase to $0\le x\le3$. The volume increases throughout this interval.
>
> $$
> V(0)=240
> $$
>
> and
>
> $$
> V(3)=13(9)(7)=819.
> $$
>
> **Domain**
>
> - Set-builder notation: $\{x\in\mathbb{R}\mid0\le x\le3\}$
> - Interval notation: $[0,3]$
>
> **Range**
>
> - Set-builder notation: $\{V\in\mathbb{R}\mid240\le V\le819\}$
> - Interval notation: $[240,819]$

