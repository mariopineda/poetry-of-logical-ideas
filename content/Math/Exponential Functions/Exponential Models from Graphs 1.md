---
type: qod
publish: true
course:
  - Mathematics 30-2
topic: "Exponential Equations and Regression"
learning_order: 3408
show_solution: false
source: "Original equivalent of CHC Mathematics 30-2 Exponential Functions, Topic 4 Practice"
source_question: 8
domain: "Exponential Functions"
curriculum_alignment: "30-2 Relations and Functions SO6.4–6.6, exponential regression and interpretation"
curriculum_review_required: false
calculator: required
---

Each graph includes two marked points. Determine its exponential equation in the form $y=ab^x$. Show how you obtain both $a$ and $b$.

![[EF_T4_Q08.png]]

> [!abstract] Review First
> - [[Math/Exponential Functions/Common Ratio 4|Common Ratio 4]]
> - [[Math/Exponential Functions/Common Ratio 1|Common Ratio 1]]
> - [[Math/Exponential Functions/Exponential Functions 1|Exponential Functions 1]]
> - [[Math/Exponential Functions/Exponential Graph Characteristics 2|Exponential Graph Characteristics 2]]
> - [[Math/Exponential Functions/Graphing Exponential Functions 1|Graphing Exponential Functions 1]]
> - [[Math/Exponential Functions/Matching Exponential Graphs 1|Matching Exponential Graphs 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Exponential Functions/Exponential Regression - Wetland Coverage 1|Exponential Regression - Wetland Coverage 1]]
> - [[Math/Exponential Functions/Exponential Regression - Used Camera Prices 1|Exponential Regression - Used Camera Prices 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Exponential Functions/Solving Exponential Equations Graphically 1|Solving Exponential Equations Graphically 1]]
> - [[Math/Logarithmic Functions/Logarithmic Functions 1|Logarithmic Functions 1]]

## Solution

> [!example]- Show solution
>
> **Step 1 — Read the marked points.** For each graph, use the labelled coordinates $(0,a)$ and $(1,ab)$. The first gives the coefficient $a$, and dividing the second $y$-value by the first gives the base $b$.
> 
> **Graph A:** The points are $(0,3)$ and $(1,6)$. Thus $a=3$, and
> 
> $$b=\frac{6}{3}=2\implies\boxed{y=3(2)^x}.$$
> 
> **Graph B:** The points are $(0,12)$ and $(1,6)$. Thus $a=12$, and
> 
> $$b=\frac{6}{12}=0.5\implies\boxed{y=12(0.5)^x}.$$
> 
> **Graph both models:** Plot the two marked observations as points, then enter the corresponding exponential equations in `Y=` and draw the curves through those points. Graph A grows because $2>1$; graph B decays because $0<0.5<1$.
> 
> **Why this is not a meaningful statistical regression:** Two precisely defined points determine the two parameters $a$ and $b$ exactly. With only two points, an exponential regression will pass through both but does not provide evidence that real-world data follow an exponential trend. Regression is most useful when several measured points show scatter around the curve.
> 
> **Graphical verification:** The marked coordinates lie directly on the corresponding curves.
> 
> ![[EF_T4_Q08_Solution_Models.png]]
