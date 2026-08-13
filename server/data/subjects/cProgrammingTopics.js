module.exports = [
  {
    "title": "Introduction to Programming and C Language",
    "slug": "c-programming-introduction-to-programming-and-c-language",
    "order": 1,
    "estimatedHours": 3,
    "difficulty": "Beginner",
    "description": "Learn programming fundamentals, problem-solving techniques, algorithm flowcharts, C language history, program structure, and GCC compilation pipeline.",
    "subTopics": [
      "Introduction to Programming",
      "Problem Solving Approach",
      "Algorithm and Flowchart Basics",
      "Introduction to C Language",
      "History and Features of C",
      "Structure of a C Program",
      "Compilation and Execution Process",
      "C Programming Environment Setup"
    ],
    "prerequisiteTitles": [],
    "learningObjectives": [
      "Understand the problem-solving workflow: Problem Statement -> Algorithm -> Flowchart -> C Code.",
      "Identify the sections of a standard C program (Header files, main(), statements, return 0).",
      "Understand GCC compiler phases: Preprocessing -> Compilation -> Assembly -> Linking."
    ],
    "notes": [
      {
        "title": "Standard C Program Anatomy & Compilation Stages",
        "content": "INTRODUCTION TO C PROGRAMMING\n\n1. Structure of a C Program:\n   #include <stdio.stdio.h> // Preprocessor Directive\n\n   // Main Function - Execution entry point\n   int main() {\n       printf(\"Hello, World!\\n\");\n       return 0; // Exit status 0 indicates successful execution\n   }\n\n2. GCC Compilation Phases:\n   - Preprocessing (.c -> .i): Expands macros, includes header files, strips comments.\n   - Compilation (.i -> .s): Converts C code into Assembly code.\n   - Assembly (.s -> .o): Converts Assembly code into Machine Code object file.\n   - Linking (.o -> .exe): Links object files with C Standard Library binaries to create executable."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Programming in ANSI C",
        "author": "E. Balagurusamy"
      },
      {
        "title": "The C Programming Language",
        "author": "Brian W. Kernighan, Dennis M. Ritchie"
      }
    ],
    "practiceLinks": [
      {
        "title": "HackerRank C Introduction",
        "url": "https://www.hackerrank.com/domains/c"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is C language? State four major features of C. (2 Marks)",
        "Explain the four stages of C program compilation (Preprocessing, Compilation, Assembly, Linking). (2 Marks)",
        "What is the significance of #include <stdio.h> and main() in C? (2 Marks)"
      ],
      "sixMarks": [
        "Explain the standard structure of a C program with a annotated code example. (6 Marks)",
        "Differentiate between Algorithm, Flowchart, and Program. Draw a flowchart to find the largest of two numbers. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Introduction to C Programming. Detail historical development by Dennis Ritchie at Bell Labs, structured programming paradigm, C compilation pipeline, memory organization, and setup of GCC/VS Code IDEs. (10 Marks)"
      ]
    }
  },
  {
    "title": "Basics of C Programming",
    "slug": "c-programming-basics-of-c-programming",
    "order": 2,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Master C tokens, keywords, variables, constants, primitive data types (int, float, char, double), type casting, and standard I/O (printf, scanf).",
    "subTopics": [
      "Character Set and Tokens",
      "Keywords",
      "Identifiers",
      "Variables",
      "Constants",
      "Data Types (Integer, Float, Character, Double)",
      "Type Conversion",
      "Input and Output Functions (printf, scanf)"
    ],
    "prerequisiteTitles": [
      "Introduction to Programming and C Language"
    ],
    "learningObjectives": [
      "Declare variables using correct naming rules and C data types.",
      "Use format specifiers (%d, %f, %c, %lf, %s) in printf() and scanf().",
      "Perform implicit and explicit type conversions."
    ],
    "notes": [
      {
        "title": "C Data Types, Format Specifiers & Input/Output Code",
        "content": "C DATA TYPES & I/O\n\n#include <stdio.h>\n\nint main() {\n    int age = 20;               // 4 bytes, %d\n    float gpa = 3.85f;          // 4 bytes, %f\n    double salary = 75000.50;   // 8 bytes, %lf\n    char grade = 'A';           // 1 byte, %c\n\n    printf(\"Age: %d, GPA: %.2f, Grade: %c\\n\", age, gpa, grade);\n\n    // Reading input from user\n    printf(\"Enter new age: \");\n    scanf(\"%d\", &age); // Address-of operator & passes pointer to variable\n    printf(\"Updated Age: %d\\n\", age);\n\n    // Type casting (Explicit conversion)\n    int totalMarks = 450, totalSubjects = 5;\n    float avg = (float)totalMarks / totalSubjects;\n    printf(\"Average: %.2f\\n\", avg);\n\n    return 0;\n}"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Let Us C",
        "author": "Yashavant Kanetkar"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks C Variables and Data Types",
        "url": "https://www.geeksforgeeks.org/c-variables/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "List primitive data types in C with their memory sizes and format specifiers. (2 Marks)",
        "What is the difference between implicit and explicit type conversion? (2 Marks)",
        "Why is the address-of operator (&) required in scanf()? (2 Marks)"
      ],
      "sixMarks": [
        "Write a C program to input a student's age, height, and grade, then print formatted details. Explain tokens used. (6 Marks)",
        "Explain C identifier naming rules and 32 reserved keywords with examples. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on C Language Tokens & Data Types. Detail constants (literal, const keyword, #define), integer modifiers (signed, unsigned, short, long), IEEE 754 floating-point representation, type promotion rules, and formatted vs unformatted I/O (getchar/putchar, gets/puts). (10 Marks)"
      ]
    }
  },
  {
    "title": "Operators and Expressions",
    "slug": "c-programming-operators-and-expressions",
    "order": 3,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Explore C operators: Arithmetic, Relational, Logical, Assignment, Increment/Decrement (++a vs a++), Bitwise (&, |, ^, ~, <<, >>), Ternary operator, and operator precedence.",
    "subTopics": [
      "Arithmetic Operators",
      "Relational Operators",
      "Logical Operators",
      "Assignment Operators",
      "Increment and Decrement Operators",
      "Bitwise Operators",
      "Conditional Operator",
      "Operator Precedence and Associativity",
      "Expression Evaluation"
    ],
    "prerequisiteTitles": [
      "Basics of C Programming"
    ],
    "learningObjectives": [
      "Evaluate complex expressions using C Operator Precedence and Associativity rules.",
      "Differentiate Prefix (++a) and Postfix (a++) increment operations.",
      "Utilize bitwise operators (&, |, ^, ~, <<, >>) for low-level binary manipulation."
    ],
    "notes": [
      {
        "title": "C Operators, Bitwise Manipulations & Precedence Code",
        "content": "C OPERATORS AND EXPRESSIONS CODE\n\n#include <stdio.h>\n\nint main() {\n    int a = 10, b = 3;\n\n    // Arithmetic & Modulo\n    printf(\"a / b = %d, a %% b = %d\\n\", a / b, a % b); // Output: 3, 1\n\n    // Prefix vs Postfix Increment\n    int x = 5, y, z;\n    y = ++x; // x becomes 6, y receives 6\n    z = x++; // z receives 6, x becomes 7\n    printf(\"x=%d, y=%d, z=%d\\n\", x, y, z);\n\n    // Conditional (Ternary) Operator\n    int max = (a > b) ? a : b;\n    printf(\"Max: %d\\n\", max);\n\n    // Bitwise Operators\n    int p = 5;  // Binary: 0101\n    int q = 3;  // Binary: 0011\n    printf(\"p & q = %d\\n\", p & q); // 0001 = 1\n    printf(\"p | q = %d\\n\", p | q); // 0111 = 7\n    printf(\"p ^ q = %d\\n\", p ^ q); // 0110 = 6\n    printf(\"p << 1 = %d\\n\", p << 1); // 1010 = 10\n\n    return 0;\n}"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Programming in C",
        "author": "Stephen G. Kochan"
      }
    ],
    "practiceLinks": [
      {
        "title": "HackerRank C Operators Practice",
        "url": "https://www.hackerrank.com/domains/c"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between prefix (++x) and postfix (x++) increment operators with a code example. (2 Marks)",
        "Evaluate expression: int result = 5 + 3 * 2 - 8 / 4; Show precedence steps. (2 Marks)",
        "State the purpose of Bitwise Left Shift (<<) and Right Shift (>>) operators. (2 Marks)"
      ],
      "sixMarks": [
        "Explain all categories of C operators (Arithmetic, Relational, Logical, Bitwise, Ternary) with syntax and code snippets. (6 Marks)",
        "Write a C program to check whether a given integer is even or odd using (a) Modulo operator, (b) Bitwise AND operator, (c) Conditional operator. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Operator Evaluation in C. Detail operator precedence table, associativity (Left-to-Right vs Right-to-Left), short-circuit evaluation in logical AND/OR, type casting during arithmetic expression evaluation, and bitwise manipulation techniques (setting, clearing, toggling bits). (10 Marks)"
      ]
    }
  },
  {
    "title": "Decision Making Statements",
    "slug": "c-programming-decision-making-statements",
    "order": 4,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Master control flow: if, if-else, nested if-else, else-if ladder, and switch-case statements with break & default labels.",
    "subTopics": [
      "Introduction to Conditional Statements",
      "if Statement",
      "if-else Statement",
      "Nested if Statements",
      "else-if Ladder",
      "switch-case Statement",
      "Conditional Operator Applications"
    ],
    "prerequisiteTitles": [
      "Operators and Expressions"
    ],
    "learningObjectives": [
      "Implement multi-way branching using `if-else-if` ladders and `switch-case` constructs.",
      "Avoid fall-through bugs in `switch-case` using `break` statements.",
      "Write nested conditional logic for grade calculation and leap year checks."
    ],
    "notes": [
      {
        "title": "Conditional Branching & Switch-Case Code Patterns",
        "content": "DECISION MAKING IN C\n\n#include <stdio.h>\n\nint main() {\n    int marks = 85;\n\n    // else-if Ladder\n    if (marks >= 90) {\n        printf(\"Grade A+\\n\");\n    } else if (marks >= 80) {\n        printf(\"Grade A\\n\");\n    } else if (marks >= 70) {\n        printf(\"Grade B\\n\");\n    } else {\n        printf(\"Grade C / Pass\\n\");\n    }\n\n    // switch-case statement\n    char op = '*';\n    int num1 = 10, num2 = 5;\n\n    switch(op) {\n        case '+':\n            printf(\"Result: %d\\n\", num1 + num2);\n            break;\n        case '-':\n            printf(\"Result: %d\\n\", num1 - num2);\n            break;\n        case '*':\n            printf(\"Result: %d\\n\", num1 * num2);\n            break;\n        case '/':\n            if(num2 != 0) printf(\"Result: %d\\n\", num1 / num2);\n            break;\n        default:\n            printf(\"Invalid Operator\\n\");\n    }\n\n    return 0;\n}"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Programming in ANSI C",
        "author": "E. Balagurusamy"
      }
    ],
    "practiceLinks": [
      {
        "title": "Sanfoundry C Control Statements Questions",
        "url": "https://www.sanfoundry.com/c-programming-questions-answers-if-else/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between else-if ladder and switch-case statement. (2 Marks)",
        "What happens if break is omitted in a switch-case statement? Explain fall-through. (2 Marks)",
        "Write a C expression using ternary operator to find the minimum of two numbers. (2 Marks)"
      ],
      "sixMarks": [
        "Write a C program to check whether a given year is a Leap Year using nested if-else statements. Explain logic. (6 Marks)",
        "Write a menu-driven C program using switch-case to simulate a basic arithmetic calculator. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Decision Control Structures in C. Detail conditional expression truth values (0 = False, Non-Zero = True), dangling else problem and solution, nested if-else execution flow, switch-case jump tables, and performance comparison of switch vs else-if ladders. (10 Marks)"
      ]
    }
  },
  {
    "title": "Looping and Iterations",
    "slug": "c-programming-looping-and-iterations",
    "order": 5,
    "estimatedHours": 5,
    "difficulty": "Beginner",
    "description": "Master repetitive execution: while loop (entry-controlled), do-while loop (exit-controlled), for loop, nested loops, break, and continue statements.",
    "subTopics": [
      "Introduction to Loops",
      "while Loop",
      "do-while Loop",
      "for Loop",
      "Nested Loops",
      "break Statement",
      "continue Statement",
      "Loop-based Problem Solving"
    ],
    "prerequisiteTitles": [
      "Decision Making Statements"
    ],
    "learningObjectives": [
      "Choose appropriate loop construct (`for` for fixed iterations, `while`/`do-while` for condition-driven).",
      "Implement nested loops for pattern printing and table generation.",
      "Control loop execution flow using `break` and `continue` keywords."
    ],
    "notes": [
      {
        "title": "Loop Control Statements & Pattern Printing Code",
        "content": "C LOOPING CONSTRUCTS & PATTERNS\n\n#include <stdio.h>\n\nint main() {\n    // 1. for loop\n    printf(\"Counting 1 to 5: \");\n    for (int i = 1; i <= 5; i++) {\n        printf(\"%d \", i);\n    }\n    printf(\"\\n\");\n\n    // 2. while loop (Entry-controlled)\n    int count = 5;\n    while (count > 0) {\n        printf(\"Countdown: %d\\n\", count);\n        count--;\n    }\n\n    // 3. do-while loop (Exit-controlled - executes at least once)\n    int input;\n    do {\n        printf(\"Enter 0 to exit: \");\n        scanf(\"%d\", &input);\n    } while (input != 0);\n\n    // 4. Nested loop: Right-angled Star Pattern\n    int rows = 4;\n    for (int i = 1; i <= rows; i++) {\n        for (int j = 1; j <= i; j++) {\n            printf(\"* \");\n        }\n        printf(\"\\n\");\n    }\n\n    return 0;\n}"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Let Us C",
        "author": "Yashavant Kanetkar"
      }
    ],
    "practiceLinks": [
      {
        "title": "Codeforwin C Loop Programming Exercises",
        "url": "https://codeforwin.org/c-programming/loop-programming-exercises"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between while loop and do-while loop with syntax. (2 Marks)",
        "What is the difference between break and continue statements in loops? (2 Marks)",
        "Identify the infinite loop condition in: for(;;){ ... } (2 Marks)"
      ],
      "sixMarks": [
        "Write a C program to check whether a given integer is a Prime Number using a for loop. (6 Marks)",
        "Write a C program using nested loops to print Floyd's Triangle pattern up to N rows. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Iterative Loops in C. Detail loop initialization, condition evaluation, increment/decrement execution cycles, loop unrolling optimization, nested loop time complexity calculations ($O(N^2)$), and solving numeric problems (Fibonacci series, Armstrong number, Reverse digits). (10 Marks)"
      ]
    }
  },
  {
    "title": "Functions in C",
    "slug": "c-programming-functions-in-c",
    "order": 6,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Learn modular programming: Function declaration (prototypes), definitions, calls, return values, parameters, Call by Value, scope rules, and Recursion.",
    "subTopics": [
      "Introduction to Functions",
      "Function Declaration",
      "Function Definition",
      "Function Calling",
      "Return Values",
      "Function Parameters",
      "Call by Value",
      "Recursion Basics",
      "Recursive Problem Solving"
    ],
    "prerequisiteTitles": [
      "Looping and Iterations"
    ],
    "learningObjectives": [
      "Decompose complex software into reusable modular functions.",
      "Understand parameter passing mechanism (Call by Value) and local variable scoping.",
      "Write recursive functions with base cases (Factorial, Fibonacci, Tower of Hanoi)."
    ],
    "notes": [
      {
        "title": "Function Prototypes, Call by Value & Recursion Code",
        "content": "FUNCTIONS & RECURSION IN C\n\n#include <stdio.h>\n\n// Function Declaration (Prototype)\nint add(int a, int b);\nlong factorial(int n);\n\nint main() {\n    int sum = add(15, 25); // Function Call\n    printf(\"Sum: %d\\n\", sum);\n\n    int num = 5;\n    printf(\"Factorial of %d = %ld\\n\", num, factorial(num));\n    return 0;\n}\n\n// Function Definition (Call by Value)\nint add(int a, int b) {\n    return a + b;\n}\n\n// Recursive Function Definition\nlong factorial(int n) {\n    if (n <= 1) return 1; // Base condition\n    return n * factorial(n - 1); // Recursive step\n}"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "The C Programming Language",
        "author": "Kernighan & Ritchie"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks C Functions Exercises",
        "url": "https://www.geeksforgeeks.org/c-functions/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is a function prototype? Why is it required in C? (2 Marks)",
        "Explain Call by Value parameter passing mechanism. (2 Marks)",
        "What is Recursion? State two mandatory components of a recursive function. (2 Marks)"
      ],
      "sixMarks": [
        "Write a C program to check whether a number is Prime or Armstrong using user-defined functions. (6 Marks)",
        "Write a recursive C program to calculate the N-th Fibonacci number. Trace call stack for N = 4. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on C Functions & Memory Architecture. Detail activation records on stack frames, local vs global scope, static variables retention, call-by-value pass-by-copy mechanics, recursive call stack overflow risk, and tail recursion optimization. (10 Marks)"
      ]
    }
  },
  {
    "title": "Arrays in C",
    "slug": "c-programming-arrays-in-c",
    "order": 7,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master contiguous memory data structures: 1D Arrays, 2D Arrays (Matrices), multi-dimensional arrays, element traversal, linear search, and matrix multiplication.",
    "subTopics": [
      "Introduction to Arrays",
      "One Dimensional Arrays",
      "Two Dimensional Arrays",
      "Multi Dimensional Arrays",
      "Array Traversal",
      "Array Searching",
      "Array Operations",
      "Matrix Operations",
      "Array-based Problem Solving"
    ],
    "prerequisiteTitles": [
      "Functions in C"
    ],
    "learningObjectives": [
      "Declare and initialize 1D and 2D arrays in contiguous memory blocks.",
      "Perform array traversal, element insertion, deletion, and linear searching.",
      "Implement 2D matrix addition, transposition, and multiplication."
    ],
    "notes": [
      {
        "title": "1D Array Operations & 2D Matrix Multiplication Code",
        "content": "ARRAYS & MATRIX OPERATIONS IN C\n\n#include <stdio.h>\n\nint main() {\n    // 1D Array Initialization & Traversal\n    int arr[5] = {10, 20, 30, 40, 50};\n    printf(\"1D Array Elements: \");\n    for (int i = 0; i < 5; i++) {\n        printf(\"%d \", arr[i]);\n    }\n    printf(\"\\n\");\n\n    // 2D Array: Matrix Multiplication (2x2)\n    int A[2][2] = {{1, 2}, {3, 4}};\n    int B[2][2] = {{5, 6}, {7, 8}};\n    int C[2][2] = {0};\n\n    for (int i = 0; i < 2; i++) {\n        for (int j = 0; j < 2; j++) {\n            for (int k = 0; k < 2; k++) {\n                C[i][j] += A[i][k] * B[k][j];\n            }\n        }\n    }\n\n    printf(\"Resultant Matrix C:\\n\");\n    for (int i = 0; i < 2; i++) {\n        for (int j = 0; j < 2; j++) {\n            printf(\"%d \", C[i][j]);\n        }\n        printf(\"\\n\");\n    }\n\n    return 0;\n}"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Programming in ANSI C",
        "author": "E. Balagurusamy"
      }
    ],
    "practiceLinks": [
      {
        "title": "HackerRank C 1D Arrays",
        "url": "https://www.hackerrank.com/domains/c"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define an Array. Explain contiguous memory allocation concept. (2 Marks)",
        "How are 2D arrays stored in memory in C? (Row-major order). (2 Marks)",
        "What is array out-of-bounds error in C? Does C compiler check array bounds? (2 Marks)"
      ],
      "sixMarks": [
        "Write a C program to find the largest and second largest elements in a 1D array of N integers. (6 Marks)",
        "Write a C program to compute the Transpose of a given N x N matrix. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Arrays in C. Detail row-major memory address formula `Base_Addr + (i * cols + j) * size`, passing 1D/2D arrays to functions, matrix multiplication condition validation, and array searching algorithms. (10 Marks)"
      ]
    }
  },
  {
    "title": "Strings in C",
    "slug": "c-programming-strings-in-c",
    "order": 8,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master null-terminated character arrays: string I/O (`gets`/`puts`, `fgets`), string library functions (`strlen`, `strcpy`, `strcat`, `strcmp`), reverse, palindrome, and pattern matching.",
    "subTopics": [
      "Introduction to Strings",
      "Character Arrays",
      "String Input and Output",
      "String Library Functions (strlen, strcpy, strcat, strcmp)",
      "String Manipulation Problems",
      "Pattern Searching Basics"
    ],
    "prerequisiteTitles": [
      "Arrays in C"
    ],
    "learningObjectives": [
      "Understand null character ('\\0') termination of C strings.",
      "Manipulate strings using standard <string.h> functions (`strlen`, `strcpy`, `strcat`, `strcmp`).",
      "Implement custom string manipulation logic without using library functions (Palindrome check, string reverse)."
    ],
    "notes": [
      {
        "title": "C String Operations & Manual Manipulation Code",
        "content": "STRINGS IN C\n\n#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str1[50] = \"Hello\";\n    char str2[50] = \"World\";\n\n    // String library functions\n    printf(\"Length of str1: %lu\\n\", strlen(str1));\n    strcat(str1, \" \");\n    strcat(str1, str2); // Concatenate -> \"Hello World\"\n    printf(\"Concatenated: %s\\n\", str1);\n\n    // Palindrome Check Without Library Function\n    char word[20] = \"madam\";\n    int len = 0, isPalindrome = 1;\n\n    while (word[len] != '\\0') len++; // Manual strlen\n\n    for (int i = 0; i < len / 2; i++) {\n        if (word[i] != word[len - 1 - i]) {\n            isPalindrome = 0;\n            break;\n        }\n    }\n\n    if (isPalindrome) printf(\"%s is a Palindrome!\\n\", word);\n    else printf(\"%s is NOT a Palindrome!\\n\", word);\n\n    return 0;\n}"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Let Us C",
        "author": "Yashavant Kanetkar"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks C String Exercises",
        "url": "https://www.geeksforgeeks.org/c-strings-string-functions/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is the significance of the null character ('\\0') in C strings? (2 Marks)",
        "Compare strlen() and sizeof() for a character array string. (2 Marks)",
        "Why is fgets() safer than gets() for string input? (2 Marks)"
      ],
      "sixMarks": [
        "Write a C program to check whether a user-entered string is a Palindrome without using string library functions. (6 Marks)",
        "Explain string library functions `strlen()`, `strcpy()`, `strcat()`, and `strcmp()` with syntax and usage examples. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Character Arrays & Strings in C. Detail string memory representation, buffer overflow vulnerabilities with gets(), custom implementations of strlen, strcpy, strcat, and strcmp, string array 2D representations, and string pattern searching logic. (10 Marks)"
      ]
    }
  },
  {
    "title": "Pointers in C",
    "slug": "c-programming-pointers-in-c",
    "order": 9,
    "estimatedHours": 6,
    "difficulty": "Advanced",
    "description": "Master memory addresses: Address-of (`&`), dereference (`*`), pointer variables, pointer arithmetic, Call by Reference, pointers with arrays, and pointer to functions.",
    "subTopics": [
      "Introduction to Pointers",
      "Address and Dereferencing Operators",
      "Pointer Variables",
      "Pointer Arithmetic",
      "Pointers with Arrays",
      "Pointers with Functions",
      "Pointers with Strings",
      "Dynamic Memory Concept"
    ],
    "prerequisiteTitles": [
      "Arrays in C",
      "Functions in C"
    ],
    "learningObjectives": [
      "Understand memory addressing and pointer dereferencing using `&` and `*`.",
      "Execute Call by Reference parameter passing to mutate caller variables (Swap program).",
      "Perform pointer arithmetic (`ptr++`, `ptr + i`) to traverse arrays and strings."
    ],
    "notes": [
      {
        "title": "Pointers Basics, Call by Reference & Pointer Arithmetic Code",
        "content": "POINTERS IN C\n\n#include <stdio.h>\n\n// Call by Reference using Pointers\nvoid swap(int *x, int *y) {\n    int temp = *x;\n    *x = *y;\n    *y = temp;\n}\n\nint main() {\n    int val = 100;\n    int *ptr = &val; // ptr stores memory address of val\n\n    printf(\"Value: %d\\n\", val);\n    printf(\"Address (&val): %p\\n\", (void*)&val);\n    printf(\"Pointer Value (ptr): %p\\n\", (void*)ptr);\n    printf(\"Dereferenced (*ptr): %d\\n\", *ptr);\n\n    // Call by Reference Swap\n    int a = 10, b = 20;\n    swap(&a, &b);\n    printf(\"After Swap: a = %d, b = %d\\n\", a, b);\n\n    // Pointer Arithmetic with Arrays\n    int arr[] = {100, 200, 300};\n    int *pArr = arr; // arr acts as constant pointer to first element\n\n    for (int i = 0; i < 3; i++) {\n        printf(\"Element %d = %d at address %p\\n\", i, *(pArr + i), (void*)(pArr + i));\n    }\n\n    return 0;\n}"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Pointers in C",
        "author": "Yashavant Kanetkar"
      },
      {
        "title": "The C Programming Language",
        "author": "Kernighan & Ritchie"
      }
    ],
    "practiceLinks": [
      {
        "title": "HackerRank C Pointers Practice",
        "url": "https://www.hackerrank.com/domains/c"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is a Pointer variable? How do & and * operators differ? (2 Marks)",
        "Explain Call by Reference with a swap function example. (2 Marks)",
        "What is a NULL pointer and a Dangling pointer? (2 Marks)"
      ],
      "sixMarks": [
        "Write a C program to swap two numbers using Call by Reference. Explain pointer execution steps. (6 Marks)",
        "Explain Pointer Arithmetic rules (Incrementing, Decrementing, Subtracting pointers) with code examples. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Pointers & Memory Mechanics. Detail pointer size across 32-bit vs 64-bit systems, pointer to pointer (double pointer `**`), array name vs pointer variable equivalence, function pointers syntax (`int (*fp)(int, int)`), and void generic pointers. (10 Marks)"
      ]
    }
  },
  {
    "title": "Structures and Unions",
    "slug": "c-programming-structures-and-unions",
    "order": 10,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Learn user-defined data types: Structures (`struct`), member access dot (`.`) and arrow (`->`) operators, array of structures, nested structures, and memory comparison with `union`.",
    "subTopics": [
      "Introduction to Structures",
      "Defining Structures",
      "Accessing Structure Members",
      "Array of Structures",
      "Nested Structures",
      "Structure with Functions",
      "Introduction to Unions",
      "Difference Between Structures and Unions"
    ],
    "prerequisiteTitles": [
      "Pointers in C"
    ],
    "learningObjectives": [
      "Define heterogenous user-defined data structures (`struct`).",
      "Manipulate Arrays of Structures for record management (Student database).",
      "Contrast `struct` (separate member memory) and `union` (shared member memory)."
    ],
    "notes": [
      {
        "title": "Structures, Array of Structures & Union Memory Layout Code",
        "content": "STRUCTURES AND UNIONS IN C\n\n#include <stdio.h>\n\n// Structure Definition\nstruct Student {\n    int id;\n    char name[30];\n    float marks;\n};\n\n// Union Definition (Shared Memory)\nunion Data {\n    int i;\n    float f;\n    char c;\n};\n\nint main() {\n    // Array of Structures\n    struct Student s[2] = {\n        {101, \"Alice\", 92.5},\n        {102, \"Bob\", 88.0}\n    };\n\n    for (int i = 0; i < 2; i++) {\n        printf(\"ID: %d, Name: %s, Marks: %.1f\\n\", s[i].id, s[i].name, s[i].marks);\n    }\n\n    // Structure vs Union Size Comparison\n    printf(\"Size of struct Student: %lu bytes\\n\", sizeof(struct Student));\n    printf(\"Size of union Data: %lu bytes\\n\", sizeof(union Data));\n\n    return 0;\n}"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Programming in ANSI C",
        "author": "E. Balagurusamy"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks C Structures Exercises",
        "url": "https://www.geeksforgeeks.org/structures-c/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is a Structure in C? How does it differ from an Array? (2 Marks)",
        "Differentiate between Structure and Union regarding memory allocation and member access. (2 Marks)",
        "Explain the arrow operator (->) used with structure pointers. (2 Marks)"
      ],
      "sixMarks": [
        "Write a C program using an Array of Structures to store and display records of 5 Employees (ID, Name, Salary). (6 Marks)",
        "Explain Nested Structures and passing structure to functions by value and by reference with code snippets. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on User-Defined Data Types in C. Detail memory alignment & structure padding, typedef alias creation, structure pointer arrow operator `ptr->member`, unions shared memory overlay, and bit-fields syntax for hardware register mapping. (10 Marks)"
      ]
    }
  },
  {
    "title": "File Handling in C",
    "slug": "c-programming-file-handling-in-c",
    "order": 11,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Master persistent file I/O: FILE pointer, opening modes (\"r\", \"w\", \"a\", \"r+\", \"wb\"), closing files (`fclose`), formatted file I/O (`fprintf`, `fscanf`), and character I/O (`fgetc`, `fputc`).",
    "subTopics": [
      "Introduction to File Handling",
      "File Types",
      "Opening and Closing Files",
      "Reading from Files",
      "Writing to Files",
      "File Operations (fopen, fclose, fprintf, fscanf)",
      "File-based Applications"
    ],
    "prerequisiteTitles": [
      "Structures and Unions"
    ],
    "learningObjectives": [
      "Open, write, read, and close text and binary files in C safely.",
      "Check file opening errors (`FILE *fp == NULL`).",
      "Process file records using `fprintf()`, `fscanf()`, `fread()`, and `fwrite()`."
    ],
    "notes": [
      {
        "title": "C File Writing, Reading & Error Handling Code",
        "content": "FILE HANDLING IN C\n\n#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    FILE *fp;\n\n    // 1. Writing to a Text File\n    fp = fopen(\"output.txt\", \"w\");\n    if (fp == NULL) {\n        printf(\"Error opening file!\\n\");\n        exit(1);\n    }\n    fprintf(fp, \"ID: %d, Name: %s, Score: %.2f\\n\", 101, \"Alice\", 95.5);\n    fclose(fp);\n    printf(\"File written successfully.\\n\");\n\n    // 2. Reading from a Text File\n    fp = fopen(\"output.txt\", \"r\");\n    if (fp == NULL) {\n        printf(\"Error opening file for reading!\\n\");\n        exit(1);\n    }\n\n    char ch;\n    printf(\"File Content:\\n\");\n    while ((ch = fgetc(fp)) != EOF) {\n        putchar(ch);\n    }\n    fclose(fp);\n\n    return 0;\n}"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Let Us C",
        "author": "Yashavant Kanetkar"
      }
    ],
    "practiceLinks": [
      {
        "title": "Sanfoundry C File Handling Questions",
        "url": "https://www.sanfoundry.com/c-programming-questions-answers-file-handling/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State four file opening modes in C (\"r\", \"w\", \"a\", \"r+\") and their functions. (2 Marks)",
        "What is the significance of checking `if (fp == NULL)` after `fopen()`? (2 Marks)",
        "What is EOF in C file handling? (2 Marks)"
      ],
      "sixMarks": [
        "Write a C program to copy contents from an existing text file `source.txt` to a new file `destination.txt`. (6 Marks)",
        "Explain file handling functions `fopen()`, `fclose()`, `fprintf()`, `fscanf()`, `fseek()`, and `ftell()` with syntax. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Persistent File I/O in C. Detail text vs binary file modes, buffer management, random access file positioning (`fseek`, `ftell`, `rewind`), block I/O (`fread`, `fwrite`), and error handling functions (`ferror`, `feof`). (10 Marks)"
      ]
    }
  },
  {
    "title": "Dynamic Memory Allocation",
    "slug": "c-programming-dynamic-memory-allocation",
    "order": 12,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Master runtime heap memory management: Stack vs Heap memory, `malloc()`, `calloc()`, `realloc()`, `free()`, dynamic 1D/2D arrays, and Memory Leaks.",
    "subTopics": [
      "Memory Management Concepts",
      "Stack and Heap Memory",
      "malloc()",
      "calloc()",
      "realloc()",
      "free()",
      "Dynamic Arrays",
      "Memory Leak Basics"
    ],
    "prerequisiteTitles": [
      "Pointers in C"
    ],
    "learningObjectives": [
      "Differentiate Stack memory (automatic) and Heap memory (dynamic runtime).",
      "Allocate runtime heap memory using `malloc()`, `calloc()`, and resize using `realloc()`.",
      "Deallocate memory using `free()` to prevent Memory Leaks and Dangling Pointers."
    ],
    "notes": [
      {
        "title": "Dynamic Allocation: malloc, calloc, realloc & free Code",
        "content": "DYNAMIC MEMORY ALLOCATION IN C\n\n#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int n = 5;\n\n    // 1. malloc() - Allocates uninitialized memory block\n    int *arr = (int*) malloc(n * sizeof(int));\n    if (arr == NULL) {\n        printf(\"Memory allocation failed!\\n\");\n        return 1;\n    }\n\n    for (int i = 0; i < n; i++) arr[i] = (i + 1) * 10;\n\n    // 2. realloc() - Resizes existing dynamic memory block to n=8\n    arr = (int*) realloc(arr, 8 * sizeof(int));\n    for (int i = 5; i < 8; i++) arr[i] = (i + 1) * 10;\n\n    printf(\"Dynamic Array: \");\n    for (int i = 0; i < 8; i++) printf(\"%d \", arr[i]);\n    printf(\"\\n\");\n\n    // 3. free() - Release allocated heap memory to avoid Memory Leak\n    free(arr);\n    arr = NULL; // Prevent dangling pointer\n\n    return 0;\n}"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "The C Programming Language",
        "author": "Kernighan & Ritchie"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Dynamic Memory Allocation C",
        "url": "https://www.geeksforgeeks.org/dynamic-memory-allocation-in-c-using-malloc-calloc-free-and-realloc/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Compare malloc() and calloc() functions in C. (2 Marks)",
        "What is a Memory Leak? How is it prevented in C? (2 Marks)",
        "Differentiate between Stack memory and Heap memory. (2 Marks)"
      ],
      "sixMarks": [
        "Write a C program to dynamically allocate memory for N integers using `malloc()`, find their sum and average, and release memory using `free()`. (6 Marks)",
        "Explain `realloc()` function usage with code demonstrating resizing a dynamic array. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Heap Memory Management in C. Detail memory layout of a C program (Text, Data, BSS, Stack, Heap), malloc/free internal metadata headers, fragmentation issues, memory leaks, and dynamic 2D array allocation using array of pointers. (10 Marks)"
      ]
    }
  },
  {
    "title": "Data Structures Implementation Using C",
    "slug": "c-programming-data-structures-implementation-using-c",
    "order": 13,
    "estimatedHours": 6,
    "difficulty": "Advanced",
    "description": "Implement fundamental data structures in C: Stack using array (Push, Pop, Peek), Queue using array (Enqueue, Dequeue), and Singly Linked List node structures.",
    "subTopics": [
      "Introduction to Data Structures",
      "Stack Implementation Using Arrays",
      "Queue Implementation Using Arrays",
      "Linked List Basics",
      "Searching Algorithms Implementation",
      "Sorting Algorithms Implementation"
    ],
    "prerequisiteTitles": [
      "Pointers in C",
      "Structures and Unions",
      "Dynamic Memory Allocation"
    ],
    "learningObjectives": [
      "Implement Stack data structure operations (Push, Pop) adhering to LIFO principle.",
      "Implement Queue data structure operations (Enqueue, Dequeue) adhering to FIFO principle.",
      "Define Singly Linked List node structure with pointer next referencing next node."
    ],
    "notes": [
      {
        "title": "Stack (Array) & Linked List Node Implementation Code",
        "content": "DATA STRUCTURES IN C: STACK & LINKED LIST\n\n#include <stdio.h>\n#include <stdlib.h>\n#define MAX 5\n\n// 1. Stack Implementation using Array\nint stack[MAX], top = -1;\n\nvoid push(int val) {\n    if (top == MAX - 1) printf(\"Stack Overflow!\\n\");\n    else stack[++top] = val;\n}\n\nint pop() {\n    if (top == -1) { printf(\"Stack Underflow!\\n\"); return -1; }\n    return stack[top--];\n}\n\n// 2. Singly Linked List Node Definition\nstruct Node {\n    int data;\n    struct Node *next;\n};\n\nvoid printList(struct Node *head) {\n    struct Node *curr = head;\n    while (curr != NULL) {\n        printf(\"%d -> \", curr->data);\n        curr = curr->next;\n    }\n    printf(\"NULL\\n\");\n}\n\nint main() {\n    push(10); push(20); push(30);\n    printf(\"Popped: %d\\n\", pop());\n\n    // Creating linked list nodes\n    struct Node *head = (struct Node*)malloc(sizeof(struct Node));\n    head->data = 100;\n    head->next = (struct Node*)malloc(sizeof(struct Node));\n    head->next->data = 200;\n    head->next->next = NULL;\n\n    printList(head);\n    return 0;\n}"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Data Structures Using C",
        "author": "Reema Thareja"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks C Data Structures",
        "url": "https://www.geeksforgeeks.org/c-data-structures/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define a Stack and state its LIFO principle. (2 Marks)",
        "Define a Queue and state its FIFO principle. (2 Marks)",
        "What is a Node in a Singly Linked List? (2 Marks)"
      ],
      "sixMarks": [
        "Write a complete C program to implement Stack operations (Push, Pop, Display) using an array. (6 Marks)",
        "Write a C program to implement Enqueue and Dequeue operations of a Queue using an array. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Data Structures Implementation in C. Detail Stack Push/Pop overflow/underflow checks, Queue Enqueue/Dequeue Front/Rear index tracking, Singly Linked List node insertion at beginning/end, and memory comparison between Arrays and Linked Lists. (10 Marks)"
      ]
    }
  },
  {
    "title": "Problem Solving Techniques Using C",
    "slug": "c-programming-problem-solving-techniques-using-c",
    "order": 14,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Develop practical algorithmic problem-solving skills: Star patterns, Number operations (GCD, LCM, Armstrong, Palindrome), Array manipulation, and Logical programming.",
    "subTopics": [
      "Breaking Problems into Steps",
      "Algorithm Design",
      "Pattern Problems",
      "Mathematical Problems",
      "Number-based Problems",
      "Array Problems",
      "String Problems",
      "Logical Programming Problems"
    ],
    "prerequisiteTitles": [
      "Looping and Iterations",
      "Arrays in C"
    ],
    "learningObjectives": [
      "Deconstruct complex specifications into step-by-step algorithms.",
      "Solve number-theoretic problems (GCD using Euclidean algorithm, Armstrong number, Prime factors).",
      "Write C programs for Pyramid patterns and Matrix rotations."
    ],
    "notes": [
      {
        "title": "GCD Euclidean Algorithm & Armstrong Number Code",
        "content": "PROBLEM SOLVING PATTERNS IN C\n\n#include <stdio.h>\n#include <math.h>\n\n// Euclidean GCD Algorithm\nint gcd(int a, int b) {\n    while (b != 0) {\n        int temp = b;\n        b = a % b;\n        a = temp;\n    }\n    return a;\n}\n\n// Armstrong Number Check (e.g. 153 = 1^3 + 5^3 + 3^3)\nint isArmstrong(int num) {\n    int original = num, sum = 0, digits = 0;\n    int temp = num;\n    while (temp > 0) { digits++; temp /= 10; }\n\n    temp = num;\n    while (temp > 0) {\n        int rem = temp % 10;\n        sum += pow(rem, digits);\n        temp /= 10;\n    }\n    return (sum == original);\n}\n\nint main() {\n    printf(\"GCD of 48 and 18 = %d\\n\", gcd(48, 18));\n\n    int n = 153;\n    if (isArmstrong(n)) printf(\"%d is an Armstrong Number!\\n\", n);\n    else printf(\"%d is NOT an Armstrong Number!\\n\", n);\n\n    return 0;\n}"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "How to Solve It by Computer",
        "author": "R.G. Dromey"
      }
    ],
    "practiceLinks": [
      {
        "title": "LeetCode C Problem Solving",
        "url": "https://leetcode.com/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is an Armstrong Number? Give one example. (2 Marks)",
        "State the Euclidean algorithm method for finding GCD of two integers. (2 Marks)",
        "Explain step-by-step problem-solving strategy for programming. (2 Marks)"
      ],
      "sixMarks": [
        "Write a C program to find the GCD and LCM of two numbers. (6 Marks)",
        "Write a C program to generate and print Pyramid star pattern of height N. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Algorithmic Problem Solving in C. Detail modular decomposition, step-wise refinement, mathematical problem algorithms (Armstrong, Strong number, Perfect number), and array manipulation techniques (Frequency count, sub-array sum). (10 Marks)"
      ]
    }
  },
  {
    "title": "Basic Algorithms Implementation in C",
    "slug": "c-programming-basic-algorithms-implementation-in-c",
    "order": 15,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Implement fundamental searching & sorting algorithms in C: Linear Search, Binary Search ($O(log N)$), Bubble Sort, Selection Sort, Insertion Sort, and Big-O Time Complexity analysis.",
    "subTopics": [
      "Linear Search",
      "Binary Search",
      "Bubble Sort",
      "Selection Sort",
      "Insertion Sort",
      "Recursion Problems",
      "Basic Time Complexity Introduction"
    ],
    "prerequisiteTitles": [
      "Arrays in C",
      "Functions in C"
    ],
    "learningObjectives": [
      "Implement Linear Search $O(N)$ and Binary Search $O(log N)$ on sorted arrays.",
      "Implement Bubble Sort, Selection Sort, and Insertion Sort $O(N^2)$.",
      "Analyze Best, Average, and Worst-case Time Complexity of sorting algorithms."
    ],
    "notes": [
      {
        "title": "Binary Search & Bubble Sort C Implementation Code",
        "content": "SEARCHING AND SORTING ALGORITHMS IN C\n\n#include <stdio.h>\n\n// Binary Search O(log N) - Requires Sorted Array\nint binarySearch(int arr[], int size, int target) {\n    int low = 0, high = size - 1;\n    while (low <= high) {\n        int mid = low + (high - low) / 2;\n        if (arr[mid] == target) return mid;\n        else if (arr[mid] < target) low = mid + 1;\n        else high = mid - 1;\n    }\n    return -1; // Target not found\n}\n\n// Bubble Sort O(N^2)\nvoid bubbleSort(int arr[], int size) {\n    for (int i = 0; i < size - 1; i++) {\n        for (int j = 0; j < size - 1 - i; j++) {\n            if (arr[j] > arr[j + 1]) {\n                int temp = arr[j];\n                arr[j] = arr[j + 1];\n                arr[j + 1] = temp;\n            }\n        }\n    }\n}\n\nint main() {\n    int data[] = {64, 25, 12, 22, 11};\n    int n = 5;\n\n    bubbleSort(data, n);\n    printf(\"Sorted Array: \");\n    for (int i = 0; i < n; i++) printf(\"%d \", data[i]);\n    printf(\"\\n\");\n\n    int idx = binarySearch(data, n, 22);\n    if (idx != -1) printf(\"Element 22 found at index: %d\\n\", idx);\n\n    return 0;\n}"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Data Structures and Algorithm Analysis in C",
        "author": "Mark Allen Weiss"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks C Searching and Sorting",
        "url": "https://www.geeksforgeeks.org/sorting-algorithms/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Compare Linear Search O(N) and Binary Search O(log N) algorithms. (2 Marks)",
        "What is the prerequisite condition for executing Binary Search? (2 Marks)",
        "State worst-case time complexity of Bubble Sort, Selection Sort, and Insertion Sort. (2 Marks)"
      ],
      "sixMarks": [
        "Write a C program to implement Binary Search algorithm on a sorted array of N integers. Trace execution for target search. (6 Marks)",
        "Write a C program to sort an array of N integers in ascending order using Bubble Sort algorithm. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Basic Algorithms in C. Detail Linear vs Binary Search comparisons, Bubble vs Selection vs Insertion Sort pass-by-pass mechanics, Big-O asymptotic notation ($O(1), O(log N), O(N), O(N^2)$), and space complexity analysis. (10 Marks)"
      ]
    }
  },
  {
    "title": "C Programming Practice and Projects",
    "slug": "c-programming-practice-and-projects",
    "order": 16,
    "estimatedHours": 6,
    "difficulty": "Advanced",
    "description": "Build complete C projects: Arithmetic Calculator, Student Record Management System, Library System, Banking System mini-project with file storage.",
    "subTopics": [
      "Calculator Application",
      "Student Management System",
      "Library Management System",
      "Banking System Mini Project",
      "File Management Applications",
      "Problem Solving Practice Sets"
    ],
    "prerequisiteTitles": [
      "Structures and Unions",
      "File Handling in C",
      "Basic Algorithms Implementation in C"
    ],
    "learningObjectives": [
      "Synthesize C concepts (Structures, Pointers, Functions, File I/O) into complete software applications.",
      "Implement CRUD operations on persistent file records (Student/Bank database).",
      "Design user-friendly CLI interfaces using loop menus and formatted tables."
    ],
    "notes": [
      {
        "title": "Student Record Management System Project Code Blueprint",
        "content": "C MINI PROJECT: STUDENT MANAGEMENT SYSTEM\n\n#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nstruct Student {\n    int rollNo;\n    char name[40];\n    float marks;\n};\n\nvoid addStudent() {\n    FILE *fp = fopen(\"students.dat\", \"ab\");\n    if (!fp) return;\n\n    struct Student s;\n    printf(\"Enter Roll No, Name, Marks: \");\n    scanf(\"%d %s %f\", &s.rollNo, s.name, &s.marks);\n\n    fwrite(&s, sizeof(struct Student), 1, fp);\n    fclose(fp);\n    printf(\"Record Saved Successfully!\\n\");\n}\n\nvoid displayStudents() {\n    FILE *fp = fopen(\"students.dat\", \"rb\");\n    if (!fp) { printf(\"No records found!\\n\"); return; }\n\n    struct Student s;\n    printf(\"\\n--- STUDENT RECORDS ---\\n\");\n    while (fread(&s, sizeof(struct Student), 1, fp)) {\n        printf(\"Roll No: %d | Name: %-15s | Marks: %.2f\\n\", s.rollNo, s.name, s.marks);\n    }\n    fclose(fp);\n}\n\nint main() {\n    int choice;\n    while (1) {\n        printf(\"\\n1. Add Student\\n2. Display All\\n3. Exit\\nEnter choice: \");\n        scanf(\"%d\", &choice);\n        if (choice == 1) addStudent();\n        else if (choice == 2) displayStudents();\n        else break;\n    }\n    return 0;\n}"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "C Projects",
        "author": "Yashavant Kanetkar"
      }
    ],
    "practiceLinks": [
      {
        "title": "GitHub C Mini Projects Repositories",
        "url": "https://github.com/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State four design modularity steps when building a C CLI project. (2 Marks)",
        "Why is binary file I/O (fread/fwrite) preferred over text I/O for database projects? (2 Marks)",
        "List main features of a C Banking System mini-project. (2 Marks)"
      ],
      "sixMarks": [
        "Design system architecture and function prototypes for a Student Management System project supporting Add, Display, Search, and Delete operations. (6 Marks)",
        "Write a complete menu-driven C program for a Banking System allowing Deposit, Withdrawal, and Balance Enquiry functions. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on C Project Software Engineering. Detail modular design, file persistence storage formats, input validation routines, error handling, CLI menu rendering, and full source code for a Library Management System project. (10 Marks)"
      ]
    }
  }
];
