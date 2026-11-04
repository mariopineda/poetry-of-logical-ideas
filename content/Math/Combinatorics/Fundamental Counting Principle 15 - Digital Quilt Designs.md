---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: Fundamental Counting Principle
show_solution: true
---

A digital quilt is assembled from square panels. Each panel can show exactly one of the available fabric-inspired patterns, and patterns **may repeat**.

### A.

A designer uses **four panels**, with **five patterns** available for every panel. How many different ordered quilt designs are possible?

### B.

For a larger display, the designer will use **five panels**, each with the **same number of available patterns**. A client requires **at least $18\,000$ distinct ordered designs**.

What is the **smallest whole number of patterns per panel** the designer must offer? Justify your answer by checking two consecutive whole numbers.

## Solution

> [!example]- Show solution
>
> ### A. Four panels
>
> Each of the four positions has $5$ independent choices:
>
> $$
> N=5^4=\boxed{625}.
> $$
>
> ### B. Minimum number of patterns
>
> Let $p$ be the whole number of patterns available for each of the five panels. The total number of ordered designs is $p^5$. We need
>
> $$
> p^5\geq18\,000.
> $$
>
> Check two consecutive integers:
>
> $$
> \begin{aligned}
> 7^5&=16\,807<18\,000,\\
> 8^5&=32\,768\geq18\,000.
> \end{aligned}
> $$
>
> Seven choices per panel are not sufficient, but eight are. Therefore, the smallest possible number is
>
> $$
> \boxed{8\text{ patterns per panel}}.
> $$

> [!abstract] Review First
> - [[Math/Combinatorics/Fundamental Counting Principle 11 - Light Sculpture Presets|Fundamental Counting Principle 11 - Light Sculpture Presets]]
> - [[Math/Combinatorics/Fundamental Counting Principle 8 - Wildlife Survey Kits|Fundamental Counting Principle 8 - Wildlife Survey Kits]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Fundamental Counting Principle 6|Fundamental Counting Principle 6]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
