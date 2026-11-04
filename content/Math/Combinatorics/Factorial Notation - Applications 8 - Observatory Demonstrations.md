---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: Factorial Notation
show_solution: true
---

A science centre is planning **nine different demonstrations** for an open house. All nine will be presented once. The **meteorite demonstration must be fourth** in the schedule, but the other demonstrations can appear in any order.

How many complete schedules are possible? Write a factorial expression and explain how the fixed position affects your calculation.

## Solution

> [!example]- Show solution
>
> The fourth position is reserved for the meteorite demonstration, so there is **only one choice** for that position.
>
> The other \(8\) distinct demonstrations can be arranged in the remaining \(8\) positions in any order:
>
> $$
> 8\cdot7\cdot6\cdot5\cdot4\cdot3\cdot2\cdot1
> =8!
> =\boxed{40\,320}.
> $$
>
> The fixed demonstration does **not** add another factor of \(9\): it is already assigned, and only the other eight demonstrations are being rearranged.

> [!abstract] Review First
> - [[Math/Combinatorics/Factorial Notation - Applications 5 - Three Event Arrangements|Factorial Notation - Applications 5 - Three Event Arrangements]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Factorial Notation - Applications 1|Factorial Notation - Applications 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Factorial Notation - Applications 9 - Exhibition Corridor|Factorial Notation - Applications 9 - Exhibition Corridor]]
> - [[Math/Combinatorics/Factorial Notation - Applications 10 - Arts Showcase Opening|Factorial Notation - Applications 10 - Arts Showcase Opening]]
