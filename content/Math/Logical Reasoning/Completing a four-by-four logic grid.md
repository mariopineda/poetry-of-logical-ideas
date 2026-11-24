---
type: qod
publish: true
course:
- Mathematics 30-2
topic: Logical Reasoning
show_solution: true
qod_id: DIP-30-2-2021AUG-MC1
diploma_eligible: true
diploma_ready: true
review_status: reviewed-batch12
question_format: written-response
diploma_cognitive_level: Problem Solving
diploma_performance_standard: Acceptable
diploma_outcomes: '1'
tags:
- diploma-preparation
- qod
- written-response
historical_source_percent_correct: 73.6
certified_batch: 12
diploma_original_topic: LR
diploma_original_item_format: multiple-choice
diploma_original_percent_correct: 73.6
title: "Completing a four-by-four logic grid"
aliases: []
domain: null
learning_order: null
estimated_minutes: null
calculator: null
curriculum_alignment: []
cognitive_level: ["Problem Solving"]
performance_standard: ["Acceptable"]
source: null
source_kind: null
source_question: null
source_topic: "LR"
source_format: "multiple-choice"
source_equivalence: null
source_percent_correct: 73.6
source_mean_score: null
assessment_metadata_origin: null
review_date: null
curriculum_review_required: null
---

The diagram is a $4\times4$ logic grid. Each row and column must contain the digits $1,2,3,4$ exactly once. Each **irregular four-cell region** enclosed by thick borders must also contain those digits exactly once.

![[batch12-irregular-region-logic-grid.svg]]

Fill the entire grid, determine the values of **X** and **Y**, and show how the row, column, and irregular-region restrictions establish a unique solution.

## Solution

> [!example]- Show solution
> From row 1 and its region restrictions, $X=3$. Column and region elimination then gives row 2 as $(3,4,1,2)$ and row 3 as $(4,1,2,3)$, so $Y=1$. The completed grid is
>
> $$\begin{pmatrix}
> 1&2&3&4\\
> 3&4&1&2\\
> 4&1&2&3\\
> 2&3&4&1
> \end{pmatrix}.$$
>
> Thus $\boxed{X=3}$ (row 1, column 3) and $\boxed{Y=1}$ (row 3, column 2). Every row, column and outlined four-cell region contains exactly the four required digits. An exhaustive check of all row permutations satisfying the given clues and the region constraints yields exactly one completion.

> [!abstract] Review First
> - [[Math/Reasoning/Deductive Reasoning 1|Deductive Reasoning 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Reasoning/Deductive Reasoning 2|Deductive Reasoning 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Set Theory/Set Theory - Subsets - Practice 2 - Multiples and Subset Claims|Set Theory - Subsets - Practice 2 - Multiples and Subset Claims]]
