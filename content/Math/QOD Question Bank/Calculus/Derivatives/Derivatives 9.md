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
y=\frac{1}{x^2-9}
$$

### B.

$$
y=\frac{4x-7}{8-5x}
$$

## Solution

> [!example]- Show solution
>
> ### A.
>
> Let
>
> $$
> f(x)=\frac{1}{x^2-9}.
> $$
>
> Using first principles,
>
> $$
> f'(x)
> =
> \lim_{h\to0}
> \frac{
> \frac{1}{(x+h)^2-9}
> -
> \frac{1}{x^2-9}
> }{h}.
> $$
>
> Combine the fractions:
>
> $$
> f'(x)
> =
> \lim_{h\to0}
> \frac{-2xh-h^2}
> {h\left((x+h)^2-9\right)(x^2-9)}.
> $$
>
> Cancel $h$:
>
> $$
> f'(x)
> =
> \lim_{h\to0}
> -\frac{2x+h}
> {\left((x+h)^2-9\right)(x^2-9)}.
> $$
>
> Therefore,
>
> $$
> \boxed{
> f'(x)
> =
> -\frac{2x}{(x^2-9)^2}
> }.
> $$
>
> ### B.
>
> Let
>
> $$
> f(x)=\frac{4x-7}{8-5x}.
> $$
>
> Then
>
> $$
> f'(x)
> =
> \lim_{h\to0}
> \frac{
> \frac{4(x+h)-7}{8-5(x+h)}
> -
> \frac{4x-7}{8-5x}
> }{h}.
> $$
>
> Combining the two fractions gives
>
> $$
> f'(x)
> =
> \lim_{h\to0}
> \frac{-3h}
> {h(8-5x-5h)(8-5x)}.
> $$
>
> Hence,
>
> $$
> f'(x)
> =
> \lim_{h\to0}
> -\frac{3}
> {(8-5x-5h)(8-5x)}.
> $$
>
> Therefore,
>
> $$
> \boxed{
> f'(x)
> =
> -\frac{3}{(8-5x)^2}
> }.
> $$

## Review First

- [[Limits of Trig Functions 1]]

## Explore Also

- [[Derivatives 8]]
- [[Rates of Change 1]]

## Build Toward
