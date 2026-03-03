---
title: "The Derivative"
topicSlug: "mathematics"
topicTitle: "Mathematics"
bookSlug: "calculus"
bookTitle: "Calculus: A Complete Course"
unitSlug: "differentiation"
unitTitle: "Differentiation"
unitOrder: 2
order: 1
---

## Definition of the Derivative

<p>The derivative is one of the two fundamental objects of calculus (alongside the integral). It captures the instantaneous rate of change of a function—how rapidly the function's output is changing at a particular input. The derivative has interpretations in geometry (slope of a tangent line), physics (instantaneous velocity and acceleration), and economics (marginal cost and revenue).</p>

### The Limit Definition

<p>The derivative of f at x = a is defined as f'(a) = lim<sub>h→0</sub> [f(a+h) − f(a)]/h, provided this limit exists. This expression is the limit of the average rate of change over the interval [a, a+h] as the interval length h shrinks to zero. When the limit exists, f is said to be <em>differentiable</em> at a.</p><p>Geometrically, [f(a+h) − f(a)]/h is the slope of the secant line through the points (a, f(a)) and (a+h, f(a+h)). As h → 0, the secant line rotates toward the tangent line, and its slope approaches the slope of the tangent. The derivative is thus the slope of the tangent line to the graph of f at the point (a, f(a)).</p>

#### Differentiability Implies Continuity

<p>An important theorem states that if f is differentiable at a, then f is continuous at a. The converse is false: the function f(x) = |x| is continuous at 0 but not differentiable there (the left and right derivatives are −1 and +1 respectively). Differentiability is thus a stronger condition than continuity.</p>

### Notation for Derivatives

<p>Several notations for the derivative are in common use. Lagrange's notation f'(x) (read "f prime of x") is widely used for functions. Leibniz's notation dy/dx (or df/dx) emphasizes the ratio interpretation and is particularly convenient when working with the chain rule and implicit differentiation. Newton's dot notation ẋ is used in physics to denote time derivatives.</p><p>Higher derivatives are denoted f''(x), f'''(x), or f⁽ⁿ⁾(x) in Lagrange's notation, and d²y/dx², d³y/dx³, dⁿy/dxⁿ in Leibniz's notation. These notations capture different intuitions and are suited to different computational contexts.</p>

#### Higher-Order Derivatives

<p>The second derivative f''(x) is the derivative of f'(x) and measures the rate of change of the rate of change—the concavity of the original function. In kinematics, the first derivative of position is velocity, and the second derivative is acceleration. The third derivative (jerk) measures the rate of change of acceleration.</p>

## Differentiation Rules

<p>Computing derivatives from the limit definition for every function would be laborious. A set of differentiation rules, derived from the definition, allows efficient computation of derivatives for combinations of elementary functions. Mastery of these rules is fundamental to all applications of calculus.</p>

### Basic Differentiation Rules

<p>The power rule states d/dx[xⁿ] = nxⁿ⁻¹ for any real number n. The constant rule d/dx[c] = 0 and the constant multiple rule d/dx[cf(x)] = cf'(x) follow directly from the definition. The sum rule d/dx[f(x) + g(x)] = f'(x) + g'(x) allows differentiation of sums term by term.</p><p>Derivatives of trigonometric functions: d/dx[sin x] = cos x and d/dx[cos x] = −sin x, from which all other trig derivatives follow. Derivatives of exponential and logarithmic functions: d/dx[eˣ] = eˣ (the unique function equal to its own derivative) and d/dx[ln x] = 1/x.</p>

#### Product and Quotient Rules

<p>The product rule states d/dx[f(x)g(x)] = f'(x)g(x) + f(x)g'(x). The quotient rule states d/dx[f(x)/g(x)] = [f'(x)g(x) − f(x)g'(x)]/[g(x)]². These rules enable differentiation of products and quotients of differentiable functions. A common mnemonic for the quotient rule is "low d-high minus high d-low over low squared."</p>

## Chain Rule

<p>The chain rule is the most powerful and frequently used differentiation rule, enabling the differentiation of composite functions. Its discovery by Leibniz is one of the key steps that makes calculus computationally tractable for complex functions.</p>

### Statement and Applications

<p>If g is differentiable at x and f is differentiable at g(x), then the composite function h(x) = f(g(x)) is differentiable at x and h'(x) = f'(g(x)) · g'(x). In Leibniz notation, if y = f(u) and u = g(x), then dy/dx = (dy/du)(du/dx).</p><p>The chain rule is applied whenever a function is recognized as a composition. For example, to differentiate sin(x²), identify the outer function as sin and the inner function as x². The derivative is cos(x²) · 2x. For e^(3x²), the derivative is e^(3x²) · 6x.</p>

#### Implicit Differentiation

<p>Implicit differentiation uses the chain rule to differentiate equations that define y implicitly as a function of x. Differentiating both sides of the equation with respect to x, treating y as a function of x, and solving for dy/dx. For the circle x² + y² = r², differentiating yields 2x + 2y(dy/dx) = 0, giving dy/dx = −x/y.</p>
