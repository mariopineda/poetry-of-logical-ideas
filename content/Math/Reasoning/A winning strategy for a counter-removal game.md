---
type: qod
publish: true
course:
- Mathematics 30-2
- Mathematics 30-3
topic: Logical Reasoning
show_solution: true
qod_id: DIP-30-2-X023
diploma_eligible: true
diploma_ready: true
review_status: reviewed-batch-16
question_format: written-response
diploma_cognitive_level: Problem Solving
diploma_performance_standard: Acceptable
diploma_outcomes: '1'
tags:
- qod
- diploma-preparation
- written-response
- supplementary
certified_batch: 16
source_kind: supplementary-practice
assessment_metadata_origin: author-estimated
source_equivalence: not-applicable-supplementary
title: "A winning strategy for a counter-removal game"
aliases: []
domain: null
learning_order: null
estimated_minutes: null
calculator: null
curriculum_alignment: []
cognitive_level: ["Problem Solving"]
performance_standard: ["Acceptable"]
source: null
source_question: null
source_topic: null
source_format: null
source_percent_correct: null
source_mean_score: null
review_date: null
curriculum_review_required: null
used_in: []
---

Two players take turns removing **one, two, or three counters** from a pile of nine. The player who takes the last counter wins. Maya moves first, and both players play optimally.

Determine Maya's **best first move**. Give a strategy that proves she can force a win, regardless of the opponent's legal moves.

## Solution

> [!example]- Show solution
> Maya should take **one counter**, leaving eight, which is a multiple of four.
>
> Suppose the opponent subsequently takes $k\in\{1,2,3\}$ counters. Maya responds by taking $4-k$ counters. This is always legal, because $4-k$ is also one of $1,2,3$.
>
> Each opponent–Maya pair of moves removes exactly four counters:
>
> $$
> k+(4-k)=4.
> $$
>
> Starting from eight, these pairs reduce the pile from $8$ to $4$, then from $4$ to $0$. Maya necessarily removes the final counter.
>
> Thus the winning first move is
>
> $$
> \boxed{1\text{ counter}}.
> $$

> [!abstract] Review First
> - [[Math/Puzzles and Games/Puzzles & Games 1|Puzzles & Games 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Set Theory/Set Theory 1|Set Theory 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Counting Methods Challenge 1|Counting Methods Challenge 1]]
