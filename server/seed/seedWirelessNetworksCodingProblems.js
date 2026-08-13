require('dotenv').config();
const connectDB = require('../config/db');
const Subject = require('../models/Subject');
const Topic = require('../models/Topic');
const CodingProblem = require('../models/CodingProblem');

const WIRELESS_NETWORKS_PROBLEMS = [
  {
    topicPattern: /Introduction to Wireless and Mobile Networks/i,
    problems: [
      {
        title: "Create a 2-Node Wireless Network Simulation",
        difficulty: "Easy",
        platform: "Custom",
        problemUrl: "https://inet.omnetpp.org/docs/tutorials/wireless/doc/step1.html",
        tags: ["Wireless", "INET", "OMNeT++", "Simulation"]
      },
      {
        title: "Simulate UDP Packet Transmission between Wireless Nodes",
        difficulty: "Easy",
        platform: "Custom",
        problemUrl: "https://inet.omnetpp.org/docs/tutorials/wireless/doc/step1.html",
        tags: ["UDP", "Packets", "INET"]
      },
      {
        title: "Measure Packets Sent and Received Statistics",
        difficulty: "Easy",
        platform: "Custom",
        problemUrl: "https://inet.omnetpp.org/docs/tutorials/wireless/doc/index.html",
        tags: ["Statistics", "Packet Loss", "INET"]
      }
    ]
  },
  {
    topicPattern: /Wireless Communication Fundamentals/i,
    problems: [
      {
        title: "Simulate Wireless Transmission Range & Radio Medium",
        difficulty: "Easy",
        platform: "Custom",
        problemUrl: "https://inet.omnetpp.org/docs/tutorials/wireless/doc/index.html",
        tags: ["Radio Medium", "Transmission Range", "INET"]
      },
      {
        title: "Transmission Power & Packet Delivery Observation",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://inet.omnetpp.org/docs/tutorials/wireless/doc/index.html",
        tags: ["Power Control", "Signal Strength", "INET"]
      },
      {
        title: "Multi-Node Distance and Path Loss Simulation",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://inet.omnetpp.org/docs/tutorials/wireless/doc/index.html",
        tags: ["Path Loss", "Propagation", "INET"]
      }
    ]
  },
  {
    topicPattern: /Cellular Communication Concepts/i,
    problems: [
      {
        title: "Simulate Mobile Users and Handover in Cellular Nodes",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://www.nsnam.org/documentation/",
        tags: ["Cellular", "Handover", "NS-3"]
      },
      {
        title: "Mobile Node to Base Station (eNodeB) Throughput Modeling",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://www.nsnam.org/documentation/",
        tags: ["Throughput", "Base Station", "NS-3"]
      },
      {
        title: "Cellular User Mobility & Packet Loss Analysis",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://www.nsnam.org/documentation/",
        tags: ["Mobility", "Packet Loss", "NS-3"]
      }
    ]
  },
  {
    topicPattern: /Generations of Mobile Networks/i,
    problems: [
      {
        title: "4G LTE & 5G NR Network Simulation in NS-3",
        difficulty: "Hard",
        platform: "Custom",
        problemUrl: "https://www.nsnam.org/documentation/",
        tags: ["5G", "LTE", "NS-3", "Generations"]
      },
      {
        title: "5G/LTE Throughput, Latency & Packet-Loss Benchmarking",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://www.nsnam.org/documentation/",
        tags: ["5G Benchmarks", "Latency", "Throughput"]
      }
    ]
  },
  {
    topicPattern: /Wireless Network Architectures/i,
    problems: [
      {
        title: "Infrastructure vs Ad-Hoc Wireless Network Simulation",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://inet.omnetpp.org/docs/tutorials/wireless/doc/index.html",
        tags: ["Infrastructure", "Ad-Hoc", "Architecture"]
      },
      {
        title: "Wireless Multi-Hop Routing Configuration",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://inet.omnetpp.org/docs/tutorials/wireless/doc/index.html",
        tags: ["Multi-Hop", "Routing", "INET"]
      }
    ]
  },
  {
    topicPattern: /Wireless LAN Technologies/i,
    problems: [
      {
        title: "Wi-Fi (802.11) Network Setup with Multiple Stations",
        difficulty: "Easy",
        platform: "Custom",
        problemUrl: "https://inet.omnetpp.org/docs/tutorials/wireless/doc/index.html",
        tags: ["802.11", "Wi-Fi", "WLAN", "INET"]
      },
      {
        title: "Wi-Fi Throughput, Range & Interference Simulation",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://inet.omnetpp.org/docs/tutorials/wireless/doc/index.html",
        tags: ["Interference", "Throughput", "WLAN"]
      }
    ]
  },
  {
    topicPattern: /Medium Access Control in Wireless/i,
    problems: [
      {
        title: "CSMA/CA Implementation & Collision Simulation",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://inet.omnetpp.org/docs/tutorials/wireless/doc/index.html",
        tags: ["MAC", "CSMA/CA", "Collisions"]
      },
      {
        title: "ACK Mechanism & Packet Delivery Ratio in MAC Layer",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://inet.omnetpp.org/docs/tutorials/wireless/doc/index.html",
        tags: ["ACK", "MAC", "PDR"]
      }
    ]
  },
  {
    topicPattern: /Mobile Network Protocols/i,
    problems: [
      {
        title: "UDP Communication & IPv4 Routing in Wireless Nodes",
        difficulty: "Easy",
        platform: "Custom",
        problemUrl: "https://inet.omnetpp.org/docs/tutorials/wireless/doc/index.html",
        tags: ["Protocols", "UDP", "IPv4", "INET"]
      },
      {
        title: "AODV vs Static Routing Simulation in Mobile Networks",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://inet.omnetpp.org/docs/tutorials/wireless/doc/index.html",
        tags: ["AODV", "Routing Protocols", "INET"]
      }
    ]
  },
  {
    topicPattern: /Mobile Ad Hoc Networks/i,
    problems: [
      {
        title: "5-Node MANET Simulation with Node Mobility",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://inet.omnetpp.org/docs/tutorials/wireless/doc/index.html",
        tags: ["MANET", "Mobility", "AODV"]
      },
      {
        title: "AODV Routing Overhead & PDR Analysis in MANETs",
        difficulty: "Hard",
        platform: "Custom",
        problemUrl: "https://www.youtube.com/watch?v=ifhERgsg9c8",
        tags: ["MANET", "AODV", "OMNeT++"]
      }
    ]
  },
  {
    topicPattern: /Wireless Sensor Networks/i,
    problems: [
      {
        title: "Wireless Sensor Network (WSN) Sensor-to-Sink Simulation",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://www.youtube.com/watch?v=8qjSCbJ0t0E",
        tags: ["WSN", "Sensor Nodes", "Sink", "OMNeT++"]
      },
      {
        title: "WSN Node Mobility & Energy Consumption Analysis",
        difficulty: "Hard",
        platform: "Custom",
        problemUrl: "https://www.youtube.com/watch?v=8qjSCbJ0t0E",
        tags: ["Energy Modeling", "WSN", "Batteries"]
      }
    ]
  },
  {
    topicPattern: /Internet of Things and Wireless Networks/i,
    problems: [
      {
        title: "IoT Sensor Nodes to Gateway Simulation",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://inet.omnetpp.org/docs/tutorials/index.html",
        tags: ["IoT", "Sensors", "Gateway", "INET"]
      },
      {
        title: "Periodic Sensor Data Generation & IoT Traffic Profiling",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://inet.omnetpp.org/docs/tutorials/index.html",
        tags: ["Traffic Analysis", "IoT", "PDR"]
      }
    ]
  },
  {
    topicPattern: /Mobile Application Networking/i,
    problems: [
      {
        title: "Client-Server Wireless Application (TCP vs UDP)",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://inet.omnetpp.org/docs/tutorials/wireless/doc/index.html",
        tags: ["Client-Server", "TCP", "UDP", "Wi-Fi"]
      },
      {
        title: "Application Throughput & End-to-End Delay Measurement",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://inet.omnetpp.org/docs/tutorials/wireless/doc/index.html",
        tags: ["Throughput", "Latency", "Delay"]
      }
    ]
  },
  {
    topicPattern: /Wireless Network Security/i,
    problems: [
      {
        title: "Wireless Network Anomaly Detection Dataset & ML Model",
        difficulty: "Hard",
        platform: "Custom",
        problemUrl: "https://www.kaggle.com/datasets/orvile/wireless-network-anomaly-detection-dataset",
        tags: ["Security", "Anomaly Detection", "Machine Learning", "Kaggle"]
      },
      {
        title: "Wireless Cyber Attack Dataset (ARP, SYN, Ping Flood Detection)",
        difficulty: "Hard",
        platform: "Custom",
        problemUrl: "https://www.kaggle.com/datasets/aleksandarraki/cyber-attack-dataset-arp-syn-ping-flood",
        tags: ["Cyber Attacks", "DoS", "Security", "Kaggle"]
      }
    ]
  },
  {
    topicPattern: /Performance Analysis of Wireless Networks/i,
    problems: [
      {
        title: "Wireless Network Metrics (Throughput, PDR, Delay) with Python/Pandas",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://docs.omnetpp.org/",
        tags: ["Python", "Pandas", "Performance Analysis", "OMNeT++"]
      },
      {
        title: "Routing Protocol Comparative Analysis Suite",
        difficulty: "Medium",
        platform: "Custom",
        problemUrl: "https://docs.omnetpp.org/",
        tags: ["Protocols", "Benchmarking", "Analytics"]
      }
    ]
  },
  {
    topicPattern: /Advanced Wireless Technologies/i,
    problems: [
      {
        title: "Multi-Radio Heterogeneous Wireless Networks Simulation",
        difficulty: "Hard",
        platform: "Custom",
        problemUrl: "https://inet.omnetpp.org/docs/showcases/wireless/multiradio/doc/index.html",
        tags: ["Multi-Radio", "Heterogeneous", "INET"]
      },
      {
        title: "5G NR & Wi-Fi Coexistence Simulation in NS-3",
        difficulty: "Hard",
        platform: "Custom",
        problemUrl: "https://www.nsnam.org/documentation/",
        tags: ["5G NR", "Wi-Fi Coexistence", "NS-3"]
      }
    ]
  },
  {
    topicPattern: /Practical Applications and Projects/i,
    problems: [
      {
        title: "Capstone Project 1: MANET Simulation with AODV Routing",
        difficulty: "Hard",
        platform: "Custom",
        problemUrl: "https://inet.omnetpp.org/docs/tutorials/wireless/doc/index.html",
        tags: ["Project", "MANET", "AODV"]
      },
      {
        title: "Capstone Project 2: WSN Sensor-to-Sink & Energy Modeling Simulation",
        difficulty: "Hard",
        platform: "Custom",
        problemUrl: "https://www.youtube.com/watch?v=8qjSCbJ0t0E",
        tags: ["Project", "WSN", "Energy"]
      },
      {
        title: "Capstone Project 3: Wireless Network Anomaly Detection with Machine Learning",
        difficulty: "Hard",
        platform: "Custom",
        problemUrl: "https://www.kaggle.com/datasets/orvile/wireless-network-anomaly-detection-dataset",
        tags: ["Project", "Security", "ML", "Kaggle"]
      },
      {
        title: "Capstone Project 4: Complete 14-Step INET Wireless Simulation Series",
        difficulty: "Hard",
        platform: "Custom",
        problemUrl: "https://inet.omnetpp.org/docs/tutorials/wireless/doc/index.html",
        tags: ["Project", "INET", "OMNeT++", "Wireless Mastery"]
      }
    ]
  }
];

const seedWirelessNetworksCodingProblems = async () => {
  try {
    await connectDB();

    const subject = await Subject.findOne({ name: /^Wireless and Mobile Networks$/i });
    if (!subject) {
      console.log('❌ Wireless and Mobile Networks subject not found');
      process.exit(1);
    }
    console.log(`✅ Found subject: "${subject.name}"`);

    const topics = await Topic.find({ subject: subject._id });

    let totalAdded = 0;

    for (const item of WIRELESS_NETWORKS_PROBLEMS) {
      const topic = topics.find(t => item.topicPattern.test(t.title));
      if (topic) {
        await CodingProblem.deleteMany({ topic: topic._id });
        const problemsToInsert = item.problems.map((p, idx) => ({
          topic: topic._id,
          title: p.title,
          description: `Simulation / coding practice for ${topic.title} in Wireless and Mobile Networks.`,
          difficulty: p.difficulty,
          platform: p.platform,
          problemUrl: p.problemUrl,
          tags: p.tags || [topic.title],
          order: idx + 1,
          estimatedMinutes: p.difficulty === 'Hard' ? 60 : p.difficulty === 'Medium' ? 40 : 25,
          isPublished: true
        }));
        await CodingProblem.insertMany(problemsToInsert);
        totalAdded += problemsToInsert.length;
        console.log(`   ✅ "${topic.title}": added ${problemsToInsert.length} problems`);
      } else {
        console.log(`   ❌ Topic pattern not matched: ${item.topicPattern}`);
      }
    }

    console.log(`\n🎉 Wireless and Mobile Networks Coding Problems Seeded! Total: ${totalAdded}`);
    process.exit(0);
  } catch (err) {
    console.error('❌ Error:', err);
    process.exit(1);
  }
};

seedWirelessNetworksCodingProblems();
