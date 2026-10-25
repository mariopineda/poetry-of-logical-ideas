---
type: qod
publish: true
course:
  - "Mathematics 20-1"
  - "Mathematics 30-1"
topic: "Rational Expressions"
show_solution: true
---


## Question

A student writes

$$
\frac{x^2-25}{x^2+3x-10}=1,\qquad x\ne2.
$$

The student's solution contains both an algebraic error and a domain error.

1. Identify both errors.
2. Give the correct simplified expression and all restrictions.
3. Determine the coordinates of any hole.
4. State the vertical asymptote.

## Solution

> [!example]- Show solution
>
> Factor both polynomials:
>
> $$
> x^2-25=(x-5)(x+5)
> $$
>
> and
>
> $$
> x^2+3x-10=(x+5)(x-2).
> $$
>
> The student incorrectly cancelled unlike factors. Only the common factor $x+5$ may be cancelled.
>
> The original denominator is zero at
>
> $$
> x=-5\quad\text{and}\quad x=2,
> $$
>
> so the student also omitted the restriction $x\ne-5$.
>
> Correctly,
>
> $$
> \frac{(x-5)(x+5)}{(x+5)(x-2)}
> =\frac{x-5}{x-2},
> $$
>
> with
>
> $$
> \boxed{x\ne-5,2}.
> $$
>
> Thus,
>
> $$
> \boxed{\frac{x-5}{x-2}},\qquad \boxed{x\ne-5,2}.
> $$
>
> Since $x+5$ cancels, $x=-5$ is a hole. Its $y$-coordinate is
>
> $$
> \frac{-5-5}{-5-2}=\frac{10}{7}.
> $$
>
> Therefore the hole is
>
> $$
> \boxed{\left(-5,\frac{10}{7}\right)}.
> $$
>
> Since $x-2$ remains in the denominator, the vertical asymptote is
>
> $$
> \boxed{x=2}.
> $$

## Review First

- [[Simplifying Rational Expressions 4]]
- [[Non-Permissible Values 1]]
- [[Factoring Polynomials 3]]

## Explore Also

- [[Rational Functions - Parameter and Removable Discontinuity 1]]
- [[Rational Functions - Equivalent Rules and Domains 1]]
- [[Domain & Range Algebraically 1]]

## Build Toward

- [[Domain & Range Algebraically 1]]
- [[Domain and Range - Reciprocal and Quadratic Functions]]
- [[Solving Rational Equations 1]]
