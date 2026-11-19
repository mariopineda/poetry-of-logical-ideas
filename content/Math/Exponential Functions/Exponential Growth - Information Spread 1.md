---
type: qod
publish: true
course:
  - Mathematics 30-2
  - Mathematics 30-1
topic: "Graphs and Equations of Exponential Functions"
learning_order: 3112
show_solution: false
source: "Original equivalent of CHC Mathematics 30-2 Exponential Functions, Topic 1 Practice"
source_question: 12
domain: "Exponential Functions"
curriculum_alignment: "30-2 Relations and Functions SO6.1–6.3, graph/equation characteristics"
curriculum_review_required: false
calculator: allowed
---

A local environmental club is promoting a community creek-cleanup event. Four club members are the first people to know about the event. During the first hour, each member tells three people who have not yet heard the news. During the next hour, each newly informed person tells three more people, with no overlap between groups. Suppose this idealized pattern continues for several hours, even though a real community has a limited population.

### A.

Make a table for the number of *new* people informed at hours $0$ through $5$.

### B.

Explain whether the data are exponential.

### C.

Graph the model and predict the number newly informed in hour $8$.

> [!abstract] Review First
> - [[Math/Exponential Functions/Exponential Growth 1|Exponential Growth 1]]
> - [[Math/Exponential Functions/Common Ratio 4|Common Ratio 4]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Exponential Functions/Caffeine Decay 1|Caffeine Decay 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Exponential Functions/Exponential Growth - Comparing Investments 1|Exponential Growth - Comparing Investments 1]]

## Solution

> [!example]- Show solution
>
> **Step 1 — Recognize the pattern.** Four club members begin the chain at hour $0$. Each person tells three new people, so the number of **new** recipients is multiplied by $3$ each hour.
> 
> | Hour $t$ | 0 | 1 | 2 | 3 | 4 | 5 |
> |---|---:|---:|---:|---:|---:|---:|
> | New recipients $N(t)$ | 4 | 12 | 36 | 108 | 324 | 972 |
> 
> **Step 2 — Build the exponential model.** Because the successive ratio is $3$, with initial value $4$,
> 
> $$N(t)=4(3)^t.$$
> 
> **Step 3 — Graph the model.** Plot $(0,4)$, $(1,12)$, $(2,36)$, and so forth. Use a vertical scale large enough for the rapid increase.
> 
> **Step 4 — Predict at hour $8$.**
> 
> $$N(8)=4(3)^8=4(6561)=\boxed{26\,244\text{ new people}}.$$
> 
> **Important:** The question asks for new people reached in a particular hour. Adding all previous hours would calculate a **cumulative** total, which is a different question. Real information networks eventually overlap, so this idealized pattern cannot continue forever.
