---
type: qod
publish: true
course:
  - "Mathematics 30-1"
  - "Mathematics 31"
topic: "Function Properties"
show_solution: true
---

## Question

If $f(x) = \frac{1}{x-3}$ and $g(x)=\frac{x+1}{x}$, then determine the following.

1.

$$
f \circ g(x)
$$
2.

$$
g \circ f(5)
$$

## Solution

> [!example]- Show solution
>
> Given
>
> $$
> f(x)=\frac1{x-3},
> \qquad
> g(x)=\frac{x+1}{x},
> $$
>
> ### 1.
>
> $$
> (f\circ g)(x)
> =
> \frac{1}{\frac{x+1}{x}-3}.
> $$
>
> Simplify:
>
> $$
> (f\circ g)(x)
> =
> \frac{1}{\frac{1-2x}{x}}
> =
> \boxed{\frac{x}{1-2x}}.
> $$
>
> The composition requires
>
> $$
> x\neq0
> $$
>
> and
>
> $$
> \frac{x+1}{x}\neq3,
> $$
>
> which gives $x\neq\frac12$.
>
> Thus,
>
> $$
> \boxed{\text{Domain }=\mathbb R\setminus\left\{0,\frac12\right\}}.
> $$
>
> ### 2.
>
> First,
>
> $$
> f(5)=\frac1{5-3}=\frac12.
> $$
>
> Then
>
> $$
> g\left(\frac12\right)
> =
> \frac{\frac12+1}{\frac12}
> =
> 3.
> $$
>
> Therefore,
>
> $$
> \boxed{(g\circ f)(5)=3}.
> $$

## Review First

- [[Domain and Range - Reading Graphs 1]]
- [[Function Notation 1]]

## Explore Also

- [[Properties of Functions 7]]
- [[Properties of Functions 9]]

## Build Toward
