module.exports = [
  {
    title: "Arrays Quiz",

    description: "Basic quiz on Arrays.",

    duration: 10,

    passingMarks: 40,

    totalMarks: 5,

    topicTitle: "Arrays",

    questions: [
      {
        question: "Which data structure stores elements contiguously?",

        options: [
          "Array",
          "Linked List",
          "Tree",
          "Graph",
        ],

        correctAnswer: "Array",

        explanation:
          "Arrays store elements in contiguous memory.",

        marks: 1,
      },

      {
        question: "What is the index of the first element?",

        options: [
          "0",
          "1",
          "-1",
          "Depends",
        ],

        correctAnswer: "0",

        explanation:
          "Array indexing starts from 0 in C, C++, Java and JavaScript.",

        marks: 1,
      },

      {
        question: "Average time complexity of accessing an array element?",

        options: [
          "O(1)",
          "O(n)",
          "O(log n)",
          "O(n log n)",
        ],

        correctAnswer: "O(1)",

        explanation:
          "Arrays provide constant-time indexing.",

        marks: 1,
      },

      {
        question: "Which operation is expensive in arrays?",

        options: [
          "Insertion at beginning",
          "Access by index",
          "Reading element",
          "Updating element",
        ],

        correctAnswer: "Insertion at beginning",

        explanation:
          "Elements need to be shifted.",

        marks: 1,
      },

      {
        question: "Which of these is NOT an array characteristic?",

        options: [
          "Fixed size",
          "Random access",
          "Contiguous memory",
          "Dynamic node allocation",
        ],

        correctAnswer: "Dynamic node allocation",

        explanation:
          "Dynamic nodes belong to linked lists.",

        marks: 1,
      },
    ],
  },
];