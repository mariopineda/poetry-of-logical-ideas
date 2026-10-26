---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: Polynomial Functions
show_solution: true
---

Sketch $y=f(x)$ where $f(0)=4$, $f(-5)=f(-1)=f(1)=f(5)=0$, $f'(0)=f'(\pm 3)=0$, $f'>0$ on $(-3,0) \cup (3, \infty)$ and $f'<0$ on $(-\infty, -3) \cup (0,3)$.

## Solution

> [!example]- Show solution
>
> The information specifies the shape of the graph, although it does not determine a unique formula for $f$.
>
> ### Intercepts
>
> The graph passes through
>
> $$
> \boxed{(0,4)}
> $$
>
> and has $x$-intercepts at
>
> $$
> \boxed{(-5,0),\ (-1,0),\ (1,0),\ (5,0)}.
> $$
>
> ### Critical points
>
> Since
>
> $$
> f'(0)=f'(-3)=f'(3)=0,
> $$
>
> the critical $x$-values are
>
> $$
> \boxed{-3,\ 0,\ 3}.
> $$
>
> Use the sign of $f'$:
>
> - $f'<0$ on $(-\infty,-3)$;
> - $f'>0$ on $(-3,0)$;
> - $f'<0$ on $(0,3)$;
> - $f'>0$ on $(3,\infty)$.
>
> Therefore:
>
> - at $x=-3$, $f'$ changes from negative to positive, so there is a **local minimum**;
> - at $x=0$, $f'$ changes from positive to negative, so $(0,4)$ is a **local maximum**;
> - at $x=3$, $f'$ changes from negative to positive, so there is another **local minimum**.
>
> Because the graph crosses the $x$-axis at $x=-5$ and $x=-1$, the local minimum at $x=-3$ lies below the $x$-axis.
>
> Similarly, because the graph crosses at $x=1$ and $x=5$, the local minimum at $x=3$ lies below the $x$-axis.
>
> A valid qualitative sketch therefore:
>
> 1. decreases through $(-5,0)$ to a minimum below the axis at $x=-3$;
> 2. rises through $(-1,0)$ to the maximum $(0,4)$;
> 3. falls through $(1,0)$ to a minimum below the axis at $x=3$;
> 4. rises through $(5,0)$ and continues upward.
>
> Any smooth polynomial-shaped graph satisfying all of these features is an acceptable sketch.

> [!abstract] Review First
> - [[Math/Relations and Functions/Function Transformations 1|Function Transformations 1]]
> - [[Math/Polynomials/Factoring Polynomials 1|Factoring Polynomials 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Polynomials/Sketching Polynomial Functions 1|Sketching Polynomial Functions 1]]
> - [[Math/Quadratics/Completing the Square 1|Completing the Square 1]]
> - [[Math/Polynomials/Polynomial Functions 28 - Checking Reasoning|Polynomial Functions 28 - Checking Reasoning]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
