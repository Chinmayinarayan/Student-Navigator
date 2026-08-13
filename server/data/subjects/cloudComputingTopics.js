module.exports = [
  {
    "title": "Introduction to Cloud Computing",
    "slug": "cloud-computing-introduction-to-cloud-computing",
    "order": 1,
    "estimatedHours": 3,
    "difficulty": "Beginner",
    "description": "Understand cloud computing evolution, NIST 5 essential characteristics (On-demand, Network Access, Resource Pooling, Elasticity, Measured Service), pros/cons, and enterprise applications.",
    "subTopics": [
      "Introduction to Cloud Computing",
      "Evolution of Cloud Computing",
      "Need for Cloud Computing",
      "Characteristics of Cloud Computing (On-demand, Resource Pooling, Elasticity, etc.)",
      "Advantages and Limitations of Cloud Computing",
      "Cloud Computing Applications"
    ],
    "prerequisiteTitles": [],
    "learningObjectives": [
      "Define Cloud Computing according to NIST guidelines.",
      "Analyze NIST 5 essential characteristics: On-demand self-service, Broad network access, Resource pooling, Rapid elasticity, Measured service.",
      "Compare traditional on-premises IT infrastructure with cloud utility models."
    ],
    "notes": [
      {
        "title": "NIST Cloud Definition & 5 Essential Characteristics",
        "content": "INTRODUCTION TO CLOUD COMPUTING\n\n1. NIST Definition of Cloud Computing:\n   A model for enabling ubiquitous, convenient, on-demand network access to a shared pool of configurable computing resources (networks, servers, storage, applications, services) that can be rapidly provisioned and released with minimal management effort.\n\n2. NIST 5 Essential Characteristics:\n   - On-Demand Self-Service: Consumers provision computing capabilities (CPU, storage) automatically without human interaction with service providers.\n   - Broad Network Access: Capabilities available over network accessed through standard mechanisms (web browser, mobile devices, API).\n   - Resource Pooling: Provider's computing resources pooled to serve multiple consumers using multi-tenant models (location independence).\n   - Rapid Elasticity: Capabilities elastically provisioned and released to scale rapidly outward and inward with demand.\n   - Measured Service: Resource usage monitored, controlled, transparently reported (Pay-as-you-go metering)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Cloud Computing: Concepts, Technology & Architecture",
        "author": "Thomas Erl"
      }
    ],
    "practiceLinks": [
      {
        "title": "AWS Cloud Practitioner Essentials",
        "url": "https://aws.amazon.com/training/digital/aws-cloud-practitioner-essentials/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State NIST definition of Cloud Computing and list the 5 essential characteristics. (2 Marks)",
        "Explain Resource Pooling and Multi-tenancy in cloud infrastructure. (2 Marks)",
        "Differentiate between Capex (Capital Expenditure) and Opex (Operational Expenditure). (2 Marks)"
      ],
      "sixMarks": [
        "Explain the 5 essential characteristics of Cloud Computing with enterprise use case examples. (6 Marks)",
        "Compare Traditional On-Premises Infrastructure vs Cloud Utility Computing on cost, scalability, maintenance, and availability. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Cloud Computing Evolution & Paradigms. Detail mainframe time-sharing to virtualization, NIST 5 essential characteristics, utility billing economics, multi-tenant resource pooling, and business transformation case studies. (10 Marks)"
      ]
    }
  },
  {
    "title": "Cloud Computing Architecture",
    "slug": "cloud-computing-architecture",
    "order": 2,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Learn multi-tier cloud infrastructure: Front-End (Client UI/Apps) vs Back-End (Servers, Storage, Virtualization, Management), and Deployment Architecture.",
    "subTopics": [
      "Cloud Architecture Overview",
      "Front End and Back End Components",
      "Cloud Service Provider",
      "Cloud Infrastructure",
      "Virtualization Layer",
      "Data Storage Layer",
      "Application Layer",
      "Cloud Deployment Architecture"
    ],
    "prerequisiteTitles": [
      "Introduction to Cloud Computing"
    ],
    "learningObjectives": [
      "Deconstruct cloud architecture into Front-End client interfaces and Back-End management layers.",
      "Understand the Virtualization Layer, Hypervisor interaction, and Storage Area Networks (SAN).",
      "Analyze cloud service provider infrastructure components."
    ],
    "notes": [
      {
        "title": "Front-End vs Back-End Cloud Architecture Components",
        "content": "CLOUD COMPUTING ARCHITECTURE\n\n1. Architectural Separation:\n   - Front-End: Client side interfaces, web applications, mobile apps, web browsers used by end-users to access cloud services.\n   - Back-End: The cloud platform core managed by the Cloud Service Provider (CSP).\n\n2. Back-End Layers:\n   - Application Layer: Web services, SaaS applications, execution middleware.\n   - Management & Security Layer: Identity access (IAM), billing meter, resource orchestrator, auto-scaling policy engine.\n   - Virtualization Layer: Hypervisors (KVM, ESXi, Hyper-V) abstracting physical hardware.\n   - Physical Infrastructure Layer: Data center physical servers, storage arrays (SAN/NAS), networking switches."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Cloud Architecture Patterns",
        "author": "Bill Wilder"
      }
    ],
    "practiceLinks": [
      {
        "title": "AWS Well-Architected Framework",
        "url": "https://aws.amazon.com/architecture/well-architected/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between Front-End and Back-End components of Cloud Architecture. (2 Marks)",
        "What is the role of the Virtualization Layer in Cloud Architecture? (2 Marks)",
        "What is Cloud Orchestration? (2 Marks)"
      ],
      "sixMarks": [
        "Explain Cloud Computing Architecture with labeled diagram showing Front-End, Back-End, Virtualization, Storage, and Management components. (6 Marks)",
        "Describe the responsibilities of a Cloud Service Provider (CSP) in managing physical data centers vs customer responsibilities. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Enterprise Cloud Architecture. Detail multi-tier platform components, control plane vs data plane architecture, hypervisor hardware abstraction, software-defined storage (SDS), and distributed cloud management orchestrators. (10 Marks)"
      ]
    }
  },
  {
    "title": "Cloud Service Models",
    "slug": "cloud-computing-service-models",
    "order": 3,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Master the SPI model: Infrastructure as a Service (IaaS), Platform as a Service (PaaS), Software as a Service (SaaS), features, use cases, and management scope.",
    "subTopics": [
      "Introduction to Cloud Service Models",
      "Infrastructure as a Service (IaaS)",
      "Platform as a Service (PaaS)",
      "Software as a Service (SaaS)",
      "Comparison Between IaaS, PaaS and SaaS"
    ],
    "prerequisiteTitles": [
      "Introduction to Cloud Computing"
    ],
    "learningObjectives": [
      "Distinguish IaaS (AWS EC2), PaaS (AWS Elastic Beanstalk / Heroku), and SaaS (Google Workspace / Office 365).",
      "Analyze control stack management: Who manages OS, Runtime, Middleware, and Data?",
      "Select appropriate service model for enterprise application requirements."
    ],
    "notes": [
      {
        "title": "IaaS vs PaaS vs SaaS Control Stack Breakdown",
        "content": "CLOUD SERVICE MODELS (SPI MODEL)\n\n1. Service Models Stack:\n   -------------------------------------------------------------------------\n   Component            | On-Premises | IaaS        | PaaS        | SaaS\n   -------------------------------------------------------------------------\n   Applications         | Customer    | Customer    | Customer    | Provider\n   Data                 | Customer    | Customer    | Customer    | Provider\n   Runtime              | Customer    | Customer    | Provider    | Provider\n   Middleware           | Customer    | Customer    | Provider    | Provider\n   O/S                  | Customer    | Customer    | Provider    | Provider\n   Virtualization       | Customer    | Provider    | Provider    | Provider\n   Servers              | Customer    | Provider    | Provider    | Provider\n   Storage              | Customer    | Provider    | Provider    | Provider\n   Networking           | Customer    | Provider    | Provider    | Provider\n   -------------------------------------------------------------------------\n\n2. Key Examples:\n   - IaaS: AWS EC2, Azure VMs, Google Compute Engine.\n   - PaaS: AWS Elastic Beanstalk, Heroku, Google App Engine.\n   - SaaS: Gmail, Salesforce, Microsoft 365, Dropbox."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Cloud Computing: Concepts, Technology & Architecture",
        "author": "Thomas Erl"
      }
    ],
    "practiceLinks": [
      {
        "title": "Microsoft Azure Fundamentals Service Models",
        "url": "https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define IaaS, PaaS, and SaaS with one real-world example of each. (2 Marks)",
        "In PaaS, who is responsible for managing Operating System and Runtime updates? (2 Marks)",
        "Why would a startup choose SaaS over building custom software in IaaS? (2 Marks)"
      ],
      "sixMarks": [
        "Compare IaaS, PaaS, and SaaS service models on control level, customization, deployment speed, target audience, and vendor lock-in. (6 Marks)",
        "Draw and explain the Cloud Service Stack diagram showing management boundaries between Cloud Provider and Customer for IaaS, PaaS, SaaS. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Cloud Service Models (SPI). Detail architectural mechanics of IaaS provisioning, PaaS developer runtime abstractions, SaaS multi-tenant software delivery, financial billing models, and selecting SPI models for migration. (10 Marks)"
      ]
    }
  },
  {
    "title": "Cloud Deployment Models",
    "slug": "cloud-computing-deployment-models",
    "order": 4,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Explore Public Cloud, Private Cloud, Hybrid Cloud, Community Cloud, Multi-Cloud strategies, pros/cons, and enterprise deployment choice factors.",
    "subTopics": [
      "Public Cloud",
      "Private Cloud",
      "Hybrid Cloud",
      "Community Cloud",
      "Multi Cloud Environment",
      "Advantages and Challenges of Deployment Models"
    ],
    "prerequisiteTitles": [
      "Cloud Service Models"
    ],
    "learningObjectives": [
      "Differentiate Public, Private, Hybrid, Community, and Multi-Cloud deployment models.",
      "Understand Hybrid Cloud integration using VPN / Direct Connect for data burst operations.",
      "Evaluate security, compliance, cost, and latency factors when selecting deployment models."
    ],
    "notes": [
      {
        "title": "Public, Private, Hybrid & Multi-Cloud Comparisons",
        "content": "CLOUD DEPLOYMENT MODELS\n\n1. Deployment Models Summary:\n   - Public Cloud: Owned and operated by third-party CSP (AWS, Azure, GCP). Shared hardware infrastructure over internet. High scalability, low initial cost.\n   - Private Cloud: Dedicated exclusively to one organization. Can be hosted on-premise or by CSP. Maximum security, strict compliance, high cost.\n   - Hybrid Cloud: Combines Public and Private clouds bound together by encrypted VPN / Direct Connect. Sensitive data in Private; scalable workloads in Public.\n   - Community Cloud: Shared infrastructure by multiple organizations with common compliance/security goals (e.g. Healthcare, Government agencies).\n   - Multi-Cloud: Utilizing services from multiple distinct public cloud providers (e.g. AWS + Azure) to prevent vendor lock-in."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Hybrid Cloud for Dummies",
        "author": "Judith Hurwitz"
      }
    ],
    "practiceLinks": [
      {
        "title": "Google Cloud Hybrid & Multi-Cloud Architecture",
        "url": "https://cloud.google.com/solutions/hybrid-and-multi-cloud"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between Public Cloud and Private Cloud. (2 Marks)",
        "What is Hybrid Cloud? Give a practical enterprise scenario. (2 Marks)",
        "What is vendor lock-in and how does Multi-Cloud mitigate it? (2 Marks)"
      ],
      "sixMarks": [
        "Compare Public, Private, Hybrid, and Community cloud deployment models on ownership, security, cost, scalability, and compliance. (6 Marks)",
        "Explain Hybrid Cloud architecture detailing Direct Connect / VPN connectivity, Cloud Bursting, and data sync strategies. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Cloud Deployment Models. Detail operational security trade-offs, private cloud orchestration software (OpenStack), multi-cloud architecture frameworks, regulatory compliance constraints (HIPAA, GDPR), and cloud migration strategies (6 R's). (10 Marks)"
      ]
    }
  },
  {
    "title": "Virtualization Technology",
    "slug": "cloud-computing-virtualization-technology",
    "order": 5,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master hardware virtualization: Type 1 Bare-Metal Hypervisors (VMware ESXi, KVM, Xen) vs Type 2 Hosted Hypervisors (VirtualBox), Server/Storage/Network Virtualization, and VMs.",
    "subTopics": [
      "Introduction to Virtualization",
      "Need for Virtualization in Cloud",
      "Types of Virtualization (Server, Storage, Network, Desktop)",
      "Hypervisors (Type 1 Hypervisor, Type 2 Hypervisor)",
      "Virtual Machines",
      "Containers Introduction"
    ],
    "prerequisiteTitles": [
      "Cloud Computing Architecture"
    ],
    "learningObjectives": [
      "Understand how Hypervisors abstract physical CPU, RAM, and I/O devices into Virtual Machines (VMs).",
      "Compare Type 1 Bare-Metal Hypervisors (KVM, ESXi) and Type 2 Hosted Hypervisors (VirtualBox).",
      "Distinguish Server, Storage (SAN/NAS), Network (VLAN/SDN), and Desktop Virtualization."
    ],
    "notes": [
      {
        "title": "Type 1 vs Type 2 Hypervisors & Virtualization Mechanics",
        "content": "VIRTUALIZATION TECHNOLOGY & HYPERVISORS\n\n1. What is Virtualization?\n   Abstraction layer separating OS and applications from underlying physical hardware via a Hypervisor (Virtual Machine Monitor - VMM).\n\n2. Type 1 vs Type 2 Hypervisors:\n   - Type 1 (Bare-Metal Hypervisor): Runs directly on bare hardware host without underlying OS (e.g. KVM, VMware ESXi, Microsoft Hyper-V, Xen). High efficiency, enterprise cloud standard.\n   - Type 2 (Hosted Hypervisor): Runs as a software application on top of an existing host OS (e.g. Oracle VirtualBox, VMware Workstation). Lower efficiency, used for testing/desktop.\n\n3. Types of Virtualization:\n   - Server Virtualization: Partitioning physical CPU & RAM into virtual machines.\n   - Storage Virtualization: Combining physical hard drives into a single virtual pool (SAN/NAS).\n   - Network Virtualization: Software-defined virtual networks (SDN, VXLAN)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Virtualization Essentials",
        "author": "Matthew Portnoy"
      }
    ],
    "practiceLinks": [
      {
        "title": "VMware Virtualization Basics",
        "url": "https://www.vmware.com/topics/glossary/comput-virtualization.html"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is a Hypervisor (VMM)? (2 Marks)",
        "Differentiate between Type 1 (Bare-Metal) and Type 2 (Hosted) Hypervisors with examples. (2 Marks)",
        "Why is Server Virtualization essential for Cloud Computing? (2 Marks)"
      ],
      "sixMarks": [
        "Explain Type 1 vs Type 2 Hypervisors with architectural stack diagrams and performance comparisons. (6 Marks)",
        "Describe Server, Storage, and Network Virtualization detailing underlying hardware abstractions. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Virtualization Principles. Detail Full Virtualization vs Paravirtualization vs Hardware-Assisted Virtualization (Intel VT-x / AMD-V), Hypervisor CPU scheduling, Memory ballooning & Overcommit, and VM live migration (vMotion) mechanics. (10 Marks)"
      ]
    }
  },
  {
    "title": "Containerization and Docker",
    "slug": "cloud-computing-containerization-and-docker",
    "order": 6,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Learn OS-level virtualization: Containers vs Virtual Machines, Docker Engine architecture, Dockerfile, Docker Images, Docker Containers, Docker Hub, and CLI commands.",
    "subTopics": [
      "Introduction to Containers",
      "Containers vs Virtual Machines",
      "Docker Architecture",
      "Docker Images",
      "Docker Containers",
      "Docker Hub",
      "Docker Commands Basics",
      "Container Deployment"
    ],
    "prerequisiteTitles": [
      "Virtualization Technology"
    ],
    "learningObjectives": [
      "Understand OS-level containerization (sharing host Linux kernel via cgroups and namespaces).",
      "Compare Virtual Machines (heavyweight guest OS) and Docker Containers (lightweight isolated processes).",
      "Build custom Docker images using Dockerfile and execute container commands (`run`, `ps`, `exec`, `stop`)."
    ],
    "notes": [
      {
        "title": "Containers vs VMs, Dockerfile & CLI Command Cheatsheet",
        "content": "CONTAINERIZATION & DOCKER\n\n1. Containers vs Virtual Machines:\n   - VM: Includes Guest OS + Binaries/Libs + App. Heavyweight (Gigabytes), slow boot (minutes).\n   - Container: Shares Host OS Kernel + Binaries/Libs + App. Lightweight (Megabytes), near-instant boot (seconds).\n\n2. Docker CLI Commands Cheatsheet:\n   # Pull image from Docker Hub\n   docker pull nginx:latest\n\n   # Run container in background with port mapping (8080 host to 80 container)\n   docker run -d -p 8080:80 --name my-web-app nginx:latest\n\n   # List running containers\n   docker ps\n\n   # Execute bash inside container\n   docker exec -it my-web-app /bin/bash\n\n   # Build image from Dockerfile\n   docker build -t mycustomimage:v1 .\n\n3. Sample Dockerfile:\n   FROM node:18-alpine\n   WORKDIR /app\n   COPY package*.json ./\n   RUN npm install\n   COPY . .\n   EXPOSE 3000\n   CMD [\"node\", \"server.js\"]"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Docker Deep Dive",
        "author": "Nigel Poulton"
      }
    ],
    "practiceLinks": [
      {
        "title": "Play with Docker Interactive Lab",
        "url": "https://labs.play-with-docker.com/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Compare Virtual Machines (VMs) and Docker Containers on overhead, startup time, and isolation. (2 Marks)",
        "What is a Dockerfile? List three common Dockerfile instructions. (2 Marks)",
        "Explain the purpose of Docker Hub. (2 Marks)"
      ],
      "sixMarks": [
        "Explain Docker Engine Architecture showing Docker Daemon, Client, REST API, Images, Containers, and Registry. (6 Marks)",
        "Write a Dockerfile to package a Node.js / Python application and list commands to build, run, and inspect container. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Containerization Technology. Detail Linux kernel primitives (cgroups for resource limits, namespaces for PID/Net/IPC isolation, UnionFS layer storage), Docker engine architecture, multi-stage Dockerfile builds, and container orchestration readiness. (10 Marks)"
      ]
    }
  },
  {
    "title": "Cloud Computing Infrastructure",
    "slug": "cloud-computing-infrastructure",
    "order": 7,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Study cloud data center components: Cloud servers, storage systems, Load Balancers, Vertical vs Horizontal Scalability, Elasticity, Fault Tolerance, and High Availability (HA).",
    "subTopics": [
      "Data Centers",
      "Cloud Servers",
      "Storage Systems",
      "Networking Infrastructure",
      "Load Balancing",
      "Scalability",
      "Elasticity",
      "Fault Tolerance",
      "High Availability"
    ],
    "prerequisiteTitles": [
      "Virtualization Technology"
    ],
    "learningObjectives": [
      "Differentiate Scalability (handling growth capacity) and Elasticity (dynamic auto-scaling up/down).",
      "Analyze Load Balancer algorithms (Round Robin, Least Connections, IP Hash) for traffic distribution.",
      "Design High Availability (HA) architectures utilizing multi-Availability Zone (AZ) redundancy."
    ],
    "notes": [
      {
        "title": "Scalability vs Elasticity, Load Balancing & High Availability",
        "content": "CLOUD INFRASTRUCTURE & SCALABILITY\n\n1. Scalability vs Elasticity:\n   - Scalability: System's capacity to handle growing workload by adding resources (Vertical Scale-Up CPU/RAM or Horizontal Scale-Out nodes). Planned long-term growth.\n   - Elasticity: System's ability to automatically commission and decommission resources dynamically in response to real-time traffic spikes (Auto Scaling Groups).\n\n2. Load Balancers:\n   Distribute incoming application traffic across multiple target instances.\n   - Algorithms: Round Robin, Least Connections, Weighted Round Robin, IP Hash.\n   - OSI Layers: Layer 4 (Network Load Balancer - TCP/UDP) vs Layer 7 (Application Load Balancer - HTTP/HTTPS/URL Routing).\n\n3. High Availability (HA) & Fault Tolerance (FT):\n   - High Availability: Minimizes downtime (99.99% uptime = \"Four Nines\"). Implemented via Multi-AZ deployments.\n   - Fault Tolerance: Zero downtime capability to operate continuously even during hardware failures via active-active redundant mirroring."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Cloud Infrastructure and Services",
        "author": "EMC Education Services"
      }
    ],
    "practiceLinks": [
      {
        "title": "AWS Elastic Load Balancing Documentation",
        "url": "https://aws.amazon.com/elasticloadbalancing/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between Scalability and Elasticity in Cloud Computing. (2 Marks)",
        "Compare Layer 4 (Network) and Layer 7 (Application) Load Balancers. (2 Marks)",
        "Define High Availability (HA) and calculate annual downtime for 99.9% uptime. (2 Marks)"
      ],
      "sixMarks": [
        "Explain Vertical Scaling (Scale-Up) vs Horizontal Scaling (Scale-Out) with architectural diagrams and trade-offs. (6 Marks)",
        "Describe Cloud Load Balancing algorithms and multi-AZ fault-tolerant architecture for web applications. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Cloud Data Center Infrastructure. Detail physical server rack topology, Top-of-Rack (ToR) switches, storage area networks (SAN/NAS), power & cooling systems, Load Balancing algorithms, and Auto-Scaling policy triggers (CPU %, Request Count). (10 Marks)"
      ]
    }
  },
  {
    "title": "Cloud Storage",
    "slug": "cloud-computing-storage",
    "order": 8,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Explore storage models: Object Storage (Amazon S3), Block Storage (Amazon EBS), File Storage (Amazon EFS), storage tiering, data backup, and lifecycle policies.",
    "subTopics": [
      "Introduction to Cloud Storage",
      "Types of Cloud Storage (Object, Block, File)",
      "Storage Virtualization",
      "Data Backup and Recovery",
      "Storage Security",
      "Cloud Storage Applications"
    ],
    "prerequisiteTitles": [
      "Cloud Computing Infrastructure"
    ],
    "learningObjectives": [
      "Compare Object Storage (HTTP REST, Buckets/Keys, Unstructured data), Block Storage (SAN volumes, OS drive), and File Storage (NFS/POSIX).",
      "Configure cloud storage lifecycle management rules (Transition to Glacier/Archive).",
      "Understand cloud backup strategies, snapshot replication, and encryption at-rest."
    ],
    "notes": [
      {
        "title": "Object vs Block vs File Cloud Storage Comparison",
        "content": "CLOUD STORAGE TYPES & COMPARISON\n\n--------------------------------------------------------------------------------------\nFeature         | Object Storage (S3)    | Block Storage (EBS)    | File Storage (EFS)\n--------------------------------------------------------------------------------------\nStructure       | Flat namespace (Bucket)| Raw block volumes      | Hierarchical directory\nAccess Protocol | HTTP/HTTPS REST API    | SAN / iSCSI block protocol| NFS / SMB File protocol\nMetadata        | Custom key-value meta  | Basic OS filesystem meta| POSIX file attributes\nIdeal Use Case  | Images, videos, backups| DB files, OS boot disk  | Shared network drive\nScalability     | Virtually infinite     | Fixed volume size      | Auto-expanding file system\nAWS Service     | Amazon S3              | Amazon EBS             | Amazon EFS\n--------------------------------------------------------------------------------------\n\n1. Storage Lifecycle Rules:\n   Automatically transitions objects to cheaper cold storage tiers (S3 Standard -> S3 Infrequent Access -> S3 Glacier) based on access age."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Storage Area Network Essentials",
        "author": "Richard Barker"
      }
    ],
    "practiceLinks": [
      {
        "title": "Amazon S3 User Guide",
        "url": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Compare Object Storage, Block Storage, and File Storage with one cloud service example of each. (2 Marks)",
        "What is S3 Lifecycle Policy in AWS? (2 Marks)",
        "Explain EBS Snapshot backup concept in cloud infrastructure. (2 Marks)"
      ],
      "sixMarks": [
        "Explain Object Storage architecture: Buckets, Keys, Metadata, REST API operations, and infinite scalability features. (6 Marks)",
        "Describe Data Backup and Disaster Recovery strategies in cloud: RTO (Recovery Time Objective) and RPO (Recovery Point Objective). (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Cloud Storage Technologies. Detail Object vs Block vs File storage internal protocols, storage virtualization controllers, AWS S3 storage classes (Standard, IA, Glacier Deep Archive), storage encryption (SSE-S3, SSE-KMS), and cross-region replication. (10 Marks)"
      ]
    }
  },
  {
    "title": "Cloud Networking",
    "slug": "cloud-computing-networking",
    "order": 9,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master Software-Defined Networking: Virtual Private Cloud (VPC), Public vs Private Subnets, Route Tables, Internet Gateways, NAT Gateways, Security Groups, NACLs, and CDN (CloudFront).",
    "subTopics": [
      "Networking Basics for Cloud",
      "Virtual Private Cloud (VPC)",
      "Subnets",
      "IP Addressing",
      "Routing",
      "Firewalls",
      "Security Groups",
      "Content Delivery Network (CDN)",
      "DNS in Cloud"
    ],
    "prerequisiteTitles": [
      "Cloud Computing Infrastructure"
    ],
    "learningObjectives": [
      "Design Virtual Private Cloud (VPC) subnets (CIDR notation, Public vs Private subnets).",
      "Distinguish Security Groups (stateful instance firewall) and NACLs (stateless subnet firewall).",
      "Understand Content Delivery Networks (CDN / CloudFront) edge location caching."
    ],
    "notes": [
      {
        "title": "VPC Subnetting, Security Groups vs NACLs & CDN Caching",
        "content": "CLOUD NETWORKING & VPC\n\n1. Virtual Private Cloud (VPC) Architecture:\n   Isolated virtual network defined by CIDR block (e.g. 10.0.0.0/16).\n   - Public Subnet: Has route to Internet Gateway (IGW). Instances receive public IPs.\n   - Private Subnet: No direct route to Internet Gateway. Uses NAT Gateway in public subnet for outbound traffic only.\n\n2. Security Groups vs NACLs:\n   - Security Group: Operates at Instance Level. Stateful (if inbound allowed, outbound response automatically allowed). Allows ONLY Permit rules.\n   - Network ACL (NACL): Operates at Subnet Level. Stateless (inbound and outbound rules evaluated separately). Supports Allow AND Deny rules.\n\n3. Content Delivery Network (CDN):\n   Edge location server network caching static assets (images, JS, video) close to users globally to reduce latency (e.g. AWS CloudFront, Cloudflare)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "AWS Certified Advanced Networking",
        "author": "Sidney Chao"
      }
    ],
    "practiceLinks": [
      {
        "title": "AWS VPC User Guide",
        "url": "https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is a Virtual Private Cloud (VPC)? (2 Marks)",
        "Differentiate between Security Groups and Network ACLs (NACLs). (2 Marks)",
        "What is the role of a NAT Gateway in a private subnet? (2 Marks)"
      ],
      "sixMarks": [
        "Explain VPC Network Architecture detailing CIDR blocks, Public Subnets, Private Subnets, Internet Gateways, and Route Tables. (6 Marks)",
        "Describe Content Delivery Network (CDN) working with Origin Server, Edge Locations, and Cache Hits/Misses. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Cloud Software-Defined Networking (SDN). Detail VPC creation steps, subnet IP allocation calculations, Internet vs NAT Gateways, Security Group vs NACL evaluation flow, VPC Peering, and Route 53 DNS routing policies (Failover, Geolocation, Latency-based). (10 Marks)"
      ]
    }
  },
  {
    "title": "Cloud Security",
    "slug": "cloud-computing-security",
    "order": 10,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master cloud security: Shared Responsibility Model, Identity and Access Management (IAM), Least Privilege Principle, Multi-Factor Authentication (MFA), Encryption (at-rest & in-transit), and Compliance.",
    "subTopics": [
      "Introduction to Cloud Security",
      "Security Challenges in Cloud",
      "Shared Responsibility Model",
      "Identity and Access Management (IAM)",
      "Authentication and Authorization",
      "Data Encryption",
      "Network Security",
      "Compliance and Privacy",
      "Security Best Practices"
    ],
    "prerequisiteTitles": [
      "Cloud Service Models",
      "Cloud Networking"
    ],
    "learningObjectives": [
      "Understand AWS/Azure Shared Responsibility Model boundaries.",
      "Implement Identity & Access Management (IAM Users, Groups, Roles, Policies, MFA).",
      "Apply Data Encryption at-rest (KMS, AES-256) and in-transit (TLS/SSL)."
    ],
    "notes": [
      {
        "title": "Shared Responsibility Model & IAM Least Privilege Policy",
        "content": "CLOUD SECURITY & IAM\n\n1. Shared Responsibility Model:\n   - Cloud Service Provider Responsibility (\"Security OF the Cloud\"): Physical hardware, global data centers, host OS virtualization layer, physical networking.\n   - Customer Responsibility (\"Security IN the Cloud\"): Guest OS configuration, application code, database configuration, IAM permissions, network firewall rules, client data encryption.\n\n2. IAM Security Best Practices:\n   - Principle of Least Privilege: Grant users minimum permissions necessary to perform job.\n   - Enforce Multi-Factor Authentication (MFA) on root and user accounts.\n   - Use IAM Roles (temporary credentials) for applications running on EC2 instead of hardcoding secret keys.\n\n3. Sample IAM JSON Policy (ReadOnly S3 Access):\n   {\n     \"Version\": \"2012-10-17\",\n     \"Statement\": [\n       {\n         \"Effect\": \"Allow\",\n         \"Action\": [\"s3:GetObject\", \"s3:ListBucket\"],\n         \"Resource\": \"*\"\n       }\n     ]\n   }"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Cloud Security and Privacy",
        "author": "Tim Mather, Subra Kumaraswamy"
      }
    ],
    "practiceLinks": [
      {
        "title": "AWS Security Documentation",
        "url": "https://aws.amazon.com/security/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain the Shared Responsibility Model in Cloud Computing. (2 Marks)",
        "What is the Principle of Least Privilege in IAM? (2 Marks)",
        "Differentiate between IAM Users, Groups, and Roles. (2 Marks)"
      ],
      "sixMarks": [
        "Explain AWS Shared Responsibility Model highlighting CSP vs Customer security boundaries for IaaS, PaaS, SaaS. (6 Marks)",
        "Describe Data Encryption methods in Cloud: Symmetric vs Asymmetric, KMS key management, and Encryption At-Rest vs In-Transit. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Cloud Security Engineering. Detail IAM JSON policy evaluation algorithms, MFA integration, AWS KMS envelope encryption, cloud compliance frameworks (SOC 2, ISO 27001, PCI-DSS), DDoS mitigation (AWS Shield), and WAF web application firewalls. (10 Marks)"
      ]
    }
  },
  {
    "title": "Cloud Databases",
    "slug": "cloud-computing-databases",
    "order": 11,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Explore managed database services: Relational DBs (Amazon RDS, Aurora), NoSQL (DynamoDB, MongoDB Atlas), Database Migration Service (DMS), replication, and automated backups.",
    "subTopics": [
      "Introduction to Cloud Databases",
      "Relational Database Services",
      "NoSQL Cloud Databases",
      "Database Migration to Cloud",
      "Database Backup and Recovery",
      "Distributed Database Concepts"
    ],
    "prerequisiteTitles": [
      "Cloud Storage"
    ],
    "learningObjectives": [
      "Compare Managed Relational DBs (Amazon RDS MySQL/PostgreSQL) and Managed NoSQL DBs (Amazon DynamoDB).",
      "Understand Multi-AZ synchronous replication for RDS high availability and Read Replicas for scale-out.",
      "Execute database migration to cloud using AWS DMS."
    ],
    "notes": [
      {
        "title": "Managed RDS vs DynamoDB & Multi-AZ vs Read Replicas",
        "content": "CLOUD DATABASES: RDS & DYNAMODB\n\n1. Managed Relational Database Services (e.g. Amazon RDS):\n   PaaS database service handling OS patching, automated daily backups, point-in-time recovery, and hardware maintenance.\n   - Multi-AZ Deployment: Synchronous replication to a standby instance in a different AZ for High Availability & Automatic Failover.\n   - Read Replicas: Asynchronous replication to multiple instances for Read Scaling (Scale-Out read queries).\n\n2. Managed NoSQL Services (e.g. Amazon DynamoDB):\n   Fully managed serverless key-value and document NoSQL database with single-digit millisecond latency at any scale. Automatically partitions data across SSD storage."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Database Systems in the Cloud",
        "author": "Shashank Tiwari"
      }
    ],
    "practiceLinks": [
      {
        "title": "Amazon RDS Documentation",
        "url": "https://docs.aws.amazon.com/rds/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is Amazon RDS? Name three supported database engines. (2 Marks)",
        "Differentiate between RDS Multi-AZ deployments and RDS Read Replicas. (2 Marks)",
        "State key features of Amazon DynamoDB NoSQL service. (2 Marks)"
      ],
      "sixMarks": [
        "Explain RDS Multi-AZ High Availability failover mechanism vs Read Replica asynchronous read scaling with architectural diagrams. (6 Marks)",
        "Describe Cloud Database Migration process using AWS DMS (Database Migration Service) for schema transformation and continuous replication. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Managed Cloud Databases. Detail Amazon Aurora serverless distributed storage architecture, DynamoDB partition key indexing & global tables, database automated snapshot backups, point-in-time recovery (PITR), and cloud DB connection pooling. (10 Marks)"
      ]
    }
  },
  {
    "title": "Cloud Computing Platforms",
    "slug": "cloud-computing-platforms",
    "order": 12,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Comparative study of major Cloud Service Providers: AWS, Microsoft Azure, and Google Cloud Platform (GCP) across compute, storage, database, networking, and serverless.",
    "subTopics": [
      "Introduction to Cloud Service Providers",
      "Amazon Web Services (AWS)",
      "Microsoft Azure",
      "Google Cloud Platform",
      "Comparison of Cloud Platforms"
    ],
    "prerequisiteTitles": [
      "Cloud Service Models",
      "Cloud Deployment Models"
    ],
    "learningObjectives": [
      "Map corresponding compute, storage, database, and IAM services across AWS, Azure, and GCP.",
      "Understand enterprise positioning of AWS (market leader), Azure (Microsoft enterprise integration), and GCP (data analytics & AI).",
      "Evaluate multi-cloud architecture choices."
    ],
    "notes": [
      {
        "title": "AWS vs Azure vs GCP Services Mapping Table",
        "content": "CLOUD PLATFORMS COMPARISON MATRIX\n\n--------------------------------------------------------------------------------------\nCategory           | AWS                    | Microsoft Azure        | Google Cloud (GCP)\n--------------------------------------------------------------------------------------\nVirtual Machines   | EC2 (Elastic Compute)  | Azure Virtual Machines | Compute Engine\nObject Storage     | S3                     | Blob Storage           | Cloud Storage\nBlock Storage      | EBS                    | Managed Disks          | Persistent Disk\nManaged SQL DB     | RDS                    | Azure SQL Database     | Cloud SQL\nServerless FaaS    | AWS Lambda             | Azure Functions        | Cloud Functions\nContainers (K8s)   | EKS                    | AKS                    | GKE (Google Kubernetes)\nData Warehouse     | Amazon Redshift        | Azure Synapse          | BigQuery\nIAM Service        | AWS IAM                | Azure Active Directory | GCP IAM\n--------------------------------------------------------------------------------------"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Cloud Strategy",
        "author": "Gregor Hohpe"
      }
    ],
    "practiceLinks": [
      {
        "title": "AWS Free Tier Account",
        "url": "https://aws.amazon.com/free/"
      },
      {
        "title": "Azure Free Account",
        "url": "https://azure.microsoft.com/free/"
      },
      {
        "title": "GCP Free Tier",
        "url": "https://cloud.google.com/free"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Map corresponding Object Storage and Virtual Machine services in AWS, Azure, and GCP. (2 Marks)",
        "What are the key market strengths of Microsoft Azure vs AWS? (2 Marks)",
        "Why is Google Cloud Platform (GCP) preferred for Data Analytics and Machine Learning? (2 Marks)"
      ],
      "sixMarks": [
        "Provide a comprehensive comparison table of AWS, Azure, and GCP across Compute, Storage, Database, Networking, and Serverless domains. (6 Marks)",
        "Describe global cloud infrastructure concepts: Regions, Availability Zones (AZs), and Edge Locations. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Top Cloud Service Providers (AWS, Azure, GCP). Detail cloud global infrastructure footprints, pricing models (Reserved Instances, On-Demand, Spot), service mappings, enterprise multi-cloud management tools, and marketplace ecosystems. (10 Marks)"
      ]
    }
  },
  {
    "title": "Cloud Application Development",
    "slug": "cloud-computing-application-development",
    "order": 13,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Explore modern application architecture: Cloud-Native 12-Factor App methodology, Microservices architecture vs Monoliths, REST APIs, and application frameworks.",
    "subTopics": [
      "Cloud Native Applications",
      "Microservices Architecture",
      "API-Based Cloud Services",
      "Serverless Computing",
      "Application Deployment Models",
      "Cloud Development Tools"
    ],
    "prerequisiteTitles": [
      "Containerization and Docker",
      "Cloud Computing Platforms"
    ],
    "learningObjectives": [
      "Understand Cloud-Native principles: 12-Factor App rules (Stateless processes, Environment config, Logs as streams).",
      "Compare Monolithic architecture and Microservices architecture (API Gateways, Service Discovery).",
      "Build cloud-ready API services."
    ],
    "notes": [
      {
        "title": "Cloud-Native 12-Factor App Methodology & Microservices",
        "content": "CLOUD NATIVE APPLICATIONS & MICROSERVICES\n\n1. 12-Factor App Methodology Key Principles:\n   - Codebase: One codebase tracked in revision control, many deployments.\n   - Config: Store configuration in environment variables (not hardcoded).\n   - Backing Services: Treat backing services (databases, caches) as attached resources.\n   - Build, Release, Run: Strictly separate build and execution stages.\n   - Processes: Execute app as stateless, share-nothing processes.\n   - Port Binding: Export services via port binding.\n   - Concurrency: Scale out via process model.\n\n2. Microservices Architecture:\n   Decomposes application into small, loosely coupled, independently deployable services communicating over lightweight REST APIs / gRPC."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Designing Distributed Systems",
        "author": "Brendan Burns"
      }
    ],
    "practiceLinks": [
      {
        "title": "The 12-Factor App Methodology Guide",
        "url": "https://12factor.net/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is a Cloud-Native Application? (2 Marks)",
        "List four key principles of the 12-Factor App methodology. (2 Marks)",
        "Differentiate between Monolithic and Microservices architecture. (2 Marks)"
      ],
      "sixMarks": [
        "Explain the 12-Factor App methodology rules for building scalable cloud-native microservices. (6 Marks)",
        "Describe Microservices Architecture pattern showing API Gateway, Service Registry, Database per service, and Circuit Breaker. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Cloud Application Architectures. Detail monolithic to microservices refactoring strategies, API Gateway routing, event-driven async messaging (Pub/Sub), distributed tracing (Jaeger/X-Ray), and containerized microservice deployments. (10 Marks)"
      ]
    }
  },
  {
    "title": "Serverless Computing",
    "slug": "cloud-computing-serverless-computing",
    "order": 14,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Master Function-as-a-Service (FaaS): Event-driven execution, AWS Lambda, Azure Functions, GCP Cloud Functions, cold start optimization, and API Gateway integration.",
    "subTopics": [
      "Introduction to Serverless Architecture",
      "Function as a Service (FaaS)",
      "AWS Lambda Basics",
      "Azure Functions Basics",
      "Google Cloud Functions Basics",
      "Serverless Applications"
    ],
    "prerequisiteTitles": [
      "Cloud Application Development"
    ],
    "learningObjectives": [
      "Understand Serverless paradigm: No infrastructure management, auto-scaling from 0 to N, pay-per-execution millisecond billing.",
      "Write AWS Lambda function in Python/Node.js handling S3 or API Gateway triggers.",
      "Analyze Serverless Cold Start latency and mitigation techniques (Provisioned Concurrency)."
    ],
    "notes": [
      {
        "title": "AWS Lambda Python Code Snippet & FaaS Event Triggers",
        "content": "SERVERLESS COMPUTING & AWS LAMBDA\n\n1. Key Characteristics of Serverless / FaaS:\n   - No Server Management: Developers upload code only; CSP manages OS, patching, scaling.\n   - Scaling: Scales automatically per event request (from 0 instances up to thousands).\n   - Pay-Per-Use: Billed only for exact execution duration (ms) and memory consumed. Zero cost when idle.\n\n2. AWS Lambda Python Example (S3 Event Handler):\n   import json\n   import urllib.parse\n\n   def lambda_handler(event, context):\n       # Extract S3 bucket name and uploaded file key from event payload\n       bucket = event['Records'][0]['s3']['bucket']['name']\n       key = urllib.parse.unquote_plus(event['Records'][0]['s3']['object']['key'])\n       print(f\"File {key} uploaded to bucket {bucket}\")\n\n       return {\n           'statusCode': 200,\n           'body': json.dumps('File processed successfully!')\n       }"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Serverless Architectures on AWS",
        "author": "Peter Sbarski"
      }
    ],
    "practiceLinks": [
      {
        "title": "AWS Lambda Developer Guide",
        "url": "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define Serverless Computing and Function as a Service (FaaS). (2 Marks)",
        "What is Cold Start in AWS Lambda and how can it be mitigated? (2 Marks)",
        "How does Serverless billing differ from traditional EC2 instance billing? (2 Marks)"
      ],
      "sixMarks": [
        "Explain AWS Lambda architecture detailing Event Sources (S3, API Gateway, DynamoDB Streams), Function Execution Environment, and IAM Execution Role. (6 Marks)",
        "Write Python AWS Lambda handler code to process an HTTP request from API Gateway and return a JSON payload. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Serverless Application Engineering. Detail FaaS architecture execution lifecycles, event-driven asynchronous architectures, Serverless Framework / AWS SAM IaC tools, Cold Start performance tuning, and Serverless microservice web applications. (10 Marks)"
      ]
    }
  },
  {
    "title": "Cloud DevOps and Automation",
    "slug": "cloud-computing-devops-and-automation",
    "order": 15,
    "estimatedHours": 6,
    "difficulty": "Advanced",
    "description": "Master Cloud DevOps pipeline: CI/CD (GitHub Actions, Jenkins), Infrastructure as Code (Terraform HCL, CloudFormation), Ansible configuration management, and CloudWatch monitoring.",
    "subTopics": [
      "Introduction to DevOps",
      "Continuous Integration and Continuous Deployment (CI/CD)",
      "Infrastructure as Code (IaC)",
      "Configuration Management",
      "Monitoring and Logging",
      "Cloud Automation Tools"
    ],
    "prerequisiteTitles": [
      "Cloud Application Development",
      "Containerization and Docker"
    ],
    "learningObjectives": [
      "Understand CI/CD pipeline stages: Code Commit -> Automated Build -> Testing -> Staging -> Production Deploy.",
      "Write Infrastructure as Code (IaC) templates using HashiCorp Terraform HCL to provision AWS resources.",
      "Monitor infrastructure metrics using AWS CloudWatch and Prometheus/Grafana."
    ],
    "notes": [
      {
        "title": "Terraform IaC Code Snippet & CI/CD Pipeline Workflow",
        "content": "CLOUD DEVOPS & INFRASTRUCTURE AS CODE (TERRAFORM)\n\n1. Infrastructure as Code (IaC) Benefits:\n   Declarative provisioning of cloud infrastructure using code files stored in Git version control. Enables automated, reproducible, consistent infrastructure deployment.\n\n2. Terraform HCL Code Snippet (Provisioning AWS S3 Bucket & EC2):\n   provider \"aws\" {\n     region = \"us-east-1\"\n   }\n\n   resource \"aws_s3_bucket\" \"my_bucket\" {\n     bucket = \"my-company-app-bucket-2026\"\n   }\n\n   resource \"aws_instance\" \"my_web_server\" {\n     ami           = \"ami-0c55b159cbfafe1f0\" # Amazon Linux 2\n     instance_type = \"t2.micro\"\n     tags = {\n       Name = \"DevOps-Web-Server\"\n     }\n   }"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Terraform: Up & Running",
        "author": "Yevgeniy Brikman"
      }
    ],
    "practiceLinks": [
      {
        "title": "HashiCorp Terraform Tutorials",
        "url": "https://developer.hashicorp.com/terraform/tutorials"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is Infrastructure as Code (IaC)? Name two IaC tools. (2 Marks)",
        "Differentiate between Continuous Integration (CI) and Continuous Deployment (CD). (2 Marks)",
        "What is the function of `terraform plan` and `terraform apply`? (2 Marks)"
      ],
      "sixMarks": [
        "Explain CI/CD Pipeline workflow stages showing Code Commit, Build, Unit Test, Image Scan, Staging Deploy, and Production Deploy. (6 Marks)",
        "Write a HashiCorp Terraform HCL template to provision an AWS S3 Bucket and an EC2 instance. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Cloud DevOps Engineering. Detail IaC state management (Terraform remote state S3 + DynamoDB lock), CI/CD pipeline automation (GitHub Actions YAML), Configuration Management (Ansible playbooks), and CloudWatch telemetry alarms. (10 Marks)"
      ]
    }
  },
  {
    "title": "Cloud Data Analytics and AI Services",
    "slug": "cloud-computing-data-analytics-and-ai-services",
    "order": 16,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Explore cloud AI/ML ecosystems: Managed Big Data (AWS EMR, Dataproc), Data Warehousing (Redshift, BigQuery), Machine Learning platforms (AWS SageMaker, Vertex AI), and Pre-trained AI APIs.",
    "subTopics": [
      "Cloud-Based Data Processing",
      "Big Data on Cloud",
      "Machine Learning on Cloud",
      "AI Services in Cloud",
      "Cloud Analytics Platforms"
    ],
    "prerequisiteTitles": [
      "Cloud Storage",
      "Cloud Computing Platforms"
    ],
    "learningObjectives": [
      "Deploy managed Big Data compute clusters (AWS EMR, Dataproc).",
      "Train ML models using AWS SageMaker and GCP Vertex AI managed notebooks.",
      "Integrate pre-trained AI Vision, Speech, and NLP APIs (AWS Rekognition, Comprehend, Polly)."
    ],
    "notes": [
      {
        "title": "Cloud AI Services Mapping (SageMaker, Rekognition, BigQuery)",
        "content": "CLOUD DATA ANALYTICS & AI PLATFORMS\n\n1. Managed Machine Learning Platforms:\n   - AWS SageMaker: End-to-end ML platform for building, training, tuning, and deploying ML models on managed GPU clusters.\n   - GCP Vertex AI: Unified ML platform combining AutoML and custom trained models.\n\n2. Pre-Trained Cloud AI Services Mapping:\n   -----------------------------------------------------------------------\n   AI Domain            | AWS Service         | GCP Service\n   -----------------------------------------------------------------------\n   Computer Vision      | AWS Rekognition     | Cloud Vision API\n   Natural Language     | AWS Comprehend      | Cloud Natural Language\n   Text-to-Speech       | AWS Polly           | Cloud Text-to-Speech\n   Translation          | AWS Translate       | Cloud Translation API\n   Conversational AI    | AWS Lex             | Dialogflow\n   -----------------------------------------------------------------------"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Machine Learning on AWS",
        "author": "Subhashini Chellappan"
      }
    ],
    "practiceLinks": [
      {
        "title": "AWS Machine Learning Documentation",
        "url": "https://aws.amazon.com/machine-learning/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is AWS SageMaker? (2 Marks)",
        "Name AWS pre-trained AI services for Computer Vision and Text-to-Speech. (2 Marks)",
        "What is Cloud Data Warehousing? Give two examples. (2 Marks)"
      ],
      "sixMarks": [
        "Explain Cloud AI/ML Ecosystem showing Data Ingestion, Data Lake (S3), SageMaker Training, Model Registry, and SageMaker Endpoint deployment. (6 Marks)",
        "Compare AWS EMR (Big Data) and Amazon Redshift (Data Warehouse) use cases and underlying architectures. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Cloud AI & Data Analytics Services. Detail cloud data lakehouse architectures, serverless query engines (Athena/BigQuery), managed MLOps pipelines (SageMaker Pipelines), and integrating vision/NLP cognitive APIs into web apps. (10 Marks)"
      ]
    }
  },
  {
    "title": "Edge Computing and Emerging Technologies",
    "slug": "cloud-computing-edge-computing-and-emerging-technologies",
    "order": 17,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Explore decentralized computing paradigms: Edge Computing, Fog Computing, IoT Cloud Integration (AWS IoT Core), Cloud Blockchain, and Future Trends (Serverless 2.0, Quantum Cloud).",
    "subTopics": [
      "Introduction to Edge Computing",
      "Edge vs Cloud Computing",
      "Internet of Things (IoT) and Cloud",
      "Fog Computing",
      "Cloud and Blockchain",
      "Future Trends in Cloud Computing"
    ],
    "prerequisiteTitles": [
      "Cloud Computing Infrastructure"
    ],
    "learningObjectives": [
      "Understand Edge Computing (processing data locally near sensor sources to minimize latency).",
      "Compare Cloud, Fog, and Edge computing tiers.",
      "Integrate IoT sensors with Cloud MQTT brokers (AWS IoT Core, Greengrass)."
    ],
    "notes": [
      {
        "title": "Edge vs Fog vs Cloud Computing Tier Architecture",
        "content": "EDGE COMPUTING & EMERGING TECHNOLOGIES\n\n1. Edge vs Cloud Computing:\n   - Cloud Computing: Centralized data centers located globally. High latency (50-200ms). Massive compute & storage capacity.\n   - Edge Computing: Decentralized processing on localized edge devices (gateways, micro-data centers, smart cameras). Ultra-low latency (< 10ms), bandwidth reduction.\n   - Fog Computing: Intermediate layer between Edge devices and Centralized Cloud.\n\n2. AWS IoT Core Architecture:\n   Sensors -> MQTT Protocol -> AWS IoT Core Message Broker -> Rules Engine -> AWS Lambda / DynamoDB / S3."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Edge Computing: Physics, Systems, and Applications",
        "author": "K. KC"
      }
    ],
    "practiceLinks": [
      {
        "title": "AWS IoT Core Documentation",
        "url": "https://aws.amazon.com/iot-core/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between Edge Computing and Cloud Computing. (2 Marks)",
        "What is Fog Computing? (2 Marks)",
        "What is the role of MQTT protocol in IoT Cloud integration? (2 Marks)"
      ],
      "sixMarks": [
        "Explain Edge Computing Architecture with 3-tier diagram showing Sensors/Edge Devices, Edge Gateways/Fog, and Centralized Cloud Data Centers. (6 Marks)",
        "Describe IoT Cloud Integration showing AWS IoT Core, Device Shadow, MQTT Message Broker, and Rule Triggers. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Edge Computing & Future Cloud Paradigms. Detail latency constraints in autonomous driving / smart grids, AWS Greengrass edge Lambda deployment, Fog node orchestration, Cloud-Blockchain integration, and Quantum Cloud computing. (10 Marks)"
      ]
    }
  },
  {
    "title": "Cloud Computing Projects and Practical Applications",
    "slug": "cloud-computing-projects-and-practical-applications",
    "order": 18,
    "estimatedHours": 6,
    "difficulty": "Advanced",
    "description": "Hands-on cloud engineering projects: Web application deployment on AWS EC2/S3, VPC network setup, RDS database deployment, Serverless REST API, and CloudWatch monitoring setup.",
    "subTopics": [
      "Deploying a Web Application on Cloud",
      "Creating Virtual Machines",
      "Cloud Storage Implementation",
      "Database Deployment on Cloud",
      "Serverless Application Development",
      "Cloud Monitoring Project",
      "Cloud Security Implementation"
    ],
    "prerequisiteTitles": [
      "Cloud DevOps and Automation",
      "Serverless Computing"
    ],
    "learningObjectives": [
      "Deploy a 3-tier web application on AWS (ALB + EC2 Auto-Scaling + Multi-AZ RDS + S3).",
      "Configure cloud alarm monitoring and budget alerts.",
      "Build an end-to-end Serverless CRUD application using API Gateway, Lambda, and DynamoDB."
    ],
    "notes": [
      {
        "title": "3-Tier Enterprise Cloud Project Architecture Blueprint",
        "content": "CLOUD COMPUTING PROJECT ARCHITECTURE\n\n1. 3-Tier Production Architecture on AWS:\n   - Tier 1 (Presentation): Amazon Route 53 (DNS) -> CloudFront CDN -> Application Load Balancer (ALB) in Public Subnet.\n   - Tier 2 (Application): Auto-Scaling Group of EC2 instances in Private Subnets running Node.js / Python Web App.\n   - Tier 3 (Database): Amazon RDS MySQL (Multi-AZ Primary + Standby) in isolated DB Subnets.\n   - Storage & Assets: Amazon S3 bucket for static media uploads.\n   - Security: IAM Roles, KMS encryption, WAF, Security Groups, CloudWatch alarms."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "AWS Certified Solutions Architect Official Study Guide",
        "author": "Joe Baron"
      }
    ],
    "practiceLinks": [
      {
        "title": "AWS Hands-On Tutorials",
        "url": "https://aws.amazon.com/getting-started/hands-on/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Outline components of a 3-tier enterprise cloud application on AWS. (2 Marks)",
        "How is automated backup configured for a cloud project database? (2 Marks)",
        "State steps to set up a CloudWatch CPU alarm with SNS email notification. (2 Marks)"
      ],
      "sixMarks": [
        "Design 3-tier cloud application deployment architecture on AWS showing Route 53, ALB, Auto-Scaling EC2 in Private Subnet, Multi-AZ RDS, and S3. (6 Marks)",
        "Explain hands-on implementation steps for building a Serverless REST API using AWS API Gateway, Lambda, and DynamoDB. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Cloud System Projects. Detail end-to-end execution roadmap for deploying a scalable e-commerce website on AWS: VPC creation, security group rules, ALB configuration, EC2 user-data launch scripts, RDS multi-AZ provisioning, and CloudWatch dashboard setup. (10 Marks)"
      ]
    }
  }
];
