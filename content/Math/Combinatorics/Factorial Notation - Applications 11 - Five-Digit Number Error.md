---
type: qod
publish: true
course:
  - Mathematics 30-2
  - Mathematics 30-1
topic: Factorial Notation
show_solution: true
diploma_eligible: true
diploma_ready: false
diploma_screening: strong-candidate-2026-11-22
tags:
  - qod
  - diploma-preparation
qod_id: "QOD-D7061823F48FE84F4F4FB354"
title: "Factorial Notation - Applications 11 - Five-Digit Number Error"
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

A digital-art installation displays **five-digit natural numbers** made using the digits \(0,1,2,3,4,5,6,7\), with **no repeated digits**.

A student claims that the number of possible displays is

$$
8\cdot7\cdot6\cdot5\cdot4=6720.
$$

### A.

Explain the student's error.

### B.

Determine the correct number of five-digit natural numbers.

### C.

Would the student's calculation be correct if the display used **five-character identification codes** instead of five-digit natural numbers, and codes were allowed to begin with \(0\)? Explain.

## Solution

> [!example]- Show solution
>
> ### A.
>
> The student treated all eight digits as possible choices for the **first position**, including \(0\). But a five-digit natural number **cannot begin with \(0\)**: a string such as \(01234\) represents a four-digit number.
>
> ### B.
>
> The first digit has \(7\) choices (\(1\) through \(7\)). For the second position there are \(7\) digits left, **including \(0\)**; after that, there are \(6,5,4\) choices:
>
> $$
> 7\cdot7\cdot6\cdot5\cdot4
> =\boxed{5880}.
> $$
>
> So **5880 five-digit natural numbers** can be formed.
>
> ### C.
>
> **Yes.** For identification codes, a leading zero is allowed. The eight available digits give \(8\) choices first, followed by \(7,6,5,4\) choices without repetition:
>
> $$
> 8\cdot7\cdot6\cdot5\cdot4
> =\boxed{6720}.
> $$
>
> The distinction is whether the first character must be a **nonzero leading digit**.

> [!abstract] Review First
> - [[Math/Combinatorics/Factorial Notation - Applications 6 - ORBITS Letter Sequences|Factorial Notation - Applications 6 - ORBITS Letter Sequences]]
> - [[Math/Combinatorics/Fundamental Counting Principle 14 - Four-Digit Race Numbers|Fundamental Counting Principle 14 - Four-Digit Race Numbers]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Counting Methods Challenge 1|Counting Methods Challenge 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
