const dbmsQuizBank = {
  "Introduction to DBMS": {
    title: "Introduction to DBMS Quiz",
    description: "Test your understanding of DBMS fundamentals.",
    duration: 10,
    passingMarks: 40,

    questions: [
      {
        question: "What does DBMS stand for?",
        options: [
          "Database Management System",
          "Data Backup Management System",
          "Digital Base Management System",
          "Data Business Management System",
        ],
        correctAnswer: "Database Management System",
        explanation: "DBMS stands for Database Management System.",
        marks: 1,
      },

      {
        question: "Which of the following is a primary purpose of a DBMS?",
        options: [
          "Managing databases",
          "Compiling programs",
          "Designing web pages",
          "Running operating systems",
        ],
        correctAnswer: "Managing databases",
        explanation: "A DBMS is designed to create, store, retrieve, and manage databases.",
        marks: 1,
      },

      {
        question: "Which model organizes data into tables?",
        options: [
          "Relational Model",
          "Network Model",
          "Hierarchical Model",
          "Object Model",
        ],
        correctAnswer: "Relational Model",
        explanation: "The relational model stores data in tables consisting of rows and columns.",
        marks: 1,
      },

      {
        question: "Which language is commonly used to interact with relational databases?",
        options: [
          "SQL",
          "HTML",
          "CSS",
          "Java",
        ],
        correctAnswer: "SQL",
        explanation: "SQL is the standard language for relational databases.",
        marks: 1,
      },

      {
        question: "What is a database?",
        options: [
          "An organized collection of data",
          "A programming language",
          "A compiler",
          "An operating system",
        ],
        correctAnswer: "An organized collection of data",
        explanation: "A database stores related data in an organized manner.",
        marks: 1,
      },

      {
        question: "Which key uniquely identifies a record?",
        options: [
          "Primary Key",
          "Foreign Key",
          "Candidate Key",
          "Composite Key",
        ],
        correctAnswer: "Primary Key",
        explanation: "A primary key uniquely identifies each row in a table.",
        marks: 1,
      },

      {
        question: "Which of the following is NOT a DBMS?",
        options: [
          "Microsoft Word",
          "MySQL",
          "Oracle",
          "MongoDB",
        ],
        correctAnswer: "Microsoft Word",
        explanation: "Microsoft Word is a word processor, not a DBMS.",
        marks: 1,
      },

      {
        question: "Which database is NoSQL?",
        options: [
          "MongoDB",
          "MySQL",
          "PostgreSQL",
          "Oracle",
        ],
        correctAnswer: "MongoDB",
        explanation: "MongoDB is a document-oriented NoSQL database.",
        marks: 1,
      },

      {
        question: "Which DBMS feature reduces data redundancy?",
        options: [
          "Normalization",
          "Sorting",
          "Indexing",
          "Compilation",
        ],
        correctAnswer: "Normalization",
        explanation: "Normalization minimizes duplicate data.",
        marks: 1,
      },

      {
        question: "How many marks does this quiz carry?",
        options: [
          "10",
          "5",
          "20",
          "15",
        ],
        correctAnswer: "10",
        explanation: "Each of the 10 questions carries 1 mark.",
        marks: 1,
      },
    ],
  },

  "SQL Basics": {
    title: "SQL Basics Quiz",
    description: "Test your SQL fundamentals.",
    duration: 10,
    passingMarks: 40,

    questions: [
      {
        question: "Which SQL statement retrieves data?",
        options: [
          "SELECT",
          "INSERT",
          "UPDATE",
          "DELETE",
        ],
        correctAnswer: "SELECT",
        explanation: "SELECT retrieves records from a table.",
        marks: 1,
      },

      {
        question: "Which clause filters rows?",
        options: [
          "WHERE",
          "ORDER BY",
          "GROUP BY",
          "JOIN",
        ],
        correctAnswer: "WHERE",
        explanation: "WHERE filters rows based on conditions.",
        marks: 1,
      },

      {
        question: "Which SQL command inserts new records?",
        options: [
          "INSERT",
          "UPDATE",
          "DELETE",
          "CREATE",
        ],
        correctAnswer: "INSERT",
        explanation: "INSERT adds new records to a table.",
        marks: 1,
      },

      {
        question: "Which keyword sorts query results?",
        options: [
          "ORDER BY",
          "GROUP BY",
          "HAVING",
          "LIMIT",
        ],
        correctAnswer: "ORDER BY",
        explanation: "ORDER BY sorts the output.",
        marks: 1,
      },

      {
        question: "Which SQL command modifies existing records?",
        options: [
          "UPDATE",
          "INSERT",
          "DELETE",
          "DROP",
        ],
        correctAnswer: "UPDATE",
        explanation: "UPDATE changes existing records.",
        marks: 1,
      },

      {
        question: "Which command removes records?",
        options: [
          "DELETE",
          "INSERT",
          "UPDATE",
          "SELECT",
        ],
        correctAnswer: "DELETE",
        explanation: "DELETE removes rows from a table.",
        marks: 1,
      },

      {
        question: "Which SQL statement creates a new table?",
        options: [
          "CREATE TABLE",
          "INSERT",
          "SELECT",
          "UPDATE",
        ],
        correctAnswer: "CREATE TABLE",
        explanation: "CREATE TABLE creates a new table.",
        marks: 1,
      },

      {
        question: "Which function counts rows?",
        options: [
          "COUNT()",
          "SUM()",
          "AVG()",
          "MAX()",
        ],
        correctAnswer: "COUNT()",
        explanation: "COUNT() returns the number of rows.",
        marks: 1,
      },

      {
        question: "Which clause groups rows?",
        options: [
          "GROUP BY",
          "ORDER BY",
          "WHERE",
          "JOIN",
        ],
        correctAnswer: "GROUP BY",
        explanation: "GROUP BY groups rows having the same values.",
        marks: 1,
      },

      {
        question: "SQL stands for?",
        options: [
          "Structured Query Language",
          "Simple Query Language",
          "Standard Question Language",
          "System Query Logic",
        ],
        correctAnswer: "Structured Query Language",
        explanation: "SQL stands for Structured Query Language.",
        marks: 1,
      },
    ],
  },
};

module.exports = dbmsQuizBank;