---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Limits"
show_solution: true
---


Consider

$$
f(x)=
\begin{cases}
x+7, & x<-5,\\
5, & x=-5,\\
2, & -5<x\leq -1,\\
x+3, & -1<x<2,\\
0, & x=2,\\
7-x, & 2<x<9,\\
4, & x=9,\\
1, & x>9.
\end{cases}
$$

Evaluate:

1.

$$
\lim_{x\to -1}f(x)
$$

2.

$$
\lim_{x\to 9}f(x)
$$

3.

$$
f(-5)
$$

4.

$$
\lim_{x\to -5}f(x)
$$

5.

$$
f(2)
$$

6.

$$
\lim_{x\to 2}f(x)
$$

## Solution

> [!example]- Show solution
>
>
> ### 1.
>
> As $x\to-1^-$,
>
> $$
> f(x)\to2.
> $$
>
> As $x\to-1^+$,
>
> $$
> x+3\to2.
> $$
>
> Therefore,
>
> $$
> \boxed{
> \lim_{x\to-1}f(x)=2
> }.
> $$
>
> ### 2.
>
> As $x\to9^-$,
>
> $$
> 7-x\to-2.
> $$
>
> As $x\to9^+$,
>
> $$
> f(x)\to1.
> $$
>
> Since the one-sided limits are different,
>
> $$
> \boxed{
> \lim_{x\to9}f(x)\text{ does not exist}
> }.
> $$
>
> ### 3.
>
> From the definition,
>
> $$
> \boxed{f(-5)=5}.
> $$
>
> ### 4.
>
> As $x\to-5^-$,
>
> $$
> x+7\to2,
> $$
>
> and as $x\to-5^+$,
>
> $$
> f(x)\to2.
> $$
>
> Thus,
>
> $$
> \boxed{
> \lim_{x\to-5}f(x)=2
> }.
> $$
>
> ### 5.
>
> From the definition,
>
> $$
> \boxed{f(2)=0}.
> $$
>
> ### 6.
>
> As $x\to2^-$,
>
> $$
> x+3\to5,
> $$
>
> and as $x\to2^+$,
>
> $$
> 7-x\to5.
> $$
>
> Therefore,
>
> $$
> \boxed{
> \lim_{x\to2}f(x)=5
> }.
> $$
>
> > [!info]- Legacy video solution
> > https://www.youtube.com/embed/ItZft9Ia14g

> [!abstract] Review First
> - [[Math/Relations and Functions/Properties of Functions 1|Properties of Functions 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Calculus/Limits/Limits 3|Limits 3]]
> - [[Math/Calculus/Limits/Limits 5|Limits 5]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
