---
type: qod
publish: true
course:
  - "Mathematics 30-1"
  - "Mathematics 31"
topic: "Domain and Range"
show_solution: true
---

## Question

Algebraically determine the domain of:

1. $y=\frac{1}{x^2+5x}$
2. $y=\sqrt{x^3-49x}$

## Solution

> [!example]- Show solution
>
> ### 1. $y=\dfrac{1}{x^2+5x}$
>
> The denominator cannot equal zero:
>
> $$
> x^2+5x\ne0
> $$
>
> Factor the denominator:
>
> $$
> x(x+5)\ne0
> $$
>
> Therefore, $x\ne0$ and $x\ne-5$.
>
> **Domain**
>
> - Set-builder notation: $\{x\in\mathbb{R}\mid x\ne-5\text{ and }x\ne0\}$
> - Interval notation: $(-\infty,-5)\cup(-5,0)\cup(0,\infty)$
>
> ### 2. $y=\sqrt{x^3-49x}$
>
> The expression under the square root must be greater than or equal to zero:
>
> $$
> x^3-49x\ge0
> $$
>
> Factor:
>
> $$
> x(x^2-49)\ge0
> $$
>
> $$
> x(x-7)(x+7)\ge0
> $$
>
> The critical values are $x=-7$, $x=0$, and $x=7$. A sign analysis gives
>
> $$
> -7\le x\le0 \quad\text{or}\quad x\ge7.
> $$
>
> **Domain**
>
> - Set-builder notation: $\{x\in\mathbb{R}\mid -7\le x\le0\text{ or }x\ge7\}$
> - Interval notation: $[-7,0]\cup[7,\infty)$

> [!abstract] Review First
> - [[Math/Supporting Notes/Polynomials/Factoring Polynomials Work Sheet - Easy|Factoring Polynomials Work Sheet - Easy]]
> - [[Math/Supporting Notes/Radicals/Radicals|Radicals]]
> - [[Math/Supporting Notes/Concepts/Division by Zero|Division by Zero]]
> [!info] Explore Also
> - [[Math/Supporting Notes/Polynomials/Characteristics of Polynomial Functions|Characteristics of Polynomial Functions]]
> - [[Math/Supporting Notes/Polynomials/Graphs of Polynomial Functions (Student Notes)|Graphs of Polynomial Functions (Student Notes)]]
> - [[Math/Supporting Notes/Rational Expressions & Equations/Rational Expressions & Equations|Rational Expressions & Equations]]
> [!success] Build Toward
> - [[Math/Supporting Notes/Calculus/Calculus|Calculus]]

<!-- QOD-WEB-PRACTICE-START -->
> [!example] More QOD Practice
> - **Next QOD:** [[Math/Relations and Functions/Domain & Range Algebraically 2|Domain & Range Algebraically 2]]
<!-- QOD-WEB-PRACTICE-END -->
