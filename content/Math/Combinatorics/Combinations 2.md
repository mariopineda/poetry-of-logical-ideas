---
type: qod
publish: true
courses:
  - "Math 30-1"
  - "Math 30-2"
topic: "Combinations"
show_solution: false
prerequisites:
  - "[[Permutations 1]]"
related:
  - "[[Combinations 1]]"
  - "[[Combinations 3]]"
---

## Question

Algebraically determine the solution to $_nC_7 = _{n+1}C_8$.

## Solution

> [!example]- Show solution
>
> Use the combination formula $_nCr = \frac{\displaystyle n!}{\displaystyle(n-r)!r!}$:
> $$
> \frac{n!}{7!(n-7)!} = \frac{(n+1)!}{8!(n+1-8)!}
> $$
> Simplify the right-hand side:
> $$
> \frac{n!}{7!(n-7)!} = \frac{(n+1)!}{8!(n-7)!}
> $$
> Recall that $(n+1)! = (n+1) \cdot n!$:
> $$
> \frac{n!}{7!(n-7)!} = \frac{(n+1) \cdot n!}{8 \cdot 7! \cdot (n-7)!}
> $$
> Cancel $n!$ and $(n-7)!$ from both sides:
> $$
> \frac{1}{7!} = \frac{n+1}{8 \cdot 7!}
> $$
> Multiply both sides by $7!$ to simplify:
> $$
> 1 = \frac{n+1}{8}
> $$
> Solve for $n$:
> $$
> n+1 = 8
> n = 7
> $$
> Thus, the solution to the equation $\binom{n}{7} = \binom{n+1}{8}$ is $n = 7$.
>

