---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: Fundamental Counting Principle
show_solution: true
---

A museum uses a **four-letter access code** for its digital archive. Each position may contain any of the eight letters $A,B,C,D,E,F,G,H$. The order of the letters matters.

### A.

How many codes are possible when **letters may be repeated**?

### B.

How many codes are possible when **no letter may be repeated**?

### C.

Explain why your answers in parts A and B differ.

## Solution

> [!example]- Show solution
>
> ### A. Repetition allowed
>
> Each of the four positions has $8$ choices:
>
> $$
> 8\times8\times8\times8=8^4=\boxed{4096}.
> $$
>
> ### B. No repetition
>
> After a letter is used, it is no longer available for a later position. The numbers of choices are $8$, $7$, $6$, and $5$:
>
> $$
> 8\times7\times6\times5=\boxed{1680}.
> $$
>
> ### C. Comparison
>
> Repetition gives more possibilities because selecting a letter does **not** reduce the choices for later positions. Without repetition, the number of available letters decreases after each selection. Thus $4096>1680$.

> [!abstract] Review First
> - [[Math/Combinatorics/Fundamental Counting Principle 8 - Wildlife Survey Kits|Fundamental Counting Principle 8 - Wildlife Survey Kits]]
> - [[Math/Combinatorics/Fundamental Counting Principle with Restrictions 1|Fundamental Counting Principle with Restrictions 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Fundamental Counting Principle with Restrictions 2|Fundamental Counting Principle with Restrictions 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Fundamental Counting Principle 10 - Museum Collection Labels|Fundamental Counting Principle 10 - Museum Collection Labels]]
> - [[Math/Combinatorics/Fundamental Counting Principle 13 - Festival Pass Identifiers|Fundamental Counting Principle 13 - Festival Pass Identifiers]]
