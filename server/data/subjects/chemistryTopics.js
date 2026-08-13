module.exports = [
  {
    "title": "Introduction to Engineering Chemistry",
    "slug": "engineering-chemistry-introduction",
    "order": 1,
    "estimatedHours": 3,
    "difficulty": "Beginner",
    "description": "Understand foundational engineering chemistry: Importance in modern technology, branches of chemistry (Physical, Organic, Inorganic, Analytical, Materials), engineering applications, Green Chemistry basics, and sustainable chemical processes.",
    "subTopics": [
      "Introduction to Engineering Chemistry",
      "Importance of Chemistry in Engineering",
      "Branches of Chemistry",
      "Applications in Engineering",
      "Green Chemistry Basics",
      "Sustainable Chemical Processes"
    ],
    "prerequisiteTitles": [],
    "learningObjectives": [
      "Understand the vital role of chemical principles in material selection, energy conversion, and environmental sustainability across engineering disciplines.",
      "Identify the 12 Principles of Green Chemistry (Waste prevention, Atom economy, Less hazardous chemical syntheses, Energy efficiency).",
      "Analyze sustainable industrial chemical process design aimed at minimizing carbon footprint."
    ],
    "notes": [
      {
        "title": "12 Principles of Green Chemistry & Industrial Engineering Applications",
        "content": "INTRODUCTION TO ENGINEERING CHEMISTRY & GREEN CHEMISTRY\n\n1. Role of Chemistry in Engineering:\n   - Civil Engineering: Setting & hardening of Cement, Corrosion protection of rebar, Concrete admixtures.\n   - Electrical & Electronics: Semiconductor silicon wafer fabrication, Lithography, Dielectric insulating oils, Battery electrochemistry.\n   - Mechanical Engineering: High-performance Lubricants, Coolants, Combustion chemistry, Metallurgy alloys.\n\n2. Core Principles of Green Chemistry (Anastas & Warner):\n   - Prevention: Better to prevent waste than to treat waste after it has been created.\n   - Atom Economy: Synthetic methods should maximize incorporation of all materials into final product.\n   - Design for Energy Efficiency: Synthetic methods should be conducted at ambient temperature and pressure wherever possible."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Engineering Chemistry",
        "author": "Jain & Jain"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Chemistry in Engineering",
        "url": "https://www.geeksforgeeks.org/engineering-chemistry/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State 4 key applications of Chemistry in Computer Science and Electronics. (2 Marks)",
        "State 3 core principles of Green Chemistry. (2 Marks)",
        "What is Atom Economy in chemical processes? (2 Marks)"
      ],
      "sixMarks": [
        "Explain the significance of Engineering Chemistry across Civil, Mechanical, Electrical, and Computer Engineering disciplines. (6 Marks)",
        "Describe the 12 Principles of Green Chemistry and explain how sustainable chemical processes reduce environmental impact. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Sustainable Chemical Engineering. Detail life-cycle assessment (LCA) of chemical products, zero-emission industrial design, atom economy calculations ($% \text{Atom Economy} = \frac{\text{MW of desired product}}{sum \text{MW of reactants}} \times 100$), and bio-based feedstocks. (10 Marks)"
      ]
    }
  },
  {
    "title": "Atomic Structure and Chemical Bonding",
    "slug": "engineering-chemistry-atomic-structure-and-chemical-bonding",
    "order": 2,
    "estimatedHours": 5,
    "difficulty": "Beginner",
    "description": "Master subatomic theory & bonding: Atomic models (Bohr, Quantum mechanical model), Quantum numbers ($n, l, m_l, m_s$), Electronic configuration (Aufbau, Pauli, Hund's rules), Periodic Table trends, Chemical Bonding (Ionic, Covalent, Metallic, Hydrogen), Molecular Orbital Theory (MOT for $\text{O}_2, \text{N}_2$), and Hybridization ($sp, sp^2, sp^3, sp^3d, sp^3d^2$).",
    "subTopics": [
      "Structure of Atom",
      "Atomic Models",
      "Quantum Numbers",
      "Electronic Configuration",
      "Periodic Table",
      "Chemical Bonding (Ionic, Covalent, Metallic, Hydrogen Bond)",
      "Molecular Orbital Theory",
      "Hybridization"
    ],
    "prerequisiteTitles": [
      "Introduction to Engineering Chemistry"
    ],
    "learningObjectives": [
      "Apply Quantum Numbers to write ground state Electronic Configurations using Aufbau Principle and Hund's Rule.",
      "Construct Molecular Orbital Energy Level Diagrams for homonuclear diatomic molecules ($\text{N}_2, \text{O}_2$) and calculate Bond Order ($\text{BO} = \frac{N_b - N_a}{2}$).",
      "Predict molecular geometry using Hybridization theory ($sp^3$ tetrahedral $\text{CH}_4$, $sp^2$ trigonal planar $\text{BF}_3$, $sp$ linear $\text{BeCl}_2$)."
    ],
    "notes": [
      {
        "title": "Molecular Orbital Theory & Bond Order Math",
        "content": "MOLECULAR ORBITAL THEORY & HYBRIDIZATION\n\n1. Molecular Orbital Theory (MOT) & Bond Order Formula:\n   - Bond Order $\text{BO} = \frac{N_b - N_a}{2}$ where $N_b$ is bonding electrons and $N_a$ is antibonding electrons.\n   - If $\text{BO} > 0$, molecule exists and is stable. Higher $\text{BO} implies$ shorter bond length, higher bond energy!\n   - Paramagnetic if unpaired electrons present; Diamagnetic if all electrons paired.\n\n2. MO Configuration of Oxygen ($\text{O}_2$, 16 electrons):\n   $sigma 1s^2  sigma^* 1s^2  sigma 2s^2  sigma^* 2s^2  sigma 2p_z^2  (pi 2p_x^2 = pi 2p_y^2)  (pi^* 2p_x^1 = pi^* 2p_y^1)$\n   - $N_b = 10, N_a = 6 implies \text{BO} = \frac{10-6}{2} = 2$. Unpaired electrons in $pi^*$ orbitals $implies$ Paramagnetic!"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Concise Inorganic Chemistry",
        "author": "J.D. Lee"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Chemical Bonding",
        "url": "https://www.geeksforgeeks.org/chemical-bonding/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State 4 Quantum Numbers ($n, l, m_l, m_s$) and their physical significance. (2 Marks)",
        "Write formula for Bond Order in Molecular Orbital Theory. (2 Marks)",
        "Explain Hydrogen Bonding and distinguish Intermolecular vs Intramolecular H-bonding. (2 Marks)"
      ],
      "sixMarks": [
        "Draw MO Energy Level Diagram for $\text{O}_2$ molecule. Calculate its Bond Order and explain its paramagnetic nature. (6 Marks)",
        "Explain $sp^3, sp^2,$ and $sp$ Hybridization with structure examples ($\text{CH}_4, \text{C}_2\text{H}_4, \text{C}_2\text{H}_2$). (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Chemical Bonding & Band Theory of Solids. Detail MOT vs Valence Bond Theory (VBT), Metallic Bonding Band Model (Conductors, Semiconductors, Insulators), Crystal Field Theory (CFT) octahedral splitting, and VSEPR molecular geometry predictions. (10 Marks)"
      ]
    }
  },
  {
    "title": "Water Technology",
    "slug": "engineering-chemistry-water-technology",
    "order": 3,
    "estimatedHours": 6,
    "difficulty": "Intermediate",
    "description": "Master industrial water treatment: Water quality parameters, Hardness of water (Temporary vs Permanent), Units of hardness (ppm, mg/L, °Clark, °French), EDTA complexometric estimation, Water Softening (Lime-Soda process, Zeolite / Permutit process, Demineralization Ion Exchange process), Reverse Osmosis (RO) desalination, Boiler feed water standards, and Boiler Troubles (Scale & Sludge formation, Caustic Embrittlement, Boiler Corrosion, Priming & Foaming).",
    "subTopics": [
      "Sources of Water",
      "Water Quality Parameters",
      "Hardness of Water",
      "Units of Hardness",
      "Determination of Hardness",
      "Water Softening Methods (Lime-Soda Process, Zeolite Process, Ion Exchange Process)",
      "Reverse Osmosis",
      "Desalination",
      "Boiler Feed Water",
      "Boiler Troubles (Scale Formation, Corrosion, Priming and Foaming)"
    ],
    "prerequisiteTitles": [
      "Introduction to Engineering Chemistry"
    ],
    "learningObjectives": [
      "Calculate total, temporary, and permanent hardness in ppm / $\text{mg/L}$ of $\text{CaCO}_3$ equivalents using EDTA titration data.",
      "Understand Zeolite Softening Reaction: $\text{Na}_2\text{Ze} + \text{Ca}^{2+} \to \text{CaZe} + 2\text{Na}^+$ and regeneration with $10%\text{ NaCl}$.",
      "Differentiate Demineralization (Ion Exchange Cation $R\text{-H} + \text{M}^+ \to R\text{-M} + \text{H}^+$ & Anion $R'\text{-OH} + X^- \to R'\text{-}X + \text{OH}^-$) vs Reverse Osmosis (RO)."
    ],
    "notes": [
      {
        "title": "EDTA Hardness Calculations & Water Softening Reactions",
        "content": "WATER TECHNOLOGY & SOFTENING PROCESSES\n\n1. $\text{CaCO}_3$ Equivalent Conversion Formula:\n   $\text{Equivalent of }\text{CaCO}_3 = \frac{\text{Mass of hardness causing salt (mg/L)} \times 100}{\text{Molecular Weight of salt}}$\n   - Hardness Conversion Factor: $1\text{ ppm} = 1\text{ mg/L} = 0.07^circ\text{Clark} = 0.10^circ\text{French}$.\n\n2. Ion Exchange (Demineralization) Process Reactions:\n   - Cation Exchanger (Resin-$H^+$): $2R\text{-H} + \text{Ca}^{2+} \to R_2\text{Ca} + 2\text{H}^+$\n   - Anion Exchanger (Resin-$OH^-$): $R'\text{-OH} + \text{Cl}^- \to R'\text{-Cl} + \text{OH}^-$\n   - Neutralization: $\text{H}^+ + \text{OH}^- \to \text{H}_2\text{O}$ (Produces 100% pure demineralized water!)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Engineering Chemistry",
        "author": "Jain & Jain"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Hardness of Water",
        "url": "https://www.geeksforgeeks.org/hardness-of-water/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define Temporary Hardness and Permanent Hardness of water. (2 Marks)",
        "State relation between 1 ppm, 1 mg/L, $1^circ\text{Clark}$, and $1^circ\text{French}$. (2 Marks)",
        "Differentiate between Scales and Sludges in boilers. (2 Marks)"
      ],
      "sixMarks": [
        "Explain EDTA titration method for determining Total, Temporary, and Permanent Hardness of water with chemical equations. (6 Marks)",
        "Describe Zeolite (Permutit) process of water softening with schematic diagram, chemical reactions, and $10%\text{ NaCl}$ regeneration. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Industrial Boiler Feed Water & Desalination. Detail Ion Exchange Demineralization plant, Reverse Osmosis (RO) semi-permeable membrane mechanics, Boiler troubles (Caustic Embrittlement, Priming & Foaming, Boiler Corrosion), and numerical calculations of hardness equivalents. (10 Marks)"
      ]
    }
  },
  {
    "title": "Electrochemistry",
    "slug": "engineering-chemistry-electrochemistry",
    "order": 4,
    "estimatedHours": 6,
    "difficulty": "Intermediate",
    "description": "Master Electrochemical systems: Galvanic cells vs Electrolytic cells, Standard Electrode Potential, Nernst Equation ($E = E^circ - \frac{0.0591}{n} log Q$), Commercial Batteries (Dry cell, Lead-Acid storage, Lithium-Ion LiCoO2/Graphite), Fuel Cells ($H_2-O_2$ PEM fuel cell), Corrosion chemistry (Dry electrochemical vs Wet electrochemical corrosion), and Corrosion Prevention (Galvanization, Cathodic Protection - Sacrificial Anode & Impressed Current).",
    "subTopics": [
      "Introduction to Electrochemistry",
      "Electrochemical Cells",
      "Galvanic Cells",
      "Electrolytic Cells",
      "Electrode Potential",
      "Nernst Equation",
      "Batteries (Dry Cell, Lead Acid Battery, Lithium-Ion Battery)",
      "Fuel Cells",
      "Corrosion (Types of Corrosion, Corrosion Prevention)"
    ],
    "prerequisiteTitles": [
      "Atomic Structure and Chemical Bonding"
    ],
    "learningObjectives": [
      "Calculate Cell Potential $E_{cell}$ using Nernst Equation at $25^circ\text{C}$: $E_{cell} = E^circ_{cell} - \frac{0.0591}{n} log \frac{[\text{Products}]}{[\text{Reactants}]}$.",
      "Understand Lead-Acid Battery charging & discharging equations and Lithium-Ion Battery intercalation chemistry.",
      "Apply Corrosion Prevention techniques: Sacrificial Anode Cathodic Protection (attaching Mg/Zn blocks to steel pipelines)."
    ],
    "notes": [
      {
        "title": "Nernst Equation & Electrochemical Corrosion Mechanics",
        "content": "ELECTROCHEMISTRY & CORROSION PREVENTION\n\n1. Nernst Equation for Single Electrode Potential:\n   $E = E^circ - \frac{RT}{nF} ln \frac{[\text{Reduced form}]}{[\text{Oxidized form}]}$\n   At $298\text{ K}$ ($25^circ\text{C}$): $E = E^circ - \frac{0.0591}{n} log_{10} \frac{[\text{Red}]}{[\text{Ox}]}$\n\n2. Electrochemical Corrosion (Galvanic Cell Formation):\n   Anode (Oxidation): Metal undergoes dissolution $M \to M^{n+} + n e^-$\n   Cathode (Reduction):\n   - In acidic medium: $2\text{H}^+ + 2 e^- \to \text{H}_2 \text{ (gas)}$\n   - In neutral/alkaline aerated medium: $\text{O}_2 + 2\text{H}_2\text{O} + 4 e^- \to 4\text{OH}^-$\n\n3. Sacrificial Anode Cathodic Protection:\n   The metallic structure to be protected (e.g. steel pipeline) is connected by a wire to a MORE ACTIVE metal (Mg, Zn, Al). The sacrificial block acts as Anode and corrodes, keeping steel structure as Cathode!"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Modern Electrochemistry",
        "author": "J.O'M. Bockris, A.K.N. Reddy"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Electrochemistry",
        "url": "https://www.geeksforgeeks.org/electrochemistry/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State Nernst Equation for cell potential at $25^circ\text{C}$. (2 Marks)",
        "Differentiate between Galvanic cell and Electrolytic cell. (2 Marks)",
        "What is Sacrificial Anode Protection in corrosion engineering? (2 Marks)"
      ],
      "sixMarks": [
        "Calculate EMF of the cell $\text{Zn} mid \text{Zn}^{2+}(0.01\text{M}) parallel \text{Cu}^{2+}(0.1\text{M}) mid \text{Cu}$ at $25^circ\text{C}$ given $E^circ_{\text{Zn}^{2+}/\text{Zn}} = -0.76\text{V}, E^circ_{\text{Cu}^{2+}/\text{Cu}} = +0.34\text{V}$. (6 Marks)",
        "Describe construction, working, and electrode chemical reactions during charging and discharging of Lead-Acid Storage Battery. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Energy Storage & Corrosion Science. Detail Lithium-ion battery intercalated cathode/anode reactions, Hydrogen-Oxygen PEM Fuel Cell architecture ($E^circ = 1.23\text{V}$), Electrochemical corrosion theory (Galvanic corrosion, Pitting corrosion, Differential aeration corrosion), and Impressed Current Cathodic Protection (ICCP). (10 Marks)"
      ]
    }
  },
  {
    "title": "Fuels and Energy",
    "slug": "engineering-chemistry-fuels-and-energy",
    "order": 5,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master fuel classification & energetics: Calorific value definitions (HCV / Gross Calorific Value, LCV / Net Calorific Value, Dulong's formula, Bomb Calorimeter determination), Solid fuels (Coal proximate & ultimate analysis), Liquid fuels (Petroleum refining, Knocking, Octane Number, Cetane Number, Synthetic petrol Fischer-Tropsch process), Gaseous fuels (LPG, CNG, Water gas, Producer gas), Hydrogen Energy, Biofuels (Biodiesel transesterification), and Alternative Energy.",
    "subTopics": [
      "Classification of Fuels",
      "Calorific Value",
      "Solid Fuels",
      "Liquid Fuels",
      "Gaseous Fuels",
      "Renewable Energy Sources",
      "Hydrogen Energy",
      "Biofuels",
      "Alternative Energy Technologies"
    ],
    "prerequisiteTitles": [
      "Introduction to Engineering Chemistry"
    ],
    "learningObjectives": [
      "Calculate Gross (HCV) and Net (LCV) Calorific Values using Dulong's Formula: $\text{HCV} = \frac{1}{100} left[ 8080 C + 34500 left(H - \frac{O}{8}\right) + 2240 S \right] \text{ kcal/kg}$.",
      "Understand Bomb Calorimeter experiment for measuring solid/liquid fuel calorific value.",
      "Differentiate Octane Number (Gasoline anti-knock rating) vs Cetane Number (Diesel ignition delay rating)."
    ],
    "notes": [
      {
        "title": "Dulong's Formula & Bomb Calorimeter Math",
        "content": "FUELS ENERGETICS & CALORIFIC VALUE\n\n1. Dulong's Formula for Gross Calorific Value (HCV):\n   $\text{HCV} = \frac{1}{100} left[ 8080 C + 34500 left( H - \frac{O}{8} \right) + 2240 S \right] \text{ kcal/kg}$\n   - Net Calorific Value ($\text{LCV}$): $\text{LCV} = \text{HCV} - (0.09 H \times 587) \text{ kcal/kg}$ where $587\text{ kcal/kg}$ is latent heat of steam.\n\n2. Bomb Calorimeter Equation:\n   $\text{HCV} = \frac{(W + w) \times (T_2 - T_1)}{m} \text{ cal/g}$\n   - $W$: Mass of water in calorimeter (g).\n   - $w$: Water equivalent of calorimeter apparatus (g).\n   - $T_2 - T_1$: Temperature rise of water ($^circ\text{C}$).\n   - $m$: Mass of fuel sample burned (g)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Fuels and Combustion",
        "author": "Samir Sarkar"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Fuels & Energy Chemistry",
        "url": "https://www.geeksforgeeks.org/fuels-and-their-classification/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define Gross (HCV) and Net (LCV) Calorific Value of a fuel. (2 Marks)",
        "What is Octane Number and Cetane Number? (2 Marks)",
        "What is Transesterification in Biodiesel production? (2 Marks)"
      ],
      "sixMarks": [
        "Describe Bomb Calorimeter experiment for determining HCV of a solid fuel with labeled diagram, formula, and corrections. (6 Marks)",
        "Calculate HCV and LCV of a coal sample containing $85% C, 6% H, 4% O, 2% S, 3%$ Ash using Dulong's formula. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Alternative Energy & Fuel Technology. Detail Coal Proximate Analysis (Moisture, Volatile matter, Ash, Fixed carbon), Petroleum Fractional Distillation, Fischer-Tropsch Synthetic Petrol synthesis, Hydrogen fuel storage (Metal Hydrides), and Compressed Natural Gas (CNG) vs Liquefied Petroleum Gas (LPG). (10 Marks)"
      ]
    }
  },
  {
    "title": "Polymers",
    "slug": "engineering-chemistry-polymers",
    "order": 6,
    "estimatedHours": 6,
    "difficulty": "Intermediate",
    "description": "Master Macromolecular Chemistry: Polymer classification (Origin, Structure, Tacticity), Polymerization mechanisms (Addition / Chain-growth vs Condensation / Step-growth), Thermoplastics vs Thermosetting Plastics, Engineering Plastics (Nylon-6,6, Teflon, Polycarbonate, Bakelite / Phenol-Formaldehyde resin, Kevlar), Biodegradable Polymers (PLA, PHBV), Conducting Polymers (Polyaniline, Polyacetylene, Doping mechanism), and Elastomers (Vulcanization of Natural Rubber).",
    "subTopics": [
      "Introduction to Polymers",
      "Classification of Polymers",
      "Polymerization (Addition Polymerization, Condensation Polymerization)",
      "Thermoplastics",
      "Thermosetting Plastics",
      "Engineering Plastics",
      "Biodegradable Polymers",
      "Conducting Polymers",
      "Polymer Applications"
    ],
    "prerequisiteTitles": [
      "Atomic Structure and Chemical Bonding"
    ],
    "learningObjectives": [
      "Differentiate Addition Polymerization (No byproduct, unsaturated monomer, chain growth) vs Condensation Polymerization (Elimination of small molecules $\text{H}_2\text{O}, \text{HCl}$, step growth).",
      "Synthesize Bakelite (Phenol + Formaldehyde) and Nylon-6,6 (Hexamethylenediamine + Adipic acid).",
      "Understand Conducting Polymers mechanism: Conjugated $pi$-electron backbone $p$-doped with $\text{I}_2$ or $n$-doped with $\text{Na}$ to achieve metallic conductivity."
    ],
    "notes": [
      {
        "title": "Synthesis Reactions for Nylon-6,6, Bakelite & Conducting Polymers",
        "content": "POLYMER CHEMISTRY & SYNTHESIS REACTION MECHANISMS\n\n1. Nylon-6,6 Condensation Polymerization:\n   $n  \text{H}_2\text{N-(CH}_2)_6\text{-NH}_2  +  n  \text{HOOC-(CH}_2)_4\text{-COOH}  longrightarrow  Big[ \text{-NH-(CH}_2)_6\text{-NH-CO-(CH}_2)_4\text{-CO-} Big]_n + 2n \text{H}_2\text{O}$\n\n2. Vulcanization of Natural Rubber:\n   Heating natural rubber (cis-1,4-polyisoprene) with $3\text{-}5%$ Sulfur creates cross-linking $-\text{S-S}-$ bridges between adjacent polymer chains, transforming soft tacky rubber into tough, elastic, non-sticky vulcanized rubber!\n\n3. Conducting Polymers (Polyaniline / Polyacetylene):\n   Conjugated double-single bond backbone ($-\text{CH}=\text{CH}-\text{CH}=\text{CH}-$) allows electron delocalization. Doping creates positive (polaron) or negative charge carriers, increasing conductivity up to $10^5 \text{ S/cm}$!"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Textbook of Polymer Science",
        "author": "Fred W. Billmeyer"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Polymer Chemistry",
        "url": "https://www.geeksforgeeks.org/polymers/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Compare Thermoplastics and Thermosetting Plastics on 4 parameters. (2 Marks)",
        "What is Vulcanization of Rubber and why is Sulfur added? (2 Marks)",
        "Name 2 Biodegradable Polymers and their applications. (2 Marks)"
      ],
      "sixMarks": [
        "Explain synthesis, properties, and engineering applications of: (a) Bakelite (Phenol-Formaldehyde resin), (b) Nylon-6,6. (6 Marks)",
        "Describe Conducting Polymers detailing conjugated structure, $p$-doping and $n$-doping mechanisms, and applications in OLED displays. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on High-Performance Engineering Polymers. Detail Glass Transition Temperature ($T_g$) & Melting Point ($T_m$), Tacticity (Isotactic, Syndiotactic, Atactic), Polycarbonate bulletproof glass, Kevlar synthesis, and PLA biodegradable medical sutures. (10 Marks)"
      ]
    }
  },
  {
    "title": "Materials Chemistry",
    "slug": "engineering-chemistry-materials-chemistry",
    "order": 7,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Explore advanced functional materials: Nanomaterials (Top-down vs Bottom-up synthesis, Sol-Gel, Chemical Vapor Deposition CVD), Carbon Nanotubes (SWCNTs, MWCNTs), Graphene properties, Ceramics (Alumina, Zirconia, Refractories), Composite Materials (FRP Fiber Reinforced Plastics, Matrix & Reinforcement roles), Smart Materials (Shape Memory Alloys NiTi Nitinol, Piezoelectric materials), Semiconductor Materials (Silicon, GaAs), and Engineering applications.",
    "subTopics": [
      "Nanomaterials",
      "Carbon Nanotubes",
      "Graphene",
      "Ceramics",
      "Composite Materials",
      "Smart Materials",
      "Semiconductor Materials",
      "Applications in Engineering"
    ],
    "prerequisiteTitles": [
      "Atomic Structure and Chemical Bonding"
    ],
    "learningObjectives": [
      "Understand Nanomaterials Quantum Confinement Effect (high surface-area-to-volume ratio at 1-100nm scale).",
      "Compare Carbon Nanotubes (CNTs: high tensile strength $sim 60\text{ GPa}$, ballistic electron transport) and 2D Graphene.",
      "Understand Smart Materials: Shape Memory Alloys (Nitinol SMA Martensite-Austenite phase transformation) and Piezoelectric $\text{BaTiO}_3$ sensors."
    ],
    "notes": [
      {
        "title": "Nanomaterials Sol-Gel Synthesis & Composite Materials Classification",
        "content": "MATERIALS CHEMISTRY & ADVANCED NANOMATERIALS\n\n1. Sol-Gel Synthesis of Nanomaterials (Bottom-Up):\n   - Sol Formation: Hydrolysis of metal alkoxide precursors $M(\text{OR})_n + \text{H}_2\text{O} \to M(\text{OH})(\text{OR})_{n-1} + \text{ROH}$ forms colloidal suspension (Sol).\n   - Gelation: Polycondensation forms 3D continuous network (Gel).\n   - Drying & Calcination: Supercritical drying produces Aerogel; Xerogel calcination yields uniform metal oxide nanoparticles ($\text{TiO}_2, \text{SiO}_2$).\n\n2. Shape Memory Alloys (Nitinol - NiTi):\n   Undergoes reversible solid-state phase transformation between low-temperature Martensite phase (easily deformed) and high-temperature Austenite phase (remembers original shape upon heating above $A_f$ temperature!)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Materials Science and Engineering: An Introduction",
        "author": "William D. Callister"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Nanomaterials Overview",
        "url": "https://www.geeksforgeeks.org/nanomaterials/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is the Quantum Confinement Effect in Nanomaterials? (2 Marks)",
        "Distinguish Single-Walled CNTs (SWCNTs) and Multi-Walled CNTs (MWCNTs). (2 Marks)",
        "What is a Shape Memory Alloy (SMA)? Give an example. (2 Marks)"
      ],
      "sixMarks": [
        "Describe Sol-Gel method for synthesis of metal oxide nanoparticles with step-by-step reaction flow. (6 Marks)",
        "Explain Composite Materials detailing Matrix phase, Reinforcement phase, Fiber-Reinforced Plastics (FRP), and aerospace applications. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Graphene & Carbon Nanomaterials. Detail Chemical Vapor Deposition (CVD) synthesis of Graphene sheets, electronic band structure (Dirac cones), mechanical properties ($130\text{ GPa}$ ultimate strength), Piezoelectric ceramics ($\text{PZT}$), and Advanced Engineering Refractory Ceramics ($\text{SiC}, \text{ZrO}_2$). (10 Marks)"
      ]
    }
  },
  {
    "title": "Surface Chemistry",
    "slug": "engineering-chemistry-surface-chemistry",
    "order": 8,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master interface phenomena: Adsorption vs Absorption, Types of Adsorption (Physisorption vs Chemisorption), Adsorption Isotherms (Freundlich $\frac{x}{m} = k P^{1/n}$, Langmuir $\frac{x}{m} = \frac{a P}{1 + b P}$), Catalysis (Homogeneous vs Heterogeneous, Enzyme catalysis Michaelis-Menten kinetics), Colloids (Lyophilic vs Lyophobic, Tyndall effect, Electrophoresis, Dialysis), Emulsions (Oil-in-Water O/W, Water-in-Oil W/O), and Industrial applications.",
    "subTopics": [
      "Adsorption",
      "Absorption",
      "Types of Adsorption",
      "Catalysis",
      "Homogeneous Catalysis",
      "Heterogeneous Catalysis",
      "Colloids",
      "Emulsions",
      "Industrial Applications"
    ],
    "prerequisiteTitles": [
      "Introduction to Engineering Chemistry"
    ],
    "learningObjectives": [
      "Differentiate Physisorption (van der Waals forces, reversible, non-specific, low $Delta H_{ads}$) and Chemisorption (chemical bonds, irreversible, specific, high $Delta H_{ads}$).",
      "Derive Langmuir Adsorption Isotherm equation: $\theta = \frac{K P}{1 + K P}$.",
      "Understand Heterogeneous Catalysis mechanism (Adsorption of reactants $\to$ Activated Complex $\to$ Desorption of products)."
    ],
    "notes": [
      {
        "title": "Physisorption vs Chemisorption & Langmuir Isotherm Derivation",
        "content": "SURFACE CHEMISTRY & ADSORPTION ISOTHERMS\n\n1. Physisorption vs Chemisorption Comparison Table:\n-------------------------------------------------------------------------------------------------\nProperty           | Physical Adsorption (Physisorption) | Chemical Adsorption (Chemisorption)\n-------------------------------------------------------------------------------------------------\nAttraction Force   | Weak van der Waals forces           | Strong Chemical covalent/ionic bonds\nEnthalpy $Delta H$| Low ($20 - 40 \text{ kJ/mol}$)       | High ($80 - 400 \text{ kJ/mol}$)\nReversibility      | Reversible                           | Irreversible\nSpecificity        | Non-specific                        | Highly specific\nLayer Type         | Multimolecular layers                | Monomolecular layer\n-------------------------------------------------------------------------------------------------\n\n2. Langmuir Adsorption Isotherm Derivation:\n   Rate of Adsorption $r_a = k_a P (1 - \theta)$. Rate of Desorption $r_d = k_d \theta$.\n   At equilibrium $r_a = r_d implies k_a P (1 - \theta) = k_d \theta implies \theta = \frac{b P}{1 + b P}$ where $b = k_a / k_d$."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Physical Chemistry",
        "author": "P.W. Atkins"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Surface Chemistry",
        "url": "https://www.geeksforgeeks.org/surface-chemistry/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between Adsorption and Absorption. (2 Marks)",
        "Compare Physisorption and Chemisorption on 4 parameters. (2 Marks)",
        "State Freundlich Adsorption Isotherm formula. (2 Marks)"
      ],
      "sixMarks": [
        "Derive Langmuir Adsorption Isotherm equation $\frac{x}{m} = \frac{a P}{1 + b P}$ stating its assumptions and low/high pressure limiting cases. (6 Marks)",
        "Explain Heterogeneous Catalysis mechanism (Adsorption Theory) using industrial Haber ammonia synthesis example ($N_2 + 3H_2 \to 2NH_3$ over Fe catalyst). (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Colloids & Industrial Emulsions. Detail Preparation of Colloids (Bredig's Arc method, Peptization), Purification by Dialysis, Optical & Electrical properties (Tyndall Effect, Zeta Potential, Electrophoresis), Coagulation (Hardy-Schulze Rule), and Emulsion stabilizers. (10 Marks)"
      ]
    }
  },
  {
    "title": "Environmental Chemistry",
    "slug": "engineering-chemistry-environmental-chemistry",
    "order": 9,
    "estimatedHours": 5,
    "difficulty": "Beginner",
    "description": "Master environmental science & pollution control: Air pollution ($\text{SO}_x, \text{NO}_x$, Photochemical Smog, Acid Rain), Water pollution (BOD Biochemical Oxygen Demand, COD Chemical Oxygen Demand, Eutrophication), Soil pollution, Noise pollution, Greenhouse Effect & Global Warming ($\text{CO}_2, \text{CH}_4$), Ozone Layer Depletion (CFCs mechanism $\text{Cl}^\bullet + \text{O}_3 \to \text{ClO}^\bullet + \text{O}_2$), Solid Waste Management, Recycling, and Green Chemistry Principles.",
    "subTopics": [
      "Environmental Pollution",
      "Air Pollution",
      "Water Pollution",
      "Soil Pollution",
      "Noise Pollution",
      "Greenhouse Effect",
      "Ozone Layer Depletion",
      "Waste Management",
      "Recycling",
      "Green Chemistry Principles"
    ],
    "prerequisiteTitles": [
      "Introduction to Engineering Chemistry"
    ],
    "learningObjectives": [
      "Differentiate BOD (Biochemical Oxygen Demand - 5 days $20^circ\text{C}$ microbial decomposition) and COD (Chemical Oxygen Demand - total oxidation via $\text{K}_2\text{Cr}_2\text{O}_7$). Note: $\text{COD} > \text{BOD}$ always!",
      "Understand Photochemical Smog formation (NO2 + UV $\to$ NO + O; O + O2 $\to$ O3; O3 + Hydrocarbons $\to$ PAN Peroxyacetyl Nitrate).",
      "Understand Ozone Depletion catalytic cycle caused by Chlorofluorocarbons (CFCs / Freons)."
    ],
    "notes": [
      {
        "title": "BOD vs COD Determination & Ozone Depletion Free Radical Mechanism",
        "content": "ENVIRONMENTAL CHEMISTRY & POLLUTION METRICS\n\n1. BOD vs COD Comparison:\n   - BOD (Biochemical Oxygen Demand): Amount of dissolved oxygen required by microorganisms to biologically decompose organic matter in water over 5 days at $20^circ\text{C}$.\n   - COD (Chemical Oxygen Demand): Amount of oxygen required to chemically oxidize BOTH biodegradable and non-biodegradable organic matter using strong oxidizing agent ($\text{K}_2\text{Cr}_2\text{O}_7$ in $\text{H}_2\text{SO}_4$).\n   - $\text{COD} > \text{BOD}$ because chemical oxidation destroys refractory non-biodegradable compounds!\n\n2. CFC Ozone Layer Depletion Radical Mechanism:\n   - Photolysis: $\text{CF}_2\text{Cl}_2 \to \text{CF}_2\text{Cl}^\bullet + \text{Cl}^\bullet$ (under UV light)\n   - Destruction Step 1: $\text{Cl}^\bullet + \text{O}_3 \to \text{ClO}^\bullet + \text{O}_2$\n   - Regeneration Step 2: $\text{ClO}^\bullet + \text{O} \to \text{Cl}^\bullet + \text{O}_2$\n   - Single chlorine free radical $\text{Cl}^\bullet$ can destroy $>100,000$ ozone molecules!"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Environmental Chemistry",
        "author": "A.K. De"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Environmental Pollution",
        "url": "https://www.geeksforgeeks.org/environmental-pollution/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between BOD and COD. Why is COD always greater than BOD? (2 Marks)",
        "State free radical chemical reactions responsible for Ozone Layer depletion by CFCs. (2 Marks)",
        "What is Eutrophication in aquatic ecosystems? (2 Marks)"
      ],
      "sixMarks": [
        "Explain experimental procedure for determining Chemical Oxygen Demand (COD) of a wastewater sample using back-titration with FAS. (6 Marks)",
        "Describe Photochemical Smog detailing primary pollutants, solar UV reactions, formation of PAN (Peroxyacetyl Nitrate), and control methods. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Hazardous Solid Waste Management & Carbon Capture. Detail Industrial E-waste recycling processes, Municipal Solid Waste Incineration vs Pyrolysis, Acid Rain formation ($\text{H}_2\text{SO}_4, \text{HNO}_3$) & impact on infrastructure, and Carbon Capture and Storage (CCS) amine scrubbing technologies. (10 Marks)"
      ]
    }
  },
  {
    "title": "Chemical Kinetics and Thermodynamics",
    "slug": "engineering-chemistry-chemical-kinetics-and-thermodynamics",
    "order": 10,
    "estimatedHours": 6,
    "difficulty": "Intermediate",
    "description": "Master physical chemistry laws: Chemical Thermodynamics (Laws 0th, 1st, 2nd, 3rd), State functions, Enthalpy ($Delta H$), Entropy ($Delta S$), Gibbs Free Energy ($Delta G = Delta H - TDelta S$), Spontaneity criteria ($Delta G < 0$), Chemical Equilibrium ($K_p, K_c$, Le Chatelier's Principle), Chemical Kinetics (Reaction Rate, Order vs Molecularity, Integrated Rate Equations for 0th, 1st, 2nd order), Arrhenius Equation ($k = A e^{-E_a/RT}$), and Catalysts.",
    "subTopics": [
      "Chemical Thermodynamics",
      "Laws of Thermodynamics",
      "Enthalpy",
      "Entropy",
      "Gibbs Free Energy",
      "Chemical Equilibrium",
      "Chemical Kinetics",
      "Rate of Reaction",
      "Factors Affecting Reaction Rate",
      "Catalysts"
    ],
    "prerequisiteTitles": [
      "Introduction to Engineering Chemistry"
    ],
    "learningObjectives": [
      "Determine process spontaneity using Gibbs Free Energy: $Delta G = Delta H - T Delta S$ (Spontaneous if $Delta G < 0$, Equilibrium if $Delta G = 0$).",
      "Solve 1st Order Kinetics problems: $k = \frac{2.303}{t} log_{10} \frac{[A]_0}{[A]_t}$ and Half-life $t_{1/2} = \frac{0.693}{k}$.",
      "Calculate Activation Energy $E_a$ using Arrhenius Equation: $log_{10} \frac{k_2}{k_1} = \frac{E_a}{2.303 R} left( \frac{1}{T_1} - \frac{1}{T_2} \right)$."
    ],
    "notes": [
      {
        "title": "Gibbs Free Energy & First-Order Integrated Rate Equation",
        "content": "THERMODYNAMICS & CHEMICAL KINETICS EQUATIONS\n\n1. Gibbs Free Energy & Spontaneity:\n   $Delta G = Delta H - T Delta S$\n   - $Delta G < 0$: Spontaneous reaction (Exergonic).\n   - $Delta G > 0$: Non-spontaneous reaction (Endergonic).\n   - $Delta G = 0$: System at Chemical Equilibrium ($Delta G^circ = -RT ln K_{eq}$).\n\n2. First-Order Integrated Rate Law & Half-Life:\n   - Rate Law: $-\frac{d[A]}{dt} = k [A]$\n   - Integrated Equation: $k = \frac{2.303}{t} log_{10} left( \frac{[A]_0}{[A]_t} \right)$\n   - Half-life ($t_{1/2}$): $t_{1/2} = \frac{ln 2}{k} = \frac{0.693}{k}$ (Independent of initial concentration $[A]_0$!)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Physical Chemistry",
        "author": "P.W. Atkins"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Chemical Kinetics",
        "url": "https://www.geeksforgeeks.org/chemical-kinetics/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State 2nd Law of Thermodynamics in terms of Entropy $Delta S_{total}$. (2 Marks)",
        "State relation between Gibbs Free Energy change $Delta G^circ$ and Equilibrium Constant $K$. (2 Marks)",
        "Differentiate between Order and Molecularity of a chemical reaction. (2 Marks)"
      ],
      "sixMarks": [
        "Derive 1st order integrated rate equation $k = \frac{2.303}{t} log \frac{a}{a-x}$ and prove half-life $t_{1/2} = \frac{0.693}{k}$. (6 Marks)",
        "A 1st order reaction is $50%$ complete in 20 minutes. Calculate time required for $99.9%$ completion of the reaction. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Chemical Energetics & Kinetics. Detail Arrhenius Equation derivation ($ln k = ln A - E_a/RT$), Activation Energy calculation from two temperatures $T_1, T_2$, Collision Theory vs Transition State Theory (Activated Complex), and Le Chatelier's Principle shift under temperature/pressure/concentration changes. (10 Marks)"
      ]
    }
  },
  {
    "title": "Instrumental Methods of Analysis",
    "slug": "engineering-chemistry-instrumental-methods-of-analysis",
    "order": 11,
    "estimatedHours": 6,
    "difficulty": "Advanced",
    "description": "Master modern analytical instrumentation: Spectroscopy basics (Electromagnetic spectrum transitions), UV-Visible Spectroscopy (Beer-Lambert Law $A = epsilon c l$, chromophores & auxochromes), Infrared (IR) Spectroscopy (Vibrational modes, functional group identification), Chromatography (Principle, TLC, Gas Chromatography GC, High-Performance Liquid Chromatography HPLC), pH Measurement (Glass electrode), and Conductometric titrations.",
    "subTopics": [
      "Spectroscopy Basics",
      "UV-Visible Spectroscopy",
      "Infrared (IR) Spectroscopy",
      "Chromatography",
      "pH Measurement",
      "Conductometry",
      "Applications in Industry"
    ],
    "prerequisiteTitles": [
      "Introduction to Engineering Chemistry"
    ],
    "learningObjectives": [
      "Apply Beer-Lambert Law for concentration determination: $A = log_{10} (I_0 / I) = epsilon cdot c cdot l$.",
      "Identify functional groups from IR absorption bands ($\text{O-H}$ broad $sim 3300\text{ cm}^{-1}$, $\text{C=O}$ strong $sim 1700\text{ cm}^{-1}$).",
      "Understand Conductometric Titrations (Acid-Base titration curves: Strong Acid vs Strong Base $\text{HCl}$ vs $\text{NaOH}$)."
    ],
    "notes": [
      {
        "title": "Beer-Lambert Law Math & IR Functional Group Frequencies",
        "content": "INSTRUMENTAL ANALYSIS & SPECTROSCOPY\n\n1. Beer-Lambert Law Formula:\n   $A = log_{10} left( \frac{I_0}{I} \right) = epsilon cdot c cdot l$\n   - $A$: Absorbance (unitless).\n   - $epsilon$: Molar Absorptivity / Extinction Coefficient ($\text{L}cdot\text{mol}^{-1}cdot\text{cm}^{-1}$).\n   - $c$: Molar concentration ($\text{mol/L}$).\n   - $l$: Path length of cuvette ($\text{cm}$).\n\n2. Characteristic IR Absorption Stretching Frequencies:\n   - $\text{O-H}$ / $\text{N-H}$ stretch: $3200 - 3600 \text{ cm}^{-1}$ (Broad)\n   - $\text{C-H}$ stretch: $2850 - 3000 \text{ cm}^{-1}$\n   - $\text{C=O}$ carbonyl stretch: $1680 - 1750 \text{ cm}^{-1}$ (Strong peak)\n   - $\text{C=C}$ aromatic stretch: $1450 - 1600 \text{ cm}^{-1}$"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Instrumental Methods of Analysis",
        "author": "Willard, Merritt, Dean, Settle"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Spectroscopy Basics",
        "url": "https://www.geeksforgeeks.org/spectroscopy/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State Beer-Lambert Law for UV-Visible absorption spectroscopy. (2 Marks)",
        "What are Chromophores and Auxochromes in UV spectroscopy? (2 Marks)",
        "State characteristic IR stretching frequency for Carbonyl group ($\text{C=O}$). (2 Marks)"
      ],
      "sixMarks": [
        "Derive Beer-Lambert Law equation $A = epsilon c l$ stating its limitations in concentrated solutions. (6 Marks)",
        "Explain Conductometric Titration of Strong Acid ($\text{HCl}$) with Strong Base ($\text{NaOH}$) with conductance curve graph and chemical explanation. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Chromatographic Separation Techniques. Detail Gas Chromatography (GC) & High-Performance Liquid Chromatography (HPLC) instrumentation block diagrams, stationary vs mobile phases, retention time ($R_t$), column efficiency (van Deemter equation), and industrial pharmaceutical applications. (10 Marks)"
      ]
    }
  },
  {
    "title": "Engineering Applications of Chemistry",
    "slug": "engineering-chemistry-engineering-applications",
    "order": 12,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Explore multidisciplinary engineering chemistry: Chemistry in Civil Engineering (Portland Cement composition, setting & hardening reactions, concrete additives), Mechanical Engineering (Lubricant mechanisms - Boundary, Fluid film, Extreme pressure, Viscosity Index), Electrical Engineering (Liquid & Solid dielectrics, transformer oils), Computer Science & Electronics (Semiconductor Silicon refining, Photolithography, PCB etching), and Industrial case studies.",
    "subTopics": [
      "Chemistry in Civil Engineering",
      "Chemistry in Mechanical Engineering",
      "Chemistry in Electrical Engineering",
      "Chemistry in Computer Science",
      "Chemistry in Electronics",
      "Industrial Case Studies"
    ],
    "prerequisiteTitles": [
      "Water Technology",
      "Polymers",
      "Electrochemistry"
    ],
    "learningObjectives": [
      "Understand Cement Chemistry: Setting & Hardening chemical hydration reactions of Bogue's compounds ($C_3S, C_2S, C_3A, C_4AF$).",
      "Classify Lubrication Mechanisms: Fluid Film (Thick film), Boundary (Thin film), and Extreme Pressure (EP additives containing S, P, Cl).",
      "Understand Semiconductor Silicon Fabrication: Quartz reduction $\to$ Trichlorosilane $\to$ Czochralski crystal pulling $\to$ Wafer slicing $\to$ Photolithography."
    ],
    "notes": [
      {
        "title": "Cement Bogue's Compounds & Lubrication Mechanisms",
        "content": "ENGINEERING APPLICATIONS OF CHEMISTRY\n\n1. Portland Cement Bogue's Compounds & Hydration:\n   - Tricalcium Silicate ($C_3S$, $3\text{CaO}cdot\text{SiO}_2$): Responsible for early strength (first 7 days).\n   - Dicalcium Silicate ($C_2S$, $2\text{CaO}cdot\text{SiO}_2$): Responsible for ultimate long-term strength (after 28 days).\n   - Tricalcium Aluminate ($C_3A$, $3\text{CaO}cdot\text{Al}_2\text{O}_3$): Causes quick initial setting. Gypsum ($2-3% \text{ CaSO}_4cdot 2\text{H}_2\text{O}$) added to retard flash set!\n\n2. Lubrication Mechanisms:\n   - Hydrodynamic / Fluid Film: Thick oil film completely separates moving metal surfaces ($h > 1000\text{ AA}$).\n   - Extreme Pressure (EP) Lubrication: High load & temperature break oil film. EP additives (Chlorinated esters, Organophosphates) react with hot metal to form tough metallic chloride/sulfide protective films!"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Engineering Chemistry",
        "author": "Jain & Jain"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Applications of Chemistry",
        "url": "https://www.geeksforgeeks.org/applications-of-chemistry-in-daily-life/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State Bogue's compounds of Portland Cement and their functions. (2 Marks)",
        "Why is Gypsum ($2-3%$) added during cement manufacturing? (2 Marks)",
        "What is Viscosity Index (VI) of a lubricating oil? (2 Marks)"
      ],
      "sixMarks": [
        "Explain chemical reactions involved during Setting and Hardening of Portland Cement over 28 days. (6 Marks)",
        "Describe Extreme Pressure (EP) Lubrication mechanism detailing EP additives and high-load mechanical applications. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Semiconductor & Printed Circuit Board (PCB) Chemical Processing. Detail Czochralski process for single-crystal Silicon ingot growth, Photolithography etching steps (Photoresist application, UV exposure, developer dissolution, wet/dry etching), and Transformer insulating oil breakdown testing. (10 Marks)"
      ]
    }
  },
  {
    "title": "Recent Trends in Chemistry",
    "slug": "engineering-chemistry-recent-trends-in-chemistry",
    "order": 13,
    "estimatedHours": 4,
    "difficulty": "Advanced",
    "description": "Explore frontier innovations: Green Technology (Zero-waste processing), Nanotechnology Applications (Nano-catalysis, Drug delivery, Quantum Dots), Advanced Battery Technologies (Solid-State Lithium, Sodium-Ion, Flow batteries), Hydrogen Economy (Green Hydrogen production via PEM water electrolysis, fuel storage), Sustainable Materials (Bioplastics, Carbon Capture Utilization CCU), and Future Trends.",
    "subTopics": [
      "Green Technology",
      "Nanotechnology Applications",
      "Advanced Battery Technologies",
      "Hydrogen Economy",
      "Sustainable Materials",
      "Future Trends in Chemical Engineering"
    ],
    "prerequisiteTitles": [
      "Materials Chemistry",
      "Electrochemistry",
      "Fuels and Energy"
    ],
    "learningObjectives": [
      "Understand Next-Gen Battery Architectures: Solid-State Batteries replacing flammable liquid organic electrolytes with solid ceramic/polymer electrolytes.",
      "Analyze the Hydrogen Economy: Green Hydrogen (Electrolysis powered by renewables) vs Blue Hydrogen (SMR with Carbon Capture) vs Grey Hydrogen.",
      "Understand Carbon Capture and Utilization (CCU) turning captured $\text{CO}_2$ into synthetic methanol / polycarbonates."
    ],
    "notes": [
      {
        "title": "Green Hydrogen Economy & Solid-State Battery Architecture",
        "content": "RECENT TRENDS & FUTURE CHEMICAL TECHNOLOGIES\n\n1. Hydrogen Economy & Color Spectrum:\n   - Green Hydrogen: Produced by Water Electrolysis ($2\text{H}_2\text{O} \to 2\text{H}_2 + \text{O}_2$) using 100% renewable Solar/Wind electricity. ZERO carbon emissions!\n   - Blue Hydrogen: Produced by Steam Methane Reforming ($\text{CH}_4 + \text{H}_2\text{O} \to \text{CO} + 3\text{H}_2$) coupled with Carbon Capture & Storage (CCS).\n   - Grey Hydrogen: Standard SMR releasing $\text{CO}_2$ directly into atmosphere.\n\n2. Solid-State Lithium Batteries:\n   Replaces liquid organic electrolyte with Solid Electrolyte (e.g. LLZO Garnet Ceramic / Sulfide glass). Eliminates thermal runaway fire risks, enables metallic lithium anode, boosting energy density $> 500\text{ Wh/kg}$!"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Hydrogen Economy: Energy Abundance in a Carbon-Constrained World",
        "author": "Jason Dey"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Green Technology",
        "url": "https://www.geeksforgeeks.org/green-technology/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate Green Hydrogen, Blue Hydrogen, and Grey Hydrogen. (2 Marks)",
        "What is a Solid-State Battery and what is its main safety advantage over Li-ion batteries? (2 Marks)",
        "Define Carbon Capture and Utilization (CCU). (2 Marks)"
      ],
      "sixMarks": [
        "Describe Green Hydrogen production via PEM Water Electrolysis, storage methods (compressed gas vs metal hydrides), and fuel cell utilization. (6 Marks)",
        "Explain Sodium-Ion Battery technology as a low-cost sustainable alternative to Lithium-Ion batteries. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Frontier Chemical Technologies. Detail Quantum Dots applications in QLED displays and photovoltaics, Direct Air Capture (DAC) of atmospheric $\text{CO}_2$, self-healing smart polymers, and bio-refinery production of sustainable aviation fuels (SAF). (10 Marks)"
      ]
    }
  }
];
