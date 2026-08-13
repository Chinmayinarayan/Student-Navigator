module.exports = [
  {
    "title": "Introduction to Wireless and Mobile Networks",
    "slug": "wireless-networks-introduction-to-wireless-and-mobile-networks",
    "order": 1,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Fundamentals of wireless communication and mobile computing: characteristics, evolution, advantages, challenges, applications, and comparison with wired network infrastructure.",
    "subTopics": [
      "Introduction to Wireless Communication",
      "Evolution of Wireless Networks",
      "Wired vs Wireless Networks",
      "Characteristics of Wireless Networks",
      "Advantages and Challenges",
      "Applications",
      "Mobile Computing Overview"
    ],
    "prerequisiteTitles": [],
    "learningObjectives": [
      "Understand the key differences between wired and wireless network architectures.",
      "Identify the core characteristics, advantages, and constraints of mobile computing environments.",
      "Trace the historical evolution of wireless networks from early radio to modern ubiquitous connectivity."
    ],
    "notes": [
      {
        "title": "Wireless Communication & Mobile Computing Foundations",
        "content": "INTRODUCTION TO WIRELESS AND MOBILE NETWORKS\n\n1. Wired vs Wireless Networks Comparison:\n   +-----------------------+-----------------------------------+-----------------------------------+\n   | Characteristic        | Wired Networks                    | Wireless Networks                 |\n   +-----------------------+-----------------------------------+-----------------------------------+\n   | Physical Medium       | Copper (UTP/Coax), Fiber Optics  | Electromagnetic Waves (Air/Vacuum)|\n   | Mobility              | Fixed/Stationary                  | High Mobility & Ubiquitous Access |\n   | Installation Cost     | High cabling & infrastructure cost| Lower initial deployment cost     |\n   | Bit Error Rate (BER)  | Low BER (10^-9 to 10^-12)        | High BER (10^-3 to 10^-6)         |\n   | Security              | Physical security manageable      | Broadcast medium vulnerable       |\n   | Signal Attenuation    | Predictable, guided medium        | Multipath fading, interference    |\n   +-----------------------+-----------------------------------+-----------------------------------+\n\n2. Core Characteristics of Wireless Transmission:\n   - Path Loss: Signal strength decays with distance according to power-law models.\n   - Fading: Rapid fluctuation of signal amplitude caused by multipath interference.\n   - Mobility Management: Dynamic tracking, handoff (handover), and roaming across cell boundaries.\n   - Energy Constraints: Mobile nodes operate on limited battery reserves, requiring power-aware protocols.\n\n3. Mobile Computing Paradigm:\n   Mobile computing extends traditional computing by enabling seamless data access while moving. Key pillars include Location Transparency, Context Awareness, Adaptive Quality of Service (QoS), and Disconnected Operation support."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Wireless Communications & Networks",
        "author": "William Stallings"
      },
      {
        "title": "Mobile Communications",
        "author": "Jochen Schiller"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Wireless Communication Basics",
        "url": "https://www.geeksforgeeks.org/wireless-communication-overview/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between wired and wireless networks on Bit Error Rate (BER), mobility, and security. (2 Marks)",
        "What is context awareness in mobile computing? (2 Marks)",
        "Define multipath fading in wireless signal propagation. (2 Marks)"
      ],
      "sixMarks": [
        "Explain the key characteristics, advantages, and engineering challenges of wireless networks. (6 Marks)",
        "Describe the mobile computing paradigm detailing portability, location transparency, and energy constraints. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Introduction to Wireless and Mobile Networks. Detail the historical evolution of radio communications, comparative analysis of guided vs unguided transmission, key applications across healthcare, smart cities, and industrial automation, and main design trade-offs in mobile system architecture. (10 Marks)"
      ]
    }
  },
  {
    "title": "Wireless Communication Fundamentals",
    "slug": "wireless-networks-wireless-communication-fundamentals",
    "order": 2,
    "estimatedHours": 5,
    "difficulty": "Beginner",
    "description": "Physical layer foundations of wireless transmission: electromagnetic spectrum, frequency bands, signal propagation models, attenuation, and digital modulation techniques (ASK, FSK, PSK, QAM).",
    "subTopics": [
      "Electromagnetic Spectrum",
      "Radio Frequency Communication",
      "Frequency Bands",
      "Signal Propagation",
      "Wireless Transmission Media",
      "Amplitude Modulation",
      "Frequency Modulation",
      "Phase Modulation",
      "ASK",
      "FSK",
      "PSK",
      "QAM"
    ],
    "prerequisiteTitles": [
      "Introduction to Wireless and Mobile Networks"
    ],
    "learningObjectives": [
      "Analyze the electromagnetic spectrum and RF frequency allocations for wireless systems.",
      "Calculate free space path loss (FSPL), signal-to-noise ratio (SNR), and Shannon channel capacity.",
      "Compare digital modulation techniques including ASK, FSK, PSK, and Quadrature Amplitude Modulation (QAM)."
    ],
    "notes": [
      {
        "title": "RF Spectrum, Propagation Models & Digital Modulation",
        "content": "WIRELESS COMMUNICATION FUNDAMENTALS\n\n1. Electromagnetic Spectrum & Frequency Bands:\n   - VLF (3 - 30 kHz): Submarine communication.\n   - LF (30 - 300 kHz) & MF (300 - 3000 kHz): AM Radio broadcasting.\n   - HF (3 - 30 MHz): Shortwave radio, amateur radio.\n   - VHF (30 - 300 MHz): FM Radio, TV broadcast, emergency services.\n   - UHF (300 MHz - 3 GHz): Cellular networks (2G/3G/4G), Wi-Fi (2.4GHz), Bluetooth, GPS.\n   - SHF (3 - 30 GHz): Wi-Fi (5GHz/6GHz), Satellite links, Microwave backhaul.\n   - EHF (30 - 300 GHz): 5G mmWave, Millimeter wave radar.\n\n2. Fundamental Mathematical Formulas:\n   - Free Space Path Loss (FSPL):\n     FSPL (dB) = 20 * log10(d) + 20 * log10(f) + 20 * log10(4 * pi / c)\n     where d = distance (m), f = frequency (Hz), c = speed of light (3x10^8 m/s).\n\n   - Signal-to-Noise Ratio (SNR):\n     SNR = P_signal / P_noise\n     SNR_dB = 10 * log10(P_signal / P_noise)\n\n   - Shannon-Hartley Channel Capacity Theorem:\n     C = B * log2(1 + SNR)\n     where C = Channel capacity (bps), B = Bandwidth (Hz), SNR = Linear Signal-to-Noise ratio.\n\n3. Digital Modulation Schemes:\n   - ASK (Amplitude Shift Keying): Binary bits represented by variation in carrier signal amplitude.\n   - FSK (Frequency Shift Keying): Binary bits represented by variation in carrier frequency (f1 for bit 1, f2 for bit 0).\n   - PSK (Phase Shift Keying): Binary bits represented by carrier phase shifts (e.g., BPSK uses 0 deg and 180 deg).\n   - QAM (Quadrature Amplitude Modulation): Combines amplitude and phase changes. 16-QAM carries 4 bits/symbol; 64-QAM carries 6 bits/symbol; 1024-QAM carries 10 bits/symbol."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Wireless Communications: Principles and Practice",
        "author": "Theodore S. Rappaport"
      },
      {
        "title": "Digital Communications",
        "author": "John G. Proakis"
      }
    ],
    "practiceLinks": [
      {
        "title": "Sanfoundry Wireless Communication Questions",
        "url": "https://www.sanfoundry.com/wireless-mobile-communications-questions-answers/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State the Shannon-Hartley theorem formula and explain its variables. (2 Marks)",
        "Calculate the number of bits per symbol transmitted in 64-QAM modulation. (2 Marks)",
        "Define Free Space Path Loss (FSPL) and state its mathematical expression. (2 Marks)"
      ],
      "sixMarks": [
        "Explain digital modulation techniques: ASK, FSK, BPSK, QPSK, and 16-QAM with constellation diagrams and spectral efficiency. (6 Marks)",
        "Detail wireless signal propagation mechanisms: Reflection, Diffraction, and Scattering with real-world examples. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on RF Signal Propagation and Channel Capacity. Derive Free Space Path Loss formula, explain link budget calculation, analyze Shannon capacity under variable SNR, and compare spectral efficiency of PSK vs QAM schemes. (10 Marks)"
      ]
    }
  },
  {
    "title": "Cellular Communication Concepts",
    "slug": "wireless-networks-cellular-communication-concepts",
    "order": 3,
    "estimatedHours": 5,
    "difficulty": "Beginner",
    "description": "Core principles of cellular systems: cell geometry, frequency reuse, cluster size, handoff (handover) mechanics, roaming, and cellular architecture (MSC, BSC, BTS, HLR, VLR).",
    "subTopics": [
      "Introduction to Cellular Systems",
      "Cellular Architecture",
      "Cells and Cell Clusters",
      "Frequency Reuse",
      "Handoff Techniques",
      "Roaming",
      "Mobile Switching Centers",
      "Base Stations",
      "Mobile Stations"
    ],
    "prerequisiteTitles": [
      "Wireless Communication Fundamentals"
    ],
    "learningObjectives": [
      "Explain the concept of frequency reuse and compute cluster size N using shift parameters (i, j).",
      "Analyze handoff strategies (Hard vs Soft Handoff) and RSS threshold hysteresis.",
      "Describe cellular architecture components: MS, BTS, BSC, MSC, HLR, and VLR."
    ],
    "notes": [
      {
        "title": "Cellular System Architecture, Frequency Reuse & Handoff Strategy",
        "content": "CELLULAR COMMUNICATION CONCEPTS\n\n1. Frequency Reuse & Cell Geometry:\n   Hexagonal geometry is mathematically preferred over circles (gaps/overlaps) and squares/triangles (maximizes distance to adjacent cell centers).\n\n   Cluster Size Formula:\n     N = i^2 + i*j + j^2\n   where i, j are non-negative shift integers. Valid values of N = 1, 3, 4, 7, 9, 12, 13, 19, 21...\n   \n   Frequency Reuse Ratio (Q):\n     Q = D / R = sqrt(3 * N)\n   where D = Distance to nearest co-channel cell, R = Cell radius.\n\n   Cellular Cluster Layout ASCII Diagram (N = 7 Cluster):\n   \n         / \\     / \\     / \\\n        / A \\___/ B \\___/ C \\\n        \\   /   \\   /   \\   /\n         \\ /  D  \\ /  E  \\ /\n         / \\     / \\     / \\\n        / F \\___/ G \\___/ A \\\n        \\   /   \\   /   \\   /\n         \\ /     \\ /     \\ /\n\n2. Handoff (Handover) Techniques:\n   - Hard Handoff (\"Break-Before-Make\"): Terminal disconnects from old BTS before connecting to new BTS (GSM, 2G).\n   - Soft Handoff (\"Make-Before-Break\"): Terminal connects to new BTS before releasing connection from old BTS (CDMA, 3G).\n   - Hysteresis Margin: Prevents \"Ping-Pong\" effect by requiring RSS_new > RSS_old + Hysteresis_Delta.\n\n3. Core Cellular Architecture Components:\n   - MS (Mobile Station): User handset with SIM card.\n   - BTS (Base Transceiver Station): Radio transmission towers.\n   - BSC (Base Station Controller): Manages radio resources and handoffs across BTSs.\n   - MSC (Mobile Switching Center): Central call routing and switching node.\n   - HLR (Home Location Register): Permanent subscriber database containing profile and location.\n   - VLR (Visitor Location Register): Temporary database for roaming subscribers currently in the MSC zone."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Cellular System Design",
        "author": "C. Y. Lee"
      },
      {
        "title": "Wireless Communications",
        "author": "Andrea Goldsmith"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Cellular System Concepts",
        "url": "https://www.geeksforgeeks.org/cellular-system-architecture/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Calculate the co-channel reuse distance D for a cell radius R = 2 km and cluster size N = 7. (2 Marks)",
        "Distinguish between Hard Handoff and Soft Handoff. (2 Marks)",
        "What is the role of HLR and VLR databases in cellular roaming? (2 Marks)"
      ],
      "sixMarks": [
        "Explain Frequency Reuse concept with cluster size derivation formula N = i^2 + ij + j^2 and co-channel interference analysis. (6 Marks)",
        "Describe key components of Cellular Architecture: MS, BTS, BSC, MSC, HLR, VLR, and EIR with functional flow diagram. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Cellular Communication Engineering. Detail cell planning, co-channel and adjacent channel interference reduction, sectoring, microcell/picocell deployment, handoff hysteresis design, and location management algorithms. (10 Marks)"
      ]
    }
  },
  {
    "title": "Generations of Mobile Networks",
    "slug": "wireless-networks-generations-of-mobile-networks",
    "order": 4,
    "estimatedHours": 5,
    "difficulty": "Beginner",
    "description": "Evolutionary journey of cellular networks from 1G analog systems to 5G NR service-based architecture, Massive MIMO, network slicing, URLLC, and future 6G concepts.",
    "subTopics": [
      "1G Mobile Networks",
      "2G (GSM, CDMA)",
      "2.5G (GPRS, EDGE)",
      "3G (UMTS, WCDMA)",
      "4G LTE Architecture and Services",
      "5G Architecture (Massive MIMO, Network Slicing, URLLC)",
      "Future Mobile Networks"
    ],
    "prerequisiteTitles": [
      "Cellular Communication Concepts"
    ],
    "learningObjectives": [
      "Compare architectural differences across cellular generations (1G to 5G).",
      "Explain key 4G LTE components: eNodeB, EPC (MME, SGW, PGW, HSS).",
      "Detail 5G core pillars: eMBB, URLLC, mMTC, Network Slicing, and Service-Based Architecture (SBA)."
    ],
    "notes": [
      {
        "title": "Cellular Generations Comparison & 5G Service Architecture",
        "content": "GENERATIONS OF MOBILE NETWORKS (1G TO 5G)\n\n1. Comprehensive Generation Comparison Table:\n   +------------+-------------+------------------+-----------------------+------------------------+-------------------------------------+\n   | Generation | Standard    | Data Rate        | Multiple Access       | Core Network           | Key Technologies / Features         |\n   +------------+-------------+------------------+-----------------------+------------------------+-------------------------------------+\n   | 1G (1980s) | AMPS, TACS  | ~2.4 kbps        | FDMA                  | Analog Circuit Switched| Analog voice only                   |\n   | 2G (1990s) | GSM, CDMA   | ~64 kbps         | TDMA / CDMA           | Digital Circuit Switched| Digital voice, SMS, SIM cards       |\n   | 2.5G       | GPRS, EDGE  | 144 - 384 kbps   | TDMA / GSM            | Packet Switched Core   | Mobile internet, MMS                |\n   | 3G (2000s) | UMTS, WCDMA | 2 - 14 Mbps      | CDMA (WCDMA/CDMA2000) | Hybrid IP/CS           | Mobile broadband, Video calling     |\n   | 4G (2010s) | LTE, LTE-A  | 100 Mbps - 1 Gbps| OFDMA (DL)/SC-FDMA(UL)| All-IP Core (EPC)      | VoLTE, Carrier Aggregation, MIMO    |\n   | 5G (2020s) | 5G NR       | Up to 20 Gbps    | OFDMA / Massive MIMO  | Service-Based (5GC)    | eMBB, URLLC, mMTC, Network Slicing |\n   +------------+-------------+------------------+-----------------------+------------------------+-------------------------------------+\n\n2. 4G LTE Evolved Packet System (EPS):\n   - Radio Access: eNodeB (Evolved NodeB) replaces BSC/BTS.\n   - Core Network (EPC):\n     * MME (Mobility Management Entity): Control plane signaling, authentication, tracking.\n     * SGW (Serving Gateway): User plane packet routing between eNodeB and PGW.\n     * PGW (PDN Gateway): Gateway to external IP packet data networks.\n     * HSS (Home Subscriber Server): Central database replacing HLR/AuC.\n\n3. 5G Core Use Cases & Architectural Pillars:\n   - eMBB (Enhanced Mobile Broadband): High throughput up to 20 Gbps for AR/VR, 8K video streaming.\n   - URLLC (Ultra-Reliable Low-Latency Communication): Latency < 1ms, 99.999% reliability for autonomous vehicles & telesurgery.\n   - mMTC (Massive Machine-Type Communication): Connects up to 10^6 IoT devices per km^2 with long battery life.\n   - Network Slicing: Virtualizes physical network into dedicated isolated slices tailored to specific application QoS."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "5G NR: The Next Generation Wireless Access Technology",
        "author": "Erik Dahlman, Stefan Parkvall, Johan Skold"
      },
      {
        "title": "LTE - The UMTS Long Term Evolution",
        "author": "Stefania Sesia, Issam Toufik, Matthew Baker"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Comparison of 1G to 5G",
        "url": "https://www.geeksforgeeks.org/generations-of-wireless-communication/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What are the three core use case categories defined by 3GPP for 5G networks? (2 Marks)",
        "State the main functions of MME and PGW in 4G LTE EPC. (2 Marks)",
        "Define Network Slicing in 5G Architecture. (2 Marks)"
      ],
      "sixMarks": [
        "Compare 2G, 3G, 4G, and 5G networks based on architecture, multiple access techniques, data rates, and key capabilities. (6 Marks)",
        "Explain 4G LTE architecture detailing E-UTRAN (eNodeB) and EPC components (MME, SGW, PGW, HSS). (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on 5G Mobile Architecture and Technologies. Detail 5G NR, Massive MIMO, Beamforming, Millimeter Wave (mmWave) spectrum, Service-Based Architecture (SBA), Network Slicing, and latency reduction mechanisms. (10 Marks)"
      ]
    }
  },
  {
    "title": "Wireless Network Architectures",
    "slug": "wireless-networks-wireless-network-architectures",
    "order": 5,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Architectural components of wireless networks: Access Points, Base Stations, Radio Access Networks (RAN), Core Network integration, and Software Defined Networking (SDN) in wireless.",
    "subTopics": [
      "Wireless Network Components",
      "Access Points",
      "Base Stations",
      "Mobile Devices",
      "Core Network",
      "Radio Access Network (RAN)",
      "Software Defined Networking in Wireless"
    ],
    "prerequisiteTitles": [
      "Generations of Mobile Networks"
    ],
    "learningObjectives": [
      "Identify key hardware and software components across RAN and Core Network layers.",
      "Understand O-RAN (Open RAN) architecture and the functional split of RU, DU, and CU.",
      "Explain the application of Software Defined Networking (SDN) and Network Functions Virtualization (NFV) in wireless environments."
    ],
    "notes": [
      {
        "title": "RAN Architecture, Open RAN Functional Split & SDN/NFV",
        "content": "WIRELESS NETWORK ARCHITECTURES\n\n1. Radio Access Network (RAN) Architecture & Functional Split:\n   Modern 5G RAN decomposes traditional monolithic base stations (eNodeB) into three disaggregated units:\n   - RU (Radio Unit): Transceiver, power amplifier, RF filtering, analog-to-digital conversion.\n   - DU (Distributed Unit): Handles PHY-High, MAC, and RLC real-time protocol processing.\n   - CU (Centralized Unit): Handles non-real-time RRC and PDCP layer processing (CU-CP for control plane, CU-UP for user plane).\n\n   Open RAN (O-RAN) Interfaces:\n   [ RU ] <--- Fronthaul (eCPRI) ---> [ DU ] <--- Midhaul (F1) ---> [ CU ] <--- Backhaul (N2/N3) ---> [ 5G Core ]\n\n2. 5G Core Network Service-Based Architecture (SBA):\n   - AMF (Access and Mobility Management Entity): Handles access control and registration.\n   - SMF (Session Management Function): Establishes and manages PDU sessions and IP address allocation.\n   - UPF (User Plane Function): Packet routing, forwarding, and policy enforcement (User Plane data flow).\n   - UDM (Unified Data Management): Central repository for subscriber profile data.\n   - NRF (Network Repository Function): Enables service discovery among Network Functions (NFs).\n\n3. Software Defined Wireless Networking (SDWN):\n   SDN separates the Control Plane from the Data/Forwarding Plane. In wireless:\n   - Centralized Controller maintains global network topology view.\n   - Dynamic management of channel assignments, power control, and handoff execution across access points."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "SDN and NFV Simplified",
        "author": "Jim Doherty"
      },
      {
        "title": "Wireless Network Architecture",
        "author": "Thomas Michael Bohnert"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Software Defined Networking Overview",
        "url": "https://www.geeksforgeeks.org/software-defined-networking-sdn-definition/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain the functional division between RU, DU, and CU in 5G Open RAN. (2 Marks)",
        "What is the function of UPF in 5G Service-Based Core Architecture? (2 Marks)",
        "Define Software Defined Networking (SDN) control plane and data plane separation. (2 Marks)"
      ],
      "sixMarks": [
        "Describe 5G Core Service-Based Architecture (SBA) highlighting AMF, SMF, UPF, UDM, and NRF. (6 Marks)",
        "Explain Open RAN (O-RAN) architecture advantages, disaggregation, and key interfaces (Fronthaul, Midhaul, Backhaul). (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Wireless Network Architecture Evolution. Analyze modern RAN disaggregation, cloud-native Core Networks (5GC), Network Functions Virtualization (NFV), and SDN implementation in wireless resource optimization. (10 Marks)"
      ]
    }
  },
  {
    "title": "Wireless LAN Technologies",
    "slug": "wireless-networks-wireless-lan-technologies",
    "order": 6,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "IEEE 802.11 Wi-Fi standards, topologies (BSS, ESS, IBSS), protocol evolution (802.11a/b/g/n/ac/ax), Wi-Fi framing, channel binding, and wireless security frameworks.",
    "subTopics": [
      "Introduction to WLAN",
      "IEEE 802.11 Standards",
      "Wi-Fi Architecture",
      "802.11a/b/g/n/ac/ax Protocols",
      "Wi-Fi Security",
      "Wi-Fi Applications"
    ],
    "prerequisiteTitles": [
      "Wireless Network Architectures"
    ],
    "learningObjectives": [
      "Compare IEEE 802.11 standards from 802.11b to 802.11ax (Wi-Fi 6).",
      "Analyze WLAN topologies: BSS (Basic Service Set), ESS (Extended Service Set), and IBSS (Ad-hoc).",
      "Understand 802.11 MAC frame format and multi-antenna technologies (MIMO, MU-MIMO, OFDMA)."
    ],
    "notes": [
      {
        "title": "IEEE 802.11 Standards Matrix, WLAN Topologies & Frame Format",
        "content": "WIRELESS LAN TECHNOLOGIES (IEEE 802.11)\n\n1. IEEE 802.11 Standards Evolution Matrix:\n   +--------------------+----------------+--------------------+-------------------+-------------------------------+\n   | Standard           | Frequency Band | Max Physical Rate  | Modulation Scheme | Key Features                  |\n   +--------------------+----------------+--------------------+-------------------+-------------------------------+\n   | 802.11b            | 2.4 GHz        | 11 Mbps            | DSSS, CCK         | Initial mainstream Wi-Fi      |\n   | 802.11a            | 5 GHz          | 54 Mbps            | OFDM              | 5GHz band, OFDM implementation|\n   | 802.11g            | 2.4 GHz        | 54 Mbps            | OFDM, DSSS        | Backward compatible with 11b  |\n   | 802.11n (Wi-Fi 4)  | 2.4 / 5 GHz    | 600 Mbps           | OFDM, 64-QAM      | 4x4 MIMO, 40 MHz channels     |\n   | 802.11ac (Wi-Fi 5) | 5 GHz          | 6.9 Gbps           | 256-QAM           | 8x8 MU-MIMO, 160 MHz channels |\n   | 802.11ax (Wi-Fi 6) | 2.4 / 5 / 6 GHz| 9.6 Gbps           | 1024-QAM, OFDMA   | OFDMA, Target Wake Time (TWT) |\n   +--------------------+----------------+--------------------+-------------------+-------------------------------+\n\n2. WLAN Topologies:\n   - BSS (Basic Service Set): Single Access Point (AP) with connected stations within coverage area. Formally identified by BSSID (AP MAC Address).\n   - ESS (Extended Service Set): Multiple BSSs connected via a wired Distribution System (DS), providing seamless roaming across a shared SSID.\n   - IBSS (Independent BSS / Ad-hoc Mode): Peer-to-peer station connections without a central AP.\n\n3. IEEE 802.11 Frame Architecture:\n   - Frame Control (2 Bytes): Protocol version, Frame type (Management, Control, Data), Flags (To DS, From DS, Retry, Power Mgmt).\n   - Duration / ID (2 Bytes): NAV (Network Allocation Vector) reservation time.\n   - Address 1: Receiver Address (RA / BSSID).\n   - Address 2: Transmitter Address (TA).\n   - Address 3: Destination Address (DA) or Source Address (SA).\n   - Sequence Control (2 Bytes): Frame sequence & fragment number.\n   - Address 4: Source Address in Wireless Distribution System (WDS) frame forwarding."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "802.11 Wireless Networks: The Definitive Guide",
        "author": "Matthew S. Gast"
      },
      {
        "title": "CWNA Certified Wireless Network Administrator Study Guide",
        "author": "David D. Coleman"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks IEEE 802.11 Wireless LAN",
        "url": "https://www.geeksforgeeks.org/wifi-ieee-802-11-architecture/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between BSS (Basic Service Set) and ESS (Extended Service Set). (2 Marks)",
        "Explain how OFDMA enhances efficiency in Wi-Fi 6 (802.11ax). (2 Marks)",
        "What are the functions of Address 1, Address 2, and Address 3 fields in an 802.11 MAC frame? (2 Marks)"
      ],
      "sixMarks": [
        "Compare IEEE 802.11a, b, g, n, ac, and ax standards detailing frequency, data rate, channel bandwidth, and modulation schemes. (6 Marks)",
        "Describe IEEE 802.11 MAC Frame format and explain how Network Allocation Vector (NAV) prevents channel contention. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Wireless LAN Engineering. Detail Wi-Fi network design, 2.4GHz non-overlapping channels (1, 6, 11), 5GHz/6GHz channel bonding, MU-MIMO beamforming, Target Wake Time (TWT), and enterprise roaming protocols. (10 Marks)"
      ]
    }
  },
  {
    "title": "Medium Access Control in Wireless",
    "slug": "wireless-networks-medium-access-control-in-wireless",
    "order": 7,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Wireless MAC layer protocols: addressing challenges like hidden and exposed terminal problems, CSMA/CA mechanism with RTS/CTS, and channelization techniques (TDMA, FDMA, CDMA, OFDMA).",
    "subTopics": [
      "MAC Layer Concepts",
      "Challenges in Wireless MAC",
      "Random Access Protocols",
      "CSMA/CD",
      "CSMA/CA",
      "TDMA",
      "FDMA",
      "CDMA",
      "OFDMA"
    ],
    "prerequisiteTitles": [
      "Wireless LAN Technologies"
    ],
    "learningObjectives": [
      "Understand why CSMA/CD is unsuited for wireless and explain CSMA/CA operation.",
      "Analyze the Hidden Terminal Problem and Exposed Terminal Problem along with RTS/CTS solutions.",
      "Compare multiple access techniques: TDMA, FDMA, CDMA (orthogonal codes), and OFDMA."
    ],
    "notes": [
      {
        "title": "Wireless MAC Challenges, CSMA/CA Mechanism & CDMA Orthogonality",
        "content": "MEDIUM ACCESS CONTROL IN WIRELESS NETWORKS\n\n1. Hidden & Exposed Terminal Problems ASCII Diagrams:\n\n   Hidden Terminal Problem:\n   +----------+          +---------------+          +----------+\n   | Node A   | -------> | Access Point  | <------- | Node B   |\n   +----------+          +---------------+          +----------+\n   Node A & Node B cannot sense each other's RF transmission. Both transmit simultaneously to AP, causing packet collision.\n   Solution: Virtual Carrier Sensing using RTS (Request to Send) and CTS (Clear to Send) frames containing NAV duration.\n\n   Exposed Terminal Problem:\n   +----------+          +----------+        +----------+          +----------+\n   | Node A   | <------- | Node B   |        | Node C   | -------> | Node D   |\n   +----------+          +----------+        +----------+          +----------+\n   Node C senses Node B's transmission to A and defers its own valid transmission to Node D, wasting throughput.\n\n2. CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance) Protocol:\n   - Physical Carrier Sensing: Clear Channel Assessment (CCA).\n   - Virtual Carrier Sensing: NAV timer set by RTS/CTS duration.\n   - IFS Timers: SIFS (Short IFS for ACK/CTS), DIFS (DCF IFS for new data frame).\n   - Random Backoff: Contention Window CW doubled on collision: CW_new = min(2 * CW + 1, CW_max).\n\n3. CDMA & Orthogonal Code Multiplication:\n   In CDMA, each user is assigned an orthogonal chip sequence (e.g., Walsh-Hadamard code).\n   For two codes C1 and C2:\n     Inner product C1 * C2 = 0 (Orthogonal)\n     Inner product C1 * C1 = N (Length of code)"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Wireless MAC Protocols",
        "author": "Prashant Krishnamurthy"
      },
      {
        "title": "Data and Computer Communications",
        "author": "William Stallings"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks CSMA/CA in Wireless Networks",
        "url": "https://www.geeksforgeeks.org/collision-avoidance-in-dcffast-recovery-in-csma-ca/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Why is CSMA/CD incapable of collision detection in wireless propagation? (2 Marks)",
        "Explain the function of SIFS and DIFS in IEEE 802.11 CSMA/CA. (2 Marks)",
        "Define orthogonal chip sequence in CDMA systems. (2 Marks)"
      ],
      "sixMarks": [
        "Explain Hidden Terminal Problem and Exposed Terminal Problem with topology diagrams and show how RTS/CTS solves the hidden node problem. (6 Marks)",
        "Compare TDMA, FDMA, CDMA, and OFDMA multiple access schemes based on spectrum sharing, synchronization, and capacity. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Medium Access Control Protocols. Step-by-step walkthrough of CSMA/CA backoff algorithm, NAV allocation, frame retransmission limits, and mathematical proof of orthogonality in CDMA code assignment. (10 Marks)"
      ]
    }
  },
  {
    "title": "Mobile Network Protocols",
    "slug": "wireless-networks-mobile-network-protocols",
    "order": 8,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Network and Transport layer protocols for mobility: Mobile IP (Home Agent, Foreign Agent, Care-of Address), IP encapsulation, Mobile TCP variations (I-TCP, Snooping TCP, M-TCP), and WAP.",
    "subTopics": [
      "Mobile IP",
      "IPv4 and IPv6 in Mobile Networks",
      "Mobile TCP",
      "Wireless Application Protocol (WAP)",
      "Routing Protocols in Mobile Networks",
      "Transport Protocol Challenges"
    ],
    "prerequisiteTitles": [
      "Medium Access Control in Wireless"
    ],
    "learningObjectives": [
      "Understand Mobile IP entities: Home Agent (HA), Foreign Agent (FA), Mobile Node (MN), and Care-of Address (CoA).",
      "Analyze Mobile IP packet routing, triangular routing issues, and binding updates.",
      "Compare Mobile TCP variants (Indirect TCP, Snooping TCP, Mobile TCP) designed to handle wireless losses."
    ],
    "notes": [
      {
        "title": "Mobile IP Architecture, IP-in-IP Encapsulation & Wireless TCP Solutions",
        "content": "MOBILE NETWORK PROTOCOLS\n\n1. Mobile IP Architecture & Entities:\n   - Mobile Node (MN): Node that changes its point of attachment from one network to another.\n   - Home Agent (HA): Router on the mobile node's home network that tunnels packets to the MN when away.\n   - Foreign Agent (FA): Router on the visited foreign network that delivers tunneled packets to the MN.\n   - Care-of Address (CoA): Temporary IP address assigned to MN in the visited foreign network.\n\n2. Mobile IP Packet Delivery & Triangular Routing:\n   Packet Path: Sender ---> Home Agent ---> (IP-in-IP Tunneling) ---> Foreign Agent ---> Mobile Node\n   \n   Triangular Routing Problem:\n   Packets sent to MN must first travel to HA before being tunneled to FA, creating inefficient latency loops.\n   Solution: Route Optimization with Binding Updates sent directly to the Correspondent Node (CN).\n\n3. Mobile TCP Adaptations:\n   Standard TCP interprets wireless packet loss as congestion, unnecessarily reducing its congestion window (CWND).\n   - Indirect TCP (I-TCP): Splits TCP connection at AP into wired segment (standard TCP) and wireless segment (specialized wireless transport).\n   - Snooping TCP: Access Point buffers packets at link layer and performs local retransmissions without triggering sender TCP timeout.\n   - Mobile TCP (M-TCP): Handles frequent handoff disconnections by sending TCP window size = 0 to freeze sender timer."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Mobile IP: The Internet Unplugged",
        "author": "Charles E. Perkins"
      },
      {
        "title": "TCP/IP Illustrated, Volume 1",
        "author": "W. Richard Stevens"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Mobile IP Overview",
        "url": "https://www.geeksforgeeks.org/mobile-ip/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define Home Agent (HA), Foreign Agent (FA), and Care-of Address (CoA) in Mobile IP. (2 Marks)",
        "What causes the Triangular Routing problem in Mobile IP? (2 Marks)",
        "Why does standard TCP perform poorly in wireless environments? (2 Marks)"
      ],
      "sixMarks": [
        "Describe Mobile IP operation detailing Agent Discovery, Registration, Tunneling (IP-in-IP), and Decapsulation. (6 Marks)",
        "Explain Wireless TCP adaptations: Indirect-TCP (I-TCP), Snooping TCP, and Mobile TCP (M-TCP) with architectural diagrams. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Mobile Network & Transport Protocols. Detail Mobile IPv4 vs Mobile IPv6 (CoA autoconfiguration, smooth handoff), TCP congestion window degradation over lossy links, and protocol optimizations for mobile Web access (WAP stack). (10 Marks)"
      ]
    }
  },
  {
    "title": "Mobile Ad Hoc Networks (MANETs)",
    "slug": "wireless-networks-mobile-ad-hoc-networks-manets",
    "order": 9,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Self-configuring infrastructureless ad hoc networks: MANET characteristics, proactive (DSDV), reactive (AODV, DSR), and hybrid routing protocols, security challenges, and simulation models.",
    "subTopics": [
      "Introduction to MANET",
      "Characteristics",
      "Applications",
      "AODV Protocol",
      "DSR Protocol",
      "DSDV Protocol",
      "Routing Challenges",
      "Security Issues in MANET"
    ],
    "prerequisiteTitles": [
      "Mobile Network Protocols"
    ],
    "learningObjectives": [
      "Define key characteristics of MANETs: dynamic topology, multi-hop routing, and distributed operations.",
      "Compare Proactive (Table-driven) vs Reactive (On-demand) routing algorithms.",
      "Trace AODV route discovery (RREQ, RREP, RERR) and implementation using graph simulation."
    ],
    "notes": [
      {
        "title": "MANET Routing Classification, AODV Mechanics & Python Graph Simulation",
        "content": "MOBILE AD HOC NETWORKS (MANETs)\n\n1. MANET Routing Protocol Taxonomy:\n   - Proactive (Table-driven): Periodic route updates maintained in routing tables regardless of traffic demand.\n     * Examples: DSDV (Destination-Sequenced Distance Vector), OLSR (Optimized Link State Routing).\n   - Reactive (On-Demand): Routes calculated only when a source node needs to transmit to a destination.\n     * Examples: AODV (Ad-hoc On-demand Distance Vector), DSR (Dynamic Source Routing).\n   - Hybrid: Combines proactive routing locally inside zones and reactive routing between zones (e.g., ZRP - Zone Routing Protocol).\n\n2. AODV (Ad-hoc On-demand Distance Vector) Routing Mechanics:\n   - Route Discovery: Source broadcasts RREQ (Route Request). Intermediate nodes record reverse path. Destination or node with fresh route returns unicast RREP (Route Reply).\n   - Sequence Numbers: Prevent routing loops and guarantee route freshness.\n   - Route Maintenance: Hello messages detect link failures; RERR (Route Error) packets notify affected upstream sources.\n\n3. Python Simulation Code for MANET Dynamic Topology & Path Discovery:\n```python\nimport networkx as nx\n\ndef simulate_manet_routing():\n    # Construct dynamic MANET graph\n    manet = nx.Graph()\n    manet.add_edges_from([\n        ('Node_A', 'Node_B'), ('Node_B', 'Node_C'),\n        ('Node_C', 'Node_D'), ('Node_A', 'Node_E'),\n        ('Node_E', 'Node_D')\n    ])\n    \n    # Compute reactive shortest path (AODV simulation)\n    path = nx.shortest_path(manet, source='Node_A', target='Node_D')\n    hops = len(path) - 1\n    print(f\"Discovered AODV Route: {' -> '.join(path)} (Hop Count: {hops})\")\n\nsimulate_manet_routing()\n```"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Ad Hoc Mobile Wireless Networks: Protocols and Systems",
        "author": "C. Siva Ram Murthy, B. S. Manoj"
      },
      {
        "title": "Mobile Ad Hoc Networking",
        "author": "Stefano Basagni, Marco Conti, Silvia Giordano, Ivan Stojmenovic"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks MANET Routing Protocols",
        "url": "https://www.geeksforgeeks.org/routing-protocols-in-manet/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Compare Proactive and Reactive routing protocols in MANETs with examples. (2 Marks)",
        "What is the role of sequence numbers in AODV routing protocol? (2 Marks)",
        "State two major security vulnerabilities unique to MANET environments. (2 Marks)"
      ],
      "sixMarks": [
        "Explain AODV route discovery and route maintenance process using RREQ, RREP, and RERR packet exchanges. (6 Marks)",
        "Compare DSDV, AODV, and DSR protocols based on routing overhead, memory storage, delay, and scalability. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Mobile Ad Hoc Network Engineering. Detail dynamic topology challenges, energy-aware routing, Black Hole and Wormhole security attack mitigations, and cross-layer protocol design. (10 Marks)"
      ]
    }
  },
  {
    "title": "Wireless Sensor Networks",
    "slug": "wireless-networks-wireless-sensor-networks",
    "order": 10,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Architecture and design of Wireless Sensor Networks (WSNs): sensor node components, energy management, data aggregation, LEACH hierarchical routing, and radio energy models.",
    "subTopics": [
      "Introduction to WSN",
      "Sensor Network Architecture",
      "Sensor Nodes",
      "Data Collection",
      "Energy Management",
      "Routing in Sensor Networks",
      "Applications"
    ],
    "prerequisiteTitles": [
      "Mobile Ad Hoc Networks (MANETs)"
    ],
    "learningObjectives": [
      "Identify the functional hardware units inside a wireless sensor node.",
      "Analyze the LEACH hierarchical energy-efficient clustering protocol.",
      "Calculate transceiver power consumption using first-order radio energy models."
    ],
    "notes": [
      {
        "title": "WSN Node Architecture, LEACH Clustering & Radio Energy Model",
        "content": "WIRELESS SENSOR NETWORKS (WSNs)\n\n1. Sensor Node Hardware Components:\n   - Sensing Unit: Sensor probe (temperature, acoustic, optical) + ADC (Analog-to-Digital Converter).\n   - Processing Unit: Microcontroller (MCU) / Low-power processor + Flash memory.\n   - Transceiver: Short-range RF communication module (e.g., IEEE 802.15.4 / CC2500).\n   - Power Unit: Battery cell, solar harvester, power management circuit.\n\n2. LEACH (Low-Energy Adaptive Clustering Hierarchy) Protocol:\n   LEACH forms clusters to aggregate sensor data before transmitting to distant Base Station (BS).\n   Cluster Head (CH) Election Probability Formula:\n     P_i(t) = P / (1 - P * (r mod (1 / P)))   if node i belongs to set G\n     P_i(t) = 0                                otherwise\n   where P = desired cluster head percentage, r = current round, G = set of nodes that have not been CH in the last 1/P rounds.\n\n3. First-Order Radio Energy Dissipation Model:\n   - Energy to transmit a k-bit message over distance d:\n     E_Tx(k, d) = k * E_elec + k * epsilon_amp * d^2   (if d < d_crossover)\n     E_Tx(k, d) = k * E_elec + k * epsilon_mp * d^4    (if d >= d_crossover)\n   - Energy to receive a k-bit message:\n     E_Rx(k) = k * E_elec\n   where E_elec = 50 nJ/bit (electronics circuitry energy), epsilon_amp = 10 pJ/bit/m^2."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Protocols and Architectures for Wireless Sensor Networks",
        "author": "Holger Karl, Andreas Willig"
      },
      {
        "title": "Wireless Sensor Networks",
        "author": "Ian F. Akyildiz, Mehmet Can Vuran"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Wireless Sensor Networks Overview",
        "url": "https://www.geeksforgeeks.org/wireless-sensor-networks-wsn/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State four main hardware components of a Wireless Sensor Node. (2 Marks)",
        "Write the LEACH Cluster Head election probability formula. (2 Marks)",
        "Define Data Aggregation in WSN and state its benefit. (2 Marks)"
      ],
      "sixMarks": [
        "Describe LEACH protocol operation detailing Setup Phase (CH selection, cluster formation) and Steady-State Phase (TDMA data transmission). (6 Marks)",
        "Explain First-Order Radio Energy Model formulas for transmission and reception energy consumption in WSNs. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Wireless Sensor Network Systems. Analyze node architecture constraints, sleep/wake duty cycling, MAC protocols (S-MAC), hierarchical routing (LEACH, PEGASIS), and industrial WSN applications in environmental monitoring. (10 Marks)"
      ]
    }
  },
  {
    "title": "Internet of Things and Wireless Networks",
    "slug": "wireless-networks-internet-of-things-and-wireless-networks",
    "order": 11,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Wireless communications in IoT systems: Bluetooth LE, Zigbee (IEEE 802.15.4), LoRaWAN long-range LPWAN, NFC, IoT network architecture, and security protocols.",
    "subTopics": [
      "Introduction to IoT Communication",
      "IoT Network Architecture",
      "Bluetooth",
      "Zigbee",
      "LoRaWAN",
      "NFC",
      "IoT Security Challenges",
      "Smart Applications"
    ],
    "prerequisiteTitles": [
      "Wireless Sensor Networks"
    ],
    "learningObjectives": [
      "Compare short-range (BLE, Zigbee, NFC) vs long-range (LoRaWAN, NB-IoT) wireless IoT technologies.",
      "Understand Zigbee IEEE 802.15.4 stack, network topologies (Star, Mesh, Tree), and application profiles.",
      "Analyze LoRaWAN network architecture (End Nodes, Gateways, Network Server) and Spread Spectrum Modulation."
    ],
    "notes": [
      {
        "title": "IoT Wireless Technologies Matrix & LoRaWAN Topology Architecture",
        "content": "INTERNET OF THINGS (IoT) & WIRELESS NETWORKS\n\n1. Comprehensive IoT Wireless Protocol Comparison Matrix:\n   +----------------+-----------------+------------------+------------------+------------------+---------------------+\n   | Technology     | Standard        | Frequency Band   | Data Rate        | Max Range        | Topology            |\n   +----------------+-----------------+------------------+------------------+------------------+---------------------+\n   | BLE (5.0)      | IEEE 802.15.1   | 2.4 GHz ISM      | 1 - 2 Mbps       | 10 - 100 m       | Star, Mesh          |\n   | Zigbee         | IEEE 802.15.4   | 2.4 GHz / 868MHz | 250 kbps         | 10 - 100 m       | Mesh, Tree, Star    |\n   | LoRaWAN        | LoRa Alliance   | Sub-GHz (868/915)| 0.3 - 50 kbps    | 2 - 15 km        | Star-of-Stars       |\n   | NFC            | ISO/IEC 18000-3 | 13.56 MHz        | 106 - 424 kbps   | < 10 cm          | Point-to-Point      |\n   | NB-IoT         | 3GPP Rel 13     | Cellular licensed| ~200 kbps        | 1 - 10 km        | Cellular Star       |\n   +----------------+-----------------+------------------+------------------+------------------+---------------------+\n\n2. LoRaWAN Architecture & Chirp Spread Spectrum (CSS):\n   - End Devices: Sensors equipped with LoRa radio modems.\n   - Gateways: Base stations forwarding raw LoRa packets to Network Server over IP backhaul.\n   - Network Server: Manages deduplication, adaptive data rate (ADR), routing, and security.\n   - Application Server: Decrypts payload and executes business logic.\n\n   LoRaWAN Topology Diagram:\n   [ End Devices ] ---> ( LoRa RF ) ---> [ Gateways ] ---> ( IP/Ethernet ) ---> [ Network Server ] ---> [ Application Server ]"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Internet of Things: Principles and Paradigms",
        "author": "Rajkumar Buyya, Amir Vahid Dastjerdi"
      },
      {
        "title": "LoRaWAN Network Infrastructure",
        "author": "Sylvain Robert"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks IoT Wireless Protocols",
        "url": "https://www.geeksforgeeks.org/protocols-in-iot/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State frequency band, data rate, and range for LoRaWAN vs Zigbee. (2 Marks)",
        "Explain Active mode vs Passive mode in NFC communication. (2 Marks)",
        "What is Chirp Spread Spectrum (CSS) modulation in LoRa physical layer? (2 Marks)"
      ],
      "sixMarks": [
        "Describe Zigbee network architecture detailing Coordinator, Router, End Device roles, and Mesh topology. (6 Marks)",
        "Explain LoRaWAN architecture components (End Nodes, Gateways, Network Server, Application Server) and class types (Class A, B, C). (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on IoT Wireless Network Design. Compare short-range PAN (BLE, Zigbee) vs long-range LPWAN (LoRaWAN, NB-IoT) on energy consumption, penetration through obstacles, network capacity, payload size, and smart city applications. (10 Marks)"
      ]
    }
  },
  {
    "title": "Mobile Application Networking",
    "slug": "wireless-networks-mobile-application-networking",
    "order": 12,
    "estimatedHours": 4,
    "difficulty": "Advanced",
    "description": "Client-server patterns in mobile applications: REST APIs, WebSockets, gRPC, offline data synchronization, Mobile Cloud Computing (MCC), and Mobile Edge Computing (MEC).",
    "subTopics": [
      "Mobile Application Communication",
      "Client-Server Communication",
      "Mobile APIs",
      "Data Synchronization",
      "Mobile Cloud Computing",
      "Mobile Edge Computing"
    ],
    "prerequisiteTitles": [
      "Internet of Things and Wireless Networks"
    ],
    "learningObjectives": [
      "Compare mobile network communication protocols: REST, WebSockets, and gRPC.",
      "Analyze data synchronization strategies for offline-first mobile applications.",
      "Understand Mobile Edge Computing (MEC) architecture for ultra-low latency compute offloading."
    ],
    "notes": [
      {
        "title": "Mobile Application Communication Protocols & MEC Architecture",
        "content": "MOBILE APPLICATION NETWORKING\n\n1. Mobile Communication Protocol Paradigms:\n   - REST (HTTP/1.1 or HTTP/2): Stateless request-response with JSON/XML payloads. Easy to cache, suitable for CRUD operations.\n   - WebSockets (RFC 6455): Full-duplex persistent TCP connection over a single socket, ideal for real-time applications (chat, financial feeds).\n   - gRPC (HTTP/2 + Protocol Buffers): Strongly typed, binary serialization, multiplexed streaming RPC with minimal overhead on battery and bandwidth.\n\n2. Offline-First Mobile Data Synchronization:\n   - Strategy: Store updates locally in SQLite/WatermelonDB, maintain local change logs with sequence numbers.\n   - Sync Engine: Performs background synchronization when connection restores. Uses Conflict-Free Replicated Data Types (CRDTs) or Last-Write-Wins (LWW) timestamp algorithms to resolve vector clock conflicts.\n\n3. Mobile Edge Computing (MEC) Architecture:\n   MEC places compute, storage, and networking resources at the RAN edge (e.g., at gNodeB base stations), reducing latency from >50ms (central cloud) to <5ms."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Mobile Edge Computing",
        "author": "Sabu M. Thampi"
      },
      {
        "title": "High Performance Browser Networking",
        "author": "Ilya Grigorik"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Mobile Edge Computing",
        "url": "https://www.geeksforgeeks.org/mobile-edge-computing-mec/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between REST and gRPC for mobile application APIs. (2 Marks)",
        "Define Mobile Edge Computing (MEC) and state its primary latency benefit. (2 Marks)",
        "What is Conflict-Free Replicated Data Type (CRDT) in mobile offline synchronization? (2 Marks)"
      ],
      "sixMarks": [
        "Explain offline-first mobile application synchronization architecture using local caching, queueing, conflict resolution, and background sync. (6 Marks)",
        "Compare Mobile Cloud Computing (MCC) vs Mobile Edge Computing (MEC) on bandwidth consumption, latency, privacy, and node distribution. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Mobile Application Networking Systems. Detail API protocol selection (REST vs WebSocket vs gRPC), battery-aware request batching, TLS session resumption, and edge computation offloading decisions. (10 Marks)"
      ]
    }
  },
  {
    "title": "Wireless Network Security",
    "slug": "wireless-networks-wireless-network-security",
    "order": 13,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Security threats, authentication mechanisms, and encryption standards in wireless systems: WEP vulnerability, WPA, WPA2 (AES-CCMP), WPA3 (SAE), cellular 5G AKA security, and privacy protection.",
    "subTopics": [
      "Security Challenges in Wireless Networks",
      "Authentication",
      "Encryption Techniques",
      "WEP",
      "WPA",
      "WPA2",
      "WPA3",
      "Secure Mobile Communication",
      "Privacy Issues"
    ],
    "prerequisiteTitles": [
      "Mobile Application Networking"
    ],
    "learningObjectives": [
      "Understand security vulnerabilities of WEP and evolution to WPA, WPA2, and WPA3.",
      "Explain WPA3 Simultaneous Authentication of Equals (SAE) handshake.",
      "Analyze 5G Authentication and Key Agreement (5G AKA) protocol using encrypted subscriber identifiers (SUCI)."
    ],
    "notes": [
      {
        "title": "WLAN Security Protocol Evolution & 5G AKA Framework",
        "content": "WIRELESS NETWORK SECURITY\n\n1. Evolution of Wi-Fi Security Standards:\n   +-----------+--------------------+-------------------------+------------------------------------+\n   | Standard  | Encryption Cipher  | Integrity Protocol      | Key Vulnerabilities / Notes        |\n   +-----------+--------------------+-------------------------+------------------------------------+\n   | WEP       | RC4 (24-bit IV)    | CRC-32                  | Weak IV reuse; broken by FMS attack|\n   | WPA       | RC4 (TKIP)         | Michael MIC             | Temporal key mixing; fallback fix  |\n   | WPA2      | AES-CCMP           | CBC-MAC                 | Susceptible to KRACK handshake attack|\n   | WPA3      | AES-CCMP / GCMP    | BIP (BIP-GMAC-256)      | SAE (Dragonfly) handshake; immune to offline dictionary attack |\n   +-----------+--------------------+-------------------------+------------------------------------+\n\n2. WPA3 SAE (Simultaneous Authentication of Equals) Dragonfly Handshake:\n   - Replaces pre-shared key (PSK) 4-way handshake.\n   - Prevents offline dictionary attacks even if weak passwords are used.\n   - Provides Forward Secrecy: Compromising password does not decrypt previously captured traffic.\n\n3. 5G Cellular Security (5G AKA Protocol):\n   - SUPI (Subscription Permanent Identifier): IMSI equivalent, never transmitted in plaintext over the air.\n   - SUCI (Subscription Concealed Identifier): SUPI encrypted using Home Network public key via ECIES scheme before transmission.\n   - 5G AKA delivers mutual authentication between UE and Home Network (HN)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Wireless Security: Models, Threats, and Solutions",
        "author": "Randall K. Nichols, Panos C. Lekkas"
      },
      {
        "title": "5G Security",
        "author": "Valtteri Niemi, Kaisa Nyberg"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Wireless Security WEP WPA",
        "url": "https://www.geeksforgeeks.org/difference-between-wep-wpa-wpa2-and-wpa3/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Why is WEP vulnerable to Initialization Vector (IV) reuse attacks? (2 Marks)",
        "Explain how WPA3 Simultaneous Authentication of Equals (SAE) prevents dictionary attacks. (2 Marks)",
        "What is the difference between SUPI and SUCI in 5G security? (2 Marks)"
      ],
      "sixMarks": [
        "Compare WEP, WPA, WPA2, and WPA3 security standards based on encryption algorithms, key management, integrity, and vulnerabilities. (6 Marks)",
        "Describe 5G AKA (Authentication and Key Agreement) authentication flow between UE, SEAF, AUSF, and UDM. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Wireless Network Security Architecture. Detail 802.11i 4-way handshake, AES-CCMP construction, Rogue AP detection, KRACK attack mechanics, and end-to-end cellular privacy protection. (10 Marks)"
      ]
    }
  },
  {
    "title": "Performance Analysis of Wireless Networks",
    "slug": "wireless-networks-performance-analysis-of-wireless-networks",
    "order": 14,
    "estimatedHours": 4,
    "difficulty": "Advanced",
    "description": "Key performance indicators (KPIs) in wireless systems: throughput, latency, jitter, packet loss, Quality of Service (QoS), empirical path loss models (Okumura-Hata), and Python analysis scripts.",
    "subTopics": [
      "Network Performance Metrics",
      "Bandwidth",
      "Latency",
      "Throughput",
      "Packet Loss",
      "Quality of Service (QoS)",
      "Network Optimization Techniques"
    ],
    "prerequisiteTitles": [
      "Wireless Network Security"
    ],
    "learningObjectives": [
      "Define and evaluate KPIs: Throughput, Latency, Jitter, Packet Error Rate (PER), and Packet Delivery Ratio (PDR).",
      "Apply the empirical Okumura-Hata path loss model for urban cellular coverage planning.",
      "Implement Python performance simulation scripts for path loss and link budget analysis."
    ],
    "notes": [
      {
        "title": "QoS KPI Formulas, Okumura-Hata Path Loss Model & Python Simulation Script",
        "content": "PERFORMANCE ANALYSIS OF WIRELESS NETWORKS\n\n1. Key Performance Indicators (KPIs) & Mathematical Definitions:\n   - Throughput (T):\n     T = Total Bits Received Successfully / Total Time Duration (bps)\n   \n   - Packet Error Rate (PER):\n     PER = 1 - (1 - BER)^N\n     where BER = Bit Error Rate, N = Frame size in bits.\n\n   - Jitter (J):\n     J = | Delay_(i+1) - Delay_i |\n     measures delay variance across consecutive packets.\n\n2. Okumura-Hata Empirical Propagation Model for Urban Areas:\n   Path Loss PL (dB) = 69.55 + 26.16 * log10(f) - 13.82 * log10(h_b) - a(h_m) + (44.9 - 6.55 * log10(h_b)) * log10(d)\n   where:\n     f = frequency in MHz (150 to 1500 MHz),\n     h_b = base station antenna height in meters (30 to 200m),\n     h_m = mobile antenna height in meters (1 to 10m),\n     d = link distance in km (1 to 20km),\n     a(h_m) for small-medium city = (1.1 * log10(f) - 0.7) * h_m - (1.56 * log10(f) - 0.8).\n\n3. Python Script for Okumura-Hata Urban Path Loss Simulation:\n```python\nimport math\n\ndef calculate_okumura_hata_path_loss(f_mhz, d_km, h_b_m=30, h_m_m=1.5):\n    a_hm = (1.1 * math.log10(f_mhz) - 0.7) * h_m_m - (1.56 * math.log10(f_mhz) - 0.8)\n    pl = (69.55 + 26.16 * math.log10(f_mhz) - 13.82 * math.log10(h_b_m) - a_hm + \n          (44.9 - 6.55 * math.log10(h_b_m)) * math.log10(d_km))\n    return pl\n\npl_2km = calculate_okumura_hata_path_loss(900, 2.0)\nprint(f\"Path Loss at 900 MHz (2 km): {pl_2km:.2f} dB\")\n```"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Wireless Communications: Principles and Practice",
        "author": "Theodore S. Rappaport"
      },
      {
        "title": "Performance Analysis of Mobile Communications Networks",
        "author": "Akira Takahashi"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Quality of Service QoS",
        "url": "https://www.geeksforgeeks.org/quality-of-service-qos-in-computer-networks/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define Jitter and Packet Error Rate (PER) in wireless performance analysis. (2 Marks)",
        "List key parameters required for Okumura-Hata urban path loss calculation. (2 Marks)",
        "State four main QoS traffic classes defined by 3GPP. (2 Marks)"
      ],
      "sixMarks": [
        "Explain Okumura-Hata path loss model formulas for urban, suburban, and open rural environments. (6 Marks)",
        "Describe wireless network performance optimization techniques including power control, adaptive modulation (AMC), and carrier aggregation. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Wireless Performance Modeling and Simulation. Detail link budget calculation (Transmit power, antenna gains, path loss, fade margin), queueing model analysis (M/M/1), and QoS scheduler algorithms. (10 Marks)"
      ]
    }
  },
  {
    "title": "Advanced Wireless Technologies",
    "slug": "wireless-networks-advanced-wireless-technologies",
    "order": 15,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Next-generation frontiers in wireless systems: 6G network vision, AI/ML for dynamic spectrum management and beam tracking, Terahertz communications, Edge AI, and autonomous zero-touch networks.",
    "subTopics": [
      "5G and Beyond",
      "6G Networks Overview",
      "AI in Wireless Networks",
      "Machine Learning for Network Optimization",
      "Edge Computing",
      "Cloud-Based Wireless Networks",
      "Autonomous Networks"
    ],
    "prerequisiteTitles": [
      "Performance Analysis of Wireless Networks"
    ],
    "learningObjectives": [
      "Understand 6G vision, Sub-THz spectrum utilization, and Joint Communication and Sensing (JCAS).",
      "Explain Deep Reinforcement Learning (DRL) applications in dynamic spectrum allocation and radio resource management.",
      "Analyze ETSI Zero-Touch Network and Service Management (ZSM) framework for self-healing networks."
    ],
    "notes": [
      {
        "title": "6G Key Performance Indicators, Terahertz Band & AI-Driven RAN",
        "content": "ADVANCED WIRELESS TECHNOLOGIES (6G & AI IN WIRELESS)\n\n1. 6G vs 5G KPI Vision Comparison Table:\n   +------------------------------+--------------------+--------------------+\n   | Metric / Capability          | 5G (IMT-2020)      | 6G (IMT-2030)      |\n   +------------------------------+--------------------+--------------------+\n   | Peak Data Rate               | 20 Gbps            | 1 Tbps (1000 Gbps) |\n   | User Experienced Data Rate   | 100 Mbps           | 1 Gbps             |\n   | Latency                      | 1 ms (URLLC)       | < 0.1 ms (100 us)  |\n   | Spectrum Frequency           | Sub-6 GHz, mmWave  | Sub-THz (0.1-1 THz)|\n   | Connection Density           | 10^6 devices/km^2  | 10^7 devices/km^2  |\n   | Energy Efficiency            | 1x baseline        | 10x to 100x higher |\n   | Spatial Accuracy (Sensing)   | Meter level        | Centimeter level   |\n   +------------------------------+--------------------+--------------------+\n\n2. AI/ML Integration in Radio Access Networks (RAN):\n   - Dynamic Spectrum Sharing (DSS): Deep Reinforcement Learning (DRL) agents learn optimal spectrum access policies in real-time without explicit radio channel modeling.\n   - Massive MIMO Beam Tracking: Convolutional Neural Networks (CNNs) predict channel state information (CSI) matrix to adjust beamsteering weights dynamically.\n\n3. Zero-Touch Network & Service Management (ETSI ZSM):\n   ZSM architecture relies on closed-loop automation (Observe, Orient, Decide, Act) to realize self-configuring, self-optimizing, and self-healing autonomous cellular networks."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "6G Wireless Communications and Mobile Networking",
        "author": "Yulei Wu, Song Guo"
      },
      {
        "title": "Artificial Intelligence for 6G Wireless Networks",
        "author": "H. Vincent Poor"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks 6G Wireless Technology",
        "url": "https://www.geeksforgeeks.org/6g-wireless-technology/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State peak data rate, latency, and frequency spectrum targets for 6G networks. (2 Marks)",
        "Define Joint Communication and Sensing (JCAS) in 6G wireless systems. (2 Marks)",
        "What is Zero-Touch Network Management (ZSM)? (2 Marks)"
      ],
      "sixMarks": [
        "Explain applications of Machine Learning (Deep Reinforcement Learning, CNNs) in 5G/6G radio resource management and beamforming optimization. (6 Marks)",
        "Describe Terahertz (THz) band transmission challenges including atmospheric absorption and molecular attenuation. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on 6G and Next-Generation Wireless Architecture. Analyze Sub-THz physical layer design, Reconfigurable Intelligent Surfaces (RIS), Space-Air-Ground Integrated Networks (SAGIN), and AI-native RAN controllers. (10 Marks)"
      ]
    }
  },
  {
    "title": "Practical Applications and Projects",
    "slug": "wireless-networks-practical-applications-and-projects",
    "order": 16,
    "estimatedHours": 6,
    "difficulty": "Advanced",
    "description": "Hands-on projects and laboratory practicals: Wi-Fi network configuration, NS-3 mobile network simulation, wireless security auditing (Wireshark/Aircrack-ng), IoT MQTT protocol implementation, and RSSI evaluation scripts.",
    "subTopics": [
      "Wi-Fi Network Configuration",
      "Mobile Network Simulation",
      "Wireless Security Analysis",
      "IoT Communication Project",
      "MANET Simulation",
      "Network Performance Analysis",
      "Mobile App Communication Project"
    ],
    "prerequisiteTitles": [
      "Advanced Wireless Technologies"
    ],
    "learningObjectives": [
      "Simulate mobile network scenarios using NS-3 simulator and analyze throughput graphs.",
      "Conduct Wi-Fi frame capture and packet analysis using Wireshark.",
      "Develop a complete Python wireless link capacity evaluation tool."
    ],
    "notes": [
      {
        "title": "Hands-on Network Simulation, Wi-Fi Analysis & RSSI Evaluation Script",
        "content": "PRACTICAL APPLICATIONS AND PROJECTS\n\n1. Key Practical Project Modules:\n   - Project 1: Wi-Fi Traffic Capture & Security Analysis using Wireshark & Aircrack-ng (Capturing 802.11 Beacon, Probe Request/Response, 4-Way Handshake frames).\n   - Project 2: NS-3 Simulation of Ad-hoc & Cellular Networks (Scripting node mobility models, CSMA/CA backoff, packet trace visualization).\n   - Project 3: IoT MQTT Sensor Node Publisher-Subscriber Architecture over Wi-Fi/ESP32.\n\n2. Python Script for Wireless Signal Quality (RSSI/SNR) & Shannon Capacity Estimation:\n```python\nimport math\n\ndef evaluate_wireless_link_performance(rssi_dbm, noise_floor_dbm=-95, channel_bw_mhz=20):\n    snr_db = rssi_dbm - noise_floor_dbm\n    snr_linear = 10 ** (snr_db / 10.0)\n    bw_hz = channel_bw_mhz * 1e6\n    shannon_capacity_mbps = (bw_hz * math.log2(1 + snr_linear)) / 1e6\n    \n    # Categorize signal quality\n    if rssi_dbm >= -50:\n        quality = \"Excellent\"\n    elif rssi_dbm >= -67:\n        quality = \"Good (Suitable for Voice/Video)\"\n    elif rssi_dbm >= -70:\n        quality = \"Fair\"\n    elif rssi_dbm >= -80:\n        quality = \"Poor\"\n    else:\n        quality = \"Unusable Signal\"\n        \n    return snr_db, shannon_capacity_mbps, quality\n\n# Test scenario\nrssi = -65  # dBm\nsnr, cap, qual = evaluate_wireless_link_performance(rssi)\nprint(f\"RSSI: {rssi} dBm | SNR: {snr} dB | Est. Capacity: {cap:.2f} Mbps | Quality: {qual}\")\n```\n\n3. NS-3 Wi-Fi Simulation Script Snippet Overview:\n   - Configures WifiHelper, YansWifiPhyHelper, YansWifiChannelHelper.\n   - Sets SSID and MobilityModel (ConstantVelocityMobilityModel / RandomWaypointMobilityModel).\n   - Installs InternetStackHelper and assigns IP addresses. Enables pcap tracing for Wireshark analysis."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "NS-3 Network Simulator Manual",
        "author": "NS-3 Project Team"
      },
      {
        "title": "Practical Packet Analysis",
        "author": "Chris Sanders"
      }
    ],
    "practiceLinks": [
      {
        "title": "NS-3 Official Wireless Simulation Documentation",
        "url": "https://www.nsnam.org/documentation/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What key 802.11 management frames are captured during a Wi-Fi 4-way handshake analysis? (2 Marks)",
        "Distinguish between ConstantVelocity and RandomWaypoint mobility models in network simulations. (2 Marks)",
        "Explain how RSSI and noise floor are used to derive Signal-to-Noise Ratio (SNR). (2 Marks)"
      ],
      "sixMarks": [
        "Describe setup and configuration of an IoT MQTT communication project detailing ESP32 Wi-Fi client, MQTT Broker, topics, and payload structure. (6 Marks)",
        "Explain step-by-step workflow for simulating a 20-node MANET network using NS-3 simulator including mobility configuration, trace file generation, and throughput calculation. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Wireless Network Practical Engineering Projects. Detail design, implementation, setup steps, simulation topology, performance metric collection (Throughput, Delay, PER), packet sniffing procedures, and troubleshooting methodology. (10 Marks)"
      ]
    }
  }
];
