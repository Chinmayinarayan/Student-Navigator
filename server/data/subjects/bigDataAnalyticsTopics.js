module.exports = [
  {
    "title": "Introduction to Big Data",
    "slug": "big-data-introduction-to-big-data",
    "order": 1,
    "estimatedHours": 3,
    "difficulty": "Beginner",
    "description": "Understand Big Data evolution, the 5 V's characteristics (Volume, Velocity, Variety, Veracity, Value), traditional RDBMS vs distributed processing, and industrial applications.",
    "subTopics": [
      "What is Big Data",
      "Evolution of Data",
      "Need for Big Data Analytics",
      "Characteristics of Big Data (Volume, Velocity, Variety, Veracity, Value)",
      "Traditional Data Processing vs Big Data Processing",
      "Applications of Big Data Analytics"
    ],
    "prerequisiteTitles": [],
    "learningObjectives": [
      "Define Big Data and analyze the 5 V's dimensional characteristics.",
      "Contrast traditional RDBMS architectures with distributed Big Data clusters.",
      "Identify enterprise application domains in e-commerce, healthcare, and finance."
    ],
    "notes": [
      {
        "title": "The 5 V's of Big Data & Processing Paradigms",
        "content": "INTRODUCTION TO BIG DATA ANALYTICS\n\n1. The 5 V's of Big Data:\n   - Volume: Exponential scale of data generation (Terabytes to Petabytes/Exabytes).\n   - Velocity: High speed of incoming data streams (Real-time logs, sensor telemetry).\n   - Variety: Diverse data formats: Structured (SQL tables), Semi-structured (JSON/XML), Unstructured (Video, Audio, Text).\n   - Veracity: Data quality, trustworthiness, and noise level in raw datasets.\n   - Value: Actionable business insights extracted from raw analytics.\n\n2. Traditional RDBMS vs Big Data Processing:\n   - Traditional (RDBMS): Vertical scaling (Scale-up), ACID transactions, Schema-on-Write, Structured SQL data.\n   - Big Data (Hadoop/Spark): Horizontal scaling (Scale-out commodity hardware), BASE properties, Schema-on-Read, Polyglot storage."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Hadoop: The Definitive Guide (4th Edition)",
        "author": "Tom White",
        "url": "https://piazza-resources.s3.amazonaws.com/ist3pwd6k8p5t/iu5gqbsh8re6mj/OReilly.Hadoop.The.Definitive.Guide.4th.Edition.2015.pdf"
      },
      {
        "title": "Big Data: Principles and Best Practices of Scalable Real-time Data Systems",
        "author": "Nathan Marz & James Warren"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Big Data Introduction",
        "url": "https://www.geeksforgeeks.org/big-data-analytics/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define Big Data and explain the 5 V's characteristics. (2 Marks)",
        "Compare Traditional RDBMS vs Big Data processing systems. (2 Marks)",
        "Differentiate between Schema-on-Write and Schema-on-Read. (2 Marks)"
      ],
      "sixMarks": [
        "Explain the 5 V's of Big Data (Volume, Velocity, Variety, Veracity, Value) with enterprise case study examples. (6 Marks)",
        "Describe industrial application domains of Big Data Analytics in fraud detection, healthcare diagnostics, and recommendation engines. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Big Data Principles. Detail data evolution from single-node SQL databases to distributed clusters, 5 V's metrics, scale-up vs scale-out architectures, polyglot persistence, and business value extraction pipelines. (10 Marks)"
      ]
    }
  },
  {
    "title": "Big Data Architecture",
    "slug": "big-data-big-data-architecture",
    "order": 2,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Learn Big Data multi-tier architecture, system layers (Storage, Processing, Analytics, Visualization), Lambda Architecture (Speed + Batch layers), and Kappa Architecture.",
    "subTopics": [
      "Introduction to Big Data Architecture",
      "Components of Big Data Systems",
      "Data Sources",
      "Data Storage Layer",
      "Data Processing Layer",
      "Analytics Layer",
      "Visualization Layer",
      "Lambda Architecture",
      "Kappa Architecture"
    ],
    "prerequisiteTitles": [
      "Introduction to Big Data"
    ],
    "learningObjectives": [
      "Understand multi-layer Big Data pipelines: Ingestion -> Storage -> Processing -> Analytics -> Visualization.",
      "Compare Lambda Architecture (dual Batch + Speed serving layers) and Kappa Architecture (stream-only).",
      "Identify components across storage (HDFS/S3), processing (Spark/Flink), and serving layers."
    ],
    "notes": [
      {
        "title": "Big Data Pipeline Layers, Lambda & Kappa Architectures",
        "content": "BIG DATA ARCHITECTURES\n\n1. Big Data System Layers:\n   - Ingestion Layer: Sqoop (batch SQL import), Flume/Kafka (log streams).\n   - Storage Layer: HDFS, Amazon S3, NoSQL (MongoDB, HBase).\n   - Processing Layer: MapReduce, Apache Spark, Flink.\n   - Analytics/Serving Layer: Hive, Presto, Impala.\n   - Visualization Layer: Tableau, PowerBI, Superset.\n\n2. Lambda Architecture:\n   Combines batch processing and stream processing in parallel:\n   - Batch Layer: Pre-computes immutable master datasetviews (High accuracy, latency).\n   - Speed Layer (Stream): Processes recent delta real-time streams (Low latency, approximate).\n   - Serving Layer: Merges batch and real-time views to answer queries.\n\n3. Kappa Architecture:\n   Simplification of Lambda by replacing dual layers with a SINGLE stream processing pipeline (e.g. Kafka + Apache Flink/Spark Streaming)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Hadoop: The Definitive Guide (4th Edition)",
        "author": "Tom White",
        "url": "https://piazza-resources.s3.amazonaws.com/ist3pwd6k8p5t/iu5gqbsh8re6mj/OReilly.Hadoop.The.Definitive.Guide.4th.Edition.2015.pdf"
      },
      {
        "title": "Big Data Architecture",
        "author": "Nathan Marz"
      }
    ],
    "practiceLinks": [
      {
        "title": "Databricks Architectural Guidelines",
        "url": "https://databricks.com/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What are the main functional layers of a Big Data Architecture? (2 Marks)",
        "Explain Lambda Architecture dual-path concept (Batch Layer + Speed Layer). (2 Marks)",
        "How does Kappa Architecture simplify Lambda Architecture? (2 Marks)"
      ],
      "sixMarks": [
        "Explain Lambda Architecture layers (Batch, Speed, Serving) with system block diagram and data flow. (6 Marks)",
        "Compare Lambda and Kappa architectures highlighting complexity, maintenance overhead, and latency parameters. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Enterprise Big Data Architecture. Detail data ingestion mechanisms, distributed file storage, distributed compute engine integration, Lambda vs Kappa architectural blueprints, and query serving layer designs. (10 Marks)"
      ]
    }
  },
  {
    "title": "Data Analytics Fundamentals",
    "slug": "big-data-data-analytics-fundamentals",
    "order": 3,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Explore the four pillars of Data Analytics: Descriptive, Diagnostic, Predictive, and Prescriptive Analytics, along with the end-to-end Data Analytics Lifecycle.",
    "subTopics": [
      "Introduction to Data Analytics",
      "Types of Analytics (Descriptive, Diagnostic, Predictive, Prescriptive)",
      "Data Analytics Lifecycle",
      "Data Collection",
      "Data Cleaning",
      "Data Transformation",
      "Data Analysis"
    ],
    "prerequisiteTitles": [
      "Introduction to Big Data"
    ],
    "learningObjectives": [
      "Differentiate Descriptive (What happened?), Diagnostic (Why did it happen?), Predictive (What will happen?), and Prescriptive (What action to take?).",
      "Navigate the Data Analytics Lifecycle from discovery to hypothesis testing and model building.",
      "Execute data cleaning, missing value handling, and transformation."
    ],
    "notes": [
      {
        "title": "Four Pillars of Analytics & Data Lifecycle",
        "content": "DATA ANALYTICS FUNDAMENTALS\n\n1. Four Types of Data Analytics:\n   - Descriptive Analytics: \"What happened?\" Summarizes historical data (KPIs, Reports, Dashboards).\n   - Diagnostic Analytics: \"Why did it happen?\" Root cause analysis (Drill-down, Data Mining, Correlations).\n   - Predictive Analytics: \"What will happen?\" Forecasts future trends using ML models & regression.\n   - Prescriptive Analytics: \"What should we do?\" Recommends optimal action using simulation & optimization algorithms.\n\n2. Data Analytics Lifecycle Phases:\n   1. Business Discovery -> 2. Data Preparation -> 3. Model Planning -> 4. Model Building -> 5. Communicating Results -> 6. Operationalization."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Hadoop: The Definitive Guide (4th Edition)",
        "author": "Tom White",
        "url": "https://piazza-resources.s3.amazonaws.com/ist3pwd6k8p5t/iu5gqbsh8re6mj/OReilly.Hadoop.The.Definitive.Guide.4th.Edition.2015.pdf"
      },
      {
        "title": "Data Science and Big Data Analytics",
        "author": "EMC Education Services"
      }
    ],
    "practiceLinks": [
      {
        "title": "Kaggle Data Analytics Basics",
        "url": "https://www.kaggle.com/learn"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define the four types of Data Analytics: Descriptive, Diagnostic, Predictive, Prescriptive. (2 Marks)",
        "State six key phases of the Data Analytics Lifecycle. (2 Marks)",
        "What is the difference between Predictive and Prescriptive analytics? (2 Marks)"
      ],
      "sixMarks": [
        "Explain the four types of Analytics (Descriptive, Diagnostic, Predictive, Prescriptive) with business case examples. (6 Marks)",
        "Detail the Data Analytics Lifecycle from initial problem discovery to production operationalization. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Data Analytics Frameworks. Detail Descriptive KPI metrics, Diagnostic correlation techniques, Predictive statistical modeling algorithms, Prescriptive optimization models, and complete lifecycle execution. (10 Marks)"
      ]
    }
  },
  {
    "title": "Big Data Storage Technologies",
    "slug": "big-data-big-data-storage-technologies",
    "order": 4,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master distributed file storage (HDFS NameNode, DataNode, block replication, fault tolerance) and NoSQL classification (Key-Value, Document, Column-Family, Graph).",
    "subTopics": [
      "Distributed File Systems",
      "Hadoop Distributed File System (HDFS)",
      "HDFS Architecture",
      "NameNode and DataNode",
      "Data Replication",
      "Fault Tolerance",
      "NoSQL Databases Introduction",
      "Types of NoSQL Databases (Key-Value, Document, Column-Family, Graph)"
    ],
    "prerequisiteTitles": [
      "Big Data Architecture"
    ],
    "learningObjectives": [
      "Understand HDFS master-worker architecture: NameNode (metadata) and DataNodes (data blocks).",
      "Analyze HDFS block allocation, 3x replication policy, rack awareness, and heartbeat fault tolerance.",
      "Categorize NoSQL database types: Key-Value (Redis), Document (MongoDB), Column-Family (Cassandra), Graph (Neo4j)."
    ],
    "notes": [
      {
        "title": "HDFS Architecture & NoSQL Taxonomy",
        "content": "BIG DATA STORAGE & HDFS ARCHITECTURE\n\n1. HDFS Architecture:\n   - NameNode (Master): Stores file system metadata (EditLog, FsImage) in RAM. Manages block locations.\n   - DataNode (Worker): Stores actual data blocks (default block size = 128 MB). Sends periodic Heartbeats and Block Reports to NameNode.\n   - Secondary NameNode: Periodically merges EditLog with FsImage to create checkpoints (Not a standby NameNode!).\n\n2. HDFS Fault Tolerance & Replication:\n   - Default Replication Factor = 3.\n   - Rack Awareness Policy:\n     * Block 1: Local Rack, DataNode 1\n     * Block 2: Local Rack, DataNode 2\n     * Block 3: Remote Rack, DataNode 3\n\n3. NoSQL Database Classification:\n   - Key-Value: Simple key-to-blob lookup (Redis, DynamoDB).\n   - Document: Stores JSON/BSON documents (MongoDB, CouchDB).\n   - Column-Family: Wide-column tabular storage for massive read/write scale (Cassandra, HBase).\n   - Graph: Graph nodes and edges for connected relationships (Neo4j, Amazon Neptune)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Hadoop: The Definitive Guide (4th Edition)",
        "author": "Tom White",
        "url": "https://piazza-resources.s3.amazonaws.com/ist3pwd6k8p5t/iu5gqbsh8re6mj/OReilly.Hadoop.The.Definitive.Guide.4th.Edition.2015.pdf"
      }
    ],
    "practiceLinks": [
      {
        "title": "Apache Hadoop HDFS Documentation",
        "url": "https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What are the roles of NameNode and DataNode in HDFS? (2 Marks)",
        "State default HDFS block size and replication factor. (2 Marks)",
        "Categorize NoSQL databases into four types with one example database each. (2 Marks)"
      ],
      "sixMarks": [
        "Explain HDFS Architecture with master-worker diagram. Detail NameNode metadata management and DataNode block storage. (6 Marks)",
        "Describe HDFS Rack Awareness and 3x Replication Policy for fault tolerance. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Distributed Storage Technologies. Detail HDFS block write/read pipelines, NameNode HA high availability pairs, FsImage/EditLog checkpointing, and comparative analysis of Key-Value, Document, Column-Family, and Graph NoSQL databases. (10 Marks)"
      ]
    }
  },
  {
    "title": "Hadoop Ecosystem",
    "slug": "big-data-hadoop-ecosystem",
    "order": 5,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Explore the core Hadoop Ecosystem: HDFS, MapReduce, YARN (ResourceManager, NodeManager), cluster setup, configuration files, and enterprise deployment.",
    "subTopics": [
      "Introduction to Hadoop",
      "Hadoop Architecture",
      "Hadoop Components (HDFS, MapReduce, YARN)",
      "Hadoop Cluster",
      "Hadoop Installation Basics",
      "Hadoop Applications"
    ],
    "prerequisiteTitles": [
      "Big Data Storage Technologies"
    ],
    "learningObjectives": [
      "Understand Hadoop 2.x/3.x architecture: Storage (HDFS), Compute Engine (MapReduce/Spark), Resource Manager (YARN).",
      "Analyze YARN components: ResourceManager (Scheduler, ApplicationsManager), NodeManager, and ApplicationMaster.",
      "Configure core Hadoop XML configuration files (core-site.xml, hdfs-site.xml, yarn-site.xml)."
    ],
    "notes": [
      {
        "title": "Hadoop 2.x/3.x Architecture & YARN Mechanics",
        "content": "HADOOP ECOSYSTEM & YARN\n\n1. Hadoop Core Architecture:\n   - Hadoop 1.x: HDFS + MapReduce (JobTracker & TaskTracker). Suffered from single JobTracker bottleneck.\n   - Hadoop 2.x/3.x: HDFS + YARN + Processing Engines (MapReduce, Spark, Tez).\n\n2. YARN (Yet Another Resource Negotiator):\n   Decouples resource management from processing models.\n   - ResourceManager (Master): Allocates cluster resources across all applications.\n     * Scheduler: Allocates containers based on memory/CPU constraints (Capacity / Fair Scheduler).\n     * ApplicationsManager: Accepts job submissions and spawns ApplicationMaster.\n   - NodeManager (Worker): Monitors resource usage (containers) on individual cluster nodes.\n   - ApplicationMaster: Per-job coordinator managing task execution and negotiating containers with ResourceManager.\n\n3. Hadoop CLI Commands:\n   hdfs dfs -mkdir /input\n   hdfs dfs -put localfile.txt /input/\n   hdfs dfs -ls /input/\n   hdfs dfs -cat /output/part-r-00000"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Hadoop: The Definitive Guide (4th Edition)",
        "author": "Tom White",
        "url": "https://piazza-resources.s3.amazonaws.com/ist3pwd6k8p5t/iu5gqbsh8re6mj/OReilly.Hadoop.The.Definitive.Guide.4th.Edition.2015.pdf"
      }
    ],
    "practiceLinks": [
      {
        "title": "Apache Hadoop Commands Guide",
        "url": "https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-common/FileSystemShell.html"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is YARN in Hadoop 2.x? Name its main components. (2 Marks)",
        "Differentiate between Hadoop 1.x and Hadoop 2.x architectures. (2 Marks)",
        "State basic HDFS commands for creating a directory and uploading a file. (2 Marks)"
      ],
      "sixMarks": [
        "Explain YARN Architecture detailing ResourceManager, NodeManager, ApplicationMaster, and Container execution loop. (6 Marks)",
        "Describe the Hadoop Ecosystem tools overview: HDFS, YARN, MapReduce, Hive, Pig, Sqoop, Flume, and HBase. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Hadoop Architecture & Cluster Management. Detail YARN container scheduling policies, multi-node cluster deployment steps, core configuration files (core-site, hdfs-site, mapred-site, yarn-site), and HDFS CLI administration. (10 Marks)"
      ]
    }
  },
  {
    "title": "MapReduce Programming Model",
    "slug": "big-data-mapreduce-programming-model",
    "order": 6,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master MapReduce parallel programming paradigm: Map phase, Shuffle & Sort, Reduce phase, Combiners (mini-reducers), Partitioners, and WordCount implementations.",
    "subTopics": [
      "Introduction to MapReduce",
      "Map Function",
      "Reduce Function",
      "MapReduce Workflow",
      "Data Processing using MapReduce",
      "Combiner and Partitioner",
      "MapReduce Applications"
    ],
    "prerequisiteTitles": [
      "Hadoop Ecosystem"
    ],
    "learningObjectives": [
      "Understand Map phase transformation `(K1, V1) -> list(K2, V2)` and Reduce aggregation `(K2, list(V2)) -> list(K3, V3)`.",
      "Analyze Shuffle and Sort phase data movement between Mapper outputs and Reducer inputs.",
      "Implement Combiner for local in-mapper reduction and Partitioner for custom key routing."
    ],
    "notes": [
      {
        "title": "MapReduce Data Pipeline & WordCount Code Pattern",
        "content": "MAPREDUCE PROGRAMMING MODEL\n\n1. MapReduce Workflow Phases:\n   1. Input Format & RecordReader: Splits input file into Logical InputSplits and parses lines into (K1, V1) key-value pairs.\n   2. Map Phase: User-defined Mapper transforms (K1, V1) into intermediate key-value pairs (K2, V2).\n   3. Combiner Phase (Optional): Local mini-reducer executed on Mapper node to reduce network traffic.\n   4. Partitioner & Shuffle/Sort: Routes (K2, V2) pairs to specific Reducers based on key hash: Reducer_ID = Hash(K2) % Num_Reducers. Sorts by K2.\n   5. Reduce Phase: User-defined Reducer aggregates (K2, list(V2)) into final output (K3, V3).\n   6. OutputFormat: Writes results to HDFS files (part-r-00000).\n\n2. Java WordCount Mapper Pattern:\n   public static class TokenizerMapper extends Mapper<Object, Text, Text, IntWritable> {\n     private final static IntWritable one = new IntWritable(1);\n     private Text word = new Text();\n     public void map(Object key, Text value, Context context) throws IOException, InterruptedException {\n       StringTokenizer itr = new StringTokenizer(value.toString());\n       while (itr.hasMoreTokens()) {\n         word.set(itr.nextToken());\n         context.write(word, one);\n       }\n     }\n   }"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Hadoop: The Definitive Guide (4th Edition)",
        "author": "Tom White",
        "url": "https://piazza-resources.s3.amazonaws.com/ist3pwd6k8p5t/iu5gqbsh8re6mj/OReilly.Hadoop.The.Definitive.Guide.4th.Edition.2015.pdf"
      }
    ],
    "practiceLinks": [
      {
        "title": "Apache Hadoop MapReduce Tutorial",
        "url": "https://hadoop.apache.org/docs/current/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define input/output signatures for Map and Reduce functions in MapReduce. (2 Marks)",
        "What is the role of the Combiner in MapReduce? (2 Marks)",
        "What is the function of a Partitioner in MapReduce? (2 Marks)"
      ],
      "sixMarks": [
        "Explain end-to-end MapReduce Workflow: InputSplit -> Map -> Combiner -> Partition & Shuffle/Sort -> Reduce -> Output. (6 Marks)",
        "Write Java code for Mapper and Reducer classes for the classic Word Count MapReduce application. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on MapReduce Parallel Programming. Detail data-locality optimization, Shuffle and Sort internal ring buffer mechanics, custom Writable and WritableComparable serialization types, Partitioner key hashing, and MapReduce matrix multiplication algorithm. (10 Marks)"
      ]
    }
  },
  {
    "title": "Apache Spark",
    "slug": "big-data-apache-spark",
    "order": 7,
    "estimatedHours": 6,
    "difficulty": "Advanced",
    "description": "Master Apache Spark in-memory compute engine: Spark Driver & Executor architecture, Resilient Distributed Datasets (RDDs), DataFrames, Datasets, Spark SQL, and PySpark MLlib.",
    "subTopics": [
      "Introduction to Apache Spark",
      "Spark Architecture",
      "Spark Components",
      "Resilient Distributed Dataset (RDD)",
      "DataFrames and Datasets",
      "Spark SQL",
      "Spark Streaming",
      "Machine Learning using Spark MLlib"
    ],
    "prerequisiteTitles": [
      "MapReduce Programming Model"
    ],
    "learningObjectives": [
      "Understand why Spark is 100x faster than MapReduce due to in-memory DAG execution.",
      "Master Resilient Distributed Dataset (RDD) Transformations (map, filter, flatMap) and Actions (collect, count, reduce).",
      "Query structured big data using Spark SQL DataFrames and execute ML algorithms using Spark MLlib."
    ],
    "notes": [
      {
        "title": "Spark Architecture, RDD Transformations & PySpark Code",
        "content": "APACHE SPARK & PYSPARK CHEATSHEET\n\n1. Spark vs MapReduce:\n   - MapReduce: Persists intermediate data to disk between Map and Reduce phases. Slow iterative ML processing.\n   - Apache Spark: Keeps data in-memory (RAM) across DAG execution steps. Up to 100x faster for iterative algorithms.\n\n2. Spark Architecture:\n   - Driver Program: Runs SparkContext/SparkSession, converts user code into Directed Acyclic Graph (DAG) of stages.\n   - Cluster Manager: YARN, Mesos, or Spark Standalone.\n   - Executor (Worker): JVM process running tasks on worker nodes and caching RDD partitions in RAM.\n\n3. RDD Transformations vs Actions:\n   - Transformations (Lazy Evaluation): Creates new RDD from existing RDD (e.g. map, filter, flatMap, groupByKey). Builds DAG lineage.\n   - Actions (Triggers Execution): Returns final value to Driver or writes to storage (e.g. collect, count, take, saveAsTextFile).\n\n4. PySpark Code Example:\n   from pyspark.sql import SparkSession\n   spark = SparkSession.builder.appName(\"Demo\").getOrCreate()\n   df = spark.read.csv(\"hdfs://namenode:9000/data.csv\", header=True, inferSchema=True)\n   df.filter(df[\"age\"] > 25).groupBy(\"gender\").count().show()"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Hadoop: The Definitive Guide (4th Edition)",
        "author": "Tom White",
        "url": "https://piazza-resources.s3.amazonaws.com/ist3pwd6k8p5t/iu5gqbsh8re6mj/OReilly.Hadoop.The.Definitive.Guide.4th.Edition.2015.pdf"
      },
      {
        "title": "Learning Spark: Lightning-Fast Data Analytics",
        "author": "Jules S. Damji, Brooke Wenig"
      }
    ],
    "practiceLinks": [
      {
        "title": "Databricks PySpark Documentation",
        "url": "https://spark.apache.org/docs/latest/api/python/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Why is Apache Spark significantly faster than Hadoop MapReduce? (2 Marks)",
        "What is an RDD in Apache Spark? Name two properties of RDDs. (2 Marks)",
        "Differentiate between RDD Transformations and Actions. What is Lazy Evaluation? (2 Marks)"
      ],
      "sixMarks": [
        "Explain Spark Architecture detailing Driver Program, SparkContext, Cluster Manager, Executors, Tasks, and DAG execution. (6 Marks)",
        "Write PySpark code to load a CSV dataset into a DataFrame, filter records, compute group-by aggregations, and query using Spark SQL. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Apache Spark Distributed Engine. Detail RDD fault-tolerance via lineage graphs, Narrow vs Wide dependencies (Shuffling), Spark SQL Catalyst Optimizer & Tungsten execution, Spark Streaming DStreams/Structured Streaming, and Spark MLlib machine learning pipelines. (10 Marks)"
      ]
    }
  },
  {
    "title": "Data Processing Frameworks",
    "slug": "big-data-data-processing-frameworks",
    "order": 8,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Learn data warehousing and ingestion tools: Apache Hive (HQL, Metastore, Managed vs External tables), Apache Pig (Pig Latin), Apache Flume (log ingestion), and Apache Sqoop (RDBMS-Hadoop transfer).",
    "subTopics": [
      "Apache Hive",
      "Hive Architecture",
      "Hive Query Language (HQL)",
      "Apache Pig",
      "Pig Latin",
      "Apache Flume",
      "Apache Sqoop",
      "Data Ingestion Techniques"
    ],
    "prerequisiteTitles": [
      "Hadoop Ecosystem"
    ],
    "learningObjectives": [
      "Write Hive Query Language (HQL) scripts for data warehousing over HDFS.",
      "Understand Hive Metastore, Partitioning, and Bucketing for query optimization.",
      "Perform RDBMS-to-Hadoop data import/export using Apache Sqoop CLI commands."
    ],
    "notes": [
      {
        "title": "Hive Data Warehousing & Sqoop Ingestion Commands",
        "content": "DATA PROCESSING FRAMEWORKS: HIVE, PIG & SQOOP\n\n1. Apache Hive:\n   Data warehouse infrastructure built on top of Hadoop. Converts SQL-like HQL queries into MapReduce/Tez/Spark jobs.\n   - Managed Table (Internal): Hive controls data files and schema. DROP TABLE deletes both metadata and HDFS data files.\n   - External Table: Hive controls only schema. DROP TABLE deletes metadata, but HDFS data files remain intact.\n   - Partitioning: Divides table data into sub-directories based on column value (e.g. PARTITIONED BY (country STRING)).\n   - Bucketing: Hash-partitions data within partitions into fixed number of bucket files for efficient joins.\n\n2. Apache Sqoop (SQL-to-Hadoop):\n   Imports and exports data between Relational Databases (MySQL, Oracle) and HDFS/Hive.\n   - Import Command:\n     sqoop import --connect jdbc:mysql://localhost/db --username root --password secret --table employees --target-dir /hdfs/emp --m 1"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Hadoop: The Definitive Guide (4th Edition)",
        "author": "Tom White",
        "url": "https://piazza-resources.s3.amazonaws.com/ist3pwd6k8p5t/iu5gqbsh8re6mj/OReilly.Hadoop.The.Definitive.Guide.4th.Edition.2015.pdf"
      },
      {
        "title": "Programming Hive",
        "author": "Edward Capriolo, Dean Wampler"
      }
    ],
    "practiceLinks": [
      {
        "title": "Apache Hive Documentation",
        "url": "https://cwiki.apache.org/confluence/display/Hive/Home"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is Apache Hive? Differentiate between Managed and External Hive tables. (2 Marks)",
        "Explain Partitioning vs Bucketing in Apache Hive. (2 Marks)",
        "What is Apache Sqoop and what is its primary use case? (2 Marks)"
      ],
      "sixMarks": [
        "Explain Apache Hive Architecture showing Driver, Compiler, Metastore, Execution Engine, and HDFS integration. (6 Marks)",
        "Write HQL DDL statements to create a partitioned Hive external table and query data using SQL aggregation. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Big Data Ingestion & Warehousing Frameworks. Detail Apache Hive architecture, Metastore RDBMS configurations, HQL optimization techniques (ORC file format, vectorized execution, CBO), Apache Pig Dataflow engine, Apache Sqoop RDBMS import/export commands, and Apache Flume log collection topology. (10 Marks)"
      ]
    }
  },
  {
    "title": "NoSQL Databases",
    "slug": "big-data-nosql-databases",
    "order": 9,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Deep dive into NoSQL database engines: CAP Theorem (Consistency, Availability, Partition Tolerance), MongoDB document store, Apache Cassandra distributed column store, and HBase.",
    "subTopics": [
      "Introduction to NoSQL",
      "Characteristics of NoSQL Databases",
      "MongoDB Basics",
      "Cassandra Basics",
      "HBase Basics",
      "Data Modeling in NoSQL",
      "CRUD Operations",
      "Applications of NoSQL"
    ],
    "prerequisiteTitles": [
      "Big Data Storage Technologies"
    ],
    "learningObjectives": [
      "Evaluate CAP Theorem trade-offs (CP vs AP systems).",
      "Perform CRUD operations and aggregation pipelines in MongoDB.",
      "Understand Apache Cassandra distributed peer-to-peer ring architecture and CQL querying."
    ],
    "notes": [
      {
        "title": "CAP Theorem, MongoDB CRUD & Cassandra Architecture",
        "content": "NOSQL DATABASES & CAP THEOREM\n\n1. CAP Theorem (Brewer's Theorem):\n   A distributed database can guarantee at most TWO of the following three properties simultaneously:\n   - Consistency (C): All nodes see the same data at the same time.\n   - Availability (A): Every request receives a non-error response.\n   - Partition Tolerance (P): System continues operating despite network node partitioning/failures.\n   * CP Systems: MongoDB, HBase, Redis (Focus on Consistency).\n   * AP Systems: Cassandra, DynamoDB, CouchDB (Focus on Availability & Eventual Consistency).\n\n2. MongoDB CRUD Operations:\n   - Insert: db.users.insertOne({ name: \"Alice\", age: 28, skills: [\"Python\", \"Spark\"] })\n   - Find: db.users.find({ age: { $gt: 25 } })\n   - Update: db.users.updateOne({ name: \"Alice\" }, { $set: { age: 29 } })\n   - Delete: db.users.deleteOne({ name: \"Alice\" })\n\n3. Apache Cassandra Architecture:\n   Peer-to-peer decentralized masterless ring architecture. Uses Consistent Hashing to distribute data across nodes. No single point of failure."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Hadoop: The Definitive Guide (4th Edition)",
        "author": "Tom White",
        "url": "https://piazza-resources.s3.amazonaws.com/ist3pwd6k8p5t/iu5gqbsh8re6mj/OReilly.Hadoop.The.Definitive.Guide.4th.Edition.2015.pdf"
      },
      {
        "title": "NoSQL Distilled",
        "author": "Pramod J. Sadalage & Martin Fowler"
      }
    ],
    "practiceLinks": [
      {
        "title": "MongoDB University Courses",
        "url": "https://university.mongodb.com/"
      },
      {
        "title": "DataStax Cassandra Tutorials",
        "url": "https://www.datastax.com/learn"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State CAP Theorem and name two CP and two AP NoSQL database systems. (2 Marks)",
        "Write MongoDB query commands for Inserting and Finding documents. (2 Marks)",
        "What is the main architectural difference between MongoDB and Apache Cassandra? (2 Marks)"
      ],
      "sixMarks": [
        "Explain CAP Theorem trade-offs with diagrams. Compare RDBMS ACID properties vs NoSQL BASE properties. (6 Marks)",
        "Describe Apache Cassandra masterless ring architecture, Consistent Hashing partitioner, and replication strategy. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on NoSQL Data Modeling & Storage Systems. Compare Document (MongoDB), Wide-Column (Cassandra), Key-Value (Redis), and Graph (Neo4j) databases. Detail MongoDB BSON storage & Aggregation framework, and Cassandra CQL schema design rules. (10 Marks)"
      ]
    }
  },
  {
    "title": "Data Mining Concepts",
    "slug": "big-data-data-mining-concepts",
    "order": 10,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Learn Knowledge Discovery in Databases (KDD) pipeline: Data Cleaning, Integration, Reduction, Association Rule Mining (Apriori Algorithm), and Frequent Itemset discovery.",
    "subTopics": [
      "Introduction to Data Mining",
      "Data Mining Process",
      "Data Preprocessing",
      "Data Cleaning",
      "Data Integration",
      "Data Reduction",
      "Pattern Discovery",
      "Knowledge Discovery in Databases (KDD)"
    ],
    "prerequisiteTitles": [
      "Data Analytics Fundamentals"
    ],
    "learningObjectives": [
      "Understand the 7 steps of the KDD Process: Cleaning, Integration, Selection, Transformation, Data Mining, Pattern Evaluation, Knowledge Presentation.",
      "Calculate Support, Confidence, and Lift metrics for Market Basket Analysis.",
      "Execute the Apriori Algorithm to generate frequent itemsets and association rules."
    ],
    "notes": [
      {
        "title": "KDD Pipeline & Apriori Association Rule Mining",
        "content": "DATA MINING & KDD PROCESS\n\n1. KDD Process Steps:\n   Data Sources -> Data Cleaning & Integration -> Data Selection & Transformation -> Data Mining (Pattern Discovery) -> Pattern Evaluation -> Knowledge.\n\n2. Association Rule Metrics (Market Basket Analysis):\n   Rule A -> B (e.g. {Bread} -> {Butter}):\n   - Support(A -> B) = Count(A and B) / Total_Transactions\n   - Confidence(A -> B) = Count(A and B) / Count(A) = Support(A -> B) / Support(A)\n   - Lift(A -> B) = Confidence(A -> B) / Support(B)\n     * Lift > 1: Positive strong association.\n\n3. Apriori Algorithm:\n   Finds frequent itemsets using Apriori Property: \"All non-empty subsets of a frequent itemset must also be frequent.\" Uses join and prune steps iteratively."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Hadoop: The Definitive Guide (4th Edition)",
        "author": "Tom White",
        "url": "https://piazza-resources.s3.amazonaws.com/ist3pwd6k8p5t/iu5gqbsh8re6mj/OReilly.Hadoop.The.Definitive.Guide.4th.Edition.2015.pdf"
      },
      {
        "title": "Data Mining: Concepts and Techniques",
        "author": "Jiawei Han, Micheline Kamber, Jian Pei"
      }
    ],
    "practiceLinks": [
      {
        "title": "Sanfoundry Data Mining Questions",
        "url": "https://www.sanfoundry.com/data-mining-questions-answers/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State the 7 steps of Knowledge Discovery in Databases (KDD) process. (2 Marks)",
        "Define Support, Confidence, and Lift for Association Rule Mining. (2 Marks)",
        "State the Apriori Property used in frequent itemset mining. (2 Marks)"
      ],
      "sixMarks": [
        "Explain Apriori Algorithm step-by-step with candidate generation, support counting, and pruning for a given transaction dataset. (6 Marks)",
        "Describe Data Reduction techniques: Dimensionality Reduction (PCA), Numerosity Reduction, and Data Compression. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Data Mining & Pattern Discovery. Detail KDD pipeline steps, Apriori vs FP-Growth algorithms for association rule mining, data discretization techniques, clustering validation metrics, and commercial applications. (10 Marks)"
      ]
    }
  },
  {
    "title": "Machine Learning for Big Data",
    "slug": "big-data-machine-learning-for-big-data",
    "order": 11,
    "estimatedHours": 6,
    "difficulty": "Advanced",
    "description": "Scale machine learning algorithms on Big Data: PySpark MLlib pipelines, scalable Linear/Logistic Regression, K-Means clustering, and Collaborative Filtering recommendation systems.",
    "subTopics": [
      "Introduction to ML in Big Data",
      "Scalable Machine Learning",
      "Classification Algorithms",
      "Regression Algorithms",
      "Clustering Algorithms",
      "Recommendation Systems",
      "Predictive Analytics"
    ],
    "prerequisiteTitles": [
      "Apache Spark",
      "Data Mining Concepts"
    ],
    "learningObjectives": [
      "Build scalable PySpark MLlib pipelines using VectorAssembler, Estimators, and Transformers.",
      "Implement Collaborative Filtering recommendation algorithms using Alternating Least Squares (ALS).",
      "Train scalable Logistic Regression and K-Means models over distributed Spark clusters."
    ],
    "notes": [
      {
        "title": "Spark MLlib Pipelines & Collaborative Filtering (ALS)",
        "content": "SCALABLE MACHINE LEARNING WITH SPARK MLLIB\n\n1. Spark MLlib Pipeline Architecture:\n   - Transformer: Transforms one DataFrame into another (e.g. VectorAssembler, StandardScaler, Tokenizer). Method: .transform()\n   - Estimator: Algorithm that fits on a DataFrame to produce a Transformer (e.g. LogisticRegression, KMeans). Method: .fit()\n   - Pipeline: Chains multiple Transformers and Estimators into a single workflow.\n\n2. Recommendation Systems (ALS):\n   - Alternating Least Squares (ALS) Matrix Factorization: Factorizes User-Item Rating Matrix R (m x n) into User matrix U (m x k) and Item matrix V (k x n) such that R approx U * V.\n\n3. PySpark MLlib Code Example:\n   from pyspark.ml.feature import VectorAssembler\n   from pyspark.ml.classification import LogisticRegression\n   from pyspark.ml import Pipeline\n\n   assembler = VectorAssembler(inputCols=[\"feat1\", \"feat2\"], outputCol=\"features\")\n   lr = LogisticRegression(featuresCol=\"features\", labelCol=\"label\")\n   pipeline = Pipeline(stages=[assembler, lr])\n   model = pipeline.fit(train_df)\n   predictions = model.transform(test_df)"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Hadoop: The Definitive Guide (4th Edition)",
        "author": "Tom White",
        "url": "https://piazza-resources.s3.amazonaws.com/ist3pwd6k8p5t/iu5gqbsh8re6mj/OReilly.Hadoop.The.Definitive.Guide.4th.Edition.2015.pdf"
      },
      {
        "title": "Mastering Apache Spark for Data Science",
        "author": "Andrew Morgan"
      }
    ],
    "practiceLinks": [
      {
        "title": "Spark MLlib Official Guide",
        "url": "https://spark.apache.org/docs/latest/ml-guide.html"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is the difference between a Transformer and an Estimator in Spark MLlib? (2 Marks)",
        "Explain Matrix Factorization using Alternating Least Squares (ALS) in Recommendation Systems. (2 Marks)",
        "Why are standard single-node ML libraries (like Scikit-Learn) unsuitable for Terabyte-scale datasets? (2 Marks)"
      ],
      "sixMarks": [
        "Explain Spark MLlib Pipeline components: VectorAssembler, Estimator, Transformer, Evaluator, and CrossValidator. (6 Marks)",
        "Write PySpark MLlib code to build an end-to-end Machine Learning Pipeline for predicting customer churn using Logistic Regression. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Scalable Machine Learning for Big Data. Detail distributed Gradient Descent algorithms, PySpark MLlib classification/regression pipelines, distributed K-Means clustering, Collaborative Filtering (ALS) recommendation engines, and model cross-validation tuning over Spark clusters. (10 Marks)"
      ]
    }
  },
  {
    "title": "Big Data Visualization",
    "slug": "big-data-big-data-visualization",
    "order": 12,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Learn visual storytelling and reporting: Chart selection principles, interactive dashboard design, and visualization tools (Tableau, Power BI, Apache Superset).",
    "subTopics": [
      "Importance of Data Visualization",
      "Visualization Techniques",
      "Charts and Graphs",
      "Dashboard Design",
      "Data Storytelling",
      "Visualization Tools (Tableau, Power BI, Apache Superset)"
    ],
    "prerequisiteTitles": [
      "Data Analytics Fundamentals"
    ],
    "learningObjectives": [
      "Select appropriate visual encodings (Bar chart, Line graph, Scatter plot, Heatmap, Treemap).",
      "Design interactive executive dashboards adhering to UI/UX and cognitive load guidelines.",
      "Connect visualization tools (Tableau, Power BI, Apache Superset) to SQL/Spark Data Warehouses."
    ],
    "notes": [
      {
        "title": "Visualization Principles, Dashboard UX & BI Tools",
        "content": "BIG DATA VISUALIZATION & BI DASHBOARDS\n\n1. Chart Selection Framework:\n   - Comparison: Bar Chart, Column Chart.\n   - Trend over Time: Line Graph, Area Chart.\n   - Distribution: Histogram, Box Plot.\n   - Relationship / Correlation: Scatter Plot, Bubble Chart.\n   - Part-to-Whole Composition: Pie Chart, Treemap, Stacked Bar Chart.\n\n2. BI Dashboard Best Practices:\n   - Top-left priority for key KPI summary cards.\n   - Use consistent, harmonious color palettes (avoid excessive colors).\n   - Enable interactive filters, slicers, and drill-down details.\n\n3. Visualization Tools Comparison:\n   - Tableau: Industry-leading visual analytics, drag-and-drop, rich chart library.\n   - Power BI: Seamless Microsoft ecosystem integration, DAX query language, cost-effective.\n   - Apache Superset: Open-source cloud-native data exploration platform connecting directly to SQL/Spark engines."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Hadoop: The Definitive Guide (4th Edition)",
        "author": "Tom White",
        "url": "https://piazza-resources.s3.amazonaws.com/ist3pwd6k8p5t/iu5gqbsh8re6mj/OReilly.Hadoop.The.Definitive.Guide.4th.Edition.2015.pdf"
      },
      {
        "title": "Storytelling with Data",
        "author": "Cole Nussbaumer Knaflic"
      }
    ],
    "practiceLinks": [
      {
        "title": "Tableau Free Public Gallery",
        "url": "https://public.tableau.com/"
      },
      {
        "title": "Microsoft Power BI Guided Learning",
        "url": "https://learn.microsoft.com/en-us/power-bi/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "When should you use a Line Graph vs a Scatter Plot? (2 Marks)",
        "Name three popular enterprise Data Visualization tools. (2 Marks)",
        "Define Data Storytelling in business intelligence reporting. (2 Marks)"
      ],
      "sixMarks": [
        "Describe dashboard design principles for executive reporting: layout hierarchy, color encoding, interactivity, and metric selection. (6 Marks)",
        "Compare Tableau, Power BI, and Apache Superset regarding data connectivity, open-source licensing, and Big Data engine integration. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Big Data Visualization & Business Intelligence. Detail visual perception laws (Gestalt principles), chart selection taxonomy, connecting BI tools to Hadoop/Hive/Spark SQL data lakes, and designing an interactive sales analytics dashboard. (10 Marks)"
      ]
    }
  },
  {
    "title": "Real-Time Big Data Analytics",
    "slug": "big-data-real-time-big-data-analytics",
    "order": 13,
    "estimatedHours": 6,
    "difficulty": "Advanced",
    "description": "Master event-driven stream processing: Apache Kafka architecture (Topics, Partitions, Producers, Consumers, Consumer Groups), Zookeeper, and real-time streaming engines.",
    "subTopics": [
      "Introduction to Stream Processing",
      "Real-Time Data Processing",
      "Apache Kafka",
      "Kafka Architecture",
      "Producers and Consumers",
      "Apache Storm Basics",
      "Real-Time Analytics Applications"
    ],
    "prerequisiteTitles": [
      "Apache Spark"
    ],
    "learningObjectives": [
      "Understand high-throughput event streaming and pub-sub messaging architecture.",
      "Analyze Apache Kafka components: Topics, Partitions, Offset logs, Producers, Consumers, Consumer Groups.",
      "Implement real-time streaming processing pipelines combining Kafka with Spark Streaming or Flink."
    ],
    "notes": [
      {
        "title": "Apache Kafka Event Streaming Architecture",
        "content": "REAL-TIME STREAMING & APACHE KAFKA\n\n1. Batch vs Stream Processing:\n   - Batch Processing: Processes bounded historical data in large chunks at scheduled intervals (Hadoop MapReduce). High latency (hours).\n   - Stream Processing: Processes unbounded real-time event streams record-by-record immediately as data arrives (Kafka + Spark Streaming/Flink). Ultra-low latency (milliseconds).\n\n2. Apache Kafka Core Architecture:\n   - Topic: Logical stream name to which records are published.\n   - Partition: Scalable distributed append-only commit log file for a Topic. Guarantees ordering within a single partition.\n   - Producer: Publishes event records to Kafka Topics.\n   - Consumer & Consumer Group: Reads events from Kafka Topics. Consumer Group balances partitions across consumers for parallel reading.\n   - Offset: Monotonically increasing integer ID assigned to each record in a partition log.\n\n3. Python Kafka Code Snippet:\n   from kafka import KafkaProducer, KafkaConsumer\n   # Producer\n   producer = KafkaProducer(bootstrap_servers='localhost:9092')\n   producer.send('sensor-events', b'{\"temp\": 28.5}')\n   # Consumer\n   consumer = KafkaConsumer('sensor-events', bootstrap_servers='localhost:9092')\n   for msg in consumer:\n       print(msg.value)"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Hadoop: The Definitive Guide (4th Edition)",
        "author": "Tom White",
        "url": "https://piazza-resources.s3.amazonaws.com/ist3pwd6k8p5t/iu5gqbsh8re6mj/OReilly.Hadoop.The.Definitive.Guide.4th.Edition.2015.pdf"
      },
      {
        "title": "Kafka: The Definitive Guide",
        "author": "Gwen Shapira, Neha Narkhede, Todd Palino"
      }
    ],
    "practiceLinks": [
      {
        "title": "Confluent Kafka Developer Guide",
        "url": "https://developer.confluent.io/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between Batch Processing and Real-Time Stream Processing. (2 Marks)",
        "Define Kafka Topic, Partition, and Offset. (2 Marks)",
        "What is a Consumer Group in Apache Kafka? (2 Marks)"
      ],
      "sixMarks": [
        "Explain Apache Kafka Architecture with block diagram detailing Cluster Brokers, Topics, Partitions, Producers, Consumers, and Zookeeper coordination. (6 Marks)",
        "Write Python code using `kafka-python` library to build a Producer sending JSON logs and a Consumer reading from a Kafka topic. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Real-Time Big Data Analytics. Detail event-driven architectures, Kafka commit log storage mechanics, Consumer group rebalancing protocols, Kafka + Spark Structured Streaming integration, sliding time window aggregations, and real-time fraud detection applications. (10 Marks)"
      ]
    }
  },
  {
    "title": "Cloud-Based Big Data Platforms",
    "slug": "big-data-cloud-based-big-data-platforms",
    "order": 14,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Explore cloud data lakehouse platforms: AWS Big Data (EMR, Redshift, S3, Glue), Google Cloud (BigQuery, Dataproc, Dataflow), and Azure (HDInsight, Synapse Analytics).",
    "subTopics": [
      "Big Data on Cloud",
      "Cloud Storage Concepts",
      "AWS Big Data Services",
      "Google Cloud Big Data Services",
      "Microsoft Azure Big Data Services",
      "Cloud Data Processing"
    ],
    "prerequisiteTitles": [
      "Big Data Architecture"
    ],
    "learningObjectives": [
      "Understand Cloud Data Lakes (Amazon S3, ADLS Gen2, GCS) vs Cloud Data Warehouses (Redshift, BigQuery, Snowflake).",
      "Deploy managed Hadoop/Spark clusters using AWS EMR, GCP Dataproc, and Azure HDInsight.",
      "Build serverless ETL pipelines using AWS Glue and GCP Dataflow."
    ],
    "notes": [
      {
        "title": "Cloud Big Data Ecosystem: AWS, GCP & Azure",
        "content": "CLOUD-BASED BIG DATA PLATFORMS\n\n1. Cloud Storage & Data Lakes:\n   - Object Storage: Amazon S3, Google Cloud Storage (GCS), Azure Blob Storage. Infinite scaling, decoupled compute and storage.\n\n2. Cloud Big Data Service Mapping:\n   ----------------------------------------------------------------------\n   Category            | AWS               | GCP                | Azure\n   ----------------------------------------------------------------------\n   Managed Hadoop/Spark| Amazon EMR        | Cloud Dataproc     | Azure HDInsight\n   Data Warehouse      | Amazon Redshift   | BigQuery           | Azure Synapse\n   Serverless ETL      | AWS Glue          | Cloud Dataflow     | Azure Data Factory\n   Event Streaming     | Amazon Kinesis    | Pub/Sub            | Event Hubs\n   ----------------------------------------------------------------------\n\n3. Decoupled Compute & Storage Rationale:\n   Separating storage (S3) from compute (EMR/Spark) allows independent scaling, reducing infrastructure costs significantly compared to traditional co-located HDFS clusters."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Hadoop: The Definitive Guide (4th Edition)",
        "author": "Tom White",
        "url": "https://piazza-resources.s3.amazonaws.com/ist3pwd6k8p5t/iu5gqbsh8re6mj/OReilly.Hadoop.The.Definitive.Guide.4th.Edition.2015.pdf"
      },
      {
        "title": "Cloud Analytics with Google Cloud Platform",
        "author": "Tavish Srivastava"
      }
    ],
    "practiceLinks": [
      {
        "title": "AWS Big Data Tutorials",
        "url": "https://aws.amazon.com/big-data/"
      },
      {
        "title": "Google Cloud BigQuery Documentation",
        "url": "https://cloud.google.com/bigquery/docs"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Why is decoupling compute and storage beneficial in cloud big data architectures? (2 Marks)",
        "Map corresponding Managed Spark and Data Warehouse services in AWS and GCP. (2 Marks)",
        "What is a Cloud Data Lakehouse? (2 Marks)"
      ],
      "sixMarks": [
        "Compare AWS Big Data services (EMR, Redshift, S3, Glue) and GCP Big Data services (Dataproc, BigQuery, GCS, Dataflow). (6 Marks)",
        "Explain serverless data warehousing using Google Cloud BigQuery architecture detailing columnar storage and Dremel query engine. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Cloud Big Data Infrastructure. Detail Cloud Data Lake design principles, serverless ETL pipelines (AWS Glue/Azure Data Factory), cloud data warehouse columnar indexing (Redshift/Snowflake), auto-scaling EMR clusters, and cloud security compliance. (10 Marks)"
      ]
    }
  },
  {
    "title": "Big Data Security and Privacy",
    "slug": "big-data-big-data-security-and-privacy",
    "order": 15,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Learn security protocols in distributed big data: Authentication (Kerberos), Authorization (Apache Ranger, Knox), Data Encryption (at-rest & in-transit), GDPR compliance, and privacy preserving methods.",
    "subTopics": [
      "Security Challenges in Big Data",
      "Data Privacy",
      "Authentication and Authorization",
      "Data Encryption",
      "Secure Data Storage",
      "Ethical Issues in Big Data"
    ],
    "prerequisiteTitles": [
      "Hadoop Ecosystem"
    ],
    "learningObjectives": [
      "Understand Kerberos ticket-based authentication for securing Hadoop clusters.",
      "Implement role-based access control (RBAC) and column/row masking using Apache Ranger.",
      "Comply with data privacy regulations (GDPR, CCPA) using Data Anonymization and Differential Privacy."
    ],
    "notes": [
      {
        "title": "Hadoop Security Stack: Kerberos, Apache Ranger & Encryption",
        "content": "BIG DATA SECURITY & PRIVACY\n\n1. Hadoop Security Pillars:\n   - Authentication (Who are you?): Kerberos KDC (Key Distribution Center) ticket-based user and service authentication.\n   - Perimeter Security: Apache Knox Gateway (Reverse proxy enforcing single point of entry).\n   - Authorization (What can you do?): Apache Ranger (Fine-grained role-based access control for Hive, HDFS, HBase).\n   - Data Protection: Encryption in-transit (TLS/SSL) and Encryption at-rest (HDFS Transparent Data Encryption - TDE).\n\n2. Data Privacy & Compliance:\n   - GDPR / CCPA Regulations: Right to be Forgotten, Data Minimization, Consent Management.\n   - Anonymization Techniques: Masking, Pseudonymization, Generalization, Differential Privacy."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Hadoop: The Definitive Guide (4th Edition)",
        "author": "Tom White",
        "url": "https://piazza-resources.s3.amazonaws.com/ist3pwd6k8p5t/iu5gqbsh8re6mj/OReilly.Hadoop.The.Definitive.Guide.4th.Edition.2015.pdf"
      },
      {
        "title": "Big Data Security",
        "author": "Jianpei Ye"
      }
    ],
    "practiceLinks": [
      {
        "title": "Apache Ranger Documentation",
        "url": "https://ranger.apache.org/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is Kerberos and how is it used in securing Hadoop clusters? (2 Marks)",
        "Explain the role of Apache Ranger in Big Data security. (2 Marks)",
        "What is HDFS Transparent Data Encryption (TDE)? (2 Marks)"
      ],
      "sixMarks": [
        "Explain the four pillars of Hadoop Security: Authentication (Kerberos), Perimeter (Knox), Authorization (Ranger), and Audit/Encryption. (6 Marks)",
        "Describe Data Anonymization techniques (Masking, Pseudonymization, K-Anonymity) for GDPR privacy compliance. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Big Data Security & Privacy Engineering. Detail Kerberos ticket granting workflow (TGT), Apache Ranger fine-grained policy enforcement for Hive/HDFS, TLS network encryption, HDFS TDE key management (KMS), and ethical AI/privacy frameworks. (10 Marks)"
      ]
    }
  },
  {
    "title": "Big Data Applications and Projects",
    "slug": "big-data-big-data-applications-and-projects",
    "order": 16,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "End-to-end industrial project implementation: Social Media sentiment streams, Healthcare predictive analytics, E-Commerce recommendations, Real-time Fraud Detection, and IoT smart grid telemetry.",
    "subTopics": [
      "Social Media Analytics",
      "Healthcare Analytics",
      "Financial Data Analytics",
      "E-Commerce Analytics",
      "Recommendation Systems",
      "Fraud Detection Systems",
      "IoT Data Analytics",
      "Big Data Project Development"
    ],
    "prerequisiteTitles": [
      "Machine Learning for Big Data",
      "Real-Time Big Data Analytics"
    ],
    "learningObjectives": [
      "Design end-to-end Big Data project pipelines from streaming ingestion to cloud analytics dashboards.",
      "Implement real-time Credit Card Fraud Detection using Kafka + Spark Streaming + MLlib.",
      "Build e-commerce customer segmentation and recommendation engines."
    ],
    "notes": [
      {
        "title": "Industrial Big Data Projects & Fraud Detection Architecture",
        "content": "BIG DATA INDUSTRIAL PROJECTS\n\n1. Real-Time Credit Card Fraud Detection Blueprint:\n   - Data Ingestion: Kafka Producer streams transaction events (Amount, Location, Timestamp, User_ID).\n   - Real-Time Compute: Spark Structured Streaming consumes Kafka stream.\n   - ML Model Scoring: Applies trained Random Forest / XGBoost model from Spark MLlib to evaluate fraud probability score.\n   - Real-Time Action: If score > 0.85, triggers immediate SMS alert & blocks transaction via Redis fast-lookup.\n   - Storage: Archives transaction events into Delta Lake / HDFS for batch retraining.\n\n2. Social Media Sentiment Analytics:\n   Twitter/X API -> Apache Flume / Kafka -> Spark Streaming (NLTK/VADER Sentiment Scoring) -> Elasticsearch -> Kibana Real-Time Dashboard."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Hadoop: The Definitive Guide (4th Edition)",
        "author": "Tom White",
        "url": "https://piazza-resources.s3.amazonaws.com/ist3pwd6k8p5t/iu5gqbsh8re6mj/OReilly.Hadoop.The.Definitive.Guide.4th.Edition.2015.pdf"
      },
      {
        "title": "Big Data in Practice",
        "author": "Bernard Marr"
      }
    ],
    "practiceLinks": [
      {
        "title": "Kaggle Big Data Datasets & Projects",
        "url": "https://www.kaggle.com/datasets"
      },
      {
        "title": "GitHub Big Data Project Repositories",
        "url": "https://github.com/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Outline data pipeline steps for a Real-Time Social Media Sentiment Analysis system. (2 Marks)",
        "What are the main components of a Real-Time Fraud Detection System? (2 Marks)",
        "Explain IoT Data Analytics telemetry pipeline. (2 Marks)"
      ],
      "sixMarks": [
        "Design system architecture for an E-Commerce Recommendation Engine using Apache Spark MLlib ALS algorithm and MongoDB. (6 Marks)",
        "Explain end-to-end Real-Time Fraud Detection pipeline using Kafka, Spark Streaming, HBase, and Dashboard alerts. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Industrial Big Data Projects. Detail project architecture blueprints, data pipeline ingestion, real-time stream processing, distributed ML scoring, BI dashboard integration, and cost optimization for 3 industrial case studies (Healthcare, E-Commerce, Financial Fraud). (10 Marks)"
      ]
    }
  }
];
