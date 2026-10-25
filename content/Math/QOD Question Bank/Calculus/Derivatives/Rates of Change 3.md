---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Derivatives"
show_solution: true
---

## Question

For the function $y=x^2-5x$, estimate the tangent slope at the point $P(2,-6)$ using technology. Include a sketch of the general secant line and the tangent line.

## Solution

> [!example]- Show solution
>
>
> For
>
> $$
> f(x)=x^2-5x,
> $$
>
> the point
>
> $$
> P(2,-6)
> $$
>
> lies on the curve.
>
> Let a second point on the curve be
>
> $$
> Q(x,f(x)).
> $$
>
> The slope of the secant line through $P$ and $Q$ is
>
> $$
> m_{\text{sec}}
> =
> \frac{f(x)-f(2)}{x-2}.
> $$
>
> Since
>
> $$
> f(2)=-6,
> $$
>
> we get
>
> $$
> m_{\text{sec}}
> =
> \frac{x^2-5x+6}{x-2}.
> $$
>
> Factor:
>
> $$
> x^2-5x+6
> =
> (x-2)(x-3).
> $$
>
> Therefore, for $x\neq2$,
>
> $$
> m_{\text{sec}}=x-3.
> $$
>
> As $Q$ approaches $P$,
>
> $$
> x\to2,
> $$
>
> so
>
> $$
> m_{\text{sec}}\to-1.
> $$
>
> Thus the tangent slope is
>
> $$
> \boxed{-1}.
> $$
>
> Equivalently,
>
> $$
> f'(x)=2x-5,
> $$
>
> so
>
> $$
> f'(2)=4-5=-1.
> $$
>
> The tangent line through $(2,-6)$ is
>
> $$
> y+6=-(x-2),
> $$
>
> or
>
> $$
> \boxed{y=-x-4}.
> $$
>
> A suitable sketch shows the parabola, several secant lines approaching $P$, and the tangent line $y=-x-4$.
>
> > [!info]- Legacy video solution
> > https://www.youtube.com/embed/NAmwC9kZ8iA

## Review First

- [[Limits of Trig Functions 1]]

## Explore Also

- [[Rates of Change 2]]
- [[Rates of Change 4]]

## Build Toward
