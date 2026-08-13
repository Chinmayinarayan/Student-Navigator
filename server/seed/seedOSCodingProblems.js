require('dotenv').config();
const connectDB = require('../config/db');
const Subject = require('../models/Subject');
const Topic = require('../models/Topic');
const CodingProblem = require('../models/CodingProblem');

const OS_CODING_PROBLEMS = [
  {
    topicTitle: "Introduction to Operating Systems",
    problems: [
      {
        title: "OS System Calls & Dual Mode Foundations",
        difficulty: "Easy",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/introduction-of-operating-system-set-1/",
        tags: ["OS", "System Calls", "Kernel"]
      },
      {
        title: "Operating Systems Cheatsheet & Study Guide",
        difficulty: "Easy",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/discuss/study-guide/5299702/operating-systems-cheatsheet/",
        tags: ["OS", "LeetCode", "Interview"]
      }
    ]
  },
  {
    topicTitle: "Operating System Architecture",
    problems: [
      {
        title: "Kernel and User Mode Architecture",
        difficulty: "Easy",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/dual-mode-operations-in-os/",
        tags: ["Architecture", "Kernel", "User Mode"]
      },
      {
        title: "Operating System Services & Structure",
        difficulty: "Easy",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/operating-system-services/",
        tags: ["Architecture", "Services"]
      }
    ]
  },
  {
    topicTitle: "Process Management",
    problems: [
      {
        title: "Process Creation using fork() and pipe()",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/c-program-demonstrate-fork-and-pipe/",
        tags: ["Process", "fork", "pipe", "C"]
      },
      {
        title: "Create a Process using fork() System Call",
        difficulty: "Easy",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/fork-system-call/",
        tags: ["Process", "fork", "System Calls"]
      },
      {
        title: "Process Management LeetCode OS Guide",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/discuss/study-guide/5299702/operating-systems-cheatsheet/",
        tags: ["Process Management", "LeetCode", "OS"]
      }
    ]
  },
  {
    topicTitle: "Threads and Multithreading",
    problems: [
      {
        title: "Multithreading using POSIX Threads (pthreads)",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/thread-functions-in-c-c/",
        tags: ["Threads", "pthreads", "C", "Concurrency"]
      },
      {
        title: "Thread Synchronization with Mutex Locks",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/mutex-lock-for-linux-thread-synchronization/",
        tags: ["Mutex", "Threads", "Synchronization"]
      }
    ]
  },
  {
    topicTitle: "CPU Scheduling",
    problems: [
      {
        title: "FCFS CPU Scheduling",
        difficulty: "Easy",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/dsa/first-come-first-serve-cpu-scheduling-non-preemptive/",
        tags: ["CPU Scheduling", "FCFS"]
      },
      {
        title: "SJF CPU Scheduling (Non-Preemptive & Preemptive)",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/program-for-shortest-job-first-or-sjf-cpu-scheduling-set-1-non-preemptive/",
        tags: ["CPU Scheduling", "SJF"]
      },
      {
        title: "Priority CPU Scheduling Program",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/operating-systems/program-for-priority-cpu-scheduling-set-1/",
        tags: ["CPU Scheduling", "Priority"]
      },
      {
        title: "Round Robin CPU Scheduling with Arrival Times",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/round-robin-scheduling-with-different-arrival-times/",
        tags: ["CPU Scheduling", "Round Robin"]
      },
      {
        title: "CPU Scheduling with Priority Queue & Gantt Chart",
        difficulty: "Hard",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/operating-systems/cpu-scheduling-in-operating-systems-using-priority-queue-with-gantt-chart/",
        tags: ["CPU Scheduling", "Priority Queue", "Gantt Chart"]
      }
    ]
  },
  {
    topicTitle: "Process Synchronization",
    problems: [
      {
        title: "Producer-Consumer Problem using Semaphores",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/producer-consumer-problem-using-semaphores-set-1/",
        tags: ["Synchronization", "Semaphores", "Producer-Consumer"]
      },
      {
        title: "Dining Philosophers Problem using Semaphores",
        difficulty: "Hard",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/dining-philosopher-problem-using-semaphores/",
        tags: ["Synchronization", "Dining Philosophers", "Semaphores"]
      },
      {
        title: "Readers-Writers Problem Implementation",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/readers-writers-problem-set-1-introduction-and-readers-preference-solution/",
        tags: ["Synchronization", "Readers-Writers"]
      }
    ]
  },
  {
    topicTitle: "Deadlocks",
    problems: [
      {
        title: "Banker's Algorithm for Deadlock Avoidance",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/bankers-algorithm-in-operating-system-2/",
        tags: ["Deadlocks", "Bankers Algorithm", "Safety"]
      },
      {
        title: "Deadlock Detection Algorithm",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/operating-system-deadlock-detection-algorithm/",
        tags: ["Deadlocks", "Detection", "Resource Allocation"]
      }
    ]
  },
  {
    topicTitle: "Memory Management",
    problems: [
      {
        title: "First Fit Algorithm in Memory Management",
        difficulty: "Easy",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/program-first-fit-algorithm-memory-management/",
        tags: ["Memory Management", "First Fit"]
      },
      {
        title: "Best Fit Algorithm in Memory Management",
        difficulty: "Easy",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/program-best-fit-algorithm-memory-management/",
        tags: ["Memory Management", "Best Fit"]
      },
      {
        title: "Worst Fit Algorithm in Memory Management",
        difficulty: "Easy",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/program-worst-fit-algorithm-memory-management/",
        tags: ["Memory Management", "Worst Fit"]
      }
    ]
  },
  {
    topicTitle: "Virtual Memory",
    problems: [
      {
        title: "LRU Page Replacement Algorithm Implementation",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/dsa/program-for-least-recently-used-lru-page-replacement-algorithm/",
        tags: ["Virtual Memory", "LRU", "Page Replacement"]
      },
      {
        title: "Page Faults in LRU Practice Challenge",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/problems/page-faults-in-lru5603/1",
        tags: ["Virtual Memory", "Page Faults", "Practice"]
      },
      {
        title: "FIFO Page Replacement Algorithm",
        difficulty: "Easy",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/dsa/program-page-replacement-algorithms-set-2-fifo/",
        tags: ["Virtual Memory", "FIFO", "Page Replacement"]
      },
      {
        title: "Optimal Page Replacement Algorithm",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/page-replacement-algorithms-in-operating-systems/",
        tags: ["Virtual Memory", "Optimal", "Beladys Anomaly"]
      }
    ]
  },
  {
    topicTitle: "File System Management",
    problems: [
      {
        title: "File Handling in C Classes & Streams",
        difficulty: "Easy",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/file-handling-c-classes/",
        tags: ["File Systems", "File Handling", "C"]
      },
      {
        title: "File Allocation Methods (Contiguous, Linked, Indexed)",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/file-allocation-methods/",
        tags: ["File Systems", "Allocation", "Inodes"]
      }
    ]
  },
  {
    topicTitle: "I/O Device Management",
    problems: [
      {
        title: "I/O & Disk Scheduling Concepts",
        difficulty: "Easy",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/disk-scheduling-algorithms/",
        tags: ["I/O", "Device Drivers", "Scheduling"]
      },
      {
        title: "I/O Interface, Interrupts and DMA Mode",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/io-interface-interrupt-and-dma-mode/",
        tags: ["I/O", "DMA", "Interrupts"]
      }
    ]
  },
  {
    topicTitle: "Disk Management",
    problems: [
      {
        title: "FCFS Disk Scheduling Algorithm",
        difficulty: "Easy",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/program-for-fcfs-disk-scheduling-algorithm/",
        tags: ["Disk Scheduling", "FCFS"]
      },
      {
        title: "SSTF Disk Scheduling Algorithm",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/program-for-sstf-disk-scheduling-algorithm/",
        tags: ["Disk Scheduling", "SSTF"]
      },
      {
        title: "SCAN (Elevator) Disk Scheduling Algorithm",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/scan-elevator-disk-scheduling-algorithms/",
        tags: ["Disk Scheduling", "SCAN"]
      },
      {
        title: "C-SCAN Disk Scheduling Algorithm",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/c-scan-disk-scheduling-algorithm/",
        tags: ["Disk Scheduling", "C-SCAN"]
      }
    ]
  },
  {
    topicTitle: "System Programming",
    problems: [
      {
        title: "fork() System Call Programming in C",
        difficulty: "Easy",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/fork-system-call/",
        tags: ["System Calls", "fork", "C"]
      },
      {
        title: "pipe() IPC System Call Programming",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/c-program-demonstrate-fork-and-pipe/",
        tags: ["System Calls", "pipe", "IPC"]
      },
      {
        title: "exec() Family of Functions in C",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/exec-family-of-functions-in-c/",
        tags: ["System Calls", "exec"]
      },
      {
        title: "wait() System Call in C",
        difficulty: "Easy",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/wait-system-call-c/",
        tags: ["System Calls", "wait", "Process"]
      }
    ]
  },
  {
    topicTitle: "Operating System Programming",
    problems: [
      {
        title: "Process Creation with fork()",
        difficulty: "Easy",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/fork-system-call/",
        tags: ["OS Programming", "fork"]
      },
      {
        title: "Parent-Child Process Communication using Pipe",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/c-program-demonstrate-fork-and-pipe/",
        tags: ["OS Programming", "IPC", "Pipes"]
      },
      {
        title: "Shared Memory IPC in C (shmget, shmat)",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/ipc-shared-memory/",
        tags: ["OS Programming", "Shared Memory", "IPC"]
      },
      {
        title: "Message Queues IPC (msgget, msgsnd, msgrcv)",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/ipc-using-message-queues/",
        tags: ["OS Programming", "Message Queues", "IPC"]
      }
    ]
  },
  {
    topicTitle: "Linux Operating System",
    problems: [
      {
        title: "Linux Command-Line & Bash Shell Practice",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/domains/shell",
        tags: ["Linux", "Bash", "Shell", "CLI"]
      },
      {
        title: "Bash Scripting & Text Processing",
        difficulty: "Medium",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/domains/shell",
        tags: ["Linux", "Shell Scripting", "Sed", "Awk"]
      },
      {
        title: "Linux Process & System Calls Programming",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/c-program-demonstrate-fork-and-pipe/",
        tags: ["Linux", "System Calls", "C"]
      }
    ]
  },
  {
    topicTitle: "Advanced Operating System Concepts",
    problems: [
      {
        title: "Distributed Operating Systems & RPC Concepts",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/distributed-operating-system/",
        tags: ["Distributed Systems", "RPC", "Clustering"]
      },
      {
        title: "Real-Time Operating Systems (RTOS) Scheduling",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/real-time-operating-system-rtos/",
        tags: ["RTOS", "Embedded", "Real-Time"]
      }
    ]
  },
  {
    topicTitle: "Practical Applications and Projects",
    problems: [
      {
        title: "CPU Scheduling Simulator (FCFS, SJF, Priority, RR)",
        difficulty: "Hard",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/round-robin-scheduling-with-different-arrival-times/",
        tags: ["Project", "CPU Scheduling", "Simulator"]
      },
      {
        title: "Page Replacement Simulator (FIFO, LRU, Optimal)",
        difficulty: "Hard",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/dsa/program-for-least-recently-used-lru-page-replacement-algorithm/",
        tags: ["Project", "Virtual Memory", "Page Replacement"]
      },
      {
        title: "Disk Scheduling Simulator (FCFS, SSTF, SCAN, C-SCAN)",
        difficulty: "Hard",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/c-scan-disk-scheduling-algorithm/",
        tags: ["Project", "Disk Scheduling", "Simulator"]
      }
    ]
  }
];

const seedOSCodingProblems = async () => {
  try {
    await connectDB();

    const subject = await Subject.findOne({
      name: { $regex: /Operating System/i }
    });
    if (!subject) {
      console.log('❌ Operating Systems subject not found');
      process.exit(1);
    }
    console.log(`✅ Found subject: "${subject.name}"`);

    const topics = await Topic.find({ subject: subject._id }).sort({ order: 1 });
    console.log(`✅ Found ${topics.length} Operating System topics\n`);

    let totalAdded = 0;
    let notFound = [];

    for (const entry of OS_CODING_PROBLEMS) {
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
        description: `Practice challenge for ${topic.title} in Operating Systems.`,
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

    console.log(`\n🎉 Operating Systems Coding Problems Seeded!`);
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

seedOSCodingProblems();
