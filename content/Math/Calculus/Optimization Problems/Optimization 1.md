---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Optimization"
show_solution: true
---

For

$$
f(x)=
\begin{cases}
x^2-4, & -3\leq x<0,\\
2-5x, & 0\leq x\leq3,
\end{cases}
$$

identify:

1. the absolute maximum;
2. the absolute minimum;
3. any **interior** local maxima or minima.

Support your conclusions with a rough sketch or sign/shape analysis.

## Solution

> [!example]- Show solution
>
> On
>
> $$
> -3\leq x<0,
> $$
>
> the function is
>
> $$
> f(x)=x^2-4.
> $$
>
> This branch decreases from
>
> $$
> f(-3)=5
> $$
>
> toward $-4$ as $x\to0^-$, but $-4$ is not attained on this branch.
>
> On
>
> $$
> 0\leq x\leq3,
> $$
>
> the function is
>
> $$
> f(x)=2-5x,
> $$
>
> which decreases from
>
> $$
> f(0)=2
> $$
>
> to
>
> $$
> f(3)=-13.
> $$
>
> Therefore:
>
> ### Absolute maximum
>
> $$
> \boxed{f(-3)=5}.
> $$
>
> ### Absolute minimum
>
> $$
> \boxed{f(3)=-13}.
> $$
>
> ### Interior local extrema
>
> At $x=0$, values immediately to the left are near $-4$, while values immediately to the right are less than $2$. Therefore,
>
> $$
> \boxed{(0,2)}
> $$
>
> is an interior local maximum.
>
> There is no interior local minimum.

> [!abstract] Review First
> - [[Math/Calculus/Derivatives/Derivatives 1|Derivatives 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Calculus/Optimization Problems/Area of a Rectangle|Area of a Rectangle]]
> - [[Math/Calculus/Optimization Problems/Optimization 2|Optimization 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
