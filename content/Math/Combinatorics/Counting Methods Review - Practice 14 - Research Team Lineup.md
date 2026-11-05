---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: "Counting Methods Review"
show_solution: true
prerequisites:
  - "Permutations with Restrictions - Practice 4 - Alternating Teams at a Banquet"
related:
  - "Counting Methods Review - Practice 22 - Artists and Programmers at the Right"
---

Five researchers and four field guides are all distinct and are lining up in a row for a photograph.

### A. In how many arrangements are the **first three people researchers**?
### B. In how many do **exactly the first three people** belong to the research team (so the fourth is a guide)?

## Solution

> [!example]- Show solution
>
> ### A.
>
> Choose and order three of the five researchers, then arrange the remaining six people freely:
>
> $${}_5P_3\cdot6!=60\cdot720=\boxed{43\,200}.$$
>
> ### B.
>
> The first three are researchers (\({}_5P_3\) ways). The fourth **must** be one of four guides, and the remaining five can be arranged freely:
>
> $${}_5P_3\cdot4\cdot5!=60\cdot4\cdot120=\boxed{28\,800}.$$

> [!abstract] Review First
> - [[Math/Combinatorics/Permutations with Restrictions - Practice 4 - Alternating Teams at a Banquet|Permutations with Restrictions - Practice 4 - Alternating Teams at a Banquet]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Counting Methods Review - Practice 22 - Artists and Programmers at the Right|Counting Methods Review - Practice 22 - Artists and Programmers at the Right]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Counting Methods Review - Practice 22 - Artists and Programmers at the Right|Counting Methods Review - Practice 22 - Artists and Programmers at the Right]]
