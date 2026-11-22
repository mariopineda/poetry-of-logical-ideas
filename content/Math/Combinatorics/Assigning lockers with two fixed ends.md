---
type: qod
publish: true
course:
- Mathematics 30-1
- Mathematics 30-2
topic: Permutations
show_solution: true
qod_id: DIP-30-2-N006
diploma_eligible: true
diploma_ready: true
review_status: reviewed-batch-16
question_format: written-response
diploma_cognitive_level: Conceptual
diploma_performance_standard: Excellence
diploma_outcomes: 4, 5
tags:
- qod
- diploma-preparation
- written-response
- supplementary
certified_batch: 16
source_kind: supplementary-practice
assessment_metadata_origin: author-estimated
source_equivalence: not-applicable-supplementary
---

Ten musicians must be assigned ten numbered storage cubbies in a row. Two designated section leaders must occupy the two **end cubbies**, one at each end. Every musician must receive exactly one cubby.

![[ten-cubbies.svg]]

Determine the number of distinct assignments. Explain how you count the placements of the two leaders and the remaining musicians.

## Solution

> [!example]- Show solution
> The end cubbies are different positions. The two designated leaders can switch ends, giving
>
> $$
> 2!=2\text{ choices}.
> $$
>
> Once the leaders are placed, the eight other musicians can occupy the eight middle cubbies in
>
> $$
> 8!=40\,320\text{ ways}.
> $$
>
> By the fundamental counting principle, the total is
>
> $$
> 2!\times8!=2(40\,320)=\boxed{80\,640}.
> $$
>
> There is no division by $2!$, because swapping the leaders produces a different assignment.

> [!abstract] Review First
> - [[Math/Combinatorics/Factorial Notation - Applications 1|Factorial Notation - Applications 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Permutations 1|Permutations 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Permutations with Restrictions - Archaeology Lab 1|Permutations with Restrictions - Archaeology Lab 1]]
