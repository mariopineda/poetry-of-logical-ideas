---
type: qod
publish: true
courses:
  - "Math 31"
topic: "Related Rates"
show_solution: true
prerequisites:
  - "[[Implicit Differentiation 1]]"
related:
  - "[[Applications of Trig Derivatives 1]]"
  - "[[Applications of Trig Derivatives 3 - Modeling the Velocity of a Ferris Wheel]]"
---

## Question

$$\newcommand{\dxdt}{\frac{\displaystyle dx}{\displaystyle dt}\Bigg|_{\substack{\theta=\frac{\pi}{3}}}}$$
Two sides of a triangle have lengths 15 m and 20 m. The angle between the sides is increasing at $\pi/90$ radians / second. How fast is the length of the third side changing when the angle between the sides is $\pi/3$?

<div style="page-break-after: always;"></div>

> [!info]- Hint 1
> The triangle is not necessarily a right triangle. 

> [!info]- Hint 2
>Use the Law of Cosines, $c^2=a^2+b^2-2ab \cos \theta$

## Solution

> [!example]- Show solution
>
> Let the angle between the given sides be $\theta$ radians and the variable be $x$ m. Note that both are functions of time $t$ measured in seconds. We know that $\frac{\displaystyle d\theta}{\displaystyle dt} = \frac{\displaystyle \pi}{\displaystyle 90}$ radians / second and we are looking to determine $\dxdt$.
>
> To determine how fast the length of the third side ($x$) of a triangle is changing, we can use the [[Law of Cosines]].
>
> Applying the Law of Cosines,
> $$
> x^2 = 15^2+20^2-2(15)(20)\cos \theta
> $$
> $$
> x^2=625-600 \cos \theta
> $$
> We differentiate both sides with respect to $t$:
> $$
> 2x\frac{dx}{dt} = -600 \left( -\sin \theta \frac{d\theta}{dt} \right)
> $$
> $$
> \frac{dx}{dt} = \frac{300 \sin \theta}{x} \frac{d\theta}{dt}
> $$
>
> To evaluate this expression we need to know $x$.  Using the Law of Cosines, determine the length of side $x$ when $\theta=\frac{\displaystyle \pi}{\displaystyle 3}$,
> $$
> \begin{align*}
> x^2 & = 15^2+20^2-2(15)(20)\cos \frac{\pi}{3} \\
> x^2 & = 625-600 \left( \frac{1}{2} \right) \\
> x   & = \sqrt{325} \\
> x   & = 5\sqrt{13}
> \end{align*}
> $$
> We can now determine $\dxdt$ as
> $$
> \begin{align*}
> \dxdt & = \frac{300 \sin \frac{\pi}{3}}{5\sqrt{13}} \frac{\pi}{90} \\
> & = \frac{\pi \sqrt{3}}{3\sqrt{13}} \\
> & = \frac{\pi \sqrt{3}}{3\sqrt{13}} \times \frac{\sqrt{13}}{\sqrt{13}} \\
> & \frac{\pi\sqrt{39}}{39} \mbox{m}/\mbox{s}
> \end{align*}
> $$
> The third side is increasing at the rate of $\frac{\displaystyle \pi\sqrt{39}}{\displaystyle 39} \mbox{m}/\mbox{s} \approx 0.50 \mbox{m}/\mbox{s}$
> %%
>

