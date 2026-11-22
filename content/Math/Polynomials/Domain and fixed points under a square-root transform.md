---
type: qod
publish: true
course:
- Mathematics 30-1
- Mathematics 31
topic: Polynomial and Radical Functions
show_solution: true
qod_id: DIP-30-1-X024
diploma_eligible: true
diploma_ready: true
review_status: ai-reviewed-question-and-solution-batch15
question_format: written-response
diploma_cognitive_level: Conceptual
diploma_performance_standard: Acceptable
diploma_outcomes: '13'
tags:
- qod
- diploma-preparation
- written-response
diploma_origin: supplementary
diploma_source_equivalence: not_applicable
assessment_metadata_status: author_estimated
certified_batch: 15
review_date: '2026-11-22'
---

Let $f(x)=(x+4)(x-2)$ and define $g(x)=\sqrt{f(x)}$. Determine the domain of $g$. Then determine **every** point on the graph of $f$ whose coordinates are unchanged by the transformation $y\mapsto\sqrt y$. Explain both conditions.

## Solution

> [!example]- Show solution
> The square root is real precisely when
>
> $$(x+4)(x-2)\ge 0,$$
>
> so the domain of $g$ is $\boxed{(-\infty,-4]\cup[2,\infty)}$.
>
> A point $(x,y)$ on $f$ is unchanged under $y\mapsto\sqrt y$ only if $y=\sqrt y$. This requires $y\ge0$. Squaring gives $y^2=y$, so $y=0$ or $y=1$; both satisfy the original condition.
>
> - $y=0$: $(x+4)(x-2)=0$, giving $x=-4$ or $x=2$.
> - $y=1$: $x^2+2x-8=1$, so $(x+1)^2=10$ and $x=-1\pm\sqrt{10}$.
>
> All four points lie in the domain of $g$ because their original $y$-values are $0$ or $1$.
>
> **Answer:** $\boxed{(-4,0),\ (2,0),\ (-1-\sqrt{10},1),\ (-1+\sqrt{10},1)}$.

> [!abstract] Review First
> - [[Math/Polynomials/Factoring Polynomials 1|Factoring Polynomials 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Functions/Domain and Range 1|Domain and Range 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Relations and Functions/Function Transformations 3|Function Transformations 3]]
