---
type: qod
publish: true
course:
  - "Mathematics 20-1"
  - "Mathematics 30-1"
  - Mathematics 31
topic: "Rational Expressions"
show_solution: true
diploma_eligible: true
diploma_ready: false
diploma_screening: strong-candidate-2026-11-22
tags:
  - qod
  - diploma-preparation
qod_id: "QOD-AF7F0982C503D04D0A19742B"
title: "Rational Expressions - Error Analysis 1"
aliases: []
domain: null
learning_order: null
estimated_minutes: null
calculator: null
question_format: null
curriculum_alignment: []
cognitive_level: []
performance_standard: []
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


A student writes

$$
\frac{x^2-25}{x^2+3x-10}=1,\qquad x\ne2.
$$

The student's solution contains both an algebraic error and a domain error.

1. Identify both errors.
2. Give the correct simplified expression and all restrictions.
3. Determine the coordinates of any hole.
4. State the vertical asymptote.

## Solution

> [!example]- Show solution
>
> Factor both polynomials:
>
> $$
> x^2-25=(x-5)(x+5)
> $$
>
> and
>
> $$
> x^2+3x-10=(x+5)(x-2).
> $$
>
> The student incorrectly cancelled unlike factors. Only the common factor $x+5$ may be cancelled.
>
> The original denominator is zero at
>
> $$
> x=-5\quad\text{and}\quad x=2,
> $$
>
> so the student also omitted the restriction $x\ne-5$.
>
> Correctly,
>
> $$
> \frac{(x-5)(x+5)}{(x+5)(x-2)}
> =\frac{x-5}{x-2},
> $$
>
> with
>
> $$
> \boxed{x\ne-5,2}.
> $$
>
> Thus,
>
> $$
> \boxed{\frac{x-5}{x-2}},\qquad \boxed{x\ne-5,2}.
> $$
>
> Since $x+5$ cancels, $x=-5$ is a hole. Its $y$-coordinate is
>
> $$
> \frac{-5-5}{-5-2}=\frac{10}{7}.
> $$
>
> Therefore the hole is
>
> $$
> \boxed{\left(-5,\frac{10}{7}\right)}.
> $$
>
> Since $x-2$ remains in the denominator, the vertical asymptote is
>
> $$
> \boxed{x=2}.
> $$

> [!abstract] Review First
> - [[Math/Rational Expressions & Equations/Simplifying Rational Expressions 4|Simplifying Rational Expressions 4]]
> - [[Math/Rational Expressions & Equations/Non-Permissible Values 1|Non-Permissible Values 1]]
> - [[Math/Polynomials/Factoring Polynomials 3|Factoring Polynomials 3]]
> - [[Math/Rational Expressions & Equations/Solving Rational Equations 1|Solving Rational Equations 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Rational Expressions & Equations/Rational Functions - Parameter and Removable Discontinuity 1|Rational Functions - Parameter and Removable Discontinuity 1]]
> - [[Math/Rational Expressions & Equations/Rational Functions - Equivalent Rules and Domains 1|Rational Functions - Equivalent Rules and Domains 1]]
> - [[Math/Relations and Functions/Domain & Range Algebraically 1|Domain & Range Algebraically 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Relations and Functions/Domain & Range Algebraically 1|Domain & Range Algebraically 1]]
> - [[Math/Relations and Functions/Domain and Range - Reciprocal and Quadratic Functions|Domain and Range - Reciprocal and Quadratic Functions]]
