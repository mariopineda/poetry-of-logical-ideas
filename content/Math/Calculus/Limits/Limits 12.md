---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Limits"
show_solution: true
---

Sketch a function $y=f(x)$ satisfying each set of conditions. Answers will vary.

### A.

$$
\lim_{x\to2}f(x)=-3,
\qquad
f(2)\text{ is undefined}.
$$

### B.

$$
\lim_{x\to-4}f(x)
$$

does not exist, but

$$
f(-4)=6.
$$

## Solution

> [!example]- Show solution
>
> Answers will vary.
>
> ### A.
>
> One example is
>
> $$
> f(x)=x-5,
> \qquad x\neq2.
> $$
>
> This graph is the line $y=x-5$ with a hole at
>
> $$
> (2,-3).
> $$
>
> Hence,
>
> $$
> \lim_{x\to2}f(x)=-3,
> $$
>
> while $f(2)$ is undefined.
>
> ### B.
>
> One example is
>
> $$
> f(x)=
> \begin{cases}
> 0, & x<-4,\\
> 6, & x=-4,\\
> 2, & x>-4.
> \end{cases}
> $$
>
> Then
>
> $$
> \lim_{x\to-4^-}f(x)=0
> $$
>
> and
>
> $$
> \lim_{x\to-4^+}f(x)=2.
> $$
>
> Since the one-sided limits are different,
>
> $$
> \boxed{\lim_{x\to-4}f(x)\text{ does not exist}},
> $$
>
> while
>
> $$
> \boxed{f(-4)=6}.
> $$

> [!abstract] Review First
> - [[Math/Relations and Functions/Properties of Functions 1|Properties of Functions 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Calculus/Limits/Limits 11|Limits 11]]
> - [[Math/Calculus/Limits/Limits 13|Limits 13]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
