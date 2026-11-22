---
type: qod
publish: true
course:
- Mathematics 30-1
topic: Binomial Theorem
show_solution: true
qod_id: DIP-30-1-2014-MC12
diploma_eligible: true
diploma_ready: true
review_status: certified-batch05
question_format: written-response
diploma_cognitive_level: Problem Solving
diploma_performance_standard: Excellence
diploma_outcomes: '4'
tags:
- qod
- diploma-preparation
- written-response
certified_batch: 5
diploma_original_percent_correct: 59.2
diploma_original_item_format: multiple-choice
---

A designer expands the binomial

$$
(5x^4-2y)^7
$$

in **descending powers of $x$**. Find an expression for the exponent of $x$ in the general term $T_{k+1}$, where $0\le k\le7$. Then generalize your result to the expansion of $(A x^p+B)^n$.

## Solution

> [!example]- Show solution
>
> In a binomial expansion, the $(k+1)$-st term is
>
> $$
> T_{k+1}=\binom7k(5x^4)^{7-k}(-2y)^k.
> $$
>
> The only factor containing $x$ is $(x^4)^{7-k}$, so its exponent is
>
> $$
> \boxed{4(7-k)=28-4k}.
> $$
>
> More generally,
>
> $$
> T_{k+1}=\binom nk(Ax^p)^{n-k}B^k,
> $$
>
> whose exponent of $x$ is $\boxed{p(n-k)}$. The stated range of $k$ gives the terms from $T_1$ through $T_8$.

> [!abstract] Review First
> - [[Math/Combinatorics/Binomial Theorem 1|Binomial Theorem 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> _No linked questions yet._

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Counting Methods Challenge 3|Counting Methods Challenge 3]]
