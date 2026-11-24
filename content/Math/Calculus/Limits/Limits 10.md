---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Limits"
show_solution: true
qod_id: "QOD-7FBE5219C6B69E4A37B594B6"
title: "Limits 10"
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

Consider

$$
f(x)=
\begin{cases}
x+8, & x<-6,\\
5, & x=-6,\\
2, & -6<x<1,\\
-1, & x=1,\\
x, & 1<x<5,\\
0, & x=5,\\
10-x, & 5<x<7,\\
6, & x=7,\\
x-4, & x>7.
\end{cases}
$$

Evaluate:

1. $\displaystyle \lim_{x\to5}f(x)$
2. $f(-2)$
3. $\displaystyle \lim_{x\to7}f(x)$
4. $f(7)$
5. $\displaystyle \lim_{x\to1}f(x)$
6. $f(1)$
7. $\displaystyle \lim_{x\to-6}f(x)$
8. $f(-6)$

## Solution

> [!example]- Show solution
>
> ### 1.
>
> As $x\to5^-$,
>
> $$
> f(x)=x\to5.
> $$
>
> As $x\to5^+$,
>
> $$
> f(x)=10-x\to5.
> $$
>
> Therefore,
>
> $$
> \boxed{\lim_{x\to5}f(x)=5}.
> $$
>
> ### 2.
>
> Since $-6<-2<1$,
>
> $$
> \boxed{f(-2)=2}.
> $$
>
> ### 3.
>
> As $x\to7^-$,
>
> $$
> 10-x\to3,
> $$
>
> and as $x\to7^+$,
>
> $$
> x-4\to3.
> $$
>
> Thus,
>
> $$
> \boxed{\lim_{x\to7}f(x)=3}.
> $$
>
> ### 4.
>
> $$
> \boxed{f(7)=6}.
> $$
>
> ### 5.
>
> As $x\to1^-$,
>
> $$
> f(x)\to2,
> $$
>
> while as $x\to1^+$,
>
> $$
> f(x)=x\to1.
> $$
>
> The one-sided limits are different, so
>
> $$
> \boxed{\lim_{x\to1}f(x)\text{ does not exist}}.
> $$
>
> ### 6.
>
> $$
> \boxed{f(1)=-1}.
> $$
>
> ### 7.
>
> From both sides,
>
> $$
> f(x)\to2.
> $$
>
> Therefore,
>
> $$
> \boxed{\lim_{x\to-6}f(x)=2}.
> $$
>
> ### 8.
>
> $$
> \boxed{f(-6)=5}.
> $$

> [!abstract] Review First
> - [[Math/Relations and Functions/Properties of Functions 1|Properties of Functions 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Calculus/Limits/Limits 9|Limits 9]]
> - [[Math/Calculus/Limits/Limits 11|Limits 11]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
