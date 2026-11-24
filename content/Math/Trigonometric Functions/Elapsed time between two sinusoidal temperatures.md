---
type: qod
publish: true
course:
- Mathematics 30-1
- Mathematics 30-2
topic: Trigonometric Functions
show_solution: true
qod_id: DIP-30-1-201901-MC20
diploma_eligible: true
diploma_ready: true
review_status: certified-batch02-2026-11-22
question_format: written-response
diploma_cognitive_level: Problem Solving
diploma_performance_standard: Acceptable
diploma_outcomes: TRIG 4
tags:
- qod
- diploma-preparation
- written-response
historical_source_percent_correct: 61.9
certified_batch: 2
title: "Elapsed time between two sinusoidal temperatures"
aliases: []
domain: null
learning_order: null
estimated_minutes: null
calculator: null
curriculum_alignment: []
cognitive_level: ["Problem Solving"]
performance_standard: ["Acceptable"]
source: null
source_kind: null
source_question: null
source_topic: null
source_format: null
source_equivalence: null
source_percent_correct: 61.9
source_mean_score: null
assessment_metadata_origin: null
review_date: null
curriculum_review_required: null
---

During the warming portion of a seasonal temperature cycle, a city's monthly average can be modelled by

$$T(t)=10\sin\left(\frac\pi6(t-2)\right)+10,$$

where $T$ is in degrees Celsius and $t$ is measured in months after January 1. For $2\le t\le5$, determine how much time passes while the temperature rises **from $12^\circ\mathrm C$ to $18^\circ\mathrm C$ for the first time**. Round to the nearest tenth of a month and show how you select the relevant inverse-sine values.

## Solution

> [!example]- Show solution
> Over $2\le t\le5$, the sine argument varies from $0$ to $\pi/2$ and the temperature increases. Solving $T=12$ gives
>
> $$\sin\left(\frac\pi6(t_1-2)\right)=0.2,\quad t_1=2+\frac6\pi\arcsin(0.2).$$
>
> Solving $T=18$ gives
>
> $$\sin\left(\frac\pi6(t_2-2)\right)=0.8,\quad t_2=2+\frac6\pi\arcsin(0.8).$$
>
> Hence
>
> $$\Delta t=t_2-t_1=\frac6\pi\bigl(\arcsin(0.8)-\arcsin(0.2)\bigr)\approx1.3864.$$
>
> The minimum elapsed time on the specified rising interval is $\boxed{1.4\text{ months}}$.

> [!abstract] Review First
> - [[Math/Trigonometry/Sinusoidal Functions/Amplitude and Period 1|Amplitude and Period 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Trigonometry/Trigonometric Functions/Unit Circle and Trigonometric Ratios 1|Unit Circle and Trigonometric Ratios 1]]
> - [[Math/Trigonometry/Trigonometric Functions/Unit Circle and Trigonometric Ratios 2|Unit Circle and Trigonometric Ratios 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Trigonometry/Sinusoidal Functions/Sinusoidal Equations 1|Sinusoidal Equations 1]]
