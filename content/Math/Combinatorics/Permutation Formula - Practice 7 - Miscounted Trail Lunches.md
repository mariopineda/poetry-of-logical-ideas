---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: "Permutations"
show_solution: true
prerequisites:
  - "Permutation Formula - Practice 3 - Festival Volunteer Roles"
related:
  - "Fundamental Counting Principle 3"
---

A hiking lodge offers two types of lunch order:

- **Full lunch:** one of 4 wraps, one of 3 sides, and one of 6 drinks.
- **Quick lunch:** one of the same 4 wraps and one of the same 6 drinks, **with no side**.

A student counts 72 full lunches and 24 quick lunches, then calculates **72 × 24 = 1,728** lunches.

### A.

Explain the student's error.

### B.

Determine the correct number of distinct lunches.

## Solution

> [!example]- Show solution
>
> ### A.
>
> The student **multiplied alternative choices**. A customer orders **either** a full lunch **or** a quick lunch; they do not choose one of each. The addition principle, not multiplication, connects these disjoint cases.
>
> ### B.
>
> Within each type, the choices are independent:
>
> $$\text{Full}=4\cdot3\cdot6=72.$$
>
> $$\text{Quick}=4\cdot6=24.$$
>
> Add the alternative order types:
>
> $$72+24=\boxed{96\text{ lunches}}.$$

> [!abstract] Review First
> - [[Math/Combinatorics/Permutation Formula - Practice 3 - Festival Volunteer Roles|Permutation Formula - Practice 3 - Festival Volunteer Roles]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Fundamental Counting Principle 3|Fundamental Counting Principle 3]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Counting Methods Review - Practice 11 - Two-Part Snack Special|Counting Methods Review - Practice 11 - Two-Part Snack Special]]
