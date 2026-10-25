---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Related Rates"
show_solution: true
---

## Question

A baseball diamond is in the shape of a square 27.4 m on each side. Mary starts running home from 3rd base and a rate of 5.2 m/s. At the same time, Steve runs from home plate to 1st base at a rate of 4.2 m/s. How fast is the distance between them changing 3.0 sec after they leave? Answer to nearest hundredth.

## Solution

> [!example]- Show solution
>
> Let $x$ be Steve's distance from home toward first base and $y$ Mary's distance from home along the third-base line.
>
> After $t$ seconds,
>
> $$
> x=4.2t
> $$
>
> and
>
> $$
> y=27.4-5.2t.
> $$
>
> Let $z$ be the distance between the runners. Since the base paths are perpendicular,
>
> $$
> z^2=x^2+y^2.
> $$
>
> Differentiate:
>
> $$
> 2z\frac{dz}{dt}
> =
> 2x\frac{dx}{dt}
> +
> 2y\frac{dy}{dt}.
> $$
>
> Thus,
>
> $$
> \frac{dz}{dt}
> =
> \frac{
> x\frac{dx}{dt}
> +
> y\frac{dy}{dt}
> }{z}.
> $$
>
> At $t=3.0$ s,
>
> $$
> x=4.2(3)=12.6
> $$
>
> and
>
> $$
> y=27.4-5.2(3)=11.8.
> $$
>
> Also,
>
> $$
> z
> =
> \sqrt{12.6^2+11.8^2}
> \approx17.2627.
> $$
>
> Using
>
> $$
> \frac{dx}{dt}=4.2
> $$
>
> and
>
> $$
> \frac{dy}{dt}=-5.2,
> $$
>
> we get
>
> $$
> \frac{dz}{dt}
> =
> \frac{12.6(4.2)+11.8(-5.2)}{17.2627}
> \approx-0.4889.
> $$
>
> Therefore, the distance between them is
>
> $$
> \boxed{\text{decreasing at }0.49\text{ m/s}}.
> $$
>
> > [!info]- Legacy video solution
> > https://www.youtube.com/embed/dZDDe3kmKKY

## Review First

- [[Implicit Differentiation 1]]

## Explore Also

- [[Related Rates 3]]
- [[Related Rates 5]]

## Build Toward
