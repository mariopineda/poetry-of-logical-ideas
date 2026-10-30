---
type: qod
publish: true
course:
  - "Mathematics 30-1"
  - "Mathematics 30-2"
topic: "Permutations"
show_solution: true
---

Determine the number of arrangements of the letters in the word SAILING if the vowels are together.

> [!info]- Related Topics
>[[]

> [!info]- Related Practice Problems 
>...

## Solution

> [!example]- Show solution
>
> The vowels in **SAILING** are
>
> $$
> A,\ I,\ I.
> $$
>
> Treat the three vowels as one block. Then we arrange the vowel block together with the four consonants:
>
> $$
> 5!
> $$
>
> arrangements.
>
> Within the vowel block, the three vowels can be arranged in
>
> $$
> \frac{3!}{2!}=3
> $$
>
> distinct ways because the two $I$'s are identical.
>
> Therefore,
>
> $$
> 5!\left(\frac{3!}{2!}\right)
> =
> 120(3)
> =
> \boxed{360}.
> $$

> [!abstract] Review First
> - [[Math/Combinatorics/Factorial Notation 1|Factorial Notation 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Permutations 4|Permutations 4]]
> - [[Math/Combinatorics/Permutations with Identical Objects 1|Permutations with Identical Objects 1]]
> - [[Math/Combinatorics/Permutations with Identical Objects 2|Permutations with Identical Objects 2]]
> - [[Math/Combinatorics/Permutations with Identical Objects 3|Permutations with Identical Objects 3]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
