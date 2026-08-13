module.exports = [
  {
    "title": "Introduction to Linear Algebra",
    "slug": "linear-algebra-introduction-to-linear-algebra",
    "order": 1,
    "estimatedHours": 3,
    "difficulty": "Beginner",
    "description": "Explore the fundamental concepts of linear algebra, focusing on scalars, vectors, vector space definitions, mathematical foundations, and their critical role across engineering, physics, computer science, and machine learning.",
    "subTopics": [
      "Introduction to Linear Algebra",
      "Importance in Engineering and Computer Science",
      "Scalars and Vectors",
      "Vector Spaces Overview",
      "Applications of Linear Algebra",
      "Mathematical Foundations"
    ],
    "prerequisiteTitles": [],
    "learningObjectives": [
      "Distinguish between scalar, vector, and tensor quantities in mathematical and computational domains.",
      "Understand vector space axioms and their role in structuring linear mathematical systems.",
      "Identify applications of linear algebra in computer graphics, machine learning, and physical simulations."
    ],
    "notes": [
      {
        "title": "Foundations of Vectors, Vector Spaces, and Linear Algebra Applications",
        "content": "1. OVERVIEW & CORE DEFINITIONS:\nLinear Algebra is the mathematical framework governing linear equations, vector spaces, and linear transformations. It forms the foundational language for modern data science, quantum computing, computer graphics, and engineering simulation.\n\n- Scalar: A single numerical quantity representing magnitude (e.g., c in R).\n- Vector: An ordered tuple of numbers representing magnitude and direction in n-dimensional space (e.g., v in R^n).\n- Tensor: A multidimensional array generalizing scalars (0D), vectors (1D), and matrices (2D).\n\n2. VECTOR SPACE AXIOMS:\nA vector space V over a field F (usually R or C) is a set of elements called vectors equipped with vector addition (+) and scalar multiplication (.) satisfying 8 fundamental axioms:\n1. Associativity of Addition: u + (v + w) = (u + v) + w\n2. Commutativity of Addition: u + v = v + u\n3. Additive Identity: There exists 0 in V such that v + 0 = v\n4. Additive Inverse: For every v in V, there exists -v such that v + (-v) = 0\n5. Compatibility of Scalar Multiplication: a(bv) = (ab)v\n6. Identity Element of Scalar Multiplication: 1 * v = v\n7. Distributivity over Vector Addition: a(u + v) = au + av\n8. Distributivity over Scalar Addition: (a + b)v = av + bv\n\n3. GEOMETRIC REPRESENTATION OF VECTOR ADDITION:\n\n           y-axis\n             ^\n             |       u + v = (3, 5)\n             |      /|\n             |     / |\n          v  |    /  |  v = (1, 3)\n      (1,3)  |   /   |  \n             |  /    |  \n             +-------+-------> x-axis\n                 u (2,2)\n\n4. SOLVED NUMERICAL EXAMPLE:\nProblem: Given vectors u = [2, -1, 4] and v = [1, 3, -2] in R^3, compute linear combination w = 3u - 2v and its Euclidean norm ||w||.\n\nSolution Step-by-Step:\nStep 1: Compute scalar multiplication 3u:\n  3 * [2, -1, 4] = [6, -3, 12]\nStep 2: Compute scalar multiplication 2v:\n  2 * [1, 3, -2] = [2, 6, -4]\nStep 3: Subtract 2v from 3u:\n  w = [6 - 2, -3 - 6, 12 - (-4)] = [4, -9, 16]\nStep 4: Compute Euclidean Norm ||w||:\n  ||w|| = sqrt(4^2 + (-9)^2 + 16^2) = sqrt(16 + 81 + 256) = sqrt(353) approx 18.7883.\n\n5. PYTHON NUMPY IMPLEMENTATION:\nimport numpy as np\nu = np.array([2, -1, 4])\nv = np.array([1, 3, -2])\nw = 3 * u - 2 * v\nnorm_w = np.linalg.norm(w)\nprint(\"Linear Combination w:\", w)\nprint(\"Euclidean Norm ||w||:\", round(norm_w, 4))"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Introduction to Linear Algebra",
        "author": "Gilbert Strang"
      }
    ],
    "practiceLinks": [
      {
        "title": "MIT OpenCourseWare - Linear Algebra",
        "url": "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is the formal definition of a vector space over a field F? (2 Marks)",
        "Distinguish between scalar, vector, and matrix quantities with examples. (2 Marks)",
        "State the 8 vector space axioms for addition and scalar multiplication. (2 Marks)",
        "Compute the Euclidean norm of vector v = [3, -4, 12]. (2 Marks)"
      ],
      "sixMarks": [
        "Prove that the set of all 2x2 real symmetric matrices forms a valid vector space under matrix addition and scalar multiplication. (6 Marks)",
        "Given vectors u = [1, 2, -3], v = [4, 0, 1], and w = [2, -1, 5], evaluate 2u - 3v + 4w and determine the unit vector in its direction. (6 Marks)"
      ],
      "longAnswer": [
        "Explain the fundamental role of linear algebra across computer science domains including computer graphics, machine learning loss optimization, quantum computing, and graph analysis. Illustrate with concrete mathematical equations. (10 Marks)"
      ]
    }
  },
  {
    "title": "Matrices",
    "slug": "linear-algebra-matrices",
    "order": 2,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Master matrix classification, representation, and arithmetic operations including addition, scalar multiplication, matrix multiplication, transpose operations, and fundamental matrix algebraic properties.",
    "subTopics": [
      "Introduction to Matrices",
      "Types of Matrices (Row, Column, Square, Diagonal, Identity, Zero, Symmetric, Skew-Symmetric, Upper/Lower Triangular)",
      "Matrix Operations (Addition, Subtraction, Multiplication, Transpose)",
      "Matrix Properties"
    ],
    "prerequisiteTitles": [
      "Introduction to Linear Algebra"
    ],
    "learningObjectives": [
      "Classify matrices according to their structural forms such as symmetric, skew-symmetric, diagonal, and triangular matrices.",
      "Perform matrix operations including matrix multiplication, transpose operations, and verify non-commutativity.",
      "Apply matrix properties to simplify complex matrix expressions and computational algorithms."
    ],
    "notes": [
      {
        "title": "Matrix Classification, Fundamental Operations, and Algebraic Properties",
        "content": "1. MATRIX TYPES & CLASSIFICATION:\nA matrix is a rectangular array of numbers arranged in m rows and n columns (m x n).\n- Row Matrix: 1 x n matrix.\n- Column Matrix: m x 1 matrix.\n- Square Matrix: m = n.\n- Diagonal Matrix: Non-zero entries exist only on main diagonal (a_ij = 0 for i != j).\n- Identity Matrix (I): Diagonal matrix where all diagonal entries equal 1.\n- Symmetric Matrix: A^T = A (a_ij = a_ji).\n- Skew-Symmetric Matrix: A^T = -A (a_ij = -a_ji, and main diagonal entries are zero).\n- Upper Triangular: a_ij = 0 for i > j. Lower Triangular: a_ij = 0 for i < j.\n\n2. MATRIX MULTIPLICATION MECHANICS:\nFor matrix A (m x p) and B (p x n), product C = AB is an (m x n) matrix where C_ij = sum_{k=1}^p A_ik * B_kj.\nNote: Matrix multiplication is associative (A(BC) = (AB)C) and distributive, but strictly NON-COMMUTATIVE (AB != BA in general).\nTranspose Property: (AB)^T = B^T * A^T.\n\n3. ASCII DIAGRAM OF MATRIX MULTIPLICATION:\n\n    Matrix A (2x3)          Matrix B (3x2)            Matrix C (2x2)\n   [ a11  a12  a13 ]   *   [ b11  b12 ]   =   [ (a11*b11+a12*b21+a13*b31)  ... ]\n   [ a21  a22  a23 ]       [ b21  b22 ]       [ ...                        ... ]\n                           [ b31  b32 ]       (Row i dot Column j)\n\n4. SOLVED NUMERICAL EXAMPLE:\nProblem: Given A = [[1, 2], [3, 4]] and B = [[2, 0], [1, 5]], calculate AB and verify (AB)^T = B^T * A^T.\n\nSolution Step-by-Step:\nStep 1: Compute Matrix Multiplication AB:\n  AB_11 = 1*2 + 2*1 = 4\n  AB_12 = 1*0 + 2*5 = 10\n  AB_21 = 3*2 + 4*1 = 10\n  AB_22 = 3*0 + 4*5 = 20\n  AB = [[4, 10], [10, 20]].\nStep 2: Take transpose of AB:\n  (AB)^T = [[4, 10], [10, 20]].\nStep 3: Find A^T and B^T:\n  A^T = [[1, 3], [2, 4]], B^T = [[2, 1], [0, 5]].\nStep 4: Compute B^T * A^T:\n  Row 1 dot Cols: [2*1 + 1*2, 2*3 + 1*4] = [4, 10]\n  Row 2 dot Cols: [0*1 + 5*2, 0*3 + 5*4] = [10, 20]\n  B^T * A^T = [[4, 10], [10, 20]].\nResult: (AB)^T = B^T * A^T verified.\n\n5. PYTHON NUMPY IMPLEMENTATION:\nimport numpy as np\nA = np.array([[1, 2], [3, 4]])\nB = np.array([[2, 0], [1, 5]])\nAB = np.matmul(A, B)\nBt_At = np.matmul(B.T, A.T)\nprint(\"AB:\n\", AB)\nprint(\"Is (AB)^T equal to B^T A^T?\", np.array_equal(AB.T, Bt_At))"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Linear Algebra and Its Applications",
        "author": "David C. Lay"
      }
    ],
    "practiceLinks": [
      {
        "title": "Paul's Online Math Notes - Matrix Algebra",
        "url": "https://tutorial.math.lamar.edu/Classes/LinAlg/MatrixArithmetic.aspx"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State the condition under which matrix multiplication AB is defined. (2 Marks)",
        "Define symmetric and skew-symmetric matrices. Give a 2x2 example of each. (2 Marks)",
        "Prove that any square matrix A can be expressed as the sum of a symmetric and skew-symmetric matrix. (2 Marks)",
        "If A is an m x n matrix, what are the dimensions of A * A^T and A^T * A? (2 Marks)"
      ],
      "sixMarks": [
        "Express matrix A = [[3, 2, 5], [1, 4, 6], [8, 7, 9]] as the sum of a symmetric matrix S and a skew-symmetric matrix K. (6 Marks)",
        "Given A = [[1, -1], [2, 3]] and B = [[0, 2], [1, 4]], calculate AB, BA, and demonstrate that matrix multiplication is non-commutative. (6 Marks)"
      ],
      "longAnswer": [
        "Prove the transposition properties: (A + B)^T = A^T + B^T and (AB)^T = B^T A^T for arbitrary compatible matrices. Extend this to the product of n matrices (A1 A2 ... An)^T. (10 Marks)"
      ]
    }
  },
  {
    "title": "Determinants",
    "slug": "linear-algebra-determinants",
    "order": 3,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Learn determinant evaluation techniques using Laplace cofactor expansion and elementary row operations, explore determinant algebraic properties, and understand geometric volume scaling factors.",
    "subTopics": [
      "Introduction to Determinants",
      "Properties of Determinants",
      "Cofactors",
      "Minors",
      "Laplace Expansion",
      "Determinant Using Row Operations",
      "Applications of Determinants"
    ],
    "prerequisiteTitles": [
      "Matrices"
    ],
    "learningObjectives": [
      "Compute determinants of arbitrary n x n matrices using Laplace expansion along rows or columns.",
      "Utilize elementary row operations and triangular matrix properties to efficiently evaluate high-order determinants.",
      "Understand the geometric interpretation of determinants as scaling factors of n-dimensional volume elements."
    ],
    "notes": [
      {
        "title": "Determinant Calculation via Laplace Expansion and Row Operations",
        "content": "1. DETERMINANT CONCEPT & GEOMETRY:\nThe determinant is a scalar value calculated from a square matrix. Geometrically, det(A) represents the factor by which area (in 2D) or volume (in 3D) is scaled under the transformation A. If det(A) = 0, space collapses into a lower dimension.\n\n2. KEY PROPERTIES OF DETERMINANTS:\n- det(I) = 1\n- det(A^T) = det(A)\n- det(AB) = det(A) * det(B)\n- Swapping two rows/columns flips the sign: det(A') = -det(A)\n- Scaling a single row by scalar k scales det by k: det(A') = k * det(A). Thus det(k A) = k^n * det(A) for n x n matrix.\n- Adding a multiple of one row to another leaves det unchanged.\n- Determinant of upper or lower triangular matrix is the product of diagonal elements.\n\n3. LAPLACE COFACTOR EXPANSION DIAGRAM:\nFor a 3x3 matrix, expansion along row 1 uses cofactors C_ij = (-1)^(i+j) * M_ij:\n\n    | a11 a12 a13 |\n    | a21 a22 a23 | = +a11*|a22 a23| - a12*|a21 a23| + a13*|a21 a22|\n    | a31 a32 a33 |        |a32 a33|      |a31 a33|      |a31 a32|\n\n4. SOLVED NUMERICAL EXAMPLE:\nProblem: Evaluate det(A) for A = [[3, 1, 2], [0, 4, 5], [1, 2, 1]] using Laplace expansion along row 1.\n\nSolution Step-by-Step:\nStep 1: Write expansion formula:\n  det(A) = 3 * C_11 + 1 * C_12 + 2 * C_13\nStep 2: Calculate Minor M_11 and Cofactor C_11:\n  M_11 = det([[4, 5], [2, 1]]) = (4*1 - 5*2) = 4 - 10 = -6.\n  C_11 = (-1)^(1+1) * (-6) = -6.\nStep 3: Calculate Minor M_12 and Cofactor C_12:\n  M_12 = det([[0, 5], [1, 1]]) = (0*1 - 5*1) = -5.\n  C_12 = (-1)^(1+2) * (-5) = +5.\nStep 4: Calculate Minor M_13 and Cofactor C_13:\n  M_13 = det([[0, 4], [1, 2]]) = (0*2 - 4*1) = -4.\n  C_13 = (-1)^(1+3) * (-4) = -4.\nStep 5: Combine terms:\n  det(A) = 3*(-6) - 1*(5) + 2*(-4) = -18 - 5 - 8 = -31.\n\n5. PYTHON NUMPY IMPLEMENTATION:\nimport numpy as np\nA = np.array([[3, 1, 2], [0, 4, 5], [1, 2, 1]])\ndet_A = np.linalg.det(A)\nprint(\"Determinant of A:\", round(det_A, 4))"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Introduction to Linear Algebra",
        "author": "Gilbert Strang"
      }
    ],
    "practiceLinks": [
      {
        "title": "Paul's Online Math Notes - Determinants",
        "url": "https://tutorial.math.lamar.edu/Classes/LinAlg/Determinants.aspx"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define minor and cofactor of a matrix element a_ij. (2 Marks)",
        "State what happens to det(A) when a 4x4 matrix A is multiplied by scalar 3. (2 Marks)",
        "Explain the geometric significance of a zero determinant det(A) = 0. (2 Marks)",
        "Evaluate det([[2, 5], [1, 3]]). (2 Marks)"
      ],
      "sixMarks": [
        "Evaluate the determinant of 4x4 matrix A = [[2, 1, 0, 4], [0, 3, 1, 2], [1, 0, 5, 1], [0, 0, 2, 3]] using row operations to convert to upper triangular form. (6 Marks)",
        "Prove that det(AB) = det(A) * det(B) for 2x2 square matrices. (6 Marks)"
      ],
      "longAnswer": [
        "Derive Laplace cofactor expansion from first principles. Prove that evaluating the determinant along any row or column yields identical scalar results. (10 Marks)"
      ]
    }
  },
  {
    "title": "Inverse of a Matrix",
    "slug": "linear-algebra-inverse-of-a-matrix",
    "order": 4,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Understand singular and non-singular matrices, matrix rank, compute matrix inverses using the classical adjoint method and Gaussian elimination, and explore applications in solving systems.",
    "subTopics": [
      "Singular and Non-Singular Matrices",
      "Adjoint of a Matrix",
      "Inverse Using Adjoint Method",
      "Inverse Using Gaussian Elimination",
      "Matrix Rank",
      "Applications of Matrix Inverse"
    ],
    "prerequisiteTitles": [
      "Determinants"
    ],
    "learningObjectives": [
      "Differentiate between singular and non-singular matrices using determinant criterion det(A) != 0.",
      "Calculate matrix inverses using classical adjoint matrices and Gauss-Jordan augmented matrix reduction.",
      "Determine matrix rank using row echelon forms and relate rank to linear independence of rows and columns."
    ],
    "notes": [
      {
        "title": "Matrix Inverses: Adjoint Method, Gauss-Jordan Elimination, and Rank",
        "content": "1. SINGULAR VS NON-SINGULAR MATRICES:\nA square matrix A is non-singular (invertible) if and only if det(A) != 0. If det(A) = 0, A is singular and no inverse matrix A^(-1) exists.\nProperty: A * A^(-1) = A^(-1) * A = I.\n\n2. ADJOINT METHOD FOR MATRIX INVERSION:\nThe classical inverse formula is A^(-1) = adj(A) / det(A), where adj(A) = C^T (transpose of cofactor matrix C).\nFor 2x2 matrix [[a, b], [c, d]], inverse is (1 / (ad - bc)) * [[d, -b], [-c, a]].\n\n3. GAUSS-JORDAN ELIMINATION METHOD:\nConstruct augmented matrix [A | I]. Apply elementary row operations until left side becomes Identity matrix I. The right side transforms into A^(-1): [A | I] ===> [I | A^(-1)].\n\n4. ASCII DIAGRAM OF GAUSS-JORDAN ELIMINATION:\n\n    [ a11 a12 | 1 0 ]   Elementary Row Ops   [ 1  0 | b11 b12 ]\n    [ a21 a22 | 0 1 ]  ====================>  [ 0  1 | b21 b22 ]\n     Augmented [A | I]                         Transformed [I | A^-1]\n\n5. SOLVED NUMERICAL EXAMPLE:\nProblem: Find inverse of matrix A = [[4, 7], [2, 6]] using the Adjoint method.\n\nSolution Step-by-Step:\nStep 1: Calculate det(A):\n  det(A) = (4)*(6) - (7)*(2) = 24 - 14 = 10.\n  Since det(A) = 10 != 0, A is non-singular and invertible.\nStep 2: Form Cofactor Matrix C:\n  C_11 = +6, C_12 = -2\n  C_21 = -7, C_22 = +4\n  C = [[6, -2], [-7, 4]].\nStep 3: Take transpose of C to obtain Adjoint adj(A):\n  adj(A) = C^T = [[6, -7], [-2, 4]].\nStep 4: Compute Inverse A^(-1) = adj(A) / det(A):\n  A^(-1) = (1/10) * [[6, -7], [-2, 4]] = [[0.6, -0.7], [-0.2, 0.4]].\nStep 5: Verify A * A^(-1) = I:\n  [[4, 7], [2, 6]] * [[0.6, -0.7], [-0.2, 0.4]] = [[4(0.6)+7(-0.2), 4(-0.7)+7(0.4)], [2(0.6)+6(-0.2), 2(-0.7)+6(0.4)]]\n  = [[2.4 - 1.4, -2.8 + 2.8], [1.2 - 1.2, -1.4 + 2.4]] = [[1, 0], [0, 1]] = I.\n\n6. PYTHON NUMPY IMPLEMENTATION:\nimport numpy as np\nA = np.array([[4, 7], [2, 6]])\nA_inv = np.linalg.inv(A)\nrank_A = np.linalg.matrix_rank(A)\nprint(\"A Inverse:\n\", A_inv)\nprint(\"Matrix Rank:\", rank_A)\nprint(\"A * A_inv:\n\", np.round(np.dot(A, A_inv)))"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Linear Algebra Done Right",
        "author": "Sheldon Axler"
      }
    ],
    "practiceLinks": [
      {
        "title": "MIT OpenCourseWare - Matrix Inverses",
        "url": "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define non-singular matrix and state the condition for a matrix inverse to exist. (2 Marks)",
        "What is matrix rank? How is rank determined from row echelon form? (2 Marks)",
        "State the inverse transpose property (A^T)^(-1) = (A^(-1))^T. (2 Marks)",
        "Find inverse of 2x2 matrix [[3, 5], [1, 2]]. (2 Marks)"
      ],
      "sixMarks": [
        "Find the inverse of 3x3 matrix A = [[1, 2, 3], [0, 1, 4], [5, 6, 0]] using Gauss-Jordan elimination [A | I] -> [I | A^(-1)]. (6 Marks)",
        "Prove that if A and B are invertible matrices of same size, then AB is invertible and (AB)^(-1) = B^(-1) * A^(-1). (6 Marks)"
      ],
      "longAnswer": [
        "Explain the concepts of row rank and column rank. Prove that for any m x n matrix A, row rank equals column rank, and describe how matrix inversion is used to solve linear systems. (10 Marks)"
      ]
    }
  },
  {
    "title": "Systems of Linear Equations",
    "slug": "linear-algebra-systems-of-linear-equations",
    "order": 5,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Formulate systems of linear equations in matrix form Ax = b, evaluate system consistency using Rouché-Capelli theorem, and solve systems using Gaussian elimination, Gauss-Jordan reduction, LU decomposition, and Cramer's rule.",
    "subTopics": [
      "Representation of Linear Systems",
      "Consistent and Inconsistent Systems",
      "Gaussian Elimination",
      "Gauss-Jordan Elimination",
      "LU Decomposition",
      "Cramer's Rule",
      "Applications in Engineering"
    ],
    "prerequisiteTitles": [
      "Inverse of a Matrix"
    ],
    "learningObjectives": [
      "Formulate real-world engineering problems as system of linear equations Ax = b.",
      "Apply Gaussian elimination with partial pivoting and Gauss-Jordan reduction to determine unique, infinite, or no solutions.",
      "Factorize matrices into LU lower and upper triangular components to solve systems efficiently."
    ],
    "notes": [
      {
        "title": "Solving Linear Systems: Gaussian Elimination, LU Factorization, and Cramer Rule",
        "content": "1. REPRESENTATION & SYSTEM CONSISTENCY:\nA system of m linear equations in n variables is written Ax = b, where A is (m x n) coefficient matrix, x is (n x 1) unknown vector, and b is (m x 1) constant vector.\nROUCHÉ-CAPELLI THEOREM:\n- Consistent (At least one solution): rank(A) = rank([A|b]).\n  - Unique Solution: rank(A) = rank([A|b]) = n (number of variables).\n  - Infinite Solutions: rank(A) = rank([A|b]) < n.\n- Inconsistent (No solution): rank(A) < rank([A|b]).\n\n2. LU DECOMPOSITION (A = LU):\nFactor coefficient matrix A into Lower triangular L (unit diagonal) and Upper triangular U.\nSolving Ax = b proceeds in two steps:\n1. Solve L y = b using Forward Substitution.\n2. Solve U x = y using Backward Substitution.\n\n3. ASCII DIAGRAM OF LU DECOMPOSITION:\n\n    [ a11 a12 a13 ]   [ 1   0   0 ] [ u11 u12 u13 ]\n    [ a21 a22 a23 ] = [ l21 1   0 ] [  0  u22 u23 ]\n    [ a31 a33 a33 ]   [ l31 l32 1 ] [  0   0  u33 ]\n         Matrix A       Lower L        Upper U\n\n4. SOLVED NUMERICAL EXAMPLE:\nProblem: Solve system of equations using Gaussian Elimination:\n  x + 2y + z = 8\n  2x + 3y + 4z = 20\n  4x + 3y + 2z = 16\n\nSolution Step-by-Step:\nStep 1: Write Augmented Matrix [A | b]:\n  [ 1  2  1 |  8 ]\n  [ 2  3  4 | 20 ]\n  [ 4  3  2 | 16 ]\nStep 2: Eliminate x from Row 2 and Row 3:\n  R2 <- R2 - 2*R1 => [0, -1, 2 | 4]\n  R3 <- R3 - 4*R1 => [0, -5, -2 | -16]\nStep 3: Eliminate y from Row 3:\n  R3 <- R3 - 5*R2 => [0, 0, -12 | -36]\nStep 4: Row Echelon Form obtained:\n  [ 1   2   1 |   8 ]\n  [ 0  -1   2 |   4 ]\n  [ 0   0 -12 | -36 ]\nStep 5: Back Substitution:\n  From R3: -12 z = -36  =>  z = 3.\n  From R2: -y + 2(3) = 4  =>  -y + 6 = 4  =>  y = 2.\n  From R1: x + 2(2) + 1(3) = 8  =>  x + 7 = 8  =>  x = 1.\nSolution Vector x = [1, 2, 3]^T.\n\n5. PYTHON NUMPY IMPLEMENTATION:\nimport numpy as np\nA = np.array([[1, 2, 1], [2, 3, 4], [4, 3, 2]])\nb = np.array([8, 20, 16])\nx = np.linalg.solve(A, b)\nprint(\"Solution (x, y, z):\", np.round(x, 4))"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Linear Algebra and Its Applications",
        "author": "David C. Lay"
      }
    ],
    "practiceLinks": [
      {
        "title": "Paul's Online Math Notes - Systems of Equations",
        "url": "https://tutorial.math.lamar.edu/Classes/LinAlg/SystemsofEqns.aspx"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State Rouché-Capelli Theorem for consistency of system of linear equations Ax = b. (2 Marks)",
        "What is Cramer's Rule? Under what condition is Cramer's Rule applicable? (2 Marks)",
        "Distinguish between Gaussian Elimination and Gauss-Jordan Elimination. (2 Marks)",
        "Define homogeneous system Ax = 0 and explain when non-trivial solutions exist. (2 Marks)"
      ],
      "sixMarks": [
        "Solve the system 2x + y + z = 5, 4x - 6y = -2, -2x + 7y + 2z = 9 using LU Decomposition method. (6 Marks)",
        "For what value of k does the system x + y + z = 6, x + 2y + 3z = 10, x + 2y + kz = 12 have (i) unique solution, (ii) infinite solutions, (iii) no solution? (6 Marks)"
      ],
      "longAnswer": [
        "Formulate electrical circuit mesh currents using Kirchhoff's voltage law into matrix form Ax = b. Solve the 3-loop circuit system using Gaussian elimination with partial pivoting and analyze computational complexity O(n^3). (10 Marks)"
      ]
    }
  },
  {
    "title": "Vector Spaces",
    "slug": "linear-algebra-vector-spaces",
    "order": 6,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Study abstract vector spaces and subspaces, analyze linear combinations, linear span, linear independence vs dependence, and master the concepts of basis, dimension, and coordinate representations.",
    "subTopics": [
      "Definition of Vector Spaces",
      "Subspaces",
      "Linear Combination",
      "Span",
      "Linear Independence",
      "Linear Dependence",
      "Basis",
      "Dimension",
      "Coordinate Systems"
    ],
    "prerequisiteTitles": [
      "Systems of Linear Equations"
    ],
    "learningObjectives": [
      "Verify whether a given set and operations form a valid vector space or subspace satisfying vector space axioms.",
      "Determine linear independence or dependence of set of vectors using matrix rank and determinant tests.",
      "Find basis sets and calculate dimensions for vector spaces and column/null spaces of matrices."
    ],
    "notes": [
      {
        "title": "Abstract Vector Spaces, Subspaces, Linear Independence, Basis, and Dimension",
        "content": "1. SUBSPACES & SPAN:\nA subset W of vector space V is a subspace if W itself is a vector space under the same operations. W is a subspace iff:\n1. Zero vector 0 is in W.\n2. Closed under vector addition: u, v in W => u + v in W.\n3. Closed under scalar multiplication: c in F, v in W => c v in W.\n\nSPAN: The set of all linear combinations Span(v1, v2, ..., vn) = {c1 v1 + c2 v2 + ... + cn vn | ci in R}.\n\n2. LINEAR INDEPENDENCE & BASIS:\n- Linear Independence: Vectors {v1, v2, ..., vn} are linearly independent if c1 v1 + c2 v2 + ... + cn vn = 0 forces c1 = c2 = ... = cn = 0.\n- Basis: A set B = {v1, v2, ..., vn} is a basis for V if:\n  1. B is linearly independent.\n  2. B spans V (Span(B) = V).\n- Dimension: The number of vectors in any basis of V, denoted dim(V).\n\n3. ASCII DIAGRAM OF BASIS VECTORS & SPAN IN R^2:\n\n           y-axis\n             ^\n             |         v = 3*e1 + 2*e2\n             |        /|\n          e2 |       / | 2*e2\n       (0,1) +      /  |\n             |     /   |\n             +----+----+-----> x-axis\n                 e1 (1,0)  3*e1\n\n4. SOLVED NUMERICAL EXAMPLE:\nProblem: Test whether vectors v1 = [1, 2, 3], v2 = [0, 1, 4], and v3 = [5, 6, 0] form a basis for R^3.\n\nSolution Step-by-Step:\nStep 1: In R^3, any 3 linearly independent vectors form a basis (since dim(R^3) = 3).\nStep 2: Construct matrix M with vectors as columns:\n  M = [[1, 0, 5], [2, 1, 6], [3, 4, 0]].\nStep 3: Compute determinant det(M):\n  det(M) = 1*(1*0 - 6*4) - 0*(2*0 - 6*3) + 5*(2*4 - 1*3)\n  det(M) = 1*(-24) - 0 + 5*(8 - 3) = -24 + 5*(5) = -24 + 25 = 1.\nStep 4: Analyze result:\n  Since det(M) = 1 != 0, matrix M is invertible and has full rank = 3.\n  Therefore, vectors {v1, v2, v3} are linearly independent and span R^3.\nConclusion: {v1, v2, v3} forms a valid basis for R^3. Dimension = 3.\n\n5. PYTHON NUMPY IMPLEMENTATION:\nimport numpy as np\nM = np.array([[1, 0, 5], [2, 1, 6], [3, 4, 0]])\ndet_M = np.linalg.det(M)\nrank_M = np.linalg.matrix_rank(M)\nprint(\"Determinant:\", det_M)\nprint(\"Rank:\", rank_M)\nprint(\"Forms a valid basis for R^3?\", rank_M == 3)"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Introduction to Linear Algebra",
        "author": "Gilbert Strang"
      }
    ],
    "practiceLinks": [
      {
        "title": "MIT OpenCourseWare - Vector Spaces",
        "url": "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define a vector subspace and state the 3 closure requirements. (2 Marks)",
        "What is the difference between linear independence and linear dependence? (2 Marks)",
        "Define basis and dimension of a vector space. (2 Marks)",
        "Is the set W = {(x, y) | x + y = 1} a valid subspace of R^2? Explain. (2 Marks)"
      ],
      "sixMarks": [
        "Determine whether vectors u = [1, 2, 1], v = [2, 1, 0], and w = [1, -1, -1] are linearly independent in R^3. Find the subspace spanned by them. (6 Marks)",
        "Find a basis and dimension for the subspace W of R^4 defined by W = {(x1, x2, x3, x4) | x1 + 2x2 - x3 = 0 and x2 - x4 = 0}. (6 Marks)"
      ],
      "longAnswer": [
        "State and prove the Basis Extension Theorem. Prove that if V is a vector space of dimension n, any set of n linearly independent vectors forms a basis for V. (10 Marks)"
      ]
    }
  },
  {
    "title": "Linear Transformations",
    "slug": "linear-algebra-linear-transformations",
    "order": 7,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Explore mappings between vector spaces that preserve vector addition and scalar multiplication, study kernel (null space) and range (column space), establish the Rank-Nullity Theorem, and analyze matrix representations.",
    "subTopics": [
      "Introduction to Linear Transformations",
      "Matrix Representation",
      "Kernel (Null Space)",
      "Range (Column Space)",
      "Rank-Nullity Theorem",
      "Composition of Transformations",
      "Invertible Transformations"
    ],
    "prerequisiteTitles": [
      "Vector Spaces"
    ],
    "learningObjectives": [
      "Construct standard matrix representations for linear transformations between finite-dimensional vector spaces.",
      "Compute kernel (null space) and range (column space) of linear transformations.",
      "Apply the Rank-Nullity Theorem (Rank + Nullity = dim(V)) to evaluate injectivity and surjectivity."
    ],
    "notes": [
      {
        "title": "Linear Transformations, Matrix Representation, Kernel, Range, and Rank-Nullity Theorem",
        "content": "1. DEFINITION OF LINEAR TRANSFORMATION:\nA function T: V -> W between vector spaces V and W is a linear transformation if for all u, v in V and c in F:\n1. T(u + v) = T(u) + T(v) (Additivity)\n2. T(c v) = c T(v) (Homogeneity)\n\n2. KERNEL, RANGE, & RANK-NULLITY THEOREM:\n- Kernel / Null Space: Ker(T) = {v in V | T(v) = 0 in W}. Dim(Ker(T)) = Nullity(T).\n- Range / Column Space: Im(T) = {T(v) | v in V}. Dim(Im(T)) = Rank(T).\nRANK-NULLITY THEOREM:\nIf V is finite-dimensional, then:\n  dim(V) = Rank(T) + Nullity(T)  ===>  dim(V) = dim(Im(T)) + dim(Ker(T)).\n\n3. ASCII DIAGRAM OF LINEAR MAPPING V -> W:\n\n     Domain V (dim n)                   Codomain W (dim m)\n      +------------------+              +------------------+\n      |  Kernel Ker(T)   |  ---T(v)=0-> |     Zero (0)     |\n      |  (maps to 0)     |              |                  |\n      |                  |  ---T----->  |   Range Im(T)    |\n      |   Vector v       |              |   (Column Space) |\n      +------------------+              +------------------+\n         dim(V) = Rank(T) + Nullity(T) (Rank-Nullity Theorem)\n\n4. SOLVED NUMERICAL EXAMPLE:\nProblem: Let T: R^3 -> R^2 defined by T(x, y, z) = [x + 2y - z, 2x + 4y - 2z]. Find matrix representation A, basis for Ker(T), basis for Im(T), and verify Rank-Nullity Theorem.\n\nSolution Step-by-Step:\nStep 1: Construct standard matrix representation A:\n  T([1,0,0]) = [1, 2], T([0,1,0]) = [2, 4], T([0,0,1]) = [-1, -2].\n  A = [[1, 2, -1], [2, 4, -2]].\nStep 2: Find Kernel Ker(T) by solving A x = 0:\n  [[1, 2, -1], [2, 4, -2]] [x, y, z]^T = [0, 0]^T.\n  Row reduction R2 <- R2 - 2*R1 gives [[1, 2, -1], [0, 0, 0]].\n  Equation: x + 2y - z = 0  =>  x = -2y + z.\n  Free variables: y, z.\n  Vector form: [x, y, z]^T = y * [-2, 1, 0]^T + z * [1, 0, 1]^T.\n  Basis for Ker(T): {[-2, 1, 0]^T, [1, 0, 1]^T}. Nullity(T) = 2.\nStep 3: Find Range Im(T):\n  Pivot column is Column 1: [1, 2]^T.\n  Basis for Im(T): {[1, 2]^T}. Rank(T) = 1.\nStep 4: Verify Rank-Nullity Theorem:\n  dim(V) = dim(R^3) = 3.\n  Rank(T) + Nullity(T) = 1 + 2 = 3. Verified!\n\n5. PYTHON NUMPY IMPLEMENTATION:\nimport numpy as np\nA = np.array([[1, 2, -1], [2, 4, -2]])\nrank_A = np.linalg.matrix_rank(A)\nnullity_A = A.shape[1] - rank_A\nprint(\"Transformation Matrix A:\n\", A)\nprint(\"Rank(T):\", rank_A)\nprint(\"Nullity(T):\", nullity_A)\nprint(\"Dim(V) == Rank + Nullity?\", A.shape[1] == rank_A + nullity_A)"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Linear Algebra Done Right",
        "author": "Sheldon Axler"
      }
    ],
    "practiceLinks": [
      {
        "title": "Paul's Online Math Notes - Linear Transformations",
        "url": "https://tutorial.math.lamar.edu/Classes/LinAlg/LinTrans.aspx"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define linear transformation between vector spaces. (2 Marks)",
        "What is the kernel (null space) of a linear transformation? (2 Marks)",
        "State the Rank-Nullity Theorem. (2 Marks)",
        "Is T(x, y) = (x + 1, y) a linear transformation? Explain. (2 Marks)"
      ],
      "sixMarks": [
        "Let T: R^3 -> R^3 be defined by T(x, y, z) = [x + 2y - z, y + z, x + y - 2z]. Find standard matrix A, basis for null space, and nullity. (6 Marks)",
        "Find the matrix representation of 2D counter-clockwise rotation transformation by angle theta followed by reflection across x-axis. (6 Marks)"
      ],
      "longAnswer": [
        "State and prove the Rank-Nullity Theorem for linear transformations T: V -> W between finite-dimensional vector spaces. Discuss its implications for injectivity and surjectivity. (10 Marks)"
      ]
    }
  },
  {
    "title": "Eigenvalues and Eigenvectors",
    "slug": "linear-algebra-eigenvalues-and-eigenvectors",
    "order": 8,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Solve characteristic equations det(A - lambda I) = 0 to extract eigenvalues and eigenvectors, perform matrix diagonalization, analyze similarity transformations, and explore the Spectral Theorem.",
    "subTopics": [
      "Characteristic Equation",
      "Eigenvalues",
      "Eigenvectors",
      "Diagonalization",
      "Matrix Similarity",
      "Spectral Theorem",
      "Applications of Eigenvalues"
    ],
    "prerequisiteTitles": [
      "Linear Transformations"
    ],
    "learningObjectives": [
      "Calculate eigenvalues and corresponding eigenspaces of square matrices using characteristic polynomials.",
      "Determine matrix diagonalizability and execute diagonal similarity transformations A = P D P^(-1).",
      "Apply the Spectral Theorem for symmetric real matrices to obtain orthogonal diagonalizations."
    ],
    "notes": [
      {
        "title": "Eigenvalue Analysis, Characteristic Equations, Diagonalization, and Spectral Theorem",
        "content": "1. EIGENVALUE EQUATION:\nFor a square matrix A (n x n), non-zero vector v is an eigenvector and scalar lambda is an eigenvalue if:\n  A v = lambda v  <=>  (A - lambda I) v = 0.\nNon-trivial solutions exist iff det(A - lambda I) = 0 (Characteristic Equation).\n\n2. DIAGONALIZATION & SPECTRAL THEOREM:\nMatrix A is diagonalizable if there exists invertible P and diagonal D such that A = P D P^(-1).\nColumns of P are n linearly independent eigenvectors; diagonal entries of D are corresponding eigenvalues.\nSPECTRAL THEOREM: Every real symmetric matrix (A = A^T) has real eigenvalues and can be orthogonally diagonalized: A = Q D Q^T (where Q is orthogonal matrix Q^T Q = I).\n\n3. ASCII DIAGRAM OF EIGENVECTOR INVARIANCE:\n\n           y-axis\n             ^\n             |       A * v = lambda * v  (Stretched along same line)\n             |      /\n             |     * (lambda * v)\n             |    /\n             |   /  v (Eigenvector)\n             |  *\n             +-----------------> x-axis\n\n4. SOLVED NUMERICAL EXAMPLE:\nProblem: Find eigenvalues and eigenvectors of A = [[4, 2], [1, 3]], and construct diagonalizing matrix P.\n\nSolution Step-by-Step:\nStep 1: Set up Characteristic Equation det(A - lambda I) = 0:\n  det([[4 - lambda, 2], [1, 3 - lambda]]) = 0\n  (4 - lambda)(3 - lambda) - (2)(1) = 0\n  lambda^2 - 7 lambda + 12 - 2 = 0  =>  lambda^2 - 7 lambda + 10 = 0.\nStep 2: Solve quadratic equation for eigenvalues:\n  (lambda - 5)(lambda - 2) = 0  =>  lambda_1 = 5, lambda_2 = 2.\nStep 3: Find eigenvector for lambda_1 = 5:\n  (A - 5I) v = [[-1, 2], [1, -2]] [x, y]^T = [0, 0]^T.\n  -x + 2y = 0  =>  x = 2y. Choosing y = 1 => v_1 = [2, 1]^T.\nStep 4: Find eigenvector for lambda_2 = 2:\n  (A - 2I) v = [[2, 2], [1, 1]] [x, y]^T = [0, 0]^T.\n  2x + 2y = 0  =>  x = -y. Choosing y = 1 => v_2 = [-1, 1]^T.\nStep 5: Form P and D:\n  P = [[2, -1], [1, 1]], D = [[5, 0], [0, 2]].\nVerification: P D P^(-1) = A.\n\n5. PYTHON NUMPY IMPLEMENTATION:\nimport numpy as np\nA = np.array([[4, 2], [1, 3]])\neigvals, eigvecs = np.linalg.eig(A)\nprint(\"Eigenvalues:\", eigvals)\nprint(\"Eigenvectors Matrix P:\n\", eigvecs)"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Introduction to Linear Algebra",
        "author": "Gilbert Strang"
      }
    ],
    "practiceLinks": [
      {
        "title": "MIT OpenCourseWare - Eigenvalues",
        "url": "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define eigenvalue and eigenvector of a square matrix. (2 Marks)",
        "What is the characteristic equation det(A - lambda I) = 0? (2 Marks)",
        "State the Spectral Theorem for real symmetric matrices. (2 Marks)",
        "If lambda is an eigenvalue of A, prove lambda^k is an eigenvalue of A^k. (2 Marks)"
      ],
      "sixMarks": [
        "Find the eigenvalues and eigenvectors of 3x3 matrix A = [[2, 0, 0], [0, 3, 4], [0, 4, 9]]. (6 Marks)",
        "Diagonalize the symmetric matrix A = [[3, 1], [1, 3]] by finding orthogonal matrix Q such that Q^T A Q = D. (6 Marks)"
      ],
      "longAnswer": [
        "Prove that eigenvectors corresponding to distinct eigenvalues of a real symmetric matrix are mutually orthogonal. Apply this to solve system of linear differential equations dx/dt = Ax. (10 Marks)"
      ]
    }
  },
  {
    "title": "Inner Product Spaces",
    "slug": "linear-algebra-inner-product-spaces",
    "order": 9,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Generalize dot products to abstract inner product spaces, compute norms, distances, and orthogonality, construct orthonormal bases using Gram-Schmidt orthogonalization, and find orthogonal projections.",
    "subTopics": [
      "Dot Product",
      "Inner Product",
      "Norm",
      "Distance",
      "Orthogonality",
      "Orthonormal Basis",
      "Gram-Schmidt Orthogonalization",
      "Orthogonal Projection"
    ],
    "prerequisiteTitles": [
      "Eigenvalues and Eigenvectors"
    ],
    "learningObjectives": [
      "Define inner products, norms, distances, and orthogonality in Euclidean and function spaces.",
      "Apply the Gram-Schmidt orthogonalization algorithm to convert linearly independent sets into orthonormal bases.",
      "Compute orthogonal projection of vectors onto subspaces using projection matrices."
    ],
    "notes": [
      {
        "title": "Inner Products, Norms, Gram-Schmidt Orthogonalization, and Orthogonal Projections",
        "content": "1. INNER PRODUCT & NORM:\nAn inner product <u, v> on real vector space V satisfies:\n1. Positivity: <v, v> >= 0, and <v, v> = 0 iff v = 0.\n2. Symmetry: <u, v> = <v, u>.\n3. Linearity: <a u + b w, v> = a <u, v> + b <w, v>.\nNorm: ||v|| = sqrt(<v, v>). Distance: d(u, v) = ||u - v||.\nOrthogonality: u and v are orthogonal iff <u, v> = 0.\n\n2. GRAM-SCHMIDT ORTHOGONALIZATION ALGORITHM:\nGiven linearly independent set {v1, v2, ..., vn}, construct orthonormal basis {e1, e2, ..., en}:\nStep 1: u1 = v1,  e1 = u1 / ||u1||\nStep 2: u2 = v2 - <v2, e1> e1,  e2 = u2 / ||u2||\nStep k: uk = vk - sum_{j=1}^{k-1} <vk, ej> ej,  ek = uk / ||uk||\n\n3. ASCII DIAGRAM OF ORTHOGONAL PROJECTION:\n\n             v\n             ^\n             |\\\n             | \\   v - proj_W(v)  (Orthogonal residual vector)\n             |  \\\n             +-------------> Subspace W\n              proj_W(v) = <v, e1> e1\n\n4. SOLVED NUMERICAL EXAMPLE:\nProblem: Given linearly independent vectors v1 = [1, 1, 0]^T and v2 = [1, 0, 1]^T in R^3, apply Gram-Schmidt process to find orthonormal basis {e1, e2}.\n\nSolution Step-by-Step:\nStep 1: Process v1 to get e1:\n  u1 = v1 = [1, 1, 0]^T.\n  ||u1|| = sqrt(1^2 + 1^2 + 0) = sqrt(2).\n  e1 = u1 / sqrt(2) = [1/sqrt(2), 1/sqrt(2), 0]^T.\nStep 2: Compute projection of v2 onto e1:\n  <v2, e1> = (1)*(1/sqrt(2)) + (0)*(1/sqrt(2)) + (1)*(0) = 1/sqrt(2).\nStep 3: Subtract projection from v2 to get orthogonal vector u2:\n  u2 = v2 - <v2, e1> e1 = [1, 0, 1]^T - (1/sqrt(2)) * [1/sqrt(2), 1/sqrt(2), 0]^T\n  u2 = [1, 0, 1]^T - [1/2, 1/2, 0]^T = [1/2, -1/2, 1]^T.\nStep 4: Normalize u2 to get e2:\n  ||u2|| = sqrt((1/2)^2 + (-1/2)^2 + 1^2) = sqrt(1/4 + 1/4 + 1) = sqrt(6/4) = sqrt(6)/2.\n  e2 = u2 / (sqrt(6)/2) = [1/sqrt(6), -1/sqrt(6), 2/sqrt(6)]^T.\nStep 5: Verify Orthonormality:\n  <e1, e2> = (1/sqrt(2))(1/sqrt(6)) + (1/sqrt(2))(-1/sqrt(6)) + 0 = 0. Validated!\n\n5. PYTHON NUMPY IMPLEMENTATION:\nimport numpy as np\nv1 = np.array([1, 1, 0], dtype=float)\nv2 = np.array([1, 0, 1], dtype=float)\ne1 = v1 / np.linalg.norm(v1)\nu2 = v2 - np.dot(v2, e1) * e1\ne2 = u2 / np.linalg.norm(u2)\nprint(\"Orthonormal Vector e1:\", np.round(e1, 4))\nprint(\"Orthonormal Vector e2:\", np.round(e2, 4))\nprint(\"Dot Product <e1, e2>:\", round(np.dot(e1, e2), 6))"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Linear Algebra Done Right",
        "author": "Sheldon Axler"
      }
    ],
    "practiceLinks": [
      {
        "title": "Paul's Online Math Notes - Inner Product Spaces",
        "url": "https://tutorial.math.lamar.edu/Classes/LinAlg/InnerProducts.aspx"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State the 3 axioms of an inner product space. (2 Marks)",
        "What is an orthonormal basis? (2 Marks)",
        "State Cauchy-Schwarz Inequality |<u, v>| <= ||u|| * ||v||. (2 Marks)",
        "Compute dot product and angle between u = [1, 2] and v = [-2, 1]. (2 Marks)"
      ],
      "sixMarks": [
        "Apply Gram-Schmidt orthogonalization to vectors v1 = [1, 0, 1], v2 = [1, 1, 1], v3 = [0, 0, 1] to obtain orthonormal basis for R^3. (6 Marks)",
        "Find the projection matrix P that projects any vector in R^3 onto the subspace spanned by [1, 1, 1]^T. (6 Marks)"
      ],
      "longAnswer": [
        "Prove the Cauchy-Schwarz inequality and Triangle inequality in general inner product spaces. Derive the matrix expression for orthogonal projection onto subspace Col(A): P = A (A^T A)^(-1) A^T. (10 Marks)"
      ]
    }
  },
  {
    "title": "Advanced Matrix Decompositions",
    "slug": "linear-algebra-advanced-matrix-decompositions",
    "order": 10,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master matrix factorizations including LU, QR, Cholesky, and Singular Value Decomposition (SVD), and examine their fundamental applications in dimensionality reduction and Principal Component Analysis (PCA).",
    "subTopics": [
      "LU Decomposition",
      "QR Decomposition",
      "Cholesky Decomposition",
      "Singular Value Decomposition (SVD)",
      "Introduction to Principal Component Analysis (PCA)"
    ],
    "prerequisiteTitles": [
      "Inner Product Spaces"
    ],
    "learningObjectives": [
      "Derive and compute QR decompositions using Gram-Schmidt or Householder transformations.",
      "Perform Singular Value Decomposition A = U Sigma V^T for arbitrary rectangular matrices.",
      "Understand the mathematical link between SVD, covariance matrices, and Principal Component Analysis (PCA)."
    ],
    "notes": [
      {
        "title": "Advanced Factorizations: LU, QR, Cholesky, SVD, and PCA Foundations",
        "content": "1. FACTORIZATION OVERVIEW:\n- QR Decomposition: A = Q R (Q is orthogonal, R is upper triangular).\n- Cholesky Decomposition: A = L L^T (For symmetric positive-definite matrices).\n- Singular Value Decomposition (SVD): A = U Sigma V^T (For any m x n matrix).\n  U (m x m) = Left singular vectors (Eigenvectors of A A^T).\n  Sigma (m x n) = Singular values sigma_i = sqrt(lambda_i(A^T A)).\n  V^T (n x n) = Right singular vectors (Eigenvectors of A^T A).\n\n2. PCA MATHEMATICAL LINK:\nFor centered data matrix X (n x p), Covariance matrix C = (1/n) X^T X.\nPrincipal components are the eigenvectors of C, which correspond to right singular vectors V from SVD of X.\n\n3. ASCII DIAGRAM OF SVD STRUCTURE:\n\n     [   A   ]   =   [   U   ]   [  Sigma  ]   [   V^T   ]\n      (m x n)         (m x m)      (m x n)       (n x n)\n     Data Matrix     Left Singular  Singular     Right Singular\n                      Vectors       Values       Vectors\n\n4. SOLVED NUMERICAL EXAMPLE:\nProblem: Compute Singular Value Decomposition (SVD) of 2x2 matrix A = [[3, 0], [0, -2]].\n\nSolution Step-by-Step:\nStep 1: Compute A^T A:\n  A^T A = [[3, 0], [0, -2]] * [[3, 0], [0, -2]] = [[9, 0], [0, 4]].\nStep 2: Find singular values sigma_i = sqrt(lambda_i(A^T A)):\n  Eigenvalues of A^T A: lambda_1 = 9, lambda_2 = 4.\n  Singular values: sigma_1 = sqrt(9) = 3, sigma_2 = sqrt(4) = 2.\n  Sigma = [[3, 0], [0, 2]].\nStep 3: Right singular vectors V (Eigenvectors of A^T A):\n  v_1 = [1, 0]^T, v_2 = [0, 1]^T. Matrix V = [[1, 0], [0, 1]].\nStep 4: Left singular vectors u_i = (1/sigma_i) A v_i:\n  u_1 = (1/3) * A * [1, 0]^T = (1/3) * [3, 0]^T = [1, 0]^T.\n  u_2 = (1/2) * A * [0, 1]^T = (1/2) * [0, -2]^T = [0, -1]^T.\n  U = [[1, 0], [0, -1]].\nStep 5: Verify A = U Sigma V^T:\n  U Sigma V^T = [[1, 0], [0, -1]] * [[3, 0], [0, 2]] * [[1, 0], [0, 1]] = [[3, 0], [0, -2]] = A. Validated!\n\n5. PYTHON NUMPY IMPLEMENTATION:\nimport numpy as np\nA = np.array([[3, 0], [0, -2]])\nU, S, Vt = np.linalg.svd(A)\nprint(\"U Matrix:\n\", U)\nprint(\"Singular Values S:\", S)\nprint(\"V^T Matrix:\n\", Vt)"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Matrix Computations",
        "author": "Gene H. Golub, Charles F. Van Loan"
      }
    ],
    "practiceLinks": [
      {
        "title": "MIT OpenCourseWare - SVD and PCA",
        "url": "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define QR decomposition of a matrix A. (2 Marks)",
        "What is Cholesky decomposition and for what class of matrices is it applicable? (2 Marks)",
        "Define Singular Value Decomposition (SVD) A = U Sigma V^T. (2 Marks)",
        "How are singular values related to eigenvalues of A^T A? (2 Marks)"
      ],
      "sixMarks": [
        "Compute the QR decomposition of matrix A = [[1, 1], [1, 0], [0, 1]] using Gram-Schmidt process. (6 Marks)",
        "Perform SVD on rectangular matrix A = [[1, 1], [0, 1], [1, 0]]. (6 Marks)"
      ],
      "longAnswer": [
        "Derive the Singular Value Decomposition (SVD) theorem for any m x n matrix A. Explain how low-rank SVD approximation truncates singular values to minimize Frobenius reconstruction error, and detail its application in PCA. (10 Marks)"
      ]
    }
  },
  {
    "title": "Numerical Linear Algebra",
    "slug": "linear-algebra-numerical-linear-algebra",
    "order": 11,
    "estimatedHours": 4,
    "difficulty": "Advanced",
    "description": "Analyze floating-point representation, numerical stability, matrix conditioning, and condition numbers, and master iterative numerical algorithms including Jacobi and Gauss-Seidel methods.",
    "subTopics": [
      "Floating Point Representation",
      "Numerical Stability",
      "Matrix Conditioning",
      "Iterative Methods",
      "Jacobi Method",
      "Gauss-Seidel Method"
    ],
    "prerequisiteTitles": [
      "Advanced Matrix Decompositions"
    ],
    "learningObjectives": [
      "Calculate matrix condition numbers ||A|| ||A^(-1)|| to quantify sensitivity to numerical perturbations.",
      "Implement iterative linear solvers (Jacobi and Gauss-Seidel) and analyze convergence criteria.",
      "Assess floating-point roundoff errors and numerical stability in computational linear algebra."
    ],
    "notes": [
      {
        "title": "Numerical Stability, Matrix Conditioning, and Iterative Solvers (Jacobi & Gauss-Seidel)",
        "content": "1. CONDITION NUMBER & ILL-CONDITIONING:\nThe condition number k(A) = ||A|| * ||A^(-1)|| measures the sensitivity of solution x in Ax = b to perturbations in b or A.\nRelative Error Bound: ||delta x|| / ||x|| <= k(A) * (||delta b|| / ||b||).\n- Well-conditioned: k(A) approx 1.\n- Ill-conditioned: k(A) >> 1 (Small inputs cause massive output errors).\n\n2. ITERATIVE SOLVERS (JACOBI VS GAUSS-SEIDEL):\nFor strictly diagonally dominant systems (|a_ii| > sum_{j!=i} |a_ij|):\n- Jacobi Method: Uses previous iteration values x^(k) to compute all x^(k+1).\n- Gauss-Seidel Method: Uses newly updated x_j^(k+1) values immediately within the same iteration, converging twice as fast as Jacobi.\n\n3. ASCII FLOW DIAGRAM FOR ITERATIVE SOLVER:\n\n    x^(0) Initial Guess ===>  x_i^(k+1) = (b_i - sum_{j!=i} a_ij * x_j) / a_ii\n                                    |\n                                    v\n                           Check ||x^(k+1) - x^(k)|| < Tolerance?\n                           /                     \\\n                      [NO]                      [YES]\n                        |                         |\n               Next Iteration (k+1)           Converged Solution x*\n\n4. SOLVED NUMERICAL EXAMPLE:\nProblem: Perform 2 iterations of Gauss-Seidel method for system:\n  4x + y = 5\n  x + 3y = 4\nStart with initial guess x^(0) = 0, y^(0) = 0.\n\nSolution Step-by-Step:\nStep 1: Express iteration formulas:\n  x^(k+1) = (5 - y^(k)) / 4\n  y^(k+1) = (4 - x^(k+1)) / 3\nStep 2: Iteration 1 (k = 0):\n  x^(1) = (5 - 0) / 4 = 1.25\n  y^(1) = (4 - 1.25) / 3 = 2.75 / 3 = 0.9167\nStep 3: Iteration 2 (k = 1):\n  x^(2) = (5 - 0.9167) / 4 = 4.0833 / 4 = 1.0208\n  y^(2) = (4 - 1.0208) / 3 = 2.9792 / 3 = 0.9931\nExact Solution is x = 1, y = 1. After just 2 iterations, (1.0208, 0.9931) is very close!\n\n5. PYTHON NUMPY IMPLEMENTATION:\nimport numpy as np\nA = np.array([[4, 1], [1, 3]], dtype=float)\nb = np.array([5, 4], dtype=float)\ncond_number = np.linalg.cond(A)\nprint(\"Condition Number k(A):\", round(cond_number, 4))\n# Gauss-Seidel implementation\nx = np.zeros(2)\nfor itr in range(5):\n    x[0] = (b[0] - A[0, 1] * x[1]) / A[0, 0]\n    x[1] = (b[1] - A[1, 0] * x[0]) / A[1, 1]\n    print(f\"Iteration {itr+1}: x = {np.round(x, 4)}\")"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Numerical Linear Algebra",
        "author": "Lloyd N. Trefethen, David Bau III"
      }
    ],
    "practiceLinks": [
      {
        "title": "Paul's Online Math Notes - Iterative Solvers",
        "url": "https://tutorial.math.lamar.edu/Classes/LinAlg/IterativeMethods.aspx"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is condition number k(A) of a matrix? (2 Marks)",
        "Define strict diagonal dominance and its importance in iterative methods. (2 Marks)",
        "Compare Jacobi and Gauss-Seidel iterative methods. (2 Marks)",
        "What causes floating-point roundoff errors in matrix Gaussian elimination? (2 Marks)"
      ],
      "sixMarks": [
        "Solve 3x3 system: 10x + y + z = 12, 2x + 10y + z = 13, x + y + 5z = 7 using Jacobi iteration method for 3 iterations starting from x0 = [0, 0, 0]^T. (6 Marks)",
        "Compute L2 norm condition number of matrix A = [[1, 1], [1, 1.001]]. Explain why this system is ill-conditioned. (6 Marks)"
      ],
      "longAnswer": [
        "Analyze numerical stability of Gaussian elimination with and without partial pivoting. Prove the convergence condition for Gauss-Seidel method using spectral radius rho(M) < 1 of iteration matrix M = -(D + L)^(-1) U. (10 Marks)"
      ]
    }
  },
  {
    "title": "Applications in Computer Science",
    "slug": "linear-algebra-applications-in-computer-science",
    "order": 12,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Apply linear algebra principles across computer science domains including computer graphics 3D transformations, machine learning vector spaces, computer vision filtering, robotics kinematics, and recommendation systems.",
    "subTopics": [
      "Computer Graphics",
      "Machine Learning",
      "Artificial Intelligence",
      "Data Science",
      "Image Processing",
      "Computer Vision",
      "Robotics",
      "Cryptography",
      "Recommendation Systems"
    ],
    "prerequisiteTitles": [
      "Numerical Linear Algebra"
    ],
    "learningObjectives": [
      "Formulate 2D and 3D affine transformations (translation, rotation, scaling) using 4x4 homogeneous matrices.",
      "Map machine learning concepts like embeddings, feature spaces, and loss gradients to linear algebra operations.",
      "Apply low-rank matrix factorization to build collaborative filtering recommendation engines."
    ],
    "notes": [
      {
        "title": "Linear Algebra in CS: Graphics Transformations, ML Embeddings, and Graph PageRank",
        "content": "1. COMPUTER GRAPHICS & HOMOGENEOUS COORDINATES:\nIn 3D graphics, 4x4 homogeneous transformation matrices combine translation, rotation, and scaling into single matrix multiplications.\nAffine Transformation Matrix M:\n  [ R_3x3  | t_3x1 ]\n  [ 0_1x3  |   1   ]\n\n2. MACHINE LEARNING & EMBEDDINGS:\nWord embeddings (e.g. Word2Vec, LLM tokens) represent semantic concepts as dense vectors in R^d. Cosine similarity computes semantic proximity:\n  similarity(u, v) = <u, v> / (||u|| * ||v||).\n\n3. ASCII DIAGRAM OF 4x4 HOMOGENEOUS MATRIX:\n\n    [ r11  r12  r13 | tx ]   [ 3x3 Rotation Submatrix  | 3x1 Translation Vector ]\n    [ r21  r22  r23 | ty ] = [ ------------------------|----------------------- ]\n    [ r31  r32  r33 | tz ]   [ Perspective Row (0 0 0) | Scale Factor (1)       ]\n    [  0    0    0  |  1 ]\n\n4. SOLVED NUMERICAL EXAMPLE:\nProblem: Transform 2D point P = (2, 3)^T by rotating counter-clockwise by 90 degrees and translating by vector t = (4, -1)^T using 3x3 homogeneous matrices.\n\nSolution Step-by-Step:\nStep 1: Express Point P in Homogeneous Coordinates:\n  P_homo = [2, 3, 1]^T.\nStep 2: Construct Rotation Matrix R (90 deg):\n  cos(90) = 0, sin(90) = 1.\n  R_homo = [[0, -1, 0], [1, 0, 0], [0, 0, 1]].\nStep 3: Construct Translation Matrix T:\n  T_homo = [[1, 0, 4], [0, 1, -1], [0, 0, 1]].\nStep 4: Combine into single transformation M = T * R:\n  M = [[1, 0, 4], [0, 1, -1], [0, 0, 1]] * [[0, -1, 0], [1, 0, 0], [0, 0, 1]]\n  M = [[0, -1, 4], [1, 0, -1], [0, 0, 1]].\nStep 5: Apply M to P_homo:\n  P_transformed = M * [2, 3, 1]^T\n  x' = 0(2) - 1(3) + 4(1) = 1\n  y' = 1(2) + 0(3) - 1(1) = 1\n  w' = 1.\nResulting 2D point is (1, 1).\n\n5. PYTHON NUMPY IMPLEMENTATION:\nimport numpy as np\nM = np.array([[0, -1, 4], [1, 0, -1], [0, 0, 1]])\nP = np.array([2, 3, 1])\nP_trans = np.dot(M, P)\nprint(\"Transformed Point (x, y):\", P_trans[:2])"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Mathematics for Machine Learning",
        "author": "Marc Peter Deisenroth, A. Aldo Faisal, Cheng Soon Ong"
      }
    ],
    "practiceLinks": [
      {
        "title": "Stanford CS229 - Linear Algebra Review",
        "url": "https://cs229.stanford.edu/section/cs229-linalg.pdf"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Why are homogeneous coordinates used in 3D computer graphics? (2 Marks)",
        "Define cosine similarity between two vector embeddings u and v. (2 Marks)",
        "How is matrix factorization used in movie recommendation engines? (2 Marks)",
        "Write the 2D rotation matrix for angle theta. (2 Marks)"
      ],
      "sixMarks": [
        "Construct 4x4 matrix for 3D rotation of 45 degrees about z-axis followed by translation by [3, -2, 5]^T. Apply it to vertex P = [1, 1, 0, 1]^T. (6 Marks)",
        "Explain Hill Cipher encryption and decryption using matrix multiplication modulo 26. Encrypt message 'NO' using key [[3, 3], [2, 5]]. (6 Marks)"
      ],
      "longAnswer": [
        "Design the complete mathematical pipeline for a collaborative filtering recommendation engine using Low-Rank Matrix Factorization (R = P Q^T). Derive SGD update rules for latent factors P and Q. (10 Marks)"
      ]
    }
  },
  {
    "title": "Optimization and Linear Algebra",
    "slug": "linear-algebra-optimization-and-linear-algebra",
    "order": 13,
    "estimatedHours": 4,
    "difficulty": "Advanced",
    "description": "Study mathematical optimization grounded in linear algebra, covering ordinary least squares estimation, linear regression mathematics, convex set geometry, gradient derivations, and matrix calculus.",
    "subTopics": [
      "Least Squares Method",
      "Linear Regression Mathematics",
      "Convex Sets",
      "Gradient Concepts",
      "Matrix Calculus Basics"
    ],
    "prerequisiteTitles": [
      "Applications in Computer Science"
    ],
    "learningObjectives": [
      "Derive the closed-form normal equation beta = (X^T X)^(-1) X^T y for ordinary least squares linear regression.",
      "Perform matrix calculus derivations for gradients and Hessians of scalar loss functions with vector arguments.",
      "Formulate convex optimization problems using linear matrix inequalities and hyperplane geometric boundaries."
    ],
    "notes": [
      {
        "title": "Least Squares Optimization, Matrix Calculus, and Linear Regression Derivations",
        "content": "1. ORDINARY LEAST SQUARES (OLS):\nGiven design matrix X (n x p) and target vector y (n x 1), we find parameter vector beta (p x 1) minimizing Sum of Squared Errors loss:\n  Loss L(beta) = ||y - X beta||^2 = (y - X beta)^T (y - X beta).\n\n2. DERIVATION OF NORMAL EQUATION:\nExpand loss:\n  L(beta) = y^T y - 2 beta^T X^T y + beta^T X^T X beta.\nTake gradient with respect to beta:\n  grad_beta L(beta) = -2 X^T y + 2 X^T X beta = 0\n  ===> (X^T X) beta = X^T y\nCLOSED-FORM SOLUTION:\n  beta_hat = (X^T X)^(-1) X^T y.\n\n3. ASCII DIAGRAM OF LEAST SQUARES GEOMETRY:\n\n             y (Target Vector)\n             ^\n             |\\\n     y - X*b | \\   Residual Vector e (Orthogonal to Col(X))\n             |  \\\n             +-------------> Col(X) (Column Space of Design Matrix X)\n              X*beta_hat (Orthogonal Projection of y onto Col(X))\n\n4. SOLVED NUMERICAL EXAMPLE:\nProblem: Fit a line y = beta_0 + beta_1 * x to points (1, 2), (2, 3), (3, 5) using OLS normal equations.\n\nSolution Step-by-Step:\nStep 1: Construct Design Matrix X and Target y:\n  X = [[1, 1], [1, 2], [1, 3]], y = [2, 3, 5]^T.\nStep 2: Compute X^T X:\n  X^T = [[1, 1, 1], [1, 2, 3]].\n  X^T X = [[1+1+1, 1+2+3], [1+2+3, 1+4+9]] = [[3, 6], [6, 14]].\nStep 3: Compute X^T y:\n  X^T y = [2 + 3 + 5, 1(2) + 2(3) + 3(5)]^T = [10, 23]^T.\nStep 4: Invert (X^T X):\n  det(X^T X) = (3)(14) - (6)(6) = 42 - 36 = 6.\n  (X^T X)^(-1) = (1/6) * [[14, -6], [-6, 3]].\nStep 5: Solve for beta_hat = (X^T X)^(-1) X^T y:\n  beta_hat = (1/6) * [[14(10) - 6(23)], [-6(10) + 3(23)]]\n  beta_hat = (1/6) * [[140 - 138], [-60 + 69]] = (1/6) * [[2], [9]] = [1/3, 1.5]^T.\nLine equation: y = 0.3333 + 1.5 x.\n\n5. PYTHON NUMPY IMPLEMENTATION:\nimport numpy as np\nX = np.array([[1, 1], [1, 2], [1, 3]])\ny = np.array([2, 3, 5])\nbeta = np.linalg.inv(X.T @ X) @ X.T @ y\nprint(\"OLS Parameter Vector (beta_0, beta_1):\", np.round(beta, 4))"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Convex Optimization",
        "author": "Stephen Boyd, Lieven Vandenberghe"
      }
    ],
    "practiceLinks": [
      {
        "title": "EE364a: Convex Optimization I",
        "url": "https://web.stanford.edu/class/ee364a/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State the Ordinary Least Squares (OLS) normal equation. (2 Marks)",
        "What is a convex set? Give an example of a convex and non-convex set. (2 Marks)",
        "State the gradient rule for quadratic form f(x) = x^T A x. (2 Marks)",
        "Explain why X^T X must be invertible for a unique OLS solution. (2 Marks)"
      ],
      "sixMarks": [
        "Derive the closed-form solution beta = (X^T X)^(-1) X^T y by differentiating scalar loss L(beta) = ||y - X beta||^2. (6 Marks)",
        "Find the least-squares line fitting data points (0, 1), (1, 3), (2, 4), (3, 4). Compute residual sum of squares. (6 Marks)"
      ],
      "longAnswer": [
        "Formulate Ridge Regression (L2 regularization) loss L(beta) = ||y - X beta||^2 + lambda ||beta||^2. Derive its closed-form solution beta_ridge = (X^T X + lambda I)^(-1) X^T y and explain how lambda guarantees invertibility even when X^T X is singular. (10 Marks)"
      ]
    }
  },
  {
    "title": "Programming with Linear Algebra",
    "slug": "linear-algebra-programming-with-linear-algebra",
    "order": 14,
    "estimatedHours": 4,
    "difficulty": "Advanced",
    "description": "Build practical computational proficiency using Python and NumPy for matrix operations, system solving, eigenvalue computations, matrix visualization with Matplotlib, and performance optimization.",
    "subTopics": [
      "NumPy Matrix Operations",
      "Matrix Programming in Python",
      "Solving Linear Systems in Python",
      "Eigenvalue Computation",
      "Matrix Visualization",
      "Practical Coding Examples"
    ],
    "prerequisiteTitles": [
      "Optimization and Linear Algebra"
    ],
    "learningObjectives": [
      "Implement vectorized matrix arithmetic, slicing, broadcasting, and indexing using NumPy.",
      "Solve linear systems and perform decompositions (LU, QR, SVD, Eigen) using numpy.linalg scipy modules.",
      "Visualize linear transformations, vector fields, and matrix heatmaps using Python graphics libraries."
    ],
    "notes": [
      {
        "title": "NumPy Matrix Operations, System Solvers, and Performance Optimization in Python",
        "content": "1. NUMPY DATA ARCHITECTURE & BROADCASTING:\nNumPy arrays (ndarray) store homogeneous elements in contiguous memory blocks. Operations are vectorized via underlying C/Fortran libraries (BLAS/LAPACK).\nBroadcasting allows operating on arrays with different shapes by stretching smaller dimensions automatically.\n\n2. CORE NUMPY LINALG FUNCTIONS:\n- System Solver: np.linalg.solve(A, b) (Faster and more stable than inv(A) @ b)\n- Eigen Decomposition: np.linalg.eig(A) or np.linalg.eigh(A) (for symmetric)\n- SVD: U, S, Vt = np.linalg.svd(A)\n- Matrix Multiplication: A @ B or np.matmul(A, B)\n\n3. ASCII MEMORY & BROADCASTING LAYOUT:\n\n    Array A (3x1): [ 10 ]     Array B (1x3): [ 1  2  3 ]\n                   [ 20 ]\n                   [ 30 ]\n                            Broadcast Output (3x3):\n                         [ 11  12  13 ]\n                         [ 21  22  23 ]\n                         [ 31  32  33 ]\n\n4. SOLVED COMPUTATIONAL CODE EXAMPLE:\nProblem: Compare execution time and numerical accuracy of solving Ax = b using np.linalg.solve vs manual matrix inversion np.linalg.inv(A) @ b for 500x500 matrix.\n\nSolution Python Code Step-by-Step:\nimport numpy as np\nimport time\n\n# Step 1: Generate random 500x500 matrix A and vector b\nnp.random.seed(42)\nN = 500\nA = np.random.rand(N, N) + N * np.eye(N) # Diagonally dominant\nb = np.random.rand(N)\n\n# Step 2: Method 1 - np.linalg.solve()\nt0 = time.time()\nx_solve = np.linalg.solve(A, b)\nt_solve = time.time() - t0\n\n# Step 3: Method 2 - np.linalg.inv() @ b\nt0 = time.time()\nx_inv = np.linalg.inv(A) @ b\nt_inv = time.time() - t0\n\n# Step 4: Compare Norm Difference\ndiff = np.linalg.norm(x_solve - x_inv)\nprint(f\"solve() time: {t_solve:.5f} sec\")\nprint(f\"inv() time:   {t_inv:.5f} sec\")\nprint(f\"Solution difference norm: {diff:.2e}\")\n\n5. OUTPUT RESULTS:\nsolve() time: 0.00412 sec\ninv() time:   0.01280 sec\nSolution difference norm: 1.24e-14\nResult: np.linalg.solve() is ~3x faster and numerically more stable."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Python for Data Analysis",
        "author": "Wes McKinney"
      }
    ],
    "practiceLinks": [
      {
        "title": "NumPy Linear Algebra Documentation",
        "url": "https://numpy.org/doc/stable/reference/routines.linalg.html"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Why is np.linalg.solve(A, b) preferred over np.linalg.inv(A) @ b in Python? (2 Marks)",
        "Explain NumPy vector broadcasting with a 2D example. (2 Marks)",
        "What is the difference between np.dot() and matrix multiplication operator @? (2 Marks)",
        "Which NumPy function is optimized for real symmetric matrices? (2 Marks)"
      ],
      "sixMarks": [
        "Write a Python function using NumPy to compute the projection matrix P onto column space of any matrix A and verify P^2 = P. (6 Marks)",
        "Write a Python script to plot the transformation of a 2D unit circle under matrix A = [[2, 1], [0.5, 3]] using Matplotlib. (6 Marks)"
      ],
      "longAnswer": [
        "Write a complete Python class MatrixToolkit implementing custom methods for: (1) LU Decomposition, (2) Gram-Schmidt Orthonormalization, and (3) Power Iteration for dominant eigenvalue calculation. (10 Marks)"
      ]
    }
  },
  {
    "title": "Projects and Case Studies",
    "slug": "linear-algebra-projects-and-case-studies",
    "order": 15,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Synthesize theoretical knowledge through real-world engineering case studies: image compression using SVD, Eigenfaces for face recognition, Google PageRank power iteration, and network graph adjacency analysis.",
    "subTopics": [
      "Image Compression Using SVD",
      "Face Recognition Basics",
      "Recommendation System Mathematics",
      "Google's PageRank Algorithm",
      "Network Analysis",
      "Machine Learning Applications"
    ],
    "prerequisiteTitles": [
      "Programming with Linear Algebra"
    ],
    "learningObjectives": [
      "Execute image compression and low-rank approximation by truncating SVD singular value matrices.",
      "Implement Eigenfaces algorithm for facial feature extraction and pattern recognition using covariance matrices.",
      "Derive and simulate Google's PageRank stationary distribution vector via power iteration on stochastic transition matrices."
    ],
    "notes": [
      {
        "title": "Real-World Projects: SVD Image Compression, Eigenfaces, and Google PageRank Algorithm",
        "content": "1. GOOGLE PAGERANK ALGORITHM:\nPageRank models web browsing as a Markov chain. The web is represented by adjacency matrix A. Transition probability matrix M is modified with damping factor d (typically 0.85):\n  P = d * M + ((1 - d) / N) * E (where E is all-ones matrix).\nThe PageRank vector r satisfies stationary distribution equation P r = r (principal eigenvector for lambda = 1).\n\n2. SVD IMAGE COMPRESSION:\nAn image matrix A (m x n) decomposed as A = sum_{i=1}^r sigma_i u_i v_i^T is truncated to top-k rank matrix A_k = sum_{i=1}^k sigma_i u_i v_i^T. Compression ratio = (k * (m + n + 1)) / (m * n).\n\n3. ASCII PAGERANK WEB GRAPH DIAGRAM:\n\n           +-----> [ Page A ] <-----+\n           |           |            |\n           |           v            |\n       [ Page C ] <--- [ Page B ] ---+\n\n4. SOLVED NUMERICAL EXAMPLE:\nProblem: Perform 1 iteration of Power Method to compute PageRank vector for a 3-page web graph with transition matrix M = [[0, 0.5, 1], [1, 0, 0], [0, 0.5, 0]], damping d = 0.85, initial r^(0) = [1/3, 1/3, 1/3]^T.\n\nSolution Step-by-Step:\nStep 1: Compute Damping Matrix P = 0.85 * M + (0.15 / 3) * [[1,1,1],[1,1,1],[1,1,1]]:\n  P_11 = 0.85(0) + 0.05 = 0.05,  P_12 = 0.85(0.5) + 0.05 = 0.475,  P_13 = 0.85(1) + 0.05 = 0.90\n  P_21 = 0.85(1) + 0.05 = 0.90,  P_22 = 0.85(0) + 0.05 = 0.05,   P_23 = 0.85(0) + 0.05 = 0.05\n  P_31 = 0.85(0) + 0.05 = 0.05,  P_32 = 0.85(0.5) + 0.05 = 0.475,  P_33 = 0.85(0.5) + 0.05 = 0.05\nStep 2: Multiply P * r^(0):\n  r_1^(1) = 0.05(1/3) + 0.475(1/3) + 0.90(1/3) = (0.05 + 0.475 + 0.90) / 3 = 1.425 / 3 = 0.475\n  r_2^(1) = 0.90(1/3) + 0.05(1/3) + 0.05(1/3) = (0.90 + 0.05 + 0.05) / 3 = 1.000 / 3 = 0.3333\n  r_3^(1) = 0.05(1/3) + 0.475(1/3) + 0.05(1/3) = (0.05 + 0.475 + 0.05) / 3 = 0.575 / 3 = 0.1917\nStep 3: State PageRank vector r^(1):\n  r^(1) = [0.475, 0.3333, 0.1917]^T. (Sum = 1.000).\nPage A holds highest rank after 1 iteration.\n\n5. PYTHON NUMPY IMPLEMENTATION:\nimport numpy as np\nM = np.array([[0, 0.5, 1], [1, 0, 0], [0, 0.5, 0]])\nd = 0.85\nN = 3\nP = d * M + ((1 - d) / N) * np.ones((N, N))\nr = np.ones(N) / N\nfor itr in range(20):\n    r = P @ r\nprint(\"Converged PageRank Vector:\", np.round(r, 4))"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Data-Driven Science and Engineering",
        "author": "Steven L. Brunton, J. Nathan Kutz"
      }
    ],
    "practiceLinks": [
      {
        "title": "PageRank Algorithm Tutorial",
        "url": "https://en.wikipedia.org/wiki/PageRank"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain how SVD low-rank truncation compresses image data. (2 Marks)",
        "What is the damping factor d in Google PageRank algorithm? (2 Marks)",
        "What are Eigenfaces in facial recognition? (2 Marks)",
        "How is graph adjacency matrix used in network centrality analysis? (2 Marks)"
      ],
      "sixMarks": [
        "Given 4-node web graph with adjacency links, construct stochastic transition matrix M and perform 2 iterations of power method to determine PageRank values. (6 Marks)",
        "Derive the memory compression ratio formula for k-rank SVD truncation of an m x n image matrix. Calculate ratio for 1000x1000 image with k = 20. (6 Marks)"
      ],
      "longAnswer": [
        "Develop an end-to-end case study on Eigenfaces facial recognition system. Detail mean centering of face vector space, computation of surrogate covariance matrix L = A^T A, extraction of eigenfaces u_i = A v_i, and Euclidean classification in low-dimensional subspace. (10 Marks)"
      ]
    }
  }
];
