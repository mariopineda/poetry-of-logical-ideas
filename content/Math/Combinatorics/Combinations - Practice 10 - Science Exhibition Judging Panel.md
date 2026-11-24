---
type: qod
publish: true
course:
  - Mathematics 30-2
  - Mathematics 30-1
topic: "Combinations"
show_solution: true
prerequisites:
  - "Combinations - Practice 4 - Intergrade Environment Committee"
related:
  - "Combinations - Practice 14 - Art Society Committee Sizes"
qod_id: "QOD-2BAC4DE119FA09B9308BA3D3"
title: "Combinations - Practice 10 - Science Exhibition Judging Panel"
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
---

A science exhibition has **four teachers** and **seven parent volunteers**. A panel is a nonempty group unless a leadership role is specified. How many different panels are possible if:

### A. there are exactly 2 teachers (including a specified teacher, Nora) and 2 parents;
### B. there is a teacher chair, a parent chair, and 4 additional unranked judges;
### C. the panel has **at most 4** members;
### D. the panel has **at least 7** members?

## Solution

> [!example]- Show solution
>
> ### A.
>
> Nora is fixed; choose 1 more teacher from 3 and 2 parents from 7:
>
> $$\binom31\binom72=\boxed{63}.$$
>
> ### B.
>
> There are 4 teacher-chair choices and 7 parent-chair choices. Choose 4 other judges from the remaining 9 people:
>
> $$4\cdot7\cdot\binom94=\boxed{3\,528}.$$
>
> ### C.
>
> The empty panel is **not allowed**, so include sizes 1, 2, 3 and 4:
>
> $$\sum_{k=1}^4\binom{11}k=\boxed{561}.$$
>
> ### D.
>
> Count panel sizes 7 through 11:
>
> $$\sum_{k=7}^{11}\binom{11}k=\boxed{562}.$$

> [!abstract] Review First
> - [[Math/Combinatorics/Combinations - Practice 4 - Intergrade Environment Committee|Combinations - Practice 4 - Intergrade Environment Committee]]
> - [[Math/Combinatorics/Selecting a gallery review panel|Selecting a gallery review panel]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Combinations - Practice 14 - Art Society Committee Sizes|Combinations - Practice 14 - Art Society Committee Sizes]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Counting Methods Review - Practice 20 - Interdisciplinary Judges|Counting Methods Review - Practice 20 - Interdisciplinary Judges]]
