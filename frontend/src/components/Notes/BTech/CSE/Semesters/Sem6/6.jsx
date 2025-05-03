import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function Semester6() {
  const [selectedSubject, setSelectedSubject] = useState("Advanced Java Programming");
  const [activeTab, setActiveTab] = useState("Syllabus");
  const { semesterId } = useParams();

  const semesterData = {
    subjects: [
      "Advanced Java Programming",
      "Artificial Intelligence",
      "Introduction to Digital Signal Processing",
      "Introduction to Internet of Things",
      "Programming in Python",
      "Principles of Management for Engineers",
      "Software Measurements, Metrics and Modelling",
      "Software Project Management",
      "Statistics, Statistical Modelling & Data Analytics",
      "Universal Human Values",
      "Visual Basic.NET Programming",
      "Web Technologies"
    ],
    units: {
      "Advanced Java Programming": [
        { 
          title: "UNIT - I",
          desc: "Introduction to Java, Inheritance, Exception Handling, Multithreading, Applet Programming, Connecting to a Server, Implementing Servers, Making URL Connections, Socket Programming"
        },
        { 
          title: "UNIT - II",
          desc: "Preparing a Class to be a Java Bean, Creating a Java Bean, Java Bean Properties, Types of beans, Stateful Session bean, Stateless Session bean, Entity bean, Servlet Overview and Architecture, Interface Servlet and the Servlet LifeCycle, Handling HTTP GET Requests, Handling HTTP POST Requests, Session Tracking, Cookies"
        },
        { 
          title: "UNIT - III",
          desc: "JSP: Introduction, Java Server Pages Overview, Implicit Objects, Scripting, Standard Actions, Directives, Custom Tag Libraries"
        },
        { 
          title: "UNIT - IV",
          desc: "The Roles of Client and Server, Remote Method Invocations, Setup for Remote Method Invocation, Parameter Passing in Remote Methods, Introduction of HB, HB Architecture"
        }
      ],
      "Artificial Intelligence": [
        {
          title: "UNIT - I",
          desc: "AI Definition, Problems, Techniques, Models, Defining Problem as a state space search, production system, Characteristics, Search methods and issues in the design of search problems."
        },
        {
          title: "UNIT - II",
          desc: "Knowledge representation issues, mapping, frame problem, Predicate logic, facts in logic, representing instance and Isa relationship, Resolution, procedural and declarative knowledge, matching, control knowledge, Symbolic reasoning under uncertainty, Non monotonic reasoning, statistical reasoning."
        },
        {
          title: "UNIT - III",
          desc: "Game Playing, minimax search, Alfa beta cut-offs, Natural Language Processing, Learning, Explanation-based learning, discovery, analogy, Neural net learning and Genetic Learning."
        },
        {
          title: "UNIT - IV",
          desc: "Fuzzy logic systems, Perception and action, Expert systems, Inference in Bayesian Networks, K-means Clustering Algorithm, Machine learning."
        }
      ],
      "Introduction to Digital Signal Processing": [
        {
          title: "UNIT - I",
          desc: "Review of Discrete Time Fourier Transform, Z-transform and Discrete Fourier Transform, Properties of the DFT: Periodicity, Linearity and Symmetry properties, Multiplication of two DFTs, concept of circular convolution, computation of circular convolution by graphical and matrix form, relationship between linear convolution and circular convolution, computation of linear convolution from circular convolution, linear filtering using DFT, aliasing error, filtering of long data sequences – Overlap-Save and Overlap-Add methods, Efficient computation of the DFT: Complexity analysis of direct computation of DFT, Concept of Fast Fourier transformation, Radix-2 computation of FFT using decimation-in-time and decimation-in-frequency algorithms, signal flow graphs, Butterflies, computations of FFT in one place using both algorithms, bit-reversal process, examples for DIT & DIF FFT Butterfly computations."
        },
        {
          title: "UNIT - II",
          desc: "Design & structure of FIR filters: Characteristics of practical frequency-selective filters, Basic concepts of IIR and FIR filters, Gibbs Phenomenon, Symmetric and Anti-symmetric FIR filters, Design of Linear-phase FIR filters using windows- Rectangular, Hamming, Hanning, Bartlett windows, FIR differentiator, FIR Hilbert Transformer. Design of FIR filters using frequency sampling method. Structure for FIR Systems: Direct form, Cascade form and Lattice structures."
        },
        {
          title: "UNIT - III",
          desc: "Design & Structure of IIR filters: Concept of IIR digital filter, recursive and non-recursive system-analog to digital domain transformation- Approximation of derivatives, impulse-invariant method and bilinear transformation and their properties, limitations of bilinear transformation, frequency warping and prewarping, methods to find out the order of IIR filter, mapping of poles and zeroes of filter in analog domain, computation of filter transfer function in analog domain, digital filter realization techniques, procedure to design Butterworth and Chebyshev digital IIR filters. Direct, Cascade, Parallel, Signal Flow graph and transposed structure, Lattice structures, Lattice and Lattice-Ladder Structures, Schur-Cohn stability Test for IIR filters."
        },
        {
          title: "UNIT - IV",
          desc: "Quantization Errors in Digital Signal Processing: Fixed point and floating point representation of numbers, Errors resulting from Rounding and Truncation, Digital Quantization of filter coefficients, Round-off effects in digital filters, Dead Band Effects. Multirate Digital Signal Processing: Decimation, Interpolation, Sampling rate conversion by a rational factor; Frequency domain characterization of Interpolator and Decimator; Polyphase decomposition, Applications of Multirate signal processing."
        }
      ],
      "Introduction to Internet of Things": [
        {
          title: "UNIT - I",
          desc: "Internet of Things (IoT): Vision, Definition, Conceptual Framework, Architectural view, technology behind IoT, Sources of the IoT, M2M Communication, IoT Examples, Design Principles for Connected Devices: IoT/M2M systems layers and design standardization, communication technologies, data enrichment and consolidation, ease of designing and affordability"
        },
        {
          title: "UNIT - II",
          desc: "Hardware for IoT: Sensors, Digital sensors, actuators, radio frequency identification (RFID) technology, wireless sensor networks, participatory sensing technology, Embedded Platforms for IoT: Embedded computing basics, Overview of IOT supported Hardware platforms such as Arduino, NetArduino, Raspberry pi, Beagle Bone, Intel Galileo boards and ARM cortex"
        },
        {
          title: "UNIT - III",
          desc: "Network & Communication aspects in IoT: Wireless Medium access issues, MAC protocol survey, Survey routing protocols, Sensor deployment & Node discovery, Data aggregation & dissemination"
        },
        {
          title: "UNIT - IV",
          desc: "Programming the Arduino: Arduino Platform Boards Anatomy, Arduino IDE, coding, using emulator, using libraries, additions in Arduino, programming the Arduino for IoT"
        }
      ],
      "Programming in Python": [
        {
          title: "UNIT - I",
          desc: "Introduction, Python Basics: Entering Expressions into the Interactive Shell, The Integer, Floating-Point, and String Data Types, String Concatenation and Replication, Storing Values in Variables, Your First Program, Dissecting Your Program. Flow control: Boolean Values, Comparison Operators, Boolean Operators, Mixing Boolean and Comparison Operators, Elements of Flow Control, Program Execution, Flow Control Statements, Importing Modules, Ending a Program Early with sys.exit()"
        },
        {
          title: "UNIT - II",
          desc: "Functions: def Statements with Parameters, Return Values and return Statements, The None Value, Keyword Arguments and print(), Local and Global Scope, The global Statement, Exception Handling. Lists: The List Data Type, Working with Lists, Augmented Assignment Operators, Methods. Dictionaries and Structuring Data: The Dictionary Data Type, Pretty Printing, Using Data Structures to Model Real-World Things. Manipulating Strings - Working with Strings, Useful String Methods"
        },
        {
          title: "UNIT - III",
          desc: "Reading and Writing Files: Files and File Paths, The os.path Module, The File Reading/Writing Process, Saving Variables with the shelve Module, Saving Variables with the pprint.pformat() Function. Organizing Files: The shutil Module, Walking a Directory Tree, Compressing Files with the zipfile Module"
        },
        {
          title: "UNIT - IV",
          desc: "Web Scraping: Project: MAPIT.PY with the web browser Module, Downloading Files from the Web with the requests Module, Saving Downloaded Files to the Hard Drive, HTML"
        }
      ],
      "Principles of Management for Engineers": [
        {
          title: "UNIT - I",
          desc: "Introduction to Managers and Management: Management an Overview, Definition of Management, Role of Management, Functions of Managers, Levels of Management, Management Skills and Organizational Hierarchy, Social and Ethical Responsibilities of Management: Arguments for and against Social Responsibilities of Business, Social Stakeholders, Measuring Social Responsiveness and Managerial Ethics, Omnipotent and Symbolic View, Characteristics and importance of organizational culture, Relevance of political, legal, economic and Cultural environments to global business, Structures and techniques organizations use as they go international."
        },
        {
          title: "UNIT - II",
          desc: "Planning: Nature & Purpose, Steps involved in Planning, Objectives, Setting Objectives, Process of Managing by Objectives, Strategies, Policies & Planning Premises, Competitor Intelligence, Benchmarking, Forecasting, Decision-Making, Directing: Scope, Human Factors, Creativity and Innovation, Harmonizing Objectives, Leadership, Types of Leadership, Directing, Managers as leaders, Early Leadership Theories…Trait Theories, Behavioral Theories, Managerial Grid, Contingency Theories of Leadership, Directing ...PathGoal Theory, contemporary views of Leadership, CrossCultural Leadership, Leadership Training, Substitutes of Leadership."
        },
        {
          title: "UNIT - III",
          desc: "Organizing: Organizing, Benefits and Limitations-De-Centralization and Delegation of Authority, Authority versus Power, Mechanistic Versus Organic Organization, Common Organizational Designs, Contemporary Organizational Designs and Contingency Factors, The Learning Organization Nature and Purpose, Formal and Informal Organization, Organization Chart, Structure and Process, Departmentalization by difference strategies, Line and Staff authority- Benefits and Limitations-De-Centralization and Delegation of Authority Versus, Staffing, Human Resource Inventory, Job Analysis, Job Description, Recruitment and."
        },
        {
          title: "UNIT - IV",
          desc: "Controlling: Controlling, Introduction to Controlling System and process of Controlling, Requirements for effective control, The planning Control link, The process of control, types of control The Budget as Control Technique, Information Technology in Controlling, Productivity, Problems and Management, Control of Overall Performance, Direct and Preventive Control, Financial Controls, Tools for measuring organizational Performance, Contemporary issues in control Workplace concerns, employee theft, employee violence."
        }
      ],
      "Software Measurements, Metrics and Modelling": [
        {
          title: "UNIT - I",
          desc: "Fundamentals of Measurement: Measurement: what is it and why do it?, Measurement in Software Engineering, Scope of Software Metrics, The Basics of measurement: The representational theory of measurement, Measurement and models, Measurement scales and scale types, meaningfulness in measurement"
        },
        {
          title: "UNIT - II",
          desc: "A Goal-Based Framework For Software Measurement: Classifying software measures, Determining what to Measure, Applying the framework, Software measurement validation, Performing Software Measurement validation, Empirical investigation: Principles of Empirical Studies, Planning Experiments, Planning case studies as quasi-experiments, Relevant and Meaningful Studies"
        },
        {
          title: "UNIT - III",
          desc: "Software Metrics Data Collection: Defining good data, Data collection for incident reports, How to collect data, Reliability of data collection Procedures, Analyzing software measurement data: Statistical distributions and hypothesis testing, Classical data analysis techniques, Examples of simple analysis techniques, Measuring internal product attributes: Size Properties of Software Size, Code size, Design size, Requirements analysis and Specification size, Functional size measures and estimators, Applications of size measures"
        },
        {
          title: "UNIT - IV",
          desc: "Measuring internal product attributes: Structure: Aspects of Structural Measures, Control flow structure of program units, Design-level Attributes, Object-oriented Structural attributes and measures, Measuring External Product Attributes: Modelling software quality, Measuring aspects of quality, Usability Measures, Maintainability measures, Security Measures, Software Reliability: Measurement and Prediction: Basics of reliability theory, The software reliability problem, Parametric reliability growth models, Predictive accuracy"
        }
      ],
      "Software Project Management": [
        {
          title: "UNIT - I",
          desc: "Introduction to Software Project Management: The Nature of Software Production, Key Objectives of Effective Management, Quality, Productivity, Risk Reduction, The Role of the Software Project Manager, Technology, Human factors and usability, Tools and environments, Transition of the Product to the user."
        },
        {
          title: "UNIT - II",
          desc: "Technical Planning: Life-cycle models, Types of Plans, Plan documentation methods, Work breakdown structures, PERT and CPM, Gantt Charts, Standards, Planning for Risk Management and Control, Entry and Exit criteria, Intermediate checkpoints, Performance prediction and analysis People, Prototyping and modelling, Inspections and reviews, Process and process assessment, Development Methods, Metrics"
        },
        {
          title: "UNIT - III",
          desc: "Planning the Project: Business Planning, Determining Objectives, Forecasting demand for the Product, Proposal Writing, Requirements analysis, Legal issues (patent, copyright, liability, warranty), Configuration management, Testing and quality assurance, Capacity Planning, Estimating – what it takes to do the job, Cost (direct and indirect), Resources, Time, Size and complexity of the product, Risk determination, Role of requirements and design in estimating, Financial planning – budgeting, Resource Allocation, Organizational considerations (teams, hierarchies, etc.)."
        },
        {
          title: "UNIT - IV",
          desc: "Managing the Project: Managing the Task, Project Control, Managing to the Plan, Reviews, Feedback and Reporting Mechanisms, Configuration Management, Quality Control and Quality Assurance, Managing Change, Readjusting Goals and Milestones, Risk Management, Testing Phases, Formalized Support Activities, Managing the Team, Team Organizations, Recruiting and Staffing – picking the right people, Technical leadership, Avoiding obsolescence – training, etc., Managing the Context, Communication Skill, Decision Theory, Business Management, Assessing the Organization's ability to perform the process, Probability and Statistics, Managing Product Support and Maintenance."
        }
      ],
      "Statistics, Statistical Modelling & Data Analytics": [
        {
          title: "UNIT - I",
          desc: "Statistics: Introduction & Descriptive Statistics- mean, median, mode, variance, and standard deviation. Data Visualization, Introduction to Probability Distributions. Hypothesis testing, Linear Algebra and Population Statistics, Mathematical Methods and Probability Theory, Sampling Distributions and Statistical Inference, Quantitative analysis."
        },
        {
          title: "UNIT - II",
          desc: "Statistical Modelling: Linear models, regression analysis, analysis of variance, applications in various fields. Gauss-Markov theorem; geometry of least squares, subspace formulation of linear models, orthogonal projections; regression models, factorial experiments, analysis of covariance and model formulae; regression diagnostics, residuals, influence diagnostics, transformations, Box-Cox models, model selection and model building strategies, logistic regression models; Poisson regression models."
        },
        {
          title: "UNIT - III",
          desc: "Data Analytics: Describe classes of open and closed set. Apply the concept of compactness. Describe Metric space - Metric in Rn. Use the concept of Cauchy sequence, completeness, compactness and connectedness to solve the problems."
        },
        {
          title: "UNIT - IV",
          desc: "Advanced concepts in Data Analytics: Describe vector space, subspaces, independence of vectors, basis and dimension. Describe Eigen values, Eigen vectors and related results."
        }
      ],
      "Universal Human Values": [
        {
          title: "UNIT - I",
          desc: "Introduction-Basic Human Aspiration, its fulfillment through All-encompassing Resolution. The basic human aspirations and their fulfillment through Right understanding and Resolution, Right understanding and Resolution as the activities of the Self, Self being central to Human Existence; All-encompassing Resolution for a Human Being, its details and solution of problems in the light of Resolution."
        },
        {
          title: "UNIT - II",
          desc: "Understanding Human Being. Understanding the human being comprehensively as the first step and the core theme of this course; human being as co-existence of the self and the body; the activities and potentialities of the self; Basis for harmony/contradiction in the self."
        },
        {
          title: "UNIT - III",
          desc: "Understanding Nature and Existence. A comprehensive understanding (knowledge) about the existence, Nature being included; the need and process of inner evolution (through self-exploration, self-awareness and self-evaluation), particularly awakening to activities of the Self: Realization, Understanding and Contemplation in the Self (Realization of Co-Existence, Understanding of Harmony in Nature and Contemplation of Participation of Human in this harmony/order leading to comprehensive knowledge about the existence)."
        },
        {
          title: "UNIT - IV",
          desc: "Understanding Human Conduct, All-encompassing Resolution & Holistic Way of Living. Understanding Human Conduct, different aspects of All-encompassing Resolution (understanding, wisdom, science etc.), Holistic way of living for Human Being with All-encompassing Resolution covering all four dimensions of human endeavor viz., realization, thought, behavior and work (participation in the larger order) leading to harmony at all levels from Self to Nature and entire Existence."
        }
      ],
      "Visual Basic.NET Programming": [
        {
          title: "UNIT - I",
          desc: "Overview of VB.NET and its history, Features and benefits of VB.NET, Introduction to .NET framework architecture and common language runtime (CLR), Setting up the development environment (Visual Studio), Basic syntax and structure of a VB.NET program, Use of namespaces"
        },
        {
          title: "UNIT - II",
          desc: "Variables and data types, Operators and expressions, Control structures: decision-making statements and loops, Working with arrays and strings, Exception handling in VB.NET, Working with files and directories, Basic understanding of LINQ"
        },
        {
          title: "UNIT - III",
          desc: "Understanding the basics of object-oriented programming (OOP), Creating classes and objects in VB.NET, Inheritance and polymorphism, Encapsulation and abstraction, Working with interfaces and abstract classes, Delegates and events"
        },
        {
          title: "UNIT - IV",
          desc: "Working with databases using ADO.NET, Multi-threading concepts and working with threads, Working with XML documents using XML DOM and XML serialization, The basics of web programming with ASP.NET, Understanding the basics of WPF and Windows Forms for desktop application development, Overview of .NET Core and its features"
        }
      ],
      "Web Technologies": [
        {
          title: "UNIT - I",
          desc: "HTML: Basic Syntax, Standard HTML Document Structure, Basic Text Markup, Html styles, Elements, Attributes, Heading, Layouts, I frames Images, Hypertext Links, Lists, Tables, Forms, Dynamic HTML. CSS: Need for CSS, introduction to CSS, basic syntax and structure, using CSS, background images, colors, and properties, manipulating texts, using fonts, borders, boxes, margins, padding lists, positioning using CSS, CSS2, The Box Model, Working with XML: Document Type Definition (DTD), XML schemas, Document object model, Parsers -DOM, and SAX. Introduction to XHTML: XML, Meta tags, Character entities, frames, and frame sets."
        },
        {
          title: "UNIT - II",
          desc: "JavaScript - Client-side scripting, Introduction to JavaScript, Objects, Primitives Operations and Expressions, Control Statements, Arrays, Functions, Constructors, JavaScript, and objects, JavaScript own objects, the DOM and web browser environments, forms and validations. Introduction to JSP: The Anatomy of a JSP Page, JSP Processing, Declarations, Directives, Expressions, Code Snippets, implicit objects, Using Beans in JSP Pages, Using Cookies and session for session tracking, connecting to database in JSP."
        },
        {
          title: "UNIT - III",
          desc: "Introduction to Server-Side Development with PHP, what is Server-Side Development, A Web Server's Responsibilities, Quick Tour of PHP, Introduction and basic syntax of PHP, decision and looping with examples, PHP and HTML, Arrays, Functions, Browser control and detection, string, Form processing, Files, Advance Features: Cookies and Sessions."
        },
        {
          title: "UNIT - IV",
          desc: "PHP and MySQL: Basic commands with PHP examples, Connection to the server, creating a database, selecting a database, listing database, listing table names, creating a table, inserting data, altering tables, queries, deleting the database, deleting data, and tables, PHP my admin and database bugs. Managing State, The Problem of State in Web Applications, Passing Information via Query Strings, Passing Information via the URL Path, Cookies, Serialization, Session State."
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
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-800 to-purple-800 py-6 px-6 shadow-lg relative overflow-hidden rounded-lg">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full mix-blend-overlay filter blur-xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full mix-blend-overlay filter blur-xl"></div>
        </div>
        <h1 className="text-3xl font-bold text-white text-center relative z-10">CSE - 6th Semester</h1>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mt-6 space-x-2 px-4">
        {["Syllabus", "Practical", "Notes", "Videos", "PYQs", "Books"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              activeTab === tab
                ? "bg-indigo-600 text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex justify-center">
          <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg p-6 rounded-2xl shadow-xl z-10 w-full max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Subject Sidebar */}
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

              {/* Content Display Area */}
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