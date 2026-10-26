---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Definite Integrals"
show_solution: true
---

Use four **midpoint rectangles** to estimate the area under

$$
f(x)=\cos x
$$

from

$$
x=0
$$

to

$$
x=\frac{\pi}{2}.
$$

Give the estimate to the nearest hundredth and describe how the four approximating rectangles would be placed on the graph.

## Solution

> [!example]- Show solution
>
> The interval length is
>
> $$
> \frac{\pi}{2}-0=\frac{\pi}{2}.
> $$
>
> With $4$ rectangles,
>
> $$
> \Delta x
> =
> \frac{\pi/2}{4}
> =
> \frac{\pi}{8}.
> $$
>
> The midpoint $x$-values are
>
> $$
> \frac{\pi}{16},
> \quad
> \frac{3\pi}{16},
> \quad
> \frac{5\pi}{16},
> \quad
> \frac{7\pi}{16}.
> $$
>
> The midpoint estimate is
>
> $$
> A
> \approx
> \frac{\pi}{8}
> \left[
> \cos\left(\frac{\pi}{16}\right)
> +
> \cos\left(\frac{3\pi}{16}\right)
> +
> \cos\left(\frac{5\pi}{16}\right)
> +
> \cos\left(\frac{7\pi}{16}\right)
> \right].
> $$
>
> Numerically,
>
> $$
> A\approx1.00645.
> $$
>
> Therefore, to the nearest hundredth,
>
> $$
> \boxed{A\approx1.01}.
> $$
>
> For the sketch, divide $[0,\pi/2]$ into four equal subintervals of width $\pi/8$. Draw each rectangle with height equal to $\cos x$ at the midpoint of its subinterval.

> [!abstract] Review First
> - [[Math/Calculus/Integration/Antiderivative 1|Antiderivative 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Calculus/Integration/Area Between Curves 1|Area Between Curves 1]]
> - [[Math/Calculus/Integration/Area Under and Between Curves 1|Area Under and Between Curves 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
