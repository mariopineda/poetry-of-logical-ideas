---
type: qod
publish: true
course:
  - Mathematics 30-2
  - Mathematics 30-1
topic: "Applications of Exponential Functions"
domain: "Exponential Functions"
learning_order: 3225
show_solution: true
source: "Peer-reviewed scientific research; teaching model based on published pharmacokinetic estimates"
curriculum_alignment: "Mathematics 30-2: exponential function characteristics, half-life applications and solving exponential equations; Mathematics 30-1: exponential functions and equations"
curriculum_review_required: false
calculator: allowed
title: "Half-Life - Cannabis Metabolite"
diploma_eligible: true
diploma_ready: false
diploma_screening: strong-candidate-2026-11-22
tags:
  - qod
  - diploma-preparation
qod_id: "QOD-09F75CA577EB4416D3BC7D6C"
aliases: []
estimated_minutes: null
question_format: null
cognitive_level: []
performance_standard: []
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
---

THC (tetrahydrocannabinol) is the main psychoactive compound in cannabis. When the body processes THC, it produces *metabolites*, some of which can be found in urine long after the effects of cannabis have worn off. A positive urine test therefore does not necessarily show recent use or current impairment.

In a peer-reviewed study of **70 participants aged 15–25**, researchers observed an average initial THC metabolite measurement of **148 nanograms per milligram (ng/mg)** and an estimated half-life of **2 days** during abstinence. A nanogram is one-billionth of a gram. Here, ng/mg means nanograms of THC metabolite per milligram of *creatinine*, a normal component of urine. Comparing the metabolite to creatinine helps account for how diluted a urine sample is. The following function models the adjusted measurement:

$$
M(t)=148\left(0.5\right)^{\frac{t}{2}}
$$

where $M(t)$ represents the creatinine-adjusted THC metabolite measurement, in ng/mg and $t$ represents time in days after cannabis use stops.

**Questions**

1. Is this an increasing or decreasing exponential function? Explain how you know.
2. What does the number $148$ represent in this situation?
3. Determine the metabolite measurement after 4 days, to the nearest whole ng/mg.
4. After **five half-lives**, a decreasing exponential model predicts that approximately **97%** of the starting concentration has been removed. In this model that leaves **4.625 ng/mg**. This is **not** a drug-test pass threshold: metabolites can remain detectable for weeks, and tests use their own cutoffs. According to the equation, **how many days does it take to reach 4.625 ng/mg? Show your work using the equation.**

> [!info] Scientific references
> **Schuster et al. (2020). Urinary 11-nor-9-carboxy-tetrahydrocannabinol elimination in adolescent and young adult cannabis users during one month of sustained and biochemically-verified abstinence. Journal of Psychopharmacology**  
> https://pmc.ncbi.nlm.nih.gov/articles/PMC6989351/  

## Solution

> [!example]- Show solution
>
> **1.** The function is decreasing because its base is $0.5$, which is between $0$ and $1$. Its value is halved each half-life.
>
> **2.** The coefficient $148$ represents the amount or concentration at $t=0$ in this model (the creatinine-adjusted THC metabolite measurement, in ng/mg).
>
> **3.** Substitute $t=4$, which is two half-lives:
>
> $$
> M(4)=148\left(0.5\right)^2=\boxed{37\text{ ng/mg }}.
> $$
>
> **4.** Solve the equation $4.625=148\left(0.5\right)^{t/2}$ in two ways.
>
> **Method 1 — TI-83/TI-84 (graphing intersection)**
>
> 1. Press `Y=` and enter `Y1=148*(0.5)^(X/2)` and `Y2=4.625`.
> 2. Press `WINDOW`. Set `Xmin=0`, `Xmax=15`, `Ymin=0`, and `Ymax=160`; then press `GRAPH`.
> 3. Press `2nd` → `TRACE` (CALC) → `5:intersect`. Confirm the first curve, second curve, and guess by pressing `ENTER` at each prompt.
> 4. The intersection is $(10,4.625)$, so $\boxed{t=10\text{ days }}$.
>
> **Method 2 — Algebraically using logarithms**
>
> Start by isolating the exponential expression (divide both sides by $148$):
>
> $$
> \frac{4.625}{148}=\left(0.5\right)^{t/2}
> $$
>
> $$
> 0.03125=\left(0.5\right)^{t/2}
> $$
>
> Take the common logarithm of both sides and use the power law $\log(a^b)=b\log(a)$:
>
> $$
> \log(0.03125)=\frac{t}{2}\log(0.5)
> $$
>
> Isolate $t$:
>
> $$
> t=\frac{2\log(0.03125)}{\log(0.5)}
> $$
>
> On a TI-83/TI-84, enter `2*log(0.03125)/log(0.5)`.
>
> **TI-84 alternative — a single logarithm (change of base):**
>
> Since $\displaystyle\frac{\log(a)}{\log(b)}=\log_b(a)$, we can rewrite the result as
>
> $$
> t=2\log_{0.5}(0.03125)=\boxed{10\text{ days }}.
> $$
>
> On a TI-84 with the `logBASE(` function, press `MATH`, select `A:logBASE(`, and enter **base** `0.5` and **argument** `0.03125` in the displayed template. Multiply by `2`. In Classic entry mode, the function may appear as `logBASE(0.03125,0.5)` (argument first, base second). Older TI-83 models can use the quotient of common logs above.
> **Interpretation:** Five half-lives leaves $1/32=3.125\%$ of the initial modelled quantity; $96.875\%$ has decreased. This is not a clinical safety, effectiveness, or detection threshold.

> [!abstract] Review First
> - [[Math/Exponential Functions/Exponential Decay 1|Exponential Decay 1]]
> - [[Math/Exponential Functions/Exponential Growth and Decay 1|Exponential Growth and Decay 1]]
> - [[Math/Exponential Functions/Caffeine Decay 1|Caffeine Decay 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Exponential Functions/Half-Life - Caffeine and Sleep 1|Half-Life - Caffeine and Sleep 1]]
> - [[Math/Exponential Functions/Half-Life - Nicotine and Vaping 1|Half-Life - Nicotine and Vaping 1]]
> - [[Math/Exponential Functions/Half-Life - Melatonin and Sleep 1|Half-Life - Melatonin and Sleep 1]]
> - [[Math/Exponential Functions/Half-Life - Emergency Contraception 1|Half-Life - Emergency Contraception 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Exponential Functions/Half-Life - Carbon Dating 1|Half-Life - Carbon Dating 1]]
> - [[Math/Exponential Functions/Exponential Regression - Substance Decay 1|Exponential Regression - Substance Decay 1]]
