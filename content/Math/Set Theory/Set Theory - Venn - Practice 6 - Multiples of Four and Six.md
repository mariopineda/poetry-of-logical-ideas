---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: "Set Theory"
show_solution: true
prerequisites:
  - "Set Theory - Venn - Practice 3 - Union and Intersection of Integers"
related:
  - "Set Theory - Subsets - Practice 11 - Perfect Cubes in a Number Universe"
---

A class sorts the natural numbers from **1 through 36**, inclusive, into two sets:

$$A=\{\text{multiples of 4}\},\qquad B=\{\text{multiples of 6}\}.$$

### A. Determine the elements in \(A\cap B\).
### B. Find the elements in A-only and B-only.
### C. Draw a Venn diagram with the **number of elements** in each region, including neither.
![[Counting - SV-06 - Question.svg]]

## Solution

> [!example]- Show solution
>
> ### A.
>
> A number in both sets must be a multiple of \(\operatorname{lcm}(4,6)=12\):
>
> $$\boxed{A\cap B=\{12,24,36\}},\quad n(A\cap B)=3.$$
>
> ### B.
>
> $$A\setminus B=\boxed{\{4,8,16,20,28,32\}},$$
> $$B\setminus A=\boxed{\{6,18,30\}}.$$
>
> ### C.
>
> ![[Counting - SV-06 - Solution.svg]]
>
> A-only 6, both 3, B-only 3. The union contains 12 numbers, so **neither** contains \(36-12=\boxed{24}\). The counts sum to 36.

> [!abstract] Review First
> - [[Math/Set Theory/Set Theory - Venn - Practice 3 - Union and Intersection of Integers|Set Theory - Venn - Practice 3 - Union and Intersection of Integers]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Set Theory/Set Theory - Subsets - Practice 11 - Perfect Cubes in a Number Universe|Set Theory - Subsets - Practice 11 - Perfect Cubes in a Number Universe]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
