---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: "Combinations"
show_solution: true
prerequisites:
  - "Combinations - Practice 4 - Intergrade Environment Committee"
related:
  - "Combinations - Practice 16 - Restricted Five-Card Hands"
---

A five-card **hand** is dealt from an ordinary deck of 52 cards. A hand is an unordered selection, and cards are not replaced.

### A. How many hands have **exactly three black cards**?
### B. How many have **exactly two clubs and exactly one heart**?
### C. How many have **exactly two face cards** (J, Q, K) and **exactly one ace**?

## Solution

> [!example]- Show solution
>
> ### A.
>
> There are 26 black and 26 red cards. Choose 3 black and 2 red:
>
> $$\binom{26}3\binom{26}2=\boxed{845\,000}.$$
>
> ### B.
>
> Choose 2 of 13 clubs and 1 of 13 hearts. The remaining 2 must come from the 26 diamonds or spades:
>
> $$\binom{13}2\binom{13}1\binom{26}2=\boxed{329\,550}.$$
>
> ### C.
>
> There are 12 face cards, 4 aces, and 36 cards that are neither face cards nor aces. Choose 2, 1, and 2 respectively:
>
> $$\binom{12}2\binom41\binom{36}2=\boxed{166\,320}.$$

> [!abstract] Review First
> - [[Math/Combinatorics/Combinations - Practice 4 - Intergrade Environment Committee|Combinations - Practice 4 - Intergrade Environment Committee]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Combinations - Practice 16 - Restricted Five-Card Hands|Combinations - Practice 16 - Restricted Five-Card Hands]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Combinations - Practice 16 - Restricted Five-Card Hands|Combinations - Practice 16 - Restricted Five-Card Hands]]
> - [[Math/Combinatorics/Counting Methods Review - Practice 23 - Rare Dragon Trading Cards|Counting Methods Review - Practice 23 - Rare Dragon Trading Cards]]
