---
type: qod
publish: true
course:
  - Mathematics 30-2
  - Mathematics 30-1
topic: Solving Exponential Equations
learning_order: 3303
show_solution: true
source: Original equivalent of CHC Mathematics 30-2 Exponential Functions, Topic 3 Practice
source_question: 3
domain: Exponential Functions
curriculum_alignment: 30-2 Relations and Functions SO5.1–5.3, exponential equations
curriculum_review_required: false
calculator: required
qod_id: QOD-532433ADFEA3D4E6237B85B3
title: Solving Exponential Equations Graphically 1
aliases: []
tags: []
estimated_minutes:
question_format:
cognitive_level: []
performance_standard: []
diploma_eligible:
diploma_ready:
source_kind:
source_topic:
source_format:
source_equivalence:
source_percent_correct:
source_mean_score:
assessment_metadata_origin:
review_status:
review_date:
---

Use graphing technology to find every real solution to the nearest tenth.

A. $8^{1-x}=2^{x+3}$

B. $3^{2x}=5^x$

C. $2^{x+2}=4^x+2$

D. $6^{x-1}=(1/3)^{x+2}$.

> [!info]- Hint 1
> At an intersection, both expressions have the same output. Which coordinate represents the solution? In part C, consider whether your graphing window is wide enough before concluding that you have found every solution.

## Solution

> [!example]- Show solution
>
> **Important note:** Answers are requested to the nearest tenth, so an exact solution of $x=0$ should be written as $x=0.0$.
>
> **Method 1 — Graphing calculator (no logarithms needed)**
>
> For each part, enter the left side in `Y1` and the right side in `Y2`. Then use `2nd` → `TRACE` → `5:intersect`. The **$x$-coordinate** of each intersection is the solution.
>
> **A.** $8^{1-x}=2^{x+3}$
>
> - Enter `Y1=8^(1-X)` and `Y2=2^(X+3)`.
> - A suitable window is `Xmin=-2`, `Xmax=2`, `Ymin=0`, `Ymax=20`.
> - The graphs intersect at about $(0.0, 8)$.
>
> ![[QOD-532433ADFEA3D4E6237B85B3-A.png]]
>
> So the solution is
>
> $$
> \boxed{x=0.0}
> $$
>
> **Quick check:**
>
> $$
> 8^{1-0}=8^1=8
> $$
>
> $$
> 2^{0+3}=2^3=8
> $$
>
> So $x=0$ is correct.
>
> **B.** $3^{2x}=5^x$
>
> - Enter `Y1=3^(2X)` and `Y2=5^X`.
> - A suitable window is `Xmin=-3`, `Xmax=3`, `Ymin=0`, `Ymax=10`.
> - The graphs intersect at about $(0.0, 1)$.
>
> ![[QOD-532433ADFEA3D4E6237B85B3-B.png]]
>
> So the solution is
>
> $$
> \boxed{x=0.0}
> $$
>
> This is reasonable because any nonzero base raised to the power $0$ equals $1$.
>
> **C.** $2^{x+2}=4^x+2$
>
> - Enter `Y1=2^(X+2)` and `Y2=4^X+2`.
> - A suitable window is `Xmin=-3`, `Xmax=3`, `Ymin=0`, `Ymax=18`.
> - There are **two intersections**, not one.
>
> ![[QOD-532433ADFEA3D4E6237B85B3-C.png]]
>
> The solutions are approximately
>
> $$
> \boxed{x=-0.8\text{ or }x=1.8}
> $$
>
> **D.** $6^{x-1}=(1/3)^{x+2}$
>
> - Enter `Y1=6^(X-1)` and `Y2=(1/3)^(X+2)`.
> - A suitable window is `Xmin=-3`, `Xmax=2`, `Ymin=0`, `Ymax=3.5`.
> - The graphs intersect once, at about $(-0.1, 0.13)$.
>
> ![[QOD-532433ADFEA3D4E6237B85B3-D.png]]
>
> So the solution is
>
> $$
> \boxed{x=-0.1}
> $$
>
> **Method 2 — Algebraic verification without logarithms (where possible)**
>
> **A.**
>
> $$
> 8^{1-x}=2^{x+3}
> $$
>
> Since $8=2^3$,
>
> $$
> (2^3)^{1-x}=2^{x+3}
> $$
>
> $$
> 2^{3-3x}=2^{x+3}
> $$
>
> Because the bases are the same, set the exponents equal:
>
> $$
> 3-3x=x+3
> $$
>
> $$
> -4x=0
> $$
>
> $$
> x=0
> $$
>
> So, to the nearest tenth,
>
> $$
> \boxed{x=0.0}
> $$
>
> **B.**
>
> $$
> 3^{2x}=5^x
> $$
>
> Rewrite the left side:
>
> $$
> 3^{2x}=(3^2)^x=9^x
> $$
>
> So
>
> $$
> 9^x=5^x
> $$
>
> Divide both sides by $5^x$:
>
> $$
> \left(\frac95\right)^x=1
> $$
>
> For a positive base other than $1$, the only way $a^x=1$ is when $x=0$.
>
> $$
> \boxed{x=0.0}
> $$
>
> **C.**
>
> $$
> 2^{x+2}=4^x+2
> $$
>
> Let
>
> $$
> u=2^x
> $$
>
> Then
>
> $$
> 2^{x+2}=4\cdot2^x=4u
> $$
>
> and
>
> $$
> 4^x=(2^2)^x=2^{2x}=(2^x)^2=u^2
> $$
>
> So the equation becomes
>
> $$
> 4u=u^2+2
> $$
>
> $$
> u^2-4u+2=0
> $$
>
> Solve the quadratic:
>
> $$
> u=\frac{4\pm\sqrt{16-8}}{2}=2\pm\sqrt2
> $$
>
> Since $u=2^x$, we now solve
>
> $$
> 2^x=2-\sqrt2\quad\text{or}\quad2^x=2+\sqrt2
> $$
>
> At this point, because logarithms have not yet been covered, use the graph from Method 1 to read the approximate solutions:
>
> $$
> \boxed{x\approx-0.8\text{ or }x\approx1.8}
> $$
>
> **D.**
>
> This equation does not simplify nicely to a common base:
>
> $$
> 6^{x-1}=(1/3)^{x+2}
> $$
>
> So **the intended non-logarithmic method is the graphing method** from Method 1.
>
> $$
> \boxed{x\approx-0.1}
> $$
>
> **Extension — Algebraic method with logarithms**
>
> If logarithms are allowed, parts C and D can also be completed algebraically.
>
> **C.** From
>
> $$
> 2^x=2-\sqrt2\quad\text{or}\quad2^x=2+\sqrt2,
> $$
>
> we get
>
> $$
> x=\frac{\ln(2-\sqrt2)}{\ln2}\approx-0.8
> $$
>
> or
>
> $$
> x=\frac{\ln(2+\sqrt2)}{\ln2}\approx1.8
> $$
>
> **D.**
>
> $$
> 6^{x-1}=(1/3)^{x+2}
> $$
>
> Taking natural logarithms of both sides gives
>
> $$
> (x-1)\ln6=(x+2)\ln(1/3)
> $$
>
> Since $\ln(1/3)=-\ln3$,
>
> $$
> (x-1)\ln6=-(x+2)\ln3
> $$
>
> $$
> x\ln6-\ln6=-x\ln3-2\ln3
> $$
>
> $$
> x(\ln6+\ln3)=\ln6-2\ln3
> $$
>
> $$
> x=\frac{\ln6-2\ln3}{\ln6+\ln3}\approx-0.1403
> $$
>
> So, to the nearest tenth,
>
> $$
> \boxed{x=-0.1}
> $$
>
> **Summary of answers**
>
> $$
> \text{A. }x=0.0
> $$
>
> $$
> \text{B. }x=0.0
> $$
>
> $$
> \text{C. }x=-0.8\text{ or }x=1.8
> $$
>
> $$
> \text{D. }x=-0.1
> $$

> [!abstract] Review First
> - [[Math/Exponential Functions/Exponential Equations 6|Exponential Equations 6]]
> - [[Math/Exponential Functions/Exponential Equations 3|Exponential Equations 3]]
> - [[Math/Exponential Functions/Exponential Equations 4|Exponential Equations 4]]
> - [[Math/Exponential Functions/Exponential Models from Graphs 1|Exponential Models from Graphs 1]]
> - [[Math/Exponential Functions/Solving Exponential Graphs 1|Solving Exponential Graphs 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Exponential Functions/Solving Exponential Equations 1|Solving Exponential Equations 1]]
> - [[Math/Exponential Functions/Doubling Time - Bacteria 2|Doubling Time - Bacteria 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Logarithmic Functions/Logarithmic Functions 1|Logarithmic Functions 1]]
> - [[Math/Logarithmic Functions/Logarithm Laws 2|Logarithm Laws 2]]
