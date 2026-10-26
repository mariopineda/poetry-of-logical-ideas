---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Related Rates"
show_solution: true
---

The area of an equilatral triangle is decreasing at a rate of 12 cm$^2$/s. Find the rate at which the side is changing when the area is $p \sqrt{3}$ cm$^2$.

## Solution

> [!example]- Show solution
>
> Let $s$ be the side length of the equilateral triangle and $A$ its area.
>
> For an equilateral triangle,
>
> $$
> A=\frac{\sqrt3}{4}s^2.
> $$
>
> Differentiate with respect to time:
>
> $$
> \frac{dA}{dt}
> =
> \frac{\sqrt3}{2}s\frac{ds}{dt}.
> $$
>
> The area is decreasing at $12\text{ cm}^2/\text{s}$, so
>
> $$
> \frac{dA}{dt}=-12.
> $$
>
> When
>
> $$
> A=p\sqrt3,
> $$
>
> we have
>
> $$
> p\sqrt3
> =
> \frac{\sqrt3}{4}s^2.
> $$
>
> Thus,
>
> $$
> s^2=4p
> $$
>
> and, since a side length is positive,
>
> $$
> s=2\sqrt p.
> $$
>
> Substitute into the related-rates equation:
>
> $$
> -12
> =
> \frac{\sqrt3}{2}(2\sqrt p)\frac{ds}{dt}.
> $$
>
> Therefore,
>
> $$
> \boxed{
> \frac{ds}{dt}
> =
> -\frac{12}{\sqrt{3p}}
> \text{ cm/s}
> }.
> $$
>
> The negative sign means the side length is decreasing.

> [!abstract] Review First
> - [[Math/Calculus/Derivatives/Implicit Differentiation 1|Implicit Differentiation 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Calculus/Applications of Derivatives/Related Rates 1|Related Rates 1]]
> - [[Math/Calculus/Applications of Derivatives/Related Rates 3|Related Rates 3]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
