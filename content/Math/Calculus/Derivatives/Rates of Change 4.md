---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Derivatives"
show_solution: true
---

A cylinder has a changing volume, but the radius is always equal to the height.

#### A.

Determine the average rate of change (w.r.t. $h$) from $h=2$ cm to $h=5$ cm.

#### B.

Determine the instantaneous rate of change of volume (w.r.t. $h$) at $h=3$ cm.

## Solution

> [!example]- Show solution
>
> Since the radius is always equal to the height,
>
> $$
> r=h.
> $$
>
> The cylinder volume is
>
> $$
> V=\pi r^2h,
> $$
>
> so
>
> $$
> V=\pi h^3.
> $$
>
> ### A.
>
> The average rate of change from $h=2$ to $h=5$ is
>
> $$
> \frac{V(5)-V(2)}{5-2}.
> $$
>
> Now,
>
> $$
> V(5)=125\pi
> $$
>
> and
>
> $$
> V(2)=8\pi.
> $$
>
> Therefore,
>
> $$
> \frac{125\pi-8\pi}{3}
> =
> \boxed{39\pi\text{ cm}^2}.
> $$
>
> ### B.
>
> Differentiate with respect to $h$:
>
> $$
> \frac{dV}{dh}
> =
> 3\pi h^2.
> $$
>
> At $h=3$,
>
> $$
> \frac{dV}{dh}
> =
> 3\pi(3)^2
> =
> \boxed{27\pi\text{ cm}^2}.
> $$
>
> > [!info]- Legacy video solution
> > https://www.youtube.com/embed/eK6mytNoD74

> [!abstract] Review First
> - [[Math/Calculus/Trigonometry/Limits of Trig Functions 1|Limits of Trig Functions 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Calculus/Derivatives/Rates of Change 3|Rates of Change 3]]
> - [[Math/Calculus/Derivatives/Rates of Change 5|Rates of Change 5]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
