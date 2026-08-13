module.exports = [
  {
    "title": "Introduction to Operating Systems",
    "slug": "os-introduction-to-operating-systems",
    "order": 1,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Understand OS fundamentals: Introduction to Operating Systems, Role and Functions (Resource Management, User Interface, File Management), Evolution from Batch to Modern OS, Types of OS (Batch, Multiprogramming, Time-Sharing, Distributed, Real-Time, Mobile), OS Services (Program execution, I/O operations, File-system manipulation, Communications, Error detection), System Calls Overview, and OS Structural Organization.",
    "subTopics": [
      "Introduction to Operating Systems",
      "Role and Functions of Operating Systems",
      "Evolution of Operating Systems",
      "Types of Operating Systems",
      "Operating System Services",
      "System Calls Overview",
      "Operating System Structure"
    ],
    "prerequisiteTitles": [],
    "learningObjectives": [
      "Define an Operating System as a program that acts as an intermediary between the user and computer hardware.",
      "Classify OS types: Batch, Multiprogramming, Time-sharing, Distributed, Real-Time, Mobile.",
      "Identify six core OS services: Program execution, I/O operations, File-system manipulation, Communications, Error detection, Resource allocation."
    ],
    "notes": [
      {
        "title": "OS Types, Functions, and System Call Overview",
        "content": "INTRODUCTION TO OPERATING SYSTEMS\n\n1. What is an Operating System?\n   An OS is a system software that:\n   - Manages computer hardware resources (CPU, Memory, I/O devices, Storage).\n   - Provides a convenient interface for users and application programs.\n   - Acts as a Resource Allocator and Control Program.\n\n2. Types of Operating Systems:\n   - Batch OS: Jobs are collected and processed in batches. No direct user interaction. Example: IBM OS/360.\n   - Multiprogramming OS: Multiple programs loaded in memory simultaneously. CPU is shared. Increases CPU utilization.\n   - Time-Sharing (Multitasking) OS: CPU time is divided into time slices (quanta) among multiple users/processes. Example: UNIX.\n   - Distributed OS: Multiple computers connected via network, share resources. Example: LOCUS.\n   - Real-Time OS (RTOS): Strict timing constraints. Hard RTOS (failure is catastrophic), Soft RTOS (deadline missing tolerable). Example: VxWorks.\n   - Mobile OS: Designed for mobile devices. Battery optimization, touch input. Example: Android, iOS.\n\n3. OS Functions:\n   - Process Management: Create, schedule, and terminate processes.\n   - Memory Management: Allocate/deallocate memory, virtual memory.\n   - File System Management: Files, directories, permissions.\n   - I/O Device Management: Device drivers, buffering.\n   - Security & Protection: Access control, authentication.\n\n4. System Calls:\n   - Interface between user-space program and OS kernel.\n   - Types: Process control (fork, exec), File manipulation (open, read, write), Device manipulation, Information maintenance, Communication (pipe, socket).\n   \n   Example (Linux):\n   ```c\n   #include <unistd.h>\n   int main() {\n       write(1, \"Hello OS!\\n\", 10);  // System call: write\n       return 0;\n   }\n   ```\n\n5. OS Structure Models:\n   - Monolithic: All OS services in one large kernel. Fast but complex. Example: Linux kernel.\n   - Layered: OS divided into layers (0=Hardware, N=User). Each layer uses services of layer below.\n   - Microkernel: Minimal kernel (IPC + basic scheduling). Other services run as user-space processes. Example: Mach.\n   - Virtual Machine: Complete isolation of hardware. Multiple OS instances. Example: VMware, KVM."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Operating System Concepts (Dinosaur Book)",
        "author": "Abraham Silberschatz, Peter Galvin"
      },
      {
        "title": "Modern Operating Systems",
        "author": "Andrew S. Tanenbaum"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks OS Basics",
        "url": "https://www.geeksforgeeks.org/operating-systems/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define an Operating System and state its primary functions. (2 Marks)",
        "Distinguish between Batch OS and Time-Sharing OS with examples. (2 Marks)",
        "What is a System Call? List its types. (2 Marks)"
      ],
      "sixMarks": [
        "Explain the various types of Operating Systems with characteristics and examples. (6 Marks)",
        "Describe the services provided by an Operating System. How do System Calls enable these services? (6 Marks)"
      ],
      "longAnswer": [
        "Compare Monolithic, Layered, Microkernel, and Virtual Machine OS structures with diagrams. Analyze advantages and disadvantages of each. (10 Marks)"
      ]
    }
  },
  {
    "title": "Operating System Architecture",
    "slug": "os-architecture-components",
    "order": 2,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Explore OS internal architecture: OS Components (Kernel, Shell, File System, Device Drivers), Monolithic Architecture (Linux), Layered Architecture, Microkernel Architecture (Mach, QNX), Virtual Machine Architecture (Type-1 and Type-2 hypervisors), User Mode vs Kernel Mode transitions, and the Boot Process (BIOS/UEFI → Bootloader → Kernel initialization).",
    "subTopics": [
      "OS Components",
      "Monolithic Architecture",
      "Layered Architecture",
      "Microkernel Architecture",
      "Virtual Machine Architecture",
      "User Mode and Kernel Mode",
      "Boot Process"
    ],
    "prerequisiteTitles": [
      "Introduction to Operating Systems"
    ],
    "learningObjectives": [
      "Identify OS components: Kernel (process/memory/device management), Shell (command interpreter), File System, Device Drivers.",
      "Differentiate User Mode and Kernel Mode and explain mode switching via system calls and interrupts.",
      "Trace the OS boot process from BIOS POST to kernel initialization and init/systemd startup."
    ],
    "notes": [
      {
        "title": "OS Architecture Diagram and Boot Sequence",
        "content": "OPERATING SYSTEM ARCHITECTURE\n\n1. OS Components:\n   - Kernel: Core of OS. Manages CPU scheduling, memory, I/O, IPC. Runs in privileged (kernel) mode.\n   - Shell: Command-line interpreter (bash, zsh) or GUI shell. Accepts user commands and invokes system calls.\n   - File System: Organizes data on storage. Examples: ext4 (Linux), NTFS (Windows), FAT32.\n   - Device Drivers: Software interface between OS kernel and hardware devices. Abstracts hardware details.\n\n2. Architecture Comparison:\n   ┌─────────────────┬───────────────────────────────────────────────────┐\n   │ Architecture    │ Characteristics                                   │\n   ├─────────────────┼───────────────────────────────────────────────────┤\n   │ Monolithic      │ All services in kernel space. Fast IPC. Complex.  │\n   │ Layered         │ Hierarchical layers. Modular. Easier debugging.   │\n   │ Microkernel     │ Minimal kernel. Services in user space. Stable.   │\n   │ Virtual Machine │ Full hardware virtualization. Isolation. Flexible.│\n   └─────────────────┴───────────────────────────────────────────────────┘\n\n3. User Mode vs Kernel Mode:\n   - User Mode: Restricted mode. No direct hardware access. Applications run here.\n   - Kernel Mode: Privileged mode. Full hardware access. OS kernel runs here.\n   - Mode Switch (Ring transition): Triggered by System Call, Hardware Interrupt, Exception.\n   \n   Mode Bit: 0 = Kernel Mode, 1 = User Mode (Intel x86 uses Ring 0 and Ring 3).\n\n4. Boot Process (Linux):\n   Step 1: Power ON → CPU starts execution from BIOS/UEFI ROM.\n   Step 2: BIOS POST (Power-On Self Test) → Checks hardware components.\n   Step 3: BIOS finds boot device → Loads MBR (Master Boot Record).\n   Step 4: MBR loads GRUB (GRand Unified Bootloader).\n   Step 5: GRUB loads Linux kernel image (vmlinuz) into RAM.\n   Step 6: Kernel initializes hardware → Mounts root filesystem.\n   Step 7: Kernel starts init process (PID=1) or systemd.\n   Step 8: init/systemd starts system services → Login prompt displayed."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Operating System Concepts",
        "author": "Silberschatz, Galvin, Gagne"
      }
    ],
    "practiceLinks": [
      {
        "title": "Linux Kernel Architecture Overview",
        "url": "https://www.kernel.org/doc/html/latest/admin-guide/index.html"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is the role of the Kernel in an Operating System? (2 Marks)",
        "Distinguish between User Mode and Kernel Mode. (2 Marks)",
        "Explain the Linux Boot Process in steps. (2 Marks)"
      ],
      "sixMarks": [
        "Compare Monolithic, Microkernel, and Layered OS architectures with diagrams. (6 Marks)",
        "Describe the complete Linux system boot sequence from power-on to user login prompt. (6 Marks)"
      ],
      "longAnswer": [
        "Explain Virtual Machine architecture. Differentiate Type-1 (Bare-metal) and Type-2 (Hosted) hypervisors. Discuss use cases for KVM, VMware ESXi, VirtualBox. (10 Marks)"
      ]
    }
  },
  {
    "title": "Process Management",
    "slug": "os-process-management",
    "order": 3,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master process concepts: Introduction to Processes (Program vs Process), Process States (New, Ready, Running, Waiting, Terminated), Process Control Block (PCB) structure, Process Creation (fork()) and Termination (exit()), Context Switching mechanism, Parent-Child Process relationships, Process Scheduling Concepts, and Inter-Process Communication (IPC: Pipes, Shared Memory, Message Queues, Signals, Sockets).",
    "subTopics": [
      "Introduction to Processes",
      "Program vs Process",
      "Process States",
      "Process Control Block (PCB)",
      "Process Creation and Termination",
      "Context Switching",
      "Parent and Child Processes",
      "Process Scheduling Concepts",
      "Inter-Process Communication (IPC)"
    ],
    "prerequisiteTitles": [
      "Operating System Architecture"
    ],
    "learningObjectives": [
      "Define a Process as a program in execution and distinguish it from a program (passive entity).",
      "Explain 5-state process model: New → Ready → Running → Waiting → Terminated with transition diagram.",
      "Describe PCB fields: PID, Process State, PC (Program Counter), CPU Registers, Memory Limits, Open Files list.",
      "Implement process creation using fork() and IPC using pipes in C."
    ],
    "notes": [
      {
        "title": "Process State Diagram, PCB Structure, and IPC Code Examples",
        "content": "PROCESS MANAGEMENT\n\n1. Program vs Process:\n   - Program: Passive entity stored on disk (executable file). Static.\n   - Process: Active entity in execution. Has program code (text section), stack, heap, data section.\n\n2. Process State Transition Diagram:\n   \n   [New] --admitted--> [Ready] --scheduler dispatch--> [Running]\n                         ↑                                |\n                   I/O complete                     I/O or event wait\n                         |                                ↓\n                      [Waiting] <-----------           [Terminated]\n\n3. Process Control Block (PCB) Fields:\n   - Process ID (PID): Unique integer identifier.\n   - Process State: New/Ready/Running/Waiting/Terminated.\n   - Program Counter: Address of next instruction to execute.\n   - CPU Registers: Accumulator, index registers, stack pointer.\n   - CPU Scheduling Info: Priority, scheduling queue pointers.\n   - Memory Management Info: Page tables, segment tables, base/limit registers.\n   - Accounting Info: CPU time used, real time used.\n   - I/O Status Info: List of I/O devices, open files.\n\n4. Process Creation in C (fork()):\n   ```c\n   #include <stdio.h>\n   #include <unistd.h>\n   #include <sys/wait.h>\n   \n   int main() {\n       pid_t pid = fork();\n       if (pid < 0) {\n           perror(\"fork failed\");\n       } else if (pid == 0) {\n           // Child process\n           printf(\"Child process: PID=%d, Parent PID=%d\\n\", getpid(), getppid());\n       } else {\n           // Parent process\n           printf(\"Parent process: PID=%d, Child PID=%d\\n\", getpid(), pid);\n           wait(NULL); // Wait for child to complete\n       }\n       return 0;\n   }\n   ```\n\n5. IPC Using Pipes in C:\n   ```c\n   #include <stdio.h>\n   #include <unistd.h>\n   #include <string.h>\n   \n   int main() {\n       int pipefd[2];\n       char buffer[50];\n       pipe(pipefd);  // Create pipe\n       \n       if (fork() == 0) {  // Child: reader\n           close(pipefd[1]);  // Close write end\n           read(pipefd[0], buffer, 50);\n           printf(\"Child received: %s\\n\", buffer);\n           close(pipefd[0]);\n       } else {  // Parent: writer\n           close(pipefd[0]);  // Close read end\n           char *msg = \"Hello from parent!\";\n           write(pipefd[1], msg, strlen(msg)+1);\n           close(pipefd[1]);\n       }\n       return 0;\n   }\n   ```"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Operating System Concepts",
        "author": "Silberschatz, Galvin"
      },
      {
        "title": "The Linux Programming Interface",
        "author": "Michael Kerrisk"
      }
    ],
    "practiceLinks": [
      {
        "title": "OS Process Management Problems - GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/processes-in-linuxunix/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Distinguish between a Program and a Process. (2 Marks)",
        "Draw and explain the 5-state Process State Transition Diagram. (2 Marks)",
        "List the fields of a Process Control Block (PCB). (2 Marks)"
      ],
      "sixMarks": [
        "Explain Context Switching mechanism with diagram. What overhead does it introduce? (6 Marks)",
        "Describe Inter-Process Communication (IPC) mechanisms: Pipes, Shared Memory, Message Queues, and Signals with advantages of each. (6 Marks)"
      ],
      "longAnswer": [
        "Write a C program to demonstrate process creation using fork() and IPC between parent and child processes using unnamed pipes. Trace execution with diagrams. (10 Marks)"
      ]
    }
  },
  {
    "title": "Threads and Multithreading",
    "slug": "os-threads-and-multithreading",
    "order": 4,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Understand threads and concurrency: Introduction to Threads (lightweight processes sharing address space), Process vs Thread comparison, Benefits of Multithreading (Responsiveness, Resource Sharing, Economy, Scalability), User-Level Threads vs Kernel-Level Threads, Thread Libraries (POSIX Pthreads, Java Threads, Win32 API), Multithreaded Programming patterns, and Thread Synchronization basics (race conditions).",
    "subTopics": [
      "Introduction to Threads",
      "Process vs Thread",
      "Benefits of Multithreading",
      "User-Level Threads",
      "Kernel-Level Threads",
      "Thread Libraries",
      "Multithreaded Programming",
      "Thread Synchronization Basics"
    ],
    "prerequisiteTitles": [
      "Process Management"
    ],
    "learningObjectives": [
      "Define a Thread as the basic unit of CPU utilization sharing process code, data, and OS resources.",
      "Contrast User-Level Threads (Many-to-One model) and Kernel-Level Threads (One-to-One, Many-to-Many models).",
      "Write multithreaded programs using POSIX pthreads library in C."
    ],
    "notes": [
      {
        "title": "Thread vs Process Comparison and Pthreads Code",
        "content": "THREADS AND MULTITHREADING\n\n1. Thread vs Process Comparison:\n   ┌──────────────────┬───────────────────────────────┬───────────────────────────────┐\n   │ Feature          │ Process                       │ Thread                        │\n   ├──────────────────┼───────────────────────────────┼───────────────────────────────┤\n   │ Address Space    │ Separate per process          │ Shared within process         │\n   │ Communication    │ IPC (expensive)               │ Shared memory (fast)          │\n   │ Creation         │ Expensive (fork())            │ Lightweight                   │\n   │ Context Switch   │ Heavy                         │ Light                         │\n   │ Resource         │ Own code, data, heap, files   │ Shared code, data, heap       │\n   │ Private          │ Own memory space              │ Own stack, registers, PC      │\n   └──────────────────┴───────────────────────────────┴───────────────────────────────┘\n\n2. Benefits of Multithreading:\n   a) Responsiveness: UI thread continues while background thread processes data.\n   b) Resource Sharing: Threads share process address space — no need for IPC.\n   c) Economy: Thread creation faster than process creation. Context switch overhead lower.\n   d) Scalability: Threads can run in parallel on multi-core CPUs.\n\n3. POSIX Pthreads Example in C:\n   ```c\n   #include <stdio.h>\n   #include <pthread.h>\n   \n   void* thread_function(void* arg) {\n       int thread_num = *(int*)arg;\n       printf(\"Thread %d running: TID=%lu\\n\", thread_num, pthread_self());\n       return NULL;\n   }\n   \n   int main() {\n       pthread_t threads[3];\n       int ids[3] = {1, 2, 3};\n       \n       for (int i = 0; i < 3; i++) {\n           pthread_create(&threads[i], NULL, thread_function, &ids[i]);\n       }\n       for (int i = 0; i < 3; i++) {\n           pthread_join(threads[i], NULL);  // Wait for threads\n       }\n       printf(\"All threads completed.\\n\");\n       return 0;\n   }\n   // Compile: gcc -o threads threads.c -lpthread\n   ```\n\n4. Thread Models:\n   - Many-to-One (Green Threads): Multiple user-level threads mapped to one kernel thread.\n     Pro: Efficient. Con: Entire process blocks on I/O.\n   - One-to-One: Each user thread maps to one kernel thread. Examples: Linux POSIX, Windows.\n   - Many-to-Many: Multiple user threads mapped to ≤ equal kernel threads. Best flexibility."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Operating System Concepts",
        "author": "Silberschatz"
      },
      {
        "title": "Programming with POSIX Threads",
        "author": "David Butenhof"
      }
    ],
    "practiceLinks": [
      {
        "title": "Pthreads Tutorial",
        "url": "https://hpc-tutorials.llnl.gov/posix/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is a Thread? How does it differ from a Process? (2 Marks)",
        "List four benefits of Multithreading. (2 Marks)",
        "Differentiate User-Level Threads and Kernel-Level Threads. (2 Marks)"
      ],
      "sixMarks": [
        "Explain the three thread models: Many-to-One, One-to-One, Many-to-Many with diagrams. (6 Marks)",
        "Write a C program using POSIX pthreads to create 3 threads that print their thread IDs. (6 Marks)"
      ],
      "longAnswer": [
        "Discuss thread synchronization problem - race conditions. Explain critical section problem and show how mutex locks (pthread_mutex_lock/unlock) solve data race in a bank account deposit program. (10 Marks)"
      ]
    }
  },
  {
    "title": "CPU Scheduling",
    "slug": "os-cpu-scheduling-algorithms",
    "order": 5,
    "estimatedHours": 6,
    "difficulty": "Intermediate",
    "description": "Master CPU scheduling algorithms: Introduction to CPU Scheduling, Scheduling Criteria (CPU utilization, Throughput, Turnaround Time, Waiting Time, Response Time), Preemptive vs Non-Preemptive scheduling, FCFS (First Come First Serve), SJF (Shortest Job First), SRTF (Shortest Remaining Time First), Priority Scheduling, Round Robin (RR), Multilevel Queue, Multilevel Feedback Queue (MLFQ), and Algorithm Comparison with numerical problems.",
    "subTopics": [
      "Introduction to CPU Scheduling",
      "Scheduling Criteria",
      "Preemptive and Non-Preemptive Scheduling",
      "First Come First Serve (FCFS)",
      "Shortest Job First (SJF)",
      "Shortest Remaining Time First (SRTF)",
      "Priority Scheduling",
      "Round Robin Scheduling",
      "Multilevel Queue Scheduling",
      "Multilevel Feedback Queue",
      "Scheduling Algorithm Comparison"
    ],
    "prerequisiteTitles": [
      "Process Management",
      "Threads and Multithreading"
    ],
    "learningObjectives": [
      "Define 5 CPU scheduling criteria: CPU utilization, Throughput, Turnaround Time (TAT), Waiting Time (WT), Response Time.",
      "Compute Gantt chart, TAT, WT, Average WT for FCFS, SJF, SRTF, Priority, and Round Robin.",
      "Identify Convoy Effect in FCFS and Starvation problem in Priority Scheduling with solutions."
    ],
    "notes": [
      {
        "title": "CPU Scheduling Algorithms - Gantt Charts and Solved Numericals",
        "content": "CPU SCHEDULING ALGORITHMS\n\n1. Scheduling Criteria:\n   - CPU Utilization: Keep CPU busy as much as possible (maximize).\n   - Throughput: Number of processes completed per unit time (maximize).\n   - Turnaround Time (TAT): Time from submission to completion. TAT = Completion Time - Arrival Time (minimize).\n   - Waiting Time (WT): Total time spent in Ready Queue. WT = TAT - Burst Time (minimize).\n   - Response Time: Time from submission to first CPU response (minimize). Critical for interactive systems.\n\n2. FCFS (Non-Preemptive) Example:\n   Processes: P1(AT=0, BT=24), P2(AT=1, BT=3), P3(AT=2, BT=3)\n   Gantt: | P1:0-24 | P2:24-27 | P3:27-30 |\n   WT: P1=0, P2=23, P3=25. Average WT = (0+23+25)/3 = 16 ms.\n   Problem: Convoy Effect - short processes wait behind long processes.\n\n3. SJF (Non-Preemptive) Example:\n   Processes: P1(AT=0,BT=8), P2(AT=1,BT=4), P3(AT=2,BT=9), P4(AT=3,BT=5)\n   At t=0: Only P1 available → run P1 till t=8.\n   At t=8: P2(BT=4), P3(BT=9), P4(BT=5) → shortest=P2.\n   Gantt: | P1:0-8 | P2:8-12 | P4:12-17 | P3:17-26 |\n   Average WT = (0+7+9+15)/4 = 7.75 ms (optimal for non-preemptive).\n\n4. Round Robin (Quantum = 4):\n   Processes: P1(BT=24), P2(BT=3), P3(BT=3)\n   Gantt: |P1:0-4|P2:4-7|P3:7-10|P1:10-14|P1:14-18|P1:18-22|P1:22-26|P1:26-30|\n   Good response time. Context switching overhead.\n\n5. Priority Scheduling:\n   - Assign integer priority to each process. Lower number = higher priority (typically).\n   - Problem: Starvation (low priority processes may never execute).\n   - Solution: Aging - gradually increase priority of waiting processes.\n\n6. Scheduling Algorithm Comparison:\n   ┌─────────────────┬─────────────┬──────────────┬──────────────────────────────────┐\n   │ Algorithm       │ Preemptive  │ Starvation?  │ Best Use                         │\n   ├─────────────────┼─────────────┼──────────────┼──────────────────────────────────┤\n   │ FCFS            │ No          │ No           │ Batch systems                    │\n   │ SJF             │ No          │ Yes          │ Batch, known burst times         │\n   │ SRTF            │ Yes         │ Yes          │ Preemptive SJF optimal           │\n   │ Priority        │ Both        │ Yes          │ Real-time, critical systems      │\n   │ Round Robin     │ Yes         │ No           │ Time-sharing, interactive systems│\n   │ MLFQ            │ Yes         │ No           │ General purpose OS               │\n   └─────────────────┴─────────────┴──────────────┴──────────────────────────────────┘"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Operating System Concepts",
        "author": "Silberschatz, Galvin"
      }
    ],
    "practiceLinks": [
      {
        "title": "CPU Scheduling Practice Problems GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/cpu-scheduling-in-operating-systems/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is CPU Scheduling? State its scheduling criteria. (2 Marks)",
        "Distinguish between Preemptive and Non-Preemptive Scheduling. (2 Marks)",
        "What is the Convoy Effect in FCFS scheduling? (2 Marks)"
      ],
      "sixMarks": [
        "Given 4 processes with arrival times and burst times, draw Gantt charts and compute Average Waiting Time for FCFS, SJF, and Round Robin (Quantum=2). (6 Marks)",
        "Explain Priority Scheduling. What is Starvation? How does Aging solve it? (6 Marks)"
      ],
      "longAnswer": [
        "Compare all CPU scheduling algorithms (FCFS, SJF, SRTF, Priority, Round Robin, MLFQ) with solved numerical examples, Gantt charts, and performance metrics analysis. Recommend suitable algorithm for interactive OS. (10 Marks)"
      ]
    }
  },
  {
    "title": "Process Synchronization",
    "slug": "os-process-synchronization",
    "order": 6,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Solve synchronization problems: Introduction to Synchronization, Race Conditions (concurrent access to shared data), Critical Section Problem and its 3 requirements (Mutual Exclusion, Progress, Bounded Waiting), Mutual Exclusion techniques, Semaphores (Binary and Counting), Mutex Locks, Monitors, and Classical Synchronization Problems: Producer-Consumer, Readers-Writers, Dining Philosophers.",
    "subTopics": [
      "Introduction to Synchronization",
      "Race Conditions",
      "Critical Section Problem",
      "Mutual Exclusion",
      "Semaphores",
      "Mutex Locks",
      "Monitors",
      "Producer Consumer Problem",
      "Readers Writers Problem",
      "Dining Philosophers Problem"
    ],
    "prerequisiteTitles": [
      "Threads and Multithreading"
    ],
    "learningObjectives": [
      "Identify race conditions in concurrent programs accessing shared resources.",
      "State the 3 requirements of critical section solution: Mutual Exclusion, Progress, Bounded Waiting.",
      "Implement Producer-Consumer solution using semaphores in C with POSIX sem_init(), sem_wait(), sem_post()."
    ],
    "notes": [
      {
        "title": "Semaphores, Mutex, and Classical Synchronization Problem Solutions",
        "content": "PROCESS SYNCHRONIZATION\n\n1. Race Condition Example:\n   ```c\n   // Shared variable: int count = 5;\n   // Thread 1: count++  →  register = count; register = register+1; count = register;\n   // Thread 2: count--  →  register = count; register = register-1; count = register;\n   // Result: count may be 4, 5, or 6 depending on interleaving! (Race Condition)\n   ```\n\n2. Critical Section Requirements:\n   a) Mutual Exclusion: Only one process can be in critical section at a time.\n   b) Progress: If no process is in CS and some want to enter, selection cannot be postponed indefinitely.\n   c) Bounded Waiting: Limit on number of times other processes enter CS before a waiting process.\n\n3. Semaphore Operations:\n   - wait(S) [P operation]: while(S<=0); S--;  [Decrement → blocks if 0]\n   - signal(S) [V operation]: S++;  [Increment → unblocks waiting process]\n   - Binary Semaphore: S ∈ {0,1} → used as mutex.\n   - Counting Semaphore: S = N (resource count).\n\n4. Producer-Consumer with Semaphores (C):\n   ```c\n   #include <stdio.h>\n   #include <pthread.h>\n   #include <semaphore.h>\n   \n   #define BUFFER_SIZE 5\n   int buffer[BUFFER_SIZE];\n   int in = 0, out = 0;\n   sem_t empty, full, mutex;\n   \n   void* producer(void* arg) {\n       for (int i = 1; i <= 5; i++) {\n           sem_wait(&empty);   // Wait for empty slot\n           sem_wait(&mutex);   // Enter critical section\n           buffer[in] = i;\n           printf(\"Produced: %d at %d\\n\", i, in);\n           in = (in + 1) % BUFFER_SIZE;\n           sem_post(&mutex);   // Exit critical section\n           sem_post(&full);    // Signal full slot\n       }\n       return NULL;\n   }\n   \n   void* consumer(void* arg) {\n       for (int i = 1; i <= 5; i++) {\n           sem_wait(&full);    // Wait for full slot\n           sem_wait(&mutex);   // Enter critical section\n           int item = buffer[out];\n           printf(\"Consumed: %d from %d\\n\", item, out);\n           out = (out + 1) % BUFFER_SIZE;\n           sem_post(&mutex);   // Exit critical section\n           sem_post(&empty);   // Signal empty slot\n       }\n       return NULL;\n   }\n   \n   int main() {\n       sem_init(&empty, 0, BUFFER_SIZE);\n       sem_init(&full, 0, 0);\n       sem_init(&mutex, 0, 1);\n       pthread_t prod, cons;\n       pthread_create(&prod, NULL, producer, NULL);\n       pthread_create(&cons, NULL, consumer, NULL);\n       pthread_join(prod, NULL);\n       pthread_join(cons, NULL);\n       return 0;\n   }\n   ```\n\n5. Dining Philosophers Problem:\n   - 5 philosophers sit around table. 5 chopsticks between them. Need both left+right chopstick to eat.\n   - Deadlock-free solution: Allow only 4 philosophers to sit simultaneously. OR use asymmetric rule.\n   \n   ```c\n   sem_t chopstick[5]; // Initialize all to 1\n   // Philosopher i:\n   void philosopher(int i) {\n       sem_wait(&chopstick[i]);\n       sem_wait(&chopstick[(i+1) % 5]);\n       eat();  // Critical section\n       sem_post(&chopstick[i]);\n       sem_post(&chopstick[(i+1) % 5]);\n       think();\n   }\n   ```"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Operating System Concepts",
        "author": "Silberschatz, Galvin"
      },
      {
        "title": "Modern Operating Systems",
        "author": "Tanenbaum"
      }
    ],
    "practiceLinks": [
      {
        "title": "Synchronization Problems GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/process-synchronization-set-1/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is a Race Condition? Give an example with shared variable. (2 Marks)",
        "State the 3 requirements for a Critical Section solution. (2 Marks)",
        "What is a Semaphore? Distinguish Binary and Counting Semaphores. (2 Marks)"
      ],
      "sixMarks": [
        "Explain the Producer-Consumer problem. Provide semaphore-based solution with wait/signal operations. (6 Marks)",
        "Describe the Dining Philosophers problem. Why does a naive solution lead to deadlock? Provide a deadlock-free solution. (6 Marks)"
      ],
      "longAnswer": [
        "Solve the Readers-Writers problem using semaphores. Handle both Reader-Priority and Writer-Priority variants. Show C code with semaphore operations and explain synchronization protocol. (10 Marks)"
      ]
    }
  },
  {
    "title": "Deadlocks",
    "slug": "os-deadlocks",
    "order": 7,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Understand and handle deadlocks: Introduction to Deadlocks, Four Necessary Conditions (Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait), Deadlock Prevention (eliminate ≥1 condition), Deadlock Avoidance (Banker's Algorithm, Resource Allocation Graph), Deadlock Detection (Wait-for graph), and Deadlock Recovery (Process Termination, Resource Preemption).",
    "subTopics": [
      "Introduction to Deadlocks",
      "Deadlock Conditions",
      "Deadlock Prevention",
      "Deadlock Avoidance",
      "Banker's Algorithm",
      "Deadlock Detection",
      "Deadlock Recovery"
    ],
    "prerequisiteTitles": [
      "Process Synchronization"
    ],
    "learningObjectives": [
      "Identify the four necessary conditions for deadlock: Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait.",
      "Apply Banker's Algorithm to determine safe states and safe sequences.",
      "Distinguish Deadlock Prevention, Avoidance, Detection, and Recovery strategies."
    ],
    "notes": [
      {
        "title": "Deadlock Conditions, Banker's Algorithm Solved Example",
        "content": "DEADLOCKS\n\n1. Four Necessary Conditions (Coffman's Conditions):\n   All 4 must hold simultaneously for deadlock:\n   a) Mutual Exclusion: Resource held in non-shareable mode.\n   b) Hold and Wait: Process holds ≥1 resource and waits for additional resources.\n   c) No Preemption: Resources cannot be forcibly taken from process.\n   d) Circular Wait: Circular chain P1→R1→P2→R2→...→Pn→Rn→P1.\n\n2. Deadlock Prevention (eliminate one condition):\n   - Mutual Exclusion: Make resources sharable (not always possible).\n   - Hold & Wait: Process must request all resources at once before execution.\n   - No Preemption: Preempt resources from holding process.\n   - Circular Wait: Impose total ordering on resource types. Request in increasing order only.\n\n3. Banker's Algorithm Example (Deadlock Avoidance):\n   5 processes (P0-P4), 3 resource types (A=10, B=5, C=7)\n   \n   Allocation Matrix:    Max Matrix:       Available: A=3, B=3, C=2\n   P0: [0,1,0]           P0: [7,5,3]\n   P1: [2,0,0]           P1: [3,2,2]\n   P2: [3,0,2]           P2: [9,0,2]\n   P3: [2,1,1]           P3: [2,2,2]\n   P4: [0,0,2]           P4: [4,3,3]\n   \n   Need = Max - Allocation:\n   P0: [7,4,3], P1: [1,2,2], P2: [6,0,0], P3: [0,1,1], P4: [4,3,1]\n   \n   Safe Sequence Check:\n   Step 1: Available=[3,3,2]. Need[P1]=[1,2,2] ≤ [3,3,2]. Run P1. Available=[3,3,2]+[2,0,0]=[5,3,2].\n   Step 2: Available=[5,3,2]. Need[P3]=[0,1,1] ≤ [5,3,2]. Run P3. Available=[5,3,2]+[2,1,1]=[7,4,3].\n   Step 3: Need[P4]=[4,3,1] ≤ [7,4,3]. Run P4. Available=[7,4,3]+[0,0,2]=[7,4,5].\n   Step 4: Need[P0]=[7,4,3] ≤ [7,4,5]. Run P0. Available=[7,5,5].\n   Step 5: Need[P2]=[6,0,0] ≤ [7,5,5]. Run P2. \n   Safe Sequence: P1→P3→P4→P0→P2 ✓\n\n4. Deadlock Recovery:\n   a) Process Termination: Abort all deadlocked processes. OR abort one at a time until deadlock broken.\n   b) Resource Preemption: Select victim process. Rollback to safe state. Starvation prevention: limit preemptions."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Operating System Concepts",
        "author": "Silberschatz, Galvin"
      }
    ],
    "practiceLinks": [
      {
        "title": "Deadlock and Banker's Algorithm Practice",
        "url": "https://www.geeksforgeeks.org/deadlock-in-operating-systems/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State the four necessary conditions for deadlock. (2 Marks)",
        "What is a Resource Allocation Graph? How does it detect deadlock? (2 Marks)",
        "Distinguish Deadlock Prevention and Deadlock Avoidance. (2 Marks)"
      ],
      "sixMarks": [
        "Explain the Banker's Algorithm for Deadlock Avoidance. Apply it to find safe sequence for given allocation and max matrices. (6 Marks)",
        "Explain Deadlock Recovery strategies: Process Termination and Resource Preemption. Discuss trade-offs. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive analysis of Deadlock: Conditions, Prevention methods (with examples), Avoidance using Banker's Algorithm (with numerical), Detection using Wait-for graph, and Recovery strategies. (10 Marks)"
      ]
    }
  },
  {
    "title": "Memory Management",
    "slug": "os-memory-management",
    "order": 8,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master memory management techniques: Introduction, Logical vs Physical Address Space, Address Binding (compile/load/execution time), Contiguous Memory Allocation (Fixed Partitioning, Dynamic Partitioning), Internal and External Fragmentation, First Fit/Best Fit/Worst Fit allocation strategies, Paging (page table, page size), Segmentation (segment table), and Translation Lookaside Buffer (TLB).",
    "subTopics": [
      "Introduction to Memory Management",
      "Logical and Physical Address",
      "Address Binding",
      "Contiguous Memory Allocation",
      "Fragmentation",
      "Paging",
      "Segmentation",
      "Page Tables",
      "Translation Lookaside Buffer (TLB)"
    ],
    "prerequisiteTitles": [
      "Process Management"
    ],
    "learningObjectives": [
      "Distinguish Logical Address (generated by CPU) and Physical Address (seen by memory unit).",
      "Explain Paging: divide memory into fixed-size frames; logical address = page number + offset.",
      "Calculate physical address from logical address using page table. Compute effective access time with TLB."
    ],
    "notes": [
      {
        "title": "Paging Address Translation and TLB Effective Access Time Calculation",
        "content": "MEMORY MANAGEMENT\n\n1. Logical vs Physical Address:\n   - Logical Address (Virtual Address): Generated by CPU during execution. 0-based per process.\n   - Physical Address: Actual hardware RAM address.\n   - Memory Management Unit (MMU): Translates Logical → Physical using relocation register (base register).\n\n2. Address Binding Times:\n   a) Compile Time: If memory location is known at compile time → absolute code generated.\n   b) Load Time: Relocatable code generated. Absolute address computed at load time.\n   c) Execution Time: Binding deferred until runtime. Requires hardware support (base and limit registers).\n\n3. Contiguous Memory Allocation:\n   - Fixed Partitioning: Memory divided into fixed-size partitions. Internal fragmentation.\n   - Dynamic Partitioning: Partitions created as needed. External fragmentation.\n   \n   Allocation Strategies:\n   - First Fit: Allocate first hole large enough. Fast.\n   - Best Fit: Allocate smallest hole that fits. Minimizes wasted space.\n   - Worst Fit: Allocate largest hole. Leaves large leftover holes.\n\n4. Paging:\n   - Physical memory divided into fixed-size blocks called FRAMES.\n   - Logical memory divided into blocks called PAGES (same size as frames).\n   - No external fragmentation! Only internal fragmentation (last page may be partial).\n   \n   Address Translation:\n   - Logical Address = [Page Number (p)] [Page Offset (d)]\n   - Physical Address = Frame Number (from page table) + offset\n   \n   Example: Page size = 4 KB = 4096 bytes. Logical address = 8196.\n   - Page number = 8196 / 4096 = 2 (page 2)\n   - Offset = 8196 % 4096 = 4 (byte 4 in page 2)\n   - If page 2 → frame 5: Physical address = 5×4096 + 4 = 20484\n\n5. TLB (Translation Lookaside Buffer):\n   - Fast hardware cache for page table entries.\n   - TLB hit: Access time = TLB access time + Memory access time.\n   - TLB miss: Access time = TLB access time + 2×Memory access time (page table lookup + data).\n   \n   Effective Access Time (EAT):\n   EAT = α(t_TLB + t_mem) + (1-α)(t_TLB + 2×t_mem)\n   Where α = TLB hit ratio, t_TLB = TLB access time, t_mem = Memory access time.\n   \n   Example: α=0.8, t_TLB=20ns, t_mem=100ns\n   EAT = 0.8(20+100) + 0.2(20+200) = 0.8(120) + 0.2(220) = 96 + 44 = 140 ns"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Operating System Concepts",
        "author": "Silberschatz"
      }
    ],
    "practiceLinks": [
      {
        "title": "Memory Management Problems",
        "url": "https://www.geeksforgeeks.org/memory-management-in-operating-system/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Distinguish Logical Address and Physical Address. What is the role of MMU? (2 Marks)",
        "What is Paging? How does it eliminate external fragmentation? (2 Marks)",
        "What is TLB? Calculate EAT given TLB hit ratio = 0.9, TLB time = 10ns, Memory time = 100ns. (2 Marks)"
      ],
      "sixMarks": [
        "Explain Paging with address translation diagram. Given page size 512B and page table, find physical addresses for logical addresses 0, 512, 1024. (6 Marks)",
        "Compare Paging and Segmentation. Which technique better supports sharing and protection? Justify. (6 Marks)"
      ],
      "longAnswer": [
        "Describe memory management hierarchy: Fixed partitioning (internal fragmentation) → Dynamic partitioning (external fragmentation) → Paging (TLB, multi-level page table) → Segmentation → Segmentation with paging. Include numerical examples for each. (10 Marks)"
      ]
    }
  },
  {
    "title": "Virtual Memory",
    "slug": "os-virtual-memory",
    "order": 9,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Master virtual memory: Introduction to Virtual Memory (process larger than physical memory), Demand Paging (load pages on demand), Page Faults and handling sequence, Page Replacement Algorithms (FIFO, Optimal, LRU, LFU), Belady's Anomaly in FIFO, Thrashing phenomenon, and Working Set Model for process frame allocation.",
    "subTopics": [
      "Introduction to Virtual Memory",
      "Demand Paging",
      "Page Faults",
      "FIFO Page Replacement",
      "Optimal Algorithm",
      "LRU Page Replacement",
      "LFU Page Replacement",
      "Thrashing",
      "Working Set Model"
    ],
    "prerequisiteTitles": [
      "Memory Management"
    ],
    "learningObjectives": [
      "Explain Demand Paging: pages loaded only when referenced, reducing initial load time and memory usage.",
      "Calculate page fault rates for FIFO, Optimal, and LRU algorithms given reference string and frame count.",
      "Identify Belady's Anomaly: FIFO page faults may increase with more frames."
    ],
    "notes": [
      {
        "title": "Page Replacement Algorithms - FIFO, Optimal, LRU Solved Examples",
        "content": "VIRTUAL MEMORY\n\n1. Demand Paging:\n   - Pages loaded into physical memory only when first accessed (on page fault).\n   - Valid-Invalid bit in page table: V=valid (page in memory), I=invalid (page on disk).\n   - Page Fault Handling: Hardware trap → OS saves state → find page on disk → load page → restart instruction.\n\n2. Page Replacement Algorithms:\n   Reference String: 7 0 1 2 0 3 0 4 2 3 0 3 2 1 2 0 1 7 0 1\n   Number of Frames: 3\n\n   FIFO (First In First Out):\n   - Replaces oldest page in memory.\n   - Page Faults: 15\n   - Problem: Belady's Anomaly (more frames → more faults in FIFO)\n   \n   Optimal Algorithm:\n   - Replace page that will NOT be used for longest future time. (Requires future knowledge)\n   - Page Faults: 9 (minimum possible - used as benchmark)\n   \n   LRU (Least Recently Used):\n   - Replace page that has not been used for longest past time.\n   - Page Faults: 12 (good approximation of Optimal)\n   \n   Example - LRU (3 frames, string: 1 2 3 4 1 2 5 1 2 3 4 5):\n   Frame state and faults:\n   1: [1] F | 2: [1,2] F | 3: [1,2,3] F | 4: [4,2,3] F | 1: [4,1,3] F | 2: [4,1,2] F |\n   5: [5,1,2] F | 1: [5,1,2] | 2: [5,1,2] | 3: [3,1,2] F | 4: [3,4,2] F | 5: [3,4,5] F\n   Total Page Faults: 10\n\n3. Belady's Anomaly:\n   - Paradox: Increasing number of frames may increase page faults with FIFO.\n   - Example: 3 frames → 9 faults; 4 frames → 10 faults (with string: 1 2 3 4 1 2 5 1 2 3 4 5).\n   - LRU and Optimal do NOT exhibit Belady's Anomaly (stack algorithms).\n\n4. Thrashing:\n   - Process spends more time paging than executing.\n   - Cause: Too many processes, too few frames per process.\n   - Detection: CPU utilization drops despite adding more processes.\n   - Solution: Working Set Model, Page Fault Frequency.\n\n5. Working Set Model:\n   - Working Set W(t, Δ) = Set of pages used in last Δ time units.\n   - Provide each process enough frames to hold its working set.\n   - Total working set size D = Σ|W(ti, Δ)|. If D > total frames → suspend a process."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Operating System Concepts",
        "author": "Silberschatz, Galvin"
      }
    ],
    "practiceLinks": [
      {
        "title": "Page Replacement Problems",
        "url": "https://www.geeksforgeeks.org/page-replacement-algorithms-in-operating-systems/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is Virtual Memory? How does Demand Paging implement it? (2 Marks)",
        "What is a Page Fault? Describe the page fault handling sequence. (2 Marks)",
        "What is Belady's Anomaly? Which algorithm suffers from it? (2 Marks)"
      ],
      "sixMarks": [
        "Apply FIFO, Optimal, and LRU page replacement algorithms on reference string: 1,2,3,4,1,2,5,1,2,3,4,5 with 3 frames. Count total page faults for each. (6 Marks)",
        "Explain Thrashing and the Working Set Model. How does the working set prevent thrashing? (6 Marks)"
      ],
      "longAnswer": [
        "Complete analysis of Virtual Memory system: Demand paging mechanism, page fault handling (trap → OS → disk I/O → restart), comparison of FIFO/Optimal/LRU/LFU algorithms with solved examples, Belady's anomaly demonstration, and thrashing prevention strategies. (10 Marks)"
      ]
    }
  },
  {
    "title": "File System Management",
    "slug": "os-file-system-management",
    "order": 10,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Understand file systems: Introduction to File Systems (purpose, abstraction over disk), File Concepts (name, type, size, attributes), File Operations (create, read, write, delete, seek), Directory Structures (single-level, two-level, tree-structured, acyclic graph), File Allocation Methods (Contiguous, Linked, Indexed), File Protection mechanisms (access control lists), and File System Implementation (superblock, i-nodes).",
    "subTopics": [
      "Introduction to File Systems",
      "File Concepts and Attributes",
      "File Operations",
      "Directory Structures",
      "Contiguous Allocation",
      "Linked Allocation",
      "Indexed Allocation",
      "File Protection",
      "File System Implementation"
    ],
    "prerequisiteTitles": [
      "Memory Management"
    ],
    "learningObjectives": [
      "Define a file as a named collection of related information stored on secondary storage.",
      "Compare three file allocation methods: Contiguous (fast sequential), Linked (dynamic), Indexed (direct access).",
      "Explain UNIX i-node structure for file metadata storage and multi-level indirect block addressing."
    ],
    "notes": [
      {
        "title": "File Allocation Methods Comparison and i-node Structure",
        "content": "FILE SYSTEM MANAGEMENT\n\n1. File Concepts:\n   - File: Named collection of related information on secondary storage.\n   - File Attributes: Name, Type, Size, Location (pointer to device), Protection (permissions), Time/Date, User ID.\n   - File Types: Text (.txt, .c), Binary (.exe, .obj), Directory files.\n\n2. Directory Structures:\n   - Single-Level: All files in one directory. Naming conflicts if multiple users.\n   - Two-Level: Root directory + user directories. No naming conflicts between users.\n   - Tree-Structured: Hierarchical. Absolute path (/home/user/docs/file.txt). Current working directory.\n   - Acyclic Graph: Shared files/directories via links. Allow sharing without duplication.\n\n3. File Allocation Methods:\n   ┌─────────────────┬────────────────────────────────────────┬─────────────────────────────────┐\n   │ Method          │ How it works                           │ Pros & Cons                     │\n   ├─────────────────┼────────────────────────────────────────┼─────────────────────────────────┤\n   │ Contiguous      │ File stored in consecutive blocks      │ Fast sequential & direct access.│\n   │                 │ Directory: [start_block, length]       │ External fragmentation. Rigid.  │\n   ├─────────────────┼────────────────────────────────────────┼─────────────────────────────────┤\n   │ Linked          │ Each block has pointer to next block   │ No external fragmentation.      │\n   │                 │ Directory: [start_pointer]             │ Slow random access. Pointers    │\n   │                 │                                        │ waste space. Unreliable.        │\n   ├─────────────────┼────────────────────────────────────────┼─────────────────────────────────┤\n   │ Indexed         │ Index block holds all block pointers   │ Direct access. No fragmentation.│\n   │ (i-node)        │ Directory: [index_block]               │ Index block overhead.           │\n   └─────────────────┴────────────────────────────────────────┴─────────────────────────────────┘\n\n4. UNIX i-node (Index Node) Structure:\n   - 15 block pointers per i-node:\n     - Direct pointers [0..11]: 12 direct block addresses → 12 × 4KB = 48 KB\n     - Single Indirect [12]: Points to block of 1024 pointers → 1024 × 4KB = 4 MB\n     - Double Indirect [13]: → 1024 × 1024 × 4KB = 4 GB\n     - Triple Indirect [14]: → 1024³ × 4KB = 4 TB (theoretical max file size)\n\n5. File Protection:\n   - UNIX permissions: Read(r)=4, Write(w)=2, Execute(x)=1\n   - Permission bits: [user|group|others] e.g., 755 = rwxr-xr-x\n   - Access Control Lists (ACL): Explicit list of (user, permissions) pairs per file.\n   \n   ```bash\n   # Linux file permission examples\n   ls -la file.txt          # View permissions\n   chmod 644 file.txt       # rw-r--r--  (Owner: rw, Group: r, Others: r)\n   chmod 755 script.sh      # rwxr-xr-x (Executable by all)\n   chown user:group file    # Change ownership\n   ```"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Operating System Concepts",
        "author": "Silberschatz"
      }
    ],
    "practiceLinks": [
      {
        "title": "File System GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/file-systems-in-operating-system/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is a File? List its attributes. (2 Marks)",
        "Compare Contiguous, Linked, and Indexed file allocation methods. (2 Marks)",
        "Explain UNIX i-node structure and how it supports large files using indirect blocks. (2 Marks)"
      ],
      "sixMarks": [
        "Explain three directory structures: Single-Level, Two-Level, Tree-Structured with diagrams. State advantages of tree-structured directory. (6 Marks)",
        "Describe Indexed file allocation method. Calculate maximum file size using i-node with 12 direct, 1 single indirect, 1 double indirect pointers. Block size = 4 KB. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive file system analysis: File concept and types, directory structures, comparison of all three allocation methods (with access patterns), UNIX i-node detailed structure, file protection with UNIX permissions and ACL. (10 Marks)"
      ]
    }
  },
  {
    "title": "I/O Device Management",
    "slug": "os-io-device-management",
    "order": 11,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Manage I/O devices: Introduction to I/O Systems, Device Controllers (hardware), Device Drivers (software), Interrupt Handling (hardware and software interrupts, ISR), Direct Memory Access (DMA) for high-speed data transfer without CPU intervention, I/O Scheduling, Buffering techniques (Single, Double, Circular), and Spooling (Simultaneous Peripheral Operations On Line).",
    "subTopics": [
      "Introduction to I/O Systems",
      "Device Controllers",
      "Device Drivers",
      "Interrupt Handling",
      "Direct Memory Access (DMA)",
      "I/O Scheduling",
      "Buffering",
      "Spooling"
    ],
    "prerequisiteTitles": [
      "Operating System Architecture"
    ],
    "learningObjectives": [
      "Explain I/O hardware components: Device controllers, device drivers, and their interaction with OS kernel.",
      "Describe DMA operation: DMA controller transfers data between device and memory without CPU involvement.",
      "Distinguish Buffering (temporary data storage) and Spooling (queue for sequential device access like printer)."
    ],
    "notes": [
      {
        "title": "I/O System Components, DMA Operation, and Interrupt Handling",
        "content": "I/O DEVICE MANAGEMENT\n\n1. I/O System Components:\n   - Device Controller: Hardware component managing I/O device. Has local buffer and set of special-purpose registers.\n   - Device Driver: OS software component. Knows details of controller for specific device type.\n   - I/O Port Address: Each device controller has port address. CPU uses IN/OUT instructions to communicate.\n\n2. I/O Methods:\n   a) Programmed I/O (Polling): CPU continuously polls device status register until I/O complete.\n      Pro: Simple. Con: CPU busy-waits. Wastes CPU cycles.\n   b) Interrupt-Driven I/O: CPU initiates I/O and does other work. Device interrupts CPU when done.\n      Pro: CPU free during I/O. Con: Interrupt overhead for every byte.\n   c) DMA (Direct Memory Access): DMA controller manages data transfer between device and memory.\n      CPU sets up DMA (source, destination, count). DMA handles transfer. Interrupts CPU when done.\n      Pro: CPU free, high bandwidth for block transfers.\n\n3. DMA Operation Steps:\n   Step 1: CPU writes DMA command block to memory (source address, destination address, byte count).\n   Step 2: CPU programs DMA controller with address of command block → initiates transfer.\n   Step 3: DMA controller moves data between device and memory directly.\n   Step 4: DMA controller interrupts CPU on completion.\n   Step 5: CPU handles interrupt, continues normal processing.\n\n4. Interrupt Handling:\n   Hardware Interrupt: Device signals interrupt → CPU saves state → jumps to ISR (Interrupt Service Routine) → executes ISR → restores CPU state → resumes process.\n   \n   IRQ Vector Table: Maps interrupt number to ISR address.\n   \n   ```c\n   // Simplified interrupt service routine structure (conceptual)\n   void keyboard_ISR() {\n       char key = read_keyboard_port();  // Read device data\n       add_to_buffer(key);               // Buffer the character\n       acknowledge_interrupt();          // Signal controller interrupt handled\n   }\n   ```\n\n5. Buffering:\n   - Single Buffer: OS provides one buffer. While process processes buffer, device fills next.\n   - Double Buffer: Two buffers. One filling, one being consumed. Better throughput.\n   - Circular Buffer: Ring of N buffers. Producer/Consumer model. Used in audio/video streaming.\n\n6. Spooling (Simultaneous Peripheral Operations On Line):\n   - Used for devices that cannot interleave data from multiple processes (e.g., Printer).\n   - OS creates spool directory. Jobs queued to disk. Print spooler sends to printer one at a time.\n   - Example: Multiple users send print jobs. Spooler manages queue, ensures orderly printing."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Operating System Concepts",
        "author": "Silberschatz"
      }
    ],
    "practiceLinks": [
      {
        "title": "OS I/O Management GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/io-management/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is DMA? How does it improve I/O performance compared to Programmed I/O? (2 Marks)",
        "Distinguish between Buffering and Spooling with examples. (2 Marks)",
        "Explain Interrupt-Driven I/O with its ISR handling sequence. (2 Marks)"
      ],
      "sixMarks": [
        "Compare Programmed I/O, Interrupt-Driven I/O, and DMA I/O methods. Which is most efficient? Why? (6 Marks)",
        "Explain the role of Device Drivers in OS I/O subsystem. How do drivers interact with kernel and hardware? (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive I/O subsystem analysis: I/O hardware (device controllers, ports, buses), DMA operation step-by-step with diagram, interrupt handling mechanism (hardware interrupt → ISR → acknowledgment), buffering strategies (single, double, circular), and spooling for printer management. (10 Marks)"
      ]
    }
  },
  {
    "title": "Disk Management",
    "slug": "os-disk-management",
    "order": 12,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Optimize disk I/O: Disk Structure (Platter, Track, Sector, Cylinder, Head), Disk Scheduling Algorithms (FCFS, SSTF, SCAN, C-SCAN, LOOK, C-LOOK), Performance metrics (Seek Time, Rotational Latency, Transfer Time), Disk Performance Optimization, RAID levels (RAID 0, 1, 5, 6, 10), and modern Storage Management (SSD vs HDD).",
    "subTopics": [
      "Disk Structure",
      "FCFS Disk Scheduling",
      "SSTF Disk Scheduling",
      "SCAN Disk Scheduling",
      "C-SCAN Disk Scheduling",
      "LOOK and C-LOOK",
      "Disk Performance Optimization",
      "Storage Management"
    ],
    "prerequisiteTitles": [
      "File System Management"
    ],
    "learningObjectives": [
      "Describe disk structure: Platters, Tracks, Sectors, Cylinders, and read/write heads.",
      "Calculate total head movement for FCFS, SSTF, SCAN, C-SCAN disk scheduling algorithms.",
      "Compare RAID levels 0, 1, 5 for redundancy, performance, and capacity."
    ],
    "notes": [
      {
        "title": "Disk Scheduling Algorithms - Solved Numerical with Movement Calculation",
        "content": "DISK MANAGEMENT\n\n1. Disk Structure:\n   - Platter: Circular disk. Multiple platters per drive (stacked).\n   - Track: Concentric circles on platter. Track 0 = outermost.\n   - Sector: Smallest addressable unit. Typically 512 bytes or 4 KB.\n   - Cylinder: All tracks with same number across all platters.\n   - Seek Time: Time for arm to move to correct cylinder.\n   - Rotational Latency: Time for sector to rotate under head. Average = ½ revolution time.\n   - Transfer Time: Time to read/write sector data.\n\n2. Disk Scheduling Algorithms:\n   Initial head position: 53. Request queue: 98, 183, 37, 122, 14, 124, 65, 67\n   \n   FCFS: 53→98→183→37→122→14→124→65→67\n   Head movement: |98-53|+|183-98|+|37-183|+... = 640 cylinders\n   \n   SSTF (Shortest Seek Time First): Always serve closest request.\n   53→65→67→37→14→98→122→124→183\n   Head movement: 12+2+30+23+84+24+2+59 = 236 cylinders (good but starvation possible)\n   \n   SCAN (Elevator Algorithm): Head moves in one direction servicing requests, reverses at end.\n   Head at 53, moving toward 0:\n   53→37→14→0→65→67→98→122→124→183\n   Head movement: 53+0+183 = 208 cylinders (no starvation)\n   \n   C-SCAN (Circular SCAN): Head moves one direction, jumps to other end without servicing.\n   53→65→67→98→122→124→183→199→0→14→37\n   Head movement: 183+199+37 = 382 cylinders (but uniform wait time)\n\n3. RAID Levels:\n   - RAID 0 (Striping): Data striped across disks. Best performance. No redundancy.\n   - RAID 1 (Mirroring): Full copy on second disk. High redundancy. 50% capacity efficiency.\n   - RAID 5 (Striping + Distributed Parity): Parity distributed across all disks. 1 disk failure tolerance.\n   - RAID 6 (Double Parity): 2 disk failures tolerated.\n   - RAID 10 (1+0): Mirror of stripes. High performance + redundancy.\n\n4. SSD vs HDD:\n   ┌────────────────┬──────────────────────┬──────────────────────┐\n   │ Feature        │ HDD                  │ SSD                  │\n   ├────────────────┼──────────────────────┼──────────────────────┤\n   │ Speed          │ 100-200 MB/s         │ 500-7000 MB/s        │\n   │ Access Time    │ 5-10 ms (seek)       │ 0.1 ms              │\n   │ Moving Parts   │ Yes (motor, arm)     │ No (flash memory)    │\n   │ Durability     │ Shock-sensitive      │ Shock-resistant      │\n   │ Cost per GB    │ Cheaper              │ Expensive            │\n   └────────────────┴──────────────────────┴──────────────────────┘"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Operating System Concepts",
        "author": "Silberschatz"
      }
    ],
    "practiceLinks": [
      {
        "title": "Disk Scheduling Problems",
        "url": "https://www.geeksforgeeks.org/disk-scheduling-algorithms/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What are the three components of Disk Access Time? (2 Marks)",
        "Compare SCAN and C-SCAN disk scheduling algorithms. (2 Marks)",
        "What is RAID? Distinguish RAID 0, 1, and 5. (2 Marks)"
      ],
      "sixMarks": [
        "Apply FCFS, SSTF, and SCAN disk scheduling for request queue: 176, 79, 34, 60, 92, 11, 41, 114 with head at 50. Calculate total head movement. (6 Marks)",
        "Explain RAID levels 0, 1, 5, and 10 with diagrams. Compare capacity utilization and fault tolerance. (6 Marks)"
      ],
      "longAnswer": [
        "Complete disk management analysis: Disk structure (platter, track, sector, cylinder), all scheduling algorithms (FCFS, SSTF, SCAN, C-SCAN, LOOK, C-LOOK) with solved numerical, performance comparison, RAID types, and SSD vs HDD analysis. (10 Marks)"
      ]
    }
  },
  {
    "title": "System Programming",
    "slug": "os-system-programming",
    "order": 13,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Develop system programs: Introduction to System Programming, System Calls (types and usage), Process Creation using fork()/exec()/wait() system calls, File System Calls (open(), read(), write(), close(), stat()), Memory System Calls (mmap(), brk()), Shell Programming Basics (bash scripting), Linux Command Line Basics, and low-level C programming for OS interaction.",
    "subTopics": [
      "Introduction to System Programming",
      "System Calls",
      "Process Creation using System Calls",
      "File System Calls",
      "Memory System Calls",
      "Shell Programming Basics",
      "Linux Command Line Basics"
    ],
    "prerequisiteTitles": [
      "Process Management",
      "File System Management"
    ],
    "learningObjectives": [
      "Write C programs using process-related system calls: fork(), exec(), wait(), getpid(), getppid().",
      "Use file system calls: open(), read(), write(), close(), lseek(), stat() for file I/O at the syscall level.",
      "Write basic bash shell scripts for system automation: loops, conditionals, functions, pipes."
    ],
    "notes": [
      {
        "title": "System Calls Code Examples and Shell Scripting",
        "content": "SYSTEM PROGRAMMING\n\n1. Process System Calls:\n   ```c\n   #include <stdio.h>\n   #include <unistd.h>\n   #include <sys/wait.h>\n   #include <sys/types.h>\n   \n   int main() {\n       pid_t pid = fork();    // Create child process\n       if (pid == 0) {\n           // Child: Replace process image with 'ls -l'\n           execl(\"/bin/ls\", \"ls\", \"-l\", NULL);\n           perror(\"exec failed\");  // Only reached if exec fails\n       } else if (pid > 0) {\n           // Parent: wait for child\n           int status;\n           waitpid(pid, &status, 0);\n           if (WIFEXITED(status))\n               printf(\"Child exited with status: %d\\n\", WEXITSTATUS(status));\n       }\n       return 0;\n   }\n   ```\n\n2. File System Calls:\n   ```c\n   #include <fcntl.h>\n   #include <unistd.h>\n   #include <stdio.h>\n   \n   int main() {\n       // Create/open file\n       int fd = open(\"test.txt\", O_CREAT | O_RDWR, 0644);\n       if (fd < 0) { perror(\"open\"); return 1; }\n       \n       // Write to file\n       char *msg = \"Hello, System Programming!\\n\";\n       write(fd, msg, 27);\n       \n       // Seek to beginning\n       lseek(fd, 0, SEEK_SET);\n       \n       // Read from file\n       char buffer[100];\n       int n = read(fd, buffer, 100);\n       buffer[n] = '\\0';\n       printf(\"Read: %s\", buffer);\n       \n       close(fd);\n       return 0;\n   }\n   ```\n\n3. Shell Scripting Basics:\n   ```bash\n   #!/bin/bash\n   # System monitoring script\n   \n   echo \"=== System Information ===\"\n   echo \"Hostname: $(hostname)\"\n   echo \"OS: $(uname -o)\"\n   echo \"Kernel: $(uname -r)\"\n   echo \"CPU Cores: $(nproc)\"\n   echo \"Memory: $(free -h | grep Mem | awk '{print $2}')\"\n   echo \"Disk Usage:\"\n   df -h /\n   \n   # Check if a process is running\n   check_process() {\n       if pgrep -x \"$1\" > /dev/null; then\n           echo \"$1 is running (PID: $(pgrep -x $1))\"\n       else\n           echo \"$1 is NOT running\"\n       fi\n   }\n   \n   check_process \"bash\"\n   check_process \"nginx\"\n   \n   # Loop through running processes\n   echo \"\\nTop 5 CPU consuming processes:\"\n   ps aux --sort=-%cpu | head -6 | tail -5 | awk '{print $1, $2, $3, $11}'\n   ```"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "The Linux Programming Interface",
        "author": "Michael Kerrisk"
      },
      {
        "title": "Advanced Programming in the UNIX Environment",
        "author": "Stevens, Rago"
      }
    ],
    "practiceLinks": [
      {
        "title": "Linux System Programming Exercises",
        "url": "https://www.geeksforgeeks.org/linux-system-programming/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What are System Calls? List categories of system calls with examples. (2 Marks)",
        "Explain how exec() family functions replace process image. (2 Marks)",
        "What is the difference between open() with O_CREAT and O_TRUNC flags? (2 Marks)"
      ],
      "sixMarks": [
        "Write a C program using fork(), exec(), and wait() to create a child process that lists directory contents using ls -l. Trace the execution flow. (6 Marks)",
        "Write a bash shell script that: lists top 5 CPU-consuming processes, shows disk usage, checks if a given process is running. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive system programming project: Write a mini process manager in C that creates 3 child processes using fork(), each running a different command via exec(), parent monitors all children using waitpid() in a loop, reports exit status of each child. Include complete annotated C code and execution trace. (10 Marks)"
      ]
    }
  },
  {
    "title": "Operating System Programming",
    "slug": "os-programming-programs",
    "order": 14,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Implement OS concepts in code: Programming with Processes (fork/exec chains), Process Communication Programs (pipes, shared memory), Thread Programming (pthreads, mutex, condition variables), Synchronization Programs (semaphores), File Handling Programs (file descriptors, stat), and Memory Management Programs (dynamic allocation, mmap).",
    "subTopics": [
      "Programming with Processes",
      "Creating Processes",
      "Process Communication Programs",
      "Thread Programming",
      "Synchronization Programs",
      "File Handling Programs",
      "Memory Management Programs"
    ],
    "prerequisiteTitles": [
      "System Programming",
      "Process Synchronization"
    ],
    "learningObjectives": [
      "Implement multi-process programs demonstrating fork, exec, and pipe-based IPC.",
      "Write multithreaded programs using pthread_create, pthread_mutex, and pthread_cond for synchronization.",
      "Create semaphore-based synchronization programs solving Producer-Consumer and Readers-Writers problems."
    ],
    "notes": [
      {
        "title": "Complete OS Programming Examples - Processes, Threads, Semaphores",
        "content": "OPERATING SYSTEM PROGRAMMING\n\n1. Pipe-Based IPC Program (Parent writes, Child reads):\n   ```c\n   #include <stdio.h>\n   #include <unistd.h>\n   #include <string.h>\n   #include <sys/wait.h>\n   \n   int main() {\n       int pfd[2];\n       pipe(pfd);\n       \n       if (fork() == 0) {  // Child\n           close(pfd[1]);\n           char buf[100];\n           int n = read(pfd[0], buf, 100);\n           printf(\"Child received %d bytes: %s\\n\", n, buf);\n           close(pfd[0]);\n       } else {  // Parent\n           close(pfd[0]);\n           char *msg = \"OS_Programming_Lab\";\n           write(pfd[1], msg, strlen(msg));\n           close(pfd[1]);\n           wait(NULL);\n       }\n       return 0;\n   }\n   ```\n\n2. Thread with Mutex (Bank Account Program):\n   ```c\n   #include <stdio.h>\n   #include <pthread.h>\n   \n   double balance = 1000.0;\n   pthread_mutex_t lock;\n   \n   void* deposit(void* amount) {\n       pthread_mutex_lock(&lock);\n       double dep = *(double*)amount;\n       balance += dep;\n       printf(\"Deposited %.2f. Balance: %.2f\\n\", dep, balance);\n       pthread_mutex_unlock(&lock);\n       return NULL;\n   }\n   \n   void* withdraw(void* amount) {\n       pthread_mutex_lock(&lock);\n       double wit = *(double*)amount;\n       if (balance >= wit) {\n           balance -= wit;\n           printf(\"Withdrawn %.2f. Balance: %.2f\\n\", wit, balance);\n       } else {\n           printf(\"Insufficient funds!\\n\");\n       }\n       pthread_mutex_unlock(&lock);\n       return NULL;\n   }\n   \n   int main() {\n       pthread_mutex_init(&lock, NULL);\n       pthread_t t1, t2, t3;\n       double d = 500.0, w = 300.0;\n       pthread_create(&t1, NULL, deposit, &d);\n       pthread_create(&t2, NULL, withdraw, &w);\n       pthread_create(&t3, NULL, deposit, &d);\n       pthread_join(t1, NULL);\n       pthread_join(t2, NULL);\n       pthread_join(t3, NULL);\n       printf(\"Final Balance: %.2f\\n\", balance);\n       pthread_mutex_destroy(&lock);\n       return 0;\n   }\n   // Compile: gcc -o bank bank.c -lpthread\n   ```\n\n3. File Handling with stat():\n   ```c\n   #include <stdio.h>\n   #include <sys/stat.h>\n   #include <time.h>\n   \n   int main(int argc, char *argv[]) {\n       if (argc != 2) { printf(\"Usage: %s <filename>\\n\", argv[0]); return 1; }\n       struct stat st;\n       if (stat(argv[1], &st) == -1) { perror(\"stat\"); return 1; }\n       printf(\"File: %s\\n\", argv[1]);\n       printf(\"Size: %ld bytes\\n\", st.st_size);\n       printf(\"Inode: %lu\\n\", st.st_ino);\n       printf(\"Permissions: %o\\n\", st.st_mode & 0777);\n       printf(\"Last modified: %s\", ctime(&st.st_mtime));\n       return 0;\n   }\n   ```"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "The Linux Programming Interface",
        "author": "Michael Kerrisk"
      }
    ],
    "practiceLinks": [
      {
        "title": "POSIX Programming Practice",
        "url": "https://www.geeksforgeeks.org/posix-standard-and-related-apis/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is shared memory IPC? How does it differ from pipe-based IPC? (2 Marks)",
        "Explain pthread_cond_wait() and pthread_cond_signal() for condition variable synchronization. (2 Marks)",
        "What does the stat() system call return? List key struct stat fields. (2 Marks)"
      ],
      "sixMarks": [
        "Write a C program implementing the Producer-Consumer problem using POSIX semaphores (sem_init, sem_wait, sem_post) with a buffer of size 5. (6 Marks)",
        "Implement a multithreaded matrix multiplication program in C using pthreads where each thread computes one row of the result. (6 Marks)"
      ],
      "longAnswer": [
        "Mini OS Lab Project: Write a C program that simulates a simple shell - reads commands, forks a child process, executes command with exec(), handles pipes between commands using pipe() and dup2(), and waits for child completion. Support at least: ls, pwd, cd (builtin), echo, and piped commands like ls | grep. (10 Marks)"
      ]
    }
  },
  {
    "title": "Linux Operating System",
    "slug": "os-linux-operating-system",
    "order": 15,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Master Linux OS: Introduction to Linux (history, kernel, distributions), Linux Architecture (Hardware → Kernel → Shell → Applications), Linux Kernel features (monolithic, loadable modules), Linux File System (/, /bin, /etc, /home, /var, /tmp), Essential Linux Commands (file, process, network), Shell Scripting Basics, Process Management in Linux (ps, top, kill), and Linux Permissions and Security (chmod, chown, sudo).",
    "subTopics": [
      "Introduction to Linux",
      "Linux Architecture",
      "Linux Kernel",
      "Linux File System",
      "Linux Commands",
      "Shell Scripting Basics",
      "Process Management in Linux",
      "Permissions and Security"
    ],
    "prerequisiteTitles": [
      "Operating System Architecture",
      "System Programming"
    ],
    "learningObjectives": [
      "Navigate Linux file system hierarchy: /, /bin, /usr, /etc, /home, /var, /tmp, /proc, /dev.",
      "Use essential Linux commands: ls, cd, mkdir, rm, cp, mv, cat, grep, find, ps, top, kill, chmod, chown.",
      "Write basic bash scripts with variables, if-else, loops, functions, and handle command-line arguments."
    ],
    "notes": [
      {
        "title": "Linux Command Reference and Shell Scripting Examples",
        "content": "LINUX OPERATING SYSTEM\n\n1. Linux File System Hierarchy:\n   /           Root directory\n   /bin        Essential user command binaries (ls, cp, mv, bash)\n   /sbin       System binaries (mount, ifconfig, reboot)\n   /etc        Configuration files (passwd, fstab, hosts, cron)\n   /home       User home directories\n   /var        Variable data (logs, mail, spool)\n   /tmp        Temporary files (cleared on boot)\n   /usr        User programs, libraries, documentation\n   /dev        Device files (disk, tty, null, random)\n   /proc       Virtual filesystem (process and kernel info)\n   /sys        Kernel hardware information\n\n2. Essential Linux Commands:\n   ```bash\n   # File operations\n   ls -la /etc            # List with permissions\n   cp -r source/ dest/    # Copy directory recursively  \n   mv file.txt /tmp/      # Move file\n   find / -name \"*.log\" 2>/dev/null  # Find files\n   grep -r \"error\" /var/log/   # Search in files\n   \n   # Process management\n   ps aux                 # List all processes\n   top                    # Dynamic process view\n   kill -9 1234           # Force kill PID 1234\n   nice -n 10 command     # Run with lower priority\n   nohup command &        # Run in background, immune to hangup\n   \n   # Network commands\n   ip addr show           # Show IP addresses\n   ping -c 4 google.com   # Test connectivity\n   netstat -tulpn         # Show listening ports\n   ss -tulpn              # Modern socket statistics\n   \n   # Disk and system\n   df -h                  # Disk usage (human readable)\n   du -sh /var/log/       # Directory size\n   free -h                # Memory usage\n   uname -a               # System information\n   ```\n\n3. Permission Management:\n   ```bash\n   # Permission format: [type][user][group][others]\n   # -rwxrwxrwx → regular file, all permissions\n   # drwxr-xr-x → directory, owner=rwx, group=r-x, others=r-x\n   \n   chmod 755 script.sh     # Octal: rwxr-xr-x\n   chmod u+x script.sh     # Add execute for user\n   chmod o-r private.txt   # Remove read for others\n   chown user:group file   # Change owner and group\n   sudo command            # Execute as superuser\n   visudo                  # Edit sudoers file safely\n   ```\n\n4. Shell Script Example (System Health Check):\n   ```bash\n   #!/bin/bash\n   LOG=\"/tmp/health_$(date +%Y%m%d).log\"\n   \n   echo \"System Health Report - $(date)\" | tee $LOG\n   echo \"=============================\" | tee -a $LOG\n   \n   # CPU Usage\n   CPU=$(top -bn1 | grep \"Cpu(s)\" | awk '{print $2}')\n   echo \"CPU Usage: $CPU%\" | tee -a $LOG\n   \n   # Memory\n   MEM=$(free | grep Mem | awk '{printf \"%.1f%%\", $3/$2*100}')\n   echo \"Memory Usage: $MEM\" | tee -a $LOG\n   \n   # Disk Usage Check\n   DISK=$(df / | awk 'NR==2{print $5}' | tr -d '%')\n   if [ $DISK -gt 80 ]; then\n       echo \"WARNING: Disk usage at $DISK%\" | tee -a $LOG\n   else\n       echo \"Disk OK: $DISK%\" | tee -a $LOG\n   fi\n   \n   echo \"Log saved to $LOG\"\n   ```"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "The Linux Command Line",
        "author": "William Shotts"
      },
      {
        "title": "Linux Bible",
        "author": "Christopher Negus"
      }
    ],
    "practiceLinks": [
      {
        "title": "Linux Command Line Practice",
        "url": "https://linuxjourney.com/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Describe the Linux file system hierarchy with 5 important directories and their purpose. (2 Marks)",
        "What is sudo? How does it differ from su? (2 Marks)",
        "Explain the permission string -rwxr-xr--. What can owner, group, and others do? (2 Marks)"
      ],
      "sixMarks": [
        "List and explain 10 essential Linux commands covering file management, process management, and network operations with examples. (6 Marks)",
        "Write a bash shell script that monitors system health: CPU usage, memory usage, disk usage, running processes count. Alert if any metric exceeds threshold. (6 Marks)"
      ],
      "longAnswer": [
        "Linux OS complete overview: Architecture (kernel layers, system call interface), file system hierarchy (/proc, /dev, /sys virtual filesystems), process management (ps, top, nice, nohup, cron jobs), permission system (user/group/other, SUID, SGID, sticky bit), and comprehensive shell scripting tutorial with variables, arrays, functions, regular expressions. (10 Marks)"
      ]
    }
  },
  {
    "title": "Advanced Operating System Concepts",
    "slug": "os-advanced-concepts",
    "order": 16,
    "estimatedHours": 4,
    "difficulty": "Advanced",
    "description": "Explore advanced OS topics: Distributed Operating Systems (resource sharing across nodes, transparency), Cloud Operating Systems (OS in cloud, resource virtualization), Virtualization (hypervisors, VMs, containers), Container Basics (lightweight isolation, namespaces, cgroups), Docker and OS Isolation, Mobile Operating Systems (Android, iOS architecture), and Real-Time Operating Systems (RTOS scheduling, hard vs soft real-time).",
    "subTopics": [
      "Distributed Operating Systems",
      "Cloud Operating Systems",
      "Virtualization",
      "Containers Basics",
      "Docker and OS Isolation",
      "Mobile Operating Systems",
      "Real-Time Operating Systems"
    ],
    "prerequisiteTitles": [
      "Linux Operating System"
    ],
    "learningObjectives": [
      "Distinguish Virtualization (hardware emulation via hypervisor) and Containerization (OS-level isolation via namespaces/cgroups).",
      "Explain Docker container lifecycle: build image → create container → run → stop → remove.",
      "Classify Real-Time OS: Hard RTOS (deadline miss = catastrophic) vs Soft RTOS (degraded performance)."
    ],
    "notes": [
      {
        "title": "Virtualization vs Containerization and Docker Commands",
        "content": "ADVANCED OPERATING SYSTEM CONCEPTS\n\n1. Virtualization vs Containerization:\n   ┌─────────────────┬──────────────────────────────────┬──────────────────────────────────┐\n   │ Feature         │ Virtual Machine (Hypervisor)     │ Container (Docker)               │\n   ├─────────────────┼──────────────────────────────────┼──────────────────────────────────┤\n   │ Isolation Level │ Full hardware-level isolation    │ OS process-level isolation       │\n   │ OS              │ Full guest OS per VM             │ Shares host OS kernel            │\n   │ Size            │ GBs (full OS)                    │ MBs (app + dependencies)         │\n   │ Startup Time    │ Minutes                          │ Seconds/milliseconds             │\n   │ Performance     │ Overhead from hypervisor         │ Near-native performance          │\n   │ Portability     │ Good (heavy)                     │ Excellent (OCI standard)         │\n   │ Use Case        │ Strong isolation, different OS   │ Microservices, CI/CD pipelines   │\n   └─────────────────┴──────────────────────────────────┴──────────────────────────────────┘\n\n2. Docker Key Concepts:\n   ```bash\n   # Docker commands\n   docker pull ubuntu:22.04      # Download image\n   docker images                 # List images\n   docker run -it ubuntu bash    # Run interactive container\n   docker ps                     # List running containers\n   docker ps -a                  # All containers\n   docker stop container_id      # Stop container\n   docker rm container_id        # Remove container\n   docker rmi image_id           # Remove image\n   \n   # Create custom image with Dockerfile\n   # Dockerfile:\n   FROM ubuntu:22.04\n   RUN apt-get update && apt-get install -y python3\n   COPY app.py /app/\n   CMD [\"python3\", \"/app/app.py\"]\n   \n   docker build -t myapp:1.0 .   # Build image\n   docker run myapp:1.0          # Run container\n   ```\n\n3. Linux Namespaces (Container Isolation):\n   - PID namespace: Process ID isolation (container has PID 1).\n   - Network namespace: Isolated network stack (own IP, routing table).\n   - Mount namespace: Isolated filesystem view.\n   - UTS namespace: Independent hostname.\n   - User namespace: Independent user/group IDs.\n   \n   cgroups (Control Groups): Limit and account for resource usage (CPU, memory, disk I/O).\n\n4. Real-Time Operating Systems:\n   - Hard RTOS: Missing deadline = system failure. Examples: Aircraft control, pacemaker, nuclear reactor.\n     Scheduling: Rate Monotonic (RM), Earliest Deadline First (EDF).\n   - Soft RTOS: Missing deadline = degraded service (acceptable). Examples: Video streaming, online gaming.\n   - RTOS Examples: FreeRTOS, VxWorks, QNX, RTEMS.\n\n5. Android Architecture (Mobile OS):\n   Layer 1: Linux Kernel (drivers, security, power management)\n   Layer 2: Hardware Abstraction Layer (HAL)\n   Layer 3: Native Libraries (SQLite, WebKit, OpenGL ES) + Android Runtime (ART/Dalvik)\n   Layer 4: Java API Framework (Activity Manager, Content Providers, View System)\n   Layer 5: System Apps & User Apps"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Docker: Up and Running",
        "author": "Sean Kane, Karl Matthias"
      },
      {
        "title": "Modern Operating Systems",
        "author": "Tanenbaum"
      }
    ],
    "practiceLinks": [
      {
        "title": "Docker Getting Started",
        "url": "https://docs.docker.com/get-started/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Distinguish between Type-1 (Bare-metal) and Type-2 (Hosted) hypervisors with examples. (2 Marks)",
        "What are Linux namespaces? How do they enable container isolation? (2 Marks)",
        "Differentiate Hard RTOS and Soft RTOS with examples. (2 Marks)"
      ],
      "sixMarks": [
        "Compare Virtual Machines and Docker Containers on isolation, overhead, startup time, portability, and use cases with a comparison table. (6 Marks)",
        "Explain Docker architecture: Daemon, Client, Images, Containers, Registry. Write a Dockerfile to containerize a simple Python web application. (6 Marks)"
      ],
      "longAnswer": [
        "Advanced OS architectures analysis: Distributed OS transparency goals, Cloud OS resource management (AWS EC2 hypervisor), Virtualization (Type 1/2 hypervisors, hardware-assisted Intel VT-x), Containerization (Linux namespaces, cgroups, overlay filesystem), Docker complete workflow, Mobile OS (Android architecture layers), and RTOS scheduling algorithms (RM, EDF) with examples. (10 Marks)"
      ]
    }
  },
  {
    "title": "Practical Applications and Projects",
    "slug": "os-practical-applications-projects",
    "order": 17,
    "estimatedHours": 6,
    "difficulty": "Advanced",
    "description": "Apply OS concepts in practical projects: CPU Scheduling Simulator (implement FCFS, SJF, RR in C), Memory Management Simulator (page replacement algorithms), File System Simulator (directory and file operations), Process Management Programs (fork, exec, IPC), Thread Synchronization Programs (dining philosophers, producer-consumer), Linux Shell Scripts (automation), and Mini Operating System Concepts Project.",
    "subTopics": [
      "CPU Scheduling Simulator",
      "Memory Management Simulator",
      "File System Simulator",
      "Process Management Programs",
      "Thread Synchronization Programs",
      "Linux Shell Scripts",
      "Mini Operating System Concepts Project"
    ],
    "prerequisiteTitles": [
      "Operating System Programming",
      "Linux Operating System"
    ],
    "learningObjectives": [
      "Build a CPU scheduling simulator in C implementing FCFS, SJF, and Round Robin with Gantt chart output.",
      "Implement FIFO, Optimal, and LRU page replacement simulators with page fault count comparison.",
      "Develop a Linux shell automation script suite for system monitoring, backup, and log analysis."
    ],
    "notes": [
      {
        "title": "CPU Scheduling Simulator and Page Replacement Simulator in C",
        "content": "PRACTICAL OS PROJECTS\n\n1. CPU Scheduling Simulator (Round Robin):\n   ```c\n   #include <stdio.h>\n   \n   struct Process {\n       int pid, at, bt, remaining_bt, ct, tat, wt;\n   };\n   \n   void roundRobin(struct Process proc[], int n, int quantum) {\n       int time = 0, done = 0;\n       printf(\"\\nGantt Chart: \");\n       \n       while (done < n) {\n           int progress = 0;\n           for (int i = 0; i < n; i++) {\n               if (proc[i].at <= time && proc[i].remaining_bt > 0) {\n                   progress = 1;\n                   int exec = (proc[i].remaining_bt > quantum) ? quantum : proc[i].remaining_bt;\n                   printf(\"| P%d:%d-%d \", proc[i].pid, time, time + exec);\n                   time += exec;\n                   proc[i].remaining_bt -= exec;\n                   if (proc[i].remaining_bt == 0) {\n                       proc[i].ct = time;\n                       proc[i].tat = proc[i].ct - proc[i].at;\n                       proc[i].wt = proc[i].tat - proc[i].bt;\n                       done++;\n                   }\n               }\n           }\n           if (!progress) time++;  // CPU idle\n       }\n       printf(\"|\\n\");\n       \n       double avg_wt = 0, avg_tat = 0;\n       printf(\"\\nPID\\tAT\\tBT\\tCT\\tTAT\\tWT\\n\");\n       for (int i = 0; i < n; i++) {\n           printf(\"P%d\\t%d\\t%d\\t%d\\t%d\\t%d\\n\", \n               proc[i].pid, proc[i].at, proc[i].bt, proc[i].ct, proc[i].tat, proc[i].wt);\n           avg_wt += proc[i].wt;\n           avg_tat += proc[i].tat;\n       }\n       printf(\"Average WT=%.2f, Average TAT=%.2f\\n\", avg_wt/n, avg_tat/n);\n   }\n   \n   int main() {\n       struct Process p[] = {{1,0,10},{2,1,5},{3,2,8},{4,3,3}};\n       int n = 4, quantum = 4;\n       for (int i = 0; i < n; i++) p[i].remaining_bt = p[i].bt;\n       roundRobin(p, n, quantum);\n       return 0;\n   }\n   ```\n\n2. Page Replacement Simulator (LRU):\n   ```c\n   #include <stdio.h>\n   #define FRAMES 3\n   #define REF_LEN 12\n   \n   int frames[FRAMES], time_used[FRAMES];\n   \n   int lru_replace() {\n       int min_time = time_used[0], pos = 0;\n       for (int i = 1; i < FRAMES; i++) {\n           if (time_used[i] < min_time) { min_time = time_used[i]; pos = i; }\n       }\n       return pos;\n   }\n   \n   int main() {\n       int refs[] = {1,2,3,4,1,2,5,1,2,3,4,5};\n       int faults = 0, time = 0;\n       for (int i = 0; i < FRAMES; i++) frames[i] = -1;\n       \n       for (int r = 0; r < REF_LEN; r++) {\n           int page = refs[r]; int found = 0, free_slot = -1;\n           for (int i = 0; i < FRAMES; i++) {\n               if (frames[i] == page) { time_used[i] = ++time; found = 1; break; }\n               if (frames[i] == -1) free_slot = i;\n           }\n           if (!found) {\n               faults++;\n               int pos = (free_slot != -1) ? free_slot : lru_replace();\n               frames[pos] = page; time_used[pos] = ++time;\n               printf(\"Page %d → FAULT → Frames: \", page);\n           } else {\n               printf(\"Page %d → HIT  → Frames: \", page);\n           }\n           for (int i = 0; i < FRAMES; i++) printf(\"%d \", frames[i]);\n           printf(\"\\n\");\n       }\n       printf(\"Total Page Faults (LRU): %d\\n\", faults);\n       return 0;\n   }\n   ```"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Operating System Concepts",
        "author": "Silberschatz"
      }
    ],
    "practiceLinks": [
      {
        "title": "OS Mini Projects GitHub",
        "url": "https://github.com/topics/operating-systems-project"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Design a CPU Scheduling Simulator. What data structures would you use? (2 Marks)",
        "How would you implement LRU page replacement in O(1) time using Hashmap + Doubly Linked List? (2 Marks)",
        "Describe the design of a simple File System Simulator with directory trees. (2 Marks)"
      ],
      "sixMarks": [
        "Write a C program to simulate FCFS and SJF CPU scheduling. Display Gantt chart, calculate TAT and WT for each process and averages. (6 Marks)",
        "Implement a page replacement simulator comparing FIFO, Optimal, and LRU for reference string: 7,0,1,2,0,3,0,4,2,3 with 3 frames. (6 Marks)"
      ],
      "longAnswer": [
        "Mini OS Project: Design and implement a complete Process Scheduling + Memory Management Simulator in C. Features: (1) Input n processes with AT, BT; (2) Simulate FCFS, SJF, RR algorithms; (3) Generate Gantt chart; (4) Compute performance metrics; (5) Simulate page replacement for a given reference string. Present complete C code, sample output, and analysis. (10 Marks)"
      ]
    }
  }
];
