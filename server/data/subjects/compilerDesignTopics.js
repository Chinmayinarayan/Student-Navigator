module.exports = [
  {
    "title": "Introduction to Compiler Design",
    "slug": "compiler-introduction-overview",
    "order": 1,
    "estimatedHours": 3,
    "difficulty": "Beginner",
    "description": "Understand compiler fundamentals: Introduction to Compilers and their need, Compiler Applications (language translators, IDEs, database engines), Language Processing Systems (preprocessor → compiler → assembler → linker → loader), Compiler vs Interpreter comparison, Assembler and Linker roles, Seven Phases of Compiler (Lexical Analysis, Syntax Analysis, Semantic Analysis, Intermediate Code Generation, Code Optimization, Code Generation, Symbol Table), and Front End vs Back End architecture.",
    "subTopics": [
      "Introduction to Compilers",
      "Need for Compilers",
      "Compiler Applications",
      "Language Processing Systems",
      "Compiler vs Interpreter",
      "Assembler and Linker",
      "Phases of Compiler",
      "Compiler Design Overview",
      "Front End and Back End of Compiler"
    ],
    "prerequisiteTitles": [],
    "learningObjectives": [
      "Define a compiler as a program that translates source code in one language to target code in another.",
      "Identify the 7 phases of a compiler and classify them into Analysis (Front End) and Synthesis (Back End).",
      "Distinguish Compiler (complete translation before execution) vs Interpreter (line-by-line translation and execution)."
    ],
    "notes": [
      {
        "title": "Compiler Phases Diagram and Compiler vs Interpreter Comparison",
        "content": "INTRODUCTION TO COMPILER DESIGN\n\n1. What is a Compiler?\n   A compiler is a special program that translates source code written in a high-level programming language (e.g., C, Java) into target code (e.g., machine code or assembly language).\n   \n   Formal definition: Compiler: Source Program → [Compiler] → Target Program\n   Error messages are generated if errors are detected during compilation.\n\n2. Language Processing System Pipeline:\n   Source Code (.c)\n      ↓ Preprocessor (handles #include, #define)\n   Modified Source Code\n      ↓ Compiler\n   Assembly Code (.s)\n      ↓ Assembler\n   Object Code (.o)\n      ↓ Linker + Libraries\n   Executable (.exe or ELF)\n      ↓ Loader (loads into memory)\n   Running Program\n\n3. Seven Phases of Compiler:\n   ┌─────────────────────────────────────────────────────────────┐\n   │  Source Program                                             │\n   │  ↓  1. Lexical Analysis (Scanner)     → Token stream       │\n   │  ↓  2. Syntax Analysis (Parser)       → Parse Tree         │\n   │  ↓  3. Semantic Analysis              → Annotated Tree     │\n   │  ↓  4. Intermediate Code Generation  → IR (TAC)           │\n   │  ↓  5. Code Optimization              → Optimized IR       │\n   │  ↓  6. Code Generation                → Target Assembly    │\n   │  ↓  7. Symbol Table (used by all phases)                   │\n   │  Target Program                                             │\n   └─────────────────────────────────────────────────────────────┘\n\n4. Front End vs Back End:\n   - Front End (Analysis Phase): Machine-independent. Phases 1-4.\n     Deals with source language. Produces Intermediate Representation (IR).\n   - Back End (Synthesis Phase): Machine-dependent. Phases 5-6.\n     Deals with target machine. Produces machine code.\n\n5. Compiler vs Interpreter:\n   ┌──────────────────┬─────────────────────────────────┬──────────────────────────────────┐\n   │ Feature          │ Compiler                        │ Interpreter                      │\n   ├──────────────────┼─────────────────────────────────┼──────────────────────────────────┤\n   │ Translation      │ Complete program at once        │ Statement by statement            │\n   │ Execution        │ After full compilation          │ Simultaneous with translation    │\n   │ Speed            │ Faster (pre-compiled)           │ Slower (translates each time)    │\n   │ Error Detection  │ All errors before execution     │ Errors detected at runtime line  │\n   │ Output           │ Object code file                │ No intermediate object file      │\n   │ Examples         │ C, C++, Fortran                 │ Python, Ruby, PHP                │\n   └──────────────────┴─────────────────────────────────┴──────────────────────────────────┘\n\n6. Applications of Compilers:\n   - Programming Language Compilers: GCC (C/C++), javac (Java), clang (LLVM)\n   - Database Query Compilers: SQL → execution plan\n   - Hardware Description Language: VHDL/Verilog compilers\n   - High Performance Computing: Vectorizing compilers for GPUs"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Compilers: Principles, Techniques, and Tools (Dragon Book)",
        "author": "Aho, Lam, Sethi, Ullman"
      },
      {
        "title": "Engineering a Compiler",
        "author": "Cooper, Torczon"
      }
    ],
    "practiceLinks": [
      {
        "title": "Compiler Design GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/compiler-design-tutorials/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define a Compiler. How does it differ from an Interpreter? (2 Marks)",
        "List the 7 phases of a compiler in sequence. (2 Marks)",
        "Distinguish the Front End and Back End of a compiler. (2 Marks)"
      ],
      "sixMarks": [
        "Explain the complete Language Processing System: Preprocessor, Compiler, Assembler, Linker, Loader with diagram showing input/output of each stage. (6 Marks)",
        "Trace the processing of statement 'position = initial + rate * 60;' through all 7 compiler phases showing intermediate outputs. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive compiler design overview: Role of compilers in language processing, complete 7-phase diagram with data flow between phases, front end vs back end analysis, compiler vs interpreter vs assembler comparison, and real-world compiler applications. (10 Marks)"
      ]
    }
  },
  {
    "title": "Compiler Structure and Organization",
    "slug": "compiler-structure-organization",
    "order": 2,
    "estimatedHours": 3,
    "difficulty": "Beginner",
    "description": "Examine compiler organization: Structure of a Compiler (Analysis + Synthesis phases), Analysis Phase components (Lexical, Syntax, Semantic), Synthesis Phase components (IR generation, optimization, code generation), Single-Pass vs Multi-Pass Compilers, Bootstrapping in Compilers (T-diagrams, self-hosting compilers), and Compiler Construction Tools (Lex/Flex, YACC/Bison, ANTLR).",
    "subTopics": [
      "Structure of a Compiler",
      "Analysis Phase",
      "Synthesis Phase",
      "Compiler Passes",
      "Single Pass Compiler",
      "Multi Pass Compiler",
      "Bootstrapping in Compilers",
      "Compiler Construction Tools"
    ],
    "prerequisiteTitles": [
      "Introduction to Compiler Design"
    ],
    "learningObjectives": [
      "Describe Analysis Phase: reads source, breaks into constituents, creates IR and symbol table.",
      "Describe Synthesis Phase: takes IR and symbol table, constructs target program.",
      "Explain bootstrapping: writing a compiler in the language it compiles using T-diagrams."
    ],
    "notes": [
      {
        "title": "Compiler Structure Analysis, Single/Multi-Pass, and Bootstrapping",
        "content": "COMPILER STRUCTURE AND ORGANIZATION\n\n1. Analysis Phase (Front End):\n   - Lexical Analysis: Reads source characters, groups into tokens (lexemes).\n   - Syntax Analysis: Verifies token sequence follows grammar rules. Builds Parse Tree.\n   - Semantic Analysis: Checks type consistency, scope rules. Annotates Parse Tree.\n   All errors detected here. Creates Symbol Table entries.\n\n2. Synthesis Phase (Back End):\n   - Intermediate Code Generation: Translates annotated tree → IR (3-address code, SSA, bytecode).\n   - Code Optimization: Improves IR for speed/size without changing semantics.\n   - Code Generation: Translates IR → target machine code or assembly.\n\n3. Single Pass vs Multi-Pass Compilers:\n   Single Pass: Source code read exactly once. Each statement compiled immediately.\n   - Pro: Fast compilation, less memory. Con: Cannot handle forward references easily.\n   - Example: Turbo Pascal (early version)\n   \n   Multi-Pass: Source code or IR traversed multiple times.\n   - Pass 1: Lexical + Syntax Analysis → Parse Tree\n   - Pass 2: Semantic Analysis → Annotated Tree  \n   - Pass 3: IR Generation → 3-Address Code\n   - Pass 4: Optimization → Optimized IR\n   - Pass 5: Code Generation → Assembly\n   - Pro: Better optimization, handles forward references. Con: More memory.\n\n4. Bootstrapping (T-Diagrams):\n   Goal: Write compiler for language L using language L itself.\n   \n   T-Diagram notation: [Source | Impl | Target] where Impl = implementation language\n   \n   Method 1: Write compiler C1 for subset of L in assembly. Use C1 to compile C2 (full L compiler in L).\n   Method 2: Cross-compile L compiler on machine M1, port to target M2.\n   \n   Example: GCC (GNU Compiler Collection) is written in C and compiles itself.\n\n5. Compiler Construction Tools:\n   - Lex/Flex: Lexical analyzer generator. Input: regular expressions → Output: C code for lexer.\n   - YACC/Bison: Parser generator. Input: CFG grammar in BNF → Output: C code for LALR parser.\n   - ANTLR: ANother Tool for Language Recognition. Generates lexers and parsers for LL(*) grammars.\n   - LLVM: Low Level Virtual Machine. Framework for compiler back ends.\n   \n   Typical Compiler Construction Workflow:\n   grammar.l (Lex rules) → flex → lex.yy.c (lexer)\n   grammar.y (YACC rules) → yacc → y.tab.c (parser)\n   Both compiled with gcc → complete compiler executable"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Compilers: Principles, Techniques, and Tools",
        "author": "Aho, Lam, Sethi, Ullman"
      }
    ],
    "practiceLinks": [
      {
        "title": "Flex and Bison Tutorial",
        "url": "https://www.geeksforgeeks.org/introduction-to-flex-lexical-analyzer-generator/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is the Analysis Phase of a compiler? List its sub-phases. (2 Marks)",
        "Distinguish Single Pass and Multi-Pass Compilers with examples. (2 Marks)",
        "What is Bootstrapping in compilers? Explain with T-diagrams. (2 Marks)"
      ],
      "sixMarks": [
        "Explain the complete structure of a compiler showing Analysis and Synthesis phases. What role does the Symbol Table play across all phases? (6 Marks)",
        "Describe Lex and YACC tools. How are they used together to build a compiler front end? (6 Marks)"
      ],
      "longAnswer": [
        "Compiler organization: Complete structure diagram, analysis phase components (lexer, parser, semantic analyzer), synthesis phase (IR generation, optimization, code generation), comparison of single vs multi-pass compilers with examples, bootstrapping process with T-diagram, and ANTLR vs YACC comparison. (10 Marks)"
      ]
    }
  },
  {
    "title": "Lexical Analysis",
    "slug": "compiler-lexical-analysis",
    "order": 3,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master lexical analysis: Introduction to Lexical Analysis (scanning), Role of Lexical Analyzer (tokenizer), Tokens (keyword, identifier, operator, literal, punctuation), Lexemes (actual character sequences), Patterns (rules describing tokens), Regular Expressions for token specification, Finite Automata (DFA and NFA), Regular Languages, NFA to DFA Conversion (subset construction), Lexical Analyzer Generator (LEX tool), and Error Handling in Lexical Analysis.",
    "subTopics": [
      "Introduction to Lexical Analysis",
      "Role of Lexical Analyzer",
      "Tokens",
      "Lexemes",
      "Patterns",
      "Regular Expressions",
      "Finite Automata",
      "Regular Languages",
      "NFA and DFA",
      "Conversion of NFA to DFA",
      "Lexical Analyzer Generator (LEX)",
      "Error Handling in Lexical Analysis"
    ],
    "prerequisiteTitles": [
      "Compiler Structure and Organization"
    ],
    "learningObjectives": [
      "Differentiate Token (category), Lexeme (matched text), and Pattern (regular expression rule).",
      "Write regular expressions for common token patterns: identifiers [a-zA-Z_][a-zA-Z0-9_]*, integers [0-9]+.",
      "Convert an NFA to equivalent DFA using subset construction algorithm."
    ],
    "notes": [
      {
        "title": "Token Types, Regular Expressions, NFA to DFA Conversion, and LEX Examples",
        "content": "LEXICAL ANALYSIS\n\n1. Token, Lexeme, Pattern:\n   Source: int count = 100;\n   Token: keyword(int), identifier(count), operator(=), integer_literal(100), punctuation(;)\n   Lexeme: \"int\", \"count\", \"=\", \"100\", \";\"\n   Pattern: \n   - keyword: int | float | if | while | return | ...\n   - identifier: [a-zA-Z_][a-zA-Z0-9_]*\n   - integer: [0-9]+\n   - float: [0-9]+\\.[0-9]+\n   - operator: [+\\-*/=<>!]\n   - whitespace: [ \\t\\n]+ (ignored/skipped)\n\n2. Regular Expression Operators:\n   - Concatenation: ab → matches \"ab\"\n   - Alternation: a|b → matches \"a\" or \"b\"  \n   - Kleene star: a* → matches \"\", \"a\", \"aa\", \"aaa\"...\n   - One or more: a+ = aa* → matches \"a\", \"aa\"...\n   - Optional: a? = (a|ε) → matches \"\" or \"a\"\n   - Character class: [a-z] → any lowercase letter\n   - Complement: [^a-z] → any character NOT in [a-z]\n\n3. Finite Automata:\n   DFA (Deterministic Finite Automaton):\n   - For each state and input symbol, exactly one transition.\n   - 5-tuple: (Q, Σ, δ, q0, F)\n     Q = states, Σ = alphabet, δ = transition function, q0 = start, F = accept states.\n   \n   NFA (Nondeterministic Finite Automaton):\n   - Multiple transitions possible for same state+input.\n   - Allows ε-transitions (empty string transitions).\n   - Easier to construct from regex. Less efficient to simulate.\n\n4. NFA to DFA (Subset Construction Algorithm):\n   Create DFA states = subsets of NFA states.\n   \n   Example: NFA for regex (a|b)*abb\n   1. ε-closure(q0) = {q0} → DFA state A = {q0}\n   2. From A: On 'a': ε-closure(δ(q0,a)) → DFA state B\n   3. From A: On 'b': ε-closure(δ(q0,b)) → DFA state C\n   4. Continue until no new states...\n   DFA is complete when all reachable subsets computed.\n\n5. LEX File Structure (.l file):\n   ```\n   /* Declarations */\n   %{\n   #include <stdio.h>\n   #include \"tokens.h\"\n   %}\n   \n   /* Rules */\n   %%\n   \"int\"|\"float\"|\"if\"|\"while\"  { return KEYWORD; }\n   [a-zA-Z_][a-zA-Z0-9_]*      { return IDENTIFIER; }\n   [0-9]+                       { return INTEGER; }\n   [0-9]+\\.[0-9]+              { return FLOAT; }\n   [\\+\\-\\*\\/\\=]            { return OPERATOR; }\n   [ \\t\\n]+                   { /* skip whitespace */ }\n   .                            { printf(\"Error: unknown char %s\\n\", yytext); }\n   %%\n   \n   /* User code */\n   int main() {\n       int tok;\n       while ((tok = yylex()) != 0)\n           printf(\"Token: %d, Lexeme: %s\\n\", tok, yytext);\n       return 0;\n   }\n   // Compile: flex tokens.l && gcc lex.yy.c -lfl -o lexer\n   ```"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Compilers: Principles, Techniques, and Tools",
        "author": "Aho, Lam, Sethi, Ullman"
      }
    ],
    "practiceLinks": [
      {
        "title": "Lexical Analysis Practice - GFG",
        "url": "https://www.geeksforgeeks.org/introduction-of-lexical-analysis/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define Token, Lexeme, and Pattern with examples from a C program. (2 Marks)",
        "What is the difference between NFA and DFA? (2 Marks)",
        "Write regular expressions for: (a) C identifier, (b) Integer constant, (c) Floating point number. (2 Marks)"
      ],
      "sixMarks": [
        "Draw NFA for regular expression (a|b)*abb. Convert it to DFA using subset construction algorithm. (6 Marks)",
        "Write a LEX (.l) program to count lines, words, and characters in an input file. Show compilation and execution steps. (6 Marks)"
      ],
      "longAnswer": [
        "Complete lexical analysis: Role of lexer in compiler, token classification table (keywords, identifiers, literals, operators, punctuation), regular expression for all C token types, construction of DFA from regex using Thompson's construction + subset construction, LEX tool usage, and error recovery in lexical analysis. (10 Marks)"
      ]
    }
  },
  {
    "title": "Syntax Analysis and Parsing",
    "slug": "compiler-syntax-analysis-parsing",
    "order": 4,
    "estimatedHours": 6,
    "difficulty": "Advanced",
    "description": "Master parsing techniques: Introduction to Syntax Analysis, Context Free Grammars (CFG) for language specification, Leftmost and Rightmost Derivations, Parse Trees (concrete syntax trees), Ambiguous Grammars and disambiguation, Top-Down Parsing (recursive descent, predictive), Bottom-Up Parsing (shift-reduce), LL(1) Parsing (FIRST, FOLLOW sets, parsing table), LR Parsing family (SLR, CLR/LR(1), LALR), and YACC/Bison tool for parser generation.",
    "subTopics": [
      "Introduction to Syntax Analysis",
      "Context Free Grammars (CFG)",
      "Leftmost Derivation",
      "Rightmost Derivation",
      "Parse Trees",
      "Ambiguous Grammars",
      "Top-Down Parsing",
      "Bottom-Up Parsing",
      "Recursive Descent Parser",
      "Predictive Parsing",
      "LL(1) Parser",
      "Shift Reduce Parsing",
      "LR Parsing",
      "SLR Parser",
      "CLR Parser",
      "LALR Parser",
      "YACC Tool"
    ],
    "prerequisiteTitles": [
      "Lexical Analysis"
    ],
    "learningObjectives": [
      "Write CFG productions for arithmetic expressions, if-else statements, and function calls.",
      "Compute FIRST and FOLLOW sets for a grammar. Construct LL(1) parsing table.",
      "Explain LR(0), SLR(1), and LALR(1) parsing with items, canonical collections, and parse tables."
    ],
    "notes": [
      {
        "title": "CFG, LL(1) Parsing Table Construction, YACC Example",
        "content": "SYNTAX ANALYSIS AND PARSING\n\n1. Context Free Grammar (CFG):\n   CFG = (V, T, P, S) where:\n   V = set of variables (non-terminals)\n   T = set of terminal symbols (tokens)\n   P = set of production rules\n   S = start symbol\n   \n   Example: Arithmetic Expression Grammar\n   E → E + T | T\n   T → T * F | F\n   F → ( E ) | id | num\n\n2. Derivations:\n   - Leftmost Derivation: Always expand leftmost non-terminal first.\n   - Rightmost Derivation: Always expand rightmost non-terminal first.\n   \n   For E → E+T → T+T → F+T → id+T → id+F → id+id\n   Leftmost: E ⟹lm E+T ⟹lm T+T ⟹lm F+T ⟹lm id+T ⟹lm id+F ⟹lm id+id\n\n3. FIRST and FOLLOW Sets:\n   FIRST(α): Set of terminals that begin strings derivable from α.\n   FOLLOW(A): Set of terminals that can appear immediately right of A.\n   \n   Rules for FIRST:\n   - If X is terminal: FIRST(X) = {X}\n   - If X → ε: add ε to FIRST(X)\n   - If X → Y1Y2...Yk: add FIRST(Y1)-{ε}; if ε in FIRST(Y1), add FIRST(Y2)-{ε}, etc.\n   \n   Example for grammar: E→TE', T→FT', F→(E)|id\n   FIRST(F) = {(, id}\n   FIRST(T) = FIRST(F) = {(, id}\n   FIRST(E) = FIRST(T) = {(, id}\n\n4. LL(1) Parsing Table Construction:\n   For each production A → α:\n   1. For each terminal a in FIRST(α): Add A→α to M[A,a]\n   2. If ε ∈ FIRST(α): For each b in FOLLOW(A): Add A→α to M[A,b]\n   If no conflict → LL(1) grammar.\n\n5. YACC/Bison Grammar Example:\n   ```\n   /* calc.y */\n   %{\n   #include <stdio.h>\n   int yylex();\n   void yyerror(char *s);\n   %}\n   \n   %token NUMBER\n   %left '+' '-'\n   %left '*' '/'\n   \n   %%\n   program: expr '\\n'  { printf(\"Result: %d\\n\", $1); }\n           ;\n   expr:   expr '+' expr  { $$ = $1 + $3; }\n         | expr '-' expr  { $$ = $1 - $3; }\n         | expr '*' expr  { $$ = $1 * $3; }\n         | expr '/' expr  { $$ = $1 / $3; }\n         | NUMBER          { $$ = $1; }\n         | '(' expr ')'    { $$ = $2; }\n         ;\n   %%\n   // Compile: bison -d calc.y && gcc calc.tab.c -o calc -ly\n   ```"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Compilers: Principles, Techniques, and Tools (Dragon Book)",
        "author": "Aho, Lam, Sethi, Ullman"
      }
    ],
    "practiceLinks": [
      {
        "title": "Parsing Algorithms Practice - GFG",
        "url": "https://www.geeksforgeeks.org/parsing-set-1-introduction-ambiguity-and-parsers/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define Context Free Grammar (CFG). Give CFG for arithmetic expressions. (2 Marks)",
        "Distinguish Leftmost and Rightmost derivations with example. (2 Marks)",
        "What makes a grammar ambiguous? How can ambiguity be resolved? (2 Marks)"
      ],
      "sixMarks": [
        "For grammar E→E+T|T, T→T*F|F, F→(E)|id: Compute FIRST and FOLLOW sets. Construct LL(1) parsing table. (6 Marks)",
        "Explain Shift-Reduce parsing. Given grammar S→aABe, A→Abc|b, B→d, parse input 'abbcde' showing stack, input, and actions. (6 Marks)"
      ],
      "longAnswer": [
        "Complete parsing analysis: CFG notation, derivations, parse trees, ambiguity with disambiguation rules, Top-Down parsing (LL(1) with FIRST/FOLLOW computation and parsing table), Bottom-Up parsing (LR(0) items, SLR(1) construction), and comparison of SLR vs LALR vs CLR parsers with power hierarchy. (10 Marks)"
      ]
    }
  },
  {
    "title": "Intermediate Code Generation",
    "slug": "compiler-intermediate-code-generation",
    "order": 5,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Generate intermediate representations: Need for Intermediate Representation (IR) (portability, optimization), Types of IR (High-level IR, Low-level IR), Three Address Code (TAC) notation, Quadruples (4-field: op, arg1, arg2, result), Triples (3-field, implicit result), Indirect Triples (for code movement), Syntax Directed Translation (SDT) and Syntax Directed Definitions (SDD), Type Checking in semantic analysis, and IR generation for arithmetic expressions, assignments, and control flow.",
    "subTopics": [
      "Need for Intermediate Representation",
      "Types of Intermediate Code",
      "Three Address Code",
      "Quadruples",
      "Triples",
      "Indirect Triples",
      "Syntax Directed Translation",
      "Syntax Directed Definitions",
      "Type Checking",
      "Intermediate Code Generation for Expressions"
    ],
    "prerequisiteTitles": [
      "Syntax Analysis and Parsing"
    ],
    "learningObjectives": [
      "Generate Three Address Code (TAC) for arithmetic expressions, assignment statements, and if-else control flow.",
      "Represent TAC as Quadruples (op, arg1, arg2, result) and Triples (op, arg1, arg2).",
      "Apply Syntax Directed Translation (SDT) to translate parse tree nodes into TAC."
    ],
    "notes": [
      {
        "title": "Three Address Code Generation Examples and Quadruple/Triple Representation",
        "content": "INTERMEDIATE CODE GENERATION\n\n1. Need for Intermediate Representation:\n   Source Code → IR → Target Code\n   Benefits:\n   - Portability: Same IR used for different target machines.\n   - Optimization: Machine-independent optimizations on IR.\n   - Retargetability: New back end for new machine, same front end.\n   \n   Popular IR formats: Three Address Code (TAC), SSA (Static Single Assignment), LLVM IR, JVM bytecode.\n\n2. Three Address Code (TAC):\n   General form: result = arg1 op arg2 (at most 3 addresses per instruction)\n   \n   TAC statement types:\n   x = y op z       (binary operation)\n   x = op y          (unary operation)\n   x = y             (copy)\n   goto L            (unconditional jump)\n   if x goto L       (conditional jump)\n   param x           (parameter passing)\n   call p, n         (function call with n params)\n   x = call p, n     (call with return value)\n   x = y[i]          (array read)\n   x[i] = y          (array write)\n   x = &y, x = *y, *x = y  (pointer operations)\n\n3. TAC for Expression a = b + c * d:\n   t1 = c * d\n   t2 = b + t1\n   a  = t2\n\n4. TAC for if-else:\n   Source: if (a < b) x = a + b; else x = a - b;\n   TAC:\n   t1 = a < b\n   if t1 goto L1\n   t2 = a - b\n   x = t2\n   goto L2\n   L1: t3 = a + b\n       x = t3\n   L2: (continue)\n\n5. Quadruples vs Triples:\n   Expression: a = b + c * d\n   \n   Three Address Code:\n   t1 = c * d\n   t2 = b + t1\n   a  = t2\n   \n   Quadruples (op, arg1, arg2, result):\n   [0] (*, c, d, t1)\n   [1] (+, b, t1, t2)\n   [2] (=, t2, _, a)\n   \n   Triples (op, arg1, arg2) - result is implicit triple number:\n   [0] (*, c, d)       → result is (0)\n   [1] (+, b, (0))     → result is (1)  \n   [2] (=, a, (1))\n   \n   Indirect Triples: Separate array of pointers to triples.\n   Allows easy rearrangement of code without changing triple indices.\n\n6. Type Checking:\n   Static Type Checking (at compile time):\n   - Type rules: operator types must match operand types.\n   - Type coercion: int + float → float (widening conversion).\n   - Type errors: int + array → type error.\n   \n   Example semantic action for type checking:\n   E → E1 + E2 {\n     if E1.type == int && E2.type == int then E.type = int\n     else if E1.type == float || E2.type == float then\n       insert type conversion instruction; E.type = float\n     else error(\"Type mismatch\");\n   }"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Compilers: Principles, Techniques, and Tools",
        "author": "Aho, Lam, Sethi, Ullman"
      }
    ],
    "practiceLinks": [
      {
        "title": "IR Generation Practice",
        "url": "https://www.geeksforgeeks.org/intermediate-code-generation-in-compiler-design/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Why is Intermediate Representation (IR) used in compilers? (2 Marks)",
        "What is Three Address Code? Give an example. (2 Marks)",
        "Distinguish Quadruples and Triples as IR representations. (2 Marks)"
      ],
      "sixMarks": [
        "Generate Three Address Code and Quadruple representation for expression: x = (a+b) * (c-d) / (e+f). (6 Marks)",
        "Generate TAC for the following: for(i=0; i<n; i++) a[i] = b[i] + c. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive IR generation: Types of IR (HIR, MIR, LIR), TAC generation for expressions, assignments, if-else-while control structures (with goto labels), function calls, and array accesses. Represent same IR as Quadruples and Indirect Triples. Discuss type checking with coercion rules. (10 Marks)"
      ]
    }
  },
  {
    "title": "Runtime Environment",
    "slug": "compiler-runtime-environment",
    "order": 6,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Understand runtime memory: Introduction to Runtime Environment, Memory Organization (code, data, stack, heap segments), Storage Allocation Strategies (Static for globals, Stack for local variables, Heap for dynamic allocation), Activation Records (stack frames: return address, local variables, parameters, saved registers), Parameter Passing Methods (call-by-value, call-by-reference, call-by-copy-restore), Scope Management, and Symbol Table management.",
    "subTopics": [
      "Introduction to Runtime Environment",
      "Memory Organization",
      "Static Allocation",
      "Stack Allocation",
      "Heap Allocation",
      "Activation Records",
      "Parameter Passing Methods",
      "Scope Management",
      "Symbol Table Management"
    ],
    "prerequisiteTitles": [
      "Intermediate Code Generation"
    ],
    "learningObjectives": [
      "Draw runtime memory layout: Code segment, Static/Global data, Stack (grows downward), Heap (grows upward).",
      "Describe Activation Record fields: Return address, Control link, Access link, Actual parameters, Local variables, Temporaries.",
      "Differentiate Call-by-Value (copy of argument), Call-by-Reference (address of argument)."
    ],
    "notes": [
      {
        "title": "Runtime Memory Layout and Activation Record Stack Example",
        "content": "RUNTIME ENVIRONMENT\n\n1. Runtime Memory Layout:\n   ┌─────────────────────────────────────┐  High Address\n   │           Stack                     │  (Activation records, grows ↓)\n   │         ↓ grows downward            │\n   ├─────────────────────────────────────┤\n   │         (free space)                │\n   ├─────────────────────────────────────┤\n   │         ↑ grows upward              │\n   │           Heap                      │  (Dynamic allocation: malloc/new)\n   ├─────────────────────────────────────┤\n   │     Static/Global Data Segment      │  (Global vars, static vars)\n   ├─────────────────────────────────────┤\n   │       BSS (Uninitialized data)      │  (Uninitialized globals, zero-filled)\n   ├─────────────────────────────────────┤\n   │         Code (Text) Segment         │  (Program instructions, read-only)\n   └─────────────────────────────────────┘  Low Address (0x0)\n\n2. Storage Allocation Strategies:\n   a) Static Allocation: Memory allocated at compile time.\n      - Global variables, static local variables.\n      - No recursion needed. Fixed size known at compile time.\n      \n   b) Stack Allocation: Memory allocated/deallocated with function calls.\n      - Local variables, formal parameters, return address.\n      - Last In First Out (LIFO) structure.\n      - Supports recursion naturally.\n      \n   c) Heap Allocation: Memory allocated/deallocated at runtime by programmer.\n      - malloc()/free() in C, new/delete in C++.\n      - Flexible but requires memory management.\n\n3. Activation Record (Stack Frame) Structure:\n   ┌─────────────────────────────┐\n   │ Return Value                │  (result of function)\n   ├─────────────────────────────┤\n   │ Actual Parameters           │  (arguments passed by caller)\n   ├─────────────────────────────┤\n   │ Control Link (Dynamic Link) │  (frame pointer of calling procedure)\n   ├─────────────────────────────┤\n   │ Access Link (Static Link)   │  (for nested function scope access)\n   ├─────────────────────────────┤\n   │ Machine Status              │  (saved registers, program counter)\n   ├─────────────────────────────┤\n   │ Local Variables             │  (local variables of procedure)\n   ├─────────────────────────────┤\n   │ Temporaries                 │  (compiler-generated temp values)\n   └─────────────────────────────┘\n   \n   Frame Pointer (FP): Points to fixed location in current activation record.\n   Stack Pointer (SP): Points to top of stack.\n\n4. Parameter Passing Methods:\n   Call-by-Value: Copy of argument passed. Changes to formal don't affect actual.\n   ```c\n   void swap(int a, int b) { int t=a; a=b; b=t; }  // Doesn't swap!\n   ```\n   \n   Call-by-Reference: Address of argument passed. Changes affect original.\n   ```c\n   void swap(int *a, int *b) { int t=*a; *a=*b; *b=t; }  // Works!\n   ```\n   \n   Call-by-Name (Jensen's device): Textual substitution at call site. Used in ALGOL."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Compilers: Principles, Techniques, and Tools",
        "author": "Aho, Lam, Sethi, Ullman"
      }
    ],
    "practiceLinks": [
      {
        "title": "Runtime Environment Compiler GFG",
        "url": "https://www.geeksforgeeks.org/runtime-environment-in-compiler-design/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Draw the runtime memory organization for a C program showing Code, Data, Stack, and Heap segments. (2 Marks)",
        "What is an Activation Record? List its fields. (2 Marks)",
        "Distinguish Call-by-Value and Call-by-Reference with C code examples. (2 Marks)"
      ],
      "sixMarks": [
        "Draw the activation record stack for recursive factorial function fact(3). Show all stack frames at their deepest point. (6 Marks)",
        "Compare Static, Stack, and Heap allocation strategies. When is each used? What are the limitations of each? (6 Marks)"
      ],
      "longAnswer": [
        "Runtime environment comprehensive analysis: Memory segments layout (code, BSS, static, heap, stack), activation record detailed structure, dynamic link vs static link (access link) for nested scopes, parameter passing methods (value, reference, copy-restore, name), heap management (free lists, fragmentation), and stack overflow scenarios. (10 Marks)"
      ]
    }
  },
  {
    "title": "Symbol Table Management",
    "slug": "compiler-symbol-table",
    "order": 7,
    "estimatedHours": 3,
    "difficulty": "Intermediate",
    "description": "Manage compiler symbol tables: Introduction to Symbol Tables (store identifier information), Symbol Table Organization (flat, hierarchical/nested scopes), Symbol Table Operations (insert, lookup, delete), Data Structures for Symbol Tables (linear list, binary search tree, hash tables), Hash Table implementation with open addressing and chaining, Scope Handling (scope stack for nested scopes), and Identifier attribute management.",
    "subTopics": [
      "Introduction to Symbol Tables",
      "Symbol Table Organization",
      "Symbol Table Operations",
      "Data Structures for Symbol Tables",
      "Hash Tables",
      "Scope Handling",
      "Identifier Management"
    ],
    "prerequisiteTitles": [
      "Compiler Structure and Organization"
    ],
    "learningObjectives": [
      "Define Symbol Table as data structure mapping identifier names to their attributes (type, scope, memory location).",
      "Implement symbol table using hash table with chaining for O(1) average lookup.",
      "Handle nested scopes using a scope stack: push scope on { and pop scope on }."
    ],
    "notes": [
      {
        "title": "Symbol Table Hash Implementation and Scope Stack",
        "content": "SYMBOL TABLE MANAGEMENT\n\n1. Symbol Table Purpose:\n   Stores information about identifiers declared in a program:\n   - Variable: name, type, scope, memory location, initial value\n   - Function: name, return type, parameter types and count, defined/declared\n   - Type: name, structure (struct fields, enum values)\n\n2. Symbol Table Attributes:\n   Entry format: (name, type, scope_level, offset, size, attributes)\n   \n   Example for C program:\n   int x = 5;         → (x, int, global, 0, 4, initialized=5)\n   float arr[10];      → (arr, float[], global, 4, 40, array_size=10)\n   void func(int n);  → (func, void, global, -, -, params=[int])\n\n3. Data Structures Comparison:\n   ┌─────────────────┬──────────────────────┬──────────────────────┐\n   │ Structure       │ Lookup Time          │ Suitable For         │\n   ├─────────────────┼──────────────────────┼──────────────────────┤\n   │ Linear List     │ O(n) linear scan     │ Small programs       │\n   │ BST             │ O(log n) average     │ Sorted identifiers   │\n   │ Hash Table      │ O(1) average         │ Large programs       │\n   └─────────────────┴──────────────────────┴──────────────────────┘\n\n4. Hash Table Implementation (Chaining):\n   ```c\n   #define TABLE_SIZE 101\n   typedef struct Entry { char name[64]; int type; int scope; struct Entry *next; } Entry;\n   Entry *table[TABLE_SIZE];\n   \n   unsigned hash(char *name) {\n       unsigned h = 0;\n       while (*name) h = h*31 + *name++;\n       return h % TABLE_SIZE;\n   }\n   \n   void insert(char *name, int type, int scope) {\n       unsigned h = hash(name);\n       Entry *e = malloc(sizeof(Entry));\n       strcpy(e->name, name); e->type = type; e->scope = scope;\n       e->next = table[h];\n       table[h] = e;  // Add at front of chain\n   }\n   \n   Entry* lookup(char *name, int scope) {\n       for (Entry *e = table[hash(name)]; e; e = e->next)\n           if (!strcmp(e->name, name) && e->scope == scope) return e;\n       return NULL;\n   }\n   ```\n\n5. Scope Handling (Scope Stack):\n   When entering a new scope { → push new symbol table.\n   When leaving scope } → pop symbol table (destroy local symbols).\n   \n   ```c\n   // int x = 1;          // scope level 0 (global)\n   // {\n   //   int y = 2;        // scope level 1\n   //   {\n   //     int z = 3;      // scope level 2\n   //     // All of x, y, z visible here\n   //   }\n   //   // Only x, y visible here\n   // }\n   // // Only x visible here\n   ```\n   \n   Lookup traverses scope stack from current to global (inner→outer)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Compilers: Principles, Techniques, and Tools",
        "author": "Aho, Lam, Sethi, Ullman"
      }
    ],
    "practiceLinks": [
      {
        "title": "Symbol Table Implementation GFG",
        "url": "https://www.geeksforgeeks.org/symbol-table-compiler/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is a Symbol Table? List the attributes stored for each identifier. (2 Marks)",
        "Why is Hash Table preferred over Linear List for symbol table? (2 Marks)",
        "How does a compiler handle nested scopes in symbol table? (2 Marks)"
      ],
      "sixMarks": [
        "Implement a symbol table using hash table with chaining. Show insert() and lookup() operations with C code. Analyze time complexity. (6 Marks)",
        "Explain scope handling using scope stack. Trace the symbol table state for a C function with nested blocks. (6 Marks)"
      ],
      "longAnswer": [
        "Symbol table comprehensive design: Purpose and role in all compiler phases, entry attributes (variables, functions, types), comparison of data structures (list, BST, hash), hash function design for identifiers, collision resolution (chaining vs open addressing), nested scope management with scope stack, and symbol table integration with parser using semantic actions. (10 Marks)"
      ]
    }
  },
  {
    "title": "Code Optimization",
    "slug": "compiler-code-optimization",
    "order": 8,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Optimize compiler output: Introduction to Code Optimization (improve execution speed and reduce code size), Machine-Independent Optimization (on IR), Machine-Dependent Optimization (target architecture specific), Local Optimization (within basic blocks), Global Optimization (across basic blocks), Loop Optimization techniques, Constant Folding (evaluate constant expressions at compile time), Constant Propagation, Dead Code Elimination, Common Subexpression Elimination (CSE), and Strength Reduction.",
    "subTopics": [
      "Introduction to Code Optimization",
      "Importance of Optimization",
      "Machine Independent Optimization",
      "Machine Dependent Optimization",
      "Local Optimization",
      "Global Optimization",
      "Loop Optimization",
      "Constant Folding",
      "Constant Propagation",
      "Dead Code Elimination",
      "Common Subexpression Elimination",
      "Strength Reduction"
    ],
    "prerequisiteTitles": [
      "Intermediate Code Generation"
    ],
    "learningObjectives": [
      "Apply Constant Folding: evaluate 3+4 → 7 at compile time.",
      "Apply Common Subexpression Elimination: compute a+b once and reuse.",
      "Apply Dead Code Elimination: remove unreachable code and unused assignments.",
      "Apply Loop Optimization: code motion (move loop-invariant code outside loop)."
    ],
    "notes": [
      {
        "title": "Code Optimization Techniques with Before/After TAC Examples",
        "content": "CODE OPTIMIZATION\n\n1. Optimization Goals:\n   - Reduce execution time (speed optimization).\n   - Reduce code size (space optimization).\n   - Reduce energy/power consumption.\n   Must preserve program semantics (same output as unoptimized program).\n\n2. Basic Block:\n   A maximal sequence of consecutive statements with:\n   - Control enters only at beginning.\n   - Control leaves only at end (or falls through).\n   \n   Local optimization applies within one basic block.\n   Global optimization applies across multiple basic blocks.\n\n3. Constant Folding:\n   Evaluate constant expressions at compile time.\n   Before: x = 3 + 4      After: x = 7\n   Before: y = 2 * 3.14   After: y = 6.28\n   Before: if (3 > 4) ...  After: (remove branch, always false)\n\n4. Constant Propagation:\n   Replace variable with its known constant value.\n   Before:           After:\n   x = 5             x = 5\n   y = x + 3        y = 5 + 3 = 8\n   z = y * 2        z = 8 * 2 = 16\n   \n5. Common Subexpression Elimination (CSE):\n   Avoid recomputing same expression.\n   Before:                    After:\n   t1 = a + b                 t1 = a + b\n   t2 = c * d                 t2 = c * d\n   t3 = a + b   ← repeated   t3 = t1   ← reuse!\n   t4 = t3 * e               t4 = t1 * e\n   \n6. Dead Code Elimination:\n   Remove code that can never be executed or whose result is never used.\n   Before:                    After:\n   x = 5                     x = 5\n   x = 10                    x = 10   ← first assignment dead\n   print(x)                  print(x)\n   \n   Before:                    After:\n   if (false) { doSomething; }   (remove entire block)\n\n7. Loop Optimization (Code Motion):\n   Move loop-invariant computation outside loop.\n   Before:                    After:\n   for (i=0; i<n; i++) {      t = b + c;      ← moved out!\n     a[i] = b + c;           for (i=0; i<n; i++) {\n   }                             a[i] = t;\n                              }\n\n8. Strength Reduction:\n   Replace expensive operation with cheaper equivalent.\n   Before: x = y * 2         After: x = y + y  (or x = y << 1)\n   Before: x = y ** 2        After: x = y * y\n   \n   Loop Strength Reduction:\n   Before:                    After:\n   for (i=0; i<n; i++) {     t = 0;\n     a[i] = 4 * i;           for (i=0; i<n; i++) {\n   }                            a[i] = t;\n                               t = t + 4;\n                              }"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Compilers: Principles, Techniques, and Tools",
        "author": "Aho, Lam, Sethi, Ullman"
      }
    ],
    "practiceLinks": [
      {
        "title": "Code Optimization Techniques GFG",
        "url": "https://www.geeksforgeeks.org/code-optimization-in-compiler-design/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is Code Optimization? What are its goals? (2 Marks)",
        "Define Constant Folding and Dead Code Elimination with examples. (2 Marks)",
        "Explain Common Subexpression Elimination with a TAC example. (2 Marks)"
      ],
      "sixMarks": [
        "Apply Constant Propagation, CSE, and Dead Code Elimination to the following TAC sequence: a=2, b=3, c=a+b, d=a+b, e=c*d, f=4+5. (6 Marks)",
        "Explain Loop Optimization techniques: Code Motion, Strength Reduction, and Induction Variable Elimination with examples. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive code optimization study: Classification (local vs global, machine-independent vs machine-dependent), all optimization techniques (constant folding, constant propagation, CSE, dead code elimination, loop invariant code motion, strength reduction, copy propagation) with before/after TAC examples, peephole optimization for target code, and impact of optimizations on runtime performance. (10 Marks)"
      ]
    }
  },
  {
    "title": "Code Generation",
    "slug": "compiler-code-generation",
    "order": 9,
    "estimatedHours": 4,
    "difficulty": "Advanced",
    "description": "Generate target machine code: Introduction to Code Generation, Target Language (assembly, machine code) selection, Instruction Selection (mapping IR to target instructions), Register Allocation (assign values to limited CPU registers), Register Assignment (graph coloring for register allocation), Code Generation Algorithms (NOLTIS, sethi-ullman numbering), Machine Code Generation, and Code Generation Challenges (memory hierarchy, addressing modes).",
    "subTopics": [
      "Introduction to Code Generation",
      "Target Language Selection",
      "Instruction Selection",
      "Register Allocation",
      "Register Assignment",
      "Code Generation Algorithms",
      "Machine Code Generation",
      "Code Generation Challenges"
    ],
    "prerequisiteTitles": [
      "Code Optimization"
    ],
    "learningObjectives": [
      "Translate Three Address Code into assembly language instructions for a simple target machine.",
      "Apply graph coloring algorithm for register allocation: interference graph, k-colorability.",
      "Explain peephole optimization for cleaning up generated assembly code."
    ],
    "notes": [
      {
        "title": "TAC to Assembly Translation and Register Allocation",
        "content": "CODE GENERATION\n\n1. Code Generation Tasks:\n   - Instruction Selection: Choose correct target instructions for each IR operation.\n   - Register Allocation: Determine which values to keep in registers vs memory.\n   - Instruction Ordering: Order instructions to minimize stalls and improve pipeline.\n\n2. Simple Target Machine Model:\n   Assume: registers R0, R1, R2, R3 (general purpose)\n   Instructions: MOV Ri, addr (load), MOV addr, Ri (store), ADD Ri, Rj, addr, etc.\n\n3. TAC to Assembly Translation:\n   TAC: t = a + b * c\n   Three Address Code:  \n   t1 = b * c\n   t = a + t1\n   \n   Assembly (x86 AT&T syntax):\n   movl b(%rip), %eax     # Load b into eax (=R_t1_arg1)\n   imull c(%rip), %eax    # eax = b * c  (t1)\n   addl  a(%rip), %eax    # eax = a + t1 (t)\n   movl  %eax, t(%rip)    # Store result\n\n4. Register Allocation (Graph Coloring):\n   a) Build Interference Graph: variables that are simultaneously live = edge between them.\n   b) K-Color the graph with K = number of available registers.\n   c) If K-colorable: assign register colors to variables.\n   d) If NOT K-colorable: spill some variable to memory (load/store instructions).\n   \n   Example:\n   Variables: a, b, c, t1, t2\n   If a and b interfere → cannot share same register.\n   Color graph with 4 colors (4 registers) → assign colors = register names.\n\n5. Peephole Optimization:\n   Clean up generated code by examining small windows (2-4 instructions).\n   \n   Redundant Load/Store Elimination:\n   MOV R1, a    # Store\n   MOV a, R1    # Load immediately → REMOVE second instruction\n   \n   Algebraic Simplification:\n   ADD R1, 0    # a + 0 = a → REMOVE\n   MUL R1, 1    # a * 1 = a → REMOVE\n   \n   Branch Optimization:\n   JMP L1       # Jump to L1\n   L1: JMP L2   # L1 immediately jumps to L2\n   → Optimize to: JMP L2"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Compilers: Principles, Techniques, and Tools",
        "author": "Aho, Lam, Sethi, Ullman"
      }
    ],
    "practiceLinks": [
      {
        "title": "Code Generation Compiler GFG",
        "url": "https://www.geeksforgeeks.org/code-generation-in-compiler-design/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What are the three main tasks of a Code Generator? (2 Marks)",
        "What is Register Allocation? Why is it important in code generation? (2 Marks)",
        "Explain Peephole Optimization with 3 example transformations. (2 Marks)"
      ],
      "sixMarks": [
        "Translate the Three Address Code for expression a = b*c + b*d into assembly instructions for a simple target machine. Apply peephole optimization if possible. (6 Marks)",
        "Explain register allocation using graph coloring. How are spills handled when there are not enough registers? (6 Marks)"
      ],
      "longAnswer": [
        "Code generation comprehensive analysis: Instruction selection (pattern matching IR to target templates), simple code generation algorithm with Next-Use information, register descriptor and address descriptor tables, graph coloring register allocation (interference graph construction, spilling strategy), and peephole optimization window techniques with examples. (10 Marks)"
      ]
    }
  },
  {
    "title": "Error Handling in Compilers",
    "slug": "compiler-error-handling",
    "order": 10,
    "estimatedHours": 3,
    "difficulty": "Intermediate",
    "description": "Handle compiler errors: Introduction to Compiler Errors, Types of Errors (Lexical: invalid character; Syntax: missing semicolon; Semantic: type mismatch; Runtime: division by zero), Error Detection mechanisms, Error Reporting (precise location, meaningful messages), and Error Recovery Techniques (Panic Mode, Phrase-Level Recovery, Error Productions, Global Correction).",
    "subTopics": [
      "Introduction to Compiler Errors",
      "Lexical Errors",
      "Syntax Errors",
      "Semantic Errors",
      "Runtime Errors",
      "Error Detection",
      "Error Reporting",
      "Error Recovery Techniques"
    ],
    "prerequisiteTitles": [
      "Syntax Analysis and Parsing",
      "Lexical Analysis"
    ],
    "learningObjectives": [
      "Classify compiler errors into Lexical, Syntax, Semantic, and Runtime categories with examples.",
      "Describe Panic Mode error recovery: discard tokens until synchronizing token (;, }) found.",
      "Implement Error Productions: augment grammar with rules for common syntactic errors."
    ],
    "notes": [
      {
        "title": "Error Types, Error Recovery Techniques, and Error Message Design",
        "content": "ERROR HANDLING IN COMPILERS\n\n1. Types of Errors:\n   ┌──────────────────┬────────────────────────────────────────────────────┐\n   │ Error Type       │ Example                                            │\n   ├──────────────────┼────────────────────────────────────────────────────┤\n   │ Lexical Errors   │ Invalid character: @ in C program                  │\n   │                  │ Unterminated string: \"hello without closing \"       │\n   │                  │ Invalid number: 0b2 (binary digit 2 is invalid)    │\n   ├──────────────────┼────────────────────────────────────────────────────┤\n   │ Syntax Errors    │ Missing semicolon: int x = 5                       │\n   │                  │ Mismatched parentheses: (a + b)                    │\n   │                  │ Missing closing brace                              │\n   ├──────────────────┼────────────────────────────────────────────────────┤\n   │ Semantic Errors  │ Type mismatch: int x = \"hello\";                    │\n   │                  │ Undeclared variable: x = 5; (without declaration)  │\n   │                  │ Function argument count mismatch                   │\n   ├──────────────────┼────────────────────────────────────────────────────┤\n   │ Runtime Errors   │ Division by zero: int x = a/0;                     │\n   │                  │ Array out of bounds: arr[100] with size 10         │\n   │                  │ Null pointer dereference                           │\n   └──────────────────┴────────────────────────────────────────────────────┘\n\n2. Error Recovery Techniques:\n\n   a) Panic Mode Recovery:\n      - Most common, simple technique.\n      - On error: discard input tokens one by one until a synchronizing token found.\n      - Synchronizing tokens: ; } ) end\n      - Pro: Simple. Con: Large portions of input may be skipped without further checks.\n   \n   b) Phrase-Level Recovery:\n      - On error: perform local correction (insert/delete/replace tokens).\n      - Example: missing semicolon → insert it automatically.\n      - Risk: Incorrect assumptions may cascade more errors.\n   \n   c) Error Productions:\n      - Augment grammar with rules for known common errors.\n      - Example: Add rule for \"if without then\" as error production.\n      - Pro: Specific meaningful error messages.\n   \n   d) Global Correction (Least Error Correction):\n      - Find the minimum set of insertions/deletions to make input valid.\n      - Theoretically optimal but computationally expensive.\n\n3. Good Error Message Design:\n   - Report exact line number and column: \"error: line 15, col 8\"\n   - State what was found vs what was expected: \"expected ';' found ')'\"\n   - Context information: which function/scope the error is in\n   - Suggest fixes when possible\n   \n   Bad: \"Error on line 15\"\n   Good: \"error: 'x' undeclared (first use in this function) | note: each undeclared identifier is reported only once\"\n\n4. Error Recovery in Recursive Descent Parsers:\n   ```c\n   void stmt() {\n     if (current_token == IF_TOK) {\n         match(IF_TOK);\n         expr();\n         if (current_token != THEN_TOK) {\n             error(\"Expected THEN after condition\");\n             // Error recovery: try to find THEN or synchronize\n             while (current_token != THEN_TOK && current_token != END_OF_INPUT)\n                 advance();\n         }\n         match(THEN_TOK);\n         stmt();\n     }\n   }\n   ```"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Compilers: Principles, Techniques, and Tools",
        "author": "Aho, Lam, Sethi, Ullman"
      }
    ],
    "practiceLinks": [
      {
        "title": "Error Handling in Compilers GFG",
        "url": "https://www.geeksforgeeks.org/error-recovery-strategies-in-compiler-design/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Classify compiler errors into four categories with one example each. (2 Marks)",
        "What is Panic Mode error recovery? What are synchronizing tokens? (2 Marks)",
        "Why is good error reporting important? What should a good error message contain? (2 Marks)"
      ],
      "sixMarks": [
        "Compare four error recovery techniques: Panic Mode, Phrase-Level, Error Productions, and Global Correction. State advantages and limitations of each. (6 Marks)",
        "Explain how semantic errors are detected and reported. Give examples of 5 different semantic errors in C programs. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive compiler error handling: Classification of all error types (lexical, syntax, semantic, runtime, logic) with examples, error detection mechanisms in each compiler phase, error reporting design principles, all four recovery techniques with detailed examples, implementation of panic mode recovery in recursive descent parser, and best practices for user-friendly compiler error messages. (10 Marks)"
      ]
    }
  },
  {
    "title": "Programming Language Concepts",
    "slug": "compiler-programming-language-concepts",
    "order": 11,
    "estimatedHours": 3,
    "difficulty": "Beginner",
    "description": "Understand language fundamentals: Programming Language Paradigms (Imperative, Declarative, Functional, Object-Oriented, Logic), Language Syntax (grammar, BNF notation) and Semantics (meaning of programs), Data Types (primitive, composite, user-defined), Variables and Constants (scope, lifetime, binding), Control Structures (sequential, selection, iteration, subprogram), Functions and Procedures (call mechanisms), and Object-Oriented Language Features (classes, inheritance, polymorphism).",
    "subTopics": [
      "Programming Language Paradigms",
      "Language Syntax and Semantics",
      "Data Types",
      "Variables and Constants",
      "Control Structures",
      "Functions and Procedures",
      "Object-Oriented Language Features"
    ],
    "prerequisiteTitles": [
      "Introduction to Compiler Design"
    ],
    "learningObjectives": [
      "Classify programming paradigms: Imperative (C), Functional (Haskell), OOP (Java), Logic (Prolog).",
      "Distinguish Syntax (form of programs) and Semantics (meaning of programs).",
      "Explain variable attributes: name, type, value, scope, lifetime, l-value, r-value."
    ],
    "notes": [
      {
        "title": "Language Paradigms, BNF Grammar Notation, and Data Types",
        "content": "PROGRAMMING LANGUAGE CONCEPTS\n\n1. Programming Language Paradigms:\n   - Imperative: Describe HOW to do computation. Explicit state changes. C, Pascal, FORTRAN.\n   - Object-Oriented: Organize code into objects with state and behavior. Java, C++, Python.\n   - Functional: Computation via function application. No side effects. Haskell, ML, Lisp.\n   - Logic: State facts and rules; compute by inference. Prolog.\n   - Declarative: State WHAT to compute, not how. SQL, HTML.\n   - Scripting: Interpreted, dynamic typing. Python, JavaScript, Ruby.\n\n2. BNF (Backus-Naur Form) Grammar Notation:\n   <symbol> ::= production\n   \n   Example BNF for simple expressions:\n   <expr>   ::= <expr> '+' <term> | <term>\n   <term>   ::= <term> '*' <factor> | <factor>\n   <factor> ::= '(' <expr> ')' | NUMBER | IDENTIFIER\n   \n   EBNF (Extended BNF) additions:\n   { α } → zero or more repetitions of α\n   [ α ] → optional α (zero or one)\n   ( α | β ) → alternation\n\n3. Data Types:\n   - Primitive: int, float, char, bool, double\n   - Composite/Aggregate: arrays, records (structs), strings\n   - User-Defined: typedef, enum, struct in C; class in C++/Java\n   - Pointer types: int*, void*\n   - Type Equivalence: Structural (same structure) vs Name Equivalence (same name declared)\n\n4. Variable Attributes:\n   - Name: identifier string\n   - Type: determines range and operations\n   - Value: content (r-value in right side of assignment)\n   - Address: memory location (l-value in left side of assignment)\n   - Scope: region where variable is accessible (lexical/dynamic)\n   - Lifetime: period during which variable has storage\n\n5. Scope Rules:\n   - Static (Lexical) Scope: Scope determined at compile time from program text. C, Java, Python.\n   - Dynamic Scope: Scope determined at runtime based on call chain. Older Lisp, Perl (with local).\n   \n   ```c\n   int x = 1;        // global\n   void f() { printf(\"%d\", x); }  // Static scope: prints global x = 1\n   void g() { int x = 2; f(); }   // Dynamic scope would print 2, static prints 1\n   ```"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Concepts of Programming Languages",
        "author": "Robert Sebesta"
      }
    ],
    "practiceLinks": [
      {
        "title": "Programming Languages Overview",
        "url": "https://www.geeksforgeeks.org/programming-paradigms-in-c/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "List and briefly describe four programming language paradigms with examples. (2 Marks)",
        "Distinguish Language Syntax and Language Semantics. (2 Marks)",
        "What are the attributes of a variable? Explain scope and lifetime. (2 Marks)"
      ],
      "sixMarks": [
        "Write BNF grammar for: (1) arithmetic expressions with +, -, *, / and parentheses; (2) if-else statement; (3) while loop. (6 Marks)",
        "Compare Static (Lexical) Scoping and Dynamic Scoping with C code examples showing different output. (6 Marks)"
      ],
      "longAnswer": [
        "Programming language concepts: paradigm classification (imperative, OOP, functional, logic, declarative) with language examples, BNF/EBNF grammar writing, data type systems (type checking, type coercion, type equivalence), variable attributes (scope, lifetime, binding time), parameter passing mechanisms, and overview of OOP features (encapsulation, inheritance, polymorphism) in compiler design context. (10 Marks)"
      ]
    }
  },
  {
    "title": "Formal Languages and Automata Theory",
    "slug": "compiler-formal-languages-automata",
    "order": 12,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Apply automata theory to compiler design: Introduction to Formal Languages, Alphabet (Σ) and Strings, Languages as sets of strings, Regular Languages (recognized by FA), Context-Free Languages (recognized by PDA), Finite Automata (DFA, NFA), Pushdown Automata (PDA for CFL parsing), Pumping Lemma for Regular and Context-Free languages, Chomsky Hierarchy, and Applications in Compiler Design (lexer = FA, parser = PDA).",
    "subTopics": [
      "Introduction to Formal Languages",
      "Alphabet and Strings",
      "Languages",
      "Regular Languages",
      "Context-Free Languages",
      "Finite Automata",
      "Pushdown Automata",
      "Applications in Compiler Design"
    ],
    "prerequisiteTitles": [
      "Lexical Analysis",
      "Syntax Analysis and Parsing"
    ],
    "learningObjectives": [
      "Define Chomsky Hierarchy: Type 0 (RE), Type 1 (CSL), Type 2 (CFL), Type 3 (Regular).",
      "Construct DFA for simple regular languages and PDA for context-free languages.",
      "Explain connection: Regular Language ↔ Lexical Analysis (DFA), CFL ↔ Syntax Analysis (PDA/Parser)."
    ],
    "notes": [
      {
        "title": "Chomsky Hierarchy and Automata-Compiler Connection",
        "content": "FORMAL LANGUAGES AND AUTOMATA THEORY\n\n1. Chomsky Language Hierarchy:\n   ┌─────────────────────────────────────────────────────────────────┐\n   │  Type 0: Recursively Enumerable Languages                       │\n   │  ┌──────────────────────────────────────────────────────────┐  │\n   │  │  Type 1: Context-Sensitive Languages (CSL)               │  │\n   │  │  ┌───────────────────────────────────────────────────┐   │  │\n   │  │  │  Type 2: Context-Free Languages (CFL)             │   │  │\n   │  │  │  ┌────────────────────────────────────────────┐   │   │  │\n   │  │  │  │  Type 3: Regular Languages                 │   │   │  │\n   │  │  │  └────────────────────────────────────────────┘   │   │  │\n   │  │  └───────────────────────────────────────────────────┘   │  │\n   │  └──────────────────────────────────────────────────────────┘  │\n   └─────────────────────────────────────────────────────────────────┘\n   \n   Grammar Type → Automaton:\n   Type 3 (Regular) → Finite Automaton (DFA/NFA)\n   Type 2 (CFL)     → Pushdown Automaton (PDA)\n   Type 1 (CSL)     → Linear Bounded Automaton (LBA)\n   Type 0 (RE)      → Turing Machine (TM)\n\n2. Regular Languages:\n   - Generated by Regular Grammars: A → aB or A → a\n   - Recognized by Finite Automata (DFA/NFA)\n   - Described by Regular Expressions\n   - Closed under: union, concatenation, Kleene star, intersection, complement\n   - NOT closed under: counting (cannot express a^n b^n)\n\n3. Context-Free Languages:\n   - Generated by Context-Free Grammars (CFG): A → α where A is single variable\n   - Recognized by Pushdown Automata (PDA)\n   - Used to describe programming language syntax\n   - NOT closed under intersection, complement (in general)\n\n4. Pushdown Automaton (PDA):\n   PDA = 7-tuple (Q, Σ, Γ, δ, q0, Z0, F)\n   Adds infinite stack to NFA.\n   δ: Q × (Σ ∪ {ε}) × Γ → P(Q × Γ*)\n   \n   Example: PDA for {a^n b^n | n ≥ 1}\n   State q0: read 'a', push 'A' onto stack.\n   Transition to q1: read 'b', pop 'A'.\n   Accept when stack is empty.\n\n5. Application to Compilers:\n   ┌─────────────────┬─────────────────────────────┬──────────────────────────┐\n   │ Compiler Phase  │ Language Class               │ Recognizer               │\n   ├─────────────────┼─────────────────────────────┼──────────────────────────┤\n   │ Lexical Anal.   │ Regular Languages (tokens)   │ DFA (lexer)              │\n   │ Syntax Anal.    │ Context-Free Languages       │ PDA (parser)             │\n   │ Semantic Anal.  │ Context-Sensitive features   │ Ad-hoc algorithms        │\n   └─────────────────┴─────────────────────────────┴──────────────────────────┘\n   \n   Why Regular Languages for lexer?\n   - Tokens (identifiers, keywords, literals) are regular → efficiently recognized by DFA.\n   \n   Why CFL for parser?\n   - Programming language syntax (nested expressions, balanced brackets) is context-free.\n   - CFG naturally expresses recursive structure."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Introduction to Automata Theory, Languages and Computation",
        "author": "Hopcroft, Motwani, Ullman"
      }
    ],
    "practiceLinks": [
      {
        "title": "Automata Theory GFG",
        "url": "https://www.geeksforgeeks.org/theory-of-computation-automata-tutorials/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State the Chomsky Hierarchy of formal languages. Which automaton recognizes each class? (2 Marks)",
        "What are Regular Languages? Give 3 examples and one non-regular language. (2 Marks)",
        "How is automata theory applied in compiler front end design? (2 Marks)"
      ],
      "sixMarks": [
        "Design a DFA for language L = {w | w is a binary string ending in 00}. Convert to minimized DFA. (6 Marks)",
        "Design a PDA for language L = {a^n b^n | n ≥ 1}. Trace PDA for input 'aabb'. (6 Marks)"
      ],
      "longAnswer": [
        "Formal language theory in compiler design: Chomsky hierarchy with grammar types and automata, regular languages (closure properties, applications to lexer), CFL (CFG, CNF, GNF, PDA, CYK algorithm), connection between grammar class and compiler phase, pumping lemma to prove languages are not regular/CFL, and practical implications for scanner and parser design. (10 Marks)"
      ]
    }
  },
  {
    "title": "Advanced Compiler Concepts",
    "slug": "compiler-advanced-concepts",
    "order": 13,
    "estimatedHours": 3,
    "difficulty": "Advanced",
    "description": "Explore modern compiler techniques: Just-In-Time (JIT) Compilation (Java JVM HotSpot, V8), Dynamic Compilation vs static compilation, Parallel Compilation (multi-core, distributed), Advanced Optimization Techniques (auto-vectorization, profile-guided optimization, interprocedural analysis), Garbage Collection Basics (mark-and-sweep, reference counting, generational GC), and Modern Compiler Architectures (LLVM IR, GCC RTL, WebAssembly).",
    "subTopics": [
      "Just-In-Time Compilation (JIT)",
      "Dynamic Compilation",
      "Parallel Compilation",
      "Optimization Techniques",
      "Garbage Collection Basics",
      "Modern Compiler Architectures"
    ],
    "prerequisiteTitles": [
      "Code Generation",
      "Code Optimization"
    ],
    "learningObjectives": [
      "Explain JIT compilation: bytecode compiled to machine code at runtime for frequently executed code paths.",
      "Describe LLVM IR as a universal intermediate representation enabling language-agnostic optimizations.",
      "Differentiate Garbage Collection algorithms: Mark-and-Sweep, Reference Counting, Generational GC."
    ],
    "notes": [
      {
        "title": "JIT Compilation, LLVM Architecture, and Garbage Collection",
        "content": "ADVANCED COMPILER CONCEPTS\n\n1. Just-In-Time (JIT) Compilation:\n   Process: Source → Bytecode (ahead of time) → Machine Code (at runtime, as needed)\n   \n   How JIT works:\n   Step 1: Program starts as interpreted bytecode.\n   Step 2: JIT profiler identifies \"hot paths\" (frequently executed code).\n   Step 3: JIT compiler translates hot bytecode to optimized native machine code.\n   Step 4: Future calls use compiled native code (much faster).\n   \n   Examples:\n   - Java HotSpot JVM: JIT compiles hot Java bytecode methods.\n   - V8 Engine (Chrome/Node.js): JIT compiles JavaScript.\n   - .NET CLR: JIT compiles C# CIL (Common Intermediate Language).\n   \n   JIT vs AOT (Ahead-of-Time) vs Interpretation:\n   Interpretation: Slow startup, slow execution.\n   JIT: Slow startup, fast execution (after warmup).\n   AOT: Fast startup, fast execution, no warmup.\n\n2. LLVM Architecture:\n   LLVM = Low Level Virtual Machine (now just a compiler framework name).\n   \n   LLVM Pipeline:\n   Source (C/C++) → Clang → LLVM IR (.ll) → LLVM Optimizer → Target Code (x86/ARM/WASM)\n   \n   LLVM IR (Intermediate Representation):\n   - Typed, SSA (Static Single Assignment) form.\n   - Platform-independent.\n   - Enables rich optimization passes.\n   \n   ```llvm\n   ; LLVM IR for: int add(int a, int b) { return a + b; }\n   define i32 @add(i32 %a, i32 %b) {\n   entry:\n     %result = add i32 %a, %b\n     ret i32 %result\n   }\n   ```\n\n3. Garbage Collection Algorithms:\n   \n   a) Reference Counting:\n      - Each object has count of references to it.\n      - When count → 0, free object.\n      - Problem: Cannot handle circular references.\n      - Used in: CPython, Swift ARC.\n   \n   b) Mark-and-Sweep:\n      Phase 1 (Mark): Traverse all reachable objects from root set. Mark them.\n      Phase 2 (Sweep): Scan heap; free all unmarked objects.\n      Problem: Stop-the-world pauses during GC.\n      Used in: JVM G1 GC, Go GC.\n   \n   c) Generational GC:\n      Observation: Most objects die young (generational hypothesis).\n      Young generation: Small, collected frequently (minor GC).\n      Old generation: Large, collected rarely (major GC).\n      Used in: JVM (Eden, Survivor spaces, Old Gen), .NET GC.\n\n4. Profile-Guided Optimization (PGO):\n   Step 1: Compile with instrumentation.\n   Step 2: Run program on representative workloads.\n   Step 3: Collect profile data (hot functions, branch frequencies).\n   Step 4: Recompile using profile data for targeted optimizations."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Engineering a Compiler",
        "author": "Cooper, Torczon"
      },
      {
        "title": "LLVM Cookbook",
        "author": "Mayur Pandey, Suyog Sarda"
      }
    ],
    "practiceLinks": [
      {
        "title": "LLVM Tutorial",
        "url": "https://llvm.org/docs/tutorial/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is JIT compilation? How does it differ from AOT and interpretation? (2 Marks)",
        "Explain Mark-and-Sweep garbage collection algorithm. What is its main weakness? (2 Marks)",
        "What is LLVM IR? Why is it called universal intermediate representation? (2 Marks)"
      ],
      "sixMarks": [
        "Compare JIT vs AOT vs Interpreted execution with examples (JVM, V8, CPython). Discuss warmup time, peak performance, and memory usage. (6 Marks)",
        "Compare Reference Counting and Generational Garbage Collection. Which handles circular references? How does Generational GC improve performance? (6 Marks)"
      ],
      "longAnswer": [
        "Modern compiler technology: JIT compilation workflow (profiling → hot path detection → JIT compile → cache), LLVM architecture (frontend/optimizer/backend layers, LLVM IR in SSA form), profile-guided optimization, garbage collection algorithms (reference counting vs mark-sweep vs generational vs incremental), WebAssembly as compilation target, and future of compiler technology (AI-assisted optimization, neural network compilers). (10 Marks)"
      ]
    }
  },
  {
    "title": "Compiler Design Tools",
    "slug": "compiler-design-tools",
    "order": 14,
    "estimatedHours": 3,
    "difficulty": "Intermediate",
    "description": "Use compiler construction tools: Lex/Flex (lexical analyzer generator from regex rules), YACC/Bison (parser generator from CFG productions), ANTLR (ANother Tool for Language Recognition, LL(*) parsers), Parser Generator comparisons (YACC vs ANTLR vs PEG), Compiler Construction Frameworks (LLVM, GCC, Roslyn), and integration of Lex+YACC for building complete compiler front ends.",
    "subTopics": [
      "Lex Tool",
      "YACC Tool",
      "ANTLR Overview",
      "Parser Generators",
      "Compiler Construction Frameworks"
    ],
    "prerequisiteTitles": [
      "Lexical Analysis",
      "Syntax Analysis and Parsing"
    ],
    "learningObjectives": [
      "Write Lex (.l) specification file with regular expression rules and associated C actions.",
      "Write YACC (.y) specification file with CFG grammar and semantic actions.",
      "Integrate Lex and YACC together to build a calculator or simple language interpreter."
    ],
    "notes": [
      {
        "title": "Lex and YACC Integration - Building a Calculator",
        "content": "COMPILER DESIGN TOOLS\n\n1. Lex (Lexical Analyzer Generator):\n   Input: .l file with patterns and actions\n   Output: lex.yy.c (C source for lexer function yylex())\n   \n   ```\n   Lex File Structure:\n   %{\n     Declarations (C code)\n   %}\n   Definitions (name = pattern)\n   %%\n   Rules (pattern { action })\n   %%\n   User code (C functions)\n   ```\n   \n   Compile: flex calc.l → gcc lex.yy.c -lfl → lexer executable\n\n2. YACC (Yet Another Compiler Compiler) / Bison:\n   Input: .y file with grammar and actions\n   Output: y.tab.c (C source for parser function yyparse())\n   \n   ```\n   YACC File Structure:\n   %{\n     C declarations and includes\n   %}\n   Token definitions (%token, %left, %right, %nonassoc)\n   %%\n   Grammar rules with semantic actions\n   %%\n   C support functions (yyerror, main)\n   ```\n\n3. Complete Lex + YACC Calculator:\n   \n   calc.l (Lexer):\n   ```\n   %{\n   #include \"y.tab.h\"\n   %}\n   %%\n   [0-9]+       { yylval = atoi(yytext); return NUM; }\n   [+\\-*/()]   { return yytext[0]; }\n   \\n          { return '\\n'; }\n   [ \\t]       { /* skip whitespace */ }\n   %%\n   ```\n   \n   calc.y (Parser):\n   ```\n   %{\n   #include <stdio.h>\n   void yyerror(char *s);\n   int yylex();\n   %}\n   %token NUM\n   %left '+' '-'\n   %left '*' '/'\n   %%\n   program: program expr '\\n' { printf(\"= %d\\n\", $2); }\n           | /* empty */\n           ;\n   expr:   expr '+' expr { $$ = $1 + $3; }\n         | expr '-' expr { $$ = $1 - $3; }\n         | expr '*' expr { $$ = $1 * $3; }\n         | expr '/' expr { $$ = $1 / $3; }\n         | '(' expr ')'  { $$ = $2; }\n         | NUM            { $$ = $1; }\n         ;\n   %%\n   void yyerror(char *s) { fprintf(stderr, \"Error: %s\\n\", s); }\n   int main() { return yyparse(); }\n   ```\n   \n   Build commands:\n   ```bash\n   yacc -d calc.y      # Generates y.tab.c and y.tab.h\n   flex calc.l          # Generates lex.yy.c\n   gcc -o calc y.tab.c lex.yy.c -ll  # Compile together\n   ```\n\n4. ANTLR (ANother Tool for Language Recognition):\n   - Generates LL(*) parsers in Java, Python, C#, JavaScript.\n   - Combines lexer and parser specification in one .g4 file.\n   - Better error messages and tree construction than YACC.\n   - Used by many production tools (IntelliJ IDEA, Hibernate, Apache Spark SQL)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Flex & Bison",
        "author": "John Levine"
      },
      {
        "title": "The Definitive ANTLR 4 Reference",
        "author": "Terence Parr"
      }
    ],
    "practiceLinks": [
      {
        "title": "Lex YACC Examples",
        "url": "https://www.geeksforgeeks.org/lex-program-to-implement-a-lexical-analyzer/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is Lex? What is the role of yylex() function? (2 Marks)",
        "What is YACC? What does %left and %right mean in token declarations? (2 Marks)",
        "How does ANTLR differ from YACC/Bison? (2 Marks)"
      ],
      "sixMarks": [
        "Write Lex (.l) and YACC (.y) programs for a simple integer calculator supporting +, -, *, / operations. Show compilation and execution steps. (6 Marks)",
        "Write a Lex program to tokenize a C source file and output each token with its type. (6 Marks)"
      ],
      "longAnswer": [
        "Compiler tools comprehensive guide: Lex file structure and compilation (flex → lex.yy.c → gcc), YACC grammar file structure (tokens, precedence, grammar rules, semantic actions), Lex+YACC integration for building complete calculator with operator precedence, ANTLR 4 grammar (.g4) for same calculator, and comparison of YACC vs ANTLR vs PEG parsers on grammar expressiveness, conflict resolution, and error handling. (10 Marks)"
      ]
    }
  },
  {
    "title": "Practical Compiler Design Projects",
    "slug": "compiler-practical-projects",
    "order": 15,
    "estimatedHours": 6,
    "difficulty": "Advanced",
    "description": "Build compiler components: Building a Simple Lexical Analyzer from scratch in C, Creating a Recursive Descent Parser, Expression Evaluator (complete front end), Mini Compiler Development (subset language), Syntax Checker for code validation, Code Optimization Project (apply multiple optimization passes), and Interpreter Development Basics (tree-walking interpreter).",
    "subTopics": [
      "Building a Simple Lexical Analyzer",
      "Creating a Parser",
      "Expression Evaluator",
      "Mini Compiler Development",
      "Syntax Checker",
      "Code Optimization Project",
      "Interpreter Development Basics"
    ],
    "prerequisiteTitles": [
      "Compiler Design Tools",
      "Code Generation"
    ],
    "learningObjectives": [
      "Build a hand-written recursive descent parser for arithmetic expressions in C.",
      "Implement a tree-walking interpreter that evaluates expression ASTs.",
      "Develop a mini compiler: scan → parse → generate TAC → optimize → output."
    ],
    "notes": [
      {
        "title": "Recursive Descent Parser and Expression Evaluator Implementation",
        "content": "PRACTICAL COMPILER DESIGN PROJECTS\n\n1. Hand-Written Lexer (Tokenizer) in C:\n   ```c\n   #include <stdio.h>\n   #include <ctype.h>\n   #include <string.h>\n   \n   typedef enum { NUM, PLUS, MINUS, MUL, DIV, LPAREN, RPAREN, END } TokenType;\n   typedef struct { TokenType type; int value; } Token;\n   \n   char *input; int pos;\n   \n   Token nextToken() {\n       while (isspace(input[pos])) pos++;\n       if (input[pos] == '\\0') return (Token){END, 0};\n       if (isdigit(input[pos])) {\n           int val = 0;\n           while (isdigit(input[pos])) val = val*10 + input[pos++]-'0';\n           return (Token){NUM, val};\n       }\n       switch (input[pos++]) {\n           case '+': return (Token){PLUS, 0};\n           case '-': return (Token){MINUS, 0};\n           case '*': return (Token){MUL, 0};\n           case '/': return (Token){DIV, 0};\n           case '(': return (Token){LPAREN, 0};\n           case ')': return (Token){RPAREN, 0};\n       }\n       return (Token){END, 0};\n   }\n   ```\n\n2. Recursive Descent Parser + Evaluator:\n   ```c\n   // Grammar: E → T ((+|-) T)*  T → F ((*|/) F)*  F → num | (E)\n   Token current;\n   int expr();    // Forward declarations\n   int term();\n   int factor();\n   \n   int factor() {\n       if (current.type == NUM) {\n           int val = current.value;\n           current = nextToken();\n           return val;\n       }\n       if (current.type == LPAREN) {\n           current = nextToken();  // consume (\n           int val = expr();\n           current = nextToken();  // consume )\n           return val;\n       }\n       return 0;\n   }\n   \n   int term() {\n       int val = factor();\n       while (current.type == MUL || current.type == DIV) {\n           TokenType op = current.type;\n           current = nextToken();\n           if (op == MUL) val *= factor();\n           else val /= factor();\n       }\n       return val;\n   }\n   \n   int expr() {\n       int val = term();\n       while (current.type == PLUS || current.type == MINUS) {\n           TokenType op = current.type;\n           current = nextToken();\n           if (op == PLUS) val += term();\n           else val -= term();\n       }\n       return val;\n   }\n   \n   int main() {\n       char buf[256];\n       printf(\"Enter expression: \");\n       fgets(buf, 256, stdin);\n       input = buf; pos = 0;\n       current = nextToken();\n       printf(\"Result = %d\\n\", expr());\n       return 0;\n   }\n   // Test: 3 + 4 * 2 → 11\n   // Test: (3 + 4) * 2 → 14\n   ```\n\n3. Mini Compiler Project Structure:\n   Phase 1: Lexer (tokenize source)\n   Phase 2: Parser (build AST)\n   Phase 3: Semantic Checker (type check)\n   Phase 4: Code Generator (output TAC or assembly)\n   \n   Sample mini language:\n   ```\n   var x = 10;\n   var y = 20;\n   var z = x + y * 2;\n   print z;\n   ```\n   Generated TAC:\n   x = 10\n   y = 20\n   t1 = y * 2\n   t2 = x + t1\n   z = t2\n   print z"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Crafting Interpreters",
        "author": "Robert Nystrom"
      }
    ],
    "practiceLinks": [
      {
        "title": "Crafting Interpreters Online",
        "url": "https://craftinginterpreters.com/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Design the structure of a Mini Compiler for a simple language. List the components. (2 Marks)",
        "What is a Recursive Descent Parser? What grammar class does it handle? (2 Marks)",
        "What is the difference between a Compiler and an Interpreter for the same language? (2 Marks)"
      ],
      "sixMarks": [
        "Implement a recursive descent parser in C for arithmetic expressions. Show the grammar and C functions for each non-terminal. (6 Marks)",
        "Design a simple tree-walking interpreter: define AST node types, show evaluation logic for binary operations, variable assignment, and print statement. (6 Marks)"
      ],
      "longAnswer": [
        "Mini Compiler Project: Design and implement a complete mini compiler for a language supporting: variable declarations (var x = expr), arithmetic expressions (+,-,*,/), print statements. Implement: (1) Lexer - tokenize input; (2) Parser - build AST using recursive descent; (3) Semantic Analysis - check variable declarations; (4) Code Generator - output Three Address Code. Provide complete C implementation with sample input/output. (10 Marks)"
      ]
    }
  },
  {
    "title": "Applications of Compiler Design",
    "slug": "compiler-applications",
    "order": 16,
    "estimatedHours": 2,
    "difficulty": "Beginner",
    "description": "Explore compiler technology applications: Programming Language Development (GCC, Clang, javac), Software Development Tools (IDEs, code analysis, formatters), Integrated Development Environments (IDE features: syntax highlighting, autocomplete using compiler front end), Database Query Processing (SQL parser → query optimizer → execution plan), Artificial Intelligence Systems (domain-specific languages), Embedded Systems compilers (cross-compilers), and Mobile Application Development (Swift, Kotlin compilers).",
    "subTopics": [
      "Programming Language Development",
      "Software Development Tools",
      "Integrated Development Environments (IDEs)",
      "Database Query Processing",
      "Artificial Intelligence Systems",
      "Embedded Systems",
      "Mobile Application Development"
    ],
    "prerequisiteTitles": [
      "Introduction to Compiler Design"
    ],
    "learningObjectives": [
      "Identify compiler techniques used in SQL query processing: parse SQL → build query plan → optimize → execute.",
      "Explain how IDEs use compiler front ends for syntax highlighting, error detection, and autocomplete.",
      "Describe cross-compilation for embedded systems: compile on x86 host, target ARM microcontroller."
    ],
    "notes": [
      {
        "title": "Compiler Applications in SQL, IDEs, and Embedded Systems",
        "content": "APPLICATIONS OF COMPILER DESIGN\n\n1. Database Query Processing (SQL Compiler):\n   SQL Query Lifecycle:\n   SELECT name FROM students WHERE age > 18 ORDER BY name;\n   \n   Step 1: Lexical Analysis → tokens: SELECT, name, FROM, students, WHERE, age, >, 18, ORDER, BY, name\n   Step 2: Syntax Analysis → Parse Tree (query parse tree)\n   Step 3: Semantic Analysis → Table/column existence check, type checking\n   Step 4: Query Optimization → Logical plan → Physical plan (choose indexes, join order)\n   Step 5: Code Generation → Execution plan → Execute → Return results\n   \n   Query Optimizer (like code optimizer): Chooses most efficient execution plan.\n\n2. IDE Features Using Compiler Technology:\n   - Syntax Highlighting: Lexer runs in real-time to color tokens.\n   - Error Underlines: Parser checks as you type, reports syntax errors.\n   - Autocomplete/IntelliSense: Symbol table lookup for variable/method suggestions.\n   - Refactoring: AST analysis to safely rename variables across files.\n   - Type Checking: Semantic analyzer detects type errors.\n   - Go to Definition: Symbol table maps identifier to declaration location.\n   \n   Example: Language Server Protocol (LSP) - standard interface between IDEs and language compilers/analyzers.\n\n3. Cross-Compilation for Embedded Systems:\n   - Host Machine: x86/x64 PC (runs compiler)\n   - Target Machine: ARM Cortex-M, MIPS, RISC-V (runs compiled program)\n   - Cross-compiler: Compiles on x86 but generates ARM assembly/machine code\n   - Example: arm-none-eabi-gcc (for ARM bare-metal embedded systems)\n   \n   ```bash\n   arm-none-eabi-gcc -mcpu=cortex-m4 -mthumb -o firmware.elf main.c\n   ```\n\n4. Programming Language Development:\n   - Language Designer: Design syntax (grammar) and semantics (behavior).\n   - Compiler Implementation: Lex + Parse + Semantic Check + Code Gen.\n   - Standard Library: Built-in functions, data structures.\n   - Toolchain: Debugger, profiler, package manager.\n   \n   Examples: Python (written in C), Ruby (MRI interpreter in C), Julia (LLVM-based JIT).\n\n5. AI/ML Domain-Specific Languages (DSLs):\n   - TensorFlow XLA: Compile TensorFlow graphs to optimized machine code.\n   - Halide: DSL for image processing pipelines with separating algorithm from schedule.\n   - MLIR (Multi-Level IR): Meta-framework for DSL compilers in AI/ML."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Compilers: Principles, Techniques, and Tools",
        "author": "Aho, Lam, Sethi, Ullman"
      }
    ],
    "practiceLinks": [
      {
        "title": "Compiler Applications Overview GFG",
        "url": "https://www.geeksforgeeks.org/types-of-compilers/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "How does a SQL query processor use compiler design principles? (2 Marks)",
        "What is a Cross-Compiler? Why is it used in embedded systems development? (2 Marks)",
        "How do IDEs use compiler front-end technology for syntax highlighting and error detection? (2 Marks)"
      ],
      "sixMarks": [
        "Trace the processing of SQL query SELECT * FROM emp WHERE salary > 50000 through all compiler-like phases. (6 Marks)",
        "Explain how Language Server Protocol (LSP) enables IDE features using compiler technology. List 6 IDE features powered by compiler analysis. (6 Marks)"
      ],
      "longAnswer": [
        "Compiler design applications analysis: SQL query compilation (parser, semantic checker, query optimizer, code generator), IDE intelligence features (LSP, syntax highlighting, autocomplete, refactoring, type checking), embedded systems cross-compilation toolchain, mobile app compilers (Swift → LLVM → ARM, Kotlin → JVM bytecode → ART), AI/ML DSL compilers (XLA, MLIR, Halide), and future applications in quantum computing and neural network compilers. (10 Marks)"
      ]
    }
  }
];
