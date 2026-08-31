---
type: qod
publish: true
courses:
  - "Math 10C"
topic: "Systems of Linear Equations"
show_solution: false
prerequisites:
  - "[[Linear Relations 1]]"
related:
  - "[[Systems of Linear Equations 1]]"
---

## Question

1. Solve the following system of equation by substitution
   $$
   \begin{array}{rcr}
   x+3y & = & 9 \\
   2x-y & = & 4
   \end{array}
   $$
2. Solve the following system of equation by elimination
   $$
   \begin{array}{rcr}
   6x-5y & = & 7 \\
   8x-3y & = & -9
   \end{array}
   $$

## Solution

> [!example]- Show solution
>
> ### A.
>
> 1. Express $x+3y=9$ in terms of $x$ as $x=9-3y$
> 2. Substitute the expression from step 1 into the second equation $2x-y=4$ and obtain $2(9-3y)-y=4$.
> 3. Solve the single variable equation:
>    $$
>    \begin{array}{rcl}
>    2(9-3y)-y & = & 4 \\
>    18-6y-y & = & 4 \\
>    18-7y & = & 4 \\
>    -7y & = & 4-18 \\
>    -7y & = & -14 \\
>    y & = & \frac{\displaystyle -14}{\displaystyle -7} \\
>    y & = & 2
>    \end{array}
>    $$
> 4. Substitute the value from step 3 ($y=2$) into one of the original equations and solve for the second variable:
>    $$
>    \begin{array}{rcl}
>    2x-y & = & 4 \\
>    2x-2 & = & 4 \\
>    2x & = & 6 \\
>    x & = & 3
>    \end{array}
>    $$
>    The solution is $(3,2)$
> 5. Verify the solution:
>    $$
>    \begin{array}{rcl}
>    x+3y & = & 9 \\
>    3+3 \times 2 & = & 9 \\
>    3+6 & = & 9 \\
>    9 & = & 9\\
>    \mbox{LHS} & = & \mbox{RHS} \\
>    & & \\
>    2x-y & = & 4 \\
>    2 \times 3 - 2 & = & 4 \\
>    6 - 2 & = & 4 \\
>    4 & = & 4 \\
>    \mbox{LHS} & = & \mbox{RHS}
>    \end{array}
>    $$
>
> ### B.
>
> 1. Multiply $6x-5y=7$ by 3 and $8x-3y=-9$ by 5 to obtain:
>    $$
>    \begin{array}{rcr}
>    18x-15y & = & 21 \\
>    40x-15y & = & -45
>    \end{array}
>    $$
> 2. Subtract the two equation to eliminate the $y$ variable:
>    $$
>    \begin{array}{rrcr}
>    & 18x-15y & = & 21 \\
>    - & 40x-15y & = & -45 \\
>    & -22x & = & 66
>    \end{array}
>    $$
> 3. Solve the single variable equation:
>    $$
>    \begin{array}{rcl}
>    -22x & = & 66 \\
>    x & = & \frac{\displaystyle 66}{\displaystyle -22} \\
>    x & = & -3
>    \end{array}
>    $$
> 4. Substitute the value from step 3 ($x=-3$) into one of the original equations and solve for the second variable:
>    $$
>    \begin{array}{rcl}
>    6x-5y & = & 7 \\
>    6(-3)-5y & = & 7 \\
>    -18-5y & = & 7 \\
>    -5y & = & 25 \\
>    y & = & \frac{\displaystyle 25}{\displaystyle -5} \\
>    y & = & -5
>    \end{array}
>    $$
>    The solution is $(-3,-5)$
> 5. Verify the solution:
>    $$
>    \begin{array}{rcl}
>    6x-5y & = & 7 \\
>    6(-3)-5(-5) & = & 7 \\
>    -18+25 & = & 7 \\
>    7 & = & 7\\
>    \mbox{LHS} & = & \mbox{RHS} \\
>    & & \\
>    8x-3y & = & -9 \\
>    8(-3)-3(-5) & = & -9 \\
>    -24+15 & = & -9 \\
>    -9 & = & -9 \\
>    \mbox{LHS} & = & \mbox{RHS}
>    \end{array}
>    $$
>

