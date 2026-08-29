---
type: qod
publish: true
courses:
  - "Math 30-1"
  - "Math 30-2"
topic: "Fundamental Counting Principle"
show_solution: false
---

## Question

A public health agency is coordinating the distribution of vaccines to remote clinics. They need to plan routes for delivery trucks. There are 4 main distribution hubs.

- There are 5 possible routes from the central warehouse to Distribution Hub A.    
- There are 3 possible routes from Distribution Hub A to Distribution Hub B.
- There are 2 possible routes from Distribution Hub B to Distribution Hub C.
- There are 4 possible routes from the central warehouse directly to Distribution Hub C.

Assume a delivery truck can only take one route between any two locations.

a) How many different routes can a delivery truck take to deliver vaccines from the central warehouse to Distribution Hub C, passing through both Hub A and Hub B?

b) How many different routes can a delivery truck take to deliver vaccines from the central warehouse to Distribution Hub C using any combination of routes?

_Hint: Draw a schematic of the hubs and their connecting routes_

## Solution

```tikz
\begin{document}
\begin{tikzpicture}
% Define nodes
 \node (warehouse) at (0,0) {Central Warehouse};
 \node (hubA) at (3,0) {Hub A};
 \node (hubB) at (6,0) {Hub B};
 \node (hubC) at (9,0) {Hub C};

 % Draw routes
 \draw[->] (warehouse) to [bend left=20] node[above] {5 routes} (hubA);
 \draw[->] (hubA) to [bend left=20] node[above] {3 routes} (hubB);
 \draw[->] (hubB) to [bend left=20] node[above] {2 routes} (hubC);
 \draw[->] (warehouse) to [bend right=20] node[below] {4 routes} (hubC);

\end{tikzpicture}
\end{document}
```
a) To find the number of routes from the central warehouse to Distribution Hub C, passing through both Hub A and B, we use the fundamental counting principle.
FCP: $5 \times 3 \times 2=30$
There are 30 different routes for a delivery truck to take to deliver vaccines from the central warehouse to Distribution Hub C, passing through both Hub A and Hub B.

b) To find the number of routes from the central warehouse to Distribution Hub C using any combination of routes, we need to consider the direct routes and the routes through Hub A and Hub B.

We calculated the routes through A and B in part a. For the direct routes, we were given that there are 4 possible routes from the central warehouse directly to Distribution Hub C.

Using the fundamental counting principle, we add the routes to get the total number of possible routes.

$30 + 4 = 34$

There are 34 different routes a delivery truck can take to deliver vaccines from the central warehouse to Distribution Hub C.

$3 + 2 + 6 = 11$ routes
