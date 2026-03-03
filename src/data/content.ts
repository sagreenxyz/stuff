export interface SubSubsection {
  id: string;
  title: string;
  content: string;
}

export interface Subsection {
  id: string;
  title: string;
  content: string;
  subsubsections?: SubSubsection[];
}

export interface Section {
  id: string;
  slug: string;
  title: string;
  content: string;
  subsections: Subsection[];
}

export interface Chapter {
  id: string;
  slug: string;
  title: string;
  sections: Section[];
}

export interface Unit {
  id: string;
  slug: string;
  title: string;
  chapters: Chapter[];
}

export interface Book {
  id: string;
  slug: string;
  title: string;
  units: Unit[];
}

export interface Topic {
  id: string;
  slug: string;
  title: string;
  books: Book[];
}

export interface SectionNavContext {
  topic: Topic;
  book: Book;
  unit: Unit;
  chapter: Chapter;
  section: Section;
  sectionIndex: number;
  chapterSections: Section[];
}

export interface FlatSection {
  topicSlug: string;
  bookSlug: string;
  unitSlug: string;
  chapterSlug: string;
  sectionSlug: string;
  topicTitle: string;
  bookTitle: string;
  unitTitle: string;
  chapterTitle: string;
  sectionTitle: string;
  section: Section;
  chapter: Chapter;
  unit: Unit;
  book: Book;
  topic: Topic;
}

export const topics: Topic[] = [
  {
    id: 'mathematics',
    slug: 'mathematics',
    title: 'Mathematics',
    books: [
      {
        id: 'calculus',
        slug: 'calculus',
        title: 'Calculus: A Complete Course',
        units: [
          {
            id: 'limits-continuity',
            slug: 'limits-continuity',
            title: 'Limits and Continuity',
            chapters: [
              {
                id: 'understanding-limits',
                slug: 'understanding-limits',
                title: 'Understanding Limits',
                sections: [
                  {
                    id: 'intro-limits',
                    slug: 'intro-limits',
                    title: 'Introduction to Limits',
                    content: '<p>The concept of a limit is the cornerstone of calculus. It allows mathematicians and scientists to describe the behavior of a function as its input approaches a particular value, even when the function may not be defined at that point. Understanding limits is essential before one can grasp the meaning of derivatives, integrals, and the broader edifice of mathematical analysis.</p>',
                    subsections: [
                      {
                        id: 'informal-definition',
                        title: 'Informal Definition of a Limit',
                        content: '<p>Informally, we say that the limit of a function <em>f(x)</em> as <em>x</em> approaches <em>a</em> equals <em>L</em> if the values of <em>f(x)</em> get arbitrarily close to <em>L</em> as <em>x</em> gets sufficiently close to <em>a</em> (but not necessarily equal to <em>a</em>). This is written as lim<sub>x→a</sub> f(x) = L.</p><p>The key insight is that limits describe <em>tendency</em> rather than <em>value</em>. We are asking: what does the function appear to be heading toward? Whether the function actually reaches that value is a separate question altogether, addressed by the notion of continuity.</p><p>Consider the function f(x) = (x² − 1)/(x − 1). At x = 1, this expression is undefined (division by zero). Yet for all x ≠ 1, we can simplify: f(x) = x + 1. As x approaches 1, f(x) approaches 2. The limit exists and equals 2, despite the function being undefined at x = 1.</p>',
                        subsubsections: [
                          {
                            id: 'historical-context',
                            title: 'Historical Context',
                            content: '<p>The rigorous formulation of limits was developed in the 19th century primarily by Augustin-Louis Cauchy and later refined by Karl Weierstrass. Before this, Newton and Leibniz had developed calculus using intuitive notions of infinitesimals—quantities that were "infinitely small" but not zero. These methods, while productive, lacked logical rigor and led to philosophical controversies.</p><p>The epsilon-delta definition, introduced by Weierstrass, resolved these issues by replacing vague infinitesimal language with precise quantifier statements. This formalization is regarded as one of the great achievements of 19th-century mathematics, grounding calculus on a firm logical foundation.</p>'
                          },
                          {
                            id: 'numerical-approach',
                            title: 'Numerical Approach to Limits',
                            content: '<p>Before working through formal proofs, it is useful to investigate limits numerically. By constructing a table of values of f(x) for x approaching the target value from both sides, we can form a conjecture about the limit. For example, to investigate lim<sub>x→2</sub> (x² − 4)/(x − 2), one evaluates the function at x = 1.9, 1.99, 1.999 and x = 2.1, 2.01, 2.001, observing that the values cluster around 4.</p><p>This numerical intuition is valuable for building understanding, but it can occasionally mislead. A function might behave predictably near most points while having subtle behavior at others. The formal epsilon-delta definition serves as the ultimate arbiter.</p>'
                          }
                        ]
                      },
                      {
                        id: 'epsilon-delta',
                        title: 'The Epsilon-Delta Definition',
                        content: '<p>The formal definition, due to Weierstrass, states: lim<sub>x→a</sub> f(x) = L if and only if for every ε > 0 there exists δ > 0 such that whenever 0 < |x − a| < δ, it follows that |f(x) − L| < ε.</p><p>This definition captures the idea that we can make f(x) as close to L as desired (within any positive tolerance ε) by restricting x to be within a sufficiently small distance δ of a. The condition 0 < |x − a| (strict inequality) ensures that x ≠ a, reinforcing that the limit describes behavior <em>near</em> a, not <em>at</em> a.</p><p>Proving limits from this definition requires mathematical ingenuity. Given an arbitrary ε > 0, one must produce an explicit δ and verify the implication. These epsilon-delta proofs are a hallmark of introductory real analysis courses.</p>',
                        subsubsections: [
                          {
                            id: 'worked-example',
                            title: 'A Worked Example',
                            content: '<p>Let us prove that lim<sub>x→3</sub> (2x − 1) = 5. Given ε > 0, we need δ > 0 such that |x − 3| < δ implies |(2x − 1) − 5| < ε. Simplifying: |(2x − 1) − 5| = |2x − 6| = 2|x − 3|. Thus if we choose δ = ε/2, then |x − 3| < δ implies 2|x − 3| < 2δ = ε. This completes the proof.</p>'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: 'one-sided-limits',
                    slug: 'one-sided-limits',
                    title: 'One-Sided Limits',
                    content: '<p>One-sided limits refine the notion of a limit by considering the behavior of a function as the independent variable approaches a point from only one direction—either from the left or from the right. This refinement is essential for understanding functions with jump discontinuities and for defining derivatives of piecewise functions.</p>',
                    subsections: [
                      {
                        id: 'left-right-limits',
                        title: 'Left-Hand and Right-Hand Limits',
                        content: '<p>The right-hand limit of f(x) as x approaches a, written lim<sub>x→a⁺</sub> f(x) = L, means f(x) approaches L as x approaches a from values greater than a. Similarly, the left-hand limit lim<sub>x→a⁻</sub> f(x) = M describes approach from below.</p><p>A two-sided limit lim<sub>x→a</sub> f(x) exists if and only if both one-sided limits exist and are equal. If the left and right limits both exist but are unequal, the two-sided limit does not exist, and the function has a jump discontinuity at a.</p><p>Consider the Heaviside step function H(x), which equals 0 for x < 0 and 1 for x ≥ 0. At x = 0, the left-hand limit is 0 and the right-hand limit is 1. These differ, so the two-sided limit does not exist at x = 0.</p>',
                        subsubsections: [
                          {
                            id: 'piecewise-example',
                            title: 'Piecewise Functions',
                            content: '<p>Piecewise-defined functions are natural settings for one-sided limits. When evaluating lim<sub>x→a</sub> f(x) for such a function, one first identifies which piece applies just below a (for the left-hand limit) and just above a (for the right-hand limit). If both pieces yield the same value, the full limit exists.</p>'
                          }
                        ]
                      },
                      {
                        id: 'limit-theorems',
                        title: 'Basic Limit Theorems',
                        content: '<p>Several algebraic properties make computing limits tractable without resorting to the epsilon-delta definition every time. If lim<sub>x→a</sub> f(x) = L and lim<sub>x→a</sub> g(x) = M, then: the limit of a sum is the sum of the limits (L + M); the limit of a product is the product of the limits (LM); and the limit of a quotient is the quotient of the limits (L/M), provided M ≠ 0.</p><p>The Squeeze Theorem (also called the Sandwich Theorem) is another powerful tool: if g(x) ≤ f(x) ≤ h(x) near a and lim<sub>x→a</sub> g(x) = lim<sub>x→a</sub> h(x) = L, then lim<sub>x→a</sub> f(x) = L. This is used to prove that lim<sub>x→0</sub> sin(x)/x = 1.</p>',
                        subsubsections: [
                          {
                            id: 'squeeze-theorem',
                            title: 'The Squeeze Theorem in Practice',
                            content: '<p>A classic application of the Squeeze Theorem establishes lim<sub>x→0</sub> x² sin(1/x) = 0. Since |sin(1/x)| ≤ 1 for all x ≠ 0, we have −x² ≤ x² sin(1/x) ≤ x². As both bounding functions tend to 0 as x → 0, the middle function must as well.</p>'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: 'infinite-limits',
                    slug: 'infinite-limits',
                    title: 'Infinite Limits',
                    content: '<p>Infinite limits describe situations where the values of a function grow without bound as the input approaches some finite value. Although "infinity" is not a real number, the notation lim<sub>x→a</sub> f(x) = ∞ conveys precise information about the function\'s behavior and plays an important role in understanding vertical asymptotes.</p>',
                    subsections: [
                      {
                        id: 'vertical-asymptotes',
                        title: 'Vertical Asymptotes',
                        content: '<p>A vertical asymptote at x = a occurs when at least one one-sided limit of f(x) is ±∞ as x → a. The rational function f(x) = 1/x has a vertical asymptote at x = 0: as x → 0⁺, f(x) → +∞, and as x → 0⁻, f(x) → −∞.</p><p>Identifying vertical asymptotes requires finding values of x where the denominator of a rational function equals zero (and the numerator does not), or where other expressions are undefined (e.g., logarithms of zero, tangent at π/2 + nπ).</p>',
                        subsubsections: [
                          {
                            id: 'finding-asymptotes',
                            title: 'Finding Vertical Asymptotes',
                            content: '<p>For rational functions f(x) = p(x)/q(x) in lowest terms (no common factors), vertical asymptotes occur exactly at the zeros of q(x). To determine whether the limit is +∞ or −∞, one examines the sign of f(x) immediately to each side of the asymptote.</p>'
                          }
                        ]
                      },
                      {
                        id: 'infinite-limit-laws',
                        title: 'Infinite Limit Laws',
                        content: '<p>Certain algebraic rules extend to infinite limits with appropriate care. If lim<sub>x→a</sub> f(x) = ∞ and lim<sub>x→a</sub> g(x) = L (finite), then lim<sub>x→a</sub> [f(x) + g(x)] = ∞ and lim<sub>x→a</sub> [f(x) · g(x)] = ∞ (provided L > 0). Indeterminate forms such as ∞ − ∞ and ∞/∞ require more careful analysis, often via L\'Hôpital\'s rule or algebraic manipulation.</p>',
                        subsubsections: [
                          {
                            id: 'indeterminate-forms',
                            title: 'Indeterminate Forms',
                            content: '<p>Indeterminate forms arise when direct substitution yields an expression whose value is not determined by those of its parts alone. The seven classical indeterminate forms are: 0/0, ∞/∞, 0·∞, ∞−∞, 0⁰, ∞⁰, and 1^∞. Each requires special techniques to evaluate, including factoring, conjugate multiplication, or L\'Hôpital\'s rule.</p>'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: 'limits-at-infinity',
                    slug: 'limits-at-infinity',
                    title: 'Limits at Infinity',
                    content: '<p>Limits at infinity investigate the long-run behavior of functions as the input variable grows without bound. This analysis yields horizontal asymptotes and describes the ultimate trend of a function—information valuable in applications ranging from physics to economics.</p>',
                    subsections: [
                      {
                        id: 'horizontal-asymptotes',
                        title: 'Horizontal Asymptotes',
                        content: '<p>A horizontal asymptote y = L exists when lim<sub>x→∞</sub> f(x) = L or lim<sub>x→−∞</sub> f(x) = L. For rational functions, the horizontal asymptote is determined by comparing the degrees of numerator and denominator: if deg(p) < deg(q), the asymptote is y = 0; if deg(p) = deg(q), the asymptote is y = (leading coefficient of p)/(leading coefficient of q); if deg(p) > deg(q), there is no horizontal asymptote (the function grows without bound).</p>',
                        subsubsections: [
                          {
                            id: 'rational-function-behavior',
                            title: 'Long-Run Behavior of Rational Functions',
                            content: '<p>To find lim<sub>x→∞</sub> (3x² + 2x − 1)/(x² − 4), one divides numerator and denominator by x² (the highest power in the denominator), yielding (3 + 2/x − 1/x²)/(1 − 4/x²). As x → ∞, all terms with x in the denominator vanish, leaving 3/1 = 3. The horizontal asymptote is y = 3.</p>'
                          }
                        ]
                      },
                      {
                        id: 'end-behavior',
                        title: 'End Behavior of Functions',
                        content: '<p>Beyond rational functions, limits at infinity describe the end behavior of polynomials, exponentials, logarithms, and trigonometric functions. Polynomials grow without bound (the sign depending on the leading coefficient and degree). Exponential functions e^x dominate any polynomial as x → ∞, while ln(x) grows more slowly than any positive power of x.</p><p>These comparative growth rates are summarized by the hierarchy: ln(x) ≪ x^a ≪ b^x ≪ x! ≪ x^x for a > 0, b > 1 as x → ∞. This ordering has practical implications for algorithm analysis in computer science, where it corresponds to logarithmic, polynomial, exponential, and factorial complexity classes.</p>',
                        subsubsections: [
                          {
                            id: 'lhopital-rule',
                            title: "L'Hôpital's Rule",
                            content: "<p>L'Hôpital's rule provides an elegant method for evaluating limits of the indeterminate forms 0/0 and ∞/∞. If lim<sub>x→a</sub> f(x)/g(x) is indeterminate and both f and g are differentiable near a (with g'(a) ≠ 0 in a neighborhood of a), then lim<sub>x→a</sub> f(x)/g(x) = lim<sub>x→a</sub> f'(x)/g'(x), provided the latter limit exists. The rule may be applied repeatedly if the result remains indeterminate.</p>"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                id: 'continuity',
                slug: 'continuity',
                title: 'Continuity',
                sections: [
                  {
                    id: 'definition-continuity',
                    slug: 'definition-continuity',
                    title: 'Definition of Continuity',
                    content: '<p>Continuity formalizes the intuitive notion of a function whose graph can be drawn without lifting the pen. A function is continuous at a point if three conditions hold: the function is defined there, the limit exists, and the limit equals the function\'s value. This elegant definition underpins the most important theorems of calculus.</p>',
                    subsections: [
                      {
                        id: 'three-conditions',
                        title: 'The Three Conditions for Continuity',
                        content: '<p>A function f is continuous at x = a if and only if: (1) f(a) is defined; (2) lim<sub>x→a</sub> f(x) exists; and (3) lim<sub>x→a</sub> f(x) = f(a). Each condition addresses a different way a function can fail to be continuous. Violating condition (1) yields a hole or a missing point; violating (2) yields an oscillation or jump; violating (3) while satisfying (1) and (2) yields a removable discontinuity.</p>',
                        subsubsections: [
                          {
                            id: 'removable-discontinuity',
                            title: 'Removable Discontinuities',
                            content: '<p>A removable discontinuity at x = a occurs when the limit exists but either f(a) is undefined or f(a) ≠ lim<sub>x→a</sub> f(x). These are called "removable" because the discontinuity can be eliminated by redefining f(a) to equal the limit. The function g(x) = (x²−1)/(x−1) has a removable discontinuity at x = 1; extending g by setting g(1) = 2 yields a continuous function.</p>'
                          }
                        ]
                      },
                      {
                        id: 'continuous-functions',
                        title: 'Continuity on an Interval',
                        content: '<p>A function is continuous on an open interval (a, b) if it is continuous at every point in that interval. Continuity on a closed interval [a, b] additionally requires right-continuity at a and left-continuity at b. Familiar elementary functions—polynomials, rational functions (where defined), trigonometric functions, exponential and logarithmic functions—are all continuous on their natural domains.</p><p>The algebra of continuous functions is well-behaved: sums, differences, products, and quotients (where the denominator is nonzero) of continuous functions are continuous. Compositions of continuous functions are continuous. These properties, combined with the continuity of elementary functions, allow us to determine continuity for most functions encountered in practice without returning to the definition.</p>',
                        subsubsections: [
                          {
                            id: 'composition-continuity',
                            title: 'Composition and Continuity',
                            content: '<p>If g is continuous at a and f is continuous at g(a), then the composition f ∘ g is continuous at a. This result, while intuitively obvious, requires careful proof. It enables the determination of continuity for composite functions like sin(x²), e^(cos x), and ln(1 + x²) by recognizing them as compositions of continuous building blocks.</p>'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: 'types-discontinuities',
                    slug: 'types-discontinuities',
                    title: 'Types of Discontinuities',
                    content: '<p>When continuity fails at a point, the nature of the failure can take several forms. Classifying discontinuities is more than a taxonomic exercise—the type of discontinuity determines what can be salvaged analytically and has implications for integrability and the validity of theorems.</p>',
                    subsections: [
                      {
                        id: 'classification',
                        title: 'Classification of Discontinuities',
                        content: '<p>The principal types of discontinuities are: <strong>removable discontinuities</strong>, where the limit exists but does not equal the function value; <strong>jump discontinuities</strong>, where the one-sided limits both exist but differ; and <strong>essential discontinuities</strong>, where at least one one-sided limit does not exist (including oscillatory discontinuities and infinite discontinuities).</p><p>An oscillatory discontinuity, exemplified by f(x) = sin(1/x) at x = 0, occurs when the function oscillates infinitely many times in every neighborhood of the point, preventing the existence of any limit. An infinite discontinuity, as in f(x) = 1/x at x = 0, occurs when the function grows without bound.</p>',
                        subsubsections: [
                          {
                            id: 'jump-discontinuity',
                            title: 'Jump Discontinuities in Practice',
                            content: '<p>Jump discontinuities model abrupt changes: tax brackets, electric switches, and certain physical phenomena involve quantities that change value instantaneously. The floor function ⌊x⌋ has jump discontinuities at every integer, jumping down by 1 at each. Despite these jumps, the function is integrable, illustrating that discontinuity does not preclude integrability.</p>'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: 'ivt',
                    slug: 'ivt',
                    title: 'Intermediate Value Theorem',
                    content: '<p>The Intermediate Value Theorem (IVT) is one of the great theorems of calculus, capturing the intuitive idea that a continuous function cannot jump over intermediate values. It guarantees the existence of solutions to equations and has wide-ranging applications in mathematics, physics, and economics.</p>',
                    subsections: [
                      {
                        id: 'ivt-statement',
                        title: 'Statement and Proof Sketch',
                        content: '<p>The Intermediate Value Theorem states: if f is continuous on [a, b] and N is any value strictly between f(a) and f(b), then there exists at least one c in (a, b) such that f(c) = N. The proof relies on the completeness of the real numbers—the least upper bound property—and is a beautiful application of real analysis.</p><p>A particularly important corollary is Bolzano\'s theorem: if f is continuous on [a, b] and f(a) and f(b) have opposite signs, then f has at least one zero in (a, b). This provides a theoretical foundation for numerical root-finding methods such as bisection.</p>',
                        subsubsections: [
                          {
                            id: 'bisection-method',
                            title: 'The Bisection Method',
                            content: '<p>The bisection method exploits the IVT to locate roots numerically. Starting with an interval [a, b] where f changes sign, one evaluates f at the midpoint m = (a+b)/2. If f(m) = 0, we are done; otherwise, the sign change is in [a, m] or [m, b]. Repeating this halves the interval at each step, converging linearly to a root. After n steps, the root is located within an interval of length (b−a)/2^n.</p>'
                          }
                        ]
                      },
                      {
                        id: 'ivt-applications',
                        title: 'Applications of the IVT',
                        content: '<p>The IVT guarantees that any polynomial of odd degree has at least one real root—since odd-degree polynomials take arbitrarily large positive and negative values, they must cross zero somewhere. It also implies that the equation cos(x) = x has a solution (as can be shown by considering f(x) = cos(x) − x and noting f(0) > 0, f(π/2) < 0).</p><p>In economics, the IVT is invoked to argue that competitive markets clear: if supply is a continuous function of price that exceeds demand at high prices and falls short of demand at low prices, the theorem guarantees the existence of an equilibrium price. In game theory, related fixed-point theorems—themselves generalizations of the IVT—establish the existence of Nash equilibria.</p>',
                        subsubsections: [
                          {
                            id: 'fixed-point',
                            title: 'Fixed-Point Theorems',
                            content: '<p>Brouwer\'s fixed-point theorem, a topological generalization of the IVT, states that any continuous function from a closed ball in ℝⁿ to itself has at least one fixed point. For n = 1, this reduces to the observation that any continuous function f: [0,1] → [0,1] must satisfy f(c) = c for some c ∈ [0,1], a direct consequence of the IVT applied to g(x) = f(x) − x.</p>'
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 'differentiation',
            slug: 'differentiation',
            title: 'Differentiation',
            chapters: [
              {
                id: 'the-derivative',
                slug: 'the-derivative',
                title: 'The Derivative',
                sections: [
                  {
                    id: 'definition-derivative',
                    slug: 'definition-derivative',
                    title: 'Definition of the Derivative',
                    content: '<p>The derivative is one of the two fundamental objects of calculus (alongside the integral). It captures the instantaneous rate of change of a function—how rapidly the function\'s output is changing at a particular input. The derivative has interpretations in geometry (slope of a tangent line), physics (instantaneous velocity and acceleration), and economics (marginal cost and revenue).</p>',
                    subsections: [
                      {
                        id: 'limit-definition',
                        title: 'The Limit Definition',
                        content: '<p>The derivative of f at x = a is defined as f\'(a) = lim<sub>h→0</sub> [f(a+h) − f(a)]/h, provided this limit exists. This expression is the limit of the average rate of change over the interval [a, a+h] as the interval length h shrinks to zero. When the limit exists, f is said to be <em>differentiable</em> at a.</p><p>Geometrically, [f(a+h) − f(a)]/h is the slope of the secant line through the points (a, f(a)) and (a+h, f(a+h)). As h → 0, the secant line rotates toward the tangent line, and its slope approaches the slope of the tangent. The derivative is thus the slope of the tangent line to the graph of f at the point (a, f(a)).</p>',
                        subsubsections: [
                          {
                            id: 'differentiability-continuity',
                            title: 'Differentiability Implies Continuity',
                            content: '<p>An important theorem states that if f is differentiable at a, then f is continuous at a. The converse is false: the function f(x) = |x| is continuous at 0 but not differentiable there (the left and right derivatives are −1 and +1 respectively). Differentiability is thus a stronger condition than continuity.</p>'
                          }
                        ]
                      },
                      {
                        id: 'derivative-notation',
                        title: 'Notation for Derivatives',
                        content: '<p>Several notations for the derivative are in common use. Lagrange\'s notation f\'(x) (read "f prime of x") is widely used for functions. Leibniz\'s notation dy/dx (or df/dx) emphasizes the ratio interpretation and is particularly convenient when working with the chain rule and implicit differentiation. Newton\'s dot notation ẋ is used in physics to denote time derivatives.</p><p>Higher derivatives are denoted f\'\'(x), f\'\'\'(x), or f⁽ⁿ⁾(x) in Lagrange\'s notation, and d²y/dx², d³y/dx³, dⁿy/dxⁿ in Leibniz\'s notation. These notations capture different intuitions and are suited to different computational contexts.</p>',
                        subsubsections: [
                          {
                            id: 'higher-derivatives',
                            title: 'Higher-Order Derivatives',
                            content: '<p>The second derivative f\'\'(x) is the derivative of f\'(x) and measures the rate of change of the rate of change—the concavity of the original function. In kinematics, the first derivative of position is velocity, and the second derivative is acceleration. The third derivative (jerk) measures the rate of change of acceleration.</p>'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: 'differentiation-rules',
                    slug: 'differentiation-rules',
                    title: 'Differentiation Rules',
                    content: '<p>Computing derivatives from the limit definition for every function would be laborious. A set of differentiation rules, derived from the definition, allows efficient computation of derivatives for combinations of elementary functions. Mastery of these rules is fundamental to all applications of calculus.</p>',
                    subsections: [
                      {
                        id: 'basic-rules',
                        title: 'Basic Differentiation Rules',
                        content: '<p>The power rule states d/dx[xⁿ] = nxⁿ⁻¹ for any real number n. The constant rule d/dx[c] = 0 and the constant multiple rule d/dx[cf(x)] = cf\'(x) follow directly from the definition. The sum rule d/dx[f(x) + g(x)] = f\'(x) + g\'(x) allows differentiation of sums term by term.</p><p>Derivatives of trigonometric functions: d/dx[sin x] = cos x and d/dx[cos x] = −sin x, from which all other trig derivatives follow. Derivatives of exponential and logarithmic functions: d/dx[eˣ] = eˣ (the unique function equal to its own derivative) and d/dx[ln x] = 1/x.</p>',
                        subsubsections: [
                          {
                            id: 'product-quotient-rules',
                            title: 'Product and Quotient Rules',
                            content: '<p>The product rule states d/dx[f(x)g(x)] = f\'(x)g(x) + f(x)g\'(x). The quotient rule states d/dx[f(x)/g(x)] = [f\'(x)g(x) − f(x)g\'(x)]/[g(x)]². These rules enable differentiation of products and quotients of differentiable functions. A common mnemonic for the quotient rule is "low d-high minus high d-low over low squared."</p>'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: 'chain-rule',
                    slug: 'chain-rule',
                    title: 'Chain Rule',
                    content: '<p>The chain rule is the most powerful and frequently used differentiation rule, enabling the differentiation of composite functions. Its discovery by Leibniz is one of the key steps that makes calculus computationally tractable for complex functions.</p>',
                    subsections: [
                      {
                        id: 'chain-rule-statement',
                        title: 'Statement and Applications',
                        content: '<p>If g is differentiable at x and f is differentiable at g(x), then the composite function h(x) = f(g(x)) is differentiable at x and h\'(x) = f\'(g(x)) · g\'(x). In Leibniz notation, if y = f(u) and u = g(x), then dy/dx = (dy/du)(du/dx).</p><p>The chain rule is applied whenever a function is recognized as a composition. For example, to differentiate sin(x²), identify the outer function as sin and the inner function as x². The derivative is cos(x²) · 2x. For e^(3x²), the derivative is e^(3x²) · 6x.</p>',
                        subsubsections: [
                          {
                            id: 'implicit-differentiation',
                            title: 'Implicit Differentiation',
                            content: '<p>Implicit differentiation uses the chain rule to differentiate equations that define y implicitly as a function of x. Differentiating both sides of the equation with respect to x, treating y as a function of x, and solving for dy/dx. For the circle x² + y² = r², differentiating yields 2x + 2y(dy/dx) = 0, giving dy/dx = −x/y.</p>'
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                id: 'applications-derivatives',
                slug: 'applications-derivatives',
                title: 'Applications of Derivatives',
                sections: [
                  {
                    id: 'related-rates',
                    slug: 'related-rates',
                    title: 'Related Rates',
                    content: '<p>Related rates problems apply implicit differentiation to situations where two or more quantities change with time and their rates of change are mathematically linked. These problems are among the most practically useful applications of differential calculus, arising in physics, engineering, and everyday reasoning.</p>',
                    subsections: [
                      {
                        id: 'related-rates-method',
                        title: 'Method for Related Rates Problems',
                        content: '<p>The standard approach consists of four steps: (1) draw a diagram and identify all relevant quantities as functions of time; (2) write an equation relating the quantities; (3) differentiate both sides with respect to time using implicit differentiation and the chain rule; (4) substitute the known values and solve for the unknown rate.</p><p>A classic example: a ladder 10 meters long leans against a wall. The foot slides away from the wall at 2 m/s. How fast is the top sliding down when the foot is 6 m from the wall? Using the Pythagorean relation x² + y² = 100 and differentiating: 2x(dx/dt) + 2y(dy/dt) = 0. At x = 6, y = 8, and dx/dt = 2, so dy/dt = −6·2/8 = −3/2 m/s.</p>',
                        subsubsections: [
                          {
                            id: 'related-rates-examples',
                            title: 'Further Examples',
                            content: '<p>Another standard example: water drains from a conical tank of radius R and height H at rate Q m³/s. How fast is the water level falling when the depth is h? Using similar triangles, the radius at depth h is r = Rh/H. The volume is V = πr²h/3 = πR²h³/(3H²). Differentiating: dV/dt = πR²h²/(H²) · dh/dt = −Q, giving dh/dt = −QH²/(πR²h²).</p>'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: 'optimization',
                    slug: 'optimization',
                    title: 'Optimization',
                    content: '<p>Optimization problems seek the maximum or minimum value of a function on a given domain. These problems are perhaps the most important application of differential calculus, with applications spanning engineering design, economic planning, and scientific modeling.</p>',
                    subsections: [
                      {
                        id: 'critical-points',
                        title: 'Critical Points and the First Derivative Test',
                        content: '<p>A critical point of f is a point in its domain where f\'(x) = 0 or f\'(x) does not exist. By Fermat\'s theorem, if f has a local extremum at x = c and f\'(c) exists, then f\'(c) = 0. The first derivative test classifies critical points: if f\' changes from positive to negative at c, f has a local maximum; if f\' changes from negative to positive, f has a local minimum; if f\' does not change sign, the critical point is neither.</p>',
                        subsubsections: [
                          {
                            id: 'second-derivative-test',
                            title: 'The Second Derivative Test',
                            content: '<p>The second derivative test provides an alternative classification. If f\'(c) = 0 and f\'\'(c) > 0, then f has a local minimum at c (the function is concave up there). If f\'\'(c) < 0, f has a local maximum. If f\'\'(c) = 0, the test is inconclusive and the first derivative test must be used.</p>'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: 'mean-value-theorem',
                    slug: 'mean-value-theorem',
                    title: 'Mean Value Theorem',
                    content: '<p>The Mean Value Theorem (MVT) is a cornerstone result connecting the derivative to the average rate of change on an interval. It is one of the most theoretically significant theorems in differential calculus and is used to prove many other important results.</p>',
                    subsections: [
                      {
                        id: 'mvt-statement',
                        title: 'Statement and Geometric Meaning',
                        content: '<p>The Mean Value Theorem states: if f is continuous on [a, b] and differentiable on (a, b), then there exists c ∈ (a, b) such that f\'(c) = [f(b) − f(a)]/(b − a). Geometrically, there is a point on the curve where the tangent is parallel to the secant through the endpoints.</p><p>Rolle\'s theorem is the special case where f(a) = f(b): there must then be a point where f\'(c) = 0. This is used to show that between any two roots of a differentiable function, there is at least one root of its derivative—providing a lower bound on the number of critical points.</p>',
                        subsubsections: [
                          {
                            id: 'mvt-applications',
                            title: 'Applications of the MVT',
                            content: '<p>The MVT implies that if f\'(x) > 0 on an interval, then f is strictly increasing there. If f\'(x) = 0 everywhere on an interval, then f is constant. These results, trivially true intuitively, require the MVT for rigorous proof. The MVT also underlies the proof that antiderivatives of a function on an interval differ by at most a constant—the basis of the Fundamental Theorem of Calculus.</p>'
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'psychology',
    slug: 'psychology',
    title: 'Psychology',
    books: [
      {
        id: 'intro-psychology',
        slug: 'intro-psychology',
        title: 'Introduction to Psychology',
        units: [
          {
            id: 'foundations',
            slug: 'foundations',
            title: 'Foundations of Psychology',
            chapters: [
              {
                id: 'history-approaches',
                slug: 'history-approaches',
                title: 'History and Approaches',
                sections: [
                  {
                    id: 'origins-psychology',
                    slug: 'origins-psychology',
                    title: 'Origins of Psychology',
                    content: '<p>Psychology as a formal discipline is relatively young, yet its roots extend deep into philosophy and natural science. The question of mind—its nature, its relationship to the body, and its role in behavior—occupied ancient thinkers from Aristotle to Descartes. The establishment of psychology as an independent empirical science occurred only in the late nineteenth century, with Wilhelm Wundt\'s founding of the first experimental psychology laboratory in Leipzig in 1879.</p>',
                    subsections: [
                      {
                        id: 'philosophical-roots',
                        title: 'Philosophical Roots',
                        content: '<p>The philosophical tradition that gave rise to psychology includes debates between rationalists and empiricists about the origins of knowledge. Rationalists such as Descartes and Kant argued that the mind possesses innate structures and principles. Empiricists including Locke, Hume, and Mill held that all knowledge derives from sensory experience, and that the mind is, at birth, a blank slate (<em>tabula rasa</em>).</p><p>These debates shaped early psychological theories. Associationism—the view that complex mental states arise from associations between simple sensory elements—drew directly from British empiricism and influenced early experimental psychology. The tension between nativist and empiricist views continues to inform contemporary debates in cognitive science and developmental psychology.</p>',
                        subsubsections: [
                          {
                            id: 'mind-body-problem',
                            title: 'The Mind-Body Problem',
                            content: '<p>The relationship between mind and body—between mental states and physical processes—is one of the oldest and most enduring philosophical problems. Descartes proposed substance dualism: mind and body are distinct substances that interact causally. This view raises difficult questions about <em>how</em> an immaterial mind can cause physical actions. Modern alternatives include physicalism (mental states are physical states), functionalism (mental states are defined by their functional roles, not their physical substrate), and various eliminativist positions.</p>'
                          }
                        ]
                      },
                      {
                        id: 'founding-psychology',
                        title: 'The Founding of Scientific Psychology',
                        content: '<p>Wilhelm Wundt (1832–1920) is conventionally credited as the founder of experimental psychology. His laboratory at Leipzig used introspection—trained self-observation—as its primary method, seeking to decompose conscious experience into its elementary components. This approach, later called structuralism by Wundt\'s student Edward Titchener, aimed to build a "periodic table" of mental elements analogous to chemistry\'s classification of elements.</p><p>William James (1842–1910), the father of American psychology, took a different view. In his monumental <em>Principles of Psychology</em> (1890), James argued that consciousness is better understood as a continuous stream than a collection of static elements. His functionalist perspective asked not "what is consciousness composed of?" but "what does consciousness do?"—how does it serve the organism\'s adaptation to its environment?</p>',
                        subsubsections: [
                          {
                            id: 'structuralism-functionalism',
                            title: 'Structuralism vs. Functionalism',
                            content: '<p>The debate between structuralism and functionalism set the agenda for much of early American psychology. Structuralism, with its focus on the contents of consciousness via introspection, was criticized for being too subjective and unreliable—different trained introspectors often reached contradictory conclusions. Functionalism, influenced by Darwin\'s theory of evolution, asked about the adaptive purposes of mental processes and opened psychology to applied concerns in education, industry, and mental health.</p>'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: 'major-perspectives',
                    slug: 'major-perspectives',
                    title: 'Major Perspectives',
                    content: '<p>Modern psychology is not a unified discipline with a single theoretical framework but a collection of overlapping perspectives, each emphasizing different aspects of behavior and mental processes. Understanding these perspectives—their assumptions, methods, and contributions—is essential for appreciating how psychologists approach their subject matter.</p>',
                    subsections: [
                      {
                        id: 'psychoanalytic',
                        title: 'The Psychoanalytic Perspective',
                        content: '<p>Sigmund Freud (1856–1939) proposed that behavior is governed largely by unconscious forces—repressed wishes, conflicts, and memories beyond the reach of conscious awareness. His psychoanalytic theory posited that the mind has three levels: the conscious, the preconscious, and the unconscious. The personality is structured as three competing agencies: the id (primal drives), the ego (rational mediation), and the superego (internalized social norms).</p><p>Freud\'s methods—free association, dream analysis, and analysis of slips of the tongue (parapraxes)—aimed to bring unconscious material into consciousness. While many specific Freudian claims have been disputed or abandoned, the broader insight that much mental processing occurs outside awareness has been validated by modern cognitive neuroscience.</p>',
                        subsubsections: [
                          {
                            id: 'neo-freudians',
                            title: 'Neo-Freudian Theorists',
                            content: '<p>Several of Freud\'s followers modified or extended his theory while retaining an emphasis on unconscious processes. Carl Jung proposed a collective unconscious containing universal archetypes shared across humanity. Alfred Adler emphasized inferiority feelings and striving for superiority. Erik Erikson extended psychoanalytic theory across the lifespan, proposing eight stages of psychosocial development. Karen Horney critiqued Freud\'s androcentric assumptions and emphasized cultural and interpersonal factors in neurosis.</p>'
                          }
                        ]
                      },
                      {
                        id: 'behaviorism',
                        title: 'Behaviorism',
                        content: '<p>John B. Watson (1878–1958) launched a revolution in American psychology with his 1913 manifesto declaring that psychology should be the science of behavior, not of consciousness. Behaviorism rejected introspection as unscientific and focused exclusively on observable, measurable behavior. The goal was to discover lawful relationships between environmental stimuli and behavioral responses.</p><p>B.F. Skinner (1904–1990) developed behaviorism into a comprehensive experimental and theoretical program. His operant conditioning paradigm showed that behavior is shaped by its consequences: behaviors followed by reinforcement are strengthened; those followed by punishment are weakened. Skinner\'s radical behaviorism denied any explanatory role for internal mental states, treating them as byproducts of behavior-environment relations rather than causes.</p>',
                        subsubsections: [
                          {
                            id: 'cognitive-revolution',
                            title: 'The Cognitive Revolution',
                            content: '<p>By the 1950s and 1960s, behaviorism was challenged by a new paradigm: cognitive psychology. Critics argued that many phenomena—language acquisition, problem-solving, mental imagery—could not be explained without reference to internal mental representations and processes. Noam Chomsky\'s devastating review of Skinner\'s <em>Verbal Behavior</em> (1959) is often cited as a turning point, arguing that language is too complex and rule-governed to be acquired through operant conditioning alone.</p>'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: 'research-methods',
                    slug: 'research-methods',
                    title: 'Research Methods',
                    content: '<p>Psychology is an empirical science: its claims are evaluated through systematic observation and experimentation. Understanding research methods is not merely a technical matter but a conceptual one—the methods a researcher employs shape what questions can be asked, what conclusions can be drawn, and what biases might distort the findings.</p>',
                    subsections: [
                      {
                        id: 'experimental-method',
                        title: 'The Experimental Method',
                        content: '<p>The randomized controlled experiment is the gold standard of psychological research because it permits causal inference. In a true experiment, the researcher randomly assigns participants to conditions—at minimum, a treatment group and a control group—and manipulates the independent variable while holding other factors constant. Random assignment ensures that group differences at baseline are due to chance alone, enabling observed outcome differences to be attributed to the manipulation.</p><p>Internal validity—the degree to which an experiment supports a causal conclusion—depends on the control of confounds: variables other than the independent variable that might affect the outcome. Common threats include selection bias, demand characteristics (where participants behave differently because they know they are being studied), and experimenter expectancy effects (where the experimenter\'s knowledge of condition affects their behavior toward participants).</p>',
                        subsubsections: [
                          {
                            id: 'double-blind',
                            title: 'Double-Blind Procedures',
                            content: '<p>Double-blind experimental designs protect against both demand characteristics and experimenter expectancy effects by ensuring that neither participants nor the experimenter interacting with them know who is in the treatment or control condition. This is standard practice in pharmaceutical research (where participants receive either an active drug or an inert placebo) and is increasingly used in psychological research where feasible.</p>'
                          }
                        ]
                      },
                      {
                        id: 'non-experimental',
                        title: 'Non-Experimental Methods',
                        content: '<p>Many important psychological questions cannot be addressed experimentally for ethical or practical reasons. Non-experimental methods—correlational studies, surveys, case studies, naturalistic observation, and archival research—permit the investigation of such questions, though they do not support causal inference as directly as experiments.</p><p>Correlational research examines relationships between naturally occurring variables. A positive correlation means variables tend to increase together; a negative correlation means one increases as the other decreases. The magnitude of correlation, expressed as the correlation coefficient r (ranging from −1 to +1), indicates the strength of the relationship. Crucially, correlation does not imply causation: a third variable may cause both correlated variables to change in tandem.</p>',
                        subsubsections: [
                          {
                            id: 'case-study',
                            title: 'Case Studies and Their Role',
                            content: '<p>Case studies—intensive investigations of single individuals, groups, or events—provide richly detailed information that can generate hypotheses, challenge existing theories, and illuminate rare phenomena. Famous neuropsychological case studies, such as Phineas Gage (frontal lobe damage and personality change) and H.M. (anterograde amnesia following hippocampal removal), have profoundly shaped our understanding of brain-behavior relations. Their limitation is that it is unknown how far conclusions generalize beyond the individual case.</p>'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: 'ethics-research',
                    slug: 'ethics-research',
                    title: 'Ethics in Research',
                    content: '<p>The history of psychology includes episodes of research that violated participants\' rights, from deception studies to harmful experiments on vulnerable populations. These abuses prompted the development of formal ethical guidelines governing psychological research, designed to protect participants while preserving the capacity for scientific inquiry.</p>',
                    subsections: [
                      {
                        id: 'informed-consent',
                        title: 'Informed Consent and Debriefing',
                        content: '<p>The principle of informed consent requires that participants be told, before the study begins, what it involves—its purpose, procedures, risks, and benefits—and that their participation is voluntary and they may withdraw at any time without penalty. When research requires deception (e.g., Milgram\'s obedience studies), full disclosure in advance is impossible; in such cases, participants must be thoroughly debriefed afterward, explaining the deception and the reasons for it.</p>',
                        subsubsections: [
                          {
                            id: 'irb',
                            title: 'Institutional Review Boards',
                            content: '<p>Institutional Review Boards (IRBs)—committees of researchers, ethicists, and community members—review research proposals involving human participants before data collection begins. They evaluate whether the anticipated scientific benefits justify any risks to participants and whether ethical principles of respect, beneficence, and justice are satisfied. Parallel bodies (Institutional Animal Care and Use Committees, or IACUCs) oversee research involving non-human animals.</p>'
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                id: 'biological-bases',
                slug: 'biological-bases',
                title: 'Biological Bases of Behavior',
                sections: [
                  {
                    id: 'neurons-synapses',
                    slug: 'neurons-synapses',
                    title: 'Neurons and Synapses',
                    content: '<p>All psychological processes—perception, thought, emotion, action—are ultimately implemented in the nervous system. Understanding neurons, the cellular building blocks of the nervous system, and synapses, the junctions across which neurons communicate, is prerequisite to understanding the biological basis of behavior and mental life.</p>',
                    subsections: [
                      {
                        id: 'neuron-structure',
                        title: 'Structure of the Neuron',
                        content: '<p>A neuron consists of a cell body (soma) containing the nucleus; dendrites, which receive signals from other neurons; and an axon, which transmits signals away from the cell body toward other neurons, muscles, or glands. Axons are often wrapped in a myelin sheath—a fatty insulating layer produced by glial cells—that dramatically increases the speed and efficiency of signal transmission.</p><p>The resting potential of a neuron is approximately −70 mV, reflecting the difference in ionic concentrations across the cell membrane. When sufficiently stimulated, the neuron fires an action potential: a rapid, all-or-none reversal of membrane potential that propagates down the axon at speeds ranging from 1 to 120 meters per second, depending on axon diameter and myelination.</p>',
                        subsubsections: [
                          {
                            id: 'action-potential',
                            title: 'The Action Potential',
                            content: '<p>The action potential begins when depolarization at the axon hillock reaches threshold (approximately −55 mV). Voltage-gated sodium channels open, flooding the cell with Na⁺ ions and rapidly driving the membrane potential to about +40 mV. Then potassium channels open and sodium channels close, repolarizing the cell. A brief hyperpolarization (the refractory period) follows, during which the neuron cannot fire again. This absolute refractory period limits the maximum firing rate and ensures that action potentials travel in one direction only.</p>'
                          }
                        ]
                      },
                      {
                        id: 'synaptic-transmission',
                        title: 'Synaptic Transmission',
                        content: '<p>When an action potential reaches the axon terminal, it triggers the release of chemical messengers called neurotransmitters from vesicles into the synaptic cleft. These molecules diffuse across the cleft and bind to receptor proteins on the postsynaptic membrane. Depending on the neurotransmitter and receptor type, this binding either depolarizes the postsynaptic neuron (excitatory postsynaptic potential, EPSP) or hyperpolarizes it (inhibitory postsynaptic potential, IPSP).</p><p>Major neurotransmitters include: acetylcholine (movement, learning, memory); dopamine (reward, motivation, motor control); serotonin (mood, sleep, appetite); norepinephrine (arousal, attention); glutamate (the main excitatory neurotransmitter); and GABA (the main inhibitory neurotransmitter). Many psychiatric drugs act by altering neurotransmitter levels or receptor sensitivity.</p>',
                        subsubsections: [
                          {
                            id: 'reuptake-drugs',
                            title: 'Reuptake and Pharmacology',
                            content: '<p>After release, neurotransmitters are typically cleared from the synaptic cleft by reuptake—transport back into the presynaptic terminal—or by enzymatic degradation. Selective serotonin reuptake inhibitors (SSRIs) such as fluoxetine (Prozac) block serotonin reuptake, increasing serotonin availability in the synapse and alleviating symptoms of depression and anxiety. Understanding synaptic pharmacology is essential for developing treatments for neurological and psychiatric conditions.</p>'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: 'the-brain',
                    slug: 'the-brain',
                    title: 'The Brain',
                    content: '<p>The human brain is arguably the most complex structure in the known universe—roughly 86 billion neurons forming trillions of synaptic connections organized into intricate circuits and systems. Understanding its gross anatomy, functional organization, and methods of investigation is foundational to biological psychology and neuroscience.</p>',
                    subsections: [
                      {
                        id: 'brain-structures',
                        title: 'Major Brain Structures',
                        content: '<p>The brain is organized hierarchically. The brainstem (medulla, pons, midbrain) controls basic life functions: heart rate, breathing, swallowing, and arousal. The cerebellum, attached to the brainstem, coordinates movement, balance, and certain forms of learning. The limbic system—including the hippocampus (memory formation), amygdala (emotion, especially fear), and hypothalamus (homeostasis, hunger, thirst, sexual behavior)—mediates emotional and motivational processes.</p><p>The cerebral cortex, the outer layer of the cerebral hemispheres, is responsible for the higher cognitive functions that distinguish humans from other species: language, abstract reasoning, planning, and complex perception. It is organized into four lobes: the frontal lobe (executive functions, motor control), parietal lobe (somatosensation, spatial processing), temporal lobe (auditory processing, language, memory), and occipital lobe (visual processing).</p>',
                        subsubsections: [
                          {
                            id: 'neuroplasticity',
                            title: 'Neuroplasticity',
                            content: '<p>The brain is not a static structure but continually reorganizes in response to experience—a property called neuroplasticity. New synaptic connections form and strengthen with use (long-term potentiation); unused connections are pruned. This plasticity is greatest during critical periods of development but persists throughout life. Research on neuroplasticity has transformed our understanding of learning, recovery from brain injury, and the long-term effects of experience on brain structure.</p>'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: 'genetics-behavior',
                    slug: 'genetics-behavior',
                    title: 'Genetics and Behavior',
                    content: '<p>Behavior genetics investigates the relative contributions of genetic and environmental factors to individual differences in behavior, personality, cognitive abilities, and psychopathology. Its central methods—twin studies and adoption studies—have produced robust findings that challenge both purely environmental and purely genetic accounts of human differences.</p>',
                    subsections: [
                      {
                        id: 'heritability',
                        title: 'Heritability and Its Interpretation',
                        content: '<p>Heritability (h²) is a statistic indicating what proportion of the variance in a trait in a given population is attributable to genetic differences among individuals. Heritability estimates for many psychological traits—intelligence, personality dimensions, major psychiatric disorders—typically fall between 0.4 and 0.8, indicating substantial but not exclusive genetic influence. It is crucial to understand that heritability is a population statistic, not an individual one; it cannot tell us how much of any particular person\'s trait level is due to their genes.</p>',
                        subsubsections: [
                          {
                            id: 'gene-environment',
                            title: 'Gene-Environment Interactions',
                            content: '<p>Genetic and environmental influences do not simply add together; they interact. A gene-environment interaction (G×E) occurs when the effect of a genotype depends on the environment, or vice versa. The classic example is phenylketonuria (PKU): a genetic variant causing inability to metabolize phenylalanine leads to intellectual disability only when phenylalanine is present in the diet; a low-phenylalanine diet prevents the disability entirely. Many psychological disorders likely involve G×E interactions of less extreme but still important kinds.</p>'
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 'cognition-perception',
            slug: 'cognition-perception',
            title: 'Cognition and Perception',
            chapters: [
              {
                id: 'sensation-perception',
                slug: 'sensation-perception',
                title: 'Sensation and Perception',
                sections: [
                  {
                    id: 'sensory-processes',
                    slug: 'sensory-processes',
                    title: 'Sensory Processes',
                    content: '<p>Sensation refers to the detection of physical energy by sensory receptors and the transmission of that information to the brain. Perception refers to the interpretation and organization of sensory information into meaningful experiences. Although these processes are often treated separately, they form a continuous chain: without sensation there is no perception, and perception actively shapes what is sensed by directing attention and generating expectations.</p>',
                    subsections: [
                      {
                        id: 'psychophysics',
                        title: 'Psychophysics',
                        content: '<p>Psychophysics—the scientific study of the relationship between physical stimuli and psychological responses—was established by Gustav Fechner in the 19th century. The absolute threshold is the minimum stimulus intensity detectable 50% of the time under ideal conditions. The difference threshold (just noticeable difference, or JND) is the minimum change in stimulus intensity detectable 50% of the time.</p><p>Weber\'s Law states that the JND is a constant fraction of the stimulus intensity: ΔI/I = k, where ΔI is the JND, I is the original intensity, and k is a constant characteristic of the sense modality. This captures the fact that detecting a change is harder against a more intense background—noticing the addition of one candle to a room with one candle is easier than noticing the same candle added to a room with 100 candles.</p>',
                        subsubsections: [
                          {
                            id: 'signal-detection',
                            title: 'Signal Detection Theory',
                            content: '<p>Signal detection theory (SDT) provides a more sophisticated account of perception under uncertainty than the classical threshold model. SDT recognizes that perception involves both sensory sensitivity and decision-making under uncertainty. The observer must decide whether a signal is present or absent given noisy sensory input; this decision reflects both perceptual sensitivity (d\') and a response criterion (β) that can be adjusted according to costs and benefits. SDT has applications in radiology, air traffic control, eyewitness testimony research, and clinical psychology.</p>'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: 'visual-perception',
                    slug: 'visual-perception',
                    title: 'Visual Perception',
                    content: '<p>Vision is the dominant sense for humans, occupying roughly one-third of the cerebral cortex. The visual system performs remarkable feats of analysis—parsing a two-dimensional retinal image into objects, recognizing them across changes in position, size, and illumination, and perceiving three-dimensional structure from flat images. Understanding these achievements illuminates both the capabilities and the limitations of human perception.</p>',
                    subsections: [
                      {
                        id: 'visual-system',
                        title: 'The Visual System',
                        content: '<p>Light enters the eye through the cornea and lens, which focus it onto the retina—a layered structure of photoreceptors (rods and cones) and neurons. Cones, concentrated in the fovea, mediate color vision and fine detail; rods, found throughout the retina, are sensitive to low light levels and motion. Signals from photoreceptors pass through bipolar cells and retinal ganglion cells; the axons of ganglion cells form the optic nerve.</p><p>At the optic chiasm, fibers from the nasal half of each retina cross to the opposite hemisphere, while temporal fibers remain ipsilateral. This arrangement means the left visual field projects to the right hemisphere and vice versa. Visual information is processed through two pathways: the ventral stream ("what" pathway) leading to the temporal lobe identifies objects; the dorsal stream ("where/how" pathway) leading to the parietal lobe processes spatial relationships and guides actions.</p>',
                        subsubsections: [
                          {
                            id: 'gestalt-principles',
                            title: 'Gestalt Principles',
                            content: '<p>Gestalt psychologists of the early 20th century demonstrated that perception is organized and holistic—"the whole is greater than the sum of its parts." Their principles of perceptual organization include: proximity (nearby elements are grouped together), similarity (similar elements are grouped), closure (incomplete figures are perceived as complete), continuity (smooth curves are preferred over abrupt changes), and figure-ground (the tendency to perceive a figure against a background).</p>'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: 'other-senses',
                    slug: 'other-senses',
                    title: 'Other Senses',
                    content: '<p>While vision dominates human experience, the other senses—hearing, touch, taste, smell, and the vestibular and proprioceptive systems—are equally essential for navigating and making sense of the world. Each sense has a dedicated transduction mechanism, specific neural pathways, and unique functional properties.</p>',
                    subsections: [
                      {
                        id: 'audition',
                        title: 'Audition',
                        content: '<p>Hearing begins with sound waves—pressure variations in the air—entering the outer ear and causing the eardrum to vibrate. These vibrations are amplified by the three ossicles of the middle ear and transmitted to the fluid-filled cochlea. Hair cells in the cochlea transduce fluid movement into neural signals; their position along the basilar membrane encodes frequency (pitch), following the principle of tonotopic organization.</p><p>The auditory cortex, located in the superior temporal gyrus, processes complex sounds including speech and music. Binaural cues—differences in timing and intensity between the two ears—enable sound localization. Hearing loss can result from damage to the outer/middle ear (conductive hearing loss) or to the cochlea or auditory nerve (sensorineural hearing loss).</p>',
                        subsubsections: [
                          {
                            id: 'speech-perception',
                            title: 'Speech Perception',
                            content: '<p>Speech perception is remarkably robust: listeners can understand speech across diverse accents, speaking rates, and noise levels, and can parse continuous speech into words despite the absence of silence between words (the segmentation problem). The motor theory of speech perception (Liberman et al.) proposed that speech is perceived in terms of the intended articulatory gestures that produced it, explaining why visual speech cues (lip movements) interact with auditory perception—the McGurk effect.</p>'
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                id: 'memory-learning',
                slug: 'memory-learning',
                title: 'Memory and Learning',
                sections: [
                  {
                    id: 'types-memory',
                    slug: 'types-memory',
                    title: 'Types of Memory',
                    content: '<p>Memory is not a single, uniform system but a collection of distinct processes and stores that differ in their duration, capacity, neural substrates, and the type of information they hold. Understanding this taxonomy is essential for making sense of both normal memory function and the selective deficits produced by brain injury or disease.</p>',
                    subsections: [
                      {
                        id: 'memory-taxonomy',
                        title: 'The Taxonomy of Memory Systems',
                        content: '<p>A major distinction is between explicit (declarative) memory and implicit (non-declarative) memory. Explicit memory involves conscious recollection of facts and events and is further divided into semantic memory (general knowledge) and episodic memory (personal experiences situated in time and place). Implicit memory operates without conscious awareness and includes procedural memory (skills and habits), priming, and simple conditioning.</p><p>Working memory (sometimes called short-term memory) is a limited-capacity system that holds information in mind for immediate use. Baddeley\'s influential model proposes that working memory consists of a phonological loop (for verbal information), a visuospatial sketchpad (for visual and spatial information), and a central executive that coordinates these slave systems and relates working memory to long-term memory.</p>',
                        subsubsections: [
                          {
                            id: 'hm-case',
                            title: 'The Case of H.M.',
                            content: '<p>The patient H.M. (Henry Molaison, 1926–2008), who had his hippocampus bilaterally removed as a treatment for epilepsy, became the most studied individual in the history of neuroscience. Following surgery, H.M. could not form new long-term explicit memories (anterograde amnesia)—he could not remember events that occurred more than a few minutes earlier. Yet his working memory, long-term semantic memory, and implicit memory were largely intact, demonstrating that these systems are neurally distinct. His case established the hippocampus\'s critical role in forming new explicit memories.</p>'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: 'encoding-storage',
                    slug: 'encoding-storage',
                    title: 'Encoding and Storage',
                    content: '<p>The formation of long-term memories involves multiple processes: encoding (the initial registration of information), consolidation (the stabilization of a memory trace over time), and retrieval (accessing stored information). Each stage is subject to failure, and each offers points of intervention for improving memory performance.</p>',
                    subsections: [
                      {
                        id: 'levels-processing',
                        title: 'Levels of Processing',
                        content: '<p>Craik and Lockhart (1972) proposed that memory durability depends on the depth of processing at encoding. Shallow processing (e.g., noticing the typeface of a word) produces weak, short-lived memories. Deeper semantic processing (e.g., thinking about a word\'s meaning, relating it to prior knowledge) produces stronger, longer-lasting memories. The key variable is not rehearsal time per se but the elaborateness and meaningfulness of encoding.</p><p>The generation effect demonstrates that generating information oneself leads to better memory than passively reading it. The self-reference effect shows that material processed in relation to the self (e.g., "does this adjective describe you?") is remembered especially well. Both findings underscore that meaningful, elaborative encoding is the key to durable memory.</p>',
                        subsubsections: [
                          {
                            id: 'spaced-practice',
                            title: 'Spaced Practice and Retrieval',
                            content: '<p>Two of the most robust findings in memory research are the spacing effect and the testing effect. The spacing effect refers to the finding that distributed practice (studying material across multiple sessions) produces better long-term retention than massed practice (cramming). The testing effect (or retrieval practice effect) demonstrates that actively retrieving information strengthens memory more than re-reading. These findings have important practical implications for educational design.</p>'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: 'classical-conditioning',
                    slug: 'classical-conditioning',
                    title: 'Classical Conditioning',
                    content: '<p>Classical conditioning, discovered by Ivan Pavlov through his work on digestion in dogs, is one of the most fundamental forms of learning. It describes how an initially neutral stimulus comes to elicit a response through its repeated pairing with a stimulus that already elicits that response. Classical conditioning is ubiquitous in everyday life and has profound implications for understanding emotional responses, phobias, and therapeutic techniques.</p>',
                    subsections: [
                      {
                        id: 'pavlovian-principles',
                        title: 'Pavlovian Principles',
                        content: '<p>In Pavlov\'s original experiments, a bell (neutral stimulus) was sounded just before food powder (unconditioned stimulus, US) was placed in a dog\'s mouth, eliciting salivation (unconditioned response, UR). After repeated pairings, the bell alone came to elicit salivation (conditioned response, CR). The bell had become a conditioned stimulus (CS).</p><p>Several phenomena characterize classical conditioning: acquisition (the gradual development of the CR during CS-US pairings); extinction (the gradual disappearance of the CR when the CS is presented without the US); spontaneous recovery (the reappearance of an extinguished CR after a rest period); generalization (CRs to stimuli similar to the CS); and discrimination (CRs only to the specific CS, not to dissimilar stimuli).</p>',
                        subsubsections: [
                          {
                            id: 'rescorla-wagner',
                            title: 'The Rescorla-Wagner Model',
                            content: '<p>The Rescorla-Wagner model (1972) provided the first successful mathematical formulation of classical conditioning. It proposes that conditioning occurs only when the US is surprising (unpredicted). The change in associative strength on a given trial equals a learning rate parameter times the difference between the maximum possible associative strength and the current total associative strength. This model elegantly predicts blocking (no conditioning to a second CS added to an already conditioned CS) and other phenomena that challenged earlier contiguity theories.</p>'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: 'operant-conditioning',
                    slug: 'operant-conditioning',
                    title: 'Operant Conditioning',
                    content: '<p>Operant conditioning, developed by B.F. Skinner building on Edward Thorndike\'s law of effect, describes how behavior is shaped by its consequences. Unlike classical conditioning, which involves reflexive responses to stimuli, operant conditioning applies to voluntary behaviors that operate on the environment. Its principles are foundational to behavior modification, education, and animal training.</p>',
                    subsections: [
                      {
                        id: 'reinforcement-punishment',
                        title: 'Reinforcement and Punishment',
                        content: '<p>A reinforcer is any consequence that increases the future probability of the behavior it follows. A punisher is any consequence that decreases the future probability of the behavior it follows. These are defined by their effects, not by their nature: something is a reinforcer only if it actually increases behavior. Reinforcers can be primary (satisfying biological needs, e.g., food) or secondary/conditioned (acquiring reinforcing value through association with primary reinforcers, e.g., money).</p><p>Positive reinforcement involves presenting a desirable stimulus contingent on the behavior; negative reinforcement involves removing an aversive stimulus. Both increase behavior. Positive punishment involves presenting an aversive stimulus; negative punishment involves removing a desirable stimulus. Both decrease behavior. These four quadrants are fundamental to behavior analysis.</p>',
                        subsubsections: [
                          {
                            id: 'schedules-reinforcement',
                            title: 'Schedules of Reinforcement',
                            content: '<p>The pattern of reinforcement delivery—the reinforcement schedule—profoundly shapes behavior. Fixed-ratio (FR) schedules deliver reinforcement after a fixed number of responses and produce high, steady rates of responding with a brief pause after each reinforcement. Variable-ratio (VR) schedules deliver reinforcement after an unpredictable number of responses and produce the highest, most sustained rates of responding (slot machines operate on VR schedules). Fixed-interval (FI) schedules produce a scalloped pattern of low responding early in the interval that accelerates near the time of reinforcement. Variable-interval (VI) schedules produce low, steady responding.</p>'
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

export function getAllSections(): FlatSection[] {
  const flat: FlatSection[] = [];
  for (const topic of topics) {
    for (const book of topic.books) {
      for (const unit of book.units) {
        for (const chapter of unit.chapters) {
          for (const section of chapter.sections) {
            flat.push({
              topicSlug: topic.slug,
              bookSlug: book.slug,
              unitSlug: unit.slug,
              chapterSlug: chapter.slug,
              sectionSlug: section.slug,
              topicTitle: topic.title,
              bookTitle: book.title,
              unitTitle: unit.title,
              chapterTitle: chapter.title,
              sectionTitle: section.title,
              section,
              chapter,
              unit,
              book,
              topic,
            });
          }
        }
      }
    }
  }
  return flat;
}

export function getSectionNav(
  topicSlug: string,
  bookSlug: string,
  unitSlug: string,
  chapterSlug: string,
  sectionSlug: string
): { prev: FlatSection | null; next: FlatSection | null; current: FlatSection | null } {
  const all = getAllSections();
  const idx = all.findIndex(
    (s) =>
      s.topicSlug === topicSlug &&
      s.bookSlug === bookSlug &&
      s.unitSlug === unitSlug &&
      s.chapterSlug === chapterSlug &&
      s.sectionSlug === sectionSlug
  );
  if (idx === -1) return { prev: null, next: null, current: null };
  return {
    prev: idx > 0 ? all[idx - 1]! : null,
    next: idx < all.length - 1 ? all[idx + 1]! : null,
    current: all[idx]!,
  };
}
