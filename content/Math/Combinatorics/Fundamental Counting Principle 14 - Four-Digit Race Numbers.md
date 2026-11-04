---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: Fundamental Counting Principle
show_solution: true
---

A running event assigns **four-digit bib numbers**, from $1000$ through $9999$ inclusive. The digits may repeat.

The organizers want to reserve only bib numbers that are **not divisible by $2$ or $5$**.

How many bib numbers meet this requirement? Explain the restrictions on the first and last digits.

## Solution

> [!example]- Show solution
>
> A number is divisible by $2$ when its **last digit is even**, and divisible by $5$ when its last digit is $0$ or $5$.
>
> Therefore, to be divisible by **neither** $2$ nor $5$, the last digit must be one of
>
> $$
> 1,\ 3,\ 7,\ 9,
> $$
>
> giving $4$ choices.
>
> For a four-digit number, the first digit cannot be $0$, so there are $9$ choices ($1$–$9$). Each middle digit may be $0$–$9$, giving $10$ choices per position.
>
> $$
> \begin{aligned}
> N&=9\times10\times10\times4\\
> &=\boxed{3600}.
> \end{aligned}
> $$
>
> **3600 bib numbers** are divisible by neither $2$ nor $5$.

> [!abstract] Review First
> - [[Math/Combinatorics/Fundamental Counting Principle 13 - Festival Pass Identifiers|Fundamental Counting Principle 13 - Festival Pass Identifiers]]
> - [[Math/Combinatorics/Fundamental Counting Principle with Restrictions 2|Fundamental Counting Principle with Restrictions 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Counting Odd Natural Numbers 1|Counting Odd Natural Numbers 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Factorial Notation - Applications 11 - Five-Digit Number Error|Factorial Notation - Applications 11 - Five-Digit Number Error]]
