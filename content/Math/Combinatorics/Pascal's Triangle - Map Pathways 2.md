---
type: qod
publish: true
course:
  - "Mathematics 30-1"
topic: "Pathway Problems"
show_solution: true
---

The map shows a pedestrian travelling from the **Bus Terminal** to the **Museum**. The intersection marked **Road Closure** cannot be used.

At every intersection, the pedestrian may move only **one block right** or **one block up**.

Using **Pascal's Triangle**, determine the number of distinct shortest pathways from the Bus Terminal to the Museum that **avoid the Road Closure**.

![[Pascal Pathway Map Grid 2.png]]

## Solution

> [!example]- Show solution
>
> Fill the junctions using Pascal's Triangle: each interior number is the sum of the number directly to the **left** and the number directly **below** it.
>
> First count **all** shortest pathways from the Bus Terminal to each junction.
>
> ![[Pascal Pathway Solution Map 2A.png]]
>
> The number at the **Museum** is $210$, so there are $210$ shortest pathways altogether.
>
> The number at the **Road Closure** is $10$, so there are $10$ shortest pathways from the Bus Terminal to the Road Closure.
>
> Now count the number of shortest pathways from the **Road Closure** to each junction on the smaller grid leading to the Museum.
>
> ![[Pascal Pathway Solution Map 2B.png]]
>
> The number at the **Museum** on this smaller grid is $10$, so there are $10$ shortest pathways from the Road Closure to the Museum.
>
> Therefore, the number of shortest pathways that pass through the Road Closure is
>
> $$
> 10 \times 10 = 100.
> $$
>
> Subtract these from the total:
>
> $$
> 210 - 100 = \boxed{110}.
> $$

> [!abstract] Review First
> - [[Math/Combinatorics/Pascal's Triangle - Map Pathways 1|Pascal's Triangle - Map Pathways 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Permutations - Map Pathways 2|Permutations - Map Pathways 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Binomial Theorem 1|Binomial Theorem 1]]
