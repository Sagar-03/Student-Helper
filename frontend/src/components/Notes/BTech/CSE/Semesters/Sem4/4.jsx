import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function Semester4() {
  const [selectedSubject, setSelectedSubject] = useState("Circuits and Systems");
  const [activeTab, setActiveTab] = useState("Syllabus");
  const { semesterId } = useParams();

  const semesterData = {
    subjects: [
      "Circuits and Systems",
      "Database Management System",
      "Programming in Java",
      "Probability Statistics and Linear Programming",
      "Theory of Computation",
      "Technical Writing"
    ],
    units: {
      "Circuits and Systems": [
        { 
          title: "UNIT - I",
          desc: "Signals, Classification of Signals, Systems, Classification of Systems, Linear Time Invariant (LTI) Systems; Laplace Transform, z-Transform, Fourier Series and Transform (Continuous and Discrete) and their properties. Laplace Transform and Continuous Time LTI systems, z-Transform and Discrete Time LTI systems, Fourier analysis of signals and systems, State Space Analysis."
        },
        { 
          title: "UNIT - II",
          desc: "System modeling in terms of differential equations and transient response of R, L, C, series and parallel circuits for impulse, step, ramp, sinusoidal and exponential signals by classical method and using Laplace transform."
        },
        { 
          title: "UNIT - III",
          desc: "AC Circuits: Circuits containing Capacitors and Inductors, Transient Response, Alternating Current and Voltages, Phasors, Impedances and Admittance, Mesh Analysis, Loop Analysis, Nodal Analysis, Thevenin’s and Norton’s Theorem, Y - D and D- Y Transformation, Bridge Circuits, Resonant Circuits, Complex Frequency and Network Function, Two port Networks, Passive Filters."
        },
        { 
          title: "UNIT - IV",
          desc: "Graph theory: concept of tree, tie set matrix, cut set matrix and application to solve electric networks, Two port networks – Introduction of two port parameters and their interconversion, interconnection of two 2-port networks, open circuit and short circuit impedances and ABCD constants, relation between image impedances and short circuit and open circuit impedances, Network functions, their properties and concept of transform impedance, Hurwitz polynomial."
        }
      ],
      "Database Management System": [
        {
          title: "UNIT - I",
          desc: "Basic concepts: database & database users, characteristics of the database systems, concepts and architecture, data models, schemas & instances, DBMS architecture & data independence, database languages & interfaces, data modelling using the entity-relationship approach. Enhanced ER concepts - Specialization/Generalization, Aggregation, Mapping of ER model to Relational Model. SQL – DDL, DCL & DML views and indexes in SQL. Basics of SQL, DDL, DML, DCL, structure – creation, alteration, defining constraints – Primary key, foreign key, unique, not null, check, IN operator."
        },
        {
          title: "UNIT - II",
          desc: "Relational model concepts, relational model constraints, relational algebra, relational calculus. SQL – Functions - aggregate functions, Built-in functions – numeric, date, string functions, set operations, sub-queries, correlated sub-queries, Use of group by, having, order by, join and its types, Exist, Any, All, view and its types. Transaction control commands – Commit, Rollback, Save point."
        },
        {
          title: "UNIT - III",
          desc: "Relational database design: functional dependencies & normalization for relational databases, normal forms based on functional dependencies, (1NF, 2NF, 3NF & BCNF), lossless join and dependency preserving decomposition, normal forms based on multivalued & join dependencies (4NF & 5NF) & domain key normal form Properties of Transaction, Transaction states, Transaction Schedule, Serializability, Concurrency control techniques, locking techniques, time stamp ordering, Recoverable schedules, granularity of data items, Deadlock detection and Recovery, recovery techniques: recovery concepts, database backup and recovery from catastrophic failures. Database Programming – control structures, exception handling, stored procedures, Triggers."
        },
        {
          title: "UNIT - IV",
          desc: "File Structures and Indexing: Secondary Storage Devices, Operations on Files, Heap Files, Sorted Files, Hashing, Single level indexes, Multi-level indexes, B and B+ tree indexes. Concepts of Object Oriented Database Management systems & Distributed Database Management Systems"
        }
      ],
      "Programming in Java": [
        {
          title: "UNIT - I",
          desc: "Overview and characteristics of Java, Java program Compilation and Execution Process Organization of the Java Virtual Machine, JVM as an interpreter and emulator, Instruction Set, class File Format, Verification, Class Area, Java Stack, Heap, Garbage Collection. Security Promises of the JVM, Security Architecture and Security Policy. Class loaders and security aspects, sandbox model"
        },
        {
          title: "UNIT - II",
          desc: "Java Fundamentals, Data Types & Literals Variables, Wrapper Classes, Arrays, Arithmetic Operators, Logical Operators, Control of Flow, Classes and Instances, Class Member Modifiers Anonymous Inner Class Interfaces and Abstract Classes, inheritance, throw and throws clauses, user defined Exceptions, The String Buffer Class, tokenizer, applets, Life cycle of applet and Security concerns."
        },
        {
          title: "UNIT - III",
          desc: "Threads: Creating Threads, Thread Priority, Blocked States, Extending Thread Class, Runnable Interface, Starting Threads, Thread Synchronization, Synchronize Threads, Sync Code Block, Overriding Synced Methods, Thread Communication, wait, notify and notify all. AWT Components, Component Class, Container Class, Layout Manager Interface Default Layouts, Insets and Dimensions, Border Layout, Flow Layout, Grid Layout, Card Layout Grid Bag Layout AWT Events, Event Models, Listeners, Class Listener, Adapters, Action Event Methods Focus Event Key Event, Mouse Events, Window Event"
        },
        {
          title: "UNIT - IV",
          desc: "Input/Output Stream, Stream Filters, Buffered Streams, Data input and Output Stream, Print Stream Random Access File, JDBC (Database connectivity with MS-Access, Oracle, MS-SQL Server), Object serialization, Sockets, development of client Server applications, design of multithreaded server. Remote Method invocation, Java Native interfaces, Development of a JNI based application. Collection API Interfaces, Vector, stack, Hashtable classes, enumerations, set, List, Map, Iterators."
        }
      ],
      "Probability Statistics and Linear Programming": [
        {
          title: "UNIT - I",
          desc: "Basics: Probability and Statistical models, Sample Spaces and Events, Counting Techniques, Interpretations and Axioms of Probability, Unions of Events and Addition Rules, Conditional Probability, Intersections of Events and Multiplication and Total Probability Rules, Independence, Bayes’ Theorem, Random Variables. Discrete and Continuous Random Variables and Distributions: Probability Distributions and Probability Mass / density Functions, Cumulative Distribution Functions, Mean and Variance of a Random Variable, Discrete and continuous Uniform Distribution, Binomial Distribution, Geometric and Negative Binomial Distributions, Hypergeometric Distribution, Poisson Distribution. Normal Distribution, Normal Approximation to the Binomial, and Poisson Distributions; Exponential Distribution, Erlang and Gamma Distributions, Weibull Distribution, Lognormal Distribution, Beta Distribution."
        },
        {
          title: "UNIT - II",
          desc: "Joint Probability Distributions for Two Random Variables, Conditional Probability Distributions and Independence, Joint Probability Distributions for Two Random Variables, Covariance and Correlation, Common Joint Distributions, Linear Functions of RandomVariables, General Functions of Random Variables, Moment-Generating Functions. Numerical Summaries of Data, Stem-and-Leaf Diagrams, Frequency Distributions and Histograms, Box Plots, Time Sequence Plots, Scatter Diagrams, Probability Plots. Point Estimation, Sampling Distributions and the Central Limit Theorem without proof, General Concepts of Point Estimation, Methods of Point Estimation, Statistical Intervals for a Single Sample."
        },
        {
          title: "UNIT - III",
          desc: "Hypotheses Testing for a SingleSample: Tests on the Mean of a Normal Distribution with Variance Known / Unknown, Tests on the Variance and Standard Deviationof a Normal Distribution, Tests on a Population Proportion, Testing for Goodness of Fit, Nonparametric tests (Signed, Wilcoxon), Similarly Statistical Inference forTwo Samples. Regression and Correlation: Linear Regression, Least Squares Estimators, Hypotheses testing for simple linear regression, Confidence Intervals, Adequacy of model, Correlation, Transformed Variables, Logistic Regression. Similarly, for multiple linear regression including aspects of MLR."
        },
        {
          title: "UNIT - IV",
          desc: "Linear Programming: Introduction, formulation of problem, Graphical method, Canonical and Standard form of LPP, Simplex method, Duality concept, Dual simplex method, Transportation and Assignment problem."
        }
      ],
      "Theory of Computation": [
        {
          title: "UNIT - I",
          desc: "Automata and Language Theory: Chomsky Classification, Finite Automata, Deterministic Finite Automata (DFA), Non-Deterministic Finite Automata (NFA), Regular Expressions, Equivalence of DFAs, NFAs and Regular Expressions, Closure properties of Regular grammar, Non-Regular Languages, Pumping Lemma."
        },
        {
          title: "UNIT - II",
          desc: "Context Free Languages: Context Free Grammar (CFG), Parse Trees, Push Down Automata (deterministic and non-deterministic) (PDA), Equivalence of CFGs and PDAs, Closure properties of CFLs, Pumping Lemma, Parsing, LL(K) grammar."
        },
        {
          title: "UNIT - III",
          desc: "Turing Machines and Computability Theory: Definition, design and extensions of Turing Machine, Equivalence of various Turing Machine Formalisms, Church – Turing Thesis, Decidability, Halting Problem, Reducibility and its use in proving undecidability, Rice's theorem, Undecidability of Post's correspondence problem, Recursion Theorem."
        },
        {
          title: "UNIT - IV",
          desc: "Complexity Theory: The class P as consensus class of tractable sets, Classes NP, co-NP, Polynomial time reductions, NP-completeness, NP-hardness, Cook-Levin theorem (With proof), Space complexity, PSPACE and NPSPACE complexity classes, Savitch theorem (With proof), Probabilistic computation, BPP class, Interactive proof systems and IP class, relativized computation and oracles."
        }
      ],
      "Technical Writing": [
        {
          title: "UNIT - I",
          desc: "Grammar and Vocabulary--- Types of sentences (simple, complex and compound) and use of connectives in sentences, Subject-verb agreement, Comprehension, Synonyms and Antonyms, Homophones and Homonyms, Word Formation: Prefixes and Suffixes, Indianism, Misappropriation and Redundant Words, Question Tags and Short Responses."
        },
        {
          title: "UNIT - II",
          desc: "Writing Styles -- Expository, Explanatory, Descriptive, Argumentative and Narrative, Precis writing, Visual Aids in Technical Writing, Plagiarism and Language Sensitivity in Technical Writing, Dialogue Writing, Proposals: Purpose and Types."
        },
        {
          title: "UNIT - III",
          desc: "Letters at the Workplace—letter writing: Request, Sales, Enquiry, Order and Complaint, Job Application---Resume and Cover letter, Difference between Resume and CV, Preparation for Interview, Meeting Documentation--- Notice, Memorandum, Circular, Agenda, Office Order and Minutes of meeting, Writing Instructions."
        },
        {
          title: "UNIT - IV",
          desc: "Ethics and Personality Development-----The Role of Ethics in Business Communication—Ethical Principles, Time Management, Self-Analysis through SWOT and JOHARI Window, Emotional Intelligence and Leadership Skills, Team Building, Career Planning, Self Esteem."
        }
      ]
    }
  };

  // ... rest of the component remains same as previous semesters ...

  const { subjects, units } = semesterData;
  const subjectUnits = units[selectedSubject] || [];

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="bg-[#f1436c] py-6 text-white text-center text-4xl font-bold">
        CSE - 4th Semester
      </div>

      {/* Rest of the component remains identical to previous semesters */}
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