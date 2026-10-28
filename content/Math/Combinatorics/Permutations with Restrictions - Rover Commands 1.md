---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: Permutations
show_solution: false
---

A Mars rover can receive any of the following six commands:

**MOVE, TURN, SCAN, DRILL, SAMPLE, RESET**

A command sequence contains exactly **4 commands**.

### A.

How many different command sequences are possible if commands may be repeated?

### B.

How many are possible if no command may be used more than once?

### C.

How many sequences contain **exactly one RESET command**, if all other commands may be repeated?

> [!abstract] Review First
> - [[Math/Combinatorics/Permutations 1|Permutations 1]]
> - [[Math/Combinatorics/Fundamental Counting Principle with Restrictions 1|Fundamental Counting Principle with Restrictions 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Permutations with Restrictions - Film Festival 1|Permutations with Restrictions - Film Festival 1]]
> - [[Math/Combinatorics/Permutations with Restrictions - Archaeology Lab 1|Permutations with Restrictions - Archaeology Lab 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._

## Solution

> [!example]- Show solution
>
> ### A.
>
> Each of the four positions has $6$ choices:
>
> $$
> 6^4=\boxed{1296}
> $$
>
> ### B.
>
> Once a command is used, it is no longer available:
>
> $$
> 6(5)(4)(3)=\boxed{360}
> $$
>
> ### C.
>
> First choose where RESET occurs. There are $4$ possible positions.
>
> The remaining three positions can each contain any of the other $5$ commands:
>
> $$
> 4(5^3)=\boxed{500}
> $$
