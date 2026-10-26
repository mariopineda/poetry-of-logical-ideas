---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Chain Rule"
show_solution: true
---

Differentiate $y = \left[ x^3-7+(5x+1)^4 \right]^9$.

## Solution

> [!example]- Show solution
>
> Let
>
> $$
> u=x^3-7+(5x+1)^4.
> $$
>
> Then
>
> $$
> y=u^9,
> $$
>
> so
>
> $$
> \frac{dy}{dx}
> =
> 9u^8\frac{du}{dx}.
> $$
>
> Now,
>
> $$
> \frac{du}{dx}
> =
> 3x^2+20(5x+1)^3.
> $$
>
> Therefore,
>
> $$
> \boxed{
> y'
> =
> 9\left[x^3-7+(5x+1)^4\right]^8
> \left[3x^2+20(5x+1)^3\right]
> }.
> $$
>
> > [!info]- Legacy video solution
> > https://www.youtube.com/embed/PAiaw0RHdhA

> [!abstract] Review First
> - [[Math/Calculus/Derivatives/Basic Derivatives 1|Basic Derivatives 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Calculus/Derivatives/Chain Rule 2|Chain Rule 2]]
> - [[Math/Calculus/Derivatives/Chain Rule 4|Chain Rule 4]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
