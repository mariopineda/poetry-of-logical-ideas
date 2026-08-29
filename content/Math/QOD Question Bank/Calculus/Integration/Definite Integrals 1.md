---
type: qod
publish: true
courses:
  - "Math 31"
topic: "Definite Integrals"
show_solution: false
prerequisites:
  - "[[Antiderivative 1]]"
related:
  - "[[Area under a curve - Method of Exhaustion]]"
---

## Question

Evaluate...
1. $\displaystyle \int_{-1}^2 x^3 \, dx$
2. $\displaystyle \int_\pi^{2\pi} \sin x \, dx$
3. $\displaystyle \int_1^8 \frac{1}{\sqrt[3]{x^2}}$
4. $\displaystyle \int_0^1 \frac{1}{x^2+1} \, dx$ where $\displaystyle \int \frac{1}{x^2+1} \, dx = \tan^{-1} x + C$

![[Page Break]]

> [!info]- Hint 
> $\displaystyle \int_a^b f(x) \, dx = F(x) \Bigr]_a^b = F(b) - F(a)$ where $F$ is the antiderivative of $f$.

## Solution

1. $\displaystyle\int_{-1}^2 x^3 \, dx = \left.\frac{x^4}{4} \right]_{-1}^2 = \frac{2^4-(-1)^4}{4} = \frac{15}{4}$
2. $\displaystyle \int_\pi^{2\pi} \sin x \, dx = -\cos x \Bigr]_\pi^2\pi = (-\cos 2\pi) - (-\cos \pi) = -1-1 = -2$
3. $\displaystyle \int_1^8 \frac{1}{\sqrt[3]{x^2}} = \int_1^8 x^{-\frac{2}{3}} = \left. \frac{x^{-\frac{2}{3}+1}}{-\frac{2}{3}+1} \right]_1^8 = 3x^\frac{1}{3} \Bigr]_1^8 = 3(2)-3(1)=3$
4. $\displaystyle \int_0^1 \frac{1}{x^2+1} \, dx = \tan^{-1} x \Bigr]_0^1 = \tan^{-1} 1 - \tan^{-1} 0 =\frac{\pi}{4} - 0 = \frac{\pi}{4}$


