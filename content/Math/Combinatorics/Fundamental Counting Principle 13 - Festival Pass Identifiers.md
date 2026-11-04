---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: Fundamental Counting Principle
show_solution: true
---

An outdoor music festival issues entry passes with an identifier consisting of **two uppercase letters followed by four digits**.

- The letters $I$, $O$, and $Q$ are not permitted, to avoid confusion when codes are scanned.
- All other uppercase English letters are allowed.
- Digits $0$ through $9$ are allowed, including leading zeroes in the numeric part.
- Letters and digits **may repeat**.

### A.

How many distinct identifiers are possible under this system?

### B.

The festival adds a **fifth digit**, leaving all other rules unchanged. How many **additional** identifiers does this create compared with the original system?

## Solution

> [!example]- Show solution
>
> ### A. Original identifiers
>
> Of the $26$ letters, $3$ are excluded, leaving $23$ choices for **each** letter position. Each of the four digit positions has $10$ choices.
>
> $$
> \begin{aligned}
> N_4&=23\times23\times10^4\\
> &=529\times10\,000\\
> &=\boxed{5\,290\,000}.
> \end{aligned}
> $$
>
> ### B. One extra digit
>
> With five digit positions,
>
> $$
> \begin{aligned}
> N_5&=23^2\times10^5\\
> &=52\,900\,000.
> \end{aligned}
> $$
>
> Subtract the original number because the question asks for **additional**, not total, identifiers:
>
> $$
> \begin{aligned}
> N_5-N_4&=52\,900\,000-5\,290\,000\\
> &=\boxed{47\,610\,000}.
> \end{aligned}
> $$
>
> The new format provides **47 610 000 additional identifiers**.

> [!abstract] Review First
> - [[Math/Combinatorics/Fundamental Counting Principle 9 - Archive Access Codes|Fundamental Counting Principle 9 - Archive Access Codes]]
> - [[Math/Combinatorics/Fundamental Counting Principle 10 - Museum Collection Labels|Fundamental Counting Principle 10 - Museum Collection Labels]]
> - [[Math/Combinatorics/Fundamental Counting Principle with Restrictions 1|Fundamental Counting Principle with Restrictions 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Counting Odd Natural Numbers 1|Counting Odd Natural Numbers 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Fundamental Counting Principle 14 - Four-Digit Race Numbers|Fundamental Counting Principle 14 - Four-Digit Race Numbers]]
