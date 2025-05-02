import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function Semester5() {
  const [selectedSubject, setSelectedSubject] = useState("Compiler Design");
  const [activeTab, setActiveTab] = useState("Syllabus");
  const { semesterId } = useParams();

  const semesterData = {
    subjects: [
      "Compiler Design",
      "Computer Networks",
      "Design Analysis and Algorithms",
      "Economics for Engineers",
      "Operating Systems",
      "Software Engineering"
    ],
    units: {
      "Compiler Design": [
        { 
          title: "UNIT - I",
          desc: "Compilers and translators, need of translators, structure of compiler: its different phases, compiler construction tools, Lexical analysis: Role of lexical analyzer, Input Buffering, A simple approach to the design of Lexical Analyzers, Specification and recognition of tokens, Finite automata, From regular expressions to automata, and vice versa, minimizing number of states of DFA, A language for specifying Lexical Analyzers, Design and implementation of lexical analyzer."
        },
        { 
          title: "UNIT - II",
          desc: "The role of the parser, Context free grammars, Writing a grammar: Lexical versus Syntactic analysis, Eliminating ambiguity, Elimination of left recursion, Left factoring, Top Down Parsing: Recursive‐Decent parsing, Non‐recursive Predictive parsing, LL(1) grammars, Bottom Up Parsing: Shift Reduce Parsing, Operator precedence parsing, LR Parsing: SLR, LALR and Canonical LR parser, Parser Generators."
        },
        { 
          title: "UNIT - III",
          desc: "Syntax Directed Translation: Syntax directed definitions, Evaluation orders for SDD’s, construction of syntax trees, syntax directed translation schemes, implementation of syntax directed translation, Intermediate Code Generation: Kinds of intermediate code: Postfix notation, Parse trees and syntax trees, Three‐address code, quadruples and triples, Semantic Analysis: Types and Declarations, Translation of Expressions, Type checking."
        },
        { 
          title: "UNIT - IV",
          desc: "Symbol Table: Symbol tables, its contents, Data Structure for Symbol Table: lists, trees, linked lists, hash tables, Error Detection and Recovery: Errors, lexical phase errors, syntactic phase errors, semantic errors, Error seen by each phase. Code Optimization: The principal sources of optimizations, Loop optimization, Basic blocks and Flow Graphs, DAG representation of basic blocks, Code Generation: Issues in the design of code generation, A simple target machine mode, A Simple Code Generator, Peep‐hole optimization, Register allocation and assignment."
        }
      ],
      "Computer Networks": [
        {
          title: "UNIT - I",
          desc: "Data Communications: Components, Networks, The Internet, Protocols and Standards, Network Models: The OSI Model, TCP/IP Protocol Suite , A Comparison of the OSI and TCP/IP Reference Models, Addressing, Physical Layer: Analog and Digital Signals, Transmission modes, Transmission Media: Guided Media, Unguided Media, Review of Error Detection and Correction codes. Switching: Circuit switching (space‐division, time division and space-time division), packet switching (virtual circuit and Datagram approach), message switching."
        },
        {
          title: "UNIT - II",
          desc: "Data Link Layer: Design issues, Data Link Control and Protocols: Flow and Error Control, Stop‐and‐wait ARQ. Sliding window protocol, Go‐Back‐N ARQ, Selective Repeat ARQ, HDLC, Point‐to –Point Access: PPP Point –to‐Point Protocol, PPP Stack, Medium Access Sub layer: Channel allocation problem, Controlled Access, Channelization, multiple access protocols, IEEE standard 802.3 & 802.11 for LANS and WLAN, high‐speed LANs, Token ring, Token Bus, FDDI based LAN, Network Devices‐repeaters, hubs, switches bridges."
        },
        {
          title: "UNIT - III",
          desc: "Network Layer: Design issues, Routing algorithms, Congestion control algorithms, Host to Host Delivery: Internetworking, addressing and routing, IP addressing (class full & Classless), Subnet, Network Layer Protocols: ARP, IPV4, ICMP, IPV6 ad ICMPV6."
        },
        {
          title: "UNIT - IV",
          desc: "Transport Layer: Process to Process Delivery: UDP; TCP, congestion control and Quality of service. Application Layer: Client Server Model, Socket Interface, Domain Name System (DNS): Electronic Mail (SMTP), file transfer (FTP), HTTP and WWW."
        }
      ],
      "Design Analysis and Algorithms": [
        {
          title: "UNIT - I",
          desc: "Asymptotic notations for time and space complexity, Methods for solving Recurrence relations, Brief Review of Graphs, Sets and disjoint sets, union, sorting and searching algorithms and their analysis in terms of space and time complexity. Divide and Conquer: General method, binary search, merge sort, Quick sort, selection sort, Strassen’s matrix multiplication algorithms and analysis of algorithms for these problems."
        },
        {
          title: "UNIT - II",
          desc: "Greedy Method: General method, knapsack problem, Huffman Codes, job sequencing with deadlines, minimum spanning trees, single source paths and analysis of these problems. Back Tracking: General method, 8 queen’s problem, graph colouring, Hamiltonian cycles, and analysis of these problems."
        },
        {
          title: "UNIT - III",
          desc: "Dynamic Programming: Ingredients of Dynamic Programming. Matrix Chain Multiplication, Longest common subsequence and optimal binary search trees problems, 0‐1 knapsack problem, Traveling salesperson problem, Floyd Warshall algorithm. Branch and Bound: Method, O/I knapsack and traveling salesperson problem"
        },
        {
          title: "UNIT - IV",
          desc: "String Matching: The naïve String Matching algorithm, The Rabin‐Karp Algorithm, String Matching with finite automata, The Knuth‐Morris Pratt algorithm. Computational Complexity: Basic Concepts, Polynomial vs Non‐Polynomial Complexity, NP‐ hard & NP‐complete classes. Approximation Algorithms Flow and Sorting Network:, Ford‐ Fulkerson method, Maximum bipartite matching, Sorting Networks, Comparison network, Zero‐ one principle, Bitonic sorting network, merging network"
        }
      ],
      "Economics for Engineers": [
        {
          title: "UNIT - I",
          desc: "Introduction: Economics Definition, Basic economic problems, Resource constraints and welfare maximization. Micro and Macro economics. Production Possibility Curve. Circular flow of economic activities. Basics of Demand, Supply and Equilibrium: Demand side and supply side of the market. Factors affecting demand & supply. Elasticity of demand & supply – price, income and cross‐price elasticity. Market equilibrium price."
        },
        {
          title: "UNIT - II",
          desc: "Theory of Consumer Choice: Theory of Utility and consumer’s equilibrium. Indifference Curve analysis, Budget Constraints, Consumer Equilibrium. Demand forecasting: Regression Technique, Time‐series, Smoothing Techniques: Exponential, Moving Averages Method"
        },
        {
          title: "UNIT - III",
          desc: "Cost Theory and Analysis: Nature and types of cost, Cost functions‐ short run and long run, Economies and diseconomies of scale Market Structure: Market structure and degree of competition Perfect competition, Monopoly, Monopolistic competition, Oligopoly"
        },
        {
          title: "UNIT - IV",
          desc: "National Income Accounting: Overview of Macroeconomics, Basic concepts of National Income Accounting Macro Economics Issues: Introduction to Business Cycle, Inflation‐causes, consequences and remedies: Monetary and Fiscal policy."
        }
      ],
      "Operating Systems": [
        {
          title: "UNIT - I",
          desc: "Introduction: What is an Operating System, Simple Batch Systems, Multiprogrammed Batches systems, Time Sharing Systems, Personal‐computer systems, Parallel systems, Distributed Systems, Real‐Time Systems, OS – A Resource Manager. Processes: Introduction, Process states, process management, Interrupts, Interprocess Communication. Threads: Introduction, Thread states, Thread Operation, Threading Models. Processor Scheduling: Scheduling levels, preemptive vs no preemptive scheduling, priorities, scheduling objective, scheduling criteria, scheduling algorithms, demand scheduling, real time scheduling."
        },
        {
          title: "UNIT - II",
          desc: "Process Synchronization: Mutual exclusion, software solution to Mutual exclusion problem, hardware solution to Mutual exclusion problem, semaphores, Critical section problems. Case study on Dining philosopher problem, Barber shop problem etc. Memory Organization & Management: Memory Organization, Memory Hierarchy, Memory Management Strategies, Contiguous versus non‐ Contiguous memory allocation, Partition Management Techniques, Logical versus Physical Address space, swapping, Paging, Segmentation, Segmentation with Paging Virtual Memory: Demand Paging, Page Replacement, Page‐replacement Algorithms, Performance of Demand Paging, Thrashing, Demand Segmentation, and Overlay Concepts."
        },
        {
          title: "UNIT - III",
          desc: "Deadlocks: examples of deadlock, resource concepts, necessary conditions for deadlock, deadlock solution, deadlock prevention, deadlock avoidance with Bankers algorithms, deadlock detection, deadlock recovery. Device Management: Disk Scheduling Strategies, Rotational Optimization, System Consideration, Caching and Buffering."
        },
        {
          title: "UNIT - IV",
          desc: "File System: Introduction, File Organization, Logical File System, Physical File System, File Allocation strategy, Free Space Management, File Access Control, Data Access Techniques, Data Integrity Protection, Case study on file system viz FAT32, NTFS, Ext2/Ext3 etc."
        }
      ],
      "Software Engineering": [
        {
          title: "UNIT - I",
          desc: "Introduction: Introduction to Software Engineering, Importance of software engineering as a discipline, Software applications, Software Crisis, Software Processes & Characteristics, Software life cycle models, Waterfall, Prototype, Evolutionary and Spiral Models. Software Requirements Analysis & Specifications: Requirement engineering, Functional and non‐functional requirements, User requirements, System requirements, requirement elicitation techniques like FAST, QFD & Use case approach, requirements analysis using DFD, Data dictionaries & ER Diagrams, Requirements documentation, Nature of SRS, Characteristics & organization of SRS, Requirement Management, IEEE Std. for SRS."
        },
        {
          title: "UNIT - II",
          desc: "Software Project Planning: Size Estimation like lines of Code & Function Count, Cost Estimation Models, COCOMO, Putnam resource allocation model, Validating Software Estimates, Risk Management. Software Design: Cohesion & Coupling, Classification of Cohesiveness & Coupling, Function Oriented Design, Object Oriented Design, User Interface Design."
        },
        {
          title: "UNIT - III",
          desc: "Software Metrics: Software measurements: What & Why, Token Count, Halstead Software Science Measures, Data Structure Metrics, Information Flow Metrics. Software Reliability: Importance, Hardware Reliability & Software Reliability, Failure and Faults, Reliability Models‐ Basic Model, Logarithmic Poisson Model, Software Quality Models, CMM & ISO 9001."
        },
        {
          title: "UNIT - IV",
          desc: "Software Testing: Testing process, Functional testing: Boundary value analysis, Equivalence class testing, Decision table testing, Cause effect graphing, Structural testing: Path testing, Data flow and mutation testing, unit testing, integration and system testing, Debugging, Testing Tools & Standards. Software Maintenance: Management of Maintenance, Maintenance Process, Maintenance Models, Regression Testing, Reverse Engineering, Software Re‐engineering, Configuration Management, Documentation."
        }
      ]
    }
  };

  const { subjects, units } = semesterData;
  const subjectUnits = units[selectedSubject] || [];

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="bg-[#f1436c] py-6 text-white text-center text-4xl font-bold">
        CSE - 5th Semester
      </div>

      <div className="flex justify-center mt-6 space-x-4">
        {["Syllabus", "Practical", "Notes", "Videos", "PYQs", "Books"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded font-semibold ${
              activeTab === tab 
                ? "bg-[#0d1b4c] text-white"
                : "bg-white border hover:bg-gray-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="max-w-6xl mx-auto mt-8 bg-gradient-to-b from-[#0d1b4c] to-[#1d2e6c] p-6 rounded-lg shadow">
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex flex-col space-y-2 sm:w-1/4 max-h-[600px] overflow-y-auto">
            {subjects.map((subject) => (
              <button
                key={subject}
                onClick={() => setSelectedSubject(subject)}
                className={`text-left px-4 py-3 rounded ${
                  selectedSubject === subject
                    ? "bg-white text-[#0d1b4c] font-bold"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {subject}
              </button>
            ))}
          </div>

          <div className="sm:w-3/4 space-y-4 bg-white p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-[#0d1b4c] mb-4">
              {selectedSubject}
            </h2>
            <div className="space-y-3">
              {activeTab === "Syllabus" ? (
                subjectUnits.map((unit, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-[#f1436c] pl-4 py-3 bg-gray-50 rounded"
                  >
                    <h3 className="text-lg font-semibold text-[#0d1b4c]">
                      {unit.title}
                    </h3>
                    <p className="text-gray-700 mt-1">{unit.desc}</p>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-xl text-gray-600 font-semibold mb-2">
                    {activeTab} section coming soon!
                  </p>
                  <p className="text-gray-500">
                    We're working hard to bring you this content
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}