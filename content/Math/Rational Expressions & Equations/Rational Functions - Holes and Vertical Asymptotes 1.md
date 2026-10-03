---
type: qod
publish: true
course:
  - "Mathematics 20-1"
  - "Mathematics 30-1"
topic: "Rational Expressions"
show_solution: false
---


## Question

Consider the rational function

$$
f(x)=\frac{x^2-5x+6}{x^2-x-6}.
$$

1. Express $f(x)$ in simplest form and state all non-permissible values.
2. Classify each non-permissible value as either a **removable discontinuity (hole)** or a **vertical asymptote**.
3. Determine the coordinates of the hole.
4. Determine the $x$-intercept of the graph.

> [!abstract] Review First
> - [[Math/Rational Expressions & Equations/Simplifying Rational Expressions 1|Simplifying Rational Expressions 1]]
> - [[Math/Rational Expressions & Equations/Non-Permissible Values 1|Non-Permissible Values 1]]
> - [[Math/Polynomials/Factoring Polynomials 3|Factoring Polynomials 3]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Rational Expressions & Equations/Rational Functions - Parameter and Removable Discontinuity 1|Rational Functions - Parameter and Removable Discontinuity 1]]
> - [[Math/Rational Expressions & Equations/Rational Functions - Multiple Holes and Restrictions 1|Rational Functions - Multiple Holes and Restrictions 1]]
> - [[Math/Relations and Functions/Domain & Range Algebraically 1|Domain & Range Algebraically 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Relations and Functions/Domain & Range Algebraically 1|Domain & Range Algebraically 1]]
> - [[Math/Relations and Functions/Domain and Range - Reciprocal and Quadratic Functions|Domain and Range - Reciprocal and Quadratic Functions]]
> - [[Math/Rational Expressions & Equations/Solving Rational Equations 1|Solving Rational Equations 1]]

## Solution

> [!example]- Show solution
>
> Factor numerator and denominator:
>
> $$
> \begin{aligned}
> x^2-5x+6&=(x-2)(x-3),\\
> x^2-x-6&=(x-3)(x+2).
> \end{aligned}
> $$
>
> The original denominator gives
>
> $$
> x\ne3,-2.
> $$
>
> Cancel the common factor:
>
> $$
> f(x)=\frac{x-2}{x+2},\qquad x\ne3,-2.
> $$
>
> Therefore,
>
> $$
> \boxed{f(x)=\frac{x-2}{x+2}},\qquad \boxed{x\ne3,-2}.
> $$
>
> Because the factor $x-3$ cancels, $x=3$ is a removable discontinuity. Because $x+2$ remains in the denominator, $x=-2$ is a vertical asymptote.
>
> To find the hole, substitute $x=3$ into the simplified expression:
>
> $$
> y=\frac{3-2}{3+2}=\frac15.
> $$
>
> Hence the hole is
>
> $$
> \boxed{\left(3,\frac15\right)}.
> $$
>
> The $x$-intercept occurs when the numerator of the simplified expression is zero:
>
> $$
> x-2=0\quad\Rightarrow\quad x=2.
> $$
>
> Since $x=2$ is permitted, the $x$-intercept is
>
> $$
> \boxed{(2,0)}.
> $$
