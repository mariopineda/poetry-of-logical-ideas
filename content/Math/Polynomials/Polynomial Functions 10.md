---
type: qod
publish: true
courses:
  - "Math 30-2"
topic: "Polynomial Functions"
show_solution: false
prerequisites:
  - "[[Function Notation 1]]"
related:
  - "[[Polynomial Functions 9]]"
  - "[[Polynomial Functions 11]]"
  - "[[Polynomial Functions 8]]"
  - "[[Polynomial Functions 27 - Building a Graph]]"
---

## Question

The height of a ball after it is thrown is modelled by

$$
h(t)=-5(t-2)^2+20
$$

where $h$ is the height of the ball, in metres, and $t$ is the time, in seconds.

1. What is the **maximum height** of the ball, and when does it occur?
2. After it is thrown, when does the ball **return to the ground**?
3. State an appropriate **domain and range** for the ball's flight.

Use your graphing calculator. Graph the function and use the graph to answer the questions. Record the relevant coordinates.

## Solution

> [!example]- Show solution
>
> ### Method 1: Algebraic method
>
> #### 1.
>
> The function is written in vertex form:
>
> $$
> h(t)=-5(t-2)^2+20
> $$
>
> The vertex is $(2,20)$.
>
> The ball reaches a **maximum height of 20 m after 2 s**.
>
> #### 2.
>
> The ball is on the ground when $h(t)=0$:
>
> $$
> -5(t-2)^2+20=0
> $$
>
> $$
> (t-2)^2=4
> $$
>
> $$
> t=0 \quad \text{or} \quad t=4
> $$
>
> The first value represents the instant the ball is thrown. It **returns to the ground after 4 s**.
>
> #### 3.
>
> The ball is in the air from $t=0$ until $t=4$:
>
> $$
> 0\le t\le4
> $$
>
> Its height ranges from ground level to its maximum height:
>
> $$
> 0\le h\le20
> $$
>
> ### Method 2: Graphical method
>
> Enter the function into the graphing calculator:
>
> $$
> Y_1=-5(X-2)^2+20
> $$
>
> A useful viewing window is:
>
> $$
> 0\le X\le5, \qquad -10\le Y\le25
> $$
>
> ![[Polynomial Functions 10 Graph.png]]
>
> On the graph, the horizontal coordinate represents time and the vertical coordinate represents the height of the ball.
>
> #### 1. Find the maximum height
>
> Press `2nd` `TRACE` to open the **CALC** menu. Select `4:maximum`, and choose a left bound and right bound on opposite sides of the highest point.
>
> The calculator gives the maximum point $(2,20)$. Therefore, the ball reaches a **maximum height of 20 m after 2 s**.
>
> #### 2. Find when the ball returns to the ground
>
> The ball is on the ground when $h=0$, so locate the right-hand $x$-intercept. Press `2nd` `TRACE`, select `2:zero`, and choose a left bound and right bound around that intercept.
>
> The calculator gives the intercept $(4,0)$. Therefore, the ball **returns to the ground after 4 s**.
>
> The other intercept, $(0,0)$, represents the instant the ball is thrown.
>
> #### 3. Determine the contextual domain and range
>
> Only the part of the graph from $(0,0)$ to $(4,0)$ represents the flight. Therefore,
>
> $$
> 0\le t\le4
> $$
>
> and
>
> $$
> 0\le h\le20.
> $$
