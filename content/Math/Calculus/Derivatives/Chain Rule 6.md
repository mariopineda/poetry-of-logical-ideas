---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Chain Rule"
show_solution: true
---

At which x-value(s) does the function $y=(3x-1)^4 (7-2x)^5$ have a horizontal tangent?

## Solution

> [!example]- Show solution
>
> Let
>
> $$
> y=(3x-1)^4(7-2x)^5.
> $$
>
> Differentiate using the Product Rule and Chain Rule:
>
> $$
> y'
> =
> 12(3x-1)^3(7-2x)^5
> -
> 10(3x-1)^4(7-2x)^4.
> $$
>
> Factor:
>
> $$
> y'
> =
> (3x-1)^3(7-2x)^4
> \left[12(7-2x)-10(3x-1)\right].
> $$
>
> Simplify the bracket:
>
> $$
> 12(7-2x)-10(3x-1)
> =
> 94-54x
> =
> 2(47-27x).
> $$
>
> Thus,
>
> $$
> y'
> =
> 2(3x-1)^3(7-2x)^4(47-27x).
> $$
>
> A horizontal tangent occurs when $y'=0$, so
>
> $$
> 3x-1=0,
> $$
>
> or
>
> $$
> 7-2x=0,
> $$
>
> or
>
> $$
> 47-27x=0.
> $$
>
> Therefore,
>
> $$
> \boxed{
> x=\frac13,\quad
> \frac{47}{27},\quad
> \frac72
> }.
> $$
>
> > [!info]- Legacy video solution
> > https://www.youtube.com/embed/bqFdt6xOrjk

> [!abstract] Review First
> - [[Math/Calculus/Derivatives/Basic Derivatives 1|Basic Derivatives 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Calculus/Derivatives/Chain Rule 5|Chain Rule 5]]
> - [[Math/Calculus/Derivatives/Chain Rule 7|Chain Rule 7]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
