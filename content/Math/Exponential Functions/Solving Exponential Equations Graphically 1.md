---
type: qod
publish: true
course:
  - Mathematics 30-2
  - Mathematics 30-1
topic: "Solving Exponential Equations"
learning_order: 3303
show_solution: false
source: "Original equivalent of CHC Mathematics 30-2 Exponential Functions, Topic 3 Practice"
source_question: 3
domain: "Exponential Functions"
curriculum_alignment: "30-2 Relations and Functions SO5.1–5.3, exponential equations"
curriculum_review_required: false
calculator: required
qod_id: "QOD-532433ADFEA3D4E6237B85B3"
title: "Solving Exponential Equations Graphically 1"
aliases: []
tags: []
estimated_minutes: null
question_format: null
cognitive_level: []
performance_standard: []
diploma_eligible: null
diploma_ready: null
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

Use graphing technology to find every real solution to the nearest tenth.

A. $8^{1-x}=2^{x+3}$

B. $3^{2x}=5^x$

C. $2^{x+2}=4^x+2$

D. $6^{x-1}=(1/3)^{x+2}$.

> [!abstract] Review First
> - [[Math/Exponential Functions/Exponential Equations 6|Exponential Equations 6]]
> - [[Math/Exponential Functions/Exponential Equations 3|Exponential Equations 3]]
> - [[Math/Exponential Functions/Exponential Equations 4|Exponential Equations 4]]
> - [[Math/Exponential Functions/Exponential Models from Graphs 1|Exponential Models from Graphs 1]]
> - [[Math/Exponential Functions/Solving Exponential Graphs 1|Solving Exponential Graphs 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Exponential Functions/Solving Exponential Equations 1|Solving Exponential Equations 1]]
> - [[Math/Exponential Functions/Doubling Time - Bacteria 2|Doubling Time - Bacteria 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Logarithmic Functions/Logarithmic Functions 1|Logarithmic Functions 1]]
> - [[Math/Logarithmic Functions/Logarithm Laws 2|Logarithm Laws 2]]

## Solution

> [!example]- Show solution
>
> **Graphing method (for each part):** Enter the left expression as `Y1` and the right expression as `Y2`. Choose a window where both curves are visible, then use `2nd` → `TRACE` → `5:intersect` to find the $x$-coordinate where their $y$-values agree. Scan for additional intersections rather than assuming there is only one.
> 
> **A.** $8^{1-x}=2^{x+3}$. Since $8=2^3$, write $2^{3-3x}=2^{x+3}$. Equating exponents gives $3-3x=x+3$, so $\boxed{x=0.0}$.
> 
> **B.** $3^{2x}=5^x$. The left side is $9^x$, so $(9/5)^x=1$. The only real solution is $\boxed{x=0.0}$.
> 
> **C.** $2^{x+2}=4^x+2$. This one has **two intersections**. Let $u=2^x>0$, so $4u=u^2+2$, or $u^2-4u+2=0$. The quadratic formula gives $u=2\pm\sqrt2$, both positive. Therefore
> 
> $$x=\frac{\ln(2-\sqrt2)}{\ln2}\approx-0.8\quad\text{or}\quad x=\frac{\ln(2+\sqrt2)}{\ln2}\approx1.8.$$
> 
> **D.** $6^{x-1}=(1/3)^{x+2}$. Take logs:
> 
> $$(x-1)\ln6=-(x+2)\ln3,$$
> $$x=\frac{\ln6-2\ln3}{\ln6+\ln3}=\frac{\ln(2/3)}{\ln18}\approx\boxed{-0.1}.$$
> 
> **Verification:** For every graphical intersection, substitute the unrounded $x$ into the two original expressions. The outputs should agree to the calculator's displayed precision.
