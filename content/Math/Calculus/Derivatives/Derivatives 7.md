---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Derivatives"
show_solution: true
qod_id: "QOD-C43B0ACD98734250B8CEA275"
title: "Derivatives 7"
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
y=4-3x-2x^2
$$

### B.

$$
y=\sqrt{6-4x}
$$

## Solution

> [!example]- Show solution
>
> ### A.
>
> Let
>
> $$
> f(x)=4-3x-2x^2.
> $$
>
> Then
>
> $$
> f'(x)
> =
> \lim_{h\to0}
> \frac{f(x+h)-f(x)}{h}.
> $$
>
> Substitute and simplify:
>
> $$
> f'(x)
> =
> \lim_{h\to0}
> \frac{-3h-4xh-2h^2}{h}
> $$
>
> $$
> =
> \lim_{h\to0}
> (-3-4x-2h).
> $$
>
> Therefore,
>
> $$
> \boxed{f'(x)=-4x-3}.
> $$
>
> ### B.
>
> Let
>
> $$
> f(x)=\sqrt{6-4x}.
> $$
>
> Using first principles,
>
> $$
> f'(x)
> =
> \lim_{h\to0}
> \frac{\sqrt{6-4x-4h}-\sqrt{6-4x}}{h}.
> $$
>
> Rationalize the numerator:
>
> $$
> f'(x)
> =
> \lim_{h\to0}
> \frac{-4h}
> {h\left(\sqrt{6-4x-4h}+\sqrt{6-4x}\right)}.
> $$
>
> Thus,
>
> $$
> f'(x)
> =
> \boxed{-\frac{2}{\sqrt{6-4x}}}.
> $$
>
> This derivative is defined for $x<\frac32$.

> [!abstract] Review First
> - [[Math/Calculus/Trigonometry/Limits of Trig Functions 1|Limits of Trig Functions 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Calculus/Derivatives/Derivatives 6|Derivatives 6]]
> - [[Math/Calculus/Derivatives/Derivatives 8|Derivatives 8]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
