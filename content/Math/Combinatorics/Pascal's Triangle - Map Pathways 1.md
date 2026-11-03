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
> Count the trip in two sections.
>
> From **Home to the Library**, the cyclist must make $4$ moves:
>
> - $2$ blocks right
> - $2$ blocks up
>
> Row $4$ of Pascal's Triangle is
>
> $$
> 1,\ 4,\ 6,\ 4,\ 1.
> $$
>
> The entry corresponding to choosing $2$ of the $4$ moves to be upward moves is
>
> $$
> 6.
> $$
>
> Therefore, there are $6$ shortest pathways from Home to the Library.
>
> From the **Library to the Arena**, the cyclist must make $5$ moves:
>
> - $3$ blocks right
> - $2$ blocks up
>
> Row $5$ of Pascal's Triangle is
>
> $$
> 1,\ 5,\ 10,\ 10,\ 5,\ 1.
> $$
>
> The entry corresponding to choosing $2$ of the $5$ moves to be upward moves is
>
> $$
> 10.
> $$
>
> Therefore,
>
> $$
> 6(10)=oxed{60}.
> $$

> [!abstract] Review First
> - [[Math/Combinatorics/Pascal's Triangle|Pascal's Triangle]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Permutations - Map Pathways 1|Permutations - Map Pathways 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Pascal's Triangle - Map Pathways 2|Pascal's Triangle - Map Pathways 2]]