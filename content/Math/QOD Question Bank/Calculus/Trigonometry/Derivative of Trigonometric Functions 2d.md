---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Trigonometric Derivatives"
show_solution: true
---

## Question

Differentiate the following functions.

1. $f(x)=2\cos(x)-6\sec(x)+3$
2. $g(z)=10\tan(z)-2\cot(z)$
3. $f(w)=\tan(w)\sec(w)$
4. $h(t)=t^3-t^2\sin(t)$
5. $Z(v)=\dfrac{v+\tan(v)}{1+\csc(v)}$
6. $y=5\sin(x)\cos(x)+4\csc(x)$
7. $R(t)=\dfrac{1}{2\sin(t)-4\cos(t)}$

## Solution

> [!example]- Show solution
>
> ### 1.
>
> $$
> f'(x)=-2\sin(x)-6\sec(x)\tan(x).
> $$
>
> ### 2.
>
> $$
> g'(z)=10\sec^2(z)+2\csc^2(z).
> $$
>
> ### 3.
>
> Using the Product Rule,
>
> $$
> f'(w)=\sec^2(w)\sec(w)+\tan(w)\bigl(\sec(w)\tan(w)\bigr),
> $$
>
> so
>
> $$
> \boxed{f'(w)=\sec^3(w)+\sec(w)\tan^2(w)}.
> $$
>
> ### 4.
>
> Using the Product Rule on $t^2\sin(t)$,
>
> $$
> h'(t)=3t^2-\left(2t\sin(t)+t^2\cos(t)\right).
> $$
>
> Therefore,
>
> $$
> \boxed{h'(t)=3t^2-2t\sin(t)-t^2\cos(t)}.
> $$
>
> ### 5.
>
> Using the Quotient Rule,
>
> $$
> Z'(v)
> =
> \frac{(1+\sec^2 v)(1+\csc v)-(v+\tan v)(-\csc v\cot v)}
> {(1+\csc v)^2}.
> $$
>
> Thus,
>
> $$
> \boxed{
> Z'(v)
> =
> \frac{(1+\sec^2 v)(1+\csc v)+(v+\tan v)\csc v\cot v}
> {(1+\csc v)^2}
> }.
> $$
>
> ### 6.
>
> $$
> y'
> =
> 5\cos^2(x)-5\sin^2(x)-4\csc(x)\cot(x).
> $$
>
> Hence,
>
> $$
> \boxed{y'=5\cos^2(x)-5\sin^2(x)-4\csc(x)\cot(x)}.
> $$
>
> ### 7.
>
> Write
>
> $$
> R(t)=\left(2\sin t-4\cos t\right)^{-1}.
> $$
>
> Then
>
> $$
> R'(t)
> =
> -\left(2\sin t-4\cos t\right)^{-2}
> \left(2\cos t+4\sin t\right).
> $$
>
> Therefore,
>
> $$
> \boxed{
> R'(t)=
> -\frac{2\cos t+4\sin t}{(2\sin t-4\cos t)^2}
> }.
> $$

## Review First

- [[Chain Rule 1]]
- [[Angular Measure 1]]

## Explore Also

- [[Derivative of Trigonometric Functions 2c]]
- [[Derivative of Trigonometric Functions 3]]

## Build Toward
