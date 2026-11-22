---
type: qod
publish: true
course:
  - Mathematics 30-2
  - Mathematics 30-1
topic: "Solving Exponential Equations"
learning_order: 3307
show_solution: false
source: "Original equivalent of CHC Mathematics 30-2 Exponential Functions, Topic 3 Practice"
source_question: 7
domain: "Exponential Functions"
curriculum_alignment: "30-2 Relations and Functions SO5.1–5.3, exponential equations"
curriculum_review_required: false
calculator: required
diploma_eligible: true
diploma_ready: false
diploma_screening: strong-candidate-2026-11-22
tags:
  - qod
  - diploma-preparation
---

Two partners take out a \$165,000 loan to purchase equipment for a small business. They plan to make payments of \$1000 each month. Their lender has provided a simplified model for estimating the repayment period: $(1.0038)^n=2.6813$, where $n$ is the number of monthly payments. Use this supplied equation rather than constructing a new loan model; assume its result can be used to estimate total interest.

A. Solve for $n$.

B. Express in years, nearest whole year.

C. Estimate total interest with the model time.

> [!abstract] Review First
> - [[Math/Exponential Functions/Exponential Equations 6|Exponential Equations 6]]
> - [[Math/Exponential Functions/Exponential Growth - Finance|Exponential Growth - Finance]]
> - [[Math/Exponential Functions/Compound Interest - Comparing Frequencies 1|Compound Interest - Comparing Frequencies 1]]
> - [[Math/Exponential Functions/Compound Interest - Loan Table 1|Compound Interest - Loan Table 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Exponential Functions/Depreciation - Camera Value 1|Depreciation - Camera Value 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Exponential Functions/Exponential Regression - Apartment Rent 1|Exponential Regression - Apartment Rent 1]]
> - [[Math/Logarithmic Functions/Logarithm Laws 2|Logarithm Laws 2]]

## Solution

> [!example]- Show solution
>
> **Step 1 — Identify the unknown.** In $(1.0038)^n=2.6813$, $n$ represents the number of **monthly payments**, not years.
> 
> **Step 2 — Take logarithms.**
> 
> $$n\ln(1.0038)=\ln(2.6813),$$
> $$n=\frac{\ln(2.6813)}{\ln(1.0038)}\approx\boxed{260.0\text{ months}}.$$
> 
> **Step 3 — Convert months to years.**
> 
> $$\frac{260.0}{12}\approx21.7\text{ years}\approx\boxed{22\text{ years}}.$$
> 
> **Step 4 — Estimate interest paid using monthly payments.**
> 
> $$I\approx(\$1000)(260.0)-\$165000\approx\boxed{\$95000}.$$
> 
> **Why subtract the principal?** Payments cover both the original borrowed amount and interest; subtracting the original amount isolates the interest. This is an estimate because the equation and repayment duration are rounded and a real loan may have a different final payment.
