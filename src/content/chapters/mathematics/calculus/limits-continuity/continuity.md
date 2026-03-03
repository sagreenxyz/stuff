---
title: "Continuity"
topicSlug: "mathematics"
topicTitle: "Mathematics"
bookSlug: "calculus"
bookTitle: "Calculus: A Complete Course"
unitSlug: "limits-continuity"
unitTitle: "Limits and Continuity"
unitOrder: 1
order: 2
---

## Definition of Continuity

<p>Continuity formalizes the intuitive notion of a function whose graph can be drawn without lifting the pen. A function is continuous at a point if three conditions hold: the function is defined there, the limit exists, and the limit equals the function's value. This elegant definition underpins the most important theorems of calculus.</p>

### The Three Conditions for Continuity

<p>A function f is continuous at x = a if and only if: (1) f(a) is defined; (2) lim<sub>x→a</sub> f(x) exists; and (3) lim<sub>x→a</sub> f(x) = f(a). Each condition addresses a different way a function can fail to be continuous. Violating condition (1) yields a hole or a missing point; violating (2) yields an oscillation or jump; violating (3) while satisfying (1) and (2) yields a removable discontinuity.</p>

#### Removable Discontinuities

<p>A removable discontinuity at x = a occurs when the limit exists but either f(a) is undefined or f(a) ≠ lim<sub>x→a</sub> f(x). These are called "removable" because the discontinuity can be eliminated by redefining f(a) to equal the limit. The function g(x) = (x²−1)/(x−1) has a removable discontinuity at x = 1; extending g by setting g(1) = 2 yields a continuous function.</p>

### Continuity on an Interval

<p>A function is continuous on an open interval (a, b) if it is continuous at every point in that interval. Continuity on a closed interval [a, b] additionally requires right-continuity at a and left-continuity at b. Familiar elementary functions—polynomials, rational functions (where defined), trigonometric functions, exponential and logarithmic functions—are all continuous on their natural domains.</p><p>The algebra of continuous functions is well-behaved: sums, differences, products, and quotients (where the denominator is nonzero) of continuous functions are continuous. Compositions of continuous functions are continuous. These properties, combined with the continuity of elementary functions, allow us to determine continuity for most functions encountered in practice without returning to the definition.</p>

#### Composition and Continuity

<p>If g is continuous at a and f is continuous at g(a), then the composition f ∘ g is continuous at a. This result, while intuitively obvious, requires careful proof. It enables the determination of continuity for composite functions like sin(x²), e^(cos x), and ln(1 + x²) by recognizing them as compositions of continuous building blocks.</p>

## Types of Discontinuities

<p>When continuity fails at a point, the nature of the failure can take several forms. Classifying discontinuities is more than a taxonomic exercise—the type of discontinuity determines what can be salvaged analytically and has implications for integrability and the validity of theorems.</p>

### Classification of Discontinuities

<p>The principal types of discontinuities are: <strong>removable discontinuities</strong>, where the limit exists but does not equal the function value; <strong>jump discontinuities</strong>, where the one-sided limits both exist but differ; and <strong>essential discontinuities</strong>, where at least one one-sided limit does not exist (including oscillatory discontinuities and infinite discontinuities).</p><p>An oscillatory discontinuity, exemplified by f(x) = sin(1/x) at x = 0, occurs when the function oscillates infinitely many times in every neighborhood of the point, preventing the existence of any limit. An infinite discontinuity, as in f(x) = 1/x at x = 0, occurs when the function grows without bound.</p>

#### Jump Discontinuities in Practice

<p>Jump discontinuities model abrupt changes: tax brackets, electric switches, and certain physical phenomena involve quantities that change value instantaneously. The floor function ⌊x⌋ has jump discontinuities at every integer, jumping down by 1 at each. Despite these jumps, the function is integrable, illustrating that discontinuity does not preclude integrability.</p>

## Intermediate Value Theorem

<p>The Intermediate Value Theorem (IVT) is one of the great theorems of calculus, capturing the intuitive idea that a continuous function cannot jump over intermediate values. It guarantees the existence of solutions to equations and has wide-ranging applications in mathematics, physics, and economics.</p>

### Statement and Proof Sketch

<p>The Intermediate Value Theorem states: if f is continuous on [a, b] and N is any value strictly between f(a) and f(b), then there exists at least one c in (a, b) such that f(c) = N. The proof relies on the completeness of the real numbers—the least upper bound property—and is a beautiful application of real analysis.</p><p>A particularly important corollary is Bolzano's theorem: if f is continuous on [a, b] and f(a) and f(b) have opposite signs, then f has at least one zero in (a, b). This provides a theoretical foundation for numerical root-finding methods such as bisection.</p>

#### The Bisection Method

<p>The bisection method exploits the IVT to locate roots numerically. Starting with an interval [a, b] where f changes sign, one evaluates f at the midpoint m = (a+b)/2. If f(m) = 0, we are done; otherwise, the sign change is in [a, m] or [m, b]. Repeating this halves the interval at each step, converging linearly to a root. After n steps, the root is located within an interval of length (b−a)/2^n.</p>

### Applications of the IVT

<p>The IVT guarantees that any polynomial of odd degree has at least one real root—since odd-degree polynomials take arbitrarily large positive and negative values, they must cross zero somewhere. It also implies that the equation cos(x) = x has a solution (as can be shown by considering f(x) = cos(x) − x and noting f(0) > 0, f(π/2) < 0).</p><p>In economics, the IVT is invoked to argue that competitive markets clear: if supply is a continuous function of price that exceeds demand at high prices and falls short of demand at low prices, the theorem guarantees the existence of an equilibrium price. In game theory, related fixed-point theorems—themselves generalizations of the IVT—establish the existence of Nash equilibria.</p>

#### Fixed-Point Theorems

<p>Brouwer's fixed-point theorem, a topological generalization of the IVT, states that any continuous function from a closed ball in ℝⁿ to itself has at least one fixed point. For n = 1, this reduces to the observation that any continuous function f: [0,1] → [0,1] must satisfy f(c) = c for some c ∈ [0,1], a direct consequence of the IVT applied to g(x) = f(x) − x.</p>
