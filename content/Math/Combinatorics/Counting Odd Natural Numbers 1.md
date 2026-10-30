---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: Permutations
show_solution: true
---

A microbiology laboratory assigns **three-digit natural identification numbers** to bacterial cultures using the digits

$$
0,1,2,3,4,5,6.
$$

To keep the cultures organized, **odd identification numbers are assigned to cultures receiving an experimental treatment**, while even identification numbers are assigned to control cultures.

How many different identification numbers can be assigned to experimental cultures if:

### A.

No digit may be repeated?

### B.

Digits may be repeated?

## Solution

> [!example]- Show solution
>
> ### A.
>
> An experimental culture must have an odd identification number, so the units digit has $3$ choices:
>
> $$
> 1,3,5
> $$
>
> After choosing the units digit, there are $5$ remaining nonzero choices for the hundreds digit and $5$ choices for the tens digit.
>
> $$
> 3(5)(5)=\boxed{75}
> $$
>
> ### B.
>
> If digits may be repeated:
>
> - $6$ choices for the hundreds digit
> - $7$ choices for the tens digit
> - $3$ choices for the odd units digit
>
> $$
> 6(7)(3)=\boxed{126}
> $$

> [!abstract] Review First
> - [[Math/Combinatorics/Fundamental Counting Principle with Restrictions 1|Fundamental Counting Principle with Restrictions 1]]
> - [[Math/Combinatorics/Permutations 1|Permutations 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Counting Odd Natural Numbers 2|Counting Odd Natural Numbers 2]]
> - [[Math/Combinatorics/Counting Odd Natural Numbers 3|Counting Odd Natural Numbers 3]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
