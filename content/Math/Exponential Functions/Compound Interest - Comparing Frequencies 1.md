---
type: qod
publish: true
course:
  - Mathematics 30-2
  - Mathematics 30-1
  - Mathematics 20-3
topic: "Applications of Exponential Functions"
learning_order: 3207
show_solution: false
source: "Original equivalent of CHC Mathematics 30-2 Exponential Functions, Topic 2 Practice"
source_question: 7
domain: "Exponential Functions"
curriculum_alignment: "30-2 Relations and Functions SO5.3 and SO6.5–6.6, growth/decay applications"
curriculum_review_required: false
calculator: allowed
---

# Compound Interest - Comparing Frequencies 1

A $1600 award can be invested for 2 years in either Plan A at $6.5\%$ compounded annually or Plan B at $6.2\%$ compounded monthly. Which provides the greater final balance, and by how much?

> [!abstract] Review First
> - [[Math/Exponential Functions/Exponential Growth 1|Exponential Growth 1]]
> - [[Math/Exponential Functions/Exponential Growth - Finance|Exponential Growth - Finance]]
> - [[Math/Exponential Functions/Exponential Growth 2|Exponential Growth 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Exponential Functions/Appreciation and Depreciation 1|Appreciation and Depreciation 1]]
> - [[Math/Exponential Functions/Depreciation and Loan Repayment 1|Depreciation and Loan Repayment 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._

## Solution

> [!example]- Show solution
>
> **Step 1 — Use the compound-interest formula.** For an annual nominal interest rate $r$ compounded $m$ times per year over $t$ years,
> 
> $$A=P\left(1+\frac rm\right)^{mt}.$$
> 
> **Step 2 — Evaluate Plan A (annual compounding).** Here $P=1600$, $r=0.065$, $m=1$, $t=2$:
> 
> $$A_A=1600(1.065)^2=\$1814.76.$$
> 
> **Step 3 — Evaluate Plan B (monthly compounding).** Here $r=0.062$, $m=12$, and there are $24$ monthly periods:
> 
> $$A_B=1600\left(1+\frac{0.062}{12}\right)^{24}\approx\$1810.65.$$
> 
> **Step 4 — Compare the final amounts.**
> 
> $$A_A-A_B=1814.76-1810.65=\boxed{\$4.11}.$$
> 
> **Conclusion:** Plan A gives approximately $\$4.11$ more. Monthly compounding is more frequent, but Plan B has a sufficiently lower quoted annual interest rate to make its final balance smaller.
