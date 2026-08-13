module.exports = [
  {
    "title": "Introduction to Computer Organization and Architecture",
    "slug": "computer-organization-and-architecture-introduction",
    "order": 1,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Understand computer systems: Organization vs Architecture, functional units (ALU, Control, Memory, I/O), computer generations, and performance metrics (CPU Execution Time, CPI, MIPS, Amdahl's Law).",
    "subTopics": [
      "Introduction to Computer Systems",
      "Computer Organization vs Computer Architecture",
      "Functional Units of a Computer",
      "Basic Computer Structure",
      "Evolution of Computer Systems",
      "Generations of Computers",
      "Performance Measurement of Computers"
    ],
    "prerequisiteTitles": [],
    "learningObjectives": [
      "Distinguish Computer Architecture (programmer-visible attributes: instruction set, addressing modes) and Computer Organization (hardware implementation details: control signals, memory technology).",
      "Apply CPU Performance Equation: $T = IC \times CPI \times \tau$.",
      "Calculate overall speedup using Amdahl's Law: $S = \frac{1}{(1-f) + \frac{f}{k}}$."
    ],
    "notes": [
      {
        "title": "Architecture vs Organization & CPU Performance Formulas",
        "content": "INTRODUCTION TO COMPUTER ORGANIZATION & ARCHITECTURE\n\n1. Architecture vs Organization:\n   - Computer Architecture: Attributes visible to the programmer (Instruction set, number of bits used to represent data types, I/O mechanisms, addressing modes).\n   - Computer Organization: Operational units and their interconnections that realize architectural specifications (Control signals, interfaces between computer and peripherals, memory technology used).\n\n2. CPU Performance Metrics:\n   - CPU Execution Time $T = IC \times CPI \times \tau$\n     * $IC$ = Instruction Count\n     * $CPI$ = Clock Cycles Per Instruction\n     * $\tau$ = Clock Cycle Time = $1 / Clock Frequency (f)$\n   - Amdahl's Law for Speedup:\n     $S = \frac{1}{(1-f) + \frac{f}{k}}$\n     where $f$ is the fraction of enhanced execution time, and $k$ is the speedup factor of the enhanced portion."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Computer Organization and Architecture",
        "author": "William Stallings"
      },
      {
        "title": "Computer System Architecture",
        "author": "M. Morris Mano"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks CPU Performance & Amdahl's Law Problems",
        "url": "https://www.geeksforgeeks.org/computer-organization-and-architecture-tutorials/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between Computer Architecture and Computer Organization with examples. (2 Marks)",
        "State CPU Execution Time formula and define CPI. (2 Marks)",
        "State Amdahl's Law for calculating system speedup. (2 Marks)"
      ],
      "sixMarks": [
        "A program runs in 10 seconds on a 2 GHz processor. A compiler optimization reduces instruction count by 30% without changing CPI. Calculate the new execution time. (6 Marks)",
        "Explain the 5 functional units of a computer system (Input, Memory, ALU, Control Unit, Output) detailing bus interconnects. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Computer System Performance Metrics. Detail evolution from 1st Gen Vacuum Tubes to 5th Gen AI processors, CPU clock speed limits, CPI calculations across instruction classes, MIPS/MFLOPS limitations, and Amdahl's law derivations. (10 Marks)"
      ]
    }
  },
  {
    "title": "Data Representation and Computer Arithmetic",
    "slug": "computer-organization-and-architecture-data-representation",
    "order": 2,
    "estimatedHours": 5,
    "difficulty": "Beginner",
    "description": "Master digital data representation: Binary/Octal/Hexadecimal number systems, 2's complement signed arithmetic, fixed-point, and IEEE 754 Single & Double Precision floating-point standard.",
    "subTopics": [
      "Number Systems (Binary, Decimal, Octal, Hexadecimal)",
      "Number System Conversion",
      "Signed and Unsigned Numbers",
      "Fixed Point Representation",
      "Floating Point Representation",
      "IEEE Floating Point Standard",
      "Binary Arithmetic",
      "Arithmetic Overflow"
    ],
    "prerequisiteTitles": [
      "Introduction to Computer Organization and Architecture"
    ],
    "learningObjectives": [
      "Convert real numbers into IEEE 754 32-bit Single Precision floating-point format (Sign bit + 8-bit Biased Exponent + 23-bit Mantissa).",
      "Perform 2's Complement binary addition and detect Arithmetic Overflow.",
      "Convert between Binary, Decimal, Octal, and Hexadecimal number systems."
    ],
    "notes": [
      {
        "title": "IEEE 754 Floating Point Conversion Step-by-Step",
        "content": "DATA REPRESENTATION & IEEE 754 FLOATING POINT\n\n1. IEEE 754 32-Bit Single Precision Format:\n   --------------------------------------------------------\n   | Sign Bit (S) | Biased Exponent (E) | Mantissa / Fraction (F) |\n   | 1 Bit (Bit 31)| 8 Bits (Bits 30-23)| 23 Bits (Bits 22-0)    |\n   --------------------------------------------------------\n   - Value = $(-1)^S \times 1.F \times 2^{E - 127}$\n   - Bias = 127 for Single Precision (8-bit exponent), 1023 for Double Precision (11-bit exponent).\n\n2. Numerical Example: Convert -12.625 to IEEE 754 32-Bit Format:\n   - Step 1 (Sign): Negative number $Rightarrow S = 1$.\n   - Step 2 (Binary conversion): $12 = 1100_2$, $0.625 \times 2 = 1.25 Rightarrow 1$, $0.25 \times 2 = 0.5 Rightarrow 0$, $0.5 \times 2 = 1.0 Rightarrow 1$. So $12.625 = 1100.101_2$.\n   - Step 3 (Normalization): $1.100101 \times 2^3$. Exponential power $e = 3$.\n   - Step 4 (Biased Exponent): $E = e + 127 = 3 + 127 = 130 = 10000010_2$.\n   - Step 5 (Mantissa): Drop leading 1 $Rightarrow F = 10010100000000000000000_2$ (pad to 23 bits).\n   - Final IEEE 754 Hex: `1 10000010 10010100000000000000000` = `0xC14A0000`."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Computer System Architecture",
        "author": "M. Morris Mano"
      }
    ],
    "practiceLinks": [
      {
        "title": "IEEE 754 Floating Point Converter Tool & Exercises",
        "url": "https://www.h-schmidt.net/FloatConverter/IEEE754.html"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is the bias value in IEEE 754 Single Precision and Double Precision formats? (2 Marks)",
        "How is Arithmetic Overflow detected in 2's complement addition? (2 Marks)",
        "Differentiate between Fixed Point and Floating Point representation. (2 Marks)"
      ],
      "sixMarks": [
        "Convert the decimal number +26.375 into IEEE 754 32-bit Single Precision floating-point format. Show all steps clearly. (6 Marks)",
        "Perform binary subtraction $(+14)_{10} - (+22)_{10}$ using 8-bit 2's Complement representation and check for overflow. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Computer Arithmetic Representation. Detail fixed-point fractional representation, IEEE 754 denormalized numbers, infinity & NaN special encodings, 2's complement range calculations for $n$ bits ($-2^{n-1}$ to $+2^{n-1}-1$), and floating-point addition/multiplication algorithms. (10 Marks)"
      ]
    }
  },
  {
    "title": "Digital Logic Fundamentals",
    "slug": "computer-organization-and-architecture-digital-logic",
    "order": 3,
    "estimatedHours": 5,
    "difficulty": "Beginner",
    "description": "Explore core digital building blocks: Logic gates, Boolean algebra, Combinational circuits (Adders, Subtractors, Mux/Demux), and Sequential circuits (Flip-Flops, Registers, Counters).",
    "subTopics": [
      "Boolean Algebra Basics",
      "Logic Gates (AND, OR, NOT, NAND, NOR, XOR, XNOR)",
      "Boolean Expressions",
      "Logic Circuit Design",
      "Combinational Circuits",
      "Sequential Circuits",
      "Flip-Flops",
      "Registers and Counters"
    ],
    "prerequisiteTitles": [
      "Introduction to Computer Organization and Architecture"
    ],
    "learningObjectives": [
      "Simplify Boolean functions using Boolean algebra laws and Karnaugh Maps (K-Maps).",
      "Design Full Adder combinational logic circuit using logic gates.",
      "Analyze Sequential circuits: RS, JK, D, T Flip-Flops and 4-bit Shift Registers."
    ],
    "notes": [
      {
        "title": "Combinational Adders & Sequential Flip-Flop Truth Tables",
        "content": "DIGITAL LOGIC FUNDAMENTALS\n\n1. Full Adder Combinational Circuit:\n   Inputs: $A, B, C_{in}$. Outputs: $Sum, C_{out}$.\n   - $Sum = A oplus B oplus C_{in}$\n   - $C_{out} = AB + BC_{in} + AC_{in}$\n\n2. Master-Slave JK Flip-Flop Truth Table:\n   -----------------------------------------\n   J | K | $Q_{n+1}$      | Action\n   -----------------------------------------\n   0 | 0 | $Q_n$          | No Change (Hold)\n   0 | 1 | 0              | Reset\n   1 | 0 | 1              | Set\n   1 | 1 | $overline{Q_n}$ | Toggle\n   -----------------------------------------\n\n3. Universal Logic Gates:\n   NAND and NOR gates are universal gates because any Boolean function can be implemented using only NAND or only NOR gates."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Digital Design",
        "author": "M. Morris Mano"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Digital Logic Tutorials",
        "url": "https://www.geeksforgeeks.org/digital-logic-circuits-tutorials/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Why are NAND and NOR called Universal Logic Gates? (2 Marks)",
        "State truth table and excitation equation for a JK Flip-Flop. (2 Marks)",
        "Differentiate between Combinational and Sequential digital circuits. (2 Marks)"
      ],
      "sixMarks": [
        "Design a 1-bit Full Adder circuit showing truth table, K-Map simplification, and logic gate diagram. (6 Marks)",
        "Explain 4-bit Synchronous vs Asynchronous (Ripple) Binary Counter working with timing diagrams. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Digital Logic Circuits in CPU Design. Detail K-Map 4-variable minimization, Multiplexer (4:1) implementation of Boolean functions, D and T Flip-Flop conversion, and Shift Registers (SISO, SIPO, PISO, PIPO). (10 Marks)"
      ]
    }
  },
  {
    "title": "Basic Computer Organization",
    "slug": "computer-organization-and-architecture-basic-computer-organization",
    "order": 4,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Study basic computer hardware organization: CPU, ALU, Control Unit, Registers, Memory, I/O, and System Bus Architecture (Data, Address, Control buses).",
    "subTopics": [
      "CPU Components",
      "Arithmetic Logic Unit (ALU)",
      "Control Unit",
      "Registers",
      "Memory Unit",
      "Input and Output Units",
      "System Bus Architecture",
      "Data Bus",
      "Address Bus",
      "Control Bus"
    ],
    "prerequisiteTitles": [
      "Digital Logic Fundamentals"
    ],
    "learningObjectives": [
      "Understand System Bus architecture: Data Bus (bidirectional), Address Bus (unidirectional), Control Bus.",
      "Calculate maximum addressable memory based on Address Bus width ($2^N$ locations).",
      "Explain the interaction between ALU, Control Unit, and Registers during execution."
    ],
    "notes": [
      {
        "title": "System Bus Architecture & Memory Addressability",
        "content": "BASIC COMPUTER ORGANIZATION & BUS ARCHITECTURE\n\n1. System Bus Interconnects:\n   - Address Bus (Unidirectional): Carries memory and I/O addresses from CPU to system components. $N$ address lines can address $2^N$ distinct byte locations.\n   - Data Bus (Bidirectional): Transfers data words between CPU, memory, and peripherals. Bus width (e.g. 64-bit) determines word transfer size.\n   - Control Bus (Bidirectional): Carries control/timing signals (Memory Read/Write, Interrupt Request, Bus Request/Grant, Clock).\n\n2. Memory Addressing Calculation:\n   - If a processor has a 32-bit Address Bus, it can address $2^{32} = 4,294,967,296\text{ bytes} = 4\text{ GB}$ of RAM.\n   - If a 64-bit address bus is used, addressable space is $2^{64} = 16\text{ Exabytes}$."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Computer Organization and Architecture",
        "author": "William Stallings"
      }
    ],
    "practiceLinks": [
      {
        "title": "Sanfoundry Computer Organization Bus Architecture",
        "url": "https://www.sanfoundry.com/computer-organization-assessment-questions-answers-bus-structures/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between Data Bus, Address Bus, and Control Bus on directionality and purpose. (2 Marks)",
        "If a CPU has a 24-bit Address Bus, what is the maximum addressable main memory size? (2 Marks)",
        "What is the function of the Accumulator register? (2 Marks)"
      ],
      "sixMarks": [
        "Draw and explain Von Neumann computer architecture block diagram showing CPU, ALU, Control Unit, Memory, and System Bus. (6 Marks)",
        "Calculate addressable memory for: (a) 16-bit address bus with byte addressing, (b) 32-bit address bus with 32-bit word addressing. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Computer Bus Systems. Detail synchronous vs asynchronous bus protocols, bus arbitration methods (Centralized Daisy Chaining, Distributed Arbitration), bus clocking, and system throughput bottlenecks. (10 Marks)"
      ]
    }
  },
  {
    "title": "Central Processing Unit (CPU)",
    "slug": "computer-organization-and-architecture-cpu",
    "order": 5,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Explore CPU internal organization: Processor components, General Purpose Registers, and Special Purpose Registers (PC, IR, MAR, MDR, Accumulator, Status Register).",
    "subTopics": [
      "CPU Organization",
      "Processor Components",
      "Register Organization",
      "General Purpose Registers",
      "Special Purpose Registers (PC, IR, MAR, MDR)",
      "CPU Performance Factors"
    ],
    "prerequisiteTitles": [
      "Basic Computer Organization"
    ],
    "learningObjectives": [
      "Identify Special Purpose Registers: Program Counter (PC), Instruction Register (IR), Memory Address Register (MAR), Memory Data Register (MDR).",
      "Trace register transfers during instruction fetch and decode.",
      "Analyze internal CPU bus structure (Single-bus, Two-bus, Three-bus CPU)."
    ],
    "notes": [
      {
        "title": "CPU Special Purpose Registers & Fetch Transfer Flow",
        "content": "CPU REGISTER ORGANIZATION & SPECIAL REGISTERS\n\n1. Key Special Purpose Registers:\n   - Program Counter (PC): Holds the memory address of the NEXT instruction to be fetched. Automatically incremented after fetch.\n   - Instruction Register (IR): Holds the current instruction opcode and operands being executed.\n   - Memory Address Register (MAR): Holds the memory address currently being read from or written to.\n   - Memory Data Register (MDR / MBR): Holds the data read from memory or ready to be written to memory.\n   - Accumulator (AC): Holds temporary intermediate results of ALU operations.\n   - Status / Flag Register: Stores ALU status flags (Zero Z, Carry C, Overflow V, Sign S).\n\n2. Register Transfer Operations for Instruction Fetch:\n   1. MAR <- [PC]\n   2. MDR <- Memory[MAR], PC <- [PC] + 4\n   3. IR <- [MDR]"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Computer Organization",
        "author": "Carl Hamacher"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks CPU Registers in Computer Organization",
        "url": "https://www.geeksforgeeks.org/cpu-registers-in-computer-organization/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State the specific functions of PC, IR, MAR, and MDR registers. (2 Marks)",
        "What is the Status / Flag Register? Name four common ALU flags. (2 Marks)",
        "Differentiate between General Purpose Registers and Special Purpose Registers. (2 Marks)"
      ],
      "sixMarks": [
        "Write register transfer step sequences for (a) Fetching an instruction from memory, (b) Reading a data word from memory address stored in MAR. (6 Marks)",
        "Compare Single-Bus CPU internal organization vs Multi-Bus CPU organization on speed, hardware complexity, and bus contention. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Central Processing Unit Architecture. Detail register file design, ALU status flags evaluation, internal data paths, instruction execution cycles, and multi-register bank optimizations. (10 Marks)"
      ]
    }
  },
  {
    "title": "Instruction Set Architecture",
    "slug": "computer-organization-and-architecture-isa",
    "order": 6,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master Instruction Set Architecture (ISA): 3-address, 2-address, 1-address (Accumulator), 0-address (Stack) formats, and Addressing Modes (Immediate, Direct, Indirect, Register, Indexed).",
    "subTopics": [
      "Introduction to Instruction Sets",
      "Instruction Formats",
      "Instruction Types (Data Transfer, Arithmetic, Logical, Branch)",
      "Addressing Modes (Immediate, Direct, Indirect, Register, Indexed)"
    ],
    "prerequisiteTitles": [
      "Central Processing Unit (CPU)"
    ],
    "learningObjectives": [
      "Evaluate arithmetic expressions $X = (A + B) \times (C + D)$ using 3-address, 2-address, 1-address, and 0-address stack instructions.",
      "Calculate Effective Address (EA) for addressing modes: Immediate ($EA = Operand$), Direct ($EA = A$), Indirect ($EA = M[A]$), Register ($EA = R$), Indexed ($EA = R + A$).",
      "Compare Data Transfer, Arithmetic/Logic, and Control Branch instructions."
    ],
    "notes": [
      {
        "title": "Instruction Formats & Effective Address (EA) Calculations",
        "content": "INSTRUCTION SET ARCHITECTURE & ADDRESSING MODES\n\n1. Instruction Formats for Expression $X = (A + B) \times (C + D)$:\n   - 3-Address: ADD R1, A, B | ADD R2, C, D | MUL X, R1, R2\n   - 2-Address: MOV R1, A | ADD R1, B | MOV R2, C | ADD R2, D | MUL R1, R2 | MOV X, R1\n   - 1-Address (Accumulator): LOAD A | ADD B | STORE T | LOAD C | ADD D | MUL T | STORE X\n   - 0-Address (Stack): PUSH A | PUSH B | ADD | PUSH C | PUSH D | ADD | MUL | POP X\n\n2. Addressing Modes & Effective Address (EA):\n   - Immediate: Operand = Value stored in instruction field. $EA =$ none.\n   - Direct: $EA = A$ (Address field contains memory address).\n   - Indirect: $EA = Memory[A]$ (Address field points to memory location containing actual address).\n   - Register: $EA = R$ (Operand stored in CPU Register $R$).\n   - Register Indirect: $EA = Contents[R]$ (Register contains memory address).\n   - Relative / Indexed: $EA = Contents[R] + A$ (Base/Index register + Offset)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Computer Organization and Architecture",
        "author": "William Stallings"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Addressing Modes Problems",
        "url": "https://www.geeksforgeeks.org/addressing-modes/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define Effective Address (EA). Calculate EA for Direct vs Indirect addressing modes. (2 Marks)",
        "Compare 3-address and 0-address (Stack) instruction formats. (2 Marks)",
        "What is Indexed Addressing Mode and where is it used? (2 Marks)"
      ],
      "sixMarks": [
        "Evaluate expression $Y = (A \times B) + (C \times D)$ using: (a) 3-Address instructions, (b) 1-Address Accumulator instructions, (c) 0-Address Stack instructions. (6 Marks)",
        "Given Memory location 200 contains 300, and location 300 contains 400. Register R1 contains 200. Find Effective Address and Operand value for: (a) Direct, (b) Indirect, (c) Register Indirect addressing. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Instruction Set Architectures. Detail instruction word encoding (Opcode + Mode + Address bits), orthogonality, RISC fixed-length vs CISC variable-length instruction formats, branch control instructions (conditional vs unconditional), and procedure call stack frame organization. (10 Marks)"
      ]
    }
  },
  {
    "title": "Instruction Execution and Control Unit",
    "slug": "computer-organization-and-architecture-control-unit",
    "order": 7,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Explore Control Unit design: Instruction Cycle (Fetch, Decode, Execute, Interrupt), Hardwired Control Unit (state machine logic) vs Microprogrammed Control Unit (Control Memory, Microinstructions).",
    "subTopics": [
      "Instruction Cycle (Fetch, Decode, Execute)",
      "Control Unit Design",
      "Hardwired Control Unit",
      "Microprogrammed Control Unit",
      "Control Memory",
      "Microinstructions"
    ],
    "prerequisiteTitles": [
      "Instruction Set Architecture"
    ],
    "learningObjectives": [
      "Trace the 4-phase Instruction Cycle: Fetch, Decode, Execute, Interrupt.",
      "Compare Hardwired Control Units (combinational logic gates, fast, inflexible) and Microprogrammed Control Units (ROM control memory, microcode, flexible).",
      "Differentiate Horizontal Microinstructions (wide format, high parallelism) and Vertical Microinstructions (narrow format, decoded)."
    ],
    "notes": [
      {
        "title": "Hardwired vs Microprogrammed Control Units & Microinstructions",
        "content": "INSTRUCTION EXECUTION & CONTROL UNIT DESIGN\n\n1. Hardwired vs Microprogrammed Control Units:\n   ----------------------------------------------------------------------------------\n   Feature               | Hardwired Control Unit      | Microprogrammed Control Unit\n   ----------------------------------------------------------------------------------\n   Implementation        | Fixed combinational gates   | Control Memory (ROM) microcode\n   Execution Speed       | Extremely Fast              | Slower (ROM read cycle overhead)\n   Flexibility           | Difficult to modify/re-design| Easy to update by microcode change\n   Complex Instructions  | Complex logic circuit       | Easily handled via microprograms\n   Control Signals       | Generated by gate logic     | Decoded from microinstruction fields\n   Used In               | RISC Processors             | CISC Processors\n   ----------------------------------------------------------------------------------\n\n2. Microinstructions Format:\n   - Horizontal Microinstruction: Each bit directly controls one control line. High speed, no decoding, wide control word.\n   - Vertical Microinstruction: Control signals grouped and encoded into fields. Requires decoder gates, narrow control word."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Computer System Architecture",
        "author": "M. Morris Mano"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Control Unit Design Tutorial",
        "url": "https://www.geeksforgeeks.org/control-unit-and-its-types/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain the 4 phases of the Instruction Cycle. (2 Marks)",
        "Differentiate between Hardwired Control Unit and Microprogrammed Control Unit. (2 Marks)",
        "Compare Horizontal and Vertical Microinstructions. (2 Marks)"
      ],
      "sixMarks": [
        "Explain Microprogrammed Control Unit architecture showing Control Address Register (CAR), Control Memory (ROM), Control Data Register (CDR), and Next Address Generator logic. (6 Marks)",
        "Describe Hardwired Control Unit logic generation using Sequence Counter (SC), Instruction Decoder, and Logic Gates. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Control Unit Engineering. Detail microprogram sequencing, microinstruction address pipelining, nano-programming for double ROM reduction, hardwired state-machine synthesis, and control unit design trade-offs in RISC vs CISC. (10 Marks)"
      ]
    }
  },
  {
    "title": "Memory Organization",
    "slug": "computer-organization-and-architecture-memory-organization",
    "order": 8,
    "estimatedHours": 6,
    "difficulty": "Intermediate",
    "description": "Master memory hierarchy: SRAM vs DRAM, Cache Memory mapping (Direct, Fully Associative, Set Associative), Tag/Index/Offset bit fields, AMAT, Virtual Memory (Paging, TLB, Page Faults).",
    "subTopics": [
      "Memory Hierarchy",
      "Primary Memory (RAM, ROM)",
      "Secondary Memory (HDD, SSD)",
      "Cache Memory",
      "Cache Mapping Techniques (Direct, Associative, Set Associative)",
      "Virtual Memory",
      "Memory Management Basics"
    ],
    "prerequisiteTitles": [
      "Central Processing Unit (CPU)"
    ],
    "learningObjectives": [
      "Calculate Cache Tag, Index/Set, and Byte Offset bit lengths for Direct, Fully Associative, and N-Way Set Associative caches.",
      "Calculate Average Memory Access Time: $AMAT = t_{cache} + (1 - h) \times t_{main_memory}$.",
      "Understand Virtual Memory Paging, Page Table, Translation Lookaside Buffer (TLB), and Page Fault handling."
    ],
    "notes": [
      {
        "title": "Cache Mapping Bit Splitting & AMAT Calculations",
        "content": "MEMORY HIERARCHY & CACHE MAPPING CALCULATIONS\n\n1. Cache Address Splitting Formulas:\n   Main Memory Address of $M$ bits ($2^M$ bytes total memory):\n   - Direct Mapping:\n     * Byte Offset = $log_2(\text{Block Size in bytes})$\n     * Line Index = $log_2(\text{Number of Cache Lines})$\n     * Tag Bits = $M - \text{Line Index} - \text{Byte Offset}$\n   - N-Way Set Associative Mapping:\n     * Number of Sets = $\frac{\text{Number of Cache Lines}}{N}$\n     * Set Index = $log_2(\text{Number of Sets})$\n     * Tag Bits = $M - \text{Set Index} - \text{Byte Offset}$\n   - Fully Associative Mapping:\n     * Byte Offset = $log_2(\text{Block Size in bytes})$\n     * Tag Bits = $M - \text{Byte Offset}$ (No index bits)\n\n2. Numerical Example:\n   Main Memory = 16 MB ($2^{24}$ bytes, 24-bit address). Cache = 64 KB, Block Size = 16 bytes.\n   - Block Offset = $log_2(16) = 4\text{ bits}$.\n   - Number of Lines = $\frac{64\text{ KB}}{16\text{ B}} = 4096 = 2^{12}$.\n   - Direct Mapping: Line Index = 12 bits, Tag = $24 - 12 - 4 = 8\text{ bits}$.\n   - 4-Way Set Associative: Sets = $\frac{4096}{4} = 1024 = 2^{10}$. Set Index = 10 bits, Tag = $24 - 10 - 4 = 10\text{ bits}$."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Computer Organization",
        "author": "Hamacher, Vranesic, Zaky"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Cache Memory Numerical Problems",
        "url": "https://www.geeksforgeeks.org/cache-memory-in-computer-organization/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State the Memory Hierarchy from fastest/smallest to slowest/largest. (2 Marks)",
        "Define Cache Hit Ratio and state Average Memory Access Time (AMAT) formula. (2 Marks)",
        "What is the function of the Translation Lookaside Buffer (TLB)? (2 Marks)"
      ],
      "sixMarks": [
        "A 32-bit byte-addressable system has a 16 KB Cache with 32-byte blocks. Determine Tag, Index, and Offset bit field lengths for: (a) Direct Mapping, (b) 4-Way Set Associative Mapping. (6 Marks)",
        "Explain Virtual Memory Paging mechanism showing Virtual Address splitting (Page Number + Offset), Page Table lookup, and Page Fault service routine. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Memory System Architecture. Detail SRAM cell 6-transistor vs DRAM 1T1C capacitor refresh cycles, Cache Replacement Policies (LRU, FIFO, LFU, Random), Write Policies (Write-Through vs Write-Back with Dirty Bit), and multi-level L1/L2/L3 cache hierarchies. (10 Marks)"
      ]
    }
  },
  {
    "title": "Input and Output Organization",
    "slug": "computer-organization-and-architecture-io-organization",
    "order": 9,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Explore I/O architectures: Programmed I/O, Interrupt-Driven I/O (Vectored interrupts, Daisy chaining priority), and Direct Memory Access (DMA Controller, Cycle Stealing, Burst mode).",
    "subTopics": [
      "I/O Devices",
      "I/O Interface",
      "Programmed I/O",
      "Interrupt Driven I/O",
      "Direct Memory Access (DMA)",
      "I/O Controllers",
      "Peripheral Communication"
    ],
    "prerequisiteTitles": [
      "Basic Computer Organization"
    ],
    "learningObjectives": [
      "Compare Programmed I/O (busy-waiting polling), Interrupt-Driven I/O, and Direct Memory Access (DMA).",
      "Analyze DMA transfer modes: Burst Mode (block transfer) vs Cycle Stealing (interleaved bus cycles).",
      "Understand Interrupt handling, Daisy Chaining priority resolution, and Vectored Interrupt tables."
    ],
    "notes": [
      {
        "title": "Programmed I/O vs Interrupt vs DMA & DMA Controller",
        "content": "INPUT / OUTPUT ORGANIZATION & DMA\n\n1. I/O Transfer Mechanisms Comparison:\n   - Programmed I/O: CPU constantly polls I/O status flag in a busy-wait loop. Wastes CPU clock cycles.\n   - Interrupt-Driven I/O: I/O module interrupts CPU when ready. CPU suspends current task, saves context, executes Interrupt Service Routine (ISR), and resumes execution.\n   - Direct Memory Access (DMA): Specialized hardware controller transfers data directly between I/O device and Main Memory over system bus without CPU intervention. CPU initialized DMA and is notified upon completion.\n\n2. DMA Controller Operation Modes:\n   - Burst Mode: DMA controller retains control of system bus to transfer an entire block of data continuously. CPU paused during transfer.\n   - Cycle Stealing Mode: DMA controller steals individual bus cycles from CPU to transfer single words. Minimizes CPU stall time."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Computer Organization and Architecture",
        "author": "William Stallings"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Direct Memory Access (DMA)",
        "url": "https://www.geeksforgeeks.org/direct-memory-access-dma-in-computer-organization/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between Programmed I/O, Interrupt-Driven I/O, and DMA. (2 Marks)",
        "Explain Cycle Stealing mode vs Burst mode in DMA transfers. (2 Marks)",
        "What is Daisy Chaining in interrupt priority resolution? (2 Marks)"
      ],
      "sixMarks": [
        "Explain DMA Controller architecture showing Address Register, Count Register, Control Register, Bus Request (BR), and Bus Grant (BG) signals. (6 Marks)",
        "Describe Interrupt Handling sequence from hardware assertion to Interrupt Service Routine (ISR) execution and context restoration. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on I/O Interface Systems. Detail Memory-Mapped I/O vs Isolated (I/O-Mapped) I/O address decoding, Interrupt Vector Tables (IVT), priority hardware interrupts (Daisy Chaining vs Parallel Priority Encoder), and PCIe bus protocols. (10 Marks)"
      ]
    }
  },
  {
    "title": "Computer Arithmetic Unit",
    "slug": "computer-organization-and-architecture-arithmetic-unit",
    "order": 10,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master hardware arithmetic algorithms: Carry Lookahead Adder (CLA), Booth's Multiplication Algorithm for signed binary numbers, Restoring & Non-Restoring Division.",
    "subTopics": [
      "Arithmetic Logic Unit Design",
      "Addition and Subtraction Circuits",
      "Multiplication Algorithms (Booth's Algorithm)",
      "Division Algorithms",
      "Floating Point Arithmetic",
      "Arithmetic Circuit Design"
    ],
    "prerequisiteTitles": [
      "Data Representation and Computer Arithmetic"
    ],
    "learningObjectives": [
      "Execute Booth's Multiplication Algorithm step-by-step for signed multi-bit numbers.",
      "Understand Carry Lookahead Adder (CLA) speedup equations ($P_i = A_i oplus B_i$, $G_i = A_i B_i$).",
      "Trace Restoring and Non-Restoring Division algorithms."
    ],
    "notes": [
      {
        "title": "Booth's Signed Multiplication Algorithm Step-by-Step Trace",
        "content": "BOOTH'S MULTIPLICATION ALGORITHM\n\n1. Algorithm Rules:\n   Multiplicand $M$, Multiplier $Q$. Registers $A = 0$, $Q_{-1} = 0$, Counter $Count = n$.\n   Examine two least significant bits $(Q_0, Q_{-1})$:\n   - $00 Rightarrow$ Shift Right Arithmetic (ASHAR) $(A, Q, Q_{-1})$.\n   - $01 Rightarrow A = A + M$, then Shift Right Arithmetic (ASHAR).\n   - $10 Rightarrow A = A - M$, then Shift Right Arithmetic (ASHAR).\n   - $11 Rightarrow$ Shift Right Arithmetic (ASHAR).\n   Decrement $Count$. Repeat until $Count = 0$. Result in $(A, Q)$.\n\n2. Trace Example: Multiply $+7 (0111)$ by $-3 (1101)$ ($n = 4$ bits):\n   - $M = 0111$, $-M = 1001$, $Q = 1101$, $A = 0000$, $Q_{-1} = 0$.\n   - Cycle 1: $Q_0 Q_{-1} = 10 Rightarrow A = A - M = 0000 + 1001 = 1001$. ASHAR $Rightarrow A = 1100, Q = 1110, Q_{-1} = 1$.\n   - Cycle 2: $Q_0 Q_{-1} = 01 Rightarrow A = A + M = 1100 + 0111 = 0011$. ASHAR $Rightarrow A = 0001, Q = 1111, Q_{-1} = 0$.\n   - Cycle 3: $Q_0 Q_{-1} = 10 Rightarrow A = A - M = 0001 + 1001 = 1010$. ASHAR $Rightarrow A = 1101, Q = 0111, Q_{-1} = 1$.\n   - Cycle 4: $Q_0 Q_{-1} = 11 Rightarrow$ ASHAR $Rightarrow A = 1110, Q = 1011, Q_{-1} = 1$.\n   - Result $AQ = 11101011_2 = -21_{10}$. Correct!"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Computer Architecture: A Quantitative Approach",
        "author": "Hennessy & Patterson"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Booth's Algorithm Numerical Examples",
        "url": "https://www.geeksforgeeks.org/computer-organization-booths-algorithm/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State the $(Q_0, Q_{-1})$ decision rules in Booth's Multiplication Algorithm. (2 Marks)",
        "Why is Carry Lookahead Adder faster than Ripple Carry Adder? (2 Marks)",
        "Compare Restoring Division and Non-Restoring Division algorithms. (2 Marks)"
      ],
      "sixMarks": [
        "Multiply signed numbers $(-5)_{10} \times (+6)_{10}$ using 5-bit Booth's Multiplication Algorithm showing table trace for each clock step. (6 Marks)",
        "Derive Carry Generate ($G_i$) and Carry Propagate ($P_i$) expressions for a 4-bit Carry Lookahead Adder (CLA). (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Hardware Arithmetic Units. Detail Bit-Pair Recoding (Modified Booth's algorithm), Restoring vs Non-Restoring division flowcharts, IEEE 754 floating-point addition/multiplication hardware pipelines, and ALU design trade-offs. (10 Marks)"
      ]
    }
  },
  {
    "title": "Pipelining",
    "slug": "computer-organization-and-architecture-pipelining",
    "order": 11,
    "estimatedHours": 6,
    "difficulty": "Advanced",
    "description": "Master instruction pipelining: 5-stage RISC pipeline (IF, ID, EX, MEM, WB), Pipeline Hazards (Data RAW/WAR/WAW, Control Branch, Structural), Speedup ($S_k$), Throughput, and Data Forwarding.",
    "subTopics": [
      "Introduction to Pipelining",
      "Pipeline Architecture",
      "Instruction Pipeline",
      "Pipeline Stages (IF, ID, EX, MEM, WB)",
      "Pipeline Hazards (Data Hazard, Control Hazard, Structural Hazard)",
      "Pipeline Performance Improvement"
    ],
    "prerequisiteTitles": [
      "Instruction Execution and Control Unit"
    ],
    "learningObjectives": [
      "Understand 5-stage RISC Instruction Pipeline execution: Instruction Fetch (IF), Instruction Decode (ID), Execute (EX), Memory Access (MEM), Write Back (WB).",
      "Calculate Pipeline Speedup $S_k = \frac{n cdot k}{k + n - 1}$ and CPI with stall cycles.",
      "Identify Pipeline Hazards (Data RAW/WAR/WAW, Control Branching, Structural) and resolve via Data Forwarding / Branch Prediction."
    ],
    "notes": [
      {
        "title": "Pipelining Speedup Formulas & Data Hazard Resolution",
        "content": "INSTRUCTION PIPELINING & HAZARD ANALYSIS\n\n1. Pipeline Speedup Formula:\n   For $k$-stage pipeline executing $n$ instructions:\n   - Non-Pipelined Execution Time $T_{np} = n cdot k cdot \tau$\n   - Pipelined Execution Time $T_p = (k + n - 1) cdot \tau$\n   - Ideal Speedup $S_k = \frac{T_{np}}{T_p} = \frac{n cdot k}{k + n - 1}$\n   - As $n \rightarrow infty$, Max Ideal Speedup $S_{max} = k$.\n\n2. Pipeline Hazards & Mitigations:\n   - Structural Hazard: Resource conflict when two instructions need same hardware simultaneously (e.g. Memory conflict). Solved by separate I-Cache and D-Cache.\n   - Data Hazard: Instruction depends on result of a previous instruction still in pipeline.\n     * Read-After-Write (RAW) / True Dependency.\n     * Write-After-Read (WAR) / Anti-Dependency.\n     * Write-After-Write (WAW) / Output Dependency.\n     * Resolved by Data Forwarding / Bypassing (passing EX output directly to EX input) or inserting NOP stalls (bubbles).\n   - Control Hazard: Caused by branch instructions changing PC. Solved by Branch Prediction (Static/Dynamic) and Branch Target Buffers (BTB)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Computer Architecture: A Quantitative Approach",
        "author": "Hennessy & Patterson"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Pipelining Numerical Problems",
        "url": "https://www.geeksforgeeks.org/pipelining-in-computer-organization/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define Pipeline Speedup ($S_k$) and calculate ideal speedup for a 5-stage pipeline as $n \to infty$. (2 Marks)",
        "Distinguish between RAW, WAR, and WAW Data Hazards. (2 Marks)",
        "What is Data Forwarding (Bypassing) in pipeline hazard resolution? (2 Marks)"
      ],
      "sixMarks": [
        "A 4-stage pipeline has stage delays of 150ps, 180ps, 200ps, and 160ps. Intermediate pipeline register delay is 20ps. Calculate: (a) Clock cycle time $\tau$, (b) Time to execute 100 instructions, (c) Speedup over non-pipelined execution. (6 Marks)",
        "Explain Structural, Data, and Control Pipeline Hazards with instruction sequence diagrams and mitigation strategies. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Instruction Pipelining. Detail 5-stage RISC pipeline execution space-time diagrams, stall cycle penalty impact on CPI ($CPI = 1 + \text{Stalls}$), dynamic branch prediction (1-bit vs 2-bit saturating counters), and out-of-order execution (Tomasulo's algorithm). (10 Marks)"
      ]
    }
  },
  {
    "title": "Parallel Processing",
    "slug": "computer-organization-and-architecture-parallel-processing",
    "order": 12,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Explore parallel architectures: Flynn's Taxonomy (SISD, SIMD, MISD, MIMD), Instruction-Level (ILP) vs Data-Level (DLP) vs Task-Level (TLP) parallelism, Multi-core, UMA vs NUMA.",
    "subTopics": [
      "Introduction to Parallel Computing",
      "Types of Parallelism (Instruction Level, Data Level)",
      "Multi-Core Processors",
      "Multiprocessors",
      "Flynn's Classification (SISD, SIMD, MISD, MIMD)"
    ],
    "prerequisiteTitles": [
      "Pipelining"
    ],
    "learningObjectives": [
      "Classify parallel computers using Flynn's Taxonomy: SISD, SIMD (Vector/GPU), MISD, MIMD (Multi-core/Clusters).",
      "Compare Symmetric Multiprocessing (SMP / UMA) and Distributed Shared Memory (NUMA).",
      "Analyze Cache Coherence protocols (MESI protocol: Modified, Exclusive, Shared, Invalid)."
    ],
    "notes": [
      {
        "title": "Flynn's Classification & MESI Cache Coherence Protocol",
        "content": "PARALLEL PROCESSING & FLYNN'S TAXONOMY\n\n1. Flynn's Classification:\n   - SISD (Single Instruction, Single Data): Traditional uniprocessor (Von Neumann).\n   - SIMD (Single Instruction, Multiple Data): One instruction stream operating on multiple data elements simultaneously (Vector processors, GPUs).\n   - MISD (Multiple Instruction, Single Data): Multiple instructions operate on same data stream (Rare, fault-tolerant space computers).\n   - MIMD (Multiple Instruction, Multiple Data): Independent processors executing different instructions on different data (Multi-core CPUs, Distributed Clusters).\n\n2. MESI Cache Coherence Protocol:\n   In multiprocessor systems with private L1 caches:\n   - M (Modified): Cache line present ONLY in current cache and is DIRTY (different from main memory).\n   - E (Exclusive): Cache line present ONLY in current cache and is CLEAN (matches main memory).\n   - S (Shared): Cache line present in current cache and potentially other caches, CLEAN.\n   - I (Invalid): Cache line invalid/outdated."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Advanced Computer Architecture",
        "author": "Hesham El-Rewini & Mostafa Abd-El-Barr"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Flynn's Taxonomy in Computer Organization",
        "url": "https://www.geeksforgeeks.org/flynns-taxonomy/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain Flynn's 4 categories of computer architectures (SISD, SIMD, MISD, MIMD) with examples. (2 Marks)",
        "Differentiate between UMA (Uniform Memory Access) and NUMA (Non-Uniform Memory Access). (2 Marks)",
        "State the 4 states of the MESI Cache Coherence protocol. (2 Marks)"
      ],
      "sixMarks": [
        "Explain Flynn's Taxonomy with block diagrams and map modern multi-core CPUs and GPUs into their respective categories. (6 Marks)",
        "Describe Cache Coherence problem in multiprocessor systems and explain how MESI bus snooping protocol resolves line invalidations. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Parallel Computer Architectures. Detail Instruction-Level Parallelism (ILP superscalar vs VLIW), Data-Level Parallelism (SIMD vector execution), Multiprocessor interconnection networks (Crossbar, Omega, Mesh), and hardware synchronization primitives (Test-and-Set, LL/SC). (10 Marks)"
      ]
    }
  },
  {
    "title": "Advanced Processor Architectures",
    "slug": "computer-organization-and-architecture-advanced-architectures",
    "order": 13,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Comparative study: RISC vs CISC architectural philosophies, Superscalar execution, Very Long Instruction Word (VLIW), Vector Processors, and GPU CUDA SIMT architecture.",
    "subTopics": [
      "RISC Architecture",
      "CISC Architecture",
      "RISC vs CISC Comparison",
      "Superscalar Processors",
      "Vector Processors",
      "GPU Architecture Basics"
    ],
    "prerequisiteTitles": [
      "Pipelining",
      "Instruction Set Architecture"
    ],
    "learningObjectives": [
      "Compare RISC (Reduced Instruction Set Computer - ARM, MIPS, RISC-V) and CISC (Complex Instruction Set Computer - x86).",
      "Understand Superscalar Processor architecture (multiple instruction issue per clock cycle).",
      "Explore GPU Streaming Multiprocessor (SM) SIMT (Single Instruction Multiple Threads) execution model."
    ],
    "notes": [
      {
        "title": "RISC vs CISC Comparison Table & GPU SIMT Basics",
        "content": "ADVANCED PROCESSOR ARCHITECTURES: RISC vs CISC & GPUs\n\n1. Comprehensive RISC vs CISC Comparison:\n   ----------------------------------------------------------------------------------\n   Feature               | RISC (e.g. ARM, RISC-V)     | CISC (e.g. Intel x86)\n   ----------------------------------------------------------------------------------\n   Instruction Set Size  | Small, simple instructions  | Large, complex instructions\n   Instruction Length    | Fixed length (e.g. 32-bit)  | Variable length (1 to 15 bytes)\n   Addressing Modes      | Few simple modes            | Many complex modes\n   Execution Style       | Load/Store Architecture     | Register-to-Memory operations\n   Clock Cycles per Inst | 1 CPI (Pipelined)           | Multi-cycle per instruction\n   Register Count        | Large register file (32+)   | Small register set (8-16)\n   Control Unit Design   | Hardwired Control Unit      | Microprogrammed Control Unit\n   Transistor Density    | Lower (More space for RAM)  | Higher (Complex decoder logic)\n   ----------------------------------------------------------------------------------\n\n2. GPU Architecture Basics (SIMT):\n   GPUs execute thousands of parallel threads grouped into Warps (32 threads). Streaming Multiprocessors (SM) execute a single instruction across all threads in a warp simultaneously."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Computer Architecture: A Quantitative Approach",
        "author": "Hennessy & Patterson"
      }
    ],
    "practiceLinks": [
      {
        "title": "NVIDIA CUDA GPU Architecture Overview",
        "url": "https://developer.nvidia.com/cuda-gpus"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Compare RISC and CISC architectures on 4 parameters. (2 Marks)",
        "What is a Superscalar Processor? Define Issue Rate. (2 Marks)",
        "Explain the SIMT (Single Instruction Multiple Threads) execution model in GPUs. (2 Marks)"
      ],
      "sixMarks": [
        "Compare RISC and CISC philosophies detailing Load/Store architecture, instruction encoding, register availability, and control unit design. (6 Marks)",
        "Describe Superscalar Execution pipeline showing Instruction Fetch/Decode unit, Reservation Stations, Multiple Execution Units, and Reorder Buffer (ROB). (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Modern High-Performance Processors. Detail VLIW vs Superscalar instruction scheduling, Vector processor vector registers ($V_0..V_n$) & vector pipelining, and NVIDIA GPU Streaming Multiprocessor (SM) memory hierarchy (Global, Shared, Registers). (10 Marks)"
      ]
    }
  },
  {
    "title": "Storage Systems",
    "slug": "computer-organization-and-architecture-storage-systems",
    "order": 14,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Study storage hardware performance: Magnetic Disks (Seek Time, Rotational Latency, Transfer Rate calculations), Solid State Drives (SSD NAND Flash), and RAID levels (RAID 0, 1, 5, 6, 10).",
    "subTopics": [
      "Memory Storage Technologies",
      "Magnetic Storage",
      "Optical Storage",
      "Solid State Storage",
      "RAID Concepts (RAID 0, 1, 5, 6, 10)",
      "Storage Performance"
    ],
    "prerequisiteTitles": [
      "Memory Organization"
    ],
    "learningObjectives": [
      "Calculate Hard Disk Drive Average Access Time: $T_{access} = T_{seek} + T_{rotation} + T_{transfer}$.",
      "Calculate Average Rotational Latency: $T_{rotation} = \frac{1}{2} \times \frac{60}{\text{RPM}}$.",
      "Compare RAID 0 (Striping), RAID 1 (Mirroring), RAID 5 (Distributed Parity), RAID 6 (Dual Parity), and RAID 10 (Nested)."
    ],
    "notes": [
      {
        "title": "HDD Disk Access Time Numerical Calculations & RAID Levels",
        "content": "STORAGE SYSTEMS & RAID ARCHITECTURE\n\n1. Hard Disk Drive (HDD) Access Time Calculation:\n   - Average Seek Time ($T_{seek}$): Time for R/W head to move to specified track.\n   - Average Rotational Latency ($T_{rot}$): Time for target sector to rotate under head.\n     $T_{rot} = \frac{1}{2} \times \frac{60\text{ seconds}}{\text{RPM}}$\n   - Transfer Time ($T_{trans}$): Time to transfer $b$ bytes.\n     $T_{trans} = \frac{b}{N \times \text{Track Capacity}} \times \frac{60}{\text{RPM}}$\n   - Total Access Time $T_{access} = T_{seek} + T_{rot} + T_{trans}$.\n\n2. RAID Levels Summary:\n   - RAID 0 (Disk Striping): No redundancy, max performance, zero fault tolerance.\n   - RAID 1 (Disk Mirroring): 100% redundancy, 50% storage capacity lost, high fault tolerance.\n   - RAID 5 (Block Striping with Distributed Parity): Requires $ge 3$ disks. Storage capacity = $(N - 1) \times S$. Tolerates single disk failure.\n   - RAID 6 (Dual Distributed Parity): Requires $ge 4$ disks. Tolerates up to 2 concurrent disk failures.\n   - RAID 10 (RAID 1+0): Striped set of mirrored pairs. Combine speed of RAID 0 with security of RAID 1."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Computer Organization and Architecture",
        "author": "William Stallings"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Hard Disk Access Time Numerical Problems",
        "url": "https://www.geeksforgeeks.org/hard-disk-drive-hdd-in-computer-organization/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "A disk rotates at 7200 RPM. Calculate its Average Rotational Latency in milliseconds. (2 Marks)",
        "Compare RAID 0, RAID 1, and RAID 5 on fault tolerance and storage capacity overhead. (2 Marks)",
        "What is the difference between HDD magnetic disk and SSD NAND Flash memory? (2 Marks)"
      ],
      "sixMarks": [
        "A hard disk has 10000 RPM, average seek time 6ms, track size 100 KB, and sector size 512 bytes. Calculate average time to read a 10 KB file. (6 Marks)",
        "Explain RAID 0, RAID 1, RAID 5, and RAID 10 configurations with disk array diagrams detailing parity distribution. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Secondary Storage Engineering. Detail HDD geometry (Cylinders, Tracks, Sectors), Disk Scheduling algorithms (FCFS, SSTF, SCAN, C-SCAN), SSD Flash Translation Layer (FTL) wear leveling, and RAID 5 parity XOR math. (10 Marks)"
      ]
    }
  },
  {
    "title": "Embedded Systems and Modern Architectures",
    "slug": "computer-organization-and-architecture-embedded-systems",
    "order": 15,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Explore embedded hardware: Microprocessors vs Microcontrollers, ARM Cortex architecture (Cortex-M, Cortex-A), RISC-V open ISA, ARM big.LITTLE mobile power optimization, and IoT node devices.",
    "subTopics": [
      "Introduction to Embedded Systems",
      "Microprocessors",
      "Microcontrollers",
      "ARM Architecture Basics",
      "Mobile Processor Architecture",
      "IoT Device Architecture"
    ],
    "prerequisiteTitles": [
      "Central Processing Unit (CPU)"
    ],
    "learningObjectives": [
      "Distinguish Microprocessors (CPU core only) and Microcontrollers (SoC with CPU, RAM, Flash, Timers, GPIO on single chip).",
      "Understand ARM Cortex profile breakdown: Cortex-A (Applications), Cortex-R (Real-time), Cortex-M (Microcontroller).",
      "Explain ARM big.LITTLE heterogeneous multi-core architecture for mobile energy savings."
    ],
    "notes": [
      {
        "title": "Microprocessor vs Microcontroller & ARM Cortex Architecture",
        "content": "EMBEDDED SYSTEMS & ARM ARCHITECTURE\n\n1. Microprocessor vs Microcontroller:\n   - Microprocessor: CPU on a chip (e.g. Intel Core i7, AMD Ryzen). Requires external RAM, ROM, I/O controllers on motherboard. High processing power, high power consumption.\n   - Microcontroller: Complete System-on-Chip (SoC) containing CPU, RAM, Flash ROM, Timers, ADC, GPIO ports on a single silicon die (e.g. ARM Cortex-M, ATmega328P, ESP32). Low power, compact, cost-effective for dedicated control tasks.\n\n2. ARM Cortex Profiles:\n   - Cortex-A Series: High-performance Application processors for smartphones, tablets (runs full OS like Android/Linux).\n   - Cortex-R Series: Real-Time processors for mission-critical automotive braking, medical devices.\n   - Cortex-M Series: Low-power Microcontrollers for IoT sensors, smart appliances."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors",
        "author": "Joseph Yiu"
      }
    ],
    "practiceLinks": [
      {
        "title": "ARM Architecture Official Developer Guide",
        "url": "https://developer.arm.com/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between a Microprocessor and a Microcontroller. (2 Marks)",
        "Explain ARM Cortex-A, Cortex-R, and Cortex-M profiles. (2 Marks)",
        "What is ARM big.LITTLE mobile processing technology? (2 Marks)"
      ],
      "sixMarks": [
        "Compare Microprocessor and Microcontroller architectures showing pinouts, memory integration, power consumption, and applications. (6 Marks)",
        "Describe ARM RISC Architecture characteristics detailing 37 registers, pipeline structure, Condition Execution flags, and Thumb 16-bit instruction set. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Embedded System Hardware Architecture. Detail System-on-Chip (SoC) bus interconnects (AMBA AHB/APB), RISC-V open ISA module extensions (RV32I, RV64I), low-power sleep modes, and edge AI microcontrollers (Cortex-M55 with Ethos-U55 NPU). (10 Marks)"
      ]
    }
  },
  {
    "title": "Computer Architecture Applications",
    "slug": "computer-organization-and-architecture-applications",
    "order": 16,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Explore modern hardware hardware accelerators: Cloud Computing hardware (DPUs, SmartNICs), AI Hardware Acceleration (Tensor Processing Units TPUs, NPU architectures), and OS-hardware interface.",
    "subTopics": [
      "Performance Optimization",
      "Processor Design",
      "Operating System Interaction",
      "Cloud Computing Hardware",
      "Artificial Intelligence Hardware",
      "Modern Computing Systems"
    ],
    "prerequisiteTitles": [
      "Advanced Processor Architectures",
      "Parallel Processing"
    ],
    "learningObjectives": [
      "Understand AI Hardware Acceleration: Tensor Processing Units (Google TPU Systolic Array), NPUs, and Matrix Multiplication Units.",
      "Analyze Data Processing Units (DPUs / SmartNICs) offloading networking and storage security from host CPU.",
      "Evaluate OS hardware abstractions (Virtualization VT-x, Memory Management Units MMU)."
    ],
    "notes": [
      {
        "title": "Google TPU Systolic Array & AI Hardware Acceleration",
        "content": "COMPUTER ARCHITECTURE APPLICATIONS & AI HARDWARE\n\n1. Google TPU Systolic Array Architecture:\n   Traditional CPUs/GPUs spend massive energy fetching registers during matrix multiplication.\n   A Systolic Array streams data matrix values continuously through a 2D grid of Multiply-Accumulate (MAC) processing elements without returning data back to register files after every operation. Ideal for deep learning Matrix Multiplication ($C = A \times B$).\n\n2. Data Processing Units (DPUs / SmartNICs):\n   Dedicated System-on-Chip combining high-speed network interfaces with programmable CPU cores to offload network packet processing, storage virtualization, and security encryption overhead from host server CPUs."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Computer Architecture: A Quantitative Approach",
        "author": "Hennessy & Patterson"
      }
    ],
    "practiceLinks": [
      {
        "title": "Google Cloud TPU Architecture Documentation",
        "url": "https://cloud.google.com/tpu/docs/system-architecture-tpu-vm"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is a Google TPU (Tensor Processing Unit) and how does a Systolic Array work? (2 Marks)",
        "Define a Data Processing Unit (DPU / SmartNIC) in cloud data centers. (2 Marks)",
        "How do modern hardware MMUs accelerate OS page table translation? (2 Marks)"
      ],
      "sixMarks": [
        "Explain Google TPU Systolic Array Architecture showing 2D MAC grid data streaming flow for matrix multiplication. (6 Marks)",
        "Describe AI Hardware Acceleration techniques comparing CPUs, GPUs, TPUs, and NPUs on TOPS/Watt and compute latency. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Modern Computer Architecture Innovations. Detail domain-specific architectures (DSAs), chiplet technology & 3D stacking, optical interconnects, cloud DPU offloading, and hardware security extensions (ARM TrustZone, Intel SGX). (10 Marks)"
      ]
    }
  }
];
