---
type: qod
publish: true
course:
  - Mathematics 30-2
  - Mathematics 30-1
topic: "Applications of Exponential Functions"
learning_order: 3203
show_solution: false
source: "Original equivalent of CHC Mathematics 30-2 Exponential Functions, Topic 2 Practice"
source_question: 3
domain: "Exponential Functions"
curriculum_alignment: "30-2 Relations and Functions SO5.3 and SO6.5–6.6, growth/decay applications"
curriculum_review_required: false
calculator: allowed
---

# Compound Interest - Loan Table 1

A borrower postpones loan repayment for five years. The debt compounds annually according to this table.

| $x$ | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| $y$ | 2160 | 2332.8 | 2519.42 | 2720.98 |

a) Estimate the annual interest rate. b) Determine the original amount borrowed. c) Write the debt model. d) If the balance is paid in full at the end of year 5, calculate total interest paid.

> [!abstract] Review First
> - [[Math/Exponential Functions/Exponential Growth 1|Exponential Growth 1]]
> - [[Math/Exponential Functions/Exponential Growth - Finance|Exponential Growth - Finance]]
> - [[Math/Exponential Functions/Exponential Equations 2|Exponential Equations 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Exponential Functions/Depreciation - Laptop Value 1|Depreciation - Laptop Value 1]]
> - [[Math/Exponential Functions/Compound Interest - Savings Table 1|Compound Interest - Savings Table 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._

## Solution

> [!example]- Show solution
>
> **Step 1 — Find the annual multiplier.** Divide consecutive balances: $2332.80/2160=1.08$. The other ratios are approximately the same because the table is rounded to cents.
> 
> $$r=1.08-1=0.08=\boxed{8\%}.$$
> 
> **Step 2 — Recover the principal.** The year-one amount is $P(1.08)=2160$, so
> 
> $$P=\frac{2160}{1.08}=\boxed{\$2000}.$$
> 
> **Step 3 — Write the model and evaluate year five.**
> 
> $$A(t)=2000(1.08)^t,\qquad A(5)=2000(1.08)^5\approx\$2938.66.$$
> 
> **Step 4 — Find interest paid.** Interest is the final balance **minus** the amount originally borrowed:
> 
> $$I=A(5)-P=2938.66-2000=\boxed{\$938.66}.$$
> 
> **Reasoning:** Each year's interest is added to the amount already owed, which is why the increase gets larger each year.
