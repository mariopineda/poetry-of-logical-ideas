---
type: qod
publish: true
course:
  - Mathematics 30-2
  - Mathematics 30-1
topic: Fundamental Counting Principle
show_solution: true
qod_id: "QOD-4A05F7A7A5AF66D7BBBC0A4F"
title: "Fundamental Counting Principle 10 - Museum Collection Labels"
aliases: []
domain: null
tags: []
learning_order: null
estimated_minutes: null
calculator: null
question_format: null
curriculum_alignment: []
cognitive_level: []
performance_standard: []
diploma_eligible: null
diploma_ready: null
source: null
source_kind: null
source_question: null
source_topic: null
source_format: null
source_equivalence: null
source_percent_correct: null
source_mean_score: null
assessment_metadata_origin: null
review_status: null
review_date: null
curriculum_review_required: null
used_in: []
---

A science museum labels its collection boxes using one of four fixed department prefixes:

$$
\mathrm{AS},\quad\mathrm{BI},\quad\mathrm{CH},\quad\mathrm{GE}.
$$

Each prefix is followed by **three digits**, with digits chosen from $0$ to $9$. Repeated digits and leading zeroes in the three-digit suffix are allowed; for example, `BI-007` is valid.

How many **different collection labels** can the museum create?

## Solution

> [!example]- Show solution
>
> There are $4$ choices for the department prefix. Because leading zeroes are allowed, each of the three following positions has $10$ choices.
>
> The Fundamental Counting Principle gives
>
> $$
> \begin{aligned}
> N&=4\times10\times10\times10\\
> &=4\times10^3\\
> &=\boxed{4000}.
> \end{aligned}
> $$
>
> **4000 different labels** are possible. The prefix determines the department, but it does not restrict which digits may follow.

> [!abstract] Review First
> - [[Math/Combinatorics/Fundamental Counting Principle 9 - Archive Access Codes|Fundamental Counting Principle 9 - Archive Access Codes]]
> - [[Math/Combinatorics/Fundamental Counting Principle with Restrictions 2|Fundamental Counting Principle with Restrictions 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Fundamental Counting Principle with Restrictions 1|Fundamental Counting Principle with Restrictions 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Fundamental Counting Principle 13 - Festival Pass Identifiers|Fundamental Counting Principle 13 - Festival Pass Identifiers]]
