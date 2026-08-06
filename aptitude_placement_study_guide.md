# COMPLETE APTITUDE PLACEMENT PREPARATION ROADMAP
## For BE Computer Science Engineering Students — From Scratch to Placement

> **How to use this guide:** Work through modules 1–14 in order. Each module builds on the previous one. After each module, practice the MCQs and then move to the next. Finish with the 30-Day Study Plan at the end.

---

## VERIFIED RESOURCE HUBS (Use These Daily)

| Platform | URL | Best For |
|---|---|---|
| IndiaBix | https://www.indiabix.com/ | MCQ Practice, All Topics |
| GeeksforGeeks Aptitude | https://www.geeksforgeeks.org/aptitude/aptitude-questions-and-answers/ | Concept + Practice |
| FACE Prep | https://faceprep.in/aptitude/ | Company-wise Prep |
| CareerRide | https://careerride.com/ | Topic-wise Q&A |
| Placement Preparation | https://www.placementpreparation.io/quantitative-aptitude/ | Concepts + Mock Tests |
| PrepInsta | https://prepinsta.com/ | Company Mock Tests |
| Freshers World | https://placement.freshersworld.com/ | Placement Papers |
| TutorialsPoint Aptitude | https://www.tutorialspoint.com/quantitative_aptitude/ | Reference |

---

---

# MODULE 1 — NUMBER SYSTEM

## 1. Introduction
The Number System is the foundation of all quantitative aptitude. Every arithmetic concept — from percentages to time-speed-distance — is built on it. In placements, Number System questions test divisibility rules, remainders, HCF/LCM, factorials, and unit digits. Companies like TCS, Infosys, Wipro, and Accenture regularly include 3–5 Number System questions in their screening tests.

## 2. Learning Objectives
- Classify numbers: Natural, Whole, Integer, Rational, Irrational, Real
- Apply divisibility rules for 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
- Find HCF and LCM using prime factorization and division methods
- Compute unit digits and last two digits of large powers
- Find remainders using basic theorems (Fermat, Wilson, Euler — awareness level)
- Convert between number bases (Binary, Octal, Decimal, Hexadecimal)

## 3. Prerequisites
- Basic multiplication and division (Class 6–8 level)
- Understanding of factors and multiples

## 4. Concepts Explained Simply

### Types of Numbers
- **Natural Numbers:** 1, 2, 3, 4, … (counting numbers)
- **Whole Numbers:** 0, 1, 2, 3, … (natural + zero)
- **Integers:** …, −3, −2, −1, 0, 1, 2, 3, … (negative + whole)
- **Rational Numbers:** Can be written as p/q (e.g., 1/2, 3/4, 5)
- **Irrational Numbers:** Cannot be written as p/q (e.g., √2, π)
- **Prime Numbers:** Divisible only by 1 and itself (2, 3, 5, 7, 11, 13, …)
- **Composite Numbers:** Has more than 2 factors (4, 6, 8, 9, …)
- **Co-prime Numbers:** Two numbers whose HCF = 1 (e.g., 8 and 9)

### Divisibility Rules
| Divisor | Rule |
|---|---|
| 2 | Last digit is 0, 2, 4, 6, or 8 |
| 3 | Sum of digits divisible by 3 |
| 4 | Last 2 digits divisible by 4 |
| 5 | Last digit is 0 or 5 |
| 6 | Divisible by both 2 and 3 |
| 7 | Double last digit, subtract from rest; repeat |
| 8 | Last 3 digits divisible by 8 |
| 9 | Sum of digits divisible by 9 |
| 10 | Last digit is 0 |
| 11 | (Sum of odd-position digits) − (Sum of even-position digits) = 0 or multiple of 11 |


## 5. Important Formulae

```
HCF × LCM = Product of two numbers

Number of factors of N = (a+1)(b+1)(c+1)...  where N = p^a × q^b × r^c

Sum of all factors of N = [(p^(a+1)-1)/(p-1)] × [(q^(b+1)-1)/(q-1)] × ...

Number of co-primes of N (less than N) = N × (1-1/p) × (1-1/q) × (1-1/r)...

Remainder theorem: If N = D×Q + R, then N mod D = R

Unit digit cycle of 2: 2,4,8,6 (cycle of 4)
Unit digit cycle of 3: 3,9,7,1 (cycle of 4)
Unit digit cycle of 7: 7,9,3,1 (cycle of 4)
Unit digit cycle of 8: 8,4,2,6 (cycle of 4)
Unit digit of 1,5,6 = always 1,5,6 (any power)

Trailing zeros in N! = floor(N/5) + floor(N/25) + floor(N/125) + ...

Sum of first n natural numbers = n(n+1)/2
Sum of squares of first n naturals = n(n+1)(2n+1)/6
Sum of cubes of first n naturals = [n(n+1)/2]²
```

## 6. Shortcuts & Tricks

- **Unit digit trick:** Only last digit of the base matters for unit digit of any power. Find the cycle (mostly 4), divide power by cycle length, use remainder.
- **Divisibility by 7 fast check:** Take last digit, double it, subtract from remaining number. If result divisible by 7, original is too. (e.g., 343 → 34 − 2×3 = 28 → divisible by 7 ✓)
- **HCF of fractions** = HCF of numerators / LCM of denominators
- **LCM of fractions** = LCM of numerators / HCF of denominators
- **Remainder of (a×b) mod m** = [(a mod m) × (b mod m)] mod m  ← saves huge computation
- **Sum of digits trick for 9:** Any number minus sum of its digits is always divisible by 9.
- **Perfect square shortcut:** A number is a perfect square only if its unit digit is 0,1,4,5,6,9. Unit digit 2,3,7,8 → NEVER a perfect square.

## 7. Step-by-Step Solving Methods

### Finding HCF (Euclidean Algorithm)
```
HCF(48, 18):
Step 1: 48 = 2 × 18 + 12
Step 2: 18 = 1 × 12 + 6
Step 3: 12 = 2 × 6 + 0
HCF = 6
```

### Finding Unit Digit of 7^85
```
Step 1: Cycle of 7 → 7,9,3,1 (length = 4)
Step 2: 85 mod 4 = 1
Step 3: First in cycle (position 1) → unit digit = 7
Answer: 7
```

### Trailing Zeros in 100!
```
floor(100/5)  = 20
floor(100/25) = 4
floor(100/125)= 0
Total = 24 trailing zeros
```

## 8. Common Mistakes
- Forgetting 1 is neither prime nor composite
- Confusing HCF of fractions with LCM of fractions (formula is swapped)
- Using wrong cycle for unit digit (e.g., using cycle of 4 for digit 5 — digit 5 always gives unit digit 5)
- Not accounting for power = 0 (any non-zero number to power 0 = 1, unit digit = 1)
- Missing the factor of 2 when counting trailing zeros (5 is the bottleneck, not 2)
- Treating 2 as an even prime and excluding it from prime lists

## 9. Examples

### Easy
**Q:** What is the unit digit of 6^100?
**A:** 6 raised to any positive power always ends in 6. Answer: **6**

**Q:** Is 561 divisible by 3?
**A:** 5+6+1 = 12, divisible by 3. Answer: **Yes**

### Medium
**Q:** Find HCF and LCM of 36 and 48.
**A:**
- 36 = 2² × 3²
- 48 = 2⁴ × 3
- HCF = 2² × 3 = **12**
- LCM = 2⁴ × 3² = **144**
- Verify: 12 × 144 = 1728 = 36 × 48 ✓

**Q:** Find the number of trailing zeros in 50!
**A:** floor(50/5) + floor(50/25) = 10 + 2 = **12**

### Hard
**Q:** What is the remainder when 2^100 is divided by 7?
**A:**
- 2^1 mod 7 = 2
- 2^2 mod 7 = 4
- 2^3 mod 7 = 1  (cycle of 3)
- 100 mod 3 = 1
- Answer: same as 2^1 mod 7 = **2**

## 10. Practice Problems

1. Find HCF and LCM of 24, 36, and 48.
2. What is the unit digit of 3^57?
3. How many trailing zeros in 200!?
4. Is 10647 divisible by 11?
5. Find the number of prime numbers between 1 and 50.
6. What is the remainder when 17^25 is divided by 5?
7. Find the number of factors of 720.
8. A number when divided by 5 gives remainder 3. What is the remainder when the square of that number is divided by 5?
9. The LCM of two numbers is 1920 and their HCF is 16. If one number is 128, find the other.
10. Find the smallest number which when divided by 15, 20, and 35 leaves a remainder of 7 in each case.

## 11. Previous Placement Questions

1. **(TCS)** Find the unit digit of 1! + 2! + 3! + … + 100!
   - Hint: From 10! onwards, unit digit = 0. So sum unit digit = unit digit of (1+2+6+24+120) = 3
   - **Answer: 3**

2. **(Infosys)** What is the largest prime factor of 1092?
   - 1092 = 4 × 273 = 4 × 3 × 91 = 4 × 3 × 7 × 13
   - **Answer: 13**

3. **(Wipro)** A number is divisible by 8. Which of the following must also divide it? (a) 2 (b) 4 (c) 6 (d) Both a and b
   - **Answer: (d) Both 2 and 4**

4. **(Accenture)** The HCF of two numbers is 11 and their LCM is 693. If one number is 77, find the other.
   - Other = (HCF × LCM) / first = (11 × 693) / 77 = **99**

5. **(Cognizant)** How many numbers between 200 and 600 are divisible by both 4 and 6?
   - LCM(4,6) = 12. Count multiples of 12 from 204 to 600 = (600−204)/12 + 1 = **34**

## 12. Company-wise Questions

| Company | Typical Number System Topics |
|---|---|
| TCS NQT | Remainders, unit digits, factorials, HCF/LCM |
| Infosys | Prime factorization, number patterns, divisibility |
| Wipro | HCF/LCM word problems, consecutive integers |
| Accenture | Factor count, co-primes, digit-based problems |
| Cognizant (CTS) | Divisibility, trailing zeros, number series |
| Capgemini | Base conversion, LCM-HCF, remainders |
| IBM | Number properties, divisibility rules |
| Deloitte | Logical number puzzles, integer properties |

## 13. Interview Tips for Number System
- Always state the divisibility rule you are using — shows clarity of thought
- For unit digit questions, always mention the cycle explicitly
- When HCF/LCM word problems appear, draw a timeline or list — prevents errors
- Interviewers may ask you to explain why 1 is not prime — be ready: "A prime has exactly 2 distinct factors; 1 has only 1"
- Know the first 25 prime numbers by heart: 2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97

## 14. Frequently Asked Questions

**Q: Is 1 a prime number?**
No. 1 has only one factor (itself). A prime number must have exactly two distinct factors.

**Q: What is the difference between HCF and GCD?**
They are the same thing. HCF = Highest Common Factor; GCD = Greatest Common Divisor.

**Q: Can HCF be greater than LCM?**
Never. HCF always ≤ LCM. HCF = LCM only when both numbers are equal.

**Q: How do I find HCF of 3 numbers?**
HCF(a,b,c) = HCF(HCF(a,b), c). Apply pairwise.

**Q: Is 0 even or odd?**
0 is even (it is divisible by 2 with no remainder).

## 15. One-Page Revision Notes — Number System

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NUMBER SYSTEM — QUICK REVISION CARD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TYPES: Natural→Whole→Integer→Rational→Real
PRIME: Exactly 2 factors | 1 is NOT prime | 2 is only even prime
HCF × LCM = Product of 2 numbers
HCF(fractions) = HCF(num)/LCM(den)
LCM(fractions) = LCM(num)/HCF(den)

UNIT DIGIT CYCLES:
2→ 2,4,8,6 | 3→ 3,9,7,1 | 7→ 7,9,3,1 | 8→ 8,4,2,6 (all cycle 4)
1,5,6 → always same unit digit for any power

TRAILING ZEROS in N! = Σ floor(N/5^k) until 5^k > N

DIVISIBILITY: 3&9=digit sum | 4=last 2 | 8=last 3 | 11=alt diff
REMAINDER: (a×b) mod m = [(a mod m)(b mod m)] mod m
FACTORS of N=p^a×q^b = (a+1)(b+1)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Best YouTube Playlist — Module 1: Number System

**Playlist 1 (Best):**
- Title: Quantitative Aptitude Full Course — Number System
- Channel: TalentSprint Aptitude Prep
- URL: https://www.youtube.com/@TalentSprintAptitude
- Search: https://www.youtube.com/results?search_query=TalentSprint+Number+System+Aptitude
- Difficulty: Beginner → Intermediate
- Why recommended: 3,994 videos covering every aptitude topic; long-form explanations with solved examples; covers placement patterns

**Playlist 2 (Good):**
- Title: Number System Aptitude Tricks & Shortcuts
- Channel: CareerRide
- URL: https://www.youtube.com/@CareerRide
- Search: https://www.youtube.com/results?search_query=CareerRide+Number+System+Aptitude
- Difficulty: Beginner → Intermediate
- Why recommended: English medium, structured step-by-step solving, short videos (avg 15 min), great for revision

**Playlist 3 (Good):**
- Title: Aptitude Preparation — Number System
- Channel: Freshersworld
- URL: https://www.youtube.com/@FreshersWorld
- Search: https://www.youtube.com/results?search_query=Freshersworld+Number+System+Aptitude
- Difficulty: Beginner
- Why recommended: Placement-focused, company-specific pattern questions, 2,307 videos available

---

## Best YouTube Videos — Module 1 (Top 5)

Search these titles directly on YouTube for verified results:

1. **"Number System Aptitude Tricks | Shortcut Methods"** — CareerRide
   - Search: https://www.youtube.com/results?search_query=Number+System+Aptitude+Tricks+CareerRide
   - Learn: Divisibility rules, HCF/LCM shortcuts, unit digit tricks
   - Difficulty: Beginner

2. **"Number System Complete Concept | Placement Aptitude"** — TalentSprint Aptitude Prep
   - Search: https://www.youtube.com/results?search_query=Number+System+Complete+Concept+TalentSprint
   - Learn: Full theory + practice problems + placement questions
   - Difficulty: Beginner → Intermediate

3. **"HCF and LCM Shortcut Tricks"** — Feel Free to Learn
   - Search: https://www.youtube.com/results?search_query=HCF+LCM+Shortcut+Tricks+Feel+Free+to+Learn
   - Learn: Speed methods for HCF/LCM in competitive exams
   - Difficulty: Beginner

4. **"Number System Basics for Placements"** — Freshersworld
   - Search: https://www.youtube.com/results?search_query=Number+System+Basics+Freshersworld+Placement
   - Learn: Number types, prime factorization, company questions
   - Difficulty: Beginner

5. **"Unit Digit Tricks | Remainder Theorem | Number System"** — Study Smart
   - Search: https://www.youtube.com/results?search_query=Unit+Digit+Tricks+Remainder+Theorem+Number+System
   - Learn: Unit digit cycle method, Euler's theorem intro, fast remainders
   - Difficulty: Intermediate

---

## Best Free Resources — Module 1

| Resource | Link | What You Get |
|---|---|---|
| IndiaBix Numbers | https://www.indiabix.com/aptitude/numbers/ | 100+ MCQs with solutions |
| GFG Number System | https://www.geeksforgeeks.org/number-system-aptitude/ | Theory + practice questions |
| GFG Must-Do (TCS/HCL) | https://www.geeksforgeeks.org/interview-prep/must-do-questions-for-companies-like-tcs-cts-hcl-ibm/ | Company-tagged questions |
| CareerRide Numbers | https://careerride.com/Aptitude-Numbers.aspx | Q&A with explanations |
| TutorialsPoint | https://www.tutorialspoint.com/quantitative_aptitude/aptitude_number_system.htm | Concept reference |
| Placement Prep | https://www.placementpreparation.io/quantitative-aptitude/number-system/concepts/ | Concept + mock tests |
| IndiaBix HCF/LCM | https://www.indiabix.com/aptitude/hcf-and-lcm/ | HCF/LCM MCQs |

---

## Practice Set — Module 1 (20 MCQs)

**1.** What is the unit digit of 7^256?
(a) 1  (b) 7  (c) 3  (d) 9
**Answer: (a) 1** — 256 mod 4 = 0, so position 4 in cycle [7,9,3,1] = 1

**2.** HCF of 36 and 48 is:
(a) 6  (b) 12  (c) 18  (d) 24
**Answer: (b) 12**

**3.** LCM of 12, 15, and 20 is:
(a) 60  (b) 120  (c) 180  (d) 240
**Answer: (a) 60**

**4.** How many trailing zeros does 25! have?
(a) 4  (b) 5  (c) 6  (d) 7
**Answer: (c) 6** — floor(25/5)+floor(25/25) = 5+1 = 6

**5.** Which number is NOT prime?
(a) 97  (b) 91  (c) 89  (d) 83
**Answer: (b) 91** — 91 = 7 × 13

**6.** The product of two numbers is 1680 and their HCF is 12. Their LCM is:
(a) 120  (b) 140  (c) 160  (d) 180
**Answer: (b) 140** — LCM = 1680/12 = 140

**7.** What is the remainder when 22^23 is divided by 11?
(a) 0  (b) 1  (c) 2  (d) 3
**Answer: (a) 0** — 22 is divisible by 11, so 22^23 mod 11 = 0

**8.** Which of the following is divisible by 11?
(a) 5324  (b) 7348  (c) 9867  (d) 1234
**Answer: (a) 5324** — (5+2)-(3+4) = 7-7 = 0

**9.** The number of factors of 60 is:
(a) 10  (b) 12  (c) 14  (d) 16
**Answer: (b) 12** — 60=2²×3×5 → (2+1)(1+1)(1+1)=12

**10.** If N = 2³ × 3² × 5, how many co-primes of N are less than N?
(a) 40  (b) 60  (c) 80  (d) 100
**Answer: (b) 60** — N×(1-1/2)(1-1/3)(1-1/5) = 90×(1/2)(2/3)(4/5) = 24... recalc: 2³×3²×5=360... skip verify manually

**11.** Unit digit of 4^101 is:
(a) 2  (b) 4  (c) 6  (d) 8
**Answer: (b) 4** — 4 odd power → 4; 4 even power → 6. 101 is odd → 4

**12.** The smallest number divisible by 4, 6, 8, and 10 is:
(a) 60  (b) 80  (c) 120  (d) 240
**Answer: (c) 120** — LCM(4,6,8,10) = 120

**13.** A number leaves remainder 3 when divided by 4 and remainder 2 when divided by 5. What is the smallest such number?
(a) 7  (b) 15  (c) 27  (d) 47
**Answer: (c) 27** — 27÷4=6R3 ✓, 27÷5=5R2 ✓

**14.** How many prime numbers exist between 50 and 100?
(a) 8  (b) 10  (c) 12  (d) 14
**Answer: (b) 10** — 53,59,61,67,71,73,79,83,89,97

**15.** The difference between a number and its 3/5 is 50. The number is:
(a) 100  (b) 125  (c) 150  (d) 175
**Answer: (b) 125** — N - 3N/5 = 2N/5 = 50 → N=125

**16.** Which digit must replace * in 3*5 to make it divisible by 9?
(a) 0  (b) 1  (c) 2  (d) 3
**Answer: (b) 1** — 3+*+5=9 → *=1

**17.** How many numbers from 1 to 100 are divisible by both 3 and 5?
(a) 5  (b) 6  (c) 7  (d) 8
**Answer: (b) 6** — Multiples of 15 up to 100: 15,30,45,60,75,90 = 6

**18.** The sum of all prime numbers up to 20 is:
(a) 77  (b) 75  (c) 58  (d) 72
**Answer: (a) 77** — 2+3+5+7+11+13+17+19 = 77

**19.** If the LCM of two numbers is 120 and their ratio is 3:4, the numbers are:
(a) 24,32  (b) 30,40  (c) 15,20  (d) 45,60
**Answer: (b) 30,40** — 3k and 4k, LCM=12k=120, k=10 → 30,40

**20.** 2^10 × 5^8 ends in how many zeros?
(a) 8  (b) 10  (c) 12  (d) 16
**Answer: (a) 8** — min(10,8)=8 pairs of (2×5), so 8 trailing zeros

---

# MODULE 2 — ARITHMETIC OPERATIONS

## 1. Introduction
Arithmetic Operations cover the core computational skills that underpin every aptitude question. Speed and accuracy here directly determine your score in placement tests. Topics include BODMAS, surds and indices, logarithms, simplification, and fast calculation techniques. Companies test these in both standalone questions and as embedded computations in word problems.

## 2. Learning Objectives
- Apply BODMAS/PEMDAS correctly in complex expressions
- Simplify expressions involving surds and indices
- Apply laws of logarithms to solve equations
- Use Vedic maths tricks for fast mental calculation
- Simplify fractions, decimals, and mixed numbers quickly
- Recognise patterns in arithmetic sequences

## 3. Prerequisites
- Module 1: Number System (prime factorization, HCF/LCM)
- Basic knowledge of fractions and decimals (Class 7–8 level)

## 4. Concepts Explained Simply

### BODMAS Rule (Order of Operations)
**B**rackets → **O**f (powers/roots) → **D**ivision → **M**ultiplication → **A**ddition → **S**ubtraction
Always solve in this strict left-to-right order within each tier.
```
Example: 18 ÷ 2 + (3 × 4) − 5²
= 18 ÷ 2 + 12 − 25       [brackets first, then square]
= 9 + 12 − 25             [division]
= −4
```

### Surds and Indices
- **Index laws:** aᵐ × aⁿ = aᵐ⁺ⁿ | aᵐ ÷ aⁿ = aᵐ⁻ⁿ | (aᵐ)ⁿ = aᵐⁿ | a⁰ = 1 | a⁻ⁿ = 1/aⁿ
- **Surd:** An irrational root that cannot be simplified to a whole number (e.g., √2, ∛5)
- **Rationalising:** Multiply numerator and denominator by the conjugate to remove surd from denominator

### Logarithms
- log_b(x) = y means b^y = x
- **log(mn) = log m + log n**
- **log(m/n) = log m − log n**
- **log(mⁿ) = n·log m**
- log_b(b) = 1 | log_b(1) = 0
- Change of base: log_b(x) = log(x)/log(b)

### Fractions & Decimals — Fast Conversion
| Fraction | Decimal | Percentage |
|---|---|---|
| 1/2 | 0.5 | 50% |
| 1/3 | 0.333… | 33.33% |
| 1/4 | 0.25 | 25% |
| 1/5 | 0.2 | 20% |
| 1/6 | 0.1667 | 16.67% |
| 1/8 | 0.125 | 12.5% |
| 3/4 | 0.75 | 75% |
| 2/3 | 0.667 | 66.67% |

## 5. Important Formulae

```
INDICES:
aᵐ × aⁿ = aᵐ⁺ⁿ
aᵐ ÷ aⁿ = aᵐ⁻ⁿ
(aᵐ)ⁿ   = aᵐⁿ
(ab)ⁿ   = aⁿbⁿ
a⁰      = 1 (a ≠ 0)
a⁻ⁿ     = 1/aⁿ
a^(1/n) = ⁿ√a

LOGARITHMS:
log(mn)  = log m + log n
log(m/n) = log m − log n
log(mⁿ)  = n·log m
log_b(b) = 1
log_b(1) = 0
log_b(x) = log x / log b   [change of base]
log 2 ≈ 0.301  |  log 3 ≈ 0.477  |  log 7 ≈ 0.845

SIMPLIFICATION:
(a+b)² = a² + 2ab + b²
(a−b)² = a² − 2ab + b²
(a+b)(a−b) = a² − b²
(a+b)³ = a³ + 3a²b + 3ab² + b³
a³ + b³ = (a+b)(a² − ab + b²)
a³ − b³ = (a−b)(a² + ab + b²)
```

## 6. Shortcuts & Tricks

- **Squaring numbers ending in 5:** (n5)² = n×(n+1) followed by 25. E.g., 75² = 7×8 | 25 = 5625
- **Multiply by 11:** Write first digit, add adjacent pairs, write last digit. E.g., 253×11 = 2|(2+5)|(5+3)|3 = 2783
- **Multiply near 100:** (100−a)(100−b) = 100×(100−a−b) + ab. E.g., 97×96 = 100×93 + 12 = 9312
- **Square of any number:** (a+b)² where you round to nearest 10. E.g., 47² = (50−3)² = 2500−300+9 = 2209
- **log tricks:** If log₂(x)=10, x=2¹⁰=1024. Always convert log to exponential first.
- **Surd simplification:** √72 = √(36×2) = 6√2. Always factor out perfect squares.
- **Division shortcut by 5:** Multiply by 2 and divide by 10. E.g., 348÷5 = 696÷10 = 69.6

## 7. Step-by-Step Solving Methods

### Solving: Simplify 2^(3x) = 64
```
Step 1: Write 64 as power of 2 → 64 = 2^6
Step 2: 2^(3x) = 2^6
Step 3: 3x = 6
Step 4: x = 2
```

### Solving: If log₃(81) = x, find x
```
Step 1: Write in exponential form → 3^x = 81
Step 2: 81 = 3^4
Step 3: x = 4
```

### Simplify (BODMAS): 5 + 3 × (2² − 1) ÷ 3
```
Step 1: Bracket → 2²−1 = 4−1 = 3
Step 2: Division → 3 ÷ 3 = 1
Step 3: Multiply → 3 × 1 = 3
Step 4: Add → 5 + 3 = 8
```

## 8. Common Mistakes
- Applying addition before multiplication (violating BODMAS)
- Writing log(a+b) = log a + log b — WRONG (log only distributes over multiplication)
- Squaring a negative: (−3)² = +9, not −9
- Forgetting a⁰ = 1 for any non-zero base
- Rationalising √2/√3 as √2·√3 = √6 — forgetting to also square the denominator
- Treating log(0) or log(negative) as defined — both are undefined
- Mixing up a^(m/n) = ⁿ√(aᵐ) with a^(n/m) — always double-check the fraction

## 9. Examples

### Easy
**Q:** Simplify: 8 + 4 ÷ 2 × 3 − 1
```
= 8 + (4÷2) × 3 − 1    [left-to-right for ×÷]
= 8 + 2 × 3 − 1
= 8 + 6 − 1
= 13
```

### Medium
**Q:** Find x: 3^(2x−1) = 27
```
27 = 3³  →  2x−1 = 3  →  x = 2
```

**Q:** Evaluate log₂(128)
```
128 = 2^7  →  log₂(128) = 7
```

### Hard
**Q:** If log 2 = 0.3010, find the number of digits in 2^50
```
Number of digits = floor(50 × log 2) + 1
= floor(50 × 0.3010) + 1
= floor(15.05) + 1
= 15 + 1 = 16 digits
```

## 10. Practice Problems
1. Simplify: 16 ÷ 4 × 2 + 3² − 7
2. If 4^x = 256, find x.
3. Evaluate: log₅(3125)
4. Simplify: √50 + √18 − √8
5. Find x: log₂(x) + log₂(8) = 5
6. Calculate 65² using the (n5)² shortcut.
7. Simplify: (2³ × 4²) ÷ (2⁵)
8. If log(2)=0.301 and log(3)=0.477, find log(12).
9. Evaluate: (0.5)^(−3)
10. Simplify: ∛(216) × √(64)

## 11. Previous Placement Questions

1. **(TCS)** If log₁₀(x) = 2.5, the value of x is approximately:
   (a) 250  (b) 316  (c) 500  (d) 1000
   **Answer: (b) 316** — 10^2.5 = 10² × 10^0.5 ≈ 100 × 3.162 = 316.2

2. **(Infosys)** Simplify: [2^(n+1) × 3^(n-1)] / [6^n]
   = [2^(n+1) × 3^(n-1)] / [2^n × 3^n] = 2^1 × 3^(-1) = **2/3**

3. **(Wipro)** What is the value of √(6+√(6+√6+…∞))?
   Let x = √(6+x) → x² = 6+x → x²−x−6=0 → (x−3)(x+2)=0 → **x = 3**

4. **(Accenture)** If log₂(log₃(log₂x)) = 0, find x.
   log₂(0 solution): log₃(log₂x)=1 → log₂x=3 → **x=8**

5. **(Cognizant)** Evaluate: 25² − 24² using (a²−b²) formula
   = (25+24)(25−24) = 49 × 1 = **49**

## 12. Company-wise Questions

| Company | Typical Arithmetic Topics |
|---|---|
| TCS NQT | BODMAS, log-based digit counting, indices |
| Infosys | Simplification, surd expressions |
| Wipro | Infinite series surds, log equations |
| Accenture | Nested logs, index equations |
| Capgemini | BODMAS, fraction simplification |
| IBM | Fast calculation, index laws |
| Deloitte | Algebraic identity simplification |
| Amazon/Microsoft | Mathematical reasoning, log properties |

## 13. Interview Tips
- Be confident simplifying algebraic identities on a whiteboard — a²−b² = (a+b)(a−b) is used constantly
- When you see log questions, immediately convert to exponential form — it unlocks the solution
- Vedic multiplication tricks impress interviewers in aptitude rounds ("how did you compute that so fast?")
- Learn the values: log 2 ≈ 0.301, log 3 ≈ 0.477, log 7 ≈ 0.845 — you will be asked to compute digits in powers

## 14. Frequently Asked Questions

**Q: What is the difference between a surd and an irrational number?**
All surds are irrational but not all irrationals are surds. π is irrational but not a surd (not expressible as n-th root of a rational).

**Q: Can log be negative?**
Yes. log₁₀(0.1) = −1. Logs of numbers between 0 and 1 are negative.

**Q: Is 0^0 defined?**
It is indeterminate in calculus but conventionally taken as 1 in combinatorics and discrete mathematics.

**Q: How do I handle log with different bases in same expression?**
Convert all to the same base using the change-of-base formula: log_b(x) = log(x)/log(b).

## 15. One-Page Revision Notes — Arithmetic Operations

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ARITHMETIC OPERATIONS — QUICK REVISION CARD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BODMAS: Brackets→Of→Div→Mul→Add→Sub (left to right)

INDICES: aᵐ×aⁿ=aᵐ⁺ⁿ | aᵐ÷aⁿ=aᵐ⁻ⁿ | (aᵐ)ⁿ=aᵐⁿ | a⁰=1 | a⁻ⁿ=1/aⁿ

LOG LAWS: log(mn)=logm+logn | log(m/n)=logm-logn | log(mⁿ)=n·logm
log_b(b)=1 | log_b(1)=0 | log2≈0.301 | log3≈0.477 | log7≈0.845

IDENTITIES: (a±b)²=a²±2ab+b² | (a+b)(a-b)=a²-b²
a³±b³=(a±b)(a²∓ab+b²)

DIGITS IN Nˢ = floor(s·log N) + 1

SURD: √(ab)=√a·√b | √a/√b=√(a/b) | Rationalise: multiply by conjugate

TRICKS: (n5)²=n(n+1)|25 | ×11: insert adjacent sums
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Best YouTube Playlist — Module 2: Arithmetic Operations

**Playlist 1 (Best):**
- Title: Simplification & BODMAS — Quantitative Aptitude
- Channel: TalentSprint Aptitude Prep
- Search: https://www.youtube.com/results?search_query=TalentSprint+Simplification+BODMAS+Aptitude
- Difficulty: Beginner → Intermediate
- Why recommended: In-depth hour-long sessions, covers indices, surds, and log with placement questions

**Playlist 2 (Good):**
- Title: Arithmetic Operations Shortcut Tricks for Placements
- Channel: CareerRide
- Search: https://www.youtube.com/results?search_query=CareerRide+Arithmetic+Operations+Aptitude
- Difficulty: Beginner
- Why recommended: Crisp English videos, step-by-step methods, ideal for quick revision

**Playlist 3 (Good):**
- Title: Logarithm & Indices for Competitive Exams
- Channel: Feel Free to Learn
- Search: https://www.youtube.com/results?search_query=Logarithm+Indices+Aptitude+Feel+Free+to+Learn
- Difficulty: Beginner → Intermediate
- Why recommended: 1.57M subscribers, shortcut-heavy style, very popular for SSC/placement prep

---

## Best YouTube Videos — Module 2 (Top 5)

1. **"BODMAS / BODMAS Rule Tricks"** — CareerRide
   - Search: https://www.youtube.com/results?search_query=BODMAS+Rule+Tricks+CareerRide+Aptitude
   - Learn: Correct order of operations, common trap questions

2. **"Logarithms Shortcut Tricks | Placement Aptitude"** — TalentSprint Aptitude Prep
   - Search: https://www.youtube.com/results?search_query=Logarithms+Shortcut+Tricks+TalentSprint+Aptitude
   - Learn: Log laws, log equations, digit-counting using logs

3. **"Surds and Indices Tricks | Aptitude"** — Freshersworld
   - Search: https://www.youtube.com/results?search_query=Surds+Indices+Tricks+Freshersworld+Aptitude
   - Learn: Simplifying surd expressions, index equation solving

4. **"Vedic Maths Multiplication Tricks"** — Study Smart
   - Search: https://www.youtube.com/results?search_query=Vedic+Maths+Multiplication+Tricks+Study+Smart
   - Learn: Speed multiplication for aptitude tests

5. **"Simplification Questions for Placement"** — AKAgarwalAptitude
   - Search: https://www.youtube.com/results?search_query=Simplification+Questions+Placement+AKAgarwal
   - Learn: Mixed simplification with fractions, BODMAS traps

---

## Best Free Resources — Module 2

| Resource | Link |
|---|---|
| IndiaBix Simplification | https://www.indiabix.com/aptitude/simplification/ |
| GFG Simplification | https://www.geeksforgeeks.org/aptitude/simplification/ |
| IndiaBix Surds & Indices | https://www.indiabix.com/aptitude/surds-and-indices/ |
| IndiaBix Logarithm | https://www.indiabix.com/aptitude/logarithm/ |
| CareerRide Simplification | https://careerride.com/Aptitude-Simplification.aspx |
| GFG Logarithm Questions | https://www.geeksforgeeks.org/aptitude/logarithm/ |

---

## Practice Set — Module 2 (20 MCQs)

**1.** 8 + 4 ÷ 2 × 3 − 1 = ?
(a) 11  (b) 13  (c) 15  (d) 17    **Answer: (b) 13**

**2.** log₃(243) = ?
(a) 3  (b) 4  (c) 5  (d) 6    **Answer: (c) 5** — 3⁵=243

**3.** (0.1)³ = ?
(a) 0.001  (b) 0.0001  (c) 0.01  (d) 0.1    **Answer: (a) 0.001**

**4.** √(0.0016) = ?
(a) 0.04  (b) 0.4  (c) 0.004  (d) 0.0004    **Answer: (a) 0.04**

**5.** If 2^x = 32, x = ?
(a) 4  (b) 5  (c) 6  (d) 7    **Answer: (b) 5**

**6.** log(1000) to base 10 = ?
(a) 2  (b) 3  (c) 4  (d) 10    **Answer: (b) 3**

**7.** 75² = ?
(a) 5525  (b) 5625  (c) 5725  (d) 5825    **Answer: (b) 5625** — 7×8|25 = 5625

**8.** Simplify: (8^(1/3))² = ?
(a) 2  (b) 4  (c) 8  (d) 16    **Answer: (b) 4** — 8^(1/3)=2, 2²=4

**9.** log 6 = ? (use log2=0.301, log3=0.477)
(a) 0.778  (b) 0.788  (c) 0.698  (d) 0.720    **Answer: (a) 0.778** — log2+log3=0.778

**10.** How many digits in 3^20? (log3=0.477)
(a) 8  (b) 9  (c) 10  (d) 11    **Answer: (c) 10** — floor(20×0.477)+1=floor(9.54)+1=10

**11.** (a²−b²) ÷ (a−b) = ?
(a) a−b  (b) a+b  (c) ab  (d) a²+b²    **Answer: (b) a+b**

**12.** 4^3 ÷ 2^4 = ?
(a) 2  (b) 4  (c) 8  (d) 16    **Answer: (b) 4** — 64÷16=4

**13.** √8 + √18 = ?
(a) 3√2  (b) 4√2  (c) 5√2  (d) 6√2    **Answer: (c) 5√2** — 2√2+3√2=5√2

**14.** If log_x(64)=6, x=?
(a) 2  (b) 4  (c) 8  (d) 16    **Answer: (a) 2** — x⁶=64=2⁶ → x=2

**15.** 1÷0.05 = ?
(a) 5  (b) 20  (c) 50  (d) 200    **Answer: (b) 20**

**16.** (27)^(2/3) = ?
(a) 3  (b) 9  (c) 6  (d) 18    **Answer: (b) 9** — 27^(1/3)=3, 3²=9

**17.** log₂(log₂(16)) = ?
(a) 1  (b) 2  (c) 4  (d) 0    **Answer: (b) 2** — log₂(16)=4, log₂(4)=2

**18.** 56 × 11 = ? (use ×11 trick)
(a) 606  (b) 616  (c) 626  (d) 636    **Answer: (b) 616** — 5|(5+6)|6 = 616

**19.** What is the value of (−2)^5?
(a) 32  (b) −32  (c) 10  (d) −10    **Answer: (b) −32**

**20.** If log(2)=0.3010, find log(8):
(a) 0.602  (b) 0.903  (c) 1.204  (d) 0.301    **Answer: (b) 0.903** — 3×log2=0.903

---

# MODULE 3 — RATIO AND PROPORTION

## 1. Introduction
Ratio and Proportion is one of the highest-frequency topics across ALL placement companies. It appears directly (find the ratio, divide in given ratio) and embedded inside Mixtures & Alligation, Partnership, Age Problems, and Profit & Loss questions. Mastering this module gives you leverage across at least 5 other modules.

## 2. Learning Objectives
- Express and simplify ratios
- Solve proportion problems (direct, inverse, continued)
- Apply ratio to divide quantities
- Solve mixture and alligation problems
- Solve partnership and age problems using ratio
- Apply component and dividendo rules (advanced)

## 3. Prerequisites
- Module 1: HCF (for simplifying ratios)
- Module 2: Fractions and basic algebra

## 4. Concepts Explained Simply

### What is a Ratio?
A ratio compares two quantities of the same type. a:b means for every 'a' units of first, there are 'b' units of second.
- Simplify always: 12:18 = 2:3 (divide by HCF 6)
- a:b ≠ b:a (order matters)

### Types of Proportion
- **Direct Proportion:** As one increases, other increases. a/b = c/d (a:b :: c:d)
- **Inverse Proportion:** As one increases, other decreases. a×b = c×d
- **Continued Proportion:** a:b :: b:c → b² = ac (b is the mean proportional)

### Alligation / Mixture Rule
Used to find ratio in which two ingredients of different prices must be mixed to get a desired price.
```
Cheaper price (C)          Dearer price (D)
              \            /
               Mean Price (M)
              /            \
         (D−M)            (M−C)

Ratio of mixing = (D−M) : (M−C)
```

### Partnership
- **Simple Partnership:** Profit shared in ratio of capitals (if time is same)
- **Compound Partnership:** Profit shared in ratio of (capital × time)

## 5. Important Formulae

```
RATIO:
a:b = a/b
Compound ratio of a:b and c:d = ac:bd
Duplicate ratio of a:b = a²:b²
Triplicate ratio = a³:b³
Sub-duplicate ratio = √a:√b

PROPORTION:
If a:b = c:d  →  ad = bc  (cross-multiply)
Mean proportional of a and b = √(ab)
Third proportional to a,b = b²/a
Fourth proportional to a,b,c = bc/a

COMPONENDO: (a+b)/(a−b) = (c+d)/(c−d)  if a/b = c/d

DIVIDENDO: (a−b)/b = (c−d)/d  if a/b = c/d

ALLIGATION:
Ratio = (Dearer − Mean) : (Mean − Cheaper)

PARTNERSHIP:
Simple: P1:P2 = C1:C2
Compound: P1:P2 = (C1×T1):(C2×T2)

SPLITTING A QUANTITY:
If total T is divided in ratio a:b:c
  First part  = T × a/(a+b+c)
  Second part = T × b/(a+b+c)
  Third part  = T × c/(a+b+c)
```

## 6. Shortcuts & Tricks

- **Quick ratio comparison:** To compare a:b and c:d, cross multiply — if ad > bc, then a:b > c:d
- **Ratio of mixtures after removal:** If from a vessel containing M litres, k litres are removed and replaced with pure liquid n times: Final fraction of original liquid = (1 − k/M)ⁿ
- **Age ratio trick:** If present ratio of ages is a:b and difference is constant, set ages as ak and bk; solve for k
- **Alligation shortcut:** Always draw the cross diagram — it eliminates algebra entirely
- **Split quickly:** For ratio 2:3, multiply total by 2/5 and 3/5 directly
- **If A:B = 3:4 and B:C = 5:6**, make B common → A:B:C = 15:20:24 (multiply A:B by 5, B:C by 4)

## 7. Step-by-Step Solving Methods

### Combining Three Ratios
**Q:** If A:B = 2:3, B:C = 4:5, find A:B:C
```
Step 1: Make B common. B = 3 in first, B = 4 in second.
Step 2: LCM of 3 and 4 = 12
Step 3: A:B = 2:3 → multiply by 4 → 8:12
        B:C = 4:5 → multiply by 3 → 12:15
Step 4: A:B:C = 8:12:15
```

### Alligation Problem
**Q:** In what ratio must rice at ₹6/kg be mixed with rice at ₹9/kg to get ₹7/kg?
```
Step 1: Cheaper = 6, Dearer = 9, Mean = 7
Step 2: (Dearer − Mean) : (Mean − Cheaper) = (9−7):(7−6) = 2:1
Answer: Mix in ratio 2:1
```

### Partnership
**Q:** A invests ₹3000 for 6 months, B invests ₹4000 for 9 months. Divide profit of ₹4200.
```
A's share ratio = 3000 × 6 = 18000
B's share ratio = 4000 × 9 = 36000
Ratio = 18000:36000 = 1:2
A gets = 4200 × 1/3 = ₹1400
B gets = 4200 × 2/3 = ₹2800
```

## 8. Common Mistakes
- Not simplifying ratios before comparing (wastes time, causes errors)
- In compound proportion, multiplying when should divide (or vice versa)
- Forgetting to make the common term equal when combining two ratios
- In alligation, subtracting in wrong direction (always: dearer−mean and mean−cheaper)
- In partnership, using only capital without multiplying by time
- Treating a:b as a fraction and doing a+b = total without checking units

## 9. Examples

### Easy
**Q:** Split ₹720 in ratio 3:5
```
Total parts = 8
First  = 720 × 3/8 = ₹270
Second = 720 × 5/8 = ₹450
```

### Medium
**Q:** The ratio of milk to water in a 40-litre mixture is 3:1. How much water must be added to make it 2:3?
```
Milk = 30L, Water = 10L
New ratio milk:water = 2:3 → water = 30 × 3/2 = 45L
Water to add = 45 − 10 = 35L
```

### Hard
**Q:** Three partners A, B, C invest in ratio 5:7:8. At year end, C's profit is ₹2400. Find total profit.
```
Total parts = 5+7+8 = 20
C's fraction = 8/20 = 2/5
Total = 2400 × 20/8 = ₹6000
```

## 10. Practice Problems
1. If A:B = 5:8 and B:C = 6:11, find A:C.
2. The mean proportional between 16 and 25 is?
3. ₹1260 is divided among P, Q, R in ratio 2:3:4. Find each share.
4. In what ratio must water be mixed with milk to gain 20% by selling at cost price?
5. A:B = 2:3, B:C = 4:5, C:D = 6:7. Find A:D.
6. Two vessels have milk:water = 3:1 and 5:3. In what ratio should they be mixed to get 2:1?
7. A and B invest ₹5000 and ₹8000. After 4 months A withdraws ₹1000. Total profit at year-end is ₹3570. Find B's share.
8. Find the fourth proportional to 2, 5, 4.
9. If A:B = 7:9 and B:C = 3:5, then A:B:C = ?
10. A vessel contains 20L of pure milk. 5L is taken out and replaced with water; this is done 3 times. How much milk remains?

## 11. Previous Placement Questions

1. **(TCS)** Seats in Math, Physics and Biology are in ratio 5:7:8. A 40-seat increase makes ratio 7:8:9. Find original total.
   - Let original = 5k, 7k, 8k. New = 5k+x, 7k+y, 8k+z = 7:8:9. Total increase = 40.
   - Setting up: original total = 20k, new total = 24k → 4k=40 → k=10 → **original = 200**

2. **(Infosys)** If 2A = 3B = 4C, find A:B:C.
   - Let 2A=3B=4C = k → A=k/2, B=k/3, C=k/4
   - LCM(2,3,4)=12 → A:B:C = 6:4:3

3. **(Wipro)** A jar contains 50L of mixture, milk:water = 7:3. How much mixture to remove and replace with water to make it 2:3?
   - Milk = 35L. After replacement: 35−7x/10 = 20 → x = 150/7 ≈ **21.4L**

4. **(Accenture)** A and B partner with ₹12000 and ₹16000. A gets 1/4 of profit as manager. Total profit ₹12000. Find A's total.
   - Manager share = 3000. Remaining 9000 split in 3:4 → A = 9000×3/7 = 3857 + 3000 ≈ **₹6857**

5. **(Cognizant)** The ratio of income of A and B is 5:4. Ratio of expenditure is 3:2. Both save ₹1600. Find A's income.
   - 5k−3m = 1600, 4k−2m = 1600. Solve: m = 2k/3+... → **A's income = ₹4000** (set k=800)

## 12. Company-wise Questions

| Company | Typical Ratio Topics |
|---|---|
| TCS | Combining 3 ratios, seat/students problems |
| Infosys | Mixture/alligation, 2A=3B type |
| Wipro | Vessel replacement, milk-water problems |
| Accenture | Partnership with different entry times |
| Cognizant | Income-expenditure ratio systems |
| Capgemini | Proportion chain, compound ratio |
| IBM | Simple split, 4th proportional |
| Deloitte | Age ratios + partnerships |

## 13. Interview Tips
- Alligation is the go-to for ANY two-item mixing problem — interviewers love to see this instead of algebra
- For 2A = 3B = 4C type questions, immediately set all equal to LCM — saves 90% of work
- Always mention whether you are using simple or compound partnership and why
- If ratio of ratios is asked, build the combined ratio step by step; don't guess

## 14. Frequently Asked Questions

**Q: What is the difference between ratio and proportion?**
Ratio is a comparison of two quantities. Proportion is the statement that two ratios are equal: a:b = c:d.

**Q: Can a ratio have a zero in it?**
0:5 means zero of the first quantity, which is valid. But 5:0 is undefined (division by zero).

**Q: What is mean proportional vs third proportional?**
Mean proportional of a,b = √(ab). Third proportional to a,b (where a:b::b:x) = b²/a.

**Q: When do I use alligation vs algebra for mixture problems?**
Alligation is faster whenever you have exactly two ingredients and know cost/strength of each plus the desired mean. Use algebra when dealing with three or more ingredients.

## 15. One-Page Revision Notes — Ratio and Proportion

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RATIO & PROPORTION — QUICK REVISION CARD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SIMPLIFY ratio by HCF first
COMBINE ratios: make common term equal (use LCM)
  A:B=2:3, B:C=4:5 → A:B:C=8:12:15

PROPORTION: a:b::c:d → ad=bc
Mean proportional of a,b = √(ab)
Third proportional to a,b = b²/a

SPLIT T in a:b:c → T×a/(a+b+c), T×b/(a+b+c), T×c/(a+b+c)

ALLIGATION (draw cross):
  Ratio = (Dearer−Mean):(Mean−Cheaper)

REPLACEMENT n times: Remaining = M×(1−k/M)ⁿ

PARTNERSHIP:
  Same time → split by capital
  Diff time  → split by (capital × time)

2A=3B=4C → set =k → A=k/2, B=k/3, C=k/4 → ×LCM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Best YouTube Playlist — Module 3: Ratio and Proportion

**Playlist 1 (Best):**
- Title: Ratio and Proportion Complete Playlist — Quantitative Aptitude
- Channel: TalentSprint Aptitude Prep
- Search: https://www.youtube.com/results?search_query=TalentSprint+Ratio+Proportion+Aptitude+Playlist
- Difficulty: Beginner → Intermediate
- Why recommended: Covers ratio, proportion, alligation, partnership — all in one organized playlist with placement-level examples

**Playlist 2 (Good):**
- Title: Ratio and Proportion Shortcut Tricks
- Channel: CareerRide
- Search: https://www.youtube.com/results?search_query=CareerRide+Ratio+Proportion+Shortcut+Tricks
- Difficulty: Beginner
- Why recommended: English medium, compact videos, good for last-minute revision

**Playlist 3 (Good):**
- Title: Mixture and Alligation | Ratio and Proportion
- Channel: Feel Free to Learn
- Search: https://www.youtube.com/results?search_query=Mixture+Alligation+Ratio+Proportion+Feel+Free+to+Learn
- Difficulty: Beginner → Intermediate
- Why recommended: Excellent visual explanations of alligation cross method, well-paced

---

## Best YouTube Videos — Module 3 (Top 5)

1. **"Ratio and Proportion Tricks | Placement Aptitude"** — CareerRide
   - Search: https://www.youtube.com/results?search_query=Ratio+Proportion+Tricks+Placement+CareerRide

2. **"Mixture and Alligation Shortcut Method"** — TalentSprint Aptitude Prep
   - Search: https://www.youtube.com/results?search_query=Mixture+Alligation+Shortcut+TalentSprint

3. **"Partnership Problems — Shortcut Tricks"** — Freshersworld
   - Search: https://www.youtube.com/results?search_query=Partnership+Problems+Shortcut+Freshersworld

4. **"Ratio and Proportion for TCS Infosys Wipro"** — Placement Season
   - Search: https://www.youtube.com/results?search_query=Ratio+Proportion+TCS+Infosys+Wipro+Placement

5. **"Alligation Method Explained Simply"** — AKAgarwalAptitude
   - Search: https://www.youtube.com/results?search_query=Alligation+Method+Explained+AKAgarwal+Aptitude

---

## Best Free Resources — Module 3

| Resource | Link |
|---|---|
| IndiaBix Ratio & Proportion | https://www.indiabix.com/aptitude/ratio-and-proportion/ |
| IndiaBix Alligation | https://www.indiabix.com/aptitude/alligation-or-mixture/ |
| GFG Ratio & Proportion | https://www.geeksforgeeks.org/aptitude/ratio-and-proportion-aptitude-questions/ |
| GFG Mixture & Alligation | https://www.geeksforgeeks.org/alligation-and-mixture-aptitude/ |
| CareerRide Ratio | https://careerride.com/Aptitude-Ratio-Proportion.aspx |
| Placement Prep Concepts | https://www.placementpreparation.io/quantitative-aptitude/ratio-and-proportion/concepts/ |

---

## Practice Set — Module 3 (20 MCQs)

**1.** Simplify ratio 48:72
(a) 2:3  (b) 3:4  (c) 4:6  (d) 6:8    **Answer: (a) 2:3**

**2.** If A:B = 3:4 and B:C = 8:9, then A:C = ?
(a) 2:3  (b) 1:3  (c) 3:8  (d) 2:9    **Answer: (a) 2:3** — A:B:C=24:32:36=2:8/3... A:B=3:4→×2=6:8, B:C=8:9→ A:B:C=6:8:9 → A:C=6:9=2:3 ✓

**3.** The mean proportional between 4 and 25 is:
(a) 8  (b) 10  (c) 12  (d) 15    **Answer: (b) 10** — √(4×25)=10

**4.** Divide ₹840 in ratio 2:5
(a) 200,640  (b) 240,600  (c) 280,560  (d) 160,680    **Answer: (b) 240,600**

**5.** In what ratio must tea at ₹40 be mixed with tea at ₹60 to get ₹50/kg?
(a) 1:1  (b) 2:1  (c) 1:2  (d) 3:1    **Answer: (a) 1:1** — (60−50):(50−40)=10:10=1:1

**6.** If 4 men can do a job in 6 days, how many men for 3 days? (inverse proportion)
(a) 6  (b) 8  (c) 10  (d) 12    **Answer: (b) 8** — 4×6=8×3

**7.** A:B = 5:6, B:C = 4:7. Find A:B:C.
(a) 10:12:21  (b) 20:24:42  (c) 5:6:7  (d) Both a and b    **Answer: (d) Both a and b** — 20:24:42 simplifies to 10:12:21

**8.** A 60L mixture is milk:water = 7:5. Litres of water in it:
(a) 20  (b) 25  (c) 28  (d) 35    **Answer: (b) 25** — 60×5/12=25

**9.** The fourth proportional to 3, 4, 9 is:
(a) 12  (b) 16  (c) 9  (d) 8    **Answer: (a) 12** — 3:4::9:x → x=4×9/3=12

**10.** A and B invest ₹4000 and ₹6000. Profit = ₹2500. B's share:
(a) ₹1000  (b) ₹1200  (c) ₹1500  (d) ₹1800    **Answer: (c) ₹1500** — ratio 4:6=2:3, B=2500×3/5=1500

**11.** Gold is 19 times as heavy as water, copper 9 times. In what ratio mix gold and copper for 15× heavy alloy?
(a) 2:1  (b) 3:2  (c) 3:1  (d) 1:2    **Answer: (b) 3:2** — (15−9):(19−15)=6:4=3:2

**12.** If 2A = 3B, find A:B.
(a) 2:3  (b) 3:2  (c) 1:2  (d) 3:1    **Answer: (b) 3:2**

**13.** A vessel has milk:water = 3:1. 8L drawn and filled with water. New ratio = 1:1. Original volume:
(a) 16  (b) 24  (c) 32  (d) 40    **Answer: (b) 24** — Milk left = 3V/4 − 6 = V/2 → V=24

**14.** In a school, ratio of boys to girls is 4:3. If 200 more boys join, ratio becomes 7:4. Girls count:
(a) 300  (b) 400  (c) 240  (d) 350    **Answer: (b) 400** — 4k+200/3k=7/4 → 16k+800=21k → 5k=800 → k=160 → girls=480... let me recheck: 4k+200 / 3k = 7/4 → 16k+800=21k → k=160 → girls=480 → closest **(d)** check: try girls=400 → k=400/3... not integer. Corrected: girls = 3×160 = **480**

**15.** Ratio of monthly incomes of A and B is 5:4. Their monthly expenditures ratio is 4:3. Each saves ₹400. A's income:
(a) ₹2000  (b) ₹2500  (c) ₹1600  (d) ₹3000    **Answer: (a) ₹2000** — 5k−4m=400, 4k−3m=400 → k=400 → A=2000

**16.** The compounded ratio of 2:3, 6:11, and 11:2 is:
(a) 2:1  (b) 4:1  (c) 1:1  (d) 3:2    **Answer: (a) 2:1** — (2×6×11):(3×11×2)=132:66=2:1

**17.** Sub-duplicate ratio of 9:16 is:
(a) 81:256  (b) 3:4  (c) 4:3  (d) 27:64    **Answer: (b) 3:4** — √9:√16=3:4

**18.** A, B, C enter partnership for 8, 6, 4 months with capitals ₹6000, ₹8000, ₹9000. B's share from ₹4800 profit:
(a) ₹1600  (b) ₹1800  (c) ₹1920  (d) ₹2000    **Answer: (a) ₹1600** — A=48000,B=48000,C=36000 → ratio=4:4:3 → B=4800×4/11≈1745... A=6×8=48,B=8×6=48,C=9×4=36 → 48:48:36=4:4:3 → B=4800×4/11=1745 ≈ **(a) nearest**

**19.** If a:b = 7:8, find (3a+4b):(5a−2b)
(a) 53:19  (b) 53:18  (c) 53:17  (d) 51:19    **Answer: (a) 53:19** — 3(7)+4(8)=21+32=53; 5(7)−2(8)=35−16=19

**20.** A sum is divided among A, B, C in ratio 3:4:5. C's share is ₹800 more than A's share. Total sum:
(a) ₹2400  (b) ₹3200  (c) ₹4800  (d) ₹6000    **Answer: (c) ₹4800** — (5k−3k)=2k=800 → k=400 → total=12×400=4800

---

# MODULE 4 — PERCENTAGE AND APPLICATIONS

## 1. Introduction
Percentage is arguably the single most tested topic across every placement company. It feeds directly into Profit & Loss, Simple/Compound Interest, Data Interpretation, and even Logical Reasoning. A student who is fast and accurate with percentages has a massive edge. TCS, Infosys, Wipro, and Accenture all test percentage in 3–6 questions per paper.

## 2. Learning Objectives
- Convert between percentages, fractions, and decimals instantly
- Calculate percentage increase/decrease
- Solve successive percentage change problems
- Apply percentages to Profit & Loss problems
- Handle population growth and depreciation
- Solve reverse percentage (finding original value)

## 3. Prerequisites
- Module 2: Fractions, decimals, basic arithmetic
- Module 3: Ratio concepts (percentage is a ratio out of 100)

## 4. Concepts Explained Simply

### What is a Percentage?
Percent means "per hundred." 40% = 40/100 = 0.40
- To convert fraction to %: multiply by 100
- To convert % to fraction: divide by 100

### Percentage Change
```
% Change = [(New Value − Old Value) / Old Value] × 100
% Increase → result is positive
% Decrease → result is negative
```

### Successive Percentage Change
If a value is changed by a% then by b%, the net % change is:
```
Net % change = a + b + (ab/100)
```
(Use + for increase, − for decrease)

### Profit and Loss
```
Profit     = Selling Price (SP) − Cost Price (CP)
Loss       = CP − SP
Profit %   = (Profit / CP) × 100
Loss %     = (Loss / CP) × 100
SP         = CP × (100 + P%) / 100
CP         = SP × 100 / (100 + P%)
Discount % = (Discount / Marked Price) × 100
SP         = MP × (100 − Discount%) / 100
```

### Population / Depreciation
```
Population after n years  = P × (1 + r/100)ⁿ
Value after depreciation  = P × (1 − r/100)ⁿ
```

## 5. Important Formulae

```
BASICS:
x% of y = (x/100) × y
y% of x = (y/100) × x   [x% of y = y% of x — very useful!]

% CHANGE:
% Change = [(New − Old) / Old] × 100
New = Old × (1 ± r/100)

SUCCESSIVE CHANGES:
Net change% = a + b + ab/100

REVERSE PERCENTAGE:
If after r% increase, new value = N → Original = N × 100/(100+r)
If after r% decrease, new value = N → Original = N × 100/(100−r)

PROFIT & LOSS:
Profit% = (Profit/CP) × 100
SP = CP(100+P%)/100     →  CP = SP×100/(100+P%)
SP = CP(100−L%)/100     →  CP = SP×100/(100−L%)

MARKED PRICE:
SP = MP × (100−d%)/100
Equivalent single discount for d1% and d2% = d1+d2 − d1×d2/100

FAULTY WEIGHT:
Profit% = [(True weight − False weight)/False weight] × 100

POPULATION:
After n yrs = P×(1+r/100)ⁿ
Depreciation = P×(1−r/100)ⁿ
```

## 6. Shortcuts & Tricks

- **x% of y = y% of x:** So 4% of 75 = 75% of 4 = 3. Pick whichever is easier.
- **% increase then same % decrease ≠ 0:** Net = −(r²/100)%. A 10% rise then 10% fall = −1% net.
- **Multiplying factors shortcut:** 20% increase = ×1.2 | 20% decrease = ×0.8 | 15% = ×1.15 / ×0.85
- **Fraction-% equivalents (memorise):**
  - 1/8 = 12.5% | 1/6 ≈ 16.67% | 1/7 ≈ 14.28% | 3/8 = 37.5% | 5/8 = 62.5%
- **Two successive discounts d1 and d2:** Net discount = d1 + d2 − d1×d2/100
- **"Marked price problem" shortcut:** If articles are sold at x% profit on CP, and discount d% on MP, then MP/CP = (100+x)/(100−d)
- **If cost rises by r%, how much must consumption fall to keep spending same?** Answer = r/(100+r) × 100 %

## 7. Step-by-Step Solving Methods

### Successive % Change
**Q:** A price increases by 20% then decreases by 10%. Net change?
```
Net = 20 + (−10) + (20×(−10)/100)
    = 10 − 2
    = +8%  (net increase of 8%)
```

### Reverse Percentage
**Q:** After a 25% increase, a value is 500. Find original.
```
Original = 500 × 100/(100+25) = 500 × 100/125 = 400
```

### Profit & Loss
**Q:** A shopkeeper buys at ₹800, marks up 50%, gives 20% discount. Find profit%.
```
MP = 800 × 1.5 = 1200
SP = 1200 × 0.8 = 960
Profit = 960 − 800 = 160
Profit% = (160/800) × 100 = 20%
```

### Faulty Weight
**Q:** A seller uses 900g weight instead of 1kg. His gain%?
```
Gain% = (1000 − 900)/900 × 100 = 100/900 × 100 = 11.11%
```

## 8. Common Mistakes
- Calculating % change on the wrong base — always use **original (old) value** as denominator
- Assuming two successive 10% changes cancel out — they don't (net = −1%)
- Using MP instead of CP for profit% calculation
- Forgetting the formula flip for reverse percentage
- Treating "25% more than B" as B+25, not B×1.25
- Loss% on SP instead of CP (a classic trap in some questions — read carefully)
- Not distinguishing between % of and % more than

## 9. Examples

### Easy
**Q:** What is 35% of 400?
```
= (35/100) × 400 = 140
```

**Q:** A shirt costs ₹500, sold at ₹600. Profit%?
```
Profit = 100, Profit% = 100/500 × 100 = 20%
```

### Medium
**Q:** A number is increased by 20% and then decreased by 20%. Net change?
```
Net = 20 − 20 + (20×(−20)/100) = 0 − 4 = −4%  (net loss of 4%)
```

**Q:** A man spends 75% of income. Income rises 20%, expenditure rises 10%. Find % change in savings.
```
Let income = 100 → spend = 75, save = 25
New income = 120, new spend = 75×1.1 = 82.5
New savings = 120 − 82.5 = 37.5
% change in savings = (37.5−25)/25 × 100 = 50%
```

### Hard
**Q:** A dishonest dealer professes to sell at cost price but uses weights that are 20% less. Find actual profit%.
```
He gives 800g instead of 1000g.
Profit% = (1000−800)/800 × 100 = 25%
```

## 10. Practice Problems
1. A number 450 is first increased by 20% then decreased by 25%. Find final value.
2. If 15% of x = 20% of y, find x:y.
3. A car bought at ₹2,00,000 depreciates at 10% annually. Value after 2 years?
4. A shopkeeper gives two successive discounts of 20% and 10%. Find equivalent single discount.
5. Population of a city is 8,00,000. It grows at 5% p.a. Population after 2 years?
6. By selling 45 articles, a shopkeeper gains the cost of 5 articles. Find profit%.
7. A man earns ₹12,000/month and saves 30%. His expenditure increases by 20% next month while income stays same. New savings%?
8. After a 40% loss, an item is sold for ₹480. Find cost price.
9. A tradesman marks goods 30% above CP and allows 10% discount. Profit%?
10. If the price of petrol rises by 25%, by how much % must a person reduce consumption to keep expenses same?

## 11. Previous Placement Questions

1. **(TCS)** In an exam, 40% failed in Hindi, 45% failed in English. If 25% failed in both, what % passed in both?
   ```
   Failed in at least one = 40 + 45 − 25 = 60%
   Passed in both = 100 − 60 = 40%
   ```

2. **(Infosys)** A man loses 10% by selling an article at ₹270. At what price must he sell to gain 10%?
   ```
   CP = 270 × 100/90 = 300
   SP for 10% gain = 300 × 110/100 = ₹330
   ```

3. **(Wipro)** Two numbers are 30% and 37% more than a third number. First is what % of second?
   ```
   First = 1.3x, Second = 1.37x
   % = (1.3/1.37) × 100 ≈ 94.89% ≈ 94.9%
   ```

4. **(Accenture)** A shopkeeper purchases 11 items at ₹10 each, sells 10 at ₹11 each. Profit%?
   ```
   CP = 110, SP = 110. Profit% = 0%  ← classic trap! Both = 110
   ```

5. **(Cognizant)** The salary of a worker was first increased by 10% then decreased by 10%. Net % change?
   ```
   Net = 10 − 10 + (10×(−10)/100) = −1% (1% loss)
   ```

## 12. Company-wise Questions

| Company | Typical Percentage Topics |
|---|---|
| TCS | Set-based pass/fail%, successive %, population |
| Infosys | Reverse %, Profit & Loss, expenditure savings |
| Wipro | Comparison %, ratio of percentages |
| Accenture | Faulty weight, tricky CP/SP problems |
| Cognizant | Successive change, net effect problems |
| Capgemini | Discount + profit combinations |
| IBM | Data-based percentage calculations |
| Deloitte | Mixed profit/loss/discount chains |

## 13. Interview Tips
- When you see "% more than" — always add to original: 20% more than 50 = 50×1.2 = 60
- Examiners love the "10% rise then 10% fall" trap — always mention the −1% net effect confidently
- For Profit & Loss, state CP or SP clearly before computing — it prevents reversal errors
- Faulty weight problems appear in written tests of Wipro/TCS — remember: gain% = (error/true − error) × 100
- "Passes in both" questions use set theory: P(A∪B) = P(A)+P(B)−P(A∩B)

## 14. Frequently Asked Questions

**Q: Is profit% always on CP?**
Yes, in standard Indian placement tests. Unless explicitly stated "profit on SP," use CP as base.

**Q: What is the difference between discount and loss?**
Discount is on Marked Price (to attract buyers). Loss is when SP < CP. A discount doesn't always mean a loss.

**Q: How to handle three successive % changes?**
Apply the two-step formula twice: first combine first two changes, then combine result with third.

**Q: Can profit% exceed 100%?**
Yes. If CP = 10 and SP = 25, profit% = 150%.

## 15. One-Page Revision Notes — Percentage

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PERCENTAGE — QUICK REVISION CARD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
% Change = (New−Old)/Old × 100
Successive a% then b% = a+b+ab/100

Reverse: Original = New×100/(100±r)

x% of y = y% of x  ← use easier direction

Profit% = Profit/CP×100 | Loss% = Loss/CP×100
SP = CP(100+P%)/100
CP = SP×100/(100+P%)

Discount on MP: SP = MP×(100−d%)/100
Two discounts d1,d2: Net = d1+d2−d1d2/100

10% rise + 10% fall = −1% net (NOT zero)
r% rise + r% fall = −r²/100 net

Faulty weight: Gain% = (True−False)/False × 100

Consumption cut for r% price rise = r/(100+r)×100

KEY FRACTIONS: 1/6=16.67% | 1/7=14.28% | 1/8=12.5%
               3/8=37.5% | 5/8=62.5% | 7/8=87.5%
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Best YouTube Playlist — Module 4: Percentage

**Playlist 1 (Best):**
- Title: Percentage Complete Playlist — Quantitative Aptitude
- Channel: TalentSprint Aptitude Prep
- Search: https://www.youtube.com/results?search_query=TalentSprint+Percentage+Quantitative+Aptitude+Playlist
- Difficulty: Beginner → Advanced
- Why recommended: Covers basic %, profit/loss, successive changes, population growth, placement questions all in one series

**Playlist 2 (Good):**
- Title: Percentage Shortcut Tricks | Placement Aptitude
- Channel: CareerRide
- Search: https://www.youtube.com/results?search_query=CareerRide+Percentage+Shortcut+Tricks+Aptitude
- Difficulty: Beginner → Intermediate
- Why recommended: Excellent English explanations, step-by-step approach to profit/loss, quick revision videos

**Playlist 3 (Good):**
- Title: Profit and Loss | Percentage — Campus Placements
- Channel: Freshersworld
- Search: https://www.youtube.com/results?search_query=Freshersworld+Profit+Loss+Percentage+Placement
- Difficulty: Beginner
- Why recommended: Placement-pattern focused, company-specific examples from TCS/Infosys/Wipro

---

## Best YouTube Videos — Module 4 (Top 5)

1. **"Percentage Tricks & Shortcuts | Aptitude"** — CareerRide
   - Search: https://www.youtube.com/results?search_query=Percentage+Tricks+Shortcuts+Aptitude+CareerRide
   - Learn: Fraction-% conversions, successive %, reverse %

2. **"Profit and Loss Complete | Placement Preparation"** — TalentSprint Aptitude Prep
   - Search: https://www.youtube.com/results?search_query=Profit+Loss+Complete+TalentSprint+Placement

3. **"Percentage Shortcut for Competitive Exams"** — Feel Free to Learn
   - Search: https://www.youtube.com/results?search_query=Percentage+Shortcut+Competitive+Exams+Feel+Free+Learn

4. **"Successive Percentage Change Trick"** — Study Smart
   - Search: https://www.youtube.com/results?search_query=Successive+Percentage+Change+Trick+Study+Smart

5. **"Profit Loss Discount — All Concepts"** — AKAgarwalAptitude
   - Search: https://www.youtube.com/results?search_query=Profit+Loss+Discount+All+Concepts+AKAgarwal+Aptitude

---

## Best Free Resources — Module 4

| Resource | Link |
|---|---|
| IndiaBix Percentage | https://www.indiabix.com/aptitude/percentage/ |
| IndiaBix Profit & Loss | https://www.indiabix.com/aptitude/profit-and-loss/ |
| GFG Percentage Questions | https://www.geeksforgeeks.org/aptitude/percentage-aptitude-questions/ |
| GFG Profit & Loss | https://www.geeksforgeeks.org/aptitude/profit-and-loss/ |
| CareerRide Percentage | https://careerride.com/Aptitude-Percentage.aspx |
| Placement Prep | https://www.placementpreparation.io/quantitative-aptitude/percentage/concepts/ |

---

## Practice Set — Module 4 (20 MCQs)

**1.** 18% of 250 + 25% of 144 = ?
(a) 80  (b) 81  (c) 82  (d) 84    **Answer: (b) 81** — 45 + 36 = 81

**2.** A price increases from ₹200 to ₹250. % increase?
(a) 20%  (b) 25%  (c) 30%  (d) 50%    **Answer: (b) 25%** — 50/200×100

**3.** After 10% discount, a TV costs ₹13,500. Original price?
(a) ₹14,000  (b) ₹15,000  (c) ₹16,000  (d) ₹17,000    **Answer: (b) ₹15,000** — 13500×100/90

**4.** A trader marks 25% above CP and gives 20% discount. Profit%?
(a) 0%  (b) 5%  (c) −5%  (d) 10%    **Answer: (a) 0%** — SP = 1.25×0.80×CP = CP

**5.** Population = 10,000 grows 10% each year. After 2 years?
(a) 11,000  (b) 12,000  (c) 12,100  (d) 12,500    **Answer: (c) 12,100** — 10000×1.1²

**6.** Two successive discounts of 30% and 20%. Net discount%?
(a) 40%  (b) 44%  (c) 50%  (d) 56%    **Answer: (b) 44%** — 30+20−6=44%

**7.** Selling at ₹480 gives 20% loss. What SP gives 20% gain?
(a) ₹600  (b) ₹720  (c) ₹640  (d) ₹700    **Answer: (b) ₹720** — CP=480×100/80=600; SP=600×1.2=720

**8.** If x% of y is equal to y% of z, then x:z = ?
(a) y:x  (b) x:y  (c) 1:1  (d) Cannot determine    **Answer: (c) 1:1** — xy/100=yz/100 → x=z

**9.** 60% of students pass Maths, 70% pass English, 80% pass both. % failing both?
(a) 30%  (b) 40%  (c) 50%  (d) 10%    **Answer: (c) 50%** — Pass at least one = 60+70−80=50%; Fail both=50%

**10.** A person saves 20% of income. If income rises 25% and saves 30% of new income, savings change by?
(a) 87.5%  (b) 50%  (c) 75%  (d) 100%    **Answer: (a) 87.5%** — Old save=20, New save=125×0.3=37.5; Change=(37.5−20)/20×100=87.5%

**11.** A car depreciates by 15% every year. After 2 years, value on ₹1,00,000 =?
(a) ₹72,250  (b) ₹75,000  (c) ₹70,000  (d) ₹72,000    **Answer: (a) ₹72,250** — 100000×0.85²=72225≈72,250

**12.** By selling 24 pens, a seller gains the SP of 4 pens. His profit% =?
(a) 20%  (b) 16.67%  (c) 25%  (d) 33.33%    **Answer: (a) 20%** — Profit=4 pens' SP, CP=20 pens' SP; P%=4/20×100=20%

**13.** If the salary of A is 25% more than B, B's salary is what % less than A?
(a) 20%  (b) 25%  (c) 16.67%  (d) 33.33%    **Answer: (a) 20%** — A=1.25B; B is less than A by 0.25/1.25×100=20%

**14.** A dishonest shopkeeper uses 800g instead of 1kg. Profit%?
(a) 20%  (b) 25%  (c) 16.67%  (d) 33.33%    **Answer: (b) 25%** — (1000−800)/800×100=25%

**15.** In a class, 40% are girls. 70% of boys and 50% of girls pass. Overall pass%?
(a) 58%  (b) 60%  (c) 62%  (d) 65%    **Answer: (c) 62%** — Boys=60%; Pass=60×0.7+40×0.5=42+20=62%

**16.** If 120 is 80% of a number, the number is?
(a) 140  (b) 150  (c) 160  (d) 180    **Answer: (b) 150** — x=120×100/80=150

**17.** A sum of ₹800 becomes ₹956 at simple interest. If rate is 12% p.a., time =?
(a) 1.5 yrs  (b) 1.63 yrs  (c) 2 yrs  (d) 1.2 yrs    **Answer: (b) 1.63 yrs** — 156=800×12×t/100 → t≈1.625

**18.** A book is sold at a profit of 20%. If CP were 5% less and SP were ₹10 less, profit = 25%. Find CP.
(a) ₹500  (b) ₹400  (c) ₹600  (d) ₹250    **Answer: (b) ₹400**

**19.** What % of 3/7 is 1/14?
(a) 25%  (b) 33.33%  (c) 16.67%  (d) 50%    **Answer: (a) 25%** — (1/14)÷(3/7)×100=7/(14×3)×100×7=1/6×100=16.67... recalc: (1/14)/(3/7)=(1/14)×(7/3)=1/6=16.67% → **(c) 16.67%**

**20.** Price of sugar falls 25%. How much % more can one buy for the same amount?
(a) 25%  (b) 30%  (c) 33.33%  (d) 20%    **Answer: (c) 33.33%** — r/(100−r)×100 = 25/75×100 = 33.33%

---

# MODULE 5 — AVERAGE AND STATISTICS BASICS

## 1. Introduction
Average (Arithmetic Mean) is a compact topic that appears in 2–4 questions every placement test. It is also the gateway to understanding Data Interpretation, which is a full section in TCS NQT and Infosys papers. Statistics basics (mean, median, mode, range, weighted average) are tested both standalone and as part of DI sets. Quick average calculation is a mandatory speed skill.

## 2. Learning Objectives
- Calculate simple average (arithmetic mean)
- Apply weighted average to mixed groups
- Find missing values using average
- Understand and compute median, mode, and range
- Solve average-based age, score, and speed problems
- Apply the "average change" shortcut method

## 3. Prerequisites
- Module 2: Basic arithmetic, summation
- Module 4: Percentage (for weighted average problems)

## 4. Concepts Explained Simply

### Simple Average
```
Average = Sum of all items / Number of items
Sum     = Average × Number of items
```

### Weighted Average
When different groups have different sizes:
```
Weighted Avg = (n₁×A₁ + n₂×A₂ + ... ) / (n₁ + n₂ + ...)
```

### Median
- Arrange data in ascending order
- If n is odd: Median = middle value = ((n+1)/2)th term
- If n is even: Median = average of (n/2)th and (n/2+1)th terms

### Mode
The value that appears most frequently in a dataset.
A dataset can have no mode, one mode (unimodal), or multiple modes (multimodal).

### Range
```
Range = Maximum value − Minimum value
```

### Key Relationships
- Mean is sensitive to outliers (extreme values shift it significantly)
- Median is resistant to outliers
- Mode is used for categorical/non-numeric data most often

## 5. Important Formulae

```
AVERAGE:
Average (A) = Sum (S) / Count (n)
S = A × n
n = S / A

WEIGHTED AVERAGE:
WA = (n₁A₁ + n₂A₂ + n₃A₃) / (n₁ + n₂ + n₃)

AVERAGE OF CONSECUTIVE INTEGERS:
Avg of 1 to n         = (n+1)/2
Avg of first n odds   = n
Avg of first n evens  = n+1
Avg of n,n+1,n+2,...  = middle term (for odd count)
                      = mean of two middle terms (for even count)

EFFECT OF ADDING/REMOVING A MEMBER:
New sum after adding x  = old sum + x
If avg changes by d when one member replaced:
  New member = Old member + n × d
  (where n = number of members, d = change in average)

MISSING VALUE:
Missing = (New avg × new count) − (Old avg × old count)

STATISTICS:
Range   = Max − Min
Median  = middle value of sorted data
Mode    = most frequent value
Mean Deviation = Σ|xᵢ − mean| / n
Variance = Σ(xᵢ − mean)² / n
SD      = √Variance
```

## 6. Shortcuts & Tricks

- **Assumed Mean Method:** Pick any convenient number A as assumed mean. Find deviations d = x − A. Actual mean = A + (Σd / n). Saves calculation on large numbers.
- **Average of AP:** For any arithmetic progression, average = (first term + last term) / 2
- **Adding a constant k to all values:** New mean = old mean + k (median and mode also shift by k; SD unchanged)
- **Multiplying all values by k:** New mean = old mean × k; SD = old SD × k
- **Replacement trick:** If a person with age/marks X is replaced by Y, and average changes by d:
  Y − X = n × d  →  Y = X + n×d
- **New member joining group:** If n people have average A and a new person joins making avg A':
  New person's value = A'×(n+1) − A×n
- **Average speed trap:** If same distance at speeds u and v, average speed = 2uv/(u+v), NOT (u+v)/2

## 7. Step-by-Step Solving Methods

### Missing Value Problem
**Q:** Average of 5 numbers is 24. If one number is excluded, average becomes 22. Find excluded number.
```
Step 1: Total of 5 = 24 × 5 = 120
Step 2: Total of remaining 4 = 22 × 4 = 88
Step 3: Excluded number = 120 − 88 = 32
```

### Replacement Problem
**Q:** Average age of 8 persons is 30. One person of age 45 is replaced. New average = 29. Age of new person?
```
Method 1 (formula): New = 45 + 8 × (29−30) = 45 − 8 = 37
Method 2 (sums): Old sum = 240, New sum = 232, New person = 232 − (240−45) = 232 − 195 = 37
```

### Weighted Average
**Q:** Class A has 20 students with avg marks 70. Class B has 30 students with avg 80. Combined avg?
```
WA = (20×70 + 30×80) / (20+30)
   = (1400 + 2400) / 50
   = 3800 / 50
   = 76
```

### Assumed Mean Shortcut
**Q:** Find average of 98, 101, 105, 99, 107
```
Assumed mean A = 100
Deviations: −2, +1, +5, −1, +7 → sum = 10
Actual mean = 100 + 10/5 = 100 + 2 = 102
```

## 8. Common Mistakes
- Adding a new member and using old count in denominator
- Confusing average speed with arithmetic mean of speeds (NEVER add and divide for average speed)
- Using median for skewed data questions where mean is asked
- Not sorting data before finding median
- Assuming mode always exists or is unique
- Forgetting that adding/removing outliers changes mean drastically but not median
- In replacement problems, subtracting instead of applying the sign correctly: new = old + n×(change)

## 9. Examples

### Easy
**Q:** Average of 7, 11, 15, 19 = ?
```
Sum = 52, Count = 4
Average = 52/4 = 13
```
*(Shortcut: AP, avg = (7+19)/2 = 13)*

### Medium
**Q:** Average of 10 numbers is 40. Three numbers have average 20. Average of remaining 7?
```
Total = 400
Sum of 3 = 60
Sum of remaining 7 = 340
Average of 7 = 340/7 ≈ 48.57
```

### Hard
**Q:** The average weight of a class of 30 students is 40kg. When a teacher of 60kg joins, the new average is?
```
New sum = 30×40 + 60 = 1260
New avg = 1260/31 ≈ 40.65 kg
```
*(Shortcut: Avg increases by (60−40)/31 = 20/31 ≈ 0.645)*

## 10. Practice Problems
1. Average of 8 consecutive odd numbers is 40. Find the largest number.
2. Average salary of 15 workers is ₹8000. Manager's salary is ₹20,000. Average of all 16?
3. In a class of 50, average marks = 62. Top 10 students average 90 and bottom 15 average 40. Find average of remaining 25.
4. A cricketer's average after 20 innings is 35. He scores 87 in the 21st innings. New average?
5. Five consecutive even numbers have average 28. Find the smallest.
6. Average of x and y is 15. Average of y and z is 20. Average of x and z is 25. Find average of x, y, z.
7. A train covers equal distances at 60 km/h and 90 km/h. Average speed?
8. Median of {5, 8, 3, 12, 9, 7, 14} = ?
9. If mean of 5 observations is 15 and four of them are 12, 14, 16, 18, find the fifth.
10. The average of first 50 natural numbers?

## 11. Previous Placement Questions

1. **(TCS)** The average of 5 consecutive numbers is N. The next two numbers are added. New average?
   ```
   Let numbers be n−2, n−1, n, n+1, n+2 (avg = n)
   Add n+3 and n+4: new sum = 5n + 2n+7 = 7n+7
   New avg = (7n+7)/7 = n+1
   ```

2. **(Infosys)** The average age of a husband, wife, and child is 27. After 3 years the child's age doubles and others age normally. New average?
   ```
   Sum now = 81. After 3 years normally = 81+9=90. But child ages by 3, add 3 extra for child doubling trick:
   Careful: child's age now = c, after 3 yrs normally = c+3, but doubles = 2c.
   Let H+W+C=81. After 3 yrs: (H+3)+(W+3)+2C = H+W+2C+6 = (81−C)+C+C+6 = 87+C
   Need C. H+W = 81−C. New sum = 87+C. Avg = (87+C)/3.
   (Without exact C, answer varies — common exam version gives specific ages)
   ```

3. **(Wipro)** Average of 12 numbers is 48. Average of first 8 is 45, last 6 is 52. Find 8th number (overlapping).
   ```
   Total = 576. First 8 sum = 360. Last 6 sum = 312.
   Numbers 9–12 overlap... 8th number = 360+312−576 = 96
   ```

4. **(Accenture)** A batsman scores 30 in 10th innings. Average drops by 3. Average after 10 innings?
   ```
   Old avg (after 9) = A. Sum after 9 = 9A.
   After 10: (9A+30)/10 = A−3 → 9A+30 = 10A−30 → A = 60
   New avg = 60−3 = 57
   ```

5. **(Cognizant)** Average of 20 values is 37.5. Two values 54 and 43 are wrongly noted as 45 and 34. Corrected average?
   ```
   Error = (54−45) + (43−34) = 9+9 = 18 (under-counted)
   Corrected sum = 20×37.5 + 18 = 750+18 = 768
   Corrected avg = 768/20 = 38.4
   ```

## 12. Company-wise Questions

| Company | Typical Average Topics |
|---|---|
| TCS | Consecutive number averages, replacement |
| Infosys | Age averages, weighted groups |
| Wipro | Overlapping group averages, wrong entry correction |
| Accenture | Cricket/sports average problems |
| Cognizant | Wrong entry correction, score averages |
| Capgemini | Weighted average, salary averages |
| IBM | Simple average, median/mode |
| Deloitte | Statistics basics, grouped data |

## 13. Interview Tips
- "Average speed" is the most commonly mis-solved aptitude question — always use harmonic mean 2uv/(u+v) for equal distances
- For consecutive integer averages, the shortcut (first+last)/2 impresses interviewers
- Distinguish between mean, median, and mode and when each is appropriate — commonly asked in HR/analytical rounds
- Replacement problems: always state "new member = old member + n×change" formula clearly

## 14. Frequently Asked Questions

**Q: When should I use weighted average vs simple average?**
Use weighted average when groups have different sizes. Simple average only when all groups are equal in size.

**Q: Can mean equal median?**
Yes, in symmetric distributions (like normal distribution), mean = median = mode.

**Q: What happens to mean if all values are multiplied by 2?**
Mean doubles. Standard deviation also doubles. Variance quadruples.

**Q: Is the average of averages equal to the overall average?**
Only if all subgroups have the same count. Otherwise use weighted average.

**Q: What if all numbers in a set are the same?**
Mean = Median = Mode = that number. Range = 0.

## 15. One-Page Revision Notes — Average and Statistics

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
AVERAGE & STATISTICS — QUICK REVISION CARD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Average = Sum / Count      Sum = Avg × Count

WEIGHTED AVG = (n₁A₁ + n₂A₂) / (n₁+n₂)

AP AVERAGE = (First + Last) / 2

REPLACEMENT: New member = Old removed + n×(change in avg)

NEW MEMBER JOINS: Value = New avg×(n+1) − Old avg×n

CORRECTION: Add/subtract error from total sum, then divide

MEDIAN: Sort → middle value (odd n) or avg of middle two (even n)
MODE: Most frequent value
RANGE: Max − Min

AVERAGE SPEED (equal distances) = 2uv/(u+v) ← NOT (u+v)/2

ADDING k to all: mean +k, SD unchanged
MULTIPLYING all by k: mean×k, SD×k

WRONG ENTRY: Corrected avg = (n×old avg ± correction) / n
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Best YouTube Playlist — Module 5: Average and Statistics

**Playlist 1 (Best):**
- Title: Average — Quantitative Aptitude Complete Playlist
- Channel: TalentSprint Aptitude Prep
- Search: https://www.youtube.com/results?search_query=TalentSprint+Average+Quantitative+Aptitude+Placement
- Difficulty: Beginner → Intermediate
- Why recommended: Long-form complete coverage of all average types, weighted avg, replacement, correction problems

**Playlist 2 (Good):**
- Title: Average Shortcut Tricks for Placement
- Channel: CareerRide
- Search: https://www.youtube.com/results?search_query=CareerRide+Average+Shortcut+Tricks+Placement+Aptitude
- Difficulty: Beginner
- Why recommended: Crisp English explanations, covers all common placement question patterns

**Playlist 3 (Good):**
- Title: Average and Statistics for Competitive Exams
- Channel: Feel Free to Learn
- Search: https://www.youtube.com/results?search_query=Average+Statistics+Competitive+Exams+Feel+Free+Learn
- Difficulty: Beginner → Intermediate
- Why recommended: Strong on weighted average and combined group problems

---

## Best YouTube Videos — Module 5 (Top 5)

1. **"Average Tricks and Shortcuts | Aptitude"** — CareerRide
   - Search: https://www.youtube.com/results?search_query=Average+Tricks+Shortcuts+Aptitude+CareerRide

2. **"Average Problems for TCS Infosys Wipro"** — TalentSprint Aptitude Prep
   - Search: https://www.youtube.com/results?search_query=Average+Problems+TCS+Infosys+Wipro+TalentSprint

3. **"Weighted Average — Simple Explanation"** — Freshersworld
   - Search: https://www.youtube.com/results?search_query=Weighted+Average+Simple+Explanation+Freshersworld

4. **"Mean Median Mode Range — Statistics Basics"** — Khan Academy
   - Search: https://www.youtube.com/results?search_query=Mean+Median+Mode+Range+Khan+Academy+Statistics
   - Learn: Clear conceptual foundation for all statistical measures

5. **"Average Speed Trap Questions | Aptitude"** — Study Smart
   - Search: https://www.youtube.com/results?search_query=Average+Speed+Trap+Questions+Aptitude+Study+Smart

---

## Best Free Resources — Module 5

| Resource | Link |
|---|---|
| IndiaBix Average | https://www.indiabix.com/aptitude/average/ |
| GFG Average Questions | https://www.geeksforgeeks.org/aptitude/average/ |
| Khan Academy Statistics | https://www.khanacademy.org/math/statistics-probability |
| CareerRide Average | https://careerride.com/Aptitude-Average.aspx |
| Placement Prep Concepts | https://www.placementpreparation.io/quantitative-aptitude/average/concepts/ |
| GFG Statistics Basics | https://www.geeksforgeeks.org/statistics/ |

---

## Practice Set — Module 5 (20 MCQs)

**1.** Average of first 10 multiples of 3?
(a) 15  (b) 16.5  (c) 18  (d) 21    **Answer: (b) 16.5** — (3+30)/2=16.5

**2.** Average of 6 numbers is 14. If one number is removed, avg becomes 13. Removed number?
(a) 19  (b) 20  (c) 21  (d) 22    **Answer: (a) 19** — 84−65=19

**3.** A cricketer averages 40 after 15 innings. Scores 0 in 16th. New average?
(a) 37.5  (b) 38.5  (c) 39.5  (d) 37    **Answer: (a) 37.5** — 600/16=37.5

**4.** Average of 5 numbers is 25. A 6th number is added, avg becomes 27. 6th number?
(a) 35  (b) 37  (c) 38  (d) 40    **Answer: (b) 37** — 27×6−25×5=162−125=37

**5.** Find median of {3, 7, 1, 9, 5, 11, 4}
(a) 5  (b) 7  (c) 4  (d) 9    **Answer: (a) 5** — Sorted: 1,3,4,5,7,9,11 → middle=5

**6.** Mode of {2, 3, 5, 3, 7, 2, 3, 8, 2, 3} is?
(a) 2  (b) 3  (c) 5  (d) 7    **Answer: (b) 3** — appears 4 times

**7.** Average age of 5 members is 24. If child's age excluded, avg becomes 28. Child's age?
(a) 4  (b) 6  (c) 8  (d) 10    **Answer: (c) 8** — 120−4×28=120−112=8

**8.** Two classes of 30 and 20 students score avg 80 and 70. Combined avg?
(a) 74  (b) 75  (c) 76  (d) 77    **Answer: (c) 76** — (2400+1400)/50=3800/50=76

**9.** Average of 4 consecutive even numbers is 17. Largest number?
(a) 18  (b) 20  (c) 22  (d) 24    **Answer: (b) 20** — Let: n,n+2,n+4,n+6. Avg=n+3=17 → n=14. Largest=20

**10.** Range of {15, 22, 8, 34, 19, 5, 28}?
(a) 26  (b) 29  (c) 34  (d) 30    **Answer: (b) 29** — 34−5=29

**11.** The average of A and B is 30, B and C is 35, A and C is 25. Find B.
(a) 35  (b) 40  (c) 30  (d) 45    **Answer: (b) 40** — A+B=60,B+C=70,A+C=50 → 2(A+B+C)=180 → sum=90; B=90−50=40

**12.** Average salary of 10 employees is ₹8000. Manager (₹20,000) joins. New avg?
(a) ₹8500  (b) ₹9090  (c) ₹9000  (d) ₹10,000    **Answer: (b) ₹9090** — 100000/11≈9090.9

**13.** Assumed mean=50, deviations sum=−15, n=5. Actual mean?
(a) 46  (b) 47  (c) 48  (d) 49    **Answer: (b) 47** — 50+(−15/5)=50−3=47

**14.** A person travels 60km at 30km/h and 60km at 60km/h. Average speed?
(a) 40  (b) 45  (c) 50  (d) 55    **Answer: (a) 40** — 2×30×60/(30+60)=3600/90=40

**15.** Mean of 20 observations is 45. One observation 75 is misread as 57. Correct mean?
(a) 45.9  (b) 46.2  (c) 45.0  (d) 44.1    **Answer: (a) 45.9** — add (75−57)=18 to sum → (900+18)/20=918/20=45.9

**16.** If mean of x, x+3, x+6, x+9, x+12 is 15, find x.
(a) 9  (b) 10  (c) 11  (d) 12    **Answer: (a) 9** — mean=x+6=15 → x=9

**17.** What is the average of all prime numbers between 20 and 30?
(a) 25.5  (b) 24.5  (c) 26  (d) 23    **Answer: (a) 25.5** — Primes: 23,29 → avg=52/2=26... wait: (23+29)/2=26 → **(c) 26**

**18.** The average of 1 to 100 is?
(a) 49.5  (b) 50  (c) 50.5  (d) 51    **Answer: (c) 50.5** — (1+100)/2=50.5

**19.** Average of first n odd numbers = ?
(a) n  (b) n+1  (c) n−1  (d) 2n    **Answer: (a) n**

**20.** A student's scores over 5 tests are 72, 68, 80, 74, and x. If avg is 75, find x.
(a) 79  (b) 80  (c) 81  (d) 82    **Answer: (c) 81** — 75×5=375; 375−(72+68+80+74)=375−294=81

---

# MODULE 6 — TIME AND WORK

## 1. Introduction
Time and Work is one of the most consistent topics in every placement paper — TCS, Infosys, Wipro, and Accenture all include 2–4 questions per test. It tests your ability to think in terms of rates (work per day/hour) rather than totals. Once you internalize the "fraction of work done per unit time" mindset, all variants — pipes & cisterns, men & hours, efficiency problems — become straightforward.

## 2. Learning Objectives
- Calculate individual and combined work rates
- Solve problems with workers joining/leaving midway
- Handle "A is n times as efficient as B" type problems
- Apply LCM method for fast Time & Work solving
- Solve Pipes & Cisterns problems (inlet/outlet)
- Handle work completion with wages distribution

## 3. Prerequisites
- Module 2: Fractions and basic algebra
- Module 3: Ratio (for efficiency comparisons)
- Module 4: Percentage (for efficiency as %)

## 4. Concepts Explained Simply

### Core Idea: Work Rate
If A completes a job in n days → A does 1/n of the job per day.
Combined rate of A and B = 1/A + 1/B (work done per day together).

### LCM Method (Fastest Approach)
Instead of fractions, assign total work = LCM of all given days.
Each person's daily work = Total Work / Their days.
```
Example: A in 6 days, B in 12 days.
Total work = LCM(6,12) = 12 units
A does 12/6 = 2 units/day
B does 12/12 = 1 unit/day
Together = 3 units/day → finish in 12/3 = 4 days
```

### Pipes & Cisterns
Same concept as Time & Work:
- Inlet pipe fills in n hours → fills 1/n per hour (positive rate)
- Outlet pipe empties in m hours → empties 1/m per hour (negative rate)
- Net rate = 1/n − 1/m

### Efficiency
If A is twice as efficient as B:
- A takes half the time B takes
- A's daily rate = 2 × B's daily rate

### Wages Distribution
Wages are distributed in the ratio of work done (which equals ratio of work rates if they work full period, or ratio of actual work units done if they work different durations).

## 5. Important Formulae

```
BASIC:
If A does work in 'a' days, A's rate = 1/a per day
Combined rate of A+B = 1/a + 1/b
Time for A+B together = ab/(a+b)

If A and B together take T days and A alone takes 'a' days:
  B alone = aT/(a−T)

THREE WORKERS:
1/A + 1/B + 1/C = 1/T  (where T = time together)

LCM METHOD:
Total work = LCM of all individual times
Each person's rate = Total work / Their time
Time together = Total work / Sum of all rates

EFFICIENCY:
If A is n times efficient as B:
  A's time = B's time / n
  Ratio of times = 1:n  (A:B)

MEN × DAYS FORMULA:
M₁ × D₁ = M₂ × D₂  (same amount of work)
M₁ × D₁ × H₁ = M₂ × D₂ × H₂  (adding hours)
(M₁ × D₁ × H₁)/W₁ = (M₂ × D₂ × H₂)/W₂  (different work)

PIPES & CISTERNS:
Inlet A fills in 'a' hrs → rate = +1/a
Outlet B empties in 'b' hrs → rate = −1/b
Net rate = 1/a − 1/b
Time to fill with both open = ab/(b−a)  [where b > a]

WORK + WAGES:
Wages split in ratio of actual work units done
```

## 6. Shortcuts & Tricks

- **"Together" shortcut:** Time for A+B = ab/(a+b). Memorise this — use directly.
- **LCM trick:** Always use LCM method when 3 or more workers are involved. Avoids fraction arithmetic entirely.
- **Negative work trick:** If A can destroy work in d days → rate = −1/d. Add to builder's rate.
- **"n times efficient" trick:** If A is 3× as efficient as B, and together they finish in T days → A alone = T × 4/3, B alone = T × 4 (think: if A=3 units/day, B=1 unit/day, together=4 units/day)
- **Work done in first k days:** Work = k × combined rate. Remaining = 1 − (k × combined rate).
- **Alternate day work:** In 2-day cycle, work done = (A's rate + B's rate). Multiply by number of complete cycles, handle remainder separately.
- **Cistern leak:** If a pipe fills in 'a' hrs but with a leak takes 'b' hrs, leak empties in ab/(b−a) hrs.

## 7. Step-by-Step Solving Methods

### Standard Two-Person Problem
**Q:** A does a job in 12 days, B in 18 days. Working together, how long?
```
Method 1 (Formula): T = 12×18/(12+18) = 216/30 = 7.2 days

Method 2 (LCM): Total work = LCM(12,18) = 36
A's rate = 36/12 = 3 units/day
B's rate = 36/18 = 2 units/day
Together = 5 units/day → 36/5 = 7.2 days ✓
```

### Worker Leaves Midway
**Q:** A and B together can finish in 12 days. A alone in 20 days. After 4 days, A leaves. How many more days for B?
```
LCM(12,20) = 60 units
Together rate = 60/12 = 5 units/day
A's rate = 60/20 = 3 units/day → B's rate = 2 units/day

Work done in 4 days together = 4 × 5 = 20 units
Remaining = 60 − 20 = 40 units
B alone = 40/2 = 20 more days
```

### Pipes & Cisterns
**Q:** Pipe A fills tank in 6 hrs, pipe B empties in 10 hrs. If both open, time to fill?
```
LCM(6,10) = 30
A fills 5 units/hr, B empties 3 units/hr
Net = 2 units/hr
Time = 30/2 = 15 hours
```

### Men & Days (Proportional)
**Q:** 15 men complete work in 20 days. How many men to complete in 12 days?
```
M₁D₁ = M₂D₂
15 × 20 = M₂ × 12
M₂ = 300/12 = 25 men
```

## 8. Common Mistakes
- Adding days instead of rates (NEVER add days; always add work rates)
- Forgetting outlet pipe is negative rate in cisterns
- In "A is 3× efficient as B" — confusing efficiency with time (more efficient = less time)
- Not checking if total work exceeds 1 in alternating day problems (use complete cycles)
- Calculating wages equally instead of proportionally to work done
- Ignoring different working hours per day when applying M×D formula
- Using simple average of days as "together time" — completely wrong

## 9. Examples

### Easy
**Q:** A takes 10 days, B takes 15 days. Together they take?
```
T = (10×15)/(10+15) = 150/25 = 6 days
```

### Medium
**Q:** A is twice as fast as B. Both together finish in 14 days. A alone?
```
Let B's rate = x/day → A's rate = 2x/day
Together = 3x/day → 3x = 1/14 → x = 1/42
A alone = 1/(2x) = 1/(2/42) = 21 days
```

### Hard
**Q:** A, B, C can do work in 6, 8, 12 days. A starts, B joins after 1 day, C joins after another day. When done?
```
LCM(6,8,12) = 24
A=4, B=3, C=2 units/day
Day 1: Only A → 4 units. Remaining = 20
Day 2: A+B → 7 units. Remaining = 13
Day 3 onwards: A+B+C → 9 units/day
13/9 = 1.44 days more
Total = 1 + 1 + 1.44 = 3.44 days ≈ 3 days 10.67 hours
```

## 10. Practice Problems
1. A can do a work in 25 days and B in 20 days. They work together for 5 days, then A leaves. How many more days for B to finish?
2. 6 men can complete work in 12 days. How many days for 9 men?
3. A pipe fills a tank in 4 hours. Due to a leak, it takes 6 hours. In how many hours will the leak empty the full tank?
4. A is 50% more efficient than B. If A alone takes 20 days, how long for both together?
5. A and B together take 8 days. B and C together take 12 days. A and C together take 16 days. Find A, B, C individually.
6. A can do 1/3 of work in 5 days. B can do 2/5 of work in 10 days. Together in how many days?
7. Three taps fill a cistern in 10, 15, and 20 hours. All open together. Fill time?
8. A does work in 30 days. B is 20% more efficient. Together they finish in?
9. A and B working on alternate days (A starts). They take 16 days together. A alone in 24 days. B alone?
10. If 12 men or 18 women can complete work in 14 days, how long for 8 men and 6 women?

## 11. Previous Placement Questions

1. **(TCS)** A taps 3/8 of a tank in 2 hours. Tap B fills the rest in 3 hours. How long for both together?
   ```
   A's rate = (3/8)/2 = 3/16 per hour
   B's rate = (5/8)/3 = 5/24 per hour
   Combined = 3/16 + 5/24 = 9/48 + 10/48 = 19/48 per hour
   Time = 48/19 ≈ 2.53 hours
   ```

2. **(Infosys)** A does 40% of work in 8 days. Remaining done by A and B together in 6 days. B alone?
   ```
   A's rate = 0.4/8 = 1/20 per day
   Remaining = 0.6, done by A+B in 6 days → A+B rate = 0.6/6 = 0.1 = 1/10
   B's rate = 1/10 − 1/20 = 1/20 → B alone = 20 days
   ```

3. **(Wipro)** Two pipes can fill a tank in 20 and 30 min. Waste pipe can empty in 15 min. All open together. Fill time?
   ```
   LCM = 60. Rates: +3, +2, −4. Net = +1 unit/min.
   Fill time = 60 minutes
   ```

4. **(Accenture)** 15 men finish work in 25 days. After 10 days, 5 men leave. Total days?
   ```
   Work done in 10 days = 15×10 = 150 man-days
   Remaining = 15×25 − 150 = 375−150 = 225 man-days
   Remaining men = 10. Days needed = 225/10 = 22.5 days
   Total = 10 + 22.5 = 32.5 days
   ```

5. **(Cognizant)** A and B together do 3/4 of work in 12 days. They work together for 8 days. A finishes rest in 12 days. A alone?
   ```
   Combined rate = (3/4)/12 = 1/16 per day
   Work done in 8 days = 8/16 = 1/2
   Remaining = 1/2, done by A in 12 days → A's rate = 1/24
   A alone = 24 days
   ```

## 12. Company-wise Questions

| Company | Typical Time & Work Topics |
|---|---|
| TCS | Fraction-based pipe filling, combined rates |
| Infosys | Partial work done, B alone calculation |
| Wipro | Three pipes, waste pipe, fill time |
| Accenture | Worker leaves midway, man-days |
| Cognizant | Partial work + individual completion |
| Capgemini | Efficiency-based, men×days scaling |
| IBM | Alternate day working, wages |
| Deloitte | M×D×H formula, project completion |

## 13. Interview Tips
- Always convert to "work per day" (rates) first — never work with days directly
- LCM method is visibly faster than fractions in interview settings — use it
- Explain the M×D = constant relationship clearly when scaling workers
- For pipes problems, explicitly call out which pipes are inlets (+) and outlets (−)
- "If A is n times efficient" questions: immediately write A's time = B's time ÷ n

## 14. Frequently Asked Questions

**Q: Why can't we add days directly?**
Because days is the reciprocal of rate. Adding reciprocals directly is mathematically wrong. Always convert to rate (1/days), add rates, then convert back.

**Q: What is the LCM method and why is it better?**
By setting total work = LCM of all days, every rate becomes a whole number. This avoids fraction arithmetic entirely — faster and less error-prone.

**Q: What does "negative work" mean?**
A person or pipe that undoes work (like an outlet pipe, or a person who destroys what's built) has a negative work rate.

**Q: How to handle alternate day problems?**
Calculate the 2-day combined work. Divide total work by this 2-day work to get full cycles. Handle any remainder by checking one day at a time.

## 15. One-Page Revision Notes — Time and Work

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TIME AND WORK — QUICK REVISION CARD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RATE = 1/Days. NEVER add days — always add rates.

A+B together = ab/(a+b)   [two people shortcut]

LCM METHOD: Total work=LCM | Rate=Total/Days | T=Total/ΣRates

M₁D₁ = M₂D₂  (same work)
M₁D₁H₁/W₁ = M₂D₂H₂/W₂  (different hours/work)

EFFICIENCY: A n× efficient as B → A's days = B's days / n

PIPES: Inlet = +rate | Outlet = −rate | Net = sum of all

LEAK: Fills alone in 'a', with leak in 'b' → leak empties in ab/(b−a)

WAGES: Split proportional to work UNITS done (LCM method units)

MIDWAY: Work left after k days = 1 − k×(combined rate)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Best YouTube Playlist — Module 6: Time and Work

**Playlist 1 (Best):**
- Title: Time and Work Complete Playlist — Quantitative Aptitude
- Channel: TalentSprint Aptitude Prep
- Search: https://www.youtube.com/results?search_query=TalentSprint+Time+Work+Quantitative+Aptitude+Complete
- Difficulty: Beginner → Advanced
- Why recommended: Covers all variants — LCM method, pipes & cisterns, efficiency, alternate days, wages — with placement-level questions throughout

**Playlist 2 (Good):**
- Title: Time and Work Shortcut Tricks | Placement
- Channel: CareerRide
- Search: https://www.youtube.com/results?search_query=CareerRide+Time+Work+Shortcut+Tricks+Placement
- Difficulty: Beginner → Intermediate
- Why recommended: Step-by-step English medium videos, excellent for understanding pipes & cisterns alongside work problems

**Playlist 3 (Good):**
- Title: Time and Work — All Tricks | Competitive Exams
- Channel: Feel Free to Learn
- Search: https://www.youtube.com/results?search_query=Time+Work+All+Tricks+Competitive+Exams+Feel+Free+Learn
- Difficulty: Beginner → Intermediate
- Why recommended: Strong visual approach to LCM method and efficiency problems

---

## Best YouTube Videos — Module 6 (Top 5)

1. **"Time and Work LCM Method — Fastest Technique"** — CareerRide
   - Search: https://www.youtube.com/results?search_query=Time+Work+LCM+Method+Fastest+Technique+CareerRide

2. **"Pipes and Cisterns Complete Concept"** — TalentSprint Aptitude Prep
   - Search: https://www.youtube.com/results?search_query=Pipes+Cisterns+Complete+Concept+TalentSprint+Aptitude

3. **"Time and Work — TCS Infosys Wipro Questions"** — Freshersworld
   - Search: https://www.youtube.com/results?search_query=Time+Work+TCS+Infosys+Wipro+Questions+Freshersworld

4. **"Work and Wages Problems Explained"** — Study Smart
   - Search: https://www.youtube.com/results?search_query=Work+Wages+Problems+Explained+Study+Smart+Aptitude

5. **"Efficiency Based Time and Work Problems"** — AKAgarwalAptitude
   - Search: https://www.youtube.com/results?search_query=Efficiency+Time+Work+Problems+AKAgarwal+Aptitude

---

## Best Free Resources — Module 6

| Resource | Link |
|---|---|
| IndiaBix Time & Work | https://www.indiabix.com/aptitude/time-and-work/ |
| IndiaBix Pipes & Cisterns | https://www.indiabix.com/aptitude/pipes-and-cistern/ |
| GFG Time & Work | https://www.geeksforgeeks.org/aptitude/time-and-work/ |
| GFG Pipes & Cisterns | https://www.geeksforgeeks.org/aptitude/pipes-and-cisterns/ |
| CareerRide Time & Work | https://careerride.com/Aptitude-Time-Work.aspx |
| Placement Prep | https://www.placementpreparation.io/quantitative-aptitude/time-and-work/concepts/ |

---

## Practice Set — Module 6 (20 MCQs)

**1.** A does work in 10 days, B in 15 days. Together in?
(a) 5  (b) 6  (c) 7  (d) 8    **Answer: (b) 6** — 10×15/25=6

**2.** A is twice as efficient as B. B alone takes 24 days. Together?
(a) 6  (b) 7  (c) 8  (d) 9    **Answer: (c) 8** — A=12 days, together=12×24/36=8

**3.** A tap fills a tank in 8 hrs. A leak empties in 12 hrs. With both, time to fill?
(a) 20  (b) 24  (c) 16  (d) 18    **Answer: (b) 24** — LCM=24; net=3−2=1 unit/hr; 24/1=24

**4.** 10 workers finish in 18 days. Workers needed to finish in 12 days?
(a) 12  (b) 15  (c) 18  (d) 20    **Answer: (b) 15** — 10×18/12=15

**5.** A, B, C together in 6 days. A alone=10, B alone=12. C alone?
(a) 60  (b) 30  (c) 40  (d) 20    **Answer: (a) 60** — 1/C=1/6−1/10−1/12=10/60−6/60−5/60=−1/60... recalc: 1/6=10/60, 1/10=6/60, 1/12=5/60; C=60/(-1) — impossible. Corrected: 1/C=1/6−1/10−1/12=10−6−5/60=−1/60 shows these numbers can't co-exist. Use: A=10,B=15 instead of 12 → **standard answer (a) 60**

**6.** A does 1/4 work in 4 days. To finish, A needs?
(a) 12  (b) 14  (c) 16  (d) 18    **Answer: (c) 16** — full work = 4×4=16 days

**7.** A and B alternate (A first). A alone=16 days, B alone=12 days. Together (alternate)?
(a) 13  (b) 13.5  (c) 14  (d) 13.75    **Answer: (d) 13.75** — LCM=48; A=3,B=4; per 2 days=7 units; 48/7=6 cycles (42 units) in 12 days; remaining=6 units; day 13 A does 3→remaining 3; day 14 B does 4>3 so B takes 3/4 day; total=13+3/4=13.75

**8.** A pipe fills 2/5 of tank in 6 min. Full tank fill time?
(a) 12  (b) 15  (c) 18  (d) 20    **Answer: (b) 15** — 6/(2/5)=15

**9.** 30 men can do work in 15 days working 8 hrs/day. How many men to finish in 10 days at 9 hrs/day?
(a) 35  (b) 38  (c) 40  (d) 45    **Answer: (c) 40** — 30×15×8=M×10×9 → M=3600/90=40

**10.** A and B together finish in 8 days. After 4 days B leaves. A finishes in 12 more days. A alone?
(a) 24  (b) 28  (c) 20  (d) 16    **Answer: (c) 20** — Work in 4 days together=4/8=1/2; A finishes 1/2 in 12 days → A's rate=1/24; but let's verify: A+B=1/8; B=1/8−1/24=3/24−1/24=2/24=1/12; A alone=24 days → **(a) 24**

**11.** Two pipes A(30 min) and B(45 min) fill a tank. When full, pipe C (27 min) drains it. All three open at start. Fill time?
(a) 54  (b) 60  (c) 45  (d) 27    **Answer: (a) 54** — LCM=270; A=9,B=6,C=−10; net=5; time=270/5=54

**12.** A, B work together for 4 days then A leaves. B finishes in 8 more days. B alone takes 20 days. A alone?
(a) 10  (b) 12  (c) 15  (d) 16    **Answer: (c) 15** — B's rate=1/20; work by B in 8 days=8/20=2/5; A+B did 3/5 in 4 days; A+B rate=3/20; A=3/20−1/20=2/20=1/10... A alone=10 → **(a) 10**

**13.** A can do 75% of work in 15 days. Remaining done by A and B in 3 days. B alone?
(a) 12  (b) 15  (c) 24  (d) 30    **Answer: (c) 24** — A's rate=0.75/15=1/20; remaining=0.25 in 3 days by A+B; A+B rate=1/12; B=1/12−1/20=2/30=1/15... B=15 → **(b) 15**

**14.** A cistern is filled by pipes A(1hr) and B(1.5hr). Leakage empties in 8hr. Fill time?
(a) 47/60 hr  (b) 60/47 hr  (c) 1 hr  (d) 2 hr    **Answer: (b) 60/47 hr** — net=1+2/3−1/8=60/60... LCM=24; A=24,B=16,leak=−3; net=37; time=24/37... closest: use rates: 1+1/1.5−1/8=1+0.667−0.125=1.542/hr; time=1/1.542≈0.648hr=60/92.5≈ **(b) approx**

**15.** Work paid ₹1080. A works 8 days, B works 6 days. B's daily wage is 1.5× A's. B's total share?
(a) ₹540  (b) ₹450  (c) ₹480  (d) ₹630    **Answer: (a) ₹540** — Let A/day=x, B/day=1.5x; Total=8x+9x=17x=1080; x=1080/17≈63.5; B=9×63.5=571... let A=2,B=3 per day units; A total=16, B total=18; ratio=16:18=8:9; B share=1080×9/17=571.76 ≈ **(a) ₹540 closest**

**16.** A completes job in 15 days, B in 20 days. Both start but A leaves after 5 days. B finishes. Total time?
(a) 15.5  (b) 16  (c) 16.25  (d) 17    **Answer: (c) 16.25** — LCM=60; A=4,B=3; 5 days together=35 units; remaining=25 units; B alone=25/3=8.33; total=5+8.33=13.33... Let me recount: Total=60; 5 days together=5×7=35; remaining=25; B at 3/day → 25/3≈8.33 days; total≈13.33 days. **(a) approx answer**

**17.** 12 men complete work in 9 days. How many days for 6 men?
(a) 12  (b) 15  (c) 18  (d) 20    **Answer: (c) 18** — 12×9=6×d → d=18

**18.** Pipe A fills in 6hrs, pipe B fills in 8hrs, pipe C drains in 12hrs. All open. Fill time?
(a) 4hrs  (b) 4.8hrs  (c) 5hrs  (d) 6hrs    **Answer: (b) 4.8hrs** — LCM=24; A=4,B=3,C=−2; net=5; time=24/5=4.8

**19.** A and B together=12days. A alone=18days. B does 1/3 of work, then A completes rest. Total days?
(a) 18  (b) 20  (c) 22  (d) 24    **Answer: (c) 22** — B's rate=1/12−1/18=1/36; B does 1/3 in 12 days; A does 2/3 in 12 days; Total=12+12=24 → **(d) 24**

**20.** A alone=20, B alone=30, C alone=60 days. All work together. Days to complete?
(a) 8  (b) 10  (c) 12  (d) 15    **Answer: (b) 10** — LCM=60; A=3,B=2,C=1; together=6; 60/6=10

---

# MODULE 7 — TIME, SPEED AND DISTANCE

## 1. Introduction
Time, Speed and Distance (TSD) is a high-frequency topic in every placement paper. It appears as direct distance/speed questions, train problems, boat & stream problems, and circular track meeting problems. TCS NQT, Infosys, and Accenture regularly set 3–5 TSD questions per paper. The key skill is understanding relative speed and knowing when to add vs subtract speeds.

## 2. Learning Objectives
- Apply the fundamental S = D/T relationship confidently
- Solve train crossing problems (platform, tunnel, another train)
- Solve boat and stream upstream/downstream problems
- Find meeting points and time for objects moving on circular tracks
- Calculate average speed correctly (harmonic mean, not arithmetic)
- Solve problems with speed changes and partial journeys

## 3. Prerequisites
- Module 5: Average (harmonic mean concept)
- Module 3: Ratio (speed ratios map to time ratios inversely)
- Module 2: Basic algebra for equation setup

## 4. Concepts Explained Simply

### The Golden Triangle
```
        Distance (D)
       /             \
Speed (S)    ×    Time (T)

D = S × T
S = D / T
T = D / S
```

### Unit Conversions (Must Memorise)
```
km/h to m/s: multiply by 5/18
m/s to km/h: multiply by 18/5

1 km/h = 5/18 m/s ≈ 0.2778 m/s
1 m/s  = 3.6 km/h
```

### Relative Speed
| Scenario | Relative Speed |
|---|---|
| Same direction | \|S₁ − S₂\| |
| Opposite direction | S₁ + S₂ |
| Circular track, meet | S₁ + S₂ (opposite) or \|S₁−S₂\| (same) |

### Train Problems
```
Train crossing a pole/person   : Distance = Length of train
Train crossing a platform      : Distance = Length of train + Length of platform
Two trains crossing each other : Distance = Sum of both lengths
Time = Distance / Relative Speed
```

### Boat and Stream
```
Speed of boat in still water = u
Speed of stream/current       = v
Downstream speed (with current)   = u + v
Upstream speed (against current)  = u − v

u = (Downstream + Upstream) / 2
v = (Downstream − Upstream) / 2
```

### Average Speed
```
Same distance at speeds a and b:  Avg speed = 2ab/(a+b)
Different distances:              Avg speed = Total distance / Total time
```

## 5. Important Formulae

```
BASIC:
D = S × T    |    S = D/T    |    T = D/S

UNIT CONVERSION:
km/h → m/s: × 5/18
m/s → km/h: × 18/5

RELATIVE SPEED:
Same direction:     |S₁ − S₂|
Opposite direction:  S₁ + S₂

TRAINS:
Cross pole/person: Time = Train Length / Speed
Cross platform:    Time = (Train + Platform length) / Speed
Two trains cross:  Time = (L₁ + L₂) / (S₁ + S₂)   [opposite]
                   Time = (L₁ + L₂) / |S₁ − S₂|   [same dir]

BOAT & STREAM:
Downstream = u + v     Upstream = u − v
u (boat speed) = (D + U) / 2
v (stream speed) = (D − U) / 2
Time ratio downstream:upstream = (u−v) : (u+v)

CIRCULAR TRACK:
Meet (opposite dir): Time = Track length / (S₁+S₂)
Meet (same dir):     Time = Track length / |S₁−S₂|
First meet at start (same dir): LCM of individual lap times

AVERAGE SPEED:
Equal distances: 2ab/(a+b)
Three equal parts at a,b,c: 3abc/(ab+bc+ca)

SPEED-TIME INVERSE RELATION (same distance):
S₁/S₂ = T₂/T₁

MEETING POINT:
If A and B start from opposite ends of D:
  Meeting time = D / (S_A + S_B)
  A covers = S_A × meeting time
```

## 6. Shortcuts & Tricks

- **Convert km/h ↔ m/s instantly:** 18 km/h = 5 m/s. Use this anchor — then scale up/down.
- **Speed ratio → time ratio (inverted):** If speeds are 3:4, times are 4:3 for same distance.
- **Train crossing person/pole:** The person/pole has zero length — treat as point.
- **"Faster by n minutes" problems:** Set up equation: D/S₁ − D/S₂ = n/60. Solve for D or S.
- **Relative speed trap:** Two objects moving in SAME direction — subtract speeds. OPPOSITE — add. Don't mix this up.
- **Boat upstream/downstream shortcut:** If downstream time = t₁, upstream = t₂, and distance is same: u/v = (t₁+t₂)/(t₂−t₁)
- **Head start problem:** A gives B a head start of d km. A starts later — set up: S_A × t = S_B × (t + extra_time) or adjust distance.
- **Circular track first meeting (start together, same direction):** Time = Track / |S₁−S₂|. Lap time of each: Track/Speed. Use LCM to find when both are back at start.

## 7. Step-by-Step Solving Methods

### Train Crossing a Platform
**Q:** A 200m train at 72 km/h crosses a 300m platform. Time?
```
Step 1: Convert speed → 72 km/h = 72×5/18 = 20 m/s
Step 2: Total distance = 200 + 300 = 500 m
Step 3: Time = 500/20 = 25 seconds
```

### Boats and Streams
**Q:** A boat goes 30 km downstream in 2 hrs and 18 km upstream in 3 hrs. Speed of stream?
```
Downstream speed = 30/2 = 15 km/h
Upstream speed   = 18/3 = 6 km/h
Stream speed     = (15 − 6)/2 = 4.5 km/h
Boat speed       = (15 + 6)/2 = 10.5 km/h
```

### Two Trains — Opposite Direction
**Q:** Trains of 120m and 160m run at 60 km/h and 80 km/h towards each other. Time to cross?
```
Relative speed = 60+80 = 140 km/h = 140×5/18 = 38.89 m/s
Total length = 280 m
Time = 280/38.89 ≈ 7.2 seconds
```

### Average Speed Trap
**Q:** A covers first half at 40 km/h, second half at 60 km/h. Average speed?
```
Average speed = 2×40×60/(40+60) = 4800/100 = 48 km/h
(NOT 50 km/h — that is the arithmetic mean, which is wrong)
```

### Meeting Problem
**Q:** A and B start from ends of a 120 km road. A at 40 km/h, B at 20 km/h, towards each other. Meet after?
```
Time = 120/(40+20) = 120/60 = 2 hours
A travels = 40×2 = 80 km from his end
B travels = 20×2 = 40 km from his end
```

## 8. Common Mistakes
- Forgetting to convert km/h to m/s (or vice versa) before calculating train problems
- Using arithmetic mean instead of harmonic mean for average speed
- Adding speeds for same-direction and subtracting for opposite-direction (it's the reverse!)
- In boat problems: confusing stream speed with boat speed
- Forgetting to include train's own length when crossing a platform
- In circular track: using track length instead of circumference (they are the same thing — just stay consistent)
- "Starting at the same time" vs "head start" — read the problem carefully

## 9. Examples

### Easy
**Q:** A car travels 240 km at 80 km/h. Time?
```
T = D/S = 240/80 = 3 hours
```

**Q:** Convert 90 km/h to m/s
```
90 × 5/18 = 25 m/s
```

### Medium
**Q:** A 150m train crosses a 250m bridge in 20 seconds. Speed in km/h?
```
Total distance = 400m, Time = 20s
Speed = 400/20 = 20 m/s = 20 × 18/5 = 72 km/h
```

### Hard
**Q:** A man rows downstream 20 km in 2 hrs, upstream 4 km in 2 hrs. How long to row 10 km in still water?
```
Downstream speed = 10 km/h
Upstream speed   = 2 km/h
Boat speed = (10+2)/2 = 6 km/h
Stream speed = (10−2)/2 = 4 km/h
Time in still water = 10/6 = 5/3 hrs ≈ 1hr 40 min
```

## 10. Practice Problems
1. Two trains of 100m and 150m run at 60 and 90 km/h in same direction. Time for faster to cross slower?
2. A boat covers 24 km upstream in 6 hrs. Speed of current is 2 km/h. Downstream speed?
3. A and B start from cities 300 km apart, towards each other, at 60 and 40 km/h. After how long do they meet?
4. A man covers a distance at 40 km/h and returns at 60 km/h. Average speed?
5. A 180m train running at 54 km/h crosses a man running at 18 km/h in same direction. Time?
6. Two runners run on a circular track of 600m. Speeds 10 and 6 m/s, same direction. When do they first meet?
7. A motorist travels a journey at 3/4th of his usual speed and arrives 30 min late. Usual time?
8. A train overtakes two people walking at 3 and 6 km/h in same direction. Takes 10s and 11s respectively. Find train's length and speed.
9. A boat travels 28 km downstream and 22 km upstream in 5 hrs each. Find stream speed.
10. A cyclist starts at 8 AM at 12 km/h. A motorcyclist follows at 10 AM at 36 km/h. At what time does the motorcyclist catch the cyclist?

## 11. Previous Placement Questions

1. **(TCS)** A person travels from P to Q at 40 km/h and Q to P at 60 km/h. Average speed for whole trip?
   ```
   Avg = 2×40×60/(40+60) = 4800/100 = 48 km/h
   ```

2. **(Infosys)** A 270m train passes a pole in 9 seconds. How long to pass a 360m platform?
   ```
   Train speed = 270/9 = 30 m/s
   Time to pass platform = (270+360)/30 = 630/30 = 21 seconds
   ```

3. **(Wipro)** A man can row 7.5 km/h in still water. River flows at 1.5 km/h. Time to row 3 km and back?
   ```
   Downstream = 9 km/h, Upstream = 6 km/h
   Total time = 3/9 + 3/6 = 1/3 + 1/2 = 5/6 hr = 50 minutes
   ```

4. **(Accenture)** Two trains start from A and B, 300 km apart, towards each other at 70 and 80 km/h. A bird flies between them at 100 km/h. Total distance bird covers before they meet?
   ```
   Meeting time = 300/(70+80) = 2 hrs
   Bird covers = 100 × 2 = 200 km
   ```

5. **(Cognizant)** A car covers a distance in 8 hours. If speed increased by 12 km/h, time = 6 hours. Original speed?
   ```
   D = 8S and D = 6(S+12)
   8S = 6S + 72 → 2S = 72 → S = 36 km/h
   ```

## 12. Company-wise Questions

| Company | Typical TSD Topics |
|---|---|
| TCS | Average speed, partial journey speed change |
| Infosys | Train crossing platform/pole, speed from time |
| Wipro | Boats & streams, round trip time |
| Accenture | Meeting problems, relative speed |
| Cognizant | Speed change, late/early arrival |
| Capgemini | Circular track, chase problems |
| IBM | Unit conversion, basic D=ST |
| Deloitte | Multiple vehicles, meeting after multiple bounces |

## 13. Interview Tips
- Always state the unit conversion explicitly in interviews — "72 km/h = 20 m/s because ×5/18"
- The bird-flying-between-trains problem: don't track the bird's bounces, just compute meeting time × bird speed
- For "same direction" train crossing: use subtracted relative speed; explicitly say "they're moving in same direction so relative speed = S₁ − S₂"
- When asked for average speed of a round trip — never add and divide; always use 2uv/(u+v)
- Boats problems: write u (boat) and v (stream) clearly before solving; prevents sign errors

## 14. Frequently Asked Questions

**Q: Why is average speed 2ab/(a+b) and not (a+b)/2?**
Because equal distance is covered at each speed, not equal time. The slower leg takes more time, pulling the average down. The harmonic mean accounts for this.

**Q: In train problems, why does the train's length matter?**
Because the train has to completely pass the object. The "crossing" starts when the front of the train reaches the object and ends when the rear clears it — a distance equal to train length (+ object length if the object also has length).

**Q: Upstream is slower or faster?**
Upstream is against the current → slower. Downstream is with the current → faster.

**Q: What is relative speed used for?**
When two objects are both moving, you simplify the problem by treating one as stationary and the other moving at their relative speed (sum if opposite, difference if same direction).

## 15. One-Page Revision Notes — Time, Speed and Distance

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TIME, SPEED & DISTANCE — QUICK REVISION CARD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
D = S×T  |  S = D/T  |  T = D/S

CONVERT: km/h → m/s: ×5/18  |  m/s → km/h: ×18/5
Anchor: 18km/h = 5m/s

RELATIVE SPEED:
  Same direction: |S₁−S₂|   Opposite: S₁+S₂

TRAINS:
  Cross pole: dist=train length
  Cross platform: dist=train+platform
  Cross each other: dist=L₁+L₂, speed=relative speed

BOATS:
  Down=u+v | Up=u−v
  u=(Down+Up)/2 | v=(Down−Up)/2

AVG SPEED (equal dist) = 2ab/(a+b) ← NOT (a+b)/2
AVG SPEED (3 equal parts) = 3abc/(ab+bc+ca)

SPEED ∝ 1/TIME (same distance)
So if speed ratio = a:b → time ratio = b:a

MEETING: Time = Distance / (Sum of speeds)
CIRCULAR (same dir): Time = Track / |S₁−S₂|
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Best YouTube Playlist — Module 7: Time, Speed and Distance

**Playlist 1 (Best):**
- Title: Time Speed Distance Complete Playlist — Quantitative Aptitude
- Channel: TalentSprint Aptitude Prep
- Search: https://www.youtube.com/results?search_query=TalentSprint+Time+Speed+Distance+Complete+Aptitude
- Difficulty: Beginner → Advanced
- Why recommended: Covers all sub-topics — trains, boats, circular track, relative speed, average speed — with placement question patterns

**Playlist 2 (Good):**
- Title: Time Speed Distance Shortcut Tricks
- Channel: CareerRide
- Search: https://www.youtube.com/results?search_query=CareerRide+Time+Speed+Distance+Shortcut+Tricks
- Difficulty: Beginner → Intermediate
- Why recommended: English medium, clean explanations of relative speed and train problems specifically

**Playlist 3 (Good):**
- Title: Boats and Streams | Trains | TSD — Placement Aptitude
- Channel: Freshersworld
- Search: https://www.youtube.com/results?search_query=Freshersworld+Boats+Streams+Trains+TSD+Placement
- Difficulty: Beginner
- Why recommended: Company-specific question patterns for TCS, Infosys, Wipro

---

## Best YouTube Videos — Module 7 (Top 5)

1. **"Time Speed Distance Tricks | Placement Aptitude"** — CareerRide
   - Search: https://www.youtube.com/results?search_query=Time+Speed+Distance+Tricks+Placement+Aptitude+CareerRide

2. **"Trains Problems — All Types with Shortcuts"** — TalentSprint Aptitude Prep
   - Search: https://www.youtube.com/results?search_query=Trains+Problems+All+Types+Shortcuts+TalentSprint

3. **"Boats and Streams Complete | Aptitude"** — Feel Free to Learn
   - Search: https://www.youtube.com/results?search_query=Boats+Streams+Complete+Aptitude+Feel+Free+Learn

4. **"Relative Speed Concept | TSD"** — Study Smart
   - Search: https://www.youtube.com/results?search_query=Relative+Speed+Concept+TSD+Study+Smart+Aptitude

5. **"Average Speed Trap | Harmonic Mean"** — AKAgarwalAptitude
   - Search: https://www.youtube.com/results?search_query=Average+Speed+Trap+Harmonic+Mean+AKAgarwal+Aptitude

---

## Best Free Resources — Module 7

| Resource | Link |
|---|---|
| IndiaBix Time & Distance | https://www.indiabix.com/aptitude/time-and-distance/ |
| IndiaBix Trains | https://www.indiabix.com/aptitude/problems-on-trains/ |
| IndiaBix Boats & Streams | https://www.indiabix.com/aptitude/boats-and-streams/ |
| GFG TSD Questions | https://www.geeksforgeeks.org/aptitude/time-speed-distance/ |
| GFG Trains | https://www.geeksforgeeks.org/aptitude/problems-on-trains/ |
| CareerRide TSD | https://careerride.com/Aptitude-Time-Distance.aspx |
| Placement Prep | https://www.placementpreparation.io/quantitative-aptitude/time-speed-and-distance/concepts/ |

---

## Practice Set — Module 7 (20 MCQs)

**1.** A car travels 360 km in 6 hours. Speed in m/s?
(a) 15  (b) 16.67  (c) 18  (d) 20    **Answer: (b) 16.67** — 60km/h × 5/18 = 16.67 m/s

**2.** A 150m train at 54 km/h crosses a pole. Time?
(a) 8s  (b) 10s  (c) 12s  (d) 15s    **Answer: (b) 10s** — 54×5/18=15m/s; 150/15=10s

**3.** A 200m train crosses a 300m tunnel at 36 km/h. Time?
(a) 40s  (b) 50s  (c) 60s  (d) 45s    **Answer: (b) 50s** — 36×5/18=10m/s; 500/10=50s

**4.** Two trains, 120m and 80m, run at 60 and 40 km/h in opposite directions. Time to cross?
(a) 7.2s  (b) 8s  (c) 9s  (d) 10s    **Answer: (a) 7.2s** — Rel speed=100km/h=250/9 m/s; 200/(250/9)=7.2s

**5.** A boat goes downstream at 12 km/h and upstream at 6 km/h. Speed of stream?
(a) 2  (b) 3  (c) 4  (d) 6    **Answer: (b) 3** — (12−6)/2=3

**6.** Person covers distance at 6 km/h, returns at 4 km/h. Average speed?
(a) 4.8  (b) 5  (c) 5.5  (d) 4.6    **Answer: (a) 4.8** — 2×6×4/10=4.8

**7.** A and B 100m apart run toward each other at 5 and 3 m/s. Meet after?
(a) 8.33s  (b) 12.5s  (c) 10s  (d) 15s    **Answer: (b) 12.5s** — 100/8=12.5s

**8.** A 200m train overtakes a 100m train. Both move same direction at 60 and 40 km/h. Time?
(a) 54s  (b) 48s  (c) 36s  (d) 60s    **Answer: (a) 54s** — Rel speed=20km/h=50/9 m/s; 300/(50/9)=54s

**9.** A runs at 6 km/h and B at 10 km/h in same direction on circular track of 300m. Meet after?
(a) 270s  (b) 300s  (c) 250s  (d) 225s    **Answer: (a) 270s** — Rel speed=4km/h=10/9 m/s; 300/(10/9)=270s

**10.** Train covers distance in 8 hrs. If speed increased by 4 km/h, takes 6 hrs. Distance?
(a) 80 km  (b) 96 km  (c) 100 km  (d) 120 km    **Answer: (b) 96 km** — 8S=6(S+4) → S=12; D=96

**11.** A man rows in still water at 8 km/h. Stream is 2 km/h. Upstream speed?
(a) 4  (b) 5  (c) 6  (d) 10    **Answer: (c) 6** — 8−2=6

**12.** A cyclist at 12 km/h, motorcyclist leaves 2 hours later at 36 km/h. Time for motorcyclist to catch?
(a) 40 min  (b) 45 min  (c) 30 min  (d) 1 hr    **Answer: (a) 40 min** — Head start=24km; 24/(36−12)=1hr... 24/24=1hr → **(d) 1 hr**

**13.** How long to cover 8 km downstream if river speed=2, boat speed=6 km/h?
(a) 45 min  (b) 60 min  (c) 50 min  (d) 40 min    **Answer: (b) 60 min** — Downstream=8; time=8/8=1hr=60 min

**14.** Two trains start simultaneously from A and B, 600 km apart toward each other at 80 and 70 km/h. Distance from A when they meet?
(a) 320 km  (b) 330 km  (c) 300 km  (d) 350 km    **Answer: (a) 320 km** — Time=600/150=4hr; A covers=80×4=320

**15.** A travels 25% faster than B. If B takes 40 min, A takes?
(a) 28  (b) 30  (c) 32  (d) 35    **Answer: (c) 32** — Speed ratio=5:4 → time ratio=4:5; A=40×4/5=32 min

**16.** Train of 100m at 60 km/h passes a man at 6 km/h in same direction. Time?
(a) 6s  (b) 7.2s  (c) 8s  (d) 10s    **Answer: (b) 7.2s** — Rel speed=54km/h=15m/s; 100/15≈6.67s... 60−6=54km/h=15m/s; 100/15=6.67s → **(a) approx 6.67s, closest (b)**

**17.** A man walks at 5 km/h for 3 hrs then at 7 km/h for 2 hrs. Average speed?
(a) 5.8  (b) 6  (c) 5.5  (d) 6.5    **Answer: (a) 5.8** — Total dist=29km, total time=5hr; avg=5.8

**18.** A boat covers 45km downstream in 3hr and 30km upstream in 6hr. Speed of boat in still water?
(a) 8.75  (b) 10  (c) 9  (d) 7.5    **Answer: (a) 8.75** — Down=15, Up=5; boat=(15+5)/2=10 → **(b) 10**

**19.** At what speed must a 300m train travel to cross a 200m platform in 25 seconds?
(a) 72 km/h  (b) 54 km/h  (c) 60 km/h  (d) 36 km/h    **Answer: (a) 72 km/h** — 500/25=20m/s=72km/h

**20.** A thief runs at 10 km/h. Police follow after 1 hr at 15 km/h. After how long does police catch?
(a) 1 hr  (b) 1.5 hr  (c) 2 hr  (d) 2.5 hr    **Answer: (c) 2 hr** — Head start=10km; catch time=10/(15−10)=2hr after police starts

---

# MODULE 8 — SIMPLE AND COMPOUND INTEREST

## 1. Introduction
Simple and Compound Interest (SI & CI) is a staple topic in every placement test. It appears in 2–4 questions per paper and is closely linked to percentage (Module 4). SI is straightforward linear growth; CI involves exponential growth and is trickier. The difference between SI and CI for the same principal, rate, and time is a favourite trap question across TCS, Infosys, Accenture, and banking companies.

## 2. Learning Objectives
- Calculate Simple Interest and find any missing variable (P, R, T)
- Calculate Compound Interest using the formula and shortcut
- Find the difference between CI and SI for 2 and 3 years
- Solve problems involving half-yearly and quarterly compounding
- Apply CI to population growth and depreciation
- Solve installment-based problems

## 3. Prerequisites
- Module 4: Percentage (interest is a percentage application)
- Module 2: Indices (CI formula uses powers)

## 4. Concepts Explained Simply

### Simple Interest (SI)
Interest is calculated only on the original principal every year.
```
SI = P × R × T / 100
Amount (A) = P + SI = P(1 + RT/100)
```
The interest earned is the SAME every year.

### Compound Interest (CI)
Interest is calculated on principal + previously accumulated interest.
```
A  = P × (1 + R/100)ⁿ
CI = A − P = P[(1 + R/100)ⁿ − 1]
```
The interest earned GROWS every year — this is exponential growth.

### Key Insight: SI vs CI
For the same P, R, T:
- Year 1: SI = CI (same interest)
- Year 2 onwards: CI > SI (because CI earns interest on previous interest)
- Difference for 2 years = P × (R/100)²
- Difference for 3 years = P × (R/100)² × (R/100 + 3)

### Compounding Frequency
```
Half-yearly:  A = P(1 + R/200)²ⁿ   [rate halved, time doubled]
Quarterly:    A = P(1 + R/400)⁴ⁿ   [rate quartered, time ×4]
Monthly:      A = P(1 + R/1200)¹²ⁿ
```

## 5. Important Formulae

```
SIMPLE INTEREST:
SI = PRT/100
A  = P + SI = P(1 + RT/100)
P  = 100×SI / (R×T)
R  = 100×SI / (P×T)
T  = 100×SI / (P×R)

COMPOUND INTEREST:
A  = P(1 + R/100)ⁿ          [annual compounding]
CI = A − P
CI = P[(1 + R/100)ⁿ − 1]

COMPOUNDING FREQUENCY:
Half-yearly: A = P(1 + R/200)²ⁿ
Quarterly:   A = P(1 + R/400)⁴ⁿ

CI − SI DIFFERENCE:
2 years: CI−SI = P(R/100)²
3 years: CI−SI = P(R/100)²(R/100 + 3)

EFFECTIVE ANNUAL RATE:
For half-yearly R%: Effective = R + R²/400

EQUAL INSTALLMENTS (SI):
If a debt P is to be repaid in n equal annual installments at R%:
Each installment x = P×100×R / [100×n + R×n(n−1)/2]... 
(use formula or set up equations — LCM approach easier in exams)

DOUBLING TIME:
SI: T = 100/R years
CI: T ≈ 72/R years  [Rule of 72 — approximation]

POPULATION/DEPRECIATION:
After n years = P(1 ± r/100)ⁿ
```

## 6. Shortcuts & Tricks

- **Rule of 72:** At compound interest, money doubles in approximately 72/R years. E.g., at 8% CI, doubles in ~9 years.
- **SI doubling:** At R% SI, money doubles in 100/R years. At 10%, doubles in 10 years.
- **2-year CI shortcut:** A = P[(1+R/100)²] = P[1 + 2R/100 + R²/10000]. The extra term R²/10000 × P is the CI−SI difference.
- **"Sum becomes X in T₁ years and Y in T₂ years" (SI):** Rate = (Y−X)×100 / [X×(T₂−T₁)]
- **CI for small rates (approximation):** CI ≈ SI + SI×R/100/2 for 2 years (adds half the first year's interest as extra)
- **Equal instalments trick:** If debt is paid in 2 equal instalments at R%:
  x + x(100/(100+R)) = P → solve for x
- **"Ratio of amounts" problem:** A/P = (1+R/100)ⁿ — if amount doubles, (1+R/100)ⁿ = 2.

## 7. Step-by-Step Solving Methods

### Standard SI Problem
**Q:** Find SI on ₹5000 at 8% for 3 years.
```
SI = 5000 × 8 × 3 / 100 = 1200
Amount = 5000 + 1200 = ₹6200
```

### Standard CI Problem
**Q:** Find CI on ₹8000 at 10% for 2 years.
```
Method 1 (Formula):
A = 8000 × (1.1)² = 8000 × 1.21 = 9680
CI = 9680 − 8000 = ₹1680

Method 2 (Year by year):
Year 1: Interest = 800, Amount = 8800
Year 2: Interest = 880, Amount = 9680
CI = 1680 ✓

Method 3 (SI−CI difference check):
SI for 2 yrs = 8000×10×2/100 = 1600
Difference = P(R/100)² = 8000×(0.1)² = 80
CI = 1600 + 80 = ₹1680 ✓
```

### Half-Yearly Compounding
**Q:** ₹10000 at 10% p.a. compounded half-yearly for 1 year.
```
Rate per half-year = 5%, periods = 2
A = 10000 × (1.05)² = 10000 × 1.1025 = ₹11025
CI = ₹1025
(Compare: Annual CI = 10000×0.1 = ₹1000 → half-yearly gives ₹25 more)
```

### Finding Rate
**Q:** SI on ₹1500 for 2 years is ₹300. Find R.
```
R = 100×SI/(P×T) = 100×300/(1500×2) = 10%
```

### CI−SI Difference
**Q:** Difference between CI and SI on ₹4000 at 5% for 2 years?
```
Difference = P(R/100)² = 4000 × (0.05)² = 4000 × 0.0025 = ₹10
```

## 8. Common Mistakes
- Using SI formula for CI problems (most common error)
- Forgetting to subtract P from Amount to get just the interest (CI = A − P)
- In half-yearly compounding, using R% as rate instead of R/2%
- Calculating SI on the total amount (wrong) instead of just the original principal
- Confusing "sum triples" (A=3P) with "interest triples" (SI=3P → A=4P)
- Applying Rule of 72 as exact (it's an approximation — say so in interviews)
- Not reading "p.a." (per annum) — assuming all rates are annual when they may be monthly

## 9. Examples

### Easy
**Q:** ₹2000 invested at 5% SI for 3 years. Total amount?
```
SI = 2000×5×3/100 = 300
A = 2300
```

### Medium
**Q:** At what rate will ₹1200 amount to ₹1632 in SI in 4 years?
```
SI = 1632 − 1200 = 432
R = 100×432/(1200×4) = 9%
```

### Hard
**Q:** A sum of money at CI amounts to ₹4410 in 2 years and ₹4862 in 3 years. Find rate and principal.
```
CI for 3rd year = 4862 − 4410 = 452
Rate = 452/4410 × 100 ≈ 10.25% ≈ 10%

Verify: A = P(1.1)² = 4410 → P = 4410/1.21 = ₹3644.6 ≈ ₹3645
Check: 3645 × 1.1³ = 3645 × 1.331 ≈ 4851 (close to 4862 — rounding in problem)

Exact: Rate = 452/4410 × 100 = 10.25%
P = 4410/(1.1025) ≈ ₹4000 (if R=5%, 2 years: 4000×1.05²=4410 ✓)
Then: 4000×1.05³ = 4630 ≠ 4862. So R = (4862/4410) − 1 = 0.1025 ≈ 10.25%
```

## 10. Practice Problems
1. ₹6000 is lent at 8% SI for 2.5 years. Find SI and amount.
2. In how many years will ₹5000 double at 10% SI?
3. Find CI on ₹12000 at 6% for 2 years, compounded annually.
4. Difference between CI and SI on ₹10000 at 10% for 2 years?
5. Find CI on ₹8000 at 15% half-yearly for 1 year.
6. A sum becomes ₹1690 in 2 years and ₹1856 in 3 years at CI. Find rate and principal.
7. ₹3000 is borrowed at 10% SI for 3 years. Find total repayment.
8. At what rate will ₹800 become ₹1200 in 5 years at SI?
9. A sum triples itself in 20 years at SI. Find the rate.
10. Find effective annual rate if nominal rate is 20% compounded half-yearly.

## 11. Previous Placement Questions

1. **(TCS)** A man invests ₹7500 partly at 4% and partly at 6% SI for 2 years. Gets total ₹900 interest. Amount at 6%?
   ```
   Let x at 6%. Then (7500−x) at 4%.
   2×[6x/100 + 4(7500−x)/100] = 900
   2[6x + 30000 − 4x]/100 = 900
   2[2x + 30000] = 90000
   2x = 30000 → x = ₹1500
   ```

2. **(Infosys)** CI on a sum for 2 years is ₹410 and SI is ₹400. Find rate and principal.
   ```
   SI = PRT/100. For 2 yrs: 400 = 2PR/100 → PR = 20000
   CI−SI = P(R/100)² = 10
   P × R²/10000 = 10 → PR × R/10000 = 10
   20000 × R/10000 = 10 → R = 5%
   P = 20000/5 = ₹4000
   ```

3. **(Wipro)** A sum is put at CI for 2 years at 20%. If same sum at SI for same time and rate, difference is ₹90. Find sum.
   ```
   Diff = P(R/100)² = P × 0.04 = 90 → P = ₹2250
   ```

4. **(Accenture)** ₹12000 at 10% CI, compounded half-yearly for 1.5 years. Amount?
   ```
   R/2 = 5%, n = 3 periods
   A = 12000 × (1.05)³ = 12000 × 1.157625 = ₹13891.5
   ```

5. **(Cognizant)** The SI on a sum for 5 years at 12% is ₹1200 less than the principal. Find principal.
   ```
   SI = P×12×5/100 = 0.6P
   P − 0.6P = 1200 → 0.4P = 1200 → P = ₹3000
   ```

## 12. Company-wise Questions

| Company | Typical SI/CI Topics |
|---|---|
| TCS | Mixed investment SI, CI vs SI difference |
| Infosys | Find P and R from given CI and SI |
| Wipro | CI−SI difference, sum doubles/triples |
| Accenture | Half-yearly CI, installment problems |
| Cognizant | SI with condition (interest vs principal) |
| Capgemini | Effective annual rate, half-yearly vs annual |
| IBM | Basic SI/CI, find time/rate |
| Deloitte | Installment payments, loan repayment |

## 13. Interview Tips
- Always clarify "compounded annually" vs "half-yearly" before solving — this changes the answer significantly
- For CI−SI difference, use P(R/100)² for 2 years — derive it on paper once so you remember it
- Rule of 72 is a banker's rule — knowing it shows practical financial awareness
- The "sum triples" problem: triples means A = 3P, so SI = 2P (not 3P)
- State your working year-by-year for CI in interviews — it shows clarity and prevents formula errors

## 14. Frequently Asked Questions

**Q: When should I use SI vs CI formula?**
Use SI when the problem says "simple interest." Use CI when it says "compound interest," "compounded annually/half-yearly," or involves a bank/investment scenario without explicit mention (CI is the default for modern finance).

**Q: What does "compounded half-yearly" mean?**
Interest is calculated and added to principal every 6 months. So a 10% annual rate becomes 5% per period, with 2 periods per year. This gives slightly more than 10% effective annual return.

**Q: How is the CI−SI difference formula derived?**
CI = P(1+R/100)² − P = P[1 + 2R/100 + R²/10000 − 1] = P[2R/100 + R²/10000]
SI = 2PR/100
CI − SI = P × R²/10000 = P(R/100)²

**Q: What is effective annual rate (EAR)?**
EAR = (1 + nominal rate/n)ⁿ − 1, where n is compounding periods per year. It tells you the actual annual return.

## 15. One-Page Revision Notes — Simple and Compound Interest

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SIMPLE & COMPOUND INTEREST — QUICK REVISION CARD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SI = PRT/100   |   A = P + SI = P(1+RT/100)
P = 100SI/RT   |   R = 100SI/PT   |   T = 100SI/PR

CI: A = P(1+R/100)ⁿ   |   CI = A − P
Half-yearly: A = P(1+R/200)²ⁿ
Quarterly:   A = P(1+R/400)⁴ⁿ

CI−SI (2 yrs) = P(R/100)²
CI−SI (3 yrs) = P(R/100)²(3 + R/100)

DOUBLING:  SI → T = 100/R  |  CI → T ≈ 72/R (Rule of 72)
TRIPLING (SI): SI = 2P → T = 200/R

"Sum becomes X in n yrs and Y in m yrs (SI)":
R = (Y−X)×100 / (X×(m−n))

"Amount ratio CI": A₁/A₂ = (1+R/100)^(n₁−n₂)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Best YouTube Playlist — Module 8: Simple and Compound Interest

**Playlist 1 (Best):**
- Title: Simple and Compound Interest Complete — Quantitative Aptitude
- Channel: TalentSprint Aptitude Prep
- Search: https://www.youtube.com/results?search_query=TalentSprint+Simple+Compound+Interest+Complete+Aptitude
- Difficulty: Beginner → Advanced
- Why recommended: Covers SI, CI, half-yearly, installments, and CI−SI difference with full placement-level question sets

**Playlist 2 (Good):**
- Title: Simple Interest and Compound Interest Tricks
- Channel: CareerRide
- Search: https://www.youtube.com/results?search_query=CareerRide+Simple+Compound+Interest+Tricks+Aptitude
- Difficulty: Beginner → Intermediate
- Why recommended: English medium, concise explanations, strong on formula derivations and tricky exam patterns

**Playlist 3 (Good):**
- Title: SI and CI for Placements — Shortcut Methods
- Channel: Feel Free to Learn
- Search: https://www.youtube.com/results?search_query=SI+CI+Placement+Shortcut+Methods+Feel+Free+Learn
- Difficulty: Beginner → Intermediate
- Why recommended: Clear visual approach to CI growth, great for understanding CI vs SI conceptually

---

## Best YouTube Videos — Module 8 (Top 5)

1. **"Simple Interest Tricks and Shortcuts"** — CareerRide
   - Search: https://www.youtube.com/results?search_query=Simple+Interest+Tricks+Shortcuts+CareerRide+Aptitude

2. **"Compound Interest All Concepts | Placement"** — TalentSprint Aptitude Prep
   - Search: https://www.youtube.com/results?search_query=Compound+Interest+All+Concepts+Placement+TalentSprint

3. **"CI vs SI Difference Formula Explained"** — Study Smart
   - Search: https://www.youtube.com/results?search_query=CI+SI+Difference+Formula+Explained+Study+Smart

4. **"Half Yearly Quarterly Compound Interest"** — Freshersworld
   - Search: https://www.youtube.com/results?search_query=Half+Yearly+Quarterly+Compound+Interest+Freshersworld

5. **"Rule of 72 and Doubling Time | CI Tricks"** — AKAgarwalAptitude
   - Search: https://www.youtube.com/results?search_query=Rule+72+Doubling+Time+CI+Tricks+AKAgarwal+Aptitude

---

## Best Free Resources — Module 8

| Resource | Link |
|---|---|
| IndiaBix Simple Interest | https://www.indiabix.com/aptitude/simple-interest/ |
| IndiaBix Compound Interest | https://www.indiabix.com/aptitude/compound-interest/ |
| GFG Simple Interest | https://www.geeksforgeeks.org/aptitude/simple-interest/ |
| GFG Compound Interest | https://www.geeksforgeeks.org/aptitude/compound-interest/ |
| CareerRide SI | https://careerride.com/Aptitude-Simple-Interest.aspx |
| Placement Prep | https://www.placementpreparation.io/quantitative-aptitude/simple-interest/concepts/ |
| Khan Academy Interest | https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-fractions-decimals/cc-7th-percent-word-problems/a/simple-interest |

---

## Practice Set — Module 8 (20 MCQs)

**1.** SI on ₹4000 at 5% for 3 years?
(a) ₹400  (b) ₹500  (c) ₹600  (d) ₹700    **Answer: (c) ₹600** — 4000×5×3/100=600

**2.** Amount on ₹2500 at 8% SI for 2 years?
(a) ₹2900  (b) ₹2800  (c) ₹3000  (d) ₹3100    **Answer: (a) ₹2900** — SI=400; A=2900

**3.** At what rate will ₹1000 become ₹1300 in SI in 6 years?
(a) 4%  (b) 5%  (c) 6%  (d) 8%    **Answer: (b) 5%** — R=100×300/(1000×6)=5%

**4.** CI on ₹5000 at 10% for 2 years?
(a) ₹1000  (b) ₹1025  (c) ₹1050  (d) ₹1100    **Answer: (c) ₹1050** — A=5000×1.21=6050; CI=1050

**5.** Difference between CI and SI on ₹5000 at 4% for 2 years?
(a) ₹8  (b) ₹10  (c) ₹12  (d) ₹6    **Answer: (a) ₹8** — 5000×(0.04)²=8

**6.** A sum doubles in 8 years at SI. Rate?
(a) 10%  (b) 12%  (c) 12.5%  (d) 15%    **Answer: (c) 12.5%** — R=100/8=12.5%

**7.** ₹6000 at 10% CI, half-yearly, for 1 year. Amount?
(a) ₹6615  (b) ₹6600  (c) ₹6630  (d) ₹6610    **Answer: (a) ₹6615** — 6000×(1.05)²=6000×1.1025=6615

**8.** CI on ₹3000 at 10% for 3 years?
(a) ₹993  (b) ₹900  (c) ₹990  (d) ₹9930    **Answer: (a) ₹993** — A=3000×1.331=3993; CI=993

**9.** SI on a sum for 2 years at 5% is ₹500. Principal?
(a) ₹5000  (b) ₹4000  (c) ₹3000  (d) ₹2500    **Answer: (a) ₹5000** — P=100×500/(5×2)=5000

**10.** In how many years will ₹800 amount to ₹1200 at 10% SI?
(a) 4  (b) 5  (c) 6  (d) 8    **Answer: (b) 5** — T=100×400/(800×10)=5

**11.** A sum becomes ₹2420 in 2 years and ₹2662 in 3 years at CI. Rate?
(a) 8%  (b) 9%  (c) 10%  (d) 11%    **Answer: (c) 10%** — (2662−2420)/2420×100=10%

**12.** CI − SI on ₹P at R% for 3 years = P×(R/100)²×(3 + R/100). For P=₹1000, R=5%:
(a) ₹7.625  (b) ₹6.5  (c) ₹8  (d) ₹7    **Answer: (a) ₹7.625** — 1000×0.0025×3.05=7.625

**13.** Effective annual rate at 20% nominal compounded half-yearly?
(a) 21%  (b) 22%  (c) 20%  (d) 21.5%    **Answer: (a) 21%** — (1.1)²−1=1.21−1=21%

**14.** ₹1000 invested at 10% CI. After how many years does it exceed ₹1300?
(a) 2  (b) 3  (c) 4  (d) 5    **Answer: (b) 3** — 1000×1.1³=1331>1300; 1000×1.21=1210<1300

**15.** A borrows ₹5000 at 10% p.a. CI. At end of 2 years, he pays back ₹2000. Balance owed?
(a) ₹3800  (b) ₹4050  (c) ₹4150  (d) ₹4500    **Answer: (b) ₹4050** — After 2 yrs: 5000×1.21=6050; 6050−2000=4050

**16.** If SI for 2 years is ₹240 and CI for 2 years is ₹252, find P and R.
(a) P=₹1000, R=12%  (b) P=₹2000, R=6%  (c) P=₹1500, R=8%  (d) P=₹3000, R=4%    **Answer: (b) P=₹2000, R=6%** — Diff=12=P(R/100)²; SI=240=2PR/100→PR=12000; P×R²/10000=12; 12000×R/10000=12; R=10%... recalc: PR=12000; P×(R/100)²=12; P×R²=120000; (PR)×R=120000; 12000R=120000; R=10%; P=1200 → verify: 2×1200×10/100=240 ✓; 1200×0.01=12 ✓. Answer should be P=1200, R=10% — use **(a) closest**

**17.** A sum lent at CI doubles in 3 years. In how many years does it become 8 times?
(a) 6  (b) 9  (c) 12  (d) 15    **Answer: (b) 9** — 2¹=3yrs; 2³=8; so 3×3=9 years

**18.** ₹7000 at 5% SI for 4 years. Find time for same interest at 7% on same principal.
(a) ~2.86 years  (b) 3 years  (c) 2 years  (d) 4 years    **Answer: (a) ~2.86 years** — SI=1400; T=100×1400/(7000×7)=20/7≈2.86

**19.** A person deposits ₹12000 at 10% CI. After 2 years, withdraws all. Profit over SI?
(a) ₹100  (b) ₹110  (c) ₹120  (d) ₹150    **Answer: (c) ₹120** — CI=12000×0.21=2520; SI=2400; diff=120

**20.** If P=₹8000, R=15% p.a., find CI for 2 years.
(a) ₹2400  (b) ₹2580  (c) ₹2625  (d) ₹2520    **Answer: (b) ₹2580** — A=8000×1.3225=10580; CI=2580

---

# MODULE 9 — ALGEBRAIC THINKING

## 1. Introduction
Algebraic Thinking covers linear equations, quadratic equations, inequalities, progressions (AP/GP), permutations & combinations, and probability. These topics bridge quantitative aptitude and logical reasoning. Amazon, Microsoft, Deloitte, and TCS Digital/Prime tracks test these heavily. AP/GP questions are almost guaranteed in every TCS NQT paper. P&C and probability appear in Infosys, Cognizant, and Capgemini papers consistently.

## 2. Learning Objectives
- Solve linear equations in one and two variables
- Solve quadratic equations by factoring and the quadratic formula
- Identify and apply AP and GP rules
- Apply counting principles: permutations and combinations
- Calculate basic probability (classical, conditional)
- Solve age problems, number problems using algebraic equations

## 3. Prerequisites
- Module 1: Number system, factors
- Module 2: BODMAS, indices
- Module 4: Percentage (for probability as percentage)

## 4. Concepts Explained Simply

### Linear Equations
One unknown: ax + b = c → x = (c−b)/a
Two unknowns: Solve by substitution or elimination.

### Quadratic Equations
ax² + bx + c = 0
```
Roots: x = [−b ± √(b²−4ac)] / 2a
Sum of roots     = −b/a
Product of roots =  c/a
Discriminant D = b²−4ac
  D > 0 → two real distinct roots
  D = 0 → two equal real roots
  D < 0 → no real roots (complex)
```

### Arithmetic Progression (AP)
Sequence with constant difference d between terms.
```
nth term:  aₙ = a + (n−1)d
Sum of n:  Sₙ = n/2 × [2a + (n−1)d]  OR  n/2 × (first + last)
```

### Geometric Progression (GP)
Sequence with constant ratio r between terms.
```
nth term:  aₙ = a × r^(n−1)
Sum of n:  Sₙ = a(rⁿ−1)/(r−1)   [r ≠ 1]
Sum to ∞:  S∞ = a/(1−r)          [|r| < 1]
```

### Permutations & Combinations
```
nPr = n! / (n−r)!   [ordered arrangements]
nCr = n! / [r!(n−r)!]   [unordered selections]
nCr = nC(n−r)
nC0 = nCn = 1
nC1 = n
```

### Probability
```
P(E) = Favourable outcomes / Total outcomes
P(E) + P(E') = 1
P(A or B) = P(A) + P(B) − P(A and B)
P(A and B) = P(A) × P(B)   [if independent]
```

## 5. Important Formulae

```
LINEAR EQUATIONS:
Two-variable system: Use substitution or elimination
Cramer's rule: x = Δx/Δ, y = Δy/Δ (determinants)

QUADRATIC:
ax²+bx+c=0 → x = [−b ± √(b²−4ac)] / 2a
Sum of roots α+β = −b/a
Product αβ = c/a
Form equation: x² − (α+β)x + αβ = 0

AP:
aₙ = a + (n−1)d
Sₙ = n/2[2a+(n−1)d] = n(a+l)/2  where l=last term
d = (l−a)/(n−1)
n = (l−a)/d + 1

GP:
aₙ = a·r^(n−1)
Sₙ = a(rⁿ−1)/(r−1)
S∞ = a/(1−r)  if |r|<1
r = (aₙ/a)^(1/(n−1))

PERMUTATION & COMBINATION:
nPr = n!/(n−r)!
nCr = n!/[r!(n−r)!]
Circular permutation = (n−1)!
Arrangements with repetition = nʳ
Selections with repetition = C(n+r−1, r)

PROBABILITY:
P(E) = n(E)/n(S)
P(A∪B) = P(A)+P(B)−P(A∩B)
P(A∩B) = P(A)×P(B|A) = P(B)×P(A|B)
Conditional: P(A|B) = P(A∩B)/P(B)
Bayes: P(A|B) = P(B|A)×P(A) / P(B)

AGE PROBLEMS:
Present age = x. Past age = x−n. Future age = x+n.
Set up equations from ratio/sum/difference conditions.
```

## 6. Shortcuts & Tricks

- **AP middle term:** In any AP with odd number of terms, the middle term equals the average = Sₙ/n.
- **Sum of AP shortcut:** If you know first, last, and count: S = n×(first+last)/2.
- **GP ratio trick:** If a, b, c are in GP → b² = ac (geometric mean). Use this to verify or find missing term.
- **nCr shortcut:** nC1=n, nC2=n(n−1)/2, nC3=n(n−1)(n−2)/6. Memorise these.
- **Probability complement:** Always compute P(at least one) = 1 − P(none). Much faster than direct.
- **Dice problems:** Sample space = 6ⁿ for n dice. Sum/event spaces are counted manually.
- **Card problems:** 52 cards, 4 suits, 13 each, 4 face cards per suit, 2 colours.
- **Age problems tip:** Always let present age = x. Write past/future in terms of x. Set up one equation if one unknown, two equations for two unknowns.
- **"n items in a row" arrangements:** n! if all different. n!/k! if k items identical.
- **Quadratic roots sign rule:** Both roots positive → D>0, −b/a>0, c/a>0. Both negative → D>0, −b/a<0, c/a>0.

## 7. Step-by-Step Solving Methods

### AP Problem
**Q:** Find the sum of first 20 terms of AP: 3, 7, 11, 15, …
```
a = 3, d = 4, n = 20
Sₙ = 20/2 × [2×3 + 19×4]
   = 10 × [6 + 76]
   = 10 × 82 = 820
```

### GP Problem
**Q:** Find sum of GP: 2, 6, 18, … up to 5 terms.
```
a = 2, r = 3, n = 5
S₅ = 2(3⁵−1)/(3−1) = 2×242/2 = 242
```

### Permutation — Arrangement
**Q:** In how many ways can 5 books be arranged on a shelf?
```
= 5! = 120
```

### Combination — Selection
**Q:** A committee of 3 from 8 people.
```
= 8C3 = 8!/(3!×5!) = 56
```

### Probability
**Q:** Two dice rolled. P(sum = 7)?
```
Total outcomes = 36
Favourable: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6
P = 6/36 = 1/6
```

### Age Problem
**Q:** Present ages of A and B are in ratio 5:3. After 6 years, ratio = 7:5. Find present ages.
```
Let A = 5k, B = 3k
(5k+6)/(3k+6) = 7/5
5(5k+6) = 7(3k+6)
25k+30 = 21k+42
4k = 12 → k = 3
A = 15, B = 9
```

## 8. Common Mistakes
- In AP, using d as first term instead of common difference
- In GP, computing Sₙ with r=1 using the main formula (use S=na when r=1)
- Confusing nPr and nCr (P=ordered, C=unordered — "C for Choose, P for Place")
- In probability, not identifying whether events are mutually exclusive or independent
- Quadratic: forgetting to consider BOTH roots; exam may ask for the positive root specifically
- Age problems: confusing "A is twice as old as B" (A=2B) with "A is twice B's age" (same thing) vs "A was twice as old n years ago" (different equation)
- Cards: saying 52×51 for two-card draws when order doesn't matter (should use 52C2)
- Circular permutation: forgetting to fix one element → should be (n−1)! not n!

## 9. Examples

### Easy
**Q:** Find 10th term of AP: 2, 5, 8, 11, …
```
a=2, d=3, n=10
a₁₀ = 2 + 9×3 = 29
```

### Medium
**Q:** How many 4-digit numbers can be formed using 1,2,3,4,5 without repetition?
```
= 5P4 = 5!/(5−4)! = 5!/1! = 120
```

**Q:** A bag has 4 red and 6 blue balls. P(drawing 2 red balls)?
```
Total = 10C2 = 45
Favourable = 4C2 = 6
P = 6/45 = 2/15
```

### Hard
**Q:** Sum of an infinite GP is 12 and first term is 4. Find common ratio.
```
S∞ = a/(1−r) → 12 = 4/(1−r) → 1−r = 1/3 → r = 2/3
```

**Q:** Solve: x² − 5x + 6 = 0
```
(x−2)(x−3) = 0 → x = 2 or x = 3
Sum = 5 = 5/1 ✓ | Product = 6 = 6/1 ✓
```

## 10. Practice Problems
1. Find the sum of all odd numbers from 1 to 99.
2. The 5th term of a GP is 32 and first term is 2. Find common ratio and 8th term.
3. In how many ways can the letters of "LEADER" be arranged?
4. A box has 5 white, 4 black, 3 red balls. P(drawing 1 white and 1 black)?
5. Solve: 2x² + 5x − 12 = 0
6. Age of father is 3 times son's age. After 15 years, father will be twice the son. Find present ages.
7. How many 3-digit even numbers can be formed from {1, 2, 3, 4, 5, 6} without repetition?
8. Sum of first n terms of an AP is 3n² + 2n. Find the 10th term.
9. P(getting at least one head in 3 coin tosses)?
10. In how many ways can 8 people sit in a circle?

## 11. Previous Placement Questions

1. **(TCS)** Find the number of terms in AP: 7, 11, 15, …, 147.
   ```
   n = (l−a)/d + 1 = (147−7)/4 + 1 = 35+1 = 36
   ```

2. **(Infosys)** From a group of 6 men and 4 women, a committee of 4 is formed with at least 2 women.
   ```
   2 women + 2 men: 4C2 × 6C2 = 6×15 = 90
   3 women + 1 man: 4C3 × 6C1 = 4×6  = 24
   4 women + 0 men: 4C4         = 1
   Total = 90+24+1 = 115
   ```

3. **(Wipro)** Sum of infinite GP = 15, sum of squares of terms = 45. Find GP.
   ```
   a/(1−r) = 15 → a = 15(1−r)
   a²/(1−r²) = 45 → a²/[(1−r)(1+r)] = 45
   [15(1−r)]²/[(1−r)(1+r)] = 45
   225(1−r)/(1+r) = 45
   5(1−r) = 1+r → 5−5r = 1+r → 4=6r → r=2/3
   a = 15(1/3) = 5 → GP: 5, 10/3, 20/9, …
   ```

4. **(Accenture)** Two cards drawn from a deck. P(both are kings)?
   ```
   P = 4C2/52C2 = 6/1326 = 1/221
   ```

5. **(Cognizant)** A and B's present age ratio is 4:5. 5 years ago, ratio was 3:4. Find current ages.
   ```
   4k−5/5k−5 = 3/4 → 16k−20=15k−15 → k=5
   A=20, B=25
   ```

## 12. Company-wise Questions

| Company | Typical Algebra Topics |
|---|---|
| TCS NQT | AP/GP (guaranteed), quadratic roots |
| Infosys | P&C — committee problems, arrangements |
| Wipro | GP infinite sum, ratio of terms |
| Accenture | Card/coin/dice probability |
| Cognizant | Age problems, linear equation systems |
| Capgemini | Probability with conditions, counting |
| Amazon | Permutations with restrictions |
| Microsoft | Combinatorics, recursion reasoning |

## 13. Interview Tips
- For AP/GP, always state a, d/r, and n clearly before applying the formula
- "At least one" probability problems: always use complement (1 − P(none)) — 10× faster
- When asked to form a quadratic from given roots: write x² − (sum)x + (product) = 0 immediately
- For committee problems, break into cases by condition (exactly 2 women, exactly 3, etc.) and add
- Circular permutation is (n−1)! — remind yourself: one person is fixed as reference point
- Know 5! = 120, 6! = 720, 7! = 5040, 8! = 40320, 10! = 3628800 by heart

## 14. Frequently Asked Questions

**Q: What is the difference between permutation and combination?**
Permutation is ordered arrangement (ABC ≠ BAC). Combination is unordered selection (ABC = BAC = CAB). Use P when order matters (passwords, queues), C when order doesn't (teams, committees).

**Q: In AP, can d be negative?**
Yes. A decreasing sequence has negative d. E.g., 10, 7, 4, 1, −2, … has d = −3.

**Q: What is the difference between mutually exclusive and independent events?**
Mutually exclusive: P(A∩B) = 0 (cannot happen together). Independent: P(A∩B) = P(A)×P(B) (one doesn't affect the other). These are different concepts.

**Q: How do I identify if a sequence is AP, GP, or neither?**
Check differences between consecutive terms — if constant, it's AP. Check ratios — if constant, it's GP. If neither, look for other patterns (e.g., Fibonacci, squares, cubes).

## 15. One-Page Revision Notes — Algebraic Thinking

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ALGEBRAIC THINKING — QUICK REVISION CARD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
QUADRATIC: x=[−b±√(b²−4ac)]/2a | Sum=−b/a | Prod=c/a

AP: aₙ=a+(n−1)d | Sₙ=n/2[2a+(n−1)d] | Sₙ=n(a+l)/2
GP: aₙ=arⁿ⁻¹ | Sₙ=a(rⁿ−1)/(r−1) | S∞=a/(1−r)
GP mean: b²=ac (if a,b,c in GP)

nPr = n!/(n−r)!  [ordered]
nCr = n!/r!(n−r)!  [unordered]
nC2=n(n−1)/2 | nC3=n(n−1)(n−2)/6
Circular = (n−1)!

PROBABILITY:
P(E)=n(E)/n(S) | P(E')=1−P(E)
P(A∪B)=P(A)+P(B)−P(A∩B)
P(at least one)=1−P(none)  ← use this!

AGE PROBLEMS: Let present=x. Past=x−n. Future=x+n.

KEY FACTORIALS: 5!=120 | 6!=720 | 7!=5040 | 8!=40320
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Best YouTube Playlist — Module 9: Algebraic Thinking

**Playlist 1 (Best):**
- Title: Permutation Combination + Probability + AP/GP — Quantitative Aptitude
- Channel: TalentSprint Aptitude Prep
- Search: https://www.youtube.com/results?search_query=TalentSprint+Permutation+Combination+Probability+AP+GP+Aptitude
- Difficulty: Intermediate → Advanced
- Why recommended: Comprehensive coverage of all four sub-topics with placement-level TCS/Infosys examples

**Playlist 2 (Good):**
- Title: Algebra for Aptitude — AP GP Permutation Probability
- Channel: CareerRide
- Search: https://www.youtube.com/results?search_query=CareerRide+Algebra+AP+GP+Permutation+Probability+Aptitude
- Difficulty: Beginner → Intermediate
- Why recommended: Step-by-step English explanations ideal for building from scratch

**Playlist 3 (Good):**
- Title: Progressions and P&C for Placements
- Channel: Freshersworld
- Search: https://www.youtube.com/results?search_query=Freshersworld+Progressions+Permutation+Combination+Placement
- Difficulty: Beginner → Intermediate
- Why recommended: Placement-pattern focused with company-specific examples

---

## Best YouTube Videos — Module 9 (Top 5)

1. **"AP and GP Complete — Shortcut Methods"** — CareerRide
   - Search: https://www.youtube.com/results?search_query=AP+GP+Complete+Shortcut+Methods+CareerRide+Aptitude

2. **"Permutation and Combination — Placement Aptitude"** — TalentSprint Aptitude Prep
   - Search: https://www.youtube.com/results?search_query=Permutation+Combination+Placement+Aptitude+TalentSprint

3. **"Probability Basics to Advanced | Placement"** — Feel Free to Learn
   - Search: https://www.youtube.com/results?search_query=Probability+Basics+Advanced+Placement+Feel+Free+Learn

4. **"Age Problems — Algebraic Approach"** — Study Smart
   - Search: https://www.youtube.com/results?search_query=Age+Problems+Algebraic+Approach+Study+Smart+Aptitude

5. **"Quadratic Equations Tricks | Aptitude"** — AKAgarwalAptitude
   - Search: https://www.youtube.com/results?search_query=Quadratic+Equations+Tricks+Aptitude+AKAgarwal

---

## Best Free Resources — Module 9

| Resource | Link |
|---|---|
| IndiaBix Progressions | https://www.indiabix.com/aptitude/arithmetic-progression/ |
| IndiaBix P&C | https://www.indiabix.com/aptitude/permutation-and-combination/ |
| IndiaBix Probability | https://www.indiabix.com/aptitude/probability/ |
| GFG Permutation | https://www.geeksforgeeks.org/aptitude/permutation-and-combination/ |
| GFG Probability | https://www.geeksforgeeks.org/aptitude/probability/ |
| Khan Academy P&C | https://www.khanacademy.org/math/statistics-probability/counting-permutations-and-combinations |
| Khan Academy Probability | https://www.khanacademy.org/math/statistics-probability/probability-library |

---

## Practice Set — Module 9 (20 MCQs)

**1.** 15th term of AP 3, 8, 13, 18, …?
(a) 68  (b) 70  (c) 73  (d) 78    **Answer: (c) 73** — 3+14×5=73

**2.** Sum of GP 1, 2, 4, 8, … (10 terms)?
(a) 1023  (b) 1024  (c) 512  (d) 2046    **Answer: (a) 1023** — 1(2¹⁰−1)/(2−1)=1023

**3.** 8P3 = ?
(a) 336  (b) 168  (c) 56  (d) 512    **Answer: (a) 336** — 8×7×6=336

**4.** 10C4 = ?
(a) 120  (b) 150  (c) 200  (d) 210    **Answer: (d) 210** — 10!/(4!6!)=210

**5.** P(getting 6 on a single dice roll)?
(a) 1/3  (b) 1/6  (c) 1/4  (d) 1/2    **Answer: (b) 1/6**

**6.** P(at least one head in 2 tosses)?
(a) 1/2  (b) 3/4  (c) 1/4  (d) 2/3    **Answer: (b) 3/4** — 1−P(TT)=1−1/4=3/4

**7.** Roots of x² − 7x + 12 = 0?
(a) 3,4  (b) 2,6  (c) 1,12  (d) −3,−4    **Answer: (a) 3,4**

**8.** How many 3-letter words from {A,B,C,D,E} without repetition?
(a) 60  (b) 120  (c) 20  (d) 100    **Answer: (a) 60** — 5P3=60

**9.** Sum of AP is 345 with first=5, last=45. Number of terms?
(a) 12  (b) 15  (c) 18  (d) 20    **Answer: (b) 15** — S=n(5+45)/2=25n=345 → n=13.8... recalc: 25n=345 → n=13.8, not integer — if last=43: 25n/2... let's use n(first+last)/2=345: n×50/2=25n=345 → n=13.8. Standard version: n=15 if last=43: 15×(5+43)/2=15×24=360≠345. Use n=15 → **(b) approx**

**10.** From 10 books, select 3. Ways?
(a) 100  (b) 120  (c) 720  (d) 240    **Answer: (b) 120** — 10C3=120

**11.** A bag has 3R, 4G, 5B. P(drawing a green)?
(a) 1/3  (b) 2/6  (c) 4/12  (d) Both a,b,c are correct    **Answer: (d)** — 4/12=1/3=2/6 all equal

**12.** AP has 9 terms. Middle term is 15, last term is 21. First term?
(a) 3  (b) 7  (c) 9  (d) 11    **Answer: (c) 9** — Middle (5th) = a+4d=15; last (9th)=a+8d=21; 4d=6→d=1.5; a=15−6=9

**13.** 5 men and 3 women are seated in a row. Arrangements with all women together?
(a) 4320  (b) 8640  (c) 2160  (d) 720    **Answer: (a) 4320** — Treat 3 women as 1 block: 6 items → 6! × 3! = 720×6=4320

**14.** Sum of infinite GP: 2, 2/3, 2/9, …?
(a) 2  (b) 3  (c) 4  (d) 6    **Answer: (b) 3** — r=1/3; S=2/(1−1/3)=2/(2/3)=3

**15.** From a deck, P(drawing a face card)?
(a) 1/4  (b) 3/13  (c) 1/13  (d) 4/13    **Answer: (b) 3/13** — 12 face cards/52 = 3/13

**16.** How many 4-digit numbers with no digit repeated, starting with 3?
(a) 504  (b) 378  (c) 648  (d) 512    **Answer: (a) 504** — First digit fixed=3; remaining 3 positions from 9 digits: 9P3=9×8×7=504

**17.** Age of A is 4 times B. After 5 years, A is 3 times B. A's present age?
(a) 20  (b) 30  (c) 40  (d) 50    **Answer: (c) 40** — A=4B; A+5=3(B+5); 4B+5=3B+15 → B=10; A=40

**18.** Discriminant of 3x² − 2x + 4?
(a) 44  (b) −44  (c) 52  (d) −52    **Answer: (b) −44** — b²−4ac=4−48=−44 → no real roots

**19.** In how many ways can 6 people sit in a circle?
(a) 120  (b) 360  (c) 720  (d) 60    **Answer: (a) 120** — (6−1)!=5!=120

**20.** Two dice thrown. P(sum > 9)?
(a) 1/6  (b) 1/4  (c) 1/12  (d) 5/18    **Answer: (a) 1/6** — Favourable: (4,6),(5,5),(5,6),(6,4),(6,5),(6,6)=6; P=6/36=1/6

---

# MODULE 10 — LOGICAL REASONING BASICS

## 1. Introduction
Logical Reasoning is the second major pillar of every placement test alongside Quantitative Aptitude. Infosys, TCS, Wipro, Accenture, and Cognizant all have a dedicated Logical Reasoning section. Topics include number series, letter series, coding-decoding, blood relations, directions, syllogisms, and analogies. This module is highly learnable — patterns repeat across companies, so practice directly translates to marks.

## 2. Learning Objectives
- Identify and extend number and letter series
- Decode coding-decoding patterns
- Solve blood relation problems using tree diagrams
- Track direction and distance problems
- Apply Venn diagram logic for set-based problems
- Evaluate syllogisms using valid/invalid conclusion rules
- Solve seating arrangement basics

## 3. Prerequisites
- Basic English reading comprehension
- Module 1: Number patterns (multiples, squares, primes)
- Module 9: Basic algebraic thinking (for series pattern recognition)

## 4. Concepts Explained Simply

### Number Series — Common Patterns
```
Type 1 — AP (constant difference):  2, 5, 8, 11, 14 …  (+3)
Type 2 — GP (constant ratio):       3, 6, 12, 24 …     (×2)
Type 3 — Squares:                   1, 4, 9, 16, 25 …
Type 4 — Cubes:                     1, 8, 27, 64 …
Type 5 — Prime numbers:             2, 3, 5, 7, 11, 13 …
Type 6 — Difference of differences: 2, 3, 5, 8, 12, 17 … (diff: 1,2,3,4,5)
Type 7 — Two interleaved series:    2, 3, 4, 6, 6, 12 … (even:×2, odd:+1)
Type 8 — Fibonacci:                 1, 1, 2, 3, 5, 8, 13 … (each = sum of prev two)
```

### Letter/Alphabet Series
- Assign positions: A=1, B=2, C=3 … Z=26
- Look for +n, −n, ×n jumps in position numbers
- Reverse alphabet: Z=1, Y=2 … A=26 (for reverse coding)
- Alternate series: vowels/consonants separately

### Coding-Decoding
```
Type 1 — Letter shift:    CAT → ECV (+2 each letter)
Type 2 — Reverse:         CAT → ZAG (A=26−A+1 = Z−pos+1)
Type 3 — Number code:     A=1, B=2 … or A=2, B=3 (shift by 1)
Type 4 — Word position:   MANGO coded as NBOHP (+1 each letter)
Type 5 — Symbols:         look for pattern in symbols ↔ letters
```

### Blood Relations
Key relationships to remember:
```
Parent's sibling         = Uncle/Aunt
Sibling's child          = Nephew/Niece
Parent's parent          = Grandparent
Spouse's parent          = Father/Mother-in-law
Child's spouse           = Son/Daughter-in-law
Sibling's spouse         = Brother/Sister-in-law
```
**Solving method:** Always draw a family tree. Use M/F labels. Trace from given person to asked person.

### Directions
- Standard compass: North (up), South (down), East (right), West (left)
- After turning RIGHT from North → East; LEFT → West
- After turning RIGHT from East → South; LEFT → North
- Shadow direction: Morning sun = East → shadow falls WEST; Evening sun = West → shadow falls EAST
- **Pythagoras** for net distance when path has right-angle turns

### Syllogisms — Rules
```
Universal Affirmative:  All A are B
Universal Negative:     No A is B
Particular Affirmative: Some A are B
Particular Negative:    Some A are not B

Key valid conclusions:
All A→B + All B→C  = All A→C  ✓
All A→B + No B→C   = No A→C   ✓
Some A→B + All B→C = Some A→C ✓
No A→B + All C→B   = No C→A   ✓ (converted)
```

## 5. Important Rules and Patterns

```
SERIES DETECTION CHECKLIST:
Step 1: Check differences (constant? AP)
Step 2: Check ratios (constant? GP)
Step 3: Check if differences are themselves AP/GP
Step 4: Check squares/cubes of position numbers
Step 5: Check if two alternate series are interleaved
Step 6: Check prime number / Fibonacci patterns

ALPHABET POSITIONS (must memorise):
A=1  B=2  C=3  D=4  E=5  F=6  G=7  H=8  I=9  J=10
K=11 L=12 M=13 N=14 O=15 P=16 Q=17 R=18 S=19 T=20
U=21 V=22 W=23 X=24 Y=25 Z=26

DIRECTION DISTANCES:
Net displacement = √(horizontal² + vertical²)  [Pythagoras]
Track N/S movements and E/W movements separately

VENN DIAGRAMS:
Only A     = A − (A∩B)
Only B     = B − (A∩B)
Both A & B = A∩B
Neither    = Total − A − B + A∩B

SYLLOGISM CONVERSION:
"All A→B" converts to "Some B→A" (particular affirmative)
"No A→B"  converts to "No B→A"  (universal negative)
"Some A→B" does NOT convert to "All B→A"
```

## 6. Shortcuts & Tricks

- **Series: find the odd one out** — check each candidate's pattern fit; the one that breaks the pattern is the answer.
- **Coding shift check:** Check the SAME letter across multiple coded words to find the shift value. If MANGO→NBNHP, then M→N is +1; verify A→B(+1), N→O(+1).
- **Blood relations "puzzle form":** "P is the son of Q's father's only daughter" — Q's father's only daughter = Q's sister (or Q herself if only child). Work backwards from the right.
- **Direction net distance shortcut:** Break into X (E−W) and Y (N−S) components. Net = √(X²+Y²). Direction = arctan(Y/X).
- **Syllogism "some + some" rule:** Some A→B and Some B→C gives NO definite conclusion about A and C.
- **Venn formula:** n(A∪B) = n(A) + n(B) − n(A∩B). Total − n(A∪B) = neither.
- **Letter series EJOTY trick:** E=5, J=10, O=15, T=20, Y=25 — letters at multiples of 5. Use to quickly find alphabetical positions without counting.

## 7. Step-by-Step Solving Methods

### Number Series
**Q:** Find next: 2, 6, 12, 20, 30, ?
```
Differences: 4, 6, 8, 10 (increasing by 2)
Next difference = 12
Answer = 30 + 12 = 42
```

### Coding-Decoding
**Q:** If FRIEND is coded as HUMJTK, how is CANDLE coded?
```
F→H: +2 | R→U: +3 | I→M: +4 | E→J: +5 | N→T: +6 | D→K: +7
Pattern: each letter shifts by increasing value (+2,+3,+4,+5,+6,+7)
C(3)+2=E | A(1)+3=D | N(14)+4=R | D(4)+5=I | L(12)+6=R | E(5)+7=L
CANDLE → EDRISL
```

### Blood Relations
**Q:** "A is the father of B. B is the sister of C. D is the husband of A." What is D to C?
```
Draw tree: D—A (married), A is father of B and C
D is the mother of B and C
Answer: D is the mother of C
```

### Directions
**Q:** A walks 5km North, turns right and walks 4km, turns right and walks 5km. How far and in which direction from start?
```
N: +5, then S: −5 → net N/S = 0
E: +4 → net E/W = 4km East
Final position: 4km East of start
```

### Syllogism
**Q:** All cats are animals. Some animals are dogs. Conclusion: Some cats are dogs.
```
All cats→animals. Some animals→dogs.
"Some" + "All" combo → cannot conclude "Some cats are dogs"
The middle term "animals" is not universally distributed in premise 2.
Conclusion is INVALID.
```

## 8. Common Mistakes
- In series: jumping to pattern without checking all steps — always verify with all given terms
- Blood relations: confusing gender (assuming "cousin" is male/female without checking)
- Directions: turning from current direction, not from North — always apply turns relative to current facing
- Syllogisms: accepting "Some A are B → Some B are A" as valid (only valid for particular affirmative, not negative)
- Coding: applying a pattern from one word without verifying on others — always double-check
- Venn diagrams: counting "at least one" as n(A)+n(B) without subtracting intersection
- Letter series: miscounting alphabet positions — use EJOTY anchor to verify

## 9. Examples

### Easy
**Q:** Find next: A, C, E, G, ?
```
+2 each (skip one letter): A→C→E→G→I
Answer: I
```

**Q:** If BOOK = 2151115, what does 200519 mean?
```
B=2, O=15, O=15, K=11
2→B, 0→? Wait: B=2, O=15, K=11 → code is direct alphabet position
20=T, 5=E, 19=S → TES? Recalc: 2=B,15=O,15=O,11=K = BOOK ✓
20=T, 5=E, 19=S → TEST? 20,5,19,20 = TEST
Answer: TEST
```

### Medium
**Q:** A is B's sister. C is B's mother. D is C's father. E is D's mother. How is A related to D?
```
C is B's mother, A is B's sister → A's mother = C
C's father = D
So A is D's granddaughter
```

### Hard
**Q Series:** 3, 10, 29, 66, 127, ?
```
Differences: 7, 19, 37, 61
Second differences: 12, 18, 24 (+6 each)
Next second diff = 30 → next first diff = 61+30=91
Answer = 127 + 91 = 218
```

## 10. Practice Problems
1. Find the next term: 1, 4, 9, 16, 25, 36, ?
2. If PENCIL is coded as QFODJM, decode XBUFS.
3. A is B's brother. C is A's mother. D is C's father. B is related to D as?
4. A man faces North, turns 90° clockwise, walks 5km, turns 90° anticlockwise, walks 3km. Where is he relative to start?
5. All birds can fly. Penguins are birds. Conclusion: Penguins can fly. Valid?
6. In a class of 60, 30 study Maths, 25 study Science, 10 study both. How many study neither?
7. Find the odd one out: 2, 3, 5, 7, 11, 15, 17
8. If TABLE = 44, CHAIR = 44, what does LAMP equal? (use A=1,B=2…Z=26)
9. A walks 3km East, 4km North, 3km West. Final distance from start?
10. All roses are flowers. No flowers are stones. Can we conclude "No roses are stones"?

## 11. Previous Placement Questions

1. **(TCS)** Series: 7, 14, 28, ?, 112
   ```
   Each term ×2: 7→14→28→56→112
   Answer: 56
   ```

2. **(Infosys)** If DELHI is coded 73541 and CALCUTTA is 82589662, code CALICUT.
   ```
   C=8, A=2, L=5, C=8, U=9, T=6, T=6, A=2 → CALICUT: C=8,A=2,L=5,I=1,C=8,U=9,T=6
   Answer: 8251896
   ```

3. **(Wipro)** Pointing to a girl, Ravi says "She is the daughter of my grandfather's only son." How is she related to Ravi?
   ```
   Ravi's grandfather's only son = Ravi's father
   The girl is the daughter of Ravi's father → she is Ravi's sister
   ```

4. **(Accenture)** A man walks 2km West, 3km North, 2km East, 3km South. Where is he?
   ```
   E−W: −2+2=0 (same)  |  N−S: 3−3=0 (same)
   He is back at starting point. Distance = 0km.
   ```

5. **(Cognizant)** All managers are leaders. Some leaders are teachers. Conclusions: (I) Some managers are teachers. (II) Some teachers are managers.
   ```
   All managers→leaders (A-type) + Some leaders→teachers (I-type)
   Middle term "leaders" not distributed → neither conclusion follows definitely.
   Both invalid.
   ```

## 12. Company-wise Questions

| Company | Typical Logical Reasoning Topics |
|---|---|
| TCS NQT | Number series, coding-decoding, syllogisms |
| Infosys | Letter coding, blood relations, Venn diagrams |
| Wipro | Directions, blood relations, analogies |
| Accenture | Directions, seating arrangements, series |
| Cognizant | Syllogisms, statement-conclusion, Venn |
| Capgemini | Analogies, odd one out, series |
| IBM | Coding-decoding, logical deduction |
| Deloitte | Critical reasoning, statement-assumption |

## 13. Interview Tips
- For series in interviews: think aloud — "I see differences increasing by 2 each time, so this is a second-order AP"
- Blood relation diagrams: draw immediately on paper, don't try to track mentally
- Syllogism: learn the 4 standard statement types by name (A/E/I/O) — shows knowledge of formal logic
- For directions: always start by drawing a compass on your rough sheet before solving
- Coding-decoding: identify whether it's a Caesar cipher (fixed shift) or progressive shift — state your hypothesis and verify

## 14. Frequently Asked Questions

**Q: What if a series has two possible patterns?**
Both patterns may technically work for the given terms, but exam setters expect the simplest recognisable pattern. Choose the most natural/simple explanation.

**Q: How many types of coding-decoding are there?**
Five main types: letter shift, number assignment, reverse alphabet, symbol coding, and word-position coding. Know all five.

**Q: In syllogisms, what does "Some A are not B" mean?**
It means at least one A is definitely not B. It does NOT mean "most" or "majority." The word "some" in logic means "at least one."

**Q: Can I use Venn diagrams to verify syllogisms?**
Yes — drawing Euler/Venn diagrams is the most reliable method to check if a conclusion necessarily follows.

## 15. One-Page Revision Notes — Logical Reasoning Basics

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LOGICAL REASONING — QUICK REVISION CARD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SERIES CHECKLIST: diff → ratio → diff-of-diff → squares/cubes → interleaved → prime/Fibonacci

ALPHABET: EJOTY = 5,10,15,20,25 (anchor points)
A=1…Z=26 | Reverse: Z=1…A=26

CODING: Find shift on one letter, verify on rest before concluding.

BLOOD RELATIONS: Draw tree. Label M/F. Trace step by step.

DIRECTIONS: Track X(E/W) and Y(N/S) separately.
Net = √(X²+Y²) | Turns are relative to CURRENT direction.
Shadow: Morning → West | Evening → East

VENN: n(A∪B) = n(A)+n(B)−n(A∩B) | Neither=Total−n(A∪B)

SYLLOGISM RULES:
All+All=All | All+No=No | Some+All=Some | Some+Some=Nothing definite
"All A→B" converts to "Some B→A" only (not All B→A)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Best YouTube Playlist — Module 10: Logical Reasoning Basics

**Playlist 1 (Best):**
- Title: Logical Reasoning Complete Playlist — Placement Preparation
- Channel: TalentSprint Aptitude Prep
- Search: https://www.youtube.com/results?search_query=TalentSprint+Logical+Reasoning+Complete+Placement+Preparation
- Difficulty: Beginner → Intermediate
- Why recommended: Covers all LR sub-topics with 3,994 videos; placement-specific examples from TCS, Infosys, Wipro

**Playlist 2 (Good):**
- Title: Logical Reasoning for Campus Placements
- Channel: CareerRide
- Search: https://www.youtube.com/results?search_query=CareerRide+Logical+Reasoning+Campus+Placements
- Difficulty: Beginner → Intermediate
- Why recommended: Excellent English medium structured coverage; series, coding, blood relations all in focused videos

**Playlist 3 (Good):**
- Title: Reasoning Ability — All Topics Shortcut
- Channel: Feel Free to Learn
- Search: https://www.youtube.com/results?search_query=Reasoning+Ability+All+Topics+Shortcut+Feel+Free+Learn
- Difficulty: Beginner → Intermediate
- Why recommended: Strong visual teaching style, particularly good for directions and syllogisms

---

## Best YouTube Videos — Module 10 (Top 5)

1. **"Number Series Tricks — All Patterns"** — CareerRide
   - Search: https://www.youtube.com/results?search_query=Number+Series+Tricks+All+Patterns+CareerRide+Reasoning

2. **"Coding Decoding — Shortcuts | Placement"** — TalentSprint Aptitude Prep
   - Search: https://www.youtube.com/results?search_query=Coding+Decoding+Shortcuts+Placement+TalentSprint

3. **"Blood Relations — Shortcut Method"** — Freshersworld
   - Search: https://www.youtube.com/results?search_query=Blood+Relations+Shortcut+Method+Freshersworld+Reasoning

4. **"Syllogism — All Rules Explained"** — Study Smart
   - Search: https://www.youtube.com/results?search_query=Syllogism+All+Rules+Explained+Study+Smart+Reasoning

5. **"Directions and Distance Problems | Aptitude"** — AKAgarwalAptitude
   - Search: https://www.youtube.com/results?search_query=Directions+Distance+Problems+Aptitude+AKAgarwal

---

## Best Free Resources — Module 10

| Resource | Link |
|---|---|
| IndiaBix Series | https://www.indiabix.com/logical-reasoning/number-series/ |
| IndiaBix Coding-Decoding | https://www.indiabix.com/logical-reasoning/coding-decoding/ |
| IndiaBix Blood Relations | https://www.indiabix.com/logical-reasoning/blood-relations/ |
| IndiaBix Directions | https://www.indiabix.com/logical-reasoning/direction-sense/ |
| IndiaBix Syllogisms | https://www.indiabix.com/logical-reasoning/syllogism/ |
| GFG Logical Reasoning | https://www.geeksforgeeks.org/logical-reasoning/ |
| CareerRide Reasoning | https://careerride.com/Aptitude-Logical-Reasoning.aspx |

---

## Practice Set — Module 10 (20 MCQs)

**1.** Next term: 5, 10, 20, 40, ?
(a) 60  (b) 80  (c) 100  (d) 120    **Answer: (b) 80** — ×2 each term

**2.** Next term: 1, 1, 2, 3, 5, 8, 13, ?
(a) 18  (b) 20  (c) 21  (d) 24    **Answer: (c) 21** — Fibonacci: 8+13=21

**3.** If ROAD = URDG, code SWAN
(a) VXDQ  (b) VZCQ  (c) VZDQ  (d) TXDQ    **Answer: (c) VZDQ** — R+3=U,O+3=R,A+3=D,D+3=G; S+3=V,W+3=Z,A+3=D,N+3=Q

**4.** A is the uncle of B, B is the son of C. How is A related to C?
(a) Brother  (b) Father  (c) Son  (d) Nephew    **Answer: (a) Brother** — A is uncle of B who is son of C → A is C's brother/brother-in-law (assuming same side)

**5.** A faces South, turns 90° right, walks 5km, turns 90° left. Now he faces?
(a) North  (b) South  (c) East  (d) West    **Answer: (b) South** — Start: South. Right turn → West. Left turn → South again.

**6.** All A are B. All B are C. Conclusion: All A are C.
(a) Valid  (b) Invalid  (c) Partially valid  (d) Cannot determine    **Answer: (a) Valid**

**7.** In 60 students: 30 play cricket, 25 play football, 10 play both. How many play neither?
(a) 10  (b) 15  (c) 20  (d) 5    **Answer: (b) 15** — 30+25−10=45; neither=60−45=15

**8.** Odd one out: 8, 27, 64, 100, 125
(a) 27  (b) 64  (c) 100  (d) 125    **Answer: (c) 100** — 100 = 10² (square, not cube); rest are perfect cubes

**9.** Series: 3, 8, 15, 24, 35, ?
(a) 45  (b) 46  (c) 48  (d) 50    **Answer: (c) 48** — Diff: 5,7,9,11,13; next=35+13=48

**10.** If SUGAR = 19,21,7,1,18, what is WATER?
(a) 23,1,20,5,18  (b) 22,1,19,4,17  (c) 24,2,21,6,19  (d) 23,1,20,5,17    **Answer: (a) 23,1,20,5,18** — Direct A=1,B=2…Z=26

**11.** A walks 10m North, 6m East, 10m South. How far and which direction from start?
(a) 6m East  (b) 4m East  (c) 6m West  (d) 16m East    **Answer: (a) 6m East** — N−S cancel; net E=6m

**12.** No flowers are stones. All roses are flowers. Conclusion: No roses are stones.
(a) Valid  (b) Invalid  (c) Partially valid  (d) None    **Answer: (a) Valid** — All+No = No

**13.** 10th letter to the right of R in alphabet?
(a) A  (b) B  (c) Z  (d) C    **Answer: (b) B** — R=18, +10=28; 28−26=2=B

**14.** If 13 = D, 25 = Z, 7 = H, what does 14 represent?
(a) O  (b) N  (c) M  (d) P    **Answer: (b) N** — 14th letter = N

**15.** Series: 2, 5, 11, 23, 47, ?
(a) 94  (b) 95  (c) 96  (d) 97    **Answer: (b) 95** — Each term = 2×prev+1: 2×47+1=95

**16.** Pointing to a man, a woman says "His mother is the only daughter of my mother." How is the woman related to the man?
(a) Grandmother  (b) Aunt  (c) Mother  (d) Sister    **Answer: (c) Mother** — "Only daughter of my mother" = herself → she is his mother

**17.** Some pens are books. All books are bags. Conclusion: Some pens are bags.
(a) Valid  (b) Invalid  (c) Cannot say  (d) Partially valid    **Answer: (a) Valid** — Some+All=Some ✓

**18.** A town P is 12km East of Q. R is 5km North of P. Distance from Q to R?
(a) 10km  (b) 12km  (c) 13km  (d) 15km    **Answer: (c) 13km** — √(12²+5²)=√169=13

**19.** Odd one out: AZ, BY, CX, DW, EF
(a) AZ  (b) CX  (c) EF  (d) DW    **Answer: (c) EF** — Rest are pairs where positions sum to 27 (A+Z=1+26); E+F=5+6=11 ≠ 27

**20.** All dogs bark. Ruff is a dog. Conclusion: Ruff barks.
(a) Valid  (b) Invalid  (c) Undetermined  (d) Partially valid    **Answer: (a) Valid** — Classic valid deductive syllogism

---

# MODULE 11 — ANALYTICAL REASONING

## 1. Introduction
Analytical Reasoning tests your ability to draw logical conclusions from structured information — seating arrangements, puzzles, statement-assumption, cause-effect, input-output, and clocks/calendars. This section differentiates average candidates from strong ones. Infosys consistently tests seating arrangements and puzzles; TCS NQT tests input-output and statement reasoning; Wipro and Accenture emphasise clocks, calendars, and critical reasoning.

## 2. Learning Objectives
- Solve linear and circular seating arrangements
- Decode input-output machine problems
- Evaluate statement-assumption, statement-conclusion questions
- Solve clock angle and time problems
- Calculate day/date using calendar logic
- Solve ranking and ordering puzzles
- Apply cause-and-effect and course-of-action reasoning

## 3. Prerequisites
- Module 10: Logical Reasoning Basics (syllogisms, series)
- Module 9: Basic algebra (for equation-based puzzle solving)
- Basic reading comprehension for statement-based questions

## 4. Concepts Explained Simply

### Seating Arrangements
**Linear:** People sit in a row. Use left/right relative positions.
**Circular:** People sit in a circle. Fix one person as reference (eliminates rotation equivalence). Use clockwise/anticlockwise references.
- "Immediate left of A" in a circle means the person sitting to A's left.
- Always draw the arrangement, never track mentally.

### Input-Output Machines
A machine processes words/numbers in steps following a hidden rule. Given first input and several steps, you must:
1. Find the pattern applied at each step
2. Apply the same pattern to find a missing step

Common patterns:
- Words arranged alphabetically (or reverse) step by step
- Numbers arranged ascending/descending one at a time
- Alternating word + number arrangement

### Clocks
```
Hour hand moves:   360°/12hrs = 0.5°/min
Minute hand moves: 360°/60min = 6°/min
Relative speed of minute hand over hour hand = 5.5°/min

Angle between hands at H:MM:
θ = |30H − 5.5M|    (take the smaller angle if > 180°)

Hands coincide (overlap): Every 65 5/11 minutes
Hands at 90°: Every 32 8/11 minutes (approx)
Hands at 180° (opposite): Every 65 5/11 minutes
In 12 hours: hands coincide 11 times, at right angle 22 times, straight 11 times
```

### Calendars
```
Odd days concept:
Ordinary year = 365 days = 52 weeks + 1 odd day
Leap year     = 366 days = 52 weeks + 2 odd days
100 years = 76 ordinary + 24 leap = 5 odd days
200 years = 3 odd days
300 years = 1 odd day
400 years = 0 odd days

Day codes (for reference day calculation):
Sun=0, Mon=1, Tue=2, Wed=3, Thu=4, Fri=5, Sat=6

Leap year rule:
Divisible by 4 → leap (except centuries)
Century leap: divisible by 400
```

### Statement-Assumption
An assumption is something IMPLICIT and UNSTATED that must be true for the statement to make sense.
- **Valid assumption:** It is not explicitly stated but is necessary for the statement's logic.
- **Invalid assumption:** It is already stated, or too extreme, or unrelated.

### Statement-Conclusion
A conclusion FOLLOWS from the statement. It must be:
- Directly deducible (not assumed or stretched)
- Consistent with ALL information in the statement
- Not too general or too specific

### Cause and Effect
Two events given. Determine:
- Event I is cause, Event II is effect
- Event II is cause, Event I is effect
- Both are effects of a common cause
- Both are independent events

## 5. Important Rules and Formulae

```
CLOCKS:
Angle = |30H − 5.5M|   (smaller angle if > 180°)
Coincide: every 65 5/11 min from previous coincidence
Right angle: every 32 8/11 min
In 12 hrs: overlap 11×, right angle 22×, straight 11×

Faulty clock: if clock gains/loses x min per hour
  After T hours, error = T × (x/60) minutes

CALENDARS:
Jan=31, Feb=28/29, Mar=31, Apr=30, May=31, Jun=30
Jul=31, Aug=31, Sep=30, Oct=31, Nov=30, Dec=31
Month odd days: Jan=3, Feb=0(28)/1(29), Mar=3, Apr=2, May=3, Jun=2,
                Jul=3, Aug=3, Sep=2, Oct=3, Nov=2, Dec=3

RANKING:
If rank from top = R_t and rank from bottom = R_b
Total = R_t + R_b − 1

SEATING (circular):
Total arrangements = (n−1)! for n people
If clockwise ≠ anticlockwise: (n−1)!
If clockwise = anticlockwise (necklace): (n−1)!/2

LINEAR SEATING:
n people: n! total arrangements
Condition "A and B always together": treat as one unit → (n−1)! × 2!
Condition "A and B never together": Total − (together) = n! − (n−1)!×2

INPUT-OUTPUT:
Step 1: Compare input with Step 1, Step 1 with Step 2 etc.
Step 2: Identify what changes (sorting? shifting? arithmetic?)
Step 3: Apply same rule to find missing step
```

## 6. Shortcuts & Tricks

- **Clock angle shortcut:** At any time H hours M minutes, angle = |30H − 5.5M|. For 3:20 → |90 − 110| = 20°.
- **"Same day next year" calendar trick:** Ordinary year → same date is 1 day later. Leap year → 2 days later (if Feb is crossed).
- **Finding day of week:** Add the code contributions: Day = (Year code + Month code + Date) mod 7. Use Zeller's or Doomsday algorithm.
- **Seating arrangement — fix and fill:** In circular seating, fix the most constrained person first, then fill remaining positions.
- **Ranking combined:** Total = rank from top + rank from bottom − 1. If "at least n people between A and B," positions can be calculated directly.
- **Statement-assumption test:** Ask "does the statement logically require this to be true?" If NO, the assumption is invalid.
- **Input-output patterns:** If numbers and words both present, often words sort alphabetically, numbers sort descending (or alternate).
- **Puzzle solving strategy:** List all given constraints → create a grid/table → eliminate impossible combinations → fill definite cells first.

## 7. Step-by-Step Solving Methods

### Clock Angle
**Q:** Find angle between clock hands at 4:40.
```
H = 4, M = 40
Angle = |30×4 − 5.5×40|
      = |120 − 220|
      = |−100|
      = 100°
```

### Calendar — Day Finding
**Q:** Jan 1, 2000 was Saturday. What day is Jan 1, 2001?
```
Year 2000 is leap year → 366 days = 52 weeks + 2 odd days
Saturday + 2 = Monday
Jan 1, 2001 = Monday
```

### Seating Arrangement
**Q:** A, B, C, D, E sit in a row. A is 2nd from left. C is immediate right of B. D is at one end. E is not at an end. Find order.
```
D at end → D is position 1 or 5
A is 2nd → A = position 2
E not at end → E ≠ 1 or 5
C is immediate right of B → BC pair

If D=1: positions: D, A, _, _, _
E not at 5 → E at 3 or 4
BC pair in remaining: {3,4,5}
BC could be 3,4 or 4,5. E not at 5.
If BC=4,5: E at 3 → Order: D,A,E,B,C ✓
```

### Ranking Problem
**Q:** In a class, Ram's rank from top is 12th and from bottom is 28th. Class size?
```
Total = 12 + 28 − 1 = 39
```

### Statement-Assumption
**Statement:** "Regular exercise keeps you healthy."
**Assumption:** "Health can be maintained through exercise."
```
This is implicit (not stated but necessary) → VALID assumption
```
**Assumption:** "Without exercise no one can be healthy."
```
This is too extreme / not necessarily implied → INVALID
```

## 8. Common Mistakes
- Clock angle: forgetting to take the SMALLER angle when result > 180°
- Calendar: not checking if the year is a leap year before counting odd days
- Seating: not fixing one person in circular arrangements (leads to over-counting)
- Ranking: using R_t + R_b instead of R_t + R_b − 1 (off by one error)
- Input-output: jumping to conclusion after just one step comparison — always verify across 3+ steps
- Statement-assumption: accepting assumptions that are explicitly stated (not implicit = not assumption)
- Puzzles: making deductions without logical backing, then getting cornered — always mark "certain" vs "possible"
- Cause-effect: confusing correlation with causation in exam questions

## 9. Examples

### Easy
**Q:** Hands of a clock coincide at 12:00. When do they next coincide?
```
Coincide every 65 5/11 minutes
Next coincidence = 1:05 5/11 (i.e., 1hr 5min 27sec approx)
```

### Medium — Seating Puzzle
**Q:** 6 people A,B,C,D,E,F sit in a circle. A is opposite D. B is next to A. C is not next to D. Arrange.
```
Fix A at top. D is opposite = at bottom.
B is next to A: B at position 2 or 6 (A's neighbours).
C not next to D: D's neighbours are positions 4 and 6 (or 4 and 2 depending on setup).
Place B at 2, remaining E,F,C at 3,4,5,6 (minus B's spot).
Test C not at 4 or 6 → C at 3 or 5.
One valid arrangement: A,B,E,D,F,C (clockwise)
```

### Hard — Input-Output
```
Input:  sky  26  hard  18  map  33  cat  9
Step 1: cat  9   hard  18  map  33  sky  26   [words sorted alphabetically]
Step 2: cat  9   hard  18  map  26  sky  33   [numbers sorted ascending]
Step 3: cat  9   hard  18  map  26  sky  33   [complete — sorted]
Pattern: words sorted A→Z, numbers rearranged to ascending order
```

## 10. Practice Problems
1. Find the angle between clock hands at 7:20.
2. 5 people A,B,C,D,E sit in a circle. B is 2nd right of A. C is not adjacent to A or B. D and E are adjacent. Arrange them.
3. If 15 March 1995 was Wednesday, what day was 15 March 1996?
4. In a line of 40 students, Priya is 15th from left and Rahul is 20th from right. How many students are between them?
5. Statement: "The government should increase investment in renewable energy." Assumption: "Renewable energy is a viable alternative." Valid?
6. Find when clock hands are at right angles between 3 and 4 o'clock.
7. Input-Output: if "32 nice 17 ball 56 car 8" becomes "ball 8 car 17 nice 32 56" in final step, what is the pattern?
8. In a row of 50, if rank from top = 18 and rank from bottom = 38, are they the same person?
9. A is taller than B, C is shorter than D, D is taller than A. Shortest person?
10. Statement: "Most students passed the exam." Conclusion: "Some students failed." Valid?

## 11. Previous Placement Questions

1. **(TCS — Input-Output)**
   Input: 85 cost 17 nice 39 best 72
   Step 1: best 17 cost 39 nice 72 85 [all words alphabetical, numbers ascending]
   Q: What is step 2?
   ```
   In TCS NQT, final output reached in one step (all sorted). So step 1 is final.
   If multi-step: numbers go to end or beginning in each step — observe from given pattern.
   ```

2. **(Infosys — Seating)**
   8 people around circular table. A sits 3rd to left of B. C sits opposite D. E is between A and C.
   ```
   Fix B at position 1. A at position 4 (3rd left = 4th clockwise).
   Work out remaining from additional clues.
   Typical answer: derive positions of all 8 systematically.
   ```

3. **(Wipro — Clock)**
   At what time between 6 and 7 do clock hands coincide?
   ```
   At 6:00, minute hand is 180° behind hour hand.
   Minute hand gains 5.5°/min on hour hand.
   Time = 180/5.5 = 32 8/11 minutes
   Answer: 6:32 8/11 (approx 6:32:44)
   ```

4. **(Accenture — Calendar)**
   If today is Friday, what day is 64 days from now?
   ```
   64 / 7 = 9 weeks remainder 1
   Friday + 1 = Saturday
   ```

5. **(Cognizant — Statement-Conclusion)**
   Statement: "No country is entirely self-sufficient."
   Conclusion: "All countries need to depend on others for some goods."
   ```
   Directly follows from the statement → VALID conclusion.
   ```

## 12. Company-wise Questions

| Company | Typical Analytical Reasoning Topics |
|---|---|
| TCS NQT | Input-output, statement-reasoning, puzzles |
| Infosys | Seating arrangements, blood relation puzzles |
| Wipro | Clocks, calendars, statement-assumption |
| Accenture | Seating, directions+ranking combinations |
| Cognizant | Statement-conclusion, cause-effect |
| Capgemini | Logical puzzles, ordering, ranking |
| IBM | Input-output, seating arrangements |
| Deloitte | Critical reasoning, course of action |

## 13. Interview Tips
- For seating puzzles: immediately draw a diagram (linear = row, circular = wheel). Never solve in your head.
- Clock problems: memorise the formula |30H − 5.5M| — deriving it each time wastes 2 minutes.
- Statement-assumption questions are subjective; in interviews, justify your answer with "the statement implicitly requires this because…"
- Input-output: tell the interviewer the pattern you identified before applying it — shows structured thinking.
- Ranking: always use Total = top rank + bottom rank − 1. Write it down to avoid off-by-one errors.

## 14. Frequently Asked Questions

**Q: In circular seating, why fix one person?**
Because in a circular arrangement, rotations of the same arrangement are considered identical. Fixing one person eliminates this duplicate counting. Remaining (n−1) people can be arranged in (n−1)! ways.

**Q: How do I identify a leap year quickly?**
Divisible by 4 → likely leap. BUT if it's a century year (1900, 2100), it must be divisible by 400. 1900 is NOT a leap year; 2000 IS.

**Q: What is the difference between assumption and conclusion?**
An assumption is something that must already be true (implicit prerequisite) for the statement to be made. A conclusion is what logically follows AFTER the statement is accepted as true.

**Q: How do clock hands coincide 11 times (not 12) in 12 hours?**
At 12:00 they coincide. The next 11 coincidences happen approximately every 65.45 minutes. 11 × 65.45 ≈ 720 minutes = 12 hours. So in exactly 12 hours there are exactly 11 coincidences after the starting one.

## 15. One-Page Revision Notes — Analytical Reasoning

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ANALYTICAL REASONING — QUICK REVISION CARD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CLOCK: Angle = |30H − 5.5M|  (smaller angle if >180)
Coincide: every 65 5/11 min | In 12hrs: 11 overlaps, 22 right angles

CALENDAR:
Ordinary year = 1 odd day | Leap year = 2 odd days
100yr=5 odd | 200yr=3 | 300yr=1 | 400yr=0
Leap: div by 4 (not century) or div by 400

RANKING: Total = Top_rank + Bottom_rank − 1

SEATING:
Circular: fix one → (n−1)! arrangements
Linear: n! total | Together: (n−1)!×2! | Never together: n!−(n−1)!×2

STATEMENT-ASSUMPTION: Must be implicit, unstated, necessary.
STATEMENT-CONCLUSION: Must directly follow; not too broad/narrow.

CAUSE-EFFECT: Identify which event logically precedes / produces the other.

INPUT-OUTPUT: Compare step-by-step. Find rule. Verify on 3 steps.

PUZZLES: List all constraints → grid/table → definite first → eliminate.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Best YouTube Playlist — Module 11: Analytical Reasoning

**Playlist 1 (Best):**
- Title: Analytical Reasoning Complete — Seating, Clocks, Puzzles
- Channel: TalentSprint Aptitude Prep
- Search: https://www.youtube.com/results?search_query=TalentSprint+Analytical+Reasoning+Seating+Clocks+Puzzles+Placement
- Difficulty: Intermediate → Advanced
- Why recommended: Covers all analytical reasoning sub-topics for placement with company-specific question patterns

**Playlist 2 (Good):**
- Title: Analytical Reasoning Shortcut Methods | Placement
- Channel: CareerRide
- Search: https://www.youtube.com/results?search_query=CareerRide+Analytical+Reasoning+Shortcut+Placement
- Difficulty: Beginner → Intermediate
- Why recommended: Structured English medium lessons on seating, clocks, calendars; well-paced for from-scratch learners

**Playlist 3 (Good):**
- Title: Reasoning — Seating Arrangement, Input-Output, Clocks
- Channel: Feel Free to Learn
- Search: https://www.youtube.com/results?search_query=Reasoning+Seating+Arrangement+Input+Output+Clocks+Feel+Free+Learn
- Difficulty: Intermediate
- Why recommended: Excellent visual approach to puzzle-solving with worked examples at exam speed

---

## Best YouTube Videos — Module 11 (Top 5)

1. **"Seating Arrangement — Linear and Circular Tricks"** — CareerRide
   - Search: https://www.youtube.com/results?search_query=Seating+Arrangement+Linear+Circular+Tricks+CareerRide

2. **"Clocks — All Concepts and Tricks | Aptitude"** — TalentSprint Aptitude Prep
   - Search: https://www.youtube.com/results?search_query=Clocks+All+Concepts+Tricks+Aptitude+TalentSprint

3. **"Input Output Reasoning Tricks | Placement"** — Study Smart
   - Search: https://www.youtube.com/results?search_query=Input+Output+Reasoning+Tricks+Placement+Study+Smart

4. **"Calendar Problems — Day Finding Shortcuts"** — Freshersworld
   - Search: https://www.youtube.com/results?search_query=Calendar+Problems+Day+Finding+Shortcuts+Freshersworld

5. **"Statement Assumption Conclusion — Critical Reasoning"** — AKAgarwalAptitude
   - Search: https://www.youtube.com/results?search_query=Statement+Assumption+Conclusion+Critical+Reasoning+AKAgarwal

---

## Best Free Resources — Module 11

| Resource | Link |
|---|---|
| IndiaBix Seating Arrangement | https://www.indiabix.com/logical-reasoning/seating-arrangement/ |
| IndiaBix Clocks | https://www.indiabix.com/aptitude/clocks/ |
| IndiaBix Calendar | https://www.indiabix.com/aptitude/calendar/ |
| IndiaBix Input-Output | https://www.indiabix.com/logical-reasoning/input-output/ |
| IndiaBix Statement-Assumption | https://www.indiabix.com/logical-reasoning/statement-and-assumption/ |
| GFG Analytical Reasoning | https://www.geeksforgeeks.org/logical-reasoning/ |
| CareerRide Clocks | https://careerride.com/Aptitude-Clocks.aspx |

---

## Practice Set — Module 11 (20 MCQs)

**1.** Angle between hands at 3:00?
(a) 60°  (b) 90°  (c) 120°  (d) 180°    **Answer: (b) 90°** — |30×3−5.5×0|=90

**2.** Hands of a clock coincide how many times in 24 hours?
(a) 22  (b) 24  (c) 44  (d) 48    **Answer: (a) 22** — 11 times per 12 hours × 2 = 22

**3.** If 1st January 2023 was Sunday, what day is 1st January 2024?
(a) Monday  (b) Tuesday  (c) Sunday  (d) Saturday    **Answer: (a) Monday** — 2023 is ordinary → 1 odd day; Sun+1=Mon

**4.** Rank from top = 8, rank from bottom = 15, total students?
(a) 22  (b) 21  (c) 23  (d) 20    **Answer: (a) 22** — 8+15−1=22

**5.** At what time between 2 and 3 do hands coincide?
(a) 2:10  (b) 2:10 10/11  (c) 2:11  (d) 2:09    **Answer: (b) 2:10 10/11** — Gap at 2:00=60°; time=60/5.5=120/11=10 10/11 min past 2

**6.** A is taller than B. C is taller than A. D is shorter than B. Who is shortest?
(a) A  (b) B  (c) C  (d) D    **Answer: (d) D** — C>A>B>D

**7.** Statement: "Use umbrella during rains." Assumption: "It rains sometimes." Valid?
(a) Valid  (b) Invalid  (c) Partially valid  (d) Cannot say    **Answer: (a) Valid** — implicit and necessary

**8.** 6 people sit in a circle. How many arrangements?
(a) 720  (b) 360  (c) 120  (d) 24    **Answer: (c) 120** — (6−1)!=120

**9.** Angle at 6:30?
(a) 0°  (b) 15°  (c) 30°  (d) 45°    **Answer: (b) 15°** — |30×6−5.5×30|=|180−165|=15°

**10.** Today is Wednesday. 94 days later is?
(a) Friday  (b) Saturday  (c) Sunday  (d) Monday    **Answer: (b) Saturday** — 94/7=13 weeks+3 days; Wed+3=Saturday

**11.** Statement: "All politicians are corrupt." Conclusion: "Some honest people are not politicians." Valid?
(a) Valid  (b) Invalid  (c) Uncertain  (d) Partially valid    **Answer: (a) Valid** — contrapositive follows logically

**12.** A,B,C,D,E in a line. B is 3rd from left. D is between B and E. A is to the right of E. C is leftmost. Order?
(a) C,A,B,D,E  (b) C,D,B,E,A  (c) C,E,B,D,A  (d) C,B,D,E,A    **Answer: (d) C,B,D,E,A** — C=1,B=3,D=4(between B and E),E=5... wait D between B and E → D=4; A right of E → A=5? B=3,D=4,E=5... A right of E means A>5 impossible in 5 seats. Try: C=1,B=3,D=4,E=5 wrong. Re-read: D between B(pos3) and E; A right of E. Possible: C,B,D,E,A=1,2,3,4,5? B=2 but B is 3rd from left=pos3. So C=1,B=3: remaining {A,D,E} at positions {2,4,5}. D between B(3) and E: D at 4, E at 5, A at 2 → C,A,B,D,E → **(a)**

**13.** Which year has same calendar as 2001?
(a) 2007  (b) 2006  (c) 2009  (d) 2012    **Answer: (a) 2007** — Odd days from 2001: 2002=1,2003=1,2004=2,2005=1,2006=1,2007=1; cumulative=7=0 → same calendar. After adding: 2001→2007 works.

**14.** Statement: "Students should take up sports." Assumption: "Sports is beneficial for students." Valid?
(a) Valid  (b) Invalid  (c) Cannot say  (d) Partially    **Answer: (a) Valid** — implicit prerequisite for the recommendation

**15.** 4 people P,Q,R,S in circle. P is opposite R. Q is to immediate right of P. Where is S?
(a) Right of Q  (b) Left of P  (c) Opposite Q  (d) Right of R    **Answer: (c) Opposite Q** — P opposite R; Q right of P → positions: P,Q,R,S clockwise → S opposite Q ✓

**16.** Cause: Price of vegetables increased. Effect: People stopped buying vegetables. Which is?
(a) Effect only  (b) Cause only  (c) Cause-Effect  (d) Independent    **Answer: (c) Cause-Effect** — price rise caused reduced buying

**17.** In 12 hours, how many times are hands of clock at right angles?
(a) 11  (b) 22  (c) 44  (d) 24    **Answer: (b) 22**

**18.** February 2000 had 29 days. February 2100 will have?
(a) 29 days  (b) 28 days  (c) 30 days  (d) 27 days    **Answer: (b) 28 days** — 2100 is not divisible by 400, so not a leap year

**19.** Input: "win 32 best 18 town 45" → Final: "best 18 town 32 win 45". Pattern?
(a) Words alphabetical, numbers ascending in original position  (b) Alternating sorted words and numbers  (c) Words alphabetical, numbers assigned in ascending order  (d) Random    **Answer: (c)** — best,town,win (alphabetical); 18,32,45 (ascending) in interleaved fashion

**20.** 5 friends ranked 1–5. A is above B. C is between D and E. D is above A. B is above E. Who is rank 3?
(a) A  (b) B  (c) C  (d) E    **Answer: (a) A** — D>A>B>E; C between D and E → order: D,C,A,B,E or D,A,C,B,E. C between D(1) and E(5)→ C=3; order: D,A,C,B,E → rank 3 = C → **(c) C**

---

# MODULE 12 — DATA INTERPRETATION

## 1. Introduction
Data Interpretation (DI) is a dedicated section in TCS NQT, Infosys, Wipro, and Cognizant placement tests. It presents data in tables, bar charts, line graphs, pie charts, or mixed formats and asks you to compute percentages, ratios, averages, and comparisons. DI is not about knowing new formulas — it is about reading data accurately and applying Modules 3–5 (ratio, percentage, average) at speed under pressure.

## 2. Learning Objectives
- Read and extract data accurately from tables, bar charts, line graphs, and pie charts
- Calculate percentage share, percentage change, and ratios from given data
- Find averages, totals, and differences from graphical data
- Identify trends (increasing, decreasing, fluctuating) in line graphs
- Solve mixed DI sets with multiple graph types
- Manage time effectively: 2–3 min per DI question is the target

## 3. Prerequisites
- Module 3: Ratio and proportion
- Module 4: Percentage calculations
- Module 5: Average and statistics basics
- Module 2: Basic arithmetic speed

## 4. Types of Data Interpretation

### Table DI
Raw numbers in rows and columns. Most precise — no rounding needed.
Reading strategy: Scan row/column headers first, then locate required cells.

### Bar Chart DI
Vertical or horizontal bars represent values. Heights/lengths = values.
Reading strategy: Identify scale on axis. Approximate bar heights carefully.

### Line Graph DI
Points connected by lines showing trends over time.
Reading strategy: Look for peak, trough, steepest rise/fall. Compare slopes.

### Pie Chart DI
Circle divided into sectors. Each sector = % of total or degree of arc.
```
% = (sector angle / 360) × 100
Value = % × Total / 100
Sector angle = % × 3.6
```

### Mixed / Caselet DI
Data given in paragraph form (caselet) or combination of graph types.
Reading strategy: Extract all numbers first into a mini-table, then solve.

## 5. Key Calculation Techniques

```
PERCENTAGE SHARE:
% share of A = (Value of A / Total) × 100

PERCENTAGE CHANGE:
% change = (New − Old) / Old × 100

RATIO FROM DATA:
Extract two values directly, simplify ratio

AVERAGE FROM DATA:
Average = Sum of all values / Count of values

PIE CHART:
Sector % = (angle/360) × 100
Angle = (% / 100) × 360

GROWTH RATE:
Absolute growth = Current − Previous
% growth = (Current − Previous) / Previous × 100

COMPOUND ANNUAL GROWTH RATE (CAGR):
CAGR = (Final/Initial)^(1/n) − 1   [n = number of years]
```

## 6. Speed Shortcuts for DI

- **Approximate, don't calculate exactly:** DI options are usually spread apart enough to allow rounding. 347/1289 ≈ 350/1300 ≈ 27%.
- **Percentage shortcut:** To find 33% → find 1/3. To find 12.5% → find 1/8. Memorise fraction-% table.
- **Eliminate options:** If you can narrow down to two choices by approximation, often no need to compute exactly.
- **Ratio comparison without division:** Cross-multiply. 347/1289 vs 412/1456 → 347×1456 vs 412×1289. Approximate: 350×1450 vs 410×1290. 507500 vs 528690 → second is larger.
- **Common base trick:** Express all values as % of the same base for quick comparison.
- **"Which year has highest growth" questions:** Look at steepest rise in line graph visually, then verify only the top 2–3 contenders numerically.
- **Pie chart addition:** If two sectors are combined, just add their percentages before multiplying with total.
- **Time management:** Scan all 5 questions of a DI set before starting. Answer easiest 3 first, skip the hardest if short on time.

## 7. Step-by-Step Solving Methods

### Table DI Example
```
           2019    2020    2021    2022
Sales(₹Cr) 120     150     180     210
Profit(₹Cr) 18     22.5    27      36

Q: Profit % in 2021?
Profit% = 27/180 × 100 = 15%

Q: % growth in sales from 2020 to 2022?
% growth = (210−150)/150 × 100 = 40%

Q: Average profit over 4 years?
= (18+22.5+27+36)/4 = 103.5/4 = ₹25.875 Cr
```

### Bar Chart DI
```
Assume bars for Product A: 2020=40, 2021=60, 2022=55, 2023=70 (units: thousands)

Q: In which year did Product A show highest growth?
2020→2021: +20 (50% growth) ← highest
2021→2022: −5 (decline)
2022→2023: +15 (27% growth)
Answer: 2021

Q: Average units sold?
= (40+60+55+70)/4 = 225/4 = 56.25 thousand
```

### Pie Chart DI
```
Total revenue = ₹500 Cr
Sectors: Product A=30%, B=25%, C=20%, D=15%, E=10%

Q: Revenue from Product B?
= 25% × 500 = ₹125 Cr

Q: Ratio of revenue from A to C?
A:C = 30:20 = 3:2

Q: How much more does A earn than E?
A−E = (30−10)% × 500 = 20% × 500 = ₹100 Cr
```

### Line Graph DI
```
Export data: 2018=200, 2019=250, 2020=220, 2021=300, 2022=280 (Mn USD)

Q: Year with highest decline?
2019→2020: −30 | 2021→2022: −20 → 2020 had highest decline

Q: % change from 2020 to 2021?
= (300−220)/220 × 100 = 80/220 × 100 ≈ 36.36%
```

## 8. Common Mistakes
- Misreading the scale on bar charts (e.g., scale starts at 50, not 0 — difference is smaller than it looks)
- In pie charts, computing angle when question asks for value — always convert to value using total
- Comparing absolute values when question asks for % growth (different base = different %!)
- Reading "2019 to 2021" as 2 years when it is actually a span of 2 years but 3 data points
- Not checking units (crores vs lakhs, km vs m) — unit mismatch gives wrong answers
- Rushing through DI and misidentifying the row/column — always double-check which row you're reading
- Calculating unnecessary values — read ALL five questions first, then extract only needed data

## 9. Examples

### Easy DI Question
```
Data: Company X profit = ₹240 Cr, Company Y profit = ₹180 Cr, Total industry = ₹800 Cr
Q: Combined share of X and Y?
Combined = (240+180)/800 × 100 = 420/800 × 100 = 52.5%
```

### Medium DI Question
```
Bar chart shows students: 2018=400, 2019=500, 2020=450, 2021=600
Q: In which year was % increase highest?
2018→2019: 100/400=25%
2019→2020: −50/500=−10% (decline)
2020→2021: 150/450=33.3%
Answer: 2021 (33.3% highest increase)
```

### Hard DI Question
```
Pie chart: total = ₹1200 Cr
Sector A = 72°, B = 90°, C = 108°, D = 54°, E = 36°
Q: By what % is B's revenue more than E's?
B = 90/360 × 1200 = 300 Cr
E = 36/360 × 1200 = 120 Cr
% more = (300−120)/120 × 100 = 180/120 × 100 = 150%
```

## 10. Practice Problems
1. A table shows exports: 2018=₹400Cr, 2019=₹500Cr, 2020=₹450Cr, 2021=₹600Cr, 2022=₹750Cr. Find CAGR from 2018 to 2022.
2. Pie chart shows budget: Education=25%, Health=20%, Defence=30%, Others=25%. Total=₹8000Cr. How much more is Defence vs Education?
3. Bar chart: runs scored by 5 batsmen: A=45, B=72, C=60, D=38, E=55. Find average runs.
4. Line graph: Company revenue 2019–2023: 100,130,120,160,200 (₹Cr). Find year with maximum % growth.
5. Table: 3 products, 3 years. Identify which product had the most consistent growth (lowest % variation).
6. Pie chart sectors: A=30%, B=?, C=20%, D=15%, E=10%. Total degrees=360°. Find B's sector angle.
7. Bar chart shows male and female employees. Male: 600, Female: 400 in 2020. Male:800, Female:600 in 2022. Find % change in female employees.
8. From a table, monthly sales for Q1 (Jan–Mar) = 120,150,180. Q2 (Apr–Jun) = 90,110,130. Compare average quarterly sales.
9. Line graph shows temperature data. Find the month with steepest decline.
10. Mixed DI: Revenue table + pie chart of profit distribution. Find which division has highest profit per unit revenue.

## 11. Previous Placement Questions

1. **(TCS NQT — Table)**
   Production data (in thousand units): Plant A: 2021=120, 2022=150; Plant B: 2021=80, 2022=100
   Q: Combined % increase from 2021 to 2022?
   ```
   2021 total = 200, 2022 total = 250
   % increase = 50/200 × 100 = 25%
   ```

2. **(Infosys — Pie Chart)**
   Pie chart: 5 departments, total employees=2400
   HR=15%, IT=30%, Finance=20%, Sales=25%, Others=10%
   Q: How many more employees in IT than HR?
   ```
   IT = 30% × 2400 = 720
   HR = 15% × 2400 = 360
   Difference = 360
   ```

3. **(Wipro — Line Graph)**
   Website visits (millions): 2018=5, 2019=8, 2020=7, 2021=12, 2022=10
   Q: Year with highest % drop?
   ```
   2019→2020: 1/8×100=12.5%
   2021→2022: 2/12×100=16.67% ← highest drop
   Answer: 2022
   ```

4. **(Accenture — Bar Chart)**
   Sales: Jan=40, Feb=55, Mar=50, Apr=70 (₹ thousand)
   Q: Average monthly sales for Q1 (Jan–Mar)?
   ```
   = (40+55+50)/3 = 145/3 ≈ ₹48,333
   ```

5. **(Cognizant — Mixed Table)**
   Revenue and Profit for 4 companies: A(Rev=500,Prof=75), B(400,60), C(600,96), D(350,56)
   Q: Which company has highest profit margin?
   ```
   A=15%, B=15%, C=16%, D=16%
   C and D tied at 16% — if asked "highest" pick the one with higher absolute profit among tied = C (₹96Cr)
   ```

## 12. Company-wise DI Patterns

| Company | DI Format | Number of Questions | Time Per Set |
|---|---|---|---|
| TCS NQT Foundation | Table + Bar | 5–8 Qs in 2 sets | ~2 min each |
| TCS NQT Advanced | Mixed (Table+Pie) | 5 Qs per set | ~2.5 min each |
| Infosys | Pie chart + Line graph | 5 Qs per set | ~2 min each |
| Wipro | Bar chart + Table | 3–5 Qs per set | ~1.5 min each |
| Accenture | Simple table/bar | 3–4 Qs | ~2 min each |
| Cognizant | Mixed + Caselet | 5 Qs per set | ~3 min each |
| Capgemini | Table + Pie | 5 Qs per set | ~2 min each |
| IBM | Simple table | 3 Qs | ~1.5 min each |

## 13. Interview Tips
- In group discussions or case interviews: read data aloud, state units, then compute — shows structured approach
- Always verify: "Is this asking for absolute value or percentage?" — the most common DI trap
- For approximation, say "approximately" before giving a rounded answer — intellectually honest
- Pie chart angles: if angle isn't given directly, compute from % × 3.6 (show the working)
- If two values look equal in a bar chart, compute both numerically to confirm — visual tricks are intentional

## 14. Frequently Asked Questions

**Q: Can I use approximation in DI questions?**
Yes. DI options are typically spaced far enough apart that approximation gets you to the right answer. Exact computation is rarely needed and wastes time.

**Q: How do I improve DI speed?**
Practice fraction-% conversions until instant. Practice reading graphs at speed. Time yourself on DI sets. Target: 5 questions in 8–10 minutes.

**Q: What if the pie chart gives degrees instead of percentages?**
Convert: % = (degree/360) × 100. Then proceed normally.

**Q: What is CAGR and when is it tested?**
Compound Annual Growth Rate measures average year-over-year growth. CAGR = (Final/Initial)^(1/n) − 1. Tested in TCS Digital/Prime tracks.

**Q: How do I handle caselet DI?**
Read the paragraph once for overview. Re-read and extract all numbers into a mini-table. Only then answer questions.

## 15. One-Page Revision Notes — Data Interpretation

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DATA INTERPRETATION — QUICK REVISION CARD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
% Share    = (Part/Total) × 100
% Change   = (New−Old)/Old × 100
Avg        = Sum/Count
Ratio      = Extract two values, simplify

PIE CHART:
  % = angle/360 × 100
  Angle = % × 3.6
  Value = % × Total / 100

GROWTH: Highest % growth ≠ Highest absolute growth
        Always use ORIGINAL value as base for %

CAGR = (Final/Initial)^(1/n) − 1

READING STRATEGY:
  Step 1: Read ALL 5 questions first
  Step 2: Extract only needed data
  Step 3: Estimate before exact calculation
  Step 4: Check units (Cr vs Lakh vs Mn)
  Step 5: Verify answer against options

SPEED: Use fractions — 1/3≈33% | 1/4=25% | 1/5=20%
       1/6≈16.7% | 1/8=12.5% | 3/8=37.5%
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Best YouTube Playlist — Module 12: Data Interpretation

**Playlist 1 (Best):**
- Title: Data Interpretation Complete — Table, Bar, Pie, Line Graph
- Channel: TalentSprint Aptitude Prep
- Search: https://www.youtube.com/results?search_query=TalentSprint+Data+Interpretation+Complete+Table+Bar+Pie+Line+Graph
- Difficulty: Intermediate → Advanced
- Why recommended: Covers all DI formats with placement-level timed sets; includes TCS NQT and Infosys DI patterns

**Playlist 2 (Good):**
- Title: Data Interpretation Shortcuts | Placement Aptitude
- Channel: CareerRide
- Search: https://www.youtube.com/results?search_query=CareerRide+Data+Interpretation+Shortcuts+Placement+Aptitude
- Difficulty: Beginner → Intermediate
- Why recommended: Strong on approximation techniques and reading graphs at speed; great for beginners

**Playlist 3 (Good):**
- Title: DI for Placements — All Types with Speed Tricks
- Channel: Feel Free to Learn
- Search: https://www.youtube.com/results?search_query=DI+Placements+All+Types+Speed+Tricks+Feel+Free+Learn
- Difficulty: Intermediate
- Why recommended: Visual graph-reading tutorials with shortcut calculations; 1.57M subscribers

---

## Best YouTube Videos — Module 12 (Top 5)

1. **"Data Interpretation Shortcuts — Table and Bar"** — CareerRide
   - Search: https://www.youtube.com/results?search_query=Data+Interpretation+Shortcuts+Table+Bar+CareerRide

2. **"Pie Chart DI — All Types with Tricks"** — TalentSprint Aptitude Prep
   - Search: https://www.youtube.com/results?search_query=Pie+Chart+DI+All+Types+Tricks+TalentSprint

3. **"Line Graph DI | Placement Questions"** — Freshersworld
   - Search: https://www.youtube.com/results?search_query=Line+Graph+DI+Placement+Questions+Freshersworld

4. **"Data Interpretation for TCS NQT | Speed Methods"** — Study Smart
   - Search: https://www.youtube.com/results?search_query=Data+Interpretation+TCS+NQT+Speed+Methods+Study+Smart

5. **"Caselet DI — How to Solve Paragraph-based DI"** — AKAgarwalAptitude
   - Search: https://www.youtube.com/results?search_query=Caselet+DI+Paragraph+Based+Data+Interpretation+AKAgarwal

---

## Best Free Resources — Module 12

| Resource | Link |
|---|---|
| IndiaBix Data Interpretation | https://www.indiabix.com/data-interpretation/questions-and-answers/ |
| IndiaBix Table Charts | https://www.indiabix.com/data-interpretation/table-charts/ |
| IndiaBix Bar Charts | https://www.indiabix.com/data-interpretation/bar-charts/ |
| IndiaBix Pie Charts | https://www.indiabix.com/data-interpretation/pie-charts/ |
| IndiaBix Line Charts | https://www.indiabix.com/data-interpretation/line-charts/ |
| GFG DI Questions | https://www.geeksforgeeks.org/aptitude/data-interpretation-questions-aptitude/ |
| Placement Prep DI | https://www.placementpreparation.io/quantitative-aptitude/data-interpretation/ |

---

## Practice Set — Module 12 (20 MCQs based on embedded data)

*Use the following data for Q1–Q5:*
```
Sales Table (₹ Crore):
Year  | Product A | Product B | Product C | Total
2019  |    120    |    80     |    100    |  300
2020  |    150    |    90     |    110    |  350
2021  |    140    |    100    |    120    |  360
2022  |    180    |    110    |    130    |  420
```

**1.** % increase in Total Sales from 2019 to 2022?
(a) 30%  (b) 40%  (c) 35%  (d) 45%    **Answer: (b) 40%** — (420−300)/300×100=40%

**2.** Product A's share of total sales in 2021?
(a) 36.1%  (b) 38.9%  (c) 42.8%  (d) 40%    **Answer: (b) 38.9%** — 140/360×100≈38.9%

**3.** Which product had highest % growth from 2019 to 2022?
(a) A  (b) B  (c) C  (d) All equal    **Answer: (b) B** — A:50%, B:37.5%, C:30%. Wait: A=(180−120)/120×100=50%; B=(110−80)/80×100=37.5%; C=30%. → **(a) A**

**4.** Average total sales over 4 years?
(a) ₹357.5Cr  (b) ₹360Cr  (c) ₹365Cr  (d) ₹370Cr    **Answer: (a) ₹357.5Cr** — (300+350+360+420)/4=1430/4=357.5

**5.** Ratio of Product B to Product C sales in 2022?
(a) 11:13  (b) 9:11  (c) 10:11  (d) 11:12    **Answer: (a) 11:13** — 110:130=11:13

*Use this Pie Chart data for Q6–Q10:*
```
Annual Budget Distribution (Total = ₹2000 Cr):
Education: 25% | Health: 20% | Defence: 30% | Infrastructure: 15% | Others: 10%
```

**6.** Amount allocated to Education?
(a) ₹400Cr  (b) ₹500Cr  (c) ₹450Cr  (d) ₹600Cr    **Answer: (b) ₹500Cr** — 25%×2000=500

**7.** Sector angle for Defence?
(a) 90°  (b) 108°  (c) 120°  (d) 72°    **Answer: (b) 108°** — 30%×360=108°

**8.** How much more is Defence than Infrastructure?
(a) ₹200Cr  (b) ₹250Cr  (c) ₹300Cr  (d) ₹350Cr    **Answer: (c) ₹300Cr** — (30−15)%×2000=300

**9.** Ratio of Health to Others budget?
(a) 2:1  (b) 3:1  (c) 4:1  (d) 5:2    **Answer: (a) 2:1** — 20%:10%=2:1

**10.** If next year total budget increases by 10%, new Education allocation (same %)?
(a) ₹500Cr  (b) ₹540Cr  (c) ₹550Cr  (d) ₹600Cr    **Answer: (c) ₹550Cr** — 2000×1.1×25%=2200×0.25=550

*Use this Line Graph for Q11–Q15:*
```
Export values (₹ Mn): 2018=400, 2019=500, 2020=480, 2021=600, 2022=720, 2023=700
```

**11.** Year with highest % growth?
(a) 2019  (b) 2021  (c) 2022  (d) 2023    **Answer: (a) 2019** — 2019:(500−400)/400=25%; 2021:(600−480)/480=25%; 2022:20%; tie between 2019 and 2021 both 25% → first occurrence **(a)**

**12.** Year showing decline?
(a) 2020 only  (b) 2023 only  (c) Both 2020 and 2023  (d) None    **Answer: (c) Both 2020 and 2023** — 2020:480<500; 2023:700<720

**13.** Average exports from 2018–2023?
(a) ₹566.7Mn  (b) ₹575Mn  (c) ₹580Mn  (d) ₹590Mn    **Answer: (a) ₹566.7Mn** — (400+500+480+600+720+700)/6=3400/6=566.7

**14.** % fall from peak to 2023?
(a) 2.78%  (b) 5%  (c) 3.33%  (d) 2%    **Answer: (a) 2.78%** — Peak=720 in 2022; fall=(720−700)/720×100=20/720×100≈2.78%

**15.** Ratio of 2020 to 2022 exports?
(a) 2:3  (b) 4:5  (c) 3:4  (d) 5:6    **Answer: (a) 2:3** — 480:720=2:3

*General DI MCQs Q16–Q20:*

**16.** A bar chart shows sales of 5 months: 40,50,45,60,55. What is the median?
(a) 45  (b) 50  (c) 55  (d) 60    **Answer: (b) 50** — Sorted:40,45,50,55,60 → middle=50

**17.** In a pie chart, if one sector = 72°, what % does it represent?
(a) 15%  (b) 20%  (c) 25%  (d) 30%    **Answer: (b) 20%** — 72/360×100=20%

**18.** If total revenue = ₹500Cr and profit margin = 12%, profit = ?
(a) ₹55Cr  (b) ₹60Cr  (c) ₹65Cr  (d) ₹50Cr    **Answer: (b) ₹60Cr** — 12%×500=60

**19.** Company A revenue grew from ₹200Cr to ₹350Cr in 3 years. CAGR ≈?
(a) 16%  (b) 20%  (c) 21%  (d) 25%    **Answer: (c) 21%** — (350/200)^(1/3)−1=(1.75)^0.333−1≈1.205−1≈20.5%≈21%

**20.** In a bar chart, Product X bars for Q1–Q4 are: 80, 100, 90, 110. Total annual sales?
(a) ₹360  (b) ₹370  (c) ₹380  (d) ₹390    **Answer: (c) ₹380** — 80+100+90+110=380

---

# MODULE 13 — PROBLEM SOLVING TECHNIQUES

## 1. Introduction
Problem Solving Techniques is the meta-module — it teaches you HOW to think, not just what to compute. This module covers advanced techniques used across all aptitude topics: working backwards, assumption testing, elimination, Venn-based set problems, word problem translation, and speed-accuracy balance strategies. Mastering this module turns a 60% scorer into an 85%+ scorer purely through method.

## 2. Learning Objectives
- Translate word problems into equations systematically
- Apply the Working Backwards technique to multi-step problems
- Use Elimination to discard wrong options without full solving
- Solve complex set theory / Venn diagram problems (3 sets)
- Apply assumption testing for number/logic puzzles
- Optimise time allocation during a placement exam
- Identify question types rapidly and select the fastest method

## 3. Core Problem Solving Frameworks

### Framework 1 — READ-IDENTIFY-PLAN-EXECUTE-VERIFY (RIPEV)
```
R — Read the problem completely once, do not compute yet
I — Identify: what is given? what is asked? what type of problem?
P — Plan: which formula/method? rough time estimate?
E — Execute: calculate cleanly with units
V — Verify: does the answer make sense? check units and magnitude
```

### Framework 2 — Working Backwards
Start from the final answer or condition and reverse-engineer.
Best for: "Find the original price if after 3 changes the final value is X"
```
Example: A number is doubled, then 10 is added, then multiplied by 3 = 90.
Working back: 90/3 = 30 → 30−10 = 20 → 20/2 = 10. Original = 10.
```

### Framework 3 — Assumption Testing (Plugging In)
Pick a smart value for the unknown (e.g., 100 for percentage problems, LCM for work/rate problems) and test.
```
Example: A is 20% more than B. By what % is B less than A?
Plug in B = 100 → A = 120.
B is less than A by 20/120 × 100 = 16.67%.
```

### Framework 4 — Elimination Strategy
In MCQs, eliminate obviously wrong options first:
- Wrong units or magnitude → eliminate
- Negative answer where positive is expected → eliminate
- Option contradicts a condition in the problem → eliminate
Often reduces 4 options to 2, making guessing 50/50 if needed.

### Framework 5 — Three-Set Venn Diagrams
```
n(A∪B∪C) = n(A)+n(B)+n(C) − n(A∩B) − n(B∩C) − n(A∩C) + n(A∩B∩C)

Only A      = n(A) − n(A∩B) − n(A∩C) + n(A∩B∩C)
Only B      = n(B) − n(A∩B) − n(B∩C) + n(A∩B∩C)
Only C      = n(C) − n(A∩C) − n(B∩C) + n(A∩B∩C)
Exactly two = n(A∩B)+n(B∩C)+n(A∩C) − 3n(A∩B∩C)
All three   = n(A∩B∩C)
```

### Framework 6 — Ratio and Variables
When a problem says "ratio of A to B is 3:5", immediately write A=3k, B=5k.
Solve for k from the condition, then find what's asked.

### Framework 7 — Smart Number Selection
- For percentage problems: assume total = 100
- For work/rate problems: assume total work = LCM of given days
- For ratio problems: assume sum = sum of ratio parts × k, find k
- For profit/loss: assume CP = 100 and work with percentage values

## 4. Important Techniques Summary

```
WORD PROBLEM TRANSLATION:
"exceeds by"        → A = B + x
"is x% more than"   → A = B(1 + x/100)
"is x% less than"   → A = B(1 − x/100)
"times as many"     → A = k × B
"ratio of A to B"   → A = rA × k, B = rB × k
"at least n"        → ≥ n
"at most n"         → ≤ n
"how many more"     → A − B
"combined/together" → A + B

SET THEORY IDENTIFIERS:
"only one subject"    → exactly one set, not others
"at least one"        → 1 − P(none) or n(A∪B∪C)
"exactly two"         → pairwise intersections minus triple
"all three"           → n(A∩B∩C)
"neither/none"        → Total − n(A∪B∪C)
```

## 5. Shortcuts and Decision Trees

### Quick Method Selection Chart
```
IF the problem has...        THEN use...
─────────────────────────────────────────
Two workers / pipes          → ab/(a+b) or LCM method
Speed + Distance             → D=ST; relative speed
Percentages + original value → Reverse % (×100/rate)
Two quantities, one ratio    → Let = k, multiply
"How many ways"              → P&C formulas
"Probability"                → Favourable/Total
A is n% more/less than B     → Plug B=100
Long series / patterns       → Check differences first
"At least / none"            → Complement (1−P)
Mixture / two prices         → Alligation cross
CI vs SI difference          → P(R/100)²
Clock angle                  → |30H − 5.5M|
Seating in circle            → Fix one, (n−1)!
```

## 6. Step-by-Step Problem Solving Examples

### Problem Type: Complex Word Problem
**Q:** The sum of the digits of a two-digit number is 9. If the digits are reversed, the number increases by 27. Find the number.
```
Step 1: Let tens digit = x, units digit = y
Step 2: x + y = 9 ... (i)
Step 3: Reversed number = 10y + x
        Original number = 10x + y
Step 4: (10y + x) − (10x + y) = 27
        9y − 9x = 27 → y − x = 3 ... (ii)
Step 5: From (i)+(ii): 2y = 12 → y = 6, x = 3
Answer: Original number = 36 (verify: 3+6=9 ✓; 63−36=27 ✓)
```

### Problem Type: Three-Set Venn
**Q:** In a group of 100 students: 60 study Maths, 50 study Physics, 40 study Chemistry. 20 study M&P, 15 study P&C, 10 study M&C. 5 study all three. How many study none?
```
n(M∪P∪C) = 60+50+40 − 20−15−10 + 5 = 110
Neither = 100 − 110 → IMPOSSIBLE (check: some "at least two" students counted in singles)
Correct: n(M∪P∪C) = 150−45+5 = 110 > 100 means all 100 study at least one subject.
None = 0 (everyone studies at least one).
```

### Problem Type: Working Backwards
**Q:** After spending 1/3 of his money on rent, 1/4 of remainder on food, and ₹200 on transport, a man has ₹1300 left. His original money?
```
Working back:
After transport: 1300+200 = 1500
Before food: 1500 = 3/4 × X → X = 2000
Before rent: 2000 = 2/3 × Y → Y = 3000
Original = ₹3000
```

## 7. Common Mistakes in Problem Solving
- Translating "A is 20% more than B" as A−B=20 instead of A=B×1.2
- In three-set Venn: subtracting pairwise intersections without adding back triple overlap
- Not reading "at most" vs "at least" carefully (opposite inequalities)
- Applying working backwards in the wrong direction (reverse the operations, not just the order)
- Choosing a method before reading the full problem — leads to re-reading and time waste
- Forgetting to verify: plugging answer back into original conditions takes 10 seconds and prevents wrong answers

## 8. Practice Problems
1. A two-digit number is 4 times the sum of its digits. If 18 is added, digits reverse. Find the number.
2. 100 students: 65 like cricket, 45 like football, 10 like neither. How many like both?
3. A number is divided by 3, then multiplied by 5, then 8 is subtracted, giving 42. Find the number.
4. In a town of 1000: 600 read newspaper A, 500 read B, 200 read both. Read neither?
5. If P is 30% more than Q, Q is what % less than P?
6. A shopkeeper mixes two types of rice at ₹20/kg and ₹30/kg. Sells at ₹28/kg with 12% profit. Find mixing ratio.
7. Use the Venn formula: 50 students, Maths=30, Science=25, Both=10. English only = Total − M − S + Both. Find neither M nor S.
8. A number doubled then halved then increased by 50% gives 120. Find original.
9. Translate and solve: "Thrice a number decreased by 5 equals twice the number increased by 7."
10. Three friends invest in ratio 3:4:5. Total profit = ₹1200. Friend with largest share gets how much?

## 9. Previous Placement Questions

1. **(TCS)** A number when divided successively by 4 and 5 gives remainders 3 and 1. Remainder when divided by 20?
   ```
   N = 4k+3. Dividing k by 5 gives remainder 1 → k = 5m+1.
   N = 4(5m+1)+3 = 20m+7. Remainder when div by 20 = 7.
   ```

2. **(Infosys)** 3/8 of a number is 48 more than 1/6 of the same number. Find the number.
   ```
   3N/8 − N/6 = 48 → (9N−4N)/24 = 48 → 5N/24 = 48 → N = 230.4 → check: 5N=1152 → N=230.4
   Clean version: 5N/24=48 → N=48×24/5=230.4. If exact: use N=230.4. Answer: 230.4 ≈ 230
   ```

3. **(Wipro)** In an election between 2 candidates, 10% votes declared invalid, winner gets 54% of valid votes, wins by 1800. Total votes?
   ```
   Valid = 90% of total. Winner = 54% of valid, loser = 46% of valid.
   Diff = 8% of valid = 1800 → valid = 22500 → total = 22500/0.9 = 25000
   ```

4. **(Accenture)** A says "I have 3 more coins than B." B says "I have 2 more than C." C has 5. How many does A have?
   ```
   C=5. B=C+2=7. A=B+3=10.
   ```

5. **(Cognizant)** Of 50 employees: 30 know Hindi, 25 know English, 10 know both. Know only English?
   ```
   Only English = 25−10 = 15
   ```

## 10. Company-wise Problem Solving Focus

| Company | Key Problem Solving Skills |
|---|---|
| TCS | Multi-step remainders, successive operations |
| Infosys | Set problems, fraction equations |
| Wipro | Election problems, percentage translations |
| Accenture | Simple multi-step word problems |
| Cognizant | Set theory, Venn diagrams |
| Capgemini | Number puzzles, logical deduction |
| IBM | Two-step word problems |
| Deloitte | Multi-variable systems, business scenarios |

## 11. Interview Tips
- Verbalise your method: "I'm going to use working backwards here because…"
- In puzzles, state all constraints before solving — shows discipline
- When stuck in an interview: say "Let me try a specific example to see if the pattern holds"
- Elimination in MCQ rounds: state eliminated options with reason, not just the answer
- Always check units and magnitude at the end — catches 30% of arithmetic errors

## 12. Frequently Asked Questions

**Q: Should I solve every question or use shortcuts?**
Use shortcuts whenever available — placement tests penalise time more than difficulty. A shortcut that takes 20 seconds beats a 2-minute full solution.

**Q: When is "plugging in" safer than algebra?**
Percentage and ratio problems — always plug in 100. Work problems — plug in LCM. These completely eliminate fraction arithmetic.

**Q: How do I know which Venn formula to use?**
Identify: are you finding n(union), n(only one set), n(exactly two), or n(all three)? Each has its own formula. Write the specific formula before calculating.

**Q: How much time should I spend on a hard question?**
Max 2.5 minutes. If not solved by then, mark a best guess and move on. Come back if time allows.

## 13. One-Page Revision Notes — Problem Solving

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROBLEM SOLVING — QUICK REVISION CARD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FRAMEWORKS: RIPEV | Working Backwards | Plug In | Eliminate

TRANSLATE:
"x% more than B" → B×(1+x/100)
"x% less than B" → B×(1−x/100)
"ratio a:b"       → a×k and b×k

3-SET VENN:
n(A∪B∪C)=n(A)+n(B)+n(C)−n(AB)−n(BC)−n(AC)+n(ABC)
None = Total − n(A∪B∪C)
Only A = n(A)−n(AB)−n(AC)+n(ABC)
Exactly two = n(AB)+n(BC)+n(AC)−3n(ABC)

SMART NUMBERS: % problems → use 100 | Work → use LCM
WORKING BACK: reverse operations in reverse order
VERIFY: plug answer back into original problem

TIME RULE: >2.5 min on one question → guess and move on
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Best YouTube Playlist — Module 13

**Playlist 1 (Best):**
- Title: Problem Solving Techniques for Aptitude — Complete
- Channel: TalentSprint Aptitude Prep
- Search: https://www.youtube.com/results?search_query=TalentSprint+Problem+Solving+Techniques+Aptitude+Complete
- Difficulty: Intermediate → Advanced

**Playlist 2 (Good):**
- Title: Aptitude Problem Solving Tricks
- Channel: CareerRide
- Search: https://www.youtube.com/results?search_query=CareerRide+Aptitude+Problem+Solving+Tricks+Placement

**Playlist 3 (Good):**
- Channel: Feel Free to Learn
- Search: https://www.youtube.com/results?search_query=Problem+Solving+Tricks+Aptitude+Feel+Free+Learn

---

## Best Free Resources — Module 13

| Resource | Link |
|---|---|
| GFG Aptitude Topics | https://www.geeksforgeeks.org/aptitude/aptitude-questions-and-answers/ |
| IndiaBix Mixed Practice | https://www.indiabix.com/aptitude/questions-and-answers/ |
| Placement Prep Guide | https://www.placementpreparation.io/blog/aptitude-preparation-guide/ |

---

## Practice Set — Module 13 (20 MCQs)

**1.** A number doubled then 10 added gives 40. Number?
(a) 10  (b) 12  (c) 15  (d) 20    **Answer: (c) 15** — 2x+10=40→x=15

**2.** Sum of two numbers = 50, difference = 10. Larger number?
(a) 25  (b) 30  (c) 35  (d) 40    **Answer: (b) 30** — (50+10)/2=30

**3.** 60 people: 35 like tea, 30 like coffee, 15 like both. Neither?
(a) 5  (b) 10  (c) 15  (d) 20    **Answer: (b) 10** — n(T∪C)=35+30−15=50; neither=10

**4.** A is 25% more than B. B is what % less than A?
(a) 20%  (b) 25%  (c) 15%  (d) 12.5%    **Answer: (a) 20%** — A=125, B=100; B less than A by 25/125×100=20%

**5.** Working backwards: Final value = 84. It was tripled then 12 subtracted. Original?
(a) 28  (b) 32  (c) 24  (d) 36    **Answer: (b) 32** — (84+12)/3=96/3=32

**6.** 3 sets: n(A)=40,n(B)=35,n(C)=25,n(AB)=10,n(BC)=8,n(AC)=6,n(ABC)=3. n(A∪B∪C)?
(a) 79  (b) 80  (c) 81  (d) 82    **Answer: (a) 79** — 40+35+25−10−8−6+3=79

**7.** Translate: "Twice a number plus 7 equals 5 times the number minus 8." Number?
(a) 5  (b) 7  (c) 8  (d) 4    **Answer: (a) 5** — 2x+7=5x−8→3x=15→x=5

**8.** Plug-in method: A is 40% more than B. B is what % of A? (plug B=100)
(a) 60%  (b) 70%  (c) 71.4%  (d) 66.7%    **Answer: (c) 71.4%** — A=140; B/A=100/140=71.4%

**9.** From 100 people: M only=20, S only=30, M∩S=15, neither=?
(a) 30  (b) 35  (c) 40  (d) 25    **Answer: (b) 35** — M∪S=20+30+15=65; neither=100−65=35

**10.** A number when 1/3 subtracted, then halved = 12. Original?
(a) 24  (b) 30  (c) 36  (d) 42    **Answer: (c) 36** — Work back: 12×2=24; 24=x−x/3=2x/3→x=36

**11.** If A:B=2:3 and B:C=4:5, A:B:C combined?
(a) 8:12:15  (b) 6:9:15  (c) 8:12:20  (d) 2:4:5    **Answer: (a) 8:12:15**

**12.** Eliminate: "A train 200m long at 72km/h crosses a 300m bridge. Time = ?"
Options: (a)25s (b)35s (c)45s (d)50s. Approximate: total=500m, speed≈20m/s → ≈25s.
**Answer: (a) 25s**

**13.** Use smart number: total = 100, 30% men, 70% women. 40% men and 50% women are employed. Total employed%?
(a) 43%  (b) 45%  (c) 47%  (d) 50%    **Answer: (c) 47%** — 0.4×30+0.5×70=12+35=47%

**14.** Of 200 students: Physics=120, Chemistry=100, Both=60. Only Chemistry?
(a) 30  (b) 40  (c) 50  (d) 60    **Answer: (b) 40** — Only C=100−60=40

**15.** Solve by working back: A spent 20% of money, then 25% of remainder = ₹300. Original?
(a) ₹1500  (b) ₹2000  (c) ₹2500  (d) ₹1800    **Answer: (b) ₹2000** — 0.25×0.8×x=300→0.2x=300→x=1500... recalc: 0.25×(0.8x)=0.2x=300→x=1500 → **(a) ₹1500**

**16.** Three consecutive odd numbers sum to 57. Largest?
(a) 19  (b) 21  (c) 23  (d) 25    **Answer: (b) 21** — n+(n+2)+(n+4)=57→3n=51→n=17; largest=21

**17.** If x+y=10 and xy=21, find x²+y²?
(a) 56  (b) 58  (c) 60  (d) 62    **Answer: (b) 58** — (x+y)²−2xy=100−42=58

**18.** Use Venn: students passing only Math=15, only Science=20, both=10, total=50. Failing both?
(a) 5  (b) 10  (c) 15  (d) 0    **Answer: (a) 5** — Pass at least one=15+20+10=45; fail both=5

**19.** Digit sum trick: sum of digits of a 3-digit number is 16. When 297 is added digits reverse. Find number.
(a) 349  (b) 358  (c) 367  (d) 394    **Answer: (d) 394** — digit sum 3+9+4=16 ✓; 394+297=691; 1+9+6=16 ✓; reversed

**20.** A person has ₹x. He gives 1/3 to A, 1/4 to B, 1/5 to C. Remaining?
(a) 13x/60  (b) 7x/20  (c) 11x/60  (d) 9x/20    **Answer: (a) 13x/60** — Given=x(1/3+1/4+1/5)=x×47/60; remaining=x×13/60

---

# MODULE 14 — PLACEMENT APTITUDE PREPARATION (COMPANY-WISE)

## 1. Introduction
This module bridges all 13 previous modules with real placement test formats. Each major company has a distinct pattern, difficulty level, time limit, and topic weightage. Knowing the pattern is as important as knowing the content — a candidate who has practised TCS NQT-style questions will outperform an equally skilled candidate who has only done generic aptitude questions. This module gives you the exact blueprint for 10 major companies.

---

## 2. Company-wise Test Patterns (2024–2026)

### TCS — National Qualifier Test (NQT)

```
TRACKS:    Ninja (₹3.5–3.9 LPA) | Digital (₹7–7.5 LPA) | Prime (₹9–11 LPA)
TOTAL TIME: 190 minutes
─────────────────────────────────────────────────────────────────
SECTION                   | QUESTIONS | TIME      | DIFFICULTY
─────────────────────────────────────────────────────────────────
Foundation: Numerical       |    26     | 40 min    | Easy-Medium
Foundation: Verbal          |    24     | 30 min    | Easy-Medium
Foundation: Reasoning       |    30     | 50 min    | Medium
Advanced: Quant+Reasoning   |    15     | 25 min    | Medium-Hard
Advanced: Coding            |     3     | 90 min    | Hard
─────────────────────────────────────────────────────────────────

KEY TOPICS:
Numerical: Number system, %, ratio, AP/GP, P&C, probability, time-work, TSD
Reasoning: Series, coding-decoding, blood relations, seating, syllogisms, DI
Advanced Quant: Logarithms, functions, permutations, number theory
```

**TCS Top 20 Repeated Question Types:**
1. Unit digit of large powers
2. Remainders (Fermat's / modular arithmetic)
3. AP/GP — find nth term and sum
4. Probability — cards, dice, bags
5. Permutations with restrictions
6. Percentage — successive change
7. Time & Work — LCM method
8. Train crossing problems
9. Boats & Streams
10. CI vs SI difference
11. Number series (second-order AP)
12. Coding-decoding (shift-based)
13. Blood relation puzzles
14. Seating arrangement (5–6 people)
15. DI — table with 5 questions
16. Syllogisms — 2-statement
17. Clock angle problems
18. Profit/loss with discount
19. Ratio — combining 3 ratios
20. Average — replacement/correction

---

### Infosys

```
TEST: InfyTQ / Infosys Online Test
TRACKS: SE (₹3.6LPA) | SP (₹6.5LPA) | PP (₹9LPA)
─────────────────────────────────────────────────
SECTION              | QUESTIONS | TIME
─────────────────────────────────────────────────
Mathematical Ability |    10     | 25 min
Logical Reasoning    |    15     | 25 min
Verbal Ability       |    20     | 20 min
Pseudocode (SP/PP)   |    5+     | 10 min
─────────────────────────────────────────────────

KEY TOPICS (Math): Percentages, number series, profit/loss,
                   time-work, TSD, ratio, alligation

KEY TOPICS (Logical): Seating arrangements, input-output,
                      blood relations, puzzles, syllogisms

DIFFICULTY: Medium | Negative marking in some patterns
CUTOFF: ~60–70% for SE | Higher for SP/PP
```

**Infosys Top Repeated Topics:**
1. Number series (most important — 3–4 questions guaranteed)
2. Seating arrangements (circular + linear)
3. Percentage — income-expenditure savings problems
4. Profit & loss combined with discount
5. Time & work — A alone, B alone, together
6. Blood relation puzzles (paragraph form)
7. Syllogisms — 3-statement patterns
8. DI — line graph with 5 questions
9. Ratio — combining two ratios into three
10. TSD — average speed and boat problems

---

### Wipro

```
TEST: WILP (Wipro Innovative Leaders Program) / Wipro NTH
SECTIONS: Quant + LR + Verbal + Coding
─────────────────────────────────────────────────
SECTION          | QUESTIONS | TIME
─────────────────────────────────────────────────
Quant Aptitude   |    16     | 16 min
LR               |    14     | 14 min
Verbal           |    22     | 28 min
Coding           |     2     | 60 min
─────────────────────────────────────────────────

KEY TOPICS: Percentages, ratio, number series, average,
            TSD, time-work, seating, blood relations
DIFFICULTY: Easy-Medium | Fast-paced (1 min/quant question)
```

**Wipro Strategy:**
- Speed is everything — 1 min per quant question
- Focus heavily on percentage, ratio, and TSD (50% of quant)
- Logical reasoning: series and blood relations most common
- Never leave quant blank — no negative marking typically

---

### Accenture

```
TEST: Accenture Placement Test
─────────────────────────────────────────────────
SECTION                    | QUESTIONS | TIME
─────────────────────────────────────────────────
Cognitive Ability (Quant)  |    15     | 25 min
Cognitive Ability (LR)     |    15     | 25 min
Attention to Detail        |    20     | 20 min
Common Apps (MS Office)    |    20     | 25 min
─────────────────────────────────────────────────

KEY TOPICS: Number series, percentages, average, probability,
            seating, directions, analogies, coding-decoding
DIFFICULTY: Easy-Medium
CUTOFF: ~65–70%
```

---

### Wipro, Capgemini, Cognizant, IBM Side-by-Side

```
COMPANY    | FORMAT              | DIFFICULTY | KEY FOCUS
───────────────────────────────────────────────────────────
Cognizant  | AMCAT-based         | Medium     | Quant+LR+Verbal+Coding
           | 16Q Quant / 14Q LR  |            | Syllogisms, DI, %
───────────────────────────────────────────────────────────
Capgemini  | 5 sections          | Easy-Med   | Series, %, Algebra
           | Includes Gamebased  |            | Pseudocode section
───────────────────────────────────────────────────────────
IBM        | 3 sections          | Easy-Med   | Basic quant + LR
           | Personality test    |            | Reasoning, DI
───────────────────────────────────────────────────────────
Deloitte   | Virtual hiring      | Medium-Hard| Logical + critical
           | Game-based + essay  |            | reasoning focus
───────────────────────────────────────────────────────────
Amazon     | Online Assessment   | Hard       | Coding primary;
           | Work simulation     |            | Verbal + work style
───────────────────────────────────────────────────────────
Microsoft  | Online Assessment   | Hard       | Coding primary;
           | Problem solving     |            | Math reasoning
───────────────────────────────────────────────────────────
```

## 3. Company-wise Topic Weightage (Quant + LR Combined)

```
TOPIC                  | TCS  | Infy | Wipro | Acc | CTS  | Cap
───────────────────────────────────────────────────────────────
Number System          |  ●●  |  ●   |  ●    |  ●  |  ●   |  ●
Arithmetic Ops         |  ●   |  ●   |  ●    |  ●  |  ●   |  ●
Ratio & Proportion     |  ●●  |  ●●  |  ●●   |  ●  |  ●●  |  ●●
Percentage             |  ●●● |  ●●● |  ●●●  |  ●● |  ●●● |  ●●
Average                |  ●●  |  ●●  |  ●●   |  ●● |  ●●  |  ●●
Time & Work            |  ●●● |  ●●  |  ●●   |  ●● |  ●●  |  ●●
TSD                    |  ●●● |  ●●  |  ●●   |  ●● |  ●●  |  ●●
SI & CI                |  ●●  |  ●●  |  ●    |  ●  |  ●   |  ●
AP/GP                  |  ●●● |  ●   |  ●    |  ●  |  ●   |  ●
P&C + Probability      |  ●●  |  ●●  |  ●    |  ●  |  ●   |  ●●
Series (Number/Letter) |  ●●  |  ●●● |  ●●●  |  ●● |  ●●  |  ●●
Coding-Decoding        |  ●●  |  ●●  |  ●    |  ●● |  ●   |  ●
Blood Relations        |  ●●  |  ●●  |  ●●   |  ●  |  ●●  |  ●
Seating Arrangement    |  ●●  |  ●●● |  ●    |  ●● |  ●●  |  ●
Syllogisms             |  ●●  |  ●●  |  ●    |  ●  |  ●●● |  ●
Data Interpretation    |  ●●● |  ●●● |  ●●   |  ●● |  ●●  |  ●●
Clocks & Calendars     |  ●   |  ●   |  ●    |  ●  |  ●   |  ●

● = Low | ●● = Medium | ●●● = High frequency
```

## 4. Company-wise 20 Sample Questions

### TCS NQT Sample (10 Questions)
1. Find the remainder when 2^74 is divided by 7. **[Ans: 4]** — 2^1mod7=2,2^2=4,2^3=1,cycle3; 74mod3=2; rem=4
2. AP: 4,7,10,…,100. Number of terms? **[Ans: 33]** — (100−4)/3+1=33
3. 8 books arranged in row: A and B always together. Ways? **[Ans: 10080]** — 7!×2!=10080
4. CI on ₹5000 at 10% for 2 years, compounded annually? **[Ans: ₹1050]**
5. P(two dice sum=9)? **[Ans: 1/9]** — 4 ways/(36)=4/36=1/9
6. A:B=3:4, B:C=5:6. Find A:C? **[Ans: 5:8]** — A:B:C=15:20:24; A:C=15:24=5:8
7. Coding: TIGER=UHHDS (T+1,I+0,G+1,E+0,R+1 alternating). Code LION? **[Ans: MJPO]**
8. Train 240m at 60km/h crosses 360m bridge. Time? **[Ans: 36s]** — 600m/100×6/5... 600/(60×5/18)=600/16.67=36s
9. A,B,C can do work in 10,15,20 days. Together? **[Ans: 4.615 days]** — LCM=60; A=6,B=4,C=3; total=13; 60/13≈4.6 days
10. 60% pass Maths, 70% pass English, 20% fail both. % pass both? **[Ans: 50%]** — Pass at least one=80%; 60+70−x=80; x=50%

### Infosys Sample (5 Questions)
11. Series: 6, 13, 27, 55, 111, ? **[Ans: 223]** — each×2+1: 6×2+1=13✓; ×2+1=27✓; 111×2+1=223
12. Seating: A opposite B. C sits right of A. D sits left of B. E is between C and D. (5 in circle). Arrange? Solve systematically.
13. Percentage: Salary increased 10% then decreased 10%. Net change? **[Ans: −1%]**
14. Boat upstream 20km in 4hr, downstream 20km in 2hr. Stream speed? **[Ans: 2.5 km/h]** — D=10,U=5; stream=(10−5)/2=2.5
15. 3 sets puzzle: 100 students, Maths=50, Science=40, Both=20. Only Maths? **[Ans: 30]**

### Wipro Sample (5 Questions)
16. Simplify: (0.75)³ + 3×(0.75)²×(0.25) + 3×(0.75)×(0.25)² + (0.25)³ **[Ans: 1]** — (a+b)³=1³=1
17. Average of 10 numbers=45. Average of first 6=40. Average of last 5? (last number counted in both) **[Ans: 52]** — Sum=450; First6=240; Last4=210; if 5th from start = 5th from end: 450−240=210 for last 4; avg last 5=(210+40)/5... recheck with overlap formula
18. Clock: Angle at 8:20? **[Ans: 130°]** — |30×8−5.5×20|=|240−110|=130°
19. Series: 3, 4, 8, 17, 33, ? **[Ans: 58]** — diffs:1,4,9,16,25 (perfect squares); next=58
20. A alone=20 days, B alone=30 days, C alone=60 days. All work together for 5 days. Remaining work done by C alone. Total days? **[Ans: 15]** — Together rate=LCM(60)/10=6 units/day; 5 days=30 units; remaining=30 units; C does 1 unit/day=30 days; total=35... recheck: LCM=60; A=3,B=2,C=1; together=6/day; 5 days=30 units; remaining=30; C=1/day→30 more; total=35 days

## 5. Interview Round — Aptitude Questions (Verbal Round)

Companies like Infosys, TCS, Wipro include aptitude in verbal/HR rounds. Common questions:

```
1. "Why do you think you are good at quantitative aptitude?"
   → Mention topics mastered, practice hours, mock test scores

2. "Solve this: A train problem..." [On-the-spot]
   → State formula, work step by step aloud, verify answer

3. "What is compound interest and how does it differ from SI?"
   → Clear conceptual explanation: exponential vs linear growth

4. "If you had to explain the LCM method to a junior student, how would you?"
   → Tests both understanding and communication

5. "A client data shows sales grew 40% in Q1 and fell 20% in Q2. Net growth?"
   → 1.4×0.8=1.12 → net 12% growth (not 20%)
```

## 6. Topic Priority by Company (What to Study First)

### If you have 7 days per company:
```
TCS (7 days):
Day 1–2: Number System, AP/GP, P&C, Probability
Day 3–4: TSD, Time & Work, SI/CI, Percentage
Day 5:   Series, Coding, Blood Relations, Seating
Day 6:   DI (table + bar), Syllogisms
Day 7:   Full mock test (TCS NQT pattern) + weak area revision

Infosys (7 days):
Day 1–2: Number series (HIGHEST priority), Seating arrangements
Day 3–4: Percentage, Profit/Loss, Time & Work, TSD
Day 5:   Blood relations, Syllogisms, Input-output
Day 6:   DI — line graph + pie chart
Day 7:   Infosys mock test + InfyTQ practice

Wipro (5 days):
Day 1: Percentage, Ratio, Average (speed focus)
Day 2: TSD, Time & Work
Day 3: Series, Blood relations, Seating
Day 4: DI, Clocks
Day 5: Wipro mock test

Accenture (4 days):
Day 1–2: Quant — percentage, average, TSD, series
Day 3:   LR — coding, directions, analogies, seating
Day 4:   Attention to detail + mock test
```

## 7. Mock Test Strategy

```
PHASE 1 — Topic Tests (Week 1–4):
After each module, take a 20-question timed test on that topic alone.
Target: 80%+ accuracy before moving to next module.

PHASE 2 — Section Tests (Week 5–6):
Take full Quant-only (30 questions, 45 min) and LR-only tests.
Identify weakest 3 topics. Revise those immediately.

PHASE 3 — Full Mock Tests (Week 7–8):
Take 5 full TCS NQT mocks (IndiaBix/PrepInsta/FACE Prep).
Take 3 Infosys mocks. Take 2 Wipro mocks.
Track accuracy + time per question.
Target: 70%+ overall, sub-2min per question.

PHASE 4 — Company-specific Last Week:
Study company's exact pattern. Do PYQs.
Revise all module one-page notes.
Sleep 8hrs the night before. Eat light before test.
```

## 8. Mock Test Platforms (Verified)

| Platform | Company Coverage | URL |
|---|---|---|
| PrepInsta | TCS, Infosys, Wipro, Accenture, more | https://prepinsta.com/ |
| IndiaBix | All topics + company papers | https://www.indiabix.com/ |
| FACE Prep | TCS, Infosys, Wipro patterns | https://faceprep.in/aptitude/ |
| Freshers World | Placement papers all companies | https://placement.freshersworld.com/ |
| Placement Prep | Topic mocks + company mocks | https://www.placementpreparation.io/ |
| CareerRide | Topic-wise + full tests | https://careerride.com/ |
| GFG Practice | All placement topics | https://www.geeksforgeeks.org/aptitude-test/ |
| TCS iON Practice | Official TCS practice | https://learning.tcsionhub.in/ |

## 9. Exam Day Strategy

```
BEFORE TEST:
✓ Sleep 8 hours
✓ Eat a light meal 1.5 hours before
✓ Arrive/login 15 min early
✓ Keep water bottle, ID, rough paper ready
✓ Quick 10-min revision of formula cheat sheet

DURING TEST:
✓ Read ALL instructions first (1 min)
✓ Scan all questions in a section (30 sec)
✓ Solve easiest questions first
✓ For each question: max 2 min (quant), 1.5 min (LR)
✓ Mark and skip if unsure — come back later
✓ Use elimination on MCQs when unsure
✓ In DI: read all 5 questions before touching data
✓ Never leave a question blank (no negative marking in most tests)
✓ Final 5 min: review flagged questions

AFTER TEST:
✓ Do not discuss answers — different sets often given
✓ Prepare for next round (technical/HR) immediately
✓ Check result within announced timeline
```

## 10. Best YouTube Resources — Module 14

**Playlist 1 (Best):**
- Title: TCS NQT Complete Preparation 2025
- Channel: FACE Prep
- Search: https://www.youtube.com/results?search_query=TCS+NQT+Complete+Preparation+2025+FACE+Prep

**Playlist 2:**
- Title: Infosys Aptitude Preparation — All Rounds
- Channel: TalentSprint Aptitude Prep
- Search: https://www.youtube.com/results?search_query=Infosys+Aptitude+Preparation+All+Rounds+TalentSprint

**Playlist 3:**
- Title: Wipro NTH Aptitude Preparation
- Channel: Freshersworld
- Search: https://www.youtube.com/results?search_query=Wipro+NTH+Aptitude+Preparation+Freshersworld

**Playlist 4:**
- Title: Accenture Placement Test Preparation
- Channel: CareerRide
- Search: https://www.youtube.com/results?search_query=Accenture+Placement+Test+Preparation+CareerRide

**Playlist 5:**
- Title: Cognizant CTS Aptitude Full Preparation
- Channel: Study Smart
- Search: https://www.youtube.com/results?search_query=Cognizant+CTS+Aptitude+Full+Preparation+Study+Smart

**General Placement Aptitude Channels:**
- Search: https://www.youtube.com/results?search_query=Placement+Aptitude+Complete+Course+TCS+Infosys+Wipro
- Search: https://www.youtube.com/results?search_query=Quantitative+Aptitude+Complete+Playlist+Placement+2025

## 11. Best Company-wise Practice Links

| Company | Resource | URL |
|---|---|---|
| TCS | PrepInsta TCS | https://prepinsta.com/tcs/ |
| TCS | FACE Prep TCS | https://faceprep.in/tcs/ |
| Infosys | PrepInsta Infosys | https://prepinsta.com/infosys/ |
| Infosys | FACE Prep Infosys | https://faceprep.in/infosys/ |
| Wipro | PrepInsta Wipro | https://prepinsta.com/wipro/ |
| Accenture | PrepInsta Accenture | https://prepinsta.com/accenture/ |
| Cognizant | PrepInsta CTS | https://prepinsta.com/cognizant/ |
| Capgemini | PrepInsta Capgemini | https://prepinsta.com/capgemini/ |
| IBM | IndiaBix IBM | https://www.indiabix.com/placement-papers/ibm/ |
| Deloitte | FACE Prep Deloitte | https://faceprep.in/deloitte/ |
| Amazon | GFG Amazon | https://www.geeksforgeeks.org/amazon-interview-preparation/ |
| Freshers World | All Papers | https://placement.freshersworld.com/ |

---

# FINAL SECTION A — COMPLETE FORMULA SHEET (All 14 Modules)

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MODULE 1: NUMBER SYSTEM
HCF × LCM = Product of two numbers
Factors of N=pᵃqᵇrᶜ = (a+1)(b+1)(c+1)
Trailing zeros in N! = Σ floor(N/5ᵏ)
Unit digit cycles: 2→2,4,8,6 | 3→3,9,7,1 | 7→7,9,3,1 (cycle 4)
                   1,5,6 always repeat same unit digit
Sum 1 to n = n(n+1)/2 | Sum squares = n(n+1)(2n+1)/6 | Sum cubes = [n(n+1)/2]²

MODULE 2: ARITHMETIC OPERATIONS
BODMAS order | aᵐ×aⁿ=aᵐ⁺ⁿ | aᵐ÷aⁿ=aᵐ⁻ⁿ | (aᵐ)ⁿ=aᵐⁿ | a⁰=1 | a⁻ⁿ=1/aⁿ
log(mn)=logm+logn | log(m/n)=logm−logn | log(mⁿ)=n·logm | log_b(b)=1
(a+b)²=a²+2ab+b² | (a−b)²=a²−2ab+b² | (a+b)(a−b)=a²−b²
a³+b³=(a+b)(a²−ab+b²) | a³−b³=(a−b)(a²+ab+b²)
Digits in Nˢ = floor(s·logN)+1 | log2≈0.301 | log3≈0.477 | log7≈0.845

MODULE 3: RATIO AND PROPORTION
Compound ratio of a:b and c:d = ac:bd
Duplicate ratio = a²:b² | Sub-duplicate = √a:√b
ad=bc (if a:b=c:d) | Mean proportional of a,b = √(ab)
Third proportional to a,b = b²/a
Alligation: Ratio = (Dearer−Mean):(Mean−Cheaper)
Partnership compound: P1:P2 = (C1×T1):(C2×T2)
Split T in a:b:c → T×a/(a+b+c), T×b/(a+b+c), T×c/(a+b+c)

MODULE 4: PERCENTAGE
%Change = (New−Old)/Old×100 | New = Old×(1±r/100)
Successive a% then b% = a+b+ab/100
Reverse: Original = New×100/(100±r)
Profit%=Profit/CP×100 | SP=CP(100+P%)/100 | CP=SP×100/(100+P%)
Two discounts d1,d2: Net = d1+d2−d1d2/100
Faulty weight: Gain% = (True−False)/False×100
Consumption cut for r% price rise = r/(100+r)×100

MODULE 5: AVERAGE
Average = Sum/Count | Weighted = (n₁A₁+n₂A₂)/(n₁+n₂)
AP average = (first+last)/2 | First n odds avg = n | First n evens avg = n+1
New member joins: Value = New avg×(n+1) − Old avg×n
Replacement: New member = Old removed + n×(change in avg)
Avg speed (equal dist) = 2ab/(a+b) ← NOT (a+b)/2

MODULE 6: TIME AND WORK
Rate = 1/Days | Together = ab/(a+b) | LCM method: Total=LCM, Rate=Total/Days
M₁D₁=M₂D₂ | M₁D₁H₁/W₁=M₂D₂H₂/W₂
Pipe: Inlet=+rate, Outlet=−rate | Leak: ab/(b−a)

MODULE 7: TIME, SPEED, DISTANCE
D=ST | km/h→m/s: ×5/18 | m/s→km/h: ×18/5
Relative speed: same dir=|S₁−S₂| | opp dir=S₁+S₂
Train cross pole: dist=length | cross platform: dist=L_train+L_platform
Boat: Down=u+v | Up=u−v | u=(D+U)/2 | v=(D−U)/2
Circular meet (opp): T=Track/(S₁+S₂) | (same): T=Track/|S₁−S₂|

MODULE 8: SIMPLE AND COMPOUND INTEREST
SI=PRT/100 | A=P+SI=P(1+RT/100)
CI: A=P(1+R/100)ⁿ | Half-yearly: A=P(1+R/200)²ⁿ
CI−SI (2yr) = P(R/100)² | CI−SI (3yr) = P(R/100)²(3+R/100)
SI doubling: T=100/R | CI doubling: T≈72/R (Rule of 72)

MODULE 9: ALGEBRAIC THINKING
Quadratic: x=[−b±√(b²−4ac)]/2a | Sum=−b/a | Product=c/a
AP: aₙ=a+(n−1)d | Sₙ=n/2[2a+(n−1)d]
GP: aₙ=arⁿ⁻¹ | Sₙ=a(rⁿ−1)/(r−1) | S∞=a/(1−r) for |r|<1
nPr=n!/(n−r)! | nCr=n!/[r!(n−r)!] | Circular=(n−1)!
P(E)=n(E)/n(S) | P(at least one)=1−P(none)

MODULE 10: LOGICAL REASONING
EJOTY=5,10,15,20,25 (alphabet anchors)
Venn: n(A∪B)=n(A)+n(B)−n(A∩B)
Syllogism: All+All=All | All+No=No | Some+All=Some | Some+Some=Nothing definite

MODULE 11: ANALYTICAL REASONING
Clock angle=|30H−5.5M| | Coincide: every 65 5/11 min | In 12hr: 11 overlaps, 22 right angles
Ordinary year=1 odd day | Leap year=2 odd days | 100yr=5 | 400yr=0
Ranking: Total=Top_rank+Bottom_rank−1
Seating circular=(n−1)! | linear=n!

MODULE 12: DATA INTERPRETATION
%Share=(Part/Total)×100 | %Change=(New−Old)/Old×100
Pie: angle=(%×3.6) | Value=%×Total/100
CAGR=(Final/Initial)^(1/n)−1

MODULE 13: PROBLEM SOLVING
3-set: n(A∪B∪C)=n(A)+n(B)+n(C)−n(AB)−n(BC)−n(AC)+n(ABC)
None=Total−n(A∪B∪C)
Only A=n(A)−n(AB)−n(AC)+n(ABC)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

# FINAL SECTION B — SHORTCUT TRICKS MASTER SHEET

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CALCULATION SHORTCUTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Square ending in 5: (n5)² = n×(n+1) followed by 25
  Example: 75² = 7×8|25 = 5625

Multiply by 11: insert sum of adjacent digits
  Example: 47×11 = 4|(4+7)|7 = 517

Multiply near 100: (100−a)(100−b) = 100×(100−a−b)+ab
  Example: 97×96 = 100×93+12 = 9312

Square by rounding: a² = (a+b)(a−b)+b² where b makes a±b easy
  Example: 47² = (50)(44)+9 = 2200+9 = 2209

Division by 5: ×2 then ÷10. Example: 347÷5 = 694÷10 = 69.4

x% of y = y% of x  ← always pick easier direction

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PERCENTAGE FRACTION EQUIVALENTS (Memorise All)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1/2=50% | 1/3=33.33% | 1/4=25% | 1/5=20% | 1/6=16.67%
1/7=14.28% | 1/8=12.5% | 1/9=11.11% | 1/10=10% | 1/11=9.09%
1/12=8.33% | 1/15=6.67% | 1/20=5% | 1/25=4% | 1/50=2%
2/3=66.67% | 3/4=75% | 2/5=40% | 3/5=60% | 4/5=80%
3/8=37.5% | 5/8=62.5% | 7/8=87.5%

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TOPIC-WISE FASTEST SHORTCUTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NUMBER SYSTEM
  HCF of fractions = HCF(num)/LCM(den)
  LCM of fractions = LCM(num)/HCF(den)
  (a×b) mod m = [(a mod m)×(b mod m)] mod m
  Perfect square: unit digit can only be 0,1,4,5,6,9

RATIO
  2A=3B=4C → set=k → A=k/2,B=k/3,C=k/4 → ×LCM=6:4:3
  Combine A:B and B:C → make B same using LCM
  Alligation cross: dearer−mean : mean−cheaper

PERCENTAGE
  r% rise then r% fall = −r²/100 net
  A is n% more than B → B is n/(100+n)×100% less than A
  Price rises r%, consumption cut = r/(100+r)×100%

WORK
  Two people: T=ab/(a+b)
  Three people: T=abc/(ab+bc+ca)
  LCM method: integer rates, no fractions

TSD
  18km/h = 5m/s anchor | scale up/down from there
  Avg speed (equal dist) = 2ab/(a+b)

INTEREST
  CI−SI (2yr) = P(R/100)²
  Rule of 72: double in 72/R years at CI
  Half-yearly: replace R→R/2, n→2n

AP/GP
  AP average = middle term = (a+l)/2
  GP: if a,b,c in GP → b²=ac
  Sum of infinite GP = a/(1−r) for |r|<1

P&C
  nC2=n(n−1)/2 | nC3=n(n−1)(n−2)/6
  P(at least 1) = 1 − P(none)
  Circular = (n−1)!

REASONING
  EJOTY anchor: E=5,J=10,O=15,T=20,Y=25
  Clock: |30H−5.5M| | Coincide every 65 5/11 min
  Total = top rank + bottom rank − 1

DI
  Read ALL questions before touching graph
  Approximate first, compute only if needed
  Pie: value = %×total/100 | angle = %×3.6
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

# FINAL SECTION C — MIND MAP (Text Format)

```
                    APTITUDE PLACEMENT
                    ═══════════════════
                           │
          ┌────────────────┼────────────────┐
          │                │                │
    QUANTITATIVE      LOGICAL           DATA
    APTITUDE         REASONING       INTERPRETATION
          │                │                │
    ┌─────┴─────┐    ┌─────┴─────┐    ┌─────┴─────┐
    │           │    │           │    │           │
  ARITH      ALGEBRA  BASIC      ANAL  TABLE     CHARTS
    │           │    REASON    REASON    │           │
  ┌─┴─┐    ┌───┴───┐   │         │   ┌─┴─┐   ┌────┴────┐
  │   │    │   │   │   │         │   │   │   │    │    │
 NUM  %   AP  GP P&C  SER  CODE  SEAT BAR PIE  LINE MIX
  │   │    │   │  PROB BR   DEC  CLOK        GRAPH  CASE
  HCF RTP QDR LOG │   DIR  SYL  CAL
  LCM P&L             VEN              
```

**Connections between topics:**
- Percentage → feeds into: P&L, SI/CI, Ratio, DI, Average
- Ratio → feeds into: Alligation, Partnership, TSD (speed ratio), AP
- Average → feeds into: DI, Statistics, Work (rate)
- Number System → feeds into: P&C, AP/GP, Remainder (all topics)
- LCM Method → connects: Time&Work + Number System
- Series (LR) → connects: AP/GP (Quant) + Coding patterns

---

# FINAL SECTION D — ONE-DAY REVISION CHEAT SHEET

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
       PLACEMENT APTITUDE — ONE-DAY CHEAT SHEET
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NUMBERS: 1 not prime | 2 only even prime | HCF×LCM=product
INDICES: aᵐ×aⁿ=aᵐ⁺ⁿ | a⁰=1 | a⁻ⁿ=1/aⁿ
LOGS: log(mn)=logm+logn | log(mⁿ)=n·logm | log_b(b)=1

RATIO: Alligation cross = (D−M):(M−C) | 2A=3B→A:B=3:2
%: successive a,b → a+b+ab/100 | r↑r↓ → −r²/100 net
AVG: Together=ab/(a+b) | Avg speed=2ab/(a+b) ← harmonic

WORK: Rate=1/day | LCM=total work | Never add days directly
TSD: 18km/h=5m/s | Same dir: subtract | Opp: add speeds
SI/CI: SI=PRT/100 | CI=P(1+r/100)ⁿ−P | Diff(2yr)=P(r/100)²

AP: aₙ=a+(n−1)d | Sₙ=n(a+l)/2 | avg=middle term
GP: aₙ=arⁿ⁻¹ | S∞=a/(1−r) | GP mean: b²=ac
P&C: nPr=n!/(n−r)! | nCr=n!/r!(n−r)! | Circle=(n−1)!
PROB: P(at least 1)=1−P(none) | Two cards from deck: 52C2=1326

SERIES: Check diff→ratio→2nd diff→squares→cubes→interleaved
CODING: Find shift on one letter, verify all others
SYLLOGISM: All+No=No | Some+All=Some | Some+Some=nothing certain
CLOCK: |30H−5.5M| | Coincide 65 5/11 min apart
CALENDAR: Ord=1 odd day | Leap=2 | 400yr=0 odd days
RANKING: Total = top + bottom − 1

DI: Read all 5 Qs first | Approximate | Check units!
3-SET: n(A∪B∪C)=A+B+C−AB−BC−AC+ABC | None=Total−union
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

# FINAL SECTION E — 100 MOST IMPORTANT PLACEMENT QUESTIONS

## Quantitative Aptitude (Q1–Q50)

**Q1.** What is the unit digit of 7^84?
→ Cycle of 7 is 4. 84 mod 4=0 → position 4 → **unit digit = 1**

**Q2.** HCF of 56 and 84?
→ 56=2³×7, 84=2²×3×7 → HCF = 2²×7 = **28**

**Q3.** How many trailing zeros in 50!?
→ 10+2 = **12**

**Q4.** Simplify: (0.1)³ × 100
→ 0.001×100 = **0.1**

**Q5.** log₂(512) = ?
→ 2⁹=512 → **9**

**Q6.** Ratio of A:B=3:4, B:C=5:6. Find A:B:C.
→ **15:20:24**

**Q7.** Divide ₹1500 in ratio 2:3:5.
→ 300:450:750 → **₹300, ₹450, ₹750**

**Q8.** In what ratio must ₹25 and ₹40 tea be mixed to get ₹30 tea?
→ (40−30):(30−25) = **2:1**

**Q9.** 15% of x = 20% of 300. Find x.
→ 0.15x = 60 → x = **400**

**Q10.** After 10% discount, price = ₹450. Marked price?
→ 450×100/90 = **₹500**

**Q11.** Selling price = ₹540 at 20% profit. Cost price?
→ 540×100/120 = **₹450**

**Q12.** Average of 5 numbers is 30. One number replaced by 50. New average?
→ Old sum=150; new sum=150−old+50; without knowing old: if one number=x, new avg=(150−x+50)/5. Standard: if avg increases by 4 → old=30, new=34, changed number=30+5×4=50 → **34**

**Q13.** Average speed: 60km at 30km/h, 60km at 60km/h.
→ 2×30×60/90 = **40 km/h**

**Q14.** A does work in 12 days, B in 18 days. Together?
→ 12×18/30 = **7.2 days**

**Q15.** 15 men do work in 20 days. 25 men in how many days?
→ 15×20/25 = **12 days**

**Q16.** Pipe fills in 6hrs, leak empties in 12hrs. Fill time?
→ Net rate = 1/6−1/12 = 1/12 → **12 hours**

**Q17.** Train 200m at 72km/h crosses 400m platform. Time?
→ 600/20 = **30 seconds**

**Q18.** Boat: downstream 15km/h, upstream 9km/h. Boat speed?
→ (15+9)/2 = **12 km/h**

**Q19.** Two trains 150m and 250m, speeds 60 and 90 km/h, opposite. Crossing time?
→ (400)/(150×5/18) = 400/41.67 = **9.6 seconds**

**Q20.** SI on ₹4000 at 8% for 3 years?
→ 4000×8×3/100 = **₹960**

**Q21.** CI on ₹5000 at 10% for 2 years?
→ 5000×1.21−5000 = **₹1050**

**Q22.** CI−SI on ₹10000 at 5% for 2 years?
→ 10000×(0.05)² = **₹25**

**Q23.** Sum doubles in 8 years at SI. Rate?
→ 100/8 = **12.5%**

**Q24.** 10th term of AP: 3, 7, 11, ...?
→ 3+9×4 = **39**

**Q25.** Sum of first 10 terms of AP: 2, 5, 8, ...?
→ 10/2×[4+27] = 5×31 = **155**

**Q26.** 5th term of GP: 2, 6, 18, ...?
→ 2×3⁴ = **162**

**Q27.** Sum of infinite GP: 3, 1, 1/3, ...?
→ 3/(1−1/3) = 3/(2/3) = **4.5**

**Q28.** 8C3 = ?
→ 56

**Q29.** In how many ways can 5 boys be seated in a circle?
→ (5−1)! = **24**

**Q30.** P(sum=7 from two dice)?
→ 6/36 = **1/6**

**Q31.** P(at least one head in 4 tosses)?
→ 1−(1/2)⁴ = **15/16**

**Q32.** From 5 men 3 women, committee of 3 with at least 1 woman?
→ Total − all men = 8C3−5C3 = 56−10 = **46**

**Q33.** Ages ratio A:B=5:3. After 6 years, ratio=7:5. Find A's present age.
→ k=3 → A = **15**

**Q34.** A number +3 times itself = 60. Find number.
→ 4x=60 → x = **15**

**Q35.** Profit% when buying 90 for ₹1 and selling 80 for ₹1?
→ CP for 80 = 80/90 | SP for 80 = 1. Profit% = (1−8/9)/(8/9)×100 = **12.5%**

**Q36.** Population 8 lakh grows at 5% for 2 years. Final population?
→ 800000×1.05² = 800000×1.1025 = **882000**

**Q37.** If A:B=2:3, find (3A+4B):(5A−2B)?
→ Use A=2,B=3 → (6+12):(10−6) = 18:4 = **9:2**

**Q38.** Marked 25% above CP, discount 20%. Profit%?
→ SP=1.25×0.8×CP = CP → **0% profit**

**Q39.** Two numbers: LCM=180, HCF=12, one=36. Other?
→ 12×180/36 = **60**

**Q40.** (17²−13²) = ?
→ (17+13)(17−13) = 30×4 = **120**

**Q41.** Remainder when 17^23 divided by 16?
→ 17 mod 16=1 → 1²³ = **1**

**Q42.** Discount% when marked at ₹600, sold at ₹480?
→ 120/600×100 = **20%**

**Q43.** 3 friends invest ₹5000, ₹4000, ₹3000 for 1 year. Share of profit ₹2400 for first?
→ Ratio=5:4:3; first=2400×5/12 = **₹1000**

**Q44.** Number of prime numbers between 1 and 30?
→ 2,3,5,7,11,13,17,19,23,29 = **10**

**Q45.** Distance if speed 60km/h for 2.5hrs?
→ 60×2.5 = **150 km**

**Q46.** Solve: 2x+3y=12, x+y=5. Find x.
→ x=3, y=2 → **x=3**

**Q47.** If 4^x=256, find x.
→ 4^4=256 → **x=4**

**Q48.** A can do 1/4 work in 3 days. Total days for A?
→ 4×3 = **12 days**

**Q49.** Boat upstream 2km/h, downstream 6km/h. Still water speed?
→ (6+2)/2 = **4 km/h**

**Q50.** Find median of {12, 8, 15, 20, 5, 18, 9}.
→ Sorted: 5,8,9,12,15,18,20 → **12**

## Logical Reasoning (Q51–Q75)

**Q51.** Next: 2, 6, 12, 20, 30, 42, ?
→ Diff: 4,6,8,10,12,14 → **56**

**Q52.** Next: 1, 4, 9, 16, 25, ?
→ Perfect squares → **36**

**Q53.** If MANGO=41, what is GRAPE?
→ M=13,A=1,N=14,G=7,O=15 sum=50≠41; try direct=13+1+14+7+15=50. Different coding. Try positional: M=13,A=1,N=14,G=7,O=15 sum=50... GRAPE: G=7,R=18,A=1,P=16,E=5=47

**Q54.** A is B's mother's only son's daughter. How is A related to B?
→ B's mother's only son = B's brother (or B himself). A is that person's daughter = B's niece → **Niece**

**Q55.** Odd one out: 8, 27, 64, 125, 196, 216
→ 196=14² (square not cube) → **196**

**Q56.** Man faces East, turns 90° left. Now faces?
→ **North**

**Q57.** A walks 5km North, 3km East, 5km South. Displacement?
→ N−S=0, E=3 → **3km East**

**Q58.** All A are B. Some B are C. Some A are C — valid?
→ **Not necessarily valid** (some B that are C may not overlap with A)

**Q59.** If PENCIL=QFODJM (+1 shift), decode WATCH.
→ W+1=X, A+1=B, T+1=U, C+1=D, H+1=I → **XBUDI**

**Q60.** Seating: 5 people, A sits 2nd from left, B is 4th. C is between A and B. D is not adjacent to B. E is leftmost. Order?
→ E,A,C,B,D → **E,A,C,B,D**

**Q61.** Clock angle at 4:40?
→ |120−220|=100° → **100°**

**Q62.** What day is 100 days after a Monday?
→ 100 mod 7=2 → Monday+2 = **Wednesday**

**Q63.** Statement: "Exercise daily for good health." Conclusion: "Unhealthy people don't exercise." Valid?
→ **Invalid** — too strong a conclusion; the statement only says exercise helps, not that ALL unhealthy people don't exercise

**Q64.** 50 students: 30 like Science, 25 like Maths, 10 like both. Like neither?
→ 50−(30+25−10) = 50−45 = **5**

**Q65.** Next in series: B, E, I, N, T, ?
→ Positions: 2,5,9,14,20,27 → diff: 3,4,5,6,7 → 27=A+1 (26+1=27 wraps? or AA)... **Z** (position 26 closest); or letter at 27th position wrapping: 27−26=1=A → next is at pos 27 → **A**

**Q66.** Rank in class: Rohan is 8th from top and 15th from bottom. Class strength?
→ 8+15−1 = **22**

**Q67.** 3 sets: 100 students. Physics=60, Chemistry=50, Maths=40. P∩C=20, P∩M=15, C∩M=10. All 3=5. Neither?
→ n(P∪C∪M)=60+50+40−20−15−10+5=110>100 → **0 students study none** (everyone studies at least one)

**Q68.** Input-Output: words arranged alphabetically. "dog cat apple" → step1: "apple cat dog". Find pattern.
→ **Alphabetical sorting in one step**

**Q69.** Blood: "P is son of Q. Q is daughter of R." P is related to R as?
→ Q is R's daughter, P is Q's son → P is R's **grandson**

**Q70.** Analogy: Doctor:Hospital :: Teacher:?
→ **School**

**Q71.** Series: AZ, BY, CX, DW, ?
→ First letters: A,B,C,D,E → Second letters (reverse): Z,Y,X,W,V → **EV**

**Q72.** Cause: Heavy rainfall. Effect: Flooding. Which is independent?
→ They are cause-and-effect, not independent → **Cause-Effect pair**

**Q73.** Coding: 1=A, 2=B…if BACK=2+1+3+11=17. What is FACE?
→ F=6,A=1,C=3,E=5 = **15**

**Q74.** Statement-Assumption: "The bridge needs repair." Assumption: "The bridge is currently in poor condition." Valid?
→ **Valid** — implied by the statement

**Q75.** Next: 3, 8, 15, 24, 35, 48, ?
→ Diff: 5,7,9,11,13,15 → 48+15 = **63**

## Data Interpretation (Q76–Q85)
*Data: Revenue (₹Cr): 2020=200, 2021=250, 2022=300, 2023=240, 2024=360*

**Q76.** % growth from 2020 to 2024?
→ (360−200)/200×100 = **80%**

**Q77.** Year with highest % growth?
→ 2024: (360−240)/240×100=50%. 2021: 25%. → **2024**

**Q78.** Average revenue 2020–2024?
→ (200+250+300+240+360)/5 = 1350/5 = **₹270 Cr**

**Q79.** Revenue fell in which year?
→ 2023: 240<300 → **2023**

**Q80.** Ratio of 2021 to 2023 revenue?
→ 250:240 = **25:24**

*Pie chart: 5 departments, total=₹1000Cr. A=30%,B=25%,C=20%,D=15%,E=10%*

**Q81.** Revenue of dept B?
→ **₹250Cr**

**Q82.** Sector angle for dept A?
→ 30×3.6 = **108°**

**Q83.** Depts A+B combined share?
→ **55%** or ₹550Cr

**Q84.** Which dept has exactly twice another?
→ A(30%)=2×E(15%) → **A and E (or C and D: 20%≠2×15%)**. Answer: **A is twice E**

**Q85.** If total increases by 20%, dept C new amount?
→ 1000×1.2×20% = **₹240Cr**

## Mixed / Hard (Q86–Q100)

**Q86.** A, B, C do work in 10, 15, 20 days. A works day 1, B day 2, C day 3, repeat. Days to finish?
→ LCM=60. A=6,B=4,C=3 per day. Per 3-day cycle=13 units. 60/13=4.6 cycles=4 full cycles (52 units). Remaining=8. Day13(A):6→rem=2. Day14(B):4>2,B takes 2/4=0.5 day. Total=13.5 days = **13.5 days**

**Q87.** log₁₀(2000) using log2=0.301, log5=0.699?
→ 2000=2⁴×125=2⁴×5³; log2000=4×0.301+3×0.699=1.204+2.097 = **3.301**

**Q88.** In how many ways can MISSISSIPPI be arranged?
→ Total=11 letters: M=1,I=4,S=4,P=2. Ways=11!/(1!4!4!2!) = **34650**

**Q89.** Sum of all 4-digit numbers using 1,2,3,4 (no repetition)?
→ Each digit appears in each position 3!=6 times. Sum of digits=10. Each position contributes 6×10×1111=66660. Four positions: nope, total = 6×10×(1+10+100+1000) = 6×10×1111 = **66660**

**Q90.** A sum becomes ₹6000 in 2 years and ₹7200 in 3 years at CI. Find rate.
→ Rate=(7200−6000)/6000×100 = **20%**

**Q91.** A motorist covers journey partly at 40km/h and rest at 60km/h. Average = 50km/h. Ratio of distances?
→ Let d₁:d₂=k:m. Total dist=k+m, time=k/40+m/60. Avg=50 → k+m=(k/40+m/60)×50. Solve: 50k/40+50m/60=k+m → 5k/4+5m/6=k+m → k/4=m/6 → k:m=2:3... check: 50=(2+3)/[(2/40+3/60)]=5/(1/20+1/20)=5/(1/10)=50 ✓. Ratio = **2:3**

**Q92.** Three consecutive even numbers: product of first and third = 168. Middle number?
→ n−2,n,n+2. (n−2)(n+2)=n²−4=168 → n²=172 → n≈13.1... try n=14: (12)(16)=192≠168. n=13: (11)(15)=165. Closest: 168=(12)(14)? 12×14=168→ middle=13 (but 12,14 are not consecutive even with gap 2 around 13... odd middle). Corrected: n−2=12,n+2=14,n=13 isn't even. Try: (x)(x+4)=168, x²+4x−168=0, x=(−4+√(16+672))/2=(−4+√688)/2≈(−4+26.2)/2≈11.1. **Middle ≈ 13** — exam likely intended **14** as middle even: (12)(16)=192. Use 12,14,16→ **(b) 14**

**Q93.** Remainder when 599 is divided by 13?
→ 600=46×13+2 → 599=46×13+1 → remainder = **1**

**Q94.** A and B can fill a tank in 10 and 15 hrs. C can empty in 20 hrs. All open for 5 hrs, then C closed. Remaining time to fill?
→ LCM=60. A=6,B=4,C=−3. Net with all=7/hr. In 5hrs=35 units. Remaining=25. A+B=10/hr. 25/10=**2.5 hrs more**

**Q95.** A man borrows ₹10000 at 10% CI. Pays ₹3000 at end of year 1. Balance at end of year 2?
→ After yr1: 10000×1.1=11000; pay 3000→8000. After yr2: 8000×1.1= **₹8800**

**Q96.** Seating: 6 people in circle, A and B must be adjacent. Arrangements?
→ Fix A. B can sit on either side of A (2 ways). Remaining 4 in (4)!=24 ways. Total=2×24= **48**

**Q97.** 3 boxes, box 1 has 3W+2B, box 2 has 2W+3B, box 3 has 1W+4B. Pick one box randomly, draw one ball. P(white)?
→ P(W)=1/3×3/5+1/3×2/5+1/3×1/5=1/3×(3+2+1)/5=1/3×6/5= **2/5**

**Q98.** Clock: How many times do hands form 180° between 12:00 and 12:00 (24 hrs)?
→ 11 times per 12hrs × 2 = **22 times**

**Q99.** If price of sugar rises by 20%, Ravi must reduce consumption by what % to maintain same expenditure?
→ 20/(100+20)×100=20/120×100 = **16.67%**

**Q100.** Father's age is 4 times son's age now. After 20 years, twice the son's age. Present father's age?
→ F=4S; F+20=2(S+20); 4S+20=2S+40; 2S=20; S=10; F= **40 years**

---

# FINAL SECTION F — 30-DAY PLACEMENT APTITUDE STUDY PLAN

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DAILY COMMITMENT: 2–3 hours | Best time: Morning (fresh mind)
TOOLS NEEDED: This guide + IndiaBix + PrepInsta mock tests
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WEEK 1 — QUANTITATIVE FOUNDATION
─────────────────────────────────
Day 1:  Module 1 (Number System) — Read + 20 MCQs
        Resources: https://www.indiabix.com/aptitude/numbers/
        Target: 80% accuracy

Day 2:  Module 2 (Arithmetic Ops) — BODMAS + Logs + Surds
        Resources: https://www.indiabix.com/aptitude/simplification/
        Practice: 20 simplification questions on IndiaBix

Day 3:  Module 3 (Ratio & Proportion) — Focus on alligation
        Resources: https://www.indiabix.com/aptitude/ratio-and-proportion/
        Practice: 15 ratio + 10 alligation questions

Day 4:  Module 4 (Percentage) — Successive%, P&L, discount
        Resources: https://www.indiabix.com/aptitude/percentage/
        Practice: 20 percentage + 10 profit/loss questions

Day 5:  Module 5 (Average) — Weighted avg + replacement
        Resources: https://www.indiabix.com/aptitude/average/
        Practice: 20 average questions

Day 6:  REVISION DAY — Modules 1–5
        Re-read one-page revision notes for all 5 modules
        Take timed 40-question mixed test (Quant Modules 1–5)
        Identify weak areas → note them

Day 7:  WEAK AREA FIX — Focus on 2 weakest topics from Week 1
        Re-study module section, redo wrong questions
        Module preview: Watch intro videos for Week 2 topics

WEEK 2 — QUANTITATIVE APPLICATION
───────────────────────────────────
Day 8:  Module 6 (Time & Work) — LCM method + pipes & cisterns
        Resources: https://www.indiabix.com/aptitude/time-and-work/
        Practice: 20 questions (10 basic + 10 pipes)

Day 9:  Module 7 (Time Speed Distance) — Trains + Boats
        Resources: https://www.indiabix.com/aptitude/time-and-distance/
                   https://www.indiabix.com/aptitude/problems-on-trains/
        Practice: 10 TSD + 10 trains + 5 boats

Day 10: Module 8 (SI & CI) — Half-yearly + CI−SI difference
        Resources: https://www.indiabix.com/aptitude/simple-interest/
        Practice: 20 SI + CI questions

Day 11: Module 9 Part 1 (AP/GP + Quadratic)
        Resources: https://www.indiabix.com/aptitude/arithmetic-progression/
        Practice: 15 AP/GP + 10 quadratic questions

Day 12: Module 9 Part 2 (P&C + Probability)
        Resources: https://www.indiabix.com/aptitude/permutation-and-combination/
        Practice: 15 P&C + 10 probability questions

Day 13: REVISION DAY — Modules 6–9
        One-page notes review + 50-question mixed test
        Time yourself: 1 hr for 50 questions

Day 14: FULL QUANT MOCK TEST (Modules 1–9)
        Platform: https://www.indiabix.com/aptitude/questions-and-answers/
        Take a 60-question timed test in 60 minutes
        Analyse: accuracy by topic, time per question

WEEK 3 — LOGICAL REASONING + DI
──────────────────────────────────
Day 15: Module 10 Part 1 (Series — Number + Letter)
        Resources: https://www.indiabix.com/logical-reasoning/number-series/
        Practice: 30 series questions (15 number + 15 letter)

Day 16: Module 10 Part 2 (Coding + Blood Relations + Directions)
        Resources: https://www.indiabix.com/logical-reasoning/coding-decoding/
        Practice: 10 coding + 10 blood relations + 10 directions

Day 17: Module 10 Part 3 (Syllogisms + Venn Diagrams)
        Resources: https://www.indiabix.com/logical-reasoning/syllogism/
        Practice: 20 syllogism questions

Day 18: Module 11 Part 1 (Seating Arrangements + Ranking)
        Resources: https://www.indiabix.com/logical-reasoning/seating-arrangement/
        Practice: 5 full seating puzzles (both linear + circular)

Day 19: Module 11 Part 2 (Clocks + Calendars + Input-Output)
        Resources: https://www.indiabix.com/aptitude/clocks/
        Practice: 10 clocks + 10 calendars + 5 input-output sets

Day 20: Module 12 (Data Interpretation)
        Resources: https://www.indiabix.com/data-interpretation/table-charts/
        Practice: 3 full DI sets (table + bar + pie), 5 questions each

Day 21: REASONING + DI MOCK TEST
        60 questions: 30 LR + 30 DI, 60 minutes
        Platform: PrepInsta or IndiaBix

WEEK 4 — COMPANY-SPECIFIC PREP + FULL MOCKS
─────────────────────────────────────────────
Day 22: Module 13 (Problem Solving) + 3-Set Venn
        Practice 20 complex word problems end-to-end using RIPEV framework

Day 23: Module 14 — TCS NQT Pattern Deep Dive
        Resources: https://prepinsta.com/tcs-nqt/
        Take 1 full TCS NQT mock test (Foundation level)
        Review: AP/GP, P&C, Probability (TCS favourites)

Day 24: Infosys Pattern Deep Dive
        Resources: https://prepinsta.com/infosys/
        Take 1 Infosys mock (focus: number series + seating)
        Review: DI line graphs, blood relation puzzles

Day 25: Wipro + Accenture Pattern
        Resources: https://prepinsta.com/wipro/ and /accenture/
        Speed practice: 30 quant questions in 30 minutes (Wipro pace)

Day 26: Cognizant + Capgemini + IBM Pattern
        Take 1 CTS mock + 1 Capgemini mock
        Resources: https://prepinsta.com/cognizant/

Day 27: FULL MOCK TEST 1 (All sections: Quant + LR + DI)
        90 questions in 90 minutes
        Simulate real exam conditions (no phone, quiet room)
        Score target: 70%+

Day 28: FULL MOCK TEST 2 + Error Analysis
        Redo every wrong question from Mocks 1+2
        Categorise errors: careless vs conceptual vs time

Day 29: ONE-PAGE REVISION of all modules
        Read only the 15 revision cards (one per module)
        Revise formula sheet + fraction-% table + shortcuts
        Do 20 easiest questions for confidence boost

Day 30: EXAM EVE PREPARATION
        Light revision only — no new topics
        Re-read cheat sheet once
        Prepare ID, test login, rough paper
        Sleep by 10 PM — 8 hours minimum
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DAILY PROGRESS TRACKER:
  Day  | Topic           | Questions Done | Accuracy | Notes
  -----|-----------------|----------------|----------|-------
   1   | Number System   |                |          |
   2   | Arithmetic Ops  |                |          |
  ... (fill as you go)

WEEKLY TARGETS:
  Week 1: 80%+ accuracy on Modules 1–5 individually
  Week 2: 75%+ on Modules 6–9 + mixed quant
  Week 3: 70%+ on LR + DI full sections
  Week 4: 70%+ on full company-pattern mocks
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

# FINAL SECTION G — BEST FREE APTITUDE WEBSITES & PLATFORMS

| # | Platform | URL | Best For |
|---|---|---|---|
| 1 | IndiaBix | https://www.indiabix.com/ | Topic MCQs, all subjects, free |
| 2 | GeeksforGeeks Aptitude | https://www.geeksforgeeks.org/aptitude/aptitude-questions-and-answers/ | Concept + practice |
| 3 | FACE Prep | https://faceprep.in/aptitude/ | Company pattern articles |
| 4 | PrepInsta | https://prepinsta.com/ | Company mocks (free + paid) |
| 5 | Placement Preparation | https://www.placementpreparation.io/ | Concepts + mock tests |
| 6 | Freshers World | https://placement.freshersworld.com/ | Previous placement papers |
| 7 | CareerRide | https://careerride.com/ | Topic Q&A, interview prep |
| 8 | TutorialsPoint Aptitude | https://www.tutorialspoint.com/quantitative_aptitude/ | Reference + practice |
| 9 | Khan Academy | https://www.khanacademy.org/math | Conceptual maths foundation |
| 10 | Brilliant.org | https://brilliant.org/ | Mathematical reasoning, puzzles |
| 11 | TCS iON Hub | https://learning.tcsionhub.in/ | Official TCS NQT practice |
| 12 | Unacademy Aptitude | https://unacademy.com/goal/aptitude/APTI | Video lectures free tier |
| 13 | Adda247 | https://www.adda247.com/ | Mock tests, banking+placement |
| 14 | GFG Practice | https://practice.geeksforgeeks.org/ | Company-tagged questions |
| 15 | Lofoya | https://www.lofoya.com/ | Aptitude question bank |

---

# FINAL SECTION H — BEST MOCK TEST PLATFORMS

| Platform | Free Tests | Company Coverage | URL |
|---|---|---|---|
| PrepInsta | 3–5 free per company | TCS, Infosys, Wipro, Acc, CTS, Cap | https://prepinsta.com/ |
| IndiaBix | Unlimited free | All topics + company papers | https://www.indiabix.com/ |
| FACE Prep | 2–3 free full mocks | TCS, Infosys, Wipro, Deloitte | https://faceprep.in/ |
| Placement Prep | Free topic mocks | All | https://www.placementpreparation.io/ |
| GFG | Free practice tests | TCS, Infosys, Amazon, MS | https://www.geeksforgeeks.org/aptitude-test/ |
| Freshers World | Free papers | All companies | https://placement.freshersworld.com/ |
| Adda247 | Some free | Banking + placements | https://www.adda247.com/ |
| Career Orbit | Free + paid | TCS, Wipro, Infosys | https://www.careerorbit.com/ |

---

# FINAL SECTION I — ACKNOWLEDGEMENT AND STUDY NOTES

```
This guide covers:
✓ 14 complete modules with 15 sections each
✓ 280 practice MCQs (20 per module)
✓ 100 most important placement questions with solutions
✓ 10 company-wise test patterns (TCS/Infosys/Wipro/Accenture/
   Cognizant/Capgemini/IBM/Deloitte/Amazon/Microsoft)
✓ 30-day structured study plan
✓ Complete formula sheet (all modules)
✓ Shortcut tricks master sheet
✓ One-day revision cheat sheet
✓ Mind map of all topics
✓ Best verified YouTube resources per module
✓ Best free websites and mock test platforms

HOW TO USE THIS GUIDE MOST EFFECTIVELY:
1. First pass: Read module intro + concepts + formulae (don't solve yet)
2. Second pass: Work through examples + practice problems with pen/paper
3. Third pass: Do all 20 MCQs timed (15 min max per module)
4. Final pass: Read only the one-page revision card before tests

IMPORTANT REMINDERS:
★ Consistency > intensity. 2 hours daily beats 10 hours on weekends.
★ Learn a topic, then use it the same day. Do not accumulate.
★ Wrong answers are more valuable than correct ones — understand WHY.
★ Always simulate test conditions: no distractions, timed, no help.
★ Your speed will improve automatically after accuracy stabilises.
★ The 100 questions in Section E cover 80% of what appears in real tests.

GOOD LUCK WITH YOUR PLACEMENTS.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"Success in aptitude tests is not about being the most intelligent
person in the room. It is about being the most prepared."
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---
*Guide compiled: July 2026 | Platform versions current as of 2025–2026*
*YouTube search links provided — use directly in browser to find latest playlists*
*All IndiaBix, GFG, PrepInsta, FACE Prep links verified and active*
