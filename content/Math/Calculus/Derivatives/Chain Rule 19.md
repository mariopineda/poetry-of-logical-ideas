---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Chain Rule"
show_solution: true
---

Derive the Quotient Rule using

$$
\frac{f(x)}{g(x)}
=
f(x)[g(x)]^{-1},
$$

where $g(x)\neq0$.

## Solution

> [!example]- Show solution
>
> Let
>
> $$
> y=f(x)[g(x)]^{-1}.
> $$
>
> Using the Product Rule,
>
> $$
> y'
> =
> f'(x)[g(x)]^{-1}
> +
> f(x)\frac{d}{dx}[g(x)]^{-1}.
> $$
>
> By the Chain Rule,
>
> $$
> \frac{d}{dx}[g(x)]^{-1}
> =
> -[g(x)]^{-2}g'(x).
> $$
>
> Therefore,
>
> $$
> y'
> =
> \frac{f'(x)}{g(x)}
> -
> \frac{f(x)g'(x)}{[g(x)]^2}.
> $$
>
> Write both terms over the common denominator $[g(x)]^2$:
>
> $$
> \boxed{
> \left(\frac{f}{g}\right)'
> =
> \frac{f'(x)g(x)-f(x)g'(x)}
> {[g(x)]^2}
> }.
> $$

> [!abstract] Review First
> - [[Math/Calculus/Derivatives/Basic Derivatives 1|Basic Derivatives 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Calculus/Derivatives/Chain Rule 18|Chain Rule 18]]
> - [[Math/Calculus/Derivatives/Chain Rule 20|Chain Rule 20]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
