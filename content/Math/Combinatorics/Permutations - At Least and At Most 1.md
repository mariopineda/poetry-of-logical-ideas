---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: Permutations
show_solution: true
---

A wildlife photographer has selected **5 different photographs** for a slideshow. The photographs will be shown one at a time, and no photograph can be used more than once.

Determine how many different slideshows can be created using:

### A.

Exactly **3 photographs**.

### B.

**At least 3 photographs**.

### C.

**At most 3 photographs**, but at least one must be used.

## Solution

> [!example]- Show solution
>
> ### A.
>
> Exactly 3 photographs:
>
> $$
> {}_5P_3=5(4)(3)=\boxed{60}
> $$
>
> ### B.
>
> At least 3 photographs means considering each allowable case and adding the results:
>
> $$
> {}_5P_3+{}_5P_4+{}_5P_5=60+120+120
> $$
>
> $$
> =\boxed{300}
> $$
>
> ### C.
>
> At most 3 photographs, with at least one used, means considering each allowable case and adding the results:
>
> $$
> {}_5P_1+{}_5P_2+{}_5P_3=5+20+60
> $$
>
> $$
> =\boxed{85}
> $$

> [!abstract] Review First
> - [[Math/Combinatorics/Permutations 1|Permutations 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Permutations - At Least and At Most 2|Permutations - At Least and At Most 2]]
> - [[Math/Combinatorics/Permutations - At Least and At Most 3|Permutations - At Least and At Most 3]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Combinations 1|Combinations 1]]
