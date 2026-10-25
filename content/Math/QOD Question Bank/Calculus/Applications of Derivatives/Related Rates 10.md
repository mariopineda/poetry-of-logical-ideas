---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Related Rates"
show_solution: true
---

## Question

A rock is dropped into a pool and it begins to create a circular wave. If the circle is moving outward at 6 cm/s, then determine how quickly the area is changing after 5 seconds.

## Solution

> [!example]- Show solution
>
> Let $r$ be the radius of the circular wave.
>
> Since the wave moves outward at
>
> $$
> \frac{dr}{dt}=6\text{ cm/s},
> $$
>
> and starts at radius $0$,
>
> $$
> r=6t.
> $$
>
> After $5$ seconds,
>
> $$
> r=30\text{ cm}.
> $$
>
> The area is
>
> $$
> A=\pi r^2.
> $$
>
> Differentiate with respect to time:
>
> $$
> \frac{dA}{dt}
> =
> 2\pi r\frac{dr}{dt}.
> $$
>
> Substitute
>
> $$
> r=30
> $$
>
> and
>
> $$
> \frac{dr}{dt}=6:
> $$
>
> $$
> \frac{dA}{dt}
> =
> 2\pi(30)(6)
> =
> \boxed{360\pi\text{ cm}^2/\text{s}}.
> $$
>
> Approximately,
>
> $$
> \boxed{1131.0\text{ cm}^2/\text{s}}.
> $$
>
> > [!info]- Legacy video solution
> > https://www.youtube.com/embed/_YRccPEBvwQ

## Review First

- [[Implicit Differentiation 1]]

## Explore Also

- [[Related Rates 9]]

## Build Toward
