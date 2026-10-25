---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Curve Sketching"
show_solution: true
---

## Question

Sketch the graph of

$$
f(x)=\frac{x^2}{1-x^2}.
$$

> [!info]- Hint
> Determine the domain, intercepts, asymptotes, local maximum/minimum points, intervals of increase/decrease, concavity, and points of inflection.

## Solution

> [!example]- Show solution
>
> The denominator cannot equal zero, so
>
> $$
> \boxed{\text{Domain}=\mathbb R\setminus\{-1,1\}}.
> $$
>
> The only intercept is $\boxed{(0,0)}$.
>
> Vertical asymptotes occur at
>
> $$
> \boxed{x=-1,\ x=1}.
> $$
>
> Since the numerator and denominator have the same degree, the horizontal asymptote is
>
> $$
> \boxed{y=-1}.
> $$
>
> Differentiate:
>
> $$
> f'(x)=\frac{2x}{(1-x^2)^2}.
> $$
>
> Thus the function decreases for $x<0$ on each part of the domain and increases for $x>0$ on each part of the domain. Therefore $\boxed{(0,0)}$ is a local minimum.
>
> The second derivative is
>
> $$
> f''(x)=\frac{2(1+3x^2)}{(1-x^2)^3}.
> $$
>
> Hence the graph is concave up on $(-1,1)$ and concave down on $(-\infty,-1)$ and $(1,\infty)$.
>
> There are no points of inflection because the concavity changes only at $x=\pm1$, where the function is undefined.
>
> The function is even, so the graph is symmetric about the $y$-axis.

## Review First

- [[Derivatives 1]]
- [[Higher Derivatives 1]]

## Explore Also

- [[Curve Sketching 1]]
- [[First Derivative Test 1]]

## Build Toward
