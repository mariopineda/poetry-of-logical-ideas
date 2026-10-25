---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Differential Equations"
show_solution: true
---

## Question

On the surface of the Moon, the acceleration due to gravity is $1.6\text{ m/s}^2$ downward. A rock is thrown upward at $31\text{ m/s}$ from a height of $22\text{ m}$.

Assume upward is positive. Determine, to the nearest hundredth:

1. the rock's maximum height;
2. its velocity when it hits the Moon's surface.

## Solution

> [!example]- Show solution
>
> The acceleration is constant:
>
> $$
> a(t)=-1.6.
> $$
>
> Integrating gives
>
> $$
> v(t)=-1.6t+31
> $$
>
> and
>
> $$
> h(t)=-0.8t^2+31t+22.
> $$
>
> ### 1. Maximum height
>
> The maximum occurs when $v(t)=0$:
>
> $$
> -1.6t+31=0
> \Rightarrow t=19.375.
> $$
>
> Then
>
> $$
> h(19.375)=322.3125.
> $$
>
> Therefore,
>
> $$
> \boxed{322.31\text{ m}}.
> $$
>
> ### 2. Velocity on impact
>
> Set $h(t)=0$:
>
> $$
> -0.8t^2+31t+22=0.
> $$
>
> The positive solution is
>
> $$
> t\approx39.4471\text{ s}.
> $$
>
> Therefore,
>
> $$
> v(39.4471)\approx-32.12\text{ m/s}.
> $$
>
> So the rock hits the surface with velocity
>
> $$
> \boxed{-32.12\text{ m/s}},
> $$
>
> or $32.12\text{ m/s}$ downward.

## Review First

- [[Antiderivative 1]]

## Explore Also

- [[Differential Equations with Initial Conditions 2]]
- [[Differential Equations with Initial Conditions 4]]

## Build Toward
