---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Derivatives"
show_solution: true
---

Let

$$
f(x)=x^4-4x^2.
$$

Without graphing technology, sketch the derivative function $y=f'(x)$.

Identify the $x$-intercepts of $f'(x)$ and use its sign to determine where $f$ is increasing and decreasing.

## Solution

> [!example]- Show solution
>
> Differentiate:
>
> $$
> f'(x)=4x^3-8x
> =
> 4x(x^2-2)
> =
> 4x(x-\sqrt2)(x+\sqrt2).
> $$
>
> The derivative has zeros at
>
> $$
> \boxed{x=-\sqrt2,\ 0,\ \sqrt2}.
> $$
>
> A sign analysis gives:
>
> - $f'(x)<0$ on $(-\infty,-\sqrt2)$;
> - $f'(x)>0$ on $(-\sqrt2,0)$;
> - $f'(x)<0$ on $(0,\sqrt2)$;
> - $f'(x)>0$ on $(\sqrt2,\infty)$.
>
> Therefore, $f$ is increasing on
>
> $$
> \boxed{(-\sqrt2,0)\cup(\sqrt2,\infty)}
> $$
>
> and decreasing on
>
> $$
> \boxed{(-\infty,-\sqrt2)\cup(0,\sqrt2)}.
> $$
>
> The derivative sketch is the cubic
>
> $$
> \boxed{y=4x^3-8x}
> $$
>
> crossing the $x$-axis at $-\sqrt2$, $0$, and $\sqrt2$.

> [!abstract] Review First
> - [[Math/Calculus/Trigonometry/Limits of Trig Functions 1|Limits of Trig Functions 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Calculus/Derivatives/Derivatives 7|Derivatives 7]]
> - [[Math/Calculus/Derivatives/Derivatives 9|Derivatives 9]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
