---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: Factorial Notation
show_solution: true
---

An art gallery has a **permanent welcome display** at the entrance to a corridor and a **permanent visitor-feedback station** at the exit. Between them, the curator will place **six different artworks**, each exactly once, in a single row.

How many different arrangements of the **complete corridor display** are possible? Represent your answer using factorial notation and explain why the two permanent displays do not increase the count.

## Solution

> [!example]- Show solution
>
> The welcome display and feedback station have **fixed positions**, so neither can be moved.
>
> Only the six distinct artworks between them can be rearranged:
>
> $$
> 6\cdot5\cdot4\cdot3\cdot2\cdot1
> =6!
> =\boxed{720}.
> $$
>
> There are **720 complete corridor arrangements**. Multiplying by \(8!\) would incorrectly allow the two permanent displays to move.

> [!abstract] Review First
> - [[Math/Combinatorics/Factorial Notation - Applications 8 - Observatory Demonstrations|Factorial Notation - Applications 8 - Observatory Demonstrations]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Factorial Notation - Applications 2|Factorial Notation - Applications 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Factorial Notation - Applications 10 - Arts Showcase Opening|Factorial Notation - Applications 10 - Arts Showcase Opening]]
