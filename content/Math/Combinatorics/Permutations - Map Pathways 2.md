---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: Pathway Problems
show_solution: false
---

The map shows a pedestrian travelling from the **Bus Terminal** to the **Museum**. The intersection marked **Road Closure** cannot be used.

At every intersection, the pedestrian may move only **one block right** or **one block up**.

Using **permutations and factorial notation**, determine the number of distinct shortest pathways from the Bus Terminal to the Museum that **avoid the Road Closure**.

![[Pathway Map Grid 2.png]]

> [!abstract] Review First
> - [[Math/Combinatorics/Permutations 3|Permutations 3]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Permutations - Map Pathways 1|Permutations - Map Pathways 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Permutations - Map Pathways 3|Permutations - Map Pathways 3]]

## Solution

> [!example]- Show solution
>
> First count **all** shortest pathways from the Bus Terminal to the Museum.
>
> The trip requires:
>
> - $6$ blocks right
> - $4$ blocks up
>
> There are $10$ moves altogether, so the number of distinct arrangements is
>
> $$
> \frac{10!}{6!4!}=210.
> $$
>
> Next count the pathways that pass through the **Road Closure**.
>
> From the Bus Terminal to the Road Closure:
>
> $$
> \frac{5!}{3!2!}=10.
> $$
>
> From the Road Closure to the Museum:
>
> $$
> \frac{5!}{3!2!}=10.
> $$
>
> Therefore, the number of shortest pathways that pass through the Road Closure is
>
> $$
> 10(10)=100.
> $$
>
> Subtract these from the total:
>
> $$
> 210-100=\boxed{110}.
> $$
