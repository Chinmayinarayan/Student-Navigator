module.exports = [
  {
    "title": "Introduction to Engineering Mechanics",
    "slug": "engineering-mechanics-introduction-to-engineering-mechanics",
    "order": 1,
    "estimatedHours": 3,
    "difficulty": "Beginner",
    "description": "Understand foundational principles of classical mechanics: Scope and Applications in engineering, Basic concepts (particle, rigid body, force, mass, space, time), Scalars vs Vectors, SI Units & Dimensions, Fundamental Laws of Mechanics (Newton's 3 Laws, Gravitation, Transmissibility of Forces, Parallelogram Law), and Free Body Diagrams (FBD).",
    "subTopics": [
      "Introduction to Engineering Mechanics",
      "Scope and Applications",
      "Basic Concepts",
      "Scalars and Vectors",
      "SI Units and Dimensions",
      "Fundamental Laws of Mechanics",
      "Free Body Diagram (FBD)"
    ],
    "prerequisiteTitles": [],
    "learningObjectives": [
      "Understand 6 Fundamental Principles of Mechanics: Newton's 3 Laws of Motion, Newton's Law of Gravitation, Principle of Transmissibility of Forces, Parallelogram Law of Forces.",
      "Construct accurate Free Body Diagrams (FBD) isolating bodies and replacing external constraints with reaction forces.",
      "Differentiate Scalar quantities (Mass, Time, Energy) and Vector quantities (Force, Velocity, Acceleration, Moment)."
    ],
    "notes": [
      {
        "title": "Fundamental Laws of Mechanics & Free Body Diagram Rules",
        "content": "INTRODUCTION TO MECHANICS & FREE BODY DIAGRAMS\n\n1. Principle of Transmissibility of Forces:\n   The point of application of a force on a rigid body can be transmitted anywhere along its Line of Action without changing the external state of rest or motion of the body.\n\n2. Free Body Diagram (FBD) Rules:\n   - Step 1: Isolate the body under consideration from all surrounding contacts and supports.\n   - Step 2: Draw all active applied forces (gravity weight $W = mg$, external pushes/pulls).\n   - Step 3: Draw all reactive forces from supports (Normal reactions $N$, friction $f$, pin reactions $R_x, R_y$, cable tensions $T$)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Engineering Mechanics: Statics and Dynamics",
        "author": "R.C. Hibbeler"
      },
      {
        "title": "Engineering Mechanics",
        "author": "S. Timoshenko, D.H. Young"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Engineering Mechanics Overview",
        "url": "https://www.geeksforgeeks.org/engineering-mechanics/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State Principle of Transmissibility of Forces. (2 Marks)",
        "State Newton's 3 Laws of Motion and Law of Universal Gravitation. (2 Marks)",
        "What is a Free Body Diagram (FBD) and why is it essential in statics? (2 Marks)"
      ],
      "sixMarks": [
        "Explain Parallelogram Law of Forces and derive expressions for resultant force magnitude $R = sqrt{F_1^2 + F_2^2 + 2F_1F_2 cos\theta}$ and direction $\tanalpha = \frac{F_2 sin\theta}{F_1 + F_2 cos\theta}$. (6 Marks)",
        "Draw Free Body Diagrams for: (a) Sphere resting between two smooth inclined planes, (b) Ladder leaning against a rough wall and smooth floor. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Statics Fundamentals. Detail Rigid Body idealization vs Deformable Body, SI unit conversions, vector resolution in 3D Cartesian coordinates ($mathbf{F} = F_x mathbf{i} + F_y mathbf{j} + F_z mathbf{k}$), and support reaction types (Roller, Smooth Surface, Pin/Hinge, Fixed Support). (10 Marks)"
      ]
    }
  },
  {
    "title": "Force Systems",
    "slug": "engineering-mechanics-force-systems",
    "order": 2,
    "estimatedHours": 5,
    "difficulty": "Beginner",
    "description": "Master coplanar force resolution and composition: Types of Forces (Collinear, Concurrent, Coplanar, Non-concurrent, Parallel), Resolution into orthogonal components ($F_x = F cos\theta, F_y = F sin\theta$), Resultant calculation ($mathbf{R} = sum mathbf{F}$), Equilibrium of Concurrent Forces ($sum F_x = 0, sum F_y = 0$), Non-Concurrent Equilibrium, and Lami's Theorem ($\frac{P}{sinalpha} = \frac{Q}{sin\beta} = \frac{R}{singamma}$).",
    "subTopics": [
      "Introduction to Forces",
      "Types of Forces",
      "Force Representation",
      "Resolution of Forces",
      "Composition of Forces",
      "Resultant of Force Systems",
      "Equilibrium of Concurrent Forces",
      "Equilibrium of Non-Concurrent Forces",
      "Lami's Theorem"
    ],
    "prerequisiteTitles": [
      "Introduction to Engineering Mechanics"
    ],
    "learningObjectives": [
      "Resolve coplanar forces into $X$ and $Y$ components to compute Resultant $R = sqrt{(sum F_x)^2 + (sum F_y)^2}$ and angle $\theta = \tan^{-1}left|\frac{sum F_y}{sum F_x}\right|$.",
      "Apply Lami's Theorem for 3 coplanar concurrent forces in equilibrium: $\frac{A}{sinalpha} = \frac{B}{sin\beta} = \frac{C}{singamma}$.",
      "Apply equilibrium conditions $sum F_x = 0, sum F_y = 0$ to calculate unknown cable tensions."
    ],
    "notes": [
      {
        "title": "Lami's Theorem Formula & Force Resolution Math",
        "content": "FORCE SYSTEMS & LAMI'S THEOREM\n\n1. Lami's Theorem for 3 Concurrent Equilibrium Forces:\n   If 3 coplanar forces acting at a point are in equilibrium, each force is proportional to the sine of the angle between the other two forces:\n   $\frac{P}{sin alpha} = \frac{Q}{sin \beta} = \frac{R}{sin gamma}$\n   - Where $alpha$ is angle between $Q$ and $R$, $\beta$ between $P$ and $R$, $gamma$ between $P$ and $Q$.\n\n2. Resultant of Coplanar Force System:\n   $R = sqrt{R_x^2 + R_y^2} = sqrt{left(sum F_x\right)^2 + left(sum F_y\right)^2}$\n   $\theta = \tan^{-1}left( \frac{sum F_y}{sum F_x} \right)$"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Vector Mechanics for Engineers: Statics",
        "author": "Ferdinand Beer, E. Johnston"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Force Systems & Lamis Theorem",
        "url": "https://www.geeksforgeeks.org/lamis-theorem/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State Lami's Theorem and state the condition required to apply it. (2 Marks)",
        "Differentiate between Concurrent and Non-Concurrent force systems. (2 Marks)",
        "Write formulas for resultant magnitude $R$ and direction $\theta$ of a coplanar force system. (2 Marks)"
      ],
      "sixMarks": [
        "Three forces of magnitude $100\text{ N}, 150\text{ N}$, and $200\text{ N}$ act at a point at angles $30^circ, 120^circ$, and $240^circ$ with positive X-axis. Find the magnitude and direction of the Resultant force. (6 Marks)",
        "A electric lamp of weight $W = 100\text{ N}$ is suspended from a ceiling by two strings making angles $30^circ$ and $60^circ$ with the horizontal. Calculate tensions $T_1$ and $T_2$ using Lami's Theorem. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on 2D and 3D Force System Analysis. Detail Cartesian vector representation $mathbf{F} = F mathbf{u}_F$, Direction Cosines ($cosalpha, cos\beta, cosgamma$), Varignon's Theorem for resultant location, and 3D equilibrium equations ($sum F_x=0, sum F_y=0, sum F_z=0$). (10 Marks)"
      ]
    }
  },
  {
    "title": "Moments and Couples",
    "slug": "engineering-mechanics-moments-and-couples",
    "order": 3,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Master rotational force effects: Moment of a Force ($M = F cdot d$), Principle of Moments, Varignon's Theorem ($mathbf{M}_O = sum (mathbf{r} \times mathbf{F}_i)$), Couples ($M_C = F cdot d$), Equivalent Force-Couple Systems, and engineering applications.",
    "subTopics": [
      "Moment of a Force",
      "Principle of Moments",
      "Varignon's Theorem",
      "Couples",
      "Equivalent Force-Couple Systems",
      "Applications of Moments"
    ],
    "prerequisiteTitles": [
      "Force Systems"
    ],
    "learningObjectives": [
      "Calculate Moment of a force about a point using Vector Cross Product $mathbf{M}_O = mathbf{r} \times mathbf{F}$ or scalar perpendicular distance $M = F cdot d$.",
      "Apply Varignon's Theorem: The moment of a resultant force about any point equals the sum of moments of its component forces about the same point.",
      "Replace a force with an equivalent Force-Couple system at a different point."
    ],
    "notes": [
      {
        "title": "Varignon's Theorem & Couple Moment Formulas",
        "content": "MOMENTS, COUPLES & VARIGNON'S THEOREM\n\n1. Varignon's Theorem (Principle of Moments):\n   The moment of the Resultant of a system of forces about any point is equal to the algebraic sum of the moments of the individual component forces about that same point:\n   $M_O^R = sum M_O = M_1 + M_2 + dots + M_n$\n   Vector Form: $mathbf{r} \times mathbf{R} = sum (mathbf{r} \times mathbf{F}_i)$\n\n2. Characteristics of a Couple:\n   A Couple consists of two equal, opposite, parallel forces separated by a perpendicular distance $d$.\n   - Moment of Couple $M = F cdot d$.\n   - The moment of a couple is a FREE VECTOR (same magnitude and sense about ANY point in its plane!)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Engineering Mechanics: Statics",
        "author": "R.C. Hibbeler"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Moment of a Force",
        "url": "https://www.geeksforgeeks.org/moment-of-a-force/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State Varignon's Theorem (Principle of Moments). (2 Marks)",
        "Define a Couple and state 2 unique properties of a couple moment. (2 Marks)",
        "What is an Equivalent Force-Couple System? (2 Marks)"
      ],
      "sixMarks": [
        "State and prove Varignon's Theorem for two coplanar concurrent forces. (6 Marks)",
        "A force $mathbf{F} = (20mathbf{i} + 30mathbf{j})\text{ N}$ acts at point $A(2, 4)\text{ m}$. Find the moment of force $mathbf{F}$ about origin $O(0,0)$ and about point $B(1, -2)\text{ m}$. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Force System Reduction. Detail reduction of a general coplanar force system to a single Resultant Force $R$ acting at a specific distance $\bar{x} = \frac{sum M_O}{R}$, 3D Wrench reduction (Force + Collinear Couple), and practical lever/wrench engineering applications. (10 Marks)"
      ]
    }
  },
  {
    "title": "Equilibrium of Rigid Bodies",
    "slug": "engineering-mechanics-equilibrium-of-rigid-bodies",
    "order": 4,
    "estimatedHours": 5,
    "difficulty": "Beginner",
    "description": "Master static equilibrium equations: 2D Static Equilibrium conditions ($sum F_x = 0, sum F_y = 0, sum M_O = 0$), 3D Equilibrium equations ($sum F_x=0, sum F_y=0, sum F_z=0, sum M_x=0, sum M_y=0, sum M_z=0$), Support reactions (Roller, Pin, Fixed support, Cable, Smooth surface), Two-Force and Three-Force members.",
    "subTopics": [
      "Conditions of Equilibrium",
      "Free Body Diagrams",
      "Equilibrium in Two Dimensions",
      "Equilibrium in Three Dimensions",
      "Support Reactions",
      "Engineering Applications"
    ],
    "prerequisiteTitles": [
      "Moments and Couples"
    ],
    "learningObjectives": [
      "Formulate 3 2D Equilibrium equations: $sum F_x = 0, sum F_y = 0, sum M_O = 0$.",
      "Calculate support reactions for beams and rigid frames under point loads, Uniformly Distributed Loads (UDL), and Uniformly Varying Loads (UVL).",
      "Apply Two-Force Member principle (Forces must be equal, opposite, and collinear)."
    ],
    "notes": [
      {
        "title": "2D Support Reaction Types & 2-Force / 3-Force Member Theorems",
        "content": "RIGID BODY EQUILIBRIUM & SUPPORT REACTIONS\n\n1. 2D Support Reaction Summary Table:\n   - Roller Support: 1 Unknown Reaction (Normal to supporting surface $N$).\n   - Smooth Pin / Hinge Support: 2 Unknown Reactions ($R_x, R_y$ or $R, \theta$).\n   - Fixed Support: 3 Unknown Reactions ($R_x, R_y$, and Reactive Moment $M_{fixed}$).\n   - Cable / Rope: 1 Unknown Reaction (Tension $T$ directed along cable).\n\n2. Two-Force & Three-Force Member Principles:\n   - Two-Force Member: If a body is in equilibrium under 2 forces, the forces MUST be equal in magnitude, opposite in direction, and collinear along line connecting points of application.\n   - Three-Force Member: If a body is in equilibrium under 3 forces, the lines of action of all 3 forces MUST be concurrent (intersect at a single point) or parallel!"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Engineering Mechanics: Statics",
        "author": "Hibbeler"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Equilibrium of Rigid Bodies",
        "url": "https://www.geeksforgeeks.org/equilibrium-of-a-rigid-body/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State 3 scalar equations of 2D equilibrium for a rigid body. (2 Marks)",
        "State properties of a Two-Force Member in statics. (2 Marks)",
        "Number of unknown reactions at a Fixed Support vs Pin Support. (2 Marks)"
      ],
      "sixMarks": [
        "Calculate support reactions at A (Pin) and B (Roller) for a 6m beam carrying a $20\text{ kN}$ point load at 2m from A and a UDL of $10\text{ kN/m}$ over right 3m. (6 Marks)",
        "State and prove Three-Force Member Theorem for coplanar non-parallel forces in equilibrium. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on 3D Rigid Body Equilibrium. Detail 6 scalar equilibrium equations, ball-and-socket joint reactions, thrust bearing reactions, statically determinate vs indeterminate structures, and improper constraints leading to instability. (10 Marks)"
      ]
    }
  },
  {
    "title": "Friction",
    "slug": "engineering-mechanics-friction",
    "order": 5,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master Dry Friction (Coulomb Friction): Static friction ($f_s le mu_s N$), Kinetic friction ($f_k = mu_k N$), Angle of Friction ($\tanphi = mu$), Angle of Repose ($\theta = phi$), Wedge Friction, Belt Friction ($T_1/T_2 = e^{mu \theta}$), Ladder Friction, and engineering applications (brakes, clutches, screws).",
    "subTopics": [
      "Introduction to Friction",
      "Types of Friction (Static, Kinetic, Rolling)",
      "Laws of Friction",
      "Angle of Friction",
      "Angle of Repose",
      "Wedge Friction",
      "Belt Friction",
      "Friction Applications"
    ],
    "prerequisiteTitles": [
      "Equilibrium of Rigid Bodies"
    ],
    "learningObjectives": [
      "Understand Laws of Coulomb Friction: Friction force $f le mu N$, opposes direction of impending motion, independent of contact area.",
      "Derive Belt Friction Equation for flat belts: $\frac{T_1}{T_2} = e^{mu \theta}$ (where $T_1 > T_2$ and $\theta$ is lap angle in radians).",
      "Solve Ladder Friction and Wedge Friction equilibrium problems."
    ],
    "notes": [
      {
        "title": "Angle of Repose Proof & Belt Friction Formula",
        "content": "LAWS OF FRICTION & BELT FRICTION\n\n1. Angle of Friction ($phi$) & Angle of Repose ($\theta$):\n   - Angle of Friction $phi$: Angle between Normal Reaction $N$ and Total Resultant Reaction $R$. $\tan phi = \frac{f_{max}}{N} = \frac{mu_s N}{N} = mu_s$.\n   - Angle of Repose $\theta$: Maximum inclination of a rough plane at which a block placed on it remains in limiting equilibrium without slipping.\n   - Proof: $\theta = phi implies \tan \theta = mu_s$.\n\n2. Belt Friction Equation (Flat Belt / Pulley):\n   $\frac{T_1}{T_2} = e^{mu \theta} quad implies quad lnleft(\frac{T_1}{T_2}\right) = mu \theta$\n   - $T_1$: Tight side tension, $T_2$: Slack side tension ($T_1 > T_2$).\n   - $mu$: Coefficient of friction, $\theta$: Angle of contact / lap angle in RADIANS."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Engineering Mechanics: Statics",
        "author": "Hibbeler"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Laws of Friction",
        "url": "https://www.geeksforgeeks.org/friction-in-engineering-mechanics/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State 4 Laws of Dry Coulomb Friction. (2 Marks)",
        "Prove that Angle of Repose equals Angle of Friction ($\theta = phi$). (2 Marks)",
        "State Belt Friction formula for flat belt over a cylindrical pulley. (2 Marks)"
      ],
      "sixMarks": [
        "A uniform ladder of length 5m and weight $300\text{ N}$ leans against a smooth vertical wall at $60^circ$ with floor. If coefficient of friction with floor $mu_s = 0.3$, how far up the ladder can a $700\text{ N}$ man climb before it slips? (6 Marks)",
        "Derive Belt Friction equation $\frac{T_1}{T_2} = e^{mu \theta}$ for a flat belt wrapped around a fixed drum. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Industrial Friction Applications. Detail Wedge Friction self-locking conditions, Screw Jack efficiency ($eta = \frac{\tanalpha}{\tan(alpha+phi)}$), Flat Pivot & Collar bearing friction, Disc Brake systems, and rolling resistance ($mu_r$). (10 Marks)"
      ]
    }
  },
  {
    "title": "Centroid and Center of Gravity",
    "slug": "engineering-mechanics-centroid-and-center-of-gravity",
    "order": 6,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master geometric centers: Centroid of 1D lines and 2D Plane Figures (Rectangle, Triangle, Circle, Semicircle, Quarter circle), Center of Gravity (CG) of 3D mass bodies, Center of Mass, Centroid of Composite Areas ($\bar{x} = \frac{sum A_i x_i}{sum A_i}, \bar{y} = \frac{sum A_i y_i}{sum A_i}$), Pappus-Guldinus Theorems for surface area and volume.",
    "subTopics": [
      "Centroid of Plane Figures",
      "Center of Gravity",
      "Composite Bodies",
      "Mass Center",
      "Engineering Applications"
    ],
    "prerequisiteTitles": [
      "Introduction to Engineering Mechanics"
    ],
    "learningObjectives": [
      "Locate Centroids of standard shapes: Semicircle ($\bar{y} = \frac{4R}{3pi}$), Right Triangle ($\bar{x} = b/3, \bar{y} = h/3$).",
      "Calculate Centroid of Composite I-section, T-section, and L-section areas.",
      "Apply Theorems of Pappus-Guldinus to calculate surface areas ($A = 2pi \bar{y} L$) and volumes ($V = 2pi \bar{y} A$) of bodies of revolution."
    ],
    "notes": [
      {
        "title": "Standard Centroid Formulas & Pappus-Guldinus Theorems",
        "content": "CENTROID OF PLANE FIGURES & PAPPUS THEOREMS\n\n1. Standard Centroid Locations ($\bar{y}$ from base):\n   - Rectangle ($b \times h$): $\bar{y} = h/2$\n   - Triangle (base $b$, height $h$): $\bar{y} = h/3$\n   - Semicircle (radius $R$): $\bar{y} = \frac{4R}{3pi} approx 0.424 R$\n   - Quarter circle (radius $R$): $\bar{x} = \bar{y} = \frac{4R}{3pi}$\n\n2. Theorems of Pappus-Guldinus:\n   - Theorem 1 (Surface Area): Surface area of a body of revolution generated by rotating a plane curve of length $L$ about a non-intersecting axis equals $A = 2pi \bar{y} L$.\n   - Theorem 2 (Volume): Volume of a body of revolution generated by rotating a plane area $A$ about a non-intersecting axis equals $V = 2pi \bar{y} A$."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Engineering Mechanics: Statics",
        "author": "Hibbeler"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Centroid and Center of Gravity",
        "url": "https://www.geeksforgeeks.org/centroid-and-center-of-gravity/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between Centroid, Center of Mass, and Center of Gravity. (2 Marks)",
        "State centroid location $\bar{y}$ for a semicircle of radius $R$ from its base diameter. (2 Marks)",
        "State Theorems 1 and 2 of Pappus-Guldinus. (2 Marks)"
      ],
      "sixMarks": [
        "Locate Centroid $(\bar{x}, \bar{y})$ of an asymmetric T-section flange $150 \times 20\text{ mm}$ and web $200 \times 20\text{ mm}$. (6 Marks)",
        "Use Pappus-Guldinus Theorem to calculate the volume and surface area of a sphere of radius $R$ generated by rotating a semicircle about its diameter. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Centroid & Center of Gravity Calculations. Detail integration methods for centroid of parabolic spandrel ($y = k x^2$), Composite bodies containing cutouts/holes (negative area method), 3D solid centroids (Cone $\bar{z} = h/4$, Hemispherical solid $\bar{z} = 3R/8$), and structural engineering centroidal axis alignment. (10 Marks)"
      ]
    }
  },
  {
    "title": "Moment of Inertia",
    "slug": "engineering-mechanics-moment-of-inertia",
    "order": 7,
    "estimatedHours": 6,
    "difficulty": "Intermediate",
    "description": "Master second moment of area & mass: Area Moment of Inertia ($I_{xx} = int y^2 dA$), Mass Moment of Inertia ($I = int r^2 dm$), Radius of Gyration ($k = sqrt{I/A}$), Parallel Axis Theorem ($I_{xx} = I_{G} + A d^2$), Perpendicular Axis Theorem ($I_{zz} = I_{xx} + I_{yy}$), and Composite Sections (I-beam, C-channel, angle section).",
    "subTopics": [
      "Introduction to Moment of Inertia",
      "Area Moment of Inertia",
      "Mass Moment of Inertia",
      "Radius of Gyration",
      "Parallel Axis Theorem",
      "Perpendicular Axis Theorem",
      "Composite Sections"
    ],
    "prerequisiteTitles": [
      "Centroid and Center of Gravity"
    ],
    "learningObjectives": [
      "Prove Parallel Axis Theorem: $I_{AB} = I_G + A d^2$ and Perpendicular Axis Theorem for 2D laminar areas: $I_z = I_x + I_y$.",
      "Remember standard Area MOI formulas: Rectangle ($I_{G,xx} = \frac{bh^3}{12}$), Circle ($I_{G} = \frac{pi d^4}{64}$), Triangle ($I_{G,xx} = \frac{bh^3}{36}$).",
      "Calculate Moment of Inertia $I_{xx}$ and $I_{yy}$ for composite structural beam sections."
    ],
    "notes": [
      {
        "title": "Parallel & Perpendicular Axis Theorems & MOI Reference Table",
        "content": "MOMENT OF INERTIA THEOREMS & STANDARD FORMULAS\n\n1. Parallel & Perpendicular Axis Theorems:\n   - Parallel Axis Theorem: $I_{axis} = I_{G} + A d^2$ (where $I_G$ is MOI about centroidal axis parallel to given axis, $d$ is distance between axes).\n   - Perpendicular Axis Theorem (Plane Laminas): $I_{zz} = I_{xx} + I_{yy}$ (for axes intersecting at origin $O$).\n\n2. Standard Area Moment of Inertia Table (About Centroidal Axis):\n-------------------------------------------------------------------------\nShape                 | $I_{xx}$ (Centroidal)   | $I_{yy}$ (Centroidal)\n-------------------------------------------------------------------------\nRectangle ($b \times h$) | $b h^3 / 12$            | $h b^3 / 12$\nTriangle ($b \times h$)  | $b h^3 / 36$            | -\nCircle (Diameter $D$)    | $pi D^4 / 64$          | $pi D^4 / 64$\nSemicircle (Radius $R$)  | $0.11 R^4$              | $pi R^4 / 8$\n-------------------------------------------------------------------------"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Engineering Mechanics: Statics",
        "author": "Hibbeler"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Moment of Inertia",
        "url": "https://www.geeksforgeeks.org/moment-of-inertia/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State and prove Parallel Axis Theorem for Area Moment of Inertia. (2 Marks)",
        "State Perpendicular Axis Theorem for plane areas. (2 Marks)",
        "Define Radius of Gyration $k$ and state its formula. (2 Marks)"
      ],
      "sixMarks": [
        "Calculate Moment of Inertia about centroidal X and Y axes ($I_{xx}, I_{yy}$) for a symmetrical I-section with top/bottom flanges $100 \times 10\text{ mm}$ and web $150 \times 10\text{ mm}$. (6 Marks)",
        "Determine Mass Moment of Inertia of a uniform thin rod of length $L$ and mass $M$ about: (a) Axis passing through center perpendicular to rod, (b) Axis passing through one end. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Structural Inertia & Product of Inertia. Detail Product of Inertia ($I_{xy} = int xy dA$), Principal Axes of Inertia ($\tan 2\theta_p = \frac{-2 I_{xy}}{I_x - I_y}$), Maximum/Minimum Principal Moments of Inertia, Mohr's Circle for Area MOI, and Mass MOI of cylinder, sphere, and cone. (10 Marks)"
      ]
    }
  },
  {
    "title": "Trusses",
    "slug": "engineering-mechanics-trusses",
    "order": 8,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master pin-jointed structural frameworks: Types of Trusses (Perfect $m = 2j - 3$, Imperfect/Deficient $m < 2j - 3$, Redundant $m > 2j - 3$), Assumptions in truss analysis, Method of Joints, Method of Sections, Zero Force Members identification, and practical bridge/roof applications.",
    "subTopics": [
      "Introduction to Trusses",
      "Types of Trusses",
      "Assumptions in Truss Analysis",
      "Method of Joints",
      "Method of Sections",
      "Zero Force Members",
      "Practical Applications"
    ],
    "prerequisiteTitles": [
      "Equilibrium of Rigid Bodies"
    ],
    "learningObjectives": [
      "Check determinacy of planar trusses: $m = 2j - 3$ (Perfect truss where $m$ is number of members and $j$ is number of joints).",
      "Identify Zero Force Members visually using inspection rules (2 non-collinear members at unloaded joint $implies$ both zero force; 3 members at joint with 2 collinear $implies 3^\text{rd}$ is zero force).",
      "Analyze member forces (Tension vs Compression) using Method of Joints and Method of Sections."
    ],
    "notes": [
      {
        "title": "Truss Assumptions, Zero-Force Rules & Method of Sections",
        "content": "TRUSS ANALYSIS: JOINTS & SECTIONS\n\n1. 4 Key Assumptions in Ideal Truss Analysis:\n   - Members are connected together by frictionless smooth pins at their ends.\n   - All loads and reaction forces are applied ONLY at the joints.\n   - The centroidal axis of each member is straight and aligned with joint pin centers.\n   - Member weight is neglected (or split half-and-half between end joints).\n   - RESULT: All truss members are TWO-FORCE MEMBERS in pure Tension or Compression!\n\n2. 2 Visual Rules for Zero-Force Members:\n   - Rule 1: If ONLY two non-collinear members meet at an unloaded joint, BOTH members are zero-force members!\n   - Rule 2: If three members meet at an unloaded joint and two are collinear, the third non-collinear member is a zero-force member!"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Engineering Mechanics: Statics",
        "author": "Hibbeler"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Method of Joints and Sections",
        "url": "https://www.geeksforgeeks.org/analysis-of-trusses/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State 4 standard assumptions made in ideal truss analysis. (2 Marks)",
        "State relationship between number of members $m$ and joints $j$ for a Perfect Plane Truss. (2 Marks)",
        "State 2 rules for identifying Zero Force Members in a truss by inspection. (2 Marks)"
      ],
      "sixMarks": [
        "Analyze 5-member Pratt truss subjected to $10\text{ kN}$ load at apex joint using Method of Joints. Find forces in all members (state Tension/Compression). (6 Marks)",
        "Use Method of Sections to determine force in top chord member $CD$ and diagonal member $CJ$ of a 6-panel Warren bridge truss. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Structural Truss Analysis. Detail Space Trusses (3D tetrahedral unit $m = 3j - 6$), Method of Sections cutting plane rules, Maxwell's Reciprocal Theorem, Tension Coefficient method, and real-world bridge/crane applications. (10 Marks)"
      ]
    }
  },
  {
    "title": "Beams and Frames",
    "slug": "engineering-mechanics-beams-and-frames",
    "order": 9,
    "estimatedHours": 6,
    "difficulty": "Intermediate",
    "description": "Master internal beam stresses: Types of Beams (Simply supported, Cantilever, Overhanging, Continuous, Fixed), Beam Supports, Load types (Point load, UDL, UVL, Applied Couple), Shear Force $V(x)$, Bending Moment $M(x)$, Shear Force Diagram (SFD), Bending Moment Diagram (BMD), Point of Contraflexure ($M(x) = 0$), and Frames & Pin-connected Machines.",
    "subTopics": [
      "Introduction to Beams",
      "Types of Beams",
      "Beam Supports",
      "Shear Force",
      "Bending Moment",
      "Shear Force Diagram (SFD)",
      "Bending Moment Diagram (BMD)",
      "Frames and Machines"
    ],
    "prerequisiteTitles": [
      "Equilibrium of Rigid Bodies"
    ],
    "learningObjectives": [
      "Understand differential relationships: $\frac{dV}{dx} = -w(x)$ (slope of SFD = negative load intensity) and $\frac{dM}{dx} = V(x)$ (slope of BMD = Shear Force).",
      "Locate Maximum Bending Moment where Shear Force changes sign ($V(x) = 0$).",
      "Draw complete SFD and BMD for Cantilever and Simply Supported Beams under point loads, UDL, and UVL."
    ],
    "notes": [
      {
        "title": "Calculus Relationships between Load, SFD, and BMD",
        "content": "SHEAR FORCE AND BENDING MOMENT DIAGRAMS\n\n1. Differential Calculus Relationships:\n   - Slope of Shear Force Diagram: $\frac{d V}{d x} = -w(x)$ (where $w(x)$ is load intensity).\n   - Slope of Bending Moment Diagram: $\frac{d M}{d x} = V(x)$ (where $V(x)$ is shear force).\n   - Maximum Bending Moment: Occurs at point where Shear Force passes through zero ($V(x) = 0$)!\n\n2. Sign Conventions:\n   - Shear Force ($V$): Positive if left-side up / right-side down.\n   - Bending Moment ($M$): Positive (Sagging - concave upward); Negative (Hogging - convex upward).\n   - Point of Contraflexure: Point on beam where Bending Moment changes sign ($M(x) = 0$) and curvature changes from sagging to hogging."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Mechanics of Materials",
        "author": "Ferdinand Beer, E. Russell Johnston"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Shear Force and Bending Moment",
        "url": "https://www.geeksforgeeks.org/shear-force-and-bending-moment/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define Shear Force and Bending Moment at a beam cross-section. (2 Marks)",
        "State calculus relationship between Load $w(x)$, Shear Force $V(x)$, and Bending Moment $M(x)$. (2 Marks)",
        "What is a Point of Contraflexure? (2 Marks)"
      ],
      "sixMarks": [
        "Draw SFD and BMD for a cantilever beam of length $4\text{ m}$ carrying a UDL of $5\text{ kN/m}$ over entire span and a point load of $10\text{ kN}$ at free end. (6 Marks)",
        "Draw SFD and BMD for a simply supported beam of length $6\text{ m}$ carrying a UDL of $4\text{ kN/m}$ over left half ($3\text{ m}$) and a central point load of $12\text{ kN}$. Find $M_{max}$. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Beams & Frames Analysis. Detail overhanging beam SFD/BMD with point of contraflexure, Uniformly Varying Load (UVL triangular load) cubic BMD curves, Multi-member Pin-Connected Frames analysis using dismembered member FBDs, and Machine pin reaction calculations. (10 Marks)"
      ]
    }
  },
  {
    "title": "Kinematics of Particles",
    "slug": "engineering-mechanics-kinematics-of-particles",
    "order": 10,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master motion geometry without considering forces: Rectilinear Motion (Uniform motion, Uniformly accelerated motion $v = u + at, s = ut + \frac{1}{2}at^2, v^2 = u^2 + 2as$), Variable acceleration motion ($v = \frac{ds}{dt}, a = \frac{dv}{dt} = v\frac{dv}{ds}$), Curvilinear Motion (Rectangular $x,y$, Normal-Tangential $a_n = v^2/\rho, a_t = dv/dt$, Polar $r,\theta$ components), Relative Motion, and Projectile Motion.",
    "subTopics": [
      "Introduction to Kinematics",
      "Rectilinear Motion",
      "Curvilinear Motion",
      "Velocity",
      "Acceleration",
      "Relative Motion",
      "Projectile Motion"
    ],
    "prerequisiteTitles": [
      "Introduction to Engineering Mechanics"
    ],
    "learningObjectives": [
      "Apply Rectilinear Motion equations for constant and variable acceleration.",
      "Calculate Normal ($a_n = \frac{v^2}{\rho}$) and Tangential ($a_t = \frac{dv}{dt}$) acceleration components in curvilinear path.",
      "Solve Projectile Motion problems: Trajectory equation $y = x\tan\theta - \frac{gx^2}{2u^2cos^2\theta}$, Range $R = \frac{u^2sin 2\theta}{g}$, Time of Flight $T = \frac{2usin\theta}{g}$."
    ],
    "notes": [
      {
        "title": "Normal-Tangential Acceleration & Projectile Motion Formulas",
        "content": "KINEMATICS: CURVILINEAR & PROJECTILE MOTION\n\n1. Normal-Tangential Acceleration ($n\text{-}t$ Coordinates):\n   - Tangential Acceleration $a_t = \frac{dv}{dt} = dot{v}$ (Changes MAGNITUDE of velocity).\n   - Normal (Centripetal) Acceleration $a_n = \frac{v^2}{\rho}$ (Changes DIRECTION of velocity toward center of curvature $\rho$).\n   - Total Acceleration $a = sqrt{a_t^2 + a_n^2}$.\n\n2. Projectile Motion Standard Formulas:\n   - Initial velocity components: $u_x = u cos\theta, u_y = u sin\theta$.\n   - Time of Flight: $T = \frac{2u sin\theta}{g}$\n   - Maximum Height: $H_{max} = \frac{u^2 sin^2\theta}{2g}$\n   - Horizontal Range: $R = \frac{u^2 sin 2\theta}{g}$ (Maximum range at $\theta = 45^circ$)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Engineering Mechanics: Dynamics",
        "author": "R.C. Hibbeler"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Kinematics Equations",
        "url": "https://www.geeksforgeeks.org/kinematics-in-physics/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between Kinematics and Kinetics. (2 Marks)",
        "State formulas for Normal ($a_n$) and Tangential ($a_t$) acceleration in curvilinear motion. (2 Marks)",
        "State optimal launch angle for maximum horizontal range of a projectile. (2 Marks)"
      ],
      "sixMarks": [
        "A particle moves along a curve $y = x^2/20$ (where $x,y$ are in meters). If horizontal velocity component $v_x = 4\text{ m/s}$ is constant, find magnitude of velocity and acceleration when $x = 10\text{ m}$. (6 Marks)",
        "A ball is kicked with initial velocity $u = 20\text{ m/s}$ at $30^circ$ to horizontal from top of a $40\text{ m}$ high cliff. Calculate time to hit ground and horizontal distance traveled. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Curvilinear Motion Kinematics. Detail Cylindrical Polar Coordinates ($r, \theta$) radial velocity $v_r = dot{r}$ & transverse velocity $v_\theta = rdot{\theta}$, radial acceleration $a_r = ddot{r} - rdot{\theta}^2$ & transverse acceleration $a_\theta = rddot{\theta} + 2dot{r}dot{\theta}$, Relative Motion analysis $mathbf{v}_{A/B} = mathbf{v}_A - mathbf{v}_B$, and Dependent Motion pulley systems. (10 Marks)"
      ]
    }
  },
  {
    "title": "Kinetics of Particles",
    "slug": "engineering-mechanics-kinetics-of-particles",
    "order": 11,
    "estimatedHours": 6,
    "difficulty": "Intermediate",
    "description": "Master force-acceleration relations: Newton's Second Law ($mathbf{F} = mmathbf{a}$ / D'Alembert's Principle $mathbf{F} + (-mmathbf{a}) = 0$), Work-Energy Principle ($U_{1-2} = T_2 - T_1$), Work done by force/spring ($U = \frac{1}{2}k(x_1^2 - x_2^2)$), Kinetic Energy ($T = \frac{1}{2}mv^2$), Conservative forces & Potential Energy, Impulse-Momentum Principle ($mathbf{J} = int mathbf{F} dt = mathbf{p}_2 - mathbf{p}_1$), Conservation of Linear Momentum, and Direct & Oblique Central Impact (Coefficient of Restitution $e = \frac{v_2 - v_1}{u_1 - u_2}$).",
    "subTopics": [
      "Newton's Laws of Motion",
      "Force and Acceleration",
      "Equation of Motion",
      "Work-Energy Principle",
      "Impulse and Momentum",
      "Conservation of Momentum",
      "Collision of Bodies"
    ],
    "prerequisiteTitles": [
      "Kinematics of Particles"
    ],
    "learningObjectives": [
      "Apply Work-Energy Principle: Work done by all forces $U_{1\to 2} = Delta T = \frac{1}{2}m v_2^2 - \frac{1}{2}m v_1^2$.",
      "Apply Impulse-Momentum Principle: Linear Impulse $mathbf{I} = int mathbf{F} dt = mmathbf{v}_2 - mmathbf{v}_1$.",
      "Solve Collision problems using Coefficient of Restitution $e$: Elastic ($e = 1$), Inelastic ($0 < e < 1$), Perfectly Plastic ($e = 0$)."
    ],
    "notes": [
      {
        "title": "Work-Energy Principle & Coefficient of Restitution Collision Math",
        "content": "KINETICS OF PARTICLES & IMPACT\n\n1. Work-Energy Principle:\n   $sum U_{1\to 2} = T_2 - T_1 = \frac{1}{2} m v_2^2 - \frac{1}{2} m v_1^2$\n   - Work of Spring Force: $U_{1\to 2} = \frac{1}{2} k (x_1^2 - x_2^2)$\n   - Conservation of Mechanical Energy (Conservative forces): $T_1 + V_1 = T_2 + V_2$\n\n2. Direct Central Impact & Coefficient of Restitution ($e$):\n   $e = \frac{\text{Relative velocity of separation}}{\text{Relative velocity of approach}} = \frac{v_2 - v_1}{u_1 - u_2}$\n   - Perfectly Elastic Impact: $e = 1$ (Kinetic energy conserved).\n   - Plastic / Inelastic Impact: $e = 0$ (Bodies stick together, max energy loss)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Engineering Mechanics: Dynamics",
        "author": "Hibbeler"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Impulse and Momentum",
        "url": "https://www.geeksforgeeks.org/impulse-and-momentum/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State Work-Energy Principle for a particle. (2 Marks)",
        "Define Impulse-Momentum Principle. (2 Marks)",
        "Define Coefficient of Restitution $e$ for direct central impact. (2 Marks)"
      ],
      "sixMarks": [
        "A $5\text{ kg}$ block slides down a $30^circ$ inclined plane from rest. If coefficient of kinetic friction $mu_k = 0.2$, calculate velocity of block after traveling $4\text{ m}$ using Work-Energy Principle. (6 Marks)",
        "A ball of mass $m_1 = 2\text{ kg}$ moving at $6\text{ m/s}$ collides head-on with a stationary ball of mass $m_2 = 3\text{ kg}$. If coefficient of restitution $e = 0.75$, find final velocities $v_1$ and $v_2$ after impact. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Particle Kinetics Methods. Detail D'Alembert's Principle dynamic equilibrium ($F - ma = 0$), Work done by variable forces, Gravitational & Elastic Potential Energy, Oblique Central Impact angle decomposition ($v_{1n}, v_{1t}, v_{2n}, v_{2t}$), and Angular Impulse-Momentum Theorem ($mathbf{H}_O = mathbf{r} \times mmathbf{v}$). (10 Marks)"
      ]
    }
  },
  {
    "title": "Rotational Dynamics",
    "slug": "engineering-mechanics-rotational-dynamics",
    "order": 12,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Master rigid body rotation: Angular Motion ($\theta, omega, alpha$), Rotation about fixed axis ($\tau = I alpha$), Work and Power in rotation ($U = int \tau d\theta, P = \tau omega$), Rotational Kinetic Energy ($T_{rot} = \frac{1}{2}Iomega^2$), General Plane Motion (Translation + Rotation), Instantaneous Center of Zero Velocity (ICZV), Rolling without slipping ($v = romega, a = ralpha$), Flywheel energy storage.",
    "subTopics": [
      "Angular Motion",
      "Angular Velocity",
      "Angular Acceleration",
      "Rotation About Fixed Axis",
      "Torque",
      "Rolling Motion",
      "Flywheel Basics"
    ],
    "prerequisiteTitles": [
      "Kinematics of Particles",
      "Kinetics of Particles",
      "Moment of Inertia"
    ],
    "learningObjectives": [
      "Apply Torque Equation for rigid body rotation: $\tau = I alpha$ (where $I$ is mass moment of inertia about rotation axis).",
      "Locate Instantaneous Center of Zero Velocity (ICZV / IC) for general plane motion mechanisms.",
      "Calculate Kinetic Energy of rolling body: $T = T_{trans} + T_{rot} = \frac{1}{2}m v_c^2 + \frac{1}{2}I_c omega^2$."
    ],
    "notes": [
      {
        "title": "Rotational Kinetic Energy & ICZV Determination Rules",
        "content": "ROTATIONAL DYNAMICS & GENERAL PLANE MOTION\n\n1. Fixed Axis Rotation & Rolling Kinetic Energy:\n   - Torque Equation: $\tau_{net} = I alpha$\n   - Rotational Work: $U = \tau cdot \theta$, Rotational Power: $P = \tau cdot omega$\n   - Total Kinetic Energy of Rolling Solid Cylinder ($v_c = romega$):\n     $T = \frac{1}{2} m v_c^2 + \frac{1}{2} I_c omega^2 = \frac{1}{2} m v_c^2 + \frac{1}{2} left(\frac{1}{2} m r^2\right) left(\frac{v_c}{r}\right)^2 = \frac{3}{4} m v_c^2$\n\n2. Instantaneous Center of Zero Velocity (ICZV / IC):\n   Point on a body in general plane motion that has ZERO instantaneous velocity!\n   - Direction of velocity vector $mathbf{v}_A$ is known $implies$ IC lies on line perpendicular to $mathbf{v}_A$ at $A$.\n   - Intersection of perpendiculars to $mathbf{v}_A$ and $mathbf{v}_B$ gives location of IC!"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Engineering Mechanics: Dynamics",
        "author": "Hibbeler"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Rotational Motion",
        "url": "https://www.geeksforgeeks.org/rotational-motion/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State Torque Equation $\tau = I alpha$ for rigid body rotation. (2 Marks)",
        "What is the Instantaneous Center of Zero Velocity (ICZV) in general plane motion? (2 Marks)",
        "Write formula for total kinetic energy of a body in rolling motion without slipping. (2 Marks)"
      ],
      "sixMarks": [
        "A solid uniform cylinder of mass $m = 10\text{ kg}$ and radius $r = 0.2\text{ m}$ rolls down a $30^circ$ inclined plane without slipping. Find its linear acceleration $a$ and friction force $f$. (6 Marks)",
        "Locate Instantaneous Center of Zero Velocity (ICZV) for a $1\text{ m}$ connecting rod in a slider-crank mechanism when crank angle is $45^circ$. Calculate angular velocity $omega_{rod}$. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Rigid Body Plane Dynamics. Detail D'Alembert's Principle for rigid bodies ($sum F_x = m a_{gx}, sum F_y = m a_{gy}, sum M_g = I_g alpha$), Flywheel Energy Fluctuation ($Delta E = I omega_{avg}^2 C_s$), Gyroscopic Precession ($\tau = I omega omega_p$), and 4-bar linkage kinematics. (10 Marks)"
      ]
    }
  },
  {
    "title": "Mechanical Vibrations",
    "slug": "engineering-mechanics-mechanical-vibrations",
    "order": 13,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Master oscillatory systems: Fundamentals of Vibration, Classification (Free vs Forced, Undamped vs Damped, Longitudinal/Transverse/Torsional), Single Degree of Freedom (SDOF) Undamped Free Vibrations ($omega_n = sqrt{k/m}$ rad/s, $f_n = \frac{1}{2pi}sqrt{k/m}$ Hz), Damped Vibrations (Viscous damping, Damping ratio $zeta = c/c_c$, Logarithmic decrement), Forced Harmonic Vibrations, Resonance, and Vibration Isolation.",
    "subTopics": [
      "Introduction to Vibrations",
      "Types of Vibrations",
      "Free Vibrations",
      "Forced Vibrations",
      "Damping",
      "Resonance",
      "Engineering Applications"
    ],
    "prerequisiteTitles": [
      "Kinetics of Particles",
      "Rotational Dynamics"
    ],
    "learningObjectives": [
      "Derive equation of motion for SDOF Spring-Mass System: $m ddot{x} + k x = 0 implies omega_n = sqrt{\frac{k}{m}}\text{ rad/s}$.",
      "Understand Damping Cases: Overdamped ($zeta > 1$), Critically Damped ($zeta = 1$), Underdamped ($zeta < 1$).",
      "Understand Resonance: Condition when forced excitation frequency $omega$ matches natural frequency $omega_n$ ($omega = omega_n$), causing catastrophic amplitude amplification!"
    ],
    "notes": [
      {
        "title": "Natural Frequency Math & Damping Cases Summary",
        "content": "MECHANICAL VIBRATIONS: SDOF SYSTEMS\n\n1. Undamped Free Vibrations (Spring-Mass SDOF):\n   - Differential Equation: $m ddot{x} + k x = 0 quad implies quad ddot{x} + omega_n^2 x = 0$\n   - Circular Natural Frequency: $omega_n = sqrt{\frac{k}{m}} \text{ rad/s}$\n   - Natural Frequency (Hz): $f_n = \frac{omega_n}{2pi} = \frac{1}{2pi} sqrt{\frac{k}{m}} \text{ Hz}$\n   - Natural Period: $T_n = \frac{1}{f_n} = 2pi sqrt{\frac{m}{k}} \text{ seconds}$.\n\n2. Damped Free Vibrations ($m ddot{x} + c dot{x} + k x = 0$):\n   - Critical Damping Coefficient: $c_c = 2 sqrt{k m} = 2 m omega_n$.\n   - Damping Ratio: $zeta = \frac{c}{c_c}$.\n   - Damped Natural Frequency ($zeta < 1$): $omega_d = omega_n sqrt{1 - zeta^2}$.\n\n3. Resonance Hazard:\n   When external forcing frequency $omega approx omega_n$ (frequency ratio $r = omega/omega_n = 1$), displacement amplitude $X \to infty$ in undamped systems, risking structural collapse (e.g. Tacoma Narrows Bridge, machine foundation failure)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Mechanical Vibrations",
        "author": "S.S. Rao"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Simple Harmonic Motion and Vibrations",
        "url": "https://www.geeksforgeeks.org/simple-harmonic-motion/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State formula for natural frequency $f_n$ (in Hz) of a simple spring-mass system. (2 Marks)",
        "Define Critical Damping Coefficient $c_c$ and Damping Ratio $zeta$. (2 Marks)",
        "What is Resonance in mechanical vibration systems? (2 Marks)"
      ],
      "sixMarks": [
        "Derive differential equation of motion $m ddot{x} + k x = 0$ for a SDOF spring-mass system using Energy Method and find its natural frequency $omega_n$. (6 Marks)",
        "A $20\text{ kg}$ machine is supported on 4 springs of stiffness $k = 2000\text{ N/m}$ each. Calculate natural frequency $f_n$ and period $T_n$. If a damper with $c = 100\text{ Ns/m}$ is added, calculate damped frequency $f_d$. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Forced Vibrations & Transmissibility. Detail Magnification Factor $MF = \frac{1}{sqrt{(1-r^2)^2 + (2zeta r)^2}}$, Force Transmissibility $TR = \frac{sqrt{1+(2zeta r)^2}}{sqrt{(1-r^2)^2 + (2zeta r)^2}}$, Torsional Vibrations of shafts ($omega_n = sqrt{q_t / I}$), and Vibration Isolator rubber pad design. (10 Marks)"
      ]
    }
  },
  {
    "title": "Engineering Applications of Mechanics",
    "slug": "engineering-mechanics-engineering-applications",
    "order": 14,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Explore multidisciplinary mechanics applications: Structural Engineering (Truss bridges, Cable-suspended roofs, Retaining walls), Mechanical Systems (Gear trains, Belt drives, Linkage mechanisms), Machine Components (Flywheels, Brakes, Governors), Robotics Applications (Forward/Inverse Kinematics of robot arms, Actuator torque sizing), Automotive Engineering (Vehicle dynamics, Braking distance, Rollover stability), Aerospace Applications (Satellite orbital mechanics, Rocket thrust acceleration), and Civil Infrastructure.",
    "subTopics": [
      "Structural Engineering",
      "Mechanical Systems",
      "Machine Components",
      "Robotics Applications",
      "Automotive Engineering",
      "Aerospace Applications",
      "Civil Engineering Applications"
    ],
    "prerequisiteTitles": [
      "Equilibrium of Rigid Bodies",
      "Rotational Dynamics"
    ],
    "learningObjectives": [
      "Analyze Minimum Braking Distance of a vehicle moving at velocity $v$: $s = \frac{v^2}{2 mu g}$.",
      "Calculate Actuator Joint Torque required to hold a 2-DOF robotic manipulator arm link in static equilibrium.",
      "Understand Cable Mechanics (Catenary vs Parabolic cable under uniform horizontal load $y = \frac{w x^2}{2 T_0}$)."
    ],
    "notes": [
      {
        "title": "Vehicle Minimum Braking Distance & Parabolic Cable Math",
        "content": "MULTIDISCIPLINARY MECHANICS APPLICATIONS\n\n1. Vehicle Minimum Braking Distance Equation:\n   Applying Work-Energy Principle during emergency braking on level road with friction coefficient $mu$:\n   $W_{friction} = Delta T implies -mu m g s = 0 - \frac{1}{2} m v^2 implies s = \frac{v^2}{2 mu g}$\n   - Example: For $v = 100\text{ km/h} = 27.78\text{ m/s}$ and $mu = 0.7 implies s = \frac{27.78^2}{2 \times 0.7 \times 9.81} approx 56.2\text{ meters}$.\n\n2. Parabolic Cable Under Uniform Horizontal Load $w_0$:\n   - Cable Shape Equation: $y = \frac{w_0 x^2}{2 T_0}$ (where $T_0$ is minimum horizontal tension at lowest point).\n   - Maximum Tension at Support (Span $L$, Sag $h$): $T_{max} = sqrt{T_0^2 + (w_0 L / 2)^2}$ where $T_0 = \frac{w_0 L^2}{8 h}$."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Engineering Mechanics",
        "author": "S. Timoshenko"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Applications of Mechanics",
        "url": "https://www.geeksforgeeks.org/applications-of-engineering-mechanics/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Write formula for minimum stopping/braking distance of a vehicle moving at speed $v$. (2 Marks)",
        "State horizontal tension formula $T_0$ for a parabolic cable of span $L$, load $w_0$, and sag $h$. (2 Marks)",
        "What is the role of Static Equilibrium in 2-link Robot Arm joint torque calculation? (2 Marks)"
      ],
      "sixMarks": [
        "A car traveling at $72\text{ km/h}$ applies brakes on a wet road ($mu_k = 0.35$). Calculate minimum stopping distance $s$ and braking time $t$. (6 Marks)",
        "Analyze a suspension bridge cable supporting a uniform load $w_0 = 20\text{ kN/m}$ over a span of $100\text{ m}$ with central sag $h = 10\text{ m}$. Find minimum and maximum tension in the cable. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Vehicle Dynamics & Mechanical Powertrains. Detail Vehicle rollover stability condition ($v_{crit} = sqrt{\frac{g b b_{track}}{2 h_{cg}}}$), Gear train velocity ratio & torque multiplication ($T_2/T_1 = N_2/N_1$), Flywheel energy fluctuation in punching presses, and Robot Arm D-H parameter kinematics. (10 Marks)"
      ]
    }
  },
  {
    "title": "Practical Problem Solving",
    "slug": "engineering-mechanics-practical-problem-solving",
    "order": 15,
    "estimatedHours": 6,
    "difficulty": "Advanced",
    "description": "Hands-on engineering mechanics problem solving: Comprehensive Numerical Problems, Real-World Case Studies (Bridge loading, Crane design, Tower crane counterweights), Simulation-Based Analysis (AutoCAD / Fusion 360 / ANSYS Statics FEA), Mini Design Problems, and Practical Exam Exercises.",
    "subTopics": [
      "Numerical Problems",
      "Engineering Case Studies",
      "Real-World Applications",
      "Simulation-Based Analysis",
      "Mini Design Problems",
      "Practical Exercises"
    ],
    "prerequisiteTitles": [
      "Force Systems",
      "Equilibrium of Rigid Bodies",
      "Trusses",
      "Beams and Frames",
      "Kinetics of Particles"
    ],
    "learningObjectives": [
      "Solve integrated multi-concept mechanics problems combining FBD, Friction, Moments, and Equilibrium.",
      "Design a Tower Crane Counterweight System balancing maximum boom payload moments.",
      "Verify analytical hand calculations of truss member forces using FEA software simulation (ANSYS / Fusion 360)."
    ],
    "notes": [
      {
        "title": "Integrated Problem Solving Strategy & FEA Verification Checklist",
        "content": "PRACTICAL MECHANICS PROBLEM SOLVING STRATEGY\n\n1. 5-Step Systematic Mechanics Problem-Solving Checklist:\n   1. Understand & Sketch: Read problem carefully and draw neat schematic diagram.\n   2. Draw FBD: Isolate target body, establish Cartesian $X\text{-}Y$ coordinate system, draw all active & reaction forces.\n   3. Write Equilibrium / Kinetic Equations: $sum F_x = 0, sum F_y = 0, sum M_O = 0$ or $sum F = m a$.\n   4. Solve System of Equations: Substitute known values and solve for unknown reactions/forces.\n   5. Sanity Check & Units: Check if answer magnitude, direction, and physical units make sense!\n\n2. Tower Crane Counterweight Balancing Math:\n   To prevent tipping about front pivot point $P$:\n   $sum M_P ge 0 implies W_{cw} cdot d_{cw} = W_{boom} cdot d_{boom} + W_{payload} cdot d_{payload}$"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "2500 Solved Problems in Fluid Mechanics and Hydraulics / Engineering Mechanics",
        "author": "Jack B. Evett"
      }
    ],
    "practiceLinks": [
      {
        "title": "Sanfoundry Engineering Mechanics MCQs & Problems",
        "url": "https://www.sanfoundry.com/1000-engineering-mechanics-questions-answers/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State 5 steps in the systematic problem-solving approach for Statics problems. (2 Marks)",
        "How is counterweight distance $d_{cw}$ calculated to balance a tower crane payload? (2 Marks)",
        "What is the benefit of verifying analytical hand calculations using FEA software? (2 Marks)"
      ],
      "sixMarks": [
        "A $500\text{ N}$ cylinder of radius $0.3\text{ m}$ rests on a $30^circ$ incline and is pulled up by a cable over a frictionless pulley connected to a hanging weight $W$. If coefficient of static friction $mu_s = 0.2$, calculate minimum weight $W$ to cause impending motion up the incline. (6 Marks)",
        "Design a simple A-frame lifting hoist to raise a $5000\text{ N}$ engine. Calculate member forces and pin reaction forces at the base. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive Mechanics Design Problem. Detail full structural design and analysis for a 10-meter span Warren highway bridge truss: (a) Calculate support reactions for a $50\text{ kN}$ moving truck load, (b) Find maximum tension and compression member forces using Method of Sections, (c) Determine required cross-sectional area of steel members assuming allowable stress $sigma_{allow} = 150\text{ MPa}$, and (d) Verify stability. (10 Marks)"
      ]
    }
  }
];
