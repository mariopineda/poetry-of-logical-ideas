---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Motion and Derivatives"
show_solution: true
---

The position of a moving object is

$$
s(t)=t^3-30t^2+225t,
\qquad 0\leq t\leq25,
$$

where $s$ is measured in metres and $t$ in seconds.

1. Determine the position of the object at $t=7$ s and $t=23$ s.
2. Determine when the object is at rest.
3. Determine when the object is moving in the positive direction and in the negative direction.
4. Determine the average velocity from $t=2$ s to $t=12$ s.
5. Determine the instantaneous velocity at $t=20$ s.

## Solution

> [!example]- Show solution
>
> Differentiate:
>
> $$
> v(t)=s'(t)
> =
> 3t^2-60t+225
> =
> 3(t-5)(t-15).
> $$
>
> ### 1.
>
> $$
> s(7)=7^3-30(7)^2+225(7)=\boxed{448\text{ m}}
> $$
>
> and
>
> $$
> s(23)=23^3-30(23)^2+225(23)=\boxed{1472\text{ m}}.
> $$
>
> ### 2.
>
> The object is at rest when
>
> $$
> v(t)=0.
> $$
>
> Thus,
>
> $$
> 3(t-5)(t-15)=0
> $$
>
> and
>
> $$
> \boxed{t=5\text{ s},\ 15\text{ s}}.
> $$
>
> ### 3.
>
> From the sign of $v(t)$:
>
> - $v(t)>0$ on $0\leq t<5$;
> - $v(t)<0$ on $5<t<15$;
> - $v(t)>0$ on $15<t\leq25$.
>
> Therefore the object moves in the positive direction on
>
> $$
> \boxed{[0,5)\cup(15,25]}
> $$
>
> and in the negative direction on
>
> $$
> \boxed{(5,15)}.
> $$
>
> ### 4.
>
> $$
> v_{\text{avg}}
> =
> \frac{s(12)-s(2)}{12-2}.
> $$
>
> Since
>
> $$
> s(12)=108
> $$
>
> and
>
> $$
> s(2)=338,
> $$
>
> we get
>
> $$
> v_{\text{avg}}
> =
> \frac{108-338}{10}
> =
> \boxed{-23\text{ m/s}}.
> $$
>
> ### 5.
>
> $$
> v(20)=3(20-5)(20-15)
> =3(15)(5)
> =\boxed{225\text{ m/s}}.
> $$

> [!abstract] Review First
> - [[Math/Calculus/Derivatives/Derivatives 1|Derivatives 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Calculus/Applications of Derivatives/Position and Velocity 6|Position and Velocity 6]]
> - [[Math/Calculus/Applications of Derivatives/Position and Velocity 8|Position and Velocity 8]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
