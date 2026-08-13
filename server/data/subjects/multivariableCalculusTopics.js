module.exports = [
  {
    "title": "Introduction to Multivariable Calculus",
    "slug": "multivariable-calculus-introduction-to-multivariable-calculus",
    "order": 1,
    "estimatedHours": 3,
    "difficulty": "Beginner",
    "description": "Explore functions of several variables, comparing single-variable calculus with multivariable calculus, understanding 3D domain-range mappings, coordinate systems, and engineering applications.",
    "subTopics": [
      "Introduction to Multivariable Functions",
      "Difference Between Single Variable and Multivariable Calculus",
      "Applications of Multivariable Calculus",
      "Coordinate Systems Overview",
      "Functions of Several Variables",
      "Domain and Range of Multivariable Functions"
    ],
    "prerequisiteTitles": [],
    "learningObjectives": [
      "Define scalar and vector functions of multiple independent variables and determine their mathematical domains and ranges.",
      "Contrast single-variable concepts (curves, derivatives as scalar slopes) with multivariable concepts (surfaces, level sets, partial derivatives, gradients).",
      "Identify physical and engineering applications of multivariable fields in thermodynamics, machine learning loss functions, and fluid mechanics."
    ],
    "notes": [
      {
        "title": "Foundations of Multivariable Functions, Domains, and Coordinate Systems",
        "content": "1. DEFINITION OF MULTIVARIABLE FUNCTIONS:\nA scalar function of two variables is a rule that assigns to each ordered pair of real numbers (x, y) in a set D (the domain) a unique real number z = f(x, y). Here, x and y are independent variables, and z is the dependent variable.\n- Domain: D = {(x, y) in R^2 | f(x, y) is well-defined in R}\n- Range: {z in R | z = f(x, y) for some (x, y) in D}\n\nFor three variables, w = f(x, y, z), the domain D is a subset of 3D space R^3.\n\n2. COMPARISON: SINGLE-VARIABLE VS MULTIVARIABLE CALCULUS:\n+------------------------+------------------------------------+-------------------------------------+\n| Feature                | Single Variable Calculus f(x)      | Multivariable Calculus f(x, y, z)   |\n+------------------------+------------------------------------+-------------------------------------+\n| Domain                 | Interval on Real Line R^1          | Region in R^2 (plane) or R^3 (space)|\n| Graph                  | 2D Curve in R^2                    | 3D Surface in R^3 or Level Surfaces |\n| Rate of Change         | Single derivative f'(x) (slope)    | Partial derivatives f_x, f_y, grad  |\n| Integration Domain     | 1D Interval [a, b]                 | 2D Region R or 3D Solid Volume V    |\n+------------------------+------------------------------------+-------------------------------------+\n\n3. VISUALIZING MULTIVARIABLE FUNCTIONS:\nSurfaces z = f(x, y) are represented by contour maps (level curves f(x, y) = c).\n\nASCII DIAGRAM OF LEVEL CURVES AND 3D SURFACE:\n          z-axis (Output)\n            ^\n            |       /---/  Surface z = f(x,y)\n            |      /   /\n            |     /---/\n            +------------------> y-axis\n           /\n          /   Contour Lines: f(x,y) = c3\n         v                   f(x,y) = c2\n       x-axis                f(x,y) = c1\n\n4. DOMAIN EVALUATION SOLVED EXAMPLE:\nProblem: Find and sketch the domain of f(x, y) = sqrt(9 - x^2 - y^2) / ln(x + y).\nSolution Step-by-Step:\nStep 1: Radicand inside square root must be non-negative:\n  9 - x^2 - y^2 >= 0  =>  x^2 + y^2 <= 9  (Closed disk of radius 3 centered at origin).\nStep 2: Natural log input must be strictly positive:\n  x + y > 0  =>  y > -x  (Half-plane strictly above line y = -x).\nStep 3: Denominator cannot be zero:\n  ln(x + y) != 0  =>  x + y != 1  =>  y != 1 - x  (Exclude line y = 1 - x).\nFinal Domain D = {(x, y) in R^2 | x^2 + y^2 <= 9, y > -x, and x + y != 1}.\n\n5. PYTHON CODE FOR DOMAIN CONSTRAINTS (SymPy):\nimport sympy as sp\nx, y = sp.symbols('x y')\nf = sp.sqrt(9 - x**2 - y**2) / sp.log(x + y)\ndomain_condition_1 = 9 - x**2 - y**2 >= 0\ndomain_condition_2 = x + y > 0\ndomain_condition_3 = sp.Ne(x + y, 1)\nprint(\"Domain constraints:\", domain_condition_1, domain_condition_2, domain_condition_3)"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Multivariable Calculus",
        "author": "James Stewart"
      },
      {
        "title": "Thomas' Calculus: Early Transcendentals",
        "author": "George B. Thomas, Maurice D. Weir, Joel R. Hass"
      }
    ],
    "practiceLinks": [
      {
        "title": "Paul's Online Math Notes - Multivariable Functions",
        "url": "https://tutorial.math.lamar.edu/Classes/CalcIII/MultiVrbleFcns.aspx"
      },
      {
        "title": "MIT OpenCourseWare Multivariable Calculus",
        "url": "https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define a scalar function of two variables and state how its domain differs from a single-variable function. (2 Marks)",
        "What is a level curve (contour line) of a surface z = f(x, y)? (2 Marks)",
        "Find the domain of f(x, y) = ln(x^2 + y^2 - 4). (2 Marks)",
        "State two real-world engineering applications of multivariable scalar fields. (2 Marks)"
      ],
      "sixMarks": [
        "Determine and sketch the domain of the function f(x, y) = sqrt(16 - x^2 - y^2) / sqrt(x^2 + y^2 - 1). Explain all boundary conditions clearly. (6 Marks)",
        "Explain the geometric significance of level curves and level surfaces with diagrams for f(x, y) = x^2 + y^2 and g(x, y, z) = x^2 + y^2 + z^2. (6 Marks)"
      ],
      "longAnswer": [
        "Provide a comprehensive architectural comparison between single-variable and multivariable calculus. Discuss domain topologies (intervals vs open sets in R^n), surface visualization techniques, boundary conditions, and physical applications in thermodynamics and machine learning loss landscapes. (10 Marks)"
      ]
    }
  },
  {
    "title": "Vectors and Vector Algebra",
    "slug": "multivariable-calculus-vectors-and-vector-algebra",
    "order": 2,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Master 3D vectors, vector algebra operations including dot and cross products, orthogonal projections, magnitudes, unit vectors, and physical applications in force/work calculations.",
    "subTopics": [
      "Introduction to Vectors",
      "Vector Representation",
      "Magnitude of Vectors",
      "Unit Vectors",
      "Vector Addition and Subtraction",
      "Scalar Multiplication",
      "Dot Product",
      "Cross Product",
      "Vector Projection",
      "Applications of Vectors"
    ],
    "prerequisiteTitles": [
      "Introduction to Multivariable Calculus"
    ],
    "learningObjectives": [
      "Perform 3D vector operations: addition, scalar multiplication, dot product, and vector cross product.",
      "Calculate vector magnitudes, unit direction vectors, scalar projections, and vector projection vectors onto arbitrary lines/axes.",
      "Apply vector products to compute work done by forces, torque vectors, area of parallelograms, and volumes of parallelepipeds."
    ],
    "notes": [
      {
        "title": "Vector Operations, Dot Product, Cross Product, and Projections",
        "content": "1. VECTOR REPRESENTATION IN 3D SPACE:\nA vector in 3D Euclidean space R^3 is represented as a directed line segment with initial point P(x1, y1, z1) and terminal point Q(x2, y2, z2):\nv = <v1, v2, v3> = (x2 - x1)i + (y2 - y1)j + (z2 - z1)k\n\n- Magnitude (Norm): ||v|| = sqrt(v1^2 + v2^2 + v3^2)\n- Unit Vector in direction of v: u_v = v / ||v||\n\n2. DOT PRODUCT (SCALAR PRODUCT):\nFor u = <u1, u2, u3> and v = <v1, v2, v3>:\nu . v = u1*v1 + u2*v2 + u3*v3 = ||u|| ||v|| cos(theta)\n- Orthogonality Test: u and v are orthogonal if and only if u . v = 0.\n- Angle between vectors: cos(theta) = (u . v) / (||u|| ||v||)\n\n3. VECTOR PROJECTION:\n- Scalar projection of u onto v: comp_v(u) = (u . v) / ||v||\n- Vector projection of u onto v: proj_v(u) = [(u . v) / ||v||^2] * v\n\nASCII DIAGRAM OF VECTOR PROJECTION:\n          u\n          ^\n         /|\n        / |  u - proj_v(u) (Orthogonal component)\n       /  |\n      /   v\n     +----------> v\n     |proj_v(u)|\n\n4. CROSS PRODUCT (VECTOR PRODUCT):\nu x v = | i   j   k  |\n        | u1  u2  u3 | = <u2*v3 - u3*v2, u3*v1 - u1*v3, u1*v2 - u2*v1>\n        | v1  v2  v3 |\n- Magnitude: ||u x v|| = ||u|| ||v|| sin(theta) = Area of Parallelogram formed by u and v.\n- Scalar Triple Product: u . (v x w) = Volume of Parallelepiped.\n\n5. SOLVED NUMERICAL EXAMPLE:\nProblem: Given force F = 3i + 4j - 5k (N) applied to move an object from P(1, 0, 2) to Q(4, 2, 5) (m). Compute:\n1) Displacement vector d.\n2) Work done W = F . d.\n3) Vector projection of F onto d.\n\nSolution:\n1) d = <4-1, 2-0, 5-2> = <3, 2, 3> m.\n2) W = F . d = (3)(3) + (4)(2) + (-5)(3) = 9 + 8 - 15 = 2 Joules.\n3) ||d||^2 = 3^2 + 2^2 + 3^2 = 9 + 4 + 9 = 22.\n   proj_d(F) = (F . d / ||d||^2) * d = (2 / 22) * <3, 2, 3> = <3/11, 2/11, 3/11> N.\n\n6. PYTHON CODE FOR VECTOR ALGEBRA (NumPy):\nimport numpy as np\nu = np.array([3, 4, -5])\nv = np.array([3, 2, 3])\ndot_prod = np.dot(u, v)\ncross_prod = np.cross(u, v)\nproj_v_u = (np.dot(u, v) / np.dot(v, v)) * v\nprint(\"Dot product:\", dot_prod)\nprint(\"Cross product:\", cross_prod)\nprint(\"Vector projection:\", proj_v_u)"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Linear Algebra and Its Applications",
        "author": "Gilbert Strang"
      },
      {
        "title": "Calculus: Early Transcendentals",
        "author": "James Stewart"
      }
    ],
    "practiceLinks": [
      {
        "title": "Khan Academy Vector Algebra Practice",
        "url": "https://www.khanacademy.org/math/multivariable-calculus/thinking-about-multivariable-function/x78b0f9f:vectors"
      },
      {
        "title": "Paul's Online Math Notes - Vectors",
        "url": "https://tutorial.math.lamar.edu/Classes/CalcIII/VectorsBasics.aspx"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define scalar projection comp_b(a) and vector projection proj_b(a). (2 Marks)",
        "State the geometric significance of ||a x b|| and a . (b x c). (2 Marks)",
        "Determine if vectors u = <2, -1, 4> and v = <3, 6, 0> are orthogonal. (2 Marks)",
        "Write the formula for the unit vector parallel to a given vector v. (2 Marks)"
      ],
      "sixMarks": [
        "Find the area of the triangle with vertices A(1, 1, 1), B(2, 3, 4), and C(1, 5, 2) using cross product. (6 Marks)",
        "Prove vector projection properties: Show that u - proj_v(u) is orthogonal to v for any non-zero vectors u and v. (6 Marks)"
      ],
      "longAnswer": [
        "Derive the algebraic and geometric definitions of the Dot Product and Cross Product. Prove Lagrange's Identity ||u x v||^2 = ||u||^2 ||v||^2 - (u . v)^2 and demonstrate its application in computing structural torque and work done in mechanical systems. (10 Marks)"
      ]
    }
  },
  {
    "title": "Three-Dimensional Coordinate Geometry",
    "slug": "multivariable-calculus-three-dimensional-coordinate-geometry",
    "order": 3,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Explore 3D space representations: Cartesian (x,y,z), Cylindrical (r,theta,z), Spherical (rho,theta,phi), line and plane equations, quadric surfaces (ellipsoids, paraboloids, hyperboloids).",
    "subTopics": [
      "Cartesian Coordinates in 3D",
      "Cylindrical Coordinates",
      "Spherical Coordinates",
      "Distance Between Points in Space",
      "Equations of Lines in Space",
      "Equations of Planes",
      "Quadric Surfaces",
      "Visualization of 3D Surfaces"
    ],
    "prerequisiteTitles": [
      "Vectors and Vector Algebra"
    ],
    "learningObjectives": [
      "Transform points and vector fields between Cartesian, Cylindrical, and Spherical coordinate systems.",
      "Formulate vector, parametric, and symmetric equations for 3D lines and linear equations for planes.",
      "Identify and classify quadric surfaces (ellipsoids, paraboloids, hyperboloids of one/two sheets, cones, cylinders) from second-degree equations."
    ],
    "notes": [
      {
        "title": "3D Coordinate Systems, Equations of Lines & Planes, and Quadric Surfaces",
        "content": "1. 3D COORDINATE SYSTEMS & CONVERSION FORMULAS:\n\nA. Cartesian Coordinates: (x, y, z)\nB. Cylindrical Coordinates: (r, theta, z)\n   - Transformations: x = r*cos(theta), y = r*sin(theta), z = z\n   - Inverse: r = sqrt(x^2 + y^2), theta = arctan(y/x)\n   - Volume element: dV = r dr dtheta dz\n\nC. Spherical Coordinates: (rho, theta, phi) where rho >= 0, 0 <= theta <= 2*pi, 0 <= phi <= pi\n   - Transformations: x = rho*sin(phi)*cos(theta), y = rho*sin(phi)*sin(theta), z = rho*cos(phi)\n   - Inverse: rho = sqrt(x^2 + y^2 + z^2), cos(phi) = z / rho\n   - Volume element: dV = rho^2 * sin(phi) drho dtheta dphi\n\nASCII SCHEMATIC OF SPHERICAL COORDINATES:\n             z-axis\n               ^   P(rho, theta, phi)\n               |  /|\n               | / |  rho\n               |/  |\n               +---|-------------> y-axis\n              /   |\n             /    |\n            v     v\n          x-axis  r (Projection in xy-plane)\n\n2. EQUATIONS OF LINES AND PLANES IN SPACE:\n- Line through P0(x0, y0, z0) parallel to v = <a, b, c>:\n  Vector Form: r(t) = r0 + t*v\n  Parametric Form: x = x0 + a*t, y = y0 + b*t, z = z0 + c*t\n  Symmetric Form: (x - x0)/a = (y - y0)/b = (z - z0)/c\n\n- Plane through P0(x0, y0, z0) with normal vector n = <A, B, C>:\n  Vector Form: n . (r - r0) = 0\n  Standard Equation: A(x - x0) + B(y - y0) + C(z - z0) = 0 => Ax + By + Cz = D\n\n3. QUADRIC SURFACES CLASSIFICATION:\n+-----------------------+---------------------------------------+-----------------------------+\n| Surface Name          | Standard Equation                     | Key Feature                 |\n+-----------------------+---------------------------------------+-----------------------------+\n| Ellipsoid             | x^2/a^2 + y^2/b^2 + z^2/c^2 = 1       | Closed bounded surface      |\n| Elliptic Paraboloid   | z = x^2/a^2 + y^2/b^2                 | Bowl shape opening upwards  |\n| Hyperbolic Paraboloid | z = y^2/b^2 - x^2/a^2                 | Saddle shape                |\n| Cone                  | z^2/c^2 = x^2/a^2 + y^2/b^2           | Double cone meeting at origin|\n| Hyperboloid 1 Sheet   | x^2/a^2 + y^2/b^2 - z^2/c^2 = 1       | Connected cooling tower     |\n+-----------------------+---------------------------------------+-----------------------------+\n\n4. SOLVED NUMERICAL EXAMPLE:\nProblem: Convert point P(x=1, y=-sqrt(3), z=2) from Cartesian to Spherical coordinates.\nSolution:\nStep 1: rho = sqrt(1^2 + (-sqrt(3))^2 + 2^2) = sqrt(1 + 3 + 4) = sqrt(8) = 2*sqrt(2).\nStep 2: cos(phi) = z / rho = 2 / (2*sqrt(2)) = 1 / sqrt(2) => phi = pi/4 (45 deg).\nStep 3: tan(theta) = y / x = -sqrt(3) / 1 = -sqrt(3).\n        Since x > 0 and y < 0 (Quadrant IV in xy-plane), theta = 2*pi - pi/3 = 5*pi/3 (300 deg).\nResult: P in Spherical coordinates is (2*sqrt(2), 5*pi/3, pi/4).\n\n5. PYTHON PLOTTING EXAMPLE (Matplotlib 3D):\nimport numpy as np\nimport matplotlib.pyplot as plt\nfig = plt.figure()\nax = fig.add_subplot(111, projection='3d')\nu = np.linspace(0, 2 * np.pi, 30)\nv = np.linspace(0, np.pi, 30)\nx = 2 * np.outer(np.cos(u), np.sin(v))\ny = 3 * np.outer(np.sin(u), np.sin(v))\nz = 4 * np.outer(np.ones(np.size(u)), np.cos(v))\nax.plot_surface(x, y, z, color='b')\nprint(\"Ellipsoid mesh generated successfully\")"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Thomas' Calculus",
        "author": "George B. Thomas"
      },
      {
        "title": "Calculus",
        "author": "Ron Larson & Bruce H. Edwards"
      }
    ],
    "practiceLinks": [
      {
        "title": "Paul's Online Math Notes - 3D Coordinates",
        "url": "https://tutorial.math.lamar.edu/Classes/CalcIII/3DCoords.aspx"
      },
      {
        "title": "GeeksforGeeks Quadric Surfaces",
        "url": "https://www.geeksforgeeks.org/quadric-surfaces-in-multivariable-calculus/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State the coordinate transformation equations from Cartesian (x,y,z) to Spherical (rho, theta, phi). (2 Marks)",
        "Write the equation of a plane passing through origin with normal vector n = <3, -2, 5>. (2 Marks)",
        "Identify the quadric surface defined by x^2 + 4y^2 - z^2 = 1. (2 Marks)",
        "What is the physical interpretation of the Jacobian factor r in cylindrical coordinates? (2 Marks)"
      ],
      "sixMarks": [
        "Find the equation of the plane containing the line x = 1 + t, y = 2 - t, z = 4 - 3t and passing through point P(2, 1, -1). (6 Marks)",
        "Convert the Cartesian equation x^2 + y^2 + z^2 - 4z = 0 into both Cylindrical and Spherical coordinate forms and describe the resulting surface geometries. (6 Marks)"
      ],
      "longAnswer": [
        "Derive the complete differential volume elements dV for Cartesian, Cylindrical, and Spherical coordinate systems using 3D Jacobian determinants. Provide detailed geometric sketches and analyze their applications in calculating gravitational attraction of spherical bodies. (10 Marks)"
      ]
    }
  },
  {
    "title": "Limits and Continuity of Multivariable Functions",
    "slug": "multivariable-calculus-limits-and-continuity-of-multivariable-functions",
    "order": 4,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Understand limit definitions for functions f(x,y), evaluate multivariable limits, analyze path dependency (two-path test for non-existence), and verify continuity in higher dimensions.",
    "subTopics": [
      "Limits of Functions of Several Variables",
      "Evaluating Multivariable Limits",
      "Path Dependency",
      "Continuity of Multivariable Functions",
      "Partial Continuity",
      "Applications of Limits"
    ],
    "prerequisiteTitles": [
      "Three-Dimensional Coordinate Geometry"
    ],
    "learningObjectives": [
      "Understand the formal epsilon-delta definition of limits in R^2 and R^3.",
      "Use the two-path test (y = mx, y = kx^2, polar coordinates r -> 0) to prove non-existence of multivariable limits.",
      "Determine points and regions of continuity and partial continuity for rational and piecewise multivariable functions."
    ],
    "notes": [
      {
        "title": "Limits in R^2, Path-Dependency, Epsilon-Delta Definition, and Continuity",
        "content": "1. FORMAL EPSILON-DELTA DEFINITION OF MULTIVARIABLE LIMIT:\nLet f be a function of two variables whose domain D includes points arbitrarily close to (x0, y0).\nWe write lim_{(x,y)->(x0,y0)} f(x, y) = L if for every epsilon > 0, there exists a corresponding delta > 0 such that:\nif 0 < sqrt((x - x0)^2 + (y - y0)^2) < delta, then |f(x, y) - L| < epsilon.\n\n2. PATH DEPENDENCY AND THE TWO-PATH TEST:\nIn single variable calculus, x approaches x0 from only two directions (left and right).\nIn multivariable calculus, (x, y) can approach (x0, y0) along infinitely many paths (lines y = mx, parabolas y = kx^2, cubic curves, etc.).\n\nTWO-PATH TEST FOR NON-EXISTENCE:\nIf f(x, y) approaches two different values L1 and L2 as (x, y) approaches (x0, y0) along two different paths C1 and C2, then lim_{(x,y)->(x0,y0)} f(x, y) DOES NOT EXIST.\n\nASCII DIAGRAM OF MULTIPLE APPROACH PATHS:\n              y-axis\n                |    Path 2: y = k*x^2 (Parabola)\n                |   /\n                |  /  Path 1: y = m*x (Line)\n                | /\n      ----------+------------> x-axis (x0, y0)\n               /|\n              / |\n             /  |\n\n3. SOLVED EXAMPLE 1 (PROVING NON-EXISTENCE):\nProblem: Evaluate lim_{(x,y)->(0,0)} (x^2 - y^2) / (x^2 + y^2).\nSolution:\n- Approach along path 1: Line y = mx through origin.\n  lim_{x->0} (x^2 - (mx)^2) / (x^2 + (mx)^2) = lim_{x->0} x^2(1 - m^2) / [x^2(1 + m^2)] = (1 - m^2) / (1 + m^2).\n- The limit value depends explicitly on the slope m!\n  If m = 0 (x-axis), limit = 1.\n  If m = 1 (line y = x), limit = 0.\nConclusion: By the Two-Path Test, the limit DOES NOT EXIST.\n\n4. SOLVED EXAMPLE 2 (LIMIT EVALUATION VIA POLAR COORDINATES):\nProblem: Evaluate lim_{(x,y)->(0,0)} (x^3 + y^3) / (x^2 + y^2).\nSolution:\nSubstitute x = r*cos(theta), y = r*sin(theta). As (x,y)->(0,0), r->0+.\nf(r, theta) = (r^3 cos^3(theta) + r^3 sin^3(theta)) / (r^2 cos^2(theta) + r^2 sin^2(theta))\n            = r^3 (cos^3(theta) + sin^3(theta)) / r^2\n            = r * (cos^3(theta) + sin^3(theta))\nNotice |cos^3(theta) + sin^3(theta)| <= 2.\nThus 0 <= |r (cos^3(theta) + sin^3(theta))| <= 2r.\nAs r -> 0, by Squeeze Theorem, lim_{(x,y)->(0,0)} f(x, y) = 0.\n\n5. CONTINUITY DEFINITION:\nA function f(x, y) is continuous at (x0, y0) if:\n1. f(x0, y0) is defined.\n2. lim_{(x,y)->(x0,y0)} f(x, y) exists.\n3. lim_{(x,y)->(x0,y0)} f(x, y) = f(x0, y0).\n\n6. PYTHON CODE FOR EVALUATING LIMITS (SymPy):\nimport sympy as sp\nx, y = sp.symbols('x y')\nf = (x**3 + y**3) / (x**2 + y**2)\nlimit_val = sp.limit(sp.limit(f, x, 0), y, 0)\nprint(\"Iterated limit evaluation:\", limit_val)"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Calculus Early Transcendentals",
        "author": "James Stewart"
      },
      {
        "title": "Advanced Calculus",
        "author": "Patrick M. Fitzpatrick"
      }
    ],
    "practiceLinks": [
      {
        "title": "Paul's Online Math Notes - Limits",
        "url": "https://tutorial.math.lamar.edu/Classes/CalcIII/Limits.aspx"
      },
      {
        "title": "MIT OCW Multivariable Limits Practice",
        "url": "https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State the Two-Path Test for proving non-existence of a limit in two variables. (2 Marks)",
        "When is a function f(x, y) said to be continuous at a point (x0, y0)? (2 Marks)",
        "Evaluate lim_{(x,y)->(1,2)} (x^2 y + 3 x y^2). (2 Marks)",
        "What is the advantage of using polar coordinates when evaluating limits at the origin? (2 Marks)"
      ],
      "sixMarks": [
        "Test the existence of lim_{(x,y)->(0,0)} (x y^2) / (x^2 + y^4) by testing parabolic paths y = k*sqrt(x). (6 Marks)",
        "Discuss the continuity of f(x,y) = (x y) / (x^2 + y^2) for (x,y) != (0,0) and f(0,0) = 0 at the origin (0,0). (6 Marks)"
      ],
      "longAnswer": [
        "State and explain the Epsilon-Delta definition of limits in R^2. Prove using the Epsilon-Delta definition that lim_{(x,y)->(0,0)} (3 x^2 y) / (x^2 + y^2) = 0, showing explicit construction of delta in terms of epsilon. (10 Marks)"
      ]
    }
  },
  {
    "title": "Partial Differentiation",
    "slug": "multivariable-calculus-partial-differentiation",
    "order": 5,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Master first and higher-order partial derivatives, Clairaut's Theorem on mixed partials, the multivariable Chain Rule, total differentials, and error estimation.",
    "subTopics": [
      "Introduction to Partial Derivatives",
      "First Order Partial Derivatives",
      "Higher Order Partial Derivatives",
      "Mixed Partial Derivatives",
      "Chain Rule for Multivariable Functions",
      "Total Derivatives",
      "Applications of Partial Derivatives"
    ],
    "prerequisiteTitles": [
      "Limits and Continuity of Multivariable Functions"
    ],
    "learningObjectives": [
      "Compute first-order and higher-order partial derivatives for functions of two, three, or more variables.",
      "Apply Clairaut's Theorem (equality of mixed partials f_xy = f_yx) under continuity conditions.",
      "Utilize the multivariable Chain Rule and total differential df = f_x dx + f_y dy to calculate total rate of change and propagate measurement errors."
    ],
    "notes": [
      {
        "title": "Partial Derivatives, Clairaut's Theorem, Multivariable Chain Rule, and Total Differentials",
        "content": "1. FIRST-ORDER PARTIAL DERIVATIVES:\nThe partial derivative of f(x, y) with respect to x at (x0, y0) is the derivative of f with respect to x holding y constant:\ndf/dx = lim_{h->0} [f(x + h, y) - f(x, y)] / h\n\nSimilarly, holding x constant:\ndf/dy = lim_{k->0} [f(x, y + k) - f(x, y)] / k\n\n2. HIGHER-ORDER & MIXED PARTIAL DERIVATIVES:\n- Second order w.r.t x: f_xx = d/dx(df/dx) = d^2 f / dx^2\n- Second order w.r.t y: f_yy = d/dy(df/dy) = d^2 f / dy^2\n- Mixed partials: f_xy = d/dy(df/dx) = d^2 f / (dy dx) and f_yx = d/dx(df/dy) = d^2 f / (dx dy)\n\nCLAIRAUT'S THEOREM (EQUALITY OF MIXED PARTIALS):\nIf f(x, y) and its partial derivatives f_x, f_y, f_xy, and f_yx are continuous on an open region D containing (x0, y0), then:\nf_xy(x0, y0) = f_yx(x0, y0)\n\n3. THE MULTIVARIABLE CHAIN RULE:\nCase 1: z = f(x, y) where x = g(t), y = h(t) (x and y depend on single variable t).\ndz/dt = (df/dx)*(dx/dt) + (df/dy)*(dy/dt)\n\nCase 2: z = f(x, y) where x = g(u, v), y = h(u, v) (x and y depend on independent variables u and v).\ndz/du = (df/dx)*(dx/du) + (df/dy)*(dy/du)\ndz/dv = (df/dx)*(dx/dv) + (df/dy)*(dy/dv)\n\nASCII CHAIN RULE DEPENDENCY TREE:\n             z\n            /            /             x     y\n         /    /         u   v u   v\n\n4. TOTAL DIFFERENTIAL & ERROR PROPAGATION:\nFor z = f(x, y), the total differential dz is:\ndz = f_x(x, y) dx + f_y(x, y) dy\n\nRelative Error Estimation: |dz / z| <= |(f_x / z) dx| + |(f_y / z) dy|\n\n5. SOLVED ERROR ESTIMATION PROBLEM:\nProblem: The dimensions of a rectangular box are measured as x = 20 cm, y = 30 cm, z = 40 cm with a maximum possible measurement error of 0.1 cm in each dimension. Estimate the maximum error in computing the Volume V = x*y*z.\n\nSolution:\nStep 1: Compute partial derivatives of V(x, y, z) = x*y*z:\n  dV/dx = y*z = (30)(40) = 1200\n  dV/dy = x*z = (20)(40) = 800\n  dV/dz = x*y = (20)(30) = 600\nStep 2: Total differential dV:\n  dV = (dV/dx) dx + (dV/dy) dy + (dV/dz) dz\n  |dV| <= 1200*(0.1) + 800*(0.1) + 600*(0.1) = 120 + 80 + 60 = 260 cm^3.\nStep 3: Percentage Error = (dV / V) * 100% = (260 / (20*30*40)) * 100% = (260 / 24000) * 100% = 1.083%.\n\n6. PYTHON CODE FOR PARTIAL DERIVATIVES (SymPy):\nimport sympy as sp\nx, y, z = sp.symbols('x y z')\nf = sp.sin(x*y) + x**2 * sp.exp(y)\nfx = sp.diff(f, x)\nfy = sp.diff(f, y)\nfxy = sp.diff(fx, y)\nfyx = sp.diff(fy, x)\nprint(\"fx:\", fx)\nprint(\"fxy == fyx:\", fxy == fyx)"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Thomas' Calculus",
        "author": "George B. Thomas"
      },
      {
        "title": "Multivariable Calculus",
        "author": "James Stewart"
      }
    ],
    "practiceLinks": [
      {
        "title": "Paul's Online Math Notes - Partial Derivatives",
        "url": "https://tutorial.math.lamar.edu/Classes/CalcIII/PartialDerivatives.aspx"
      },
      {
        "title": "GeeksforGeeks Partial Differentiation",
        "url": "https://www.geeksforgeeks.org/partial-derivatives/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State Clairaut's Theorem on mixed partial derivatives. (2 Marks)",
        "Write the multivariable chain rule for z = f(x, y) where x = r*cos(t) and y = r*sin(t). (2 Marks)",
        "Define the total differential dz for a function z = f(x, y). (2 Marks)",
        "Compute f_x and f_y for f(x, y) = x^3 y^2 + e^(x y). (2 Marks)"
      ],
      "sixMarks": [
        "If u = f(x - y, y - z, z - x), prove that du/dx + du/dy + du/dz = 0 using the multivariable chain rule. (6 Marks)",
        "The radius r and height h of a right circular cylinder are measured as r = 5 cm and h = 12 cm with maximum errors dr = 0.05 cm and dh = 0.1 cm. Use total differential to estimate the maximum error and percentage error in calculating volume V = pi r^2 h. (6 Marks)"
      ],
      "longAnswer": [
        "Derive the complete multivariable Chain Rule for a function w = f(x, y, z) with x = x(u, v), y = y(u, v), z = z(u, v). Verify Clairaut's theorem for f(x, y) = ln(x^2 + y^2) and apply total differentials to calculate total error propagation in ideal gas law P*V = n*R*T. (10 Marks)"
      ]
    }
  },
  {
    "title": "Directional Derivatives and Gradient",
    "slug": "multivariable-calculus-directional-derivatives-and-gradient",
    "order": 6,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Compute directional derivatives using the gradient vector grad(f), analyze directions of maximum increase/decrease, construct tangent planes and normal lines to level surfaces.",
    "subTopics": [
      "Directional Derivatives",
      "Gradient Vector",
      "Properties of Gradient",
      "Direction of Maximum Increase",
      "Tangent Planes",
      "Normal Lines",
      "Applications in Engineering"
    ],
    "prerequisiteTitles": [
      "Partial Differentiation"
    ],
    "learningObjectives": [
      "Compute the gradient vector grad(f) = <f_x, f_y, f_z> for scalar fields.",
      "Calculate directional derivative D_u f = grad(f) . u in arbitrary unit directions u.",
      "Construct equations for tangent planes and normal lines to level surfaces F(x,y,z) = c."
    ],
    "notes": [
      {
        "title": "Gradient Vector, Directional Derivatives, Tangent Planes, and Normal Lines",
        "content": "1. GRADIENT VECTOR DEFINITION:\nFor a scalar function f(x, y, z), the gradient vector grad(f) or nabla(f) is defined as:\ngrad(f) = <df/dx, df/dy, df/dz> = (df/dx)i + (df/dy)j + (df/dz)k\n\n2. DIRECTIONAL DERIVATIVE:\nThe directional derivative D_u f(x0, y0, z0) represents the rate of change of f at (x0, y0, z0) in the direction of a UNIT vector u = <u1, u2, u3>:\nD_u f = grad(f) . u = ||grad(f)|| * ||u|| * cos(theta) = ||grad(f)|| * cos(theta)\n\nKEY PROPERTIES OF GRADIENT:\n1. Maximum Rate of Increase: Occurs in the direction of grad(f) (theta = 0). Maximum value is ||grad(f)||.\n2. Maximum Rate of Decrease: Occurs in the direction of -grad(f) (theta = pi). Maximum rate is -||grad(f)||.\n3. Zero Rate of Change: Occurs in directions orthogonal to grad(f) (theta = pi/2), tangent to level curves/surfaces.\n4. Orthogonality: The gradient vector grad(f) is always perpendicular (normal) to the level surface f(x, y, z) = c.\n\nASCII SCHEMATIC OF GRADIENT & TANGENT PLANE:\n               Normal Line: r(t) = P0 + t*grad(F)\n                   ^\n                   |    /-------------------/\n                   |   /   Tangent Plane   /\n                   |  /   n = grad(F)     /\n                   | /-------------------/\n             ------+---------------------> Surface F(x,y,z) = c\n                  (x0,y0,z0)\n\n3. TANGENT PLANE AND NORMAL LINE TO F(x, y, z) = c:\n- Normal Vector: n = grad(F)(x0, y0, z0) = <F_x, F_y, F_z>\n- Tangent Plane Equation: F_x(x - x0) + F_y(y - y0) + F_z(z - z0) = 0\n- Normal Line Equations: (x - x0)/F_x = (y - y0)/F_y = (z - z0)/F_z\n\n4. SOLVED NUMERICAL EXAMPLE:\nProblem: Given temperature field T(x, y, z) = x^2 + 2 y^2 - 3 z^2 at point P(1, 2, 1).\n1) Find the gradient grad(T) at P.\n2) Find the directional derivative of T at P in the direction towards Q(3, 4, 3).\n3) Find the direction and magnitude of maximum temperature increase at P.\n\nSolution:\nStep 1: Compute grad(T) = <2x, 4y, -6z>.\n        At P(1, 2, 1): grad(T)(1,2,1) = <2(1), 4(2), -6(1)> = <2, 8, -6>.\nStep 2: Vector PQ = Q - P = <3-1, 4-2, 3-1> = <2, 2, 2>.\n        Unit vector u = PQ / ||PQ|| = <2, 2, 2> / sqrt(2^2 + 2^2 + 2^2) = <2, 2, 2> / sqrt(12) = <1/sqrt(3), 1/sqrt(3), 1/sqrt(3)>.\n        D_u T = grad(T) . u = <2, 8, -6> . <1/sqrt(3), 1/sqrt(3), 1/sqrt(3)> = (2 + 8 - 6) / sqrt(3) = 4 / sqrt(3).\nStep 3: Direction of maximum increase: Direction of grad(T) = <2, 8, -6>.\n        Magnitude of maximum increase: ||grad(T)|| = sqrt(2^2 + 8^2 + (-6)^2) = sqrt(4 + 64 + 36) = sqrt(104) = 2*sqrt(26).\n\n5. PYTHON CODE FOR GRADIENT COMPUTATION (SymPy):\nimport sympy as sp\nx, y, z = sp.symbols('x y z')\nT = x**2 + 2*y**2 - 3*z**2\ngrad_T = [sp.diff(T, var) for var in (x, y, z)]\nP = {x: 1, y: 2, z: 1}\ngrad_at_P = [g.subs(P) for g in grad_T]\nprint(\"Gradient vector at P:\", grad_at_P)"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Multivariable Calculus",
        "author": "James Stewart"
      },
      {
        "title": "Calculus: Early Transcendentals",
        "author": "Dennis G. Zill"
      }
    ],
    "practiceLinks": [
      {
        "title": "Paul's Online Math Notes - Directional Derivatives",
        "url": "https://tutorial.math.lamar.edu/Classes/CalcIII/DirectionalDerivatives.aspx"
      },
      {
        "title": "MIT OCW Gradient and Directional Derivatives",
        "url": "https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define the gradient vector nabla(f) of a scalar function f(x, y, z). (2 Marks)",
        "What is the physical meaning of the directional derivative D_u f? (2 Marks)",
        "In which direction does a scalar field f(x, y) increase most rapidly? What is the maximum rate? (2 Marks)",
        "Write the equation of the tangent plane to a surface F(x, y, z) = c at (x0, y0, z0). (2 Marks)"
      ],
      "sixMarks": [
        "Find the directional derivative of f(x, y, z) = x y^2 + y z^3 at point P(2, -1, 1) in the direction of vector v = i + 2j + 2k. (6 Marks)",
        "Find the equations of the tangent plane and normal line to the ellipsoid x^2 + 2y^2 + 3z^2 = 12 at the point P(1, 2, 1). (6 Marks)"
      ],
      "longAnswer": [
        "Derive the formula D_u f = grad(f) . u from first principles using partial derivatives and total differentials. Prove that the gradient vector grad(F) is perpendicular to the level surface F(x, y, z) = c at every point. Apply this theorem to find the angle of intersection between two surfaces x^2 + y^2 + z^2 = 9 and x^2 + y^2 - z = 3 at (2, -1, 2). (10 Marks)"
      ]
    }
  },
  {
    "title": "Optimization of Multivariable Functions",
    "slug": "multivariable-calculus-optimization-of-multivariable-functions",
    "order": 7,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Locate and classify unconstrained critical points using the Second Derivative Test and Hessian matrix, and solve constrained optimization problems using Lagrange Multipliers.",
    "subTopics": [
      "Critical Points",
      "Local Maximum and Minimum",
      "Saddle Points",
      "Second Derivative Test",
      "Hessian Matrix",
      "Constrained Optimization",
      "Lagrange Multipliers"
    ],
    "prerequisiteTitles": [
      "Directional Derivatives and Gradient"
    ],
    "learningObjectives": [
      "Locate critical points where grad(f) = 0 or undefined.",
      "Classify critical points as local minima, local maxima, or saddle points using the 2D Second Derivative Test (discriminant D = f_xx f_yy - f_xy^2) and multi-variable Hessian matrix eigenvalues.",
      "Solve constrained optimization problems subject to g(x,y,z) = c using the Lagrange Multipliers system grad(f) = lambda * grad(g)."
    ],
    "notes": [
      {
        "title": "Unconstrained Optimization, Second Derivative Test, Hessian Matrix, and Lagrange Multipliers",
        "content": "1. CRITICAL POINTS IN MULTIVARIABLE FUNCTIONS:\nA point (x0, y0) in the domain of f(x, y) is a CRITICAL POINT if:\n1. grad(f)(x0, y0) = <0, 0> (i.e., f_x = 0 AND f_y = 0), OR\n2. One or both partial derivatives f_x, f_y do not exist.\n\n2. SECOND DERIVATIVE TEST FOR TWO VARIABLES:\nLet (x0, y0) be a critical point where f_x = 0 and f_y = 0. Calculate the Discriminant (Hessian Determinant) D:\nD = f_xx(x0, y0) * f_yy(x0, y0) - [f_xy(x0, y0)]^2\n\nClassification Rules:\n1. If D > 0 and f_xx > 0: f(x0, y0) is a LOCAL MINIMUM.\n2. If D > 0 and f_xx < 0: f(x0, y0) is a LOCAL MAXIMUM.\n3. If D < 0: (x0, y0) is a SADDLE POINT (neither max nor min).\n4. If D = 0: The test is INCONCLUSIVE (must use higher-order analysis or definition).\n\n3. GENERAL HESSIAN MATRIX FOR N-VARIABLES:\nH = | f_xx  f_xy  f_xz |\n    | f_yx  f_yy  f_yz |\n    | f_zx  f_zy  f_zz |\n- Positive Definite (all eigenvalues > 0) => Local Minimum.\n- Negative Definite (all eigenvalues < 0) => Local Maximum.\n- Indefinite (mixed positive/negative eigenvalues) => Saddle Point.\n\nASCII SURFACE TOPOLOGY SKETCH:\n  Local Min (Bowl)         Local Max (Peak)        Saddle Point (Pass)\n       ___/                     /                       /\n                                /                       /\n\n4. CONSTRAINED OPTIMIZATION & LAGRANGE MULTIPLIERS:\nTo find local extrema of f(x, y, z) subject to constraint g(x, y, z) = k:\nSystem of Lagrange Equations:\n  grad(f) = lambda * grad(g)  =>  <f_x, f_y, f_z> = lambda * <g_x, g_y, g_z>\n  g(x, y, z) = k\n\n5. SOLVED LAGRANGE MULTIPLIER PROBLEM:\nProblem: Find the dimensions of a rectangular box of maximum volume V = x*y*z subject to surface area constraint 2xy + 2yz + 2xz = 108 cm^2.\n\nSolution:\nObjective: Maximize V(x, y, z) = x*y*z\nConstraint: g(x, y, z) = xy + yz + xz = 54\nLagrange Equations: grad(V) = lambda * grad(g)\n1) y*z = lambda * (y + z)\n2) x*z = lambda * (x + z)\n3) x*y = lambda * (x + y)\n\nMultiply (1) by x, (2) by y, (3) by z:\nx*y*z = lambda * x(y + z) = lambda * y(x + z) = lambda * z(x + y)\nSince x, y, z > 0: x(y + z) = y(x + z) => xy + xz = yx + yz => xz = yz => x = y.\nSimilarly, y(x + z) = z(x + y) => y = z.\nThus x = y = z (the optimal box is a cube!).\nSubstitute into constraint: x^2 + x^2 + x^2 = 54 => 3x^2 = 54 => x^2 = 18 => x = y = z = 3*sqrt(2) cm.\nMaximum Volume V = (3*sqrt(2))^3 = 54*sqrt(2) cm^3.\n\n6. PYTHON OPTIMIZATION CODE (SciPy & SymPy):\nimport sympy as sp\nx, y = sp.symbols('x y')\nf = x**3 + y**3 - 3*x*y\nfx, fy = sp.diff(f, x), sp.diff(f, y)\ncritical_pts = sp.solve([fx, fy], (x, y))\nprint(\"Critical points:\", critical_pts)"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Multivariable Calculus",
        "author": "James Stewart"
      },
      {
        "title": "Numerical Optimization",
        "author": "Jorge Nocedal & Stephen J. Wright"
      }
    ],
    "practiceLinks": [
      {
        "title": "Paul's Online Math Notes - Optimization",
        "url": "https://tutorial.math.lamar.edu/Classes/CalcIII/Optimization.aspx"
      },
      {
        "title": "Paul's Online Math Notes - Lagrange Multipliers",
        "url": "https://tutorial.math.lamar.edu/Classes/CalcIII/LagrangeMultipliers.aspx"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is a saddle point of a multivariable surface z = f(x, y)? (2 Marks)",
        "State the Second Derivative Test discriminant formula D for f(x, y). (2 Marks)",
        "Explain the geometric intuition behind Lagrange Multipliers grad(f) = lambda * grad(g). (2 Marks)",
        "How do eigenvalues of the Hessian matrix determine critical point stability? (2 Marks)"
      ],
      "sixMarks": [
        "Find and classify all critical points of f(x, y) = x^3 + y^3 - 3 x y using the Second Derivative Test. (6 Marks)",
        "Use Lagrange Multipliers to find the maximum and minimum values of f(x, y) = x^2 + 2 y^2 on the ellipse x^2 + y^2 = 1. (6 Marks)"
      ],
      "longAnswer": [
        "Formulate both unconstrained and constrained optimization frameworks. Provide a rigorous step-by-step proof of the Second Derivative Test using Taylor series expansion in two variables. Apply Lagrange Multipliers to find the minimum distance from origin (0,0,0) to the plane 2x + 3y - z = 14. (10 Marks)"
      ]
    }
  },
  {
    "title": "Multiple Integrals",
    "slug": "multivariable-calculus-multiple-integrals",
    "order": 8,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master double and triple integrals over general regions, Fubini's Theorem, changing order of integration, and integration in polar, cylindrical, and spherical coordinates.",
    "subTopics": [
      "Introduction to Multiple Integrals",
      "Double Integrals",
      "Evaluation of Double Integrals",
      "Iterated Integrals",
      "Changing Order of Integration",
      "Triple Integrals",
      "Applications of Multiple Integrals"
    ],
    "prerequisiteTitles": [
      "Optimization of Multivariable Functions"
    ],
    "learningObjectives": [
      "Formulate and evaluate iterated double integrals over Type I (y-simple) and Type II (x-simple) planar regions.",
      "Reverse the order of integration for iterated integrals to simplify non-elementary integrand evaluations.",
      "Evaluate triple integrals over 3D volumes in Cartesian, Cylindrical (dx dy dz -> r dr dtheta dz), and Spherical coordinates (dx dy dz -> rho^2 sin(phi) drho dtheta dphi)."
    ],
    "notes": [
      {
        "title": "Double Integrals, Fubini's Theorem, Order Reversal, and Triple Integrals",
        "content": "1. DOUBLE INTEGRAL DEFINITION & FUBINI'S THEOREM:\nThe double integral of f(x, y) over a closed bounded region R is defined as the limit of Riemann sums:\niint_R f(x, y) dA = lim_{||P||->0} sum_{i=1}^n f(x_i*, y_i*) Delta A_i\n\nFUBINI'S THEOREM (EQUAL ITERATED INTEGRALS):\nIf f(x, y) is continuous on rectangular region R = [a, b] x [c, d]:\niint_R f(x, y) dA = int_a^b int_c^d f(x, y) dy dx = int_c^d int_a^b f(x, y) dx dy\n\n2. GENERAL PLANAR REGIONS (TYPE I AND TYPE II):\n- Type I (Vertically Simple): R = {(x,y) | a <= x <= b, g1(x) <= y <= g2(x)}\n  iint_R f(x,y) dA = int_a^b [ int_{g1(x)}^{g2(x)} f(x,y) dy ] dx\n\n- Type II (Horizontally Simple): R = {(x,y) | c <= y <= d, h1(y) <= x <= h2(y)}\n  iint_R f(x,y) dA = int_c^d [ int_{h1(y)}^{h2(y)} f(x,y) dx ] dy\n\nASCII DIAGRAM OF REGION TYPE I VS TYPE II:\n        Type I Region                       Type II Region\n        y ^   g2(x)                         y ^ d +-------+ h2(y)\n          |  /----                           |   |      /\n          | /                                |   |     /\n          | +------+ g1(x)                    | c +----+ h1(y)\n          +-------------> x                   +-------------> x\n            a      b\n\n3. REVERSING ORDER OF INTEGRATION SOLVED EXAMPLE:\nProblem: Evaluate I = int_0^1 int_y^1 exp(x^2) dx dy.\nSolution:\nInner integral int exp(x^2) dx has no elementary antiderivative. We MUST change order of integration.\nStep 1: Identify region bounds: 0 <= y <= 1 and y <= x <= 1.\n        This region is a triangle bounded by y = 0, x = 1, and line y = x.\nStep 2: Describe region as Type I: 0 <= x <= 1 and 0 <= y <= x.\nStep 3: Set up reversed iterated integral:\n        I = int_0^1 int_0^x exp(x^2) dy dx\n          = int_0^1 [ y * exp(x^2) ]_{y=0}^{y=x} dx\n          = int_0^1 x * exp(x^2) dx\nStep 4: Substitute u = x^2 => du = 2x dx => x dx = du/2:\n        I = (1/2) * int_0^1 exp(u) du = (1/2) * [exp(1) - exp(0)] = (e - 1) / 2.\n\n4. TRIPLE INTEGRALS IN SPHERICAL COORDINATES:\niiint_E f(x,y,z) dV = int_a^b int_c^d int_r^s f(rho sin phi cos theta, rho sin phi sin theta, rho cos phi) * rho^2 sin(phi) drho dphi dtheta\n\n5. PYTHON NUMERICAL INTEGRATION CODE (SciPy):\nimport scipy.integrate as integrate\nimport numpy as np\nresult, error = integrate.dblquad(lambda y, x: np.exp(x**2), 0, 1, lambda x: 0, lambda x: x)\nprint(\"Reversed Integral Result:\", result)"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Multivariable Calculus",
        "author": "James Stewart"
      },
      {
        "title": "Thomas' Calculus",
        "author": "George B. Thomas"
      }
    ],
    "practiceLinks": [
      {
        "title": "Paul's Online Math Notes - Double Integrals",
        "url": "https://tutorial.math.lamar.edu/Classes/CalcIII/DoubleIntegrals.aspx"
      },
      {
        "title": "Paul's Online Math Notes - Triple Integrals",
        "url": "https://tutorial.math.lamar.edu/Classes/CalcIII/TripleIntegrals.aspx"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State Fubini's Theorem for continuous functions over rectangular regions. (2 Marks)",
        "Write the conversion differential dV for cylindrical and spherical coordinates. (2 Marks)",
        "Differentiate between Type I and Type II planar regions of integration. (2 Marks)",
        "Why is changing order of integration necessary for int_0^1 int_y^1 sin(x^2) dx dy? (2 Marks)"
      ],
      "sixMarks": [
        "Evaluate the double integral iint_R (x + 2y) dA over the region R bounded by y = 2x^2 and y = 1 + x^2. (6 Marks)",
        "Evaluate the triple integral iiint_E sqrt(x^2 + y^2 + z^2) dV where E is the solid sphere x^2 + y^2 + z^2 <= 9 using spherical coordinates. (6 Marks)"
      ],
      "longAnswer": [
        "Explain the theoretical foundation of multiple integration Riemann sums. Prove Fubini's Theorem for smooth functions and evaluate int_0^4 int_{sqrt(x)}^2 1/(y^3 + 1) dy dx by sketching the region of integration and changing the order of integration. (10 Marks)"
      ]
    }
  },
  {
    "title": "Applications of Double and Triple Integrals",
    "slug": "multivariable-calculus-applications-of-double-and-triple-integrals",
    "order": 9,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Apply multiple integrals to compute 2D areas, 3D volumes, total mass under variable density functions, centers of mass (x_bar, y_bar, z_bar), and moments of inertia.",
    "subTopics": [
      "Area Calculation",
      "Volume Calculation",
      "Mass and Density Problems",
      "Center of Mass",
      "Moments of Inertia",
      "Engineering Applications"
    ],
    "prerequisiteTitles": [
      "Multiple Integrals"
    ],
    "learningObjectives": [
      "Compute 2D region areas and 3D solid volumes using double and triple integration.",
      "Determine total mass M, first moments, and center of mass coordinates (x_bar, y_bar, z_bar) for non-homogeneous lamina and solids with variable density rho(x,y,z).",
      "Calculate moments of inertia (I_x, I_y, I_z, I_0) and radii of gyration for mechanical components."
    ],
    "notes": [
      {
        "title": "Mass, Centroids, Centers of Mass, and Moments of Inertia",
        "content": "1. FORMULAS FOR PLANAR LAMINA (2D):\nLet a lamina occupy a region D in the xy-plane with continuous mass density function rho(x, y) (kg/m^2).\n- Total Mass M: M = iint_D rho(x, y) dA\n- First Moment w.r.t y-axis: M_y = iint_D x * rho(x, y) dA\n- First Moment w.r.t x-axis: M_x = iint_D y * rho(x, y) dA\n- Center of Mass (x_bar, y_bar):\n  x_bar = M_y / M = (1/M) * iint_D x * rho(x, y) dA\n  y_bar = M_x / M = (1/M) * iint_D y * rho(x, y) dA\n\n2. MOMENTS OF INERTIA (2D LAMINA):\n- Moment of Inertia w.r.t x-axis: I_x = iint_D y^2 * rho(x, y) dA\n- Moment of Inertia w.r.t y-axis: I_y = iint_D x^2 * rho(x, y) dA\n- Polar Moment of Inertia (w.r.t origin): I_0 = I_x + I_y = iint_D (x^2 + y^2) * rho(x, y) dA\n- Radius of Gyration: r_x = sqrt(I_x / M), r_y = sqrt(I_y / M)\n\n3. FORMULAS FOR 3D SOLID (VOLUME E):\n- Mass M: M = iiint_E rho(x, y, z) dV\n- Center of Mass (x_bar, y_bar, z_bar):\n  x_bar = (1/M) * iiint_E x * rho dV\n  y_bar = (1/M) * iiint_E y * rho dV\n  z_bar = (1/M) * iiint_E z * rho dV\n- Moment of Inertia w.r.t z-axis: I_z = iiint_E (x^2 + y^2) * rho(x, y, z) dV\n\nASCII MECHANICAL SCHEMATIC (LAMINA MASS CENTROID):\n         y-axis\n           ^\n           |   /---------------           |  /   * (x_bar, y_bar)\n           | /   Center of Mass            +------------------------> x-axis\n             Density rho(x,y)\n\n4. SOLVED NUMERICAL EXAMPLE:\nProblem: Find the center of mass of a triangular lamina with vertices (0,0), (1,0), and (0,2) if the density function is uniform rho(x, y) = c (constant).\n\nSolution:\nStep 1: Region D is bounded by x = 0, y = 0, and line joining (1,0) and (0,2): y = 2 - 2x.\nStep 2: Total Mass M:\n  M = int_0^1 int_0^{2-2x} c dy dx = c * int_0^1 (2 - 2x) dx = c * [2x - x^2]_0^1 = c * (2 - 1) = c.\nStep 3: Moment M_y:\n  M_y = c * int_0^1 int_0^{2-2x} x dy dx = c * int_0^1 x(2 - 2x) dx = c * int_0^1 (2x - 2x^2) dx\n      = c * [x^2 - (2/3)x^3]_0^1 = c * (1 - 2/3) = c / 3.\n  x_bar = M_y / M = (c/3) / c = 1/3.\nStep 4: Moment M_x:\n  M_x = c * int_0^1 int_0^{2-2x} y dy dx = c * int_0^1 [(1/2)(2-2x)^2] dx = (c/2) * int_0^1 (4 - 8x + 4x^2) dx\n      = 2c * [x - x^2 + (1/3)x^3]_0^1 = 2c * (1/3) = 2c / 3.\n  y_bar = M_x / M = (2c/3) / c = 2/3.\nCenter of Mass (x_bar, y_bar) = (1/3, 2/3).\n\n5. PYTHON NUMERICAL CODE (SciPy Integration):\nimport scipy.integrate as spi\nM, _ = spi.dblquad(lambda y, x: 1, 0, 1, lambda x: 0, lambda x: 2 - 2*x)\nMy, _ = spi.dblquad(lambda y, x: x, 0, 1, lambda x: 0, lambda x: 2 - 2*x)\nMx, _ = spi.dblquad(lambda y, x: y, 0, 1, lambda x: 0, lambda x: 2 - 2*x)\nprint(\"Center of Mass:\", (My/M, Mx/M))"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Engineering Mechanics: Statics and Dynamics",
        "author": "R.C. Hibbeler"
      },
      {
        "title": "Multivariable Calculus",
        "author": "James Stewart"
      }
    ],
    "practiceLinks": [
      {
        "title": "Paul's Online Math Notes - Center of Mass",
        "url": "https://tutorial.math.lamar.edu/Classes/CalcIII/CenterOfMass.aspx"
      },
      {
        "title": "GeeksforGeeks Center of Mass Using Double Integrals",
        "url": "https://www.geeksforgeeks.org/center-of-mass-using-double-integrals/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State the integral formula for the total mass of a 3D solid with variable density rho(x, y, z). (2 Marks)",
        "Define radius of gyration r_z of a rigid body rotating about the z-axis. (2 Marks)",
        "What is the difference between a centroid and a center of mass? (2 Marks)",
        "Write the polar moment of inertia formula I_0 for a planar lamina. (2 Marks)"
      ],
      "sixMarks": [
        "Find the mass and center of mass of a circular lamina D = {(x,y) | x^2 + y^2 <= 4} with density proportional to distance from origin rho(x, y) = k * sqrt(x^2 + y^2). (6 Marks)",
        "Calculate the moment of inertia I_z of a uniform solid cylinder of radius R, height H, and mass M about its longitudinal axis. (6 Marks)"
      ],
      "longAnswer": [
        "Derive the general mathematical formulas for moments of inertia I_x, I_y, I_z and polar moment I_0. Compute the center of mass and moment of inertia about the z-axis for the upper hemisphere solid x^2 + y^2 + z^2 <= a^2 (z >= 0) with uniform density rho_0. (10 Marks)"
      ]
    }
  },
  {
    "title": "Vector Calculus",
    "slug": "multivariable-calculus-vector-calculus",
    "order": 10,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Study scalar fields and 2D/3D vector fields, field visualization, gradient, divergence div(F) = nabla . F, curl curl(F) = nabla x F, and conservative field properties.",
    "subTopics": [
      "Introduction to Vector Fields",
      "Scalar Fields",
      "Vector Fields",
      "Gradient of Scalar Fields",
      "Divergence",
      "Curl",
      "Conservative Vector Fields"
    ],
    "prerequisiteTitles": [
      "Applications of Double and Triple Integrals"
    ],
    "learningObjectives": [
      "Distinguish scalar fields from vector fields and visualize 2D/3D vector fields (velocity fields, force fields).",
      "Compute divergence div(F) = nabla . F (representing expansion/compressibility) and curl curl(F) = nabla x F (representing rotation/vorticity).",
      "Test vector fields for conservatism (curl(F) = 0) and reconstruct potential functions f such that F = grad(f)."
    ],
    "notes": [
      {
        "title": "Vector Fields, Divergence, Curl, and Potential Functions",
        "content": "1. SCALAR FIELDS VS VECTOR FIELDS:\n- Scalar Field: Function assigning a scalar to each point P: f(x, y, z) in R (e.g. Temperature T, Pressure P, Potential V).\n- Vector Field: Function assigning a vector to each point P: F(x, y, z) = P(x, y, z)i + Q(x, y, z)j + R(x, y, z)k (e.g. Gravitational field, Fluid velocity V, Electric field E).\n\n2. DIVERGENCE OF A VECTOR FIELD (DEL DOT F):\nFor F = <P, Q, R>:\ndiv(F) = nabla . F = dP/dx + dQ/dy + dR/dz\n- Physical Meaning: Local expansion rate per unit volume of fluid.\n  - div(F) > 0: Source (fluid expanding/emitting).\n  - div(F) < 0: Sink (fluid compressing/absorbing).\n  - div(F) = 0: Solenoidal / Incompressible field.\n\n3. CURL OF A VECTOR FIELD (DEL CROSS F):\ncurl(F) = nabla x F = |  i     j     k   |\n                     | d/dx  d/dy  d/dz  |\n                     |  P     Q     R    |\n        = <dR/dy - dQ/dz, dP/dz - dR/dx, dQ/dx - dP/dy>\n- Physical Meaning: Rotational tendency / vorticity of fluid flow around a point.\n  - curl(F) = 0: Irrotational field.\n\nASCII FLUID VECTOR FIELDS (SOURCE VS ROTATION):\n        Source (div > 0)                  Vorticity (curl != 0)\n              |  /                             ^ --->\n          ---  *  ---                         /  |              /  |                            <--- v\n\n4. CONSERVATIVE VECTOR FIELDS:\nA vector field F is CONSERVATIVE if there exists a smooth scalar potential function f such that F = grad(f).\nFundamental Test for Conservatism in 3D:\nF = <P, Q, R> is conservative on a simply connected region if and only if curl(F) = 0 (i.e. dP/dy = dQ/dx, dQ/dz = dR/dy, dR/dx = dP/dz).\n\n5. SOLVED RECONSTRUCTION OF POTENTIAL FUNCTION:\nProblem: Show that F(x, y, z) = <2x y + z^3, x^2, 3x z^2> is conservative and find potential f(x, y, z).\n\nSolution:\nStep 1: Test curl(F):\n  curl(F) = <d/dy(3x z^2) - d/dz(x^2), d/dz(2x y + z^3) - d/dx(3x z^2), d/dx(x^2) - d/dy(2x y + z^3)>\n          = <0 - 0, 3z^2 - 3z^2, 2x - 2x> = <0, 0, 0>.\n  Since curl(F) = 0, F is conservative!\n\nStep 2: Reconstruct f such that grad(f) = F:\n  1) df/dx = 2x y + z^3  =>  f(x, y, z) = x^2 y + x z^3 + g(y, z)\n  2) Differentiate w.r.t y: df/dy = x^2 + dg/dy = x^2  =>  dg/dy = 0  =>  g(y, z) = h(z)\n     So f(x, y, z) = x^2 y + x z^3 + h(z).\n  3) Differentiate w.r.t z: df/dz = 3x z^2 + dh/dz = 3x z^2  =>  dh/dz = 0  =>  h(z) = C.\nFinal Potential Function: f(x, y, z) = x^2 y + x z^3 + C.\n\n6. PYTHON VECTOR COMPUTATION (SymPy):\nimport sympy as sp\nfrom sympy.vector import CoordSys3D, Del\nN = CoordSys3D('N')\ndel_op = Del()\nF = 2*N.x*N.y*N.i + N.x**2*N.j + 3*N.x*N.z**2*N.k\nprint(\"Divergence:\", del_op.dot(F).doit())\nprint(\"Curl:\", del_op.cross(F).doit())"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Div, Grad, Curl, and All That: An Informal Text on Vector Calculus",
        "author": "H.M. Schey"
      },
      {
        "title": "Multivariable Calculus",
        "author": "James Stewart"
      }
    ],
    "practiceLinks": [
      {
        "title": "Paul's Online Math Notes - Vector Fields",
        "url": "https://tutorial.math.lamar.edu/Classes/CalcIII/VectorFields.aspx"
      },
      {
        "title": "Paul's Online Math Notes - Curl and Divergence",
        "url": "https://tutorial.math.lamar.edu/Classes/CalcIII/CurlDivergence.aspx"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define divergence div(F) and curl curl(F) of a 3D vector field F. (2 Marks)",
        "What is the physical interpretation of a solenoidal (incompressible) vector field? (2 Marks)",
        "State the necessary and sufficient condition for a vector field F to be conservative in R^3. (2 Marks)",
        "Prove that curl(grad(f)) = 0 for any twice continuously differentiable scalar function f. (2 Marks)"
      ],
      "sixMarks": [
        "Compute div(F) and curl(F) for vector field F(x, y, z) = (x^2 y)i + (y z^2)j + (z x^2)k at point P(1, 2, -1). (6 Marks)",
        "Determine whether F = <e^y, x e^y + z, y> is conservative. If conservative, find its potential function f. (6 Marks)"
      ],
      "longAnswer": [
        "State and prove vector identities: 1) div(curl(F)) = 0, 2) curl(grad(f)) = 0. Provide physical fluid mechanics interpretations of solenoidal and irrotational fields and reconstruct the potential function for gravitational vector field F = -G M m r / ||r||^3. (10 Marks)"
      ]
    }
  },
  {
    "title": "Line Integrals",
    "slug": "multivariable-calculus-line-integrals",
    "order": 11,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Evaluate line integrals of scalar functions and vector fields along smooth space curves, calculate work done by force fields, and apply the Fundamental Theorem for Line Integrals.",
    "subTopics": [
      "Introduction to Line Integrals",
      "Scalar Line Integrals",
      "Vector Line Integrals",
      "Work Done by a Force Field",
      "Path Independence",
      "Conservative Fields"
    ],
    "prerequisiteTitles": [
      "Vector Calculus"
    ],
    "learningObjectives": [
      "Parametrize 2D and 3D smooth paths C by r(t) and compute scalar line integrals integral_C f(x,y,z) ds.",
      "Evaluate vector line integrals integral_C F . dr = integral_C (P dx + Q dy + R dz) to compute work done along a path.",
      "Apply the Fundamental Theorem of Line Integrals integral_C grad(f) . dr = f(B) - f(A) for conservative vector fields."
    ],
    "notes": [
      {
        "title": "Scalar Line Integrals, Vector Line Integrals, Work, and Fundamental Theorem",
        "content": "1. SCALAR LINE INTEGRALS ALONG A CURVE C:\nLet C be a smooth space curve parametrized by r(t) = <x(t), y(t), z(t)> for a <= t <= b.\nThe line integral of scalar function f(x, y, z) along C is:\nint_C f(x, y, z) ds = int_a^b f(x(t), y(t), z(t)) * ||r'(t)|| dt\nwhere arc length differential ds = sqrt([x'(t)]^2 + [y'(t)]^2 + [z'(t)]^2) dt.\n\n2. VECTOR LINE INTEGRALS (WORK DONE BY FORCE FIELD F):\nThe line integral of vector field F = <P, Q, R> along C is:\nW = int_C F . dr = int_C P dx + Q dy + R dz\n  = int_a^b F(r(t)) . r'(t) dt\n  = int_a^b [ P(x(t),y(t),z(t))*x'(t) + Q(x(t),y(t),z(t))*y'(t) + R(x(t),y(t),z(t))*z'(t) ] dt\n\nASCII PATH PARAMETRIZATION SCHEMATIC:\n             z-axis\n               ^     B = r(b) (Terminal)\n               |    /\n               |   C (Curve parametrized by r(t))\n               |  /\n               | A = r(a) (Initial)\n               +------------------------> y-axis\n              /\n             v\n           x-axis\n\n3. THE FUNDAMENTAL THEOREM FOR LINE INTEGRALS:\nLet C be a smooth curve parametrized by r(t) for a <= t <= b. If F = grad(f) is a conservative vector field, then:\nint_C F . dr = int_C grad(f) . dr = f(r(b)) - f(r(a)) = f(B) - f(A)\n\nCOROLLARY (PATH INDEPENDENCE & CLOSED LOOPS):\n1. The line integral of a conservative vector field depends ONLY on endpoints A and B, independent of path C.\n2. For any closed curve C (where A = B), loop integral oint_C grad(f) . dr = 0.\n\n4. SOLVED NUMERICAL WORK CALCULATION:\nProblem: Compute work done W = int_C F . dr by force field F = <y, -x, z^2> along the helical path C parametrized by r(t) = <cos(t), sin(t), t> for 0 <= t <= 2*pi.\n\nSolution:\nStep 1: Compute r'(t) = <-sin(t), cos(t), 1>.\nStep 2: Evaluate F on curve:\n  F(r(t)) = <sin(t), -cos(t), t^2>.\nStep 3: Compute dot product F(r(t)) . r'(t):\n  F . r' = (sin(t))(-sin(t)) + (-cos(t))(cos(t)) + (t^2)(1)\n         = -sin^2(t) - cos^2(t) + t^2 = -1 + t^2.\nStep 4: Integrate from t = 0 to t = 2*pi:\n  W = int_0^{2*pi} (-1 + t^2) dt = [ -t + (t^3 / 3) ]_0^{2*pi}\n    = -2*pi + (8*pi^3 / 3) Joules.\n\n5. PYTHON CODE FOR LINE INTEGRAL (SymPy):\nimport sympy as sp\nt = sp.symbols('t', real=True)\nx = sp.cos(t); y = sp.sin(t); z = t\ndx = sp.diff(x, t); dy = sp.diff(y, t); dz = sp.diff(z, t)\nP = y; Q = -x; R = z**2\nintegrand = P*dx + Q*dy + R*dz\nwork = sp.integrate(integrand, (t, 0, 2*sp.pi))\nprint(\"Work done:\", work)"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Multivariable Calculus",
        "author": "James Stewart"
      },
      {
        "title": "Vector Calculus",
        "author": "Jerrold E. Marsden & Anthony Tromba"
      }
    ],
    "practiceLinks": [
      {
        "title": "Paul's Online Math Notes - Line Integrals",
        "url": "https://tutorial.math.lamar.edu/Classes/CalcIII/LineIntegralsPtI.aspx"
      },
      {
        "title": "MIT OCW Line Integrals and Work",
        "url": "https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State the arc length differential ds formula for a space curve r(t). (2 Marks)",
        "Write the vector line integral formula for work done by a force field F along path C. (2 Marks)",
        "State the Fundamental Theorem of Line Integrals. (2 Marks)",
        "Why is oint_C F . dr = 0 for any closed path C in a conservative field? (2 Marks)"
      ],
      "sixMarks": [
        "Evaluate line integral int_C (x^2 y dx + (x - z) dy + xyz dz) along line segment C from (0,0,0) to (1,2,3). (6 Marks)",
        "Show that F = <2x y z, x^2 z + 1, x^2 y> is conservative. Use the Fundamental Theorem of Line Integrals to evaluate int_C F . dr from A(1, 0, 1) to B(2, 3, 2). (6 Marks)"
      ],
      "longAnswer": [
        "Rigorously prove the Fundamental Theorem of Line Integrals int_C grad(f) . dr = f(B) - f(A). Analyze path independence conditions and calculate work done by non-conservative magnetic field F = <-y/(x^2+y^2), x/(x^2+y^2), 0> along unit circle C. (10 Marks)"
      ]
    }
  },
  {
    "title": "Surface Integrals",
    "slug": "multivariable-calculus-surface-integrals",
    "order": 12,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Parametrize 3D smooth surfaces, compute surface area, evaluate scalar surface integrals, and calculate vector flux integrals across oriented surfaces.",
    "subTopics": [
      "Introduction to Surface Integrals",
      "Parametric Surfaces",
      "Surface Area Calculation",
      "Flux Integrals",
      "Applications of Surface Integrals"
    ],
    "prerequisiteTitles": [
      "Line Integrals"
    ],
    "learningObjectives": [
      "Parametrize surfaces r(u,v) and compute normal vectors r_u x r_v and differential area elements dS = ||r_u x r_v|| du dv.",
      "Evaluate scalar surface integrals double_integral_S f(x,y,z) dS for mass and surface area of curved shells.",
      "Compute vector flux integrals double_integral_S F . n dS across oriented surfaces in fluid dynamics and electromagnetics."
    ],
    "notes": [
      {
        "title": "Parametric Surfaces, Surface Area, Scalar Surface Integrals, and Vector Flux Integrals",
        "content": "1. PARAMETRIC SURFACES & AREA ELEMENT:\nA 3D surface S can be parametrized by vector function r(u, v) = <x(u,v), y(u,v), z(u,v)> over domain D in uv-plane.\n- Tangent Vectors: r_u = <dx/du, dy/du, dz/du> and r_v = <dx/dv, dy/dv, dz/dv>\n- Normal Vector: N = r_u x r_v\n- Surface Area Element dS: dS = ||r_u x r_v|| du dv\n\nSpecial Case z = g(x, y):\ndS = sqrt(1 + (dg/dx)^2 + (dg/dy)^2) dA\n\n2. SCALAR SURFACE INTEGRALS:\niint_S f(x, y, z) dS = iint_D f(r(u, v)) * ||r_u x r_v|| du dv\nTotal Surface Area of S = iint_S 1 dS.\n\n3. VECTOR FLUX INTEGRALS ACROSS ORIENTED SURFACES:\nLet F be a continuous vector field on an oriented surface S with unit normal n:\nFlux = iint_S F . n dS = iint_D F(r(u, v)) . (r_u x r_v) du dv\n\nASCII ORIENTED SURFACE FLUX SCHEMATIC:\n               Vector Field F vectors\n                     |   /\n                   v  v  v\n            /--------------------  Oriented Surface S\n           /   Unit Normal n     /\n          /         ^           /\n         /----------|----------/\n                    |\n\n4. SOLVED FLUX NUMERICAL EXAMPLE:\nProblem: Compute the outward flux of F = <0, 0, z> across the parabolic surface z = 4 - x^2 - y^2 for z >= 0.\n\nSolution:\nStep 1: Surface S is z = g(x, y) = 4 - x^2 - y^2 over region D = {(x,y) | x^2 + y^2 <= 4}.\nStep 2: Upward normal vector n dS = <-g_x, -g_y, 1> dA = <2x, 2y, 1> dA.\nStep 3: Compute F . n dS:\n  F . n dS = <0, 0, z> . <2x, 2y, 1> dA = z dA = (4 - x^2 - y^2) dA.\nStep 4: Switch region D to Polar Coordinates (r, theta) where 0 <= r <= 2, 0 <= theta <= 2*pi:\n  Flux = int_0^{2*pi} int_0^2 (4 - r^2) * r dr dtheta\n       = (2*pi) * int_0^2 (4r - r^3) dr\n       = (2*pi) * [ 2 r^2 - r^4 / 4 ]_0^2\n       = (2*pi) * (8 - 16 / 4) = (2*pi) * (8 - 4) = 8*pi.\n\n5. PYTHON SURFACE INTEGRAL CODE (SymPy):\nimport sympy as sp\nr, theta = sp.symbols('r theta', real=True)\nz = 4 - r**2\nintegrand = (4 - r**2) * r\nflux = sp.integrate(sp.integrate(integrand, (r, 0, 2)), (theta, 0, 2*sp.pi))\nprint(\"Computed Surface Flux:\", flux)"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Multivariable Calculus",
        "author": "James Stewart"
      },
      {
        "title": "Thomas' Calculus",
        "author": "George B. Thomas"
      }
    ],
    "practiceLinks": [
      {
        "title": "Paul's Online Math Notes - Surface Integrals",
        "url": "https://tutorial.math.lamar.edu/Classes/CalcIII/SurfaceIntegrals.aspx"
      },
      {
        "title": "Paul's Online Math Notes - Surface Integrals of Vector Fields",
        "url": "https://tutorial.math.lamar.edu/Classes/CalcIII/SurfaceIntegralsVectorFields.aspx"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define a parametric surface r(u, v) and write its fundamental area differential dS. (2 Marks)",
        "What is the physical meaning of vector flux iint_S F . n dS in fluid mechanics? (2 Marks)",
        "Write the formula for surface area when a surface is given explicitly by z = g(x, y). (2 Marks)",
        "What distinguishes an orientable surface from a non-orientable surface (e.g. Mobius strip)? (2 Marks)"
      ],
      "sixMarks": [
        "Find the surface area of the paraboloid z = x^2 + y^2 beneath the plane z = 4. (6 Marks)",
        "Evaluate the surface flux integral iint_S F . n dS for F = <z, y, x> across the hemisphere z = sqrt(9 - x^2 - y^2) with upward normal. (6 Marks)"
      ],
      "longAnswer": [
        "Derive the general parametric surface area differential dS = ||r_u x r_v|| du dv. Compute the mass of a thin spherical shell x^2 + y^2 + z^2 = a^2 (z >= 0) if area density is rho(x, y, z) = c * z. (10 Marks)"
      ]
    }
  },
  {
    "title": "Integral Theorems",
    "slug": "multivariable-calculus-integral-theorems",
    "order": 13,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Master the fundamental boundary-integral relationships of vector calculus: Green's Theorem in the plane, Stokes' Theorem in 3D space, and Gauss's Divergence Theorem.",
    "subTopics": [
      "Green's Theorem",
      "Stokes' Theorem",
      "Divergence Theorem",
      "Applications of Integral Theorems",
      "Relationship Between Vector Operations"
    ],
    "prerequisiteTitles": [
      "Surface Integrals"
    ],
    "learningObjectives": [
      "Apply Green's Theorem in 2D to convert line integrals around closed curves into double integrals over enclosed regions.",
      "Apply Stokes' Theorem to relate line integrals of vector fields along 3D boundaries to surface integrals of curl(F).",
      "Apply Gauss's Divergence Theorem to convert flux integrals through closed surfaces into volume integrals of div(F)."
    ],
    "notes": [
      {
        "title": "Green's Theorem, Stokes' Theorem, and Gauss's Divergence Theorem",
        "content": "1. GREEN'S THEOREM IN THE PLANE (2D):\nLet C be a positively oriented (counterclockwise), piecewise-smooth, simple closed curve enclosing a planar region D. If P(x, y) and Q(x, y) have continuous partial derivatives on D:\noint_C (P dx + Q dy) = iint_D (dQ/dx - dP/dy) dA\n\nArea Formula via Green's Theorem:\nArea(D) = (1/2) * oint_C (x dy - y dx)\n\n2. STOKES' THEOREM (3D VECTOR CURL THEOREM):\nLet S be an oriented piecewise-smooth surface bounded by a simple closed curve C with positive orientation. If F is a continuous vector field:\noint_C F . dr = iint_S (nabla x F) . n dS\n\n3. GAUSS'S DIVERGENCE THEOREM (3D FLUX THEOREM):\nLet E be a simple solid region bounded by a closed surface S with outward normal n. If F is a vector field with continuous partial derivatives:\niint_S F . n dS = iiint_E (nabla . F) dV\n\nSUMMARY COMPARISON OF INTEGRAL THEOREMS:\n+-----------------------+--------------------+---------------------+-------------------------------+\n| Theorem               | Domain Dimension   | Boundary Integral   | Region Integral               |\n+-----------------------+--------------------+---------------------+-------------------------------+\n| Fundamental Calculus  | 1D Interval [a, b] | f(b) - f(a)         | int_a^b f'(x) dx              |\n| Green's Theorem       | 2D Region D        | oint_C (P dx + Q dy)| iint_D (dQ/dx - dP/dy) dA     |\n| Stokes' Theorem       | 3D Surface S       | oint_C F . dr       | iint_S (curl F) . n dS        |\n| Divergence Theorem    | 3D Solid Volume E  | iint_S F . n dS     | iiint_E (div F) dV            |\n+-----------------------+--------------------+---------------------+-------------------------------+\n\nASCII GEOMETRIC BOUNDARY MAPPINGS:\n  Green/Stokes: Curve C = dS (Boundary)     Divergence: Surface S = dE (Boundary)\n           /---------                                  /-------------          /   C=dS                                    /   Closed S             |  Encloses   |                              |   Encloses E    |\n            Surface  /                                   Volume E    /\n           ---------/                                  -------------/\n\n4. SOLVED DIVERGENCE THEOREM EXAMPLE:\nProblem: Compute outward flux iint_S F . n dS for F = <x^3, y^3, z^3> across the unit sphere S: x^2 + y^2 + z^2 = 1.\n\nSolution:\nStep 1: Apply Divergence Theorem: iint_S F . n dS = iiint_E (div F) dV.\nStep 2: Calculate div F:\n  div F = d/dx(x^3) + d/dy(y^3) + d/dz(z^3) = 3x^2 + 3y^2 + 3z^2 = 3(x^2 + y^2 + z^2).\nStep 3: Convert triple integral to Spherical Coordinates (rho, theta, phi) where 0 <= rho <= 1, 0 <= theta <= 2*pi, 0 <= phi <= pi:\n  Flux = iiint_E 3 rho^2 * (rho^2 sin phi drho dtheta dphi)\n       = 3 * [ int_0^1 rho^4 drho ] * [ int_0^{2*pi} dtheta ] * [ int_0^pi sin phi dphi ]\n       = 3 * [ 1/5 ] * [ 2*pi ] * [ 2 ]\n       = 3 * (1/5) * (4*pi) = 12*pi / 5.\n\n5. PYTHON CODE VERIFYING DIVERGENCE THEOREM (SymPy):\nimport sympy as sp\nrho, theta, phi = sp.symbols('rho theta phi', real=True)\ndiv_F = 3 * rho**2\ndV = rho**2 * sp.sin(phi)\nflux = sp.integrate(sp.integrate(sp.integrate(div_F * dV, (rho, 0, 1)), (phi, 0, sp.pi)), (theta, 0, 2*sp.pi))\nprint(\"Computed Flux via Divergence Theorem:\", flux)"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Multivariable Calculus",
        "author": "James Stewart"
      },
      {
        "title": "Vector Calculus",
        "author": "Jerrold E. Marsden & Anthony Tromba"
      }
    ],
    "practiceLinks": [
      {
        "title": "Paul's Online Math Notes - Green's Theorem",
        "url": "https://tutorial.math.lamar.edu/Classes/CalcIII/GreensTheorem.aspx"
      },
      {
        "title": "Paul's Online Math Notes - Divergence Theorem",
        "url": "https://tutorial.math.lamar.edu/Classes/CalcIII/DivergenceTheorem.aspx"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State Green's Theorem in the plane including all boundary conditions. (2 Marks)",
        "Write the mathematical statement of Stokes' Theorem for a 3D surface S. (2 Marks)",
        "State Gauss's Divergence Theorem relating surface flux to volume integration. (2 Marks)",
        "Show how Green's Theorem is a special 2D case of Stokes' Theorem. (2 Marks)"
      ],
      "sixMarks": [
        "Use Green's Theorem to evaluate oint_C (y^2 dx + 3x y dy) where C is the boundary of the semi-annulus in upper half-plane between x^2+y^2=1 and x^2+y^2=4. (6 Marks)",
        "Verify Stokes' Theorem for F = <y, z, x> where S is the hemisphere z = sqrt(1 - x^2 - y^2) bounded by unit circle C in xy-plane. (6 Marks)"
      ],
      "longAnswer": [
        "State and prove Gauss's Divergence Theorem for a simple 3D box domain E. Use the Divergence Theorem to calculate the total electric flux of field E = <x^3 + y, y^3 + z, z^3 + x> passing outward through cylinder x^2 + y^2 <= 4, 0 <= z <= 3. (10 Marks)"
      ]
    }
  },
  {
    "title": "Numerical Methods and Computational Applications",
    "slug": "multivariable-calculus-numerical-methods-and-computational-applications",
    "order": 14,
    "estimatedHours": 4,
    "difficulty": "Advanced",
    "description": "Implement numerical algorithms for multivariable integration (Monte Carlo, 2D Simpson's/Trapezoidal rules), finite difference partial derivative approximations, and symbolic computations using Python NumPy/SciPy/SymPy and MATLAB.",
    "subTopics": [
      "Numerical Integration Basics",
      "Computational Visualization",
      "MATLAB Applications",
      "Python Applications",
      "NumPy for Mathematical Computation",
      "Symbolic Computation Basics"
    ],
    "prerequisiteTitles": [
      "Integral Theorems"
    ],
    "learningObjectives": [
      "Implement 2D numerical integration algorithms (2D Simpson's rule, Monte Carlo integration) for complex non-analytical domains.",
      "Compute finite difference approximations for partial derivatives and gradient vectors on regular grids.",
      "Utilize Python packages (NumPy, SciPy, SymPy) to perform symbolic differentiation, numerical multi-integration, and 3D surface mesh visualizations."
    ],
    "notes": [
      {
        "title": "Numerical Integration, Finite Differences, Monte Carlo Methods, and Computational Python",
        "content": "1. FINITE DIFFERENCE APPROXIMATIONS FOR PARTIAL DERIVATIVES:\nFor a discrete grid with step sizes h_x and h_y:\n- Forward Difference w.r.t x: f_x(x, y) approx [f(x + h_x, y) - f(x, y)] / h_x\n- Central Difference w.r.t x: f_x(x, y) approx [f(x + h_x, y) - f(x - h_x, y)] / (2 * h_x)  [O(h_x^2) Error]\n- Second Partial f_xx: f_xx(x, y) approx [f(x + h_x, y) - 2 f(x, y) + f(x - h_x, y)] / (h_x^2)\n\n2. MONTE CARLO INTEGRATION IN MULTIPLE DIMENSIONS:\nFor estimating double integral I = iint_R f(x, y) dA over a domain R bounded by box B of area A_box:\nAlgorithm Steps:\n1. Generate N uniform random sample points (x_i, y_i) in bounding box B.\n2. Count points inside domain R.\n3. Compute sample mean: f_mean = (1/N) * sum_{i in R} f(x_i, y_i).\n4. Integral Estimate: I approx A_box * f_mean. Error scales as O(1 / sqrt(N)), independent of dimension!\n\nASCII FLOWCHART OF MONTE CARLO INTEGRATION:\n  +------------------+     +-------------------+     +---------------------+\n  | Generate N Random| --> | Filter (xi, yi)   | --> | Sum f(xi, yi) &     |\n  | Points in Box B  |     | inside Domain R   |     | Multiply by Box Area|\n  +------------------+     +-------------------+     +---------------------+\n\n3. SOLVED NUMERICAL FINITE DIFFERENCE EXAMPLE:\nProblem: Given function values f(x, y) on grid with h_x = h_y = 0.1:\nf(1.0, 1.0) = 4.00, f(1.1, 1.0) = 4.31, f(0.9, 1.0) = 3.71, f(1.0, 1.1) = 4.20, f(1.0, 0.9) = 3.82.\nEstimate grad(f)(1.0, 1.0) using Central Difference.\n\nSolution:\nf_x(1.0, 1.0) approx [f(1.1, 1.0) - f(0.9, 1.0)] / (2 * 0.1) = [4.31 - 3.71] / 0.2 = 0.60 / 0.2 = 3.00.\nf_y(1.0, 1.0) approx [f(1.0, 1.1) - f(1.0, 0.9)] / (2 * 0.1) = [4.20 - 3.82] / 0.2 = 0.38 / 0.2 = 1.90.\nEstimated Gradient grad(f)(1.0, 1.0) = <3.00, 1.90>.\n\n4. COMPLETE PYTHON IMPLEMENTATION (NumPy & SciPy):\nimport numpy as np\nimport scipy.integrate as spi\n\n# 1. Numerical Double Integration via SciPy\nf = lambda y, x: np.sin(x*y) + np.exp(x)\nval, err = spi.dblquad(f, 0, np.pi, lambda x: 0, lambda x: np.pi)\nprint(\"Double Integral Value:\", val)\n\n# 2. Monte Carlo Volume Estimation\nN = 100000\nx_rand = np.random.uniform(0, 1, N)\ny_rand = np.random.uniform(0, 1, N)\ninside = (x_rand**2 + y_rand**2) <= 1\nmc_area = np.sum(inside) / N * 4.0  # Estimate area of circle = pi\nprint(\"Monte Carlo Pi Estimate:\", mc_area)"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Numerical Methods for Engineers",
        "author": "Steven C. Chapra & Raymond P. Canale"
      },
      {
        "title": "Python Programming and Numerical Methods",
        "author": "Qingkai Kong, Timmy Siauw, Alexandre Bayen"
      }
    ],
    "practiceLinks": [
      {
        "title": "SciPy Tutorial - Double and Triple Integration",
        "url": "https://docs.scipy.org/doc/scipy/tutorial/integrate.html"
      },
      {
        "title": "GeeksforGeeks Numerical Integration",
        "url": "https://www.geeksforgeeks.org/numerical-integration-in-python/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State the central difference formula for computing second partial derivative f_xx. (2 Marks)",
        "Why is Monte Carlo integration superior to grid-based Simpson's rule for high-dimensional integrals (n > 4)? (2 Marks)",
        "What is the convergence rate O(1/sqrt(N)) of Monte Carlo integration? (2 Marks)",
        "Name two Python libraries used for symbolic and numerical multivariable calculus. (2 Marks)"
      ],
      "sixMarks": [
        "Write a complete Python function using NumPy to compute the gradient vector of a discrete 2D matrix grid using central differences. (6 Marks)",
        "Describe the 2D Simpson's 1/3 Rule algorithm for evaluating double integrals over rectangular grids. Derive its error bound. (6 Marks)"
      ],
      "longAnswer": [
        "Develop a comprehensive computational framework for multivariable calculus. Compare finite difference numerical differentiation, 2D Trapezoidal/Simpson numerical integration, and Monte Carlo stochastic volume estimation with Python implementation code and convergence analysis. (10 Marks)"
      ]
    }
  },
  {
    "title": "Applications in Engineering and Computer Science",
    "slug": "multivariable-calculus-applications-in-engineering-and-computer-science",
    "order": 15,
    "estimatedHours": 4,
    "difficulty": "Advanced",
    "description": "Explore real-world engineering and computer science applications: Maxwell's equations in electromagnetics, Navier-Stokes fluid continuity, computer graphics 3D transformations, machine learning gradient descent, and robotics kinematics.",
    "subTopics": [
      "Physics Applications",
      "Engineering Design Applications",
      "Fluid Mechanics Applications",
      "Electromagnetic Field Applications",
      "Computer Graphics",
      "Machine Learning Optimization",
      "Robotics Applications",
      "Data Science Applications"
    ],
    "prerequisiteTitles": [
      "Numerical Methods and Computational Applications"
    ],
    "learningObjectives": [
      "Formulate Maxwell's equations using divergence and curl to model electromagnetic field propagation.",
      "Apply gradient descent and Hessian-based optimization (Newton's method) to train deep neural network loss functions.",
      "Utilize multivariable calculus and Jacobians in computer graphics ray tracing, surface normal estimation, and robotic manipulator forward/inverse kinematics."
    ],
    "notes": [
      {
        "title": "Maxwell's Equations, Gradient Descent in AI/ML, and Robotics Jacobians",
        "content": "1. MAXWELL'S EQUATIONS IN DIFFERENTIAL & INTEGRAL FORMS:\n+-----------------------+-----------------------------+----------------------------------------------+\n| Law Name              | Differential Form           | Integral Form                                |\n+-----------------------+-----------------------------+----------------------------------------------+\n| Gauss's Law (Elec)    | div(E) = rho / epsilon_0    | iint_S E . n dS = Q_enclosed / epsilon_0     |\n| Gauss's Law (Mag)     | div(B) = 0                  | iint_S B . n dS = 0 (No Magnetic Monopoles)  |\n| Faraday's Law         | curl(E) = - dB / dt         | oint_C E . dr = - d/dt (iint_S B . n dS)     |\n| Ampere-Maxwell Law    | curl(B) = mu_0*J + ...      | oint_C B . dr = mu_0 * I_enclosed + ...      |\n+-----------------------+-----------------------------+----------------------------------------------+\n\n2. GRADIENT DESCENT IN MACHINE LEARNING:\nIn machine learning, loss function L(w1, w2, ..., wn) measures prediction error.\nTo minimize L, parameters w are updated in the direction of steepest descent (-grad L):\nw_{k+1} = w_k - alpha * grad(L)(w_k)\nwhere alpha > 0 is the learning rate.\n\nSecond-Order Newton's Method Update:\nw_{k+1} = w_k - [Hessian(L)]^(-1) * grad(L)(w_k)\n\nASCII GRADIENT DESCENT TRAJECTORY LANDSCAPE:\n          Loss L(w1, w2)\n             ^\n             |    (w0) High Loss\n             |                   |       ----> (w1)\n             |                          |              v (w_optimum) Minimum Loss\n             +-----------------------------> w1, w2\n\n3. ROBOTICS KINEMATICS & THE JACOBIAN MATRIX:\nFor a robotic arm with joint angles q = [q1, q2, ..., qn]^T, end-effector position is x = f(q).\nEnd-Effector Velocity Relationship:\nv = dx/dt = J(q) * dq/dt\nwhere J(q) is the Kinematic Jacobian Matrix: J_ij = d(f_i) / d(q_j).\n\n4. SOLVED MACHINE LEARNING GRADIENT EXAMPLE:\nProblem: Compute the gradient descent update for loss function L(w1, w2) = (w1 - 3)^2 + 2(w2 + 1)^2 at current weights w = (0, 0) with learning rate alpha = 0.1.\n\nSolution:\nStep 1: Compute grad(L) = <dL/dw1, dL/dw2> = <2(w1 - 3), 4(w2 + 1)>.\nStep 2: Evaluate grad(L) at w = (0, 0):\n  dL/dw1(0,0) = 2(0 - 3) = -6\n  dL/dw2(0,0) = 4(0 + 1) = 4\n  grad(L)(0, 0) = <-6, 4>.\nStep 3: Apply update rule w_{new} = w_{old} - alpha * grad(L):\n  w1_{new} = 0 - 0.1 * (-6) = 0.6\n  w2_{new} = 0 - 0.1 * (4) = -0.4\nNew weight vector w_{new} = (0.6, -0.4).\n\n5. PYTHON CODE FOR GRADIENT DESCENT (NumPy):\nimport numpy as np\ndef loss(w): return (w[0]-3)**2 + 2*(w[1]+1)**2\ndef grad_loss(w): return np.array([2*(w[0]-3), 4*(w[1]+1)])\n\nw = np.array([0.0, 0.0])\nalpha = 0.1\nfor step in range(10):\n    w = w - alpha * grad_loss(w)\nprint(\"Optimized Weights after 10 steps:\", w)"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Introduction to Electrodynamics",
        "author": "David J. Griffiths"
      },
      {
        "title": "Deep Learning",
        "author": "Ian Goodfellow, Yoshua Bengio, Aaron Courville"
      }
    ],
    "practiceLinks": [
      {
        "title": "Stanford CS229 Machine Learning Multivariable Calculus",
        "url": "https://cs229.stanford.edu/notes2022fall/cs229-notes-calculus.pdf"
      },
      {
        "title": "MIT OCW Electromagnetism Vector Calculus",
        "url": "https://ocw.mit.edu/courses/8-02-physics-ii-electricity-and-magnetism-spring-2019/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Write Maxwell's equations in differential vector calculus notation. (2 Marks)",
        "State the Gradient Descent update formula for training a machine learning model. (2 Marks)",
        "What is the role of the Jacobian matrix J(q) in robotic arm manipulator kinematics? (2 Marks)",
        "Why is div(B) = 0 physically significant in electrodynamics? (2 Marks)"
      ],
      "sixMarks": [
        "Derive the differential form of Faraday's Law from its integral form using Stokes' Theorem. (6 Marks)",
        "Explain how multivariable gradient descent and Hessian matrices are used in neural network backpropagation and optimization. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Vector Calculus in Physical Fields and CS Optimization. Detail how divergence and curl formulate fluid continuity and electromagnetic wave propagation. Explain how multi-dimensional loss landscapes, saddle points, and condition numbers impact high-dimensional machine learning convergence. (10 Marks)"
      ]
    }
  },
  {
    "title": "Practical Problem Solving",
    "slug": "multivariable-calculus-practical-problem-solving",
    "order": 16,
    "estimatedHours": 4,
    "difficulty": "Advanced",
    "description": "Synthesize all multivariable calculus concepts to solve complex engineering case studies, end-to-end mathematical modeling problems, and exam-style comprehensive numerical challenges.",
    "subTopics": [
      "Solved Numerical Problems",
      "Graphical Visualization",
      "Engineering Case Studies",
      "Mathematical Modeling",
      "Real-World Applications"
    ],
    "prerequisiteTitles": [
      "Applications in Engineering and Computer Science"
    ],
    "learningObjectives": [
      "Integrate gradient, multiple integration, line/surface integrals, and integral theorems to analyze complex engineering systems.",
      "Formulate mathematical models for heat flow, fluid flux, and structural stress from physical boundary conditions.",
      "Solve multi-step university examination and GATE/GRE style comprehensive numerical problems with full step-by-step mathematical proofs."
    ],
    "notes": [
      {
        "title": "Integrated Engineering Case Studies and Advanced Multi-Step Problem Solving",
        "content": "1. ENGINEERING CASE STUDY: HEAT DISSIPATION ACROSS CYLINDRICAL COOLING FIN:\nA cylindrical cooling fin of radius R = 0.05 m and length L = 0.2 m is subjected to steady-state temperature field T(r, z) = T_0 * exp(-z / L) * J0(2.4 * r / R) (K), where J0 is a Bessel function.\n\nHeat Flux Vector (Fourier's Law of Heat Conduction):\nq = -k * grad(T) = -k * [ (dT/dr) e_r + (dT/dz) e_z ]\n\nTotal Heat Dissipated through base surface S:\nQ_total = iint_S q . n dS\n\nASCII SCHEMATIC OF COOLING FIN HEAT FLUX:\n              Heat Source Base (z = 0)\n                ==================\n                |  |  |  |  |  |  |  Heat conduction q = -k grad(T)\n                |  v  v  v  v  v  |\n                +-----------------+\n                | Cooling Fin Body| ---> Convection into air\n                +-----------------+\n\n2. SOLVED GATE/EXAM INTEGRATED NUMERICAL PROBLEM:\nProblem: Verify Stokes' Theorem for vector field F = <z, x, y> across the triangular planar surface S bounded by vertices A(1, 0, 0), B(0, 1, 0), and C(0, 0, 1) with upward normal.\n\nSolution Step-by-Step:\nPart A: Surface Integral iint_S (curl F) . n dS\n1. Compute curl F:\n   curl F = <d/dy(y) - d/dz(x), d/dz(z) - d/dx(y), d/dx(x) - d/dy(z)> = <1, 1, 1>.\n2. Plane equation passing through A(1,0,0), B(0,1,0), C(0,0,1):\n   x + y + z = 1 => z = 1 - x - y.\n3. Upward unit normal n dS = <1, 1, 1> dA.\n4. Compute (curl F) . n dS:\n   (curl F) . n dS = <1, 1, 1> . <1, 1, 1> dA = (1 + 1 + 1) dA = 3 dA.\n5. Region D in xy-plane is bounded by x = 0, y = 0, and line x + y = 1 (Area = 1/2).\n   iint_S (curl F) . n dS = 3 * Area(D) = 3 * (1/2) = 3/2.\n\nPart B: Line Integral oint_C F . dr along boundary AB + BC + CA\n1. Path AB from (1,0,0) to (0,1,0): z = 0, dz = 0, x = 1 - t, y = t (0 <= t <= 1).\n   int_{AB} F . dr = int_0^1 (0 dx + x dy + y dz) = int_0^1 (1 - t) dt = [ t - t^2/2 ]_0^1 = 1/2.\n2. Path BC from (0,1,0) to (0,0,1): x = 0, dx = 0, y = 1 - t, z = t (0 <= t <= 1).\n   int_{BC} F . dr = int_0^1 (z dx + 0 dy + y dz) = int_0^1 (1 - t) dt = 1/2.\n3. Path CA from (0,0,1) to (1,0,0): y = 0, dy = 0, z = 1 - t, x = t (0 <= t <= 1).\n   int_{CA} F . dr = int_0^1 (z dx + x dy + 0 dz) = int_0^1 (1 - t) dt = 1/2.\n4. Total Loop Line Integral:\n   oint_C F . dr = 1/2 + 1/2 + 1/2 = 3/2.\n\nConclusion: iint_S (curl F) . n dS = oint_C F . dr = 3/2. Stokes' Theorem is VERIFIED!\n\n3. PYTHON COMPLETE VERIFICATION CODE:\nimport sympy as sp\nx, y, z = sp.symbols('x y z')\nF = [z, x, y]\ncurl_F = [sp.diff(F[2], y) - sp.diff(F[1], z),\n          sp.diff(F[0], z) - sp.diff(F[2], x),\n          sp.diff(F[1], x) - sp.diff(F[0], y)]\nprint(\"curl(F):\", curl_F)\n# Integrand 3 over triangular region x in [0,1], y in [0, 1-x]\nsurface_integral = sp.integrate(sp.integrate(3, (y, 0, 1 - x)), (x, 0, 1))\nprint(\"Verified Surface Integral Result:\", surface_integral)"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Higher Engineering Mathematics",
        "author": "B.S. Grewal"
      },
      {
        "title": "Advanced Engineering Mathematics",
        "author": "Erwin Kreyszig"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Gate Notes Mathematics",
        "url": "https://www.geeksforgeeks.org/engineering-mathematics-tutorials/"
      },
      {
        "title": "NPTEL Multivariable Calculus Assignments",
        "url": "https://nptel.ac.in/courses/111107108"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State Fourier's Law of Heat Conduction in terms of temperature gradient grad(T). (2 Marks)",
        "How is Stokes' Theorem applied to verify fluid circulation along a triangular loop? (2 Marks)",
        "Define steady-state fluid velocity field continuity div(V) = 0. (2 Marks)",
        "What boundary conditions are required to apply the Divergence Theorem to closed vessel pressure flux? (2 Marks)"
      ],
      "sixMarks": [
        "A heat flux vector is F = <2x, -y, z^2>. Calculate the heat escaping through the closed surface of the cube 0 <= x <= 1, 0 <= y <= 1, 0 <= z <= 1 using the Divergence Theorem. (6 Marks)",
        "Formulate a mathematical model for fluid flow rate Q through a pipe cross-section of radius R where velocity distribution is v(r) = v_max * (1 - (r/R)^2). Compute Q using double integrals in cylindrical coordinates. (6 Marks)"
      ],
      "longAnswer": [
        "Provide an end-to-end mathematical modeling paper on Multivariable Calculus in Aerodynamic Pressure Distribution. Formulate surface normals, evaluate pressure force vector F_p = iint_S P(x, y, z) n dS, prove circulation equivalence via Stokes' theorem, and solve a step-by-step 10-mark GATE university examination problem for lifting force over an airfoil geometry. (10 Marks)"
      ]
    }
  }
];
