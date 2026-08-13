module.exports = [
  {
    "title": "Introduction to Artificial Intelligence",
    "slug": "aiml-introduction-to-artificial-intelligence",
    "order": 1,
    "estimatedHours": 3,
    "difficulty": "Beginner",
    "description": "Explore the foundations of Artificial Intelligence, its history, classifications (Narrow, General, Super AI), intelligent agent architectures, and problem-solving paradigms.",
    "subTopics": [
      "What is Artificial Intelligence",
      "History and Evolution of AI",
      "Applications of AI",
      "Types of AI (Narrow AI, General AI, Super AI)",
      "Intelligent Agents",
      "Agent Architecture",
      "AI Problem Solving Approach",
      "Real-world AI Applications"
    ],
    "prerequisiteTitles": [],
    "learningObjectives": [
      "Understand the scope, definition, and historical evolution of Artificial Intelligence.",
      "Categorize AI systems into ANI (Narrow), AGI (General), and ASI (Super AI).",
      "Model intelligent agents using PEAS (Performance, Environment, Actuators, Sensors) frameworks."
    ],
    "notes": [
      {
        "title": "Foundations of AI & Agent Architectures",
        "content": "ARTIFICIAL INTELLIGENCE CORE CONCEPTS\n\n1. Definition & Taxonomy:\n   - Artificial Intelligence (AI) is the simulation of human intelligence processes by machines.\n   - Narrow AI (ANI): AI designed for a specific task (e.g. Siri, AlphaGo, Spam Filters).\n   - General AI (AGI): Theoretical AI that possesses human-level cognitive capabilities across any task.\n   - Super AI (ASI): Hypothetical AI surpassing human intellect across all domains.\n\n2. Intelligent Agents:\n   An Agent perceives its Environment through Sensors and acts upon it using Actuators.\n   - PEAS Framework: Performance Measure, Environment, Actuators, Sensors.\n   - Agent Types: Simple Reflex, Model-Based, Goal-Based, Utility-Based, Learning Agents.\n\n3. AI Problem Solving:\n   - Formulating state-space search trees (State, Initial State, Actions, Transition Model, Goal Test, Path Cost)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Artificial Intelligence: A Modern Approach",
        "author": "Stuart Russell & Peter Norvig",
        "url": "https://repo.darmajaya.ac.id/4836/1/Stuart%20Russell%2C%20Peter%20Norvig-Artificial%20Intelligence_%20A%20Modern%20Approach-Prentice%20Hall%20%28%20PDFDrive%20%29.pdf"
      },
      {
        "title": "Introduction to Machine Learning with Python",
        "author": "Andreas C. Müller & Sarah Guido",
        "url": "https://www.nrigroupindia.com/e-book/Introduction%20to%20Machine%20Learning%20with%20Python%20(%20PDFDrive.com%20)-min.pdf"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks AI Introduction",
        "url": "https://www.geeksforgeeks.org/artificial-intelligence-an-introduction/"
      },
      {
        "title": "Kaggle Intro to AI",
        "url": "https://www.kaggle.com/learn"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is Artificial Intelligence? Differentiate between Narrow AI and General AI. (2 Marks)",
        "Explain the PEAS framework for intelligent agents with a self-driving car example. (2 Marks)",
        "What is the difference between a Goal-Based Agent and a Utility-Based Agent? (2 Marks)"
      ],
      "sixMarks": [
        "Explain the historical evolution of AI from Turing Test (1950) to modern Generative Deep Learning models. (6 Marks)",
        "Describe five real-world application domains where AI has outperformed traditional software algorithms. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on AI Principles & Intelligent Agents. Detail state-space search formulation, agent architecture models (Reflex, Model-Based, Goal, Utility, Learning), Turing Test evaluation, and ethical considerations. (10 Marks)"
      ]
    }
  },
  {
    "title": "Mathematics Foundations for AI",
    "slug": "aiml-mathematics-foundations-for-ai",
    "order": 2,
    "estimatedHours": 5,
    "difficulty": "Beginner",
    "description": "Master essential mathematical prerequisites for Machine Learning: Linear Algebra (vectors, matrices, eigenvalues), Probability (Bayes Theorem), Statistics, and Multivariate Calculus gradients.",
    "subTopics": [
      "Linear Algebra Basics (Vectors, Matrices, Matrix Operations, Eigenvalues and Eigenvectors)",
      "Probability Fundamentals (Probability Concepts, Conditional Probability, Bayes Theorem)",
      "Statistics Basics (Mean, Variance, Standard Deviation, Distribution)",
      "Calculus Basics (Derivatives, Gradients, Optimization Concepts)"
    ],
    "prerequisiteTitles": [],
    "learningObjectives": [
      "Perform vector space and matrix transformations required for feature representations.",
      "Apply Bayes Theorem for probabilistic reasoning and Naive Bayes modeling.",
      "Compute partial derivatives, gradient vectors, and loss function minima using calculus."
    ],
    "notes": [
      {
        "title": "Mathematics for AI: Linear Algebra, Probability & Calculus",
        "content": "MATHEMATICS FOR ARTIFICIAL INTELLIGENCE\n\n1. Linear Algebra:\n   - Vector Product: Dot product a . b = Sum(a_i * b_i) = |a||b| cos(theta).\n   - Matrix Multiplication: A (m x n) * B (n x p) = C (m x p).\n   - Eigenvalues & Eigenvectors: A * v = lambda * v. Used in PCA dimensionality reduction.\n\n2. Probability & Bayes Theorem:\n   - Conditional Probability: P(A|B) = P(A and B) / P(B).\n   - Bayes Theorem: P(A|B) = (P(B|A) * P(A)) / P(B).\n\n3. Statistics:\n   - Mean mu = Sum(x_i) / N\n   - Variance sigma^2 = Sum(x_i - mu)^2 / N\n   - Normal (Gaussian) Distribution: N(mu, sigma^2)\n\n4. Calculus & Optimization:\n   - Partial Derivative: Derivative with respect to one variable keeping others constant.\n   - Gradient Vector nabla f = [df/dx1, df/dx2, ... df/dxn]. Points in direction of steepest ascent.\n   - Gradient Descent Update: theta_new = theta_old - alpha * nabla L(theta)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Artificial Intelligence: A Modern Approach",
        "author": "Stuart Russell & Peter Norvig",
        "url": "https://repo.darmajaya.ac.id/4836/1/Stuart%20Russell%2C%20Peter%20Norvig-Artificial%20Intelligence_%20A%20Modern%20Approach-Prentice%20Hall%20%28%20PDFDrive%20%29.pdf"
      },
      {
        "title": "Introduction to Machine Learning with Python",
        "author": "Andreas C. Müller & Sarah Guido",
        "url": "https://www.nrigroupindia.com/e-book/Introduction%20to%20Machine%20Learning%20with%20Python%20(%20PDFDrive.com%20)-min.pdf"
      },
      {
        "title": "Mathematics for Machine Learning",
        "author": "Marc Peter Deisenroth"
      }
    ],
    "practiceLinks": [
      {
        "title": "Khan Academy Linear Algebra & Calculus",
        "url": "https://www.khanacademy.org/math/linear-algebra"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State Bayes Theorem formula and define Likelihood, Prior, and Posterior probabilities. (2 Marks)",
        "What is a Gradient vector? State the Gradient Descent update rule. (2 Marks)",
        "What are Eigenvalues and Eigenvectors of a matrix? (2 Marks)"
      ],
      "sixMarks": [
        "Given a 2x2 matrix A = [[4, 1], [2, 3]], find its Eigenvalues and corresponding Eigenvectors. (6 Marks)",
        "Explain how Partial Derivatives and Gradients are used to minimize Loss Functions in Machine Learning. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Mathematical Foundations for AI. Detail Linear Algebra vector spaces, Eigen-decomposition, Gaussian distributions, Bayes Theorem derivation, multivariate calculus partial derivatives, and Gradient Descent optimization. (10 Marks)"
      ]
    }
  },
  {
    "title": "Python for Artificial Intelligence",
    "slug": "aiml-python-for-artificial-intelligence",
    "order": 3,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Hands-on Python programming for data science: NumPy vectorization, Pandas DataFrame manipulation, Matplotlib/Seaborn visualization, and data preprocessing.",
    "subTopics": [
      "Python Programming Basics",
      "NumPy Library",
      "Pandas Library",
      "Matplotlib Visualization",
      "Data Handling using Python",
      "Data Preprocessing using Python"
    ],
    "prerequisiteTitles": [
      "Mathematics Foundations for AI"
    ],
    "learningObjectives": [
      "Write vectorized array code using NumPy for high-performance matrix computations.",
      "Manipulate DataFrames using Pandas for filtering, grouping, and merging datasets.",
      "Generate line graphs, scatter plots, histograms, and heatmaps using Matplotlib."
    ],
    "notes": [
      {
        "title": "Python Data Science Toolkit: NumPy, Pandas & Matplotlib",
        "content": "PYTHON FOR AI CHEATSHEET\n\n1. NumPy Array Basics:\n   import numpy as np\n   arr = np.array([1, 2, 3])\n   matrix = np.zeros((3, 3))\n   dot_prod = np.dot(arr1, arr2)\n   eigenvals, eigenvecs = np.linalg.eig(matrix)\n\n2. Pandas Data Processing:\n   import pandas as pd\n   df = pd.read_csv('dataset.csv')\n   df.head() | df.info() | df.describe()\n   df.isnull().sum() | df.fillna(df.mean())\n   grouped = df.groupby('category')['value'].mean()\n\n3. Matplotlib Data Visualization:\n   import matplotlib.pyplot as plt\n   plt.scatter(x, y, color='blue')\n   plt.title('Feature Scatter Plot')\n   plt.xlabel('X Feature') | plt.ylabel('Target Y')\n   plt.show()"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Artificial Intelligence: A Modern Approach",
        "author": "Stuart Russell & Peter Norvig",
        "url": "https://repo.darmajaya.ac.id/4836/1/Stuart%20Russell%2C%20Peter%20Norvig-Artificial%20Intelligence_%20A%20Modern%20Approach-Prentice%20Hall%20%28%20PDFDrive%20%29.pdf"
      },
      {
        "title": "Introduction to Machine Learning with Python",
        "author": "Andreas C. Müller & Sarah Guido",
        "url": "https://www.nrigroupindia.com/e-book/Introduction%20to%20Machine%20Learning%20with%20Python%20(%20PDFDrive.com%20)-min.pdf"
      },
      {
        "title": "Python for Data Analysis",
        "author": "Wes McKinney"
      }
    ],
    "practiceLinks": [
      {
        "title": "Kaggle Python Course",
        "url": "https://www.kaggle.com/learn/python"
      },
      {
        "title": "Kaggle Pandas Course",
        "url": "https://www.kaggle.com/learn/pandas"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Why is NumPy preferred over Python standard lists for numeric computations? (2 Marks)",
        "Differentiate between a Pandas Series and a Pandas DataFrame. (2 Marks)",
        "What Python functions are used to handle missing values in Pandas? (2 Marks)"
      ],
      "sixMarks": [
        "Write Python code using Pandas to load a dataset, clean missing values, encode categorical variables, and scale numeric features using StandardScaler. (6 Marks)",
        "Demonstrate NumPy array broadcasting and vectorization with code examples. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive guide to Python for AI. Detail core data structures, NumPy n-dimensional arrays, linear algebra module, Pandas DataFrames aggregation/indexing, Matplotlib/Seaborn visualization, and complete data pipeline code. (10 Marks)"
      ]
    }
  },
  {
    "title": "Introduction to Machine Learning",
    "slug": "aiml-introduction-to-machine-learning",
    "order": 4,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Understand Machine Learning workflows, paradigm categorization (Supervised, Unsupervised, Reinforcement), train-test splitting, and feature-target relationships.",
    "subTopics": [
      "What is Machine Learning",
      "Machine Learning Workflow",
      "Types of Machine Learning (Supervised Learning, Unsupervised Learning, Reinforcement Learning)",
      "Training Data and Testing Data",
      "Features and Labels",
      "Model Evaluation"
    ],
    "prerequisiteTitles": [
      "Python for Artificial Intelligence"
    ],
    "learningObjectives": [
      "Define Machine Learning and contrast it with traditional rule-based programming.",
      "Categorize ML problems into Regression, Classification, Clustering, and Control.",
      "Perform train-test data splitting (e.g. 80-20) to prevent data leakage and evaluate generalization."
    ],
    "notes": [
      {
        "title": "Machine Learning Concepts & Pipeline Overview",
        "content": "MACHINE LEARNING FUNDAMENTALS\n\n1. Traditional Programming vs Machine Learning:\n   - Traditional: Data + Rules -> Answers\n   - Machine Learning: Data + Answers (Labels) -> Rules (Model)\n\n2. Types of Machine Learning:\n   - Supervised Learning: Model trains on labeled dataset (X, y).\n     * Regression: Predicts continuous values (e.g. House Price).\n     * Classification: Predicts discrete class labels (e.g. Spam / Not Spam).\n   - Unsupervised Learning: Model finds hidden patterns/clusters in unlabeled dataset (X).\n     * Clustering (K-Means), Dimensionality Reduction (PCA).\n   - Reinforcement Learning: Agent learns optimal actions in environment via Rewards/Penalties.\n\n3. ML Workflow Pipeline:\n   Problem Formulation -> Data Collection -> Data Preprocessing -> Model Training -> Evaluation -> Deployment."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Artificial Intelligence: A Modern Approach",
        "author": "Stuart Russell & Peter Norvig",
        "url": "https://repo.darmajaya.ac.id/4836/1/Stuart%20Russell%2C%20Peter%20Norvig-Artificial%20Intelligence_%20A%20Modern%20Approach-Prentice%20Hall%20%28%20PDFDrive%20%29.pdf"
      },
      {
        "title": "Introduction to Machine Learning with Python",
        "author": "Andreas C. Müller & Sarah Guido",
        "url": "https://www.nrigroupindia.com/e-book/Introduction%20to%20Machine%20Learning%20with%20Python%20(%20PDFDrive.com%20)-min.pdf"
      }
    ],
    "practiceLinks": [
      {
        "title": "Kaggle Intro to Machine Learning",
        "url": "https://www.kaggle.com/learn/intro-to-machine-learning"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define Machine Learning. Contrast Supervised and Unsupervised Learning. (2 Marks)",
        "What is the difference between Features (X) and Labels (y)? (2 Marks)",
        "Why is it essential to split data into Training and Testing sets? (2 Marks)"
      ],
      "sixMarks": [
        "Explain the end-to-end Machine Learning Workflow lifecycle from data ingestion to production model monitoring. (6 Marks)",
        "Compare Regression, Classification, Clustering, and Reinforcement Learning problems with real-world examples. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Machine Learning Foundations. Detail ML taxonomy, Tom Mitchell's formal definition (E, T, P), Supervised vs Unsupervised vs Reinforcement learning models, train-validation-test split rationale, and evaluation metrics. (10 Marks)"
      ]
    }
  },
  {
    "title": "Data Preprocessing",
    "slug": "aiml-data-preprocessing",
    "order": 5,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Prepare raw data for ML models: cleaning missing values, encoding categorical variables, feature scaling (Standardization vs Normalization), and feature selection.",
    "subTopics": [
      "Data Collection",
      "Data Cleaning",
      "Handling Missing Values",
      "Handling Duplicate Data",
      "Feature Scaling",
      "Normalization",
      "Standardization",
      "Feature Selection",
      "Data Transformation"
    ],
    "prerequisiteTitles": [
      "Introduction to Machine Learning"
    ],
    "learningObjectives": [
      "Impute missing data using Mean, Median, Mode, or KNN Imputer.",
      "Apply One-Hot Encoding and Label Encoding on categorical variables.",
      "Scale features using Min-Max Normalization and Z-score Standardization."
    ],
    "notes": [
      {
        "title": "Data Preprocessing, Scaling & Feature Engineering",
        "content": "DATA PREPROCESSING PIPELINE\n\n1. Handling Missing Data:\n   - Deletion: Drop rows/columns if missing data < 5%.\n   - Imputation: Replace with Mean (numerical symmetric), Median (skewed), Mode (categorical).\n\n2. Categorical Encoding:\n   - Label Encoding: Converts ordinal categories into integers (e.g. Low=0, Med=1, High=2).\n   - One-Hot Encoding: Creates binary indicator columns for nominal categories.\n\n3. Feature Scaling:\n   - Min-Max Normalization: X_scaled = (X - X_min) / (X_max - X_min) -> Scales to [0, 1].\n   - Z-score Standardization: X_std = (X - mu) / sigma -> Mean = 0, Std Dev = 1."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Artificial Intelligence: A Modern Approach",
        "author": "Stuart Russell & Peter Norvig",
        "url": "https://repo.darmajaya.ac.id/4836/1/Stuart%20Russell%2C%20Peter%20Norvig-Artificial%20Intelligence_%20A%20Modern%20Approach-Prentice%20Hall%20%28%20PDFDrive%20%29.pdf"
      },
      {
        "title": "Introduction to Machine Learning with Python",
        "author": "Andreas C. Müller & Sarah Guido",
        "url": "https://www.nrigroupindia.com/e-book/Introduction%20to%20Machine%20Learning%20with%20Python%20(%20PDFDrive.com%20)-min.pdf"
      },
      {
        "title": "Feature Engineering for Machine Learning",
        "author": "Alice Zheng"
      }
    ],
    "practiceLinks": [
      {
        "title": "Kaggle Feature Engineering",
        "url": "https://www.kaggle.com/learn/feature-engineering"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between Min-Max Normalization and Z-Score Standardization. (2 Marks)",
        "When should you use One-Hot Encoding instead of Label Encoding? (2 Marks)",
        "What is the impact of unscaled features on distance-based algorithms like KNN and SVM? (2 Marks)"
      ],
      "sixMarks": [
        "Explain data cleaning techniques for handling missing values, duplicate records, and outliers with Python Scikit-Learn code snippet. (6 Marks)",
        "Describe Feature Selection methods: Filter methods, Wrapper methods, and Embedded methods. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Data Preprocessing & Feature Engineering. Detail missing value imputation algorithms, categorical encoding, Min-Max vs Z-score scaling equations, outlier detection (IQR/Z-score), and automated Pipeline building in Scikit-Learn. (10 Marks)"
      ]
    }
  },
  {
    "title": "Supervised Learning Algorithms",
    "slug": "aiml-supervised-learning-algorithms",
    "order": 6,
    "estimatedHours": 6,
    "difficulty": "Intermediate",
    "description": "Master core supervised algorithms: Linear & Logistic Regression, K-Nearest Neighbors (KNN), Decision Trees, Random Forests, Support Vector Machines (SVM), and Naive Bayes.",
    "subTopics": [
      "Linear Regression",
      "Multiple Linear Regression",
      "Logistic Regression",
      "K-Nearest Neighbors (KNN)",
      "Decision Trees",
      "Random Forest",
      "Support Vector Machines (SVM)",
      "Naive Bayes Algorithm"
    ],
    "prerequisiteTitles": [
      "Data Preprocessing"
    ],
    "learningObjectives": [
      "Formulate Ordinary Least Squares (OLS) for Linear Regression and Sigmoid activation for Logistic Regression.",
      "Build Decision Trees using Information Gain / Gini Impurity and ensemble them into Random Forests.",
      "Apply SVM margin maximization and kernel tricks for non-linear classification."
    ],
    "notes": [
      {
        "title": "Supervised ML Algorithms: Regression & Classification",
        "content": "SUPERVISED LEARNING ALGORITHMS\n\n1. Linear Regression:\n   - Model: y = beta_0 + beta_1 * x_1 + ... + beta_n * x_n\n   - Loss Function: Mean Squared Error (MSE) = (1/N) * Sum(y_i - y_hat_i)^2\n\n2. Logistic Regression:\n   - Model: P(y=1|x) = 1 / (1 + exp(-z)), where z = w^T x + b\n   - Loss Function: Binary Cross-Entropy (Log Loss).\n\n3. K-Nearest Neighbors (KNN):\n   - Non-parametric distance-based classifier. Assigns majority class of K nearest neighbors measured by Euclidean distance.\n\n4. Decision Trees & Random Forest:\n   - Split Criteria: Gini Impurity = 1 - Sum(p_i^2) | Entropy = -Sum(p_i * log2(p_i)).\n   - Random Forest: Ensemble of decision trees trained on bootstrap samples with feature subspace random selection (Bagging).\n\n5. Support Vector Machines (SVM):\n   - Finds optimal hyperplane maximizing margin distance between classes: 2 / ||w||.\n   - Kernel Trick: Maps data to higher dimension using RBF or Polynomial kernels.\n\n6. Naive Bayes:\n   - Probabilistic classifier applying Bayes Theorem assuming strong independence between features."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Artificial Intelligence: A Modern Approach",
        "author": "Stuart Russell & Peter Norvig",
        "url": "https://repo.darmajaya.ac.id/4836/1/Stuart%20Russell%2C%20Peter%20Norvig-Artificial%20Intelligence_%20A%20Modern%20Approach-Prentice%20Hall%20%28%20PDFDrive%20%29.pdf"
      },
      {
        "title": "Introduction to Machine Learning with Python",
        "author": "Andreas C. Müller & Sarah Guido",
        "url": "https://www.nrigroupindia.com/e-book/Introduction%20to%20Machine%20Learning%20with%20Python%20(%20PDFDrive.com%20)-min.pdf"
      },
      {
        "title": "The Elements of Statistical Learning",
        "author": "Trevor Hastie, Robert Tibshirani"
      }
    ],
    "practiceLinks": [
      {
        "title": "Scikit-Learn Supervised Learning Documentation",
        "url": "https://scikit-learn.org/stable/supervised_learning.html"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State the hypothesis formula for Logistic Regression. Why is Sigmoid function used? (2 Marks)",
        "What is the difference between Gini Impurity and Entropy in Decision Trees? (2 Marks)",
        "How does Random Forest reduce overfitting compared to a single Decision Tree? (2 Marks)",
        "What is the Naive assumption in the Naive Bayes algorithm? (2 Marks)"
      ],
      "sixMarks": [
        "Explain Support Vector Machines (SVM). Derive optimal hyperplane margin maximization and explain the Kernel Trick. (6 Marks)",
        "Explain K-Nearest Neighbors (KNN) algorithm step-by-step. Discuss how the choice of K affects bias and variance. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Supervised Machine Learning Algorithms. Detail mathematical formulations, loss functions, decision boundaries, training steps, and comparative analysis of Linear Regression, Logistic Regression, Decision Trees, Random Forest, SVM, and Naive Bayes. (10 Marks)"
      ]
    }
  },
  {
    "title": "Unsupervised Learning Algorithms",
    "slug": "aiml-unsupervised-learning-algorithms",
    "order": 7,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Explore pattern discovery in unlabeled data: K-Means Clustering, Hierarchical Clustering, DBSCAN density clustering, and Principal Component Analysis (PCA) for dimensionality reduction.",
    "subTopics": [
      "Clustering Concepts",
      "K-Means Clustering",
      "Hierarchical Clustering",
      "DBSCAN Algorithm",
      "Association Rule Learning",
      "Dimensionality Reduction",
      "Principal Component Analysis (PCA)"
    ],
    "prerequisiteTitles": [
      "Data Preprocessing"
    ],
    "learningObjectives": [
      "Execute K-Means centroid updates and determine optimal K using the Elbow Method and Silhouette Score.",
      "Construct Agglomerative Hierarchical dendrograms and DBSCAN density clusters.",
      "Apply Principal Component Analysis (PCA) for feature variance compression."
    ],
    "notes": [
      {
        "title": "Clustering & Dimensionality Reduction (PCA)",
        "content": "UNSUPERVISED LEARNING ALGORITHMS\n\n1. K-Means Clustering:\n   - Objective: Minimize Within-Cluster Sum of Squares (WCSS).\n   - Algorithm: Initialize K centroids randomly -> Assign points to closest centroid -> Recalculate centroids -> Repeat until convergence.\n   - Optimal K: Elbow Method (WCSS vs K) & Silhouette Analysis.\n\n2. Hierarchical Clustering:\n   - Agglomerative (Bottom-up): Starts with each point as its own cluster, merges closest pairs until 1 cluster remains. Visualized via Dendrogram.\n\n3. DBSCAN (Density-Based Spatial Clustering):\n   - Clusters dense regions separated by sparse areas. Parameters: eps (radius), minPts.\n   - Classifies points into Core, Border, and Noise (outliers).\n\n4. Principal Component Analysis (PCA):\n   - Reduces dimensional features while preserving maximum variance.\n   - Steps: Standardize Data -> Compute Covariance Matrix -> Find Eigenvalues & Eigenvectors -> Sort Eigenvectors by Eigenvalue magnitude -> Project data onto Top K Principal Components."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Artificial Intelligence: A Modern Approach",
        "author": "Stuart Russell & Peter Norvig",
        "url": "https://repo.darmajaya.ac.id/4836/1/Stuart%20Russell%2C%20Peter%20Norvig-Artificial%20Intelligence_%20A%20Modern%20Approach-Prentice%20Hall%20%28%20PDFDrive%20%29.pdf"
      },
      {
        "title": "Introduction to Machine Learning with Python",
        "author": "Andreas C. Müller & Sarah Guido",
        "url": "https://www.nrigroupindia.com/e-book/Introduction%20to%20Machine%20Learning%20with%20Python%20(%20PDFDrive.com%20)-min.pdf"
      }
    ],
    "practiceLinks": [
      {
        "title": "Scikit-Learn Unsupervised Learning",
        "url": "https://scikit-learn.org/stable/unsupervised_learning.html"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain the Elbow Method for selecting optimal K in K-Means clustering. (2 Marks)",
        "What are Core, Border, and Noise points in the DBSCAN algorithm? (2 Marks)",
        "What is the main objective of Principal Component Analysis (PCA)? (2 Marks)"
      ],
      "sixMarks": [
        "Explain K-Means Clustering algorithm step-by-step with convergence criteria and WCSS equation. (6 Marks)",
        "Explain Principal Component Analysis (PCA) step-by-step from covariance matrix computation to data projection. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Unsupervised Learning. Compare partition-based (K-Means), hierarchical (Agglomerative), and density-based (DBSCAN) clustering. Detail PCA mathematical projection derivation and singular value decomposition (SVD). (10 Marks)"
      ]
    }
  },
  {
    "title": "Reinforcement Learning",
    "slug": "aiml-reinforcement-learning",
    "order": 8,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Understand agent-environment interaction loops, Markov Decision Processes (MDP), Bellman equations, Q-Learning value iteration, and RL applications.",
    "subTopics": [
      "Introduction to Reinforcement Learning",
      "Agent and Environment",
      "States and Actions",
      "Rewards and Punishments",
      "Markov Decision Process",
      "Q-Learning Basics",
      "Applications of Reinforcement Learning"
    ],
    "prerequisiteTitles": [
      "Introduction to Machine Learning"
    ],
    "learningObjectives": [
      "Model sequential decision making using Markov Decision Processes (MDP).",
      "Formulate the Bellman Optimality Equation for State-Action Value Q(s, a).",
      "Implement model-free Q-Learning algorithm with epsilon-greedy exploration."
    ],
    "notes": [
      {
        "title": "Reinforcement Learning & Q-Learning Algorithms",
        "content": "REINFORCEMENT LEARNING FOUNDATIONS\n\n1. Agent-Environment Loop:\n   - Agent observes State s_t from Environment, performs Action a_t.\n   - Environment transitions to State s_{t+1} and returns Reward r_{t+1}.\n\n2. Markov Decision Process (MDP):\n   - Defined by tuple (S, A, P, R, gamma).\n   - Markov Property: Future state depends ONLY on current state and action, not historical trajectory.\n\n3. Bellman Equation:\n   - V(s) = max_a [ R(s, a) + gamma * Sum( P(s'|s,a) * V(s') ) ]\n   - Q(s, a) = R(s, a) + gamma * max_a' Q(s', a')\n\n4. Q-Learning Algorithm:\n   Model-free off-policy temporal difference algorithm:\n   Q(s, a) <- Q(s, a) + alpha * [ r + gamma * max_a' Q(s', a') - Q(s, a) ]\n   where alpha is learning rate, gamma is discount factor."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Artificial Intelligence: A Modern Approach",
        "author": "Stuart Russell & Peter Norvig",
        "url": "https://repo.darmajaya.ac.id/4836/1/Stuart%20Russell%2C%20Peter%20Norvig-Artificial%20Intelligence_%20A%20Modern%20Approach-Prentice%20Hall%20%28%20PDFDrive%20%29.pdf"
      },
      {
        "title": "Introduction to Machine Learning with Python",
        "author": "Andreas C. Müller & Sarah Guido",
        "url": "https://www.nrigroupindia.com/e-book/Introduction%20to%20Machine%20Learning%20with%20Python%20(%20PDFDrive.com%20)-min.pdf"
      },
      {
        "title": "Reinforcement Learning: An Introduction",
        "author": "Richard S. Sutton and Andrew G. Barto"
      }
    ],
    "practiceLinks": [
      {
        "title": "OpenAI Gym / Gymnasium Practice",
        "url": "https://gymnasium.farama.org/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is the Markov Property in Reinforcement Learning? (2 Marks)",
        "Define Discount Factor gamma and its role in evaluating future vs immediate rewards. (2 Marks)",
        "Explain Epsilon-Greedy strategy for balancing exploration and exploitation. (2 Marks)"
      ],
      "sixMarks": [
        "Explain the Q-Learning update rule Q(s,a) <- Q(s,a) + alpha [r + gamma max Q(s',a') - Q(s,a)]. Define all parameters. (6 Marks)",
        "Describe Markov Decision Process (MDP) components: States, Actions, Transition Probabilities, Reward Function, and Discount Factor. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Reinforcement Learning. Detail MDP formulation, Bellman Optimality equations derivation, Value Iteration vs Policy Iteration, Q-Learning update steps, Deep Q-Networks (DQN), and robotics/gaming applications. (10 Marks)"
      ]
    }
  },
  {
    "title": "Deep Learning Fundamentals",
    "slug": "aiml-deep-learning-fundamentals",
    "order": 9,
    "estimatedHours": 6,
    "difficulty": "Advanced",
    "description": "Deep dive into Artificial Neural Networks (ANN), perceptron model, activation functions (Sigmoid, ReLU, Tanh), forward propagation, and gradient backpropagation.",
    "subTopics": [
      "Introduction to Deep Learning",
      "Difference Between ML and Deep Learning",
      "Artificial Neural Networks",
      "Biological Neurons vs Artificial Neurons",
      "Perceptron Model",
      "Activation Functions (Sigmoid, ReLU, Tanh)",
      "Forward Propagation",
      "Backpropagation"
    ],
    "prerequisiteTitles": [
      "Introduction to Machine Learning"
    ],
    "learningObjectives": [
      "Understand artificial neuron mathematics: net input z = w^T x + b and output a = f(z).",
      "Compare activation functions: Sigmoid, Tanh, ReLU, Leaky ReLU, and Softmax.",
      "Derive gradient backpropagation equations using the multivariable chain rule."
    ],
    "notes": [
      {
        "title": "Artificial Neural Networks & Backpropagation Mathematics",
        "content": "DEEP LEARNING FUNDAMENTALS\n\n1. Perceptron Model:\n   - Output y = f(z) where z = Sum(w_i * x_i) + b = w^T x + b.\n\n2. Common Activation Functions:\n   - Sigmoid: f(z) = 1 / (1 + e^-z) -> Range (0, 1). Suffers from Vanishing Gradient.\n   - Tanh: f(z) = (e^z - e^-z) / (e^z + e^-z) -> Range (-1, 1).\n   - ReLU: f(z) = max(0, z) -> Range [0, inf). Fast computation, avoids vanishing gradient.\n   - Softmax: P(y=k) = e^z_k / Sum(e^z_j) -> Used in multi-class output layer.\n\n3. Forward Propagation:\n   - Computes layer-by-layer activations: z^[l] = W^[l] a^[l-1] + b^[l], a^[l] = g^[l](z^[l]).\n\n4. Backpropagation:\n   - Computes partial derivative of Loss L with respect to weights W and biases b using Chain Rule:\n     dL/dW^[l] = (dL/dz^[l]) * (a^[l-1])^T\n     dz^[l] = (W^[l+1])^T * dz^[l+1] * g'^[l](z^[l])"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Artificial Intelligence: A Modern Approach",
        "author": "Stuart Russell & Peter Norvig",
        "url": "https://repo.darmajaya.ac.id/4836/1/Stuart%20Russell%2C%20Peter%20Norvig-Artificial%20Intelligence_%20A%20Modern%20Approach-Prentice%20Hall%20%28%20PDFDrive%20%29.pdf"
      },
      {
        "title": "Introduction to Machine Learning with Python",
        "author": "Andreas C. Müller & Sarah Guido",
        "url": "https://www.nrigroupindia.com/e-book/Introduction%20to%20Machine%20Learning%20with%20Python%20(%20PDFDrive.com%20)-min.pdf"
      },
      {
        "title": "Deep Learning",
        "author": "Ian Goodfellow, Yoshua Bengio, Aaron Courville"
      }
    ],
    "practiceLinks": [
      {
        "title": "TensorFlow Playground Interactive Neural Net",
        "url": "https://playground.tensorflow.org/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Why is non-linear activation necessary in Artificial Neural Networks? (2 Marks)",
        "Compare Sigmoid and ReLU activation functions. What is Vanishing Gradient problem? (2 Marks)",
        "What is the mathematical role of Bias 'b' in a perceptron node? (2 Marks)"
      ],
      "sixMarks": [
        "Explain the Perceptron model architecture with mathematical formula, diagram, and decision boundary. (6 Marks)",
        "Derive the Backpropagation weight update formula for a 2-layer neural network using the Chain Rule of calculus. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Deep Learning Foundations. Detail Biological vs Artificial neurons, Forward Propagation matrix computations, activation functions (Sigmoid, Tanh, ReLU, Softmax), Cross-Entropy loss, and complete Backpropagation mathematical derivation. (10 Marks)"
      ]
    }
  },
  {
    "title": "Neural Network Architectures",
    "slug": "aiml-neural-network-architectures",
    "order": 10,
    "estimatedHours": 6,
    "difficulty": "Advanced",
    "description": "Explore specialized deep learning network architectures: Convolutional Neural Networks (CNN), Recurrent Neural Networks (RNN), LSTMs, and Autoencoders.",
    "subTopics": [
      "Feed Forward Neural Networks",
      "Convolutional Neural Networks (CNN)",
      "Recurrent Neural Networks (RNN)",
      "Long Short-Term Memory Networks (LSTM)",
      "Autoencoders",
      "Applications of Neural Networks"
    ],
    "prerequisiteTitles": [
      "Deep Learning Fundamentals"
    ],
    "learningObjectives": [
      "Understand Convolutional operations, Max Pooling, and spatial feature maps in CNNs.",
      "Analyze sequence processing in Recurrent Neural Networks (RNN) and LSTM gating mechanisms.",
      "Build Autoencoder bottleneck architectures for unsupervised reconstruction and denoising."
    ],
    "notes": [
      {
        "title": "CNN, RNN, LSTM & Autoencoder Architectures",
        "content": "NEURAL NETWORK ARCHITECTURES\n\n1. Convolutional Neural Networks (CNN):\n   Designed for spatial image grid inputs.\n   - Convolution Layer: Slides kernel/filter over input applying element-wise multiplication.\n   - Pooling Layer: Max Pooling / Average Pooling reduces spatial dimensions (downsampling).\n   - Fully Connected (FC) Layer: Flattens features for final classification.\n\n2. Recurrent Neural Networks (RNN):\n   Designed for sequential data (time-series, text).\n   - Hidden State: h_t = tanh(W_hh * h_{t-1} + W_xh * x_t + b_h).\n   - Suffers from Exploding / Vanishing Gradient over long sequences.\n\n3. Long Short-Term Memory (LSTM):\n   Overcomes vanishing gradient via Cell State C_t and 3 Gating mechanisms:\n   - Forget Gate f_t: Decides what to discard from cell state.\n   - Input Gate i_t: Decides what new information to store.\n   - Output Gate o_t: Controls output hidden state h_t.\n\n4. Autoencoders:\n   Unsupervised neural net consisting of Encoder (compresses input X to latent bottleneck z) and Decoder (reconstructs X' from z)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Artificial Intelligence: A Modern Approach",
        "author": "Stuart Russell & Peter Norvig",
        "url": "https://repo.darmajaya.ac.id/4836/1/Stuart%20Russell%2C%20Peter%20Norvig-Artificial%20Intelligence_%20A%20Modern%20Approach-Prentice%20Hall%20%28%20PDFDrive%20%29.pdf"
      },
      {
        "title": "Introduction to Machine Learning with Python",
        "author": "Andreas C. Müller & Sarah Guido",
        "url": "https://www.nrigroupindia.com/e-book/Introduction%20to%20Machine%20Learning%20with%20Python%20(%20PDFDrive.com%20)-min.pdf"
      },
      {
        "title": "Deep Learning with Python",
        "author": "François Chollet"
      }
    ],
    "practiceLinks": [
      {
        "title": "PyTorch Neural Network Tutorials",
        "url": "https://pytorch.org/tutorials/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is the purpose of Max Pooling in Convolutional Neural Networks? (2 Marks)",
        "Why do standard RNNs fail to learn long-term dependencies in sequence data? (2 Marks)",
        "Explain the function of the Forget Gate in an LSTM cell. (2 Marks)",
        "What is an Autoencoder and what is its latent bottleneck representation? (2 Marks)"
      ],
      "sixMarks": [
        "Explain CNN architecture layer by layer: Convolution, ReLU, Max Pooling, Flattening, and Dense FC layer. (6 Marks)",
        "Describe LSTM cell architecture. Write gating equations for Forget, Input, and Output gates. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Neural Network Architectures. Detail spatial feature extraction in CNNs (filters, stride, padding), sequence modeling in RNNs/LSTMs, cell state derivations, Autoencoders dimensionality reduction, and computer vision / NLP applications. (10 Marks)"
      ]
    }
  },
  {
    "title": "Computer Vision",
    "slug": "aiml-computer-vision",
    "order": 11,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Learn image processing fundamentals, object detection, face recognition, and vision pipelines using OpenCV and deep CNN models.",
    "subTopics": [
      "Introduction to Computer Vision",
      "Image Processing Basics",
      "Image Classification",
      "Object Detection",
      "Face Recognition",
      "OpenCV Basics",
      "CNN Applications in Vision"
    ],
    "prerequisiteTitles": [
      "Neural Network Architectures"
    ],
    "learningObjectives": [
      "Process digital image matrices (RGB/Gray), filtering, edge detection using OpenCV.",
      "Understand Object Detection architectures: YOLO, R-CNN, and SSD.",
      "Implement deep face recognition and feature embedding pipelines."
    ],
    "notes": [
      {
        "title": "Computer Vision, OpenCV & Deep Object Detection",
        "content": "COMPUTER VISION & OPENCV GUIDE\n\n1. Image Processing with OpenCV:\n   import cv2\n   img = cv2.imread('image.jpg')\n   gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)\n   blurred = cv2.GaussianBlur(gray, (5, 5), 0)\n   edges = cv2.Canny(gray, 100, 200)\n\n2. Object Detection Paradigms:\n   - Two-Stage Detectors (R-CNN, Fast R-CNN, Faster R-CNN): Generate region proposals, then classify. High accuracy, slower.\n   - One-Stage Detectors (YOLO, SSD): Predict bounding boxes and class probabilities directly in a single forward pass. Real-time speed.\n\n3. Face Recognition Pipeline:\n   Detect Face (Haar Cascade / HOG) -> Align Face -> Extract 128-d Embedding (FaceNet) -> Match Distance (Euclidean / Cosine)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Artificial Intelligence: A Modern Approach",
        "author": "Stuart Russell & Peter Norvig",
        "url": "https://repo.darmajaya.ac.id/4836/1/Stuart%20Russell%2C%20Peter%20Norvig-Artificial%20Intelligence_%20A%20Modern%20Approach-Prentice%20Hall%20%28%20PDFDrive%20%29.pdf"
      },
      {
        "title": "Introduction to Machine Learning with Python",
        "author": "Andreas C. Müller & Sarah Guido",
        "url": "https://www.nrigroupindia.com/e-book/Introduction%20to%20Machine%20Learning%20with%20Python%20(%20PDFDrive.com%20)-min.pdf"
      },
      {
        "title": "Computer Vision: Algorithms and Applications",
        "author": "Richard Szeliski"
      }
    ],
    "practiceLinks": [
      {
        "title": "OpenCV Python Documentation",
        "url": "https://docs.opencv.org/master/d6/007/tutorial_py_root.html"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is Canny Edge Detection and what are its main steps? (2 Marks)",
        "Compare One-Stage (YOLO) and Two-Stage (Faster R-CNN) object detectors. (2 Marks)",
        "How are deep 128-dimensional face embeddings used in Face Recognition? (2 Marks)"
      ],
      "sixMarks": [
        "Write Python OpenCV code to load an image, convert to grayscale, apply Gaussian blur, and detect edges using Canny operator. (6 Marks)",
        "Explain YOLO (You Only Look Once) real-world object detection architecture and grid-based bounding box loss function. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Computer Vision Systems. Detail image representations, spatial filtering convolutions, Haar Cascades, Deep CNN classifiers (ResNet/VGG), YOLO object detection, and autonomous vehicle vision pipelines. (10 Marks)"
      ]
    }
  },
  {
    "title": "Natural Language Processing",
    "slug": "aiml-natural-language-processing",
    "order": 12,
    "estimatedHours": 6,
    "difficulty": "Advanced",
    "description": "Master text processing pipelines: Tokenization, Stemming/Lemmatization, Bag of Words, TF-IDF, Word2Vec embeddings, and Sentiment Analysis.",
    "subTopics": [
      "Introduction to NLP",
      "Text Processing",
      "Tokenization",
      "Stop Word Removal",
      "Stemming and Lemmatization",
      "Bag of Words",
      "TF-IDF",
      "Word Embeddings",
      "Sentiment Analysis",
      "Chatbots"
    ],
    "prerequisiteTitles": [
      "Neural Network Architectures"
    ],
    "learningObjectives": [
      "Preprocess text using NLTK/spaCy: Tokenization, Stop Word Removal, Lemmatization.",
      "Transform text to numerical feature matrices using Bag of Words and TF-IDF.",
      "Understand dense semantic vector representations: Word2Vec (CBOW & Skip-Gram) and GloVe."
    ],
    "notes": [
      {
        "title": "NLP Pipelines, Vectorization & Word Embeddings",
        "content": "NATURAL LANGUAGE PROCESSING GUIDE\n\n1. Text Preprocessing Pipeline:\n   Text -> Tokenization -> Lowercasing -> Stop Word Removal -> Lemmatization (Dictionary root) / Stemming (Suffix trimming).\n\n2. Vectorization Models:\n   - Bag of Words (BoW): Counts word occurrences in document. Ignores word order.\n   - Term Frequency-Inverse Document Frequency (TF-IDF):\n     TF(t, d) = Count(t, d) / Total_Words(d)\n     IDF(t) = log( Total_Documents / Docs_with_t )\n     TF-IDF = TF * IDF\n\n3. Dense Word Embeddings:\n   - Word2Vec: Maps words into continuous vector space capturing semantic relations (e.g. King - Man + Woman = Queen).\n   - CBOW (Continuous Bag of Words): Predicts target word from context words.\n   - Skip-Gram: Predicts context words from target word."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Artificial Intelligence: A Modern Approach",
        "author": "Stuart Russell & Peter Norvig",
        "url": "https://repo.darmajaya.ac.id/4836/1/Stuart%20Russell%2C%20Peter%20Norvig-Artificial%20Intelligence_%20A%20Modern%20Approach-Prentice%20Hall%20%28%20PDFDrive%20%29.pdf"
      },
      {
        "title": "Introduction to Machine Learning with Python",
        "author": "Andreas C. Müller & Sarah Guido",
        "url": "https://www.nrigroupindia.com/e-book/Introduction%20to%20Machine%20Learning%20with%20Python%20(%20PDFDrive.com%20)-min.pdf"
      },
      {
        "title": "Speech and Language Processing",
        "author": "Daniel Jurafsky and James H. Martin"
      }
    ],
    "practiceLinks": [
      {
        "title": "Kaggle Natural Language Processing",
        "url": "https://www.kaggle.com/learn/natural-language-processing"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is the difference between Stemming and Lemmatization? (2 Marks)",
        "State the formula for TF-IDF. Why is IDF weighting important? (2 Marks)",
        "Explain Skip-Gram vs CBOW in the Word2Vec model. (2 Marks)"
      ],
      "sixMarks": [
        "Explain the end-to-end NLP Sentiment Analysis pipeline from raw text ingestion to classification output with code example. (6 Marks)",
        "Derive TF-IDF matrix computation for a sample dataset of 3 short text documents. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Natural Language Processing. Detail text normalization, N-gram language models, TF-IDF vectorization, Word2Vec vector space geometry, RNN/LSTM sequence tagging, and Intent-based Chatbot architectures. (10 Marks)"
      ]
    }
  },
  {
    "title": "Generative AI Basics",
    "slug": "aiml-generative-ai-basics",
    "order": 13,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Explore Generative AI concepts: Transformer Self-Attention, Large Language Models (LLMs), Prompt Engineering, and RAG architectures.",
    "subTopics": [
      "Introduction to Generative AI",
      "Large Language Models (LLMs)",
      "Transformers Architecture",
      "Prompt Engineering Basics",
      "AI Assistants",
      "Text Generation",
      "Image Generation Basics"
    ],
    "prerequisiteTitles": [
      "Natural Language Processing"
    ],
    "learningObjectives": [
      "Understand the Transformer architecture: Scaled Dot-Product Self-Attention and Multi-Head Attention.",
      "Learn Large Language Model (LLM) paradigms (GPT, Llama, Claude) and fine-tuning techniques.",
      "Apply Prompt Engineering techniques (Zero-shot, Few-shot, Chain-of-Thought)."
    ],
    "notes": [
      {
        "title": "Generative AI, Transformers & Prompt Engineering",
        "content": "GENERATIVE AI & TRANSFORMER ARCHITECTURE\n\n1. Transformer Self-Attention Mechanism:\n   - Query (Q), Key (K), Value (V) projections:\n     Attention(Q, K, V) = softmax( (Q * K^T) / sqrt(d_k) ) * V\n   - Multi-Head Attention: Concatenates multiple parallel self-attention heads capturing different contextual relationships.\n\n2. Large Language Models (LLMs):\n   - Decoder-Only Models (GPT-4, Llama 3): Autoregressive next-token prediction.\n   - Encoder-Only Models (BERT): Masked Language Modeling for bidirectional representation.\n\n3. Prompt Engineering Strategies:\n   - Zero-Shot: Direct instruction without examples.\n   - Few-Shot: Providing 2-3 input-output demonstration pairs.\n   - Chain-of-Thought (CoT): Instructing model to \"think step by step\".\n   - Retrieval-Augmented Generation (RAG): Enhancing LLM responses with external vector database search."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Artificial Intelligence: A Modern Approach",
        "author": "Stuart Russell & Peter Norvig",
        "url": "https://repo.darmajaya.ac.id/4836/1/Stuart%20Russell%2C%20Peter%20Norvig-Artificial%20Intelligence_%20A%20Modern%20Approach-Prentice%20Hall%20%28%20PDFDrive%20%29.pdf"
      },
      {
        "title": "Introduction to Machine Learning with Python",
        "author": "Andreas C. Müller & Sarah Guido",
        "url": "https://www.nrigroupindia.com/e-book/Introduction%20to%20Machine%20Learning%20with%20Python%20(%20PDFDrive.com%20)-min.pdf"
      },
      {
        "title": "Generative Deep Learning",
        "author": "David Foster"
      }
    ],
    "practiceLinks": [
      {
        "title": "Hugging Face Course",
        "url": "https://huggingface.co/course/chapter1/1"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain the Scaled Dot-Product Self-Attention formula in Transformers. (2 Marks)",
        "Differentiate between Zero-Shot, Few-Shot, and Chain-of-Thought prompting. (2 Marks)",
        "What is Retrieval-Augmented Generation (RAG) and why is it used with LLMs? (2 Marks)"
      ],
      "sixMarks": [
        "Explain Transformer architecture encoder-decoder blocks, Multi-Head Attention, and Positional Encoding. (6 Marks)",
        "Describe the Fine-Tuning lifecycle of an LLM (e.g. Llama) using PEFT / QLoRA techniques. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Generative AI & LLMs. Detail Transformer self-attention equations, GPT auto-regressive generation, Prompt Engineering strategies, RAG vector database pipelines, and ethical safety guardrails. (10 Marks)"
      ]
    }
  },
  {
    "title": "Machine Learning Model Evaluation",
    "slug": "aiml-machine-learning-model-evaluation",
    "order": 14,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Evaluate model performance: Confusion Matrix, Precision, Recall, F1 Score, ROC-AUC curves, Cross-Validation, Bias-Variance tradeoff, and Overfitting reduction.",
    "subTopics": [
      "Training and Validation",
      "Cross Validation",
      "Overfitting",
      "Underfitting",
      "Bias and Variance",
      "Confusion Matrix",
      "Accuracy",
      "Precision",
      "Recall",
      "F1 Score",
      "ROC Curve"
    ],
    "prerequisiteTitles": [
      "Supervised Learning Algorithms"
    ],
    "learningObjectives": [
      "Construct Confusion Matrices and calculate Accuracy, Precision, Recall, and F1 Score.",
      "Plot ROC curves and evaluate Area Under Curve (ROC-AUC) metrics.",
      "Apply K-Fold Cross Validation and regularization (L1 Lasso, L2 Ridge) to fix Overfitting."
    ],
    "notes": [
      {
        "title": "Model Evaluation Metrics, Confusion Matrix & ROC Curves",
        "content": "MODEL EVALUATION CHEATSHEET\n\n1. Confusion Matrix Metrics:\n   -----------------------------------------\n                   | Predicted Positive | Predicted Negative\n   -----------------------------------------\n   Actual Positive | True Positive (TP) | False Negative (FN)\n   Actual Negative | False Positive (FP)| True Negative (TN)\n   -----------------------------------------\n   - Accuracy = (TP + TN) / (TP + TN + FP + FN)\n   - Precision = TP / (TP + FP)  [Purity of positive predictions]\n   - Recall (Sensitivity) = TP / (TP + FN)  [Coverage of actual positives]\n   - F1 Score = 2 * (Precision * Recall) / (Precision + Recall)\n\n2. Bias-Variance Tradeoff:\n   - High Bias (Underfitting): Model too simple; performs poorly on both train and test data.\n   - High Variance (Overfitting): Model too complex; memorizes training data but fails on test data.\n\n3. Cross Validation:\n   K-Fold CV splits dataset into K folds, training on K-1 folds and validating on 1 fold iteratively K times."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Artificial Intelligence: A Modern Approach",
        "author": "Stuart Russell & Peter Norvig",
        "url": "https://repo.darmajaya.ac.id/4836/1/Stuart%20Russell%2C%20Peter%20Norvig-Artificial%20Intelligence_%20A%20Modern%20Approach-Prentice%20Hall%20%28%20PDFDrive%20%29.pdf"
      },
      {
        "title": "Introduction to Machine Learning with Python",
        "author": "Andreas C. Müller & Sarah Guido",
        "url": "https://www.nrigroupindia.com/e-book/Introduction%20to%20Machine%20Learning%20with%20Python%20(%20PDFDrive.com%20)-min.pdf"
      },
      {
        "title": "Applied Predictive Modeling",
        "author": "Max Kuhn and Kjell Johnson"
      }
    ],
    "practiceLinks": [
      {
        "title": "Scikit-Learn Model Evaluation Metrics",
        "url": "https://scikit-learn.org/stable/modules/model_evaluation.html"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define Precision, Recall, and F1-Score. When is Recall preferred over Precision? (2 Marks)",
        "What is the Bias-Variance Tradeoff? (2 Marks)",
        "Explain K-Fold Cross Validation. (2 Marks)"
      ],
      "sixMarks": [
        "Given TP=80, FP=20, FN=10, TN=890, construct the Confusion Matrix and compute Accuracy, Precision, Recall, and F1 Score. (6 Marks)",
        "Explain ROC Curve and AUC metric. How is the ROC curve generated by varying classification thresholds? (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Model Evaluation & Validation. Detail confusion matrix calculations, imbalanced class metrics (PR-AUC vs ROC-AUC), K-Fold Stratified CV, Bias-Variance decomposition equations, and L1/L2 Regularization techniques. (10 Marks)"
      ]
    }
  },
  {
    "title": "AI Tools and Frameworks",
    "slug": "aiml-ai-tools-and-frameworks",
    "order": 15,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Hands-on guide to leading AI software libraries: Scikit-Learn, TensorFlow, Keras, PyTorch, OpenCV, Jupyter Notebooks, and Google Colab.",
    "subTopics": [
      "Scikit-Learn",
      "TensorFlow",
      "Keras",
      "PyTorch",
      "OpenCV",
      "Jupyter Notebook",
      "Google Colab"
    ],
    "prerequisiteTitles": [
      "Python for Artificial Intelligence"
    ],
    "learningObjectives": [
      "Build ML pipelines and models using Scikit-Learn estimator APIs.",
      "Construct deep learning models using Keras Sequential and PyTorch nn.Module.",
      "Utilize GPU/TPU hardware acceleration in Google Colab and Jupyter Notebooks."
    ],
    "notes": [
      {
        "title": "AI Frameworks: Scikit-Learn, TensorFlow & PyTorch",
        "content": "AI TOOLS & FRAMEWORKS OVERVIEW\n\n1. Scikit-Learn:\n   from sklearn.model_selection import train_test_split\n   from sklearn.ensemble import RandomForestClassifier\n   X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)\n   model = RandomForestClassifier()\n   model.fit(X_train, y_train)\n   predictions = model.predict(X_test)\n\n2. TensorFlow & Keras:\n   import tensorflow as tf\n   model = tf.keras.Sequential([\n       tf.keras.layers.Dense(128, activation='relu', input_shape=(784,)),\n       tf.keras.layers.Dense(10, activation='softmax')\n   ])\n   model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])\n\n3. PyTorch:\n   import torch, torch.nn as nn\n   class Net(nn.Module):\n       def __init__(self):\n           super().__init__()\n           self.fc = nn.Linear(784, 10)\n       def forward(self, x):\n           return self.fc(x)"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Artificial Intelligence: A Modern Approach",
        "author": "Stuart Russell & Peter Norvig",
        "url": "https://repo.darmajaya.ac.id/4836/1/Stuart%20Russell%2C%20Peter%20Norvig-Artificial%20Intelligence_%20A%20Modern%20Approach-Prentice%20Hall%20%28%20PDFDrive%20%29.pdf"
      },
      {
        "title": "Introduction to Machine Learning with Python",
        "author": "Andreas C. Müller & Sarah Guido",
        "url": "https://www.nrigroupindia.com/e-book/Introduction%20to%20Machine%20Learning%20with%20Python%20(%20PDFDrive.com%20)-min.pdf"
      },
      {
        "title": "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow",
        "author": "Aurélien Géron"
      }
    ],
    "practiceLinks": [
      {
        "title": "PyTorch Tutorials",
        "url": "https://pytorch.org/tutorials/"
      },
      {
        "title": "TensorFlow Tutorials",
        "url": "https://www.tensorflow.org/tutorials"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Compare PyTorch (Dynamic Computation Graph) and TensorFlow 1.x (Static Graph). (2 Marks)",
        "What is the standard Estimator API pattern in Scikit-Learn (fit, predict, transform)? (2 Marks)",
        "How do Google Colab GPU runtimes accelerate PyTorch model training? (2 Marks)"
      ],
      "sixMarks": [
        "Write Python code using Keras Sequential API to build, compile, and train a 3-layer neural network on input shape (28, 28). (6 Marks)",
        "Compare PyTorch and TensorFlow in terms of debugging ease, production deployment, and ecosystem support. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on AI Software Ecosystem. Compare Scikit-Learn, TensorFlow, Keras, PyTorch, and OpenCV. Detail tensor computations, automatic differentiation (autograd), GPU acceleration, and model saving/export formats (ONNX/TFLite). (10 Marks)"
      ]
    }
  },
  {
    "title": "AI Project Development",
    "slug": "aiml-ai-project-development",
    "order": 16,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "End-to-end AI project lifecycle: Problem definition, dataset preparation, model training/tuning, REST API deployment, and Responsible AI ethics.",
    "subTopics": [
      "Problem Definition",
      "Dataset Selection",
      "Data Preparation",
      "Model Building",
      "Model Training",
      "Model Testing",
      "Model Deployment Basics",
      "AI Ethics and Responsible AI"
    ],
    "prerequisiteTitles": [
      "Machine Learning Model Evaluation",
      "AI Tools and Frameworks"
    ],
    "learningObjectives": [
      "Structure an end-to-end AI project from business requirement to model serving.",
      "Deploy trained ML models as REST APIs using FastAPI / Flask and Docker containers.",
      "Evaluate Responsible AI principles: fairness, bias mitigation, explainability (SHAP/LIME), and privacy."
    ],
    "notes": [
      {
        "title": "AI Project Lifecycle, API Deployment & Responsible AI",
        "content": "AI PROJECT DEVELOPMENT & DEPLOYMENT\n\n1. AI Project Phases:\n   Business Problem -> Data Sourcing -> Preprocessing & EDA -> Baseline Model -> Hyperparameter Tuning -> Validation -> API Deployment (FastAPI/Flask) -> MLOps Monitoring.\n\n2. Model Deployment via FastAPI:\n   from fastapi import FastAPI\n   import joblib\n   app = FastAPI()\n   model = joblib.load('model.pkl')\n   @app.post('/predict')\n   def predict(data: dict):\n       prediction = model.predict([list(data.values())])\n       return {'prediction': int(prediction[0])}\n\n3. Responsible AI & Ethics:\n   - Fairness: Eliminating algorithmic bias against protected groups.\n   - Explainability (XAI): Interpreting complex black-box models using SHAP (SHapley Additive exPlanations) and LIME.\n   - Privacy: Differential Privacy and Federated Learning."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Artificial Intelligence: A Modern Approach",
        "author": "Stuart Russell & Peter Norvig",
        "url": "https://repo.darmajaya.ac.id/4836/1/Stuart%20Russell%2C%20Peter%20Norvig-Artificial%20Intelligence_%20A%20Modern%20Approach-Prentice%20Hall%20%28%20PDFDrive%20%29.pdf"
      },
      {
        "title": "Introduction to Machine Learning with Python",
        "author": "Andreas C. Müller & Sarah Guido",
        "url": "https://www.nrigroupindia.com/e-book/Introduction%20to%20Machine%20Learning%20with%20Python%20(%20PDFDrive.com%20)-min.pdf"
      },
      {
        "title": "Designing Machine Learning Systems",
        "author": "Chip Huyen"
      }
    ],
    "practiceLinks": [
      {
        "title": "FastAPI Documentation",
        "url": "https://fastapi.tiangolo.com/"
      },
      {
        "title": "Kaggle End-to-End Projects",
        "url": "https://www.kaggle.com/code"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What are the main stages of an end-to-end AI Project Lifecycle? (2 Marks)",
        "Why is Model Explainability (XAI) crucial in healthcare and financial AI applications? (2 Marks)",
        "Define Algorithmic Bias in Machine Learning. (2 Marks)"
      ],
      "sixMarks": [
        "Explain how to deploy a trained Scikit-Learn model as a web API using FastAPI and Docker containerization. (6 Marks)",
        "Describe Responsible AI principles: Fairness, Transparency, Accountability, Privacy, and Explainability (SHAP/LIME). (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on AI Project Engineering & Governance. Detail problem formulation, data pipeline construction, model tuning, FastAPI microservice deployment, MLOps continuous monitoring, and Responsible AI ethical frameworks. (10 Marks)"
      ]
    }
  }
];
