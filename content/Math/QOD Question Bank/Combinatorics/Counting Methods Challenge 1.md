---
type: qod
publish: true
course:
  - "Mathematics 30-2"
topic: "Permutations"
show_solution: false
---

## Question

### A.

Evaluate **manually (without a calculator)**:

$$
\frac{10!}{2!\,8!}
$$

### B.

A student is determining how many **4-digit natural numbers** can be made using the digits \(0\) through \(9\), with no repeated digits.

The student calculates:

$$
10(9)(8)(7)=5040
$$

Explain the student's error and determine the correct number of 4-digit natural numbers.

### C.

Nine runners compete in a race.

How many different ordered results are possible for **first, second, third, and fourth place**?

Use permutation notation.

## Solution

> [!example]- Show solution
>
> ### A.
>
> $$
> \begin{aligned}
> \frac{10!}{2!\,8!}
> &=\frac{10\cdot9\cdot8!}{(2\cdot1)\,8!}\\
> &=\frac{90}{2}\\
> &=45
> \end{aligned}
> $$
>
> ### B.
>
> The student's calculation incorrectly allows \(0\) to be used as the first digit. A 4-digit natural number cannot begin with \(0\).
>
> There are \(9\) choices for the first digit, followed by \(9\), \(8\), and \(7\) choices for the remaining digits:
>
> $$
> 9(9)(8)(7)=4536
> $$
>
> Therefore,
>
> $$
> \boxed{4536}
> $$
>
> 4-digit natural numbers are possible.
>
> ### C.
>
> Four ordered finishing positions are filled from \(9\) runners:
>
> $$
> \begin{aligned}
> {}_{9}P_{4}
> &=\frac{9!}{(9-4)!}\\
> &=\frac{9!}{5!}\\
> &=9\cdot8\cdot7\cdot6\\
> &=3024
> \end{aligned}
> $$
>
> Therefore,
>
> $$
> \boxed{3024}
> $$
>
> ordered results are possible.

## Review First

- [[Factorial Notation - Applications 1]]
- [[Fundamental Counting Principle with Restrictions 1]]

## Explore Also

- [[Counting Methods Challenge 2]]
- [[Counting Methods Challenge 3]]

## Build Toward

- [[Permutations 1]]
