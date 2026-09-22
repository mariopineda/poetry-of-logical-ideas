---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Limits"
show_solution: false
---

## Question

Calculate $\displaystyle \lim_{x \to 0} x \cot x$.

> [!info]- Hint 1
> $$
\lim_{x \to 0} \frac{\sin x}{1} = 1
>$$
>$$
\lim_{x\to 0} \cos x = 1
>$$

## Solution

> [!example]- Show solution
>
> $$
> \begin{align*}
> \lim_{x\to 0} x \cot x & =  \lim_{x\to 0} \frac{x \cos x}{\sin x}\\ \\
> & \text{Divide numerator and denominator by } x \\ \\
> & = \lim_{x\to 0} \frac{\cos x}{\frac{\displaystyle \sin x}{\displaystyle x}} \\ \\
> & = \frac{\displaystyle \lim_{x\to 0} \cos x}{\displaystyle \lim_{x\to 0} \frac{\displaystyle \sin x}{\displaystyle x}} \\ \\
> & = \frac{\cos 0}{1} \\ \\
> & = 1
> \end{align*}
> $$
>

## Review First


## Explore Also

- [[Transcendental Functions]]
- [[Rational Expressions & Equations]]
- [[Mathematical Proof]]

## Build Toward

- [[Calculus]]
