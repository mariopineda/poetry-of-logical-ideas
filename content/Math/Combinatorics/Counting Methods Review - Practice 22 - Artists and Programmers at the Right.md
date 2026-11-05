---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: "Counting Methods Review"
show_solution: true
prerequisites:
  - "Counting Methods Review - Practice 14 - Research Team Lineup"
related:
  - "Counting Methods Review - Practice 14 - Research Team Lineup"
---

Four artists and three programmers (seven **different people**) will sit in a single row.

### A. How many seatings have **exactly two programmers at the far right**, meaning the last two seats are programmers and the seat immediately before them is an artist?
### B. How many have **at most one programmer in the last two seats**?

## Solution

> [!example]- Show solution
>
> ### A.
>
> Fill the rightmost two seats with two of the three programmers in order: \({}_3P_2\) ways. The third seat from the right must be one of four artists. Arrange the remaining four people freely:
>
> $${}_3P_2\cdot4\cdot4!=6\cdot4\cdot24=\boxed{576}.$$
>
> ### B.
>
> **Zero programmers in the last two seats:** order two of four artists there, and arrange the other five freely:
>
> $${}_4P_2\cdot5!=1440.$$
>
> **Exactly one programmer there:** choose which of the two rightmost seats holds a programmer (2 choices), choose one of three programmers and one of four artists for those seats, then arrange the remaining five people:
>
> $$2\cdot3\cdot4\cdot5!=2880.$$
>
> Add disjoint cases:
>
> $$\boxed{1440+2880=4320}.$$

> [!abstract] Review First
> - [[Math/Combinatorics/Counting Methods Review - Practice 14 - Research Team Lineup|Counting Methods Review - Practice 14 - Research Team Lineup]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Counting Methods Review - Practice 14 - Research Team Lineup|Counting Methods Review - Practice 14 - Research Team Lineup]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
