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

Consider

$$
h(x)=\frac{6x^5(x-4)}{9x^2(x-4)(x+1)}.
$$

1. Simplify $h(x)$ and state all restrictions from the original expression.
2. Classify each non-permissible value as a hole or a vertical asymptote.
3. Determine the coordinates of every hole.
4. Does the graph have an $x$-intercept? Explain.

> [!abstract] Review First
> - [[Math/Rational Expressions & Equations/Simplifying Rational Expressions 3|Simplifying Rational Expressions 3]]
> - [[Math/Rational Expressions & Equations/Non-Permissible Values 1|Non-Permissible Values 1]]
> - [[Math/Exponential Functions/Exponent Laws 1|Exponent Laws 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Rational Expressions & Equations/Rational Functions - Holes and Vertical Asymptotes 1|Rational Functions - Holes and Vertical Asymptotes 1]]
> - [[Math/Rational Expressions & Equations/Rational Functions - Equivalent Rules and Domains 1|Rational Functions - Equivalent Rules and Domains 1]]
> - [[Math/Relations and Functions/Domain and Range - Reciprocal and Quadratic Functions|Domain and Range - Reciprocal and Quadratic Functions]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Relations and Functions/Domain & Range Algebraically 1|Domain & Range Algebraically 1]]
> - [[Math/Relations and Functions/Domain and Range - Reciprocal and Quadratic Functions|Domain and Range - Reciprocal and Quadratic Functions]]
> - [[Math/Rational Expressions & Equations/Solving Rational Equations 1|Solving Rational Equations 1]]

## Solution

> [!example]- Show solution
>
> From the original denominator,
>
> $$
> 9x^2(x-4)(x+1)\ne0,
> $$
>
> so
>
> $$
> x\ne0,4,-1.
> $$
>
> Simplify:
>
> $$
> \begin{aligned}
> h(x)
> &=\frac{6x^5(x-4)}{9x^2(x-4)(x+1)}\\
> &=\frac{2x^3}{3(x+1)}.
> \end{aligned}
> $$
>
> Therefore,
>
> $$
> \boxed{h(x)=\frac{2x^3}{3(x+1)}},\qquad \boxed{x\ne-1,0,4}.
> $$
>
> The factors associated with $x=0$ and $x=4$ cancel, so both are holes. The factor $x+1$ remains in the denominator, so
>
> $$
> \boxed{x=-1}
> $$
>
> is a vertical asymptote.
>
> For $x=0$,
>
> $$
> y=0,
> $$
>
> so one hole is
>
> $$
> \boxed{(0,0)}.
> $$
>
> For $x=4$,
>
> $$
> y=\frac{2(4)^3}{3(5)}=\frac{128}{15},
> $$
>
> so the second hole is
>
> $$
> \boxed{\left(4,\frac{128}{15}\right)}.
> $$
>
> The simplified numerator is zero only when $x=0$, but $x=0$ is excluded from the original domain. Therefore the graph has
>
> $$
> \boxed{\text{no }x\text{-intercept}}.
> $$
