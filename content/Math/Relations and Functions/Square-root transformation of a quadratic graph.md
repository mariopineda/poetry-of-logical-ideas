---
type: qod
publish: true
course:
- Mathematics 30-1
topic: Relations and Functions
show_solution: true
qod_id: DIP-30-1-201901-MC13
diploma_eligible: true
diploma_ready: true
review_status: certified-batch02-2026-11-22
question_format: written-response
diploma_cognitive_level: Conceptual
diploma_performance_standard: Acceptable
diploma_outcomes: RF 13
tags:
- qod
- diploma-preparation
- written-response
historical_source_percent_correct: 63.9
certified_batch: 2
---

A quadratic model is given by $f(x)=(x+4)(x-2)$. Its graph is shown below.

![[diploma-batch02-square-root-source-graph.svg]]

For the transformation $g(x)=\sqrt{f(x)}$, use the graph and algebra to **determine the real domain of $g$** and **find the number of invariant points** shared by $f$ and $g$. Give their exact coordinates and explain why there are no other invariant points.

## Solution

> [!example]- Show solution
> The square root requires $f(x)\ge 0$. Because the parabola opens upward and crosses the horizontal axis at $-4$ and $2$, this occurs for $x\le -4$ or $x\ge 2$:
>
> $$D_g=\boxed{(-\infty,-4]\cup[2,\infty)}.$$
>
> Invariant points satisfy $f(x)=\sqrt{f(x)}$. Let $u=f(x)\ge0$. Solving $u=\sqrt u$ yields $u=0$ or $u=1$ (both values satisfy the original equation).
>
> For $f(x)=0$, the points are $(-4,0)$ and $(2,0)$. For $f(x)=1$, solve $(x+4)(x-2)=1$, or $x^2+2x-9=0$, so $x=-1\pm\sqrt{10}$. Both corresponding points have $y=1$ and lie in the square-root domain.
>
> Thus there are $\boxed{4}$ invariant points:
>
> $$\boxed{(-4,0),\quad (2,0),\quad (-1-\sqrt{10},1),\quad (-1+\sqrt{10},1).}$$

> [!abstract] Review First
> - [[Math/Polynomials/Factoring Polynomials 1|Factoring Polynomials 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Relations and Functions/Annual compound growth over nine years|Annual compound growth over nine years]]
> - [[Math/Relations and Functions/Changing exponential form to logarithmic form|Changing exponential form to logarithmic form]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Relations and Functions/Domain and Range - Reciprocal and Quadratic Functions|Domain and Range - Reciprocal and Quadratic Functions]]
