---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Curve Sketching"
show_solution: true
qod_id: "QOD-0E02EABBD98320C9D2E579E0"
title: "Curve Sketching 1"
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

Fully sketch

$$
y=-x(x-3)^2.
$$

You may use

$$
y'=-3(x-1)(x-3)
$$

and

$$
y''=-6(x-2).
$$

> [!info]- Hint
> Determine the domain, intercepts, asymptotes, local maximum/minimum points, intervals of increase/decrease, concavity, and points of inflection.

## Solution

> [!example]- Show solution
>
> For
>
> $$
> f(x)=-x(x-3)^2=-x^3+6x^2-9x,
> $$
>
> the domain is
>
> $$
> \boxed{\mathbb R}.
> $$
>
> The intercepts are $x=0$ and $x=3$, so the graph passes through $(0,0)$ and $(3,0)$. The root $x=3$ has multiplicity $2$.
>
> There are no asymptotes.
>
> Using
>
> $$
> f'(x)=-3(x-1)(x-3),
> $$
>
> the critical numbers are $x=1$ and $x=3$.
>
> - Decreasing on $(-\infty,1)$
> - Increasing on $(1,3)$
> - Decreasing on $(3,\infty)$
>
> Therefore,
>
> $$
> \boxed{(1,-4)}
> $$
>
> is a local minimum and
>
> $$
> \boxed{(3,0)}
> $$
>
> is a local maximum.
>
> Using
>
> $$
> f''(x)=-6(x-2),
> $$
>
> the graph is concave up on $(-\infty,2)$ and concave down on $(2,\infty)$.
>
> Since $f(2)=-2$, the point of inflection is
>
> $$
> \boxed{(2,-2)}.
> $$
>
> Because the leading term is $-x^3$,
>
> $$
> x\to-\infty\Rightarrow f(x)\to\infty
> $$
>
> and
>
> $$
> x\to\infty\Rightarrow f(x)\to-\infty.
> $$

> [!abstract] Review First
> - [[Math/Calculus/Derivatives/Derivatives 1|Derivatives 1]]
> - [[Math/Calculus/Derivatives/Higher Derivatives 1|Higher Derivatives 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Calculus/Curve Sketching/Concavity and Inflection 1|Concavity and Inflection 1]]
> - [[Math/Calculus/Curve Sketching/Curve Sketching 2|Curve Sketching 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
