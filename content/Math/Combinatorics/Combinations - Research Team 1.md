---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: Combinations
show_solution: false
---

A conservation organization has **6 wildlife biologists** and **5 ecologists** available for a research project. A team of 4 researchers must be selected.

**A.** How many different teams can be formed if the team must contain exactly **2 wildlife biologists and 2 ecologists**?
**B.** How many different teams can be formed if the team must contain **at least 2 wildlife biologists**?

> [!abstract] Review First
> - [[Math/Combinatorics/Combinations 1|Combinations 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Combinations - Polygon Diagonals 1|Combinations - Polygon Diagonals 1]]
> - [[Math/Combinatorics/Combinations - Playing Card Hands 1|Combinations - Playing Card Hands 1]]
> - [[Math/Combinatorics/Combinations 3|Combinations 3]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._

## Solution

> [!example]- Show solution
>
> ### A.
>
> Choose 2 wildlife biologists from 6 **and** 2 ecologists from 5:
>
> $$
> \begin{aligned}
> \binom{6}{2}\binom{5}{2}
> &=15(10)\\
> &=\boxed{150}
> \end{aligned}
> $$
>
> Therefore, **150 different teams** are possible.
>
> ### B.
>
> At least 2 wildlife biologists allows three cases: $2$ biologists and $2$ ecologists, $3$ biologists and $1$ ecologist, or $4$ biologists and $0$ ecologists.
>
> Add the counts of the mutually exclusive cases:
>
> $$
> \begin{aligned}
> &\binom{6}{2}\binom{5}{2}
> +\binom{6}{3}\binom{5}{1}
> +\binom{6}{4}\binom{5}{0}\\
> &=150+100+15\\
> &=\boxed{265}
> \end{aligned}
> $$
>
> Therefore, **265 different teams** are possible.
