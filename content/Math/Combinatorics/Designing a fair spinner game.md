---
type: qod
publish: true
course:
- Mathematics 30-2
topic: Probability
show_solution: true
qod_id: DIP-30-2-V012
diploma_eligible: true
diploma_ready: true
review_status: reviewed-batch-16
question_format: written-response
diploma_cognitive_level: Problem Solving
diploma_performance_standard: Acceptable
diploma_outcomes: '1'
tags:
- qod
- diploma-preparation
- written-response
- supplementary
certified_batch: 16
source_kind: supplementary-practice
assessment_metadata_origin: author-estimated
source_equivalence: not-applicable-supplementary
title: "Designing a fair spinner game"
aliases: []
domain: null
learning_order: null
estimated_minutes: null
calculator: null
curriculum_alignment: []
cognitive_level: ["Problem Solving"]
performance_standard: ["Acceptable"]
source: null
source_question: null
source_topic: null
source_format: null
source_percent_correct: null
source_mean_score: null
review_date: null
curriculum_review_required: null
used_in: []
---

Two independent fair spinners each have six equal-sized sectors. Spinner A is labelled $1,1,2,2,3,4$ and spinner B is labelled $1,2,2,3,3,4$.

![[batch16-two-fair-spinners.svg]]

The two numbers are added. Player A wins when the sum is **even**; Player B wins when it is **odd**.

**Is this a fair game?** Count the equally likely outcomes won by each player, calculate each winning probability, and justify your conclusion.

## Solution

> [!example]- Show solution
> There are $6\times6=36$ equally likely **sector pairs**, even when sectors have repeated labels.
>
> Spinner A has three odd-labelled sectors $(1,1,3)$ and three even-labelled sectors $(2,2,4)$. Spinner B also has three odd-labelled sectors $(1,3,3)$ and three even-labelled sectors $(2,2,4)$.
>
> An even sum occurs when the labels have the **same parity**:
>
> $$
> N(\text{even})=3(3)+3(3)=18.
> $$
>
> An odd sum occurs when the labels have **different parity**:
>
> $$
> N(\text{odd})=3(3)+3(3)=18.
> $$
>
> Therefore,
>
> $$
> P(\text{A wins})=\frac{18}{36}=\frac12,
> \qquad
> P(\text{B wins})=\frac{18}{36}=\frac12.
> $$
>
> **The game is fair** because both players have the same probability of winning. Repeated labels still represent separate spinner sectors.

> [!abstract] Review First
> - [[Math/Combinatorics/Fundamental Counting Principle 1|Fundamental Counting Principle 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Set Theory/Set Theory - Venn - Practice 3 - Union and Intersection of Integers|Set Theory - Venn - Practice 3 - Union and Intersection of Integers]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Combinations - Playing Card Hands 1|Combinations - Playing Card Hands 1]]
