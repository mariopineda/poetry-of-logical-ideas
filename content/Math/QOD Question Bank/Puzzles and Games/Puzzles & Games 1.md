---
type: qod
publish: true
course:
  - "Mathematics 30-2"
  - "Mathematics 30-3"
topic: "Logical Reasoning"
show_solution: true
---

## Question

You have $9$ identical-looking coins. Exactly one coin is counterfeit and is known to be **lighter** than the other eight.

Using a balance scale and no standard weights, explain how to guarantee finding the counterfeit coin in **at most two weighings**.

## Solution

> [!example]- Show solution
>
> Divide the $9$ coins into three groups of $3$.
>
> ### First weighing
>
> Weigh group A against group B.
>
> - If they balance, the counterfeit coin is in group C.
> - If they do not balance, the counterfeit coin is in the lighter of groups A and B.
>
> After the first weighing, exactly $3$ possible coins remain.
>
> ### Second weighing
>
> Take two of those three coins and weigh one against the other.
>
> - If they balance, the third coin is counterfeit.
> - If one side is lighter, the coin on that side is counterfeit.
>
> Therefore the counterfeit coin can always be identified in
>
> $$
> \boxed{2\text{ weighings}}.
> $$

## Review First


## Explore Also

- [[Logical Puzzle 2]]
- [[Set Theory 1]]

## Build Toward

- [[Set Theory 2]]
- [[Set Theory 3]]
- [[Set Theory 1]]
