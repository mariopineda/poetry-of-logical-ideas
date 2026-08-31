---
type: qod
publish: true
courses:
  - "Math 31"
topic: "Trigonometric Derivatives"
show_solution: false
prerequisites:
  - "[[Chain Rule 1]]"
  - "[[Angular Measure 1]]"
related:
  - "[[Derivative of Trigonometric Functions 1b]]"
---

## Question

Differentiate $\cos x$ using first principles.

## Solution

> [!example]- Show solution
>
> The derivative of a function $f(x)$ at a point $x = a$ is defined as the limit of the difference quotient as $h \to 0$:
> $$
> f'(a) = \lim_{{h \to 0}} \frac{{f(a + h) - f(a)}}{h}
> $$
> Let $f(x) = \cos(x)$. We want to find $f'(x)$:
> $$
> \begin{align*}
> f'(x) &= \lim_{{h \to 0}} \frac{{\cos(x + h) - \cos(x)}}{h} \\
> &= \lim_{{h \to 0}} \frac{{\cos(x)\cos(h) - \sin(x)\sin(h) - \cos(x)}}{h} \\
> &= \lim_{{h \to 0}} \frac{{\cos(x)(\cos(h) - 1) - \sin(x)\sin(h)}}{h} \\
> &= \lim_{{h \to 0}} \frac{{\cos(x)(\cos(h) - 1)}}{h} - \lim_{{h \to 0}} \frac{{\sin(x)\sin(h)}}{h}
> \end{align*}
> $$
> Now we use the limits:
> $$ \begin{align*}
> \lim_{{h \to 0}} \frac{{\cos(x)(\cos(h) - 1)}}{h} &= \cos(x) \lim_{{h \to 0}} \frac{{\cos(h) - 1}}{h} \\
> &= \cos(x) \cdot 0 = 0
> \end{align*}
> $$
> $$
> \begin{align*}
> \lim_{{h \to 0}} \frac{{\sin(x)\sin(h)}}{h} &= \sin(x) \lim_{{h \to 0}} \frac{{\sin(h)}}{h} \\
> &= \sin(x) \cdot 1 = \sin(x)
> \end{align*}
> $$
> So, putting it all together:
> $$
> f'(x) = -\sin(x)
> $$
> Thus, the derivative of $\cos(x)$ with respect to $x$ is $-\sin(x)$.
>

