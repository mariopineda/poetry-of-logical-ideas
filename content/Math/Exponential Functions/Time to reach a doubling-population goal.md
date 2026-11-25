---
type: qod
publish: true
course:
- Mathematics 30-2
- Mathematics 30-1
topic: Exponential Functions
show_solution: true
qod_id: DIP-30-2-2016-NR7
diploma_eligible: true
diploma_ready: true
review_status: reviewed-batch09
question_format: written-response
diploma_cognitive_level: Procedural
diploma_performance_standard: Acceptable
diploma_outcomes: '6'
tags:
- qod
- diploma-preparation
- written-response
diploma_original_item_format: numerical-response
diploma_original_percent_correct: 48.8
diploma_original_topic: RF
certified_batch: 9
title: "Time to reach a doubling-population goal"
aliases: []
domain: null
learning_order: null
estimated_minutes: null
calculator: null
curriculum_alignment: []
cognitive_level: ["Procedural"]
performance_standard: ["Acceptable"]
source: null
source_kind: null
source_question: null
source_topic: "RF"
source_format: "numerical-response"
source_equivalence: null
source_percent_correct: 48.8
source_mean_score: null
assessment_metadata_origin: null
review_date: null
curriculum_review_required: null
---

A laboratory culture initially contains $800$ cells and doubles every $45$ minutes. Assume the doubling model continues unchanged.

How long will it take for the model to reach $20\,000$ cells, to the nearest whole minute? Set up the exponential model and explain the role of the doubling period.

> [!info]- Hint 1
> The exponent represents the number of doubling periods, not the number of minutes. How many 45-minute periods fit into $t$ minutes? When solving graphically, consider which coordinate you already know and which you are trying to determine.

## Solution

> [!example]- Show solution
>
> ### 1. Develop two equivalent exponential models
>
> The initial population is $800$ cells, the growth factor is $2$, and the doubling period is $45$ minutes.
>
> **Model A — Time in minutes:** Let $t$ be the elapsed time in minutes. The number of doubling periods is $t/45$, so
>
> $$N(t)=800\cdot2^{t/45}.$$
>
> The exponent is $1$ after $45$ minutes and $2$ after $90$ minutes. To reach $20\,000$ cells, solve
>
> $$20\,000=800\cdot2^{t/45}.$$
>
> **Model B — Number of doubling periods:** Let $n$ be the number of elapsed doubling periods (including fractions of a period). Then
>
> $$N(n)=800\cdot2^n.$$
>
> To reach $20\,000$ cells, solve
>
> $$20\,000=800\cdot2^n.$$
>
> The models are equivalent because $n=t/45$, or $t=45n$. Model A gives the time directly in minutes; Model B gives the number of doubling periods, which must be converted to minutes.
>
> ### 2. Method 1 — Algebraically using logarithms
>
> **Model A:**
>
> $$\begin{aligned}
> 20\,000&=800\cdot2^{t/45}\\
> 25&=2^{t/45}\\
> \log25&=\frac{t}{45}\log2\\
> t&=45\frac{\log25}{\log2}\\
> &\approx208.9735\text{ min}.
> \end{aligned}$$
>
> **Model B:**
>
> $$\begin{aligned}
> 20\,000&=800\cdot2^n\\
> 25&=2^n\\
> \log25&=n\log2\\
> n&=\frac{\log25}{\log2}\\
> &\approx4.643856\text{ doubling periods}.
> \end{aligned}$$
>
> Each doubling period lasts $45$ minutes. Using the unrounded value of $n$,
>
> $$t=45n\approx208.9735\text{ min}.$$
>
> ### 3. Method 2 — Graphically using a TI-83/TI-84
>
> Graph the population model and the horizontal line representing the target population. At their intersection, both expressions have the same value. The calculator uses $X$ as its independent variable, so interpret $X$ according to the model being graphed.
>
> **Model A — Time in minutes**
>
> 1. Press `Y=` and enter `Y1=800*2^(X/45)` and `Y2=20000`.
> 2. Press `WINDOW` and set `Xmin=0`, `Xmax=225`, `Xscl=45`, `Ymin=0`, `Ymax=30000`, `Yscl=5000`.
> 3. Press `GRAPH`.
> 4. Press `2nd` then `TRACE` (CALC), select `5:intersect`, and press `ENTER` to confirm each curve. Move the cursor near their intersection if necessary and press `ENTER` to confirm the guess.
> 5. The intersection is approximately $(208.9735,\ 20\,000)$. Here $X$ represents elapsed time in minutes, so no conversion is needed.
>
> **Model B — Number of doubling periods**
>
> 1. Press `Y=` and enter `Y1=800*2^X` and `Y2=20000`.
> 2. Press `WINDOW` and set `Xmin=0`, `Xmax=5`, `Xscl=1`, `Ymin=0`, `Ymax=30000`, `Yscl=5000`.
> 3. Press `GRAPH` and use `2nd`, `TRACE`, `5:intersect` as above.
> 4. The intersection is approximately $(4.643856,\ 20\,000)$. Here $X$ represents the number of doubling periods, not minutes.
> 5. Multiply the unrounded intersection's $X$-coordinate by $45$ to obtain the elapsed time: $t\approx208.9735$ minutes.
>
> ### 4. Conclusion and reasonableness check
>
> Both models and both methods give the same time, to the nearest whole minute:
>
> $$\boxed{209\text{ minutes}}.$$
>
> This is approximately $3$ hours and $29$ minutes. After four doubling periods ($180$ minutes), there are $12\,800$ cells; after five ($225$ minutes), there are $25\,600$ cells. Therefore the target must be reached between these times under the continuous exponential model. Do not round the number of doubling periods to a whole number before converting to minutes.

> [!abstract] Review First
> - [[Math/Exponential Functions/Exponential Patterns in Tables 1|Exponential Patterns in Tables 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Exponential Functions/Exponential Functions 1|Exponential Functions 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Exponential Functions/Exponential Graph Characteristics 1|Exponential Graph Characteristics 1]]
