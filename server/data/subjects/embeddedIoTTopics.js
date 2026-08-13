module.exports = [
  {
    "title": "Introduction to Embedded Systems",
    "slug": "embedded-systems-and-iot-introduction-to-embedded-systems",
    "order": 1,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Understand embedded foundations: Characteristics (real-time constraints, dedicated function, resource-constrained), applications, General-Purpose Computers vs Embedded Systems, system architecture, components, design metrics, and EDLC (Embedded Development Life Cycle).",
    "subTopics": [
      "Introduction to Embedded Systems",
      "Characteristics of Embedded Systems",
      "Applications of Embedded Systems",
      "General Purpose Computers vs Embedded Systems",
      "Embedded System Architecture",
      "Components of Embedded Systems",
      "Design Constraints",
      "Embedded System Development Life Cycle"
    ],
    "prerequisiteTitles": [],
    "learningObjectives": [
      "Define 5 core characteristics of embedded systems: Dedicated purpose, real-time response, reactive operations, low power, and tight cost/size constraints.",
      "Compare General Purpose Computers (PC/Server) vs Embedded Systems on CPU architecture, OS, memory, and application flexibility.",
      "Explain the 7 stages of the Embedded Development Life Cycle (EDLC): Need statement, specifications, architecture design, hardware/software co-design, integration, testing, and deployment."
    ],
    "notes": [
      {
        "title": "General Purpose vs Embedded Systems & EDLC Architecture",
        "content": "INTRODUCTION TO EMBEDDED SYSTEMS\n\n1. General Purpose Computer vs Embedded System Comparison:\n   - General Purpose (PC/Laptop): Multi-purpose, user configurable software, rich GUI, abundant RAM/storage, high power consumption.\n   - Embedded System: Single dedicated task, fixed pre-flashed firmware, minimal/no display, constrained RAM (KB/MB), low power, real-time operating constraints.\n\n2. Embedded Hardware Architecture Components:\n   - Core Processing: Microcontroller (MCU) / SoC containing CPU, Memory, Timers, and I/O.\n   - Sensors (Inputs): Temperature (DHT11/LM35), Light (LDR), Ultrasonic (HC-SR04).\n   - Actuators (Outputs): Relays, DC/Servo Motors, Buzzers, OLED/LCD displays.\n   - Power Unit: Regulators (LM7805, AMS1117 3.3V), Lithium batteries, Solar power.\n   - Communication Interface: UART, SPI, I2C, CAN Bus, Wi-Fi, Bluetooth."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Introduction to Embedded Systems",
        "author": "Shibu K.V."
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Embedded Systems Overview",
        "url": "https://www.geeksforgeeks.org/introduction-of-embedded-systems/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State 4 key differences between General Purpose Computers and Embedded Systems. (2 Marks)",
        "Define Hard Real-Time vs Soft Real-Time embedded systems. (2 Marks)",
        "What is the Embedded Development Life Cycle (EDLC)? (2 Marks)"
      ],
      "sixMarks": [
        "Explain Embedded Systems Hardware Architecture with a block diagram showing Processor, Memory, I/O ports, Sensors, Actuators, and Communication Bus. (6 Marks)",
        "Describe key design constraints in embedded engineering: Power consumption, Unit cost, Size, Performance, and Reliability. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Embedded System Foundations. Detail 8051 vs ARM Cortex-M architecture, Von Neumann vs Harvard memory architecture, RISC vs CISC execution, and co-design hardware/software partition strategies. (10 Marks)"
      ]
    }
  },
  {
    "title": "Microprocessors and Microcontrollers",
    "slug": "embedded-systems-and-iot-microprocessors-and-microcontrollers",
    "order": 2,
    "estimatedHours": 5,
    "difficulty": "Beginner",
    "description": "Compare computing engines: Microprocessor (ALU/Register only, external RAM/ROM) vs Microcontroller (CPU + RAM + ROM + Timers + I/O on single chip), 8051 architecture, ARM Cortex-M 32-bit, ESP32 dual-core SoC, Raspberry Pi single-board computer, and Arduino UNO.",
    "subTopics": [
      "Introduction to Microprocessors",
      "Introduction to Microcontrollers",
      "Difference Between Microprocessors and Microcontrollers",
      "8051 Microcontroller Basics",
      "ARM Microcontrollers",
      "ESP32 Overview",
      "Raspberry Pi Overview",
      "Arduino Overview"
    ],
    "prerequisiteTitles": [
      "Introduction to Embedded Systems"
    ],
    "learningObjectives": [
      "Differentiate Microprocessors (Intel i7, 8086) and Microcontrollers (ATmega328P, ESP32, 8051).",
      "Compare 8-bit (8051/ATmega328P), 32-bit RISC (ARM Cortex-M4 / ESP32 Xtensa LX6), and Single Board Computers (Raspberry Pi Broadcom BCM2711).",
      "Evaluate hardware development platforms: Arduino (hobby/rapid prototyping), ESP32 (IoT Wi-Fi/BLE), Raspberry Pi (Embedded Linux/Edge AI)."
    ],
    "notes": [
      {
        "title": "Microprocessor vs Microcontroller Comparison & Board Spec Matrix",
        "content": "MICROPROCESSORS VS MICROCONTROLLERS & PLATFORMS\n\n1. Microprocessor ($mu P$) vs Microcontroller ($mu C$):\n   - Microprocessor: CPU only on chip. RAM, ROM, Timers, I/O ports attached EXTERNALLY on motherboard. High speed, high cost (e.g. Intel Core, 8086).\n   - Microcontroller: CPU, RAM, Flash ROM, Timers, GPIO, ADC, UART integrated on a SINGLE silicon die. Low power, low cost, dedicated embedded tasks (e.g. ATmega328P, ESP32).\n\n2. Hardware Platform Comparison Matrix:\n-------------------------------------------------------------------------------------------------\nPlatform       | Processor Core            | Architecture | Operating Voltage | Connectivity\n-------------------------------------------------------------------------------------------------\nArduino UNO    | ATmega328P (8-bit AVR)     | Harvard 16MHz| 5V DC             | USB Serial\nESP32          | Tensilica LX6 (32-bit Dual)| Harvard 240MHz| 3.3V DC          | Wi-Fi + BLE 4.2\nRaspberry Pi 4 | ARM Cortex-A72 (64-bit 4x)| ARMv8 1.5GHz | 5V DC USB-C       | Wi-Fi + BLE + Ethernet\n-------------------------------------------------------------------------------------------------"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "The 8051 Microcontroller and Embedded Systems",
        "author": "Muhammad Ali Mazidi"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Microprocessor vs Microcontroller",
        "url": "https://www.geeksforgeeks.org/difference-between-microprocessor-and-microcontroller/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Compare Microprocessors and Microcontrollers on 4 parameters. (2 Marks)",
        "State features of ESP32 microcontroller SoC. (2 Marks)",
        "What is the difference between Harvard and Von Neumann computer architecture? (2 Marks)"
      ],
      "sixMarks": [
        "Explain 8051 Microcontroller Architecture detailing 4KB ROM, 128B RAM, Timers T0/T1, Interrupts, and Ports P0-P3. (6 Marks)",
        "Compare Arduino UNO, ESP32, and Raspberry Pi 4 on clock speed, memory, GPIO, voltage, and wireless connectivity. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Modern Embedded Microcontrollers. Detail ARM Cortex-M architecture (NVIC, Thumb-2 instruction set, 3-stage pipeline), ESP32 FreeRTOS dual-core task distribution, memory map, and power-saving sleep modes (Deep Sleep, Light Sleep). (10 Marks)"
      ]
    }
  },
  {
    "title": "Embedded Hardware Components",
    "slug": "embedded-systems-and-iot-embedded-hardware-components",
    "order": 3,
    "estimatedHours": 5,
    "difficulty": "Beginner",
    "description": "Master internal hardware subsystems: CPU cores, Memory hierarchy (ROM, SRAM, Flash Memory, EEPROM), Timers/Counters (PWM generation), Interrupts (ISR, IVT, NVIC), GPIO pins, Analog interfaces (ADC successive approximation, DAC R-2R ladder), and Power Management.",
    "subTopics": [
      "CPU",
      "Memory (ROM, RAM, Flash Memory, EEPROM)",
      "Timers and Counters",
      "Interrupts",
      "GPIO",
      "ADC and DAC",
      "Power Management"
    ],
    "prerequisiteTitles": [
      "Microprocessors and Microcontrollers"
    ],
    "learningObjectives": [
      "Understand Memory Types: Flash (non-volatile program code), SRAM (volatile runtime stack/heap), EEPROM (non-volatile configuration parameters).",
      "Configure Timers for Pulse Width Modulation (PWM) speed/brightness control.",
      "Understand Interrupt handling flow: Hardware trigger $\to$ Current instruction completion $\to$ Context save $\to$ Interrupt Vector Table (IVT) jump $\to$ Interrupt Service Routine (ISR) $\to$ Context restore."
    ],
    "notes": [
      {
        "title": "ADC Resolution Math & PWM Duty Cycle Formula",
        "content": "EMBEDDED HARDWARE SUBSYSTEMS\n\n1. ADC Resolution & Digital Output Formula:\n   For an $N$-bit ADC with reference voltage $V_{ref}$:\n   $\text{Step Size / LSB} = \frac{V_{ref}}{2^N - 1}$\n   $\text{Digital Reading} = leftlfloor \frac{V_{in}}{V_{ref}} \times (2^N - 1) \right\rfloor$\n   - Example: 10-bit ADC ($2^{10} - 1 = 1023$), $V_{ref} = 5.0\text{V}$, $V_{in} = 2.5\text{V} Rightarrow \text{Digital Reading} = 511$.\n\n2. PWM Duty Cycle Formula:\n   $\text{Duty Cycle (%)} = left( \frac{t_{ON}}{t_{ON} + t_{OFF}} \right) \times 100 = left( \frac{t_{ON}}{T_{total}} \right) \times 100$\n   - $V_{average} = \text{Duty Cycle} \times V_{max}$."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Making Embedded Systems",
        "author": "Elecia White"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Timers and Interrupts in Microcontrollers",
        "url": "https://www.geeksforgeeks.org/timers-in-microcontroller/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between SRAM, Flash Memory, and EEPROM in embedded systems. (2 Marks)",
        "State formula for ADC digital value for 10-bit ADC with $V_{ref} = 5V$. (2 Marks)",
        "Define Duty Cycle in Pulse Width Modulation (PWM). (2 Marks)"
      ],
      "sixMarks": [
        "Explain step-by-step interrupt execution flow from hardware signal trigger to ISR return. Include Interrupt Vector Table (IVT) concept. (6 Marks)",
        "Describe GPIO internal structure (push-pull, open-drain, internal pull-up/pull-down resistors) with schematic diagram. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Analog & Mixed-Signal Embedded Interfaces. Detail Successive Approximation Register (SAR) ADC architecture vs Sigma-Delta ADC, R-2R Ladder DAC vs PWM filtering DAC, Timer Input Capture & Output Compare modes, and Low-Power Sleep states. (10 Marks)"
      ]
    }
  },
  {
    "title": "Embedded Software Fundamentals",
    "slug": "embedded-systems-and-iot-embedded-software-fundamentals",
    "order": 4,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Master Embedded C programming: Program structure, Memory-mapped I/O, Register programming (volatile keyword, bitwise operations), ISR coding, Bootloaders (UART/OTA flashing), Firmware development, and Debugging (GDB, JTAG/SWD).",
    "subTopics": [
      "Embedded C Programming",
      "Program Structure",
      "Register Programming",
      "Interrupt Service Routines",
      "Bootloader Basics",
      "Firmware Development",
      "Debugging Embedded Programs"
    ],
    "prerequisiteTitles": [
      "Embedded Hardware Components"
    ],
    "learningObjectives": [
      "Master Bitwise Operations for register programming: Set bit (`REG |= (1 << n)`), Clear bit (`REG &= ~(1 << n)`), Toggle bit (`REG ^= (1 << n)`), Test bit (`REG & (1 << n)`).",
      "Understand `volatile` keyword preventing compiler optimization on memory-mapped registers and ISR flags.",
      "Understand Bootloader operation: Reset vector $\to$ Bootloader execution $\to$ Firmware signature check $\to$ Jump to Application Entry Point."
    ],
    "notes": [
      {
        "title": "Bitwise Register Tricks & Volatile Keyword Code Snippets",
        "content": "EMBEDDED C REGISTER PROGRAMMING & VOLATILE\n\n1. Bitwise Manipulation Idioms:\n   - Set Bit $n$: `PORTB |= (1 << n);`\n   - Clear Bit $n$: `PORTB &= ~(1 << n);`\n   - Toggle Bit $n$: `PORTB ^= (1 << n);`\n   - Test Bit $n$: `if (PINB & (1 << n)) { ... }`\n\n2. Volatile Keyword Necessity:\n   The `volatile` qualifier tells the C compiler that a variable's value can be modified by hardware outside compiler control (e.g. Memory-Mapped Register, ISR flag). Prevents compiler from optimizing away repeated register reads!\n\n3. Bare-Metal GPIO Blinky in C (AVR Direct Register):\n   #include <avr/io.h>\n   #include <util/delay.h>\n\n   int main(void) {\n       DDRB |= (1 << PB5); // Set PB5 (Arduino Pin 13) as Output\n       while (1) {\n           PORTB ^= (1 << PB5); // Toggle LED\n           _delay_ms(500);\n       }\n   }"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Embedded C",
        "author": "Michael J. Pont"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Embedded C Tutorial",
        "url": "https://www.geeksforgeeks.org/embedded-c-tutorial/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Why is the `volatile` keyword mandatory when declaring variables modified inside an ISR? (2 Marks)",
        "Write C bitwise code to set bit 3 and clear bit 5 of register `PORTB`. (2 Marks)",
        "What is the role of a Bootloader in microcontrollers? (2 Marks)"
      ],
      "sixMarks": [
        "Explain memory-mapped I/O vs port-mapped I/O in embedded systems with C code register manipulation example. (6 Marks)",
        "Describe JTAG and SWD hardware debugging interfaces detailing breakpoint setting, register inspection, and single-stepping. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Firmware Development & Compilation Pipeline. Detail C compilation steps for embedded targets (Preprocessor $\to$ Compiler $\to$ Assembler $\to$ Linker), Linker Scripts (`.ld` files defining Flash/RAM sections), Startup Code (`crt0.s` vector table initialization), and Over-The-Air (OTA) firmware update architecture. (10 Marks)"
      ]
    }
  },
  {
    "title": "Sensors and Actuators",
    "slug": "embedded-systems-and-iot-sensors-and-actuators",
    "order": 5,
    "estimatedHours": 6,
    "difficulty": "Beginner",
    "description": "Master physical interface transducers: Sensor types (Temperature DHT11/LM35, Humidity, Light LDR, Motion PIR HC-SR501, Ultrasonic HC-SR04, Gas MQ-135), Actuators (Relay module, DC motor, Servo SG90, Stepper 28BYJ-48, Buzzer, LED), and Signal Conditioning.",
    "subTopics": [
      "Introduction to Sensors",
      "Types of Sensors (Temperature, Humidity, Light, Motion, Ultrasonic, Gas)",
      "Actuators (Relay, Motor, Servo Motor, Stepper Motor, Buzzer, LED)",
      "Sensor Interfacing"
    ],
    "prerequisiteTitles": [
      "Embedded Hardware Components"
    ],
    "learningObjectives": [
      "Interfacing Ultrasonic Sensor HC-SR04 using Trigger pulse and Echo time measurement ($\text{Distance} = \frac{\text{Echo Time} \times 0.0343}{2}\text{ cm}$).",
      "Drive high-power AC/DC loads using Optocoupler-Isolated Relays and Transistor switches (BC547 / Flyback Diode).",
      "Control Servo Motors using 50Hz PWM signals (1ms pulse = 0°, 1.5ms pulse = 90°, 2ms pulse = 180°)."
    ],
    "notes": [
      {
        "title": "Ultrasonic Distance Formula & Relay Driver Circuit Code",
        "content": "SENSORS & ACTUATORS INTERFACING\n\n1. HC-SR04 Ultrasonic Distance Calculation:\n   Speed of sound in air $v = 343\text{ m/s} = 0.0343\text{ cm/}mu\text{s}$.\n   - Send 10$mu$s HIGH pulse to Trig pin.\n   - Measure duration $t_{echo}$ ($mu$s) of HIGH pulse on Echo pin.\n   - $\text{Distance (cm)} = \frac{t_{echo} \times 0.0343}{2}$\n\n2. Relay Interfacing & Flyback Diode Protection:\n   Relay coils are inductive loads. When current stops, magnetic field collapse generates a high negative voltage spike ($V = L \frac{di}{dt}$). A Flyback Diode (1N4007) across the relay coil absorbs this back-EMF spike to protect switching transistors!"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Sensors and Transducers",
        "author": "Ian R. Sinclair"
      }
    ],
    "practiceLinks": [
      {
        "title": "Wokwi Arduino Sensor Simulator",
        "url": "https://wokwi.com/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain working principle of HC-SR04 Ultrasonic Distance sensor. (2 Marks)",
        "Why is a Flyback Diode required across a relay coil when driven by a transistor? (2 Marks)",
        "How is a 50Hz PWM signal used to control position of a Servo Motor? (2 Marks)"
      ],
      "sixMarks": [
        "Write Arduino C code to measure distance using HC-SR04 ultrasonic sensor and sound a Buzzer if distance drops below 10cm. (6 Marks)",
        "Describe Stepper Motor control methods (Full Step, Half Step, Microstepping) with ULN2003 driver circuit diagram. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Transducers & Signal Conditioning. Detail Sensor Noise Filtering (Moving Average, Kalman Filter), Instrumentation Amplifiers (AD620 for strain gauges), ADC Calibration, L298N H-Bridge DC Motor Driver directional control logic, and Optocoupler optical isolation. (10 Marks)"
      ]
    }
  },
  {
    "title": "Communication Protocols",
    "slug": "embedded-systems-and-iot-communication-protocols",
    "order": 6,
    "estimatedHours": 6,
    "difficulty": "Intermediate",
    "description": "Master wired communication standards: UART (Asynchronous Start/Stop, Baud Rate), SPI (Synchronous 4-wire MOSI/MISO/SCK/CS), I2C (Synchronous 2-wire SDA/SCL, 7-bit Addressing, ACK/NACK), CAN Bus (Differential 2-wire CAN_H/CAN_L, Automotive Arbitration), USB, RS232, and RS485.",
    "subTopics": [
      "UART",
      "SPI",
      "I2C",
      "CAN Bus",
      "USB Basics",
      "RS232",
      "Serial Communication",
      "Parallel Communication"
    ],
    "prerequisiteTitles": [
      "Embedded Hardware Components"
    ],
    "learningObjectives": [
      "Compare 3 main embedded serial protocols: UART (Asynchronous, 2-wire), I2C (Synchronous, 2-wire multi-master), SPI (Synchronous, 4-wire high speed).",
      "Understand I2C protocol frame: START bit $\to$ 7-bit Slave Address $\to$ R/W bit $\to$ ACK/NACK $\to$ 8-bit Data $\to$ STOP bit.",
      "Understand CAN Bus Non-Destructive Bitwise Arbitration for Automotive ECUs."
    ],
    "notes": [
      {
        "title": "Serial Communication Protocols Comparison Table",
        "content": "EMBEDDED COMMUNICATION PROTOCOLS\n\n1. Embedded Protocols Summary Table:\n---------------------------------------------------------------------------------------------\nProtocol | Wires | Type         | Speed      | Max Devices | Distance | Topology\n---------------------------------------------------------------------------------------------\nUART     | 2     | Asynchronous | Up to 115k | 2 (Point)   | ~15m     | Peer-to-Peer\nI2C      | 2     | Synchronous  | 100k-3.4M  | 127 Slaves  | ~1m      | Multi-Master Bus\nSPI      | 4+CS  | Synchronous  | 10M-50M+   | Unlimited CS| ~10cm    | Single Master Bus\nCAN Bus  | 2     | Asynchronous | Up to 1M   | 100+ ECUs   | ~40m-1km | Multi-Master Bus\n---------------------------------------------------------------------------------------------\n\n2. I2C Pull-Up Resistors:\n   SDA and SCL lines are Open-Drain. External Pull-up resistors (4.7k$Omega$) to $V_{CC}$ are MANDATORY to pull lines HIGH when idle!"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Serial Port Complete",
        "author": "Jan Axelson"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks I2C Protocol",
        "url": "https://www.geeksforgeeks.org/i2c-communication-protocol/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Compare UART, I2C, and SPI on wire count, speed, and device capacity. (2 Marks)",
        "Why are pull-up resistors required on I2C SDA and SCL lines? (2 Marks)",
        "Explain non-destructive bitwise arbitration in CAN Bus protocol. (2 Marks)"
      ],
      "sixMarks": [
        "Draw timing diagrams for SPI 4-wire data transfer (MOSI, MISO, SCK, CS) and explain CPOL (Clock Polarity) and CPHA (Clock Phase). (6 Marks)",
        "Detail I2C read/write communication frame sequence with START, 7-bit Address, R/W, ACK/NACK, Data, and STOP signals. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Industrial Communication Protocols. Detail CAN Bus 2.0A/2.0B frame structure (Identifier, DLC, Data, CRC), RS485 differential signaling vs RS232 single-ended, USB protocol architecture (Endpoints, Enumerate process, HID/CDC descriptors), and Modbus RTU. (10 Marks)"
      ]
    }
  },
  {
    "title": "Real-Time Operating Systems (RTOS)",
    "slug": "embedded-systems-and-iot-real-time-operating-systems",
    "order": 7,
    "estimatedHours": 6,
    "difficulty": "Advanced",
    "description": "Master RTOS fundamentals: GPOS vs RTOS (Deterministic execution), Tasks & States (Ready, Running, Blocked, Suspended), Priority-Based Preemptive Scheduling, Synchronization (Binary/Counting Semaphores, Mutex, Priority Inversion & Inheritance), Queues, and FreeRTOS API hands-on.",
    "subTopics": [
      "Introduction to RTOS",
      "RTOS Features",
      "Tasks and Threads",
      "Scheduling Algorithms",
      "Synchronization",
      "Semaphores",
      "Mutex",
      "Inter-Task Communication",
      "FreeRTOS Basics"
    ],
    "prerequisiteTitles": [
      "Embedded Software Fundamentals"
    ],
    "learningObjectives": [
      "Differentiate GPOS (Windows/Linux - throughput focused) vs RTOS (FreeRTOS/VxWorks - bounded latency & determinism focused).",
      "Solve Priority Inversion problem using Priority Inheritance Protocol in Mutexes.",
      "Write FreeRTOS task creation (`xTaskCreate`), Semaphore (`vSemaphoreCreateBinary`), and Queue message passing (`xQueueSend`/`xQueueReceive`) code."
    ],
    "notes": [
      {
        "title": "FreeRTOS Task Creation Code & Priority Inversion Explanation",
        "content": "REAL-TIME OPERATING SYSTEMS & FREERTOS\n\n1. GPOS vs RTOS Determinism:\n   - GPOS: Optimized for average throughput. Latency for task execution can vary unpredictable (non-deterministic).\n   - RTOS: Optimized for deterministic response time. Guarantees that high-priority tasks execute within a strict worst-case latency bound.\n\n2. Priority Inversion & Priority Inheritance Solution:\n   - Priority Inversion: High-priority task $T_{High}$ is blocked waiting for Mutex held by Low-priority task $T_{Low}$. Medium-priority task $T_{Med}$ preempts $T_{Low}$, preventing $T_{Low}$ from finishing and releasing Mutex!\n   - Priority Inheritance: Mutex temporarily elevates priority of $T_{Low}$ to match $T_{High}$ until Mutex is released, preventing $T_{Med}$ from preempting it.\n\n3. FreeRTOS Task Creation Code Example:\n   void vTaskLED(void *pvParameters) {\n       for(;;) {\n           digitalWrite(13, HIGH);\n           vTaskDelay(pdMS_TO_TICKS(500));\n           digitalWrite(13, LOW);\n           vTaskDelay(pdMS_TO_TICKS(500));\n       }\n   }\n   // In main():\n   xTaskCreate(vTaskLED, \"LEDTask\", 128, NULL, 1, NULL);"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Mastering the FreeRTOS Real Time Kernel",
        "author": "Richard Barry"
      }
    ],
    "practiceLinks": [
      {
        "title": "FreeRTOS Official Documentation",
        "url": "https://www.freertos.org/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Differentiate between GPOS and RTOS on determinism and task scheduling. (2 Marks)",
        "What is Priority Inversion and how does Priority Inheritance solve it? (2 Marks)",
        "Compare Binary Semaphore and Mutex in FreeRTOS. (2 Marks)"
      ],
      "sixMarks": [
        "Draw FreeRTOS Task State Transition Diagram (Running, Ready, Blocked, Suspended) and explain triggers for state transitions. (6 Marks)",
        "Write FreeRTOS C program creating 2 concurrent tasks communicating via an Inter-Task Queue (`xQueueSend` and `xQueueReceive`). (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on RTOS Kernel Architecture. Detail Rate Monotonic Scheduling (RMS) vs Earliest Deadline First (EDF), Tick Timer Interrupt & Context Switching sequence, Memory Allocation Schemes (Heap_1 through Heap_5 in FreeRTOS), and Interrupt Service Routines (`FromISR` functions). (10 Marks)"
      ]
    }
  },
  {
    "title": "Introduction to Internet of Things (IoT)",
    "slug": "embedded-systems-and-iot-introduction-to-internet-of-things",
    "order": 8,
    "estimatedHours": 4,
    "difficulty": "Beginner",
    "description": "Understand IoT paradigms: What is IoT, Evolution, characteristics (connectivity, heterogeneity, scalability, security), 4-Layer IoT Architecture (Sensing/Perception, Network/Gateway, Data Processing/Cloud, Application Layer), IoT Ecosystem, and Smart Devices.",
    "subTopics": [
      "What is IoT?",
      "Evolution of IoT",
      "Characteristics of IoT",
      "IoT Architecture",
      "IoT Ecosystem",
      "IoT Applications",
      "Smart Devices"
    ],
    "prerequisiteTitles": [
      "Introduction to Embedded Systems"
    ],
    "learningObjectives": [
      "Define 4-Layer IoT Architecture: Sensing Layer (Sensors/Actuators), Network Layer (Gateways/Protocols), Data Processing Layer (Cloud/Edge), Application Layer (Smart Services).",
      "Understand key IoT characteristics: Interconnectivity, Dynamic changes, Enormous scale, Heterogeneity, and Security risks.",
      "Analyze IoT Ecosystem components: Things (Devices), Gateways, Network Infrastructure, Cloud Platforms, and End-User Apps."
    ],
    "notes": [
      {
        "title": "4-Layer IoT Architecture & Ecosystem Diagram",
        "content": "INTERNET OF THINGS ARCHITECTURE\n\n1. 4-Layer IoT Architecture:\n   - Layer 4: Application Layer (Smart Home, Smart City, Smart Grid, Industrial Automation dashboards).\n   - Layer 3: Middleware / Data Processing Layer (Cloud Analytics, Database Storage, ML Inference, Rules Engine).\n   - Layer 2: Network / Gateway Layer (Wi-Fi, Cellular 4G/5G, LoRaWAN, Routers, Edge Gateways).\n   - Layer 1: Perception / Sensing Layer (Sensors, Actuators, Microcontrollers, RFID tags).\n\n2. Core IoT Characteristics:\n   - Dynamic & Self-Adapting: Devices change state dynamically (e.g. sleep/wake).\n   - Self-Configuring: Devices automatically negotiate network addresses.\n   - Interoperable Communication Protocols: Standardized IP stack connectivity."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Internet of Things: A Hands-On Approach",
        "author": "Arshdeep Bahga, Vijay Madisetti"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks IoT Tutorial",
        "url": "https://www.geeksforgeeks.org/internet-of-things-iot-tutorial/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define Internet of Things (IoT) and list 4 core characteristics. (2 Marks)",
        "Name the 4 layers of standard IoT Architecture. (2 Marks)",
        "What is an IoT Edge Gateway and why is it needed? (2 Marks)"
      ],
      "sixMarks": [
        "Explain 4-Layer IoT Architecture detailing functions, hardware, and protocols at each layer with a diagram. (6 Marks)",
        "Describe real-world IoT Ecosystem for a Smart Agriculture system from field soil sensors to cloud dashboard. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on IoT Technology Evolution. Detail transition from M2M (Machine-to-Machine) to modern IoT, IPv6 deployment necessity (6LoWPAN), Digital Twin concepts, and economic societal impact across Smart Cities, Healthcare, and IIoT. (10 Marks)"
      ]
    }
  },
  {
    "title": "IoT Hardware Platforms",
    "slug": "embedded-systems-and-iot-hardware-platforms",
    "order": 9,
    "estimatedHours": 5,
    "difficulty": "Beginner",
    "description": "Explore development boards: Arduino UNO/Nano, ESP8266 (NodeMCU V2/V3), ESP32 (Wi-Fi + BLE dual core), Raspberry Pi 4 (Quad-Core 1.5GHz), and Board Feature Comparison Matrix.",
    "subTopics": [
      "Arduino",
      "ESP8266",
      "ESP32",
      "Raspberry Pi",
      "NodeMCU",
      "Development Boards Comparison"
    ],
    "prerequisiteTitles": [
      "Microprocessors and Microcontrollers"
    ],
    "learningObjectives": [
      "Select appropriate IoT board based on project requirements (Battery life, Processing power, Connectivity, Camera/Video support).",
      "Program ESP8266 / NodeMCU Wi-Fi chip using Arduino IDE board manager.",
      "Configure Raspberry Pi headless setup (SSH, VNC, Static IP) and Python GPIO library (`RPi.GPIO`)."
    ],
    "notes": [
      {
        "title": "NodeMCU ESP8266 Pinout & Arduino IDE Wi-Fi Connect Code",
        "content": "IOT HARDWARE PLATFORMS & ESP8266\n\n1. NodeMCU ESP8266 Specs:\n   - Tensilica L106 32-bit CPU @ 80MHz/160MHz.\n   - 4MB Flash Memory, 64KB Instruction RAM, 96KB Data RAM.\n   - Integrated 802.11 b/g/n Wi-Fi Transceiver.\n   - 10 GPIO pins, 1 ADC pin (0-1.0V max input!).\n\n2. ESP8266 Wi-Fi Station Connect Code (Arduino C):\n   #include <ESP8266WiFi.h>\n\n   const char* ssid = \"Your_WiFi_SSID\";\n   const char* password = \"Your_WiFi_Password\";\n\n   void setup() {\n       Serial.begin(115200);\n       WiFi.begin(ssid, password);\n       while (WiFi.status() != WL_CONNECTED) {\n           delay(500);\n           Serial.print(\".\");\n       }\n       Serial.println(\"\nWiFi Connected! IP: \");\n       Serial.println(WiFi.localIP());\n   }"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Programming ESP8266 with Arduino IDE",
        "author": "Neil Cameron"
      }
    ],
    "practiceLinks": [
      {
        "title": "Random Nerd Tutorials ESP8266 & ESP32",
        "url": "https://randomnerdtutorials.com/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Compare ESP8266 NodeMCU and ESP32 development boards on processing power and connectivity. (2 Marks)",
        "What is headless setup on Raspberry Pi? (2 Marks)",
        "Why is ESP32 preferred over Arduino UNO for battery-powered IoT nodes? (2 Marks)"
      ],
      "sixMarks": [
        "Write C code for ESP8266/ESP32 to connect to a local Wi-Fi router and print its assigned IP address on Serial Monitor. (6 Marks)",
        "Compare Arduino UNO, NodeMCU ESP8266, ESP32, and Raspberry Pi 4 on 6 technical parameters. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on IoT Development Hardware Selection. Detail Single-Board Computers vs Microcontroller SoCs, Power Management in ESP32 (Active, Modem Sleep, Light Sleep, Deep Sleep with ULP co-processor), and custom PCB design considerations for commercial IoT hardware. (10 Marks)"
      ]
    }
  },
  {
    "title": "IoT Communication Technologies",
    "slug": "embedded-systems-and-iot-communication-technologies",
    "order": 10,
    "estimatedHours": 6,
    "difficulty": "Intermediate",
    "description": "Master wireless networks & application protocols: Short range (Wi-Fi, Bluetooth 5.0, BLE 4.2 GATT/GAP, Zigbee 802.15.4, NFC, RFID), Long range (LoRaWAN, NB-IoT, Cellular 4G/5G), and IoT Protocols (MQTT Publish/Subscribe, CoAP UDP, HTTP REST).",
    "subTopics": [
      "Wi-Fi",
      "Bluetooth",
      "Bluetooth Low Energy (BLE)",
      "Zigbee",
      "LoRa",
      "NFC",
      "RFID",
      "Cellular IoT",
      "MQTT",
      "CoAP",
      "HTTP for IoT"
    ],
    "prerequisiteTitles": [
      "Communication Protocols",
      "Introduction to Internet of Things (IoT)"
    ],
    "learningObjectives": [
      "Understand MQTT Protocol Architecture: Client, Broker (Mosquitto), Topics (`home/livingroom/temp`), Quality of Service (QoS 0, 1, 2), and Last Will and Testament (LWT).",
      "Compare Short-range wireless protocols (BLE, Zigbee) vs Long-range LPWAN (LoRaWAN, NB-IoT).",
      "Contrast MQTT (TCP, Pub/Sub, binary header 2 bytes) vs CoAP (UDP, REST GET/POST, 4 byte header)."
    ],
    "notes": [
      {
        "title": "MQTT Architecture & Wireless Protocols Matrix",
        "content": "IOT COMMUNICATION PROTOCOLS & MQTT\n\n1. MQTT Publish/Subscribe Architecture:\n   - MQTT Broker (e.g. EMQX, HiveMQ, Mosquitto): Central server routing messages.\n   - Publisher (IoT Node): Sends sensor payload to Broker on a specific Topic (`sensors/dht11/temp`).\n   - Subscriber (App/Cloud): Registers interest in Topic with Broker to receive real-time updates.\n   - QoS Levels: QoS 0 (At most once), QoS 1 (At least once), QoS 2 (Exactly once).\n\n2. Wireless IoT Protocols Matrix:\n-------------------------------------------------------------------------------------------------\nProtocol | Frequency   | Data Rate     | Range     | Power Consumption | Application\n-------------------------------------------------------------------------------------------------\nBLE      | 2.4 GHz     | 1 - 2 Mbps    | ~10 - 50m | Very Low          | Wearables, Fitness\nZigbee   | 2.4 GHz     | 250 kbps      | ~10 - 100m| Low               | Smart Home Mesh\nLoRaWAN  | Sub-1GHz    | 0.3 - 50 kbps | 2 - 15 km | Ultra Low         | Smart Agriculture, Metering\nWi-Fi    | 2.4 / 5 GHz | Up to 1 Gbps  | ~50m      | High              | Video Streaming, Cameras\n-------------------------------------------------------------------------------------------------"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "MQTT Essentials - A Lightweight IoT Protocol",
        "author": "Gaston C. Hillar"
      }
    ],
    "practiceLinks": [
      {
        "title": "HiveMQ Public MQTT Broker Test",
        "url": "https://www.hivemq.com/mqtt/public-mqtt-broker/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Explain MQTT Publish/Subscribe architecture with Broker, Publisher, Subscriber, and Topic. (2 Marks)",
        "State 3 QoS levels in MQTT protocol. (2 Marks)",
        "Compare LoRaWAN and Cellular NB-IoT on range and subscription cost. (2 Marks)"
      ],
      "sixMarks": [
        "Write Arduino ESP8266 C code to publish sensor readings to an MQTT Broker on topic `device/temperature` using PubSubClient library. (6 Marks)",
        "Compare MQTT, CoAP, and HTTP REST protocols on transport layer, header size, overhead, and IoT suitability. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Wireless IoT Networking. Detail LoRaWAN Network Architecture (End Devices, Gateway, Network Server, Application Server), BLE GATT Services & Characteristics hierarchy, Zigbee Mesh topology routing, and Cellular 5G NR RedCap (Reduced Capability). (10 Marks)"
      ]
    }
  },
  {
    "title": "Cloud Integration for IoT",
    "slug": "embedded-systems-and-iot-cloud-integration",
    "order": 11,
    "estimatedHours": 6,
    "difficulty": "Intermediate",
    "description": "Connect IoT devices to cloud platforms: Cloud concepts, AWS IoT Core (Device Shadow, Rules Engine, X.509 certs), Azure IoT Hub, Google Cloud IoT, Firebase Realtime Database, data telemetry collection, device monitoring, and remote control.",
    "subTopics": [
      "IoT Cloud Concepts",
      "AWS IoT Core",
      "Azure IoT Hub",
      "Google Cloud IoT",
      "Firebase Integration",
      "Data Collection",
      "Device Monitoring",
      "Remote Device Control"
    ],
    "prerequisiteTitles": [
      "IoT Communication Technologies"
    ],
    "learningObjectives": [
      "Understand AWS IoT Core concepts: Device Gateway, Message Broker, Device Shadow (JSON state document), and Rules Engine.",
      "Implement Firebase Realtime Database / HTTP REST integration with ESP32 for remote LED control.",
      "Analyze Cloud Telemetry storage (Time-series databases InfluxDB, Timestream) and real-time visualization dashboards (Grafana, ThingsBoard)."
    ],
    "notes": [
      {
        "title": "AWS Device Shadow JSON Structure & Firebase ESP32 Code",
        "content": "CLOUD INTEGRATION & AWS DEVICE SHADOW\n\n1. AWS IoT Device Shadow Concept:\n   A JSON document used to store and retrieve current state information for a device.\n   - `desired` state: Set by Cloud App (e.g. `{\"led\": \"ON\"}`).\n   - `reported` state: Set by physical IoT device (e.g. `{\"led\": \"OFF\"}`).\n   - `delta` state: Automatically computed difference generated by AWS IoT Core to trigger device state update!\n\n2. ESP32 to Firebase Realtime Database Code Snippet:\n   #include <WiFi.h>\n   #include <FirebaseESP32.h>\n\n   FirebaseData firebaseData;\n   FirebaseConfig config;\n   FirebaseAuth auth;\n\n   void setup() {\n       // Config setup with FIREBASE_HOST and FIREBASE_AUTH\n       Firebase.begin(&config, &auth);\n       Firebase.reconnectWiFi(true);\n       Firebase.setInt(firebaseData, \"/sensor/temperature\", 28);\n   }"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Enterprise IoT Architecture",
        "author": "Nitesh Dhanjani"
      }
    ],
    "practiceLinks": [
      {
        "title": "ThingsBoard IoT Platform Demo",
        "url": "https://thingsboard.io/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "What is AWS IoT Device Shadow and how does it handle offline devices? (2 Marks)",
        "State role of Rules Engine in AWS IoT Core. (2 Marks)",
        "What is a Time-Series Database (e.g. InfluxDB) in IoT cloud architectures? (2 Marks)"
      ],
      "sixMarks": [
        "Describe end-to-end IoT Cloud Data Pipeline from ESP32 sensor publication to Grafana dashboard visualization. (6 Marks)",
        "Explain authentication security for AWS IoT Core using TLS 1.2 X.509 Client Certificates and IAM Policies. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Multi-Cloud IoT Solutions. Detail AWS IoT Core vs Azure IoT Hub vs Google Cloud IoT, Edge-to-Cloud sync strategies, ThingSpeak REST API analytics, Serverless Lambda functions for sensor alert notifications (SMS/Email via AWS SNS), and scalable MQTT cluster deployment. (10 Marks)"
      ]
    }
  },
  {
    "title": "IoT Security",
    "slug": "embedded-systems-and-iot-security",
    "order": 12,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Master IoT Cyber Security: Security challenges (Mirai botnet, resource constraints), Authentication, Authorization, Secure Communication (TLS 1.3, DTLS for UDP), Data Encryption (AES-128/256), Hardware Root of Trust (Secure Boot, TPM, ATECC608A), Secure OTA updates, and Privacy.",
    "subTopics": [
      "Security Challenges",
      "Authentication",
      "Authorization",
      "Secure Communication",
      "Data Encryption",
      "Device Security",
      "Secure Firmware Updates",
      "Privacy in IoT"
    ],
    "prerequisiteTitles": [
      "IoT Communication Technologies"
    ],
    "learningObjectives": [
      "Analyze major IoT Vulnerabilities: Default passwords, unencrypted transmission, lack of secure firmware signing, physical tampering.",
      "Understand Hardware Root of Trust: Secure Bootloader validating ECDSA signature of incoming firmware before flashing.",
      "Implement TLS 1.2/1.3 encrypted MQTTS (Port 8883) with X.509 certificates."
    ],
    "notes": [
      {
        "title": "Secure Boot & MQTTS Encrypted Connection Architecture",
        "content": "IOT CYBER SECURITY & SECURE BOOT\n\n1. 4 Essential Pillars of IoT Security:\n   - Device Identity & Authentication: X.509 Certificates or Hardware Security Element (ATECC608A).\n   - Data Protection in Transit: TLS 1.3 encryption (MQTTS Port 8883, HTTPS Port 443).\n   - Data Protection at Rest: Flash Encryption (AES-256) on ESP32 / Microcontrollers.\n   - Code Integrity (Secure Boot): Cryptographic validation (SHA-256 + RSA/ECDSA) of firmware boot partition.\n\n2. Mirai Botnet Case Study:\n   In 2016, Mirai malware infected 600,000+ IoT devices (IP cameras, routers) by scanning factory default SSH/Telnet credentials (`admin:admin`), creating a massive DDoS botnet. Lesson: ALWAYS disable default accounts & enforce unique device passwords!"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Abusing the Internet of Things: Blackouts, Freakouts, and Stakeouts",
        "author": "Nitesh Dhanjani"
      }
    ],
    "practiceLinks": [
      {
        "title": "OWASP Top 10 IoT Security Risks",
        "url": "https://owasp.org/www-project-internet-of-things/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "State 4 major OWASP Top 10 IoT security vulnerabilities. (2 Marks)",
        "What is Secure Boot and how does it prevent malicious firmware execution? (2 Marks)",
        "Why is DTLS used instead of TLS for CoAP IoT communication? (2 Marks)"
      ],
      "sixMarks": [
        "Explain X.509 Client Certificate authentication process for secure MQTTS communication (Port 8883). (6 Marks)",
        "Describe Secure Over-The-Air (OTA) Firmware Update architecture detailing dual bank partitioning, cryptographic signature verification, and rollback protection. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Hardware Security & Cryptography in Embedded Systems. Detail ATECC608A CryptoAuthentication chip, ESP32 Hardware Encryption Engine (AES, SHA, RSA), Physical Unclonable Functions (PUF), Zero-Trust Architecture in IIoT networks, and GDPR privacy compliance for wearable IoT devices. (10 Marks)"
      ]
    }
  },
  {
    "title": "Embedded AI and Edge Computing",
    "slug": "embedded-systems-and-iot-embedded-ai-and-edge-computing",
    "order": 13,
    "estimatedHours": 6,
    "difficulty": "Advanced",
    "description": "Explore Edge AI: Edge Computing vs Cloud Computing (low latency, bandwidth reduction, privacy), TinyML basics, TensorFlow Lite for Microcontrollers (TFLite Micro), Model Quantization (Float32 to Int8), and Real-time Edge AI applications (keyword spotting, anomaly detection).",
    "subTopics": [
      "Introduction to Edge Computing",
      "AI on Embedded Devices",
      "TinyML Basics",
      "TensorFlow Lite for Microcontrollers",
      "Edge AI Applications",
      "Real-Time Data Processing"
    ],
    "prerequisiteTitles": [
      "Embedded Hardware Components",
      "IoT Hardware Platforms"
    ],
    "learningObjectives": [
      "Understand Edge Computing Advantages: Zero latency ($sim 1$ms vs $200$ms cloud roundtrip), reduced cloud bandwidth cost, offline capability, data privacy.",
      "Apply Model Optimization for TinyML: Post-Training Quantization (converting 32-bit float weights to 8-bit integers for $4\times$ memory reduction), Model Pruning.",
      "Deploy TFLite Micro model on ESP32 / Arduino Nano 33 BLE Sense for Keyword Spotting or Gesture Recognition."
    ],
    "notes": [
      {
        "title": "TinyML Model Pipeline & Quantization Math",
        "content": "TINYML & EDGE AI PIPELINE\n\n1. TinyML Model Optimization Pipeline:\n   1. Train Deep Learning Model in Python (TensorFlow / Keras / PyTorch).\n   2. Convert & Quantize Model using TensorFlow Lite Converter:\n      - Convert 32-bit floating point weights to 8-bit integers (`int8`).\n      - Reduces model size by $75%$ (e.g. 4MB $\to$ 1MB) and enables hardware INT8 vector SIMD acceleration!\n   3. Generate C++ Byte Array (`.h` header file) using `xxd -i model.tflite > model_data.h`.\n   4. Compile & Run TFLite Micro C++ runtime on Microcontroller RAM ($<256\text{KB}$).\n\n2. Edge Computing vs Cloud AI Comparison:\n   - Cloud AI: High power, massive GPU server clusters, high latency (100-500ms), requires continuous internet, data privacy risks.\n   - Edge AI (TinyML): Battery powered MCU ($<1\text{mW}$), microsecond inference latency, works offline, data never leaves device!"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "TinyML: Machine Learning with TensorFlow Lite on Arduino and Ultra-Low-Power Microcontrollers",
        "author": "Pete Warden, Daniel Situnayake"
      }
    ],
    "practiceLinks": [
      {
        "title": "Edge Impulse Embedded ML Platform",
        "url": "https://www.edgeimpulse.com/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Define Edge Computing and list 3 benefits over Cloud Computing. (2 Marks)",
        "What is TinyML? State typical RAM and Flash limits of TinyML targets. (2 Marks)",
        "Explain Post-Training Quantization (Float32 to Int8 conversion). (2 Marks)"
      ],
      "sixMarks": [
        "Explain the step-by-step TinyML deployment workflow from model training in TensorFlow to C++ header array generation for microcontrollers. (6 Marks)",
        "Describe Edge AI application for Predictive Maintenance in Industrial IoT using vibration accelerometer spectral anomaly detection. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Edge AI Hardware Accelerators. Detail Neural Processing Units (NPUs), Kendryte K210 / ESP32-S3 vector instructions, Edge Impulse platform integration for audio keyword spotting, spiking neural networks (SNNs), and ultra-low power vision sensors. (10 Marks)"
      ]
    }
  },
  {
    "title": "Smart Systems Applications",
    "slug": "embedded-systems-and-iot-smart-systems-applications",
    "order": 14,
    "estimatedHours": 5,
    "difficulty": "Intermediate",
    "description": "Explore domain applications: Smart Home (Automation, Energy management), Smart Agriculture (Soil moisture, Precision irrigation), Smart Healthcare (Wearable ECG, Patient tracking), Smart Cities (Smart Parking, Streetlight control), Industrial IoT (IIoT SCADA, Predictive maintenance), and Automotive Embedded Systems (CAN, ADAS).",
    "subTopics": [
      "Smart Home Systems",
      "Smart Agriculture",
      "Smart Healthcare",
      "Smart Cities",
      "Industrial IoT (IIoT)",
      "Wearable Devices",
      "Automotive Embedded Systems"
    ],
    "prerequisiteTitles": [
      "Introduction to Internet of Things (IoT)",
      "IoT Communication Technologies"
    ],
    "learningObjectives": [
      "Design Smart Agriculture Architecture: NPK soil sensor, Soil Moisture sensor, ESP32, Solar panel, Water pump Relay, LoRaWAN gateway.",
      "Understand Industrial IoT (IIoT) protocols: Modbus TCP, OPC UA, MQTT, and SCADA integration.",
      "Analyze Automotive Embedded Systems: CAN Bus ECU network, AUTOSAR software architecture, and ADAS sensors (LiDAR, Radar)."
    ],
    "notes": [
      {
        "title": "Smart Home & Smart Agriculture System Architectures",
        "content": "SMART SYSTEMS DOMAIN ARCHITECTURES\n\n1. Smart Agriculture Precision Irrigation Architecture:\n   - Field Nodes: ESP32 + Capacitive Soil Moisture Sensor + DHT11 + Solar Battery.\n   - Communication: LoRa Transceiver (868MHz / 915MHz) transmitting up to 10km to Central Gateway.\n   - Cloud & Actuation: Central LoRa Gateway pushes data to AWS IoT Core. Rules Engine triggers Solenoid Valve Relay to irrigate crops when moisture $< 30%$.\n\n2. Industrial IoT (IIoT) vs Consumer IoT:\n   - IIoT: Focuses on operational efficiency, high reliability ($99.999%$), strict safety standards (IEC 61508), determinism, Modbus/OPC UA protocols.\n   - Consumer IoT: Focuses on user convenience, low cost, smart home gadgets, Wi-Fi/Zigbee."
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Industrial Internet of Things: Cybermanufacturing Systems",
        "author": "Sabina Jeschke"
      }
    ],
    "practiceLinks": [
      {
        "title": "GeeksforGeeks Smart Cities & IoT Applications",
        "url": "https://www.geeksforgeeks.org/applications-of-iot/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Compare Consumer IoT and Industrial IoT (IIoT) on 4 parameters. (2 Marks)",
        "State sensors and actuators used in a Smart Parking System. (2 Marks)",
        "What is AUTOSAR in automotive embedded software engineering? (2 Marks)"
      ],
      "sixMarks": [
        "Design complete architecture for an IoT Smart Home System managing lighting, HVAC, and security via mobile app. Include block diagram. (6 Marks)",
        "Describe an IoT Wearable Health Monitoring System measuring Heart Rate (MAX30102), Body Temperature, and Fall Detection (MPU6050). (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Smart City Infrastructure. Detail Smart Street Lighting with LDR and PIR sensors, Smart Waste Management using Ultrasonic fill-level sensors, Environmental Air Quality monitoring mesh networks, Traffic Congestion management via Edge Vision AI, and Cyber-Physical Systems integration. (10 Marks)"
      ]
    }
  },
  {
    "title": "Testing and Debugging",
    "slug": "embedded-systems-and-iot-testing-and-debugging",
    "order": 15,
    "estimatedHours": 5,
    "difficulty": "Advanced",
    "description": "Master validation tools & techniques: Embedded System Testing (Unit, Integration, HIL Hardware-In-The-Loop), Hardware Debugging (Multimeter, Oscilloscope, Logic Analyzer), Software Debugging (Serial Monitor, GDB, JTAG/SWD), Performance Profiling, and Power Optimization (Sleep Modes, Current Measurement).",
    "subTopics": [
      "Embedded System Testing",
      "Hardware Debugging",
      "Software Debugging",
      "Serial Monitor",
      "Logic Analyzer Basics",
      "Performance Optimization",
      "Power Optimization"
    ],
    "prerequisiteTitles": [
      "Embedded Software Fundamentals"
    ],
    "learningObjectives": [
      "Utilize Logic Analyzers to capture and decode SPI, I2C, and UART serial bitstreams.",
      "Implement Power Optimization strategies: Disabling unused MCU peripherals, lowering clock frequency, using Deep Sleep modes ($mu$A current draw).",
      "Understand Hardware-In-the-Loop (HIL) Testing for automotive/aerospace ECUs."
    ],
    "notes": [
      {
        "title": "Logic Analyzer Decoding & ESP32 Deep Sleep Code",
        "content": "TESTING, DEBUGGING & POWER OPTIMIZATION\n\n1. Hardware Debugging Tools Checklist:\n   - Digital Multimeter: Measure voltage levels, continuity, pull-up resistances, and static current draw.\n   - Oscilloscope: Measure signal rise time, voltage spikes, clock noise, and signal integrity.\n   - Logic Analyzer: Capture digital signal lines (SDA/SCL, MOSI/MISO) and decode protocol bytes (I2C, SPI, UART, CAN).\n\n2. ESP32 Deep Sleep Power Optimization Code:\n   #include <esp_sleep.h>\n\n   #define uS_TO_S_FACTOR 1000000ULL  // Conversion factor for micro seconds to seconds\n   #define TIME_TO_SLEEP  30          // Time ESP32 will go to sleep (in seconds)\n\n   void setup() {\n       Serial.begin(115200);\n       esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR);\n       Serial.println(\"Going to Deep Sleep for 30 seconds... Current draw drops to 10uA!\");\n       esp_deep_sleep_start();\n   }"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "Debugging Embedded Microprocessor Systems",
        "author": "Stuart Ball"
      }
    ],
    "practiceLinks": [
      {
        "title": "Saleae Logic Analyzer Software User Guide",
        "url": "https://www.saleae.com/"
      }
    ],
    "questionBank": {
      "conceptual": [
        "Compare Oscilloscope and Logic Analyzer for embedded hardware troubleshooting. (2 Marks)",
        "How much current does ESP32 consume in Deep Sleep vs Active Wi-Fi mode? (2 Marks)",
        "What is Hardware-In-the-Loop (HIL) Testing? (2 Marks)"
      ],
      "sixMarks": [
        "Explain step-by-step how to use a 8-channel Logic Analyzer to debug a failing I2C sensor communication line. (6 Marks)",
        "Describe 5 hardware and software techniques for optimizing battery life in remote wireless IoT sensor nodes. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive report on Embedded Testing Methodologies. Detail Unit Testing with Unity/CMock framework for C, Static Code Analysis (MISRA-C rules), Code Coverage metrics, Power Profiling using Nordic Power Profiler Kit (PPK2), and In-Circuit Emulators (ICE) vs On-Chip Debuggers (OCD). (10 Marks)"
      ]
    }
  },
  {
    "title": "Embedded Systems and IoT Projects",
    "slug": "embedded-systems-and-iot-projects",
    "order": 16,
    "estimatedHours": 8,
    "difficulty": "Advanced",
    "description": "Build complete capstone projects: Smart Home Automation, Weather Monitoring System, Smart Irrigation System, IoT-Based Health Monitoring, Smart Parking System, Industrial Monitoring System, GPS Tracking System, and Home Security System.",
    "subTopics": [
      "Smart Home Automation",
      "Weather Monitoring System",
      "Smart Irrigation System",
      "IoT-Based Health Monitoring",
      "Smart Parking System",
      "Industrial Monitoring System",
      "GPS Tracking System",
      "Home Security System"
    ],
    "prerequisiteTitles": [
      "Sensors and Actuators",
      "IoT Communication Technologies",
      "Cloud Integration for IoT",
      "Smart Systems Applications"
    ],
    "learningObjectives": [
      "Design, build, and deploy an IoT Weather Monitoring System uploading Temperature, Humidity, and Pressure to ThingSpeak / Blynk cloud.",
      "Build a GPS Tracking System using NEO-6M GPS module, SIM800L GSM module, and ESP32 pushing live coordinates to Google Maps.",
      "Build a Smart Home Automation system controlling 4 AC appliances using 4-Channel Relay board and Blynk IoT mobile app over Wi-Fi."
    ],
    "notes": [
      {
        "title": "Capstones: IoT Weather Station & Smart Home Code Layout",
        "content": "CAPSTONE IOT PROJECTS & IMPLEMENTATION CODE\n\n1. IoT Weather Station Project Blueprint:\n   - Hardware: ESP8266 NodeMCU, DHT22 (Temp & Humidity), BMP280 (Barometric Pressure), LDR (Light intensity), 0.96\" I2C OLED Display.\n   - Software: Read sensors every 15s, display on OLED, send JSON payload via HTTP POST / MQTT to ThingSpeak / Blynk cloud platform.\n\n2. Complete Arduino C Code for Weather Station (ThingSpeak Upload):\n   #include <ESP8266WiFi.h>\n   #include <DHT.h>\n\n   #define DHTPIN D4\n   #define DHTTYPE DHT11\n   DHT dht(DHTPIN, DHTTYPE);\n\n   const char* apiKey = \"YOUR_THINGSPEAK_API_KEY\";\n   const char* server = \"api.thingspeak.com\";\n\n   void setup() {\n       Serial.begin(115200);\n       dht.begin();\n       WiFi.begin(\"SSID\", \"PASSWORD\");\n   }\n\n   void loop() {\n       float h = dht.readHumidity();\n       float t = dht.readTemperature();\n       if (WiFi.status() == WL_CONNECTED) {\n           WiFiClient client;\n           if (client.connect(server, 80)) {\n               String postStr = apiKey;\n               postStr +=\"&field1=\" + String(t);\n               postStr +=\"&field2=\" + String(h);\n               postStr +=\"\r\n\r\n\";\n               client.print(\"POST /update HTTP/1.1\n\");\n               client.print(\"Host: api.thingspeak.com\n\");\n               client.print(\"Connection: close\n\");\n               client.print(\"Content-Type: application/x-www-form-urlencoded\n\");\n               client.print(\"Content-Length: \" + String(postStr.length()) + \"\n\n\");\n               client.print(postStr);\n           }\n       }\n       delay(20000); // Upload every 20 seconds\n   }"
      }
    ],
    "youtubeResources": [],
    "books": [
      {
        "title": "IoT Projects with ESP32",
        "author": "Agus Kurniawan"
      }
    ],
    "practiceLinks": [
      {
        "title": "Instructables IoT Projects Hub",
        "url": "https://www.instructables.com/circuits/iot/projects/"
      },
      {
        "title": "Arduino Project Hub IoT",
        "url": "https://create.arduino.cc/projecthub/projects/tags/iot"
      }
    ],
    "questionBank": {
      "conceptual": [
        "List essential hardware components required for an IoT GPS Vehicle Tracker. (2 Marks)",
        "How does a Smart Parking System detect vacant parking slots using Ultrasonic / IR sensors? (2 Marks)",
        "What is the role of HTTP POST requests when uploading data to ThingSpeak cloud? (2 Marks)"
      ],
      "sixMarks": [
        "Design complete system circuit schematic, component list, and flowchart for an IoT Home Security System with PIR motion sensor, ESP32 CAM camera, and Telegram Bot alert notifications. (6 Marks)",
        "Explain hardware interfacing and software code structure for an IoT Patient Health Monitoring System measuring Heart Rate and SpO2 using MAX30102 sensor with OLED display and Cloud upload. (6 Marks)"
      ],
      "longAnswer": [
        "Comprehensive project documentation for an Industrial Smart Energy Monitoring System. Detail 3-phase AC CT Current Transformer sensors, ADE7758 energy metering IC, Modbus RTU communication, ESP32 gateway, MQTT transmission to AWS IoT Core, and Time-Series Grafana dashboard showing active power (kW), reactive power (kVAR), and power factor metrics. (10 Marks)"
      ]
    }
  }
];
