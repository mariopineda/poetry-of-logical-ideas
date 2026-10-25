---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Motion and Derivatives"
show_solution: true
---

## Question

The position of an object is

$$
s(t)=t^4-t^3-10t-40,
\qquad t\geq0,
$$

where $s$ is measured in kilometres, $t$ in hours, North is positive, and South is negative.

### A.

Determine the average acceleration during the first $3$ hours.

### B.

Determine the instantaneous acceleration at $t=3$ h.

### C.

Determine the object's position when its acceleration is $34\text{ km/h}^2$ North.

## Solution

> [!example]- Show solution
>
> Differentiate the position function:
>
> $$
> v(t)=s'(t)=4t^3-3t^2-10
> $$
>
> and
>
> $$
> a(t)=v'(t)=12t^2-6t.
> $$
>
> ### A.
>
> The average acceleration from $t=0$ to $t=3$ is
>
> $$
> a_{\text{avg}}
> =
> \frac{v(3)-v(0)}{3-0}.
> $$
>
> Now,
>
> $$
> v(3)=108-27-10=71
> $$
>
> and
>
> $$
> v(0)=-10.
> $$
>
> Therefore,
>
> $$
> a_{\text{avg}}
> =
> \frac{71-(-10)}{3}
> =
> \boxed{27\text{ km/h}^2}.
> $$
>
> ### B.
>
> $$
> a(3)=12(3)^2-6(3)=108-18
> =\boxed{90\text{ km/h}^2}.
> $$
>
> ### C.
>
> Set
>
> $$
> 12t^2-6t=34.
> $$
>
> Then
>
> $$
> 6t^2-3t-17=0,
> $$
>
> so
>
> $$
> t=\frac{3\pm\sqrt{417}}{12}.
> $$
>
> Since $t\geq0$,
>
> $$
> t=\frac{3+\sqrt{417}}{12}
> \approx1.9517.
> $$
>
> Substitute into the position function:
>
> $$
> s(1.9517)\approx-52.44.
> $$
>
> Therefore, the object is approximately
>
> $$
> \boxed{52.44\text{ km South of the origin}}.
> $$

## Review First

- [[Derivatives 1]]

## Explore Also

- [[Acceleration 3]]
- [[Position and Velocity 1]]

## Build Toward
