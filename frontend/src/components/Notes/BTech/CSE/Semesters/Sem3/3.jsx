import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function Semester3() {
  const [selectedSubject, setSelectedSubject] = useState("Computational Methods");
  const [activeTab, setActiveTab] = useState("Syllabus");
  const { semesterId } = useParams();

  const semesterData = {
    subjects: [
      "Computational Methods",
      "Digital Logic and Circuit Design",
      "Discrete Mathematics",
      "Data Structures",
      "Indian Knowledge System",
      "Object Oriented Programming"
    ],
    units: {
      "Computational Methods": [
        { 
          title: "UNIT - I",
          desc: "Review of Taylor Series, Rolle's Theorem and Mean Value Theorem, Approximations and Errors in numerical computations, Data representation and computer arithmetic, Loss of significance in computation, Location of roots of equation: Bisection method (convergence analysis and implementation), Newton Method (convergence analysis and implementation), Secant Method (convergence analysis and implementation), Unconstrained one variable function minimization by Fibonacci search, Golden Section Search and Newton's method, Multivariate function minimization by the method of steepest descent, Nelder-Mead Algorithm."
        },
        { 
          title: "UNIT - II",
          desc: "Interpolation: Assumptions for interpolation, errors in polynomial interpolation, Finite differences, Gregory-Newton's Forward Interpolation, Gregory-Newton's backward Interpolation, Lagrange's Interpolation, Newton's divided difference interpolation, Numerical Integration: Definite Integral, Newton-Cote's Quadrature formula, Trapezoidal Rule, Simpson's one-third rule, Simpson's three-eight rule, Errors in quadrature formulae, Romberg's Algorithm, Gaussian Quadrature formula."
        },
        { 
          title: "UNIT - III",
          desc: "System of Linear Algebraic Equations: Existence of solution, Gauss elimination method and its computational effort, concept of Pivoting, Gauss Jordan method and its computational effort, Triangular Matrix factorization methods: Dolittle algorithm, Crout's Algorithm, Cholesky method, Eigen value problem: Power method, Approximation by Spline Function: First-Degree and second degree Splines, Natural Cubic Splines, B Splines, Interpolation and Approximation"
        },
        { 
          title: "UNIT - IV",
          desc: "Numerical solution of ordinary Differential Equations: Picard's method, Taylor series method, Euler's and Runge-Kutta's methods, Predictor-corrector methods: Euler's method, Adams-Bashforth method, Milne's method, Numerical Solution of Partial Differential equations: Parabolic, Hyperbolic, and elliptic equations, Implementation to be done in C/C++"
        }
      ],
      "Digital Logic and Circuit Design": [
        {
          title: "UNIT - I",
          desc: "Boolean Algebra and Combinational Logic: Review of number systems, signed, unsigned, fixed point, floating point numbers, Binary Codes, Boolean algebra – basic postulates, theorems, Simplification of Boolean function using Karnaugh map and Quine-McCluskey method – Implementations of combinational logic functions using gates, Adders, Subtractors, Magnitude comparator, encoder and decoders, multiplexers, code converters, parity generator/checker, implementation of combinational circuits using multiplexers."
        },
        {
          title: "UNIT - II",
          desc: "Sequential Circuits: General model of sequential circuits, Flip-flops, latches, level triggering, edge triggering, master slave configuration, concept of state diagram, state table, state reduction procedures, Design of synchronous sequential circuits, up/down and modulus counters, shift registers, Ring counter, Johnson counter, timing diagram, serial adder, sequence detector, Programmable Logic Array (PLA), Programmable Array Logic (PAL), Memory Unit, Random Access Memory"
        },
        {
          title: "UNIT - III",
          desc: "Basic Computer organization: Stored Program Organization, Computer registers, bus system, instruction set completeness, instruction cycle, Register Transfer Language, Arithmetic, Logic and Shift Micro-operations, Instruction Codes, Design of a simple computer, Design of Arithmetic Logic unit, shifter, Design of a simple hardwired control unit, Programming the basic computer, Machine language instructions, assembly language, Microprogrammed control, Horizontal and Vertical Microprogramming, Central Processing Unit, instruction sets and formats, addressing modes, data paths, RISC and CISC characteristics."
        },
        {
          title: "UNIT - IV",
          desc: "Computer Arithmetic, addition, subtraction, multiplication and division algorithms, Input-Output Organization, Modes of data transfer, Interrupt cycle, direct memory access, Input-Output processor, Memory Organization, Memory Hierarchy, Associative Memory, Cache Memory, Internal and external Memory, Virtual Memory."
        }
      ],
      "Discrete Mathematics": [
        {
          title: "UNIT - I",
          desc: "Sets, Logic, and Relation: Sets, Subsets, powerset, operations on sets, Propositional Logic, Rules of inferences in propositional logic, Quantifiers, Predicates and validity, Predicate Logic, normal forms, Proof Techniques- Direct Proof, Proof by Contraposition, and proof by contradiction, Principle of inclusion and exclusion, pigeonhole principle, permutation and combination, Principle of Well Ordering, principle of mathematical induction, principle of complete induction, Relation, properties of binary relation, equivalence relation and class, closures (symmetric, reflexive, and transitive)."
        },
        {
          title: "UNIT - II",
          desc: "Functions, Order relations and Boolean Algebra: Functions, Growth of functions, Permutation functions, Partially ordered sets, lattices, Boolean algebra, Minimization of Boolean Expressions, GCD, LCM, prime numbers, Recurrence relations, solution methods for linear, first-order recurrence relations with constant coefficients, generating functions, Analysis of Algorithms involving recurrence relations, solution method for a divide-and-conquer recurrence relation, Masters theorem (with proof)."
        },
        {
          title: "UNIT - III",
          desc: "Group theory: Semi-group, Monoid, Groups, Group identity and uniqueness, inverse and its uniqueness, isomorphism and homomorphism, subgroups, Cosets and Lagrange’s theorem, Permutation group and Cayley’s theorem (without proof), Normal subgroup and quotient groups, Groups and Coding."
        },
        {
          title: "UNIT - IV",
          desc: "Graph theory: Graph Terminology, Planar graphs, Euler’s formula (proof), Euler and Hamiltonian path/circuit, Chromatic number of a graph, five color theorem (proof), Shortest path and minimal spanning trees and algorithms, Depth-first and breadth first search, trees associated with DFS & BFS, Connected components, Complexity Analysis of the graph MST."
        }
      ],
      "Data Structures": [
        {
          title: "UNIT - I",
          desc: "Overview of data structure, Basics of Algorithm Analysis including Running Time Calculations, Abstract Data Types, Arrays, Arrays and Pointers, Multidimensional Array, String processing, General Lists and List ADT, List manipulations, Single, double and circular lists, Stacks and Stack ADT, Stack Manipulation, Prefix, infix and postfix expressions, recursion, Queues and Queue ADT, Queue manipulation."
        },
        {
          title: "UNIT - II",
          desc: "Sparse Matrix Representation (Array and Link List representation) and arithmetic (addition, subtraction and multiplication), polynomials and polynomial arithmetic, Trees, Properties of Trees, Binary trees, Binary Tree traversal, Tree manipulation algorithms, Expression trees and their usage, binary search trees, AVL Trees, Heaps and their implementation, Priority Queues, B-Trees, B* Tree, B+ Tree"
        },
        {
          title: "UNIT - III",
          desc: "Sorting concept, order, stability, Selection sorts (straight, heap), insertion sort (Straight Insertion, Shell sort), Exchange Sort (Bubble, quicksort), Merge sort (External Sorting) (Natural merge, balanced merge and polyphase merge), Searching – List search, sequential search, binary search, hashing methods, collision resolution in hashing"
        },
        {
          title: "UNIT - IV",
          desc: "Disjoint sets representation, union find algorithm, Graphs, Graph representation, Graph Traversals and their implementations (BFS and DFS), Minimum Spanning Tree algorithms, Shortest Path Algorithms"
        }
      ],
      "Indian Knowledge System": [
        {
          title: "UNIT - I",
          desc: "Indian Knowledge System (IKS) - An Introduction: Overview of IKS - Importance of Ancient Knowledge; Defining IKS; The IKS Corpus – A Classification Framework; Chaturdaśa-Vidyāsthāna; History of IKS, Some unique aspects of IKS; The Vedic Corpus – Introduction to Vedas; The Four Vedas and their divisions; Vedāngas; Vedic Life; Philosophical Systems – Indian Philosophical Systems; Vedic Schools of Philosophy; Non-Vedic Philosophical Systems; Wisdom through the Ages – Purānas, Itihāsa as source of wisdom, Rāmāyana, Mahābhārata, Niti-śāstras, Subhāssitas."
        },
        {
          title: "UNIT - II",
          desc: "Foundational Concepts for Science and Technology: Linguistics - Components of Language; Pānini’s work on Sanskrit Grammar; Phonetics in Sanskrit; Patterns in Sanskrit Vocabulary; Computational Concepts in Astādhyāyi, Logic for Sentence Construction; Importance of Verbs; Role of Sanskrit in Natural Language Processing, Number System and Units of Measurement – Number System in India; Salient Features of the Indian Numeral System; Unique approaches to represent numbers; Measurements for Time, Distance and Weight; Pingala and the Binary System, Knowledge: Framework and Classification – The Knowledge Triangle; Prameya; Pramāna; Samśaya; Framework for establishing Valid Knowledge"
        },
        {
          title: "UNIT - III",
          desc: "Mathematic and Astronomy in IKS: Mathematics – Unique aspects of Indian Mathematics; Great Mathematicians and their Contributions; Arithmetic; Geometry; Trigonometry; Algebra; Binary Mathematics and Combinatorial Problems in Chandah-śāstra of Pingala, Magic Squares in India, Astronomy - Unique aspects of Indian Astronomy; Historical Development of Astronomy in India; The Celestial Coordinate System; Elements of the Indian Calendar; Āryabhatiya and the Siddhāntic Tradition; Pancānga; Astronomical Instruments; Jantar Mantar of Rājā Jai Singh Sawai"
        },
        {
          title: "UNIT - IV",
          desc: "Engineering and Technology in IKS: Engineering and Technology: Metals and Metalworking – The Indian S & T Heritage; Mining and Ore Extraction; Metals and Metalworking Technology; Iron and Steel in India; Lost wax casting of Idols and Artefacts; Apparatuses used for Extraction of Metallic Components, Engineering and Technology: Other Applications – Literary sources for Science and Technology; Physical Structures in India; Irrigation and Water Management; Dyes and Painting Technology; Surgical Techniques; Shipbuilding; Sixty-four Art Forums; Status of Indigenous S & T"
        }
      ],
      "Object Oriented Programming": [
        {
          title: "UNIT - I",
          desc: "Object Oriented Programming Paradigm, Basic Concepts of Object Oriented Programming, Benefits of Object Oriented Programming, Object Oriented Languages, Applications of Object Oriented Programming, C++ Programming Language, Tokens, Keywords, Identifiers and Constants, Data Types, Type Compatibility, Variables, Operators in C++, Implicit Type Conversions, Operator Precedence, The Main Function, Function Prototyping, Call by Reference, Return by Reference, Inline Functions, Function Overloading, Friend Functions, default parameter value."
        },
        {
          title: "UNIT - II",
          desc: "Specifying a class, Member Functions, Encapsulation, information hiding, abstract data types, objects & classes, Static Member Functions, Arrays of Objects, Constructors & Destructors, Parameterized Constructors, Copy Constructors, Dynamic Constructors, Destructors, identity and behaviour of an object, C++ garbage collection, dynamic memory allocation, Explicit Type Conversions, Operator Overloading."
        },
        {
          title: "UNIT - III",
          desc: "Inheritance, inheritance methods, Class hierarchy, derivation – public, private & protected, aggregation, Inheritance Constructors, composition vs. classification hierarchies, Containership, Initialization List, Polymorphism, categorization of polymorphic techniques, polymorphism by parameter, parametric polymorphism, generic function – template function, function overriding, run time polymorphism, virtual functions."
        },
        {
          title: "UNIT - IV",
          desc: "Standard C++ classes, using multiple inheritance, persistant objects, streams and files, namespaces, exception handling, generic classes, standard template library: Library organization and containers, standard containers, algorithm and Function objects, iterators and allocators, strings, streams, manipulators, user defined manipulators, vectors."
        }
      ]
    }
  };

  const { subjects, units } = semesterData;
  const subjectUnits = units[selectedSubject] || [];

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="bg-[#f1436c] py-6 text-white text-center text-4xl font-bold">
        CSE - 3rd Semester
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