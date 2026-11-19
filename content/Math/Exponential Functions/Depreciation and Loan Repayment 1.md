---
type: qod
publish: true
course:
  - Mathematics 30-2
  - Mathematics 30-1
topic: "Applications of Exponential Functions"
learning_order: 3208
show_solution: false
source: "Original equivalent of CHC Mathematics 30-2 Exponential Functions, Topic 2 Practice"
source_question: 8
domain: "Exponential Functions"
curriculum_alignment: "30-2 Relations and Functions SO5.3 and SO6.5–6.6, growth/decay applications"
curriculum_review_required: false
calculator: allowed
---

# Depreciation and Loan Repayment 1

A vehicle is purchased for $\$28\,000$. Its value after $t$ years is modelled by $V(t)=28000(0.82)^t$. The buyer finances $\$23\,000$ at a monthly interest rate of $0.8\%$ and makes payments of $\$390$ per month. The standard loan equation is

$$23000=390\left(\frac{1-(1.008)^{-n}}{0.008}\right),$$

where $n$ is the number of monthly payments. Assume the model permits a fractional final payment for estimation.

a) State the original vehicle value and the annual depreciation rate. b) Solve for $n$. c) Estimate the total interest paid. d) Using the unrounded value of $n$, estimate the vehicle's resale value when the loan is paid off. Explain why years and months must not be mixed.

> [!abstract] Review First
> - [[Math/Exponential Functions/Exponential Growth 1|Exponential Growth 1]]
> - [[Math/Exponential Functions/Exponential Decay 1|Exponential Decay 1]]
> - [[Math/Exponential Functions/Exponential Growth - Finance|Exponential Growth - Finance]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Exponential Functions/Compound Interest - Comparing Frequencies 1|Compound Interest - Comparing Frequencies 1]]
> - [[Math/Exponential Functions/Doubling Time - Bacteria 1|Doubling Time - Bacteria 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._

## Solution

> [!example]- Show solution
>
> **Step 1 — Read the depreciation model.** The coefficient $28\,000$ is the purchase value. The multiplier $0.82$ means that $82\%$ remains each year, so the annual depreciation is $100\%-82\%=18\%$.
> 
> **Step 2 — Solve the loan equation.** Start with the present-value formula given in the question:
> 
> $$23000=390\left(\frac{1-(1.008)^{-n}}{0.008}\right).$$
> 
> Multiply by $0.008/390$ and rearrange:
> 
> $$\frac{23000(0.008)}{390}=1-(1.008)^{-n},$$
> $$ (1.008)^{-n}=1-\frac{23000(0.008)}{390}.$$
> 
> Take natural logarithms of both sides:
> 
> $$-n\ln(1.008)=\ln\left(1-\frac{23000(0.008)}{390}\right),$$
> $$n=\frac{-\ln\left(1-23000(0.008)/390\right)}{\ln(1.008)}\approx\boxed{80.10\text{ months}}.$$
> 
> **Step 3 — Estimate the total interest.** The model treats payments continuously for the fractional final month, so the estimate is:
> 
> $$I=390(80.1025)-23000\approx\boxed{\$8,239.99}.$$
> 
> **Step 4 — Convert months to years before calculating the vehicle value.** The depreciation formula uses years, but the loan uses months:
> 
> $$t=\frac{n}{12}\approx 6.6752\text{ years},$$
> $$V(t)=28000(0.82)^{6.6752}\approx\boxed{\$7,444.70}.$$
> 
> **Reasonableness:** Both financing interest and depreciation reduce the financial value of the purchase, but they are separate models. An actual loan uses a final adjusted payment, so the interest found here is an approximation.
