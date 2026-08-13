module.exports = [
  {
    "title": "Introduction to Data Structures and Algorithms",
    "slug": "dsa-introduction-to-data-structures-and-algorithms",
    "order": 1,
    "estimatedHours": 3,
    "difficulty": "Beginner",
    "description": "Understand fundamental data structures (Linear: Arrays, Stacks, Queues, Linked Lists vs Non-Linear: Trees, Graphs), algorithm properties, problem-solving, and complexity basics.",
    "subTopics": [
      "Introduction to Data Structures",
      "Importance of Data Structures",
      "Types of Data Structures (Linear, Non-Linear)",
      "Introduction to Algorithms",
      "Algorithm Characteristics",
      "Problem Solving Approach",
      "Time Complexity Basics",
      "Space Complexity Basics"
    ],
    "prerequisiteTitles": [],
    "learningObjectives": [
      "Classify Data Structures: Primitive vs Non-Primitive, Linear (contiguously or pointers linked) vs Non-Linear (hierarchical/graphical).",
      "Understand 5 Algorithm Characteristics: Input, Output, Definiteness, Finiteness, Effectiveness.",
      "Analyze basic RAM model computation cost for time and space complexity."
    ],
    "notes": [
      {
        "title": "Classification of Data Structures & Algorithm Characteristics",
        "content": "INTRODUCTION TO DATA STRUCTURES & ALGORITHMS\n\n1. Data Structure Classification:\n   - Linear Data Structures: Elements arranged sequentially (Arrays, Linked Lists, Stacks, Queues). Single level traversing.\n   - Non-Linear Data Structures: Elements arranged hierarchically or as networks (Trees, Binary Search Trees, Graphs, Heaps). Multi-level traversing.\n\n2. 5 Essential Characteristics of an Algorithm:\n   - Input: Zero or more well-defined inputs.\n   - Output: At least one well-defined output.\n   - Definiteness: Every step must be clear and unambiguous.\n   - Finiteness: Must terminate after a finite number of steps.\n   - Effectiveness: Every operation must be basic enough to be carried out in practice."
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
        "title": "LeetCode Explore - Data Structures Overview",
        "url": "https://leetcode.com/explore/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between Linear and Non-Linear Data Structures with examples. (2 Marks)",
        "State 5 essential characteristics of a valid algorithm. (2 Marks)",
        "Define Time Complexity and Space Complexity. (2 Marks)"
      ],
      "sixMarks": [
        "Explain Data Structure classification hierarchy: Primitive (int, float, char) vs Non-Primitive (Arrays, Lists, Trees, Graphs, Hash Tables). (6 Marks)",
        "Describe RAM (Random Access Machine) computation model for analyzing step execution counts and memory consumption. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Algorithmic Foundations. Detail problem-solving strategies (Iterative vs Recursive, Divide & Conquer vs Greedy), memory layout trade-offs (Static Array contiguous vs Dynamic Pointer allocation), and abstract data types (ADTs). (10 Marks)"
      ]
    }
  },
  {
    "title": "Algorithm Analysis Basics",
    "slug": "dsa-algorithm-analysis-basics",
    "order": 2,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Master asymptotic analysis: Big O ($O$), Big Omega ($Omega$), Big Theta ($Theta$) notations, Best Case, Average Case, Worst Case analysis, and loop growth rates.",
    "subTopics": [
      "Performance Analysis of Algorithms",
      "Best Case Analysis",
      "Average Case Analysis",
      "Worst Case Analysis",
      "Asymptotic Notations (Big O, Big Omega, Big Theta)",
      "Complexity Comparison"
    ],
    "prerequisiteTitles": [
      "Introduction to Data Structures and Algorithms"
    ],
    "learningObjectives": [
      "Define Asymptotic Notations: Big O (Upper bound $f(n) le c cdot g(n)$), Big Omega (Lower bound $f(n) ge c cdot g(n)$), Big Theta (Tight bound $c_1 g(n) le f(n) le c_2 g(n)$).",
      "Rank complexity growth orders: $O(1) < O(log n) < O(n) < O(n log n) < O(n^2) < O(2^n) < O(n!)$.",
      "Analyze loop nest time complexity recurrence relations."
    ],
    "notes": [
      {
        "title": "Asymptotic Notations Definitions & Growth Hierarchy",
        "content": "ASYMPTOTIC ANALYSIS & BIG O NOTATION\n\n1. Formal Mathematical Definitions:\n   - Big O ($O(g(n))$): Upper Bound. $f(n) = O(g(n))$ if $exists c > 0, n_0 > 0$ such that $0 le f(n) le c cdot g(n)$ for all $n ge n_0$.\n   - Big Omega ($Omega(g(n))$): Lower Bound. $f(n) = Omega(g(n))$ if $exists c > 0, n_0 > 0$ such that $0 le c cdot g(n) le f(n)$ for all $n ge n_0$.\n   - Big Theta ($Theta(g(n))$): Tight Bound. $f(n) = Theta(g(n))$ if $exists c_1, c_2 > 0, n_0 > 0$ such that $c_1 cdot g(n) le f(n) le c_2 cdot g(n)$ for all $n ge n_0$.\n\n2. Growth Rate Hierarchy (Slowest to Fastest Growth):\n   $O(1) subset O(log n) subset O(sqrt{n}) subset O(n) subset O(n log n) subset O(n^2) subset O(n^3) subset O(2^n) subset O(n!)$"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Introduction to Algorithms",
        "author": "Cormen, Leiserson, Rivest, Stein"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Analysis of Algorithms Practice",
        "url": "https://www.geeksforgeeks.org/analysis-of-algorithms-set-1-asymptotic-analysis/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State formal mathematical definition of Big O notation. (2 Marks)",
        "Arrange growth rates in ascending order: $O(n^2), O(n!), O(log n), O(1), O(n log n), O(2^n)$. (2 Marks)",
        "Differentiate between Worst Case and Average Case analysis. (2 Marks)"
      ],
      "sixMarks": [
        "Analyze the time complexity of nested loops: (a) single loop to $n$, (b) nested loop $i$ from $1..n$, $j$ from $1..i$, (c) loop $i$ doubling $i = i \times 2$. (6 Marks)",
        "Prove mathematically that $f(n) = 3n^2 + 5n + 8$ is $Theta(n^2)$ using definitions of Big O and Big Omega. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Algorithmic Asymptotic Analysis. Detail Master Theorem for divide-and-conquer recurrences ($T(n) = a T(n/b) + f(n)$), Substitution Method, Recursion Tree Method, and Amortized Analysis (Aggregate, Accounting, Potential methods). (10 Marks)"
      ]
    }
  },
  {
    "title": "Arrays",
    "slug": "dsa-arrays",
    "order": 3,
    "estimatedHours": 5,
    "difficulty": "Beginner",
    "description": "Master Array memory operations: 1D/2D row-major & column-major addressing, Traversal, Insertion, Deletion, Prefix Sum technique, Two Pointer technique, and Sliding Window technique.",
    "subTopics": [
      "Introduction to Arrays",
      "Array Representation (Row-Major, Column-Major)",
      "One Dimensional & Two Dimensional Arrays",
      "Array Operations (Traversal, Insertion, Deletion, Searching, Updating)",
      "Array Applications",
      "Prefix Sum Technique",
      "Two Pointer Technique",
      "Sliding Window Technique"
    ],
    "prerequisiteTitles": [
      "Algorithm Analysis Basics"
    ],
    "learningObjectives": [
      "Calculate 2D array element address in Row-Major: $Address(A[i][j]) = Base + (i \times C + j) \times size$.",
      "Implement Two Pointer Technique (e.g. Pair with Target Sum, Reverse Array, Move Zeroes).",
      "Implement Sliding Window Technique for Subarray problems."
    ],
    "notes": [
      {
        "title": "2D Array Row/Column Major Addressing & Two Pointer Code",
        "content": "ARRAYS & ALGORITHMIC TECHNIQUES\n\n1. 2D Array Address Calculations:\n   For array $A[R][C]$ starting at Base Address $B$ with element byte size $W$:\n   - Row-Major Order: $Address(A[i][j]) = B + [i \times C + j] \times W$\n   - Column-Major Order: $Address(A[i][j]) = B + [j \times R + i] \times W$\n\n2. Two Pointer Technique (Target Sum Pair in Sorted Array):\n   def two_sum_sorted(arr, target):\n       left, right = 0, len(arr) - 1\n       while left < right:\n           current_sum = arr[left] + arr[right]\n           if current_sum == target:\n               return [left, right]\n           elif current_sum < target:\n               left += 1\n           else:\n               right -= 1\n       return [-1, -1] # Time: O(N), Space: O(1)"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Data Structures and Algorithms in Python",
        "author": "Michael T. Goodrich"
      }
    ],
    "practiceLinks": [
      {
        "title": "LeetCode Array Problems Tag",
        "url": "https://leetcode.com/tag/array/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Write Row-Major and Column-Major address formulas for 2D Array element $A[i][j]$. (2 Marks)",
        "Compare Array Insertion/Deletion time complexity at beginning vs end. (2 Marks)",
        "Explain Prefix Sum array construction and range query formula. (2 Marks)"
      ],
      "sixMarks": [
        "Write Python/C code for Sliding Window technique to find Maximum Sum Subarray of size $k$. State time & space complexity. (6 Marks)",
        "Given 2D array $A[10][20]$ with base address 1000 and 4 bytes per element. Calculate address of $A[5][12]$ in Row-Major and Column-Major order. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Array Problem-Solving Techniques. Detail Two Pointer applications (3Sum, Trapping Rainwater), Sliding Window (Variable size vs Fixed size), Prefix Sum / Difference Array, and Dutch National Flag 3-way partitioning algorithm. (10 Marks)"
      ]
    }
  },
  {
    "title": "Strings",
    "slug": "dsa-strings",
    "order": 4,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Explore String manipulation: Character array representation, Frequency maps, Anagram validation, Palindrome verification, Pattern Matching (KMP, Rabin-Karp introduction).",
    "subTopics": [
      "Introduction to Strings",
      "String Representation",
      "String Operations",
      "String Manipulation",
      "Character Frequency Counting",
      "String Searching Basics",
      "Pattern Matching Introduction",
      "String Problem Solving"
    ],
    "prerequisiteTitles": [
      "Arrays"
    ],
    "learningObjectives": [
      "Implement String Manipulation: Reversal, Character Frequency Hashing, Anagram check.",
      "Understand String immutability in Java/Python vs mutable character arrays in C.",
      "Apply Pattern Matching algorithms (Naive $O(M \times N)$ vs KMP $O(M+N)$ Prefix Function)."
    ],
    "notes": [
      {
        "title": "Valid Anagram Check & KMP Prefix Function LPS Array",
        "content": "STRINGS & PATTERN MATCHING\n\n1. Valid Anagram Check Code (Frequency Array):\n   def is_anagram(s: str, t: str) -> bool:\n       if len(s) != len(t): return False\n       count = [0] * 26\n       for char in s: count[ord(char) - ord('a')] += 1\n       for char in t:\n           count[ord(char) - ord('a')] -= 1\n           if count[ord(char) - ord('a')] < 0: return False\n       return True # Time: O(N), Space: O(1)\n\n2. KMP (Knuth-Morris-Pratt) LPS (Longest Prefix Suffix) Array:\n   Computes longest proper prefix that is also a suffix for pattern $P$. Eliminates redundant comparisons on pattern mismatch."
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
        "title": "LeetCode String Category",
        "url": "https://leetcode.com/tag/string/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain how to check if two strings are Valid Anagrams in $O(N)$ time and $O(1)$ space. (2 Marks)",
        "What is the LPS (Longest Prefix Suffix) array in KMP Pattern Matching algorithm? (2 Marks)",
        "State time complexity of Naive String Matching vs KMP algorithm. (2 Marks)"
      ],
      "sixMarks": [
        "Write Python/C code to find the Longest Palindromic Substring using Expand Around Center technique ($O(N^2)$ time, $O(1)$ space). (6 Marks)",
        "Construct the LPS array for pattern `ABABCABAB` step-by-step for KMP string matching. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on String Processing Algorithms. Detail Rabin-Karp rolling hash algorithm ($O(N+M)$ average), KMP pattern matcher prefix function state machine, Trie-based string search, and Z-algorithm. (10 Marks)"
      ]
    }
  },
  {
    "title": "Linked Lists",
    "slug": "dsa-linked-lists",
    "order": 5,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master pointer-based data structures: Singly Linked List, Doubly Linked List, Circular Linked List, Insert/Delete at head/tail/position, Reverse List, and Floyd's Cycle Detection.",
    "subTopics": [
      "Introduction to Linked Lists",
      "Linked List Representation",
      "Types of Linked Lists (Singly, Doubly, Circular)",
      "Linked List Operations (Insertion, Deletion, Traversal, Searching)",
      "Reverse Linked List",
      "Detect Loop in Linked List (Floyd's Cycle Finding)",
      "Applications of Linked Lists"
    ],
    "prerequisiteTitles": [
      "Arrays"
    ],
    "learningObjectives": [
      "Implement Singly Linked List node insertion and deletion in $O(1)$ at head.",
      "Execute Reverse Singly Linked List iteratively (using 3 pointers: `prev`, `curr`, `next`) and recursively.",
      "Apply Floyd's Tortoise and Hare Cycle Detection Algorithm."
    ],
    "notes": [
      {
        "title": "Singly Linked List Reversal & Floyd's Cycle Detection Code",
        "content": "LINKED LISTS: REVERSAL & CYCLE DETECTION\n\n1. Reverse Singly Linked List (Iterative Code):\n   class Node:\n       def __init__(self, val=0, next=None):\n           self.val = val\n           self.next = next\n\n   def reverse_list(head: Node) -> Node:\n       prev = None\n       curr = head\n       while curr:\n           next_node = curr.next\n           curr.next = prev\n           prev = curr\n           curr = next_node\n       return prev # New Head (Time: O(N), Space: O(1))\n\n2. Floyd's Cycle Detection (Tortoise & Hare Algorithm):\n   def has_cycle(head: Node) -> bool:\n       slow = fast = head\n       while fast and fast.next:\n           slow = slow.next\n           fast = fast.next.next\n           if slow == fast:\n               return True # Loop Detected!\n       return False"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Data Structures and Algorithms Made Easy",
        "author": "Narasimha Karumanchi"
      }
    ],
    "practiceLinks": [
      {
        "title": "LeetCode Linked List Tag",
        "url": "https://leetcode.com/tag/linked-list/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Compare Array vs Linked List on memory allocation, random access, and insertion complexity. (2 Marks)",
        "Explain Floyd's Cycle Detection Algorithm (Slow & Fast pointers). (2 Marks)",
        "State advantage of Doubly Linked List over Singly Linked List. (2 Marks)"
      ],
      "sixMarks": [
        "Write Python/C code to reverse a Singly Linked List iteratively using 3 pointers. Trace for list 1 -> 2 -> 3 -> 4 -> NULL. (6 Marks)",
        "Write code to find the middle node of a Linked List in a single traversal, and merge two sorted linked lists. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Linked List Data Structures. Detail Singly, Doubly, and Circular Linked List node representations, LRU Cache implementation using Doubly Linked List + Hash Map ($O(1)$ get/put), and Flattening a multi-level Linked List. (10 Marks)"
      ]
    }
  },
  {
    "title": "Stacks",
    "slug": "dsa-stacks",
    "order": 6,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master LIFO (Last-In First-Out) operations: Array and Linked List implementation, Infix to Postfix/Prefix conversion, Expression Evaluation, Parenthesis Matching, and Monotonic Stack.",
    "subTopics": [
      "Introduction to Stack (LIFO)",
      "Stack Operations (Push, Pop, Peek)",
      "Stack Implementation Using Arrays",
      "Stack Implementation Using Linked Lists",
      "Applications of Stack (Expression Evaluation, Parenthesis Matching, Function Calls, Backtracking)",
      "Monotonic Stack"
    ],
    "prerequisiteTitles": [
      "Arrays",
      "Linked Lists"
    ],
    "learningObjectives": [
      "Implement Stack ADT using Array and Singly Linked List ($O(1)$ Push, Pop, Peek).",
      "Apply Stack for Balanced Parentheses Validation and Infix-to-Postfix conversion.",
      "Solve Next Greater Element using Monotonic Stack."
    ],
    "notes": [
      {
        "title": "Balanced Parentheses & Next Greater Element Monotonic Stack",
        "content": "STACK ADT & APPLICATIONS\n\n1. Valid Parentheses Code (Python Stack):\n   def is_valid(s: str) -> bool:\n       stack = []\n       mapping = {')': '(', '}': '{', ']': '['}\n       for char in s:\n           if char in mapping:\n               top = stack.pop() if stack else '#'\n               if mapping[char] != top: return False\n           else:\n               stack.append(char)\n       return not stack\n\n2. Next Greater Element Code (Monotonic Stack):\n   def next_greater_element(nums):\n       res = [-1] * len(nums)\n       stack = [] # Decreasing stack storing indices\n       for i in range(len(nums)):\n           while stack and nums[i] > nums[stack[-1]]:\n               idx = stack.pop()\n               res[idx] = nums[i]\n           stack.append(i)\n       return res"
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
        "title": "LeetCode Stack Category",
        "url": "https://leetcode.com/tag/stack/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State LIFO property of Stack and list 3 real-world software applications. (2 Marks)",
        "Convert Infix expression `A + B * C - D` to Postfix notation. (2 Marks)",
        "What is a Monotonic Stack? (2 Marks)"
      ],
      "sixMarks": [
        "Write Python/C code to convert an Infix expression to Postfix using Stack operator precedence rules. Trace for `a + b * (c ^ d - e)`. (6 Marks)",
        "Write code for Next Greater Element for each element in an array using Monotonic Stack ($O(N)$ time). (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Stack Applications & Mechanics. Detail Call Stack activation records in recursion, Postfix evaluation using stack, Min-Stack design ($O(1)$ getMin), and Largest Rectangle in Histogram using Monotonic Stack. (10 Marks)"
      ]
    }
  },
  {
    "title": "Queues",
    "slug": "dsa-queues",
    "order": 7,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master FIFO (First-In First-Out) operations: Simple Queue, Circular Queue (Modulo arithmetic), Double-Ended Queue (Deque), Priority Queue, Array/Linked List implementations, and Queue applications.",
    "subTopics": [
      "Introduction to Queue (FIFO)",
      "Queue Operations (Enqueue, Dequeue, Front, Rear)",
      "Queue Implementation Using Arrays & Linked Lists",
      "Types of Queues (Simple, Circular, Priority Queue, Deque)",
      "Applications of Queue (BFS, Process Scheduling, Buffer)"
    ],
    "prerequisiteTitles": [
      "Stacks"
    ],
    "learningObjectives": [
      "Implement Circular Queue using Array modulo arithmetic to prevent memory wastage: $Rear = (Rear + 1) pmod N$.",
      "Implement Double-Ended Queue (Deque) operations.",
      "Understand Queue applications in Operating System Process Scheduling and BFS Graph Traversal."
    ],
    "notes": [
      {
        "title": "Circular Queue Array Modulo Implementation Code",
        "content": "CIRCULAR QUEUE ADT\n\n1. Circular Queue Array Implementation Formulas:\n   - Enqueue: $Rear = (Rear + 1) pmod N$\n   - Dequeue: $Front = (Front + 1) pmod N$\n   - Full Condition: $(Rear + 1) pmod N == Front$\n   - Empty Condition: $Front == -1$\n\n2. Circular Queue Python Class:\n   class CircularQueue:\n       def __init__(self, k: int):\n           self.size = k\n           self.queue = [None] * k\n           self.front = self.rear = -1\n\n       def enqueue(self, val: int) -> bool:\n           if (self.rear + 1) % self.size == self.front: return False # Full\n           if self.front == -1: self.front = 0\n           self.rear = (self.rear + 1) % self.size\n           self.queue[self.rear] = val\n           return True"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Data Structures and Algorithms in C",
        "author": "Mark Allen Weiss"
      }
    ],
    "practiceLinks": [
      {
        "title": "LeetCode Queue Category",
        "url": "https://leetcode.com/tag/queue/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State FIFO property of Queue and explain why Simple Array Queue wastes memory. (2 Marks)",
        "Write Full and Empty conditions for a Circular Queue of size $N$. (2 Marks)",
        "Differentiate between Deque (Double-Ended Queue) and Priority Queue. (2 Marks)"
      ],
      "sixMarks": [
        "Write complete Python/C class to implement Circular Queue ADT using Array with enqueue, dequeue, isEmpty, and isFull methods. (6 Marks)",
        "Explain Queue implementation using two Stacks. Derive time complexity for enqueue and dequeue operations. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Queue Variants & Applications. Detail Circular Queue modulo index wrap-around, Sliding Window Maximum using Deque ($O(N)$ time), OS Round-Robin CPU scheduling queues, and Producer-Consumer thread-safe queues. (10 Marks)"
      ]
    }
  },
  {
    "title": "Recursion",
    "slug": "dsa-recursion",
    "order": 8,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master Call Stack execution: Base condition, Head vs Tail Recursion, Tree Recursion, Backtracking introduction, Factorial, Fibonacci, and Tower of Hanoi.",
    "subTopics": [
      "Introduction to Recursion",
      "Recursive Functions",
      "Base Condition",
      "Recursive Problem Solving",
      "Tail Recursion",
      "Recursion vs Iteration",
      "Recursion Applications (Factorial, Fibonacci, Tower of Hanoi)"
    ],
    "prerequisiteTitles": [
      "Stacks"
    ],
    "learningObjectives": [
      "Identify Call Stack execution frame push/pop during recursive function calls.",
      "Understand Tail Recursion optimization by compilers.",
      "Solve Tower of Hanoi puzzle recursively ($T(n) = 2^n - 1$ moves)."
    ],
    "notes": [
      {
        "title": "Tail Recursion vs Non-Tail Recursion & Tower of Hanoi",
        "content": "RECURSION & TOWER OF HANOI\n\n1. Tower of Hanoi Recursive Code:\n   def tower_of_hanoi(n, source, auxiliary, target):\n       if n == 1:\n           print(f\"Move disk 1 from {source} to {target}\")\n           return\n       tower_of_hanoi(n - 1, source, target, auxiliary)\n       print(f\"Move disk {n} from {source} to {target}\")\n       tower_of_hanoi(n - 1, auxiliary, source, target)\n\n   # Total moves for n disks = 2^n - 1. Time Complexity: O(2^n).\n\n2. Tail Recursion Optimization:\n   A recursive function is Tail Recursive if the recursive call is the VERY LAST statement executed. Compilers can optimize tail recursion into a simple iterative loop to save stack frames."
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
        "title": "GeeksforGeeks Recursion Practice Problems",
        "url": "https://www.geeksforgeeks.org/recursion/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is the Base Condition in recursion and why is it mandatory? (2 Marks)",
        "Differentiate between Tail Recursion and Non-Tail Recursion. (2 Marks)",
        "Write recurrence relation for Tower of Hanoi for $n$ disks. (2 Marks)"
      ],
      "sixMarks": [
        "Write recursive code for Tower of Hanoi problem. Trace function calls and print steps for $n = 3$ disks. (6 Marks)",
        "Draw Call Stack memory frame diagrams for recursive Fibonacci calculation `fib(4)`. Show overlapping subproblems. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Recursive Problem Solving. Detail Activation Records on Call Stack, Recursion Tree analysis, Tail Call Optimization (TCO), converting recursion to iteration using explicit stack, and Divide & Conquer recurrences. (10 Marks)"
      ]
    }
  },
  {
    "title": "Searching Algorithms",
    "slug": "dsa-searching-algorithms",
    "order": 9,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Explore search strategies: Linear Search ($O(N)$), Binary Search ($O(log N)$), Binary Search variations (First/Last occurrence, Rotated Sorted Array), and Binary Search on Answer.",
    "subTopics": [
      "Linear Search",
      "Binary Search",
      "Binary Search Variations",
      "Searching in Rotated Arrays",
      "Finding First and Last Occurrence",
      "Search Space Reduction Techniques"
    ],
    "prerequisiteTitles": [
      "Arrays"
    ],
    "learningObjectives": [
      "Implement Iterative & Recursive Binary Search on sorted arrays ($O(log N)$ time, $O(1)$ space).",
      "Solve Search in Rotated Sorted Array.",
      "Apply Binary Search on Answer / Search Space reduction technique."
    ],
    "notes": [
      {
        "title": "Binary Search Code & Rotated Array Search",
        "content": "BINARY SEARCH & VARIATIONS\n\n1. Standard Binary Search Code (Iterative):\n   def binary_search(arr, target):\n       low, high = 0, len(arr) - 1\n       while low <= high:\n           mid = low + (high - low) // 2 # Avoid integer overflow!\n           if arr[mid] == target:\n               return mid\n           elif arr[mid] < target:\n               low = mid + 1\n           else:\n               high = mid - 1\n       return -1\n\n2. Search in Rotated Sorted Array:\n   In every step, at least one half (left or right) MUST be sorted. Identify which half is sorted and check if target lies within that half's range."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Algorithm Design",
        "author": "Kleinberg & Tardos"
      }
    ],
    "practiceLinks": [
      {
        "title": "LeetCode Binary Search Category",
        "url": "https://leetcode.com/tag/binary-search/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State prerequisite for Binary Search and compare its time complexity with Linear Search. (2 Marks)",
        "Why is `mid = low + (high - low) // 2` preferred over `(low + high) // 2`? (2 Marks)",
        "Explain how Binary Search can be applied to find the square root of a number. (2 Marks)"
      ],
      "sixMarks": [
        "Write Python/C code to Search in a Rotated Sorted Array in $O(log N)$ time. Trace for array `[4,5,6,7,0,1,2]` with `target = 0`. (6 Marks)",
        "Write code to find First and Last Occurrence of a target element in a sorted array containing duplicates. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Binary Search & Search Space Reduction. Detail Binary Search on Answer pattern (Book Allocation, Capacity to Ship Packages), lower_bound / upper_bound implementations, Ternary Search for unimodal functions, and logarithmic search proofs. (10 Marks)"
      ]
    }
  },
  {
    "title": "Sorting Algorithms",
    "slug": "dsa-sorting-algorithms",
    "order": 10,
    "estimatedHours": 6,
    "difficulty": "Intermediate",
    "description": "Master comparison & non-comparison sorting: Bubble, Selection, Insertion, Merge Sort ($O(N log N)$), Quick Sort (Lomuto/Hoare partition), Heap Sort, Counting Sort ($O(N+K)$), Radix Sort, and Stability.",
    "subTopics": [
      "Introduction to Sorting",
      "Bubble Sort",
      "Selection Sort",
      "Insertion Sort",
      "Merge Sort",
      "Quick Sort",
      "Heap Sort",
      "Counting Sort",
      "Radix Sort",
      "Sorting Complexity Comparison",
      "Stable and Unstable Sorting"
    ],
    "prerequisiteTitles": [
      "Arrays",
      "Recursion"
    ],
    "learningObjectives": [
      "Implement Merge Sort (Divide & Conquer) and Quick Sort (Partitioning).",
      "Compare Sorting Algorithms on Best/Average/Worst Time, Space Complexity, and Stability.",
      "Understand Non-Comparison linear sorting: Counting Sort and Radix Sort."
    ],
    "notes": [
      {
        "title": "Sorting Algorithms Complexity & Stability Summary Table",
        "content": "SORTING ALGORITHMS COMPARISON MATRIX\n\n-------------------------------------------------------------------------------------\nAlgorithm      | Best Time   | Average Time| Worst Time  | Space       | Stable?\n-------------------------------------------------------------------------------------\nBubble Sort    | O(N)        | O(N^2)      | O(N^2)      | O(1)        | Yes\nSelection Sort | O(N^2)      | O(N^2)      | O(N^2)      | O(1)        | No\nInsertion Sort | O(N)        | O(N^2)      | O(N^2)      | O(1)        | Yes\nMerge Sort     | O(N log N)  | O(N log N)  | O(N log N)  | O(N)        | Yes\nQuick Sort     | O(N log N)  | O(N log N)  | O(N^2)      | O(log N)    | No\nHeap Sort      | O(N log N)  | O(N log N)  | O(N log N)  | O(1)        | No\nCounting Sort  | O(N+K)      | O(N+K)      | O(N+K)      | O(N+K)      | Yes\n-------------------------------------------------------------------------------------\n\n1. Stable Sorting Definition:\n   A sorting algorithm is STABLE if it preserves the relative order of elements with equal key values."
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
        "title": "Visualgo Sorting Animation Tool",
        "url": "https://visualgo.net/en/sorting"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is a Stable Sorting Algorithm? Name two stable and two unstable sorting algorithms. (2 Marks)",
        "Why is Quick Sort's worst-case time complexity $O(N^2)$ and how can Randomized Quick Sort mitigate it? (2 Marks)",
        "When is Counting Sort preferred over Merge/Quick Sort? (2 Marks)"
      ],
      "sixMarks": [
        "Write complete Python/C code for Merge Sort. Trace the split and merge steps for array `[38, 27, 43, 3, 9, 82, 10]`. (6 Marks)",
        "Write Quick Sort code using Lomuto Partitioning scheme. Trace array partitioning around pivot. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Sorting Algorithms & Lower Bounds. Detail decision tree proof for $Omega(N log N)$ lower bound of comparison-based sorting, Heap Sort max-heapify mechanics, Radix Sort digit pass stability, and Timsort hybrid algorithm. (10 Marks)"
      ]
    }
  },
  {
    "title": "Trees",
    "slug": "dsa-trees",
    "order": 11,
    "estimatedHours": 6,
    "difficulty": "Intermediate",
    "description": "Master hierarchical data structures: Tree terminology (Root, Node, Height, Depth), Binary Trees, Recursive Traversals (Inorder, Preorder, Postorder), Level Order Traversal (BFS), Binary Search Trees (BST Insert, Search, Delete).",
    "subTopics": [
      "Introduction to Trees",
      "Tree Terminology (Root, Node, Edge, Height, Depth)",
      "Binary Trees",
      "Tree Traversals (Inorder, Preorder, Postorder, Level Order)",
      "Binary Search Trees (BST)",
      "BST Operations (Insertion, Deletion, Searching)",
      "Applications of Trees"
    ],
    "prerequisiteTitles": [
      "Linked Lists",
      "Recursion"
    ],
    "learningObjectives": [
      "Implement Binary Tree Traversals: Inorder (Left-Node-Right), Preorder (Node-Left-Right), Postorder (Left-Right-Node), Level Order (Queue BFS).",
      "Understand BST Property: Left Subtree Values < Node Value < Right Subtree Values. Inorder of BST is strictly sorted.",
      "Execute BST Node Deletion handling 3 cases: Leaf node, Node with 1 child, Node with 2 children (replace with Inorder Successor)."
    ],
    "notes": [
      {
        "title": "BST Property, Recursive Traversals & Node Deletion Code",
        "content": "BINARY TREES & BINARY SEARCH TREES (BST)\n\n1. Tree Traversal Rules:\n   - Inorder: Left -> Root -> Right (Produces sorted output for BST).\n   - Preorder: Root -> Left -> Right (Used for tree cloning/serialization).\n   - Postorder: Left -> Right -> Root (Used for tree deletion/bottom-up calculations).\n\n2. BST Node Deletion Cases (Python Code):\n   def delete_node(root: TreeNode, key: int) -> TreeNode:\n       if not root: return None\n       if key < root.val: root.left = delete_node(root.left, key)\n       elif key > root.val: root.right = delete_node(root.right, key)\n       else:\n           if not root.left: return root.right\n           if not root.right: return root.left\n           # Node with 2 children: Find Inorder Successor (min in right subtree)\n           curr = root.right\n           while curr.left: curr = curr.left\n           root.val = curr.val\n           root.right = delete_node(root.right, curr.val)\n       return root"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Data Structures and Algorithms in C++",
        "author": "Adam Drozdek"
      }
    ],
    "practiceLinks": [
      {
        "title": "LeetCode Tree Category",
        "url": "https://leetcode.com/tag/tree/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State the property of a Binary Search Tree (BST). What does an Inorder Traversal of a BST yield? (2 Marks)",
        "Differentiate between Height and Depth of a tree node. (2 Marks)",
        "Describe the 3 cases for deleting a node from a BST. (2 Marks)"
      ],
      "sixMarks": [
        "Given Preorder: `[1, 2, 4, 5, 3, 6]` and Inorder: `[4, 2, 5, 1, 3, 6]`. Reconstruct the unique Binary Tree and write Postorder traversal. (6 Marks)",
        "Write recursive Python/C code for Inorder, Preorder, and Postorder Binary Tree traversals. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Binary Search Trees. Detail BST search, insert, and delete operations ($O(H)$ time complexity), degenerate skewed BST problem ($O(N)$ height), Diameter of Binary Tree, and Lowest Common Ancestor (LCA) algorithms. (10 Marks)"
      ]
    }
  },
  {
    "title": "Advanced Trees",
    "slug": "dsa-advanced-trees",
    "order": 12,
    "estimatedHours": 6,
    "difficulty": "Advanced",
    "description": "Explore self-balancing & specialized trees: AVL Trees (LL, RR, LR, RL rotations, balance factor), Heaps (Min-Heap, Max-Heap, Heapify), Priority Queues, Trie (Prefix Tree), and Segment Trees.",
    "subTopics": [
      "AVL Trees",
      "Balanced Trees",
      "Heap Data Structure (Min Heap, Max Heap)",
      "Priority Queue Implementation",
      "Trie Data Structure",
      "Segment Tree Basics",
      "Applications of Advanced Trees"
    ],
    "prerequisiteTitles": [
      "Trees"
    ],
    "learningObjectives": [
      "Understand AVL Tree balance factor ($BF = h_{left} - h_{right} in {-1, 0, 1}$) and 4 Rotations (LL, RR, LR, RL).",
      "Construct Min/Max Heap array representation ($Parent(i) = lfloor (i-1)/2 \rfloor$, $Left(i) = 2i+1$, $Right(i) = 2i+2$) and build-heap in $O(N)$ time.",
      "Implement Trie Data Structure for fast $O(L)$ prefix lookup."
    ],
    "notes": [
      {
        "title": "AVL Tree Rotations & Min-Heap Array Operations",
        "content": "ADVANCED TREES: AVL & HEAP DATA STRUCTURES\n\n1. AVL Rotations (Balance Factor $BF = h_L - h_R$ out of range ${-1, 0, 1}$):\n   - LL Rotation: Single Right Rotation.\n   - RR Rotation: Single Left Rotation.\n   - LR Rotation: Double Rotation (Left rotate left child, then Right rotate node).\n   - RL Rotation: Double Rotation (Right rotate right child, then Left rotate node).\n\n2. Binary Min-Heap Array Index Rules (0-indexed):\n   - Parent of $i$: $lfloor (i - 1) / 2 \rfloor$\n   - Left Child of $i$: $2i + 1$\n   - Right Child of $i$: $2i + 2$\n   - Heapify Operation: Restores heap property in $O(log N)$ time.\n   - Build Heap from Unsorted Array: $O(N)$ time complexity."
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
        "title": "LeetCode Heap / Priority Queue Tag",
        "url": "https://leetcode.com/tag/heap-priority-queue/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define Balance Factor in AVL Trees and list the 4 rotation types. (2 Marks)",
        "State array parent and child index formulas for a 0-indexed Min-Heap. (2 Marks)",
        "What is a Trie (Prefix Tree) and why is it preferred for autocomplete search? (2 Marks)"
      ],
      "sixMarks": [
        "Insert keys `10, 20, 30, 40, 50, 25` into an initially empty AVL Tree step-by-step. Show balance factors and rotations performed. (6 Marks)",
        "Build a Max-Heap from array `[4, 10, 3, 5, 1]` using Heapify logic. Trace array at each step. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Advanced Tree Structures. Detail AVL Tree $O(log N)$ height proof, B-Trees / B+ Trees for database indexing, Trie insertion/search node structures, and Segment Trees for Range Minimum Queries (RMQ). (10 Marks)"
      ]
    }
  },
  {
    "title": "Hashing",
    "slug": "dsa-hashing",
    "order": 13,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master Hash Tables: Hash Functions (Division, Multiplication, Mid-Square), Collision Resolution (Chaining using Linked Lists vs Open Addressing: Linear Probing, Quadratic Probing, Double Hashing), Load Factor ($alpha = N/M$).",
    "subTopics": [
      "Introduction to Hashing",
      "Hash Functions",
      "Hash Tables",
      "Collision Handling Techniques (Chaining, Open Addressing)",
      "Applications of Hashing",
      "Hashing Problems"
    ],
    "prerequisiteTitles": [
      "Arrays",
      "Linked Lists"
    ],
    "learningObjectives": [
      "Calculate Hash Table indices using Division Method ($h(k) = k pmod m$).",
      "Compare Collision Resolution: Separate Chaining vs Open Addressing (Linear Probing $h(k, i) = (h'(k) + i) pmod m$, Double Hashing).",
      "Analyze Load Factor $alpha = N / M$ impact on search complexity."
    ],
    "notes": [
      {
        "title": "Collision Handling: Chaining vs Linear Probing & Double Hashing",
        "content": "HASH TABLES & COLLISION RESOLUTION\n\n1. Collision Handling Techniques:\n   - Separate Chaining: Each hash table slot contains a Linked List of colliding keys. Load factor $alpha$ can be $> 1$. Search time $O(1 + alpha)$.\n   - Open Addressing (Probing): All keys stored within table itself. Table capacity $M > N$.\n     * Linear Probing: Probe sequence $h(k, i) = (h'(k) + i) pmod m$. Causes Primary Clustering.\n     * Quadratic Probing: Probe sequence $h(k, i) = (h'(k) + c_1 i + c_2 i^2) pmod m$. Causes Secondary Clustering.\n     * Double Hashing: Probe sequence $h(k, i) = (h_1(k) + i cdot h_2(k)) pmod m$. Eliminates clustering."
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
        "title": "LeetCode Hash Table Category",
        "url": "https://leetcode.com/tag/hash-table/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define Load Factor ($alpha$) in Hash Tables and state its significance. (2 Marks)",
        "Compare Separate Chaining and Open Addressing collision handling methods. (2 Marks)",
        "What is Primary Clustering in Linear Probing and how does Double Hashing mitigate it? (2 Marks)"
      ],
      "sixMarks": [
        "Insert keys `12, 18, 13, 2, 3, 23, 5` into a Hash Table of size 10 using division hash function $h(k) = k pmod{10}$ with: (a) Linear Probing, (b) Separate Chaining. (6 Marks)",
        "Design a Hash Map class in Python/C with `put(key, val)`, `get(key)`, and `remove(key)` methods using Separate Chaining. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Hashing Engineering. Detail universal hash function families, cryptographic hashes vs data structure hashes, dynamic rehashing / resizing when $alpha > 0.75$, and 4-Sum / Subarray Sum Equals K hash map algorithms. (10 Marks)"
      ]
    }
  },
  {
    "title": "Graphs",
    "slug": "dsa-graphs",
    "order": 14,
    "estimatedHours": 6,
    "difficulty": "Intermediate",
    "description": "Master Graph representation & traversals: Directed/Undirected, Weighted, Adjacency Matrix vs Adjacency List, Breadth-First Search (BFS - Queue), Depth-First Search (DFS - Stack/Recursion).",
    "subTopics": [
      "Introduction to Graphs",
      "Graph Terminology (Vertices, Edges, Degree, Connected Components)",
      "Graph Representation (Adjacency Matrix, Adjacency List)",
      "Types of Graphs (Directed, Undirected, Weighted)",
      "Graph Traversal: Breadth First Search (BFS)",
      "Graph Traversal: Depth First Search (DFS)"
    ],
    "prerequisiteTitles": [
      "Queues",
      "Recursion"
    ],
    "learningObjectives": [
      "Represent Graphs using Adjacency Matrix ($O(V^2)$ space) and Adjacency List ($O(V + E)$ space).",
      "Implement Breadth-First Search (BFS) using Queue for shortest path in unweighted graphs.",
      "Implement Depth-First Search (DFS) using Recursion / Stack."
    ],
    "notes": [
      {
        "title": "Adjacency List & BFS / DFS Graph Traversal Code",
        "content": "GRAPH TRAVERSALS: BFS AND DFS\n\n1. BFS (Breadth-First Search - Queue Based):\n   from collections import deque\n   def bfs(graph, start_node, V):\n       visited = [False] * V\n       queue = deque([start_node])\n       visited[start_node] = True\n       while queue:\n           curr = queue.popleft()\n           print(curr, end=\" \")\n           for neighbor in graph[curr]:\n               if not visited[neighbor]:\n                   visited[neighbor] = True\n                   queue.append(neighbor)\n   # Time Complexity: O(V + E), Space: O(V)\n\n2. DFS (Depth-First Search - Recursive):\n   def dfs(node, graph, visited):\n       visited[node] = True\n       print(node, end=\" \")\n       for neighbor in graph[node]:\n           if not visited[neighbor]:\n               dfs(neighbor, graph, visited)"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Algorithm Design",
        "author": "Kleinberg & Tardos"
      }
    ],
    "practiceLinks": [
      {
        "title": "LeetCode Graph Tag",
        "url": "https://leetcode.com/tag/graph/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Compare Adjacency Matrix and Adjacency List graph representations on space and edge-check time. (2 Marks)",
        "State time and space complexity of BFS and DFS traversals for a graph $G(V, E)$. (2 Marks)",
        "Which traversal (BFS or DFS) guarantees finding the shortest path in an unweighted graph? (2 Marks)"
      ],
      "sixMarks": [
        "Write Python/C code for BFS and DFS graph traversals. Trace both traversals starting from node 0 on a given 5-vertex graph. (6 Marks)",
        "Explain Cycle Detection in an Undirected Graph using BFS and DFS traversals. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Graph Traversals & Applications. Detail Connected Components counting, Bipartite Graph checking (2-coloring BFS), Cycle Detection in Directed Graphs (3-color DFS algorithm: White, Gray, Black), and Maze pathfinding. (10 Marks)"
      ]
    }
  },
  {
    "title": "Advanced Graph Algorithms",
    "slug": "dsa-advanced-graph-algorithms",
    "order": 15,
    "estimatedHours": 6,
    "difficulty": "Advanced",
    "description": "Master complex graph algorithms: Topological Sort (Kahn's algorithm / DFS), Shortest Path (Dijkstra - Priority Queue, Bellman-Ford - Negative Edges, Floyd-Warshall $O(V^3)$), Minimum Spanning Tree (Prim's & Kruskal's with DSU).",
    "subTopics": [
      "Topological Sorting",
      "Cycle Detection in Directed Graphs",
      "Shortest Path Algorithms (Dijkstra, Bellman-Ford, Floyd-Warshall)",
      "Minimum Spanning Tree (Prim's Algorithm, Kruskal's Algorithm)",
      "Disjoint Set Union (DSU / Union-Find)",
      "Graph Applications"
    ],
    "prerequisiteTitles": [
      "Graphs",
      "Advanced Trees"
    ],
    "learningObjectives": [
      "Execute Dijkstra's Shortest Path Algorithm using Min-Heap Priority Queue ($O((V + E) log V)$).",
      "Implement Kruskal's MST Algorithm using Disjoint Set Union (DSU with Path Compression & Union by Rank).",
      "Implement Topological Sorting using Kahn's In-degree BFS algorithm."
    ],
    "notes": [
      {
        "title": "Dijkstra Priority Queue & Kruskal DSU MST Code",
        "content": "DIJKSTRA SHORTEST PATH & KRUSKAL MST WITH DSU\n\n1. Dijkstra Algorithm (Min-Heap Priority Queue):\n   import heapq\n   def dijkstra(graph, V, src):\n       dist = [float('inf')] * V\n       dist[src] = 0\n       pq = [(0, src)] # (distance, node)\n       while pq:\n           d, u = heapq.heappop(pq)\n           if d > dist[u]: continue\n           for v, weight in graph[u]:\n               if dist[u] + weight < dist[v]:\n                   dist[v] = dist[u] + weight\n                   heapq.heappush(pq, (dist[v], v))\n       return dist # Time: O((V + E) log V)\n\n2. Disjoint Set Union (DSU) with Path Compression:\n   class DSU:\n       def __init__(self, n): self.parent = list(range(n))\n       def find(self, i):\n           if self.parent[i] == i: return i\n           self.parent[i] = self.find(self.parent[i]) # Path Compression\n           return self.parent[i]"
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
        "title": "LeetCode Advanced Graph Tag",
        "url": "https://leetcode.com/tag/shortest-path/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Why does Dijkstra's algorithm fail on graphs with negative edge weights? Which algorithm handles negative edges? (2 Marks)",
        "Explain Path Compression and Union by Rank optimizations in Disjoint Set Union (DSU). (2 Marks)",
        "What is Topological Sorting? Can it be performed on a graph with cycles? (2 Marks)"
      ],
      "sixMarks": [
        "Apply Dijkstra's algorithm to find single-source shortest paths from vertex A in a weighted 5-vertex graph. Trace distance array steps. (6 Marks)",
        "Explain Kruskal's Minimum Spanning Tree algorithm using DSU. Trace MST edge additions for a 6-node weighted graph. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Advanced Graph Algorithms. Detail Bellman-Ford negative cycle detection ($V-1$ relaxations), Floyd-Warshall all-pairs shortest paths matrix dynamic programming, Prim's vs Kruskal's MST comparison, and Tarjan's Strongly Connected Components (SCC) algorithm. (10 Marks)"
      ]
    }
  },
  {
    "title": "Greedy Algorithms",
    "slug": "dsa-greedy-algorithms",
    "order": 16,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master Greedy Choice property: Fractional Knapsack, Activity Selection Problem, Job Sequencing with Deadlines, Huffman Coding data compression, and Minimum Coins problem.",
    "subTopics": [
      "Introduction to Greedy Approach",
      "Greedy Choice Property & Optimal Substructure",
      "Activity Selection Problem",
      "Fractional Knapsack Problem",
      "Job Sequencing Problem",
      "Huffman Coding",
      "Greedy Problem Solving"
    ],
    "prerequisiteTitles": [
      "Sorting Algorithms"
    ],
    "learningObjectives": [
      "Understand Greedy Paradigm: Making locally optimal choice at each step to reach global optimum.",
      "Solve Fractional Knapsack using Value-to-Weight ratio sorting ($O(N log N)$).",
      "Construct Huffman Coding Tree for optimal variable-length prefix data compression."
    ],
    "notes": [
      {
        "title": "Fractional Knapsack & Huffman Coding Tree",
        "content": "GREEDY ALGORITHMS & HUFFMAN CODING\n\n1. Fractional Knapsack Problem (Greedy Strategy):\n   Calculate value-to-weight ratio $R_i = v_i / w_i$ for each item. Sort items in descending order of ratio. Take full items as long as capacity permits; take fractional portion of next item when capacity runs out.\n\n2. Huffman Coding Algorithm:\n   1. Calculate frequency of each character.\n   2. Create a Min-Heap of single-node trees containing character frequencies.\n   3. Extract two lowest-frequency nodes, merge them into a parent node with sum frequency, re-insert parent into Min-Heap.\n   4. Repeat until 1 tree remains (Huffman Tree). Assign '0' to left branches and '1' to right branches."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Algorithm Design",
        "author": "Kleinberg & Tardos"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Greedy Algorithms Category",
        "url": "https://www.geeksforgeeks.org/greedy-algorithms/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain the two key properties required for a problem to be solved using Greedy approach. (2 Marks)",
        "Differentiate between 0/1 Knapsack (Dynamic Programming) and Fractional Knapsack (Greedy). (2 Marks)",
        "What is Prefix Property in Huffman Coding? (2 Marks)"
      ],
      "sixMarks": [
        "Given 5 items with weights `[10, 20, 30]` and values `[60, 100, 120]` and knapsack capacity $W = 50$. Solve Fractional Knapsack step-by-step. (6 Marks)",
        "Construct Huffman Tree for character frequencies: `A: 5, B: 9, C: 12, D: 13, E: 16, F: 45`. Calculate average code length. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Greedy Paradigm. Detail Activity Selection problem proof of greedy choice property, Job Sequencing with Deadlines time slot allocation, Gas Station circuit traversal, and Minimum Spanning Tree greedy choice. (10 Marks)"
      ]
    }
  },
  {
    "title": "Dynamic Programming",
    "slug": "dsa-dynamic-programming",
    "order": 17,
    "estimatedHours": 7,
    "difficulty": "Advanced",
    "description": "Master Dynamic Programming (DP): Overlapping Subproblems, Optimal Substructure, Memoization (Top-Down) vs Tabulation (Bottom-Up), 0/1 Knapsack, Longest Common Subsequence (LCS), Coin Change, and MCM.",
    "subTopics": [
      "Introduction to Dynamic Programming",
      "Overlapping Subproblems & Optimal Substructure",
      "Memoization (Top-Down) vs Tabulation (Bottom-Up)",
      "Fibonacci using DP",
      "0/1 Knapsack Problem",
      "Longest Common Subsequence (LCS)",
      "Coin Change Problem",
      "Matrix Chain Multiplication (MCM)",
      "Dynamic Programming Patterns"
    ],
    "prerequisiteTitles": [
      "Recursion"
    ],
    "learningObjectives": [
      "Identify DP problems: Overlapping Subproblems + Optimal Substructure.",
      "Convert Naive Recursive Exponential solutions into Top-Down Memoized ($O(N)$ space call stack) and Bottom-Up Tabular ($O(N)$ array) solutions.",
      "Master classic DP patterns: 0/1 Knapsack, Unbounded Knapsack (Coin Change), Subsequence (LCS), Interval DP (MCM)."
    ],
    "notes": [
      {
        "title": "0/1 Knapsack & Longest Common Subsequence (LCS) DP Code",
        "content": "DYNAMIC PROGRAMMING PATTERNS\n\n1. 0/1 Knapsack 2D Tabulation DP Code:\n   def knapsack(weights, values, W, n):\n       dp = [[0] * (W + 1) for _ in range(n + 1)]\n       for i in range(1, n + 1):\n           for w in range(1, W + 1):\n               if weights[i-1] <= w:\n                   dp[i][w] = max(values[i-1] + dp[i-1][w - weights[i-1]], dp[i-1][w])\n               else:\n                   dp[i][w] = dp[i-1][w]\n       return dp[n][W] # Time: O(N * W), Space: O(N * W)\n\n2. Longest Common Subsequence (LCS) Recurrence:\n   - If $S1[i-1] == S2[j-1] Rightarrow DP[i][j] = 1 + DP[i-1][j-1]$\n   - Else $Rightarrow DP[i][j] = max(DP[i-1][j], DP[i][j-1])$"
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
        "Differentiate between Top-Down Memoization and Bottom-Up Tabulation in Dynamic Programming. (2 Marks)",
        "State two necessary condition properties for a problem to be solved using Dynamic Programming. (2 Marks)",
        "State time and space complexity for 0/1 Knapsack DP solution. (2 Marks)"
      ],
      "sixMarks": [
        "Solve 0/1 Knapsack for weights `[1, 3, 4, 5]`, values `[1, 4, 5, 7]`, and capacity $W = 7$ using 2D Tabulation table. (6 Marks)",
        "Write Python code to find Longest Common Subsequence (LCS) of two strings `S1 = 'AGGTAB'` and `S2 = 'GXTXAYB'`. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Dynamic Programming Patterns. Detail 0/1 Knapsack variations (Subset Sum, Partition Equal Subset Sum), Unbounded Knapsack (Coin Change 1 & 2), Edit Distance Levenshtein DP table construction, Matrix Chain Multiplication (MCM) interval DP, and Space Optimization to 1D arrays. (10 Marks)"
      ]
    }
  },
  {
    "title": "Backtracking",
    "slug": "dsa-backtracking",
    "order": 18,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Master State-Space Search: Backtracking approach (Choice, Constraint, Goal), N-Queens Problem, Rat in a Maze, Sudoku Solver, Graph Coloring, and Subset Generation.",
    "subTopics": [
      "Introduction to Backtracking",
      "Backtracking Approach (Choice, Constraint, Goal)",
      "N Queens Problem",
      "Rat in a Maze",
      "Sudoku Solver",
      "Graph Coloring",
      "Backtracking Applications"
    ],
    "prerequisiteTitles": [
      "Recursion"
    ],
    "learningObjectives": [
      "Understand Backtracking paradigm: Systematically exploring state-space tree and pruning invalid branches (pruning condition).",
      "Solve N-Queens Problem placing $N$ non-attacking queens on an $N \times N$ chessboard.",
      "Implement Sudoku Solver using recursive backtracking."
    ],
    "notes": [
      {
        "title": "N-Queens Backtracking Code & Pruning Logic",
        "content": "BACKTRACKING PARADIGM & N-QUEENS\n\n1. N-Queens Python Code:\n   def solveNQueens(n: int):\n       res = []\n       board = [[\".\"] * n for _ in range(n)]\n       cols = set()\n       posDiag = set() # (r + c)\n       negDiag = set() # (r - c)\n\n       def backtrack(r):\n           if r == n:\n               res.append([\"\".join(row) for row in board])\n               return\n           for c in range(n):\n               if c in cols or (r + c) in posDiag or (r - c) in negDiag:\n                   continue # Prune Invalid Branch!\n               cols.add(c); posDiag.add(r + c); negDiag.add(r - c)\n               board[r][c] = \"Q\"\n\n               backtrack(r + 1) # Recurse\n\n               cols.remove(c); posDiag.remove(r + c); negDiag.remove(r - c) # Backtrack!\n               board[r][c] = \".\"\n\n       backtrack(0)\n       return res"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Algorithm Design",
        "author": "Kleinberg & Tardos"
      }
    ],
    "practiceLinks": [
      {
        "title": "LeetCode Backtracking Tag",
        "url": "https://leetcode.com/tag/backtracking/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain the Backtracking paradigm and how it differs from pure Brute Force search. (2 Marks)",
        "What are the 3 key components of a Backtracking template (Choice, Constraint, Goal)? (2 Marks)",
        "State time complexity of N-Queens problem solver. (2 Marks)"
      ],
      "sixMarks": [
        "Write complete Python/C code for N-Queens problem. Trace state-space search tree for $N = 4$. (6 Marks)",
        "Write Python code to solve Rat in a Maze problem allowing movements in 4 directions (U, D, L, R). (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on State-Space Backtracking. Detail Sudoku Solver algorithm with row/col/3x3 grid constraint validation, $m$-Coloring Graph problem, Subsets / Combinations / Permutations generation, and Branch and Bound optimization. (10 Marks)"
      ]
    }
  },
  {
    "title": "Advanced Problem Solving Techniques",
    "slug": "dsa-advanced-problem-solving-techniques",
    "order": 19,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Master competitive programming techniques: Bit Manipulation (`AND`, `OR`, `XOR`, left/right shift, set bit check, single number), Divide & Conquer, Prefix Sum / Difference Array, and Binary Search on Answer.",
    "subTopics": [
      "Bit Manipulation Basics",
      "Divide and Conquer",
      "Two Pointer Technique",
      "Sliding Window Technique",
      "Binary Search on Answer",
      "Prefix Sum & Difference Array",
      "Competitive Programming Patterns"
    ],
    "prerequisiteTitles": [
      "Searching Algorithms",
      "Greedy Algorithms"
    ],
    "learningObjectives": [
      "Master Bit Manipulation operations: Check $k$-th bit set (`n & (1 << k)`), Toggle bit, Count set bits (Brian Kernighan's algorithm `n & (n-1)`), Find Single Number using XOR.",
      "Apply Difference Array technique for $O(1)$ range update queries.",
      "Master Divide and Conquer paradigm (Merge Sort, Count Inversions, Maximum Subarray)."
    ],
    "notes": [
      {
        "title": "Bit Manipulation Tricks & Difference Array Technique",
        "content": "BIT MANIPULATION & ADVANCED PATTERNS\n\n1. Essential Bit Manipulation Tricks:\n   - Check if Number is Power of 2: `(n > 0) and (n & (n - 1) == 0)`\n   - Count Set Bits (Brian Kernighan's Algorithm):\n     count = 0\n     while n:\n         n = n & (n - 1) # Clears lowest set bit\n         count += 1\n   - Find Single Number in array where all other numbers appear twice:\n     res = 0\n     for num in nums: res ^= num # XOR property: x ^ x = 0, x ^ 0 = x\n\n2. Difference Array Range Update Technique:\n   To add value $V$ to range $[L, R]$ in $O(1)$ time:\n   $Diff[L] += V$, $Diff[R + 1] -= V$. Calculate prefix sum array at end."
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
        "title": "LeetCode Bit Manipulation Tag",
        "url": "https://leetcode.com/tag/bit-manipulation/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain Brian Kernighan's Bit Manipulation algorithm to count set bits in $O(\text{Set Bits})$ time. (2 Marks)",
        "How does XOR operator help find a non-repeating number in an array? (2 Marks)",
        "Explain Difference Array concept for performing multiple $O(1)$ range update queries. (2 Marks)"
      ],
      "sixMarks": [
        "Write Python/C code to Count Inversions in an array using modified Merge Sort in $O(N log N)$ time. (6 Marks)",
        "Explain Binary Search on Answer pattern with complete code for 'Capacity To Ship Packages Within D Days'. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Competitive Programming Problem-Solving Patterns. Detail Bitmask Dynamic Programming (Traveling Salesperson Problem), Fast Exponentiation ($O(log N)$ modular power), Sieve of Eratosthenes prime generation, and Disjoint Set Union (DSU) optimizations. (10 Marks)"
      ]
    }
  },
  {
    "title": "Data Structures and Algorithms Practice",
    "slug": "dsa-practice",
    "order": 20,
    "estimatedHours": 6,
    "difficulty": "Advanced",
    "description": "Systematic coding interview preparation: Problem-solving strategies, LeetCode Blind 75 / NeetCode 150 patterns, time/space optimization, and real-world system DSA applications.",
    "subTopics": [
      "Problem Solving Strategies",
      "Coding Interview Problems",
      "LeetCode Style Problems",
      "Competitive Programming Practice",
      "Time and Space Optimization",
      "Real-World Applications of DSA"
    ],
    "prerequisiteTitles": [
      "Advanced Graph Algorithms",
      "Dynamic Programming",
      "Backtracking"
    ],
    "learningObjectives": [
      "Master top coding interview patterns (Blind 75 / NeetCode 150).",
      "Optimize space complexity from $O(N^2) \rightarrow O(N) \rightarrow O(1)$ using rolling arrays or two pointers.",
      "Connect DSA algorithms to real-world software systems (LRU Cache, Git Directed Acyclic Graphs, Database B+ Trees, Routers Shortest Path)."
    ],
    "notes": [
      {
        "title": "Top 14 Coding Interview Problem Patterns Map",
        "content": "CODING INTERVIEW PATTERNS MAP\n\n1. Top 14 LeetCode Problem Solving Patterns:\n   1. Two Pointers: Sorted arrays, pairs, palindrome verification.\n   2. Sliding Window: Contiguous subarray/substring max/min/length problems.\n   3. Fast & Slow Pointers: Linked list cycle detection, happy number.\n   4. Merge Intervals: Overlapping interval scheduling, calendar meetings.\n   5. Cyclic Sort: Numbers in range 1 to N array problems.\n   6. In-place Reversal of Linked List: Reversing sub-segments of list.\n   7. Tree BFS / Level Order: Tree level-by-level processing, shortest path.\n   8. Tree DFS: Tree path sum, depth calculations, LCA.\n   9. Two Heaps: Median of stream, priority tracking.\n   10. Subsets / Backtracking: Combinations, permutations, power set.\n   11. Modified Binary Search: Rotated array, search space reduction.\n   12. Top K Elements: Min/Max heap for k largest/smallest items.\n   13. K-way Merge: Merging k sorted lists/arrays.\n   14. 0/1 Knapsack / DP Patterns: Subarrays, grid paths, string matching."
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
        "title": "NeetCode 150 Practice Roadmap",
        "url": "https://neetcode.io/practice"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Map real-world software systems to their core DSA data structures (Git, Database Index, Web Browser History, Router). (2 Marks)",
        "How do you optimize 2D Dynamic Programming table to 1D array space complexity? (2 Marks)",
        "State the 3-step problem-solving strategy during a technical coding interview. (2 Marks)"
      ],
      "sixMarks": [
        "Design and implement LRU (Least Recently Used) Cache class with $O(1)$ `get(key)` and `put(key, value)` operations using Doubly Linked List and Hash Map. (6 Marks)",
        "Design a MedianFinder class to find median from a continuous data stream in $O(log N)$ insertion time using Min-Heap and Max-Heap. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Coding Interview Mastery & System Applications. Detail 14 LeetCode problem patterns, space-time trade-off strategies, mock interview technical communication, edge case handling (Null, Empty, Duplicates, Negative numbers, Integer Overflow), and clean code refactoring. (10 Marks)"
      ]
    }
  }
];
