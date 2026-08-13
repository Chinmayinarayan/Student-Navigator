/**
 * seedPlacementTests.js
 *
 * Seeds placement mock tests with questions into the database.
 * - Looks up existing Subject IDs by fuzzy name matching
 * - Creates Question documents for each test
 * - Creates Test documents referencing those questions
 *
 * Run: node seed/seedPlacementTests.js
 */

require("dotenv").config();
const mongoose = require("mongoose");
const Subject = require("../models/Subject");
const Topic = require("../models/Topic");
const Question = require("../models/Question");
const Test = require("../models/Test");

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

/** Find a subject whose name includes the keyword (case-insensitive) */
async function findSubject(keywords) {
  for (const kw of keywords) {
    const doc = await Subject.findOne({
      name: { $regex: kw, $options: "i" },
      isPublished: true,
    });
    if (doc) return doc;
  }
  return null;
}

/** Find the first topic that belongs to a subject */
async function findAnyTopic(subjectId) {
  return Topic.findOne({ subject: subjectId, isPublished: true });
}

/** Create questions and return their IDs */
async function createQuestions(questionsData, subjectId, topicId) {
  const docs = await Question.insertMany(
    questionsData.map((q) => ({
      subject: subjectId,
      topic: topicId,
      type: "mcq",
      questionType: q.questionType || "theoretical",
      difficulty: q.difficulty || "medium",
      question: q.question,
      options: q.options,
      correctAnswer: q.correctAnswer,
      explanation: q.explanation || "",
      isActive: true,
    }))
  );
  return docs.map((d) => d._id);
}

// ─────────────────────────────────────────────────────────────────────────────
// Question Banks
// ─────────────────────────────────────────────────────────────────────────────

const DSA_BASIC_QUESTIONS = [
  {
    question: "What is the time complexity of accessing an element in an array by index?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
    correctAnswer: "O(1)",
    difficulty: "easy",
    explanation: "Array access by index is a direct memory address calculation — constant time.",
  },
  {
    question: "Which data structure uses LIFO (Last In, First Out) order?",
    options: ["Queue", "Stack", "Linked List", "Tree"],
    correctAnswer: "Stack",
    difficulty: "easy",
    explanation: "A stack pushes and pops from the same end, following LIFO.",
  },
  {
    question: "What is the time complexity of Binary Search?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    correctAnswer: "O(log n)",
    difficulty: "easy",
    explanation: "Binary search halves the search space each iteration.",
  },
  {
    question: "Which of the following is NOT a linear data structure?",
    options: ["Array", "Linked List", "Stack", "Tree"],
    correctAnswer: "Tree",
    difficulty: "easy",
    explanation: "Trees are hierarchical (non-linear) structures.",
  },
  {
    question: "What is the worst-case time complexity of Bubble Sort?",
    options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
    correctAnswer: "O(n²)",
    difficulty: "easy",
    explanation: "Bubble sort compares adjacent elements; worst case is O(n²).",
  },
  {
    question: "In a Queue, insertion happens at which end?",
    options: ["Front", "Rear", "Middle", "Both ends"],
    correctAnswer: "Rear",
    difficulty: "easy",
    explanation: "Queues follow FIFO: enqueue at rear, dequeue at front.",
  },
  {
    question: "What is the space complexity of an algorithm that uses a single variable?",
    options: ["O(n)", "O(1)", "O(log n)", "O(n²)"],
    correctAnswer: "O(1)",
    difficulty: "easy",
    explanation: "Using a constant number of variables means O(1) space.",
  },
  {
    question: "Which sorting algorithm has the best average-case performance?",
    options: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Selection Sort"],
    correctAnswer: "Merge Sort",
    difficulty: "medium",
    explanation: "Merge Sort runs in O(n log n) average and worst case.",
  },
  {
    question: "What does a hash table use to map keys to values?",
    options: ["Sorting", "Hashing function", "Binary search", "Pointer arithmetic"],
    correctAnswer: "Hashing function",
    difficulty: "easy",
    explanation: "Hash tables use a hash function to compute the index.",
  },
  {
    question: "How many children can each node have in a binary tree?",
    options: ["1", "2", "3", "Unlimited"],
    correctAnswer: "2",
    difficulty: "easy",
    explanation: "Binary trees allow at most 2 children: left and right.",
  },
  {
    question: "Which traversal visits root, left, right in that order?",
    options: ["Inorder", "Postorder", "Preorder", "Level-order"],
    correctAnswer: "Preorder",
    difficulty: "easy",
    explanation: "Preorder: Root → Left → Right.",
  },
  {
    question: "What is the time complexity of inserting into a linked list at the head?",
    options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
    correctAnswer: "O(1)",
    difficulty: "easy",
    explanation: "Head insertion only requires updating the head pointer.",
  },
  {
    question: "Which algorithm is used to find the shortest path in a weighted graph?",
    options: ["DFS", "BFS", "Dijkstra's", "Bubble Sort"],
    correctAnswer: "Dijkstra's",
    difficulty: "medium",
    explanation: "Dijkstra's algorithm finds shortest paths in graphs with non-negative weights.",
  },
  {
    question: "What is a 'collision' in a hash table?",
    options: [
      "Two values with the same hash",
      "Two values with the same key",
      "Array overflow",
      "Memory leak",
    ],
    correctAnswer: "Two values with the same hash",
    difficulty: "medium",
    explanation: "Collision occurs when two different keys produce the same hash index.",
  },
  {
    question: "What is the height of a balanced binary tree with n nodes?",
    options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
    correctAnswer: "O(log n)",
    difficulty: "medium",
    explanation: "A balanced tree has height proportional to log₂n.",
  },
  {
    question: "Which operation is NOT O(1) in a doubly linked list?",
    options: ["Insert at head", "Delete at tail", "Search by value", "Insert at tail"],
    correctAnswer: "Search by value",
    difficulty: "medium",
    explanation: "Search requires traversal — O(n).",
  },
  {
    question: "What is the main advantage of a linked list over an array?",
    options: [
      "Faster access by index",
      "Dynamic size",
      "Better cache performance",
      "Simpler implementation",
    ],
    correctAnswer: "Dynamic size",
    difficulty: "easy",
    explanation: "Linked lists grow/shrink at runtime; arrays have fixed size.",
  },
  {
    question: "In Big-O notation, O(2n) simplifies to?",
    options: ["O(2n)", "O(n)", "O(n²)", "O(log n)"],
    correctAnswer: "O(n)",
    difficulty: "easy",
    explanation: "Constants are dropped in Big-O; O(2n) = O(n).",
  },
  {
    question: "What data structure is used internally by recursion?",
    options: ["Queue", "Stack", "Heap", "Array"],
    correctAnswer: "Stack",
    difficulty: "easy",
    explanation: "The call stack stores function frames during recursion.",
  },
  {
    question: "Which graph traversal uses a queue?",
    options: ["DFS", "BFS", "Dijkstra's", "A*"],
    correctAnswer: "BFS",
    difficulty: "easy",
    explanation: "BFS explores level by level using a queue.",
  },
];

const DSA_INTERMEDIATE_QUESTIONS = [
  {
    question: "What is the time complexity of Quick Sort in the average case?",
    options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
    correctAnswer: "O(n log n)",
    difficulty: "medium",
    explanation: "Average-case Quick Sort divides roughly in half each time.",
  },
  {
    question: "A min-heap guarantees that the root is the:",
    options: ["Maximum element", "Minimum element", "Median element", "Last inserted element"],
    correctAnswer: "Minimum element",
    difficulty: "medium",
    explanation: "In a min-heap, parent ≤ children, so root is always minimum.",
  },
  {
    question: "What is the time complexity of inserting into a binary heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
    difficulty: "medium",
    explanation: "Heap insert bubbles up — at most O(log n) swaps.",
  },
  {
    question: "Which data structure supports O(log n) insert, delete, and search?",
    options: ["Array", "Linked List", "Balanced BST", "Hash Table"],
    correctAnswer: "Balanced BST",
    difficulty: "medium",
    explanation: "Balanced BSTs (e.g., AVL, Red-Black) guarantee O(log n) for all operations.",
  },
  {
    question: "What is a topological sort applicable to?",
    options: [
      "Undirected graphs",
      "Directed Acyclic Graphs (DAG)",
      "Weighted graphs",
      "Complete graphs",
    ],
    correctAnswer: "Directed Acyclic Graphs (DAG)",
    difficulty: "medium",
    explanation: "Topological sort orders vertices in a DAG by dependency.",
  },
  {
    question: "Kruskal's algorithm is used to find:",
    options: [
      "Shortest path",
      "Minimum Spanning Tree",
      "Maximum flow",
      "Strongly connected components",
    ],
    correctAnswer: "Minimum Spanning Tree",
    difficulty: "medium",
    explanation: "Kruskal's greedily picks minimum-weight edges to build an MST.",
  },
  {
    question: "Which technique does dynamic programming primarily use?",
    options: [
      "Divide and conquer without memoization",
      "Greedy selection",
      "Overlapping subproblems and optimal substructure",
      "Backtracking",
    ],
    correctAnswer: "Overlapping subproblems and optimal substructure",
    difficulty: "medium",
    explanation: "DP stores solutions to subproblems to avoid recomputation.",
  },
  {
    question: "What is the Fibonacci problem's time complexity using memoization?",
    options: ["O(2ⁿ)", "O(n)", "O(n²)", "O(log n)"],
    correctAnswer: "O(n)",
    difficulty: "medium",
    explanation: "Memoization computes each Fibonacci number exactly once.",
  },
  {
    question: "In an AVL tree, the balance factor of any node must be:",
    options: ["-2, -1, 0, 1, or 2", "-1, 0, or 1", "0 only", "Any integer"],
    correctAnswer: "-1, 0, or 1",
    difficulty: "hard",
    explanation: "AVL trees maintain |balance factor| ≤ 1 for self-balancing.",
  },
  {
    question: "Which graph algorithm detects negative cycles?",
    options: ["Dijkstra's", "BFS", "Bellman-Ford", "Prim's"],
    correctAnswer: "Bellman-Ford",
    difficulty: "hard",
    explanation: "Bellman-Ford can detect negative weight cycles by checking after V-1 iterations.",
  },
  {
    question: "Time complexity of Floyd-Warshall algorithm:",
    options: ["O(V²)", "O(V³)", "O(E log V)", "O(V + E)"],
    correctAnswer: "O(V³)",
    difficulty: "hard",
    explanation: "Floyd-Warshall uses three nested loops over V vertices.",
  },
  {
    question: "A trie data structure is optimized for:",
    options: [
      "Numeric range queries",
      "String prefix searches",
      "Graph traversal",
      "Sorting integers",
    ],
    correctAnswer: "String prefix searches",
    difficulty: "medium",
    explanation: "Tries store characters at each node, enabling fast prefix lookups.",
  },
  {
    question: "What is the worst-case time complexity of Quick Sort?",
    options: ["O(n log n)", "O(n)", "O(n²)", "O(log n)"],
    correctAnswer: "O(n²)",
    difficulty: "medium",
    explanation: "Worst case occurs when pivot is always smallest/largest (e.g., sorted array).",
  },
  {
    question: "Which technique is used in Merge Sort?",
    options: ["Greedy", "Dynamic Programming", "Divide and Conquer", "Backtracking"],
    correctAnswer: "Divide and Conquer",
    difficulty: "medium",
    explanation: "Merge Sort splits array in half, recursively sorts, then merges.",
  },
  {
    question: "What is the space complexity of Merge Sort?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    correctAnswer: "O(n)",
    difficulty: "medium",
    explanation: "Merge Sort needs extra space proportional to the array size for merging.",
  },
  {
    question: "Strongly Connected Components (SCC) can be found using:",
    options: ["Prim's algorithm", "Kosaraju's algorithm", "Kruskal's algorithm", "Dijkstra's algorithm"],
    correctAnswer: "Kosaraju's algorithm",
    difficulty: "hard",
    explanation: "Kosaraju's uses two DFS passes to identify SCCs.",
  },
  {
    question: "Which of these problems is solvable in polynomial time?",
    options: ["Travelling Salesman Problem", "Knapsack Problem", "Shortest path (Dijkstra's)", "Graph coloring"],
    correctAnswer: "Shortest path (Dijkstra's)",
    difficulty: "hard",
    explanation: "Dijkstra's runs in O((V+E) log V) — polynomial. TSP and others are NP-hard.",
  },
  {
    question: "What is the purpose of a sentinel node in a linked list?",
    options: [
      "Store the largest element",
      "Simplify boundary conditions",
      "Act as the head pointer",
      "Mark deleted nodes",
    ],
    correctAnswer: "Simplify boundary conditions",
    difficulty: "medium",
    explanation: "Sentinel nodes remove special-case handling for empty or single-node lists.",
  },
  {
    question: "Time complexity of Heap Sort:",
    options: ["O(n)", "O(n²)", "O(n log n)", "O(log n)"],
    correctAnswer: "O(n log n)",
    difficulty: "medium",
    explanation: "Heap Sort builds a heap in O(n) and extracts n times in O(log n) each.",
  },
  {
    question: "Which property must a graph satisfy for a topological sort to exist?",
    options: [
      "Must be connected",
      "Must be directed and acyclic",
      "Must be undirected",
      "Must have even-degree vertices",
    ],
    correctAnswer: "Must be directed and acyclic",
    difficulty: "medium",
    explanation: "Topological sort is only defined for Directed Acyclic Graphs (DAGs).",
  },
  {
    question: "What is the output of inorder traversal of a Binary Search Tree?",
    options: [
      "Sorted descending order",
      "Sorted ascending order",
      "Random order",
      "Level-by-level order",
    ],
    correctAnswer: "Sorted ascending order",
    difficulty: "medium",
    explanation: "Inorder (Left → Root → Right) on a BST yields ascending sorted output.",
  },
  {
    question: "Union-Find (Disjoint Set Union) is commonly used for:",
    options: [
      "Shortest path finding",
      "Detecting cycles in undirected graphs",
      "Matrix multiplication",
      "Binary search",
    ],
    correctAnswer: "Detecting cycles in undirected graphs",
    difficulty: "medium",
    explanation: "DSU tracks components; if two nodes have the same root, adding an edge creates a cycle.",
  },
  {
    question: "Space complexity of DFS on a graph with V vertices and E edges:",
    options: ["O(V + E)", "O(V)", "O(E)", "O(1)"],
    correctAnswer: "O(V)",
    difficulty: "medium",
    explanation: "DFS uses a stack (or recursion stack) of depth at most V.",
  },
  {
    question: "What is a B-tree primarily used for?",
    options: [
      "In-memory sorting",
      "Database indexing",
      "Graph traversal",
      "String matching",
    ],
    correctAnswer: "Database indexing",
    difficulty: "hard",
    explanation: "B-trees are balanced multi-way trees optimized for disk-based storage and indexing.",
  },
  {
    question: "Which of these is a stable sorting algorithm?",
    options: ["Heap Sort", "Quick Sort", "Merge Sort", "Selection Sort"],
    correctAnswer: "Merge Sort",
    difficulty: "medium",
    explanation: "Merge Sort preserves relative order of equal elements — it is stable.",
  },
];

const DBMS_QUESTIONS = [
  {
    question: "What does ACID stand for in database transactions?",
    options: [
      "Atomicity, Consistency, Isolation, Durability",
      "Access, Control, Integrity, Data",
      "Atomicity, Concurrency, Isolation, Distribution",
      "Application, Cache, Index, Data",
    ],
    correctAnswer: "Atomicity, Consistency, Isolation, Durability",
    difficulty: "easy",
    explanation: "ACID properties ensure reliable database transactions.",
  },
  {
    question: "Which SQL keyword is used to remove duplicate rows?",
    options: ["UNIQUE", "DISTINCT", "FILTER", "REMOVE"],
    correctAnswer: "DISTINCT",
    difficulty: "easy",
    explanation: "SELECT DISTINCT returns unique rows only.",
  },
  {
    question: "A primary key:",
    options: [
      "Can contain NULL values",
      "Must be unique and not NULL",
      "Can have duplicates",
      "Is optional",
    ],
    correctAnswer: "Must be unique and not NULL",
    difficulty: "easy",
    explanation: "Primary keys uniquely identify each row and cannot be null.",
  },
  {
    question: "What is a foreign key?",
    options: [
      "A key imported from another database",
      "A reference to the primary key of another table",
      "A composite key with multiple columns",
      "An encrypted primary key",
    ],
    correctAnswer: "A reference to the primary key of another table",
    difficulty: "easy",
    explanation: "Foreign keys enforce referential integrity between related tables.",
  },
  {
    question: "Which normal form eliminates partial dependencies?",
    options: ["1NF", "2NF", "3NF", "BCNF"],
    correctAnswer: "2NF",
    difficulty: "medium",
    explanation: "2NF removes partial dependencies — non-key attributes must depend on the full primary key.",
  },
  {
    question: "What does a JOIN operation do in SQL?",
    options: [
      "Combines rows from multiple tables based on a related column",
      "Sorts rows alphabetically",
      "Removes duplicate values",
      "Filters null rows",
    ],
    correctAnswer: "Combines rows from multiple tables based on a related column",
    difficulty: "easy",
    explanation: "JOIN combines columns from two or more tables using a matching condition.",
  },
  {
    question: "Which type of JOIN returns all rows from both tables, even if there's no match?",
    options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
    correctAnswer: "FULL OUTER JOIN",
    difficulty: "medium",
    explanation: "FULL OUTER JOIN returns all rows from both tables, with NULLs for non-matching rows.",
  },
  {
    question: "What is a view in SQL?",
    options: [
      "A physical copy of a table",
      "A virtual table based on a SELECT query",
      "An index on a column",
      "A stored procedure",
    ],
    correctAnswer: "A virtual table based on a SELECT query",
    difficulty: "medium",
    explanation: "Views are virtual tables — they don't store data themselves.",
  },
  {
    question: "Which SQL clause is used to filter groups?",
    options: ["WHERE", "HAVING", "GROUP BY", "ORDER BY"],
    correctAnswer: "HAVING",
    difficulty: "medium",
    explanation: "HAVING filters aggregated results from GROUP BY, similar to WHERE for rows.",
  },
  {
    question: "What does normalization aim to reduce?",
    options: ["Query performance", "Data redundancy", "Index size", "Table count"],
    correctAnswer: "Data redundancy",
    difficulty: "easy",
    explanation: "Normalization organizes data to minimize duplication and anomalies.",
  },
  {
    question: "Which command is used to permanently save a transaction?",
    options: ["ROLLBACK", "SAVEPOINT", "COMMIT", "END"],
    correctAnswer: "COMMIT",
    difficulty: "easy",
    explanation: "COMMIT makes all changes in a transaction permanent.",
  },
  {
    question: "What is a deadlock in a database?",
    options: [
      "A query that never terminates",
      "Two transactions waiting for each other's locks",
      "An index corruption",
      "A failed backup",
    ],
    correctAnswer: "Two transactions waiting for each other's locks",
    difficulty: "medium",
    explanation: "Deadlock occurs when transactions mutually block each other.",
  },
  {
    question: "Which index type is best for range queries?",
    options: ["Hash Index", "B-Tree Index", "Bitmap Index", "Full-Text Index"],
    correctAnswer: "B-Tree Index",
    difficulty: "medium",
    explanation: "B-Tree indexes support range queries efficiently with ordered traversal.",
  },
  {
    question: "What is referential integrity?",
    options: [
      "All values are unique",
      "Foreign key values must match a primary key in the referenced table",
      "All columns are indexed",
      "Transactions are isolated",
    ],
    correctAnswer: "Foreign key values must match a primary key in the referenced table",
    difficulty: "medium",
    explanation: "Referential integrity ensures foreign keys point to valid existing records.",
  },
  {
    question: "What is the purpose of the GROUP BY clause?",
    options: [
      "Sort results",
      "Group rows with the same value for aggregate functions",
      "Join multiple tables",
      "Filter individual rows",
    ],
    correctAnswer: "Group rows with the same value for aggregate functions",
    difficulty: "easy",
    explanation: "GROUP BY groups rows so aggregates (COUNT, SUM, etc.) operate per group.",
  },
  {
    question: "Which SQL aggregate function counts non-NULL values?",
    options: ["SUM()", "COUNT(*)", "COUNT(column)", "AVG()"],
    correctAnswer: "COUNT(column)",
    difficulty: "medium",
    explanation: "COUNT(column) counts non-NULL values; COUNT(*) counts all rows including NULLs.",
  },
  {
    question: "What is a stored procedure?",
    options: [
      "A precompiled set of SQL statements stored in the database",
      "A backup of the database",
      "A type of index",
      "A schema snapshot",
    ],
    correctAnswer: "A precompiled set of SQL statements stored in the database",
    difficulty: "medium",
    explanation: "Stored procedures are named, precompiled SQL routines executed on the server.",
  },
  {
    question: "In the relational model, a tuple is equivalent to a:",
    options: ["Column", "Row", "Table", "Database"],
    correctAnswer: "Row",
    difficulty: "easy",
    explanation: "In relational terminology, a tuple = a row in a table.",
  },
  {
    question: "Which of these is a DDL command?",
    options: ["SELECT", "INSERT", "CREATE", "UPDATE"],
    correctAnswer: "CREATE",
    difficulty: "easy",
    explanation: "DDL (Data Definition Language) commands define schema: CREATE, ALTER, DROP.",
  },
  {
    question: "What is a trigger in a database?",
    options: [
      "A scheduled backup job",
      "An automatic action executed in response to table events",
      "An index rebuild command",
      "A constraint violation alert",
    ],
    correctAnswer: "An automatic action executed in response to table events",
    difficulty: "medium",
    explanation: "Triggers fire automatically on INSERT, UPDATE, or DELETE events.",
  },
];

const OS_QUESTIONS = [
  {
    question: "What is a process in an operating system?",
    options: [
      "A program stored on disk",
      "A program in execution",
      "A file system object",
      "A hardware interrupt",
    ],
    correctAnswer: "A program in execution",
    difficulty: "easy",
    explanation: "A process is an active instance of a program with its own memory space.",
  },
  {
    question: "Which scheduling algorithm gives the CPU to the process with the shortest burst time?",
    options: ["FCFS", "Round Robin", "SJF", "Priority Scheduling"],
    correctAnswer: "SJF",
    difficulty: "easy",
    explanation: "Shortest Job First (SJF) selects the process with the smallest CPU burst.",
  },
  {
    question: "What is a race condition?",
    options: [
      "CPU overheating during high load",
      "Two processes competing for the same resource causing unpredictable results",
      "A deadlock between threads",
      "A memory overflow error",
    ],
    correctAnswer: "Two processes competing for the same resource causing unpredictable results",
    difficulty: "medium",
    explanation: "Race conditions occur when multiple processes access shared data concurrently.",
  },
  {
    question: "What does a semaphore do?",
    options: [
      "Schedules CPU processes",
      "Controls access to shared resources using a counter",
      "Allocates memory pages",
      "Manages file permissions",
    ],
    correctAnswer: "Controls access to shared resources using a counter",
    difficulty: "medium",
    explanation: "Semaphores use wait (P) and signal (V) operations to manage concurrent access.",
  },
  {
    question: "What is virtual memory?",
    options: [
      "RAM installed on the GPU",
      "A technique that allows processes to use more memory than physically available",
      "A secondary cache level",
      "Encrypted main memory",
    ],
    correctAnswer: "A technique that allows processes to use more memory than physically available",
    difficulty: "medium",
    explanation: "Virtual memory maps virtual addresses to physical memory using paging/swapping.",
  },
  {
    question: "Which page replacement algorithm is optimal (but not practical)?",
    options: ["FIFO", "LRU", "Optimal (Belady's)", "Clock"],
    correctAnswer: "Optimal (Belady's)",
    difficulty: "medium",
    explanation: "Belady's optimal algorithm replaces the page not used for the longest time — requires future knowledge.",
  },
  {
    question: "What is the difference between a process and a thread?",
    options: [
      "Threads have their own memory space; processes share memory",
      "Processes are lightweight; threads are heavyweight",
      "Threads within a process share memory; processes have isolated memory",
      "There is no difference",
    ],
    correctAnswer: "Threads within a process share memory; processes have isolated memory",
    difficulty: "medium",
    explanation: "Threads share the process's address space; each process has its own address space.",
  },
  {
    question: "Which condition is NOT required for a deadlock?",
    options: [
      "Mutual Exclusion",
      "Hold and Wait",
      "Preemption",
      "Circular Wait",
    ],
    correctAnswer: "Preemption",
    difficulty: "medium",
    explanation: "Deadlock requires No Preemption (resources can't be forcibly taken). Preemption prevents deadlock.",
  },
  {
    question: "What is context switching?",
    options: [
      "Switching between user and kernel mode",
      "Saving and restoring the state of a process when switching CPU allocation",
      "Switching between virtual and physical memory",
      "Changing the scheduling algorithm",
    ],
    correctAnswer: "Saving and restoring the state of a process when switching CPU allocation",
    difficulty: "medium",
    explanation: "Context switch saves the current process state and loads the next process's state.",
  },
  {
    question: "What is thrashing in an OS?",
    options: [
      "Disk fragmentation",
      "Excessive paging activity that degrades performance",
      "CPU overclocking",
      "Memory corruption",
    ],
    correctAnswer: "Excessive paging activity that degrades performance",
    difficulty: "medium",
    explanation: "Thrashing occurs when processes spend more time paging than executing.",
  },
  {
    question: "Which system call is used to create a new process in Unix?",
    options: ["exec()", "fork()", "spawn()", "create()"],
    correctAnswer: "fork()",
    difficulty: "easy",
    explanation: "fork() creates a child process as a copy of the parent process.",
  },
  {
    question: "What is the role of the OS kernel?",
    options: [
      "Provide the user interface",
      "Manage hardware resources and provide services to processes",
      "Run user applications",
      "Store files on disk",
    ],
    correctAnswer: "Manage hardware resources and provide services to processes",
    difficulty: "easy",
    explanation: "The kernel is the core of the OS, managing CPU, memory, I/O, and process scheduling.",
  },
  {
    question: "What is paging in memory management?",
    options: [
      "Writing to a page file",
      "Dividing memory into fixed-size pages for mapping virtual to physical addresses",
      "Swapping entire processes out",
      "Compressing memory blocks",
    ],
    correctAnswer: "Dividing memory into fixed-size pages for mapping virtual to physical addresses",
    difficulty: "medium",
    explanation: "Paging divides both virtual and physical memory into equal-sized pages and frames.",
  },
  {
    question: "Which scheduling algorithm can cause starvation?",
    options: ["Round Robin", "FCFS", "Priority Scheduling", "Multilevel Queue"],
    correctAnswer: "Priority Scheduling",
    difficulty: "medium",
    explanation: "Low-priority processes may never get CPU time if higher-priority processes keep arriving.",
  },
  {
    question: "What is a zombie process?",
    options: [
      "A process using 100% CPU",
      "A terminated process whose entry still exists in the process table",
      "A process in infinite sleep",
      "A process without a parent",
    ],
    correctAnswer: "A terminated process whose entry still exists in the process table",
    difficulty: "medium",
    explanation: "Zombie processes have finished but their parent hasn't called wait() to clean up.",
  },
  {
    question: "What does the Banker's Algorithm solve?",
    options: [
      "Memory fragmentation",
      "CPU scheduling",
      "Deadlock avoidance",
      "File allocation",
    ],
    correctAnswer: "Deadlock avoidance",
    difficulty: "medium",
    explanation: "The Banker's Algorithm ensures the system stays in a safe state to avoid deadlock.",
  },
  {
    question: "What is internal fragmentation?",
    options: [
      "Wasted space between allocated blocks",
      "Wasted space within an allocated block",
      "Disk sector mismatch",
      "Cache miss penalty",
    ],
    correctAnswer: "Wasted space within an allocated block",
    difficulty: "medium",
    explanation: "Internal fragmentation occurs when allocated memory is larger than what is needed.",
  },
  {
    question: "Which of these is an example of a non-preemptive scheduling algorithm?",
    options: ["Round Robin", "SRTF", "FCFS", "Multilevel Feedback Queue"],
    correctAnswer: "FCFS",
    difficulty: "easy",
    explanation: "FCFS (First Come First Served) runs each process to completion — non-preemptive.",
  },
  {
    question: "What is the purpose of Translation Lookaside Buffer (TLB)?",
    options: [
      "Cache recently used page table entries for fast address translation",
      "Store CPU registers",
      "Buffer disk I/O requests",
      "Track semaphore counts",
    ],
    correctAnswer: "Cache recently used page table entries for fast address translation",
    difficulty: "hard",
    explanation: "TLB is a hardware cache that speeds up virtual-to-physical address translation.",
  },
  {
    question: "In Round Robin scheduling, what is a 'time quantum'?",
    options: [
      "The total CPU time for a process",
      "The maximum time each process runs before being preempted",
      "The idle time between processes",
      "The memory allocated per process",
    ],
    correctAnswer: "The maximum time each process runs before being preempted",
    difficulty: "easy",
    explanation: "Round Robin gives each process a fixed time quantum; if not done, it goes back to queue.",
  },
];

const CN_QUESTIONS = [
  {
    question: "What does IP stand for in networking?",
    options: [
      "Internet Protocol",
      "Interconnected Process",
      "Internal Packet",
      "Interface Port",
    ],
    correctAnswer: "Internet Protocol",
    difficulty: "easy",
    explanation: "IP (Internet Protocol) is responsible for addressing and routing packets.",
  },
  {
    question: "Which OSI layer handles routing?",
    options: ["Physical", "Data Link", "Network", "Transport"],
    correctAnswer: "Network",
    difficulty: "easy",
    explanation: "The Network layer (Layer 3) is responsible for routing packets across networks.",
  },
  {
    question: "What is the purpose of DNS?",
    options: [
      "Encrypt data in transit",
      "Translate domain names to IP addresses",
      "Manage network switches",
      "Assign MAC addresses",
    ],
    correctAnswer: "Translate domain names to IP addresses",
    difficulty: "easy",
    explanation: "DNS (Domain Name System) resolves human-readable domain names to IP addresses.",
  },
  {
    question: "What is the difference between TCP and UDP?",
    options: [
      "TCP is faster; UDP is reliable",
      "TCP is connection-oriented and reliable; UDP is connectionless and faster",
      "Both are identical",
      "UDP is for wired; TCP is for wireless",
    ],
    correctAnswer: "TCP is connection-oriented and reliable; UDP is connectionless and faster",
    difficulty: "easy",
    explanation: "TCP provides reliability via handshaking and acknowledgments; UDP prioritizes speed.",
  },
  {
    question: "Which protocol is used for sending emails?",
    options: ["HTTP", "FTP", "SMTP", "IMAP"],
    correctAnswer: "SMTP",
    difficulty: "easy",
    explanation: "SMTP (Simple Mail Transfer Protocol) is used to send email messages.",
  },
  {
    question: "What is a subnet mask?",
    options: [
      "A firewall configuration",
      "A value that determines which part of an IP address is the network vs host",
      "A wireless security key",
      "A DNS record type",
    ],
    correctAnswer: "A value that determines which part of an IP address is the network vs host",
    difficulty: "medium",
    explanation: "Subnet masks separate the network prefix from the host identifier in an IP address.",
  },
  {
    question: "What does NAT stand for?",
    options: [
      "Network Address Translation",
      "Node Access Table",
      "Network Authentication Token",
      "Natural Addressing Technique",
    ],
    correctAnswer: "Network Address Translation",
    difficulty: "easy",
    explanation: "NAT maps private IP addresses to public IPs to allow internet access.",
  },
  {
    question: "Which protocol operates at the Application layer?",
    options: ["IP", "TCP", "HTTP", "Ethernet"],
    correctAnswer: "HTTP",
    difficulty: "easy",
    explanation: "HTTP (HyperText Transfer Protocol) operates at the Application layer (Layer 7).",
  },
  {
    question: "What is a MAC address?",
    options: [
      "A logical IP address",
      "A unique hardware address assigned to a network interface",
      "A routing table entry",
      "An email address format",
    ],
    correctAnswer: "A unique hardware address assigned to a network interface",
    difficulty: "easy",
    explanation: "MAC addresses are 48-bit hardware identifiers burned into network interface cards.",
  },
  {
    question: "The three-way handshake in TCP involves:",
    options: [
      "SYN → ACK → FIN",
      "SYN → SYN-ACK → ACK",
      "SYN → ACK → SYN",
      "ACK → SYN → ACK",
    ],
    correctAnswer: "SYN → SYN-ACK → ACK",
    difficulty: "medium",
    explanation: "TCP connection setup: client sends SYN, server replies SYN-ACK, client sends ACK.",
  },
  {
    question: "What is the function of ARP?",
    options: [
      "Resolve IP to MAC address",
      "Resolve domain to IP",
      "Encrypt network packets",
      "Assign IP addresses dynamically",
    ],
    correctAnswer: "Resolve IP to MAC address",
    difficulty: "medium",
    explanation: "ARP (Address Resolution Protocol) maps a known IP address to its MAC address.",
  },
  {
    question: "DHCP is used to:",
    options: [
      "Encrypt network traffic",
      "Automatically assign IP addresses to devices",
      "Filter network packets",
      "Resolve DNS queries",
    ],
    correctAnswer: "Automatically assign IP addresses to devices",
    difficulty: "easy",
    explanation: "DHCP (Dynamic Host Configuration Protocol) dynamically assigns IP addresses.",
  },
  {
    question: "What is a router's primary function?",
    options: [
      "Connect devices within the same LAN",
      "Forward packets between different networks",
      "Assign MAC addresses",
      "Encrypt data",
    ],
    correctAnswer: "Forward packets between different networks",
    difficulty: "easy",
    explanation: "Routers operate at Layer 3 and forward packets between different IP networks.",
  },
  {
    question: "Which layer of OSI provides end-to-end communication?",
    options: ["Network", "Data Link", "Transport", "Session"],
    correctAnswer: "Transport",
    difficulty: "medium",
    explanation: "The Transport layer (TCP/UDP) ensures end-to-end delivery and flow control.",
  },
  {
    question: "What does HTTPS add over HTTP?",
    options: [
      "Faster data transfer",
      "SSL/TLS encryption for secure communication",
      "Compression of data",
      "Better routing",
    ],
    correctAnswer: "SSL/TLS encryption for secure communication",
    difficulty: "easy",
    explanation: "HTTPS wraps HTTP in SSL/TLS to encrypt the data in transit.",
  },
  {
    question: "What is the default port for HTTP?",
    options: ["21", "22", "80", "443"],
    correctAnswer: "80",
    difficulty: "easy",
    explanation: "HTTP uses port 80; HTTPS uses port 443.",
  },
  {
    question: "What is the purpose of a firewall?",
    options: [
      "Speed up network connections",
      "Monitor and control incoming/outgoing network traffic",
      "Assign IP addresses",
      "Cache DNS queries",
    ],
    correctAnswer: "Monitor and control incoming/outgoing network traffic",
    difficulty: "easy",
    explanation: "Firewalls filter traffic based on security rules to protect networks.",
  },
  {
    question: "In classful addressing, which class is for large organizations?",
    options: ["Class A", "Class B", "Class C", "Class D"],
    correctAnswer: "Class A",
    difficulty: "medium",
    explanation: "Class A (1.0.0.0 – 126.x.x.x) supports millions of hosts per network.",
  },
  {
    question: "What does 'bandwidth' refer to in networking?",
    options: [
      "The frequency of the signal",
      "The maximum data transfer rate of a network",
      "The physical width of a cable",
      "Latency in milliseconds",
    ],
    correctAnswer: "The maximum data transfer rate of a network",
    difficulty: "easy",
    explanation: "Bandwidth is the capacity of a network link, measured in bps/Mbps/Gbps.",
  },
  {
    question: "Which protocol is used by ping?",
    options: ["TCP", "UDP", "ICMP", "HTTP"],
    correctAnswer: "ICMP",
    difficulty: "medium",
    explanation: "Ping uses ICMP (Internet Control Message Protocol) Echo Request/Reply.",
  },
];

const PROGRAMMING_FUNDAMENTALS_QUESTIONS = [
  {
    question: "What is a variable in programming?",
    options: [
      "A fixed constant value",
      "A named storage location that can hold a value",
      "A function definition",
      "A type of loop",
    ],
    correctAnswer: "A named storage location that can hold a value",
    difficulty: "easy",
    explanation: "Variables are named memory locations that store data which can change.",
  },
  {
    question: "What does 'compile' mean?",
    options: [
      "Run the program",
      "Translate source code into machine code",
      "Debug the program",
      "Package the program",
    ],
    correctAnswer: "Translate source code into machine code",
    difficulty: "easy",
    explanation: "A compiler translates human-readable source code to executable machine code.",
  },
  {
    question: "What is a function/method in programming?",
    options: [
      "A type of variable",
      "A reusable block of code that performs a specific task",
      "A data type",
      "A conditional statement",
    ],
    correctAnswer: "A reusable block of code that performs a specific task",
    difficulty: "easy",
    explanation: "Functions encapsulate logic into reusable, named blocks of code.",
  },
  {
    question: "What is recursion?",
    options: [
      "A loop that runs forever",
      "A function that calls itself",
      "A type of array",
      "An error in the code",
    ],
    correctAnswer: "A function that calls itself",
    difficulty: "easy",
    explanation: "Recursion is when a function solves a problem by calling itself with smaller inputs.",
  },
  {
    question: "What is the difference between == and === in JavaScript?",
    options: [
      "No difference",
      "=== checks value and type; == checks only value",
      "== checks value and type; === checks only value",
      "=== is for assignment",
    ],
    correctAnswer: "=== checks value and type; == checks only value",
    difficulty: "medium",
    explanation: "Strict equality (===) also checks data type; loose equality (==) does type coercion.",
  },
  {
    question: "What is a null pointer / null reference error?",
    options: [
      "Accessing an uninitialized pointer/reference that has no value",
      "A division by zero",
      "An array out-of-bounds error",
      "A type mismatch",
    ],
    correctAnswer: "Accessing an uninitialized pointer/reference that has no value",
    difficulty: "medium",
    explanation: "Null/nil dereference occurs when you try to use a reference that points to nothing.",
  },
  {
    question: "What is an infinite loop?",
    options: [
      "A loop that runs exactly 1000 times",
      "A loop whose exit condition is never met",
      "A recursive function",
      "A loop inside a function",
    ],
    correctAnswer: "A loop whose exit condition is never met",
    difficulty: "easy",
    explanation: "Infinite loops run forever because their termination condition is always true (or absent).",
  },
  {
    question: "What does 'dry run' mean in programming?",
    options: [
      "Running code without output",
      "Manually tracing code execution without running it",
      "Testing code on a server",
      "Compiling without errors",
    ],
    correctAnswer: "Manually tracing code execution without running it",
    difficulty: "easy",
    explanation: "A dry run involves mentally stepping through code to understand its behavior.",
  },
  {
    question: "What is the purpose of a 'return' statement?",
    options: [
      "Exit the entire program",
      "Send a value back from a function to its caller",
      "Print a value to console",
      "Start a new loop",
    ],
    correctAnswer: "Send a value back from a function to its caller",
    difficulty: "easy",
    explanation: "return exits the function and optionally passes a value back to the calling code.",
  },
  {
    question: "What is a boolean data type?",
    options: [
      "A type that stores integers",
      "A type that stores only true or false",
      "A type that stores text",
      "A type that stores decimal numbers",
    ],
    correctAnswer: "A type that stores only true or false",
    difficulty: "easy",
    explanation: "Boolean variables hold logical values — true or false.",
  },
  {
    question: "What is an array?",
    options: [
      "A function that returns multiple values",
      "A collection of elements of the same type stored in contiguous memory",
      "A conditional expression",
      "A type of loop",
    ],
    correctAnswer: "A collection of elements of the same type stored in contiguous memory",
    difficulty: "easy",
    explanation: "Arrays store multiple elements sequentially with index-based access.",
  },
  {
    question: "What is a stack overflow error in recursion?",
    options: [
      "Too many iterations in a for loop",
      "Recursion goes too deep, exhausting the call stack",
      "A variable overflows its type",
      "Memory allocation failure",
    ],
    correctAnswer: "Recursion goes too deep, exhausting the call stack",
    difficulty: "medium",
    explanation: "Without a proper base case, recursion fills the call stack and crashes the program.",
  },
  {
    question: "What is the output of: 5 % 2?",
    options: ["2", "2.5", "1", "0"],
    correctAnswer: "1",
    difficulty: "easy",
    explanation: "% is the modulus operator; 5 ÷ 2 = 2 remainder 1.",
  },
  {
    question: "What is a 'parameter' in a function?",
    options: [
      "The return value of a function",
      "A variable declared in the function signature to receive input",
      "A global variable",
      "A function call",
    ],
    correctAnswer: "A variable declared in the function signature to receive input",
    difficulty: "easy",
    explanation: "Parameters are placeholders in the function definition; arguments are the actual values passed.",
  },
  {
    question: "Which of these is a correct way to comment in most programming languages?",
    options: [
      "## This is a comment",
      "// This is a comment",
      "** This is a comment",
      "&& This is a comment",
    ],
    correctAnswer: "// This is a comment",
    difficulty: "easy",
    explanation: "// is used for single-line comments in C, C++, Java, JavaScript, and many others.",
  },
  {
    question: "What is scope in programming?",
    options: [
      "The speed of code execution",
      "The region of code where a variable is accessible",
      "The memory allocated to a program",
      "The type of a variable",
    ],
    correctAnswer: "The region of code where a variable is accessible",
    difficulty: "medium",
    explanation: "Scope determines where a variable can be read or written in the program.",
  },
  {
    question: "What is the purpose of 'break' in a loop?",
    options: [
      "Pause the loop for 1 second",
      "Skip to the next iteration",
      "Exit the loop immediately",
      "End the program",
    ],
    correctAnswer: "Exit the loop immediately",
    difficulty: "easy",
    explanation: "break terminates the current loop and continues execution after it.",
  },
  {
    question: "What does 'pass by reference' mean?",
    options: [
      "Copying the value of a variable into a function",
      "Passing the memory address of a variable so the function can modify the original",
      "Returning a value from a function",
      "Passing a variable name as a string",
    ],
    correctAnswer: "Passing the memory address of a variable so the function can modify the original",
    difficulty: "medium",
    explanation: "Pass by reference allows the function to directly modify the original variable.",
  },
  {
    question: "What is encapsulation in OOP?",
    options: [
      "Inheriting methods from a parent class",
      "Bundling data and methods together and restricting direct access",
      "Creating multiple instances of a class",
      "Overriding parent class methods",
    ],
    correctAnswer: "Bundling data and methods together and restricting direct access",
    difficulty: "medium",
    explanation: "Encapsulation hides internal state and exposes only necessary interfaces.",
  },
  {
    question: "What is the difference between a compiler and an interpreter?",
    options: [
      "Both are identical",
      "Compilers translate the whole program; interpreters execute line by line",
      "Interpreters produce machine code; compilers do not",
      "Compilers are faster to write but slower to run",
    ],
    correctAnswer: "Compilers translate the whole program; interpreters execute line by line",
    difficulty: "medium",
    explanation: "Compilers produce standalone executables; interpreters translate and execute simultaneously.",
  },
];

// Mixed test — 30 questions across topics
const MIXED_PLACEMENT_QUESTIONS = [
  // DSA (8)
  DSA_BASIC_QUESTIONS[0],
  DSA_BASIC_QUESTIONS[1],
  DSA_BASIC_QUESTIONS[7],
  DSA_INTERMEDIATE_QUESTIONS[0],
  DSA_INTERMEDIATE_QUESTIONS[6],
  DSA_INTERMEDIATE_QUESTIONS[9],
  DSA_INTERMEDIATE_QUESTIONS[13],
  DSA_BASIC_QUESTIONS[12],
  // DBMS (7)
  DBMS_QUESTIONS[0],
  DBMS_QUESTIONS[1],
  DBMS_QUESTIONS[4],
  DBMS_QUESTIONS[6],
  DBMS_QUESTIONS[11],
  DBMS_QUESTIONS[14],
  DBMS_QUESTIONS[18],
  // OS (8)
  OS_QUESTIONS[0],
  OS_QUESTIONS[2],
  OS_QUESTIONS[4],
  OS_QUESTIONS[6],
  OS_QUESTIONS[8],
  OS_QUESTIONS[10],
  OS_QUESTIONS[14],
  OS_QUESTIONS[18],
  // CN (7)
  CN_QUESTIONS[0],
  CN_QUESTIONS[3],
  CN_QUESTIONS[6],
  CN_QUESTIONS[9],
  CN_QUESTIONS[12],
  CN_QUESTIONS[16],
  CN_QUESTIONS[19],
];

// ─────────────────────────────────────────────────────────────────────────────
// Main Seeder
// ─────────────────────────────────────────────────────────────────────────────

async function seedPlacementTests() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("✅ Connected to MongoDB\n");

  // ── Find subjects ────────────────────────────────────────────────────────
  const dsaSubject    = await findSubject(["Data Structures", "DSA", "dsa"]);
  const dbmsSubject   = await findSubject(["Database Management", "DBMS", "dbms", "Database"]);
  const osSubject     = await findSubject(["Operating System", "OS", "os "]);
  const cnSubject     = await findSubject(["Computer Network", "Networks", "CN"]);
  const progSubject   = await findSubject(["C Programming", "Programming Fundamentals", "Problem Solving"]);

  // Fall back to DSA subject for Programming Fundamentals if not found
  const progEffective = progSubject || dsaSubject;

  console.log("📚 Subjects found:");
  console.log("  DSA:", dsaSubject?.name || "NOT FOUND — will skip DSA tests");
  console.log("  DBMS:", dbmsSubject?.name || "NOT FOUND — will skip DBMS test");
  console.log("  OS:", osSubject?.name || "NOT FOUND — will skip OS test");
  console.log("  CN:", cnSubject?.name || "NOT FOUND — will skip CN test");
  console.log("  Programming:", progEffective?.name || "NOT FOUND — will skip Programming test");
  console.log();

  const testDefinitions = [];

  // ── DSA Basic ─────────────────────────────────────────────────────────────
  if (dsaSubject) {
    const topic = await findAnyTopic(dsaSubject._id);
    testDefinitions.push({
      subject: dsaSubject,
      topicId: topic?._id,
      title: "DSA Basic Test",
      description: "Covers fundamental data structures and algorithms — arrays, linked lists, sorting, basic complexity analysis. Ideal for beginners building a placement foundation.",
      category: "Programming & DSA",
      difficulty: "Beginner",
      duration: 20,
      passingScore: 60,
      topics: ["Arrays", "Linked Lists", "Stacks", "Queues", "Sorting", "Big-O Notation", "Binary Search"],
      questions: DSA_BASIC_QUESTIONS,
    });
  }

  // ── DSA Intermediate ──────────────────────────────────────────────────────
  if (dsaSubject) {
    const topic = await findAnyTopic(dsaSubject._id);
    testDefinitions.push({
      subject: dsaSubject,
      topicId: topic?._id,
      title: "DSA Intermediate Test",
      description: "Tests intermediate DSA concepts — trees, heaps, graphs, dynamic programming, and advanced sorting. Essential for SDE placements.",
      category: "Programming & DSA",
      difficulty: "Intermediate",
      duration: 30,
      passingScore: 60,
      topics: ["Trees", "Heaps", "Graphs", "Dynamic Programming", "Advanced Sorting", "Tries", "Union-Find"],
      questions: DSA_INTERMEDIATE_QUESTIONS,
    });
  }

  // ── DBMS ──────────────────────────────────────────────────────────────────
  if (dbmsSubject) {
    const topic = await findAnyTopic(dbmsSubject._id);
    testDefinitions.push({
      subject: dbmsSubject,
      topicId: topic?._id,
      title: "DBMS Test",
      description: "Covers SQL, normalization, ACID properties, transactions, indexing, and relational database concepts. Critical for backend and data engineering roles.",
      category: "Core CS",
      difficulty: "Intermediate",
      duration: 25,
      passingScore: 60,
      topics: ["SQL", "Normalization", "ACID", "Transactions", "Indexing", "Views", "Stored Procedures"],
      questions: DBMS_QUESTIONS,
    });
  }

  // ── Operating Systems ─────────────────────────────────────────────────────
  if (osSubject) {
    const topic = await findAnyTopic(osSubject._id);
    testDefinitions.push({
      subject: osSubject,
      topicId: topic?._id,
      title: "Operating Systems Test",
      description: "Tests OS concepts — process management, scheduling, memory management, deadlocks, paging, and synchronization. Key topic for CS placements.",
      category: "Core CS",
      difficulty: "Intermediate",
      duration: 25,
      passingScore: 60,
      topics: ["Process Management", "CPU Scheduling", "Memory Management", "Deadlocks", "Paging", "Synchronization", "Virtual Memory"],
      questions: OS_QUESTIONS,
    });
  }

  // ── Computer Networks ─────────────────────────────────────────────────────
  if (cnSubject) {
    const topic = await findAnyTopic(cnSubject._id);
    testDefinitions.push({
      subject: cnSubject,
      topicId: topic?._id,
      title: "Computer Networks Test",
      description: "Covers OSI model, TCP/IP, DNS, HTTP, routing, subnetting, and core networking protocols. Important for backend and DevOps roles.",
      category: "Core CS",
      difficulty: "Intermediate",
      duration: 25,
      passingScore: 60,
      topics: ["OSI Model", "TCP/IP", "DNS", "HTTP/HTTPS", "Routing", "Subnetting", "ARP", "DHCP"],
      questions: CN_QUESTIONS,
    });
  }

  // ── Programming Fundamentals ──────────────────────────────────────────────
  if (progEffective) {
    const topic = await findAnyTopic(progEffective._id);
    testDefinitions.push({
      subject: progEffective,
      topicId: topic?._id,
      title: "Programming Fundamentals Test",
      description: "Covers core programming concepts — variables, functions, loops, OOP, recursion, and type systems. Great starting point for any programming role.",
      category: "Programming & DSA",
      difficulty: "Beginner",
      duration: 20,
      passingScore: 60,
      topics: ["Variables & Types", "Functions", "Loops", "Recursion", "OOP Basics", "Scope", "Pass by Reference"],
      questions: PROGRAMMING_FUNDAMENTALS_QUESTIONS,
    });
  }

  // ── Mixed Placement Test ──────────────────────────────────────────────────
  const mixedSubject = dsaSubject || dbmsSubject || osSubject || cnSubject;
  if (mixedSubject) {
    const topic = await findAnyTopic(mixedSubject._id);
    testDefinitions.push({
      subject: mixedSubject,
      topicId: topic?._id,
      title: "Mixed Placement Mock Test",
      description: "A comprehensive 30-question mixed test covering DSA, DBMS, OS, and Computer Networks. Simulates real placement exam conditions across all core CS topics.",
      category: "Placement",
      difficulty: "Intermediate",
      duration: 40,
      passingScore: 60,
      topics: ["DSA", "DBMS", "Operating Systems", "Computer Networks"],
      questions: MIXED_PLACEMENT_QUESTIONS,
    });
  }

  // ── Seed each test ────────────────────────────────────────────────────────
  let created = 0;
  let skipped = 0;

  for (const def of testDefinitions) {
    // Check if test already exists
    const existing = await Test.findOne({ title: def.title });
    if (existing) {
      console.log(`⏭  Skipping "${def.title}" — already exists (${existing.questions.length} questions)`);
      skipped++;
      continue;
    }

    // Create questions
    const questionIds = await createQuestions(
      def.questions,
      def.subject._id,
      def.topicId
    );

    // Create test
    const test = await Test.create({
      subject: def.subject._id,
      topic: def.topicId || undefined,
      title: def.title,
      description: def.description,
      category: def.category,
      difficulty: def.difficulty,
      duration: def.duration,
      passingScore: def.passingScore,
      topics: def.topics,
      totalMarks: questionIds.length,
      negativeMarking: false,
      allowRetake: true,
      questions: questionIds,
    });

    console.log(`✅ Created "${test.title}" — ${questionIds.length} questions, ${def.duration}min, ${def.difficulty}`);
    created++;
  }

  console.log(`\n📊 Seeding complete: ${created} tests created, ${skipped} skipped.`);
  await mongoose.disconnect();
  process.exit(0);
}

seedPlacementTests().catch((err) => {
  console.error("❌ Seeder failed:", err);
  process.exit(1);
});
