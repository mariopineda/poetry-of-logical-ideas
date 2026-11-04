---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: Fundamental Counting Principle
show_solution: true
---

An interactive light sculpture contains **six independently controlled lights** arranged in a row. Each light can be set to one of four states:

**red, blue, green, or off**.

A lighting preset records the state of **every light**. For example, a preset with all six lights off is valid.

How many distinct lighting presets can the artist create? Write your answer using an exponent and as a whole number.

## Solution

> [!example]- Show solution
>
> Each light has $4$ possible states, and setting one light does not change the options for another. There are six independent decisions.
>
> $$
> \begin{aligned}
> N&=4\times4\times4\times4\times4\times4\\
> &=4^6\\
> &=\boxed{4096}.
> \end{aligned}
> $$
>
> The sculpture therefore has **4096 possible presets**, including the all-off arrangement.

> [!abstract] Review First
> - [[Math/Combinatorics/Fundamental Counting Principle 8 - Wildlife Survey Kits|Fundamental Counting Principle 8 - Wildlife Survey Kits]]
> - [[Math/Combinatorics/Fundamental Counting Principle 6|Fundamental Counting Principle 6]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Fundamental Counting Principle 5|Fundamental Counting Principle 5]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Fundamental Counting Principle 15 - Digital Quilt Designs|Fundamental Counting Principle 15 - Digital Quilt Designs]]
