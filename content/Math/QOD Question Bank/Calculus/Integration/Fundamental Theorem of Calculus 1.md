---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Definite Integrals"
show_solution: true
---

## Question

Evaluate

$$
\int_{1}^{4}\frac{t^2+\sqrt{t}-2}{t}\,dt.
$$

## Solution

> [!example]- Show solution
>
> Simplify:
>
> $$
> \frac{t^2+\sqrt{t}-2}{t}
> =t+t^{-1/2}-\frac{2}{t}.
> $$
>
> An antiderivative is
>
> $$
> F(t)=\frac{t^2}{2}+2\sqrt{t}-2\ln t.
> $$
>
> Therefore,
>
> $$
> \int_1^4\frac{t^2+\sqrt{t}-2}{t}\,dt
> =
> \left[
> \frac{t^2}{2}+2\sqrt{t}-2\ln t
> \right]_1^4
> $$
>
> $$
> =
> \left(12-2\ln4\right)-\frac52
> $$
>
> $$
> =
> \boxed{\frac{19}{2}-4\ln2}.
> $$
>
> Approximately,
>
> $$
> \boxed{6.73}.
> $$

## Review First

- [[Antiderivative 1]]

## Explore Also

- [[Definite Integrals 1]]

## Build Toward
