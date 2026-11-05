---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: "Combinations"
show_solution: true
prerequisites:
  - "Combinations - Practice 3 - Field Study Volunteers"
related:
  - "Combinations - Practice 9 - Student Media Committee"
---

A student committee of **six** members must be selected from **seven Grade 12** and **nine Grade 11** volunteers. Committee membership has no assigned roles. Determine the number of possible committees if:

### A. there are no restrictions;
### B. exactly four are Grade 12 and two are Grade 11;
### C. exactly one is Grade 11;
### D. three specified volunteers must serve;
### E. one specified volunteer must not serve;
### F. at least five are Grade 12.

## Solution

> [!example]- Show solution
>
> ### A.
>
> Choose any 6 of 16 volunteers:
>
> $$\binom{16}6=\boxed{8\,008}.$$
>
> ### B.
>
> Independently choose four seniors and two juniors:
>
> $$\binom74\binom92=35\cdot36=\boxed{1\,260}.$$
>
> ### C.
>
> Choose one junior and five seniors:
>
> $$\binom91\binom75=9\cdot21=\boxed{189}.$$
>
> ### D.
>
> Include the specified three. Select the remaining three from the other 13:
>
> $$\binom{13}3=\boxed{286}.$$
>
> ### E.
>
> Exclude the specified volunteer and choose all six from the other 15:
>
> $$\binom{15}6=\boxed{5\,005}.$$
>
> ### F.
>
> Either five seniors and one junior **or** six seniors and no juniors:
>
> $$\binom75\binom91+\binom76\binom90=189+7=\boxed{196}.$$

> [!abstract] Review First
> - [[Math/Combinatorics/Combinations - Practice 3 - Field Study Volunteers|Combinations - Practice 3 - Field Study Volunteers]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Combinations - Practice 9 - Student Media Committee|Combinations - Practice 9 - Student Media Committee]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Combinations - Practice 9 - Student Media Committee|Combinations - Practice 9 - Student Media Committee]]
> - [[Math/Combinatorics/Combinations - Practice 10 - Science Exhibition Judging Panel|Combinations - Practice 10 - Science Exhibition Judging Panel]]
> - [[Math/Combinatorics/Combinations - Practice 13 - Five-Card Suit and Rank Counts|Combinations - Practice 13 - Five-Card Suit and Rank Counts]]
> - [[Math/Combinatorics/Combinations - Practice 14 - Art Society Committee Sizes|Combinations - Practice 14 - Art Society Committee Sizes]]
> - [[Math/Combinatorics/Counting Methods Review - Practice 19 - Community Programs Committee|Counting Methods Review - Practice 19 - Community Programs Committee]]
