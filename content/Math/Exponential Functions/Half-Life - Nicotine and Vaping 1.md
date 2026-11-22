---
type: qod
publish: true
course:
  - Mathematics 30-2
  - Mathematics 30-1
topic: "Applications of Exponential Functions"
domain: "Exponential Functions"
learning_order: 3222
show_solution: true
source: "Peer-reviewed scientific research; teaching model based on published pharmacokinetic estimates"
curriculum_alignment: "Mathematics 30-2: exponential function characteristics, half-life applications and solving exponential equations; Mathematics 30-1: exponential functions and equations"
curriculum_review_required: false
calculator: allowed
---

# Vaping: How Long Does Nicotine Remain?

Many vaping products contain nicotine, a substance that can cause dependence. Studies of nicotine-containing e-cigarettes have also reported temporary changes in heart rate and blood pressure. A peer-reviewed pharmacology review reports that nicotine has an approximate elimination half-life of **2 hours**.

Suppose a young adult has **4 milligrams (mg)** of nicotine in the body at the start of an observation period. Assuming no further exposure, the following function models the amount present:

$$
N(t)=4\left(0.5\right)^{\frac{t}{2}}
$$

where $N(t)$ represents the amount of nicotine remaining in the body, in mg and $t$ represents time in hours after the first measurement.

**Questions**

1. Is this an increasing or decreasing exponential function? Explain how you know.
2. What does the number $4$ represent in this situation?
3. Determine the amount of nicotine remaining after 4 hours, to the nearest tenth of a milligram.
4. Five half-lives is a useful reference point when studying drug elimination because approximately **97%** of the starting amount has been removed by then. For this model, only **0.125 mg** remains. This benchmark does not say when cravings or withdrawal end. According to the equation, **how many hours does it take to reach 0.125 mg? Show your work using the equation.**

> [!info] Scientific references
> **Benowitz (2009). Pharmacology of nicotine: addiction, smoking-induced disease, and therapeutics. Annual Review of Pharmacology and Toxicology**  
> https://pmc.ncbi.nlm.nih.gov/articles/PMC2946180/  
> **Time- and dose-dependent cardiovascular effects of nicotine-containing electronic cigarettes in young adults (2025)**  
> https://pmc.ncbi.nlm.nih.gov/articles/PMC12567738/  

## Solution

> [!example]- Show solution
>
> **1.** The function is decreasing because its base is $0.5$, which is between $0$ and $1$. Its value is halved each half-life.
>
> **2.** The coefficient $4$ represents the amount or concentration at $t=0$ in this model (the amount of nicotine remaining in the body, in mg).
>
> **3.** Substitute $t=4$, which is two half-lives:
>
> $$
> N(4)=4\left(0.5\right)^2=\boxed{1.0\text{ mg }}.
> $$
>
> **4.** Solve the equation $0.125=4\left(0.5\right)^{t/2}$ in two ways.
>
> **Method 1 — TI-83/TI-84 (graphing intersection)**
>
> 1. Press `Y=` and enter `Y1=4*(0.5)^(X/2)` and `Y2=0.125`.
> 2. Press `WINDOW`. Set `Xmin=0`, `Xmax=15`, `Ymin=0`, and `Ymax=5`; then press `GRAPH`.
> 3. Press `2nd` → `TRACE` (CALC) → `5:intersect`. Confirm the first curve, second curve, and guess by pressing `ENTER` at each prompt.
> 4. The intersection is $(10,0.125)$, so $\boxed{t=10\text{ hours }}$.
>
> **Method 2 — Algebraically using logarithms**
>
> Start by isolating the exponential expression (divide both sides by $4$):
>
> $$
> \frac{0.125}{4}=\left(0.5\right)^{t/2}
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
> t=2\log_{0.5}(0.03125)=\boxed{10\text{ hours }}.
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
> - [[Math/Exponential Functions/Half-Life - Melatonin and Sleep 1|Half-Life - Melatonin and Sleep 1]]
> - [[Math/Exponential Functions/Half-Life - Emergency Contraception 1|Half-Life - Emergency Contraception 1]]
> - [[Math/Exponential Functions/Half-Life - Cannabis Metabolite 1|Half-Life - Cannabis Metabolite 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Exponential Functions/Half-Life - Carbon Dating 1|Half-Life - Carbon Dating 1]]
> - [[Math/Exponential Functions/Exponential Regression - Substance Decay 1|Exponential Regression - Substance Decay 1]]
