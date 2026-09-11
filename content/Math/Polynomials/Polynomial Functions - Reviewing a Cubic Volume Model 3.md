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
  - "[[Polynomial Functions - Reviewing a Cubic Volume Model 2]]"
  - "[[Polynomial Functions 27 - Building a Graph]]"
---

## Question

A company makes a rectangular container with interior dimensions $9$ cm by $7$ cm by $2$ cm. Each dimension will be increased by $x$ centimetres, where $0\le x\le5$.

1. Write a polynomial function, $V(x)$, for the new volume in both **factored form** and **standard form**.
2. From the standard form, state:
   - the degree and name of the function;
   - the sign of the leading coefficient;
   - the constant term and what it represents in this context; and
   - the end behaviour of the unrestricted polynomial.
3. The company wants the new container to have a volume of $600\text{ cm}^3$. Graph $V(x)$ and $y=600$ on a graphing calculator, and determine how much each dimension should be increased.
4. State the **contextual domain and range** in both set-builder notation and interval notation.

## Solution

> [!example]- Show solution
>
> ### 1. Polynomial model
>
> Each original dimension is increased by $x$:
>
> $$
> V(x)=(x+9)(x+7)(x+2).
> $$
>
> Expand the first two factors:
>
> $$
> (x+9)(x+7)=x^2+16x+63.
> $$
>
> Then multiply by $x+2$:
>
> $$
> \begin{aligned}
> V(x)&=(x^2+16x+63)(x+2)\\
> &=x^3+18x^2+95x+126.
> \end{aligned}
> $$
>
> **Factored form:** $V(x)=(x+9)(x+7)(x+2)$
>
> **Standard form:** $V(x)=x^3+18x^2+95x+126$
>
> ### 2. Characteristics
>
> - Degree: $3$
> - Name: cubic function
> - Leading coefficient: $1$, which is positive
> - Constant term: $126$
>
> The constant term is $V(0)$, so it represents the original volume of the container:
>
> $$
> 9(7)(2)=126\text{ cm}^3.
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
> Y_1=x^3+18x^2+95x+126
> $$
>
> and
>
> $$
> Y_2=600.
> $$
>
> Use the calculator's **intersection** command. The contextual intersection is $(3,600)$.
>
> ![[Polynomial Functions - Reviewing a Cubic Volume Model 3 Graph.png]]
>
> Therefore, each dimension should be increased by **$3$ cm**. Checking:
>
> $$
> (9+3)(7+3)(2+3)=12(10)(5)=600\text{ cm}^3.
> $$
>
> ### 4. Contextual domain and range
>
> The question restricts the increase to $0\le x\le5$. The volume increases throughout this interval.
>
> $$
> V(0)=126
> $$
>
> and
>
> $$
> V(5)=14(12)(7)=1176.
> $$
>
> **Domain**
>
> - Set-builder notation: $\{x\in\mathbb{R}\mid0\le x\le5\}$
> - Interval notation: $[0,5]$
>
> **Range**
>
> - Set-builder notation: $\{V\in\mathbb{R}\mid126\le V\le1176\}$
> - Interval notation: $[126,1176]$

