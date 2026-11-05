---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: "Permutations"
show_solution: true
prerequisites:
  - "Identical-Object Permutations - Practice 3 - Words and Repeated Letters"
related:
  - "Permutations with Identical Objects 3"
---

Compare the number of distinguishable arrangements of all the letters in **PROBING** with those of **BALLOON**.

### A.

Determine the number for each word.

### B.

Explain **how many times as many** arrangements PROBING has, and why.

## Solution

> [!example]- Show solution
>
> ### A.
>
> PROBING has 7 different letters, so it has
>
> $$7!=\boxed{5040}$$
>
> arrangements. BALLOON has 7 letters, with L repeated twice and O repeated twice:
>
> $$\frac{7!}{2!2!}=\boxed{1260}.$$
>
> ### B.
>
> The ratio is
>
> $$\frac{7!}{7!/(2!2!)}=2!2!=\boxed{4}.$$
>
> PROBING has **four times as many** arrangements. For BALLOON, swapping identical Ls or identical Os does not create new outcomes, so the naive $7!$ count overcounts by a factor of four.

> [!abstract] Review First
> - [[Math/Combinatorics/Identical-Object Permutations - Practice 3 - Words and Repeated Letters|Identical-Object Permutations - Practice 3 - Words and Repeated Letters]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Permutations with Identical Objects 3|Permutations with Identical Objects 3]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
