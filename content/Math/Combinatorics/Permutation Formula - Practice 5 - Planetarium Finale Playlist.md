---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: "Permutations"
show_solution: true
prerequisites:
  - "Permutation Formula - Practice 3 - Festival Volunteer Roles"
related:
  - "Permutation Formula - Practice 6 - Arctic Research Flags"
---

A planetarium has **six different original soundtracks**. Its finale consists of a sequence of **at least four** of these tracks, with no track repeated.

How many different finales can be designed? Show separate cases by sequence length before combining them.

## Solution

> [!example]- Show solution
>
> A finale can contain exactly 4, 5, or 6 tracks. These cases cannot occur at the same time, so we **add** their counts:
>
> $$\begin{aligned}
> \text{4 tracks: }&{}_6P_4=360,\\
> \text{5 tracks: }&{}_6P_5=720,\\
> \text{6 tracks: }&{}_6P_6=720.
> \end{aligned}$$
>
> Therefore,
>
> $$\boxed{360+720+720=1800}.$$

> [!abstract] Review First
> - [[Math/Combinatorics/Permutation Formula - Practice 3 - Festival Volunteer Roles|Permutation Formula - Practice 3 - Festival Volunteer Roles]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Permutation Formula - Practice 6 - Arctic Research Flags|Permutation Formula - Practice 6 - Arctic Research Flags]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Permutation Formula - Practice 6 - Arctic Research Flags|Permutation Formula - Practice 6 - Arctic Research Flags]]
