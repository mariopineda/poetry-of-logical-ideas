---
type: qod
publish: true
course:
  - Mathematics 10C
  - Mathematics 30-2
  - Mathematics 20-1
topic: Quadratics
show_solution: true
---

Solve each equation by factoring.

### A.

$$
x^2+2x-15=0
$$

### B.

$$
2x^2-x-6=0
$$

## Solution

> [!example]- Show solution
>
> ### A. $x^{2} + 2 x - 15=0$
>
> **Inspection ($a=1$).**
>
> Identify the numerical coefficients $a=1$, $b=2$, and $c=-15$. Thus $ac=-15$; we need two numbers with product $-15$ and sum $2$. Since $ac$ is negative, the numbers have opposite signs.
>
> - **Sequential division:** Test divisors $1,2,3,\ldots$ of $|ac|=15$ until a factor pair has the required difference: $15\div1=15$ (difference $14$); $15\div2$ is not a whole number; $15\div3=5$ (difference $2$, **match**).
> - **Square-root-guided search:** $\sqrt{15}\approx 3.87$, so the possible smaller divisors end at $3$. Start at $3$ and work downward: $15\div3=5$ (difference $2$, **match**).
>
> The required numbers are $m=5$ and $n=-3$: $5+(-3)=2$ and $(5)(-3)=-15$.
>
> $$
> \begin{aligned}
> x^2+2x-15 &=(x+5)(x-3)=0\\
> \implies\quad &\boxed{x=-5,\;3}.
> \end{aligned}
> $$
>
> ### B. $2 x^{2} - x - 6=0$
>
> **Decomposition ($a\ne1$).**
>
> Identify the numerical coefficients $a=2$, $b=-1$, and $c=-6$. Thus $ac=-12$; we need two numbers with product $-12$ and sum $-1$. Since $ac$ is negative, the numbers have opposite signs.
>
> - **Sequential division:** Test divisors $1,2,3,\ldots$ of $|ac|=12$ until a factor pair has the required difference: $12\div1=12$ (difference $11$); $12\div2=6$ (difference $4$); $12\div3=4$ (difference $1$, **match**).
> - **Square-root-guided search:** $\sqrt{12}\approx 3.46$, so the possible smaller divisors end at $3$. Start at $3$ and work downward: $12\div3=4$ (difference $1$, **match**).
>
> The required numbers are $m=-4$ and $n=3$: $-4+(3)=-1$ and $(-4)(3)=-12$.
>
> $$
> \begin{aligned}
> 2x^2-x-6&=2x^2+3x-4x-6\\
> &=x(2x+3)-2(2x+3)\\
> &=(x-2)(2x+3)=0\\
> \implies\quad &\boxed{x=2,\;-\tfrac32}.
> \end{aligned}
> $$
>

> [!abstract] Review First
> - [[Math/Polynomials/Factoring Polynomials 4|Factoring Polynomials 4]]
> - [[Math/Quadratics/Quadratic Equations 1|Quadratic Equations 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Quadratics/Solving Quadratic Equations by Factoring 1|Solving Quadratic Equations by Factoring 1]]
> - [[Math/Quadratics/Solving Quadratic Equations by Factoring 2|Solving Quadratic Equations by Factoring 2]]
> - [[Math/Quadratics/Quadratic Equations 2|Quadratic Equations 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Polynomials/Polynomial Equations 1|Polynomial Equations 1]]
> - [[Math/Rational Expressions & Equations/Solving Rational Equations 1|Solving Rational Equations 1]]
