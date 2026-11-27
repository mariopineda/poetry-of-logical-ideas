---
type: qod
publish: true
course:
  - Mathematics 30-2
  - Mathematics 30-1
topic: "Applications of Exponential Functions"
learning_order: 3209
show_solution: false
source: "Original equivalent of CHC Mathematics 30-2 Exponential Functions, Topic 2 Practice"
source_question: 9
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
qod_id: "QOD-853F48EA746E7846964271EF"
title: "Doubling Time - Bacteria 1"
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

In a school science lab, students place a bacterial culture in conditions under which its population is expected to double every $35$ minutes. The culture begins with 75,000 organisms. The model $N(t)=75000(2)^{t/35}$ estimates the number of organisms after $t$ minutes. Assuming the growth pattern continues, calculate how long it takes the population to reach 450,000, rounded to the nearest minute.

> [!abstract] Review First
> - [[Math/Exponential Functions/Exponential Growth 2|Exponential Growth 2]]
> - [[Math/Exponential Functions/Exponential Equations 3|Exponential Equations 3]]
> - [[Math/Logarithmic Functions/Evaluating Logarithms 1|Evaluating Logarithms 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Exponential Functions/Depreciation and Loan Repayment 1|Depreciation and Loan Repayment 1]]
> - [[Math/Exponential Functions/Half-Life - Carbon Dating 1|Half-Life - Carbon Dating 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Exponential Functions/Exponential Regression - Culture Growth 1|Exponential Regression - Culture Growth 1]]

## Solution

> [!example]- Show solution
>
> **Step 1 — Interpret the doubling-time model.** Every $35$ minutes the population doubles, so after $t$ minutes,
> 
> $$N(t)=75000\cdot2^{t/35}.$$
> 
> **Step 2 — Set the target population.**
> 
> $$450000=75000\cdot2^{t/35}.$$
> 
> Divide both sides by $75000$:
> 
> $$6=2^{t/35}.$$
> 
> **Step 3 — Solve the exponent using logarithms.**
> 
> $$\log6=\frac{t}{35}\log2\implies t=35\frac{\log6}{\log2}\approx90.5\text{ minutes}.$$
> 
> To the nearest whole minute, $\boxed{90\text{ minutes}}$.
> 
> **Check:** After two doubling periods (70 minutes), there are $300\,000$ organisms; after three periods (105 minutes), there are $600\,000$. Therefore reaching $450\,000$ between 70 and 105 minutes makes sense.
