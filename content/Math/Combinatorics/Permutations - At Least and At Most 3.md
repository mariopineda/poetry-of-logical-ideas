---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: Permutations
show_solution: false
---

A jewellery designer has **5 different rings** available for a display. The rings will be arranged in a single row, and each ring may be used only once.

Determine how many different displays can be created using:

### A.

Exactly **2 rings**.

### B.

**At least 2 rings**.

### C.

**At most 2 rings**, but at least one must be used.

> [!abstract] Review First
> - [[Math/Combinatorics/Permutations 1|Permutations 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Permutations - At Least and At Most 1|Permutations - At Least and At Most 1]]
> - [[Math/Combinatorics/Permutations - At Least and At Most 2|Permutations - At Least and At Most 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Combinations 1|Combinations 1]]

## Solution

> [!example]- Show solution
>
> ### A.
>
> Exactly 2 rings:
>
> $$
> {}_5P_2=5(4)=\boxed{20}
> $$
>
> ### B.
>
> At least 2 rings means considering each allowable case and adding the results:
>
> $$
> {}_5P_2+{}_5P_3+{}_5P_4+{}_5P_5=20+60+120+120
> $$
>
> $$
> =\boxed{320}
> $$
>
> ### C.
>
> At most 2 rings, with at least one used, means considering each allowable case and adding the results:
>
> $$
> {}_5P_1+{}_5P_2=5+20
> $$
>
> $$
> =\boxed{25}
> $$
