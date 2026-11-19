---
type: qod
publish: true
course:
  - Mathematics 30-2
  - Mathematics 30-1
topic: "Applications of Exponential Functions"
learning_order: 3202
show_solution: false
source: "Original equivalent of CHC Mathematics 30-2 Exponential Functions, Topic 2 Practice"
source_question: 2
domain: "Exponential Functions"
curriculum_alignment: "30-2 Relations and Functions SO5.3 and SO6.5–6.6, growth/decay applications"
curriculum_review_required: false
calculator: allowed
---

A laptop is purchased for \$3200 and loses $16\%$ of its value annually.

### A.

Write $V(t)$ for its value after $t$ years.

### B.

Find when it reaches half its purchase value, to the nearest tenth of a year.

> [!abstract] Review First
> - [[Math/Exponential Functions/Exponential Decay 1|Exponential Decay 1]]
> - [[Math/Exponential Functions/Exponential Decay 2|Exponential Decay 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Exponential Functions/Exponential Growth - Comparing Investments 1|Exponential Growth - Comparing Investments 1]]
> - [[Math/Exponential Functions/Compound Interest - Loan Table 1|Compound Interest - Loan Table 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._

## Solution

> [!example]- Show solution
>
> **Step 1 — Convert the loss to a multiplier.** Losing $16\%$ each year means retaining $100\%-16\%=84\%$, or $0.84$.
> 
> $$V(t)=3200(0.84)^t.$$
> 
> **Step 2 — Translate “half its purchase value” into an equation.** Half of $\$3200$ is $\$1600$:
> 
> $$1600=3200(0.84)^t\implies 0.5=(0.84)^t.$$
> 
> **Step 3 — Solve for $t$.** Take logarithms and use $\log(b^t)=t\log b$:
> 
> $$t=\frac{\ln(0.5)}{\ln(0.84)}\approx\boxed{4.0\text{ years}}.$$
> 
> **Check:** $3200(0.84)^4\approx\$1593$, approximately half the original value. The model approaches zero but never predicts a negative laptop value.
