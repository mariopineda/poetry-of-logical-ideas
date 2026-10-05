---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Trigonometric Derivatives"
show_solution: false
---

## Question

Prove that $y=\sec x + \tan x$ is concave up on the following interval $\left( -\frac{\displaystyle \pi}{\displaystyle 2}, \frac{\displaystyle \pi}{\displaystyle 2} \right)$.

> [!info]- Related
> [[CAST]]
> [[Concave Up]]
> [[Derivatives of Trigonometric Functions]]
> [[Second Derivative]]
> [[Square of a Binomial]]
> [[Unit Circle]]

> [!abstract] Review First
> - [[Math/Calculus/Derivatives/Chain Rule 1|Chain Rule 1]]
> - [[Math/Trigonometry/Trigonometric Functions/Angular Measure 1|Angular Measure 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Calculus/Trigonometry/Derivative of Trigonometric Functions 2d|Derivative of Trigonometric Functions 2d]]
> - [[Math/Calculus/Trigonometry/Trigonometric Derivatives 1|Trigonometric Derivatives 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._

## Solution

> [!example]- Show solution
>
> First we find the [[Second Derivative|second derivative]].
> $$
> \begin{align*}
> \frac{dy}{dx} & = \sec x \tan x + \sec^2 x \\ \\
> \frac{d^2y}{dx^2} & = \sec x \sec^2 x + \tan x \sec x \tan x + 2 \sec x \sec x \tan x\\ \\
> & = \sec x (\sec^2 x + 2\sec x \tan x + \tan^2 x) \\ \\
> \end{align*}
> $$
> Note that $\sec^2 x + 2\sec x \tan x + \tan^2 x$ is a [[Square of a Binomial|square of a binomial]] $a^2+2ab+b^2 = (a+b)^2$, hence,
> $$
> \begin{align*}
> & \sec x (\sec^2 x + 2\sec x \tan x + \tan^2 x) \\ \\
> =~ & \sec x (\sec x + \tan x)^2
> \end{align*}
> $$
> As $\left( -\frac{\displaystyle \pi}{\displaystyle 2}, \frac{\displaystyle \pi}{\displaystyle 2} \right)$ represents quadrant 1 and 4 $\sec x = \frac{\displaystyle 1}{\displaystyle \cos x} > 0$ and $(\sec x + \tan x)^2 > 0$ as it is squared. Thus, the second derivative is positive and the graph is always concave up on the interval $\left( -\frac{\displaystyle \pi}{\displaystyle 2}, \frac{\displaystyle \pi}{\displaystyle 2} \right)$.
>
