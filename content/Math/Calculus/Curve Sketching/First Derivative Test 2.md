---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Curve Sketching"
show_solution: true
---

For

$$
f(x)=\sqrt[3]{x^2-10x},
$$

determine:

1. the $x$-coordinates of any local maxima or minima;
2. where the function is decreasing.

Answer the decreasing interval in interval notation.

## Solution

> [!example]- Show solution
>
> Differentiate:
>
> $$
> f'(x)
> =
> \frac{2x-10}{3(x^2-10x)^{2/3}}
> =
> \frac{2(x-5)}{3(x^2-10x)^{2/3}}.
> $$
>
> The derivative is zero at
>
> $$
> x=5
> $$
>
> and is undefined at
>
> $$
> x=0,\ 10.
> $$
>
> For every point where the derivative exists, its sign is determined by $x-5$:
>
> - $f'(x)<0$ for $x<5$;
> - $f'(x)>0$ for $x>5$.
>
> The function remains decreasing through $x=0$ and increasing through $x=10$, so neither $x=0$ nor $x=10$ is an extremum.
>
> At $x=5$, the derivative changes from negative to positive. Therefore,
>
> $$
> \boxed{x=5}
> $$
>
> is the only local extremum, and it is a local minimum.
>
> There is no local maximum.
>
> The function is decreasing on
>
> $$
> \boxed{(-\infty,5)}.
> $$

> [!abstract] Review First
> - [[Math/Calculus/Derivatives/Derivatives 1|Derivatives 1]]
> - [[Math/Calculus/Derivatives/Higher Derivatives 1|Higher Derivatives 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Calculus/Curve Sketching/First Derivative Test 1|First Derivative Test 1]]
> - [[Math/Calculus/Curve Sketching/First Derivative Test 3|First Derivative Test 3]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
