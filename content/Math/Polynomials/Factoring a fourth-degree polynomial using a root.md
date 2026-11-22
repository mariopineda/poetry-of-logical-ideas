---
type: qod
publish: true
course:
- Mathematics 30-1
topic: Polynomial Functions
show_solution: true
qod_id: DIP-30-1-2016-MC10
diploma_eligible: true
diploma_ready: true
review_status: certified-batch05
question_format: written-response
diploma_cognitive_level: Procedural
diploma_performance_standard: Acceptable
diploma_outcomes: '11'
diploma_reference_performance_pct: 76.4
reference_statistic_note: Historical item result; not a difficulty measurement for the adapted QOD.
tags:
- qod
- diploma-preparation
- written-response
certified_batch: 5
diploma_original_percent_correct: 76.4
diploma_original_item_format: multiple-choice
---

A quartic polynomial is written as

$$
P(x)=x^4-3x^3-5x^2+15x+4x-12.
$$

A technician has verified that $x=3$ is a zero. Divide $P(x)$ by $x-3$ to determine the cubic factor, showing sufficient work to confirm a remainder of zero.

## Solution

> [!example]- Show solution
>
> Combine like terms:
>
> $$
> P(x)=x^4-3x^3-5x^2+19x-12.
> $$
>
> Synthetic division by $3$ gives
>
> $$
> \begin{array}{r|rrrrr}
> 3 & 1 & -3 & -5 & 19 & -12\\
>   &   &  3 &  0 & -15 & 12\\ \hline
>   & 1 &  0 & -5 &  4 & 0
> \end{array}
> $$
>
> The final $0$ is the remainder. The quotient is $x^3-5x+4$, so
>
> $$
> \boxed{P(x)=(x-3)(x^3-5x+4)}.
> $$

> [!abstract] Review First
> - [[Math/Polynomials/Sketching Polynomial Functions 1|Sketching Polynomial Functions 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Polynomials/Factoring Polynomials 1|Factoring Polynomials 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Polynomials/Factoring Polynomials 3|Factoring Polynomials 3]]
