---
type: qod
publish: true
course:
  - Mathematics 30-2
  - Mathematics 30-1
topic: Permutations
show_solution: true
qod_id: "QOD-0CF3B8C114C5B89A278702E2"
title: "Counting Odd Natural Numbers 2"
aliases: []
domain: null
tags: []
learning_order: null
estimated_minutes: null
calculator: null
question_format: null
curriculum_alignment: []
cognitive_level: []
performance_standard: []
diploma_eligible: null
diploma_ready: null
source: null
source_kind: null
source_question: null
source_topic: null
source_format: null
source_equivalence: null
source_percent_correct: null
source_mean_score: null
assessment_metadata_origin: null
review_status: null
review_date: null
curriculum_review_required: null
used_in:
  - "2026-10-30|B2"
---

An astronomical observatory assigns **three-digit observation numbers** using the digits

$$
0,1,2,3,4,5,6,7.
$$

The observatory uses **odd natural numbers for images of astronomical targets** and even natural numbers for calibration images used to check and correct the telescope data.

How many different observation numbers can be assigned to astronomical-target images if:

### A.

No digit may be repeated?

### B.

Digits may be repeated?

## Solution

> [!example]- Show solution
>
> ### A.
>
> An astronomical-target image must have an odd observation number, so the units digit has $4$ choices:
>
> $$
> 1,3,5,7
> $$
>
> After choosing the units digit, there are $6$ remaining nonzero choices for the hundreds digit and $6$ choices for the tens digit.
>
> $$
> 4(6)(6)=\boxed{144}
> $$
>
> ### B.
>
> If digits may be repeated:
>
> - $7$ choices for the hundreds digit
> - $8$ choices for the tens digit
> - $4$ choices for the odd units digit
>
> $$
> 7(8)(4)=\boxed{224}
> $$

> [!abstract] Review First
> - [[Math/Combinatorics/Fundamental Counting Principle with Restrictions 1|Fundamental Counting Principle with Restrictions 1]]
> - [[Math/Combinatorics/Permutations 1|Permutations 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Counting Odd Natural Numbers 1|Counting Odd Natural Numbers 1]]
> - [[Math/Combinatorics/Counting Odd Natural Numbers 3|Counting Odd Natural Numbers 3]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Permutations with Restrictions - Practice 10 - Even Four-Digit Numbers|Permutations with Restrictions - Practice 10 - Even Four-Digit Numbers]]
