---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Optimization"
show_solution: true
---

A box with a square base and an open top is made from $2700\text{ cm}^2$ of material.

Find the largest possible volume of the box.

## Solution

> [!example]- Show solution
>
> Let the square base have side length $x$ cm and height $h$ cm.
>
> The surface-area constraint is
>
> $$
> x^2+4xh=2700.
> $$
>
> Thus,
>
> $$
> h=\frac{2700-x^2}{4x}.
> $$
>
> The volume is
>
> $$
> V(x)=x^2h=\frac{2700x-x^3}{4}.
> $$
>
> Differentiate:
>
> $$
> V'(x)=\frac{2700-3x^2}{4}.
> $$
>
> Set $V'(x)=0$:
>
> $$
> x^2=900
> $$
>
> so $x=30$.
>
> Then
>
> $$
> h=\frac{2700-900}{120}=15.
> $$
>
> Therefore,
>
> $$
> V_{\max}=30^2(15)=\boxed{13500\text{ cm}^3}.
> $$

> [!abstract] Review First
> - [[Math/Calculus/Derivatives/Derivatives 1|Derivatives 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Calculus/Optimization Problems/Optimization 4|Optimization 4]]
> - [[Math/Calculus/Optimization Problems/Optimization 6|Optimization 6]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
