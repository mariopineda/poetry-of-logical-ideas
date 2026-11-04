---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: Factorial Notation
show_solution: true
---

A digital-art installation displays **five-digit natural numbers** made using the digits \(0,1,2,3,4,5,6,7\), with **no repeated digits**.

A student claims that the number of possible displays is

$$
8\cdot7\cdot6\cdot5\cdot4=6720.
$$

### A.

Explain the student's error.

### B.

Determine the correct number of five-digit natural numbers.

### C.

Would the student's calculation be correct if the display used **five-character identification codes** instead of five-digit natural numbers, and codes were allowed to begin with \(0\)? Explain.

## Solution

> [!example]- Show solution
>
> ### A.
>
> The student treated all eight digits as possible choices for the **first position**, including \(0\). But a five-digit natural number **cannot begin with \(0\)**: a string such as \(01234\) represents a four-digit number.
>
> ### B.
>
> The first digit has \(7\) choices (\(1\) through \(7\)). For the second position there are \(7\) digits left, **including \(0\)**; after that, there are \(6,5,4\) choices:
>
> $$
> 7\cdot7\cdot6\cdot5\cdot4
> =\boxed{5880}.
> $$
>
> So **5880 five-digit natural numbers** can be formed.
>
> ### C.
>
> **Yes.** For identification codes, a leading zero is allowed. The eight available digits give \(8\) choices first, followed by \(7,6,5,4\) choices without repetition:
>
> $$
> 8\cdot7\cdot6\cdot5\cdot4
> =\boxed{6720}.
> $$
>
> The distinction is whether the first character must be a **nonzero leading digit**.

> [!abstract] Review First
> - [[Math/Combinatorics/Factorial Notation - Applications 6 - ORBITS Letter Sequences|Factorial Notation - Applications 6 - ORBITS Letter Sequences]]
> - [[Math/Combinatorics/Fundamental Counting Principle 14 - Four-Digit Race Numbers|Fundamental Counting Principle 14 - Four-Digit Race Numbers]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Counting Methods Challenge 1|Counting Methods Challenge 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
