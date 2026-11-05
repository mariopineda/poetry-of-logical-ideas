---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: "Combinations"
show_solution: true
prerequisites:
  - "Combinations - Practice 8 - Trail Mix Ingredients"
related:
  - "Combinations - Practice 8 - Trail Mix Ingredients"
---

An eight-ingredient lunch bowl is built by **selecting** ingredients, with no duplicates, from:

- 6 leafy greens, 4 red vegetables, 3 orange vegetables, 4 cheeses and 5 berries.

How many different bowls are possible if:

### A. the bowl contains exactly 2 greens, 2 reds, 1 orange, 2 cheeses and 1 berry;
### B. the bowl contains **exactly 2 greens** but has no other category restrictions;
### C. the bowl contains exactly 1 green, exactly 1 red and exactly 1 cheese, with the remaining 5 from oranges or berries?

## Solution

> [!example]- Show solution
>
> ### A.
>
> $$\binom62\binom42\binom31\binom42\binom51=\boxed{8\,100}.$$
>
> ### B.
>
> Choose two greens from six and six more ingredients from the 16 non-green ingredients:
>
> $$\binom62\binom{16}6=\boxed{120\,120}.$$
>
> ### C.
>
> Choose one from each of the specified three categories; the remaining five must come from 3 oranges and 5 berries (8 choices):
>
> $$\binom61\binom41\binom41\binom85=\boxed{5\,376}.$$

> [!abstract] Review First
> - [[Math/Combinatorics/Combinations - Practice 8 - Trail Mix Ingredients|Combinations - Practice 8 - Trail Mix Ingredients]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Combinations - Practice 8 - Trail Mix Ingredients|Combinations - Practice 8 - Trail Mix Ingredients]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
