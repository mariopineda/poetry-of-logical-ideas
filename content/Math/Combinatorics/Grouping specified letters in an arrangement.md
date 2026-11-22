---
type: qod
publish: true
course:
- Mathematics 30-1
- Mathematics 30-2
topic: Combinatorics
show_solution: true
qod_id: DIP-30-1-2017-MC26
diploma_eligible: true
diploma_ready: true
review_status: certified_batch04_proof_and_source_equivalence
question_format: written-response
diploma_original_format: multiple-choice
diploma_cognitive_level: Procedural
diploma_performance_standard: Acceptable
diploma_outcomes: PCBT 2
diploma_historical_percent_correct: 66.6
tags:
- qod
- diploma-preparation
- written-response
certified_batch: 4
---

How many distinct arrangements of the six different letters in **GARDEN** have the letters G and D immediately adjacent, in either order? Explain your block method.

## Solution

> [!example]- Show solution
> All six letters of **GARDEN** are different. Temporarily regard $G$ and $D$ as one object. There are then five distinguishable objects: $(GD),A,R,E,N$, which can be ordered in $5!$ ways. Within the block, $G$ and $D$ can appear as $GD$ or $DG$, independently of the other placements. Thus the number of arrangements is
>
> $$\boxed{2\times 5!=2(120)=240}.$$
>
> Every valid arrangement has a unique block location and one of these two internal orders, so nothing is counted twice.

> [!abstract] Review First
> - [[Math/Combinatorics/Permutations 1|Permutations 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Permutations - At Least and At Most 1|Permutations - At Least and At Most 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Permutations with Restrictions - Practice 3 - Alternating Observatory Exhibits|Permutations with Restrictions - Practice 3 - Alternating Observatory Exhibits]]
