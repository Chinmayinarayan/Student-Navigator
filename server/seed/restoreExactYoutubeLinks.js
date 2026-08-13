require('dotenv').config();
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

const resourcesMap = {
  "Algorithms": [
  {
    "title": "Abdul Bari – Algorithms Playlist",
    "url": "https://www.youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O"
  },
  {
    "title": "MIT OpenCourseWare – Introduction to Algorithms",
    "url": "https://www.youtube.com/playlist?list=PLUl4u3cNGP63EdVPNLG3ToM6LaEUuStEY"
  },
  {
    "title": "Gate Smashers",
    "url": "https://www.youtube.com/playlist?list=PLxCzCOWd7aiHcmS4i14bI0VrMbZTUvlTa"
  },
  {
    "title": "FreeCodeCamp",
    "url": "https://www.youtube.com/watch?v=8hly31xKli0&t=7s"
  }
],
  "Applied Physics Lab": [
  {
    "title": "Virtual Labs (IIT)",
    "url": "https://www.vlab.co.in/participating-institute-iit-delhi"
  },
  {
    "title": "NPTEL – Engineering Physics",
    "url": "https://www.youtube.com/playlist?list=PLajrVxcKRJ5f4a7cJ-MetbIdZ64_5Sci-"
  },
  {
    "title": "Physics Practical Experiments",
    "url": "https://www.youtube.com/playlist?list=PL_u2iJUox0XoWRHV2lluPBqLam_psaA8u"
  }
],
  "Arithmetical Thinking & Analytical Reasoning": [
  {
    "title": "Neso Academy – Aptitude and Reasoning (Playlist 1)",
    "url": "https://www.youtube.com/playlist?list=PLBlnK6fEyqRhMP7gwIe2j0hb1PCvYn0RI"
  },
  {
    "title": "Neso Academy – Aptitude and Reasoning (Playlist 2)",
    "url": "https://www.youtube.com/playlist?list=PLBlnK6fEyqRiUM_jYiNhhP9JrlWuHcNXF"
  },
  {
    "title": "IndiaBix Aptitude",
    "url": "https://www.indiabix.com/"
  },
  {
    "title": "NTS TEST MASTER",
    "url": "https://www.youtube.com/playlist?list=PLc0F1Xt49RmZ3xWa3FYWmAqPgpjIbXFAo"
  },
  {
    "title": "Career Ride",
    "url": "https://www.youtube.com/playlist?list=PLpyc33gOcbVADMKqylI__O_O_RMeHTyNK"
  },
  {
    "title": "TalentSprint Aptitude Preparation",
    "url": "https://www.youtube.com/@TalentSprintAptitudePrep"
  }
],
  "Artificial Intelligence and Machine Learning": [
  {
    "title": "FreeCodeCamp",
    "url": "https://www.youtube.com/watch?v=5NgNicANyqM"
  },
  {
    "title": "Programming with mosh – Machine Learning with Python",
    "url": "https://www.youtube.com/watch?v=7eh4d6sabA0"
  },
  {
    "title": "Krish Naik – Machine Learning Playlist",
    "url": "https://www.youtube.com/playlist?list=PLZoTAELRMXVPBTrWtJkn3wWQxZkmTXGwe"
  },
  {
    "title": "StatQuest – Machine Learning Playlist",
    "url": "https://www.youtube.com/playlist?list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF"
  },
  {
    "title": "Apna College",
    "url": "https://www.youtube.com/watch?v=D1eL1EnxXXQ&t=2s"
  }
],
  "Basic Electrical Engineering": [
  {
    "title": "Neso Academy – Basic Electrical Engineering",
    "url": "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgLR-hMp7wem-bdVN1iEhsh"
  },
  {
    "title": "Gate Smashers – Electrical Engineering Basics",
    "url": "https://www.youtube.com/playlist?list=PL9RcWoqXmzaLTYUdnzKhF4bYug3GjGcEc"
  },
  {
    "title": "Engineers ki Pathshala by Umesh Dhande",
    "url": "https://www.youtube.com/playlist?list=PL9RcWoqXmzaLTYUdnzKhF4bYug3GjGcEc"
  },
  {
    "title": "NPTEL – Basic Electrical Technology",
    "url": "https://www.youtube.com/playlist?list=PL425060D3C78350E1"
  },
  {
    "title": "The Engineering Mindset",
    "url": "https://www.youtube.com/playlist?list=PLWv9VM947MKi_7yJ0_FCfzTBXpQU-Qd3K"
  }
],
  "Basic Electronics": [
  {
    "title": "Neso Academy – Electronic Devices and Circuits",
    "url": "https://www.youtube.com/playlist?list=PLBlnK6fEyqRiw-GZRqfnlVIBz9dxrqHJS"
  },
  {
    "title": "Gautam Varde",
    "url": "https://www.youtube.com/playlist?list=PL3qvHcrYGy1uF5KAGntUITTJ85Dm3Dtdy"
  },
  {
    "title": "Gate Smashers – Digital Electronics",
    "url": "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGmXg4NoX6R31AsC5LeCPHe"
  },
  {
    "title": "All About Electronics",
    "url": "https://www.youtube.com/playlist?list=PLwjK_iyK4LLBC_so3odA64E2MLgIRKafl"
  },
  {
    "title": "Core - Basic Electronics - Prof T.S.Natarajan nptelhrd",
    "url": "https://www.youtube.com/playlist?list=PL7987F30C41A9ADCB"
  }
],
  "Basic Mechanical Engineering": [
  {
    "title": "NPTEL – Engineering Mechanics / Mechanical Basics",
    "url": "https://nptel.ac.in/courses/112106286"
  },
  {
    "title": "Education Point Online",
    "url": "https://www.youtube.com/playlist?list=PLg2LVpcRrOF7L4FknzcfxrnMin-03WUHs"
  },
  {
    "title": "Gate Academy – Mechanical Engineering",
    "url": "https://www.youtube.com/playlist?list=PLNyPK_sfNdSQVQgc9B4DP9qPVlYmAmTRE"
  },
  {
    "title": "Gate Wallah",
    "url": "https://www.youtube.com/playlist?list=PLPvaSRcEQh4lfyQYKBRuTiLekgVIw2jvC"
  },
  {
    "title": "Gautam Varde",
    "url": "https://www.youtube.com/playlist?list=PL3qvHcrYGy1vwJlwY2uLfEzqr3vM0Ye-O"
  }
],
  "Big Data Analytics": [
  {
    "title": "edureka! (1)",
    "url": "https://www.youtube.com/watch?v=1vbXmCrkT3Y"
  },
  {
    "title": "edureka! (2)",
    "url": "https://www.youtube.com/watch?v=1vbXmCrkT3Y&t=157s"
  },
  {
    "title": "Gate Smashers",
    "url": "https://www.youtube.com/playlist?list=PLxCzCOWd7aiHUUi6ZlansKbDw_cXut0El"
  },
  {
    "title": "Simplilearn",
    "url": "https://www.youtube.com/playlist?list=PLEiEAq2VkUUJqp1k-g5W1mo37urJQOdCZ"
  },
  {
    "title": "WsCube Tech",
    "url": "https://www.youtube.com/playlist?list=PLjVLYmrlmjGdRs1sGqRrTE-EMraLclJga"
  }
],
  "C Programming for Problem Solving": [
  {
    "title": "Neso Academy – C Programming Playlist",
    "url": "https://www.youtube.com/playlist?list=PLBlnK6fEyqRggZZgYpPMUxdY1CYkZtARR"
  },
  {
    "title": "Jenny's Lectures CS/IT – C Programming",
    "url": "https://www.youtube.com/playlist?list=PLdo5W4Nhv31a8UcMN9-35ghv8qyFWD9_S"
  },
  {
    "title": "Apna College",
    "url": "https://www.youtube.com/watch?v=irqbmMNs2Bo&t=1s"
  },
  {
    "title": "CodeWithHarry",
    "url": "https://www.youtube.com/watch?v=aZb0iu4uGwA"
  },
  {
    "title": "College Wallah",
    "url": "https://www.youtube.com/playlist?list=PLxgZQoSe9cg1drBnejUaDD9GEJBGQ5hMt"
  },
  {
    "title": "freeCodeCamp – C Programming Full Course",
    "url": "https://www.youtube.com/watch?v=KJgsSFOSQv0&t=8s"
  },
  {
    "title": "Learn Coding",
    "url": "https://www.youtube.com/watch?v=VSEnzzjAm0c"
  }
],
  "Cloud Computing": [
  {
    "title": "freeCodeCamp – Cloud Computing Course",
    "url": "https://www.youtube.com/watch?v=NhDYbskXRgc&t=11s"
  },
  {
    "title": "Neso Academy – Computer Networks",
    "url": "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx"
  },
  {
    "title": "AWS Training – Cloud Practitioner",
    "url": "https://www.youtube.com/@AWSTraining"
  },
  {
    "title": "Simplilearn",
    "url": "https://www.youtube.com/playlist?list=PLEiEAq2VkUUIJ3o1tehvtux0_Ynf42CBN"
  },
  {
    "title": "GateSmashers",
    "url": "https://www.youtube.com/playlist?list=PLxCzCOWd7aiHRHVUtR-O52MsrdUSrzuy4"
  },
  {
    "title": "edureka!",
    "url": "https://www.youtube.com/playlist?list=PL9ooVrP1hQOFtZ5oAAeOgi_nH-txMcDMu"
  }
],
  "Computer Networks": [
  {
    "title": "Neso Academy – Computer Networks Playlist",
    "url": "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx"
  },
  {
    "title": "Gate Smashers – Computer Networks",
    "url": "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_"
  },
  {
    "title": "FreeCodeCamp",
    "url": "https://www.youtube.com/watch?v=qiQR5rTSshw"
  },
  {
    "title": "Kunal Kushwaha",
    "url": "https://www.youtube.com/watch?v=IPvYjXCsTg8"
  },
  {
    "title": "NPTEL – Computer Networks",
    "url": "https://nptel.ac.in/courses/106105183"
  }
],
  "Computer Networks Lab": [
  {
    "title": "Cisco Networking Academy",
    "url": "https://www.netacad.com/cisco-packet-tracer"
  },
  {
    "title": "Practical Networking",
    "url": "https://www.youtube.com/@PracticalNetworking"
  },
  {
    "title": "Neso Academy – Computer Networks",
    "url": "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx"
  }
],
  "Computer Organization and Architecture": [
  {
    "title": "Neso Academy – Computer Organization Playlist",
    "url": "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgLLlzdgiTUKULKJPYc0A4q"
  },
  {
    "title": "Gate Smashers – Computer Organization",
    "url": "https://www.youtube.com/playlist?list=PLxCzCOWd7aiHMonh3G6QNKq53C6oNXGrX"
  },
  {
    "title": "NPTEL – Computer Organization",
    "url": "https://nptel.ac.in/courses/106103068"
  },
  {
    "title": "Sudhakar Atchala",
    "url": "https://www.youtube.com/playlist?list=PLXj4XH7LcRfDXDRzSLv1FfZ-SSA38SiC0"
  },
  {
    "title": "KnowledgeGATE",
    "url": "https://www.youtube.com/playlist?list=PLmXKhU9FNesS4B30OmgxP7nrzq1UhiMiv"
  }
],
  "Corporate Communication": [
  {
    "title": "NPTEL – Soft Skills / Communication Skills",
    "url": "https://nptel.ac.in/courses/109104031"
  },
  {
    "title": "English with Lucy – Communication Skills",
    "url": "https://www.youtube.com/@EnglishwithLucy"
  },
  {
    "title": "Toastmasters International – Communication Skills",
    "url": "https://www.youtube.com/@toastmasters"
  }
],
  "Cryptography & Network Security": [
  {
    "title": "Neso Academy – Cryptography Playlist",
    "url": "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgJU3EsOYDTW7m6SUmW6kII"
  },
  {
    "title": "Gate Smashers – Cryptography & Network Security",
    "url": "https://www.youtube.com/playlist?list=PLxCzCOWd7aiFjkQbGj_yHeTEVPn422_z5"
  },
  {
    "title": "simplilearn",
    "url": "https://www.youtube.com/watch?v=C7vmouDOJYM"
  },
  {
    "title": "NPTEL – Cryptography and Network Security",
    "url": "https://nptel.ac.in/courses/106105031"
  }
],
  "Data Structures and Algorithms": [
  {
    "title": "Abdul Bari – Data Structures & Algorithms",
    "url": "https://www.youtube.com/playlist?list=PLsr8vTgyLdy_YndxNcI4WkH5Vorj5qvrv"
  },
  {
    "title": "Striver – A2Z DSA Course",
    "url": "https://www.youtube.com/playlist?list=PLgUwDviBIf0oF6nyAVArG1di-0dxBYIy9"
  },
  {
    "title": "Neso Academy – Data Structures",
    "url": "https://www.youtube.com/playlist?list=PLBlnK6fEyqRj9lld8sWIUNwlKfdUoPd1Y"
  },
  {
    "title": "freeCodeCamp",
    "url": "https://www.youtube.com/watch?v=8hly31xKli0&t=21s"
  },
  {
    "title": "CodeWithHarry",
    "url": "https://www.youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi"
  },
  {
    "title": "Jenny's Lectures CS IT",
    "url": "https://www.youtube.com/playlist?list=PLdo5W4Nhv31bbKJzrsKfMpo_grxuLl8LU"
  },
  {
    "title": "Apna College",
    "url": "https://www.youtube.com/playlist?list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt"
  },
  {
    "title": "GateSmashers",
    "url": "https://www.youtube.com/playlist?list=PLxCzCOWd7aiEwaANNt3OqJPVIxwp2ebiT"
  }
],
  "Database Applications Lab": [
  {
    "title": "SQLBolt – Interactive SQL Practice",
    "url": "https://sqlbolt.com/"
  },
  {
    "title": "freeCodeCamp – SQL Full Course",
    "url": "https://www.youtube.com/watch?v=HXV3zeQKqGY"
  },
  {
    "title": "Great Learning",
    "url": "https://www.youtube.com/watch?v=ObbNGhcxXJA&t=2s"
  },
  {
    "title": "ApnaCollege",
    "url": "https://www.youtube.com/watch?v=hlGoQC332VM"
  }
],
  "Database Management System": [
  {
    "title": "Gate Smashers – DBMS Playlist",
    "url": "https://www.youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y"
  },
  {
    "title": "Neso Academy – DBMS",
    "url": "https://www.youtube.com/playlist?list=PLBlnK6fEyqRiyryTrbKHX1Sh9luYI0dhX"
  },
  {
    "title": "NPTEL – Database Management Systems",
    "url": "https://nptel.ac.in/courses/106106093"
  },
  {
    "title": "Jenny's Lectures CS IT",
    "url": "https://www.youtube.com/playlist?list=PLdo5W4Nhv31b33kF46f9aFjoJPOkdlsRc"
  },
  {
    "title": "KnowledgeGATE by Sanchit Sir",
    "url": "https://www.youtube.com/watch?v=YRnjGeQbsHQ"
  }
],
  "Design Thinking for Social Innovation": [
  {
    "title": "Stanford d.school – Design Thinking",
    "url": "https://dschool.stanford.edu/resources"
  },
  {
    "title": "IDEO Design Thinking",
    "url": "https://www.youtube.com/@ideoulearn"
  },
  {
    "title": "AJ&Smart – Design Thinking Process",
    "url": "https://www.youtube.com/@AJSmart"
  }
],
  "Design and Analysis of Algorithms": [
  {
    "title": "Abdul Bari – Algorithms",
    "url": "https://www.youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O"
  },
  {
    "title": "Gate Smashers – DAA",
    "url": "https://www.youtube.com/playlist?list=PLxCzCOWd7aiHcmS4i14bI0VrMbZTUvlTa"
  },
  {
    "title": "NPTEL – Design and Analysis of Algorithms",
    "url": "https://nptel.ac.in/courses/106101060"
  },
  {
    "title": "Neso Academy",
    "url": "https://www.youtube.com/playlist?list=PLBlnK6fEyqRhoF3cPp0mgOZPuXeu84nAd"
  }
],
  "Discrete Mathematics": [
  {
    "title": "Neso Academy – Discrete Mathematics Playlist",
    "url": "https://www.youtube.com/playlist?list=PLBlnK6fEyqRhqJPDXcvYlLfXPh37L89g3"
  },
  {
    "title": "Gate Smashers – Discrete Mathematics",
    "url": "https://www.youtube.com/playlist?list=PLxCzCOWd7aiH2wwES9vPWsEL6ipTaUSl3"
  },
  {
    "title": "Kimberly Brehm",
    "url": "https://www.youtube.com/playlist?list=PLl-gb0E4MII28GykmtuBXNUNoej-vY5Rz"
  },
  {
    "title": "Pradeep Giri Academy",
    "url": "https://www.youtube.com/playlist?list=PLT3bOBUU3L9j_VG5CICyWK_a4M0-nwwxy"
  },
  {
    "title": "NPTEL – Discrete Mathematics",
    "url": "https://nptel.ac.in/courses/111107058"
  }
],
  "Embedded Systems and IoT": [
  {
    "title": "NPTEL – Embedded Systems",
    "url": "https://nptel.ac.in/courses/108102045"
  },
  {
    "title": "Great Learning – IoT Full Course",
    "url": "https://www.youtube.com/watch?v=T-S0_R_J3pU"
  },
  {
    "title": "freeCodeCamp – IoT Course",
    "url": "https://www.youtube.com/watch?v=eidD14dXW8s"
  },
  {
    "title": "Simplilearn",
    "url": "https://www.youtube.com/playlist?list=PLEiEAq2VkUUImmTXP_YC2j5qIGOV9NPLy"
  },
  {
    "title": "edureka!",
    "url": "https://www.youtube.com/playlist?list=PL9ooVrP1hQOGccfBbP5tJWZ1hv5sIUWJl"
  }
],
  "Engineering Chemistry": [
  {
    "title": "NPTEL – Engineering Chemistry",
    "url": "https://nptel.ac.in/courses/122106028"
  },
  {
    "title": "Last Moment Tuitions – Engineering Chemistry",
    "url": "https://www.youtube.com/playlist?list=PL7IhposCM6bVt3xn0pU8ZjnATp9YsFXOt"
  },
  {
    "title": "Education Point Online",
    "url": "https://www.youtube.com/playlist?list=PLg2LVpcRrOF6Sn9UO_1Yict2fJYKuQQHN"
  },
  {
    "title": "Pradeep Giri Academy (Playlist 1)",
    "url": "https://www.youtube.com/playlist?list=PLT3bOBUU3L9jAWUXENWkXVomQmmqsQiLH"
  },
  {
    "title": "Pradeep Giri Academy (Playlist 2)",
    "url": "https://www.youtube.com/playlist?list=PLT3bOBUU3L9jB7qJkp5qn35021QUBC8xP"
  },
  {
    "title": "Chem Rankers",
    "url": "https://www.youtube.com/playlist?list=PLW1Y7Rfg4m8Jhs-s_VfYWgWzwTqYUvxJb"
  }
],
  "Engineering Exploration": [
  {
    "title": "Stanford d.school – Design Thinking",
    "url": "https://dschool.stanford.edu/resources"
  },
  {
    "title": "IDEO Design Thinking",
    "url": "https://www.youtube.com/@ideoulearn"
  }
],
  "Engineering Mechanics": [
  {
    "title": "NPTEL – Engineering Mechanics",
    "url": "https://www.youtube.com/playlist?list=PLyqSpQzTE6M_MEUdn1izTMB2yZgP1NLfs"
  },
  {
    "title": "Pradeep Giri Academy",
    "url": "https://www.youtube.com/playlist?list=PLT3bOBUU3L9hADhGPsZjSddwAC3BvJDnl"
  },
  {
    "title": "GATE Wallah (English)",
    "url": "https://www.youtube.com/playlist?list=PLPvaSRcEQh4lfyQYKBRuTiLekgVIw2jvC"
  }
],
  "Engineering Physics": [
  {
    "title": "NPTEL – Engineering Physics",
    "url": "https://nptel.ac.in/courses/122104016"
  },
  {
    "title": "Neso Academy – Engineering Physics",
    "url": "https://www.youtube.com/playlist?list=PLBlnK6fEyqRhpTJllVgCkvwUWO2Gd6pVe"
  },
  {
    "title": "EDVARA ENGINEERS",
    "url": "https://www.youtube.com/playlist?list=PLVbxzb9b13LAxBeM2d5D9Ep5VxtpYG1HO"
  },
  {
    "title": "FADU ENGINEER",
    "url": "https://www.youtube.com/playlist?list=PLnU_6InKwomFPUn1k5np6NtnoU38TW2PT"
  },
  {
    "title": "Pradeep Giri Academy",
    "url": "https://www.youtube.com/playlist?list=PLT3bOBUU3L9jLY7WzoVlmgzXjbsHLQEdb"
  }
],
  "Exploratory Data Analysis": [
  {
    "title": "Krish Naik – Exploratory Data Analysis Playlist",
    "url": "https://www.youtube.com/watch?v=fHFOANOHwh8"
  },
  {
    "title": "freeCodeCamp – Data Analysis with Python",
    "url": "https://www.youtube.com/playlist?list=PLWKjhJtqVAblvI1i46ScbKV2jH1gdL7VQ"
  },
  {
    "title": "Alex The Analyst – Data Analytics Playlist",
    "url": "https://www.youtube.com/watch?v=Liv6eeb1VfE"
  },
  {
    "title": "edureka!",
    "url": "https://www.youtube.com/watch?v=-o3AxdVcUtQ&t=41s"
  },
  {
    "title": "Rob Mulla",
    "url": "https://www.youtube.com/watch?v=xi0vhXFPegw"
  }
],
  "Generative AI": [
  {
    "title": "DeepLearning.AI – Generative AI Courses",
    "url": "https://www.deeplearning.ai/short-courses/"
  },
  {
    "title": "Google Cloud – Generative AI Learning",
    "url": "https://www.youtube.com/playlist?list=PLBgogxgQVM9sl-KnKywVEhkb3QtLHU4OK"
  },
  {
    "title": "freeCodeCamp – Generative AI Courses",
    "url": "https://www.youtube.com/watch?v=mEsleV16qdo"
  }
],
  "Industry Readiness & Leadership Skills": [
  {
    "title": "LinkedIn Learning – Leadership Skills",
    "url": "https://www.youtube.com/playlist?list=PL26pr4T7OzVMIqLz61IxO1CAAjzSY1-mS"
  },
  {
    "title": "Grow with Google",
    "url": "https://www.youtube.com/@growwithgoogle"
  },
  {
    "title": "Harvard Business Review – Leadership",
    "url": "https://www.youtube.com/@harvardbusinessreview"
  }
],
  "Linear Algebra": [
  {
    "title": "3Blue1Brown – Essence of Linear Algebra",
    "url": "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab"
  },
  {
    "title": "freeCodeCamp",
    "url": "https://www.youtube.com/watch?v=JnTa9XtvmfI"
  },
  {
    "title": "MIT OpenCourseWare – Linear Algebra",
    "url": "https://www.youtube.com/playlist?list=PLE7DDD91010BC51F8"
  },
  {
    "title": "Khan Academy – Linear Algebra",
    "url": "https://www.youtube.com/playlist?list=PLFD0EB975BA0CC1E0"
  }
],
  "Multivariable Calculus": [
  {
    "title": "MIT OpenCourseWare – Multivariable Calculus",
    "url": "https://www.youtube.com/playlist?list=PL4C4C8A7D06566F38"
  },
  {
    "title": "Khan Academy – Multivariable Calculus",
    "url": "https://www.youtube.com/playlist?list=PLSQl0a2vh4HC5feHa6Rc5c0wbRTx56nF7"
  },
  {
    "title": "Dr. Trefor Bazett",
    "url": "https://www.youtube.com/playlist?list=PLHXZ9OQGMqxc_CvEy7xBKRQr6I214QJcd"
  },
  {
    "title": "Mathematics",
    "url": "https://www.youtube.com/playlist?list=PLtKWB-wrvn4nA2h8TFxzWL2zy8O9th_fy"
  },
  {
    "title": "NPTEL – Multivariable Calculus",
    "url": "https://nptel.ac.in/courses/111107108"
  }
],
  "OE": [
    { "title": "NPTEL Courses", "url": "https://nptel.ac.in/courses" },
    { "title": "Coursera Courses", "url": "https://www.coursera.org/" },
    { "title": "edX Courses", "url": "https://www.edx.org/" }
  ],
  "Object Oriented Programming": [
  {
    "title": "Apna College (Video 1)",
    "url": "https://www.youtube.com/watch?v=bSrm9RXwBaI&t=1s"
  },
  {
    "title": "Apna College (Video 2)",
    "url": "https://www.youtube.com/watch?v=mlIUKyZIUUU&t=50s"
  },
  {
    "title": "Neso Academy – Object Oriented Programming",
    "url": "https://www.youtube.com/playlist?list=PLBlnK6fEyqRjKA_NuK9mHmlk0dZzuP1P5"
  },
  {
    "title": "Telusko – Java OOP",
    "url": "https://www.youtube.com/watch?v=qiSCMNBIP2g"
  },
  {
    "title": "freeCodeCamp – Java Programming (Video 1)",
    "url": "https://www.youtube.com/watch?v=Ej_02ICOIgs"
  },
  {
    "title": "freeCodeCamp – Java Programming (Video 2)",
    "url": "https://www.youtube.com/watch?v=wN0x9eZLix4"
  },
  {
    "title": "Programming with Mosh",
    "url": "https://www.youtube.com/watch?v=PFmuCDHHpwk"
  },
  {
    "title": "Kunal Kushwaha",
    "url": "https://www.youtube.com/playlist?list=PL9gnSGHSqcno1G3XjUbwzXHL8_EttOuKk"
  }
],
  "Object Oriented Programming Lab": [
  {
    "title": "freeCodeCamp – Java Programming Projects",
    "url": "https://www.youtube.com/playlist?list=PLWKjhJtqVAbnRT_hue-3zyiuIYj0OlpyG"
  },
  {
    "title": "Programming with Mosh – Java",
    "url": "https://www.youtube.com/watch?v=eIrMbAQSU34"
  },
  {
    "title": "Telusko Java Projects",
    "url": "https://www.youtube.com/playlist?list=PLsyeobzWxl7pe_IiTfNyr55kwJPWbgxB5"
  }
],
  "Operating System Principles and Programming": [
  {
    "title": "Gate Smashers – Operating System",
    "url": "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p"
  },
  {
    "title": "Neso Academy – Operating System",
    "url": "https://www.youtube.com/playlist?list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O"
  },
  {
    "title": "freeCodeCamp",
    "url": "https://www.youtube.com/watch?v=yK1uBHPdp30"
  },
  {
    "title": "CodeHelp - by Babbar",
    "url": "https://www.youtube.com/playlist?list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG"
  },
  {
    "title": "NPTEL – Operating Systems",
    "url": "https://nptel.ac.in/courses/106106144"
  }
],
  "Principles of Compiler Design": [
  {
    "title": "Gate Smashers – Compiler Design",
    "url": "https://www.youtube.com/playlist?list=PLxCzCOWd7aiEKtKSIHYusizkESC42diyc"
  },
  {
    "title": "Neso Academy – Compiler Design",
    "url": "https://www.youtube.com/playlist?list=PLBlnK6fEyqRjT3oJxFXRgjPNzeS-LFY-q"
  },
  {
    "title": "THE GATEHUB",
    "url": "https://www.youtube.com/playlist?list=PL1QH9gyQXfguPNDTsnG90W2kBDQpYLDQr"
  },
  {
    "title": "Sudhakar Atchala",
    "url": "https://www.youtube.com/playlist?list=PLXj4XH7LcRfC9pGMWuM6UWE3V4YZ9TZzM"
  },
  {
    "title": "NPTEL – Compiler Design",
    "url": "https://nptel.ac.in/courses/106104123"
  }
],
  "Probability and Statistics": [
  {
    "title": "Dr.Gajendra Purohit",
    "url": "https://www.youtube.com/playlist?list=PLU6SqdYcYsfJPF-4HphQQ8OceDtqhlSW8"
  },
  {
    "title": "Gate Smashers",
    "url": "https://www.youtube.com/playlist?list=PLxCzCOWd7aiFjZP4z1_3Kr3m3J5wu5Q8V"
  },
  {
    "title": "Great Learning",
    "url": "https://www.youtube.com/watch?v=Vfo5le26IhY"
  },
  {
    "title": "Khan Academy – Statistics and Probability",
    "url": "https://www.youtube.com/playlist?list=PLC58778F28211FA19"
  },
  {
    "title": "StatQuest – Statistics Playlist",
    "url": "https://www.youtube.com/playlist?list=PLblh5JKOoLUK0FLuzwntyYI10UQFUhsY9"
  },
  {
    "title": "NPTEL – Probability and Statistics",
    "url": "https://nptel.ac.in/courses/111105090"
  }
],
  "Problem Solving & Analysis": [
  {
    "title": "freeCodeCamp – Programming Problem Solving (Video 1)",
    "url": "https://www.youtube.com/watch?v=xJjxQjZTryI"
  },
  {
    "title": "freeCodeCamp – Programming Problem Solving (Playlist)",
    "url": "https://www.youtube.com/playlist?list=PLUzvZMEoR0KvEthotRQR3qoJ5FJxkhvaP"
  },
  {
    "title": "Abdul Bari – Algorithms",
    "url": "https://www.youtube.com/playlist?list=PLAXnLdrLnQpRcveZTtD644gM9uzYqJCwr"
  },
  {
    "title": "NeetCode – Problem Solving Patterns",
    "url": "https://www.youtube.com/playlist?list=PLot-Xpze53leF0FeHz2X0aG3zd0mr1AW_"
  }
],
  "Professional Aptitude & Logical Reasoning": [
  {
    "title": "CareerRide (Playlist 1)",
    "url": "https://www.youtube.com/playlist?list=PLpyc33gOcbVADMKqylI__O_O_RMeHTyNK"
  },
  {
    "title": "CareerRide (Playlist 2)",
    "url": "https://www.youtube.com/playlist?list=PLpyc33gOcbVC2wRtQXK8Gdt1VFjeVY4ea"
  },
  {
    "title": "CareerVidz",
    "url": "https://www.youtube.com/playlist?list=PLCcteVWYyBtt14T7wwUvAPlhPm3SQVAsI"
  },
  {
    "title": "Neso Academy – Aptitude and Reasoning",
    "url": "https://www.youtube.com/playlist?list=PLBlnK6fEyqRhMP7gwIe2j0hb1PCvYn0RI"
  },
  {
    "title": "TalentSprint Aptitude Preparation",
    "url": "https://www.youtube.com/playlist?list=PLffLKBjSzxT_0-jbwym7NyG6hpN7faov5"
  },
  {
    "title": "IndiaBix",
    "url": "https://www.indiabix.com/"
  }
],
  "Single Variable Calculus": [
  {
    "title": "3Blue1Brown – Essence of Calculus",
    "url": "https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr"
  },
  {
    "title": "MIT OpenCourseWare – Single Variable Calculus",
    "url": "https://www.youtube.com/playlist?list=PL590CCC2BC5AF3BC1"
  },
  {
    "title": "Pradeep Giri Academy",
    "url": "https://www.youtube.com/playlist?list=PLT3bOBUU3L9iw3yQWge_IjhXZlDgRGwyq"
  },
  {
    "title": "freeCodeCamp",
    "url": "https://www.youtube.com/watch?v=HfACrKJ_Y2w"
  },
  {
    "title": "Khan Academy – Calculus",
    "url": "https://www.youtube.com/playlist?list=PL19E79A0638C8D449"
  }
],
  "Software Engineering": [
  {
    "title": "Gate Smashers – Software Engineering",
    "url": "https://www.youtube.com/playlist?list=PLxCzCOWd7aiEed7SKZBnC6ypFDWYLRvB2"
  },
  {
    "title": "CS & IT Tutorials by",
    "url": "https://www.youtube.com/playlist?list=PLQ-nEJNYlEV29CBLzIDxcogm6CEZjVad2"
  },
  {
    "title": "KnowledgeGATE",
    "url": "https://www.youtube.com/playlist?list=PLmXKhU9FNesTrw7n8ouPsSLEcduRlENHr"
  },
  {
    "title": "NPTEL – Software Engineering",
    "url": "https://nptel.ac.in/courses/106105182"
  }
],
  "Web Technologies Lab": [
  {
    "title": "Apna College",
    "url": "https://www.youtube.com/playlist?list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n"
  },
  {
    "title": "code With Harry",
    "url": "https://www.youtube.com/playlist?list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w"
  },
  {
    "title": "freeCodeCamp – Web Development Full Course",
    "url": "https://www.youtube.com/watch?v=nu_pCVPKzTk"
  },
  {
    "title": "Traversy Media – Web Development",
    "url": "https://www.youtube.com/playlist?list=PLillGF-RfqbYeckUaD1z6nviTp31GLTH8"
  },
  {
    "title": "The Net Ninja – Web Development",
    "url": "https://www.youtube.com/playlist?list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G"
  }
],
  "Wireless and Mobile Networks": [
  {
    "title": "NPTEL – Wireless Communication",
    "url": "https://nptel.ac.in/courses/108106192"
  },
  {
    "title": "Gate Smashers – Computer Networks/Wireless Networks",
    "url": "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_"
  },
  {
    "title": "Neso Academy – Wireless Communication",
    "url": "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgLy3WPoMBTDovzkMPUugkY"
  },
  {
    "title": "Er. Manish Sachdeva",
    "url": "https://www.youtube.com/playlist?list=PLz1qUBU_8618W8rExBmaCOPmVmU2uxihD"
  },
  {
    "title": "5 Minutes Engineering",
    "url": "https://www.youtube.com/playlist?list=PLYwpaL_SFmcAjqrKO-b9UMa2AaAlzZY7D"
  }
],
};

// 1. Update Static Subject Files on Disk
const subjectsDir = path.join(__dirname, '../data/subjects');
console.log(`\n--- RESTORING EXACT STATIC FILES IN ${subjectsDir} ---`);

const files = fs.readdirSync(subjectsDir);
let filesUpdated = 0;

files.forEach(file => {
  if (file.endsWith('.js') && !file.includes('Topics') && file !== 'index.js' && file !== 'additionalSubjects.js') {
    const fullPath = path.join(subjectsDir, file);
    try {
      // Clear cache to make sure we read current disk state
      delete require.cache[require.resolve(fullPath)];
      const data = require(fullPath);
      const subject = Array.isArray(data) ? data[0] : data;

      if (subject && subject.name) {
        const newYt = resourcesMap[subject.name];
        if (newYt) {
          console.log(`Updating "${file}" (${subject.name}) -> exact links`);
          subject.youtubeResources = newYt;

          let outputCode = '';
          if (Array.isArray(data)) {
            outputCode = `module.exports = ${JSON.stringify(data, null, 2)};\n`;
          } else {
            outputCode = `module.exports = ${JSON.stringify(subject, null, 2)};\n`;
          }
          fs.writeFileSync(fullPath, outputCode, 'utf8');
          filesUpdated++;
        }
      }
    } catch (err) {
      console.error(`❌ Error processing file ${file}:`, err.message);
    }
  }
});

// 2. Update additionalSubjects.js on Disk
const additionalPath = path.join(__dirname, '../data/additionalSubjects.js');
console.log(`\n--- RESTORING EXACT additionalSubjects.js ---`);
if (fs.existsSync(additionalPath)) {
  try {
    delete require.cache[require.resolve(additionalPath)];
    const subjects = require(additionalPath);
    if (Array.isArray(subjects)) {
      subjects.forEach(subject => {
        const newYt = resourcesMap[subject.name];
        if (newYt) {
          console.log(`Updating in additionalSubjects: "${subject.name}"`);
          subject.youtubeResources = newYt;
        }
      });
      fs.writeFileSync(additionalPath, `module.exports = ${JSON.stringify(subjects, null, 2)};\n`, 'utf8');
      console.log(`✅ successfully wrote updates to additionalSubjects.js`);
    }
  } catch (err) {
    console.error(`❌ Error updating additionalSubjects.js:`, err.message);
  }
}

// 3. Update MongoDB
console.log(`\n--- RESTORING MongoDB DOCUMENT LINKS ---`);
const Subject = require('../models/Subject');

(async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 15000,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);

    const allSubjects = await Subject.find({});
    let dbUpdated = 0;

    for (let sub of allSubjects) {
      const newYt = resourcesMap[sub.name];
      if (newYt) {
        sub.youtubeResources = newYt;
        sub.markModified("youtubeResources");
        await sub.save();
        dbUpdated++;
        console.log(`✅ Updated exact youtubeResources in MongoDB for "${sub.name}"`);
      } else {
        console.log(`⚠️ No playlist mapping found for subject "${sub.name}".`);
      }
    }

    console.log(`\n🎉 Success! Restored exact YouTube links for all subjects.`);
    console.log(`Files updated: ${filesUpdated}`);
    console.log(`MongoDB documents updated: ${dbUpdated}`);
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
  } finally {
    process.exit(0);
  }
})();
