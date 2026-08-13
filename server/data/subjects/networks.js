module.exports = {
  "name": "Computer Networks",
  "description": "Master Computer Networks: OSI 7-Layer and TCP/IP models, physical media & multiplexing, Data Link CRC & sliding window protocols, CSMA/CD Ethernet MAC, Network Layer IPv4/IPv6 subnetting & routing algorithms (Dijkstra/Bellman-Ford), Transport Layer TCP 3-way handshake & congestion control, Application protocols (DNS, DHCP, HTTP), network security firewalls & VPNs, 802.11 Wi-Fi, SNMP management, and Software-Defined Networking (SDN).",
  "concepts": [
    {
      "title": "Introduction to Computer Networks",
      "topics": [
        "Introduction to Networking",
        "Need for Computer Networks",
        "Network Applications",
        "Types of Networks",
        "Network Topologies",
        "Network Devices Overview"
      ]
    },
    {
      "title": "Network Models and Architectures",
      "topics": [
        "OSI Reference Model",
        "Layers of OSI Model",
        "TCP/IP Model",
        "Comparison Between OSI and TCP/IP Models"
      ]
    },
    {
      "title": "Physical Layer",
      "topics": [
        "Data Transmission Concepts",
        "Analog and Digital Signals",
        "Transmission Media",
        "Multiplexing Techniques",
        "Switching Techniques"
      ]
    },
    {
      "title": "Data Link Layer",
      "topics": [
        "Data Link Layer Functions",
        "Framing",
        "Error Detection Techniques",
        "Error Correction",
        "Flow Control",
        "Stop and Wait Protocol",
        "Sliding Window Protocol",
        "HDLC Protocol"
      ]
    },
    {
      "title": "Medium Access Control",
      "topics": [
        "Multiple Access Protocols",
        "ALOHA",
        "CSMA",
        "CSMA/CD",
        "CSMA/CA",
        "Ethernet",
        "MAC Address"
      ]
    },
    {
      "title": "Network Layer",
      "topics": [
        "Network Layer Functions",
        "Logical Addressing",
        "IPv4 Addressing",
        "IPv6 Addressing",
        "Subnetting",
        "Routing Concepts",
        "Routing Algorithms",
        "Routing Protocols"
      ]
    },
    {
      "title": "Transport Layer",
      "topics": [
        "Transport Layer Functions",
        "Process-to-Process Communication",
        "Port Numbers",
        "UDP Protocol",
        "TCP Protocol",
        "TCP Connection Establishment",
        "Three-Way Handshake",
        "Flow Control",
        "Congestion Control"
      ]
    },
    {
      "title": "Application Layer",
      "topics": [
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
      ]
    },
    {
      "title": "Network Security Basics",
      "topics": [
        "Introduction to Network Security",
        "Security Threats",
        "Firewalls",
        "Encryption Basics",
        "Authentication",
        "Digital Signatures",
        "VPN",
        "Secure Communication"
      ]
    },
    {
      "title": "Wireless Networks",
      "topics": [
        "Introduction to Wireless Networks",
        "Wi-Fi Architecture",
        "Bluetooth",
        "Mobile Networks",
        "Cellular Communication Basics",
        "IoT Networking Basics"
      ]
    },
    {
      "title": "Network Management",
      "topics": [
        "Network Monitoring",
        "Network Performance",
        "SNMP Protocol",
        "Network Troubleshooting",
        "Quality of Service (QoS)"
      ]
    },
    {
      "title": "Modern Networking Technologies",
      "topics": [
        "Software Defined Networking (SDN)",
        "Network Function Virtualization (NFV)",
        "Cloud Networking",
        "Edge Computing",
        "Internet of Things Networking"
      ]
    }
  ],
  "youtubeResources": [
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
  "textbooks": [
    {
      "title": "Computer Networking: A Top-Down Approach",
      "author": "Kurose & Ross",
      "url": "https://ebooks.karbust.me/Technology/Computer%20Networking%20A%20Top-Down%20Approach,%208th%20Edition%20by%20James%20F.%20Kurose,%20Keith%20W.%20Ross-Pearson-9780136681557.pdf"
    },
    {
      "title": "Computer Networks",
      "author": "Andrew S. Tanenbaum",
      "url": "https://theswissbay.ch/pdf/Gentoomen%20Library/Networking/Prentice%20Hall%20-%20Computer%20Networks%20Tanenbaum%204ed.pdf"
    },
    {
      "title": "Data Communications and Networking",
      "author": "Behrouz Forouzan",
      "url": "https://jcer.in/jcer-docs/E-Learning/Digital%20Library%20/E-Books/Data-Communications-and-Network-5e.pdf"
    }
  ],
  "softwareTools": [
    "Wireshark",
    "Cisco Packet Tracer",
    "Nmap",
    "IP Calculator",
    "Mininet (SDN)"
  ],
  "practicePlatforms": [
    "GeeksforGeeks",
    "Sanfoundry",
    "PacketTracerLabs"
  ],
  "roadmap": {
    "beginner": [
      "Network Topologies & Types (LAN/WAN)",
      "OSI 7-Layer & TCP/IP Reference Models",
      "Physical Layer & Media"
    ],
    "intermediate": [
      "Data Link CRC & Sliding Window Protocols",
      "CSMA/CD Ethernet & MAC Addressing",
      "IPv4 Subnetting & Dijkstra/Bellman-Ford Routing"
    ],
    "advanced": [
      "TCP 3-Way Handshake & Congestion Control",
      "DNS, DHCP, HTTP Application Services",
      "Network Security, Wireless 802.11 & SDN / NFV"
    ]
  },
  "questionBank": {
    "sixMarks": [
      "Differentiate between OSI model and TCP/IP reference model.",
      "Explain subnetting. Divide a class C IP into 4 subnets."
    ],
    "conceptual": [
      "Why is TCP called connection-oriented while UDP is connectionless?",
      "Explain the purpose of ARP (Address Resolution Protocol)."
    ],
    "longAnswer": [
      "Describe the TCP congestion control mechanism with slow start, congestion avoidance, fast retransmit and fast recovery.",
      "Explain how a DNS request is resolved, detailing recursive and iterative queries."
    ]
  },
  "careerPaths": [
    "Network Engineer",
    "Systems Administrator",
    "Cloud Architect",
    "Security Analyst",
    "Network Operations Specialist"
  ]
};
