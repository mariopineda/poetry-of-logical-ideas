---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Limits"
show_solution: true
---

Find the equation of the tangent line to the hyperbola $xy=1$ at the point $\left(-2, -\frac{1}{2} \right)$ using $m_t = \displaystyle\lim_{h \to 0} \frac{f(a+h)-f(a)}{h}$.

## Solution

> [!example]- Show solution
>
> The hyperbola
>
> $$
> xy=1
> $$
>
> can be written as
>
> $$
> f(x)=\frac1x.
> $$
>
> At
>
> $$
> a=-2,
> $$
>
> we have
>
> $$
> f(-2)=-\frac12.
> $$
>
> Using first principles,
>
> $$
> m_t
> =
> \lim_{h\to0}
> \frac{f(a+h)-f(a)}{h}.
> $$
>
> For
>
> $$
> f(x)=\frac1x,
> $$
>
> this gives
>
> $$
> m_t
> =
> \lim_{h\to0}
> \frac{\frac1{a+h}-\frac1a}{h}.
> $$
>
> Combine the fractions:
>
> $$
> m_t
> =
> \lim_{h\to0}
> \frac{-h}
> {ah(a+h)}.
> $$
>
> Cancel $h$:
>
> $$
> m_t
> =
> \lim_{h\to0}
> -\frac1{a(a+h)}.
> $$
>
> Therefore,
>
> $$
> m_t
> =
> -\frac1{a^2}.
> $$
>
> At
>
> $$
> a=-2,
> $$
>
> $$
> m_t=-\frac14.
> $$
>
> Using the point
>
> $$
> \left(-2,-\frac12\right),
> $$
>
> the tangent line is
>
> $$
> y+\frac12
> =
> -\frac14(x+2).
> $$
>
> Thus,
>
> $$
> \boxed{y=-\frac14x-1}.
> $$
>
> In general form,
>
> $$
> \boxed{x+4y+4=0}.
> $$
>
> > [!info]- Legacy video solution
> > https://www.youtube.com/embed/ZuIdS3Ed2IE

> [!abstract] Review First
> - [[Math/Relations and Functions/Properties of Functions 1|Properties of Functions 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Calculus/Limits/Limits 8|Limits 8]]
> - [[Math/Calculus/Limits/Limits 10|Limits 10]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
