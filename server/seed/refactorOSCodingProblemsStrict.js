require('dotenv').config();
const connectDB = require('../config/db');
const Subject = require('../models/Subject');
const Topic = require('../models/Topic');
const CodingProblem = require('../models/CodingProblem');

const OS_STRICT_PROBLEMS = {
  processManagement: [
    {
      title: "Create Process using fork()",
      difficulty: "Easy",
      platform: "GeeksforGeeks",
      problemUrl: "https://www.geeksforgeeks.org/fork-system-call/",
      problemType: "implementation",
      language: "C",
      environment: "Linux/POSIX",
      placementImportance: "Essential",
      tags: ["Operating Systems", "Process Management", "fork()", "System Calls"],
      description: "Implement a C program using fork() to create child processes, obtain process IDs using getpid() and getppid(), and handle fork return values."
    },
    {
      title: "Demonstrate fork() and pipe()",
      difficulty: "Medium",
      platform: "GeeksforGeeks",
      problemUrl: "https://www.geeksforgeeks.org/c-program-demonstrate-fork-and-pipe/",
      problemType: "implementation",
      language: "C",
      environment: "Linux/POSIX",
      placementImportance: "Essential",
      tags: ["Operating Systems", "IPC", "pipe()", "fork()"],
      description: "Implement inter-process communication (IPC) between parent and child processes using an anonymous unidirectional pipe in C."
    }
  ],
  threads: [
    {
      title: "POSIX Threads (pthread)",
      difficulty: "Medium",
      platform: "GeeksforGeeks",
      problemUrl: "https://www.geeksforgeeks.org/thread-functions-in-c-c/",
      problemType: "implementation",
      language: "C",
      environment: "Linux/POSIX",
      placementImportance: "Essential",
      tags: ["Operating Systems", "pthreads", "Multithreading"],
      description: "Create and join multiple worker threads using pthread_create() and pthread_join() to compute concurrent array operations."
    },
    {
      title: "Thread Synchronization using Mutex",
      difficulty: "Medium",
      platform: "GeeksforGeeks",
      problemUrl: "https://www.geeksforgeeks.org/mutex-lock-for-linux-thread-synchronization/",
      problemType: "implementation",
      language: "C",
      environment: "Linux/POSIX",
      placementImportance: "Essential",
      tags: ["Operating Systems", "Mutex", "Synchronization", "Race Conditions"],
      description: "Prevent race conditions on shared global resources using pthread_mutex_lock() and pthread_mutex_unlock()."
    }
  ],
  cpuScheduling: [
    {
      title: "FCFS CPU Scheduling",
      difficulty: "Easy",
      platform: "GeeksforGeeks",
      problemUrl: "https://www.geeksforgeeks.org/dsa/first-come-first-serve-cpu-scheduling-non-preemptive/",
      problemType: "implementation",
      language: "C",
      environment: "Linux/POSIX",
      placementImportance: "Essential",
      tags: ["Operating Systems", "CPU Scheduling", "FCFS"],
      description: "Implement First-Come, First-Served CPU scheduling in C and compute Waiting Time, Turnaround Time, and Average Completion Times."
    },
    {
      title: "SJF CPU Scheduling",
      difficulty: "Medium",
      platform: "GeeksforGeeks",
      problemUrl: "https://www.geeksforgeeks.org/program-for-shortest-job-first-or-sjf-cpu-scheduling-set-1-non-preemptive/",
      problemType: "implementation",
      language: "C",
      environment: "Linux/POSIX",
      placementImportance: "Essential",
      tags: ["Operating Systems", "CPU Scheduling", "SJF"],
      description: "Implement Shortest Job First (Non-preemptive & Preemptive/SRTF) scheduling algorithm in C."
    },
    {
      title: "Priority CPU Scheduling",
      difficulty: "Medium",
      platform: "GeeksforGeeks",
      problemUrl: "https://www.geeksforgeeks.org/operating-systems/program-for-priority-cpu-scheduling-set-1/",
      problemType: "implementation",
      language: "C",
      environment: "Linux/POSIX",
      placementImportance: "Essential",
      tags: ["Operating Systems", "CPU Scheduling", "Priority"],
      description: "Simulate priority-based CPU execution queue in C, handling process arrival times and tie-breaking."
    },
    {
      title: "Round Robin CPU Scheduling",
      difficulty: "Medium",
      platform: "GeeksforGeeks",
      problemUrl: "https://www.geeksforgeeks.org/round-robin-scheduling-with-different-arrival-times/",
      problemType: "implementation",
      language: "C",
      environment: "Linux/POSIX",
      placementImportance: "Essential",
      tags: ["Operating Systems", "CPU Scheduling", "Round Robin", "Time Quantum"],
      description: "Implement preemptive Round Robin CPU scheduling in C with customizable Time Quantum (q) and ready queue management."
    }
  ],
  processSynchronization: [
    {
      title: "Producer-Consumer using Semaphores",
      difficulty: "Medium",
      platform: "GeeksforGeeks",
      problemUrl: "https://www.geeksforgeeks.org/producer-consumer-problem-using-semaphores-set-1/",
      problemType: "implementation",
      language: "C",
      environment: "Linux/POSIX",
      placementImportance: "Essential",
      tags: ["Operating Systems", "Semaphores", "Producer-Consumer"],
      description: "Implement the classic bounded-buffer Producer-Consumer synchronization using POSIX sem_wait(), sem_post(), and mutex locks."
    },
    {
      title: "Dining Philosophers using Semaphores",
      difficulty: "Hard",
      platform: "GeeksforGeeks",
      problemUrl: "https://www.geeksforgeeks.org/dining-philosopher-problem-using-semaphores/",
      problemType: "implementation",
      language: "C",
      environment: "Linux/POSIX",
      placementImportance: "Essential",
      tags: ["Operating Systems", "Dining Philosophers", "Deadlock Prevention"],
      description: "Model 5 philosophers competing for chopsticks using semaphores in C, ensuring deadlock and starvation freedom."
    },
    {
      title: "Readers-Writers using Synchronization",
      difficulty: "Medium",
      platform: "GeeksforGeeks",
      problemUrl: "https://www.geeksforgeeks.org/readers-writers-problem-set-1-introduction-and-readers-preference-solution/",
      problemType: "implementation",
      language: "C",
      environment: "Linux/POSIX",
      placementImportance: "Essential",
      tags: ["Operating Systems", "Readers-Writers", "Concurrency"],
      description: "Solve the first readers-writers problem in C allowing concurrent read access while ensuring exclusive write access."
    }
  ],
  deadlocks: [
    {
      title: "Banker's Algorithm",
      difficulty: "Medium",
      platform: "GeeksforGeeks",
      problemUrl: "https://www.geeksforgeeks.org/bankers-algorithm-in-operating-system-2/",
      problemType: "implementation",
      language: "C",
      environment: "Linux/POSIX",
      placementImportance: "Essential",
      tags: ["Operating Systems", "Banker's Algorithm", "Deadlock Avoidance", "Safety Algorithm"],
      description: "Implement Banker's Deadlock Avoidance and Safety algorithm in C with Allocation, Max, Available, and Need matrices."
    },
    {
      title: "Deadlock Detection Algorithm",
      difficulty: "Medium",
      platform: "GeeksforGeeks",
      problemUrl: "https://www.geeksforgeeks.org/operating-system-deadlock-detection-algorithm/",
      problemType: "implementation",
      language: "C",
      environment: "Linux/POSIX",
      placementImportance: "Essential",
      tags: ["Operating Systems", "Deadlock Detection", "Resource Allocation Graph"],
      description: "Implement resource-allocation graph reduction and deadlock cycle detection in C."
    }
  ],
  memoryManagement: [
    {
      title: "First Fit Memory Allocation",
      difficulty: "Easy",
      platform: "GeeksforGeeks",
      problemUrl: "https://www.geeksforgeeks.org/program-first-fit-algorithm-memory-management/",
      problemType: "implementation",
      language: "C",
      environment: "Linux/POSIX",
      placementImportance: "Essential",
      tags: ["Operating Systems", "Memory Management", "First Fit"],
      description: "Implement First Fit contiguous memory allocation in C, allocating the first free partition large enough for each process."
    },
    {
      title: "Best Fit Memory Allocation",
      difficulty: "Easy",
      platform: "GeeksforGeeks",
      problemUrl: "https://www.geeksforgeeks.org/program-best-fit-algorithm-memory-management/",
      problemType: "implementation",
      language: "C",
      environment: "Linux/POSIX",
      placementImportance: "Essential",
      tags: ["Operating Systems", "Memory Management", "Best Fit"],
      description: "Implement Best Fit memory partition allocation in C to minimize internal/external fragmentation."
    },
    {
      title: "Worst Fit Memory Allocation",
      difficulty: "Easy",
      platform: "GeeksforGeeks",
      problemUrl: "https://www.geeksforgeeks.org/program-worst-fit-algorithm-memory-management/",
      problemType: "implementation",
      language: "C",
      environment: "Linux/POSIX",
      placementImportance: "Essential",
      tags: ["Operating Systems", "Memory Management", "Worst Fit"],
      description: "Implement Worst Fit memory partition allocation in C, assigning processes to the largest available free block."
    }
  ],
  virtualMemory: [
    {
      title: "LRU Page Replacement",
      difficulty: "Medium",
      platform: "GeeksforGeeks",
      problemUrl: "https://www.geeksforgeeks.org/dsa/program-for-least-recently-used-lru-page-replacement-algorithm/",
      problemType: "implementation",
      language: "C",
      environment: "Linux/POSIX",
      placementImportance: "Essential",
      tags: ["Operating Systems", "Virtual Memory", "LRU", "Page Replacement"],
      description: "Implement the Least Recently Used (LRU) page replacement algorithm in C and calculate total page faults for a reference string."
    },
    {
      title: "FIFO Page Replacement",
      difficulty: "Easy",
      platform: "GeeksforGeeks",
      problemUrl: "https://www.geeksforgeeks.org/dsa/program-page-replacement-algorithms-set-2-fifo/",
      problemType: "implementation",
      language: "C",
      environment: "Linux/POSIX",
      placementImportance: "Essential",
      tags: ["Operating Systems", "Virtual Memory", "FIFO", "Page Replacement"],
      description: "Implement First-In First-Out (FIFO) page replacement in C tracking frames in a circular queue."
    },
    {
      title: "Optimal Page Replacement",
      difficulty: "Medium",
      platform: "GeeksforGeeks",
      problemUrl: "https://www.geeksforgeeks.org/page-replacement-algorithms-in-operating-systems/",
      problemType: "implementation",
      language: "C",
      environment: "Linux/POSIX",
      placementImportance: "Essential",
      tags: ["Operating Systems", "Virtual Memory", "Optimal Page Replacement"],
      description: "Implement Belady's Optimal Page Replacement algorithm in C looking ahead in the reference string."
    }
  ],
  diskManagement: [
    {
      title: "FCFS Disk Scheduling",
      difficulty: "Easy",
      platform: "GeeksforGeeks",
      problemUrl: "https://www.geeksforgeeks.org/program-for-fcfs-disk-scheduling-algorithm/",
      problemType: "implementation",
      language: "C",
      environment: "Linux/POSIX",
      placementImportance: "Essential",
      tags: ["Operating Systems", "Disk Management", "FCFS"],
      description: "Implement FCFS disk head scheduling in C and compute total head movement (seek time)."
    },
    {
      title: "SSTF Disk Scheduling",
      difficulty: "Medium",
      platform: "GeeksforGeeks",
      problemUrl: "https://www.geeksforgeeks.org/program-for-sstf-disk-scheduling-algorithm/",
      problemType: "implementation",
      language: "C",
      environment: "Linux/POSIX",
      placementImportance: "Essential",
      tags: ["Operating Systems", "Disk Management", "SSTF", "Seek Time"],
      description: "Implement Shortest Seek Time First (SSTF) disk scheduling in C selecting the track closest to current head position."
    },
    {
      title: "SCAN Disk Scheduling",
      difficulty: "Medium",
      platform: "GeeksforGeeks",
      problemUrl: "https://www.geeksforgeeks.org/scan-elevator-disk-scheduling-algorithms/",
      problemType: "implementation",
      language: "C",
      environment: "Linux/POSIX",
      placementImportance: "Essential",
      tags: ["Operating Systems", "Disk Management", "SCAN", "Elevator Algorithm"],
      description: "Implement the SCAN (Elevator) disk scheduling algorithm in C sweeping across disk cylinders in bidirectional passes."
    },
    {
      title: "C-SCAN Disk Scheduling",
      difficulty: "Medium",
      platform: "GeeksforGeeks",
      problemUrl: "https://www.geeksforgeeks.org/c-scan-disk-scheduling-algorithm/",
      problemType: "implementation",
      language: "C",
      environment: "Linux/POSIX",
      placementImportance: "Essential",
      tags: ["Operating Systems", "Disk Management", "C-SCAN"],
      description: "Implement Circular SCAN (C-SCAN) disk scheduling in C providing uniform wait times by serving requests in one direction only."
    }
  ]
};

const refactorOSStrict = async () => {
  try {
    await connectDB();

    const subject = await Subject.findOne({ name: /^Operating System/i });
    if (!subject) {
      console.log('❌ Operating System subject not found');
      process.exit(1);
    }

    console.log(`\n🔧 Refactoring "${subject.name}" to strict system programming implementation tasks...`);
    const topics = await Topic.find({ subject: subject._id }).sort({ order: 1 });

    // Wipe all old coding problems across the subject
    const topicIds = topics.map(t => t._id);
    await CodingProblem.deleteMany({ topic: { $in: topicIds } });

    const mapping = [
      { pattern: /^Process Management$/i, problems: OS_STRICT_PROBLEMS.processManagement },
      { pattern: /Threads and Multithreading/i, problems: OS_STRICT_PROBLEMS.threads },
      { pattern: /CPU Scheduling/i, problems: OS_STRICT_PROBLEMS.cpuScheduling },
      { pattern: /Process Synchronization/i, problems: OS_STRICT_PROBLEMS.processSynchronization },
      { pattern: /^Deadlocks$/i, problems: OS_STRICT_PROBLEMS.deadlocks },
      { pattern: /^Memory Management$/i, problems: OS_STRICT_PROBLEMS.memoryManagement },
      { pattern: /^Virtual Memory$/i, problems: OS_STRICT_PROBLEMS.virtualMemory },
      { pattern: /^Disk Management$/i, problems: OS_STRICT_PROBLEMS.diskManagement }
    ];

    let totalInserted = 0;
    for (const item of mapping) {
      const topic = topics.find(t => item.pattern.test(t.title));
      if (topic) {
        const toInsert = item.problems.map((p, idx) => ({
          topic: topic._id,
          title: p.title,
          description: p.description,
          difficulty: p.difficulty,
          platform: p.platform,
          problemUrl: p.problemUrl,
          problemType: p.problemType || "implementation",
          language: p.language || "C",
          environment: p.environment || "Linux/POSIX",
          placementImportance: p.placementImportance || "Essential",
          tags: p.tags,
          order: idx + 1,
          estimatedMinutes: p.difficulty === 'Hard' ? 60 : p.difficulty === 'Medium' ? 40 : 25,
          isPublished: true
        }));
        await CodingProblem.insertMany(toInsert);
        totalInserted += toInsert.length;
        console.log(`   ✅ "${topic.title}": ${toInsert.length} C system programming tasks`);
      }
    }

    console.log(`\n🎉 Operating Systems refactored cleanly! Total C lab tasks: ${totalInserted} (Zero unrelated questions in theoretical modules).`);
    process.exit(0);
  } catch (err) {
    console.error('❌ Error:', err);
    process.exit(1);
  }
};

refactorOSStrict();
