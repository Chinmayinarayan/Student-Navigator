/**
 * fixDsaBasicTest.js
 * Updates the existing DSA Basic Test to have 20 questions
 */
require("dotenv").config();
const mongoose = require("mongoose");
const Subject = require("../models/Subject");
const Topic = require("../models/Topic");
const Question = require("../models/Question");
const Test = require("../models/Test");

const DSA_BASIC_QUESTIONS = [
  {
    question: "What is the time complexity of accessing an element in an array by index?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
    correctAnswer: "O(1)",
    difficulty: "easy",
    explanation: "Array access by index is a direct memory address calculation — constant time.",
  },
  {
    question: "Which data structure uses LIFO (Last In, First Out) order?",
    options: ["Queue", "Stack", "Linked List", "Tree"],
    correctAnswer: "Stack",
    difficulty: "easy",
    explanation: "A stack pushes and pops from the same end, following LIFO.",
  },
  {
    question: "What is the time complexity of Binary Search?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    correctAnswer: "O(log n)",
    difficulty: "easy",
    explanation: "Binary search halves the search space each iteration.",
  },
  {
    question: "Which of the following is NOT a linear data structure?",
    options: ["Array", "Linked List", "Stack", "Tree"],
    correctAnswer: "Tree",
    difficulty: "easy",
    explanation: "Trees are hierarchical (non-linear) structures.",
  },
  {
    question: "What is the worst-case time complexity of Bubble Sort?",
    options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
    correctAnswer: "O(n²)",
    difficulty: "easy",
    explanation: "Bubble sort compares adjacent elements; worst case is O(n²).",
  },
  {
    question: "In a Queue, insertion happens at which end?",
    options: ["Front", "Rear", "Middle", "Both ends"],
    correctAnswer: "Rear",
    difficulty: "easy",
    explanation: "Queues follow FIFO: enqueue at rear, dequeue at front.",
  },
  {
    question: "What is the space complexity of an algorithm that uses a single variable?",
    options: ["O(n)", "O(1)", "O(log n)", "O(n²)"],
    correctAnswer: "O(1)",
    difficulty: "easy",
    explanation: "Using a constant number of variables means O(1) space.",
  },
  {
    question: "Which sorting algorithm has the best average-case performance?",
    options: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Selection Sort"],
    correctAnswer: "Merge Sort",
    difficulty: "medium",
    explanation: "Merge Sort runs in O(n log n) average and worst case.",
  },
  {
    question: "What does a hash table use to map keys to values?",
    options: ["Sorting", "Hashing function", "Binary search", "Pointer arithmetic"],
    correctAnswer: "Hashing function",
    difficulty: "easy",
    explanation: "Hash tables use a hash function to compute the index.",
  },
  {
    question: "How many children can each node have in a binary tree?",
    options: ["1", "2", "3", "Unlimited"],
    correctAnswer: "2",
    difficulty: "easy",
    explanation: "Binary trees allow at most 2 children: left and right.",
  },
  {
    question: "Which traversal visits root, left, right in that order?",
    options: ["Inorder", "Postorder", "Preorder", "Level-order"],
    correctAnswer: "Preorder",
    difficulty: "easy",
    explanation: "Preorder: Root → Left → Right.",
  },
  {
    question: "What is the time complexity of inserting into a linked list at the head?",
    options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
    correctAnswer: "O(1)",
    difficulty: "easy",
    explanation: "Head insertion only requires updating the head pointer.",
  },
  {
    question: "Which algorithm is used to find the shortest path in a weighted graph?",
    options: ["DFS", "BFS", "Dijkstra's", "Bubble Sort"],
    correctAnswer: "Dijkstra's",
    difficulty: "medium",
    explanation: "Dijkstra's algorithm finds shortest paths in graphs with non-negative weights.",
  },
  {
    question: "What is a 'collision' in a hash table?",
    options: ["Two values with the same hash", "Two values with the same key", "Array overflow", "Memory leak"],
    correctAnswer: "Two values with the same hash",
    difficulty: "medium",
    explanation: "Collision occurs when two different keys produce the same hash index.",
  },
  {
    question: "What is the height of a balanced binary tree with n nodes?",
    options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
    correctAnswer: "O(log n)",
    difficulty: "medium",
    explanation: "A balanced tree has height proportional to log₂n.",
  },
  {
    question: "Which operation is NOT O(1) in a doubly linked list?",
    options: ["Insert at head", "Delete at tail", "Search by value", "Insert at tail"],
    correctAnswer: "Search by value",
    difficulty: "medium",
    explanation: "Search requires traversal — O(n).",
  },
  {
    question: "What is the main advantage of a linked list over an array?",
    options: ["Faster access by index", "Dynamic size", "Better cache performance", "Simpler implementation"],
    correctAnswer: "Dynamic size",
    difficulty: "easy",
    explanation: "Linked lists grow/shrink at runtime; arrays have fixed size.",
  },
  {
    question: "In Big-O notation, O(2n) simplifies to?",
    options: ["O(2n)", "O(n)", "O(n²)", "O(log n)"],
    correctAnswer: "O(n)",
    difficulty: "easy",
    explanation: "Constants are dropped in Big-O; O(2n) = O(n).",
  },
  {
    question: "What data structure is used internally by recursion?",
    options: ["Queue", "Stack", "Heap", "Array"],
    correctAnswer: "Stack",
    difficulty: "easy",
    explanation: "The call stack stores function frames during recursion.",
  },
  {
    question: "Which graph traversal uses a queue?",
    options: ["DFS", "BFS", "Dijkstra's", "A*"],
    correctAnswer: "BFS",
    difficulty: "easy",
    explanation: "BFS explores level by level using a queue.",
  },
];

async function fixDsaBasicTest() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("✅ Connected to MongoDB");

  const dsaSubject = await Subject.findOne({ name: /Data Structures/i });
  if (!dsaSubject) {
    console.log("❌ DSA subject not found");
    await mongoose.disconnect();
    return;
  }

  const topic = await Topic.findOne({ subject: dsaSubject._id, isPublished: true });

  // Create fresh questions
  const questionDocs = await Question.insertMany(
    DSA_BASIC_QUESTIONS.map((q) => ({
      subject: dsaSubject._id,
      topic: topic?._id,
      type: "mcq",
      questionType: "theoretical",
      difficulty: q.difficulty,
      question: q.question,
      options: q.options,
      correctAnswer: q.correctAnswer,
      explanation: q.explanation,
      isActive: true,
    }))
  );
  const questionIds = questionDocs.map((d) => d._id);
  console.log(`✅ Created ${questionIds.length} new questions`);

  // Update existing DSA Basic Test
  const updated = await Test.findOneAndUpdate(
    { title: "DSA Basic Test" },
    {
      description: "Covers fundamental data structures and algorithms — arrays, linked lists, sorting, basic complexity analysis. Ideal for beginners building a placement foundation.",
      category: "Programming & DSA",
      difficulty: "Beginner",
      duration: 20,
      passingScore: 60,
      topics: ["Arrays", "Linked Lists", "Stacks", "Queues", "Sorting", "Big-O Notation", "Binary Search"],
      totalMarks: questionIds.length,
      negativeMarking: false,
      allowRetake: true,
      questions: questionIds,
    },
    { new: true }
  );

  if (updated) {
    console.log(`✅ Updated "DSA Basic Test" — now has ${updated.questions.length} questions`);
  } else {
    console.log("❌ DSA Basic Test not found for update");
  }

  await mongoose.disconnect();
  process.exit(0);
}

fixDsaBasicTest().catch((err) => {
  console.error("❌ Fix failed:", err);
  process.exit(1);
});
