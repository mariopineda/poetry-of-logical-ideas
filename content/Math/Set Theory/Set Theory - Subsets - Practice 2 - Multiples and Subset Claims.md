---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: "Set Theory"
show_solution: true
prerequisites:
  - "Set Theory - Subsets - Practice 1 - Numbered Museum Collections"
related:
  - "Set Theory 2"
---

Let the universe be $U=\{1,2,\ldots,30\}$. Define:

$$A=\{\text{multiples of 8 in }U\},$$
$$B=\{\text{multiples of 4 in }U\},$$
$$C=\{\text{multiples of 9 in }U\}.$$

### A. List the elements of the three sets and represent them in a Venn diagram.
![[Counting - SS-02 - Question.png]]
### B. Which pairs of sets are disjoint?
### C. Decide whether each statement is true or false. Justify each.

1. $A\subseteq B$
2. $B\subseteq A$
3. $A\subseteq A$
4. $B'$ consists of **only odd** numbers.
5. The elements of $U$ lying between 34 and 38 form the empty set.

## Solution

> [!example]- Show solution
>
> ### A.
>
> $$A=\{8,16,24\},$$
> $$B=\{4,8,12,16,20,24,28\},$$
> $$C=\{9,18,27\}.$$
>
> ![[Counting - SS-02 - Solution.png]]
>
> ### B.
>
> $A\cap C=\varnothing$ and $B\cap C=\varnothing$. Sets A and B are **not** disjoint.
>
> ### C.
>
> 1. **True:** each multiple of 8 is a multiple of 4.
> 2. **False:** for example, $4\in B$ but $4\notin A$.
> 3. **True:** every set is a subset of itself when $\subseteq$ includes equality.
> 4. **False:** $2\in B'$, but 2 is even. The complement contains every member of U that is not divisible by 4.
> 5. **True:** none of 34, 35, 36, 37 or 38 belongs to U, so the set is $\boxed{\varnothing}$.

> [!abstract] Review First
> - [[Math/Set Theory/Set Theory - Subsets - Practice 1 - Numbered Museum Collections|Set Theory - Subsets - Practice 1 - Numbered Museum Collections]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Set Theory/Set Theory 2|Set Theory 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Set Theory/Set Theory - Subsets - Practice 8 - Positive and Negative Integers|Set Theory - Subsets - Practice 8 - Positive and Negative Integers]]
> - [[Math/Set Theory/Set Theory - Subsets - Practice 10 - A Nest of Number Systems|Set Theory - Subsets - Practice 10 - A Nest of Number Systems]]
> - [[Math/Set Theory/Set Theory - Venn - Practice 3 - Union and Intersection of Integers|Set Theory - Venn - Practice 3 - Union and Intersection of Integers]]
