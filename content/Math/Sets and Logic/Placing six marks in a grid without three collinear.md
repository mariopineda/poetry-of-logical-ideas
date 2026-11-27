---
type: qod
publish: true
course:
- Mathematics 30-2
topic: Sets and Logic
show_solution: true
qod_id: DIP-30-2-2013-MC14
diploma_eligible: true
diploma_ready: true
review_status: certified-batch07
question_format: written-response
diploma_cognitive_level: Problem Solving
diploma_performance_standard: Acceptable
diploma_outcomes: '1'
tags:
- qod
- diploma-preparation
- written-response
certified_batch: 7
diploma_original_percent_correct: 69.3
diploma_original_item_format: multiple-choice
title: "Placing six marks in a grid without three collinear"
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
source_topic: null
source_format: "multiple-choice"
source_equivalence: null
source_percent_correct: 69.3
source_mean_score: null
assessment_metadata_origin: null
review_date: null
curriculum_review_required: null
used_in: []
---

On the $4\times4$ grid of points below, place **six X marks on six distinct points** such that no three marked points lie on a single straight line (horizontal, vertical, or diagonal). Number the rows from top to bottom and columns from left to right.

![[diploma-batch07-2013-mc14-lattice-grid.svg]]

List your six coordinates as $(\text{row},\text{column})$, and explain how you know the placement satisfies the rule.

## Solution

> [!example]- Show solution
> One valid placement is
>
> $$\boxed{(1,1),(1,2),(2,1),(2,2),(3,4),(4,3)}.$$
>
> The first two rows each contain only two X marks; the last two rows each contain one. Columns similarly have at most two. To check diagonals and other straight lines, inspect every triple of selected points: for any distinct points $(r_i,c_i)$, they are collinear only if
>
> $$(r_2-r_1)(c_3-c_1)=(r_3-r_1)(c_2-c_1).$$
>
> None of the $\binom63=20$ triples of the six listed points satisfies this equality. Therefore no three of the marked points are collinear.

> [!abstract] Review First
> - [[Math/Set Theory/Set Theory - Venn - Practice 1 - Two Clubs at an Environmental School|Set Theory - Venn - Practice 1 - Two Clubs at an Environmental School]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Set Theory/Set Theory - Venn - Practice 3 - Union and Intersection of Integers|Set Theory - Venn - Practice 3 - Union and Intersection of Integers]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Set Theory/Set Theory - Subsets - Practice 2 - Multiples and Subset Claims|Set Theory - Subsets - Practice 2 - Multiples and Subset Claims]]
