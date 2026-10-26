---
type: qod
publish: true
course:
  - "Mathematics 30-1"
topic: "Function Properties"
show_solution: true
---

If $f(x) = \frac{3x+4}{6-x}$ and $g(x)=\frac{x-1}{x+2}$, then determine $f \circ g(x)$. Simplify your answer.

## Solution

> [!example]- Show solution
>
> We need
>
> $$
> (f\circ g)(x)=f(g(x)).
> $$
>
> Given
>
> $$
> f(x)=\frac{3x+4}{6-x}
> $$
>
> and
>
> $$
> g(x)=\frac{x-1}{x+2},
> $$
>
> substitute $g(x)$ into $f$:
>
> $$
> f(g(x))
> =
> \frac{
> 3\left(\frac{x-1}{x+2}\right)+4
> }{
> 6-\left(\frac{x-1}{x+2}\right)
> }.
> $$
>
> Simplify the numerator:
>
> $$
> 3\left(\frac{x-1}{x+2}\right)+4
> =
> \frac{7x+5}{x+2}.
> $$
>
> Simplify the denominator:
>
> $$
> 6-\frac{x-1}{x+2}
> =
> \frac{5x+13}{x+2}.
> $$
>
> Therefore,
>
> $$
> \boxed{
> (f\circ g)(x)
> =
> \frac{7x+5}{5x+13}
> }.
> $$
>
> The composition requires
>
> $$
> x\neq-2
> $$
>
> and
>
> $$
> g(x)\neq6.
> $$
>
> Solving
>
> $$
> \frac{x-1}{x+2}=6
> $$
>
> gives
>
> $$
> x=-\frac{13}{5}.
> $$
>
> Thus the restrictions are
>
> $$
> \boxed{
> x\neq-2,\ -\frac{13}{5}
> }.
> $$
>
> > [!info]- Legacy video solution
> > https://www.youtube.com/embed/yNpAydm6UrA

> [!abstract] Review First
> - [[Math/Relations and Functions/Domain and Range - Reading Graphs 1|Domain and Range - Reading Graphs 1]]
> - [[Math/Relations and Functions/Function Notation 1|Function Notation 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Relations and Functions/Properties of Functions 3|Properties of Functions 3]]
> - [[Math/Relations and Functions/Properties of Functions 5|Properties of Functions 5]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
