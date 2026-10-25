---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Optimization"
show_solution: true
---

## Question

Boat A is located $D$ km due south of boat B. Boat A moves north at $v_A$ km/h while, at the same time, boat B moves east at $v_B$ km/h.

Determine an expression, in terms of $D$, $v_A$, and $v_B$, for the time after they begin moving when the boats are closest to each other.

## Solution

> [!example]- Show solution
>
> Let boat B start at $(0,0)$ and boat A at $(0,-D)$.
>
> After $t$ hours,
>
> $$
> A(t)=(0,-D+v_At)
> $$
>
> and
>
> $$
> B(t)=(v_Bt,0).
> $$
>
> Thus,
>
> $$
> d^2(t)=(v_Bt)^2+(D-v_At)^2
> $$
>
> $$
> =(v_A^2+v_B^2)t^2-2Dv_At+D^2.
> $$
>
> Differentiate:
>
> $$
> \frac{d}{dt}\left[d^2(t)\right]
> =
> 2(v_A^2+v_B^2)t-2Dv_A.
> $$
>
> Set equal to zero:
>
> $$
> t=\boxed{\frac{Dv_A}{v_A^2+v_B^2}}.
> $$
>
> Since the coefficient of $t^2$ is positive, this gives the minimum distance.

## Review First

- [[Derivatives 1]]

## Explore Also

- [[Optimization 3]]
- [[Optimization 5]]

## Build Toward
