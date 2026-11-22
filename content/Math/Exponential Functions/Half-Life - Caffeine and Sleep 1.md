---
type: qod
publish: true
course:
  - Mathematics 30-2
  - Mathematics 30-1
topic: "Applications of Exponential Functions"
domain: "Exponential Functions"
learning_order: 3221
show_solution: true
source: "Peer-reviewed scientific research; teaching model based on published pharmacokinetic estimates"
curriculum_alignment: "Mathematics 30-2: exponential function characteristics, half-life applications and solving exponential equations; Mathematics 30-1: exponential functions and equations"
curriculum_review_required: false
calculator: allowed
title: "Half-Life - Caffeine and Sleep"
---

Energy drinks are popular among young adults, especially during long study sessions or late shifts. Caffeine can improve alertness temporarily, but a peer-reviewed sleep study found that a large caffeine dose taken six hours before bedtime could still disrupt sleep. Other research reports that caffeine has an approximate elimination half-life of **5 hours** in healthy adults. A *half-life* is the time required for the amount of a substance to fall to half its previous value.

Suppose a young adult drinks an energy drink containing **200 milligrams (mg)** of caffeine. Starting once the caffeine has been absorbed, and assuming no more caffeine is consumed, the following function models the amount in the body:

$$
C(t)=200\left(0.5\right)^{\frac{t}{5}}
$$

where $C(t)$ represents the amount of caffeine remaining in the body, in mg and $t$ represents time in hours after absorption.

**Questions**

1. Is this an increasing or decreasing exponential function? Explain how you know.
2. What does the number $200$ represent in this situation?
3. Determine the amount of caffeine remaining after 10 hours, to the nearest milligram.
4. When studying how a substance leaves the body, researchers sometimes use **five half-lives** as a practical reference point: about 97% of its original amount is then gone. In this model, **6.25 mg** would remain. This does **not** mean that any remaining caffeine can no longer affect sleep. According to the equation, **how many hours does it take to reach 6.25 mg? Show your work using the equation.**

> [!info] Scientific references
> **The psychopharmacological and electrophysiological effects of single doses of caffeine in healthy human subjects**  
> https://pmc.ncbi.nlm.nih.gov/articles/PMC1401080/  
> **Drake et al. (2013). Caffeine effects on sleep taken 0, 3, or 6 hours before going to bed. Journal of Clinical Sleep Medicine**  
> https://pmc.ncbi.nlm.nih.gov/articles/PMC3805807/  

## Solution

> [!example]- Show solution
>
> **1.** The function is decreasing because its base is $0.5$, which is between $0$ and $1$. Its value is halved each half-life.
>
> **2.** The coefficient $200$ represents the amount or concentration at $t=0$ in this model (the amount of caffeine remaining in the body, in mg).
>
> **3.** Substitute $t=10$, which is two half-lives:
>
> $$
> C(10)=200\left(0.5\right)^2=\boxed{50\text{ mg }}.
> $$
>
> **4.** Solve the equation $6.25=200\left(0.5\right)^{t/5}$ in two ways.
>
> **Method 1 — TI-83/TI-84 (graphing intersection)**
>
> 1. Press `Y=` and enter `Y1=200*(0.5)^(X/5)` and `Y2=6.25`.
> 2. Press `WINDOW`. Set `Xmin=0`, `Xmax=30`, `Ymin=0`, and `Ymax=210`; then press `GRAPH`.
> 3. Press `2nd` → `TRACE` (CALC) → `5:intersect`. Confirm the first curve, second curve, and guess by pressing `ENTER` at each prompt.
> 4. The intersection is $(25,6.25)$, so $\boxed{t=25\text{ hours }}$.
>
> **Method 2 — Algebraically using logarithms**
>
> Start by isolating the exponential expression (divide both sides by $200$):
>
> $$
> \frac{6.25}{200}=\left(0.5\right)^{t/5}
> $$
>
> $$
> 0.03125=\left(0.5\right)^{t/5}
> $$
>
> Take the common logarithm of both sides and use the power law $\log(a^b)=b\log(a)$:
>
> $$
> \log(0.03125)=\frac{t}{5}\log(0.5)
> $$
>
> Isolate $t$:
>
> $$
> t=\frac{5\log(0.03125)}{\log(0.5)}
> $$
>
> On a TI-83/TI-84, enter `5*log(0.03125)/log(0.5)`.
>
> **TI-84 alternative — a single logarithm (change of base):**
>
> Since $\displaystyle\frac{\log(a)}{\log(b)}=\log_b(a)$, we can rewrite the result as
>
> $$
> t=5\log_{0.5}(0.03125)=\boxed{25\text{ hours }}.
> $$
>
> On a TI-84 with the `logBASE(` function, press `MATH`, select `A:logBASE(`, and enter **base** `0.5` and **argument** `0.03125` in the displayed template. Multiply by `5`. In Classic entry mode, the function may appear as `logBASE(0.03125,0.5)` (argument first, base second). Older TI-83 models can use the quotient of common logs above.
> **Interpretation:** Five half-lives leaves $1/32=3.125\%$ of the initial modelled quantity; $96.875\%$ has decreased. This is not a clinical safety, effectiveness, or detection threshold.

> [!abstract] Review First
> - [[Math/Exponential Functions/Exponential Decay 1|Exponential Decay 1]]
> - [[Math/Exponential Functions/Exponential Growth and Decay 1|Exponential Growth and Decay 1]]
> - [[Math/Exponential Functions/Caffeine Decay 1|Caffeine Decay 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Exponential Functions/Half-Life - Nicotine and Vaping 1|Half-Life - Nicotine and Vaping 1]]
> - [[Math/Exponential Functions/Half-Life - Melatonin and Sleep 1|Half-Life - Melatonin and Sleep 1]]
> - [[Math/Exponential Functions/Half-Life - Emergency Contraception 1|Half-Life - Emergency Contraception 1]]
> - [[Math/Exponential Functions/Half-Life - Cannabis Metabolite 1|Half-Life - Cannabis Metabolite 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Exponential Functions/Half-Life - Carbon Dating 1|Half-Life - Carbon Dating 1]]
> - [[Math/Exponential Functions/Exponential Regression - Substance Decay 1|Exponential Regression - Substance Decay 1]]
