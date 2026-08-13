module.exports = {
  "name": "Principles of Compiler Design",
  "description": "Understand phases of compiler design: lexical analysis, parsing, syntax-directed translation, code generation, and optimization.",
  "concepts": [
    {
      "title": "Lexical & Syntax Analysis",
      "topics": [
        "Finite Automata & Lex",
        "Context-Free Grammars",
        "LL(1) parsing",
        "LR/LALR parsing techniques"
      ]
    },
    {
      "title": "Semantic Analysis & Intermediate Code",
      "topics": [
        "Syntax-Directed Translation (SDT)",
        "Three-Address Code",
        "Symbol Tables",
        "Type checking"
      ]
    },
    {
      "title": "Code Generation & Optimization",
      "topics": [
        "Basic Blocks & Flow Graphs",
        "Register Allocation",
        "Loop Optimization",
        "Dead Code Elimination"
      ]
    }
  ],
  "youtubeResources": [
    {
      "title": "Gate Smashers – Compiler Design",
      "url": "https://www.youtube.com/playlist?list=PLxCzCOWd7aiEKtKSIHYusizkESC42diyc"
    },
    {
      "title": "Neso Academy – Compiler Design",
      "url": "https://www.youtube.com/playlist?list=PLBlnK6fEyqRjT3oJxFXRgjPNzeS-LFY-q"
    },
    {
      "title": "THE GATEHUB",
      "url": "https://www.youtube.com/playlist?list=PL1QH9gyQXfguPNDTsnG90W2kBDQpYLDQr"
    },
    {
      "title": "Sudhakar Atchala",
      "url": "https://www.youtube.com/playlist?list=PLXj4XH7LcRfC9pGMWuM6UWE3V4YZ9TZzM"
    },
    {
      "title": "NPTEL – Compiler Design",
      "url": "https://nptel.ac.in/courses/106104123"
    }
  ],
  "textbooks": [
    {
      "title": "Compilers: Principles, Techniques, and Tools",
      "author": "Aho, Lam, Sethi & Ullman",
      "url": "https://theswissbay.ch/pdf/Gentoomen%20Library/Programming/Compiler/Aho%20-%20Compilers%20-%20Principles%2C%20Techniques%2C%20and%20Tools%202e.pdf"
    },
    {
      "title": "Engineering a Compiler",
      "author": "Cooper & Torczon",
      "url": "https://books.google.co.in/books?id=4yVQFVvsBNAC&printsec=frontcover#v=onepage&q&f=false"
    },
    {
      "title": "Modern Compiler Implementation in C",
      "author": "Andrew Appel",
      "url": "file:///C:/Users/DELL/Downloads/Modern%20Compiler%20Implementation%20in%20C.pdf"
    }
  ],
  "softwareTools": [
    "Lex/Flex",
    "Yacc/Bison",
    "GCC compiler intermediate output"
  ],
  "practicePlatforms": [
    "GeeksforGeeks",
    "Sanfoundry"
  ],
  "roadmap": {
    "beginner": [
      "Regular expressions",
      "Context-free grammar rules",
      "Role of Lexer"
    ],
    "intermediate": [
      "Top-down parsing algorithms",
      "Bottom-up parsing tables",
      "Syntax-directed definitions"
    ],
    "advanced": [
      "Intermediate code representation",
      "Code optimization algorithms",
      "Register allocation strategies"
    ]
  },
  "questionBank": {
    "sixMarks": [
      "Explain the phases of a compiler with a block diagram.",
      "Construct LL(1) parsing table for a sample grammar."
    ],
    "conceptual": [
      "What is the difference between compiler and interpreter?",
      "Define a left-recursive grammar and show how to remove it."
    ],
    "longAnswer": [
      "Detail the shift-reduce parsing process and trace the conflicts that arise (Shift-Reduce, Reduce-Reduce).",
      "Explain intermediate code generation. Write 3-address code for the statement: x = a + b * c - d."
    ]
  },
  "careerPaths": [
    "Compiler Engineer",
    "Language Designer",
    "Systems Programmer"
  ],
  "difficulty": "Hard"
};
