---
type: qod
publish: true
course:
  - Mathematics 30-2
  - Mathematics 30-1
topic: "Applications of Exponential Functions"
learning_order: 3208
show_solution: true
source: "Original equivalent of CHC Mathematics 30-2 Exponential Functions, Topic 2 Practice"
source_question: 8
domain: "Exponential Functions"
curriculum_alignment: "30-2 Relations and Functions SO5.3 and SO6.5–6.6, growth/decay applications"
curriculum_review_required: false
calculator: allowed
diploma_eligible: true
diploma_ready: false
diploma_screening: strong-candidate-2026-11-22
tags:
  - qod
  - diploma-preparation
qod_id: "QOD-639646CA08F3A4C59567F481"
title: "Depreciation and Loan Repayment 1"
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
used_in: []
---

A driver buys a used SUV and finances 23000 dollars of the purchase price. The SUV loses value over time while the driver gradually repays the loan; these are two different financial processes. Its estimated resale value after $t$ years is $V(t)=28000(0.82)^t$. The loan charges $0.8\%$ interest per month, and the driver pays 390 dollars each month. The lender gives the following standard equation for the estimated number of monthly payments:

$$23000=390\left(\frac{1-(1.008)^{-n}}{0.008}\right),$$

where $n$ is the number of monthly payments. Assume the model permits a fractional final payment for estimation.

A. State the original vehicle value and the annual depreciation rate.

B. Solve for $n$.

C. Estimate the total interest paid.

D. Using the unrounded value of $n$, estimate the vehicle's resale value when the loan is paid off. Explain why years and months must not be mixed.

> [!info]- Hint 1
> In part B, consider graphing each side of the equation separately. Will a standard graphing window accommodate the quantities involved? For the remaining parts, distinguish the purchase price from the amount borrowed, and pay attention to the units of time in each model.

## Solution

> [!example]- Show solution
>
> ### A. Original vehicle value and annual depreciation rate
>
> The original value is the value when $t=0$.
>
> $$
> V(0)=28000(0.82)^0=28000
> $$
>
> The original vehicle value is **28000 dollars**.
>
> The base $0.82$ means that the vehicle retains $82\%$ of its value each year. The percentage lost each year is
>
> $$
> 100\%-82\%=18\%
> $$
>
> Therefore, the annual depreciation rate is **$18\%$**.
>
> ### B. Number of monthly payments
>
> We need to find the value of $n$ that makes the two sides of the loan equation equal.
>
> **Method 1 — Graphing calculator (without logarithms)**
>
> Graph the two sides of the equation separately. Their intersection occurs when the calculated loan amount equals the original amount borrowed, 23000 dollars.
>
> 1. On a TI-83 or TI-84, press `Y=`. Enter the following expressions, using `X` to represent $n$:
>
>    - `Y1=23000`
>    - `Y2=390*((1-(1.008)^(-X))/0.008)`
>
> 2. Press `WINDOW` and enter these settings:
>
>    - `Xmin=0`, `Xmax=120`, `Xscl=20`
>    - `Ymin=0`, `Ymax=40000`, `Yscl=5000`
>
>    The horizontal axis represents the number of monthly payments, and the vertical axis represents the loan amount in dollars. The standard graphing window is too small to show the intersection.
>
> 3. Press `GRAPH`. You should see a horizontal line and an increasing curve.
> 4. Press `2nd` then `TRACE` (CALC), and select `5:intersect`.
> 5. Confirm the first curve and the second curve by pressing `ENTER` for each. Move the cursor near the intersection if necessary and press `ENTER` to confirm the guess.
>
> The intersection is approximately
>
> $$
> (80.10253276,\ 23000)
> $$
>
> The $x$-coordinate gives the number of monthly payments, not the loan amount.
>
> $$
> \boxed{n\approx80.10\text{ months}}
> $$
>
> Keep the full calculator value for parts C and D. The model allows a fractional final payment for estimation.
>
> **Method 2 — Algebraically, using logarithms**
>
> Begin with the equation provided:
>
> $$
> 23000=390\left(\frac{1-(1.008)^{-n}}{0.008}\right)
> $$
>
> Divide both sides by $390$, then multiply by $0.008$:
>
> $$
> \frac{23000(0.008)}{390}=1-(1.008)^{-n}
> $$
>
> Isolate the exponential expression:
>
> $$
> (1.008)^{-n}=1-\frac{23000(0.008)}{390}
> $$
>
> Take the natural logarithm of both sides and apply the power law:
>
> $$
> -n\ln(1.008)=\ln\left(1-\frac{23000(0.008)}{390}\right)
> $$
>
> Divide by $-\ln(1.008)$:
>
> $$
> n=\frac{-\ln\left(1-\frac{23000(0.008)}{390}\right)}{\ln(1.008)}
> $$
>
> $$
> n\approx80.10253276
> $$
>
> $$
> \boxed{n\approx80.10\text{ months}}
> $$
>
> Both methods give the same result.
>
> ### C. Estimated total interest paid
>
> Total interest is the total amount repaid minus the original amount borrowed. Use 23000 dollars, not the original vehicle value of 28000 dollars.
>
> $$
> I=390n-23000
> $$
>
> Using the unrounded value of $n$ from part B:
>
> $$
> I\approx\boxed{8239.99\text{ dollars}}
> $$
>
> This is an estimate under the stated fractional-payment assumption.
>
> ### D. Estimated resale value when the loan is paid off
>
> The loan equation measures time in months, but the depreciation model measures time in years. Convert the unrounded value of $n$ to years before substituting into the depreciation model.
>
> $$
> t=\frac{n}{12}\approx6.67521106\text{ years}
> $$
>
> $$
> V(t)=28000(0.82)^{n/12}
> $$
>
> Using the unrounded value of $n$:
>
> $$
> V(t)\approx\boxed{7444.70\text{ dollars}}
> $$
>
> Substituting the number of months directly into the depreciation model would incorrectly treat each month as a year, greatly overstating the loss in value.
>
> **Reasonableness check:** The loan takes about six years and eight months to repay. The total interest is positive, and the vehicle's estimated resale value is less than its original value. The loan and depreciation are separate financial processes.

> [!abstract] Review First
> - [[Math/Exponential Functions/Exponential Growth 1|Exponential Growth 1]]
> - [[Math/Exponential Functions/Exponential Decay 1|Exponential Decay 1]]
> - [[Math/Exponential Functions/Exponential Growth - Finance|Exponential Growth - Finance]]
> - [[Math/Exponential Functions/Depreciation - Laptop Value 1|Depreciation - Laptop Value 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Exponential Functions/Compound Interest - Comparing Frequencies 1|Compound Interest - Comparing Frequencies 1]]
> - [[Math/Exponential Functions/Doubling Time - Bacteria 1|Doubling Time - Bacteria 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Exponential Functions/Exponential Regression - Used Camera Prices 1|Exponential Regression - Used Camera Prices 1]]
> - [[Math/Logarithmic Functions/Logarithm Laws 1|Logarithm Laws 1]]
