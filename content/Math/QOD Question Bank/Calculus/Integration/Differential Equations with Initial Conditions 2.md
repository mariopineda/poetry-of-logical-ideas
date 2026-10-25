---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Differential Equations"
show_solution: true
---

## Question

A stone is tossed upward at $8\text{ m/s}$ from the edge of a cliff $63$ m high. How long will it take the stone to hit the ground at the foot of the cliff?

Assume the acceleration due to gravity is $9.8\text{ m/s}^2$ downward.

> [!info]- Hint
> Initial conditions:
> - $v(0)=8\text{ m/s}$
> - $h(0)=63\text{ m}$
> - $a(t)=-9.8\text{ m/s}^2$

## Solution

> [!example]- Show solution
>
> Since acceleration is constant,
>
> $$
> a(t)=\frac{dv}{dt}=-9.8.
> $$
>
> Integrate:
>
> $$
> v(t)=-9.8t+C_1.
> $$
>
> Using
>
> $$
> v(0)=8,
> $$
>
> we get
>
> $$
> v(t)=-9.8t+8.
> $$
>
> Since
>
> $$
> v(t)=\frac{dh}{dt},
> $$
>
> integrate again:
>
> $$
> h(t)=-4.9t^2+8t+C_2.
> $$
>
> Using
>
> $$
> h(0)=63,
> $$
>
> we obtain
>
> $$
> h(t)=-4.9t^2+8t+63.
> $$
>
> The stone hits the ground when
>
> $$
> h(t)=0.
> $$
>
> Therefore,
>
> $$
> -4.9t^2+8t+63=0.
> $$
>
> Using the Quadratic Formula gives
>
> $$
> t\approx-2.8611
> $$
>
> or
>
> $$
> t\approx4.4938.
> $$
>
> The negative value is not physically relevant, so the stone hits the ground after
>
> $$
> \boxed{4.49\text{ s}}.
> $$

## Review First

- [[Antiderivative 1]]

## Explore Also

- [[Differential Equations with Initial Conditions 1]]
- [[Differential Equations with Initial Conditions 3]]

## Build Toward
