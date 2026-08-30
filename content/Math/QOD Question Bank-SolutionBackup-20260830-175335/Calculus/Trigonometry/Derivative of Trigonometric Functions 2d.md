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
  - "[[Derivative of Trigonometric Functions 2c]]"
  - "[[Derivative of Trigonometric Functions 3]]"
---

## Question

Differentiate the following functions
### 1. $f(x)=2\cos(x) - 6 \sec(x) +3$
### 2. $g(z)=10 \tan(z) −2 \cot(z)$
### 3. $f(w)=\tan(w) \sec(w)$
### 4. $h(t)=t^3−t^2\sin(t)$
### 5. $Z(v)=\frac{\displaystyle v+\tan(v)}{\displaystyle 1+\csc(v)}$
### 6. $y=5\sin(x)\cos(x)+4\csc(x)$
### 7. $R(t)=\frac{\displaystyle 1}{\displaystyle 2\sin(t)−4\cos(t)}$

## Solution

### 1

$f^\prime(x)=−2\sin(x)−6 \sec(x) \tan(x)$

### 2

$g^′(z) = 10 \sec^2(z)+2 \csc^2(z)$

### 3

$f^\prime(w)=[\sec^2(w)] \sec(w)+ \tan(w)[ \sec(w) \tan(w)] = \sec^3(w)+\sec(w) \tan2(w)$ (Product Rule)

### 4

Use the Product Rule
 $h^′(t)=3t^2−2t\sin(t)−t^2\cos(t)$

### 5

Use the Quotient Rule
$$
\begin{align*}
Z(v)  & =\frac{\displaystyle v+\tan(v)}{\displaystyle 1+\csc(v)} \\ \\
Z^\prime(v) & =\frac{\displaystyle (1+\sec^2(v))(1+\csc(v))−(v+\tan(v))(−\csc(v)\cot(v))}{\displaystyle (1+\csc(v))^2} \\ \\
Z^\prime(v) & =\frac{\displaystyle (1+\sec^2(v))(1+\csc(v))+\csc(v)\cot(v)(v+\tan(v))}{\displaystyle (1+\csc(v))^2}
\end{align*}
$$

### 6

Use the Product Rule on the first term.
$$
\begin{align*}
y  & =5\sin(x)\cos(x)+4\csc(x) \\ \\
y^′ & =5\cos(x)\cos(x)+5\sin(x)(−\sin(x))−4\csc(x)\cot(x) \\ \\
   & =5\cos^2(x)−5\sin^2(x)−4\csc(x)\cot(x)
\end{align*}
$$

### 7

Use the Quotient Rule.
$$
\begin{align*}
R(t) & =\frac{\displaystyle 1}{\displaystyle 2\sin(t)−4\cos(t)} \\ \\
R^′(t) & =\frac{\displaystyle (0)(2\sin(t)−4\cos(t))−(1)(2\cos(t)+4\sin(t))}{\displaystyle (2\sin(t)−4\cos(t))^2} \\ \\
& = \frac{\displaystyle −2\cos(t)−4\sin(t)}{\displaystyle (2\sin(t)−4\cos(t))^2} \\
\end{align*}
$$
Can be further simplified by factoring.
