---
type: qod
publish: true
course:
  - "Mathematics 10C"
  - "Mathematics 30-1"
topic: "Factoring Polynomials"
show_solution: true
---

1. Factor $x^2+y-x-xy$
2. Factor $36a^2-121d^2$
3. Factor $(3x^3-27x)-(x^2-9)$
4. The volume of a rectangular prism is $V(x)=10x^3-25x^2-60x$. Determine the expressions for the length, width and height of the prism. Assume height > length > width.

## Solution

> [!example]- Show solution
>
> ### A. Grouping
>
> $$
> \begin{aligned}
> x^2+y-x-xy &=x^2-x+y-xy\\
> &=x(x-1)-y(x-1)\\
> &=\boxed{(x-y)(x-1)}.
> \end{aligned}
> $$
>
> ### B. Difference of squares
>
> $$
> 36a^2-121d^2=\boxed{(6a-11d)(6a+11d)}.
> $$
>
> ### C. Grouping and difference of squares
>
> $$
> \begin{aligned}
> (3x^3-27x)-(x^2-9)&=3x(x^2-9)-(x^2-9)\\
> &=(3x-1)(x^2-9)\\
> &=\boxed{(3x-1)(x-3)(x+3)}.
> \end{aligned}
> $$
>
> ### D. Volume model
>
> First remove the GCF:
>
> $$
> V(x)=10x^3-25x^2-60x=5x(2x^2-5x-12).
> $$
>
> **Decomposition ($a\ne1$).**
>
> Identify the numerical coefficients $a=2$, $b=-5$, and $c=-12$. Thus $ac=-24$; we need two numbers with product $-24$ and sum $-5$. Since $ac$ is negative, the numbers have opposite signs.
>
> - **Sequential division:** Test divisors $1,2,3,\ldots$ of $|ac|=24$ until a factor pair has the required difference: $24\div1=24$ (difference $23$); $24\div2=12$ (difference $10$); $24\div3=8$ (difference $5$, **match**).
> - **Square-root-guided search:** $\sqrt{24}\approx 4.90$, so the possible smaller divisors end at $4$. Start at $4$ and work downward: $24\div4=6$ (difference $2$); $24\div3=8$ (difference $5$, **match**).
>
> The required numbers are $m=-8$ and $n=3$: $-8+(3)=-5$ and $(-8)(3)=-24$.
>
> $$
> \begin{aligned}
> V(x)&=5x(2x^2-8x+3x-12)\\
> &=5x[2x(x-4)+3(x-4)]\\
> &=\boxed{5x(2x+3)(x-4)}.
> \end{aligned}
> $$
>
> The three algebraic expressions for the dimensions are $5x$, $2x+3$, and $x-4$ (subject to the context and positive dimensions). Under the question\'s stated ordering, the assignment $\text{height}=5x$, $\text{length}=2x+3$, $\text{width}=x-4$ is valid when $x>4$; for other permissible values, the ordering must be rechecked.
>

> [!abstract] Review First
> - [[Math/Polynomials/Polynomial Operations 1|Polynomial Operations 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Polynomials/Factoring Polynomials 4|Factoring Polynomials 4]]
> - [[Math/Polynomials/Polynomial Equations 1|Polynomial Equations 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
