module.exports = [
  {
    "title": "Introduction to Algorithms",
    "slug": "algorithms-introduction-to-algorithms",
    "order": 1,
    "estimatedHours": 3,
    "difficulty": "Beginner",
    "description": "Master fundamental concepts of algorithms, their characteristics, design steps, pseudocode conventions, flowcharts, and implementation paradigms.",
    "subTopics": [
      "What is an Algorithm",
      "Characteristics of Algorithms",
      "Algorithm Design Process",
      "Pseudocode",
      "Flowcharts",
      "Algorithm Implementation"
    ],
    "prerequisiteTitles": [],
    "learningObjectives": [
      "Understand the formal definition and fundamental properties of an algorithm.",
      "Learn to construct clear pseudocode and standard flowcharts for algorithmic logic.",
      "Analyze the step-by-step problem-solving lifecycle from problem definition to code implementation."
    ],
    "notes": [
      {
        "title": "Foundations of Algorithms & Design Lifecycle",
        "content": "An Algorithm is a finite, well-defined sequence of step-by-step instructions designed to solve a specific computational problem or perform a calculation.\n\nKey Characteristics of Algorithms:\n1. Input: Zero or more well-defined inputs.\n2. Output: At least one well-defined output matching the intended goal.\n3. Definiteness: Each step must be unambiguous, clear, and precise.\n4. Finiteness: The algorithm must terminate after a finite number of steps for all test cases.\n5. Effectiveness: Every operation must be basic enough to be carried out in practice.\n\nAlgorithm Design Process:\n- Problem Definition: Clearly understand the input specifications and desired outputs.\n- Model Formulation: Abstract real-world entities into mathematical structures.\n- Algorithm Specification: Express the logic using Pseudocode or Flowcharts.\n- Correctness Verification: Prove the algorithm produces correct outputs for all valid inputs.\n- Efficiency Analysis: Determine time and space complexity requirements.\n- Implementation: Translate pseudocode into programming languages like C++, Java, or Python."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Introduction to Algorithms (CLRS)",
        "author": "Cormen, Leiserson, Rivest, Stein"
      },
      {
        "title": "Algorithm Design",
        "author": "Jon Kleinberg & Éva Tardos"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Introduction to Algorithms",
        "url": "https://www.geeksforgeeks.org/introduction-to-algorithms/"
      },
      {
        "title": "Sanfoundry Algorithm Fundamentals",
        "url": "https://www.sanfoundry.com/1000-data-structures-algorithms-ii-questions-answers/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is an algorithm? State its five essential characteristics. (2 Marks)",
        "Differentiate between pseudocode and a flowchart. (2 Marks)",
        "Why is finiteness a mandatory property of an algorithm? (2 Marks)",
        "Explain the importance of problem definition in the algorithm design process. (2 Marks)"
      ],
      "sixMarks": [
        "Explain the step-by-step algorithm design process from problem statement to implementation. (6 Marks)",
        "Draw a standard flowchart and write pseudocode to find the largest of three numbers. (6 Marks)"
      ],
      "longAnswer": [
        "Provide a comprehensive overview of algorithmic problem solving. Compare flowcharts, pseudocode, and high-level programming language implementations with detailed examples. (10 Marks)"
      ]
    }
  },
  {
    "title": "Complexity Analysis Basics",
    "slug": "algorithms-complexity-analysis-basics",
    "order": 2,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Learn how to evaluate execution time and memory usage using asymptotic notations including Big O, Omega, and Theta, alongside best, average, and worst case scenarios.",
    "subTopics": [
      "Time Complexity",
      "Space Complexity",
      "Best Case Analysis",
      "Average Case Analysis",
      "Worst Case Analysis",
      "Big O Notation",
      "Omega Notation",
      "Theta Notation"
    ],
    "prerequisiteTitles": [
      "Introduction to Algorithms"
    ],
    "learningObjectives": [
      "Define and calculate time and space complexity for iterative and recursive functions.",
      "Differentiate between Best, Average, and Worst-case bounds.",
      "Master mathematical definitions of Asymptotic Notations: Big O, Omega (Ω), and Theta (Θ)."
    ],
    "notes": [
      {
        "title": "Asymptotic Analysis & Growth Rate Functions",
        "content": "Asymptotic Analysis evaluates the performance of an algorithm as the input size (n) approaches infinity.\n\nKey Definitions:\n- Time Complexity: Quantifies the computational time taken by an algorithm as a function of input size n.\n- Space Complexity: Measures the auxiliary memory requirements plus the memory used by inputs during execution.\n\nAsymptotic Notations:\n1. Big O Notation (O): Upper bound on execution time. Represents the worst-case time complexity. f(n) = O(g(n)) if 0 <= f(n) <= c * g(n) for all n >= n0.\n2. Omega Notation (Ω): Lower bound on execution time. Represents the best-case time complexity. f(n) = Ω(g(n)) if 0 <= c * g(n) <= f(n) for all n >= n0.\n3. Theta Notation (Θ): Tight bound on execution time. Holds when f(n) is bounded both above and below by g(n).\n\nCases of Analysis:\n- Best Case: Minimum execution time over all inputs of size n.\n- Worst Case: Maximum execution time over all inputs of size n (most critical for engineering guarantees).\n- Average Case: Expected execution time averaged over all possible inputs of size n."
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
        "title": "GeeksforGeeks Analysis of Algorithms",
        "url": "https://www.geeksforgeeks.org/dsa/analysis-of-algorithms/"
      },
      {
        "title": "Sanfoundry Time & Space Complexity MCQs",
        "url": "https://www.sanfoundry.com/1000-data-structures-algorithms-ii-questions-answers/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define Big O, Big Omega, and Big Theta notations mathematically. (2 Marks)",
        "What is the difference between Best Case, Worst Case, and Average Case analysis? (2 Marks)",
        "Define Space Complexity and Auxiliary Space. (2 Marks)",
        "Arrange the following growth functions in increasing order of complexity: O(n log n), O(n^2), O(2^n), O(log n), O(n!). (2 Marks)"
      ],
      "sixMarks": [
        "Explain Big-O, Big-Omega, and Big-Theta notations with formal mathematical equations and graphical representations. (6 Marks)",
        "Analyze the time and space complexity of nested loops and derive their tight asymptotic bounds. (6 Marks)"
      ],
      "longAnswer": [
        "Detail the complete framework of Asymptotic Analysis. Derive the mathematical proofs for Big O, Big Omega, and Big Theta notations and solve recurrence relations using the substitution method. (10 Marks)"
      ]
    }
  },
  {
    "title": "Searching Algorithms",
    "slug": "algorithms-searching-algorithms",
    "order": 3,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Explore fundamental linear and logarithmic searching techniques across contiguous and sorted data structures.",
    "subTopics": [
      "Linear Search",
      "Binary Search",
      "Jump Search",
      "Interpolation Search",
      "Exponential Search"
    ],
    "prerequisiteTitles": [
      "Complexity Analysis Basics"
    ],
    "learningObjectives": [
      "Understand mechanics and time complexity of Linear and Binary Search.",
      "Apply advanced search variants such as Jump, Interpolation, and Exponential search on ordered datasets.",
      "Evaluate performance trade-offs based on data distribution and indexing."
    ],
    "notes": [
      {
        "title": "Sequential & Sub-linear Searching Techniques",
        "content": "Searching is the algorithmic process of locating a target value within a collection of items.\n\n1. Linear Search:\n   - Sequentially checks each element until match is found or end reached.\n   - Time Complexity: Best O(1), Worst O(n). Space: O(1).\n   - Advantage: Works on unsorted and non-contiguous collections.\n\n2. Binary Search:\n   - Divide-and-conquer strategy on sorted arrays. Compares target with middle element.\n   - Time Complexity: Best O(1), Worst O(log n). Space: O(1) iterative, O(log n) recursive.\n\n3. Jump Search:\n   - Jumps ahead by fixed step size m = √n and performs linear search backwards when target range bounded.\n   - Time Complexity: O(√n).\n\n4. Interpolation Search:\n   - Improvement over Binary Search for uniformly distributed sorted arrays using probing position formula:\n     pos = low + [ (x - A[low]) * (high - low) / (A[high] - A[low]) ]\n   - Time Complexity: Average O(log log n), Worst O(n).\n\n5. Exponential Search:\n   - Finds range where target lies by doubling index (1, 2, 4, 8...), then executes Binary Search within range.\n   - Time Complexity: O(log n). Ideal for unbounded or infinite arrays."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Introduction to Algorithms (CLRS)",
        "author": "Cormen et al."
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Searching Algorithms",
        "url": "https://www.geeksforgeeks.org/searching-algorithms/"
      },
      {
        "title": "LeetCode Binary Search Problems",
        "url": "https://leetcode.com/tag/binary-search/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Compare Linear Search and Binary Search in terms of prerequisites and time complexity. (2 Marks)",
        "When is Interpolation Search preferred over Binary Search? (2 Marks)",
        "State the time complexity of Jump Search and its optimal block jump size. (2 Marks)"
      ],
      "sixMarks": [
        "Write iterative and recursive algorithms for Binary Search. Analyze their time and space complexities. (6 Marks)",
        "Explain Interpolation Search and derive its position estimate formula. Contrast its performance with Binary Search. (6 Marks)"
      ],
      "longAnswer": [
        "Provide a comprehensive comparative study of Searching Algorithms (Linear, Binary, Jump, Interpolation, Exponential). Include pseudocode, time/space complexity analysis, and situational applicability. (10 Marks)"
      ]
    }
  },
  {
    "title": "Sorting Algorithms",
    "slug": "algorithms-sorting-algorithms",
    "order": 4,
    "estimatedHours": 6,
    "difficulty": "Beginner",
    "description": "Comprehensive overview of comparison-based and non-comparison sorting algorithms, stability, and space efficiency.",
    "subTopics": [
      "Bubble Sort",
      "Selection Sort",
      "Insertion Sort",
      "Merge Sort",
      "Quick Sort",
      "Heap Sort",
      "Counting Sort",
      "Radix Sort",
      "Bucket Sort",
      "Stable vs Unstable Sorting",
      "In-place vs Out-of-place Sorting"
    ],
    "prerequisiteTitles": [
      "Complexity Analysis Basics"
    ],
    "learningObjectives": [
      "Implement O(N²) quadratic and O(N log N) logarithmic sorting algorithms.",
      "Compare non-comparison O(N + K) sorts like Counting, Radix, and Bucket Sort.",
      "Analyze stability and in-place memory characteristics across different sorting strategies."
    ],
    "notes": [
      {
        "title": "Taxonomy & Analysis of Sorting Algorithms",
        "content": "Sorting rearranges data in ascending or descending order.\n\nKey Concepts:\n- Stability: A sorting algorithm is stable if it preserves the relative order of duplicate elements.\n- In-place vs Out-of-place: In-place algorithms require O(1) extra memory (excluding call stack).\n\nAlgorithmic Comparison:\n1. Bubble Sort: O(n^2) worst, O(n) best (optimized). Stable, In-place.\n2. Selection Sort: O(n^2) all cases. Unstable, In-place.\n3. Insertion Sort: O(n^2) worst, O(n) best. Stable, In-place. Excellent for small/nearly sorted data.\n4. Merge Sort: O(n log n) all cases. Stable, Out-of-place (O(n) auxiliary space).\n5. Quick Sort: O(n log n) average, O(n^2) worst. Unstable, In-place (O(log n) stack).\n6. Heap Sort: O(n log n) all cases. Unstable, In-place.\n7. Non-Comparison Sorts (Counting, Radix, Bucket): O(n + k) time when keys are within bounded range."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Introduction to Algorithms (CLRS)",
        "author": "Cormen et al."
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Sorting Algorithms",
        "url": "https://www.geeksforgeeks.org/sorting-algorithms/"
      },
      {
        "title": "LeetCode Sorting Problems",
        "url": "https://leetcode.com/tag/sorting/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is the difference between stable and unstable sorting algorithms? Give examples. (2 Marks)",
        "Why is Quick Sort often preferred over Merge Sort in practice? (2 Marks)",
        "Under what conditions does Counting Sort operate in O(n) time? (2 Marks)"
      ],
      "sixMarks": [
        "Explain Quick Sort with partitioning pseudocode (Lomuto or Hoare). Trace it on [10, 80, 30, 90, 40, 50, 70]. (6 Marks)",
        "Describe Heap Sort. Explain the Heapify process and analyze its O(n log n) time complexity. (6 Marks)"
      ],
      "longAnswer": [
        "Detail comparison-based vs non-comparison-based sorting algorithms. Provide a comparison matrix covering Best, Average, Worst Time Complexities, Auxiliary Space, and Stability. (10 Marks)"
      ]
    }
  },
  {
    "title": "Recursion Algorithms",
    "slug": "algorithms-recursion-algorithms",
    "order": 5,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Deep dive into recursive problem-solving, activation records, call stack dynamics, tail recursion optimization, and classic recursive problems.",
    "subTopics": [
      "Introduction to Recursion",
      "Recursive Functions",
      "Tail Recursion",
      "Factorial Problem",
      "Fibonacci Problem",
      "Tower of Hanoi",
      "Recursive Binary Search"
    ],
    "prerequisiteTitles": [
      "Introduction to Algorithms"
    ],
    "learningObjectives": [
      "Formulate base cases and recursive relations for complex problems.",
      "Understand call stack execution overhead and tail call optimization.",
      "Solve classic mathematical and structural problems using recursion."
    ],
    "notes": [
      {
        "title": "Principles of Recursion & Stack Frames",
        "content": "Recursion is a programming technique where a function calls itself to solve smaller subproblems of the same type.\n\nKey Components:\n1. Base Case: The termination condition that returns a value without making further recursive calls. Prevents infinite recursion and stack overflow.\n2. Recursive Step: The part where the function reduces the problem size and invokes itself.\n\nCall Stack & Memory Mechanics:\nEach recursive call pushes an Activation Record (Stack Frame) containing local variables, arguments, and return address onto the call stack.\n\nTail Recursion:\nA recursive function is Tail Recursive if the recursive call is the final statement executed in the function.\n- Advantage: Modern compilers optimize tail-recursive calls to run in O(1) auxiliary stack space (Tail Call Optimization).\n\nClassic Problems:\n- Factorial: T(n) = T(n-1) + O(1) -> O(n) time.\n- Fibonacci: T(n) = T(n-1) + T(n-2) + O(1) -> O(2^n) time without memoization.\n- Tower of Hanoi: T(n) = 2T(n-1) + 1 -> O(2^n) time, minimum moves = 2^n - 1."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Introduction to Algorithms (CLRS)",
        "author": "Cormen et al."
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Recursion Practice",
        "url": "https://www.geeksforgeeks.org/recursion/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is a base case in recursion and why is it necessary? (2 Marks)",
        "Define tail recursion. Why is it more space-efficient than non-tail recursion? (2 Marks)",
        "Write a recursive function to compute the n-th Fibonacci number. (2 Marks)"
      ],
      "sixMarks": [
        "Explain the Tower of Hanoi problem for N disks. Write the recursive algorithm and solve its recurrence relation. (6 Marks)",
        "Differentiate between Iterative and Recursive approaches with respect to stack overhead and execution time. (6 Marks)"
      ],
      "longAnswer": [
        "Explain recursion using memory activation records. Trace the call stack execution step-by-step for Tower of Hanoi with 3 disks and recursive Binary Search on a 7-element array. (10 Marks)"
      ]
    }
  },
  {
    "title": "Divide and Conquer Algorithms",
    "slug": "algorithms-divide-and-conquer-algorithms",
    "order": 6,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master the Divide, Conquer, and Combine paradigm, recurrence relations, and algorithm applications like Merge Sort, Quick Sort, and Min/Max finding.",
    "subTopics": [
      "Divide and Conquer Concept",
      "Binary Search using Divide and Conquer",
      "Merge Sort",
      "Quick Sort",
      "Maximum and Minimum Problem"
    ],
    "prerequisiteTitles": [
      "Recursion Algorithms",
      "Sorting Algorithms"
    ],
    "learningObjectives": [
      "Apply the three-step Divide, Conquer, and Combine methodology.",
      "Formulate and solve recurrence relations using the Master Theorem and Substitution Method.",
      "Analyze performance bounds for Merge Sort and Quick Sort under various pivot strategies."
    ],
    "notes": [
      {
        "title": "The Divide and Conquer Algorithmic Paradigm",
        "content": "Divide and Conquer breaks a complex problem into smaller subproblems, solves them recursively, and combines their solutions.\n\nThree Core Steps:\n1. Divide: Break the main problem of size n into smaller subproblems of size n/b.\n2. Conquer: Solve subproblems recursively. If subproblem size is small enough, solve directly (base case).\n3. Combine: Merge solutions of subproblems into the solution for the original problem.\n\nRecurrence Solver - Master Theorem:\nFor recurrences of the form T(n) = a T(n/b) + f(n), where a >= 1, b > 1:\n- Case 1: If f(n) = O(n^(log_b(a) - epsilon)), then T(n) = Theta(n^(log_b(a))).\n- Case 2: If f(n) = Theta(n^(log_b(a))), then T(n) = Theta(n^(log_b(a)) * log n).\n- Case 3: If f(n) = Omega(n^(log_b(a) + epsilon)), then T(n) = Theta(f(n)).\n\nApplications:\n- Merge Sort: T(n) = 2T(n/2) + O(n) -> T(n) = O(n log n).\n- Min/Max Finding: Divide array in halves; comparison count reduced from 2n-2 to 3n/2 - 2."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Introduction to Algorithms (CLRS)",
        "author": "Cormen et al."
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Divide and Conquer",
        "url": "https://www.geeksforgeeks.org/divide-and-conquer/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain the three steps of the Divide and Conquer strategy. (2 Marks)",
        "State the Master Theorem formula for divide-and-conquer recurrences. (2 Marks)",
        "How does finding minimum and maximum using divide and conquer save comparisons? (2 Marks)"
      ],
      "sixMarks": [
        "State and explain the Master Theorem. Solve T(n) = 2T(n/2) + n and T(n) = 4T(n/2) + n^2 using Master Theorem. (6 Marks)",
        "Explain Merge Sort using Divide and Conquer. Write the Merge function and prove its O(n log n) time complexity. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive study of Divide and Conquer algorithms. Provide detailed analysis, pseudocode, and mathematical recurrence derivations for Merge Sort, Quick Sort, and Finding Min-Max in an array. (10 Marks)"
      ]
    }
  },
  {
    "title": "Graph Algorithms",
    "slug": "algorithms-graph-algorithms",
    "order": 7,
    "estimatedHours": 7,
    "difficulty": "Intermediate",
    "description": "Learn graph structures, traversal algorithms (BFS, DFS), topological ordering, and single-source shortest path methods like Dijkstra and Bellman-Ford.",
    "subTopics": [
      "Graph Representation",
      "Adjacency Matrix",
      "Adjacency List",
      "Breadth First Search (BFS)",
      "Depth First Search (DFS)",
      "Topological Sorting",
      "Dijkstra Algorithm",
      "Bellman Ford Algorithm"
    ],
    "prerequisiteTitles": [
      "Complexity Analysis Basics",
      "Recursion Algorithms"
    ],
    "learningObjectives": [
      "Represent directed and undirected graphs using Adjacency Matrices and Lists.",
      "Implement Breadth-First Search (BFS) and Depth-First Search (DFS) graph traversals.",
      "Determine shortest paths in weighted graphs using Dijkstra and Bellman-Ford algorithms."
    ],
    "notes": [
      {
        "title": "Graph Traversals & Shortest Path Algorithms",
        "content": "A Graph G = (V, E) consists of a set of Vertices V and Edges E.\n\nRepresentations:\n- Adjacency Matrix: V x V matrix. Space O(V^2). Edge lookup O(1).\n- Adjacency List: Array of linked lists. Space O(V + E). Preferred for sparse graphs.\n\nTraversals:\n1. Breadth First Search (BFS): Uses Queue (FIFO). Explores neighbors level by level. Time: O(V + E).\n2. Depth First Search (DFS): Uses Stack/Recursion (LIFO). Explores deep along branches. Time: O(V + E).\n\nTopological Sorting:\nLinear ordering of vertices in a Directed Acyclic Graph (DAG) such that for every directed edge u -> v, u comes before v. (Kahn's algorithm using indegree or DFS).\n\nShortest Path Algorithms:\n1. Dijkstra's Algorithm: Greedy approach for single-source shortest paths on weighted graphs with non-negative edge weights. Time: O((V + E) log V) with Min-Heap.\n2. Bellman-Ford Algorithm: Dynamic programming approach. Handles negative edge weights and detects negative weight cycles. Time: O(V * E)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Introduction to Algorithms (CLRS)",
        "author": "Cormen et al."
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Graph Data Structure",
        "url": "https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/"
      },
      {
        "title": "LeetCode Graph Tag",
        "url": "https://leetcode.com/tag/graph/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Compare Adjacency Matrix and Adjacency List graph representations. (2 Marks)",
        "Why does Dijkstra's algorithm fail for graphs with negative edge weights? (2 Marks)",
        "What is a Directed Acyclic Graph (DAG) and what is topological sorting? (2 Marks)"
      ],
      "sixMarks": [
        "Explain BFS and DFS graph traversal algorithms with pseudocode and time complexity. (6 Marks)",
        "Write Dijkstra's algorithm for single-source shortest path. Trace it on a sample weighted graph. (6 Marks)"
      ],
      "longAnswer": [
        "Explain single-source shortest path problem. Compare Dijkstra and Bellman-Ford algorithms with pseudocode, trace examples, time/space complexities, and negative cycle detection. (10 Marks)"
      ]
    }
  },
  {
    "title": "Tree Algorithms",
    "slug": "algorithms-tree-algorithms",
    "order": 8,
    "estimatedHours": 6,
    "difficulty": "Intermediate",
    "description": "Explore hierarchical tree structures, binary search tree (BST) operations, tree traversals, binary heaps, and priority queues.",
    "subTopics": [
      "Binary Tree Traversal",
      "Inorder Traversal",
      "Preorder Traversal",
      "Postorder Traversal",
      "Binary Search Tree Operations",
      "Heap Algorithms",
      "Priority Queue"
    ],
    "prerequisiteTitles": [
      "Recursion Algorithms"
    ],
    "learningObjectives": [
      "Execute depth-first traversals (Inorder, Preorder, Postorder) and level-order traversals on trees.",
      "Perform insertion, deletion, and search operations on Binary Search Trees (BST).",
      "Construct Min/Max Heaps and utilize Priority Queues for efficient data ordering."
    ],
    "notes": [
      {
        "title": "Hierarchical Trees, BST, & Heap Structures",
        "content": "A Tree is a non-linear hierarchical data structure consisting of nodes connected by edges.\n\nBinary Tree Traversals:\n1. Inorder (Left, Root, Right): Gives sorted order for BST.\n2. Preorder (Root, Left, Right): Useful for copy/serialization of tree structure.\n3. Postorder (Left, Right, Root): Useful for tree deletion / expression evaluation.\n\nBinary Search Tree (BST):\n- Property: For every node, left subtree values < node value < right subtree values.\n- Operations: Search O(h), Insert O(h), Delete O(h), where h is height (O(log n) balanced, O(n) skewed).\n\nHeap Data Structure:\nA complete binary tree stored in an array satisfying the Heap Property:\n- Max Heap: Parent node >= Children nodes.\n- Min Heap: Parent node <= Children nodes.\n- Heapify Operation: Restores heap property in O(log n) time.\n- Build Heap: Converts array to heap in O(n) time.\n\nPriority Queue:\nAbstract data type implemented using Min/Max Heap. Supports insert O(log n) and extract-min/max O(log n)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Introduction to Algorithms (CLRS)",
        "author": "Cormen et al."
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Tree Data Structure",
        "url": "https://www.geeksforgeeks.org/binary-tree-data-structure/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State the property of a Binary Search Tree (BST). What order does Inorder traversal yield? (2 Marks)",
        "What is a Complete Binary Tree? How is it represented efficiently in memory? (2 Marks)",
        "Differentiate between Min-Heap and Max-Heap. (2 Marks)"
      ],
      "sixMarks": [
        "Explain BST search, insertion, and deletion algorithms (covering all 3 deletion cases). (6 Marks)",
        "Explain Max-Heapify and Build-Max-Heap algorithms with step-by-step example array [4, 10, 3, 5, 1]. (6 Marks)"
      ],
      "longAnswer": [
        "Detail Tree data structures. Compare Binary Search Trees (BST) and Heaps, including traversals, operations (insert/delete/search), time complexities, and Priority Queue implementation. (10 Marks)"
      ]
    }
  },
  {
    "title": "Greedy Algorithms",
    "slug": "algorithms-greedy-algorithms",
    "order": 9,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Understand locally optimal choice strategies, greedy-choice property, optimal substructure, and algorithms for Minimum Spanning Trees, Huffman coding, and Knapsack.",
    "subTopics": [
      "Greedy Strategy",
      "Activity Selection Problem",
      "Fractional Knapsack",
      "Job Sequencing",
      "Huffman Coding",
      "Prim Algorithm",
      "Kruskal Algorithm"
    ],
    "prerequisiteTitles": [
      "Complexity Analysis Basics",
      "Sorting Algorithms"
    ],
    "learningObjectives": [
      "Identify problems satisfying the greedy-choice property and optimal substructure.",
      "Implement classic greedy solutions for Fractional Knapsack, Job Sequencing, and Huffman Coding.",
      "Build Minimum Spanning Trees using Prim's and Kruskal's algorithms."
    ],
    "notes": [
      {
        "title": "The Greedy Choice Paradigm & MST Algorithms",
        "content": "Greedy Paradigm makes locally optimal choices at each step with the hope of finding a global optimum.\n\nProperties of Greedy Problems:\n1. Greedy-Choice Property: A globally optimal solution can be arrived at by making locally optimal choices.\n2. Optimal Substructure: An optimal solution to the problem contains optimal solutions to subproblems.\n\nClassic Greedy Applications:\n1. Activity Selection: Sort activities by end time. Pick next activity whose start time >= previous end time. Time: O(n log n).\n2. Fractional Knapsack: Compute value/weight ratio for items. Sort descending by ratio. Take items fully or fractionally. Time: O(n log n). (Note: 0/1 Knapsack CANNOT be solved greedily).\n3. Job Sequencing with Deadlines: Sort jobs by profit descending. Assign each job to the latest free slot before deadline. Time: O(n^2) or O(n log n) with Disjoint Set.\n4. Huffman Coding: Lossless data compression building prefix-free codes using Min-Heap. Time: O(n log n).\n\nMinimum Spanning Tree (MST):\nSpanning tree of connected weighted graph with minimum total edge weight.\n- Prim's Algorithm: Grows MST from arbitrary starting node by picking minimum weight cut edge. Time: O(E log V).\n- Kruskal's Algorithm: Sorts all edges, adds smallest edge that does not form cycle using Disjoint Set Union (DSU). Time: O(E log E)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Introduction to Algorithms (CLRS)",
        "author": "Cormen et al."
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Greedy Algorithms",
        "url": "https://www.geeksforgeeks.org/greedy-algorithms/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What are the two core properties required for a problem to be solved using the Greedy method? (2 Marks)",
        "Why can Fractional Knapsack be solved greedily while 0/1 Knapsack cannot? (2 Marks)",
        "What is a Minimum Spanning Tree? (2 Marks)"
      ],
      "sixMarks": [
        "Explain Fractional Knapsack problem using greedy strategy. Write pseudocode and trace with weights [10,20,30] and values [60,100,120] for capacity W=50. (6 Marks)",
        "Compare Prim's and Kruskal's algorithms for Minimum Spanning Trees. Write Kruskal's algorithm using Disjoint Sets. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive study of Greedy Algorithms. Detail greedy strategy, Activity Selection, Fractional Knapsack, Huffman Coding, Prim's, and Kruskal's algorithms with pseudocode, trace examples, and time complexity proofs. (10 Marks)"
      ]
    }
  },
  {
    "title": "Dynamic Programming Basics",
    "slug": "algorithms-dynamic-programming-basics",
    "order": 10,
    "estimatedHours": 7,
    "difficulty": "Advanced",
    "description": "Solve complex overlapping subproblems and optimal substructures using Memoization (Top-Down) and Tabulation (Bottom-Up) techniques.",
    "subTopics": [
      "Introduction to Dynamic Programming",
      "Memoization",
      "Tabulation",
      "Fibonacci using DP",
      "Coin Change Problem",
      "Longest Common Subsequence",
      "0/1 Knapsack Introduction"
    ],
    "prerequisiteTitles": [
      "Recursion Algorithms"
    ],
    "learningObjectives": [
      "Recognize overlapping subproblems and optimal substructure properties in computational problems.",
      "Differentiate between top-down Memoization and bottom-up Tabulation approaches.",
      "Formulate state transitions for Fibonacci, Coin Change, LCS, and 0/1 Knapsack."
    ],
    "notes": [
      {
        "title": "Dynamic Programming Principles & State Transitions",
        "content": "Dynamic Programming (DP) optimizes recursive algorithms by storing answers to overlapping subproblems to avoid redundant calculations.\n\nKey Properties:\n1. Overlapping Subproblems: The problem can be broken down into subproblems which are reused several times.\n2. Optimal Substructure: An optimal solution to the problem can be constructed from optimal solutions of its subproblems.\n\nDP Approaches:\n1. Top-Down with Memoization: Uses recursion + lookup table (hash map / array). Computes subproblems on demand.\n2. Bottom-Up with Tabulation: Iterative table filling from base cases upwards. Avoids recursion stack overhead.\n\nStandard DP Benchmark Problems:\n- Fibonacci: Reduced from O(2^n) to O(n) time and O(n) space (O(1) space with variables).\n- Coin Change: Minimum coins to make amount A. State: dp[i] = min(dp[i], 1 + dp[i - coin]). Time: O(n * A).\n- 0/1 Knapsack: Items cannot be divided. State: dp[i][w] = max(dp[i-1][w], val[i-1] + dp[i-1][w - wt[i-1]]). Time: O(n * W).\n- Longest Common Subsequence (LCS): Match characters: dp[i][j] = 1 + dp[i-1][j-1], Mismatch: max(dp[i-1][j], dp[i][j-1]). Time: O(m * n)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Introduction to Algorithms (CLRS)",
        "author": "Cormen et al."
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Dynamic Programming",
        "url": "https://www.geeksforgeeks.org/dynamic-programming/"
      },
      {
        "title": "LeetCode Dynamic Programming Tag",
        "url": "https://leetcode.com/tag/dynamic-programming/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is the difference between Memoization (Top-Down) and Tabulation (Bottom-Up)? (2 Marks)",
        "What is the principle of optimality in Dynamic Programming? (2 Marks)",
        "State the time and space complexity of 0/1 Knapsack using DP. (2 Marks)"
      ],
      "sixMarks": [
        "Explain 0/1 Knapsack problem using Dynamic Programming. Write state transition equation and trace for items wt=[1,2,3], val=[10,15,40], capacity W=6. (6 Marks)",
        "Explain Longest Common Subsequence (LCS) problem. Write state equations and trace for strings 'ABCDGH' and 'AEDFHR'. (6 Marks)"
      ],
      "longAnswer": [
        "Detailed comparison of Divide & Conquer, Greedy, and Dynamic Programming paradigms. Formulate state definitions, DP matrices, and pseudocode for 0/1 Knapsack, LCS, and Coin Change problems. (10 Marks)"
      ]
    }
  },
  {
    "title": "String Algorithms",
    "slug": "algorithms-string-algorithms",
    "order": 11,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Study string pattern matching techniques, Knuth-Morris-Pratt (KMP), Rabin-Karp rolling hash, and prefix tree (Trie) structures.",
    "subTopics": [
      "String Searching",
      "Naive Pattern Matching",
      "KMP Algorithm",
      "Rabin-Karp Algorithm",
      "Trie Data Structure"
    ],
    "prerequisiteTitles": [
      "Searching Algorithms"
    ],
    "learningObjectives": [
      "Compare naive O(M*(N-M+1)) pattern matching with efficient linear-time search algorithms.",
      "Master the Prefix Function / Failure Function construction in the KMP algorithm.",
      "Implement Tries for rapid prefix search and autocomplete functionality."
    ],
    "notes": [
      {
        "title": "Pattern Matching & Trie Structures",
        "content": "String Algorithms locate occurrences of a pattern P of length m within text T of length n.\n\n1. Naive Pattern Matching:\n   - Slides pattern one by one. Worst-case time: O(m * (n - m + 1)).\n\n2. Knuth-Morris-Pratt (KMP) Algorithm:\n   - Avoids re-checking characters by precomputing Longest Proper Prefix which is also Suffix (LPS array / Failure Function).\n   - Time Complexity: Preprocessing LPS O(m), Searching O(n). Total: O(n + m).\n\n3. Rabin-Karp Algorithm:\n   - Uses Rolling Hash function to match hash values of text substrings with pattern hash.\n   - Handles collisions via character-by-character checks.\n   - Time Complexity: Average O(n + m), Worst O(n * m). Excellent for multi-pattern search.\n\n4. Trie (Prefix Tree):\n   - Tree data structure for storing strings where nodes store characters and edges represent transitions.\n   - Time Complexity: Search, Insert, Delete O(L) where L is string length.\n   - Applications: Autocomplete, spell checking, IP routing table lookup."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Introduction to Algorithms (CLRS)",
        "author": "Cormen et al."
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks String Algorithms",
        "url": "https://www.geeksforgeeks.org/string-data-structure/"
      },
      {
        "title": "LeetCode String Matching Problems",
        "url": "https://leetcode.com/tag/string-matching/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is the LPS array in the KMP string matching algorithm? (2 Marks)",
        "How does the Rabin-Karp algorithm use rolling hash? (2 Marks)",
        "Define a Trie data structure and state its search time complexity. (2 Marks)"
      ],
      "sixMarks": [
        "Explain the KMP algorithm. Construct the LPS array for pattern 'ABABCABAB' and trace text matching. (6 Marks)",
        "Explain the Trie data structure. Draw a Trie for words ['cat', 'car', 'cart', 'dog', 'dot'] and show insert/search operations. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive study of String Pattern Matching algorithms. Compare Naive, KMP, Rabin-Karp, and Trie structures with pseudocode, mathematical hash equations, LPS derivations, and performance trade-offs. (10 Marks)"
      ]
    }
  },
  {
    "title": "Hashing Algorithms",
    "slug": "algorithms-hashing-algorithms",
    "order": 12,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Understand hash function design, hash tables, key collision resolution strategies including chaining and open addressing.",
    "subTopics": [
      "Hash Functions",
      "Hash Tables",
      "Collision Handling",
      "Chaining",
      "Open Addressing"
    ],
    "prerequisiteTitles": [
      "Complexity Analysis Basics"
    ],
    "learningObjectives": [
      "Design uniform hash functions to minimize collision rates.",
      "Implement separate chaining using linked lists or dynamic arrays.",
      "Apply open addressing collision resolution techniques (Linear Probing, Quadratic Probing, Double Hashing)."
    ],
    "notes": [
      {
        "title": "Hash Tables & Collision Resolution Techniques",
        "content": "Hashing maps data of arbitrary size to fixed-size values (hash keys) for O(1) average-time search, insert, and delete.\n\nComponents:\n- Hash Function h(k): Maps key k to bucket index. Examples: Division method h(k) = k mod m, Multiplication method, Universal Hashing.\n- Load Factor alpha = n / m (number of elements n / table size m).\n\nCollision Handling Strategies:\n1. Separate Chaining (Open Hashing):\n   - Each bucket points to a linked list of records.\n   - Handles high load factor (alpha > 1).\n   - Time Complexity: O(1 + alpha). Worst case O(n) if all keys hash to same bucket.\n\n2. Open Addressing (Closed Hashing):\n   - All elements stored inside hash table array. If collision occurs, probes next available slot.\n   - Linear Probing: h(k, i) = (h'(k) + i) mod m. Suffers from Primary Clustering.\n   - Quadratic Probing: h(k, i) = (h'(k) + c1*i + c2*i^2) mod m. Suffers from Secondary Clustering.\n   - Double Hashing: h(k, i) = (h1(k) + i * h2(k)) mod m. Eliminates clustering."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Introduction to Algorithms (CLRS)",
        "author": "Cormen et al."
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Hashing Data Structure",
        "url": "https://www.geeksforgeeks.org/hashing-data-structure/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is a Hash Collision? List methods to resolve collisions. (2 Marks)",
        "Define Load Factor in Hashing. What happens when load factor exceeds threshold? (2 Marks)",
        "Compare Chaining and Open Addressing. (2 Marks)"
      ],
      "sixMarks": [
        "Explain Open Addressing collision resolution techniques: Linear Probing, Quadratic Probing, and Double Hashing with examples. (6 Marks)",
        "Explain Separate Chaining. Insert keys [50, 70, 76, 85, 92, 73, 101] into hash table of size 7 using h(k) = k mod 7. (6 Marks)"
      ],
      "longAnswer": [
        "Detailed analysis of Hashing Systems. Discuss properties of ideal hash functions, mathematical formulations of Open Addressing vs Chaining, clustering problems, and dynamic rehashing. (10 Marks)"
      ]
    }
  },
  {
    "title": "Backtracking Algorithms",
    "slug": "algorithms-backtracking-algorithms",
    "order": 13,
    "estimatedHours": 6,
    "difficulty": "Advanced",
    "description": "Systematic state-space tree search with pruning for constraint satisfaction problems like N-Queens, Sudoku, Maze exploration, and Graph Coloring.",
    "subTopics": [
      "Backtracking Concept",
      "N Queens Problem",
      "Rat in Maze",
      "Sudoku Solver",
      "Graph Coloring"
    ],
    "prerequisiteTitles": [
      "Recursion Algorithms"
    ],
    "learningObjectives": [
      "Construct state-space search trees and implement backtracking recursion.",
      "Apply bounding functions and pruning to eliminate invalid search branches early.",
      "Solve benchmark combinatorial problems including N-Queens, Sudoku, and Map/Graph Coloring."
    ],
    "notes": [
      {
        "title": "Constraint Satisfaction & Backtracking Search Trees",
        "content": "Backtracking builds solutions incrementally and abandons (backtracks from) a candidate path as soon as it determines the candidate cannot lead to a valid solution.\n\nState-Space Tree:\n- A tree representing all possible configurations/choices at each step.\n- Backtracking performs Depth-First Search on the State-Space Tree.\n- Bounding Function / Constraint Check prunes subtrees that violate problem constraints.\n\nClassic Backtracking Problems:\n1. N-Queens Problem: Place N non-attacking queens on an N x N chessboard.\n   - Constraint: No two queens share same row, column, or diagonal.\n   - Time: O(N!).\n\n2. Rat in a Maze: Find path from (0,0) to (N-1,N-1) through open cells (1) avoiding blocked cells (0).\n   - Time: O(2^(N^2)).\n\n3. Sudoku Solver: Fill 9x9 grid so each row, column, and 3x3 subgrid contains digits 1-9 without repetition.\n   - Time: O(9^(N*N)).\n\n4. Graph Coloring (m-Coloring): Assign at most m colors to graph vertices such that no adjacent vertices share same color.\n   - Time: O(m^V)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Introduction to Algorithms (CLRS)",
        "author": "Cormen et al."
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Backtracking Algorithms",
        "url": "https://www.geeksforgeeks.org/backtracking-algorithms/"
      },
      {
        "title": "LeetCode Backtracking Tag",
        "url": "https://leetcode.com/tag/backtracking/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is Backtracking and how does it differ from exhaustive brute-force search? (2 Marks)",
        "What is a State-Space Tree in backtracking? (2 Marks)",
        "State the constraints for the N-Queens problem on an N x N board. (2 Marks)"
      ],
      "sixMarks": [
        "Explain N-Queens problem using Backtracking. Write pseudocode and trace state-space tree for N=4. (6 Marks)",
        "Explain the Rat in a Maze problem. Write backtracking algorithm to find path in N x N grid. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive study of Backtracking paradigm. Detail State-Space Tree search, bounding functions, and algorithms for N-Queens, Sudoku Solver, and Graph m-Coloring with complete pseudocode and execution traces. (10 Marks)"
      ]
    }
  }
];
