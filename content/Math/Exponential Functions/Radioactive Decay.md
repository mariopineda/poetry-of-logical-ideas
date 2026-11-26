---
type: qod
publish: true
course:
  - "Mathematics 30-1"
  - "Mathematics 30-2"
topic: "Exponential Growth and Decay"
show_solution: false
diploma_eligible: true
diploma_ready: false
diploma_screening: strong-candidate-2026-11-22
tags:
  - qod
  - diploma-preparation
qod_id: "QOD-A833F9BF18074A5CF61A7C31"
title: "Radioactive Decay"
aliases: []
domain: null
learning_order: null
estimated_minutes: null
calculator: null
question_format: null
curriculum_alignment: []
cognitive_level: []
performance_standard: []
source: null
source_kind: null
source_question: null
source_topic: null
source_format: null
source_equivalence: null
source_percent_correct: null
source_mean_score: null
assessment_metadata_origin: null
review_status: null
review_date: null
curriculum_review_required: null
used_in:
  - "2026-11-26|B4"
---

**Chernobyl Fallout: Modeling Cesium-137 Decay in a Swedish Forest**

On April 26, 1986, a major nuclear accident occurred at the Chernobyl Nuclear Power Plant in what is now Ukraine. An explosion and subsequent fires released radioactive material into the atmosphere.

Winds carried this material across large parts of Europe, including Sweden, where radioactive particles were deposited on the ground through a process known as *radioactive fallout*.

One of the radioactive substances released was cesium-137. Because it has a half-life of approximately 30 years, it can remain present in forest ecosystems for decades. A *half-life* is the time required for the activity of a radioactive substance to decrease to half its previous value.

For this mathematical model, suppose the initial activity concentration of cesium-137 in a Swedish forest was $1200\text{ Bq/kg}$ in 1986. Bq/kg means becquerels per kilogram (one becquerel is one radioactive decay per second). Use a half-life of $30$ years and assume that only radioactive decay changes the activity concentration. The initial value is hypothetical, not a documented historical measurement.

Let $A(t)$ be the concentration, in Bq/kg, $t$ years after 1986.

1. Given that cesium-137 has a half-life of $30$ years, determine the annual decay factor $b$. Express your answer to four decimal places.
2. Write an exponential decay model in the form $A(t)=A_0b^t$, representing the activity concentration of cesium-137 in the forest.
3. Predict the activity concentration in 2025, to the nearest whole Bq/kg.
4. Determine the minimum number of complete years after 1986 required for the activity concentration to fall below $100\text{ Bq/kg}$.

Use unrounded values in subsequent calculations.

> [!info]- Hint 1 — Questions 1–2
> Does the half-life describe the multiplier for one year or for thirty years? Think about what the activity concentration must be after one half-life.

> [!info]- Hint 2 — Question 4
> On a graph, how could you represent the threshold of 100 Bq/kg? Remember that reaching the threshold and falling below it are not quite the same thing.

> [!info] Scientific references
> **World Health Organization — Radiation: The Chernobyl accident**  
> https://www.who.int/news-room/questions-and-answers/item/radiation-the-chernobyl-accident  
> **Swedish Meteorological and Hydrological Institute — The Chernobyl accident: A meteorological analysis of how radionucleides reached Sweden**  
> https://www.smhi.se/en/publications-from-smhi/publications/1986-09-03-the-chernobyl-accident---a-meteorological-analysis-of-how-radionucleides-reached-sweden  
> **U.S. Environmental Protection Agency — Radionuclide Basics: Cesium-137**  
> https://www.epa.gov/radiation/radionuclide-basics-cesium-137

> [!abstract] Review First
> - [[Math/Exponential Functions/Exponential Equations|Exponential Equations]]
> - [[Math/Exponential Functions/Exponential Decay 1|Exponential Decay 1]]
> - [[Math/Exponential Functions/Exponential Decay 2|Exponential Decay 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Exponential Functions/Exponential Growth - Finance|Exponential Growth - Finance]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._

## Solution

> [!example]- Show solution
>
> **1. Determine the annual decay factor.**
>
> After one half-life of 30 years, the activity concentration is half its initial value, or 600 Bq/kg. Using $A(t)=A_0b^t$,
>
> $$
> \begin{aligned}
> 600&=1200b^{30}\\
> b^{30}&=\frac12\\
> b&=\left(\frac12\right)^{1/30}\\
> b&\approx0.9771599684.
> \end{aligned}
> $$
>
> Since the base of an exponential function is positive, $\boxed{b\approx0.9772}$.
>
> **2. Construct the exponential decay model.**
>
> The initial activity concentration is $A_0=1200$. Substituting the annual decay factor gives
>
> $$\boxed{A(t)\approx1200(0.9772)^t}.$$
>
> An equivalent exact model, using the half-life directly, is
>
> $$\boxed{A(t)=1200\left(\frac12\right)^{t/30}}.$$
>
> Use this exact expression (or store the unrounded value of $b$) in subsequent calculations.
>
> **3. Predict the activity concentration in 2025.**
>
> Since $t=2025-1986=39$,
>
> $$A(39)=1200\left(\frac12\right)^{39/30}\approx487.35.$$
>
> The predicted activity concentration is $\boxed{487\text{ Bq/kg}}$.
>
> **4. Determine when the activity concentration falls below 100 Bq/kg.**
>
> **Method 1 — Graphical solution (TI-83/TI-84 family).**
>
> 1. In `Y=`, enter `Y1=1200(0.5)^(X/30)` and `Y2=100`.
> 2. Set `WINDOW` to `Xmin=0`, `Xmax=150`, `Xscl=15`, `Ymin=0`, `Ymax=1300`, `Yscl=100`.
> 3. Press `GRAPH`, then `2nd` → `TRACE` → `5:intersect`.
> 4. Select the first curve and press `ENTER`; select the second curve and press `ENTER`. Move near the intersection and press `ENTER` again to confirm the guess.
>
> ![[Radioactive_Decay_Threshold_Intersection.svg]]
>
> The intersection is approximately $(107.5489,100)$. At this point the activity concentration is exactly 100 Bq/kg. To the right of the intersection the decay curve lies below the threshold, so $t>107.5489$ approximately.
>
> **Method 2 — Algebraic solution using logarithms (alternative).**
>
> First find the time at which the activity concentration equals 100 Bq/kg.
>
> $$
> \begin{aligned}
> 1200\left(\frac12\right)^{t/30}&=100\\
> \left(\frac12\right)^{t/30}&=\frac1{12}\\
> \frac{t}{30}\log\left(\frac12\right)&=\log\left(\frac1{12}\right)\\
> t&=30\frac{\log(1/12)}{\log(1/2)}\\
> t&\approx107.5489.
> \end{aligned}
> $$
>
> The model is strictly decreasing, so the activity concentration is below 100 Bq/kg after this crossing. No logarithms are needed for Method 1.
>
> **Verify the adjacent complete years (either method).**
>
> | Complete years after 1986 | Predicted activity concentration (Bq/kg) |
> |---:|---:|
> | 107 | 101.28 |
> | 108 | 98.96 |
>
> Thus 107 complete years are not enough, but 108 complete years are. Since the activity concentration decreases continuously, no earlier whole year satisfies the condition.
>
> $$\boxed{108\text{ complete years after 1986}}$$
>
> This corresponds to the year $\boxed{2094}$.
