---
type: note
publish: true
topic: "Calculus"
---

> [!tldr] The Substitution Rule
> If $u=g(x)$ is a differentiable function whose range is an interval $I$ and $f$ is continuous on $I$, then
> $$
\int f(g(x))g^\prime(x) \, dx = \int f(u) \, du
> $$

---
The substitution rule for integration, also known as [[u-Substitution|u-substitution]] or The Reverse Chain Rule, is a method used to simplify the process of finding [[Antiderivative|antiderivatives]] of [[Composite Functions|composite functions]]. The aim is to make a substitution that transforms the integral into a simpler form that is easier to evaluate. This method specifically helps us find antiderivatives when the [[Integrand|integrand]] is the result of a chain-rule derivative.

The substitution rule helps transform a complicated integral into a simpler one by changing variables. The steps involve:
1. Identifying and substituting the [[Inner Function|inner function]].
2. Replacing $dx$ with an expression in terms of $du$.
3. Simplifying and integrating.
4. Substituting back the original variable and adding the constant of integration.

# Example
Determine $\int 3(2x + 5)^2 \, dx$.

1. **Identify the inner function**:
   In the given integral, $\int 3(2x + 5)^2 \, dx$, the inner function is $2x + 5$.

2. **Set $u$ equal to the inner function**:
   Let $u = 2x + 5$.

3. **Differentiate $u$ to find $du$**:
   Compute the derivative of $u$ with respect to $x$ and isolate the $du$ [[Differential|differential]]:
   $$
   \frac{du}{dx} = 2 \quad \Rightarrow \quad du = 2 \, dx
   $$

4. **Solve for $dx$**:
   Isolate $dx$ in terms of $du$:
   $$
   dx = \frac{du}{2}
   $$

5. **Substitute $u$ and $dx$ in the integral**:
   Replace $2x + 5$ with $u$ and $dx$ with $\frac{du}{2}$ in the original integral:
   $$
   \int 3(2x + 5)^2 \, dx = \int 3u^2 \cdot \frac{du}{2}
   $$

6. **Simplify the integral**:
   Combine constants and simplify:
   $$
   \int 3u^2 \cdot \frac{du}{2} = \frac{3}{2} \int u^2 \, du
   $$

7. **Integrate with respect to $u$**:
   Find the antiderivative of $u^2$:
   $$
   \frac{3}{2} \int u^2 \, du = \frac{3}{2} \cdot \frac{u^3}{3} = \frac{u^3}{2}
   $$

8. **Substitute back $u = 2x + 5$**:
   Replace $u$ with $2x + 5$ to return to the original variable:
   $$
   \frac{u^3}{2} = \frac{(2x + 5)^3}{2}
   $$

9. **Add the constant of integration**:
   Finally, add the constant of integration $C$:
   $$
   \int 3(2x + 5)^2 \, dx = \frac{(2x + 5)^3}{2} + C
   $$
