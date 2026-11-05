---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: "Combinations"
show_solution: true
prerequisites:
  - "Combinations - Practice 6 - Chords and Triangles on a Circle"
related:
  - "Combinations - Practice 6 - Chords and Triangles on a Circle"
---

A diagonal is a segment joining two **nonadjacent** vertices of a polygon.

### A.

How many diagonals are in a **regular 11-sided polygon**?

### B.

How many diagonals are in a **17-sided polygon**?

### C.

Use combinations to derive a formula for the number of diagonals in an arbitrary \(n\)-sided polygon.

![[Counting - CO-07 - Question.svg]]

## Solution

> [!example]- Show solution
>
> A pair of vertices determines a segment. There are \(\binom n2\) segments, but the \(n\) sides are not diagonals.
>
> ### A.
>
> $$\binom{11}2-11=55-11=\boxed{44}.$$
>
> ### B.
>
> $$\binom{17}2-17=136-17=\boxed{119}.$$
>
> ### C.
>
> $$\binom n2-n=\frac{n(n-1)}2-n=\boxed{\frac{n(n-3)}2}.$$

> [!abstract] Review First
> - [[Math/Combinatorics/Combinations - Practice 6 - Chords and Triangles on a Circle|Combinations - Practice 6 - Chords and Triangles on a Circle]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Combinations - Practice 6 - Chords and Triangles on a Circle|Combinations - Practice 6 - Chords and Triangles on a Circle]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
