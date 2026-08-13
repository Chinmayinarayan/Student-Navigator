module.exports = [
  {
    "title": "Introduction to OOP Programming Environment",
    "slug": "oop-lab-introduction-to-oop-programming-environment",
    "order": 1,
    "estimatedHours": 3,
    "difficulty": "Beginner",
    "description": "Learn setup and configuration of C++, Java, and Python development environments (GCC, JDK, VS Code, CLion, Eclipse). Master compilation, execution, debugging, and software coding standards.",
    "subTopics": [
      "Setting Up Programming Environment",
      "Compiler and IDE Usage",
      "Writing First OOP Program",
      "Program Compilation and Execution",
      "Debugging Basics",
      "Coding Standards and Best Practices"
    ],
    "prerequisiteTitles": [],
    "learningObjectives": [
      "Configure C++ g++ compiler, Java JDK, and Python 3 programming environments in VS Code and Terminal.",
      "Understand the execution lifecycle: Compilation -> Linking -> Bytecode/Binary Execution.",
      "Apply gdb, jdb, and IDE debuggers to inspect stack frames and variables."
    ],
    "notes": [
      {
        "title": "EXPERIMENT 1: ENVIRONMENT SETUP, COMPILATION & CODING STANDARDS",
        "content": "1. MULTI-LANGUAGE FIRST OOP PROGRAM & COMPILATION:\n\n--- C++ Implementation ---\n#include <iostream>\n#include <string>\n\nclass Greeter {\nprivate:\n    std::string name;\npublic:\n    Greeter(std::string n) : name(n) {}\n    void displayGreeting() const {\n        std::cout << \"Welcome to OOP Lab, \" << name << \"!\" << std::endl;\n    }\n};\n\nint main() {\n    Greeter g(\"Computer Science Student\");\n    g.displayGreeting();\n    return 0;\n}\n\n// Compilation: g++ -Wall -std=c++17 -o greeter main.cpp\n// Execution: ./greeter\n// Expected Output: Welcome to OOP Lab, Computer Science Student!\n\n--- Java Implementation ---\npublic class Greeter {\n    private String name;\n\n    public Greeter(String name) {\n        this.name = name;\n    }\n\n    public void displayGreeting() {\n        System.out.println(\"Welcome to OOP Lab, \" + this.name + \"!\");\n    }\n\n    public static void main(String[] args) {\n        Greeter g = new Greeter(\"Computer Science Student\");\n        g.displayGreeting();\n    }\n}\n\n// Compilation: javac Greeter.java\n// Execution: java Greeter\n// Expected Output: Welcome to OOP Lab, Computer Science Student!\n\n--- Python Implementation ---\nclass Greeter:\n    def __init__(self, name: str):\n        self._name = name\n\n    def display_greeting(self) -> None:\n        print(f\"Welcome to OOP Lab, {self._name}!\")\n\nif __name__ == \"__main__\":\n    g = Greeter(\"Computer Science Student\")\n    g.display_greeting()\n\n// Execution: python greeter.py\n// Expected Output: Welcome to OOP Lab, Computer Science Student!\n\n2. LAB EVALUATION CRITERIA:\n- Environment Configuration & Compilation (20%)\n- Code Formatting & Naming Standards (20%)\n- Syntax Correctness & Error-Free Execution (40%)\n- Viva Voce & Debugging Proficiency (20%)"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Object-Oriented Programming in C++",
        "author": "Robert Lafore"
      },
      {
        "title": "Head First Java",
        "author": "Kathy Sierra"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks C++ Programming Language",
        "url": "https://www.geeksforgeeks.org/c-plus-plus/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State the main differences between compiled languages (C++) and interpreted/JIT languages (Java, Python). (2 Marks)",
        "What is the role of g++ compiler flags `-Wall` and `-std=c++17`? (2 Marks)",
        "Explain what a breakpoint is in gdb / IDE debugging. (2 Marks)"
      ],
      "sixMarks": [
        "Explain the compilation and execution lifecycle of C++ and Java programs with pipeline diagrams. (6 Marks)",
        "Write a complete C++ and Java program demonstrating class declaration, constructor initialization, and method execution. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive guide on Object-Oriented Software Environment Setup. Compare C++ GCC, Java JDK JVM/JRE, and Python 3 runtimes, detail debugging strategies with GDB/JDB, and formulate clean coding standards for OOP projects. (10 Marks)"
      ]
    }
  },
  {
    "title": "Classes and Objects Implementation",
    "slug": "oop-lab-classes-and-objects-implementation",
    "order": 2,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Implement core classes and objects: defining data members, member functions, constructors (default, parameterized, copy), destructors, and practical management systems.",
    "subTopics": [
      "Creating Classes",
      "Creating Objects",
      "Defining Data Members",
      "Defining Member Functions",
      "Accessing Class Members",
      "Constructors Implementation",
      "Parameterized Constructors",
      "Copy Constructors",
      "Destructor Implementation",
      "Student Information System",
      "Employee Management System",
      "Bank Account Management System",
      "Book Management System"
    ],
    "prerequisiteTitles": [
      "Introduction to OOP Programming Environment"
    ],
    "learningObjectives": [
      "Implement classes with data members, member functions, constructors, and destructors.",
      "Master copy constructors and deep copy vs shallow copy memory management.",
      "Develop practical applications: Student Information System, Employee & Bank Account Systems."
    ],
    "notes": [
      {
        "title": "EXPERIMENT 2: CLASSES, OBJECTS & BANK ACCOUNT MANAGEMENT SYSTEM",
        "content": "1. BANK ACCOUNT MANAGEMENT SYSTEM IMPLEMENTATION (C++):\n\n#include <iostream>\n#include <string>\n\nclass BankAccount {\nprivate:\n    std::string accountNumber;\n    std::string accountHolder;\n    double balance;\n\npublic:\n    // Default Constructor\n    BankAccount() : accountNumber(\"N/A\"), accountHolder(\"Unknown\"), balance(0.0) {}\n\n    // Parameterized Constructor\n    BankAccount(std::string accNum, std::string name, double initialBalance) {\n        accountNumber = accNum;\n        accountHolder = name;\n        balance = (initialBalance >= 0) ? initialBalance : 0.0;\n        std::cout << \"[LOG] Account \" << accountNumber << \" created for \" << accountHolder << std::endl;\n    }\n\n    // Copy Constructor (Deep Copy)\n    BankAccount(const BankAccount& other) {\n        accountNumber = other.accountNumber + \"_COPY\";\n        accountHolder = other.accountHolder;\n        balance = other.balance;\n        std::cout << \"[LOG] Copy Constructor invoked for \" << accountNumber << std::endl;\n    }\n\n    // Destructor\n    ~BankAccount() {\n        std::cout << \"[LOG] Account \" << accountNumber << \" closed / memory released.\" << std::endl;\n    }\n\n    void deposit(double amount) {\n        if (amount > 0) {\n            balance += amount;\n            std::cout << \"Deposited $\" << amount << \". New Balance: $\" << balance << std::endl;\n        }\n    }\n\n    void withdraw(double amount) {\n        if (amount > 0 && amount <= balance) {\n            balance -= amount;\n            std::cout << \"Withdrew $\" << amount << \". Remaining Balance: $\" << balance << std::endl;\n        } else {\n            std::cout << \"Error: Insufficient funds!\" << std::endl;\n        }\n    }\n\n    void display() const {\n        std::cout << \"Acc: \" << accountNumber << \" | Holder: \" << accountHolder << \" | Balance: $\" << balance << std::endl;\n    }\n};\n\nint main() {\n    BankAccount acc1(\"ACC1001\", \"Alice Smith\", 1500.0);\n    acc1.display();\n    acc1.deposit(500.0);\n    acc1.withdraw(300.0);\n\n    BankAccount acc2 = acc1; // Calls Copy Constructor\n    acc2.display();\n    return 0;\n}\n\n// Expected Output:\n// [LOG] Account ACC1001 created for Alice Smith\n// Acc: ACC1001 | Holder: Alice Smith | Balance: $1500\n// Deposited $500. New Balance: $2000\n// Withdrew $300. Remaining Balance: $1700\n// [LOG] Copy Constructor invoked for ACC1001_COPY\n// Acc: ACC1001_COPY | Holder: Alice Smith | Balance: $1700\n// [LOG] Account ACC1001_COPY closed / memory released.\n// [LOG] Account ACC1001 closed / memory released.\n\n2. LAB EVALUATION CRITERIA:\n- Correct Constructor / Destructor Usage (25%)\n- Encapsulation & Access Modifier Logic (25%)\n- Practical Program Logic & Output (35%)\n- Viva Questions (15%)"
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
        "title": "HackerRank Class and Objects in C++",
        "url": "https://www.hackerrank.com/domains/cpp"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is a Copy Constructor and when is it implicitly invoked? (2 Marks)",
        "Differentiate between Shallow Copy and Deep Copy. (2 Marks)",
        "What is the role of a Destructor in C++? Does Java have a destructor? (2 Marks)"
      ],
      "sixMarks": [
        "Implement a Student Information System class in C++ with RollNo, Name, Marks array, calculateGrade(), and custom constructors. (6 Marks)",
        "Explain Constructor Overloading with a complete Java code example. (6 Marks)"
      ],
      "longAnswer": [
        "Design an Employee Management System class containing EmployeeID, Name, Designation, BasicSalary, HRA, DA. Implement methods for net salary computation, parameterized constructors, copy constructor, and destructor with memory allocation logging. (10 Marks)"
      ]
    }
  },
  {
    "title": "Encapsulation and Data Hiding Programs",
    "slug": "oop-lab-encapsulation-and-data-hiding-programs",
    "order": 3,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Implement Encapsulation and Data Hiding: Private/Public access specifiers, Getters and Setters, Input Data Validation, and Secure Banking ATM simulations.",
    "subTopics": [
      "Private and Public Members",
      "Getters and Setters",
      "Data Validation",
      "Implementing Secure Classes",
      "ATM Simulation",
      "Account Management System",
      "Library Management System"
    ],
    "prerequisiteTitles": [
      "Classes and Objects Implementation"
    ],
    "learningObjectives": [
      "Enforce data hiding by restricting direct member modification using `private` access specifier.",
      "Write safe Getter and Setter accessor methods with validation constraints.",
      "Develop a secure ATM Simulation program enforcing PIN authentication and balance limits."
    ],
    "notes": [
      {
        "title": "EXPERIMENT 3: ENCAPSULATION & SECURE ATM SIMULATION PROGRAM",
        "content": "1. SECURE ATM SIMULATION IN JAVA (DATA HIDING & VALIDATION):\n\nimport java.util.Scanner;\n\npublic class SecureATM {\n    private String accountNumber;\n    private int pin;\n    private double balance;\n\n    public SecureATM(String accountNumber, int pin, double initialBalance) {\n        this.accountNumber = accountNumber;\n        setPin(pin);\n        this.balance = (initialBalance >= 0) ? initialBalance : 0.0;\n    }\n\n    // Encapsulated Setter with Validation\n    public void setPin(int newPin) {\n        if (newPin >= 1000 && newPin <= 9999) {\n            this.pin = newPin;\n        } else {\n            System.out.println(\"Invalid PIN format! PIN must be a 4-digit number.\");\n        }\n    }\n\n    public boolean authenticate(int enteredPin) {\n        return this.pin == enteredPin;\n    }\n\n    // Getter\n    public double getBalance(int enteredPin) {\n        if (authenticate(enteredPin)) {\n            return this.balance;\n        } else {\n            System.out.println(\"Authentication Failed: Invalid PIN!\");\n            return -1.0;\n        }\n    }\n\n    public boolean withdraw(int enteredPin, double amount) {\n        if (!authenticate(enteredPin)) {\n            System.out.println(\"Authentication Failed: Transaction Aborted.\");\n            return false;\n        }\n        if (amount <= 0 || amount > balance) {\n            System.out.println(\"Transaction Error: Invalid or Insufficient Balance.\");\n            return false;\n        }\n        this.balance -= amount;\n        System.out.println(\"Success: $\" + amount + \" withdrawn. New Balance: $\" + this.balance);\n        return true;\n    }\n\n    public static void main(String[] args) {\n        SecureATM atm = new SecureATM(\"ATM-998822\", 4321, 2500.0);\n\n        // Attempt unauthorized access\n        atm.withdraw(1111, 500.0); // Fails\n\n        // Authorized access\n        atm.withdraw(4321, 500.0); // Succeeds\n    }\n}\n\n// Expected Output:\n// Authentication Failed: Transaction Aborted.\n// Success: $500.0 withdrawn. New Balance: $2000.0\n\n2. LAB EVALUATION CRITERIA:\n- Correct Use of Private Data Members & Public Accessors (30%)\n- Input Validation & Error Handling Logic (30%)\n- Security Test Cases Verification (25%)\n- Viva Questions (15%)"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Head First Java",
        "author": "Kathy Sierra"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Encapsulation in C++",
        "url": "https://www.geeksforgeeks.org/encapsulation-in-c-plus-plus/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is Encapsulation and how does it differ from Data Hiding? (2 Marks)",
        "Why should class variables generally be declared `private` instead of `public`? (2 Marks)",
        "Explain the role of Setter methods in maintaining valid class invariants. (2 Marks)"
      ],
      "sixMarks": [
        "Write a complete C++ class `UserAccount` with private members `username`, `passwordHash`, `email`. Provide getters/setters with validation rules. (6 Marks)",
        "Develop an ATM Simulation class in Java with PIN validation, deposit, withdrawal, and balance inquiry methods. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Data Hiding and Encapsulation. Compare access specifiers (private, protected, public), detail data validation paradigms, and build a secure Library Management System class hierarchy in C++. (10 Marks)"
      ]
    }
  },
  {
    "title": "Inheritance Implementation",
    "slug": "oop-lab-inheritance-implementation",
    "order": 4,
    "estimatedHours": 5,
    "difficulty": "Beginner",
    "description": "Implement all forms of Inheritance: Single, Multilevel, Hierarchical, Multiple, and Hybrid inheritance in C++, Java, and Python with base and derived class constructors.",
    "subTopics": [
      "Single Inheritance Programs",
      "Multilevel Inheritance Programs",
      "Hierarchical Inheritance Programs",
      "Multiple Inheritance Programs",
      "Hybrid Inheritance Concepts",
      "Base Class and Derived Class Implementation",
      "Vehicle Management System",
      "Person and Employee Hierarchy",
      "Shape Classification System"
    ],
    "prerequisiteTitles": [
      "Encapsulation and Data Hiding Programs"
    ],
    "learningObjectives": [
      "Implement Single, Multilevel, Hierarchical, and Multiple Inheritance.",
      "Understand access specifiers in inheritance (`public`, `protected`, `private` derivation).",
      "Solve the Diamond Problem in multiple inheritance using virtual base classes."
    ],
    "notes": [
      {
        "title": "EXPERIMENT 4: INHERITANCE TYPES & PERSON-EMPLOYEE HIERARCHY PROGRAM",
        "content": "1. MULTILEVEL & MULTIPLE INHERITANCE IMPLEMENTATION (C++):\n\n#include <iostream>\n#include <string>\n\n// Base Class\nclass Person {\nprotected:\n    std::string name;\n    int age;\npublic:\n    Person(std::string n, int a) : name(n), age(a) {}\n    void displayPerson() const {\n        std::cout << \"Name: \" << name << \" | Age: \" << age << std::endl;\n    }\n};\n\n// Derived Class 1 (Single / Multilevel)\nclass Employee : public Person {\nprotected:\n    int employeeID;\n    double salary;\npublic:\n    Employee(std::string n, int a, int id, double sal)\n        : Person(n, a), employeeID(id), salary(sal) {}\n\n    void displayEmployee() const {\n        displayPerson();\n        std::cout << \"Emp ID: \" << employeeID << \" | Salary: $\" << salary << std::endl;\n    }\n};\n\n// Derived Class 2 (Multilevel Level 2)\nclass Manager : public Employee {\nprivate:\n    std::string department;\n    int teamSize;\npublic:\n    Manager(std::string n, int a, int id, double sal, std::string dept, int size)\n        : Employee(n, a, id, sal), department(dept), teamSize(size) {}\n\n    void displayManager() const {\n        displayEmployee();\n        std::cout << \"Dept: \" << department << \" | Team Size: \" << teamSize << std::endl;\n    }\n};\n\nint main() {\n    Manager m1(\"Dr. Robert Bruce\", 45, 9001, 125000.0, \"Software R&D\", 12);\n    m1.displayManager();\n    return 0;\n}\n\n// Expected Output:\n// Name: Dr. Robert Bruce | Age: 45\n// Emp ID: 9001 | Salary: $125000\n// Dept: Software R&D | Team Size: 12\n\n2. LAB EVALUATION CRITERIA:\n- Hierarchy Design & Base Class Constructor Initialization (30%)\n- Proper Access Modifiers Usage ('protected' vs 'private') (25%)\n- Execution Correctness across Inheritance Levels (30%)\n- Viva Questions (15%)"
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
        "title": "GeeksforGeeks Inheritance in C++",
        "url": "https://www.geeksforgeeks.org/inheritance-in-c/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "List the 5 types of inheritance supported in object-oriented programming. (2 Marks)",
        "What is the Diamond Problem in multiple inheritance and how does C++ solve it using Virtual Base Classes? (2 Marks)",
        "Why does Java not support multiple inheritance with classes? (2 Marks)"
      ],
      "sixMarks": [
        "Implement a Vehicle Management System hierarchy: `Vehicle` -> `LandVehicle` -> `Car` in C++ with parameterized constructors. (6 Marks)",
        "Differentiate between `public`, `protected`, and `private` inheritance modes in C++. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Inheritance Architectures. Detail code reusability, constructor invocation order in derived classes, Virtual Base Classes in C++, interface-based multiple inheritance in Java, and build a Shape Classification System. (10 Marks)"
      ]
    }
  },
  {
    "title": "Polymorphism Implementation",
    "slug": "oop-lab-polymorphism-implementation",
    "order": 5,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Implement Compile-Time (Function Overloading, Operator Overloading) and Run-Time Polymorphism (Method Overriding, Virtual Functions, Dynamic Binding) across C++, Java, and Python.",
    "subTopics": [
      "Function Overloading",
      "Operator Overloading",
      "Method Overriding",
      "Virtual Functions",
      "Dynamic Binding",
      "Calculator Using Function Overloading",
      "Complex Number Operations",
      "Shape Area Calculation"
    ],
    "prerequisiteTitles": [
      "Inheritance Implementation"
    ],
    "learningObjectives": [
      "Distinguish compile-time polymorphism (overloading) from run-time polymorphism (overriding).",
      "Overload binary and unary operators (`+`, `-`, `<<`) for user-defined classes.",
      "Implement Virtual Functions and Virtual Method Tables (VTABLE) for dynamic binding."
    ],
    "notes": [
      {
        "title": "EXPERIMENT 5: OPERATOR OVERLOADING & VIRTUAL FUNCTION POLYMORPHISM",
        "content": "1. OPERATOR OVERLOADING & VIRTUAL FUNCTIONS IMPLEMENTATION (C++):\n\n#include <iostream>\n\n// Part 1: Operator Overloading (Complex Number Operations)\nclass Complex {\nprivate:\n    double real;\n    double imag;\npublic:\n    Complex(double r = 0.0, double i = 0.0) : real(r), imag(i) {}\n\n    // Overloading + operator\n    Complex operator + (const Complex& obj) const {\n        return Complex(real + obj.real, imag + obj.imag);\n    }\n\n    void display() const {\n        std::cout << real << \" + \" << imag << \"i\" << std::endl;\n    }\n};\n\n// Part 2: Dynamic Binding / Virtual Functions (Shape Area Calculation)\nclass Shape {\npublic:\n    virtual void calculateArea() const {\n        std::cout << \"Generic Shape Area\" << std::endl;\n    }\n    virtual ~Shape() {}\n};\n\nclass Circle : public Shape {\nprivate:\n    double radius;\npublic:\n    Circle(double r) : radius(r) {}\n    void calculateArea() const override {\n        std::cout << \"Circle Area: \" << 3.14159 * radius * radius << std::endl;\n    }\n};\n\nclass Rectangle : public Shape {\nprivate:\n    double width, height;\npublic:\n    Rectangle(double w, double h) : width(w), height(h) {}\n    void calculateArea() const override {\n        std::cout << \"Rectangle Area: \" << width * height << std::endl;\n    }\n};\n\nint main() {\n    // Operator Overloading Test\n    Complex c1(3.5, 2.5), c2(1.5, 4.5);\n    Complex c3 = c1 + c2;\n    std::cout << \"Complex Sum: \"; c3.display();\n\n    // Dynamic Binding Test\n    Shape* s1 = new Circle(5.0);\n    Shape* s2 = new Rectangle(4.0, 6.0);\n\n    s1->calculateArea(); // Dynamic dispatch to Circle\n    s2->calculateArea(); // Dynamic dispatch to Rectangle\n\n    delete s1;\n    delete s2;\n    return 0;\n}\n\n// Expected Output:\n// Complex Sum: 5 + 7i\n// Circle Area: 78.5398\n// Rectangle Area: 24\n\n2. LAB EVALUATION CRITERIA:\n- Correct Operator Overloading Syntax (25%)\n- Proper 'virtual' & 'override' Keywords Usage (30%)\n- Polymorphic Pointer Dispatch Verification (30%)\n- Viva Questions (15%)"
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
        "title": "GeeksforGeeks Polymorphism in C++",
        "url": "https://www.geeksforgeeks.org/polymorphism-in-c/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between Compile-time Polymorphism and Run-time Polymorphism. (2 Marks)",
        "What is a Virtual Method Table (VTABLE) and Virtual Pointer (VPTR)? (2 Marks)",
        "Which operators cannot be overloaded in C++? (2 Marks)"
      ],
      "sixMarks": [
        "Write a C++ program to overload the `+` and `==` operators for a custom `String` class. (6 Marks)",
        "Explain Method Overriding and Virtual Functions in C++ with a Shape hierarchy example. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Polymorphism Mechanisms. Detail function signature resolution in compile-time overloading, dynamic dispatch via VTABLE/VPTR in run-time overriding, operator overloading guidelines, and dynamic binding in Java/C++. (10 Marks)"
      ]
    }
  },
  {
    "title": "Abstraction Implementation",
    "slug": "oop-lab-abstraction-implementation",
    "order": 6,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Implement Abstraction: Pure Virtual Functions in C++, Abstract Classes and Interfaces in Java, implementation hiding, and Payment Gateway Simulations.",
    "subTopics": [
      "Abstract Classes",
      "Pure Virtual Functions",
      "Interfaces",
      "Implementation Hiding",
      "Payment Gateway Simulation",
      "Vehicle Control System",
      "Notification System"
    ],
    "prerequisiteTitles": [
      "Polymorphism Implementation"
    ],
    "learningObjectives": [
      "Define Abstract Classes and Pure Virtual Functions (`virtual void func() = 0;`).",
      "Implement Java/C++ Interfaces for contract-based polymorphism.",
      "Build realistic Payment Gateway and Vehicle Control System simulations."
    ],
    "notes": [
      {
        "title": "EXPERIMENT 6: ABSTRACTION, INTERFACES & PAYMENT GATEWAY SIMULATION",
        "content": "1. PAYMENT GATEWAY SIMULATION USING ABSTRACT CLASSES & INTERFACES (JAVA):\n\n// Abstract Class\nabstract class PaymentGateway {\n    protected String transactionId;\n\n    public PaymentGateway(String txId) {\n        this.transactionId = txId;\n    }\n\n    // Pure abstract method (must be overridden)\n    public abstract boolean processPayment(double amount);\n\n    // Concrete method\n    public void printReceipt(double amount, boolean status) {\n        System.out.println(\"--- RECEIPT --- [Tx: \" + transactionId + \"]\");\n        System.out.println(\"Amount: $\" + amount + \" | Status: \" + (status ? \"SUCCESS\" : \"FAILED\"));\n    }\n}\n\n// Concrete Implementation 1: Credit Card\nclass CreditCardPayment extends PaymentGateway {\n    private String cardNumber;\n\n    public CreditCardPayment(String txId, String cardNum) {\n        super(txId);\n        this.cardNumber = cardNum;\n    }\n\n    @Override\n    public boolean processPayment(double amount) {\n        System.out.println(\"Processing Credit Card (\" + cardNumber.substring(12) + \") payment of $\" + amount);\n        return true;\n    }\n}\n\n// Concrete Implementation 2: UPI / PayPal\nclass PayPalPayment extends PaymentGateway {\n    private String email;\n\n    public PayPalPayment(String txId, String email) {\n        super(txId);\n        this.email = email;\n    }\n\n    @Override\n    public boolean processPayment(double amount) {\n        System.out.println(\"Processing PayPal (\" + email + \") payment of $\" + amount);\n        return true;\n    }\n}\n\npublic class AbstractionDemo {\n    public static void main(String[] args) {\n        PaymentGateway payment1 = new CreditCardPayment(\"TXN-1001\", \"4532019988771234\");\n        boolean s1 = payment1.processPayment(250.0);\n        payment1.printReceipt(250.0, s1);\n\n        PaymentGateway payment2 = new PayPalPayment(\"TXN-1002\", \"user@paypal.com\");\n        boolean s2 = payment2.processPayment(120.0);\n        payment2.printReceipt(120.0, s2);\n    }\n}\n\n// Expected Output:\n// Processing Credit Card (1234) payment of $250.0\n// --- RECEIPT --- [Tx: TXN-1001]\n// Amount: $250.0 | Status: SUCCESS\n// Processing PayPal (user@paypal.com) payment of $120.0\n// --- RECEIPT --- [Tx: TXN-1002]\n// Amount: $120.0 | Status: SUCCESS\n\n2. LAB EVALUATION CRITERIA:\n- Abstract Class & Pure Virtual/Interface Declaration (30%)\n- Concrete Class Implementation Correctness (35%)\n- Abstraction & Decoupling Architecture (20%)\n- Viva Voce (15%)"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Head First Java",
        "author": "Kathy Sierra"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Abstraction in Java",
        "url": "https://www.geeksforgeeks.org/abstraction-in-java-2/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is an Abstract Class? Can you instantiate an abstract class directly? (2 Marks)",
        "Define Pure Virtual Function in C++. (2 Marks)",
        "Differentiate between Abstract Class and Interface in Java. (2 Marks)"
      ],
      "sixMarks": [
        "Implement a Notification System interface with `sendNotification()` method and concrete implementations `EmailNotification` and `SMSNotification`. (6 Marks)",
        "Explain how Abstraction reduces software complexity and decouples subsystem components. (6 Marks)"
      ],
      "longAnswer": [
        "Design a Vehicle Control System using Abstraction. Create an Abstract Class `VehicleControl` with pure virtual functions `startEngine()`, `accelerate()`, `brake()`, and concrete derived classes `AutonomousCar` and `ElectricScooter`. (10 Marks)"
      ]
    }
  },
  {
    "title": "Exception Handling Programs",
    "slug": "oop-lab-exception-handling-programs",
    "order": 7,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Implement robust Exception Handling: try-catch-finally blocks, throwing exceptions, multiple catch handlers, and custom application exception classes.",
    "subTopics": [
      "Error Handling",
      "Try-Catch Blocks",
      "Multiple Exception Handling",
      "Custom Exception Creation",
      "Division Exception Handling",
      "Bank Transaction Error Handling",
      "File Operation Error Handling"
    ],
    "prerequisiteTitles": [
      "Abstraction Implementation"
    ],
    "learningObjectives": [
      "Master try, catch, throw, and finally error-handling constructs.",
      "Handle multiple exception types (Arithmetic, NullPointer, OutOfBounds).",
      "Create custom exception classes extending `std::exception` (C++) or `Exception` (Java)."
    ],
    "notes": [
      {
        "title": "EXPERIMENT 7: EXCEPTION HANDLING & CUSTOM BANK TRANSACTION EXCEPTION",
        "content": "1. CUSTOM EXCEPTION & BANK TRANSACTION ERROR HANDLING (C++):\n\n#include <iostream>\n#include <exception>\n#include <string>\n\n// Custom Exception Class\nclass InsufficientFundsException : public std::exception {\nprivate:\n    std::string message;\npublic:\n    InsufficientFundsException(double req, double avail) {\n        message = \"InsufficientFundsException: Requested $\" + std::to_string(req) + \n                  \" exceeds available balance $\" + std::to_string(avail);\n    }\n    const char* what() const noexcept override {\n        return message.c_str();\n    }\n};\n\nclass BankAccount {\nprivate:\n    double balance;\npublic:\n    BankAccount(double initial) : balance(initial) {}\n\n    void withdraw(double amount) {\n        if (amount > balance) {\n            throw InsufficientFundsException(amount, balance);\n        }\n        balance -= amount;\n        std::cout << \"Withdrawal Successful! Remaining Balance: $\" << balance << std::endl;\n    }\n};\n\nint main() {\n    BankAccount account(500.0);\n\n    try {\n        std::cout << \"Attempting to withdraw $200...\" << std::endl;\n        account.withdraw(200.0);\n\n        std::cout << \"Attempting to withdraw $400...\" << std::endl;\n        account.withdraw(400.0); // Will throw exception\n    }\n    catch (const InsufficientFundsException& e) {\n        std::cerr << \"[EXCEPTION HANDLED] \" << e.what() << std::endl;\n    }\n    catch (const std::exception& e) {\n        std::cerr << \"[GENERIC EXCEPTION] \" << e.what() << std::endl;\n    }\n\n    std::cout << \"Program execution resumed normally after exception handling.\" << std::endl;\n    return 0;\n}\n\n// Expected Output:\n// Attempting to withdraw $200...\n// Withdrawal Successful! Remaining Balance: $300\n// Attempting to withdraw $400...\n// [EXCEPTION HANDLED] InsufficientFundsException: Requested $400.000000 exceeds available balance $300.000000\n// Program execution resumed normally after exception handling.\n\n2. LAB EVALUATION CRITERIA:\n- Try-Catch Block Structure & Exception Hierarchy (30%)\n- Custom Exception Class Implementation (35%)\n- Graceful Recovery & Error-Free Termination (20%)\n- Viva Voce (15%)"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Head First Java",
        "author": "Kathy Sierra"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Exception Handling in C++",
        "url": "https://www.geeksforgeeks.org/exception-handling-c/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is an Exception? How does it differ from a Compilation Error? (2 Marks)",
        "Explain the role of `try`, `catch`, `throw`, and `finally` keywords. (2 Marks)",
        "What happens if an exception is thrown but not caught in any catch block? (2 Marks)"
      ],
      "sixMarks": [
        "Write a program in Java demonstrating multiple catch blocks for `ArithmeticException` and `ArrayIndexOutOfBoundsException`. (6 Marks)",
        "Define a custom exception `InvalidAgeException` in Java/C++ and throw it when user age < 18. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Exception Handling Mechanisms. Detail stack unwinding during exception throw, standard exception hierarchy in Java and C++, checked vs unchecked exceptions, and best practices for robust software error recovery. (10 Marks)"
      ]
    }
  },
  {
    "title": "File Handling Programs",
    "slug": "oop-lab-file-handling-programs",
    "order": 8,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Implement File I/O operations: file streams (fstream, ifstream, ofstream), reading/writing text & binary files, object serialization, and Student Record File Systems.",
    "subTopics": [
      "Reading Files",
      "Writing Files",
      "File Streams",
      "Binary File Operations",
      "Object Serialization Basics",
      "Student Record File System",
      "Employee Database",
      "Inventory Management System"
    ],
    "prerequisiteTitles": [
      "Exception Handling Programs"
    ],
    "learningObjectives": [
      "Read and write data using file stream objects (`ifstream`, `ofstream`, `fstream`).",
      "Perform binary file read/write operations using `read()` and `write()` methods.",
      "Build a persistent Student Record File System maintaining records on disk."
    ],
    "notes": [
      {
        "title": "EXPERIMENT 8: FILE I/O & PERSISTENT STUDENT RECORD FILE SYSTEM",
        "content": "1. BINARY FILE I/O & STUDENT RECORD SYSTEM IMPLEMENTATION (C++):\n\n#include <iostream>\n#include <fstream>\n#include <cstring>\n\nstruct StudentRecord {\n    int rollNo;\n    char name[50];\n    double gpa;\n};\n\nclass StudentFileManager {\nprivate:\n    std::string filename;\npublic:\n    StudentFileManager(std::string fname) : filename(fname) {}\n\n    void addRecord(int roll, const char* name, double gpa) {\n        std::ofstream outFile(filename, std::ios::binary | std::ios::app);\n        if (!outFile) {\n            std::cerr << \"Error opening file for writing!\" << std::endl;\n            return;\n        }\n\n        StudentRecord rec;\n        rec.rollNo = roll;\n        std::strncpy(rec.name, name, sizeof(rec.name));\n        rec.gpa = gpa;\n\n        outFile.write(reinterpret_cast<char*>(&rec), sizeof(StudentRecord));\n        outFile.close();\n        std::cout << \"Record saved successfully for \" << rec.name << std::endl;\n    }\n\n    void displayAllRecords() {\n        std::ifstream inFile(filename, std::ios::binary);\n        if (!inFile) {\n            std::cerr << \"Error opening file for reading!\" << std::endl;\n            return;\n        }\n\n        StudentRecord rec;\n        std::cout << \"\n--- PERSISTENT STUDENT RECORDS ---\" << std::endl;\n        while (inFile.read(reinterpret_cast<char*>(&rec), sizeof(StudentRecord))) {\n            std::cout << \"Roll: \" << rec.rollNo << \" | Name: \" << rec.name << \" | GPA: \" << rec.gpa << std::endl;\n        }\n        inFile.close();\n    }\n};\n\nint main() {\n    StudentFileManager manager(\"students.dat\");\n    manager.addRecord(101, \"Alice Johnson\", 3.85);\n    manager.addRecord(102, \"Bob Smith\", 3.60);\n\n    manager.displayAllRecords();\n    return 0;\n}\n\n// Expected Output:\n// Record saved successfully for Alice Johnson\n// Record saved successfully for Bob Smith\n// --- PERSISTENT STUDENT RECORDS ---\n// Roll: 101 | Name: Alice Johnson | GPA: 3.85\n// Roll: 102 | Name: Bob Smith | GPA: 3.60\n\n2. LAB EVALUATION CRITERIA:\n- File Stream Modes & Binary I/O Syntax (30%)\n- Record Persistence & Disk Recovery Logic (35%)\n- Error Handling for Unopened Files (20%)\n- Viva Questions (15%)"
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
        "title": "GeeksforGeeks File Handling in C++",
        "url": "https://www.geeksforgeeks.org/file-handling-c-classes/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain file stream classes `ifstream`, `ofstream`, and `fstream` in C++. (2 Marks)",
        "What is the difference between Text Mode and Binary Mode file operations? (2 Marks)",
        "Explain Object Serialization and Deserialization in Java. (2 Marks)"
      ],
      "sixMarks": [
        "Write a C++ program to count total lines, words, and characters in a text file. (6 Marks)",
        "Develop an Employee Database application in C++ that reads/writes binary records to a file. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on File Streams and Persistence. Detail file opening modes (`ios::in`, `ios::out`, `ios::app`, `ios::binary`), pointer positioning methods (`seekg`, `seekp`, `tellg`, `tellp`), and build an Inventory Management File System. (10 Marks)"
      ]
    }
  },
  {
    "title": "Templates and Generic Programming",
    "slug": "oop-lab-templates-and-generic-programming",
    "order": 9,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master Generic Programming: Function Templates, Class Templates, Template Specialization, and C++ Standard Template Library (STL containers like vector, stack, map).",
    "subTopics": [
      "Function Templates",
      "Class Templates",
      "Generic Classes",
      "Standard Template Library (STL) Basics",
      "Generic Sorting Program",
      "Generic Stack Implementation",
      "Generic Data Container"
    ],
    "prerequisiteTitles": [
      "File Handling Programs"
    ],
    "learningObjectives": [
      "Write Function Templates for type-independent algorithms (sorting, searching).",
      "Implement Generic Class Templates (e.g., Generic Stack, Generic Queue).",
      "Utilize C++ Standard Template Library (STL) vector, map, and algorithm utilities."
    ],
    "notes": [
      {
        "title": "EXPERIMENT 9: TEMPLATES & GENERIC STACK DATA STRUCTURE IMPLEMENTATION",
        "content": "1. GENERIC STACK CLASS TEMPLATE IMPLEMENTATION (C++):\n\n#include <iostream>\n#include <string>\n#include <vector>\n\ntemplate <typename T>\nclass GenericStack {\nprivate:\n    std::vector<T> elements;\npublic:\n    void push(const T& val) {\n        elements.push_back(val);\n        std::cout << \"[PUSH] Element added to stack.\" << std::endl;\n    }\n\n    T pop() {\n        if (isEmpty()) {\n            throw std::runtime_error(\"StackUnderflowException: Cannot pop from empty stack!\");\n        }\n        T topVal = elements.back();\n        elements.pop_back();\n        return topVal;\n    }\n\n    T top() const {\n        if (isEmpty()) {\n            throw std::runtime_error(\"StackEmptyException: Stack has no top element!\");\n        }\n        return elements.back();\n    }\n\n    bool isEmpty() const {\n        return elements.empty();\n    }\n\n    size_t size() const {\n        return elements.size();\n    }\n};\n\nint main() {\n    // Test 1: Integer Stack\n    GenericStack<int> intStack;\n    intStack.push(10);\n    intStack.push(20);\n    std::cout << \"Int Stack Top: \" << intStack.top() << \" | Size: \" << intStack.size() << std::endl;\n    std::cout << \"Popped: \" << intStack.pop() << std::endl;\n\n    // Test 2: String Stack\n    GenericStack<std::string> strStack;\n    strStack.push(\"Data Structures\");\n    strStack.push(\"Object Oriented Programming\");\n    std::cout << \"Str Stack Top: \" << strStack.top() << std::endl;\n\n    return 0;\n}\n\n// Expected Output:\n// [PUSH] Element added to stack.\n// [PUSH] Element added to stack.\n// Int Stack Top: 20 | Size: 2\n// Popped: 20\n// [PUSH] Element added to stack.\n// [PUSH] Element added to stack.\n// Str Stack Top: Object Oriented Programming\n\n2. LAB EVALUATION CRITERIA:\n- Template Syntax & Generic Type Instantiation (35%)\n- Exception Handling in Generic Containers (30%)\n- STL Integration & Code Reusability (20%)\n- Viva Voce (15%)"
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
        "title": "GeeksforGeeks Templates in C++",
        "url": "https://www.geeksforgeeks.org/templates-cpp/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is Generic Programming and how do C++ Templates achieve it? (2 Marks)",
        "Differentiate between Function Template and Class Template. (2 Marks)",
        "List 4 common STL containers in C++ (vector, list, stack, map). (2 Marks)"
      ],
      "sixMarks": [
        "Write a C++ Function Template `bubbleSort()` to sort arrays of integers, doubles, and strings. (6 Marks)",
        "Implement a Generic Queue class template in C++ with enqueue(), dequeue(), and display() methods. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Templates and Standard Template Library (STL). Detail template compilation mechanism, template specialization, STL containers, iterators, algorithms (`std::sort`, `std::find`), and generic container design. (10 Marks)"
      ]
    }
  },
  {
    "title": "Object Oriented Design Practice",
    "slug": "oop-lab-object-oriented-design-practice",
    "order": 10,
    "estimatedHours": 4,
    "difficulty": "Advanced",
    "description": "Practice Object Oriented Design (OOD): UML Class Diagram creation, object relationship modeling (Association, Aggregation, Composition), and translating domain requirements into OOP classes.",
    "subTopics": [
      "UML Class Diagram Creation",
      "Object Relationship Design",
      "Association",
      "Aggregation",
      "Composition",
      "Object Modeling",
      "Design Class Diagrams",
      "Convert Requirements into Classes",
      "Implement Object Models"
    ],
    "prerequisiteTitles": [
      "Templates and Generic Programming"
    ],
    "learningObjectives": [
      "Construct UML Class Diagrams identifying attributes, methods, and visibility specifiers.",
      "Differentiate between Association, Aggregation (weak HAS-A), and Composition (strong HAS-A).",
      "Convert complex real-world requirements into clean object-oriented domain models."
    ],
    "notes": [
      {
        "title": "EXPERIMENT 10: OBJECT RELATIONSHIP DESIGN & UML COMPOSITION CODE",
        "content": "1. AGGREGATION VS COMPOSITION IN C++ (OBJECT MODELING):\n\n#include <iostream>\n#include <string>\n#include <vector>\n\n// Component Class for Composition (Engine belongs exclusively to Car)\nclass Engine {\nprivate:\n    int horsepower;\npublic:\n    Engine(int hp) : horsepower(hp) {\n        std::cout << \"Engine (\" << horsepower << \" HP) initialized.\" << std::endl;\n    }\n    ~Engine() {\n        std::cout << \"Engine destroyed.\" << std::endl;\n    }\n    int getHP() const { return horsepower; }\n};\n\n// Component Class for Aggregation (Passenger exists independently of Car)\nclass Passenger {\nprivate:\n    std::string name;\npublic:\n    Passenger(std::string n) : name(n) {}\n    std::string getName() const { return name; }\n};\n\n// Composite Class\nclass Car {\nprivate:\n    std::string model;\n    Engine engine; // COMPOSITION: Lifetime bound to Car\n    std::vector<Passenger*> passengers; // AGGREGATION: Pointer references\n\npublic:\n    Car(std::string m, int hp) : model(m), engine(hp) {\n        std::cout << \"Car model \" << model << \" created.\" << std::endl;\n    }\n\n    void addPassenger(Passenger* p) {\n        passengers.push_back(p);\n    }\n\n    void displayCarDetails() const {\n        std::cout << \"Car: \" << model << \" | Engine HP: \" << engine.getHP() << std::endl;\n        std::cout << \"Passengers onboard:\" << std::endl;\n        for (const auto& p : passengers) {\n            std::cout << \" - \" << p->getName() << std::endl;\n        }\n    }\n};\n\nint main() {\n    Passenger p1(\"Alice\");\n    Passenger p2(\"Bob\");\n\n    {\n        Car myCar(\"Tesla Model 3\", 450);\n        myCar.addPassenger(&p1);\n        myCar.addPassenger(&p2);\n        myCar.displayCarDetails();\n    } // myCar scope ends here -> Engine destroyed, Passengers still exist!\n\n    std::cout << \"Outside Car scope: Passenger \" << p1.getName() << \" is still alive!\" << std::endl;\n    return 0;\n}\n\n// Expected Output:\n// Engine (450 HP) initialized.\n// Car model Tesla Model 3 created.\n// Car: Tesla Model 3 | Engine HP: 450\n// Passengers onboard:\n//  - Alice\n//  - Bob\n// Engine destroyed.\n// Outside Car scope: Passenger Alice is still alive!\n\n2. LAB EVALUATION CRITERIA:\n- UML Class Diagram Accuracy & Notation Usage (35%)\n- Correct Implementation of Aggregation vs Composition (35%)\n- Domain Requirements Mapping (15%)\n- Viva Voce (15%)"
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
        "title": "GeeksforGeeks Association, Composition and Aggregation in C++",
        "url": "https://www.geeksforgeeks.org/association-composition-aggregation-java/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain the key difference between Aggregation and Composition with real-world examples. (2 Marks)",
        "What is Association in Object-Oriented Modeling? (2 Marks)",
        "Draw UML notation symbols for Aggregation (hollow diamond) and Composition (filled diamond). (2 Marks)"
      ],
      "sixMarks": [
        "Draw a complete UML Class Diagram for a University System showing Department, Professor, Student, and Course relationships. (6 Marks)",
        "Write a C++ program illustrating Composition between `House` and `Room` classes. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Object-Oriented Analysis & Design (OOAD). Detail domain modeling, CRC cards, UML Class Diagram syntax, multiplicity indicators (1..*, 0..1), and object relationship implementation in C++/Java. (10 Marks)"
      ]
    }
  },
  {
    "title": "Mini Projects Using OOP Concepts",
    "slug": "oop-lab-mini-projects-using-oop-concepts",
    "order": 11,
    "estimatedHours": 8,
    "difficulty": "Advanced",
    "description": "Develop full mini-project applications applying integrated OOP concepts: Library Management System, Banking Application, Hospital Management System, Online Shopping System, and Hotel Management System.",
    "subTopics": [
      "Library Management System",
      "Hospital Management System",
      "Banking Application",
      "Online Shopping System",
      "Student Management Portal",
      "Inventory Management System",
      "Hotel Management System"
    ],
    "prerequisiteTitles": [
      "Object Oriented Design Practice"
    ],
    "learningObjectives": [
      "Integrate Encapsulation, Inheritance, Polymorphism, Abstraction, and File I/O in a full-fledged mini project.",
      "Implement user menu-driven interfaces with file persistence and error validation.",
      "Deliver modular OOP software with proper documentation and class structure."
    ],
    "notes": [
      {
        "title": "EXPERIMENT 11: FULL MINI PROJECT - LIBRARY MANAGEMENT SYSTEM",
        "content": "1. FULL LIBRARY MANAGEMENT SYSTEM MINI PROJECT (C++ COMPLETE ARCHITECTURE):\n\n#include <iostream>\n#include <vector>\n#include <string>\n#include <fstream>\n\nclass Book {\nprivate:\n    int id;\n    std::string title;\n    std::string author;\n    bool isIssued;\npublic:\n    Book(int i, std::string t, std::string a, bool issued = false)\n        : id(i), title(t), author(a), isIssued(issued) {}\n\n    int getId() const { return id; }\n    std::string getTitle() const { return title; }\n    std::string getAuthor() const { return author; }\n    bool getStatus() const { return isIssued; }\n\n    void issueBook() { isIssued = true; }\n    void returnBook() { isIssued = false; }\n\n    void display() const {\n        std::cout << \"ID: \" << id << \" | Title: \" << title \n                  << \" | Author: \" << author \n                  << \" | Status: \" << (isIssued ? \"ISSUED\" : \"AVAILABLE\") << std::endl;\n    }\n};\n\nclass LibrarySystem {\nprivate:\n    std::vector<Book> books;\npublic:\n    void addBook(int id, std::string title, std::string author) {\n        books.push_back(Book(id, title, author));\n        std::cout << \"Book '\" << title << \"' added to library inventory.\" << std::endl;\n    }\n\n    void displayAllBooks() const {\n        std::cout << \"\n=== LIBRARY INVENTORY ===\" << std::endl;\n        for (const auto& b : books) {\n            b.display();\n        }\n    }\n\n    void issueBook(int id) {\n        for (auto& b : books) {\n            if (b.getId() == id) {\n                if (!b.getStatus()) {\n                    b.issueBook();\n                    std::cout << \"Success: Book ID \" << id << \" issued.\" << std::endl;\n                } else {\n                    std::cout << \"Error: Book is already issued.\" << std::endl;\n                }\n                return;\n            }\n        }\n        std::cout << \"Error: Book ID not found.\" << std::endl;\n    }\n};\n\nint main() {\n    LibrarySystem lib;\n    lib.addBook(101, \"Object-Oriented Programming\", \"Robert Lafore\");\n    lib.addBook(102, \"Clean Architecture\", \"Robert C. Martin\");\n\n    lib.displayAllBooks();\n    lib.issueBook(101);\n    lib.displayAllBooks();\n    return 0;\n}\n\n// Expected Output:\n// Book 'Object-Oriented Programming' added to library inventory.\n// Book 'Clean Architecture' added to library inventory.\n// === LIBRARY INVENTORY ===\n// ID: 101 | Title: Object-Oriented Programming | Author: Robert Lafore | Status: AVAILABLE\n// ID: 102 | Title: Clean Architecture | Author: Robert C. Martin | Status: AVAILABLE\n// Success: Book ID 101 issued.\n// === LIBRARY INVENTORY ===\n// ID: 101 | Title: Object-Oriented Programming | Author: Robert Lafore | Status: ISSUED\n// ID: 102 | Title: Clean Architecture | Author: Robert C. Martin | Status: AVAILABLE\n\n2. LAB EVALUATION CRITERIA:\n- Project Architectural Design & Module Division (30%)\n- Feature Completeness & File Persistence (35%)\n- Code Cleanliness & User Interface Design (20%)\n- Mini Project Viva & Demo (15%)"
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
        "title": "GeeksforGeeks C++ Projects",
        "url": "https://www.geeksforgeeks.org/c-plus-plus-projects/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State 4 essential modules required in a full-fledged Banking Application. (2 Marks)",
        "How does object persistence enhance mini-project usability? (2 Marks)",
        "Explain menu-driven execution flow in CLI mini-projects. (2 Marks)"
      ],
      "sixMarks": [
        "Explain class design and class relationships for a Banking Application with Customer, Account, Transaction, and Bank classes. (6 Marks)",
        "Write a complete C++ menu-driven program for an Inventory Management System adding/searching products. (6 Marks)"
      ],
      "longAnswer": [
        "Develop a complete System Requirement & Object-Oriented Architecture Specification for an Online Shopping System. Detail Use Cases, Class Diagrams, State Transitions, Persistence Layer, and code implementation. (10 Marks)"
      ]
    }
  },
  {
    "title": "Advanced OOP Practice",
    "slug": "oop-lab-advanced-oop-practice",
    "order": 12,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Explore Advanced OOP practices: Code reusability, modular programming, introduction to Design Patterns (Singleton, Factory, Observer), OOP debugging techniques, code optimization, and industry software development practices.",
    "subTopics": [
      "Code Reusability",
      "Modular Programming",
      "Design Patterns Introduction",
      "Debugging OOP Applications",
      "Code Optimization",
      "Software Development Practices"
    ],
    "prerequisiteTitles": [
      "Mini Projects Using OOP Concepts"
    ],
    "learningObjectives": [
      "Understand Creational (Singleton, Factory) and Behavioral (Observer) Design Patterns.",
      "Apply SOLID principles to build decoupled, optimized OOP codebases.",
      "Optimize OOP runtime performance (RAII, Move Semantics, Smart Pointers)."
    ],
    "notes": [
      {
        "title": "EXPERIMENT 12: DESIGN PATTERNS (SINGLETON & FACTORY) & SMART POINTERS",
        "content": "1. SINGLETON & FACTORY DESIGN PATTERNS IMPLEMENTATION (C++17):\n\n#include <iostream>\n#include <memory>\n#include <string>\n\n// --- SINGLETON DESIGN PATTERN (Thread-Safe Logger) ---\nclass Logger {\nprivate:\n    Logger() { std::cout << \"[SYSTEM] Logger Initialized.\" << std::endl; }\npublic:\n    Logger(const Logger&) = delete;\n    Logger& operator=(const Logger&) = delete;\n\n    static Logger& getInstance() {\n        static Logger instance; // Guaranteed thread-safe in C++11+\n        return instance;\n    }\n\n    void log(const std::string& msg) {\n        std::cout << \"[LOG] \" << msg << std::endl;\n    }\n};\n\n// --- FACTORY DESIGN PATTERN ---\nclass Product {\npublic:\n    virtual void use() = 0;\n    virtual ~Product() {}\n};\n\nclass ConcreteProductA : public Product {\npublic:\n    void use() override { std::cout << \"Using Product A\" << std::endl; }\n};\n\nclass ConcreteProductB : public Product {\npublic:\n    void use() override { std::cout << \"Using Product B\" << std::endl; }\n};\n\nclass ProductFactory {\npublic:\n    static std::unique_ptr<Product> createProduct(char type) {\n        if (type == 'A') return std::make_unique<ConcreteProductA>();\n        if (type == 'B') return std::make_unique<ConcreteProductB>();\n        return nullptr;\n    }\n};\n\nint main() {\n    // Singleton Test\n    Logger::getInstance().log(\"Application starting up...\");\n\n    // Factory Test\n    auto prodA = ProductFactory::createProduct('A');\n    auto prodB = ProductFactory::createProduct('B');\n\n    if (prodA) prodA->use();\n    if (prodB) prodB->use();\n\n    return 0;\n}\n\n// Expected Output:\n// [SYSTEM] Logger Initialized.\n// [LOG] Application starting up...\n// Using Product A\n// Using Product B\n\n2. LAB EVALUATION CRITERIA:\n- Correct Design Pattern Implementation (35%)\n- Smart Pointer Memory Management ('std::unique_ptr') (35%)\n- Code Optimization & SOLID Principles Application (15%)\n- Viva Voce & Capstone Review (15%)"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Design Patterns: Elements of Reusable Object-Oriented Software",
        "author": "Gang of Four (GoF)"
      }
    ],
    "practiceLinks": [
      {
        "title": "Refactoring Guru Design Patterns",
        "url": "https://refactoring.guru/design-patterns"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is a Design Pattern? Name 3 Creational and 3 Behavioral design patterns. (2 Marks)",
        "Explain Singleton Design Pattern and how private constructors enforce single instance. (2 Marks)",
        "What is RAII (Resource Acquisition Is Initialization) in C++? (2 Marks)"
      ],
      "sixMarks": [
        "Implement Singleton Design Pattern in C++ ensuring thread-safety and deleted copy constructors. (6 Marks)",
        "Explain Factory Method Pattern with a complete code example in Java or C++. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Advanced OOP Practices. Detail Design Patterns (Singleton, Factory, Observer), Smart Pointers (`unique_ptr`, `shared_ptr`, `weak_ptr`), Move Semantics (`std::move`), and RAII memory safety in modern software engineering. (10 Marks)"
      ]
    }
  }
];
