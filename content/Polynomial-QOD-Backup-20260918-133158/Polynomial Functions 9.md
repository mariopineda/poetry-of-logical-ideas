---
type: qod
publish: true
courses:
  - Math 30-2
topic: Polynomial Functions
show_solution: true
prerequisites:
  - "[[Function Notation 1]]"
  - "[[Linear Relations 1]]"
related:
  - "[[Polynomial Functions 8]]"
  - "[[Polynomial Functions 10]]"
  - "[[Domain and Range - Reading Graphs 2]]"
---

## Question

A small water tank contains **750 L** of water. It is being drained at a constant rate. The amount of water remaining after $t$ minutes is modelled by

$$
V(t)=750-30t
$$

where $V$ is the volume of water, in litres.

1. How much water remains after **8 minutes**?
2. How long will it take for the tank to become empty?
3. State an appropriate **domain and range** for this situation.

Use your graphing calculator. Graph the function and use the graph to answer the questions. Record the relevant coordinates.

## Solution

> [!example]- Show solution
>
> ### Method 1: Algebraic method
>
> #### 1.
>
> Substitute $t=8$:
>
> $$
> V(8)=750-30(8)=750-240=510
> $$
>
> **510 L** of water remains.
>
> #### 2.
>
> The tank is empty when $V(t)=0$:
>
> $$
> 750-30t=0
> $$
>
> $$
> 30t=750
> $$
>
> $$
> t=25
> $$
>
> The tank becomes empty after **25 minutes**.
>
> #### 3.
>
> Time begins at $0$ minutes and ends when the tank is empty at $25$ minutes:
>
> $$
> 0\le t\le25
> $$
>
> The volume begins at $750$ L and decreases to $0$ L:
>
> $$
> 0\le V\le750
> $$
>
> ### Method 2: Graphical method
>
> Enter the function into the graphing calculator:
>
> $$
> Y_1=750-30X
> $$
>
> A useful viewing window is:
>
> $$
> 0\le X\le30, \qquad -100\le Y\le800
> $$
>
> ![[Polynomial Functions 9 Graph.png]]
>
> On the graph, the horizontal coordinate represents time and the vertical coordinate represents the volume of water remaining.
>
> #### 1. Find the volume after 8 minutes
>
> Press `2nd` `TRACE` to open the **CALC** menu. Select `1:value`, enter $X=8$, and press `ENTER`.
>
> The calculator displays the point $(8,510)$. Therefore, **510 L** of water remains after 8 minutes.
>
> #### 2. Find when the tank is empty
>
> The tank is empty when $V=0$, so locate the $x$-intercept. Press `2nd` `TRACE`, select `2:zero`, and choose a left bound and right bound around the intercept.
>
> The calculator gives the intercept $(25,0)$. Therefore, the tank is empty after **25 minutes**.
>
> #### 3. Determine the contextual domain and range
>
> Only the portion of the graph from $(0,750)$ to $(25,0)$ represents the situation. Therefore,
>
> $$
> 0\le t\le25
> $$
>
> and
>
> $$
> 0\le V\le750.
> $$
