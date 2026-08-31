---
type: qod
publish: true
courses:
  - "Math 31"
topic: "Substitution Rule"
show_solution: true
prerequisites:
  - "[[Antiderivative 1]]"
  - "[[Chain Rule 1]]"
related:
  - "[[Substitution Rule 1]]"
---

## Question

Evaluate the following integrals using the substitution rule.
1. $\displaystyle \int 3x^2(x^3+5)^7 \, dx$
2. $\displaystyle \int \frac{x^3}{\sqrt{1-x^4}} \, dx$
3. $\displaystyle \int x\sqrt{x+2} \, dx$
4. $\displaystyle \int \frac{\sin x}{\cos^3 x} \, dx$

## Solution

> [!example]- Show solution
>
> 1.  For $\displaystyle \int 3x^2(x^3+5)^7 \, dx$ let $u=x^3+5$, then $du=3x^2 \, dx$. So the integral becomes $\displaystyle \int u^7 \, du = \frac{\displaystyle u^8}{\displaystyle 8} + C = \frac{\displaystyle (x^3+5)^8}{8} + C$.
> 2.  For $\displaystyle \int \frac{x^3}{\sqrt{1-x^4}} \, dx$ let $u = 1-x^4$, then $du=-4x^3 \, dx = -\frac{\displaystyle 1}{\displaystyle4} du = x^3 \, dx$. So the integral becomes $\displaystyle \int \frac{\displaystyle -\frac{1}{4} \, du}{\displaystyle \sqrt{u}} = -\frac{\displaystyle 1}{\displaystyle 4} \int \frac{\displaystyle 1}{\displaystyle \sqrt{u}} \, du = -\frac{\displaystyle 1}{\displaystyle 4} \int u^{-1/2} \, du = -\frac{1}{4} \frac{u^{1/2}}{\frac{1}{2}} + C = -\frac{1}{2} u^{1/2} + C = -\frac{1}{2}(1-x^4)^{1/2}+C$
> 3. For $\displaystyle \int x\sqrt{x+2} \, dx$ let $u=x+2$, then $du=dx$ and $x=u-2$. So the integral becomes $\displaystyle \int (u-2) \sqrt{u} \, du = \int (u-2) u^{1/2} \, du = \int u^{3/2}-2u^{1/2} \, du = \frac{\displaystyle u^{5/2}}{\displaystyle 5/2} - 2\frac{u^{3/2}}{3/2} = \frac{\displaystyle 2}{\displaystyle 5}u^{5/2} - \frac{\displaystyle 4}{\displaystyle 3}u^{3/2} + C = \frac{\displaystyle 2}{\displaystyle 5}(x+2)^{5/2} - \frac{\displaystyle 4}{\displaystyle 3}(x+2)^{3/2}+C$
> 4. For $\displaystyle \int \frac{\sin x}{\cos^3 x} \, dx$ let $u=\cos x$, then $-du=\sin x \, dx$. So the integral becomes $\displaystyle \int \frac{-du}{u^3} = -\int u^{-3} \, du = \frac{\displaystyle -u^{-2}}{\displaystyle -2} + C = \frac{1}{2\cos^2 x} + C$
>

