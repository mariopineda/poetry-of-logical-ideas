---
type: qod
publish: true
course:
  - Mathematics 30-2
  - Mathematics 30-1
  - Mathematics 20-3
topic: Applications of Exponential Functions
learning_order: 3204
show_solution: true
source: Original equivalent of CHC Mathematics 30-2 Exponential Functions, Topic 2 Practice
source_question: 4
domain: Exponential Functions
curriculum_alignment: 30-2 Relations and Functions SO5.3 and SO6.5–6.6, growth/decay applications
curriculum_review_required: false
calculator: allowed
diploma_eligible: true
diploma_ready: false
diploma_screening: strong-candidate-2026-11-22
tags:
  - qod
  - diploma-preparation
qod_id: "QOD-451329C4D37C98B2AEF56215"
title: "Compound Interest - Savings Table 1"
aliases: []
estimated_minutes: null
question_format: null
cognitive_level: []
performance_standard: []
source_kind: null
source_topic: null
source_format: null
source_equivalence: null
source_percent_correct: null
source_mean_score: null
assessment_metadata_origin: null
review_status: null
review_date: null
---

A recent graduate puts a lump sum into a savings account to build an emergency fund. No additional deposits or withdrawals are made, and interest is compounded once per year. The table shows the year $x$ since opening the account and the corresponding balance $y$, in dollars. Use the pattern in the balances to determine how the investment grows.

| $x$ | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| $y$ | 1800 | 1890 | 1984.5 | 2083.73 | 2187.91 |

A. Determine the exponential rule without regression.

B. Find the annual rate.

C. Calculate the balance after 10 years.

D. Determine total interest earned.

## Solution

> [!example]- Show solution
>
> **Step 1 — Identify the starting balance.** At $t=0$, the table shows $A(0)=1800$, so $a=1800$.
> 
> **Step 2 — Find a repeated ratio.** From the first two values,
> 
> $$b=\frac{1890}{1800}=1.05.$$
> 
> Later ratios are approximately $1.05$; small differences are caused by rounding the reported balances.
> 
> **Step 3 — Model the account and identify the rate.**
> 
> $$A(t)=1800(1.05)^t,\qquad r=1.05-1=\boxed{5\%\text{ per year}}.$$
> 
> **Step 4 — Find the balance and interest after 10 years.**
> 
> $$A(10)=1800(1.05)^{10}\approx\$2932.01.$$
> $$I=2932.01-1800=\boxed{\$1132.01}.$$
> 
> **Why no regression is needed:** A nearly constant successive ratio already determines the exponential rule; regression would be needed when measurements contain noticeable variation.

> [!abstract] Review First
> - [[Math/Exponential Functions/Exponential Growth 1|Exponential Growth 1]]
> - [[Math/Exponential Functions/Exponential Growth - Finance|Exponential Growth - Finance]]
> - [[Math/Exponential Functions/Common Ratio 1|Common Ratio 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Exponential Functions/Compound Interest - Loan Table 1|Compound Interest - Loan Table 1]]
> - [[Math/Exponential Functions/Compound Interest - Annual Savings 1|Compound Interest - Annual Savings 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Exponential Functions/Compound Interest - Annual Savings 1|Compound Interest - Annual Savings 1]]
> - [[Math/Sequences and Series/Infinite Geometric Sequences 2|Infinite Geometric Sequences 2]]
