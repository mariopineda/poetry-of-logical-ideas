---
type: qod
publish: true
course:
- Mathematics 30-1
topic: Polynomial Functions
show_solution: true
qod_id: DIP-30-1-201901-NR4
diploma_eligible: true
diploma_ready: true
historical_source_percent_correct: 56.9
review_status: certified-batch01-proof-and-source-reviewed
question_format: written-response
diploma_cognitive_level: Procedural
diploma_performance_standard: Acceptable
diploma_outcomes: '12'
tags:
- qod
- diploma-preparation
- written-response
certified_batch: 1
---

A quartic polynomial $P(x)=ax^4+bx^3+cx^2+dx+e$ has **integer coefficients**. The graph shows its integer $x$-intercepts, the point at which it touches rather than crosses the $x$-axis, and its $y$-intercept.

![[diploma-2019-quartic-coefficients-original.svg]]

Use the graph to identify the roots and their multiplicities. Determine the exact values of the leading coefficient $a$ and constant coefficient $e$, showing how the graph supports each conclusion. You may first write a factored equation for $P(x)$.

## Solution

> [!example]- Show solution
> The graph **crosses** the $x$-axis at $x=-3$ and $x=4$, so each has odd multiplicity $1$ in the least-degree quartic model. The graph **touches** the axis at $x=1$, so its root has even multiplicity $2$. Because the degree is four, these multiplicities sum to four, and
> $$P(x)=a(x+3)(x-1)^2(x-4).$$
> The labelled $y$-intercept is $(0,12)$, so $e=P(0)=\boxed{12}$. Substituting $x=0$ into factored form gives
> $$12=a(3)(-1)^2(-4)=-12a\quad\Longrightarrow\quad\boxed{a=-1}.$$
> Consequently, one equivalent full equation is $\boxed{P(x)=-(x+3)(x-1)^2(x-4)}$, which has integer coefficients and matches all the plotted features.

> [!abstract] Review First
> - [[Math/Polynomials/Polynomial Functions 1|Polynomial Functions 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Polynomials/Polynomial Functions - Matching Equations and Graphs 1|Polynomial Functions - Matching Equations and Graphs 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Polynomials/Sketching Polynomial Functions 1|Sketching Polynomial Functions 1]]
