---
type: qod
publish: true
course:
- Mathematics 30-1
topic: Polynomials
show_solution: true
qod_id: DIP-30-1-2017-NR5
diploma_eligible: true
diploma_ready: true
review_status: certified_batch04_proof_and_source_equivalence
question_format: written-response
diploma_original_format: numerical-response
diploma_cognitive_level: Problem Solving
diploma_performance_standard: Acceptable
diploma_outcomes: RF 11
diploma_historical_percent_correct: 72.3
tags:
- qod
- diploma-preparation
- written-response
certified_batch: 4
title: "Recovering a repeated polynomial zero"
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
source_format: "numerical-response"
source_equivalence: null
source_percent_correct: 72.3
source_mean_score: null
assessment_metadata_origin: null
review_date: null
curriculum_review_required: null
---

The cubic polynomial

$$P(x)=x^3-6x^2+32$$

has $(x+2)$ as a factor. Its graph, shown below, crosses the $x$-axis at one negative zero and **touches** the axis at another positive zero.

![[diploma-batch04-2017-nr5-repeated-zero.svg]]

Using both the factor information and the graph, factor $P(x)$ completely and determine the positive zero, explaining its multiplicity.

## Solution

> [!example]- Show solution
> The given factor $(x+2)$ means $x=-2$ is a zero, confirmed by $P(-2)=-8-24+32=0$. Polynomial division (or synthetic division by $-2$) gives
>
> $$\frac{x^3-6x^2+32}{x+2}=x^2-8x+16=(x-4)^2.$$
>
> Therefore
>
> $$\boxed{P(x)=(x+2)(x-4)^2}.$$
>
> The negative root $-2$ has multiplicity one, so the graph **crosses** there. The positive root $\boxed{x=4}$ has multiplicity two, so the graph **touches but does not cross** the $x$-axis there, as shown.

> [!abstract] Review First
> - [[Math/Polynomials/Factoring Polynomials 2|Factoring Polynomials 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Polynomials/Polynomial Functions - Matching Equations and Graphs 1|Polynomial Functions - Matching Equations and Graphs 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Polynomials/Polynomial Functions - Analyzing a Cubic Function 2|Polynomial Functions - Analyzing a Cubic Function 2]]
