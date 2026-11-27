---
type: qod
publish: true
course:
  - "Mathematics 30-1"
topic: "Pathway Problems"
show_solution: true
diploma_eligible: true
diploma_ready: false
diploma_screening: strong-candidate-2026-11-22
tags:
  - qod
  - diploma-preparation
qod_id: "QOD-C6AE9DB9FF0113EBC39A19BC"
title: "Pascal's Triangle - Map Pathways 1"
aliases: []
domain: null
learning_order: null
estimated_minutes: null
calculator: null
question_format: null
curriculum_alignment: []
cognitive_level: []
performance_standard: []
source: null
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
curriculum_review_required: null
used_in: []
---

The map shows a cyclist travelling from **Home** to the **Arena**. The cyclist must pass through the **Library**.

At every intersection, the cyclist may move only **one block right** or **one block up**.

Using **Pascal's Triangle**, determine the number of distinct shortest pathways from Home to the Arena that pass through the Library.

![[Pascal Pathway Map Grid 1.png]]

## Solution

> [!example]- Show solution
> 
> Since every valid pathway must pass through the **Library**, split the trip into two smaller pathway problems:
> 
> 1. **Home to Library**
>     
> 2. **Library to Arena**
>     
> 
> Only the junctions in these two regions need to be counted. The other junctions cannot occur on a shortest pathway that passes through the Library.
> 
> Starting at **Home** with (1), use Pascal's Triangle counting: at each junction, add the numbers from the junction directly to the **left** and directly **below**.
> 
> This gives 6  
> 
> shortest pathways from Home to the Library.
> 
> Restart the count at the **Library** with (1), and repeat the same process from the Library to the Arena.
> 
> This gives 10  
> 
> shortest pathways from the Library to the Arena.
> 
> ![[Pascal Pathway Solution Map 1.png]]
> 
> Therefore, by the Fundamental Counting Principle,
> 
> $$
> 6(10)=\boxed{60}.  
> $$

> [!abstract] Review First
> - [[Math/Combinatorics/Pascal's Triangle|Pascal's Triangle]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Combinatorics/Permutations - Map Pathways 1|Permutations - Map Pathways 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Combinatorics/Pascal's Triangle - Map Pathways 2|Pascal's Triangle - Map Pathways 2]]
