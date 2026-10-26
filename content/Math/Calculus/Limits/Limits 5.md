---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Limits"
show_solution: true
---

For the piecewise function $f(x ) =
\begin{cases}
x^2-2 & \mbox{, if } x<0 \\
1 & \mbox{, if } 0 \leq x<3 \\
4-x & \mbox{, if } x \geq 3
\end{cases}$

1. Algebraically determine whether $f(x)$ is continuous at $x=0,3$.
2. Sketch the function.

## Solution

> [!example]- Show solution
>
> The function is
>
> $$
> f(x)=
> \begin{cases}
> x^2-2, & x<0,\\
> 1, & 0\leq x<3,\\
> 4-x, & x\geq3.
> \end{cases}
> $$
>
> ### At $x=0$
>
> From the left,
>
> $$
> \lim_{x\to0^-}f(x)
> =
> 0^2-2
> =
> -2.
> $$
>
> From the right,
>
> $$
> \lim_{x\to0^+}f(x)=1.
> $$
>
> Since
>
> $$
> -2\neq1,
> $$
>
> the limit does not exist.
>
> Therefore,
>
> $$
> \boxed{f\text{ is discontinuous at }x=0}.
> $$
>
> ### At $x=3$
>
> From the left,
>
> $$
> \lim_{x\to3^-}f(x)=1.
> $$
>
> From the right,
>
> $$
> \lim_{x\to3^+}f(x)
> =
> 4-3
> =
> 1.
> $$
>
> Also,
>
> $$
> f(3)=1.
> $$
>
> Therefore,
>
> $$
> \boxed{f\text{ is continuous at }x=3}.
> $$
>
> ### Sketch features
>
> - draw $y=x^2-2$ for $x<0$, with an open point at $(0,-2)$;
> - draw $y=1$ for $0\leq x<3$, with a closed point at $(0,1)$ and open point at $(3,1)$;
> - draw $y=4-x$ for $x\geq3$, with a closed point at $(3,1)$.
>
> > [!info]- Legacy video solution
> > https://www.youtube.com/embed/0xF4Xw1DxIk

> [!abstract] Review First
> - [[Math/Relations and Functions/Properties of Functions 1|Properties of Functions 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Calculus/Limits/Limits 4|Limits 4]]
> - [[Math/Calculus/Limits/Limits 6|Limits 6]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
