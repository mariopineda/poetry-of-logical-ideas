---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Implicit Differentiation"
show_solution: true
---

Find the tangent slope of

$$
y=\frac{2x}{x+y}
$$

at the point $(1,-2)$.

> [!info]- Hint
> Cross-multiply first.

## Solution

> [!example]- Show solution
>
> Cross-multiply:
>
> $$
> y(x+y)=2x.
> $$
>
> So
>
> $$
> xy+y^2=2x.
> $$
>
> Differentiate implicitly:
>
> $$
> y+xy'+2yy'=2.
> $$
>
> Collect the $y'$ terms:
>
> $$
> (x+2y)y'=2-y.
> $$
>
> Therefore,
>
> $$
> y'=\frac{2-y}{x+2y}.
> $$
>
> At $(1,-2)$,
>
> $$
> y'
> =
> \frac{2-(-2)}{1+2(-2)}
> =
> \frac{4}{-3}.
> $$
>
> Hence the tangent slope is
>
> $$
> \boxed{-\frac43}.
> $$

> [!abstract] Review First
> - [[Math/Calculus/Derivatives/Chain Rule 1|Chain Rule 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Calculus/Derivatives/Implicit Differentiation 8|Implicit Differentiation 8]]
> - [[Math/Calculus/Derivatives/Implicit Differentiation 10|Implicit Differentiation 10]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
