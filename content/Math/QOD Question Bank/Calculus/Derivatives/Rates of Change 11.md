---
type: qod
publish: true
course:
  - "Mathematics 30-1"
  - "Mathematics 31"
topic: "Derivatives"
show_solution: true
---

## Question

For

$$
f(x)=\frac{1}{x-4},
$$

consider the point on the curve where $x=3$.

1. Sketch the function, a general secant line through the point, and the tangent line.
2. Determine the slope of the general secant line $PQ$, where $Q$ has $x$-coordinate $3+h$.
3. Use a table to estimate the tangent slope as $Q$ approaches $P$.

## Solution

> [!example]- Show solution
>
> At $x=3$,
>
> $$
> f(3)=-1,
> $$
>
> so
>
> $$
> P=(3,-1).
> $$
>
> Let
>
> $$
> Q=(3+h,f(3+h)).
> $$
>
> Then
>
> $$
> f(3+h)=\frac{1}{h-1}.
> $$
>
> The secant slope is
>
> $$
> m_{PQ}
> =
> \frac{\frac{1}{h-1}-(-1)}{h}.
> $$
>
> Simplify:
>
> $$
> m_{PQ}
> =
> \frac{\frac{h}{h-1}}{h}
> =
> \boxed{\frac{1}{h-1}}.
> $$
>
> A table illustrates the limiting value:
>
> | $h$ | $m_{PQ}$ |
> |---:|---:|
> | $0.5$ | $-2$ |
> | $0.1$ | $-1.111\ldots$ |
> | $0.01$ | $-1.0101\ldots$ |
> | $-0.01$ | $-0.9901\ldots$ |
> | $-0.1$ | $-0.9091\ldots$ |
>
> As $h\to0$,
>
> $$
> m_{PQ}\to-1.
> $$
>
> Therefore, the tangent slope is
>
> $$
> \boxed{-1}.
> $$
>
> The tangent line is
>
> $$
> y+1=-(x-3),
> $$
>
> so
>
> $$
> \boxed{y=-x+2}.
> $$

## Review First

- [[Limits of Trig Functions 1]]

## Explore Also

- [[Rates of Change 10]]
- [[Rates of Change 12]]

## Build Toward
