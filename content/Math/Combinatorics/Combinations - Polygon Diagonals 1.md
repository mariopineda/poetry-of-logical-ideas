---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: Combinations
show_solution: true
---

| | |
| :--- | ---: |
| A **dodecagon** is a polygon with 12 sides. Consider the regular dodecagon shown here. | ![[Combinations - Dodecagon.png\|180]] |
**A.** How many different line segments can be drawn by connecting any two vertices of the polygon?
**B.** How many **diagonals** does the polygon have? Explain how you determined your answer.

## Solution

> [!example]- Show solution
>
> ### A.
>
> A dodecagon has 12 vertices. Selecting any two vertices determines one line segment.
>
> Since the order of selection does not matter, use combinations:
>
> $$
> \begin{aligned}
> \binom{12}{2}
> &=\frac{12!}{2!(12-2)!}\\
> &=\frac{12(11)}{2}\\
> &=\boxed{66}
> \end{aligned}
> $$
>
> Therefore, **66 different line segments** can be drawn.
>
> ### B.
>
> A diagonal joins two **nonadjacent vertices**.
>
> Of the 66 line segments, 12 are sides of the dodecagon and are therefore not diagonals.
>
> $$
> 66-12=\boxed{54}
> $$
>
> Therefore, the dodecagon has **54 diagonals**.

> [!abstract] Review First
> - [[Math/Combinatorics/Combinations 1|Combinations 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Combinations - Playing Card Hands 1|Combinations - Playing Card Hands 1]]
> - [[Math/Combinatorics/Combinations - Research Team 1|Combinations - Research Team 1]]
> - [[Math/Combinatorics/Combinations 3|Combinations 3]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
