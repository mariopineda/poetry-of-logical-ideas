---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Limits"
show_solution: true
---

## Question

Determine the equation of the tangent line to $y=x^2-2x-8$ at $(-3,7)$ using $m_t = \lim_{x \to a} \frac{f(x)-f(a)}{x-a}$

## Solution

> [!example]- Show solution
>
> Let
>
> $$
> f(x)=x^2-2x-8
> $$
>
> and
>
> $$
> a=-3.
> $$
>
> Using
>
> $$
> m_t
> =
> \lim_{x\to a}
> \frac{f(x)-f(a)}{x-a},
> $$
>
> we first note that
>
> $$
> f(-3)=7.
> $$
>
> Then
>
> $$
> m_t
> =
> \lim_{x\to-3}
> \frac{x^2-2x-8-7}{x+3}.
> $$
>
> Simplify the numerator:
>
> $$
> x^2-2x-15
> =
> (x-5)(x+3).
> $$
>
> Thus,
>
> $$
> m_t
> =
> \lim_{x\to-3}(x-5)
> =
> -8.
> $$
>
> Using the point
>
> $$
> (-3,7),
> $$
>
> the tangent line is
>
> $$
> y-7=-8(x+3).
> $$
>
> Therefore,
>
> $$
> \boxed{y=-8x-17}.
> $$
>
> In general form,
>
> $$
> \boxed{8x+y+17=0}.
> $$
>
> > [!info]- Legacy video solution
> > https://www.youtube.com/embed/h5u_AyC1yaE

## Review First

- [[Properties of Functions 1]]

## Explore Also

- [[Limits 2]]
- [[Limits 4]]

## Build Toward
