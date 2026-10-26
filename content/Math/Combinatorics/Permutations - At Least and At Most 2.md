---
type: qod
publish: true
course:
  - "Mathematics 30-2"
topic: "Permutations"
show_solution: true
---

A music teacher has **6 different songs** available for the closing sequence of a concert. Each song may be performed at most once, and the order of the songs matters.

Determine how many different closing sequences can be created using:

### A.

Exactly **4 songs**.

### B.

**At least 4 songs**.

### C.

**At most 4 songs**, but at least one must be used.

> [!example]- Show solution
>
> ### A.
>
> Exactly 4 songs:
>
> $$
> {}_6P_4=6(5)(4)(3)=\boxed{360}
> $$
>
> ### B.
>
> At least 4 songs means considering each allowable case and adding the results:
>
> $$
> {}_6P_4+{}_6P_5+{}_6P_6=360+720+720
> $$
>
> $$
> =\boxed{1800}
> $$
>
> ### C.
>
> At most 4 songs, with at least one used, means considering each allowable case and adding the results:
>
> $$
> {}_6P_1+{}_6P_2+{}_6P_3+{}_6P_4=6+30+120+360
> $$
>
> $$
> =\boxed{516}
> $$

> [!abstract] Review First
> - [[Math/Combinatorics/Permutations 1|Permutations 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Permutations - At Least and At Most 1|Permutations - At Least and At Most 1]]
> - [[Math/Combinatorics/Permutations - At Least and At Most 3|Permutations - At Least and At Most 3]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Combinations 1|Combinations 1]]
