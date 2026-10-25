---
type: qod
publish: true
course:
  - "Mathematics 30-1"
  - "Mathematics 31"
topic: Polynomial Functions
show_solution: true
---

## Question

Fully sketch $y=12x-x^3$, using intercepts and the first derivative test.

## Solution

> [!example]- Show solution
>
> Let
>
> $$
> f(x)=12x-x^3=x(12-x^2).
> $$
>
> ### Intercepts
>
> The $x$-intercepts satisfy
>
> $$
> x(12-x^2)=0,
> $$
>
> so
>
> $$
> x=0,\ \pm2\sqrt3.
> $$
>
> Thus the intercepts are
>
> $$
> \boxed{(-2\sqrt3,0),\ (0,0),\ (2\sqrt3,0)}.
> $$
>
> The $y$-intercept is also
>
> $$
> \boxed{(0,0)}.
> $$
>
> ### First Derivative Test
>
> Differentiate:
>
> $$
> f'(x)=12-3x^2
> =3(2-x)(2+x).
> $$
>
> The critical numbers are
>
> $$
> x=-2,\ 2.
> $$
>
> Sign analysis gives:
>
> - $f'(x)<0$ on $(-\infty,-2)$;
> - $f'(x)>0$ on $(-2,2)$;
> - $f'(x)<0$ on $(2,\infty)$.
>
> Therefore,
>
> $$
> f(-2)=-16
> $$
>
> is a local minimum and
>
> $$
> f(2)=16
> $$
>
> is a local maximum.
>
> Hence,
>
> $$
> \boxed{\text{local minimum }(-2,-16)}
> $$
>
> and
>
> $$
> \boxed{\text{local maximum }(2,16)}.
> $$
>
> ### Shape
>
> Since the leading term is $-x^3$,
>
> $$
> x\to-\infty
> \Rightarrow
> f(x)\to\infty
> $$
>
> and
>
> $$
> x\to\infty
> \Rightarrow
> f(x)\to-\infty.
> $$
>
> Also,
>
> $$
> f''(x)=-6x,
> $$
>
> so $(0,0)$ is a point of inflection.
>
> These features determine the full sketch.

## Review First

- [[Function Transformations 1]]
- [[Factoring Polynomials 1]]

## Explore Also

- [[Polynomial Functions 8]]
- [[Sketching Polynomial Functions 2]]
- [[Completing the Square 1]]
- [[Polynomial Functions 28 - Checking Reasoning]]

## Build Toward

