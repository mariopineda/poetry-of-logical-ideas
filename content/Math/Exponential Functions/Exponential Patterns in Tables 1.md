---
type: qod
publish: true
course:
  - Mathematics 30-2
  - Mathematics 30-1
topic: "Graphs and Equations of Exponential Functions"
learning_order: 3104
show_solution: false
source: "Original equivalent of CHC Mathematics 30-2 Exponential Functions, Topic 1 Practice"
source_question: 4
domain: "Exponential Functions"
curriculum_alignment: "30-2 Relations and Functions SO6.1–6.3, graph/equation characteristics"
curriculum_review_required: false
calculator: allowed
---

For every table, decide whether it represents an exponential function. Explain using successive ratios, state the $y$-intercept, and classify each exponential relationship as growth or decay.

**A**

| $x$ | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---:|---:|---:|---:|---:|---:|
| $y$ | 9 | 27 | 81 | 243 | 729 | 2187 |

**B**

| $x$ | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---:|---:|---:|---:|---:|---:|
| $y$ | 2048 | 512 | 128 | 32 | 8 | 2 |

**C**

| $x$ | -4 | -3 | -2 | -1 | 0 | 1 |
|---|---:|---:|---:|---:|---:|---:|
| $y$ | -7 | -4 | -1 | 2 | 5 | 8 |

**D**

| $x$ | -1 | 0 | 1 | 2 | 3 | 4 |
|---|---:|---:|---:|---:|---:|---:|
| $y$ | 500 | 100 | 20 | 4 | 0.8 | 0.16 |

**E**

| $x$ | -2 | -1 | 0 | 1 | 2 | 3 |
|---|---:|---:|---:|---:|---:|---:|
| $y$ | 8 | 4 | 2 | 5 | 9 | 14 |
> [!abstract] Review First
> - [[Math/Exponential Functions/Common Ratio 1|Common Ratio 1]]
> - [[Math/Exponential Functions/Common Ratio 2|Common Ratio 2]]
> - [[Math/Exponential Functions/Common Ratio 3|Common Ratio 3]]
> - [[Math/Exponential Functions/Exponential Growth and Decay 2|Exponential Growth and Decay 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Exponential Functions/Graphing Exponential Functions 1|Graphing Exponential Functions 1]]
> - [[Math/Exponential Functions/Exponential Graph Characteristics 2|Exponential Graph Characteristics 2]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Exponential Functions/Exponential Regression - Culture Growth 1|Exponential Regression - Culture Growth 1]]
> - [[Math/Sequences and Series/Infinite Geometric Sequences 2|Infinite Geometric Sequences 2]]

## Solution

> [!example]- Show solution
>
> **Method:** When $x$ increases in equal steps, divide each $y$-value by the previous one. A consistent ratio indicates an exponential model $y=ab^x$. Find the $y$-intercept by locating the row where $x=0$, even if it is not the first row.
> 
> | Table | Ratios or differences | Exponential? | $y$-intercept | Interpretation |
> |---|---|---|---|---|
> | A | $27/9=81/27=243/81=3$ | Yes | $9$ | Growth, $y=9(3)^x$ |
> | B | $512/2048=128/512=\frac14$ | Yes | $2048$ | Decay, $y=2048(\frac14)^x$ |
> | C | Differences are consistently $+3$; ratios change | No | $5$ | Linear, not exponential |
> | D | $100/500=20/100=\frac15$ | Yes | $100$ | Decay, $y=100(\frac15)^x$ |
> | E | Ratios $4/8$, $2/4$, $5/2$ are not equal | No | $2$ | Not exponential |
> 
> **Reasoning check:** For table d, $x=-1$ gives $100(\frac15)^{-1}=500$, which matches the table. A constant difference is evidence for a linear function; a constant ratio is evidence for an exponential function.
