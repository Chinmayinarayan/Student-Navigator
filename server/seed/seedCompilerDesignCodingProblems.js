require('dotenv').config();
const connectDB = require('../config/db');
const Subject = require('../models/Subject');
const Topic = require('../models/Topic');
const CodingProblem = require('../models/CodingProblem');

const COMPILER_DESIGN_CODING_PROBLEMS = [
  {
    topicTitle: "Introduction to Compiler Design",
    problems: [
      {
        title: "Phases of a Compiler Overview",
        difficulty: "Easy",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/compiler-design/",
        tags: ["Compiler Design", "Phases", "Introduction"]
      },
      {
        title: "Lexical & Syntax Foundations",
        difficulty: "Easy",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/introduction-of-compiler-design/",
        tags: ["Compiler Design", "Foundations"]
      }
    ]
  },
  {
    topicTitle: "Compiler Structure and Organization",
    problems: [
      {
        title: "Multi-Pass Compiler Organization & Passes",
        difficulty: "Easy",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/phases-of-a-compiler/",
        tags: ["Architecture", "Passes", "Front-End", "Back-End"]
      },
      {
        title: "Front-End vs Back-End Compiler Workflows",
        difficulty: "Easy",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/compiler-design/",
        tags: ["Architecture", "Workflows"]
      }
    ]
  },
  {
    topicTitle: "Lexical Analysis",
    problems: [
      {
        title: "Implement a Lexical Analyzer in C",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/compiler-design/lexical-analyzer-in-c/",
        tags: ["Lexical Analysis", "Lexer", "Tokens", "C"]
      },
      {
        title: "HackerRank Regular Expressions Practice Suite",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/domains/regex",
        tags: ["Regex", "Lexical Analysis", "Patterns"]
      },
      {
        title: "String Parsing & Token Extraction",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problemset/?topicSlugs=string",
        tags: ["String Parsing", "Tokens", "LeetCode"]
      }
    ]
  },
  {
    topicTitle: "Syntax Analysis and Parsing",
    problems: [
      {
        title: "Convert Infix Expression to Postfix Expression",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/convert-infix-expression-to-postfix-expression/",
        tags: ["Parsing", "Stacks", "Infix to Postfix"]
      },
      {
        title: "Convert Infix to Prefix Notation",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/convert-infix-prefix-notation/",
        tags: ["Parsing", "Prefix", "Stacks"]
      },
      {
        title: "Valid Parentheses (Syntax Validation)",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/valid-parentheses/",
        tags: ["Syntax Validation", "Stacks", "LeetCode"]
      },
      {
        title: "Balanced Brackets Challenge",
        difficulty: "Medium",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/balanced-brackets/problem",
        tags: ["Syntax Checking", "HackerRank"]
      },
      {
        title: "Basic Calculator (Expression Evaluation & AST)",
        difficulty: "Hard",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/basic-calculator/",
        tags: ["Parsing", "Expression Evaluation", "Calculator"]
      },
      {
        title: "Evaluation of Postfix Expression",
        difficulty: "Easy",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/evaluation-of-postfix-expression/",
        tags: ["Postfix", "Evaluation", "Stacks"]
      }
    ]
  },
  {
    topicTitle: "Intermediate Code Generation",
    problems: [
      {
        title: "Three Address Code Generation in Compiler Design",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/three-address-code-compiler/",
        tags: ["Three Address Code", "ICG", "Intermediate Code"]
      },
      {
        title: "Arithmetic Expression to Three Address Code Converter",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/three-address-code-compiler/",
        tags: ["TAC", "Expressions", "ICG"]
      },
      {
        title: "Quadruples, Triples & Indirect Triples Representation",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/compiler-design/",
        tags: ["Quadruples", "Triples", "ICG"]
      }
    ]
  },
  {
    topicTitle: "Runtime Environment",
    problems: [
      {
        title: "Recursion & Call Stack Allocation",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/tag/recursion/",
        tags: ["Runtime", "Call Stack", "Activation Records"]
      },
      {
        title: "Activation Records & Recursion Algorithms",
        difficulty: "Medium",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/domains/algorithms/recursion",
        tags: ["Recursion", "Stack Allocation"]
      }
    ]
  },
  {
    topicTitle: "Symbol Table Management",
    problems: [
      {
        title: "Symbol Table Implementation using Hash Table",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/compiler-design/symbol-table-compiler/",
        tags: ["Symbol Table", "Hash Table", "Scope"]
      },
      {
        title: "Hash Table Data Structure & Scoping",
        difficulty: "Easy",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/hashing-data-structure/",
        tags: ["Hashing", "Symbol Table"]
      },
      {
        title: "Symbol Table Lookup & Hash Table Practice",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/tag/hash-table/",
        tags: ["Hash Table", "Lookup", "LeetCode"]
      },
      {
        title: "Dictionaries and Maps in Symbol Tables",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/domains/data-structures/dictionaries-and-maps",
        tags: ["Dictionaries", "Maps", "Symbol Table"]
      }
    ]
  },
  {
    topicTitle: "Code Optimization",
    problems: [
      {
        title: "Constant Folding Optimization Algorithm",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/compiler-design/constant-folding/",
        tags: ["Optimization", "Constant Folding"]
      },
      {
        title: "Common Subexpression Elimination (CSE)",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/compiler-design/common-subexpression-elimination/",
        tags: ["Optimization", "DAG", "CSE"]
      },
      {
        title: "Dead Code Elimination Technique",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/compiler-design/dead-code-elimination/",
        tags: ["Optimization", "Dead Code"]
      }
    ]
  },
  {
    topicTitle: "Code Generation",
    problems: [
      {
        title: "Simple Target Code Generator Architecture",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/compiler-design/",
        tags: ["Code Generation", "Assembly"]
      },
      {
        title: "Three Address Code to Assembly-like Instructions",
        difficulty: "Hard",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/compiler-design/",
        tags: ["Code Generation", "Registers", "Assembly"]
      }
    ]
  },
  {
    topicTitle: "Error Handling in Compilers",
    problems: [
      {
        title: "Syntax Error Detection & Panic Mode Recovery",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/error-handling-in-compiler-design/",
        tags: ["Error Handling", "Panic Mode", "Syntax Errors"]
      },
      {
        title: "Lexical & Syntactic Error Handler Implementation",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/compiler-design/",
        tags: ["Error Handler", "Diagnostics"]
      }
    ]
  },
  {
    topicTitle: "Programming Language Concepts",
    problems: [
      {
        title: "Scope, Binding & Type Checking Implementation",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/type-checking-in-compiler-design/",
        tags: ["Type Checking", "Semantics", "Binding"]
      },
      {
        title: "Syntax Directed Translation (SDT) Schemes",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/syntax-directed-translation/",
        tags: ["SDT", "Attributes", "Semantics"]
      }
    ]
  },
  {
    topicTitle: "Formal Languages and Automata Theory",
    problems: [
      {
        title: "Finite Automata (DFA & NFA) Construction",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/theory-of-computation/finite-automata/",
        tags: ["Automata", "DFA", "NFA"]
      },
      {
        title: "Regular Expression Matching Engine",
        difficulty: "Hard",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/regular-expression-matching/",
        tags: ["Regex", "Automata", "Dynamic Programming", "LeetCode"]
      },
      {
        title: "Regex Pattern Validation and Automata",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/domains/regex",
        tags: ["Regex", "Validation", "Automata"]
      }
    ]
  },
  {
    topicTitle: "Advanced Compiler Concepts",
    problems: [
      {
        title: "Static Single Assignment (SSA) Form & Modern Optimization",
        difficulty: "Hard",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/compiler-design/",
        tags: ["Advanced", "SSA", "Optimization"]
      },
      {
        title: "JIT Compilation & Virtual Machine Architecture",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/compiler-design/",
        tags: ["JIT", "Virtual Machine", "Bytecode"]
      }
    ]
  },
  {
    topicTitle: "Compiler Design Tools",
    problems: [
      {
        title: "Flex Lexical Analyzer Tutorial & Tooling",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/compiler-design/flex-lexical-analyzer/",
        tags: ["Flex", "Lex", "Tools"]
      },
      {
        title: "GNU Bison Parser Generator & LALR Parser Manual",
        difficulty: "Hard",
        platform: "Custom",
        problemUrl: "https://www.gnu.org/software/bison/manual/",
        tags: ["Bison", "Yacc", "LALR Parser"]
      }
    ]
  },
  {
    topicTitle: "Practical Compiler Design Projects",
    problems: [
      {
        title: "Project 1: Complete Lexical Analyzer in C/C++",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/compiler-design/lexical-analyzer-in-c/",
        tags: ["Project", "Lexer", "Tokens"]
      },
      {
        title: "Project 2: Arithmetic Expression Parser & AST Generator",
        difficulty: "Hard",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/basic-calculator/",
        tags: ["Project", "Parser", "AST", "Calculator"]
      },
      {
        title: "Project 3: End-to-End Mini Compiler (Lexer → Parser → Symbol Table → TAC)",
        difficulty: "Hard",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/three-address-code-compiler/",
        tags: ["Project", "Mini Compiler", "TAC", "Full Pipeline"]
      }
    ]
  },
  {
    topicTitle: "Applications of Compiler Design",
    problems: [
      {
        title: "Static Code Analysis & AST Traversal",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/compiler-design/",
        tags: ["Applications", "AST", "Static Analysis"]
      },
      {
        title: "Bytecode Interpreters & Virtual Machine Engine",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/compiler-design/",
        tags: ["Interpreters", "Bytecode", "VM"]
      }
    ]
  }
];

const seedCompilerDesignCodingProblems = async () => {
  try {
    await connectDB();

    const subject = await Subject.findOne({
      name: { $regex: /Compiler Design/i }
    });
    if (!subject) {
      console.log('❌ Principles of Compiler Design subject not found');
      process.exit(1);
    }
    console.log(`✅ Found subject: "${subject.name}"`);

    const topics = await Topic.find({ subject: subject._id }).sort({ order: 1 });
    console.log(`✅ Found ${topics.length} Principles of Compiler Design topics\n`);

    let totalAdded = 0;
    let notFound = [];

    for (const entry of COMPILER_DESIGN_CODING_PROBLEMS) {
      const topic = topics.find(
        t => t.title.toLowerCase() === entry.topicTitle.toLowerCase()
      );

      if (!topic) {
        console.log(`❌ Topic not found: "${entry.topicTitle}"`);
        notFound.push(entry.topicTitle);
        continue;
      }

      const deleted = await CodingProblem.deleteMany({ topic: topic._id });

      const problemsToInsert = entry.problems.map((p, idx) => ({
        topic: topic._id,
        title: p.title,
        description: `Practice challenge for ${topic.title} in Compiler Design.`,
        difficulty: p.difficulty,
        platform: p.platform,
        problemUrl: p.problemUrl,
        tags: p.tags || [topic.title],
        order: idx + 1,
        estimatedMinutes: p.difficulty === 'Hard' ? 60 : p.difficulty === 'Medium' ? 40 : 25,
        isPublished: true
      }));

      await CodingProblem.insertMany(problemsToInsert);
      totalAdded += problemsToInsert.length;

      console.log(`✅ "${entry.topicTitle}": replaced ${deleted.deletedCount} → added ${problemsToInsert.length} problems`);
    }

    console.log(`\n🎉 Compiler Design Coding Problems Seeded!`);
    console.log(`   Total problems added: ${totalAdded}`);
    if (notFound.length > 0) {
      console.log(`   Topics not matched: ${notFound.join(', ')}`);
    }

    process.exit(0);
  } catch (err) {
    console.error('❌ Error:', err);
    process.exit(1);
  }
};

seedCompilerDesignCodingProblems();
