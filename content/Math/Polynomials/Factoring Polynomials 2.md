---
type: qod
publish: true
course:
  - "Mathematics 10C"
  - "Mathematics 30-1"
topic: "Factoring Polynomials"
show_solution: true
qod_id: "QOD-32F951523A158CE815A06243"
title: "Factoring Polynomials 2"
aliases: []
domain: null
tags: []
learning_order: null
estimated_minutes: null
calculator: null
question_format: null
curriculum_alignment: []
cognitive_level: []
performance_standard: []
diploma_eligible: null
diploma_ready: null
source: null
source_kind: null
source_question: null
source_topic: null
source_format: null
source_equivalence: null
source_percent_correct: null
source_mean_score: null
assessment_metadata_origin: null
review_status: null
review_date: null
curriculum_review_required: null
---

Factor:

1.

$$
8a^3-27b^6
$$
2.

$$
64x^8-9y^2z^6
$$
3.

$$
16a^2-45b+72a-10ab
$$
4.

$$
a^2-ab^2-30b^4
$$
5.

$$
6x^2-13xy-15y^2
$$
6.

$$
(x-3)^4-1
$$

## Solution

> [!example]- Show solution
>
> ### 1. Difference of cubes
>
> $$
> \begin{aligned}
> 8a^3-27b^6&=(2a)^3-(3b^2)^3\\
> &=\boxed{(2a-3b^2)(4a^2+6ab^2+9b^4)}.
> \end{aligned}
> $$
>
> ### 2. Difference of squares
>
> $$
> 64x^8-9y^2z^6=\boxed{(8x^4-3yz^3)(8x^4+3yz^3)}.
> $$
>
> ### 3. Grouping
>
> $$
> \begin{aligned}
> 16a^2-45b+72a-10ab&=16a^2+72a-10ab-45b\\
> &=8a(2a+9)-5b(2a+9)\\
> &=\boxed{(8a-5b)(2a+9)}.
> \end{aligned}
> $$
>
> ### 4. Trinomial in $a$ (treat $b^2$ like a constant)
>
> The numerical trinomial has coefficients $1,-1,-30$.
>
> **Inspection ($a=1$).**
>
> Identify the numerical coefficients $a=1$, $b=-1$, and $c=-30$. Thus $ac=-30$; we need two numbers with product $-30$ and sum $-1$. Since $ac$ is negative, the numbers have opposite signs.
>
> - **Sequential division:** Test divisors $1,2,3,\ldots$ of $|ac|=30$ until a factor pair has the required difference: $30\div1=30$ (difference $29$); $30\div2=15$ (difference $13$); $30\div3=10$ (difference $7$); $30\div4$ is not a whole number; $30\div5=6$ (difference $1$, **match**).
> - **Square-root-guided search:** $\sqrt{30}\approx 5.48$, so the possible smaller divisors end at $5$. Start at $5$ and work downward: $30\div5=6$ (difference $1$, **match**).
>
> The required numbers are $m=-6$ and $n=5$: $-6+(5)=-1$ and $(-6)(5)=-30$.
>
> $$
> \begin{aligned}
> a^2-ab^2-30b^4&=a^2+5ab^2-6ab^2-30b^4\\
> &=a(a+5b^2)-6b^2(a+5b^2)\\
> &=\boxed{(a+5b^2)(a-6b^2)}.
> \end{aligned}
> $$
>
> ### 5. Trinomial in $x$ (carry $y$ with the middle terms)
>
> Use the numerical coefficients $a=6$, $b=-13$, and $c=-15$ for the $x^2,xy,y^2$ terms.
>
> **Decomposition ($a\ne1$).**
>
> Identify the numerical coefficients $a=6$, $b=-13$, and $c=-15$. Thus $ac=-90$; we need two numbers with product $-90$ and sum $-13$. Since $ac$ is negative, the numbers have opposite signs.
>
> - **Sequential division:** Test divisors $1,2,3,\ldots$ of $|ac|=90$ until a factor pair has the required difference: $90\div1=90$ (difference $89$); $90\div2=45$ (difference $43$); $90\div3=30$ (difference $27$); $90\div4$ is not a whole number; $90\div5=18$ (difference $13$, **match**).
> - **Square-root-guided search:** $\sqrt{90}\approx 9.49$, so the possible smaller divisors end at $9$. Start at $9$ and work downward: $90\div9=10$ (difference $1$); $90\div8$ is not a whole number; $90\div7$ is not a whole number; $90\div6=15$ (difference $9$); $90\div5=18$ (difference $13$, **match**).
>
> The required numbers are $m=-18$ and $n=5$: $-18+(5)=-13$ and $(-18)(5)=-90$.
>
> $$
> \begin{aligned}
> 6x^2-13xy-15y^2&=6x^2-18xy+5xy-15y^2\\
> &=6x(x-3y)+5y(x-3y)\\
> &=\boxed{(6x+5y)(x-3y)}.
> \end{aligned}
> $$
>
> ### 6. Repeated difference of squares
>
> $$
> \begin{aligned}
> (x-3)^4-1&=\big((x-3)^2-1\big)\big((x-3)^2+1\big)\\
> &=\boxed{(x-4)(x-2)\big((x-3)^2+1\big)}.
> \end{aligned}
> $$
>

> [!abstract] Review First
> - [[Math/Polynomials/Polynomial Operations 1|Polynomial Operations 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Polynomials/Factoring Polynomials 1|Factoring Polynomials 1]]
> - [[Math/Polynomials/Factoring Polynomials 3|Factoring Polynomials 3]]
> - [[Math/Polynomials/Exponent and Polynomial Skills 6|Exponent and Polynomial Skills 6]]
> - [[Math/Polynomials/Exponent and Polynomial Skills 2|Exponent and Polynomial Skills 2]]
> - [[Math/Polynomials/Exponent and Polynomial Skills 3|Exponent and Polynomial Skills 3]]
> - [[Math/Polynomials/Exponent and Polynomial Skills 5|Exponent and Polynomial Skills 5]]
> - [[Math/Polynomials/Exponent and Polynomial Skills 1|Exponent and Polynomial Skills 1]]
> - [[Math/Polynomials/Exponent and Polynomial Skills 4|Exponent and Polynomial Skills 4]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
