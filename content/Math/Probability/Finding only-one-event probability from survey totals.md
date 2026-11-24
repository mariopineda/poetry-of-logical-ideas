---
type: qod
publish: true
course:
- Mathematics 30-2
topic: Probability
show_solution: true
qod_id: DIP-30-2-2016-MC13
diploma_eligible: true
diploma_ready: true
review_status: certified-batch08
question_format: written-response
diploma_cognitive_level: Procedural
diploma_performance_standard: Excellence
diploma_outcomes: '2'
tags:
- qod
- diploma-preparation
- written-response
diploma_original_percent_correct: 59.2
diploma_original_item_format: multiple-choice
diploma_original_topic: PR
certified_batch: 8
title: "Finding only-one-event probability from survey totals"
aliases: []
domain: null
learning_order: null
estimated_minutes: null
calculator: null
curriculum_alignment: []
cognitive_level: ["Procedural"]
performance_standard: ["Excellence"]
source: null
source_kind: null
source_question: null
source_topic: "PR"
source_format: "multiple-choice"
source_equivalence: null
source_percent_correct: 59.2
source_mean_score: null
assessment_metadata_origin: null
review_date: null
curriculum_review_required: null
---

A student survey yields

$$P(A)=0.61,\quad P(A\cap B)=0.27,\quad P(A\cup B)=0.83.$$

Calculate the probability that a student belongs to $B$ **but not** $A$. Then find the probabilities in all four regions of a two-set Venn partition and verify that they total 1.

## Solution

> [!example]- Show solution
> The union is the disjoint combination of all of $A$ and the part of $B$ outside $A$. Therefore
>
> $$P(B\cap A^c)=P(A\cup B)-P(A)=0.83-0.61=\boxed{0.22}.$$
>
> The four regions are: $A$ only $=0.61-0.27=0.34$; both $=0.27$; $B$ only $=0.22$; neither $=1-0.83=0.17$.
>
> Check: $0.34+0.27+0.22+0.17=1.00$. Every region is nonnegative, so these values form a possible joint distribution.

> [!abstract] Review First
> - [[Math/Combinatorics/Fundamental Counting Principle - Sample Space 1|Fundamental Counting Principle - Sample Space 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Fundamental Counting Principle - Sample Space 2|Fundamental Counting Principle - Sample Space 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Set Theory/Set Theory - Venn - Practice 5 - Tea and Coffee Survey|Set Theory - Venn - Practice 5 - Tea and Coffee Survey]]
