---
title: "Applications of Derivatives"
topicSlug: "mathematics"
topicTitle: "Mathematics"
bookSlug: "calculus"
bookTitle: "Calculus: A Complete Course"
unitSlug: "differentiation"
unitTitle: "Differentiation"
unitOrder: 2
order: 2
---

## Related Rates

<p>Related rates problems apply implicit differentiation to situations where two or more quantities change with time and their rates of change are mathematically linked. These problems are among the most practically useful applications of differential calculus, arising in physics, engineering, and everyday reasoning.</p>

### Method for Related Rates Problems

<p>The standard approach consists of four steps: (1) draw a diagram and identify all relevant quantities as functions of time; (2) write an equation relating the quantities; (3) differentiate both sides with respect to time using implicit differentiation and the chain rule; (4) substitute the known values and solve for the unknown rate.</p><p>A classic example: a ladder 10 meters long leans against a wall. The foot slides away from the wall at 2 m/s. How fast is the top sliding down when the foot is 6 m from the wall? Using the Pythagorean relation x² + y² = 100 and differentiating: 2x(dx/dt) + 2y(dy/dt) = 0. At x = 6, y = 8, and dx/dt = 2, so dy/dt = −6·2/8 = −3/2 m/s.</p>

#### Further Examples

<p>Another standard example: water drains from a conical tank of radius R and height H at rate Q m³/s. How fast is the water level falling when the depth is h? Using similar triangles, the radius at depth h is r = Rh/H. The volume is V = πr²h/3 = πR²h³/(3H²). Differentiating: dV/dt = πR²h²/(H²) · dh/dt = −Q, giving dh/dt = −QH²/(πR²h²).</p>

## Optimization

<p>Optimization problems seek the maximum or minimum value of a function on a given domain. These problems are perhaps the most important application of differential calculus, with applications spanning engineering design, economic planning, and scientific modeling.</p>

### Critical Points and the First Derivative Test

<p>A critical point of f is a point in its domain where f'(x) = 0 or f'(x) does not exist. By Fermat's theorem, if f has a local extremum at x = c and f'(c) exists, then f'(c) = 0. The first derivative test classifies critical points: if f' changes from positive to negative at c, f has a local maximum; if f' changes from negative to positive, f has a local minimum; if f' does not change sign, the critical point is neither.</p>

#### The Second Derivative Test

<p>The second derivative test provides an alternative classification. If f'(c) = 0 and f''(c) > 0, then f has a local minimum at c (the function is concave up there). If f''(c) < 0, f has a local maximum. If f''(c) = 0, the test is inconclusive and the first derivative test must be used.</p>

## Mean Value Theorem

<p>The Mean Value Theorem (MVT) is a cornerstone result connecting the derivative to the average rate of change on an interval. It is one of the most theoretically significant theorems in differential calculus and is used to prove many other important results.</p>

### Statement and Geometric Meaning

<p>The Mean Value Theorem states: if f is continuous on [a, b] and differentiable on (a, b), then there exists c ∈ (a, b) such that f'(c) = [f(b) − f(a)]/(b − a). Geometrically, there is a point on the curve where the tangent is parallel to the secant through the endpoints.</p><p>Rolle's theorem is the special case where f(a) = f(b): there must then be a point where f'(c) = 0. This is used to show that between any two roots of a differentiable function, there is at least one root of its derivative—providing a lower bound on the number of critical points.</p>

#### Applications of the MVT

<p>The MVT implies that if f'(x) > 0 on an interval, then f is strictly increasing there. If f'(x) = 0 everywhere on an interval, then f is constant. These results, trivially true intuitively, require the MVT for rigorous proof. The MVT also underlies the proof that antiderivatives of a function on an interval differ by at most a constant—the basis of the Fundamental Theorem of Calculus.</p>
