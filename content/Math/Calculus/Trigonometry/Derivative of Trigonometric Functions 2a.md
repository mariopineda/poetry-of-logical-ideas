---
type: qod
publish: true
courses:
  - "Math 31"
topic: "Trigonometric Derivatives"
show_solution: false
prerequisites:
  - "[[Chain Rule 1]]"
  - "[[Angular Measure 1]]"
related:
  - "[[Derivative of Trigonometric Functions 1b]]"
  - "[[Derivative of Trigonometric Functions 2b]]"
---

## Question

Find the 27th derivative of $\cos x$. Bonus points for solutions avoiding a brute force approach.

## Solution

> [!example]- Show solution
>
> To find the 27th derivative of $\cos(x)$, we can utilize the fact that the derivative of $\cos(x)$ cycles between $\cos(x)$ and $-\sin(x)$ every four derivatives. Since 27 is not a multiple of 4, we know that the 27th derivative will involve both $\cos(x)$ and $\sin(x)$ terms.
>
> Starting from the first derivative:
> 1st derivative: $-\sin(x)$
> 2nd derivative: $-\cos(x)$
> 3rd derivative: $\sin(x)$
> 4th derivative: $\cos(x)$
>
> Every four derivatives, we cycle between $\cos(x)$ and $-\sin(x)$.
>
> Since 27 is 3 more than a multiple of 4, we will start with the 3rd derivative and observe the pattern:
>
> 3rd derivative: $\sin(x)$
> 7th derivative: $\sin(x)$
> 11th derivative: $\sin(x)$
> 15th derivative: $\sin(x)$
> 19th derivative: $\sin(x)$
> 23rd derivative: $\sin(x)$
> 27th derivative: $\sin(x)$
>
> So, the 27th derivative of $\cos(x)$ is $\sin(x)$.
>

