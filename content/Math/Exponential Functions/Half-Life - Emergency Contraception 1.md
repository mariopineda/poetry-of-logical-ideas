---
type: qod
publish: true
course:
  - Mathematics 30-2
  - Mathematics 30-1
topic: "Applications of Exponential Functions"
domain: "Exponential Functions"
learning_order: 3224
show_solution: true
source: "Peer-reviewed scientific research; teaching model based on published pharmacokinetic estimates"
curriculum_alignment: "Mathematics 30-2: exponential function characteristics, half-life applications and solving exponential equations; Mathematics 30-1: exponential functions and equations"
curriculum_review_required: false
calculator: allowed
title: "Half-Life - Emergency Contraception"
diploma_eligible: true
diploma_ready: false
diploma_screening: strong-candidate-2026-11-22
tags:
  - qod
  - diploma-preparation
qod_id: "QOD-F6F01D9C9155425512417FB2"
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

Emergency contraception can help prevent pregnancy after unprotected sex or contraceptive failure. One kind contains *levonorgestrel*, which primarily acts by delaying or preventing ovulation. Its effectiveness depends partly on timing relative to ovulation; simply measuring how much hormone remains does not show how long the pill is effective.

In a peer-reviewed 2019 study of women aged 18–35, researchers measured an average peak levonorgestrel concentration of **16.2 nanograms per millilitre (ng/mL)** and an average elimination half-life of **29.7 hours** in the study's normal-weight group. A *nanogram* is one-billionth of a gram; ng/mL measures the number of nanograms in one millilitre of blood serum. The following function models hormone concentration after it reaches its peak:

$$
L(t)=16.2\left(0.5\right)^{\frac{t}{29.7}}
$$

where $L(t)$ represents the levonorgestrel concentration in blood serum, in ng/mL and $t$ represents time in hours after the peak.

**Questions**

1. Is this an increasing or decreasing exponential function? Explain how you know.
2. What does the number $16.2$ represent in this situation?
3. Determine the hormone concentration after 59.4 hours, to the nearest hundredth of an ng/mL.
4. Researchers sometimes use **five half-lives** as a reference point because, by then, the measured concentration has fallen by approximately **97%**. In this model, the concentration would reach **0.50625 ng/mL**. That is **not** a cutoff for contraceptive effectiveness. According to the equation, **how many hours after the peak does it take to reach this concentration? Show your work using the equation.**

> [!info] Scientific references
> **Natavio et al. (2019). Pharmacokinetics of the 1.5 mg levonorgestrel emergency contraceptive in women with normal, obese and extremely obese body mass index. Contraception**  
> https://pmc.ncbi.nlm.nih.gov/articles/PMC6499670/  

## Solution

> [!example]- Show solution
>
> **1.** The function is decreasing because its base is $0.5$, which is between $0$ and $1$. Its value is halved each half-life.
>
> **2.** The coefficient $16.2$ represents the amount or concentration at $t=0$ in this model (the levonorgestrel concentration in blood serum, in ng/mL).
>
> **3.** Substitute $t=59.4$, which is two half-lives:
>
> $$
> L(59.4)=16.2\left(0.5\right)^2=\boxed{4.05\text{ ng/mL }}.
> $$
>
> **4.** Solve the equation $0.50625=16.2\left(0.5\right)^{t/29.7}$ in two ways.
>
> **Method 1 — TI-83/TI-84 (graphing intersection)**
>
> 1. Press `Y=` and enter `Y1=16.2*(0.5)^(X/29.7)` and `Y2=0.50625`.
> 2. Press `WINDOW`. Set `Xmin=0`, `Xmax=180`, `Ymin=0`, and `Ymax=18`; then press `GRAPH`.
> 3. Press `2nd` → `TRACE` (CALC) → `5:intersect`. Confirm the first curve, second curve, and guess by pressing `ENTER` at each prompt.
> 4. The intersection is $(148.5,0.50625)$, so $\boxed{t=148.5\text{ hours }}$.
>
> **Method 2 — Algebraically using logarithms**
>
> Start by isolating the exponential expression (divide both sides by $16.2$):
>
> $$
> \frac{0.50625}{16.2}=\left(0.5\right)^{t/29.7}
> $$
>
> $$
> 0.03125=\left(0.5\right)^{t/29.7}
> $$
>
> Take the common logarithm of both sides and use the power law $\log(a^b)=b\log(a)$:
>
> $$
> \log(0.03125)=\frac{t}{29.7}\log(0.5)
> $$
>
> Isolate $t$:
>
> $$
> t=\frac{29.7\log(0.03125)}{\log(0.5)}
> $$
>
> On a TI-83/TI-84, enter `29.7*log(0.03125)/log(0.5)`.
>
> **TI-84 alternative — a single logarithm (change of base):**
>
> Since $\displaystyle\frac{\log(a)}{\log(b)}=\log_b(a)$, we can rewrite the result as
>
> $$
> t=29.7\log_{0.5}(0.03125)=\boxed{148.5\text{ hours }}.
> $$
>
> On a TI-84 with the `logBASE(` function, press `MATH`, select `A:logBASE(`, and enter **base** `0.5` and **argument** `0.03125` in the displayed template. Multiply by `29.7`. In Classic entry mode, the function may appear as `logBASE(0.03125,0.5)` (argument first, base second). Older TI-83 models can use the quotient of common logs above.
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
> - [[Math/Exponential Functions/Half-Life - Cannabis Metabolite 1|Half-Life - Cannabis Metabolite 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Exponential Functions/Half-Life - Carbon Dating 1|Half-Life - Carbon Dating 1]]
> - [[Math/Exponential Functions/Exponential Regression - Substance Decay 1|Exponential Regression - Substance Decay 1]]
