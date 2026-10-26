---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Higher Derivatives"
show_solution: true
---

For

$$
f(x)=\sqrt{1+2x^2},
$$

evaluate

$$
f''(2).
$$

## Solution

> [!example]- Show solution
>
> Write
>
> $$
> f(x)=(1+2x^2)^{1/2}.
> $$
>
> Then
>
> $$
> f'(x)
> =
> 2x(1+2x^2)^{-1/2}.
> $$
>
> Differentiate again:
>
> $$
> f''(x)
> =
> 2(1+2x^2)^{-1/2}
> -
> 4x^2(1+2x^2)^{-3/2}.
> $$
>
> Factor:
>
> $$
> f''(x)
> =
> \frac{2}{(1+2x^2)^{3/2}}.
> $$
>
> At $x=2$,
>
> $$
> f''(2)
> =
> \frac{2}{(1+8)^{3/2}}
> =
> \frac{2}{27}.
> $$
>
> Therefore,
>
> $$
> \boxed{\frac{2}{27}}.
> $$

> [!abstract] Review First
> - [[Math/Calculus/Derivatives/Basic Derivatives 1|Basic Derivatives 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Calculus/Derivatives/Higher Derivatives 2|Higher Derivatives 2]]
> - [[Math/Calculus/Derivatives/Higher Derivatives 4|Higher Derivatives 4]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
