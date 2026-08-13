module.exports = [
  {
    "title": "Introduction to Computer Networks",
    "slug": "computer-networks-introduction-to-computer-networks",
    "order": 1,
    "estimatedHours": 3,
    "difficulty": "Beginner",
    "description": "Understand computer networking fundamentals: LAN, MAN, WAN, PAN, network topologies (Bus, Star, Ring, Mesh, Hybrid), and network devices (Hub, Switch, Router, Gateway, Repeater).",
    "subTopics": [
      "Introduction to Networking",
      "Need for Computer Networks",
      "Network Applications",
      "Types of Networks (LAN, MAN, WAN, PAN)",
      "Network Topologies (Bus, Star, Ring, Mesh, Hybrid)",
      "Network Devices Overview"
    ],
    "prerequisiteTitles": [],
    "learningObjectives": [
      "Classify networks by geographical coverage (PAN, LAN, MAN, WAN).",
      "Analyze topology trade-offs: Star (central switch), Mesh ($N(N-1)/2$ links), Bus, Ring, Hybrid.",
      "Distinguish Layer 1 (Hub/Repeater), Layer 2 (Switch/Bridge), and Layer 3 (Router/Gateway) network devices."
    ],
    "notes": [
      {
        "title": "Network Typologies & Interconnecting Devices",
        "content": "INTRODUCTION TO COMPUTER NETWORKS\n\n1. Classification by Geographic Area:\n   - PAN (Personal Area Network): Range ~10m (Bluetooth, Zigbee).\n   - LAN (Local Area Network): Range ~100m to 1km (Office, Home Ethernet/Wi-Fi).\n   - MAN (Metropolitan Area Network): Range ~10 to 50km (City cable TV network).\n   - WAN (Wide Area Network): Global scale (The Internet, telecom backbones).\n\n2. Network Topologies:\n   - Star Topology: Nodes connected to a central hub/switch. Single point of failure at hub, but easy troubleshooting.\n   - Mesh Topology: Every node connected to every other node. Number of physical links L = N * (N - 1) / 2. Maximum fault tolerance, high cabling cost.\n   - Bus Topology: Shared single coaxial backbone cable with terminators.\n   - Ring Topology: Token passing in a closed ring loop (Token Ring 802.5).\n\n3. Network Devices Overview:\n   - Repeater / Hub (Layer 1): Regenerates signals. Hub is a multi-port repeater (broadcasts data to all ports).\n   - Switch / Bridge (Layer 2): Filters traffic based on MAC addresses using MAC table. Dedicated collision domains per port.\n   - Router (Layer 3): Routes packets between different networks based on IP routing tables."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Computer Networks",
        "author": "Andrew S. Tanenbaum"
      },
      {
        "title": "Data Communications and Networking",
        "author": "Behrouz A. Forouzan"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Computer Network Types and Topologies",
        "url": "https://www.geeksforgeeks.org/basics-computer-networking/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Classify networks based on geographical scale (PAN, LAN, MAN, WAN) with examples. (2 Marks)",
        "How many physical duplex links are required to connect 10 computers in a fully connected Mesh Topology? (2 Marks)",
        "Differentiate between a Hub (Layer 1) and a Switch (Layer 2). (2 Marks)"
      ],
      "sixMarks": [
        "Explain Network Topologies (Bus, Star, Ring, Mesh, Hybrid) detailing advantages, disadvantages, cabling cost, and failure modes. (6 Marks)",
        "Describe network interconnecting devices: Repeater, Hub, Switch, Bridge, Router, and Gateway with OSI layer mapping. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Computer Networking Foundations. Detail LAN/MAN/WAN architectures, mesh network link formulas, Star topology collision domain isolation, switch MAC learning algorithms, and multi-tier enterprise network design. (10 Marks)"
      ]
    }
  },
  {
    "title": "Network Models and Architectures",
    "slug": "computer-networks-network-models-and-architectures",
    "order": 2,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Master the 7-Layer OSI Reference Model (Physical, Data Link, Network, Transport, Session, Presentation, Application), TCP/IP model, data encapsulation, and decapsulation.",
    "subTopics": [
      "OSI Reference Model",
      "Layers of OSI Model (Physical, Data Link, Network, Transport, Session, Presentation, Application)",
      "TCP/IP Model",
      "Comparison Between OSI and TCP/IP Models"
    ],
    "prerequisiteTitles": [
      "Introduction to Computer Networks"
    ],
    "learningObjectives": [
      "Understand the 7 layers of OSI Reference Model and Protocol Data Unit (PDU) at each layer.",
      "Explain Data Encapsulation (Headers added down stack) and Decapsulation (Headers stripped up stack).",
      "Compare OSI 7-Layer theoretical reference model with TCP/IP 4/5-layer practical internet standard."
    ],
    "notes": [
      {
        "title": "OSI 7-Layer Model vs TCP/IP Protocol Suite & Encapsulation",
        "content": "OSI MODEL vs TCP/IP MODEL\n\n1. OSI 7-Layer Reference Model & PDUs:\n   7. Application Layer: User interface & network services (HTTP, DNS, FTP) -> Data\n   6. Presentation Layer: Data formatting, encryption, compression (SSL, JPEG) -> Data\n   5. Session Layer: Session establishment, checkpointing (NetBIOS, RPC) -> Data\n   4. Transport Layer: End-to-end process delivery, flow/error control (TCP, UDP) -> Segment (TCP) / Datagram (UDP)\n   3. Network Layer: Logical IP addressing & routing (IP, ICMP, OSPF) -> Packet\n   2. Data Link Layer: Physical MAC addressing & framing (Ethernet, Switches) -> Frame\n   1. Physical Layer: Bit transmission over physical medium (Cable, Hub) -> Bits\n\n2. TCP/IP Model (4/5 Layers):\n   - Application Layer (Combines OSI 5, 6, 7)\n   - Transport Layer (OSI 4)\n   - Internet Layer (OSI 3)\n   - Network Access / Data Link Layer (OSI 1, 2)"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Computer Networking: A Top-Down Approach",
        "author": "James Kurose, Keith Ross"
      }
    ],
    "practiceLinks": [
      {
        "title": "Sanfoundry OSI Model Questions",
        "url": "https://www.sanfoundry.com/computer-networks-questions-answers-osi-model/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "List the 7 layers of the OSI Model in order from bottom to top. (2 Marks)",
        "Name Protocol Data Units (PDUs) at Transport, Network, Data Link, and Physical layers. (2 Marks)",
        "Compare OSI Model and TCP/IP Model on key structural differences. (2 Marks)"
      ],
      "sixMarks": [
        "Explain the functions of all 7 layers of the OSI Reference Model with protocol examples. (6 Marks)",
        "Describe Data Encapsulation and Decapsulation process as data travels from sender Application layer down to physical medium and up to receiver. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Network Reference Architectures. Detail OSI vs TCP/IP historical evolution, layer-by-layer header additions (Ethernet Frame header, IP Packet header, TCP Segment header), session management, presentation formatting, and transport reliability. (10 Marks)"
      ]
    }
  },
  {
    "title": "Physical Layer",
    "slug": "computer-networks-physical-layer",
    "order": 3,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Explore physical data transmission: Analog vs Digital signals, Guided media (Twisted pair, Coaxial, Fiber optics), Unguided media, Multiplexing (FDM, TDM, WDM), and Switching techniques.",
    "subTopics": [
      "Data Transmission Concepts",
      "Analog and Digital Signals",
      "Transmission Media (Guided Media, Unguided Media)",
      "Multiplexing Techniques (FDM, TDM, WDM)",
      "Switching Techniques (Circuit Switching, Packet Switching, Message Switching)"
    ],
    "prerequisiteTitles": [
      "Network Models and Architectures"
    ],
    "learningObjectives": [
      "Compare Guided Transmission Media (UTP/STP Cat6, Coaxial, Fiber Optics TIR) and Unguided (Radio, Microwave).",
      "Analyze Multiplexing methods: Frequency Division (FDM), Time Division (TDM), Wave Division (WDM).",
      "Compare Circuit Switching (dedicated channel, PSTN) and Packet Switching (statistical multiplexing, Datagram vs Virtual Circuit)."
    ],
    "notes": [
      {
        "title": "Transmission Media, Multiplexing & Circuit vs Packet Switching",
        "content": "PHYSICAL LAYER & TRANSMISSION MECHANICS\n\n1. Transmission Media:\n   - Twisted Pair Cable (UTP/STP): Cat5e/Cat6, uses differential signaling to cancel electromagnetic interference (EMI). Max length 100m.\n   - Fiber Optic Cable: Transmits light signals via Total Internal Reflection (TIR). Single-Mode (long distance, laser) vs Multi-Mode (short distance, LED). Immense bandwidth, immune to EMI.\n\n2. Multiplexing:\n   - FDM (Frequency Division Multiplexing): Divides bandwidth spectrum into non-overlapping frequency bands (Analog, Radio/TV).\n   - TDM (Time Division Multiplexing): Allocates fixed time slots to each user (Digital, T1/E1 lines).\n   - WDM (Wavelength Division Multiplexing): Multiplexes multiple optical light wavelengths through a single fiber cable.\n\n3. Switching Techniques:\n   - Circuit Switching: Dedicated end-to-end physical path established before transfer (e.g. Traditional Landline Telephone). Guaranteed bandwidth, zero queue delay, setup overhead.\n   - Packet Switching: Data broken into discrete packets routed independently over shared network. High bandwidth efficiency via statistical multiplexing (The Internet)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Data Communications and Networking",
        "author": "Behrouz A. Forouzan"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Physical Layer Practice",
        "url": "https://www.geeksforgeeks.org/physical-layer-in-osi-model/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between Guided and Unguided transmission media. (2 Marks)",
        "Explain Total Internal Reflection (TIR) in Fiber Optic cables. (2 Marks)",
        "Compare Circuit Switching and Packet Switching on two parameters. (2 Marks)"
      ],
      "sixMarks": [
        "Explain Multiplexing Techniques: Frequency Division (FDM), Time Division (TDM), and Wavelength Division (WDM) with spectral diagrams. (6 Marks)",
        "Compare Circuit Switching, Message Switching, and Packet Switching detailing path reservation, queuing delay, and channel utilization. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Physical Layer Communications. Detail Nyquist Bit Rate formula $C = 2B log_2 M$, Shannon Channel Capacity $C = B log_2 (1 + SNR)$, UTP Cat6 vs Fiber Optic physical characteristics, TDM framing, and Packet Switching datagram vs virtual-circuit subnets. (10 Marks)"
      ]
    }
  },
  {
    "title": "Data Link Layer",
    "slug": "computer-networks-data-link-layer",
    "order": 4,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master Data Link Layer protocols: Framing (Byte/Bit Stuffing), Error Detection (CRC polynomial division, Parity, Checksum), Error Correction (Hamming Code), Flow Control (Stop & Wait, Go-Back-N, Selective Repeat), and HDLC.",
    "subTopics": [
      "Data Link Layer Functions",
      "Framing",
      "Error Detection Techniques (Parity Check, CRC)",
      "Error Correction",
      "Flow Control",
      "Stop and Wait Protocol",
      "Sliding Window Protocol",
      "HDLC Protocol"
    ],
    "prerequisiteTitles": [
      "Physical Layer"
    ],
    "learningObjectives": [
      "Calculate Cyclic Redundancy Check (CRC) remainder using modulo-2 binary polynomial division.",
      "Understand Hamming Code single-bit error detection and correction ($2^r ge m + r + 1$).",
      "Analyze Sliding Window Flow Control efficiency: Stop-and-Wait ($eta = \frac{1}{1 + 2a}$), Go-Back-N, Selective Repeat."
    ],
    "notes": [
      {
        "title": "CRC Error Detection, Bit Stuffing & Sliding Window Protocols",
        "content": "DATA LINK LAYER PROTOCOLS & CALCULATIONS\n\n1. Bit Stuffing Framing Rule:\n   To prevent flag 01111110 pattern from appearing in payload data, sender inserts a '0' after every five consecutive '1's. Receiver strips the '0' after five consecutive '1's.\n\n2. CRC (Cyclic Redundancy Check) Division:\n   For data $D$ and Generator Polynomial $G$ of degree $r$:\n   - Append $r$ zeros to data: $D cdot 2^r$.\n   - Divide $(D cdot 2^r)$ by $G$ using Modulo-2 division (XOR).\n   - Remainder $R$ is the CRC checksum. Transmitted frame = Data + $R$.\n\n3. Sliding Window Flow Control Protocols:\n   - Stop-and-Wait: Sender window size $W_s = 1$, Receiver window size $W_r = 1$. Efficiency $eta = \frac{1}{1 + 2a}$ where $a = \frac{T_p}{T_t}$.\n   - Go-Back-N (GBN): $W_s = N$, $W_r = 1$. On error/loss, retransmits entire window from lost frame.\n   - Selective Repeat (SR): $W_s = 2^{m-1}$, $W_r = W_s$. Retransmits ONLY damaged/lost frames. Requires out-of-order buffer."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Computer Networks",
        "author": "Andrew S. Tanenbaum"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Data Link Layer Practice",
        "url": "https://www.geeksforgeeks.org/data-link-layer/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State the Bit Stuffing rule for Data Link Layer framing. (2 Marks)",
        "What is the condition for Hamming Code parity bits $r$ for $m$ data bits? (2 Marks)",
        "Compare Go-Back-N ARQ and Selective Repeat ARQ window sizes. (2 Marks)"
      ],
      "sixMarks": [
        "A 1000-bit frame is transmitted over a 1 Mbps link with propagation delay $T_p = 25\text{ ms}$. Calculate transmission time $T_t$, parameter $a$, and efficiency of Stop-and-Wait protocol. (6 Marks)",
        "Given Data bit string 1101011011 and Generator Polynomial $G(x) = x^4 + x + 1$ (10011), compute the CRC checksum bits. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Data Link Layer Protocols. Detail framing methods (byte count, byte stuffing, bit stuffing), modulo-2 CRC division proof, Hamming error-correcting code distance rules ($d_{min} ge 2t + 1$), and sliding window GBN vs Selective Repeat performance derivations. (10 Marks)"
      ]
    }
  },
  {
    "title": "Medium Access Control",
    "slug": "computer-networks-medium-access-control",
    "order": 5,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Explore shared medium channel allocation: ALOHA (Pure vs Slotted), CSMA, CSMA/CD (Ethernet collision detection, minimum frame length equation), CSMA/CA (Wi-Fi RTS/CTS), Ethernet standards, and MAC addressing.",
    "subTopics": [
      "Multiple Access Protocols",
      "ALOHA",
      "CSMA",
      "CSMA/CD",
      "CSMA/CA",
      "Ethernet",
      "MAC Address"
    ],
    "prerequisiteTitles": [
      "Data Link Layer"
    ],
    "learningObjectives": [
      "Compare Pure ALOHA ($max eta = 18.4%$) and Slotted ALOHA ($max eta = 36.8%$).",
      "Apply CSMA/CD minimum frame size condition: $T_{frame} ge 2 cdot T_p Rightarrow L_{min} ge 2 cdot T_p cdot B$.",
      "Understand 48-bit IEEE MAC Addressing and CSMA/CA (RTS/CTS) wireless collision avoidance."
    ],
    "notes": [
      {
        "title": "ALOHA Throughput, CSMA/CD Minimum Frame Size & MAC Address",
        "content": "MEDIUM ACCESS CONTROL & ETHERNET\n\n1. ALOHA Protocols:\n   - Pure ALOHA: Transmit whenever data is ready. Collision window = $2 cdot T_fr$. Max Efficiency $S = G cdot e^{-2G} = 18.4%$ (at $G = 0.5$).\n   - Slotted ALOHA: Time divided into slots of duration $T_fr$. Transmit only at slot boundary. Collision window = $T_fr$. Max Efficiency $S = G cdot e^{-G} = 36.8%$ (at $G = 1$).\n\n2. CSMA/CD Minimum Frame Length Equation:\n   To ensure sender detects collision while still transmitting frame:\n   $T_t ge 2 cdot T_p$\n   $\frac{L_{min}}{B} ge 2 cdot \frac{\text{Distance}}{V}$\n   $L_{min} ge 2 cdot T_p cdot B$\n   (Standard Ethernet 10 Mbps with $2 T_p = 51.2 mu\text{s} Rightarrow L_{min} = 512\text{ bits} = 64\text{ bytes}$).\n\n3. MAC Address Format:\n   48-bit (6-byte) Hexadecimal address (e.g. `00:1A:2B:3C:4D:5E`).\n   - First 24 bits: OUI (Organizationally Unique Identifier assigned by IEEE).\n   - Last 24 bits: NIC Network Interface Controller serial number."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Computer Networks",
        "author": "Andrew S. Tanenbaum"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Multiple Access Protocols",
        "url": "https://www.geeksforgeeks.org/multiple-access-protocols-in-computer-network/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Compare Pure ALOHA and Slotted ALOHA maximum channel efficiencies. (2 Marks)",
        "Why is CSMA/CD not suitable for wireless networks (Wi-Fi)? (2 Marks)",
        "Format of a 48-bit MAC address. What does OUI represent? (2 Marks)"
      ],
      "sixMarks": [
        "Derive minimum frame size formula $L_{min} ge 2 cdot T_p cdot B$ for CSMA/CD collision detection. Calculate $L_{min}$ for a 1 Gbps link of 1 km with $V = 2 \times 10^8\text{ m/s}$. (6 Marks)",
        "Explain CSMA/CA protocol working in Wi-Fi including Inter-Frame Spacing (IFS), Contention Window, RTS (Request to Send), and CTS (Clear to Send). (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Medium Access Control. Detail Random Access protocols (ALOHA, CSMA, CSMA/CD, CSMA/CA), Controlled Access protocols (Reservation, Polling, Token Passing), Binary Exponential Backoff algorithm in Ethernet, IEEE 802.3 Frame format, and MAC vs IP address resolution. (10 Marks)"
      ]
    }
  },
  {
    "title": "Network Layer",
    "slug": "computer-networks-network-layer",
    "order": 6,
    "estimatedHours": 6,
    "difficulty": "Intermediate",
    "description": "Master IP routing: IPv4 classful & classless (CIDR) addressing, Subnetting, IPv6 structure, Routing Algorithms (Distance Vector Bellman-Ford, Link State Dijkstra), and Routing Protocols (RIP, OSPF, BGP).",
    "subTopics": [
      "Network Layer Functions",
      "Logical Addressing",
      "IPv4 Addressing",
      "IPv6 Addressing",
      "Subnetting",
      "Routing Concepts",
      "Routing Algorithms (Distance Vector Routing, Link State Routing)",
      "Routing Protocols (RIP, OSPF, BGP)"
    ],
    "prerequisiteTitles": [
      "Medium Access Control"
    ],
    "learningObjectives": [
      "Execute IPv4 subnetting calculations (Subnet mask, Network ID, Broadcast ID, Usable IP range).",
      "Apply Dijkstra's Shortest Path Algorithm for Link State Routing.",
      "Compare Interior Gateway Protocols (RIP - Distance Vector, OSPF - Link State) and Exterior Gateway Protocol (BGP - Path Vector)."
    ],
    "notes": [
      {
        "title": "IPv4 CIDR Subnetting & Dijkstra Shortest Path Algorithm",
        "content": "NETWORK LAYER & IP SUBNETTING\n\n1. IPv4 CIDR Subnetting Example:\n   Given IP `192.168.1.0/26`:\n   - Subnet Mask: `255.255.255.192` (Slash 26 means 26 network bits, 6 host bits).\n   - Number of Subnets = $2^{26-24} = 4$.\n   - Hosts per Subnet = $2^6 - 2 = 62$ usable IPs.\n   - Block Size = $256 - 192 = 64$.\n   - Subnet 1 Range: `192.168.1.0` to `192.168.1.63` (Net ID: `.0`, Broadcast ID: `.63`, Usable: `.1` to `.62`).\n\n2. Routing Protocols Overview:\n   - RIP (Routing Information Protocol): Distance Vector (Bellman-Ford algorithm). Metric = Hop count (Max 15 hops).\n   - OSPF (Open Shortest Path First): Link State (Dijkstra algorithm). Metric = Cost (Bandwidth based). Fast convergence.\n   - BGP (Border Gateway Protocol): Path Vector algorithm. Inter-Autonomous System (Inter-AS) Internet backbone routing protocol."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Computer Networking: A Top-Down Approach",
        "author": "Kurose & Ross"
      }
    ],
    "practiceLinks": [
      {
        "title": "IP Subnetting Calculator & Exercises",
        "url": "https://www.subnet-calculator.com/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Given IP address 192.168.10.0/27, calculate Subnet Mask, number of usable hosts, and Broadcast Address. (2 Marks)",
        "Differentiate between IPv4 (32-bit) and IPv6 (128-bit) addresses. (2 Marks)",
        "Compare Distance Vector Routing and Link State Routing algorithms. (2 Marks)"
      ],
      "sixMarks": [
        "An organization is granted block 192.168.1.0/24. Divide this network into 4 equal subnets. List Network ID, Subnet Mask, Usable IP Range, and Broadcast ID for each subnet. (6 Marks)",
        "Apply Dijkstra's Shortest Path Algorithm to find the shortest path from source node A to all other nodes in a given 5-node weighted network graph. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Network Layer Routing & Addressing. Detail IPv4 header fields (TTL, Fragment Offset, Header Checksum), CIDR VLSM variable-length subnet masking, Bellman-Ford Count-to-Infinity problem & Split Horizon solution, OSPF Link State Advertisements (LSAs), and BGP Autonomous System path vectors. (10 Marks)"
      ]
    }
  },
  {
    "title": "Transport Layer",
    "slug": "computer-networks-transport-layer",
    "order": 7,
    "estimatedHours": 6,
    "difficulty": "Intermediate",
    "description": "Master end-to-end transport: Port numbers, UDP (connectionless datagrams) vs TCP (connection-oriented, reliable stream), TCP 3-Way Handshake (SYN, SYN-ACK, ACK), Flow Control, and Congestion Control (Slow Start, AIMD).",
    "subTopics": [
      "Transport Layer Functions",
      "Process-to-Process Communication",
      "Port Numbers",
      "UDP Protocol",
      "TCP Protocol",
      "TCP Connection Establishment",
      "Three-Way Handshake",
      "Flow Control",
      "Congestion Control"
    ],
    "prerequisiteTitles": [
      "Network Layer"
    ],
    "learningObjectives": [
      "Understand Process-to-Process delivery via Socket Addresses (IP Address + Port Number).",
      "Analyze TCP 3-Way Handshake connection setup (SYN, SYN-ACK, ACK) and 4-way termination (FIN).",
      "Apply TCP Congestion Control mechanisms: Slow Start (exponential growth), Congestion Avoidance (additive increase AIMD), Fast Retransmit, and Fast Recovery."
    ],
    "notes": [
      {
        "title": "TCP 3-Way Handshake, Header Fields & Congestion Control",
        "content": "TRANSPORT LAYER: TCP vs UDP & CONGESTION CONTROL\n\n1. UDP vs TCP:\n   - UDP (User Datagram Protocol): Connectionless, unreliable, low overhead (8-byte header), no flow/congestion control. Used in streaming, DNS, VoIP.\n   - TCP (Transmission Control Protocol): Connection-oriented, reliable in-order byte stream (20 to 60-byte header), sliding window flow control, congestion control.\n\n2. TCP 3-Way Handshake (Connection Establishment):\n   1. Client -> Server: SYN (seq = x)\n   2. Server -> Client: SYN-ACK (seq = y, ack = x + 1)\n   3. Client -> Server: ACK (seq = x + 1, ack = y + 1)\n\n3. TCP Congestion Control Algorithms:\n   - Slow Start: Congestion Window `cwnd` starts at 1 MSS, doubles every RTT ($cwnd = cwnd \times 2$) until `ssthresh` (Slow Start Threshold).\n   - Congestion Avoidance: Linear Additive Increase ($cwnd = cwnd + 1$ MSS per RTT).\n   - Congestion Detection:\n     * Timeout: `ssthresh = cwnd / 2`, `cwnd = 1` MSS (Multiplicative Decrease).\n     * 3 Duplicate ACKs (Fast Retransmit): `ssthresh = cwnd / 2`, `cwnd = ssthresh` (Fast Recovery)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Computer Networking: A Top-Down Approach",
        "author": "Kurose & Ross"
      }
    ],
    "practiceLinks": [
      {
        "title": "Wireshark TCP Handshake Packet Analysis",
        "url": "https://www.wireshark.org/docs/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between TCP and UDP protocols on five parameters. (2 Marks)",
        "Describe the TCP 3-Way Handshake sequence numbers and flag bits. (2 Marks)",
        "What is a Socket Address in networking? (2 Marks)"
      ],
      "sixMarks": [
        "Explain TCP 3-Way Handshake connection establishment and 4-way FIN teardown sequence with timing sequence diagrams. (6 Marks)",
        "Describe TCP Congestion Control stages: Slow Start, Congestion Avoidance, Fast Retransmit, and Fast Recovery with `cwnd` vs Time graph. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Transport Layer Protocols. Detail TCP header fields (Sequence Number, Ack Number, Window Size, Checksum, Flags URG/ACK/PSH/RST/SYN/FIN), Silly Window Syndrome & Nagle's algorithm, TCP Sliding Window flow control, and UDP lightweight datagram header. (10 Marks)"
      ]
    }
  },
  {
    "title": "Application Layer",
    "slug": "computer-networks-application-layer",
    "order": 8,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Explore application services: HTTP/HTTPS (REST, status codes), FTP, Email protocols (SMTP, POP3, IMAP), DNS (Hierarchy, Root/TLD servers, Recursive vs Iterative resolution), DHCP (DORA), SSH, and Telnet.",
    "subTopics": [
      "Application Layer Services",
      "HTTP and HTTPS",
      "FTP",
      "SMTP",
      "POP3",
      "IMAP",
      "DNS",
      "DHCP",
      "Telnet",
      "SSH"
    ],
    "prerequisiteTitles": [
      "Transport Layer"
    ],
    "learningObjectives": [
      "Understand HTTP request/response structure and status codes (200 OK, 301 Redirect, 404 Not Found, 500 Internal Error).",
      "Analyze DNS resolution pipeline: Client -> Recursive Resolver -> Root Server -> TLD Server -> Authoritative Nameserver.",
      "Understand DHCP DORA sequence: Discover -> Offer -> Request -> Acknowledge."
    ],
    "notes": [
      {
        "title": "DNS Resolution Pipeline & DHCP DORA Process",
        "content": "APPLICATION LAYER PROTOCOLS\n\n1. DNS (Domain Name System) Resolution Steps:\n   To resolve `www.example.com`:\n   1. Client checks local browser/OS DNS Cache.\n   2. Query sent to ISP Recursive DNS Resolver.\n   3. Resolver queries Root Nameserver (`.`) -> Returns `.com` TLD Server IP.\n   4. Resolver queries `.com` TLD Server -> Returns `example.com` Authoritative Nameserver IP.\n   5. Resolver queries Authoritative Server -> Returns A record IPv4 address.\n   6. Resolver caches IP and returns it to Client browser.\n\n2. DHCP DORA Protocol (Port 67/68 UDP):\n   - Discover: Client broadcasts DHCPDISCOVER looking for IP server.\n   - Offer: DHCP server responds with DHCPOFFER proposing an IP address.\n   - Request: Client broadcasts DHCPREQUEST requesting the offered IP.\n   - Acknowledge: Server sends DHCPACK confirming lease assignment.\n\n3. Well-Known Application Ports:\n   FTP (20/21), SSH (22), Telnet (23), SMTP (25), DNS (53), DHCP (67/68), HTTP (80), HTTPS (443)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Computer Networks",
        "author": "Andrew S. Tanenbaum"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Application Layer Protocols",
        "url": "https://www.geeksforgeeks.org/application-layer-in-osi-model/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain the four steps of the DHCP DORA process. (2 Marks)",
        "Differentiate between Recursive and Iterative DNS queries. (2 Marks)",
        "State well-known port numbers for HTTP, HTTPS, SSH, DNS, and SMTP. (2 Marks)"
      ],
      "sixMarks": [
        "Explain complete DNS Query Resolution pipeline step-by-step from browser cache to Authoritative Nameserver with sequence diagram. (6 Marks)",
        "Compare HTTP/1.1 vs HTTP/2 vs HTTP/3 (QUIC) detailing persistent connections, multiplexing, and head-of-line blocking. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Application Layer Services. Detail HTTP request methods (GET, POST, PUT, DELETE) & response status codes, HTTPS SSL/TLS handshake security, FTP control vs data connections (Port 20/21), email transmission (SMTP vs POP3 vs IMAP), and SSH cryptographic tunneling. (10 Marks)"
      ]
    }
  },
  {
    "title": "Network Security Basics",
    "slug": "computer-networks-security-basics",
    "order": 9,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Learn network defense: Security threats (Spoofing, MitM, DDoS), Firewalls (Packet filtering, Stateful, Application proxy), Cryptography (Symmetric AES vs Asymmetric RSA), Digital Signatures, and VPN (IPsec).",
    "subTopics": [
      "Introduction to Network Security",
      "Security Threats",
      "Firewalls",
      "Encryption Basics",
      "Authentication",
      "Digital Signatures",
      "VPN",
      "Secure Communication"
    ],
    "prerequisiteTitles": [
      "Application Layer"
    ],
    "learningObjectives": [
      "Understand CIA Triad: Confidentiality, Integrity, Availability.",
      "Compare Symmetric Encryption (AES - fast, shared key) and Asymmetric Encryption (RSA - public/private key pair).",
      "Analyze Firewall types and IPsec VPN tunnel configurations."
    ],
    "notes": [
      {
        "title": "CIA Triad, Symmetric vs Asymmetric Cryptography & IPsec VPN",
        "content": "NETWORK SECURITY FUNDAMENTALS\n\n1. CIA Triad & Security Goals:\n   - Confidentiality: Only authorized parties can read data (Encryption - AES, RSA).\n   - Integrity: Data cannot be modified undetected (Hashing - SHA-256, HMAC).\n   - Availability: Systems remain accessible to legitimate users (DDoS protection).\n\n2. Symmetric vs Asymmetric Encryption:\n   - Symmetric (Secret Key): Single key used for encryption & decryption (AES, DES). Fast, suitable for bulk data. Key distribution problem.\n   - Asymmetric (Public Key): Public key encrypts, Private key decrypts (RSA, ECC). Solves key distribution, slower compute speed.\n\n3. Firewalls & VPNs:\n   - Packet Filtering Firewall: Inspects IP/TCP headers (Src/Dst IP, Port).\n   - Stateful Firewall: Tracks TCP connection state tables.\n   - IPsec VPN: Establishes encrypted IP tunnel across untrusted internet using Authentication Header (AH) and Encapsulating Security Payload (ESP)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Cryptography and Network Security",
        "author": "William Stallings"
      }
    ],
    "practiceLinks": [
      {
        "title": "PortSwigger Web Security Academy",
        "url": "https://portswigger.net/web-security"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State the CIA Triad principles in Network Security. (2 Marks)",
        "Differentiate between Symmetric and Asymmetric Encryption. (2 Marks)",
        "What is a Digital Signature and how does it ensure non-repudiation? (2 Marks)"
      ],
      "sixMarks": [
        "Explain Firewall types: Packet Filtering, Stateful Inspection, and Application-Level Proxy Firewalls with placement architecture. (6 Marks)",
        "Describe IPsec VPN tunnel operations detailing Transport vs Tunnel modes and AH vs ESP protocols. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Network Security Infrastructure. Detail cryptographic algorithms (AES-256, RSA-2048), Public Key Infrastructure (PKI) X.509 certificates, SSL/TLS handshake protocol stages, network threat vectors (Man-in-the-Middle, SYN Flood DDoS, ARP Spoofing), and Intrusion Detection Systems (IDS/IPS). (10 Marks)"
      ]
    }
  },
  {
    "title": "Wireless Networks",
    "slug": "computer-networks-wireless-networks",
    "order": 10,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Explore wireless communication: IEEE 802.11 Wi-Fi architecture (BSS, ESS, Access Points), Bluetooth (Piconet, Scatternet), Cellular networks (GSM, 4G LTE, 5G NR, Handoffs), and IoT networks (Zigbee, LoRaWAN).",
    "subTopics": [
      "Introduction to Wireless Networks",
      "Wi-Fi Architecture",
      "Bluetooth",
      "Mobile Networks",
      "Cellular Communication Basics",
      "IoT Networking Basics"
    ],
    "prerequisiteTitles": [
      "Medium Access Control"
    ],
    "learningObjectives": [
      "Understand IEEE 802.11 Wi-Fi topology: Basic Service Set (BSS), Extended Service Set (ESS), Access Points (AP).",
      "Analyze Cellular Network concepts: Frequency Reuse, Cell Splitting, Handoff (Hard vs Soft Handoff).",
      "Understand low-power IoT networks: Bluetooth LE, Zigbee (802.15.4), LoRaWAN."
    ],
    "notes": [
      {
        "title": "Wi-Fi 802.11 BSS/ESS Architecture & Cellular Frequency Reuse",
        "content": "WIRELESS & CELLULAR NETWORKS\n\n1. IEEE 802.11 Wi-Fi Architecture:\n   - BSS (Basic Service Set): A group of wireless stations controlled by a single Access Point (AP) identified by BSSID (AP MAC address).\n   - ESS (Extended Service Set): Two or more BSSs connected via a wired Distribution System (DS) sharing a common SSID for seamless roaming.\n\n2. Cellular Frequency Reuse & Handoff:\n   - Frequency Reuse: Cluster of $K$ cells ($K=4, 7$) using distinct frequency channels to avoid co-channel interference.\n   - Hard Handoff (\"Break-before-make\"): Connection to old base station dropped before connecting to new base station (GSM, FDMA/TDMA).\n   - Soft Handoff (\"Make-before-break\"): Mobile node connected to old and new base stations simultaneously (CDMA, 4G LTE)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Wireless Communications: Principles and Practice",
        "author": "Theodore S. Rappaport"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Wireless Communication Practice",
        "url": "https://www.geeksforgeeks.org/wireless-communication-technologies/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between BSS (Basic Service Set) and ESS (Extended Service Set) in Wi-Fi. (2 Marks)",
        "Explain Hard Handoff vs Soft Handoff in mobile cellular networks. (2 Marks)",
        "What is Bluetooth Piconet and Scatternet topology? (2 Marks)"
      ],
      "sixMarks": [
        "Explain Cellular Frequency Reuse concept with cluster geometry diagrams and co-channel interference calculations. (6 Marks)",
        "Describe Wi-Fi IEEE 802.11 standards evolution (802.11a/b/g/n/ac/ax) detailing frequency bands, channel bandwidths, and MIMO technology. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Wireless & Mobile Networking. Detail 802.11 CSMA/CA MAC layer frame exchange, 4G LTE vs 5G NR architecture (eNodeB vs gNodeB, 5G Core Network slicing), cellular handoff algorithms, and low-power IoT protocol stacks (Zigbee, LoRaWAN). (10 Marks)"
      ]
    }
  },
  {
    "title": "Network Management",
    "slug": "computer-networks-network-management",
    "order": 11,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Learn network administration: Monitoring tools, performance metrics (Latency, Throughput, Jitter, Packet Loss), SNMP (Agents, Managers, MIB), troubleshooting commands (Ping, Traceroute, Wireshark, Netstat), and QoS.",
    "subTopics": [
      "Network Monitoring",
      "Network Performance",
      "SNMP Protocol",
      "Network Troubleshooting",
      "Quality of Service (QoS)"
    ],
    "prerequisiteTitles": [
      "Network Layer",
      "Transport Layer"
    ],
    "learningObjectives": [
      "Measure key network metrics: Bandwidth, Throughput, Round-Trip Delay (RTT), Jitter, Packet Loss.",
      "Understand SNMP (Simple Network Management Protocol) architecture: Manager, Managed Agent, MIB (Management Information Base).",
      "Troubleshoot network issues using command line utilities (`ping`, `traceroute`, `netstat`, `nslookup`, `wireshark`)."
    ],
    "notes": [
      {
        "title": "Network Troubleshooting CLI Commands & SNMP Architecture",
        "content": "NETWORK MANAGEMENT & TROUBLESHOOTING\n\n1. Essential CLI Troubleshooting Commands:\n   - ping <host>: Sends ICMP Echo Requests to verify Layer 3 connectivity & measure RTT latency.\n   - traceroute / tracert <host>: Uses ICMP/UDP with incremental TTL values (1, 2, 3...) to discover hop-by-hop router path.\n   - netstat -an: Displays active TCP/UDP socket connections, listening ports, and routing tables.\n   - nslookup / dig <domain>: Queries DNS server to test domain name resolution.\n\n2. SNMP Architecture (Port 161/162 UDP):\n   - SNMP Manager: Central NMS (Network Management Station) software monitoring network status.\n   - SNMP Agent: Software running on network devices (Switches, Routers) collecting device metrics.\n   - MIB (Management Information Base): Hierarchical OID (Object Identifier) database storing device parameters."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Network Management: Principles and Practice",
        "author": "Mani Subramanian"
      }
    ],
    "practiceLinks": [
      {
        "title": "Wireshark Packet Analyzer Tutorials",
        "url": "https://www.wireshark.org/docs/wsug_html_chunked/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain how the `traceroute` command utilizes ICMP and TTL values to map network hops. (2 Marks)",
        "Define Jitter and Packet Loss in network performance evaluation. (2 Marks)",
        "Name the three components of SNMP architecture (Manager, Agent, MIB). (2 Marks)"
      ],
      "sixMarks": [
        "Explain SNMP Architecture: SNMP Manager, Managed Device Agent, MIB tree hierarchy, and Get/Set/Trap operations. (6 Marks)",
        "Describe Quality of Service (QoS) mechanisms: Traffic Shaping (Leaky Bucket), Policing (Token Bucket), and Packet Scheduling. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Network Diagnostics & Management. Detail Packet Capture using Wireshark filter syntax, TCP/IP ICMP error message types, QoS Differentiated Services (DiffServ) vs Integrated Services (IntServ), and automated NMS network monitoring topologies. (10 Marks)"
      ]
    }
  },
  {
    "title": "Modern Networking Technologies",
    "slug": "computer-networks-modern-networking-technologies",
    "order": 12,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Explore next-generation networking: Software-Defined Networking (SDN - Control plane vs Data plane separation, OpenFlow), Network Function Virtualization (NFV), Cloud Networking, Edge Computing, and IoT networking.",
    "subTopics": [
      "Software Defined Networking (SDN)",
      "Network Function Virtualization (NFV)",
      "Cloud Networking",
      "Edge Computing",
      "Internet of Things Networking"
    ],
    "prerequisiteTitles": [
      "Network Layer",
      "Network Management"
    ],
    "learningObjectives": [
      "Understand SDN architecture: Decoupling Control Plane (SDN Controller) from Data Plane (Switches) via OpenFlow protocol.",
      "Compare SDN and Network Function Virtualization (NFV).",
      "Analyze Cloud & Edge Networking integration for IoT deployments."
    ],
    "notes": [
      {
        "title": "Software-Defined Networking (SDN) & NFV Architecture",
        "content": "SDN AND MODERN NETWORKING TECHNOLOGIES\n\n1. Software-Defined Networking (SDN):\n   Separates Control Plane (routing logic decision making) from Data Plane (packet forwarding hardware).\n   - Application Plane: Network apps (Load balancing, Security rules, Routing policies).\n   - Northbound API: Connects apps to SDN Controller (REST APIs).\n   - Control Plane (SDN Controller): Centralized software brain computing flow tables (ONOS, OpenDaylight).\n   - Southbound API (OpenFlow): Pushes flow rules from Controller down to Data Plane switches.\n   - Data Plane: Hardware switches forwarding packets according to flow tables.\n\n2. Network Function Virtualization (NFV):\n   Replaces dedicated proprietary network hardware appliances (Firewalls, Routers, Load Balancers) with software Virtual Network Functions (VNFs) running on standard commodity servers."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "SDN: Software Defined Networks",
        "author": "Thomas D. Nadeau, Ken Gray"
      }
    ],
    "practiceLinks": [
      {
        "title": "Open Networking Foundation SDN Architecture",
        "url": "https://opennetworking.org/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is Software-Defined Networking (SDN)? Name the two decoupled planes. (2 Marks)",
        "Differentiate between SDN and NFV (Network Function Virtualization). (2 Marks)",
        "What is the role of the OpenFlow protocol in SDN? (2 Marks)"
      ],
      "sixMarks": [
        "Explain SDN Architecture: Application Plane, Northbound API, Control Plane (Controller), Southbound API (OpenFlow), and Data Plane with architectural block diagram. (6 Marks)",
        "Describe Network Function Virtualization (NFV) architecture detailing NFVI (Infrastructure), VNFs (Virtual Network Functions), and MANO (Management and Orchestration). (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Modern & Cloud Networking Technologies. Detail SDN programmable flow tables, OpenFlow packet matching rules, NFV management & orchestration (MANO), Cloud Virtual Private Network (VPC) overlays (VXLAN), and Edge-to-Cloud IoT network connectivity models. (10 Marks)"
      ]
    }
  }
];
