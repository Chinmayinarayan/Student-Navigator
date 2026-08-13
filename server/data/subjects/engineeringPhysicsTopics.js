module.exports = [
  {
    "title": "Introduction to Engineering Physics",
    "slug": "engineering-physics-introduction-to-engineering-physics",
    "order": 1,
    "estimatedHours": 3,
    "difficulty": "Beginner",
    "description": "Understand foundational engineering physics: Scope and Importance in modern technology, SI Base & Derived Units, Dimensional Analysis, Physical Quantities, Measurement and Errors (Random, Systematic, Instrumental, Propagation of errors), and Multidisciplinary Applications.",
    "subTopics": [
      "Introduction to Engineering Physics",
      "Scope and Importance",
      "Units and Dimensions",
      "Physical Quantities",
      "Measurement and Errors",
      "Applications in Engineering"
    ],
    "prerequisiteTitles": [],
    "learningObjectives": [
      "Apply Dimensional Analysis to verify equation homogeneity and derive physical relations.",
      "Calculate Absolute Error $Delta x$, Relative Error $\frac{Delta x}{x}$, and Percentage Error $\frac{Delta x}{x} \times 100%$.",
      "Understand error propagation rules in addition, multiplication, and power functions ($y = x^n implies \frac{Delta y}{y} = n \frac{Delta x}{x}$)."
    ],
    "notes": [
      {
        "title": "Dimensional Analysis Rules & Error Propagation Equations",
        "content": "INTRODUCTION TO ENGINEERING PHYSICS & ERROR ANALYSIS\n\n1. Dimensional Formulas of Key Physical Quantities:\n   - Force: $[M L T^{-2}]$\n   - Work / Energy: $[M L^2 T^{-2}]$\n   - Pressure / Stress: $[M L^{-1} T^{-2}]$\n   - Planck's Constant ($h$): $[M L^2 T^{-1}]$\n   - Permittivity ($epsilon_0$): $[M^{-1} L^{-3} T^4 A^2]$\n\n2. Error Propagation Formulas:\n   - Addition / Subtraction ($Z = A pm B$): Absolute Error $Delta Z = Delta A + Delta B$.\n   - Multiplication / Division ($Z = A cdot B$ or $A/B$): Relative Error $\frac{Delta Z}{Z} = \frac{Delta A}{A} + \frac{Delta B}{B}$.\n   - Power Functions ($Z = A^m B^n / C^p$): $\frac{Delta Z}{Z} = m \frac{Delta A}{A} + n \frac{Delta B}{B} + p \frac{Delta C}{C}$."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Engineering Physics",
        "author": "H.K. Malik, A.K. Singh"
      },
      {
        "title": "Concepts of Physics",
        "author": "H.C. Verma"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Error Analysis in Physics",
        "url": "https://www.geeksforgeeks.org/errors-in-measurement/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State 7 SI Base Units and their symbols. (2 Marks)",
        "Write formula for percentage error in $Z = A^2 B^3 / sqrt{C}$. (2 Marks)",
        "Differentiate between Systematic Errors and Random Errors. (2 Marks)"
      ],
      "sixMarks": [
        "Explain Dimensional Analysis applications with examples: (a) Checking dimensional correctness of $T = 2pi sqrt{L/g}$, (b) Deriving force equation $F = m v^2 / r$. (6 Marks)",
        "In an experiment to measure density of a sphere, mass $M = (10.0 pm 0.1)\text{ g}$ and diameter $D = (2.00 pm 0.02)\text{ cm}$. Calculate percentage error in density determination. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Measurement Precision & Calibration. Detail Vernier Caliper & Screw Gauge least count calculations, Gaussian Normal Distribution of random errors, standard deviation $sigma$, confidence intervals, and sensor calibration curves. (10 Marks)"
      ]
    }
  },
  {
    "title": "Mechanics",
    "slug": "engineering-physics-mechanics",
    "order": 2,
    "estimatedHours": 5,
    "difficulty": "Beginner",
    "description": "Master classical particle mechanics: Vectors & Scalar fields, Newton's Laws of Motion, Work-Energy Theorem ($W = Delta K$), Power ($P = mathbf{F} cdot mathbf{v}$), Linear Momentum & Conservation Laws, Rotational Motion (Torque $mathbf{\tau} = mathbf{r} \times mathbf{F}$, Angular Momentum $mathbf{L} = Imathbf{omega}$), Circular Motion (Centripetal acceleration $a_c = v^2/r$), Gravitation (Kepler's 3 Laws, Gravitational Potential $V = -GM/r$), and Engineering applications.",
    "subTopics": [
      "Scalars and Vectors",
      "Newton's Laws of Motion",
      "Work, Energy and Power",
      "Momentum and Conservation Laws",
      "Rotational Motion",
      "Circular Motion",
      "Gravitation",
      "Engineering Applications of Mechanics"
    ],
    "prerequisiteTitles": [
      "Introduction to Engineering Physics"
    ],
    "learningObjectives": [
      "Apply Work-Energy Theorem: $W_{net} = int mathbf{F} cdot dmathbf{r} = \frac{1}{2}m v_f^2 - \frac{1}{2}m v_i^2$.",
      "Apply Conservation of Angular Momentum ($mathbf{L} = I_1 omega_1 = I_2 omega_2$) when net external torque $\tau_{ext} = 0$.",
      "Understand Orbital Mechanics & Kepler's 3rd Law: Orbital Period $T^2 = left(\frac{4pi^2}{G M}\right) r^3$."
    ],
    "notes": [
      {
        "title": "Work-Energy Theorem & Conservation of Angular Momentum",
        "content": "CLASSICAL MECHANICS & CONSERVATION LAWS\n\n1. Work-Energy Theorem & Conservative Forces:\n   $W_{net} = Delta K = \frac{1}{2} m v_2^2 - \frac{1}{2} m v_1^2$\n   - Potential Energy $V(mathbf{r})$: Force $mathbf{F} = -\nabla V = -left(\frac{partial V}{partial x}mathbf{i} + \frac{partial V}{partial y}mathbf{j} + \frac{partial V}{partial z}mathbf{k}\right)$.\n   - Mechanical Energy Conservation: $E = K + V = \text{Constant}$.\n\n2. Rotational Dynamics & Angular Momentum:\n   - Torque $mathbf{\tau} = \frac{dmathbf{L}}{dt} = I mathbf{alpha}$\n   - Angular Momentum $mathbf{L} = mathbf{r} \times mathbf{p} = I mathbf{omega}$\n   - If $mathbf{\tau}_{ext} = 0 implies mathbf{L} = \text{Constant}$ (e.g. Ice skater spinning faster when pulling arms inward!)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Physics for Scientists and Engineers",
        "author": "Serway & Jewett"
      },
      {
        "title": "Concepts of Physics",
        "author": "H.C. Verma"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Work, Energy and Power",
        "url": "https://www.geeksforgeeks.org/work-energy-and-power/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State Work-Energy Theorem for a particle. (2 Marks)",
        "State Law of Conservation of Angular Momentum with a real-life example. (2 Marks)",
        "State Kepler's 3rd Law of Planetary Motion. (2 Marks)"
      ],
      "sixMarks": [
        "Derive expression for escape velocity $v_e = sqrt{\frac{2GM}{R}} = sqrt{2gR}$ from Earth's surface. (6 Marks)",
        "A fly wheel of mass $100\text{ kg}$ and radius of gyration $k = 0.4\text{ m}$ is rotating at $300\text{ rpm}$. Calculate its Rotational Kinetic Energy and stopping torque required to bring it to rest in 10 seconds. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Gravitational & Satellite Physics. Detail geostationary orbit altitude derivation ($h approx 35,786\text{ km}$), orbital speed $v_o = sqrt{GM/r}$, gravity assist slingshot maneuvers, and rigid body rotational inertia tensors. (10 Marks)"
      ]
    }
  },
  {
    "title": "Oscillations and Waves",
    "slug": "engineering-physics-oscillations-and-waves",
    "order": 3,
    "estimatedHours": 5,
    "difficulty": "Beginner",
    "description": "Master vibrational & wave phenomena: Simple Harmonic Motion (SHM differential equation $ddot{x} + omega_0^2 x = 0$), Damped Oscillations ($ddot{x} + 2gamma dot{x} + omega_0^2 x = 0$), Forced Oscillations & Resonance, Wave Motion (Transverse vs Longitudinal, wave equation $\frac{partial^2 y}{partial t^2} = v^2 \frac{partial^2 y}{partial x^2}$), Sound Waves, Ultrasonic Waves (Piezoelectric & Magnetostriction generation), and Applications of Ultrasonics (NDT Non-Destructive Testing, Sonar, Medical Ultrasound).",
    "subTopics": [
      "Simple Harmonic Motion (SHM)",
      "Damped Oscillations",
      "Forced Oscillations",
      "Resonance",
      "Wave Motion",
      "Sound Waves",
      "Ultrasonic Waves",
      "Applications of Ultrasonics"
    ],
    "prerequisiteTitles": [
      "Mechanics"
    ],
    "learningObjectives": [
      "Solve SHM differential equation: $x(t) = A cos(omega_0 t + phi)$ with Period $T = \frac{2pi}{omega_0}$.",
      "Understand Ultrasonic Wave generation using Piezoelectric Effect (Quartz crystal under high-frequency AC field).",
      "Understand NDT Non-Destructive Testing flaw detection using Ultrasonic Pulse-Echo technique."
    ],
    "notes": [
      {
        "title": "SHM Equations & Piezoelectric Ultrasonic Generator Mechanics",
        "content": "OSCILLATIONS, WAVES & ULTRASONIC TESTING\n\n1. SHM & Damped Oscillations Equations:\n   - Undamped SHM: $ddot{x} + omega_0^2 x = 0 implies x(t) = A cos(omega_0 t + phi)$\n   - Damped SHM: $ddot{x} + 2gamma dot{x} + omega_0^2 x = 0 implies x(t) = A e^{-gamma t} cos(omega_d t + phi)$ where $omega_d = sqrt{omega_0^2 - gamma^2}$.\n\n2. Ultrasonic Generation (Piezoelectric Method):\n   When a high-frequency alternating electric field is applied across opposite faces of a Quartz crystal cut perpendicular to its optic axis, mechanical contraction and expansion occur at the same frequency. When AC frequency matches natural vibration frequency of crystal $f = \frac{p}{2L}sqrt{\frac{Y}{\rho}}$, resonance produces high-intensity Ultrasonic Waves ($> 20\text{ kHz}$)!"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "The Physics of Waves and Oscillations",
        "author": "N.K. Bajaj"
      },
      {
        "title": "Engineering Physics",
        "author": "Hitendra K. Malik"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Simple Harmonic Motion SHM",
        "url": "https://www.geeksforgeeks.org/simple-harmonic-motion/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State differential equation for SHM and write its general solution. (2 Marks)",
        "What are Ultrasonic Waves? State 2 methods of generating ultrasonics. (2 Marks)",
        "Explain Piezoelectric Effect in quartz crystal. (2 Marks)"
      ],
      "sixMarks": [
        "Describe Piezoelectric Method for generating Ultrasonic Waves with circuit diagram, formula for resonant frequency, and advantages. (6 Marks)",
        "Explain Ultrasonic Non-Destructive Testing (NDT) pulse-echo method for detecting internal cracks in steel castings with a block diagram. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Forced Oscillations & Resonance. Detail differential equation $mddot{x} + cdot{x} + kx = F_0 cosomega t$, steady-state amplitude derivation $X = \frac{F_0/m}{sqrt{(omega_0^2 - omega^2)^2 + (2gammaomega)^2}}$, Quality Factor $Q$, Sharpness of Resonance, and Acoustic Sonar depth sounding. (10 Marks)"
      ]
    }
  },
  {
    "title": "Optics",
    "slug": "engineering-physics-optics",
    "order": 4,
    "estimatedHours": 6,
    "difficulty": "Intermediate",
    "description": "Master wave optics & photonics: Nature of Light, Interference (Young's double slit, Thin film interference $2mu t cos r = nlambda$, Newton's Rings $lambda = \frac{D_{n+p}^2 - D_n^2}{4pR}$), Diffraction (Fraunhofer single slit & N-slit diffraction grating $(a+b)sin\theta = nlambda$), Polarization (Brewster's Law $\tan i_p = mu$, Malus Law $I = I_0 cos^2\theta$), Lasers (Spontaneous vs Stimulated emission, Population Inversion, He-Ne & Ruby Laser), Optical Fibers (Numerical Aperture $\text{NA} = sqrt{n_1^2 - n_2^2}$, Total Internal Reflection), Fiber Optic Communication, Holography, and Engineering Applications.",
    "subTopics": [
      "Nature of Light",
      "Interference of Light",
      "Diffraction",
      "Polarization",
      "Lasers",
      "Optical Fibers",
      "Fiber Optic Communication",
      "Holography",
      "Engineering Applications of Optics"
    ],
    "prerequisiteTitles": [
      "Oscillations and Waves"
    ],
    "learningObjectives": [
      "Calculate wavelength of monochromatic light using Newton's Rings experiment: $lambda = \frac{D_{n+p}^2 - D_n^2}{4 p R}$.",
      "Calculate Acceptance Angle $\theta_a = sin^{-1}(\text{NA})$ and Numerical Aperture $\text{NA} = sqrt{n_1^2 - n_2^2}$ for optical fibers.",
      "Understand Laser Einstein Coefficients ($A_{21}, B_{12}, B_{21}$) and Population Inversion pumping mechanism."
    ],
    "notes": [
      {
        "title": "Newton's Rings Math & Optical Fiber Numerical Aperture Formula",
        "content": "WAVE OPTICS, LASERS & FIBER OPTICS\n\n1. Newton's Rings Wavelength Determination:\n   - Diameter of $n^{\text{th}}$ dark ring: $D_n^2 = 4 n lambda R$\n   - Wavelength formula: $lambda = \frac{D_{n+p}^2 - D_n^2}{4 p R}$ (where $R$ is radius of curvature of plano-convex lens).\n\n2. Fiber Optics Numerical Aperture (NA) & Acceptance Angle ($\theta_a$):\n   - Total Internal Reflection condition: Angle of incidence at core-cladding interface $phi > phi_c = sin^{-1}(n_2/n_1)$.\n   - Numerical Aperture: $\text{NA} = sin\theta_a = sqrt{n_1^2 - n_2^2}$ where $n_1$ is core index and $n_2$ is cladding index ($n_1 > n_2$).\n   - Acceptance Angle: $\theta_a = sin^{-1}left( sqrt{n_1^2 - n_2^2} \right)$."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Optics",
        "author": "Ajoy Ghatak"
      },
      {
        "title": "Textbook of Optics",
        "author": "N. Subrahmanyam, Brij Lal"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Wave Optics",
        "url": "https://www.geeksforgeeks.org/wave-optics/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State Brewster's Law of Polarization and write its mathematical form. (2 Marks)",
        "Define Population Inversion in Lasers. (2 Marks)",
        "Write formula for Numerical Aperture ($\text{NA}$) of an optical fiber. (2 Marks)"
      ],
      "sixMarks": [
        "Describe Newton's Rings experiment for determining wavelength of monochromatic light with ray diagram, theory, and formula derivation. (6 Marks)",
        "Explain construction and working of He-Ne (Helium-Neon) Gas Laser with energy level diagram. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Optical Fiber Communication & Holography. Detail Step-Index vs Graded-Index fibers, Signal Attenuation & Dispersion (Intermodal & Intramodal), Optical Fiber Communication link block diagram, and 3D Hologram Recording & Reconstruction principle using coherent Laser reference beams. (10 Marks)"
      ]
    }
  },
  {
    "title": "Electricity and Magnetism",
    "slug": "engineering-physics-electricity-and-magnetism",
    "order": 5,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master classical electromagnetism: Electrostatics (Coulomb's Law, Gauss's Law $oint mathbf{E} cdot dmathbf{A} = Q_{enc}/epsilon_0$), Electric Field & Potential ($V = -int mathbf{E} cdot dmathbf{r}$), Capacitance (Parallel plate capacitor $C = \frac{epsilon_0 A}{d}$, Dielectric insertion), Current Electricity (Ohm's Law, Kirchhoff's Laws), Magnetic Field (Biot-Savart Law, Ampere's Law $oint mathbf{B} cdot dmathbf{l} = mu_0 I$), Electromagnetic Induction (Faraday's Law $mathcal{E} = -dPhi_B/dt$, Lenz's Law), AC and DC Circuits (RL, RC, RLC series resonance $f_r = \frac{1}{2pisqrt{LC}}$), Transformers, and Engineering Applications.",
    "subTopics": [
      "Electrostatics",
      "Electric Field and Potential",
      "Capacitance",
      "Current Electricity",
      "Magnetic Field",
      "Electromagnetic Induction",
      "AC and DC Circuits",
      "Transformers",
      "Engineering Applications"
    ],
    "prerequisiteTitles": [
      "Mechanics"
    ],
    "learningObjectives": [
      "Apply Gauss's Law to calculate Electric Field of point charges, infinite line charge ($mathbf{E} = \frac{lambda}{2piepsilon_0 r}$), and charged spherical shell.",
      "Apply Faraday's Law of Induction to calculate induced EMF $mathcal{E} = -N \frac{dPhi_B}{dt}$.",
      "Calculate Resonant Frequency of Series RLC Circuit: $f_0 = \frac{1}{2pi sqrt{LC}}$ and Quality Factor $Q = \frac{1}{R}sqrt{\frac{L}{C}}$."
    ],
    "notes": [
      {
        "title": "Gauss's Law & Series RLC Resonance Equations",
        "content": "ELECTROSTATICS, MAGNETISM & RLC CIRCUITS\n\n1. Gauss's Law & Electric Potential:\n   - Gauss's Law: $oint mathbf{E} cdot dmathbf{A} = \frac{Q_{enclosed}}{epsilon_0}$\n   - Potential Gradient: $mathbf{E} = -\nabla V = -left(\frac{partial V}{partial x}mathbf{i} + \frac{partial V}{partial y}mathbf{j} + \frac{partial V}{partial z}mathbf{k}\right)$.\n\n2. Series RLC Circuit Resonance:\n   At Resonance, Inductive Reactance equals Capacitive Reactance ($X_L = X_C implies omega L = \frac{1}{omega C}$).\n   - Resonant Frequency: $omega_0 = \frac{1}{sqrt{LC}} implies f_0 = \frac{1}{2pi sqrt{LC}}$\n   - Impedance at Resonance: $Z = R$ (Minimum impedance, Maximum current!).\n   - Quality Factor: $Q = \frac{omega_0 L}{R} = \frac{1}{R} sqrt{\frac{L}{C}}$."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Introduction to Electrodynamics",
        "author": "David J. Griffiths"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Electrostatics",
        "url": "https://www.geeksforgeeks.org/electrostatics/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State Gauss's Law in Electrostatics. (2 Marks)",
        "State Faraday's Law and Lenz's Law of Electromagnetic Induction. (2 Marks)",
        "Write formula for resonant frequency of a Series RLC circuit. (2 Marks)"
      ],
      "sixMarks": [
        "State Biot-Savart Law. Calculate magnetic field $mathbf{B}$ at the center of a circular current-carrying coil of radius $R$ and $N$ turns. (6 Marks)",
        "A series RLC circuit has $R = 10  Omega, L = 0.1\text{ H}$, and $C = 10  mu\text{F}$. Calculate Resonant Frequency $f_0$, Quality Factor $Q$, and Bandwidth. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Electromagnetic Induction & Transformers. Detail Mutual Inductance $M$, Ideal Transformer voltage/current transformation ratio ($V_1/V_2 = N_1/N_2 = I_2/I_1$), Transformer losses (Hysteresis loss, Eddy current loss, Copper loss), and smart grid power transmission. (10 Marks)"
      ]
    }
  },
  {
    "title": "Semiconductor Physics",
    "slug": "engineering-physics-semiconductor-physics",
    "order": 6,
    "estimatedHours": 6,
    "difficulty": "Intermediate",
    "description": "Master Solid-State Physics: Crystal Structure, Energy Bands in Solids (Kronig-Penney model overview, Valence Band, Conduction Band, Energy Gap $E_g$), Conductors vs Semiconductors vs Insulators, Intrinsic Semiconductors (Carrier concentration $n_i = p_i = sqrt{N_c N_v} e^{-E_g / 2 k_B T}$), Extrinsic Semiconductors (N-type donor, P-type acceptor, Fermi Level $E_F$ shift), Hall Effect ($R_H = 1/n e$), PN Junction Diode (Depletion layer, Built-in potential $V_{bi}$, I-V characteristics), Zener Diode voltage regulation, Transistors (BJT Bipolar Junction Transistor NPN/PNP), and Optoelectronic Devices (LED, Photodiode, Solar Cell).",
    "subTopics": [
      "Crystal Structure",
      "Energy Bands",
      "Conductors",
      "Semiconductors",
      "Insulators",
      "Intrinsic Semiconductors",
      "Extrinsic Semiconductors",
      "PN Junction Diode",
      "Zener Diode",
      "Transistors",
      "Semiconductor Devices"
    ],
    "prerequisiteTitles": [
      "Introduction to Engineering Physics"
    ],
    "learningObjectives": [
      "Calculate Intrinsic Carrier Concentration: $n_i^2 = N_c N_v e^{-E_g / k_B T}$.",
      "Understand Hall Effect: Hall Voltage $V_H = \frac{B I}{n e t}$ and Hall Coefficient $R_H = \frac{1}{n e}$ (determines semiconductor carrier type and concentration).",
      "Explain PN Junction Diode Rectification & Zener Reverse Breakdown mechanism."
    ],
    "notes": [
      {
        "title": "Energy Band Diagram & Hall Effect Equations",
        "content": "SEMICONDUCTOR PHYSICS & HALL EFFECT\n\n1. Fermi Level ($E_F$) & Carrier Concentration:\n   - Intrinsic Semiconductor: Fermi level lies exactly at the center of the band gap $E_F approx \frac{E_c + E_v}{2}$.\n   - N-Type Semiconductor: Donors shift $E_F$ UPWARDS near conduction band $E_c$.\n   - P-Type Semiconductor: Acceptors shift $E_F$ DOWNWARDS near valence band $E_v$.\n\n2. Hall Effect & Hall Coefficient ($R_H$):\n   When a current-carrying semiconductor strip ($I_x$) is placed in a perpendicular magnetic field ($B_z$), a transverse electric field ($E_y$) and Hall Voltage ($V_H$) are generated!\n   - Hall Voltage: $V_H = \frac{B_z I_x}{n e t}$ (where $t$ is thickness).\n   - Hall Coefficient: $R_H = \frac{E_y}{J_x B_z} = \frac{1}{n e}$ (Negative for N-type, Positive for P-type!)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Solid State Electronic Devices",
        "author": "Streetman & Banerjee"
      },
      {
        "title": "Semiconductor Physics and Devices",
        "author": "Donald Neamen"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Semiconductors",
        "url": "https://www.geeksforgeeks.org/semiconductor-physics/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define Energy Band Gap $E_g$ and compare for Silicon ($1.1\text{ eV}$) vs Germanium ($0.67\text{ eV}$). (2 Marks)",
        "What is Hall Effect? State 2 applications of Hall Effect measurements. (2 Marks)",
        "Where does the Fermi Level lie in Intrinsic, N-type, and P-type semiconductors? (2 Marks)"
      ],
      "sixMarks": [
        "Explain Hall Effect with neat diagram. Derive expressions for Hall Voltage $V_H$ and Hall Coefficient $R_H$. (6 Marks)",
        "Describe PN Junction Diode formation, depletion layer width, built-in potential, and Forward/Reverse bias I-V characteristics. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Optoelectronic Semiconductor Devices. Detail Working principle & I-V characteristics of: (a) Solar Cell (Photovoltaic effect), (b) Light Emitting Diode LED (Direct bandgap spontaneous recombination), (c) Photodiode (Reverse biased carrier generation), and Zener diode voltage regulator circuit design. (10 Marks)"
      ]
    }
  },
  {
    "title": "Quantum Physics",
    "slug": "engineering-physics-quantum-physics",
    "order": 7,
    "estimatedHours": 6,
    "difficulty": "Advanced",
    "description": "Master quantum mechanical principles: Failure of Classical Physics, Black Body Radiation (Planck's Quantum Law $E = h\nu$), Photoelectric Effect (Einstein equation $h\nu = Phi + K_{max}$), De Broglie Hypothesis of Matter Waves ($lambda = h/p = h / sqrt{2mE}$), Davisson-Germer Experiment, Heisenberg Uncertainty Principle ($Delta x cdot Delta p ge hbar/2$), Wavefunction $Psi(x,t)$ physical interpretation ($|Psi|^2$), Time-Independent Schrödinger Wave Equation ($-\frac{hbar^2}{2m}\frac{d^2Psi}{dx^2} + VPsi = EPsi$), Particle in a 1D Infinite Potential Well (Eigenenergies $E_n = \frac{n^2 h^2}{8 m L^2}$), Quantum Tunneling, and Applications.",
    "subTopics": [
      "Black Body Radiation",
      "Planck's Quantum Theory",
      "Photoelectric Effect",
      "De Broglie Hypothesis",
      "Heisenberg Uncertainty Principle",
      "Schrödinger Wave Equation",
      "Quantum Tunneling",
      "Applications of Quantum Mechanics"
    ],
    "prerequisiteTitles": [
      "Introduction to Engineering Physics"
    ],
    "learningObjectives": [
      "Calculate De Broglie Wavelength of accelerated electrons: $lambda = \frac{12.27}{sqrt{V}} \text{ AA}$.",
      "Solve Schrödinger Equation for Particle in a 1D Box to find normalized wavefunctions $Psi_n(x) = sqrt{\frac{2}{L}} sinleft(\frac{npi x}{L}\right)$ and energy levels $E_n = \frac{n^2 pi^2 hbar^2}{2 m L^2}$.",
      "Understand Quantum Tunneling through a rectangular potential barrier ($V_0 > E$) enabling Scanning Tunneling Microscopy (STM) and Tunnel Diodes."
    ],
    "notes": [
      {
        "title": "De Broglie Wavelength & Particle in 1D Box Energy Levels",
        "content": "QUANTUM MECHANICS & SCHRÖDINGER EQUATION\n\n1. De Broglie Matter Wave Formula:\n   $lambda = \frac{h}{p} = \frac{h}{m v} = \frac{h}{sqrt{2 m E_k}}$\n   - For an electron accelerated through potential $V$ volts: $lambda = \frac{h}{sqrt{2 m e V}} = \frac{1.227}{sqrt{V}} \text{ nm} = \frac{12.27}{sqrt{V}} \text{ AA}$.\n\n2. Particle in 1D Infinite Potential Well ($V=0$ for $0 le x le L$, $V=infty$ elsewhere):\n   - Schrödinger Equation: $\frac{d^2 Psi}{d x^2} + \frac{2mE}{hbar^2} Psi = 0$\n   - Normalized Wavefunctions: $Psi_n(x) = sqrt{\frac{2}{L}} sinleft( \frac{n pi x}{L} \right)$ for $n = 1, 2, 3 dots$\n   - Quantized Energy Levels: $E_n = \frac{n^2 h^2}{8 m L^2} = \frac{n^2 pi^2 hbar^2}{2 m L^2}$\n   - Ground state energy ($n=1$): Zero-Point Energy $E_1 = \frac{h^2}{8 m L^2} > 0$!"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Concepts of Modern Physics",
        "author": "Arthur Beiser"
      },
      {
        "title": "Quantum Mechanics",
        "author": "D.J. Griffiths"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Quantum Mechanics Basics",
        "url": "https://www.geeksforgeeks.org/quantum-physics/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State De Broglie hypothesis of matter waves and write formula for electron wavelength. (2 Marks)",
        "State Heisenberg Uncertainty Principle for position and momentum ($Delta x Delta p ge hbar/2$). (2 Marks)",
        "What is Zero-Point Energy of a particle in a 1D box? (2 Marks)"
      ],
      "sixMarks": [
        "Derive Time-Independent Schrödinger Wave Equation in 1D: $\frac{d^2Psi}{dx^2} + \frac{2m}{hbar^2}(E - V)Psi = 0$. (6 Marks)",
        "A particle of mass $m$ is trapped in a 1D box of width $L$. Solve Schrödinger equation to derive normalized wavefunctions $Psi_n(x)$ and energy eigenvalues $E_n$. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Quantum Phenomena & Applications. Detail Photoelectric Effect (Work function $Phi$, stopping potential $V_0$), Davisson-Germer electron diffraction experiment proving matter wave duality, Quantum Tunneling transmission probability $T approx e^{-2 k L}$, Tunnel Diode, and Scanning Tunneling Microscope (STM). (10 Marks)"
      ]
    }
  },
  {
    "title": "Modern Physics",
    "slug": "engineering-physics-modern-physics",
    "order": 8,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master 20th-century atomic & nuclear physics: Atomic Models (Bohr model $r_n = n^2 a_0, E_n = -13.6/n^2 \text{ eV}$, Sommerfeld model), Nuclear Physics (Radius $R = R_0 A^{1/3}$, Mass Defect $Delta m$, Binding Energy $BE = Delta m cdot c^2$, Liquid Drop Model), Radioactivity (Decay Law $N(t) = N_0 e^{-lambda t}$, Half-life $T_{1/2} = \frac{0.693}{lambda}$, Carbon dating), Nuclear Reactions (Fission $\text{U}^{235}$, Fusion $H + H \to He$), X-Rays (Continuous & Characteristic X-rays, Bragg's Law $2dsin\theta = nlambda$), Radiation Safety, and Medical/Industrial Applications.",
    "subTopics": [
      "Atomic Models",
      "Nuclear Physics",
      "Radioactivity",
      "Nuclear Reactions",
      "X-Rays",
      "Particle Physics Basics",
      "Radiation Safety",
      "Medical and Industrial Applications"
    ],
    "prerequisiteTitles": [
      "Introduction to Engineering Physics"
    ],
    "learningObjectives": [
      "Apply Bohr Atomic Model energy levels: $E_n = -\frac{13.6}{n^2} \text{ eV}$ for Hydrogen atom.",
      "Calculate Nuclear Binding Energy per Nucleon ($BE/A = \frac{Delta m cdot 931.5 \text{ MeV}}{A}$).",
      "Calculate X-Ray crystal interplanar spacing using Bragg's Law: $2d sin\theta = n lambda$."
    ],
    "notes": [
      {
        "title": "Bohr Energy Levels & Bragg's X-Ray Law Math",
        "content": "MODERN PHYSICS: ATOMIC, NUCLEAR & X-RAYS\n\n1. Radioactive Decay Law & Half-Life:\n   - Decay Law: $N(t) = N_0 e^{-lambda t}$\n   - Half-life: $T_{1/2} = \frac{ln 2}{lambda} = \frac{0.693}{lambda}$\n   - Mean Life ($\tau$): $\tau = \frac{1}{lambda} = \frac{T_{1/2}}{0.693}$.\n\n2. Bragg's Law of X-Ray Diffraction:\n   When X-rays of wavelength $lambda$ strike parallel crystal atomic planes separated by interplanar distance $d$ at glancing angle $\theta$:\n   $2 d sin\theta = n lambda quad (n = 1, 2, 3 dots)$\n   - Interplanar spacing for cubic crystal ($a$): $d_{hkl} = \frac{a}{sqrt{h^2 + k^2 + l^2}}$."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Concepts of Modern Physics",
        "author": "Arthur Beiser"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Radioactivity and Nuclear Physics",
        "url": "https://www.geeksforgeeks.org/radioactivity/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State Bragg's Law of X-Ray Diffraction. (2 Marks)",
        "Define Mass Defect $Delta m$ and Binding Energy $BE$ of a nucleus. (2 Marks)",
        "State Radioactive Decay Law and write relation between Half-life $T_{1/2}$ and Decay Constant $lambda$. (2 Marks)"
      ],
      "sixMarks": [
        "State Bragg's Law. X-rays of wavelength $1.54 \text{ AA}$ undergo first-order ($n=1$) reflection from (111) planes of a cubic crystal at glancing angle $\theta = 19.2^circ$. Calculate lattice parameter $a$. (6 Marks)",
        "Explain Radioactive Decay Law $N = N_0 e^{-lambda t}$. Calculate half-life of a radioactive sample if $75%$ of its nuclei decay in 60 minutes. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Nuclear Energy & Radiation Technology. Detail Nuclear Fission chain reaction mechanism, Thermal Nuclear Reactor components (Fuel rods, Moderator $\text{D}_2\text{O}$/Graphite, Control rods $\text{Cd}$, Coolant), Nuclear Fusion in Tokamak ITER, Radiation Safety dosimetry (Sievert / Rem), and Medical CT scan X-ray imaging. (10 Marks)"
      ]
    }
  },
  {
    "title": "Materials Science",
    "slug": "engineering-physics-materials-science",
    "order": 9,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master engineering materials physics: Classification of Engineering Materials, Conducting Materials (Wiedemann-Franz Law $\frac{K}{sigma T} = L$), Superconductors (Zero resistance $R=0$, Critical Temp $T_c$, Meissner Effect $B=0$, Type I vs Type II, High-$T_c$ cuprates, BCS theory Cooper pairs), Dielectric Materials (Polarization $P = epsilon_0 (epsilon_r - 1) E$, Clausius-Mossotti relation), Magnetic Materials (Dia, Para, Ferro, Ferri, Anti-ferromagnetic, Hysteresis B-H loop), Nanomaterials, Graphene, Carbon Nanotubes, and Smart Materials.",
    "subTopics": [
      "Engineering Materials",
      "Conducting Materials",
      "Superconductors",
      "Dielectric Materials",
      "Magnetic Materials",
      "Nanomaterials",
      "Graphene",
      "Carbon Nanotubes",
      "Smart Materials"
    ],
    "prerequisiteTitles": [
      "Introduction to Engineering Physics"
    ],
    "learningObjectives": [
      "Understand Superconductivity: Meissner Effect (Perfect diamagnetism $chi = -1, mathbf{B} = 0$) and Type I vs Type II superconductors (Vortex flux lattice).",
      "Derive Clausius-Mossotti Relation for internal electric fields in dielectric materials: $\frac{epsilon_r - 1}{epsilon_r + 2} = \frac{N alpha}{3 epsilon_0}$.",
      "Understand Magnetic Hysteresis B-H Loop parameters: Retentivity / Remanence $B_r$, Coercivity $H_c$, and Hysteresis energy loss."
    ],
    "notes": [
      {
        "title": "Meissner Effect, Clausius-Mossotti & B-H Hysteresis Loop",
        "content": "MATERIALS SCIENCE & SUPERCONDUCTIVITY\n\n1. Meissner Effect in Superconductors:\n   When a superconductor is cooled below its Critical Temperature $T_c$ in a magnetic field, it expels ALL magnetic flux from its interior ($mathbf{B} = 0$).\n   - Magnetic Susceptibility: $chi = -1$ (Perfect Diamagnetism!).\n   - Critical Magnetic Field Temperature dependence: $H_c(T) = H_c(0) left[ 1 - left(\frac{T}{T_c}\right)^2 \right]$.\n\n2. Clausius-Mossotti Relation (Dielectrics):\n   Relates macroscopic relative permittivity $epsilon_r$ to microscopic atomic polarizability $alpha$:\n   $\frac{epsilon_r - 1}{epsilon_r + 2} = \frac{N alpha}{3 epsilon_0}$\n\n3. Ferromagnetic Hysteresis B-H Loop:\n   - Retentivity ($B_r$): Residual magnetic flux density remaining when $H = 0$.\n   - Coercivity ($H_c$): Reverse magnetic field intensity required to reduce magnetization to zero.\n   - Area enclosed by B-H Loop = Hysteresis Power Loss per unit volume per cycle!"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Materials Science and Engineering",
        "author": "William D. Callister"
      },
      {
        "title": "Solid State Physics",
        "author": "S.O. Pillai"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Superconductivity Basics",
        "url": "https://www.geeksforgeeks.org/superconductivity/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is the Meissner Effect in Superconductors? (2 Marks)",
        "State Clausius-Mossotti relation for dielectric materials. (2 Marks)",
        "Differentiate Soft Magnetic Materials vs Hard Magnetic Materials based on B-H hysteresis loop area. (2 Marks)"
      ],
      "sixMarks": [
        "Explain Superconductivity detailing Critical Temperature $T_c$, Meissner Effect, Type I vs Type II superconductors, and SQUID magnetometer applications. (6 Marks)",
        "Draw B-H Hysteresis Loop for a Ferromagnetic material. Explain Retentivity, Coercivity, and calculate hysteresis energy loss per cycle. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Advanced Functional Engineering Materials. Detail BCS Theory Cooper pairs ($e^--e^-$ phonon-mediated pairing), High-Temperature Cuprate Superconductors YBCO ($T_c = 93\text{ K}$), Piezoelectric & Ferroelectric ceramics ($\text{BaTiO}_3$), Graphene 2D ballistic transport, and Carbon Nanotubes (CNTs) in aerospace composite armors. (10 Marks)"
      ]
    }
  },
  {
    "title": "Nanotechnology",
    "slug": "engineering-physics-nanotechnology",
    "order": 10,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Explore nanoscale science & fabrication: Introduction to Nanotechnology (Quantum Size Effects, Surface-to-volume ratio scaling), Synthesis of Nanomaterials (Top-down: Ball Milling, Lithography; Bottom-up: Sol-Gel, Chemical Vapor Deposition CVD, Hydrothermal), Characterization Techniques (SEM Scanning Electron Microscopy, TEM Transmission Electron Microscopy, AFM Atomic Force Microscopy, XRD X-Ray Diffraction), Quantum Dots, Quantum Wires, Quantum Wells, and Applications in Electronics, Biomedical, and Energy.",
    "subTopics": [
      "Introduction to Nanotechnology",
      "Synthesis of Nanomaterials",
      "Characterization Techniques",
      "Properties of Nanomaterials",
      "Applications in Electronics",
      "Biomedical Applications",
      "Energy Applications"
    ],
    "prerequisiteTitles": [
      "Quantum Physics",
      "Materials Science"
    ],
    "learningObjectives": [
      "Understand Quantum Confinement Classification: 0D Quantum Dots (confined in 3 dimensions), 1D Quantum Wires (confined in 2 dimensions), 2D Quantum Wells (confined in 1 dimension).",
      "Compare SEM (Surface topography using secondary electrons) vs TEM (Internal crystal structure using transmitted electron beam) vs AFM (Atomic force mechanical tip deflection).",
      "Calculate Surface-to-Volume Ratio scaling: For sphere of radius $r$, $\text{S/V} = \frac{4pi r^2}{\frac{4}{3}pi r^3} = \frac{3}{r}$ (increases dramatically as $r \to 1\text{ nm}$!)."
    ],
    "notes": [
      {
        "title": "Quantum Confinement Dimensions & SEM / TEM / AFM Comparison",
        "content": "NANOTECHNOLOGY: SYNTHESIS & CHARACTERIZATION\n\n1. Dimensionality Classification of Nanomaterials:\n   - 0D Nanomaterials (Quantum Dots): All 3 dimensions $< 100\text{ nm}$ (e.g. CdSe quantum dots).\n   - 1D Nanomaterials (Quantum Wires / Nanotubes): 2 dimensions $< 100\text{ nm}$ (e.g. CNTs, Nanowires).\n   - 2D Nanomaterials (Quantum Wells / Nanosheets): 1 dimension $< 100\text{ nm}$ (e.g. Graphene, $\text{MoS}_2$).\n\n2. Electron Microscopy Comparison:\n   - SEM (Scanning Electron Microscope): Scans raster electron beam; detects secondary/backscattered electrons; produces 3D surface topography ($sim 1\text{ nm}$ resolution).\n   - TEM (Transmission Electron Microscope): Transmits high-energy electron beam ($100-300\text{ kV}$) THROUGH ultra-thin specimen; detects transmitted electrons; produces sub-Angstrom atomic lattice resolution ($< 0.1\text{ nm}$)!"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Introduction to Nanotechnology",
        "author": "Charles P. Poole Jr., Frank J. Owens"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Nanotechnology Overview",
        "url": "https://www.geeksforgeeks.org/nanotechnology/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Classify 0D, 1D, and 2D Nanomaterials with an example of each. (2 Marks)",
        "Why do Nanomaterials exhibit vastly different optical/catalytic properties than bulk materials? (2 Marks)",
        "Differentiate between SEM and TEM electron microscopy. (2 Marks)"
      ],
      "sixMarks": [
        "Describe Sol-Gel method for synthesis of metal oxide nanoparticles detailing hydrolysis, condensation, gelation, drying, and calcination steps. (6 Marks)",
        "Explain working principle of Atomic Force Microscopy (AFM) detailing cantilever tip deflection, laser detection system, and atomic surface mapping. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Nanotechnology Applications. Detail Chemical Vapor Deposition (CVD) synthesis of Carbon Nanotubes (CNTs), targeted cancer drug delivery using functionalized nanoparticles, Nano-FET transistors in sub-2nm semiconductor nodes, and Perovskite quantum dot solar cells. (10 Marks)"
      ]
    }
  },
  {
    "title": "Renewable Energy Physics",
    "slug": "engineering-physics-renewable-energy-physics",
    "order": 11,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master physics of clean energy technologies: Solar Energy Physics (Solar Spectrum, Photovoltaic Effect, Silicon Solar Cell efficiency limits, Shockley-Queisser limit $sim 33.7%$, Solar Thermal concentrators), Wind Energy Physics (Betz's Law maximum power coefficient $C_p = 16/27 approx 59.3%$, Wind turbine aerodynamics), Hydroelectric Energy, Fuel Cells ($H_2-O_2$ PEM fuel cell electrochemistry), Hydrogen Energy (Solar/Wind Water Electrolysis), Energy Storage Systems (Li-ion, Supercapacitors), and Sustainable Energy Technologies.",
    "subTopics": [
      "Solar Energy",
      "Wind Energy",
      "Hydroelectric Energy",
      "Fuel Cells",
      "Hydrogen Energy",
      "Energy Storage Systems",
      "Sustainable Energy Technologies"
    ],
    "prerequisiteTitles": [
      "Electricity and Magnetism",
      "Semiconductor Physics"
    ],
    "learningObjectives": [
      "Apply Betz's Law for Wind Turbines: Maximum extractable power $P_{max} = \frac{16}{27} left( \frac{1}{2} \rho A v^3 \right) approx 59.3% cdot P_{wind}$.",
      "Understand Solar Cell Physics: Open-Circuit Voltage $V_{oc}$, Short-Circuit Current $I_{sc}$, Fill Factor $\text{FF} = \frac{P_{max}}{V_{oc} I_{sc}}$, Efficiency $eta = \frac{P_{max}}{P_{in} A}$.",
      "Differentiate Supercapacitors (Electrostatic double-layer capacitance EDLC, high power density) vs Batteries (Chemical reaction, high energy density)."
    ],
    "notes": [
      {
        "title": "Betz's Law Wind Power & Solar Cell Efficiency Math",
        "content": "RENEWABLE ENERGY PHYSICS: SOLAR & WIND\n\n1. Wind Power Equation & Betz's Law Limit:\n   - Total Wind Power in Air Stream: $P_{wind} = \frac{1}{2} \rho A v^3$ (where $\rho = 1.225\text{ kg/m}^3$, $A = pi R^2$ swept area, $v$ is wind speed).\n   - Betz's Theoretical Maximum Power Coefficient: $C_p = \frac{16}{27} approx 0.593$.\n   - Max Extractable Power: $P_{max} = 0.593 \times \frac{1}{2} \rho A v^3$.\n\n2. Solar Cell Performance Parameters:\n   - Fill Factor ($\text{FF}$): $\text{FF} = \frac{V_m I_m}{V_{oc} I_{sc}}$ (Typically $0.7 - 0.85$).\n   - Efficiency ($eta$): $eta = \frac{P_{max}}{P_{in}} = \frac{V_{oc} cdot I_{sc} cdot \text{FF}}{P_{solar} cdot A_{cell}} \times 100%$."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Renewable Energy: Physics, Engineering, Environmental Impacts",
        "author": "Bent Sørensen"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Solar and Wind Energy Physics",
        "url": "https://www.geeksforgeeks.org/solar-energy/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State Betz's Law for Wind Turbines and state the maximum theoretical efficiency limit. (2 Marks)",
        "Define Fill Factor ($\text{FF}$) and Efficiency ($eta$) of a Solar Cell. (2 Marks)",
        "Compare Supercapacitors and Lithium-Ion Batteries on Energy Density vs Power Density. (2 Marks)"
      ],
      "sixMarks": [
        "Derive Betz's Limit for maximum power extraction from wind: $P_{max} = \frac{16}{27} left(\frac{1}{2}\rho A v^3\right)$. (6 Marks)",
        "Calculate maximum power output and efficiency of a $100\text{ cm}^2$ solar cell given $V_{oc} = 0.6\text{ V}, I_{sc} = 3.5\text{ A}, \text{FF} = 0.75$ under standard solar irradiance of $1000\text{ W/m}^2$. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Hydrogen Energy & Storage Systems. Detail Green Hydrogen production via PEM Water Electrolysis ($2\text{H}_2\text{O} \to 2\text{H}_2 + \text{O}_2$), Hydrogen storage (Compressed $700\text{ bar}$, Liquid $\text{LH}_2$ at $20\text{ K}$, Metal Hydrides $\text{LaNi}_5\text{H}_6$), PEM Fuel Cell thermodynamic efficiency ($eta approx 83%$), and Grid Battery Energy Storage Systems (BESS). (10 Marks)"
      ]
    }
  },
  {
    "title": "Electromagnetic Waves",
    "slug": "engineering-physics-electromagnetic-waves",
    "order": 12,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Master classical electrodynamics & wave propagation: Maxwell's 4 Equations in differential & integral forms ($\nabla cdot mathbf{E} = \rho/epsilon_0, \nabla cdot mathbf{B} = 0, \nabla \times mathbf{E} = -partialmathbf{B}/partial t, \nabla \times mathbf{B} = mu_0 mathbf{J} + mu_0epsilon_0 partialmathbf{E}/partial t$), Electromagnetic Wave Equation derivation ($\nabla^2 mathbf{E} = mu_0epsilon_0 \frac{partial^2 mathbf{E}}{partial t^2}$), Speed of light in vacuum $c = 1/sqrt{mu_0epsilon_0} approx 3\times 10^8 \text{ m/s}$, Poynting Vector $mathbf{S} = \frac{1}{mu_0}(mathbf{E} \times mathbf{B})$, Waveguides (Rectangular waveguides, TE & TM modes, Cutoff frequency $f_c$), Antennas, Microwave Engineering basics, and Wireless Communication.",
    "subTopics": [
      "Maxwell's Equations",
      "Electromagnetic Wave Propagation",
      "Microwave Engineering Basics",
      "Waveguides",
      "Antennas",
      "Wireless Communication Basics"
    ],
    "prerequisiteTitles": [
      "Electricity and Magnetism"
    ],
    "learningObjectives": [
      "Write Maxwell's 4 Equations in Differential and Integral forms.",
      "Derive Speed of Electromagnetic Waves in free space $c = \frac{1}{sqrt{mu_0 epsilon_0}} = 3 \times 10^8 \text{ m/s}$ from Maxwell's equations.",
      "Calculate Cutoff Frequency $f_{c,mn} = \frac{c}{2} sqrt{left(\frac{m}{a}\right)^2 + left(\frac{n}{b}\right)^2}$ for rectangular waveguides."
    ],
    "notes": [
      {
        "title": "Maxwell's Equations Table & Poynting Vector Derivation",
        "content": "MAXWELL'S EQUATIONS & ELECTROMAGNETIC WAVES\n\n1. Maxwell's Equations Differential & Integral Forms:\n------------------------------------------------------------------------------------------------------\nName                  | Differential Form                                   | Integral Form\n------------------------------------------------------------------------------------------------------\nGauss's Law (Electro) | $\nabla cdot mathbf{E} = \frac{\rho}{epsilon_0}$ | $oint mathbf{E} cdot dmathbf{A} = \frac{Q_{enc}}{epsilon_0}$\nGauss's Law (Magneto) | $\nabla cdot mathbf{B} = 0$                       | $oint mathbf{B} cdot dmathbf{A} = 0$\nFaraday's Law         | $\nabla \times mathbf{E} = -\frac{partial mathbf{B}}{partial t}$ | $oint mathbf{E} cdot dmathbf{l} = -\frac{dPhi_B}{dt}$\nAmpere-Maxwell Law    | $\nabla \times mathbf{B} = mu_0 mathbf{J} + mu_0 epsilon_0 \frac{partial mathbf{E}}{partial t}$ | $oint mathbf{B} cdot dmathbf{l} = mu_0 I + mu_0 epsilon_0 \frac{dPhi_E}{dt}$\n------------------------------------------------------------------------------------------------------\n\n2. Poynting Vector ($mathbf{S}$):\n   Represents direction and rate of energy flow per unit area in an electromagnetic wave:\n   $mathbf{S} = \frac{1}{mu_0} (mathbf{E} \times mathbf{B}) \text{ W/m}^2$\n   - Average Intensity of Plane EM Wave: $langle S \rangle = \frac{1}{2} c epsilon_0 E_0^2 = \frac{E_0^2}{2 eta_0}$ where intrinsic impedance $eta_0 = sqrt{mu_0/epsilon_0} approx 377  Omega$."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Introduction to Electrodynamics",
        "author": "David J. Griffiths"
      },
      {
        "title": "Electromagnetic Waves and Radiating Systems",
        "author": "Jordan & Balmain"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Maxwells Equations",
        "url": "https://www.geeksforgeeks.org/maxwells-equations/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State Maxwell's 4 Equations in differential form and give physical meaning of each. (2 Marks)",
        "Define Poynting Vector $mathbf{S}$ and state its SI unit. (2 Marks)",
        "What is the Intrinsic Impedance ($eta_0$) of free space? (2 Marks)"
      ],
      "sixMarks": [
        "Derive 1D Electromagnetic Wave Equation $\nabla^2 mathbf{E} = mu_0 epsilon_0 \frac{partial^2 mathbf{E}}{partial t^2}$ from Maxwell's equations in free space. Prove speed of light $c = 1/sqrt{mu_0 epsilon_0}$. (6 Marks)",
        "A plane EM wave in free space has electric field $E_y = 300 cos(omega t - k z) \text{ V/m}$. Calculate magnetic field amplitude $B_0$, intrinsic impedance $eta_0$, and average Poynting vector $langle S \rangle$. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Waveguide & Antenna Theory. Detail Rectangular Waveguide TE vs TM modes, dominant mode $\text{TE}_{10}$ cutoff frequency $f_c = \frac{c}{2a}$, phase velocity $v_p$ vs group velocity $v_g$ ($v_p cdot v_g = c^2$), Hertzian Dipole antenna radiation pattern, and 5G millimeter wave propagation. (10 Marks)"
      ]
    }
  },
  {
    "title": "Engineering Applications of Physics",
    "slug": "engineering-physics-engineering-applications-of-physics",
    "order": 13,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Explore cross-disciplinary physical applications: Physics in Computer Science (Quantum logic gates, Magnetic RAM MRAM, Optical computing), Physics in Electronics (Semiconductor lithography, Solid-state lasers, Sensors), Physics in Mechanical Engineering (Thermodynamics of engines, Tribology friction control, Fluid dynamics CFD), Physics in Civil Engineering (Acoustics of buildings, Structural resonance, Seismic isolation), Physics in Robotics (LiDAR sensors, Gyroscopic stabilization), Physics in Aerospace (Aerodynamics Bernoulli principle, Plasma propulsion), and Industrial Case Studies.",
    "subTopics": [
      "Physics in Computer Science",
      "Physics in Electronics",
      "Physics in Mechanical Engineering",
      "Physics in Civil Engineering",
      "Physics in Robotics",
      "Physics in Aerospace Engineering",
      "Industrial Applications"
    ],
    "prerequisiteTitles": [
      "Optics",
      "Semiconductor Physics",
      "Electricity and Magnetism"
    ],
    "learningObjectives": [
      "Understand Architectural Acoustics in Civil Engineering: Sabine's Formula for Reverberation Time $T = \frac{0.161 V}{A}$.",
      "Understand LiDAR (Light Detection and Ranging) time-of-flight distance measurement in Autonomous Mobile Robots: $d = \frac{c cdot Delta t}{2}$.",
      "Understand Giant Magnetoresistance (GMR) effect in high-density hard disk drive (HDD) read heads."
    ],
    "notes": [
      {
        "title": "Sabine's Reverberation Formula & LiDAR Physics",
        "content": "MULTIDISCIPLINARY PHYSICS APPLICATIONS\n\n1. Architectural Acoustics & Sabine's Formula:\n   - Reverberation Time ($T_{60}$): Time required for sound energy density to drop by $60\text{ dB}$ (to $10^{-6}$ of initial value) after sound source stops.\n   - Sabine's Empirical Formula: $T = \frac{0.161 V}{sum a_i S_i} = \frac{0.161 V}{A}$\n     - $V$: Volume of auditorium ($\text{m}^3$).\n     - $S_i$: Surface area of $i^{\text{th}}$ absorbing material ($\text{m}^2$).\n     - $a_i$: Sound absorption coefficient ($0 le a_i le 1$).\n\n2. LiDAR Distance Measurement in Autonomous Vehicles:\n   Uses pulsed Laser diodes to measure time-of-flight ($Delta t$) of reflected light photons:\n   $d = \frac{c cdot Delta t}{2}$\n   - A $1\text{ nanosecond}$ pulse time-of-flight resolution yields $15\text{ cm}$ spatial distance accuracy!"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Engineering Physics",
        "author": "H.K. Malik, A.K. Singh"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Applications of Physics in Engineering",
        "url": "https://www.geeksforgeeks.org/physics-in-daily-life/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State Sabine's Formula for Reverberation Time $T_{60}$ in hall acoustics. (2 Marks)",
        "Write LiDAR time-of-flight distance formula $d$. (2 Marks)",
        "What is Giant Magnetoresistance (GMR) and where is it applied in computer hardware? (2 Marks)"
      ],
      "sixMarks": [
        "Derive Sabine's Reverberation Time formula $T = \frac{0.161 V}{A}$. Calculate reverberation time for a $1000\text{ m}^3$ hall with total absorption $A = 100\text{ O.W.U.}$. (6 Marks)",
        "Explain LiDAR sensor technology detailing pulsed laser emission, time-of-flight photodetection, 3D point cloud generation, and autonomous vehicle navigation. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Physics in Advanced Engineering. Detail Bernoulli's Principle in Aircraft Lift ($Delta P = \frac{1}{2}\rho (v_{top}^2 - v_{bottom}^2)$), Piezoelectric Accelerometers in Seismic Structural Health Monitoring, Optical Lithography using 13.5nm Extreme Ultraviolet (EUV) light for 3nm microchips, and Plasma Thrusters in Deep Space Probes. (10 Marks)"
      ]
    }
  },
  {
    "title": "Experimental Physics",
    "slug": "engineering-physics-experimental-physics",
    "order": 14,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Master laboratory methodology & data processing: Precision Measurement Techniques, Error Analysis (Standard deviation $sigma = sqrt{\frac{sum (x_i - \bar{x})^2}{N-1}}$, propagation of errors), Instrumentation Basics (Oscilloscope CRO/DSO, Function Generators, Multimeters, Spectrometer, Interferometer), Data Analysis, Linear Regression & Graph Plotting best practices, and Experimental Report Writing.",
    "subTopics": [
      "Measurement Techniques",
      "Error Analysis",
      "Instrumentation Basics",
      "Data Analysis",
      "Graph Plotting",
      "Experimental Report Writing"
    ],
    "prerequisiteTitles": [
      "Introduction to Engineering Physics"
    ],
    "learningObjectives": [
      "Operate Cathode Ray Oscilloscope (CRO) / Digital Storage Oscilloscope (DSO) to measure voltage amplitude, period, frequency, and phase shift (Lissajous figures).",
      "Perform Least-Squares Linear Regression line fitting ($y = m x + c$) for experimental data points.",
      "Write a formal laboratory report documenting hypothesis, apparatus, schematic, raw data tables, error analysis, and conclusions."
    ],
    "notes": [
      {
        "title": "CRO / DSO Measurement & Least-Squares Fitting Math",
        "content": "EXPERIMENTAL PHYSICS & INSTRUMENTATION\n\n1. Oscilloscope (CRO / DSO) Measurements:\n   - Peak-to-Peak Voltage: $V_{pp} = (\text{Vertical Division Count}) \times (\text{Volts/Div Setting})$.\n   - Period ($T$): $T = (\text{Horizontal Division Count}) \times (\text{Time/Div Setting})$.\n   - Frequency ($f$): $f = \frac{1}{T}$.\n   - Phase Angle from Lissajous Figure ($sin\theta = \frac{y_1}{y_2}$): Ellipse orientation determines phase difference between two AC signals.\n\n2. Least-Squares Linear Regression ($y = m x + c$):\n   - Slope $m$: $m = \frac{N sum(xy) - sum x sum y}{N sum(x^2) - (sum x)^2}$\n   - Y-intercept $c$: $c = \frac{sum y - m sum x}{N}$"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Practical Physics",
        "author": "C.L. Arora"
      }
    ],
    "practiceLinks": [
      {
        "title": "PhET Interactive Virtual Physics Labs",
        "url": "https://phet.colorado.edu/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "How is AC voltage amplitude and frequency measured using a CRO? (2 Marks)",
        "What are Lissajous Figures on an oscilloscope and what do they measure? (2 Marks)",
        "Write formulas for slope $m$ and intercept $c$ in Least-Squares Linear Regression. (2 Marks)"
      ],
      "sixMarks": [
        "Describe Cathode Ray Oscilloscope (CRO) block diagram detailing Electron Gun, Deflection Plates (X and Y), Time Base Generator, and Phosphor Screen. (6 Marks)",
        "Given experimental data for a spring extension ($F$ vs $x$), explain step-by-step how to plot a linear graph, determine spring constant $k$, and calculate standard error. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive guide to Experimental Data Processing. Detail Instrumental vs Personal vs Environmental Errors, Rejection of Outliers (Chauvenet's Criterion), Propagation of Uncertainty in complex non-linear formulas, automated data acquisition (DAQ cards & LabVIEW software), and experimental report presentation. (10 Marks)"
      ]
    }
  },
  {
    "title": "Emerging Technologies",
    "slug": "engineering-physics-emerging-technologies",
    "order": 15,
    "estimatedHours": 4,
    "difficulty": "Advanced",
    "description": "Explore frontier physics & future technologies: Quantum Computing Basics (Qubits, Superposition $|psi\rangle = alpha|0\rangle + \beta|1\rangle$, Entanglement, Quantum Logic Gates, IBM Quantum), Photonics (Integrated Photonic Circuits, Silicon Photonics), MEMS & NEMS (Micro/Nano Electro-Mechanical Systems, accelerometers, gyroscopes), Spintronics (Spin-polarized electron transport, Giant Magnetoresistance GMR, Spin-Torque Transfer MRAM), Advanced Electronic Materials (2D MXenes, Perovskites, Topological Insulators), and Future Trends.",
    "subTopics": [
      "Quantum Computing Basics",
      "Photonics",
      "MEMS and NEMS",
      "Spintronics",
      "Advanced Electronic Materials",
      "Future Trends in Engineering Physics"
    ],
    "prerequisiteTitles": [
      "Quantum Physics",
      "Semiconductor Physics",
      "Nanotechnology"
    ],
    "learningObjectives": [
      "Understand Qubit & Bloch Sphere: Qubit state $|psi\rangle = alpha |0\rangle + \beta |1\rangle$ with normalization $|alpha|^2 + |\beta|^2 = 1$.",
      "Understand Spintronics vs Conventional Electronics: Exploits intrinsic electron SPIN angular momentum ($s = 1/2$) in addition to charge $e$.",
      "Understand MEMS (Micro-Electro-Mechanical Systems) silicon comb drive capacitive accelerometers in smartphones and airbags."
    ],
    "notes": [
      {
        "title": "Qubit Superposition & Spintronics STT-MRAM Physics",
        "content": "FRONTIER PHYSICS: QUANTUM COMPUTING & SPINTRONICS\n\n1. Qubit State & Superposition:\n   A classical bit is 0 OR 1. A Quantum Bit (Qubit) can exist in a superposition of BOTH states simultaneously until measured:\n   $|psi\rangle = alpha |0\rangle + \beta |1\rangle = cosleft(\frac{\theta}{2}\right) |0\rangle + e^{iphi} sinleft(\frac{\theta}{2}\right) |1\rangle$\n   - $|alpha|^2$: Probability of measuring state 0.\n   - $|\beta|^2$: Probability of measuring state 1 ($|alpha|^2 + |\beta|^2 = 1$).\n\n2. Spintronics & STT-MRAM (Spin-Torque Transfer MRAM):\n   - Magnetic Tunnel Junction (MTJ): Thin insulating barrier ($\text{MgO}$) sandwiched between two ferromagnetic layers (Fixed layer & Free layer).\n   - Parallel Magnetization $implies$ Low Resistance (State 0).\n   - Anti-Parallel Magnetization $implies$ High Resistance (State 1).\n   - STT-MRAM offers non-volatile, unlimited write endurance, sub-nanosecond speed!"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Quantum Computation and Quantum Information",
        "author": "Nielsen & Chuang"
      },
      {
        "title": "Nanomaterials and Nanotechnology",
        "author": "Dr. Soma Gorai"
      }
    ],
    "practiceLinks": [
      {
        "title": "IBM Quantum Experience Platform",
        "url": "https://quantum.ibm.com/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define a Qubit and write state vector equation for quantum superposition. (2 Marks)",
        "What is Spintronics and how does it differ from conventional electronics? (2 Marks)",
        "What are MEMS and NEMS devices? Give 2 examples. (2 Marks)"
      ],
      "sixMarks": [
        "Explain Spintronics working principle detailing Magnetic Tunnel Junction (MTJ), Tunnel Magnetoresistance (TMR), and Spin-Torque Transfer MRAM (STT-MRAM) memory cells. (6 Marks)",
        "Describe MEMS Capacitive Accelerometer detailing silicon micro-comb fingers, proof mass deflection, capacitance change $Delta C$, and smartphone auto-rotation application. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Frontier Physics Technologies. Detail Quantum Supremacy concept, Superconducting Transmon Qubits ($T_k sim 15\text{ mK}$ dilution refrigerators), Silicon Photonics optical interconnects replacing copper wires on CPU chips, Topological Insulators (Insulating interior with dissipationless conducting surface states), and 2D MXene EMI shielding materials. (10 Marks)"
      ]
    }
  }
];
