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
y=4-3x-2x^2
$$

### B.

$$
y=\sqrt{6-4x}
$$

## Solution

> [!example]- Show solution
>
> ### A.
>
> Let
>
> $$
> f(x)=4-3x-2x^2.
> $$
>
> Then
>
> $$
> f'(x)
> =
> \lim_{h\to0}
> \frac{f(x+h)-f(x)}{h}.
> $$
>
> Substitute and simplify:
>
> $$
> f'(x)
> =
> \lim_{h\to0}
> \frac{-3h-4xh-2h^2}{h}
> $$
>
> $$
> =
> \lim_{h\to0}
> (-3-4x-2h).
> $$
>
> Therefore,
>
> $$
> \boxed{f'(x)=-4x-3}.
> $$
>
> ### B.
>
> Let
>
> $$
> f(x)=\sqrt{6-4x}.
> $$
>
> Using first principles,
>
> $$
> f'(x)
> =
> \lim_{h\to0}
> \frac{\sqrt{6-4x-4h}-\sqrt{6-4x}}{h}.
> $$
>
> Rationalize the numerator:
>
> $$
> f'(x)
> =
> \lim_{h\to0}
> \frac{-4h}
> {h\left(\sqrt{6-4x-4h}+\sqrt{6-4x}\right)}.
> $$
>
> Thus,
>
> $$
> f'(x)
> =
> \boxed{-\frac{2}{\sqrt{6-4x}}}.
> $$
>
> This derivative is defined for $x<\frac32$.

## Review First

- [[Limits of Trig Functions 1]]

## Explore Also

- [[Derivatives 6]]
- [[Derivatives 8]]

## Build Toward
