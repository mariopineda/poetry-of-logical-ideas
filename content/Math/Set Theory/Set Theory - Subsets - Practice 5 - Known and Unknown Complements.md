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
  - "Set Theory - Subsets - Practice 6 - Recovering the Universe Size"
---

### A.

Let $U=\{1,2,\ldots,250\,000\}$, and let $X\subseteq U$ contain exactly 17 numbers. Determine $n(X')$.

### B.

In the **same universe**, another subset $Y$ is defined, but all you are told is $n(X)=17$. Can you determine $n(Y)$? Explain what additional information would be required.

## Solution

> [!example]- Show solution
>
> ### A.
>
> The universe has 250 000 elements. The complement includes every element not in X:
>
> $$n(X')=n(U)-n(X)=250\,000-17=\boxed{249\,983}.$$
>
> ### B.
>
> **No.** Knowledge of $n(X)$ alone places no restriction on the size of a different subset Y beyond
>
> $$\boxed{0\le n(Y)\le250\,000}.$$
>
> We would need information about Y itself, such as $n(Y')$, a complete membership rule or enough counts to determine it.

> [!abstract] Review First
> - [[Math/Set Theory/Set Theory - Subsets - Practice 1 - Numbered Museum Collections|Set Theory - Subsets - Practice 1 - Numbered Museum Collections]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Set Theory/Set Theory - Subsets - Practice 6 - Recovering the Universe Size|Set Theory - Subsets - Practice 6 - Recovering the Universe Size]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Set Theory/Set Theory - Subsets - Practice 6 - Recovering the Universe Size|Set Theory - Subsets - Practice 6 - Recovering the Universe Size]]
> - [[Math/Set Theory/Set Theory - Subsets - Practice 9 - Three Two-Sided Symbols|Set Theory - Subsets - Practice 9 - Three Two-Sided Symbols]]
