---
type: qod
publish: true
course:
- Mathematics 30-2
topic: Probability
show_solution: true
qod_id: DIP-30-2-201901-WR1
diploma_eligible: true
diploma_ready: true
review_status: reviewed-batch11
question_format: written-response
diploma_cognitive_level: Conceptual, Procedural, Problem Solving
diploma_performance_standard: Acceptable, Excellence
diploma_outcomes: 1, 2, 3
tags:
- qod
- diploma-preparation
- written-response
certified_batch: 11
diploma_original_topic: PR
diploma_original_item_format: written-response
diploma_original_mean_raw_score: 2.9/7
title: "Two-stage colour events and odds"
aliases: []
domain: null
learning_order: null
estimated_minutes: null
calculator: null
curriculum_alignment: []
cognitive_level: ["Conceptual","Procedural","Problem Solving"]
performance_standard: ["Acceptable","Excellence"]
source: null
source_kind: null
source_question: null
source_topic: "PR"
source_format: "written-response"
source_equivalence: null
source_percent_correct: null
source_mean_score: "2.9/7"
assessment_metadata_origin: null
review_date: null
curriculum_review_required: null
used_in: []
---

Two independently inherited features of a garden plant are being studied. Uppercase letters represent dominant traits. One parent is $Pp$ and the other is $Pp$ for purple flowers; for tall stems, one parent is $Tt$ and the other is $tt$. Assume that these traits are inherited independently.

**Purple-flower sample space**

|  | $P$ | $p$ |
|:---:|:---:|:---:|
| $P$ | $PP$ | $Pp$ |
| $p$ | $Pp$ | $pp$ |

**Tall-stem sample space**

|  | $T$ | $t$ |
|:---:|:---:|:---:|
| $t$ | $Tt$ | $tt$ |
| $t$ | $Tt$ | $tt$ |

(a) State the **odds in favour** that a seedling has purple flowers.

(b) Determine the probability a seedling has both purple flowers and a tall stem.

(c) Are the events "purple flowers" and "tall stem" mutually exclusive? Justify mathematically.

(d) A separate independently inherited characteristic occurs with probability $\frac25$ for any one seedling. Two seedlings are grown independently. Find the probability that **both show the characteristic or neither shows it**. Show both cases.

## Solution

> [!example]- Show solution
> (a) Three of the four flower genotypes show purple, so the odds in favour are $\boxed{3:1}$.
>
> (b) $P(\text{purple})=\frac34$ and $P(\text{tall})=\frac12$. Independence gives
>
> $$P(\text{purple and tall})=\frac34\cdot\frac12=\boxed{\frac38}.$$
>
> (c) The events are **not mutually exclusive**: their intersection has positive probability $\frac38$. The same seedling can have both traits.
>
> (d) Two mutually exclusive outcomes satisfy the condition:
>
> $$P(\text{both show})=\left(\frac25\right)^2=\frac4{25},$$
> $$P(\text{neither shows})=\left(\frac35\right)^2=\frac9{25}.$$
>
> Add the two disjoint cases: $\boxed{\frac{13}{25}=0.52}$.

> [!abstract] Review First
> - [[Math/Combinatorics/Fundamental Counting Principle 1|Fundamental Counting Principle 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Counting Methods Review - Practice 1 - Permutation or Combination|Counting Methods Review - Practice 1 - Permutation or Combination]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Counting Methods Challenge 2|Counting Methods Challenge 2]]
