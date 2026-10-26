---
type: qod
publish: true
course:
  - "Mathematics 30-1"
  - "Mathematics 31"
topic: "Function Properties"
show_solution: true
---

If

$$
f(x)=\frac{x+4}{1-x}
$$

and

$$
g(x)=\frac{5-2x}{3x+1},
$$

determine:

1. $(g\circ f)(x)$ and all restrictions on $x$;
2. $(f\circ g)(-1)$.

## Solution

> [!example]- Show solution
>
> ### 1.
>
> Substitute
>
> $$
> f(x)=\frac{x+4}{1-x}
> $$
>
> into $g$:
>
> $$
> (g\circ f)(x)
> =
> \frac{
> 5-2\left(\frac{x+4}{1-x}\right)
> }{
> 3\left(\frac{x+4}{1-x}\right)+1
> }.
> $$
>
> Simplify the numerator:
>
> $$
> 5-\frac{2x+8}{1-x}
> =
> \frac{5-5x-2x-8}{1-x}
> =
> \frac{-7x-3}{1-x}.
> $$
>
> Simplify the denominator:
>
> $$
> \frac{3x+12}{1-x}+1
> =
> \frac{3x+12+1-x}{1-x}
> =
> \frac{2x+13}{1-x}.
> $$
>
> Therefore,
>
> $$
> \boxed{
> (g\circ f)(x)
> =
> -\frac{7x+3}{2x+13}
> }.
> $$
>
> Restrictions come from the original composition.
>
> First,
>
> $$
> f(x)
> $$
>
> requires
>
> $$
> x\neq1.
> $$
>
> Also the input to $g$ cannot make its denominator zero:
>
> $$
> 3f(x)+1\neq0.
> $$
>
> This gives
>
> $$
> 2x+13\neq0
> $$
>
> and therefore
>
> $$
> x\neq-\frac{13}{2}.
> $$
>
> Hence,
>
> $$
> \boxed{x\neq1,\ -\frac{13}{2}}.
> $$
>
> ### 2.
>
> First,
>
> $$
> g(-1)
> =
> \frac{5-2(-1)}{3(-1)+1}
> =
> \frac7{-2}
> =
> -\frac72.
> $$
>
> Then
>
> $$
> f\left(-\frac72\right)
> =
> \frac{-\frac72+4}{1+\frac72}
> =
> \frac{\frac12}{\frac92}
> =
> \boxed{\frac19}.
> $$

> [!abstract] Review First
> - [[Math/Relations and Functions/Domain and Range - Reading Graphs 1|Domain and Range - Reading Graphs 1]]
> - [[Math/Relations and Functions/Function Notation 1|Function Notation 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Relations and Functions/Properties of Functions 12|Properties of Functions 12]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
