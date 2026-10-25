---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Chain Rule"
show_solution: true
---

## Question

Differentiate. Assume $f$ and $g$ are differentiable functions.

### A.

$$
y=x^3f(x^2)
$$

### B.

$$
y=f(g(x^3))
$$

## Solution

> [!example]- Show solution
>
> ### A.
>
> Use the Product Rule and Chain Rule:
>
> $$
> y'
> =
> 3x^2f(x^2)
> +
> x^3f'(x^2)(2x).
> $$
>
> Thus,
>
> $$
> \boxed{
> y'
> =
> 3x^2f(x^2)
> +
> 2x^4f'(x^2)
> }.
> $$
>
> Equivalently,
>
> $$
> \boxed{
> y'
> =
> x^2\left[3f(x^2)+2x^2f'(x^2)\right]
> }.
> $$
>
> ### B.
>
> Apply the Chain Rule twice:
>
> $$
> y'
> =
> f'(g(x^3))
> \cdot
> g'(x^3)
> \cdot
> 3x^2.
> $$
>
> Therefore,
>
> $$
> \boxed{
> y'
> =
> 3x^2g'(x^3)f'(g(x^3))
> }.
> $$

## Review First

- [[Basic Derivatives 1]]

## Explore Also

- [[Chain Rule 14]]
- [[Chain Rule 16]]

## Build Toward
