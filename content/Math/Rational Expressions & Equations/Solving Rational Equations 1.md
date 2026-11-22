---
type: qod
publish: true
course:
  - "Mathematics 20-1"
topic: "Rational Equations"
show_solution: true
---

Solve the following rational equation $\frac{\displaystyle 2x}{\displaystyle x+3} - \frac{\displaystyle x}{\displaystyle x-3} = \frac{\displaystyle -18}{\displaystyle x^2-9}$

## Solution

> [!example]- Show solution
>
> The original denominators require $x
e-3$ and $x
e3$. The LCD is $(x+3)(x-3)$.
>
> $$
> \begin{aligned}
> \frac{2x}{x+3}-\frac{x}{x-3}&=\frac{-18}{(x+3)(x-3)}\\
> 2x(x-3)-x(x+3)&=-18\\
> x^2-9x+18&=0.
> \end{aligned}
> $$
>
> **Inspection ($a=1$).**
>
> Identify the numerical coefficients $a=1$, $b=-9$, and $c=18$. Thus $ac=18$; we need two numbers with product $18$ and sum $-9$. Since $ac$ is positive, the numbers have same signs.
>
> - **Sequential division:** Test divisors $1,2,3,\ldots$ of $|ac|=18$ until a factor pair has the required sum: $18\div1=18$ (sum $19$); $18\div2=9$ (sum $11$); $18\div3=6$ (sum $9$, **match**).
> - **Square-root-guided search:** $\sqrt{18}\approx 4.24$, so the possible smaller divisors end at $4$. Start at $4$ and work downward: $18\div4$ is not a whole number; $18\div3=6$ (sum $9$, **match**).
>
> The required numbers are $m=-6$ and $n=-3$: $-6+(-3)=-9$ and $(-6)(-3)=18$.
>
> $$
> \begin{aligned}
> x^2-9x+18&=(x-3)(x-6)=0\\
> \implies\quad &x=3\text{ or }x=6.
> \end{aligned}
> $$
>
> Since $x=3$ is non-permissible, the **only valid solution** is $\boxed{x=6}$.
>

> [!abstract] Review First
> - [[Math/Rational Expressions & Equations/Arithmetic Operations with Quotients|Arithmetic Operations with Quotients]]
> - [[Math/Quadratics/Solving Quadratic Equations by Factoring 1|Solving Quadratic Equations by Factoring 1]]
> - [[Math/Rational Expressions & Equations/Rational Expressions - Field Model 1|Rational Expressions - Field Model 1]]
> - [[Math/Rational Expressions & Equations/Dividing Rational Expressions 3|Dividing Rational Expressions 3]]
> - [[Math/Quadratics/Solving Quadratic Equations by Factoring 3|Solving Quadratic Equations by Factoring 3]]
> - [[Math/Rational Expressions & Equations/Simplifying Rational Expressions 4|Simplifying Rational Expressions 4]]
> - [[Math/Rational Expressions & Equations/Multiplying and Dividing Rational Expressions 1|Multiplying and Dividing Rational Expressions 1]]
> - [[Math/Rational Expressions & Equations/Dividing Rational Expressions 1|Dividing Rational Expressions 1]]
> - [[Math/Rational Expressions & Equations/Simplifying Rational Expressions 1|Simplifying Rational Expressions 1]]
> - [[Math/Rational Expressions & Equations/Rational Functions - Holes and Vertical Asymptotes 1|Rational Functions - Holes and Vertical Asymptotes 1]]
> - [[Math/Rational Expressions & Equations/Rational Functions - Parameter and Removable Discontinuity 1|Rational Functions - Parameter and Removable Discontinuity 1]]
> - [[Math/Rational Expressions & Equations/Simplifying Rational Expressions 3|Simplifying Rational Expressions 3]]
> - [[Math/Rational Expressions & Equations/Simplifying Rational Expressions 2|Simplifying Rational Expressions 2]]
> - [[Math/Rational Expressions & Equations/Simplifying Rational Expressions 7|Simplifying Rational Expressions 7]]
> - [[Math/Rational Expressions & Equations/Simplifying Rational Expressions 6|Simplifying Rational Expressions 6]]
> - [[Math/Rational Expressions & Equations/Simplifying Rational Expressions 5|Simplifying Rational Expressions 5]]
> - [[Math/Rational Expressions & Equations/Rational Functions - Equivalent Rules and Domains 1|Rational Functions - Equivalent Rules and Domains 1]]
> - [[Math/Rational Expressions & Equations/Rational Functions - Reciprocal Form and Asymptotes 1|Rational Functions - Reciprocal Form and Asymptotes 1]]
> - [[Math/Rational Expressions & Equations/Dividing Rational Expressions 2|Dividing Rational Expressions 2]]
> - [[Math/Quadratics/Solving Quadratic Equations by Factoring 2|Solving Quadratic Equations by Factoring 2]]
> - [[Math/Rational Expressions & Equations/Rational Functions - Multiple Holes and Restrictions 1|Rational Functions - Multiple Holes and Restrictions 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Rational Expressions & Equations/Solving Rational Equations 2|Solving Rational Equations 2]]
> - [[Math/Rational Expressions & Equations/Multiplying and Dividing Rational Expressions 3|Multiplying and Dividing Rational Expressions 3]]
> - [[Math/Rational Expressions & Equations/Multiplying and Dividing Rational Expressions 6|Multiplying and Dividing Rational Expressions 6]]
> - [[Math/Rational Expressions & Equations/Adding and Subtracting Rational Expressions 3|Adding and Subtracting Rational Expressions 3]]
> - [[Math/Rational Expressions & Equations/Multiplying and Dividing Rational Expressions 2|Multiplying and Dividing Rational Expressions 2]]
> - [[Math/Rational Expressions & Equations/Adding and Subtracting Rational Expressions 5|Adding and Subtracting Rational Expressions 5]]
> - [[Math/Rational Expressions & Equations/Multiplying and Dividing Rational Expressions 5|Multiplying and Dividing Rational Expressions 5]]
> - [[Math/Rational Expressions & Equations/Arithmetic Operations with Quotients|Arithmetic Operations with Quotients]]
> - [[Math/Rational Expressions & Equations/Adding and Subtracting Rational Expressions 2|Adding and Subtracting Rational Expressions 2]]
> - [[Math/Rational Expressions & Equations/Multiplying and Dividing Rational Expressions 4|Multiplying and Dividing Rational Expressions 4]]
> - [[Math/Rational Expressions & Equations/Evaluating Rational Expressions 1|Evaluating Rational Expressions 1]]
> - [[Math/Rational Expressions & Equations/Adding and Subtracting Rational Expressions 4|Adding and Subtracting Rational Expressions 4]]
> - [[Math/Rational Expressions & Equations/Adding and Subtracting Rational Expressions 1|Adding and Subtracting Rational Expressions 1]]
> - [[Math/Rational Expressions & Equations/Non-Permissible Values 1|Non-Permissible Values 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Rational Expressions and Equations/Finding riverboat speed using a rational equation|Finding riverboat speed using a rational equation]]
> - [[Math/Relations and Functions/Solving a rational equation|Solving a rational equation]]
