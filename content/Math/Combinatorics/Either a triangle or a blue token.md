---
type: qod
publish: true
course:
- Mathematics 30-2
topic: Probability
show_solution: true
qod_id: DIP-30-2-V013
diploma_eligible: true
diploma_ready: true
review_status: reviewed-batch-16
question_format: written-response
diploma_cognitive_level: Conceptual
diploma_performance_standard: Excellence
diploma_outcomes: '2'
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

A bag contains $18$ equally likely tokens. Each token has exactly one of three shapes (triangle, hexagon, or star) and one of six colours. Every shape–colour combination is represented **exactly once**. Blue is one of the six colours.

Determine the probability that a randomly selected token is **triangular or blue**. Use inclusion–exclusion and explain why the overlap must be subtracted.

## Solution

> [!example]- Show solution
> There are $6$ triangular tokens (one per colour) and $3$ blue tokens (one per shape). Exactly one token is both blue and triangular.
>
> If we add $6+3$, that common token is counted twice, so we subtract it once:
>
> $$
> N(T\cup B)=N(T)+N(B)-N(T\cap B)=6+3-1=8.
> $$
>
> All $18$ tokens are equally likely, so
>
> $$
> P(T\cup B)=\frac8{18}=\boxed{\frac49}.
> $$

> [!abstract] Review First
> - [[Math/Combinatorics/Fundamental Counting Principle 1|Fundamental Counting Principle 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Set Theory/Set Theory - Venn - Practice 3 - Union and Intersection of Integers|Set Theory - Venn - Practice 3 - Union and Intersection of Integers]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Combinations - Playing Card Hands 1|Combinations - Playing Card Hands 1]]
