---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Sequences and Series"
show_solution: true
---

Evaluate, if possible.

#### A.

$$
\lim_{n \to \infty} \frac{(4n+1)(2-3n)}{(6n+11)(n-15)}
$$

#### B.

$$
\lim_{n \to \infty} \frac{(2n-7)^3}{(9-5n)^3}
$$

#### C.

$$
\lim_{n \to -\infty} \frac{\sqrt{9n^2-4n+25}}{6n-7}
$$

## Solution

> [!example]- Show solution
>
> ### A.
>
> $$
> \lim_{n\to\infty}
> \frac{(4n+1)(2-3n)}
> {(6n+11)(n-15)}.
> $$
>
> Using the leading terms,
>
> $$
> \frac{(4n)(-3n)}
> {(6n)(n)}
> =
> \frac{-12}{6}.
> $$
>
> Therefore,
>
> $$
> \boxed{-2}.
> $$
>
> ### B.
>
> $$
> \lim_{n\to\infty}
> \frac{(2n-7)^3}
> {(9-5n)^3}.
> $$
>
> Using the leading terms,
>
> $$
> \frac{(2n)^3}{(-5n)^3}
> =
> \boxed{-\frac8{125}}.
> $$
>
> ### C.
>
> $$
> \lim_{n\to-\infty}
> \frac{\sqrt{9n^2-4n+25}}
> {6n-7}.
> $$
>
> Factor $n^2$ inside the radical:
>
> $$
> \sqrt{n^2\left(9-\frac4n+\frac{25}{n^2}\right)}
> =
> |n|
> \sqrt{9-\frac4n+\frac{25}{n^2}}.
> $$
>
> Because
>
> $$
> n\to-\infty,
> $$
>
> we have
>
> $$
> |n|=-n.
> $$
>
> Therefore,
>
> $$
> \frac{|n|}{n}
> \to-1,
> $$
>
> and the remaining factor approaches
>
> $$
> \frac{3}{6}.
> $$
>
> Thus,
>
> $$
> \boxed{-\frac12}.
> $$
>
> > [!info]- Legacy video solution
> > https://www.youtube.com/embed/Vkt-rNztL4w

> [!abstract] Review First
> - [[Math/Relations and Functions/Linear Relations 1|Linear Relations 1]]
> - [[Math/Exponential Functions/Exponent Laws 1|Exponent Laws 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Sequences and Series/Infinite Sequences 4|Infinite Sequences 4]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
