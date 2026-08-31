---
type: qod
publish: true
courses:
  - "Math 31"
topic: "Trigonometric Derivatives"
show_solution: true
prerequisites:
  - "[[Chain Rule 1]]"
  - "[[Angular Measure 1]]"
related:
  - "[[Derivative of Trigonometric Functions 1a]]"
  - "[[Derivative of Trigonometric Functions 2a]]"
---

## Question

Differentiate $\tan x$ using first principles.

## Solution

> [!example]- Show solution
>
> To differentiate $\tan x$ using first principles, let's recall that $\tan x = \frac{\displaystyle \sin x}{\displaystyle \cos x}$. We'll use the definition of the derivative:
> $$ f'(x) = \lim_{{h \to 0}} \frac{f(x+h) - f(x)}{h} $$
> Applying this to $\tan x$, we have:
> $$
> \begin{align*}
> y' &= \lim_{{h \to 0}} \frac{\tan(x+h) - \tan x}{h} \\
> &= \lim_{{h \to 0}} \frac{\frac{\displaystyle \sin(x+h)}{\displaystyle \cos(x+h)} - \frac{\displaystyle \sin x}{\displaystyle \cos x}}{h} \\
> &= \lim_{{h \to 0}} \frac{\sin(x+h)\cos x - \sin x \cos(x+h)}{h\cos(x+h)\cos x} \\
> &= \lim_{{h \to 0}} \frac{\sin x \cos h + \cos x \sin h - \sin x \cos x - \sin h \cos x}{h\cos(x+h)\cos x} \\
> &= \lim_{{h \to 0}} \frac{\sin x (\cos h - \cos x) + \cos x (\sin h - \sin x)}{h\cos(x+h)\cos x} \\
> &= \lim_{{h \to 0}} \frac{\sin x (\cos h - \cos x)}{h\cos(x+h)\cos x} + \lim_{{h \to 0}} \frac{\cos x (\sin h - \sin x)}{h\cos(x+h)\cos x} \\
> &= \lim_{{h \to 0}} \frac{\sin x (\cos h - \cos x)}{h} \cdot \lim_{{h \to 0}} \frac{1}{\cos(x+h)\cos x} + \lim_{{h \to 0}} \frac{\cos x (\sin h - \sin x)}{h\cos(x+h)\cos x} \\
> &= \sin x \cdot \frac{1}{\cos^2 x} + \cos x \cdot \lim_{{h \to 0}} \frac{\sin h - \sin x}{h\cos(x+h)} \\
> &= \frac{\sin x}{\cos^2 x} + \cos x \cdot \lim_{{h \to 0}} \frac{\sin h - \sin x}{h} \cdot \lim_{{h \to 0}} \frac{1}{\cos(x+h)} \\
> &= \frac{\sin x}{\cos^2 x} + \cos x \cdot \lim_{{h \to 0}} \frac{\sin h - \sin x}{h} \cdot \frac{1}{\cos x} \\
> &= \frac{\sin x}{\cos^2 x} + \cos x \cdot \lim_{{h \to 0}} \frac{\sin h - \sin x}{h} \cdot \lim_{{h \to 0}} \frac{1}{\cos h} \\ &= \frac{\sin x}{\cos^2 x} + \cos x \cdot \lim_{{h \to 0}} \frac{\sin h - \sin x}{h} \cdot \lim_{{h \to 0}} \frac{1}{\cos h} \\
> &= \frac{\sin x}{\cos^2 x} + \cos x \cdot \cos x \cdot 1 \\
> &= \frac{\sin x}{\cos^2 x} + \frac{\cos^2 x}{\cos^2 x} \\
> &= \frac{\sin x + \cos^2 x}{\cos^2 x} \\
> &= \frac{1}{\cos^2 x}
> \end{align*}
> $$
> Therefore, the derivative of $\tan x$ is $\sec^2 x$.
>
> ![](https://youtu.be/JDJfmMqaDvE?si=ikvmpvdDIzYmuP6u)
>

