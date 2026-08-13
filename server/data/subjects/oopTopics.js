module.exports = [
  {
    "title": "Introduction to Object Oriented Programming",
    "slug": "oop-introduction-to-object-oriented-programming",
    "order": 1,
    "estimatedHours": 3,
    "difficulty": "Beginner",
    "description": "Fundamentals of Object Oriented Programming: OOP vs Procedural Programming, core paradigms, benefits, supported languages, and real-world software applications.",
    "subTopics": [
      "Introduction to OOP Concepts",
      "Need for Object Oriented Programming",
      "Procedural Programming vs Object Oriented Programming",
      "Advantages of OOP",
      "Object Oriented Programming Languages",
      "Real-World Applications of OOP"
    ],
    "prerequisiteTitles": [],
    "learningObjectives": [
      "Distinguish between Procedural (POP) and Object-Oriented Programming (OOP).",
      "Identify the 4 primary pillars of OOP: Encapsulation, Abstraction, Inheritance, and Polymorphism.",
      "Understand how real-world entity modeling improves software scalability and maintainability."
    ],
    "notes": [
      {
        "title": "OOP PARADIGM & POP VS OOP COMPARISON",
        "content": "1. PROCEDURAL VS OBJECT-ORIENTED PROGRAMMING:\n\nFeature                | Procedural (POP)             | Object-Oriented (OOP)\n-----------------------|------------------------------|-----------------------------\nFocus                  | Functions / Algorithms       | Data / Objects\nStructure              | Top-Down Approach            | Bottom-Up Approach\nData Security          | Low (Global data access)     | High (Data hiding & access specifiers)\nReusability            | Limited (Function calls)     | High (Inheritance & Polymorphism)\nCode Maintenance       | Hard for large projects      | Easy via Modular Class Structures\nExample Languages      | C, Pascal, FORTRAN           | C++, Java, Python, C#\n\n2. CODE EXAMPLE (C++, JAVA & PYTHON COMPARISON):\n\n// --- C++ Implementation ---\n#include <iostream>\nclass Car {\npublic:\n    std::string brand;\n    void drive() {\n        std::cout << brand << \" is driving smoothly.\" << std::endl;\n    }\n};\n\n// --- Java Implementation ---\npublic class Main {\n    static class Car {\n        String brand = \"Tesla\";\n        void drive() {\n            System.out.println(brand + \" is driving silently.\");\n        }\n    }\n}\n\n# --- Python Implementation ---\nclass Car:\n    def __init__(self, brand):\n        self.brand = brand\n    def drive(self):\n        print(f\"{self.brand} is driving autonomously.\")\n\ncar = Car(\"BMW\")\ncar.drive()"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Object-Oriented Programming in C++",
        "author": "Robert Lafore"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks OOP Concepts",
        "url": "https://www.geeksforgeeks.org/object-oriented-programming-in-cpp/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define Object-Oriented Programming and list its four fundamental pillars. (2 Marks)",
        "State 3 key differences between Procedural Programming and Object-Oriented Programming. (2 Marks)",
        "What is an Object and how does it relate to a Class definition? (2 Marks)"
      ],
      "sixMarks": [
        "Explain the major advantages of OOP over POP with emphasis on code reusability, security, and modularity. (6 Marks)",
        "Compare OOP implementation capabilities across C++, Java, and Python with illustrative code samples. (6 Marks)"
      ],
      "longAnswer": [
        "Discuss the evolution of software design from structured procedural programming to modern object-oriented paradigms. Detail real-world software applications (GUI frameworks, Game engines, Enterprise systems) designed with OOP architecture. (10 Marks)"
      ]
    }
  },
  {
    "title": "Programming Fundamentals for OOP",
    "slug": "oop-programming-fundamentals-for-oop",
    "order": 2,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Core syntax and building blocks necessary for OOP: Data types, variables, control flow, functions, methods, and stack vs heap memory management.",
    "subTopics": [
      "Basic Programming Concepts",
      "Variables and Data Types",
      "Operators",
      "Control Statements",
      "Conditional Statements",
      "Looping Statements",
      "Functions and Methods",
      "Memory Management Basics"
    ],
    "prerequisiteTitles": [
      "Introduction to Object Oriented Programming"
    ],
    "learningObjectives": [
      "Master control structures, conditional branching, and loop control for method implementations.",
      "Understand function signatures, parameter passing by value vs by reference.",
      "Differentiate between Stack allocation (automatic) and Heap allocation (dynamic)."
    ],
    "notes": [
      {
        "title": "MEMORY MANAGEMENT & METHOD STRUCTURES",
        "content": "1. STACK VS HEAP MEMORY LAYOUT IN OOP:\n\n+-------------------------------------------------------------+\n| STACK MEMORY                                                |\n| - Stores local variables & function call stack frames       |\n| - Fast allocation/deallocation (LIFO order)                |\n| - Fixed size limit                                          |\n+-------------------------------------------------------------+\n| HEAP MEMORY                                                 |\n| - Stores objects created dynamically via 'new' / 'malloc'   |\n| - Flexible size, explicit management (or Garbage Collector)|\n| - Requires pointers / references                            |\n+-------------------------------------------------------------+\n\n2. C++ & JAVA MEMORY ALLOCATION EXAMPLE:\n\n// C++ Stack vs Heap Object Creation\n#include <iostream>\nclass Point {\npublic:\n    int x, y;\n    Point(int xVal, int yVal) : x(xVal), y(yVal) {}\n};\n\nint main() {\n    Point p1(10, 20);          // Stack Allocation (auto-destroyed)\n    Point* p2 = new Point(30, 40); // Heap Allocation (dynamic)\n    delete p2;                  // Manual Deallocation\n    return 0;\n}"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "C++ Primer",
        "author": "Stanley B. Lippman"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks C++ Memory Management",
        "url": "https://www.geeksforgeeks.org/memory-management-in-cpp/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is the difference between Primitive Data Types and Reference/Object Data Types? (2 Marks)",
        "Explain Pass by Value vs Pass by Reference in OOP methods. (2 Marks)",
        "Differentiate Stack memory and Heap memory allocation for objects. (2 Marks)"
      ],
      "sixMarks": [
        "Explain memory allocation mechanisms for objects created on Stack vs Heap with C++ or Java code examples. (6 Marks)",
        "Demonstrate control flow and function method modularization in building class behaviors. (6 Marks)"
      ],
      "longAnswer": [
        "Analyze memory lifecycle management in native languages (C++) vs garbage-collected languages (Java/Python). Discuss memory leaks, pointer safety, and stack unwinding. (10 Marks)"
      ]
    }
  },
  {
    "title": "Classes and Objects",
    "slug": "oop-classes-and-objects",
    "order": 3,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Core mechanisms of Classes and Objects: Blueprint creation, object instantiation, member fields, method invocation, default/parameterized constructors, and destructors.",
    "subTopics": [
      "Introduction to Classes",
      "Introduction to Objects",
      "Class Definition",
      "Object Creation",
      "Object State and Behavior",
      "Instance Variables",
      "Methods",
      "Accessing Class Members",
      "Constructors",
      "Destructors"
    ],
    "prerequisiteTitles": [
      "Programming Fundamentals for OOP"
    ],
    "learningObjectives": [
      "Define classes containing member variables (state) and member functions (behavior).",
      "Instantiate multiple objects and manage their independent instance states.",
      "Implement Default Constructors, Parameterized Constructors, Copy Constructors, and Destructors."
    ],
    "notes": [
      {
        "title": "CLASSES, OBJECTS & CONSTRUCTOR LIFECYCLE",
        "content": "1. CLASS DIAGRAM ARCHITECTURE:\n\n+---------------------------------------+\n|               Student                 |\n+---------------------------------------+\n| - studentId : int                     |\n| - name : String                       |\n| - gpa : double                        |\n+---------------------------------------+\n| + Student(id: int, n: String, g: dbl) |\n| + displayDetails() : void             |\n| + ~Student()                          |\n+---------------------------------------+\n\n2. CODE IMPLEMENTATION (C++ & JAVA):\n\n// --- C++ Implementation ---\n#include <iostream>\n#include <string>\n\nclass Student {\nprivate:\n    int studentId;\n    std::string name;\n    double gpa;\npublic:\n    // Parameterized Constructor\n    Student(int id, std::string n, double g) : studentId(id), name(n), gpa(g) {\n        std::cout << \"Constructor called for \" << name << std::endl;\n    }\n    // Destructor\n    ~Student() {\n        std::cout << \"Destructor called for \" << name << std::endl;\n    }\n    void displayDetails() const {\n        std::cout << \"ID: \" << studentId << \" | Name: \" << name << \" | GPA: \" << gpa << std::endl;\n    }\n};\n\nint main() {\n    Student s1(101, \"Alice\", 3.9);\n    s1.displayDetails();\n    return 0;\n}"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Thinking in Java",
        "author": "Bruce Eckel"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Classes and Objects in C++",
        "url": "https://www.geeksforgeeks.org/c-classes-and-objects/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is a Constructor? How does it differ from a regular member method? (2 Marks)",
        "Explain the role of Destructors in C++. Why does Java not use explicit destructors? (2 Marks)",
        "What is the difference between Instance Variables and Local Variables? (2 Marks)"
      ],
      "sixMarks": [
        "Explain Constructor Overloading with a C++ or Java program creating multiple instances with different constructor arguments. (6 Marks)",
        "Write a complete C++ program defining a BankAccount class with deposit, withdraw, and display methods. (6 Marks)"
      ],
      "longAnswer": [
        "Detail the complete object initialization and destruction sequence. Discuss memory cleanup, resource deallocation in destructors, and copy constructor behavior during object creation. (10 Marks)"
      ]
    }
  },
  {
    "title": "Encapsulation",
    "slug": "oop-encapsulation",
    "order": 4,
    "estimatedHours": 3,
    "difficulty": "Beginner",
    "description": "Encapsulation & Data Hiding: Binding data and methods into a single unit, public/private/protected access control, getter/setter methods, and invariant enforcement.",
    "subTopics": [
      "Introduction to Encapsulation",
      "Data Hiding",
      "Access Specifiers",
      "Public",
      "Private",
      "Protected",
      "Getters and Setters",
      "Advantages of Encapsulation"
    ],
    "prerequisiteTitles": [
      "Classes and Objects"
    ],
    "learningObjectives": [
      "Protect internal object state using `private` and `protected` access specifiers.",
      "Implement public Getter and Setter methods with validation logic.",
      "Ensure immutability and state validation across software components."
    ],
    "notes": [
      {
        "title": "ENCAPSULATION & ACCESS SPECIFIERS MATRIX",
        "content": "1. ACCESS SPECIFIER VISIBILITY TABLE:\n\nAccess Specifier | Same Class | Derived Class | Outside World\n-----------------|------------|---------------|--------------\nprivate          | YES        | NO            | NO\nprotected        | YES        | YES           | NO\npublic           | YES        | YES           | YES\n\n2. CODE EXAMPLE WITH VALIDATION LOGIC (C++ & JAVA):\n\n// --- C++ Implementation ---\n#include <iostream>\n#include <stdexcept>\n\nclass Employee {\nprivate:\n    double salary;\npublic:\n    void setSalary(double sal) {\n        if (sal < 0) {\n            throw std::invalid_argument(\"Salary cannot be negative\");\n        }\n        salary = sal;\n    }\n    double getSalary() const {\n        return salary;\n    }\n};\n\n// --- Java Implementation ---\npublic class BankAccount {\n    private double balance;\n    public void deposit(double amount) {\n        if (amount > 0) balance += amount;\n    }\n    public double getBalance() { return balance; }\n}"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Effective Java",
        "author": "Joshua Bloch"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Encapsulation in C++",
        "url": "https://www.geeksforgeeks.org/encapsulation-in-c/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define Encapsulation and Data Hiding. How are they related? (2 Marks)",
        "Differentiate between `private`, `protected`, and `public` access specifiers. (2 Marks)",
        "Why should instance variables generally be kept `private`? (2 Marks)"
      ],
      "sixMarks": [
        "Explain how Encapsulation enforces data validation using Getters and Setters with a C++ or Java code sample. (6 Marks)",
        "Discuss the security and architectural advantages of Encapsulation in large software frameworks. (6 Marks)"
      ],
      "longAnswer": [
        "Design an Encapsulated User Authentication and Wallet System class hierarchy. Show how private credentials, balance variables, and public transactional methods maintain object invariants and prevent unauthorized state mutation. (10 Marks)"
      ]
    }
  },
  {
    "title": "Abstraction",
    "slug": "oop-abstraction",
    "order": 5,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Abstraction & Interface Design: Hiding complex implementation details, Abstract Classes, Pure Virtual Functions in C++, Interfaces in Java, and contract-driven design.",
    "subTopics": [
      "Introduction to Abstraction",
      "Abstract Classes",
      "Abstract Methods",
      "Interfaces",
      "Implementation Hiding",
      "Real-World Examples of Abstraction"
    ],
    "prerequisiteTitles": [
      "Encapsulation"
    ],
    "learningObjectives": [
      "Distinguish between Abstraction (hiding complexity) and Encapsulation (hiding data).",
      "Define Abstract Classes and Pure Virtual Functions in C++ (`virtual void draw() = 0;`).",
      "Utilize Java/Python Interfaces to achieve 100% abstract contract specifications."
    ],
    "notes": [
      {
        "title": "ABSTRACTION & INTERFACE CONTRACT DESIGN",
        "content": "1. ABSTRACTION ARCHITECTURE (PAYMENT GATEWAY ENGINE):\n\n+---------------------------------------+\n|         <<Interface>> Payment         |\n+---------------------------------------+\n| + processPayment(amount: dbl) : bool  |\n+---------------------------------------+\n                  ^ \n       ___________|___________\n      |                       |\n+-------------------+   +-------------------+\n|   CreditCardPay   |   |     PayPalPay     |\n+-------------------+   +-------------------+\n| + processPayment()|   | + processPayment()|\n+-------------------+   +-------------------+\n\n2. C++ & JAVA IMPLEMENTATION:\n\n// --- C++ Pure Virtual Abstract Class ---\n#include <iostream>\nclass Shape {\npublic:\n    virtual void draw() = 0; // Pure Virtual Function\n    virtual ~Shape() {}\n};\n\nclass Circle : public Shape {\npublic:\n    void draw() override {\n        std::cout << \"Drawing Circle with radius.\" << std::endl;\n    }\n};\n\n// --- Java Interface ---\ninterface Drawable {\n    void draw();\n}"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Head First Design Patterns",
        "author": "Eric Freeman"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Abstraction in C++",
        "url": "https://www.geeksforgeeks.org/abstraction-in-cpp/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is Abstraction in OOP? Give a real-world example. (2 Marks)",
        "What is an Abstract Class? Can an abstract class be instantiated directly? (2 Marks)",
        "What is a Pure Virtual Function in C++? (2 Marks)"
      ],
      "sixMarks": [
        "Compare Abstract Classes and Interfaces highlighting method implementation capabilities, multiple inheritance, and field definitions. (6 Marks)",
        "Write a C++ program implementing an abstract `Shape` class derived into `Rectangle` and `Circle` computing area. (6 Marks)"
      ],
      "longAnswer": [
        "Discuss Abstraction as the core software engineering paradigm for building decoupled plugins and API frameworks. Provide complete C++/Java code for a Payment Processing Gateway handling CreditCard and UPI payment modes via an abstract interface. (10 Marks)"
      ]
    }
  },
  {
    "title": "Inheritance",
    "slug": "oop-inheritance",
    "order": 6,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Inheritance mechanisms: Single, Multiple, Multilevel, Hierarchical, and Hybrid inheritance, base/derived class constructors, method overriding, and Diamond Problem resolution.",
    "subTopics": [
      "Introduction to Inheritance",
      "Benefits of Inheritance",
      "Types of Inheritance",
      "Single Inheritance",
      "Multiple Inheritance",
      "Multilevel Inheritance",
      "Hierarchical Inheritance",
      "Hybrid Inheritance",
      "Base Class and Derived Class",
      "Method Overriding",
      "Inheritance Applications"
    ],
    "prerequisiteTitles": [
      "Abstraction"
    ],
    "learningObjectives": [
      "Implement Single, Multilevel, Hierarchical, and Multiple Inheritance models.",
      "Understand public, protected, and private inheritance specifiers in C++.",
      "Resolve the Diamond Problem using Virtual Base Classes in C++."
    ],
    "notes": [
      {
        "title": "INHERITANCE TYPES & DIAMOND PROBLEM RESOLUTION",
        "content": "1. TYPES OF INHERITANCE:\n\n[Single]         [Multilevel]        [Hierarchical]       [Multiple]       [Hybrid]\n A -> B           A -> B -> C          A -> B, A -> C     A, B -> C      A -> B,C -> D\n\n2. DIAMOND PROBLEM IN MULTIPLE INHERITANCE (C++ VIRTUAL BASE CLASS):\n\n#include <iostream>\nclass PoweredDevice {\npublic:\n    int powerRating;\n    PoweredDevice(int p) : powerRating(p) {}\n};\n\n// Virtual inheritance resolves duplicate base instance\nclass Scanner : virtual public PoweredDevice {\npublic:\n    Scanner(int p) : PoweredDevice(p) {}\n};\n\nclass Printer : virtual public PoweredDevice {\npublic:\n    Printer(int p) : PoweredDevice(p) {}\n};\n\nclass Copier : public Scanner, public Printer {\npublic:\n    Copier(int p) : PoweredDevice(p), Scanner(p), Printer(p) {}\n};"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "The C++ Programming Language",
        "author": "Bjarne Stroustrup"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Inheritance in C++",
        "url": "https://www.geeksforgeeks.org/inheritance-in-c/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is Inheritance and how does it promote code reusability? (2 Marks)",
        "List 5 types of Inheritance supported in C++. (2 Marks)",
        "Explain the Diamond Problem in Multiple Inheritance. How does Java avoid it? (2 Marks)"
      ],
      "sixMarks": [
        "Write a C++ program demonstrating Multilevel Inheritance with Person -> Employee -> Manager hierarchy. (6 Marks)",
        "Explain Virtual Base Classes in C++ and demonstrate how they resolve multiple inheritance ambiguity. (6 Marks)"
      ],
      "longAnswer": [
        "Design a comprehensive Vehicle Hierarchy System (Vehicle -> LandVehicle/WaterVehicle -> AmphibiousVehicle) using C++. Show base class constructor chaining, access control (`protected`), and method overriding across derived classes. (10 Marks)"
      ]
    }
  },
  {
    "title": "Polymorphism",
    "slug": "oop-polymorphism",
    "order": 7,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Polymorphism principles: Compile-time polymorphism (Function/Operator Overloading) vs Runtime polymorphism (Virtual Functions, Method Overriding, Dynamic Binding, VTABLE).",
    "subTopics": [
      "Introduction to Polymorphism",
      "Compile-Time Polymorphism",
      "Function Overloading",
      "Operator Overloading",
      "Run-Time Polymorphism",
      "Method Overriding",
      "Virtual Functions",
      "Dynamic Binding"
    ],
    "prerequisiteTitles": [
      "Inheritance"
    ],
    "learningObjectives": [
      "Implement Function Overloading and Operator Overloading (`operator+`, `operator<<`).",
      "Understand Virtual Functions (`virtual`), Virtual Method Tables (vtable), and Virtual Table Pointers (vptr).",
      "Achieve Dynamic Binding (Late Binding) for base pointer handling derived instances."
    ],
    "notes": [
      {
        "title": "COMPILE-TIME VS RUN-TIME POLYMORPHISM & VTABLE",
        "content": "1. POLYMORPHISM SPECTRUM:\n\nPolymorphism\n  ├── Compile-Time (Early Binding / Static)\n  │     ├── Function Overloading\n  │     └── Operator Overloading\n  └── Run-Time (Late Binding / Dynamic)\n        ├── Method Overriding\n        └── Virtual Functions (vtable/vptr mechanism)\n\n2. RUN-TIME POLYMORPHISM CODE EXAMPLE (C++):\n\n#include <iostream>\nclass Animal {\npublic:\n    virtual void makeSound() const { // Virtual Function\n        std::cout << \"Generic animal sound.\" << std::endl;\n    }\n    virtual ~Animal() {}\n};\n\nclass Dog : public Animal {\npublic:\n    void makeSound() const override {\n        std::cout << \"Woof! Woof!\" << std::endl;\n    }\n};\n\nint main() {\n    Animal* ptr = new Dog(); // Base pointer to derived object\n    ptr->makeSound();       // Outputs: Woof! Woof! (Dynamic binding)\n    delete ptr;\n    return 0;\n}"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Inside the C++ Object Model",
        "author": "Stanley B. Lippman"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Polymorphism in C++",
        "url": "https://www.geeksforgeeks.org/polymorphism-in-c/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define Polymorphism. Differentiate between Compile-Time and Run-Time Polymorphism. (2 Marks)",
        "What is Operator Overloading? Name 2 C++ operators that CANNOT be overloaded. (2 Marks)",
        "Explain Virtual Functions and the `override` keyword in C++. (2 Marks)"
      ],
      "sixMarks": [
        "Explain the internal mechanics of VTABLE (Virtual Table) and VPTR (Virtual Pointer) during dynamic dispatch. (6 Marks)",
        "Write a C++ program overloading the `+` operator to add two Complex numbers. (6 Marks)"
      ],
      "longAnswer": [
        "Demonstrate the power of Run-Time Polymorphism by designing a heterogeneous collection of Employee objects (FullTimeEmployee, ContractEmployee, CommissionEmployee) managed via an array of base class pointers (`Employee*`). Show polymorphic salary calculation and report generation. (10 Marks)"
      ]
    }
  },
  {
    "title": "Advanced OOP Concepts",
    "slug": "oop-advanced-oop-concepts",
    "order": 8,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Advanced object constructs: Static members/methods, Friend functions, Nested/Inner classes, Object Arrays, Deep Copy vs Shallow Copy, and Copy Constructors.",
    "subTopics": [
      "Static Members",
      "Friend Functions",
      "Nested Classes",
      "Object Arrays",
      "Passing Objects as Parameters",
      "Returning Objects from Functions",
      "Copy Constructors",
      "Deep Copy and Shallow Copy"
    ],
    "prerequisiteTitles": [
      "Polymorphism"
    ],
    "learningObjectives": [
      "Manage static memory shared across all class instances (`static` fields/methods).",
      "Grant encapsulation exceptions via C++ `friend` functions and friend classes.",
      "Master Copy Constructors, avoiding shallow copy double-free bugs by implementing Deep Copying."
    ],
    "notes": [
      {
        "title": "DEEP COPY VS SHALLOW COPY & FRIEND FUNCTIONS",
        "content": "1. SHALLOW VS DEEP COPYING MEMORY LAYOUT:\n\nShallow Copy (DANGEROUS with Pointers):\nObjA [ ptr ] -------> [ Heap Buffer ] <------- ObjB [ ptr ] (Double-Free on destruction!)\n\nDeep Copy (SAFE):\nObjA [ ptrA ] ------> [ Heap Buffer A ]\nObjB [ ptrB ] ------> [ Heap Buffer B (Duplicated) ]\n\n2. C++ DEEP COPY CONSTRUCTOR CODE EXAMPLE:\n\n#include <iostream>\n#include <cstring>\n\nclass StringHolder {\nprivate:\n    char* str;\npublic:\n    StringHolder(const char* s) {\n        str = new char[strlen(s) + 1];\n        strcpy(str, s);\n    }\n    // Deep Copy Constructor\n    StringHolder(const StringHolder& other) {\n        str = new char[strlen(other.str) + 1];\n        strcpy(str, other.str);\n    }\n    ~StringHolder() { delete[] str; }\n};"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Exceptional C++",
        "author": "Herb Sutter"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Copy Constructor in C++",
        "url": "https://www.geeksforgeeks.org/copy-constructor-in-cpp/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is a Static Member variable? How is it stored in memory? (2 Marks)",
        "Explain Friend Functions in C++. Why does Java not support friend functions? (2 Marks)",
        "Distinguish between Shallow Copy and Deep Copy. (2 Marks)"
      ],
      "sixMarks": [
        "Write a C++ class containing dynamic memory allocation that demonstrates why a custom Deep Copy Constructor is necessary to prevent runtime crashes. (6 Marks)",
        "Explain Friend Classes and static utility methods with an example showing private access sharing between related classes. (6 Marks)"
      ],
      "longAnswer": [
        "Detail memory management pitfalls in OOP involving dynamic pointer members. Compare shallow copy default copy constructors, deep copy copy constructors, copy assignment operators (`operator=`), and move constructors (`C++11 rvalue references`). (10 Marks)"
      ]
    }
  },
  {
    "title": "Exception Handling",
    "slug": "oop-exception-handling",
    "order": 9,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Robust error handling in OOP: Try-Catch blocks, Throw/Throws, Checked vs Unchecked exceptions, Custom User-Defined Exception classes, and RAII Exception Safety.",
    "subTopics": [
      "Introduction to Exceptions",
      "Types of Errors",
      "Exception Handling Mechanism",
      "Try-Catch Blocks",
      "Throw and Throws",
      "Custom Exceptions",
      "Exception Handling Best Practices"
    ],
    "prerequisiteTitles": [
      "Advanced OOP Concepts"
    ],
    "learningObjectives": [
      "Separate runtime error handling from business logic using `try`, `catch`, and `throw`.",
      "Build custom user-defined Exception classes inheriting from standard exception hierarchies.",
      "Enforce Exception Safety guarantees (Basic, Strong, Nothrow) using RAII pattern."
    ],
    "notes": [
      {
        "title": "EXCEPTION HANDLING FLOW & CUSTOM EXCEPTION HIERARCHY",
        "content": "1. EXCEPTION CONTROL FLOW:\n\n[ Try Block (Normal Code Execution) ]\n              │\n      (Error Occurs? Throw Exception)\n              │\n              ▼\n[ Catch Block (Match Exception Type & Handle Gracefully) ]\n              │\n              ▼\n[ Program Continues Safely ]\n\n2. C++ & JAVA CUSTOM EXCEPTION CODE EXAMPLE:\n\n// --- C++ Custom Exception ---\n#include <iostream>\n#include <exception>\n\nclass InsufficientBalanceException : public std::exception {\npublic:\n    const char* what() const noexcept override {\n        return \"Error: Account balance is insufficient for withdrawal!\";\n    }\n};\n\nvoid withdraw(double balance, double amount) {\n    if (amount > balance) throw InsufficientBalanceException();\n}\n\nint main() {\n    try {\n        withdraw(100.0, 500.0);\n    } catch (const std::exception& e) {\n        std::cerr << e.what() << std::endl;\n    }\n    return 0;\n}"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Clean Code",
        "author": "Robert C. Martin"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Exception Handling in C++",
        "url": "https://www.geeksforgeeks.org/exception-handling-in-c/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is an Exception? How does exception handling differ from traditional if-else error checking? (2 Marks)",
        "Explain `try`, `catch`, and `throw` keywords. (2 Marks)",
        "Differentiate between Checked and Unchecked Exceptions in Java. (2 Marks)"
      ],
      "sixMarks": [
        "Write a complete C++ or Java program defining a custom `InvalidAgeException` thrown when registering users under 18 years old. (6 Marks)",
        "Explain Stack Unwinding during exception handling and how destructors maintain resource cleanup. (6 Marks)"
      ],
      "longAnswer": [
        "Analyze Exception Safety levels in Object-Oriented software engineering: No-throw guarantee, Strong exception safety (commit or rollback), and Basic exception safety. Show how RAII (Resource Acquisition Is Initialization) prevents resource leaks during exceptions. (10 Marks)"
      ]
    }
  },
  {
    "title": "File Handling",
    "slug": "oop-file-handling",
    "order": 10,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "I/O stream streams and object persistence: File streams (ifstream, ofstream, fstream), binary file read/write, object serialization, deserialization, and file-backed databases.",
    "subTopics": [
      "Introduction to File Handling",
      "Reading Files",
      "Writing Files",
      "File Streams",
      "Binary Files",
      "Serialization and Deserialization",
      "File Management Applications"
    ],
    "prerequisiteTitles": [
      "Exception Handling"
    ],
    "learningObjectives": [
      "Persist object state to text and binary disk files using file streams (`fstream` in C++, `FileInputStream`/`FileOutputStream` in Java).",
      "Implement Object Serialization and Deserialization mechanisms.",
      "Develop CLI file-backed storage CRUD applications."
    ],
    "notes": [
      {
        "title": "BINARY FILE PERSISTENCE & SERIALIZATION",
        "content": "1. OBJECT SERIALIZATION & DESERIALIZATION:\n\n[ Object in RAM (Heap) ] ── (Serialize / write) ──> [ Binary File (.dat) ]\n[ Object in RAM (Heap) ] <── (Deserialize / read) ── [ Binary File (.dat) ]\n\n2. C++ BINARY OBJECT FILE PERSISTENCE CODE:\n\n#include <iostream>\n#include <fstream>\n\nstruct AccountData {\n    int accNo;\n    double balance;\n};\n\nint main() {\n    AccountData acc1 = {5001, 12500.75};\n    \n    // Write Binary\n    std::ofstream outFile(\"accounts.dat\", std::ios::binary);\n    outFile.write(reinterpret_cast<char*>(&acc1), sizeof(acc1));\n    outFile.close();\n\n    // Read Binary\n    AccountData acc2;\n    std::ifstream inFile(\"accounts.dat\", std::ios::binary);\n    inFile.read(reinterpret_cast<char*>(&acc2), sizeof(acc2));\n    inFile.close();\n\n    std::cout << \"Read Acc: \" << acc2.accNo << \" | Balance: $\" << acc2.balance << std::endl;\n    return 0;\n}"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "C++ Streams and File I/O",
        "author": "Nicolai M. Josuttis"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks File Handling in C++",
        "url": "https://www.geeksforgeeks.org/file-handling-c-classes/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is a Stream in file handling? Differentiate between `ifstream` and `ofstream`. (2 Marks)",
        "What is Object Serialization and why is it necessary for object persistence? (2 Marks)",
        "Explain the difference between Text file format and Binary file format. (2 Marks)"
      ],
      "sixMarks": [
        "Write a C++ program that writes an array of `Student` objects to a binary file and then reads them back to verify contents. (6 Marks)",
        "Explain File Pointers (`seekg`, `seekp`, `tellg`, `tellp`) and random access in binary file processing. (6 Marks)"
      ],
      "longAnswer": [
        "Design a File-Backed Employee Record Management CLI system in C++ or Java supporting Add Employee, Search by ID, Update Record, and Delete Record using binary file seeking and serialization. (10 Marks)"
      ]
    }
  },
  {
    "title": "Generic Programming",
    "slug": "oop-generic-programming",
    "order": 11,
    "estimatedHours": 4,
    "difficulty": "Advanced",
    "description": "Generics & Templates: Function templates, Class templates, template specialization, Java Generics type erasure, and Standard Template Library (STL) containers/iterators.",
    "subTopics": [
      "Introduction to Generics",
      "Templates",
      "Function Templates",
      "Class Templates",
      "Standard Template Library (STL) Basics",
      "Generic Programming Applications"
    ],
    "prerequisiteTitles": [
      "File Handling"
    ],
    "learningObjectives": [
      "Write type-independent reusable algorithms using Function Templates.",
      "Build generic data structures (Generic Stack, Generic Queue, Generic Vector) using Class Templates.",
      "Leverage C++ Standard Template Library (STL) containers (`vector`, `map`, `list`) and Java Generics (`List<T>`, `Map<K,V>`)."
    ],
    "notes": [
      {
        "title": "GENERIC TEMPLATES & STL CONTAINER ARCHITECTURE",
        "content": "1. GENERIC CLASS TEMPLATE & STL ARCHITECTURE:\n\n      +-----------------------------------------+\n      |       Template Class Stack<T>           |\n      +-----------------------------------------+\n      | - elements : vector<T>                  |\n      +-----------------------------------------+\n      | + push(item: T) : void                  |\n      | + pop() : T                             |\n      +-----------------------------------------+\n        /              |              \\\n    Stack<int>    Stack<string>   Stack<Employee>\n\n2. C++ TEMPLATE CLASS CODE EXAMPLE:\n\n#include <iostream>\n#include <vector>\n\ntemplate <typename T>\nclass GenericStack {\nprivate:\n    std::vector<T> items;\npublic:\n    void push(T val) { items.push_back(val); }\n    T pop() {\n        T topVal = items.back();\n        items.pop_back();\n        return topVal;\n    }\n    bool isEmpty() const { return items.empty(); }\n};\n\nint main() {\n    GenericStack<int> intStack;\n    intStack.push(42);\n    GenericStack<std::string> strStack;\n    strStack.push(\"Hello Generics\");\n    return 0;\n}"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "The C++ Standard Library",
        "author": "Nicolai M. Josuttis"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Templates in C++",
        "url": "https://www.geeksforgeeks.org/templates-cpp/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is Generic Programming? What problem do Templates solve in statically typed languages? (2 Marks)",
        "Explain Function Templates vs Class Templates in C++. (2 Marks)",
        "What is Template Specialization? (2 Marks)"
      ],
      "sixMarks": [
        "Write a C++ Generic Function Template `mySwap(T& a, T& b)` and test it with integer, float, and string variables. (6 Marks)",
        "Compare C++ Templates (compile-time code generation) with Java Generics (type erasure). (6 Marks)"
      ],
      "longAnswer": [
        "Implement a fully functional Generic Dynamic Array / Custom Vector class in C++ supporting `push_back()`, `pop_back()`, operator `[]`, dynamic memory reallocation upon overflow, and template specialization for `bool`. (10 Marks)"
      ]
    }
  },
  {
    "title": "Object Oriented Design Principles",
    "slug": "oop-object-oriented-design-principles",
    "order": 12,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Object-Oriented Design & SOLID Principles: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion, and coupling/cohesion optimization.",
    "subTopics": [
      "Software Design Principles",
      "SOLID Principles",
      "Single Responsibility Principle",
      "Open/Closed Principle",
      "Liskov Substitution Principle",
      "Interface Segregation Principle",
      "Dependency Inversion Principle",
      "Code Reusability",
      "Maintainable Software Design"
    ],
    "prerequisiteTitles": [
      "Generic Programming"
    ],
    "learningObjectives": [
      "Master all 5 SOLID design principles for building maintainable enterprise systems.",
      "Refactor tightly coupled monolithic classes into modular, open-for-extension architectures.",
      "Apply Dependency Inversion via Constructor Dependency Injection."
    ],
    "notes": [
      {
        "title": "SOLID PRINCIPLES ARCHITECTURAL GUIDE",
        "content": "1. SOLID PRINCIPLES SUMMARY:\n\nPrinciple | Full Name                     | Architectural Rule\n---------|-------------------------------+----------------------------------------------------------\nS         | Single Responsibility         | A class should have one, and only one, reason to change.\nO         | Open/Closed                   | Software entities should be open for extension, closed for modification.\nL         | Liskov Substitution           | Subtypes must be substitutable for their base types.\nI         | Interface Segregation         | Clients should not be forced to depend on interfaces they do not use.\nD         | Dependency Inversion          | Depend upon abstractions, not concretions.\n\n2. DEPENDENCY INVERSION PRINCIPLE CODE (C++):\n\n#include <iostream>\n#include <memory>\n\n// Abstract Abstraction\nclass MessageService {\npublic:\n    virtual void sendMessage(std::string msg) = 0;\n    virtual ~MessageService() {}\n};\n\nclass EmailService : public MessageService {\npublic:\n    void sendMessage(std::string msg) override {\n        std::cout << \"Email Sent: \" << msg << std::endl;\n    }\n};\n\n// High-level module depends on abstraction\nclass NotificationManager {\nprivate:\n    std::shared_ptr<MessageService> service;\npublic:\n    NotificationManager(std::shared_ptr<MessageService> svc) : service(svc) {}\n    void notify(std::string text) {\n        service->sendMessage(text);\n    }\n};"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Agile Software Development, Principles, Patterns, and Practices",
        "author": "Robert C. Martin"
      }
    ],
    "practiceLinks": [
      {
        "title": "Refactoring Guru SOLID Principles",
        "url": "https://refactoring.guru/solid-principles"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What does the acronym SOLID stand for in Object-Oriented Software Design? (2 Marks)",
        "Explain the Single Responsibility Principle (SRP) with a non-compliant vs compliant example. (2 Marks)",
        "What is Dependency Injection and how does it fulfill the Dependency Inversion Principle? (2 Marks)"
      ],
      "sixMarks": [
        "Explain the Open/Closed Principle (OCP) and demonstrate how inheritance or strategy pattern enables feature extension without code modification. (6 Marks)",
        "Discuss the Liskov Substitution Principle (LSP) and show how breaking subtyping causes unexpected runtime bugs. (6 Marks)"
      ],
      "longAnswer": [
        "Refactor a legacy monolithic E-Commerce Order Processor class that violates all 5 SOLID principles into a clean, decoupled software architecture adhering strictly to SOLID guidelines. Provide complete C++ or Java class implementations. (10 Marks)"
      ]
    }
  },
  {
    "title": "UML and Object Modeling",
    "slug": "oop-uml-and-object-modeling",
    "order": 13,
    "estimatedHours": 4,
    "difficulty": "Advanced",
    "description": "Unified Modeling Language (UML) for OOP: Class Diagrams, Object Diagrams, Sequence Diagrams, Use Case Diagrams, Object-Oriented Analysis and Design (OOAD).",
    "subTopics": [
      "Introduction to UML",
      "Class Diagrams",
      "Object Diagrams",
      "Sequence Diagrams",
      "Use Case Diagrams",
      "Object-Oriented Analysis and Design"
    ],
    "prerequisiteTitles": [
      "Object Oriented Design Principles"
    ],
    "learningObjectives": [
      "Construct standard UML Class Diagrams incorporating visibility indicators (+, -, #), association, aggregation, composition, and inheritance.",
      "Design UML Sequence Diagrams illustrating dynamic object message passing over lifelines.",
      "Perform Object-Oriented Analysis and Design (OOAD) for real-world software specifications."
    ],
    "notes": [
      {
        "title": "UML NOTATIONS & CLASS RELATIONSHIP DIAGRAMS",
        "content": "1. UML CLASS RELATIONSHIPS & SYMBOLS:\n\nRelationship     | Notation Symbol      | Meaning / Ownership\n-----------------|----------------------|-----------------------------------------------------\nInheritance      | ────► (Closed Arrow) | 'is-a' relationship (Derived -> Base)\nRealization      | ╌╌╌╌► (Dashed Arrow)| Interface Implementation\nComposition      | ────◆ (Filled Diamond)| Strong 'has-a' (Child lifecycle tied to Parent)\nAggregation      | ────◇ (Hollow Diamond)| Weak 'has-a' (Child can exist independently)\nAssociation      | ────────────         | 'uses-a' / directional reference\n\n2. UML ASCII ART CLASS DIAGRAM (LIBRARY MANAGEMENT SYSTEM):\n\n+-----------------------+              +-----------------------+\n|        Library        |1           * |         Book          |\n+-----------------------+--------------+-----------------------+\n| - name : String       |◆ (Composite) | - isbn : String       |\n| - address : String    |              | - title : String      |\n+-----------------------+              | - author : String     |\n| + addBook()           |              +-----------------------+\n+-----------------------+              | + checkOut()          |\n                                       +-----------------------+"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "UML Distilled",
        "author": "Martin Fowler"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Unified Modeling Language",
        "url": "https://www.geeksforgeeks.org/unified-modeling-language-uml-introduction/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is UML? Name 3 structural diagrams and 3 behavioral diagrams. (2 Marks)",
        "Differentiate between Aggregation (weak) and Composition (strong) relationships in UML. (2 Marks)",
        "Explain Lifelines and Activation Bars in UML Sequence Diagrams. (2 Marks)"
      ],
      "sixMarks": [
        "Draw a complete UML Class Diagram for a Banking System featuring Bank, Customer, Account, SavingsAccount, and Transaction classes with appropriate relationship connectors. (6 Marks)",
        "Explain how Object-Oriented Analysis and Design (OOAD) converts high-level business requirements into UML diagrams and executable classes. (6 Marks)"
      ],
      "longAnswer": [
        "Provide a complete OOAD Specification for an Online Hospital Management System. Include Use Case Diagram description, detailed Class Diagram with attributes/methods/relationships, and a Sequence Diagram for Doctor Appointment Booking. (10 Marks)"
      ]
    }
  },
  {
    "title": "OOP Implementation in Programming Languages",
    "slug": "oop-oop-implementation-in-programming-languages",
    "order": 14,
    "estimatedHours": 4,
    "difficulty": "Advanced",
    "description": "Comparative study of OOP in modern languages: C++ (explicit memory/pointers), Java (JVM/Garbage Collection/Interfaces), Python (dynamic typing/duck typing/dunder methods).",
    "subTopics": [
      "OOP in C++",
      "OOP in Java",
      "OOP in Python",
      "Language-Specific OOP Features",
      "Comparing OOP Languages"
    ],
    "prerequisiteTitles": [
      "UML and Object Modeling"
    ],
    "learningObjectives": [
      "Understand multi-paradigm C++ vs purely class-based Java vs dynamically typed Python.",
      "Compare memory management: manual pointers/RAII in C++ vs JVM Garbage Collector in Java vs Reference Counting in Python.",
      "Master Python special dunder methods (`__init__`, `__str__`, `__repr__`, `__add__`)."
    ],
    "notes": [
      {
        "title": "TRI-LANGUAGE OOP FEATURE COMPARISON MATRIX",
        "content": "1. LANGUAGE COMPARISON MATRIX:\n\nFeature                | C++                          | Java                        | Python\n-----------------------|------------------------------|-----------------------------|-----------------------------\nTyping                 | Static (Compile-time)        | Static (Compile-time)       | Dynamic (Duck typing)\nMultiple Inheritance   | YES (Virtual base classes)   | NO (Interfaces only)        | YES (MRO / C3 linearization)\nMemory Management      | Manual / RAII / Pointers     | Automatic (JVM GC)          | Automatic (Ref count + GC)\nOperator Overloading   | YES                          | NO                          | YES (Dunder methods)\nAccess Modifiers       | public, private, protected   | public, private, protected   | Convention (_protected, __private)\n\n2. POLYMORPHIC EQUIVALENTS IN C++, JAVA & PYTHON:\n\n// C++: virtual void speak() = 0;\n// Java: interface Speaker { void speak(); }\n# Python: Duck Typing\nclass Duck:\n    def speak(self):\n        print(\"Quack!\")\nclass Person:\n    def speak(self):\n        print(\"Hello!\")\n\ndef make_it_speak(entity):\n    entity.speak() # Duck typing: if it walks & quacks like a duck!"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Fluent Python",
        "author": "Luciano Ramalho"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks OOP in Python",
        "url": "https://www.geeksforgeeks.org/python-oops-concepts/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is Duck Typing in Python? How does it differ from explicit interface implementation in Java? (2 Marks)",
        "How are private members implemented by convention in Python (`__private`) compared to C++? (2 Marks)",
        "Explain Method Resolution Order (MRO) in Python multiple inheritance. (2 Marks)"
      ],
      "sixMarks": [
        "Compare Operator Overloading implementation in C++ (`operator+`) vs Python dunder methods (`__add__`). Write comparative code snippets. (6 Marks)",
        "Discuss memory safety, execution speed, and developer productivity trade-offs when choosing C++, Java, or Python for OOP development. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive architectural comparison of C++, Java, and Python. Implement the exact same Object-Oriented Inventory Management system in all 3 languages showcasing class definitions, inheritance, encapsulation, polymorphism, and collection handling. (10 Marks)"
      ]
    }
  },
  {
    "title": "Object Oriented Programming Applications",
    "slug": "oop-object-oriented-programming-applications",
    "order": 15,
    "estimatedHours": 4,
    "difficulty": "Advanced",
    "description": "Industrial software applications of OOP: Game Development engines, Web Application Frameworks, Mobile Apps (Android/iOS), Enterprise Middleware, and Real-Time Control Systems.",
    "subTopics": [
      "Software Development Applications",
      "Game Development",
      "Web Application Development",
      "Mobile Application Development",
      "Enterprise Applications",
      "Real-Time Systems"
    ],
    "prerequisiteTitles": [
      "OOP Implementation in Programming Languages"
    ],
    "learningObjectives": [
      "Understand entity component systems and GameObject class hierarchies in Game Engines (Unreal, Unity).",
      "Examine MVC (Model-View-Controller) architecture in web frameworks (Spring Boot, Django, ASP.NET).",
      "Apply OOP principles to design scalable mobile apps and real-time enterprise software."
    ],
    "notes": [
      {
        "title": "ENTERPRISE & GAME ENGINE OOP ARCHITECTURES",
        "content": "1. MODEL-VIEW-CONTROLLER (MVC) & GAME ENGINE ARCHITECTURES:\n\nMVC Pattern (Web & Enterprise):\n[ Controller (Business Logic) ] <─── Calls ─── [ View (UI Interface) ]\n        │\n    Updates\n        ▼\n[ Model (OOP Entity Data) ]\n\nGame Engine Entity Architecture:\n+-------------------------------------------------------------+\n|                        GameObject                           |\n+-------------------------------------------------------------+\n| - position : Vector3                                        |\n| - transform : Transform                                     |\n| - components : List<Component*>                            |\n+-------------------------------------------------------------+\n| + update(deltaTime : float) : void                          |\n| + render() : void                                           |\n+-------------------------------------------------------------+\n         |                                      |\n+------------------+                    +------------------+\n|  PlayerControl   |                    |   EnemyAIClass   |\n+------------------+"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Game Programming Patterns",
        "author": "Robert Nystrom"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks MVC Architecture",
        "url": "https://www.geeksforgeeks.org/mvc-design-pattern/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain the MVC (Model-View-Controller) design pattern and the role of the Model layer. (2 Marks)",
        "How is OOP utilized in Game Engine architectures to model GameObjects? (2 Marks)",
        "What role does OOP play in Android Mobile Application Development (Activities, Fragments, Views)? (2 Marks)"
      ],
      "sixMarks": [
        "Explain how OOP facilitates Enterprise Application scalability using Spring Boot or Django frameworks with clear layer separation. (6 Marks)",
        "Design a simplified Game Engine class hierarchy for a 2D RPG game featuring Player, Enemy, Weapon, and Obstacle classes. (6 Marks)"
      ],
      "longAnswer": [
        "Analyze the architectural application of Object-Oriented Programming across 3 major industry domains: Real-Time Automotive/Robotics Systems, Mobile Applications, and Enterprise Financial Banking Platforms. Highlight design patterns, concurrency safety, and object state persistence. (10 Marks)"
      ]
    }
  },
  {
    "title": "Practical Programming and Projects",
    "slug": "oop-practical-programming-and-projects",
    "order": 16,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Capstone OOP Projects & Design Patterns: Creational (Singleton, Factory), Structural (Adapter, Decorator), Behavioral (Observer, Strategy), performance optimization, and debugging techniques.",
    "subTopics": [
      "Implementing OOP Programs",
      "Class-Based Applications",
      "Mini Projects Using OOP",
      "Design Pattern Introduction",
      "Code Optimization",
      "Debugging OOP Applications"
    ],
    "prerequisiteTitles": [
      "Object Oriented Programming Applications"
    ],
    "learningObjectives": [
      "Implement GoF Design Patterns: Singleton, Factory Method, Adapter, and Observer.",
      "Optimize OOP code memory footprint and eliminate memory leaks using Valgrind/GDB/Profiler.",
      "Build a complete production-grade OOP Mini Project."
    ],
    "notes": [
      {
        "title": "GOF DESIGN PATTERNS & CAPSTONE MINI PROJECT",
        "content": "1. DESIGN PATTERNS QUICK CLASSIFICATION:\n\nPattern Category | Examples                        | Purpose\n-----------------|---------------------------------|-----------------------------------------------------\nCreational       | Singleton, Factory Method, Builder| Object creation mechanisms\nStructural       | Adapter, Decorator, Facade      | Class and Object composition\nBehavioral       | Observer, Strategy, Command     | Communication between objects\n\n2. COMPLETE SINGLETON & FACTORY PATTERN CODE (C++):\n\n#include <iostream>\n#include <memory>\n#include <string>\n\n// Singleton Logger\nclass SystemLogger {\nprivate:\n    SystemLogger() {}\npublic:\n    static SystemLogger& getInstance() {\n        static SystemLogger instance;\n        return instance;\n    }\n    void log(std::string msg) { std::cout << \"[LOG] \" << msg << std::endl; }\n};\n\n// Factory Method\nclass Notification {\npublic:\n    virtual void notifyUser() = 0;\n    virtual ~Notification() {}\n};\n\nclass SMSNotification : public Notification {\npublic:\n    void notifyUser() override { std::cout << \"Sending SMS Notification...\" << std::endl; }\n};\n\nclass NotificationFactory {\npublic:\n    static std::unique_ptr<Notification> create(std::string type) {\n        if (type == \"SMS\") return std::make_unique<SMSNotification>();\n        return nullptr;\n    }\n};"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Design Patterns: Elements of Reusable Object-Oriented Software",
        "author": "Erich Gamma et al."
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks C++ Projects",
        "url": "https://www.geeksforgeeks.org/c-plus-plus-projects/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is a Design Pattern? Distinguish Creational, Structural, and Behavioral categories. (2 Marks)",
        "Explain the Singleton Design Pattern and how private constructors prevent multi-instantiation. (2 Marks)",
        "What is the Observer Design Pattern? Give a real-world subscription example. (2 Marks)"
      ],
      "sixMarks": [
        "Implement the Factory Method Pattern in C++ or Java for creating different types of User Accounts (Admin, Standard, Guest). (6 Marks)",
        "Discuss debugging techniques for OOP applications including GDB memory inspection, memory leaks tracing, and virtual call stack inspection. (6 Marks)"
      ],
      "longAnswer": [
        "Develop a complete System Requirement & Object-Oriented Architecture Specification for an Online Banking & ATM Automation Mini Project. Provide full C++ or Java code incorporating encapsulation, inheritance, virtual function polymorphism, exception handling, binary file persistence, and Singleton logging. (10 Marks)"
      ]
    }
  }
];
