---
type: qod
publish: true
course:
  - Mathematics 30-2
  - Mathematics 30-1
topic: Permutations
show_solution: true
diploma_eligible: true
diploma_ready: false
diploma_screening: strong-candidate-2026-11-22
tags:
  - qod
  - diploma-preparation
qod_id: "QOD-B7758644FC4EBD4EA419760C"
title: "Permutations - At Least and At Most 2"
aliases: []
domain: null
learning_order: null
estimated_minutes: null
calculator: null
question_format: null
curriculum_alignment: []
cognitive_level: []
performance_standard: []
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
  - "2026-10-27|B2"
---

A music teacher has **6 different songs** available for the closing sequence of a concert. Each song may be performed at most once, and the order of the songs matters.

Determine how many different closing sequences can be created using:

### A.

Exactly **4 songs**.

### B.

**At least 4 songs**.

### C.

**At most 4 songs**, but at least one must be used.

## Solution

> [!example]- Show solution
>
> ### A.
>
> Exactly 4 songs:
>
> $$
> {}_6P_4=6(5)(4)(3)=\boxed{360}
> $$
>
> ### B.
>
> At least 4 songs means considering each allowable case and adding the results:
>
> $$
> {}_6P_4+{}_6P_5+{}_6P_6=360+720+720
> $$
>
> $$
> =\boxed{1800}
> $$
>
> ### C.
>
> At most 4 songs, with at least one used, means considering each allowable case and adding the results:
>
> $$
> {}_6P_1+{}_6P_2+{}_6P_3+{}_6P_4=6+30+120+360
> $$
>
> $$
> =\boxed{516}
> $$

> [!abstract] Review First
> - [[Math/Combinatorics/Permutations 1|Permutations 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Permutations - At Least and At Most 1|Permutations - At Least and At Most 1]]
> - [[Math/Combinatorics/Permutations - At Least and At Most 3|Permutations - At Least and At Most 3]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Combinations 1|Combinations 1]]
