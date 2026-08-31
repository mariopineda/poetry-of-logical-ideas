---
type: qod
publish: true
courses:
  - "Math 31"
topic: "Related Rates"
show_solution: false
prerequisites:
  - "[[Implicit Differentiation 1]]"
related:
  - "[[Applications of Trig Derivatives 2]]"
  - "[[Related Rates 1]]"
---

## Question

$$\newcommand{\dxdt}{\frac{\displaystyle dx}{\displaystyle dt}\Bigg|_{\substack{\theta=\frac{\pi}{3}}}}$$
A Ferris wheel with a radius of 20 meters and with its lowest point 2 meters above ground completes one full revolution every 30 seconds. Let $\theta(t)$ be the angle (in radians) the Ferris wheel has rotated at time $t$ seconds, where $\theta(0)=0$. Determine the passenger's velocity at $t=10$ seconds.

<div style="page-break-after: always;"></div>

> [!info]- Hint 1
> 1. Determine $\theta(t)$ as a function of time $t$.
> 2. Write an equation for the height $h(t)$ of a passenger above the ground at time $t$ seconds, assuming the bottom of the Ferris wheel is 2 meters above the ground.
> 4. Calculate the passenger's velocity (rate of change of height) at $t = 10$ seconds.

## Solution

> [!example]- Show solution
>
> 1. **Determine $\theta(t)$ as a function of time $t$:**
> Since the Ferris wheel completes one full revolution ($2\pi$ radians) every 30 seconds, it rotates $\frac{2\pi}{30} = \frac{\pi}{15}$ radians per second
> Thus, the angle $\theta(t)$ at time $t$ is given by:
> $$
>    \theta(t) = \frac{\pi}{15}t
> $$
> 2. **Write an equation for the height $h(t)$ of a passenger above the ground:**
> The vertical position of a passenger at any angle $\theta$ on a Ferris wheel of radius 20 meters can be expressed as:
> $$
>    h(t) = 20 \sin(\theta(t)) = 20 \sin\left(\frac{\pi}{15}t\right)
> $$
> Since the bottom of the Ferris wheel is 2 meters above the ground and the radius is 20 meters, the height $h(t)$ above the ground is:
> $$
>    h(t) = 20 \sin\left(\frac{\pi}{15}t\right) + 22
> $$
> 4. **Calculate the passenger's velocity at $t = 10$ seconds:**
> The height function $h(t)$ is:
> $$
>    h(t) = 20 \sin\left(\frac{\pi}{15}t\right) + 22
> $$
> To find the velocity, we need to take the derivative of $h(t)$:
> $$
>    h'(t) = \frac{d}{dt} \left[ 20 \sin\left(\frac{\pi}{15}t\right) + 22 \right] = 20 \cdot \cos\left(\frac{\pi}{15}t\right) \cdot \frac{\pi}{15}
> $$
> Simplifying:
> $$
>    h'(t) = \frac{20\pi}{15} \cos\left(\frac{\pi}{15}t\right) = \frac{4\pi}{3} \cos\left(\frac{\pi}{15}t\right)
> $$
> Now, substitute $t = 10$:
> $$
>    h'(10) = \frac{4\pi}{3} \cos\left(\frac{\pi}{15} \cdot 10\right) = \frac{4\pi}{3} \cos\left(\frac{2\pi}{3}\right)
> $$
> Knowing $\cos\left(\frac{2\pi}{3}\right) = -\frac{1}{2}$, we get:
> $$
>    h'(10) = \frac{4\pi}{3} \cdot -\frac{1}{2} = -\frac{2\pi}{3} \text{ meters per second}
> $$
> Therefore, the passenger's velocity at $t = 10$ seconds is approximately $-2.09$ meters per second, indicating that they are moving downwards.
>

