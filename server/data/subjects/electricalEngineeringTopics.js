module.exports = [
  {
    "title": "Introduction to Electrical Engineering",
    "slug": "basic-electrical-introduction-to-electrical-engineering",
    "order": 1,
    "estimatedHours": 3,
    "difficulty": "Beginner",
    "description": "Learn foundational concepts of electricity: charge, current, voltage, potential difference, resistance, electrical power, energy equations, and safety protocols.",
    "subTopics": [
      "Fundamentals of Electricity",
      "Electric Charge and Current",
      "Voltage and Potential Difference",
      "Resistance and Conductance",
      "Electrical Power and Energy",
      "Electrical Units and Measurements",
      "Electrical Safety Practices"
    ],
    "prerequisiteTitles": [],
    "learningObjectives": [
      "Define electric charge (Q), current (I = dQ/dt), and voltage (V = dW/dQ).",
      "Calculate electrical power (P = VI = I^2 R) and energy consumption (E = P * t in kWh).",
      "Understand SI electrical units and safety practices (grounding, insulation, PPE)."
    ],
    "notes": [
      {
        "title": "Electrical Quantities, Power & Energy Formulas",
        "content": "ELECTRICAL ENGINEERING FUNDAMENTALS\n\n1. Charge, Current & Voltage:\n   - Electric Charge (Q): Measured in Coulombs (C). 1 electron = -1.602 x 10^-19 C.\n   - Current (I): Rate of flow of charge I = Q / t [Amperes (A)].\n   - Voltage (V): Work done per unit charge V = W / Q [Volts (V)].\n\n2. Resistance & Conductance:\n   - Resistance (R): Opposition to current flow R = rho * (L / A) [Ohms (ohm)].\n   - Conductance (G): Inverse of resistance G = 1 / R [Siemens (S) or Mho].\n\n3. Power & Energy Equations:\n   - Power P = V * I = I^2 * R = V^2 / R [Watts (W)].\n   - Energy E = Power * Time = P * t [Joules (J) or kWh].\n   - 1 kWh (1 Commercial Unit) = 1000 W * 3600 s = 3.6 x 10^6 Joules.\n\n4. Numerical Example:\n   A 100W bulb operates 8 hours daily for 30 days.\n   Energy = 100W * 8h * 30 = 24,000 Wh = 24 kWh."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Basic Electrical Engineering",
        "author": "D.P. Kothari & I.J. Nagrath",
        "url": "https://books.google.co.in/books?id=weHonQEACAAJ&lpg=PR2&pg=PP1#v=onepage&q&f=false"
      },
      {
        "title": "Electrical Technology Vol 1",
        "author": "B.L. Theraja"
      }
    ],
    "practiceLinks": [
      {
        "title": "Khan Academy Electrical Engineering",
        "url": "https://www.khanacademy.org/science/electrical-engineering"
      },
      {
        "title": "Sanfoundry Basic Electrical Questions",
        "url": "https://www.sanfoundry.com/basic-electrical-engineering-questions-answers/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define Current, Voltage, and Resistance with their SI units. (2 Marks)",
        "Convert 1 kWh of electrical energy into Joules. (2 Marks)",
        "What is Resistance? State parameters affecting resistance of a conductor. (2 Marks)"
      ],
      "sixMarks": [
        "Explain Electrical Power and Energy equations. An electric heater rated 2 kW, 230V is operated 5 hours daily for a month of 30 days. Calculate total energy consumed in kWh and electricity cost at $0.15/unit. (6 Marks)",
        "Describe electrical safety practices, grounding, and protective equipment in domestic and industrial installations. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Electrical Engineering Fundamentals. Detail electric fields, potential difference, resistance formula R = rho L / A, temperature coefficient of resistance, power-energy equations, and safety standards. (10 Marks)"
      ]
    }
  },
  {
    "title": "Basic Circuit Concepts",
    "slug": "basic-electrical-basic-circuit-concepts",
    "order": 2,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Analyze active and passive circuit elements, series/parallel combinations, open/short circuits, and equivalent resistance networks.",
    "subTopics": [
      "Electrical Circuit Elements",
      "Active and Passive Components",
      "Circuit Representation",
      "Open Circuit and Closed Circuit",
      "Series Circuits",
      "Parallel Circuits",
      "Combination Circuits",
      "Circuit Analysis Basics"
    ],
    "prerequisiteTitles": [
      "Introduction to Electrical Engineering"
    ],
    "learningObjectives": [
      "Differentiate between Active (sources) and Passive (R, L, C) circuit components.",
      "Calculate equivalent resistance of series, parallel, and combination networks.",
      "Analyze ideal vs practical voltage and current sources."
    ],
    "notes": [
      {
        "title": "Circuit Elements & Equivalent Resistance Networks",
        "content": "BASIC CIRCUIT CONCEPTS\n\n1. Active vs Passive Components:\n   - Active Elements: Deliver power to circuit (Voltage Sources, Current Sources, Generators).\n   - Passive Elements: Absorb or store energy (Resistors, Inductors, Capacitors).\n\n2. Series & Parallel Resistors:\n   - Series Connection: R_eq = R1 + R2 + R3 (Current is same, Voltage divides).\n   - Parallel Connection: 1 / R_eq = (1/R1) + (1/R2) + (1/R3) => For 2 resistors: R_eq = (R1 * R2) / (R1 + R2) (Voltage is same, Current divides).\n\n3. Special Circuit Conditions:\n   - Open Circuit: R = infinity, Current I = 0, Voltage V = V_source.\n   - Short Circuit: R = 0, Voltage V = 0, Current I = maximum (I_short = V / R_internal)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Basic Electrical Engineering",
        "author": "D.P. Kothari & I.J. Nagrath",
        "url": "https://books.google.co.in/books?id=weHonQEACAAJ&lpg=PR2&pg=PP1#v=onepage&q&f=false"
      }
    ],
    "practiceLinks": [
      {
        "title": "IndiaBIX Circuit Theory Questions",
        "url": "https://www.indiabix.com/electronics/circuit-theory/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between Active and Passive circuit elements with examples. (2 Marks)",
        "What is the equivalent resistance of two 10-ohm resistors connected in parallel? (2 Marks)",
        "Define Open Circuit and Short Circuit conditions. (2 Marks)"
      ],
      "sixMarks": [
        "Three resistors of 6 ohms, 12 ohms, and 4 ohms are connected in parallel. This combination is connected in series with a 5-ohm resistor across a 24V DC supply. Find total equivalent resistance and total supply current. (6 Marks)",
        "Compare Series and Parallel circuits with respect to current distribution, voltage drop, equivalent resistance, and real-life domestic applications. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Circuit Elements & Equivalent Networks. Detail linear vs non-linear, unilateral vs bilateral components, ideal vs practical sources, series-parallel reduction methods, and solve 3 complex ladder network problems. (10 Marks)"
      ]
    }
  },
  {
    "title": "Ohm's Law and Circuit Laws",
    "slug": "basic-electrical-ohms-law-and-circuit-laws",
    "order": 3,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Master Ohm's Law, Kirchhoff's Current Law (KCL), Kirchhoff's Voltage Law (KVL), and their fundamental applications in electric circuits.",
    "subTopics": [
      "Ohm's Law",
      "Voltage-Current-Resistance Relationship",
      "Kirchhoff's Current Law (KCL)",
      "Kirchhoff's Voltage Law (KVL)",
      "Application of Circuit Laws"
    ],
    "prerequisiteTitles": [
      "Basic Circuit Concepts"
    ],
    "learningObjectives": [
      "State and apply Ohm's Law V = I * R and its operational limitations.",
      "Apply Kirchhoff's Current Law (KCL) based on Conservation of Charge.",
      "Apply Kirchhoff's Voltage Law (KVL) based on Conservation of Energy."
    ],
    "notes": [
      {
        "title": "Ohm's Law, KCL & KVL Conservation Laws",
        "content": "OHM'S LAW AND KIRCHHOFF'S LAWS\n\n1. Ohm's Law:\n   Current I passing through a conductor between two points is directly proportional to voltage V across the points at constant temperature: V = I * R.\n   Limitations: Does not apply to non-linear devices (diodes, transistors), electrolytes, or varying temperatures.\n\n2. Kirchhoff's Current Law (KCL) - Law of Conservation of Charge:\n   The algebraic sum of all currents entering and leaving a node/junction is zero:\n   Sum(I_entering) = Sum(I_leaving)  =>  Sum(I_k) = 0\n\n3. Kirchhoff's Voltage Law (KVL) - Law of Conservation of Energy:\n   The algebraic sum of all potential differences (voltage drops and sources) around any closed loop is zero:\n   Sum(V_sources) = Sum(I * R drops)  =>  Sum(V_k) = 0"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Basic Electrical Engineering",
        "author": "D.P. Kothari & I.J. Nagrath",
        "url": "https://books.google.co.in/books?id=weHonQEACAAJ&lpg=PR2&pg=PP1#v=onepage&q&f=false"
      },
      {
        "title": "Engineering Circuit Analysis",
        "author": "William H. Hayt"
      }
    ],
    "practiceLinks": [
      {
        "title": "Khan Academy KVL & KCL Practice",
        "url": "https://www.khanacademy.org/science/electrical-engineering/ee-circuit-analysis-topic"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State Ohm's Law and list its two limitations. (2 Marks)",
        "State Kirchhoff's Current Law (KCL) and name its governing conservation principle. (2 Marks)",
        "State Kirchhoff's Voltage Law (KVL) and name its governing conservation principle. (2 Marks)"
      ],
      "sixMarks": [
        "State Kirchhoff's Laws. For a given circuit junction with 3 incoming currents (2A, 5A, I3) and 2 outgoing currents (4A, 7A), find I3 using KCL. (6 Marks)",
        "Apply KVL to write loop equations for a two-mesh DC circuit containing two battery sources and 3 resistors. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Kirchhoff's Circuit Laws. Detail mathematical formulation of KCL and KVL, sign conventions for sources and resistor drops, node/loop identification, limitations, and solve 2 multi-loop circuit problems. (10 Marks)"
      ]
    }
  },
  {
    "title": "DC Circuit Analysis",
    "slug": "basic-electrical-dc-circuit-analysis",
    "order": 4,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Analyze DC networks using Voltage/Current Divider Rules, Mesh Current Analysis, and Nodal Voltage Analysis.",
    "subTopics": [
      "Direct Current (DC) Fundamentals",
      "Resistance Networks",
      "Series Resistance Calculation",
      "Parallel Resistance Calculation",
      "Voltage Divider Rule",
      "Current Divider Rule",
      "Mesh Analysis Basics",
      "Node Analysis Basics"
    ],
    "prerequisiteTitles": [
      "Ohm's Law and Circuit Laws"
    ],
    "learningObjectives": [
      "Apply Voltage Divider Rule (VDR) and Current Divider Rule (CDR).",
      "Formulate and solve Mesh Current equations using KVL and matrix Cramer's Rule.",
      "Formulate and solve Node Voltage equations using KCL."
    ],
    "notes": [
      {
        "title": "DC Circuit Theorems: VDR, CDR, Mesh & Node Analysis",
        "content": "DC CIRCUIT ANALYSIS TECHNIQUES\n\n1. Voltage Divider Rule (VDR):\n   In series resistors R1 and R2 connected across total voltage V:\n   V_R1 = V * (R1 / (R1 + R2))  |  V_R2 = V * (R2 / (R1 + R2))\n\n2. Current Divider Rule (CDR):\n   In parallel resistors R1 and R2 connected to total current I:\n   I_R1 = I * (R2 / (R1 + R2))  |  I_R2 = I * (R1 / (R1 + R2))\n\n3. Mesh Current Analysis (Loop Analysis):\n   - Assign clockwise mesh currents I1, I2... In.\n   - Apply KVL around each mesh to get system of linear equations [R] [I] = [V].\n   - Solve for mesh currents using substitution or Cramer's Rule.\n\n4. Nodal Voltage Analysis:\n   - Select reference node (ground = 0V). Assign node voltages V1, V2... Vk.\n   - Apply KCL at each non-reference node using Ohm's law: (Va - Vb) / R.\n   - Solve system of node equations."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Basic Electrical Engineering",
        "author": "D.P. Kothari & I.J. Nagrath",
        "url": "https://books.google.co.in/books?id=weHonQEACAAJ&lpg=PR2&pg=PP1#v=onepage&q&f=false"
      }
    ],
    "practiceLinks": [
      {
        "title": "All About Circuits - Mesh and Nodal Analysis",
        "url": "https://www.allaboutcircuits.com/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State the Voltage Divider Rule formula for two series resistors. (2 Marks)",
        "State the Current Divider Rule formula for two parallel resistors. (2 Marks)",
        "When is Nodal Analysis preferred over Mesh Analysis? (2 Marks)"
      ],
      "sixMarks": [
        "For a parallel combination of 20 ohms and 30 ohms carrying a total current of 10A, calculate current in each branch using Current Divider Rule. (6 Marks)",
        "Using Mesh Analysis, find currents I1 and I2 in a 2-mesh network powered by a 12V DC source. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on DC Circuit Analysis Methods. Compare Mesh Current and Nodal Voltage analysis, detail matrix formulations [R][I]=[V] and [G][V]=[I], VDR/CDR applications, and solve a 3-mesh DC network step-by-step. (10 Marks)"
      ]
    }
  },
  {
    "title": "Electrical Measuring Instruments",
    "slug": "basic-electrical-electrical-measuring-instruments",
    "order": 5,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Understand principles and operation of Ammeter, Voltmeter, Multimeter, Wattmeter, and Energy Meter, including instrument extension and loading errors.",
    "subTopics": [
      "Measurement of Electrical Quantities",
      "Ammeter",
      "Voltmeter",
      "Ohmmeter",
      "Multimeter",
      "Wattmeter",
      "Energy Meter",
      "Instrument Errors and Accuracy"
    ],
    "prerequisiteTitles": [
      "Ohm's Law and Circuit Laws"
    ],
    "learningObjectives": [
      "Understand PMMC and Dynamometer measuring instrument working principles.",
      "Extend ranges of Ammeters (using Shunt resistors) and Voltmeters (using Multipliers).",
      "Operate digital multimeters, electrodynamometer wattmeters, and single-phase energy meters."
    ],
    "notes": [
      {
        "title": "PMMC Instruments, Range Extension & Meters",
        "content": "ELECTRICAL MEASURING INSTRUMENTS\n\n1. Instrument Types:\n   - PMMC (Permanent Magnet Moving Coil): Measures DC only. Scale is linear. High accuracy.\n   - Moving Iron (MI): Measures both AC and DC. Scale is non-linear (squared).\n\n2. Ammeter & Range Extension:\n   - Ammeter connected in SERIES. Ideal internal resistance = 0.\n   - Range Extension (Shunt): R_sh = R_m / (m - 1), where m = I_new / I_m.\n\n3. Voltmeter & Range Extension:\n   - Voltmeter connected in PARALLEL. Ideal internal resistance = infinity.\n   - Range Extension (Multiplier): R_se = R_m * (m - 1), where m = V_new / V_m.\n\n4. Power & Energy Measurement:\n   - Wattmeter: Electrodynamometer type with Current Coil (CC in series) and Pressure/Voltage Coil (PC in parallel). P = VI cos(phi).\n   - Energy Meter: Induction type meter measuring energy E = integral(P dt) in kWh."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Basic Electrical Engineering",
        "author": "D.P. Kothari & I.J. Nagrath",
        "url": "https://books.google.co.in/books?id=weHonQEACAAJ&lpg=PR2&pg=PP1#v=onepage&q&f=false"
      },
      {
        "title": "A Course in Electrical and Electronic Measurements",
        "author": "A.K. Sawhney"
      }
    ],
    "practiceLinks": [
      {
        "title": "Sanfoundry Electrical Measurements MCQs",
        "url": "https://www.sanfoundry.com/electrical-measurements-questions-answers/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Why is an Ammeter connected in series and a Voltmeter in parallel? (2 Marks)",
        "State ideal internal resistance for an Ammeter and a Voltmeter. (2 Marks)",
        "How is a PMMC meter converted into a Voltmeter of higher range? (2 Marks)"
      ],
      "sixMarks": [
        "A PMMC galvanometer has internal resistance R_m = 100 ohms and gives full-scale deflection for 1 mA. Calculate shunt resistor required to extend range to 5 A. (6 Marks)",
        "Explain electrodynamometer Wattmeter construction, showing Current Coil (CC) and Pressure Coil (PC) connection diagram. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Electrical Instruments. Detail PMMC vs Moving Iron mechanisms, range extension equations for shunts and multipliers, electrodynamometer wattmeter operation, induction energy meter disc rotation, and loading errors. (10 Marks)"
      ]
    }
  },
  {
    "title": "AC Fundamentals",
    "slug": "basic-electrical-ac-fundamentals",
    "order": 6,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Study alternating current parameters: sinusoidal waveforms, frequency, time period, RMS value, average value, form factor, peak factor, and phasor representations.",
    "subTopics": [
      "Introduction to Alternating Current",
      "Generation of AC Voltage",
      "Waveforms",
      "Frequency and Time Period",
      "Phase Difference",
      "RMS Value",
      "Average Value",
      "Phasor Representation"
    ],
    "prerequisiteTitles": [
      "DC Circuit Analysis"
    ],
    "learningObjectives": [
      "Understand Faraday's Law of Electromagnetic Induction for AC generation.",
      "Calculate RMS value, Average value, Form Factor (1.11), and Peak Factor (1.414) of sinusoidal AC.",
      "Represent sinusoidal voltage and current functions as rotating Phasors."
    ],
    "notes": [
      {
        "title": "Sinusoidal AC Parameters: RMS, Average & Phasors",
        "content": "AC FUNDAMENTALS CHEATSHEET\n\n1. Sinusoidal Equation:\n   v(t) = V_m * sin(omega * t + phi)\n   where V_m is Peak Voltage, omega = 2 * pi * f (Angular Frequency), f = 1 / T.\n\n2. RMS (Root Mean Square) Value:\n   Effective DC equivalent heating value.\n   - Sinusoidal Wave: V_rms = V_m / sqrt(2) = 0.707 * V_m.\n\n3. Average Value:\n   Average over half cycle:\n   - Sinusoidal Wave: V_avg = (2 * V_m) / pi = 0.637 * V_m.\n\n4. Factors:\n   - Form Factor = V_rms / V_avg = 0.707 / 0.637 = 1.11\n   - Peak (Crest) Factor = V_m / V_rms = V_m / (V_m / sqrt(2)) = sqrt(2) = 1.414"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Basic Electrical Engineering",
        "author": "D.P. Kothari & I.J. Nagrath",
        "url": "https://books.google.co.in/books?id=weHonQEACAAJ&lpg=PR2&pg=PP1#v=onepage&q&f=false"
      }
    ],
    "practiceLinks": [
      {
        "title": "IndiaBIX AC Fundamentals Practice",
        "url": "https://www.indiabix.com/electronics/ac-fundamentals/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define RMS Value and Average Value of an alternating current wave. (2 Marks)",
        "What are Form Factor and Peak Factor for a sinusoidal AC wave? State their numerical values. (2 Marks)",
        "State the mathematical relationship between frequency (f) and time period (T). (2 Marks)"
      ],
      "sixMarks": [
        "Derive expressions for RMS value V_rms = V_m / sqrt(2) and Average value V_avg = 2 V_m / pi for a sinusoidal AC voltage wave. (6 Marks)",
        "An AC current is given by i(t) = 14.14 sin(314 t + 30 deg) A. Find peak current, RMS current, frequency, time period, and phase angle. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on AC Fundamentals. Detail Faraday's law of AC generation, sinusoidal parameters (peak, RMS, average, form factor, crest factor), phasor representation of phase difference (leading/lagging), and complex j-operator notation. (10 Marks)"
      ]
    }
  },
  {
    "title": "AC Circuit Analysis",
    "slug": "basic-electrical-ac-circuit-analysis",
    "order": 7,
    "estimatedHours": 6,
    "difficulty": "Intermediate",
    "description": "Analyze pure R, L, C elements, Inductive Reactance (X_L), Capacitive Reactance (X_C), Impedance (Z), Series/Parallel RLC Circuits, Resonance, and Power Factor.",
    "subTopics": [
      "Resistance in AC Circuits",
      "Inductance and Inductive Reactance",
      "Capacitance and Capacitive Reactance",
      "Impedance",
      "Series RLC Circuits",
      "Parallel RLC Circuits",
      "Resonance in AC Circuits",
      "Power Factor"
    ],
    "prerequisiteTitles": [
      "AC Fundamentals"
    ],
    "learningObjectives": [
      "Calculate Inductive Reactance X_L = 2 pi f L and Capacitive Reactance X_C = 1 / (2 pi f C).",
      "Determine complex Impedance Z = R + j(X_L - X_C) and Power Factor cos(phi).",
      "Determine resonant frequency f_0 = 1 / (2 pi sqrt(L C)) in series RLC circuits."
    ],
    "notes": [
      {
        "title": "AC Elements, Impedance, RLC Resonance & Power Factor",
        "content": "AC CIRCUIT ANALYSIS FORMULAS\n\n1. Pure Components in AC:\n   - Pure R: V and I are in phase (phi = 0 deg, PF = 1).\n   - Pure L: Current Lags Voltage by 90 deg (phi = -90 deg, X_L = 2*pi*f*L).\n   - Pure C: Current Leads Voltage by 90 deg (phi = +90 deg, X_C = 1 / (2*pi*f*C)).\n\n2. Series RLC Circuit:\n   - Impedance Z = sqrt(R^2 + (X_L - X_C)^2)\n   - Phase Angle phi = tan^-1((X_L - X_C) / R)\n   - Current I = V / Z\n\n3. Power in AC Circuits:\n   - Active Power P = V * I * cos(phi) [Watts (W)]\n   - Reactive Power Q = V * I * sin(phi) [VAR]\n   - Apparent Power S = V * I [VA]\n   - Power Factor PF = cos(phi) = R / Z = P / S\n\n4. Series Resonance:\n   - Condition: X_L = X_C  =>  Z_min = R (purely resistive).\n   - Resonant Frequency: f_0 = 1 / (2 * pi * sqrt(L * C))"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Basic Electrical Engineering",
        "author": "D.P. Kothari & I.J. Nagrath",
        "url": "https://books.google.co.in/books?id=weHonQEACAAJ&lpg=PR2&pg=PP1#v=onepage&q&f=false"
      }
    ],
    "practiceLinks": [
      {
        "title": "Sanfoundry AC Circuit Analysis Questions",
        "url": "https://www.sanfoundry.com/single-phase-ac-circuits-questions-answers/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Write formulas for Inductive Reactance (X_L) and Capacitive Reactance (X_C). (2 Marks)",
        "Define Power Factor and state its formula in terms of Active and Apparent Power. (2 Marks)",
        "State the condition for Series Resonance in an RLC circuit. (2 Marks)"
      ],
      "sixMarks": [
        "A series RLC circuit has R = 10 ohms, L = 0.1 H, and C = 50 uF connected across 230V, 50Hz AC supply. Calculate X_L, X_C, Z, I, and Power Factor. (6 Marks)",
        "Derive the formula for resonant frequency f_0 = 1 / (2 pi sqrt(L C)) in a series RLC circuit. Explain resonance curves. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Single-Phase AC Circuits. Detail R, L, C behavior, complex impedance Z = R + jX, power triangle (Active, Reactive, Apparent Power), power factor improvement using capacitors, and series/parallel resonance phenomena. (10 Marks)"
      ]
    }
  },
  {
    "title": "Transformers",
    "slug": "basic-electrical-transformers",
    "order": 8,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Learn single-phase transformer operation: mutual induction principle, core/shell construction, EMF equation, voltage transformation ratio, losses, and efficiency calculations.",
    "subTopics": [
      "Introduction to Transformers",
      "Principle of Operation",
      "Construction of Transformer",
      "Working of Transformer",
      "EMF Equation",
      "Transformer Losses",
      "Transformer Efficiency",
      "Applications of Transformers"
    ],
    "prerequisiteTitles": [
      "AC Circuit Analysis"
    ],
    "learningObjectives": [
      "Understand Faraday's Law of Mutual Induction in static transformer operation.",
      "Derive the Transformer EMF Equation E = 4.44 f N Phi_m.",
      "Calculate Transformer Losses (Iron/Core Loss + Copper Loss) and Efficiency eta."
    ],
    "notes": [
      {
        "title": "Single Phase Transformers, EMF Equation & Losses",
        "content": "SINGLE PHASE TRANSFORMER GUIDE\n\n1. Working Principle:\n   Operates on Faraday's Law of Mutual Induction. Transmits AC electrical energy from primary to secondary winding without frequency change.\n\n2. Transformation Ratio K:\n   V2 / V1 = E2 / E1 = N2 / N1 = I1 / I2 = K\n   - Step-Up Transformer: K > 1 (N2 > N1).\n   - Step-Down Transformer: K < 1 (N2 < N1).\n\n3. EMF Equation of Transformer:\n   E1 = 4.44 * f * N1 * Phi_m\n   E2 = 4.44 * f * N2 * Phi_m\n   where Phi_m = B_m * A (Maximum Magnetic Flux).\n\n4. Losses & Efficiency:\n   - Iron (Core) Loss (P_i): Constant loss = Hysteresis Loss + Eddy Current Loss.\n   - Copper Loss (P_cu): Variable loss = I^2 * R.\n   - Efficiency eta = Output Power / Input Power = (V2 I2 cos phi) / (V2 I2 cos phi + P_i + P_cu) * 100%\n   - Maximum Efficiency Condition: Copper Loss = Iron Loss (P_cu = P_i)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Basic Electrical Engineering",
        "author": "D.P. Kothari & I.J. Nagrath",
        "url": "https://books.google.co.in/books?id=weHonQEACAAJ&lpg=PR2&pg=PP1#v=onepage&q&f=false"
      },
      {
        "title": "Electric Machines",
        "author": "D.P. Kothari and I.J. Nagrath"
      }
    ],
    "practiceLinks": [
      {
        "title": "IndiaBIX Transformers Practice",
        "url": "https://www.indiabix.com/electronics/transformers/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State the working principle of a Transformer. Does a transformer work on DC? (2 Marks)",
        "State the EMF Equation of a Transformer. (2 Marks)",
        "What is the condition for maximum efficiency of a Transformer? (2 Marks)"
      ],
      "sixMarks": [
        "Derive the EMF equation E = 4.44 f N Phi_m for a single-phase transformer. (6 Marks)",
        "A 25 kVA, 2200/220 V transformer has iron loss of 350 W and full-load copper loss of 400 W. Calculate its efficiency at full load at 0.8 power factor lagging. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Single-Phase Transformers. Detail Core vs Shell type construction, EMF equation derivation, ideal vs practical transformer phasor diagrams, core and copper losses, efficiency calculations, and OC/SC testing methods. (10 Marks)"
      ]
    }
  },
  {
    "title": "Electrical Machines",
    "slug": "basic-electrical-electrical-machines",
    "order": 9,
    "estimatedHours": 6,
    "difficulty": "Intermediate",
    "description": "Understand principles of rotating electrical machines: DC Generators, DC Motors, 3-Phase Induction Motors, and Synchronous Machines.",
    "subTopics": [
      "Introduction to Electrical Machines",
      "Classification of Electrical Machines",
      "DC Generators",
      "DC Motors",
      "Induction Motors",
      "Synchronous Machines",
      "Working Principles and Applications"
    ],
    "prerequisiteTitles": [
      "Transformers"
    ],
    "learningObjectives": [
      "Understand energy conversion principles in DC Generators (mechanical to electrical) and DC Motors (electrical to mechanical).",
      "Analyze Fleming's Right-Hand Rule (Generators) and Left-Hand Rule (Motors).",
      "Explain working principle of 3-Phase Induction Motor and rotating magnetic field (RMF)."
    ],
    "notes": [
      {
        "title": "DC Machines & 3-Phase Induction Motors",
        "content": "ELECTRICAL MACHINES OVERVIEW\n\n1. DC Generators & Motors:\n   - DC Generator Principle: Dynamically induced EMF (Fleming's Right-Hand Rule) E = (P * Phi * N * Z) / (60 * A).\n   - DC Motor Principle: Force on current-carrying conductor in magnetic field (Fleming's Left-Hand Rule) F = B * I * L. Back EMF E_b = V - I_a * R_a.\n\n2. Three-Phase Induction Motor:\n   - Working Principle: 3-phase stator winding produces Rotating Magnetic Field (RMF) rotating at Synchronous Speed N_s = 120 * f / P.\n   - Rotor runs at speed N < N_s.\n   - Slip s = (N_s - N) / N_s  (typically 2% to 5%).\n\n3. Synchronous Machines:\n   - Runs at constant Synchronous Speed N_s = 120 f / P at all loads. Used as alternator generators in power plants."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Basic Electrical Engineering",
        "author": "D.P. Kothari & I.J. Nagrath",
        "url": "https://books.google.co.in/books?id=weHonQEACAAJ&lpg=PR2&pg=PP1#v=onepage&q&f=false"
      },
      {
        "title": "Electrical Machinery",
        "author": "P.S. Bimbhra"
      }
    ],
    "practiceLinks": [
      {
        "title": "Sanfoundry Electrical Machines Questions",
        "url": "https://www.sanfoundry.com/electrical-machines-questions-answers/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State Fleming's Right-Hand Rule and Left-Hand Rule. Which rule applies to DC Motors? (2 Marks)",
        "What is Back EMF in a DC Motor? (2 Marks)",
        "Define Synchronous Speed (N_s) and Slip (s) of a 3-phase induction motor. (2 Marks)"
      ],
      "sixMarks": [
        "Explain the construction and working principle of a DC Motor with neat labeled diagram. (6 Marks)",
        "Explain production of Rotating Magnetic Field (RMF) in a 3-phase induction motor. A 4-pole 50Hz induction motor runs at 1440 RPM; calculate synchronous speed and percentage slip. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Rotating Electrical Machines. Detail classification, DC generator EMF equation, DC motor back EMF and torque equations, 3-phase induction motor RMF and slip-torque characteristics, and synchronous motor applications. (10 Marks)"
      ]
    }
  },
  {
    "title": "Three Phase Electrical Systems",
    "slug": "basic-electrical-three-phase-electrical-systems",
    "order": 10,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master 3-phase AC systems: Star (Y) and Delta (Delta) connections, line vs phase voltages/currents, and two-wattmeter power measurement.",
    "subTopics": [
      "Introduction to Three Phase Systems",
      "Single Phase vs Three Phase Supply",
      "Star Connection",
      "Delta Connection",
      "Line and Phase Voltage",
      "Line and Phase Current",
      "Three Phase Power Measurement"
    ],
    "prerequisiteTitles": [
      "AC Circuit Analysis"
    ],
    "learningObjectives": [
      "Understand advantages of 3-Phase AC supply over Single-Phase supply.",
      "Analyze Star (Y) connection relations: V_L = sqrt(3) V_ph, I_L = I_ph.",
      "Analyze Delta (Delta) connection relations: V_L = V_ph, I_L = sqrt(3) I_ph.",
      "Measure 3-phase active power using the Two-Wattmeter Method."
    ],
    "notes": [
      {
        "title": "Star-Delta Connections & Two-Wattmeter Power Measurement",
        "content": "THREE PHASE AC SYSTEMS GUIDE\n\n1. Star (Y) Connection:\n   - Line Voltage V_L = sqrt(3) * V_ph (leads V_ph by 30 deg).\n   - Line Current I_L = Phase Current I_ph.\n   - Neutral wire present (3-phase 4-wire system).\n\n2. Delta (Delta) Connection:\n   - Line Voltage V_L = Phase Voltage V_ph.\n   - Line Current I_L = sqrt(3) * I_ph (lags I_ph by 30 deg).\n\n3. Total 3-Phase Power Equations:\n   - Active Power P = sqrt(3) * V_L * I_L * cos(phi) [Watts]\n   - Reactive Power Q = sqrt(3) * V_L * I_L * sin(phi) [VAR]\n   - Apparent Power S = sqrt(3) * V_L * I_L [VA]\n\n4. Two-Wattmeter Method:\n   Total Power P = W1 + W2\n   tan(phi) = sqrt(3) * (W1 - W2) / (W1 + W2)  =>  Power Factor = cos(phi)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Basic Electrical Engineering",
        "author": "D.P. Kothari & I.J. Nagrath",
        "url": "https://books.google.co.in/books?id=weHonQEACAAJ&lpg=PR2&pg=PP1#v=onepage&q&f=false"
      }
    ],
    "practiceLinks": [
      {
        "title": "Sanfoundry Three Phase AC Circuits",
        "url": "https://www.sanfoundry.com/three-phase-ac-circuits-questions-answers/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State relationship between Line Voltage and Phase Voltage in a Star connected system. (2 Marks)",
        "State relationship between Line Current and Phase Current in a Delta connected system. (2 Marks)",
        "Write the formula for total 3-phase active power in terms of line values. (2 Marks)"
      ],
      "sixMarks": [
        "Derive relationship V_L = sqrt(3) V_ph and I_L = I_ph for a balanced Star connected load using phasor diagrams. (6 Marks)",
        "Explain Two-Wattmeter method for 3-phase power measurement. If W1 = 5 kW and W2 = 2 kW, calculate total power and power factor. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Three-Phase AC Systems. Compare 1-phase vs 3-phase power generation, detail Star and Delta line-phase relations, total active/reactive power derivations, and complete two-wattmeter method with power factor calculations. (10 Marks)"
      ]
    }
  },
  {
    "title": "Semiconductor Devices and Applications",
    "slug": "basic-electrical-semiconductor-devices-and-applications",
    "order": 11,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Explore semiconductor devices: PN Junction Diode, Half/Full Wave Rectifiers, Zener Diode voltage regulation, BJT transistors, and optoelectronic LEDs.",
    "subTopics": [
      "Introduction to Semiconductor Materials",
      "PN Junction Diode",
      "Rectifiers",
      "Zener Diode",
      "Transistors Basics",
      "LED and Photodiode",
      "Applications of Semiconductor Devices"
    ],
    "prerequisiteTitles": [
      "Basic Circuit Concepts"
    ],
    "learningObjectives": [
      "Understand PN junction forward/reverse bias IV characteristics.",
      "Analyze Half-Wave, Full-Wave Center-Tapped, and Bridge Rectifier circuits.",
      "Explain Zener Diode voltage regulation and BJT transistor amplification basics."
    ],
    "notes": [
      {
        "title": "Semiconductors, Rectification & Zener Regulation",
        "content": "SEMICONDUCTOR DEVICES AND RECTIFIERS\n\n1. PN Junction Diode:\n   - Forward Bias: Anode positive w.r.t cathode. Depletion layer shrinks, current flows (Cut-in V = 0.7V for Si, 0.3V for Ge).\n   - Reverse Bias: Anode negative w.r.t cathode. Depletion layer widens, small reverse saturation current I_s.\n\n2. Rectifier Circuits:\n   - Half-Wave Rectifier: 1 diode. V_dc = V_m / pi, Ripple Factor r = 1.21, Efficiency eta = 40.6%.\n   - Full-Wave Bridge Rectifier: 4 diodes. V_dc = 2 V_m / pi, Ripple Factor r = 0.48, Efficiency eta = 81.2%.\n\n3. Zener Diode Voltage Regulator:\n   Operates in reverse breakdown region at constant Zener voltage V_z. Maintains constant output voltage across load despite supply fluctuations.\n\n4. BJT Transistor (NPN/PNP):\n   Current relationship: I_E = I_B + I_C, Current Gain beta = I_C / I_B."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Basic Electrical Engineering",
        "author": "D.P. Kothari & I.J. Nagrath",
        "url": "https://books.google.co.in/books?id=weHonQEACAAJ&lpg=PR2&pg=PP1#v=onepage&q&f=false"
      },
      {
        "title": "Electronic Devices and Circuit Theory",
        "author": "Boylestad"
      }
    ],
    "practiceLinks": [
      {
        "title": "Neso Academy Basic Electronics",
        "url": "https://www.nesoacademy.org/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define Cut-in Voltage for Silicon and Germanium PN junction diodes. (2 Marks)",
        "Compare Ripple Factor and Efficiency of Half-Wave vs Full-Wave Bridge Rectifier. (2 Marks)",
        "How does a Zener Diode maintain constant voltage in reverse breakdown? (2 Marks)"
      ],
      "sixMarks": [
        "Explain working of Full-Wave Bridge Rectifier with circuit diagram and input/output voltage waveforms. (6 Marks)",
        "Explain Zener Diode voltage regulator circuit operation under varying input voltage and load conditions. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Semiconductor Electronics. Detail intrinsic vs extrinsic semiconductors, PN junction depletion region physics, rectifier circuits (HWR, FWR, Bridge) with ripple factor derivations, Zener regulation, and BJT transistor configurations. (10 Marks)"
      ]
    }
  },
  {
    "title": "Digital Electronics Basics",
    "slug": "basic-electrical-digital-electronics-basics",
    "order": 12,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Understand digital signals, binary number representations, truth tables for logic gates (AND, OR, NOT, NAND, NOR, XOR), and Boolean algebra simplification.",
    "subTopics": [
      "Introduction to Digital Signals",
      "Analog vs Digital Signals",
      "Binary Number System",
      "Logic Gates (AND, OR, NOT, NAND, NOR, XOR)",
      "Boolean Algebra Basics"
    ],
    "prerequisiteTitles": [],
    "learningObjectives": [
      "Convert numbers between Binary, Octal, Decimal, and Hexadecimal representations.",
      "Construct Truth Tables and logic symbols for basic and universal (NAND, NOR) logic gates.",
      "Simplify Boolean logic expressions using De Morgan's Laws and Boolean algebra identities."
    ],
    "notes": [
      {
        "title": "Digital Logic Gates, Truth Tables & Boolean Algebra",
        "content": "DIGITAL ELECTRONICS FOUNDATIONS\n\n1. Analog vs Digital:\n   - Analog: Continuous voltage/current signal.\n   - Digital: Discrete binary levels (HIGH = 1 = 5V, LOW = 0 = 0V).\n\n2. Logic Gates Summary:\n   - AND Gate: Y = A * B (Output 1 only when all inputs 1).\n   - OR Gate: Y = A + B (Output 1 if any input is 1).\n   - NOT Gate: Y = A' (Inverter).\n   - NAND Gate (Universal): Y = (A * B)'\n   - NOR Gate (Universal): Y = (A + B)'\n   - XOR Gate: Y = A (+) B = A'B + AB' (Output 1 when inputs differ).\n\n3. Boolean Algebra Laws:\n   - De Morgan's First Law: (A + B)' = A' * B'\n   - De Morgan's Second Law: (A * B)' = A' + B'\n   - Idempotent Laws: A + A = A | A * A = A\n   - Double Negation: (A')' = A"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Basic Electrical Engineering",
        "author": "D.P. Kothari & I.J. Nagrath",
        "url": "https://books.google.co.in/books?id=weHonQEACAAJ&lpg=PR2&pg=PP1#v=onepage&q&f=false"
      },
      {
        "title": "Digital Design",
        "author": "M. Morris Mano"
      }
    ],
    "practiceLinks": [
      {
        "title": "IndiaBIX Digital Electronics Questions",
        "url": "https://www.indiabix.com/electronics/digital-electronics/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Why are NAND and NOR gates called Universal Logic Gates? (2 Marks)",
        "State De Morgan's Laws of Boolean Algebra. (2 Marks)",
        "Construct Truth Table for a 2-input XOR gate. (2 Marks)"
      ],
      "sixMarks": [
        "Draw logic diagrams, expressions, and Truth Tables for AND, OR, NOT, NAND, NOR, and XOR gates. (6 Marks)",
        "Simplify the Boolean expression Y = AB + A(B + C) + B(B + C) using laws of Boolean algebra. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Digital Electronics Basics. Compare analog vs digital systems, number conversions (Binary/Hex), universal gate implementations (NAND-only logic), De Morgan's theorems proof, and Boolean function minimizations. (10 Marks)"
      ]
    }
  },
  {
    "title": "Electrical Wiring and Safety",
    "slug": "basic-electrical-electrical-wiring-and-safety",
    "order": 13,
    "estimatedHours": 3,
    "difficulty": "Beginner",
    "description": "Learn domestic wiring layouts, protective devices (Fuse, MCB, ELCB/RCCB), equipment earthing/grounding methods, and electrical safety codes.",
    "subTopics": [
      "Domestic Electrical Wiring",
      "Wiring Components",
      "Switches and Protection Devices",
      "Fuse",
      "MCB",
      "Earthing",
      "Electrical Safety Rules"
    ],
    "prerequisiteTitles": [
      "Introduction to Electrical Engineering"
    ],
    "learningObjectives": [
      "Understand domestic single-phase 230V 3-wire wiring (Phase, Neutral, Earth).",
      "Analyze operation of protective devices: Fuses, Miniature Circuit Breakers (MCB), and RCCB.",
      "Explain Pipe Earthing and Plate Earthing for shock prevention."
    ],
    "notes": [
      {
        "title": "Domestic Wiring, Protection Devices & Earthing",
        "content": "ELECTRICAL WIRING AND PROTECTION\n\n1. Domestic Wiring Connections:\n   Single-Phase AC Supply: Phase/Live (Brown/Red), Neutral (Blue/Black), Earth (Green/Yellow).\n   - All switches, fuses, and MCBs must be connected in the LIVE/PHASE wire.\n\n2. Protective Devices:\n   - Electric Fuse: Sacrificial wire (tin-lead alloy) that melts on overcurrent. Inverse time characteristics.\n   - MCB (Miniature Circuit Breaker): Electromechanical device that trips automatically on overload (thermal strip) or short circuit (magnetic coil). Reusable.\n   - RCCB / ELCB: Detects current leakage to earth (> 30 mA) and trips within 30 ms to prevent fatal electric shocks.\n\n3. Earthing / Grounding:\n   Connecting metallic body of appliances to earth electrode buried in ground.\n   - Objective: Keeps appliance body at zero potential, preventing shock if live wire touches metal casing.\n   - Types: Pipe Earthing, Plate Earthing."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Basic Electrical Engineering",
        "author": "D.P. Kothari & I.J. Nagrath",
        "url": "https://books.google.co.in/books?id=weHonQEACAAJ&lpg=PR2&pg=PP1#v=onepage&q&f=false"
      },
      {
        "title": "Electrical Wiring Estimating and Costing",
        "author": "S.L. Uppal"
      }
    ],
    "practiceLinks": [
      {
        "title": "Sanfoundry Electrical Safety & Protection",
        "url": "https://www.sanfoundry.com/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Why must switches and fuses always be connected in the Live/Phase wire? (2 Marks)",
        "Compare a Fuse and a Miniature Circuit Breaker (MCB). (2 Marks)",
        "What is the main objective of Earthing in electrical systems? (2 Marks)"
      ],
      "sixMarks": [
        "Explain domestic single-phase electrical wiring layout with neat schematic diagram showing Energy Meter, Main Switch, MCB, and Load connections. (6 Marks)",
        "Describe Pipe Earthing and Plate Earthing methods with labeled diagrams and earth resistance reduction techniques. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Electrical Safety & Wiring Systems. Detail 3-wire color coding, fuse ratings, thermal/magnetic MCB operation, RCCB earth leakage protection, earthing installation methods, and safety rules for high-voltage hazards. (10 Marks)"
      ]
    }
  },
  {
    "title": "Renewable Energy Systems",
    "slug": "basic-electrical-renewable-energy-systems",
    "order": 14,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Explore clean energy generation: Solar PV systems, solar cell physics, wind power turbines, battery energy storage systems, and energy conservation.",
    "subTopics": [
      "Introduction to Renewable Energy",
      "Solar Energy Systems",
      "Solar Cells",
      "Wind Energy Basics",
      "Battery Storage Systems",
      "Energy Conservation"
    ],
    "prerequisiteTitles": [
      "Introduction to Electrical Engineering"
    ],
    "learningObjectives": [
      "Understand solar photovoltaic conversion, Solar PV modules, and grid-tied/off-grid inverters.",
      "Explain wind turbine energy conversion: kinetic wind energy to electrical power $P = 0.5 \\rho A v^3$.",
      "Understand battery storage technologies (Lead-Acid, Lithium-ion) and energy audit concepts."
    ],
    "notes": [
      {
        "title": "Solar PV, Wind Energy & Battery Storage Systems",
        "content": "RENEWABLE ENERGY SYSTEMS\n\n1. Solar Photovoltaic (PV) Systems:\n   - Solar Cell: PN junction semiconductor converting solar photons into DC electricity via Photovoltaic Effect.\n   - System Components: Solar Panels -> Charge Controller -> Battery Bank -> Solar Inverter (DC to 230V AC).\n\n2. Wind Energy Conversion:\n   - Power in Wind: P = 0.5 * rho * A * v^3\n     where rho is air density (1.225 kg/m^3), A is rotor swept area (pi r^2), v is wind speed.\n   - Betz Limit: Theoretical max efficiency of wind turbine = 59.3%.\n\n3. Battery Energy Storage:\n   - Capacity rated in Ampere-hours (Ah). Energy = Ah * Voltage.\n   - Lithium-ion vs Lead-Acid: Lithium-ion offers higher energy density, longer cycle life, and faster charging."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Basic Electrical Engineering",
        "author": "D.P. Kothari & I.J. Nagrath",
        "url": "https://books.google.co.in/books?id=weHonQEACAAJ&lpg=PR2&pg=PP1#v=onepage&q&f=false"
      },
      {
        "title": "Non-Conventional Energy Resources",
        "author": "B.H. Khan"
      }
    ],
    "practiceLinks": [
      {
        "title": "NREL Renewable Energy Basics",
        "url": "https://www.nrel.gov/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define Photovoltaic Effect in solar cells. (2 Marks)",
        "State Betz Limit for maximum theoretical efficiency of wind turbines. (2 Marks)",
        "What is the difference between Off-Grid and On-Grid Solar PV systems? (2 Marks)"
      ],
      "sixMarks": [
        "Explain grid-connected and standalone Solar Photovoltaic system block diagrams with inverter and charge controller functions. (6 Marks)",
        "Derive power expression for wind turbine P = 0.5 rho A v^3. Calculate power generated by a 10m diameter rotor at wind speed of 12 m/s. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Renewable Energy Systems. Detail solar PV cell V-I characteristics, wind turbine aerodynamic power extraction, battery storage chemistries (Lithium-ion/Lead-Acid), microgrids, and energy conservation techniques. (10 Marks)"
      ]
    }
  },
  {
    "title": "Electrical Engineering Applications",
    "slug": "basic-electrical-electrical-engineering-applications",
    "order": 15,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Overview of modern power systems: Generation, High-Voltage Transmission, Distribution grids, Electric Vehicle (EV) powertrains, Smart Grids, and industrial automation.",
    "subTopics": [
      "Power Generation",
      "Power Transmission",
      "Power Distribution",
      "Electric Vehicles Basics",
      "Smart Grid Technology",
      "Industrial Applications"
    ],
    "prerequisiteTitles": [
      "Three Phase Electrical Systems",
      "Electrical Machines"
    ],
    "learningObjectives": [
      "Understand power grid structure: Thermal/Hydro/Nuclear Generation -> HV Transmission -> Sub-transmission -> Distribution.",
      "Analyze Electric Vehicle (EV) powertrain components: Battery Pack, Motor Controller, Traction Motor, and Regenerative Braking.",
      "Understand Smart Grid technologies: Smart Meters, IoT sensors, and Distributed Energy Resources."
    ],
    "notes": [
      {
        "title": "Power Systems Grid, Electric Vehicles & Smart Grids",
        "content": "MODERN ELECTRICAL ENGINEERING APPLICATIONS\n\n1. Power System Infrastructure:\n   - Generation: Alternators generate 11 kV AC.\n   - Step-Up Transmission: Transformer steps up to 132 kV / 220 kV / 400 kV (High voltage reduces I^2 R line loss).\n   - Substation & Distribution: Step-down to 33 kV -> 11 kV -> 415V (3-phase) / 230V (1-phase domestic).\n\n2. Electric Vehicle (EV) Powertrain Architecture:\n   - High-Voltage Battery Pack (Li-ion 400V/800V) -> DC-AC Inverter / Motor Controller -> AC Traction Motor (Permanent Magnet Synchronous Motor / Induction Motor) -> Reduction Gear -> Wheels.\n   - Regenerative Braking: Converts kinetic energy back to electrical power during braking to recharge battery.\n\n3. Smart Grid Technology:\n   Advanced grid incorporating 2-way digital communication, Smart Meters (AMI), automated fault isolation, and integration of rooftop solar microgrids."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Basic Electrical Engineering",
        "author": "D.P. Kothari & I.J. Nagrath",
        "url": "https://books.google.co.in/books?id=weHonQEACAAJ&lpg=PR2&pg=PP1#v=onepage&q&f=false"
      },
      {
        "title": "Principles of Power System",
        "author": "V.K. Mehta and Rohit Mehta"
      },
      {
        "title": "Electric Vehicle Technology Explained",
        "author": "James Larminie"
      }
    ],
    "practiceLinks": [
      {
        "title": "IEEE Power & Energy Society",
        "url": "https://www.ieee-pes.org/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Why is electrical power transmitted at ultra-high voltages over long distances? (2 Marks)",
        "What is Regenerative Braking in Electric Vehicles? (2 Marks)",
        "Define Smart Grid and Advanced Metering Infrastructure (AMI). (2 Marks)"
      ],
      "sixMarks": [
        "Draw single-line diagram of a modern Electrical Power Grid from 11kV Generating Station to 230V Domestic Distribution. (6 Marks)",
        "Explain Electric Vehicle (EV) powertrain components: Battery Pack, Inverter, Traction Motor, and Charge Controller. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Modern Electrical Engineering Applications. Detail power system generation-transmission-distribution hierarchy, high voltage AC/DC transmission benefits, EV powertrain architecture, battery management systems (BMS), and Smart Grid microgrid integration. (10 Marks)"
      ]
    }
  }
];
