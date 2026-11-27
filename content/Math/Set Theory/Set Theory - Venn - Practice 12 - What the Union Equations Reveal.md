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
  - "Set Theory - Subsets - Practice 4 - Colour Families of Trading Cards"
qod_id: "QOD-CF790B95C62B6DE14903D284"
title: "Set Theory - Venn - Practice 12 - What the Union Equations Reveal"
aliases: []
domain: null
tags: []
learning_order: null
estimated_minutes: null
calculator: null
question_format: null
curriculum_alignment: []
cognitive_level: []
performance_standard: []
diploma_eligible: null
diploma_ready: null
source: null
source_kind: null
source_question: null
source_topic: null
source_format: null
source_equivalence: null
source_percent_correct: null
source_mean_score: null
assessment_metadata_origin: null
review_status: null
review_date: null
curriculum_review_required: null
used_in: []
---

Three sets $A,B,C$ are subsets of the same finite universal set. Suppose

$$n(A)+n(B)=n(A\cup B),$$

$$n(A)+n(C)>n(A\cup C).$$

### A. Which pair is definitely disjoint? Explain using inclusion-exclusion.
### B. Which pair definitely intersects?
### C. Which pair could be either disjoint or intersecting? Give a brief justification.

## Solution

> [!example]- Show solution
>
> For any two finite sets X and Y,
>
> $$n(X\cup Y)=n(X)+n(Y)-n(X\cap Y).$$
>
> ### A.
>
> Equality for A and B forces $n(A\cap B)=0$, so $\boxed{A\cap B=\varnothing}$.
>
> ### B.
>
> The strict inequality for A and C forces $n(A\cap C)>0$, so $\boxed{A\cap C\ne\varnothing}$.
>
> ### C.
>
> $\boxed{B\text{ and }C}$ could intersect or be disjoint. Nothing states whether B shares an element with C. For example, any C element in A cannot also be in B, but C could have additional elements outside A that belong to B.

> [!abstract] Review First
> - [[Math/Set Theory/Set Theory - Venn - Practice 3 - Union and Intersection of Integers|Set Theory - Venn - Practice 3 - Union and Intersection of Integers]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Set Theory/Set Theory - Subsets - Practice 4 - Colour Families of Trading Cards|Set Theory - Subsets - Practice 4 - Colour Families of Trading Cards]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
