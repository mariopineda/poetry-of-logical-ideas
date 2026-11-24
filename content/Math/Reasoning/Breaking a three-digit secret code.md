---
type: qod
publish: true
course:
- Mathematics 30-2
topic: Logical Reasoning
show_solution: true
qod_id: DIP-30-2-201901-MC1
diploma_eligible: true
diploma_ready: true
review_status: reviewed-batch10
question_format: written-response
diploma_cognitive_level: Problem Solving
diploma_performance_standard: Acceptable
diploma_outcomes: '1'
tags:
- qod
- diploma-preparation
- written-response
diploma_original_item_format: multiple-choice
diploma_original_percent_correct: 77.6
diploma_original_topic: LR
certified_batch: 10
title: "Breaking a three-digit secret code"
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
source_percent_correct: 77.6
source_mean_score: null
assessment_metadata_origin: null
review_date: null
curriculum_review_required: null
---

A museum uses four-symbol access codes made from the symbols $A,B,C,D,E$. Symbols may repeat. A technician has made four guesses. The feedback reports how many symbols are **correct and in the correct position** and how many are **correct but in a different position** (a symbol is counted at most once).

| Guess | Code entered | Correct position | Correct symbol, wrong position |
|---|---|---:|---:|
| 1 | B D D B | 2 | 1 |
| 2 | D C C D | 0 | 1 |
| 3 | A D A B | 1 | 1 |
| 4 | D B D C | 0 | 2 |

Determine the secret four-symbol code and explain why no other code satisfies all four responses.

## Solution

> [!example]- Show solution
> Check the feedback against the code $\boxed{BDBE}$.
>
> - Guess 1, $BDDB$: positions 1 and 2 match, and the final $B$ is present in position 3 of the code. Feedback: $(2,1)$.
> - Guess 2, $DCCD$: no position matches, but one $D$ occurs in the code. Feedback: $(0,1)$.
> - Guess 3, $ADAB$: position 2 matches; $B$ is present in the code at another position. Feedback: $(1,1)$.
> - Guess 4, $DBDC$: no position matches, while $D$ and $B$ occur elsewhere. Feedback: $(0,2)$.
>
> A systematic elimination of all four-symbol codes using five permitted symbols leaves $24$ codes after guess 1, $8$ after guess 2, $2$ after guess 3, and **one** after guess 4: $\boxed{BDBE}$. These totals can be reproduced with a short table or organized case analysis.

> [!abstract] Review First
> - [[Math/Set Theory/Set Theory - Subsets - Practice 2 - Multiples and Subset Claims|Set Theory - Subsets - Practice 2 - Multiples and Subset Claims]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Set Theory/Set Theory - Venn - Practice 1 - Two Clubs at an Environmental School|Set Theory - Venn - Practice 1 - Two Clubs at an Environmental School]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Set Theory/Set Theory - Subsets - Practice 5 - Known and Unknown Complements|Set Theory - Subsets - Practice 5 - Known and Unknown Complements]]
