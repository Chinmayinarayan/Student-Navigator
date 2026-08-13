module.exports = [
  {
    "title": "Introduction to Algorithms and Analysis",
    "slug": "daa-introduction-to-algorithms-and-analysis",
    "order": 1,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Understand foundational algorithm principles: Importance, characteristics (Definiteness, Finiteness, Input, Output, Effectiveness), design process, correctness proofs (Loop Invariants), and time/space efficiency analysis.",
    "subTopics": [
      "Introduction to Algorithms",
      "Importance of Algorithms",
      "Characteristics of Algorithms",
      "Algorithm Design Process",
      "Problem Solving Strategies",
      "Algorithm Correctness",
      "Efficiency Analysis",
      "Time Complexity",
      "Space Complexity"
    ],
    "prerequisiteTitles": [],
    "learningObjectives": [
      "Define 5 essential characteristics of algorithms: Input, Output, Definiteness, Finiteness, and Effectiveness.",
      "Prove algorithm correctness using Loop Invariants (Initialization, Maintenance, Termination).",
      "Differentiate between Time Complexity (CPU instruction cycles) and Space Complexity (Auxiliary RAM memory)."
    ],
    "notes": [
      {
        "title": "Algorithm Characteristics, Correctness & Loop Invariants",
        "content": "INTRODUCTION TO ALGORITHMS & ANALYSIS\n\n1. 5 Core Characteristics of an Algorithm:\n   - Input: 0 or more quantities externally supplied.\n   - Output: At least 1 quantity produced.\n   - Definiteness: Each instruction must be clear and unambiguous.\n   - Finiteness: Algorithm must terminate after a finite number of steps for all inputs.\n   - Effectiveness: Every instruction must be basic enough to be carried out in practice.\n\n2. Loop Invariant Proof for Algorithm Correctness:\n   A Loop Invariant is a property that holds true before and after each iteration of a loop.\n   - Initialization: It is true prior to the first iteration of the loop.\n   - Maintenance: If it is true before an iteration, it remains true before the next iteration.\n   - Termination: When the loop terminates, the invariant provides a useful property showing algorithm correctness."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Introduction to Algorithms (CLRS)",
        "author": "Thomas H. Cormen"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Analysis of Algorithms",
        "url": "https://www.geeksforgeeks.org/analysis-of-algorithms-set-1-asymptotic-analysis/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State 5 essential characteristics of a valid algorithm. (2 Marks)",
        "Explain the 3 steps of proving algorithm correctness using Loop Invariants. (2 Marks)",
        "Define Time Complexity and Space Complexity. (2 Marks)"
      ],
      "sixMarks": [
        "Explain the step-by-step Algorithm Design Process from Problem Definition to Empirical Post-Analysis. (6 Marks)",
        "Prove correctness of Insertion Sort using Loop Invariants showing Initialization, Maintenance, and Termination. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Algorithmic Analysis Foundations. Detail RAM computational model, Space-Time trade-offs, theoretical vs empirical analysis, and proving correctness for iterative and recursive algorithms. (10 Marks)"
      ]
    }
  },
  {
    "title": "Asymptotic Analysis",
    "slug": "daa-asymptotic-analysis",
    "order": 2,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Master asymptotic growth bounds: Big O ($O$), Big Omega ($Omega$), Big Theta ($Theta$), Little o ($o$), Little omega ($omega$), growth ranking, and Best/Average/Worst Case analysis.",
    "subTopics": [
      "Introduction to Asymptotic Notations",
      "Big O Notation",
      "Omega (Ω) Notation",
      "Theta (Θ) Notation",
      "Little o Notation",
      "Growth of Functions",
      "Comparing Algorithm Complexities",
      "Best Case Analysis",
      "Average Case Analysis",
      "Worst Case Analysis"
    ],
    "prerequisiteTitles": [
      "Introduction to Algorithms and Analysis"
    ],
    "learningObjectives": [
      "Mathematically define Asymptotic Notations: Big O ($f(n) le c cdot g(n)$), Big Omega ($f(n) ge c cdot g(n)$), Big Theta ($c_1 g(n) le f(n) le c_2 g(n)$).",
      "Distinguish Big O (Upper Bound) and Little o ($f(n) < c cdot g(n)$ for all $c > 0$ as $n \to infty$).",
      "Rank function growth rates: $O(1) < O(log log n) < O(log n) < O(sqrt{n}) < O(n) < O(n log n) < O(n^2) < O(2^n) < O(n!)$."
    ],
    "notes": [
      {
        "title": "Mathematical Asymptotic Notations Definitions & Limits",
        "content": "ASYMPTOTIC NOTATIONS & FUNCTION GROWTH\n\n1. Formal Asymptotic Definitions:\n   - Big O ($O(g(n))$): Upper Bound. $f(n) = O(g(n))$ if $exists c > 0, n_0 > 0$ such that $0 le f(n) le c cdot g(n)$ for all $n ge n_0$.\n   - Big Omega ($Omega(g(n))$): Lower Bound. $f(n) = Omega(g(n))$ if $exists c > 0, n_0 > 0$ such that $0 le c cdot g(n) le f(n)$ for all $n ge n_0$.\n   - Big Theta ($Theta(g(n))$): Tight Bound. $f(n) = Theta(g(n))$ iff $f(n) = O(g(n))$ and $f(n) = Omega(g(n))$.\n   - Little o ($o(g(n))$): Strict Upper Bound. $lim_{n \to infty} \frac{f(n)}{g(n)} = 0$.\n\n2. Growth Rate Hierarchy:\n   $c < log log n < log n < sqrt{n} < n < n log n < n^2 < n^3 < 2^n < n! < n^n$"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Introduction to Algorithms",
        "author": "Cormen"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Asymptotic Notations",
        "url": "https://www.geeksforgeeks.org/types-of-asymptotic-notations-in-complexity-analysis-of-algorithms/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define Big O, Big Omega, and Big Theta notations with mathematical limits. (2 Marks)",
        "Differentiate between Big O and Little o notation. (2 Marks)",
        "Order functions by growth rate: $n^2, 2^n, n log n, sqrt{n}, n!$. (2 Marks)"
      ],
      "sixMarks": [
        "Prove mathematically that $2n^2 + 3n + 1 in Theta(n^2)$ using formal definition constants $c_1, c_2, n_0$. (6 Marks)",
        "Explain Best Case, Average Case, and Worst Case analysis with Insertion Sort example. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Asymptotic Function Comparison. Detail limits rule ($lim_{n \to infty} \frac{f(n)}{g(n)}$), Stirling's approximation for $n!$, logarithmic identities in complexity bounds, and asymptotic properties (Transitivity, Reflexivity, Symmetry, Transpose Symmetry). (10 Marks)"
      ]
    }
  },
  {
    "title": "Mathematical Analysis of Algorithms",
    "slug": "daa-mathematical-analysis-of-algorithms",
    "order": 3,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master mathematical foundations for complexity: Summations, Recurrence Relations, and 3 Solving Methods (Substitution Method, Recursion Tree Method, Master Theorem).",
    "subTopics": [
      "Mathematical Foundations",
      "Summations",
      "Recurrence Relations",
      "Solving Recurrence Relations",
      "Substitution Method",
      "Recursion Tree Method",
      "Master Theorem",
      "Iterative Analysis"
    ],
    "prerequisiteTitles": [
      "Asymptotic Analysis"
    ],
    "learningObjectives": [
      "Solve Divide and Conquer Recurrences using Master Theorem ($T(n) = a T(n/b) + f(n)$).",
      "Apply Substitution Method (Mathematical Induction) to prove recurrence bounds.",
      "Draw Recursion Trees to calculate total work per level."
    ],
    "notes": [
      {
        "title": "Master Theorem Master Formula & 3 Cases",
        "content": "RECURRENCE RELATIONS & THE MASTER THEOREM\n\n1. Master Theorem for Divide-and-Conquer Recurrences:\n   For $T(n) = a T(n/b) + f(n)$ where $a ge 1, b > 1$:\n   Compare $f(n)$ with $n^{log_b a}$:\n   - Case 1: If $f(n) = O(n^{log_b a - epsilon})$ for some $epsilon > 0$, then $T(n) = Theta(n^{log_b a})$.\n   - Case 2: If $f(n) = Theta(n^{log_b a} log^k n)$ for $k ge 0$, then $T(n) = Theta(n^{log_b a} log^{k+1} n)$.\n   - Case 3: If $f(n) = Omega(n^{log_b a + epsilon})$ and regularity condition holds ($a f(n/b) le c f(n)$ for $c < 1$), then $T(n) = Theta(f(n))$.\n\n2. Substitution Method Steps:\n   1. Guess the form of the answer (e.g. $T(n) = O(n log n)$).\n   2. Use Mathematical Induction to prove $T(n) le c n log n$ for chosen constants $c, n_0$."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Introduction to Algorithms",
        "author": "Cormen"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Master Theorem Practice",
        "url": "https://www.geeksforgeeks.org/master-theorem-for-divide-and-conquer-recurrences/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State the 3 cases of the Master Theorem for $T(n) = a T(n/b) + f(n)$. (2 Marks)",
        "What is the limitation of the Master Theorem? Give a recurrence where it fails. (2 Marks)",
        "Write the summation formula for Arithmetic Series and Geometric Series. (2 Marks)"
      ],
      "sixMarks": [
        "Solve $T(n) = 2 T(n/2) + n log n$ using Master Theorem. State case applied. (6 Marks)",
        "Solve recurrence $T(n) = 2 T(n/2) + n$ using the Recursion Tree Method. Show height, work per level, and total sum. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Solving Recurrence Relations. Detail Substitution Method inductive proof for $T(n) = 2 T(lfloor n/2 \rfloor) + n$, Master Theorem proof sketch, Akra-Bazzi method for unequal subproblem sizes ($T(n) = sum a_i T(n/b_i) + f(n)$), and linear homogenous recurrences. (10 Marks)"
      ]
    }
  },
  {
    "title": "Divide and Conquer Technique",
    "slug": "daa-divide-and-conquer-technique",
    "order": 4,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master Divide & Conquer paradigm: Binary Search ($O(log N)$), Merge Sort ($O(N log N)$), Quick Sort (Lomuto/Hoare partition), Strassen's Matrix Multiplication ($O(N^{2.81})$), and Closest Pair of Points.",
    "subTopics": [
      "Introduction to Divide and Conquer",
      "Divide and Conquer Strategy",
      "Recurrence Relation Formation",
      "Binary Search Algorithm",
      "Merge Sort Algorithm",
      "Quick Sort Algorithm",
      "Strassen's Matrix Multiplication",
      "Applications of Divide and Conquer"
    ],
    "prerequisiteTitles": [
      "Mathematical Analysis of Algorithms"
    ],
    "learningObjectives": [
      "Understand 3 Divide & Conquer steps: Divide problem into subproblems, Conquer subproblems recursively, Combine solutions.",
      "Analyze Merge Sort recurrence $T(n) = 2T(n/2) + O(n) Rightarrow Theta(n log n)$.",
      "Understand Strassen's Matrix Multiplication reducing multiplications from 8 to 7 ($T(n) = 7T(n/2) + O(n^2) Rightarrow Theta(n^{log_2 7}) approx Theta(n^{2.81})$)."
    ],
    "notes": [
      {
        "title": "Strassen's Matrix Multiplication & Quick Sort Partition Pseudocode",
        "content": "DIVIDE AND CONQUER ALGORITHMS\n\n1. Strassen's Matrix Multiplication:\n   Standard matrix multiplication requires $O(n^3)$ operations (8 scalar multiplications).\n   Strassen's algorithm computes 7 sub-matrices ($P_1$ to $P_7$) using additions/subtractions:\n   - Recurrence: $T(n) = 7 T(n/2) + Theta(n^2)$\n   - Solution by Master Theorem: $T(n) = Theta(n^{log_2 7}) approx Theta(n^{2.81})$.\n\n2. Quick Sort Partition Pseudocode (Lomuto Scheme):\n   algorithm partition(A, low, high) is\n       pivot := A[high]\n       i := low - 1\n       for j := low to high - 1 do\n           if A[j] <= pivot then\n               i := i + 1\n               swap A[i] with A[j]\n       swap A[i + 1] with A[high]\n       return i + 1"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Algorithm Design",
        "author": "Jon Kleinberg, Eva Tardos"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Divide and Conquer Algorithms",
        "url": "https://www.geeksforgeeks.org/divide-and-conquer/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Outline the 3 core steps of Divide & Conquer strategy. (2 Marks)",
        "How does Strassen's Matrix Multiplication achieve $O(n^{2.81})$ time complexity? (2 Marks)",
        "What is the worst-case recurrence for Quick Sort and when does it occur? (2 Marks)"
      ],
      "sixMarks": [
        "Write Merge Sort algorithm pseudocode. Derive its time complexity using Master Theorem on $T(n) = 2T(n/2) + cn$. (6 Marks)",
        "Explain Quick Sort Lomuto Partitioning algorithm. Trace execution on array `[10, 80, 30, 90, 40, 50, 70]`. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Divide & Conquer Engineering. Detail Closest Pair of Points 2D algorithm ($O(n log n)$), Fast Fourier Transform (FFT) polynomial multiplication ($O(n log n)$), randomized Quick Select for $k$-th smallest element ($O(n)$ average), and Quick Sort vs Merge Sort cache performance. (10 Marks)"
      ]
    }
  },
  {
    "title": "Greedy Method",
    "slug": "daa-greedy-method",
    "order": 5,
    "estimatedHours": 6,
    "difficulty": "Intermediate",
    "description": "Master Greedy Paradigm: Greedy Choice Property, Optimal Substructure, Activity Selection, Fractional Knapsack, Job Sequencing, Huffman Coding, Minimum Spanning Trees (Prim's & Kruskal's), and Dijkstra's Shortest Path.",
    "subTopics": [
      "Introduction to Greedy Algorithms",
      "Greedy Strategy",
      "Greedy Choice Property",
      "Optimal Substructure",
      "Activity Selection Problem",
      "Fractional Knapsack Problem",
      "Job Sequencing Problem",
      "Huffman Coding",
      "Minimum Spanning Tree (Prim's & Kruskal's Algorithm)",
      "Dijkstra's Algorithm"
    ],
    "prerequisiteTitles": [
      "Divide and Conquer Technique"
    ],
    "learningObjectives": [
      "Understand 2 key requirements for Greedy applicability: Greedy Choice Property & Optimal Substructure.",
      "Execute Kruskal's MST (sorting edges + DSU $O(E log E)$) and Prim's MST (Min-Heap $O((V+E)log V)$).",
      "Execute Dijkstra's Single-Source Shortest Path algorithm on non-negative weighted graphs."
    ],
    "notes": [
      {
        "title": "Greedy Choice Property & Kruskal vs Prim Pseudocode",
        "content": "GREEDY METHOD & MINIMUM SPANNING TREES\n\n1. Greedy Choice Property:\n   A globally optimal solution can be arrived at by making locally optimal (greedy) choices without looking back or considering future consequences.\n\n2. Kruskal's MST Pseudocode:\n   algorithm Kruskal(G) is\n       A := empty set\n       for each vertex v in G.V do\n           MakeSet(v)\n       sort the edges of G.E in non-decreasing order by weight\n       for each edge (u, v) in G.E sorted do\n           if FindSet(u) != FindSet(v) then\n               A := A union {(u, v)}\n               Union(u, v)\n       return A"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Introduction to Algorithms",
        "author": "Cormen"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Greedy Algorithms Tag",
        "url": "https://www.geeksforgeeks.org/greedy-algorithms/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State Greedy Choice Property and Optimal Substructure property. (2 Marks)",
        "Differentiate between Fractional Knapsack (Greedy) and 0/1 Knapsack (DP). (2 Marks)",
        "Why does Dijkstra's algorithm fail on graphs with negative edge weights? (2 Marks)"
      ],
      "sixMarks": [
        "Apply Prim's Algorithm to find Minimum Spanning Tree for a 6-vertex weighted graph. Show MST edge addition steps. (6 Marks)",
        "Solve Fractional Knapsack problem for capacity $W = 50$, weights `[10, 20, 30]`, values `[60, 100, 120]`. Show ratio sorting steps. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Greedy Algorithmic Paradigm. Detail Huffman Coding prefix code proof, Job Sequencing with Deadlines time-slot scheduling, Dijkstra vs Bellman-Ford analysis, Matroid theory mathematical foundation for greedy algorithms, and Kruskal DSU optimizations. (10 Marks)"
      ]
    }
  },
  {
    "title": "Dynamic Programming",
    "slug": "daa-dynamic-programming",
    "order": 6,
    "estimatedHours": 7,
    "difficulty": "Advanced",
    "description": "Master Dynamic Programming (DP): Overlapping Subproblems, Optimal Substructure, Memoization (Top-Down) vs Tabulation (Bottom-Up), Fibonacci, 0/1 Knapsack, MCM, LCS, LIS, Coin Change, and OBST.",
    "subTopics": [
      "Introduction to Dynamic Programming",
      "Dynamic Programming Characteristics",
      "Overlapping Subproblems",
      "Optimal Substructure",
      "Memoization Technique",
      "Tabulation Technique",
      "Fibonacci Problem",
      "0/1 Knapsack Problem",
      "Matrix Chain Multiplication",
      "Longest Common Subsequence",
      "Longest Increasing Subsequence",
      "Coin Change Problem",
      "Optimal Binary Search Tree"
    ],
    "prerequisiteTitles": [
      "Mathematical Analysis of Algorithms"
    ],
    "learningObjectives": [
      "Understand 2 DP criteria: Overlapping Subproblems & Optimal Substructure.",
      "Solve Matrix Chain Multiplication (MCM) using Interval DP ($O(N^3)$ time).",
      "Solve Optimal Binary Search Tree (OBST) DP problem."
    ],
    "notes": [
      {
        "title": "Matrix Chain Multiplication (MCM) Recurrence & DP Table",
        "content": "DYNAMIC PROGRAMMING & MATRIX CHAIN MULTIPLICATION\n\n1. Matrix Chain Multiplication (MCM) Recurrence:\n   Let matrices $A_1, A_2, dots, A_n$ have dimensions $p_{i-1} \times p_i$.\n   Let $m[i, j]$ be minimum scalar multiplications needed to compute $A_{i..j}$:\n   - $m[i, i] = 0$\n   - $m[i, j] = min_{i le k < j} { m[i, k] + m[k+1, j] + p_{i-1} p_k p_j }$ for $i < j$.\n   - Time Complexity: $O(N^3)$, Space Complexity: $O(N^2)$.\n\n2. Memoization vs Tabulation:\n   - Top-Down Memoization: Recursive calls stored in lookup table. Computes subproblems on demand.\n   - Bottom-Up Tabulation: Iterative loop filling table from base cases up. Avoids recursion stack overhead."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Introduction to Algorithms",
        "author": "Cormen"
      }
    ],
    "practiceLinks": [
      {
        "title": "LeetCode Dynamic Programming Category",
        "url": "https://leetcode.com/tag/dynamic-programming/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between Top-Down Memoization and Bottom-Up Tabulation in DP. (2 Marks)",
        "State recurrence relation for Matrix Chain Multiplication $m[i,j]$. (2 Marks)",
        "Compare Greedy Approach and Dynamic Programming. (2 Marks)"
      ],
      "sixMarks": [
        "Solve Matrix Chain Multiplication for matrices with dimensions `[10, 30, 5, 60]`. Construct $m[i,j]$ cost matrix and optimal parenthesization. (6 Marks)",
        "Solve 0/1 Knapsack for weights `[2, 3, 4, 5]`, values `[3, 4, 5, 6]`, and $W = 5$ using 2D DP table. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Advanced Dynamic Programming. Detail Optimal Binary Search Tree (OBST) DP formulation, Longest Increasing Subsequence ($O(n log n)$ patience sorting optimization), Edit Distance (Levenshtein) DP table, Travelling Salesman DP ($O(n^2 2^n)$ Held-Karp), and Space Compression techniques. (10 Marks)"
      ]
    }
  },
  {
    "title": "Backtracking Technique",
    "slug": "daa-backtracking-technique",
    "order": 7,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Master State-Space Search Backtracking: State Space Tree, Bounding Functions, N-Queens Problem, Graph Coloring, Hamiltonian Cycle, and Sum of Subsets Problem.",
    "subTopics": [
      "Introduction to Backtracking",
      "Backtracking Approach",
      "State Space Tree",
      "N-Queens Problem",
      "Graph Coloring Problem",
      "Hamiltonian Cycle Problem",
      "Sum of Subsets Problem",
      "Backtracking Applications"
    ],
    "prerequisiteTitles": [
      "Mathematical Analysis of Algorithms"
    ],
    "learningObjectives": [
      "Understand State Space Tree traversal (Depth-First Search with pruning).",
      "Solve N-Queens Problem placing $N$ non-attacking queens on an $N \times N$ chessboard.",
      "Solve Graph $m$-Coloring and Hamiltonian Cycle problems."
    ],
    "notes": [
      {
        "title": "State Space Tree Pruning & Sum of Subsets Backtracking",
        "content": "BACKTRACKING & STATE SPACE TREES\n\n1. Backtracking Core Principle:\n   Systematically search the State Space Tree using Depth-First Search. At each node, evaluate a Bounding Function / Constraint. If constraint fails, PRUNE the entire subtree (backtrack to parent node) without exploring further.\n\n2. Sum of Subsets Problem:\n   Given set of positive integers $S = {w_1, w_2, dots, w_n}$ and target $M$. Find all subsets whose sum equals $M$.\n   Bounding Function at depth $k$:\n   - Prune if current sum $s + w_{k+1} > M$.\n   - Prune if remaining total sum $s + sum_{i=k+1}^n w_i < M$."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Fundamentals of Computer Algorithms",
        "author": "Ellis Horowitz, Sartaj Sahni"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Backtracking Tag",
        "url": "https://www.geeksforgeeks.org/backtracking-algorithms/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define State Space Tree and Bounding Function in Backtracking. (2 Marks)",
        "State non-attacking conditions for N-Queens problem on row, column, and diagonal. (2 Marks)",
        "What is the Hamiltonian Cycle Problem? (2 Marks)"
      ],
      "sixMarks": [
        "Draw State Space Tree for 4-Queens Problem and trace backtracks to find all valid solutions. (6 Marks)",
        "Solve Sum of Subsets for $S = {3, 5, 6, 7}$ and target $M = 15$ using Backtracking state-space search. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Backtracking Algorithmic Design. Detail Graph $m$-Coloring decision problem state-space tree, Hamiltonian Cycle detection algorithm, Sudoku Solver, and efficiency comparisons between Brute Force vs Backtracking. (10 Marks)"
      ]
    }
  },
  {
    "title": "Branch and Bound Technique",
    "slug": "daa-branch-and-bound-technique",
    "order": 8,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Master Optimization Search Branch & Bound: Contrast with Backtracking, Bounding Functions, FIFO Branch & Bound (Queue), Least-Cost (LC) Branch & Bound (Priority Queue), Travelling Salesman Problem (TSP), and Assignment Problem.",
    "subTopics": [
      "Introduction to Branch and Bound",
      "Difference Between Backtracking and Branch and Bound",
      "State Space Tree",
      "Bounding Function",
      "FIFO Branch and Bound",
      "LC Branch and Bound",
      "Travelling Salesman Problem",
      "Assignment Problem"
    ],
    "prerequisiteTitles": [
      "Backtracking Technique"
    ],
    "learningObjectives": [
      "Differentiate Backtracking (DFS traversal for decision problems) and Branch & Bound (BFS / Best-First Search for optimization problems).",
      "Implement LC (Least-Cost) Branch & Bound using Min-Heap Priority Queue.",
      "Solve Travelling Salesman Problem (TSP) using Reduced Cost Matrix Branch & Bound."
    ],
    "notes": [
      {
        "title": "Backtracking vs Branch & Bound & Reduced Cost Matrix TSP",
        "content": "BRANCH AND BOUND & TRAVELLING SALESMAN PROBLEM\n\n1. Backtracking vs Branch & Bound Comparison:\n   - Traversal: Backtracking uses DFS; Branch & Bound uses BFS / Best-First Search.\n   - Purpose: Backtracking solves Decision / Solution enumeration problems; Branch & Bound solves Optimization problems (Min/Max).\n   - Data Structure: Backtracking uses Stack / Recursion; Branch & Bound uses Queue (FIFO) or Priority Queue (LCBB).\n\n2. TSP Reduced Cost Matrix Bounding Function:\n   Reduce cost matrix by subtracting row minimums and column minimums. Sum of subtracted values gives Lower Bound $L$ at root node. For each child node branch, compute new reduced matrix and lower bound."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Introduction to Algorithms",
        "author": "Cormen"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Branch and Bound Tag",
        "url": "https://www.geeksforgeeks.org/branch-and-bound-algorithm/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Compare Backtracking and Branch & Bound on 4 parameters. (2 Marks)",
        "What is Least-Cost (LC) Branch & Bound? (2 Marks)",
        "Explain Reduced Cost Matrix concept in TSP Branch & Bound. (2 Marks)"
      ],
      "sixMarks": [
        "Solve 0/1 Knapsack problem for $W = 10$, weights `[2, 4, 6, 9]`, values `[10, 10, 12, 18]` using LC Branch & Bound. Show upper bound calculations. (6 Marks)",
        "Solve Assignment Problem for 4 jobs and 4 workers using Cost Matrix Branch & Bound. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Branch & Bound Optimization. Detail Travelling Salesman Problem (TSP) Reduced Cost Matrix calculation, FIFO vs LIFO vs LC Search state space exploration, 15-Puzzle problem, and A* Search equivalence. (10 Marks)"
      ]
    }
  },
  {
    "title": "Graph Algorithms",
    "slug": "daa-graph-algorithms",
    "order": 9,
    "estimatedHours": 6,
    "difficulty": "Intermediate",
    "description": "Master Graph analysis: Representation (Adjacency Matrix/List), Traversals (BFS, DFS), Shortest Paths (Dijkstra, Bellman-Ford, Floyd-Warshall $O(V^3)$), MST (Prim's, Kruskal's), Topological Sort, and Network Flow (Ford-Fulkerson).",
    "subTopics": [
      "Graph Representation",
      "Graph Traversal Algorithms (BFS, DFS)",
      "Shortest Path Algorithms (Dijkstra, Bellman-Ford, Floyd-Warshall)",
      "Minimum Spanning Tree Algorithms (Prim's, Kruskal's)",
      "Topological Sorting",
      "Network Flow Basics"
    ],
    "prerequisiteTitles": [
      "Greedy Method"
    ],
    "learningObjectives": [
      "Execute Bellman-Ford Algorithm detecting Negative Weight Cycles ($V-1$ iterations, $O(V cdot E)$).",
      "Execute Floyd-Warshall All-Pairs Shortest Path Dynamic Programming algorithm ($O(V^3)$).",
      "Understand Network Flow Max-Flow Min-Cut Theorem and Ford-Fulkerson Algorithm."
    ],
    "notes": [
      {
        "title": "Bellman-Ford & Floyd-Warshall Shortest Path Recurrences",
        "content": "GRAPH ALGORITHMS: BELLMAN-FORD & FLOYD-WARSHALL\n\n1. Bellman-Ford Algorithm (Handles Negative Edges):\n   - Relax all $E$ edges $V-1$ times:\n     for $i = 1$ to $V-1$:\n       for each edge $(u, v)$ with weight $w$:\n         if $dist[u] + w < dist[v]$: $dist[v] = dist[u] + w$\n   - 10th Pass (Check Negative Cycle): If any $dist[v]$ can still be reduced, graph contains a Negative Cycle!\n\n2. Floyd-Warshall All-Pairs Shortest Path DP Recurrence:\n   Let $d^{(k)}[i, j]$ be shortest path from $i$ to $j$ using intermediate vertices ${1..k}$:\n   $d^{(k)}[i, j] = min left( d^{(k-1)}[i, j],  d^{(k-1)}[i, k] + d^{(k-1)}[k, j] \right)$"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Introduction to Algorithms",
        "author": "Cormen"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Graph Algorithms",
        "url": "https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Compare Dijkstra, Bellman-Ford, and Floyd-Warshall on time complexity and negative edge support. (2 Marks)",
        "How does Bellman-Ford detect negative weight cycles in a graph? (2 Marks)",
        "State Max-Flow Min-Cut Theorem in Network Flow. (2 Marks)"
      ],
      "sixMarks": [
        "Apply Bellman-Ford algorithm on a 5-vertex directed graph with negative edge weights. Trace distance array across $V-1$ passes. (6 Marks)",
        "Execute Floyd-Warshall algorithm on a 4-vertex distance matrix. Show $D^{(0)}, D^{(1)}, D^{(2)}, D^{(3)}, D^{(4)}$ matrices. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Network Flow & Shortest Path Theory. Detail Ford-Fulkerson residual capacity & augmenting paths, Edmonds-Karp $O(V E^2)$ BFS enhancement, Tarjan's Strongly Connected Components (SCC), and Johnson's algorithm for sparse all-pairs shortest paths. (10 Marks)"
      ]
    }
  },
  {
    "title": "Sorting Algorithm Analysis",
    "slug": "daa-sorting-algorithm-analysis",
    "order": 10,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Analyze sorting theoretical bounds: Comparison sorting lower bound ($Omega(N log N)$ Decision Tree proof), Bubble, Selection, Insertion, Merge, Quick, Heap, Counting ($O(N+K)$), Radix, and Bucket Sort.",
    "subTopics": [
      "Comparison-Based Sorting",
      "Bubble Sort Analysis",
      "Selection Sort Analysis",
      "Insertion Sort Analysis",
      "Merge Sort Analysis",
      "Quick Sort Analysis",
      "Heap Sort Analysis",
      "Counting Sort",
      "Radix Sort",
      "Lower Bound for Sorting"
    ],
    "prerequisiteTitles": [
      "Divide and Conquer Technique"
    ],
    "learningObjectives": [
      "Prove $Omega(N log N)$ Lower Bound for comparison-based sorting using Decision Tree Model ($\text{Leaves} ge N! Rightarrow h ge log_2(N!) = Omega(N log N)$).",
      "Analyze non-comparison linear sorting: Counting Sort ($O(N+K)$) and Radix Sort ($O(d(N+K))$).",
      "Compare space-time trade-offs of Heap Sort ($O(N log N)$ in-place $O(1)$) vs Merge Sort ($O(N log N)$ stable $O(N)$ space)."
    ],
    "notes": [
      {
        "title": "Decision Tree Proof for Comparison Sorting Lower Bound",
        "content": "DECISION TREE MODEL & SORTING LOWER BOUND\n\n1. Decision Tree Proof for Comparison-Based Sorting:\n   - Any comparison sort can be represented as a Binary Decision Tree where each internal node represents a comparison $a_i le a_j$ and each leaf represents a permutation.\n   - For $N$ elements, there are $N!$ possible output permutations $Rightarrow$ Tree MUST have at least $N!$ leaves ($L ge N!$).\n   - A binary tree of height $h$ has at most $2^h$ leaves $Rightarrow 2^h ge L ge N! Rightarrow h ge log_2(N!)$.\n   - By Stirling's Approximation: $log_2(N!) = sum_{i=1}^N log_2 i ge \frac{N}{2} log_2 left(\frac{N}{2}\right) = Omega(N log N)$.\n   - Therefore, ANY comparison-based sort requires $Omega(N log N)$ comparisons in worst case!"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Introduction to Algorithms",
        "author": "Cormen"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Lower Bound for Sorting",
        "url": "https://www.geeksforgeeks.org/lower-bound-for-comparison-based-sorting-algorithms/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Prove that any comparison-based sorting algorithm requires $Omega(N log N)$ comparisons in worst case. (2 Marks)",
        "Why can Counting Sort achieve $O(N+K)$ linear time complexity? (2 Marks)",
        "Compare Heap Sort and Merge Sort on time, space, and stability. (2 Marks)"
      ],
      "sixMarks": [
        "Explain Counting Sort algorithm step-by-step with array count cumulative sum and output reconstruction for `[4, 2, 2, 8, 3, 3, 1]`. (6 Marks)",
        "Describe Radix Sort digit-by-digit sorting pass using stable Counting Sort for keys `[170, 45, 75, 90, 802, 24, 2, 66]`. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Sorting Algorithm Complexities. Detail Decision Tree height proofs, Heap Sort Max-Heapify array transformations, Timsort hybrid (Merge Sort + Insertion Sort) in Python/Java, and Bucket Sort uniform distribution bounds. (10 Marks)"
      ]
    }
  },
  {
    "title": "Searching Algorithm Analysis",
    "slug": "daa-searching-algorithm-analysis",
    "order": 11,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Analyze search strategies: Linear Search ($O(N)$), Binary Search ($O(log N)$), Interpolation Search ($O(log log N)$ average), Hashing ($O(1)$ average), and Search space comparisons.",
    "subTopics": [
      "Linear Search Analysis",
      "Binary Search Analysis",
      "Interpolation Search",
      "Hashing-Based Searching",
      "Searching Complexity Comparison"
    ],
    "prerequisiteTitles": [
      "Asymptotic Analysis"
    ],
    "learningObjectives": [
      "Analyze Interpolation Search probe formula: $\text{pos} = \text{low} + left( \frac{\text{target} - A[\text{low}]}{A[\text{high}] - A[\text{low}]} \right) \times (\text{high} - \text{low})$.",
      "Compare Binary Search ($O(log N)$ uniform divide) and Interpolation Search ($O(log log N)$ for uniformly distributed data).",
      "Analyze Hash Table average search cost $O(1)$ vs worst-case $O(N)$ collision chain."
    ],
    "notes": [
      {
        "title": "Interpolation Search Formula & Searching Comparison Matrix",
        "content": "SEARCHING ALGORITHMS & COMPLEXITY COMPARISON\n\n1. Interpolation Search Probe Formula:\n   Estimate target index based on value interpolation (like looking up a name in a physical phonebook):\n   $pos = low + leftlfloor \frac{target - A[low]}{A[high] - A[low]} \times (high - low) \right\rfloor$\n   - Time Complexity: $O(log log N)$ for uniformly distributed sorted data. Worst case $O(N)$.\n\n2. Searching Algorithms Comparison Matrix:\n-------------------------------------------------------------------------\nAlgorithm            | Average Time | Worst Time | Space    | Condition\n-------------------------------------------------------------------------\nLinear Search        | O(N)         | O(N)       | O(1)     | None\nBinary Search        | O(log N)     | O(log N)   | O(1)     | Sorted Array\nInterpolation Search | O(log log N) | O(N)       | O(1)     | Sorted & Uniform\nHash Table Search    | O(1)         | O(N)       | O(N)     | Hash Function\n-------------------------------------------------------------------------"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Introduction to Algorithms",
        "author": "Cormen"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Interpolation Search",
        "url": "https://www.geeksforgeeks.org/interpolation-search/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State Interpolation Search probe position calculation formula. (2 Marks)",
        "When does Interpolation Search perform better than Binary Search ($O(log log N)$)? (2 Marks)",
        "Compare search time complexities of Linear, Binary, Interpolation, and Hash Table searches. (2 Marks)"
      ],
      "sixMarks": [
        "Explain Interpolation Search algorithm with code. Trace search for `target = 18` in sorted uniform array `[10, 12, 13, 16, 18, 19, 20, 21, 22]`. (6 Marks)",
        "Analyze average and worst-case time & space complexity of Hash Table search under Separate Chaining vs Open Addressing. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Search Spaces & Algorithms. Detail Exponential Search, Jump Search, Binary Search on Answer pattern, B+ Tree search index depth bounds, and Fibonacci Search. (10 Marks)"
      ]
    }
  },
  {
    "title": "Advanced Algorithm Design Techniques",
    "slug": "daa-advanced-algorithm-design-techniques",
    "order": 12,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Explore advanced paradigms: Randomized Algorithms (Las Vegas vs Monte Carlo), Approximation Algorithms (Vertex Cover 2-approximation), Online Algorithms (Competitive Ratio), Parallel Algorithms, and Heuristics.",
    "subTopics": [
      "Randomized Algorithms",
      "Approximation Algorithms",
      "Online Algorithms",
      "Parallel Algorithms Basics",
      "Probabilistic Algorithms",
      "Heuristic Algorithms"
    ],
    "prerequisiteTitles": [
      "Greedy Method",
      "Dynamic Programming"
    ],
    "learningObjectives": [
      "Distinguish Las Vegas Algorithms (Always correct answer, random runtime) and Monte Carlo Algorithms (Deterministic runtime, high probability of correct answer).",
      "Understand Approximation Algorithms: Approximation Ratio $alpha(n) = max left( \frac{C}{C^*}, \frac{C^*}{C} \right)$ for NP-Hard problems.",
      "Understand Online Algorithms & Competitive Ratio Analysis (Ski Rental problem)."
    ],
    "notes": [
      {
        "title": "Las Vegas vs Monte Carlo & 2-Approximation Vertex Cover",
        "content": "ADVANCED ALGORITHM DESIGN PARADIGMS\n\n1. Las Vegas vs Monte Carlo Randomized Algorithms:\n   - Las Vegas: Always yields the CORRECT answer. Running time is a random variable (e.g. Randomized Quick Sort, Quick Select).\n   - Monte Carlo: Running time is FIXED/DETERMINISTIC. Answers are correct with high probability $1 - delta$ (e.g. Karger's Min-Cut algorithm, Miller-Rabin Primality Test).\n\n2. 2-Approximation Algorithm for Vertex Cover (NP-Hard):\n   algorithm ApproximateVertexCover(G) is\n       C := empty set\n       E' := G.E\n       while E' is not empty do\n           let (u, v) be an arbitrary edge in E'\n           C := C union {u, v}\n           remove from E' every edge incident to u or v\n       return C\n   # Guarantees |C| <= 2 * |C*| (At most 2x optimal size!)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Randomized Algorithms",
        "author": "Rajeev Motwani, Prabhakar Raghavan"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Approximation Algorithms",
        "url": "https://www.geeksforgeeks.org/approximation-algorithms-set-1-introduction-vertex-cover-problem/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between Las Vegas and Monte Carlo Randomized Algorithms with examples. (2 Marks)",
        "Define Approximation Ratio $alpha(n)$ for an approximation algorithm. (2 Marks)",
        "What is an Online Algorithm and what is Competitive Ratio? (2 Marks)"
      ],
      "sixMarks": [
        "Explain 2-Approximation Algorithm for Vertex Cover Problem with pseudocode and prove its 2-approximation ratio $|C| le 2 |C^*|$. (6 Marks)",
        "Describe Randomized Quick Sort with random pivot choice and prove $O(N log N)$ expected time complexity. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Advanced Algorithmic Paradigms. Detail Karger's Randomized Min-Cut algorithm, Metric TSP 1.5-approximation (Christofides algorithm), Parallel PRAM (Parallel Random Access Machine) model, and Online Ski Rental problem competitive ratio analysis. (10 Marks)"
      ]
    }
  },
  {
    "title": "NP Completeness Theory",
    "slug": "daa-np-completeness-theory",
    "order": 13,
    "estimatedHours": 6,
    "difficulty": "Advanced",
    "description": "Master Computational Complexity Theory: P vs NP classes, Non-deterministic Polynomial time, NP-Hard, NP-Complete, Polynomial-Time Reductions ($L_1 le_P L_2$), Cook's Theorem (3-SAT), and Classic NP-Complete Problems.",
    "subTopics": [
      "Introduction to Computational Complexity",
      "Complexity Classes (P, NP, NP-Hard, NP-Complete)",
      "Polynomial Time Algorithms",
      "Reduction Techniques",
      "Cook's Theorem",
      "Examples of NP-Complete Problems (TSP, Knapsack, SAT)"
    ],
    "prerequisiteTitles": [
      "Backtracking Technique",
      "Branch and Bound Technique"
    ],
    "learningObjectives": [
      "Define Complexity Classes: P (Solvable in polynomial time $O(n^k)$), NP (Verifiable in polynomial time), NP-Hard (At least as hard as any NP problem), NP-Complete (In NP AND NP-Hard).",
      "Understand Polynomial-Time Reduction ($L_1 le_P L_2$): If $L_2 in P$, then $L_1 in P$.",
      "Understand Cook-Levin Theorem: Boolean Satisfiability (SAT) is NP-Complete."
    ],
    "notes": [
      {
        "title": "Complexity Classes Venn Diagram & Polynomial Reduction Proof",
        "content": "COMPLEXITY CLASSES & NP-COMPLETENESS\n\n1. Complexity Classes Venn Diagram Definitions:\n   - P: Decision problems solvable by a Deterministic Turing Machine in polynomial time $O(n^k)$.\n   - NP: Decision problems verifiable by a Deterministic Turing Machine in polynomial time (or solvable by Non-deterministic Turing Machine in $O(n^k)$).\n   - NP-Hard: Problems to which EVERY problem in NP can be reduced in polynomial time ($L' le_P L$). Need NOT be in NP.\n   - NP-Complete: Problems that are IN NP AND ARE NP-Hard.\n\n2. Proving a Problem $L$ is NP-Complete (2 Steps):\n   1. Prove $L in NP$ (Show a polynomial-time verification algorithm for a given certificate).\n   2. Select a known NP-Complete problem $L'$ and prove $L' le_P L$ (Polynomial-Time Reduction)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Computers and Intractability: A Guide to the Theory of NP-Completeness",
        "author": "Michael R. Garey, David S. Johnson"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks NP-Completeness Overview",
        "url": "https://www.geeksforgeeks.org/np-completeness-set-1/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define P, NP, NP-Hard, and NP-Complete complexity classes with a Venn Diagram. (2 Marks)",
        "State Cook's Theorem (Cook-Levin Theorem). (2 Marks)",
        "What is Polynomial-Time Reduction ($L_1 le_P L_2$)? (2 Marks)"
      ],
      "sixMarks": [
        "Explain the 2 steps required to prove that a newly discovered decision problem $L$ is NP-Complete. (6 Marks)",
        "Explain 3-SAT to Independent Set polynomial-time reduction proof ($3\text{-SAT} le_P \text{INDEPENDENT-SET}$). (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Computational Complexity & Intractability. Detail P vs NP Millennium Prize Problem, Non-deterministic Turing Machine formulation, Karp's 21 NP-Complete Problems (3-SAT, Clique, Vertex Cover, Hamiltonian Cycle, TSP, Subset Sum, Knapsack), and dealing with NP-Completeness in practice. (10 Marks)"
      ]
    }
  },
  {
    "title": "Algorithm Applications",
    "slug": "daa-algorithm-applications",
    "order": 14,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Explore real-world domain applications: Algorithms in Software Engineering, Database Systems (B-Trees, Query Optimization), Artificial Intelligence (A* Search, Minimax), Networks (Routing Protocols), Cloud Computing, and Case Studies.",
    "subTopics": [
      "Algorithm Applications in Software Engineering",
      "Algorithm Applications in Databases",
      "Algorithm Applications in Artificial Intelligence",
      "Algorithm Applications in Networks",
      "Algorithm Applications in Cloud Computing",
      "Real-World Algorithm Case Studies"
    ],
    "prerequisiteTitles": [
      "Divide and Conquer Technique",
      "Greedy Method",
      "Dynamic Programming"
    ],
    "learningObjectives": [
      "Analyze Database Query Optimization & B+ Tree Indexing algorithms.",
      "Understand AI Search Algorithms: A* Heuristic Search ($f(n) = g(n) + h(n)$) and Minimax with Alpha-Beta Pruning.",
      "Analyze Network Routing Algorithms: OSPF Link-State (Dijkstra) vs BGP Path-Vector."
    ],
    "notes": [
      {
        "title": "A* Heuristic Search & Network Routing Algorithm Case Studies",
        "content": "REAL-WORLD ALGORITHM APPLICATIONS\n\n1. Artificial Intelligence: A* Search Algorithm\n   Combines Dijkstra's actual cost $g(n)$ with a heuristic estimate $h(n)$ of remaining cost:\n   $f(n) = g(n) + h(n)$\n   - Admissible Heuristic: $h(n)$ NEVER overestimates actual cost to reach goal ($h(n) le h^*(n)$). Guarantees optimal path finding!\n\n2. Database Systems: Query Optimization & B+ Trees\n   - B+ Trees ($O(log N)$ search/insert) index billions of records for disk I/O reduction.\n   - Dynamic Programming Query Optimizer computes join ordering (Selinger Optimizer)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Artificial Intelligence: A Modern Approach",
        "author": "Stuart Russell, Peter Norvig"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks A* Search Algorithm",
        "url": "https://www.geeksforgeeks.org/a-search-algorithm/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain A* Search evaluation function $f(n) = g(n) + h(n)$. What makes a heuristic Admissible? (2 Marks)",
        "How is Dijkstra's algorithm applied in OSPF Network Routing protocols? (2 Marks)",
        "What role do B+ Tree algorithms play in database index search? (2 Marks)"
      ],
      "sixMarks": [
        "Explain A* Search algorithm with pseudocode and trace grid pathfinding from Start to Goal with Manhattan Distance heuristic. (6 Marks)",
        "Describe Minimax algorithm with Alpha-Beta Pruning for two-player game trees (Chess / Tic-Tac-Toe). (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Industry Algorithmic Engineering. Detail Google PageRank random walk eigenvector algorithm, Consistent Hashing in Distributed Caches (DynamoDB / Cassandra), Recommendation System Collaborative Filtering algorithms, and High-Frequency Trading order matching engines. (10 Marks)"
      ]
    }
  },
  {
    "title": "Algorithm Implementation and Practice",
    "slug": "daa-algorithm-implementation-and-practice",
    "order": 15,
    "estimatedHours": 6,
    "difficulty": "Advanced",
    "description": "Hands-on algorithm coding: Implementing in C/C++/Java/Python, Debugging strategies, Time/Space profiling, Competitive Programming (Codeforces, LeetCode), and Algorithm Visualization.",
    "subTopics": [
      "Implementing Algorithms in C/C++/Java/Python",
      "Debugging Algorithms",
      "Optimizing Solutions",
      "Competitive Programming Problems",
      "Coding Interview Problems",
      "Algorithm Visualization"
    ],
    "prerequisiteTitles": [
      "Searching Algorithm Analysis",
      "Sorting Algorithm Analysis",
      "Graph Algorithms"
    ],
    "learningObjectives": [
      "Implement core algorithms in C/C++/Java/Python with clean modular code.",
      "Profile memory consumption and execution time using Profilers / Benchmarks.",
      "Solve competitive programming & technical interview problems."
    ],
    "notes": [
      {
        "title": "Algorithm Implementation Checklist & Profiling Tools",
        "content": "ALGORITHM IMPLEMENTATION & PRACTICAL BENCHMARKING\n\n1. Implementation Quality Checklist:\n   - Edge Cases Handled: Empty inputs, single element, duplicates, negative numbers, max integer overflow ($2^{31}-1$).\n   - Auxiliary Space Minimal: In-place modifications wherever possible ($O(1)$ extra memory).\n   - Clean Modular Abstraction: Functions broken into single-responsibility helpers.\n\n2. Code Implementation Example (Dijkstra in C++ STL):\n   #include <iostream>\n   #include <vector>\n   #include <queue>\n   using namespace std;\n\n   typedef pair<int, int> pii; // {dist, node}\n\n   vector<int> dijkstra(int V, vector<vector<pii>>& adj, int src) {\n       priority_queue<pii, vector<pii>, greater<pii>> pq;\n       vector<int> dist(V, 1e9);\n       dist[src] = 0;\n       pq.push({0, src});\n       while (!pq.empty()) {\n           auto [d, u] = pq.top(); pq.pop();\n           if (d > dist[u]) continue;\n           for (auto& [v, w] : adj[u]) {\n               if (dist[u] + w < dist[v]) {\n                   dist[v] = dist[u] + w;\n                   pq.push({dist[v], v});\n               }\n           }\n       }\n       return dist;\n   }"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Competitive Programmer's Handbook",
        "author": "Antti Laaksonen"
      }
    ],
    "practiceLinks": [
      {
        "title": "LeetCode Algorithms Practice",
        "url": "https://leetcode.com/problemset/all/"
      },
      {
        "title": "Visualgo Algorithm Visualizer",
        "url": "https://visualgo.net/en"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State 3 common edge cases that break naive algorithm implementations. (2 Marks)",
        "How does C++ `std::priority_queue` implement Min-Heap vs Max-Heap? (2 Marks)",
        "What is the role of Algorithm Visualization tools like VisuAlgo in learning? (2 Marks)"
      ],
      "sixMarks": [
        "Write complete C++ or Python code for Merge Sort. Include benchmark timer logic to measure execution time for $N = 100,000$ elements. (6 Marks)",
        "Explain memory debugging and profiling tools (GDB, Valgrind, Python `cProfile`) to detect memory leaks and CPU bottlenecks. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Algorithmic Coding Mastery. Detail top competitive programming paradigms (Segment Trees with Lazy Propagation, Disjoint Set Union by Rank, Fast I/O optimizations), interview problem-solving frameworks, and code refactoring for enterprise production deployment. (10 Marks)"
      ]
    }
  }
];
