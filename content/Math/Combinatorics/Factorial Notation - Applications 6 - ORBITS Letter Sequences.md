---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: Factorial Notation
show_solution: true
---

A puzzle designer cuts out the **six individual letters** in the word **ORBITS** and arranges them in a row to create a puzzle sequence. The result does **not** need to be an English word.

### A.

How many different letter sequences can be produced if **each letter is used exactly once**? Write your answer in factorial notation and evaluate it.

### B.

Explain why your calculation does not use the same number of choices at every position.

## Solution

> [!example]- Show solution
>
> ### A.
>
> The six letters \(O,R,B,I,T,S\) are all different. There are \(6\) choices for the first position, then \(5\), then \(4\), and so on:
>
> $$
> 6\cdot5\cdot4\cdot3\cdot2\cdot1
> =6!
> =\boxed{720}.
> $$
>
> Therefore, **720 distinct sequences** are possible.
>
> ### B.
>
> Letters **cannot repeat**. Once a letter has been placed, it is no longer available, so the number of choices decreases by one after each position. Using \(6^6\) would incorrectly allow the same letter to be chosen repeatedly.

> [!abstract] Review First
> - [[Math/Combinatorics/Factorial Notation - Applications 4 - Science Fair Flags|Factorial Notation - Applications 4 - Science Fair Flags]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Fundamental Counting Principle 9 - Archive Access Codes|Fundamental Counting Principle 9 - Archive Access Codes]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Factorial Notation - Applications 11 - Five-Digit Number Error|Factorial Notation - Applications 11 - Five-Digit Number Error]]
