---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: "Set Theory"
show_solution: true
prerequisites:
  - "Set Theory - Subsets - Practice 5 - Known and Unknown Complements"
related:
  - "Set Theory - Subsets - Practice 7 - Icons with Straight and Curved Features"
---

Three distinct two-sided tokens—**East**, **North**, **West**—are tossed. Each shows **sun (S)** or **moon (M)**. Record results in the fixed order (East, North, West).

### A. List the universal set U of all three-symbol outcomes.
### B. Let E be the event that the **North token is moon**. List E.
### C. Determine \(n(U)\) and \(n(E)\).
### D. Is \(E\subseteq U\)? Explain.
### E. Describe and list E', and verify its size by subtraction.
### F. Are E and E' disjoint?

## Solution

> [!example]- Show solution
>
> ### A.
>
> $$U=\{SSS,SSM,SMS,SMM,MSS,MSM,MMS,MMM\}.$$
>
> ### B.
>
> The middle (North) symbol must be M:
>
> $$E=\{SMS,SMM,MMS,MMM\}.$$
>
> ### C.
>
> $$\boxed{n(U)=2^3=8},\qquad\boxed{n(E)=2^2=4}.$$
>
> ### D.
>
> **Yes:** every outcome in E is one of the eight possible outcomes in U.
>
> ### E.
>
> E' means the North token **shows sun**:
>
> $$E'=\{SSS,SSM,MSS,MSM\}.$$
>
> $$n(E')=n(U)-n(E)=8-4=\boxed{4}.$$
>
> ### F.
>
> **Yes:** no outcome can have the middle symbol simultaneously S and M, so \(E\cap E'=\varnothing\).

> [!abstract] Review First
> - [[Math/Set Theory/Set Theory - Subsets - Practice 5 - Known and Unknown Complements|Set Theory - Subsets - Practice 5 - Known and Unknown Complements]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Set Theory/Set Theory - Subsets - Practice 7 - Icons with Straight and Curved Features|Set Theory - Subsets - Practice 7 - Icons with Straight and Curved Features]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Set Theory/Set Theory - Subsets - Practice 11 - Perfect Cubes in a Number Universe|Set Theory - Subsets - Practice 11 - Perfect Cubes in a Number Universe]]
