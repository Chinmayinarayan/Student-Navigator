module.exports = [
  {
    "title": "Introduction to Probability and Statistics",
    "slug": "prob-stats-introduction",
    "order": 1,
    "estimatedHours": 3,
    "difficulty": "Beginner",
    "description": "Understand probability and statistics foundations: Introduction to Probability (random experiments, uncertainty quantification), Introduction to Statistics (descriptive and inferential), Importance in Engineering and CS (reliability, machine learning, data analysis), Applications in Computer Science (algorithm analysis, AI/ML), Types of Data (quantitative vs qualitative), Population and Sample, Variables and Observations, and Statistical Thinking.",
    "subTopics": [
      "Introduction to Probability",
      "Introduction to Statistics",
      "Importance of Probability and Statistics in Engineering",
      "Applications in Computer Science",
      "Types of Data",
      "Population and Sample",
      "Variables and Observations",
      "Statistical Thinking"
    ],
    "prerequisiteTitles": [],
    "learningObjectives": [
      "Define Probability as numerical measure of likelihood of an event occurring (0 to 1 scale).",
      "Distinguish Descriptive Statistics (summarize data) and Inferential Statistics (draw conclusions from sample).",
      "Classify data types: Nominal, Ordinal (categorical), Interval, Ratio (numerical)."
    ],
    "notes": [
      {
        "title": "Statistics Types, Data Classification, and Applications in CS",
        "content": "INTRODUCTION TO PROBABILITY AND STATISTICS\n\n1. What is Probability?\n   Probability = measure of likelihood of an event.\n   P(A) = (Number of favorable outcomes) / (Total number of possible outcomes)\n   Range: 0 ≤ P(A) ≤ 1\n   P(impossible event) = 0, P(certain event) = 1\n   \n   Examples:\n   - P(head on coin flip) = 1/2 = 0.5\n   - P(6 on dice) = 1/6 ≈ 0.167\n   - P(ace from deck) = 4/52 = 1/13 ≈ 0.077\n\n2. Descriptive vs Inferential Statistics:\n   Descriptive Statistics: Summarize and describe data.\n   - Measures: Mean, Median, Mode, Range, Variance, Standard Deviation\n   - Tools: Tables, graphs, histograms, box plots\n   \n   Inferential Statistics: Draw conclusions about population from sample.\n   - Tools: Hypothesis testing, confidence intervals, regression\n   - Example: Test 100 chips from factory → conclude about all chips produced\n\n3. Data Type Classification:\n   Categorical (Qualitative):\n   - Nominal: Categories with no order. Gender (M/F), Color (Red/Blue/Green), OS (Windows/Linux/Mac)\n   - Ordinal: Ordered categories, unequal intervals. Rating (Poor/Fair/Good/Excellent), Education level\n   \n   Numerical (Quantitative):\n   - Interval: Equal intervals, no true zero. Temperature (°C), Calendar year\n   - Ratio: Equal intervals, true zero. Height, Weight, Time, Income, Age\n\n4. Population vs Sample:\n   - Population (N): Complete set of all individuals/items of interest.\n   - Sample (n): Subset of population selected for study.\n   - Parameter: Numerical measurement describing population (μ, σ).\n   - Statistic: Numerical measurement describing sample (x̄, s).\n   \n   Why sample? Population may be infinite, too large, destructive testing.\n\n5. Applications in Computer Science:\n   - Algorithm Analysis: Average-case complexity uses probability.\n   - Machine Learning: Naive Bayes, regression, neural network training.\n   - Network Analysis: Packet loss probability, queuing theory.\n   - Cryptography: Random number generation, key security.\n   - A/B Testing: Statistical hypothesis testing for website features.\n   - Database Query Optimization: Statistics on column distributions.\n   - Reliability Engineering: MTBF (Mean Time Between Failures)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Probability and Statistics for Engineers and Scientists",
        "author": "Walpole, Myers, Myers"
      },
      {
        "title": "Introduction to Probability and Statistics",
        "author": "William Mendenhall"
      }
    ],
    "practiceLinks": [
      {
        "title": "Khan Academy Statistics and Probability",
        "url": "https://www.khanacademy.org/math/statistics-probability"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define Probability. What does P(A) = 0 and P(A) = 1 represent? (2 Marks)",
        "Distinguish Descriptive and Inferential Statistics with examples. (2 Marks)",
        "Classify the following as Nominal, Ordinal, Interval, or Ratio: Blood type, Temperature (°C), Height, Movie rating. (2 Marks)"
      ],
      "sixMarks": [
        "Explain Types of Data (Nominal, Ordinal, Interval, Ratio) with 2 examples each. Why does data type matter for statistical analysis? (6 Marks)",
        "Discuss 6 applications of Probability and Statistics in Computer Science and Engineering. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive introduction: Probability definition and axioms, statistics branches (descriptive vs inferential), data type hierarchy (categorical → numerical) with examples and appropriate statistical tools for each, population vs sample distinction with real-world sampling scenarios, statistical thinking framework, and applications across CS domains (ML, networks, algorithms, testing). (10 Marks)"
      ]
    }
  },
  {
    "title": "Basic Concepts of Probability",
    "slug": "prob-stats-basic-probability",
    "order": 2,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Master probability foundations: Random Experiments (repeatable, unpredictable outcome), Sample Space S (all possible outcomes), Events (subsets of S), Types of Events (Simple, Compound, Independent, Dependent, Mutually Exclusive, Exhaustive), Probability Axioms (Kolmogorov), Probability Rules (Addition, Multiplication), Conditional Probability P(A|B), Total Probability Theorem, and Bayes' Theorem with applications.",
    "subTopics": [
      "Random Experiments",
      "Sample Space",
      "Events",
      "Simple Events",
      "Compound Events",
      "Independent Events",
      "Dependent Events",
      "Mutually Exclusive Events",
      "Probability Axioms",
      "Probability Rules",
      "Conditional Probability",
      "Bayes' Theorem"
    ],
    "prerequisiteTitles": [
      "Introduction to Probability and Statistics"
    ],
    "learningObjectives": [
      "Define Random Experiment, Sample Space, and Event. Write sample spaces for common experiments.",
      "Apply Addition Rule: P(A∪B) = P(A) + P(B) - P(A∩B).",
      "Apply Bayes' Theorem: P(A|B) = P(B|A)·P(A) / P(B) to solve medical diagnosis and spam filter problems."
    ],
    "notes": [
      {
        "title": "Probability Rules, Conditional Probability, and Bayes' Theorem Solved Examples",
        "content": "BASIC CONCEPTS OF PROBABILITY\n\n1. Random Experiment, Sample Space, Events:\n   Random Experiment: Process with well-defined outcomes, unpredictable result.\n   \n   Examples:\n   - Toss a coin: S = {H, T}\n   - Roll a die: S = {1, 2, 3, 4, 5, 6}\n   - Draw a card: S = {52 cards}\n   - Toss two coins: S = {HH, HT, TH, TT}\n\n2. Types of Events:\n   - Simple Event: Single outcome. E.g., {6} when rolling die.\n   - Compound Event: Multiple outcomes. E.g., {even numbers} = {2,4,6}.\n   - Mutually Exclusive: A∩B = ∅. Cannot occur simultaneously. E.g., {Head} and {Tail}.\n   - Independent: P(A∩B) = P(A)·P(B). Occurrence of A doesn't affect P(B).\n   - Complementary: A and A̅. P(A) + P(A̅) = 1.\n\n3. Probability Axioms (Kolmogorov):\n   Axiom 1: P(A) ≥ 0 for any event A.\n   Axiom 2: P(S) = 1 (certain event has probability 1).\n   Axiom 3: If A and B are mutually exclusive: P(A∪B) = P(A) + P(B).\n\n4. Probability Rules:\n   Addition Rule: P(A∪B) = P(A) + P(B) - P(A∩B)\n   For mutually exclusive: P(A∪B) = P(A) + P(B)\n   \n   Multiplication Rule:\n   For independent events: P(A∩B) = P(A)·P(B)\n   For dependent events: P(A∩B) = P(A)·P(B|A)\n   \n   Complement Rule: P(A̅) = 1 - P(A)\n\n5. Conditional Probability:\n   P(A|B) = P(A∩B) / P(B), provided P(B) > 0\n   \n   Example: P(heart | red card) = P(heart and red) / P(red) = (13/52) / (26/52) = 13/26 = 1/2\n\n6. Bayes' Theorem:\n   P(A|B) = [P(B|A) · P(A)] / P(B)\n   \n   Where P(B) = P(B|A)·P(A) + P(B|A̅)·P(A̅)  [Total Probability Theorem]\n   \n   Medical Diagnosis Example:\n   - Disease affects 1% of population: P(D) = 0.01, P(D̅) = 0.99\n   - Test sensitivity: P(+|D) = 0.95 (true positive rate)\n   - Test specificity: P(-|D̅) = 0.90, so P(+|D̅) = 0.10 (false positive rate)\n   \n   Find P(D|+) = probability of disease given positive test:\n   P(+) = P(+|D)·P(D) + P(+|D̅)·P(D̅) = 0.95×0.01 + 0.10×0.99 = 0.0095 + 0.099 = 0.1085\n   P(D|+) = [0.95 × 0.01] / 0.1085 = 0.0095 / 0.1085 ≈ 0.0876 (8.76%)\n   \n   Result: Even with positive test, only ~8.76% chance of having disease due to low base rate!"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Probability and Statistics for Engineers and Scientists",
        "author": "Walpole, Myers"
      }
    ],
    "practiceLinks": [
      {
        "title": "Probability Practice Problems Khan Academy",
        "url": "https://www.khanacademy.org/math/statistics-probability/probability-library"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State Kolmogorov's three axioms of probability. (2 Marks)",
        "What is Conditional Probability? Write the formula and give an example. (2 Marks)",
        "State Bayes' Theorem. What is its significance? (2 Marks)"
      ],
      "sixMarks": [
        "A box has 4 red and 6 blue balls. Two drawn without replacement. Find: (a) P(both red), (b) P(one red, one blue), (c) P(second red | first red). (6 Marks)",
        "Apply Bayes' theorem: 1% of emails are spam. Spam filter correctly identifies spam 95% of time and incorrectly flags ham 2% of time. Email is flagged as spam. Find P(spam | flagged). (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive probability: Sample spaces (coin, dice, cards, selection experiments), all event types with Venn diagrams, probability axioms and derived rules (complement, addition, multiplication), conditional probability with tree diagrams, independence testing, Total Probability Theorem, Bayes' Theorem with 3 solved application problems (medical testing, quality control, document classification). (10 Marks)"
      ]
    }
  },
  {
    "title": "Random Variables",
    "slug": "prob-stats-random-variables",
    "order": 3,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Master random variables: Introduction to Random Variables (numerical function on sample space), Discrete Random Variables (countable values), Continuous Random Variables (uncountable, intervals), Probability Distribution Functions, Probability Mass Function (PMF) for discrete, Probability Density Function (PDF) for continuous, Cumulative Distribution Function (CDF), Expected Value (mean), Variance, Standard Deviation, and Moment Generating Functions.",
    "subTopics": [
      "Introduction to Random Variables",
      "Discrete Random Variables",
      "Continuous Random Variables",
      "Probability Distribution Functions",
      "Probability Mass Function (PMF)",
      "Probability Density Function (PDF)",
      "Cumulative Distribution Function (CDF)",
      "Expected Value",
      "Variance and Standard Deviation"
    ],
    "prerequisiteTitles": [
      "Basic Concepts of Probability"
    ],
    "learningObjectives": [
      "Define a Random Variable X as a function mapping sample space S to real numbers.",
      "Compute E[X] = Σ x·P(X=x) for discrete and E[X] = ∫ x·f(x)dx for continuous RV.",
      "Calculate Variance: Var(X) = E[X²] - (E[X])² and Standard Deviation σ = √Var(X)."
    ],
    "notes": [
      {
        "title": "PMF, PDF, CDF, Expected Value and Variance Calculations",
        "content": "RANDOM VARIABLES\n\n1. Random Variable Definition:\n   A Random Variable X: S → ℝ is a function that assigns a real number to each outcome in the sample space.\n   \n   Example: Roll two dice, X = sum of faces.\n   S = {(1,1), (1,2), ..., (6,6)}, n(S) = 36\n   X can take values: 2, 3, 4, ..., 12\n\n2. Discrete Random Variable - PMF:\n   PMF: p(x) = P(X = x) for all x in range of X\n   \n   Properties: p(x) ≥ 0, Σ p(x) = 1\n   \n   Example: X = number of heads in 2 coin tosses.\n   S = {HH, HT, TH, TT}\n   P(X=0) = 1/4, P(X=1) = 2/4 = 1/2, P(X=2) = 1/4\n   \n   PMF Table:\n   x     | 0    | 1    | 2\n   P(X=x)| 0.25 | 0.50 | 0.25\n\n3. Expected Value (Mean):\n   E[X] = Σ x · P(X=x)  [discrete]\n   E[X] = ∫₋∞^∞ x · f(x) dx  [continuous]\n   \n   For coin toss example:\n   E[X] = 0(0.25) + 1(0.50) + 2(0.25) = 0 + 0.5 + 0.5 = 1\n   (Expected 1 head in 2 tosses ✓)\n\n4. Variance and Standard Deviation:\n   Var(X) = E[(X-μ)²] = E[X²] - (E[X])²\n   \n   E[X²] = Σ x² · P(X=x) = 0²(0.25) + 1²(0.50) + 2²(0.25) = 0 + 0.5 + 1 = 1.5\n   Var(X) = E[X²] - μ² = 1.5 - 1² = 0.5\n   σ = √0.5 ≈ 0.707\n\n5. Continuous Random Variable - PDF:\n   PDF: f(x) satisfies: f(x) ≥ 0, ∫₋∞^∞ f(x)dx = 1\n   P(a ≤ X ≤ b) = ∫ₐᵇ f(x) dx\n   Note: P(X = specific value) = 0 for continuous RV!\n\n6. Cumulative Distribution Function (CDF):\n   F(x) = P(X ≤ x)\n   \n   For discrete: F(x) = Σ_{t≤x} P(X=t)\n   For continuous: F(x) = ∫₋∞^x f(t) dt\n   \n   Properties: F(-∞) = 0, F(+∞) = 1, F is non-decreasing\n   \n   Example CDF for coin toss:\n   F(0) = 0.25, F(1) = 0.75, F(2) = 1.00\n   \n   Relationship: f(x) = F'(x) [PDF is derivative of CDF]\n\n7. Properties of Expectation:\n   E[aX + b] = a·E[X] + b\n   E[X + Y] = E[X] + E[Y]  [linearity]\n   Var(aX + b) = a²·Var(X)\n   If X,Y independent: Var(X+Y) = Var(X) + Var(Y)"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Probability and Statistics for Engineers",
        "author": "Walpole, Myers"
      }
    ],
    "practiceLinks": [
      {
        "title": "Random Variables Khan Academy",
        "url": "https://www.khanacademy.org/math/statistics-probability/random-variables-stats-library"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define a Discrete Random Variable and Probability Mass Function (PMF). State its properties. (2 Marks)",
        "What is the Cumulative Distribution Function (CDF)? What are its properties? (2 Marks)",
        "Why is P(X = c) = 0 for any continuous random variable? (2 Marks)"
      ],
      "sixMarks": [
        "A fair die is rolled twice. Let X = absolute difference of the two outcomes. Find PMF, CDF, E[X], and Var(X). (6 Marks)",
        "A continuous random variable X has PDF f(x) = 2x for 0≤x≤1, 0 otherwise. Find: (a) Verify it's a valid PDF, (b) P(0.25 < X < 0.75), (c) E[X], (d) Var(X). (6 Marks)"
      ],
      "longAnswer": [
        "Complete random variable theory: Discrete vs continuous classification, PMF construction and verification, PDF properties and probability calculation via integration, CDF derivation and usage, Expected Value calculation (discrete and continuous), Variance using E[X²]-(E[X])² formula, standard deviation interpretation, properties of linear transformations, independence and joint distributions overview. (10 Marks)"
      ]
    }
  },
  {
    "title": "Discrete Probability Distributions",
    "slug": "prob-stats-discrete-distributions",
    "order": 4,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Master discrete distributions: Bernoulli Distribution (single trial, success/failure), Binomial Distribution B(n,p) for n independent Bernoulli trials, Poisson Distribution (rare events, large n small p), Geometric Distribution (trials until first success), Hypergeometric Distribution (sampling without replacement), and Applications of Discrete Distributions in engineering and CS contexts.",
    "subTopics": [
      "Bernoulli Distribution",
      "Binomial Distribution",
      "Poisson Distribution",
      "Geometric Distribution",
      "Hypergeometric Distribution",
      "Applications of Discrete Distributions"
    ],
    "prerequisiteTitles": [
      "Random Variables"
    ],
    "learningObjectives": [
      "Apply Binomial Distribution: P(X=k) = C(n,k)·p^k·(1-p)^(n-k) for n trials with success probability p.",
      "Apply Poisson Distribution: P(X=k) = (λ^k · e^(-λ)) / k! for events in fixed interval.",
      "Identify which distribution applies: Binomial (fixed trials), Poisson (rare events), Geometric (until first success)."
    ],
    "notes": [
      {
        "title": "Discrete Distributions PMF, Mean, Variance, and Solved Examples",
        "content": "DISCRETE PROBABILITY DISTRIBUTIONS\n\n1. Bernoulli Distribution:\n   Single trial with two outcomes: Success (p) and Failure (1-p).\n   X ~ Bernoulli(p): P(X=1) = p, P(X=0) = 1-p\n   E[X] = p, Var(X) = p(1-p)\n\n2. Binomial Distribution B(n, p):\n   n independent Bernoulli trials, X = number of successes.\n   P(X = k) = C(n,k) · p^k · (1-p)^(n-k), k = 0, 1, ..., n\n   E[X] = np, Var(X) = np(1-p), σ = √(np(1-p))\n   \n   Example: Toss fair coin 10 times. P(exactly 6 heads)?\n   n=10, k=6, p=0.5\n   P(X=6) = C(10,6) · (0.5)^6 · (0.5)^4 = 210 · (1/1024) ≈ 0.205\n   \n   Python:\n   from scipy.stats import binom\n   prob = binom.pmf(6, 10, 0.5)  # P(X=6)\n   print(f\"P(X=6) = {prob:.4f}\")\n\n3. Poisson Distribution Poisson(λ):\n   Events occurring in fixed time/space interval, λ = average rate.\n   P(X = k) = (λ^k · e^(-λ)) / k!, k = 0, 1, 2, ...\n   E[X] = λ, Var(X) = λ\n   \n   Conditions for Poisson:\n   - Events occur independently.\n   - Average rate λ is constant.\n   - Two events cannot occur simultaneously.\n   \n   Example: A server receives 10 requests/minute on average. P(exactly 8 requests in a minute)?\n   λ=10, k=8\n   P(X=8) = (10^8 · e^(-10)) / 8! = 100000000 · 0.0000454 / 40320 ≈ 0.1126\n   \n   Poisson Approximation to Binomial:\n   If n is large (n>30), p is small (p<0.05): use Poisson with λ = np.\n\n4. Geometric Distribution:\n   X = number of trials until first success.\n   P(X = k) = (1-p)^(k-1) · p, k = 1, 2, 3, ...\n   E[X] = 1/p, Var(X) = (1-p)/p²\n   \n   Example: P(pass exam) = 0.6. P(passes on 3rd attempt)?\n   P(X=3) = (0.4)^2 × 0.6 = 0.096\n\n5. Distribution Summary:\n   ┌──────────────────┬──────────────────────────────────────────────┬─────┬─────────────┐\n   │ Distribution     │ Use When                                     │ E[X]│ Var(X)      │\n   ├──────────────────┼──────────────────────────────────────────────┼─────┼─────────────┤\n   │ Bernoulli(p)     │ Single trial, success/failure                │ p   │ p(1-p)      │\n   │ Binomial(n,p)    │ n fixed independent trials                   │ np  │ np(1-p)     │\n   │ Poisson(λ)       │ Count of rare events in fixed interval       │ λ   │ λ           │\n   │ Geometric(p)     │ Trials until first success                   │ 1/p │ (1-p)/p²    │\n   └──────────────────┴──────────────────────────────────────────────┴─────┴─────────────┘"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Probability and Statistics for Engineers and Scientists",
        "author": "Walpole, Myers"
      }
    ],
    "practiceLinks": [
      {
        "title": "Probability Distributions Khan Academy",
        "url": "https://www.khanacademy.org/math/statistics-probability/random-variables-stats-library"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State the conditions required for Binomial Distribution to apply. (2 Marks)",
        "What is Poisson Distribution? When is it used as an approximation to Binomial? (2 Marks)",
        "Define Geometric Distribution and compute its mean and variance. (2 Marks)"
      ],
      "sixMarks": [
        "A quality control inspector finds 5% defective items. From 20 items: (a) P(no defective), (b) P(exactly 2 defective), (c) P(at most 1 defective). (6 Marks)",
        "Customers arrive at rate 3/hour. Using Poisson distribution: (a) P(0 customers in 1 hour), (b) P(exactly 5 in 2 hours), (c) P(≥2 in 1 hour). (6 Marks)"
      ],
      "longAnswer": [
        "Complete discrete distributions study: Bernoulli trials concept, Binomial derivation (PMF, recursive formula, mean, variance, mode), Binomial calculations with tables/Python, Poisson distribution derivation (limit of Binomial as n→∞, p→0), Poisson applications (defects per unit, calls per hour, network packets), Geometric and Negative Binomial, Hypergeometric for finite population, Python scipy.stats implementations. (10 Marks)"
      ]
    }
  },
  {
    "title": "Continuous Probability Distributions",
    "slug": "prob-stats-continuous-distributions",
    "order": 5,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Master continuous distributions: Uniform Distribution U(a,b), Normal Distribution N(μ,σ²) - the bell curve, Exponential Distribution Exp(λ), Gamma Distribution, Beta Distribution, Standard Normal Distribution (Z-distribution, Z-table usage), and Applications in engineering system reliability, quality control, and data science.",
    "subTopics": [
      "Uniform Distribution",
      "Normal Distribution",
      "Exponential Distribution",
      "Gamma Distribution",
      "Beta Distribution",
      "Standard Normal Distribution",
      "Applications of Continuous Distributions"
    ],
    "prerequisiteTitles": [
      "Random Variables",
      "Discrete Probability Distributions"
    ],
    "learningObjectives": [
      "Apply Normal Distribution: compute probabilities using Z-score standardization Z = (X-μ)/σ and Z-table.",
      "Apply Exponential Distribution Exp(λ) for modeling time between events: P(X>t) = e^(-λt).",
      "Use Python scipy.stats for computing distribution probabilities, quantiles, and random sampling."
    ],
    "notes": [
      {
        "title": "Normal Distribution Z-Scores, Standard Normal Table, and Python scipy.stats",
        "content": "CONTINUOUS PROBABILITY DISTRIBUTIONS\n\n1. Uniform Distribution U(a, b):\n   All values in [a, b] equally likely.\n   f(x) = 1/(b-a) for a ≤ x ≤ b, 0 otherwise.\n   E[X] = (a+b)/2, Var(X) = (b-a)²/12\n   \n   Example: Bus arrives uniformly between 0-10 min. P(wait > 7 min)?\n   P(X > 7) = (10-7)/(10-0) = 3/10 = 0.3\n\n2. Normal Distribution N(μ, σ²):\n   Bell-shaped, symmetric about mean μ.\n   f(x) = (1/(σ√(2π))) · exp(-(x-μ)²/(2σ²))\n   E[X] = μ, Var(X) = σ²\n   \n   Key Properties:\n   - Symmetric: P(X > μ) = P(X < μ) = 0.5\n   - Empirical Rule: P(μ-σ < X < μ+σ) ≈ 0.68\n                     P(μ-2σ < X < μ+2σ) ≈ 0.95\n                     P(μ-3σ < X < μ+3σ) ≈ 0.997\n\n3. Standardization (Z-Score):\n   Z = (X - μ) / σ → Standard Normal N(0,1)\n   \n   Example: Exam scores ~ N(70, 100). P(score > 80)?\n   Z = (80 - 70) / 10 = 1.0\n   P(X > 80) = P(Z > 1.0) = 1 - Φ(1.0) = 1 - 0.8413 = 0.1587 (15.87%)\n   \n   Python:\n   from scipy.stats import norm\n   mu, sigma = 70, 10\n   prob = 1 - norm.cdf(80, mu, sigma)  # P(X > 80)\n   print(f\"P(X > 80) = {prob:.4f}\")  # 0.1587\n\n4. Exponential Distribution Exp(λ):\n   Models waiting time between events; memoryless property.\n   f(x) = λ·e^(-λx) for x ≥ 0\n   E[X] = 1/λ, Var(X) = 1/λ²\n   P(X > t) = e^(-λt)  [survival function]\n   \n   Example: Component fails on average every 100 hours. P(lasts > 150 hours)?\n   λ = 1/100 = 0.01\n   P(X > 150) = e^(-0.01 × 150) = e^(-1.5) ≈ 0.2231\n\n5. Normal Distribution Table (Z-values):\n   Z = 0.00: Φ(0) = 0.5000\n   Z = 1.00: Φ(1) = 0.8413\n   Z = 1.645: Φ = 0.9500 (90% CI)\n   Z = 1.96: Φ = 0.9750 (95% CI)\n   Z = 2.33: Φ = 0.9901 (99% one-tailed)\n   Z = 2.576: Φ = 0.9950 (99% CI)\n\n6. Python scipy.stats Implementation:\n   import numpy as np\n   from scipy import stats\n   import matplotlib.pyplot as plt\n   \n   # Normal distribution\n   x = np.linspace(-4, 4, 100)\n   plt.plot(x, stats.norm.pdf(x), label='N(0,1)')\n   \n   # Find percentile: x such that P(X < x) = 0.95\n   print(stats.norm.ppf(0.95))  # 1.645\n   \n   # Exponential distribution  \n   lam = 2  # rate = 2 events/minute\n   print(stats.expon.mean(scale=1/lam))  # E[X] = 1/λ = 0.5"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Probability and Statistics for Engineers",
        "author": "Walpole, Myers"
      }
    ],
    "practiceLinks": [
      {
        "title": "Normal Distribution Khan Academy",
        "url": "https://www.khanacademy.org/math/statistics-probability/modeling-distributions-of-data"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State the Empirical Rule (68-95-99.7 rule) for Normal Distribution. (2 Marks)",
        "What is the Z-score? How is it used to find probabilities from Normal tables? (2 Marks)",
        "What is the memoryless property of Exponential Distribution? (2 Marks)"
      ],
      "sixMarks": [
        "Weights of components ~ N(500g, 400g²). Find: (a) P(490<W<510), (b) P(W>510), (c) Weight w such that P(W<w)=0.95. (6 Marks)",
        "A network router fails on average every 200 hours (Exponential). Find: (a) P(fails within 100h), (b) P(lasts > 300h), (c) Expected time to failure. (6 Marks)"
      ],
      "longAnswer": [
        "Continuous distributions complete study: Uniform distribution (PDF, CDF, mean, variance, applications), Normal distribution derivation rationale, properties (bell curve, symmetry, empirical rule), Z-score standardization, normal probability calculations (from Z-table and Python), Exponential distribution (PDF, CDF, memoryless property, reliability applications), and Python scipy.stats implementations for all distributions with visualization using matplotlib. (10 Marks)"
      ]
    }
  },
  {
    "title": "Descriptive Statistics",
    "slug": "prob-stats-descriptive-statistics",
    "order": 6,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Summarize data using descriptive statistics: Data Collection Methods (surveys, experiments, observational), Data Organization (frequency distribution tables), Measures of Central Tendency (Mean, Median, Mode), Measures of Dispersion (Range, Variance, Standard Deviation), Quartiles and Percentiles (IQR, outlier detection), Skewness (asymmetry measure), and Kurtosis (tail heaviness measure).",
    "subTopics": [
      "Data Collection Methods",
      "Data Organization",
      "Frequency Distribution",
      "Mean",
      "Median",
      "Mode",
      "Range",
      "Variance",
      "Standard Deviation",
      "Quartiles",
      "Percentiles",
      "Skewness",
      "Kurtosis"
    ],
    "prerequisiteTitles": [
      "Introduction to Probability and Statistics"
    ],
    "learningObjectives": [
      "Calculate arithmetic mean, median, and mode for ungrouped and grouped data.",
      "Compute variance (s²) and standard deviation (s) using both definitional and computational formulas.",
      "Interpret skewness: positive skew (tail right, mean > median > mode) and negative skew."
    ],
    "notes": [
      {
        "title": "Central Tendency, Dispersion Formulas, and Grouped Data Calculations",
        "content": "DESCRIPTIVE STATISTICS\n\n1. Measures of Central Tendency:\n   \n   Arithmetic Mean: x̄ = (Σ xᵢ) / n\n   - Best for symmetric distributions.\n   - Affected by outliers.\n   \n   Median: Middle value when data sorted.\n   - If n odd: median = ((n+1)/2)th value\n   - If n even: median = average of (n/2)th and (n/2+1)th values\n   - Not affected by outliers.\n   \n   Mode: Most frequently occurring value.\n   - Can have no mode (all unique) or multiple modes (bimodal).\n   \n   Example: Data: 2, 3, 3, 4, 5, 7, 7, 7, 9, 10\n   Mean = (2+3+3+4+5+7+7+7+9+10)/10 = 57/10 = 5.7\n   Median = (5+7)/2 = 6 (average of 5th and 6th)\n   Mode = 7 (appears 3 times)\n\n2. Measures of Dispersion:\n   Range = Max - Min = 10 - 2 = 8\n   \n   Variance (population): σ² = Σ(xᵢ-μ)² / N\n   Variance (sample): s² = Σ(xᵢ-x̄)² / (n-1)  [Bessel's correction]\n   Standard Deviation: s = √s²\n   \n   Example from above data:\n   x̄ = 5.7\n   Deviations²: (2-5.7)²+(3-5.7)²+...+(10-5.7)²\n   s² = 61.0/9 = 6.78, s = 2.60\n\n3. Quartiles and IQR:\n   Q1 = 25th percentile (1st quartile)\n   Q2 = 50th percentile (median)\n   Q3 = 75th percentile (3rd quartile)\n   IQR = Q3 - Q1 (Interquartile Range)\n   \n   Outlier Detection:\n   Lower fence = Q1 - 1.5×IQR\n   Upper fence = Q3 + 1.5×IQR\n   Points outside fences = outliers.\n\n4. Skewness:\n   Symmetrical: mean = median = mode. Normal bell curve.\n   Positively Skewed (right skew): mean > median > mode. Tail extends right. Income distributions.\n   Negatively Skewed (left skew): mean < median < mode. Tail extends left.\n   \n   Pearson's Skewness: Sk = 3(mean - median) / std deviation\n   Sk > 0 → positive skew; Sk < 0 → negative skew; Sk = 0 → symmetric.\n\n5. Python Descriptive Statistics:\n   import numpy as np\n   from scipy import stats\n   import pandas as pd\n   \n   data = [2, 3, 3, 4, 5, 7, 7, 7, 9, 10]\n   df = pd.Series(data)\n   \n   print(\"Mean:\", df.mean())           # 5.7\n   print(\"Median:\", df.median())        # 6.0\n   print(\"Mode:\", df.mode()[0])         # 7\n   print(\"Std Dev:\", df.std())          # 2.60\n   print(\"Variance:\", df.var())         # 6.78\n   print(\"Skewness:\", df.skew())        # -0.30\n   print(\"Kurtosis:\", df.kurtosis())    # -0.67\n   print(\"25th pct:\", df.quantile(0.25))  # Q1\n   print(\"75th pct:\", df.quantile(0.75))  # Q3\n   print(df.describe())  # Complete summary statistics"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Statistics for Engineers and Scientists",
        "author": "William Navidi"
      }
    ],
    "practiceLinks": [
      {
        "title": "Descriptive Statistics Khan Academy",
        "url": "https://www.khanacademy.org/math/statistics-probability/summarizing-quantitative-data"
      }
    ],
    "questionBank": {
      "conceptual": [
        "When should you use median instead of mean as a measure of central tendency? (2 Marks)",
        "Why does sample variance formula use (n-1) instead of n? (2 Marks)",
        "What does positive skewness indicate about a distribution? (2 Marks)"
      ],
      "sixMarks": [
        "For data: 12, 15, 15, 17, 20, 21, 24, 25, 25, 26. Calculate: Mean, Median, Mode, Range, Variance, Standard Deviation, Q1, Q3, IQR. Identify any outliers. (6 Marks)",
        "Compute descriptive statistics using Python pandas for a sample dataset. Show describe() output and interpret each statistic. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive descriptive statistics: Frequency distribution table construction (class intervals, frequencies, cumulative frequency), measures of central tendency (arithmetic mean, weighted mean, grouped data mean, median, mode), measures of dispersion (range, mean deviation, variance and standard deviation for ungrouped and grouped data), quartiles (box plot construction), skewness and kurtosis interpretation with normal distribution reference, and Python implementation with visualization. (10 Marks)"
      ]
    }
  },
  {
    "title": "Data Visualization and Statistical Representation",
    "slug": "prob-stats-data-visualization",
    "order": 7,
    "estimatedHours": 3,
    "difficulty": "Beginner",
    "description": "Visualize data effectively: Statistical Graphs overview, Bar Charts (categorical comparisons), Histograms (frequency distributions of continuous data), Pie Charts (proportional representation), Box Plots (quartile visualization and outlier detection), Scatter Plots (relationship between two variables), Frequency Curves (frequency polygons, ogives), and Data Interpretation techniques using Python Matplotlib and Seaborn.",
    "subTopics": [
      "Statistical Graphs",
      "Bar Charts",
      "Histograms",
      "Pie Charts",
      "Box Plots",
      "Scatter Plots",
      "Frequency Curves",
      "Data Interpretation"
    ],
    "prerequisiteTitles": [
      "Descriptive Statistics"
    ],
    "learningObjectives": [
      "Choose appropriate chart type: bar chart for categories, histogram for continuous data, scatter plot for relationships.",
      "Interpret box plots: median line, IQR box, whiskers, and outlier points.",
      "Create publication-quality statistical visualizations using Python matplotlib and seaborn."
    ],
    "notes": [
      {
        "title": "Statistical Visualization Types and Python Matplotlib/Seaborn Code",
        "content": "DATA VISUALIZATION\n\n1. Choosing the Right Chart:\n   ┌──────────────────────┬─────────────────────────────────────────┐\n   │ Chart Type           │ Best Used For                           │\n   ├──────────────────────┼─────────────────────────────────────────┤\n   │ Bar Chart            │ Comparing discrete categories           │\n   │ Histogram            │ Distribution of continuous variable     │\n   │ Pie Chart            │ Parts of a whole (≤ 5-7 categories)    │\n   │ Box Plot             │ Distribution summary with outliers      │\n   │ Scatter Plot         │ Relationship between 2 variables        │\n   │ Line Plot            │ Trend over time                         │\n   │ Heatmap              │ Correlation matrix, grid data           │\n   └──────────────────────┴─────────────────────────────────────────┘\n\n2. Complete Python Visualization:\n   import numpy as np\n   import pandas as pd\n   import matplotlib.pyplot as plt\n   import seaborn as sns\n   from scipy import stats\n   \n   # Generate sample data\n   np.random.seed(42)\n   data = pd.DataFrame({\n       'scores': np.random.normal(70, 15, 100),\n       'study_hours': np.random.uniform(1, 8, 100),\n       'grade': np.random.choice(['A','B','C','D'], 100)\n   })\n   \n   fig, axes = plt.subplots(2, 3, figsize=(15, 10))\n   \n   # 1. Histogram\n   axes[0,0].hist(data['scores'], bins=15, edgecolor='black', color='steelblue', alpha=0.7)\n   axes[0,0].set_title('Score Distribution (Histogram)')\n   axes[0,0].set_xlabel('Score'); axes[0,0].set_ylabel('Frequency')\n   \n   # 2. Box Plot\n   axes[0,1].boxplot(data['scores'], patch_artist=True, \n                     boxprops=dict(facecolor='lightblue'))\n   axes[0,1].set_title('Score Distribution (Box Plot)')\n   \n   # 3. Scatter Plot\n   axes[0,2].scatter(data['study_hours'], data['scores'], alpha=0.5, c='coral')\n   axes[0,2].set_title('Study Hours vs Scores')\n   axes[0,2].set_xlabel('Study Hours'); axes[0,2].set_ylabel('Score')\n   \n   # 4. Bar Chart\n   grade_counts = data['grade'].value_counts()\n   axes[1,0].bar(grade_counts.index, grade_counts.values, color='mediumseagreen')\n   axes[1,0].set_title('Grade Distribution (Bar Chart)')\n   \n   # 5. Pie Chart\n   axes[1,1].pie(grade_counts.values, labels=grade_counts.index, autopct='%1.1f%%')\n   axes[1,1].set_title('Grade Proportions (Pie Chart)')\n   \n   # 6. Seaborn Distribution Plot (KDE + histogram)\n   sns.histplot(data['scores'], kde=True, ax=axes[1,2], color='purple')\n   axes[1,2].set_title('Score Distribution with KDE')\n   \n   plt.tight_layout()\n   plt.savefig('statistical_plots.png', dpi=150)\n   plt.show()\n\n3. Box Plot Reading:\n   ─── Upper fence (Q3 + 1.5×IQR)\n   ○   Outlier above fence\n   ─── Q3 (75th percentile)\n   │   IQR box\n   ─── Median (Q2)\n   │   \n   ─── Q1 (25th percentile)\n   ─── Lower fence (Q1 - 1.5×IQR)\n   ○   Outlier below fence"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Python Data Science Handbook",
        "author": "Jake VanderPlas"
      }
    ],
    "practiceLinks": [
      {
        "title": "Seaborn Tutorial",
        "url": "https://seaborn.pydata.org/tutorial.html"
      }
    ],
    "questionBank": {
      "conceptual": [
        "When is a Histogram preferable to a Bar Chart? (2 Marks)",
        "How does a Box Plot help in identifying outliers? (2 Marks)",
        "What is the difference between a frequency polygon and a frequency curve? (2 Marks)"
      ],
      "sixMarks": [
        "For dataset: [55,60,62,65,70,72,75,78,80,82,85,88,90,95,98]: Create frequency distribution table, draw histogram, and compute Q1, Q2, Q3 for box plot. (6 Marks)",
        "Write Python code using matplotlib/seaborn to: create histogram with KDE, box plot, and scatter plot for a sample dataset. Interpret each chart. (6 Marks)"
      ],
      "longAnswer": [
        "Complete data visualization guide: Chart selection criteria, histogram construction (bin width selection, frequency vs relative frequency), box plot construction and interpretation (five-number summary, IQR, fence rules, outlier identification), scatter plot with correlation visualization, Python matplotlib complete visualization code, seaborn statistical plotting, and principles of effective data visualization (Tufte's data-ink ratio, chart junk avoidance). (10 Marks)"
      ]
    }
  },
  {
    "title": "Sampling Theory",
    "slug": "prob-stats-sampling-theory",
    "order": 8,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Understand sampling principles: Introduction to Sampling (why sample?), Population and Sample distinction, Sampling Methods (Simple Random, Stratified, Systematic, Cluster, Convenience), Sampling Distribution of sample mean, Central Limit Theorem (CLT) and its importance, Standard Error of the mean (SE = σ/√n), and Sampling Distribution of proportions.",
    "subTopics": [
      "Introduction to Sampling",
      "Population and Sample",
      "Random Sampling",
      "Stratified Sampling",
      "Systematic Sampling",
      "Cluster Sampling",
      "Sampling Distribution",
      "Central Limit Theorem",
      "Standard Error"
    ],
    "prerequisiteTitles": [
      "Descriptive Statistics",
      "Continuous Probability Distributions"
    ],
    "learningObjectives": [
      "Describe four probability sampling methods: SRS, Stratified, Systematic, Cluster with advantages.",
      "State Central Limit Theorem: for large n, sample mean X̄ ~ N(μ, σ²/n) regardless of population distribution.",
      "Calculate Standard Error SE = σ/√n and use it to find probabilities about sample means."
    ],
    "notes": [
      {
        "title": "Central Limit Theorem Statement, Proof Concept, and Sampling Distribution Examples",
        "content": "SAMPLING THEORY\n\n1. Why Sample?\n   - Population may be too large (census of all internet users).\n   - Destructive testing (test until failure).\n   - Time and cost constraints.\n   - Sufficient precision achievable with smaller sample.\n\n2. Sampling Methods:\n   a) Simple Random Sampling (SRS): Every individual has equal probability of selection.\n      With replacement: same individual can be selected again.\n      Without replacement: each selected once. More common in practice.\n   \n   b) Stratified Sampling: Divide population into strata (subgroups) by characteristic.\n      Sample proportionally from each stratum.\n      Pro: Ensures representation of all subgroups.\n      Example: Survey of students → stratify by year (1st, 2nd, 3rd, 4th year).\n   \n   c) Systematic Sampling: Select every kth element (k = N/n).\n      Example: Population=1000, sample=50. k=20. Start at random position 1-20, then every 20th.\n   \n   d) Cluster Sampling: Divide population into clusters (groups). Randomly select entire clusters.\n      Example: Survey nationwide → randomly select 20 cities → survey all in those cities.\n\n3. Sampling Distribution of X̄:\n   If X₁, X₂, ..., Xₙ are iid with E[Xᵢ]=μ, Var(Xᵢ)=σ²:\n   E[X̄] = μ (unbiased estimator)\n   Var(X̄) = σ²/n\n   SE(X̄) = σ/√n (Standard Error)\n\n4. Central Limit Theorem (CLT):\n   Statement: For sufficiently large n (n≥30), the sampling distribution of X̄ is approximately \n   Normal, regardless of the population distribution:\n   \n   X̄ ~ N(μ, σ²/n)  [approximately, for large n]\n   \n   Standardized: Z = (X̄ - μ) / (σ/√n) ~ N(0,1)\n   \n   CLT in action (Python simulation):\n   import numpy as np\n   import matplotlib.pyplot as plt\n   \n   population = np.random.exponential(scale=2, size=100000)  # Skewed population\n   \n   sample_means = [np.mean(np.random.choice(population, size=30)) for _ in range(10000)]\n   \n   plt.figure(figsize=(12,5))\n   plt.subplot(1,2,1)\n   plt.hist(population[:1000], bins=50, title='Population (Exponential)')\n   plt.subplot(1,2,2)\n   plt.hist(sample_means, bins=50, title='Sampling Dist of X̄ (CLT → Normal!)')\n   plt.show()\n\n5. Standard Error Application:\n   Example: Population μ=50, σ=10. Sample of n=25.\n   SE = 10/√25 = 10/5 = 2\n   P(48 < X̄ < 52) = P((48-50)/2 < Z < (52-50)/2) = P(-1 < Z < 1) = 0.6827"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Statistics for Engineers and Scientists",
        "author": "William Navidi"
      }
    ],
    "practiceLinks": [
      {
        "title": "CLT and Sampling Khan Academy",
        "url": "https://www.khanacademy.org/math/statistics-probability/sampling-distributions-library"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State the Central Limit Theorem. What minimum sample size is generally required? (2 Marks)",
        "What is Standard Error? How does increasing sample size affect SE? (2 Marks)",
        "Compare Stratified and Cluster sampling. When would you prefer each? (2 Marks)"
      ],
      "sixMarks": [
        "Population has μ=100, σ=20. Samples of n=64 drawn. Find: (a) E[X̄], (b) SE, (c) P(X̄>103), (d) P(97<X̄<103). (6 Marks)",
        "Simulate Central Limit Theorem in Python: Draw repeated samples from a Uniform distribution, plot sampling distribution of means, and verify it approaches Normal. (6 Marks)"
      ],
      "longAnswer": [
        "Sampling theory comprehensive: Population parameters vs sample statistics, sampling methods comparison (SRS, stratified, systematic, cluster, convenience) with advantages/disadvantages, sampling with/without replacement, sampling distribution of means derivation (mean and variance), CLT statement and practical implications, standard error formula and interpretation, z-scores for sample means, sampling distribution of proportions, and Python simulation of CLT. (10 Marks)"
      ]
    }
  },
  {
    "title": "Statistical Estimation",
    "slug": "prob-stats-statistical-estimation",
    "order": 9,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Estimate population parameters: Point Estimation (single value estimate), Desirable properties of estimators (Unbiasedness, Consistency, Efficiency), Interval Estimation (confidence intervals), Confidence Intervals for population mean (known σ: Z-interval, unknown σ: t-interval), Confidence Levels (90%, 95%, 99%), Estimating Population Proportions, Sample Size Determination, and Maximum Likelihood Estimation (MLE) basics.",
    "subTopics": [
      "Point Estimation",
      "Interval Estimation",
      "Confidence Intervals",
      "Confidence Levels",
      "Estimating Population Parameters",
      "Maximum Likelihood Estimation Basics"
    ],
    "prerequisiteTitles": [
      "Sampling Theory"
    ],
    "learningObjectives": [
      "Construct 95% Confidence Interval for mean: x̄ ± 1.96·(σ/√n) for known σ.",
      "Use t-distribution for unknown σ: x̄ ± t(α/2, n-1)·(s/√n).",
      "Determine required sample size: n = (Z·σ/E)² for desired margin of error E."
    ],
    "notes": [
      {
        "title": "Confidence Interval Construction and Sample Size Formulas",
        "content": "STATISTICAL ESTIMATION\n\n1. Point Estimation:\n   A single number used to estimate an unknown parameter.\n   - x̄ estimates μ (population mean)\n   - s estimates σ (population std dev)\n   - p̂ = x/n estimates p (proportion)\n   \n   Properties of Good Estimators:\n   - Unbiased: E[θ̂] = θ (expected value of estimator = true parameter)\n   - Consistent: θ̂ converges to θ as n→∞\n   - Efficient: Minimum variance among all unbiased estimators\n\n2. Confidence Interval for Mean (known σ):\n   CI: x̄ ± Z(α/2) · (σ/√n)\n   \n   Common Z-values:\n   - 90% CI: Z = 1.645\n   - 95% CI: Z = 1.96\n   - 99% CI: Z = 2.576\n   \n   Example: Sample x̄=72, σ=10, n=36, 95% CI.\n   CI = 72 ± 1.96 × (10/√36) = 72 ± 1.96 × 1.67 = 72 ± 3.27\n   95% CI: (68.73, 75.27)\n   \n   Interpretation: \"We are 95% confident that the population mean lies in (68.73, 75.27).\"\n\n3. Confidence Interval for Mean (unknown σ - t-distribution):\n   CI: x̄ ± t(α/2, n-1) · (s/√n)\n   \n   Use t-distribution when σ unknown AND n is small.\n   Degrees of freedom df = n-1.\n   \n   Example: Sample: x̄=50, s=8, n=16, 95% CI.\n   df = 15, t(0.025, 15) = 2.131\n   CI = 50 ± 2.131 × (8/√16) = 50 ± 2.131 × 2 = 50 ± 4.26\n   95% CI: (45.74, 54.26)\n\n4. Confidence Interval for Proportion:\n   p̂ ± Z(α/2) · √(p̂(1-p̂)/n)\n   \n   Example: 200 sampled, 70 success. p̂=0.35, 95% CI.\n   CI = 0.35 ± 1.96 × √(0.35×0.65/200) = 0.35 ± 1.96×0.0337 = 0.35 ± 0.066\n   95% CI: (0.284, 0.416)\n\n5. Sample Size Determination:\n   For mean: n = (Z·σ/E)²  [E = desired margin of error]\n   For proportion: n = Z² · p(1-p) / E²\n   \n   Example: Estimate mean within ±2 (E=2), σ=10, 95% confidence.\n   n = (1.96×10/2)² = (9.8)² = 96.04 → n = 97\n\n6. Maximum Likelihood Estimation (MLE):\n   Find parameter θ that maximizes the likelihood of observing the data.\n   L(θ; x) = Π f(xᵢ; θ)  [product of densities for all observations]\n   MLE: θ̂_MLE = argmax L(θ; x)\n   \n   For Normal: MLE of μ = x̄ (sample mean). MLE of σ² = (1/n)Σ(xᵢ-x̄)² (biased).\n   For Poisson: MLE of λ = x̄."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Probability and Statistics for Engineers",
        "author": "Walpole, Myers"
      }
    ],
    "practiceLinks": [
      {
        "title": "Confidence Intervals Khan Academy",
        "url": "https://www.khanacademy.org/math/statistics-probability/confidence-intervals-one-sample"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is the difference between Point Estimation and Interval Estimation? (2 Marks)",
        "Why do we use t-distribution instead of Z-distribution for small samples? (2 Marks)",
        "Interpret: '95% confidence interval (45, 55)'. What does it mean? (2 Marks)"
      ],
      "sixMarks": [
        "A sample of 25 light bulbs has mean life 1200 hours, s=100 hours. Construct 90% and 95% CI for mean bulb life. (6 Marks)",
        "In a survey, 300 of 500 customers prefer product A. Construct 99% CI for proportion. How large a sample is needed to estimate proportion within ±0.02 with 95% confidence? (6 Marks)"
      ],
      "longAnswer": [
        "Complete estimation theory: Properties of good estimators (unbiasedness, consistency, efficiency, sufficiency), Z-interval derivation and calculation, t-distribution characteristics (heavier tails, convergence to Z as df→∞), t-interval computation, CI for proportions, sample size determination formulas, interpretation of confidence intervals, MLE concept and applications (Normal, Poisson, Binomial), and Python scipy.stats confidence interval calculations. (10 Marks)"
      ]
    }
  },
  {
    "title": "Hypothesis Testing",
    "slug": "prob-stats-hypothesis-testing",
    "order": 10,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master hypothesis testing framework: Introduction to Hypothesis Testing, Null Hypothesis (H₀) and Alternative Hypothesis (H₁), Type I Error (α, false rejection) and Type II Error (β, false acceptance), Power of test (1-β), Level of Significance, p-value interpretation, One-Tailed vs Two-Tailed tests, Z-Test (large samples, known σ), t-Test (small samples, unknown σ), Chi-Square Test (categorical data), and F-Test (variance comparison).",
    "subTopics": [
      "Introduction to Hypothesis Testing",
      "Null Hypothesis",
      "Alternative Hypothesis",
      "Type I and Type II Errors",
      "Level of Significance",
      "p-value",
      "One-Tailed and Two-Tailed Tests",
      "Z-Test",
      "t-Test",
      "Chi-Square Test",
      "F-Test"
    ],
    "prerequisiteTitles": [
      "Statistical Estimation"
    ],
    "learningObjectives": [
      "Set up hypothesis test: state H₀ and H₁, choose α, compute test statistic, compare to critical value.",
      "Calculate and interpret p-value: reject H₀ if p-value < α.",
      "Apply Chi-Square test for goodness-of-fit and independence of categorical variables."
    ],
    "notes": [
      {
        "title": "Hypothesis Testing Procedure, Z-test, t-test, and Chi-Square Examples",
        "content": "HYPOTHESIS TESTING\n\n1. Hypothesis Testing Framework (5 Steps):\n   Step 1: State H₀ and H₁.\n     H₀: Null Hypothesis (status quo, no effect). Example: H₀: μ = 50\n     H₁: Alternative Hypothesis (claim to test). Example: H₁: μ ≠ 50 (two-tailed)\n   \n   Step 2: Choose significance level α. (Typically 0.05 or 0.01)\n   Step 3: Select appropriate test. Compute test statistic.\n   Step 4: Find critical value or p-value.\n   Step 5: Decision: Reject H₀ if test statistic > critical value OR p-value < α.\n\n2. Type I and Type II Errors:\n   ┌────────────────────┬──────────────────────────┬──────────────────────────┐\n   │                    │ H₀ True                  │ H₀ False                 │\n   ├────────────────────┼──────────────────────────┼──────────────────────────┤\n   │ Reject H₀          │ Type I Error (α)         │ Correct (Power = 1-β)   │\n   │ Fail to Reject H₀  │ Correct                  │ Type II Error (β)        │\n   └────────────────────┴──────────────────────────┴──────────────────────────┘\n   \n   P(Type I Error) = α (significance level)\n   P(Type II Error) = β\n   Power = 1 - β (probability of detecting true effect)\n\n3. One-Sample Z-Test:\n   Use when: population σ known, n large (≥30).\n   Test Statistic: Z = (x̄ - μ₀) / (σ/√n)\n   \n   Example: Claim μ=50, sample n=36, x̄=52, σ=10, α=0.05 (two-tailed).\n   H₀: μ=50, H₁: μ≠50\n   Z = (52-50)/(10/6) = 2/1.667 = 1.2\n   Critical value: ±1.96\n   |Z|=1.2 < 1.96 → Fail to reject H₀\n   p-value = 2×P(Z>1.2) = 2×0.1151 = 0.2302 > 0.05 → Fail to reject\n\n4. One-Sample t-Test:\n   Use when: population σ unknown, n small.\n   Test Statistic: t = (x̄ - μ₀) / (s/√n), df = n-1\n   \n   Example: μ₀=100, sample n=10, x̄=95, s=8, α=0.05.\n   t = (95-100)/(8/√10) = -5/2.53 = -1.977\n   Critical value t(0.025, 9) = ±2.262\n   |t|=1.977 < 2.262 → Fail to reject H₀\n\n5. Chi-Square Test for Independence:\n   H₀: Two variables are independent.\n   χ² = Σ (O - E)² / E, where O=observed, E=expected frequency\n   \n   Example: Test if Gender and Movie preference are independent.\n   Create contingency table → compute E_ij = (Row_i total × Col_j total) / Grand total\n   Compute χ², compare to χ²(α, df) where df = (rows-1)(cols-1).\n\n6. Python Hypothesis Testing:\n   from scipy import stats\n   \n   # One-sample t-test\n   data = [95, 98, 102, 97, 99, 103, 96, 100, 94, 101]\n   t_stat, p_value = stats.ttest_1samp(data, popmean=100)\n   print(f\"t = {t_stat:.4f}, p = {p_value:.4f}\")\n   print(\"Reject H0\" if p_value < 0.05 else \"Fail to Reject H0\")"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Statistics for Engineers and Scientists",
        "author": "Navidi"
      }
    ],
    "practiceLinks": [
      {
        "title": "Hypothesis Testing Khan Academy",
        "url": "https://www.khanacademy.org/math/statistics-probability/significance-tests-one-sample"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What are Type I and Type II errors? Give a medical testing example of each. (2 Marks)",
        "What is a p-value? When do you reject H₀ based on p-value? (2 Marks)",
        "Distinguish one-tailed and two-tailed hypothesis tests. (2 Marks)"
      ],
      "sixMarks": [
        "A manufacturer claims average battery life = 50 hours. Sample of 36 batteries: x̄=48, σ=8. Test at α=0.05. State H₀, H₁, compute Z, p-value, and conclusion. (6 Marks)",
        "Chi-square test of independence: Survey 200 people on OS preference by age group. Construct contingency table, compute expected frequencies, χ² statistic, and test at α=0.05 with df=2. (6 Marks)"
      ],
      "longAnswer": [
        "Complete hypothesis testing framework: 5-step testing procedure, Type I and II error trade-off (power analysis), Z-test (one-sample and two-sample), t-test (one-sample, independent two-sample, paired), ANOVA introduction for multiple groups, Chi-square goodness-of-fit and independence test, F-test for equality of variances, p-value computation and interpretation, Python scipy.stats implementations for all tests, and common mistakes in hypothesis testing. (10 Marks)"
      ]
    }
  },
  {
    "title": "Correlation and Regression Analysis",
    "slug": "prob-stats-correlation-regression",
    "order": 11,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Analyze relationships: Introduction to Correlation (linear relationships between variables), Positive and Negative Correlation, Pearson Correlation Coefficient r (linear), Spearman Rank Correlation (non-parametric), Regression Analysis (predict Y from X), Simple Linear Regression (y = β₀ + β₁x + ε), Least Squares Method (minimize SSE), Multiple Regression (multiple predictors), Coefficient of Determination R², and Residual Analysis.",
    "subTopics": [
      "Introduction to Correlation",
      "Positive and Negative Correlation",
      "Pearson Correlation Coefficient",
      "Spearman Rank Correlation",
      "Regression Analysis",
      "Linear Regression",
      "Multiple Regression",
      "Least Squares Method"
    ],
    "prerequisiteTitles": [
      "Descriptive Statistics",
      "Statistical Estimation"
    ],
    "learningObjectives": [
      "Calculate Pearson r = Σ[(xi-x̄)(yi-ȳ)] / √[Σ(xi-x̄)² · Σ(yi-ȳ)²]. Interpret: -1 ≤ r ≤ 1.",
      "Derive least squares regression line: β̂₁ = Σ[(xi-x̄)(yi-ȳ)] / Σ(xi-x̄)², β̂₀ = ȳ - β̂₁x̄.",
      "Interpret R² as proportion of variance in Y explained by the regression model."
    ],
    "notes": [
      {
        "title": "Correlation Coefficient, Regression Line Derivation, and Python sklearn",
        "content": "CORRELATION AND REGRESSION ANALYSIS\n\n1. Correlation:\n   Pearson Correlation Coefficient:\n   r = Σ[(xi-x̄)(yi-ȳ)] / √[Σ(xi-x̄)² · Σ(yi-ȳ)²]\n   \n   Interpretation:\n   r = +1: Perfect positive linear relationship\n   r = 0: No linear relationship\n   r = -1: Perfect negative linear relationship\n   |r| > 0.8: Strong correlation\n   0.5 < |r| < 0.8: Moderate correlation\n   |r| < 0.5: Weak correlation\n   \n   Important: Correlation ≠ Causation!\n   \"Ice cream sales correlate with drowning deaths → NOT causal\" (both related to summer heat)\n\n2. Simple Linear Regression:\n   Model: Y = β₀ + β₁X + ε\n   β₁ = slope, β₀ = intercept, ε = random error\n   \n   Least Squares Estimates:\n   β̂₁ = [Σxᵢyᵢ - n·x̄·ȳ] / [Σxᵢ² - n·x̄²] = Sxy / Sxx\n   β̂₀ = ȳ - β̂₁·x̄\n   \n   Example:\n   x (study hours): 2, 3, 4, 5, 6\n   y (exam score):  55, 65, 70, 75, 85\n   \n   x̄ = 4, ȳ = 70\n   Σxᵢyᵢ = 2×55 + 3×65 + 4×70 + 5×75 + 6×85 = 1480\n   Σxᵢ² = 4+9+16+25+36 = 90\n   n = 5\n   \n   β̂₁ = (1480 - 5×4×70) / (90 - 5×16) = (1480-1400)/(90-80) = 80/10 = 8\n   β̂₀ = 70 - 8×4 = 70 - 32 = 38\n   \n   Regression line: ŷ = 38 + 8x\n   Prediction: If x=7 hours: ŷ = 38 + 8×7 = 94\n\n3. Coefficient of Determination (R²):\n   R² = 1 - SSE/SST = 1 - Σ(yᵢ-ŷᵢ)² / Σ(yᵢ-ȳ)²\n   \n   Interpretation: R² = 0.75 means \"75% of variation in Y is explained by X\".\n   R² = r² for simple linear regression.\n\n4. Python sklearn Regression:\n   import numpy as np\n   from sklearn.linear_model import LinearRegression\n   from sklearn.metrics import r2_score\n   import matplotlib.pyplot as plt\n   \n   X = np.array([2, 3, 4, 5, 6]).reshape(-1, 1)\n   y = np.array([55, 65, 70, 75, 85])\n   \n   model = LinearRegression()\n   model.fit(X, y)\n   \n   print(f\"Intercept (β₀): {model.intercept_:.2f}\")  # 38.0\n   print(f\"Slope (β₁): {model.coef_[0]:.2f}\")         # 8.0\n   print(f\"R² Score: {model.score(X, y):.4f}\")         # 0.98\n   \n   # Predict\n   y_pred = model.predict(np.array([[7]]))\n   print(f\"Predicted score for 7 hours: {y_pred[0]:.1f}\")  # 94.0\n   \n   # Plot\n   plt.scatter(X, y, color='blue', label='Actual')\n   plt.plot(X, model.predict(X), color='red', label='Regression Line')\n   plt.xlabel('Study Hours'); plt.ylabel('Score')\n   plt.legend(); plt.title('Linear Regression')\n   plt.show()"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Applied Regression Analysis",
        "author": "Draper, Smith"
      }
    ],
    "practiceLinks": [
      {
        "title": "Regression Sklearn Tutorial",
        "url": "https://scikit-learn.org/stable/modules/linear_model.html"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define Pearson Correlation Coefficient. What does r = -0.9 indicate? (2 Marks)",
        "Write the Least Squares formulas for β̂₀ and β̂₁ in simple linear regression. (2 Marks)",
        "What does R² = 0.85 mean in context of a regression model? (2 Marks)"
      ],
      "sixMarks": [
        "Given data: x=[1,2,3,4,5], y=[2,4,5,4,5]. Calculate Pearson r, find regression line y=β₀+β₁x, and R². (6 Marks)",
        "Write Python code to fit linear regression to a dataset, compute R², plot regression line with scatter, and predict for new values. (6 Marks)"
      ],
      "longAnswer": [
        "Complete correlation and regression analysis: Pearson vs Spearman correlation (when to use each), scatter plot interpretation, simple linear regression model (assumptions, derivation, interpretation), least squares calculations, ANOVA table for regression, hypothesis testing for regression coefficients, R² and adjusted R², residual analysis (heteroscedasticity, normality), multiple regression overview, and Python sklearn and statsmodels implementations. (10 Marks)"
      ]
    }
  },
  {
    "title": "Statistical Quality Control",
    "slug": "prob-stats-quality-control",
    "order": 12,
    "estimatedHours": 3,
    "difficulty": "Advanced",
    "description": "Apply statistics to quality: Introduction to Statistical Quality Control (SQC), Control Charts (X̄ chart, R chart, p chart), Process Monitoring (in-control vs out-of-control), Acceptance Sampling, Reliability Analysis (MTTF, MTBF, failure rate), Statistical Process Control (SPC), Process Capability Indices (Cp, Cpk), Six Sigma concepts, and quality improvement methodologies.",
    "subTopics": [
      "Introduction to Quality Control",
      "Control Charts",
      "Process Monitoring",
      "Sampling Inspection",
      "Reliability Analysis",
      "Statistical Process Control"
    ],
    "prerequisiteTitles": [
      "Hypothesis Testing",
      "Descriptive Statistics"
    ],
    "learningObjectives": [
      "Construct X̄ and R control charts: compute UCL and LCL using control chart constants.",
      "Identify process out-of-control signals: points outside control limits, runs, trends.",
      "Calculate MTTF (Mean Time to Failure) for Exponential failure distribution: MTTF = 1/λ."
    ],
    "notes": [
      {
        "title": "Control Charts Construction and Reliability Analysis",
        "content": "STATISTICAL QUALITY CONTROL\n\n1. Statistical Process Control (SPC):\n   Monitor processes to ensure consistent quality. Detect when process shifts from target.\n   \n   Common Causes: Random, inherent variation. Always present. Cannot be eliminated.\n   Special Causes: Assignable variation. Unusual events. Can and should be eliminated.\n\n2. X̄ (X-bar) and R Control Charts:\n   Data: k subgroups each of size n.\n   For each subgroup i: X̄ᵢ = sample mean, Rᵢ = sample range.\n   \n   Overall Mean: X̿ = Σ X̄ᵢ / k\n   Average Range: R̄ = Σ Rᵢ / k\n   \n   X̄ Chart Control Limits:\n   UCL_X̄ = X̿ + A₂ × R̄\n   CL_X̄ = X̿\n   LCL_X̄ = X̿ - A₂ × R̄\n   \n   R Chart Control Limits:\n   UCL_R = D₄ × R̄\n   CL_R = R̄\n   LCL_R = D₃ × R̄\n   \n   Control Chart Constants (A₂, D₃, D₄ depend on n):\n   n=4: A₂=0.729, D₃=0, D₄=2.282\n   n=5: A₂=0.577, D₃=0, D₄=2.115\n   \n   Out-of-Control Signals:\n   - One point beyond 3σ limits\n   - 8 consecutive points on same side of center line (Run)\n   - 6 consecutive points trending in one direction (Trend)\n   - 2 of 3 consecutive points beyond 2σ zone\n\n3. Process Capability:\n   Cp = (USL - LSL) / (6σ)   [Does the process width fit in spec?]\n   Cpk = min[(USL-μ)/(3σ), (μ-LSL)/(3σ)]  [Is process centered within spec?]\n   \n   Cp ≥ 1.33 (Cpk ≥ 1.33): Process capable\n   Six Sigma: Cp ≥ 2 (defect rate < 3.4 per million)\n\n4. Reliability Analysis:\n   For Exponential failure distribution:\n   - Failure rate: λ (constant hazard rate)\n   - MTTF (Mean Time to Failure) = 1/λ\n   - Reliability function: R(t) = P(T > t) = e^(-λt)\n   - MTBF (Mean Time Between Failures) = 1/λ (for repairable systems)\n   \n   Example: Component fails at rate λ=0.001/hour.\n   MTTF = 1/0.001 = 1000 hours\n   P(survives 500 hours) = e^(-0.001×500) = e^(-0.5) = 0.607\n\n5. Acceptance Sampling:\n   Test sample from lot; accept or reject entire lot based on sample quality.\n   Operating Characteristic (OC) curve shows P(accept lot) vs lot defective fraction.\n   Producer's Risk α: P(reject good lot). Consumer's Risk β: P(accept bad lot)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Introduction to Statistical Quality Control",
        "author": "Douglas Montgomery"
      }
    ],
    "practiceLinks": [
      {
        "title": "SPC and Control Charts Overview",
        "url": "https://www.asq.org/quality-resources/control-chart"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What are Common Causes and Special Causes of variation in SPC? (2 Marks)",
        "What is Cp? How does Cpk differ from Cp? (2 Marks)",
        "Define MTTF and MTBF for reliability analysis. (2 Marks)"
      ],
      "sixMarks": [
        "Construct X̄ and R control charts for 5 subgroups of size 4 with given measurements. Compute UCL, CL, LCL. Identify any out-of-control points. (6 Marks)",
        "A component's lifetime follows Exponential distribution with λ=0.002/hour. Compute: MTTF, P(lasts > 200h), P(fails within 100h), reliability at 500h. (6 Marks)"
      ],
      "longAnswer": [
        "Statistical Quality Control comprehensive: SPC concepts (common vs special causes, process stability), control chart types (X̄-R for means and variability, p-chart for proportions, c-chart for counts), control chart interpretation rules (Western Electric rules), process capability indices (Cp, Cpk, Six Sigma benchmark), acceptance sampling plans (single sampling, OC curve, AQL, LTPD), reliability engineering (bathtub curve, failure rate, MTTF, system reliability for series/parallel configurations). (10 Marks)"
      ]
    }
  },
  {
    "title": "Probability and Statistics Using Programming",
    "slug": "prob-stats-programming",
    "order": 13,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Apply statistics computationally: Python for Statistics (libraries overview), NumPy Statistical Functions (mean, std, percentile, histogram), Pandas Data Analysis (describe(), groupby(), pivot), Matplotlib and Seaborn Visualization, SciPy Statistical Tools (distributions, tests, hypothesis testing), R Programming Basics (data frames, built-in statistical functions), and Statistical Simulation (Monte Carlo methods).",
    "subTopics": [
      "Python for Statistics",
      "NumPy Statistical Functions",
      "Pandas Data Analysis",
      "Matplotlib Visualization",
      "SciPy Statistical Tools",
      "R Programming Basics",
      "Statistical Simulation"
    ],
    "prerequisiteTitles": [
      "Descriptive Statistics",
      "Hypothesis Testing"
    ],
    "learningObjectives": [
      "Use NumPy for statistical calculations: np.mean(), np.std(), np.percentile(), np.corrcoef().",
      "Perform complete statistical analysis with pandas: load data, describe(), correlation matrix, groupby analysis.",
      "Implement Monte Carlo simulation to estimate probability empirically."
    ],
    "notes": [
      {
        "title": "Complete Statistical Analysis Pipeline in Python",
        "content": "STATISTICS USING PYTHON\n\n1. NumPy Statistical Functions:\n   import numpy as np\n   \n   data = np.array([23, 45, 12, 67, 34, 89, 56, 23, 45, 78])\n   \n   print(\"Mean:\", np.mean(data))          # Arithmetic mean\n   print(\"Median:\", np.median(data))      # Median\n   print(\"Std Dev:\", np.std(data, ddof=1)) # Sample std dev (ddof=1)\n   print(\"Variance:\", np.var(data, ddof=1))\n   print(\"Min/Max:\", np.min(data), np.max(data))\n   print(\"25th pct:\", np.percentile(data, 25))   # Q1\n   print(\"75th pct:\", np.percentile(data, 75))   # Q3\n   print(\"Correlation:\", np.corrcoef(x, y))       # Correlation matrix\n\n2. Pandas Statistical Analysis:\n   import pandas as pd\n   \n   df = pd.read_csv('student_data.csv')\n   \n   # Summary statistics\n   print(df.describe())  # count, mean, std, min, Q1, Q2, Q3, max\n   \n   # Correlation matrix\n   print(df.corr())\n   \n   # Group statistics\n   print(df.groupby('grade')['score'].agg(['mean', 'std', 'count']))\n   \n   # Frequency table\n   print(pd.crosstab(df['gender'], df['grade']))\n\n3. SciPy Statistical Tests:\n   from scipy import stats\n   \n   # One-sample t-test\n   t, p = stats.ttest_1samp(data, popmean=50)\n   \n   # Two-sample t-test\n   t, p = stats.ttest_ind(group1, group2)\n   \n   # Paired t-test\n   t, p = stats.ttest_rel(before, after)\n   \n   # Chi-square test\n   chi2, p, dof, expected = stats.chi2_contingency(contingency_table)\n   \n   # Correlation test\n   r, p = stats.pearsonr(x, y)\n   rho, p = stats.spearmanr(x, y)\n   \n   # Kolmogorov-Smirnov test (normality)\n   ks, p = stats.kstest(data, 'norm')\n   \n   # Shapiro-Wilk normality test\n   stat, p = stats.shapiro(data)\n\n4. Monte Carlo Simulation:\n   import numpy as np\n   \n   # Estimate π using Monte Carlo\n   n = 1_000_000\n   x = np.random.uniform(-1, 1, n)\n   y = np.random.uniform(-1, 1, n)\n   inside = np.sum(x**2 + y**2 <= 1)\n   pi_estimate = 4 * inside / n\n   print(f\"π ≈ {pi_estimate:.5f}\")  # ≈ 3.14159\n   \n   # Estimate P(at least one 6 in 4 dice rolls)\n   trials = 100000\n   rolls = np.random.randint(1, 7, (trials, 4))\n   success = np.any(rolls == 6, axis=1).sum()\n   print(f\"P(at least one 6) ≈ {success/trials:.4f}\")  # ≈ 0.5177\n   # Theoretical: 1 - (5/6)^4 = 0.5177 ✓\n\n5. Complete EDA Pipeline:\n   import pandas as pd, numpy as np\n   import matplotlib.pyplot as plt, seaborn as sns\n   from scipy import stats\n   \n   df = pd.read_csv('data.csv')\n   # 1. Overview\n   print(df.shape, df.dtypes, df.isnull().sum())\n   # 2. Summary stats\n   print(df.describe())\n   # 3. Distribution plots\n   df.hist(figsize=(12,8)); plt.show()\n   # 4. Correlation heatmap\n   sns.heatmap(df.corr(), annot=True, cmap='coolwarm'); plt.show()\n   # 5. Outlier detection\n   Q1, Q3 = df['value'].quantile([0.25, 0.75])\n   IQR = Q3 - Q1\n   outliers = df[(df['value'] < Q1-1.5*IQR) | (df['value'] > Q3+1.5*IQR)]"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Python for Data Analysis",
        "author": "Wes McKinney"
      },
      {
        "title": "Statistics in Python with SciPy",
        "author": "Online Documentation"
      }
    ],
    "practiceLinks": [
      {
        "title": "SciPy Stats Documentation",
        "url": "https://docs.scipy.org/doc/scipy/reference/stats.html"
      }
    ],
    "questionBank": {
      "conceptual": [
        "List 5 NumPy statistical functions with their purpose. (2 Marks)",
        "What does pandas describe() output show? (2 Marks)",
        "What is Monte Carlo simulation? Give an example. (2 Marks)"
      ],
      "sixMarks": [
        "Write a complete Python script that: loads a CSV dataset, computes descriptive statistics, performs normality test, conducts hypothesis test (H₀: μ=50), and visualizes results. (6 Marks)",
        "Implement Monte Carlo simulation to estimate π. Run with 10000, 100000, and 1000000 samples. Show how accuracy improves with sample size. (6 Marks)"
      ],
      "longAnswer": [
        "Complete statistical computing implementation: Python statistical libraries overview (NumPy, Pandas, SciPy, Statsmodels, Pingouin), full EDA pipeline with pandas (load, inspect, clean, describe, visualize, test), SciPy hypothesis testing (t-tests, chi-square, ANOVA, correlation tests), R programming basics (data frames, t.test(), lm(), plot()), Monte Carlo simulation examples (π estimation, probability estimation, bootstrap sampling), and comparison of Python vs R for statistical computing. (10 Marks)"
      ]
    }
  },
  {
    "title": "Applications in Computer Science and Engineering",
    "slug": "prob-stats-cs-engineering-applications",
    "order": 14,
    "estimatedHours": 3,
    "difficulty": "Advanced",
    "description": "Apply statistics to CS and engineering: Machine Learning Applications (probability theory in Naive Bayes, logistic regression, Bayesian networks), Artificial Intelligence Applications (uncertainty reasoning, Markov models), Data Science Applications (EDA, feature selection, hypothesis testing for A/B tests), Big Data Analytics, Network Analysis (queuing theory, traffic modeling), Reliability Engineering, Performance Analysis, and Cryptography Applications (random number generation).",
    "subTopics": [
      "Machine Learning Applications",
      "Artificial Intelligence Applications",
      "Data Science Applications",
      "Big Data Analytics",
      "Network Analysis",
      "Reliability Engineering",
      "Performance Analysis",
      "Cryptography Applications"
    ],
    "prerequisiteTitles": [
      "Hypothesis Testing",
      "Continuous Probability Distributions"
    ],
    "learningObjectives": [
      "Apply Bayes' Theorem in Naive Bayes classifier for text classification.",
      "Explain A/B testing as hypothesis testing framework for website/product experimentation.",
      "Model network queuing using M/M/1 queue: expected wait time = λ/(μ(μ-λ))."
    ],
    "notes": [
      {
        "title": "Naive Bayes Classifier, A/B Testing, and Queuing Theory",
        "content": "PROBABILITY AND STATISTICS IN CS AND ENGINEERING\n\n1. Naive Bayes Classifier (Machine Learning):\n   Application: Email spam classification, text categorization, medical diagnosis.\n   \n   Model: P(class | features) ∝ P(class) × Π P(featureᵢ | class)\n   \n   Spam Classification:\n   P(spam | \"win\", \"free\") ∝ P(spam) × P(\"win\"|spam) × P(\"free\"|spam)\n   P(ham | \"win\", \"free\") ∝ P(ham) × P(\"win\"|ham) × P(\"free\"|ham)\n   \n   Classify as spam if P(spam|words) > P(ham|words).\n   \n   Python:\n   from sklearn.naive_bayes import MultinomialNB\n   from sklearn.feature_extraction.text import CountVectorizer\n   \n   vectorizer = CountVectorizer()\n   X_train = vectorizer.fit_transform(emails)\n   clf = MultinomialNB()\n   clf.fit(X_train, y_train)\n   predictions = clf.predict(X_test)\n\n2. A/B Testing (Hypothesis Testing for Products):\n   Goal: Determine if new design (B) is better than current (A).\n   \n   Step 1: Define metric (click rate, conversion rate).\n   Step 2: Random split users into A and B groups.\n   Step 3: Collect data for sufficient time (power analysis for sample size).\n   Step 4: Two-proportion Z-test: H₀: p_A = p_B vs H₁: p_A ≠ p_B.\n   Step 5: If p-value < α → statistically significant → deploy B.\n   \n   Statistical considerations:\n   - Multiple testing problem: adjust α for multiple comparisons.\n   - Practical significance vs statistical significance.\n   - Minimum detectable effect size determination.\n\n3. Queuing Theory (Network Analysis):\n   M/M/1 Queue model: Single server, Poisson arrivals, Exponential service.\n   λ = arrival rate, μ = service rate, ρ = λ/μ = utilization (ρ < 1 for stable queue)\n   \n   Performance Metrics:\n   Lq = ρ²/(1-ρ)  [Expected number in queue]\n   Wq = λ/(μ(μ-λ)) = ρ/μ(1-ρ)  [Expected waiting time in queue]\n   W = 1/(μ-λ)  [Expected time in system (including service)]\n   \n   Example: Router with λ=80 packets/sec, μ=100 packets/sec.\n   ρ = 80/100 = 0.8\n   Wq = 0.8/(100×0.2) = 0.04 seconds = 40 ms (average wait)\n\n4. Reliability Engineering:\n   Series system (k components): R_system = R₁ × R₂ × ... × Rₖ\n   Parallel system (k components): R_system = 1 - (1-R₁)(1-R₂)...(1-Rₖ)\n   \n   Example: 3-component series system, each R=0.95.\n   R_system = 0.95³ = 0.857 (85.7% reliability)\n   \n   Adding redundancy (2-component parallel, then series):\n   R_parallel = 1-(1-0.95)² = 0.9975\n   R_system = 0.9975³ = 0.9925 (99.25% ← much better!)\n\n5. Cryptography Applications:\n   - Random Number Generation: Mersenne Twister (MT19937), CSPRNG (Cryptographically Secure).\n   - Statistical tests for randomness: Frequency test, Runs test, NIST test suite.\n   - RSA key generation: Select large prime numbers p, q using probabilistic primality tests.\n   - Hash function collision probability: Birthday paradox. P(collision) ≈ 50% when n ≈ √(2H) trials."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Pattern Recognition and Machine Learning",
        "author": "Christopher Bishop"
      }
    ],
    "practiceLinks": [
      {
        "title": "Statistics in ML Coursera",
        "url": "https://www.coursera.org/learn/machine-learning"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain how Bayes' Theorem is applied in Naive Bayes email classification. (2 Marks)",
        "What is A/B testing? How is it a hypothesis testing problem? (2 Marks)",
        "Describe M/M/1 queuing model. What condition ensures queue stability? (2 Marks)"
      ],
      "sixMarks": [
        "Design an A/B test to evaluate new website checkout button. Define: H₀, H₁, test statistic, sample size, significance level, and decision rule. (6 Marks)",
        "Apply queuing theory to a web server: if arrival rate λ=120 req/sec and service rate μ=150 req/sec, compute utilization, expected queue length, and average waiting time. (6 Marks)"
      ],
      "longAnswer": [
        "Applications of P&S in CS/Engineering: Naive Bayes classifier implementation with worked text classification example, A/B testing framework (power analysis, multiple testing correction, practical vs statistical significance), queuing theory (M/M/1, M/M/c models, Little's Law L=λW), network reliability models (series and parallel systems, fault tolerance), Big Data statistical challenges (sampling, streaming statistics, approximate algorithms), and cryptographic random number generation quality tests. (10 Marks)"
      ]
    }
  },
  {
    "title": "Advanced Statistical Concepts",
    "slug": "prob-stats-advanced-concepts",
    "order": 15,
    "estimatedHours": 4,
    "difficulty": "Advanced",
    "description": "Explore advanced topics: Markov Chains (state transitions, steady-state probabilities), Time Series Analysis (trend, seasonality, ARIMA models), Monte Carlo Simulation (sampling-based probability estimation), Bayesian Statistics (prior, likelihood, posterior, Bayesian updating), Statistical Learning (bias-variance trade-off, cross-validation), Multivariate Statistics (multivariate normal, PCA), and Introduction to Stochastic Processes.",
    "subTopics": [
      "Markov Chains",
      "Time Series Analysis",
      "Monte Carlo Simulation",
      "Bayesian Statistics",
      "Statistical Learning",
      "Multivariate Statistics",
      "Introduction to Stochastic Processes"
    ],
    "prerequisiteTitles": [
      "Hypothesis Testing",
      "Continuous Probability Distributions"
    ],
    "learningObjectives": [
      "Compute steady-state distribution of an ergodic Markov chain by solving πP = π.",
      "Distinguish Frequentist (P(data|H)) and Bayesian (P(H|data)) statistical frameworks.",
      "Explain bias-variance trade-off in machine learning context."
    ],
    "notes": [
      {
        "title": "Markov Chains, Bayesian Statistics, and Bias-Variance Trade-off",
        "content": "ADVANCED STATISTICAL CONCEPTS\n\n1. Markov Chains:\n   A sequence of random variables X₀, X₁, X₂, ... satisfying Markov Property:\n   P(Xₙ₊₁=j | Xₙ=i, Xₙ₋₁, ..., X₀) = P(Xₙ₊₁=j | Xₙ=i) = Pᵢⱼ\n   (Future depends only on present, not past = memoryless)\n   \n   Transition Matrix P: Pᵢⱼ = P(next state = j | current state = i)\n   \n   Example: Weather model (Sunny=S, Rainy=R):\n   P = [[0.7, 0.3],   # From Sunny: 70% stays Sunny, 30% becomes Rainy\n        [0.4, 0.6]]   # From Rainy: 40% becomes Sunny, 60% stays Rainy\n   \n   Steady-State Distribution π:\n   πP = π and Σπᵢ = 1\n   For 2-state: π_S = 0.4/(0.3+0.4) = 4/7 ≈ 0.57\n   Long run: 57% Sunny, 43% Rainy.\n\n2. Bayesian Statistics:\n   Framework: Update belief based on evidence.\n   \n   Bayes' Theorem: P(θ|data) ∝ P(data|θ) × P(θ)\n   Posterior ∝ Likelihood × Prior\n   \n   Frequentist vs Bayesian:\n   Frequentist: P(data|H) - probability of seeing data given hypothesis.\n     - CI: \"95% of such intervals contain true μ\" (awkward interpretation)\n     - H₀ either true or false (no probability for parameter)\n   \n   Bayesian: P(H|data) - probability of hypothesis given data.\n     - Credible Interval: \"There is 95% probability that μ lies in (a,b)\" (natural interpretation)\n     - Parameter θ has a probability distribution.\n   \n   Example - Beta-Binomial model (Coin flip):\n   Prior: θ ~ Beta(α₀, β₀) [belief about P(heads) before flips]\n   Likelihood: k heads in n flips → Binomial(n, θ)\n   Posterior: θ|data ~ Beta(α₀+k, β₀+n-k)\n\n3. Bias-Variance Trade-off (Statistical Learning):\n   For model prediction error: MSE = Bias² + Variance + Irreducible Error\n   \n   Bias: Error from model assumptions. High bias = underfitting.\n     - Simple model (linear for quadratic relationship) → high bias.\n   \n   Variance: Error from sensitivity to training data. High variance = overfitting.\n     - Complex model (high-degree polynomial) → high variance.\n   \n   Trade-off: ↑ model complexity → ↓ bias, ↑ variance.\n   Optimal: Find complexity minimizing total MSE = bias² + variance.\n   \n   Solutions: Regularization (Ridge, Lasso), Cross-validation, Dropout in neural networks.\n\n4. Principal Component Analysis (PCA) - Multivariate:\n   Reduce dimensionality while preserving variance.\n   \n   Steps:\n   1. Standardize data: (x-μ)/σ\n   2. Compute correlation/covariance matrix.\n   3. Find eigenvalues and eigenvectors.\n   4. Sort by eigenvalue (largest first).\n   5. Select top k eigenvectors → principal components.\n   6. Project data: Z = X × W (W = eigenvector matrix)\n   \n   PC1 explains most variance, PC2 second most, etc."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Introduction to Statistical Learning",
        "author": "James, Witten, Hastie, Tibshirani"
      },
      {
        "title": "Bayesian Data Analysis",
        "author": "Gelman, Carlin, Stern"
      }
    ],
    "practiceLinks": [
      {
        "title": "Introduction to Statistical Learning (Free Online)",
        "url": "https://www.statlearning.com/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is the Markov Property? Give an example of a Markov Chain. (2 Marks)",
        "Explain Bayesian updating: Prior + Likelihood → Posterior. (2 Marks)",
        "What is the bias-variance trade-off? How does regularization help? (2 Marks)"
      ],
      "sixMarks": [
        "Given transition matrix for 2-state Markov Chain, find steady-state distribution. Simulate 1000 steps in Python and verify empirical frequencies match analytical steady state. (6 Marks)",
        "Explain PCA steps. Apply PCA to 4-dimensional data (Iris dataset) in Python using sklearn. Show variance explained by each component. (6 Marks)"
      ],
      "longAnswer": [
        "Advanced statistics comprehensive: Markov Chains (transition matrix, n-step transitions, steady-state computation, applications in PageRank), Time Series (stationarity, autocorrelation, ARIMA components AR/I/MA, decomposition), Bayesian Statistics (prior/posterior/likelihood, conjugate priors, MCMC basics), Statistical Learning (bias-variance formulation, regularization methods, cross-validation), PCA derivation and Python implementation, and introduction to Stochastic Processes (Poisson process, Brownian motion). (10 Marks)"
      ]
    }
  },
  {
    "title": "Practical Projects and Case Studies",
    "slug": "prob-stats-practical-projects",
    "order": 16,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Apply statistics in real projects: Student Performance Analysis (descriptive stats, correlation, regression), Sales Data Analysis (trend analysis, hypothesis testing), Weather Data Analysis (distributions, time series), Stock Market Data Analysis (returns, volatility, normality tests), Healthcare Data Analysis (survival analysis, clinical statistics), Machine Learning Dataset Analysis (EDA, feature selection, model evaluation), and Statistical Report Generation.",
    "subTopics": [
      "Student Performance Analysis",
      "Sales Data Analysis",
      "Weather Data Analysis",
      "Stock Market Data Analysis",
      "Healthcare Data Analysis",
      "Machine Learning Dataset Analysis",
      "Statistical Report Generation"
    ],
    "prerequisiteTitles": [
      "Correlation and Regression Analysis",
      "Probability and Statistics Using Programming"
    ],
    "learningObjectives": [
      "Conduct complete statistical analysis of a real dataset: load, clean, describe, visualize, test, and conclude.",
      "Apply appropriate statistical tests based on data type and research question.",
      "Generate professional statistical report with findings, visualizations, and recommendations."
    ],
    "notes": [
      {
        "title": "Complete Statistical Analysis Project - Student Performance Dataset",
        "content": "PRACTICAL STATISTICS PROJECTS\n\n1. Student Performance Analysis Project:\n   Dataset: StudentPerformance.csv (student scores, study time, parent education, etc.)\n   \n   ```python\n   import pandas as pd\n   import numpy as np\n   import matplotlib.pyplot as plt\n   import seaborn as sns\n   from scipy import stats\n   from sklearn.linear_model import LinearRegression\n   \n   # 1. Load and inspect data\n   df = pd.read_csv('StudentPerformance.csv')\n   print(df.shape, df.head(), df.isnull().sum())\n   \n   # 2. Descriptive Statistics\n   print(df.describe())\n   scores = df['math score']\n   print(f\"Mean: {scores.mean():.2f}, Median: {scores.median():.2f}\")\n   print(f\"Std: {scores.std():.2f}, Skewness: {scores.skew():.2f}\")\n   \n   # 3. Distribution Analysis\n   plt.figure(figsize=(12,4))\n   plt.subplot(1,2,1)\n   plt.hist(scores, bins=20, edgecolor='black', color='steelblue')\n   plt.title('Math Score Distribution')\n   \n   plt.subplot(1,2,2)\n   stats.probplot(scores, dist='norm', plot=plt)\n   plt.title('Normal Q-Q Plot')\n   plt.tight_layout(); plt.savefig('distributions.png')\n   \n   # 4. Normality Test\n   stat, p = stats.shapiro(scores[:50])  # Test on subset\n   print(f\"Shapiro-Wilk: stat={stat:.4f}, p={p:.4f}\")\n   print(\"Normal\" if p > 0.05 else \"Not Normal\")\n   \n   # 5. Gender comparison (t-test)\n   male = df[df['gender']=='male']['math score']\n   female = df[df['gender']=='female']['math score']\n   t, p = stats.ttest_ind(male, female)\n   print(f\"Gender t-test: t={t:.4f}, p={p:.4f}\")\n   \n   # 6. Correlation Analysis\n   numeric_df = df.select_dtypes(include=np.number)\n   corr = numeric_df.corr()\n   sns.heatmap(corr, annot=True, cmap='RdYlGn', vmin=-1, vmax=1)\n   plt.title('Correlation Matrix'); plt.tight_layout()\n   plt.savefig('correlation.png')\n   \n   # 7. Linear Regression (reading vs math scores)\n   X = df[['reading score']].values\n   y = df['math score'].values\n   model = LinearRegression().fit(X, y)\n   print(f\"R² = {model.score(X,y):.4f}\")\n   print(f\"Equation: math = {model.coef_[0]:.2f}×reading + {model.intercept_:.2f}\")\n   \n   # 8. Chi-Square test (gender vs pass/fail)\n   df['pass'] = (df['math score'] >= 60).astype(int)\n   ct = pd.crosstab(df['gender'], df['pass'])\n   chi2, p, dof, exp = stats.chi2_contingency(ct)\n   print(f\"Chi-square: χ²={chi2:.4f}, p={p:.4f}\")\n   \n   # Statistical Report Summary\n   print(\"\\n=== STATISTICAL ANALYSIS REPORT ===\")\n   print(f\"Sample Size: {len(df)}\")\n   print(f\"Mean Math Score: {scores.mean():.2f} ± {scores.std():.2f}\")\n   print(f\"Gender Difference: {male.mean():.2f} vs {female.mean():.2f}\")\n   print(f\"Reading-Math Correlation: r={corr.loc['reading score','math score']:.3f}\")\n   print(f\"Regression R²: {model.score(X,y):.3f}\")\n   ```\n\n2. Stock Market Analysis:\n   # Calculate daily returns, test normality, compute Value at Risk (VaR)\n   returns = prices.pct_change().dropna()\n   mu, sigma = returns.mean(), returns.std()\n   VaR_95 = mu - 1.645*sigma  # 95% VaR\n   print(f\"5% VaR: {VaR_95:.4f} ({VaR_95*100:.2f}% loss)\")\n\n3. Report Writing Framework:\n   1. Executive Summary (1 paragraph)\n   2. Data Overview (sample size, variables, data quality)\n   3. Descriptive Statistics Table\n   4. Visualizations (distributions, box plots, scatter plots)\n   5. Statistical Tests (with H₀, H₁, test statistic, p-value, conclusion)\n   6. Regression Analysis (if applicable)\n   7. Conclusions and Recommendations"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Python Data Science Handbook",
        "author": "Jake VanderPlas"
      }
    ],
    "practiceLinks": [
      {
        "title": "Kaggle Datasets for Practice",
        "url": "https://www.kaggle.com/datasets"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What steps comprise a complete statistical data analysis project? (2 Marks)",
        "What is a Q-Q plot? How does it test for normality? (2 Marks)",
        "Define Value at Risk (VaR). How is it computed assuming Normal returns? (2 Marks)"
      ],
      "sixMarks": [
        "Analyze the Iris dataset: compute descriptive stats for each species, test if petal lengths differ significantly between species (ANOVA), and create box plots. Provide Python code and interpret results. (6 Marks)",
        "Write a complete statistical analysis of stock price data: compute returns, test for normality (Shapiro-Wilk), compute 95% VaR, and plot return distribution with fitted Normal curve. (6 Marks)"
      ],
      "longAnswer": [
        "Complete statistical analysis capstone project: Select a real-world dataset (student performance, house prices, or diabetes prediction). Perform: (1) Data loading and quality assessment; (2) Descriptive statistics for all variables; (3) Distribution analysis with normality testing; (4) Correlation analysis with heatmap; (5) Hypothesis testing (t-test, chi-square, ANOVA as appropriate); (6) Linear regression with R² and residual analysis; (7) Conclusion and professional report. Include complete Python code with output. (10 Marks)"
      ]
    }
  }
];
