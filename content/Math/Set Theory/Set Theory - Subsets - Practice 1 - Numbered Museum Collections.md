---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: "Set Theory"
show_solution: true
prerequisites:
  - "Set Theory 2"
related:
  - "Set Theory 2"
---

The universal set is $U=\{1,2,\ldots,18\}$, representing 18 numbered museum specimens. Define:

$$F=\{1,2,\ldots,11\},\quad V=\{12,13,\ldots,18\},\quad S=\{2,4,6,8\}.$$

A curator calls $F$ the fossils, $V$ the volcanic rocks, and $S$ the selected fossils.

![Question diagram](../../Assets/Counting%20-%20SS-01%20-%20Question.png)

### A. Is $S\subseteq F\subseteq U$ true? Explain.
### B. Suggest a different real-world classification consistent with the same subset diagram.
### C. Explain why $S\subseteq F$ and $S\subseteq U$.
### D. Which displayed sets are disjoint?
### E. Is $F'$ equal to $V$?
### F. Find $n(V)$ from $n(U)$ and $n(F)$.
### G. List all elements of $S'$.

## Solution

> [!example]- Show solution
>
> ![Solution diagram](../../Assets/Counting%20-%20SS-01%20-%20Solution.png)
>
> ### A.
>
> **Yes.** Every element of $S$ appears in $F$, and every element of $F$ appears in $U$.
>
> ### B.
>
> For example, $U$ could be 18 labelled photographs, $F$ the 11 outdoor photographs, $V$ the seven indoor photographs, and $S$ the four outdoor photographs selected for display. The membership lists, not the labels, determine the set relationships.
>
> ### C.
>
> The elements 2, 4, 6 and 8 are all in $F$ and in $U$, so both subset statements hold.
>
> ### D.
>
> $F\cap V=\varnothing$ and $S\cap V=\varnothing$, because the elements of $V$ are 12–18.
>
> ### E.
>
> **Yes:** all elements of $U$ not in $F$ form exactly $V$.
>
> ### F.
>
> $$n(V)=n(U)-n(F)=18-11=\boxed{7}.$$
>
> ### G.
>
> $$\boxed{S'=\{1,3,5,7,9,10,11,12,13,14,15,16,17,18\}}.$$

> [!abstract] Review First
> - [[Math/Set Theory/Set Theory 2|Set Theory 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Set Theory/Set Theory 2|Set Theory 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Set Theory/Set Theory - Subsets - Practice 2 - Multiples and Subset Claims|Set Theory - Subsets - Practice 2 - Multiples and Subset Claims]]
> - [[Math/Set Theory/Set Theory - Subsets - Practice 3 - Library Shelves and Subsets|Set Theory - Subsets - Practice 3 - Library Shelves and Subsets]]
> - [[Math/Set Theory/Set Theory - Subsets - Practice 5 - Known and Unknown Complements|Set Theory - Subsets - Practice 5 - Known and Unknown Complements]]
> - [[Math/Set Theory/Set Theory - Subsets - Practice 7 - Icons with Straight and Curved Features|Set Theory - Subsets - Practice 7 - Icons with Straight and Curved Features]]
> - [[Math/Set Theory/Set Theory - Venn - Practice 1 - Two Clubs at an Environmental School|Set Theory - Venn - Practice 1 - Two Clubs at an Environmental School]]
