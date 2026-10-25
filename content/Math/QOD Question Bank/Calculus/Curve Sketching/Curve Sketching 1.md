---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Curve Sketching"
show_solution: true
---

## Question

Fully sketch

$$
y=-x(x-3)^2.
$$

You may use

$$
y'=-3(x-1)(x-3)
$$

and

$$
y''=-6(x-2).
$$

> [!info]- Hint
> Determine the domain, intercepts, asymptotes, local maximum/minimum points, intervals of increase/decrease, concavity, and points of inflection.

## Solution

> [!example]- Show solution
>
> For
>
> $$
> f(x)=-x(x-3)^2=-x^3+6x^2-9x,
> $$
>
> the domain is
>
> $$
> \boxed{\mathbb R}.
> $$
>
> The intercepts are $x=0$ and $x=3$, so the graph passes through $(0,0)$ and $(3,0)$. The root $x=3$ has multiplicity $2$.
>
> There are no asymptotes.
>
> Using
>
> $$
> f'(x)=-3(x-1)(x-3),
> $$
>
> the critical numbers are $x=1$ and $x=3$.
>
> - Decreasing on $(-\infty,1)$
> - Increasing on $(1,3)$
> - Decreasing on $(3,\infty)$
>
> Therefore,
>
> $$
> \boxed{(1,-4)}
> $$
>
> is a local minimum and
>
> $$
> \boxed{(3,0)}
> $$
>
> is a local maximum.
>
> Using
>
> $$
> f''(x)=-6(x-2),
> $$
>
> the graph is concave up on $(-\infty,2)$ and concave down on $(2,\infty)$.
>
> Since $f(2)=-2$, the point of inflection is
>
> $$
> \boxed{(2,-2)}.
> $$
>
> Because the leading term is $-x^3$,
>
> $$
> x\to-\infty\Rightarrow f(x)\to\infty
> $$
>
> and
>
> $$
> x\to\infty\Rightarrow f(x)\to-\infty.
> $$

## Review First

- [[Derivatives 1]]
- [[Higher Derivatives 1]]

## Explore Also

- [[Concavity and Inflection 1]]
- [[Curve Sketching 2]]

## Build Toward
