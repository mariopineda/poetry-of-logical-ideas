---
type: qod
publish: true
course:
  - "Mathematics 20-1"
topic: "Sequences and Series"
show_solution: true
---

Consider the series $4+4(2x-7)+4(2x-7)^2+\ldots$

#### A.

Determine $x$ such that the sum is covergent.

#### B.

Determine the infinite sum (in terms of $x$).

## Solution

> [!example]- Show solution
>
> The series is
>
> $$
> 4+4(2x-7)+4(2x-7)^2+\cdots.
> $$
>
> The first term is
>
> $$
> a=4
> $$
>
> and the common ratio is
>
> $$
> r=2x-7.
> $$
>
> ### A.
>
> An infinite geometric series converges when
>
> $$
> |r|<1.
> $$
>
> Thus,
>
> $$
> |2x-7|<1.
> $$
>
> This gives
>
> $$
> -1<2x-7<1.
> $$
>
> Add $7$:
>
> $$
> 6<2x<8.
> $$
>
> Divide by $2$:
>
> $$
> \boxed{3<x<4}.
> $$
>
> ### B.
>
> For $3<x<4$,
>
> $$
> S_\infty
> =
> \frac{a}{1-r}.
> $$
>
> Therefore,
>
> $$
> S_\infty
> =
> \frac{4}{1-(2x-7)}
> =
> \frac{4}{8-2x}
> =
> \boxed{\frac{2}{4-x}}.
> $$
>
> > [!info]- Legacy video solution
> > https://www.youtube.com/embed/CiJhWgSn6hA

> [!abstract] Review First
> - [[Math/Relations and Functions/Linear Relations 1|Linear Relations 1]]
> - [[Math/Exponential Functions/Exponent Laws 1|Exponent Laws 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Sequences and Series/Infinite Geometric Sequences 2|Infinite Geometric Sequences 2]]
> - [[Math/Sequences and Series/Infinite Geometric Sequences 4|Infinite Geometric Sequences 4]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
