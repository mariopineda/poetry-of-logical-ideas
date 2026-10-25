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
y=\sqrt{x-3}
$$

### B.

$$
y=\frac{1}{x+2}
$$

## Solution

> [!example]- Show solution
>
> ### A.
>
> Let
>
> $$
> f(x)=\sqrt{x-3}.
> $$
>
> Using first principles,
>
> $$
> f'(x)
> =
> \lim_{h\to0}
> \frac{\sqrt{x+h-3}-\sqrt{x-3}}{h}.
> $$
>
> Rationalize the numerator:
>
> $$
> f'(x)
> =
> \lim_{h\to0}
> \frac{x+h-3-(x-3)}
> {h\left(\sqrt{x+h-3}+\sqrt{x-3}\right)}.
> $$
>
> Thus,
>
> $$
> f'(x)
> =
> \lim_{h\to0}
> \frac{1}
> {\sqrt{x+h-3}+\sqrt{x-3}}
> =
> \boxed{\frac{1}{2\sqrt{x-3}}}.
> $$
>
> This derivative is defined for $x>3$.
>
> ### B.
>
> Let
>
> $$
> f(x)=\frac{1}{x+2}.
> $$
>
> Then
>
> $$
> f'(x)
> =
> \lim_{h\to0}
> \frac{\frac{1}{x+h+2}-\frac{1}{x+2}}{h}.
> $$
>
> Combine the fractions:
>
> $$
> f'(x)
> =
> \lim_{h\to0}
> \frac{-h}
> {h(x+h+2)(x+2)}.
> $$
>
> Therefore,
>
> $$
> f'(x)
> =
> \lim_{h\to0}
> -\frac{1}{(x+h+2)(x+2)}
> =
> \boxed{-\frac{1}{(x+2)^2}}.
> $$

## Review First

- [[Limits of Trig Functions 1]]

## Explore Also

- [[Derivatives 4]]
- [[Derivatives 6]]

## Build Toward
