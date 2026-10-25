---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Derivatives"
show_solution: true
---

## Question

Differentiate using first principles.

### A.

$$
y=5-2x
$$

### B.

$$
y=x^2+6x-10
$$

## Solution

> [!example]- Show solution
>
> ### A.
>
> Let
>
> $$
> f(x)=5-2x.
> $$
>
> Using first principles,
>
> $$
> f'(x)
> =
> \lim_{h\to0}
> \frac{f(x+h)-f(x)}{h}.
> $$
>
> Then
>
> $$
> f'(x)
> =
> \lim_{h\to0}
> \frac{5-2(x+h)-(5-2x)}{h}
> $$
>
> $$
> =
> \lim_{h\to0}
> \frac{-2h}{h}
> =
> \boxed{-2}.
> $$
>
> ### B.
>
> Let
>
> $$
> f(x)=x^2+6x-10.
> $$
>
> Then
>
> $$
> f'(x)
> =
> \lim_{h\to0}
> \frac{(x+h)^2+6(x+h)-10-(x^2+6x-10)}{h}.
> $$
>
> Simplify:
>
> $$
> f'(x)
> =
> \lim_{h\to0}
> \frac{2xh+h^2+6h}{h}
> $$
>
> $$
> =
> \lim_{h\to0}
> (2x+h+6).
> $$
>
> Therefore,
>
> $$
> \boxed{f'(x)=2x+6}.
> $$

## Review First

- [[Limits of Trig Functions 1]]

## Explore Also

- [[Derivatives 3]]
- [[Derivatives 5]]

## Build Toward
