---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Limits"
show_solution: true
qod_id: "QOD-CC1AE4FEB217898C52F0CB09"
title: "Limits 13"
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

Evaluate each limit, if possible.

### A.

$$
\lim_{x\to4}
\frac{9-x^2}{x+5}
$$

### B.

$$
\lim_{x\to8}
\frac{\sqrt{1-x}}{x-8}
$$

### C.

$$
\lim_{x\to7}
\frac{x^2-49}{x^2+7x}
$$

### D.

$$
\lim_{x\to-1}
\frac{x+1}{x^2-1}
$$

### E.

$$
\lim_{x\to5}
\frac{\frac1x-\frac15}{x-5}
$$

### F.

$$
\lim_{x\to10}
\frac{\sqrt{x+6}+4}{x-10}
$$

## Solution

> [!example]- Show solution
>
> ### A.
>
> Direct substitution is valid:
>
> $$
> \frac{9-16}{4+5}
> =
> \boxed{-\frac79}.
> $$
>
> ### B.
>
> The expression
>
> $$
> \sqrt{1-x}
> $$
>
> is real only when $x\leq1$. There are no real domain values arbitrarily close to $8$.
>
> Therefore, as a real-valued limit,
>
> $$
> \boxed{\text{the limit does not exist}}.
> $$
>
> ### C.
>
> Factor:
>
> $$
> \frac{x^2-49}{x^2+7x}
> =
> \frac{(x-7)(x+7)}{x(x+7)}
> =
> \frac{x-7}{x}.
> $$
>
> Thus,
>
> $$
> \boxed{0}.
> $$
>
> ### D.
>
> Factor:
>
> $$
> \frac{x+1}{x^2-1}
> =
> \frac{x+1}{(x+1)(x-1)}
> =
> \frac{1}{x-1}.
> $$
>
> Therefore,
>
> $$
> \boxed{-\frac12}.
> $$
>
> ### E.
>
> Combine the numerator:
>
> $$
> \frac1x-\frac15
> =
> \frac{5-x}{5x}
> =
> -\frac{x-5}{5x}.
> $$
>
> Hence,
>
> $$
> \frac{\frac1x-\frac15}{x-5}
> =
> -\frac{1}{5x}.
> $$
>
> Therefore,
>
> $$
> \boxed{-\frac1{25}}.
> $$
>
> ### F.
>
> As $x\to10$,
>
> $$
> \sqrt{x+6}+4\to8,
> $$
>
> while $x-10\to0$.
>
> From the left the quotient tends to $-\infty$, and from the right it tends to $+\infty$.
>
> Therefore,
>
> $$
> \boxed{\text{the two-sided limit does not exist}}.
> $$

> [!abstract] Review First
> - [[Math/Relations and Functions/Properties of Functions 1|Properties of Functions 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Calculus/Limits/Limits 12|Limits 12]]
> - [[Math/Calculus/Limits/Limits 14|Limits 14]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
