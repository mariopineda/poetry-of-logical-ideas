---
type: qod
publish: true
course:
  - "Mathematics 20-1"
  - "Mathematics 30-2"
topic: "Rational Equations"
show_solution: true
qod_id: "QOD-C7C370D5BD6DD84083CDEDA5"
title: "Solving Rational Equations 5"
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
used_in: []
---

Solve $\frac{2x-1}{x} - \frac{x+1}{x+4} = \frac{5x+8}{x^2+4x}$

## Solution

> [!example]- Show solution
>
> The original denominators require $x
e0,-4$. Multiply every term by the LCD $x(x+4)$:
>
> $$
> \begin{aligned}
> (2x-1)(x+4)-x(x+1)&=5x+8\\
> 2x^2+7x-4-x^2-x&=5x+8\\
> x^2+x-12&=0.
> \end{aligned}
> $$
>
> **Inspection ($a=1$).**
>
> Identify the numerical coefficients $a=1$, $b=1$, and $c=-12$. Thus $ac=-12$; we need two numbers with product $-12$ and sum $1$. Since $ac$ is negative, the numbers have opposite signs.
>
> - **Sequential division:** Test divisors $1,2,3,\ldots$ of $|ac|=12$ until a factor pair has the required difference: $12\div1=12$ (difference $11$); $12\div2=6$ (difference $4$); $12\div3=4$ (difference $1$, **match**).
> - **Square-root-guided search:** $\sqrt{12}\approx 3.46$, so the possible smaller divisors end at $3$. Start at $3$ and work downward: $12\div3=4$ (difference $1$, **match**).
>
> The required numbers are $m=4$ and $n=-3$: $4+(-3)=1$ and $(4)(-3)=-12$.
>
> $$
> \begin{aligned}
> x^2+x-12&=(x+4)(x-3)=0\\
> \implies\quad &x=-4\text{ or }x=3.
> \end{aligned}
> $$
>
> Because $x=-4$ is a non-permissible value, the **only valid solution** is $\boxed{x=3}$.
>

> [!abstract] Review First
> - [[Math/Rational Expressions & Equations/Arithmetic Operations with Quotients|Arithmetic Operations with Quotients]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Rational Expressions & Equations/Solving Rational Equations 4|Solving Rational Equations 4]]
> - [[Math/Rational Expressions & Equations/Solving Rational Equations 6|Solving Rational Equations 6]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
