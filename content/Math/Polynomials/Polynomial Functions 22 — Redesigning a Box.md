---
type: qod
publish: true
courses:
  - Math 30-2
  - Math 30-1
topic: Polynomial Functions
show_solution: false
prerequisites:
  - "[[Polynomial Functions 6]]"
  - "[[Factoring Polynomials 1]]"
related:
  - "[[Polynomial Functions 17]]"
  - "[[Polynomial Functions 21]]"
  - "[[Polynomial Functions 25]]"
---

## Question

A rectangular block has original dimensions **8 cm by 6 cm by 4 cm**. Each dimension is reduced by the same amount, $x$ cm.

The resulting volume is modelled by

$$
V(x)=(8-x)(6-x)(4-x)
$$

1. Determine the portion of the function that is **physically meaningful**.
2. **Sketch the meaningful portion of the graph.** Your sketch must include:
   - labelled axes with variables and units
   - an appropriate scale
   - important endpoints and key points clearly labelled
3. What is the **largest possible value of $x$**?
4. State an appropriate **domain and range** for the situation.

Use your graphing calculator as needed.

## Solution

> [!example]- Show solution
>
> ### 1. Physically meaningful portion
>
> Each dimension must be greater than or equal to $0$.
>
> The smallest original dimension is $4$ cm, so
>
> $$
> 0\le x\le4
> $$
>
> Only this portion of the cubic graph is physically meaningful.
>
> ### 2. Sketch
>
> ![[Polynomial Functions 22 Solution Graph.png]]
>
> Useful points include
>
> $$
> (0,192),\quad(1,105),\quad(2,48),\quad(3,15),\quad(4,0)
> $$
>
> The volume decreases throughout the meaningful domain.
>
> ### 3. Largest possible value of $x$
>
> The largest possible reduction occurs when the original $4$ cm dimension becomes $0$:
>
> $$
> 4-x=0
> $$
>
> $$
> x=4
> $$
>
> Therefore, the largest possible value is **4 cm**.
>
> ### 4. Domain and range
>
> $$
> 0\le x\le4
> $$
>
> The greatest volume is the original volume:
>
> $$
> V(0)=8(6)(4)=192
> $$
>
> and the smallest volume is $0$.
>
> Therefore,
>
> $$
> 0\le V\le192
> $$
>
> where $V$ is measured in $\text{cm}^3$.