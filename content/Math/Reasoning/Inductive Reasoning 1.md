---
type: qod
publish: true
course:
  - "Mathematics 20-2"
topic: "Inductive Reasoning"
show_solution: true
---

Consider the sequence

$$
2,\ 6,\ 12,\ 20,\ 30,\ldots
$$

1. Use inductive reasoning to predict the next two terms.
2. Conjecture a formula for the $n$th term.
3. Use your conjecture to determine the $10$th term.

## Solution

> [!example]- Show solution
>
> The successive differences are
>
> $$
> 4,\ 6,\ 8,\ 10,\ldots
> $$
>
> so the next differences should be $12$ and $14$.
>
> Thus the next two terms are
>
> $$
> 30+12=42
> $$
>
> and
>
> $$
> 42+14=56.
> $$
>
> Therefore,
>
> $$
> \boxed{42,\ 56}.
> $$
>
> The terms can be written as
>
> $$
> 1(2),\ 2(3),\ 3(4),\ 4(5),\ 5(6),\ldots
> $$
>
> so a natural conjecture is
>
> $$
> \boxed{a_n=n(n+1)}.
> $$
>
> Then
>
> $$
> a_{10}=10(11)=\boxed{110}.
> $$

> [!abstract] Review First
> _No linked questions yet._

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Reasoning/Inductive Reasoning 2|Inductive Reasoning 2]]
> - [[Math/Reasoning/Deductive Reasoning 1|Deductive Reasoning 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Reasoning/Deductive Reasoning 2|Deductive Reasoning 2]]
> - [[Math/Reasoning/Deductive Reasoning 1|Deductive Reasoning 1]]
