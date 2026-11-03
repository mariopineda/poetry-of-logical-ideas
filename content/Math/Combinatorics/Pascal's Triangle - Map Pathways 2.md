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
> First count **all** shortest pathways from the Bus Terminal to the Museum.
>
> The trip requires $10$ moves:
>
> - $6$ blocks right
> - $4$ blocks up
>
> Row $10$ of Pascal's Triangle is
>
> $$
> 1,\ 10,\ 45,\ 120,\ 210,\ 252,\ 210,\ 120,\ 45,\ 10,\ 1.
> $$
>
> The entry corresponding to choosing $4$ of the $10$ moves to be upward moves is
>
> $$
> 210.
> $$
>
> Therefore, there are $210$ shortest pathways altogether.
>
> Next count the pathways that pass through the **Road Closure**.
>
> From the Bus Terminal to the Road Closure requires $5$ moves:
>
> - $3$ blocks right
> - $2$ blocks up
>
> Row $5$ of Pascal's Triangle is
>
> $$
> 1,\ 5,\ 10,\ 10,\ 5,\ 1,
> $$
>
> so there are $10$ shortest pathways to the Road Closure.
>
> From the Road Closure to the Museum also requires $5$ moves:
>
> - $3$ blocks right
> - $2$ blocks up
>
> Therefore, there are also $10$ shortest pathways for this part of the trip.
>
> The number of shortest pathways that pass through the Road Closure is
>
> $$
> 10(10)=100.
> $$
>
> Subtract these from the total:
>
> $$
> 210-100=oxed{110}.
> $$

> [!abstract] Review First
> - [[Math/Combinatorics/Pascal's Triangle - Map Pathways 1|Pascal's Triangle - Map Pathways 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Permutations - Map Pathways 2|Permutations - Map Pathways 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Binomial Theorem 1|Binomial Theorem 1]]