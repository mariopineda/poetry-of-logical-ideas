---
type: qod
publish: true
course:
  - "Mathematics 10C"
  - "Mathematics 30-3"
topic: "Linear Relations"
show_solution: true
---

The approximate temperature of the Earth's atmosphere at different altitudes up to 10 km is given in the table.

|  |  |
| --- | --- |
| Altitude (km) | Temperature ($^\circ$C) |
| $0$ | $15$ |
| $2$ | $2$ |
| $4$ | $-11$ |
| $6$ | $-24$ |
| $8$ | $-37$ |
| $10$ | $-50$ |

1. Using your graphing calculator or [Desmos](https://www.desmos.com/calculator) graph the data.
2. Determine the equation relating temperature and altitude.
3. Determine the x- and y-intercepts and explain their meaning. Round to the nearest hundreth if necessary.
4. Explain whether this scenario represents a linear relation.
5. Determine, to the nearest tenth, the temperature at an altitude of 7 km.
6. Determine, to the nearest tenth, the altitude at which the temperature is -56$^\circ$C.
7. Above 10 km, the temperature remains fairly constant at -56$^\circ$C. Show this on the graph.

## Solution

> [!example]- Show solution
>
> Let $h$ be altitude in kilometres and $T$ be temperature in degrees Celsius.
>
> The temperature changes by
>
> $$
> 2-15=-13^\circ\text{C}
> $$
>
> for every $2$ km increase in altitude, so the slope is
>
> $$
> m=\frac{-13}{2}=-6.5.
> $$
>
> Since $T=15$ when $h=0$,
>
> $$
> \boxed{T=-6.5h+15}.
> $$
>
> ### 1.
>
> The six data points lie on a straight line:
>
> $$
> (0,15),\ (2,2),\ (4,-11),\ (6,-24),\ (8,-37),\ (10,-50).
> $$
>
> ### 2.
>
> $$
> \boxed{T=-6.5h+15}
> $$
>
> ### 3.
>
> The $T$-intercept is
>
> $$
> \boxed{(0,15)},
> $$
>
> meaning the model predicts a temperature of $15^\circ\text{C}$ at sea level.
>
> For the altitude-intercept, set $T=0$:
>
> $$
> 0=-6.5h+15.
> $$
>
> Thus,
>
> $$
> h=\frac{15}{6.5}
> =\frac{30}{13}
> \approx2.31.
> $$
>
> So the intercept is
>
> $$
> \boxed{(2.31,0)},
> $$
>
> meaning the model predicts a temperature of $0^\circ\text{C}$ at an altitude of about $2.31$ km.
>
> ### 4.
>
> Yes. The first differences are constant, so the data represent a linear relation.
>
> ### 5.
>
> At $h=7$,
>
> $$
> T=-6.5(7)+15=-30.5.
> $$
>
> Therefore,
>
> $$
> \boxed{-30.5^\circ\text{C}}.
> $$
>
> ### 6.
>
> Set $T=-56$:
>
> $$
> -56=-6.5h+15.
> $$
>
> Then
>
> $$
> h=\frac{71}{6.5}
> =\frac{142}{13}
> \approx10.9.
> $$
>
> Thus the linear model predicts
>
> $$
> \boxed{10.9\text{ km}}.
> $$
>
> ### 7.
>
> The prompt states that above $10$ km the temperature remains approximately $-56^\circ\text{C}$. On the graph, represent this by a horizontal segment at
>
> $$
> \boxed{T=-56}
> $$
>
> for altitudes above $10$ km. This stated extension does not lie on the linear model from the table.

> [!abstract] Review First
> - [[Math/Relations and Functions/Function Notation 1|Function Notation 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Relations and Functions/Linear Relations 6|Linear Relations 6]]
> - [[Math/Relations and Functions/Linear Relations 8|Linear Relations 8]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
