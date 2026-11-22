---
type: qod
publish: true
course:
- Mathematics 30-1
topic: Trigonometry
show_solution: true
qod_id: DIP-30-1-201901-WR2
diploma_eligible: true
diploma_ready: true
historical_source_mean_score: "2.6/5"
review_status: certified-batch01-proof-and-source-reviewed
question_format: written-response
diploma_cognitive_level: Procedural; Conceptual
diploma_performance_standard: Excellence; Acceptable
diploma_outcomes: 5, 1
tags:
- qod
- diploma-preparation
- written-response
certified_batch: 1
---

**(a)** Solve the trigonometric equation
$$\sec^2\theta-3\sec\theta+2=0$$
**algebraically**, for $2\pi\leq\theta\leq 3\pi$. Give exact solutions in radians, and justify why they satisfy the original equation.

**(b)** The unit-circle figure shows the terminal arms of three solutions to a different trigonometric equation in $[0,2\pi)$. The marked points are $P(\tfrac12,\tfrac{\sqrt3}{2})$, $Q(-\tfrac12,-\tfrac{\sqrt3}{2})$, and $R(\tfrac12,-\tfrac{\sqrt3}{2})$. Determine the **complete general solution** represented by all three arms, using an integer parameter and correct periodicity.

![[diploma-wr-trig-general-solutions-original.svg]]

## Solution

> [!example]- Show solution
> **(a)** Factor the polynomial in $u=\sec\theta$:
> $$\sec^2\theta-3\sec\theta+2=(\sec\theta-1)(\sec\theta-2)=0.$$
> This gives $\sec\theta=1$ or $\sec\theta=2$, equivalently $\cos\theta=1$ or $\cos\theta=\tfrac12$. On the specified interval $[2\pi,3\pi]$, the solutions are
> $$\boxed{\theta=2\pi\quad\text{or}\quad\theta=\frac{7\pi}{3}}.$$
> Both have nonzero cosine, so both satisfy the original secant equation. No other angles in the interval have either cosine value.
>
> **(b)** The terminal arms pass through $P(\tfrac12,\tfrac{\sqrt3}{2})$, $Q(-\tfrac12,-\tfrac{\sqrt3}{2})$, and $R(\tfrac12,-\tfrac{\sqrt3}{2})$. In $[0,2\pi)$, their angles are $\pi/3$, $4\pi/3$ and $5\pi/3$, respectively. Every coterminal angle is found by adding a whole number of turns:
> $$\boxed{\theta=\frac\pi3+2\pi n\quad\text{or}\quad\theta=\frac{4\pi}3+2\pi n\quad\text{or}\quad\theta=\frac{5\pi}3+2\pi n,\qquad n\in\mathbb Z.}$$
> Equivalently, the first two families may be combined as $\theta=\pi/3+\pi n$, with the third family unchanged.

> [!abstract] Review First
> - [[Math/Trigonometry/Trigonometric Functions/Unit Circle and Trigonometric Ratios 6|Unit Circle and Trigonometric Ratios 6]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Trigonometry/Trigonometric Functions/Unit Circle and Trigonometric Ratios 10|Unit Circle and Trigonometric Ratios 10]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Trigonometry/Trigonometric Functions/Unit Circle and Trigonometric Ratios 12|Unit Circle and Trigonometric Ratios 12]]
