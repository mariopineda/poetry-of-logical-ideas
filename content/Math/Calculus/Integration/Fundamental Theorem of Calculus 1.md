---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Definite Integrals"
show_solution: true
---

Evaluate

$$
\int_{1}^{4}\frac{t^2+\sqrt{t}-2}{t}\,dt.
$$

## Solution

> [!example]- Show solution
>
> Simplify:
>
> $$
> \frac{t^2+\sqrt{t}-2}{t}
> =t+t^{-1/2}-\frac{2}{t}.
> $$
>
> An antiderivative is
>
> $$
> F(t)=\frac{t^2}{2}+2\sqrt{t}-2\ln t.
> $$
>
> Therefore,
>
> $$
> \int_1^4\frac{t^2+\sqrt{t}-2}{t}\,dt
> =
> \left[
> \frac{t^2}{2}+2\sqrt{t}-2\ln t
> \right]_1^4
> $$
>
> $$
> =
> \left(12-2\ln4\right)-\frac52
> $$
>
> $$
> =
> \boxed{\frac{19}{2}-4\ln2}.
> $$
>
> Approximately,
>
> $$
> \boxed{6.73}.
> $$

> [!abstract] Review First
> - [[Math/Calculus/Integration/Antiderivative 1|Antiderivative 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Calculus/Integration/Definite Integrals 1|Definite Integrals 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
