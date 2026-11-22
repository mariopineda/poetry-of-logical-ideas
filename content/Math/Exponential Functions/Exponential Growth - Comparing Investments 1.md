---
type: qod
publish: true
course:
  - Mathematics 30-2
  - Mathematics 30-1
topic: "Applications of Exponential Functions"
learning_order: 3201
show_solution: false
source: "Original equivalent of CHC Mathematics 30-2 Exponential Functions, Topic 2 Practice"
source_question: 1
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
---

Morgan is comparing two long-term savings accounts before deciding where to keep money for a future purchase. Both accounts earn interest once per year, but they begin with different deposits and offer different annual rates. After $t$ years, their balances are modelled by $A(t)=1800(1.06)^t$ and $B(t)=2400(1.04)^t$, respectively, with amounts in dollars. Determine:

A. each principal

B. each annual rate

C. both balances after 5 years

D. the time to reach $3600$, to the nearest tenth of a year.

> [!abstract] Review First
> - [[Math/Exponential Functions/Exponential Growth 1|Exponential Growth 1]]
> - [[Math/Exponential Functions/Exponential Growth - Finance|Exponential Growth - Finance]]
> - [[Math/Exponential Functions/Exponential Decay 2|Exponential Decay 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Exponential Functions/Depreciation - Laptop Value 1|Depreciation - Laptop Value 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Exponential Functions/Compound Interest - Comparing Frequencies 1|Compound Interest - Comparing Frequencies 1]]
> - [[Math/Sequences and Series/Infinite Geometric Sequences 3|Infinite Geometric Sequences 3]]

## Solution

> [!example]- Show solution
>
> **Step 1 — Interpret $A(t)=a(1+r)^t$.** The initial amount is $a$, and the annual rate is $r=b-1$.
> 
> - Investment A: principal $\$1800$ and annual growth $1.06-1=6\%$.
> - Investment B: principal $\$2400$ and annual growth $1.04-1=4\%$.
> 
> **Step 2 — Find both five-year balances.** Substitute $t=5$ into each function:
> 
> $$A(5)=1800(1.06)^5\approx\$2\,408.81,$$
> $$B(5)=2400(1.04)^5\approx\$2\,919.97.$$
> 
> **Step 3 — Solve each time-to-target equation.** Set the balance equal to $\$3600$, divide by the principal, and use logarithms to bring down the exponent:
> 
> $$1800(1.06)^t=3600\implies (1.06)^t=2\implies t=\frac{\ln2}{\ln1.06}\approx11.9\text{ years}.$$
> $$2400(1.04)^t=3600\implies (1.04)^t=1.5\implies t=\frac{\ln1.5}{\ln1.04}\approx10.3\text{ years}.$$
> 
> **Interpretation:** Investment B reaches $\$3600$ first because it begins with more money, even though A grows faster as a percentage.
