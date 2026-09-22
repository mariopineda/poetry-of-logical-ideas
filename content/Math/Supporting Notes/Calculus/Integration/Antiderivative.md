---
type: note
publish: true
topic: "Calculus"
---

> [!tldr] Definition
> A function $F$ is an antiderivative of $f$ on an interval if $F'(x) = f(x)$ for all $x$ in that interval.
---
## Notes
A physicist who knows the velocity of a particle might wish to know its position at a given time. An engineer who can measure the variable rate at which water is leaking from a tank wants to know the amount leaked over a certain time period. A biologist who knows the rate at which a bacteria population is increasing might want to deduce what the size of the population will be at some future time. In each case, the problem is to find a function $F$ whose derivative is a known function $f$. If such a function $F$ exists, it is called an antiderivative of $f$. 

An antiderivative, also known as an indefinite integral, inverse derivative, primitive function, primitive integral or  indefinite integral, is a function that reverses the process of differentiation. The process of finding an antiderivatives is called antidifferentiation (or indefinite integration). Antiderivatives are often denoted by capital Roman letters such as F and G. If you have a function $f(x)$, an antiderivative $F(x)$ is another function whose derivative is $f(x)$. In other words, if you differentiate $F(x)$, you get $f(x)$: $F^′(x)=f(x)$.

```tikz
\usepackage{pgfplots}
\begin{document}
\begin{tikzpicture}[scale=1.5]
  \begin{axis} [axis lines=center, ymin=-10, ymax=10, xmin=-5, xmax=5, legend pos=south east]
    \addplot [domain=-4:4, smooth, thick, color=red] { x^2 };
	\addplot [domain=-4:4, smooth, thick, color=blue] { x^2-5 };
	\addplot [domain=-4:4, smooth, thick, color=green] { x^2+5 } node[right] {$x$};
  \legend{$x^2$,$x^2-5$,$x^2+5$}
  \end{axis}
\end{tikzpicture}
\end{document}
```

Figure is showing three of the infinitely many solutions that can be produced by varying the constant $c$ in the function $F(x)=x^2+c$ that is the antiderivative of $f(x)=2x$. 
---
## Examples 
...

---
## Resources 
...

---
## See Also

---
## Exercises
%% Transclude exercise notes
