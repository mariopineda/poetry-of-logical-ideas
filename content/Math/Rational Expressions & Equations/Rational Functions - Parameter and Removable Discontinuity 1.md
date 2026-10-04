---
type: qod
publish: true
course:
  - "Mathematics 20-1"
  - "Mathematics 30-1"
topic: "Rational Expressions"
show_solution: true
---


## Question

Consider the family of rational functions

$$
g_k(x)=\frac{x^2+kx-12}{4-x}.
$$

Determine the value of $k$ for which $x=4$ is a removable discontinuity. Then:

1. simplify the resulting rational expression;
2. state its restriction;
3. determine the coordinates of the hole;
4. give the equation of the line whose graph is identical to the rational function except at the hole.

> [!abstract] Review First
> - [[Math/Rational Expressions & Equations/Simplifying Rational Expressions 2|Simplifying Rational Expressions 2]]
> - [[Math/Rational Expressions & Equations/Non-Permissible Values 1|Non-Permissible Values 1]]
> - [[Math/Polynomials/Factoring Polynomials 3|Factoring Polynomials 3]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Rational Expressions & Equations/Rational Functions - Holes and Vertical Asymptotes 1|Rational Functions - Holes and Vertical Asymptotes 1]]
> - [[Math/Rational Expressions & Equations/Rational Expressions - Error Analysis 1|Rational Expressions - Error Analysis 1]]
> - [[Math/Relations and Functions/Domain & Range Algebraically 1|Domain & Range Algebraically 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Relations and Functions/Domain & Range Algebraically 1|Domain & Range Algebraically 1]]
> - [[Math/Relations and Functions/Domain and Range - Reciprocal and Quadratic Functions|Domain and Range - Reciprocal and Quadratic Functions]]
> - [[Math/Rational Expressions & Equations/Solving Rational Equations 1|Solving Rational Equations 1]]

## Solution

> [!example]- Show solution
>
> For $x=4$ to be a removable discontinuity, the numerator must also equal zero when $x=4$:
>
> $$
> 4^2+4k-12=0.
> $$
>
> Thus,
>
> $$
> 16+4k-12=0
> $$
>
> $$
> 4+4k=0
> $$
>
> $$
> \boxed{k=-1}.
> $$
>
> The function becomes
>
> $$
> g(x)=\frac{x^2-x-12}{4-x}.
> $$
>
> Factor:
>
> $$
> x^2-x-12=(x-4)(x+3)
> $$
>
> and
>
> $$
> 4-x=-(x-4).
> $$
>
> Therefore,
>
> $$
> g(x)=-(x+3),\qquad x\ne4.
> $$
>
> Hence
>
> $$
> \boxed{g(x)=-x-3},\qquad \boxed{x\ne4}.
> $$
>
> At the excluded value,
>
> $$
> y=-4-3=-7.
> $$
>
> so the hole is
>
> $$
> \boxed{(4,-7)}.
> $$
>
> The corresponding line is
>
> $$
> \boxed{y=-x-3}.
> $$
