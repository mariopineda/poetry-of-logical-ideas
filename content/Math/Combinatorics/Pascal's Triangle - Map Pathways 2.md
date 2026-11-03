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
> A shortest pathway that avoids the **Road Closure** must go in one of two ways:
>
> 1. **above** the Road Closure, or
> 2. **below** the Road Closure.
>
> These two cases are mutually exclusive, so we can count each case separately and then add the results.
>
> ### Case 1: Pathways above the Road Closure
>
> Count only the junctions in the upper L-shaped region. Start at the **Bus Terminal** with \(1\), and use Pascal's Triangle counting: each interior number is the sum of the numbers from the junction directly to the **left** and directly **below**.
>
> ![[Pascal Pathway Solution Map 2 Upper.png]]
>
> The number at the **Museum** is \(55\), so there are \(55\) shortest pathways that go above the Road Closure.
>
> ### Case 2: Pathways below the Road Closure
>
> Now count only the junctions in the lower L-shaped region.
>
> ![[Pascal Pathway Solution Map 2 Lower.png]]
>
> The number at the **Museum** is again \(55\), so there are \(55\) shortest pathways that go below the Road Closure.
>
> Therefore, by the Addition Principle,
>
> \[
> 55+55=\boxed{110}.
> \]

> [!abstract] Review First
> - [[Math/Combinatorics/Pascal's Triangle - Map Pathways 1|Pascal's Triangle - Map Pathways 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Permutations - Map Pathways 2|Permutations - Map Pathways 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Binomial Theorem 1|Binomial Theorem 1]]
