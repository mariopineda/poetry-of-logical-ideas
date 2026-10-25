---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Optimization"
show_solution: true
---

## Question

Find the exact maximum volume of a right circular cylinder that can be inscribed in a sphere of radius

$$
R=\sqrt{3}\text{ m}.
$$

## Solution

> [!example]- Show solution
>
> Let $r$ be the cylinder radius and $h$ its height.
>
> A central cross-section gives
>
> $$
> r^2+\left(\frac{h}{2}\right)^2=3.
> $$
>
> Thus,
>
> $$
> r^2=3-\frac{h^2}{4}.
> $$
>
> The volume is
>
> $$
> V(h)=\pi r^2h
> =3\pi h-\frac{\pi}{4}h^3.
> $$
>
> Differentiate:
>
> $$
> V'(h)=3\pi-\frac{3\pi}{4}h^2.
> $$
>
> Set $V'(h)=0$:
>
> $$
> h=2.
> $$
>
> Then
>
> $$
> r^2=3-1=2.
> $$
>
> Therefore,
>
> $$
> V_{\max}=\pi(2)(2)=\boxed{4\pi\text{ m}^3}.
> $$

## Review First

- [[Derivatives 1]]

## Explore Also

- [[Optimization 5]]

## Build Toward
