---
type: qod
publish: true
course:
  - Mathematics 30-1
  - Mathematics 30-2
topic: Permutations
show_solution: false
---

Eight runners compete in an international race. The result is recorded only by the runners' **countries**, so runners from the same country are treated as identical.

Determine the number of different country-order results possible if:

### A.

There are **2 Canadian**, **3 American**, **1 Swedish**, **1 German**, and **1 South African** runner.

### B.

There are **1 Canadian**, **2 British**, **2 Ethiopian**, **1 Algerian**, and **2 Kenyan** runners.

> [!abstract] Review First
> - [[Math/Combinatorics/Factorial Notation 1|Factorial Notation 1]]
> - [[Math/Combinatorics/Permutations 1|Permutations 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Permutations with Identical Objects 2|Permutations with Identical Objects 2]]
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
> There are \(8\) runners, with \(2\) Canadians and \(3\) Americans:
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
> There are three countries represented twice: Britain, Ethiopia, and Kenya.
>
> $$
> \frac{8!}{2!2!2!}
> =
> \frac{40320}{8}
> =
> \boxed{5040}.
> $$
