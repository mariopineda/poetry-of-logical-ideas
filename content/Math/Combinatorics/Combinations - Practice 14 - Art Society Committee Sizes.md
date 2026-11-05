---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: "Combinations"
show_solution: true
prerequisites:
  - "Combinations - Practice 4 - Intergrade Environment Committee"
related:
  - "Combinations - Practice 4 - Intergrade Environment Committee"
---

A neighbourhood art society has **five women and four men** available for committee service. Members have equal voting roles.

### A. How many nonempty committees have **at least five** members?
### B. How many nonempty committees have **at most four** members?
### C. How many five-member committees have **exactly two women**?
### D. How many four-member committees have **at most two men**?

## Solution

> [!example]- Show solution
>
> ### A.
>
> Select 5 through 9 members from 9:
>
> $$\sum_{k=5}^9\binom9k=\boxed{256}.$$
>
> ### B.
>
> Select 1 through 4 members (a committee cannot be empty):
>
> $$\sum_{k=1}^4\binom9k=\boxed{255}.$$
>
> ### C.
>
> Choose two women and three men:
>
> $$\binom52\binom43=\boxed{40}.$$
>
> ### D.
>
> Add disjoint cases of 0, 1 or 2 men:
>
> $$\binom40\binom54+\binom41\binom53+\binom42\binom52=\boxed{105}.$$

> [!abstract] Review First
> - [[Math/Combinatorics/Combinations - Practice 4 - Intergrade Environment Committee|Combinations - Practice 4 - Intergrade Environment Committee]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Combinations - Practice 4 - Intergrade Environment Committee|Combinations - Practice 4 - Intergrade Environment Committee]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
