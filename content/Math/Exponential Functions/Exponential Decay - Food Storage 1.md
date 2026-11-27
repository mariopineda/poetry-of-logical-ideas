---
type: qod
publish: true
course:
  - Mathematics 30-2
  - Mathematics 30-1
topic: "Solving Exponential Equations"
learning_order: 3305
show_solution: false
source: "Original equivalent of CHC Mathematics 30-2 Exponential Functions, Topic 3 Practice"
source_question: 5
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
qod_id: "QOD-DF642854CA281B0C7743A766"
title: "Exponential Decay - Food Storage 1"
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

A food-science team investigates how storage temperature affects the usable life of a particular prepared food under controlled conditions. Their simplified experimental model gives the estimated shelf life $H$, in hours, at storage temperature $T$, in degrees Celsius: $H(T)=150(1/2)^{T/40}$. This is a mathematical model for the investigation, not a general food-safety guideline.

A. Calculate shelf life at $T=6$ to the nearest tenth of an hour.

B. Determine $T$ for a shelf life of 5 days (120 hours), to the nearest tenth of a degree.

> [!abstract] Review First
> - [[Math/Exponential Functions/Exponential Equations 6|Exponential Equations 6]]
> - [[Math/Exponential Functions/Exponential Equations 4|Exponential Equations 4]]
> - [[Math/Exponential Functions/Exponential Decay 1|Exponential Decay 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Exponential Functions/Doubling Time - Bacteria 2|Doubling Time - Bacteria 2]]
> - [[Math/Exponential Functions/Depreciation - Camera Value 1|Depreciation - Camera Value 1]]
> - [[Math/Logarithmic Functions/Logarithm Laws 2|Logarithm Laws 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Exponential Functions/Exponential Regression - Substance Decay 1|Exponential Regression - Substance Decay 1]]

## Solution

> [!example]- Show solution
>
> **Step 1 — Interpret the model.** $H(T)=150(1/2)^{T/40}$ predicts storage life, in hours, as a function of temperature $T$ (°C). Because $0<1/2<1$, predicted life gets shorter as temperature increases.
> 
> **A. Substitute $T=6$.**
> 
> $$H(6)=150\left(\frac12\right)^{6/40}\approx\boxed{135.2\text{ hours}}.$$
> 
> **B. Convert days to hours first.** Five days is $5(24)=120$ hours. Set the model equal to $120$:
> 
> $$120=150\left(\frac12\right)^{T/40}\implies0.8=\left(\frac12\right)^{T/40}.$$
> 
> Take logarithms:
> 
> $$\ln0.8=\frac{T}{40}\ln0.5\implies T=40\frac{\ln0.8}{\ln0.5}\approx\boxed{12.9^\circ\mathrm C}.$$
> 
> **Check:** Since $120<150$, a positive temperature is reasonable for this particular model. It is an idealized mathematical example, not a food-safety recommendation.
