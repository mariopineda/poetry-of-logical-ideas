---
type: qod
publish: true
course:
  - Mathematics 30-2
  - Mathematics 30-1
topic: Pathway Problems
show_solution: true
diploma_eligible: true
diploma_ready: false
diploma_screening: strong-candidate-2026-11-22
tags:
  - qod
  - diploma-preparation
qod_id: "QOD-CE322A82834C9B5FD6D4736E"
title: "Permutations - Map Pathways 3"
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
  - "2026-11-04|B4"
---

The map shows a person travelling from **Start** to **Finish**. The person must pass through **exactly one** of the following locations:

- the **Café**
- the **Park**

At every intersection, the person may move only **one block right** or **one block up**.

Using **permutations and factorial notation**, determine the number of distinct shortest pathways from Start to Finish that satisfy the condition.

![[Pathway Map Grid 3.png]]

## Solution

> [!example]- Show solution
>
> Count the pathways through the **Café** and through the **Park** separately.
>
> ### Pathways through the Café
>
> From Start to the Café:
>
> $$
> \frac{6!}{2!4!}=15.
> $$
>
> From the Café to Finish:
>
> $$
> \frac{5!}{4!1!}=5.
> $$
>
> Therefore,
>
> $$
> 15(5)=75.
> $$
>
> ### Pathways through the Park
>
> From Start to the Park:
>
> $$
> \frac{6!}{4!2!}=15.
> $$
>
> From the Park to Finish:
>
> $$
> \frac{5!}{2!3!}=10.
> $$
>
> Therefore,
>
> $$
> 15(10)=150.
> $$
>
> A valid shortest pathway cannot pass through **both** locations. Travelling from the Café to the Park would require moving down, while travelling from the Park to the Café would require moving left.
>
> Therefore, the two cases do not overlap:
>
> $$
> 75+150=\boxed{225}.
> $$

> [!abstract] Review First
> - [[Math/Combinatorics/Permutations - Map Pathways 2|Permutations - Map Pathways 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Permutations 3|Permutations 3]]
> - [[Math/Combinatorics/Permutations - Map Pathways 1|Permutations - Map Pathways 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
