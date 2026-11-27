---
type: qod
publish: true
course:
- Mathematics 30-1
topic: Functions and Operations
show_solution: true
qod_id: DIP-30-1-201901-WR1
diploma_eligible: true
diploma_ready: true
historical_source_mean_score: "3.2/5"
review_status: certified-batch01-proof-and-source-reviewed
question_format: written-response
diploma_cognitive_level: Conceptual; Procedural
diploma_performance_standard: Acceptable
diploma_outcomes: '1'
tags:
- qod
- diploma-preparation
- written-response
certified_batch: 1
title: "Composing and subtracting two functions"
aliases: []
domain: null
learning_order: null
estimated_minutes: null
calculator: null
curriculum_alignment: []
cognitive_level: ["Conceptual","Procedural"]
performance_standard: ["Acceptable"]
source: null
source_kind: null
source_question: null
source_topic: null
source_format: null
source_equivalence: null
source_percent_correct: null
source_mean_score: "3.2/5"
assessment_metadata_origin: null
review_date: null
curriculum_review_required: null
used_in: []
---

The diagram shows two **quadratic functions**, $f$ and $g$, both defined for $-3\le x\le1$. Use information read from the graphs rather than assuming a formula.

![[diploma-2019-wr1-two-quadratics-original.svg]]

Define $j(x)=(f\circ g)(x)$, $k(x)=\dfrac{f(x)}{g(x)}$, and $h(x)=g(x)-f(x)$.

**(a)** Determine $j(0)$ and $k(0)$ from the graphs. Which value is greater? Show the intermediate graph readings, including the value required by the composition.

**(b)** Sketch $h(x)$ on $[-3,1]$. Label at least five points, the $y$-intercept, and the domain. Explain how the graphs of $f$ and $g$ are combined.

## Solution

> [!example]- Show solution
> **(a)** From the graph, $g(0)=1$, $f(1)=-1$, $f(0)=2$ and $g(0)=1$. Therefore
> $$j(0)=f(g(0))=f(1)=\boxed{-1},\qquad k(0)=\frac{f(0)}{g(0)}=\frac21=\boxed{2}.$$
> Thus $\boxed{k(0)>j(0)}$.
>
> **(b)** The plotted curves represent $f(x)=-(x+1)^2+3$ and $g(x)=(x+2)^2-3$ on the specified domain. Subtract their $y$-values at each common $x$-coordinate:
> $$h(x)=g(x)-f(x)=(x+2)^2-3-\bigl[-(x+1)^2+3\bigr]=\boxed{2x^2+6x-1}.$$
> 
> | $x$ | $-3$ | $-2$ | $-1$ | $0$ | $1$ |
> |---:|---:|---:|---:|---:|---:|
> | $h(x)$ | $-1$ | $-5$ | $-5$ | $-1$ | $7$ |
>
> The vertex of $h$ occurs at $x=-\frac6{2(2)}=-\frac32$, with value $h(-\frac32)=-\frac{11}{2}$. The $y$-intercept is $\boxed{(0,-1)}$ and the domain is $\boxed{[-3,1]}$. Show **closed endpoints** and the vertex on the sketch.
>
> ![[diploma-2019-wr1-difference-solution.svg]]

> [!abstract] Review First
> - [[Math/Relations and Functions/Function Notation 1|Function Notation 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Relations and Functions/Function Notation 3|Function Notation 3]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Relations and Functions/Properties of Functions 4|Properties of Functions 4]]
