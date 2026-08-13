module.exports = [
  {
    "title": "Introduction to Network Security",
    "slug": "cryptography-network-security-introduction",
    "order": 1,
    "estimatedHours": 3,
    "difficulty": "Beginner",
    "description": "Understand information security fundamentals: CIA Triad (Confidentiality, Integrity, Availability), security threats, vulnerabilities, risks, cybersecurity policies, and practices.",
    "subTopics": [
      "Introduction to Information Security",
      "Need for Network Security",
      "Security Goals (Confidentiality, Integrity, Availability)",
      "Security Threats and Attacks",
      "Vulnerabilities and Risks",
      "Cyber Security Fundamentals",
      "Security Policies and Practices"
    ],
    "prerequisiteTitles": [],
    "learningObjectives": [
      "Define the CIA Triad: Confidentiality, Integrity, Availability.",
      "Distinguish Threats, Vulnerabilities, and Risks ($Risk = Threat \times Vulnerability \times Impact$).",
      "Formulate corporate cybersecurity policies and security governance models."
    ],
    "notes": [
      {
        "title": "The CIA Triad & Risk Assessment Equation",
        "content": "INTRODUCTION TO NETWORK SECURITY\n\n1. The CIA Triad:\n   - Confidentiality: Prevents unauthorized disclosure of sensitive data (Encryption, Access Control).\n   - Integrity: Ensures data is not modified or tampered with by unauthorized parties (Hashing, Digital Signatures).\n   - Availability: Ensures systems and network services remain accessible to authorized users when needed (DDoS Mitigation, Redundancy).\n\n2. Risk Equation:\n   Risk = Threat x Vulnerability x Asset Value\n   - Threat: Potential event that can cause harm.\n   - Vulnerability: Flaw or weakness in system security.\n   - Asset Value: Financial or operational worth of targeted data/system."
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
        "title": "NIST Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define CIA Triad principles in Network Security. (2 Marks)",
        "Differentiate between a Threat, a Vulnerability, and a Risk. (2 Marks)",
        "What is non-repudiation in information security? (2 Marks)"
      ],
      "sixMarks": [
        "Explain X.800 Security Architecture detailing Security Attacks, Security Mechanisms, and Security Services. (6 Marks)",
        "Describe cybersecurity threat categories: Malware, Ransomware, Social Engineering, and Zero-Day vulnerabilities. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Information Security Governance. Detail CIA triad trade-offs, threat modeling frameworks (STRIDE model), security risk assessment calculations, and ISO 27001 compliance standards. (10 Marks)"
      ]
    }
  },
  {
    "title": "Security Attacks and Services",
    "slug": "cryptography-network-security-attacks-and-services",
    "order": 2,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Classify network attacks: Passive Attacks (Eavesdropping, Traffic Analysis) vs Active Attacks (Masquerade, Replay, Modification, DoS/DDoS), and X.800 Security Services.",
    "subTopics": [
      "Types of Security Attacks (Passive Attacks, Active Attacks)",
      "Common Network Attacks (Malware, Phishing, Spoofing, DoS, DDoS)",
      "Security Services",
      "Security Mechanisms"
    ],
    "prerequisiteTitles": [
      "Introduction to Network Security"
    ],
    "learningObjectives": [
      "Distinguish Passive Attacks (hard to detect, emphasis on prevention) and Active Attacks (detectable, emphasis on recovery).",
      "Analyze Distributed Denial of Service (DDoS) attack vectors (SYN Flood, UDP Amplification, HTTP Flood).",
      "Map Security Services (Authentication, Access Control, Confidentiality, Integrity, Non-repudiation) to Security Mechanisms."
    ],
    "notes": [
      {
        "title": "Passive vs Active Attacks & DDoS Mechanisms",
        "content": "SECURITY ATTACKS AND SERVICES\n\n1. Passive vs Active Attacks:\n   - Passive Attacks: Eavesdropping, packet sniffing, traffic analysis. Goal is to obtain information without altering system resources. Hard to detect; solution is Encryption.\n   - Active Attacks: Masquerade (IP Spoofing), Replay, Message Modification, Denial of Service (DoS/DDoS). Goal is to alter system resources or disrupt operations.\n\n2. Common Attack Mechanisms:\n   - IP Spoofing: Forging source IP header address.\n   - Man-in-the-Middle (MitM): Intercepting and relaying communications between two unsuspecting parties.\n   - TCP SYN Flood: Flooding target with SYN packets without completing 3-way handshake to exhaust connection tables."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Network Security Essentials",
        "author": "William Stallings"
      }
    ],
    "practiceLinks": [
      {
        "title": "OWASP Top Ten Security Risks",
        "url": "https://owasp.org/www-project-top-ten/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between Passive Attacks and Active Attacks with examples. (2 Marks)",
        "Explain TCP SYN Flood DoS attack mechanics. (2 Marks)",
        "What is Phishing and how does Spear Phishing differ? (2 Marks)"
      ],
      "sixMarks": [
        "Explain X.800 Security Services: Authentication, Access Control, Data Confidentiality, Data Integrity, and Non-Repudiation with implementation mechanisms. (6 Marks)",
        "Describe Distributed Denial of Service (DDoS) amplification attacks (DNS Amplification, NTP Amplification) and defense strategies. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Network Attack Vectors & Mitigation. Detail ARP Poisoning, DNS Cache Poisoning, BGP Hijacking, Session Hijacking, and multi-layered intrusion defense architectures. (10 Marks)"
      ]
    }
  },
  {
    "title": "Introduction to Cryptography",
    "slug": "cryptography-network-security-introduction-to-cryptography",
    "order": 3,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Explore cryptographic principles: Plaintext, Ciphertext, Encryption, Decryption, Keys, Cryptanalysis, Kerckhoffs's Principle, and Symmetric vs Asymmetric paradigms.",
    "subTopics": [
      "Basics of Cryptography",
      "History of Cryptography",
      "Cryptographic Terminology (Plaintext, Ciphertext, Encryption, Decryption, Key)",
      "Cryptographic Algorithms",
      "Symmetric and Asymmetric Cryptography"
    ],
    "prerequisiteTitles": [
      "Introduction to Network Security"
    ],
    "learningObjectives": [
      "Understand Kerckhoffs's Principle: System security depends solely on key secrecy, not algorithm secrecy.",
      "Compare Symmetric Cryptography (Shared secret key) and Asymmetric Cryptography (Public/Private key pair).",
      "Classify Cryptanalytic Attacks: Ciphertext-Only, Known-Plaintext, Chosen-Plaintext, Chosen-Ciphertext."
    ],
    "notes": [
      {
        "title": "Kerckhoffs's Principle & Cryptanalysis Attack Models",
        "content": "INTRODUCTION TO CRYPTOGRAPHY\n\n1. Kerckhoffs's Principle:\n   A cryptographic system should be secure even if everything about the system, except the key, is public knowledge.\n\n2. Cryptanalysis Attack Models:\n   - Ciphertext-Only Attack: Attacker has access only to a set of ciphertexts.\n   - Known-Plaintext Attack: Attacker has pairs of known plaintext and corresponding ciphertext.\n   - Chosen-Plaintext Attack: Attacker can choose arbitrary plaintexts and obtain their ciphertexts.\n   - Chosen-Ciphertext Attack: Attacker can choose arbitrary ciphertexts and obtain their decrypted plaintexts."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Understanding Cryptography",
        "author": "Christof Paar, Jan Pelzl"
      }
    ],
    "practiceLinks": [
      {
        "title": "CryptoHack Interactive Cryptography Exercises",
        "url": "https://cryptohack.org/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State Kerckhoffs's Principle in cryptography. (2 Marks)",
        "Define Plaintext, Ciphertext, and Key. (2 Marks)",
        "Compare Known-Plaintext Attack and Chosen-Plaintext Attack. (2 Marks)"
      ],
      "sixMarks": [
        "Compare Symmetric Key Cryptography and Asymmetric Key Cryptography on key distribution, speed, key size, and digital signatures. (6 Marks)",
        "Explain Cryptanalysis attack classifications: Ciphertext-Only, Known-Plaintext, Chosen-Plaintext, and Chosen-Ciphertext. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Cryptographic Foundations. Detail historical evolution from Spartan Scytale to modern Ciphers, mathematical modulo arithmetic, entropy, one-time pad perfect secrecy, and key space brute-force limits ($2^{128}$ vs $2^{256}$). (10 Marks)"
      ]
    }
  },
  {
    "title": "Classical Cryptography Techniques",
    "slug": "cryptography-network-security-classical-techniques",
    "order": 4,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Master classical ciphers: Substitution Ciphers (Caesar, Monoalphabetic, Playfair 5x5 matrix, Hill Cipher), Transposition Ciphers (Rail Fence, Columnar Transposition), and frequency analysis.",
    "subTopics": [
      "Substitution Techniques (Caesar Cipher, Monoalphabetic, Playfair)",
      "Transposition Techniques (Rail Fence, Columnar Transposition)",
      "Limitations of Classical Encryption"
    ],
    "prerequisiteTitles": [
      "Introduction to Cryptography"
    ],
    "learningObjectives": [
      "Encrypt/Decrypt using Caesar Cipher ($C = (P + k) pmod{26}$).",
      "Construct 5x5 Playfair Cipher matrix and apply substitution rules.",
      "Execute Rail Fence and Row-Column Transposition encryption."
    ],
    "notes": [
      {
        "title": "Caesar, Playfair Matrix Rules & Rail Fence Ciphers",
        "content": "CLASSICAL CRYPTOGRAPHY CIPHERS\n\n1. Caesar Cipher Formula:\n   - Encryption: $C = (P + k) pmod{26}$\n   - Decryption: $P = (C - k) pmod{26}$\n\n2. Playfair Cipher (5x5 Matrix Rules):\n   - Key inserted into 5x5 grid (I/J combined), remaining alphabet letters fill matrix.\n   - Split plaintext into digraph pairs (insert 'X' if duplicate letters in pair).\n   - Rules:\n     * Same Row: Replace each with letter to right (wrap around).\n     * Same Column: Replace each with letter below (wrap around).\n     * Rectangle: Replace each with letter in same row, but column of the other letter."
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
        "title": "dcode.fr Classical Cipher Decoders & Exercises",
        "url": "https://www.dcode.fr/en"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Encrypt 'HELLO' using Caesar Cipher with key $k = 3$. (2 Marks)",
        "State the 3 letter-pair replacement rules in Playfair Cipher. (2 Marks)",
        "Why are classical ciphers vulnerable to Frequency Analysis attacks? (2 Marks)"
      ],
      "sixMarks": [
        "Encrypt plaintext 'SECRET MESSAGE' using Playfair Cipher with keyword 'MONARCHY'. Show 5x5 matrix and pair steps. (6 Marks)",
        "Encrypt 'DEFEND THE FORT' using Columnar Transposition Cipher with key '41325'. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Classical Cryptanalysis. Detail Letter Frequency Analysis (E-T-A-O-I-N), Monoalphabetic substitution cracking, Playfair 5x5 grid mechanics, Hill Cipher matrix multiplication, and Rail Fence transposition algorithms. (10 Marks)"
      ]
    }
  },
  {
    "title": "Symmetric Key Cryptography",
    "slug": "cryptography-network-security-symmetric-key-cryptography",
    "order": 5,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master modern symmetric ciphers: Block vs Stream Ciphers, Feistel Cipher Structure, Data Encryption Standard (DES), Triple-DES, Advanced Encryption Standard (AES 128/192/256), Blowfish, RC4, and Cipher Modes (ECB, CBC, CTR).",
    "subTopics": [
      "Introduction to Symmetric Encryption",
      "Block Cipher and Stream Cipher",
      "Data Encryption Standard (DES)",
      "Triple DES",
      "Advanced Encryption Standard (AES)",
      "Blowfish Algorithm",
      "RC4 Algorithm",
      "Key Management in Symmetric Cryptography"
    ],
    "prerequisiteTitles": [
      "Classical Cryptography Techniques"
    ],
    "learningObjectives": [
      "Understand AES round operations: SubBytes (S-Box), ShiftRows, MixColumns, AddRoundKey.",
      "Compare Block Cipher Modes of Operation: ECB (insecure), CBC (Initialization Vector IV), CTR (parallelizable).",
      "Understand DES Feistel structure (64-bit block, 56-bit key, 16 rounds)."
    ],
    "notes": [
      {
        "title": "AES Round Mechanics & Block Cipher Modes (ECB vs CBC)",
        "content": "SYMMETRIC KEY CRYPTOGRAPHY: DES & AES\n\n1. AES (Advanced Encryption Standard) 128-Bit Overview:\n   - Block Size = 128 bits (4x4 matrix of bytes called State).\n   - Key Lengths & Rounds: 128-bit key (10 rounds), 192-bit key (12 rounds), 256-bit key (14 rounds).\n   - 4 Transformations per Round:\n     1. SubBytes: Non-linear byte substitution using S-Box.\n     2. ShiftRows: Cyclic left shift of state rows.\n     3. MixColumns: Matrix multiplication over $GF(2^8)$.\n     4. AddRoundKey: XOR State with Round Key.\n\n2. Block Cipher Modes:\n   - ECB (Electronic Codebook): Each block encrypted independently. Identical plaintext blocks produce identical ciphertext blocks (Insecure!).\n   - CBC (Cipher Block Chaining): Each plaintext block XORed with previous ciphertext block before encryption ($C_i = E_k(P_i oplus C_{i-1})$). Uses IV."
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
        "title": "NIST AES Standard Specification",
        "url": "https://csrc.nist.gov/publications/detail/fips/197/final"
      }
    ],
    "questionBank": {
      "conceptual": [
        "List the 4 round transformations in AES encryption. (2 Marks)",
        "Why is Electronic Codebook (ECB) mode considered insecure for image/file encryption? (2 Marks)",
        "Differentiate between Block Ciphers and Stream Ciphers. (2 Marks)"
      ],
      "sixMarks": [
        "Explain AES 128-bit Encryption Architecture showing State matrix, SubBytes, ShiftRows, MixColumns, AddRoundKey, and Key Expansion. (6 Marks)",
        "Describe Cipher Block Chaining (CBC) mode encryption and decryption mechanics with block diagrams and Initialization Vector (IV) role. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Symmetric Block Ciphers. Detail DES Feistel structure (16 rounds, S-Box substitution, P-Box permutation, 56-bit key weakness & Meet-in-the-Middle attack on 2DES), Triple-DES (EDE mode), AES Galious Field $GF(2^8)$ arithmetic, and Counter (CTR) mode. (10 Marks)"
      ]
    }
  },
  {
    "title": "Asymmetric Key Cryptography",
    "slug": "cryptography-network-security-asymmetric-key-cryptography",
    "order": 6,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master Public Key Cryptography: RSA Algorithm (Key Generation, Encryption, Decryption, Modular Exponentiation), Diffie-Hellman Key Exchange, and Elliptic Curve Cryptography (ECC).",
    "subTopics": [
      "Introduction to Public Key Cryptography",
      "Principles of Asymmetric Encryption",
      "RSA Algorithm",
      "Diffie-Hellman Key Exchange",
      "Elliptic Curve Cryptography (ECC)",
      "Applications of Public Key Cryptography"
    ],
    "prerequisiteTitles": [
      "Symmetric Key Cryptography"
    ],
    "learningObjectives": [
      "Execute RSA Key Generation ($n = p cdot q$, $phi(n) = (p-1)(q-1)$, $e cdot d equiv 1 pmod{phi(n)}$), Encryption ($C = M^e pmod n$), Decryption ($M = C^d pmod n$).",
      "Calculate shared secret key using Diffie-Hellman Key Exchange protocol.",
      "Understand ECC efficiency advantage (256-bit ECC key $approx$ 3072-bit RSA key strength)."
    ],
    "notes": [
      {
        "title": "RSA Algorithm Step-by-Step Numerical Example",
        "content": "RSA ALGORITHM & DIFFIE-HELLMAN KEY EXCHANGE\n\n1. RSA Key Generation & Math:\n   - Select two distinct prime numbers $p = 61$, $q = 53$.\n   - Calculate $n = p \times q = 61 \times 53 = 3233$.\n   - Calculate Euler's Totient $phi(n) = (p-1)(q-1) = 60 \times 52 = 3120$.\n   - Choose public exponent $e = 17$ such that $gcd(e, phi(n)) = 1$.\n   - Calculate private exponent $d = e^{-1} pmod{phi(n)} Rightarrow 17d equiv 1 pmod{3120} Rightarrow d = 2753$.\n   - Public Key = $(e, n) = (17, 3233)$. Private Key = $(d, n) = (2753, 3233)$.\n   - Encryption of $M = 65$: $C = M^e pmod n = 65^{17} pmod{3233} = 2790$.\n   - Decryption of $C = 2790$: $M = C^d pmod n = 2790^{2753} pmod{3233} = 65$.\n\n2. Diffie-Hellman Key Exchange:\n   Public parameters: Prime $q$, Primitive root $alpha$.\n   - Alice chooses secret $X_A$, sends $Y_A = alpha^{X_A} pmod q$.\n   - Bob chooses secret $X_B$, sends $Y_B = alpha^{X_B} pmod q$.\n   - Shared Key $K = (Y_B)^{X_A} pmod q = (Y_A)^{X_B} pmod q$."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Understanding Cryptography",
        "author": "Christof Paar"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks RSA Algorithm Practice",
        "url": "https://www.geeksforgeeks.org/rsa-algorithm-in-cryptography/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Given $p = 3, q = 11, e = 7$, calculate RSA private exponent $d$ and modulus $n$. (2 Marks)",
        "Explain the Discrete Logarithm Problem underlying Diffie-Hellman security. (2 Marks)",
        "Why does Elliptic Curve Cryptography (ECC) require smaller key sizes than RSA for equivalent security? (2 Marks)"
      ],
      "sixMarks": [
        "Perform RSA Encryption and Decryption for primes $p=7, q=11$, public key $e=13$, and message $M=5$. Show all intermediate mod math. (6 Marks)",
        "Explain Diffie-Hellman Key Exchange protocol with sequence diagram and calculate shared key for $q=11, alpha=2, X_A=3, X_B=4$. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Asymmetric Key Cryptosystems. Detail RSA trapdoor one-way function mathematical proof ($M^{ed} equiv M pmod n$), Man-in-the-Middle vulnerability on unauthenticated Diffie-Hellman, Elliptic Curve point addition arithmetic ($y^2 = x^3 + ax + b$), and post-quantum cryptography threat. (10 Marks)"
      ]
    }
  },
  {
    "title": "Hash Functions and Message Authentication",
    "slug": "cryptography-network-security-hash-functions",
    "order": 7,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master cryptographic hashing: Properties of Hash Functions (Pre-image resistance, Second pre-image resistance, Collision resistance), MD5, SHA family (SHA-1, SHA-256, SHA-3), and HMAC.",
    "subTopics": [
      "Introduction to Hashing",
      "Properties of Hash Functions",
      "Message Digest",
      "MD5 Algorithm",
      "SHA Family (SHA-1, SHA-256, SHA-3)",
      "Message Authentication Code (MAC)",
      "Digital Signatures"
    ],
    "prerequisiteTitles": [
      "Asymmetric Key Cryptography"
    ],
    "learningObjectives": [
      "Understand 3 Security Properties of Cryptographic Hash Functions: Pre-image resistance (One-way), Second pre-image resistance, Collision resistance (Birthday Paradox $2^{n/2}$).",
      "Analyze SHA-256 compression function structure (512-bit message blocks, 256-bit digest).",
      "Construct Hash-based Message Authentication Codes (HMAC)."
    ],
    "notes": [
      {
        "title": "Cryptographic Hash Properties & HMAC Construction",
        "content": "HASH FUNCTIONS & HMAC\n\n1. 3 Essential Cryptographic Hash Properties:\n   - Pre-Image Resistance (One-Way): Given hash $h$, it is computationally infeasible to find message $m$ such that $H(m) = h$.\n   - Second Pre-Image Resistance: Given message $m_1$, it is infeasible to find $m_2 \neq m_1$ such that $H(m_1) = H(m_2)$.\n   - Collision Resistance: It is infeasible to find ANY two distinct messages $m_1 \neq m_2$ such that $H(m_1) = H(m_2)$ (Birthday Attack bound $approx 2^{n/2}$).\n\n2. HMAC (Hash-based Message Authentication Code):\n   Combines secret key $K$ with cryptographic hash function $H$:\n   $HMAC(K, M) = H((K^+ oplus opad)  ||  H((K^+ oplus ipad)  ||  M))$\n   Provides message data integrity AND sender authentication."
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
        "title": "SHA-256 Hash Generator & Online Decoders",
        "url": "https://emn178.github.io/online-tools/sha256.html"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State Pre-image resistance, Second pre-image resistance, and Collision resistance properties of hash functions. (2 Marks)",
        "What is the Birthday Paradox impact on Hash Function collision resistance? (2 Marks)",
        "Why is MD5 considered cryptographically broken today? (2 Marks)"
      ],
      "sixMarks": [
        "Explain HMAC (Hash-based Message Authentication Code) structure, inner/outer padding ($ipad, opad$), and security strength against length extension attacks. (6 Marks)",
        "Describe SHA-256 Compression Function pipeline showing 512-bit block padding, message schedule expansion, and 64 round functions. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Message Authentication & Hashing. Detail Merkle-Damgard construction, length extension vulnerability, SHA-3 Keccak sponge construction (Absorb/Squeeze phases), HMAC key derivation, and password hashing with Salt & Argon2/Bcrypt. (10 Marks)"
      ]
    }
  },
  {
    "title": "Authentication and Access Control",
    "slug": "cryptography-network-security-authentication-access-control",
    "order": 8,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Study identity & access systems: Password hashing (Salt, Pepper), Multi-Factor Authentication (MFA), Kerberos Authentication Protocol, and Access Control Models (DAC, MAC, RBAC).",
    "subTopics": [
      "User Authentication Concepts",
      "Password-Based Authentication",
      "Multi-Factor Authentication",
      "Biometric Authentication",
      "Authentication Protocols (Kerberos)",
      "Access Control Models (DAC, MAC, RBAC)"
    ],
    "prerequisiteTitles": [
      "Hash Functions and Message Authentication"
    ],
    "learningObjectives": [
      "Understand Kerberos 3-Tier Authentication Service: KDC, Authentication Server (AS), Ticket Granting Server (TGS).",
      "Compare Access Control Models: Discretionary Access Control (DAC), Mandatory Access Control (MAC - Bell-LaPadula), Role-Based Access Control (RBAC).",
      "Implement Password Salting to prevent Rainbow Table attacks."
    ],
    "notes": [
      {
        "title": "Kerberos Ticket Exchange Protocol & Access Control Models",
        "content": "AUTHENTICATION PROTOCOLS & ACCESS CONTROL\n\n1. Kerberos Authentication Protocol Flow:\n   - Step 1: Client -> AS (Authentication Server): Request TGT (Ticket Granting Ticket).\n   - Step 2: AS -> Client: Returns TGT encrypted with TGS secret key + Client/TGS Session Key encrypted with Client password hash.\n   - Step 3: Client -> TGS (Ticket Granting Server): Sends TGT + Service Request.\n   - Step 4: TGS -> Client: Returns Service Ticket encrypted with Target Server key.\n   - Step 5: Client -> Target Server: Sends Service Ticket to gain access.\n\n2. Access Control Models:\n   - DAC (Discretionary Access Control): Resource owner determines permissions (File ACLs in Linux/Windows).\n   - MAC (Mandatory Access Control): Central authority assigns security labels (Unclassified, Secret, Top Secret). Users cannot alter access.\n   - RBAC (Role-Based Access Control): Permissions assigned to organizational Roles (Admin, Manager, Student), users assigned to roles."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Network Security Essentials",
        "author": "William Stallings"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Access Control Models",
        "url": "https://www.geeksforgeeks.org/access-control-models-in-information-security/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain Kerberos TGT (Ticket Granting Ticket) concept. (2 Marks)",
        "What is Password Salting and how does it prevent Rainbow Table attacks? (2 Marks)",
        "Differentiate between DAC, MAC, and RBAC access control models. (2 Marks)"
      ],
      "sixMarks": [
        "Explain Kerberos V5 Authentication Protocol step-by-step detailing AS, TGS, Service Tickets, and Key Distribution Center (KDC). (6 Marks)",
        "Compare Mandatory Access Control (MAC) Bell-LaPadula model ('No Read Up, No Write Down') and Biba Integrity model ('No Read Down, No Write Up'). (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on User Authentication & Access Governance. Detail Multi-Factor Authentication (TOTP / HOTP RFC 6238), Biometric FAR/FRR metrics, OAuth 2.0 / OpenID Connect authorization flows, and RBAC role hierarchy design. (10 Marks)"
      ]
    }
  },
  {
    "title": "Digital Signatures and Certificates",
    "slug": "cryptography-network-security-digital-signatures",
    "order": 9,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Master Public Key Infrastructure (PKI): Digital Signature process (RSA / DSA signing and verification), X.509 Digital Certificates, Certificate Authorities (CA), and Certificate Revocation Lists (CRL / OCSP).",
    "subTopics": [
      "Digital Signature Concepts",
      "Digital Signature Process",
      "Public Key Infrastructure (PKI)",
      "Digital Certificates (X.509)",
      "Certificate Authorities (CA)",
      "Applications of Digital Signatures"
    ],
    "prerequisiteTitles": [
      "Asymmetric Key Cryptography",
      "Hash Functions and Message Authentication"
    ],
    "learningObjectives": [
      "Understand Digital Signature Generation ($S = [H(M)]^d pmod n$) and Verification ($H(M) stackrel{?}{=} S^e pmod n$).",
      "Analyze Public Key Infrastructure (PKI) hierarchy: Root CA -> Intermediate CA -> End Entity Certificate.",
      "Inspect X.509 Digital Certificate fields (Subject, Issuer, Validity, Public Key, Signature)."
    ],
    "notes": [
      {
        "title": "Digital Signature Generation/Verification & X.509 PKI Hierarchy",
        "content": "DIGITAL SIGNATURES & PUBLIC KEY INFRASTRUCTURE (PKI)\n\n1. Digital Signature Signing & Verification:\n   - Signing (Sender Alice):\n     1. Calculate message hash: $h = Hash(M)$.\n     2. Encrypt hash $h$ using Alice's PRIVATE key: $S = E_{K_{privA}}(h)$.\n     3. Send $(M, S)$ to Bob.\n   - Verification (Receiver Bob):\n     1. Calculate hash of received message: $h' = Hash(M)$.\n     2. Decrypt signature $S$ using Alice's PUBLIC key: $h'' = D_{K_{pubA}}(S)$.\n     3. If $h' == h''$, signature is VALID (Authenticity, Integrity, Non-repudiation).\n\n2. X.509 Digital Certificate Components:\n   - Version, Serial Number, Signature Algorithm ID (e.g. `sha256WithRSAEncryption`).\n   - Issuer Name (CA Name), Validity Period (Not Before / Not After).\n   - Subject Name (Domain / Owner), Subject Public Key Information.\n   - CA Digital Signature."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Understanding Cryptography",
        "author": "Christof Paar"
      }
    ],
    "practiceLinks": [
      {
        "title": "SSL Shopper SSL Certificate Checker & Decoder",
        "url": "https://www.sslshopper.com/certificate-decoder.html"
      }
    ],
    "questionBank": {
      "conceptual": [
        "How does a Digital Signature provide Non-Repudiation? (2 Marks)",
        "List key fields contained in an X.509 Digital Certificate. (2 Marks)",
        "What is the role of a Certificate Authority (CA) in PKI? (2 Marks)"
      ],
      "sixMarks": [
        "Explain Digital Signature Signing and Verification process using RSA and SHA-256 with flow diagram. (6 Marks)",
        "Describe PKI Trust Chain from Root CA to End Entity Certificate, detailing CRL (Certificate Revocation List) and OCSP validation. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Public Key Infrastructure & Signatures. Detail Digital Signature Standard (DSA / ECDSA), X.509 v3 certificate extensions, Let's Encrypt automated ACME protocol, and Certificate Transparency (CT) logs. (10 Marks)"
      ]
    }
  },
  {
    "title": "Network Security Protocols",
    "slug": "cryptography-network-security-protocols",
    "order": 10,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Explore protocol security: SSL/TLS 1.3 Handshake, HTTPS, SSH (Secure Shell), IPsec (AH, ESP, IKE), VPN, and Email Security (PGP, S/MIME).",
    "subTopics": [
      "Secure Communication Concepts",
      "SSL/TLS Protocol",
      "HTTPS",
      "SSH Protocol",
      "IP Security (IPSec)",
      "VPN Security",
      "Email Security (PGP, S/MIME)"
    ],
    "prerequisiteTitles": [
      "Digital Signatures and Certificates"
    ],
    "learningObjectives": [
      "Understand TLS 1.3 Handshake protocol sequence (Key Exchange, Server Authentication, Cipher suite negotiation).",
      "Analyze IPsec architecture: Authentication Header (AH) vs Encapsulating Security Payload (ESP) in Transport vs Tunnel modes.",
      "Compare Pretty Good Privacy (PGP) and S/MIME email security."
    ],
    "notes": [
      {
        "title": "TLS 1.3 Handshake & IPsec AH vs ESP Modes",
        "content": "NETWORK SECURITY PROTOCOLS: TLS & IPSEC\n\n1. TLS 1.3 Handshake Sequence (1-RTT):\n   - ClientHello: Client sends supported Cipher Suites + Client Diffie-Hellman Key Share ($Y_C$).\n   - ServerHello: Server selects Cipher Suite + sends Server DH Key Share ($Y_S$) + Encrypted Extensions + Server Certificate + CertificateVerify (Signature) + Finished.\n   - Client: Verifies Server Certificate, computes shared key $K$, sends Finished. Encrypted Application Data begins.\n\n2. IPsec Protocols:\n   - AH (Authentication Header - Protocol 51): Provides Data Integrity and Authentication for entire IP packet. Does NOT provide encryption/confidentiality.\n   - ESP (Encapsulating Security Payload - Protocol 50): Provides Data Confidentiality (encryption), Data Integrity, and Authentication.\n   - Transport Mode: Encrypts/authenticates IP payload only (Host-to-Host).\n   - Tunnel Mode: Encrypts/authenticates entire inner IP packet + adds new outer IP header (Gateway-to-Gateway VPN)."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Network Security Essentials",
        "author": "William Stallings"
      }
    ],
    "practiceLinks": [
      {
        "title": "Wireshark TLS Handshake Capture Analysis",
        "url": "https://wiki.wireshark.org/TLS"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain the difference between Transport Mode and Tunnel Mode in IPsec VPNs. (2 Marks)",
        "Differentiate between IPsec AH (Authentication Header) and ESP (Encapsulating Security Payload). (2 Marks)",
        "How does HTTPS secure HTTP communications over port 443? (2 Marks)"
      ],
      "sixMarks": [
        "Explain TLS 1.3 Handshake protocol step-by-step showing ClientHello, ServerHello, Certificate Verification, Key Exchange, and Encrypted Data transfer. (6 Marks)",
        "Describe Email Security protocols: PGP (Pretty Good Privacy) web of trust vs S/MIME X.509 certificate authority model. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Network Layer & Transport Layer Security. Detail IPsec Security Association (SA), Internet Key Exchange (IKEv2) phases, SSH v2 architecture (Transport, Auth, Connection protocols), and OpenVPN SSL tunneling mechanics. (10 Marks)"
      ]
    }
  },
  {
    "title": "Firewall and Intrusion Detection Systems",
    "slug": "cryptography-network-security-firewall-and-ids",
    "order": 11,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master network perimeter defense: Packet Filtering Firewalls, Stateful Inspection Firewalls, Application Layer Firewalls (WAF), IDS (Signature-based vs Anomaly-based), and IPS.",
    "subTopics": [
      "Introduction to Firewalls",
      "Types of Firewalls (Packet Filtering, Stateful, Application Firewall)",
      "Firewall Configuration Basics",
      "Intrusion Detection System (IDS)",
      "Intrusion Prevention System (IPS)",
      "Security Monitoring"
    ],
    "prerequisiteTitles": [
      "Security Attacks and Services"
    ],
    "learningObjectives": [
      "Compare Packet Filtering Firewalls (OSI Layer 3/4 header evaluation) and Stateful Firewalls (State table tracking).",
      "Distinguish Intrusion Detection Systems (IDS - passive monitoring alert) and Intrusion Prevention Systems (IPS - inline active blocking).",
      "Compare Signature-Based Detection (known attack patterns) and Anomaly-Based Detection (baseline deviation ML models)."
    ],
    "notes": [
      {
        "title": "Firewall Types & Signature vs Anomaly IDS",
        "content": "FIREWALLS & INTRUSION DETECTION SYSTEMS (IDS/IPS)\n\n1. Firewall Classifications:\n   - Packet Filtering Firewall (Layer 3/4): Inspects individual IP/TCP headers (Src IP, Dst IP, Port) against rule table. Stateless, fast, vulnerable to spoofing.\n   - Stateful Inspection Firewall (Layer 4): Tracks connection state (TCP 3-way handshake state table). Ensures incoming packets match established outgoing requests.\n   - Application-Level Gateway / WAF (Layer 7): Inspects application payload contents (HTTP headers, SQL queries). Deep packet inspection.\n\n2. IDS vs IPS:\n   - IDS (Intrusion Detection System): Deployed out-of-band (promiscuous tap). Monitors traffic, generates alert on threat detection.\n   - IPS (Intrusion Prevention System): Deployed inline. Automatically drops malicious packets and resets TCP connections."
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
        "title": "Snort IDS Rule Writing Documentation",
        "url": "https://www.snort.org/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between Stateful Firewalls and Stateless Packet Filtering Firewalls. (2 Marks)",
        "Compare IDS (Intrusion Detection) and IPS (Intrusion Prevention). (2 Marks)",
        "Explain Signature-based vs Anomaly-based detection in IDS. (2 Marks)"
      ],
      "sixMarks": [
        "Explain Web Application Firewall (WAF) working at OSI Layer 7 to block SQL Injection and Cross-Site Scripting (XSS) attacks. (6 Marks)",
        "Describe DMZ (Demilitarized Zone) network architecture with External and Internal Dual-Homed Firewalls. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Perimeter Defense Systems. Detail Snort IDS rule syntax (`alert tcp $EXTERNAL_NET any -> $HOME_NET 80 ...`), Next-Generation Firewalls (NGFW), SIEM log aggregation (Splunk/ELK), and zero-trust network architecture (ZTNA). (10 Marks)"
      ]
    }
  },
  {
    "title": "Wireless Network Security",
    "slug": "cryptography-network-security-wireless-security",
    "order": 12,
    "estimatedHours": 4,
    "difficulty": "Intermediate",
    "description": "Explore wireless security: WEP vulnerabilities, WPA, WPA2 (AES-CCMP), WPA3 (SAE Dragonfly handshake), 802.1X Enterprise EAP authentication, and Bluetooth security.",
    "subTopics": [
      "Wireless Security Challenges",
      "Wi-Fi Security",
      "WEP Security",
      "WPA and WPA2",
      "WPA3",
      "Bluetooth Security",
      "Mobile Network Security"
    ],
    "prerequisiteTitles": [
      "Symmetric Key Cryptography"
    ],
    "learningObjectives": [
      "Analyze WEP security flaws (RC4 stream cipher + 24-bit IV reuse $\rightarrow$ FMS attack).",
      "Understand WPA2 AES-CCMP encryption and 4-Way Handshake.",
      "Explain WPA3 Simultaneous Authentication of Equals (SAE Dragonfly protocol) protecting against offline dictionary attacks."
    ],
    "notes": [
      {
        "title": "WEP Flaws, WPA2 4-Way Handshake & WPA3 SAE Dragonfly",
        "content": "WIRELESS NETWORK SECURITY\n\n1. Why WEP (Wired Equivalent Privacy) Failed:\n   - Uses RC4 stream cipher with a short 24-bit Initialization Vector (IV).\n   - Small IV size causes IV reuse within hours on busy networks.\n   - Allows attackers to execute FMS / PTW statistical attacks to recover 128-bit WEP key in minutes.\n\n2. WPA2 vs WPA3 Improvements:\n   - WPA2: Uses AES-CCMP encryption and WPA2 4-Way Handshake. Vulnerable to offline dictionary attacks if pre-shared key (PSK) is captured (KRACK attack).\n   - WPA3: Uses WPA3-Personal SAE (Simultaneous Authentication of Equals) Dragonfly handshake. Provides Forward Secrecy and renders offline dictionary attacks ineffective even with weak passwords."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "802.11 Wireless Networks: The Definitive Guide",
        "author": "Matthew S. Gast"
      }
    ],
    "practiceLinks": [
      {
        "title": "Wi-Fi Alliance WPA3 Security Specification",
        "url": "https://www.wi-fi.org/discover-wi-fi/security"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Why is WEP insecure? Mention IV size weakness. (2 Marks)",
        "How does WPA3 SAE (Simultaneous Authentication of Equals) mitigate offline dictionary attacks? (2 Marks)",
        "What is 802.1X RADIUS authentication in Enterprise Wi-Fi? (2 Marks)"
      ],
      "sixMarks": [
        "Explain WPA2 4-Way Handshake protocol deriving PMK (Pairwise Master Key) and PTK (Pairwise Transient Key). (6 Marks)",
        "Describe Rogue AP (Access Point) attacks, Evil Twin attacks, and Deauthentication frame spoofing in Wi-Fi networks. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Wireless Security Engineering. Detail WEP RC4 IV collision mathematics, WPA2-Enterprise EAP-TLS certificate authentication, WPA3 Dragonfly zero-knowledge proof, KRACK vulnerability mitigation, and Bluetooth pairing security. (10 Marks)"
      ]
    }
  },
  {
    "title": "Web Security",
    "slug": "cryptography-network-security-web-security",
    "order": 13,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master application security: OWASP Top 10 vulnerabilities, SQL Injection (SQLi), Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF), Session Management, and Same-Origin Policy.",
    "subTopics": [
      "Web Security Fundamentals",
      "Common Web Attacks (SQL Injection, XSS, CSRF)",
      "Secure Web Development Practices",
      "Authentication Security",
      "Session Security"
    ],
    "prerequisiteTitles": [
      "Network Security Protocols"
    ],
    "learningObjectives": [
      "Analyze SQL Injection mechanisms and prevent using Parameterized Prepared Statements.",
      "Distinguish Reflected, Stored, and DOM-based XSS attacks.",
      "Prevent CSRF using Anti-CSRF Tokens and SameSite cookie attributes."
    ],
    "notes": [
      {
        "title": "SQL Injection, XSS & CSRF Prevention Code Examples",
        "content": "WEB APPLICATION SECURITY: OWASP TOP 10\n\n1. SQL Injection (SQLi) & Prevention:\n   - Vulnerable Query: `SELECT * FROM users WHERE user = '` + input + `'`\n   - Malicious Input: `' OR '1'='1` $Rightarrow$ Bypass authentication!\n   - Prevention (Parameterized Query in Node.js):\n     `db.query('SELECT * FROM users WHERE username = ?', [username], callback);`)\n\n2. Cross-Site Scripting (XSS) vs CSRF:\n   - XSS: Attacker injects malicious JavaScript into vulnerable web app executed by victim browser (Steals Session Cookies). Fix: HTML Entity Encoding & Content Security Policy (CSP).\n   - CSRF: Attacker tricks authenticated browser into sending unauthorized HTTP request to target site. Fix: Anti-CSRF Synchronizer Tokens & `SameSite=Strict` cookies."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "The Web Application Hacker's Handbook",
        "author": "Dafydd Stuttard, Marcus Pinto"
      }
    ],
    "practiceLinks": [
      {
        "title": "PortSwigger Web Security Academy Labs",
        "url": "https://portswigger.net/web-security"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain how Parameterized Queries prevent SQL Injection attacks. (2 Marks)",
        "Differentiate between Stored XSS and Reflected XSS. (2 Marks)",
        "How do Anti-CSRF tokens defend against Cross-Site Request Forgery? (2 Marks)"
      ],
      "sixMarks": [
        "Explain SQL Injection attack vectors (In-band, Blind boolean, Time-based) with code examples and defense mechanisms. (6 Marks)",
        "Describe Cross-Site Request Forgery (CSRF) attack workflow and defense strategies using SameSite Cookies and Anti-CSRF Tokens. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Web Security Architecture. Detail OWASP Top 10 vulnerabilities, Content Security Policy (CSP) HTTP headers, Session Hijacking & Fixation defense, Same-Origin Policy (SOP), and CORS header configuration. (10 Marks)"
      ]
    }
  },
  {
    "title": "Cloud and Application Security",
    "slug": "cryptography-network-security-cloud-and-application-security",
    "order": 14,
    "estimatedHours": 4,
    "difficulty": "Advanced",
    "description": "Explore cloud & software security: Cloud Shared Responsibility, Data Encryption at-rest/in-transit, DevSecOps, Secure SDLC (Threat Modeling, SAST, DAST), and container security.",
    "subTopics": [
      "Cloud Security Fundamentals",
      "Data Protection in Cloud",
      "Identity and Access Management",
      "Application Security Concepts",
      "Secure Software Development Lifecycle (Secure SDLC)",
      "Security Testing Basics"
    ],
    "prerequisiteTitles": [
      "Web Security"
    ],
    "learningObjectives": [
      "Integrate security into Secure SDLC stages (Design Threat Modeling, SAST Static Analysis, DAST Dynamic Testing).",
      "Understand Cloud Security controls: KMS envelope encryption, IAM policies, and VPC isolation.",
      "Execute SAST/DAST automated vulnerability scanning in CI/CD pipelines."
    ],
    "notes": [
      {
        "title": "Secure SDLC Pipeline, SAST vs DAST & Envelope Encryption",
        "content": "CLOUD & SECURE SDLC SECURITY\n\n1. Secure SDLC Pipeline Stages:\n   - Requirements: Define Security & Privacy Requirements.\n   - Design: Threat Modeling (STRIDE / PASTA framework).\n   - Development: Secure Coding Standards & SAST (Static Application Security Testing - SonarQube).\n   - Testing: DAST (Dynamic Application Security Testing - OWASP ZAP) & Dependency Vulnerability Scanning (Snyk).\n   - Deployment: Container Image Scanning (Trivy) & Cloud Security Posture Management (CSPM).\n\n2. Envelope Encryption in Cloud:\n   Data encrypted using Data Encryption Key (DEK). DEK is encrypted using Key Encryption Key (KEK) managed by KMS."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Alice and Bob Learn Application Security",
        "author": "Tanya Janca"
      }
    ],
    "practiceLinks": [
      {
        "title": "OWASP DevSecOps Guideline",
        "url": "https://owasp.org/www-project-devsecops-guideline/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Compare SAST (Static Testing) and DAST (Dynamic Testing) in Secure SDLC. (2 Marks)",
        "What is Threat Modeling using the STRIDE framework? (2 Marks)",
        "Explain Envelope Encryption in Cloud Storage. (2 Marks)"
      ],
      "sixMarks": [
        "Explain DevSecOps CI/CD pipeline security integration showing SAST code scanning, dependency check, container image scanning, and DAST staging test. (6 Marks)",
        "Describe Cloud Identity and Access Management (IAM) role-based security policies and Key Management Service (KMS) HSM protection. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Application Security Program Engineering. Detail Secure SDLC maturity models (OWASP SAMM), threat modeling STRIDE taxonomy (Spoofing, Tampering, Repudiation, Information Disclosure, DoS, Elevation of Privilege), software bill of materials (SBOM), and cloud container runtime security. (10 Marks)"
      ]
    }
  },
  {
    "title": "Cyber Security and Ethical Hacking Basics",
    "slug": "cryptography-network-security-ethical-hacking",
    "order": 15,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Learn penetration testing: Ethical Hacking phases (Reconnaissance, Scanning, Exploitation, Post-Exploitation), Nmap port scanning, Metasploit framework, Incident Response, and Digital Forensics.",
    "subTopics": [
      "Introduction to Ethical Hacking",
      "Penetration Testing Basics",
      "Vulnerability Assessment",
      "Security Tools Overview (Nmap, Metasploit, Wireshark)",
      "Incident Response",
      "Digital Forensics Basics"
    ],
    "prerequisiteTitles": [
      "Web Security"
    ],
    "learningObjectives": [
      "Understand 5 Phases of Ethical Hacking: Reconnaissance, Scanning, Gaining Access, Maintaining Access, Covering Tracks.",
      "Execute Nmap CLI port scanning commands (`nmap -sS -sV -p- <target>`).",
      "Understand Incident Response lifecycle (Preparation, Detection/Analysis, Containment, Eradication, Recovery, Post-Incident)."
    ],
    "notes": [
      {
        "title": "Penetration Testing Phases, Nmap Commands & Incident Response",
        "content": "ETHICAL HACKING & PENETRATION TESTING\n\n1. 5 Phases of Ethical Hacking:\n   1. Reconnaissance (Footprinting): Passive & Active OSINT information gathering (Whois, Shodan).\n   2. Scanning & Enumeration: Identifying active hosts, open ports, OS versions (Nmap).\n   3. Gaining Access (Exploitation): Exploiting unpatched vulnerabilities (Metasploit).\n   4. Maintaining Access: Establishing backdoors, persistence, privilege escalation.\n   5. Covering Tracks / Reporting: Clearing log entries & preparing executive remediation report.\n\n2. Essential Nmap CLI Commands:\n   - SYN Stealth Scan: `nmap -sS 192.168.1.1`\n   - Version Detection & OS Detection: `nmap -sV -O 192.168.1.1`\n   - Full Port Scan: `nmap -p 1-65535 192.168.1.1`"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "The Basics of Hacking and Penetration Testing",
        "author": "Patrick Engebretson"
      }
    ],
    "practiceLinks": [
      {
        "title": "TryHackMe Cyber Security Training",
        "url": "https://tryhackme.com/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State the 5 phases of Ethical Hacking in order. (2 Marks)",
        "Write Nmap command syntax for a SYN Stealth Port Scan with Service Version detection. (2 Marks)",
        "What is the difference between Vulnerability Assessment and Penetration Testing (VAPT)? (2 Marks)"
      ],
      "sixMarks": [
        "Explain NIST Incident Response Lifecycle: Preparation, Detection & Analysis, Containment/Eradication/Recovery, and Post-Incident Activity. (6 Marks)",
        "Describe Digital Forensics Order of Volatility for evidence collection (Registers/Cache -> RAM -> Disk -> Backup media). (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Penetration Testing Methodology. Detail Black Box vs White Box vs Gray Box testing, Metasploit module architecture (Exploits, Payloads, Meterpreter), memory buffer overflow exploitation mechanics, and writing executive remediation reports. (10 Marks)"
      ]
    }
  },
  {
    "title": "Blockchain and Modern Security",
    "slug": "cryptography-network-security-blockchain-and-modern-security",
    "order": 16,
    "estimatedHours": 4,
    "difficulty": "Advanced",
    "description": "Explore decentralized security: Cryptographic primitives in Blockchain (SHA-256 Merkle Trees, ECDSA signatures), Proof of Work / Proof of Stake consensus, Smart Contract security, and Quantum-Resistant Cryptography.",
    "subTopics": [
      "Introduction to Blockchain Security",
      "Cryptography in Blockchain",
      "Hashing in Blockchain",
      "Digital Signatures in Blockchain",
      "Smart Contract Security Basics",
      "Future Trends in Network Security"
    ],
    "prerequisiteTitles": [
      "Hash Functions and Message Authentication",
      "Digital Signatures and Certificates"
    ],
    "learningObjectives": [
      "Understand Merkle Tree root hash calculation in Blockchain blocks.",
      "Analyze ECDSA (Elliptic Curve Digital Signature Algorithm) wallet address generation.",
      "Identify Smart Contract vulnerabilities (Reentrancy attacks, Integer Overflow/Underflow)."
    ],
    "notes": [
      {
        "title": "Blockchain Merkle Trees & Smart Contract Reentrancy Vulnerability",
        "content": "BLOCKCHAIN SECURITY & SMART CONTRACT AUDITING\n\n1. Merkle Tree Architecture:\n   Binary tree of hashes where leaf nodes contain transactions and parent nodes contain hash of concatenated child hashes:\n   $Node_{AB} = Hash(Hash(Tx_A)  ||  Hash(Tx_B))$.\n   Allows efficient, secure verification of transaction inclusion ($O(log N)$ proof size).\n\n2. Smart Contract Reentrancy Attack:\n   Occurs when an external contract calls back into the vulnerable withdraw function before state balance is updated.\n   - Vulnerable Pattern: Send ETH $\rightarrow$ Update Balance.\n   - Secure Pattern (Checks-Effects-Interactions): Check Balance $\rightarrow$ Update Balance $\rightarrow$ Send ETH."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Mastering Blockchain",
        "author": "Imran Bashir"
      }
    ],
    "practiceLinks": [
      {
        "title": "Ethernaut Smart Contract Hacking Game",
        "url": "https://ethernaut.openzeppelin.com/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain how Merkle Trees provide efficient transaction verification in Blockchain. (2 Marks)",
        "How is ECDSA used for Bitcoin / Ethereum wallet digital signatures? (2 Marks)",
        "What is a Reentrancy attack in Ethereum Smart Contracts? (2 Marks)"
      ],
      "sixMarks": [
        "Explain Blockchain Block structure showing Block Header (Previous Hash, Merkle Root, Timestamp, Nonce) and Proof-of-Work mining. (6 Marks)",
        "Describe Post-Quantum Cryptography (PQC) lattice-based algorithms selected by NIST to replace RSA/ECC. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Blockchain Cryptography & Smart Contract Security. Detail Merkle proof calculations, 51% attacks, Smart Contract audit checklists, reentrancy guard modifiers, and Zero-Knowledge Proofs (zk-SNARKs) privacy protocols. (10 Marks)"
      ]
    }
  },
  {
    "title": "Cryptography and Network Security Applications",
    "slug": "cryptography-network-security-applications",
    "order": 17,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Real-world security case studies: Secure Online Banking (PCI-DSS), E-Commerce TLS/Payment Gateways, IoT Security (CoAP, DTLS), Enterprise Zero-Trust Architecture, and Security Incident Auditing.",
    "subTopics": [
      "Secure Banking Systems",
      "Secure Communication Systems",
      "E-Commerce Security",
      "IoT Security",
      "Enterprise Network Security",
      "Real-World Security Case Studies"
    ],
    "prerequisiteTitles": [
      "Cloud and Application Security",
      "Cyber Security and Ethical Hacking Basics"
    ],
    "learningObjectives": [
      "Design end-to-end secure architecture for E-Commerce / Online Banking applications.",
      "Understand PCI-DSS compliance requirements for credit card data processing.",
      "Formulate Zero-Trust Enterprise Security Architecture (Never Trust, Always Verify)."
    ],
    "notes": [
      {
        "title": "Enterprise Zero-Trust Architecture & PCI-DSS Compliance",
        "content": "REAL-WORLD NETWORK SECURITY ARCHITECTURES\n\n1. Zero-Trust Security Architecture Principles:\n   - \"Never Trust, Always Verify\": No user or device is trusted by default, inside or outside perimeter.\n   - Micro-Segmentation: Partitioning network into isolated security zones.\n   - Continuous Identity Verification: Re-authenticating requests using MFA, device health checks, and risk-based telemetry.\n\n2. PCI-DSS Key Compliance Requirements:\n   - Install and maintain firewall configurations.\n   - Encrypt transmission of cardholder data across open, public networks (TLS 1.2+).\n   - Use and regularly update anti-virus software.\n   - Restrict access to cardholder data by business need-to-know."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Zero Trust Networks",
        "author": "Evan Gilman, Doug Barth"
      }
    ],
    "practiceLinks": [
      {
        "title": "PCI Security Standards Council Official Site",
        "url": "https://www.pcisecuritystandards.org/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State core principles of Zero-Trust Security Architecture. (2 Marks)",
        "What is PCI-DSS compliance in e-commerce payment systems? (2 Marks)",
        "How is DTLS (Datagram Transport Layer Security) used in IoT networks? (2 Marks)"
      ],
      "sixMarks": [
        "Design 3-tier Secure Online Banking Architecture showing WAF, Mutual TLS (mTLS), HSM key storage, Database encryption, and SIEM monitoring. (6 Marks)",
        "Analyze a real-world cybersecurity breach case study (e.g. SolarWinds Supply Chain Attack / Equifax breach) detailing root cause and remediation. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Enterprise Security Systems Design. Detail secure payment gateway flow, tokenization vs encryption of credit cards, IoT device bootstrapping (EST / SCEP), enterprise SOC (Security Operations Center) workflows, and disaster recovery business continuity plans (BCP/DRP). (10 Marks)"
      ]
    }
  }
];
