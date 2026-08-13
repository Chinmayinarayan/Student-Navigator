module.exports = [
  {
    "title": "Introduction to Electronics",
    "slug": "basic-electronics-introduction-to-electronics",
    "order": 1,
    "estimatedHours": 3,
    "difficulty": "Beginner",
    "description": "Overview of Electronics Engineering: comparing electrical vs electronics systems, active/passive components, analog vs digital signals, and modern electronic applications.",
    "subTopics": [
      "Introduction to Electronics Engineering",
      "Difference Between Electrical and Electronics",
      "Electronic Components Overview",
      "Active and Passive Components",
      "Analog and Digital Electronics",
      "Electronic Systems and Applications"
    ],
    "prerequisiteTitles": [],
    "learningObjectives": [
      "Differentiate between Electrical systems (power generation/transmission) and Electronics systems (information processing/control).",
      "Identify active components (diodes, transistors, ICs) and passive components (R, L, C).",
      "Distinguish between continuous analog signals and discrete digital binary signals."
    ],
    "notes": [
      {
        "title": "Electrical vs Electronics Systems & Component Overview",
        "content": "INTRODUCTION TO ELECTRONICS\n\n1. Electrical vs Electronics:\n   - Electrical Engineering: Deals with flow of electric current for generation, transmission, and conversion of high-power energy (kW/MW level).\n   - Electronics Engineering: Deals with flow of electrons in semiconductors/vacuum for processing, control, and transmission of low-power information (mW/W level).\n\n2. Electronic Components Classification:\n   - Passive Components: Cannot amplify or control electron flow. Store or dissipate energy (Resistors, Capacitors, Inductors).\n   - Active Components: Control flow of electrons, amplify signals, or require external power to function (Semiconductor Diodes, BJTs, MOSFETs, Op-Amps, Integrated Circuits).\n\n3. Analog vs Digital Signals:\n   - Analog Signal: Continuous time-varying voltage/current (e.g. audio signals, temperature sensors).\n   - Digital Signal: Discrete two-level voltage signals representing binary 0 (0V) and 1 (5V/3.3V)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Electronic Devices and Circuit Theory (11th Edition)",
        "author": "Robert L. Boylestad & Louis Nashelsky",
        "url": "https://kolegite.com/EE_library/books_and_lectures/%D0%95%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0/Electronic%20Devices%20and%20Circuit%20Theory%20-%2011th%20Edition.pdf"
      }
    ],
    "practiceLinks": [
      {
        "title": "All About Circuits - Basic Electronics",
        "url": "https://www.allaboutcircuits.com/"
      },
      {
        "title": "Neso Academy Basic Electronics",
        "url": "https://www.nesoacademy.org/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is the main difference between Electrical and Electronics engineering? (2 Marks)",
        "Differentiate between Active and Passive electronic components with examples. (2 Marks)",
        "Define Analog and Digital signals with neat sketch diagrams. (2 Marks)"
      ],
      "sixMarks": [
        "Explain classification of electronic components (Active, Passive, Electromechanical, Optoelectronic) with symbols, functions, and real-world circuit applications. (6 Marks)",
        "Describe electronic system block diagram: Transducer -> Signal Conditioner -> Processing Unit -> Output Actuator/Display. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Foundations of Electronics. Detail historical evolution from vacuum tubes to microchips, energy signal conversions, component parameters, analog vs digital signal processing architectures, and modern electronic applications. (10 Marks)"
      ]
    }
  },
  {
    "title": "Semiconductor Fundamentals",
    "slug": "basic-electronics-semiconductor-fundamentals",
    "order": 2,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Understand semiconductor physics: Energy Band theory (Valence, Conduction bands, Bandgap E_g), Intrinsic vs Extrinsic semiconductors, Doping, N-type/P-type materials, and majority/minority charge carriers.",
    "subTopics": [
      "Introduction to Semiconductor Materials",
      "Conductors, Insulators and Semiconductors",
      "Energy Band Theory",
      "Intrinsic and Extrinsic Semiconductors",
      "Doping Process",
      "N-Type and P-Type Semiconductors",
      "Charge Carriers"
    ],
    "prerequisiteTitles": [],
    "learningObjectives": [
      "Classify materials based on energy bandgap E_g (Conductors: 0 eV, Semiconductors: ~1 eV, Insulators: > 5 eV).",
      "Understand doping of tetravalent Silicon/Germanium with Pentavalent (N-type) and Trivalent (P-type) impurities.",
      "Analyze carrier concentrations: electrons n and holes p, and mass action law n * p = n_i^2."
    ],
    "notes": [
      {
        "title": "Energy Band Theory, Doping & Carrier Transport",
        "content": "SEMICONDUCTOR PHYSICS\n\n1. Energy Band Classification:\n   - Conductors: Valence Band and Conduction Band overlap (E_g = 0 eV). High conductivity.\n   - Insulators: Forbidden Energy Gap E_g > 5 eV. No free electrons at room temperature.\n   - Semiconductors: Small forbidden gap E_g approx 1.1 eV (Silicon) or 0.7 eV (Germanium).\n\n2. Doping & Extrinsic Semiconductors:\n   - Doping: Addition of small controlled impurity atoms (1 in 10^6) to pure (intrinsic) semiconductor.\n   - N-Type Semiconductor: Doped with Pentavalent impurities (Phosphorus, Arsenic, Antimony). Majority carriers = Free Electrons, Minority = Holes.\n   - P-Type Semiconductor: Doped with Trivalent impurities (Boron, Gallium, Indium). Majority carriers = Holes, Minority = Electrons.\n\n3. Mass Action Law:\n   Under thermal equilibrium: n * p = n_i^2\n   where n is electron density, p is hole density, n_i is intrinsic carrier concentration."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Electronic Devices and Circuit Theory (11th Edition)",
        "author": "Robert L. Boylestad & Louis Nashelsky",
        "url": "https://kolegite.com/EE_library/books_and_lectures/%D0%95%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0/Electronic%20Devices%20and%20Circuit%20Theory%20-%2011th%20Edition.pdf"
      }
    ],
    "practiceLinks": [
      {
        "title": "Sanfoundry Semiconductor Physics MCQs",
        "url": "https://www.sanfoundry.com/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between Conductors, Insulators, and Semiconductors based on Energy Band Gap (E_g). (2 Marks)",
        "What is Doping? Name pentavalent and trivalent dopants. (2 Marks)",
        "State the Mass Action Law for semiconductors. (2 Marks)"
      ],
      "sixMarks": [
        "Explain Energy Band Diagram for Intrinsic and Extrinsic (N-type and P-type) semiconductors, showing Fermi Energy levels E_F. (6 Marks)",
        "Compare N-type and P-type semiconductors regarding dopant valency, majority/minority charge carriers, and energy levels. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Semiconductor Physics. Detail atomic structure of Silicon, energy band formation, intrinsic carrier generation, doping mechanisms, drift and diffusion current equations ($J = q n mu_n E + q D_n \frac{dn}{dx}$), and Mass Action Law. (10 Marks)"
      ]
    }
  },
  {
    "title": "PN Junction Diode",
    "slug": "basic-electronics-pn-junction-diode",
    "order": 3,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Learn PN junction formation physics: depletion region creation, barrier potential (0.7V Si, 0.3V Ge), Forward and Reverse biasing, V-I characteristics, and diode dynamic resistance.",
    "subTopics": [
      "Formation of PN Junction",
      "Depletion Region",
      "Barrier Potential",
      "Forward Biasing",
      "Reverse Biasing",
      "V-I Characteristics of Diode",
      "Diode Applications"
    ],
    "prerequisiteTitles": [
      "Semiconductor Fundamentals"
    ],
    "learningObjectives": [
      "Understand electron-hole recombination and space charge depletion region formation.",
      "Analyze forward bias cut-in voltage V_gamma and reverse bias breakdown voltage V_BR.",
      "Apply Shockley Diode Equation $I = I_s (e^{V / eta V_T} - 1)$ to compute diode currents."
    ],
    "notes": [
      {
        "title": "PN Junction Physics & V-I Characteristics",
        "content": "PN JUNCTION DIODE PHYSICS\n\n1. Formation & Depletion Region:\n   When P-type and N-type semiconductors join, electrons diffuse from N to P and holes from P to N. Uncompensated immobile ions remain (negative in P side, positive in N side), creating a Depletion Layer and Barrier Potential V_0 (0.7V for Si, 0.3V for Ge).\n\n2. Biasing Modes:\n   - Forward Bias: P attached to (+), N attached to (-). External V opposes barrier potential. Depletion layer narrows, current flows exponentially when V > V_gamma.\n   - Reverse Bias: P attached to (-), N attached to (+). Depletion layer widens. Only tiny Reverse Saturation Current I_s (nA/uA) flows due to minority carriers.\n\n3. Shockley Diode Equation:\n   I = I_s * [ exp( V / (eta * V_T) ) - 1 ]\n   where I_s is reverse saturation current, V_T = k T / q approx 26 mV at 300K, eta is ideality factor (1 for Ge, 2 for Si).\n\n4. Diode Resistance:\n   - Static Resistance: R_DC = V / I\n   - Dynamic Resistance: r_d = dV / dI = eta * V_T / I_forward"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Electronic Devices and Circuit Theory (11th Edition)",
        "author": "Robert L. Boylestad & Louis Nashelsky",
        "url": "https://kolegite.com/EE_library/books_and_lectures/%D0%95%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0/Electronic%20Devices%20and%20Circuit%20Theory%20-%2011th%20Edition.pdf"
      }
    ],
    "practiceLinks": [
      {
        "title": "IndiaBIX Diodes Practice",
        "url": "https://www.indiabix.com/electronics/diodes/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is the Depletion Region and Barrier Potential of a Silicon PN junction diode? (2 Marks)",
        "State Shockley Diode Equation and define thermal voltage V_T. (2 Marks)",
        "Differentiate between Static Resistance and Dynamic Resistance of a diode. (2 Marks)"
      ],
      "sixMarks": [
        "Draw and explain V-I characteristics curve of a Silicon PN junction diode in Forward and Reverse bias modes. Mark Cut-in voltage, Breakdown voltage, and I_s. (6 Marks)",
        "Calculate dynamic resistance r_d of a Silicon diode at 300K carrying a forward current of 10 mA (assume ideality factor eta = 1). (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on PN Junction Diode Physics. Detail charge carrier diffusion and drift processes, depletion width derivation, Shockley equation parameters, temperature dependence of V-I characteristics, and small-signal dynamic resistance derivation. (10 Marks)"
      ]
    }
  },
  {
    "title": "Diode Applications",
    "slug": "basic-electronics-diode-applications",
    "order": 4,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Explore diode circuit applications: Half-Wave, Full-Wave, and Bridge Rectifiers, capacitor filters, Zener Diode voltage regulation, LEDs, Photodiodes, and Solar Cells.",
    "subTopics": [
      "Rectifier Circuits",
      "Half Wave Rectifier",
      "Full Wave Rectifier",
      "Bridge Rectifier",
      "Filter Circuits",
      "Voltage Regulation",
      "Zener Diode as Voltage Regulator",
      "LED",
      "Photodiode",
      "Solar Cell"
    ],
    "prerequisiteTitles": [
      "PN Junction Diode"
    ],
    "learningObjectives": [
      "Calculate DC output voltage V_dc, Peak Inverse Voltage (PIV), Ripple Factor r, and Efficiency eta for Rectifier circuits.",
      "Design Zener Diode shunt voltage regulator for varying load and input conditions.",
      "Understand optoelectronic devices: LED light emission, Photodiode current sensing, and Solar Cell power generation."
    ],
    "notes": [
      {
        "title": "Rectifiers, Ripple Factors & Zener Voltage Regulator",
        "content": "DIODE APPLICATIONS & RECTIFIER FORMULAS\n\n1. Rectifier Comparison:\n   - Half-Wave Rectifier: 1 diode | V_dc = V_m / pi (0.318 V_m) | PIV = V_m | Ripple Factor r = 1.21 | Efficiency eta = 40.6%\n   - Full-Wave Center-Tapped: 2 diodes | V_dc = 2 V_m / pi (0.636 V_m) | PIV = 2 V_m | Ripple Factor r = 0.48 | Efficiency eta = 81.2%\n   - Full-Wave Bridge Rectifier: 4 diodes | V_dc = 2 V_m / pi (0.636 V_m) | PIV = V_m | Ripple Factor r = 0.48 | Efficiency eta = 81.2%\n\n2. Capacitor Filter:\n   - Reduces AC ripple voltage: V_ripple = I_dc / (4 * sqrt(3) * f * C) for full-wave rectifier.\n\n3. Zener Diode Voltage Regulator:\n   - Operates in Reverse Breakdown region at constant V_Z.\n   - Series Resistor: R_S = (V_in - V_Z) / (I_Z + I_L)\n   - Max Zener Current I_Zmax = P_Zmax / V_Z"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Electronic Devices and Circuit Theory (11th Edition)",
        "author": "Robert L. Boylestad & Louis Nashelsky",
        "url": "https://kolegite.com/EE_library/books_and_lectures/%D0%95%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0/Electronic%20Devices%20and%20Circuit%20Theory%20-%2011th%20Edition.pdf"
      }
    ],
    "practiceLinks": [
      {
        "title": "Neso Academy Diode Circuits",
        "url": "https://www.nesoacademy.org/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define Ripple Factor and Rectifier Efficiency. (2 Marks)",
        "State Peak Inverse Voltage (PIV) for Half-Wave and Bridge Rectifier circuits. (2 Marks)",
        "What is the working principle of a Photodiode vs a Solar Cell? (2 Marks)"
      ],
      "sixMarks": [
        "Explain Full-Wave Bridge Rectifier circuit operation during positive and negative half-cycles with input/output waveforms. (6 Marks)",
        "Design a Zener diode voltage regulator to supply 10V to a load drawing 20 mA from a 18V DC source. Minimum Zener current I_Zmin = 5 mA. Calculate series resistor R_S and Zener power rating. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Diode Applications. Detail rectification mathematics, Fourier expansion of rectified outputs, capacitor filter smoothing action, Zener diode breakdown mechanisms (Avalanche vs Zener breakdown), and optoelectronic principles of LED, Photodiode, and Solar Cell. (10 Marks)"
      ]
    }
  },
  {
    "title": "Transistors Fundamentals",
    "slug": "basic-electronics-transistors-fundamentals",
    "order": 5,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master Bipolar Junction Transistors (BJT): NPN/PNP construction, current components ($I_E = I_B + I_C$), current gains ($alpha, \beta, gamma$), and CB, CE, CC terminal configurations.",
    "subTopics": [
      "Introduction to Transistors",
      "Bipolar Junction Transistor (BJT)",
      "NPN and PNP Transistors",
      "Transistor Construction",
      "Transistor Operation",
      "Current Components in Transistor",
      "Transistor Configurations (Common Base, Common Emitter, Common Collector)"
    ],
    "prerequisiteTitles": [
      "PN Junction Diode"
    ],
    "learningObjectives": [
      "Understand BJT physical construction: heavily doped Emitter, thin lightly doped Base, moderately doped Collector.",
      "Analyze current equations: I_E = I_B + I_C, alpha = I_C / I_E, beta = I_C / I_B, beta = alpha / (1 - alpha).",
      "Compare Common Base (CB), Common Emitter (CE), and Common Collector (CC) configurations."
    ],
    "notes": [
      {
        "title": "BJT Construction, Current Relations & Configurations",
        "content": "TRANSISTOR FUNDAMENTALS\n\n1. BJT Physics & Current Relations:\n   - Three Terminals: Emitter (E), Base (B), Collector (C). Two PN Junctions: Emitter-Base Junction (EBJ), Collector-Base Junction (CBJ).\n   - Active Region Biasing: EBJ Forward Biased, CBJ Reverse Biased.\n   - Total Emitter Current: I_E = I_B + I_C\n   - Collector Current: I_C = alpha * I_E + I_CBO  (where I_CBO is reverse leakage current).\n\n2. Current Gain Relationships:\n   - Common Base Current Gain alpha = I_C / I_E (approx 0.95 - 0.99).\n   - Common Emitter Current Gain beta = I_C / I_B (approx 50 - 500).\n   - Mathematical Relation: beta = alpha / (1 - alpha)  |  alpha = beta / (1 + beta)\n   - Common Collector Current Gain gamma = I_E / I_B = 1 + beta.\n\n3. Configuration Comparison:\n   - CB: Low Input Impedance, High Output Impedance, Voltage Gain > 1, Current Gain < 1.\n   - CE: Moderate Input/Output Impedance, High Voltage & Current Gain (High Power Gain), 180 deg Phase Inversion.\n   - CC (Emitter Follower): High Input Impedance, Low Output Impedance, Voltage Gain approx 1, High Current Gain. Used for Impedance Matching."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Electronic Devices and Circuit Theory (11th Edition)",
        "author": "Robert L. Boylestad & Louis Nashelsky",
        "url": "https://kolegite.com/EE_library/books_and_lectures/%D0%95%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0/Electronic%20Devices%20and%20Circuit%20Theory%20-%2011th%20Edition.pdf"
      }
    ],
    "practiceLinks": [
      {
        "title": "IndiaBIX BJT Practice",
        "url": "https://www.indiabix.com/electronics/bipolar-junction-transistors/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State current relationship I_E = I_B + I_C in a BJT transistor. (2 Marks)",
        "Derive relationship beta = alpha / (1 - alpha) between current gains alpha and beta. (2 Marks)",
        "Why is Common Collector configuration called an Emitter Follower? (2 Marks)"
      ],
      "sixMarks": [
        "Explain NPN transistor working principle in Active Region with schematic diagram showing electron and hole current flows. (6 Marks)",
        "If a transistor has beta = 100 and base current I_B = 20 uA, calculate collector current I_C, emitter current I_E, and alpha value. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on BJT Transistor Fundamentals. Detail physical doping profiles, active/cutoff/saturation operating regions, input and output static characteristics curves for Common Emitter configuration, current gain derivations ($alpha, \beta, gamma$), and configuration comparison table. (10 Marks)"
      ]
    }
  },
  {
    "title": "Transistor Applications",
    "slug": "basic-electronics-transistor-applications",
    "order": 6,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Analyze BJT applications: Transistor as a Switch (Cutoff/Saturation), DC Load Line, Q-point operating point, Voltage Divider Biasing, and small-signal CE amplifiers.",
    "subTopics": [
      "Transistor as a Switch",
      "Transistor as an Amplifier",
      "Biasing of Transistors",
      "Load Line Analysis",
      "Small Signal Amplifiers",
      "Transistor Switching Circuits"
    ],
    "prerequisiteTitles": [
      "Transistors Fundamentals"
    ],
    "learningObjectives": [
      "Operate BJT as an electronic switch (Cutoff = OFF, Saturation = ON).",
      "Draw DC Load Line and establish stable Operating Point (Q-point) using Voltage Divider Bias.",
      "Analyze small-signal single-stage CE amplifier voltage gain $A_V = - g_m R_C$."
    ],
    "notes": [
      {
        "title": "DC Load Line, Q-point & Voltage Divider Biasing",
        "content": "TRANSISTOR BIASING & AMPLIFIERS\n\n1. BJT Operating Modes:\n   - Cutoff Region (OFF Switch): Both EBJ and CBJ Reverse Biased. I_B = 0, I_C = 0, V_CE = V_CC.\n   - Active Region (Linear Amplifier): EBJ Forward Biased, CBJ Reverse Biased. I_C = beta * I_B.\n   - Saturation Region (ON Switch): Both EBJ and CBJ Forward Biased. V_CE = V_CE(sat) approx 0.2V, I_C = I_C(sat) = V_CC / R_C.\n\n2. DC Load Line & Q-Point:\n   - KVL at Collector Loop: V_CC = I_C * R_C + V_CE  =>  I_C = (V_CC - V_CE) / R_C\n   - Q-Point (Quiescent Point): Intersection of DC Load Line with IB output characteristic curve (V_CEQ, I_CQ).\n\n3. Voltage Divider Bias Circuit:\n   Most stable biasing against temperature and beta variations.\n   - V_B = V_CC * [ R2 / (R1 + R2) ]\n   - V_E = V_B - V_BE (0.7V)\n   - I_E = V_E / R_E approx I_C\n   - V_CE = V_CC - I_C * (R_C + R_E)"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Electronic Devices and Circuit Theory (11th Edition)",
        "author": "Robert L. Boylestad & Louis Nashelsky",
        "url": "https://kolegite.com/EE_library/books_and_lectures/%D0%95%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0/Electronic%20Devices%20and%20Circuit%20Theory%20-%2011th%20Edition.pdf"
      },
      {
        "title": "Microelectronic Circuits",
        "author": "Adel S. Sedra & Kenneth C. Smith"
      }
    ],
    "practiceLinks": [
      {
        "title": "Sanfoundry Transistor Amplifiers MCQs",
        "url": "https://www.sanfoundry.com/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain BJT operating states for Transistor as a Switch (Cutoff and Saturation). (2 Marks)",
        "What is the Q-Point (Quiescent Point) on a DC Load Line? (2 Marks)",
        "Why is Voltage Divider Bias superior to Fixed Bias? (2 Marks)"
      ],
      "sixMarks": [
        "Draw Voltage Divider Bias circuit diagram. Given V_CC = 12V, R1 = 10k, R2 = 2.2k, R_C = 1k, R_E = 470 ohms, V_BE = 0.7V. Calculate Q-point (V_CEQ, I_CQ). (6 Marks)",
        "Explain operation of a single-stage Common Emitter (CE) amplifier with circuit diagram showing coupling capacitors and emitter bypass capacitor. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Transistor Biasing & Small-Signal Amplifiers. Detail DC Load Line construction, thermal runaway and stability factor S equation, Voltage Divider Bias analysis, h-parameter equivalent circuit model of CE amplifier, and frequency response curve. (10 Marks)"
      ]
    }
  },
  {
    "title": "Field Effect Transistors",
    "slug": "basic-electronics-field-effect-transistors",
    "order": 7,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Study Field Effect Transistors (FET): JFET and MOSFET (Depletion & Enhancement), V-I drain characteristics, Shockley FET equation, and CMOS logic applications.",
    "subTopics": [
      "Introduction to FET",
      "Junction Field Effect Transistor (JFET)",
      "Metal Oxide Semiconductor FET (MOSFET)",
      "Construction and Operation",
      "Characteristics of FET",
      "Applications of FET"
    ],
    "prerequisiteTitles": [
      "Transistors Fundamentals"
    ],
    "learningObjectives": [
      "Differentiate between BJT (current-controlled) and FET (voltage-controlled) devices.",
      "Analyze JFET operation, Pinch-off Voltage V_P, and Shockley equation $I_D = I_{DSS} (1 - V_{GS}/V_P)^2$.",
      "Compare Enhancement and Depletion MOSFETs and understand CMOS inverter logic."
    ],
    "notes": [
      {
        "title": "FET Physics, JFET & MOSFET Characteristics",
        "content": "FIELD EFFECT TRANSISTORS (FET)\n\n1. BJT vs FET Comparison:\n   - BJT: Bipolar, Current-Controlled Device (I_C controlled by I_B), Low Input Impedance (~kOhms).\n   - FET: Unipolar (majority carriers only), Voltage-Controlled Device (I_D controlled by V_GS), Extremely High Input Impedance (> 10^8 Ohms).\n\n2. JFET Operation & Shockley Equation:\n   - Terminals: Drain (D), Source (S), Gate (G).\n   - Reverse biased Gate-Source voltage V_GS controls channel width.\n   - Pinch-off Voltage (V_P): Value of V_DS at which drain current saturates at I_DSS.\n   - Shockley Equation: I_D = I_DSS * [ 1 - (V_GS / V_P) ]^2\n\n3. MOSFET Types:\n   - Depletion MOSFET (D-MOSFET): Channel exists physically; can operate in enhancement or depletion modes.\n   - Enhancement MOSFET (E-MOSFET): No physical channel at V_GS = 0. Requires V_GS > V_th (Threshold Voltage) to induce channel. Core building block of modern digital ICs (CMOS)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Electronic Devices and Circuit Theory (11th Edition)",
        "author": "Robert L. Boylestad & Louis Nashelsky",
        "url": "https://kolegite.com/EE_library/books_and_lectures/%D0%95%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0/Electronic%20Devices%20and%20Circuit%20Theory%20-%2011th%20Edition.pdf"
      }
    ],
    "practiceLinks": [
      {
        "title": "IndiaBIX FET Practice",
        "url": "https://www.indiabix.com/electronics/field-effect-transistors/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Compare BJT and FET transistors in terms of control quantity and input impedance. (2 Marks)",
        "State Shockley FET equation and define Pinch-off Voltage V_P. (2 Marks)",
        "What is Threshold Voltage (V_th) in an Enhancement MOSFET? (2 Marks)"
      ],
      "sixMarks": [
        "Explain N-channel JFET construction, working principle, and Drain characteristics curve showing Ohmic, Saturation, and Breakdown regions. (6 Marks)",
        "Differentiate between Depletion-type MOSFET and Enhancement-type MOSFET with structural diagrams and transfer characteristics. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Field Effect Transistors. Detail JFET channel pinch-off physics, Shockley equation derivations, Enhancement MOSFET channel inversion layer formation, CMOS inverter circuit, and application as voltage-variable resistor (VVR) and high-speed IC switches. (10 Marks)"
      ]
    }
  },
  {
    "title": "Operational Amplifiers",
    "slug": "basic-electronics-operational-amplifiers",
    "order": 8,
    "estimatedHours": 6,
    "difficulty": "Advanced",
    "description": "Master Operational Amplifiers (Op-Amp): ideal characteristics (A_V = inf, R_in = inf, R_out = 0, CMRR = inf), virtual ground concept, Inverting, Non-Inverting, Summing, Integrator, and Differentiator circuits.",
    "subTopics": [
      "Introduction to Op-Amp",
      "Ideal Op-Amp Characteristics",
      "Op-Amp Parameters",
      "Op-Amp Configurations (Inverting Amplifier, Non-Inverting Amplifier, Voltage Follower)",
      "Applications of Op-Amp (Comparator, Summing Amplifier, Integrator, Differentiator)"
    ],
    "prerequisiteTitles": [
      "Transistor Applications"
    ],
    "learningObjectives": [
      "Apply Ideal Op-Amp rules: Infinite Input Impedance (I_in = 0) and Virtual Ground ($V_+ = V_-$).",
      "Calculate gain for Inverting $A_V = -\frac{R_f}{R_1}$, Non-Inverting $A_V = 1 + \frac{R_f}{R_1}$, and Voltage Follower ($A_V = 1$).",
      "Design Op-Amp mathematical circuits: Summing Amplifier, Integrator ($v_o = -\frac{1}{RC} int v_{in} dt$), and Differentiator ($v_o = -RC \frac{dv_{in}}{dt}$)."
    ],
    "notes": [
      {
        "title": "Ideal Op-Amp Rules, Configurations & Mathematical Circuits",
        "content": "OPERATIONAL AMPLIFIER (OP-AMP) CHEATSHEET\n\n1. Ideal Op-Amp Properties (e.g. IC 741):\n   - Open Loop Gain A_V = infinity\n   - Input Impedance R_in = infinity (Input currents I+ = I- = 0)\n   - Output Impedance R_out = 0\n   - Bandwidth = infinity | CMRR = infinity | Slew Rate = infinity\n\n2. Virtual Ground Concept:\n   Due to infinite gain A_V, in negative feedback: V_+ - V_- = V_out / A_V = 0  =>  V_+ = V_-.\n\n3. Standard Configurations:\n   - Inverting Amplifier: V_out = - (R_f / R_in) * V_in\n   - Non-Inverting Amplifier: V_out = (1 + (R_f / R_1)) * V_in\n   - Voltage Follower (Buffer): V_out = V_in  (R_f = 0, R_1 = infinity)\n\n4. Mathematical Applications:\n   - Summing Amplifier: V_out = - R_f * [ (V1/R1) + (V2/R2) + (V3/R3) ]\n   - Integrator: V_out = - (1 / (R * C)) * Integral( V_in dt )\n   - Differentiator: V_out = - R * C * ( dV_in / dt )"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Electronic Devices and Circuit Theory (11th Edition)",
        "author": "Robert L. Boylestad & Louis Nashelsky",
        "url": "https://kolegite.com/EE_library/books_and_lectures/%D0%95%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0/Electronic%20Devices%20and%20Circuit%20Theory%20-%2011th%20Edition.pdf"
      },
      {
        "title": "Op-Amps and Linear Integrated Circuits",
        "author": "Ramakant A. Gayakwad"
      }
    ],
    "practiceLinks": [
      {
        "title": "Sanfoundry Op-Amp Questions",
        "url": "https://www.sanfoundry.com/operational-amplifier-questions-answers/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "List four ideal characteristics of an Operational Amplifier. (2 Marks)",
        "Explain Virtual Ground concept in Op-Amp circuits. (2 Marks)",
        "State output voltage formula for an Inverting Amplifier. (2 Marks)"
      ],
      "sixMarks": [
        "Derive output voltage expression V_out = (1 + R_f / R_1) V_in for a Non-Inverting Op-Amp circuit using virtual ground concept. (6 Marks)",
        "Draw circuit diagram of an Op-Amp Integrator. Derive its output voltage equation $v_o(t) = -\frac{1}{RC} int v_{in}(t) dt$. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Operational Amplifiers. Detail internal differential amplifier stage, ideal vs practical parameters (741 IC), negative feedback stabilization, Inverting, Non-Inverting, Summing Amplifier, Integrator, and Differentiator circuit analysis with output waveforms. (10 Marks)"
      ]
    }
  },
  {
    "title": "Digital Electronics Basics",
    "slug": "basic-electronics-digital-electronics-basics",
    "order": 9,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Understand digital systems: Analog vs Digital signals, Number system conversions (Binary, Decimal, Octal, Hexadecimal), Logic Gates (AND, OR, NOT, NAND, NOR, XOR, XNOR), and Boolean Algebra.",
    "subTopics": [
      "Introduction to Digital Systems",
      "Analog vs Digital Signals",
      "Number Systems (Binary, Decimal, Octal, Hexadecimal)",
      "Logic Gates (AND, OR, NOT, NAND, NOR, XOR, XNOR)",
      "Boolean Algebra",
      "Logic Gate Applications"
    ],
    "prerequisiteTitles": [
      "Transistors Fundamentals"
    ],
    "learningObjectives": [
      "Perform base conversions between Binary, Octal, Decimal, and Hexadecimal numbers.",
      "Construct Truth Tables and logic symbols for all 7 standard logic gates.",
      "Apply De Morgan's Theorems and Karnaugh Maps (K-Maps) for Boolean function simplification."
    ],
    "notes": [
      {
        "title": "Digital Number Systems, Logic Gates & De Morgan's Laws",
        "content": "DIGITAL ELECTRONICS BASICS\n\n1. Number Base Conversions:\n   - Binary (Base 2): Digits 0, 1.\n   - Decimal (Base 10): Digits 0-9.\n   - Hexadecimal (Base 16): Digits 0-9, A-F (A=10, F=15). 1 Hex digit = 4 Binary bits.\n\n2. Logic Gates & Truth Table Summary:\n   - AND: Y = A * B | OR: Y = A + B | NOT: Y = A'\n   - NAND: Y = (A * B)' | NOR: Y = (A + B)'  [Universal Gates]\n   - XOR: Y = A (+) B = A'B + AB' (High when inputs differ)\n   - XNOR: Y = (A (+) B)' = AB + A'B' (High when inputs equal)\n\n3. De Morgan's Theorems:\n   - Theorem 1: (A + B)' = A' * B'\n   - Theorem 2: (A * B)' = A' + B'"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Electronic Devices and Circuit Theory (11th Edition)",
        "author": "Robert L. Boylestad & Louis Nashelsky",
        "url": "https://kolegite.com/EE_library/books_and_lectures/%D0%95%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0/Electronic%20Devices%20and%20Circuit%20Theory%20-%2011th%20Edition.pdf"
      },
      {
        "title": "Digital Design",
        "author": "M. Morris Mano"
      }
    ],
    "practiceLinks": [
      {
        "title": "IndiaBIX Digital Electronics Practice",
        "url": "https://www.indiabix.com/electronics/digital-electronics/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Convert Decimal number (45)_10 into its Binary equivalent. (2 Marks)",
        "Why are NAND and NOR gates called Universal Logic Gates? (2 Marks)",
        "State De Morgan's Laws of Boolean algebra. (2 Marks)"
      ],
      "sixMarks": [
        "Construct Truth Tables and draw logic symbols for AND, OR, NOT, NAND, NOR, XOR, and XNOR gates. (6 Marks)",
        "Realize basic gates (AND, OR, NOT) using ONLY 2-input NAND gates. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Digital Fundamentals. Detail number system conversions (Binary, Octal, Hex, 2's Complement), Boolean algebra laws, Universal gate synthesis, and K-Map (Karnaugh Map) 4-variable simplification technique. (10 Marks)"
      ]
    }
  },
  {
    "title": "Combinational Logic Circuits",
    "slug": "basic-electronics-combinational-logic-circuits",
    "order": 10,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Design combinational logic building blocks: Half/Full Adders, Half/Full Subtractors, Multiplexers (MUX), Demultiplexers (DEMUX), Encoders, and Decoders.",
    "subTopics": [
      "Introduction to Combinational Circuits",
      "Half Adder",
      "Full Adder",
      "Half Subtractor",
      "Full Subtractor",
      "Multiplexer",
      "Demultiplexer",
      "Encoder",
      "Decoder"
    ],
    "prerequisiteTitles": [
      "Digital Electronics Basics"
    ],
    "learningObjectives": [
      "Design Half Adder (Sum = A XOR B, Carry = AB) and Full Adder circuits.",
      "Understand Multiplexers ($2^n$-to-1 MUX) for data selection and boolean function realization.",
      "Understand Encoders (8-to-3) and Decoders (3-to-8 / 7-Segment Display decoders)."
    ],
    "notes": [
      {
        "title": "Combinational Circuits: Adders, Subtractors & MUX/DEMUX",
        "content": "COMBINATIONAL LOGIC CIRCUITS\n\n1. Half Adder & Full Adder:\n   - Half Adder: Adds 2 single bits. Sum S = A (+) B, Carry C = A * B.\n   - Full Adder: Adds 3 bits (A, B, C_in).\n     Sum S = A (+) B (+) C_in\n     Carry C_out = A B + B C_in + A C_in\n\n2. Half Subtractor & Full Subtractor:\n   - Half Subtractor: Difference D = A (+) B, Borrow B_out = A' * B.\n\n3. Multiplexer (MUX):\n   \"Data Selector\" with 2^n inputs, n select lines, and 1 output.\n   - 4-to-1 MUX Output: Y = S1' S0' I0 + S1' S0 I1 + S1 S0' I2 + S1 S0 I3.\n\n4. Decoder & Encoder:\n   - Decoder: n inputs to 2^n outputs (e.g. 3-to-8 line decoder).\n   - Encoder: 2^n inputs to n outputs (e.g. 8-to-3 line encoder / Priority Encoder)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Electronic Devices and Circuit Theory (11th Edition)",
        "author": "Robert L. Boylestad & Louis Nashelsky",
        "url": "https://kolegite.com/EE_library/books_and_lectures/%D0%95%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0/Electronic%20Devices%20and%20Circuit%20Theory%20-%2011th%20Edition.pdf"
      },
      {
        "title": "Digital Design",
        "author": "M. Morris Mano"
      }
    ],
    "practiceLinks": [
      {
        "title": "Sanfoundry Combinational Logic Circuits MCQs",
        "url": "https://www.sanfoundry.com/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Write Boolean expressions for Sum and Carry of a Half Adder. (2 Marks)",
        "What is a Multiplexer (MUX)? State the relation between data inputs and select lines. (2 Marks)",
        "Differentiate between an Encoder and a Decoder. (2 Marks)"
      ],
      "sixMarks": [
        "Design a Full Adder circuit. Construct Truth Table, K-Maps for Sum and Carry, and draw logic diagram using XOR, AND, and OR gates. (6 Marks)",
        "Implement a 4-to-1 Multiplexer (MUX) using basic logic gates with truth table and logic diagram. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Combinational Logic Circuits. Detail design procedure for Adders, Subtractors, 8-to-1 MUX, 1-to-8 DEMUX, BCD-to-7 Segment Decoder, and logic function realization using MUX blocks. (10 Marks)"
      ]
    }
  },
  {
    "title": "Sequential Logic Circuits",
    "slug": "basic-electronics-sequential-logic-circuits",
    "order": 11,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Master bistable memory storage elements: SR, JK, D, and T Flip-Flops, Race-Around condition, Master-Slave configuration, Shift Registers, and Asynchronous/Synchronous Counters.",
    "subTopics": [
      "Introduction to Sequential Circuits",
      "Latches",
      "Flip-Flops (SR Flip-Flop, JK Flip-Flop, D Flip-Flop, T Flip-Flop)",
      "Registers",
      "Counters"
    ],
    "prerequisiteTitles": [
      "Combinational Logic Circuits"
    ],
    "learningObjectives": [
      "Differentiate between Combinational (no memory) and Sequential (memory) circuits.",
      "Understand Flip-Flop excitation tables for SR, JK, D (Data), and T (Toggle) flip-flops.",
      "Solve JK Race-Around condition using Master-Slave JK Flip-Flop.",
      "Analyze Shift Registers (SISO, SIPO, PISO, PIPO) and Ripple Counters."
    ],
    "notes": [
      {
        "title": "Sequential Memory: Flip-Flops, Registers & Counters",
        "content": "SEQUENTIAL LOGIC CIRCUITS\n\n1. Combinational vs Sequential:\n   - Combinational: Output depends ONLY on present inputs. No memory element.\n   - Sequential: Output depends on present inputs AND past history (stored state). Uses feedback & clock pulses.\n\n2. Flip-Flop Summary:\n   - SR Flip-Flop: Set (S=1, R=0 => Q=1), Reset (S=0, R=1 => Q=0), Invalid State (S=1, R=1).\n   - JK Flip-Flop: Fixes invalid state. When J=1, K=1 => Output Toggles Q_{n+1} = Q_n'.\n     * Race-Around Condition occurs when clock pulse width t_p > propagation delay t_pd. Solved by Master-Slave JK Flip-Flop.\n   - D (Data) Flip-Flop: Delay element Q_{n+1} = D.\n   - T (Toggle) Flip-Flop: Q_{n+1} = T (+) Q_n.\n\n3. Registers & Counters:\n   - Shift Register: Cascade of D flip-flops storing/shifting binary data (SISO, SIPO, PISO, PIPO).\n   - Asynchronous (Ripple) Counter: Clock input triggers only 1st flip-flop; output triggers next flip-flop."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Electronic Devices and Circuit Theory (11th Edition)",
        "author": "Robert L. Boylestad & Louis Nashelsky",
        "url": "https://kolegite.com/EE_library/books_and_lectures/%D0%95%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0/Electronic%20Devices%20and%20Circuit%20Theory%20-%2011th%20Edition.pdf"
      },
      {
        "title": "Digital Design",
        "author": "M. Morris Mano"
      }
    ],
    "practiceLinks": [
      {
        "title": "IndiaBIX Flip-Flops & Counters",
        "url": "https://www.indiabix.com/electronics/flip-flops/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between Combinational and Sequential circuits. (2 Marks)",
        "What is the Race-Around condition in a JK Flip-Flop? (2 Marks)",
        "Differentiate between a Latch and a Flip-Flop. (2 Marks)"
      ],
      "sixMarks": [
        "Explain working of JK Flip-Flop with logic diagram and Truth Table. Describe Master-Slave JK Flip-Flop to eliminate race-around condition. (6 Marks)",
        "Design a 3-bit Asynchronous (Ripple) Binary Up-Counter using T Flip-Flops showing timing waveforms. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Sequential Logic Circuits. Detail characteristic equations and excitation tables for SR, JK, D, T flip-flops, Master-Slave operation, 4-bit Universal Shift Register, and Synchronous MOD-10 Counter design. (10 Marks)"
      ]
    }
  },
  {
    "title": "Electronic Measuring Instruments",
    "slug": "basic-electronics-electronic-measuring-instruments",
    "order": 12,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Understand electronic test instrumentation: Digital Multimeters, Cathode Ray Oscilloscope (CRO) block diagram, Digital Storage Oscilloscope (DSO), and Signal Generators.",
    "subTopics": [
      "Measurement of Electronic Signals",
      "Multimeter",
      "Cathode Ray Oscilloscope (CRO)",
      "Digital Storage Oscilloscope (DSO)",
      "Signal Generator",
      "Measurement Techniques"
    ],
    "prerequisiteTitles": [
      "Introduction to Electronics"
    ],
    "learningObjectives": [
      "Understand Cathode Ray Tube (CRT) internal construction: electron gun, deflection plates, and phosphor screen.",
      "Measure voltage amplitude, frequency, and phase difference (Lissajous patterns) using a CRO.",
      "Differentiate between analog CRO and Digital Storage Oscilloscope (DSO)."
    ],
    "notes": [
      {
        "title": "CRO Architecture, DSO & Signal Generators",
        "content": "ELECTRONIC MEASURING INSTRUMENTS\n\n1. Cathode Ray Oscilloscope (CRO):\n   Visual display instrument plotting voltage (Y-axis) versus time (X-axis).\n   - Main Blocks: Cathode Ray Tube (CRT), Vertical Amplifier, Delay Line, Time Base Generator, Horizontal Amplifier, Power Supply.\n   - CRT Components: Electron Gun (Filament, Cathode, Control Grid, Accelerating Anodes), Vertical Deflection Plates (Y-plates), Horizontal Deflection Plates (X-plates), Phosphor Screen.\n\n2. Measurement Capabilities:\n   - Voltage: V_pp = (Vertical divisions) * (VOLTS/DIV knob setting).\n   - Period & Frequency: T = (Horizontal divisions for 1 cycle) * (TIME/DIV knob setting), f = 1 / T.\n   - Phase Angle: Lissajous Figures on X-Y mode.\n\n3. Digital Storage Oscilloscope (DSO):\n   Digitizes incoming analog signal via ADC, stores samples in RAM memory, and displays on LCD screen. Supports waveform storage, FFT spectral analysis, and automated measurements."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Electronic Devices and Circuit Theory (11th Edition)",
        "author": "Robert L. Boylestad & Louis Nashelsky",
        "url": "https://kolegite.com/EE_library/books_and_lectures/%D0%95%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0/Electronic%20Devices%20and%20Circuit%20Theory%20-%2011th%20Edition.pdf"
      },
      {
        "title": "Electronic Instrumentation and Measurements",
        "author": "David A. Bell"
      }
    ],
    "practiceLinks": [
      {
        "title": "Sanfoundry Electronic Instruments Questions",
        "url": "https://www.sanfoundry.com/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "List the main functional blocks of a Cathode Ray Oscilloscope (CRO). (2 Marks)",
        "How is frequency measured using a CRO? (2 Marks)",
        "What are Lissajous patterns used for in CRO measurement? (2 Marks)"
      ],
      "sixMarks": [
        "Explain block diagram of a Cathode Ray Oscilloscope (CRO) detailing Electron Gun, Time Base Generator, and CRT screen operation. (6 Marks)",
        "Compare Analog CRO and Digital Storage Oscilloscope (DSO) regarding memory storage, sampling rate, and waveform analysis features. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Electronic Test Instruments. Detail CRT physical construction, sweep generator synchronization, voltage/frequency/phase measurement calculations, DSO ADC sampling architectures, and Function Generator signal generation. (10 Marks)"
      ]
    }
  },
  {
    "title": "Communication Electronics Basics",
    "slug": "basic-electronics-communication-electronics-basics",
    "order": 13,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Learn communication systems fundamentals: Transmitter-Receiver architecture, modulation rationale, Amplitude Modulation (AM), Frequency Modulation (FM), and digital communication basics.",
    "subTopics": [
      "Introduction to Communication Systems",
      "Transmitter and Receiver",
      "Modulation Concepts",
      "Amplitude Modulation (AM)",
      "Frequency Modulation (FM)",
      "Digital Communication Basics"
    ],
    "prerequisiteTitles": [
      "Diode Applications",
      "Transistor Applications"
    ],
    "learningObjectives": [
      "Understand basic communication block diagram: Information Source -> Transmitter -> Channel (Noise) -> Receiver -> Destination.",
      "Explain why Modulation is required (antenna size reduction, noise reduction, multiplexing).",
      "Compare Amplitude Modulation (AM) and Frequency Modulation (FM) wave equations."
    ],
    "notes": [
      {
        "title": "Communication Systems, AM & FM Modulation Principles",
        "content": "COMMUNICATION ELECTRONICS BASICS\n\n1. Communication System Block Diagram:\n   Message Signal -> Modulator -> Transmitter -> Transmission Medium (Channel + Noise) -> Demodulator -> Receiver -> Destination.\n\n2. Need for Modulation:\n   - Antenna Height Reduction: Antenna length lambda = c / f. High frequency carrier reduces physical antenna length.\n   - Avoids Signal Mixing: Enables Frequency Division Multiplexing (FDM).\n   - Increases Transmission Range.\n\n3. Amplitude Modulation (AM):\n   Carrier amplitude varies in accordance with message signal.\n   - AM Equation: s(t) = A_c * [ 1 + m * cos(omega_m * t) ] * cos(omega_c * t)\n   - Modulation Index m = A_m / A_c. Total Power P_T = P_c * ( 1 + m^2 / 2 ).\n\n4. Frequency Modulation (FM):\n   Carrier frequency varies in accordance with message signal. Higher noise immunity compared to AM."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Electronic Devices and Circuit Theory (11th Edition)",
        "author": "Robert L. Boylestad & Louis Nashelsky",
        "url": "https://kolegite.com/EE_library/books_and_lectures/%D0%95%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0/Electronic%20Devices%20and%20Circuit%20Theory%20-%2011th%20Edition.pdf"
      },
      {
        "title": "Principles of Communication Systems",
        "author": "Herbert Taub & Donald Schilling"
      }
    ],
    "practiceLinks": [
      {
        "title": "Sanfoundry Communication Systems MCQs",
        "url": "https://www.sanfoundry.com/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State three reasons why Modulation is necessary in communication systems. (2 Marks)",
        "Define Modulation Index (m) for Amplitude Modulation. (2 Marks)",
        "Compare Amplitude Modulation (AM) and Frequency Modulation (FM). (2 Marks)"
      ],
      "sixMarks": [
        "Draw and explain block diagram of an Analog Communication System. Define Modulation and Demodulation. (6 Marks)",
        "Derive total power equation $P_T = P_c (1 + \frac{m^2}{2})$ for an AM wave. Calculate total power when $P_c = 500\text{W}$ and modulation index $m = 0.8$. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Communication Electronics. Detail electromagnetic spectrum, AM frequency spectrum and bandwidth, FM frequency deviation and Carson's rule, Superheterodyne Receiver block diagram, and Digital Communication PCM (Pulse Code Modulation) sampling principles. (10 Marks)"
      ]
    }
  },
  {
    "title": "Microelectronics and Embedded Basics",
    "slug": "basic-electronics-microelectronics-and-embedded-basics",
    "order": 14,
    "estimatedHours": 4,
    "difficulty": "Advanced",
    "description": "Explore microelectronics evolution: Integrated Circuits (IC) classification (SSI, MSI, LSI, VLSI), Microprocessors vs Microcontrollers, sensors/actuators, and embedded system applications.",
    "subTopics": [
      "Introduction to Integrated Circuits (IC)",
      "IC Classification",
      "Microprocessors Basics",
      "Microcontrollers Basics",
      "Sensors and Actuators",
      "Embedded System Applications"
    ],
    "prerequisiteTitles": [
      "Digital Electronics Basics"
    ],
    "learningObjectives": [
      "Understand Integrated Circuit scale classification (SSI, MSI, LSI, VLSI, ULSI).",
      "Compare Microprocessors (CPU only, e.g. 8085/x86) and Microcontrollers (CPU + RAM + ROM + I/O on single chip, e.g. 8051/ARM/ATMega).",
      "Understand Embedded System sensor/actuator interfaces in IoT and automotive automation."
    ],
    "notes": [
      {
        "title": "Integrated Circuits, Microprocessors vs Microcontrollers",
        "content": "MICROELECTRONICS & EMBEDDED SYSTEMS\n\n1. Integrated Circuit (IC) Scale Classification:\n   - SSI (Small Scale Integration): < 10 gates per chip.\n   - MSI (Medium Scale Integration): 10 to 100 gates (Adders, Decoders).\n   - LSI (Large Scale Integration): 100 to 10,000 gates (RAM, early CPUs).\n   - VLSI (Very Large Scale): 10,000 to 1,000,000 gates (Modern Processors).\n   - ULSI (Ultra Large Scale): > 1,000,000 transistors.\n\n2. Microprocessor vs Microcontroller:\n   - Microprocessor: CPU only on chip. Requires external RAM, ROM, I/O ports, Timers (e.g. Intel Core, 8085). High power, complex computing.\n   - Microcontroller: CPU + RAM + ROM + Timers + I/O Ports integrated on a single silicon chip (e.g. 8051, PIC, ATMega328). Low power, cost-effective for dedicated real-time control.\n\n3. Embedded Systems:\n   Dedicated hardware + software system performing specific real-time tasks (e.g. Washing Machines, ABS Brakes, Smartwatches)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Electronic Devices and Circuit Theory (11th Edition)",
        "author": "Robert L. Boylestad & Louis Nashelsky",
        "url": "https://kolegite.com/EE_library/books_and_lectures/%D0%95%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0/Electronic%20Devices%20and%20Circuit%20Theory%20-%2011th%20Edition.pdf"
      },
      {
        "title": "Microprocessor Architecture, Programming, and Applications with the 8085",
        "author": "Ramesh Gaonkar"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Embedded Systems",
        "url": "https://www.geeksforgeeks.org/embedded-systems/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Classify Integrated Circuits (ICs) based on level of integration (SSI, MSI, LSI, VLSI). (2 Marks)",
        "State three key differences between a Microprocessor and a Microcontroller. (2 Marks)",
        "What is an Embedded System? Give two real-world examples. (2 Marks)"
      ],
      "sixMarks": [
        "Compare Microprocessor and Microcontroller architectures with block diagrams showing internal CPU, memory, and peripheral buses. (6 Marks)",
        "Describe Embedded System architecture showing Sensor input -> Microcontroller -> Actuator output loop in automotive anti-lock braking systems (ABS). (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Microelectronics & Embedded Systems. Detail IC fabrication planar process, Von Neumann vs Harvard architecture, 8085/8051 pin functions, sensor interfacing (ADC/DAC), and IoT embedded applications. (10 Marks)"
      ]
    }
  },
  {
    "title": "Electronics Laboratory Experiments",
    "slug": "basic-electronics-electronics-laboratory-experiments",
    "order": 15,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Practical electronics lab procedures: PN diode and Zener diode V-I curves, Rectifier filter efficiency, CE Transistor input/output characteristics, Logic Gate truth tables, and Op-Amp amplifier verification.",
    "subTopics": [
      "Study of Diode Characteristics",
      "Zener Diode Voltage Regulation",
      "Transistor Characteristics",
      "Rectifier Circuits",
      "Logic Gate Verification",
      "Op-Amp Applications",
      "Digital Circuit Implementation"
    ],
    "prerequisiteTitles": [
      "Diode Applications",
      "Transistor Applications",
      "Operational Amplifiers"
    ],
    "learningObjectives": [
      "Plot PN Diode forward/reverse V-I curves and measure cut-in voltage V_gamma.",
      "Obtain CE Transistor input (I_B vs V_BE) and output (I_C vs V_CE) static characteristics.",
      "Verify Op-Amp Inverting/Non-Inverting gain formulas and digital logic gate truth tables on breadboard/simulators."
    ],
    "notes": [
      {
        "title": "Electronics Lab Manual: Experiments & Circuit Procedures",
        "content": "ELECTRONICS LABORATORY EXPERIMENTS MANUAL\n\n1. Experiment 1: PN Junction Diode V-I Characteristics\n   - Apparatus: Diode (1N4007), DC Supply, Ammeter, Voltmeter, Resistor.\n   - Procedure: Increase forward voltage V in steps of 0.1V, measure current I. Plot graph to determine cut-in voltage (~0.7V) and dynamic resistance r_d = dV/dI.\n\n2. Experiment 2: CE Transistor Characteristics\n   - Input Characteristics: Keep V_CE constant (e.g. 5V), vary V_BE, measure I_B.\n   - Output Characteristics: Keep I_B constant (e.g. 20 uA), vary V_CE from 0 to 10V, measure I_C. Determine current gain beta = dI_C / dI_B.\n\n3. Experiment 3: Full-Wave Bridge Rectifier & Filter\n   - Measure AC input RMS voltage, DC output voltage V_dc across load, and ripple factor r = V_ac / V_dc using Oscilloscope.\n\n4. Experiment 4: Op-Amp Inverting & Non-Inverting Amplifiers\n   - IC 741: Connect R_f = 10k, R_in = 1k. Verify V_out = -10 * V_in for inverting configuration."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Electronic Devices and Circuit Theory (11th Edition)",
        "author": "Robert L. Boylestad & Louis Nashelsky",
        "url": "https://kolegite.com/EE_library/books_and_lectures/%D0%95%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0/Electronic%20Devices%20and%20Circuit%20Theory%20-%2011th%20Edition.pdf"
      }
    ],
    "practiceLinks": [
      {
        "title": "Virtual Labs - Electronics & Communications",
        "url": "https://www.vlab.co.in/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What precautions must be taken while plotting reverse characteristics of a PN junction diode? (2 Marks)",
        "How is the current gain beta calculated from CE transistor output characteristics? (2 Marks)",
        "What pin numbers of IC 741 correspond to Inverting Input, Non-Inverting Input, V+, V-, and Output? (2 Marks)"
      ],
      "sixMarks": [
        "Describe circuit connection, observation table, and graph for measuring CE Transistor output characteristics in active, cutoff, and saturation regions. (6 Marks)",
        "Describe breadboard setup and procedure for verifying Truth Tables of 2-input NAND, NOR, and XOR logic gate ICs (7400, 7402, 7486). (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Basic Electronics Laboratory Manual. Detail step-by-step experimental procedures, circuit schematics, observation tables, graph plotting rules, calculations, and viva voce questions for PN Diode, Zener Regulator, BJT CE, Full-Wave Bridge Rectifier, and Op-Amp Amplifiers. (10 Marks)"
      ]
    }
  }
];
