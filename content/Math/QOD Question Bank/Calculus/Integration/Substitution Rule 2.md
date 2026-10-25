---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Substitution Rule"
show_solution: true
---

## Question

Evaluate the following integrals using substitution.

### 1.

$$
\int 3x^2(x^3+5)^7\,dx
$$

### 2.

$$
\int \frac{x^3}{\sqrt{1-x^4}}\,dx
$$

### 3.

$$
\int x\sqrt{x+2}\,dx
$$

### 4.

$$
\int \frac{\sin x}{\cos^3x}\,dx
$$

## Solution

> [!example]- Show solution
>
> ### 1.
>
> Let
>
> $$
> u=x^3+5.
> $$
>
> Then
>
> $$
> du=3x^2\,dx.
> $$
>
> Therefore,
>
> $$
> \int 3x^2(x^3+5)^7\,dx
> =
> \int u^7\,du
> =
> \frac{u^8}{8}+C.
> $$
>
> Hence,
>
> $$
> \boxed{
> \frac{(x^3+5)^8}{8}+C
> }.
> $$
>
> ### 2.
>
> Let
>
> $$
> u=1-x^4.
> $$
>
> Then
>
> $$
> du=-4x^3\,dx,
> $$
>
> so
>
> $$
> x^3\,dx=-\frac14\,du.
> $$
>
> Thus,
>
> $$
> \int\frac{x^3}{\sqrt{1-x^4}}\,dx
> =
> -\frac14\int u^{-1/2}\,du
> $$
>
> $$
> =
> -\frac12u^{1/2}+C.
> $$
>
> Therefore,
>
> $$
> \boxed{
> -\frac12\sqrt{1-x^4}+C
> }.
> $$
>
> ### 3.
>
> Let
>
> $$
> u=x+2.
> $$
>
> Then
>
> $$
> x=u-2
> $$
>
> and
>
> $$
> du=dx.
> $$
>
> Therefore,
>
> $$
> \int x\sqrt{x+2}\,dx
> =
> \int(u-2)u^{1/2}\,du
> $$
>
> $$
> =
> \frac25u^{5/2}-\frac43u^{3/2}+C.
> $$
>
> Hence,
>
> $$
> \boxed{
> \frac25(x+2)^{5/2}
> -\frac43(x+2)^{3/2}
> +C
> }.
> $$
>
> ### 4.
>
> Let
>
> $$
> u=\cos x.
> $$
>
> Then
>
> $$
> du=-\sin x\,dx.
> $$
>
> Thus,
>
> $$
> \int\frac{\sin x}{\cos^3x}\,dx
> =
> -\int u^{-3}\,du
> =
> \frac12u^{-2}+C.
> $$
>
> Therefore,
>
> $$
> \boxed{
> \frac{1}{2\cos^2x}+C
> }.
> $$

## Review First

- [[Antiderivative 1]]
- [[Chain Rule 1]]

## Explore Also

- [[Substitution Rule 1]]

## Build Toward
