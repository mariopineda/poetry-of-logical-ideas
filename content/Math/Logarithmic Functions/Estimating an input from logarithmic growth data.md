---
type: qod
publish: true
course:
- Mathematics 30-2
- Mathematics 30-1
topic: Logarithmic Functions
show_solution: true
qod_id: DIP-30-2-A19-NR7
diploma_eligible: true
diploma_ready: true
review_status: reviewed-batch12
question_format: written-response
diploma_cognitive_level: Procedural
diploma_performance_standard: Acceptable
diploma_outcomes: '6'
diploma_original_item_format: numerical-response
diploma_historical_percent_correct: 53.6
tags:
- diploma-preparation
- qod
- written-response
certified_batch: 12
diploma_original_topic: LR
diploma_original_percent_correct: 53.6
title: "Estimating an input from logarithmic growth data"
aliases: []
domain: null
learning_order: null
estimated_minutes: null
calculator: null
curriculum_alignment: []
cognitive_level: ["Procedural"]
performance_standard: ["Acceptable"]
source: null
source_kind: null
source_question: null
source_topic: "LR"
source_format: "numerical-response"
source_equivalence: null
source_percent_correct: 53.6
source_mean_score: null
assessment_metadata_origin: null
review_date: null
curriculum_review_required: null
used_in: []
---

A technician calibrates a logarithmic vibration index $L$ against measured intensity $v$.

| Intensity $v$ | 1 | 2 | 4 | 8 | 16 |
|:--|--:|--:|--:|--:|--:|
| Measured index $L$ | 23.1 | 30.2 | 38.0 | 44.4 | 52.1 |

(a) Use **logarithmic regression** to fit $L=a+b\ln(v)$. Report $a$ and $b$ to at least three decimal places.

(b) When the index is $L=47$, estimate the intensity to the nearest tenth. Use unrounded regression coefficients, and show the inverse calculation.

## Solution

> [!example]- Show solution
> Regression of $L$ against $\ln(v)$ gives $\boxed{a\approx 23.120000}$ and $\boxed{b\approx 10.416258}$, so
>
> $$L\approx 23.120000+10.416258\ln(v).$$
>
> At $L=47$,
>
> $$\ln(v)=\frac{47-a}{b},\qquad v=e^{(47-a)/b}\approx 9.90035.$$
>
> Thus the estimated intensity is $\boxed{9.9}$ units. The slight scatter in the data makes a fitted regression preferable to an exact logarithmic equation.

> [!abstract] Review First
> - [[Math/Logarithmic Functions/Evaluating Logarithms 1|Evaluating Logarithms 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Logarithmic Functions/Logarithm Laws 1|Logarithm Laws 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Logarithmic Functions/Logarithm Laws 2|Logarithm Laws 2]]
