import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function Semester3() {
  const [selectedSubject, setSelectedSubject] = useState("Design and Analysis of Algorithms");
  const [activeTab, setActiveTab] = useState("Syllabus");
  const { semesterId } = useParams();
  const navigate = useNavigate();

  const semesterData = {
    subjects: [
      "Design and Analysis of Algorithms",
      "Computer Organization and Architecture",
      "Operating Systems",
      "Theory of Computation",
      "Software Engineering",
      "Internet of Things",
      "Java Programming",
      "Discrete Mathematics"
    ],
    units: {
      "Design and Analysis of Algorithms": [
        { 
          title: "UNIT - I",
          desc: "Introduction: Algorithms and their analysis, Time and Space complexity, Asymptotic notations (Big-O, Omega, Theta), Recurrence relations, Divide and conquer approach, Divide and conquer recurrence relation and its solution, Applications of divide and conquer - Binary search, Merge sort, Quick sort, Selection problem, Strassen's matrix multiplication."
        },
        { 
          title: "UNIT - II",
          desc: "Greedy Algorithms: Greedy method, Applications of greedy method - Activity selection problem, Huffman coding, Fractional knapsack, Job sequencing with deadlines. Dynamic Programming: Dynamic programming approach, Applications of dynamic programming - Matrix chain multiplication, 0/1 knapsack, Longest common subsequence, Optimal binary search trees."
        },
        { 
          title: "UNIT - III",
          desc: "Graph Algorithms: Representations of graphs, Graph traversals (BFS, DFS), Applications of graph algorithms - Topological sort, Strongly connected components, Minimum spanning trees (Prim's and Kruskal's algorithms), Single-source shortest paths (Dijkstra's and Bellman-Ford algorithms)."
        },
        { 
          title: "UNIT - IV",
          desc: "Backtracking and Branch and Bound: Backtracking approach and applications - N-queens problem, Graph coloring, Hamiltonian cycles. Branch and bound approach and applications - 0/1 knapsack, Traveling salesman problem. Introduction to NP-completeness: P, NP, NP-hard, and NP-complete classes, Polynomial time verification and reducibility."
        }
      ],
      "Computer Organization and Architecture": [
        {
          title: "UNIT - I",
          desc: "Basic Structure of Computers: Computer types, Functional units, Basic operational concepts, Bus structures, Software, Performance, Multiprocessors and multi-computers. Machine Instructions and Programs: Numbers, Arithmetic operations, Instructions and instruction sequencing, Addressing modes, Assembly language, Basic I/O operations."
        },
        {
          title: "UNIT - II",
          desc: "Processing Unit: Fundamental concepts, Execution of a complete instruction, Multiple-bus organization, Hardwired control, Microprogrammed control, RISC, CISC. Memory System: Basic concepts, Semiconductor RAM memories, ROM memories, Cache memories, Virtual memories, Memory management hardware."
        },
        {
          title: "UNIT - III",
          desc: "I/O Organization: Accessing I/O devices, Direct memory access, Buses, Interface circuits, Standard I/O interfaces, I/O performance, Programmed I/O, Interrupt-driven I/O, DMA, I/O channels and processors."
        },
        {
          title: "UNIT - IV",
          desc: "Pipeline and Vector Processing: Parallel processing, Pipelining, Arithmetic pipeline, Instruction pipeline, RISC pipeline, Vector processing, Array processors. Multiprocessors: Characteristics of multiprocessors, Interconnection structures, Cache coherence, Shared memory multiprocessors."
        }
      ],
      "Operating Systems": [
        {
          title: "UNIT - I",
          desc: "Introduction to Operating Systems: Evolution of operating systems, Types of operating systems, Operating system concepts and structures, System calls, Operating system design and implementation, Operating system services, System boot. Process Management: Process concept, Process scheduling, Operations on processes, Inter-process communication, Multithreaded programming."
        },
        {
          title: "UNIT - II",
          desc: "Process Scheduling: Basic concepts, Scheduling criteria, Scheduling algorithms (FCFS, SJF, Priority, Round Robin), Algorithm evaluation, Multi-processor scheduling. Process Synchronization: Critical section problem, Peterson's solution, Synchronization hardware, Semaphores, Classic problems of synchronization, Monitors."
        },
        {
          title: "UNIT - III",
          desc: "Deadlock: System model, Deadlock characterization, Methods for handling deadlocks, Deadlock prevention, Deadlock avoidance, Deadlock detection, Recovery from deadlock. Memory Management: Background, Swapping, Contiguous memory allocation, Paging, Segmentation, Virtual memory, Demand paging, Page replacement."
        },
        {
          title: "UNIT - IV",
          desc: "File Systems: File concept, Access methods, Directory structure, File system mounting, File sharing, Protection, Allocation methods, Free space management. I/O Systems: I/O hardware, Application I/O interface, Kernel I/O subsystem, STREAMS. Case Studies: UNIX/Linux system, Windows system."
        }
      ],
      "Theory of Computation": [
        {
          title: "UNIT - I",
          desc: "Introduction to Theory of Computation: Alphabets, strings and languages, Automata and grammars, Deterministic finite automata (DFA), Non-deterministic finite automata (NFA), Equivalence of DFA and NFA, Conversion from NFA to DFA, Finite automata with epsilon transitions, Regular expressions, Kleene's theorem."
        },
        {
          title: "UNIT - II",
          desc: "Regular Languages and Properties: Pumping lemma for regular languages, Closure properties of regular languages, Decision algorithms for regular languages, Minimization of DFA. Context-free Grammars and Languages: Context-free grammars (CFG), Parse trees, Ambiguity, Simplification of CFGs, Normal forms, Pumping lemma for context-free languages."
        },
        {
          title: "UNIT - III",
          desc: "Pushdown Automata: Definition and examples of PDA, Acceptance by PDA, Equivalence of PDAs and CFGs, Deterministic pushdown automata, Properties of context-free languages, Closure properties, Decision algorithms."
        },
        {
          title: "UNIT - IV",
          desc: "Turing Machines: Definition and examples of Turing machines, Computing with Turing machines, Techniques for Turing machine construction, Universal Turing machine. Undecidability: The Church-Turing thesis, Decidable and undecidable problems, Halting problem, Post's correspondence problem, Rice's theorem."
        }
      ],
      "Software Engineering": [
        {
          title: "UNIT - I",
          desc: "Introduction to Software Engineering: Definition, Software characteristics, Software crisis, Software process, Software process models (waterfall, incremental, spiral, evolutionary, prototype-based), Agile software development, Scrum, Extreme programming, Software project management. Requirements Engineering: Requirements elicitation techniques, Requirements analysis and specification, Requirements validation, Functional and non-functional requirements."
        },
        {
          title: "UNIT - II",
          desc: "Software Design: Design concepts, Design principles, Design patterns, Architectural design, Component-level design, User interface design, Object-oriented design, Function-oriented design. Software Testing: Testing fundamentals, Test case design, White box testing, Black box testing, Unit testing, Integration testing, System testing, Regression testing."
        },
        {
          title: "UNIT - III",
          desc: "Software Quality Assurance: Quality concepts, Quality metrics, Statistical quality assurance, Software reviews, Formal technical reviews, Inspection, Quality standards (ISO 9000, CMM/CMMI). Software Project Management: Project planning, Project scheduling, Risk management, Software configuration management, Cost estimation."
        },
        {
          title: "UNIT - IV",
          desc: "Software Maintenance: Maintenance types, Maintenance cost, Maintenance activities, Software re-engineering. Advanced Topics: Component-based software engineering, Service-oriented architecture, Software as a service (SaaS), Cloud computing, DevOps, Continuous integration and continuous delivery (CI/CD)."
        }
      ],
      "Internet of Things": [
        {
          title: "UNIT - I",
          desc: "Introduction to IoT: IoT definitions, IoT architecture, IoT devices and smart objects, Sensors and actuators, IoT design methodology, IoT enabling technologies, IoT levels, IoT applications (smart homes, smart cities, healthcare, agriculture), IoT challenges. IoT Network Architecture: Physical layer protocols (Bluetooth, Zigbee, NFC, RFID), Network layer protocols (IPv6, 6LoWPAN), Transport layer protocols, Application layer protocols (MQTT, CoAP)."
        },
        {
          title: "UNIT - II",
          desc: "IoT Systems Management: IoT network management, Operational technology, IoT policies, Device management, Firmware updates, IoT standards and regulations. IoT Physical Devices: IoT hardware and devices, Sensor technology, Actuator technology, Embedded systems for IoT, Communication mechanisms, Addressing schemes, Edge gateway functions."
        },
        {
          title: "UNIT - III",
          desc: "IoT Data Management: IoT data acquisition process, Big data and IoT relationship, Data storage solutions, Cloud storage, Edge analytics, Data cleaning, Data processing, Machine learning for IoT data, Data visualization for IoT."
        },
        {
          title: "UNIT - IV",
          desc: "IoT Security: Security requirements in IoT, Security challenges, Attack vectors in IoT, Security protocols for IoT, Encryption techniques, Authentication mechanisms, Authorization, Access control, IoT security frameworks. IoT Platform and Case Studies: IoT platforms comparison, Application development on IoT platforms, Smart home automation, Industrial IoT applications."
        }
      ],
      "Java Programming": [
        {
          title: "UNIT - I",
          desc: "Introduction to Java: History of Java, Features of Java, Java virtual machine, Java development environment, Java program structure, Tokens, Statements, Java basics - data types, variables, operators, expressions, control statements, Arrays, Command line arguments. Object-Oriented Programming in Java: Classes and objects, Constructors, Methods, Access modifiers, Static members, Final keyword, Inner classes, Packages."
        },
        {
          title: "UNIT - II",
          desc: "Inheritance and Polymorphism: Inheritance types, Method overriding, Super keyword, Abstract classes, Interfaces, Polymorphism, Dynamic method dispatch. Exception Handling: Exception hierarchy, Try-catch blocks, Multiple catch blocks, Nested try, Throw and throws keywords, Finally block, Custom exceptions."
        },
        {
          title: "UNIT - III",
          desc: "Multithreading: Thread concept, Thread lifecycle, Creating threads - Thread class vs Runnable interface, Thread synchronization, Inter-thread communication, Thread priorities, Thread groups, Daemon threads. Java I/O: Stream classes, Byte streams, Character streams, Buffered streams, Scanner class, Serialization and deserialization, File handling."
        },
        {
          title: "UNIT - IV",
          desc: "Java Collections Framework: Collection interfaces, List, Set, Map interfaces, Implementation classes - ArrayList, LinkedList, HashSet, TreeSet, HashMap, TreeMap, Generics, Comparable and Comparator interfaces. GUI Programming: AWT components, Swing components, Layout managers, Event handling. Advanced Java Topics: JDBC for database connectivity, Lambda expressions, Streams API."
        }
      ],
      "Discrete Mathematics": [
        {
          title: "UNIT - I",
          desc: "Set Theory and Logic: Sets, Relations, Functions, Operations on sets, Propositional logic, Logical operators, Truth tables, Logical equivalence, Predicate logic, Quantifiers, Rules of inference, Mathematical proofs. Combinatorics: Permutations, Combinations, Binomial coefficients, Inclusion-exclusion principle, Recurrence relations and their solutions."
        },
        {
          title: "UNIT - II",
          desc: "Relations: Properties of binary relations, Equivalence relations, Partial order relations, Hasse diagrams, Lattices, Boolean algebra, Boolean functions, Minimization of Boolean functions, Logic gates, Digital circuits. Functions: Types of functions, Growth of functions, Big-O notation, Generating functions, Recursive functions."
        },
        {
          title: "UNIT - III",
          desc: "Graph Theory: Graph terminology, Representation of graphs, Types of graphs, Graph isomorphism, Connectivity, Euler and Hamilton paths, Graph coloring, Graph algorithms, Planar graphs, Graph models. Trees: Tree terminology, Binary trees, Tree traversals, Spanning trees, Minimum spanning trees, Decision trees."
        },
        {
          title: "UNIT - IV",
          desc: "Algebraic Structures: Algebraic structures with one binary operation (groups, semigroups, monoids), Groups, Subgroups, Lagrange's theorem, Normal subgroups, Group homomorphisms, Algebraic structures with two binary operations (rings, fields), Applications to coding theory. Finite State Automata: Formal languages, Regular expressions, Finite state machines, Deterministic and non-deterministic automata, Language recognition."
        }
      ]
    }
  };

  const { subjects, units } = semesterData;
  const subjectUnits = units[selectedSubject] || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-100" style={{
      backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')",
      backgroundBlendMode: "soft-light"
    }}>
      {/* Main content area */}
      <div className="flex flex-col flex-1">
        {/* Semester header - Improved style with a more modern gradient and subtle pattern */}
        <div className="bg-gradient-to-r from-blue-700 via-indigo-800 to-purple-800 py-6 px-6 shadow-lg relative overflow-hidden rounded-lg">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full mix-blend-overlay filter blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full mix-blend-overlay filter blur-xl"></div>
          </div>
          <h1 className="text-3xl font-bold text-white text-center relative z-10">CSE - 3rd Semester</h1>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400"></div>
        </div>

        {/* Tab navigation */}
        <div className="flex flex-wrap justify-center mt-6 px-4 gap-2 md:space-x-4 z-10">
          {["Syllabus", "Practical", "Notes", "Videos", "PYQs", "Books"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab 
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                  : "bg-white hover:bg-gray-100 shadow-sm"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Main content with decorative elements */}
        <div className="flex flex-col items-center justify-center flex-1 py-8 px-6 relative">
          {/* Decorative blobs */}
          <div className="absolute top-32 left-1/4 w-24 h-24 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-32 right-1/4 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-32 left-1/3 w-36 h-36 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

          {/* Content area */}
          <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg p-6 rounded-2xl shadow-xl z-10 w-full max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Subject sidebar */}
              <div className="lg:w-1/4">
                <h3 className="font-bold text-lg text-gray-700 mb-3 ml-2">Subjects</h3>
                <div className="space-y-2 max-h-[70vh] overflow-y-auto pr-2 rounded">
                  {subjects.map((subject) => (
                    <button
                      key={subject}
                      onClick={() => setSelectedSubject(subject)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                        selectedSubject === subject
                          ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium shadow-md"
                          : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {subject}
                    </button>
                  ))}
                </div>
              </div>

              {/* Content display area */}
              <div className="lg:w-3/4 bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4 pb-2 border-b">
                  {selectedSubject}
                </h2>

                <div className="space-y-4">
                  {activeTab === "Syllabus" ? (
                    <>
                      {subjectUnits.map((unit, index) => (
                        <div
                          key={index}
                          className="bg-gradient-to-r from-gray-50 to-white p-4 rounded-lg shadow-sm border-l-4 border-indigo-400 hover:shadow-md transition-all duration-300"
                        >
                          <h3 className="text-lg font-semibold text-gray-800">
                            {unit.title}
                          </h3>
                          <p className="text-gray-700 mt-2 leading-relaxed">{unit.desc}</p>
                        </div>
                      ))}
                      
                      {/* Study tips for the subject */}
                      <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-medium text-blue-800 mb-2">Study Tips for {selectedSubject}</h4>
                        <ul className="text-sm text-blue-700 ml-5 list-disc">
                          <li>Break down complex topics into smaller, manageable chunks</li>
                          <li>Use visual aids like diagrams and flowcharts for better retention</li>
                          <li>Practice solving previous year questions</li>
                          <li>Form study groups for difficult concepts</li>
                        </ul>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-12 bg-gray-50 rounded-lg">
                      <div className="w-16 h-16 mx-auto bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </div>
                      <p className="text-xl text-gray-600 font-semibold mb-2">
                        {activeTab} section coming soon!
                      </p>
                      <p className="text-gray-500">
                        We're working hard to bring you this content
                      </p>
                      <button 
                        className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full text-sm hover:shadow-lg transition-all duration-300"
                        onClick={() => setActiveTab("Syllabus")}
                      >
                        Go Back to Syllabus
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}