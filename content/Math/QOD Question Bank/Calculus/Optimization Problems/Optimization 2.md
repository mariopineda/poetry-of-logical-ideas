---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Optimization"
show_solution: true
---

## Question

Find the absolute maximum and absolute minimum of

$$
f(x)=\sqrt[3]{(x^2-9)^2}
$$

on

$$
[-1,6].
$$

## Solution

> [!example]- Show solution
>
> Since
>
> $$
> f(x)=|x^2-9|^{2/3},
> $$
>
> the function is continuous on $[-1,6]$.
>
> Potential extrema occur at endpoints and critical points.
>
> For $-1\leq x<3$,
>
> $$
> f(x)=(9-x^2)^{2/3},
> $$
>
> so
>
> $$
> f'(x)
> =
> -\frac{4x}{3(9-x^2)^{1/3}}.
> $$
>
> This gives the critical number
>
> $$
> x=0.
> $$
>
> The derivative is also undefined at
>
> $$
> x=3,
> $$
>
> where the function itself is defined.
>
> Evaluate the function at the endpoints and critical numbers:
>
> $$
> f(-1)=\sqrt[3]{64}=4,
> $$
>
> $$
> f(0)=\sqrt[3]{81},
> $$
>
> $$
> f(3)=0,
> $$
>
> and
>
> $$
> f(6)=\sqrt[3]{729}=9.
> $$
>
> Therefore, the absolute minimum is
>
> $$
> \boxed{0\text{ at }x=3},
> $$
>
> and the absolute maximum is
>
> $$
> \boxed{9\text{ at }x=6}.
> $$

## Review First

- [[Derivatives 1]]

## Explore Also

- [[Optimization 1]]
- [[Optimization 3]]

## Build Toward
