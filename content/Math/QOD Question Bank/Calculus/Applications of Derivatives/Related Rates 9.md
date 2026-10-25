---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Related Rates"
show_solution: true
---

## Question

A water tank is built in the shape of a circular cone with height 5 m and diameter 6 m at the top. Water is being pumped into the tank at a rate of 1.6 m$^3$/min. Find the rate at which the water level is rising when the water is 2 m deep.

## Solution

> [!example]- Show solution
>
> Let $r$ be the radius of the water surface and $h$ the water depth.
>
> The full tank has radius $3$ m and height $5$ m, so similar triangles give
>
> $$
> \frac{r}{h}
> =
> \frac35.
> $$
>
> Thus,
>
> $$
> r=\frac35h.
> $$
>
> The water volume is
>
> $$
> V=\frac13\pi r^2h.
> $$
>
> Substitute:
>
> $$
> V
> =
> \frac13\pi
> \left(\frac35h\right)^2h
> =
> \frac{3\pi}{25}h^3.
> $$
>
> Differentiate:
>
> $$
> \frac{dV}{dt}
> =
> \frac{9\pi}{25}h^2\frac{dh}{dt}.
> $$
>
> At the instant when
>
> $$
> h=2
> $$
>
> and
>
> $$
> \frac{dV}{dt}=1.6,
> $$
>
> we have
>
> $$
> 1.6
> =
> \frac{9\pi}{25}(4)\frac{dh}{dt}.
> $$
>
> Therefore,
>
> $$
> \frac{dh}{dt}
> =
> \frac{10}{9\pi}.
> $$
>
> Thus,
>
> $$
> \boxed{
> \frac{dh}{dt}
> =
> \frac{10}{9\pi}\text{ m/min}
> \approx0.354\text{ m/min}
> }.
> $$
>
> > [!info]- Legacy video solution
> > https://www.youtube.com/embed/U59ewg5oLL4

## Review First

- [[Implicit Differentiation 1]]

## Explore Also

- [[Related Rates 8]]
- [[Related Rates 10]]

## Build Toward
