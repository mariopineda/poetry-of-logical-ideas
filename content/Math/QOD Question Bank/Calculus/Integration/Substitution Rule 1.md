---
type: qod
publish: true
courses:
  - "Math 31"
topic: "Substitution Rule"
show_solution: false
---

## Question

Evaluate the following integrals using the substitution rule.

1. $\displaystyle \int (3x^2 + 2x) e^{x^3 + x^2} \, dx$
2. $\displaystyle \int \sin(2x) \cos^3(2x) \, dx$
3. $\displaystyle \int \frac{x}{(1 + x^2)^2} \, dx$
4. $\displaystyle \int \frac{e^{2x}}{1 + e^{2x}} \, dx$
5. $\displaystyle \int \frac{\ln(x)}{x} \, dx$

## Solution

1.  For $\displaystyle \int (3x^2 + 2x) e^{x^3 + x^2} \, dx$ let $u = x^3 + x^2$, then $du = (3x^2 + 2x) \, dx$. So the integral becomes: $\displaystyle \int e^u \, du = e^u + C = e^{x^3 + x^2} + C$
2. For $\displaystyle \int \sin(2x) \cos^3(2x) \, dx$ let $u = \cos(2x)$, then $du = -2\sin(2x) \, dx$ or $\sin(2x) \, dx = -\frac{\displaystyle 1}{\displaystyle 2} du$. So the integral becomes: $\displaystyle \int u^3 \left( -\frac{1}{2} \right) du = -\frac{1}{2} \int u^3 \, du = -\frac{1}{2} \cdot \frac{u^4}{4} + C = -\frac{u^4}{8} + C$. Substituting back $u = \cos(2x)$: $-\frac{\displaystyle (\cos(2x))^4}{\displaystyle 8} + C$
3. For $\displaystyle \int \frac{x}{(1 + x^2)^2} \, dx$ let $u = 1 + x^2$, then $du = 2x \, dx$ or $x \, dx = \frac{\displaystyle 1}{\displaystyle 2} du$. So the integral becomes:
$\displaystyle \int \frac{1}{u^2} \cdot \frac{1}{2} du = \frac{1}{2} \int u^{-2} \, du = \frac{1}{2} \cdot \left( -u^{-1} \right) + C = -\frac{1}{2u} + C$. Substituting back $u = 1 + x^2$: $-\frac{1}{2(1 + x^2)} + C$
4. For $\displaystyle \int \frac{e^{2x}}{1 + e^{2x}} \, dx$ let $u = 1 + e^{2x}$, then $du = 2e^{2x} \, dx$ or $e^{2x} \, dx = \frac{1}{2} du$. So the integral becomes: $\displaystyle \int \frac{1}{u} \cdot \frac{1}{2} du = \frac{1}{2} \int \frac{1}{u} \, du = \frac{1}{2} \ln|u| + C = \frac{1}{2} \ln|1 + e^{2x}| + C$
5. For $\displaystyle \int \frac{\ln(x)}{x} \, dx$ let $u = \ln(x)$, then $du = \frac{1}{x} \, dx$. So the integral becomes:
$\displaystyle \int u \, du = \frac{u^2}{2} + C = \frac{(\ln(x))^2}{2} + C$
