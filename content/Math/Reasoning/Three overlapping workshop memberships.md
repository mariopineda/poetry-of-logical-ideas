---
type: qod
publish: true
course:
- Mathematics 30-2
topic: Set Theory and Logic
show_solution: true
qod_id: DIP-30-2-N000
diploma_eligible: true
diploma_ready: true
review_status: ai-reviewed-question-and-solution-batch15
question_format: written-response
diploma_cognitive_level: Problem Solving
diploma_performance_standard: Excellence
diploma_outcomes: '2'
tags:
- qod
- diploma-preparation
- written-response
diploma_origin: supplementary
diploma_source_equivalence: not_applicable
assessment_metadata_status: author_estimated
certified_batch: 15
review_date: '2026-11-22'
title: "Three overlapping workshop memberships"
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
source_format: null
source_equivalence: null
source_percent_correct: null
source_mean_score: null
assessment_metadata_origin: null
curriculum_review_required: null
used_in: []
---

A community centre surveyed 52 adults about participation in **pottery (P)**, **woodworking (W)**, and **photography (F)** workshops.

- 7 attended all three.
- 15 attended both woodworking and photography.
- 12 attended both pottery and photography.
- 11 attended both pottery and woodworking.
- 12 attended photography only.
- 26 attended pottery.
- 3 attended none.

Determine how many adults attended woodworking. Explain how you account for people enrolled in more than one workshop.

**Draw and label a three-set Venn diagram** to justify your result.

![[batch15-workshops-venn-question.svg]]

## Solution

> [!example]- Show solution
> Each pair count includes the $7$ adults attending all three workshops. Thus
>
> $$PW\text{ only}=11-7=4,\quad PF\text{ only}=12-7=5,\quad WF\text{ only}=15-7=8.$$
>
> Pottery only is $26-(4+5+7)=10$. Photography only is $12$. Since $3$ attended none, $52-3=49$ attended at least one workshop.
>
> Let $w$ be woodworking only:
>
> $$w+10+12+4+5+8+7=49\implies w=3.$$
>
> Completed Venn diagram:
>
> ![[batch15-workshops-venn-solution.svg]]
>
> Total woodworking is
>
> $$|W|=3+4+8+7=\boxed{22}.$$
>
> **Check:** The seven interior regions sum to $49$; adding $3$ outside gives $52$.

> [!abstract] Review First
> - [[Math/Set Theory/Set Theory - Venn - Practice 1 - Two Clubs at an Environmental School|Set Theory - Venn - Practice 1 - Two Clubs at an Environmental School]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Set Theory/Set Theory - Venn - Practice 7 - Workshop Preferences|Set Theory - Venn - Practice 7 - Workshop Preferences]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Set Theory/Set Theory - Venn - Practice 10 - A Flawed Science Course Survey|Set Theory - Venn - Practice 10 - A Flawed Science Course Survey]]
