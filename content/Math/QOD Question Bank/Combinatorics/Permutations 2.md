---
type: qod
publish: true
course:
  - "Mathematics 30-1"
  - "Mathematics 30-2"
topic: "Permutations"
show_solution: true
---

## Question

A path begins at

$$
R=(0,0),
$$

must pass through

$$
O=(2,1),
$$

and ends at

$$
G=(5,3).
$$

At every step, you may move only one unit **right** or one unit **up**.

Using permutations, determine the number of distinct pathways from $R$ to $G$ that pass through $O$.

## Solution

> [!example]- Show solution
>
> From $R=(0,0)$ to $O=(2,1)$, a path requires:
>
> - $2$ right moves;
> - $1$ up move.
>
> That is $3$ moves total, so the number of distinct arrangements is
>
> $$
> \frac{3!}{2!1!}=3.
> $$
>
> From $O=(2,1)$ to $G=(5,3)$, a path requires:
>
> - $3$ right moves;
> - $2$ up moves.
>
> Thus,
>
> $$
> \frac{5!}{3!2!}=10.
> $$
>
> Every valid first section can be paired with every valid second section, so
>
> $$
> 3(10)=\boxed{30}.
> $$

## Review First

- [[Factorial Notation 1]]

## Explore Also

- [[Permutations 1]]
- [[Permutations 3]]

## Build Toward
