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
qod_id: "QOD-DB0F9BD619BD5A0FE32166DF"
title: "Permutations - At Least and At Most 3"
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
  - "2026-10-27|B4"
---

A jewellery designer has **5 different rings** available for a display. The rings will be arranged in a single row, and each ring may be used only once.

Determine how many different displays can be created using:

### A.

Exactly **2 rings**.

### B.

**At least 2 rings**.

### C.

**At most 2 rings**, but at least one must be used.

## Solution

> [!example]- Show solution
>
> ### A.
>
> Exactly 2 rings:
>
> $$
> {}_5P_2=5(4)=\boxed{20}
> $$
>
> ### B.
>
> At least 2 rings means considering each allowable case and adding the results:
>
> $$
> {}_5P_2+{}_5P_3+{}_5P_4+{}_5P_5=20+60+120+120
> $$
>
> $$
> =\boxed{320}
> $$
>
> ### C.
>
> At most 2 rings, with at least one used, means considering each allowable case and adding the results:
>
> $$
> {}_5P_1+{}_5P_2=5+20
> $$
>
> $$
> =\boxed{25}
> $$

> [!abstract] Review First
> - [[Math/Combinatorics/Permutations 1|Permutations 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Permutations - At Least and At Most 1|Permutations - At Least and At Most 1]]
> - [[Math/Combinatorics/Permutations - At Least and At Most 2|Permutations - At Least and At Most 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Combinations 1|Combinations 1]]
