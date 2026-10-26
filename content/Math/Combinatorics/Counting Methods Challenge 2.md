---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: Permutations
show_solution: true
---

### A.

Evaluate **manually (without a calculator)**:

$$
\frac{9!}{2!\,7!}
$$

### B.

A student is determining how many **4-digit natural numbers** can be made using only the digits \(0\) through \(8\), with no repeated digits.

The student calculates:

$$
9(8)(7)(6)=3024
$$

Explain the student's error and determine the correct number of 4-digit natural numbers.

### C.

Eight students are competing for four different positions on a student council: president, vice-president, secretary, and treasurer.

How many different ways can the four positions be filled?

Use permutation notation.

## Solution

> [!example]- Show solution
>
> ### A.
>
> $$
> \begin{aligned}
> \frac{9!}{2!\,7!}
> &=\frac{9\cdot8\cdot7!}{(2\cdot1)\,7!}\\
> &=\frac{72}{2}\\
> &=36
> \end{aligned}
> $$
>
> ### B.
>
> The student's calculation incorrectly allows \(0\) to be used as the first digit. A 4-digit natural number cannot begin with \(0\).
>
> There are \(8\) choices for the first digit, followed by \(8\), \(7\), and \(6\) choices for the remaining digits:
>
> $$
> 8(8)(7)(6)=2688
> $$
>
> Therefore,
>
> $$
> \boxed{2688}
> $$
>
> 4-digit natural numbers are possible.
>
> ### C.
>
> Four different positions are filled from \(8\) students:
>
> $$
> \begin{aligned}
> {}_{8}P_{4}
> &=\frac{8!}{(8-4)!}\\
> &=\frac{8!}{4!}\\
> &=8\cdot7\cdot6\cdot5\\
> &=1680
> \end{aligned}
> $$
>
> Therefore,
>
> $$
> \boxed{1680}
> $$
>
> arrangements are possible.

> [!abstract] Review First
> - [[Math/Combinatorics/Factorial Notation - Applications 2|Factorial Notation - Applications 2]]
> - [[Math/Combinatorics/Fundamental Counting Principle with Restrictions 2|Fundamental Counting Principle with Restrictions 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Counting Methods Challenge 1|Counting Methods Challenge 1]]
> - [[Math/Combinatorics/Counting Methods Challenge 3|Counting Methods Challenge 3]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Permutations 1|Permutations 1]]
