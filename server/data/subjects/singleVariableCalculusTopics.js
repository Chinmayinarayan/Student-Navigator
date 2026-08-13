module.exports = [
  {
    "title": "Introduction to Calculus",
    "slug": "calculus-introduction-to-calculus",
    "order": 1,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Foundational overview of calculus principles, functions, domain and range, graphical representation, and how rates of change power engineering and computer science applications.",
    "subTopics": [
      "Introduction to Calculus",
      "Importance in Engineering",
      "Applications in CS",
      "Variables and Functions",
      "Types of Functions",
      "Domain and Range",
      "Graphical Representation",
      "Limits and Continuity Overview"
    ],
    "prerequisiteTitles": [],
    "learningObjectives": [
      "Understand the dual pillars of calculus: Differential (rates of change) and Integral (accumulation).",
      "Determine domain, range, and graphical properties of algebraic and transcendental functions.",
      "Apply Python SymPy and NumPy for mathematical function representation and evaluation."
    ],
    "notes": [
      {
        "title": "Calculus Fundamentals, Function Classifications & CS Applications",
        "content": "SINGLE VARIABLE CALCULUS FOUNDATIONS\n\n1. What is Calculus?\n   Calculus is the mathematical study of continuous change. It comprises two complementary branches:\n   - Differential Calculus: Analyzes instantaneous rates of change, slopes of curves, and optimization.\n   - Integral Calculus: Analyzes accumulation of quantities, areas under curves, and continuous summation.\n\n2. Functions, Domain, and Range:\n   A function $f: X \\to Y$ assigns each element $x \\in X$ (domain) to exactly one $y \\in Y$ (range).\n   - Domain determination constraints:\n     1. Denominators cannot be zero: $f(x) = \\frac{1}{g(x)} \\implies g(x) \\neq 0$.\n     2. Even roots require non-negative radicands: $f(x) = \\sqrt{g(x)} \\implies g(x) \\ge 0$.\n     3. Logarithmic arguments must be strictly positive: $f(x) = \\ln(g(x)) \\implies g(x) > 0$.\n\n3. Solved Worked Example (Domain & Range):\n   Find the domain and range of $f(x) = \\frac{\\sqrt{x + 3}}{x - 1}$.\n   - Condition 1: $x + 3 \\ge 0 \\implies x \\ge -3$.\n   - Condition 2: $x - 1 \\neq 0 \\implies x \\neq 1$.\n   - Domain: $[-3, 1) \\cup (1, \\infty)$.\n   - Range: $(-\\infty, 0) \\cup (0, \\infty)$ for valid real outputs.\n\n4. Python SymPy & NumPy Code Example:\n'''python\nimport numpy as np\nimport sympy as sp\n\n# Symbolic evaluation\nx = sp.Symbol('x')\nf = sp.sqrt(x + 3) / (x - 1)\nprint(\"Function:\", f)\nprint(\"Evaluation at x=6:\", f.subs(x, 6)) # Output: 3/5 = 0.6\n\n# Numerical evaluation across grid\nx_vals = np.linspace(2, 10, 5)\nf_num = np.sqrt(x_vals + 3) / (x_vals - 1)\nprint(\"Numerical outputs:\", f_num)\n'''\n\n5. Significance in CS & Engineering:\n   - Machine Learning: Loss function minimization via gradients $\\frac{d L}{d w}$.\n   - Computer Graphics: Bezier curves, ray tracing, animation trajectory calculation.\n   - Signal Processing: Continuous-time signals, filter response analysis.'"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Calculus: Early Transcendentals",
        "author": "James Stewart"
      },
      {
        "title": "Thomas' Calculus",
        "author": "George B. Thomas"
      }
    ],
    "practiceLinks": [
      {
        "title": "Khan Academy Calculus Limits & Functions",
        "url": "https://www.khanacademy.org/math/calculus-1"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define domain and range of a real-valued single-variable function. (2 Marks)",
        "Differentiate between algebraic and transcendental functions with examples. (2 Marks)",
        "Explain how differential calculus is used in machine learning gradient descent. (2 Marks)"
      ],
      "sixMarks": [
        "Determine the complete domain and range of $f(x) = \\frac{\\sqrt{4 - x^2}}{x + 1}$ showing all algebraic conditions. (6 Marks)",
        "Discuss 4 primary applications of single-variable calculus in computer science and engineering. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on mathematical functions in calculus: Classifications (Polynomial, Rational, Exponential, Logarithmic, Trigonometric), graphical symmetry properties (Even/Odd functions), domain/range evaluation algorithms, and computational modeling in Python SymPy. (10 Marks)"
      ]
    }
  },
  {
    "title": "Limits and Continuity",
    "slug": "calculus-limits-and-continuity",
    "order": 2,
    "estimatedHours": 5,
    "difficulty": "Beginner",
    "description": "Deep dive into limits, rigorous epsilon-delta definitions, limit evaluation laws, indeterminate forms, L'Hopital's Rule, continuity, and types of mathematical discontinuities.",
    "subTopics": [
      "Introduction to Limits",
      "Limit Definition",
      "Left-Hand and Right-Hand Limits",
      "Limit Laws",
      "Evaluation of Limits",
      "Limits at Infinity",
      "Infinite Limits",
      "Continuity of Functions",
      "Types of Discontinuities",
      "Applications of Limits"
    ],
    "prerequisiteTitles": [
      "Introduction to Calculus"
    ],
    "learningObjectives": [
      "Formulate formal $\\varepsilon-\\delta$ limit definitions and compute left/right limits.",
      "Apply L'Hopital's Rule for indeterminate forms $\\left[\\frac{0}{0}\\right]$ and $\\left[\\frac{\\infty}{\\infty}\\right]$.",
      "Classify discontinuities: Removable, Jump, Infinite, and Oscillatory."
    ],
    "notes": [
      {
        "title": "Rigorous Limits, Limit Laws, Continuity & L'Hopital's Rule",
        "content": "LIMITS AND CONTINUITY IN CALCULUS\n\n1. Formal $\\varepsilon-\\delta$ Definition of Limit:\n   $\\lim_{x \\to c} f(x) = L$ if and only if for every $\\varepsilon > 0$, there exists a $\\delta > 0$ such that:\n   $0 < |x - c| < \\delta \\implies |f(x) - L| < \\varepsilon$.\n\n2. Limit Laws:\n   If $\\lim_{x \\to c} f(x) = L$ and $\\lim_{x \\to c} g(x) = M$:\n   - Sum Rule: $\\lim_{x \\to c} [f(x) \\pm g(x)] = L \\pm M$\n   - Product Rule: $\\lim_{x \\to c} [f(x) \\cdot g(x)] = L \\cdot M$\n   - Quotient Rule: $\\lim_{x \\to c} \\left[\\frac{f(x)}{g(x)}\\right] = \\frac{L}{M}$ (provided $M \\neq 0$)\n\n3. Fundamental Trigonometric Limit & L'Hopital's Rule:\n   - Standard limit: $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$\n   - L'Hopital's Rule: If $\\lim_{x \\to c} \\frac{f(x)}{g(x)}$ yields $\\left[\\frac{0}{0}\\right]$ or $\\left[\\frac{\\infty}{\\infty}\\right]$:\n     $\\lim_{x \\to c} \\frac{f(x)}{g(x)} = \\lim_{x \\to c} \\frac{f'(x)}{g'(x)}$\n\n4. Solved Worked Example:\n   Evaluate $\\lim_{x \\to 0} \\frac{1 - \\cos(3x)}{x^2}$.\n   - Solution using L'Hopital's Rule:\n     Substitute $x = 0 \\implies \\frac{1 - 1}{0} = \\frac{0}{0}$.\n     Apply 1st derivative: $\\lim_{x \\to 0} \\frac{3 \\sin(3x)}{2x} \\implies \\frac{0}{0}$.\n     Apply 2nd derivative: $\\lim_{x \\to 0} \\frac{9 \\cos(3x)}{2} = \\frac{9 \\cdot 1}{2} = \\frac{9}{2}$.\n\n5. Python SymPy Code Example:\n'''python\nimport sympy as sp\n\nx = sp.Symbol('x')\nexpr = (1 - sp.cos(3*x)) / (x**2)\n\n# Symbolic limit computation\nlimit_val = sp.limit(expr, x, 0)\nprint(\"Limit as x->0:\", limit_val) # Output: 9/2\n\n# Left-hand and Right-hand limits at infinity\ninf_limit = sp.limit((2*x**2 + 5) / (3*x**2 - 1), x, sp.oo)\nprint(\"Limit at infinity:\", inf_limit) # Output: 2/3\n'''\n\n6. Continuity Definition:\n   A function $f(x)$ is continuous at $x = c$ if:\n   1. $f(c)$ is defined.\n   2. $\\lim_{x \\to c} f(x)$ exists (LHL = RHL).\n   3. $\\lim_{x \\to c} f(x) = f(c)$.'"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Calculus Early Transcendentals",
        "author": "James Stewart"
      }
    ],
    "practiceLinks": [
      {
        "title": "Khan Academy Limits and Continuity",
        "url": "https://www.khanacademy.org/math/ap-calculus-ab/ab-limits-new"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State the formal $\\varepsilon-\\delta$ definition of a limit. (2 Marks)",
        "What are the 3 conditions for a function $f(x)$ to be continuous at $x = a$? (2 Marks)",
        "State L'Hopital's Rule and its applicable indeterminate forms. (2 Marks)"
      ],
      "sixMarks": [
        "Evaluate $\\lim_{x \\to 0} \\frac{\\tan x - x}{x^3}$ using L'Hopital's Rule showing all step-by-step differentiations. (6 Marks)",
        "Classify the points of discontinuity for $f(x) = \\frac{x^2 - 4}{x - 2}$ and $g(x) = \\frac{1}{x - 3}$. (6 Marks)"
      ],
      "longAnswer": [
        "Rigorous analysis of limit theorems, left/right limit behavior, algebraic techniques (rationalization, conjugate multiplication, squeeze theorem), and L'Hopital's rule derivations with Python SymPy verification. (10 Marks)"
      ]
    }
  },
  {
    "title": "Differential Calculus",
    "slug": "calculus-differential-calculus",
    "order": 3,
    "estimatedHours": 6,
    "difficulty": "Beginner",
    "description": "Core theory of derivatives as instantaneous rates of change, geometric interpretation as tangent slopes, differentiability rules, Power Rule, Product Rule, Quotient Rule, Chain Rule, and higher-order derivatives.",
    "subTopics": [
      "Introduction to Differentiation",
      "Derivative as Rate of Change",
      "Geometrical Meaning",
      "Differentiability",
      "Basic Differentiation Rules",
      "Power Rule",
      "Product Rule",
      "Quotient Rule",
      "Chain Rule",
      "Higher Order Derivatives"
    ],
    "prerequisiteTitles": [
      "Limits and Continuity"
    ],
    "learningObjectives": [
      "Define derivative using first principles (Newton difference quotient limit).",
      "Master fundamental rules: Power, Product, Quotient, and Chain rules.",
      "Calculate high-order derivatives $f''(x), f^{(n)}(x)$ for physics and engineering models."
    ],
    "notes": [
      {
        "title": "Derivative Foundations, Differentiation Rules & Higher Derivatives",
        "content": "DIFFERENTIAL CALCULUS CORE FORMULAS\n\n1. Definition from First Principles:\n   The derivative $f'(x)$ or $\\frac{dy}{dx}$ is:\n   $f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$\n\n2. Fundamental Rules of Differentiation:\n   - Power Rule: $\\frac{d}{dx}[x^n] = n x^{n-1}$\n   - Constant Multiple: $\\frac{d}{dx}[c \\cdot u] = c \\cdot u'$\n   - Product Rule: $\\frac{d}{dx}[u \\cdot v] = u'v + uv'$\n   - Quotient Rule: $\\frac{d}{dx}\\left[\\frac{u}{v}\\right] = \\frac{u'v - uv'}{v^2}$\n   - Chain Rule: $\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)$\n\n3. Solved Worked Example (Chain & Product Rule):\n   Differentiate $f(x) = x^3 \\cdot \\sin(2x^2 + 1)$.\n   - Let $u = x^3 \\implies u' = 3x^2$.\n   - Let $v = \\sin(2x^2 + 1) \\implies v' = \\cos(2x^2 + 1) \\cdot \\frac{d}{dx}(2x^2 + 1) = 4x \\cos(2x^2 + 1)$.\n   - By Product Rule:\n     $f'(x) = (3x^2)\\sin(2x^2 + 1) + x^3 [4x \\cos(2x^2 + 1)] = 3x^2 \\sin(2x^2 + 1) + 4x^4 \\cos(2x^2 + 1)$.\n\n4. Python SymPy Differentiation Code:\n'''python\nimport sympy as sp\n\nx = sp.Symbol('x')\nf = x**3 * sp.sin(2*x**2 + 1)\n\n# First derivative\nf_prime = sp.diff(f, x)\nprint(\"f'(x) =\", f_prime)\n\n# Second derivative\nf_double_prime = sp.diff(f, x, 2)\nprint(\"f''(x) =\", sp.simplify(f_double_prime))\n'''\n\n5. Geometrical Meaning:\n   - $f'(x_0)$ is the slope of the tangent line to $y = f(x)$ at $x = x_0$.\n   - Equation of tangent line: $y - y_0 = f'(x_0)(x - x_0)$.'"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Calculus",
        "author": "Michael Spivak"
      }
    ],
    "practiceLinks": [
      {
        "title": "Khan Academy Differentiation Rules",
        "url": "https://www.khanacademy.org/math/ap-calculus-ab/ab-differentiation-1-new"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Write the definition of derivative using limit of difference quotient. (2 Marks)",
        "State the Product Rule and Quotient Rule formulas. (2 Marks)",
        "What is the physical interpretation of 1st and 2nd derivatives of position function $s(t)$? (2 Marks)"
      ],
      "sixMarks": [
        "Find derivative of $f(x) = \\sqrt{x}$ from first principles using limit definition. (6 Marks)",
        "Differentiate $y = \\frac{e^{3x} \\cos(x)}{x^2 + 1}$ using Quotient and Product rules. (6 Marks)"
      ],
      "longAnswer": [
        "Detailed study of differentiability versus continuity, corner points, cusps, vertical tangents, higher-order derivatives, and complete SymPy verification for complex transcendental composite functions. (10 Marks)"
      ]
    }
  },
  {
    "title": "Differentiation Techniques",
    "slug": "calculus-differentiation-techniques",
    "order": 4,
    "estimatedHours": 6,
    "difficulty": "Intermediate",
    "description": "Advanced differentiation techniques for algebraic, trigonometric, exponential, logarithmic functions, implicit differentiation, parametric equations, and logarithmic differentiation.",
    "subTopics": [
      "Differentiation of Algebraic Functions",
      "Trigonometric Functions",
      "Exponential Functions",
      "Logarithmic Functions",
      "Implicit Differentiation",
      "Parametric Differentiation",
      "Logarithmic Differentiation"
    ],
    "prerequisiteTitles": [
      "Differential Calculus"
    ],
    "learningObjectives": [
      "Differentiate trigonometric, exponential, and inverse trigonometric functions.",
      "Execute implicit differentiation for equations $F(x, y) = 0$.",
      "Apply logarithmic differentiation for variable exponents $y = f(x)^{g(x)}$ and parametric equations."
    ],
    "notes": [
      {
        "title": "Specialized Differentiation Methods & Transcendental Derivatives",
        "content": "DIFFERENTIATION TECHNIQUES & FORMULAS\n\n1. Standard Derivatives Table:\n   - Trigonometric: $\\frac{d}{dx}(\\sin x) = \\cos x$, $\\frac{d}{dx}(\\cos x) = -\\sin x$, $\\frac{d}{dx}(\\tan x) = \\sec^2 x$\n   - Exponential: $\\frac{d}{dx}(e^a x) = a e^{a x}$, $\\frac{d}{dx}(a^x) = a^x \\ln a$\n   - Logarithmic: $\\frac{d}{dx}(\\ln x) = \\frac{1}{x}$, $\\frac{d}{dx}(\\log_a x) = \\frac{1}{x \\ln a}$\n   - Inverse Trig: $\\frac{d}{dx}(\\arcsin x) = \\frac{1}{\\sqrt{1 - x^2}}$, $\\frac{d}{dx}(\\arctan x) = \\frac{1}{1 + x^2}$\n\n2. Implicit Differentiation:\n   When $y$ cannot be explicitly isolated ($F(x, y) = 0$):\n   Differentiate both sides with respect to $x$, applying Chain Rule to $y$ terms ($\\frac{d}{dx}[y^n] = n y^{n-1} \\frac{dy}{dx}$), then solve for $\\frac{dy}{dx}$.\n\n3. Solved Worked Example (Implicit Differentiation):\n   Find $\\frac{dy}{dx}$ for $x^3 + y^3 = 3axy$.\n   - Differentiate w.r.t. $x$:\n     $3x^2 + 3y^2 \\frac{dy}{dx} = 3a \\left( y + x \\frac{dy}{dx} \\right)$.\n   - Group $\\frac{dy}{dx}$ terms:\n     $3y^2 \\frac{dy}{dx} - 3ax \\frac{dy}{dx} = 3ay - 3x^2 \\implies \\frac{dy}{dx} (y^2 - ax) = ay - x^2$.\n   - Result: $\\frac{dy}{dx} = \\frac{ay - x^2}{y^2 - ax}$.\n\n4. Logarithmic Differentiation Method:\n   For $y = [f(x)]^{g(x)}$, take $\\ln$ of both sides:\n   $\\ln y = g(x) \\cdot \\ln[f(x)] \\implies \\frac{1}{y}\\frac{dy}{dx} = g'(x)\\ln f(x) + g(x)\\frac{f'(x)}{f(x)}$.\n   Example for $y = x^x$: $\\frac{dy}{dx} = x^x (1 + \\ln x)$.\n\n5. Parametric Differentiation:\n   If $x = f(t)$ and $y = g(t)$, then $\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}$.\n\n6. Python SymPy Implicit & Logarithmic Code:\n'''python\nimport sympy as sp\n\nx, y = sp.symbols('x y')\n\n# Implicit Differentiation\nimplicit_eq = x**3 + y**3 - 3*x*y\ndy_dx = sp.idiff(implicit_eq, y, x)\nprint(\"dy/dx (implicit):\", dy_dx)\n\n# Logarithmic differentiation y = x**x\nf = x**x\ndf_dx = sp.diff(f, x)\nprint(\"d/dx(x^x) =\", df_dx) # Output: x^x*(log(x) + 1)\n''''"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Thomas' Calculus",
        "author": "George B. Thomas"
      }
    ],
    "practiceLinks": [
      {
        "title": "Khan Academy Advanced Differentiation Techniques",
        "url": "https://www.khanacademy.org/math/ap-calculus-ab/ab-diff-advanced"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain when Logarithmic Differentiation is required rather than standard Power/Chain rules. (2 Marks)",
        "Write formula for parametric derivative $\\frac{dy}{dx}$ and second derivative $\\frac{d^2y}{dx^2}$. (2 Marks)",
        "State derivatives of $\\arctan(x)$ and $\\arcsin(x)$. (2 Marks)"
      ],
      "sixMarks": [
        "Find $\\frac{dy}{dx}$ for $y = (\\sin x)^{\\cos x}$ using Logarithmic Differentiation. (6 Marks)",
        "For parametric curve $x = a(\\theta - \\sin\\theta), y = a(1 - \\cos\\theta)$, find $\\frac{dy}{dx}$ at $\\theta = \\frac{\\pi}{2}$. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive walkthrough of implicit differentiation, parametric rate computations, logarithmic differentiation for multivariate power products, and verification using Python SymPy symbolic engine. (10 Marks)"
      ]
    }
  },
  {
    "title": "Applications of Derivatives",
    "slug": "calculus-applications-of-derivatives",
    "order": 5,
    "estimatedHours": 6,
    "difficulty": "Intermediate",
    "description": "Practical engineering applications of derivatives: Tangent/normal line equations, rate of change, monotonic behavior, local/absolute extrema, optimization problems, Rolle's Theorem, and Lagrange Mean Value Theorem.",
    "subTopics": [
      "Rate of Change Problems",
      "Tangent and Normal Lines",
      "Increasing and Decreasing Functions",
      "Maxima and Minima",
      "Optimization Problems",
      "Curve Sketching",
      "Mean Value Theorem",
      "Rolle's Theorem",
      "Lagrange Mean Value Theorem"
    ],
    "prerequisiteTitles": [
      "Differentiation Techniques"
    ],
    "learningObjectives": [
      "Solve optimization problems in engineering (minimizing cost, maximizing volume/area).",
      "Apply First and Second Derivative Tests to classify critical points.",
      "Verify and apply Rolle's Theorem and Lagrange Mean Value Theorem."
    ],
    "notes": [
      {
        "title": "Extrema, Optimization, Tangents & Mean Value Theorems",
        "content": "APPLICATIONS OF DERIVATIVES\n\n1. First & Second Derivative Tests:\n   - Critical Points: $x = c$ where $f'(c) = 0$ or $f'(c)$ is undefined.\n   - Monotonicity: $f'(x) > 0 \\implies$ strictly increasing; $f'(x) < 0 \\implies$ strictly decreasing.\n   - Second Derivative Test:\n     - If $f'(c) = 0$ and $f''(c) > 0 \\implies x = c$ is a local minimum.\n     - If $f'(c) = 0$ and $f''(c) < 0 \\implies x = c$ is a local maximum.\n     - If $f''(c) = 0 \\implies$ test inconclusive (use First Derivative Test).\n\n2. Mean Value Theorems:\n   - Rolle's Theorem: If $f$ is continuous on $[a, b]$, differentiable on $(a, b)$, and $f(a) = f(b)$, then $\\exists c \\in (a, b)$ such that $f'(c) = 0$.\n   - Lagrange Mean Value Theorem (LMVT): If $f$ is continuous on $[a, b]$ and differentiable on $(a, b)$, then $\\exists c \\in (a, b)$ such that:\n     $f'(c) = \\frac{f(b) - f(a)}{b - a}$\n\n3. Solved Worked Optimization Problem:\n   An open rectangular box with a square base is to be made with $108 \\text{ cm}^2$ of material. Maximize volume $V$.\n   - Let side of square base be $x$, height be $h$.\n   - Surface Area: $S = x^2 + 4xh = 108 \\implies h = \\frac{108 - x^2}{4x}$.\n   - Volume $V(x) = x^2 h = x^2 \\left(\\frac{108 - x^2}{4x}\\right) = 27x - \\frac{x^3}{4}$.\n   - Derivative $V'(x) = 27 - \\frac{3x^2}{4} = 0 \\implies 3x^2 = 108 \\implies x^2 = 36 \\implies x = 6 \\text{ cm}$.\n   - Second derivative: $V''(x) = -\\frac{6x}{4} = -9 < 0 \\implies$ Maximum.\n   - Max Volume $V(6) = 27(6) - \\frac{6^3}{4} = 162 - 54 = 108 \\text{ cm}^3$.\n\n4. Python SciPy Optimization Example:\n'''python\nimport numpy as np\nfrom scipy.optimize import minimize\n\n# Negative volume function for minimization\ndef neg_volume(x):\n    return -(27*x[0] - 0.25*x[0]**3)\n\nres = minimize(neg_volume, x0=[1.0], bounds=[(0.1, 10.0)])\nprint(\"Optimal base x:\", res.x[0]) # Output: 6.0\nprint(\"Max volume:\", -res.fun)      # Output: 108.0\n''''"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Calculus Early Transcendentals",
        "author": "James Stewart"
      }
    ],
    "practiceLinks": [
      {
        "title": "Khan Academy Derivative Applications",
        "url": "https://www.khanacademy.org/math/ap-calculus-ab/ab-diff-contextual-applications-new"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State Rolle's Theorem and Lagrange Mean Value Theorem. (2 Marks)",
        "Explain Second Derivative Test for finding maxima and minima. (2 Marks)",
        "Write formula for slope of tangent line and normal line to $y = f(x)$ at $(x_0, y_0)$. (2 Marks)"
      ],
      "sixMarks": [
        "Verify Lagrange Mean Value Theorem for $f(x) = x^3 - 4x$ on interval $[1, 3]$ and find value of $c$. (6 Marks)",
        "Find dimensions of a cylindrical can of volume $500 \\text{ cm}^3$ that minimizes surface area. (6 Marks)"
      ],
      "longAnswer": [
        "Complete curve sketching framework: Finding domain, x/y intercepts, asymptotes (vertical, horizontal, oblique), critical points, intervals of increase/decrease, inflection points, concavity, and plotting using Python Matplotlib/SymPy. (10 Marks)"
      ]
    }
  },
  {
    "title": "Integral Calculus",
    "slug": "calculus-integral-calculus",
    "order": 6,
    "estimatedHours": 6,
    "difficulty": "Intermediate",
    "description": "Introduction to integration as antiderivation, indefinite integrals, integration constants, basic integration rules for algebraic, trigonometric, exponential, and logarithmic functions.",
    "subTopics": [
      "Introduction to Integration",
      "Integration as Reverse Differentiation",
      "Indefinite Integrals",
      "Basic Integration Rules",
      "Integration of Algebraic Functions",
      "Trigonometric Functions",
      "Exponential Functions",
      "Logarithmic Functions"
    ],
    "prerequisiteTitles": [
      "Applications of Derivatives"
    ],
    "learningObjectives": [
      "Understand anti-differentiation as inverse operation of differentiation.",
      "Apply standard integration formulas for polynomials, exponentials, and trigonometric functions.",
      "Use Python SymPy to compute indefinite integrals symbolically."
    ],
    "notes": [
      {
        "title": "Antiderivatives, Standard Integral Table & Basic Rules",
        "content": "INDEFINITE INTEGRATION FOUNDATIONS\n\n1. Concept of Antiderivative:\n   If $\\frac{d}{dx}[F(x)] = f(x)$, then:\n   $\\int f(x) , dx = F(x) + C$\n   where $C$ is the arbitrary constant of integration.\n\n2. Standard Integrals Table:\n   - Power Rule: $\\int x^n , dx = \\frac{x^{n+1}}{n+1} + C \\quad (n \\neq -1)$\n   - Logarithmic: $\\int \\frac{1}{x} , dx = \\ln|x| + C$\n   - Exponential: $\\int e^{ax} , dx = \\frac{1}{a} e^{ax} + C$, $\\int a^x , dx = \\frac{a^x}{\\ln a} + C$\n   - Trigonometric:\n     - $\\int \\sin(ax) , dx = -\\frac{1}{a} \\cos(ax) + C$\n     - $\\int \\cos(ax) , dx = \\frac{1}{a} \\sin(ax) + C$\n     - $\\int \\sec^2(x) , dx = \\tan(x) + C$\n     - $\\int \\csc^2(x) , dx = -\\cot(x) + C$\n\n3. Solved Worked Example:\n   Evaluate $\\int \\left( 5x^4 - 3x^2 + 4e^{2x} - \\frac{2}{x} \\right) dx$.\n   - Apply linearity rule:\n     $= 5 \\int x^4 dx - 3 \\int x^2 dx + 4 \\int e^{2x} dx - 2 \\int \\frac{1}{x} dx$\n     $= 5 \\left(\\frac{x^5}{5}\\right) - 3 \\left(\\frac{x^3}{3}\\right) + 4 \\left(\\frac{e^{2x}}{2}\\right) - 2 \\ln|x| + C$\n     $= x^5 - x^3 + 2e^{2x} - 2\\ln|x| + C$.\n\n4. Python SymPy Code Example:\n'''python\nimport sympy as sp\n\nx = sp.Symbol('x')\nf = 5*x**4 - 3*x**2 + 4*sp.exp(2*x) - 2/x\n\n# Symbolic indefinite integration\nF = sp.integrate(f, x)\nprint(\"Indefinite integral F(x) =\", F)\n# Output: x**5 - x**3 + 2*exp(2*x) - 2*log(x)\n''''"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Thomas' Calculus",
        "author": "George B. Thomas"
      }
    ],
    "practiceLinks": [
      {
        "title": "Khan Academy Indefinite Integrals",
        "url": "https://www.khanacademy.org/math/ap-calculus-ab/ab-integration-new"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain why an arbitrary constant $C$ is added to indefinite integrals. (2 Marks)",
        "State standard integrals for $\\int \\sec^2(x) dx$, $\\int e^{kx} dx$, and $\\int \\frac{1}{x} dx$. (2 Marks)",
        "Explain linearity property of integrals. (2 Marks)"
      ],
      "sixMarks": [
        "Evaluate $\\int \\frac{x^3 + 5x^2 - 4}{x^2} dx$ showing step-by-step expansion. (6 Marks)",
        "Evaluate $\\int (3 \\sin x - 4 \\cos x + 5 \\sec^2 x) dx$. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive comparison between differentiation and integration operators, fundamental properties, geometric family of curves representation $y = F(x) + C$, and automated integration in Python SymPy. (10 Marks)"
      ]
    }
  },
  {
    "title": "Integration Techniques",
    "slug": "calculus-integration-techniques",
    "order": 7,
    "estimatedHours": 7,
    "difficulty": "Intermediate",
    "description": "Methodologies for evaluating complex integrals: u-Substitution, Integration by Parts, Partial Fraction Decomposition, Trigonometric Substitutions, Reduction Formulae, and Improper Integrals.",
    "subTopics": [
      "Substitution Method",
      "Integration by Parts",
      "Partial Fraction Method",
      "Trigonometric Substitution",
      "Reduction Formulae",
      "Improper Integrals"
    ],
    "prerequisiteTitles": [
      "Integral Calculus"
    ],
    "learningObjectives": [
      "Execute u-substitution for composite integrand functions.",
      "Apply Integration by Parts formula $\\int u , dv = uv - \\int v , du$ using LIATE priority rule.",
      "Decompose rational functions using Partial Fractions and handle improper integrals with infinite limits."
    ],
    "notes": [
      {
        "title": "Advanced Integration Strategies, Formulas & Solved Examples",
        "content": "INTEGRATION TECHNIQUES MANUAL\n\n1. Integration by Substitution (u-Sub):\n   If $u = g(x)$, then $du = g'(x) dx$:\n   $\\int f(g(x)) g'(x) , dx = \\int f(u) , du$\n\n2. Integration by Parts:\n   $\\int u , dv = uv - \\int v , du$\n   - LIATE Rule for choosing $u$:\n     L: Logarithmic, I: Inverse Trig, A: Algebraic, T: Trigonometric, E: Exponential.\n\n3. Trigonometric Substitutions:\n   - For $\\sqrt{a^2 - x^2} \\implies$ Substitute $x = a \\sin \\theta, \\quad dx = a \\cos \\theta d\\theta$\n   - For $\\sqrt{a^2 + x^2} \\implies$ Substitute $x = a \\tan \\theta, \\quad dx = a \\sec^2 \\theta d\\theta$\n   - For $\\sqrt{x^2 - a^2} \\implies$ Substitute $x = a \\sec \\theta, \\quad dx = a \\sec \\theta \\tan \\theta d\\theta$\n\n4. Solved Worked Example (Integration by Parts):\n   Evaluate $\\int x^2 e^{3x} , dx$.\n   - Choose $u = x^2 \\implies du = 2x dx$; $dv = e^{3x} dx \\implies v = \\frac{1}{3} e^{3x}$.\n   - Apply Parts: $\\int x^2 e^{3x} dx = \\frac{1}{3} x^2 e^{3x} - \\int \\frac{2}{3} x e^{3x} dx$.\n   - Repeat Parts for $\\int x e^{3x} dx$: $u_2 = x \\implies du_2 = dx$; $v_2 = \\frac{1}{3} e^{3x}$.\n   - Second Parts step: $\\int x e^{3x} dx = \\frac{1}{3} x e^{3x} - \\int \\frac{1}{3} e^{3x} dx = \\frac{1}{3} x e^{3x} - \\frac{1}{9} e^{3x}$.\n   - Substitute back: $= \\frac{1}{3} x^2 e^{3x} - \\frac{2}{3} \\left( \\frac{1}{3} x e^{3x} - \\frac{1}{9} e^{3x} \\right) + C$\n     $= e^{3x} \\left( \\frac{x^2}{3} - \\frac{2x}{9} + \\frac{2}{27} \\right) + C$.\n\n5. Python SymPy Advanced Integration Code:\n'''python\nimport sympy as sp\n\nx = sp.Symbol('x')\n\n# Integration by Parts\nres_parts = sp.integrate(x**2 * sp.exp(3*x), x)\nprint(\"Integration by parts result:\", sp.factor(res_parts))\n\n# Partial Fractions Integration\nrational_func = (x + 1) / (x**2 - 5*x + 6)\nprint(\"Partial fraction split:\", sp.apart(rational_func))\nres_partial = sp.integrate(rational_func, x)\nprint(\"Integral:\", res_partial) # Output: 4*log(x - 3) - 3*log(x - 2)\n''''"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Calculus Early Transcendentals",
        "author": "James Stewart"
      }
    ],
    "practiceLinks": [
      {
        "title": "Khan Academy Integration Techniques",
        "url": "https://www.khanacademy.org/math/ap-calculus-bc/bc-integration-new"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain LIATE rule for selecting $u$ in integration by parts. (2 Marks)",
        "State the trigonometric substitutions for expressions involving $\\sqrt{a^2 - x^2}$ and $\\sqrt{a^2 + x^2}$. (2 Marks)",
        "What is an improper integral of Type 1 and Type 2? (2 Marks)"
      ],
      "sixMarks": [
        "Evaluate $\\int \\frac{3x + 5}{x^2 - 4x + 3} dx$ using Partial Fraction decomposition. (6 Marks)",
        "Evaluate $\\int \\sqrt{9 - x^2} dx$ using trigonometric substitution $x = 3 \\sin \\theta$. (6 Marks)"
      ],
      "longAnswer": [
        "Rigorous development of reduction formulae for $\\int \\sin^n(x) dx$ and $\\int \\sec^n(x) dx$, convergence evaluation of improper integrals $\\int_1^\\infty \\frac{1}{x^p} dx$, and Python symbolic computation. (10 Marks)"
      ]
    }
  },
  {
    "title": "Definite Integration",
    "slug": "calculus-definite-integration",
    "order": 8,
    "estimatedHours": 6,
    "difficulty": "Intermediate",
    "description": "Definite integrals, Riemann Sum limits, Fundamental Theorem of Calculus (Parts 1 & 2), integral properties, King's Property, and exact area calculation.",
    "subTopics": [
      "Introduction to Definite Integrals",
      "Properties of Definite Integrals",
      "Evaluation of Definite Integrals",
      "Fundamental Theorem of Calculus",
      "Area Under Curves",
      "Applications of Definite Integrals"
    ],
    "prerequisiteTitles": [
      "Integration Techniques"
    ],
    "learningObjectives": [
      "Apply Fundamental Theorem of Calculus Part 1 and Part 2.",
      "Utilize properties of definite integrals (King's property, even/odd symmetry) to solve complex integrals.",
      "Compute exact definite integrals numerically in SciPy (`quad`) and symbolically in SymPy."
    ],
    "notes": [
      {
        "title": "Fundamental Theorem of Calculus, Properties & Definite Evaluation",
        "content": "DEFINITE INTEGRAL THEORY & PROPERTIES\n\n1. Definition as Riemann Sum:\n   $\\int_a^b f(x) , dx = \\lim_{n \\to \\infty} \\sum_{i=1}^n f(x_i^*) \\Delta x, \\quad \\Delta x = \\frac{b - a}{n}$\n\n2. Fundamental Theorem of Calculus (FTC):\n   - FTC Part 1 (Differentiation of Integrals):\n     $\\frac{d}{dx} \\left[ \\int_a^x f(t) , dt \\right] = f(x)$\n   - FTC Part 2 (Evaluation Theorem):\n     $\\int_a^b f(x) , dx = F(b) - F(a), \\quad \\text{where } F'(x) = f(x)$\n\n3. Key Properties of Definite Integrals:\n   - Dummy variable: $\\int_a^b f(x) dx = \\int_a^b f(t) dt$\n   - Order reversal: $\\int_a^b f(x) dx = -\\int_b^a f(x) dx$\n   - Interval splitting: $\\int_a^b f(x) dx = \\int_a^c f(x) dx + \\int_c^b f(x) dx$\n   - King's Property: $\\int_a^b f(x) dx = \\int_a^b f(a + b - x) dx$\n   - Symmetry (Even/Odd):\n     - Even ($f(-x) = f(x)$): $\\int_{-a}^a f(x) dx = 2 \\int_0^a f(x) dx$\n     - Odd ($f(-x) = -f(x)$): $\\int_{-a}^a f(x) dx = 0$\n\n4. Solved Worked Example (King's Property):\n   Evaluate $I = \\int_0^{\\pi/2} \\frac{\\sin x}{\\sin x + \\cos x} , dx$.\n   - Apply King's Property $x \\to \\frac{\\pi}{2} - x$:\n     $I = \\int_0^{\\pi/2} \\frac{\\sin(\\pi/2 - x)}{\\sin(\\pi/2 - x) + \\cos(\\pi/2 - x)} dx = \\int_0^{\\pi/2} \\frac{\\cos x}{\\cos x + \\sin x} dx$.\n   - Add both integral expressions:\n     $2I = \\int_0^{\\pi/2} \\frac{\\sin x + \\cos x}{\\sin x + \\cos x} dx = \\int_0^{\\pi/2} 1 , dx = [x]_0^{\\pi/2} = \\frac{\\pi}{2}$.\n   - Result: $I = \\frac{\\pi}{4}$.\n\n5. Python SciPy & SymPy Definite Integration Code:\n'''python\nimport sympy as sp\nfrom scipy.integrate import quad\nimport numpy as np\n\n# Symbolic Definite Integral\nx = sp.Symbol('x')\nI_sym = sp.integrate(sp.sin(x)/(sp.sin(x) + sp.cos(x)), (x, 0, sp.pi/2))\nprint(\"Symbolic Integral I =\", I_sym) # Output: pi/4\n\n# Numerical Definite Integration using SciPy quad\nf_num = lambda x: np.sin(x) / (np.sin(x) + np.cos(x))\nval, err = quad(f_num, 0, np.pi/2)\nprint(f\"Numerical result: {val:.6f} (Error estimate: {err:.2e})\")\n''''"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Thomas' Calculus",
        "author": "George B. Thomas"
      }
    ],
    "practiceLinks": [
      {
        "title": "Khan Academy Definite Integrals",
        "url": "https://www.khanacademy.org/math/ap-calculus-ab/ab-integration-new"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State FTC Part 1 and FTC Part 2. (2 Marks)",
        "Why does $\\int_{-a}^a f(x) dx = 0$ when $f(x)$ is an odd function? (2 Marks)",
        "State King's Property of definite integrals. (2 Marks)"
      ],
      "sixMarks": [
        "Evaluate $\\int_{0}^{\\pi} \\frac{x \\sin x}{1 + \\cos^2 x} dx$ using properties of definite integrals. (6 Marks)",
        "Evaluate $\\frac{d}{dx} \\left[ \\int_{x^2}^{x^3} \\sqrt{1 + t^4} dt \\right]$ using Leibniz Rule / FTC Part 1. (6 Marks)"
      ],
      "longAnswer": [
        "Complete proof of Fundamental Theorem of Calculus, rigorous connection with Riemann Sum limits, error analysis of numerical quadrature, and Python SciPy implementation. (10 Marks)"
      ]
    }
  },
  {
    "title": "Applications of Integration",
    "slug": "calculus-applications-of-integration",
    "order": 9,
    "estimatedHours": 6,
    "difficulty": "Intermediate",
    "description": "Geometric and physical applications of definite integration: Area between curves, volumes of solids of revolution (Disk, Washer, Shell methods), Arc Length, Surface Area, and Work done in engineering.",
    "subTopics": [
      "Area Calculation",
      "Volume Calculation",
      "Arc Length",
      "Surface Area",
      "Work Done Problems",
      "Engineering Applications"
    ],
    "prerequisiteTitles": [
      "Definite Integration"
    ],
    "learningObjectives": [
      "Calculate area enclosed between multiple intersecting curves.",
      "Compute volumes of revolution using Disk, Washer, and Cylindrical Shell methods.",
      "Determine arc length of smooth curves and work done by variable forces in physics."
    ],
    "notes": [
      {
        "title": "Geometric Measurements & Physical Applications Formulas",
        "content": "APPLICATIONS OF INTEGRATION FORMULARY\n\n1. Area Between Curves:\n   $A = \\int_a^b [f(x) - g(x)] , dx, \\quad \\text{where } f(x) \\ge g(x) \\text{ on } [a, b]$.\n\n2. Volume of Solids of Revolution:\n   - Disk Method (revolving around x-axis):\n     $V = \\pi \\int_a^b [f(x)]^2 , dx$\n   - Washer Method (outer radius $R(x)$, inner radius $r(x)$):\n     $V = \\pi \\int_a^b \\left( [R(x)]^2 - [r(x)]^2 \\right) , dx$\n   - Cylindrical Shell Method:\n     $V = 2\\pi \\int_a^b x \\cdot h(x) , dx$\n\n3. Arc Length & Surface Area of Revolution:\n   - Arc Length: $L = \\int_a^b \\sqrt{1 + [f'(x)]^2} , dx$\n   - Surface Area (revolving around x-axis): $S = 2\\pi \\int_a^b f(x) \\sqrt{1 + [f'(x)]^2} , dx$\n\n4. Solved Worked Example (Volume of Revolution - Washer Method):\n   Find volume of solid formed by revolving region bounded by $y = x^2$ and $y = 2x$ around x-axis.\n   - Intersections: $x^2 = 2x \\implies x(x - 2) = 0 \\implies x = 0, x = 2$.\n   - Outer radius $R(x) = 2x$, Inner radius $r(x) = x^2$.\n   - Integral: $V = \\pi \\int_0^2 \\left[ (2x)^2 - (x^2)^2 \\right] dx = \\pi \\int_0^2 (4x^2 - x^4) dx$.\n   - Evaluation: $V = \\pi \\left[ \\frac{4x^3}{3} - \\frac{x^5}{5} \\right]_0^2 = \\pi \\left( \\frac{32}{3} - \\frac{32}{5} \\right) = \\pi \\left( \\frac{160 - 96}{15} \\right) = \\frac{64\\pi}{15} \\text{ cubic units}$.\n\n5. Python Code Example (Arc Length & Area):\n'''python\nimport sympy as sp\n\nx = sp.Symbol('x')\nf = x**2\n\n# Area between y=2x and y=x^2\ng = 2*x\narea = sp.integrate(g - f, (x, 0, 2))\nprint(\"Area between curves:\", area) # Output: 4/3\n\n# Volume using washer method\nvol = sp.pi * sp.integrate((2*x)**2 - (x**2)**2, (x, 0, 2))\nprint(\"Volume of revolution:\", vol) # Output: 64*pi/15\n''''"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Calculus Early Transcendentals",
        "author": "James Stewart"
      }
    ],
    "practiceLinks": [
      {
        "title": "Khan Academy Applications of Integrals",
        "url": "https://www.khanacademy.org/math/ap-calculus-ab/ab-applications-of-integration-new"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State Washer Method and Shell Method volume formulas. (2 Marks)",
        "Write formula for arc length of $y = f(x)$ from $x = a$ to $x = b$. (2 Marks)",
        "How is work calculated for a variable force $F(x)$? (2 Marks)"
      ],
      "sixMarks": [
        "Find area of region bounded between parabolas $y = 6x - x^2$ and $y = x^2 - 2x$. (6 Marks)",
        "Find arc length of curve $y = \\frac{2}{3} x^{3/2}$ from $x = 0$ to $x = 3$. (6 Marks)"
      ],
      "longAnswer": [
        "Complete engineering application suite: Computing centroid of planar regions, moment of inertia, work required to pump water out of conical tanks, and Python verification. (10 Marks)"
      ]
    }
  },
  {
    "title": "Differential Equations Basics",
    "slug": "calculus-differential-equations-basics",
    "order": 10,
    "estimatedHours": 6,
    "difficulty": "Intermediate",
    "description": "Foundations of ordinary differential equations (ODEs), classification of order and degree, variable separable method, 1st order linear ODEs with integrating factors, and physical growth/decay models.",
    "subTopics": [
      "Introduction to Differential Equations",
      "Order and Degree",
      "Formation of Differential Equations",
      "First Order DEs",
      "Variable Separable Equations",
      "Linear Differential Equations",
      "Applications of DEs"
    ],
    "prerequisiteTitles": [
      "Applications of Integration"
    ],
    "learningObjectives": [
      "Determine order and degree of ordinary differential equations.",
      "Solve first-order separable and linear differential equations $\\frac{dy}{dx} + P(x)y = Q(x)$.",
      "Model radioactive decay, population dynamics, and Newton's law of cooling."
    ],
    "notes": [
      {
        "title": "First-Order ODE Methods, Integrating Factors & Physical Models",
        "content": "DIFFERENTIAL EQUATIONS FOUNDATIONS\n\n1. Definitions:\n   - Order: Order of the highest derivative present in the ODE.\n   - Degree: Power/exponent of the highest derivative (after removing radical signs and fractional exponents).\n\n2. Variable Separable ODEs:\n   If $\\frac{dy}{dx} = g(x) h(y) \\implies \\int \\frac{dy}{h(y)} = \\int g(x) , dx + C$.\n\n3. First-Order Linear Differential Equation:\n   Standard form:\n   $\\frac{dy}{dx} + P(x) y = Q(x)$\n   - Step 1: Compute Integrating Factor $I(x)$:\n     $I(x) = e^{\\int P(x) , dx}$\n   - Step 2: Solution formula:\n     $y \\cdot I(x) = \\int Q(x) \\cdot I(x) , dx + C$\n\n4. Solved Worked Example (Linear ODE):\n   Solve $\\frac{dy}{dx} + \\frac{2}{x} y = x^2$.\n   - Identify $P(x) = \\frac{2}{x}$, $Q(x) = x^2$.\n   - Integrating Factor $I(x) = e^{\\int \\frac{2}{x} dx} = e^{2 \\ln x} = e^{\\ln(x^2)} = x^2$.\n   - Solution: $y \\cdot x^2 = \\int x^2 \\cdot x^2 dx = \\int x^4 dx = \\frac{x^5}{5} + C$.\n   - Divide by $x^2$: $y = \\frac{x^3}{5} + \\frac{C}{x^2}$.\n\n5. Python SymPy 'dsolve' Code:\n'''python\nimport sympy as sp\n\nx = sp.Symbol('x')\ny = sp.Function('y')\n\n# Define differential equation dy/dx + (2/x)*y = x**2\neq = sp.Eq(y(x).diff(x) + (2/x)*y(x), x**2)\n\n# Solve ODE symbolically\nsol = sp.dsolve(eq, y(x))\nprint(\"General solution y(x) =\", sol.rhs) # Output: C1/x**2 + x**3/5\n''''"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Elementary Differential Equations and Boundary Value Problems",
        "author": "Boyce & DiPrima"
      }
    ],
    "practiceLinks": [
      {
        "title": "Khan Academy Differential Equations",
        "url": "https://www.khanacademy.org/math/differential-equations"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define order and degree of a differential equation with examples. (2 Marks)",
        "Write formula for Integrating Factor $I(x)$ for $\\frac{dy}{dx} + P(x)y = Q(x)$. (2 Marks)",
        "State Newton's Law of Cooling differential equation. (2 Marks)"
      ],
      "sixMarks": [
        "Solve $(1 + x^2) \\frac{dy}{dx} + 2xy = 4x^2$ given $y(0) = 1$. (6 Marks)",
        "A population grows at rate $\\frac{dP}{dt} = k P$. If population doubles in 5 years, find constant $k$ and population after 15 years. (6 Marks)"
      ],
      "longAnswer": [
        "Detailed analysis of initial value problems (IVP), existence and uniqueness theorems, slope fields, and Python SymPy `dsolve` solver implementation. (10 Marks)"
      ]
    }
  },
  {
    "title": "Series and Sequences",
    "slug": "calculus-series-and-sequences",
    "order": 11,
    "estimatedHours": 7,
    "difficulty": "Advanced",
    "description": "Sequences, infinite series, convergence tests (Ratio, Root, Integral, Comparison), power series, radius of convergence, Taylor series, and Maclaurin expansions.",
    "subTopics": [
      "Introduction to Sequences",
      "Arithmetic Progression",
      "Geometric Progression",
      "Infinite Series",
      "Convergence and Divergence",
      "Power Series",
      "Taylor Series",
      "Maclaurin Series"
    ],
    "prerequisiteTitles": [
      "Differential Equations Basics"
    ],
    "learningObjectives": [
      "Determine convergence/divergence using Ratio Test and Comparison Tests.",
      "Derive Taylor and Maclaurin series expansions for elementary functions.",
      "Compute radius and interval of convergence for power series."
    ],
    "notes": [
      {
        "title": "Infinite Series, Convergence Tests, Taylor & Maclaurin Expansions",
        "content": "SERIES AND SEQUENCES COMPENDIUM\n\n1. Infinite Series & Ratio Test:\n   For series $\\sum_{n=1}^\\infty a_n$, compute $L = \\lim_{n \\to \\infty} \\left| \\frac{a_{n+1}}{a_n} \\right|$:\n   - If $L < 1 \\implies$ Absolutely convergent.\n   - If $L > 1 \\implies$ Divergent.\n   - If $L = 1 \\implies$ Inconclusive.\n\n2. Taylor & Maclaurin Series Definitions:\n   - Taylor Series centered at $x = a$:\n     $f(x) = \\sum_{n=0}^\\infty \\frac{f^{(n)}(a)}{n!} (x - a)^n = f(a) + f'(a)(x-a) + \\frac{f''(a)}{2!}(x-a)^2 + \\dots$\n   - Maclaurin Series (centered at $a = 0$):\n     $f(x) = \\sum_{n=0}^\\infty \\frac{f^{(n)}(0)}{n!} x^n = f(0) + f'(0)x + \\frac{f''(0)}{2!}x^2 + \\dots$\n\n3. Standard Maclaurin Series:\n   - $e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\dots = \\sum_{n=0}^\\infty \\frac{x^n}{n!}, \\quad \\forall x \\in \\mathbb{R}$\n   - $\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\dots = \\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n+1}}{(2n+1)!}, \\quad \\forall x \\in \\mathbb{R}$\n   - $\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\dots = \\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n}}{(2n)!}, \\quad \\forall x \\in \\mathbb{R}$\n   - $\\frac{1}{1-x} = 1 + x + x^2 + x^3 + \\dots = \\sum_{n=0}^\\infty x^n, \\quad |x| < 1$\n\n4. Solved Worked Example:\n   Find the Taylor series of $f(x) = \\ln(x)$ centered at $a = 1$.\n   - Derivatives:\n     $f(1) = 0$; $f'(x) = x^{-1} \\implies f'(1) = 1$; $f''(x) = -x^{-2} \\implies f''(1) = -1$; $f'''(x) = 2x^{-3} \\implies f'''(1) = 2$.\n   - In general: $f^{(n)}(1) = (-1)^{n-1} (n-1)!$ for $n \\ge 1$.\n   - Taylor Series:\n     $\\ln(x) = \\sum_{n=1}^\\infty \\frac{(-1)^{n-1}(n-1)!}{n!}(x - 1)^n = (x - 1) - \\frac{(x-1)^2}{2} + \\frac{(x-1)^3}{3} - \\dots$\n\n5. Python SymPy Series Expansion Code:\n'''python\nimport sympy as sp\n\nx = sp.Symbol('x')\n\n# Maclaurin expansion of sin(x) up to O(x^7)\nsin_series = sp.series(sp.sin(x), x, 0, n=7)\nprint(\"sin(x) series:\", sin_series)\n\n# Taylor expansion of ln(x) centered at a=1\nln_series = sp.series(sp.log(x), x, 1, n=5)\nprint(\"ln(x) series at a=1:\", ln_series)\n''''"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Calculus Early Transcendentals",
        "author": "James Stewart"
      }
    ],
    "practiceLinks": [
      {
        "title": "Khan Academy Series and Sequences",
        "url": "https://www.khanacademy.org/math/ap-calculus-bc/bc-series-new"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State Ratio Test for convergence of infinite series. (2 Marks)",
        "Write general Taylor series formula centered at $x = a$. (2 Marks)",
        "Write Maclaurin series expansions for $e^x$, $\\sin x$, and $\\cos x$. (2 Marks)"
      ],
      "sixMarks": [
        "Find radius and interval of convergence for power series $\\sum_{n=1}^\\infty \\frac{(x-2)^n}{n \\cdot 3^n}$. (6 Marks)",
        "Derive Maclaurin series expansion for $f(x) = \\frac{1}{\\sqrt{1-x^2}}$ up to $x^4$ term. (6 Marks)"
      ],
      "longAnswer": [
        "Complete exploration of infinite series convergence testing (Ratio, Root, Integral, Alternating Series Test), Taylor polynomial approximation error estimation using Lagrange remainder form $R_n(x)$, and Python SymPy code verification. (10 Marks)"
      ]
    }
  },
  {
    "title": "Mathematical Theorems in Calculus",
    "slug": "calculus-mathematical-theorems-in-calculus",
    "order": 12,
    "estimatedHours": 6,
    "difficulty": "Advanced",
    "description": "Rigorous study of key theorems in single-variable calculus: Intermediate Value Theorem (IVT), Rolle's Theorem, Mean Value Theorem, Taylor's Theorem with Remainder, and Cauchy's Mean Value Theorem.",
    "subTopics": [
      "Intermediate Value Theorem",
      "Rolle's Theorem",
      "Mean Value Theorem",
      "Taylor's Theorem",
      "Applications of Calculus Theorems"
    ],
    "prerequisiteTitles": [
      "Series and Sequences"
    ],
    "learningObjectives": [
      "Prove existence of real roots using Intermediate Value Theorem.",
      "Apply Cauchy's Mean Value Theorem to prove L'Hopital's rule.",
      "Estimate approximation error using Taylor's Remainder Theorem."
    ],
    "notes": [
      {
        "title": "Calculus Core Theorems & Rigorous Proof Frameworks",
        "content": "MATHEMATICAL THEOREMS IN CALCULUS\n\n1. Intermediate Value Theorem (IVT):\n   If $f$ is continuous on closed interval $[a, b]$, and $u$ is any number between $f(a)$ and $f(b)$, then there exists at least one $c \\in (a, b)$ such that $f(c) = u$.\n   - Root Location Corollary: If $f(a)$ and $f(b)$ have opposite signs ($f(a) \\cdot f(b) < 0$), then $\\exists c \\in (a, b)$ where $f(c) = 0$.\n\n2. Mean Value Theorems:\n   - Rolle's Theorem: $f \\in C[a, b], f \\in D(a, b)$, $f(a)=f(b) \\implies \\exists c \\in (a, b): f'(c) = 0$.\n   - Lagrange's MVT: $f'(c) = \\frac{f(b) - f(a)}{b - a}$.\n   - Cauchy's MVT: If $f, g$ continuous on $[a, b]$ and differentiable on $(a, b)$, then $\\exists c \\in (a, b)$ such that:\n     $\\frac{f'(c)}{g'(c)} = \\frac{f(b) - f(a)}{g(b) - g(a)}$\n\n3. Taylor's Theorem with Lagrange Remainder:\n   $f(x) = P_n(x) + R_n(x)$, where $P_n(x)$ is $n$-th Taylor polynomial, and:\n   $R_n(x) = \\frac{f^{(n+1)}(c)}{(n+1)!} (x - a)^{n+1} \\quad \\text{for some } c \\text{ between } a \\text{ and } x$.\n\n4. Solved Worked Example (Root Existence via IVT):\n   Show that $f(x) = x^5 - 3x - 1 = 0$ has a real root in interval $[1, 2]$.\n   - Evaluate at boundaries:\n     $f(1) = 1^5 - 3(1) - 1 = 1 - 3 - 1 = -3 < 0$.\n     $f(2) = 2^5 - 3(2) - 1 = 32 - 6 - 1 = 25 > 0$.\n   - Since $f(x)$ is a polynomial, it is continuous on $[1, 2]$.\n   - Since $f(1) < 0 < f(2)$, by IVT there exists at least one $c \\in (1, 2)$ such that $f(c) = 0$.\n\n5. Python SymPy Numerical Root Bisection:\n'''python\nimport sympy as sp\n\nx = sp.Symbol('x')\nf = x**5 - 3*x - 1\n\n# Numerical root finding in interval [1, 2]\nroot = sp.nsolve(f, x, 1.5)\nprint(\"Root location by IVT:\", root) # Output: ~1.38879\n''''"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Calculus",
        "author": "Michael Spivak"
      }
    ],
    "practiceLinks": [
      {
        "title": "Khan Academy Mean Value Theorem",
        "url": "https://www.khanacademy.org/math/ap-calculus-ab/ab-diff-analytical-applications-new"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State Intermediate Value Theorem (IVT) and its condition for root location. (2 Marks)",
        "State Cauchy's Mean Value Theorem. (2 Marks)",
        "Write Lagrange form of remainder in Taylor's Theorem. (2 Marks)"
      ],
      "sixMarks": [
        "Use IVT and Rolle's Theorem to prove that $x^3 + 2x - 5 = 0$ has exactly one real root. (6 Marks)",
        "Find maximum error in approximating $\\sin(0.1)$ using 3rd degree Maclaurin polynomial. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive theoretical derivation of Rolle's theorem, Lagrange MVT, Cauchy MVT, derivation of L'Hopital's rule, and Python error bound computation. (10 Marks)"
      ]
    }
  },
  {
    "title": "Numerical Methods Using Calculus",
    "slug": "calculus-numerical-methods-using-calculus",
    "order": 13,
    "estimatedHours": 6,
    "difficulty": "Advanced",
    "description": "Numerical calculus techniques: Numerical differentiation (Forward, Backward, Central difference formulas), Numerical integration (Trapezoidal rule, Simpson's 1/3 rule), and truncation error formulas.",
    "subTopics": [
      "Numerical Differentiation",
      "Numerical Integration",
      "Trapezoidal Rule",
      "Simpson's Rule",
      "Approximation Methods"
    ],
    "prerequisiteTitles": [
      "Mathematical Theorems in Calculus"
    ],
    "learningObjectives": [
      "Compute finite difference approximations for derivatives.",
      "Implement Trapezoidal Rule and Simpson's 1/3 Rule for numerical integration.",
      "Analyze truncation errors $O(h^2)$ and $O(h^4)$ in numerical approximations."
    ],
    "notes": [
      {
        "title": "Finite Differences, Quadrature Rules & Error Estimation",
        "content": "NUMERICAL CALCULUS METHODS\n\n1. Numerical Differentiation Formulas (Grid step $h$):\n   - Forward Difference: $f'(x) \\approx \\frac{f(x+h) - f(x)}{h} \\quad [\\text{Error } O(h)]$\n   - Backward Difference: $f'(x) \\approx \\frac{f(x) - f(x-h)}{h} \\quad [\\text{Error } O(h)]$\n   - Central Difference: $f'(x) \\approx \\frac{f(x+h) - f(x-h)}{2h} \\quad [\\text{Error } O(h^2)]$\n\n2. Trapezoidal Rule:\n   For $n$ subintervals of step $h = \\frac{b-a}{n}$:\n   $\\int_a^b f(x) , dx \\approx \\frac{h}{2} \\left[ f(x_0) + 2 \\sum_{i=1}^{n-1} f(x_i) + f(x_n) \\right]$\n   - Truncation Error: $E_T = -\\frac{(b-a)h^2}{12} f''(\\xi)$\n\n3. Simpson's 1/3 Rule (Requires even $n$):\n   $\\int_a^b f(x) , dx \\approx \\frac{h}{3} \\left[ f(x_0) + 4 \\sum_{i \\text{ odd}} f(x_i) + 2 \\sum_{i \\text{ even}} f(x_i) + f(x_n) \\right]$\n   - Truncation Error: $E_S = -\\frac{(b-a)h^4}{180} f^{(4)}(\\xi)$\n\n4. Solved Worked Example (Simpson's 1/3 Rule):\n   Evaluate $\\int_0^1 e^{-x^2} dx$ using Simpson's Rule with $n = 4$ subintervals.\n   - Step $h = \\frac{1 - 0}{4} = 0.25$.\n   - Grid points: $x = [0.0, 0.25, 0.50, 0.75, 1.0]$.\n   - Values:\n     $f(0) = 1.0$, $f(0.25) = e^{-0.0625} \\approx 0.939413$, $f(0.5) = e^{-0.25} \\approx 0.778801$,\n     $f(0.75) = e^{-0.5625} \\approx 0.569783$, $f(1) = e^{-1} \\approx 0.367879$.\n   - Apply Simpson's Formula:\n     $I \\approx \\frac{0.25}{3} [ 1.0 + 4(0.939413 + 0.569783) + 2(0.778801) + 0.367879 ]$\n     $= \\frac{0.25}{3} [ 1.0 + 4(1.509196) + 1.557602 + 0.367879 ] = \\frac{0.25}{3} [ 8.962265 ] = 0.746855$.\n\n5. Python NumPy Numerical Quadrature Code:\n'''python\nimport numpy as np\n\n# Grid setup\nf = lambda x: np.exp(-x**2)\na, b, n = 0.0, 1.0, 4\nx_grid = np.linspace(a, b, n + 1)\ny_grid = f(x_grid)\nh = (b - a) / n\n\n# Trapezoidal Rule\ntrap_val = (h / 2) * (y_grid[0] + 2 * np.sum(y_grid[1:-1]) + y_grid[-1])\nprint(f\"Trapezoidal result: {trap_val:.6f}\")\n\n# Simpson's 1/3 Rule\nsimp_val = (h / 3) * (y_grid[0] + 4 * np.sum(y_grid[1:-1:2]) + 2 * np.sum(y_grid[2:-2:2]) + y_grid[-1])\nprint(f\"Simpson's result:   {simp_val:.6f}\") # Output: 0.746855\n''''"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Numerical Methods for Engineers",
        "author": "Steven C. Chapra"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Trapezoidal Rule",
        "url": "https://www.geeksforgeeks.org/trapezoidal-rule-for-number-integration/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Compare truncation errors of Central Difference vs Forward Difference. (2 Marks)",
        "State Trapezoidal Rule and Simpson's 1/3 Rule formulas. (2 Marks)",
        "Why must the number of subintervals $n$ be even for Simpson's 1/3 Rule? (2 Marks)"
      ],
      "sixMarks": [
        "Evaluate $\\int_1^2 \\frac{1}{x} dx$ using Simpson's Rule with $n = 4$ and compare with exact value $\\ln 2$. (6 Marks)",
        "Derive Central Difference formula for 1st derivative using Taylor series expansions of $f(x+h)$ and $f(x-h)$. (6 Marks)"
      ],
      "longAnswer": [
        "Complete numerical analysis of quadrature errors, Simpson's 3/8 rule derivation, Adaptive Quadrature algorithms, and Python NumPy script benchmarking. (10 Marks)"
      ]
    }
  },
  {
    "title": "Computational Applications",
    "slug": "calculus-computational-applications",
    "order": 14,
    "estimatedHours": 6,
    "difficulty": "Advanced",
    "description": "Computational tools for calculus: Python programming, SymPy for symbolic math, NumPy for matrix calculus operations, MATLAB syntax comparisons, and graph visualization using Matplotlib.",
    "subTopics": [
      "Calculus Using Python",
      "NumPy Mathematical Operations",
      "SymPy for Symbolic Mathematics",
      "MATLAB Calculations",
      "Graph Plotting and Visualization"
    ],
    "prerequisiteTitles": [
      "Numerical Methods Using Calculus"
    ],
    "learningObjectives": [
      "Use Python SymPy for automatic calculus derivation and integration.",
      "Utilize Matplotlib to visualize functions, derivatives, tangents, and integration area under curves.",
      "Compare Python and MATLAB numerical calculus routines."
    ],
    "notes": [
      {
        "title": "Python SymPy/NumPy/Matplotlib Calculus Implementation",
        "content": "COMPUTATIONAL CALCULUS WITH PYTHON\n\n1. SymPy Core Calculus Functions:\n   - Symbol Creation: 'x = sp.Symbol('x')'\n   - Differentiation: 'sp.diff(func, x, order)'\n   - Indefinite Integration: 'sp.integrate(func, x)'\n   - Definite Integration: 'sp.integrate(func, (x, a, b))'\n   - Limits: 'sp.limit(func, x, target)'\n   - Series Expansion: 'sp.series(func, x, center, n_terms)'\n\n2. Complete Python Computational Script:\n'''python\nimport numpy as np\nimport matplotlib.pyplot as plt\nimport sympy as sp\n\n# 1. Symbolic Operations with SymPy\nx = sp.Symbol('x')\nf_sym = x * sp.sin(x)\ndf_sym = sp.diff(f_sym, x)\nint_sym = sp.integrate(f_sym, (x, 0, sp.pi))\n\nprint(\"f(x) =\", f_sym)\nprint(\"f'(x) =\", df_sym)\nprint(\"Integral [0, pi] =\", int_sym) # Output: pi\n\n# 2. Numerical Plotting with NumPy & Matplotlib\nx_vals = np.linspace(0, 2*np.pi, 200)\nf_num = x_vals * np.sin(x_vals)\ndf_num = np.sin(x_vals) + x_vals * np.cos(x_vals)\n\nplt.figure(figsize=(8, 4))\nplt.plot(x_vals, f_num, label=r'$f(x) = x \\sin(x)$', color='blue')\nplt.plot(x_vals, df_num, label=r\"$f'(x) = \\sin(x) + x \\cos(x)$\", color='red', linestyle='--')\nplt.fill_between(x_vals, f_num, where=(x_vals>=0) & (x_vals<=np.pi), color='skyblue', alpha=0.4, label='Area [0, $\\pi$]')\nplt.title('Calculus Visualization in Python')\nplt.xlabel('x')\nplt.ylabel('y')\nplt.legend()\nplt.grid(True)\nplt.show()\n''''"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Doing Math with Python",
        "author": "Amit Saha"
      }
    ],
    "practiceLinks": [
      {
        "title": "SymPy Calculus Documentation",
        "url": "https://docs.sympy.org/latest/modules/calculus/index.html"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain how `sp.diff()` and `sp.integrate()` work in SymPy. (2 Marks)",
        "How is numerical differentiation performed on NumPy arrays using `np.gradient()`? (2 Marks)",
        "Write Python code to shade area under a curve using Matplotlib `fill_between`. (2 Marks)"
      ],
      "sixMarks": [
        "Write complete Python program to plot $f(x) = x^3 - 3x$ and its tangent line at $x = 2$. (6 Marks)",
        "Write Python script using SymPy to verify product rule for $f(x) = e^x \\cos x$. (6 Marks)"
      ],
      "longAnswer": [
        "Full technical stack guide for scientific computing in calculus: SymPy symbolic derivation, NumPy discretization, SciPy `quad`/`minimize` optimization routines, and automated Matplotlib plot generation. (10 Marks)"
      ]
    }
  },
  {
    "title": "Applications in Engineering and CS",
    "slug": "calculus-applications-in-engineering-and-cs",
    "order": 15,
    "estimatedHours": 7,
    "difficulty": "Advanced",
    "description": "Interdisciplinary applications: Machine learning gradient descent, loss function optimization, computer graphics curves, physics kinematics, signal processing, and data science.",
    "subTopics": [
      "Machine Learning Optimization",
      "Gradient-Based Learning Concepts",
      "Computer Graphics",
      "Physics Applications",
      "Engineering Design",
      "Signal Processing",
      "Data Science Applications"
    ],
    "prerequisiteTitles": [
      "Computational Applications"
    ],
    "learningObjectives": [
      "Apply single-variable derivatives to update machine learning weights $\\theta_{t+1} = \\theta_t - \\alpha f'(\\theta_t)$.",
      "Formulate computer graphics Bezier curves using parametric calculus.",
      "Analyze physics kinematics and signal continuous-time equations using integration."
    ],
    "notes": [
      {
        "title": "Gradient Descent in ML, Graphics Curves & Signal Integrals",
        "content": "CALCULUS APPLICATIONS IN COMPUTER SCIENCE & ENGINEERING\n\n1. Gradient Descent in Machine Learning:\n   To minimize a loss function $L(w)$:\n   $w_{t+1} = w_t - \\alpha \\cdot \\frac{d L}{d w}$\n   where $\\alpha > 0$ is the learning rate.\n   - For Mean Squared Error Loss $L(w) = \\frac{1}{2} (w x - y)^2$:\n     $\\frac{d L}{d w} = (w x - y) \\cdot x$.\n\n2. Solved Worked Example (ML Optimization Iteration):\n   Let $L(w) = w^2 - 4w + 5$. Find minimum via calculus and perform 2 Gradient Descent steps ($\\alpha = 0.1, w_0 = 10$).\n   - Exact calculus minimum: $L'(w) = 2w - 4 = 0 \\implies w^* = 2$.\n   - Iteration 1:\n     $L'(10) = 2(10) - 4 = 16$.\n     $w_1 = 10 - 0.1(16) = 10 - 1.6 = 8.4$.\n   - Iteration 2:\n     $L'(8.4) = 2(8.4) - 4 = 12.8$.\n     $w_2 = 8.4 - 0.1(12.8) = 8.4 - 1.28 = 7.12$.\n\n3. Python Gradient Descent Optimization Script:\n'''python\nimport numpy as np\n\n# Loss function L(w) = w^2 - 4w + 5\ndef loss(w):\n    return w**2 - 4*w + 5\n\ndef grad(w):\n    return 2*w - 4\n\n# Gradient Descent Loop\nw = 10.0 # Initial weight\nalpha = 0.1 # Learning rate\niterations = 20\n\nfor step in range(iterations):\n    g = grad(w)\n    w = w - alpha * g\n\nprint(f\"Optimized weight after {iterations} steps: {w:.4f}\") # Converges to 2.0000\nprint(f\"Minimum loss value: {loss(w):.4f}\")                 # Converges to 1.0000\n''''"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Mathematics for Machine Learning",
        "author": "Deisenroth, Faisal, Ong"
      }
    ],
    "practiceLinks": [
      {
        "title": "Coursera Mathematics for Machine Learning Calculus",
        "url": "https://www.coursera.org/learn/multivariate-calculus-machine-learning"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain weight update formula in Gradient Descent algorithm. (2 Marks)",
        "How is derivative used in Bezier curve velocity and tangent vector calculations in Computer Graphics? (2 Marks)",
        "Define Continuous Fourier Transform integral. (2 Marks)"
      ],
      "sixMarks": [
        "Perform 3 iterations of Gradient Descent for $L(w) = w^4 - 3w^2 + 2$ with $\\alpha = 0.05, w_0 = 2.0$. (6 Marks)",
        "In physics, a particle's velocity is $v(t) = 3t^2 - 6t \\text{ m/s}$. Calculate total displacement and distance traveled from $t=0$ to $t=3 \\text{ s}$. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on single variable calculus across CS domains: ML optimization, activation function derivatives (Sigmoid, ReLU, Tanh), audio signal processing filters, and Python implementation. (10 Marks)"
      ]
    }
  },
  {
    "title": "Practical Problem Solving",
    "slug": "calculus-practical-problem-solving",
    "order": 16,
    "estimatedHours": 8,
    "difficulty": "Advanced",
    "description": "End-to-end practical engineering case studies, complex solved numerical problems, graphical modeling, and real-world calculus applications across science and software.",
    "subTopics": [
      "Solved Numerical Problems",
      "Graph-Based Problems",
      "Engineering Case Studies",
      "Mathematical Modeling",
      "Real-World Calculus Applications"
    ],
    "prerequisiteTitles": [
      "Applications in Engineering and CS"
    ],
    "learningObjectives": [
      "Solve integrated multi-concept problems combining differentiation, integration, and DEs.",
      "Formulate mathematical models for engineering systems.",
      "Execute Python verification scripts for complex real-world calculus problems."
    ],
    "notes": [
      {
        "title": "Comprehensive Engineering Case Studies & Worked Calculus Suite",
        "content": "PRACTICAL PROBLEM SOLVING & MATHEMATICAL MODELING\n\n1. Case Study 1: Heat Transfer & Differential Equations\n   Newton's Law of Cooling model: $\\frac{dT}{dt} = -k(T - T_{env})$.\n   - Solution: $T(t) = T_{env} + (T_0 - T_{env}) e^{-kt}$.\n\n2. Case Study 2: Material Cost Optimization for Industrial Tank\n   A cylindrical oil storage tank of fixed volume $V_0 = 1000 \\pi \\text{ m}^3$ has flat top/bottom. Find radius $r$ and height $h$ that minimize steel material used (surface area).\n   - Surface Area $S(r) = 2\\pi r^2 + 2\\pi r h$.\n   - Volume $V = \\pi r^2 h = 1000\\pi \\implies h = \\frac{1000}{r^2}$.\n   - Substitute $h$: $S(r) = 2\\pi r^2 + 2\\pi r \\left(\\frac{1000}{r^2}\\right) = 2\\pi r^2 + \\frac{2000\\pi}{r}$.\n   - Derivative: $S'(r) = 4\\pi r - \\frac{2000\\pi}{r^2} = 0 \\implies 4\\pi r^3 = 2000\\pi \\implies r^3 = 500 \\implies r = \\sqrt[3]{500} \\approx 7.937 \\text{ m}$.\n   - Height $h = \\frac{1000}{500^{2/3}} = 2 r \\approx 15.874 \\text{ m}$.\n\n3. Python Solution & Verification:\n'''python\nimport numpy as np\nimport sympy as sp\nfrom scipy.optimize import minimize\n\n# Industrial Tank Optimization\nr = sp.Symbol('r')\nS = 2*sp.pi*r**2 + 2000*sp.pi/r\nr_opt = sp.solve(sp.diff(S, r), r)[0]\n\nprint(f\"Exact optimal radius r = {r_opt} = {float(r_opt):.3f} m\")\nprint(f\"Optimal height h = 2*r = {2*float(r_opt):.3f} m\")\n''''"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Calculus: Concepts and Contexts",
        "author": "James Stewart"
      }
    ],
    "practiceLinks": [
      {
        "title": "MIT OpenCourseWare Single Variable Calculus Problems",
        "url": "https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain the steps in mathematical modeling of physical engineering problems using calculus. (2 Marks)",
        "What ratio of height to radius minimizes surface area of a closed cylinder for fixed volume? (2 Marks)",
        "Explain how rate equations model radioactive waste decay. (2 Marks)"
      ],
      "sixMarks": [
        "Solve Newton's Law of Cooling problem: Object at $100^\\circ\\text{C}$ cools to $60^\\circ\\text{C}$ in 10 mins in room at $20^\\circ\\text{C}$. Find temperature after 20 mins. (6 Marks)",
        "A rocket launched vertically has acceleration $a(t) = 6t + 4 \\text{ m/s}^2$. If $v(0)=0, s(0)=0$, find height $s(t)$ and velocity at $t = 10 \\text{ s}$. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive capstone project: Mathematical modeling of damped simple harmonic motion $m x'' + c x' + k x = 0$, analytical solution derivation, energy conservation integration, and Python numerical simulation. (10 Marks)"
      ]
    }
  }
];
