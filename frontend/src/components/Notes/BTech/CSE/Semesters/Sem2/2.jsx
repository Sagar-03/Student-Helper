import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function Semester2() {
  const [selectedSubject, setSelectedSubject] = useState("Applied Mathematics 2");
  const [activeTab, setActiveTab] = useState("Syllabus");
  const { semesterId } = useParams();
  const navigate = useNavigate();

  const semesterData = {
    subjects: [
      "Applied Mathematics 2",
      "Applied Physics 2",
      "Data Structures",
      "Digital Electronics",
      "Database Management Systems",
      "Object Oriented Programming",
      "Web Technology",
      "Economics for Engineers",
      "Professional Ethics"
    ],
    units: {
      "Applied Mathematics 2": [
        { 
          title: "UNIT - I",
          desc: "Numerical Analysis: Introduction to Numerical Methods, Finite Differences, Interpolation using Newton's forward and backward difference formula, Newton's divided difference formula, Lagrange's Interpolation, Numerical Differentiation and Integration, Trapezoidal rule, Simpson's rule, Newton's Cotes formula, Gauss Quadrature formula, Difference Equations."
        },
        { 
          title: "UNIT - II",
          desc: "Numerical Solution of Ordinary Differential Equations: Euler's method, Modified Euler's method, Runge-Kutta method (2nd and 4th order), Predictor-Corrector methods, Numerical Solution of Boundary Value Problems, Finite difference method, Shooting method. Numerical Solution of Partial Differential Equations: Finite difference approximations for partial derivatives, Solution of Laplace and Poisson equation (Standard 5-point formula), Solution of one-dimensional Heat and Wave equations."
        },
        { 
          title: "UNIT - III",
          desc: "Functions of Complex Variables: Concepts & Definitions, Analytic functions, Cauchy-Riemann conditions, Harmonic functions, Elementary functions, Mapping by elementary functions, Conformal mapping, Bilinear transformation, Fixed point, Cross ratio, Complex integration, Cauchy's integral theorem and integral formula, Taylor's & Laurent's series, Singularities, Residue theorem, Applications of residue theorem for evaluating real integrals."
        },
        { 
          title: "UNIT - IV",
          desc: "Special Functions: Series solutions of differential equations, Power series method, Legendre's equation, Legendre polynomials, Bessel's equation, Bessel functions of first kind, Orthogonal properties, Sturm-Liouville problem. Partial Differential Equations: Classification of second-order PDEs, Method of separation of variables, D'Alembert's solution of wave equation, Solution of one-dimensional heat equation, Laplace equation in Cartesian coordinates."
        }
      ],
      "Applied Physics 2": [
        {
          title: "UNIT - I",
          desc: "Crystal Structure: Space lattice, unit cell and translation vectors, Miller indices, simple crystal structures, X-ray diffraction, Bragg's law, Experimental methods for crystal structure determination, Quantum theory of X-ray diffraction. Reciprocal lattice, structure factor."
        },
        {
          title: "UNIT - II",
          desc: "Quantum Mechanics: Introduction to quantum mechanics, Wave-particle duality, de Broglie waves, Evidences for wave nature of particles, Uncertainty principle and its applications, Wave packets, Schroedinger wave equation and its applications, Eigen values and Eigen functions, Expectation values, Particle in a one dimensional box."
        },
        {
          title: "UNIT - III",
          desc: "Wave Mechanics: Quantum theory of conductors, insulators and semi-conductors, Free electron theory of metals, Origin of energy bands, Motion of electrons in a periodic potential, Kronig-Penny model, Brillouin zones, Effective mass, Concept of holes, Classification of solids into metals, semiconductors and insulators, Hall effect and its applications, Magnetoresistance."
        },
        {
          title: "UNIT - IV",
          desc: "Dielectrics & Magnetic Materials: Dielectric polarization, Dielectric susceptibility and dielectric constant, Types of polarizations, Frequency dependence of dielectric constant, Ferro and Piezoelectricity, Magnetization, Origin of magnetic moment, Dia and Paramagnetism, Quantum theory of ferromagnetism, Domains and Hysteresis, Soft and Hard magnetic materials. Superconductivity: Properties, Type I and Type II superconductors, Theory of superconductivity (qualitative), Josephson effect, High temperature superconductors."
        }
      ],
      "Data Structures": [
        {
          title: "UNIT - I",
          desc: "Introduction to Data Structures: Array as an abstract data type, representation, ordered list, operations on ordered list, PUSH and POP operations, Linked lists, Stack Abstract Data Type (ADT), representation using arrays and linked lists, Queue ADT, representation using arrays and linked lists, circular queues."
        },
        {
          title: "UNIT - II",
          desc: "Searching and Sorting Algorithms: Sequential search, binary search, analysis of search algorithms, Insertion sort, selection sort, bubble sort, quick sort, merge sort, heap sort, comparison of sorting algorithms and their complexity."
        },
        {
          title: "UNIT - III",
          desc: "Trees: Binary trees, binary tree ADT, tree traversals, threaded binary trees, binary search trees, AVL trees, B trees, B+ trees, operations on binary search trees, Huffman coding, Prefix Trees (Trie), applications of trees."
        },
        {
          title: "UNIT - IV",
          desc: "Graphs: Definitions, graph representation, adjacency matrix, adjacency list, graph traversals (breadth-first search, depth-first search), shortest path algorithms (Dijkstra's algorithm, Bellman-Ford algorithm, Floyd-Warshall algorithm), minimum spanning tree (Kruskal's and Prim's algorithms), topological sort."
        }
      ],
      "Digital Electronics": [
        {
          title: "UNIT - I",
          desc: "Number Systems: Binary, octal, decimal and hexadecimal number systems, base conversions, binary arithmetic, signed-magnitude representation, 1's and 2's complement arithmetic, weighted and non-weighted codes, error detection and correction codes, Boolean algebra and logic gates, minimization of Boolean functions, Karnaugh map (K-Map), sum of product (SOP) and product of sum (POS) forms, don't care conditions."
        },
        {
          title: "UNIT - II",
          desc: "Combinational Circuits: Design procedure, adders, subtractors, binary multiplier, magnitude comparator, decoders, encoders, multiplexers, demultiplexers, Introduction to VHDL, structural and behavioral models, packages and libraries, concurrent signal assignment statements."
        },
        {
          title: "UNIT - III",
          desc: "Sequential Circuits: Flip flops - SR, D, JK and T type flip flops, level triggering and edge triggering, preset and clear operations, race condition in flip flops, master-slave flip flops, registers, shift registers, counters - asynchronous and synchronous, up-down counter, ring counter and Johnson counter."
        },
        {
          title: "UNIT - IV",
          desc: "Memory Devices: Classification of memories, RAM - static and dynamic, ROM, EPROM, EEPROM, NVRAM, content-addressable memory, memory hierarchy, cache memory. Programmable Logic Devices: PAL, PLA, FPGA, basic concepts and applications. A/D and D/A Converters: Types of D/A converters, weighted resistor D/A converter, R-2R ladder D/A converter, specifications for D/A converters, A/D converter - quantization, parallel comparator, successive approximation, single slope, dual slope and sigma-delta A/D converters."
        }
      ],
      "Database Management Systems": [
        {
          title: "UNIT - I",
          desc: "Introduction to DBMS: Database Systems Concepts and Architecture, Data Models, Schemas and Instances, DBMS Architecture and Data Independence, Database Languages and Interfaces, Data Modeling Using ER Model, Entity Types, Entity Set, Attributes and Keys, Relationship Type, Relationship Set, Constraints, Weak Entity Sets, ER Diagrams, Reducing ER Diagrams to Tables."
        },
        {
          title: "UNIT - II",
          desc: "Relational Data Model and SQL: Relational Model Concepts, Relational Model Constraints, Relational Algebra, Domain Calculus, Relational Calculus, SQL - DDL, DML, DCL, Introduction to Views and Indexes, Nested Queries, Aggregate Functions, Null Values, Assertions, Triggers. Integrity Constraints, Referential Integrity, Entity Integrity."
        },
        {
          title: "UNIT - III",
          desc: "Normalization and Transaction Management: Functional Dependencies, Normal Forms (1NF, 2NF, 3NF, BCNF), Multi-valued Dependencies and 4NF, Join Dependencies and 5NF, Database Design Process, Transaction Concept, Transaction State, Transaction Properties (ACID), Implementation of Atomicity and Durability, Concurrent Executions, Serializability, Recoverability, Scheduler, Lock-Based Protocols, Two-Phase Locking, Deadlock Handling, Recovery Techniques."
        },
        {
          title: "UNIT - IV",
          desc: "Advanced Topics: Database Security, Authorization, Access Control, Security Models, Flow Control, Statistical Database Security, Distributed Database Concepts, Types of Distributed Databases, Query Processing and Optimization, Introduction to Object-Oriented Databases, Object-Relational Databases, XML Databases, Big Data and NoSQL Systems, Emerging Database Technologies."
        }
      ],
      "Object Oriented Programming": [
        {
          title: "UNIT - I",
          desc: "Introduction to Object Oriented Programming: Procedure Oriented Programming vs Object Oriented Programming, Benefits of OOP, Object Oriented Languages, Applications of OOP, Introduction to Java, Java Features, Java Virtual Machine (JVM), Java Program Structure, Java Tokens, Java Statements, Implementation of OOP Concepts in Java: Classes, Objects, Method Overloading, Constructor Overloading, inheritance etc."
        },
        {
          title: "UNIT - II",
          desc: "Java Language Fundamentals: Primitive Data Types, Variables, Operators, Arrays, Strings and String Buffer Classes, Type Casting, Control Statements, Classes and Objects, Access Specifiers, Method Overloading, Constructors, this Keyword, static Members, Method Overriding, Final Keyword, Abstract Class, Interfaces, Packages, Exception Handling, Multithreading."
        },
        {
          title: "UNIT - III",
          desc: "Inheritance and Polymorphism: Inheritance, Types of Inheritance, Use of Super and Final Keywords with Inheritance, Method Overriding, Dynamic Method Dispatch, Abstract Classes, Interfaces, Packages, Access Protection, Importing Packages. Object Class in Java, Polymorphism using different techniques, Upcasting and Downcasting."
        },
        {
          title: "UNIT - IV",
          desc: "Java I/O, GUI, and Event Handling: The Java I/O Classes and Interfaces, File Class, Input/Output Streams, Reader and Writer Classes, Serialization, AWT Controls, Event Handling Mechanisms, Layout Managers, Introduction to Swing Components, Graphics Programming, JDBC Architecture, SQL Statements and JDBC API, Database Connectivity with Java Applications."
        }
      ],
      "Web Technology": [
        {
          title: "UNIT - I",
          desc: "Introduction to the Internet and World Wide Web: Internet, World Wide Web, Web Browsers, Web Servers, Uniform Resource Locators (URLs), HTTP, MIME Types. HTML5: History of HTML, Basic Structure of an HTML Document, Text Formatting, Links, Images, Lists, Tables, Forms, Semantic Tags, Audio and Video, Canvas, SVG, HTML5 APIs."
        },
        {
          title: "UNIT - II",
          desc: "Cascading Style Sheets (CSS): Introduction to CSS, CSS Syntax, Selectors, Properties, Values, CSS Box Model, Positioning, Display Property, Font Styling, Text Styling, Background, Borders, Margins, Padding, CSS3 Features, Media Queries and Responsive Design. JavaScript: Introduction to JavaScript, Variables, Data Types, Operators, Control Structures, Functions, Objects, Arrays, DOM Manipulation, Events, Error Handling, Regular Expressions, JSON."
        },
        {
          title: "UNIT - III",
          desc: "Client-Side Frameworks: Introduction to jQuery, jQuery Selectors, jQuery Methods, jQuery Events, jQuery Effects, jQuery AJAX. Introduction to modern JavaScript frameworks like React.js, Angular, or Vue.js, Components, Props, State Management, Routing, HTTP Requests, Form Handling. Frontend Build Tools: NPM, Webpack, Babel."
        },
        {
          title: "UNIT - IV",
          desc: "Server-Side Programming and Databases: Introduction to Server-Side Programming, Node.js, Express.js, RESTful Web Services, API Design, Authentication and Authorization, Web Security, SQL and NoSQL Databases, Database Connectivity, CRUD Operations. Web Hosting and Deployment: Domain Names, Web Hosting Options, Deployment Strategies, Performance Optimization, SEO Basics."
        }
      ],
      "Economics for Engineers": [
        {
          title: "UNIT - I",
          desc: "Introduction to Economics: Nature and scope of economic analysis, Micro and macroeconomic concepts, Economic systems, Production possibility curve, Opportunity cost, Concept of engineering economics, Role of engineers in economic decision making. Theory of Demand and Supply: Utility theory, Law of demand, Elasticity of demand, Consumer's equilibrium, Theory of production, Law of supply, Producer's equilibrium."
        },
        {
          title: "UNIT - II",
          desc: "Production and Cost Analysis: Production function, Law of variable proportions, Returns to scale, Cost concepts, Cost-output relationship in the short run and long run, Break-even analysis, Revenue concepts, Price determination under perfect competition, monopoly and imperfect competition, Price discrimination."
        },
        {
          title: "UNIT - III",
          desc: "Money, Banking and International Trade: Functions of money, Commercial banking and credit creation, Central banking functions, Monetary policy, Foreign exchange, Balance of payments, Trade theories, Trade policies, Exchange rate systems, WTO and regional economic cooperation. National Income: Concepts and measurement of national income, Determination of national income, Business cycles, Economic growth and sustainable development."
        },
        {
          title: "UNIT - IV",
          desc: "Engineering Economics and Financial Management: Time value of money, Simple and compound interest, Depreciation, Value analysis, Methods of project evaluation - payback period, NPV, IRR, Benefit-cost analysis, Replacement and maintenance analysis. Financial Statements: Balance sheet, Profit and loss account, Financial ratio analysis, Capital budgeting, Working capital management, Risk analysis."
        }
      ],
      "Professional Ethics": [
        {
          title: "UNIT - I",
          desc: "Introduction to Ethics: Definitions, importance of ethics, Types of ethics, Ethical theories, Ethical decision-making process, Professional ethics vs. Personal ethics, Significance of professional ethics in engineering profession. Engineering Ethics: Nature of engineering ethics, Engineering ethics vs. Ethics in other professions, Engineering as social experimentation, Engineers' responsibility for safety, Risk assessment and risk-benefit analysis."
        },
        {
          title: "UNIT - II",
          desc: "Professional Codes of Ethics: Purpose and limitations of codes, Study of various professional codes of ethics (IEEE, ASME, ASCE, etc.), Implementation and effectiveness of codes, Conflict between codes and personal values, Global issues in engineering ethics, Environmental ethics, Computer ethics. Rights and Responsibilities of Engineers: Professional rights, Professional responsibilities, Collegiality, Loyalty, Respect for authority, Whistle blowing, Professional autonomy."
        },
        {
          title: "UNIT - III",
          desc: "Ethical Issues in Engineering Practice: Safety and liability in design and manufacturing, Conflicts of interest, Confidentiality, Intellectual property rights, Plagiarism, Bribery and corruption, Corporate social responsibility, Technology transfer, Global issues. Case Studies: Analysis of ethical dilemmas in engineering practice, Ethical issues in emerging technologies (AI, biotechnology, etc.), Occupational crime, Professional negligence, Product liability."
        },
        {
          title: "UNIT - IV",
          desc: "Ethics in Research and Development: Research integrity, Data fabrication and falsification, Publication ethics, Ethical considerations in research with human subjects, Ethics in sponsored research, Intellectual property issues in research. Globalization and Ethics: Cross-cultural ethics, International business ethics, Technology transfer to developing countries, Appropriate technology, Environmental justice, Sustainable development."
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
          <h1 className="text-3xl font-bold text-white text-center relative z-10">CSE - 2nd Semester</h1>
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