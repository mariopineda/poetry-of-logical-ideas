---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Optimization"
show_solution: true
---

A rectangle has a perimeter of $100$ m.

Determine the dimensions that maximize its area, and state the maximum area.

## Solution

> [!example]- Show solution
>
> Let the rectangle have length $x$ and width $y$.
>
> The perimeter condition is
>
> $$
> 2x+2y=100,
> $$
>
> so
>
> $$
> y=50-x.
> $$
>
> The area is
>
> $$
> A(x)=x(50-x)=50x-x^2.
> $$
>
> Differentiate:
>
> $$
> A'(x)=50-2x.
> $$
>
> Set the derivative equal to zero:
>
> $$
> 50-2x=0,
> $$
>
> so
>
> $$
> x=25.
> $$
>
> Then
>
> $$
> y=50-25=25.
> $$
>
> Since
>
> $$
> A''(x)=-2<0,
> $$
>
> this critical point gives a maximum.
>
> Therefore, the maximizing dimensions are
>
> $$
> \boxed{25\text{ m}\times25\text{ m}},
> $$
>
> and the maximum area is
>
> $$
> \boxed{625\text{ m}^2}.
> $$

> [!abstract] Review First
> - [[Math/Calculus/Derivatives/Derivatives 1|Derivatives 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Calculus/Optimization Problems/Optimization 1|Optimization 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
