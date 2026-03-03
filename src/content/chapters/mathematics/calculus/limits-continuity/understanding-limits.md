---
title: "Understanding Limits"
topicSlug: "mathematics"
topicTitle: "Mathematics"
bookSlug: "calculus"
bookTitle: "Calculus: A Complete Course"
unitSlug: "limits-continuity"
unitTitle: "Limits and Continuity"
unitOrder: 1
order: 1
---

## Introduction to Limits

<p>The concept of a limit is the cornerstone of calculus. It allows mathematicians and scientists to describe the behavior of a function as its input approaches a particular value, even when the function may not be defined at that point. Understanding limits is essential before one can grasp the meaning of derivatives, integrals, and the broader edifice of mathematical analysis.</p>

### Informal Definition of a Limit

<p>Informally, we say that the limit of a function <em>f(x)</em> as <em>x</em> approaches <em>a</em> equals <em>L</em> if the values of <em>f(x)</em> get arbitrarily close to <em>L</em> as <em>x</em> gets sufficiently close to <em>a</em> (but not necessarily equal to <em>a</em>). This is written as lim<sub>x→a</sub> f(x) = L.</p><p>The key insight is that limits describe <em>tendency</em> rather than <em>value</em>. We are asking: what does the function appear to be heading toward? Whether the function actually reaches that value is a separate question altogether, addressed by the notion of continuity.</p><p>Consider the function f(x) = (x² − 1)/(x − 1). At x = 1, this expression is undefined (division by zero). Yet for all x ≠ 1, we can simplify: f(x) = x + 1. As x approaches 1, f(x) approaches 2. The limit exists and equals 2, despite the function being undefined at x = 1.</p>

#### Historical Context

<p>The rigorous formulation of limits was developed in the 19th century primarily by Augustin-Louis Cauchy and later refined by Karl Weierstrass. Before this, Newton and Leibniz had developed calculus using intuitive notions of infinitesimals—quantities that were "infinitely small" but not zero. These methods, while productive, lacked logical rigor and led to philosophical controversies.</p><p>The epsilon-delta definition, introduced by Weierstrass, resolved these issues by replacing vague infinitesimal language with precise quantifier statements. This formalization is regarded as one of the great achievements of 19th-century mathematics, grounding calculus on a firm logical foundation.</p>

#### Numerical Approach to Limits

<p>Before working through formal proofs, it is useful to investigate limits numerically. By constructing a table of values of f(x) for x approaching the target value from both sides, we can form a conjecture about the limit. For example, to investigate lim<sub>x→2</sub> (x² − 4)/(x − 2), one evaluates the function at x = 1.9, 1.99, 1.999 and x = 2.1, 2.01, 2.001, observing that the values cluster around 4.</p><p>This numerical intuition is valuable for building understanding, but it can occasionally mislead. A function might behave predictably near most points while having subtle behavior at others. The formal epsilon-delta definition serves as the ultimate arbiter.</p>

### The Epsilon-Delta Definition

<p>The formal definition, due to Weierstrass, states: lim<sub>x→a</sub> f(x) = L if and only if for every ε > 0 there exists δ > 0 such that whenever 0 < |x − a| < δ, it follows that |f(x) − L| < ε.</p><p>This definition captures the idea that we can make f(x) as close to L as desired (within any positive tolerance ε) by restricting x to be within a sufficiently small distance δ of a. The condition 0 < |x − a| (strict inequality) ensures that x ≠ a, reinforcing that the limit describes behavior <em>near</em> a, not <em>at</em> a.</p><p>Proving limits from this definition requires mathematical ingenuity. Given an arbitrary ε > 0, one must produce an explicit δ and verify the implication. These epsilon-delta proofs are a hallmark of introductory real analysis courses.</p>

#### A Worked Example

<p>Let us prove that lim<sub>x→3</sub> (2x − 1) = 5. Given ε > 0, we need δ > 0 such that |x − 3| < δ implies |(2x − 1) − 5| < ε. Simplifying: |(2x − 1) − 5| = |2x − 6| = 2|x − 3|. Thus if we choose δ = ε/2, then |x − 3| < δ implies 2|x − 3| < 2δ = ε. This completes the proof.</p>

## One-Sided Limits

<p>One-sided limits refine the notion of a limit by considering the behavior of a function as the independent variable approaches a point from only one direction—either from the left or from the right. This refinement is essential for understanding functions with jump discontinuities and for defining derivatives of piecewise functions.</p>

### Left-Hand and Right-Hand Limits

<p>The right-hand limit of f(x) as x approaches a, written lim<sub>x→a⁺</sub> f(x) = L, means f(x) approaches L as x approaches a from values greater than a. Similarly, the left-hand limit lim<sub>x→a⁻</sub> f(x) = M describes approach from below.</p><p>A two-sided limit lim<sub>x→a</sub> f(x) exists if and only if both one-sided limits exist and are equal. If the left and right limits both exist but are unequal, the two-sided limit does not exist, and the function has a jump discontinuity at a.</p><p>Consider the Heaviside step function H(x), which equals 0 for x < 0 and 1 for x ≥ 0. At x = 0, the left-hand limit is 0 and the right-hand limit is 1. These differ, so the two-sided limit does not exist at x = 0.</p>

#### Piecewise Functions

<p>Piecewise-defined functions are natural settings for one-sided limits. When evaluating lim<sub>x→a</sub> f(x) for such a function, one first identifies which piece applies just below a (for the left-hand limit) and just above a (for the right-hand limit). If both pieces yield the same value, the full limit exists.</p>

### Basic Limit Theorems

<p>Several algebraic properties make computing limits tractable without resorting to the epsilon-delta definition every time. If lim<sub>x→a</sub> f(x) = L and lim<sub>x→a</sub> g(x) = M, then: the limit of a sum is the sum of the limits (L + M); the limit of a product is the product of the limits (LM); and the limit of a quotient is the quotient of the limits (L/M), provided M ≠ 0.</p><p>The Squeeze Theorem (also called the Sandwich Theorem) is another powerful tool: if g(x) ≤ f(x) ≤ h(x) near a and lim<sub>x→a</sub> g(x) = lim<sub>x→a</sub> h(x) = L, then lim<sub>x→a</sub> f(x) = L. This is used to prove that lim<sub>x→0</sub> sin(x)/x = 1.</p>

#### The Squeeze Theorem in Practice

<p>A classic application of the Squeeze Theorem establishes lim<sub>x→0</sub> x² sin(1/x) = 0. Since |sin(1/x)| ≤ 1 for all x ≠ 0, we have −x² ≤ x² sin(1/x) ≤ x². As both bounding functions tend to 0 as x → 0, the middle function must as well.</p>

## Infinite Limits

<p>Infinite limits describe situations where the values of a function grow without bound as the input approaches some finite value. Although "infinity" is not a real number, the notation lim<sub>x→a</sub> f(x) = ∞ conveys precise information about the function's behavior and plays an important role in understanding vertical asymptotes.</p>

### Vertical Asymptotes

<p>A vertical asymptote at x = a occurs when at least one one-sided limit of f(x) is ±∞ as x → a. The rational function f(x) = 1/x has a vertical asymptote at x = 0: as x → 0⁺, f(x) → +∞, and as x → 0⁻, f(x) → −∞.</p><p>Identifying vertical asymptotes requires finding values of x where the denominator of a rational function equals zero (and the numerator does not), or where other expressions are undefined (e.g., logarithms of zero, tangent at π/2 + nπ).</p>

#### Finding Vertical Asymptotes

<p>For rational functions f(x) = p(x)/q(x) in lowest terms (no common factors), vertical asymptotes occur exactly at the zeros of q(x). To determine whether the limit is +∞ or −∞, one examines the sign of f(x) immediately to each side of the asymptote.</p>

### Infinite Limit Laws

<p>Certain algebraic rules extend to infinite limits with appropriate care. If lim<sub>x→a</sub> f(x) = ∞ and lim<sub>x→a</sub> g(x) = L (finite), then lim<sub>x→a</sub> [f(x) + g(x)] = ∞ and lim<sub>x→a</sub> [f(x) · g(x)] = ∞ (provided L > 0). Indeterminate forms such as ∞ − ∞ and ∞/∞ require more careful analysis, often via L'Hôpital's rule or algebraic manipulation.</p>

#### Indeterminate Forms

<p>Indeterminate forms arise when direct substitution yields an expression whose value is not determined by those of its parts alone. The seven classical indeterminate forms are: 0/0, ∞/∞, 0·∞, ∞−∞, 0⁰, ∞⁰, and 1^∞. Each requires special techniques to evaluate, including factoring, conjugate multiplication, or L'Hôpital's rule.</p>

## Limits at Infinity

<p>Limits at infinity investigate the long-run behavior of functions as the input variable grows without bound. This analysis yields horizontal asymptotes and describes the ultimate trend of a function—information valuable in applications ranging from physics to economics.</p>

### Horizontal Asymptotes

<p>A horizontal asymptote y = L exists when lim<sub>x→∞</sub> f(x) = L or lim<sub>x→−∞</sub> f(x) = L. For rational functions, the horizontal asymptote is determined by comparing the degrees of numerator and denominator: if deg(p) < deg(q), the asymptote is y = 0; if deg(p) = deg(q), the asymptote is y = (leading coefficient of p)/(leading coefficient of q); if deg(p) > deg(q), there is no horizontal asymptote (the function grows without bound).</p>

#### Long-Run Behavior of Rational Functions

<p>To find lim<sub>x→∞</sub> (3x² + 2x − 1)/(x² − 4), one divides numerator and denominator by x² (the highest power in the denominator), yielding (3 + 2/x − 1/x²)/(1 − 4/x²). As x → ∞, all terms with x in the denominator vanish, leaving 3/1 = 3. The horizontal asymptote is y = 3.</p>

### End Behavior of Functions

<p>Beyond rational functions, limits at infinity describe the end behavior of polynomials, exponentials, logarithms, and trigonometric functions. Polynomials grow without bound (the sign depending on the leading coefficient and degree). Exponential functions e^x dominate any polynomial as x → ∞, while ln(x) grows more slowly than any positive power of x.</p><p>These comparative growth rates are summarized by the hierarchy: ln(x) ≪ x^a ≪ b^x ≪ x! ≪ x^x for a > 0, b > 1 as x → ∞. This ordering has practical implications for algorithm analysis in computer science, where it corresponds to logarithmic, polynomial, exponential, and factorial complexity classes.</p>
