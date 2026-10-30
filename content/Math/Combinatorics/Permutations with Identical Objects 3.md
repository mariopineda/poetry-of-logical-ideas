---
type: qod
publish: true
course:
  - Mathematics 30-1
  - Mathematics 30-2
topic: Permutations
show_solution: false
---

An artisan arranges **8 coloured glass tiles** in a straight display. Tiles of the same colour are identical.

Determine the number of different colour arrangements possible if the display contains:

### A.

**2 blue**, **3 green**, **1 amber**, **1 white**, and **1 red** tile.

### B.

**1 blue**, **2 green**, **2 amber**, **1 white**, and **2 red** tiles.

> [!abstract] Review First
> - [[Math/Combinatorics/Factorial Notation 1|Factorial Notation 1]]
> - [[Math/Combinatorics/Permutations 1|Permutations 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Permutations with Identical Objects 1|Permutations with Identical Objects 1]]
> - [[Math/Combinatorics/Permutations with Identical Objects 2|Permutations with Identical Objects 2]]
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
> There are \(8\) tiles, with \(2\) blue and \(3\) green tiles:
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
> There are three colours represented twice: green, amber, and red.
>
> $$
> \frac{8!}{2!2!2!}
> =
> \frac{40320}{8}
> =
> \boxed{5040}.
> $$
