---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Chain Rule"
show_solution: true
qod_id: "QOD-F044C29263495780A7F0994E"
title: "Chain Rule 19"
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

Derive the Quotient Rule using

$$
\frac{f(x)}{g(x)}
=
f(x)[g(x)]^{-1},
$$

where $g(x)\neq0$.

## Solution

> [!example]- Show solution
>
> Let
>
> $$
> y=f(x)[g(x)]^{-1}.
> $$
>
> Using the Product Rule,
>
> $$
> y'
> =
> f'(x)[g(x)]^{-1}
> +
> f(x)\frac{d}{dx}[g(x)]^{-1}.
> $$
>
> By the Chain Rule,
>
> $$
> \frac{d}{dx}[g(x)]^{-1}
> =
> -[g(x)]^{-2}g'(x).
> $$
>
> Therefore,
>
> $$
> y'
> =
> \frac{f'(x)}{g(x)}
> -
> \frac{f(x)g'(x)}{[g(x)]^2}.
> $$
>
> Write both terms over the common denominator $[g(x)]^2$:
>
> $$
> \boxed{
> \left(\frac{f}{g}\right)'
> =
> \frac{f'(x)g(x)-f(x)g'(x)}
> {[g(x)]^2}
> }.
> $$

> [!abstract] Review First
> - [[Math/Calculus/Derivatives/Basic Derivatives 1|Basic Derivatives 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Calculus/Derivatives/Chain Rule 18|Chain Rule 18]]
> - [[Math/Calculus/Derivatives/Chain Rule 20|Chain Rule 20]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
