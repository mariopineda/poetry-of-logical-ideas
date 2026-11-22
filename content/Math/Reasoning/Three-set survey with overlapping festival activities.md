---
type: qod
publish: true
course:
- Mathematics 30-2
topic: Set Theory and Probability
show_solution: true
qod_id: DIP-30-2-EX008
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
---

A community festival surveys $50$ visitors about three activities: painting ($P$), music ($M$), and hiking ($H$). Exactly $4$ tried all three; $12$ tried both painting and music, $9$ both painting and hiking, and $11$ both music and hiking (each pair count includes the four who tried all three). Exactly $10$ tried only hiking, $23$ tried painting in total, and $2$ tried none. Determine the total number who tried music. Draw and label a three-set Venn diagram as part of your working.

![[batch15-festival-venn-question.svg]]

## Solution

> [!example]- Show solution
> The $4$ visitors who attended all three activities belong to each reported pair count. Therefore the regions for exactly two activities are
>
> $$PM\text{ only}=12-4=8,\quad PH\text{ only}=9-4=5,\quad MH\text{ only}=11-4=7.$$
>
> Painting only is $23-(8+5+4)=6$. Hiking only is $10$ and neither is $2$. Let $m$ be music only:
>
> $$6+8+5+4+7+10+m+2=50\implies m=8.$$
>
> The completed Venn diagram is:
>
> ![[batch15-festival-venn-solution.svg]]
>
> Hence the number attending music is
>
> $$|M|=8+8+7+4=\boxed{27}.$$
>
> **Check:** The eight disjoint regions add to $50$, and each pair total and the painting total agree with the prompt.

> [!abstract] Review First
> - [[Math/Set Theory/Set Theory - Venn - Practice 2 - Correcting a Survey Diagram|Set Theory - Venn - Practice 2 - Correcting a Survey Diagram]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Set Theory/Set Theory - Venn - Practice 7 - Workshop Preferences|Set Theory - Venn - Practice 7 - Workshop Preferences]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Set Theory/Set Theory - Venn - Practice 10 - A Flawed Science Course Survey|Set Theory - Venn - Practice 10 - A Flawed Science Course Survey]]
