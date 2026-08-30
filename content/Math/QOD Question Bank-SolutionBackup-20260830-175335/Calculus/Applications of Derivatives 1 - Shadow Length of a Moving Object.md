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
  - "[[Applications of Trig Derivatives 1]]"
---

## Question

A streetlight is mounted at the top of a 15-meter pole. A 2-meter tall person is walking away from the pole at a constant speed of 1.5 meters per second. The person's distance from the pole at time $t$ seconds is $x(t)$. Determine the rate at which the length of the person's shadow is changing at 5 seconds.

<div style="page-break-after: always;"></div>

> [!info]- Hint 
> 1. Express $x(t)$ as a function of time $t$.
> 2. Derive the equation for the length of the person's shadow $s(t)$ as a function of time $t$.
> 3. Determine the length of the shadow at $t=5$ seconds.
> 4. Calculate the rate at which the length of the shadow is changing at $t=5$ seconds.

## Solution

1. **Express $ x(t) $ as a function of time $ t $:**
Since the person is walking away from the pole at a constant speed of 1.5 meters per second:
$$
   x(t) = 1.5t
$$
2. **Derive the equation for the length of the person's shadow $s(t)$ as a function of time $t$:**
Let's denote the length of the shadow by $s(t)$. By similar triangles, the ratios of the heights to the lengths of their corresponding shadows are equal:
$$
   \frac{15}{x(t) + s(t)} = \frac{2}{s(t)}
$$
Substitute $x(t)=1.5t$:
$$
   \frac{15}{1.5t + s(t)} = \frac{2}{s(t)}
$$
Cross-multiply to solve for $s(t)$:
$$
   15s(t) = 2(1.5t + s(t))
$$
Simplify and solve for $s(t)$:
$$
15s(t) = 3t + 2s(t)
$$
$$
15s(t) - 2s(t) = 3t
$$
$$
13s(t) = 3t
$$
$$
s(t) = \frac{3t}{13}
$$
3. **Determine the length of the shadow at $t=5$ seconds:**
Substitute $t =5$ into $s(t)$:
$$
   s(5) = \frac{3 \cdot 5}{13} = \frac{15}{13} \approx 1.15 \text{ meters}
$$
4. **Calculate the rate at which the length of the shadow is changing at $t=5$ seconds:**
Differentiate $s(t)$ with respect to $t$:
$$
   s(t) = \frac{3t}{13}
$$
$$
   s'(t) = \frac{3}{13}
$$
The rate at which the length of the shadow is changing is constant and equal to:
$$
   s'(t) = \frac{3}{13} \approx 0.23 \text{ meters per second}
$$
Therefore, at $t=5$ seconds, the length of the shadow is approximately 1.15 meters, and it is increasing at a rate of approximately 0.23 meters per second.
