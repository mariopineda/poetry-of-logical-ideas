---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Chain Rule"
show_solution: true
---

Determine the value or values of $x$ for which

$$
y=\frac{1}{\sqrt[3]{4x^3+15x^2-18x}}
$$

has a horizontal tangent.

## Solution

> [!example]- Show solution
>
> Rewrite as
>
> $$
> y=(4x^3+15x^2-18x)^{-1/3}.
> $$
>
> Differentiate:
>
> $$
> y'
> =
> -\frac13
> (4x^3+15x^2-18x)^{-4/3}
> (12x^2+30x-18).
> $$
>
> A horizontal tangent occurs when the numerator factor is zero:
>
> $$
> 12x^2+30x-18=0.
> $$
>
> Factor:
>
> $$
> 6(2x^2+5x-3)=0
> $$
>
> $$
> 6(2x-1)(x+3)=0.
> $$
>
> Therefore,
>
> $$
> x=\frac12
> \qquad\text{or}\qquad
> x=-3.
> $$
>
> The original function is defined at both values, so
>
> $$
> \boxed{
> x=-3,\ \frac12
> }.
> $$

> [!abstract] Review First
> - [[Math/Calculus/Derivatives/Basic Derivatives 1|Basic Derivatives 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Calculus/Derivatives/Chain Rule 16|Chain Rule 16]]
> - [[Math/Calculus/Derivatives/Chain Rule 18|Chain Rule 18]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
