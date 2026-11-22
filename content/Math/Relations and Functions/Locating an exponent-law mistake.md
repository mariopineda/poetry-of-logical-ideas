---
type: qod
publish: true
course:
- Mathematics 30-1
- Mathematics 30-2
topic: Exponential Equations
show_solution: true
qod_id: DIP-30-2-V021
diploma_eligible: true
diploma_ready: true
review_status: reviewed-batch-16
question_format: written-response
diploma_cognitive_level: Conceptual
diploma_performance_standard: Acceptable
diploma_outcomes: '5'
tags:
- qod
- diploma-preparation
- written-response
- supplementary
certified_batch: 16
source_kind: supplementary-practice
assessment_metadata_origin: author-estimated
source_equivalence: not-applicable-supplementary
---

A student attempts to solve the exponential equation

$$
4^{2n+1}=64^{n-2}
$$

using the following steps:

$$
\begin{aligned}
\text{Step I: } &4^{2n+1}=(4^3)^{n-2}\\
\text{Step II: }&4^{2n+1}=4^{3n-2}\\
\text{Step III: }&2n+1=3n-2\\
\text{Step IV: }&n=3.
\end{aligned}
$$

Identify the **first incorrect step**, explain the exponent-law error, and solve the original equation correctly.

## Solution

> [!example]- Show solution
> Step I is correct, because $64=4^3$.
>
> **Step II is the first incorrect step.** The exponent law $(a^p)^q=a^{pq}$ requires multiplying the complete exponent by $3$:
>
> $$
> (4^3)^{n-2}=4^{3(n-2)}=4^{3n-6},
> $$
>
> not $4^{3n-2}$. Therefore,
>
> $$
> 4^{2n+1}=4^{3n-6}
> \quad\Longrightarrow\quad2n+1=3n-6.
> $$
>
> Solving gives
>
> $$
> \boxed{n=7}.
> $$
>
> Verification: when $n=7$, both sides equal $4^{15}$.

> [!abstract] Review First
> - [[Math/Exponential Functions/Exponent Laws 1|Exponent Laws 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Exponential Functions/Exponential Equations 2|Exponential Equations 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Exponential Functions/Exponential Equations 3|Exponential Equations 3]]
