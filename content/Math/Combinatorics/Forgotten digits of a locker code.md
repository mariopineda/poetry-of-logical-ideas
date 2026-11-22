---
type: qod
publish: true
course:
- Mathematics 30-1
- Mathematics 30-2
topic: Permutations
show_solution: true
qod_id: DIP-30-2-N005
diploma_eligible: true
diploma_ready: true
review_status: reviewed-batch-16
question_format: written-response
diploma_cognitive_level: Problem Solving
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

A locker uses a **five-character digit code** with digits selected from $0$ through $9$, without repetition. Codes may begin with zero.

A student knows which **two different digits** occupy the first two positions, but not their order. The student remembers nothing about the final three positions.

Assuming every code consistent with these clues is equally likely, determine the probability of guessing the correct code on the first try. Explain your use of the product rule.

## Solution

> [!example]- Show solution
> The two known first-position digits can be ordered in
>
> $$
> 2!=2\text{ ways}.
> $$
>
> After using those two digits, eight digits are available for position 3, then seven for position 4, and six for position 5:
>
> $$
> 8\times7\times6=336\text{ possibilities}.
> $$
>
> The multiplication principle gives
>
> $$
> N=2(8)(7)(6)=672\text{ allowable codes}.
> $$
>
> Exactly one is correct, so the probability is
>
> $$
> \boxed{P=\frac1{672}\approx0.001488}.
> $$
>
> A leading zero is allowed because the code is a string of five digit characters, not necessarily a five-digit integer.

> [!abstract] Review First
> - [[Math/Combinatorics/Fundamental Counting Principle 1|Fundamental Counting Principle 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Counting Methods Review - Practice 12 - Binary Smart-Lock Tiles|Counting Methods Review - Practice 12 - Binary Smart-Lock Tiles]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Permutations with Restrictions - Practice 6 - Wildlife Tracker Codes|Permutations with Restrictions - Practice 6 - Wildlife Tracker Codes]]
