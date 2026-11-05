---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: "Permutations"
show_solution: true
prerequisites:
  - "Identical-Object Permutations - Practice 1 - Coin Flip Patterns"
related:
  - "Counting Methods Review - Practice 16 - Constrained True-False Answer Keys"
---

A ten-statement true/false quiz has **exactly six True (T) answers** and **four False (F) answers**.

### A.

How many different answer sequences are possible?

### B.

How many begin and end with T?

### C.

How many begin with two F answers?

## Solution

> [!example]- Show solution
>
> ### A.
>
> The 10 positions contain six identical T and four identical F:
>
> $$\frac{10!}{6!4!}=\boxed{210}.$$
>
> ### B.
>
> Fix T at both ends. The remaining eight positions contain four T and four F:
>
> $$\frac{8!}{4!4!}=\boxed{70}.$$
>
> ### C.
>
> Fix F in the first two positions. The remaining eight contain six T and two F:
>
> $$\frac{8!}{6!2!}=\boxed{28}.$$

> [!abstract] Review First
> - [[Math/Combinatorics/Identical-Object Permutations - Practice 1 - Coin Flip Patterns|Identical-Object Permutations - Practice 1 - Coin Flip Patterns]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Counting Methods Review - Practice 16 - Constrained True-False Answer Keys|Counting Methods Review - Practice 16 - Constrained True-False Answer Keys]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Identical-Object Permutations - Practice 8 - Coloured Bead Row|Identical-Object Permutations - Practice 8 - Coloured Bead Row]]
> - [[Math/Combinatorics/Counting Methods Review - Practice 16 - Constrained True-False Answer Keys|Counting Methods Review - Practice 16 - Constrained True-False Answer Keys]]
