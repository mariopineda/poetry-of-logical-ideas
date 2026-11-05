---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: "Permutations"
show_solution: true
prerequisites:
  - "Permutations with Restrictions - Practice 9 - Five or Six Digit Numbers"
  - "Counting Odd Natural Numbers 1"
related:
  - "Counting Odd Natural Numbers 2"
---

Four digits are chosen in order from **0, 1, 2, 3, 4, 5, 6** to make a **four-digit even natural number**.

### A.

How many such numbers can be formed if digits are **not replaced**?

### B.

How many can be formed if the selected digit **is replaced** after each choice?

Explain why treating 0 as the last digit requires a separate case.

## Solution

> [!example]- Show solution
>
> ### A.
>
> The final digit must be 0, 2, 4 or 6, and the first digit cannot be 0. Count **last digit 0** separately:
>
> - Last digit 0: the first has 6 choices; the middle positions have 5 and 4 choices: $6\cdot5\cdot4=120$.
> - Last digit 2, 4 or 6: 3 choices for the last; the first digit has 5 nonzero choices other than the last; the middle digits have 5 and 4 choices: $3\cdot5\cdot5\cdot4=300$.
>
> $$120+300=\boxed{420}.$$
>
> ### B.
>
> With replacement, the first digit can be any of 1–6 (6 choices), the middle digits each have 7 choices, and the final digit has 4 even choices including 0:
>
> $$6\cdot7\cdot7\cdot4=\boxed{1176}.$$
>
> When repetition is permitted, there is no need to remove the final digit from earlier choices.

> [!abstract] Review First
> - [[Math/Combinatorics/Permutations with Restrictions - Practice 9 - Five or Six Digit Numbers|Permutations with Restrictions - Practice 9 - Five or Six Digit Numbers]]
> - [[Math/Combinatorics/Counting Odd Natural Numbers 1|Counting Odd Natural Numbers 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Counting Odd Natural Numbers 2|Counting Odd Natural Numbers 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
