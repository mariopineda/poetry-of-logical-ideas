---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Motion and Derivatives"
show_solution: true
---

## Question

Sketch a single continuous position-time function with the following features, labelled and interpreted in the context of a moving object.

- Domain: $\{t | t \geq 0, t \in \mathbf{R}\}$
- One zero and two positive roots
- One maximum and one minimum point
- Positive displacement from the origin
- Negative displacement from the origin
- Point at $v(t) < 0 \cap s(t) < 0$
  > [!info]- Hint
> The intersection symbol represents 'and'
- Point at $v(t) < 0 \cap s(t) > 0$
- Point at $v(t) > 0 \cap s(t) < 0$
- Point at $v(t) > 0 \cap s(t) > 0$
- Point at $v(t) = 0 \cap s(t) > 0$
- Point at $v(t) = 0 \cap s(t) < 0$

## Solution

> [!example]- Show solution
>
>
> Many sketches are possible. One convenient example is
>
> $$
> s(t)=t(t-2)(t-5),
> \qquad t\geq0.
> $$
>
> This position function has roots at
>
> $$
> \boxed{t=0,\ 2,\ 5},
> $$
>
> so it has one zero root and two positive roots.
>
> Differentiate:
>
> $$
> v(t)=s'(t)
> =
> 3t^2-14t+10.
> $$
>
> The object is at rest when
>
> $$
> 3t^2-14t+10=0.
> $$
>
> Thus,
>
> $$
> t
> =
> \frac{7\pm\sqrt{19}}{3}.
> $$
>
> Approximately,
>
> $$
> \boxed{t\approx0.88,\ 3.79}.
> $$
>
> At
>
> $$
> t\approx0.88,
> $$
>
> the position is positive:
>
> $$
> s(t)\approx4.06,
> $$
>
> so this is a local maximum above the origin.
>
> At
>
> $$
> t\approx3.79,
> $$
>
> the position is negative:
>
> $$
> s(t)\approx-8.21,
> $$
>
> so this is a local minimum below the origin.
>
> The sign of $s(t)$ is:
>
> - $s(t)>0$ for $0<t<2$;
> - $s(t)<0$ for $2<t<5$;
> - $s(t)>0$ for $t>5$.
>
> The sign of $v(t)$ is:
>
> - $v(t)>0$ for $0<t<0.88$;
> - $v(t)<0$ for $0.88<t<3.79$;
> - $v(t)>0$ for $t>3.79$.
>
> Therefore, valid labelled examples include:
>
> - $v(t)<0$ and $s(t)<0$: use $\boxed{t=3}$;
> - $v(t)<0$ and $s(t)>0$: use $\boxed{t=1}$;
> - $v(t)>0$ and $s(t)<0$: use $\boxed{t=4}$;
> - $v(t)>0$ and $s(t)>0$: use $\boxed{t=0.5}$ or $\boxed{t=6}$;
> - $v(t)=0$ and $s(t)>0$: use $\boxed{t\approx0.88}$;
> - $v(t)=0$ and $s(t)<0$: use $\boxed{t\approx3.79}$.
>
> A sketch of this cubic on $t\geq0$, with these points labelled, satisfies every requested condition.
>
> > [!info]- Legacy video solution
> > https://www.youtube.com/embed/aVE3pw9Io5g

## Review First

- [[Derivatives 1]]

## Explore Also

- [[Position and Velocity 11]]
- [[Position and Velocity 13]]

## Build Toward
