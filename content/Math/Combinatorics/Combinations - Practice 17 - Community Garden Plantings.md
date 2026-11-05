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
  - "Combinations - Practice 15 - Eight-Ingredient Lunch Bowl"
---

A gardener can choose **five different plants** from 3 herbs, 4 flowering plants and 5 succulents, all distinct.

### A. How many five-plant selections are possible without restrictions?
### B. How many contain exactly 2 flowering plants?
### C. How many contain 1 herb, 2 flowers and 2 succulents?
### D. How many contain exactly 3 succulents, **including a specified jade plant**?

## Solution

> [!example]- Show solution
>
> ### A.
>
> Choose 5 of 12 distinct plants:
>
> $$\binom{12}5=\boxed{792}.$$
>
> ### B.
>
> Choose 2 of the 4 flowers, then 3 of the remaining 8 nonflowers:
>
> $$\binom42\binom83=\boxed{336}.$$
>
> ### C.
>
> Choose separately from each category:
>
> $$\binom31\binom42\binom52=\boxed{180}.$$
>
> ### D.
>
> The jade plant is mandatory; choose 2 more succulents from the other 4 and 2 non-succulents from the 7 herbs and flowers:
>
> $$\binom42\binom72=\boxed{126}.$$

> [!abstract] Review First
> - [[Math/Combinatorics/Combinations - Practice 8 - Trail Mix Ingredients|Combinations - Practice 8 - Trail Mix Ingredients]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Combinations - Practice 15 - Eight-Ingredient Lunch Bowl|Combinations - Practice 15 - Eight-Ingredient Lunch Bowl]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
