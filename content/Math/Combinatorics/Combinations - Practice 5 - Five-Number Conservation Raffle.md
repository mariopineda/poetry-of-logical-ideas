---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: "Combinations"
show_solution: true
prerequisites:
  - "Combinations - Practice 2 - Six Film Selections"
related:
  - "Combinations - Practice 13 - Five-Card Suit and Rank Counts"
---

To support wetland conservation, participants select **five different numbers** from 1 through 48. The organizer also selects five numbers, and only a perfect match wins. Order does not matter.

### A. How many different entries are possible?
### B. For one given draw, how many entries would win the grand prize?
### C. How many entries would lose that grand prize?
### D. Explain why the organization should clearly communicate the small chance of winning.

## Solution

> [!example]- Show solution
>
> ### A.
>
> $$\binom{48}5=\boxed{1\,712\,304}.$$
>
> ### B.
>
> Exactly one selection matches all five winning numbers: $\boxed{1}$.
>
> ### C.
>
> All other selections lose:
>
> $$\binom{48}5-1=\boxed{1\,712\,303}.$$
>
> ### D.
>
> For a randomly chosen entry, the probability of winning is only
>
> $$\frac1{\binom{48}5}=\frac1{1712304}.$$
>
> A fundraiser may be reasonable if its rules and expenses are transparent, but participants should not mistake a very small win probability for a realistic expectation of a prize.

> [!abstract] Review First
> - [[Math/Combinatorics/Combinations - Practice 2 - Six Film Selections|Combinations - Practice 2 - Six Film Selections]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Combinations - Practice 13 - Five-Card Suit and Rank Counts|Combinations - Practice 13 - Five-Card Suit and Rank Counts]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
