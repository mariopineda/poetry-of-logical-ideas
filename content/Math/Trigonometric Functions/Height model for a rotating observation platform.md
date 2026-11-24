---
type: qod
publish: true
course:
- Mathematics 30-1
- Mathematics 31
topic: Trigonometric Functions
show_solution: true
qod_id: DIP-30-1-2014-MC10
diploma_eligible: true
diploma_ready: true
review_status: certified_batch04_proof_and_source_equivalence
question_format: written-response
diploma_cognitive_level: Problem Solving
diploma_performance_standard: Excellence
diploma_outcomes: TRIG 4
tags:
- qod
- diploma-preparation
- written-response
diploma_historical_percent_correct: 72.8
diploma_original_format: multiple-choice
certified_batch: 4
title: "Height model for a rotating observation platform"
aliases: []
domain: null
learning_order: null
estimated_minutes: null
calculator: null
curriculum_alignment: []
cognitive_level: ["Problem Solving"]
performance_standard: ["Excellence"]
source: null
source_kind: null
source_question: null
source_topic: null
source_format: "multiple-choice"
source_equivalence: null
source_percent_correct: 72.8
source_mean_score: null
assessment_metadata_origin: null
review_date: null
curriculum_review_required: null
---

A rotating observation platform has radius $24$ m. The lowest passenger seat is $3$ m above ground, one revolution takes $20$ min, and a passenger begins at that lowest position. The graph shows the passenger's height for one revolution.

![[diploma-batch04-2014-mc10-wheel-profile.svg]]

Construct a **sine** model of the form $h(t)=a\sin[b(t-c)]+d$ for height in metres at time $t$ minutes. Give the amplitude, period, midline and a valid horizontal shift; verify the height at $t=0$ and $t=10$.

## Solution

> [!example]- Show solution
> The wheel radius gives amplitude $a=24$ m; the lowest height is $3$ m, so the wheel centre and midline are at $d=3+24=27$ m. One revolution in $20$ min gives angular frequency $b=2\pi/20=\pi/10$ radians per minute. Starting at the minimum requires the sine angle to equal $-\pi/2$ at $t=0$. Choosing a rightward shift of $c=5$ min gives
>
> $$\boxed{h(t)=24\sin\left[\frac\pi{10}(t-5)\right]+27}.$$
>
> Checks: $h(0)=24\sin(-\pi/2)+27=3$ m; $h(10)=24\sin(\pi/2)+27=51$ m. Thus
>
> $$\boxed{\text{amplitude }24\text{ m},\quad\text{period }20\text{ min},\quad\text{midline }h=27\text{ m},\quad c=5\text{ min}}.$$
>
> An equivalent cosine form is $h(t)=27-24\cos(\pi t/10)$; it agrees at every time.

> [!abstract] Review First
> - [[Math/Trigonometry/Sinusoidal Functions/Amplitude and Period 1|Amplitude and Period 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Trigonometry/Sinusoidal Functions/Sinusoidal Functions - Characteristics from a Graph 1|Sinusoidal Functions - Characteristics from a Graph 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Trigonometry/Sinusoidal Functions/Sinusoidal Functions - Equation from Characteristics 2|Sinusoidal Functions - Equation from Characteristics 2]]
