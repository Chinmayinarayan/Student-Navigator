module.exports = [
  {
    "title": "Introduction to Discrete Mathematics",
    "slug": "discrete-mathematics-introduction",
    "order": 1,
    "estimatedHours": 3,
    "difficulty": "Beginner",
    "description": "Understand discrete mathematical foundations: Continuous vs Discrete domain differences, importance in CS (data structures, logic, cryptography), applications, mathematical reasoning, and discrete problem-solving strategies.",
    "subTopics": [
      "Introduction to Discrete Mathematics",
      "Continuous vs Discrete Mathematics",
      "Importance in Computer Science",
      "Applications of Discrete Mathematics",
      "Mathematical Reasoning",
      "Problem Solving Using Discrete Mathematics"
    ],
    "prerequisiteTitles": [],
    "learningObjectives": [
      "Differentiate Continuous Mathematics (real numbers, calculus, continuous curves) and Discrete Mathematics (integers, graphs, logic, discrete structures).",
      "Identify discrete math applications in CS: Data structures, database query processing, compiler syntax parsing, and network routing.",
      "Apply structured mathematical reasoning to break complex problems into discrete states."
    ],
    "notes": [
      {
        "title": "Continuous vs Discrete Mathematics & CS Applications",
        "content": "INTRODUCTION TO DISCRETE MATHEMATICS\n\n1. Continuous vs Discrete Mathematics:\n   - Continuous Mathematics: Deals with continuous variables over real numbers $mathbb{R}$ (Calculus, Differential Equations, Fluid Dynamics). Smooth transitions.\n   - Discrete Mathematics: Deals with distinct, separated values over integers $mathbb{Z}$ or finite sets (Set Theory, Combinatorics, Graph Theory, Mathematical Logic). Step-by-step state transitions.\n\n2. Core Applications in Computer Science:\n   - Cryptography: Number Theory (Modular Arithmetic, Primes) forms RSA/ECC encryption foundation.\n   - Database Theory: Relational Algebra and Tuple Calculus based on Set Theory and Predicate Logic.\n   - Artificial Intelligence: Probabilistic graphical models and propositional logic theorem provers."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Discrete Mathematics and Its Applications",
        "author": "Kenneth H. Rosen"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Discrete Mathematics Tutorial",
        "url": "https://www.geeksforgeeks.org/discrete-mathematics-tutorial/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Compare Continuous Mathematics and Discrete Mathematics on domain and applications. (2 Marks)",
        "State 4 major subfields of Computer Science that rely on Discrete Mathematics. (2 Marks)",
        "What is Mathematical Reasoning in discrete problem solving? (2 Marks)"
      ],
      "sixMarks": [
        "Explain the foundational role of Discrete Mathematics in Computer Science detailing Logic, Set Theory, Graph Theory, and Combinatorics. (6 Marks)",
        "Describe discrete problem-solving strategies: Abstraction, State Space Modeling, Invariant Identification, and Exhaustive Proofs. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Discrete Mathematics Foundations. Detail digital discrete computing history (Turing Machines, Shannon's Boolean algebra application to switching circuits), continuous vs discrete modeling trade-offs, and computational complexity bounds. (10 Marks)"
      ]
    }
  },
  {
    "title": "Logic and Propositional Calculus",
    "slug": "discrete-mathematics-logic-and-propositional-calculus",
    "order": 2,
    "estimatedHours": 5,
    "difficulty": "Beginner",
    "description": "Master Propositional Logic: Propositions, Logical Connectives ($land, lor, \neg, oplus, \to, leftrightarrow$), Truth Tables, Logical Equivalences, Tautologies, Contradictions, Contingencies, Laws of Logic, Predicates, and Quantifiers ($\forall, exists$).",
    "subTopics": [
      "Introduction to Logic",
      "Propositions",
      "Logical Connectives (AND, OR, NOT, XOR, Implication, Biconditional)",
      "Truth Tables",
      "Logical Equivalence",
      "Tautology",
      "Contradiction",
      "Contingency",
      "Laws of Logic",
      "Predicate Logic",
      "Quantifiers (Universal Quantifier, Existential Quantifier)"
    ],
    "prerequisiteTitles": [
      "Introduction to Discrete Mathematics"
    ],
    "learningObjectives": [
      "Evaluate Truth Tables for logical connectives: Negation ($\neg$), Conjunction ($land$), Disjunction ($lor$), XOR ($oplus$), Implication ($p \to q equiv \neg p lor q$), Biconditional ($p leftrightarrow q$).",
      "Identify Tautology (always true), Contradiction (always false), and Contingency (neither).",
      "Translate natural language statements into Predicate Logic with Universal ($\forall$) and Existential ($exists$) quantifiers."
    ],
    "notes": [
      {
        "title": "Implication Truth Table & Laws of Logic Reference",
        "content": "PROPOSITIONAL LOGIC & CONNECTIVES\n\n1. Implication ($p \to q$) Truth Table:\n   - True in all cases EXCEPT when $p$ is True and $q$ is False ($T \to F equiv F$).\n   - Logical Equivalence: $p \to q equiv \neg p lor q$.\n   - Contrapositive: $\neg q \to \neg p$ (Equivalent to $p \to q$).\n   - Converse: $q \to p$. Inverse: $\neg p \to \neg q$.\n\n2. Essential Laws of Logic:\n   - De Morgan's Laws: $\neg(p land q) equiv \neg p lor \neg q$, quad $\neg(p lor q) equiv \neg p land \neg q$\n   - Distributive Laws: $p land (q lor r) equiv (p land q) lor (p land r)$\n   - Double Negation: $\neg(\neg p) equiv p$\n\n3. Predicate Quantifiers:\n   - Universal Quantifier ($\forall x P(x)$): True for ALL elements $x$ in domain.\n   - Existential Quantifier ($exists x P(x)$): True for AT LEAST ONE element $x$ in domain.\n   - Negation of Quantifiers: $\neg(\forall x P(x)) equiv exists x \neg P(x)$, quad $\neg(exists x P(x)) equiv \forall x \neg P(x)$."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Discrete Mathematics and Its Applications",
        "author": "Kenneth H. Rosen"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Propositional Logic Practice",
        "url": "https://www.geeksforgeeks.org/propositional-logic/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define Tautology, Contradiction, and Contingency with examples. (2 Marks)",
        "State De Morgan's Laws for Propositional Logic. (2 Marks)",
        "Negate the quantified statement: $\forall x exists y (P(x, y) \to Q(x, y))$. (2 Marks)"
      ],
      "sixMarks": [
        "Construct Truth Table for expression $(p \to q) land (q \to r) \to (p \to r)$ and prove that it is a Tautology. (6 Marks)",
        "Translate natural language statements into Predicate Calculus using quantifiers: (a) Every computer science student takes discrete math, (b) Some students do not pass discrete math. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Propositional & Predicate Calculus. Detail Rules of Inference (Modus Ponens, Modus Tollens, Hypothetical Syllogism, Disjunctive Syllogism), Resolution principle, Normal Forms (CNF, DNF), and automated theorem proving algorithms. (10 Marks)"
      ]
    }
  },
  {
    "title": "Proof Techniques",
    "slug": "discrete-mathematics-proof-techniques",
    "order": 3,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master mathematical proof strategies: Direct Proof, Proof by Contradiction, Proof by Contrapositive, Mathematical Induction (Weak & Strong Induction), Structural Induction, and Counterexamples.",
    "subTopics": [
      "Introduction to Mathematical Proofs",
      "Direct Proof",
      "Proof by Contradiction",
      "Proof by Contrapositive",
      "Mathematical Induction",
      "Strong Induction",
      "Structural Induction",
      "Proof Strategies"
    ],
    "prerequisiteTitles": [
      "Logic and Propositional Calculus"
    ],
    "learningObjectives": [
      "Execute Direct Proofs ($P Rightarrow Q$) and Contrapositive Proofs ($\neg Q Rightarrow \neg P$).",
      "Prove statements using Proof by Contradiction (Assume $\neg P$ and derive false statement $R land \neg R$).",
      "Master Mathematical Induction: Base Case $P(1)$, Inductive Hypothesis $P(k)$, Inductive Step $P(k+1)$."
    ],
    "notes": [
      {
        "title": "Mathematical Induction & Proof by Contradiction Proof Templates",
        "content": "MATHEMATICAL PROOF STRATEGIES\n\n1. Mathematical Induction Proof Steps:\n   - Goal: Prove statement $P(n)$ is true for all positive integers $n ge 1$.\n   - Base Step: Show $P(1)$ is true.\n   - Inductive Step: Assume $P(k)$ is true for arbitrary integer $k ge 1$ (Inductive Hypothesis).\n   - Target: Show that $P(k+1)$ MUST be true under assumption $P(k)$.\n   - Conclusion: By Principle of Mathematical Induction, $P(n)$ is true for all $n ge 1$.\n\n2. Classic Proof by Contradiction: Prove $sqrt{2}$ is irrational.\n   - Assume $sqrt{2}$ IS rational $Rightarrow sqrt{2} = a/b$ where $gcd(a, b) = 1$.\n   - $2 = a^2 / b^2 Rightarrow a^2 = 2 b^2 Rightarrow a^2$ is even $Rightarrow a$ is even ($a = 2k$).\n   - $(2k)^2 = 2 b^2 Rightarrow 4k^2 = 2 b^2 Rightarrow b^2 = 2k^2 Rightarrow b$ is even.\n   - Both $a$ and $b$ are even, contradicting $gcd(a, b) = 1$. Therefore $sqrt{2}$ is irrational!"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "How to Prove It: A Structured Approach",
        "author": "Daniel J. Velleman"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Mathematical Proofs",
        "url": "https://www.geeksforgeeks.org/mathematical-proofs/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between Proof by Contrapositive and Proof by Contradiction. (2 Marks)",
        "State the 3 steps of Mathematical Induction. (2 Marks)",
        "What is Strong Induction and when is it necessary over Weak Induction? (2 Marks)"
      ],
      "sixMarks": [
        "Prove using Mathematical Induction that $sum_{i=1}^n i = \frac{n(n+1)}{2}$ for all $n ge 1$. (6 Marks)",
        "Prove by Contradiction that there are infinitely many prime numbers (Euclid's proof). (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Mathematical Proof Systems. Detail Direct Proofs, Proof by Cases, Existence & Uniqueness proofs, Structural Induction on recursively defined trees/expressions, Constructive vs Non-constructive proofs, and common fallacies in mathematical reasoning. (10 Marks)"
      ]
    }
  },
  {
    "title": "Set Theory",
    "slug": "discrete-mathematics-set-theory",
    "order": 4,
    "estimatedHours": 5,
    "difficulty": "Beginner",
    "description": "Master set operations and identities: Set types (Finite, Infinite, Empty, Universal), Operations (Union $cup$, Intersection $cap$, Difference $-$, Symmetric Difference $Delta$, Complement $A^c$), Cartesian Product $A \times B$, Power Set $mathcal{P}(A)$, Venn Diagrams, Set Identities, and Inclusion-Exclusion Principle.",
    "subTopics": [
      "Introduction to Sets",
      "Types of Sets",
      "Set Operations (Union, Intersection, Difference, Complement)",
      "Cartesian Product",
      "Power Set",
      "Venn Diagrams",
      "Set Identities",
      "Inclusion-Exclusion Principle"
    ],
    "prerequisiteTitles": [
      "Logic and Propositional Calculus"
    ],
    "learningObjectives": [
      "Execute Set Operations: Union ($A cup B$), Intersection ($A cap B$), Difference ($A setminus B$), Symmetric Difference ($A Delta B$).",
      "Calculate Power Set cardinality $|mathcal{P}(A)| = 2^{|A|}$ and Cartesian Product $|A \times B| = |A| cdot |B|$.",
      "Apply Inclusion-Exclusion Principle for 2 and 3 sets: $|A cup B cup C| = |A| + |B| + |C| - |A cap B| - |B cap C| - |A cap C| + |A cap B cap C|$."
    ],
    "notes": [
      {
        "title": "Set Identities & Inclusion-Exclusion Principle Formulas",
        "content": "SET THEORY OPERATORS & IDENTITIES\n\n1. Cardinality & Power Set:\n   - Power Set $mathcal{P}(A)$: The set of all subsets of $A$. If $|A| = n$, then $|mathcal{P}(A)| = 2^n$.\n   - Cartesian Product $A \times B$: Set of all ordered pairs $(a, b)$ where $a in A, b in B$. $|A \times B| = |A| \times |B|$.\n\n2. Inclusion-Exclusion Principle Formulas:\n   - 2 Sets: $|A cup B| = |A| + |B| - |A cap B|$\n   - 3 Sets: $|A cup B cup C| = |A| + |B| + |C| - |A cap B| - |B cap C| - |A cap C| + |A cap B cap C|$"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Discrete Mathematics and Its Applications",
        "author": "Kenneth H. Rosen"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Set Theory Practice",
        "url": "https://www.geeksforgeeks.org/set-theory/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "If $|A| = 4$, find $|mathcal{P}(A)|$ (cardinality of Power Set). (2 Marks)",
        "State De Morgan's Laws for Set Theory. (2 Marks)",
        "Write formula for Inclusion-Exclusion Principle for 3 sets. (2 Marks)"
      ],
      "sixMarks": [
        "In a class of 100 students, 60 like Math, 45 like Physics, and 20 like both. Draw Venn Diagram and find how many students like neither subject. (6 Marks)",
        "Prove set identity $A setminus (B cup C) = (A setminus B) cap (A setminus C)$ using membership tables or logical equivalences. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Set Theoretical Foundations. Detail Axiomatic Set Theory (Zermelo-Fraenkel ZFC), Russell's Paradox ($S = {x mid x \notin x}$), countable vs uncountable sets (Cantor's Diagonalization proof $|mathbb{R}| > |mathbb{N}|$), and fuzzy sets. (10 Marks)"
      ]
    }
  },
  {
    "title": "Relations",
    "slug": "discrete-mathematics-relations",
    "order": 5,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master Binary Relations: Relation properties (Reflexive, Symmetric, Antisymmetric, Transitive), Equivalence Relations & Partitioning, Partial Order Relations (Posets), Hasse Diagrams, Relation Matrices, and Closures (Reflexive, Symmetric, Transitive Warshall's Algorithm).",
    "subTopics": [
      "Introduction to Relations",
      "Types of Relations (Reflexive, Symmetric, Antisymmetric, Transitive)",
      "Equivalence Relations",
      "Partial Order Relations",
      "Hasse Diagrams",
      "Relation Matrices",
      "Closures of Relations"
    ],
    "prerequisiteTitles": [
      "Set Theory"
    ],
    "learningObjectives": [
      "Identify 4 Relation Properties: Reflexive ($a R a$), Symmetric ($a R b Rightarrow b R a$), Antisymmetric ($a R b land b R a Rightarrow a = b$), Transitive ($a R b land b R a Rightarrow a R c$).",
      "Verify Equivalence Relations (Reflexive + Symmetric + Transitive) and construct Equivalence Classes / Partitions.",
      "Construct Hasse Diagrams for Posets (Reflexive + Antisymmetric + Transitive)."
    ],
    "notes": [
      {
        "title": "Relation Properties Table & Warshall's Transitive Closure Algorithm",
        "content": "RELATIONS, POSETS & HASSE DIAGRAMS\n\n1. Equivalence Relation vs Poset Properties:\n   - Equivalence Relation: Reflexive + Symmetric + Transitive. Partitions set into disjoint Equivalence Classes.\n   - Partial Order Relation (Poset): Reflexive + Antisymmetric + Transitive. Represented visually using Hasse Diagrams.\n\n2. Warshall's Transitive Closure Algorithm (Boolean Matrix):\n   Given 0-1 Relation Matrix $M_R$ of size $N \times N$:\n   for $k = 1$ to $N$:\n     for $i = 1$ to $N$:\n       for $j = 1$ to $N$:\n         $W^{[k]}[i, j] = W^{[k-1]}[i, j] lor (W^{[k-1]}[i, k] land W^{[k-1]}[k, j])$"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Discrete Mathematics and Its Applications",
        "author": "Kenneth H. Rosen"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Relations in Discrete Math",
        "url": "https://www.geeksforgeeks.org/relations-in-discrete-mathematics/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define Reflexive, Symmetric, Antisymmetric, and Transitive relation properties. (2 Marks)",
        "What is a Hasse Diagram in Poset theory? (2 Marks)",
        "Differentiate between Equivalence Relation and Partial Order Relation. (2 Marks)"
      ],
      "sixMarks": [
        "Given $A = {1, 2, 3, 4, 6, 12}$ under relation $a R b iff a \text{ divides } b$. Prove $R$ is a Poset and draw its Hasse Diagram. (6 Marks)",
        "Execute Warshall's Algorithm on a given 4x4 relation matrix to compute its Transitive Closure. Show $W^{(1)}, W^{(2)}, W^{(3)}, W^{(4)}$ matrices. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Relation Theory & Lattices. Detail Equivalence Classes and Fundamental Theorem of Equivalence Relations, Partial Orders, Lattices (Join $lor$ and Meet $land$), Distributive & Boolean Lattices, and Relation Composition algebra. (10 Marks)"
      ]
    }
  },
  {
    "title": "Functions",
    "slug": "discrete-mathematics-functions",
    "order": 6,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Study mappings: Function definitions ($f: A \to B$), Types (Injective / One-to-One, Surjective / Onto, Bijective / One-to-One Correspondence, Many-to-One), Function Composition $(f circ g)(x)$, Inverse Functions $f^{-1}(x)$, and Recursive Functions.",
    "subTopics": [
      "Introduction to Functions",
      "Types of Functions (One-to-One, Onto, Bijective, Many-to-One)",
      "Function Composition",
      "Inverse Functions",
      "Recursive Functions",
      "Applications of Functions"
    ],
    "prerequisiteTitles": [
      "Relations"
    ],
    "learningObjectives": [
      "Test Function Types: Injective ($f(x_1) = f(x_2) Rightarrow x_1 = x_2$), Surjective ($\forall y in B, exists x in A, f(x) = y$), Bijective (Both Injective and Surjective).",
      "Calculate Function Composition $(f circ g)(x) = f(g(x))$.",
      "Compute Inverse Function $f^{-1}(x)$ for bijective functions."
    ],
    "notes": [
      {
        "title": "Function Types Definitions & Composition Rules",
        "content": "FUNCTIONS & INVERSES\n\n1. Function Classifications:\n   - One-to-One (Injective): $f(a) = f(b) Rightarrow a = b$. Distinct domain elements map to distinct codomain elements.\n   - Onto (Surjective): Range $(f) = \text{Codomain } B$. Every element in codomain has at least one pre-image in domain.\n   - Bijective: Both Injective and Surjective. An inverse function $f^{-1}$ exists IF AND ONLY IF $f$ is Bijective!\n\n2. Function Composition $(f circ g)(x)$:\n   Given $g: A \to B$ and $f: B \to C$, the composite function $(f circ g): A \to C$ is defined by $(f circ g)(x) = f(g(x))$."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Discrete Mathematics",
        "author": "C. L. Liu"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Functions in Discrete Math",
        "url": "https://www.geeksforgeeks.org/functions-in-discrete-mathematics/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define Injective (One-to-One) and Surjective (Onto) functions with mathematical tests. (2 Marks)",
        "Under what condition does a function $f: A \to B$ have a well-defined inverse function $f^{-1}$? (2 Marks)",
        "Given $f(x) = 2x + 3$, find inverse $f^{-1}(x)$. (2 Marks)"
      ],
      "sixMarks": [
        "Given $f(x) = x^2 + 1$ and $g(x) = 2x - 3$. Compute $(f circ g)(x)$ and $(g circ f)(x)$. Are they equal? (6 Marks)",
        "Prove that if $f: A \to B$ and $g: B \to C$ are both Bijective, then $(g circ f): A \to C$ is also Bijective and $(g circ f)^{-1} = f^{-1} circ g^{-1}$. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Function Theory & Special Functions. Detail Floor $lfloor x \rfloor$ and Ceiling $lceil x \rceil$ functions, Factorial & Ackermann recursive functions, Cardinality of Infinite Sets via bijections (Schroeder-Bernstein Theorem), and Hash Functions in CS. (10 Marks)"
      ]
    }
  },
  {
    "title": "Counting Principles",
    "slug": "discrete-mathematics-counting-principles",
    "order": 7,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master Combinatorics: Sum Rule, Product Rule, Permutations ($P(n,r) = \frac{n!}{(n-r)!}$), Combinations ($C(n,r) = \binom{n}{r} = \frac{n!}{r!(n-r)!}$), Binomial Theorem, Pigeonhole Principle, and Generalized Inclusion-Exclusion.",
    "subTopics": [
      "Fundamental Principle of Counting",
      "Addition Rule",
      "Multiplication Rule",
      "Permutations",
      "Combinations",
      "Binomial Coefficients",
      "Pigeonhole Principle",
      "Inclusion-Exclusion Counting"
    ],
    "prerequisiteTitles": [
      "Set Theory"
    ],
    "learningObjectives": [
      "Apply Addition Rule (disjoint tasks) and Multiplication Rule (sequential tasks).",
      "Calculate Permutations (ordered arrangements) and Combinations (unordered selections).",
      "Apply the Pigeonhole Principle ($k+1$ items in $k$ boxes $Rightarrow ge 1$ box has $ge 2$ items) and Generalized Pigeonhole Principle ($lceil N / k \rceil$)."
    ],
    "notes": [
      {
        "title": "Permutations vs Combinations & Pigeonhole Principle",
        "content": "COMBINATORICS & PIGEONHOLE PRINCIPLE\n\n1. Permutations vs Combinations Formulas:\n   - Permutation $P(n, r)$: Order MATTERS! $P(n, r) = \frac{n!}{(n-r)!}$\n   - Combination $C(n, r) = \binom{n}{r}$: Order DOES NOT matter! $\binom{n}{r} = \frac{n!}{r!(n-r)!}$\n   - Pascal's Identity: $\binom{n}{r} = \binom{n-1}{r-1} + \binom{n-1}{r}$\n\n2. Pigeonhole Principle:\n   - Basic Principle: If $k+1$ or more objects are placed into $k$ boxes, then at least one box contains two or more objects.\n   - Generalized Principle: If $N$ objects are placed into $k$ boxes, at least one box contains $lceil N / k \rceil$ objects."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Introductory Combinatorics",
        "author": "Richard A. Brualdi"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Combinatorics Tag",
        "url": "https://www.geeksforgeeks.org/combinatorics-in-discrete-mathematics/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between Permutations and Combinations with formulas. (2 Marks)",
        "State the Generalized Pigeonhole Principle formula. (2 Marks)",
        "State Pascal's Identity for Binomial Coefficients. (2 Marks)"
      ],
      "sixMarks": [
        "How many distinct 5-digit password codes can be formed from digits 0-9 if: (a) repetition is allowed, (b) repetition is NOT allowed, (c) code must end with an even digit without repetition? (6 Marks)",
        "Show that in any group of 27 people, at least 3 people must have names starting with the same letter of the alphabet using Generalized Pigeonhole Principle. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Combinatorial Enumeration. Detail Binomial Theorem expansions, Circular Permutations, Permutations with repetitions, Derangements ($D_n = n! sum \frac{(-1)^k}{k!}$), and Inclusion-Exclusion counting problems. (10 Marks)"
      ]
    }
  },
  {
    "title": "Recurrence Relations",
    "slug": "discrete-mathematics-recurrence-relations",
    "order": 8,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Solve linear recurrence relations: Homogeneous & Non-Homogeneous relations, Characteristic Equation Method, Generating Functions, and recursive algorithm complexity applications.",
    "subTopics": [
      "Introduction to Recurrence Relations",
      "Types of Recurrence Relations",
      "Solving Linear Recurrence Relations",
      "Characteristic Equation Method",
      "Recursive Algorithms",
      "Applications of Recurrence Relations"
    ],
    "prerequisiteTitles": [
      "Proof Techniques",
      "Counting Principles"
    ],
    "learningObjectives": [
      "Formulate Recurrence Relations for discrete problems (Fibonacci, Tower of Hanoi).",
      "Solve Second-Order Linear Homogeneous Recurrences $a_n + c_1 a_{n-1} + c_2 a_{n-2} = 0$ using Characteristic Roots $r^2 + c_1 r + c_2 = 0$.",
      "Handle Distinct Roots ($a_n = alpha_1 r_1^n + alpha_2 r_2^n$) and Repeated Roots ($a_n = (alpha_1 + alpha_2 n) r^n$)."
    ],
    "notes": [
      {
        "title": "Characteristic Equation Method for 2nd-Order Homogeneous Recurrences",
        "content": "SOLVING RECURRENCE RELATIONS\n\n1. Characteristic Equation Method (Homogeneous: $a_n - c_1 a_{n-1} - c_2 a_{n-2} = 0$):\n   - Characteristic Equation: $r^2 - c_1 r - c_2 = 0$\n   - Case 1: Distinct Real Roots $r_1 \neq r_2$:\n     General Solution: $a_n = alpha_1 (r_1)^n + alpha_2 (r_2)^n$\n   - Case 2: Single Repeated Root $r_1 = r_2 = r$:\n     General Solution: $a_n = (alpha_1 + alpha_2 n) r^n$\n   - Use initial conditions ($a_0, a_1$) to solve for constants $alpha_1, alpha_2$."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Discrete Mathematics and Its Applications",
        "author": "Kenneth H. Rosen"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Recurrence Relations Practice",
        "url": "https://www.geeksforgeeks.org/recurrence-relations/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define Linear Homogeneous Recurrence Relation with constant coefficients. (2 Marks)",
        "Write characteristic equation for $a_n = 5 a_{n-1} - 6 a_{n-2}$. (2 Marks)",
        "What is a Generating Function? (2 Marks)"
      ],
      "sixMarks": [
        "Solve recurrence relation $a_n - 7 a_{n-1} + 10 a_{n-2} = 0$ with initial conditions $a_0 = 2, a_1 = 1$. (6 Marks)",
        "Solve Fibonacci recurrence $f_n = f_{n-1} + f_{n-2}$ with $f_0 = 0, f_1 = 1$ using characteristic equation to derive Binet's Formula. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Recurrence Relations & Generating Functions. Detail Non-homogeneous recurrences ($a_n = c_1 a_{n-1} + c_2 a_{n-2} + F(n)$ with particular solutions), Ordinary Generating Functions (OGFs), Exponential Generating Functions (EGFs), and Catalan numbers. (10 Marks)"
      ]
    }
  },
  {
    "title": "Graph Theory",
    "slug": "discrete-mathematics-graph-theory",
    "order": 9,
    "estimatedHours": 6,
    "difficulty": "Intermediate",
    "description": "Master Graph Theory: Graph terminology (Vertices, Edges, Degree, Handshaking Lemma $sum deg(v) = 2|E|$), Graph types (Directed, Undirected, Bipartite, Complete $K_n$), Traversals (BFS, DFS), Graph Coloring, Euler Graphs (Eulerian Circuit), and Hamiltonian Graphs.",
    "subTopics": [
      "Introduction to Graphs",
      "Graph Terminology (Vertices, Edges, Degree, Path, Cycle)",
      "Types of Graphs (Directed, Undirected, Weighted, Bipartite)",
      "Graph Representation",
      "Graph Traversals (BFS, DFS)",
      "Trees as Graphs",
      "Graph Coloring",
      "Euler and Hamiltonian Graphs"
    ],
    "prerequisiteTitles": [
      "Relations"
    ],
    "learningObjectives": [
      "Apply Handshaking Lemma: $sum_{v in V} deg(v) = 2 |E|$ (Sum of degrees is always even!).",
      "Test Euler Graph criteria (Connected graph has Eulerian Circuit iff EVERY vertex has EVEN degree).",
      "Determine Chromatic Number $chi(G)$ for Graph Coloring."
    ],
    "notes": [
      {
        "title": "Handshaking Lemma, Euler Circuits & Bipartite Graph Theorems",
        "content": "GRAPH THEORY CORE THEOREMS\n\n1. Handshaking Lemma:\n   In any undirected graph $G = (V, E)$, the sum of degrees of all vertices equals twice the number of edges:\n   $sum_{v in V} deg(v) = 2 |E|$\n   - Corollary: The number of vertices of odd degree in a graph is ALWAYS EVEN.\n\n2. Eulerian vs Hamiltonian Graphs:\n   - Euler Circuit: Closed trail containing EVERY EDGE of $G$ exactly once. Exists iff $G$ is connected and EVERY vertex has an EVEN degree.\n   - Hamiltonian Cycle: Closed loop containing EVERY VERTEX of $G$ exactly once (NP-Complete to decide!).\n\n3. Bipartite Graph Test:\n   A graph $G$ is Bipartite IF AND ONLY IF it contains NO odd-length cycles."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Introduction to Graph Theory",
        "author": "Douglas B. West"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Graph Theory Tag",
        "url": "https://www.geeksforgeeks.org/graph-theory-basics/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State Handshaking Lemma for undirected graphs. (2 Marks)",
        "State necessary and sufficient condition for an undirected connected graph to have an Euler Circuit. (2 Marks)",
        "What is a Bipartite Graph and what condition characterizes it? (2 Marks)"
      ],
      "sixMarks": [
        "Prove that in any graph, the number of vertices of odd degree is always even using Handshaking Lemma. (6 Marks)",
        "Find the Chromatic Number $chi(G)$ for: (a) Complete Graph $K_n$, (b) Cycle Graph $C_n$ (for even vs odd $n$), (c) Bipartite Graph $K_{m,n}$. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Graph Theory & Planarity. Detail Planar Graphs, Euler's Planar Formula ($V - E + F = 2$), Kuratowski's Theorem ($K_5$ and $K_{3,3}$ non-planar subgraphs), Dirac's Theorem for Hamiltonian cycles ($deg(v) ge n/2$), and 4-Color Map Theorem. (10 Marks)"
      ]
    }
  },
  {
    "title": "Trees in Discrete Mathematics",
    "slug": "discrete-mathematics-trees",
    "order": 10,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Study tree properties: Tree definitions (Acyclic connected graph), Rooted Trees, Binary Trees, Binary Search Trees, Spanning Trees, Minimum Spanning Trees (Prim's/Kruskal's), Traversals, Expression Trees, and Huffman Coding Trees.",
    "subTopics": [
      "Introduction to Trees",
      "Tree Terminology",
      "Binary Trees",
      "Binary Search Trees",
      "Spanning Trees",
      "Minimum Spanning Trees",
      "Tree Traversals",
      "Expression Trees",
      "Huffman Trees"
    ],
    "prerequisiteTitles": [
      "Graph Theory"
    ],
    "learningObjectives": [
      "Understand Tree Properties: An $n$-vertex tree has EXACTLY $n-1$ edges; unique simple path between any two vertices.",
      "Calculate Number of Spanning Trees of a complete graph $K_n$ using Cayley's Formula ($n^{n-2}$).",
      "Construct Expression Trees for Infix, Prefix, and Postfix expressions."
    ],
    "notes": [
      {
        "title": "Tree Properties & Cayley's Formula for Spanning Trees",
        "content": "TREES IN DISCRETE MATHEMATICS\n\n1. Fundamental Tree Properties:\n   A graph $T = (V, E)$ with $n = |V|$ vertices is a Tree if any of the following equivalent conditions hold:\n   - $T$ is connected and has $n - 1$ edges.\n   - $T$ is acyclic and has $n - 1$ edges.\n   - There is a UNIQUE simple path between every pair of vertices in $T$.\n\n2. Cayley's Formula:\n   The total number of distinct Spanning Trees in a Complete Graph $K_n$ is $n^{n-2}$."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Discrete Mathematics and Its Applications",
        "author": "Kenneth H. Rosen"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Trees in Discrete Math",
        "url": "https://www.geeksforgeeks.org/trees-in-discrete-mathematics/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State 3 equivalent definitions of a Tree with $n$ vertices. (2 Marks)",
        "State Cayley's Formula for number of spanning trees in complete graph $K_n$. (2 Marks)",
        "What is an Expression Tree? (2 Marks)"
      ],
      "sixMarks": [
        "Prove by induction that a tree with $n$ vertices has exactly $n-1$ edges. (6 Marks)",
        "Construct Expression Tree for arithmetic expression `(a + b) * (c - d / e)` and write its Postorder traversal. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Spanning Trees & Tree Structures. Detail Matrix Tree Theorem (Kirchhoff's Theorem for counting spanning trees using Laplacian matrix), Minimum Spanning Tree properties (Cut property, Cycle property), M-ary tree properties, and Huffman prefix codes. (10 Marks)"
      ]
    }
  },
  {
    "title": "Boolean Algebra",
    "slug": "discrete-mathematics-boolean-algebra",
    "order": 11,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master Boolean Algebra: Expressions, Laws, De Morgan's Laws, Canonical Forms (Sum of Products SOP / Minterms $m_i$, Product of Sums POS / Maxterms $M_i$), Karnaugh Maps (K-Maps up to 4 variables), and Logic Circuit Simplification.",
    "subTopics": [
      "Introduction to Boolean Algebra",
      "Boolean Expressions",
      "Boolean Laws",
      "De Morgan's Laws",
      "Boolean Functions",
      "Canonical Forms (SOP, POS)",
      "Karnaugh Maps (K-Maps)",
      "Logic Circuit Simplification"
    ],
    "prerequisiteTitles": [
      "Logic and Propositional Calculus"
    ],
    "learningObjectives": [
      "Convert Boolean functions between Canonical SOP (Sum of Minterms $sum m$) and Canonical POS (Product of Maxterms $prod M$).",
      "Minimize Boolean functions using Karnaugh Maps (K-Maps) grouping 1s in powers of 2 (2, 4, 8, 16).",
      "Simplify Boolean circuits using De Morgan's laws and Huntington's Axioms."
    ],
    "notes": [
      {
        "title": "Canonical SOP/POS & K-Map Grouping Rules",
        "content": "BOOLEAN ALGEBRA & K-MAP MINIMIZATION\n\n1. Minterms ($m_i$) vs Maxterms ($M_i$):\n   - Minterm ($m_i$): Product term containing ALL variables in true or complemented form representing output 1.\n   - Maxterm ($M_i$): Sum term containing ALL variables in true or complemented form representing output 0.\n   - Duality Relationship: $m_i = overline{M_i}$.\n\n2. K-Map Grouping Rules:\n   - Group 1s in rectangles of size $2^k$ (1, 2, 4, 8, 16).\n   - Groups can wrap around edges of the map.\n   - Make groups as LARGE as possible to eliminate maximum variables ($2^k$ grouping eliminates $k$ variables)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Digital Logic and Computer Design",
        "author": "M. Morris Mano"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks K-Map Practice",
        "url": "https://www.geeksforgeeks.org/k-map-karnaugh-map/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between Canonical SOP (Sum of Products) and Canonical POS (Product of Sums). (2 Marks)",
        "What is the Duality Principle in Boolean Algebra? (2 Marks)",
        "State how many variables are eliminated by a 4-cell group (quad) in a K-Map. (2 Marks)"
      ],
      "sixMarks": [
        "Minimize Boolean function $F(A, B, C, D) = sum m(0, 2, 5, 7, 8, 10, 13, 15)$ using 4-variable K-Map. Show prime implicants. (6 Marks)",
        "Convert $F(A, B, C) = AB + \bar{A}C$ into Canonical SOP form $sum m(...)$. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Boolean Function Minimization. Detail Quine-McCluskey (Tabular) minimization algorithm for multi-variable functions, Don't Care conditions ($d$), NAND/NOR logic gate universality proofs, and Hazard-free logic circuit design. (10 Marks)"
      ]
    }
  },
  {
    "title": "Algebraic Structures",
    "slug": "discrete-mathematics-algebraic-structures",
    "order": 12,
    "estimatedHours": 6,
    "difficulty": "Advanced",
    "description": "Master Abstract Algebra: Binary Operations, Algebraic Structures (Semigroups, Monoids, Groups, Abelian Groups), Subgroups, Cosets, Lagrange's Theorem, Rings, Fields, and CS applications in Cryptography.",
    "subTopics": [
      "Introduction to Algebraic Structures",
      "Binary Operations",
      "Semigroups",
      "Monoids",
      "Groups",
      "Subgroups",
      "Rings",
      "Fields",
      "Applications in Computer Science"
    ],
    "prerequisiteTitles": [
      "Relations",
      "Functions"
    ],
    "learningObjectives": [
      "Classify Algebraic Hierarchy: Closure $\to$ Algebraic Structure $\to$ Associative (Semigroup) $\to$ Identity (Monoid) $\to$ Inverse (Group) $\to$ Commutative (Abelian Group).",
      "Prove Lagrange's Theorem: Order of a subgroup $H$ divides order of finite group $G$ ($|H| mid |G|$).",
      "Understand Rings and Galois Fields $GF(2^n)$ used in AES cryptography."
    ],
    "notes": [
      {
        "title": "Algebraic Structures Hierarchy & Lagrange's Theorem Proof",
        "content": "ABSTRACT ALGEBRA HIERARCHY\n\n1. Algebraic Hierarchy Checklist for $(G, *)$:\n   - Closure: $\forall a, b in G, a * b in G$.\n   - Semigroup: Closure + Associativity ($(a * b) * c = a * (b * c)$).\n   - Monoid: Semigroup + Identity element $e$ ($a * e = e * a = a$).\n   - Group: Monoid + Inverse element $a^{-1}$ ($a * a^{-1} = a^{-1} * a = e$).\n   - Abelian Group: Group + Commutativity ($a * b = b * a$).\n\n2. Lagrange's Theorem:\n   If $H$ is a subgroup of a finite group $G$, then the order of $H$ divides the order of $G$:\n   $|H| \text{ divides } |G| quad Rightarrow quad |G| / |H| = [G : H] \text{ (Index of } H \text{ in } G\text{)}.$"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Abstract Algebra",
        "author": "David S. Dummit, Richard M. Foote"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Groups in Discrete Math",
        "url": "https://www.geeksforgeeks.org/groups-in-discrete-mathematics/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State 4 axioms required for a set $(G, *)$ to form a Group. (2 Marks)",
        "Differentiate between Semigroup, Monoid, and Group. (2 Marks)",
        "State Lagrange's Theorem for finite groups. (2 Marks)"
      ],
      "sixMarks": [
        "Prove that the set of integers $mathbb{Z}$ under addition $(mathbb{Z}, +)$ forms an Abelian Group. Show closure, associativity, identity (0), inverse ($-a$), and commutativity. (6 Marks)",
        "Show that $(mathbb{Z}_n, +_n)$ (integers modulo $n$ under addition) is a Cyclic Group generated by $1$. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Abstract Algebra Applications. Detail Group Homomorphisms & Isomorphisms, Normal Subgroups and Quotient Groups, Rings and Fields definitions, Galois Fields $GF(2^8)$ in AES encryption, and Error-Correcting Codes (Hamming Codes). (10 Marks)"
      ]
    }
  },
  {
    "title": "Finite State Machines and Automata Basics",
    "slug": "discrete-mathematics-finite-state-machines",
    "order": 13,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Explore Theory of Computation: Finite State Machines (FSM), States and Transitions, Deterministic Finite Automata (DFA 5-tuple), Non-Deterministic Finite Automata (NFA), Transition Diagrams, and Regular Languages.",
    "subTopics": [
      "Introduction to Finite State Machines",
      "States and Transitions",
      "Deterministic Finite Automata (DFA)",
      "Non-Deterministic Finite Automata (NFA)",
      "Transition Diagrams",
      "Applications in Computing"
    ],
    "prerequisiteTitles": [
      "Logic and Propositional Calculus",
      "Set Theory"
    ],
    "learningObjectives": [
      "Define DFA 5-Tuple $(Q, Sigma, delta, q_0, F)$ and transition function $delta: Q \times Sigma \to Q$.",
      "Construct Transition Diagrams and Transition Tables for DFAs accepting specific string patterns.",
      "Convert NFA to equivalent DFA using Subset Construction Algorithm."
    ],
    "notes": [
      {
        "title": "DFA 5-Tuple Definition & Transition Table Example",
        "content": "FINITE AUTOMATA & REGULAR LANGUAGES\n\n1. DFA 5-Tuple Formal Definition:\n   $M = (Q, Sigma, delta, q_0, F)$\n   - $Q$: Finite set of states.\n   - $Sigma$: Finite input alphabet (e.g. ${0, 1}$).\n   - $delta$: Transition function $delta: Q \times Sigma \to Q$.\n   - $q_0$: Initial / Start state ($q_0 in Q$).\n   - $F$: Set of Final / Accepting states ($F subseteq Q$).\n\n2. NFA vs DFA:\n   - DFA: For every state and input symbol, there is EXACTLY ONE transition.\n   - NFA: Can have 0, 1, or multiple transitions for a given state and input symbol, as well as $epsilon$-transitions."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Introduction to the Theory of Computation",
        "author": "Michael Sipser"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks DFA Practice",
        "url": "https://www.geeksforgeeks.org/introduction-of-finite-automata/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define DFA 5-tuple components $(Q, Sigma, delta, q_0, F)$. (2 Marks)",
        "Compare Deterministic Finite Automata (DFA) and Non-deterministic Finite Automata (NFA). (2 Marks)",
        "What is a State Transition Diagram? (2 Marks)"
      ],
      "sixMarks": [
        "Design a DFA accepting binary strings over $Sigma = {0, 1}$ that contain an EVEN number of 0s. Draw transition diagram and write transition table. (6 Marks)",
        "Explain Subset Construction Algorithm to convert NFA to equivalent DFA with a worked example. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Automata Theory & Formal Languages. Detail Chomsky Hierarchy (Regular, Context-Free, Context-Sensitive, Recursively Enumerable), Mealy and Moore machines, DFA Minimization algorithm (Myhill-Nerode Theorem), and Pumping Lemma for Regular Languages. (10 Marks)"
      ]
    }
  },
  {
    "title": "Discrete Probability",
    "slug": "discrete-mathematics-discrete-probability",
    "order": 14,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master probability theory on discrete sample spaces: Events, Conditional Probability ($P(A|B) = \frac{P(A cap B)}{P(B)}$), Independence, Bayes' Theorem, Random Variables, Discrete Distributions (Binomial, Geometric, Poisson), and Expected Value $E[X]$.",
    "subTopics": [
      "Introduction to Probability",
      "Sample Space",
      "Events",
      "Conditional Probability",
      "Bayes' Theorem",
      "Random Variables",
      "Discrete Probability Distributions",
      "Expected Value",
      "Applications in Computing"
    ],
    "prerequisiteTitles": [
      "Set Theory",
      "Counting Principles"
    ],
    "learningObjectives": [
      "Calculate Conditional Probability $P(A|B)$ and test event independence ($P(A cap B) = P(A) P(B)$).",
      "Apply Bayes' Theorem: $P(A_i|B) = \frac{P(B|A_i) P(A_i)}{sum P(B|A_j) P(A_j)}$.",
      "Calculate Expected Value $E[X] = sum x_i P(X = x_i)$ and Linearity of Expectation."
    ],
    "notes": [
      {
        "title": "Bayes' Theorem & Expected Value Formula",
        "content": "DISCRETE PROBABILITY & BAYES' THEOREM\n\n1. Bayes' Theorem Formula:\n   Given mutually exclusive partition events $A_1, A_2, dots, A_k$ and evidence event $B$:\n   $P(A_i mid B) = \frac{P(B mid A_i) cdot P(A_i)}{P(B)} = \frac{P(B mid A_i) cdot P(A_i)}{sum_{j=1}^k P(B mid A_j) cdot P(A_j)}$\n\n2. Expected Value $E[X]$ & Linearity of Expectation:\n   - Expected Value: $E[X] = sum_{x} x cdot P(X = x)$\n   - Linearity of Expectation: For ANY random variables $X_1, X_2$: $E[X_1 + X_2] = E[X_1] + E[X_2]$ (Holds even if variables are dependent!)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Discrete Mathematics and Its Applications",
        "author": "Kenneth H. Rosen"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Probability Tag",
        "url": "https://www.geeksforgeeks.org/mathematics-probability-basics/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State Bayes' Theorem formula for conditional probability. (2 Marks)",
        "Define Linearity of Expectation for random variables. (2 Marks)",
        "Differentiate between Discrete and Continuous Random Variables. (2 Marks)"
      ],
      "sixMarks": [
        "A medical test for a disease is 99% accurate. The disease affects 0.1% of the population. If a person tests positive, calculate the probability that they actually have the disease using Bayes' Theorem. (6 Marks)",
        "Define Binomial Probability Distribution $P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}$. Calculate mean $E[X] = np$ and variance $Var(X) = np(1-p)$. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Probabilistic Analysis in CS. Detail Randomized Quick Sort expected runtime analysis using indicator random variables, Naive Bayes Classifier in Machine Learning, Markov Chains and transition probability matrices, and Coupon Collector Problem. (10 Marks)"
      ]
    }
  },
  {
    "title": "Applications of Discrete Mathematics",
    "slug": "discrete-mathematics-applications",
    "order": 15,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Explore CS domain applications: Cryptography (RSA modular arithmetic), Network Analysis (Graph algorithms), Database Theory (Relational Calculus), AI (Predicate Logic Provers), Compiler Design (Parse Trees & DFA Lexers), and Software Engineering.",
    "subTopics": [
      "Cryptography Basics",
      "Network Analysis",
      "Algorithm Analysis",
      "Database Theory",
      "Artificial Intelligence Applications",
      "Compiler Design Applications",
      "Software Engineering Applications"
    ],
    "prerequisiteTitles": [
      "Logic and Propositional Calculus",
      "Graph Theory",
      "Algebraic Structures",
      "Finite State Machines and Automata Basics"
    ],
    "learningObjectives": [
      "Map Number Theory & Group Theory to Public-Key Cryptography (RSA Algorithm).",
      "Map Finite State Automata & Formal Grammars to Compiler Lexical Analyzers and Parsers.",
      "Map Predicate Logic & Knowledge Graphs to AI Reasoning Systems."
    ],
    "notes": [
      {
        "title": "RSA Modular Arithmetic & Compiler Lexer DFA Mapping",
        "content": "APPLICATIONS OF DISCRETE MATHEMATICS IN COMPUTER SCIENCE\n\n1. Cryptography (Modular Arithmetic & Euler's Totient Theorem):\n   - RSA Encryption relies on modular exponentiation: $C equiv M^e pmod n$.\n   - Security rests on computational hardness of Prime Factorization of $n = p cdot q$ over Euler's Totient $phi(n) = (p-1)(q-1)$.\n\n2. Compiler Design (Automata & Formal Languages):\n   - Lexical Analyzer (Lexer): Uses Deterministic Finite Automata (DFA) to scan source code characters into tokens (keywords, identifiers).\n   - Syntax Analyzer (Parser): Uses Context-Free Grammars (CFGs) and Expression Trees to build Abstract Syntax Trees (ASTs)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Discrete Mathematics and Its Applications",
        "author": "Kenneth H. Rosen"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Applications of Discrete Math",
        "url": "https://www.geeksforgeeks.org/applications-of-discrete-mathematics-in-computer-science/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain how Number Theory (Euler's Totient $phi(n)$) is used in RSA Encryption. (2 Marks)",
        "How are Finite State Automata used in Compiler Lexical Analysis? (2 Marks)",
        "What role does Predicate Logic play in Artificial Intelligence Knowledge Representation? (2 Marks)"
      ],
      "sixMarks": [
        "Explain how Set Theory, Relational Algebra, and Predicate Calculus form the theoretical foundation of Relational Database Systems (SQL engines). (6 Marks)",
        "Describe Graph Theory applications in Computer Networks: Routing protocols (Dijkstra OSPF), Network Topology, and PageRank search algorithms. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Discrete Mathematics Applications in Software Engineering. Detail Formal Specification Languages (Z notation / TLA+), Software Verification using Model Checking, Program Analysis via Control Flow Graphs (CFGs), Cryptographic Protocols, and Error-Correcting Codes. (10 Marks)"
      ]
    }
  }
];
