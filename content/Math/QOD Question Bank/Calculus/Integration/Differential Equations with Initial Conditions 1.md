---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Differential Equations"
show_solution: true
---

## Question

On the surface of the Moon, the acceleration due to gravity is $1.6\text{ m/s}^2$ downward.

A rock is thrown upward at $31\text{ m/s}$ from a height of $22$ m. Assume upward is positive and downward is negative.

Determine, to the nearest hundredth:

1. the maximum height of the rock;
2. the velocity of the rock when it hits the Moon's surface.

## Solution

> [!example]- Show solution
>
> The acceleration is constant:
>
> $$
> a(t)=-1.6.
> $$
>
> Integrate to obtain velocity:
>
> $$
> v(t)=-1.6t+C.
> $$
>
> Since
>
> $$
> v(0)=31,
> $$
>
> we get
>
> $$
> v(t)=-1.6t+31.
> $$
>
> Integrate again:
>
> $$
> s(t)=-0.8t^2+31t+C.
> $$
>
> Since
>
> $$
> s(0)=22,
> $$
>
> the position function is
>
> $$
> s(t)=-0.8t^2+31t+22.
> $$
>
> ### 1. Maximum height
>
> At maximum height,
>
> $$
> v(t)=0.
> $$
>
> Thus,
>
> $$
> -1.6t+31=0
> $$
>
> and
>
> $$
> t=19.375.
> $$
>
> Then
>
> $$
> s(19.375)=322.3125.
> $$
>
> Therefore, the maximum height is
>
> $$
> \boxed{322.31\text{ m}}.
> $$
>
> ### 2. Velocity when the rock hits the surface
>
> The rock reaches the surface when
>
> $$
> s(t)=0.
> $$
>
> So
>
> $$
> -0.8t^2+31t+22=0.
> $$
>
> The positive solution is
>
> $$
> t\approx39.4471.
> $$
>
> Then
>
> $$
> v(39.4471)
> =
> -1.6(39.4471)+31
> \approx-32.1154.
> $$
>
> Therefore, the impact velocity is
>
> $$
> \boxed{-32.12\text{ m/s}},
> $$
>
> that is, $32.12\text{ m/s}$ downward.

## Review First

- [[Antiderivative 1]]

## Explore Also

- [[Differential Equations with Initial Conditions 2]]

## Build Toward
