---
type: qod
publish: true
course:
  - "Mathematics 30-2"
topic: "Permutations"
show_solution: false
---

### A.

Evaluate **manually (without a calculator)**:

$$
\frac{8!}{2!\,6!}
$$

### B.

A student is determining how many **4-digit natural numbers** can be made using only the digits \(0\) through \(7\), with no repeated digits.

The student calculates:

$$
8(7)(6)(5)=1680
$$

Explain the student's error and determine the correct number of 4-digit natural numbers.

### C.

Ten finalists compete in an event.

How many different ordered results are possible for the **top four finishers**?

Use permutation notation.

> [!abstract] Review First
> - [[Math/Combinatorics/Factorial Notation - Applications 3|Factorial Notation - Applications 3]]
> - [[Math/Combinatorics/Fundamental Counting Principle with Restrictions 3|Fundamental Counting Principle with Restrictions 3]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Counting Methods Challenge 1|Counting Methods Challenge 1]]
> - [[Math/Combinatorics/Counting Methods Challenge 2|Counting Methods Challenge 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Permutations 1|Permutations 1]]

## Solution

> [!example]- Show solution
>
> ### A.
>
> $$
> \begin{aligned}
> \frac{8!}{2!\,6!}
> &=\frac{8\cdot7\cdot6!}{(2\cdot1)\,6!}\\
> &=\frac{56}{2}\\
> &=28
> \end{aligned}
> $$
>
> ### B.
>
> The student's calculation incorrectly allows \(0\) to be used as the first digit. A 4-digit natural number cannot begin with \(0\).
>
> There are \(7\) choices for the first digit, followed by \(7\), \(6\), and \(5\) choices for the remaining digits:
>
> $$
> 7(7)(6)(5)=1470
> $$
>
> Therefore,
>
> $$
> \boxed{1470}
> $$
>
> 4-digit natural numbers are possible.
>
> ### C.
>
> Four ordered finishing positions are filled from \(10\) finalists:
>
> $$
> \begin{aligned}
> {}_{10}P_{4}
> &=\frac{10!}{(10-4)!}\\
> &=\frac{10!}{6!}\\
> &=10\cdot9\cdot8\cdot7\\
> &=5040
> \end{aligned}
> $$
>
> Therefore,
>
> $$
> \boxed{5040}
> $$
>
> ordered results are possible.
