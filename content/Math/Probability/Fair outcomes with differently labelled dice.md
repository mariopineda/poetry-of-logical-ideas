---
type: qod
publish: true
course:
- Mathematics 30-2
topic: Probability
show_solution: true
qod_id: DIP-30-2-2021AUG-MC5
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
historical_source_percent_correct: 69.4
certified_batch: 12
diploma_original_topic: PR
diploma_original_item_format: multiple-choice
diploma_original_percent_correct: 69.4
title: "Fair outcomes with differently labelled dice"
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
source_topic: "PR"
source_format: "multiple-choice"
source_equivalence: null
source_percent_correct: 69.4
source_mean_score: null
assessment_metadata_origin: null
review_date: null
curriculum_review_required: null
used_in: []
---

Two fair six-sided dice have nonstandard labels. Die A has faces $1,1,2,2,3,4$ and Die B has faces $1,2,2,3,4,5$. The dice are rolled independently. The sum of their face values is used to determine the winner.

![[batch12-two-dice-sum-grid.svg]]

An initial rule gives Player A the win when the sum is **at most 5**, and Player B the win otherwise.

**(a)** Determine each player's probability of winning under this rule and explain whether the game is fair.

**(b)** Design a **different, exhaustive two-player winning rule based on the sum** that gives each player probability $\frac12$. Prove that it is fair using the 36 equally likely ordered face outcomes. The rule must decide a winner on every roll.

## Solution

> [!example]- Show solution
> **(a)** There are $6\times6=36$ equally likely face pairs. Counting entries in the sum grid gives 22 outcomes with sum at most 5 and 14 outcomes with sum at least 6. Hence
>
> $$P(A)=\boxed{\frac{22}{36}=\frac{11}{18}},\qquad P(B)=\boxed{\frac{14}{36}=\frac7{18}}.$$
>
> The probabilities differ, so the original rule is **not fair**.
>
> **(b)** One fair rule is **A wins if the sum is even, B wins if it is odd**. Each die has exactly three even faces and three odd faces. An even sum occurs with even–even or odd–odd:
>
> $$P(\text{even})=\frac36\cdot\frac36+\frac36\cdot\frac36=\frac{18}{36}=\frac12.$$
>
> The other 18 outcomes give an odd sum, so $P(\text{odd})=\frac12$. Each roll is covered by exactly one rule and both players are equally likely to win.

> [!abstract] Review First
> - [[Math/Set Theory/Set Theory - Venn - Practice 1 - Two Clubs at an Environmental School|Set Theory - Venn - Practice 1 - Two Clubs at an Environmental School]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Set Theory/Set Theory - Venn - Practice 7 - Workshop Preferences|Set Theory - Venn - Practice 7 - Workshop Preferences]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Combinations - Practice 3 - Field Study Volunteers|Combinations - Practice 3 - Field Study Volunteers]]
