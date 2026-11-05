---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: "Set Theory"
show_solution: true
prerequisites:
  - "Set Theory - Venn - Practice 1 - Two Clubs at an Environmental School"
related:
  - "Set Theory - Venn - Practice 1 - Two Clubs at an Environmental School"
---

A library survey has **28 respondents**. **Fourteen** use the e-book app (A), **seventeen** use the audiobook app (B), and **five** use neither.

A student incorrectly writes **14** in the A-only region, **17** in the B-only region, **8** in the overlap, and **5** outside. These region counts cannot be correct.

### A. Find the correct counts for $A\cap B$, A-only, and B-only.
### B. Redraw the Venn diagram with the correct four region counts.
![[Counting - SV-02 - Question.png]]

## Solution

> [!example]- Show solution
>
> ### A.
>
> At least one app is used by $28-5=23$ respondents. By inclusion-exclusion,
>
> $$n(A\cap B)=14+17-23=\boxed{8}.$$
>
> $$\text{A only}=14-8=\boxed{6}.$$
>
> $$\text{B only}=17-8=\boxed{9}.$$
>
> The student wrongly used the **whole-set totals** as the exclusive-region counts; that counts overlap users more than once.
>
> ### B.
>
> ![[Counting - SV-02 - Solution.png]]
>
> Check: $6+8+9+5=28$.

> [!abstract] Review First
> - [[Math/Set Theory/Set Theory - Venn - Practice 1 - Two Clubs at an Environmental School|Set Theory - Venn - Practice 1 - Two Clubs at an Environmental School]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Set Theory/Set Theory - Venn - Practice 1 - Two Clubs at an Environmental School|Set Theory - Venn - Practice 1 - Two Clubs at an Environmental School]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
