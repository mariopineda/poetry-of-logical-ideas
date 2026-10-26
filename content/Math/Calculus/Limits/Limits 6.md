---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Limits"
show_solution: true
---

Determine the equation of the tangent line to $y=\sqrt{3x+12}$ at $x=8$ using $m_t = \lim_{h \to 0} \frac{f(a+h)-f(a)}{h}$.

## Solution

> [!example]- Show solution
>
> Let
>
> $$
> f(x)=\sqrt{3x+12}.
> $$
>
> At
>
> $$
> a=8,
> $$
>
> we have
>
> $$
> f(8)=6.
> $$
>
> Using first principles,
>
> $$
> m_t
> =
> \lim_{h\to0}
> \frac{f(8+h)-f(8)}{h}.
> $$
>
> Thus,
>
> $$
> m_t
> =
> \lim_{h\to0}
> \frac{\sqrt{36+3h}-6}{h}.
> $$
>
> Rationalize:
>
> $$
> m_t
> =
> \lim_{h\to0}
> \frac{3h}
> {h\left(\sqrt{36+3h}+6\right)}.
> $$
>
> Cancel $h$:
>
> $$
> m_t
> =
> \lim_{h\to0}
> \frac{3}
> {\sqrt{36+3h}+6}.
> $$
>
> Therefore,
>
> $$
> m_t
> =
> \frac{3}{12}
> =
> \frac14.
> $$
>
> The tangent line through $(8,6)$ is
>
> $$
> y-6
> =
> \frac14(x-8).
> $$
>
> Thus,
>
> $$
> \boxed{y=\frac14x+4}.
> $$
>
> In general form,
>
> $$
> \boxed{x-4y+16=0}.
> $$
>
> > [!info]- Legacy video solution
> > https://www.youtube.com/embed/FBqRBbZb7Uc

> [!abstract] Review First
> - [[Math/Relations and Functions/Properties of Functions 1|Properties of Functions 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Calculus/Limits/Limits 5|Limits 5]]
> - [[Math/Calculus/Limits/Limits 7|Limits 7]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
