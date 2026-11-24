---
type: qod
publish: true
course:
  - Mathematics 30-2
  - Mathematics 30-1
topic: Fundamental Counting Principle
show_solution: true
diploma_eligible: true
diploma_ready: false
diploma_screening: strong-candidate-2026-11-22
tags:
  - qod
  - diploma-preparation
qod_id: "QOD-7EAF0B3524721C3333093A92"
title: "Fundamental Counting Principle 9 - Archive Access Codes"
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
---

A museum uses a **four-letter access code** for its digital archive. Each position may contain any of the eight letters $A,B,C,D,E,F,G,H$. The order of the letters matters.

### A.

How many codes are possible when **letters may be repeated**?

### B.

How many codes are possible when **no letter may be repeated**?

### C.

Explain why your answers in parts A and B differ.

## Solution

> [!example]- Show solution
>
> ### A. Repetition allowed
>
> Each of the four positions has $8$ choices:
>
> $$
> 8\times8\times8\times8=8^4=\boxed{4096}.
> $$
>
> ### B. No repetition
>
> After a letter is used, it is no longer available for a later position. The numbers of choices are $8$, $7$, $6$, and $5$:
>
> $$
> 8\times7\times6\times5=\boxed{1680}.
> $$
>
> ### C. Comparison
>
> Repetition gives more possibilities because selecting a letter does **not** reduce the choices for later positions. Without repetition, the number of available letters decreases after each selection. Thus $4096>1680$.

> [!abstract] Review First
> - [[Math/Combinatorics/Fundamental Counting Principle 8 - Wildlife Survey Kits|Fundamental Counting Principle 8 - Wildlife Survey Kits]]
> - [[Math/Combinatorics/Fundamental Counting Principle with Restrictions 1|Fundamental Counting Principle with Restrictions 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Fundamental Counting Principle with Restrictions 2|Fundamental Counting Principle with Restrictions 2]]
> - [[Math/Combinatorics/Factorial Notation - Applications 6 - ORBITS Letter Sequences|Factorial Notation - Applications 6 - ORBITS Letter Sequences]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Fundamental Counting Principle 10 - Museum Collection Labels|Fundamental Counting Principle 10 - Museum Collection Labels]]
> - [[Math/Combinatorics/Fundamental Counting Principle 13 - Festival Pass Identifiers|Fundamental Counting Principle 13 - Festival Pass Identifiers]]
