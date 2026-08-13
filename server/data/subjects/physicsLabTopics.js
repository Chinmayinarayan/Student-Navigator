module.exports = [
  {
    "title": "Measurement Techniques",
    "slug": "applied-physics-lab-measurement-techniques",
    "order": 1,
    "estimatedHours": 3,
    "difficulty": "Beginner",
    "description": "Master experimental measurement principles, least count calculations for precision instruments, systematic & random error propagation, and statistical data analysis.",
    "subTopics": [
      "Introduction to Experimental Measurements",
      "Accuracy and Precision",
      "Types of Errors",
      "Systematic Errors",
      "Random Errors",
      "Least Count Calculation",
      "Error Analysis"
    ],
    "prerequisiteTitles": [],
    "learningObjectives": [
      "Calculate least counts for Vernier Callipers, Screw Gauge, and Travelling Microscope.",
      "Distinguish between accuracy, precision, systematic errors, and random errors.",
      "Perform standard error propagation calculations on multi-variable lab data."
    ],
    "notes": [
      {
        "title": "Experiment 1: Precision Measurements & Error Analysis",
        "content": "EXPERIMENTAL LAB MANUAL\n\nAIM:\nTo determine the least count of precision measuring instruments (Vernier Calliper, Screw Gauge, Travelling Microscope) and perform error analysis on dimensions and volume of test samples.\n\nAPPARATUS REQUIRED:\nVernier Callipers, Screw Gauge, Travelling Microscope, Solid Metallic Sphere, Glass Slab, Wire Sample.\n\nTHEORY & FORMULAE:\n1. Least Count (LC):\n   - Vernier Calliper: LC = (1 Main Scale Division) - (1 Vernier Scale Division) = 1 MSD / Total Vernier Divisions = 0.01 cm (or 0.1 mm).\n   - Screw Gauge: LC = Pitch / Total Circular Scale Divisions = 0.5 mm / 100 = 0.001 cm (or 0.01 mm).\n\n2. Error Analysis:\n   - Absolute Error: Δx = |x_mean - x_i|\n   - Relative Error: Δx / x_mean\n   - Percentage Error: % Error = (Δx / x_mean) * 100%\n   - Error Propagation for Volume V = x * y * z:\n     (ΔV / V) = (Δx / x) + (Δy / y) + (Δz / z)\n\nPROCEDURE:\n1. Check instruments for zero error (positive or negative zero error).\n2. Measure diameter of metallic sphere using Vernier Calliper at 5 different orientations.\n3. Measure thickness of glass slab and diameter of thin wire using Screw Gauge.\n4. Calculate mean values, apply zero corrections, and calculate volume and density with error bounds.\n\nOBSERVATION TABLE (Sample Format):\n-----------------------------------------------------------------------\nS.No | Main Scale (MSD) | Vernier/Circular Division | Measured (cm) | Corrected (cm)\n-----------------------------------------------------------------------\n 1   |      2.4 cm      |            6             |    2.46 cm    |    2.45 cm\n 2   |      2.4 cm      |            5             |    2.45 cm    |    2.44 cm\n 3   |      2.4 cm      |            6             |    2.46 cm    |    2.45 cm\n-----------------------------------------------------------------------\n\nCALCULATIONS & RESULT:\nMean Diameter = 2.446 cm ± 0.005 cm.\nCalculated Volume V = 4/3 * pi * r^3 = 7.64 cm^3.\nPercentage Error = 0.61%."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Applied Physics Lab Manual",
        "author": "Google Books",
        "url": "https://books.google.co.in/books?id=KQobEAAAQBAJ&lpg=PP2&pg=PP1#v=onepage&q&f=false"
      }
    ],
    "practiceLinks": [
      {
        "title": "Virtual Labs IIT - Measurement Experiments",
        "url": "https://vlab.amrita.edu/?sub=1&brch=280"
      },
      {
        "title": "Sanfoundry Physics Lab Questions",
        "url": "https://www.sanfoundry.com/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define Least Count of a measuring instrument. State LC for standard Vernier Calliper. (2 Marks)",
        "Differentiate between Accuracy and Precision with a suitable diagram/example. (2 Marks)",
        "What is Zero Error? How is zero correction applied? (2 Marks)",
        "Distinguish between Systematic Errors and Random Errors. (2 Marks)"
      ],
      "sixMarks": [
        "Explain the step-by-step procedure to determine the density of a wire sample using a Screw Gauge, including zero error correction and error propagation equations. (6 Marks)",
        "Derive the fractional error formula for the volume of a sphere V = (4/3)pi r^3 and calculate percentage error if radius r = 1.25 ± 0.01 cm. (6 Marks)"
      ],
      "longAnswer": [
        "Provide a comprehensive report on experimental error analysis. Detail classification of errors, instrument least count derivations, zero error corrections, standard deviation calculations, and error propagation rules for addition, multiplication, and power functions. (10 Marks)"
      ]
    }
  },
  {
    "title": "Laser Experiments",
    "slug": "applied-physics-lab-laser-experiments",
    "order": 2,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Determine the wavelength of monochromatic laser light using a plane diffraction grating and measure beam divergence characteristics.",
    "subTopics": [
      "Introduction to Laser",
      "Properties of Laser",
      "Coherence",
      "Monochromaticity",
      "Directionality",
      "Applications of Laser",
      "Determination of Wavelength using Diffraction Grating",
      "Laser Divergence Measurement"
    ],
    "prerequisiteTitles": [
      "Measurement Techniques"
    ],
    "learningObjectives": [
      "Understand key laser characteristics: Spatial & Temporal Coherence, Directionality, Monochromaticity.",
      "Determine laser wavelength using plane transmission diffraction grating equation.",
      "Calculate laser beam divergence angle theta from spot sizes at varying distances."
    ],
    "notes": [
      {
        "title": "Experiment 2: Determination of Wavelength & Divergence of Laser",
        "content": "EXPERIMENTAL LAB MANUAL\n\nAIM:\n1. To determine the wavelength of given He-Ne / Semiconductor Diode Laser using a plane diffraction grating.\n2. To measure the angle of divergence of the laser beam.\n\nAPPARATUS REQUIRED:\nHe-Ne / Semiconductor Diode Laser Source, Plane Transmission Diffraction Grating (15,000 lines/inch), Screen with millimeter grid, Optical Bench / Stands, Measuring Tape.\n\nTHEORY & FORMULAE:\n1. Wavelength Determination:\n   Grating Equation: (a + b) sin(theta_m) = m * lambda\n   where:\n   - (a + b) = Grating element = 2.54 cm / N (N = lines per inch) = (2.54 / 15000) cm = 1.693 x 10^-4 cm\n   - m = Order of diffraction spectrum (m = 1, 2, 3...)\n   - theta_m = Angle of diffraction for m-th order\n   - sin(theta_m) = x_m / sqrt(x_m^2 + D^2), where x_m is distance of m-th spot from central spot, D is grating-to-screen distance.\n   Formula: lambda = ((a + b) * x_m) / (m * sqrt(x_m^2 + D^2))\n\n2. Laser Beam Divergence:\n   Angle of Divergence theta = (d2 - d1) / (2 * (z2 - z1))\n   where d1 and d2 are beam spot diameters at screen distances z1 and z2.\n\nPROCEDURE:\n1. Mount laser source and align beam horizontally onto diffraction grating normal to surface.\n2. Observe diffraction spots (m = ±1, ±2) symmetric on screen at distance D = 50 cm.\n3. Record distance x_m for 1st and 2nd order bright spots on both left and right sides.\n4. Vary D to 75 cm and 100 cm and repeat readings.\n5. For divergence, record beam spot diameter d1 at z1 = 1 m and d2 at z2 = 3 m.\n\nOBSERVATION TABLE:\n-----------------------------------------------------------------------------\nOrder (m) | Distance D (cm) | Left x (cm) | Right x (cm) | Mean x (cm) | Wavelength lambda (nm)\n-----------------------------------------------------------------------------\n   m=1    |     50 cm       |   19.2 cm   |   19.3 cm    |  19.25 cm   |        632.8 nm\n   m=2    |     50 cm       |   44.1 cm   |   44.3 cm    |  44.20 cm   |        633.1 nm\n-----------------------------------------------------------------------------\n\nRESULT:\n1. Wavelength of Laser Light lambda = 632.8 nm (Standard Red He-Ne Laser).\n2. Laser Beam Divergence Angle theta = 0.85 mrad."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Textbook of Optics & Lasers",
        "author": "N. Subrahmanyam & Brij Lal",
        "url": "https://www.mlsu.ac.in/econtents/666_A%20textbook%20of%20Optics%20by%20Subrahmanyam-Brij%20Lal.pdf"
      },
      {
        "title": "Optoelectronics & Laser Instrumentation",
        "author": "J. Wilson & J.F.B. Hawkes",
        "url": "https://www.ele.uva.es/~ivasan/DO/%5BBook%20-%20Opto%5D%20Optoelectronics.%20An%20introduction%20-%20Wilson,%20Hawkes%20(Prentice-Hall,%201998).pdf"
      }
    ],
    "practiceLinks": [
      {
        "title": "Virtual Labs IIT - Laser Diffraction",
        "url": "https://vlab.amrita.edu/?sub=1&brch=281"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What does LASER stand for? State four unique properties of laser radiation. (2 Marks)",
        "Define Spatial Coherence and Temporal Coherence. (2 Marks)",
        "What is a Diffraction Grating? Define grating element (a + b). (2 Marks)",
        "Define Laser Beam Divergence and state its SI unit. (2 Marks)"
      ],
      "sixMarks": [
        "Explain the grating equation (a + b) sin(theta) = m * lambda. Describe step-by-step experiment to find laser wavelength with ray diagram and formula. (6 Marks)",
        "Derive the formula for laser divergence angle theta. If spot diameters are 2.5 mm at 1m and 4.5 mm at 3m, calculate divergence in milliradians. (6 Marks)"
      ],
      "longAnswer": [
        "Provide a comprehensive experimental guide for Laser Optics. Detail laser principles (stimulated emission, population inversion), grating wavelength determination setup, beam divergence measurement, safety precautions, and applications in fiber communications and industry. (10 Marks)"
      ]
    }
  },
  {
    "title": "Interference and Diffraction Experiments",
    "slug": "applied-physics-lab-interference-and-diffraction-experiments",
    "order": 3,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Investigate wave optics phenomena including Newton's Rings interference pattern, single-slit diffraction pattern, and grating spectra determination.",
    "subTopics": [
      "Wave Nature of Light",
      "Principle of Superposition",
      "Constructive and Destructive Interference",
      "Young's Double Slit Experiment",
      "Newton's Rings Experiment",
      "Diffraction of Light",
      "Single Slit Diffraction",
      "Diffraction Grating Experiment"
    ],
    "prerequisiteTitles": [
      "Measurement Techniques"
    ],
    "learningObjectives": [
      "Understand thin film interference in wedge-shaped air films and circular Newton's rings.",
      "Calculate wavelength of monochromatic light using Newton's rings diameter formula.",
      "Distinguish between Fresnel and Fraunhofer diffraction regimes."
    ],
    "notes": [
      {
        "title": "Experiment 3: Newton's Rings & Single Slit Diffraction",
        "content": "EXPERIMENTAL LAB MANUAL\n\nAIM:\n1. To determine the wavelength of monochromatic sodium light using Newton's Rings setup.\n2. To determine the radius of curvature R of the plano-convex lens using a spherometer.\n\nAPPARATUS REQUIRED:\nTravelling Microscope, Sodium Vapor Lamp (589 nm), Plano-Convex Lens, Glass Plate (at 45 deg), Spherometer, Plane Glass Sheet.\n\nTHEORY & FORMULAE:\nNewton's rings are formed due to interference between light reflected from top and bottom surfaces of wedge-shaped air film between plano-convex lens and glass plate.\n- Diameter of n-th dark ring: D_n^2 = 4 * n * lambda * R\n- Diameter of (n+m)-th dark ring: D_{n+m}^2 = 4 * (n + m) * lambda * R\nWavelength Formula: lambda = (D_{n+m}^2 - D_n^2) / (4 * m * R)\nwhere R is Radius of Curvature of lens surface R = (h / 2) + (l^2 / (6 * h)).\n\nPROCEDURE:\n1. Focus Travelling Microscope on air film formed beneath plano-convex lens illuminated by sodium lamp through 45-degree glass plate.\n2. Observe circular concentric dark and bright rings.\n3. Move crosshair to 20th dark ring on left, record position, and move rightward recording ring diameters for n = 20, 16, 12, 8, 4.\n4. Plot graph D_n^2 vs n; slope equals 4 * lambda * R.\n\nOBSERVATION TABLE (Newton's Rings):\n-----------------------------------------------------------------------------\nRing No. (n) | Left M.S.R + V.S.R (cm) | Right M.S.R + V.S.R (cm) | Diameter D_n (cm) | D_n^2 (cm^2)\n-----------------------------------------------------------------------------\n     20      |        4.120 cm        |         7.320 cm         |     3.200 cm      |   10.240\n     16      |        4.280 cm        |         7.160 cm         |     2.880 cm      |    8.294\n     12      |        4.460 cm        |         6.980 cm         |     2.520 cm      |    6.350\n-----------------------------------------------------------------------------\n\nRESULT:\n1. Radius of Curvature R = 100.0 cm.\n2. Wavelength of Sodium Light lambda = 589.3 nm."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Textbook of Optics & Lasers",
        "author": "N. Subrahmanyam & Brij Lal",
        "url": "https://www.mlsu.ac.in/econtents/666_A%20textbook%20of%20Optics%20by%20Subrahmanyam-Brij%20Lal.pdf"
      },
      {
        "title": "Fundamentals of Optics",
        "author": "Jenkins & White",
        "url": "https://dpbck.ac.in/wp-content/uploads/2022/10/Fundamentals-of-Optics-4th-Edition.pdf"
      }
    ],
    "practiceLinks": [
      {
        "title": "Virtual Labs IIT - Newton's Rings",
        "url": "https://vlab.amrita.edu/?sub=1&brch=281&sim=854"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Why are Newton's rings circular in shape? (2 Marks)",
        "Why is the central ring in Newton's rings experiment dark in reflected light? (2 Marks)",
        "What happens to Newton's rings if water is introduced between lens and glass plate? (2 Marks)",
        "Differentiate between Interference and Diffraction of light. (2 Marks)"
      ],
      "sixMarks": [
        "Derive the expression for the diameter of n-th dark ring in Newton's rings experiment D_n^2 = 4 n lambda R. (6 Marks)",
        "Explain Single Slit Fraunhofer Diffraction. Derive condition for minima and central maxima width. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Wave Optics Experiments. Detail interference theory in wedge-shaped films, Newton's rings experimental setup, diameter derivations, spherometer radius calculation, and single slit diffraction pattern analysis. (10 Marks)"
      ]
    }
  },
  {
    "title": "Fiber Optics Experiments",
    "slug": "applied-physics-lab-fiber-optics-experiments",
    "order": 4,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Measure Numerical Aperture (NA), acceptance angle, and attenuation losses of step-index optical fiber cables.",
    "subTopics": [
      "Introduction to Optical Fiber",
      "Principle of Total Internal Reflection",
      "Acceptance Angle",
      "Numerical Aperture",
      "Fiber Losses",
      "Determination of Numerical Aperture of Optical Fiber",
      "Optical Fiber Communication Applications"
    ],
    "prerequisiteTitles": [
      "Measurement Techniques"
    ],
    "learningObjectives": [
      "Understand Total Internal Reflection (TIR) and light propagation inside optical fiber core-cladding.",
      "Calculate Numerical Aperture (NA) and Acceptance Angle theta_a from output cone diameter.",
      "Evaluate attenuation losses (dB/km) and bending losses in fiber optic transmission."
    ],
    "notes": [
      {
        "title": "Experiment 4: Determination of Numerical Aperture of Optical Fiber",
        "content": "EXPERIMENTAL LAB MANUAL\n\nAIM:\nTo measure the Numerical Aperture (NA) and Acceptance Angle (theta_a) of a given step-index optical fiber cable.\n\nAPPARATUS REQUIRED:\nFiber Optics Experimental Trainer Kit, Step-index Fiber Cable (1 meter), Red LED Light Source (650 nm), Numerical Aperture Jig with concentric circle target, Ruler.\n\nTHEORY & FORMULAE:\n1. Total Internal Reflection (TIR):\n   Light propagates inside fiber core (refractive index n1) surrounded by cladding (n2 < n1) if launch angle <= acceptance angle theta_a.\n2. Numerical Aperture (NA):\n   NA = sin(theta_a) = sqrt(n1^2 - n2^2)\n3. Experimental Formula:\n   If light emerging from fiber end forms a circular spot of diameter W on a screen at distance L:\n   tan(theta_a) = W / (2 * L)\n   sin(theta_a) = W / sqrt(W^2 + 4 * L^2)\n   Numerical Aperture NA = W / sqrt(W^2 + 4 * L^2)\n\nPROCEDURE:\n1. Connect one end of optical fiber to 650 nm LED source on trainer kit.\n2. Mount opposite end of fiber onto NA Jig facing screen with concentric circles of diameters 5mm, 10mm, 15mm, 20mm.\n3. Adjust distance L between fiber tip and screen until red spot matches 5mm circle diameter W. Record distance L.\n4. Repeat for spot diameters W = 10mm, 15mm, 20mm.\n5. Compute NA and Acceptance Angle theta_a = sin^-1(NA) for each reading and calculate mean.\n\nOBSERVATION TABLE:\n-----------------------------------------------------------------------------\nS.No | Spot Diameter W (mm) | Distance L (mm) | Numerical Aperture (NA) | Acceptance Angle theta_a\n-----------------------------------------------------------------------------\n 1   |        10 mm         |     12.5 mm     |         0.371           |          21.8 deg\n 2   |        15 mm         |     18.8 mm     |         0.370           |          21.7 deg\n 3   |        20 mm         |     25.0 mm     |         0.371           |          21.8 deg\n-----------------------------------------------------------------------------\n\nRESULT:\n1. Mean Numerical Aperture (NA) = 0.371.\n2. Acceptance Angle theta_a = 21.8 degrees."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Optical Fiber Communications",
        "author": "Gerd Keiser",
        "url": "https://gsundar.weebly.com/uploads/5/4/5/6/54560163/optical_fiber_communication_by_gerd_keiser.pdf"
      },
      {
        "title": "Fiber Optic Communications",
        "author": "Joseph C. Palais",
        "url": "https://elcom-team.com/Subjects/Fiber%20Optic%20Communications/%D8%A7%D9%84%D9%83%D8%AA%D8%A8%20%D9%88%20%D8%A7%D9%84%D8%AD%D9%84%D9%88%D9%84/book14ed.pdf"
      }
    ],
    "practiceLinks": [
      {
        "title": "Virtual Labs IIT - Fiber Optics",
        "url": "https://vlab.amrita.edu/?sub=1&brch=281&sim=1500"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is Total Internal Reflection? State the condition for TIR inside optical fiber. (2 Marks)",
        "Define Numerical Aperture (NA) and Acceptance Angle of an optical fiber. (2 Marks)",
        "What is the difference between Single Mode and Multi-Mode optical fibers? (2 Marks)",
        "List three major sources of signal attenuation/loss in optical fiber transmission. (2 Marks)"
      ],
      "sixMarks": [
        "Derive the expression for Numerical Aperture NA = sqrt(n1^2 - n2^2) and Acceptance Angle theta_a = sin^-1(sqrt(n1^2 - n2^2)). (6 Marks)",
        "Explain step-by-step experimental procedure to measure NA using concentric circle target jig with formula and ray diagram. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Optical Fiber Communication & Lab Measurements. Detail light guiding mechanisms, refractive index profiles (Step-index vs Graded-index), NA determination, splice/bending loss measurements, and WDM telecommunication applications. (10 Marks)"
      ]
    }
  },
  {
    "title": "Semiconductor Experiments",
    "slug": "applied-physics-lab-semiconductor-experiments",
    "order": 5,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Measure V-I characteristics of PN junction & Zener diodes, and calculate semiconductor energy band gap using reverse-biased temperature setup / Four-Probe method.",
    "subTopics": [
      "Introduction to Semiconductor Materials",
      "PN Junction Diode",
      "Diode Characteristics",
      "Zener Diode",
      "LED Characteristics",
      "Photodiode",
      "Determination of Band Gap Energy",
      "V-I Characteristics of PN Junction Diode",
      "V-I Characteristics of Zener Diode"
    ],
    "prerequisiteTitles": [
      "Measurement Techniques"
    ],
    "learningObjectives": [
      "Plot forward and reverse V-I characteristics of PN junction diode and Zener diode.",
      "Calculate knee voltage, forward resistance, Zener breakdown voltage, and reverse saturation current.",
      "Determine energy bandgap Eg of semiconductor (Germanium/Silicon) using reverse saturation current vs temperature."
    ],
    "notes": [
      {
        "title": "Experiment 5: V-I Characteristics & Energy Bandgap Determination",
        "content": "EXPERIMENTAL LAB MANUAL\n\nAIM:\n1. To plot Forward and Reverse V-I characteristics of PN Junction Diode and Zener Diode.\n2. To determine the Energy Bandgap (Eg) of Germanium/Silicon semiconductor diode using temperature-dependent reverse saturation current.\n\nAPPARATUS REQUIRED:\nSemiconductor Bandgap Trainer Kit (Oven, Thermometer, DC Power Supply, Microammeter), PN Junction Diode (IN4007 / OA79), Zener Diode (5.1V), Connecting Wires.\n\nTHEORY & FORMULAE:\n1. Diode Equation: I = I_s * (exp(qV / (eta * k * T)) - 1)\n   In reverse bias (V >> k T / q), reverse current I approx I_s.\n2. Reverse Saturation Current Temperature Dependence:\n   I_s = A * T^(3/2) * exp(-Eg / (k * T))\n   log10(I_s) = C - (Eg / (2.303 * k)) * (1 / T)\n3. Bandgap Formula:\n   Eg = 2.303 * 10^3 * 2 * k * (Slope of log10(I_s) vs 10^3/T) in eV\n   where k = Boltzmann constant = 8.617 x 10^-5 eV/K.\n\nPROCEDURE:\n1. Connect reverse-biased Ge/Si diode inside oven controlled container connected to microammeter.\n2. Apply constant reverse voltage (V = 3V).\n3. Heat oven up to 80 deg C. Turn off heater and record reverse saturation current I_s (in uA) at intervals of 5 deg C as oven cools down to room temperature.\n4. Plot log10(I_s) along Y-axis vs (10^3 / T in K^-1) along X-axis.\n5. Calculate slope and evaluate energy bandgap Eg.\n\nOBSERVATION TABLE (Bandgap Measurement):\n-----------------------------------------------------------------------------\nTemp (deg C) | Temp T (K) | 10^3 / T (K^-1) | Reverse Current I_s (uA) | log10(I_s)\n-----------------------------------------------------------------------------\n     75      |    348 K   |     2.87        |          45 uA           |   1.653\n     65      |    338 K   |     2.95        |          26 uA           |   1.415\n     55      |    328 K   |     3.05        |          14 uA           |   1.146\n-----------------------------------------------------------------------------\n\nRESULT:\n1. Knee Voltage of PN Diode = 0.7 V (Silicon).\n2. Zener Breakdown Voltage Vz = 5.1 V.\n3. Energy Bandgap Eg = 0.72 eV (Germanium) / 1.12 eV (Silicon)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Solid State Electronic Devices",
        "author": "Ben G. Streetman & Sanjay Banerjee",
        "url": "https://rrsdce.wordpress.com/wp-content/uploads/2018/07/sspd-eee-swapnil.pdf"
      },
      {
        "title": "Semiconductor Devices: Physics and Technology",
        "author": "S.M. Sze",
        "url": "https://pd-zdh.xaut.edu.cn/__local/A/F0/D3/EA002AB461DFDFC92BCFAD35BC4_C62E9AA9_1335DE9.pdf"
      }
    ],
    "practiceLinks": [
      {
        "title": "Virtual Labs IIT - Semiconductor Band Gap",
        "url": "https://vlab.amrita.edu/?sub=1&brch=282&sim=879"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is Energy Bandgap (Eg)? State typical Eg values for Silicon and Germanium at 300K. (2 Marks)",
        "Differentiate between Zener Breakdown and Avalanche Breakdown. (2 Marks)",
        "Why does reverse saturation current in a semiconductor diode increase rapidly with temperature? (2 Marks)",
        "What is the Knee/Cut-in Voltage of a diode? (2 Marks)"
      ],
      "sixMarks": [
        "Explain the Four-Probe method for measuring resistivity and bandgap of semiconductors with circuit diagram and mathematical equations. (6 Marks)",
        "Describe experimental setup and procedure to calculate energy bandgap Eg using temperature variation of reverse saturation current. Derive Eg slope equation. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Semiconductor Physics Experiments. Detail carrier generation/recombination, PN junction barrier potential, forward/reverse V-I characteristics, Zener voltage regulation, and bandgap energy determination. (10 Marks)"
      ]
    }
  },
  {
    "title": "Magnetic Experiments",
    "slug": "applied-physics-lab-magnetic-experiments",
    "order": 6,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Study Hall Effect in semiconductors, measure Hall Voltage, calculate Hall Coefficient, carrier density, and carrier mobility.",
    "subTopics": [
      "Introduction to Magnetic Materials",
      "Magnetic Field Concepts",
      "Hall Effect",
      "Hall Voltage",
      "Carrier Concentration",
      "Hysteresis Curve",
      "Determination of Hall Coefficient"
    ],
    "prerequisiteTitles": [
      "Measurement Techniques"
    ],
    "learningObjectives": [
      "Understand Hall Effect principle and Lorentz force action on charge carriers.",
      "Calculate Hall Coefficient R_H, carrier concentration n, and carrier mobility mu.",
      "Determine charge carrier sign (electrons in n-type vs holes in p-type)."
    ],
    "notes": [
      {
        "title": "Experiment 6: Determination of Hall Coefficient & Carrier Density",
        "content": "EXPERIMENTAL LAB MANUAL\n\nAIM:\nTo determine the Hall Coefficient (R_H), charge carrier concentration (n or p), and carrier mobility (mu) of a given semiconductor crystal using Hall Effect apparatus.\n\nAPPARATUS REQUIRED:\nElectromagnet setup with power supply, Digital Gaussmeter with Hall Probe, Constant Current Generator (for sample current I), Germanium/Silicon Hall Crystal Probe, Digital Millivoltmeter.\n\nTHEORY & FORMULAE:\nWhen a current-carrying conductor/semiconductor (current I) is placed in a perpendicular magnetic field B, a transverse electric field (Hall Voltage V_H) is developed perpendicular to both current and magnetic field.\n\nFormulas:\n1. Hall Voltage: V_H = (R_H * I * B) / t\n   where t is thickness of semiconductor crystal.\n2. Hall Coefficient: R_H = (V_H * t) / (I * B)  [m^3 / C]\n3. Carrier Concentration: n = 1 / (e * |R_H|)  [m^-3]\n4. Mobility: mu = |R_H| * sigma = |R_H| / rho  [m^2 / (V s)]\n\nPROCEDURE:\n1. Place Gaussmeter probe between electromagnet pole pieces. Calibrate magnetic field B (in Gauss/Tesla) vs magnetizing current I_m.\n2. Replace Gaussmeter probe with semiconductor Hall sample probe.\n3. Pass constant current I = 5 mA through sample.\n4. Apply magnetic field B = 0.1 T to 0.5 T by adjusting magnet current.\n5. Record Hall Voltage V_H (in mV) for various B values.\n6. Reverse current and magnetic field directions to eliminate thermomagnetic zero-error offsets.\n7. Plot V_H vs B graph; slope equals (R_H * I) / t.\n\nOBSERVATION TABLE:\n-----------------------------------------------------------------------------\nMagnetic Field B (Tesla) | Sample Current I (mA) | Hall Voltage V_H (mV) | R_H (m^3 / C)\n-----------------------------------------------------------------------------\n         0.1 T           |        5.0 mA         |        12.5 mV        |  2.50 x 10^-3\n         0.2 T           |        5.0 mA         |        25.1 mV        |  2.51 x 10^-3\n         0.3 T           |        5.0 mA         |        37.4 mV        |  2.49 x 10^-3\n-----------------------------------------------------------------------------\n\nRESULT:\n1. Hall Coefficient R_H = +2.50 x 10^-3 m^3/C (P-type Germanium).\n2. Carrier Concentration n = 2.50 x 10^21 m^-3.\n3. Carrier Mobility mu = 0.38 m^2 / (V s)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Introduction to Solid State Physics",
        "author": "Charles Kittel",
        "url": "http://metal.elte.hu/~groma/Anyagtudomany/kittel.pdf"
      },
      {
        "title": "Electricity and Magnetism",
        "author": "E.M. Purcell & D.J. Morin",
        "url": "https://assets.cambridge.org/97811070/14022/frontmatter/9781107014022_frontmatter.pdf"
      }
    ],
    "practiceLinks": [
      {
        "title": "Virtual Labs IIT - Hall Effect",
        "url": "https://vlab.amrita.edu/?sub=1&brch=282&sim=878"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is Hall Effect? Define Hall Voltage and Hall Field. (2 Marks)",
        "State the significance of the sign of Hall Coefficient R_H. (2 Marks)",
        "How is carrier mobility related to Hall coefficient and conductivity? (2 Marks)",
        "What is Lorentz force? Write its vector equation. (2 Marks)"
      ],
      "sixMarks": [
        "Derive the formula for Hall Coefficient R_H = 1 / (n q) and Hall Voltage V_H = (R_H I B) / t. (6 Marks)",
        "Explain step-by-step experimental procedure to calculate carrier density and mobility using Hall Effect setup with circuit diagram. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Magnetic Experiments. Detail Hall effect physics, magnetic domain hysteresis (B-H curve), magnet resistance, Gaussmeter calibration, and semiconductor carrier characterization. (10 Marks)"
      ]
    }
  },
  {
    "title": "Ultrasonic Experiments",
    "slug": "applied-physics-lab-ultrasonic-experiments",
    "order": 7,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Measure ultrasonic wave velocity in liquids using an Ultrasonic Interferometer and compute adiabatic compressibility.",
    "subTopics": [
      "Introduction to Ultrasonic Waves",
      "Properties of Ultrasonic Waves",
      "Piezoelectric Effect",
      "Applications of Ultrasonics",
      "Measurement of Velocity of Ultrasonic Waves",
      "Ultrasonic Interferometer Experiment"
    ],
    "prerequisiteTitles": [
      "Measurement Techniques"
    ],
    "learningObjectives": [
      "Understand Piezoelectric Effect and generation of ultrasonic high-frequency sound waves.",
      "Form acoustic standing waves in liquid medium using Ultrasonic Interferometer cell.",
      "Calculate ultrasonic velocity v and adiabatic compressibility beta of test liquids."
    ],
    "notes": [
      {
        "title": "Experiment 7: Ultrasonic Interferometer & Liquid Compressibility",
        "content": "EXPERIMENTAL LAB MANUAL\n\nAIM:\nTo determine the velocity of ultrasonic waves in liquid media (Water/Ethanol) using an Ultrasonic Interferometer and calculate the adiabatic compressibility of the liquid.\n\nAPPARATUS REQUIRED:\nUltrasonic Interferometer Setup (High Frequency Generator f = 2 MHz, Measuring Cell with Quartz Crystal, Digital Microammeter), Micrometer Screw, Test Liquids (Distilled Water, Ethanol).\n\nTHEORY & FORMULAE:\n1. Acoustic Standing Waves:\n   Ultrasonic waves generated by quartz crystal travel through liquid and reflect from movable metallic plate, forming standing waves.\n2. Distance Between Consecutive Nodes:\n   Distance moved by micrometer for N nodal shifts d:\n   d = N * (lambda / 2)  =>  lambda = (2 * d) / N\n3. Ultrasonic Velocity:\n   v = f * lambda = (2 * f * d) / N\n4. Adiabatic Compressibility:\n   beta = 1 / (rho * v^2)\n   where rho is density of liquid (rho_water = 1000 kg/m^3).\n\nPROCEDURE:\n1. Fill measuring cell with distilled water and screw down micrometer reflector plate.\n2. Turn on High Frequency Generator (f = 2.0 MHz).\n3. Slowly rotate micrometer knob to move reflector plate. Microammeter current shows periodic maxima and minima corresponding to nodal/antinodal positions.\n4. Record micrometer position for 20 consecutive maxima (N = 20).\n5. Calculate wavelength lambda = (2 * d) / 20, velocity v = f * lambda, and compressibility beta.\n\nOBSERVATION TABLE:\n-----------------------------------------------------------------------------\nNodal Shifts N | Initial Micrometer (mm) | Final Micrometer (mm) | Distance d (mm) | Velocity v (m/s)\n-----------------------------------------------------------------------------\n     N=20      |        5.120 mm         |        19.960 mm       |    14.840 mm    |    1484 m/s\n-----------------------------------------------------------------------------\n\nRESULT:\n1. Ultrasonic Velocity in Water v = 1484 m/s.\n2. Adiabatic Compressibility of Water beta = 4.54 x 10^-10 Pa^-1."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Textbook of Optics & Lasers",
        "author": "N. Subrahmanyam & Brij Lal",
        "url": "https://www.mlsu.ac.in/econtents/666_A%20textbook%20of%20Optics%20by%20Subrahmanyam-Brij%20Lal.pdf"
      },
      {
        "title": "Fundamentals of Acoustics",
        "author": "Kinsler & Frey",
        "url": "https://jontalle.web.engr.illinois.edu/Public/BOOKS/KinslerFreyCoopSanders.00.pdf"
      }
    ],
    "practiceLinks": [
      {
        "title": "Virtual Labs IIT - Ultrasonic Velocity",
        "url": "https://vlab.amrita.edu/?sub=1&brch=282&sim=1510"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What are Ultrasonic Waves? State their frequency range and two key properties. (2 Marks)",
        "Explain Piezoelectric Effect and Inverse Piezoelectric Effect. (2 Marks)",
        "Define Adiabatic Compressibility of a liquid. State its SI unit. (2 Marks)",
        "Why can't electromagnetic waves be used in an ultrasonic interferometer? (2 Marks)"
      ],
      "sixMarks": [
        "Explain Piezoelectric Oscillator circuit diagram and principle used to generate high-frequency ultrasonic waves. (6 Marks)",
        "Describe step-by-step experimental method to measure ultrasonic velocity in liquid using an Interferometer with formulae and node calculations. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Ultrasonics. Detail generation methods (Magnetostriction vs Piezoelectric), acoustic grating phenomenon, interferometer velocity measurements, liquid compressibility determination, and industrial SONAR/medical imaging applications. (10 Marks)"
      ]
    }
  },
  {
    "title": "Modern Physics Experiments",
    "slug": "applied-physics-lab-modern-physics-experiments",
    "order": 8,
    "estimatedHours": 4,
    "difficulty": "Advanced",
    "description": "Investigate photoelectric conversion, plot I-V characteristics of Solar Cells, and compute Fill Factor and maximum power efficiency.",
    "subTopics": [
      "Photoelectric Effect",
      "Quantum Concepts",
      "Solar Cell Characteristics",
      "Sensors and Transducers",
      "Photodiode Applications"
    ],
    "prerequisiteTitles": [
      "Semiconductor Experiments"
    ],
    "learningObjectives": [
      "Understand photovoltaic effect and photon-to-electron energy conversion.",
      "Plot V-I characteristics of Solar Cell under varying light intensities.",
      "Calculate Open Circuit Voltage (Voc), Short Circuit Current (Isc), Maximum Power (Pmax), and Fill Factor (FF)."
    ],
    "notes": [
      {
        "title": "Experiment 8: Solar Cell I-V Characteristics & Fill Factor",
        "content": "EXPERIMENTAL LAB MANUAL\n\nAIM:\nTo study the I-V characteristics of a Photovoltaic Solar Cell under light illumination and determine its Open Circuit Voltage (Voc), Short Circuit Current (Isc), Fill Factor (FF), and Efficiency.\n\nAPPARATUS REQUIRED:\nSolar Cell Module (Silicon PV cell), Variable DC Load Resistance Box (0 to 10 kOhm), Light Source (100W Halogen Lamp), Voltmeter (0-2V), Ammeter (0-50 mA), Luxmeter.\n\nTHEORY & FORMULAE:\n1. Photovoltaic Effect:\n   Incandescent photons with E >= Eg generate electron-hole pairs across PN junction, creating photocurrent I_ph.\n2. Key Parameters:\n   - Open Circuit Voltage Voc: Voltage when I = 0.\n   - Short Circuit Current Isc: Current when V = 0.\n   - Maximum Power Point Pmax = Vmax * Imax.\n   - Fill Factor (FF): Ratio of actual maximum power to theoretical maximum power product:\n     FF = (Vmax * Imax) / (Voc * Isc)\n   - Efficiency eta = (Pmax / Pin) * 100%\n\nPROCEDURE:\n1. Place Solar Cell at fixed distance (30 cm) facing Halogen lamp.\n2. Connect voltmeter across cell terminals and ammeter in series with variable load resistor.\n3. Set load resistor to zero (Short Circuit) and record Isc.\n4. Increase load resistance gradually; record corresponding V and I values up to maximum resistance (Open Circuit Voc).\n5. Plot V-I curve along with Power curve P = V * I vs V to identify Vmax, Imax, and Pmax.\n\nOBSERVATION TABLE:\n-----------------------------------------------------------------------------\nResistance R (ohm) | Voltage V (Volts) | Current I (mA) | Power P = V*I (mW)\n-----------------------------------------------------------------------------\n      0 ohm        |      0.00 V       |    32.0 mA     |      0.00 mW\n    100 ohm        |      0.38 V       |    28.5 mA     |     10.83 mW\n    200 ohm        |      0.46 V (Vmax)|    24.0 mA(Imax|     11.04 mW (Pmax)\n   10000 ohm       |      0.58 V (Voc) |     0.0 mA     |      0.00 mW\n-----------------------------------------------------------------------------\n\nRESULT:\n1. Open Circuit Voltage Voc = 0.58 V.\n2. Short Circuit Current Isc = 32.0 mA.\n3. Maximum Power Pmax = 11.04 mW.\n4. Fill Factor FF = 0.595 (or 59.5%)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Solar Energy: Principles of Thermal Collection",
        "author": "S.P. Sukhatme & J.K. Nayak",
        "url": "https://archive.org/details/solarenergyprinc0000sukh/mode/2up"
      },
      {
        "title": "Concepts of Modern Physics",
        "author": "Arthur Beiser",
        "url": "https://web.phy.ntnu.edu.tw/~hongyi/notes/Books/Beiser_Concepts%20of%20Modern%20Physics_2003_MP.pdf"
      }
    ],
    "practiceLinks": [
      {
        "title": "Virtual Labs IIT - Solar Cell Characteristics",
        "url": "https://vlab.amrita.edu/?sub=1&brch=282&sim=880"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is the Photovoltaic Effect? How does a Solar Cell differ from a Photodiode? (2 Marks)",
        "Define Open Circuit Voltage (Voc) and Short Circuit Current (Isc). (2 Marks)",
        "Define Fill Factor (FF) of a solar cell. What is its ideal maximum value? (2 Marks)",
        "Why is Silicon the most widely used material for commercial solar cells? (2 Marks)"
      ],
      "sixMarks": [
        "Explain solar cell working principle with energy band diagram under light illumination. Define Voc, Isc, Pmax, and Fill Factor. (6 Marks)",
        "Describe experimental setup and procedure to plot I-V and P-V curves of a solar cell. How is maximum power point determined? (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Solar Photovoltaics. Detail quantum absorption, p-n junction charge extraction, I-V/P-V characteristics curves, Fill Factor calculations, efficiency loss factors, and solar panel array design. (10 Marks)"
      ]
    }
  },
  {
    "title": "Experimental Data Analysis",
    "slug": "applied-physics-lab-experimental-data-analysis",
    "order": 9,
    "estimatedHours": 3,
    "difficulty": "Beginner",
    "description": "Master systematic observation log recording, linear regression graph plotting, error bar analysis, result interpretation, and lab viva preparation.",
    "subTopics": [
      "Observation Recording",
      "Graph Plotting",
      "Data Interpretation",
      "Experimental Calculations",
      "Result Analysis",
      "Viva Questions Preparation"
    ],
    "prerequisiteTitles": [
      "Measurement Techniques"
    ],
    "learningObjectives": [
      "Record raw observation data using correct significant figures and units.",
      "Plot best-fit linear regression lines and calculate slope/intercept with error margins.",
      "Prepare for laboratory viva-voce examinations across all physics experiments."
    ],
    "notes": [
      {
        "title": "Experiment 9: Data Processing, Graph Analysis & Viva Review",
        "content": "EXPERIMENTAL LAB MANUAL\n\nAIM:\nTo master experimental data reduction, linear regression analysis, slope/intercept calculations, error propagation, and comprehensive viva-voce preparation.\n\nGUIDELINES FOR GRAPH PLOTTING:\n1. Axis Selection: Independent variable on X-axis, dependent variable on Y-axis.\n2. Scale Selection: Choose simple, uniform scale (1 div = 1, 2, 5 units). Avoid fractions like 1 div = 3 or 7.\n3. Best-Fit Line: Draw smooth line passing centrally through data points such that points are evenly distributed on both sides.\n4. Slope Calculation:\n   Slope m = (Y2 - Y1) / (X2 - X1) using two points ON the best-fit line (not raw observation points).\n\nSTATISTICAL FORMULAE:\n1. Linear Regression Slope:\n   m = (N * Sum(x y) - Sum(x) * Sum(y)) / (N * Sum(x^2) - (Sum x)^2)\n2. Standard Deviation:\n   sigma = sqrt( Sum(x_i - x_mean)^2 / (N - 1) )\n3. Significant Figures:\n   - Non-zero digits are significant.\n   - Zeros between non-zero digits are significant.\n   - Leading zeros are never significant.\n\nCOMPREHENSIVE LAB VIVA VOCE CHEATSHEET:\n- Q1: Why do we take multiple observations? -> To minimize random errors.\n- Q2: Difference between Precision and Accuracy? -> Accuracy is closeness to true value; precision is reproducibility.\n- Q3: What is monochromatic light? -> Light consisting of a single wavelength/frequency.\n- Q4: What is NA of optical fiber? -> Light-gathering capability of fiber = sin(acceptance angle).\n- Q5: Why does bandgap decrease with temperature? -> Lattice thermal expansion and increased electron-phonon interaction."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "An Introduction to Error Analysis",
        "author": "John R. Taylor",
        "url": "https://faculty.kfupm.edu.sa/phys/aanaqvi/Taylor-An%20Introduction%20to%20Error%20Analysis.pdf"
      },
      {
        "title": "Data Reduction & Error Analysis for Physical Sciences",
        "author": "Philip R. Bevington",
        "url": "https://faculty.kfupm.edu.sa/phys/aanaqvi/Data%20Reduction%20and%20Error%20Analysis%20-Bevington.pdf"
      }
    ],
    "practiceLinks": [
      {
        "title": "Virtual Labs IIT - Data Analysis",
        "url": "https://vlab.amrita.edu/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State rules for determining significant figures in experimental calculations. (2 Marks)",
        "Why must slope points be chosen from the best-fit line rather than observation points? (2 Marks)",
        "Define Standard Deviation and Standard Error of the mean. (2 Marks)"
      ],
      "sixMarks": [
        "Explain linear regression slope calculation formula m = (N Sum(xy) - Sum(x)Sum(y)) / (N Sum(x^2) - (Sum x)^2) with a worked numerical example. (6 Marks)",
        "Detail the standard structure of an Engineering Physics Lab Report (Aim, Apparatus, Theory, Circuit/Ray Diagram, Observations, Calculations, Result, Sources of Error). (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive review of Physics Laboratory Methodology. Detail measurement error handling, instrument calibration, graphical analysis, linear regression modeling, significant figure propagation, and top 20 core viva questions with answers. (10 Marks)"
      ]
    }
  }
];
