---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: Pathway Problems
show_solution: true
---

The map shows a cyclist travelling from **Home** to the **Arena**. The cyclist must pass through the **Library**.

At every intersection, the cyclist may move only **one block right** or **one block up**.

Using **permutations and factorial notation**, determine the number of distinct shortest pathways from Home to the Arena that pass through the Library.

![[Pathway Map Grid 1.png]]

## Solution

> [!example]- Show solution
>
> Count the trip in two sections.
>
> From **Home to the Library**, the cyclist must travel:
>
> - $2$ blocks right
> - $2$ blocks up
>
> There are $4$ moves altogether, so the number of distinct arrangements is
>
> $$
> \frac{4!}{2!2!}=6.
> $$
>
> From the **Library to the Arena**, the cyclist must travel:
>
> - $3$ blocks right
> - $2$ blocks up
>
> There are $5$ moves altogether, so the number of distinct arrangements is
>
> $$
> \frac{5!}{3!2!}=10.
> $$
>
> Therefore,
>
> $$
> 6(10)=\boxed{60}.
> $$

> [!abstract] Review First
> - [[Math/Combinatorics/Permutations 2|Permutations 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Fundamental Counting Principle 2|Fundamental Counting Principle 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Permutations 3|Permutations 3]]
