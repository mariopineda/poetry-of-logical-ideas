---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: "Set Theory"
show_solution: true
prerequisites:
  - "Set Theory - Venn - Practice 10 - A Flawed Science Course Survey"
related:
  - "Set Theory - Venn - Practice 10 - A Flawed Science Course Survey"
---

Sixty students are surveyed about **online tutoring (O)** and **in-person tutoring (I)**.

- 38 use online tutoring;
- 24 use in-person tutoring;
- 15 use neither.

### A. Determine how many students **do not use in-person tutoring**.
### B. A student calculates $38-17=21$ and says 21 is the answer to part A, where 17 is the number who use both. Explain why this reasoning is incorrect. Use a Venn diagram to justify your answer.
![Question diagram](../../Assets/Counting%20-%20SV-11%20-%20Question.png)

## Solution

> [!example]- Show solution
>
> The number using at least one service is $60-15=45$. Thus
>
> $$n(O\cap I)=38+24-45=\boxed{17}.$$
>
> The exclusive regions are online only $38-17=21$, in-person only $24-17=7$, and neither 15.
>
> ![Solution diagram](../../Assets/Counting%20-%20SV-11%20-%20Solution.png)
>
> ### A.
>
> Students who **do not use in-person tutoring** include online-only students **and** those who use neither:
>
> $$n(I')=60-24=21+15=\boxed{36}.$$
>
> ### B.
>
> The calculation $38-17=21$ counts only $O\setminus I$ and **omits the 15 students using neither**. Therefore it is not $n(I')$.

> [!abstract] Review First
> - [[Math/Set Theory/Set Theory - Venn - Practice 10 - A Flawed Science Course Survey|Set Theory - Venn - Practice 10 - A Flawed Science Course Survey]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Set Theory/Set Theory - Venn - Practice 10 - A Flawed Science Course Survey|Set Theory - Venn - Practice 10 - A Flawed Science Course Survey]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
