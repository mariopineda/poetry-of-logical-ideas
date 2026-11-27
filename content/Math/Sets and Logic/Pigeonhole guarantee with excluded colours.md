---
type: qod
publish: true
course:
- Mathematics 30-2
topic: Sets and Logic
show_solution: true
qod_id: DIP-30-2-2013-MC15
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
diploma_original_percent_correct: 21.6
diploma_original_item_format: multiple-choice
title: "Pigeonhole guarantee with excluded colours"
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
source_percent_correct: 21.6
source_mean_score: null
assessment_metadata_origin: null
review_date: null
curriculum_review_required: null
used_in: []
---

At a bead-making workshop, a jar contains **5 bronze-coloured beads**, **4 blue beads**, and **8 amber beads**. Beads are selected blindly, one at a time.

What is the **minimum number of draws** needed to guarantee that at least two selected beads have the same colour **other than bronze**? Explain the worst-case draw sequence.

## Solution

> [!example]- Show solution
> To delay obtaining a matching non-bronze pair, one could draw **all five bronze-coloured beads**, **one blue**, and **one amber**. That is $5+1+1=7$ draws without a blue pair or amber pair.
>
> The next draw cannot be bronze (all bronze beads are gone). It must be blue or amber and will match the bead of that colour already drawn. Thus the minimum guaranteed draw count is
>
> $$\boxed{7+1=8\text{ beads}}.$$
>
> The 7-draw example shows that a smaller guaranteed number is impossible; the next-draw argument shows that 8 always suffices.

> [!abstract] Review First
> - [[Math/Set Theory/Set Theory - Venn - Practice 1 - Two Clubs at an Environmental School|Set Theory - Venn - Practice 1 - Two Clubs at an Environmental School]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Set Theory/Set Theory - Venn - Practice 3 - Union and Intersection of Integers|Set Theory - Venn - Practice 3 - Union and Intersection of Integers]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Set Theory/Set Theory - Subsets - Practice 2 - Multiples and Subset Claims|Set Theory - Subsets - Practice 2 - Multiples and Subset Claims]]
