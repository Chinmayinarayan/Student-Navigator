module.exports = [
  {
    "title": "Introduction to Professional Aptitude",
    "slug": "aptitude-reasoning-introduction-to-professional-aptitude",
    "order": 1,
    "estimatedHours": 3,
    "difficulty": "Beginner",
    "description": "Master foundational concepts of aptitude assessments, placement test formats, problem-solving methodologies, time allocation strategies, and accuracy optimization techniques.",
    "subTopics": [
      "Introduction to Aptitude Tests",
      "Importance of Aptitude in Career",
      "Placement Aptitude Preparation",
      "Types of Aptitude Questions",
      "Problem Solving Approach",
      "Time Management Strategies",
      "Accuracy Improvement Techniques"
    ],
    "prerequisiteTitles": [],
    "learningObjectives": [
      "Understand the structure, timing, and cutoff parameters of campus placement aptitude tests.",
      "Implement structured problem-solving workflows: Read -> Deconstruct -> Formulate -> Calculate -> Verify.",
      "Apply time-per-question management rules and option elimination techniques to minimize negative marking."
    ],
    "notes": [
      {
        "title": "Overview of Aptitude Tests & Time Management Framework",
        "content": "INTRODUCTION TO PROFESSIONAL APTITUDE & STRATEGY\n\n1. Structure of Placement Aptitude Tests:\n   - Quantitative Aptitude: Numerical ability, arithmetic, algebra, geometry, modern math.\n   - Logical Reasoning: Analytical patterns, arrangements, coding-decoding, deductions.\n   - Verbal Ability: Grammar, reading comprehension, vocabulary, critical reasoning.\n\n2. Time Management Formulas:\n   - Average Time per Question: T_avg = Total Time (in seconds) / Total Number of Questions.\n   - Target speed for Quantitative questions: 60 - 90 seconds per question.\n   - Target speed for Logical Reasoning: 45 - 60 seconds per question.\n\n3. Effective Score Calculation with Negative Marking:\n   - Net Marks = (Correct Answers * Positive Marks) - (Incorrect Answers * Negative Penalty).\n   - Accuracy Rate (%) = (Number of Correct Answers / Total Attempted Questions) * 100.\n\nWORKED EXAMPLE:\nProblem: A candidate answers 50 questions in a 60-minute placement assessment. The marking scheme awards +1 mark for every correct answer and deducts 0.25 marks for every wrong answer. If the candidate gets 40 answers correct and 10 wrong, calculate the net score, accuracy percentage, and average time spent per attempted question.\n\nSolution:\n1. Net Score = (40 * 1) - (10 * 0.25) = 40 - 2.5 = 37.5 marks.\n2. Accuracy Rate = (40 / 50) * 100 = 80%.\n3. Total Time Available = 60 minutes = 3600 seconds.\n4. Time per attempted question = 3600 / 50 = 72 seconds per question."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Quantitative Aptitude for Competitive Examinations",
        "author": "R.S. Aggarwal"
      },
      {
        "title": "How to Prepare for Quantitative Aptitude",
        "author": "Arun Sharma"
      }
    ],
    "practiceLinks": [
      {
        "title": "IndiaBIX Aptitude Preparation",
        "url": "https://www.indiabix.com/aptitude/questions-and-answers/"
      },
      {
        "title": "GeeksforGeeks Placement Aptitude",
        "url": "https://www.geeksforgeeks.org/placements-gq/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What are the three core sections of standard campus placement aptitude tests? (2 Marks)",
        "Explain the formula for calculating effective score under negative marking schemes. (2 Marks)",
        "Differentiate between Speed and Accuracy in competitive examinations. (2 Marks)"
      ],
      "sixMarks": [
        "Explain the 5-step structured problem-solving framework (Read, Deconstruct, Formulate, Calculate, Verify) with an annotated numerical scenario. (6 Marks)",
        "Design a 60-minute examination strategy for a paper with 20 Quant, 20 Logical, and 20 Verbal questions, detailing time allocation and skip rules. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive guide to Campus Placement Aptitude Preparation. Analyze corporate assessment patterns (TCS, Infosys, Accenture), explain strategies to overcome test anxiety, optimize time per question, and maximize net score with negative marking. (10 Marks)"
      ]
    }
  },
  {
    "title": "Number System",
    "slug": "aptitude-reasoning-number-system",
    "order": 2,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Understand classification of numbers, divisibility criteria, prime factorization, highest common factor (HCF), least common multiple (LCM), and unit digit / remainder theorems.",
    "subTopics": [
      "Natural Numbers",
      "Whole Numbers",
      "Integers",
      "Rational and Irrational Numbers",
      "Divisibility Rules",
      "Factors and Multiples",
      "Prime Numbers",
      "HCF and LCM",
      "Remainder Concepts"
    ],
    "prerequisiteTitles": [
      "Introduction to Professional Aptitude"
    ],
    "learningObjectives": [
      "Apply divisibility tests for numbers 2 through 13 for fast reduction.",
      "Calculate HCF and LCM of whole numbers and fractions using prime factorization.",
      "Solve advanced remainder problems using Euler's Totient function and Fermat's Little Theorem."
    ],
    "notes": [
      {
        "title": "Number System Core Principles, Formulas & Worked Problems",
        "content": "NUMBER SYSTEM FORMULAS & SHORTCUTS\n\n1. Classification & Divisibility Rules:\n   - Divisibility by 3 & 9: Sum of all digits must be divisible by 3 or 9.\n   - Divisibility by 4: Last two digits form a number divisible by 4.\n   - Divisibility by 11: Difference between sum of digits at odd places and sum at even places is 0 or a multiple of 11.\n\n2. HCF & LCM Formulas:\n   - Product of Two Numbers = HCF * LCM\n   - HCF of Fractions = HCF(Numerators) / LCM(Denominators)\n   - LCM of Fractions = LCM(Numerators) / HCF(Denominators)\n\n3. Remainder Theorem & Fermat's Little Theorem:\n   - Dividend = (Divisor * Quotient) + Remainder\n   - Fermat's Theorem: a^(p-1) mod p = 1 (where p is prime and gcd(a,p) = 1).\n\nWORKED EXAMPLES:\n\nProblem 1 (Fractional HCF & LCM):\nFind the HCF and LCM of fractions 2/3, 8/9, and 16/81.\nSolution:\n- HCF = HCF(2, 8, 16) / LCM(3, 9, 81) = 2 / 81.\n- LCM = LCM(2, 8, 16) / HCF(3, 9, 81) = 16 / 3.\n\nProblem 2 (Remainder Problem):\nFind the remainder when 3^40 is divided by 7.\nSolution:\n1. By Fermat's Little Theorem, 3^(7-1) ≡ 3^6 ≡ 1 (mod 7).\n2. Express power in terms of 6: 40 = (6 * 6) + 4.\n3. 3^40 = (3^6)^6 * 3^4 ≡ (1)^6 * 81 (mod 7) ≡ 81 mod 7.\n4. 81 = (7 * 11) + 4 => Remainder = 4."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Quantitative Aptitude for Competitive Examinations",
        "author": "R.S. Aggarwal"
      },
      {
        "title": "Fast Track Objective Arithmetic",
        "author": "Rajesh Verma"
      }
    ],
    "practiceLinks": [
      {
        "title": "IndiaBIX Number System Practice",
        "url": "https://www.indiabix.com/aptitude/numbers/"
      },
      {
        "title": "GeeksforGeeks Number System Questions",
        "url": "https://www.geeksforgeeks.org/number-system-gq/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State the divisibility rule for 11 with an example. (2 Marks)",
        "Write the relationship between HCF, LCM, and product of two numbers. (2 Marks)",
        "What is Fermat's Little Theorem? State its formula. (2 Marks)"
      ],
      "sixMarks": [
        "Calculate the HCF and LCM of 14/33, 42/55, and 21/22. Show step-by-step evaluation. (6 Marks)",
        "Find the largest 4-digit number which when divided by 12, 15, 18, and 27 leaves a remainder of 5 in each case. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive Quantitative Guide on Number Theory. Detail divisibility rules up to 13, prime factorization techniques, HCF/LCM of integers and fractions, Euler's Totient function, and solve 4 complex remainder problems step by step. (10 Marks)"
      ]
    }
  },
  {
    "title": "Arithmetic Aptitude",
    "slug": "aptitude-reasoning-arithmetic-aptitude",
    "order": 3,
    "estimatedHours": 5,
    "difficulty": "Beginner",
    "description": "Master core quantitative arithmetic topics including percentages, profit and loss, interest calculations, ratio and proportion, averages, mixtures, allegations, partnerships, and age problems.",
    "subTopics": [
      "Percentage",
      "Profit and Loss",
      "Simple Interest",
      "Compound Interest",
      "Ratio and Proportion",
      "Average",
      "Mixtures and Allegations",
      "Partnership Problems",
      "Ages Problems"
    ],
    "prerequisiteTitles": [
      "Number System"
    ],
    "learningObjectives": [
      "Solve percentage change, profit percentage, mark up, and discount problems rapidly.",
      "Calculate Simple Interest (SI) and Compound Interest (CI) using shortcut formulas.",
      "Apply Allegation Rule: (Cheaper Price - Mixture Price) / (Mixture Price - Dearer Price) = Quantity of Dearer / Quantity of Cheaper."
    ],
    "notes": [
      {
        "title": "Arithmetic Formulas, Allegation Method & Solved Problems",
        "content": "ARITHMETIC SHORTCUT FORMULAS\n\n1. Percentage & Profit/Loss:\n   - Percentage Change = (|Final - Initial| / Initial) * 100\n   - Profit % = (Profit / Cost Price) * 100\n   - Selling Price (SP) = Cost Price (CP) * (100 + Profit%) / 100\n\n2. Simple & Compound Interest:\n   - Simple Interest (SI) = (P * R * T) / 100\n   - Compound Amount (A) = P * (1 + R / 100)^T\n   - Difference between CI and SI for 2 Years = P * (R / 100)^2\n\n3. Mixture and Allegation Rule:\n   (Cheaper Quantity / Dearer Quantity) = (Dearer Price - Mixture Price) / (Mixture Price - Cheaper Price)\n\nWORKED EXAMPLES:\n\nProblem 1 (Simple Interest):\nA sum of money doubles itself in 5 years at simple interest. In how many years will it become 4 times itself at the same rate?\nSolution:\n1. Let Principal = P. Amount = 2P => Interest SI = P.\n2. Rate R = (SI * 100) / (P * T) = (P * 100) / (P * 5) = 20% per annum.\n3. For Amount = 4P => Required Interest SI = 3P.\n4. Time T = (3P * 100) / (P * 20) = 300 / 20 = 15 years.\n\nProblem 2 (Allegation Method):\nIn what ratio must rice at $40 per kg be mixed with rice at $60 per kg so that the mixture costs $45 per kg?\nSolution:\n1. Cheaper Price (C) = 40, Dearer Price (D) = 60, Mean Price (M) = 45.\n2. (Dearer Price - Mean Price) = 60 - 45 = 15.\n3. (Mean Price - Cheaper Price) = 45 - 40 = 5.\n4. Ratio of Cheaper : Dearer = 15 : 5 = 3 : 1."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Quantitative Aptitude for Competitive Examinations",
        "author": "R.S. Aggarwal"
      },
      {
        "title": "Fast Track Objective Arithmetic",
        "author": "Rajesh Verma"
      }
    ],
    "practiceLinks": [
      {
        "title": "IndiaBIX Percentage Questions",
        "url": "https://www.indiabix.com/aptitude/percentage/"
      },
      {
        "title": "IndiaBIX Profit and Loss",
        "url": "https://www.indiabix.com/aptitude/profit-and-loss/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State the formula for difference between Compound Interest and Simple Interest for 2 years. (2 Marks)",
        "Write the Alligation formula ratio statement. (2 Marks)",
        "Define Profit Percentage and Discount Percentage formulas. (2 Marks)"
      ],
      "sixMarks": [
        "A trader marks his goods 25% above cost price and allows a discount of 10% on the marked price. Find his net profit percentage. If CP is $800, find profit in dollars. (6 Marks)",
        "A milkman mixes 20 liters of water with 80 liters of milk. He sells 25 liters of this mixture and adds 15 liters of pure milk. Find the final ratio of milk to water. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive Quantitative Guide on Arithmetic Topics. Explain Percentage fraction equivalents, Profit & Loss with multiple discounts, Compound Interest with annual vs semi-annual compounding, Alligation rule derivations, and solve 4 benchmark placement problems step by step. (10 Marks)"
      ]
    }
  },
  {
    "title": "Time and Work",
    "slug": "aptitude-reasoning-time-and-work",
    "order": 4,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Learn work efficiency principles, unit work method, combined work equations, wage distribution, pipes & cisterns, and time optimization techniques.",
    "subTopics": [
      "Work Efficiency",
      "Work and Wages",
      "Pipes and Cisterns",
      "Combined Work Problems",
      "Work Distribution Problems",
      "Time Optimization Techniques"
    ],
    "prerequisiteTitles": [
      "Arithmetic Aptitude"
    ],
    "learningObjectives": [
      "Convert individual completion times into unit daily work rates.",
      "Solve combined work equations involving alternate day work and person leaving/joining.",
      "Calculate net filling/emptying rates for pipes and cisterns with inlet and outlet pipes."
    ],
    "notes": [
      {
        "title": "Time & Work Unit Rate Method, Formulas & Solved Problems",
        "content": "TIME AND WORK FORMULAS & PRINCIPLES\n\n1. Work & Efficiency Rules:\n   - Work Done = Efficiency * Time Taken.\n   - If A can do a work in x days, A's 1 day work = 1 / x.\n   - Combined Time for A and B = (x * y) / (x + y) days.\n   - Man-Days Formula: (M1 * D1 * H1) / W1 = (M2 * D2 * H2) / W2.\n\n2. Work and Wages:\n   - Wages are distributed in direct proportion to the ratio of work done per day (efficiency ratio).\n\n3. Pipes and Cisterns:\n   - Inlet Pipe: Adds work (+1 / x).\n   - Outlet Pipe: Removes work (-1 / y).\n   - Net Fill Rate per hour = (1 / x) - (1 / y).\n\nWORKED EXAMPLES:\n\nProblem 1 (Combined Work & Leaving):\nA can complete a piece of work in 12 days and B can complete it in 15 days. They work together for 4 days, after which A leaves. How many days will B take to complete the remaining work alone?\nSolution:\n1. Total Work = LCM(12, 15) = 60 units.\n2. A's Efficiency = 60 / 12 = 5 units/day. B's Efficiency = 60 / 15 = 4 units/day.\n3. Combined Rate (A + B) = 5 + 4 = 9 units/day.\n4. Work done in 4 days = 4 * 9 = 36 units.\n5. Remaining Work = 60 - 36 = 24 units.\n6. Time taken by B alone = 24 / 4 = 6 days.\n\nProblem 2 (Pipes & Cisterns):\nPipe A can fill a tank in 10 hours and Pipe B can empty it in 15 hours. If both pipes are opened together, how long will it take to fill the tank?\nSolution:\n1. Net 1 hour work = (1 / 10) - (1 / 15) = (3 - 2) / 30 = 1 / 30.\n2. Time required to fill the tank = 30 hours."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Quantitative Aptitude for Competitive Examinations",
        "author": "R.S. Aggarwal"
      },
      {
        "title": "Fast Track Objective Arithmetic",
        "author": "Rajesh Verma"
      }
    ],
    "practiceLinks": [
      {
        "title": "IndiaBIX Time and Work Practice",
        "url": "https://www.indiabix.com/aptitude/time-and-work/"
      },
      {
        "title": "IndiaBIX Pipes and Cisterns",
        "url": "https://www.indiabix.com/aptitude/pipes-and-cistern/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State the relationship between Time Taken and Efficiency. (2 Marks)",
        "State the Man-Days-Hours work formula. (2 Marks)",
        "How are wages distributed among workers working for the same duration? (2 Marks)"
      ],
      "sixMarks": [
        "3 men or 5 women can do a work in 12 days. How long will 6 men and 5 women take to complete the same work? Show step-by-step solution. (6 Marks)",
        "Pipe A fills a tank in 6 hours and Pipe B in 8 hours. Pipe C empties it in 12 hours. If all three are opened at 8:00 AM, at what time will the tank be full? (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive Quantitative Guide on Time & Work. Detail the LCM unit work method, alternate day work schedules, negative work efficiency in cisterns, efficiency ratio calculations, and solve 4 complex placement problems step by step. (10 Marks)"
      ]
    }
  },
  {
    "title": "Time Speed and Distance",
    "slug": "aptitude-reasoning-time-speed-and-distance",
    "order": 5,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master speed distance time fundamentals, relative motion, average speed formulas, train intersection problems, upstream/downstream boat concepts, circular tracks, and races.",
    "subTopics": [
      "Basic Speed Concepts",
      "Distance Calculation",
      "Relative Speed",
      "Average Speed",
      "Trains Problems",
      "Boats and Streams",
      "Circular Motion Problems",
      "Race Problems"
    ],
    "prerequisiteTitles": [
      "Time and Work"
    ],
    "learningObjectives": [
      "Convert speed between km/h and m/s (multiply by 5/18 or 18/5).",
      "Calculate relative speed for objects moving in same vs opposite directions.",
      "Solve boat and stream problems involving downstream (u+v) and upstream (u-v) speeds."
    ],
    "notes": [
      {
        "title": "Time, Speed & Distance Formulas, Relative Speed & Solved Problems",
        "content": "TIME SPEED DISTANCE SHORTCUT FORMULAS\n\n1. Conversion & Basic Speed Rules:\n   - Speed = Distance / Time\n   - Convert km/h to m/s: Multiply by 5 / 18\n   - Convert m/s to km/h: Multiply by 18 / 5\n   - Average Speed (Equal Distances) = (2 * x * y) / (x + y)\n\n2. Relative Speed Rules:\n   - Moving in Opposite Directions: Relative Speed = Speed1 + Speed2\n   - Moving in Same Direction: Relative Speed = |Speed1 - Speed2|\n\n3. Boats and Streams:\n   - Let Boat Speed = u km/h, Stream Speed = v km/h\n   - Downstream Speed (D) = u + v\n   - Upstream Speed (U) = u - v\n   - Boat Speed in still water (u) = (D + U) / 2\n   - Stream Speed (v) = (D - U) / 2\n\nWORKED EXAMPLES:\n\nProblem 1 (Trains Crossing Platform):\nA train 150 meters long traveling at 54 km/h passes a platform 250 meters long. Calculate the time taken to cross the platform completely.\nSolution:\n1. Speed in m/s = 54 * (5 / 18) = 15 m/s.\n2. Total Distance = Length of Train + Length of Platform = 150 + 250 = 400 meters.\n3. Time Taken = Total Distance / Speed = 400 / 15 = 26.67 seconds.\n\nProblem 2 (Boats & Streams):\nA boat travels 24 km downstream in 2 hours and 24 km upstream in 4 hours. Find the speed of the boat in still water and the speed of the stream.\nSolution:\n1. Downstream Speed D = 24 / 2 = 12 km/h.\n2. Upstream Speed U = 24 / 4 = 6 km/h.\n3. Speed of boat in still water u = (12 + 6) / 2 = 9 km/h.\n4. Speed of stream v = (12 - 6) / 2 = 3 km/h."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Quantitative Aptitude for Competitive Examinations",
        "author": "R.S. Aggarwal"
      },
      {
        "title": "How to Prepare for Quantitative Aptitude",
        "author": "Arun Sharma"
      }
    ],
    "practiceLinks": [
      {
        "title": "IndiaBIX Time Speed Distance Practice",
        "url": "https://www.indiabix.com/aptitude/time-and-distance/"
      },
      {
        "title": "IndiaBIX Problems on Trains",
        "url": "https://www.indiabix.com/aptitude/problems-on-trains/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "How do you convert speed from km/h to m/s? (2 Marks)",
        "State the relative speed formula for two objects moving in opposite directions. (2 Marks)",
        "State the formulas for boat speed in still water and stream speed given upstream and downstream rates. (2 Marks)"
      ],
      "sixMarks": [
        "Two trains of lengths 120m and 180m are running on parallel tracks in opposite directions at speeds of 40 km/h and 50 km/h respectively. In how many seconds will they cross each other completely? (6 Marks)",
        "A man can row 6 km/h in still water. If the river flows at 2 km/h, it takes him 3 hours to row to a place and come back. Find the distance to the place. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive Quantitative Guide on Time Speed Distance. Detail unit conversion factors, average speed derivations, relative speed dynamics in trains and circular tracks, boat and stream vectors, and solve 4 placement problems step by step. (10 Marks)"
      ]
    }
  },
  {
    "title": "Permutation and Combination",
    "slug": "aptitude-reasoning-permutation-and-combination",
    "order": 6,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Master counting principles, factorials, permutations (arrangements), combinations (selections), circular permutations, restricted arrangements, and practical applications.",
    "subTopics": [
      "Fundamental Counting Principle",
      "Factorials",
      "Permutations",
      "Combinations",
      "Arrangement Problems",
      "Selection Problems",
      "Real-World Applications"
    ],
    "prerequisiteTitles": [
      "Time Speed and Distance"
    ],
    "learningObjectives": [
      "Apply Multiplication Principle (AND) and Addition Principle (OR) in counting scenarios.",
      "Compute permutations nPr = n! / (n-r)! and combinations nCr = n! / (r! * (n-r)!).",
      "Solve circular arrangement problems ((n-1)!) and word formation problems with repeated letters."
    ],
    "notes": [
      {
        "title": "Permutations & Combinations Principles, Formulas & Solved Problems",
        "content": "COMBINATORICS FORMULAS & SHORTCUTS\n\n1. Fundamental Principles of Counting:\n   - Multiplication Principle (AND): If event A occurs in m ways and event B in n ways, both occur in m * n ways.\n   - Addition Principle (OR): If event A occurs in m ways and event B in n ways independently, either occurs in m + n ways.\n\n2. Permutations & Combinations Formulas:\n   - Permutation (Arrangement): nPr = n! / (n - r)!\n   - Combination (Selection): nCr = n! / (r! * (n - r)!)\n   - Circular Permutations of n distinct items = (n - 1)!\n   - Permutations with Repetitions: n! / (p! * q! * r!) where p, q, r are frequencies of repeating items.\n\nWORKED EXAMPLES:\n\nProblem 1 (Word Rearrangement with Repetitions):\nIn how many different ways can the letters of the word 'LEADER' be arranged?\nSolution:\n1. Total number of letters n = 6.\n2. Letter frequencies: L:1, E:2, A:1, D:1, R:1.\n3. Total arrangements = 6! / (2!) = 720 / 2 = 360 ways.\n\nProblem 2 (Committee Selection with Restrictions):\nOut of 5 men and 4 women, a committee of 3 persons is to be formed such that it contains at least 2 men. In how many ways can this be done?\nSolution:\n1. Case 1: 2 Men and 1 Woman = 5C2 * 4C1 = 10 * 4 = 40 ways.\n2. Case 2: 3 Men and 0 Women = 5C3 * 4C0 = 10 * 1 = 10 ways.\n3. Total ways = 40 + 10 = 50 ways."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Quantitative Aptitude for Competitive Examinations",
        "author": "R.S. Aggarwal"
      },
      {
        "title": "How to Prepare for Quantitative Aptitude",
        "author": "Arun Sharma"
      }
    ],
    "practiceLinks": [
      {
        "title": "IndiaBIX Permutation and Combination Practice",
        "url": "https://www.indiabix.com/aptitude/permutation-and-combination/"
      },
      {
        "title": "GeeksforGeeks Combinatorics",
        "url": "https://www.geeksforgeeks.org/combinatorics-gq/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State the main difference between Permutation and Combination. (2 Marks)",
        "Write the formula for circular permutation of n distinct objects. (2 Marks)",
        "State the fundamental multiplication principle of counting. (2 Marks)"
      ],
      "sixMarks": [
        "How many 4-digit numbers can be formed using the digits 0, 1, 2, 3, 4, 5 without repetition? How many of these are even? (6 Marks)",
        "A team of 5 players is to be chosen from 7 boys and 6 girls. In how many ways can this be done if the team must have at least 3 boys and at least 1 girl? (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive Quantitative Guide on Permutations and Combinations. Explain Factorial algebra, Permutations with restrictions (vowels together / separate), Circular seating formulas, Derangements formula, and solve 4 complex placement problems step by step. (10 Marks)"
      ]
    }
  },
  {
    "title": "Probability Aptitude",
    "slug": "aptitude-reasoning-probability-aptitude",
    "order": 7,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Understand sample spaces, event definitions, addition/multiplication probability rules, conditional probability P(A|B), dice rolling, card drawing, and coin toss problems.",
    "subTopics": [
      "Basic Probability Concepts",
      "Events and Outcomes",
      "Probability Rules",
      "Conditional Probability Basics",
      "Dice Problems",
      "Card Problems",
      "Coin Problems"
    ],
    "prerequisiteTitles": [
      "Permutation and Combination"
    ],
    "learningObjectives": [
      "Calculate P(E) = n(E) / n(S) for classic random experiments.",
      "Use Addition Rule P(A u B) = P(A) + P(B) - P(A n B) and Multiplication Rule for independent events P(A n B) = P(A) * P(B).",
      "Solve Bayes' theorem and conditional probability P(A|B) = P(A n B) / P(B) placement questions."
    ],
    "notes": [
      {
        "title": "Probability Principles, Rules & Worked Examples",
        "content": "PROBABILITY FORMULAS & LAWS\n\n1. Fundamental Definitions:\n   - Probability of Event E: P(E) = Number of Favorable Outcomes n(E) / Total Sample Space Outcomes n(S).\n   - Complementary Event: P(E') = 1 - P(E).\n   - Range of Probability: 0 <= P(E) <= 1.\n\n2. Probability Rules:\n   - Addition Rule: P(A u B) = P(A) + P(B) - P(A n B).\n   - Independent Events: P(A n B) = P(A) * P(B).\n   - Conditional Probability: P(A | B) = P(A n B) / P(B) provided P(B) > 0.\n\n3. Standard Pack of 52 Cards:\n   - 4 Suits: Spades (13), Hearts (13), Diamonds (13), Clubs (13).\n   - 26 Red cards (Hearts, Diamonds), 26 Black cards (Spades, Clubs).\n   - 12 Face cards (4 Kings, 4 Queens, 4 Jacks).\n\nWORKED EXAMPLES:\n\nProblem 1 (Dice Probability):\nTwo fair dice are thrown simultaneously. What is the probability that the sum of the numbers obtained is 8?\nSolution:\n1. Total outcomes n(S) = 6 * 6 = 36.\n2. Favorable outcomes for sum = 8: (2,6), (3,5), (4,4), (5,3), (6,2) => n(E) = 5.\n3. Probability P(Sum = 8) = 5 / 36.\n\nProblem 2 (Card Probability without Replacement):\nTwo cards are drawn at random from a standard deck of 52 cards without replacement. Find the probability that both cards are Kings.\nSolution:\n1. P(1st card is King) = 4 / 52 = 1 / 13.\n2. P(2nd card is King | 1st card was King) = 3 / 51 = 1 / 17.\n3. P(Both Kings) = (4 / 52) * (3 / 51) = (1 / 13) * (1 / 17) = 1 / 221."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Quantitative Aptitude for Competitive Examinations",
        "author": "R.S. Aggarwal"
      },
      {
        "title": "Higher Engineering Mathematics",
        "author": "B.S. Grewal"
      }
    ],
    "practiceLinks": [
      {
        "title": "IndiaBIX Probability Practice",
        "url": "https://www.indiabix.com/aptitude/probability/"
      },
      {
        "title": "GeeksforGeeks Probability Questions",
        "url": "https://www.geeksforgeeks.org/probability-gq/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State the formula for Conditional Probability P(A|B). (2 Marks)",
        "What are mutually exclusive events? State their addition rule. (2 Marks)",
        "How many face cards are there in a standard deck of playing cards? (2 Marks)"
      ],
      "sixMarks": [
        "A bag contains 5 red balls and 7 green balls. Two balls are drawn at random one after another without replacement. Find the probability that both balls are red. (6 Marks)",
        "In tossing 3 fair coins simultaneously, what is the probability of getting at least two heads? (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive Quantitative Guide on Probability. Explain Sample space design, Mutually exclusive vs Independent events, Bayes' Theorem statement and proof, Odds in favor vs Odds against, and solve 4 complex card/dice placement problems step by step. (10 Marks)"
      ]
    }
  },
  {
    "title": "Data Interpretation",
    "slug": "aptitude-reasoning-data-interpretation",
    "order": 8,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Learn techniques for extracting, analyzing, and synthesizing quantitative data from tables, bar charts, line graphs, pie charts, comparative graphs, and text caselets.",
    "subTopics": [
      "Introduction to Data Interpretation",
      "Tables",
      "Bar Graphs",
      "Line Graphs",
      "Pie Charts",
      "Data Comparison",
      "Caselet Data Interpretation",
      "Data Analysis Techniques"
    ],
    "prerequisiteTitles": [
      "Probability Aptitude"
    ],
    "learningObjectives": [
      "Convert raw tabular and graphical data into percentage growths, ratios, and averages.",
      "Calculate degree angles for pie charts: Angle = (Value / Total) * 360 degrees.",
      "Process complex caselets and multi-graph comparison questions quickly."
    ],
    "notes": [
      {
        "title": "Data Interpretation Analysis Framework & Solved Problems",
        "content": "DATA INTERPRETATION CORE FORMULAS & SHORTCUTS\n\n1. Key Calculations in DI:\n   - Percentage Growth / Decrease = [(Value_Final - Value_Initial) / Value_Initial] * 100\n   - Pie Chart Angle = (Category Value / Total Sum) * 360°\n   - Ratio Comparison = Value A / Value B\n   - Average = Sum of Values / Total Number of Observations\n\n2. Approximation Strategies:\n   - Round off large figures to nearest 10 or 100 for rapid ratio evaluation.\n   - Use fractional equivalents (1/6 = 16.66%, 1/7 = 14.28%, 1/8 = 12.5%) for fast estimation.\n\nWORKED EXAMPLES:\n\nProblem 1 (Pie Chart Sector Angle & Value):\nA pie chart represents company expenses. If Raw Materials account for 35% of total expenses, and the total expense of the company is $800,000, calculate:\n1. The exact expenditure on Raw Materials.\n2. The central angle subtended by Raw Materials in the pie chart.\nSolution:\n1. Expenditure = 35% of $800,000 = (35 / 100) * 800,000 = $280,000.\n2. Central Angle = (35 / 100) * 360° = 0.35 * 360° = 126°.\n\nProblem 2 (Percentage Growth from Bar Graph):\nCompany sales were 120 thousand units in 2021 and grew to 150 thousand units in 2022. Find the percentage growth in sales.\nSolution:\n1. Absolute Growth = 150 - 120 = 30 thousand units.\n2. Percentage Growth = (30 / 120) * 100 = (1 / 4) * 100 = 25%."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Data Interpretation & Data Sufficiency",
        "author": "Ananta Ashisha"
      },
      {
        "title": "How to Prepare for Data Interpretation for CAT",
        "author": "Arun Sharma"
      }
    ],
    "practiceLinks": [
      {
        "title": "IndiaBIX Data Interpretation Practice",
        "url": "https://www.indiabix.com/data-interpretation/questions-and-answers/"
      },
      {
        "title": "GeeksforGeeks Data Interpretation",
        "url": "https://www.geeksforgeeks.org/data-interpretation-gq/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State the formula for converting pie chart percentage into central degree angle. (2 Marks)",
        "Write the formula for Percentage Increase/Decrease between two values. (2 Marks)",
        "What is a Caselet in Data Interpretation? (2 Marks)"
      ],
      "sixMarks": [
        "A table shows sales of 4 products across 4 quarters. Explain how to compute overall quarterly averages and identify the highest growth product. (6 Marks)",
        "A pie chart shows budget distribution for 5 departments: HR (15%), IT (30%), R&D (25%), Marketing (20%), Operations (10%). If total budget is $2,000,000, find the difference between IT and Operations budgets and their central angles. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive Guide on Data Interpretation Techniques. Detail chart types (Tables, Bar Graphs, Line Graphs, Pie Charts, Spider Web Graphs, Caselets), speed calculation shortcuts, estimation rules, and solve a complete 5-question multi-graph caselet step by step. (10 Marks)"
      ]
    }
  },
  {
    "title": "Logical Reasoning Fundamentals",
    "slug": "aptitude-reasoning-logical-reasoning-fundamentals",
    "order": 9,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Understand principles of informal and formal logic: statements & arguments, explicit/implicit assumptions, conclusions, logical inferences, cause-and-effect relationships, and deductive reasoning.",
    "subTopics": [
      "Introduction to Logical Reasoning",
      "Statements and Arguments",
      "Assumptions",
      "Conclusions",
      "Inferences",
      "Cause and Effect",
      "Logical Deductions"
    ],
    "prerequisiteTitles": [
      "Data Interpretation"
    ],
    "learningObjectives": [
      "Differentiate strong arguments (relevant, fact-backed, logical) from weak arguments (superfluous, emotional, irrelevant).",
      "Identify implicit assumptions that must hold true for a given statement to be valid.",
      "Distinguish between cause and effect relationship versus coincidental correlation."
    ],
    "notes": [
      {
        "title": "Logical Reasoning Rules, Arguments, Assumptions & Solved Examples",
        "content": "LOGICAL REASONING EVALUATION RULES\n\n1. Statement & Argument Rules:\n   - Strong Argument: Directly addresses the core issue, is logically sound, non-trivial, and supported by real-world facts or ethics.\n   - Weak Argument: Emotional, ambiguous, irrelevant, personal opinion, or simple restatement.\n\n2. Statement & Assumption Rules:\n   - An assumption is an unstated premise taken for granted to make the statement true.\n   - It must be implicitly present in the speaker's mind when making the statement.\n\n3. Cause and Effect Principles:\n   - Event A is Cause if it logically precedes Event B and directly induces Event B.\n   - Common Cause: Both events are effects of an underlying third factor.\n\nWORKED EXAMPLES:\n\nProblem 1 (Statement and Arguments):\nStatement: \"Should all single-use plastics be completely banned across the country?\"\nArgument I: \"Yes, single-use plastics cause non-biodegradable pollution and endanger marine ecosystems.\"\nArgument II: \"No, plastic manufacturing companies will suffer financial losses.\"\nEvaluation:\n- Argument I is STRONG because it addresses critical environmental safety with factual backing.\n- Argument II is WEAK because commercial losses do not override severe ecological degradation and can be transitioned to eco-alternatives.\n\nProblem 2 (Statement and Assumptions):\nStatement: \"The company has decided to lower interest rates on personal loans to boost borrowing.\"\nAssumption I: \"Lower interest rates will attract more loan applicants.\"\nAssumption II: \"Other banks will also lower their rates immediately.\"\nEvaluation:\n- Assumption I is IMPLICIT because the action was taken specifically expecting increased demand due to lower rates.\n- Assumption II is NOT IMPLICIT because competitor behavior is not guaranteed by the statement."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "A Modern Approach to Logical Reasoning",
        "author": "R.S. Aggarwal"
      },
      {
        "title": "Analytical Reasoning",
        "author": "M.K. Pandey"
      }
    ],
    "practiceLinks": [
      {
        "title": "IndiaBIX Logical Reasoning Practice",
        "url": "https://www.indiabix.com/logical-reasoning/questions-and-answers/"
      },
      {
        "title": "GeeksforGeeks Logical Reasoning",
        "url": "https://www.geeksforgeeks.org/logical-reasoning-gq/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What constitutes a 'Strong Argument' in logical reasoning? (2 Marks)",
        "Define an 'Assumption' in critical reasoning. (2 Marks)",
        "Explain the difference between Cause and Effect versus Correlation. (2 Marks)"
      ],
      "sixMarks": [
        "Analyze the following statement with two arguments and determine which argument is strong: Statement: 'Should artificial intelligence replace traditional customer service roles?' (6 Marks)",
        "Differentiate between Statement-Assumption and Statement-Conclusion problems with concrete examples. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive Guide on Logical Reasoning Fundamentals. Detail evaluation frameworks for Arguments, Assumptions, Inferences, Courses of Action, Cause-and-Effect analysis, and solve 4 competitive exam scenario problems step by step. (10 Marks)"
      ]
    }
  },
  {
    "title": "Analytical Reasoning",
    "slug": "aptitude-reasoning-analytical-reasoning",
    "order": 10,
    "estimatedHours": 6,
    "difficulty": "Intermediate",
    "description": "Master analytical puzzles including blood relations, direction sense, coding-decoding, number/letter series, analogies, odd-one-out classification, ranking, seating arrangements (linear & circular), and logic grid puzzles.",
    "subTopics": [
      "Blood Relations",
      "Direction Sense",
      "Coding and Decoding",
      "Number and Alphabet Series",
      "Analogies",
      "Classification",
      "Ranking Problems",
      "Seating Arrangements",
      "Puzzle Solving"
    ],
    "prerequisiteTitles": [
      "Logical Reasoning Fundamentals"
    ],
    "learningObjectives": [
      "Construct family trees using standard notation (Squares for Male, Circles for Female, Double lines for Married) for blood relation problems.",
      "Determine cardinal directions (North, South, East, West) and distances using Pythagoras theorem (a^2 + b^2 = c^2).",
      "Solve circular and linear seating arrangement puzzles by identifying definitive placement anchors."
    ],
    "notes": [
      {
        "title": "Analytical Reasoning Rules, Family Trees, Seating & Solved Problems",
        "content": "ANALYTICAL REASONING FRAMEWORKS & SHORTCUTS\n\n1. Blood Relations Symbols:\n   - Square [ ] = Male, Circle ( ) = Female.\n   - Single Horizontal Line (-) = Siblings. Double Horizontal Line (=) = Married Couple.\n   - Vertical Line (|) = Parent-Child relationship.\n\n2. Direction Sense & Pythagoras Distance:\n   - Cardinal Directions: North (Up), South (Down), East (Right), West (Left).\n   - Shortest Distance d = sqrt( (Δx)^2 + (Δy)^2 ).\n   - Sun rises in East (Shadows fall West), Sun sets in West (Shadows fall East).\n\n3. Ranking Formula:\n   - Total Persons in Row = (Position from Left) + (Position from Right) - 1.\n\n4. Seating Arrangements Rules:\n   - Facing Center: Left = Clockwise, Right = Anti-Clockwise.\n   - Facing Outside: Left = Anti-Clockwise, Right = Clockwise.\n\nWORKED EXAMPLES:\n\nProblem 1 (Direction Sense & Distance):\nA person walks 5 km North, then turns Right and walks 12 km. Calculate the shortest distance from the starting point and the final direction with respect to the start.\nSolution:\n1. North displacement Δy = 5 km, East displacement Δx = 12 km.\n2. Shortest Distance d = sqrt(5^2 + 12^2) = sqrt(25 + 144) = sqrt(169) = 13 km.\n3. Direction relative to origin = North-East.\n\nProblem 2 (Ranking Problem):\nIn a row of 40 students, Rahul is ranked 15th from the left end. What is his rank from the right end?\nSolution:\n1. Rank from Right = Total Students - Rank from Left + 1.\n2. Rank from Right = 40 - 15 + 1 = 26th."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "A Modern Approach to Verbal & Non-Verbal Reasoning",
        "author": "R.S. Aggarwal"
      },
      {
        "title": "Analytical Reasoning",
        "author": "M.K. Pandey"
      }
    ],
    "practiceLinks": [
      {
        "title": "IndiaBIX Blood Relations Practice",
        "url": "https://www.indiabix.com/logical-reasoning/blood-relation-test/"
      },
      {
        "title": "IndiaBIX Direction Sense",
        "url": "https://www.indiabix.com/logical-reasoning/direction-sense-test/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Write the formula for calculating total items in a row given position from left and right. (2 Marks)",
        "In a circular table facing inside, which direction represents 'Right'? (2 Marks)",
        "State the Pythagoras formula for shortest distance in direction sense tests. (2 Marks)"
      ],
      "sixMarks": [
        "Pointing to a photograph, a man said: 'She is the daughter of the only son of my grandfather.' How is the girl in the photograph related to the man? Draw the family tree diagram. (6 Marks)",
        "Eight friends A, B, C, D, E, F, G, H are sitting around a circular table facing center. A is third to the left of B, who is second to the right of F. D is not an immediate neighbor of B or F. Solve the full seating arrangement. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive Guide on Analytical Reasoning. Detail Blood Relation family tree rules, Direction & Shadow dynamics, Coding-Decoding pattern algorithms, Linear & Circular Seating Arrangement algorithms, and solve a complex floor-based puzzle step by step. (10 Marks)"
      ]
    }
  },
  {
    "title": "Verbal Reasoning",
    "slug": "aptitude-reasoning-verbal-reasoning",
    "order": 11,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Master verbal logic topics including statement conclusions, statement course of action, syllogisms (Venn diagram approach & Rules method), logical connectives (If-Then, Either-Or), critical reasoning, and decision-making logic.",
    "subTopics": [
      "Statement and Conclusion",
      "Statement and Assumption",
      "Statement and Course of Action",
      "Syllogisms",
      "Logical Connectives",
      "Critical Reasoning",
      "Decision Making"
    ],
    "prerequisiteTitles": [
      "Analytical Reasoning"
    ],
    "learningObjectives": [
      "Solve 2-premise and 3-premise syllogisms using Venn diagrams and standard categorical rules.",
      "Evaluate courses of action for corporate and social problems based on feasibility and effectiveness.",
      "Analyze logical connectives: Contrapositive of P => Q is Not Q => Not P."
    ],
    "notes": [
      {
        "title": "Syllogisms, Verbal Logic Laws & Solved Examples",
        "content": "SYLLOGISMS & VERBAL REASONING LAWS\n\n1. Categorical Proposition Types:\n   - A Type: All S are P (Universal Positive).\n   - E Type: No S is P (Universal Negative).\n   - I Type: Some S are P (Particular Positive).\n   - O Type: Some S are not P (Particular Negative).\n\n2. Standard Syllogism Rules:\n   - Two Particular Premises (I + I, I + O, O + O) yield NO valid conclusion.\n   - Two Negative Premises (E + E, E + O, O + O) yield NO valid conclusion.\n   - If one premise is Negative, the conclusion MUST be Negative.\n   - If one premise is Particular, the conclusion MUST be Particular.\n\n3. Logical Connectives (Contrapositive Law):\n   - Statement: If P, then Q (P => Q).\n   - Contrapositive (Logically Equivalent): If Not Q, then Not P (~Q => ~P).\n\nWORKED EXAMPLES:\n\nProblem 1 (Syllogism Evaluation):\nStatements:\n1. All apples are fruits.\n2. All fruits are healthy.\nConclusions:\nI. All apples are healthy.\nII. Some healthy items are apples.\n\nSolution & Analysis:\n1. Draw Venn Diagram: Circle 'Apples' is completely inside circle 'Fruits'. Circle 'Fruits' is completely inside circle 'Healthy'.\n2. Evaluation of Conclusion I: Since 'Apples' is inside 'Healthy', Conclusion I (All apples are healthy) is VALID.\n3. Evaluation of Conclusion II: The intersection of 'Healthy' and 'Apples' contains all apples, so 'Some healthy items are apples' is VALID.\n4. Both Conclusions I and II follow.\n\nProblem 2 (Logical Connective Contrapositive):\nStatement: \"If it rains heavily, the cricket match will be postponed.\"\nWhich of the following is logically equivalent?\nA. If the match is postponed, it rained heavily.\nB. If the match is not postponed, it did not rain heavily.\n\nSolution:\nBy Contrapositive law (P => Q ≡ ~Q => ~P), \"If Not Q then Not P\" gives: \"If the match is NOT postponed, it did NOT rain heavily.\" Option B is correct!"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "A Modern Approach to Verbal Reasoning",
        "author": "R.S. Aggarwal"
      },
      {
        "title": "Analytical Reasoning",
        "author": "M.K. Pandey"
      }
    ],
    "practiceLinks": [
      {
        "title": "IndiaBIX Syllogisms Practice",
        "url": "https://www.indiabix.com/logical-reasoning/syllogism/"
      },
      {
        "title": "GeeksforGeeks Syllogism Questions",
        "url": "https://www.geeksforgeeks.org/syllogism-gq/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "List the 4 types of categorical propositions (A, E, I, O) in Syllogisms. (2 Marks)",
        "State the Law of Contrapositive for logical implications. (2 Marks)",
        "What is the rule regarding conclusions from two negative premises? (2 Marks)"
      ],
      "sixMarks": [
        "Evaluate the following Syllogism: Statements: (1) Some books are pens. (2) All pens are pencils. Conclusions: (I) Some books are pencils. (II) No pencil is a book. Draw Venn diagrams and test validity. (6 Marks)",
        "Explain the criteria for evaluating 'Statement and Course of Action' problems with two corporate workplace examples. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive Guide on Verbal Reasoning. Detail categorical proposition conversion tables, Syllogisms 3-Venn diagram method, Rules approach, Statement-Conclusion rules, Logical equivalences, and solve 4 competitive placement questions step by step. (10 Marks)"
      ]
    }
  },
  {
    "title": "Non-Verbal Reasoning",
    "slug": "aptitude-reasoning-non-verbal-reasoning",
    "order": 12,
    "estimatedHours": 4,
    "difficulty": "Advanced",
    "description": "Develop visual reasoning skills for spatial orientation, pattern continuation, figure classification, mirror & water images, paper folding/cutting, embedded figures, and cube/dice net foldings.",
    "subTopics": [
      "Pattern Recognition",
      "Figure Classification",
      "Mirror Images",
      "Water Images",
      "Paper Folding",
      "Paper Cutting",
      "Embedded Figures",
      "Cube and Dice Problems"
    ],
    "prerequisiteTitles": [
      "Verbal Reasoning"
    ],
    "learningObjectives": [
      "Identify reflection symmetries for mirror images (Left-Right reversal) and water images (Top-Bottom reversal).",
      "Solve paper folding and punching problems by tracing step-by-step un-folding reflections.",
      "Determine opposite faces of a 3D cube from 2D net diagrams or multiple view perspectives."
    ],
    "notes": [
      {
        "title": "Non-Verbal Symmetries, Cube Nets & Solved Problems",
        "content": "NON-VERBAL REASONING RULES & SHORTCUTS\n\n1. Reflection Principles:\n   - Mirror Image: Left and Right are inverted. Top and Bottom remain unchanged.\n   - Water Image: Top and Bottom are inverted. Left and Right remain unchanged.\n   - Clock Mirror Time Shortcut: Mirror Time = 11:60 - Actual Time (or 23:60 - Actual Time).\n\n2. Cube and Dice Rules:\n   - 2D Net Foldings: Alternate squares in a straight row/column are opposite to each other.\n   - Adjacent Face Rule: Two opposite faces can NEVER be adjacent to each other in any 3D perspective.\n   - Common Face Rule: If two dice views show two common faces, the remaining third faces on both views are opposite to each other.\n\nWORKED EXAMPLES:\n\nProblem 1 (Analog Clock Mirror Image):\nWhat time will a clock show in a mirror if the actual time displayed on the clock is 3:40?\nSolution:\n1. Use the Clock Reflection Formula: Mirror Time = 11:60 - Given Time.\n2. Hours calculation: 11 - 3 = 8.\n3. Minutes calculation: 60 - 40 = 20.\n4. Reflected Clock Time = 8:20.\n\nProblem 2 (Dice Opposite Face Determination):\nTwo positions of a single dice are shown: View A displays faces (1, 2, 3) and View B displays faces (1, 5, 4). Find the face opposite to 3.\nSolution:\n1. Face '1' is common to both views.\n2. Rotate clockwise starting from common face 1:\n   - View A clockwise sequence: 1 -> 2 -> 3.\n   - View B clockwise sequence: 1 -> 5 -> 4.\n3. Matching positions: 2 is opposite 5, and 3 is opposite 4.\n4. The face opposite to 3 is 4."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "A Modern Approach to Non-Verbal Reasoning",
        "author": "R.S. Aggarwal"
      },
      {
        "title": "Non-Verbal Reasoning for Competitive Exams",
        "author": "B.S. Sijwalii"
      }
    ],
    "practiceLinks": [
      {
        "title": "IndiaBIX Non-Verbal Reasoning",
        "url": "https://www.indiabix.com/non-verbal-reasoning/questions-and-answers/"
      },
      {
        "title": "GeeksforGeeks Non-Verbal Reasoning",
        "url": "https://www.geeksforgeeks.org/non-verbal-reasoning-gq/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State the rule for Left-Right vs Top-Bottom inversion in Mirror vs Water images. (2 Marks)",
        "Write the clock time subtraction shortcut for finding mirror images. (2 Marks)",
        "State the opposite face rule for alternate squares in a 2D cube net. (2 Marks)"
      ],
      "sixMarks": [
        "Explain the step-by-step process to solve paper folding and cutting problems with a 3-fold square paper example. (6 Marks)",
        "A cube of 4 cm side is painted red on all faces and cut into smaller cubes of 1 cm side each. Calculate the number of cubes with: (i) 3 faces painted, (ii) 2 faces painted, (iii) 1 face painted, (iv) 0 faces painted. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive Guide on Non-Verbal Reasoning. Detail Mirror and Water Image transformations for alphabets/numbers, Pattern completion algorithms, Embedded figure isolation techniques, Cube painting formulas N^3, and solve 4 placement spatial puzzles step by step. (10 Marks)"
      ]
    }
  },
  {
    "title": "Professional Reasoning Skills",
    "slug": "aptitude-reasoning-professional-reasoning-skills",
    "order": 13,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Develop workplace cognitive skills including structured problem analysis, root-cause identification (5 Whys, Fishbone diagram), business decision making, situational judgement tests (SJT), and workplace logical reasoning.",
    "subTopics": [
      "Analytical Thinking",
      "Critical Thinking",
      "Decision Making",
      "Problem Analysis",
      "Workplace Problem Solving",
      "Situational Judgement Tests",
      "Business Reasoning"
    ],
    "prerequisiteTitles": [
      "Non-Verbal Reasoning"
    ],
    "learningObjectives": [
      "Apply Root Cause Analysis (RCA) techniques (5 Whys, Ishikawa Fishbone framework) to resolve workplace incidents.",
      "Evaluate Situational Judgement Scenarios (SJT) using professional ethics and team-first decision criteria.",
      "Perform cost-benefit trade-off analysis for business problem scenarios."
    ],
    "notes": [
      {
        "title": "Workplace RCA Framework, SJT Matrix & Solved Example",
        "content": "PROFESSIONAL PROBLEM SOLVING & WORKPLACE REASONING\n\n1. Root Cause Analysis (RCA) Frameworks:\n   - 5 Whys Methodology: Repeatedly ask \"Why?\" 5 times to drill down from surface symptoms to root cause.\n   - Ishikawa (Fishbone) Diagram: Classify causes into People, Process, Technology, Environment, and Management.\n\n2. Situational Judgement Test (SJT) Decision Criteria:\n   - Evaluate options on 4 Dimensions: (1) Client Safety & Satisfaction, (2) Ethical Integrity, (3) Team Collaboration, (4) Proactive Problem Resolution.\n   - Best Actions: Take responsibility, follow protocols, communicate transparently, implement long-term fixes.\n   - Worst Actions: Blame others, conceal errors, act impulsively without alignment, ignore guidelines.\n\n3. Business Expected Value (EV) Decision Formula:\n   - EV = Sum( Probability_i * Financial Outcome_i )\n\nWORKED EXAMPLES:\n\nProblem 1 (Situational Judgement Scenario):\nScenario: A critical cloud database migration fails 30 minutes prior to a scheduled client demonstration because of an unverified configuration script. As lead tech analyst, what is your most appropriate action?\nOptions:\nA. Blame the junior engineer who ran the script during the client call.\nB. Cancel the presentation without giving reasons.\nC. Instantly rollback to the stable backup, inform the manager with an updated timeline, and host a post-mortem RCA meeting.\nD. Proceed with demo using broken database features.\n\nSolution & Analysis:\n- Option C is the MOST EFFECTIVE response. It restores service stability immediately, maintains professional communication, and initiates root-cause prevention without playing blame games.\n\nProblem 2 (Expected Value Business Calculation):\nA software firm is choosing between Project A (60% chance of $100k profit, 40% chance of $20k loss) and Project B (80% chance of $50k profit, 20% chance of $10k profit). Which project has higher Expected Value?\nSolution:\n1. EV(Project A) = (0.60 * 100,000) + (0.40 * -20,000) = 60,000 - 8,000 = $52,000.\n2. EV(Project B) = (0.80 * 50,000) + (0.20 * 10,000) = 40,000 + 2,000 = $42,000.\n3. Project A has higher Expected Value ($52,000 vs $42,000)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Critical Thinking: Your Guide to Effective Reasoning",
        "author": "Tom Chatfield"
      },
      {
        "title": "Problem Solving 101",
        "author": "Ken Watanabe"
      }
    ],
    "practiceLinks": [
      {
        "title": "Harvard Business Review Case Studies",
        "url": "https://hbr.org/store/landing/case-studies"
      },
      {
        "title": "MindTools Problem Solving Frameworks",
        "url": "https://www.mindtools.com/pages/main/new/NEW_TMC.htm"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is the 5 Whys technique in Root Cause Analysis? (2 Marks)",
        "State the 4 core dimensions evaluated in Situational Judgement Tests. (2 Marks)",
        "State the formula for Expected Value in business decision making under risk. (2 Marks)"
      ],
      "sixMarks": [
        "Explain the Fishbone (Ishikawa) diagram categories for analyzing a software release bug. (6 Marks)",
        "A project manager faces a trade-off between scope, time, and budget (Project Management Triangle). Detail how to resolve a 20% scope creep scenario. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive Guide on Professional Reasoning & Executive Decision Making. Detail RCA methodologies, Risk-Return Expected Value matrices, Workplace Conflict Resolution steps, SJT scoring frameworks, and solve 2 real-world corporate case study scenarios step by step. (10 Marks)"
      ]
    }
  },
  {
    "title": "Placement and Competitive Exam Preparation",
    "slug": "aptitude-reasoning-placement-and-competitive-exam-preparation",
    "order": 14,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Comprehensive preparation strategy for IT/Product hiring assessments (TCS NQT, Infosys, Wipro, Accenture, Cognizant, AMCAT, CoCubes, eLitmus) and competitive exams (GATE General Aptitude, CAT, Bank PO).",
    "subTopics": [
      "Company Aptitude Patterns",
      "Online Assessment Preparation",
      "Quantitative Aptitude Tests",
      "Logical Reasoning Tests",
      "Technical Hiring Assessments",
      "Mock Aptitude Tests",
      "Speed and Accuracy Improvement"
    ],
    "prerequisiteTitles": [
      "Professional Reasoning Skills"
    ],
    "learningObjectives": [
      "Master exam pattern structures, section cutoffs, and adaptive testing algorithms of top tech hiring platforms.",
      "Apply sectional time management tactics for timed online assessments.",
      "Formulate personalized strategy based on accuracy analytics and mock test feedback loops."
    ],
    "notes": [
      {
        "title": "Company Test Patterns, Adaptive Engines & Strategy Guide",
        "content": "HIRE ASSESSMENT PATTERNS & THREE-PASS STRATEGY\n\n1. Major Company Test Structures:\n   - TCS NQT: Foundation (Quant, Logical, Verbal) + Advanced Sections; strict sectional timers; no backward navigation.\n   - Infosys: Mathematical, Logical, Verbal, Pseudo-code, Puzzle solving; speed and accuracy key.\n   - AMCAT / CoCubes: Computer Adaptive Test (CAT) engine; question difficulty scales dynamically based on prior responses.\n\n2. The Three-Pass Examination Strategy:\n   - Pass 1 (0-30% Time): Scan paper and solve instant easy questions (< 45 seconds each).\n   - Pass 2 (30-80% Time): Solve standard medium-level questions (60 - 90 seconds each).\n   - Pass 3 (80-100% Time): Attempt remaining complex questions; apply option elimination for educated guesses if no negative marking.\n\nWORKED EXAMPLES:\n\nProblem 1 (Adaptive Scoring Strategy):\nIn an adaptive assessment engine, getting a Hard question right yields +3 points, Medium yields +2 points, and Easy yields +1 point. A candidate attempts 30 questions:\n- 10 Hard questions (80% correct)\n- 10 Medium questions (90% correct)\n- 10 Easy questions (100% correct)\nCalculate the candidate's net total score out of 60 possible points.\n\nSolution:\n1. Hard points = (10 * 0.80) * 3 = 8 * 3 = 24 points.\n2. Medium points = (10 * 0.90) * 2 = 9 * 2 = 18 points.\n3. Easy points = (10 * 1.00) * 1 = 10 * 1 = 10 points.\n4. Net Score = 24 + 18 + 10 = 52 points out of 60 (86.67%).\n\nProblem 2 (Sectional Cutoff Target Calculation):\nAn assessment has 40 Quant questions with +1 / -0.25 marking. To clear an 85 percentile cutoff, a candidate needs at least 28 net marks. If the candidate attempts 32 questions, what is the minimum number of correct answers required?\nSolution:\n1. Let C = correct answers, W = wrong answers = 32 - C.\n2. Net Score = C * 1 - (32 - C) * 0.25 >= 28.\n3. C - 8 + 0.25C >= 28 => 1.25C >= 36 => C >= 36 / 1.25 = 28.8.\n4. Candidate must get at least 29 correct answers out of 32 attempts."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Quantitative Aptitude for Competitive Examinations",
        "author": "R.S. Aggarwal"
      },
      {
        "title": "Verbal & Non-Verbal Reasoning",
        "author": "R.S. Aggarwal"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Company Placement Papers",
        "url": "https://www.geeksforgeeks.org/company-preparation/"
      },
      {
        "title": "IndiaBIX Mock Tests",
        "url": "https://www.indiabix.com/online-test/aptitude-test/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is a Computer Adaptive Test (CAT) engine in hiring assessments? (2 Marks)",
        "Explain the Three-Pass test-taking strategy. (2 Marks)",
        "What are section cutoffs and why are they critical in placement tests? (2 Marks)"
      ],
      "sixMarks": [
        "Compare and contrast the aptitude assessment patterns of TCS NQT, Infosys, and AMCAT. (6 Marks)",
        "Formulate a 4-week study roadmap for clearing tier-1 product company quantitative and logical hiring rounds. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive Guide on Placement & Competitive Exam Preparation. Detail company-specific test blueprints, adaptive algorithm strategies, mock test score analysis protocols, percentile estimation formulas, and solve 4 benchmark placement problems step by step. (10 Marks)"
      ]
    }
  },
  {
    "title": "Advanced Problem Solving Techniques",
    "slug": "aptitude-reasoning-advanced-problem-solving-techniques",
    "order": 15,
    "estimatedHours": 4,
    "difficulty": "Advanced",
    "description": "Master speed math shortcuts, digit sum method (Vedic Math), fast approximation, option elimination techniques, pattern recognition, and non-calculative elimination strategies for competitive exams.",
    "subTopics": [
      "Shortcut Methods",
      "Approximation Techniques",
      "Mental Calculation Techniques",
      "Elimination Strategies",
      "Pattern Identification",
      "Time Saving Approaches"
    ],
    "prerequisiteTitles": [
      "Placement and Competitive Exam Preparation"
    ],
    "learningObjectives": [
      "Utilize the Digit Sum (Digital Root) method to verify multiplication and addition calculations instantly without full computation.",
      "Apply Option Elimination using unit digits, odd/even parity, and order of magnitude estimation.",
      "Execute fast Vedic squaring, cubing, and multiplication tricks in timed tests."
    ],
    "notes": [
      {
        "title": "Vedic Digit Sum, Elimination Tactics & Solved Problems",
        "content": "SPEED MATH SHORTCUTS & OPTION ELIMINATION TACTICS\n\n1. Digit Sum (Digital Root) Method:\n   - Digit Sum is the single-digit sum obtained by adding all digits of a number iteratively.\n   - Property: Digit Sum of (A * B) = Digit Sum of [ Digit Sum(A) * Digit Sum(B) ] (mod 9).\n   - Use: Verify large multiplication options without doing full calculation!\n\n2. Option Elimination Rules:\n   - Unit Digit Method: Match the last digit of expression with option choices.\n   - Cyclicity of Unit Digits:\n     - 2: 2, 4, 8, 6 (Cycle 4) | 3: 3, 9, 7, 1 (Cycle 4)\n     - 7: 7, 9, 3, 1 (Cycle 4) | 8: 8, 4, 2, 6 (Cycle 4)\n   - Parity Check: Odd * Odd = Odd, Even * Anything = Even.\n\nWORKED EXAMPLES:\n\nProblem 1 (Digit Sum Verification):\nVerify which option is the correct product of 437 * 256:\nOptions: A. 111,872 | B. 111,862 | C. 111,892\n\nSolution:\n1. Calculate Digit Sum of 437: 4 + 3 + 7 = 14 => 1 + 4 = 5.\n2. Calculate Digit Sum of 256: 2 + 5 + 6 = 13 => 1 + 3 = 4.\n3. Expected Product Digit Sum = 5 * 4 = 20 => 2 + 0 = 2.\n4. Test Option A (111,872): 1+1+1+8+7+2 = 20 => 2+0 = 2. (MATCHES!)\n5. Test Option B (111,862): 1+1+1+8+6+2 = 19 => 1+9 = 10 => 1. (Mismatch)\n6. Correct Answer is Option A (111,872).\n\nProblem 2 (Unit Digit & Cyclicity):\nFind the unit digit of 7^105.\nSolution:\n1. Cyclicity of base 7 is 4 (7^1 = 7, 7^2 = 49, 7^3 = 343, 7^4 = 2401).\n2. Divide exponent by 4: 105 mod 4 = 1.\n3. Unit digit of 7^105 = Unit digit of 7^1 = 7."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Vedic Mathematics",
        "author": "Swami Bharati Krishna Tirtha"
      },
      {
        "title": "Fast Track Objective Arithmetic",
        "author": "Rajesh Verma"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Mathematical Algorithms",
        "url": "https://www.geeksforgeeks.org/mathematical-algorithms/"
      },
      {
        "title": "IndiaBIX Simplification Tricks",
        "url": "https://www.indiabix.com/aptitude/simplification/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain the Digit Sum (Digital Root) concept. (2 Marks)",
        "State the unit digit cyclicity for numbers ending in 2, 3, 7, and 8. (2 Marks)",
        "How can odd/even parity be used for option elimination? (2 Marks)"
      ],
      "sixMarks": [
        "Demonstrate how to square numbers ending in 5 and numbers near 100 using Vedic Math shortcuts with 3 worked numerical examples. (6 Marks)",
        "Explain 4 distinct Option Elimination strategies (Unit Digit, Parity, Digit Sum, Magnitude Bounds) with competitive exam problems. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive Guide on Speed Arithmetic & Advanced Problem-Solving Techniques. Detail Vedic multiplication methods (Criss-Cross method), Digit Sum algebra, Unit digit cyclicity tables up to base 9, Order-of-magnitude bounds, and solve 4 complex calculation questions without manual multiplication. (10 Marks)"
      ]
    }
  },
  {
    "title": "Practice and Assessment",
    "slug": "aptitude-reasoning-practice-and-assessment",
    "order": 16,
    "estimatedHours": 6,
    "difficulty": "Advanced",
    "description": "Comprehensive practice suite featuring topic-wise drills, previous year campus placement paper questions, company-specific questions, full-length mock tests, performance analytics, and weak-area remediation.",
    "subTopics": [
      "Topic-Wise Practice Questions",
      "Previous Placement Questions",
      "Company-Specific Questions",
      "Mock Tests",
      "Performance Analysis",
      "Weak Area Identification",
      "Improvement Tracking"
    ],
    "prerequisiteTitles": [
      "Advanced Problem Solving Techniques"
    ],
    "learningObjectives": [
      "Evaluate overall quantitative and logical percentile through full-length placement mock exams.",
      "Conduct diagnostic error analysis (Categorize errors: Conceptual, Calculation, Time Pressure).",
      "Track velocity (questions/minute) and accuracy trends across quantitative, logical, and verbal topics."
    ],
    "notes": [
      {
        "title": "Mock Test Diagnostic Analysis & Performance Tracking",
        "content": "MOCK ASSESSMENT STRATEGY & REMEDIATION FRAMEWORK\n\n1. Diagnostic Error Classification Matrix:\n   - Conceptual Error: Lack of knowledge of formula/rule -> Action: Revisit topic notes & formulas.\n   - Calculation Error: Slip in arithmetic -> Action: Practice speed math & digit sum verification.\n   - Speed/Time Error: Ran out of time -> Action: Apply 3-pass scanning & skip questions > 90s.\n   - Misread Error: Misinterpreted question requirements -> Action: Underline keywords (e.g. 'NOT', 'Except').\n\n2. Target Benchmarks for Placement Readiness:\n   - Quantitative Section: Accuracy >= 75%, Speed <= 75 sec/question.\n   - Logical Section: Accuracy >= 85%, Speed <= 60 sec/question.\n   - Verbal Section: Accuracy >= 80%, Speed <= 45 sec/question.\n\nWORKED EXAMPLES:\n\nProblem 1 (Mock Score Trend & Improvement Calculation):\nAcross 4 consecutive 50-question mock assessments, a student obtained scores of 32, 36, 40, and 44 marks. Calculate:\n1. The mean score across all 4 mock tests.\n2. The percentage improvement from Test 1 to Test 4.\n3. The projected score for Test 5 assuming a linear progression trend.\n\nSolution:\n1. Mean Score = (32 + 36 + 40 + 44) / 4 = 152 / 4 = 38 marks.\n2. Percentage Improvement = [(44 - 32) / 32] * 100 = (12 / 32) * 100 = 37.5%.\n3. Common Difference d = 36 - 32 = 4 marks per test.\n4. Projected Test 5 Score = 44 + 4 = 48 marks.\n\nProblem 2 (Weak Area Identification Ratio):\nIn a diagnostic test of 60 questions (20 Quant, 20 Logical, 20 Verbal), a student scores:\n- Quant: 10 Correct, 8 Wrong, 2 Unattempted (Accuracy = 10 / 18 = 55.5%)\n- Logical: 16 Correct, 2 Wrong, 2 Unattempted (Accuracy = 16 / 18 = 88.8%)\n- Verbal: 14 Correct, 4 Wrong, 2 Unattempted (Accuracy = 14 / 18 = 77.7%)\nIdentify the primary weak area requiring immediate remediation.\nSolution:\n- Quantitative Reasoning has the lowest accuracy (55.5% vs 88.8% & 77.7%) and highest error rate. It is identified as the primary weak area."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Quantitative Aptitude for Competitive Examinations",
        "author": "R.S. Aggarwal"
      },
      {
        "title": "A Modern Approach to Logical Reasoning",
        "author": "R.S. Aggarwal"
      }
    ],
    "practiceLinks": [
      {
        "title": "IndiaBIX Online Aptitude Test",
        "url": "https://www.indiabix.com/online-test/aptitude-test/"
      },
      {
        "title": "GeeksforGeeks Quiz Corner",
        "url": "https://www.geeksforgeeks.org/quiz-corner-gq/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What are the 4 diagnostic categories of exam errors? (2 Marks)",
        "State the recommended accuracy benchmarks for Quant, Logical, and Verbal sections. (2 Marks)",
        "How do you compute candidate velocity in timed mock tests? (2 Marks)"
      ],
      "sixMarks": [
        "Explain how to conduct a post-mock diagnostic error audit using a structured performance log table. (6 Marks)",
        "Construct a 50-question mock test Blueprint covering Quantitative, Analytical, Verbal, and Non-Verbal topics with difficulty distribution (30% Easy, 50% Medium, 20% Hard). (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive Guide on Aptitude Assessment & Continuous Improvement. Detail weak-area remediation protocols, mock test analytics tracking, velocity vs accuracy trade-offs, company-specific revision plans, and solve 4 previous year placement questions step by step. (10 Marks)"
      ]
    }
  }
];
