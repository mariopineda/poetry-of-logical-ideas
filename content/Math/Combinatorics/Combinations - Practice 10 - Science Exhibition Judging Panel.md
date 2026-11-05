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
  - "Combinations - Practice 14 - Art Society Committee Sizes"
---

A science exhibition has **four teachers** and **seven parent volunteers**. A panel is a nonempty group unless a leadership role is specified. How many different panels are possible if:

### A. there are exactly 2 teachers (including a specified teacher, Nora) and 2 parents;
### B. there is a teacher chair, a parent chair, and 4 additional unranked judges;
### C. the panel has **at most 4** members;
### D. the panel has **at least 7** members?

## Solution

> [!example]- Show solution
>
> ### A.
>
> Nora is fixed; choose 1 more teacher from 3 and 2 parents from 7:
>
> $$\binom31\binom72=\boxed{63}.$$
>
> ### B.
>
> There are 4 teacher-chair choices and 7 parent-chair choices. Choose 4 other judges from the remaining 9 people:
>
> $$4\cdot7\cdot\binom94=\boxed{3\,528}.$$
>
> ### C.
>
> The empty panel is **not allowed**, so include sizes 1, 2, 3 and 4:
>
> $$\sum_{k=1}^4\binom{11}k=\boxed{561}.$$
>
> ### D.
>
> Count panel sizes 7 through 11:
>
> $$\sum_{k=7}^{11}\binom{11}k=\boxed{562}.$$

> [!abstract] Review First
> - [[Math/Combinatorics/Combinations - Practice 4 - Intergrade Environment Committee|Combinations - Practice 4 - Intergrade Environment Committee]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Combinations - Practice 14 - Art Society Committee Sizes|Combinations - Practice 14 - Art Society Committee Sizes]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Counting Methods Review - Practice 20 - Interdisciplinary Judges|Counting Methods Review - Practice 20 - Interdisciplinary Judges]]
