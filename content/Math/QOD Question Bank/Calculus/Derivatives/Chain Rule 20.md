---
type: qod
publish: true
course:
  - "Mathematics 31"
topic: "Chain Rule"
show_solution: true
---

## Question

Given $f(x)=(2x+1)^5 (x^3-x+1)^4$;

1. Sketch $f(x)$. Use [Desmos](https://www.desmos.com/calculator) to help you visualize the graph before sketching.
2. Predict $f'(x)$ by superimposing a sketch of it onto the sketch of $f(x)$.
3. Differentiate $f(x)$. Answer in fully factored form.
   > [!info]- Hint
> Use the Product Rule before using the Chain Rule.
4. Graph $f'(x)$ in [Desmos](https://www.desmos.com/calculator) by superimposing it onto the graph of $f(x)$. Was your predicted sketch of $f'(x)$ in (B) correct?

## Solution

> [!example]- Show solution
>
> Let
>
> $$
> f(x)=(2x+1)^5(x^3-x+1)^4.
> $$
>
> The graph has odd-degree end behaviour because the total degree is
>
> $$
> 5+12=17.
> $$
>
> Its leading coefficient is positive, so
>
> $$
> x\to-\infty \Rightarrow f(x)\to-\infty
> $$
>
> and
>
> $$
> x\to\infty \Rightarrow f(x)\to\infty.
> $$
>
> The factor
>
> $$
> (2x+1)^5
> $$
>
> gives an $x$-intercept at
>
> $$
> x=-\frac12
> $$
>
> with odd multiplicity, so the graph crosses the axis there.
>
> The equation
>
> $$
> x^3-x+1=0
> $$
>
> has one real root,
>
> $$
> x\approx-1.3247.
> $$
>
> Because this factor is raised to the fourth power, the graph touches the $x$-axis and turns at that intercept.
>
> To differentiate, use the Product Rule and Chain Rule:
>
> $$
> f'(x)
> =
> 10(2x+1)^4(x^3-x+1)^4
> +
> 4(2x+1)^5(x^3-x+1)^3(3x^2-1).
> $$
>
> Factor:
>
> $$
> f'(x)
> =
> (2x+1)^4(x^3-x+1)^3
> \left[
> 10(x^3-x+1)
> +
> 4(2x+1)(3x^2-1)
> \right].
> $$
>
> Simplifying the bracket gives
>
> $$
> 34x^3+12x^2-18x+6.
> $$
>
> Therefore,
>
> $$
> \boxed{
> f'(x)
> =
> 2(2x+1)^4(x^3-x+1)^3
> (17x^3+6x^2-9x+3)
> }.
> $$
>
> For the predicted sketch of $f'$, use these facts:
>
> - $f'(x)=0$ at every horizontal tangent of $f$;
> - $f'(x)>0$ where $f$ is increasing;
> - $f'(x)<0$ where $f$ is decreasing.
>
> Graphing $f$ and $f'$ together should confirm those predictions.
>
> > [!info]- Legacy video solution
> > https://www.youtube.com/embed/2-Jwi69hKRQ

## Review First

- [[Basic Derivatives 1]]

## Explore Also

- [[Chain Rule 19]]
- [[Chain Rule 21]]

## Build Toward
