---
type: qod
publish: true
course:
  - "Mathematics 30-1"
  - "Mathematics 30-2"
topic: "Pathway Problems"
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

Using **permutations and factorial notation**, determine the number of distinct pathways from $R$ to $G$ that pass through $O$.

## Solution

> [!example]- Show solution
>
> From $R$ to $O$, a path requires:
>
> - $3$ right moves
> - $2$ up moves
>
> There are $5$ moves altogether, so the number of distinct arrangements is
>
> $$
> \frac{5!}{3!2!}=10.
> $$
>
> From $O$ to $G$, a path again requires:
>
> - $3$ right moves
> - $2$ up moves
>
> Therefore, the number of distinct arrangements is
>
> $$
> \frac{5!}{3!2!}=10.
> $$
>
> Every valid pathway from $R$ to $O$ can be paired with every valid pathway from $O$ to $G$, so
>
> $$
> 10(10)=\boxed{100}.
> $$

> [!abstract] Review First
> - [[Math/Combinatorics/Factorial Notation 1|Factorial Notation 1]]
> - [[Math/Combinatorics/Permutations - Map Pathways 1|Permutations - Map Pathways 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Permutations 2|Permutations 2]]
> - [[Math/Combinatorics/Permutations 4|Permutations 4]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Permutations - Map Pathways 2|Permutations - Map Pathways 2]]
