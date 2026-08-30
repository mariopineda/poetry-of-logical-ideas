---
type: qod
publish: true
courses:
  - "Math 10C"
topic: "Function Notation"
show_solution: false
prerequisites:
  - "[[Domain & Range 1]]"
related:
  - "[[Function Notation 2]]"
  - "[[Function Notation 4]]"
---

## Question

For the following table of values, express the relationship

- in words
- as an equation ($y$ in terms of $x$)
- using a mapping diagram

1. Graph $G(t)$, $x:\{0, 8, 1\}$, $y:\{0, 23000, 1000\}$ on your graphing calculator and sketch the graph.
2. Determine the value $G(6)$. Explain what the result represents in this context. Round answer to nearest whole number.
3. What is the per capita GDP if the temperature does not increase due to global warming?
4. What amount of temperature increase will result in the per capita GDP being reduced by half? Round your answer to the nearest whole number.

## Solution

1. ![[Images/Legacy/function-notation-problem1.bmp]]![[Images/Legacy/function-notation-problem2.bmp]]
2. $G(6) = 22588 - 168.05472 \times 6^2 \Rightarrow G(6)=16538.03008 \approx \boxed{16538}$. A 6C° increase in the average temperature will result in a per capita GDP of 16538 dollars.
3. Set $t=0 \Rightarrow G(0) = 22588 - 168.05472 \times 0^2 \Rightarrow G(0) = 22588$. The per capita GDP if the temperature does not increase is 22588 dollars.
4. The per capita GDP with no temperature increase is 22588 dollars. Half of this is $22588 \div 2 = 11294$ dollars. Set $G(t)=11294 \Rightarrow 11294=22588 - 168.05472 \times t^2$ and solve for the temperature, $t$.
   $$11294 = 22588-168.05472 \times t^2$$
   $$11294-22588 = -168.05472 \times t^2$$
   $$-11294 = -168.05472 \times t^2$$
   $$\frac{-11294}{-168.05472} = \frac{-168.05472}{-168.05472} \times t^2$$
   $$67.204... = t^2$$
   $$\sqrt{67.204...} = \sqrt{t^2}$$
   $$8.197... = t$$
   $$\boxed{t \approx 8}$$
   A temperature increase of 8C° will result in the per capita GDP being reduced by half.

> [!info]- Source
> [Howard & Sterner (2017)](https://link.springer.com/article/10.1007%2Fs10640-017-0166-z)
