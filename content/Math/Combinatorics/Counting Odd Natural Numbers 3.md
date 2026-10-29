---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: Permutations
show_solution: false
---

During a geological survey, rock specimens are labelled with **three-digit sample numbers** using only the digits

$$
0,1,2,4,5,6,8.
$$

The researchers use **odd sample numbers for specimens collected in the field** and even sample numbers for laboratory reference samples.

How many different field-sample numbers can be created if:

### A.

No digit may be repeated?

### B.

Digits may be repeated?

> [!abstract] Review First
> - [[Math/Combinatorics/Fundamental Counting Principle with Restrictions 1|Fundamental Counting Principle with Restrictions 1]]
> - [[Math/Combinatorics/Permutations 1|Permutations 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Counting Odd Natural Numbers 1|Counting Odd Natural Numbers 1]]
> - [[Math/Combinatorics/Counting Odd Natural Numbers 2|Counting Odd Natural Numbers 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._

## Solution

> [!example]- Show solution
>
> ### A.
>
> A field-sample number must be odd. The only possible units digits are
>
> $$
> 1 \text{ or } 5,
> $$
>
> giving $2$ choices.
>
> After choosing the units digit, there are $5$ remaining nonzero choices for the hundreds digit and $5$ choices for the tens digit.
>
> $$
> 2(5)(5)=\boxed{50}
> $$
>
> ### B.
>
> If digits may be repeated:
>
> - $6$ choices for the hundreds digit
> - $7$ choices for the tens digit
> - $2$ choices for the odd units digit
>
> $$
> 6(7)(2)=\boxed{84}
> $$
