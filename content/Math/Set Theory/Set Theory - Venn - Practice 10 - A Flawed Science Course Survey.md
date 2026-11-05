---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: "Set Theory"
show_solution: true
prerequisites:
  - "Set Theory - Venn - Practice 8 - Visitors to Two Nature Centres"
related:
  - "Set Theory - Venn - Practice 11 - Online and In-Person Tutoring"
---

A class of **38** students is surveyed. **17** take an astronomy elective (A), **20** take environmental science (E), and **6** take both.

A student writes $17+20+6=43$ and concludes that everyone in the class takes at least one of these electives.

### A. Explain why adding the intersection is an error.
### B. Determine the number taking neither elective and complete a Venn diagram.
![[Counting - SV-10 - Question.png]]

## Solution

> [!example]- Show solution
>
> ### A.
>
> The overlap is already included in **both** totals. Adding it again counts those students for a third time. We must **subtract the overlap once**:
>
> $$n(A\cup E)=17+20-6=\boxed{31}.$$
>
> ### B.
>
> $$n((A\cup E)')=38-31=\boxed{7}.$$
>
> The A-only count is $17-6=11$, and the E-only count is $20-6=14$.
>
> ![[Counting - SV-10 - Solution.png]]
>
> Check: $11+6+14+7=38$.

> [!abstract] Review First
> - [[Math/Set Theory/Set Theory - Venn - Practice 8 - Visitors to Two Nature Centres|Set Theory - Venn - Practice 8 - Visitors to Two Nature Centres]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Set Theory/Set Theory - Venn - Practice 11 - Online and In-Person Tutoring|Set Theory - Venn - Practice 11 - Online and In-Person Tutoring]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Set Theory/Set Theory - Venn - Practice 11 - Online and In-Person Tutoring|Set Theory - Venn - Practice 11 - Online and In-Person Tutoring]]
