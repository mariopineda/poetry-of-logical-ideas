---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: "Combinations"
show_solution: true
prerequisites:
  - "Combinations - Practice 13 - Five-Card Suit and Rank Counts"
related:
  - "Combinations - Practice 13 - Five-Card Suit and Rank Counts"
---

Use a standard 52-card deck; every **five-card hand** is an unordered selection without replacement. Face cards are J, Q, K (12 cards total).

### A. How many hands contain **at most three face cards**?
### B. How many contain **at least three red cards**?
### C. How many contain **exactly three spades**?
### D. How many contain **exactly two hearts and exactly one diamond**?

## Solution

> [!example]- Show solution
>
> ### A.
>
> Add cases containing 0, 1, 2 or 3 face cards; the other cards come from the 40 non-face cards:
>
> $$\sum_{k=0}^3\binom{12}k\binom{40}{5-k}=\boxed{2\,578\,368}.$$
>
> ### B.
>
> Choose 3, 4 or 5 red cards from 26 and fill with black cards from the other 26:
>
> $$\sum_{k=3}^5\binom{26}k\binom{26}{5-k}=\boxed{1\,299\,480}.$$
>
> ### C.
>
> Choose 3 spades and 2 non-spades:
>
> $$\binom{13}3\binom{39}2=\boxed{211\,926}.$$
>
> ### D.
>
> Choose 2 hearts and 1 diamond. The other 2 cards must be among the 26 clubs or spades:
>
> $$\binom{13}2\binom{13}1\binom{26}2=\boxed{329\,550}.$$

> [!abstract] Review First
> - [[Math/Combinatorics/Combinations - Practice 13 - Five-Card Suit and Rank Counts|Combinations - Practice 13 - Five-Card Suit and Rank Counts]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Combinations - Practice 13 - Five-Card Suit and Rank Counts|Combinations - Practice 13 - Five-Card Suit and Rank Counts]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
