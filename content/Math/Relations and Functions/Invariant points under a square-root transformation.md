---
type: qod
publish: true
course:
- Mathematics 30-1
topic: Relations and Functions
show_solution: true
qod_id: DIP-30-1-2016-NR6
diploma_eligible: true
diploma_ready: true
review_status: certified-batch06
question_format: written-response
diploma_cognitive_level: Conceptual
diploma_performance_standard: Acceptable
diploma_outcomes: '13'
tags:
- qod
- diploma-preparation
- written-response
certified_batch: 6
diploma_original_percent_correct: 29.0
diploma_original_item_format: numerical-response
---

The three original parabolic graphs are provided below. The transformed functions are $y=\sqrt{f(x)}$, $y=\sqrt{g(x)}$, and $y=\sqrt{h(x)}$ respectively.

![[diploma-batch06-2016-nr6-invariant-source-graphs.svg]]

Their original rules are

$$f(x)=(x-2)^2-1,\quad g(x)=(x-2)^2+\tfrac12,\quad h(x)=(x-2)^2+3.$$

For each function, determine the **number of points invariant** under $y\mapsto\sqrt y$. Justify your counts from the graph and algebra.

## Solution

> [!example]- Show solution
> An invariant point must have the same $x$ and $y$ values before and after the output transformation. Thus $y=\sqrt y$, which requires $y\ge0$ and gives
>
> $$y^2=y\quad\Longrightarrow\quad y\in\{0,1\}.$$
>
> - $f(x)=0$ has $x=1,3$; $f(x)=1$ has $x=2\pm\sqrt2$. These are four distinct points: **4**.
> - $g(x)=0$ has no real solution; $g(x)=1$ has $x=2\pm1/\sqrt2$. These are two distinct points: **2**.
> - $h(x)\ge3$, so it never equals $0$ or $1$: **0**.
>
> $$\boxed{f:4,\qquad g:2,\qquad h:0}.$$
>
> Each count agrees with intersections of the original curves with the horizontal levels $y=0$ and $y=1$.

> [!abstract] Review First
> - [[Math/Relations and Functions/Absolute Value Equations 1|Absolute Value Equations 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Relations and Functions/Absolute Value Equations 2|Absolute Value Equations 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Relations and Functions/Domain & Range Algebraically 1|Domain & Range Algebraically 1]]
