---
type: qod
publish: true
course:
  - "Mathematics 30-1"
  - "Mathematics 30-2"
topic: "Permutations"
show_solution: true
---

A path begins at

$$
R=(0,0),
$$

must pass through

$$
O=(3,2),
$$

and ends at

$$
G=(6,4).
$$

At every step, you may move only one unit **right** or one unit **up**.

Using **Pascal's Triangle / combinations**, determine the number of distinct pathways from $R$ to $G$ that pass through $O$.

## Solution

> [!example]- Show solution
>
> From $R$ to $O$, there are $5$ moves total:
>
> $$
> 3\text{ right},\qquad2\text{ up}.
> $$
>
> The number of pathways is
>
> $$
> \binom52=10.
> $$
>
> From $O$ to $G$, there are again
>
> $$
> 3\text{ right},\qquad2\text{ up},
> $$
>
> so there are
>
> $$
> \binom52=10
> $$
>
> pathways.
>
> Therefore,
>
> $$
> 10(10)=\boxed{100}.
> $$

> [!abstract] Review First
> - [[Math/Combinatorics/Factorial Notation 1|Factorial Notation 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Permutations 2|Permutations 2]]
> - [[Math/Combinatorics/Permutations 4|Permutations 4]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
