---
type: qod
publish: true
course:
  - Mathematics 10C
  - Mathematics 30-2
topic: Quadratics
show_solution: true
---

Solve each equation by factoring.

### A.

$$
x^2-x-12=0
$$

### B.

$$
3x^2-10x-8=0
$$

## Solution

> [!example]- Show solution
>
> ### A. $x^{2} - x - 12=0$
>
> **Inspection ($a=1$).**
>
> Identify the numerical coefficients $a=1$, $b=-1$, and $c=-12$. Thus $ac=-12$; we need two numbers with product $-12$ and sum $-1$. Since $ac$ is negative, the numbers have opposite signs.
>
> - **Sequential division:** Test divisors $1,2,3,\ldots$ of $|ac|=12$ until a factor pair has the required difference: $12\div1=12$ (difference $11$); $12\div2=6$ (difference $4$); $12\div3=4$ (difference $1$, **match**).
> - **Square-root-guided search:** $\sqrt{12}\approx 3.46$, so the possible smaller divisors end at $3$. Start at $3$ and work downward: $12\div3=4$ (difference $1$, **match**).
>
> The required numbers are $m=-4$ and $n=3$: $-4+(3)=-1$ and $(-4)(3)=-12$.
>
> $$
> \begin{aligned}
> x^2-x-12 &= (x-4)(x+3)=0\\
> \implies\quad &\boxed{x=4,\;-3}.
> \end{aligned}
> $$
>
> ### B. $3 x^{2} - 10 x - 8=0$
>
> **Decomposition ($a\ne1$).**
>
> Identify the numerical coefficients $a=3$, $b=-10$, and $c=-8$. Thus $ac=-24$; we need two numbers with product $-24$ and sum $-10$. Since $ac$ is negative, the numbers have opposite signs.
>
> - **Sequential division:** Test divisors $1,2,3,\ldots$ of $|ac|=24$ until a factor pair has the required difference: $24\div1=24$ (difference $23$); $24\div2=12$ (difference $10$, **match**).
> - **Square-root-guided search:** $\sqrt{24}\approx 4.90$, so the possible smaller divisors end at $4$. Start at $4$ and work downward: $24\div4=6$ (difference $2$); $24\div3=8$ (difference $5$); $24\div2=12$ (difference $10$, **match**).
>
> The required numbers are $m=-12$ and $n=2$: $-12+(2)=-10$ and $(-12)(2)=-24$.
>
> $$
> \begin{aligned}
> 3x^2-10x-8 &=3x^2-12x+2x-8\\
> &=3x(x-4)+2(x-4)\\
> &=(3x+2)(x-4)=0\\
> \implies\quad &\boxed{x=-\tfrac23,\;4}.
> \end{aligned}
> $$
>

> [!abstract] Review First
> - [[Math/Polynomials/Factoring Polynomials 4|Factoring Polynomials 4]]
> - [[Math/Quadratics/Quadratic Equations 1|Quadratic Equations 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Quadratics/Solving Quadratic Equations by Factoring 1|Solving Quadratic Equations by Factoring 1]]
> - [[Math/Quadratics/Solving Quadratic Equations by Factoring 3|Solving Quadratic Equations by Factoring 3]]
> - [[Math/Quadratics/Quadratic Equations 2|Quadratic Equations 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Polynomials/Polynomial Equations 1|Polynomial Equations 1]]
> - [[Math/Rational Expressions & Equations/Solving Rational Equations 1|Solving Rational Equations 1]]
