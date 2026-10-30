---
type: qod
publish: true
course:
  - Mathematics 30-1
  - Mathematics 30-2
topic: Permutations
show_solution: false
---

A wildlife researcher records **8 consecutive animal sightings**. Only the species is recorded, so sightings of the same species are treated as identical.

Determine the number of different species sequences possible if:

### A.

The researcher records **2 elk**, **3 bison**, **1 moose**, **1 coyote**, and **1 wolf**.

### B.

The researcher records **1 elk**, **2 deer**, **2 coyotes**, **1 owl**, and **2 hares**.

> [!abstract] Review First
> - [[Math/Combinatorics/Factorial Notation 1|Factorial Notation 1]]
> - [[Math/Combinatorics/Permutations 1|Permutations 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Permutations with Identical Objects 1|Permutations with Identical Objects 1]]
> - [[Math/Combinatorics/Permutations with Identical Objects 3|Permutations with Identical Objects 3]]
> - [[Math/Combinatorics/Permutations 5|Permutations 5]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Combinations 1|Combinations 1]]

## Solution

> [!example]- Show solution
>
> For permutations involving identical objects, use
>
> $$
> \frac{n!}{n_1!n_2!\cdots}.
> $$
>
> ### A.
>
> There are \(8\) sightings, with \(2\) elk and \(3\) bison:
>
> $$
> \frac{8!}{2!3!}
> =
> \frac{40320}{12}
> =
> \boxed{3360}.
> $$
>
> ### B.
>
> There are three species recorded twice: deer, coyotes, and hares.
>
> $$
> \frac{8!}{2!2!2!}
> =
> \frac{40320}{8}
> =
> \boxed{5040}.
> $$
