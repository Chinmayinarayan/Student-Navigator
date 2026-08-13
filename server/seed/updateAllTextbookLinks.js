const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const textbooksBySubject = {
  "Algorithms": [
    {
      title: "Introduction to Algorithms",
      author: "Cormen, Leiserson, Rivest, Stein",
      url: "https://www.cs.mcgill.ca/~akroit/math/compsci/Cormen%20Introduction%20to%20Algorithms.pdf"
    },
    {
      title: "Algorithms",
      author: "Robert Sedgewick & Kevin Wayne",
      url: "https://archive.org/details/robert-sedgewick-kevin-daniel-wayne-algorithms-2011-addison-wesley"
    },
    {
      title: "The Algorithm Design Manual",
      author: "Steven Skiena",
      url: "https://sureshcseit.wordpress.com/wp-content/uploads/2021/04/skienathealgorithmdesignmanual.pdf"
    }
  ],
  "Applied Physics Lab": [
    {
      title: "University Physics",
      author: "OpenStax",
      url: "https://openstax.org/details/books/university-physics-volume-1"
    },
    {
      title: "Physics for Scientists and Engineers",
      author: "OpenStax",
      url: "https://archive.org/details/cnx-org-col12105"
    },
    {
      title: "MIT Physics I — Classical Mechanics",
      author: "MIT OpenCourseWare",
      url: "https://ocw.mit.edu/courses/8-01l-physics-i-classical-mechanics-fall-2005/"
    }
  ],
  "Arithmetical Thinking & Analytical Reasoning": [
    {
      title: "How to Solve It",
      author: "George Pólya",
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Math/Polya/George_Polya_How_To_Solve_It_.pdf"
    },
    {
      title: "Mathematical Circles",
      author: "Howard Eves",
      url: "https://archive.org/details/inmathematicalci0002eves/page/n8/mode/1up"
    },
    {
      title: "Problem Solving Strategies",
      author: "Arthur Engel",
      url: "https://mathematicalolympiads.wordpress.com/wp-content/uploads/2012/08/75427434-problem-books-in-mathematics-problem-solving-strategies.pdf"
    }
  ],
  "Artificial Intelligence and Machine Learning": [
    {
      title: "Artificial Intelligence: A Modern Approach",
      author: "Russell & Norvig",
      url: "https://repo.darmajaya.ac.id/4836/1/Stuart%20Russell%2C%20Peter%20Norvig-Artificial%20Intelligence_%20A%20Modern%20Approach-Prentice%20Hall%20%28%20PDFDrive%20%29.pdf"
    },
    {
      title: "Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow",
      author: "Aurélien Géron",
      url: "https://shashwatwork.github.io/assets/files/ml_ebook.pdf"
    },
    {
      title: "An Introduction to Statistical Learning",
      author: "Gareth James, Daniela Witten, Trevor Hastie, Robert Tibshirani",
      url: "https://www.stat.berkeley.edu/~rabbee/s154/ISLR_First_Printing.pdf"
    }
  ],
  "Basic Electrical Engineering": [
    {
      title: "Fundamentals of Electric Circuits",
      author: "Alexander & Sadiku",
      url: "https://uodiyala.edu.iq/uploads/PDF%20ELIBRARY%20UODIYALA/EL30/Fundamentals%20of%20Electric%20Circuits.pdf"
    },
    {
      title: "Electrical Engineering: Principles and Applications",
      author: "Hambley",
      url: "https://nirmt.com/storage/uploads/E-BOOK_BE-ELECTRICAL/Electrical%20Engineering%20Principles%20and%20Applications.pdf"
    },
    {
      title: "Introduction to Electrical Engineering",
      author: "OpenStax/LibreTexts",
      url: "https://eng.libretexts.org/Bookshelves/Electrical_Engineering/Introductory_Electrical_Engineering/Electrical_Engineering_(Johnson)/01%3A_Introduction_to_Electrical_Engineering"
    }
  ],
  "Basic Electronics": [
    {
      title: "Microelectronic Circuits",
      author: "Sedra & Smith",
      url: "https://dl.konkur.in/2025/02/Microelectronic2020-%5Bwww.konkur.in%5D.pdf"
    },
    {
      title: "Electronic Devices and Circuit Theory",
      author: "Boylestad",
      url: "https://kolegite.com/EE_library/books_and_lectures/%D0%95%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0/Electronic%20Devices%20and%20Circuit%20Theory%20-%2011th%20Edition.pdf"
    },
    {
      title: "Fundamentals of Microelectronics",
      author: "Behzad Razavi",
      url: "https://inaoeelectronica.wordpress.com/wp-content/uploads/2017/08/fundamentals-of-microelectronics-behzad-razavi.pdf"
    }
  ],
  "Basic Mechanical Engineering": [
    {
      title: "Engineering Mechanics: Statics & Dynamics",
      author: "Hibbeler",
      url: "https://archive.org/details/engineeringmecha0005hibb"
    },
    {
      title: "Engineering Thermodynamics",
      author: "P.K. Nag",
      url: "https://soaneemrana.com/onewebmedia/Thermodynamics%20by%20PK%20Nag.pdf"
    },
    {
      title: "Manufacturing Engineering and Technology",
      author: "Kalpakjian",
      url: "https://archive.org/details/manufacturingeng0000kalp_i7h6"
    }
  ],
  "Big Data Analytics": [
    {
      title: "Mining of Massive Datasets",
      author: "Leskovec, Rajaraman & Ullman",
      url: "https://books.google.co.in/books?id=16YaBQAAQBAJ&printsec=frontcover#v=onepage&q&f=false"
    },
    {
      title: "Hadoop: The Definitive Guide",
      author: "Tom White",
      url: "https://piazza-resources.s3.amazonaws.com/ist3pwd6k8p5t/iu5gqbsh8re6mj/OReilly.Hadoop.The.Definitive.Guide.4th.Edition.2015.pdf"
    },
    {
      title: "Data-Intensive Text Processing with MapReduce",
      author: "Jimmy Lin & Chris Dyer",
      url: "https://lintool.github.io/MapReduceAlgorithms/MapReduce-book-final.pdf"
    }
  ],
  "C Programming for Problem Solving": [
    {
      title: "The C Programming Language",
      author: "Kernighan & Ritchie",
      url: "https://www.cs.sfu.ca/~ashriram/Courses/CS295/assets/books/C_Book_2nd.pdf"
    },
    {
      title: "C Programming: A Modern Approach",
      author: "K. N. King",
      url: "https://archive.org/details/c-programming-a-modern-approach-2nd-ed-c-89-c-99-king-by"
    },
    {
      title: "Programming in ANSI C",
      author: "E. Balagurusamy",
      url: "https://bcrti.co.in/digitallibrary/includeFolder/noticeFolder/21092102293562.pdf"
    }
  ],
  "Cloud Computing": [
    {
      title: "Cloud Computing: Concepts, Technology & Architecture",
      author: "Thomas Erl",
      url: "https://www.scribd.com/document/1037249147/Cloud-Computing-Concepts-Technology-Security-and-Architecture-Second-Edition-Thomas-Erl-digital-download"
    },
    {
      title: "Distributed Systems",
      author: "Maarten van Steen & Andrew Tanenbaum",
      url: "https://komputasi.wordpress.com/wp-content/uploads/2018/03/mvsteen-distributed-systems-3rd-preliminary-version-3-01pre-2017-170215.pdf"
    }
  ],
  "Computer Networks": [
    {
      title: "Computer Networking: A Top-Down Approach",
      author: "Kurose & Ross",
      url: "https://ebooks.karbust.me/Technology/Computer%20Networking%20A%20Top-Down%20Approach,%208th%20Edition%20by%20James%20F.%20Kurose,%20Keith%20W.%20Ross-Pearson-9780136681557.pdf"
    },
    {
      title: "Computer Networks",
      author: "Andrew S. Tanenbaum",
      url: "https://theswissbay.ch/pdf/Gentoomen%20Library/Networking/Prentice%20Hall%20-%20Computer%20Networks%20Tanenbaum%204ed.pdf"
    },
    {
      title: "Data Communications and Networking",
      author: "Behrouz Forouzan",
      url: "https://jcer.in/jcer-docs/E-Learning/Digital%20Library%20/E-Books/Data-Communications-and-Network-5e.pdf"
    }
  ],
  "Computer Networks Lab": [
    {
      title: "Computer Networking: A Top-Down Approach",
      author: "Kurose & Ross",
      url: "https://ebooks.karbust.me/Technology/Computer%20Networking%20A%20Top-Down%20Approach,%208th%20Edition%20by%20James%20F.%20Kurose,%20Keith%20W.%20Ross-Pearson-9780136681557.pdf"
    },
    {
      title: "Computer Networks",
      author: "Tanenbaum",
      url: "https://theswissbay.ch/pdf/Gentoomen%20Library/Networking/Prentice%20Hall%20-%20Computer%20Networks%20Tanenbaum%204ed.pdf"
    },
    {
      title: "Wireshark User's Guide",
      author: "Wireshark team",
      url: "https://www.inf.ufes.br/~zegonc/material/Redes_de_Computadores/Wireshark-user-guide-a4.pdf"
    }
  ],
  "Computer Organization and Architecture": [
    {
      title: "Computer Organization and Design",
      author: "Patterson & Hennessy",
      url: "https://www.youseficlass.ir/wp-content/uploads/2023/07/Computer_Organization_and_Design_5th_Edition_David_A_Patterson_John_watermark.pdf"
    },
    {
      title: "Computer Architecture: A Quantitative Approach",
      author: "Hennessy & Patterson",
      url: "https://acs.pub.ro/~cpop/SMPA/Computer%20Architecture,%20Sixth%20Edition_%20A%20Quantitative%20Approach%20(%20PDFDrive%20).pdf"
    },
    {
      title: "Structured Computer Organization",
      author: "Tanenbaum",
      url: "https://nuleren.be/ebooks/StructuredComputerOrganization.pdf"
    }
  ],
  "Corporate Communication": [
    {
      title: "Business Communication Today",
      author: "Bovee & Thill",
      url: "https://archive.org/details/businesscommunic0000bove"
    },
    {
      title: "Business Communication",
      author: "Meenakshi Raman & Prakash Singh",
      url: "https://books.google.co.in/books/about/Business_Communication.html?id=QtVdPgAACAAJ&redir_esc=y"
    },
    {
      title: "Technical Communication",
      author: "Mike Markel",
      url: "https://archive.org/details/technicalcommuni0000mark"
    }
  ],
  "Cryptography & Network Security": [
    {
      title: "Cryptography and Network Security",
      author: "William Stallings",
      url: "https://theswissbay.ch/pdf/Books/Computer%20science/Cryptography%20and%20Network%20Security%205th%20ed%20-%20William%20Stallings.pdf"
    },
    {
      title: "Introduction to Modern Cryptography",
      author: "Katz & Lindell",
      url: "https://eclass.uniwa.gr/modules/document/file.php/CSCYB105/Reading%20Material/%5BJonathan_Katz%2C_Yehuda_Lindell%5D_Introduction_to_Mo%282nd%29.pdf"
    },
    {
      title: "Applied Cryptography",
      author: "Bruce Schneier",
      url: "https://mrajacse.wordpress.com/wp-content/uploads/2012/01/applied-cryptography-2nd-ed-b-schneier.pdf"
    }
  ],
  "Data Structures and Algorithms": [
    {
      title: "Data Structures and Algorithms in C++",
      author: "Mark Allen Weiss",
      url: "https://www.uoitc.edu.iq/images/documents/informatics-institute/Competitive_exam/DataStructures.pdf"
    },
    {
      title: "Data Structures and Algorithms Made Easy",
      author: "Narasimha Karumanchi",
      url: "https://dpvipracollege.in/wp-content/uploads/2023/01/Data-Structures-and-Algorithms-Narasimha-Karumanchi.pdf"
    },
    {
      title: "Algorithms",
      author: "Sedgewick & Wayne",
      url: "https://theswissbay.ch/pdf/Gentoomen%20Library/Algorithms/ALGORITHMS%20-%20ROBERT%20SEDGEWICK.pdf"
    }
  ],
  "Database Applications Lab": [
    {
      title: "Database System Concepts",
      author: "Silberschatz, Korth & Sudarshan",
      url: "https://www.mpgcamb.com/wp-content/uploads/2024/12/Abraham-Silberschatz-Henry-F.-Korth-S.-Sudarshan-Database-System-Concepts-McGraw-Hill-Education-2019.pdf"
    },
    {
      title: "Fundamentals of Database Systems",
      author: "Elmasri & Navathe",
      url: "https://www.auhd.edu.ye/upfiles/elibrary/Azal2020-01-22-12-28-11-76901.pdf"
    },
    {
      title: "SQL Cookbook",
      author: "Anthony Molinaro",
      url: "http://ommolketab.ir/aaf-lib/0er34bz5na47f9c6f8hvr65q29ql1r.pdf"
    }
  ],
  "Database Management System": [
    {
      title: "Database System Concepts",
      author: "Silberschatz, Korth & Sudarshan",
      url: "https://www.mpgcamb.com/wp-content/uploads/2024/12/Abraham-Silberschatz-Henry-F.-Korth-S.-Sudarshan-Database-System-Concepts-McGraw-Hill-Education-2019.pdf"
    },
    {
      title: "Fundamentals of Database Systems",
      author: "Elmasri & Navathe",
      url: "https://www.auhd.edu.ye/upfiles/elibrary/Azal2020-01-22-12-28-11-76901.pdf"
    },
    {
      title: "Database Management Systems",
      author: "Raghu Ramakrishnan & Johannes Gehrke",
      url: "https://xuanhien.wordpress.com/wp-content/uploads/2011/04/database-management-systems-raghu-ramakrishnan.pdf"
    }
  ],
  "Design Thinking for Social Innovation": [
    {
      title: "Change by Design",
      author: "Tim Brown",
      url: "https://cdn.bookey.app/files/pdf/book/en/change-by-design.pdf"
    },
    {
      title: "The Design of Everyday Things",
      author: "Don Norman",
      url: "https://dl.icdst.org/pdfs/files4/4bb8d08a9b309df7d86e62ec4056ceef.pdf"
    },
    {
      title: "Design Thinking",
      author: "Peter G. Rowe",
      url: "https://www.scribd.com/document/360478914/Design-Thinking-by-Peter-Rowe"
    }
  ],
  "Design and Analysis of Algorithms": [
    {
      title: "Introduction to Algorithms",
      author: "CLRS",
      url: "https://www.cs.mcgill.ca/~akroit/math/compsci/Cormen%20Introduction%20to%20Algorithms.pdf"
    },
    {
      title: "The Algorithm Design Manual",
      author: "Skiena",
      url: "https://archive.org/details/2008-book-the-algorithm-design-manual"
    },
    {
      title: "Algorithm Design",
      author: "Kleinberg & Tardos",
      url: "https://theswissbay.ch/pdf/Gentoomen%20Library/Algorithms/Algorithm%20Design%20-%20John%20Kleinberg%20-%20%C3%89va%20Tardos.pdf"
    }
  ],
  "Discrete Mathematics": [
    {
      title: "Discrete Mathematics and Its Applications",
      author: "Kenneth Rosen",
      url: "https://cis.temple.edu/~latecki/Courses/CIS2166-Fall25/RosenDiscreteMath8Ed.pdf"
    },
    {
      title: "Discrete Mathematics with Applications",
      author: "Susanna Epp",
      url: "https://archive.org/details/discretemathemat0000epps_f2p3"
    },
    {
      title: "Mathematics for Computer Science",
      author: "MIT",
      url: "https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/mit6_042js15_textbook.pdf"
    }
  ],
  "Embedded Systems and IoT": [
    {
      title: "Embedded Systems: Introduction to ARM Cortex-M Microcontrollers",
      author: "Jonathan Valvano",
      url: "https://faculty.uobasrah.edu.iq/uploads/teaching/1632289142.pdf"
    },
    {
      title: "Embedded Systems Design",
      author: "Steve Heath",
      url: "http://diliev.com/home/applications/Library/Embedded%20Systems%20Design%202nd%20ed%20-%20S%5B1%5D.%20Heath%20(Newnes,%202003)%20WW.pdf"
    },
    {
      title: "Internet of Things: A Hands-On Approach",
      author: "Bahga & Madisetti",
      url: "https://www.scribd.com/document/513453064/Internet-of-Things-a-Hands-On-Approach-by-Arshdeep-Bahga-Vijay-Madisetti"
    }
  ],
  "Engineering Chemistry": [
    {
      title: "Engineering Chemistry",
      author: "Jain & Jain",
      url: "https://www.scribd.com/document/625262343/Jain-Jain-Chemistry-Ch-1-and-2"
    },
    {
      title: "Engineering Chemistry",
      author: "Wiley resources",
      url: "https://mrcet.com/downloads/digital_notes/HS/R24/Engineering%20Chemistry.pdf"
    },
    {
      title: "Chemistry 2e",
      author: "OpenStax",
      url: "https://openstax.org/details/books/chemistry-2e"
    }
  ],
  "Engineering Exploration": [
    {
      title: "Engineering Fundamentals",
      author: "Saeed Moaveni",
      url: "https://dl.icdst.org/pdfs/files4/3d817d17ce77207736d15e3b5f192573.pdf"
    },
    {
      title: "Introduction to Engineering",
      author: "Paul H. Wright",
      url: "https://archive.org/details/introductiontoen00wrig_0"
    },
    {
      title: "Engineering: A Very Short Introduction",
      author: "David Blockley",
      url: "https://cdn.bookey.app/files/pdf/book/en/engineering.pdf"
    }
  ],
  "Engineering Mechanics": [
    {
      title: "Engineering Mechanics: Statics",
      author: "Hibbeler",
      url: "https://civilittee.com/storage/images/files/file_1712351875qg0nd.pdf"
    },
    {
      title: "Engineering Mechanics: Dynamics",
      author: "Hibbeler",
      url: "https://archive.org/details/engineeringmecha0000hibb_r0w4"
    }
  ],
  "Engineering Physics": [
    {
      title: "University Physics",
      author: "Young & Freedman",
      url: "https://kdl.kogistate.gov.ng/wp-content/uploads/2023/08/Hugh-D.-Young-Roger-A.-Freedman-A.-Lewis-Ford-University-Physics-with-Modern-Physics-with-MasteringPhysics%C2%AE-13th-Edition-Addison-Wesley-2011.pdf"
    },
    {
      title: "Fundamentals of Physics",
      author: "Halliday, Resnick & Walker",
      url: "https://dl.icdst.org/pdfs/files4/39e1817b05cf155433309dbb2f3289fe.pdf"
    },
    {
      title: "University Physics Volume 1",
      author: "OpenStax",
      url: "https://openstax.org/details/books/university-physics-volume-1"
    }
  ],
  "Exploratory Data Analysis": [
    {
      title: "R for Data Science",
      author: "Wickham, Çetinkaya-Rundel & Grolemund",
      url: "https://cloudera2017.wordpress.com/wp-content/uploads/2019/01/r-for-data-science-import-tidy-transform-visualize-and-model-data.pdf"
    },
    {
      title: "Python for Data Analysis",
      author: "Wes McKinney",
      url: "https://www.lkhibra.ma/books/Python-for-Data-Analysis.pdf"
    },
    {
      title: "An Introduction to Statistical Learning",
      author: "Gareth James, Daniela Witten, Trevor Hastie, Robert Tibshirani",
      url: "https://www.stat.berkeley.edu/~rabbee/s154/ISLR_First_Printing.pdf"
    }
  ],
  "Generative AI": [
    {
      title: "Generative Deep Learning",
      author: "David Foster",
      url: "https://www.scribd.com/document/878774407/Generative-Deep-Learning-PDF"
    },
    {
      title: "Deep Learning",
      author: "Goodfellow, Bengio & Courville",
      url: "https://aikosh.indiaai.gov.in/static/Deep+Learning+Ian+Goodfellow.pdf"
    },
    {
      title: "Natural Language Processing with Transformers",
      author: "Lewis Tunstall, Leandro von Werra, Thomas Wolf",
      url: "https://books.google.co.in/books?id=nzxbEAAAQBAJ&printsec=frontcover#v=onepage&q&f=false"
    }
  ],
  "Industry Readiness & Leadership Skills": [
    {
      title: "The 7 Habits of Highly Effective People",
      author: "Stephen Covey",
      url: "https://icrrd.com/public/media/01-11-2020-212827The%207%20Habits%20of%20Highly%20Effective%20People.pdf"
    },
    {
      title: "Leaders Eat Last",
      author: "Simon Sinek",
      url: "https://www.goodreads.com/book/show/41455542-leaders-eat-last-find-your-why-start-with-why"
    },
    {
      title: "The Leadership Challenge",
      author: "Kouzes & Posner",
      url: "https://books.google.co.in/books?id=t6WT1jA8Hg4C&printsec=frontcover#v=onepage&q&f=false"
    }
  ],
  "Linear Algebra": [
    {
      title: "Introduction to Linear Algebra",
      author: "Gilbert Strang",
      url: "https://jcer.in/jcer-docs/E-Learning/Digital%20Library%20/E-Books/linear-algebra-author-gilbert-strang.pdf"
    },
    {
      title: "Linear Algebra Done Right",
      author: "Sheldon Axler",
      url: "https://linear.axler.net/LADR4e.pdf"
    },
    {
      title: "Linear Algebra and Its Applications",
      author: "David Lay",
      url: "https://broman.dev/download/Linear%20Algebra%20and%20its%20Applications%205th%20Edition.pdf"
    }
  ],
  "Multivariable Calculus": [
    {
      title: "Calculus Volume 3",
      author: "OpenStax",
      url: "https://archive.org/details/calculusvolume30003stra"
    },
    {
      title: "Calculus",
      author: "James Stewart",
      url: "https://dzackgarza.com/assets/books/Stewart.pdf"
    },
    {
      title: "Vector Calculus, Linear Algebra, and Differential Forms",
      author: "Hubbard & Hubbard",
      url: "http://absinthe.tuxfamily.net/openmathdep/calculus_advanced/Vector_Calculus-Hubbards.pdf"
    }
  ],
  "Object Oriented Programming": [
    {
      title: "Object-Oriented Programming in C++",
      author: "Robert Lafore",
      url: "https://docs.google.com/file/d/0B21HoBq6u9TsUHhqS3JIUmFuamc/view?resourcekey=0-MYlet9RIjEukd6CvLEHUbw"
    },
    {
      title: "Head First Object-Oriented Analysis and Design",
      author: "Brett McLaughlin, Gary Pollice, David West",
      url: "https://archive.org/details/headfirstobjecto0000mcla"
    },
    {
      title: "Thinking in Java",
      author: "Bruce Eckel",
      url: "https://chenweixiang.github.io/docs/Thinking_in_Java_4th_Edition.pdf"
    }
  ],
  "Object Oriented Programming Lab": [
    {
      title: "C++ Primer",
      author: "Lippman, Lajoie & Moo",
      url: "https://zhjwpku.com/assets/pdf/books/C++.Primer.5th.Edition_2013.pdf"
    },
    {
      title: "Effective C++",
      author: "Scott Meyers",
      url: "https://elhacker.info/manuales/Lenguajes%20de%20Programacion/C++/Effective%20C++%2055%20Specific%20Ways%20to%20Improve%20Your%20Programs%20and%20Designs%20(3rd%20Edition).pdf"
    },
    {
      title: "Programming: Principles and Practice Using C++",
      author: "Bjarne Stroustrup",
      url: "https://chenweixiang.github.io/docs/The_C++_Programming_Language_4th_Edition_Bjarne_Stroustrup.pdf"
    }
  ],
  "Operating System Principles and Programming": [
    {
      title: "Operating System Concepts",
      author: "Silberschatz, Galvin & Gagne",
      url: "https://os.ecci.ucr.ac.cr/slides/Abraham-Silberschatz-Operating-System-Concepts-10th-2018.pdf"
    },
    {
      title: "Modern Operating Systems",
      author: "Andrew S. Tanenbaum",
      url: "https://www.dc16iupat.org/wp-content/uploads/2020/04/Modern.Operating.Systems.2nd.Ed_.by_.Tanenbaum-not-scanned-1-1.pdf"
    },
    {
      title: "Operating Systems: Three Easy Pieces",
      author: "Remzi H. Arpaci-Dusseau & Andrea C. Arpaci-Dusseau",
      url: "https://techiefood4u.wordpress.com/wp-content/uploads/2020/02/operating_systems_three_easy_pieces.pdf"
    }
  ],
  "Principles of Compiler Design": [
    {
      title: "Compilers: Principles, Techniques, and Tools",
      author: "Aho, Lam, Sethi & Ullman",
      url: "https://theswissbay.ch/pdf/Gentoomen%20Library/Programming/Compiler/Aho%20-%20Compilers%20-%20Principles%2C%20Techniques%2C%20and%20Tools%202e.pdf"
    },
    {
      title: "Engineering a Compiler",
      author: "Cooper & Torczon",
      url: "https://books.google.co.in/books?id=4yVQFVvsBNAC&printsec=frontcover#v=onepage&q&f=false"
    },
    {
      title: "Modern Compiler Implementation in C",
      author: "Andrew Appel",
      url: "file:///C:/Users/DELL/Downloads/Modern%20Compiler%20Implementation%20in%20C.pdf"
    }
  ],
  "Probability and Statistics": [
    {
      title: "Introduction to Probability",
      author: "Blitzstein & Hwang",
      url: "https://books.google.co.in/books?id=ZwSlMAEACAAJ&printsec=frontcover&redir_esc=y#v=onepage&q&f=false"
    },
    {
      title: "OpenIntro Statistics",
      author: "David Diez, Mine Çetinkaya-Rundel, Christopher Barr",
      url: "https://www2.stat.duke.edu/courses/Spring20/sta101.002/openintro-statistics-edition-3.pdf"
    },
    {
      title: "Probability and Statistics for Engineering and the Sciences",
      author: "Jay Devore",
      url: "https://www.gniotips.in/pdf/ebook/2026/sem-3/probability-and-statistics-for-engineering-and-the-sciences-by-jay-l-devore.pdf"
    }
  ],
  "Problem Solving & Analysis": [
    {
      title: "How to Solve It",
      author: "George Pólya",
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Math/Polya/George_Polya_How_To_Solve_It_.pdf"
    },
    {
      title: "The Art and Craft of Problem Solving",
      author: "Paul Zeitz",
      url: "https://www.softouch.on.ca/kb/data/Art%20and%20Craft%20of%20Problem%20Solving%203E%20(The).pdf"
    },
    {
      title: "Problem Solving Strategies",
      author: "Arthur Engel",
      url: "https://mathematicalolympiads.wordpress.com/wp-content/uploads/2012/08/75427434-problem-books-in-mathematics-problem-solving-strategies.pdf"
    }
  ],
  "Professional Aptitude & Logical Reasoning": [
    {
      title: "Quantitative Aptitude for Competitive Examinations",
      author: "R.S. Aggarwal",
      url: "https://cmsrkv.rgukt.in/storage/notices/files/dokumen.pub_quantitative-aptitude-for-competitive-examinations-by-rs-aggarwal-reprint-2017nbsped-9352534026-9789352534029_1769142935.pdf"
    },
    {
      title: "A Modern Approach to Verbal & Non-Verbal Reasoning",
      author: "R.S. Aggarwal",
      url: "https://cdn.bookey.app/files/pdf/book/en/a-modern-approach-to-verbal---non-verbal-reasoning.pdf"
    },
    {
      title: "How to Prepare for Quantitative Aptitude for CAT",
      author: "Arun Sharma",
      url: "https://dokumen.pub/quantitative-aptitude-for-cat-amp-other-mba-entrance-exams-3nbsped.html"
    }
  ],
  "Single Variable Calculus": [
    {
      title: "Calculus Volume 1",
      author: "OpenStax",
      url: "https://archive.org/details/calculusvolume10001stra"
    },
    {
      title: "Calculus",
      author: "James Stewart",
      url: "https://dzackgarza.com/assets/books/Stewart.pdf"
    },
    {
      title: "Thomas' Calculus",
      author: "George B. Thomas, Maurice D. Weir, Joel Hass",
      url: "https://rodrigopacios.github.io/mrpacios/download/Thomas_Calculus.pdf"
    }
  ],
  "Software Engineering": [
    {
      title: "Software Engineering",
      author: "Ian Sommerville",
      url: "https://web2.qatar.cmu.edu/cs/17313/Software-Engineering-9th-Edition-by-Ian-Sommerville.pdf"
    },
    {
      title: "Software Engineering: A Practitioner's Approach",
      author: "Roger Pressman",
      url: "https://www.mlsu.ac.in/econtents/16_EBOOK-7th_ed_software_engineering_a_practitioners_approach_by_roger_s._pressman_.pdf"
    },
    {
      title: "The Mythical Man-Month",
      author: "Frederick Brooks",
      url: "http://www.cesarkallas.net/arquivos/livros/informatica/Addison.Wesley.The.Mythical.Man-Month.Essays.on.Software.Engineering.20th.Anniversary.Edition.pdf"
    }
  ],
  "Web Technologies Lab": [
    {
      title: "Learning Web Design",
      author: "Jennifer Niederst Robbins",
      url: "https://files.addictbooks.com/wp-content/uploads/2024/04/Learning-Web-Design-5th-Edition.pdf"
    },
    {
      title: "JavaScript: The Definitive Guide",
      author: "David Flanagan",
      url: "https://archive.org/details/javascriptdefini0000flan_6edi"
    },
    {
      title: "MDN Web Docs — HTML, CSS & JavaScript reference",
      author: "MDN Web Development",
      url: "https://developer.mozilla.org/en-US/"
    }
  ],
  "Wireless and Mobile Networks": [
    {
      title: "Wireless Communications",
      author: "Andrea Goldsmith",
      url: "https://webpages.iust.ac.ir/matashbar/teaching/Wireless_communications_Goldsmith.pdf"
    },
    {
      title: "Wireless Communications and Networks",
      author: "William Stallings",
      url: "https://archive.org/details/isbn_9788131709733_02ed"
    },
    {
      title: "Mobile Communications",
      author: "Jochen Schiller",
      url: "https://archive.org/details/mobilecommunicat0000schi"
    }
  ]
};

// Helper normalize function
function normalizeName(n) {
  return n.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]/g, "");
}

async function run() {
  console.log(`Starting update of textbook links for all 42 subjects...`);

  // 1. Update all subject individual files in server/data/subjects/
  const subjectsDir = path.join(__dirname, "../data/subjects");
  const files = fs.readdirSync(subjectsDir);

  const matchedSubjects = new Set();

  for (const file of files) {
    if (file.endsWith(".js") && !file.includes("Topics") && !file.includes("CodingPractice") && file !== "index.js") {
      const filePath = path.join(subjectsDir, file);
      let subjectObj = require(filePath);

      let targetSubjectKey = Object.keys(textbooksBySubject).find(
        k => normalizeName(k) === normalizeName(subjectObj.name)
      );

      if (targetSubjectKey) {
        matchedSubjects.add(targetSubjectKey);
        subjectObj.textbooks = textbooksBySubject[targetSubjectKey];

        const fileContent = `module.exports = ${JSON.stringify(subjectObj, null, 2)};\n`;
        fs.writeFileSync(filePath, fileContent, "utf-8");
        console.log(`[FILE UPDATED] ${file} -> "${subjectObj.name}" (${subjectObj.textbooks.length} textbooks)`);
      } else {
        console.warn(`[WARN] No match found for file: ${file} (Name: "${subjectObj.name}")`);
      }
    }
  }

  console.log(`\nMatched ${matchedSubjects.size} of ${Object.keys(textbooksBySubject).length} subject files on disk.`);

  // 2. Update additionalSubjects.js if present
  const additionalSubjectsPath = path.join(__dirname, "../data/additionalSubjects.js");
  if (fs.existsSync(additionalSubjectsPath)) {
    try {
      const additionalSubjects = require(additionalSubjectsPath);
      let updatedCount = 0;
      for (const sub of additionalSubjects) {
        let targetSubjectKey = Object.keys(textbooksBySubject).find(
          k => normalizeName(k) === normalizeName(sub.name)
        );
        if (targetSubjectKey) {
          sub.textbooks = textbooksBySubject[targetSubjectKey];
          updatedCount++;
        }
      }
      fs.writeFileSync(additionalSubjectsPath, `module.exports = ${JSON.stringify(additionalSubjects, null, 2)};\n`, "utf-8");
      console.log(`[FILE UPDATED] additionalSubjects.js (${updatedCount} subjects updated)`);
    } catch (e) {
      console.error(`Error updating additionalSubjects.js:`, e);
    }
  }

  // 3. Connect to MongoDB and update Subject documents
  const mongoUri = process.env.MONGODB_URI || process.env.MONGO_URI || "mongodb://localhost:27017/career_platform";
  console.log(`\nConnecting to MongoDB...`);

  try {
    await mongoose.connect(mongoUri, { serverSelectionTimeoutMS: 10000 });
    console.log("Connected to MongoDB successfully.");

    const Subject = require("../models/Subject");
    const dbSubjects = await Subject.find({});
    console.log(`Found ${dbSubjects.length} subjects in MongoDB.`);

    let dbUpdated = 0;
    for (const dbSub of dbSubjects) {
      let targetSubjectKey = Object.keys(textbooksBySubject).find(
        k => normalizeName(k) === normalizeName(dbSub.name)
      );

      if (targetSubjectKey) {
        dbSub.textbooks = textbooksBySubject[targetSubjectKey];
        await dbSub.save();
        console.log(`[DB UPDATED] "${dbSub.name}" -> ${dbSub.textbooks.length} textbooks`);
        dbUpdated++;
      } else {
        console.warn(`[DB WARN] Subject in DB not matched: "${dbSub.name}"`);
      }
    }

    console.log(`\nSuccessfully updated ${dbUpdated} subjects in MongoDB!`);

    // Verify
    const verifySubjects = await Subject.find({});
    console.log("\n--- VERIFICATION IN DATABASE ---");
    let totalTextbooks = 0;
    for (const s of verifySubjects) {
      totalTextbooks += (s.textbooks || []).length;
      console.log(`✓ ${s.name}: ${(s.textbooks || []).length} textbooks`);
    }
    console.log(`\nTotal verified textbooks across all ${verifySubjects.length} subjects: ${totalTextbooks}`);

    await mongoose.disconnect();
  } catch (err) {
    console.error("Database update error:", err.message);
  }
}

run();
