---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Motion and Derivatives"
show_solution: true
---

The position of an object is modeled by

$$
s(t)=t^3-6t^2+9t,\qquad 0\leq t\leq 5,
$$

where $s$ is measured in metres, $t$ is measured in seconds, East is positive, and West is negative.

![[Images/Generated/acceleration-2-replacement.png]]

Describe the motion of the object. Include:

1. when it is moving East and West,
2. when it is at rest,
3. when it is speeding up and slowing down.

## Solution

> [!example]- Show solution
>
> Differentiate the position function:
>
> $$
> v(t)=s'(t)=3t^2-12t+9=3(t-1)(t-3),
> $$
>
> and
>
> $$
> a(t)=v'(t)=6t-12=6(t-2).
> $$
>
> The object is at rest when $v(t)=0$, so
>
> $$
> t=1,\ 3.
> $$
>
> Direction is determined by the sign of $v(t)$:
>
> - $0<t<1$: $v(t)>0$, so the object moves East.
> - $1<t<3$: $v(t)<0$, so the object moves West.
> - $3<t\leq5$: $v(t)>0$, so the object moves East.
>
> An object speeds up when velocity and acceleration have the same sign and slows down when they have opposite signs:
>
> - $0<t<1$: $v>0$, $a<0$ — slowing down.
> - $1<t<2$: $v<0$, $a<0$ — speeding up.
> - $2<t<3$: $v<0$, $a>0$ — slowing down.
> - $3<t\leq5$: $v>0$, $a>0$ — speeding up.
>
> At $t=2$, $a(t)=0$, marking the transition between speeding up and slowing down.

> [!abstract] Review First
> - [[Math/Calculus/Derivatives/Derivatives 1|Derivatives 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Calculus/Applications of Derivatives/Acceleration 1|Acceleration 1]]
> - [[Math/Calculus/Applications of Derivatives/Acceleration 3|Acceleration 3]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
