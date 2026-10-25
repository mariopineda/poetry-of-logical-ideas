---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Derivatives"
show_solution: true
---

## Question

For

$$
f(x)=x^2-2x-15=(x-1)^2-16,
$$

consider the point on the curve where $x=-4$.

1. Sketch the function, a general secant line through the point, and the tangent line.
2. Determine and simplify the slope of the general secant line $PQ$, where $Q$ has $x$-coordinate $-4+h$.
3. Use a table to estimate the tangent slope as $Q$ approaches $P$.

## Solution

> [!example]- Show solution
>
> At $x=-4$,
>
> $$
> f(-4)=16+8-15=9,
> $$
>
> so
>
> $$
> P=(-4,9).
> $$
>
> Let
>
> $$
> Q=(-4+h,f(-4+h)).
> $$
>
> The secant slope is
>
> $$
> m_{PQ}
> =
> \frac{f(-4+h)-f(-4)}{h}.
> $$
>
> Now,
>
> $$
> f(-4+h)
> =
> (-4+h)^2-2(-4+h)-15
> =
> 9-10h+h^2.
> $$
>
> Therefore,
>
> $$
> m_{PQ}
> =
> \frac{-10h+h^2}{h}
> =
> \boxed{h-10}.
> $$
>
> A table illustrates the limiting value:
>
> | $h$ | $m_{PQ}=h-10$ |
> |---:|---:|
> | $1$ | $-9$ |
> | $0.1$ | $-9.9$ |
> | $0.01$ | $-9.99$ |
> | $-0.01$ | $-10.01$ |
> | $-0.1$ | $-10.1$ |
>
> As $h\to0$,
>
> $$
> m_{PQ}\to-10.
> $$
>
> Thus the tangent slope is
>
> $$
> \boxed{-10}.
> $$
>
> The tangent line at $P=(-4,9)$ is
>
> $$
> y-9=-10(x+4),
> $$
>
> or
>
> $$
> \boxed{y=-10x-31}.
> $$

## Review First

- [[Limits of Trig Functions 1]]

## Explore Also

- [[Rates of Change 7]]
- [[Rates of Change 9]]

## Build Toward
