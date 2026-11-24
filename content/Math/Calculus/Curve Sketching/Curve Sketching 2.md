---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Curve Sketching"
show_solution: true
qod_id: "QOD-921AA7BAA37D583B72A71B01"
title: "Curve Sketching 2"
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

Sketch the graph of

$$
f(x)=\frac{x^2}{1-x^2}.
$$

> [!info]- Hint
> Determine the domain, intercepts, asymptotes, local maximum/minimum points, intervals of increase/decrease, concavity, and points of inflection.

## Solution

> [!example]- Show solution
>
> The denominator cannot equal zero, so
>
> $$
> \boxed{\text{Domain}=\mathbb R\setminus\{-1,1\}}.
> $$
>
> The only intercept is $\boxed{(0,0)}$.
>
> Vertical asymptotes occur at
>
> $$
> \boxed{x=-1,\ x=1}.
> $$
>
> Since the numerator and denominator have the same degree, the horizontal asymptote is
>
> $$
> \boxed{y=-1}.
> $$
>
> Differentiate:
>
> $$
> f'(x)=\frac{2x}{(1-x^2)^2}.
> $$
>
> Thus the function decreases for $x<0$ on each part of the domain and increases for $x>0$ on each part of the domain. Therefore $\boxed{(0,0)}$ is a local minimum.
>
> The second derivative is
>
> $$
> f''(x)=\frac{2(1+3x^2)}{(1-x^2)^3}.
> $$
>
> Hence the graph is concave up on $(-1,1)$ and concave down on $(-\infty,-1)$ and $(1,\infty)$.
>
> There are no points of inflection because the concavity changes only at $x=\pm1$, where the function is undefined.
>
> The function is even, so the graph is symmetric about the $y$-axis.

> [!abstract] Review First
> - [[Math/Calculus/Derivatives/Derivatives 1|Derivatives 1]]
> - [[Math/Calculus/Derivatives/Higher Derivatives 1|Higher Derivatives 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Calculus/Curve Sketching/Curve Sketching 1|Curve Sketching 1]]
> - [[Math/Calculus/Curve Sketching/First Derivative Test 1|First Derivative Test 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
