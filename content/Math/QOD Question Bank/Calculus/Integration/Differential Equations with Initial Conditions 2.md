---
type: qod
publish: true
courses:
  - "Math 31"
topic: "Differential Equations"
show_solution: false
prerequisites:
  - "[[Antiderivative 1]]"
---

## Question

A stone is tossed upward with a velocity of 8 m/s from the edge of a cliff 63 m high. How long will it take the stone to hit the ground at the foot of the cliff? Assume the gravitational constant is 9.8 m/s$^2$.

<div style="page-break-after: always;"></div>

> [!info]- Hint 
> **Initial conditions **:
>  - Initial velocity ($v_0$â€‹) = 8 m/s (upward)
>  - Height of the cliff ($â„Ž_0$â€‹) = 63 m
>  - Acceleration due to gravity = -9.8 m/s$^2$ (downward)

## Solution

We let $h$ denote the height, in meters, of the stone above the ground at time $t$, and we let $v = \frac{\displaystyle dh}{\displaystyle dt}$ denote its velocity. Since the gravity is the force acting on the stone we have

$$
\frac{da}{dt} = -9.8
$$
where 9.8 m/s$^2$ is the gravitational constant near the surface of the earth. We see that $v$ is an antiderivative
$$
v = -9.8t + v_0
$$
for some initial velocity $v_0$. Since we are told that the stone is tossed upward at the initial instant with a velocity of 8 m/s,
$$
v = -9.8t + 8
$$
Since  $h(t)$ is the position-time function, $\frac{\displaystyle dh}{\displaystyle dt} = v$,
$$
\frac{dh}{dt} = -9.8t + 8
$$
where the antiderivative is
$$
h(t) = -4.9t^2 +8t + h_0
$$
where $h_0 = 63$ is the initial position, hence
$$
h(t) = -4.9t^2 +8t + 63
$$
We can now answer the questions. The stone hits the ground when  $h(t)=0$, hence
$$
h(t)=0 \Rightarrow -4.9t^2 + 8t + 63 = 0
$$
Using the quadratic formula we obtain the roots
$$
t = \frac{-8 + \sqrt{8^2-4(-4.9)(63)}}{-9.8} = -2.86
$$
and
$$
t = \frac{-8 - \sqrt{8^2-4(-4.9)(63)}}{-9.8} = 4.49
$$
Because the negative root has no physical significance in this problem, we see that about 4.5 s after being tossed up the stone hits the ground.


