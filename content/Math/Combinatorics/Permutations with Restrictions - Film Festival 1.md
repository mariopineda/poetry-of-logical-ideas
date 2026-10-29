---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: Permutations
show_solution: true
---

A film festival has selected **4 different documentaries** and **4 different animated films** for an eight-film marathon.

### A.

How many different screening orders are possible with no restrictions?

### B.

How many screening orders are possible if documentaries and animated films must alternate?

### C.

How many of the alternating screening orders begin with a documentary?

## Solution

> [!example]- Show solution
>
> ### A.
>
> All eight films are different:
>
> $$
> 8!=\boxed{40320}
> $$
>
> ### B.
>
> There are two possible category patterns:
>
> $$
> D,A,D,A,D,A,D,A
> $$
>
> or
>
> $$
> A,D,A,D,A,D,A,D
> $$
>
> The documentaries can be arranged in $4!$ ways and the animated films in $4!$ ways:
>
> $$
> 2(4!)(4!)=\boxed{1152}
> $$
>
> ### C.
>
> Only one category pattern begins with a documentary:
>
> $$
> D,A,D,A,D,A,D,A
> $$
>
> Therefore,
>
> $$
> 4!(4!)=\boxed{576}
> $$

> [!abstract] Review First
> - [[Math/Combinatorics/Permutations 1|Permutations 1]]
> - [[Math/Combinatorics/Fundamental Counting Principle with Restrictions 1|Fundamental Counting Principle with Restrictions 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Permutations with Restrictions - Rover Commands 1|Permutations with Restrictions - Rover Commands 1]]
> - [[Math/Combinatorics/Permutations with Restrictions - Archaeology Lab 1|Permutations with Restrictions - Archaeology Lab 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
