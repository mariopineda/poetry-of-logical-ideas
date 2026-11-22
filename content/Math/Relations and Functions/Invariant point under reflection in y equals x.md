---
type: qod
publish: true
course:
- Mathematics 30-1
- Mathematics 31
topic: Transformations
show_solution: true
qod_id: DIP-30-1-2014-MC2
diploma_eligible: true
diploma_ready: true
review_status: certified_batch04_proof_and_source_equivalence
question_format: written-response
diploma_cognitive_level: Conceptual
diploma_performance_standard: Acceptable
diploma_outcomes: RF 6
tags:
- qod
- diploma-preparation
- written-response
diploma_historical_percent_correct: 47.6
diploma_original_format: multiple-choice
certified_batch: 4
---

The graph of a piecewise linear function $y=f(x)$ is shown, with line segments joining consecutive vertices.

![[diploma-batch04-2014-mc2-invariant-graph.svg]]

When the graph is reflected in the line $y=x$, how many points remain in their original positions? Determine their **exact coordinates** and justify using the line segments.

## Solution

> [!example]- Show solution
> Reflection in the line $y=x$ maps $(x,y)$ to $(y,x)$. A point stays in place exactly when $y=x$, so we seek **intersections with the line $y=x$**.
>
> The first segment runs from $(-4,-6)$ to $(-2,0)$ and has equation $y=3x+6$ for $-4\le x\le-2$. Setting $y=x$ gives $x=3x+6$, so $x=-3$, within its interval.
>
> The second segment runs from $(-2,0)$ to $(2,-2)$; its equation is $y=-\frac{1}{2}x-1$ for $-2\le x\le2$. Setting $y=x$ yields $(3/2)x=-1$, so $x=-2/3$, also in the segment.
>
> The third segment runs from $(2,-2)$ to $(4,3)$ and has $y=\frac52x-7$. Its intersection with $y=x$ would require $x=14/3>4$, outside the plotted segment, so it contributes no invariant point.
>
> Hence the two invariant points are
>
> $$\boxed{(-3,-3)\text{ and }(-2/3,-2/3)},\qquad\boxed{2\text{ invariant points}}.$$

> [!abstract] Review First
> - [[Math/Relations and Functions/Properties of Functions 1|Properties of Functions 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Relations and Functions/Properties of Functions 4|Properties of Functions 4]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Relations and Functions/Function Transformations 5|Function Transformations 5]]
