---
type: qod
publish: true
course:
- Mathematics 30-2
- Mathematics 30-1
- Mathematics 31
topic: Rational Functions
show_solution: true
qod_id: DIP-30-2-202108-WR2
diploma_eligible: true
diploma_ready: true
historical_source_mean_score: "3.82/7"
review_status: certified-batch01-proof-and-source-reviewed
question_format: written-response
diploma_cognitive_level: Procedural; Problem Solving
diploma_performance_standard: Acceptable; Excellence
diploma_outcomes: 1, 2, 3
tags:
- qod
- diploma-preparation
- written-response
certified_batch: 1
title: "Travel distance from rational models and combined-speed planning"
aliases: []
domain: null
learning_order: null
estimated_minutes: null
calculator: null
curriculum_alignment: []
cognitive_level: ["Procedural","Problem Solving"]
performance_standard: ["Acceptable","Excellence"]
source: null
source_kind: null
source_question: null
source_topic: null
source_format: null
source_equivalence: null
source_percent_correct: null
source_mean_score: "3.82/7"
assessment_metadata_origin: null
review_date: null
curriculum_review_required: null
---

**(a)** During a habitat-mapping expedition, a sensor sled has an average speed, in kilometres per hour, modelled by
$$v(x)=\frac{3x^2+15x}{x}$$
and a travel time, in hours, modelled by
$$t(x)=\frac{4x-12}{x^2+2x-15}.$$
Determine **all non-permissible values** of $x$ in these original expressions. Explain why cancellation does not make an excluded value permissible.

**(b)** Distance equals speed multiplied by time. Simplify $d(x)=v(x)t(x)$ completely, preserving the restrictions. State the distance in kilometres.

**(c)** On another expedition, a technician travels $6$ km at $x$ km/h and then $30$ km at $(x+10)$ km/h. The two legs take $2$ hours in total. Set up and solve the rational equation **algebraically** for the technician's initial speed. Give a result to the nearest kilometre per hour, and explain why any other algebraic root must be rejected.

**(d)** Three students — **Asha, Bryn, and Cai** — each entered one nature photograph in a competition. Their photographs were made in three different habitats (**prairie**, **wetland**, and **forest**), using three different tripod materials (**aluminum**, **wood**, and **carbon fibre**), and earned **first**, **second**, and **third** place in some order. Use these clues to determine each student's habitat, tripod material, and placing. Show a deduction table or explain your reasoning.

- The photograph taken in the wetland finished third.
- Asha photographed the prairie and did not finish first.
- The first-place photograph was taken using a carbon-fibre tripod.
- Bryn used a wooden tripod.

## Solution

> [!example]- Show solution
> **(a)** The speed denominator $x$ is zero at $x=0$. The time denominator factors as
> $$x^2+2x-15=(x+5)(x-3),$$
> so it is zero at $x=-5$ and $x=3$. The full list of non-permissible values is
> $$\boxed{x\ne0,\quad x\ne-5,\quad x\ne3}.$$
> No excluded value becomes valid after cancellation, because the **original** expression would still involve division by zero.
>
> **(b)** Factor before cancelling:
> $$\begin{aligned}
> d(x)&=\frac{3x(x+5)}{x}\cdot\frac{4(x-3)}{(x+5)(x-3)}\\
> &=\boxed{12\text{ km}},\qquad x\ne0,-5,3.
> \end{aligned}$$
>
> **(c)** Since $x$ is a physical speed, $x>0$. The time equation is
> $$\frac6x+\frac{30}{x+10}=2.$$
> Multiply by $x(x+10)$, which is nonzero for an admissible $x$:
> $$6(x+10)+30x=2x(x+10).$$
> Simplifying gives $x^2-8x-30=0$, so the quadratic formula yields
> $$x=\frac{8\pm\sqrt{64+120}}2=4\pm\sqrt{46}.$$
> The negative root $4-\sqrt{46}<0$ is not a physically possible speed. Thus the technician's initial speed is
> $$\boxed{x=4+\sqrt{46}\approx 10.78\text{ km/h}\approx 11\text{ km/h to the nearest whole number}.}$$
> Substituting the positive value into the original time equation confirms a total of $2$ hours.
>
> **(d)** Because the wetland photograph placed third and Asha photographed prairie, Asha cannot be third. She is not first either, so **Asha is second**. The first-place photograph must be forest, with a carbon-fibre tripod. Bryn used wood, so Bryn cannot be first. Bryn must be third, and Cai first. The remaining details follow by elimination:
>
> | Student | Habitat | Tripod material | Placing |
> |---|---|---|---|
> | Cai | Forest | Carbon fibre | First |
> | Asha | Prairie | Aluminum | Second |
> | Bryn | Wetland | Wood | Third |
>
> Each attribute is used once, and every clue is satisfied. These deductions determine a unique arrangement.

> [!abstract] Review First
> - [[Math/Rational Expressions & Equations/Evaluating Rational Expressions 1|Evaluating Rational Expressions 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Rational Expressions & Equations/Multiplying and Dividing Rational Expressions 1|Multiplying and Dividing Rational Expressions 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Rational Expressions & Equations/Rational Expressions - Error Analysis 1|Rational Expressions - Error Analysis 1]]
