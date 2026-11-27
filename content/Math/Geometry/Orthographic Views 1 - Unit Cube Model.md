---
type: qod
publish: true
course:
  - Mathematics 20-3
topic: "Two-Dimensional Representations"
show_solution: true
qod_id: "QOD-81E7EEE75202BDE499A757CC"
title: "Orthographic Views 1 - Unit Cube Model"
aliases: []
domain: null
tags: []
learning_order: null
estimated_minutes: null
calculator: null
question_format: null
curriculum_alignment: []
cognitive_level: []
performance_standard: []
diploma_eligible: null
diploma_ready: null
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
The image shows a new solid built from identical unit cubes. **Draw its front, top, and right-side views.** For the top view, also draw a **mat plan** indicating the height of every occupied stack. Use the explicit **FRONT VIEW** and **RIGHT VIEW** markers beneath the model.

![Question diagram](/assets/orthographic-01-question.svg)

## Solution

> [!example]- Show solution
>
> **Step 1 — Locate the viewing directions.** The **FRONT VIEW** and **RIGHT VIEW** arrows below the model determine which faces to look at. In an orthographic view, look directly toward the solid: do not draw diagonal/isometric edges. Each occupied unit-cube column is represented by a rectangle of the correct height.
>
> **Step 2 — Make the numbered top/mat plan.** Looking straight down, draw one square for each potential stack position and write the number of cubes in each occupied stack. A $0$ means there is no cube at that position. Read rows **front to back**, and entries **left to right**:
>
> $[2, 1, 0]$; $[1, 1, 0]$
>
> For the *ordinary top view*, show the footprint (occupied positions), without needing to include the height numbers. The occupancy rows are $[1, 1, 0]$; $[1, 1, 0]$. The numbered mat plan adds the height information needed to distinguish stacks.
>
> **Step 3 — Draw the front view.** For every left-to-right position, use the **tallest stack** anywhere behind that position. Hidden stacks do not increase the visible outline. Here the column heights come from: $\max(2, 1)=2$; $\max(1, 1)=1$; $\max(0, 0)=0$.
>
> Therefore the **front silhouette heights**, left to right, are $[2, 1, 0]$. Draw each occupied position as a column of that many unit squares, aligned on the same baseline; leave any zero-height positions empty.
>
> **Step 4 — Draw the right-side view.** Looking straight at the right side, each depth position is represented by the tallest stack across its row: $\max(2, 1, 0)=2$; $\max(1, 1, 0)=1$.
>
> Therefore the **right-side silhouette heights**, indexed **front to back**, are $[2, 1]$. Observe the direction marker when arranging these positions on the page.
>
> **Step 5 — Check all three drawings.** The top view must occupy exactly the positions in the mat plan; the front silhouette must agree with the highest stack in each column; and the right silhouette must agree with the highest stack in each row. The views need consistent unit-square spacing, not perspective.
>
> ![Worked solution diagram](/assets/orthographic-01-solution.svg)

> [!abstract] Review First
> _No linked questions yet._

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Geometry/Orthographic Views 2 - Unit Cube Model|Orthographic Views 2 - Unit Cube Model]]
> - [[Math/Geometry/Surface Area and Volume - From Net to Surface Area|Surface Area and Volume - From Net to Surface Area]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Geometry/Isometric Drawings 1 - Reconstructing a Solid|Isometric Drawings 1 - Reconstructing a Solid]]
> - [[Math/Geometry/Isometric Drawings 2 - Reconstructing a Solid|Isometric Drawings 2 - Reconstructing a Solid]]
> - [[Math/Geometry/Isometric Drawings 3 - Reconstructing a Solid|Isometric Drawings 3 - Reconstructing a Solid]]
> - [[Math/Geometry/Isometric Drawings 4 - Reconstructing a Solid|Isometric Drawings 4 - Reconstructing a Solid]]
> - [[Math/Geometry/Isometric Drawings 5 - Reconstructing a Solid|Isometric Drawings 5 - Reconstructing a Solid]]
> - [[Math/Geometry/Isometric Drawings 6 - Reconstructing a Solid|Isometric Drawings 6 - Reconstructing a Solid]]
> - [[Math/Geometry/Orthographic Views 2 - Unit Cube Model|Orthographic Views 2 - Unit Cube Model]]
> - [[Math/Geometry/Orthographic Views 3 - Unit Cube Model|Orthographic Views 3 - Unit Cube Model]]
> - [[Math/Geometry/Orthographic Views 4 - Unit Cube Model|Orthographic Views 4 - Unit Cube Model]]
> - [[Math/Geometry/Orthographic Views 5 - Unit Cube Model|Orthographic Views 5 - Unit Cube Model]]
> - [[Math/Geometry/Orthographic Views 6 - Unit Cube Model|Orthographic Views 6 - Unit Cube Model]]
> - [[Math/Geometry/Orthographic Views 7 - Unit Cube Model|Orthographic Views 7 - Unit Cube Model]]
> - [[Math/Geometry/Orthographic Views 8 - Unit Cube Model|Orthographic Views 8 - Unit Cube Model]]
> - [[Math/Geometry/Perspective Drawings 1 - One-Point Prism|Perspective Drawings 1 - One-Point Prism]]
