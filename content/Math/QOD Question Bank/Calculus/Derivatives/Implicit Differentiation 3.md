---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Implicit Differentiation"
show_solution: true
---

## Question

For

$$
A(t)=\pi r^2+2\pi rh,
$$

determine

$$
\frac{dA}{dt}
$$

if $r=r(t)$ and $h$ is constant.

## Solution

> [!example]- Show solution
>
> Differentiate each term with respect to time.
>
> Because $r=r(t)$,
>
> $$
> \frac{d}{dt}(\pi r^2)
> =
> 2\pi r\frac{dr}{dt}.
> $$
>
> Since $h$ is constant,
>
> $$
> \frac{d}{dt}(2\pi rh)
> =
> 2\pi h\frac{dr}{dt}.
> $$
>
> Therefore,
>
> $$
> \frac{dA}{dt}
> =
> 2\pi r\frac{dr}{dt}
> +
> 2\pi h\frac{dr}{dt}.
> $$
>
> Factor:
>
> $$
> \boxed{
> \frac{dA}{dt}
> =
> 2\pi(r+h)\frac{dr}{dt}
> }.
> $$

## Review First

- [[Chain Rule 1]]

## Explore Also

- [[Implicit Differentiation 2]]
- [[Implicit Differentiation 4]]

## Build Toward
