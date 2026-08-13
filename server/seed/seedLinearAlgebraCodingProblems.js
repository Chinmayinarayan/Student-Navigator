require('dotenv').config();
const connectDB = require('../config/db');
const Subject = require('../models/Subject');
const Topic = require('../models/Topic');
const CodingProblem = require('../models/CodingProblem');

const LINEAR_ALGEBRA_CODING_PROBLEMS = [
  {
    topicTitle: "Introduction to Linear Algebra",
    problems: [
      {
        title: "NumPy Array Setup & Vector Basics",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/domains/python/numpy",
        tags: ["Linear Algebra", "NumPy", "Vectors"]
      },
      {
        title: "Mathematical Foundations of Vectors",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/domains/mathematics",
        tags: ["Vectors", "Mathematics"]
      }
    ]
  },
  {
    topicTitle: "Matrices",
    problems: [
      {
        title: "Matrix Addition",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/linear-algebra-foundations-1/problem",
        tags: ["Matrices", "Matrix Addition", "Linear Algebra"]
      },
      {
        title: "Matrix Multiplication",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/linear-algebra-foundations-4-matrix-multiplication/problem",
        tags: ["Matrices", "Matrix Multiplication"]
      }
    ]
  },
  {
    topicTitle: "Determinants",
    problems: [
      {
        title: "Determinant of the Matrix",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/linear-algebra-foundations-6-determinant-of-the-matrix/problem",
        tags: ["Determinants", "Matrices"]
      },
      {
        title: "NumPy Matrix Determinant",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/np-linear-algebra/problem",
        tags: ["NumPy", "Determinant", "Linear Algebra"]
      }
    ]
  },
  {
    topicTitle: "Inverse of a Matrix",
    problems: [
      {
        title: "The Inverse of a Matrix",
        difficulty: "Medium",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/linear-algebra-foundations-5-the-inverse-of-a-matrix/problem",
        tags: ["Matrix Inverse", "Linear Algebra"]
      },
      {
        title: "NumPy Matrix Inversion (np.linalg.inv)",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/np-linear-algebra/problem",
        tags: ["NumPy", "Matrix Inversion"]
      }
    ]
  },
  {
    topicTitle: "Systems of Linear Equations",
    problems: [
      {
        title: "Systems of Equations",
        difficulty: "Medium",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/linear-algebra-fundamentals-8-systems-of-equations/problem",
        tags: ["Linear Systems", "Gaussian Elimination", "Equations"]
      },
      {
        title: "Solving Linear Systems with NumPy (np.linalg.solve)",
        difficulty: "Medium",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/np-linear-algebra/problem",
        tags: ["NumPy", "Systems of Equations"]
      }
    ]
  },
  {
    topicTitle: "Vector Spaces",
    problems: [
      {
        title: "Inner and Outer Product",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/np-inner-and-outer/problem",
        tags: ["Vector Spaces", "Inner Product", "NumPy"]
      },
      {
        title: "Dot and Cross Product",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/np-dot-and-cross/problem",
        tags: ["Vector Spaces", "Dot Product", "Cross Product"]
      }
    ]
  },
  {
    topicTitle: "Linear Transformations",
    problems: [
      {
        title: "Matrix Multiplication as Linear Transformation",
        difficulty: "Medium",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/linear-algebra-foundations-4-matrix-multiplication/problem",
        tags: ["Linear Transformations", "Matrix Mapping"]
      },
      {
        title: "Linear Transformations & Mapping Foundations",
        difficulty: "Medium",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/domains/mathematics",
        tags: ["Linear Transformations", "Mathematics"]
      }
    ]
  },
  {
    topicTitle: "Eigenvalues and Eigenvectors",
    problems: [
      {
        title: "Eigenvalues and Eigenvectors Foundations",
        difficulty: "Medium",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/linear-algebra-foundations-9-eigenvalues-and-eigenvectors/problem",
        tags: ["Eigenvalues", "Eigenvectors", "Linear Algebra"]
      },
      {
        title: "NumPy Eigenvalues & Eigenvectors (np.linalg.eig)",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/np-linear-algebra/problem",
        tags: ["NumPy", "Eigenvalues", "Eigenvectors"]
      }
    ]
  },
  {
    topicTitle: "Inner Product Spaces",
    problems: [
      {
        title: "Inner and Outer Product",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/np-inner-and-outer/problem",
        tags: ["Inner Product", "Vector Spaces", "Norms"]
      },
      {
        title: "Dot Product & Orthogonality",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/np-dot-and-cross/problem",
        tags: ["Orthogonality", "Dot Product"]
      }
    ]
  },
  {
    topicTitle: "Advanced Matrix Decompositions",
    problems: [
      {
        title: "Linear Algebra Matrix Decompositions",
        difficulty: "Medium",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/np-linear-algebra/problem",
        tags: ["Matrix Decomposition", "NumPy"]
      },
      {
        title: "Singular Value Decomposition (SVD) with NumPy",
        difficulty: "Hard",
        platform: "Custom",
        problemUrl: "https://numpy.org/doc/stable/reference/generated/numpy.linalg.svd.html",
        tags: ["SVD", "Matrix Decomposition", "NumPy"]
      }
    ]
  },
  {
    topicTitle: "Numerical Linear Algebra",
    problems: [
      {
        title: "NumPy Linear Algebra Numerical Computations",
        difficulty: "Medium",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/np-linear-algebra/problem",
        tags: ["Numerical Methods", "NumPy"]
      },
      {
        title: "Matrix Multiplication Foundations",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/linear-algebra-foundations-4-matrix-multiplication/problem",
        tags: ["Matrices", "Numerical Methods"]
      },
      {
        title: "NumPy Linear Algebra Practice Suite",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/domains/python/numpy",
        tags: ["NumPy", "Practice"]
      }
    ]
  },
  {
    topicTitle: "Applications in Computer Science",
    problems: [
      {
        title: "Matrix Transformations in Computer Graphics",
        difficulty: "Medium",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/linear-algebra-foundations-4-matrix-multiplication/problem",
        tags: ["Computer Science", "Graphics", "Matrices"]
      },
      {
        title: "Linear Algebra in Machine Learning & Algorithms",
        difficulty: "Medium",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/np-linear-algebra/problem",
        tags: ["Computer Science", "Machine Learning"]
      }
    ]
  },
  {
    topicTitle: "Optimization and Linear Algebra",
    problems: [
      {
        title: "Gradient Descent Optimization",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/data-science/what-is-gradient-descent/",
        tags: ["Optimization", "Gradient Descent", "Linear Algebra"]
      },
      {
        title: "Intro to Machine Learning Optimization",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://www.kaggle.com/learn/intro-to-machine-learning",
        tags: ["Machine Learning", "Optimization", "Linear Regression"]
      }
    ]
  },
  {
    topicTitle: "Programming with Linear Algebra",
    problems: [
      {
        title: "Matrix Addition",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/linear-algebra-foundations-1/problem",
        tags: ["Matrices", "Addition"]
      },
      {
        title: "Matrix Multiplication",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/linear-algebra-foundations-4-matrix-multiplication/problem",
        tags: ["Matrices", "Multiplication"]
      },
      {
        title: "Dot and Cross Product",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/np-dot-and-cross/problem",
        tags: ["Dot Product", "Cross Product"]
      },
      {
        title: "Inner and Outer Product",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/np-inner-and-outer/problem",
        tags: ["Inner Product", "Outer Product"]
      },
      {
        title: "Linear Algebra Suite (np.linalg)",
        difficulty: "Medium",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/np-linear-algebra/problem",
        tags: ["Linear Algebra", "NumPy"]
      },
      {
        title: "Determinant of the Matrix",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/linear-algebra-foundations-6-determinant-of-the-matrix/problem",
        tags: ["Determinant", "Linear Algebra"]
      }
    ]
  },
  {
    topicTitle: "Projects and Case Studies",
    problems: [
      {
        title: "End-to-End Matrix Operations Project",
        difficulty: "Hard",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/np-linear-algebra/problem",
        tags: ["Project", "Matrix Operations", "Linear Algebra"]
      },
      {
        title: "Linear Regression & SVD Machine Learning Application",
        difficulty: "Hard",
        platform: "Custom",
        problemUrl: "https://www.kaggle.com/learn/intro-to-machine-learning",
        tags: ["Case Study", "Machine Learning", "SVD"]
      }
    ]
  }
];

const seedLinearAlgebraCodingProblems = async () => {
  try {
    await connectDB();

    const subject = await Subject.findOne({ name: /^Linear Algebra$/i });
    if (!subject) {
      console.log('❌ Linear Algebra subject not found');
      process.exit(1);
    }
    console.log(`✅ Found subject: "${subject.name}"`);

    const topics = await Topic.find({ subject: subject._id }).sort({ order: 1 });
    console.log(`✅ Found ${topics.length} Linear Algebra topics\n`);

    let totalAdded = 0;
    let notFound = [];

    for (const entry of LINEAR_ALGEBRA_CODING_PROBLEMS) {
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
        description: `Practice problem for ${topic.title} in Linear Algebra.`,
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

    console.log(`\n🎉 Linear Algebra Coding Problems Seeded!`);
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

seedLinearAlgebraCodingProblems();
