---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Limits"
show_solution: true
---

## Question

Consider

$$
f(x)=
\begin{cases}
x+8, & x<-6,\\
5, & x=-6,\\
2, & -6<x<1,\\
-1, & x=1,\\
x, & 1<x<5,\\
0, & x=5,\\
10-x, & 5<x<7,\\
6, & x=7,\\
x-4, & x>7.
\end{cases}
$$

Evaluate:

1. $\displaystyle \lim_{x\to5}f(x)$
2. $f(-2)$
3. $\displaystyle \lim_{x\to7}f(x)$
4. $f(7)$
5. $\displaystyle \lim_{x\to1}f(x)$
6. $f(1)$
7. $\displaystyle \lim_{x\to-6}f(x)$
8. $f(-6)$

## Solution

> [!example]- Show solution
>
> ### 1.
>
> As $x\to5^-$,
>
> $$
> f(x)=x\to5.
> $$
>
> As $x\to5^+$,
>
> $$
> f(x)=10-x\to5.
> $$
>
> Therefore,
>
> $$
> \boxed{\lim_{x\to5}f(x)=5}.
> $$
>
> ### 2.
>
> Since $-6<-2<1$,
>
> $$
> \boxed{f(-2)=2}.
> $$
>
> ### 3.
>
> As $x\to7^-$,
>
> $$
> 10-x\to3,
> $$
>
> and as $x\to7^+$,
>
> $$
> x-4\to3.
> $$
>
> Thus,
>
> $$
> \boxed{\lim_{x\to7}f(x)=3}.
> $$
>
> ### 4.
>
> $$
> \boxed{f(7)=6}.
> $$
>
> ### 5.
>
> As $x\to1^-$,
>
> $$
> f(x)\to2,
> $$
>
> while as $x\to1^+$,
>
> $$
> f(x)=x\to1.
> $$
>
> The one-sided limits are different, so
>
> $$
> \boxed{\lim_{x\to1}f(x)\text{ does not exist}}.
> $$
>
> ### 6.
>
> $$
> \boxed{f(1)=-1}.
> $$
>
> ### 7.
>
> From both sides,
>
> $$
> f(x)\to2.
> $$
>
> Therefore,
>
> $$
> \boxed{\lim_{x\to-6}f(x)=2}.
> $$
>
> ### 8.
>
> $$
> \boxed{f(-6)=5}.
> $$

## Review First

- [[Properties of Functions 1]]

## Explore Also

- [[Limits 9]]
- [[Limits 11]]

## Build Toward
