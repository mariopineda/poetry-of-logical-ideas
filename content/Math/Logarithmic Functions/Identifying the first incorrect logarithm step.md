---
type: qod
publish: true
course:
- Mathematics 30-1
topic: Logarithmic Functions
show_solution: true
qod_id: DIP-30-1-2017-MC7
diploma_eligible: true
diploma_ready: true
review_status: certified_batch03_proof_and_source_equivalence
question_format: written-response
diploma_original_format: multiple-choice
diploma_cognitive_level: Conceptual
diploma_performance_standard: Acceptable
diploma_outcomes: RF 8
diploma_historical_percent_correct: 34.3
tags:
- qod
- diploma-preparation
- written-response
certified_batch: 3
---

For $x>0$, two students simplify $\left(3\log_2 x+\log_2 x^2\right)^2$. Student A writes: Step 1: $(\log_2 x^3+\log_2 x^2)^2$; Step 2: $(\log_2 x^5)^2$; Step 3: $\log_2 x^{10}$. Student B writes at Step 1: $9(\log_2 x)^2+(\log_2 x^2)^2$. For each student, identify the **first incorrect step**, explain the error, and give the correct simplified expression.

## Solution

> [!example]- Show solution
> Put $L=\log_2x$, with $x>0$. By the power law, $\log_2x^2=2L$, so the original expression equals
>
> $$(3L+2L)^2=\boxed{25L^2=25(\log_2x)^2}.$$
>
> Student A correctly rewrites $3\log_2x=\log_2x^3$ and combines the logarithms to $\log_2x^5$. Their **first incorrect line is Step 3**: squaring a logarithm cannot be moved inside its argument as a square of the argument. Student B's **Step 1** is already false because $(a+b)^2=a^2+2ab+b^2$, not $a^2+b^2$. Both error locations are independently checked against the correct expression.

> [!abstract] Review First
> - [[Math/Logarithmic Functions/Logarithm Laws 1|Logarithm Laws 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Logarithmic Functions/Logarithm Laws 2|Logarithm Laws 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Logarithmic Functions/Logarithmic Functions 1|Logarithmic Functions 1]]
