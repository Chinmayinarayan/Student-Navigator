module.exports = [
  {
    "title": "Database Environment Setup",
    "slug": "database-applications-lab-environment-setup",
    "order": 1,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Hands-on installation and setup of DBMS environments: MySQL Server & Workbench, Oracle Database & SQL Developer, connection parameters, and authentication configuration.",
    "subTopics": [
      "Installation of Database Software",
      "MySQL Setup",
      "Oracle Database Setup",
      "SQL Developer Basics",
      "Database Connection Setup"
    ],
    "prerequisiteTitles": [],
    "learningObjectives": [
      "Install MySQL Community Server and MySQL Workbench on Windows/Linux.",
      "Configure Oracle Database 19c / 21c Express Edition & Oracle SQL Developer.",
      "Establish connection via JDBC URL (`jdbc:mysql://localhost:3306/dbname`)."
    ],
    "notes": [
      {
        "title": "Experiment 1: Database Software Installation & Connection Setup",
        "content": "EXPERIMENT 1: DATABASE ENVIRONMENT SETUP\n\nAIM:\nTo install MySQL Community Server, configure MySQL Workbench, and establish database connection credentials.\n\nTHEORY:\nA Relational Database Management System (RDBMS) requires server instance setup, root user credential configuration, default character set (UTF-8) selection, and client GUI tool configuration.\n\nREQUIREMENTS:\n- Software: MySQL Server 8.0, MySQL Workbench, Oracle SQL Developer\n- Operating System: Windows / Linux\n\nPROCEDURE:\n1. Run MySQL Installer -> Choose Developer Default Setup Type.\n2. Set Root Password -> Enable MySQL Windows Service (Port 3306).\n3. Open MySQL Workbench -> Click '+' to Add New Connection:\n   - Connection Name: Localhost_MySQL\n   - Hostname: 127.0.0.1, Port: 3306, Username: root\n4. Click 'Test Connection' -> Enter Root Password -> Connection Successful!\n\nSQL SETUP COMMANDS:\nCREATE DATABASE university_db;\nUSE university_db;\nSELECT VERSION(), CURRENT_USER();\n\nOUTPUT / RESULT:\nDatabase server installed successfully and connected via Workbench interface. Version 8.0 returned."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Database System Concepts Lab Manual",
        "author": "Abraham Silberschatz"
      }
    ],
    "practiceLinks": [
      {
        "title": "MySQL Official Reference Manual",
        "url": "https://dev.mysql.com/doc/refman/8.0/en/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is the default TCP port number for MySQL and Oracle DB? (2 Marks)",
        "Explain the role of a GUI client tool like MySQL Workbench. (2 Marks)",
        "What is a JDBC connection string format? (2 Marks)"
      ],
      "sixMarks": [
        "Write step-by-step procedure to install MySQL Server, configure root user, create a database, and verify connection. (6 Marks)",
        "Describe Oracle SQL Developer setup detailing TNSNAMES.ORA and Listener configuration. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Database Administration Setup. Detail MySQL configuration file (`my.cnf` / `my.ini`), buffer pool size memory tuning, user privilege management (`GRANT / REVOKE`), and remote connection SSL setup. (10 Marks)"
      ]
    }
  },
  {
    "title": "SQL Basics Practice",
    "slug": "database-applications-lab-sql-basics",
    "order": 2,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Practice DDL and DML commands: CREATE TABLE with constraints (Primary Key, Foreign Key, Unique, Not Null, Check), INSERT, UPDATE, DELETE, and ALTER.",
    "subTopics": [
      "Creating Databases",
      "Creating Tables",
      "Defining Attributes",
      "Applying Constraints (Primary Key, Foreign Key, Unique, Not Null)",
      "Insert Records",
      "Update Records",
      "Delete Records"
    ],
    "prerequisiteTitles": [
      "Database Environment Setup"
    ],
    "learningObjectives": [
      "Write DDL scripts to create relational tables with Primary Key and Foreign Key constraints.",
      "Execute DML operations: INSERT INTO, UPDATE, DELETE FROM.",
      "Enforce Referential Integrity and ON DELETE CASCADE options."
    ],
    "notes": [
      {
        "title": "Experiment 2: DDL & DML Schema Script with Constraints",
        "content": "EXPERIMENT 2: SQL BASICS PRACTICE (DDL & DML)\n\nAIM:\nTo design and create `Departments` and `Employees` relational tables with Primary Key, Foreign Key, and Check constraints, and perform DML operations.\n\nSQL CODE:\n-- 1. Create Departments Table\nCREATE TABLE Departments (\n    dept_id INT PRIMARY KEY,\n    dept_name VARCHAR(50) NOT NULL UNIQUE,\n    location VARCHAR(50)\n);\n\n-- 2. Create Employees Table with Foreign Key\nCREATE TABLE Employees (\n    emp_id INT PRIMARY KEY,\n    first_name VARCHAR(50) NOT NULL,\n    last_name VARCHAR(50) NOT NULL,\n    salary DECIMAL(10,2) CHECK (salary > 0),\n    dept_id INT,\n    FOREIGN KEY (dept_id) REFERENCES Departments(dept_id) ON DELETE SET NULL\n);\n\n-- 3. DML Insert Operations\nINSERT INTO Departments VALUES (10, 'Engineering', 'Building A');\nINSERT INTO Departments VALUES (20, 'Human Resources', 'Building B');\n\nINSERT INTO Employees VALUES (101, 'John', 'Doe', 75000.00, 10);\nINSERT INTO Employees VALUES (102, 'Jane', 'Smith', 82000.00, 10);\n\n-- 4. Update and Delete\nUPDATE Employees SET salary = salary * 1.10 WHERE dept_id = 10;\nDELETE FROM Employees WHERE emp_id = 102;\n\nOUTPUT / RESULT:\nTables created successfully with constraints enforced. Salary updated by 10% for dept 10."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "SQL in 10 Minutes a Day",
        "author": "Ben Forta"
      }
    ],
    "practiceLinks": [
      {
        "title": "W3Schools SQL Exercises",
        "url": "https://www.w3schools.com/sql/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between Primary Key and Unique constraint. (2 Marks)",
        "What is the effect of `ON DELETE CASCADE` on a Foreign Key constraint? (2 Marks)",
        "Write SQL syntax for adding a `CHECK` constraint to an existing column. (2 Marks)"
      ],
      "sixMarks": [
        "Write SQL DDL statements to create `Students` and `Enrollments` tables with proper data types, primary keys, foreign keys, and default values. (6 Marks)",
        "Explain DDL vs DML commands with syntax for CREATE, ALTER, DROP, INSERT, UPDATE, DELETE. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Relational Constraint Enforcement. Detail primary key indexing, referential integrity violation scenarios, cascade vs restrict vs set-null rules, and column vs table-level constraints. (10 Marks)"
      ]
    }
  },
  {
    "title": "SQL Query Experiments",
    "slug": "database-applications-lab-sql-query-experiments",
    "order": 3,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master SQL query clauses: WHERE filtering, ORDER BY, GROUP BY, HAVING, Aggregate functions (COUNT, SUM, AVG, MIN, MAX), Subqueries, and JOINS (Inner, Left, Right, Full Outer).",
    "subTopics": [
      "Simple SELECT Queries",
      "Filtering Data Using WHERE",
      "Sorting Data",
      "Aggregate Functions",
      "Grouping Data",
      "Nested Queries",
      "Joins Implementation"
    ],
    "prerequisiteTitles": [
      "SQL Basics Practice"
    ],
    "learningObjectives": [
      "Write multi-table SQL JOIN queries (INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN).",
      "Aggregate data using GROUP BY and filter groups using HAVING clause.",
      "Construct Correlated and Non-Correlated Subqueries."
    ],
    "notes": [
      {
        "title": "Experiment 3: Advanced SQL Joins, GROUP BY & Subqueries",
        "content": "EXPERIMENT 3: SQL JOINS AND AGGREGATION QUERIES\n\nAIM:\nTo write and execute SQL queries utilizing INNER JOIN, LEFT JOIN, GROUP BY, HAVING, and Correlated Subqueries on a multi-table database.\n\nSQL CODE EXAMPLES:\n1. Inner Join with Aggregation:\n   SELECT d.dept_name, COUNT(e.emp_id) AS total_employees, AVG(e.salary) AS avg_salary\n   FROM Departments d\n   INNER JOIN Employees e ON d.dept_id = e.dept_id\n   GROUP BY d.dept_name\n   HAVING AVG(e.salary) > 60000\n   ORDER BY avg_salary DESC;\n\n2. Correlated Subquery (Find employees earning more than their department average):\n   SELECT emp_id, first_name, salary, dept_id\n   FROM Employees e1\n   WHERE salary > (\n       SELECT AVG(salary)\n       FROM Employees e2\n       WHERE e2.dept_id = e1.dept_id\n   );\n\nOUTPUT / RESULT:\nQueries executed cleanly returning aggregated department averages and correlated employee listings."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "SQL Queries for Mere Mortals",
        "author": "John L. Viescas"
      }
    ],
    "practiceLinks": [
      {
        "title": "LeetCode SQL Study Plan",
        "url": "https://leetcode.com/studyplan/top-sql-50/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between WHERE clause and HAVING clause in SQL. (2 Marks)",
        "Compare INNER JOIN and LEFT OUTER JOIN output behavior. (2 Marks)",
        "What is a Correlated Subquery? (2 Marks)"
      ],
      "sixMarks": [
        "Write SQL queries for: (a) Find top 3 highest paid employees, (b) Count total orders per customer for customers with > 5 orders, (c) List departments with no employees using LEFT JOIN. (6 Marks)",
        "Explain SQL execution order of clauses: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY -> LIMIT. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Complex SQL Querying. Detail self-joins, UNION vs UNION ALL, CTEs (Common Table Expressions `WITH` clause), Window Functions (`ROW_NUMBER()`, `RANK()`, `DENSE_RANK()`), and query execution plan optimization. (10 Marks)"
      ]
    }
  },
  {
    "title": "Database Design Experiments",
    "slug": "database-applications-lab-database-design",
    "order": 4,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Practical database design: Draw ER Diagrams, convert ER Models to Relational Schemas, perform Normalization (1NF, 2NF, 3NF, BCNF), and analyze Functional Dependencies.",
    "subTopics": [
      "Entity Relationship Diagram Creation",
      "Converting ER Model to Relational Model",
      "Database Schema Design",
      "Normalization Exercises",
      "Functional Dependency Analysis"
    ],
    "prerequisiteTitles": [
      "SQL Basics Practice"
    ],
    "learningObjectives": [
      "Design ER Diagrams for real-world domains (Hospital, University, E-Commerce).",
      "Apply ER-to-Relational mapping rules (Strong Entities, Weak Entities, 1:N, M:N relationships).",
      "Normalize an unnormalized relation $R$ to 3NF/BCNF."
    ],
    "notes": [
      {
        "title": "Experiment 4: ER Diagram Mapping & Normalization Step-by-Step",
        "content": "EXPERIMENT 4: DATABASE DESIGN & NORMALIZATION\n\nAIM:\nTo design an ER Diagram for a College Management System, map it to a Relational Schema, and normalize a table to 3NF.\n\nTHEORY:\n- 1NF: Eliminate repeating groups; ensure atomic values.\n- 2NF: Must be in 1NF + no Partial Functional Dependencies (non-prime attributes fully dependent on candidate key).\n- 3NF: Must be in 2NF + no Transitive Dependencies ($X \rightarrow Y, Y \rightarrow Z Rightarrow X \rightarrow Z$).\n\nNORMALIZATION EXERCISE:\nRelation $R(A, B, C, D, E)$ with FDs: $A \rightarrow B, B \rightarrow C, A \rightarrow D, D \rightarrow E$.\n- Candidate Key = $A$ (since $A^+ = {A, B, C, D, E}$).\n- $B \rightarrow C$ is Transitive Dependency ($A \rightarrow B \rightarrow C$).\n- Decomposition to 3NF:\n  $R_1(A, B, D)$, $R_2(B, C)$, $R_3(D, E)$. All relations in 3NF!"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Database Systems: Design, Implementation, and Management",
        "author": "Carlos Coronel"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Normalization Practice Problems",
        "url": "https://www.geeksforgeeks.org/normalization-in-dbms/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State conditions for a table to be in 3NF and BCNF. (2 Marks)",
        "How is an M:N (Many-to-Many) ER relationship mapped to relational tables? (2 Marks)",
        "What is a Transitive Dependency? (2 Marks)"
      ],
      "sixMarks": [
        "Design an ER Diagram for a Library Management System with Entities (Book, Member, Publisher, Loan) and cardinalities. Convert to Relational Schema. (6 Marks)",
        "Given Relation $R(A,B,C,D)$ with FDs $AB \rightarrow C, C \rightarrow D, D \rightarrow A$. Find Candidate Keys and determine highest Normal Form. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Relational Database Design Principles. Detail ER modeling (Weak Entity Sets, Multi-valued attributes, ISA Generalization), Lossless-Join decomposition proof, Dependency Preservation, and BCNF vs 3NF trade-offs. (10 Marks)"
      ]
    }
  },
  {
    "title": "Advanced SQL Programming",
    "slug": "database-applications-lab-advanced-sql-programming",
    "order": 5,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Write PL/SQL & MySQL procedural scripts: Views, Stored Procedures with parameters, Stored Functions, Database Triggers (`BEFORE`/`AFTER INSERT/UPDATE`), Cursors, and Exception Handling.",
    "subTopics": [
      "Views Creation",
      "Stored Procedures",
      "Functions",
      "Triggers",
      "Cursors",
      "Exception Handling"
    ],
    "prerequisiteTitles": [
      "SQL Query Experiments"
    ],
    "learningObjectives": [
      "Create Views for security and query abstraction.",
      "Write Stored Procedures with IN/OUT parameters.",
      "Implement Database Triggers to automate audit logs and enforce business rules."
    ],
    "notes": [
      {
        "title": "Experiment 5: Stored Procedure & Audit Trigger PL/SQL Code",
        "content": "EXPERIMENT 5: STORED PROCEDURES & TRIGGERS\n\nAIM:\nTo write a Stored Procedure to calculate employee bonuses, and create a Database Trigger to record deleted employee records into an Audit table.\n\nSQL / PL/SQL CODE:\n-- 1. Audit Log Table\nCREATE TABLE Employee_Audit (\n    audit_id INT AUTO_INCREMENT PRIMARY KEY,\n    emp_id INT,\n    action_type VARCHAR(20),\n    action_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n\n-- 2. AFTER DELETE Trigger\nDELIMITER //\nCREATE TRIGGER trg_after_emp_delete\nAFTER DELETE ON Employees\nFOR EACH ROW\nBEGIN\n    INSERT INTO Employee_Audit (emp_id, action_type)\n    VALUES (OLD.emp_id, 'DELETED');\nEND //\nDELIMITER ;\n\n-- 3. Stored Procedure with IN/OUT Parameters\nDELIMITER //\nCREATE PROCEDURE CalculateBonus(IN p_emp_id INT, OUT p_bonus DECIMAL(10,2))\nBEGIN\n    DECLARE v_salary DECIMAL(10,2);\n    SELECT salary INTO v_salary FROM Employees WHERE emp_id = p_emp_id;\n    SET p_bonus = v_salary * 0.15;\nEND //\nDELIMITER ;\n\nOUTPUT / RESULT:\nDeleting an employee automatically inserted audit log record into `Employee_Audit`."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Murach's MySQL",
        "author": "Joel Murach"
      }
    ],
    "practiceLinks": [
      {
        "title": "Oracle PL/SQL Language Reference",
        "url": "https://docs.oracle.com/en/database/oracle/oracle-database/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between a Stored Procedure and a Stored Function. (2 Marks)",
        "What is the difference between `BEFORE` and `AFTER` triggers? (2 Marks)",
        "Explain the purpose of an Explicit Cursor in PL/SQL. (2 Marks)"
      ],
      "sixMarks": [
        "Write a Stored Procedure in MySQL to update student marks and automatically assign letter grade (A, B, C, F) using IF-THEN logic. (6 Marks)",
        "Create a Trigger that prevents inserting an employee record if their age is under 18 or salary is less than minimum wage. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Database Procedural Programming. Detail PL/SQL block structure (DECLARE, BEGIN, EXCEPTION), implicit vs explicit cursors (`OPEN`, `FETCH`, `CLOSE`), custom exception handling, and database trigger cascading hazards. (10 Marks)"
      ]
    }
  },
  {
    "title": "Transaction Management Experiments",
    "slug": "database-applications-lab-transaction-management",
    "order": 6,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Demonstrate transaction processing: TCL commands (`COMMIT`, `ROLLBACK`, `SAVEPOINT`), Isolation levels, concurrency anomalies (Dirty Read, Non-Repeatable Read, Phantom Read), and Locking.",
    "subTopics": [
      "Transaction Commands (COMMIT, ROLLBACK, SAVEPOINT)",
      "Transaction Processing",
      "Concurrency Demonstration",
      "Locking Mechanisms"
    ],
    "prerequisiteTitles": [
      "Advanced SQL Programming"
    ],
    "learningObjectives": [
      "Demonstrate ACID properties using `START TRANSACTION`, `SAVEPOINT`, and `ROLLBACK`.",
      "Simulate Concurrency Anomalies across two concurrent terminal sessions.",
      "Configure Transaction Isolation Levels (`READ UNCOMMITTED`, `READ COMMITTED`, `REPEATABLE READ`, `SERIALIZABLE`)."
    ],
    "notes": [
      {
        "title": "Experiment 6: TCL Commands & Concurrency Isolation Levels",
        "content": "EXPERIMENT 6: TRANSACTION CONTROL & CONCURRENCY\n\nAIM:\nTo execute TCL transaction commands (`COMMIT`, `ROLLBACK`, `SAVEPOINT`) and simulate concurrent locking behavior.\n\nSQL CODE:\n-- Transaction 1: Bank Account Transfer\nSTART TRANSACTION;\n\nUPDATE Accounts SET balance = balance - 500.00 WHERE account_id = 1001;\n\nSAVEPOINT sp1; -- Create Savepoint\n\nUPDATE Accounts SET balance = balance + 500.00 WHERE account_id = 1002;\n\n-- Simulate error condition\nROLLBACK TO sp1; -- Undo second update only\n\nCOMMIT; -- Commit first update\n\n-- Checking Transaction Isolation Level\nSET TRANSACTION ISOLATION LEVEL REPEATABLE READ;\n\nOUTPUT / RESULT:\nAccount 1001 debited by 500. Savepoint rollback successfully undid second update before final commit."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Database System Concepts",
        "author": "Silberschatz, Korth, Sudarshan"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Transaction Control Language (TCL)",
        "url": "https://www.geeksforgeeks.org/sql-tcl-commands/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain the purpose of `SAVEPOINT` in SQL transactions. (2 Marks)",
        "Define Dirty Read, Non-Repeatable Read, and Phantom Read concurrency anomalies. (2 Marks)",
        "Differentiate between Shared Lock (S) and Exclusive Lock (X). (2 Marks)"
      ],
      "sixMarks": [
        "Write SQL TCL script demonstrating a bank fund transfer transaction using START TRANSACTION, UPDATE, SAVEPOINT, and ROLLBACK. (6 Marks)",
        "Explain SQL 92 Transaction Isolation Levels (Read Uncommitted, Read Committed, Repeatable Read, Serializable) against 3 read anomalies matrix. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Transaction Processing & Concurrency Control. Detail ACID property enforcement, Two-Phase Locking (2PL) protocol (Growing phase, Shrinking phase), Deadlock detection and prevention, and Multi-Version Concurrency Control (MVCC) in InnoDB. (10 Marks)"
      ]
    }
  },
  {
    "title": "Database Connectivity Programming",
    "slug": "database-applications-lab-database-connectivity",
    "order": 7,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Build application-database interfaces: Java JDBC / Python `mysql-connector` / Node.js `mysql2` bindings, executing SQL queries programmatically, PreparedStatement security, and CRUD API operations.",
    "subTopics": [
      "JDBC Basics",
      "Connecting Application with Database",
      "Executing SQL Queries from Programs",
      "CRUD Application Development"
    ],
    "prerequisiteTitles": [
      "SQL Query Experiments"
    ],
    "learningObjectives": [
      "Connect Java / Python / Node.js application to MySQL database.",
      "Use `PreparedStatement` / Parameterized queries to prevent SQL Injection.",
      "Develop a full CRUD command-line or REST application."
    ],
    "notes": [
      {
        "title": "Experiment 7: Python MySQL CRUD Application Source Code",
        "content": "EXPERIMENT 7: DATABASE CONNECTIVITY PROGRAMMING (PYTHON + MYSQL)\n\nAIM:\nTo write a Python program using `mysql-connector-python` to connect to MySQL database and perform full CRUD (Create, Read, Update, Delete) operations.\n\nREQUIREMENTS:\n- Software: Python 3.x, MySQL Server, `pip install mysql-connector-python`\n\nPYTHON CODE (app.py):\nimport mysql.connector\n\n# 1. Establish Connection\nconn = mysql.connector.connect(\n    host=\"localhost\",\n    user=\"root\",\n    password=\"password123\",\n    database=\"university_db\"\n)\ncursor = conn.cursor()\n\n# 2. CREATE (Insert)\nquery_insert = \"INSERT INTO Students (name, age, course) VALUES (%s, %s, %s)\"\ncursor.execute(query_insert, (\"Alice Smith\", 21, \"Computer Science\"))\nconn.commit()\n\n# 3. READ (Select)\ncursor.execute(\"SELECT * FROM Students\")\nfor row in cursor.fetchall():\n    print(row)\n\n# 4. UPDATE\ncursor.execute(\"UPDATE Students SET age = %s WHERE name = %s\", (22, \"Alice Smith\"))\nconn.commit()\n\n# 5. Close Connection\ncursor.close()\nconn.close()\n\nOUTPUT / RESULT:\nRecord successfully created, fetched, updated, and verified in MySQL database."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Java Database Programming with JDBC",
        "author": "George Reese"
      }
    ],
    "practiceLinks": [
      {
        "title": "MySQL Connector/Python Developer Guide",
        "url": "https://dev.mysql.com/doc/connector-python/en/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What are the 5 core steps in JDBC database connectivity? (2 Marks)",
        "Why should you use `PreparedStatement` instead of simple `Statement` in Java JDBC? (2 Marks)",
        "Why is `conn.commit()` required after DML operations in application code? (2 Marks)"
      ],
      "sixMarks": [
        "Write complete Java JDBC or Python code to connect to a database, insert a new record using parameterized query, and display all records. (6 Marks)",
        "Describe Connection Pooling (HikariCP / DBCP) architecture and benefits in high-concurrency web applications. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Database Connectivity Architectures. Detail JDBC driver types (Type 1 to Type 4 Pure Java thin driver), ORM frameworks (Hibernate / SQLAlchemy), transaction management in code, and handling SQL exceptions. (10 Marks)"
      ]
    }
  },
  {
    "title": "Database Application Development",
    "slug": "database-applications-lab-database-application-development",
    "order": 8,
    "estimatedHours": 6,
    "difficulty": "Advanced",
    "description": "Develop full database domain applications: Student Management System, Library Management System, Banking Database System, Hospital Management, or E-Commerce Database.",
    "subTopics": [
      "Student Management System",
      "Library Management System",
      "Banking Database System",
      "Hospital Management Database",
      "E-Commerce Database"
    ],
    "prerequisiteTitles": [
      "Database Connectivity Programming",
      "Database Design Experiments"
    ],
    "learningObjectives": [
      "Design relational schema and UI/API interface for an Enterprise Domain Application.",
      "Implement multi-table foreign key cascades and triggers for business validation.",
      "Build complete backend API connected to database."
    ],
    "notes": [
      {
        "title": "Banking Database System Schema Blueprint",
        "content": "DATABASE APPLICATION: BANKING DATABASE SYSTEM\n\nAIM:\nTo design and build an end-to-end Banking Database Application with Accounts, Customers, Transactions, and Audit Triggers.\n\nRELATIONAL SCHEMA:\n1. Customers(customer_id PK, name, email, phone, address)\n2. Accounts(account_number PK, customer_id FK, account_type, balance CHECK >= 0)\n3. Transactions(transaction_id PK, account_number FK, type, amount, timestamp)\n\nBUSINESS TRIGGER (Prevent Negative Balance):\nDELIMITER //\nCREATE TRIGGER check_account_balance\nBEFORE UPDATE ON Accounts\nFOR EACH ROW\nBEGIN\n    IF NEW.balance < 0 THEN\n        SIGNAL SQLSTATE '45000'\n        SET MESSAGE_TEXT = 'Transaction Rejected: Insufficient Funds!';\n    END IF;\nEND //\nDELIMITER ;"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Database Systems: A Practical Approach",
        "author": "Thomas Connolly"
      }
    ],
    "practiceLinks": [
      {
        "title": "GitHub Full Stack Database Sample Projects",
        "url": "https://github.com/topics/database-project"
      }
    ],
    "questionBank": {
      "conceptual": [
        "List 4 relational tables required for a Library Management System. (2 Marks)",
        "How do triggers enforce business rules in a Banking Database Application? (2 Marks)",
        "What is the role of indexes in an E-Commerce product catalog database? (2 Marks)"
      ],
      "sixMarks": [
        "Design complete relational schema (Tables, Columns, Data types, Keys) for an E-Commerce Database system (Users, Products, Orders, OrderDetails, Payments). (6 Marks)",
        "Write SQL queries for a Library Management System: (a) Issue a book, (b) Calculate fine for overdue books, (c) List available copies. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Enterprise Database System Architecture. Detail ER diagram design, schema creation DDL, complex join reports, transaction integrity rules, and REST API integration for a Hospital Management System. (10 Marks)"
      ]
    }
  },
  {
    "title": "NoSQL Database Practice",
    "slug": "database-applications-lab-nosql-practice",
    "order": 9,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Hands-on NoSQL document database: MongoDB installation, MongoDB Shell / Compass, Collections, JSON Document CRUD (`insertOne`, `find`, `updateOne`, `deleteOne`), and Aggregation Pipeline.",
    "subTopics": [
      "MongoDB Installation",
      "Creating Collections",
      "Document Operations",
      "CRUD Operations",
      "MongoDB Queries"
    ],
    "prerequisiteTitles": [
      "Database Environment Setup"
    ],
    "learningObjectives": [
      "Install MongoDB Community Edition & MongoDB Compass GUI.",
      "Execute MongoDB Shell CRUD operations (`insertOne`, `find`, `updateOne`, `deleteOne`).",
      "Build MongoDB Aggregation Pipeline (`$match`, `$group`, `$project`, `$sort`)."
    ],
    "notes": [
      {
        "title": "MongoDB Shell CRUD Commands & Aggregation Pipeline",
        "content": "NOSQL PRACTICE: MONGODB DOCUMENT OPERATIONS\n\nAIM:\nTo perform document CRUD operations and aggregation pipeline queries in MongoDB Shell.\n\nMONGODB SHELL COMMANDS:\n1. Create Database & Collection:\n   use university_db\n   db.createCollection(\"students\")\n\n2. Insert Documents (CREATE):\n   db.students.insertMany([\n     { student_id: 1, name: \"Alice\", gpa: 3.8, major: \"CS\", skills: [\"Python\", \"MongoDB\"] },\n     { student_id: 2, name: \"Bob\", gpa: 3.2, major: \"ECE\", skills: [\"C++\", \"Circuit\"] },\n     { student_id: 3, name: \"Charlie\", gpa: 3.9, major: \"CS\", skills: [\"Java\", \"SQL\"] }\n   ])\n\n3. Query Documents (READ):\n   db.students.find({ major: \"CS\", gpa: { $gt: 3.5 } })\n\n4. Update Document (UPDATE):\n   db.students.updateOne({ student_id: 1 }, { $set: { gpa: 3.9 } })\n\n5. Aggregation Pipeline:\n   db.students.aggregate([\n     { $match: { major: \"CS\" } },\n     { $group: { _id: \"$major\", avg_gpa: { $avg: \"$gpa\" }, count: { $sum: 1 } } }\n   ])\n\nOUTPUT / RESULT:\nDocuments inserted and queried cleanly. Aggregation returned average CS GPA 3.9."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "MongoDB: The Definitive Guide",
        "author": "Shannon Bradshaw"
      }
    ],
    "practiceLinks": [
      {
        "title": "MongoDB University Free Courses",
        "url": "https://learn.mongodb.com/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between Relational Tables (RDBMS) and MongoDB Collections (NoSQL). (2 Marks)",
        "Write MongoDB query syntax to find all documents where age > 25. (2 Marks)",
        "What is the MongoDB Aggregation Pipeline (`$match`, `$group`)? (2 Marks)"
      ],
      "sixMarks": [
        "Explain MongoDB Document CRUD operations: insertOne, find with query operators ($gt, $in, $or), updateOne with $set/$push, and deleteOne. (6 Marks)",
        "Describe MongoDB Indexing types (Single field, Compound, Text, Geospatial) and analyze query performance using `explain('executionStats')`. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on NoSQL Document Databases. Detail BSON binary data format, embedding vs referencing data models, MongoDB Replica Sets high availability, Sharding horizontal scaling, and MongoDB Mongoose Node.js ODM driver. (10 Marks)"
      ]
    }
  },
  {
    "title": "Database Project Work",
    "slug": "database-applications-lab-project-work",
    "order": 10,
    "estimatedHours": 6,
    "difficulty": "Advanced",
    "description": "Complete end-to-end Database Capstone Project: Requirement Analysis, ER Diagram, Normalization, DDL/DML Schema Creation, Stored Procedures/Triggers, Application Integration, Testing, and Documentation.",
    "subTopics": [
      "Requirement Analysis",
      "Database Design",
      "ER Diagram",
      "Schema Creation",
      "Query Implementation",
      "Testing",
      "Documentation"
    ],
    "prerequisiteTitles": [
      "Database Application Development",
      "NoSQL Database Practice"
    ],
    "learningObjectives": [
      "Execute complete Database System Life Cycle from Requirement Analysis to Deployment.",
      "Produce formal Project Documentation (ER Diagrams, Data Dictionary, Schema SQL, Test Cases).",
      "Present live project demonstration."
    ],
    "notes": [
      {
        "title": "Database Capstone Project Execution Template",
        "content": "DATABASE CAPSTONE PROJECT TEMPLATE\n\n1. Project Lifecycle Deliverables:\n   - Phase 1: Problem Statement & Requirement Specifications.\n   - Phase 2: Conceptual Design (ER Diagram with entities, attributes, cardinalities).\n   - Phase 3: Logical Design (Relational Schema in 3NF, Data Dictionary).\n   - Phase 4: Physical Implementation (DDL Scripts, Indexes, Triggers, Views).\n   - Phase 5: Application Integration (Python/Node/Java REST API).\n   - Phase 6: Testing & Performance Tuning (Query Execution Plans, Indexes).\n   - Phase 7: Final Technical Report & Live Demo."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Database Systems: Design, Implementation, and Management",
        "author": "Carlos Coronel"
      }
    ],
    "practiceLinks": [
      {
        "title": "GitHub Top Rated Database Capstone Projects",
        "url": "https://github.com/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "List 5 phases of the Database System Development Life Cycle. (2 Marks)",
        "What is a Data Dictionary in database project documentation? (2 Marks)",
        "Why is query execution plan testing crucial before project deployment? (2 Marks)"
      ],
      "sixMarks": [
        "Outline Data Dictionary specification table (Field Name, Data Type, Constraints, Description) for an Employee Management Database. (6 Marks)",
        "Explain Database Performance Tuning strategies: Adding B-Tree Indexes, Query Refactoring, and Removing Unnecessary Joins. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Database Capstone Project Execution. Detail full system lifecycle for a Smart Hospital Management System: ER Diagram, 3NF Normalized Schema, Triggers for bed availability, Stored Procedures for patient billing, and API connection code. (10 Marks)"
      ]
    }
  }
];
