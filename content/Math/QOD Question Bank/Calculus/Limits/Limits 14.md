---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Limits"
show_solution: true
---

## Question

Evaluate each limit, if possible.

### A.

$$
\lim_{x\to-7}
\frac{x^2-7x}{x^2-49}
$$

### B.

$$
\lim_{x\to4}
\frac{x^2+2x-24}{x^3-5x^2+4x}
$$

### C.

$$
\lim_{x\to-2}
\frac{40-10x^2}{5x^3+40}
$$

### D.

$$
\lim_{x\to-3}
\frac{x^2+3x}{5-\sqrt{1-8x}}
$$

### E.

$$
\lim_{x\to8}
\frac{\frac6x-\frac34}{x^3-64x}
$$

### F.

$$
\lim_{x\to1}
\frac{x-1}{\sqrt[3]{x}-1}
$$

### G.

If

$$
\lim_{x\to a}
\frac{\frac1a-\frac1x}{x-a}
=
\frac9{16},
$$

determine the possible value or values of $a$.

## Solution

> [!example]- Show solution
>
> ### A.
>
> At $x=-7$, the numerator approaches $98$ while the denominator approaches $0$.
>
> The left-hand limit is $+\infty$ and the right-hand limit is $-\infty$.
>
> Therefore,
>
> $$
> \boxed{\text{the two-sided limit does not exist}}.
> $$
>
> ### B.
>
> Factor:
>
> $$
> x^2+2x-24=(x+6)(x-4)
> $$
>
> and
>
> $$
> x^3-5x^2+4x=x(x-1)(x-4).
> $$
>
> Cancel $x-4$:
>
> $$
> \lim_{x\to4}
> \frac{x+6}{x(x-1)}
> =
> \frac{10}{12}
> =
> \boxed{\frac56}.
> $$
>
> ### C.
>
> Factor:
>
> $$
> 40-10x^2
> =
> 10(2-x)(x+2)
> $$
>
> and
>
> $$
> 5x^3+40
> =
> 5(x+2)(x^2-2x+4).
> $$
>
> Thus,
>
> $$
> \lim_{x\to-2}
> \frac{2(2-x)}{x^2-2x+4}
> =
> \frac{8}{12}
> =
> \boxed{\frac23}.
> $$
>
> ### D.
>
> Rationalize the denominator:
>
> $$
> \frac{x(x+3)}{5-\sqrt{1-8x}}
> \cdot
> \frac{5+\sqrt{1-8x}}{5+\sqrt{1-8x}}.
> $$
>
> The denominator becomes
>
> $$
> 25-(1-8x)=8(x+3).
> $$
>
> After cancellation,
>
> $$
> \lim_{x\to-3}
> \frac{x(5+\sqrt{1-8x})}{8}
> =
> \frac{-3(10)}8
> =
> \boxed{-\frac{15}{4}}.
> $$
>
> ### E.
>
> Simplify the numerator:
>
> $$
> \frac6x-\frac34
> =
> -\frac{3(x-8)}{4x}.
> $$
>
> Also,
>
> $$
> x^3-64x=x(x-8)(x+8).
> $$
>
> Therefore,
>
> $$
> \lim_{x\to8}
> -\frac{3}{4x^2(x+8)}
> =
> \boxed{-\frac{3}{4096}}.
> $$
>
> ### F.
>
> Let
>
> $$
> u=\sqrt[3]{x},
> \qquad x=u^3.
> $$
>
> Then as $x\to1$, $u\to1$, and
>
> $$
> \frac{x-1}{\sqrt[3]{x}-1}
> =
> \frac{u^3-1}{u-1}
> =
> u^2+u+1.
> $$
>
> Hence,
>
> $$
> \boxed{3}.
> $$
>
> ### G.
>
> Simplify:
>
> $$
> \frac{\frac1a-\frac1x}{x-a}
> =
> \frac{\frac{x-a}{ax}}{x-a}
> =
> \frac{1}{ax}.
> $$
>
> Therefore,
>
> $$
> \lim_{x\to a}\frac{1}{ax}
> =
> \frac{1}{a^2}.
> $$
>
> Set this equal to $\frac9{16}$:
>
> $$
> \frac{1}{a^2}=\frac9{16}.
> $$
>
> Thus,
>
> $$
> a^2=\frac{16}{9},
> $$
>
> so
>
> $$
> \boxed{a=\pm\frac43}.
> $$

## Review First

- [[Properties of Functions 1]]

## Explore Also

- [[Limits 13]]
- [[Limits 15]]

## Build Toward
