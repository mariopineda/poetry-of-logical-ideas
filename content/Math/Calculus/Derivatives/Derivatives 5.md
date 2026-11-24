---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Derivatives"
show_solution: true
qod_id: "QOD-8302A264B5E6918E9F56BFF8"
title: "Derivatives 5"
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

Differentiate using first principles.

### A.

$$
y=\sqrt{x-3}
$$

### B.

$$
y=\frac{1}{x+2}
$$

## Solution

> [!example]- Show solution
>
> ### A.
>
> Let
>
> $$
> f(x)=\sqrt{x-3}.
> $$
>
> Using first principles,
>
> $$
> f'(x)
> =
> \lim_{h\to0}
> \frac{\sqrt{x+h-3}-\sqrt{x-3}}{h}.
> $$
>
> Rationalize the numerator:
>
> $$
> f'(x)
> =
> \lim_{h\to0}
> \frac{x+h-3-(x-3)}
> {h\left(\sqrt{x+h-3}+\sqrt{x-3}\right)}.
> $$
>
> Thus,
>
> $$
> f'(x)
> =
> \lim_{h\to0}
> \frac{1}
> {\sqrt{x+h-3}+\sqrt{x-3}}
> =
> \boxed{\frac{1}{2\sqrt{x-3}}}.
> $$
>
> This derivative is defined for $x>3$.
>
> ### B.
>
> Let
>
> $$
> f(x)=\frac{1}{x+2}.
> $$
>
> Then
>
> $$
> f'(x)
> =
> \lim_{h\to0}
> \frac{\frac{1}{x+h+2}-\frac{1}{x+2}}{h}.
> $$
>
> Combine the fractions:
>
> $$
> f'(x)
> =
> \lim_{h\to0}
> \frac{-h}
> {h(x+h+2)(x+2)}.
> $$
>
> Therefore,
>
> $$
> f'(x)
> =
> \lim_{h\to0}
> -\frac{1}{(x+h+2)(x+2)}
> =
> \boxed{-\frac{1}{(x+2)^2}}.
> $$

> [!abstract] Review First
> - [[Math/Calculus/Trigonometry/Limits of Trig Functions 1|Limits of Trig Functions 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Calculus/Derivatives/Derivatives 4|Derivatives 4]]
> - [[Math/Calculus/Derivatives/Derivatives 6|Derivatives 6]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
