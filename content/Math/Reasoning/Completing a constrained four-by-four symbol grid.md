---
type: qod
publish: true
course:
- Mathematics 30-2
topic: Logical Reasoning
show_solution: true
qod_id: DIP-30-2-201901-NR2
diploma_eligible: true
diploma_ready: true
review_status: reviewed-batch11
question_format: written-response
diploma_cognitive_level: Problem Solving
diploma_performance_standard: Acceptable
diploma_outcomes: '1'
tags:
- qod
- diploma-preparation
- written-response
certified_batch: 11
diploma_original_topic: LR
diploma_original_item_format: numerical-response
diploma_original_percent_correct: 80.8
title: "Completing a constrained four-by-four symbol grid"
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
source_format: "numerical-response"
source_equivalence: null
source_percent_correct: 80.8
source_mean_score: null
assessment_metadata_origin: null
review_date: null
curriculum_review_required: null
used_in: []
---

Complete the partially filled $4\times4$ logic grid. Use each of the digits $1,2,3,4$ **exactly once in every row, every column, and every four-cell region outlined with **thick borders****.

![[batch11-four-by-four-logic-grid.svg]]

Determine the values of **A** and **B**, then show the complete grid. Explain how you checked the conditions.

## Solution

> [!example]- Show solution
> Row 1 already contains $2,4,3$, so its missing entry must be $\boxed{A=1}$. In the irregular region comprising $(r1,c1),(r1,c2),(r2,c1),(r3,c1)$, only $1$ is missing, so $(r2,c1)=1$. Column 1 then forces $(r4,c1)=4$.
>
> Row 3 contains $3$ and $2$, leaving $1$ and $4$ for columns 2 and 3. The irregular region containing $A$ needs $2$ and $4$ in its remaining cells; therefore $(r3,c3)=\boxed{B=4}$ and $(r3,c2)=1$. Continuing the column and region constraints completes the grid:
>
> $$\begin{pmatrix}2&4&1&3\\1&3&2&4\\3&1&4&2\\4&2&3&1\end{pmatrix}.$$
>
> Each row, column and irregular four-cell region contains $1,2,3,4$ exactly once. The given entries permit no other completion.

> [!abstract] Review First
> - [[Math/Reasoning/Logical Puzzle 1|Logical Puzzle 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Reasoning/Logical Puzzle 2|Logical Puzzle 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Puzzles and Games/Puzzles & Games 1|Puzzles & Games 1]]
