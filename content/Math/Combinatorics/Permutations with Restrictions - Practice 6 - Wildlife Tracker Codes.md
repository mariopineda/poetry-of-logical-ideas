---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: "Permutations"
show_solution: true
prerequisites:
  - "Permutations with Restrictions - Practice 5 - Colour Chip Trials"
  - "Fundamental Counting Principle with Restrictions 1"
related:
  - "Permutations with Restrictions - Practice 7 - Regional Observatory IDs"
---

Each wildlife tracker is assigned a code beginning with the two fixed characters **W7**, followed by **five digits** selected from 0 through 9. The five-digit portion is a code, so a leading zero **is allowed**.

### A.

How many codes are possible if the five digits are **all different**?

### B.

How many codes are possible if the digit **4 occurs exactly once**, while other digits may repeat?

## Solution

> [!example]- Show solution
>
> ### A.
>
> The prefix W7 is fixed. The five digits have 10, 9, 8, 7 and 6 choices:
>
> $$10\cdot9\cdot8\cdot7\cdot6={}_{10}P_5=\boxed{30\,240}.$$
>
> ### B.
>
> Choose the position of the single 4: 5 choices. Each of the remaining four positions may contain any of the 9 digits **other than 4**:
>
> $$5\cdot9^4=\boxed{32\,805}.$$

> [!abstract] Review First
> - [[Math/Combinatorics/Permutations with Restrictions - Practice 5 - Colour Chip Trials|Permutations with Restrictions - Practice 5 - Colour Chip Trials]]
> - [[Math/Combinatorics/Fundamental Counting Principle with Restrictions 1|Fundamental Counting Principle with Restrictions 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Permutations with Restrictions - Practice 7 - Regional Observatory IDs|Permutations with Restrictions - Practice 7 - Regional Observatory IDs]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Permutations with Restrictions - Practice 7 - Regional Observatory IDs|Permutations with Restrictions - Practice 7 - Regional Observatory IDs]]
