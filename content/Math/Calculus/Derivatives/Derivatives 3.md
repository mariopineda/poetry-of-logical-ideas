---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Derivatives"
show_solution: true
qod_id: "QOD-05D16A19E1F10647CA5D3D6C"
title: "Derivatives 3"
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

For each function, identify the $x$-value at which the derivative does not exist.

### A.

$$
f(x)=|x-2|
$$

### B.

$$
g(x)=\sqrt[3]{x}
$$

### C.

$$
h(x)=\frac{1}{x+3}
$$

### D.

$$
p(x)=
\begin{cases}
x+1, & x<1,\\
x^2, & x\geq1.
\end{cases}
$$

For each case, briefly state why differentiability fails.

## Solution

> [!example]- Show solution
>
> ### A.
>
> $$
> f(x)=|x-2|
> $$
>
> has a sharp corner at
>
> $$
> \boxed{x=2}.
> $$
>
> The left-hand and right-hand derivatives are different.
>
> ### B.
>
> $$
> g(x)=\sqrt[3]{x}
> $$
>
> has a vertical tangent at
>
> $$
> \boxed{x=0}.
> $$
>
> Its derivative,
>
> $$
> g'(x)=\frac{1}{3x^{2/3}},
> $$
>
> is undefined at $x=0$.
>
> ### C.
>
> $$
> h(x)=\frac{1}{x+3}
> $$
>
> is not defined at
>
> $$
> \boxed{x=-3},
> $$
>
> so it cannot be differentiable there.
>
> ### D.
>
> At $x=1$,
>
> $$
> \lim_{x\to1^-}p(x)=2
> $$
>
> while
>
> $$
> p(1)=1.
> $$
>
> The function is discontinuous, so it is not differentiable at
>
> $$
> \boxed{x=1}.
> $$

> [!abstract] Review First
> - [[Math/Calculus/Trigonometry/Limits of Trig Functions 1|Limits of Trig Functions 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Calculus/Derivatives/Derivatives 2|Derivatives 2]]
> - [[Math/Calculus/Derivatives/Derivatives 4|Derivatives 4]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
