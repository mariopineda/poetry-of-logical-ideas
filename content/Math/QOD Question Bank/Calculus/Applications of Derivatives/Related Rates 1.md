---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Related Rates"
show_solution: true
---

## Question

A $6$ m ladder is leaning against a vertical wall. Its foot is sliding away from the wall at $1\text{ m/s}$.

At what rate is the top of the ladder falling when the foot of the ladder is $3$ m from the wall?

## Solution

> [!example]- Show solution
>
> Let $x$ be the distance of the foot of the ladder from the wall and $y$ the height of the top of the ladder.
>
> Since the ladder length is constant,
>
> $$
> x^2+y^2=36.
> $$
>
> Differentiate with respect to time:
>
> $$
> 2x\frac{dx}{dt}
> +
> 2y\frac{dy}{dt}
> =0.
> $$
>
> Thus,
>
> $$
> \frac{dy}{dt}
> =
> -\frac{x}{y}\frac{dx}{dt}.
> $$
>
> When $x=3$,
>
> $$
> y=\sqrt{36-9}=3\sqrt3.
> $$
>
> Using
>
> $$
> \frac{dx}{dt}=1,
> $$
>
> we get
>
> $$
> \frac{dy}{dt}
> =
> -\frac{3}{3\sqrt3}
> =
> -\frac{1}{\sqrt3}
> =
> -\frac{\sqrt3}{3}.
> $$
>
> Therefore, the top of the ladder is falling at
>
> $$
> \boxed{\frac{\sqrt3}{3}\text{ m/s}}
> $$
>
> downward.

## Review First

- [[Implicit Differentiation 1]]

## Explore Also

- [[Applications of Trig Derivatives 3 - Modeling the Velocity of a Ferris Wheel]]
- [[Related Rates 2]]

## Build Toward
