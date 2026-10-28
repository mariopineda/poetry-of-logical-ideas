---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: Permutations
show_solution: false
---

An archaeology laboratory has **3 different pottery samples** and **5 different bone samples** waiting to be processed. All eight samples will be processed one at a time.

### A.

How many different processing orders are possible?

### B.

How many processing orders begin with **two pottery samples**?

### C.

How many processing orders begin with **exactly two pottery samples**?

That is, the first two samples must be pottery, but the third must be bone.

> [!abstract] Review First
> - [[Math/Combinatorics/Permutations 1|Permutations 1]]
> - [[Math/Combinatorics/Fundamental Counting Principle with Restrictions 1|Fundamental Counting Principle with Restrictions 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Permutations with Restrictions - Rover Commands 1|Permutations with Restrictions - Rover Commands 1]]
> - [[Math/Combinatorics/Permutations with Restrictions - Film Festival 1|Permutations with Restrictions - Film Festival 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._

## Solution

> [!example]- Show solution
>
> ### A.
>
> All $8$ samples are different:
>
> $$
> 8!=\boxed{40320}
> $$
>
> ### B.
>
> There are $3$ choices for the first pottery sample and $2$ choices for the second.
>
> The remaining $6$ samples may then be arranged freely:
>
> $$
> 3(2)(6!)=\boxed{4320}
> $$
>
> ### C.
>
> The first two positions must contain pottery samples:
>
> $$
> 3(2)
> $$
>
> The third position must contain one of the $5$ bone samples. The remaining $5$ samples may be arranged freely:
>
> $$
> 3(2)(5)(5!)=\boxed{3600}
> $$
