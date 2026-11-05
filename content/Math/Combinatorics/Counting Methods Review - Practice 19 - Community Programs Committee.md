---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: "Counting Methods Review"
show_solution: true
prerequisites:
  - "Combinations - Practice 4 - Intergrade Environment Committee"
related:
  - "Combinations - Practice 4 - Intergrade Environment Committee"
---

Eight outdoor-program volunteers and eleven indoor-program volunteers are available for a committee of **five equal members**.

### A. How many committees can be chosen without restrictions?
### B. How many include exactly 2 outdoor and 3 indoor volunteers?
### C. How many include at most 2 indoor volunteers?

## Solution

> [!example]- Show solution
>
> ### A.
>
> $$\binom{19}5=\boxed{11\,628}.$$
>
> ### B.
>
> $$\binom82\binom{11}3=\boxed{4\,620}.$$
>
> ### C.
>
> The disjoint cases have 0, 1 or 2 indoor volunteers:
>
> $$\sum_{k=0}^2\binom{11}k\binom8{5-k}=\boxed{3\,906}.$$

> [!abstract] Review First
> - [[Math/Combinatorics/Combinations - Practice 4 - Intergrade Environment Committee|Combinations - Practice 4 - Intergrade Environment Committee]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Combinations - Practice 4 - Intergrade Environment Committee|Combinations - Practice 4 - Intergrade Environment Committee]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
