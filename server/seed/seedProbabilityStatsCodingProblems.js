require('dotenv').config();
const connectDB = require('../config/db');
const Subject = require('../models/Subject');
const Topic = require('../models/Topic');
const CodingProblem = require('../models/CodingProblem');

const PROBABILITY_STATS_CODING_PROBLEMS = [
  {
    topicTitle: "Introduction to Probability and Statistics",
    problems: [
      {
        title: "Mean, Median, and Mode of a Dataset",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/domains/tutorials/10-days-of-statistics",
        tags: ["Statistics", "Mean", "Median", "Mode"]
      },
      {
        title: "Calculate Range and Variance",
        difficulty: "Easy",
        platform: "CodeChef",
        problemUrl: "https://www.codechef.com/practice",
        tags: ["Statistics", "Variance", "Range"]
      },
      {
        title: "Standard Deviation Calculation",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/domains/tutorials/10-days-of-statistics",
        tags: ["Statistics", "Standard Deviation"]
      }
    ]
  },
  {
    topicTitle: "Basic Concepts of Probability",
    problems: [
      {
        title: "Probability of an Event from Given Outcomes",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/domains/tutorials/10-days-of-statistics",
        tags: ["Probability", "Events", "Sample Space"]
      },
      {
        title: "Conditional Probability & Compound Events",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://www.khanacademy.org/math/statistics-probability",
        tags: ["Probability", "Conditional", "Khan Academy"]
      },
      {
        title: "Bayes' Theorem Implementation in Python",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/probability-and-statistics/",
        tags: ["Probability", "Bayes Theorem", "Python"]
      },
      {
        title: "Simulate Probability using Random Numbers",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problemset/",
        tags: ["Probability", "Simulation", "LeetCode"]
      }
    ]
  },
  {
    topicTitle: "Random Variables",
    problems: [
      {
        title: "Generate Random Samples & Frequency Distribution",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/domains/tutorials/10-days-of-statistics",
        tags: ["Random Variables", "Frequency", "Sampling"]
      },
      {
        title: "Expected Value of Discrete Random Variable",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/probability-and-statistics/",
        tags: ["Random Variables", "Expected Value"]
      },
      {
        title: "Variance and Standard Deviation of Random Variables",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://www.khanacademy.org/math/statistics-probability",
        tags: ["Random Variables", "Variance"]
      }
    ]
  },
  {
    topicTitle: "Discrete Probability Distributions",
    problems: [
      {
        title: "Binomial Probability Calculation",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/domains/tutorials/10-days-of-statistics",
        tags: ["Binomial", "Probability", "Discrete"]
      },
      {
        title: "Binomial Distribution Simulation in Python",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/binomial-distribution/",
        tags: ["Binomial", "Simulation", "Python"]
      },
      {
        title: "Poisson Distribution Probability Calculation",
        difficulty: "Medium",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/domains/tutorials/10-days-of-statistics",
        tags: ["Poisson", "Distributions"]
      },
      {
        title: "Expected Value & Variance of Binomial Distribution",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://www.khanacademy.org/math/statistics-probability",
        tags: ["Binomial", "Expected Value"]
      }
    ]
  },
  {
    topicTitle: "Continuous Probability Distributions",
    problems: [
      {
        title: "Normal Distribution Probability Calculation",
        difficulty: "Medium",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/domains/tutorials/10-days-of-statistics",
        tags: ["Normal Distribution", "Continuous", "CDF"]
      },
      {
        title: "Calculate Z-Score and Standard Normal Curve",
        difficulty: "Easy",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/probability-and-statistics/",
        tags: ["Z-Score", "Normal Distribution"]
      },
      {
        title: "Generate Normally Distributed Random Data in Python",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://www.kaggle.com/learn",
        tags: ["NumPy", "Normal Distribution", "Python"]
      }
    ]
  },
  {
    topicTitle: "Descriptive Statistics",
    problems: [
      {
        title: "Mean, Median, and Mode Analysis",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/domains/tutorials/10-days-of-statistics",
        tags: ["Descriptive Stats", "Central Tendency"]
      },
      {
        title: "Variance and Standard Deviation Computation",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/domains/tutorials/10-days-of-statistics",
        tags: ["Descriptive Stats", "Dispersion"]
      },
      {
        title: "Quartiles and Interquartile Range (IQR)",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/domains/tutorials/10-days-of-statistics",
        tags: ["Quartiles", "IQR", "Statistics"]
      },
      {
        title: "Outlier Detection using IQR Method",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://www.kaggle.com/learn",
        tags: ["Outliers", "IQR", "Data Cleaning"]
      }
    ]
  },
  {
    topicTitle: "Data Visualization and Statistical Representation",
    problems: [
      {
        title: "Histograms & Frequency Polygons with Matplotlib",
        difficulty: "Easy",
        platform: "Custom",
        problemUrl: "https://www.w3resource.com/graphics/matplotlib/",
        tags: ["Matplotlib", "Histogram", "Visualization"]
      },
      {
        title: "Bar Charts and Categorical Data Visualization",
        difficulty: "Easy",
        platform: "Custom",
        problemUrl: "https://www.kaggle.com/learn",
        tags: ["Visualization", "Bar Chart", "Seaborn"]
      },
      {
        title: "Scatter Plots & Bivariate Correlation Visuals",
        difficulty: "Easy",
        platform: "Custom",
        problemUrl: "https://www.w3resource.com/graphics/matplotlib/",
        tags: ["Scatter Plot", "Correlation", "Matplotlib"]
      },
      {
        title: "Box Plots & Distribution Visualizer",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://www.kaggle.com/learn",
        tags: ["Box Plot", "Distributions", "Visualization"]
      }
    ]
  },
  {
    topicTitle: "Sampling Theory",
    problems: [
      {
        title: "Random Sampling from a Dataset with NumPy/Pandas",
        difficulty: "Easy",
        platform: "Custom",
        problemUrl: "https://www.kaggle.com/learn",
        tags: ["Sampling", "NumPy", "Pandas"]
      },
      {
        title: "Sample Mean vs Population Mean Analysis",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://www.kaggle.com/learn",
        tags: ["Sampling", "Estimation"]
      },
      {
        title: "Central Limit Theorem & Sampling Distribution Simulation",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://www.kaggle.com/learn",
        tags: ["CLT", "Sampling Theory", "Simulation"]
      }
    ]
  },
  {
    topicTitle: "Statistical Estimation",
    problems: [
      {
        title: "Confidence Interval Calculation in Python",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://www.khanacademy.org/math/statistics-probability",
        tags: ["Confidence Interval", "Estimation"]
      },
      {
        title: "Estimate Population Mean & Standard Error",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://www.kaggle.com/learn",
        tags: ["Standard Error", "Point Estimation"]
      },
      {
        title: "Sample Proportion & Confidence Interval Simulation",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://www.kaggle.com/learn",
        tags: ["Proportions", "Confidence Interval"]
      }
    ]
  },
  {
    topicTitle: "Hypothesis Testing",
    problems: [
      {
        title: "One-Sample & Two-Sample T-Test with SciPy",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://docs.scipy.org/doc/scipy/reference/stats.html",
        tags: ["T-Test", "Hypothesis Testing", "SciPy"]
      },
      {
        title: "Z-Test and P-Value Calculation",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://www.kaggle.com/learn",
        tags: ["Z-Test", "P-Value", "Hypothesis"]
      },
      {
        title: "Chi-Square Test of Independence",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://docs.scipy.org/doc/scipy/reference/stats.html",
        tags: ["Chi-Square", "Hypothesis Testing", "SciPy"]
      },
      {
        title: "Type I and Type II Error Significance Simulation",
        difficulty: "Hard",
        platform: "Custom",
        problemUrl: "https://www.kaggle.com/learn",
        tags: ["Hypothesis Testing", "Errors", "Significance"]
      }
    ]
  },
  {
    topicTitle: "Correlation and Regression Analysis",
    problems: [
      {
        title: "Pearson Correlation Coefficient",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/domains/tutorials/10-days-of-statistics",
        tags: ["Correlation", "Pearson", "Statistics"]
      },
      {
        title: "Spearman's Rank Correlation",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/domains/tutorials/10-days-of-statistics",
        tags: ["Spearman", "Rank Correlation"]
      },
      {
        title: "Simple Linear Regression & Best Fit Line",
        difficulty: "Medium",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/domains/tutorials/10-days-of-statistics",
        tags: ["Linear Regression", "Best Fit"]
      },
      {
        title: "Multiple Linear Regression & R² Coefficient",
        difficulty: "Hard",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/domains/tutorials/10-days-of-statistics",
        tags: ["Multiple Regression", "R-Squared"]
      },
      {
        title: "Regression Predictions & Residual Analysis",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://www.kaggle.com/learn",
        tags: ["Regression", "Residuals", "Kaggle"]
      }
    ]
  },
  {
    topicTitle: "Statistical Quality Control",
    problems: [
      {
        title: "Calculate Control Limits (UCL, LCL, CL)",
        difficulty: "Easy",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/probability-and-statistics/",
        tags: ["SQC", "Control Limits", "Quality Control"]
      },
      {
        title: "Generate Shewhart Control Charts & Outlier Detection",
        difficulty: "Medium",
        platform: "GeeksforGeeks",
        problemUrl: "https://www.geeksforgeeks.org/probability-and-statistics/",
        tags: ["Control Charts", "Shewhart", "Quality Control"]
      }
    ]
  },
  {
    topicTitle: "Probability and Statistics Using Programming",
    problems: [
      {
        title: "Monte Carlo Simulation in Python",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://www.kaggle.com/learn",
        tags: ["Monte Carlo", "Simulation", "Python"]
      },
      {
        title: "Random Number Generation & Probability Simulations",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problemset/",
        tags: ["Simulation", "Random", "LeetCode"]
      },
      {
        title: "Probability Distributions Generator (Binomial & Normal)",
        difficulty: "Easy",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/domains/python",
        tags: ["NumPy", "Distributions", "Python"]
      },
      {
        title: "End-to-End Statistical Analysis of a CSV Dataset",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://www.kaggle.com/learn",
        tags: ["Pandas", "CSV", "Statistics"]
      },
      {
        title: "Linear Regression & Correlation Engine with NumPy",
        difficulty: "Medium",
        platform: "HackerRank",
        problemUrl: "https://www.hackerrank.com/domains/python",
        tags: ["NumPy", "Regression", "Python"]
      }
    ]
  },
  {
    topicTitle: "Applications in Computer Science and Engineering",
    problems: [
      {
        title: "Naive Bayes Probability Spam Classifier",
        difficulty: "Hard",
        platform: "Custom",
        problemUrl: "https://www.kaggle.com/",
        tags: ["Naive Bayes", "Machine Learning", "Spam Detection"]
      },
      {
        title: "Probability-Based Network Failure Analysis",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://www.datacamp.com/",
        tags: ["Network Reliability", "Probability"]
      },
      {
        title: "Statistical Anomaly Detection in System Telemetry",
        difficulty: "Hard",
        platform: "Custom",
        problemUrl: "https://www.kaggle.com/",
        tags: ["Anomaly Detection", "Telemetry", "Statistics"]
      },
      {
        title: "Algorithm Runtime Statistical Analysis",
        difficulty: "Medium",
        platform: "LeetCode",
        problemUrl: "https://leetcode.com/problemset/",
        tags: ["Benchmarking", "Statistics", "Algorithms"]
      }
    ]
  },
  {
    topicTitle: "Advanced Statistical Concepts",
    problems: [
      {
        title: "One-Way and Two-Way ANOVA with SciPy",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://docs.scipy.org/doc/scipy/reference/stats.html",
        tags: ["ANOVA", "SciPy", "Hypothesis"]
      },
      {
        title: "Covariance Matrix & Multivariate Statistics",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://docs.scipy.org/doc/scipy/reference/stats.html",
        tags: ["Covariance", "Multivariate", "SciPy"]
      },
      {
        title: "Chi-Square Goodness-of-Fit Testing",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://docs.scipy.org/doc/scipy/reference/stats.html",
        tags: ["Chi-Square", "Goodness of Fit", "SciPy"]
      }
    ]
  },
  {
    topicTitle: "Practical Projects and Case Studies",
    problems: [
      {
        title: "Project 1: Student Performance Statistical Analysis (Mean, Variance, Correlation, Plots)",
        difficulty: "Hard",
        platform: "Custom",
        problemUrl: "https://www.kaggle.com/datasets",
        tags: ["Project", "Student Performance", "EDA", "Statistics"]
      },
      {
        title: "Project 2: House Price Statistical Analysis (Regression, Outliers, Prediction)",
        difficulty: "Hard",
        platform: "Custom",
        problemUrl: "https://www.kaggle.com/datasets",
        tags: ["Project", "House Prices", "Regression", "Outliers"]
      },
      {
        title: "Project 3: Real Dataset Exploratory Data Analysis & Statistical Testing (CSV Pipeline)",
        difficulty: "Hard",
        platform: "Custom",
        problemUrl: "https://www.kaggle.com/datasets",
        tags: ["Project", "CSV Pipeline", "Statistical Testing", "Kaggle"]
      }
    ]
  }
];

const seedProbabilityStatsCodingProblems = async () => {
  try {
    await connectDB();

    const subject = await Subject.findOne({
      name: { $regex: /Probability and Statistics/i }
    });
    if (!subject) {
      console.log('❌ Probability and Statistics subject not found');
      process.exit(1);
    }
    console.log(`✅ Found subject: "${subject.name}"`);

    const topics = await Topic.find({ subject: subject._id }).sort({ order: 1 });
    console.log(`✅ Found ${topics.length} Probability and Statistics topics\n`);

    let totalAdded = 0;
    let notFound = [];

    for (const entry of PROBABILITY_STATS_CODING_PROBLEMS) {
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
        description: `Practice challenge for ${topic.title} in Probability and Statistics.`,
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

    console.log(`\n🎉 Probability and Statistics Coding Problems Seeded!`);
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

seedProbabilityStatsCodingProblems();
