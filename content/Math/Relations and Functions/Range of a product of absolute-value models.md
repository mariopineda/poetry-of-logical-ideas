---
type: qod
publish: true
course:
- Mathematics 30-1
topic: Relations and Functions
show_solution: true
qod_id: DIP-30-1-2017-MC15
diploma_eligible: true
diploma_ready: true
review_status: certified_batch03_proof_and_source_equivalence
question_format: written-response
diploma_original_format: multiple-choice
diploma_cognitive_level: Problem Solving
diploma_performance_standard: Acceptable
diploma_outcomes: RF 1
diploma_historical_percent_correct: 23.5
tags:
- qod
- diploma-preparation
- written-response
certified_batch: 3
title: "Range of a product of absolute-value models"
aliases: []
domain: null
learning_order: null
estimated_minutes: null
calculator: null
curriculum_alignment: []
cognitive_level: ["Problem Solving"]
performance_standard: ["Acceptable"]
source: null
source_kind: null
source_question: null
source_topic: null
source_format: "multiple-choice"
source_equivalence: null
source_percent_correct: 23.5
source_mean_score: null
assessment_metadata_origin: null
review_date: null
curriculum_review_required: null
---

The graphs of two downward-opening absolute-value functions $f$ and $g$ are shown.

1. Determine an equation for each function from the graph.
2. Define $h(x)=f(x)g(x)$, and determine the **exact range** of $h$ over all real $x$.

Justify the minimum and the end behaviour without graphing technology.

![[diploma-batch03-2017-mc15-two-absolute-values.svg]]

## Solution

> [!example]- Show solution
> The graph has inverted V-shapes, each with slopes of magnitude $1$ and vertices at $(0,3)$ and $(0,5)$. Thus $\boxed{f(x)=3-|x|}$ and $\boxed{g(x)=5-|x|}$. Put $t=|x|\ge0$. Their product is
>
> $$h(x)=(3-t)(5-t)=t^2-8t+15=(t-4)^2-1.$$
>
> Because $t=4$ lies in the allowed half-line $t\ge0$, the global minimum is $-1$, attained at $x=\pm4$. As $|x|\to\infty$, the product grows without bound. Hence
>
> $$\boxed{\mathrm{range}(h)=[-1,\infty)}.$$
>
> The range is **not** restricted to the vertical extent of the input figure.

> [!abstract] Review First
> - [[Math/Relations and Functions/Absolute Value Equations 1|Absolute Value Equations 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Relations and Functions/Domain and Range - Reading Graphs 2|Domain and Range - Reading Graphs 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Relations and Functions/Domain & Range Algebraically 3|Domain & Range Algebraically 3]]
