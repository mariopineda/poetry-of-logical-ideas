---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Derivatives"
show_solution: true
---

For each function, identify the $x$-value at which the derivative does not exist.

### A.

$$
f(x)=|x-2|
$$

### B.

$$
g(x)=\sqrt[3]{x}
$$

### C.

$$
h(x)=\frac{1}{x+3}
$$

### D.

$$
p(x)=
\begin{cases}
x+1, & x<1,\\
x^2, & x\geq1.
\end{cases}
$$

For each case, briefly state why differentiability fails.

## Solution

> [!example]- Show solution
>
> ### A.
>
> $$
> f(x)=|x-2|
> $$
>
> has a sharp corner at
>
> $$
> \boxed{x=2}.
> $$
>
> The left-hand and right-hand derivatives are different.
>
> ### B.
>
> $$
> g(x)=\sqrt[3]{x}
> $$
>
> has a vertical tangent at
>
> $$
> \boxed{x=0}.
> $$
>
> Its derivative,
>
> $$
> g'(x)=\frac{1}{3x^{2/3}},
> $$
>
> is undefined at $x=0$.
>
> ### C.
>
> $$
> h(x)=\frac{1}{x+3}
> $$
>
> is not defined at
>
> $$
> \boxed{x=-3},
> $$
>
> so it cannot be differentiable there.
>
> ### D.
>
> At $x=1$,
>
> $$
> \lim_{x\to1^-}p(x)=2
> $$
>
> while
>
> $$
> p(1)=1.
> $$
>
> The function is discontinuous, so it is not differentiable at
>
> $$
> \boxed{x=1}.
> $$

> [!abstract] Review First
> - [[Math/Calculus/Trigonometry/Limits of Trig Functions 1|Limits of Trig Functions 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Calculus/Derivatives/Derivatives 2|Derivatives 2]]
> - [[Math/Calculus/Derivatives/Derivatives 4|Derivatives 4]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
