---
type: note
publish: true
topic: "Polynomials"
---

(Topic 2-1: Characteristics of a Polynomial Function in a nutshell)
### Lesson Goals
By the end of this lesson, students should be able to:
- Recognize what makes an expression a polynomial.  
- Identify degree and leading coefficient in plain language.  
- Predict end behavior of a polynomial graph.  
- Describe how polynomials meet the x-axis (multiplicity).  
- Recognize simple symmetry patterns in polynomial graphs.

---

### 1. What is a Polynomial? 

A polynomial is built from powers of $x$ with whole-number exponents.  

$$f(x) = a_nx^n + a_{n-1}x^{n-1} + \dots + a_1x + a_0$$  

where coefficients $a_i$ are real numbers and $n$ is a whole number. 

Every polynomial function is continuous, but not every continuous function is a polynomial.

**Examples:**  
- $3x^4 - 2x^2 + 5$ → polynomial, degree 4.  
- $\dfrac{1}{x}$ → **not** a polynomial (exponent is $-1$, because $\dfrac{1}{x} = x^{-1}$ ).  
- $x^{1/2} + 2x$ → **not** a polynomial (exponent is a fraction).  
- $\sqrt{x-1}$ → **not** a polynomial (variable is under a radical sign = exponent is a fraction, because $\sqrt{x-1} = (x-1)^{\frac{1}{2}}$).  

**Check:** Is $x^5 - 4x^{-2} + 7$ a polynomial?

<div style="page-break-before: always;"></div>

![[blank_grid_two_sidebyside_padded_-10to10.png]]

<div style="page-break-before: always;"></div>

---

### 2. Degree 

- **Degree** = biggest exponent of $x$.  
- The degree of a polynomial tells you the maximum number of turning points it can have: specifically, a polynomial of degree $n$ can have at most $n-1$ turning points.

| Degree | Name      | Number of Turning Points        | Example               |
| ------ | --------- | ------------------------------- | --------------------- |
| 0      | Constant  | 0                               | $f(x)=1$, $g(x)=2x^0$ |
| 1      | Linear    | 0                               | $f(x)=2x+1$           |
| 2      | Quadratic | 1 (the vertex)                  | $f(x)=-2x^2+x+1$      |
| 3      | Qubic     | 2 (a rel max and a rel min) | $f(x)=x^3+x^2+x+1$    |
| 4      | Quartic   | 3                               | $f(x)=-x^4+1$         |
| 5      | Quintic   | 4                               | $f(x)=x^5+x^2$        |
|        |           |                                 |                       |

---

### 2. Leading Coefficient

- **Leading coefficient** (**LC**) = number in front of that term.  

**Example 1.** $f(x) = -2x^5 + 7x^3 - x + 9$  
- Degree = 5 (highest power).  
- Leading coefficient = $-2$ (number in front of $x^5$).  

**Check:** Degree and leading coefficient of $g(x) = 3x^7 - x^4 + 10$?

<div style="page-break-before: always;"></div>

---

### 3. End Behavior 

End behavior = what the graph does on the far to the left and far to the right edge of the plane.  End behavior depends only on the **degree** (even/odd) and **leading coefficient** (positive/negative).

- **Even degree** = ends point in the same direction (up or down)
- **Odd degree** = ends point in the opposite directions (one up the other one down, or vice versa)

- **Negative LC** = right hand side end behavior in quadrant 4 ("pointing down")
- **Positive LC** = right hand side end behavior in quadrant 1 ("pointing up")

| Degree | Leading Coefficient $> 0$           | Leading Coefficient $< 0$           |
| ------ | ----------------------------------- | ----------------------------------- |
| Even   | both ends $\uparrow$                | both ends $\downarrow$              |
| Odd    | left $\downarrow$, right $\uparrow$ | left $\uparrow$, right $\downarrow$ |

<div style="page-break-before: always;"></div>

![[blank_grid_two_sidebyside_padded_-10to10 1.pdf]]

![[blank_grid_two_sidebyside_padded_-10to10.png]]

<div style="page-break-before: always;"></div>

**Example 2.**
Using your graphing calculator, graph the following functions to verify their behaviors

| Degree | Leading Coefficient $> 0$           | Leading Coefficient $< 0$           |
| ------ | ---------------------------------- | ----------------------------------- |
| Even   | $f(x)=2x^2-x+1$ (both ends $\uparrow$)         | $g(x)=-2x^4-x^2+1$ (both ends $\downarrow$)              |
| Odd    | $h(x)=4x^3-2x^2-2$ (left $\downarrow$, right $\uparrow$) | $m(x)=-x^5+2x^4-5x$ (left $\uparrow$, right $\downarrow$) |

**Check:** End behavior of $h(x) = 2x^5 - x^2$?

---

### 4. Zeros

- A **zero** (or root or x-intercept) is an $x$-value where $f(x) = 0$.
- To determine the zero or zeroes of a function, set $y=0$ and solve for $x$
- The degree of a polynomial tells you the maximum number of x-intercepts it can have: specifically, a polynomial of degree $n$ can have at most $n$ x-intercepts.

<div style="page-break-before: always;"></div>

![[blank_grid_two_sidebyside_padded_-10to10.png]]

![[blank_grid_two_sidebyside_padded_-10to10.png]]

<div style="page-break-before: always;"></div>

---

### 5. y-intercepts
- To determine the y-intercept of a function, set $x=0$ and solve for $y$
- The constant term $a_0$ is the y-intercept of any polynomial function of the form $f(x) = a_nx^n + a_{n-1}x^{n-1} + \dots + a_1x + a_0$ 


<!--
### 6. How Polynomials Meet the x-Axis (Multiplicity) 
- If a factor repeats, it has **multiplicity**.  
- **Odd multiplicity** → graph **crosses** the x-axis.  
- **Even multiplicity** → graph **touches/bounces** on the x-axis.  

**Example 3.** $f(x) = (x-1)^2(x+2)$  
- Zeros: $x=1$ (mult. 2), $x=-2$ (mult. 1).  
- At $x=1$: touches.  
- At $x=-2$: crosses.  

**Check:** For $g(x) = (x+3)^3(x-4)^2$, describe what happens at each zero.

---

### 7. Putting It All Together 

**Example 4.**  
$$f(x) = -2(x+1)^2(x-2)^3$$  

- Degree = 5 (quintic = odd) → opposite end behavior, can a maximum of 5 x-intercept (Hint: Add up the exponents)
- Leading coefficient = $-2$ (negative) → right hand side end behavior in quadrant 4 ("pointing down")  
- Zeros:  
  - $x=-1$ ($x+1=0 \Rightarrow x=-1$) 
  - $x=2$ ($x-2=0 \Rightarrow x=2$)
- y-intercept = 16 (constant term = $-2(1)^2(-2)^3 = 16$, remove the $x$ variable and evaluate what remains)
- Multiplicity
  - $x=-1$ → Even multiplicity = touches x-axis at $x=-1$ (multiplicity = 2 because the zero $-1$ occurs twice $(x+1)^2$)
  - $x=2$ → Odd multiplicity = crosses x-axis at $x=2$ (multiplicity = 3 because the zero $2$ occurs twice $(x-2)^3$)

  Graph this polynomial using your graphing calculators
  -->
