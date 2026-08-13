module.exports = [
  {
    "title": "Introduction to Exploratory Data Analysis",
    "slug": "exploratory-data-analysis-introduction-to-eda",
    "order": 1,
    "estimatedHours": 3,
    "difficulty": "Beginner",
    "description": "Understand EDA fundamentals: What is Exploratory Data Analysis (John Tukey's philosophy), Importance of EDA, EDA Workflow (Ask, Clean, Explore, Visualize, Model, Communicate), Types of Data (Numerical vs Categorical), Structured vs Unstructured Data, Data Science Lifecycle, and Real-World Applications.",
    "subTopics": [
      "What is Exploratory Data Analysis (EDA)?",
      "Importance of EDA",
      "EDA Workflow",
      "Types of Data",
      "Structured vs Unstructured Data",
      "Data Science Lifecycle",
      "Applications of EDA"
    ],
    "prerequisiteTitles": [],
    "learningObjectives": [
      "Understand the EDA philosophy: Discovering patterns, testing hypotheses, checking assumptions, and spotting anomalies before building predictive models.",
      "Classify Data Types: Quantitative (Discrete vs Continuous) vs Qualitative (Nominal vs Ordinal) vs Unstructured (Text, Images, Audio).",
      "Outline the 6-phase EDA Workflow: Data Ingestion $\to$ Inspection $\to$ Cleaning $\to$ Univariate/Bivariate Analysis $\to$ Feature Engineering $\to$ Insights Reporting."
    ],
    "notes": [
      {
        "title": "EDA Philosophy & Data Type Classification Matrix",
        "content": "INTRODUCTION TO EXPLORATORY DATA ANALYSIS (EDA)\n\n1. John Tukey's Philosophy of EDA:\n   \"Exploratory Data Analysis is an attitude, a flexibility, and a reliance on display: NOT a strict formula!\" EDA is detective work uncovering hidden patterns in data before formal hypothesis testing or machine learning.\n\n2. Data Type Taxonomy Matrix:\n   - Numerical / Quantitative:\n     - Discrete: Integer counts (e.g. Number of cars, Page visits).\n     - Continuous: Real values (e.g. Salary, Temperature, Weight).\n   - Categorical / Qualitative:\n     - Nominal: Unordered categories (e.g. Color, Country, Gender).\n     - Ordinal: Ordered categories (e.g. Education level [BSc, MSc, PhD], Satisfaction rating [Low, Med, High])."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Exploratory Data Analysis",
        "author": "John W. Tukey"
      },
      {
        "title": "Python for Data Analysis",
        "author": "Wes McKinney"
      }
    ],
    "practiceLinks": [
      {
        "title": "Kaggle EDA Guides & Notebooks",
        "url": "https://www.kaggle.com/code?searchQuery=EDA+introduction"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is Exploratory Data Analysis (EDA) and why is it performed before machine learning? (2 Marks)",
        "Distinguish between Nominal and Ordinal categorical data with examples. (2 Marks)",
        "State 6 core steps in the EDA Workflow. (2 Marks)"
      ],
      "sixMarks": [
        "Explain the role of EDA in the complete Data Science Lifecycle from Business Understanding to Model Deployment. (6 Marks)",
        "Compare Structured, Semi-Structured (JSON/XML), and Unstructured Data (Text, Image, Video) on storage, schema, and analysis tools. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Exploratory Data Analysis Strategy. Detail EDA objectives (Data quality audit, Anomaly detection, Feature selection, Hypothesis generation), exploratory vs explanatory data analysis, and industrial applications in e-commerce, healthcare, and finance. (10 Marks)"
      ]
    }
  },
  {
    "title": "Data Collection and Data Sources",
    "slug": "exploratory-data-analysis-data-collection-and-sources",
    "order": 2,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Master data ingestion pipelines: Types of Data Sources, Reading CSV & TSV files, Parsing Excel Worksheets (`.xlsx`), Relational Databases (SQL query import), REST APIs (`requests` & JSON parsing), Web Scraping basics (`BeautifulSoup` & `requests`), Open Data Portals (Kaggle, UCI Machine Learning Repository, Data.gov), and Data Import Techniques.",
    "subTopics": [
      "Types of Data Sources",
      "CSV Files",
      "Excel Files",
      "Databases",
      "APIs",
      "Web Scraping Basics",
      "Open Datasets",
      "Data Import Techniques"
    ],
    "prerequisiteTitles": [
      "Introduction to Exploratory Data Analysis"
    ],
    "learningObjectives": [
      "Import diverse data formats using Pandas: `read_csv()`, `read_excel()`, `read_json()`, `read_sql()`, `read_parquet()`.",
      "Consume REST API JSON endpoints using Python `requests` library.",
      "Scrape HTML tables from web pages using BeautifulSoup and Pandas `read_html()`."
    ],
    "notes": [
      {
        "title": "Pandas Data Ingestion Snippets & API Scraping Code",
        "content": "DATA INGESTION & SOURCES PIPELINE\n\n1. Python Data Import Cheat Sheet:\n```python\nimport pandas as pd\nimport requests\nfrom bs4 import BeautifulSoup\n\n# 1. Load CSV & Excel\ndf_csv = pd.read_csv('data.csv', encoding='utf-8', parse_dates=['date'])\ndf_excel = pd.read_excel('sales.xlsx', sheet_name='2026_Q1')\n\n# 2. Consume REST API Endpoint\nresponse = requests.get('https://api.example.com/data')\ndf_api = pd.DataFrame(response.json()['items'])\n\n# 3. Web Scraping HTML Table\nurl = 'https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(nominal)'\ntables = pd.read_html(url)\ndf_gdp = tables[0]\n```"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Web Scraping with Python",
        "author": "Ryan Mitchell"
      }
    ],
    "practiceLinks": [
      {
        "title": "Kaggle Datasets Hub",
        "url": "https://www.kaggle.com/datasets"
      },
      {
        "title": "UCI Machine Learning Repository",
        "url": "https://archive.ics.uci.edu/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State 4 common file formats used in Data Ingestion and their Pandas read functions. (2 Marks)",
        "What is a REST API and what HTTP status code indicates a successful data fetch ($200\text{ OK}$)? (2 Marks)",
        "State 2 ethical guidelines when performing Web Scraping. (2 Marks)"
      ],
      "sixMarks": [
        "Write Python code using `requests` and `pandas` to fetch JSON data from a public weather API, convert it into a DataFrame, and export it as a compressed Parquet file. (6 Marks)",
        "Explain Web Scraping pipeline using `BeautifulSoup` detailing HTML parsing, tag selection (`find_all`), and extracting table data into Pandas. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Data Source Integration & Pipeline Architecture. Detail Database Connection Pooling (`SQLAlchemy`), Batch vs Real-time Streaming ingestion (`Apache Kafka`), Handling corrupt lines in CSV files, and Open Data governance. (10 Marks)"
      ]
    }
  },
  {
    "title": "Python for Data Analysis",
    "slug": "exploratory-data-analysis-python-for-data-analysis",
    "order": 3,
    "estimatedHours": 5,
    "difficulty": "Beginner",
    "description": "Master Python data structures & core libraries: NumPy array fundamentals (vectorized operations, broadcasting, universal functions `ufuncs`), Pandas DataFrames & Series, Data Inspection methods (`info()`, `describe()`, `head()`, `tail()`, `shape`, `dtypes`), Indexing and Slicing (`loc`, `iloc`), Filtering, and Memory optimization.",
    "subTopics": [
      "Python Basics for EDA",
      "NumPy Fundamentals",
      "Pandas Introduction",
      "DataFrames and Series",
      "Reading and Writing Data",
      "Data Inspection",
      "Data Types",
      "Indexing and Slicing"
    ],
    "prerequisiteTitles": [
      "Introduction to Exploratory Data Analysis"
    ],
    "learningObjectives": [
      "Perform vectorized array operations and Broadcasting in NumPy without explicit Python for-loops.",
      "Inspect DataFrame structure using `df.info()`, `df.describe(include='all')`, `df.value_counts()`, `df.nunique()`.",
      "Filter DataFrames using Boolean indexing and `loc` / `iloc` accessor methods."
    ],
    "notes": [
      {
        "title": "NumPy Vectorization & Pandas loc/iloc Indexing Rules",
        "content": "PYTHON EDA CORE: NUMPY & PANDAS\n\n1. NumPy Vectorization vs Python Loop Speedup:\n```python\nimport numpy as np\nimport pandas as pd\n\n# NumPy Vectorized calculation (100x faster than loops!)\narr = np.array([10, 20, 30, 40])\narr_std = (arr - np.mean(arr)) / np.std(arr)\n\n# Pandas loc vs iloc\n# loc: Label-based indexing (includes stop index)\n# iloc: Integer-position indexing (excludes stop index)\ndf = pd.DataFrame({'Age': [25, 30, 35], 'Salary': [50000, 60000, 75000]}, index=['A', 'B', 'C'])\nsub1 = df.loc['A':'B', ['Age']]   # Label based\nsub2 = df.iloc[0:2, 0:1]         # Integer position based\n```"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Python for Data Analysis",
        "author": "Wes McKinney"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Pandas Tutorial",
        "url": "https://www.geeksforgeeks.org/pandas-tutorial/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between a Pandas Series and a Pandas DataFrame. (2 Marks)",
        "Explain difference between `df.loc[]` and `df.iloc[]`. (2 Marks)",
        "What is NumPy Broadcasting? (2 Marks)"
      ],
      "sixMarks": [
        "Write Python code to load a dataset, inspect its data types using `df.dtypes`, compute Summary Statistics using `df.describe()`, and filter rows where `Age > 30` and `Salary > 50000`. (6 Marks)",
        "Explain NumPy universal functions (`ufuncs`) and array slicing with code examples. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive guide to Pandas Memory Optimization & Efficiency. Detail converting `object` dtypes to `category`, downcasting integer/float dtypes (`int64` to `int8`/`int32`), chunking large CSV files with `chunksize`, and vectorization vs `apply()` vs `itertuples()`. (10 Marks)"
      ]
    }
  },
  {
    "title": "Data Cleaning and Preprocessing",
    "slug": "exploratory-data-analysis-data-cleaning-and-preprocessing",
    "order": 4,
    "estimatedHours": 6,
    "difficulty": "Intermediate",
    "description": "Master data cleaning techniques: Data Quality Audit (completeness, consistency, accuracy), Handling Missing Values (Imputation: Mean, Median, Mode, KNN Imputer, Forward/Backward fill), Duplicate Records removal, Outlier Detection (IQR method $Q_1 - 1.5\text{IQR}$, Z-Score $|Z| > 3$), Handling Outliers (Trimming, Winsorization, Log transformation), Data Type Conversion, Data Transformation, Feature Scaling (Min-Max Normalization, Z-Score Standardization), Data Encoding (Label Encoding, One-Hot Encoding), and Pipeline hygiene.",
    "subTopics": [
      "Data Quality Issues",
      "Missing Values",
      "Duplicate Records",
      "Outlier Detection",
      "Handling Outliers",
      "Data Type Conversion",
      "Data Transformation",
      "Feature Scaling",
      "Data Encoding",
      "Data Standardization"
    ],
    "prerequisiteTitles": [
      "Python for Data Analysis"
    ],
    "learningObjectives": [
      "Identify missing data mechanisms: MCAR (Missing Completely at Random), MAR (Missing at Random), MNAR (Missing Not at Random).",
      "Detect Outliers using IQR method: $\text{Lower Bound} = Q_1 - 1.5 \times \text{IQR}, \text{Upper Bound} = Q_3 + 1.5 \times \text{IQR}$.",
      "Apply Min-Max Scaling ($X_{norm} = \frac{X - X_{min}}{X_{max} - X_{min}}$) and Z-Score Standardization ($Z = \frac{X - mu}{sigma}$)."
    ],
    "notes": [
      {
        "title": "IQR Outlier Detection Code & Imputation Strategies",
        "content": "DATA CLEANING & OUTLIER DETECTION CODE\n\n1. IQR Outlier Detection & Trimming Code:\n```python\nimport pandas as pd\nimport numpy as np\n\n# 1. IQR Calculation\nQ1 = df['income'].quantile(0.25)\nQ3 = df['income'].quantile(0.75)\nIQR = Q3 - Q1\nlower_bound = Q1 - 1.5 * IQR\nupper_bound = Q3 + 1.5 * IQR\n\n# Filter Outliers\noutliers = df[(df['income'] < lower_bound) | (df['income'] > upper_bound)]\n\n# Capping / Winsorization\ndf['income_capped'] = np.where(df['income'] > upper_bound, upper_bound,\n                      np.where(df['income'] < lower_bound, lower_bound, df['income']))\n\n# 2. Missing Value Imputation\ndf['age'].fillna(df['age'].median(), inplace=True)\ndf['category'].fillna(df['category'].mode()[0], inplace=True)\n```"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Data Cleaning",
        "author": "Ihab F. Ilyas, Chu Xu"
      },
      {
        "title": "Feature Engineering for Machine Learning",
        "author": "Alice Zheng, Amanda Casari"
      }
    ],
    "practiceLinks": [
      {
        "title": "Kaggle Data Cleaning Challenge",
        "url": "https://www.kaggle.com/learn/data-cleaning"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain the difference between MCAR, MAR, and MNAR missing data mechanisms. (2 Marks)",
        "Write formula for lower and upper bounds of Outliers using Interquartile Range (IQR). (2 Marks)",
        "Differentiate between Min-Max Normalization and Z-Score Standardization. (2 Marks)"
      ],
      "sixMarks": [
        "Write Python code to audit a dataset for missing values (`isna().sum()`), impute numerical columns with median and categorical columns with mode, and drop duplicate rows (`drop_duplicates()`). (6 Marks)",
        "Explain Z-Score Outlier Detection method ($Z = \frac{x - mu}{sigma}$) and compare Trimming vs Winsorizing vs Log Transformation for handling extreme skewness. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Data Preprocessing Pipelines. Detail Scikit-Learn `SimpleImputer`, `StandardScaler`, `MinMaxScaler`, `OneHotEncoder`, `ColumnTransformer`, and `Pipeline` integration to prevent Data Leakage between train and test sets. (10 Marks)"
      ]
    }
  },
  {
    "title": "Descriptive Statistics",
    "slug": "exploratory-data-analysis-descriptive-statistics",
    "order": 5,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master statistical summary metrics: Measures of Central Tendency (Mean $\bar{x}$, Median, Mode, Trimmed Mean), Measures of Dispersion (Range, Variance $sigma^2 = \frac{sum(x_i - mu)^2}{N}$, Standard Deviation $sigma$, Interquartile Range IQR), Quantiles, Quartiles ($Q_1, Q_2, Q_3$), Percentiles, Measures of Shape (Skewness - Positive/Right vs Negative/Left skewed, Kurtosis - Mesokurtic, Leptokurtic, Platykurtic), and Summary Statistics (`df.describe()`).",
    "subTopics": [
      "Mean",
      "Median",
      "Mode",
      "Range",
      "Variance",
      "Standard Deviation",
      "Quartiles",
      "Percentiles",
      "Skewness",
      "Kurtosis",
      "Summary Statistics"
    ],
    "prerequisiteTitles": [
      "Introduction to Exploratory Data Analysis"
    ],
    "learningObjectives": [
      "Calculate Mean, Median, Mode, Variance, and Standard Deviation for sample and population data.",
      "Interpret Skewness coefficient: Positive Skew ($\text{Mean} > \text{Median} > \text{Mode}$), Negative Skew ($\text{Mean} < \text{Median} < \text{Mode}$).",
      "Understand Kurtosis: Leptokurtic ($\text{Kurtosis} > 3$, heavy tails), Platykurtic ($\text{Kurtosis} < 3$, light tails)."
    ],
    "notes": [
      {
        "title": "Skewness & Kurtosis Formulas and Distribution Relationships",
        "content": "DESCRIPTIVE STATISTICS & SHAPE METRICS\n\n1. Skewness & Central Tendency Relationships:\n   - Symmetric Distribution: $\text{Mean} = \text{Median} = \text{Mode}$ (Skewness $= 0$).\n   - Positively Skewed (Right-tailed): $\text{Mean} > \text{Median} > \text{Mode}$ (Skewness $> 0$, e.g. Income data).\n   - Negatively Skewed (Left-tailed): $\text{Mean} < \text{Median} < \text{Mode}$ (Skewness $< 0$, e.g. Age of death).\n   - Sample Skewness Formula: $S = \frac{\frac{1}{n} sum_{i=1}^n (x_i - \bar{x})^3}{s^3}$\n\n2. Kurtosis (Tail Fatness):\n   - Mesokurtic: Normal Distribution ($\text{Excess Kurtosis} = 0$).\n   - Leptokurtic: Sharp peak, fat heavy tails ($\text{Excess Kurtosis} > 0$, higher risk of outliers!).\n   - Platykurtic: Flat top, thin light tails ($\text{Excess Kurtosis} < 0$)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Practical Statistics for Data Scientists",
        "author": "Peter Bruce, Andrew Bruce"
      },
      {
        "title": "Statistics",
        "author": "Robert S. Witte, John S. Witte"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Descriptive Statistics in Python",
        "url": "https://www.geeksforgeeks.org/python-descriptive-statistics/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State relationship between Mean, Median, and Mode for a Positively Skewed distribution. (2 Marks)",
        "Define Variance ($sigma^2$) and Standard Deviation ($sigma$). (2 Marks)",
        "Differentiate between Leptokurtic and Platykurtic distributions. (2 Marks)"
      ],
      "sixMarks": [
        "Calculate Mean, Median, Mode, Variance, and Standard Deviation for the dataset: $[12, 15, 18, 22, 22, 25, 28, 30, 35, 40]$. (6 Marks)",
        "Explain the Five-Number Summary ($\text{Minimum}, Q_1, \text{Median}, Q_3, \text{Maximum}$) and show how it relates to a Box Plot diagram. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Descriptive Statistical Analysis. Detail Sample vs Population parameters ($\bar{x}, s$ vs $mu, sigma$), Bessel's correction ($N-1$), Pearson's First and Second Coefficients of Skewness, Moments about the mean ($m_1, m_2, m_3, m_4$), and SciPy `scipy.stats` functions. (10 Marks)"
      ]
    }
  },
  {
    "title": "Data Visualization",
    "slug": "exploratory-data-analysis-data-visualization",
    "order": 6,
    "estimatedHours": 6,
    "difficulty": "Intermediate",
    "description": "Master visualization libraries & chart design principles: Importance of Visualization in EDA, Matplotlib architecture (Figure vs Axes), Seaborn statistical charts, Line Charts (Time-series trends), Bar Charts (Count & Group comparison), Pie Charts, Histograms (Density & Binning), Box Plots (Quartiles & Outliers), Scatter Plots (Relationships & Clusters), Heatmaps (Correlation matrices), Pair Plots, Distribution Plots (KDE Kernel Density Estimation), and Interactive Plotly charts.",
    "subTopics": [
      "Importance of Visualization",
      "Matplotlib Basics",
      "Seaborn Basics",
      "Line Charts",
      "Bar Charts",
      "Pie Charts",
      "Histograms",
      "Box Plots",
      "Scatter Plots",
      "Heatmaps",
      "Pair Plots",
      "Distribution Plots"
    ],
    "prerequisiteTitles": [
      "Python for Data Analysis"
    ],
    "learningObjectives": [
      "Create publication-quality visualizations using Matplotlib (`plt.subplots()`) and Seaborn (`sns.set_theme()`).",
      "Construct Correlation Heatmaps using `sns.heatmap(df.corr(), annot=True, cmap='coolwarm')`.",
      "Build interactive 3D & Scatter plots using Plotly Express (`px.scatter()`, `px.box()`)."
    ],
    "notes": [
      {
        "title": "Seaborn Visualization Cheat Sheet & Plotly Code",
        "content": "DATA VISUALIZATION CODE CHEAT SHEET\n\n1. Seaborn Core Plots Code:\n```python\nimport matplotlib.pyplot as plt\nimport seaborn as sns\nimport plotly.express as px\n\n# 1. Distribution Plot with KDE\nsns.histplot(df['age'], kde=True, bins=30, color='skyblue')\nplt.title('Age Distribution')\nplt.show()\n\n# 2. Boxplot for Outliers & Categorical Comparison\nsns.boxplot(x='category', y='sales', data=df, palette='Set2')\nplt.show()\n\n# 3. Correlation Heatmap\nplt.figure(figsize=(10, 8))\nsns.heatmap(df.corr(numeric_only=True), annot=True, fmt='.2f', cmap='vlag')\nplt.title('Correlation Matrix')\nplt.show()\n\n# 4. Interactive Plotly Scatter Plot\nfig = px.scatter(df, x='GDP', y='LifeExpectancy', color='Continent', size='Population', hover_name='Country')\nfig.show()\n```"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Storytelling with Data",
        "author": "Cole Nussbaumer Knaflic"
      },
      {
        "title": "Fundamentals of Data Visualization",
        "author": "Claus O. Wilke"
      }
    ],
    "practiceLinks": [
      {
        "title": "Seaborn Official Gallery",
        "url": "https://seaborn.pydata.org/examples/index.html"
      },
      {
        "title": "Plotly Express Python Gallery",
        "url": "https://plotly.com/python/plotly-express/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State 4 advantages of Seaborn over raw Matplotlib. (2 Marks)",
        "When should a Box Plot be used instead of a Histogram? (2 Marks)",
        "Explain the purpose of a Pair Plot (`sns.pairplot()`). (2 Marks)"
      ],
      "sixMarks": [
        "Write Python code using Seaborn to generate a $2 \times 2$ grid of subplots showing a Histogram, Box Plot, Scatter Plot, and Bar Chart for a housing dataset. (6 Marks)",
        "Explain principles of Effective Data Visualization (Color choice, Data-to-Ink ratio, Chart junk elimination, Avoiding misleading 3D pie charts). (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Interactive Data Visualization & Dashboarding. Detail Plotly Express vs Graph Objects, Streamlit / Dash web application frameworks, Customizing Matplotlib Axes/Ticks/Labels, and accessible color-blind friendly palettes (`viridis`, `plasma`). (10 Marks)"
      ]
    }
  },
  {
    "title": "Univariate Data Analysis",
    "slug": "exploratory-data-analysis-univariate-data-analysis",
    "order": 7,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Master single-variable exploration: Numerical Variable Analysis (Mean, Median, Std, Skewness, Kurtosis), Categorical Variable Analysis (Frequency counts, Relative frequencies, Bar charts, Pareto charts), Frequency Distribution Tables, Distribution Analysis (Normal, Log-normal, Uniform, Exponential distributions), Central Tendency, and Dispersion Analysis.",
    "subTopics": [
      "Numerical Variables",
      "Categorical Variables",
      "Frequency Distribution",
      "Distribution Analysis",
      "Central Tendency",
      "Dispersion Analysis"
    ],
    "prerequisiteTitles": [
      "Descriptive Statistics",
      "Data Visualization"
    ],
    "learningObjectives": [
      "Analyze Numerical Variables using Histograms, Box Plots, and Kernel Density Estimators (KDE).",
      "Analyze Categorical Variables using Frequency Distribution tables, Relative Frequencies ($% = \frac{\text{Count}}{N} \times 100$), and Bar Charts.",
      "Detect non-normality and apply logarithmic transformation ($ln(x)$) to normalize right-skewed distributions."
    ],
    "notes": [
      {
        "title": "Univariate Analysis Workflow Code & Frequency Table Generation",
        "content": "UNIVARIATE DATA ANALYSIS WORKFLOW\n\n1. Univariate Numerical & Categorical Analysis Code:\n```python\nimport pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\n\n# 1. Categorical Variable Frequency & Relative Frequency\nfreq_table = df['city'].value_counts()\nrel_freq = df['city'].value_counts(normalize=True) * 100\ncat_df = pd.DataFrame({'Count': freq_table, 'Percentage (%)': rel_freq})\n\n# 2. Numerical Variable Normality Check & Skewness\nskew_val = df['salary'].skew()\nkurt_val = df['salary'].kurt()\nprint(f\"Skewness: {skew_val:.2f}, Kurtosis: {kurt_val:.2f}\")\n\n# Log Transformation if highly right-skewed (Skewness > 1)\nif skew_val > 1:\n    df['salary_log'] = np.log1p(df['salary'])\n```"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Practical Statistics for Data Scientists",
        "author": "Peter Bruce"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Univariate Analysis",
        "url": "https://www.geeksforgeeks.org/univariate-analysis-in-python/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is Univariate Data Analysis? (2 Marks)",
        "State 2 visualization techniques for Univariate Numerical data and 2 for Univariate Categorical data. (2 Marks)",
        "Why is Log Transformation applied to highly right-skewed numerical variables? (2 Marks)"
      ],
      "sixMarks": [
        "Write Python code to perform complete Univariate Analysis on a dataset: Calculate Mean/Median/Std/Skewness for numerical features and plot a Frequency Bar Chart for categorical features. (6 Marks)",
        "Explain Pareto Chart Analysis ($80/20$ rule) and show how combining a Bar Chart of frequency with a Cumulative Percentage Line Chart identifies vital categories. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Normality Testing & Distribution Fitting. Detail Shapiro-Wilk test, Kolmogorov-Smirnov (K-S) test, Q-Q (Quantile-Quantile) Plot interpretation, Box-Cox and Yeo-Johnson power transformations, and modal analysis (Unimodal vs Bimodal vs Multimodal distributions). (10 Marks)"
      ]
    }
  },
  {
    "title": "Bivariate Data Analysis",
    "slug": "exploratory-data-analysis-bivariate-data-analysis",
    "order": 8,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master two-variable relationship exploration: Numerical-Numerical Relationships (Pearson Correlation $r$, Spearman Rank Correlation $\rho$, Covariance $\text{Cov}(X,Y)$), Scatter Plot Analysis, Categorical-Categorical Relationships (Cross Tabulation / Contingency Tables, Chi-Square Test $chi^2$, Cramér's V), Numerical-Categorical Relationships (Group Comparisons, Groupby aggregations, Side-by-side Box plots, ANOVA $F$-test), and Relationship interpretation.",
    "subTopics": [
      "Correlation",
      "Covariance",
      "Scatter Plot Analysis",
      "Group Comparisons",
      "Cross Tabulation",
      "Relationship Between Variables"
    ],
    "prerequisiteTitles": [
      "Univariate Data Analysis"
    ],
    "learningObjectives": [
      "Calculate and interpret Pearson Correlation Coefficient $r in [-1, +1]$ vs Spearman Rank Correlation $\rho$.",
      "Perform Group Comparisons using Pandas `groupby()` and Seaborn `catplot()` / `boxplot()`.",
      "Construct Contingency Tables using `pd.crosstab()` and test association using Chi-Square Test (`scipy.stats.chi2_contingency`)."
    ],
    "notes": [
      {
        "title": "Pearson vs Spearman Correlation & Chi-Square Contingency Code",
        "content": "BIVARIATE DATA ANALYSIS CODE & METRICS\n\n1. Pearson $r$ vs Spearman $\rho$ Correlation:\n   - Pearson $r$: Measures LINEAR relationship between continuous variables ($r = \frac{sum (x - \bar{x})(y - \bar{y})}{sqrt{sum(x-\bar{x})^2 sum(y-\bar{y})^2}}$). Sensitive to outliers!\n   - Spearman $\rho$: Measures MONOTONIC relationship between ranked/ordinal variables. Robust to outliers!\n\n2. Bivariate Python Snippets:\n```python\nimport pandas as pd\nfrom scipy import stats\n\n# 1. Numerical-Numerical: Pearson & Spearman\npearson_r, _ = stats.pearsonr(df['age'], df['income'])\nspearman_rho, _ = stats.spearmanr(df['age'], df['income'])\n\n# 2. Categorical-Categorical: Cross Tabulation & Chi-Square\nct = pd.crosstab(df['gender'], df['churn'])\nchi2, p_val, dof, ex = stats.chi2_contingency(ct)\n\n# 3. Numerical-Categorical: Group Means & ANOVA\ngroup_means = df.groupby('department')['salary'].mean()\nf_stat, p_val_anova = stats.f_oneway(*[group['salary'].values for name, group in df.groupby('department')])\n```"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Practical Statistics for Data Scientists",
        "author": "Peter Bruce"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Bivariate Analysis in Python",
        "url": "https://www.geeksforgeeks.org/bivariate-analysis-in-python/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between Pearson Correlation $r$ and Spearman Rank Correlation $\rho$. (2 Marks)",
        "What is a Contingency Table (Cross Tabulation) and what statistical test is used on it? (2 Marks)",
        "Explain 'Correlation does NOT imply Causation' with a classic example. (2 Marks)"
      ],
      "sixMarks": [
        "Write Python code to compute Pearson Correlation Matrix for numerical features, plot a Scatter Plot with regression trendline (`sns.regplot`), and conduct Chi-Square test of independence on two categorical variables. (6 Marks)",
        "Explain how One-Way ANOVA ($F$-test) is used in Bivariate EDA to test whether mean numerical target values differ significantly across 3+ categorical groups. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Bivariate Relationship Mining. Detail Covariance matrix vs Correlation matrix, Simpson's Paradox (how aggregate trend reverses when disaggregated into sub-groups), Anscombe's Quartet (why visualization is vital alongside summary statistics), and Point-Biserial correlation. (10 Marks)"
      ]
    }
  },
  {
    "title": "Multivariate Data Analysis",
    "slug": "exploratory-data-analysis-multivariate-data-analysis",
    "order": 9,
    "estimatedHours": 6,
    "difficulty": "Advanced",
    "description": "Master multi-variable analysis: Multiple Variable Analysis, Correlation Matrix Heatmaps, Pairwise Relationships (`sns.pairplot()`), Feature Interaction effects, Multi-factor ANOVA, Dimensionality Reduction basics, and Principal Component Analysis (PCA) introduction (Eigenvalues, Eigenvectors, Variance Explained ratio, Scree Plot).",
    "subTopics": [
      "Multiple Variable Analysis",
      "Correlation Matrix",
      "Pairwise Relationships",
      "Feature Interaction",
      "Dimensionality Reduction Basics",
      "Principal Component Analysis (PCA) Introduction"
    ],
    "prerequisiteTitles": [
      "Bivariate Data Analysis"
    ],
    "learningObjectives": [
      "Analyze Multicollinearity using Variance Inflation Factor (VIF $> 10$ indicates high multicollinearity).",
      "Perform Principal Component Analysis (PCA) using `sklearn.decomposition.PCA` to reduce high-dimensional data while preserving variance.",
      "Interpret Scree Plots and Cumulative Explained Variance ratio plots."
    ],
    "notes": [
      {
        "title": "Multicollinearity VIF Math & Scikit-Learn PCA Code",
        "content": "MULTIVARIATE ANALYSIS & PCA CODE\n\n1. Variance Inflation Factor (VIF) Formula:\n   $\text{VIF}_i = \frac{1}{1 - R_i^2}$ (where $R_i^2$ is coefficient of determination from regressing feature $X_i$ on all other features).\n   - $\text{VIF} = 1$: No correlation.\n   - $\text{VIF} > 5$ or $10$: Severe Multicollinearity requiring feature dropping or PCA!\n\n2. PCA Python Implementation Code:\n```python\nimport pandas as pd\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.decomposition import PCA\nimport matplotlib.pyplot as plt\n\n# 1. Scale Features\nscaler = StandardScaler()\nX_scaled = scaler.fit_transform(df_numeric)\n\n# 2. Fit PCA (Reduce to 2 Principal Components)\npca = PCA(n_components=2)\nX_pca = pca.fit_transform(X_scaled)\nprint(\"Explained Variance Ratio:\", pca.explained_variance_ratio_)\n\n# 3. Create PCA DataFrame\ndf_pca = pd.DataFrame(X_pca, columns=['PC1', 'PC2'])\n```"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Applied Multivariate Statistical Analysis",
        "author": "Richard A. Johnson, Dean W. Wichern"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Principal Component Analysis PCA",
        "url": "https://www.geeksforgeeks.org/principal-component-analysis-pca/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is Multicollinearity and how does Variance Inflation Factor (VIF) detect it? (2 Marks)",
        "What is the main goal of Principal Component Analysis (PCA)? (2 Marks)",
        "What does a Scree Plot display in PCA analysis? (2 Marks)"
      ],
      "sixMarks": [
        "Write Python code using `statsmodels` to calculate VIF for all numerical features in a DataFrame and drop features with $\text{VIF} > 10$. (6 Marks)",
        "Explain step-by-step mathematical procedure of PCA (Standardization $\to$ Covariance Matrix $\to$ Eigenvalues/Eigenvectors $\to$ Projection). (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on High-Dimensional Data Exploration. Detail t-SNE (t-Distributed Stochastic Neighbor Embedding) vs UMAP vs PCA for 2D/3D visualization of complex datasets, feature interaction terms ($X_1 cdot X_2$), Parallel Coordinates plots, and RadViz plots. (10 Marks)"
      ]
    }
  },
  {
    "title": "Feature Engineering",
    "slug": "exploratory-data-analysis-feature-engineering",
    "order": 10,
    "estimatedHours": 6,
    "difficulty": "Advanced",
    "description": "Master feature transformation pipelines: Feature Selection (Filter methods: Correlation, Mutual Information, Chi-Square; Wrapper methods: RFE; Embedded methods: Lasso), Feature Extraction, Feature Creation (Domain-specific features, Interaction terms, Binning/Discretization), Handling Categorical Variables, Encoding Techniques (Label Encoding, One-Hot Encoding, Target/Mean Encoding, Ordinal Encoding, Frequency Encoding), Scaling Techniques (Min-Max Normalization, Z-Score Standardization, RobustScaler using median/IQR).",
    "subTopics": [
      "Feature Selection",
      "Feature Extraction",
      "Feature Creation",
      "Handling Categorical Variables",
      "Encoding Techniques (Label Encoding, One-Hot Encoding)",
      "Scaling Techniques (Normalization, Standardization)"
    ],
    "prerequisiteTitles": [
      "Data Cleaning and Preprocessing",
      "Multivariate Data Analysis"
    ],
    "learningObjectives": [
      "Apply Encoding Techniques: One-Hot Encoding for Nominal categories (avoiding dummy variable trap $K-1$), Ordinal Encoding for ranked categories, Target Encoding for high-cardinality categories.",
      "Apply Feature Selection methods: SelectKBest, Mutual Information Classifier, Recursive Feature Elimination (RFE).",
      "Apply RobustScaler when datasets contain severe un-trimmed outliers ($X_{robust} = \frac{X - Q_2}{\text{IQR}}$)."
    ],
    "notes": [
      {
        "title": "Categorical Encoding Strategies & Feature Selection Code",
        "content": "FEATURE ENGINEERING & ENCODING CHEAT SHEET\n\n1. Categorical Encoding Selection Guide:\n   - Binary Category (Yes/No): Map to 0/1.\n   - Nominal (Low Cardinality <= 5): One-Hot Encoding ('pd.get_dummies(drop_first=True)').\n   - Ordinal (Low/Med/High): Ordinal Encoding ('mapping = {\"Low\":1, \"Med\":2, \"High\":3}').\n   - High-Cardinality (Zip codes, Cities): Target Encoding or Frequency Encoding.\n\n2. Scikit-Learn Feature Engineering Code:\n```python\nfrom sklearn.preprocessing import OneHotEncoder, StandardScaler, RobustScaler\nfrom sklearn.feature_selection import SelectKBest, mutual_info_classif\n\n# 1. Robust Scaling (Insensitive to outliers)\nscaler = RobustScaler()\nX_scaled = scaler.fit_transform(df[['income', 'age']])\n\n# 2. Select Top K Features by Mutual Information\nselector = SelectKBest(score_func=mutual_info_classif, k=5)\nX_new = selector.fit_transform(X, y)\n```"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Feature Engineering for Machine Learning",
        "author": "Alice Zheng, Amanda Casari"
      },
      {
        "title": "Feature Engineering and Selection",
        "author": "Max Kuhn, Kjell Johnson"
      }
    ],
    "practiceLinks": [
      {
        "title": "Kaggle Feature Engineering Course",
        "url": "https://www.kaggle.com/learn/feature-engineering"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain the Dummy Variable Trap in One-Hot Encoding and how to avoid it (`drop_first=True`). (2 Marks)",
        "Differentiate between Label Encoding, One-Hot Encoding, and Target Encoding. (2 Marks)",
        "Why is `RobustScaler` preferred over `StandardScaler` when data contains severe outliers? (2 Marks)"
      ],
      "sixMarks": [
        "Write Python code using Scikit-Learn `ColumnTransformer` to apply `StandardScaler` to numerical features and `OneHotEncoder` to categorical features. (6 Marks)",
        "Explain Filter vs Wrapper (RFE) vs Embedded (Lasso L1 regularization) Feature Selection methods with examples. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Advanced Feature Creation Techniques. Detail Datetime feature extraction (Hour, Day, Month, Is_Weekend, Cyclical encoding using $sin/cos$ transformations), Text TF-IDF features, Domain-ratio features (e.g. Debt-to-Income ratio), and Polynomial Feature expansion. (10 Marks)"
      ]
    }
  },
  {
    "title": "Data Analysis with SQL",
    "slug": "exploratory-data-analysis-data-analysis-with-sql",
    "order": 11,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master SQL for analytical query processing: SQL for Data Analysis, Aggregate Functions (`SUM`, `AVG`, `COUNT`, `MIN`, `MAX`), Grouping (`GROUP BY`), Filtering aggregates (`HAVING`), Relational Joins (`INNER`, `LEFT`, `RIGHT`, `FULL OUTER`), Subqueries & CTEs (`WITH` clauses), Window Functions (`ROW_NUMBER()`, `RANK()`, `DENSE_RANK()`, `LAG()`, `LEAD()`, `NTILE()`), and Analytical SQL queries for EDA.",
    "subTopics": [
      "SQL for Data Analysis",
      "Aggregate Functions",
      "GROUP BY",
      "HAVING",
      "Joins for Analysis",
      "Window Functions",
      "Analytical Queries"
    ],
    "prerequisiteTitles": [
      "Introduction to Exploratory Data Analysis"
    ],
    "learningObjectives": [
      "Write SQL Queries using `GROUP BY` and `HAVING` to compute group summary metrics.",
      "Utilize SQL Window Functions (`ROW_NUMBER()`, `RANK()`, `LAG()`, `LEAD()`, `OVER (PARTITION BY ... ORDER BY ...)`) for cohort analysis and running totals.",
      "Execute SQL queries directly inside Pandas using `pd.read_sql_query()` and `sqlite3` / `SQLAlchemy`."
    ],
    "notes": [
      {
        "title": "SQL Window Functions & Analytical Query Cheat Sheet",
        "content": "ANALYTICAL SQL FOR DATA EXPLORATION\n\n1. SQL Window Functions Query Template:\n```sql\n-- Calculate Running Total Sales and Customer Rank per Region\nSELECT \n    region,\n    customer_id,\n    order_date,\n    sales_amount,\n    SUM(sales_amount) OVER(PARTITION BY region ORDER BY order_date) AS running_total_sales,\n    RANK() OVER(PARTITION BY region ORDER BY sales_amount DESC) AS customer_rank_in_region,\n    LAG(sales_amount, 1) OVER(PARTITION BY customer_id ORDER BY order_date) AS prev_order_amount\nFROM sales_orders\nWHERE order_date >= '2026-01-01';\n```\n\n2. Difference Between WHERE and HAVING Clauses:\n   - WHERE: Filters individual rows BEFORE grouping (GROUP BY).\n   - HAVING: Filters aggregated group summaries AFTER grouping (GROUP BY)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "SQL for Data Analysis",
        "author": "Cathy Tanimura"
      }
    ],
    "practiceLinks": [
      {
        "title": "LeetCode SQL Practice Problems",
        "url": "https://leetcode.com/problemset/database/"
      },
      {
        "title": "HackerRank SQL Domain",
        "url": "https://www.hackerrank.com/domains/sql"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between `WHERE` and `HAVING` clauses in SQL. (2 Marks)",
        "Explain the difference between `RANK()`, `DENSE_RANK()`, and `ROW_NUMBER()`. (2 Marks)",
        "What is a Common Table Expression (CTE) using `WITH` clause? (2 Marks)"
      ],
      "sixMarks": [
        "Write SQL Query using Window Functions `LAG()` to calculate month-over-month percentage sales growth for each product category. (6 Marks)",
        "Explain SQL Join types (`INNER`, `LEFT`, `RIGHT`, `FULL OUTER`) with Venn diagrams and write a query joining `customers` and `orders` tables. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on SQL Exploratory Data Analysis. Detail Customer Cohort Analysis in SQL (User retention rate calculation using self-joins & window functions), RFM (Recency, Frequency, Monetary) segmentation using `NTILE(4)`, and executing SQL queries in Python Pandas via `sqlite3`. (10 Marks)"
      ]
    }
  },
  {
    "title": "Exploratory Data Analysis Using Libraries",
    "slug": "exploratory-data-analysis-using-libraries",
    "order": 12,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master automated EDA tools & Python library ecosystem: NumPy, Pandas, Matplotlib, Seaborn, Plotly, Scikit-Learn utilities, and Automated EDA Libraries (ydata-profiling / pandas-profiling, Sweetviz, D-Tale, Autoviz).",
    "subTopics": [
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Plotly",
      "Scikit-learn Utilities"
    ],
    "prerequisiteTitles": [
      "Python for Data Analysis",
      "Data Visualization",
      "Feature Engineering"
    ],
    "learningObjectives": [
      "Generate automated interactive HTML EDA reports using `ydata-profiling` (`ProfileReport`).",
      "Compare target distributions and dataset splits using `Sweetviz` (`sv.compare()`).",
      "Launch interactive Web-based EDA dashboards inside Jupyter Notebooks using `D-Tale`."
    ],
    "notes": [
      {
        "title": "Automated EDA Libraries Code (ydata-profiling, Sweetviz, D-Tale)",
        "content": "AUTOMATED EDA LIBRARIES CODE\n\n1. Automated EDA Tools Code Snippets:\n```python\nimport pandas as pd\nfrom ydata_profiling import ProfileReport\nimport sweetviz as sv\nimport dtale\n\ndf = pd.read_csv('dataset.csv')\n\n# 1. YData Profiling (Pandas Profiling) - Generates complete HTML Audit\nprofile = ProfileReport(df, title=\"Dataset Audit Report\", explorative=True)\nprofile.to_file(\"eda_report.html\")\n\n# 2. Sweetviz - Compare Train vs Test Distributions\nreport = sv.compare([df_train, \"Train\"], [df_test, \"Test\"], target_feat='Churn')\nreport.show_html(\"sweetviz_report.html\")\n\n# 3. D-Tale - Interactive Web GUI Data Explorer inside Notebook\nd = dtale.show(df)\nd.open_browser()\n```"
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
        "title": "YData Profiling Documentation",
        "url": "https://docs.profiling.ydata.ai/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is Automated EDA and state 3 Python libraries used for it. (2 Marks)",
        "What key data quality insights does `ydata-profiling` generate automatically? (2 Marks)",
        "Why is Sweetviz useful when comparing Train and Test dataset distributions? (2 Marks)"
      ],
      "sixMarks": [
        "Compare Manual EDA using Pandas/Seaborn vs Automated EDA using `ydata-profiling` on speed, customization, and memory overhead. (6 Marks)",
        "Write Python code using Scikit-Learn `ColumnTransformer`, `StandardScaler`, and `PCA` to build an automated exploratory preprocessing pipeline. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on the Modern Python Data Science Ecosystem. Detail integration between Pandas, NumPy, SciPy, Matplotlib, Seaborn, Plotly, Scikit-Learn, Statsmodels, PyArrow Parquet engine, and Jupyter Notebook extension workflows. (10 Marks)"
      ]
    }
  },
  {
    "title": "Real-World Case Studies",
    "slug": "exploratory-data-analysis-real-world-case-studies",
    "order": 13,
    "estimatedHours": 6,
    "difficulty": "Advanced",
    "description": "Analyze end-to-end industrial EDA case studies: Sales & E-Commerce Data Analysis (Customer Churn, AOV, RFM segmentation), Student Academic Performance Analysis, Healthcare Data Analysis (Patient readmission rates, Heart disease metrics), Financial Data Analysis (Credit card fraud detection, Stock market volatility), Customer Behavior Analysis (Cohort retention), and Social Media Sentiment Analysis.",
    "subTopics": [
      "Sales Data Analysis",
      "Student Performance Analysis",
      "Healthcare Data Analysis",
      "Financial Data Analysis",
      "Customer Behavior Analysis",
      "Social Media Data Analysis"
    ],
    "prerequisiteTitles": [
      "Univariate Data Analysis",
      "Bivariate Data Analysis",
      "Feature Engineering"
    ],
    "learningObjectives": [
      "Execute complete EDA on E-Commerce Sales data: RFM (Recency, Frequency, Monetary) customer segmentation.",
      "Execute Healthcare EDA: Detecting key predictors of Heart Disease using Chi-Square and Correlation matrices.",
      "Execute Financial Fraud EDA: Handling extreme class imbalance ($99.8%$ legitimate vs $0.2%$ fraud) using Precision-Recall curves."
    ],
    "notes": [
      {
        "title": "RFM E-Commerce Segmentation Math & Credit Card Fraud Class Imbalance",
        "content": "INDUSTRIAL EDA CASE STUDIES\n\n1. E-Commerce RFM Customer Segmentation:\n   - Recency ($R$): Days since last purchase date ($R = \text{Current Date} - \text{Last Purchase Date}$).\n   - Frequency ($F$): Total number of completed orders.\n   - Monetary ($M$): Total dollar amount spent.\n   - Scoring: Bin $R, F, M$ into quartiles 1-4 using pd.qcut(). Combine into RFM Score (e.g. '444' = Top Loyal VIP Customers!).\n\n2. Financial Fraud Imbalanced EDA:\n   - Class Imbalance Ratio: $99.8%$ Non-Fraud vs $0.2%$ Fraud.\n   - Standard Accuracy is misleading ($99.8%$ accuracy by guessing all non-fraud!).\n   - EDA Metrics: Use Precision-Recall AUC curves, PR-AUC, Confusion Matrix, and Stratified K-Fold splits."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Data Science for Business",
        "author": "Foster Provost, Tom Fawcett"
      }
    ],
    "practiceLinks": [
      {
        "title": "Kaggle E-Commerce Sales Dataset",
        "url": "https://www.kaggle.com/datasets/carrie1/ecommerce-data"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain RFM (Recency, Frequency, Monetary) Customer Segmentation methodology. (2 Marks)",
        "Why is standard Accuracy metric misleading in imbalanced Credit Card Fraud EDA? (2 Marks)",
        "What is Cohort Retention Analysis in customer behavior EDA? (2 Marks)"
      ],
      "sixMarks": [
        "Describe complete EDA pipeline for an E-Commerce Sales dataset: Data cleaning, computing RFM scores using Pandas, and visualizing customer segments. (6 Marks)",
        "Explain Healthcare EDA case study for predicting Diabetes: Handling missing glucose/BMI zero values, correlation heatmap, and boxplots by outcome class. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Industrial Data Analytics Case Studies. Detail Financial Credit Risk Analysis (WOE Weight of Evidence & IV Information Value for feature selection), Telecom Churn Analysis (Survival Analysis Kaplan-Meier curves), and Social Media Sentiment EDA (VADER sentiment polarity distribution vs engagement metrics). (10 Marks)"
      ]
    }
  },
  {
    "title": "EDA in Machine Learning",
    "slug": "exploratory-data-analysis-eda-in-machine-learning",
    "order": 14,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Connect EDA to predictive modeling: Importance of EDA before ML, Identifying Data Quality issues affecting ML models, Feature Importance analysis (Tree-based Gini importance, Permutation Importance, SHAP values), Data Splitting (Train/Validation/Test, Stratified Splitting for classification), Preparing Data for Machine Learning (Pipeline setup), and Avoiding Data Leakage.",
    "subTopics": [
      "Importance of EDA Before ML",
      "Identifying Data Issues",
      "Feature Importance",
      "Data Splitting",
      "Preparing Data for Machine Learning",
      "Avoiding Data Leakage"
    ],
    "prerequisiteTitles": [
      "Feature Engineering"
    ],
    "learningObjectives": [
      "Identify and prevent Data Leakage (fitting scalers/imputers on the ENTIRE dataset before train/test split).",
      "Perform Stratified K-Fold Data Splitting using Scikit-Learn `StratifiedKFold` for imbalanced target classes.",
      "Calculate Permutation Feature Importance and SHAP (SHapley Additive exPlanations) values."
    ],
    "notes": [
      {
        "title": "Data Leakage Prevention Rules & Scikit-Learn Pipeline Setup",
        "content": "PRE-ML EDA & DATA LEAKAGE PREVENTION\n\n1. Golden Rule of Data Leakage Prevention:\n   NEVER fit any preprocessing transformer (Scaler, Imputer, Encoder, PCA) on the combined dataset or test set! Transformers MUST be fit ONLY on the Training set (X_train), then applied via transform() to Validation and Test sets (X_test).\n\n2. Scikit-Learn Leakage-Free Pipeline Code:\n```python\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.pipeline import Pipeline\n\n# 1. Train / Test Split FIRST\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)\n\n# 2. Build Pipeline (Fit ONLY on Train!)\npipeline = Pipeline([\n    ('scaler', StandardScaler()),\n    ('classifier', RandomForestClassifier(random_state=42))\n])\n\npipeline.fit(X_train, y_train)\ntest_accuracy = pipeline.score(X_test, y_test)\n```"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Interpretable Machine Learning",
        "author": "Christoph Molnar"
      }
    ],
    "practiceLinks": [
      {
        "title": "Scikit-Learn Machine Learning Pipelines",
        "url": "https://scikit-learn.org/stable/modules/generated/sklearn.pipeline.Pipeline.html"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is Data Leakage in Machine Learning and how does EDA detect it? (2 Marks)",
        "Why should Stratified Train-Test Splitting be used for imbalanced classification? (2 Marks)",
        "What are SHAP (SHapley Additive exPlanations) values in feature importance? (2 Marks)"
      ],
      "sixMarks": [
        "Write Python code using Scikit-Learn `Pipeline` and `RandomForestClassifier` to split data, scale features without data leakage, and plot Permutation Feature Importance. (6 Marks)",
        "Explain 4 common Data Quality issues discovered during EDA that degrade ML model performance (Multicollinearity, Target Leakage, High Cardinality, Extreme Skewness). (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Model-Agnostic Explainable AI (XAI) in Pre-ML EDA. Detail Partial Dependence Plots (PDP), SHAP Summary Plots, LIME (Local Interpretable Model-Agnostic Explanations), Feature Selection via Recursive Feature Elimination with Cross-Validation (RFECV), and Baseline Model validation. (10 Marks)"
      ]
    }
  },
  {
    "title": "Mini Projects and Hands-on Practice",
    "slug": "exploratory-data-analysis-mini-projects",
    "order": 15,
    "estimatedHours": 8,
    "difficulty": "Advanced",
    "description": "Hands-on project portfolio building: Titanic Survival Dataset Analysis, Iris Flower Classification EDA, House Price Prediction Dataset Exploration, Netflix Movies & TV Shows Content Analysis, COVID-19 Global Pandemic Trend Analysis, E-Commerce Customer Behavior Dataset Exploration, and Custom Dataset Exploration.",
    "subTopics": [
      "Titanic Dataset Analysis",
      "Iris Dataset Analysis",
      "House Price Dataset Analysis",
      "Netflix Dataset Analysis",
      "COVID-19 Dataset Analysis",
      "E-commerce Dataset Analysis",
      "Custom Dataset Exploration"
    ],
    "prerequisiteTitles": [
      "Data Cleaning and Preprocessing",
      "Data Visualization",
      "Univariate Data Analysis",
      "Bivariate Data Analysis"
    ],
    "learningObjectives": [
      "Execute complete Titanic EDA: Analyzing survival rates across Pclass, Sex, Age, Fare, and Family Size (`SibSp + Parch`).",
      "Execute Netflix EDA: Analyzing content distribution by country, release year trends, and rating categories using Plotly.",
      "Build a polished GitHub / Kaggle EDA Jupyter Notebook project portfolio with clear markdown narratives."
    ],
    "notes": [
      {
        "title": "Titanic EDA Case Study Code & Feature Creation Snippet",
        "content": "HANDS-ON MINI PROJECT: TITANIC DATASET EDA\n\n1. Titanic Feature Creation & Analysis Code:\n```python\nimport pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\n\ndf = pd.read_csv('titanic.csv')\n\n# 1. Feature Creation: Family Size & Is_Alone\ndf['FamilySize'] = df['SibSp'] + df['Parch'] + 1\ndf['IsAlone'] = (df['FamilySize'] == 1).astype(int)\n\n# 2. Extract Title from Name\ndf['Title'] = df['Name'].str.extract(' ([A-Za-z]+)\\.', expand=False)\ndf['Title'] = df['Title'].replace(['Lady', 'Countess','Capt', 'Col','Don', 'Dr', 'Major', 'Rev', 'Sir', 'Jonkheer', 'Dona'], 'Rare')\ndf['Title'] = df['Title'].replace('Mlle', 'Miss').replace('Ms', 'Miss').replace('Mme', 'Mrs')\n\n# 3. Survival Rate Analysis by Pclass and Sex\nsurvival_matrix = df.groupby(['Pclass', 'Sex'])['Survived'].mean().unstack()\nsns.heatmap(survival_matrix, annot=True, fmt='.2%', cmap='YlGnBu')\nplt.title('Survival Rate by Class and Gender')\nplt.show()\n```"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Data Analysis with Open Source Tools",
        "author": "Philipp K. Janert"
      }
    ],
    "practiceLinks": [
      {
        "title": "Kaggle Titanic: Machine Learning from Disaster",
        "url": "https://www.kaggle.com/c/titanic"
      },
      {
        "title": "Kaggle Netflix Movies and TV Shows Dataset",
        "url": "https://www.kaggle.com/datasets/shivamb/netflix-shows"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State 3 insights uncovered during EDA of the Titanic dataset (e.g. Female survival rate vs Male, Pclass 1 vs Pclass 3). (2 Marks)",
        "How is Name column title extraction (`Mr, Mrs, Miss, Master`) useful in Titanic EDA? (2 Marks)",
        "List 4 key sections required in a professional Kaggle EDA Notebook submission. (2 Marks)"
      ],
      "sixMarks": [
        "Write Python code for Netflix dataset EDA: Parse `date_added` into year/month, plot total movies vs TV shows added per year, and generate a WordCloud of movie titles. (6 Marks)",
        "Describe House Price Dataset EDA pipeline: Inspecting target variable `SalePrice` skewness, plotting Scatter matrix against `GrLivArea` and `OverallQual`, and identifying high-correlation features. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive Portfolio Project Guide. Detail end-to-end EDA execution for a COVID-19 Global Pandemic dataset (Cumulative vs Daily active cases, Log-scale epidemic curves, Mortality rate calculations, Folium interactive choropleth map visualization, and publishing on GitHub Pages). (10 Marks)"
      ]
    }
  },
  {
    "title": "Best Practices in EDA",
    "slug": "exploratory-data-analysis-best-practices",
    "order": 16,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Master professional EDA standards: Comprehensive EDA Checklist, Code & Notebook Documentation, Reproducible Analysis (Seed setting `random_state`, environment isolation), Data Ethics & Bias Detection, Privacy Considerations (GDPR, Anonymization, PII removal), Common Pitfalls & Mistakes in EDA (Confirmation bias, Overplotting, Cherry-picking), and Executive Reporting & Data Storytelling.",
    "subTopics": [
      "EDA Checklist",
      "Documentation",
      "Reproducible Analysis",
      "Data Ethics",
      "Privacy Considerations",
      "Common Mistakes in EDA",
      "Reporting Findings"
    ],
    "prerequisiteTitles": [
      "Introduction to Exploratory Data Analysis",
      "Real-World Case Studies"
    ],
    "learningObjectives": [
      "Follow a 10-Point Professional EDA Quality Audit Checklist before finalizing data analysis reports.",
      "Anonymize Personally Identifiable Information (PII) to comply with data privacy standards (GDPR, HIPAA).",
      "Avoid cognitive biases: Confirmation Bias, Selection Bias, Overfitting to noise, and Misleading chart scales."
    ],
    "notes": [
      {
        "title": "10-Point EDA Quality Checklist & PII Anonymization Code",
        "content": "EDA BEST PRACTICES & QUALITY AUDIT CHECKLIST\n\n1. 10-Point Professional EDA Quality Checklist:\n   [ ] 1. Check Data Shapes (shape), Dtypes (dtypes), and Memory Usage (info()).\n   [ ] 2. Audit Missing Values (isna().sum()) & Mechanism (MCAR/MAR/MNAR).\n   [ ] 3. Audit Duplicate Rows (duplicated().sum()).\n   [ ] 4. Audit Outliers using Boxplots & IQR / Z-Scores.\n   [ ] 5. Check Target Distribution & Class Imbalance Ratios.\n   [ ] 6. Inspect Skewness & Apply Necessary Log/Power Transformations.\n   [ ] 7. Audit Multicollinearity using VIF & Correlation Heatmaps.\n   [ ] 8. Check Data Types (e.g. Convert dates to datetime64, categories to category).\n   [ ] 9. Remove Personally Identifiable Information (PII) for Data Privacy.\n   [ ] 10. Set random_state seeds for 100% Reproducible Results.\n\n2. PII Anonymization Code Snippet:\n```python\nimport hashlib\n\n# Hash PII (e.g. Email / SSN) for GDPR compliance\ndef anonymize_pii(text):\n    return hashlib.sha256(text.encode()).hexdigest()[:12]\n\ndf['user_id_hashed'] = df['email'].apply(anonymize_pii)\ndf.drop(columns=['email', 'phone_number', 'full_name'], inplace=True)\n```"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Ethics and Data Science",
        "author": "Mike Loukides, Hilary Mason, DJ Patil"
      },
      {
        "title": "Storytelling with Data",
        "author": "Cole Nussbaumer Knaflic"
      }
    ],
    "practiceLinks": [
      {
        "title": "Kaggle Code Ethics & Community Guidelines",
        "url": "https://www.kaggle.com/community-guidelines"
      }
    ],
    "questionBank": {
      "conceptual": [
        "List 5 essential items on the Professional EDA Quality Audit Checklist. (2 Marks)",
        "What is Personally Identifiable Information (PII) and why must it be anonymized? (2 Marks)",
        "Explain Confirmation Bias in data analysis and how to avoid it. (2 Marks)"
      ],
      "sixMarks": [
        "Explain the principles of Reproducible Data Analysis detailing virtual environments (`venv`/`conda`), setting random seeds (`np.random.seed(42)`), and version controlling notebooks with Git. (6 Marks)",
        "Describe Data Ethics & Fairness auditing detailing Selection Bias, Historical Bias in training data, and Algorithmic Bias mitigation. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Executive Data Storytelling & Presentation. Detail structuring a C-suite executive EDA report (Executive Summary $\to$ Key Business Findings $\to$ Actionable Recommendations $\to$ Appendix Code), designing clear non-technical data visual narratives, and avoiding misleading chart scales. (10 Marks)"
      ]
    }
  }
];
