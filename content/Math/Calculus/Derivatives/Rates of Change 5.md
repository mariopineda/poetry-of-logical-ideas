---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Derivatives"
show_solution: true
---

Determine an expression for the slope of the general secant for the function $y=x^3-5x+4$ at the point $P(3,16)$ (you do not need to sketch the function).

## Solution

> [!example]- Show solution
>
> For
>
> $$
> f(x)=x^3-5x+4,
> $$
>
> the point
>
> $$
> P(3,16)
> $$
>
> lies on the curve because
>
> $$
> f(3)=27-15+4=16.
> $$
>
> Let a second point be
>
> $$
> Q(x,f(x)).
> $$
>
> The slope of the general secant is
>
> $$
> m_{\text{sec}}
> =
> \frac{f(x)-f(3)}{x-3}.
> $$
>
> Thus,
>
> $$
> m_{\text{sec}}
> =
> \frac{x^3-5x+4-16}{x-3}
> =
> \frac{x^3-5x-12}{x-3}.
> $$
>
> Factor the numerator:
>
> $$
> x^3-5x-12
> =
> (x-3)(x^2+3x+4).
> $$
>
> Therefore, for $x\neq3$,
>
> $$
> \boxed{
> m_{\text{sec}}
> =
> x^2+3x+4
> }.
> $$
>
> > [!info]- Legacy video solution
> > https://www.youtube.com/embed/xfY2bAhm7jQ

> [!abstract] Review First
> - [[Math/Calculus/Trigonometry/Limits of Trig Functions 1|Limits of Trig Functions 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Calculus/Derivatives/Rates of Change 4|Rates of Change 4]]
> - [[Math/Calculus/Derivatives/Rates of Change 6|Rates of Change 6]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
