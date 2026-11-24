---
type: qod
publish: true
course:
- Mathematics 30-2
topic: Probability
show_solution: true
qod_id: DIP-30-2-N007
diploma_eligible: true
diploma_ready: true
review_status: reviewed-batch-16
question_format: written-response
diploma_cognitive_level: Conceptual
diploma_performance_standard: Excellence
diploma_outcomes: '3'
tags:
- qod
- diploma-preparation
- written-response
- supplementary
certified_batch: 16
source_kind: supplementary-practice
assessment_metadata_origin: author-estimated
source_equivalence: not-applicable-supplementary
title: "Exactly one sensor activates"
aliases: []
domain: null
learning_order: null
estimated_minutes: null
calculator: null
curriculum_alignment: []
cognitive_level: ["Conceptual"]
performance_standard: ["Excellence"]
source: null
source_question: null
source_topic: null
source_format: null
source_percent_correct: null
source_mean_score: null
review_date: null
curriculum_review_required: null
---

Two independent motion sensors monitor a wildlife corridor. Sensor A activates with probability $0.65$, and sensor B activates with probability $0.40$ during a particular interval.

Determine the probability that **exactly one** sensor activates. Show both mutually exclusive cases and explain why their probabilities can be added.

## Solution

> [!example]- Show solution
> Exactly one sensor activates in one of two disjoint ways:
>
> 1. A activates and B does not:
>
>    $$P(A\cap B^c)=0.65(1-0.40)=0.39.$$
> 2. B activates and A does not:
>
>    $$P(A^c\cap B)=(1-0.65)(0.40)=0.14.$$
>
> Independence allows each joint probability to be found by multiplication. Since the cases cannot occur together, we add:
>
> $$
> P(\text{exactly one})=0.39+0.14=\boxed{0.53}.
> $$

> [!abstract] Review First
> - [[Math/Combinatorics/Fundamental Counting Principle 1|Fundamental Counting Principle 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Set Theory/Set Theory - Venn - Practice 3 - Union and Intersection of Integers|Set Theory - Venn - Practice 3 - Union and Intersection of Integers]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Combinations - Playing Card Hands 1|Combinations - Playing Card Hands 1]]
