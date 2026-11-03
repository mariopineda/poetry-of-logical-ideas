---
type: qod
publish: true
course:
  - "Mathematics 30-1"
topic: "Pathway Problems"
show_solution: true
---

The map shows a cyclist travelling from **Home** to the **Arena**. The cyclist must pass through the **Library**.

At every intersection, the cyclist may move only **one block right** or **one block up**.

Using **Pascal's Triangle**, determine the number of distinct shortest pathways from Home to the Arena that pass through the Library.

![[Pascal Pathway Map Grid 1.png]]

## Solution

> [!example]- Show solution
>
> Fill the junctions using Pascal's Triangle: each interior number is the sum of the number directly to the **left** and the number directly **below** it.
>
> First count the number of shortest pathways from **Home** to each junction.
>
> ![[Pascal Pathway Solution Map 1A.png]]
>
> The number at the **Library** is $6$, so there are $6$ shortest pathways from Home to the Library.
>
> Next count the number of shortest pathways from the **Library** to each junction on the smaller grid leading to the Arena.
>
> ![[Pascal Pathway Solution Map 1B.png]]
>
> The number at the **Arena** on this smaller grid is $10$, so there are $10$ shortest pathways from the Library to the Arena.
>
> Therefore,
>
> $$
> 6 \times 10 = \boxed{60}.
> $$

> [!abstract] Review First
> - [[Math/Combinatorics/Pascal's Triangle|Pascal's Triangle]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Permutations - Map Pathways 1|Permutations - Map Pathways 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Pascal's Triangle - Map Pathways 2|Pascal's Triangle - Map Pathways 2]]
