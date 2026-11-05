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
  - "Combinations - Practice 10 - Science Exhibition Judging Panel"
---

Six Grade 11 and nine Grade 12 students volunteer to serve on a **five-member media committee**.

### A.

How many committees are possible with no conditions?

### B.

How many include **Fatima**, a Grade 11 student, plus **exactly two other Grade 11 students** (the other two must be Grade 12)?

### C.

Suppose instead the committee has **one Grade 12 chair**, **one Grade 11 vice-chair**, and **three additional unranked members**. How many arrangements of the committee are possible?

## Solution

> [!example]- Show solution
>
> ### A.
>
> $$\binom{15}5=\boxed{3\,003}.$$
>
> ### B.
>
> Fatima is fixed. Choose two of the remaining five Grade 11 students and two of the nine Grade 12 students:
>
> $$\binom52\binom92=10\cdot36=\boxed{360}.$$
>
> ### C.
>
> Choose the distinct offices first: 9 Grade 12 choices for chair and 6 Grade 11 choices for vice-chair. Then choose 3 ordinary members from the remaining 13 volunteers:
>
> $$9\cdot6\cdot\binom{13}3=\boxed{15\,444}.$$

> [!abstract] Review First
> - [[Math/Combinatorics/Combinations - Practice 4 - Intergrade Environment Committee|Combinations - Practice 4 - Intergrade Environment Committee]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Combinations - Practice 10 - Science Exhibition Judging Panel|Combinations - Practice 10 - Science Exhibition Judging Panel]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Counting Methods Review - Practice 10 - Two Chairs and Four Helpers|Counting Methods Review - Practice 10 - Two Chairs and Four Helpers]]
