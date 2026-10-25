---
type: qod
publish: true
course:
  - "Mathematics 30-1"
topic: "Binomial Theorem"
show_solution: true
---

## Question

Determine:
1. the third term of $(x+y)^{15}$
2. the middle term of $(p+q)^{12}$
3. the third term of $(3x+2y)^9$
4. the fourth term of $(a^2-2a)^7$
5. the middle term of $\left(2-\frac{\displaystyle x}{\displaystyle 2}\right)^6$

## Solution

> [!example]- Show solution
>
> Use the general term
>
> $$
> T_{k+1}=\binom{n}{k}a^{\,n-k}b^k.
> $$
>
> 1. Third term of $(x+y)^{15}$:
>
> $$
> T_3=\binom{15}{2}x^{13}y^2
> =\boxed{105x^{13}y^2}.
> $$
>
> 2. $(p+q)^{12}$ has $13$ terms, so the middle term is the seventh:
>
> $$
> T_7=\binom{12}{6}p^6q^6
> =\boxed{924p^6q^6}.
> $$
>
> 3. Third term of $(3x+2y)^9$:
>
> $$
> T_3
> =\binom92(3x)^7(2y)^2
> =\boxed{314928x^7y^2}.
> $$
>
> 4. Fourth term of $(a^2-2a)^7$:
>
> $$
> T_4
> =\binom73(a^2)^4(-2a)^3
> =\boxed{-280a^{11}}.
> $$
>
> 5. $\left(2-\frac{x}{2}\right)^6$ has $7$ terms, so the middle term is the fourth:
>
> $$
> T_4
> =\binom63 2^3\left(-\frac{x}{2}\right)^3
> =\boxed{-20x^3}.
> $$

## Review First

- [[Pascal's Triangle]]
- [[Combinations 1]]

## Explore Also

## Build Toward
