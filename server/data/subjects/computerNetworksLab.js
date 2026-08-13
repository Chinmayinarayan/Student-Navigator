module.exports = {
  "name": "Computer Networks Lab",
  "description": "Master practical Computer Networks Lab experiments: Network simulation (Cisco Packet Tracer, NS2/NS3), Basic Network Configuration & IP diagnostics (ping, traceroute, ifconfig), C/Python TCP/UDP Socket Programming, Data Link Protocols (CRC, Stop-and-Wait, Sliding Window), Cisco Router Routing Experiments (Static, RIP, OSPF), Wireshark Packet Analysis, Web & Application Protocols (HTTP, DNS, DHCP), Wireless Networking (802.11 Wi-Fi, WPA2-PSK), Network Security (Cisco ACLs, Linux iptables, OpenSSL), and Mini Projects (Multi-threaded Chat App, Scapy Packet Analyzer).",
  "concepts": [
    {
      "title": "Network Simulation Basics",
      "topics": [
        "Introduction to Network Simulation Tools",
        "Cisco Packet Tracer Basics",
        "NS2/NS3 Introduction",
        "Network Topology Creation"
      ]
    },
    {
      "title": "Basic Network Configuration",
      "topics": [
        "LAN Setup",
        "IP Address Configuration",
        "Subnet Configuration",
        "Network Connectivity Testing",
        "Using Ping Command",
        "Using Traceroute Command"
      ]
    },
    {
      "title": "Socket Programming",
      "topics": [
        "Introduction to Socket Programming",
        "Client-Server Architecture",
        "TCP Socket Programming",
        "UDP Socket Programming",
        "Simple Client Server Applications"
      ]
    },
    {
      "title": "Network Protocol Implementation",
      "topics": [
        "Implement Stop and Wait Protocol",
        "Implement Sliding Window Protocol",
        "Error Detection using CRC",
        "Checksum Implementation"
      ]
    },
    {
      "title": "Routing Experiments",
      "topics": [
        "Static Routing Configuration",
        "Distance Vector Routing",
        "Link State Routing",
        "Routing Table Analysis"
      ]
    },
    {
      "title": "Network Analysis Tools",
      "topics": [
        "Wireshark Introduction",
        "Packet Capturing",
        "Packet Analysis",
        "Protocol Identification",
        "Network Traffic Monitoring"
      ]
    },
    {
      "title": "Web and Application Protocol Experiments",
      "topics": [
        "HTTP Request Analysis",
        "FTP Configuration",
        "DNS Lookup",
        "DHCP Configuration",
        "Email Protocol Analysis"
      ]
    },
    {
      "title": "Wireless Networking Experiments",
      "topics": [
        "Wi-Fi Network Configuration",
        "Wireless Communication Analysis",
        "Bluetooth Communication Basics"
      ]
    },
    {
      "title": "Network Security Experiments",
      "topics": [
        "Firewall Configuration",
        "Encryption and Decryption Basics",
        "Secure Communication Setup"
      ]
    },
    {
      "title": "Mini Projects",
      "topics": [
        "Network Monitoring Tool",
        "Chat Application using Socket Programming",
        "Packet Analyzer",
        "Network Simulation Project"
      ]
    }
  ],
  "youtubeResources": [
    {
      "title": "Cisco Networking Academy",
      "url": "https://www.netacad.com/cisco-packet-tracer"
    },
    {
      "title": "Practical Networking",
      "url": "https://www.youtube.com/@PracticalNetworking"
    },
    {
      "title": "Neso Academy – Computer Networks",
      "url": "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx"
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
      "author": "Tanenbaum",
      "url": "https://theswissbay.ch/pdf/Gentoomen%20Library/Networking/Prentice%20Hall%20-%20Computer%20Networks%20Tanenbaum%204ed.pdf"
    },
    {
      "title": "Wireshark User's Guide",
      "author": "Wireshark team",
      "url": "https://www.inf.ufes.br/~zegonc/material/Redes_de_Computadores/Wireshark-user-guide-a4.pdf"
    }
  ],
  "softwareTools": [
    "Cisco Packet Tracer",
    "Wireshark",
    "Python 3 & Scapy",
    "GCC C Compiler",
    "OpenSSL",
    "Linux Terminal"
  ],
  "practicePlatforms": [
    "PacketTracerLabs",
    "Sanfoundry",
    "GeeksforGeeks Lab"
  ],
  "roadmap": {
    "beginner": [
      "Packet Tracer Topology Basics & LAN Setup",
      "Static IP Configuration & Ping / Traceroute Diagnostics",
      "Cisco Router Basic Interface Commands"
    ],
    "intermediate": [
      "C/Python TCP & UDP Socket Programming",
      "CRC Error Detection Code & Stop-and-Wait Simulation",
      "Cisco Router Static & OSPF Routing CLI"
    ],
    "advanced": [
      "Wireshark Packet Display Filtering & Flow Analysis",
      "Cisco Extended ACLs & Linux IPTables Firewall Rules",
      "Multi-Threaded Python TCP Chat Room & Scapy Analyzer"
    ]
  },
  "questionBank": {
    "sixMarks": [
      "Write a Python socket program for a simple TCP echo server.",
      "Describe steps to configure static routing using Cisco Packet Tracer."
    ],
    "conceptual": [
      "Explain the function of ping and traceroute commands.",
      "What is a network frame vs network packet?"
    ],
    "longAnswer": [
      "Write a Python client-server socket program where the client sends a file name, and the server returns the file contents or error.",
      "Explain VLANs. Detail the commands to configure a switch port as Access or Trunk mode."
    ]
  },
  "careerPaths": [
    "Network Engineer",
    "Network Administrator",
    "Systems Analyst",
    "Network Security Specialist"
  ],
  "difficulty": "Medium"
};
