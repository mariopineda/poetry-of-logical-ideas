---
type: qod
publish: true
course:
- Mathematics 30-1
- Mathematics 31
topic: Transformations
show_solution: true
qod_id: DIP-30-1-201901-MC3
diploma_eligible: true
diploma_ready: true
historical_source_percent_correct: 83.8
review_status: certified-batch01-proof-and-source-reviewed
question_format: written-response
diploma_cognitive_level: Conceptual
diploma_performance_standard: Acceptable
diploma_outcomes: '3'
tags:
- qod
- diploma-preparation
- written-response
certified_batch: 1
title: "Recognizing a combined graph transformation"
aliases: []
domain: null
learning_order: null
estimated_minutes: null
calculator: null
curriculum_alignment: []
cognitive_level: ["Conceptual"]
performance_standard: ["Acceptable"]
source: null
source_kind: null
source_question: null
source_topic: null
source_format: null
source_equivalence: null
source_percent_correct: 83.8
source_mean_score: null
assessment_metadata_origin: null
review_date: null
curriculum_review_required: null
---

Two piecewise-linear functions $f$ and $g$ are shown on the same coordinate plane. Their marked vertices and endpoints have exact integer coordinates.

![[diploma-2019-original-graph-to-rule-adaptation.svg]]

The graph of $g$ is a transformation of the graph of $f$ of the form
$$g(x)=a\,f(bx)+k,\qquad a>0,\ b>0.$$

Determine $a$, $b$, and $k$, then write the transformation equation **in terms of $f$**. Justify your rule using the corresponding vertices and describe the transformations, including the change in domain.

## Solution

> [!example]- Show solution
> The original vertices of $f$ are $(-4,-2)$, $(-2,2)$ and $(0,0)$. The corresponding transformed vertices of $g$ are $(-2,-2)$, $(-1,10)$ and $(0,4)$.
>
> Every $x$-coordinate is halved, so $b=\boxed{2}$ and the horizontal scale factor is $\tfrac12$. Because $f(0)=0$ while $g(0)=4$, the vertical translation is $k=\boxed4$.
>
> The original peak of height $2$ is transformed to height $10$; after removing the vertical translation this gives $2a=10-4=6$, hence $a=\boxed3$.
>
> Therefore the equation is
> $$\boxed{g(x)=3f(2x)+4}.$$
> It compresses the graph horizontally by a factor $\tfrac12$, stretches vertically by a factor of $3$, then shifts upward $4$ units.
>
> Verification at each characteristic point:
>
> | Original $x$ | $f(x)$ | Transformed $x/2$ | $3f(x)+4$ |
> |---:|---:|---:|---:|
> | $-4$ | $-2$ | $-2$ | $-2$ |
> | $-2$ | $2$ | $-1$ | $10$ |
> | $0$ | $0$ | $0$ | $4$ |
>
> Both graphs are straight between the matching vertices, so these correspondences verify the complete transformed graph. The domain changes from $\boxed{[-4,0]}$ to $\boxed{[-2,0]}$.

> [!abstract] Review First
> - [[Math/Relations and Functions/Function Transformations 1|Function Transformations 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Relations and Functions/Function Transformations 3|Function Transformations 3]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Relations and Functions/Function Transformations 6|Function Transformations 6]]
