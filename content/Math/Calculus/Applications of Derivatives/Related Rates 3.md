---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Related Rates"
show_solution: true
---

Water is being poured out of a funnel at a rate of 15 cm$^3$/min. The right circular cone has a radius of 24 cm and a height of 32 cm. At what rate is the height changing when the volume is $12 \pi$ cm$^3$?

## Solution

> [!example]- Show solution
>
> Let $r$ be the radius of the water surface and $h$ the water depth.
>
> The full cone has radius $24$ cm and height $32$ cm, so by similar triangles,
>
> $$
> \frac{r}{h}
> =
> \frac{24}{32}
> =
> \frac34.
> $$
>
> Thus,
>
> $$
> r=\frac34h.
> $$
>
> The cone volume is
>
> $$
> V=\frac13\pi r^2h.
> $$
>
> Substitute $r=\frac34h$:
>
> $$
> V
> =
> \frac13\pi
> \left(\frac34h\right)^2h
> =
> \frac{3\pi}{16}h^3.
> $$
>
> Differentiate:
>
> $$
> \frac{dV}{dt}
> =
> \frac{9\pi}{16}h^2\frac{dh}{dt}.
> $$
>
> Since water is being poured out,
>
> $$
> \frac{dV}{dt}=-15\text{ cm}^3/\text{min}.
> $$
>
> When
>
> $$
> V=12\pi,
> $$
>
> we have
>
> $$
> 12\pi
> =
> \frac{3\pi}{16}h^3.
> $$
>
> Therefore,
>
> $$
> h^3=64
> $$
>
> and
>
> $$
> h=4.
> $$
>
> Substitute:
>
> $$
> -15
> =
> \frac{9\pi}{16}(4)^2\frac{dh}{dt}
> =
> 9\pi\frac{dh}{dt}.
> $$
>
> Hence,
>
> $$
> \boxed{
> \frac{dh}{dt}
> =
> -\frac{5}{3\pi}\text{ cm/min}
> }.
> $$
>
> The negative sign means the water level is falling.
>
> > [!info]- Legacy video solution
> > https://www.youtube.com/embed/dNw5Regla94

> [!abstract] Review First
> - [[Math/Calculus/Derivatives/Implicit Differentiation 1|Implicit Differentiation 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Calculus/Applications of Derivatives/Related Rates 2|Related Rates 2]]
> - [[Math/Calculus/Applications of Derivatives/Related Rates 4|Related Rates 4]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
