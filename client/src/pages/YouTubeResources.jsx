import React, { useState, useMemo } from "react";
import { ExternalLink, Play, Search, BookOpen, ChevronRight } from "lucide-react";

// ─── Subject Data ─────────────────────────────────────────────────────────────
const subjects = [
  {
    id: 1, name: "Algorithms", group: "Core CS",
    resources: [
      { title: "Abdul Bari – Algorithms Playlist", channel: "Abdul Bari", description: "Algorithm fundamentals, sorting, searching, greedy, DP, graphs.", url: "https://www.youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O" },
      { title: "MIT OCW – Introduction to Algorithms", channel: "MIT OpenCourseWare", description: "University-level algorithms course by MIT faculty.", url: "https://www.youtube.com/playlist?list=PLUl4u3cNGP63EdVPN7z2fQf0q4Q4qQqQq" },
      { title: "Neso Academy – Design & Analysis of Algorithms", channel: "Neso Academy", description: "Engineering syllabus oriented DAA course.", url: "https://www.youtube.com/@nesoacademy/playlists" },
    ],
  },
  {
    id: 2, name: "Applied Physics Lab", group: "Science",
    resources: [
      { title: "Virtual Labs (IIT) – Physics Experiments", channel: "Virtual Labs IIT", description: "Physics experiment simulations + theory from IIT labs.", url: "https://www.vlab.co.in/participating-institute-iit-delhi" },
      { title: "NPTEL – Engineering Physics", channel: "NPTEL", description: "Complete physics concepts covering quantum, optics, lasers.", url: "https://www.youtube.com/@nptelhrd/search?query=engineering%20physics" },
      { title: "Physics Practical Experiments", channel: "LabInstruments", description: "Laboratory demonstrations for physics practicals.", url: "https://www.youtube.com/@LabInstruments" },
    ],
  },
  {
    id: 3, name: "Arithmetical Thinking & Analytical Reasoning", group: "Aptitude",
    resources: [
      { title: "Neso Academy – Aptitude and Reasoning", channel: "Neso Academy", description: "Number system, percentage, ratio, reasoning, and aptitude.", url: "https://www.nesoacademy.org/ot/03-aptitude-and-reasoning" },
      { title: "IndiaBix Aptitude", channel: "IndiaBix", description: "Placement aptitude practice problems and solutions.", url: "https://www.indiabix.com/" },
      { title: "TalentSprint Aptitude Preparation", channel: "TalentSprint", description: "Company placement aptitude preparation videos.", url: "https://www.youtube.com/@TalentSprintAptitudePrep" },
    ],
  },
  {
    id: 4, name: "Artificial Intelligence and Machine Learning", group: "AI / ML",
    resources: [
      { title: "freeCodeCamp – Machine Learning with Python", channel: "freeCodeCamp", description: "Complete ML course: Python, ML algorithms, Scikit-learn, and projects.", url: "https://www.youtube.com/watch?v=7eh4d6sabA0" },
      { title: "Krish Naik – Machine Learning Playlist", channel: "Krish Naik", description: "Industry-focused ML tutorials and projects.", url: "https://www.youtube.com/@krishnaik06/playlists" },
      { title: "StatQuest – Machine Learning Playlist", channel: "StatQuest", description: "Best ML theory explanations with visual statistics.", url: "https://www.youtube.com/playlist?list=PLblh5JKOoLUIxGDQs4LFFD1G8D1j2QKQ-" },
    ],
  },
  {
    id: 5, name: "Basic Electrical Engineering", group: "Electrical",
    resources: [
      { title: "Neso Academy – Basic Electrical Engineering", channel: "Neso Academy", description: "Complete engineering syllabus for electrical basics.", url: "https://www.youtube.com/@nesoacademy/playlists" },
      { title: "Gate Smashers – Electrical Engineering Basics", channel: "Gate Smashers", description: "Electrical engineering fundamentals for GATE and university exams.", url: "https://www.youtube.com/@GateSmashers/playlists" },
      { title: "NPTEL – Basic Electrical Technology", channel: "NPTEL", description: "IIT-quality course on basic electrical technology.", url: "https://nptel.ac.in/courses/108105053" },
    ],
  },
  {
    id: 6, name: "Basic Electronics", group: "Electrical",
    resources: [
      { title: "Neso Academy – Electronic Devices and Circuits", channel: "Neso Academy", description: "Diodes, transistors, amplifiers, and digital electronics.", url: "https://www.youtube.com/@nesoacademy/playlists" },
      { title: "Gate Smashers – Digital Electronics", channel: "Gate Smashers", description: "Digital electronics for university and GATE preparation.", url: "https://www.youtube.com/@GateSmashers/playlists" },
      { title: "All About Electronics", channel: "ALLABOUTELECTRONICS", description: "Best electronics explanations with clear animations.", url: "https://www.youtube.com/@ALLABOUTELECTRONICS" },
    ],
  },
  {
    id: 7, name: "Basic Mechanical Engineering", group: "Mechanical",
    resources: [
      { title: "NPTEL – Engineering Mechanics / Mechanical Basics", channel: "NPTEL", description: "IIT-quality course on mechanical engineering fundamentals.", url: "https://nptel.ac.in/courses/112106286" },
      { title: "Learn Engineering", channel: "Learn Engineering", description: "Mechanical engineering fundamentals with visual animations.", url: "https://www.youtube.com/@LearnEngineering" },
      { title: "Gate Academy – Mechanical Engineering", channel: "Gate Academy Plus", description: "Mechanical engineering for GATE aspirants.", url: "https://www.youtube.com/@GateAcademyPlus" },
    ],
  },
  {
    id: 8, name: "Big Data Analytics", group: "Data",
    resources: [
      { title: "Simplilearn – Big Data Analytics Course", channel: "Simplilearn", description: "Hadoop, Spark, Big Data concepts explained.", url: "https://www.youtube.com/watch?v=1vbXmCrkT3Y" },
      { title: "Great Learning – Big Data Full Course", channel: "Great Learning", description: "Full Big Data course from industry experts.", url: "https://www.youtube.com/@GreatLearningOfficial" },
      { title: "Edureka – Big Data Hadoop Playlist", channel: "Edureka", description: "Hadoop, MapReduce, and Big Data ecosystem tutorials.", url: "https://www.youtube.com/@edurekaIN/playlists" },
    ],
  },
  {
    id: 9, name: "C Programming for Problem Solving", group: "Programming",
    resources: [
      { title: "Neso Academy – C Programming Playlist", channel: "Neso Academy", description: "Complete C language course with concepts and examples.", url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRjT3oRrqiRLLlsX3n8QK8XS" },
      { title: "Jenny's Lectures – C Programming", channel: "Jenny's Lectures CS/IT", description: "Detailed C programming for CS/IT students.", url: "https://www.youtube.com/@JennyslecturesCSIT/playlists" },
      { title: "freeCodeCamp – C Programming Full Course", channel: "freeCodeCamp", description: "Complete C programming full course for beginners.", url: "https://www.youtube.com/watch?v=KJgsSFOSQv0" },
    ],
  },
  {
    id: 10, name: "Cloud Computing", group: "Cloud",
    resources: [
      { title: "freeCodeCamp – Cloud Computing Course", channel: "freeCodeCamp", description: "Cloud fundamentals including IaaS, PaaS, SaaS, and deployment models.", url: "https://www.youtube.com/watch?v=2LaAJq1lB1Q" },
      { title: "Neso Academy – Cloud Computing", channel: "Neso Academy", description: "Engineering-syllabus cloud computing course.", url: "https://www.youtube.com/@nesoacademy/playlists" },
      { title: "AWS Training – Cloud Practitioner", channel: "AWS Training", description: "Official AWS foundation training for Cloud Practitioner.", url: "https://www.youtube.com/@AWSTraining" },
    ],
  },
  {
    id: 11, name: "Computer Networks", group: "Core CS",
    resources: [
      { title: "Neso Academy – Computer Networks Playlist", channel: "Neso Academy", description: "OSI/TCP-IP models, routing, switching, protocols, transport layer.", url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRjX6qvY0G3r8zXxK9x8zZ8y" },
      { title: "Gate Smashers – Computer Networks", channel: "Gate Smashers", description: "Best for university and GATE preparation on networking.", url: "https://www.youtube.com/@GateSmashers/playlists" },
      { title: "NPTEL – Computer Networks", channel: "NPTEL", description: "University-level IIT course on computer networks.", url: "https://nptel.ac.in/courses/106105183" },
    ],
  },
  {
    id: 12, name: "Computer Networks Lab", group: "Core CS",
    resources: [
      { title: "Cisco Networking Academy", channel: "Cisco NetAcad", description: "Practical networking, Packet Tracer simulations, and protocols.", url: "https://www.netacad.com/" },
      { title: "Practical Networking", channel: "Practical Networking", description: "Networking concepts and troubleshooting with real-world examples.", url: "https://www.youtube.com/@PracticalNetworking" },
      { title: "Neso Academy – Computer Networks", channel: "Neso Academy", description: "Supplementary networking concepts for lab understanding.", url: "https://www.youtube.com/@nesoacademy/playlists" },
    ],
  },
  {
    id: 13, name: "Computer Organization and Architecture", group: "Core CS",
    resources: [
      { title: "Neso Academy – Computer Organization Playlist", channel: "Neso Academy", description: "CPU, memory hierarchy, instruction cycle, cache, I/O organization.", url: "https://www.youtube.com/@nesoacademy/playlists" },
      { title: "Gate Smashers – Computer Organization", channel: "Gate Smashers", description: "COA fundamentals for GATE and university exams.", url: "https://www.youtube.com/@GateSmashers/playlists" },
      { title: "NPTEL – Computer Organization", channel: "NPTEL", description: "IIT-level course on computer organization and architecture.", url: "https://nptel.ac.in/courses/106103068" },
    ],
  },
  {
    id: 14, name: "Corporate Communication", group: "Soft Skills",
    resources: [
      { title: "NPTEL – Soft Skills / Communication Skills", channel: "NPTEL", description: "Professional communication skills for engineering students.", url: "https://nptel.ac.in/courses/109104031" },
      { title: "English with Lucy – Communication Skills", channel: "English with Lucy", description: "Professional English and communication for workplace success.", url: "https://www.youtube.com/@EnglishwithLucy" },
      { title: "Toastmasters International – Communication Skills", channel: "Toastmasters International", description: "Public speaking and leadership communication resources.", url: "https://www.youtube.com/@ToastmastersInternational" },
    ],
  },
  {
    id: 15, name: "Cryptography & Network Security", group: "Core CS",
    resources: [
      { title: "Neso Academy – Cryptography Playlist", channel: "Neso Academy", description: "Encryption, RSA, AES, authentication, and security concepts.", url: "https://www.youtube.com/@nesoacademy/playlists" },
      { title: "Gate Smashers – Cryptography & Network Security", channel: "Gate Smashers", description: "Cryptography and network security for GATE and university.", url: "https://www.youtube.com/@GateSmashers/playlists" },
      { title: "NPTEL – Cryptography and Network Security", channel: "NPTEL", description: "IIT-quality cryptography and security course.", url: "https://nptel.ac.in/courses/106105031" },
    ],
  },
  {
    id: 16, name: "Data Structures and Algorithms", group: "Core CS",
    resources: [
      { title: "Abdul Bari – Data Structures & Algorithms", channel: "Abdul Bari", description: "Best for DSA fundamentals, time complexity, sorting, and trees.", url: "https://www.youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O" },
      { title: "Striver – A2Z DSA Course", channel: "takeUforward", description: "Best for coding interviews: arrays, linked lists, graphs, DP.", url: "https://www.youtube.com/@takeUforward/playlists" },
      { title: "Neso Academy – Data Structures", channel: "Neso Academy", description: "Engineering syllabus-oriented data structures course.", url: "https://www.youtube.com/@nesoacademy/playlists" },
    ],
  },
  {
    id: 17, name: "Database Applications Lab", group: "Database",
    resources: [
      { title: "SQLBolt – Interactive SQL Practice", channel: "SQLBolt", description: "Interactive SQL practice exercises from basics to advanced queries.", url: "https://sqlbolt.com/" },
      { title: "freeCodeCamp – SQL Full Course", channel: "freeCodeCamp", description: "Complete SQL full course for beginners with projects.", url: "https://www.youtube.com/watch?v=HXV3zeQKqGY" },
      { title: "Oracle Database Tutorials", channel: "Oracle Learning", description: "Official Oracle database tutorials and SQL/PLSQL content.", url: "https://www.youtube.com/@OracleLearning" },
    ],
  },
  {
    id: 18, name: "Database Management System", group: "Database",
    resources: [
      { title: "Gate Smashers – DBMS Playlist", channel: "Gate Smashers", description: "Best DBMS course for engineering syllabus and GATE.", url: "https://www.youtube.com/@GateSmashers/playlists" },
      { title: "Neso Academy – DBMS", channel: "Neso Academy", description: "Complete DBMS: ER model, normalization, transactions.", url: "https://www.youtube.com/@nesoacademy/playlists" },
      { title: "NPTEL – Database Management Systems", channel: "NPTEL", description: "University-level DBMS course from IIT faculty.", url: "https://nptel.ac.in/courses/106106093" },
    ],
  },
  {
    id: 19, name: "Design Thinking for Social Innovation", group: "Soft Skills",
    resources: [
      { title: "Stanford d.school – Design Thinking", channel: "Stanford d.school", description: "Design thinking frameworks, tools, and resources from Stanford.", url: "https://dschool.stanford.edu/resources" },
      { title: "IDEO Design Thinking", channel: "IDEO U", description: "Human-centered design thinking courses and case studies.", url: "https://www.youtube.com/@IDEOU" },
      { title: "AJ&Smart – Design Thinking Process", channel: "AJ&Smart", description: "Practical design sprints and design thinking tutorials.", url: "https://www.youtube.com/@AJSmart" },
    ],
  },
  {
    id: 20, name: "Design and Analysis of Algorithms", group: "Core CS",
    resources: [
      { title: "Abdul Bari – Algorithms", channel: "Abdul Bari", description: "Complete algorithm concepts: greedy, DP, backtracking, graph algorithms.", url: "https://www.youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O" },
      { title: "Gate Smashers – DAA", channel: "Gate Smashers", description: "DAA course for GATE and university examinations.", url: "https://www.youtube.com/@GateSmashers/playlists" },
      { title: "NPTEL – Design and Analysis of Algorithms", channel: "NPTEL", description: "IIT-level DAA course with proof techniques and complexity.", url: "https://nptel.ac.in/courses/106101060" },
    ],
  },
  {
    id: 21, name: "Discrete Mathematics", group: "Mathematics",
    resources: [
      { title: "Neso Academy – Discrete Mathematics Playlist", channel: "Neso Academy", description: "Logic, sets, relations, functions, graph theory, and combinatorics.", url: "https://www.youtube.com/@nesoacademy/playlists" },
      { title: "Gate Smashers – Discrete Mathematics", channel: "Gate Smashers", description: "Discrete maths for university and GATE preparation.", url: "https://www.youtube.com/@GateSmashers/playlists" },
      { title: "NPTEL – Discrete Mathematics", channel: "NPTEL", description: "University-level discrete mathematics course.", url: "https://nptel.ac.in/courses/111107058" },
    ],
  },
  {
    id: 22, name: "Embedded Systems and IoT", group: "Electrical",
    resources: [
      { title: "NPTEL – Embedded Systems", channel: "NPTEL", description: "Microcontrollers, embedded programming, and hardware interfacing.", url: "https://nptel.ac.in/courses/108102045" },
      { title: "Great Learning – IoT Full Course", channel: "Great Learning", description: "Complete IoT course from sensors to cloud connectivity.", url: "https://www.youtube.com/@GreatLearningOfficial" },
      { title: "freeCodeCamp – IoT Course", channel: "freeCodeCamp", description: "IoT fundamentals and project-based learning.", url: "https://www.youtube.com/@freecodecamp/playlists" },
    ],
  },
  {
    id: 23, name: "Engineering Chemistry", group: "Science",
    resources: [
      { title: "NPTEL – Engineering Chemistry", channel: "NPTEL", description: "Water chemistry, electrochemistry, polymers, nanomaterials, and corrosion.", url: "https://nptel.ac.in/courses/104103019" },
      { title: "Last Moment Tuitions – Engineering Chemistry", channel: "Last Moment Tuitions", description: "Quick and exam-focused engineering chemistry revision.", url: "https://www.youtube.com/@LastMomentTuitions" },
      { title: "Neso Academy – Engineering Chemistry", channel: "Neso Academy", description: "Engineering chemistry topics for university syllabus.", url: "https://www.youtube.com/@nesoacademy/playlists" },
    ],
  },
  {
    id: 24, name: "Engineering Exploration", group: "Science",
    resources: [
      { title: "NPTEL – Engineering Design / Innovation", channel: "NPTEL", description: "Engineering design thinking, innovation, and problem solving.", url: "https://nptel.ac.in/" },
      { title: "Stanford d.school – Design Thinking", channel: "Stanford d.school", description: "Human-centered design and engineering exploration resources.", url: "https://dschool.stanford.edu/resources" },
      { title: "IDEO Design Thinking", channel: "IDEO U", description: "Practical innovation and design thinking for engineers.", url: "https://www.youtube.com/@IDEOU" },
    ],
  },
  {
    id: 25, name: "Engineering Mechanics", group: "Mechanical",
    resources: [
      { title: "NPTEL – Engineering Mechanics", channel: "NPTEL", description: "Force systems, equilibrium, friction, and dynamics.", url: "https://nptel.ac.in/courses/112106286" },
      { title: "Neso Academy – Engineering Mechanics", channel: "Neso Academy", description: "Engineering mechanics for university and GATE syllabus.", url: "https://www.youtube.com/@nesoacademy/playlists" },
      { title: "Gate Academy – Engineering Mechanics", channel: "Gate Academy Plus", description: "Mechanics course targeted for GATE mechanical aspirants.", url: "https://www.youtube.com/@GateAcademyPlus" },
    ],
  },
  {
    id: 26, name: "Engineering Physics", group: "Science",
    resources: [
      { title: "NPTEL – Engineering Physics", channel: "NPTEL", description: "Quantum physics, optics, lasers, and semiconductors.", url: "https://nptel.ac.in/courses" },
      { title: "Neso Academy – Engineering Physics", channel: "Neso Academy", description: "Engineering physics topics for first-year university syllabus.", url: "https://www.youtube.com/@nesoacademy/playlists" },
      { title: "Physics Wallah – Engineering Physics", channel: "Physics Wallah", description: "Engaging and simplified engineering physics lectures.", url: "https://www.youtube.com/@PhysicsWallah" },
    ],
  },
  {
    id: 27, name: "Exploratory Data Analysis", group: "Data",
    resources: [
      { title: "Krish Naik – EDA Playlist", channel: "Krish Naik", description: "Data cleaning, visualization, and feature analysis walkthroughs.", url: "https://www.youtube.com/@krishnaik06/playlists" },
      { title: "freeCodeCamp – Data Analysis with Python", channel: "freeCodeCamp", description: "Data analysis using Python, Pandas, NumPy, and Matplotlib.", url: "https://www.youtube.com/watch?v=r-uOLxNrNk8" },
      { title: "Alex The Analyst – Data Analytics Playlist", channel: "Alex The Analyst", description: "Practical EDA and analytics projects using real datasets.", url: "https://www.youtube.com/@AlexTheAnalyst/playlists" },
    ],
  },
  {
    id: 28, name: "Generative AI", group: "AI / ML",
    resources: [
      { title: "DeepLearning.AI – Generative AI Courses", channel: "DeepLearning.AI", description: "LLM basics, prompt engineering, and generative models.", url: "https://www.deeplearning.ai/short-courses/" },
      { title: "Google Cloud – Generative AI Learning", channel: "Google Cloud Tech", description: "Generative AI on Google Cloud with Vertex AI and Gemini.", url: "https://www.youtube.com/@GoogleCloudTech" },
      { title: "freeCodeCamp – Generative AI Courses", channel: "freeCodeCamp", description: "Free generative AI and LLM courses for beginners.", url: "https://www.youtube.com/@freecodecamp/playlists" },
    ],
  },
  {
    id: 29, name: "Industry Readiness & Leadership Skills", group: "Soft Skills",
    resources: [
      { title: "LinkedIn Learning – Leadership Skills", channel: "LinkedIn Learning", description: "Professional leadership skills for industry readiness.", url: "https://www.youtube.com/@LinkedInLearning" },
      { title: "Google Career Certificates – Career Skills", channel: "Google Career Certificates", description: "Workplace skills and career readiness from Google.", url: "https://www.youtube.com/@GoogleCareerCertificates" },
      { title: "Harvard Business Review – Leadership", channel: "Harvard Business Review", description: "Expert insights on management, leadership, and career growth.", url: "https://www.youtube.com/@HarvardBusinessReview" },
    ],
  },
  {
    id: 30, name: "Linear Algebra", group: "Mathematics",
    resources: [
      { title: "3Blue1Brown – Essence of Linear Algebra", channel: "3Blue1Brown", description: "Best visual understanding of vectors, matrices, and transformations.", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr" },
      { title: "MIT OCW – Linear Algebra", channel: "MIT OpenCourseWare", description: "Gilbert Strang's legendary university-level linear algebra course.", url: "https://www.youtube.com/playlist?list=PLE7DDD91010BC51F8" },
      { title: "Khan Academy – Linear Algebra", channel: "Khan Academy", description: "Linear algebra fundamentals from scratch with exercises.", url: "https://www.youtube.com/@khanacademy/playlists" },
    ],
  },
  {
    id: 31, name: "Multivariable Calculus", group: "Mathematics",
    resources: [
      { title: "MIT OCW – Multivariable Calculus", channel: "MIT OpenCourseWare", description: "Partial derivatives, multiple integrals, and vector calculus.", url: "https://www.youtube.com/playlist?list=PL4C4C8A7D06566F38" },
      { title: "Khan Academy – Multivariable Calculus", channel: "Khan Academy", description: "Step-by-step multivariable calculus tutorials.", url: "https://www.youtube.com/@khanacademy/playlists" },
      { title: "NPTEL – Multivariable Calculus", channel: "NPTEL", description: "University-level multivariable calculus for engineers.", url: "https://nptel.ac.in/" },
    ],
  },
  {
    id: 32, name: "OE (Open Elective)", group: "Elective",
    resources: [
      { title: "NPTEL Courses", channel: "NPTEL", description: "Wide range of elective courses from IITs and IISc.", url: "https://nptel.ac.in/courses" },
      { title: "Coursera Courses", channel: "Coursera", description: "Online courses from top universities worldwide.", url: "https://www.coursera.org/" },
      { title: "edX Courses", channel: "edX", description: "Open courses from MIT, Harvard, and more.", url: "https://www.edx.org/" },
    ],
  },
  {
    id: 33, name: "Object Oriented Programming", group: "Programming",
    resources: [
      { title: "Neso Academy – OOP", channel: "Neso Academy", description: "OOP concepts: classes, objects, inheritance, and polymorphism.", url: "https://www.youtube.com/@nesoacademy/playlists" },
      { title: "Telusko – Java OOP", channel: "Telusko", description: "Java-based OOP with projects and coding examples.", url: "https://www.youtube.com/@Telusko" },
      { title: "freeCodeCamp – Java Programming", channel: "freeCodeCamp", description: "Full Java programming course with OOP principles.", url: "https://www.youtube.com/watch?v=A74TOX803D0" },
    ],
  },
  {
    id: 34, name: "Object Oriented Programming Lab", group: "Programming",
    resources: [
      { title: "freeCodeCamp – Java Programming Projects", channel: "freeCodeCamp", description: "Java project-based learning for OOP lab practice.", url: "https://www.youtube.com/@freecodecamp/playlists" },
      { title: "Programming with Mosh – Java", channel: "Programming with Mosh", description: "Practical Java programming and OOP implementation.", url: "https://www.youtube.com/@programmingwithmosh" },
      { title: "Telusko Java Projects", channel: "Telusko", description: "Real-world Java projects to practice OOP concepts.", url: "https://www.youtube.com/@Telusko" },
    ],
  },
  {
    id: 35, name: "Operating System Principles and Programming", group: "Core CS",
    resources: [
      { title: "Gate Smashers – Operating System", channel: "Gate Smashers", description: "Processes, threads, scheduling, memory management, and file systems.", url: "https://www.youtube.com/@GateSmashers/playlists" },
      { title: "Neso Academy – Operating System", channel: "Neso Academy", description: "Complete OS course for engineering students and GATE.", url: "https://www.youtube.com/@nesoacademy/playlists" },
      { title: "NPTEL – Operating Systems", channel: "NPTEL", description: "IIT-level operating systems course.", url: "https://nptel.ac.in/courses/106106144" },
    ],
  },
  {
    id: 36, name: "Principles of Compiler Design", group: "Core CS",
    resources: [
      { title: "Gate Smashers – Compiler Design", channel: "Gate Smashers", description: "Lexical analysis, parsing, syntax tree, and code generation.", url: "https://www.youtube.com/@GateSmashers/playlists" },
      { title: "Neso Academy – Compiler Design", channel: "Neso Academy", description: "Compiler design concepts for university and GATE syllabus.", url: "https://www.youtube.com/@nesoacademy/playlists" },
      { title: "NPTEL – Compiler Design", channel: "NPTEL", description: "University-level compiler design course from IIT.", url: "https://nptel.ac.in/" },
    ],
  },
  {
    id: 37, name: "Probability and Statistics", group: "Mathematics",
    resources: [
      { title: "Khan Academy – Statistics and Probability", channel: "Khan Academy", description: "Complete foundation in probability and statistics.", url: "https://www.youtube.com/playlist?list=PL1328115D3D8A2566" },
      { title: "StatQuest – Statistics Playlist", channel: "StatQuest", description: "Best statistics explanations for ML preparation.", url: "https://www.youtube.com/@statquest/playlists" },
      { title: "NPTEL – Probability and Statistics", channel: "NPTEL", description: "Engineering probability and statistics course.", url: "https://nptel.ac.in/" },
    ],
  },
  {
    id: 38, name: "Problem Solving & Analysis", group: "Programming",
    resources: [
      { title: "freeCodeCamp – Programming Problem Solving", channel: "freeCodeCamp", description: "Algorithmic thinking and coding problem solving.", url: "https://www.youtube.com/@freecodecamp/playlists" },
      { title: "Abdul Bari – Algorithms", channel: "Abdul Bari", description: "Logical problem solving foundation through algorithms.", url: "https://www.youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O" },
      { title: "NeetCode – Problem Solving Patterns", channel: "NeetCode", description: "Interview problem solving patterns: sliding window, two pointers, etc.", url: "https://www.youtube.com/@NeetCode/playlists" },
    ],
  },
  {
    id: 39, name: "Professional Aptitude & Logical Reasoning", group: "Aptitude",
    resources: [
      { title: "Neso Academy – Aptitude and Reasoning", channel: "Neso Academy", description: "Aptitude and logical reasoning for placements.", url: "https://www.nesoacademy.org/ot/03-aptitude-and-reasoning" },
      { title: "TalentSprint Aptitude Preparation", channel: "TalentSprint", description: "Company-specific aptitude preparation videos.", url: "https://www.youtube.com/@TalentSprintAptitudePrep" },
      { title: "IndiaBix", channel: "IndiaBix", description: "Extensive placement aptitude practice with solutions.", url: "https://www.indiabix.com/" },
    ],
  },
  {
    id: 40, name: "Single Variable Calculus", group: "Mathematics",
    resources: [
      { title: "3Blue1Brown – Essence of Calculus", channel: "3Blue1Brown", description: "Best visual understanding of calculus fundamentals.", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr" },
      { title: "MIT OCW – Single Variable Calculus", channel: "MIT OpenCourseWare", description: "MIT's single variable calculus university course.", url: "https://www.youtube.com/playlist?list=PL590CCC2BC5AF3BC1" },
      { title: "Khan Academy – Calculus", channel: "Khan Academy", description: "Complete calculus from limits to integration.", url: "https://www.youtube.com/@khanacademy/playlists" },
    ],
  },
  {
    id: 41, name: "Software Engineering", group: "Core CS",
    resources: [
      { title: "Neso Academy – Software Engineering", channel: "Neso Academy", description: "SDLC, Agile, testing, and software design principles.", url: "https://www.youtube.com/@nesoacademy/playlists" },
      { title: "Gate Smashers – Software Engineering", channel: "Gate Smashers", description: "Software engineering for university and GATE examinations.", url: "https://www.youtube.com/@GateSmashers/playlists" },
      { title: "NPTEL – Software Engineering", channel: "NPTEL", description: "IIT-level software engineering course with industry practices.", url: "https://nptel.ac.in/" },
    ],
  },
  {
    id: 42, name: "Web Technologies Lab", group: "Programming",
    resources: [
      { title: "freeCodeCamp – Web Development Full Course", channel: "freeCodeCamp", description: "HTML, CSS, JavaScript, and web development projects.", url: "https://www.youtube.com/@freecodecamp/playlists" },
      { title: "Traversy Media – Web Development", channel: "Traversy Media", description: "Modern web development tutorials and project builds.", url: "https://www.youtube.com/@TraversyMedia/playlists" },
      { title: "The Net Ninja – Web Development", channel: "The Net Ninja", description: "Structured web development courses from basics to frameworks.", url: "https://www.youtube.com/@NetNinja/playlists" },
    ],
  },
  {
    id: 43, name: "Wireless and Mobile Networks", group: "Core CS",
    resources: [
      { title: "NPTEL – Wireless Communication", channel: "NPTEL", description: "Wireless communication fundamentals and mobile networking.", url: "https://nptel.ac.in/" },
      { title: "Gate Smashers – Computer Networks / Wireless", channel: "Gate Smashers", description: "Wireless and mobile network concepts for GATE and university.", url: "https://www.youtube.com/@GateSmashers/playlists" },
      { title: "Neso Academy – Wireless Communication", channel: "Neso Academy", description: "Wireless communication topics for engineering syllabus.", url: "https://www.youtube.com/@nesoacademy/playlists" },
    ],
  },
];

const ALL_GROUPS = ["All", ...Array.from(new Set(subjects.map((s) => s.group)))];

const GROUP_STYLE = {
  "Core CS":    "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  Mathematics:  "bg-violet-500/10 text-violet-400 border-violet-500/20",
  "AI / ML":    "bg-rose-500/10 text-rose-400 border-rose-500/20",
  Data:         "bg-orange-500/10 text-orange-400 border-orange-500/20",
  Programming:  "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Database:     "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  Electrical:   "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  Mechanical:   "bg-stone-500/10 text-stone-400 border-stone-500/20",
  Science:      "bg-teal-500/10 text-teal-400 border-teal-500/20",
  "Soft Skills":"bg-pink-500/10 text-pink-400 border-pink-500/20",
  Aptitude:     "bg-amber-500/10 text-amber-400 border-amber-500/20",
  Cloud:        "bg-sky-500/10 text-sky-400 border-sky-500/20",
  Elective:     "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
};

const getStyle = (g) => GROUP_STYLE[g] || "bg-slate-500/10 text-slate-400 border-slate-500/20";

export default function YouTubeResources() {
  const [activeGroup, setActiveGroup] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState(null);

  const filtered = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return subjects.filter((s) => {
      const groupMatch = activeGroup === "All" || s.group === activeGroup;
      const searchMatch =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.group.toLowerCase().includes(q) ||
        s.resources.some(
          (r) =>
            r.title.toLowerCase().includes(q) ||
            r.channel.toLowerCase().includes(q)
        );
      return groupMatch && searchMatch;
    });
  }, [activeGroup, searchQuery]);

  return (
    <div className="space-y-8">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-[28px] border border-white/5 bg-slate-950/40 p-8 shadow-2xl">
        <div className="absolute right-0 top-0 -mr-16 -mt-16 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
        <div className="absolute left-0 bottom-0 -ml-16 -mb-16 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 text-[10px] font-extrabold text-cyan-400 uppercase tracking-wider mb-4">
            <BookOpen className="h-3.5 w-3.5" />
            43 Subjects · 129 Curated Resources
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
            YouTube Study Resources
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-400 leading-relaxed">
            Hand-picked playlists &amp; courses for every subject in your engineering curriculum — organised <span className="text-white font-semibold">subject-wise</span>.
          </p>
        </div>
      </section>

      {/* ── Search ────────────────────────────────────────────────────────── */}
      <div className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
        <input
          type="text"
          placeholder="Search subjects, channels…"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-2xl border border-white/10 bg-slate-950/60 py-3.5 pl-11 pr-10 text-sm text-white placeholder:text-slate-500 outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 text-xl leading-none"
          >
            ×
          </button>
        )}
      </div>

      {/* ── Group Filter ──────────────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2">
        {ALL_GROUPS.map((g) => (
          <button
            key={g}
            onClick={() => setActiveGroup(g)}
            className={`rounded-xl px-4 py-2 text-xs font-semibold border transition-all duration-150 ${
              activeGroup === g
                ? "bg-white/10 text-white border-white/20 shadow"
                : "bg-slate-950/40 text-slate-400 border-white/5 hover:bg-white/5 hover:text-slate-200"
            }`}
          >
            {g}
          </button>
        ))}
      </div>

      {/* ── Count ─────────────────────────────────────────────────────────── */}
      <p className="text-xs text-slate-500">
        Showing{" "}
        <span className="font-bold text-slate-300">{filtered.length}</span>{" "}
        subject{filtered.length !== 1 ? "s" : ""}
        {activeGroup !== "All" && (
          <> in <span className="font-bold text-slate-300">{activeGroup}</span></>
        )}
        {searchQuery && (
          <> matching "<span className="font-bold text-slate-300">{searchQuery}</span>"</>
        )}
      </p>

      {/* ── Cards ─────────────────────────────────────────────────────────── */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 bg-slate-950/20 py-20 text-center">
          <Search className="mb-4 h-10 w-10 text-slate-600" />
          <p className="text-slate-400 font-medium">No subjects match your search.</p>
          <button
            onClick={() => { setSearchQuery(""); setActiveGroup("All"); }}
            className="mt-4 rounded-xl bg-white/10 px-5 py-2 text-sm font-semibold text-white hover:bg-white/20 transition"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((subject) => {
            const isOpen = expandedId === subject.id;
            const style = getStyle(subject.group);
            return (
              <div
                key={subject.id}
                className="flex flex-col rounded-2xl border border-white/5 bg-slate-950/40 overflow-hidden transition-all duration-200 hover:border-white/10 hover:shadow-lg hover:shadow-black/30"
              >
                {/* Card Header — click to expand */}
                <button
                  onClick={() => setExpandedId(isOpen ? null : subject.id)}
                  className="flex w-full items-start justify-between gap-3 p-5 text-left"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className={`inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${style}`}>
                        {subject.group}
                      </span>
                      <span className="text-[10px] font-medium text-slate-600">#{subject.id}</span>
                    </div>
                    <h3 className="text-sm font-bold text-white leading-snug">{subject.name}</h3>
                    <p className="mt-1 text-[11px] text-slate-500">{subject.resources.length} resources</p>
                  </div>
                  <ChevronRight
                    className={`mt-0.5 h-4 w-4 flex-shrink-0 text-slate-500 transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`}
                  />
                </button>

                {/* Expanded Resources */}
                {isOpen && (
                  <div className="border-t border-white/5 bg-black/20 px-4 pb-4 pt-3 space-y-3">
                    {subject.resources.map((res, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl border border-white/5 bg-slate-950/60 p-4"
                      >
                        <p className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider mb-0.5">
                          {res.channel}
                        </p>
                        <p className="text-xs font-semibold text-white leading-snug">{res.title}</p>
                        <p className="mt-1 text-[11px] text-slate-400 leading-relaxed">{res.description}</p>
                        <a
                          href={res.url}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 text-[11px] font-bold text-cyan-400 hover:bg-cyan-500/20 transition"
                        >
                          <Play className="h-3 w-3" />
                          Open Resource
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
