---
type: qod
publish: true
courses:
  - "Math 10C"
  - "Math 30-1"
topic: "Domain and Range"
show_solution: true
prerequisites:
  - "[[Representing Relations 1]]"
related:
  - "[[Domain & Range Algebraically 2]]"
---

## Question

State the domain in interval notation.

1. $y=\sqrt[3]{64-x^2}$
2. $y=-\frac{7}{x^3+1}$
3. $y=\frac{-3}{x^3+2x^2-9x-18}$
4. $y=\sqrt[4]{x^2-25}$
5. $y=\frac{1}{\sqrt{x^2+x-12}}$
6. $y=\frac{2}{x\sqrt{11-x}}$

## Solution

> [!example]- Show solution
>
> ### 1. $y=\sqrt[3]{64-x^2}$
>
> A cube root is defined for every real radicand, so there is no restriction on $x$.
>
> $$
> \boxed{(-\infty,\infty)}
> $$
>
> ### 2. $y=-\dfrac{7}{x^3+1}$
>
> The denominator cannot equal zero:
>
> $$
> x^3+1=(x+1)(x^2-x+1)\ne0.
> $$
>
> The only real restriction is $x\ne-1$.
>
> $$
> \boxed{(-\infty,-1)\cup(-1,\infty)}
> $$
>
> ### 3. $y=\dfrac{-3}{x^3+2x^2-9x-18}$
>
> Factor the denominator:
>
> $$
> x^3+2x^2-9x-18
> =x^2(x+2)-9(x+2)
> $$
>
> $$
> =(x+2)(x^2-9)
> =(x+2)(x-3)(x+3).
> $$
>
> Therefore, $x\ne-3$, $x\ne-2$, and $x\ne3$.
>
> $$
> \boxed{(-\infty,-3)\cup(-3,-2)\cup(-2,3)\cup(3,\infty)}
> $$
>
> ### 4. $y=\sqrt[4]{x^2-25}$
>
> The expression under the fourth root must be greater than or equal to zero:
>
> $$
> x^2-25\ge0
> $$
>
> $$
> (x-5)(x+5)\ge0.
> $$
>
> Therefore, $x\le-5$ or $x\ge5$.
>
> $$
> \boxed{(-\infty,-5]\cup[5,\infty)}
> $$
>
> ### 5. $y=\dfrac{1}{\sqrt{x^2+x-12}}$
>
> Because the square root is in the denominator, the radicand must be strictly positive:
>
> $$
> x^2+x-12>0
> $$
>
> $$
> (x+4)(x-3)>0.
> $$
>
> Therefore, $x<-4$ or $x>3$.
>
> $$
> \boxed{(-\infty,-4)\cup(3,\infty)}
> $$
>
> ### 6. $y=\dfrac{2}{x\sqrt{11-x}}$
>
> Because the square root is in the denominator, its radicand must be strictly positive:
>
> $$
> 11-x>0 \quad\Rightarrow\quad x<11.
> $$
>
> The factor $x$ is also in the denominator, so $x\ne0$.
>
> $$
> \boxed{(-\infty,0)\cup(0,11)}
> $$

