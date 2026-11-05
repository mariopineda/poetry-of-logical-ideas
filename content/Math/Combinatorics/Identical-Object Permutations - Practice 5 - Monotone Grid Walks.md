---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: "Permutations"
show_solution: true
prerequisites:
  - "Identical-Object Permutations - Practice 1 - Coin Flip Patterns"
  - "Permutations - Map Pathways 1"
related:
  - "Permutations - Map Pathways 2"
---

A delivery robot travels on rectangular city grids. A route may move **only east (E)** or **south (S)**. No unnecessary movement or backtracking is allowed.

### A.

How many routes require exactly **4 east** and **3 south** steps?

### B.

How many routes require exactly **5 east** and **4 south** steps?

### C.

A route from A to B needs 5 east and 3 south steps, but it must pass through checkpoint C after **2 east and 2 south** steps. How many routes are possible?

### D.

Another route requires 6 east and 4 south steps and must pass through a sensor after **3 east and 1 south** step. How many routes are possible?

### E.

A cyclist must travel 9 blocks north and 4 blocks west, and can move only in those directions. How many shortest routes are possible?

The route diagrams use a small grid as a model; each corner represents a possible intersection.

![Question diagram](../../Assets/Counting%20-%20IO-05%20-%20Question.png)

## Solution

> [!example]- Show solution
>
> Each shortest path is an arrangement of repeated directions. If a path requires $e$ east moves and $s$ south moves, its count is $\binom{e+s}{e}$.
>
> ### A.
>
> $$\binom{7}{4}=\boxed{35}.$$
>
> ### B.
>
> $$\binom{9}{5}=\boxed{126}.$$
>
> ### C.
>
> A to C requires 2 E and 2 S; C to B requires 3 E and 1 S. Multiply the **two consecutive stages**:
>
> $$\binom42\cdot\binom41=6\cdot4=\boxed{24}.$$
>
> ### D.
>
> A to sensor: 3 E, 1 S; sensor to B: 3 E, 3 S.
>
> $$\binom41\cdot\binom63=4\cdot20=\boxed{80}.$$
>
> ### E.
>
> A shortest path has 13 steps: 9 north and 4 west. Choose the four positions for the west moves:
>
> $$\binom{13}{4}=\boxed{715}.$$

> [!abstract] Review First
> - [[Math/Combinatorics/Identical-Object Permutations - Practice 1 - Coin Flip Patterns|Identical-Object Permutations - Practice 1 - Coin Flip Patterns]]
> - [[Math/Combinatorics/Permutations - Map Pathways 1|Permutations - Map Pathways 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Permutations - Map Pathways 2|Permutations - Map Pathways 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Counting Methods Review - Practice 18 - Across the Festival Grid|Counting Methods Review - Practice 18 - Across the Festival Grid]]
