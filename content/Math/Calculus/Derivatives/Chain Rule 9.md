---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Chain Rule"
show_solution: true
---

Differentiate

$$
y=\left[4-(2x+5)^3\right]^6
$$

using the Chain Rule more than once.

## Solution

> [!example]- Show solution
>
> Apply the Chain Rule to the outer power:
>
> $$
> y'
> =
> 6\left[4-(2x+5)^3\right]^5
> \frac{d}{dx}\left[4-(2x+5)^3\right].
> $$
>
> Differentiate the inner expression:
>
> $$
> \frac{d}{dx}\left[4-(2x+5)^3\right]
> =
> -3(2x+5)^2(2)
> =
> -6(2x+5)^2.
> $$
>
> Therefore,
>
> $$
> \boxed{
> y'
> =
> -36(2x+5)^2
> \left[4-(2x+5)^3\right]^5
> }.
> $$

> [!abstract] Review First
> - [[Math/Calculus/Derivatives/Basic Derivatives 1|Basic Derivatives 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Calculus/Derivatives/Chain Rule 8|Chain Rule 8]]
> - [[Math/Calculus/Derivatives/Chain Rule 10|Chain Rule 10]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
