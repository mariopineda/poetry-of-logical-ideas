---
type: qod
publish: true
course:
  - "Mathematics 30-1"
  - "Mathematics 31"
topic: Polynomial Functions
show_solution: true
qod_id: "QOD-B473210812E4D1FB9AFF1DE4"
title: "Sketching Polynomial Functions 1"
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

Fully sketch $y=12x-x^3$, using intercepts and the first derivative test.

## Solution

> [!example]- Show solution
>
> Let
>
> $$
> f(x)=12x-x^3=x(12-x^2).
> $$
>
> ### Intercepts
>
> The $x$-intercepts satisfy
>
> $$
> x(12-x^2)=0,
> $$
>
> so
>
> $$
> x=0,\ \pm2\sqrt3.
> $$
>
> Thus the intercepts are
>
> $$
> \boxed{(-2\sqrt3,0),\ (0,0),\ (2\sqrt3,0)}.
> $$
>
> The $y$-intercept is also
>
> $$
> \boxed{(0,0)}.
> $$
>
> ### First Derivative Test
>
> Differentiate:
>
> $$
> f'(x)=12-3x^2
> =3(2-x)(2+x).
> $$
>
> The critical numbers are
>
> $$
> x=-2,\ 2.
> $$
>
> Sign analysis gives:
>
> - $f'(x)<0$ on $(-\infty,-2)$;
> - $f'(x)>0$ on $(-2,2)$;
> - $f'(x)<0$ on $(2,\infty)$.
>
> Therefore,
>
> $$
> f(-2)=-16
> $$
>
> is a local minimum and
>
> $$
> f(2)=16
> $$
>
> is a local maximum.
>
> Hence,
>
> $$
> \boxed{\text{local minimum }(-2,-16)}
> $$
>
> and
>
> $$
> \boxed{\text{local maximum }(2,16)}.
> $$
>
> ### Shape
>
> Since the leading term is $-x^3$,
>
> $$
> x\to-\infty
> \Rightarrow
> f(x)\to\infty
> $$
>
> and
>
> $$
> x\to\infty
> \Rightarrow
> f(x)\to-\infty.
> $$
>
> Also,
>
> $$
> f''(x)=-6x,
> $$
>
> so $(0,0)$ is a point of inflection.
>
> These features determine the full sketch.

> [!abstract] Review First
> - [[Math/Relations and Functions/Function Transformations 1|Function Transformations 1]]
> - [[Math/Polynomials/Factoring Polynomials 1|Factoring Polynomials 1]]
> - [[Math/Polynomial Functions/Determining polynomial coefficients from a quartic graph|Determining polynomial coefficients from a quartic graph]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!info] Explore Also
> - [[Math/Polynomials/Polynomial Functions 8|Polynomial Functions 8]]
> - [[Math/Polynomials/Sketching Polynomial Functions 2|Sketching Polynomial Functions 2]]
> - [[Math/Quadratics/Completing the Square 1|Completing the Square 1]]
> - [[Math/Polynomials/Polynomial Functions 28 - Checking Reasoning|Polynomial Functions 28 - Checking Reasoning]]

<!-- QOD-RELATIONSHIP-SEPARATOR -->

> [!success] Build Toward
> - [[Math/Polynomials/Factoring a fourth-degree polynomial using a root|Factoring a fourth-degree polynomial using a root]]
> - [[Math/Polynomials/Inferring polynomial coefficients from intercept behaviour|Inferring polynomial coefficients from intercept behaviour]]
> - [[Math/Polynomial Functions/Leading coefficient from roots and one intercept|Leading coefficient from roots and one intercept]]
