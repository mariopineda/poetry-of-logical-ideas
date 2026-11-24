---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Trigonometric Derivatives"
show_solution: true
qod_id: "QOD-312DA705388D8E1630CFF4D1"
title: "Derivative of Trigonometric Functions 1b"
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
---

Differentiate $\tan x$ using first principles.

## Solution

> [!example]- Show solution
>
> To differentiate $\tan x$ using first principles, let's recall that $\tan x = \frac{\displaystyle \sin x}{\displaystyle \cos x}$. We'll use the definition of the derivative:
> $$ f'(x) = \lim_{{h \to 0}} \frac{f(x+h) - f(x)}{h} $$
> Applying this to $\tan x$, we have:
> $$
> \begin{align*}
> y' &= \lim_{{h \to 0}} \frac{\tan(x+h) - \tan x}{h} \\
> &= \lim_{{h \to 0}} \frac{\frac{\displaystyle \sin(x+h)}{\displaystyle \cos(x+h)} - \frac{\displaystyle \sin x}{\displaystyle \cos x}}{h} \\
> &= \lim_{{h \to 0}} \frac{\sin(x+h)\cos x - \sin x \cos(x+h)}{h\cos(x+h)\cos x} \\
> &= \lim_{{h \to 0}} \frac{\sin x \cos h + \cos x \sin h - \sin x \cos x - \sin h \cos x}{h\cos(x+h)\cos x} \\
> &= \lim_{{h \to 0}} \frac{\sin x (\cos h - \cos x) + \cos x (\sin h - \sin x)}{h\cos(x+h)\cos x} \\
> &= \lim_{{h \to 0}} \frac{\sin x (\cos h - \cos x)}{h\cos(x+h)\cos x} + \lim_{{h \to 0}} \frac{\cos x (\sin h - \sin x)}{h\cos(x+h)\cos x} \\
> &= \lim_{{h \to 0}} \frac{\sin x (\cos h - \cos x)}{h} \cdot \lim_{{h \to 0}} \frac{1}{\cos(x+h)\cos x} + \lim_{{h \to 0}} \frac{\cos x (\sin h - \sin x)}{h\cos(x+h)\cos x} \\
> &= \sin x \cdot \frac{1}{\cos^2 x} + \cos x \cdot \lim_{{h \to 0}} \frac{\sin h - \sin x}{h\cos(x+h)} \\
> &= \frac{\sin x}{\cos^2 x} + \cos x \cdot \lim_{{h \to 0}} \frac{\sin h - \sin x}{h} \cdot \lim_{{h \to 0}} \frac{1}{\cos(x+h)} \\
> &= \frac{\sin x}{\cos^2 x} + \cos x \cdot \lim_{{h \to 0}} \frac{\sin h - \sin x}{h} \cdot \frac{1}{\cos x} \\
> &= \frac{\sin x}{\cos^2 x} + \cos x \cdot \lim_{{h \to 0}} \frac{\sin h - \sin x}{h} \cdot \lim_{{h \to 0}} \frac{1}{\cos h} \\ &= \frac{\sin x}{\cos^2 x} + \cos x \cdot \lim_{{h \to 0}} \frac{\sin h - \sin x}{h} \cdot \lim_{{h \to 0}} \frac{1}{\cos h} \\
> &= \frac{\sin x}{\cos^2 x} + \cos x \cdot \cos x \cdot 1 \\
> &= \frac{\sin x}{\cos^2 x} + \frac{\cos^2 x}{\cos^2 x} \\
> &= \frac{\sin x + \cos^2 x}{\cos^2 x} \\
> &= \frac{1}{\cos^2 x}
> \end{align*}
> $$
> Therefore, the derivative of $\tan x$ is $\sec^2 x$.
>
> ![](https://youtu.be/JDJfmMqaDvE?si=ikvmpvdDIzYmuP6u)
>

> [!abstract] Review First
> - [[Math/Calculus/Derivatives/Chain Rule 1|Chain Rule 1]]
> - [[Math/Trigonometry/Trigonometric Functions/Angular Measure 1|Angular Measure 1]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Calculus/Trigonometry/Derivative of Trigonometric Functions 1a|Derivative of Trigonometric Functions 1a]]
> - [[Math/Calculus/Trigonometry/Derivative of Trigonometric Functions 2a|Derivative of Trigonometric Functions 2a]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> _No linked questions yet._
