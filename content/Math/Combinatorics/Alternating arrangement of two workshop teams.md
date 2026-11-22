---
type: qod
publish: true
course:
- Mathematics 30-1
topic: Combinatorics
show_solution: true
qod_id: DIP-30-1-2017-MC25
diploma_eligible: true
diploma_ready: true
review_status: certified_batch03_proof_and_source_equivalence
question_format: written-response
diploma_original_format: multiple-choice
diploma_cognitive_level: Problem Solving
diploma_performance_standard: Acceptable
diploma_outcomes: PCBT 1
diploma_historical_percent_correct: 33.3
tags:
- qod
- diploma-preparation
- written-response
certified_batch: 3
---

Four musicians and four dancers, all distinguishable, must stand in one row so that a musician and a dancer alternate. How many different lineups are possible? Explain the role of the two starting patterns.

## Solution

> [!example]- Show solution
> The four musicians and four dancers are individually distinguishable. There are exactly **two** possible type patterns, starting with a musician or a dancer:
>
> $$MDMDMDMD\quad\text{or}\quad DMDMDMDM.$$
>
> For either pattern, the musician positions can be filled in $4!$ ways and the dancer positions in another $4!$ ways. These choices are independent and the two patterns are disjoint, so
>
> $$\boxed{2\cdot4!\cdot4!=2(24)(24)=1152}.$$
>
> No arrangement is counted twice.

> [!abstract] Review First
> - [[Math/Combinatorics/Permutations 1|Permutations 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Permutations with Restrictions - Practice 3 - Alternating Observatory Exhibits|Permutations with Restrictions - Practice 3 - Alternating Observatory Exhibits]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Permutations with Restrictions - Practice 4 - Alternating Teams at a Banquet|Permutations with Restrictions - Practice 4 - Alternating Teams at a Banquet]]
