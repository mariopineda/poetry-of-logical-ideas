---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Motion and Derivatives"
show_solution: true
---

The position of an object is

$$
s(t)=t^3-10t^2+6t-11,
$$

where $t$ is measured in seconds, $s$ is measured in metres, East is positive, and West is negative.

### A.

Determine the average acceleration from $t=3$ s to $t=7$ s.

### B.

Determine the object's position, to the nearest hundredth of a metre, when its acceleration is $7\text{ m/s}^2$ West.

## Solution

> [!example]- Show solution
>
> Differentiate the position function:
>
> $$
> v(t)=s'(t)=3t^2-20t+6
> $$
>
> and
>
> $$
> a(t)=v'(t)=6t-20.
> $$
>
> ### A.
>
> The average acceleration is
>
> $$
> \frac{v(7)-v(3)}{7-3}.
> $$
>
> Since
>
> $$
> v(7)=13
> $$
>
> and
>
> $$
> v(3)=-27,
> $$
>
> we get
>
> $$
> a_{\text{avg}}
> =
> \frac{13-(-27)}{4}
> =
> \boxed{10\text{ m/s}^2}.
> $$
>
> The positive sign means East.
>
> ### B.
>
> $7\text{ m/s}^2$ West means
>
> $$
> a(t)=-7.
> $$
>
> So
>
> $$
> 6t-20=-7
> $$
>
> and therefore
>
> $$
> t=\frac{13}{6}.
> $$
>
> Now evaluate the position:
>
> $$
> s\left(\frac{13}{6}\right)
> \approx -34.7731.
> $$
>
> Thus the object is at
>
> $$
> \boxed{-34.77\text{ m}},
> $$
>
> or $34.77$ m West of the origin.

> [!abstract] Review First
> - [[Math/Calculus/Derivatives/Derivatives 1|Derivatives 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Calculus/Applications of Derivatives/Acceleration 2|Acceleration 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
