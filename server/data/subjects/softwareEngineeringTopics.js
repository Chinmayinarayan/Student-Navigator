module.exports = [
  {
    "title": "Introduction to Software Engineering",
    "slug": "software-engineering-introduction-to-software-engineering",
    "order": 1,
    "estimatedHours": 3,
    "difficulty": "Beginner",
    "description": "Learn fundamental principles of Software Engineering, the software crisis, engineering ethics, software characteristics, and the role of software engineers in modern systems.",
    "subTopics": [
      "Introduction to SE",
      "Need for SE",
      "Software Characteristics",
      "SE Challenges",
      "Software Crisis",
      "Software Development as Engineering Discipline",
      "Software Engineering Ethics",
      "Role of Software Engineers"
    ],
    "prerequisiteTitles": [],
    "learningObjectives": [
      "Understand the definition, scope, and necessity of Software Engineering in computing.",
      "Analyze historical software failures, cost overruns, and the factors causing the Software Crisis.",
      "Apply the ACM/IEEE Software Engineering Code of Ethics to real-world engineering scenarios."
    ],
    "notes": [
      {
        "title": "Software Engineering Overview, Crisis & Ethics",
        "content": "1. DEFINITION & NEED FOR SOFTWARE ENGINEERING:\nSoftware Engineering (SE) is the systematic application of engineering approaches, scientific principles, and mathematical techniques to the development, operation, maintenance, and retirement of software.\n- Need: Software applications are complex, large-scale, and critical. Without systematic engineering, software suffers from cost overruns, delays, low quality, and high maintenance costs.\n\n2. SOFTWARE CRISIS & CAUSES:\nThe 'Software Crisis' emerged in the late 1960s due to rapidly increasing hardware power outpacing software development capabilities.\nKey Causes:\n- Projects running over budget and behind schedule.\n- Low software quality and frequent crashes/bugs.\n- Software unmaintainable and difficult to enhance.\n- Inadequate requirement elicitation and lack of software engineering standards.\n\n3. SOFTWARE DUAL ATTRIBUTES:\nSoftware does not wear out like hardware (bathtub curve); instead, it deteriorates due to change requests and side effects of maintenance.\n\n  Hardware Failure Rate (Bathtub Curve) vs Software Failure Rate (Spikes upon changes):\n\n  Failure Rate |                          Failure Rate |   /      /               |                       /              |  /      /                 |  ____________________/               |_/______/________ (Increased baseline)\n               +------------------------               +--------------------\n                         Time                                   Time\n\n4. ACM/IEEE CODE OF ETHICS:\nSoftware engineers shall commit themselves to making the analysis, specification, design, development, testing, and maintenance of software a beneficial and respected profession.\nKey Principles: Public Safety, Client and Employer Interest, Quality Product, Professional Judgment, Ethical Management, Professional Advancement, and Collegiality."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Software Engineering: A Practitioner's Approach",
        "author": "Roger S. Pressman"
      },
      {
        "title": "Fundamentals of Software Engineering",
        "author": "Rajib Mall"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Software Engineering Basics",
        "url": "https://www.geeksforgeeks.org/software-engineering-introduction/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define Software Engineering according to IEEE. (2 Marks)",
        "Explain what is meant by the 'Software Crisis'. (2 Marks)",
        "Differentiate between Software deterioration and Hardware wearing out. (2 Marks)"
      ],
      "sixMarks": [
        "Describe key software characteristics and challenges faced in modern software development. (6 Marks)",
        "Discuss the ACM/IEEE Software Engineering Code of Ethics with 4 key principles. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Introduction to Software Engineering. Detail the historical evolution of SE, root causes of the software crisis, comparison with traditional engineering disciplines, and ethics required in mission-critical software systems. (10 Marks)"
      ]
    }
  },
  {
    "title": "Software Development Process",
    "slug": "software-engineering-software-development-process",
    "order": 2,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Understand the Software Development Life Cycle (SDLC), sequential and iterative phases, entry/exit criteria, and process deliverables.",
    "subTopics": [
      "Software Development Life Cycle (SDLC)",
      "SDLC Phases (Requirement Analysis, Design, Implementation, Testing, Deployment, Maintenance)",
      "Software Process Models Overview"
    ],
    "prerequisiteTitles": [
      "Introduction to Software Engineering"
    ],
    "learningObjectives": [
      "Explain the fundamental phases of the Software Development Life Cycle (SDLC).",
      "Identify entry criteria, exit criteria, and primary deliverables for each SDLC phase.",
      "Compare different process abstraction models used in modern software production."
    ],
    "notes": [
      {
        "title": "SDLC Life Cycle Phases & Deliverables Matrix",
        "content": "1. SOFTWARE DEVELOPMENT LIFE CYCLE (SDLC) PHASES:\n\n  +-----------------------+     +-----------------------+     +-----------------------+\n  | Requirement Analysis  | --> |     System Design     | --> | Implementation/Coding |\n  | (Deliverable: SRS)    |     | (Deliverable: High/Low|     | (Deliverable: Source  |\n  +-----------------------+     |  Level Architecture)  |     |  Code & Unit Tests)   |\n                                +-----------------------+     +-----------------------+\n                                                                          |\n  +-----------------------+     +-----------------------+                 v\n  |      Maintenance      | <-- | Deployment/Release    | <-- +-----------------------+\n  | (Deliverable: Bug     |     | (Deliverable: Live    |     |   Software Testing    |\n  |  Fixes & Patch Logs)  |     |  Environment System)  |     | (Deliverable: Test    |\n  +-----------------------+     +-----------------------+     |  Report & Defect Log) |\n                                                              +-----------------------+\n\n2. PHASE DELIVERABLES & ENTRY/EXIT CRITERIA:\n- Requirement Analysis: Entry: Project Charter. Exit: Approved Software Requirement Specification (SRS).\n- System Design: Entry: Approved SRS. Exit: High Level Design (HLD) & Low Level Design (LLD) documents.\n- Implementation: Entry: HLD/LLD documents. Exit: Executable Code modules and Unit Test Results.\n- Testing: Entry: Integrated Source Code. Exit: Test Summary Report & Defect Clearance Certificate.\n- Deployment: Entry: Tested Executable. Exit: User Acceptance Testing (UAT) Signoff & Production Build.\n- Maintenance: Entry: Operational System. Exit: Maintenance Logs and Patch Releases."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Software Engineering",
        "author": "Ian Sommerville"
      }
    ],
    "practiceLinks": [
      {
        "title": "Tutorialspoint Software Development Life Cycle",
        "url": "https://www.tutorialspoint.com/sdlc/index.htm"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is SDLC? List all standard SDLC phases. (2 Marks)",
        "Define Entry Criteria and Exit Criteria in SDLC phases. (2 Marks)",
        "Name the primary deliverable of Requirement Analysis phase. (2 Marks)"
      ],
      "sixMarks": [
        "Explain each phase of the Software Development Life Cycle with inputs, activities, and outputs. (6 Marks)",
        "Differentiate between High Level Design (HLD) and Low Level Design (LLD). (6 Marks)"
      ],
      "longAnswer": [
        "Detailed analysis of Software Development Process framework. Explain the phase progression, verification/validation gates between phases, deliverable traceability, and criteria for choosing appropriate process frameworks. (10 Marks)"
      ]
    }
  },
  {
    "title": "Software Process Models",
    "slug": "software-engineering-software-process-models",
    "order": 3,
    "estimatedHours": 5,
    "difficulty": "Beginner",
    "description": "Explore traditional and modern software process models: Waterfall, Incremental, Iterative, Spiral, Prototype, V-Model, and Agile, along with criteria for model selection.",
    "subTopics": [
      "Waterfall Model",
      "Incremental Model",
      "Iterative Model",
      "Spiral Model",
      "Prototype Model",
      "V-Model",
      "Agile Model",
      "Comparison of Process Models",
      "Selecting Appropriate Process Model"
    ],
    "prerequisiteTitles": [
      "Software Development Process"
    ],
    "learningObjectives": [
      "Analyze classic software process models: Waterfall, V-Model, Prototype, Iterative, Spiral, and Agile.",
      "Compare process models based on risk management, requirement flexibility, cost, and delivery speed.",
      "Select the optimal process model based on project scope, team size, and domain constraints."
    ],
    "notes": [
      {
        "title": "Process Models: Spiral, V-Model & Trade-off Matrix",
        "content": "1. SPIRAL MODEL (Risk-Driven Framework by Barry Boehm):\n\n             Quadrant 1: Determine Objectives      Quadrant 2: Identify & Resolve Risks\n                                                           /\n                                Cumulative Cost           /\n                                Progress --->            /\n                              +--------------------------+\n                              |    R&D & Prototyping     |\n                              +--------------------------+\n                             /                                                        /                                          Quadrant 4: Plan Next Phases          Quadrant 3: Develop & Test Next Level\n\n2. V-MODEL (Verification & Validation Model):\n\n  Requirement Analysis ------------------------------> User Acceptance Testing\n                                                          /\n      System Design -----------------------------> System Testing\n                                                      /\n          Architecture Design -----------------> Integration Testing\n                                                  /\n              Module Design ----------------> Unit Testing\n                                              /\n                  +-----> Implementation <----+\n\n3. PROCESS MODEL COMPARISON MATRIX:\n+----------------+----------------+----------------+----------------+----------------+\n| Model          | Requirement    | Risk Handling  | User Involvement| Cost / Size   |\n+----------------+----------------+----------------+----------------+----------------+\n| Waterfall      | Rigid/Known    | Low            | Initial & End  | Low / Small    |\n| Prototype      | Unclear        | Medium         | High           | Medium         |\n| Spiral         | Complex/Evolving| High           | Medium         | High / Large   |\n| V-Model        | Critical/Fixed | Low-Medium     | Low            | High / Critical|\n| Agile          | Dynamic        | High/Continuous| Very High      | Variable       |\n+----------------+----------------+----------------+----------------+----------------+"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Software Engineering: A Practitioner's Approach",
        "author": "Roger S. Pressman"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Software Process Models",
        "url": "https://www.geeksforgeeks.org/software-engineering-software-process-models/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State two advantages and two limitations of the Classical Waterfall model. (2 Marks)",
        "What is the main driver of the Spiral Model? (2 Marks)",
        "Explain how the V-Model relates development phases with testing phases. (2 Marks)"
      ],
      "sixMarks": [
        "Explain the four quadrants of Boehm's Spiral Model with a neat diagram. (6 Marks)",
        "Compare Waterfall, Incremental, Prototype, and Agile process models on 5 parameters. (6 Marks)"
      ],
      "longAnswer": [
        "Formulate a selection guide for software process models. Given 3 project scenarios (Defense System, Startup Mobile App, E-Commerce Platform), recommend and justify the appropriate process model for each. (10 Marks)"
      ]
    }
  },
  {
    "title": "Requirement Engineering",
    "slug": "software-engineering-requirement-engineering",
    "order": 4,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Learn requirement elicitation, functional vs non-functional requirements, IEEE 830 SRS document structure, requirement validation, and traceability.",
    "subTopics": [
      "Introduction to Requirements",
      "Functional Requirements",
      "Non-Functional Requirements",
      "Requirement Gathering Techniques",
      "Requirement Analysis",
      "Requirement Specification",
      "SRS Document",
      "Requirement Validation",
      "Requirement Management"
    ],
    "prerequisiteTitles": [
      "Software Process Models"
    ],
    "learningObjectives": [
      "Distinguish between Functional Requirements (FR) and Non-Functional Requirements (NFR).",
      "Execute requirement gathering techniques (Interviews, JAD sessions, Prototyping, Surveys).",
      "Author standardized SRS documents following IEEE 830 / ISO/IEC/IEEE 29148 standards."
    ],
    "notes": [
      {
        "title": "IEEE 830 SRS Template & Requirements Breakdown",
        "content": "1. FUNCTIONAL vs NON-FUNCTIONAL REQUIREMENTS:\n- Functional Requirements (FR): Specific behaviors or functions the system must execute (e.g., \"User shall be able to filter transactions by date\").\n- Non-Functional Requirements (NFR): Quality attributes and constraints (Performance, Security, Availability, Usability, Scalability) (e.g., \"System shall process payment within 2.0 seconds under 10,000 concurrent requests\").\n\n2. IEEE 830 STANDARD SRS STRUCTURE:\n1. Introduction\n   1.1 Purpose\n   1.2 Scope\n   1.3 Definitions, Acronyms, and Abbreviations\n   1.4 References\n   1.5 Overview\n2. Overall Description\n   2.1 Product Perspective\n   2.2 Product Functions\n   2.3 User Classes and Characteristics\n   2.4 Operating Environment\n   2.5 Design and Implementation Constraints\n   2.6 User Documentation\n   2.7 Assumptions and Dependencies\n3. Specific Requirements\n   3.1 External Interface Requirements (User, Hardware, Software, Communication)\n   3.2 System Features (Functional Requirements)\n   3.3 Performance Requirements\n   3.4 Design Constraints\n   3.5 Software System Quality Attributes (Security, Reliability, Maintainability)\n\n3. REQUIREMENT TRACEABILITY MATRIX (RTM):\n+---------+--------------------------+--------------------+----------------+\n| Req ID  | Requirement Description  | Design Module ID   | Test Case ID   |\n+---------+--------------------------+--------------------+----------------+\n| REQ-001 | User Login with 2FA      | MOD-AUTH-02        | TC-AUTH-101    |\n| REQ-002 | Export Data as CSV       | MOD-REP-05         | TC-REP-204     |\n+---------+--------------------------+--------------------+----------------+"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Software Requirements",
        "author": "Karl Wiegers, Joy Beatty"
      }
    ],
    "practiceLinks": [
      {
        "title": "IEEE 830 SRS Standard Overview",
        "url": "https://www.geeksforgeeks.org/software-engineering-software-requirement-specification-srs/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between Functional and Non-Functional Requirements with examples. (2 Marks)",
        "List 4 requirement elicitation techniques. (2 Marks)",
        "What is the purpose of a Requirement Traceability Matrix (RTM)? (2 Marks)"
      ],
      "sixMarks": [
        "Explain the standard IEEE 830 format for Software Requirements Specification (SRS). (6 Marks)",
        "Describe the steps involved in Requirement Engineering Process (Elicitation, Analysis, Specification, Validation, Management). (6 Marks)"
      ],
      "longAnswer": [
        "Draft a complete SRS document outline for an Online Banking System including 5 Functional Requirements, 3 Non-Functional Requirements, User Interfaces, and Security Constraints. (10 Marks)"
      ]
    }
  },
  {
    "title": "Software Project Management",
    "slug": "software-engineering-software-project-management",
    "order": 5,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Master project planning, scheduling (Gantt, PERT/CPM), effort estimation (COCOMO models, Function Point Analysis), risk management, and project metrics.",
    "subTopics": [
      "Introduction to Project Management",
      "Project Planning",
      "Project Scheduling",
      "Effort Estimation",
      "Cost Estimation",
      "Risk Management",
      "Resource Management",
      "Project Monitoring",
      "Project Metrics"
    ],
    "prerequisiteTitles": [
      "Requirement Engineering"
    ],
    "learningObjectives": [
      "Estimate software project effort, time, and cost using basic and intermediate COCOMO models.",
      "Develop project schedules using Gantt Charts, PERT, and Critical Path Method (CPM).",
      "Perform risk identification, risk assessment, and formulate Risk Mitigation, Monitoring & Management (RMMM) plans."
    ],
    "notes": [
      {
        "title": "COCOMO Estimation & Risk Register Template",
        "content": "1. BASIC COCOMO FORMULAS (Constructive Cost Model by Barry Boehm):\nEffort (E) = a * (KLOC)^b  [Person-Months]\nDevelopment Time (D) = c * (E)^d  [Months]\nPersons Required (P) = E / D\n\nSoftware Mode Coefficients:\n+----------------+-------+-------+-------+-------+\n| Project Mode   |   a   |   b   |   c   |   d   |\n+----------------+-------+-------+-------+-------+\n| Organic        | 2.4   | 1.05  | 2.5   | 0.38  |\n| Semi-Detached  | 3.0   | 1.12  | 2.5   | 0.35  |\n| Embedded       | 3.6   | 1.20  | 2.5   | 0.32  |\n+----------------+-------+-------+-------+-------+\n\nExample Calculation:\nFor an Organic project of 32 KLOC:\nEffort = 2.4 * (32)^1.05 = 2.4 * 37.7 = 90.48 PM\nDuration = 2.5 * (90.48)^0.38 = 2.5 * 5.53 = 13.8 Months\n\n2. RISK REGISTER TEMPLATE (RMMM Plan):\n+---------+--------------------+-------------+--------+---------------+----------------------------+\n| Risk ID | Risk Description   | Probability | Impact | Risk Exposure | Mitigation Strategy        |\n+---------+--------------------+-------------+--------+---------------+----------------------------+\n| R-01    | Key Staff Turnover | Medium (0.3)| High (8)| 2.4           | Cross-training & Docs      |\n| R-02    | Scope Creep        | High (0.7)  | High (9)| 6.3           | Formal Change Control Board|\n+---------+--------------------+-------------+--------+---------------+----------------------------+"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Software Project Management",
        "author": "Bob Hughes, Mike Cotterell"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks COCOMO Model",
        "url": "https://www.geeksforgeeks.org/software-engineering-cocomo-model/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State COCOMO basic formulas for Effort and Duration. (2 Marks)",
        "Differentiate between Organic, Semi-detached, and Embedded software projects. (2 Marks)",
        "Define Risk Exposure (RE) formula. (2 Marks)"
      ],
      "sixMarks": [
        "Calculate Effort, Duration, and Team size for a 50 KLOC Semi-detached software project using COCOMO model. (6 Marks)",
        "Explain PERT/CPM techniques for project scheduling and Critical Path determination. (6 Marks)"
      ],
      "longAnswer": [
        "Develop a comprehensive Software Project Management Plan (SPMP) for a 100 KLOC system. Detail Effort/Cost estimation via COCOMO, WBS creation, Gantt chart schedule, and RMMM plan for top 5 risks. (10 Marks)"
      ]
    }
  },
  {
    "title": "Software Design Concepts",
    "slug": "software-engineering-software-design-concepts",
    "order": 6,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Understand fundamental design principles: abstraction, modularity, information hiding, high cohesion, low coupling, and design patterns.",
    "subTopics": [
      "Introduction to Software Design",
      "Design Principles",
      "Modularity",
      "Abstraction",
      "Information Hiding",
      "Cohesion",
      "Coupling",
      "Software Architecture Basics",
      "Design Patterns Introduction"
    ],
    "prerequisiteTitles": [
      "Requirement Engineering"
    ],
    "learningObjectives": [
      "Apply core software design principles: abstraction, modularity, information hiding, and separation of concerns.",
      "Evaluate cohesion types (Functional to Coincidental) and coupling types (Data to Content).",
      "Design modules exhibiting High Cohesion and Low Coupling."
    ],
    "notes": [
      {
        "title": "Cohesion vs Coupling Spectrum & Python Code Example",
        "content": "1. COHESION SPECTRUM (High/Desirable -> Low/Undesirable):\n- Functional Cohesion (Best): All elements work together for a single defined task.\n- Sequential Cohesion: Output of one element is input to the next.\n- Communicational Cohesion: Elements operate on the same input/output data.\n- Procedural / Temporal / Logical / Coincidental Cohesion (Worst).\n\n2. COUPLING SPECTRUM (Low/Desirable -> High/Undesirable):\n- Data Coupling (Best): Modules communicate passing primitive data parameters.\n- Stamp/Structure Coupling: Modules pass complex data structures.\n- Control Coupling: One module controls the flow of another via flags.\n- Common/Global Coupling: Modules share global variables.\n- Content Coupling (Worst): One module directly modifies internal data of another.\n\n3. CODE EXAMPLE: LOW COUPLING & HIGH COHESION (PYTHON):\n\n```python\n# Bad: High Coupling & Low Cohesion\nclass OrderProcessorBad:\n    def process_order(self, order):\n        # Database logic, tax logic, email logic mixed together\n        db = {\"status\": \"saved\"} \n        tax = order['amount'] * 0.18\n        print(f\"Sending email for order {order['id']} with tax {tax}\")\n\n# Good: High Cohesion & Low Coupling\nclass TaxCalculator:\n    def calculate_tax(self, amount: float) -> float:\n        return amount * 0.18\n\nclass EmailNotifier:\n    def send_notification(self, recipient: str, message: str) -> None:\n        print(f\"Email to {recipient}: {message}\")\n\nclass OrderProcessorGood:\n    def __init__(self, tax_calc: TaxCalculator, notifier: EmailNotifier):\n        self.tax_calc = tax_calc\n        self.notifier = notifier\n        \n    def process(self, order: dict) -> float:\n        tax = self.tax_calc.calculate_tax(order['amount'])\n        self.notifier.send_notification(order['email'], f\"Order processed. Tax: {tax}\")\n        return order['amount'] + tax\n```"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Software Design: Principles and Practice",
        "author": "David Budgen"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Software Design Concepts",
        "url": "https://www.geeksforgeeks.org/software-engineering-software-design-basics/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define Modularity and Information Hiding. (2 Marks)",
        "What is the ideal goal for cohesion and coupling in software design? (2 Marks)",
        "List 3 types of Cohesion and 3 types of Coupling. (2 Marks)"
      ],
      "sixMarks": [
        "Explain different levels of Cohesion from Coincidental to Functional with code examples. (6 Marks)",
        "Describe Coupling types from Content Coupling to Data Coupling and why Low Coupling is desirable. (6 Marks)"
      ],
      "longAnswer": [
        "Analyze fundamental Software Design Principles. Detail Abstraction, Refinement, Modularity, Software Architecture, Control Hierarchy, Data Structure, Software Procedure, and Information Hiding with architectural examples. (10 Marks)"
      ]
    }
  },
  {
    "title": "Software Architecture",
    "slug": "software-engineering-software-architecture",
    "order": 7,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Explore enterprise software architecture patterns: Layered, Client-Server, Microservices, Event-Driven, and trade-off analysis for performance and scalability.",
    "subTopics": [
      "Introduction to Software Architecture",
      "Layered Architecture",
      "Client-Server Architecture",
      "Microservices Architecture",
      "Event-Driven Architecture",
      "Architecture Design Decisions",
      "Scalability",
      "Reliability",
      "Performance"
    ],
    "prerequisiteTitles": [
      "Software Design Concepts"
    ],
    "learningObjectives": [
      "Compare architectural patterns: Monolithic Layered, Microservices, Event-Driven, and Client-Server.",
      "Analyze non-functional architectural trade-offs: Scalability, Latency, Fault-Tolerance, Availability.",
      "Apply Architectural Tradeoff Analysis Method (ATAM) to evaluate architectural decisions."
    ],
    "notes": [
      {
        "title": "Microservices vs Layered vs Event-Driven Architecture Diagrams",
        "content": "1. LAYERED (N-TIER) ARCHITECTURE:\n  [ Presentation Layer (UI / Web) ]\n                |\n  [ Business Logic Layer (Services) ]\n                |\n  [ Data Access Layer (DAO / ORM) ]\n                |\n  [ Database Layer (RDBMS) ]\n\n2. MICROSERVICES ARCHITECTURE (Decoupled, Polyglot):\n  [ API Gateway ] ---> [ Auth Service ] ------> [ Auth DB ]\n        |\n        +------------> [ User Service ] ------> [ User DB ]\n        |\n        +------------> [ Order Service ] -----> [ Order DB ]\n\n3. EVENT-DRIVEN ARCHITECTURE (Broker Pattern):\n  [ Event Producer ] ---> ( Publish Event ) ---> [ Event Broker / Kafka ]\n                                                        |\n                                 +----------------------+----------------------+\n                                 v                                             v\n                      [ Inventory Consumer ]                        [ Notification Consumer ]\n\n4. ARCHITECTURAL COMPARISON:\n- Layered: Simple, easy to test, monolithic deployment, single point of failure scaling.\n- Microservices: Highly scalable, independent deployment, complex service orchestration, network latency.\n- Event-Driven: Asynchronous, highly decoupled, eventual consistency challenges."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Fundamentals of Software Architecture",
        "author": "Mark Richards, Neal Ford"
      }
    ],
    "practiceLinks": [
      {
        "title": "Software Architecture Guide - Martin Fowler",
        "url": "https://martinfowler.com/architecture/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is Software Architecture? (2 Marks)",
        "Differentiate between Monolithic Architecture and Microservices Architecture. (2 Marks)",
        "Explain the role of an API Gateway in Microservices. (2 Marks)"
      ],
      "sixMarks": [
        "Explain Layered (N-Tier) Architecture with advantages, limitations, and structural diagram. (6 Marks)",
        "Describe Event-Driven Architecture with Event Producers, Event Consumers, and Message Brokers. (6 Marks)"
      ],
      "longAnswer": [
        "System Architecture Design Task: Design an Enterprise E-Commerce Platform. Compare Monolithic vs Microservices architecture, detail database strategy (Database-per-Service vs Shared), API Gateway setup, and event-driven order processing via Message Queue. (10 Marks)"
      ]
    }
  },
  {
    "title": "Object-Oriented Software Design",
    "slug": "software-engineering-object-oriented-software-design",
    "order": 8,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master Object-Oriented Analysis & Design (OOAD), standard UML diagrams (Class, Use Case, Sequence, Activity, Component), and SOLID design principles.",
    "subTopics": [
      "OOA and OOD",
      "UML Basics",
      "Class Diagrams",
      "Use Case Diagrams",
      "Sequence Diagrams",
      "Activity Diagrams",
      "Component Diagrams",
      "SOLID Principles"
    ],
    "prerequisiteTitles": [
      "Software Design Concepts"
    ],
    "learningObjectives": [
      "Construct structural (Class, Component) and behavioral (Use Case, Sequence, Activity) UML diagrams.",
      "Translate domain requirements into object-oriented class hierarchies with inheritance, composition, and aggregation.",
      "Apply the 5 SOLID principles to construct clean, extensible object-oriented codebases."
    ],
    "notes": [
      {
        "title": "UML Diagrams ASCII & SOLID Code Implementation in Python",
        "content": "1. UML CLASS DIAGRAM RELATIONSHIPS:\n  [ Car ] <1--- * [ Wheel ]      (Composition - filled diamond)\n  [ Team ] <>1--- * [ Player ]   (Aggregation - hollow diamond)\n  [ Student ] ----|> [ Person ]  (Generalization/Inheritance - hollow triangle)\n  [ Customer ] ..> [ Order ]     (Dependency - dashed arrow)\n\n2. UML SEQUENCE DIAGRAM ASCII:\n  User          Client UI           Auth Server           Database\n   |                |                    |                   |\n   |--- Login() --->|                    |                   |\n   |                |--- Authenticate ->|                   |\n   |                |                    |--- Query User --->|\n   |                |                    |<-- User Record ---|\n   |                |<-- Token Success --|                   |\n   |<-- Auth OK ----|                    |                   |\n\n3. SOLID PRINCIPLES PYTHON IMPLEMENTATION:\n- S: Single Responsibility Principle\n- O: Open/Closed Principle (Open for extension, closed for modification)\n- L: Liskov Substitution Principle\n- I: Interface Segregation Principle\n- D: Dependency Inversion Principle\n\n```python\nfrom abc import ABC, abstractmethod\n\n# Dependency Inversion & Open/Closed Principle\nclass PaymentProcessor(ABC):\n    @abstractmethod\n    def pay(self, amount: float) -> bool:\n        pass\n\nclass CreditCardPayment(PaymentProcessor):\n    def pay(self, amount: float) -> bool:\n        print(f\"Paid ${amount} via Credit Card\")\n        return True\n\nclass PayPalPayment(PaymentProcessor):\n    def pay(self, amount: float) -> bool:\n        print(f\"Paid ${amount} via PayPal\")\n        return True\n\nclass CheckoutService:\n    def __init__(self, processor: PaymentProcessor):\n        self.processor = processor # Depends on abstraction\n        \n    def checkout(self, amount: float):\n        return self.processor.pay(amount)\n```"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "UML Distilled",
        "author": "Martin Fowler"
      },
      {
        "title": "Clean Architecture",
        "author": "Robert C. Martin"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Unified Modeling Language (UML)",
        "url": "https://www.geeksforgeeks.org/unified-modeling-language-uml-introduction/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define OOA and OOD. (2 Marks)",
        "Differentiate between Aggregation and Composition in UML. (2 Marks)",
        "State all 5 SOLID principles. (2 Marks)"
      ],
      "sixMarks": [
        "Draw a Use Case diagram and Class diagram for an ATM Banking System with key relationships. (6 Marks)",
        "Explain SOLID principles with clean code snippets for OCP and DIP. (6 Marks)"
      ],
      "longAnswer": [
        "Design an Object-Oriented Library Management System. Provide: 1) Use Case Diagram, 2) Complete Class Diagram showing attributes, methods, and multiplicities, 3) Sequence Diagram for borrowing a book. (10 Marks)"
      ]
    }
  },
  {
    "title": "Software Implementation and Coding",
    "slug": "software-engineering-software-implementation-and-coding",
    "order": 9,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Learn implementation best practices: coding standards, clean code, documentation, Git version control workflows, code reviews, refactoring, and debugging.",
    "subTopics": [
      "Coding Standards",
      "Clean Code Principles",
      "Code Documentation",
      "Version Control Systems",
      "Git Basics",
      "Code Review Practices",
      "Refactoring",
      "Debugging Techniques"
    ],
    "prerequisiteTitles": [
      "Object-Oriented Software Design"
    ],
    "learningObjectives": [
      "Write self-documenting code using Clean Code principles and PEP8/Google style guidelines.",
      "Execute essential Git source control commands and branching strategies.",
      "Perform code refactoring and code review checklists to eliminate code smells."
    ],
    "notes": [
      {
        "title": "Clean Code Refactoring & Essential Git Commands",
        "content": "1. CLEAN CODE BEFORE & AFTER REFACTORING (JAVA):\n\n```java\n// BEFORE (Code Smell: Long Method, Magic Numbers, Poor Naming)\npublic double c(double p, int t) {\n    if (t == 1) return p * 0.05;\n    else if (t == 2) return p * 0.10;\n    return p * 0.15;\n}\n\n// AFTER (Refactored Clean Code)\npublic class DiscountCalculator {\n    private static final double REGULAR_DISCOUNT = 0.05;\n    private static final double PREMIUM_DISCOUNT = 0.10;\n    private static final double VIP_DISCOUNT = 0.15;\n\n    public double calculateDiscount(double price, CustomerType customerType) {\n        switch (customerType) {\n            case REGULAR: return price * REGULAR_DISCOUNT;\n            case PREMIUM: return price * PREMIUM_DISCOUNT;\n            case VIP:     return price * VIP_DISCOUNT;\n            default:      throw new IllegalArgumentException(\"Unknown type: \" + customerType);\n        }\n    }\n}\n```\n\n2. ESSENTIAL GIT CLI WORKFLOW COMMANDS:\n```bash\n# Repository setup & sync\ngit init\ngit clone https://github.com/org/repo.git\ngit checkout -b feature/login-page\n\n# Staging & Committing\ngit add .\ngit commit -m \"feat(auth): implement OAuth2 JWT authentication flow\"\n\n# Branch management & Sync\ngit pull origin main --rebase\ngit push origin feature/login-page\n```\n\n3. CODE REVIEW CHECKLIST:\n- Readability & Naming Conventions\n- Exception & Error Handling\n- Security Vulnerabilities (SQL injection, XSS)\n- Test Coverage & Unit Test Passing\n- Performance & Memory Management"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Clean Code: A Handbook of Agile Software Craftsmanship",
        "author": "Robert C. Martin"
      },
      {
        "title": "Refactoring: Improving the Design of Existing Code",
        "author": "Martin Fowler"
      }
    ],
    "practiceLinks": [
      {
        "title": "Git Official Documentation & Cheatsheet",
        "url": "https://git-scm.com/doc"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is a 'Code Smell'? List 3 common examples. (2 Marks)",
        "Explain the purpose of code refactoring. (2 Marks)",
        "State 4 essential Git CLI commands for feature development. (2 Marks)"
      ],
      "sixMarks": [
        "Explain key Clean Code principles regarding function size, variable naming, and comments. (6 Marks)",
        "Describe a standard peer code review workflow and checklist items. (6 Marks)"
      ],
      "longAnswer": [
        "Detailed report on Implementation Phase Practices. Contrast poorly structured code with refactored clean code, detail Git feature-branching workflow, and code inspection guidelines for enterprise software production. (10 Marks)"
      ]
    }
  },
  {
    "title": "Software Testing",
    "slug": "software-engineering-software-testing",
    "order": 10,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Understand software testing fundamentals: testing levels (Unit, Integration, System, Acceptance), Verification vs Validation, and functional vs non-functional testing.",
    "subTopics": [
      "Introduction to Testing",
      "Importance of Testing",
      "Testing Principles",
      "Verification and Validation",
      "Unit Testing",
      "Integration Testing",
      "System Testing",
      "Acceptance Testing",
      "Functional Testing",
      "Non-Functional Testing"
    ],
    "prerequisiteTitles": [
      "Software Implementation and Coding"
    ],
    "learningObjectives": [
      "Differentiate between Verification (Are we building the product right?) and Validation (Are we building the right product?).",
      "Classify testing across levels: Unit, Integration (Top-Down, Bottom-Up, Big-Bang), System, and Acceptance Testing (Alpha/Beta).",
      "Write automated Unit Tests using PyTest or JUnit frameworks."
    ],
    "notes": [
      {
        "title": "Testing Levels, V&V Comparison & PyTest Unit Test Example",
        "content": "1. VERIFICATION VS VALIDATION:\n- Verification: Process of evaluating work products (specs, designs, code) to ensure compliance with phase inputs. (Static Testing: Code Reviews, Walkthroughs, Inspections).\n- Validation: Process of evaluating software during or at the end of development to determine whether it satisfies customer requirements. (Dynamic Testing: Code Execution).\n\n2. THE TESTING PYRAMID:\n                 / \\\n                / UI \\          <-- Acceptance & End-to-End Tests (Slow, Expensive, Few)\n               /------\\\n              / Integration\\    <-- Integration Tests (Component Interfacing)\n             /--------------\\\n            /   Unit Tests   \\  <-- Unit Tests (Fast, Isolated, High Volume)\n           --------------------\n\n3. PYTHON UNIT TESTING EXAMPLE (PYTEST):\n\n```python\nimport pytest\n\ndef divide(a: float, b: float) -> float:\n    if b == 0:\n        raise ValueError(\"Cannot divide by zero\")\n    return a / b\n\n# Unit Test Test Case Suite\ndef test_divide_valid_numbers():\n    assert divide(10, 2) == 5.0\n    assert divide(-6, 3) == -2.0\n\ndef test_divide_by_zero_raises_exception():\n    with pytest.raises(ValueError, match=\"Cannot divide by zero\"):\n        divide(10, 0)\n```"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Foundations of Software Testing",
        "author": "Dorothy Graham, Rex Black"
      }
    ],
    "practiceLinks": [
      {
        "title": "PyTest Official Documentation",
        "url": "https://docs.pytest.org/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between Verification and Validation in software testing. (2 Marks)",
        "What is the Testing Pyramid? (2 Marks)",
        "Differentiate between Alpha Testing and Beta Testing. (2 Marks)"
      ],
      "sixMarks": [
        "Explain the four levels of software testing: Unit, Integration, System, and Acceptance Testing. (6 Marks)",
        "Describe Integration Testing approaches: Top-Down, Bottom-Up, Sandwich, and Big Bang with Stubs & Drivers. (6 Marks)"
      ],
      "longAnswer": [
        "Formulate a complete Software Testing Strategy for an Enterprise Banking Portal. Detail static verification techniques, dynamic testing levels, stub/driver creation, test metrics, and entry/exit criteria for production release. (10 Marks)"
      ]
    }
  },
  {
    "title": "Software Testing Techniques",
    "slug": "software-engineering-software-testing-techniques",
    "order": 11,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Master Black Box, White Box, and Grey Box testing techniques: Equivalence Partitioning, Boundary Value Analysis, Cyclomatic Complexity, and Control Flow Graphs.",
    "subTopics": [
      "Black Box Testing",
      "White Box Testing",
      "Grey Box Testing",
      "Boundary Value Analysis",
      "Equivalence Partitioning",
      "Decision Table Testing",
      "Path Testing",
      "Regression Testing",
      "Automation Testing"
    ],
    "prerequisiteTitles": [
      "Software Testing"
    ],
    "learningObjectives": [
      "Apply Black Box test design techniques: Boundary Value Analysis (BVA) and Equivalence Partitioning (EP).",
      "Apply White Box test design techniques: Statement Coverage, Branch Coverage, Basis Path Testing.",
      "Calculate McCabe's Cyclomatic Complexity V(G) from Control Flow Graphs (CFG)."
    ],
    "notes": [
      {
        "title": "Boundary Value Analysis & McCabe Cyclomatic Complexity",
        "content": "1. BOUNDARY VALUE ANALYSIS (BVA) & EQUIVALENCE PARTITIONING (EP):\nFor an input field accepting age values between 18 and 60 (inclusive):\n- Valid Equivalence Partition: [18, 60]\n- Invalid Equivalence Partitions: [< 18] and [> 60]\n- Boundary Values to Test: 17 (Min-1), 18 (Min), 19 (Min+1), 59 (Max-1), 60 (Max), 61 (Max+1).\n\n2. MCCABE'S CYCLOMATIC COMPLEXITY V(G):\nFormulas to compute V(G) on a Control Flow Graph:\n1. V(G) = E - N + 2P  (where E = Edges, N = Nodes, P = Connected Components)\n2. V(G) = Predicate Nodes + 1\n3. V(G) = Number of Closed Regions + 1\n\n3. CONTROL FLOW GRAPH (CFG) & PATH TESTING:\n\n         (1: Entry / Read A, B)\n                   |\n            < 2: Is A > B? >\n             /            \\\n        (Yes)              (No)\n         /                  \\\n   (3: X = A - B)      (4: X = A + B)\n         \\                  /\n          \\                /\n           v              v\n            (5: Print X)\n                 |\n             (6: Exit)\n\nEdges (E) = 6, Nodes (N) = 6, Predicate Nodes (P_node) = 1 (Node 2)\nV(G) = 6 - 6 + 2(1) = 2 Independent Basis Paths:\nPath 1: 1 -> 2 -> 3 -> 5 -> 6\nPath 2: 1 -> 2 -> 4 -> 5 -> 6"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Software Testing: A Craftsman's Approach",
        "author": "Paul C. Jorgensen"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Software Testing Techniques",
        "url": "https://www.geeksforgeeks.org/software-testing-test-design-techniques/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between Black Box Testing and White Box Testing. (2 Marks)",
        "What is Boundary Value Analysis (BVA)? (2 Marks)",
        "State 3 formulas to calculate Cyclomatic Complexity. (2 Marks)"
      ],
      "sixMarks": [
        "Apply Equivalence Partitioning and Boundary Value Analysis for a text box taking marks between 0 and 100. (6 Marks)",
        "Explain Basis Path Testing. Draw Control Flow Graph for a given code snippet and calculate V(G). (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive guide to Software Test Design. Compare Black-Box (BVA, EP, Decision Tables) and White-Box (Statement, Branch, Path Coverage) techniques with code examples and calculate independent paths for complex conditional algorithms. (10 Marks)"
      ]
    }
  },
  {
    "title": "Software Quality Assurance",
    "slug": "software-engineering-software-quality-assurance",
    "order": 12,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Understand SQA frameworks, McCall's quality factors, ISO/IEC 25010 standards, software quality metrics, and CMMI process capability maturity levels.",
    "subTopics": [
      "Software Quality Concepts",
      "Quality Standards",
      "Software Metrics",
      "Quality Control",
      "Quality Assurance Activities",
      "CMMI Overview",
      "ISO Software Standards"
    ],
    "prerequisiteTitles": [
      "Software Testing"
    ],
    "learningObjectives": [
      "Differentiate between Quality Assurance (QA - proactive process focus) and Quality Control (QC - reactive product focus).",
      "Analyze software quality models: McCall's Quality Factors and ISO/IEC 25010.",
      "Understand Capability Maturity Model Integration (CMMI) 5 maturity levels."
    ],
    "notes": [
      {
        "title": "CMMI Maturity Levels & ISO 25010 Quality Model Breakdown",
        "content": "1. CMMI 5 PROCESS MATURITY LEVELS:\n\n  Level 5: OPTIMIZING      --> Continuous process improvement via quantitative feedback.\n     ^\n  Level 4: QUANTITATIVE MANAGED --> Process measured and controlled with quantitative metrics.\n     ^\n  Level 3: DEFINED         --> Process characterized for organization & proactive.\n     ^\n  Level 2: MANAGED         --> Process planned, performed, measured, and controlled at project level.\n     ^\n  Level 1: INITIAL         --> Process unpredictable, poorly controlled, and reactive (Ad-hoc).\n\n2. ISO/IEC 25010 SOFTWARE QUALITY MODEL ATTRIBUTES:\n- Functional Suitability (Completeness, Correctness, Appropriateness)\n- Performance Efficiency (Time behavior, Resource utilization, Capacity)\n- Compatibility (Co-existence, Interoperability)\n- Usability (Appropriateness, Learnability, Accessibility, Error protection)\n- Reliability (Maturity, Availability, Fault tolerance, Recoverability)\n- Security (Confidentiality, Integrity, Non-repudiation, Accountability, Authenticity)\n- Maintainability (Modular, Reusable, Analysable, Modifiable, Testable)\n- Portability (Adaptability, Installability, Replaceability)\n\n3. SOFTWARE QUALITY METRICS FORMULAS:\n- Defect Density = (Total Number of Known Defects) / (Size of Software in KLOC)\n- Code Coverage = (Number of Executed Code Statements / Total Statements) * 100%"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Software Quality Assurance: From Theory to Implementation",
        "author": "Daniel Galin"
      }
    ],
    "practiceLinks": [
      {
        "title": "CMMI Institute Official Overview",
        "url": "https://cmmiinstitute.com/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between Quality Assurance (QA) and Quality Control (QC). (2 Marks)",
        "List the 5 maturity levels of CMMI. (2 Marks)",
        "Define Defect Density metric formula. (2 Marks)"
      ],
      "sixMarks": [
        "Explain CMMI 5 process maturity levels with key process areas (KPAs) for each level. (6 Marks)",
        "Describe ISO/IEC 25010 software product quality attributes with examples. (6 Marks)"
      ],
      "longAnswer": [
        "Construct an SQA Strategy Plan for an enterprise organization transitioning from CMMI Level 1 to CMMI Level 3. Detail audit processes, code quality gates, static analysis metrics, and compliance checks. (10 Marks)"
      ]
    }
  },
  {
    "title": "Agile Software Development",
    "slug": "software-engineering-agile-software-development",
    "order": 13,
    "estimatedHours": 4,
    "difficulty": "Advanced",
    "description": "Master Agile principles, the Agile Manifesto, Scrum framework (Roles, Events, Artifacts), User Stories, velocity tracking, and Kanban boards.",
    "subTopics": [
      "Introduction to Agile",
      "Agile Principles",
      "Agile Manifesto",
      "Scrum Framework",
      "Scrum Roles",
      "Sprint Planning",
      "Daily Standup",
      "Sprint Review",
      "Sprint Retrospective",
      "Kanban Basics"
    ],
    "prerequisiteTitles": [
      "Software Process Models"
    ],
    "learningObjectives": [
      "Understand the 4 values and 12 principles of the Agile Manifesto.",
      "Execute Scrum framework elements: 3 Roles (Product Owner, Scrum Master, Developers), 4 Events (Sprint Planning, Daily Scrum, Review, Retrospective), 3 Artifacts (Product Backlog, Sprint Backlog, Increment).",
      "Author INVEST-compliant User Stories with Acceptance Criteria and Story Points."
    ],
    "notes": [
      {
        "title": "Agile Manifesto & Scrum Workflow Diagram",
        "content": "1. AGILE MANIFESTO 4 CORE VALUES:\n- Individuals and interactions OVER processes and tools\n- Working software OVER comprehensive documentation\n- Customer collaboration OVER contract negotiation\n- Responding to change OVER following a plan\n\n2. SCRUM FRAMEWORK ARCHITECTURE:\n\n  [ Product Backlog ] (Prioritized User Stories owned by Product Owner)\n         |\n  ( Sprint Planning ) ---> [ Sprint Backlog ] (Commitment for 2-4 Weeks)\n                                 |\n                                 v\n                       +--------------------+\n                       | 2-4 Week Sprint    |<--- ( Daily Standup - 15 min )\n                       +--------------------+\n                                 |\n                                 v\n                       [ Increment / Demo ]\n                         /             \\\n                        v               v\n                ( Sprint Review )  ( Sprint Retrospective )\n\n3. USER STORY TEMPLATE & INVEST CRITERIA:\n- User Story Format: \"As a <type of user>, I want <some goal> so that <some benefit>.\"\n- Acceptance Criteria: Given <context>, When <action>, Then <outcome>.\n- INVEST Guidelines: Independent, Negotiable, Valuable, Estimable, Small, Testable."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Scrum: The Art of Doing Twice the Work in Half the Time",
        "author": "Jeff Sutherland"
      },
      {
        "title": "Agile Software Development with Scrum",
        "author": "Ken Schwaber, Mike Beedle"
      }
    ],
    "practiceLinks": [
      {
        "title": "Scrum Guide Official Resource",
        "url": "https://www.scrumguides.org/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State the 4 core values of the Agile Manifesto. (2 Marks)",
        "List the 3 Scrum Roles and 3 Scrum Artifacts. (2 Marks)",
        "What does the INVEST acronym stand for in User Stories? (2 Marks)"
      ],
      "sixMarks": [
        "Explain the 4 Scrum Ceremonies (Sprint Planning, Daily Standup, Sprint Review, Sprint Retrospective). (6 Marks)",
        "Compare Scrum and Kanban process management frameworks on 5 parameters. (6 Marks)"
      ],
      "longAnswer": [
        "Simulate an Agile Scrum Sprint cycle for a Fintech Startup. Draft 3 User Stories with Acceptance Criteria, estimate using Story Points, layout Sprint Planning, Daily Scrum execution, and Retrospective action items. (10 Marks)"
      ]
    }
  },
  {
    "title": "DevOps and Software Deployment",
    "slug": "software-engineering-devops-and-software-deployment",
    "order": 14,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Explore DevOps culture, CI/CD pipelines, containerization with Docker, infrastructure as code, build automation, and blue-green deployment strategies.",
    "subTopics": [
      "Introduction to DevOps",
      "DevOps Lifecycle",
      "CI/CD",
      "Build Automation",
      "Deployment Strategies",
      "Monitoring and Logging",
      "Containerization Basics",
      "Docker Introduction"
    ],
    "prerequisiteTitles": [
      "Agile Software Development",
      "Software Testing"
    ],
    "learningObjectives": [
      "Understand the DevOps lifecycle uniting Development (Dev) and Operations (Ops).",
      "Construct Continuous Integration & Continuous Deployment (CI/CD) pipelines.",
      "Write Dockerfiles and execute containerized deployments using Blue-Green or Canary strategies."
    ],
    "notes": [
      {
        "title": "CI/CD Pipeline Architecture & Sample Dockerfile",
        "content": "1. CI/CD AUTOMATED PIPELINE STAGES:\n\n  [ Git Commit ] ---> [ Automated Build ] ---> [ Unit & Integration Tests ]\n                                                       |\n  [ Production Deploy ] <--- [ Staging Integration ] <--- [ Security Scan / SAST ]\n\n2. SAMPLE PRODUCTION DOCKERFILE (NODE.JS / PYTHON APP):\n\n```dockerfile\n# Multi-stage Dockerfile build\nFROM node:18-alpine AS builder\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci --only=production\nCOPY . .\n\nFROM node:18-alpine AS runner\nWORKDIR /app\nENV NODE_ENV=production\nCOPY --from=builder /app /app\nEXPOSE 3000\nUSER node\nCMD [\"node\", \"server.js\"]\n```\n\n3. DEPLOYMENT STRATEGIES:\n- Blue-Green Deployment: Two identical production environments (Blue = active live traffic, Green = idle test deployment). Router switches live traffic instantaneously upon validation.\n- Canary Deployment: Rolling out new release incrementally to a small subset of users (e.g. 5%) before full fleet rollout."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "The DevOps Handbook",
        "author": "Gene Kim, Jez Humble, Patrick Debois"
      }
    ],
    "practiceLinks": [
      {
        "title": "Docker Docs Official Getting Started",
        "url": "https://docs.docker.com/get-started/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define DevOps and CI/CD. (2 Marks)",
        "Explain Blue-Green Deployment vs Canary Deployment. (2 Marks)",
        "What is the purpose of Containerization? (2 Marks)"
      ],
      "sixMarks": [
        "Describe the stages of a modern automated CI/CD pipeline from code check-in to production deployment. (6 Marks)",
        "Explain Docker multi-stage builds and why they improve security and container size. (6 Marks)"
      ],
      "longAnswer": [
        "Design a DevOps Infrastructure & CI/CD Pipeline for a Microservices Web Application using Git, Docker, Automated Testing, and Kubernetes/Cloud Deployment. Detail monitoring, logging, and rollback procedures. (10 Marks)"
      ]
    }
  },
  {
    "title": "Software Maintenance",
    "slug": "software-engineering-software-maintenance",
    "order": 15,
    "estimatedHours": 3,
    "difficulty": "Advanced",
    "description": "Learn maintenance categories (Corrective, Adaptive, Perfective, Preventive), Lehman's laws of software evolution, software re-engineering, and legacy code modernization.",
    "subTopics": [
      "Introduction to Maintenance",
      "Corrective Maintenance",
      "Adaptive Maintenance",
      "Perfective Maintenance",
      "Preventive Maintenance",
      "Legacy Software Management",
      "Software Evolution",
      "Change Management"
    ],
    "prerequisiteTitles": [
      "Software Development Process"
    ],
    "learningObjectives": [
      "Classify the four types of software maintenance: Corrective, Adaptive, Perfective, and Preventive.",
      "Apply Lehman's Laws of Software Evolution to long-term software system lifecycle planning.",
      "Perform software re-engineering, reverse engineering, and legacy migration."
    ],
    "notes": [
      {
        "title": "Maintenance Types Matrix & Lehman's Evolution Laws",
        "content": "1. FOUR TYPES OF SOFTWARE MAINTENANCE:\n+-------------------+---------------------------------------------------+--------------------+\n| Type              | Description                                       | Cost Share (%)     |\n+-------------------+---------------------------------------------------+--------------------+\n| Corrective        | Fixing reported software bugs and defects         | ~ 20%              |\n| Adaptive          | Modifying software for new OS, HW, or environment | ~ 20%              |\n| Perfective        | Enhancing features, performance, or usability     | ~ 50%              |\n| Preventive        | Code refactoring to prevent future failures       | ~ 10%              |\n+-------------------+---------------------------------------------------+--------------------+\n\n2. LEHMAN'S LAWS OF SOFTWARE EVOLUTION:\n- Law 1: Continuing Change: An E-type system must be continually adapted or it becomes progressively less satisfactory.\n- Law 2: Increasing Complexity: As an E-type system evolves, its complexity increases unless work is done to maintain or reduce it.\n- Law 3: Self Regulation: System evolution process is self-regulating with statistical distribution of product and process measures.\n\n3. SOFTWARE RE-ENGINEERING PROCESS:\n\n  [ Legacy Source Code ] ---> [ Reverse Engineering ] ---> [ Restructure & Refactor ]\n                                                                   |\n  [ Modernized System ] <--- [ Forward Engineering ] <-------------+"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Software Evolution and Maintenance",
        "author": "Priyadarshi Tripathy, Kshirasagar Naik"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Software Maintenance Overview",
        "url": "https://www.geeksforgeeks.org/software-engineering-software-maintenance-overview/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "List the 4 types of software maintenance. (2 Marks)",
        "Explain Lehman's First and Second Laws of Software Evolution. (2 Marks)",
        "Differentiate between Reverse Engineering and Re-Engineering. (2 Marks)"
      ],
      "sixMarks": [
        "Describe the 4 types of software maintenance with real-world industry examples. (6 Marks)",
        "Explain the Software Re-Engineering Lifecycle model in detail. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Legacy System Modernization. Detail technical debt analysis, maintenance cost estimation models, reverse engineering tools, and strategies for migrating legacy monoliths to modern architectures. (10 Marks)"
      ]
    }
  },
  {
    "title": "Software Configuration Management",
    "slug": "software-engineering-software-configuration-management",
    "order": 16,
    "estimatedHours": 4,
    "difficulty": "Advanced",
    "description": "Understand Software Configuration Management (SCM), version control, GitFlow branching strategies, change control board (CCB) workflows, and release engineering.",
    "subTopics": [
      "Configuration Management Concepts",
      "Version Control",
      "Git and GitHub Workflow",
      "Branching Strategies",
      "Release Management",
      "Change Tracking"
    ],
    "prerequisiteTitles": [
      "Software Implementation and Coding"
    ],
    "learningObjectives": [
      "Define SCM tasks: Configuration Identification, Version Control, Change Control, Configuration Audit, Status Accounting.",
      "Implement enterprise Git branching strategies (GitFlow, Trunk-Based Development).",
      "Apply Semantic Versioning (SemVer: MAJOR.MINOR.PATCH) for release management."
    ],
    "notes": [
      {
        "title": "GitFlow Branching Model & SCM Change Control Workflow",
        "content": "1. GITFLOW BRANCHING STRATEGY ASCII DIAGRAM:\n\n  main        -----------------------> [ Tag v1.0.0 ] -----------------> [ Tag v1.1.0 ]\n                                         ^                                 ^\n  hotfix      ---------------------------|--- [ hotfix/patch-1 ] ----------|\n                                         |                                 |\n  release     -------------> [ release/v1.0.0 ] ---------------------------|\n                               ^                                           |\n  develop     ----*---*--------|------------------*---*--------------------+\n                   \\ /                           /   /\n  feature           *--- [ feature/user-auth ] -*   *--- [ feature/payments ]\n\n2. SCM CHANGE CONTROL BOARD (CCB) WORKFLOW:\n[ Change Request (CR) Submitted ] -> [ Impact & Cost Analysis ] -> [ CCB Review (Approve/Reject) ] -> [ Implement Change in Feature Branch ] -> [ SCM Audit & Merge ]\n\n3. SEMANTIC VERSIONING (SemVer):\nMAJOR.MINOR.PATCH (e.g. 2.4.1)\n- MAJOR: Incompatible API breaking changes.\n- MINOR: Backward-compatible new functionality.\n- PATCH: Backward-compatible bug fixes."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Software Configuration Management Patterns",
        "author": "Stephen P. Berczuk, Brad Appleton"
      }
    ],
    "practiceLinks": [
      {
        "title": "Semantic Versioning Specification",
        "url": "https://semver.org/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is Software Configuration Management (SCM)? (2 Marks)",
        "Explain Semantic Versioning format MAJOR.MINOR.PATCH. (2 Marks)",
        "State the role of a Change Control Board (CCB). (2 Marks)"
      ],
      "sixMarks": [
        "Describe the 5 core activities of SCM (Identification, Version Control, Change Control, Auditing, Status Accounting). (6 Marks)",
        "Explain the GitFlow branching strategy with neat diagram showing main, develop, feature, release, and hotfix branches. (6 Marks)"
      ],
      "longAnswer": [
        "Formulate a complete Software Configuration Management Plan (SCMP) for a multi-team enterprise product. Detail repository architecture, branching policy, pull request authorization, automated change audit, and release tagging rules. (10 Marks)"
      ]
    }
  },
  {
    "title": "Software Engineering Applications",
    "slug": "software-engineering-software-engineering-applications",
    "order": 17,
    "estimatedHours": 4,
    "difficulty": "Advanced",
    "description": "Explore domain-specific software engineering applications: Web, Mobile, Enterprise systems, Cloud-Native, AI Software Engineering (MLOps), and large-scale distributed systems.",
    "subTopics": [
      "Web Application Development",
      "Mobile Application Development",
      "Enterprise Software",
      "Cloud Software Engineering",
      "AI Software Engineering",
      "Large-Scale Software Systems"
    ],
    "prerequisiteTitles": [
      "Software Architecture",
      "DevOps and Software Deployment"
    ],
    "learningObjectives": [
      "Analyze domain application patterns across Web, Mobile, Enterprise, Cloud, and AI systems.",
      "Apply Cloud-Native 12-Factor Application principles to enterprise cloud engineering.",
      "Understand MLOps and SE principles for AI/ML model integration into software systems."
    ],
    "notes": [
      {
        "title": "12-Factor App Methodology & MLOps SE Lifecycle",
        "content": "1. THE 12-FACTOR APP METHODOLOGY FOR CLOUD SOFTWARE:\n1. Codebase: One codebase tracked in revision control, many deploys.\n2. Dependencies: Explicitly declare and isolate dependencies.\n3. Config: Store configuration in the environment (ENV vars).\n4. Backing services: Treat backing resources as attached resources.\n5. Build, release, run: Strictly separate build and run stages.\n6. Processes: Execute the app as one or more stateless processes.\n7. Port binding: Export services via port binding.\n8. Concurrency: Scale out via the process model.\n9. Disposability: Maximize robustness with fast startup and graceful shutdown.\n10. Dev/prod parity: Keep development, staging, and production as similar as possible.\n11. Logs: Treat logs as event streams.\n12. Admin processes: Run admin/management tasks as one-off processes.\n\n2. MLOps SE LIFECYCLE FOR AI SOFTWARE ENGINEERING:\n[ Data Pipeline (E-T-L) ] -> [ Model Training & Validation ] -> [ Model Registry ] -> [ Automated Deployment API ] -> [ Model Drift Monitoring ]"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Designing Data-Intensive Applications",
        "author": "Martin Kleppmann"
      }
    ],
    "practiceLinks": [
      {
        "title": "The Twelve-Factor App Methodology",
        "url": "https://12factor.net/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State 4 key principles of the 12-Factor App methodology. (2 Marks)",
        "What is MLOps and how does it extend DevOps for AI software? (2 Marks)",
        "Differentiate between Cloud-Native and Cloud-Hosted software. (2 Marks)"
      ],
      "sixMarks": [
        "Explain 6 factors of the 12-Factor App methodology for cloud-native web engineering. (6 Marks)",
        "Describe software engineering challenges in Large-Scale Distributed Systems (Latency, Partition Tolerance, Consistency). (6 Marks)"
      ],
      "longAnswer": [
        "Architect an AI-Driven Cloud Enterprise Web Platform. Detail the frontend/backend web architecture, cloud deployment using 12-factor principles, and continuous integration pipeline for machine learning models (MLOps). (10 Marks)"
      ]
    }
  },
  {
    "title": "Software Engineering Projects",
    "slug": "software-engineering-software-engineering-projects",
    "order": 18,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Execute end-to-end capstone engineering deliverables: Requirement Elicitation, SRS Document drafting, UML Modeling, Agile Sprint Execution, Test Plan Creation, and System Documentation.",
    "subTopics": [
      "Requirement Analysis Project",
      "SRS Document Preparation",
      "UML Design Project",
      "Agile Sprint Planning",
      "Testing Plan Creation",
      "Software Project Documentation",
      "Complete Software Development Project"
    ],
    "prerequisiteTitles": [
      "Software Engineering Applications"
    ],
    "learningObjectives": [
      "Synthesize all SE discipline phases into a cohesive Capstone Software Project.",
      "Produce production-grade documentation: SRS, System Architecture Document (SAD), Test Plan, and User Manual.",
      "Execute end-to-end SDLC validation gates from requirements to release deployment."
    ],
    "notes": [
      {
        "title": "End-to-End Software Engineering Project Blueprint & Test Plan",
        "content": "1. CAPSTONE PROJECT BLUEPRINT DELIVERABLES:\n- Phase 1: Requirement Elicitation & SRS Document (IEEE 830 compliant).\n- Phase 2: System Design & UML Artifacts (Class, Use Case, Sequence Diagrams).\n- Phase 3: Project Management Plan (WBS, COCOMO Estimation, RMMM Risk Matrix).\n- Phase 4: Agile Sprint Execution & Codebase Implementation (Git Repo + Unit Tests).\n- Phase 5: Test Execution Plan & Defect Metrics Report.\n- Phase 6: Production CI/CD Deployment & User Documentation.\n\n2. TEST PLAN DOCUMENT TEMPLATE (IEEE 829 STANDARD):\n1. Test Plan Identifier\n2. Introduction & Test Items\n3. Features to be Tested / Not to be Tested\n4. Test Approach & Strategy (Unit, Integration, System, Acceptance)\n5. Item Pass/Fail Criteria\n6. Suspension & Resumption Criteria\n7. Test Deliverables (Test Cases, Logs, Defect Reports)\n8. Environmental Needs (Hardware, Software, Staging DB)\n9. Schedule & Responsibilities\n10. Risks & Contingencies"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Software Engineering: A Practitioner's Approach",
        "author": "Roger S. Pressman"
      }
    ],
    "practiceLinks": [
      {
        "title": "IEEE 829 Software Test Documentation Standard",
        "url": "https://www.geeksforgeeks.org/software-engineering-test-plan/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State the key sections of an IEEE 829 Standard Test Plan. (2 Marks)",
        "List 4 essential documentation deliverables in a Capstone Software Engineering Project. (2 Marks)",
        "What is the final phase of an end-to-end software development project? (2 Marks)"
      ],
      "sixMarks": [
        "Explain the structure of an IEEE 829 Test Plan Document with purpose of each section. (6 Marks)",
        "Detail the complete deliverables required across the 6 phases of a Software Engineering Capstone Project. (6 Marks)"
      ],
      "longAnswer": [
        "Full Capstone Project Simulation: For a Healthcare Patient Management System, provide: 1) System Scope & SRS summary, 2) Complete UML Class & Sequence Diagram, 3) Agile Sprint Backlog & Schedule, 4) IEEE 829 Test Plan & Defect Reporting Matrix. (10 Marks)"
      ]
    }
  }
];
