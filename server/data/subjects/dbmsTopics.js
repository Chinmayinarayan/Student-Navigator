module.exports = [
  {
    "title": "Introduction to Database Systems",
    "slug": "database-management-system-introduction",
    "order": 1,
    "estimatedHours": 3,
    "difficulty": "Beginner",
    "description": "Understand database fundamentals: File System vs DBMS, advantages of DBMS (redundancy control, data sharing, crash recovery), database users, DBA role, and enterprise applications.",
    "subTopics": [
      "Introduction to Databases",
      "Need for Database Management Systems",
      "File System vs Database System",
      "Advantages of DBMS",
      "Database Users",
      "Database Administrator Role",
      "Database Applications"
    ],
    "prerequisiteTitles": [],
    "learningObjectives": [
      "Compare File Systems and Relational DBMS on data redundancy, inconsistency, access speed, and concurrent access.",
      "Identify Database User roles: Naive Users, Application Programmers, Sophisticated Users, Database Administrators (DBA).",
      "Understand the responsibilities of a Database Administrator (Schema definition, security, backup, tuning)."
    ],
    "notes": [
      {
        "title": "File System vs DBMS Comparison & DBA Responsibilities",
        "content": "INTRODUCTION TO DATABASE MANAGEMENT SYSTEMS\n\n1. File System vs DBMS Comparison:\n   - Data Redundancy & Inconsistency: File systems store duplicate files across applications leading to data inconsistency. DBMS enforces centralized controlled redundancy.\n   - Concurrent Access: File systems lack multi-user concurrency control. DBMS provides locking and transaction isolation.\n   - Crash Recovery: File systems can corrupt files upon sudden power failure. DBMS provides ACID transaction recovery logs.\n   - Security: File systems provide basic OS file permissions. DBMS provides fine-grained user privilege authorization.\n\n2. Database Administrator (DBA) Core Roles:\n   - Schema Definition & Physical Storage Tuning.\n   - User Account Creation & Security Authorization (GRANT / REVOKE).\n   - Database Backup, Restoration, & Disaster Recovery.\n   - Performance Monitoring & Index Optimization."
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
        "title": "GeeksforGeeks Introduction to DBMS",
        "url": "https://www.geeksforgeeks.org/introduction-of-database-management-system-set-1/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Compare File Systems and DBMS on 4 parameters. (2 Marks)",
        "State four main advantages of using a DBMS over traditional file storage. (2 Marks)",
        "What are the responsibilities of a Database Administrator (DBA)? (2 Marks)"
      ],
      "sixMarks": [
        "Explain File Processing System drawbacks (Redundancy, Inconsistency, Difficulty in Access, Isolation, Integrity, Atomicity, Concurrent Access, Security) solved by DBMS. (6 Marks)",
        "Describe Database User categories: Naive Users, Application Programmers, Sophisticated Users, and DBAs with access interfaces. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on DBMS Foundations. Detail historical evolution from IMS hierarchical database to Codd's Relational Model, enterprise database applications, data independence concept, and DBMS software components. (10 Marks)"
      ]
    }
  },
  {
    "title": "Database Architecture",
    "slug": "database-management-system-architecture",
    "order": 2,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Master the ANSI-SPARC Three-Level Database Architecture: External/View Level, Conceptual Level, Internal/Physical Level, and Data Independence (Logical vs Physical).",
    "subTopics": [
      "Three-Level Database Architecture (External, Conceptual, Internal)",
      "Data Independence (Logical Data Independence, Physical Data Independence)",
      "DBMS Components",
      "Database System Environment"
    ],
    "prerequisiteTitles": [
      "Introduction to Database Systems"
    ],
    "learningObjectives": [
      "Explain the ANSI-SPARC Three-Schema Architecture levels: External Schema, Conceptual Schema, Internal Schema.",
      "Distinguish Logical Data Independence (altering conceptual schema without changing view level) and Physical Data Independence (altering physical storage without changing conceptual schema).",
      "Identify internal DBMS engine components: Query Processor (Parser, Optimizer) and Storage Manager (Buffer Manager, Transaction Manager)."
    ],
    "notes": [
      {
        "title": "ANSI-SPARC 3-Schema Architecture & Data Independence",
        "content": "THREE-LEVEL DATABASE ARCHITECTURE\n\n1. ANSI-SPARC 3-Schema Architecture Levels:\n   - External / View Level: User-facing customized views. Multiple external schemas for different user groups.\n   - Conceptual Level: Describes WHAT data is stored in entire database and relationships (Tables, Columns, Constraints, Entities).\n   - Internal / Physical Level: Describes HOW data is physically stored on disk (File structures, B-Tree indexes, Block allocation, Data compression).\n\n2. Data Independence:\n   - Physical Data Independence: Capacity to modify internal schema (e.g. adding B-Tree index, changing file organization) without requiring changes to conceptual schema.\n   - Logical Data Independence: Capacity to modify conceptual schema (e.g. adding new tables or attributes) without requiring changes to external view schemas."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Fundamentals of Database Systems",
        "author": "Elmasri & Navathe"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks DBMS Architecture",
        "url": "https://www.geeksforgeeks.org/dbms-architecture-2-level-3-level/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain External, Conceptual, and Internal levels of 3-Schema Architecture. (2 Marks)",
        "Differentiate between Logical Data Independence and Physical Data Independence. (2 Marks)",
        "Name the core modules of DBMS Query Processor. (2 Marks)"
      ],
      "sixMarks": [
        "Draw and explain ANSI-SPARC Three-Schema Architecture diagram showing mappings between External/Conceptual and Conceptual/Internal levels. (6 Marks)",
        "Describe DBMS Internal Engine Architecture showing Query Optimizer, Execution Engine, Buffer Manager, File Manager, and Lock Manager. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Database Engine Architecture. Detail query compilation and execution steps (Parsing, Algebraic Optimization, Cost Estimation, Physical Plan), Storage Manager disk I/O handling, and Client-Server vs Multi-Tier Database Environment architectures. (10 Marks)"
      ]
    }
  },
  {
    "title": "Data Models",
    "slug": "database-management-system-data-models",
    "order": 3,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Explore database modeling paradigms: Hierarchical Model (Tree structure), Network Model (Graph structure), Relational Model (Tables/Relations), Object-Oriented Data Model, and ER Model.",
    "subTopics": [
      "Introduction to Data Models",
      "Hierarchical Data Model",
      "Network Data Model",
      "Relational Data Model",
      "Object-Oriented Data Model",
      "Entity Relationship Model"
    ],
    "prerequisiteTitles": [
      "Database Architecture"
    ],
    "learningObjectives": [
      "Compare Hierarchical (1:N tree parent-child), Network (M:N record-set graph), and Relational (Codd's tabular relations) data models.",
      "Understand Object-Oriented Data Model (Classes, Inheritance, Encapsulation, Object Identifiers OIDs).",
      "Evaluate trade-offs of relational data models over legacy navigational models."
    ],
    "notes": [
      {
        "title": "Hierarchical vs Network vs Relational Data Models",
        "content": "DATA MODELS COMPARISON\n\n1. Data Modeling Paradigms:\n   - Hierarchical Model (IBM IMS): Data organized into tree-like structures with parent-child relationships (1:N). Fast navigation, rigid schema, cannot naturally model M:N relationships.\n   - Network Model (CODASYL): Data represented as record types connected by owner-member sets forming a graph (M:N allowed). Complex pointer navigation.\n   - Relational Model (E.F. Codd 1970): Data represented as two-dimensional tables (relations) of rows (tuples) and columns (attributes). Declarative query processing (SQL), highly flexible.\n   - Object-Oriented Model: Integrates object-oriented programming concepts (Classes, Methods, Inheritance, OIDs) directly into database schema."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Database System Concepts",
        "author": "Silberschatz"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Data Models in DBMS",
        "url": "https://www.geeksforgeeks.org/data-models-in-dbms/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Compare Hierarchical, Network, and Relational Data Models. (2 Marks)",
        "What is E.F. Codd's Relational Model? (2 Marks)",
        "Explain Object-Oriented Data Model key characteristics. (2 Marks)"
      ],
      "sixMarks": [
        "Explain the historical evolution of Data Models from Hierarchical tree structures to Relational Tables and modern Document/Graph NoSQL models. (6 Marks)",
        "Describe Relational Data Model advantages over Navigational Data Models detailing structural independence, ad-hoc querying, and declarative language support. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Data Modeling Paradigms. Detail E.F. Codd's 12 Rules for Relational Databases, Object-Relational Mapping (ORM) impedance mismatch, Semi-Structured XML/JSON data models, and selecting data models for modern enterprise architectures. (10 Marks)"
      ]
    }
  },
  {
    "title": "Entity Relationship Model",
    "slug": "database-management-system-er-model",
    "order": 4,
    "estimatedHours": 5,
    "difficulty": "Beginner",
    "description": "Master ER Diagram design: Entities, Attributes (Simple, Composite, Multi-valued, Derived), Relationships, Cardinality Constraints (1:1, 1:N, M:N), Participation (Total vs Partial), Weak Entity Sets, and Extended ER (Specialization, Generalization, Aggregation).",
    "subTopics": [
      "Introduction to ER Model",
      "Entities",
      "Attributes (Simple, Composite, Multi-valued, Derived)",
      "Relationships",
      "Entity Sets and Relationship Sets",
      "Cardinality Constraints",
      "Participation Constraints",
      "ER Diagram Design",
      "Extended ER Model (Specialization, Generalization, Aggregation)"
    ],
    "prerequisiteTitles": [
      "Data Models"
    ],
    "learningObjectives": [
      "Identify ER Notation Symbols: Rectangles (Entities), Double Rectangles (Weak Entities), Ellipses (Attributes), Double Ellipses (Multi-valued), Dashed Ellipses (Derived), Diamonds (Relationships).",
      "Map Cardinality (1:1, 1:N, M:N) and Total vs Partial Participation constraints.",
      "Apply Extended ER concepts: Generalization (Bottom-up), Specialization (Top-down), and Aggregation."
    ],
    "notes": [
      {
        "title": "ER Diagram Symbols, Weak Entities & Extended ER Mechanics",
        "content": "ENTITY RELATIONSHIP (ER) MODELING\n\n1. ER Diagram Standard Symbols:\n   - Rectangle: Strong Entity Set.\n   - Double Rectangle: Weak Entity Set (depends on Identifying Entity Set, has Partial Key / Discriminator).\n   - Diamond: Relationship Set. Double Diamond: Identifying Relationship Set for Weak Entity.\n   - Oval / Ellipse: Attribute. Underlined: Primary Key Attribute. Dashed Underlined: Partial Key.\n   - Double Oval: Multi-valued Attribute (e.g. Phone Numbers).\n   - Dashed Oval: Derived Attribute (e.g. Age computed from DateOfBirth).\n   - Double Line: Total Participation (Every entity must participate in relationship).\n\n2. Extended ER Concepts:\n   - Generalization: Bottom-up synthesis of lower-level entity sets into a higher-level entity set (e.g. Car + Truck -> Vehicle).\n   - Specialization: Top-down designation of sub-groupings within an entity set (e.g. Employee -> Engineer + Accountant)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Fundamentals of Database Systems",
        "author": "Elmasri & Navathe"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks ER Diagram Practice",
        "url": "https://www.geeksforgeeks.org/introduction-of-er-model/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State ER symbols for Weak Entity, Multi-valued attribute, and Derived attribute. (2 Marks)",
        "Differentiate between Total Participation and Partial Participation. (2 Marks)",
        "Compare Specialization (Top-down) and Generalization (Bottom-up). (2 Marks)"
      ],
      "sixMarks": [
        "Design a complete ER Diagram for a University Management System showing Student, Course, Instructor, Department entities, relationship cardinalities, and attributes. (6 Marks)",
        "Explain Weak Entity Sets with an example (e.g. Employee and Dependent), showing Partial Key, Identifying Relationship, and relational table mapping. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Conceptual Database Modeling. Detail ER design pitfalls, converting complex M:N relationships into ternary vs binary relationships, Aggregation abstraction, Extended ER constraints (Disjointness vs Overlapping, Completeness), and mapping EER to relational tables. (10 Marks)"
      ]
    }
  },
  {
    "title": "Relational Database Model",
    "slug": "database-management-system-relational-model",
    "order": 5,
    "estimatedHours": 5,
    "difficulty": "Beginner",
    "description": "Study relational concepts: Relations, Tuples, Attributes, Domains, Candidate Keys, Primary Keys, Super Keys, Foreign Keys, and Integrity Constraints (Entity Integrity, Referential Integrity, Domain Integrity).",
    "subTopics": [
      "Introduction to Relational Model",
      "Relations",
      "Tuples",
      "Attributes",
      "Domains",
      "Keys (Primary Key, Candidate Key, Super Key, Foreign Key)",
      "Integrity Constraints"
    ],
    "prerequisiteTitles": [
      "Entity Relationship Model"
    ],
    "learningObjectives": [
      "Distinguish Super Key (superset of attributes uniquely identifying tuple), Candidate Key (minimal super key), and Primary Key.",
      "Understand Entity Integrity Constraint (Primary key cannot be NULL) and Referential Integrity Constraint (Foreign key must match valid primary key or be NULL).",
      "Map ER Schema entities and attributes into Relational Schema tables."
    ],
    "notes": [
      {
        "title": "Relational Keys Definitions & Integrity Constraints",
        "content": "RELATIONAL DATABASE MODEL & KEYS\n\n1. Key Classifications:\n   - Super Key: Any set of one or more attributes that uniquely identifies a row (tuple) in a table.\n   - Candidate Key: A minimal Super Key (no proper subset is a super key). A table can have multiple Candidate Keys.\n   - Primary Key: The specific Candidate Key chosen by the database designer to uniquely identify tuples. Cannot contain NULL.\n   - Foreign Key: An attribute in a child table that references the Primary Key of a parent table to enforce referential integrity.\n\n2. Integrity Constraints:\n   - Domain Integrity: Values in a column must conform to defined data type, format, and range.\n   - Entity Integrity: Primary key of a relation cannot contain NULL values.\n   - Referential Integrity: Foreign key value in referencing table must match an existing primary key value in referenced table or be NULL."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Database System Concepts",
        "author": "Silberschatz"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Relational Model Keys",
        "url": "https://www.geeksforgeeks.org/types-of-keys-in-dbms/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between Super Key, Candidate Key, and Primary Key. (2 Marks)",
        "State Entity Integrity Constraint and Referential Integrity Constraint. (2 Marks)",
        "What is a Foreign Key and what relationship does it enforce? (2 Marks)"
      ],
      "sixMarks": [
        "Given Relation $R(A, B, C, D, E)$ with functional dependencies, find all Candidate Keys and Super Keys. (6 Marks)",
        "Describe Referential Integrity violations (Insert, Update, Delete) and explain enforcement options: Cascade, Set Null, Restrict. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Relational Model Formalisms. Detail Codd's relational definitions, Relation schema vs Relation instance, tuple relational calculus vs domain relational calculus, domain constraints, and key determination algorithms. (10 Marks)"
      ]
    }
  },
  {
    "title": "Relational Algebra",
    "slug": "database-management-system-relational-algebra",
    "order": 6,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master procedural query language: Fundamental Operations (Selection $sigma$, Projection $pi$, Union $cup$, Set Difference $-$, Cartesian Product $\times$, Rename $\rho$) and Derived Operations (Set Intersection $cap$, Natural Join $\bowtie$, Theta Join, Division $div$).",
    "subTopics": [
      "Introduction to Relational Algebra",
      "Selection Operation ($sigma$)",
      "Projection Operation ($pi$)",
      "Union Operation ($cup$)",
      "Intersection Operation ($cap$)",
      "Difference Operation ($-$)",
      "Cartesian Product ($\times$)",
      "Join Operations (Natural Join $\bowtie$, Theta Join, Outer Joins)"
    ],
    "prerequisiteTitles": [
      "Relational Database Model"
    ],
    "learningObjectives": [
      "Write Relational Algebra expressions using $sigma$ (filtering rows) and $pi$ (selecting columns).",
      "Evaluate Cartesian Product $R \times S$ vs Natural Join $R \bowtie S$.",
      "Formulate Division Operation ($R div S$) for 'find entities that interact with ALL elements' queries."
    ],
    "notes": [
      {
        "title": "Relational Algebra Operators & Division Query Examples",
        "content": "RELATIONAL ALGEBRA OPERATORS\n\n1. Fundamental Operators Syntax:\n   - Selection ($sigma_{condition}(R)$): Filters rows matching predicate logic (e.g. $sigma_{salary > 50000}(Employees)$).\n   - Projection ($pi_{A1, A2}(R)$): Selects specified columns and eliminates duplicate rows (e.g. $pi_{name, dept}(Employees)$).\n   - Cartesian Product ($R \times S$): Combines every tuple of $R$ with every tuple of $S$. Output tuples = $|R| \times |S|$.\n   - Natural Join ($R \bowtie S$): Combines tuples of $R$ and $S$ where common attributes match, eliminating duplicate schema columns.\n\n2. Division Operation ($R div S$):\n   Finds tuples in $R(A, B)$ that are associated with ALL tuples in $S(B)$. Used for queries like \"Find students enrolled in ALL computer science courses\"."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Database System Concepts",
        "author": "Silberschatz"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Relational Algebra Practice",
        "url": "https://www.geeksforgeeks.org/relational-algebra-in-dbms/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State purpose and output symbols for Selection ($sigma$) and Projection ($pi$) operators. (2 Marks)",
        "Compare Cartesian Product ($R \times S$) and Natural Join ($R \bowtie S$). (2 Marks)",
        "When is the Division ($div$) operator used in Relational Algebra? (2 Marks)"
      ],
      "sixMarks": [
        "Given relations $Student(id, name, dept)$ and $Enroll(id, course_id)$. Write Relational Algebra queries for: (a) Names of CS dept students, (b) Students enrolled in course 'CS101', (c) Students enrolled in ALL courses. (6 Marks)",
        "Explain Derived Relational Algebra operators: Set Intersection ($cap$), Theta Join ($\bowtie_\theta$), Equi-Join, and Division ($div$) in terms of fundamental operators. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Relational Query Languages. Detail Relational Algebra procedural queries, Tuple Relational Calculus (TRC) non-procedural queries, Domain Relational Calculus (DRC), and Codd's Theorem proving equivalence between Relational Algebra and Relational Calculus. (10 Marks)"
      ]
    }
  },
  {
    "title": "SQL Fundamentals",
    "slug": "database-management-system-sql-fundamentals",
    "order": 7,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Master Structured Query Language: SQL Data Types, Command categories (DDL, DML, DCL, TCL), CREATE, ALTER, DROP, TRUNCATE, INSERT, UPDATE, and DELETE.",
    "subTopics": [
      "Introduction to SQL",
      "SQL Data Types",
      "SQL Commands (DDL, DML, DCL, TCL)",
      "CREATE Command",
      "ALTER Command",
      "DROP Command",
      "INSERT Command",
      "UPDATE Command",
      "DELETE Command"
    ],
    "prerequisiteTitles": [
      "Relational Database Model"
    ],
    "learningObjectives": [
      "Classify SQL command categories: DDL (CREATE, ALTER, DROP, TRUNCATE), DML (INSERT, UPDATE, DELETE), DCL (GRANT, REVOKE), TCL (COMMIT, ROLLBACK).",
      "Distinguish DROP TABLE (removes schema & data) and TRUNCATE TABLE (removes all data rows quickly, preserves schema structure).",
      "Write DDL scripts with data types (VARCHAR, INT, DECIMAL, DATE, TIMESTAMP)."
    ],
    "notes": [
      {
        "title": "SQL Command Categories & DROP vs TRUNCATE vs DELETE",
        "content": "SQL FUNDAMENTALS & COMMAND CATEGORIES\n\n1. SQL Command Categories Breakdown:\n   - DDL (Data Definition Language): Defines and alters database structures (`CREATE`, `ALTER`, `DROP`, `TRUNCATE`, `RENAME`). Auto-committed.\n   - DML (Data Manipulation Language): Modifies data rows (`INSERT`, `UPDATE`, `DELETE`). Requires commit.\n   - DCL (Data Control Language): Controls security access (`GRANT`, `REVOKE`).\n   - TCL (Transaction Control Language): Manages transactions (`COMMIT`, `ROLLBACK`, `SAVEPOINT`).\n\n2. DROP vs TRUNCATE vs DELETE Comparison:\n   - DELETE: DML command. Deletes specific rows matching WHERE. Fires triggers. Can be rolled back. Slow for large tables.\n   - TRUNCATE: DDL command. Deletes ALL rows by deallocating data pages. Preserves table structure. Faster. Cannot be rolled back in some DBs.\n   - DROP: DDL command. Removes table data AND table schema completely from database catalog."
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
        "title": "LeetCode SQL 50 Study Plan",
        "url": "https://leetcode.com/studyplan/top-sql-50/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Classify CREATE, INSERT, GRANT, and ROLLBACK into SQL command categories (DDL, DML, DCL, TCL). (2 Marks)",
        "Compare DELETE, TRUNCATE, and DROP commands. (2 Marks)",
        "What is the difference between CHAR(10) and VARCHAR(10) data types? (2 Marks)"
      ],
      "sixMarks": [
        "Write SQL DDL commands to: (a) Create `Orders` table, (b) Add a new column `order_status` using ALTER TABLE, (c) Drop `order_status` column. (6 Marks)",
        "Describe DCL commands GRANT and REVOKE with syntax for user privileges. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on SQL Language Standards (ANSI SQL-92 / SQL:1999). Detail table constraint declarations, ALTER TABLE column and constraint modifications, TRUNCATE vs DELETE internal storage page deallocations, and schema catalog tables. (10 Marks)"
      ]
    }
  },
  {
    "title": "Advanced SQL Queries",
    "slug": "database-management-system-advanced-sql-queries",
    "order": 8,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master complex SQL querying: SELECT filtering, ORDER BY, GROUP BY, HAVING, Aggregate functions (COUNT, SUM, AVG, MIN, MAX), Nested Subqueries, and JOINS (Inner, Left, Right, Full Outer).",
    "subTopics": [
      "SELECT Queries",
      "WHERE Clause",
      "ORDER BY",
      "GROUP BY",
      "HAVING Clause",
      "Aggregate Functions (COUNT, SUM, AVG, MIN, MAX)",
      "Nested Queries & Subqueries",
      "Joins (Inner Join, Left Join, Right Join, Full Join)"
    ],
    "prerequisiteTitles": [
      "SQL Fundamentals"
    ],
    "learningObjectives": [
      "Write multi-table INNER JOIN, LEFT OUTER JOIN, RIGHT OUTER JOIN, and FULL OUTER JOIN queries.",
      "Aggregate data using GROUP BY and apply HAVING clause for group filtering.",
      "Solve complex queries using Nested Subqueries and Correlated Subqueries."
    ],
    "notes": [
      {
        "title": "SQL Clause Execution Order & Join Venn Diagrams",
        "content": "ADVANCED SQL QUERIES & EXECUTION ORDER\n\n1. Logical Query Execution Order:\n   1. FROM & JOINs: Identifies tables and performs Cartesian/Join operations.\n   2. WHERE: Filters individual rows matching condition.\n   3. GROUP BY: Groups rows by specified columns.\n   4. HAVING: Filters aggregated groups.\n   5. SELECT: Evaluates expressions and column selection.\n   6. DISTINCT: Eliminates duplicate result rows.\n   7. ORDER BY: Sorts final result set.\n   8. LIMIT / OFFSET: Restricts output row count.\n\n2. SQL Joins Summary:\n   - INNER JOIN: Returns matching rows in both tables.\n   - LEFT JOIN: Returns all rows from left table + matching rows from right table (fills NULL for non-matches).\n   - RIGHT JOIN: Returns all rows from right table + matching rows from left table.\n   - FULL JOIN: Returns all rows when there is a match in left or right table."
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
        "title": "HackerRank SQL Practice",
        "url": "https://www.hackerrank.com/domains/sql"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain logical execution order of SQL clauses (FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY). (2 Marks)",
        "Differentiate between WHERE and HAVING clauses. (2 Marks)",
        "What is the difference between LEFT JOIN and FULL OUTER JOIN? (2 Marks)"
      ],
      "sixMarks": [
        "Given tables `Customers(cid, name)` and `Orders(oid, cid, amount)`. Write queries for: (a) Total spent per customer for customers who spent > $1000, (b) Customers who placed NO orders. (6 Marks)",
        "Explain Correlated Subquery with an example query to find employees earning above their department average. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on SQL Querying & Optimization. Detail Window Functions (`OVER (PARTITION BY ... ORDER BY ...)`), Common Table Expressions (`WITH` CTEs), Set operations (UNION, INTERSECT, EXCEPT), and Subquery unnesting by query optimizers. (10 Marks)"
      ]
    }
  },
  {
    "title": "Database Design",
    "slug": "database-management-system-database-design",
    "order": 9,
    "estimatedHours": 6,
    "difficulty": "Intermediate",
    "description": "Master Relational Database Design: Functional Dependencies ($X \rightarrow Y$), Armstrong's Axioms, Closure ($X^+$), Normalization (1NF, 2NF, 3NF, BCNF), and Lossless-Join / Dependency-Preserving Decomposition.",
    "subTopics": [
      "Database Design Process",
      "Functional Dependencies",
      "Normalization",
      "First Normal Form (1NF)",
      "Second Normal Form (2NF)",
      "Third Normal Form (3NF)",
      "Boyce-Codd Normal Form (BCNF)",
      "Decomposition"
    ],
    "prerequisiteTitles": [
      "Relational Database Model"
    ],
    "learningObjectives": [
      "Compute Attribute Closure ($X^+$) using Armstrong's Axioms to find Candidate Keys.",
      "Test Normal Forms: 1NF (atomic attributes), 2NF (no partial dependencies), 3NF (no transitive dependencies: for $X \rightarrow Y$, $X$ is super key or $Y$ is prime attribute), BCNF (for $X \rightarrow Y$, $X$ MUST be super key).",
      "Perform Lossless-Join Decomposition testing ($R_1 cap R_2 \rightarrow R_1$ or $R_1 cap R_2 \rightarrow R_2$)."
    ],
    "notes": [
      {
        "title": "Attribute Closure Algorithm & Normal Forms Checklist",
        "content": "FUNCTIONAL DEPENDENCIES & NORMALIZATION\n\n1. Normal Forms Checklist for Functional Dependency $X \rightarrow Y$:\n   - 1NF: All attributes contain atomic (single-valued) values. No repeating groups.\n   - 2NF: In 1NF AND no non-prime attribute depends on a proper subset of any candidate key (No Partial Dependency).\n   - 3NF: In 2NF AND for every non-trivial $X \rightarrow Y$, EITHER $X$ is a Super Key OR $Y$ is a Prime Attribute (No Transitive Dependency).\n   - BCNF: For EVERY non-trivial $X \rightarrow Y$, $X$ MUST be a Super Key.\n\n2. Attribute Closure ($X^+$) Algorithm:\n   - Initialize $X^+ = X$.\n   - Repeat until no new attributes added: For each FD $A \rightarrow B$, if $A subseteq X^+$, then $X^+ = X^+ cup B$.\n   - If $X^+$ contains all relation attributes, $X$ is a Super Key!"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Fundamentals of Database Systems",
        "author": "Elmasri & Navathe"
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
        "State Armstrong's Axioms (Reflexivity, Augmentation, Transitivity). (2 Marks)",
        "Differentiate between 3NF and BCNF conditions for $X \rightarrow Y$. (2 Marks)",
        "What is Lossless-Join Decomposition? (2 Marks)"
      ],
      "sixMarks": [
        "Given Relation $R(A, B, C, D, E, F)$ with FDs: $AB \rightarrow C, C \rightarrow D, D \rightarrow E, E \rightarrow F$. Compute closure $(AB)^+$ and find Candidate Keys. (6 Marks)",
        "Given Relation $R(A,B,C,D)$ with FDs $A \rightarrow B, B \rightarrow C, C \rightarrow D$. Determine highest normal form and decompose to 3NF. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Relational Database Normalization Theory. Detail Canonical Cover algorithm, 3NF synthesis algorithm (guaranteeing Lossless-Join AND Dependency Preservation), BCNF decomposition algorithm, and Multi-valued Dependencies (4NF) / Join Dependencies (5NF). (10 Marks)"
      ]
    }
  },
  {
    "title": "Transaction Management",
    "slug": "database-management-system-transaction-management",
    "order": 10,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master Transaction Processing: ACID Properties (Atomicity, Consistency, Isolation, Durability), Transaction State Transition Diagram (Active, Partially Committed, Committed, Failed, Aborted), and Serializability (Conflict vs View Serializability).",
    "subTopics": [
      "Introduction to Transactions",
      "Transaction Properties (ACID)",
      "Transaction States",
      "Concurrent Transactions",
      "Serializability (Conflict Serializability, View Serializability)"
    ],
    "prerequisiteTitles": [
      "SQL Fundamentals"
    ],
    "learningObjectives": [
      "Understand ACID Properties: Atomicity (All or nothing), Consistency (Preserves DB invariants), Isolation (Concurrent execution equivalence), Durability (Committed data persists).",
      "Test Conflict Serializability using Precedence Graph (Precedence Graph must be Acyclic).",
      "Identify Conflict Operations: Two operations on same data item by different transactions where at least one is a WRITE."
    ],
    "notes": [
      {
        "title": "ACID Properties & Precedence Graph Conflict Serializability",
        "content": "TRANSACTION PROCESSING & SERIALIZABILITY\n\n1. ACID Properties:\n   - Atomicity: Executed via Undo Logs (Rollback on failure).\n   - Consistency: Guaranteed by application code & integrity constraints.\n   - Isolation: Executed via Concurrency Control Lock / Timestamp protocols.\n   - Durability: Executed via Redo Logs (WAL - Write-Ahead Logging).\n\n2. Conflict Serializability Precedence Graph Test:\n   - Create a node for each transaction $T_i$.\n   - Draw directed edge $T_i \rightarrow T_j$ if $T_i$ executes a conflicting operation on data item $X$ BEFORE $T_j$.\n   - Conflicting Operations: Same data item $X$, different transactions, at least one is WRITE ($W_i(X) dots R_j(X)$, $R_i(X) dots W_j(X)$, $W_i(X) dots W_j(X)$).\n   - If Precedence Graph contains NO CYCLES, schedule is CONFLICT SERIALIZABLE!"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Database System Concepts",
        "author": "Silberschatz"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Conflict Serializability Practice",
        "url": "https://www.geeksforgeeks.org/conflict-serializability-in-dbms/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State the 4 ACID properties of database transactions. (2 Marks)",
        "What are conflicting operations in concurrent schedules? (2 Marks)",
        "How is a Precedence Graph used to test Conflict Serializability? (2 Marks)"
      ],
      "sixMarks": [
        "Explain Transaction State Diagram showing Active, Partially Committed, Committed, Failed, and Aborted states with state transitions. (6 Marks)",
        "Given Schedule $S: R_1(X), W_1(X), R_2(X), W_2(X), R_1(Y), W_1(Y)$. Construct Precedence Graph and determine if $S$ is Conflict Serializable. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Concurrency Theory & Serializability. Detail View Serializability vs Conflict Serializability, Recoverable vs Cascadeless vs Strict schedules, Thomas Write Rule, and Write-Ahead Logging (WAL) protocol. (10 Marks)"
      ]
    }
  },
  {
    "title": "Concurrency Control",
    "slug": "database-management-system-concurrency-control",
    "order": 11,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master Concurrency Protocols: Lock-Based Protocols (Shared S vs Exclusive X locks, Two-Phase Locking 2PL: Strict 2PL, Rigorous 2PL), Timestamp-Based Protocol, and Deadlock Handling (Prevention, Detection, Recovery).",
    "subTopics": [
      "Need for Concurrency Control",
      "Lock-Based Protocols",
      "Shared and Exclusive Locks",
      "Two Phase Locking Protocol (2PL)",
      "Timestamp-Based Protocol",
      "Deadlock Handling (Wait-Die, Wound-Wait)"
    ],
    "prerequisiteTitles": [
      "Transaction Management"
    ],
    "learningObjectives": [
      "Understand Two-Phase Locking (2PL): Growing Phase (acquiring locks) and Shrinking Phase (releasing locks). 2PL guarantees Conflict Serializability.",
      "Differentiate Strict 2PL (holds all Exclusive locks until COMMIT) to avoid cascading rollbacks.",
      "Analyze Deadlock Prevention schemes: Wait-Die (Non-preemptive) vs Wound-Wait (Preemptive) based on transaction timestamps."
    ],
    "notes": [
      {
        "title": "Two-Phase Locking (2PL) & Wait-Die vs Wound-Wait Deadlock Schemes",
        "content": "CONCURRENCY CONTROL & 2PL PROTOCOL\n\n1. Two-Phase Locking (2PL) Protocol Rules:\n   - Growing Phase: Transaction may acquire locks, but CANNOT release any locks.\n   - Lock Point: Point when transaction has acquired its last lock.\n   - Shrinking Phase: Transaction may release locks, but CANNOT acquire any new locks.\n   - 2PL Guarantees Conflict Serializability, but can cause Deadlocks!\n\n2. Deadlock Prevention (Timestamp $TS(T_i)$ - Old has smaller TS):\n   Suppose $T_i$ requests lock held by $T_j$:\n   - Wait-Die Scheme (Non-preemptive):\n     * If $T_i$ is older than $T_j$ ($TS(T_i) < TS(T_j)$) $Rightarrow T_i$ WAITS.\n     * If $T_i$ is younger than $T_j$ ($TS(T_i) > TS(T_j)$) $Rightarrow T_i$ DIES (aborts & restarts).\n   - Wound-Wait Scheme (Preemptive):\n     * If $T_i$ is older than $T_j$ ($TS(T_i) < TS(T_j)$) $Rightarrow T_i$ WOUNDS $T_j$ ($T_j$ aborts).\n     * If $T_i$ is younger than $T_j$ ($TS(T_i) > TS(T_j)$) $Rightarrow T_i$ WAITS."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Database System Concepts",
        "author": "Silberschatz"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Concurrency Control Protocols",
        "url": "https://www.geeksforgeeks.org/concurrency-control-protocols-in-dbms/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain Growing Phase and Shrinking Phase in Two-Phase Locking (2PL). (2 Marks)",
        "Differentiate between Shared Lock (S) and Exclusive Lock (X). (2 Marks)",
        "Compare Wait-Die and Wound-Wait Deadlock prevention schemes. (2 Marks)"
      ],
      "sixMarks": [
        "Explain Two-Phase Locking (2PL), Strict 2PL, and Rigorous 2PL protocols detailing lock points and prevention of cascading rollbacks. (6 Marks)",
        "Describe Timestamp-Ordering Protocol execution rules for Read_Item(X) and Write_Item(X) using $R_TS(X)$ and $W_TS(X)$. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Concurrency Control Engineering. Detail Lock Compatibility Matrix, Multiple Granularity Locking (Intent Locks: IS, IX, SIX), Deadlock Wait-For Graph (WFG) detection, and Multi-Version Concurrency Control (MVCC) in modern databases. (10 Marks)"
      ]
    }
  },
  {
    "title": "Database Recovery",
    "slug": "database-management-system-database-recovery",
    "order": 12,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Master Database Recovery techniques: Types of Failures (Transaction, System, Disk), Write-Ahead Logging (WAL), Log-Based Recovery (Deferred Update vs Immediate Update), Checkpoints, and Shadow Paging.",
    "subTopics": [
      "Database Failures",
      "Recovery Techniques",
      "Log-Based Recovery (Deferred Update, Immediate Update)",
      "Checkpoints",
      "Shadow Paging"
    ],
    "prerequisiteTitles": [
      "Transaction Management"
    ],
    "learningObjectives": [
      "Understand Write-Ahead Logging (WAL) rule: Log records must be written to stable storage BEFORE corresponding data pages are written to disk.",
      "Compare Log Recovery techniques: Deferred Update (No Undo required) vs Immediate Update (Undo and Redo required).",
      "Analyze Checkpoint processing to reduce log scan time during recovery."
    ],
    "notes": [
      {
        "title": "WAL Rule, Deferred vs Immediate Update & Checkpoints",
        "content": "DATABASE RECOVERY TECHNIQUES\n\n1. Write-Ahead Logging (WAL) Protocol:\n   All log records (Undo/Redo information) MUST be written to non-volatile stable storage BEFORE the modified data page is written from RAM buffer to disk.\n\n2. Deferred Update vs Immediate Update:\n   - Deferred Update (NO-UNDO / REDO): Database updates deferred until transaction COMMITS. If crash occurs before commit, no UNDO needed. If crash occurs after commit, REDO operations executed from log.\n   - Immediate Update (UNDO / REDO): Database updates written to disk while transaction is ACTIVE. If crash occurs before commit, UNDO operations reverse uncommitted changes. If committed, REDO ensures durability.\n\n3. Checkpoint Recovery Algorithm:\n   During recovery scan, transactions active at checkpoint are analyzed:\n   - If transaction has a COMMIT log record $Rightarrow$ REDO.\n   - If transaction has NO COMMIT log record $Rightarrow$ UNDO."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Database System Concepts",
        "author": "Silberschatz"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Crash Recovery in DBMS",
        "url": "https://www.geeksforgeeks.org/crash-recovery-in-dbms/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State the Write-Ahead Logging (WAL) protocol rule. (2 Marks)",
        "Differentiate between Deferred Update and Immediate Update log recovery. (2 Marks)",
        "What is the purpose of Checkpoints in log-based database recovery? (2 Marks)"
      ],
      "sixMarks": [
        "Given a log sequence with Checkpoint and crash point. Identify which transactions require UNDO and which require REDO. Trace recovery steps. (6 Marks)",
        "Describe Shadow Paging recovery technique detailing Current Page Table, Shadow Page Table, and disk page allocation. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on ARIES Recovery Algorithm. Detail ARIES 3 phases (Analysis phase, REDO phase repeat history, UNDO phase with Compensation Log Records CLRs), Write-Ahead Logging, and Fuzzy Checkpointing. (10 Marks)"
      ]
    }
  },
  {
    "title": "Indexing and File Organization",
    "slug": "database-management-system-indexing-and-file-organization",
    "order": 13,
    "estimatedHours": 6,
    "difficulty": "Intermediate",
    "description": "Master physical storage organization: File Organization (Heap, Sequential, Hashed), Primary Index, Secondary Index, Clustered Index, B-Trees, B+ Trees (Node structure, Order $m$, Insert/Delete), and Hash Indexing.",
    "subTopics": [
      "Database Storage Concepts",
      "File Organization Methods (Heap, Sequential, Hashed)",
      "Indexing Concepts",
      "Primary Index, Secondary Index, Clustered Index",
      "B+ Tree Indexing",
      "Hash-Based Indexing"
    ],
    "prerequisiteTitles": [
      "Database Architecture"
    ],
    "learningObjectives": [
      "Compare Dense Indexing (entry for every search key) and Sparse Indexing (entry for data blocks).",
      "Understand B+ Tree Indexing properties: All data pointers stored ONLY in leaf nodes; leaf nodes linked as doubly linked list for fast range queries.",
      "Execute B+ Tree Node Insertion and Splitting rules."
    ],
    "notes": [
      {
        "title": "B+ Tree Index Architecture & Dense vs Sparse Indexing",
        "content": "INDEXING & B+ TREES\n\n1. Primary vs Secondary vs Clustered Indexes:\n   - Primary Index: Defined on a sequentially ordered data file on the Primary Key. Sparse index.\n   - Clustered Index: Defined on a sequentially ordered data file on a non-key ordered attribute.\n   - Secondary Index: Defined on an unordered data file. MUST be a Dense Index.\n\n2. B+ Tree Index Characteristics:\n   - Balanced search tree of order $M$. All leaf nodes are at the SAME depth level.\n   - Internal Nodes: Store search keys and child node pointers ONLY (no actual data pointers).\n   - Leaf Nodes: Store search keys AND actual data record pointers (or data rows). Linked sequentially via pointers for range scans ($O(log N)$ point search, $O(K)$ sequential range scan)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Database System Concepts",
        "author": "Silberschatz"
      }
    ],
    "practiceLinks": [
      {
        "title": "B+ Tree Visualization Tool",
        "url": "https://www.cs.usfca.edu/~galles/visualization/BPlusTree.html"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between Dense Indexing and Sparse Indexing. (2 Marks)",
        "Why are B+ Trees preferred over binary search trees for database disk indexing? (2 Marks)",
        "Compare Primary Index, Clustered Index, and Secondary Index. (2 Marks)"
      ],
      "sixMarks": [
        "Draw B+ Tree of order 3 and show step-by-step node insertions for keys `10, 20, 30, 40, 50, 25`. Show node splitting. (6 Marks)",
        "Explain File Organization methods: Heap File, Sequential File, and Hash File organization on insertion and search cost. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Database Indexing Technologies. Detail B-Tree vs B+ Tree node structural differences, Static vs Dynamic Hashing (Extendible Hashing / Linear Hashing), Multilevel Indexing, and BitMap indexes for data warehousing. (10 Marks)"
      ]
    }
  },
  {
    "title": "NoSQL Databases",
    "slug": "database-management-system-nosql-databases",
    "order": 14,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Explore NoSQL database systems: CAP Theorem (Consistency, Availability, Partition Tolerance), BASE property, Types of NoSQL DBs (Key-Value, Document, Column-Family, Graph), and MongoDB Basics.",
    "subTopics": [
      "Introduction to NoSQL",
      "Need for NoSQL Databases",
      "CAP Theorem and BASE Properties",
      "Types of NoSQL Databases (Key-Value, Document, Column, Graph)",
      "MongoDB Basics"
    ],
    "prerequisiteTitles": [
      "Database Architecture"
    ],
    "learningObjectives": [
      "Understand CAP Theorem (Pick 2 of 3: Consistency, Availability, Partition Tolerance in distributed networks).",
      "Compare NoSQL Categories: Key-Value (Redis), Document (MongoDB), Column-Family (Cassandra), Graph (Neo4j).",
      "Execute MongoDB JSON document queries."
    ],
    "notes": [
      {
        "title": "CAP Theorem & NoSQL Categories (Key-Value, Document, Graph)",
        "content": "NOSQL DATABASES & CAP THEOREM\n\n1. CAP Theorem (Brewer's Theorem):\n   In a distributed network subject to network partitions (P), a database system can provide at most TWO out of three guarantees:\n   - Consistency (C): All nodes see the same data at the same time.\n   - Availability (A): Every non-failing node returns a response for every request.\n   - Partition Tolerance (P): System continues to operate despite network message drops.\n   - CP Databases (e.g. MongoDB, HBase): Trade availability for strong consistency.\n   - AP Databases (e.g. Cassandra, DynamoDB): Trade strong consistency for high availability (BASE model: Basically Available, Soft-state, Eventual consistency).\n\n2. 4 NoSQL Database Types:\n   - Key-Value: Simple hash table lookup by key (Redis, Memcached).\n   - Document: Hierarchical JSON/BSON document store (MongoDB, CouchDB).\n   - Column-Family: Wide-column distributed storage (Apache Cassandra, HBase).\n   - Graph: Nodes and Relationships traversal (Neo4j)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "NoSQL Distilled",
        "author": "Pramod J. Sadalage, Martin Fowler"
      }
    ],
    "practiceLinks": [
      {
        "title": "MongoDB University Documentation",
        "url": "https://www.mongodb.com/docs/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State Brewer's CAP Theorem and classify MongoDB and Cassandra into CP or AP. (2 Marks)",
        "Differentiate between ACID (RDBMS) and BASE (NoSQL) consistency models. (2 Marks)",
        "Name the 4 types of NoSQL Databases with one example of each. (2 Marks)"
      ],
      "sixMarks": [
        "Explain CAP Theorem trade-offs (CP vs AP vs CA) in distributed data stores with real-world system architecture examples. (6 Marks)",
        "Compare Relational Databases (MySQL) and Document NoSQL Databases (MongoDB) on schema, scaling, joins, and transactions. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Distributed NoSQL Architectures. Detail Eventual Consistency vector clocks, Cassandra peer-to-peer ring sharding & gossip protocol, MongoDB replica set primary-secondary election, and Graph DB Cypher query traversal in Neo4j. (10 Marks)"
      ]
    }
  },
  {
    "title": "Modern Database Concepts",
    "slug": "database-management-system-modern-concepts",
    "order": 15,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Explore modern enterprise database trends: Distributed Databases (2-Phase Commit 2PC), Cloud Databases (Amazon Aurora, Cloud Spanner), Database Security, Data Warehousing (ETL, OLAP Star/Snowflake Schema), and Big Data DBs.",
    "subTopics": [
      "Distributed Databases",
      "Cloud Databases",
      "Database Security",
      "Data Warehousing Basics (ETL, OLAP)",
      "Big Data Databases"
    ],
    "prerequisiteTitles": [
      "Indexing and File Organization",
      "NoSQL Databases"
    ],
    "learningObjectives": [
      "Understand Two-Phase Commit Protocol (2PC) for distributed transaction commit (Prepare Phase + Commit Phase).",
      "Distinguish OLTP (Online Transaction Processing - RDBMS) and OLAP (Online Analytical Processing - Data Warehouses).",
      "Model Data Warehouse Schemas: Star Schema vs Snowflake Schema."
    ],
    "notes": [
      {
        "title": "Two-Phase Commit (2PC) & Star vs Snowflake OLAP Schema",
        "content": "MODERN DATABASE CONCEPTS & DATA WAREHOUSING\n\n1. Distributed Two-Phase Commit (2PC) Protocol:\n   Coordinator manages participant cohort nodes:\n   - Phase 1 (Prepare Phase): Coordinator sends `PREPARE` message to all cohort nodes. Cohort nodes execute transaction locally, write UNDO/REDO logs, and reply `VOTE_COMMIT` or `VOTE_ABORT`.\n   - Phase 2 (Commit Phase): If ALL cohorts voted `VOTE_COMMIT`, Coordinator broadcasts `GLOBAL_COMMIT`. If any cohort voted `VOTE_ABORT`, Coordinator broadcasts `GLOBAL_ABORT`.\n\n2. OLTP vs OLAP & Star Schema:\n   - OLTP: Day-to-day transactional updates (Normalized 3NF, fast single-row reads/writes).\n   - OLAP: Business intelligence analytical queries (Denormalized Star/Snowflake Schema, large historical aggregation scans).\n   - Star Schema: Central Fact Table surrounded by single-table Dimension Tables."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Database System Concepts",
        "author": "Silberschatz"
      }
    ],
    "practiceLinks": [
      {
        "title": "Google Cloud Spanner Architecture Whitepaper",
        "url": "https://cloud.google.com/spanner"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain the 2 phases of the Two-Phase Commit (2PC) protocol. (2 Marks)",
        "Differentiate between OLTP (Online Transaction Processing) and OLAP (Online Analytical Processing). (2 Marks)",
        "Compare Star Schema and Snowflake Schema in Data Warehousing. (2 Marks)"
      ],
      "sixMarks": [
        "Explain Two-Phase Commit (2PC) protocol flow with sequence diagram detailing Coordinator, Cohort nodes, Prepare Phase, and Commit Phase. (6 Marks)",
        "Describe Data Warehouse ETL (Extract, Transform, Load) pipeline and OLAP multidimensional cube operations (Roll-up, Drill-down, Slice, Dice, Pivot). (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Modern Distributed & Cloud Database Architectures. Detail Google Cloud Spanner TrueTime API synchronized atomic clocks, Amazon Aurora decoupled compute/storage architecture, Database Sharding strategies, and Vector Databases (FAISS/Milvus) for AI embeddings. (10 Marks)"
      ]
    }
  }
];
