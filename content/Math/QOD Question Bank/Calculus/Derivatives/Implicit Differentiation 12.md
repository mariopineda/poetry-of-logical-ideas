---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Implicit Differentiation"
show_solution: true
---

## Question

The curve

$$
x^{2/3}+y^{2/3}=1
$$

is called an astroid.

1. Find $y'$.
2. Find the equation of the tangent line to the astroid at
   $$
   \left(\frac18,\frac{3\sqrt3}{8}\right)
   $$
   in general form.
3. List the coordinates where the curve is nondifferentiable. Explain.

## Solution

> [!example]- Show solution
>
> ### 1. Find $y'$
>
> Differentiate implicitly:
>
> $$
> \frac23x^{-1/3}
> +
> \frac23y^{-1/3}y'
> =
> 0.
> $$
>
> Therefore,
>
> $$
> y'
> =
> -\frac{x^{-1/3}}{y^{-1/3}}
> =
> -\frac{y^{1/3}}{x^{1/3}}.
> $$
>
> So
>
> $$
> \boxed{
> y'
> =
> -\sqrt[3]{\frac{y}{x}}
> }.
> $$
>
> ### 2. Tangent line
>
> At
>
> $$
> \left(\frac18,\frac{3\sqrt3}{8}\right),
> $$
>
> we have
>
> $$
> x^{1/3}=\frac12
> $$
>
> and
>
> $$
> y^{1/3}=\frac{\sqrt3}{2}.
> $$
>
> Thus the tangent slope is
>
> $$
> m
> =
> -\frac{\sqrt3/2}{1/2}
> =
> -\sqrt3.
> $$
>
> Using point-slope form,
>
> $$
> y-\frac{3\sqrt3}{8}
> =
> -\sqrt3
> \left(
> x-\frac18
> \right).
> $$
>
> Rearranging gives
>
> $$
> \boxed{
> 2\sqrt3\,x+2y-\sqrt3=0
> }.
> $$
>
> ### 3. Nondifferentiable points
>
> The astroid has cusps where either $x=0$ or $y=0$. These occur at
>
> $$
> \boxed{
> (1,0),\ (-1,0),\ (0,1),\ (0,-1)
> }.
> $$
>
> At these points the fractional-power derivative expressions used in the implicit differentiation are not defined in the ordinary two-sided sense; geometrically, the curve has cusps or vertical tangent behavior.

## Review First

- [[Chain Rule 1]]

## Explore Also

- [[Implicit Differentiation 11]]

## Build Toward
