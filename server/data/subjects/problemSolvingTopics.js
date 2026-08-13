module.exports = [
  {
    "title": "Introduction to Problem Solving",
    "slug": "problem-solving-introduction",
    "order": 1,
    "estimatedHours": 3,
    "difficulty": "Beginner",
    "description": "Build problem-solving foundations: Introduction to Problem Solving, Importance of Problem Solving Skills in engineering and CS careers, Problem Solving Process (understand → analyze → design → implement → test), Understanding Problems (reading carefully, identifying what is known vs unknown), Problem Identification (recognizing problem type), Problem Definition (formal specification), Analytical Thinking, and Logical Reasoning.",
    "subTopics": [
      "Introduction to Problem Solving",
      "Importance of Problem Solving Skills",
      "Problem Solving Process",
      "Understanding Problems",
      "Problem Identification",
      "Problem Definition",
      "Analytical Thinking",
      "Logical Reasoning"
    ],
    "prerequisiteTitles": [],
    "learningObjectives": [
      "Follow the 5-step problem solving process: Understand → Analyze → Design Solution → Implement → Test and Verify.",
      "Distinguish problem identification (what is the problem?) from problem definition (formal specification of inputs, outputs, constraints).",
      "Apply analytical thinking to break problems into subproblems and identify logical dependencies."
    ],
    "notes": [
      {
        "title": "Problem Solving Process, Analytical Thinking Framework",
        "content": "INTRODUCTION TO PROBLEM SOLVING\n\n1. Problem Solving Process (5 Steps):\n   Step 1: UNDERSTAND the Problem\n   - Read the problem statement carefully (multiple times).\n   - Identify: What is given? What is asked? What are constraints?\n   - Ask: What does a correct solution look like?\n   \n   Step 2: ANALYZE the Problem\n   - Identify inputs and their types/ranges.\n   - Identify expected output format.\n   - Find edge cases (empty input, max values, negative numbers).\n   - Identify problem category (search, sort, mathematical, string, etc.)\n   \n   Step 3: DESIGN the Solution\n   - Write pseudocode or flowchart.\n   - Consider multiple approaches.\n   - Analyze efficiency (time and space).\n   - Choose optimal approach.\n   \n   Step 4: IMPLEMENT the Solution\n   - Translate pseudocode to actual code.\n   - Follow clean code practices.\n   - Handle edge cases in code.\n   \n   Step 5: TEST and VERIFY\n   - Test with provided examples.\n   - Test with edge cases.\n   - Verify time/space constraints are met.\n\n2. Problem Identification vs Problem Definition:\n   Problem Identification: \"Something is wrong, find defect in sorted array search.\"\n   Problem Definition:\n   - Input: Integer array A[0..n-1] (sorted ascending), integer target T.\n   - Output: Index i if A[i] = T, else -1.\n   - Constraints: 1 ≤ n ≤ 10^6, -10^9 ≤ A[i] ≤ 10^9.\n   - Expected time: O(log n).\n\n3. Analytical Thinking Framework:\n   a) DECOMPOSITION: Break large problem into smaller sub-problems.\n      Example: \"Build student grade system\" →\n      - Input student data, Calculate grades, Generate report, Store results.\n   \n   b) ABSTRACTION: Focus on essential features, ignore irrelevant details.\n      Example: Sorting problem → Only care about comparison, not data type.\n   \n   c) PATTERN RECOGNITION: Identify common problem patterns.\n      - Linear search, binary search, sliding window, two pointers, recursion.\n   \n   d) LOGICAL REASONING: Chain of valid logical conclusions.\n      If a>b AND b>c → a>c (transitive reasoning)\n      If NOT (A AND B) → NOT A OR NOT B (De Morgan's law)\n\n4. Real Example - Complete Analysis:\n   Problem: \"Find sum of all even numbers from 1 to N.\"\n   \n   UNDERSTAND: Need sum of 2+4+6+...+(N or N-1)\n   ANALYZE: Input: N (positive integer). Output: Integer sum. Constraint: N ≥ 1.\n   DESIGN: Use formula sum = k×(k+1) where k = N/2.\n   IMPLEMENT:\n   int sumEven(int N) {\n       int k = N / 2;\n       return k * (k + 1);\n   }\n   TEST: N=10 → k=5 → 5×6=30. Check: 2+4+6+8+10=30 ✓"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "How to Solve It",
        "author": "George Polya"
      },
      {
        "title": "Problem Solving with C++",
        "author": "Walter Savitch"
      }
    ],
    "practiceLinks": [
      {
        "title": "HackerRank Problem Solving",
        "url": "https://www.hackerrank.com/domains/algorithms"
      }
    ],
    "questionBank": {
      "conceptual": [
        "List the 5 steps of the problem solving process in order. (2 Marks)",
        "What is the difference between Problem Identification and Problem Definition? (2 Marks)",
        "Explain Decomposition and Abstraction as analytical thinking strategies. (2 Marks)"
      ],
      "sixMarks": [
        "Apply the 5-step problem solving process to: 'Find whether a given number N is prime or not'. Show each step: understand, analyze, design, implement, test. (6 Marks)",
        "Describe analytical thinking with all four components (Decomposition, Abstraction, Pattern Recognition, Logical Reasoning) applied to 'Design a library book management system'. (6 Marks)"
      ],
      "longAnswer": [
        "Problem solving comprehensive: Importance in engineering careers, 5-step process with examples, analytical thinking framework (decomposition, abstraction, pattern recognition, logical reasoning), problem categorization (mathematical, string, search, graph, optimization), problem definition template (input/output/constraints/examples), edge case identification strategy, and approach to solving unfamiliar problems systematically. (10 Marks)"
      ]
    }
  },
  {
    "title": "Computational Thinking",
    "slug": "problem-solving-computational-thinking",
    "order": 2,
    "estimatedHours": 3,
    "difficulty": "Beginner",
    "description": "Master Computational Thinking: Introduction to Computational Thinking as systematic problem-solving framework, Decomposition (breaking problems into parts), Pattern Recognition (finding similarities and trends), Abstraction (focusing on essential information), Algorithmic Thinking (step-by-step solution design), Logical Approach to Problem Solving, and Real-World Applications of Computational Thinking in CS and engineering.",
    "subTopics": [
      "Introduction to Computational Thinking",
      "Decomposition",
      "Pattern Recognition",
      "Abstraction",
      "Algorithmic Thinking",
      "Logical Approach to Problem Solving",
      "Real-World Applications of Computational Thinking"
    ],
    "prerequisiteTitles": [
      "Introduction to Problem Solving"
    ],
    "learningObjectives": [
      "Apply Decomposition to break 'Build an online shopping website' into independent sub-problems.",
      "Use Pattern Recognition to identify that Fibonacci, Pascal's triangle, and staircase problems all use recursion/DP.",
      "Write algorithmic solution as numbered, unambiguous steps that a computer could follow exactly."
    ],
    "notes": [
      {
        "title": "Computational Thinking Framework with Worked Examples",
        "content": "COMPUTATIONAL THINKING\n\n1. Four Pillars of Computational Thinking:\n   \n   DECOMPOSITION: Divide problem into smaller manageable parts.\n   Example: \"Create a social media app\" decomposes to:\n   - User authentication module (register, login, logout)\n   - Profile management module (view, edit, delete profile)\n   - Post module (create, read, update, delete posts)\n   - Feed module (display posts from followed users)\n   - Notification module (likes, comments, follows)\n   - Search module (find users, posts, hashtags)\n   \n   PATTERN RECOGNITION: Find similarities, trends, and repetitions.\n   Patterns in coding problems:\n   - Counting/summation: use loops or formulas\n   - Searching: linear (O(n)) or binary (O(log n)) search\n   - Optimization: greedy or dynamic programming\n   - Tree/graph traversal: DFS or BFS\n   - Sorting: comparison-based (O(n log n)) or counting (O(n))\n   \n   ABSTRACTION: Ignore unnecessary details, keep essential information.\n   Example: When designing a sorting algorithm:\n   - Abstract away: data type (int/string/object), storage format\n   - Focus on: comparison relationship, movement of elements\n   \n   ALGORITHMIC THINKING: Design clear step-by-step instructions.\n   Example Algorithm: Find Maximum in Array\n   ALGORITHM FindMax(A, n):\n     INPUT: Array A of n numbers\n     OUTPUT: Maximum element\n     Step 1: max = A[0]\n     Step 2: FOR i = 1 to n-1:\n     Step 3:   IF A[i] > max THEN max = A[i]\n     Step 4: RETURN max\n\n2. Applying CT to Real Problem:\n   Problem: \"Find all students who scored above average in exam.\"\n   \n   DECOMPOSE:\n   - Sub-problem 1: Calculate average score.\n   - Sub-problem 2: Find students above that average.\n   - Sub-problem 3: Output their names.\n   \n   PATTERNS RECOGNIZED:\n   - Two-pass algorithm: first compute average, then filter.\n   - List filtering pattern.\n   \n   ABSTRACT:\n   - Input: List of (name, score) pairs.\n   - We need: sum/count for average, then comparison.\n   \n   ALGORITHMIC SOLUTION:\n   total = 0\n   For each student: total += score\n   average = total / count\n   For each student: if score > average, print name\n\n3. Real-World Applications:\n   - Search Engines (Google): Decompose query, pattern match pages, abstract relevance, PageRank algorithm.\n   - GPS Navigation: Decompose route, pattern = shortest path, abstract map to graph, Dijkstra algorithm.\n   - Spam Filters: Decompose email, patterns of spam words, abstract to Bayesian classification.\n   - Medical Diagnosis AI: Decompose symptoms, pattern match to diseases, abstract patient data, decision tree."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Computational Thinking for the Modern Problem Solver",
        "author": "Riley, Hunt"
      }
    ],
    "practiceLinks": [
      {
        "title": "CS Unplugged Computational Thinking",
        "url": "https://csunplugged.org/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define Computational Thinking. Name its four pillars. (2 Marks)",
        "What is Abstraction in Computational Thinking? Give a programming example. (2 Marks)",
        "How does Pattern Recognition help in solving programming problems? Give 3 examples. (2 Marks)"
      ],
      "sixMarks": [
        "Apply all four pillars of Computational Thinking to problem: 'Design a Student Grade Management System'. Show decomposition, patterns, abstractions used, and final algorithm. (6 Marks)",
        "Explain how Computational Thinking is applied in 3 real-world CS applications (search engine, GPS navigation, recommendation system). (6 Marks)"
      ],
      "longAnswer": [
        "Computational Thinking comprehensive: Definition and importance, detailed explanation of all four pillars with examples, distinguishing CT from programming, applying CT to software system design, CT in data science (data decomposition, statistical pattern recognition, model abstraction, ML algorithms), benefits for non-programmers, Google's CT framework in education, and CT assessment problems with solutions. (10 Marks)"
      ]
    }
  },
  {
    "title": "Problem Analysis Techniques",
    "slug": "problem-solving-analysis-techniques",
    "order": 3,
    "estimatedHours": 3,
    "difficulty": "Beginner",
    "description": "Master problem analysis: Understanding Problem Statements (careful reading, keyword extraction), Identifying Requirements (functional requirements from problem statement), Input and Output Analysis (data types, ranges, formats), Constraints Identification (time, memory, value limits), Edge Case Analysis (boundary conditions, empty inputs, duplicates), Breaking Complex Problems into Smaller Problems, and Root Cause Analysis techniques.",
    "subTopics": [
      "Understanding Problem Statements",
      "Identifying Requirements",
      "Input and Output Analysis",
      "Constraints Identification",
      "Edge Case Analysis",
      "Breaking Complex Problems into Smaller Problems",
      "Root Cause Analysis"
    ],
    "prerequisiteTitles": [
      "Computational Thinking"
    ],
    "learningObjectives": [
      "Extract requirements from a problem statement: identify inputs (type, range, size), outputs (format, precision), and constraints.",
      "Generate comprehensive test cases including edge cases: empty input, single element, maximum values, duplicates, negative numbers.",
      "Break a complex problem into independent sub-problems with clear interfaces between them."
    ],
    "notes": [
      {
        "title": "Problem Analysis Framework with Edge Cases and Requirements",
        "content": "PROBLEM ANALYSIS TECHNIQUES\n\n1. Understanding Problem Statement - Checklist:\n   When reading a competitive programming or software problem:\n   a) WHAT to do? (compute, find, sort, search, count)\n   b) INPUT: type, size constraints, format.\n   c) OUTPUT: format, precision (decimal places), order.\n   d) SPECIAL conditions or edge cases mentioned.\n   e) EXAMPLES provided - verify your understanding matches.\n   \n   Problem: \"Given an array A of N integers. Find if there exist two elements whose sum equals Target T.\"\n   Analysis:\n   - What: Find pair with given sum.\n   - Input: Array A (1 ≤ N ≤ 10^5, -10^9 ≤ A[i] ≤ 10^9), target T.\n   - Output: \"YES\" if pair exists, \"NO\" otherwise.\n   - Edge cases: Empty array, single element, negative numbers, duplicates.\n\n2. Edge Case Analysis - Template:\n   CATEGORY: Empty Input\n   Example: N=0 or empty string → return default value immediately.\n   \n   CATEGORY: Single Element\n   Example: N=1 → cannot form pair, return \"NO\".\n   \n   CATEGORY: Boundary Values\n   Example: A[i] = INT_MAX or INT_MIN → overflow protection needed.\n   \n   CATEGORY: Duplicates\n   Example: A = [3, 3], T = 6 → should return \"YES\" (using same element?)\n   Clarify problem: can we use same element twice?\n   \n   CATEGORY: Negative Numbers\n   Example: A = [-3, 5], T = 2 → -3+5=2, \"YES\" ✓ (algorithm handles negatives?)\n   \n   CATEGORY: Sorted vs Unsorted\n   Example: Does algorithm assume sorted input? What if unsorted?\n\n3. Input/Output Analysis for Common Problem Types:\n   \n   Mathematical Problem:\n   Input: Integers a, b (1 ≤ a, b ≤ 10^18). Need long long not int!\n   Output: Single integer. May need 64-bit result.\n   \n   String Problem:\n   Input: String S (1 ≤ |S| ≤ 10^5, only lowercase letters a-z).\n   Output: Transformed string or count.\n   \n   Graph Problem:\n   Input: N nodes, M edges. Adjacency list representation.\n   Output: Distance, path, or boolean.\n\n4. Breaking Complex Problems:\n   Problem: \"Implement a simple student database with add, delete, search, and display.\"\n   \n   Sub-problems:\n   1. Data Structure: How to store student data? (array of structs)\n      struct Student { int id; char name[50]; float gpa; };\n   \n   2. Add function: Find empty slot, validate, insert.\n   3. Delete function: Find by ID, remove, shift array.\n   4. Search function: Linear search by ID or name.\n   5. Display function: Print all students in formatted table.\n   \n   Each sub-problem can be implemented and tested INDEPENDENTLY.\n   Integration: Connect them via main menu."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "The Art and Science of Computing",
        "author": "Gary Lewandowski"
      }
    ],
    "practiceLinks": [
      {
        "title": "LeetCode Problem Analysis Practice",
        "url": "https://leetcode.com/problemset/all/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is Edge Case Analysis? Give 4 common categories of edge cases. (2 Marks)",
        "Explain Input/Output Analysis with an example of a sorting problem. (2 Marks)",
        "How do you identify requirements from a problem statement? (2 Marks)"
      ],
      "sixMarks": [
        "Analyze problem: 'Find the second largest element in an array of N integers.' Extract requirements, identify constraints, list all edge cases, and design algorithm. (6 Marks)",
        "Break down problem 'Design an online bookstore' into sub-problems. Define interfaces (inputs/outputs) for each sub-problem. (6 Marks)"
      ],
      "longAnswer": [
        "Problem analysis comprehensive: Requirement extraction methodology (functional vs non-functional requirements), formal problem specification template (inputs, outputs, constraints, examples), complete edge case taxonomy (empty, single, boundary, duplicates, negatives, overflow), root cause analysis techniques (5-Whys, fishbone diagram for bugs), top-down vs bottom-up problem decomposition, and analysis of 3 complete competition programming problems with all analysis steps. (10 Marks)"
      ]
    }
  },
  {
    "title": "Logical Reasoning",
    "slug": "problem-solving-logical-reasoning",
    "order": 4,
    "estimatedHours": 3,
    "difficulty": "Beginner",
    "description": "Develop logical reasoning: Logical Operators (AND, OR, NOT, XOR), Conditional Logic (if-then, if-and-only-if), Logical Expressions and Truth Tables, Decision Making under constraints, Sequence and Pattern Problems, Number Series (arithmetic, geometric, special), Coding Logic Development, and Puzzle-Based Problem Solving.",
    "subTopics": [
      "Logical Operators",
      "Conditional Logic",
      "Logical Expressions",
      "Decision Making",
      "Sequence and Pattern Problems",
      "Number Series",
      "Coding Logic Development",
      "Puzzle-Based Problem Solving"
    ],
    "prerequisiteTitles": [
      "Problem Analysis Techniques"
    ],
    "learningObjectives": [
      "Construct truth tables for compound logical expressions using AND, OR, NOT operators.",
      "Identify the next term in arithmetic (common difference), geometric (common ratio), and special number series.",
      "Convert logical reasoning puzzles into formal if-then statements and resolve them systematically."
    ],
    "notes": [
      {
        "title": "Logic Operators, Truth Tables, Number Series, and Puzzle Solving",
        "content": "LOGICAL REASONING\n\n1. Boolean Logic Operators and Truth Tables:\n   A     B     A AND B   A OR B   NOT A   A XOR B\n   F     F       F         F        T        F\n   F     T       F         T        T        T\n   T     F       F         T        F        T\n   T     T       T         T        F        F\n   \n   De Morgan's Laws (very useful in coding!):\n   NOT(A AND B) = (NOT A) OR (NOT B)\n   NOT(A OR B) = (NOT A) AND (NOT B)\n   \n   C/C++ code:\n   // Check if number is in range [10, 20] AND even:\n   if (x >= 10 && x <= 20 && x % 2 == 0) { ... }\n   // Using De Morgan for: NOT in range:\n   if (x < 10 || x > 20) { /* outside range */ }\n\n2. Conditional Logic:\n   IF-THEN: \"If it rains, carry an umbrella.\"\n   Contrapositive: \"If no umbrella, it didn't rain.\" (logically equivalent)\n   \n   Problem Example: \"If a number is divisible by 4, it is even. 16 is divisible by 4. Conclusion: 16 is even.\" ✓\n   \n   Decision Tree for \"Is number positive, negative, or zero?\":\n   if (n > 0)      → Positive\n   else if (n < 0) → Negative\n   else            → Zero (n == 0)\n\n3. Number Series Patterns:\n   Arithmetic Series: Constant difference.\n   2, 5, 8, 11, 14 → d=3 → next = 17\n   Formula: Tₙ = a + (n-1)d\n   \n   Geometric Series: Constant ratio.\n   3, 6, 12, 24, 48 → r=2 → next = 96\n   Formula: Tₙ = a × r^(n-1)\n   \n   Special Series:\n   Fibonacci: 1, 1, 2, 3, 5, 8, 13, 21, ... (Tₙ = Tₙ₋₁ + Tₙ₋₂)\n   Perfect Squares: 1, 4, 9, 16, 25, 36, 49 (Tₙ = n²)\n   Perfect Cubes: 1, 8, 27, 64, 125 (Tₙ = n³)\n   Primes: 2, 3, 5, 7, 11, 13, 17, 19, ...\n   Triangular: 1, 3, 6, 10, 15, 21 (Tₙ = n(n+1)/2)\n\n4. Puzzle-Based Problem Solving:\n   Classic Puzzle: \"A farmer has 17 sheep. All but 9 die. How many are left?\"\n   Answer: 9 (all BUT 9 means 9 remain).\n   \n   Logic Grid Puzzle Approach:\n   1. List all variables and their possible values.\n   2. Apply constraints one by one.\n   3. Eliminate impossible values.\n   4. Deduce remaining values.\n   \n   Programming Puzzle: FizzBuzz\n   Print 1 to N. If divisible by 3: \"Fizz\". If by 5: \"Buzz\". If by 15: \"FizzBuzz\".\n   for i in range(1, n+1):\n       if i % 15 == 0: print(\"FizzBuzz\")\n       elif i % 3 == 0: print(\"Fizz\")\n       elif i % 5 == 0: print(\"Buzz\")\n       else: print(i)\n   Key: Check 15 FIRST (15=3×5), then 3, then 5, else number."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Programming Logic and Design",
        "author": "Tony Gaddis"
      }
    ],
    "practiceLinks": [
      {
        "title": "Logical Reasoning Practice IndiaBIX",
        "url": "https://www.indiabix.com/logical-reasoning/questions-and-answers/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State De Morgan's Laws. Show their truth table verification. (2 Marks)",
        "Find the next 3 terms: 2, 6, 18, 54, ___, ___, ___ and identify the series type. (2 Marks)",
        "What is a contrapositive? Is it logically equivalent to the original implication? (2 Marks)"
      ],
      "sixMarks": [
        "Find the pattern and next term for: (a) 1, 1, 2, 3, 5, 8, _. (b) 1, 4, 9, 16, 25, _. (c) 2, 3, 5, 7, 11, 13, _. Explain the pattern for each. (6 Marks)",
        "Write C code for FizzBuzz and a number series detector. The detector should identify if input sequence is arithmetic or geometric. (6 Marks)"
      ],
      "longAnswer": [
        "Logical reasoning comprehensive: Boolean algebra (operators, laws, De Morgan, truth tables), conditional logic (if-then, biconditional, contrapositive, converse), decision making with multiple conditions (nested if, switch-case, decision tables), number series classification (arithmetic, geometric, Fibonacci, special sequences), systematic puzzle solving approach, and programming applications of logical reasoning (input validation, game logic, state machines). (10 Marks)"
      ]
    }
  },
  {
    "title": "Algorithmic Thinking",
    "slug": "problem-solving-algorithmic-thinking",
    "order": 5,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Design effective algorithms: Introduction to Algorithms (definition, properties), Characteristics of Good Algorithms (finiteness, definiteness, effectiveness, input/output), Algorithm Design Process, Writing Algorithms in natural language, Flowcharts (decision boxes, process boxes, arrows), Pseudocode Writing conventions, Algorithm Analysis Basics (count operations), and Algorithm Optimization strategies.",
    "subTopics": [
      "Introduction to Algorithms",
      "Characteristics of Algorithms",
      "Algorithm Design Process",
      "Writing Algorithms",
      "Flowcharts",
      "Pseudocode Writing",
      "Algorithm Analysis Basics",
      "Algorithm Optimization"
    ],
    "prerequisiteTitles": [
      "Logical Reasoning"
    ],
    "learningObjectives": [
      "State 5 characteristics of an algorithm: Input, Output, Definiteness, Finiteness, Effectiveness.",
      "Draw flowcharts using standard symbols: oval (start/stop), rectangle (process), diamond (decision), parallelogram (I/O).",
      "Write pseudocode for sorting, searching, and iterative algorithms using standard conventions."
    ],
    "notes": [
      {
        "title": "Algorithm Properties, Flowchart Symbols, Pseudocode Examples",
        "content": "ALGORITHMIC THINKING\n\n1. Algorithm Definition and Properties:\n   An Algorithm is a finite, ordered sequence of well-defined instructions to solve a problem.\n   \n   Five Characteristics (FIDOE):\n   F - Finiteness: Must terminate after finite steps.\n   I - Input: Zero or more inputs.\n   D - Definiteness: Each step clearly and unambiguously defined.\n   O - Output: One or more outputs.\n   E - Effectiveness: Each step must be feasible (no infinite computation).\n\n2. Flowchart Symbols:\n   ╔═══════╗  Oval     = START / STOP (Terminator)\n   ╔═══════╗  Rectangle= PROCESS (computation, assignment)\n   ◇          Diamond  = DECISION (yes/no question)\n   ╱═══════╲  Parallelogram = INPUT / OUTPUT\n   →          Arrow    = Flow direction\n\n3. Flowchart for Finding Maximum of 3 Numbers:\n   START\n   → INPUT A, B, C\n   → A > B?\n     YES → A > C?\n              YES → OUTPUT \"A is max\" → END\n              NO  → OUTPUT \"C is max\" → END\n     NO  → B > C?\n              YES → OUTPUT \"B is max\" → END\n              NO  → OUTPUT \"C is max\" → END\n\n4. Pseudocode Writing Conventions:\n   - Inputs: READ variable\n   - Outputs: PRINT/WRITE variable\n   - Assignment: variable ← value (or =)\n   - Conditions: IF condition THEN ... ELSE ... END IF\n   - Loops: FOR i ← 1 TO n DO ... END FOR\n             WHILE condition DO ... END WHILE\n   - Functions: FUNCTION name(params) ... RETURN value END FUNCTION\n\n5. Pseudocode Example - Bubble Sort:\n   ALGORITHM BubbleSort(A, n):\n     INPUT: Array A[0..n-1]\n     OUTPUT: A sorted in ascending order\n     \n     FOR i ← 0 TO n-2 DO\n       FOR j ← 0 TO n-i-2 DO\n         IF A[j] > A[j+1] THEN\n           temp ← A[j]\n           A[j] ← A[j+1]\n           A[j+1] ← temp\n         END IF\n       END FOR\n     END FOR\n   END ALGORITHM\n\n6. Algorithm Analysis Basics:\n   Count the number of basic operations (comparisons, assignments).\n   \n   Example: Linear Search\n   BestCase: 1 comparison (target is first element) → O(1)\n   WorstCase: n comparisons (target is last or absent) → O(n)\n   AverageCase: n/2 comparisons → O(n)\n   \n   Example: Bubble Sort\n   Inner loop runs: (n-1)+(n-2)+...+1 = n(n-1)/2 times → O(n²)"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Introduction to Algorithms",
        "author": "CLRS (Cormen, Leiserson, Rivest, Stein)"
      }
    ],
    "practiceLinks": [
      {
        "title": "VisuAlgo - Algorithm Visualization",
        "url": "https://visualgo.net/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "List the 5 properties of an algorithm with brief explanation of each. (2 Marks)",
        "Draw the standard flowchart symbols and their meanings. (2 Marks)",
        "What is pseudocode? Why is it used before coding? (2 Marks)"
      ],
      "sixMarks": [
        "Write pseudocode and draw flowchart for: Finding factorial of a number N using both iterative and recursive approaches. (6 Marks)",
        "Design an algorithm and write pseudocode for: Find the largest and smallest element in an array. Count operations and determine time complexity. (6 Marks)"
      ],
      "longAnswer": [
        "Algorithmic thinking comprehensive: Algorithm definition and properties, algorithm design strategies (brute force, divide and conquer, greedy, dynamic programming overview), flowchart construction for control structures (sequence, selection, iteration), pseudocode for 5 algorithms (max finding, factorial, Fibonacci, linear search, bubble sort), algorithm correctness (loop invariant concept), basic complexity analysis (best/worst/average case), and algorithm comparison with selection criteria. (10 Marks)"
      ]
    }
  },
  {
    "title": "Programming Problem Solving Basics",
    "slug": "problem-solving-programming-basics",
    "order": 6,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Solve problems through programming: Translating Problems into Code (algorithm → code), Variables and Data Types (choosing right type), Operators (arithmetic, relational, logical, bitwise), Conditional Statements (if-elif-else, switch), Loops (for, while, do-while, loop control), Functions (parameter passing, return values), Modular Programming (divide code into functions), and Debugging Techniques.",
    "subTopics": [
      "Translating Problems into Code",
      "Variables and Data Types",
      "Operators",
      "Conditional Statements",
      "Loops",
      "Functions",
      "Modular Programming",
      "Debugging Techniques"
    ],
    "prerequisiteTitles": [
      "Algorithmic Thinking"
    ],
    "learningObjectives": [
      "Translate pseudocode algorithms into working C/Python code following the algorithm step by step.",
      "Choose appropriate data type: int for counts/indices, long long for large values, float/double for decimals, string for text.",
      "Apply modular programming by dividing solution into focused functions with single responsibility."
    ],
    "notes": [
      {
        "title": "Algorithm to Code Translation, Modular Programming, Debugging",
        "content": "PROGRAMMING PROBLEM SOLVING BASICS\n\n1. Translation from Pseudocode to Code:\n   Pseudocode:\n   FUNCTION isPrime(n):\n     IF n <= 1 THEN RETURN false\n     FOR i ← 2 TO sqrt(n) DO\n       IF n MOD i = 0 THEN RETURN false\n     END FOR\n     RETURN true\n   \n   C Implementation:\n   #include <math.h>\n   int isPrime(int n) {\n       if (n <= 1) return 0;\n       for (int i = 2; i <= (int)sqrt(n); i++) {\n           if (n % i == 0) return 0;\n       }\n       return 1;\n   }\n   \n   Python Implementation:\n   import math\n   def is_prime(n):\n       if n <= 1: return False\n       for i in range(2, int(math.sqrt(n)) + 1):\n           if n % i == 0: return False\n       return True\n\n2. Data Type Selection Guide:\n   Problem Constraint          → Data Type\n   Count (1 to 10^6)          → int (C), int (Python, unlimited)\n   Large values (up to 10^18) → long long (C), int (Python)\n   Decimal (prices, rates)    → double (C), float (Python)\n   Text                        → char[] or string\n   Multiple values             → array or list\n   \n   Overflow Example:\n   // WRONG: int * int can overflow when both near INT_MAX\n   int a = 100000, b = 100000;\n   int result = a * b;  // OVERFLOW! 10^10 > INT_MAX (2×10^9)\n   \n   // CORRECT:\n   long long result = (long long)a * b;  // 10^10 fits in long long\n\n3. Modular Programming - Problem Decomposition:\n   Problem: \"Check if a number is a perfect number.\"\n   (Perfect number: sum of divisors excluding itself equals number. E.g., 6 = 1+2+3)\n   \n   // Function 1: Get all divisors\n   int sumDivisors(int n) {\n       int sum = 0;\n       for (int i = 1; i < n; i++)\n           if (n % i == 0) sum += i;\n       return sum;\n   }\n   \n   // Function 2: Check perfect\n   int isPerfect(int n) {\n       return n > 0 && sumDivisors(n) == n;\n   }\n   \n   // Main: use the modules\n   int main() {\n       int n;\n       scanf(\"%d\", &n);\n       printf(\"%s\n\", isPerfect(n) ? \"Perfect\" : \"Not Perfect\");\n       return 0;\n   }\n\n4. Debugging Techniques:\n   a) Print Debugging: Add printf/print statements to trace execution.\n      printf(\"After swap: a=%d, b=%d\n\", a, b);\n   \n   b) Dry Run: Manually trace through code with sample values on paper.\n   \n   c) Boundary Testing: Test with n=0, n=1, n=MAX.\n   \n   d) Rubber Duck Debugging: Explain code line-by-line to rubber duck (imaginary listener).\n      Often reveals logic errors through verbalization.\n   \n   e) Binary Search Debugging: If bug in long code, comment half → find which half has bug.\n   \n   Common Bugs:\n   - Off-by-one errors: i < n vs i <= n\n   - Integer overflow: use long long\n   - Uninitialized variables: always initialize!\n   - Array out of bounds: check index < array_size"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Problem Solving with C++",
        "author": "Walter Savitch"
      }
    ],
    "practiceLinks": [
      {
        "title": "HackerRank C Practice",
        "url": "https://www.hackerrank.com/domains/c"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is Modular Programming? List its advantages. (2 Marks)",
        "When would you use 'long long' instead of 'int' in C? (2 Marks)",
        "List 4 common debugging techniques. Which is most effective and why? (2 Marks)"
      ],
      "sixMarks": [
        "Translate algorithm for GCD (Euclidean algorithm) to both C and Python. Apply modular programming to find GCD, LCM using gcd function. (6 Marks)",
        "Debug the following code and explain each bug found:\nint arr[10]; int sum=0;\nfor(int i=0; i<=10; i++) sum+=arr[i];\nint avg = sum/10; printf('%d', avg); (6 Marks)"
      ],
      "longAnswer": [
        "Programming problem solving: Algorithm-to-code translation process, data type selection (with overflow analysis), operators (arithmetic, relational, logical, bitwise for common programming tricks like checking power of 2: n & (n-1) == 0), control flow (all loop types with when-to-use guide, break/continue), function design (single responsibility principle, return types, pass by value vs reference), modular programming benefits, and systematic debugging approach with common error types and fixes. (10 Marks)"
      ]
    }
  },
  {
    "title": "Data Handling and Problem Solving",
    "slug": "problem-solving-data-handling",
    "order": 7,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Solve data-related problems: Arrays (declaration, traversal, manipulation), Strings (character arrays, string functions), Matrices (2D arrays, operations), Basic Data Processing (frequency counting, grouping), Linear Search, Binary Search (sorted arrays), Bubble Sort, Selection Sort, and Insertion Sort algorithms with implementation.",
    "subTopics": [
      "Arrays",
      "Strings",
      "Matrices",
      "Basic Data Processing",
      "Linear Search",
      "Binary Search",
      "Bubble Sort",
      "Selection Sort",
      "Insertion Sort"
    ],
    "prerequisiteTitles": [
      "Programming Problem Solving Basics"
    ],
    "learningObjectives": [
      "Implement Linear Search O(n) and Binary Search O(log n) with their preconditions.",
      "Implement Bubble Sort, Selection Sort, and Insertion Sort with correct nested loop structure.",
      "Solve string problems: reverse, palindrome check, character frequency count."
    ],
    "notes": [
      {
        "title": "Search and Sort Algorithm Implementations in C",
        "content": "DATA HANDLING AND PROBLEM SOLVING\n\n1. Arrays and Common Operations:\n   int A[5] = {30, 10, 50, 20, 40};\n   \n   // Traversal\n   for (int i = 0; i < 5; i++) printf(\"%d \", A[i]);\n   \n   // Find max/min\n   int maxVal = A[0], minVal = A[0];\n   for (int i = 1; i < 5; i++) {\n       if (A[i] > maxVal) maxVal = A[i];\n       if (A[i] < minVal) minVal = A[i];\n   }\n   \n   // Sum and average\n   int sum = 0;\n   for (int i = 0; i < 5; i++) sum += A[i];\n   float avg = (float)sum / 5;\n\n2. Search Algorithms:\n   Linear Search O(n):\n   int linearSearch(int A[], int n, int target) {\n       for (int i = 0; i < n; i++)\n           if (A[i] == target) return i;  // Return index\n       return -1;  // Not found\n   }\n   \n   Binary Search O(log n) - requires SORTED array:\n   int binarySearch(int A[], int n, int target) {\n       int low = 0, high = n - 1;\n       while (low <= high) {\n           int mid = low + (high - low) / 2;  // Prevents overflow\n           if (A[mid] == target) return mid;\n           else if (A[mid] < target) low = mid + 1;\n           else high = mid - 1;\n       }\n       return -1;\n   }\n\n3. Sorting Algorithms:\n   Bubble Sort O(n²): Adjacent element comparison and swap.\n   void bubbleSort(int A[], int n) {\n       for (int i = 0; i < n-1; i++)\n           for (int j = 0; j < n-i-1; j++)\n               if (A[j] > A[j+1]) {\n                   int t=A[j]; A[j]=A[j+1]; A[j+1]=t;\n               }\n   }\n   \n   Selection Sort O(n²): Find minimum, place at front.\n   void selectionSort(int A[], int n) {\n       for (int i = 0; i < n-1; i++) {\n           int minIdx = i;\n           for (int j = i+1; j < n; j++)\n               if (A[j] < A[minIdx]) minIdx = j;\n           int t=A[i]; A[i]=A[minIdx]; A[minIdx]=t;\n       }\n   }\n   \n   Insertion Sort O(n²) best O(n) for nearly sorted:\n   void insertionSort(int A[], int n) {\n       for (int i = 1; i < n; i++) {\n           int key = A[i], j = i-1;\n           while (j >= 0 && A[j] > key) {\n               A[j+1] = A[j]; j--;\n           }\n           A[j+1] = key;\n       }\n   }\n\n4. String Problems:\n   // Reverse a string\n   void reverseString(char s[], int n) {\n       int i=0, j=n-1;\n       while (i < j) { char t=s[i]; s[i]=s[j]; s[j]=t; i++; j--; }\n   }\n   \n   // Check palindrome\n   int isPalindrome(char s[], int n) {\n       for (int i=0; i<n/2; i++)\n           if (s[i] != s[n-1-i]) return 0;\n       return 1;\n   }\n   \n   // Character frequency\n   int freq[26] = {0};  // For lowercase letters\n   for (int i=0; s[i]; i++) freq[s[i]-'a']++;"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Data Structures using C",
        "author": "Reema Thareja"
      }
    ],
    "practiceLinks": [
      {
        "title": "Sorting Visualization",
        "url": "https://visualgo.net/en/sorting"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What precondition is required for Binary Search? Why is it O(log n)? (2 Marks)",
        "Compare Bubble Sort, Selection Sort, and Insertion Sort in terms of time complexity. (2 Marks)",
        "Write C code to check if a string is a palindrome. (2 Marks)"
      ],
      "sixMarks": [
        "Trace Binary Search on array [5,10,15,20,25,30,35] for target=25. Show low, mid, high values at each step. Implement in C. (6 Marks)",
        "Trace Insertion Sort on array [64, 25, 12, 22, 11]. Show array after each iteration. Implement in C. (6 Marks)"
      ],
      "longAnswer": [
        "Data handling comprehensive: Array operations (CRUD, reversal, rotation), 2D arrays (matrix operations, transpose), string processing (reverse, palindrome, anagram check, frequency), linear vs binary search (when to use each, implementation, complexity), all three O(n²) sorting algorithms (bubble, selection, insertion with traces), algorithm comparison table (comparisons, swaps, best/worst/average cases), Python equivalents using built-in functions, and choosing sorting algorithm based on input characteristics. (10 Marks)"
      ]
    }
  },
  {
    "title": "Mathematical Problem Solving",
    "slug": "problem-solving-mathematical",
    "order": 8,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Apply mathematics in problem solving: Number Theory Basics (divisibility, factors), Prime Numbers (Sieve of Eratosthenes), Factors and Multiples, GCD using Euclidean Algorithm, LCM, Modular Arithmetic (modular exponentiation), Combinatorics Basics (permutations, combinations), Probability-Based Problems, and Mathematical Patterns in competitive programming.",
    "subTopics": [
      "Number Theory Basics",
      "Prime Numbers",
      "Factors and Multiples",
      "GCD and LCM",
      "Modular Arithmetic",
      "Combinatorics Basics",
      "Probability-Based Problems",
      "Mathematical Patterns"
    ],
    "prerequisiteTitles": [
      "Data Handling and Problem Solving"
    ],
    "learningObjectives": [
      "Implement Sieve of Eratosthenes to find all primes up to N in O(N log log N).",
      "Apply Euclidean Algorithm: GCD(a,b) = GCD(b, a%b) until b=0.",
      "Compute nCr = n! / (r! × (n-r)!) and apply Pascal's triangle for efficient computation."
    ],
    "notes": [
      {
        "title": "Number Theory, Sieve of Eratosthenes, GCD/LCM, Modular Arithmetic",
        "content": "MATHEMATICAL PROBLEM SOLVING\n\n1. Sieve of Eratosthenes - Find all primes up to N:\n   // O(N log log N) - Most efficient for finding all primes up to N\n   void sieve(int N) {\n       bool isPrime[N+1];\n       memset(isPrime, true, sizeof(isPrime));\n       isPrime[0] = isPrime[1] = false;\n       \n       for (int i = 2; i*i <= N; i++) {\n           if (isPrime[i]) {\n               for (int j = i*i; j <= N; j += i)\n                   isPrime[j] = false;\n           }\n       }\n       // isPrime[k] = true iff k is prime\n       for (int i = 2; i <= N; i++)\n           if (isPrime[i]) printf(\"%d \", i);\n   }\n\n2. GCD using Euclidean Algorithm:\n   GCD(a, b) = GCD(b, a % b) until b = 0.\n   \n   Trace: GCD(48, 18):\n   GCD(48, 18) → GCD(18, 48%18=12) → GCD(12, 18%12=6) → GCD(6, 0) = 6\n   \n   int gcd(int a, int b) {\n       while (b != 0) { int t = b; b = a % b; a = t; }\n       return a;\n   }\n   \n   LCM: LCM(a, b) = (a / GCD(a,b)) * b  [divide first to prevent overflow]\n   int lcm(int a, int b) { return (a / gcd(a, b)) * b; }\n\n3. Modular Arithmetic:\n   Key property: (a + b) % m = ((a % m) + (b % m)) % m\n   \n   Fast Modular Exponentiation (x^n mod m in O(log n)):\n   long long modpow(long long x, long long n, long long m) {\n       long long result = 1;\n       x %= m;\n       while (n > 0) {\n           if (n & 1) result = result * x % m;  // n is odd\n           x = x * x % m;\n           n >>= 1;  // n = n/2\n       }\n       return result;\n   }\n   // modpow(2, 10, 1000) = 1024 % 1000 = 24\n\n4. Combinatorics:\n   Permutation: P(n, r) = n! / (n-r)!\n   \"Number of ways to arrange r items from n.\" (order matters)\n   P(5, 3) = 5! / 2! = 60\n   \n   Combination: C(n, r) = n! / (r! × (n-r)!)\n   \"Number of ways to choose r items from n.\" (order doesn't matter)\n   C(5, 3) = 5! / (3! × 2!) = 10\n   \n   Pascal's Triangle for C(n, r):\n   Row 0:   1\n   Row 1:  1 1\n   Row 2: 1 2 1\n   Row 3:1 3 3 1\n   C(n,r) = C(n-1, r-1) + C(n-1, r)\n   \n   // Dynamic programming for combinations:\n   int C[MAX][MAX];\n   for (int n=0; n<=N; n++) {\n       C[n][0] = C[n][n] = 1;\n       for (int r=1; r<n; r++)\n           C[n][r] = C[n-1][r-1] + C[n-1][r];\n   }"
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
        "title": "Number Theory Problems Codeforces",
        "url": "https://codeforces.com/problemset?tags=number+theory"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain Euclidean algorithm for GCD. Trace GCD(56, 98). (2 Marks)",
        "What is Sieve of Eratosthenes? What is its time complexity? (2 Marks)",
        "What is modular arithmetic? State the addition and multiplication properties. (2 Marks)"
      ],
      "sixMarks": [
        "Implement Sieve of Eratosthenes to find all primes up to 50. Trace the algorithm showing which multiples are crossed out at each step. (6 Marks)",
        "Calculate C(6,2), C(6,3), C(6,4) using Pascal's triangle and formula. Implement Pascal's triangle in C using 2D array. (6 Marks)"
      ],
      "longAnswer": [
        "Mathematical problem solving: Number theory (divisibility tests for 2,3,4,5,9,11), prime checking (trial division O(√n), Sieve O(N log log N)), GCD/LCM algorithms with applications (fraction simplification, scheduling), modular arithmetic (properties, modular inverse, Fermat's little theorem), fast modular exponentiation (binary exponentiation), combinatorics (permutations, combinations, Pascal's triangle DP), and applications in competitive programming. (10 Marks)"
      ]
    }
  },
  {
    "title": "Analytical Reasoning",
    "slug": "problem-solving-analytical-reasoning",
    "order": 9,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Develop analytical reasoning skills: Statement Analysis (evaluate truthfulness), Assumptions (unstated premises), Conclusions (logical deductions), Cause and Effect relationships, Data Interpretation (tables, charts, graphs), Decision-Based Problems (evaluate options), and Analytical Puzzles (constraint-satisfaction problems).",
    "subTopics": [
      "Statement Analysis",
      "Assumptions",
      "Conclusions",
      "Cause and Effect",
      "Data Interpretation",
      "Decision-Based Problems",
      "Analytical Puzzles"
    ],
    "prerequisiteTitles": [
      "Mathematical Problem Solving"
    ],
    "learningObjectives": [
      "Evaluate given statements and identify implicit assumptions (unstated premises the argument depends on).",
      "Draw valid conclusions from given data without making unsupported inferences.",
      "Solve constraint-satisfaction analytical puzzles systematically using elimination."
    ],
    "notes": [
      {
        "title": "Analytical Reasoning Methods with Worked Examples",
        "content": "ANALYTICAL REASONING\n\n1. Statement and Assumptions:\n   Statement: \"All employees who work late get promoted.\"\n   Assumption (implicit premise): \"Working late is noticed and rewarded.\"\n   \n   Strong Assumption: One that is necessary for the statement to be true.\n   Weak Assumption: One that is unnecessary or only indirectly related.\n\n2. Statement and Conclusions:\n   Premise 1: All A are B. (All cats are animals.)\n   Premise 2: All B are C. (All animals are living things.)\n   Conclusion: All A are C. (All cats are living things.) ✓ VALID\n   \n   INVALID: \"Some students pass exams. Ram is a student. Ram passes exams.\" ✗\n   (Cannot conclude about specific individual from \"some\" statement.)\n   \n   Rules for Valid Conclusions:\n   - Universal positive (All A are B) + Universal positive (All B are C) → All A are C\n   - Particular statement + Particular statement → No universal conclusion\n\n3. Cause and Effect:\n   Identify: Direct cause, Contributing factor, Co-effect (common cause for both).\n   \n   \"Sales increased after new advertising campaign.\"\n   Analysis: Advertising = cause? Or other factors? (seasonal demand, competitor issues?)\n   \n   Correlation ≠ Causation. \"Ice cream sales correlate with drowning\" - common cause: summer.\n\n4. Data Interpretation:\n   Sample Data Table: Quarterly Sales (₹ Lakhs)\n   Quarter  | Product A | Product B | Total\n   Q1 2024  |    120    |    80     |  200\n   Q2 2024  |    150    |    90     |  240\n   Q3 2024  |    100    |   120     |  220\n   Q4 2024  |    180    |   110     |  290\n   \n   Questions:\n   a) Which quarter had maximum total sales? Q4 (290)\n   b) Which product showed consistent growth? Product B (80→90→120→110, mostly up)\n   c) % increase from Q1 to Q4 total? (290-200)/200 × 100 = 45%\n   d) Average quarterly sales of Product A? (120+150+100+180)/4 = 137.5\n\n5. Analytical Puzzle - Seating Arrangement:\n   Problem: A, B, C, D, E sit in a row. A is not at ends. B is 2nd from left.\n   C is between D and E. Find arrangement.\n   \n   Method (Elimination):\n   B is fixed at position 2.\n   A cannot be at 1 or 5. So A is at 3, 4.\n   C is between D and E, so DCE or ECD (3 consecutive).\n   If A=3: remaining positions 1,4,5 for C,D,E.\n   DCE at 1-3 means D=1, C=2, E=3, but B=2. Contradiction.\n   Try D=4,C=4,E=5 → C between D and E: need D,E to be on both sides of C.\n   C=4: D=3, E=5 or D=5, E=3 (C at 4 means positions 3,4,5).\n   But A is at 3 → D must be elsewhere. Try A=4:\n   ...systematically eliminate until valid arrangement found."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "A Modern Approach to Logical Reasoning",
        "author": "R.S. Aggarwal"
      }
    ],
    "practiceLinks": [
      {
        "title": "Analytical Reasoning IndiaBIX",
        "url": "https://www.indiabix.com/logical-reasoning/analytical-reasoning/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is the difference between a Conclusion and an Assumption? (2 Marks)",
        "Why does correlation not imply causation? Give an example. (2 Marks)",
        "How do you approach a seating arrangement analytical puzzle? (2 Marks)"
      ],
      "sixMarks": [
        "Analyze the following for assumptions and conclusions: 'Companies that invest in employee training see increased productivity. Therefore, our company should increase training budget.' (6 Marks)",
        "Given a sales data table for 4 products across 3 months, answer: total sales, best performing product, month-over-month growth rate, and percentage contribution of each product. (6 Marks)"
      ],
      "longAnswer": [
        "Analytical reasoning comprehensive: Syllogism solving (all types: AA, AO, OA, OO, EA, AE, EO, OE with valid conclusion rules and Venn diagram method), statement-conclusion (strong/weak approach), cause-effect analysis (direct/indirect/common causes), data interpretation (table, bar, line, pie, mixed charts with percentage/ratio questions), logic puzzles (seating arrangements, blood relations, scheduling with constraint propagation), and systematic puzzle-solving algorithm using elimination and constraint satisfaction. (10 Marks)"
      ]
    }
  },
  {
    "title": "Optimization and Efficiency",
    "slug": "problem-solving-optimization-efficiency",
    "order": 10,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Optimize solution efficiency: Time Complexity Basics (Big-O notation, counting operations), Space Complexity Basics (memory usage analysis), Performance Analysis (best, worst, average cases), Finding Efficient Solutions (algorithmic improvements), Trade-offs in Problem Solving (time vs space), and Optimization Techniques (memoization, greedy choices, early termination).",
    "subTopics": [
      "Time Complexity Basics",
      "Space Complexity Basics",
      "Performance Analysis",
      "Finding Efficient Solutions",
      "Trade-offs in Problem Solving",
      "Optimization Techniques"
    ],
    "prerequisiteTitles": [
      "Algorithmic Thinking"
    ],
    "learningObjectives": [
      "Determine Big-O time complexity of loops: single loop O(n), nested loop O(n²), binary operations O(log n).",
      "Identify time-space trade-off: using O(n) space hash table to reduce time from O(n²) to O(n).",
      "Apply memoization to convert exponential Fibonacci O(2^n) to linear O(n)."
    ],
    "notes": [
      {
        "title": "Big-O Analysis, Complexity Examples, Time-Space Trade-offs",
        "content": "OPTIMIZATION AND EFFICIENCY\n\n1. Big-O Complexity Hierarchy (fastest to slowest):\n   O(1) < O(log n) < O(√n) < O(n) < O(n log n) < O(n²) < O(n³) < O(2^n) < O(n!)\n   \n   O(1):      Array access A[i], hash table lookup\n   O(log n):  Binary search, binary tree operations\n   O(n):      Linear scan, counting\n   O(n log n): Merge sort, heap sort\n   O(n²):     Bubble sort, nested loops over n\n   O(2^n):    Brute force subsets\n   O(n!):     Brute force permutations\n\n2. Identifying Complexity from Code:\n   // O(1): no loops\n   int getFirst(int A[]) { return A[0]; }\n   \n   // O(n): single loop\n   int sum(int A[], int n) {\n       int s=0; for(int i=0;i<n;i++) s+=A[i]; return s;\n   }\n   \n   // O(n²): nested loops, both depend on n\n   void printPairs(int A[], int n) {\n       for(int i=0;i<n;i++)\n           for(int j=i+1;j<n;j++)\n               printf(\"(%d,%d)\",A[i],A[j]);\n   }\n   \n   // O(log n): n divided by 2 each iteration\n   int binarySearch(int A[], int n, int t) {\n       int lo=0,hi=n-1;\n       while(lo<=hi) {\n           int mid=(lo+hi)/2;\n           if(A[mid]==t) return mid;\n           else if(A[mid]<t) lo=mid+1; else hi=mid-1;\n       }\n       return -1;\n   }\n\n3. Time-Space Trade-off:\n   Problem: Given array, find if any two elements sum to target T.\n   \n   Approach 1 (Brute force): O(n²) time, O(1) space\n   for(i..n) for(j=i+1..n) if(A[i]+A[j]==T) return true;\n   \n   Approach 2 (Hash set): O(n) time, O(n) space\n   unordered_set<int> seen;\n   for each x in A:\n       if (T-x) in seen: return true\n       seen.insert(x)\n   TRADE-OFF: Use O(n) extra memory to achieve O(n) time.\n\n4. Memoization - Fibonacci Example:\n   // Naive recursive: O(2^n) time, recomputes same values\n   int fib(int n) {\n       if (n <= 1) return n;\n       return fib(n-1) + fib(n-2);\n   }\n   \n   // Memoized: O(n) time, O(n) space\n   int memo[1001] = {0};\n   int fib_memo(int n) {\n       if (n <= 1) return n;\n       if (memo[n] != 0) return memo[n];  // Cache hit!\n       memo[n] = fib_memo(n-1) + fib_memo(n-2);\n       return memo[n];\n   }\n   \n   // Bottom-up DP: O(n) time, O(1) space (optimal!)\n   int fib_dp(int n) {\n       if (n<=1) return n;\n       int a=0, b=1;\n       for(int i=2;i<=n;i++) { int c=a+b; a=b; b=c; }\n       return b;\n   }"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Introduction to Algorithms (CLRS)",
        "author": "Cormen, Leiserson, Rivest, Stein"
      }
    ],
    "practiceLinks": [
      {
        "title": "Big-O Cheat Sheet",
        "url": "https://www.bigocheatsheet.com/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is Big-O notation? List the common complexities from best to worst. (2 Marks)",
        "Explain the time-space trade-off. Give an example showing O(n²) time → O(n) time by using O(n) space. (2 Marks)",
        "What is memoization? How does it improve Fibonacci computation? (2 Marks)"
      ],
      "sixMarks": [
        "Determine the time complexity of: (a) Single for loop, (b) Two nested loops, (c) Binary search, (d) Three nested loops, (e) Fibonacci recursive. Justify each. (6 Marks)",
        "Compare two solutions for 'Check if array has duplicate': (a) O(n²) nested loop, (b) O(n) hash set approach. Implement both in C and show complexity analysis. (6 Marks)"
      ],
      "longAnswer": [
        "Optimization and efficiency comprehensive: Big-O notation (definition, rules for simplification, analyzing loops and recursion), all common complexity classes with examples and real algorithm mappings, space complexity analysis (auxiliary space vs total space), time-space trade-off with examples (two-sum, caching, memoization), loop optimization techniques (early termination, loop invariant hoisting), memoization vs tabulation (top-down vs bottom-up DP), and practical problem: optimize given O(n³) solution to O(n²). (10 Marks)"
      ]
    }
  },
  {
    "title": "Data Structures Based Problem Solving",
    "slug": "problem-solving-data-structures",
    "order": 11,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Apply data structures to problems: Introduction to Data Structures choice, Stack-Based Problems (balanced parentheses, postfix evaluation, function call simulation), Queue-Based Problems (BFS, scheduling, sliding window), Linked List Problems (reversal, cycle detection), Tree-Based Problems (traversal, height, BST operations), Graph-Based Problems (DFS, BFS, shortest path), and Hashing-Based Problems (frequency counting, two-sum).",
    "subTopics": [
      "Introduction to Data Structures",
      "Stack-Based Problems",
      "Queue-Based Problems",
      "Linked List Problems",
      "Tree-Based Problems",
      "Graph-Based Problems",
      "Hashing-Based Problems"
    ],
    "prerequisiteTitles": [
      "Data Handling and Problem Solving"
    ],
    "learningObjectives": [
      "Use stack to check balanced parentheses and evaluate postfix expressions.",
      "Apply BFS (Queue) for shortest path in unweighted graph and DFS (Stack/recursion) for cycle detection.",
      "Use hash map for O(1) lookup to solve two-sum and frequency counting in O(n)."
    ],
    "notes": [
      {
        "title": "Stack, Queue, Hash Map Problems with C Implementations",
        "content": "DATA STRUCTURES BASED PROBLEM SOLVING\n\n1. Stack-Based: Balanced Parentheses Checker\n   Maintain stack. Push on '(' '[' '{'. Pop and match on ')' ']' '}'.\n   \n   bool isBalanced(char s[]) {\n       char stack[1000]; int top = -1;\n       for (int i = 0; s[i]; i++) {\n           if (s[i]=='(' || s[i]=='[' || s[i]=='{')\n               stack[++top] = s[i];\n           else {\n               if (top < 0) return false;  // Empty stack\n               char open = stack[top--];\n               if ((s[i]==')' && open!='(') ||\n                   (s[i]==']' && open!='[') ||\n                   (s[i]=='}' && open!='{')) return false;\n           }\n       }\n       return top == -1;  // Stack must be empty\n   }\n   // Test: \"((()))\" → balanced ✓, \"([)]\" → unbalanced ✗\n\n2. Queue-Based: BFS Shortest Path\n   // Graph as adjacency list, find shortest path from src to all nodes.\n   void BFS(int graph[][100], int n, int src, int dist[]) {\n       bool visited[100] = {false};\n       int queue[100], front=0, rear=0;\n       dist[src] = 0; visited[src] = true;\n       queue[rear++] = src;\n       while (front < rear) {\n           int v = queue[front++];\n           for (int u = 0; u < n; u++) {\n               if (graph[v][u] && !visited[u]) {\n                   dist[u] = dist[v] + 1;\n                   visited[u] = true;\n                   queue[rear++] = u;\n               }\n           }\n       }\n   }\n\n3. Hash Map-Based: Two Sum Problem\n   Problem: Find if array has two elements summing to target T.\n   \n   Python (using dictionary):\n   def two_sum(arr, target):\n       seen = {}  # value → index\n       for i, x in enumerate(arr):\n           complement = target - x\n           if complement in seen:\n               return [seen[complement], i]  # Found!\n           seen[x] = i\n       return []  # No pair found\n   \n   Time: O(n), Space: O(n)  vs brute force O(n²) time, O(1) space.\n\n4. Linked List: Cycle Detection (Floyd's Algorithm)\n   Use slow and fast pointers. If they meet, cycle exists.\n   \n   bool hasCycle(Node *head) {\n       Node *slow = head, *fast = head;\n       while (fast && fast->next) {\n           slow = slow->next;\n           fast = fast->next->next;\n           if (slow == fast) return true;  // Cycle!\n       }\n       return false;  // No cycle\n   }\n\n5. Data Structure Selection Guide:\n   Need LIFO (last in, first out)?           → Stack\n   Need FIFO (first in, first out)?          → Queue\n   Need O(1) search by key?                  → Hash Map/Set\n   Need ordered data, O(log n) ops?          → BST/TreeMap\n   Need flexible size, sequential?           → Linked List\n   Need max/min quickly?                     → Heap/Priority Queue"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Data Structures and Algorithm Analysis",
        "author": "Mark Allen Weiss"
      }
    ],
    "practiceLinks": [
      {
        "title": "LeetCode Data Structures",
        "url": "https://leetcode.com/explore/learn/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Which data structure is best for: (a) Balanced parentheses check (b) BFS traversal (c) O(1) search by key? (2 Marks)",
        "Explain Floyd's cycle detection algorithm. What is its time and space complexity? (2 Marks)",
        "How does a hash map achieve O(1) average lookup? When can it degrade to O(n)? (2 Marks)"
      ],
      "sixMarks": [
        "Implement balanced parentheses checker using a stack. Test with '((()))', '([{}])', '(()', '([)]'. Show stack trace for each. (6 Marks)",
        "Solve Two-Sum problem using hash map. Compare with brute force approach in terms of time and space complexity. (6 Marks)"
      ],
      "longAnswer": [
        "Data structures problem solving: Selection criteria for each DS, stack applications (parentheses matching, infix-to-postfix, function call stack), queue applications (BFS, task scheduling), linked list problems (reversal, merge sorted lists, cycle detection), binary tree problems (height, level-order traversal, LCA), graph problems (DFS for cycle detection, BFS for shortest path, topological sort), hashing (frequency counting, two-sum, grouping anagrams), and trade-offs in DS selection. (10 Marks)"
      ]
    }
  },
  {
    "title": "Advanced Problem Solving Techniques",
    "slug": "problem-solving-advanced-techniques",
    "order": 12,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Master advanced algorithms: Recursion (base case, recursive case, call stack), Backtracking (try-fail-undo paradigm), Divide and Conquer (Merge Sort, Binary Search), Greedy Approach (locally optimal choice), Dynamic Programming Introduction (overlapping subproblems, optimal substructure), Bit Manipulation Basics, Sliding Window Technique, and Two Pointer Technique.",
    "subTopics": [
      "Recursion",
      "Backtracking",
      "Divide and Conquer",
      "Greedy Approach",
      "Dynamic Programming Introduction",
      "Bit Manipulation Basics",
      "Sliding Window Technique",
      "Two Pointer Technique"
    ],
    "prerequisiteTitles": [
      "Optimization and Efficiency",
      "Data Structures Based Problem Solving"
    ],
    "learningObjectives": [
      "Implement recursion correctly with base case and recursive case. Trace call stack for factorial(4).",
      "Apply Two-Pointer technique to reduce O(n²) to O(n) for sorted array pair problems.",
      "Identify DP problems (overlapping subproblems + optimal substructure) and solve with memoization."
    ],
    "notes": [
      {
        "title": "Recursion, Backtracking, Two Pointers, Sliding Window with Examples",
        "content": "ADVANCED PROBLEM SOLVING TECHNIQUES\n\n1. Recursion - Base and Recursive Cases:\n   // Factorial: f(n) = n × f(n-1), base: f(0) = 1\n   int factorial(int n) {\n       if (n == 0) return 1;    // Base case\n       return n * factorial(n-1); // Recursive case\n   }\n   // Trace factorial(4): 4×factorial(3) → 4×(3×factorial(2)) → ...\n   // = 4×3×2×1×1 = 24\n   \n   // Merge Sort - Divide and Conquer O(n log n)\n   void merge(int A[], int l, int m, int r) { /* merge two halves */ }\n   void mergeSort(int A[], int l, int r) {\n       if (l < r) {\n           int m = (l + r) / 2;\n           mergeSort(A, l, m);    // Solve left half\n           mergeSort(A, m+1, r);  // Solve right half\n           merge(A, l, m, r);     // Combine\n       }\n   }\n\n2. Backtracking - N-Queens Example:\n   // Place N queens on N×N board with no conflicts.\n   bool isSafe(int board[][10], int row, int col, int N) {\n       for (int i = 0; i < row; i++) if (board[i][col]) return false;\n       for (int i=row-1,j=col-1; i>=0&&j>=0; i--,j--) if(board[i][j]) return false;\n       for (int i=row-1,j=col+1; i>=0&&j<N; i--,j++) if(board[i][j]) return false;\n       return true;\n   }\n   bool solveNQueens(int board[][10], int row, int N) {\n       if (row == N) return true;  // All queens placed\n       for (int col = 0; col < N; col++) {\n           if (isSafe(board, row, col, N)) {\n               board[row][col] = 1;        // Place queen\n               if (solveNQueens(board, row+1, N)) return true;\n               board[row][col] = 0;        // Backtrack (remove queen)\n           }\n       }\n       return false;\n   }\n\n3. Two Pointer Technique O(n):\n   // Find pair with target sum in SORTED array.\n   bool twoSum_sorted(int A[], int n, int target) {\n       int left = 0, right = n - 1;\n       while (left < right) {\n           int sum = A[left] + A[right];\n           if (sum == target) return true;    // Found!\n           else if (sum < target) left++;     // Need larger sum\n           else right--;                      // Need smaller sum\n       }\n       return false;\n   }\n\n4. Sliding Window O(n):\n   // Find maximum sum subarray of size K.\n   int maxSumSubarray(int A[], int n, int k) {\n       int windowSum = 0;\n       for (int i = 0; i < k; i++) windowSum += A[i];\n       int maxSum = windowSum;\n       for (int i = k; i < n; i++) {\n           windowSum += A[i] - A[i-k];  // Slide: add new, remove old\n           maxSum = max(maxSum, windowSum);\n       }\n       return maxSum;\n   }\n   // Instead of O(n×k) brute force → O(n) sliding window!\n\n5. Greedy - Activity Selection:\n   // Select maximum non-overlapping activities.\n   // Sort by finish time. Greedily pick each non-overlapping activity.\n   Sort activities by finish time.\n   Select first activity.\n   For each remaining activity:\n       if start_time >= last_selected_finish_time:\n           select it, update last_selected_finish_time."
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
        "title": "LeetCode Patterns",
        "url": "https://seanprashad.com/leetcode-patterns/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What are the two requirements for a problem to be solvable with Dynamic Programming? (2 Marks)",
        "Explain Two-Pointer technique. What precondition is needed for the array? (2 Marks)",
        "Describe the Backtracking paradigm: Try → Fail → Undo. (2 Marks)"
      ],
      "sixMarks": [
        "Implement Sliding Window to find maximum sum subarray of size K. Trace algorithm on A=[2,1,5,1,3,2], K=3. Show each window computation. (6 Marks)",
        "Solve N-Queens problem for N=4 using backtracking. Show the backtracking tree. (6 Marks)"
      ],
      "longAnswer": [
        "Advanced techniques: Recursion (structure, call stack, tail recursion, stack overflow prevention), divide and conquer (merge sort, quick sort, binary search, master theorem), backtracking (N-Queens, Sudoku, subset sum, permutations), greedy algorithms (activity selection, coin change greedy failure case), dynamic programming (Fibonacci, LCS, 0-1 knapsack introduction), two pointers (pair sum, remove duplicates, container with most water), sliding window (maximum sum, longest substring without repeat). (10 Marks)"
      ]
    }
  },
  {
    "title": "Competitive Programming Fundamentals",
    "slug": "problem-solving-competitive-programming",
    "order": 13,
    "estimatedHours": 4,
    "difficulty": "Advanced",
    "description": "Compete effectively: Competitive Programming Introduction, Online Coding Platforms (Codeforces, LeetCode, HackerRank, GeeksforGeeks), Problem Classification by tags (greedy, DP, graph, math), Reading Competitive Problems (input format, constraints analysis), Test Case Analysis (manual test cases), Time Limit Optimization (10^8 operations/second rule), and Coding Practice Strategy.",
    "subTopics": [
      "Competitive Programming Introduction",
      "Online Coding Platforms",
      "Problem Classification",
      "Reading Competitive Problems",
      "Test Case Analysis",
      "Time Limit Optimization",
      "Coding Practice Strategy"
    ],
    "prerequisiteTitles": [
      "Advanced Problem Solving Techniques"
    ],
    "learningObjectives": [
      "Estimate if solution passes time limit: if TL=1 second and n=10^6, algorithm must be O(n log n) or better.",
      "Read competitive problem constraints to identify required algorithm: n≤18 → bitmask DP, n≤500 → O(n³), n≤10^5 → O(n log n).",
      "Create systematic practice plan: beginner (Easy problems) → intermediate (Medium) → competitive (Hard)."
    ],
    "notes": [
      {
        "title": "Competitive Programming Strategy and Constraint Analysis",
        "content": "COMPETITIVE PROGRAMMING FUNDAMENTALS\n\n1. Platform Overview:\n   Platform        | Focus                    | Difficulty\n   LeetCode        | Interview prep           | Easy/Medium/Hard\n   Codeforces      | Competitive contests     | Div 1-3, CF rating\n   HackerRank      | Structured learning      | Easy/Medium/Hard\n   AtCoder         | Japanese contests        | ABC/ARC/AGC\n   SPOJ           | Classic problems          | \n   GeeksforGeeks   | Interview + theory       |\n\n2. Constraint → Algorithm Mapping:\n   n ≤ 10: Any algorithm (brute force, O(n!) permutations)\n   n ≤ 18: Bitmask DP O(2^n × n)\n   n ≤ 100: O(n³), O(n² log n)\n   n ≤ 1000: O(n²)\n   n ≤ 100000 (10^5): O(n log n) → sort, segment tree, BFS/DFS\n   n ≤ 1000000 (10^6): O(n) → hash, prefix sums, counting\n   n ≤ 10^9: O(log n) → binary search, fast power\n   n ≤ 10^18: O(log n) or O(√n)\n\n3. 10^8 Operations/Second Rule:\n   Most competitive programming judges handle ~10^8 simple operations per second.\n   TL = 2 seconds → can do ~2×10^8 operations.\n   \n   For n=10^5 with TL=1s:\n   O(n log n) = 10^5 × 17 ≈ 1.7×10^6 → FAST ✓\n   O(n²) = 10^10 → TOO SLOW ✗\n\n4. Reading Competition Problem - Checklist:\n   a) Read problem name and description.\n   b) Note input/output format EXACTLY.\n   c) Note constraints (N, values, time limit, memory limit).\n   d) Read all example inputs and outputs.\n   e) Manually verify your understanding with example.\n   f) Identify problem category (search/sort/DP/graph/math).\n   g) Design approach BEFORE coding.\n   h) Code, test with examples, then submit.\n\n5. Practice Strategy:\n   Week 1-4 (Beginner): \n   - Solve 3-5 Easy problems per day.\n   - Focus: arrays, strings, basic math, simple loops.\n   - Goal: Comfortable with I/O and implementation.\n   \n   Week 5-12 (Intermediate):\n   - Solve 2 Medium problems per day + 1 problem you've seen tags.\n   - Focus: binary search, sorting, recursion, hash maps.\n   \n   Week 13+ (Advanced):\n   - Participate in weekly contests (Codeforces, LeetCode).\n   - Study editorial after each problem you can't solve.\n   - Focus: DP, graphs, advanced data structures.\n   \n   Review Process: After solving (or failing):\n   - Read official editorial / top solutions.\n   - Implement the optimal approach yourself.\n   - Note the pattern for future reference."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Competitive Programmer's Handbook",
        "author": "Antti Laaksonen (free online)"
      }
    ],
    "practiceLinks": [
      {
        "title": "Codeforces Problem Set",
        "url": "https://codeforces.com/problemset"
      }
    ],
    "questionBank": {
      "conceptual": [
        "If n=10^5 and time limit=1 second, what is the maximum acceptable time complexity? (2 Marks)",
        "What algorithm is appropriate when n ≤ 18? When n ≤ 10^6? (2 Marks)",
        "List 5 competitive programming platforms and their primary focus area. (2 Marks)"
      ],
      "sixMarks": [
        "Analyze 3 problems with constraints: (a) n≤10^3, TL=1s (b) n≤10^6, TL=2s (c) n≤10^9, TL=1s. For each, identify maximum complexity allowed and a suitable algorithm. (6 Marks)",
        "Design a 12-week competitive programming practice plan. Include daily problem count, focus topics, and milestone goals. (6 Marks)"
      ],
      "longAnswer": [
        "Competitive programming comprehensive: Platform comparison (LeetCode vs Codeforces vs AtCoder), constraint-to-algorithm mapping table with examples, 10^8 operations rule and time estimation, problem reading strategy (5-step analysis), test case design for your own solutions, template code for common patterns (fast I/O, common headers, modular arithmetic template), contest strategy (easy-first or hard-first, time allocation), and common pitfalls (TLE, MLE, WA, overflow, edge cases). (10 Marks)"
      ]
    }
  },
  {
    "title": "Debugging and Error Analysis",
    "slug": "problem-solving-debugging",
    "order": 14,
    "estimatedHours": 3,
    "difficulty": "Advanced",
    "description": "Master debugging: Syntax Errors (compilation failures), Logical Errors (wrong output), Runtime Errors (crashes, exceptions), Debugging Strategies (print debugging, GDB basics, rubber duck), Code Tracing (step-by-step execution), Dry Run Techniques, Testing Solutions (unit tests, edge cases), and Improving Code Quality.",
    "subTopics": [
      "Syntax Errors",
      "Logical Errors",
      "Runtime Errors",
      "Debugging Strategies",
      "Code Tracing",
      "Dry Run Techniques",
      "Testing Solutions",
      "Improving Code Quality"
    ],
    "prerequisiteTitles": [
      "Programming Problem Solving Basics"
    ],
    "learningObjectives": [
      "Classify errors: Syntax (compiler catches), Logical (wrong output, programmer must find), Runtime (crash, exception).",
      "Apply systematic debugging: reproduce → isolate → identify → fix → verify.",
      "Write test cases covering: normal cases, edge cases (empty, single, max), and stress tests."
    ],
    "notes": [
      {
        "title": "Error Types, Debugging Workflow, and Test Case Design",
        "content": "DEBUGGING AND ERROR ANALYSIS\n\n1. Error Classification:\n   SYNTAX ERRORS (compile-time): Violate grammar rules. Compiler catches.\n   Examples in C:\n   int x = 5        // Missing semicolon → compilation error\n   printf(\"%d\" x)   // Missing comma → compilation error\n   if x > 5 { }    // Missing parentheses → compilation error\n   \n   LOGICAL ERRORS (runtime, wrong result): Code compiles and runs, but wrong answer.\n   Example:\n   // Bug: Should find average but divides before summing\n   int avg = 0;\n   for(int i=0; i<n; i++) avg += arr[i]/n;  // WRONG\n   // Correct:\n   int sum=0;\n   for(int i=0; i<n; i++) sum += arr[i];\n   int avg = sum/n;  // Correct\n   \n   RUNTIME ERRORS (crash during execution): \n   - Segmentation fault: arr[n] out of bounds, null pointer dereference.\n   - Stack overflow: infinite recursion.\n   - Division by zero: x/0.\n   - Integer overflow: result exceeds int range.\n\n2. Debugging Workflow (5 Steps):\n   Step 1: REPRODUCE. Get exact input that causes the bug.\n   Step 2: ISOLATE. Narrow down which part of code has the bug.\n   Step 3: IDENTIFY. Understand exactly what goes wrong and why.\n   Step 4: FIX. Correct the code.\n   Step 5: VERIFY. Test the fix. Regression test to ensure nothing broke.\n\n3. Print Debugging (Most Common):\n   int binarySearch(int A[], int n, int target) {\n       int lo = 0, hi = n-1;\n       while (lo <= hi) {\n           int mid = (lo+hi)/2;\n           printf(\"lo=%d hi=%d mid=%d A[mid]=%d\n\", lo,hi,mid,A[mid]); // DEBUG\n           if (A[mid] == target) return mid;\n           else if (A[mid] < target) lo = mid+1;\n           else hi = mid-1;\n       }\n       return -1;\n   }\n   // Remove debug prints after fixing!\n\n4. Test Case Design Strategy:\n   Category 1: Normal Cases (typical input)\n   Input: n=5, arr=[3,1,4,1,5] → expected output: 14 (sum)\n   \n   Category 2: Edge Cases (boundary conditions)\n   - Empty: n=0 → output: 0\n   - Single: n=1, arr=[42] → output: 42\n   - All same: n=5, arr=[3,3,3,3,3] → output: 15\n   - Max value: arr=[INT_MAX] → check overflow\n   - Min value: arr=[INT_MIN] → check underflow\n   - Already sorted / reverse sorted\n   - Negative numbers\n   \n   Category 3: Stress Test (random large input)\n   - Generate random arrays of n=10^5 and verify performance.\n\n5. Common Logical Bugs Checklist:\n   ☐ Off-by-one: loop i<n vs i<=n\n   ☐ Wrong initial value: max=0 vs max=A[0]\n   ☐ Integer overflow: use long long when needed\n   ☐ Array index bounds: always check 0 <= i < n\n   ☐ Uninitialized variable: always initialize!\n   ☐ Return value not used: check function returns\n   ☐ Wrong variable used in loop: i vs j confusion"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Debugging: The 9 Indispensable Rules",
        "author": "David Agans"
      }
    ],
    "practiceLinks": [
      {
        "title": "Debugging Practice Online Gdb",
        "url": "https://www.onlinegdb.com/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Classify with example: Syntax Error, Logical Error, Runtime Error. (2 Marks)",
        "List the 5 steps of systematic debugging workflow. (2 Marks)",
        "What is Rubber Duck Debugging? Why is it effective? (2 Marks)"
      ],
      "sixMarks": [
        "Find and fix all bugs in this C code: 'int arr[5]={1,2,3,4,5}; int sum; for(int i=1;i<=5;i++) sum+=arr[i]; printf(\"%d\",sum/4);'. Identify bug category for each. (6 Marks)",
        "Design comprehensive test cases for a function that checks if a number is prime. Include normal, edge, and boundary cases. (6 Marks)"
      ],
      "longAnswer": [
        "Debugging comprehensive: Error classification system, syntax error examples and compiler messages interpretation, common logical errors (off-by-one, overflow, wrong formula, uninitialized), runtime errors (segfault diagnosis, stack overflow, exception handling), 5-step debugging workflow, print debugging technique, GDB basics (breakpoints, watchpoints, stack trace), binary search debugging method, test case design pyramid (unit → integration → system), and code quality improvement (clean code principles, code review checklist). (10 Marks)"
      ]
    }
  },
  {
    "title": "Real-World Problem Solving",
    "slug": "problem-solving-real-world",
    "order": 15,
    "estimatedHours": 4,
    "difficulty": "Advanced",
    "description": "Apply problem solving in real contexts: Software Development Problems (feature design, bug analysis), Business Problem Analysis (requirements gathering, solution evaluation), Engineering Problem Solving (constraints-based design), Case Study Analysis (end-to-end problem solving), Design Thinking Approach (empathize → define → ideate → prototype → test), and Innovation-Based Problem Solving.",
    "subTopics": [
      "Software Development Problems",
      "Business Problem Analysis",
      "Engineering Problem Solving",
      "Case Study Analysis",
      "Design Thinking Approach",
      "Innovation-Based Problem Solving"
    ],
    "prerequisiteTitles": [
      "Analytical Reasoning"
    ],
    "learningObjectives": [
      "Apply Design Thinking 5-step process (Empathize, Define, Ideate, Prototype, Test) to design a new software feature.",
      "Write a formal Problem Statement and Solution Specification for a real software engineering problem.",
      "Analyze a case study by identifying problem, root causes, solution options, and recommendation."
    ],
    "notes": [
      {
        "title": "Design Thinking Process, Problem Specification Template, Case Analysis",
        "content": "REAL-WORLD PROBLEM SOLVING\n\n1. Design Thinking Process (5 Stages):\n   \n   EMPATHIZE: Understand users' needs and pain points.\n   - Conduct user interviews, surveys, observation.\n   - Ask: What problems do users face? What frustrates them?\n   \n   DEFINE: State the problem clearly.\n   - Problem Statement: \"Students struggle to track assignment deadlines because they use multiple platforms.\"\n   - User Persona: Engineering student, 18-22, uses 3+ apps.\n   \n   IDEATE: Generate multiple solution ideas without judgment.\n   - Brainstorm: Unified dashboard, AI reminder bot, smart calendar, SMS alerts.\n   - Use mind mapping, SCAMPER technique, brainwriting.\n   \n   PROTOTYPE: Build quick, low-cost version.\n   - Paper prototype, wireframes, MVP (Minimum Viable Product).\n   \n   TEST: Get feedback, iterate.\n   - User testing, A/B testing, analytics.\n   - Iterate based on feedback.\n\n2. Formal Problem Specification:\n   Problem: University exam scheduling system is manual and error-prone.\n   \n   Requirement Specification:\n   FUNCTIONAL Requirements:\n   - System must allow admin to add, edit, delete exams.\n   - System must automatically detect and flag conflicts.\n   - System must generate student-specific timetables.\n   - System must send email/SMS notifications.\n   \n   NON-FUNCTIONAL Requirements:\n   - Performance: Load timetable in < 2 seconds.\n   - Scalability: Support 10,000+ students.\n   - Availability: 99.9% uptime during exam periods.\n   - Security: Role-based access (admin, student, faculty).\n\n3. Case Study Analysis Template:\n   SITUATION: What is the context/background?\n   PROBLEM: What is the specific problem?\n   ROOT CAUSE: Why does the problem exist? (5-Whys technique)\n   ALTERNATIVES: What are possible solutions? (at least 3)\n   EVALUATION: Pros/cons, cost-benefit of each alternative.\n   RECOMMENDATION: Which solution is best and why?\n   IMPLEMENTATION PLAN: How to implement the solution?\n\n4. Example Case: \"E-commerce website experiencing high cart abandonment rate (70%).\"\n   ROOT CAUSE (5-Whys):\n   Why? → Users leave at checkout.\n   Why? → Checkout process has 7 steps.\n   Why? → Team followed old design from 2015.\n   Why? → No UX review was done.\n   Why? → No UX team and process.\n   \n   ALTERNATIVES:\n   1. Reduce checkout to 2 steps. (Quick win, moderate effort)\n   2. Guest checkout option. (Removes signup barrier)\n   3. A/B test different checkout flows.\n   \n   RECOMMENDATION: Implement guest checkout + reduce to 2 steps.\n   Expected: Reduce abandonment from 70% to 40%."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Sprint: How to Solve Big Problems",
        "author": "Jake Knapp"
      }
    ],
    "practiceLinks": [
      {
        "title": "Design Thinking IDEO",
        "url": "https://designthinking.ideo.com/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "List the 5 stages of Design Thinking process in order. (2 Marks)",
        "What is the 5-Whys technique? How is it used for root cause analysis? (2 Marks)",
        "Distinguish Functional and Non-Functional requirements with examples. (2 Marks)"
      ],
      "sixMarks": [
        "Apply Design Thinking to: 'Design a mobile app for university students to manage study time.' Go through all 5 stages with specific details for each. (6 Marks)",
        "Analyze case study: 'A hospital's patient appointment system has 40% no-show rate.' Find root causes using 5-Whys, propose 3 solutions, evaluate each, recommend best solution. (6 Marks)"
      ],
      "longAnswer": [
        "Real-world problem solving: Software engineering problems (requirements elicitation, feature design, technical debt analysis), business problem analysis framework (SWOT, cost-benefit, stakeholder analysis), Design Thinking process applied to 2 case studies, structured problem definition (problem statement, success criteria, constraints, risks), solution evaluation methods (weighted scoring, prototype testing, A/B testing), implementation planning (milestones, resources, risks), and presentation of technical solutions to non-technical audience. (10 Marks)"
      ]
    }
  },
  {
    "title": "Practical Exercises and Projects",
    "slug": "problem-solving-practical-projects",
    "order": 16,
    "estimatedHours": 6,
    "difficulty": "Advanced",
    "description": "Apply all skills in practice: Algorithm Implementation Problems (implement and test classical algorithms), Coding Challenges (progressively harder problems from platforms), Logical Reasoning Exercises (puzzle-based challenges), Mini Problem-Solving Projects (small complete applications), Real-World Data Problems (analyze and solve data-driven problems), and Competitive Programming Practice (timed contest problems).",
    "subTopics": [
      "Algorithm Implementation Problems",
      "Coding Challenges",
      "Logical Reasoning Exercises",
      "Mini Problem-Solving Projects",
      "Real-World Data Problems",
      "Competitive Programming Practice"
    ],
    "prerequisiteTitles": [
      "Competitive Programming Fundamentals",
      "Real-World Problem Solving"
    ],
    "learningObjectives": [
      "Implement 10+ classical algorithms from scratch without reference: sorting, searching, BFS, DFS, Dijkstra.",
      "Solve 50+ competitive programming problems across multiple topics with correct solutions.",
      "Build a complete mini project: design data structures, implement algorithms, test thoroughly."
    ],
    "notes": [
      {
        "title": "Mini Projects, Practice Problems, and Competitive Programming Sprint",
        "content": "PRACTICAL EXERCISES AND PROJECTS\n\n1. Mini Project 1: Student Grade Calculator\n   Implement in C or Python:\n   \n   Features:\n   - Store up to 100 student records (name, marks in 5 subjects).\n   - Calculate total marks, percentage, and grade.\n   - Find class topper (highest percentage).\n   - Display sorted result by percentage.\n   - Save/load from CSV file.\n   \n   Sample C Structure:\n   typedef struct {\n       char name[50];\n       int marks[5];  // 5 subjects\n       float percentage;\n       char grade;\n   } Student;\n   \n   Key Functions:\n   float calculatePercentage(Student s) {\n       int total = 0;\n       for (int i=0; i<5; i++) total += s.marks[i];\n       return (float)total / 5;\n   }\n   \n   char calculateGrade(float pct) {\n       if (pct >= 90) return 'A';\n       if (pct >= 75) return 'B';\n       if (pct >= 60) return 'C';\n       if (pct >= 45) return 'D';\n       return 'F';\n   }\n\n2. Mini Project 2: Number Puzzle Solver (N-Queens)\n   Python implementation:\n   def solve_nqueens(n):\n       solutions = []\n       def is_valid(board, row, col):\n           for r in range(row):\n               if board[r] == col: return False\n               if abs(board[r] - col) == abs(r - row): return False\n           return True\n       \n       def backtrack(row, board):\n           if row == n:\n               solutions.append(board[:])\n               return\n           for col in range(n):\n               if is_valid(board, row, col):\n                   board[row] = col\n                   backtrack(row + 1, board)\n                   board[row] = -1\n       \n       backtrack(0, [-1]*n)\n       return solutions\n   \n   print(f\"N=4: {len(solve_nqueens(4))} solutions\")  # 2 solutions\n   print(f\"N=8: {len(solve_nqueens(8))} solutions\")  # 92 solutions\n\n3. Practice Problem Set (30-day Challenge):\n   Week 1 - Basics:\n   - Sum of array, find max/min, reverse array.\n   - Fibonacci, factorial, power.\n   - Linear and binary search.\n   \n   Week 2 - Intermediate:\n   - All sorting algorithms.\n   - String problems (palindrome, anagram, substring).\n   - Matrix operations.\n   \n   Week 3 - Data Structures:\n   - Stack for balanced parentheses.\n   - Queue for BFS.\n   - Hash map for two-sum.\n   \n   Week 4 - Advanced:\n   - DP: Fibonacci, Coin Change, LCS.\n   - Graphs: BFS shortest path, DFS cycle detection.\n   - Backtracking: N-Queens, Sudoku solver.\n\n4. Competitive Programming Contest Simulation:\n   Set a 2-hour timer. Attempt 4 problems in order:\n   Problem 1 (Easy, 20 min): Array manipulation.\n   Problem 2 (Easy-Med, 30 min): String processing.\n   Problem 3 (Medium, 40 min): Mathematical or DP.\n   Problem 4 (Medium-Hard, 30 min): Graph or advanced DS.\n   \n   After contest: Review all editorial solutions.\n   Track: Problems solved, time per problem, incorrect submissions."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Cracking the Coding Interview",
        "author": "Gayle Laakmann McDowell"
      }
    ],
    "practiceLinks": [
      {
        "title": "LeetCode 75 Study Plan",
        "url": "https://leetcode.com/studyplan/leetcode-75/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Design the data structure for a Student Grade Calculator supporting add, search, sort, and display operations. (2 Marks)",
        "What is the purpose of a 30-day coding challenge? How should it be structured? (2 Marks)",
        "Why is reviewing editorial solutions important after competitive programming contests? (2 Marks)"
      ],
      "sixMarks": [
        "Implement a complete mini calculator in C with functions for: factorial, isPrime, power(x,n), GCD(a,b), fibonacci(n). Include main menu for function selection. (6 Marks)",
        "Solve and trace: Find all paths from source to destination in a small grid (4×4) with obstacles. Use backtracking and count the number of valid paths. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive practical project: Design and implement a complete mini Library Management System: (1) Data Structure: linked list of books (title, author, ISBN, available copies); (2) Operations: add book, remove book, search by title/author, borrow/return; (3) Algorithm: sort books by title using insertion sort; (4) Statistics: most popular book, books with 0 copies; (5) Testing: design test cases for all operations; (6) Optional: save/load from file using file I/O. Provide complete C implementation. (10 Marks)"
      ]
    }
  }
];
