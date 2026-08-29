---
type: qod
publish: true
courses:
  - "Math 31"
topic: "Antiderivatives"
show_solution: false
---

## Question

Evaluate and verify by differentiating the antiderivative. 

1. $\displaystyle \int 3(2x + 5)^2 \, dx$
2. $\displaystyle \int \sin(4x - 1) \, dx$
3. $\displaystyle \int e^{3x + 2} \, dx$
4. $\displaystyle \int (7x + 4)^{1/2} \, dx$

## Solution

1. For $\displaystyle \int 3(2x + 5)^2 \, dx$ let $u = 2x + 5$. Then, $du = 2 \, dx$ or $dx = \frac{\displaystyle du}{\displaystyle 2}$.
$$
\begin{align*}
& \int 3(2x + 5)^2 \, dx \\
 = & \int 3u^2 \cdot \frac{du}{2} \\
= & \frac{3}{2} \int u^2 \, du \\
= & \frac{3}{2} \cdot \frac{u^3}{3} \\
= & \frac{u^3}{2} \\
= & \frac{(2x + 5)^3}{2} + C
\end{align*}
$$
2.  For  $\displaystyle \int \sin(4x - 1) \, dx$  let $u = 4x - 1$. Then, $du = 4 \, dx$ or $dx = \frac{\displaystyle du}{\displaystyle 4}$.
$$
\begin{align*}
   & \int \sin(4x - 1) \, dx \\
 = & \int \sin(u) \cdot \frac{du}{4} \\
 = & \frac{1}{4} \int \sin(u) \, du \\
 = & \frac{1}{4} (-\cos(u)) \\
 = & -\frac{1}{4} \cos(4x - 1) + C
\end{align*}
$$
3. For $\displaystyle \int e^{3x + 2} \, dx$ let $u = 3x + 2$. Then, $du = 3 \, dx$ or $dx = \frac{\displaystyle du}{\displaystyle 3}$.
$$
\begin{align*}
  & \int e^{3x + 2} \, dx \\
= & \int e^u \cdot \frac{du}{3} \\
= & \frac{1}{3} \int e^u \, du \\
= & \frac{1}{3} e^u \\
= & \frac{1}{3} e^{3x + 2} + C
\end{align*}
$$
4. For $\displaystyle \int (7x + 4)^{1/2} \, dx$ let $u = 7x + 4$. Then, $du = 7 \, dx$ or $dx = \frac{\displaystyle du}{\displaystyle 7}$.
$$
\begin{align*}
   & \int (7x + 4)^{1/2} \, dx \\
 = & \int u^{1/2} \cdot \frac{du}{7} \\
 = & \frac{1}{7} \int u^{1/2} \, du \\
 = & \frac{1}{7} \cdot \frac{2}{3} u^{3/2} \\
 = & \frac{2}{21} u^{3/2} \\
 = & \frac{2}{21} (7x + 4)^{3/2} + C
\end{align*}
$$
