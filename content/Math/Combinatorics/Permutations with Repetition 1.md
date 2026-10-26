---
type: qod
publish: true
course:
  - "Mathematics 30-1"
  - "Mathematics 30-2"
topic: "Permutations"
show_solution: true
---

A race at the Olympics has 8 runners. In how many orders can their countries finish if 

a) there are 2 Canadians, 1 Swedish, 1 German, 1 South African and 3 runners from USA.

b) there are 1 Canadian, 2 British, 2 Ethiopian, 1 Algerian, and 2 Kenyan runners.

## Solution

> [!example]- Show solution
>
> Use the multiset-permutation formula
>
> $$
> \frac{n!}{n_1!n_2!\cdots}.
> $$
>
> ### A.
>
> There are $8$ runners, with country repetitions of $2$ Canadians and $3$ Americans:
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

> [!abstract] Review First
> - [[Math/Combinatorics/Factorial Notation 1|Factorial Notation 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Permutations 5|Permutations 5]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
