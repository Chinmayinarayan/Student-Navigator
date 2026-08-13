module.exports = [
  {
    "title": "Network Simulation Basics",
    "slug": "computer-networks-lab-network-simulation-basics",
    "order": 1,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Hands-on introduction to Network Simulation tools (Cisco Packet Tracer, NS2/NS3): UI navigation, node placement, copper straight-through/cross-over cabling, and topology creation.",
    "subTopics": [
      "Introduction to Network Simulation Tools",
      "Cisco Packet Tracer Basics",
      "NS2/NS3 Introduction",
      "Network Topology Creation"
    ],
    "prerequisiteTitles": [],
    "learningObjectives": [
      "Navigate Cisco Packet Tracer interface: Logical & Physical workspaces, Device selection box.",
      "Distinguish Copper Straight-Through (different devices) and Copper Cross-Over (similar devices) cables.",
      "Construct a Star topology with 4 PCs connected to a 2960 Switch."
    ],
    "notes": [
      {
        "title": "Experiment 1: Network Simulation & Topology Creation",
        "content": "EXPERIMENT 1: NETWORK SIMULATION BASICS & TOPOLOGY CREATION\n\nAIM:\nTo explore Cisco Packet Tracer workspace and construct a Star topology connecting 4 Host PCs to a 24-Port Cisco 2960 Switch.\n\nTHEORY:\nNetwork simulators model network behavior without requiring physical hardware. Cisco Packet Tracer allows visual design, IP assignment, and packet simulation (Real-Time vs Simulation Mode).\n\nREQUIREMENTS:\n- Software: Cisco Packet Tracer v8.x / NS3 Simulator\n- Hardware: Host PC with 4GB RAM\n\nPROCEDURE:\n1. Open Cisco Packet Tracer. Drag 1 x 2960 Switch and 4 x Host PCs onto workspace.\n2. Select Connections -> Copper Straight-Through cable. Connect PC0 (FastEthernet0) to Switch (FastEthernet0/1).\n3. Repeat cable connections for PC1 (Fa0/2), PC2 (Fa0/3), and PC3 (Fa0/4).\n4. Click on each PC -> Desktop tab -> IP Configuration. Assign Static IPs:\n   - PC0: 192.168.1.10 / 255.255.255.0\n   - PC1: 192.168.1.11 / 255.255.255.0\n   - PC2: 192.168.1.12 / 255.255.255.0\n   - PC3: 192.168.1.13 / 255.255.255.0\n5. Verify green link lights on switch ports indicating link UP.\n\nOUTPUT / RESULT:\nSuccessful Star topology created with all link lights green and ICMP ping packets successfully sent between PC0 and PC3 in Simulation Mode.\n\nVIVA QUESTIONS & ANSWERS:\nQ1: When do you use a Cross-Over cable vs Straight-Through cable?\nA1: Straight-Through connects different OSI layer devices (PC to Switch, Switch to Router). Cross-Over connects similar layer devices (PC to PC, Switch to Switch, Router to Router).\n\nQ2: What is the difference between Real-Time and Simulation mode in Packet Tracer?\nA2: Real-Time mode processes packets instantly like live hardware; Simulation mode allows step-by-step packet inspection across protocol layers."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Packet Tracer Network Simulator",
        "author": "Jesin A"
      }
    ],
    "practiceLinks": [
      {
        "title": "Cisco Networking Academy Packet Tracer Labs",
        "url": "https://www.netacad.com/courses/packet-tracer"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain when to use Straight-Through vs Cross-Over network cables. (2 Marks)",
        "What is Cisco Packet Tracer and what are its two operation modes? (2 Marks)",
        "State the purpose of a 24-port Ethernet switch in a Star topology. (2 Marks)"
      ],
      "sixMarks": [
        "Write complete step-by-step procedure to set up a 4-PC Star topology in Cisco Packet Tracer, assign static IPs, and verify packet delivery. (6 Marks)",
        "Describe NS2 vs NS3 discrete-event network simulators detailing C++/Python script execution structures. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Network Simulation Tools. Detail Cisco Packet Tracer GUI, device configuration mode CLI, NS3 C++ node creation, NetAnim animation tool, and creating a multi-subnet network topology with routers and switches. (10 Marks)"
      ]
    }
  },
  {
    "title": "Basic Network Configuration",
    "slug": "computer-networks-lab-basic-network-configuration",
    "order": 2,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Configure static IP addresses, subnets, gateways, and execute ICMP diagnostic tools: ping, traceroute, ipconfig/ifconfig, and netstat.",
    "subTopics": [
      "LAN Setup",
      "IP Address Configuration",
      "Subnet Configuration",
      "Network Connectivity Testing",
      "Using Ping Command",
      "Using Traceroute Command"
    ],
    "prerequisiteTitles": [
      "Network Simulation Basics"
    ],
    "learningObjectives": [
      "Configure static IPv4 address, subnet mask, and default gateway on Linux/Windows/Cisco CLI.",
      "Execute `ping` to measure RTT latency, packet loss, and TTL values.",
      "Execute `traceroute` (`tracert`) to map hop-by-hop router paths."
    ],
    "notes": [
      {
        "title": "Experiment 2: IP Configuration & Diagnostic CLI Commands",
        "content": "EXPERIMENT 2: BASIC NETWORK CONFIGURATION & DIAGNOSTIC COMMANDS\n\nAIM:\nTo configure LAN static IP addresses and execute diagnostic CLI utilities (`ping`, `traceroute`, `ifconfig`, `netstat`) to troubleshoot connectivity.\n\nTHEORY:\nNetwork troubleshooting commands verify OSI Layer 1-3 operation. `ping` uses ICMP Echo Request/Reply to test reachability. `traceroute` increments TTL fields (1, 2, 3...) to discover intermediate router hops.\n\nCOMMANDS & CONFIGURATION:\n1. Linux IP Configuration (Terminal):\n   sudo ifconfig eth0 192.168.1.50 netmask 255.255.255.0 up\n   sudo route add default gw 192.168.1.1\n\n2. Connectivity Test (`ping`):\n   ping -c 4 192.168.1.1\n   # Output: 4 packets transmitted, 4 received, 0% packet loss, time 2ms\n\n3. Hop Discovery (`traceroute`):\n   traceroute 8.8.8.8\n   # Output:\n   # 1 192.168.1.1 (192.168.1.1) 1.234 ms\n   # 2 10.100.0.1 (10.100.0.1) 12.456 ms\n   # 3 8.8.8.8 (8.8.8.8) 25.789 ms\n\nOUTPUT / RESULT:\nNetwork connectivity verified. Ping responses received with 0% loss, and traceroute successfully displayed 3 router hops to target.\n\nVIVA QUESTIONS & ANSWERS:\nQ1: What does TTL (Time to Live) in a ping response represent?\nA1: TTL limits packet lifespan to prevent infinite routing loops. Each router decrements TTL by 1.\n\nQ2: How does traceroute discover intermediate router IPs?\nA2: It sends packets with TTL=1, 2, 3... When TTL expires at a router, that router returns an ICMP Time Exceeded message revealing its IP."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "TCP/IP Network Administration",
        "author": "Craig Hunt"
      }
    ],
    "practiceLinks": [
      {
        "title": "Linux Network Troubleshooting Commands Guide",
        "url": "https://www.cyberciti.biz/faq/linux-network-commands/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is the purpose of the `ping` command? Which ICMP messages are used? (2 Marks)",
        "Explain how `traceroute` utilizes TTL values to map network routers. (2 Marks)",
        "Differentiate between `ipconfig` (Windows) and `ifconfig` / `ip addr` (Linux). (2 Marks)"
      ],
      "sixMarks": [
        "Write procedure to configure a 2-subnet LAN in Cisco Packet Tracer with a Router gateway, and demonstrate ping and traceroute commands. (6 Marks)",
        "Describe Linux network CLI commands: `ping`, `traceroute`, `ifconfig`, `netstat`, `arp`, and `nslookup` with output flags. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Basic Network Diagnostics. Detail ICMP header format (Type 8 Echo, Type 0 Reply, Type 11 Time Exceeded), IP address assignment workflows, subnetting verification, and resolving unreachable host errors. (10 Marks)"
      ]
    }
  },
  {
    "title": "Socket Programming",
    "slug": "computer-networks-lab-socket-programming",
    "order": 3,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Write client-server applications using C and Python socket APIs: TCP stream sockets (`socket`, `bind`, `listen`, `accept`, `connect`) and UDP datagram sockets (`sendto`, `recvfrom`).",
    "subTopics": [
      "Introduction to Socket Programming",
      "Client-Server Architecture",
      "TCP Socket Programming",
      "UDP Socket Programming",
      "Simple Client Server Applications"
    ],
    "prerequisiteTitles": [
      "Basic Network Configuration"
    ],
    "learningObjectives": [
      "Understand socket API calls lifecycle for TCP stream and UDP datagram sockets.",
      "Implement a Python / C TCP Echo Client and Server.",
      "Implement a Python UDP Client and Server for message passing."
    ],
    "notes": [
      {
        "title": "Experiment 3: TCP & UDP Socket Programming in Python",
        "content": "EXPERIMENT 3: TCP AND UDP SOCKET PROGRAMMING\n\nAIM:\nTo implement a TCP Echo Client-Server application and a UDP Message Client-Server application in Python.\n\nTHEORY:\nA socket is an endpoint for communication identified by IP Address + Port Number. TCP sockets provide reliable stream communication (`SOCK_STREAM`), while UDP sockets provide lightweight datagram communication (`SOCK_DGRAM`).\n\nCODE:\n1. TCP Server (tcp_server.py):\n   import socket\n   server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n   server_socket.bind(('127.0.0.1', 65432))\n   server_socket.listen(1)\n   print(\"TCP Server listening on port 65432...\")\n   conn, addr = server_socket.accept()\n   print(f\"Connected by {addr}\")\n   data = conn.recv(1024)\n   conn.sendall(data) # Echo back\n   conn.close()\n\n2. TCP Client (tcp_client.py):\n   import socket\n   client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n   client_socket.connect(('127.0.0.1', 65432))\n   client_socket.sendall(b\"Hello Network Server!\")\n   response = client_socket.recv(1024)\n   print(\"Server Echo:\", response.decode())\n   client_socket.close()\n\nOUTPUT:\nServer Output: Connected by ('127.0.0.1', 54321)\nClient Output: Server Echo: Hello Network Server!\n\nVIVA QUESTIONS & ANSWERS:\nQ1: What is the sequence of socket API calls on a TCP server?\nA1: socket() -> bind() -> listen() -> accept() -> recv()/send() -> close().\n\nQ2: Why does UDP not require listen() or accept() calls?\nA2: UDP is connectionless; it transmits datagrams directly using sendto() and recvfrom()."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Unix Network Programming Vol 1",
        "author": "W. Richard Stevens"
      }
    ],
    "practiceLinks": [
      {
        "title": "Python Socket Programming Official Docs",
        "url": "https://docs.python.org/3/library/socket.html"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State socket API functions used by a TCP Server vs TCP Client. (2 Marks)",
        "What is the difference between `SOCK_STREAM` and `SOCK_DGRAM`? (2 Marks)",
        "Why is `bind()` required on server sockets? (2 Marks)"
      ],
      "sixMarks": [
        "Write complete Python code for a TCP Client-Server application where client sends a string and server returns it in UPPERCASE. (6 Marks)",
        "Write C / Python code for a UDP Client-Server program demonstrating `sendto()` and `recvfrom()` API calls. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Socket Programming. Detail socket address structures (`sockaddr_in`), blocking vs non-blocking sockets, multi-threaded TCP server handling multiple simultaneous client connections, and socket error handling routines. (10 Marks)"
      ]
    }
  },
  {
    "title": "Network Protocol Implementation",
    "slug": "computer-networks-lab-network-protocol-implementation",
    "order": 4,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Write C / Python code to simulate Data Link Layer protocols: Stop-and-Wait ARQ, Sliding Window (Go-Back-N / Selective Repeat), and CRC Error Detection.",
    "subTopics": [
      "Implement Stop and Wait Protocol",
      "Implement Sliding Window Protocol",
      "Error Detection using CRC",
      "Checksum Implementation"
    ],
    "prerequisiteTitles": [
      "Socket Programming"
    ],
    "learningObjectives": [
      "Implement Stop-and-Wait ARQ simulation with timer expiration and frame retransmission.",
      "Write Python script for CRC Generator Polynomial modulo-2 binary division.",
      "Simulate Sliding Window sender/receiver window movement."
    ],
    "notes": [
      {
        "title": "Experiment 4: CRC Generator & Stop-and-Wait Protocol Simulation",
        "content": "EXPERIMENT 4: NETWORK PROTOCOL IMPLEMENTATION (CRC & ARQ)\n\nAIM:\nTo write C / Python programs to implement CRC (Cyclic Redundancy Check) Error Detection and simulate Stop-and-Wait ARQ protocol.\n\nTHEORY:\nCRC appends $r$ check bits to data using modulo-2 division by a generator polynomial $G$. Stop-and-Wait ARQ transmits 1 frame and waits for an ACK before sending the next, retransmitting if ACK times out.\n\nCODE (CRC Generator in Python):\ndef crc_division(data, key):\n    l_key = len(key)\n    appended_data = data + '0' * (l_key - 1)\n    temp = list(appended_data)\n    key_list = list(key)\n\n    for i in range(len(data)):\n        if temp[i] == '1':\n            for j in range(l_key):\n                temp[i + j] = str(int(temp[i + j]) ^ int(key_list[j]))\n    return ''.join(temp[-(l_key - 1):])\n\ndata_bits = \"1101011011\"\ngenerator = \"10011\" # x^4 + x + 1\ncrc_bits = crc_division(data_bits, generator)\nprint(\"Data:\", data_bits)\nprint(\"CRC Remainder:\", crc_bits)\nprint(\"Transmitted Codeword:\", data_bits + crc_bits)\n\nOUTPUT:\nData: 1101011011\nCRC Remainder: 1110\nTransmitted Codeword: 11010110111110\n\nVIVA QUESTIONS & ANSWERS:\nQ1: What binary operation is used in modulo-2 division for CRC?\nA1: XOR (Exclusive-OR) addition without carry.\n\nQ2: What happens if CRC remainder at receiver is non-zero?\nA2: Non-zero remainder indicates bit error occurred during transmission; receiver discards the frame."
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
        "title": "GeeksforGeeks CRC Implementation in C",
        "url": "https://www.geeksforgeeks.org/modulo-2-binary-division/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain CRC remainder computation using XOR modulo-2 division. (2 Marks)",
        "How does Stop-and-Wait ARQ handle lost ACK scenarios? (2 Marks)",
        "State the purpose of Internet Checksum algorithm. (2 Marks)"
      ],
      "sixMarks": [
        "Write complete Python/C code to implement CRC error detection generator at sender and error verification at receiver. (6 Marks)",
        "Write a C program to simulate Stop-and-Wait ARQ protocol with timeout and frame corruption simulation. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Protocol Implementation. Detail Go-Back-N vs Selective Repeat sliding window sender/receiver state machines, timeout calculations, CRC polynomial selection criteria ($G(x)$), and Internet Checksum 1's complement addition code. (10 Marks)"
      ]
    }
  },
  {
    "title": "Routing Experiments",
    "slug": "computer-networks-lab-routing-experiments",
    "order": 5,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Configure static and dynamic routing in Cisco Packet Tracer: Static Routes (`ip route`), RIP (`router rip`), OSPF (`router ospf`), and analyze routing tables.",
    "subTopics": [
      "Static Routing Configuration",
      "Distance Vector Routing",
      "Link State Routing",
      "Routing Table Analysis"
    ],
    "prerequisiteTitles": [
      "Basic Network Configuration"
    ],
    "learningObjectives": [
      "Configure Static Routes on Cisco Routers (`ip route <dest-net> <mask> <next-hop>`).",
      "Configure RIPv2 dynamic Distance Vector routing.",
      "Configure OSPF Area 0 Link State routing and inspect routing table (`show ip route`)."
    ],
    "notes": [
      {
        "title": "Experiment 5: Cisco Router Static & Dynamic OSPF Routing CLI",
        "content": "EXPERIMENT 5: STATIC AND DYNAMIC ROUTING CONFIGURATION\n\nAIM:\nTo configure Static Routing and Dynamic OSPF Routing on Cisco Routers in Packet Tracer and inspect routing tables.\n\nTHEORY:\nStatic routing uses manually configured routes. OSPF (Open Shortest Path First) is a dynamic Link-State protocol using Dijkstra's algorithm to automatically calculate shortest paths and update routing tables.\n\nCISCO ROUTER CLI CONFIGURATION:\n1. Static Routing on Router0:\n   Router> enable\n   Router# configure terminal\n   Router(config)# interface FastEthernet0/0\n   Router(config-if)# ip address 192.168.1.1 255.255.255.0\n   Router(config-if)# no shutdown\n   Router(config)# ip route 192.168.2.0 255.255.255.0 10.0.0.2\n\n2. Dynamic OSPF Configuration on Router0:\n   Router(config)# router ospf 1\n   Router(config-router)# network 192.168.1.0 0.0.0.255 area 0\n   Router(config-router)# network 10.0.0.0 0.0.0.3 area 0\n\n3. Routing Table Inspection Command:\n   Router# show ip route\n   # Output:\n   # O 192.168.2.0/24 [110/2] via 10.0.0.2, 00:01:23, FastEthernet0/1\n\nOUTPUT / RESULT:\nRouters successfully exchanged OSPF link-state advertisements (LSAs). End-to-end ping between Host PC in Subnet 1 and Host PC in Subnet 2 succeeded.\n\nVIVA QUESTIONS & ANSWERS:\nQ1: What is the Administrative Distance (AD) of Static Route, OSPF, and RIP?\nA1: Static Route AD = 1, OSPF AD = 110, RIP AD = 120 (Lower AD indicates higher trust).\n\nQ2: What is the wildcard mask for subnet mask 255.255.255.0 in OSPF?\nA2: Wildcard mask = 0.0.0.255."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "CCNA 200-301 Official Cert Guide",
        "author": "Wendell Odom"
      }
    ],
    "practiceLinks": [
      {
        "title": "Cisco Packet Tracer Routing Labs",
        "url": "https://www.netacad.com/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Write Cisco IOS CLI command to configure a static route to network 10.0.0.0/8 via next-hop 192.168.1.254. (2 Marks)",
        "What is Administrative Distance (AD) in Cisco routing? State AD for OSPF and RIP. (2 Marks)",
        "Explain the purpose of `show ip route` command. (2 Marks)"
      ],
      "sixMarks": [
        "Explain step-by-step procedure to configure OSPF Single Area (Area 0) dynamic routing across 3 Cisco Routers in Packet Tracer. (6 Marks)",
        "Differentiate between Static Routing and Dynamic Routing on configuration overhead, scalability, fault convergence, and security. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Routing Experiments. Detail 3-router network topology setup, interface IP assignments, OSPF metric calculation ($Cost = \frac{10^8}{Bandwidth}$), RIPv2 vs OSPF convergence test, and analyzing `show ip route` output codes (C, S, O, R). (10 Marks)"
      ]
    }
  },
  {
    "title": "Network Analysis Tools",
    "slug": "computer-networks-lab-network-analysis-tools",
    "order": 6,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master Wireshark packet capture: Display filters (`ip.addr`, `tcp.port`, `http`), inspecting Ethernet/IP/TCP headers, and analyzing traffic flows.",
    "subTopics": [
      "Wireshark Introduction",
      "Packet Capturing",
      "Packet Analysis",
      "Protocol Identification",
      "Network Traffic Monitoring"
    ],
    "prerequisiteTitles": [
      "Basic Network Configuration"
    ],
    "learningObjectives": [
      "Capture network packets live using Wireshark interface selection.",
      "Apply Wireshark display filters (`ip.src == ...`, `tcp.flags.syn == 1`, `http.request.method == \"GET\"`).",
      "Inspect protocol headers layer-by-layer (Ethernet II -> IPv4 -> TCP -> HTTP)."
    ],
    "notes": [
      {
        "title": "Experiment 6: Wireshark Packet Capture & Filter Analysis",
        "content": "EXPERIMENT 6: WIRESHARK PACKET CAPTURE & TRAFFIC ANALYSIS\n\nAIM:\nTo capture network traffic using Wireshark, apply display filters, and analyze TCP 3-Way Handshake and HTTP GET packets.\n\nTHEORY:\nWireshark is an open-source packet analyzer. It puts Network Interface Card (NIC) into Promiscuous Mode to capture all frames passing through the network segment and decodes protocol headers layer-by-layer.\n\nWIRESHARK DISPLAY FILTER CHEATSHEET:\n- Filter IP Address: `ip.addr == 192.168.1.10`\n- Filter Source IP: `ip.src == 192.168.1.10`\n- Filter HTTP GET Requests: `http.request.method == \"GET\"`\n- Filter TCP SYN Packets: `tcp.flags.syn == 1 and tcp.flags.ack == 0`\n- Filter DNS Traffic: `dns or udp.port == 53`\n\nPROCEDURE & ANALYSIS:\n1. Start Wireshark -> Select active Wi-Fi/Ethernet Interface -> Click Start Capture.\n2. Open Web Browser -> Navigate to `http://example.com`.\n3. Stop Capture in Wireshark.\n4. Type filter `http` in filter bar -> Press Enter.\n5. Select HTTP GET packet -> Inspect Packet Details Pane:\n   - Frame 1: 54 bytes on wire\n   - Ethernet II: Src MAC -> Dst MAC\n   - Internet Protocol Version 4: Src IP -> Dst IP\n   - Transmission Control Protocol: Src Port -> Dst Port 80\n   - Hypertext Transfer Protocol: GET / HTTP/1.1\n\nOUTPUT / RESULT:\nSuccessfully captured and decoded HTTP GET request and TCP 3-way handshake SYN, SYN-ACK, ACK packet sequence.\n\nVIVA QUESTIONS & ANSWERS:\nQ1: What is Promiscuous Mode in Wireshark?\nA1: A NIC mode allowing the card to pass all traffic it receives to the CPU, not just frames addressed to its own MAC.\n\nQ2: How do you filter ONLY TCP port 80 traffic in Wireshark?\nA2: Display filter: `tcp.port == 80`."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Wireshark Network Analysis",
        "author": "Laura Chappell"
      }
    ],
    "practiceLinks": [
      {
        "title": "Wireshark Official Sample Captures",
        "url": "https://wiki.wireshark.org/SampleCaptures"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is Wireshark and what is Promiscuous Mode? (2 Marks)",
        "Write Wireshark display filter syntax to isolate HTTP GET requests from IP 192.168.1.5. (2 Marks)",
        "How can you identify a TCP 3-Way Handshake in a Wireshark capture? (2 Marks)"
      ],
      "sixMarks": [
        "Explain Wireshark 3-pane GUI layout (Packet List, Packet Details, Packet Bytes) and write 5 useful display filters for TCP, UDP, DNS, ICMP, HTTP. (6 Marks)",
        "Write procedure to capture and analyze unencrypted HTTP credentials vs encrypted HTTPS TLS handshake in Wireshark. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Network Packet Analysis with Wireshark. Detail promiscuous mode driver capture mechanisms, pcap file format, analyzing TCP window scaling & retransmissions, follow TCP stream feature, and security packet forensics. (10 Marks)"
      ]
    }
  },
  {
    "title": "Web and Application Protocol Experiments",
    "slug": "computer-networks-lab-web-and-application-protocol-experiments",
    "order": 7,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Analyze application layer protocols: HTTP GET/POST headers, FTP file uploads, DNS lookup (`nslookup`/`dig`), DHCP server configuration in Packet Tracer, and SMTP email headers.",
    "subTopics": [
      "HTTP Request Analysis",
      "FTP Configuration",
      "DNS Lookup",
      "DHCP Configuration",
      "Email Protocol Analysis"
    ],
    "prerequisiteTitles": [
      "Network Analysis Tools"
    ],
    "learningObjectives": [
      "Configure DHCP Server in Cisco Packet Tracer to dynamically assign IP pools.",
      "Analyze HTTP Request/Response headers using cURL and Chrome DevTools.",
      "Execute `nslookup` and `dig` for DNS record queries (A, AAAA, MX, CNAME, TXT)."
    ],
    "notes": [
      {
        "title": "Experiment 7: DNS Lookup & Packet Tracer DHCP Server Setup",
        "content": "EXPERIMENT 7: APPLICATION PROTOCOL ANALYSIS (DNS & DHCP)\n\nAIM:\nTo configure a DHCP Server in Cisco Packet Tracer and execute DNS lookup queries (`nslookup`, `dig`) to analyze application records.\n\nTHEORY:\nDHCP (Dynamic Host Configuration Protocol) dynamically leases IP addresses to clients via DORA sequence. DNS maps domain names to IP addresses via A, MX, CNAME records.\n\nDNS COMMAND EXAMPLES:\n1. Query A Record (`nslookup`):\n   nslookup google.com\n   # Output: Name: google.com, Address: 142.250.190.46\n\n2. Query MX Mail Record (`dig`):\n   dig google.com MX\n   # Output: google.com. 300 IN MX 10 smtp.google.com.\n\nPACKET TRACER DHCP SERVER CONFIGURATION:\n1. Place Server0 -> Services -> DHCP.\n2. Set Service = ON. Pool Name = serverPool.\n3. Default Gateway = 192.168.1.1, DNS Server = 192.168.1.2.\n4. Start IP Address = 192.168.1.10, Subnet Mask = 255.255.255.0. Click Save.\n5. On Host PC -> IP Configuration -> Select DHCP radio button. PC receives 192.168.1.10 automatically.\n\nOUTPUT / RESULT:\nHost PCs successfully acquired IP addresses dynamically from DHCP server pool, and DNS lookup queries returned valid A and MX records.\n\nVIVA QUESTIONS & ANSWERS:\nQ1: What are DNS A, MX, and CNAME records?\nA1: A record maps domain to IPv4; MX record maps domain to mail server; CNAME maps domain to alias domain name.\n\nQ2: Which transport protocol and port does DNS use?\nA2: DNS uses UDP port 53 for standard queries and TCP port 53 for zone transfers."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "DNS and BIND",
        "author": "Cricket Liu, Paul Albitz"
      }
    ],
    "practiceLinks": [
      {
        "title": "Google Public DNS Documentation",
        "url": "https://developers.google.com/speed/public-dns/docs/using"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain the purpose of DNS A, CNAME, and MX record types. (2 Marks)",
        "What is the difference between HTTP GET and POST requests? (2 Marks)",
        "Explain FTP Active vs Passive mode data connections. (2 Marks)"
      ],
      "sixMarks": [
        "Explain DHCP DORA process and write steps to configure a DHCP Server in Cisco Packet Tracer. (6 Marks)",
        "Describe DNS query resolution pipeline and demonstrate `nslookup` and `dig` commands with output analysis. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Web & Application Protocol Analysis. Detail HTTP/1.1 request/response headers, FTP control/data channel commands (PORT/PASV), SMTP email transmission headers, and packet inspection of DNS A/AAAA queries in Wireshark. (10 Marks)"
      ]
    }
  },
  {
    "title": "Wireless Networking Experiments",
    "slug": "computer-networks-lab-wireless-networking-experiments",
    "order": 8,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Configure wireless networks in Cisco Packet Tracer: Wireless Access Point (AP), WPA2-PSK security, Laptop Wi-Fi NIC module, and Bluetooth communication concepts.",
    "subTopics": [
      "Wi-Fi Network Configuration",
      "Wireless Communication Analysis",
      "Bluetooth Communication Basics"
    ],
    "prerequisiteTitles": [
      "Basic Network Configuration"
    ],
    "learningObjectives": [
      "Replace Laptop Ethernet NIC with WPC300N Wireless module in Packet Tracer.",
      "Configure Access Point SSID, Channel, and WPA2-PSK AES encryption.",
      "Analyze wireless signal strength and association."
    ],
    "notes": [
      {
        "title": "Experiment 8: Cisco Packet Tracer Wireless AP & WPA2 Setup",
        "content": "EXPERIMENT 8: WIRELESS NETWORK CONFIGURATION (Wi-Fi 802.11)\n\nAIM:\nTo configure a Wireless LAN (WLAN) with an Access Point (AP) and WPA2-PSK security in Cisco Packet Tracer.\n\nTHEORY:\nIEEE 802.11 WLANs use Access Points to form a Basic Service Set (BSS). WPA2-PSK (Pre-Shared Key) provides secure AES encryption for wireless data frames.\n\nPACKET TRACER PROCEDURE:\n1. Drag 1 x Access Point-PT and 2 x Laptops onto workspace.\n2. Power off Laptop0 -> Remove default RJ-45 Ethernet module -> Insert WPC300N Wireless module -> Power ON Laptop0. Repeat for Laptop1.\n3. Click Access Point0 -> Config tab -> Port 1:\n   - SSID = \"Lab_WiFi_Network\"\n   - Channel = 6 (2.412 GHz)\n   - WPA2-PSK Encryption = AES\n   - Passphrase = \"SecurePassword123\"\n4. Click Laptop0 -> Desktop -> PC Wireless -> Connect tab -> Select \"Lab_WiFi_Network\" -> Enter Passphrase -> Connect.\n5. Verify wireless wave links between Laptops and AP.\n\nOUTPUT / RESULT:\nLaptops successfully associated with Access Point via WPA2-PSK security, and wireless ping packets were transmitted successfully.\n\nVIVA QUESTIONS & ANSWERS:\nQ1: What is an SSID in Wi-Fi networks?\nA1: Service Set Identifier - A 32-character unique name identifying a wireless network.\n\nQ2: Why is WPA2-PSK AES preferred over WEP?\nA2: WEP uses weak RC4 encryption susceptible to cracking in minutes; WPA2 uses strong AES encryption."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "CWNA Certified Wireless Network Administrator Study Guide",
        "author": "David D. Coleman"
      }
    ],
    "practiceLinks": [
      {
        "title": "Cisco Wireless LAN Controller Configuration Guide",
        "url": "https://www.cisco.com/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is an SSID and BSSID in IEEE 802.11 Wi-Fi networks? (2 Marks)",
        "Differentiate between WEP, WPA, and WPA2 wireless security protocols. (2 Marks)",
        "Why is 2.4 GHz Channel 1, 6, 11 selection recommended for Wi-Fi? (2 Marks)"
      ],
      "sixMarks": [
        "Write step-by-step procedure to configure a Wireless Router / AP network with WPA2-PSK security in Cisco Packet Tracer. (6 Marks)",
        "Describe Bluetooth Piconet vs Scatternet master-slave communication architecture. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Wireless Networking Experiments. Detail 802.11 frame format, 4-way WPA2 handshake, CSMA/CA Virtual Carrier Sense (RTS/CTS), and Bluetooth Low Energy (BLE) advertising channels. (10 Marks)"
      ]
    }
  },
  {
    "title": "Network Security Experiments",
    "slug": "computer-networks-lab-network-security-experiments",
    "order": 9,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Configure network security: Cisco Router Access Control Lists (Standard & Extended ACLs), IPTables Linux firewall rules, and OpenSSL encryption.",
    "subTopics": [
      "Firewall Configuration",
      "Encryption and Decryption Basics",
      "Secure Communication Setup"
    ],
    "prerequisiteTitles": [
      "Network Analysis Tools"
    ],
    "learningObjectives": [
      "Configure Cisco Standard (1-99) and Extended (100-199) Access Control Lists (ACLs).",
      "Write Linux `iptables` rules to drop/accept specific IP and port traffic.",
      "Execute OpenSSL commands for AES-256 file encryption and RSA key generation."
    ],
    "notes": [
      {
        "title": "Experiment 9: Cisco Extended ACLs & Linux IPTables Firewall Rules",
        "content": "EXPERIMENT 9: FIREWALL CONFIGURATION & OPENSSL ENCRYPTION\n\nAIM:\nTo configure Cisco Extended Access Control Lists (ACLs) to block HTTP traffic, and write Linux `iptables` firewall rules.\n\nTHEORY:\nFirewalls enforce security policies by inspecting packet headers and filtering traffic. Extended ACLs filter based on Source IP, Destination IP, Protocol (TCP/UDP), and Port number.\n\nCISCO CLI EXTENDED ACL CONFIGURATION:\nBlock Host 192.168.1.10 from accessing Web Server 10.0.0.5 on HTTP Port 80:\nRouter(config)# access-list 101 deny tcp host 192.168.1.10 host 10.0.0.5 eq 80\nRouter(config)# access-list 101 permit ip any any\nRouter(config)# interface FastEthernet0/0\nRouter(config-if)# ip access-group 101 in\n\nLINUX IPTABLES COMMANDS:\n1. Block incoming SSH on Port 22:\n   sudo iptables -A INPUT -p tcp --dport 22 -j DROP\n\n2. Block traffic from specific IP:\n   sudo iptables -A INPUT -s 192.168.1.50 -j REJECT\n\nOPENSSL ENCRYPTION COMMAND:\nopenssl enc -aes-256-cbc -salt -in secret.txt -out secret.enc\n\nOUTPUT / RESULT:\nHTTP request from Host 192.168.1.10 to Web Server was denied by ACL, while all other IP traffic was permitted.\n\nVIVA QUESTIONS & ANSWERS:\nQ1: Differentiate between Standard ACLs and Extended ACLs in Cisco routers.\nA1: Standard ACLs (1-99) filter ONLY based on Source IP address; Extended ACLs (100-199) filter based on Source IP, Destination IP, Protocol, and Port number.\n\nQ2: Where should Standard vs Extended ACLs be placed in a network?\nA2: Standard ACLs are placed closest to Destination; Extended ACLs are placed closest to Source."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Network Security, Firewalls, and VPNs",
        "author": "J. Michael Stewart"
      }
    ],
    "practiceLinks": [
      {
        "title": "Linux IPTables Firewall Guide",
        "url": "https://www.netfilter.org/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between Standard ACLs (1-99) and Extended ACLs (100-199) in Cisco IOS. (2 Marks)",
        "State the placement rule for Standard vs Extended ACLs. (2 Marks)",
        "What is the function of Linux `iptables` firewall? (2 Marks)"
      ],
      "sixMarks": [
        "Write Cisco IOS CLI commands to configure an Extended ACL blocking Host A (192.168.1.5) from accessing Web Server B (10.0.0.100) on Port 80 while allowing all other traffic. (6 Marks)",
        "Describe OpenSSL commands for generating RSA 2048-bit Private/Public key pair and encrypting/decrypting a text file. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Firewall & Security Experiments. Detail Stateful vs Stateless firewall packet evaluation flow, Linux iptables INPUT/FORWARD/OUTPUT chains, Cisco ACL implicit deny all rule, and SSL/TLS certificate installation. (10 Marks)"
      ]
    }
  },
  {
    "title": "Mini Projects",
    "slug": "computer-networks-lab-mini-projects",
    "order": 10,
    "estimatedHours": 6,
    "difficulty": "Advanced",
    "description": "Complete network software development projects: Multi-room Chat Application using Socket Programming, Real-Time Network Packet Analyzer (Scapy/Wireshark API), and Enterprise Network Simulation Project.",
    "subTopics": [
      "Network Monitoring Tool",
      "Chat Application using Socket Programming",
      "Packet Analyzer",
      "Network Simulation Project"
    ],
    "prerequisiteTitles": [
      "Socket Programming",
      "Network Protocol Implementation",
      "Network Security Experiments"
    ],
    "learningObjectives": [
      "Develop a multi-threaded Python TCP Chat Room Application (Server + multiple Clients).",
      "Build a Network Packet Analyzer using Python `scapy` library.",
      "Design an enterprise multi-subnet network simulation project in Packet Tracer."
    ],
    "notes": [
      {
        "title": "Mini Project: Multi-Threaded Python TCP Chat Application Source Code",
        "content": "MINI PROJECT: MULTI-THREADED TCP CHAT ROOM IN PYTHON\n\nAIM:\nTo build a multi-threaded TCP Chat Application allowing multiple clients to broadcast messages in real-time.\n\nTHEORY:\nThe server uses Python's `threading` module to spawn a new thread for each connected client, maintaining a broadcast list of active client sockets.\n\nSOURCE CODE:\n1. Multi-Threaded Server (chat_server.py):\n   import socket\n   import threading\n\n   host = '127.0.0.1'\n   port = 55555\n   server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n   server.bind((host, port))\n   server.listen()\n\n   clients = []\n   nicknames = []\n\n   def broadcast(message):\n       for client in clients:\n           client.send(message)\n\n   def handle(client):\n       while True:\n           try:\n               message = client.recv(1024)\n               broadcast(message)\n           except:\n               index = clients.index(client)\n               clients.remove(client)\n               client.close()\n               nickname = nicknames[index]\n               broadcast(f'{nickname} left the chat!'.encode('ascii'))\n               nicknames.remove(nickname)\n               break\n\n   def receive():\n       while True:\n           client, address = server.accept()\n           print(f\"Connected with {str(address)}\")\n           client.send('NICK'.encode('ascii'))\n           nickname = client.recv(1024).decode('ascii')\n           nicknames.append(nickname)\n           clients.append(client)\n           print(f\"Nickname of client is {nickname}\")\n           broadcast(f\"{nickname} joined the chat!\".encode('ascii'))\n           thread = threading.Thread(target=handle, args=(client,))\n           thread.start()\n\n   print(\"Server Running...\")\n   receive()\n\nOUTPUT:\nServer broadcasts messages to all connected clients in real-time.\n\nVIVA QUESTIONS & ANSWERS:\nQ1: Why is multi-threading necessary for a chat server?\nA1: To handle blocking `recv()` calls for multiple clients concurrently without freezing the main server thread."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Python Network Programming Cookbook",
        "author": "Dr. M. O. Faruque Sarker"
      }
    ],
    "practiceLinks": [
      {
        "title": "Scapy Network Packet Analysis Python Guide",
        "url": "https://scapy.readthedocs.io/en/latest/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Why is multi-threading required in a multi-client TCP chat server? (2 Marks)",
        "What is Scapy in Python and what is it used for? (2 Marks)",
        "Outline components of an enterprise network simulation project. (2 Marks)"
      ],
      "sixMarks": [
        "Design architecture and write Python code for a Multi-Threaded TCP Chat Room Server and Client. (6 Marks)",
        "Write a Python script using `scapy` library to capture IP packets and count ICMP/TCP/UDP packet statistics. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Computer Networks Lab Projects. Detail full system design for an Enterprise Network Simulation (VPC, Router OSPF, VLANs, Switch Security, DHCP Server, Firewalls, Web Server) and source code for a real-time network packet analyzer. (10 Marks)"
      ]
    }
  }
];
