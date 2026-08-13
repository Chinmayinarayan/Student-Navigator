require('dotenv').config();
const connectDB = require('../config/db');
const Subject = require('../models/Subject');
const Topic = require('../models/Topic');
const CodingProblem = require('../models/CodingProblem');

const MVC_CODING_PROBLEMS = [
  {
    topicTitle: "Introduction to Multivariable Calculus",
    problems: [
      {
        title: "Python: Basic Mathematical Operations",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/domains/python",
        tags: ["Python", "Calculus", "Mathematics"]
      },
      {
        title: "Python: Mathematical Functions",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/domains/mathematics",
        tags: ["Python", "Math", "Functions"]
      },
      {
        title: "NumPy: Array Mathematics",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/domains/python/numpy",
        tags: ["NumPy", "Arrays", "Math"]
      }
    ]
  },
  {
    topicTitle: "Vectors and Vector Algebra",
    problems: [
      {
        title: "Dot and Cross Product",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/np-dot-and-cross/problem",
        tags: ["NumPy", "Vectors", "Dot Product"]
      },
      {
        title: "Inner and Outer Product",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/np-inner-and-outer/problem",
        tags: ["NumPy", "Vectors", "Inner Product"]
      },
      {
        title: "Linear Algebra Determinant & Inversion",
        difficulty: "Medium",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/np-linear-algebra/problem",
        tags: ["NumPy", "Linear Algebra", "Vectors"]
      }
    ]
  },
  {
    topicTitle: "Three-Dimensional Coordinate Geometry",
    problems: [
      {
        title: "Find the Torsional Angle",
        difficulty: "Medium",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/class-2-find-the-torsional-angle/problem",
        tags: ["3D Geometry", "Vectors", "Python"]
      },
      {
        title: "Euclidean Distance in 3D Space",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/domains/mathematics",
        tags: ["Geometry", "Distance", "Math"]
      },
      {
        title: "3Sum Coordinates Search",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/3sum/",
        tags: ["Algorithms", "Geometry", "Vectors"]
      }
    ]
  },
  {
    topicTitle: "Limits and Continuity of Multivariable Functions",
    problems: [
      {
        title: "Limits & Numerical Computation",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/domains/mathematics",
        tags: ["Calculus", "Limits", "Numerical"]
      },
      {
        title: "SymPy Limits & Series Expansion",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://docs.sympy.org/latest/tutorials/intro-tutorial/calculus.html",
        tags: ["SymPy", "Calculus", "Limits"]
      }
    ]
  },
  {
    topicTitle: "Partial Differentiation",
    problems: [
      {
        title: "Symbolic Partial Differentiation",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://docs.sympy.org/latest/tutorials/intro-tutorial/calculus.html",
        tags: ["SymPy", "Derivatives", "Calculus"]
      },
      {
        title: "Calculus Derivatives Practice",
        difficulty: "Easy",
        platform: "Custom",
        problemUrl: "https://www.wolframalpha.com/",
        tags: ["Calculus", "Derivatives"]
      },
      {
        title: "Python SymPy Calculus Engine",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://docs.sympy.org/latest/tutorials/intro-tutorial/calculus.html",
        tags: ["SymPy", "Python", "Calculus"]
      }
    ]
  },
  {
    topicTitle: "Directional Derivatives and Gradient",
    problems: [
      {
        title: "Gradient Descent Implementation",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/data-science/what-is-gradient-descent/",
        tags: ["Gradient Descent", "Optimization", "Calculus"]
      },
      {
        title: "NumPy Linear Algebra & Gradients",
        difficulty: "Medium",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/np-linear-algebra/problem",
        tags: ["NumPy", "Gradient", "Vectors"]
      },
      {
        title: "Vector Operations & Norms",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/domains/python/numpy",
        tags: ["NumPy", "Vectors"]
      }
    ]
  },
  {
    topicTitle: "Optimization of Multivariable Functions",
    problems: [
      {
        title: "Gradient Descent & Local Extrema",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/data-science/what-is-gradient-descent/",
        tags: ["Optimization", "Gradient Descent"]
      },
      {
        title: "Linear Regression using Gradient Descent",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://www.kaggle.com/learn/intro-to-machine-learning",
        tags: ["Machine Learning", "Optimization", "Calculus"]
      },
      {
        title: "Optimization & Mathematical Programming",
        difficulty: "Hard",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/domains/mathematics",
        tags: ["Math", "Optimization"]
      }
    ]
  },
  {
    topicTitle: "Multiple Integrals",
    problems: [
      {
        title: "Numerical Integration Algorithms",
        difficulty: "Medium",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/domains/mathematics",
        tags: ["Integration", "Numerical Methods"]
      },
      {
        title: "Numerical Methods & Approximation",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/domains/mathematics",
        tags: ["Math", "Calculus", "Integration"]
      },
      {
        title: "Numerical Integration with SciPy",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://docs.scipy.org/doc/scipy/reference/integrate.html",
        tags: ["SciPy", "Python", "Integrals"]
      }
    ]
  },
  {
    topicTitle: "Applications of Double and Triple Integrals",
    problems: [
      {
        title: "Numerical Integration of Volumes",
        difficulty: "Medium",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/domains/mathematics",
        tags: ["Calculus", "Volume", "Integrals"]
      },
      {
        title: "Multiple Integration Using SciPy dblquad & tplquad",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://docs.scipy.org/doc/scipy/reference/integrate.html",
        tags: ["SciPy", "Double Integrals", "Triple Integrals"]
      }
    ]
  },
  {
    topicTitle: "Vector Calculus",
    problems: [
      {
        title: "Dot and Cross Vector Fields",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/np-dot-and-cross/problem",
        tags: ["Vector Calculus", "Dot Product", "NumPy"]
      },
      {
        title: "Inner and Outer Vector Products",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/np-inner-and-outer/problem",
        tags: ["Vectors", "Inner Product"]
      },
      {
        title: "Linear Algebra Vector Computations",
        difficulty: "Medium",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/np-linear-algebra/problem",
        tags: ["Linear Algebra", "Vector Fields"]
      }
    ]
  },
  {
    topicTitle: "Line Integrals",
    problems: [
      {
        title: "Numerical Line Integration with SciPy",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://docs.scipy.org/doc/scipy/reference/integrate.html",
        tags: ["Line Integrals", "SciPy", "Calculus"]
      },
      {
        title: "Python Numerical Methods in Vector Fields",
        difficulty: "Medium",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/domains/mathematics",
        tags: ["Math", "Vector Fields"]
      }
    ]
  },
  {
    topicTitle: "Surface Integrals",
    problems: [
      {
        title: "Numerical Surface Integration with SciPy",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://docs.scipy.org/doc/scipy/reference/integrate.html",
        tags: ["Surface Integrals", "SciPy"]
      },
      {
        title: "NumPy Mathematical Flux Computations",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/domains/python/numpy",
        tags: ["NumPy", "Surface Integrals"]
      }
    ]
  },
  {
    topicTitle: "Integral Theorems",
    problems: [
      {
        title: "Green's, Stokes' & Divergence Numerical Verification",
        difficulty: "Hard",
        platform: "Custom",
        problemUrl: "https://docs.scipy.org/doc/scipy/reference/integrate.html",
        tags: ["Integral Theorems", "Stokes Theorem", "SciPy"]
      },
      {
        title: "Vector Field Simulation & Divergence",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/data-science/what-is-gradient-descent/",
        tags: ["Calculus", "Divergence", "Vector Fields"]
      }
    ]
  },
  {
    topicTitle: "Numerical Methods and Computational Applications",
    problems: [
      {
        title: "Numerical Integration",
        difficulty: "Medium",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/domains/mathematics",
        tags: ["Numerical Methods", "Integration"]
      },
      {
        title: "Find the Torsional Angle",
        difficulty: "Medium",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/class-2-find-the-torsional-angle/problem",
        tags: ["Geometry", "Vectors", "Angles"]
      },
      {
        title: "NumPy Linear Algebra Operations",
        difficulty: "Medium",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/np-linear-algebra/problem",
        tags: ["NumPy", "Linear Algebra"]
      },
      {
        title: "Matrix Multiplication Foundations",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/linear-algebra-foundations-4-matrix-multiplication/problem",
        tags: ["Matrices", "Multiplication"]
      },
      {
        title: "Matrix Multiplication 2x2",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/linear-algebra-foundations-3-matrix-multiplication/problem",
        tags: ["Matrices", "Linear Algebra"]
      },
      {
        title: "Matrix Power Computation (1000th Power)",
        difficulty: "Hard",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/linear-algebra-foundations-7-the-1000th-power-of-a-matrix/problem",
        tags: ["Matrices", "Matrix Power", "Linear Algebra"]
      }
    ]
  },
  {
    topicTitle: "Applications in Engineering and Computer Science",
    problems: [
      {
        title: "3Sum Vector Problem",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/3sum/",
        tags: ["LeetCode", "Vectors", "Optimization"]
      },
      {
        title: "3Sum Closest Target Search",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/3sum-closest/",
        tags: ["LeetCode", "Distance", "Optimization"]
      },
      {
        title: "NumPy Linear Algebra Applications",
        difficulty: "Medium",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/np-linear-algebra/problem",
        tags: ["NumPy", "Linear Algebra", "Engineering"]
      },
      {
        title: "Matrix Multiplication in Engineering",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/linear-algebra-foundations-4-matrix-multiplication/problem",
        tags: ["Engineering", "Matrices"]
      },
      {
        title: "Matrix Power Scaling",
        difficulty: "Hard",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/linear-algebra-foundations-7-the-1000th-power-of-a-matrix/problem",
        tags: ["Linear Algebra", "Power"]
      }
    ]
  },
  {
    topicTitle: "Practical Problem Solving",
    problems: [
      {
        title: "3Sum Triple Coordinates",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/3sum/",
        tags: ["LeetCode", "Problem Solving"]
      },
      {
        title: "3Sum Closest Value",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problems/3sum-closest/",
        tags: ["LeetCode", "Distance"]
      },
      {
        title: "Dot and Cross Computations",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/np-dot-and-cross/problem",
        tags: ["NumPy", "Dot Product"]
      },
      {
        title: "Inner and Outer Product Analysis",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/np-inner-and-outer/problem",
        tags: ["NumPy", "Inner Product"]
      },
      {
        title: "Linear Algebra Determinant & Rank",
        difficulty: "Medium",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/np-linear-algebra/problem",
        tags: ["NumPy", "Linear Algebra"]
      },
      {
        title: "Matrix Addition Foundations",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/linear-algebra-foundations-1/problem",
        tags: ["Matrices", "Addition"]
      },
      {
        title: "Matrix Multiplication Foundations",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/linear-algebra-foundations-4-matrix-multiplication/problem",
        tags: ["Matrices", "Multiplication"]
      },
      {
        title: "Systems of Linear Equations",
        difficulty: "Medium",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/challenges/linear-algebra-fundamentals-8-systems-of-equations/problem",
        tags: ["Systems of Equations", "Linear Algebra"]
      },
      {
        title: "Numerical Integration Applications",
        difficulty: "Medium",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/domains/mathematics",
        tags: ["Calculus", "Numerical Integration"]
      }
    ]
  }
];

const seedMVCCodingProblems = async () => {
  try {
    await connectDB();

    const subject = await Subject.findOne({ name: /^Multivariable Calculus$/i });
    if (!subject) {
      console.log('❌ Multivariable Calculus subject not found');
      process.exit(1);
    }
    console.log(`✅ Found subject: "${subject.name}"`);

    const topics = await Topic.find({ subject: subject._id }).sort({ order: 1 });
    console.log(`✅ Found ${topics.length} Multivariable Calculus topics\n`);

    let totalAdded = 0;
    let notFound = [];

    for (const entry of MVC_CODING_PROBLEMS) {
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
        description: `Practice problem for ${topic.title} in Multivariable Calculus.`,
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

    console.log(`\n🎉 Multivariable Calculus Coding Problems Seeded!`);
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

seedMVCCodingProblems();
