---
type: qod
publish: true
course:
  - Mathematics 30-2
  - Mathematics 30-1
topic: "Solving Exponential Equations"
learning_order: 3304
show_solution: false
source: "Original equivalent of CHC Mathematics 30-2 Exponential Functions, Topic 3 Practice"
source_question: 4
domain: "Exponential Functions"
curriculum_alignment: "30-2 Relations and Functions SO5.1–5.3, exponential equations"
curriculum_review_required: false
calculator: allowed
---

# Doubling Time - Bacteria 2

A culture has $240$ organisms at the beginning of an experiment, doubling every $10$ hours. Solve algebraically for the time needed to reach $245,760$ bacteria, and confirm on a graph.

> [!abstract] Review First
> - [[Math/Exponential Functions/Exponential Equations 6|Exponential Equations 6]]
> - [[Math/Exponential Functions/Exponential Equations 3|Exponential Equations 3]]
> - [[Math/Exponential Functions/Exponential Growth 2|Exponential Growth 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Exponential Functions/Solving Exponential Equations Graphically 1|Solving Exponential Equations Graphically 1]]
> - [[Math/Exponential Functions/Exponential Decay - Food Storage 1|Exponential Decay - Food Storage 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._

## Solution

> [!example]- Show solution
>
> **Step 1 — Build the doubling model.** Starting at $240$ organisms and doubling every $10$ hours gives
> 
> $$P(t)=240(2)^{t/10}.$$
> 
> **Step 2 — Substitute the target.**
> 
> $$245760=240(2)^{t/10}\implies1024=2^{t/10}.$$
> 
> **Step 3 — Use a common base.** Because $1024=2^{10}$,
> 
> $$2^{10}=2^{t/10}\implies10=\frac{t}{10}\implies\boxed{t=100\text{ hours}}.$$
> 
> **Graphing verification:** Enter `Y1=240*2^(X/10)` and `Y2=245760`, then use the intersection command. The intersection occurs at $(100,245760)$. The horizontal axis is hours, not doubling periods.
