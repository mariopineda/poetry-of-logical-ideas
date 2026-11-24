---
type: qod
publish: true
course:
  - Mathematics 30-2
  - Mathematics 30-1
topic: Applications of Exponential Functions
learning_order: 3210
show_solution: true
source: Original equivalent of CHC Mathematics 30-2 Exponential Functions, Topic 2 Practice
source_question: 10
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
qod_id: "QOD-DD30C2B875E780AB2BBD0E14"
title: "Half-Life - Carbon Dating 1"
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

During an archaeological survey, researchers recover an old wooden tool from a dry storage site. Laboratory analysis suggests that the wood contains $68\%$ of the carbon-14 that would be expected in a comparable living sample. The half-life of carbon-14 is approximately 5730 years. Using the model $C(t)=100(0.5)^{t/5730}$, where $C(t)$ is the percentage remaining after $t$ years, estimate when the wood stopped exchanging carbon with the environment, to the nearest year.

## Solution

> [!example]- Show solution
>
> **Step 1 — Identify the decay model.** The fraction of carbon-14 remaining after $t$ years is
> 
> $$\frac{C(t)}{100}=\left(\frac12\right)^{t/5730}.$$
> 
> A sample retaining $68\%$ of the original carbon has $C(t)=68$.
> 
> **Step 2 — Substitute and isolate the exponential expression.**
> 
> $$68=100\left(\frac12\right)^{t/5730}\implies 0.68=\left(\frac12\right)^{t/5730}.$$
> 
> **Step 3 — Apply logarithms.**
> 
> $$\ln(0.68)=\frac{t}{5730}\ln(0.5),$$
> $$t=5730\frac{\ln(0.68)}{\ln(0.5)}\approx\boxed{3188\text{ years}}.$$
> 
> **Check:** One half-life is $5730$ years, at which point $50\%$ remains. Since this object retains more than $50\%$, its age should be less than $5730$ years. The answer passes that test.
>
> <!-- QOD-CARBON-DATING-GRAPHING-CALCULATOR-V1 -->
> **Method 2: Graphing calculator (TI-83/TI-84)**
>
> We want to find the time when the percentage of carbon-14 remaining is $68\%$.
>
> 1. Press **`Y=`**. Enter $Y_1=100(0.5)^{X/5730}$ and $Y_2=68$.
> 2. Press **`WINDOW`**. Set `Xmin = 0`, `Xmax = 6000`, `Xscl = 1000`, `Ymin = 0`, `Ymax = 100`, and `Yscl = 10`.
> 3. Press **`GRAPH`**. The decay curve and horizontal line meet at the age we want.
> 4. Press **`2nd`** -> **`TRACE`** (`CALC`) -> **`5:intersect`**. Confirm the first curve ($Y_1$), second curve ($Y_2$), and a guess near their crossing using **`ENTER`**. Use the arrow keys if you need to select a different curve.
> 5. Read the intersection, approximately $(3188.13,\ 68)$.
>
> **Conclusion:** According to the model, the wooden tool is approximately **$3188$ years old**. This agrees with the algebraic method.

> [!abstract] Review First
> - [[Math/Exponential Functions/Exponential Decay 2|Exponential Decay 2]]
> - [[Math/Exponential Functions/Radioactive Decay|Radioactive Decay]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Exponential Functions/Doubling Time - Bacteria 1|Doubling Time - Bacteria 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Exponential Functions/Solving Exponential Graphs 1|Solving Exponential Graphs 1]]
> - [[Math/Exponential Functions/Exponential Regression - Substance Decay 1|Exponential Regression - Substance Decay 1]]
> - [[Math/Logarithmic Functions/Logarithmic Functions 1|Logarithmic Functions 1]]
