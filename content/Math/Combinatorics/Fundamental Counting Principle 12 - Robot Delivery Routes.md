---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: Fundamental Counting Principle
show_solution: true
---

A warehouse robot must deliver a package to an exhibit hall. It must use **exactly one** of two transfer stations, and it cannot switch stations partway through its trip.

- **Via the Loading Dock:** $3$ corridors lead from the warehouse to the dock, and $2$ corridors lead from the dock to the exhibit hall.
- **Via the Atrium:** $4$ corridors lead from the warehouse to the atrium, and $3$ corridors lead from the atrium to the exhibit hall.

How many **different complete routes** can the robot take? Show how multiplication and addition are both used.

## Solution

> [!example]- Show solution
>
> First count the routes **within each alternative** using multiplication.
>
> Via the Loading Dock:
>
> $$
> 3\times2=6\text{ routes}.
> $$
>
> Via the Atrium:
>
> $$
> 4\times3=12\text{ routes}.
> $$
>
> The robot must use **either** the Loading Dock **or** the Atrium. These route groups are disjoint, so add their totals:
>
> $$
> 6+12=\boxed{18}.
> $$
>
> The robot can take **18 different complete routes**. Multiplication counts consecutive choices along a route; addition combines the two alternative route groups.

> [!abstract] Review First
> - [[Math/Combinatorics/Fundamental Counting Principle 8 - Wildlife Survey Kits|Fundamental Counting Principle 8 - Wildlife Survey Kits]]
> - [[Math/Combinatorics/Fundamental Counting Principle 2|Fundamental Counting Principle 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Fundamental Counting Principle 3|Fundamental Counting Principle 3]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
