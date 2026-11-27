---
type: qod
publish: true
course:
- Mathematics 30-1
topic: Relations and Functions
show_solution: true
qod_id: DIP-30-1-2016-NR7
diploma_eligible: true
diploma_ready: true
review_status: certified-batch06
question_format: written-response
diploma_cognitive_level: Procedural
diploma_performance_standard: Acceptable
diploma_outcomes: '1'
diploma_reference_performance_pct: 53.8
reference_statistic_note: Historical item result; not a difficulty measurement for
  the adapted QOD.
tags:
- qod
- diploma-preparation
- written-response
certified_batch: 6
diploma_original_percent_correct: 53.8
diploma_original_item_format: numerical-response
title: "Evaluating a composite function inside a sum"
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
source_topic: null
source_format: "numerical-response"
source_equivalence: null
source_percent_correct: 53.8
source_mean_score: null
assessment_metadata_origin: null
review_date: null
curriculum_review_required: null
used_in: []
---

Let $f(x)=x^2-3x$ and $g(x)=\dfrac{2}{x+1}$. Define $h(x)=g(x)+(f\circ g)(x)$. Calculate $h(3)$ exactly and as a decimal, showing the order of operations.

## Solution

> [!example]- Show solution
> Evaluate the inner function first:
>
> $$g(3)=\frac2{3+1}=\frac12.$$
>
> Then
>
> $$f(g(3))=f\left(\frac12\right)=\left(\frac12\right)^2-3\left(\frac12\right)=\frac14-\frac32=-\frac54.$$
>
> Finally
>
> $$h(3)=g(3)+(f\circ g)(3)=\frac12-\frac54=\boxed{-\frac34=-0.75}.$$
>
> The input $x=3$ is permissible because $x+1\ne0$.

> [!abstract] Review First
> - [[Math/Relations and Functions/Absolute Value Equations 1|Absolute Value Equations 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Relations and Functions/Absolute Value Equations 2|Absolute Value Equations 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Relations and Functions/Domain & Range Algebraically 1|Domain & Range Algebraically 1]]
