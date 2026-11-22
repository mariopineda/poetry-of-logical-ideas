---
type: qod
publish: true
course:
  - Mathematics 30-2
  - Mathematics 30-1
topic: "Applications of Exponential Functions"
domain: "Exponential Functions"
learning_order: 3223
show_solution: true
source: "Peer-reviewed scientific research; teaching model based on published pharmacokinetic estimates"
curriculum_alignment: "Mathematics 30-2: exponential function characteristics, half-life applications and solving exponential equations; Mathematics 30-1: exponential functions and equations"
curriculum_review_required: false
calculator: allowed
title: "Half-Life - Melatonin and Sleep"
---

Melatonin is a hormone involved in the body's sleep–wake cycle. Some young adults use melatonin supplements when their sleep schedule is irregular. A peer-reviewed study of healthy adult volunteers found an average elimination half-life of approximately **54 minutes** after oral administration. The amount in the bloodstream alone does not tell us how sleepy someone feels, and different supplement formulations can behave differently.

Suppose the concentration of supplemental melatonin reaches **3,200 picograms per millilitre (pg/mL)** above a person's normal level. A *picogram* is one-trillionth of a gram; pg/mL tells us how many picograms are present in each millilitre of blood plasma. The following function models this additional concentration after it reaches that level:

$$
M(t)=3200\left(0.5\right)^{\frac{t}{54}}
$$

where $M(t)$ represents the supplemental melatonin concentration above the normal level, in pg/mL and $t$ represents time in minutes after that level is reached.

**Questions**

1. Is this an increasing or decreasing exponential function? Explain how you know.
2. What does the number $3200$ represent in this situation?
3. Determine the supplemental melatonin concentration after 108 minutes, to the nearest whole pg/mL.
4. Scientists sometimes examine a point five half-lives after an initial measurement because a substance's measured amount or concentration has fallen by about **97%**. Here, the model predicts an additional concentration of **100 pg/mL** above the person's normal level. That does not identify when a sleep effect ends. According to the equation, **how many minutes does it take to reach 100 pg/mL? Show your work using the equation.**

> [!info] Scientific references
> **Pharmacokinetics of oral and intravenous melatonin in healthy volunteers (2016)**  
> https://pmc.ncbi.nlm.nih.gov/articles/PMC4759723/  
> **A randomized, double-blind, crossover study of extended-release versus immediate-release melatonin (2023)**  
> https://pubmed.ncbi.nlm.nih.gov/37150895/  

## Solution

> [!example]- Show solution
>
> **1.** The function is decreasing because its base is $0.5$, which is between $0$ and $1$. Its value is halved each half-life.
>
> **2.** The coefficient $3200$ represents the amount or concentration at $t=0$ in this model (the supplemental melatonin concentration above the normal level, in pg/mL).
>
> **3.** Substitute $t=108$, which is two half-lives:
>
> $$
> M(108)=3200\left(0.5\right)^2=\boxed{800\text{ pg/mL }}.
> $$
>
> **4.** Solve the equation $100=3200\left(0.5\right)^{t/54}$ in two ways.
>
> **Method 1 — TI-83/TI-84 (graphing intersection)**
>
> 1. Press `Y=` and enter `Y1=3200*(0.5)^(X/54)` and `Y2=100`.
> 2. Press `WINDOW`. Set `Xmin=0`, `Xmax=325`, `Ymin=0`, and `Ymax=3500`; then press `GRAPH`.
> 3. Press `2nd` → `TRACE` (CALC) → `5:intersect`. Confirm the first curve, second curve, and guess by pressing `ENTER` at each prompt.
> 4. The intersection is $(270,100)$, so $\boxed{t=270\text{ minutes }}$.
>
> **Method 2 — Algebraically using logarithms**
>
> Start by isolating the exponential expression (divide both sides by $3200$):
>
> $$
> \frac{100}{3200}=\left(0.5\right)^{t/54}
> $$
>
> $$
> 0.03125=\left(0.5\right)^{t/54}
> $$
>
> Take the common logarithm of both sides and use the power law $\log(a^b)=b\log(a)$:
>
> $$
> \log(0.03125)=\frac{t}{54}\log(0.5)
> $$
>
> Isolate $t$:
>
> $$
> t=\frac{54\log(0.03125)}{\log(0.5)}
> $$
>
> On a TI-83/TI-84, enter `54*log(0.03125)/log(0.5)`.
>
> **TI-84 alternative — a single logarithm (change of base):**
>
> Since $\displaystyle\frac{\log(a)}{\log(b)}=\log_b(a)$, we can rewrite the result as
>
> $$
> t=54\log_{0.5}(0.03125)=\boxed{270\text{ minutes }}.
> $$
>
> On a TI-84 with the `logBASE(` function, press `MATH`, select `A:logBASE(`, and enter **base** `0.5` and **argument** `0.03125` in the displayed template. Multiply by `54`. In Classic entry mode, the function may appear as `logBASE(0.03125,0.5)` (argument first, base second). Older TI-83 models can use the quotient of common logs above.
> **Interpretation:** Five half-lives leaves $1/32=3.125\%$ of the initial modelled quantity; $96.875\%$ has decreased. This is not a clinical safety, effectiveness, or detection threshold.

> [!abstract] Review First
> - [[Math/Exponential Functions/Exponential Decay 1|Exponential Decay 1]]
> - [[Math/Exponential Functions/Exponential Growth and Decay 1|Exponential Growth and Decay 1]]
> - [[Math/Exponential Functions/Caffeine Decay 1|Caffeine Decay 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Exponential Functions/Half-Life - Caffeine and Sleep 1|Half-Life - Caffeine and Sleep 1]]
> - [[Math/Exponential Functions/Half-Life - Nicotine and Vaping 1|Half-Life - Nicotine and Vaping 1]]
> - [[Math/Exponential Functions/Half-Life - Emergency Contraception 1|Half-Life - Emergency Contraception 1]]
> - [[Math/Exponential Functions/Half-Life - Cannabis Metabolite 1|Half-Life - Cannabis Metabolite 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Exponential Functions/Half-Life - Carbon Dating 1|Half-Life - Carbon Dating 1]]
> - [[Math/Exponential Functions/Exponential Regression - Substance Decay 1|Exponential Regression - Substance Decay 1]]
