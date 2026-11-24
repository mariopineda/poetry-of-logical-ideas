---
type: qod
publish: true
course:
- Mathematics 30-1
topic: Polynomial Functions
show_solution: true
qod_id: DIP-30-1-2014-NR2
diploma_eligible: true
diploma_ready: true
review_status: certified-batch05
question_format: written-response
diploma_cognitive_level: Conceptual
diploma_performance_standard: Acceptable
diploma_outcomes: '12'
tags:
- qod
- diploma-preparation
- written-response
certified_batch: 5
diploma_original_percent_correct: 55.8
diploma_original_item_format: numerical-response
title: "Inferring polynomial coefficients from intercept behaviour"
aliases: []
domain: null
learning_order: null
estimated_minutes: null
calculator: null
curriculum_alignment: []
cognitive_level: ["Conceptual"]
performance_standard: ["Acceptable"]
source: null
source_kind: null
source_question: null
source_topic: null
source_format: "numerical-response"
source_equivalence: null
source_percent_correct: 55.8
source_mean_score: null
assessment_metadata_origin: null
review_date: null
curriculum_review_required: null
---

A polynomial function has the graph shown below. The left branch rises and the right branch falls.

![[diploma-batch05-2014-nr2-polynomial.svg]]

A proposed factored rule has the form

$$
f(x)=a(x-b)^2(x-c)^3.
$$

Determine whether this form is consistent with the graph, then determine the **sign of $a$**, the **sign of $b$**, and the **sign of $c$**. Explain your choices using the graph's intercept behaviour and end behaviour.

## Solution

> [!example]- Show solution
>
> The graph crosses the axis with flattening at $x=-2$, so that zero has odd multiplicity $3$. It touches and turns at $x=3$, so that zero has even multiplicity $2$. The stated form is consistent, with
>
> $$
> b=3>0,\qquad c=-2<0.
> $$
>
> The total degree is $5$ (odd). The left branch rises and the right branch falls, requiring a **negative** leading coefficient, hence $a<0$.
>
> $$
> \boxed{a<0,\quad b>0,\quad c<0}.
> $$
>
> One compatible rule is $f(x)=-0.035(x-3)^2(x+2)^3$; the factor $0.035$ is not determined by intercept behaviour alone.

> [!abstract] Review First
> - [[Math/Polynomials/Sketching Polynomial Functions 1|Sketching Polynomial Functions 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Polynomials/Factoring Polynomials 1|Factoring Polynomials 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Polynomials/Factoring Polynomials 3|Factoring Polynomials 3]]
