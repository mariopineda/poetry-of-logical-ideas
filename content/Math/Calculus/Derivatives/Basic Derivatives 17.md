---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Basic Derivatives"
show_solution: true
qod_id: "QOD-11E72171D478F0523D324FFF"
title: "Basic Derivatives 17"
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

Consider

$$
f(x)=
\begin{cases}
4x+5, & x\leq3,\\
ax^2-1, & x>3,
\end{cases}
\qquad a\in\mathbb R.
$$

Determine the value or values of $a$ that make $f'(x)$ continuous at $x=3$.

## Solution

> [!example]- Show solution
>
> For $f'(x)$ to be continuous at $x=3$, the function must first be differentiable there.
>
> ### Continuity of $f$
>
> The left-hand value is
>
> $$
> f(3)=4(3)+5=17.
> $$
>
> The right-hand limit is
>
> $$
> 9a-1.
> $$
>
> Continuity requires
>
> $$
> 9a-1=17,
> $$
>
> so
>
> $$
> a=2.
> $$
>
> ### Matching derivatives
>
> For $x<3$,
>
> $$
> f'(x)=4.
> $$
>
> For $x>3$,
>
> $$
> f'(x)=2ax.
> $$
>
> Matching the one-sided derivative values at $x=3$ requires
>
> $$
> 4=6a,
> $$
>
> so
>
> $$
> a=\frac23.
> $$
>
> The continuity condition requires $a=2$, while the derivative condition requires $a=\frac23$. These cannot both hold.
>
> Therefore,
>
> $$
> \boxed{\text{there is no real value of }a}
> $$
>
> that makes $f'(x)$ continuous at $x=3$.

> [!abstract] Review First
> - [[Math/Calculus/Derivatives/Derivatives 1|Derivatives 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Calculus/Derivatives/Basic Derivatives 16|Basic Derivatives 16]]
> - [[Math/Calculus/Derivatives/Basic Derivatives 18|Basic Derivatives 18]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
