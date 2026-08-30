---
type: qod
publish: true
courses:
  - "Math 30-2"
topic: "Set Theory"
show_solution: false
prerequisites:
  - "[[Puzzles & Games 1]]"
related:
  - "[[Set Theory 2]]"
  - "[[Puzzles & Games 1]]"
---

## Question

Let $S$ be the set of capital letters only consisting of straight lines and set $C$ be the set of capital letters only consisting of curved lines. 

1. Draw the Venn diagrams of the two sets and list all the capital letters of the English alphabet in the appropriate subregion of the diagram.
2. Determine $n(S)$, $n(C)$ and $n(S \cap C)$

```tikz
\begin{document}
\begin{tikzpicture}
    % Draw the universal set rectangle
    \draw[thick] (-2,-2) rectangle (3.5,2) node[above right] {$U$};

    % Define colors for shading
    \begin{scope}
        \fill[cyan, opacity=0.5] (0,0) circle (1.5);  % Set A
        \fill[yellow, opacity=0.5] (1.5,0) circle (1.5);  % Set B
    \end{scope}

    % Draw the circles
    \draw (0,0) circle (1.5) node[left] {$A$};
    \draw (1.5,0) circle (1.5) node[right] {$B$};

    % Label for intersection area
    \node at (0.75,0) {$A \cap B$};
\end{tikzpicture}
\end{document}

```

## Solution

