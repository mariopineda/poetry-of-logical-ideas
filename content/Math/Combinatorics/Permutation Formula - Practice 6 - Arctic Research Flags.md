---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: "Permutations"
show_solution: true
prerequisites:
  - "Permutation Formula - Practice 5 - Planetarium Finale Playlist"
related:
  - "Counting Methods Review - Practice 13 - Coloured Beacon Sequences"
---

A research station has **seven differently coloured signal flags**. A signal is made by hoisting flags vertically in a particular order; a flag cannot appear twice in one signal.

### A.

How many signals use **all seven flags**?

### B.

How many signals use **at least five flags**?

### C.

How many signals use **at most three flags**, but at least one?

## Solution

> [!example]- Show solution
>
> ### A.
>
> Using all seven distinct flags gives
>
> $$7!=\boxed{5\,040}.$$
>
> ### B.
>
> Use 5, 6 or 7 flags and **add the disjoint cases**:
>
> $$\begin{aligned}
> {}_7P_5+{}_7P_6+{}_7P_7
> &=2520+5040+5040\\
> &=\boxed{12\,600}.
> \end{aligned}$$
>
> ### C.
>
> Use exactly 1, 2 or 3 flags:
>
> $${}_7P_1+{}_7P_2+{}_7P_3=7+42+210=\boxed{259}.$$

> [!abstract] Review First
> - [[Math/Combinatorics/Permutation Formula - Practice 5 - Planetarium Finale Playlist|Permutation Formula - Practice 5 - Planetarium Finale Playlist]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Counting Methods Review - Practice 13 - Coloured Beacon Sequences|Counting Methods Review - Practice 13 - Coloured Beacon Sequences]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Counting Methods Review - Practice 13 - Coloured Beacon Sequences|Counting Methods Review - Practice 13 - Coloured Beacon Sequences]]
