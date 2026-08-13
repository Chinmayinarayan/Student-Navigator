require('dotenv').config();
const connectDB = require('../config/db');
const Subject = require('../models/Subject');
const Topic = require('../models/Topic');
const CodingProblem = require('../models/CodingProblem');

const REFACTORED_WIRELESS_PROBLEMS = {
  intro: [
    {
      title: "Create a 2-Node Wireless Network Simulation",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://inet.omnetpp.org/docs/tutorials/wireless/doc/step1.html",
      placementImportance: "Essential",
      tags: ["Wireless", "OMNeT++", "INET"],
      description: "Configure two wireless host nodes in OMNeT++/INET and establish a basic wireless communication medium."
    },
    {
      title: "Simulate UDP Packet Transmission between Nodes",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://inet.omnetpp.org/docs/tutorials/wireless/doc/step1.html",
      placementImportance: "Essential",
      tags: ["UDP", "INET", "Simulation"],
      description: "Setup UdpBasicApp on hostA sending periodic packets to UdpSinkApp on hostB."
    },
    {
      title: "Measure Packets Sent and Received Statistics",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://inet.omnetpp.org/docs/tutorials/wireless/doc/index.html",
      placementImportance: "Essential",
      tags: ["OMNeT++", "Analysis", "Packet Statistics"],
      description: "Analyze .sca and .vec result files to compute total packet delivery ratio."
    }
  ],
  fundamentals: [
    {
      title: "Simulate Wireless Transmission Range",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://inet.omnetpp.org/docs/tutorials/wireless/doc/index.html",
      placementImportance: "Essential",
      tags: ["Transmission Range", "Radio"],
      description: "Model transmission range limits and observe signal attenuation over distance."
    },
    {
      title: "Transmission Power & Packet Delivery Observation",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://inet.omnetpp.org/docs/tutorials/wireless/doc/index.html",
      placementImportance: "Essential",
      tags: ["Power", "Packet Loss", "Signal"],
      description: "Vary transmitter power (mW) and record the effect on packet error rate (PER)."
    },
    {
      title: "Multi-Node Distance and Path Loss Simulation",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://inet.omnetpp.org/docs/tutorials/wireless/doc/index.html",
      placementImportance: "Essential",
      tags: ["Path Loss", "Multi-Node"],
      description: "Deploy 5 nodes at incremental distances and model log-distance path loss."
    }
  ],
  cellular: [
    {
      title: "Simulate Mobile Users & Cellular Mobility",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://www.nsnam.org/documentation/",
      placementImportance: "Essential",
      tags: ["Cellular", "Mobility", "NS-3"],
      description: "Simulate user equipment (UE) moving across hexagonal cell boundaries."
    },
    {
      title: "Cellular Handover Simulation",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://www.nsnam.org/documentation/",
      placementImportance: "Essential",
      tags: ["Handover", "eNodeB", "Cellular"],
      description: "Model seamless handover of active sessions between adjacent base stations."
    }
  ],
  generations: [
    {
      title: "LTE / 5G Basic Simulation & Throughput",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://www.nsnam.org/documentation/",
      placementImportance: "Essential",
      tags: ["LTE", "5G", "Throughput"],
      description: "Benchmark basic LTE data rate and latency across downlink streams."
    },
    {
      title: "5G NR Advanced mmWave Beamforming Simulation",
      difficulty: "Hard",
      platform: "Custom",
      problemUrl: "https://www.nsnam.org/documentation/",
      placementImportance: "Optional",
      tags: ["5G NR", "Beamforming", "Advanced", "Optional"],
      description: "Simulate mmWave directional beamforming and user tracking in high-density urban environments."
    }
  ],
  architectures: [
    {
      title: "Infrastructure vs Ad-Hoc Wireless Simulation",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://inet.omnetpp.org/docs/tutorials/wireless/doc/index.html",
      placementImportance: "Essential",
      tags: ["Infrastructure", "Ad-Hoc", "Architecture"],
      description: "Compare packet delivery and latency between Access Point (BSS) and direct Peer-to-Peer (IBSS) modes."
    }
  ],
  wlan: [
    {
      title: "Wi-Fi (802.11) Multi-Station Setup",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://inet.omnetpp.org/docs/tutorials/wireless/doc/index.html",
      placementImportance: "Essential",
      tags: ["Wi-Fi", "802.11", "WLAN"],
      description: "Configure an IEEE 802.11 Access Point serving multiple competing wireless stations."
    },
    {
      title: "Wi-Fi Throughput, Latency & Packet-Loss Measurement",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://inet.omnetpp.org/docs/tutorials/wireless/doc/index.html",
      placementImportance: "Essential",
      tags: ["Throughput", "Latency", "Metrics"],
      description: "Measure saturated network throughput under high concurrency in Wi-Fi networks."
    }
  ],
  mac: [
    {
      title: "CSMA/CA Protocol Simulation & Collision Avoidance",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://inet.omnetpp.org/docs/tutorials/wireless/doc/index.html",
      placementImportance: "Essential",
      tags: ["CSMA/CA", "MAC Layer", "Collisions"],
      description: "Simulate carrier sensing, random backoff timers, and RTS/CTS handshake mechanisms."
    },
    {
      title: "ACK Mechanism & Packet Delivery Ratio in MAC Layer",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://inet.omnetpp.org/docs/tutorials/wireless/doc/index.html",
      placementImportance: "Essential",
      tags: ["ACK", "MAC", "Reliability"],
      description: "Measure retransmission behavior and timeout intervals upon lost frame ACKs."
    }
  ],
  protocols: [
    {
      title: "UDP/IPv4 Communication in Wireless Nodes",
      difficulty: "Easy",
      platform: "Custom",
      problemUrl: "https://inet.omnetpp.org/docs/tutorials/wireless/doc/index.html",
      placementImportance: "Essential",
      tags: ["IPv4", "UDP", "Routing"],
      description: "Configure network-layer routing tables and verify multi-hop forwarding."
    },
    {
      title: "AODV Reactive Routing in Mobile Networks",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://inet.omnetpp.org/docs/tutorials/wireless/doc/index.html",
      placementImportance: "Essential",
      tags: ["AODV", "Routing", "Protocols"],
      description: "Simulate Route Request (RREQ), Route Reply (RREP), and Route Error (RERR) packet dynamics."
    }
  ],
  manet: [
    {
      title: "MANET 5-Node Dynamic Mobility Simulation",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://inet.omnetpp.org/docs/tutorials/wireless/doc/index.html",
      placementImportance: "Essential",
      tags: ["MANET", "Ad-Hoc", "Mobility"],
      description: "Simulate a mobile ad-hoc network with random waypoint mobility and dynamic route reconfiguration."
    }
  ],
  wsn: [
    {
      title: "WSN Sensor-to-Sink Data Collection",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://www.youtube.com/watch?v=8qjSCbJ0t0E",
      placementImportance: "Essential",
      tags: ["WSN", "Sensor Networks", "Sink"],
      description: "Deploy 10 sensor nodes transmitting periodic sensor telemetry to a central sink gateway."
    },
    {
      title: "WSN Node Energy Modeling & Battery Depletion",
      difficulty: "Hard",
      platform: "Custom",
      problemUrl: "https://www.youtube.com/watch?v=8qjSCbJ0t0E",
      placementImportance: "Optional",
      tags: ["WSN", "Energy Model", "Optional", "Advanced"],
      description: "Model energy consumption across Sleep, Idle, Transmit, and Receive states."
    }
  ],
  iot: [
    {
      title: "IoT Sensor-to-Gateway Communication",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://inet.omnetpp.org/docs/tutorials/index.html",
      placementImportance: "Essential",
      tags: ["IoT", "Sensor", "Gateway"],
      description: "Model constrained IoT devices reporting environmental data to an edge gateway."
    }
  ],
  appNetworking: [
    {
      title: "TCP vs UDP Wireless Performance Comparison",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://inet.omnetpp.org/docs/tutorials/wireless/doc/index.html",
      placementImportance: "Essential",
      tags: ["TCP vs UDP", "Transport Layer", "Performance"],
      description: "Compare throughput and latency of connection-oriented TCP vs lightweight UDP over lossy wireless channels."
    }
  ],
  security: [
    {
      title: "Wireless Network Anomaly Detection ML Model",
      difficulty: "Hard",
      platform: "Custom",
      problemUrl: "https://www.kaggle.com/datasets/orvile/wireless-network-anomaly-detection-dataset",
      placementImportance: "Optional",
      tags: ["Security", "Machine Learning", "Anomaly Detection", "Optional"],
      description: "Train a machine learning classifier to detect rogue access points and abnormal traffic spikes."
    },
    {
      title: "Wireless Cyber Attack Analysis (ARP & SYN Flood)",
      difficulty: "Hard",
      platform: "Custom",
      problemUrl: "https://www.kaggle.com/datasets/aleksandarraki/cyber-attack-dataset-arp-syn-ping-flood",
      placementImportance: "Optional",
      tags: ["Cyber Security", "Dataset", "Optional"],
      description: "Analyze attack signatures for wireless ARP spoofing and Denial of Service flooding."
    }
  ],
  performanceAnalysis: [
    {
      title: "Wireless Network Performance Analysis (Throughput, PDR, Delay)",
      difficulty: "Medium",
      platform: "Custom",
      problemUrl: "https://docs.omnetpp.org/",
      placementImportance: "Essential",
      tags: ["Analysis", "Python", "Metrics"],
      description: "Parse network simulation logs using Python/Pandas to generate publication-grade performance charts."
    }
  ],
  advancedTech: [
    {
      title: "Multi-Radio Heterogeneous Networks Simulation",
      difficulty: "Hard",
      platform: "Custom",
      problemUrl: "https://inet.omnetpp.org/docs/showcases/wireless/multiradio/doc/index.html",
      placementImportance: "Optional",
      tags: ["Multi-Radio", "Heterogeneous", "Optional"],
      description: "Simulate dual-radio nodes capable of simultaneous LTE and Wi-Fi data offloading."
    },
    {
      title: "5G NR and Wi-Fi Coexistence Simulation",
      difficulty: "Hard",
      platform: "Custom",
      problemUrl: "https://www.nsnam.org/documentation/",
      placementImportance: "Optional",
      tags: ["5G NR", "Wi-Fi", "Coexistence", "Optional"],
      description: "Evaluate unlicensed band spectrum sharing (NR-U) between cellular and Wi-Fi systems."
    }
  ],
  capstone: [
    {
      title: "Capstone: End-to-End MANET Routing & Performance Simulation",
      difficulty: "Hard",
      platform: "Custom",
      problemUrl: "https://inet.omnetpp.org/docs/tutorials/wireless/doc/index.html",
      placementImportance: "Optional",
      tags: ["Capstone", "MANET", "Simulation", "Optional"],
      description: "Design a comprehensive multi-node MANET with mobile users, dynamic routing, and automated QoS evaluation."
    }
  ]
};

const refactorWireless = async () => {
  try {
    await connectDB();

    const subject = await Subject.findOne({ name: /^Wireless and Mobile Networks/i });
    if (!subject) {
      console.log('❌ Wireless and Mobile Networks subject not found');
      process.exit(1);
    }

    console.log(`\n🔧 Refactoring "${subject.name}"...`);
    const topics = await Topic.find({ subject: subject._id }).sort({ order: 1 });

    const topicIds = topics.map(t => t._id);
    await CodingProblem.deleteMany({ topic: { $in: topicIds } });

    const mapping = [
      { pattern: /Introduction to Wireless and Mobile/i, problems: REFACTORED_WIRELESS_PROBLEMS.intro },
      { pattern: /Wireless Communication Fundamentals/i, problems: REFACTORED_WIRELESS_PROBLEMS.fundamentals },
      { pattern: /Cellular Communication Concepts/i, problems: REFACTORED_WIRELESS_PROBLEMS.cellular },
      { pattern: /Generations of Mobile Networks/i, problems: REFACTORED_WIRELESS_PROBLEMS.generations },
      { pattern: /Wireless Network Architectures/i, problems: REFACTORED_WIRELESS_PROBLEMS.architectures },
      { pattern: /Wireless LAN Technologies/i, problems: REFACTORED_WIRELESS_PROBLEMS.wlan },
      { pattern: /Medium Access Control in Wireless/i, problems: REFACTORED_WIRELESS_PROBLEMS.mac },
      { pattern: /Mobile Network Protocols/i, problems: REFACTORED_WIRELESS_PROBLEMS.protocols },
      { pattern: /Mobile Ad Hoc Networks/i, problems: REFACTORED_WIRELESS_PROBLEMS.manet },
      { pattern: /Wireless Sensor Networks/i, problems: REFACTORED_WIRELESS_PROBLEMS.wsn },
      { pattern: /Internet of Things and Wireless/i, problems: REFACTORED_WIRELESS_PROBLEMS.iot },
      { pattern: /Mobile Application Networking/i, problems: REFACTORED_WIRELESS_PROBLEMS.appNetworking },
      { pattern: /Wireless Network Security/i, problems: REFACTORED_WIRELESS_PROBLEMS.security },
      { pattern: /Performance Analysis of Wireless/i, problems: REFACTORED_WIRELESS_PROBLEMS.performanceAnalysis },
      { pattern: /Advanced Wireless Technologies/i, problems: REFACTORED_WIRELESS_PROBLEMS.advancedTech },
      { pattern: /Practical Applications and Projects/i, problems: REFACTORED_WIRELESS_PROBLEMS.capstone }
    ];

    let totalEssential = 0;
    let totalOptional = 0;

    for (const item of mapping) {
      const topic = topics.find(t => item.pattern.test(t.title));
      if (topic) {
        const toInsert = item.problems.map((p, idx) => {
          if (p.placementImportance === 'Optional') totalOptional++;
          else totalEssential++;
          return {
            topic: topic._id,
            title: p.title,
            description: p.description || `Wireless simulation lab challenge for ${topic.title}.`,
            difficulty: p.difficulty,
            platform: p.platform,
            problemUrl: p.problemUrl,
            placementImportance: p.placementImportance || "Essential",
            tags: p.tags || [topic.title],
            order: idx + 1,
            estimatedMinutes: p.difficulty === 'Hard' ? 60 : p.difficulty === 'Medium' ? 40 : 25,
            isPublished: true
          };
        });
        await CodingProblem.insertMany(toInsert);
        console.log(`   ✅ "${topic.title}": ${toInsert.length} challenges`);
      }
    }

    console.log(`\n🎉 Refactored Wireless and Mobile Networks! Core Essential: ${totalEssential}, Optional/Advanced: ${totalOptional}. Total: ${totalEssential + totalOptional}`);
    process.exit(0);
  } catch (err) {
    console.error('❌ Error:', err);
    process.exit(1);
  }
};

refactorWireless();
