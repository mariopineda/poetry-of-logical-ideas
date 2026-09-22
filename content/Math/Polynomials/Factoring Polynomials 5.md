---
type: qod
publish: true
course:
  - "Mathematics 10C"
  - "Mathematics 30-1"
topic: "Factoring Polynomials"
show_solution: false
---

## Question

1. Factor $x^2+y-x-xy$
2. Factor $36a^2-121d^2$
3. Factor $(3x^3-27x)-(x^2-9)$
4. The volume of a rectangular prism is $V(x)=10x^3-25x^2-60x$. Determine the expressions for the length, width and height of the prism. Assume height > length > width.

## Solution

> [!example]- Show solution
>
> ### A.
>
> Factor a 4-term polynomial by grouping.
> $$
> \begin{array}{cl}
> & x^2+y-x-xy & \\
> = & x^2-x+y-xy & \mbox{Rearrange order of terms}\\
> = & x(x-1)-y(x-1) & \mbox{Factor out GCFs from pair of terms} \\
> = & \boxed{(x-y)(x-1)} & \mbox{Rewrite GCFs as binomial}
> \end{array}
> $$
>
> ### B.
>
> $$
> \begin{array}{cl}
> & 36a^2-121d^2 & \\
> = & \boxed{(6a-11d)(6a+11d)} & \mbox{Factor as a difference of squares}
> \end{array}
> $$
>
> ### C.
>
> $$
> \begin{array}{cl}
> & (3x^3-27x)-(x^2-9) & \\
> = & 3x(x^2-9)-(x^2-9) & \mbox{Factor out GCF} \\
> = & 3x(x-3)(x+3)-(x^2-9) & \mbox{Factor first term as a difference of squares} \\
> = & \boxed{3x(x-3)(x+3)-(x-3)(x+3)} & \mbox{Factor second term as a difference of squares}
> \end{array}
> $$
>
> ### D.
>
> $$
> \begin{array}{cl}
> V(x) = & 10x^3-25x^2-60x & \\
> V(x) = & 5x(2x^2-5x-12) & \mbox{Factor out GCF} \\
> V(x) = & 5x(2x^2-8x+3x-12) & \mbox{Decompose middle term} \\
> V(x) = & 5x[2x(x-4)+3(x-4)] & \mbox{Factor by grouping} \\
> V(x) = & \boxed{5x(2x+3)(x-4)} & \mbox{Rewrite GCFs as binomial} \\
> \end{array}
> $$
> Since $\mbox{height} > \mbox{length} > \mbox{width}$, $\mbox{height}=5x$, $\mbox{length}=(2x+3)$ and $\mbox{width}=(x-4)$.
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
