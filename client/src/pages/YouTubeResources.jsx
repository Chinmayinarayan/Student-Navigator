import React, { useState, useMemo } from "react";
import { ExternalLink, Play, Search, BookOpen, ChevronRight } from "lucide-react";

// ─── Subject Data ─────────────────────────────────────────────────────────────
const subjects = [
  {
    id: 1, name: "Algorithms", group: "Core CS",
    resources: [
  {
    "title": "Abdul Bari – Algorithms Playlist",
    "channel": "Abdul Bari",
    "description": "Algorithm fundamentals, sorting, searching, greedy, DP, graphs.",
    "url": "https://www.youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O"
  },
  {
    "title": "MIT OpenCourseWare – Introduction to Algorithms",
    "channel": "MIT OpenCourseWare",
    "description": "University-level algorithms course by MIT faculty.",
    "url": "https://www.youtube.com/playlist?list=PLUl4u3cNGP63EdVPNLG3ToM6LaEUuStEY"
  },
  {
    "title": "Gate Smashers",
    "channel": "Gate Smashers",
    "description": "Best DAA playlist for university and GATE exams.",
    "url": "https://www.youtube.com/playlist?list=PLxCzCOWd7aiHcmS4i14bI0VrMbZTUvlTa"
  },
  {
    "title": "FreeCodeCamp",
    "channel": "freeCodeCamp",
    "description": "Comprehensive introduction to algorithms and complexity analysis.",
    "url": "https://www.youtube.com/watch?v=8hly31xKli0&t=7s"
  }
],
  },
  {
    id: 2, name: "Applied Physics Lab", group: "Science",
    resources: [
  {
    "title": "Virtual Labs (IIT)",
    "channel": "IIT Delhi",
    "description": "Physics experiment simulations and theoretical concepts.",
    "url": "https://www.vlab.co.in/participating-institute-iit-delhi"
  },
  {
    "title": "NPTEL – Engineering Physics",
    "channel": "NPTEL",
    "description": "Complete university syllabus and lectures on engineering physics.",
    "url": "https://www.youtube.com/playlist?list=PLajrVxcKRJ5f4a7cJ-MetbIdZ64_5Sci-"
  },
  {
    "title": "Physics Practical Experiments",
    "channel": "Practical Physics",
    "description": "Laboratory demonstrations and practical guidance.",
    "url": "https://www.youtube.com/playlist?list=PL_u2iJUox0XoWRHV2lluPBqLam_psaA8u"
  }
],
  },
  {
    id: 3, name: "Arithmetical Thinking & Analytical Reasoning", group: "Aptitude",
    resources: [
  {
    "title": "Neso Academy – Aptitude and Reasoning (Playlist 1)",
    "channel": "Neso Academy",
    "description": "Quantitative aptitude, number systems, and reasoning basics.",
    "url": "https://www.youtube.com/playlist?list=PLBlnK6fEyqRhMP7gwIe2j0hb1PCvYn0RI"
  },
  {
    "title": "Neso Academy – Aptitude and Reasoning (Playlist 2)",
    "channel": "Neso Academy",
    "description": "Analytical reasoning, puzzles, and pattern matching.",
    "url": "https://www.youtube.com/playlist?list=PLBlnK6fEyqRiUM_jYiNhhP9JrlWuHcNXF"
  },
  {
    "title": "IndiaBix Aptitude",
    "channel": "IndiaBix",
    "description": "Practice problems and test preparation portal.",
    "url": "https://www.indiabix.com/"
  },
  {
    "title": "NTS TEST MASTER",
    "channel": "NTS Test Master",
    "description": "Placement test preparation and shortcut methods.",
    "url": "https://www.youtube.com/playlist?list=PLc0F1Xt49RmZ3xWa3FYWmAqPgpjIbXFAo"
  },
  {
    "title": "Career Ride",
    "channel": "Career Ride",
    "description": "Competitive exam coaching and aptitude tutorials.",
    "url": "https://www.youtube.com/playlist?list=PLpyc33gOcbVADMKqylI__O_O_RMeHTyNK"
  },
  {
    "title": "TalentSprint Aptitude Preparation",
    "channel": "TalentSprint",
    "description": "Company placement and aptitude readiness.",
    "url": "https://www.youtube.com/@TalentSprintAptitudePrep"
  }
],
  },
  {
    id: 4, name: "Artificial Intelligence and Machine Learning", group: "AI / ML",
    resources: [
  {
    "title": "FreeCodeCamp",
    "channel": "freeCodeCamp",
    "description": "Introduction to artificial intelligence and machine learning basics.",
    "url": "https://www.youtube.com/watch?v=5NgNicANyqM"
  },
  {
    "title": "Programming with mosh – Machine Learning with Python",
    "channel": "Programming with Mosh",
    "description": "Step-by-step introduction to ML with Python libraries.",
    "url": "https://www.youtube.com/watch?v=7eh4d6sabA0"
  },
  {
    "title": "Krish Naik – Machine Learning Playlist",
    "channel": "Krish Naik",
    "description": "Industry-aligned machine learning and end-to-end projects.",
    "url": "https://www.youtube.com/playlist?list=PLZoTAELRMXVPBTrWtJkn3wWQxZkmTXGwe"
  },
  {
    "title": "StatQuest – Machine Learning Playlist",
    "channel": "StatQuest",
    "description": "Highly visual, conceptual explanations of ML theory.",
    "url": "https://www.youtube.com/playlist?list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF"
  },
  {
    "title": "Apna College",
    "channel": "Apna College",
    "description": "Beginner-friendly machine learning introduction and overview.",
    "url": "https://www.youtube.com/watch?v=D1eL1EnxXXQ&t=2s"
  }
],
  },
  {
    id: 5, name: "Basic Electrical Engineering", group: "Electrical",
    resources: [
  {
    "title": "Neso Academy – Basic Electrical Engineering",
    "channel": "Neso Academy",
    "description": "Complete university syllabus on electrical engineering basics.",
    "url": "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgLR-hMp7wem-bdVN1iEhsh"
  },
  {
    "title": "Gate Smashers – Electrical Engineering Basics",
    "channel": "Gate Smashers",
    "description": "Fundamental concepts for GATE and college exams.",
    "url": "https://www.youtube.com/playlist?list=PL9RcWoqXmzaLTYUdnzKhF4bYug3GjGcEc"
  },
  {
    "title": "Engineers ki Pathshala by Umesh Dhande",
    "channel": "Engineers ki Pathshala",
    "description": "Comprehensive basic electrical concepts and tutorials.",
    "url": "https://www.youtube.com/playlist?list=PL9RcWoqXmzaLTYUdnzKhF4bYug3GjGcEc"
  },
  {
    "title": "NPTEL – Basic Electrical Technology",
    "channel": "NPTEL",
    "description": "IIT faculty lectures on basic electrical technologies.",
    "url": "https://www.youtube.com/playlist?list=PL425060D3C78350E1"
  },
  {
    "title": "The Engineering Mindset",
    "channel": "The Engineering Mindset",
    "description": "Interactive animations explaining electrical components.",
    "url": "https://www.youtube.com/playlist?list=PLWv9VM947MKi_7yJ0_FCfzTBXpQU-Qd3K"
  }
],
  },
  {
    id: 6, name: "Basic Electronics", group: "Electrical",
    resources: [
  {
    "title": "Neso Academy – Electronic Devices and Circuits",
    "channel": "Neso Academy",
    "description": "Diodes, transistors, amplifiers, and digital circuits.",
    "url": "https://www.youtube.com/playlist?list=PLBlnK6fEyqRiw-GZRqfnlVIBz9dxrqHJS"
  },
  {
    "title": "Gautam Varde",
    "channel": "Gautam Varde",
    "description": "Core concepts in basic electronics and circuit design.",
    "url": "https://www.youtube.com/playlist?list=PL3qvHcrYGy1uF5KAGntUITTJ85Dm3Dtdy"
  },
  {
    "title": "Gate Smashers – Digital Electronics",
    "channel": "Gate Smashers",
    "description": "Digital logic, number systems, and logic gates.",
    "url": "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGmXg4NoX6R31AsC5LeCPHe"
  },
  {
    "title": "All About Electronics",
    "channel": "All About Electronics",
    "description": "Detailed explanations of electronics with circuit diagrams.",
    "url": "https://www.youtube.com/playlist?list=PLwjK_iyK4LLBC_so3odA64E2MLgIRKafl"
  },
  {
    "title": "Core - Basic Electronics - Prof T.S.Natarajan nptelhrd",
    "channel": "NPTEL",
    "description": "Comprehensive basic electronics lectures from IIT Madras.",
    "url": "https://www.youtube.com/playlist?list=PL7987F30C41A9ADCB"
  }
],
  },
  {
    id: 7, name: "Basic Mechanical Engineering", group: "Mechanical",
    resources: [
  {
    "title": "NPTEL – Engineering Mechanics / Mechanical Basics",
    "channel": "NPTEL",
    "description": "IIT-quality course on engineering mechanics and design.",
    "url": "https://nptel.ac.in/courses/112106286"
  },
  {
    "title": "Education Point Online",
    "channel": "Education Point",
    "description": "Mechanical engineering basics and theoretical explanations.",
    "url": "https://www.youtube.com/playlist?list=PLg2LVpcRrOF7L4FknzcfxrnMin-03WUHs"
  },
  {
    "title": "Gate Academy – Mechanical Engineering",
    "channel": "Gate Academy",
    "description": "Basic mechanical engineering concepts for GATE prep.",
    "url": "https://www.youtube.com/playlist?list=PLNyPK_sfNdSQVQgc9B4DP9qPVlYmAmTRE"
  },
  {
    "title": "Gate Wallah",
    "channel": "Gate Wallah",
    "description": "Complete university and competitive mechanical syllabus.",
    "url": "https://www.youtube.com/playlist?list=PLPvaSRcEQh4lfyQYKBRuTiLekgVIw2jvC"
  },
  {
    "title": "Gautam Varde",
    "channel": "Gautam Varde",
    "description": "Mechanical systems, components, and practical insights.",
    "url": "https://www.youtube.com/playlist?list=PL3qvHcrYGy1vwJlwY2uLfEzqr3vM0Ye-O"
  }
],
  },
  {
    id: 8, name: "Big Data Analytics", group: "Data",
    resources: [
  {
    "title": "edureka! (1)",
    "channel": "Edureka",
    "description": "Introduction to Hadoop, MapReduce, and big data architecture.",
    "url": "https://www.youtube.com/watch?v=1vbXmCrkT3Y"
  },
  {
    "title": "edureka! (2)",
    "channel": "Edureka",
    "description": "In-depth Big Data and Hadoop complete tutorial.",
    "url": "https://www.youtube.com/watch?v=1vbXmCrkT3Y&t=157s"
  },
  {
    "title": "Gate Smashers",
    "channel": "Gate Smashers",
    "description": "Big Data analytics concepts for college examinations.",
    "url": "https://www.youtube.com/playlist?list=PLxCzCOWd7aiHUUi6ZlansKbDw_cXut0El"
  },
  {
    "title": "Simplilearn",
    "channel": "Simplilearn",
    "description": "Professional training course on Big Data concepts.",
    "url": "https://www.youtube.com/playlist?list=PLEiEAq2VkUUJqp1k-g5W1mo37urJQOdCZ"
  },
  {
    "title": "WsCube Tech",
    "channel": "WsCube Tech",
    "description": "Step-by-step Big Data tutorials and applications.",
    "url": "https://www.youtube.com/playlist?list=PLjVLYmrlmjGdRs1sGqRrTE-EMraLclJga"
  }
],
  },
  {
    id: 9, name: "C Programming for Problem Solving", group: "Programming",
    resources: [
  {
    "title": "Neso Academy – C Programming Playlist",
    "channel": "Neso Academy",
    "description": "Complete C language guide with logic and code examples.",
    "url": "https://www.youtube.com/playlist?list=PLBlnK6fEyqRggZZgYpPMUxdY1CYkZtARR"
  },
  {
    "title": "Jenny's Lectures CS/IT – C Programming",
    "channel": "Jenny's Lectures",
    "description": "Step-by-step programming tutorials with memory mapping.",
    "url": "https://www.youtube.com/playlist?list=PLdo5W4Nhv31a8UcMN9-35ghv8qyFWD9_S"
  },
  {
    "title": "Apna College",
    "channel": "Apna College",
    "description": "Beginner C programming and problem-solving crash course.",
    "url": "https://www.youtube.com/watch?v=irqbmMNs2Bo&t=1s"
  },
  {
    "title": "CodeWithHarry",
    "channel": "CodeWithHarry",
    "description": "Full C programming course with notes and exercises.",
    "url": "https://www.youtube.com/watch?v=aZb0iu4uGwA"
  },
  {
    "title": "College Wallah",
    "channel": "College Wallah",
    "description": "C programming logic building and code execution.",
    "url": "https://www.youtube.com/playlist?list=PLxgZQoSe9cg1drBnejUaDD9GEJBGQ5hMt"
  },
  {
    "title": "freeCodeCamp – C Programming Full Course",
    "channel": "freeCodeCamp",
    "description": "Complete C tutorial with practical challenges.",
    "url": "https://www.youtube.com/watch?v=KJgsSFOSQv0&t=8s"
  },
  {
    "title": "Learn Coding",
    "channel": "Learn Coding",
    "description": "Short and effective C coding tutorials.",
    "url": "https://www.youtube.com/watch?v=VSEnzzjAm0c"
  }
],
  },
  {
    id: 10, name: "Cloud Computing", group: "Cloud",
    resources: [
  {
    "title": "freeCodeCamp – Cloud Computing Course",
    "channel": "freeCodeCamp",
    "description": "Cloud fundamentals, deployment, and service models.",
    "url": "https://www.youtube.com/watch?v=NhDYbskXRgc&t=11s"
  },
  {
    "title": "Neso Academy – Computer Networks",
    "channel": "Neso Academy",
    "description": "Computer networks foundation necessary for cloud concepts.",
    "url": "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx"
  },
  {
    "title": "AWS Training – Cloud Practitioner",
    "channel": "AWS Training",
    "description": "Official AWS certification course for practitioners.",
    "url": "https://www.youtube.com/@AWSTraining"
  },
  {
    "title": "Simplilearn",
    "channel": "Simplilearn",
    "description": "Enterprise-level introduction to AWS and cloud architectures.",
    "url": "https://www.youtube.com/playlist?list=PLEiEAq2VkUUIJ3o1tehvtux0_Ynf42CBN"
  },
  {
    "title": "GateSmashers",
    "channel": "Gate Smashers",
    "description": "Cloud computing and distributed systems for university exams.",
    "url": "https://www.youtube.com/playlist?list=PLxCzCOWd7aiHRHVUtR-O52MsrdUSrzuy4"
  },
  {
    "title": "edureka!",
    "channel": "Edureka",
    "description": "Comprehensive cloud technologies and deployment frameworks.",
    "url": "https://www.youtube.com/playlist?list=PL9ooVrP1hQOFtZ5oAAeOgi_nH-txMcDMu"
  }
],
  },
  {
    id: 11, name: "Computer Networks", group: "Core CS",
    resources: [
      {
    "title": "Neso Academy – Computer Networks Playlist",
    "channel": "Neso Academy",
    "description": "YouTube video tutorials for Computer Networks.",
    "url": "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx"
  },
  {
    "title": "Gate Smashers – Computer Networks",
    "channel": "Gate Smashers",
    "description": "YouTube video tutorials for Computer Networks.",
    "url": "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_"
  },
  {
    "title": "FreeCodeCamp",
    "channel": "freeCodeCamp",
    "description": "YouTube video tutorials for Computer Networks.",
    "url": "https://www.youtube.com/watch?v=qiQR5rTSshw"
  },
  {
    "title": "Kunal Kushwaha",
    "channel": "Kunal Kushwaha",
    "description": "YouTube video tutorials for Computer Networks.",
    "url": "https://www.youtube.com/watch?v=IPvYjXCsTg8"
  },
  {
    "title": "NPTEL – Computer Networks",
    "channel": "NPTEL",
    "description": "YouTube video tutorials for Computer Networks.",
    "url": "https://nptel.ac.in/courses/106105183"
  }
    
    ],
  },
  {
    id: 12, name: "Computer Networks Lab", group: "Core CS",
    resources: [
      {
    "title": "Cisco Networking Academy",
    "channel": "Cisco NetAcad",
    "description": "YouTube video tutorials for Computer Networks Lab.",
    "url": "https://www.netacad.com/cisco-packet-tracer"
  },
  {
    "title": "Practical Networking",
    "channel": "Practical Networking",
    "description": "YouTube video tutorials for Computer Networks Lab.",
    "url": "https://www.youtube.com/@PracticalNetworking"
  },
  {
    "title": "Neso Academy – Computer Networks",
    "channel": "Neso Academy",
    "description": "YouTube video tutorials for Computer Networks Lab.",
    "url": "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx"
  }
    
    ],
  },
  {
    id: 13, name: "Computer Organization and Architecture", group: "Core CS",
    resources: [
      {
    "title": "Neso Academy – Computer Organization Playlist",
    "channel": "Neso Academy",
    "description": "YouTube video tutorials for Computer Organization and Architecture.",
    "url": "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgLLlzdgiTUKULKJPYc0A4q"
  },
  {
    "title": "Gate Smashers – Computer Organization",
    "channel": "Gate Smashers",
    "description": "YouTube video tutorials for Computer Organization and Architecture.",
    "url": "https://www.youtube.com/playlist?list=PLxCzCOWd7aiHMonh3G6QNKq53C6oNXGrX"
  },
  {
    "title": "NPTEL – Computer Organization",
    "channel": "NPTEL",
    "description": "YouTube video tutorials for Computer Organization and Architecture.",
    "url": "https://nptel.ac.in/courses/106103068"
  },
  {
    "title": "Sudhakar Atchala",
    "channel": "Sudhakar Atchala",
    "description": "YouTube video tutorials for Computer Organization and Architecture.",
    "url": "https://www.youtube.com/playlist?list=PLXj4XH7LcRfDXDRzSLv1FfZ-SSA38SiC0"
  },
  {
    "title": "KnowledgeGATE",
    "channel": "Knowledge Gate",
    "description": "YouTube video tutorials for Computer Organization and Architecture.",
    "url": "https://www.youtube.com/playlist?list=PLmXKhU9FNesS4B30OmgxP7nrzq1UhiMiv"
  }
    
    ],
  },
  {
    id: 14, name: "Corporate Communication", group: "Soft Skills",
    resources: [
      {
    "title": "NPTEL – Soft Skills / Communication Skills",
    "channel": "NPTEL",
    "description": "YouTube video tutorials for Corporate Communication.",
    "url": "https://nptel.ac.in/courses/109104031"
  },
  {
    "title": "English with Lucy – Communication Skills",
    "channel": "English with Lucy",
    "description": "YouTube video tutorials for Corporate Communication.",
    "url": "https://www.youtube.com/@EnglishwithLucy"
  },
  {
    "title": "Toastmasters International – Communication Skills",
    "channel": "Toastmasters International",
    "description": "YouTube video tutorials for Corporate Communication.",
    "url": "https://www.youtube.com/@toastmasters"
  }
    
    ],
  },
  {
    id: 15, name: "Cryptography & Network Security", group: "Core CS",
    resources: [
      {
    "title": "Neso Academy – Cryptography Playlist",
    "channel": "Neso Academy",
    "description": "YouTube video tutorials for Cryptography & Network Security.",
    "url": "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgJU3EsOYDTW7m6SUmW6kII"
  },
  {
    "title": "Gate Smashers – Cryptography & Network Security",
    "channel": "Gate Smashers",
    "description": "YouTube video tutorials for Cryptography & Network Security.",
    "url": "https://www.youtube.com/playlist?list=PLxCzCOWd7aiFjkQbGj_yHeTEVPn422_z5"
  },
  {
    "title": "simplilearn",
    "channel": "Simplilearn",
    "description": "YouTube video tutorials for Cryptography & Network Security.",
    "url": "https://www.youtube.com/watch?v=C7vmouDOJYM"
  },
  {
    "title": "NPTEL – Cryptography and Network Security",
    "channel": "NPTEL",
    "description": "YouTube video tutorials for Cryptography & Network Security.",
    "url": "https://nptel.ac.in/courses/106105031"
  }
    
    ],
  },
  {
    id: 16, name: "Data Structures and Algorithms", group: "Core CS",
    resources: [
      {
    "title": "Abdul Bari – Data Structures & Algorithms",
    "channel": "Abdul Bari",
    "description": "YouTube video tutorials for Data Structures and Algorithms.",
    "url": "https://www.youtube.com/playlist?list=PLsr8vTgyLdy_YndxNcI4WkH5Vorj5qvrv"
  },
  {
    "title": "Striver – A2Z DSA Course",
    "channel": "takeUforward",
    "description": "YouTube video tutorials for Data Structures and Algorithms.",
    "url": "https://www.youtube.com/playlist?list=PLgUwDviBIf0oF6nyAVArG1di-0dxBYIy9"
  },
  {
    "title": "Neso Academy – Data Structures",
    "channel": "Neso Academy",
    "description": "YouTube video tutorials for Data Structures and Algorithms.",
    "url": "https://www.youtube.com/playlist?list=PLBlnK6fEyqRj9lld8sWIUNwlKfdUoPd1Y"
  },
  {
    "title": "freeCodeCamp",
    "channel": "freeCodeCamp",
    "description": "YouTube video tutorials for Data Structures and Algorithms.",
    "url": "https://www.youtube.com/watch?v=8hly31xKli0&t=21s"
  },
  {
    "title": "CodeWithHarry",
    "channel": "CodeWithHarry",
    "description": "YouTube video tutorials for Data Structures and Algorithms.",
    "url": "https://www.youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi"
  },
  {
    "title": "Jenny's Lectures CS IT",
    "channel": "Jenny's Lectures",
    "description": "YouTube video tutorials for Data Structures and Algorithms.",
    "url": "https://www.youtube.com/playlist?list=PLdo5W4Nhv31bbKJzrsKfMpo_grxuLl8LU"
  },
  {
    "title": "Apna College",
    "channel": "Apna College",
    "description": "YouTube video tutorials for Data Structures and Algorithms.",
    "url": "https://www.youtube.com/playlist?list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt"
  },
  {
    "title": "GateSmashers",
    "channel": "Gate Smashers",
    "description": "YouTube video tutorials for Data Structures and Algorithms.",
    "url": "https://www.youtube.com/playlist?list=PLxCzCOWd7aiEwaANNt3OqJPVIxwp2ebiT"
  }
    
    ],
  },
  {
    id: 17, name: "Database Applications Lab", group: "Database",
    resources: [
      {
    "title": "SQLBolt – Interactive SQL Practice",
    "channel": "SQLBolt",
    "description": "YouTube video tutorials for Database Applications Lab.",
    "url": "https://sqlbolt.com/"
  },
  {
    "title": "freeCodeCamp – SQL Full Course",
    "channel": "freeCodeCamp",
    "description": "YouTube video tutorials for Database Applications Lab.",
    "url": "https://www.youtube.com/watch?v=HXV3zeQKqGY"
  },
  {
    "title": "Great Learning",
    "channel": "Great Learning",
    "description": "YouTube video tutorials for Database Applications Lab.",
    "url": "https://www.youtube.com/watch?v=ObbNGhcxXJA&t=2s"
  },
  {
    "title": "ApnaCollege",
    "channel": "Apna College",
    "description": "YouTube video tutorials for Database Applications Lab.",
    "url": "https://www.youtube.com/watch?v=hlGoQC332VM"
  }
    
    ],
  },
  {
    id: 18, name: "Database Management System", group: "Database",
    resources: [
      {
    "title": "Gate Smashers – DBMS Playlist",
    "channel": "Gate Smashers",
    "description": "YouTube video tutorials for Database Management System.",
    "url": "https://www.youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y"
  },
  {
    "title": "Neso Academy – DBMS",
    "channel": "Neso Academy",
    "description": "YouTube video tutorials for Database Management System.",
    "url": "https://www.youtube.com/playlist?list=PLBlnK6fEyqRiyryTrbKHX1Sh9luYI0dhX"
  },
  {
    "title": "NPTEL – Database Management Systems",
    "channel": "NPTEL",
    "description": "YouTube video tutorials for Database Management System.",
    "url": "https://nptel.ac.in/courses/106106093"
  },
  {
    "title": "Jenny's Lectures CS IT",
    "channel": "Jenny's Lectures",
    "description": "YouTube video tutorials for Database Management System.",
    "url": "https://www.youtube.com/playlist?list=PLdo5W4Nhv31b33kF46f9aFjoJPOkdlsRc"
  },
  {
    "title": "KnowledgeGATE by Sanchit Sir",
    "channel": "Knowledge Gate",
    "description": "YouTube video tutorials for Database Management System.",
    "url": "https://www.youtube.com/watch?v=YRnjGeQbsHQ"
  }
    
    ],
  },
  {
    id: 19, name: "Design Thinking for Social Innovation", group: "Soft Skills",
    resources: [
      {
    "title": "Stanford d.school – Design Thinking",
    "channel": "Stanford d.school",
    "description": "YouTube video tutorials for Design Thinking for Social Innovation.",
    "url": "https://dschool.stanford.edu/resources"
  },
  {
    "title": "IDEO Design Thinking",
    "channel": "IDEO U",
    "description": "YouTube video tutorials for Design Thinking for Social Innovation.",
    "url": "https://www.youtube.com/@ideoulearn"
  },
  {
    "title": "AJ&Smart – Design Thinking Process",
    "channel": "AJ&Smart",
    "description": "YouTube video tutorials for Design Thinking for Social Innovation.",
    "url": "https://www.youtube.com/@AJSmart"
  }
    
    ],
  },
  {
    id: 20, name: "Design and Analysis of Algorithms", group: "Core CS",
    resources: [
      {
    "title": "Abdul Bari – Algorithms",
    "channel": "Abdul Bari",
    "description": "YouTube video tutorials for Design and Analysis of Algorithms.",
    "url": "https://www.youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O"
  },
  {
    "title": "Gate Smashers – DAA",
    "channel": "Gate Smashers",
    "description": "YouTube video tutorials for Design and Analysis of Algorithms.",
    "url": "https://www.youtube.com/playlist?list=PLxCzCOWd7aiHcmS4i14bI0VrMbZTUvlTa"
  },
  {
    "title": "NPTEL – Design and Analysis of Algorithms",
    "channel": "NPTEL",
    "description": "YouTube video tutorials for Design and Analysis of Algorithms.",
    "url": "https://nptel.ac.in/courses/106101060"
  },
  {
    "title": "Neso Academy",
    "channel": "Neso Academy",
    "description": "YouTube video tutorials for Design and Analysis of Algorithms.",
    "url": "https://www.youtube.com/playlist?list=PLBlnK6fEyqRhoF3cPp0mgOZPuXeu84nAd"
  }
    
    ],
  },
  {
    id: 21, name: "Discrete Mathematics", group: "Mathematics",
    resources: [
      {
    "title": "Neso Academy – Discrete Mathematics Playlist",
    "channel": "Neso Academy",
    "description": "YouTube video tutorials for Discrete Mathematics.",
    "url": "https://www.youtube.com/playlist?list=PLBlnK6fEyqRhqJPDXcvYlLfXPh37L89g3"
  },
  {
    "title": "Gate Smashers – Discrete Mathematics",
    "channel": "Gate Smashers",
    "description": "YouTube video tutorials for Discrete Mathematics.",
    "url": "https://www.youtube.com/playlist?list=PLxCzCOWd7aiH2wwES9vPWsEL6ipTaUSl3"
  },
  {
    "title": "Kimberly Brehm",
    "channel": "Kimberly Brehm",
    "description": "YouTube video tutorials for Discrete Mathematics.",
    "url": "https://www.youtube.com/playlist?list=PLl-gb0E4MII28GykmtuBXNUNoej-vY5Rz"
  },
  {
    "title": "Pradeep Giri Academy",
    "channel": "Pradeep Giri Academy",
    "description": "YouTube video tutorials for Discrete Mathematics.",
    "url": "https://www.youtube.com/playlist?list=PLT3bOBUU3L9j_VG5CICyWK_a4M0-nwwxy"
  },
  {
    "title": "NPTEL – Discrete Mathematics",
    "channel": "NPTEL",
    "description": "YouTube video tutorials for Discrete Mathematics.",
    "url": "https://nptel.ac.in/courses/111107058"
  }
    
    ],
  },
  {
    id: 22, name: "Embedded Systems and IoT", group: "Electrical",
    resources: [
      {
    "title": "NPTEL – Embedded Systems",
    "channel": "NPTEL",
    "description": "YouTube video tutorials for Embedded Systems and IoT.",
    "url": "https://nptel.ac.in/courses/108102045"
  },
  {
    "title": "Great Learning – IoT Full Course",
    "channel": "Great Learning",
    "description": "YouTube video tutorials for Embedded Systems and IoT.",
    "url": "https://www.youtube.com/watch?v=T-S0_R_J3pU"
  },
  {
    "title": "freeCodeCamp – IoT Course",
    "channel": "freeCodeCamp",
    "description": "YouTube video tutorials for Embedded Systems and IoT.",
    "url": "https://www.youtube.com/watch?v=eidD14dXW8s"
  },
  {
    "title": "Simplilearn",
    "channel": "Simplilearn",
    "description": "YouTube video tutorials for Embedded Systems and IoT.",
    "url": "https://www.youtube.com/playlist?list=PLEiEAq2VkUUImmTXP_YC2j5qIGOV9NPLy"
  },
  {
    "title": "edureka!",
    "channel": "Edureka",
    "description": "YouTube video tutorials for Embedded Systems and IoT.",
    "url": "https://www.youtube.com/playlist?list=PL9ooVrP1hQOGccfBbP5tJWZ1hv5sIUWJl"
  }
    
    ],
  },
  {
    id: 23, name: "Engineering Chemistry", group: "Science",
    resources: [
      {
    "title": "NPTEL – Engineering Chemistry",
    "channel": "NPTEL",
    "description": "YouTube video tutorials for Engineering Chemistry.",
    "url": "https://nptel.ac.in/courses/122106028"
  },
  {
    "title": "Last Moment Tuitions – Engineering Chemistry",
    "channel": "Last Moment Tuitions",
    "description": "YouTube video tutorials for Engineering Chemistry.",
    "url": "https://www.youtube.com/playlist?list=PL7IhposCM6bVt3xn0pU8ZjnATp9YsFXOt"
  },
  {
    "title": "Education Point Online",
    "channel": "Education Point Online",
    "description": "YouTube video tutorials for Engineering Chemistry.",
    "url": "https://www.youtube.com/playlist?list=PLg2LVpcRrOF6Sn9UO_1Yict2fJYKuQQHN"
  },
  {
    "title": "Pradeep Giri Academy (Playlist 1)",
    "channel": "Pradeep Giri Academy",
    "description": "YouTube video tutorials for Engineering Chemistry.",
    "url": "https://www.youtube.com/playlist?list=PLT3bOBUU3L9jAWUXENWkXVomQmmqsQiLH"
  },
  {
    "title": "Pradeep Giri Academy (Playlist 2)",
    "channel": "Pradeep Giri Academy",
    "description": "YouTube video tutorials for Engineering Chemistry.",
    "url": "https://www.youtube.com/playlist?list=PLT3bOBUU3L9jB7qJkp5qn35021QUBC8xP"
  },
  {
    "title": "Chem Rankers",
    "channel": "Chem Rankers",
    "description": "YouTube video tutorials for Engineering Chemistry.",
    "url": "https://www.youtube.com/playlist?list=PLW1Y7Rfg4m8Jhs-s_VfYWgWzwTqYUvxJb"
  }
    
    ],
  },
  {
    id: 24, name: "Engineering Exploration", group: "Science",
    resources: [
      {
    "title": "Stanford d.school – Design Thinking",
    "channel": "Stanford d.school",
    "description": "YouTube video tutorials for Engineering Exploration.",
    "url": "https://dschool.stanford.edu/resources"
  },
  {
    "title": "IDEO Design Thinking",
    "channel": "IDEO U",
    "description": "YouTube video tutorials for Engineering Exploration.",
    "url": "https://www.youtube.com/@ideoulearn"
  }
    
    ],
  },
  {
    id: 25, name: "Engineering Mechanics", group: "Mechanical",
    resources: [
      {
    "title": "NPTEL – Engineering Mechanics",
    "channel": "NPTEL",
    "description": "YouTube video tutorials for Engineering Mechanics.",
    "url": "https://www.youtube.com/playlist?list=PLyqSpQzTE6M_MEUdn1izTMB2yZgP1NLfs"
  },
  {
    "title": "Pradeep Giri Academy",
    "channel": "Pradeep Giri Academy",
    "description": "YouTube video tutorials for Engineering Mechanics.",
    "url": "https://www.youtube.com/playlist?list=PLT3bOBUU3L9hADhGPsZjSddwAC3BvJDnl"
  },
  {
    "title": "GATE Wallah (English)",
    "channel": "GATE Wallah",
    "description": "YouTube video tutorials for Engineering Mechanics.",
    "url": "https://www.youtube.com/playlist?list=PLPvaSRcEQh4lfyQYKBRuTiLekgVIw2jvC"
  }
    
    ],
  },
  {
    id: 26, name: "Engineering Physics", group: "Science",
    resources: [
      {
    "title": "NPTEL – Engineering Physics",
    "channel": "NPTEL",
    "description": "YouTube video tutorials for Engineering Physics.",
    "url": "https://nptel.ac.in/courses/122104016"
  },
  {
    "title": "Neso Academy – Engineering Physics",
    "channel": "Neso Academy",
    "description": "YouTube video tutorials for Engineering Physics.",
    "url": "https://www.youtube.com/playlist?list=PLBlnK6fEyqRhpTJllVgCkvwUWO2Gd6pVe"
  },
  {
    "title": "EDVARA ENGINEERS",
    "channel": "Edvara Engineers",
    "description": "YouTube video tutorials for Engineering Physics.",
    "url": "https://www.youtube.com/playlist?list=PLVbxzb9b13LAxBeM2d5D9Ep5VxtpYG1HO"
  },
  {
    "title": "FADU ENGINEER",
    "channel": "Fadu Engineer",
    "description": "YouTube video tutorials for Engineering Physics.",
    "url": "https://www.youtube.com/playlist?list=PLnU_6InKwomFPUn1k5np6NtnoU38TW2PT"
  },
  {
    "title": "Pradeep Giri Academy",
    "channel": "Pradeep Giri Academy",
    "description": "YouTube video tutorials for Engineering Physics.",
    "url": "https://www.youtube.com/playlist?list=PLT3bOBUU3L9jLY7WzoVlmgzXjbsHLQEdb"
  }
    
    ],
  },
  {
    id: 27, name: "Exploratory Data Analysis", group: "Data",
    resources: [
      {
    "title": "Krish Naik – Exploratory Data Analysis Playlist",
    "channel": "Krish Naik",
    "description": "YouTube video tutorials for Exploratory Data Analysis.",
    "url": "https://www.youtube.com/watch?v=fHFOANOHwh8"
  },
  {
    "title": "freeCodeCamp – Data Analysis with Python",
    "channel": "freeCodeCamp",
    "description": "YouTube video tutorials for Exploratory Data Analysis.",
    "url": "https://www.youtube.com/playlist?list=PLWKjhJtqVAblvI1i46ScbKV2jH1gdL7VQ"
  },
  {
    "title": "Alex The Analyst – Data Analytics Playlist",
    "channel": "Alex The Analyst",
    "description": "YouTube video tutorials for Exploratory Data Analysis.",
    "url": "https://www.youtube.com/watch?v=Liv6eeb1VfE"
  },
  {
    "title": "edureka!",
    "channel": "Edureka",
    "description": "YouTube video tutorials for Exploratory Data Analysis.",
    "url": "https://www.youtube.com/watch?v=-o3AxdVcUtQ&t=41s"
  },
  {
    "title": "Rob Mulla",
    "channel": "Rob Mulla",
    "description": "YouTube video tutorials for Exploratory Data Analysis.",
    "url": "https://www.youtube.com/watch?v=xi0vhXFPegw"
  }
    
    ],
  },
  {
    id: 28, name: "Generative AI", group: "AI / ML",
    resources: [
      {
    "title": "DeepLearning.AI – Generative AI Courses",
    "channel": "DeepLearning.AI",
    "description": "YouTube video tutorials for Generative AI.",
    "url": "https://www.deeplearning.ai/short-courses/"
  },
  {
    "title": "Google Cloud – Generative AI Learning",
    "channel": "Google Cloud Tech",
    "description": "YouTube video tutorials for Generative AI.",
    "url": "https://www.youtube.com/playlist?list=PLBgogxgQVM9sl-KnKywVEhkb3QtLHU4OK"
  },
  {
    "title": "freeCodeCamp – Generative AI Courses",
    "channel": "freeCodeCamp",
    "description": "YouTube video tutorials for Generative AI.",
    "url": "https://www.youtube.com/watch?v=mEsleV16qdo"
  }
    
    ],
  },
  {
    id: 29, name: "Industry Readiness & Leadership Skills", group: "Soft Skills",
    resources: [
      {
    "title": "LinkedIn Learning – Leadership Skills",
    "channel": "LinkedIn Learning",
    "description": "YouTube video tutorials for Industry Readiness & Leadership Skills.",
    "url": "https://www.youtube.com/playlist?list=PL26pr4T7OzVMIqLz61IxO1CAAjzSY1-mS"
  },
  {
    "title": "Grow with Google",
    "channel": "Grow with Google",
    "description": "YouTube video tutorials for Industry Readiness & Leadership Skills.",
    "url": "https://www.youtube.com/@growwithgoogle"
  },
  {
    "title": "Harvard Business Review – Leadership",
    "channel": "Harvard Business Review",
    "description": "YouTube video tutorials for Industry Readiness & Leadership Skills.",
    "url": "https://www.youtube.com/@harvardbusinessreview"
  }
    
    ],
  },
  {
    id: 30, name: "Linear Algebra", group: "Mathematics",
    resources: [
      {
    "title": "3Blue1Brown – Essence of Linear Algebra",
    "channel": "3Blue1Brown",
    "description": "YouTube video tutorials for Linear Algebra.",
    "url": "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab"
  },
  {
    "title": "freeCodeCamp",
    "channel": "freeCodeCamp",
    "description": "YouTube video tutorials for Linear Algebra.",
    "url": "https://www.youtube.com/watch?v=JnTa9XtvmfI"
  },
  {
    "title": "MIT OpenCourseWare – Linear Algebra",
    "channel": "MIT OpenCourseWare",
    "description": "YouTube video tutorials for Linear Algebra.",
    "url": "https://www.youtube.com/playlist?list=PLE7DDD91010BC51F8"
  },
  {
    "title": "Khan Academy – Linear Algebra",
    "channel": "Khan Academy",
    "description": "YouTube video tutorials for Linear Algebra.",
    "url": "https://www.youtube.com/playlist?list=PLFD0EB975BA0CC1E0"
  }
    
    ],
  },
  {
    id: 31, name: "Multivariable Calculus", group: "Mathematics",
    resources: [
      {
    "title": "MIT OpenCourseWare – Multivariable Calculus",
    "channel": "MIT OpenCourseWare",
    "description": "YouTube video tutorials for Multivariable Calculus.",
    "url": "https://www.youtube.com/playlist?list=PL4C4C8A7D06566F38"
  },
  {
    "title": "Khan Academy – Multivariable Calculus",
    "channel": "Khan Academy",
    "description": "YouTube video tutorials for Multivariable Calculus.",
    "url": "https://www.youtube.com/playlist?list=PLSQl0a2vh4HC5feHa6Rc5c0wbRTx56nF7"
  },
  {
    "title": "Dr. Trefor Bazett",
    "channel": "Dr. Trefor Bazett",
    "description": "YouTube video tutorials for Multivariable Calculus.",
    "url": "https://www.youtube.com/playlist?list=PLHXZ9OQGMqxc_CvEy7xBKRQr6I214QJcd"
  },
  {
    "title": "Mathematics",
    "channel": "Mathematics",
    "description": "YouTube video tutorials for Multivariable Calculus.",
    "url": "https://www.youtube.com/playlist?list=PLtKWB-wrvn4nA2h8TFxzWL2zy8O9th_fy"
  },
  {
    "title": "NPTEL – Multivariable Calculus",
    "channel": "NPTEL",
    "description": "YouTube video tutorials for Multivariable Calculus.",
    "url": "https://nptel.ac.in/courses/111107108"
  }
    
    
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
      {
    "title": "Apna College (Video 1)",
    "channel": "Apna College",
    "description": "YouTube video tutorials for Object Oriented Programming.",
    "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI&t=1s"
  },
  {
    "title": "Apna College (Video 2)",
    "channel": "Apna College",
    "description": "YouTube video tutorials for Object Oriented Programming.",
    "url": "https://www.youtube.com/watch?v=mlIUKyZIUUU&t=50s"
  },
  {
    "title": "Neso Academy – Object Oriented Programming",
    "channel": "Neso Academy",
    "description": "YouTube video tutorials for Object Oriented Programming.",
    "url": "https://www.youtube.com/playlist?list=PLBlnK6fEyqRjKA_NuK9mHmlk0dZzuP1P5"
  },
  {
    "title": "Telusko – Java OOP",
    "channel": "Telusko",
    "description": "YouTube video tutorials for Object Oriented Programming.",
    "url": "https://www.youtube.com/watch?v=qiSCMNBIP2g"
  },
  {
    "title": "freeCodeCamp – Java Programming (Video 1)",
    "channel": "freeCodeCamp",
    "description": "YouTube video tutorials for Object Oriented Programming.",
    "url": "https://www.youtube.com/watch?v=Ej_02ICOIgs"
  },
  {
    "title": "freeCodeCamp – Java Programming (Video 2)",
    "channel": "freeCodeCamp",
    "description": "YouTube video tutorials for Object Oriented Programming.",
    "url": "https://www.youtube.com/watch?v=wN0x9eZLix4"
  },
  {
    "title": "Programming with Mosh",
    "channel": "Programming with Mosh",
    "description": "YouTube video tutorials for Object Oriented Programming.",
    "url": "https://www.youtube.com/watch?v=PFmuCDHHpwk"
  },
  {
    "title": "Kunal Kushwaha",
    "channel": "Kunal Kushwaha",
    "description": "YouTube video tutorials for Object Oriented Programming.",
    "url": "https://www.youtube.com/playlist?list=PL9gnSGHSqcno1G3XjUbwzXHL8_EttOuKk"
  }
    
    
    ],
  },
  {
    id: 34, name: "Object Oriented Programming Lab", group: "Programming",
    resources: [
      {
    "title": "freeCodeCamp – Java Programming Projects",
    "channel": "freeCodeCamp",
    "description": "YouTube video tutorials for Object Oriented Programming Lab.",
    "url": "https://www.youtube.com/playlist?list=PLWKjhJtqVAbnRT_hue-3zyiuIYj0OlpyG"
  },
  {
    "title": "Programming with Mosh – Java",
    "channel": "Programming with Mosh",
    "description": "YouTube video tutorials for Object Oriented Programming Lab.",
    "url": "https://www.youtube.com/watch?v=eIrMbAQSU34"
  },
  {
    "title": "Telusko Java Projects",
    "channel": "Telusko",
    "description": "YouTube video tutorials for Object Oriented Programming Lab.",
    "url": "https://www.youtube.com/playlist?list=PLsyeobzWxl7pe_IiTfNyr55kwJPWbgxB5"
  }
    
    
    ],
  },
  {
    id: 35, name: "Operating System Principles and Programming", group: "Core CS",
    resources: [
      {
    "title": "Gate Smashers – Operating System",
    "channel": "Gate Smashers",
    "description": "YouTube video tutorials for Operating System Principles and Programming.",
    "url": "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p"
  },
  {
    "title": "Neso Academy – Operating System",
    "channel": "Neso Academy",
    "description": "YouTube video tutorials for Operating System Principles and Programming.",
    "url": "https://www.youtube.com/playlist?list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O"
  },
  {
    "title": "freeCodeCamp",
    "channel": "freeCodeCamp",
    "description": "YouTube video tutorials for Operating System Principles and Programming.",
    "url": "https://www.youtube.com/watch?v=yK1uBHPdp30"
  },
  {
    "title": "CodeHelp - by Babbar",
    "channel": "CodeHelp - by Babbar",
    "description": "YouTube video tutorials for Operating System Principles and Programming.",
    "url": "https://www.youtube.com/playlist?list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG"
  },
  {
    "title": "NPTEL – Operating Systems",
    "channel": "NPTEL",
    "description": "YouTube video tutorials for Operating System Principles and Programming.",
    "url": "https://nptel.ac.in/courses/106106144"
  }
    
    
    ],
  },
  {
    id: 36, name: "Principles of Compiler Design", group: "Core CS",
    resources: [
      {
    "title": "Gate Smashers – Compiler Design",
    "channel": "Gate Smashers",
    "description": "YouTube video tutorials for Principles of Compiler Design.",
    "url": "https://www.youtube.com/playlist?list=PLxCzCOWd7aiEKtKSIHYusizkESC42diyc"
  },
  {
    "title": "Neso Academy – Compiler Design",
    "channel": "Neso Academy",
    "description": "YouTube video tutorials for Principles of Compiler Design.",
    "url": "https://www.youtube.com/playlist?list=PLBlnK6fEyqRjT3oJxFXRgjPNzeS-LFY-q"
  },
  {
    "title": "THE GATEHUB",
    "channel": "THE GATEHUB",
    "description": "YouTube video tutorials for Principles of Compiler Design.",
    "url": "https://www.youtube.com/playlist?list=PL1QH9gyQXfguPNDTsnG90W2kBDQpYLDQr"
  },
  {
    "title": "Sudhakar Atchala",
    "channel": "Sudhakar Atchala",
    "description": "YouTube video tutorials for Principles of Compiler Design.",
    "url": "https://www.youtube.com/playlist?list=PLXj4XH7LcRfC9pGMWuM6UWE3V4YZ9TZzM"
  },
  {
    "title": "NPTEL – Compiler Design",
    "channel": "NPTEL",
    "description": "YouTube video tutorials for Principles of Compiler Design.",
    "url": "https://nptel.ac.in/courses/106104123"
  }
    
    
    ],
  },
  {
    id: 37, name: "Probability and Statistics", group: "Mathematics",
    resources: [
      {
    "title": "Dr.Gajendra Purohit",
    "channel": "Dr.Gajendra Purohit",
    "description": "YouTube video tutorials for Probability and Statistics.",
    "url": "https://www.youtube.com/playlist?list=PLU6SqdYcYsfJPF-4HphQQ8OceDtqhlSW8"
  },
  {
    "title": "Gate Smashers",
    "channel": "Gate Smashers",
    "description": "YouTube video tutorials for Probability and Statistics.",
    "url": "https://www.youtube.com/playlist?list=PLxCzCOWd7aiFjZP4z1_3Kr3m3J5wu5Q8V"
  },
  {
    "title": "Great Learning",
    "channel": "Great Learning",
    "description": "YouTube video tutorials for Probability and Statistics.",
    "url": "https://www.youtube.com/watch?v=Vfo5le26IhY"
  },
  {
    "title": "Khan Academy – Statistics and Probability",
    "channel": "Khan Academy",
    "description": "YouTube video tutorials for Probability and Statistics.",
    "url": "https://www.youtube.com/playlist?list=PLC58778F28211FA19"
  },
  {
    "title": "StatQuest – Statistics Playlist",
    "channel": "StatQuest",
    "description": "YouTube video tutorials for Probability and Statistics.",
    "url": "https://www.youtube.com/playlist?list=PLblh5JKOoLUK0FLuzwntyYI10UQFUhsY9"
  },
  {
    "title": "NPTEL – Probability and Statistics",
    "channel": "NPTEL",
    "description": "YouTube video tutorials for Probability and Statistics.",
    "url": "https://nptel.ac.in/courses/111105090"
  }
    
    
    ],
  },
  {
    id: 38, name: "Problem Solving & Analysis", group: "Programming",
    resources: [
      {
    "title": "freeCodeCamp – Programming Problem Solving (Video 1)",
    "channel": "freeCodeCamp",
    "description": "YouTube video tutorials for Problem Solving & Analysis.",
    "url": "https://www.youtube.com/watch?v=xJjxQjZTryI"
  },
  {
    "title": "freeCodeCamp – Programming Problem Solving (Playlist)",
    "channel": "freeCodeCamp",
    "description": "YouTube video tutorials for Problem Solving & Analysis.",
    "url": "https://www.youtube.com/playlist?list=PLUzvZMEoR0KvEthotRQR3qoJ5FJxkhvaP"
  },
  {
    "title": "Abdul Bari – Algorithms",
    "channel": "Abdul Bari",
    "description": "YouTube video tutorials for Problem Solving & Analysis.",
    "url": "https://www.youtube.com/playlist?list=PLAXnLdrLnQpRcveZTtD644gM9uzYqJCwr"
  },
  {
    "title": "NeetCode – Problem Solving Patterns",
    "channel": "NeetCode",
    "description": "YouTube video tutorials for Problem Solving & Analysis.",
    "url": "https://www.youtube.com/playlist?list=PLot-Xpze53leF0FeHz2X0aG3zd0mr1AW_"
  }
    
    
    ],
  },
  {
    id: 39, name: "Professional Aptitude & Logical Reasoning", group: "Aptitude",
    resources: [
      {
    "title": "CareerRide (Playlist 1)",
    "channel": "Career Ride",
    "description": "YouTube video tutorials for Professional Aptitude & Logical Reasoning.",
    "url": "https://www.youtube.com/playlist?list=PLpyc33gOcbVADMKqylI__O_O_RMeHTyNK"
  },
  {
    "title": "CareerRide (Playlist 2)",
    "channel": "Career Ride",
    "description": "YouTube video tutorials for Professional Aptitude & Logical Reasoning.",
    "url": "https://www.youtube.com/playlist?list=PLpyc33gOcbVC2wRtQXK8Gdt1VFjeVY4ea"
  },
  {
    "title": "CareerVidz",
    "channel": "CareerVidz",
    "description": "YouTube video tutorials for Professional Aptitude & Logical Reasoning.",
    "url": "https://www.youtube.com/playlist?list=PLCcteVWYyBtt14T7wwUvAPlhPm3SQVAsI"
  },
  {
    "title": "Neso Academy – Aptitude and Reasoning",
    "channel": "Neso Academy",
    "description": "YouTube video tutorials for Professional Aptitude & Logical Reasoning.",
    "url": "https://www.youtube.com/playlist?list=PLBlnK6fEyqRhMP7gwIe2j0hb1PCvYn0RI"
  },
  {
    "title": "TalentSprint Aptitude Preparation",
    "channel": "TalentSprint",
    "description": "YouTube video tutorials for Professional Aptitude & Logical Reasoning.",
    "url": "https://www.youtube.com/playlist?list=PLffLKBjSzxT_0-jbwym7NyG6hpN7faov5"
  },
  {
    "title": "IndiaBix",
    "channel": "IndiaBix",
    "description": "YouTube video tutorials for Professional Aptitude & Logical Reasoning.",
    "url": "https://www.indiabix.com/"
  }
    
    
    ],
  },
  {
    id: 40, name: "Single Variable Calculus", group: "Mathematics",
    resources: [
      {
    "title": "3Blue1Brown – Essence of Calculus",
    "channel": "3Blue1Brown",
    "description": "YouTube video tutorials for Single Variable Calculus.",
    "url": "https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr"
  },
  {
    "title": "MIT OpenCourseWare – Single Variable Calculus",
    "channel": "MIT OpenCourseWare",
    "description": "YouTube video tutorials for Single Variable Calculus.",
    "url": "https://www.youtube.com/playlist?list=PL590CCC2BC5AF3BC1"
  },
  {
    "title": "Pradeep Giri Academy",
    "channel": "Pradeep Giri Academy",
    "description": "YouTube video tutorials for Single Variable Calculus.",
    "url": "https://www.youtube.com/playlist?list=PLT3bOBUU3L9iw3yQWge_IjhXZlDgRGwyq"
  },
  {
    "title": "freeCodeCamp",
    "channel": "freeCodeCamp",
    "description": "YouTube video tutorials for Single Variable Calculus.",
    "url": "https://www.youtube.com/watch?v=HfACrKJ_Y2w"
  },
  {
    "title": "Khan Academy – Calculus",
    "channel": "Khan Academy",
    "description": "YouTube video tutorials for Single Variable Calculus.",
    "url": "https://www.youtube.com/playlist?list=PL19E79A0638C8D449"
  }
    
    
    ],
  },
  {
    id: 41, name: "Software Engineering", group: "Core CS",
    resources: [
      {
    "title": "Gate Smashers – Software Engineering",
    "channel": "Gate Smashers",
    "description": "YouTube video tutorials for Software Engineering.",
    "url": "https://www.youtube.com/playlist?list=PLxCzCOWd7aiEed7SKZBnC6ypFDWYLRvB2"
  },
  {
    "title": "CS & IT Tutorials by",
    "channel": "CS & IT Tutorials by Vrushali",
    "description": "YouTube video tutorials for Software Engineering.",
    "url": "https://www.youtube.com/playlist?list=PLQ-nEJNYlEV29CBLzIDxcogm6CEZjVad2"
  },
  {
    "title": "KnowledgeGATE",
    "channel": "Knowledge Gate",
    "description": "YouTube video tutorials for Software Engineering.",
    "url": "https://www.youtube.com/playlist?list=PLmXKhU9FNesTrw7n8ouPsSLEcduRlENHr"
  },
  {
    "title": "NPTEL – Software Engineering",
    "channel": "NPTEL",
    "description": "YouTube video tutorials for Software Engineering.",
    "url": "https://nptel.ac.in/courses/106105182"
  }
    
    
    ],
  },
  {
    id: 42, name: "Web Technologies Lab", group: "Programming",
    resources: [
      {
    "title": "Apna College",
    "channel": "Apna College",
    "description": "YouTube video tutorials for Web Technologies Lab.",
    "url": "https://www.youtube.com/playlist?list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n"
  },
  {
    "title": "code With Harry",
    "channel": "CodeWithHarry",
    "description": "YouTube video tutorials for Web Technologies Lab.",
    "url": "https://www.youtube.com/playlist?list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w"
  },
  {
    "title": "freeCodeCamp – Web Development Full Course",
    "channel": "freeCodeCamp",
    "description": "YouTube video tutorials for Web Technologies Lab.",
    "url": "https://www.youtube.com/watch?v=nu_pCVPKzTk"
  },
  {
    "title": "Traversy Media – Web Development",
    "channel": "Traversy Media",
    "description": "YouTube video tutorials for Web Technologies Lab.",
    "url": "https://www.youtube.com/playlist?list=PLillGF-RfqbYeckUaD1z6nviTp31GLTH8"
  },
  {
    "title": "The Net Ninja – Web Development",
    "channel": "The Net Ninja",
    "description": "YouTube video tutorials for Web Technologies Lab.",
    "url": "https://www.youtube.com/playlist?list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G"
  }
    
    
    ],
  },
  {
    id: 43, name: "Wireless and Mobile Networks", group: "Core CS",
    resources: [
      {
    "title": "NPTEL – Wireless Communication",
    "channel": "NPTEL",
    "description": "YouTube video tutorials for Wireless and Mobile Networks.",
    "url": "https://nptel.ac.in/courses/108106192"
  },
  {
    "title": "Gate Smashers – Computer Networks/Wireless Networks",
    "channel": "Gate Smashers",
    "description": "YouTube video tutorials for Wireless and Mobile Networks.",
    "url": "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_"
  },
  {
    "title": "Neso Academy – Wireless Communication",
    "channel": "Neso Academy",
    "description": "YouTube video tutorials for Wireless and Mobile Networks.",
    "url": "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgLy3WPoMBTDovzkMPUugkY"
  },
  {
    "title": "Er. Manish Sachdeva",
    "channel": "Er. Manish Sachdeva",
    "description": "YouTube video tutorials for Wireless and Mobile Networks.",
    "url": "https://www.youtube.com/playlist?list=PLz1qUBU_8618W8rExBmaCOPmVmU2uxihD"
  },
  {
    "title": "5 Minutes Engineering",
    "channel": "5 Minutes Engineering",
    "description": "YouTube video tutorials for Wireless and Mobile Networks.",
    "url": "https://www.youtube.com/playlist?list=PLYwpaL_SFmcAjqrKO-b9UMa2AaAlzZY7D"
  }
    
    
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
