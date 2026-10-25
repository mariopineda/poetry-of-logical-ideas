---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Higher Derivatives"
show_solution: true
---

## Question

Find $y''$ if

$$
y^2-xy=3.
$$

## Solution

> [!example]- Show solution
>
> Differentiate implicitly:
>
> $$
> 2yy'-(xy'+y)=0.
> $$
>
> So
>
> $$
> (2y-x)y'=y
> $$
>
> and
>
> $$
> y'=\frac{y}{2y-x}.
> $$
>
> Differentiate again using the Quotient Rule:
>
> $$
> y''
> =
> \frac{
> y'(2y-x)-y(2y'-1)
> }
> {(2y-x)^2}.
> $$
>
> Since
>
> $$
> y'(2y-x)=y,
> $$
>
> the numerator becomes
>
> $$
> y-2yy'+y
> =
> 2y(1-y').
> $$
>
> Also,
>
> $$
> 1-y'
> =
> 1-\frac{y}{2y-x}
> =
> \frac{y-x}{2y-x}.
> $$
>
> Therefore,
>
> $$
> \boxed{
> y''
> =
> \frac{2y(y-x)}{(2y-x)^3}
> }.
> $$

## Review First

- [[Basic Derivatives 1]]

## Explore Also

- [[Higher Derivatives 4]]
- [[Higher Derivatives 6]]

## Build Toward
