---
type: qod
publish: true
course:
- Mathematics 30-1
topic: Rational Expressions & Equations
show_solution: true
qod_id: DIP-30-1-2017-MC13
diploma_eligible: true
diploma_ready: true
review_status: certified_batch03_proof_and_source_equivalence
question_format: written-response
diploma_original_format: multiple-choice
diploma_cognitive_level: Conceptual
diploma_performance_standard: Excellence
diploma_outcomes: RF 14
diploma_historical_percent_correct: 68.6
tags:
- qod
- diploma-preparation
- written-response
certified_batch: 3
title: "Reconstructing a rational function from its features"
aliases: []
domain: null
learning_order: null
estimated_minutes: null
calculator: null
curriculum_alignment: []
cognitive_level: ["Conceptual"]
performance_standard: ["Excellence"]
source: null
source_kind: null
source_question: null
source_topic: null
source_format: "multiple-choice"
source_equivalence: null
source_percent_correct: 68.6
source_mean_score: null
assessment_metadata_origin: null
review_date: null
curriculum_review_required: null
---

The graph of a rational function $R$ is shown below. Its dashed lines are asymptotes, and the open circle marks an excluded point.

1. Construct **one possible rational equation in factored form**, using only linear factors, that reproduces the displayed intercept, asymptotes, and hole.
2. State the domain of your function and the **exact coordinates** of the removable hole.

Explain how each visible feature determines a factor or restriction.

![[diploma-batch03-2017-mc13-rational-hole.svg]]

## Solution

> [!example]- Show solution
> The graph shows a horizontal asymptote at $y=1$, a vertical asymptote at $x=2$, and a crossing of the $x$-axis at $x=5$. The open circle is at $x=-3$. A ratio of linear terms with equal leading coefficients that fits those features after cancellation is
>
> $$\frac{x-5}{x-2}.$$
>
> To create the **hole** without changing the rest of the graph, insert the same factor into numerator and denominator:
>
> $$\boxed{R(x)=\frac{(x+3)(x-5)}{(x+3)(x-2)}}.$$
>
> The original formula has domain $\boxed{\mathbb R\setminus\{-3,2\}}$. At the missing input, the simplified expression would have value
>
> $$\lim_{x\to-3}R(x)=\frac{-8}{-5}=\frac85,$$
>
> so the open circle is $\boxed{(-3,8/5)}$. The uncompensated denominator factor at $x=2$ gives the vertical asymptote, not a second hole.

> [!abstract] Review First
> - [[Math/Rational Expressions & Equations/Rational Functions - Equivalent Rules and Domains 1|Rational Functions - Equivalent Rules and Domains 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Rational Expressions & Equations/Rational Functions - Holes and Vertical Asymptotes 1|Rational Functions - Holes and Vertical Asymptotes 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Rational Expressions & Equations/Rational Functions - Multiple Holes and Restrictions 1|Rational Functions - Multiple Holes and Restrictions 1]]
