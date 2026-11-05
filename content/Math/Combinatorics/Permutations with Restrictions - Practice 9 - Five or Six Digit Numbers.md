---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: "Permutations"
show_solution: true
prerequisites:
  - "Permutations with Restrictions - Practice 5 - Colour Chip Trials"
related:
  - "Permutations with Restrictions - Practice 10 - Even Four-Digit Numbers"
---

Use only the six digits **0, 1, 2, 3, 4, 5**, with **no repeated digits**.

### A.

How many different **six-digit natural numbers** can be formed?

### B.

How many natural numbers of **at least five digits** can be formed?

Remember that a natural number cannot begin with 0.

## Solution

> [!example]- Show solution
>
> ### A.
>
> There are 5 nonzero choices for the first digit. The remaining five digits can be arranged in any order:
>
> $$5\cdot5!=\boxed{600}.$$
>
> ### B.
>
> Exactly five digits: choose a nonzero first digit (5 choices), then select and order 4 from the remaining 5:
>
> $$5\cdot{}_5P_4=5\cdot120=600.$$
>
> Exactly six digits: \(5\cdot5!=600\). Add these cases:
>
> $$\boxed{600+600=1200}.$$

> [!abstract] Review First
> - [[Math/Combinatorics/Permutations with Restrictions - Practice 5 - Colour Chip Trials|Permutations with Restrictions - Practice 5 - Colour Chip Trials]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Permutations with Restrictions - Practice 10 - Even Four-Digit Numbers|Permutations with Restrictions - Practice 10 - Even Four-Digit Numbers]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Permutations with Restrictions - Practice 10 - Even Four-Digit Numbers|Permutations with Restrictions - Practice 10 - Even Four-Digit Numbers]]
