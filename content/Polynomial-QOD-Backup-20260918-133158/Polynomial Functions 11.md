---
type: qod
publish: true
courses:
  - Math 30-2
topic: Polynomial Functions
show_solution: true
prerequisites:
  - "[[Function Notation 1]]"
related:
  - "[[Polynomial Functions 10]]"
  - "[[Polynomial Functions 8]]"
  - "[[Completing the Square 1]]"
  - "[[Polynomial Functions 27 - Building a Graph]]"
---

## Question

The monthly profit of a small business is modelled by

$$
P(x)=-x^2+12x-20
$$

where $P$ is the profit, in **thousands of dollars**, and $x$ is the number of **hundreds of products sold**.

1. How many products must be sold for the business to **break even**?
2. How many products should be sold to **maximize profit**?
3. What is the **maximum monthly profit**, in dollars?

Use your graphing calculator. Graph the function and use the graph to answer the questions. Record the relevant coordinates.

## Solution

> [!example]- Show solution
>
> ### Method 1: Algebraic method
>
> #### 1.
>
> The business breaks even when $P(x)=0$:
>
> $$
> -x^2+12x-20=0
> $$
>
> Multiply by $-1$:
>
> $$
> x^2-12x+20=0
> $$
>
> Factor:
>
> $$
> (x-2)(x-10)=0
> $$
>
> Therefore,
>
> $$
> x=2 \quad \text{or} \quad x=10
> $$
>
> Since $x$ represents hundreds of products, the business breaks even at **200 products** or **1000 products**.
>
> #### 2.
>
> The maximum occurs at the vertex of the parabola:
>
> $$
> x=\frac{-b}{2a}
> =\frac{-12}{2(-1)}
> =6
> $$
>
> The business should sell **600 products**.
>
> #### 3.
>
> $$
> P(6)=-(6)^2+12(6)-20
> $$
>
> $$
> P(6)=-36+72-20=16
> $$
>
> Since $P$ is measured in thousands of dollars, the maximum monthly profit is **\$16,000**.
>
> ### Method 2: Graphical method
>
> Enter the function into the graphing calculator:
>
> $$
> Y_1=-X^2+12X-20
> $$
>
> A useful viewing window is:
>
> $$
> 0\le X\le12, \qquad -25\le Y\le20
> $$
>
> ![[Polynomial Functions 11 Graph.png]]
>
> On the graph, the horizontal coordinate represents hundreds of products sold and the vertical coordinate represents profit in thousands of dollars.
>
> #### 1. Find the break-even points
>
> The business breaks even when $P=0$, so locate both $x$-intercepts. Press `2nd` `TRACE`, select `2:zero`, and choose a left bound and right bound around each intercept.
>
> The calculator gives the intercepts $(2,0)$ and $(10,0)$. Since $x$ is measured in hundreds of products, the business breaks even after selling **200 products** or **1000 products**.
>
> #### 2. Find the number of products that maximizes profit
>
> Press `2nd` `TRACE`, select `4:maximum`, and choose a left bound and right bound on opposite sides of the highest point.
>
> The calculator gives the maximum point $(6,16)$. The horizontal coordinate, $x=6$, represents **600 products**.
>
> #### 3. Find the maximum profit
>
> The vertical coordinate of the maximum point is $P=16$. Since profit is measured in thousands of dollars, the maximum monthly profit is **\$16,000**.
