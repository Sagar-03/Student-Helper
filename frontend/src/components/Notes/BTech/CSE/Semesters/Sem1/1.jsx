import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Semester1() {
  const [selectedSubject, setSelectedSubject] = useState("Applied Physics 1");
  const [activeTab, setActiveTab] = useState("Syllabus");
  const { semesterId } = useParams();

  const semesterData = {
    subjects: [
      "Applied Physics 1",
      "Applied Mathematics 1",
      "Applied Chemistry",
      "Manufacturing Processes",
      "Communication Skills",
      "Engineering Graphics",
      "Engineering Mechanics",
      "Electrical Science",
      "Environmental Science",
      "Human Values and Professional Ethics",
      "Indian Constitution",
      "Programming in C"
    ],
    units: {
      "Applied Physics 1": [
        { 
          title: "UNIT - I",
          desc: "Introduction to Thermodynamics: Fundamental Ideas of Thermodynamics, The Continuum Model, The Concept of a 'System', 'State', 'Equilibrium', 'Process'. Equations of state, Heat, Zeroth Law of Thermodynamics, Work, first and second laws of thermodynamics, entropy"
        },
        { 
          title: "UNIT - II",
          desc: "Waves and Oscillations: Wave motion, simple harmonic motion, wave equation, superposition principle. Introduction to Electromagnetic Theory: Maxwell’s equations. work done by the electromagnetic field, Poynting’s theorem, Momentum, Angular momentum in electromagnetic fields, Electromagnetic waves: the wave equation, plane electromagnetic waves, energy carried by electromagnetic waves"
        },
        { 
          title: "UNIT - III",
          desc: "Interference: Interference by division of wave front (Young's double slit experiment, Fresnel's biprism), interference by division of amplitude (thin films, Newton's rings, Michelson's interferometer), Coherence and coherent sources, Diffraction: Fraunhofer and Fresnel diffraction; Fraunhofer diffraction for Single slit, double slit, and N-slit (diffraction grating), Fraunhofer diffraction from a circular aperture, resolving power and dispersive power of a grating, Rayleigh criterion, resolving power of optical instruments, Polarization: Introduction to polarization, Brewster’s law, Malu's law, Nicol prism, double refraction, quarter-wave and half-wave plates, optical activity, specific rotation, Laurent half shade polarimeter."
        },
        { 
          title: "UNIT - IV",
          desc: "Theory of relativity: The Michelson-Morley Experiment and the speed of light; Absolute and Inertial frames of reference, Galilean transformations, the postulates of the special theory of relativity, Lorentz transformations, time dilation, length contraction, velocity addition, mass energy equivalence. Invariance of Maxwell’s equations under Lorentz Transformation. Introduction to Laser Physics: Introduction, coherence, Einstein A and B coefficients, population inversion, basic principle and operation of a laser, the He-Ne laser and the Ruby laser"
        }
      ],
      "Applied Mathematics 1": [
        {
          title: "UNIT - I",
          desc: "Partial derivatives, Chain rule, Differentiation of Implicit functions, Exact differentials, Maxima, Minima and saddle points, Method of Lagrange multipliers, Differentiation under Integral sign, Jacobians and transformations of coordinates."
        },
        {
          title: "UNIT - II",
          desc: "Ordinary Differential Equations (ODEs): Basic Concepts, Geometric Meaning of y’= f(x, y), Direction Fields, Euler’s Method, Separable ODEs, Exact ODEs, Integrating Factors, Linear ODEs, Bernoulli Equation, Population Dynamics, Orthogonal Trajectories, Homogeneous Linear ODEs with Constant Coefficients, Differential Operators, Modeling of Free Oscillations of a Mass-Spring System, Euler–Cauchy Equations, Wronskian, Nonhomogeneous ODEs, Solution by Variation of Parameters, Power Series Method for solution of ODEs, Legendre’s Equation, Legendre Polynomials, Bessel’s Equation, Bessels’s functions Jn(x) and Yn(x), Gamma Function"
        },
        {
          title: "UNIT - III",
          desc: "Linear Algebra: Matrices and Determinants, Gauss Elimination, Linear Independence, Rank of a Matrix, Vector Space, Solutions of Linear Systems and concept of Existence, Uniqueness, Determinants, Cramer’s Rule, Gauss–Jordan Elimination, The Matrix Eigenvalue Problem, Determining Eigenvalues and Eigenvectors, Symmetric, Skew-Symmetric, and Orthogonal Matrices, Eigenbases, Diagonalization, Quadratic Forms, Cayley – Hamilton Theorem (without proof)"
        },
        {
          title: "UNIT - IV",
          desc: "Vector Calculus: Vector and Scalar Functions and Their Fields, Derivatives, Curves, Arc Length, Curvature, Torsion, Gradient of a Scalar Field, Directional Derivative, Divergence of a Vector Field, Curl of a Vector Field, Line Integrals, Path Independence of Line Integrals, Double Integrals, Green’s Theorem in the Plane, Surfaces for Surface Integrals, Surface Integrals, Triple Integrals, Stokes Theorem, Divergence Theorem of Gauss"
        }
      ],
      "Applied Chemistry": [
        {
          title: "UNIT - I",
          desc: "Fuels: Classification and Characteristics of fuels, Calorific values, Comparison between solid, liquid and gaseous fuels, calorific values of fuels, determination of calorific values using Bomb calorimeter, Boy's calorimeter, theoretical calculation of calorific value using Dulong formula and numericals of Calorific values. Types of fuels: - Solid: Coal, proximate and ultimate analysis of coal and numericals, carbonisation of coal in Otto-Hoffman oven with recovery of by-products, metallurgical coke; Liquid: Petroleum products --- refining, cracking-thermal and catalytic, knocking characteristics, Octane and Cetane rating; Gaseous: Natural Gas (NG), CNG, LPG, Coal gas, Oil gas, Producer gas, Water gas; Combustion of fuels numericals."
        },
        {
          title: "UNIT - II",
          desc: "Phase rule: Terms used in Gibb's Phase rule, phase diagram and its applications for study of one-component systems: Water and Sulphur and two-component systems: Lead-Silver and Zinc-Magnesium. Polymers: Classification, functionality and their types; Plastics: Synthesis (reactions) and properties of Polyethylene Plastics (Addition polymers) ---low-density polyethene (LDPE), high-density polyethylene(HDPE), linear low density polyethylene(LLDPE) and ultra-high molecular weight polyethylene (UHMWPE); Vinyl Plastics (Condensation polymers) - Nylons, Phenol-formaldehyde resins(Bakelite) and Glyptal; Speciality Polymers: Engineering thermoplastics, Conducting polymers, Electroluminescent polymers, liquid crystalline polymers and biodegradable polymers."
        },
        {
          title: "UNIT - III",
          desc: "Water: Introduction, water quality standards, physical, chemical and biological characteristics; hardness of water, disadvantages of hardness, determination of hardness (EDTA method) and related numerical questions. Alkalinity and its determination; Boiler problems with hard water and their prevention: Scale and sludge formation, boiler corrosion, caustic embrittlement, priming and foaming, boiler water treatment - internal or in-situ: carbonate and phosphate conditioning, colloidal and Calgon conditioning; external treatment: (a) Lime soda process and related numericals (b) Zeolite process and numericals, (c) Ion-exchange process. Municipal water supply - its treatment and disinfection using break -point chlorination. Desalination, Reverse Osmosis, Electrodialysis and defluoridation of water."
        },
        {
          title: "UNIT - IV",
          desc: "Corrosion and its Control: Definition, effects, theory (mechanisms): dry/chemical, wet/electrochemical corrosion, Pilling-Bedworth ratio; Types of corrosion: Galvanic corrosion, Soil corrosion, Pitting corrosion, Concentration cell or Differential Aeration corrosion, Stress corrosion; Mechanism of rusting of iron, Passivity. Factors influencing corrosion; protective measures: galvanization, tinning, cathodic protection, sacrificial anodic protection; electroplating and prevention of corrosion through material selection and design. Green Technology and Green Chemistry Twelve Principles of Green Chemistry, Zero Waste Technology, Atom economy, Use of alternative feedstock, innocuous reagents, alternative solvents, designing alternative reaction methodology, minimising energy consumption. Nano Chemistry: Nanomaterials: Properties, synthesis and surface characterization techniques BET and TEM and applications."
        }
      ],
      "Manufacturing Processes": [
        {
          title: "UNIT - I",
          desc: "Definition of manufacturing, Importance of manufacturing towards technological and social economic development, Classification of manufacturing processes, Properties of materials. Metal Casting Processes: Sand casting, Sand moulds, Type of patterns, Pattern materials, Pattern allowances, Types of Moulding sand and their Properties, Core making, Elements of gating system, Description and operation of cupola, Working principle of Special casting processes - Shell casting, Pressure die casting, Centrifugal casting, Casting defects."
        },
        {
          title: "UNIT - II",
          desc: "Joining Processes: Welding principles, classification of welding processes, Fusion welding, Gas welding, Equipments used, Filler and Flux materials, Electric arc welding, Gas metal arc welding, Submerged arc welding, Electro slag welding, TIG and MIG welding process, resistance welding, welding defects"
        },
        {
          title: "UNIT - III",
          desc: "Deformation Processes: Hot working and cold working of metals, Forging processes, Open and closed die forging process, Typical forging operations, Rolling of metals, Principle of rod and wire drawing, Tube drawing, Principle of Extrusion, Types of Extrusion, Hot and Cold extrusion, Sheet metal characteristics - Typical shearing operations, bending and drawing operations, Stretch forming operations, Metal spinning"
        },
        {
          title: "UNIT - IV",
          desc: "Powder Metallurgy: Introduction of powder metallurgy process, powder production, blending, compaction, sintering, Manufacturing Of Plastic Components: Types of plastics, Characteristics of the forming and shaping processes, Moulding of Thermoplastics, Injection moulding, Blow moulding, Rotational moulding, Film blowing, Extrusion, Thermoforming, Moulding of thermosets- Compression moulding, Transfer moulding, Bonding of Thermoplastics."
        }
      ],
      "Communication Skills": [
        {
          title: "UNIT - I",
          desc: "Role and Importance of Communications, Attributes of Communications, Verbal and Non-Verbal Communications, Verbal Communications Skills, Non-verbal Communication Methods, Body Language, Barriers to Communications, Socio-psychological barriers, Inter-Cultural barriers, Overcoming barriers, Communication Mediums: Characterization and Choice of medium, Effective Communication: Correctness, Clarity, Conciseness, Courtesy, Group Communication: Meetings (types, purpose), Group Discussions, Conduct of Meeting, Participant Role, Making Presentations."
        },
        {
          title: "UNIT - II",
          desc: "Spoken and Written English: Attributes of spoken and written communication, Formal & Informal Communication, Variation in between Indian, British and American English. Etiquette and Manners: Personal Behaviour, Greetings, Introductions, Telephone Etiquette. Vocabulary Development: Dictionaries and Thesaurus, Words often confused, generally used one word substitutions, Comprehension."
        },
        {
          title: "UNIT - III",
          desc: "Letter writing: Planning the message, Planning Content, Structure, Language use, Layout, enquires and replies, asking for or giving quotations, Bargaining letters, Seller’s reply, etc.; Complaints and Replies; Memos, Circulars and notices; Paragraph Writing, Writing Scientific and Technical Reports: Types, Structure, Drafting and Delivering a Speech: Understanding the Environment, Understanding the Audience, Text preparing, Composition, Practicing, Commemorative Speeches, Welcome and Introduction, Farewell and Send-offs, Condolence"
        },
        {
          title: "UNIT - IV",
          desc: "Articles: Indefinite, Definite; Tenses: Present, Past, Future, Perfect (Present, Past and Future), Tenses in conditional sentences; Active and Passive Voice: Formation, conversion; Direct and Indirect Speech, Degrees of Comparison, Common errors, Concepts of Learning and Listening"
        }
      ],
      "Engineering Graphics": [
        {
          title: "UNIT - I",
          desc: "Introduction: Engineering Graphics/Technical Drawing, Introduction to drawing equipments and use of instruments, Conventions in drawing practice. Types of lines and their uses, BIS codes for lines, technical lettering as per BIS codes, Introduction to dimensioning, Types, Concepts of scale drawing, Types of scales Theory of Projections: Theory of projections, Perspective, Orthographic, System of orthographic projection: in reference to quadrants, Projection of Points, Projection in different quadrants, Projection of point on auxiliary planes, Distance between two points, Illustration through simple problems."
        },
        {
          title: "UNIT - II",
          desc: "Projection of Lines: Line Parallel to both H.P. and V.P., Parallel to one and inclined to other, Other typical cases: three view projection of straight lines, true length and angle orientation of straight line: rotation method, Trapezoidal method and auxiliary plane method, traces of line."
        },
        {
          title: "UNIT - III",
          desc: "Projection of Planes: Projection of Planes Parallel to one and perpendicular to other, Perpendicular to one and inclined to other, Inclined to both reference planes, Plane oblique to reference planes, traces of planes, Planes Other than the Reference Planes: Introduction of other planes (perpendicular and oblique), their traces, inclinations etc., projections of points and lines lying in the planes, conversion of oblique plane into auxiliary plane and solution of related problems."
        },
        {
          title: "UNIT - IV",
          desc: "Projection of Solids: Projection of solids in first or third quadrant, Axis parallel to one and perpendicular to other, Axis parallel to one inclined to other, Axis inclined to both the principal plane, Axis perpendicular to profile plane and parallel to both H.P. and V.P., Visible and invisible details in the projection, Use of rotation and auxiliary plane method, Development of Surface: Purpose of development, Parallel line, radial line and triangulation method, Development of prism, cylinder, cone and pyramid surface for both right angled and oblique solids, Development of surface."
        }
      ],
      "Engineering Mechanics": [
        {
          title: "UNIT - I",
          desc: "Force System: Introduction, force, principle of transmissibility of force, resultant of a force system, resolution of a force, moment of force about a line, Varigon’s theorem, couple, resolution of force into force and a couple, properties of couple and their application to engineering problems. Equilibrium: Force body diagram, equations of equilibrium and their applications to engineering problems, equilibrium of two force and three force members. Distributed Forces: Determination of center of gravity, center of mass and centroid by direct integration and by the method of composite bodies, mass moment of inertia and area moment of inertia by direct integration and composite bodies method, radius of gyration, parallel axis theorem, polar moment of inertial."
        },
        {
          title: "UNIT - II",
          desc: "Structure: Plane truss, perfect and imperfect truss, assumption in the truss analysis, analysis of perfect plane trusses by the method of joints, method of section and graphical method. Friction: Static and Kinetic friction, laws of dry friction, co-efficient of friction, angle of friction, angle of repose, cone of friction, frictional lock, friction in flat pivot and collar bearing, friction in flat belts."
        },
        {
          title: "UNIT - III",
          desc: "Kinematics of Particles: Rectilinear motion, plane curvilinear motion, rectangular coordinates, normal and tangential coordinates. Kinetics of Particles: Equation of motion, rectilinear motion and curvilinear motion, work-energy equation, conservation of energy, concept of impulse and momentum, conservation of momentum, impact of bodies, co-efficient of restitution, loss of energy during impact."
        },
        {
          title: "UNIT - IV",
          desc: "Kinematics of Rigid Bodies: Concept of rigid body, types of rigid body motion, absolute motion, introduction to relative velocity, relative acceleration (Corioli’s component excluded) and instantaneous center of zero velocity, Velocity and acceleration. Kinetics of Rigid Bodies: Equation of motion, translatory motion and fixed axis rotation, application of work energy principles to rigid bodies conservation of energy. Beam: Introduction, types of loading, methods for the reactions of a beam, space diagram, types of end supports, beams subjected to couple."
        }
      ],
      "Electrical Science": [
        {
          title: "UNIT - I",
          desc: "DC Circuits: Passive circuit components, Basic laws of Electrical Engineering, Temperature Resistance Coefficients, voltage and current sources, Series and parallel circuits, power and energy, Kirchhoff’s Laws, Nodal & Mesh Analysis, delta-star transformation, superposition theorem, Thevenin’s theorem, Norton’s theorem, maximum power transfer theorem, Time domain analysis of first Order RC & LC circuits."
        },
        {
          title: "UNIT - II",
          desc: "AC Circuits: Representation of sinusoidal waveforms, peak and rms values, phasor representation, real power, reactive power, apparent power, power factor, Analysis of single-phase ac circuits consisting of R, L, C, RL, RC, RLC combinations (series and parallel), resonance, Three phase balanced circuits, voltage and current relations in star and delta connections."
        },
        {
          title: "UNIT - III",
          desc: "D. C. Generators & Motors: Principle of operation of Generators & Motors, Speed Control of shunt motors, Flux control, Rheostatic control, voltage control, Speed control of series motors, A. C. Generators & Motors: Principle of operation, Revolving Magnetic field, Squirrel cage and phase wound rotor, Starting of Induction motors, Direct on line and Star Delta starters, Synchronous machines."
        },
        {
          title: "UNIT - IV",
          desc: "Transformers: Construction and principle of operation, equivalent circuit, losses in transformers, regulation and efficiency, Auto-transformer and three-phase transformer connections, Measuring Instruments: Electromagnetism, Different Torques in Indicating instruments, Moving Iron Instruments: Construction & Principle, Attraction and Repulsion type, Moving Coil instruments: Permanent Magnet type, Dynamometer type Instruments."
        }
      ],
      "Environmental Science": [
        {
          title: "UNIT - I",
          desc: "Fundamentals: The Multidisciplinary nature of environmental studies: Definition, components, scope and importance, need for public awareness; Natural Resources. Ecosystems: Concept, Structure and function of an ecosystem, Types, Functional Components, Different ecosystems, biogeochemical cycles. Biodiversity: Introduction to biodiversity, biogeographical classification, India as a mega diversity nation, endangered and endemic species of India, threats to biodiversity and conservation of biodiversity. Bioprospecting and Biopiracy"
        },
        {
          title: "UNIT - II",
          desc: "Environmental Pollution: (a) Air Pollution: Source, Types, effects on biosphere and Meterology, Air Quality, Control. (b) Water Pollution: Types and Sources. (c) Soil Pollution: Types and Control. (d) Noise Pollution: Effect, Control (e) Thermal Pollution. (f) Radiation Pollution (g) Solid waste Management, (h) Pollution Prevention, (i) Disaster Management"
        },
        {
          title: "UNIT - III",
          desc: "Social Issues and Environment: Concept of Sustainable Development; Urban problem related to energy; Water Conservation; Wasteland reclamation; Resettlement and Rehabilitation; Climate Change; Nuclear Accidents; Consumerism and Waste Products; Laws related to Environment, Pollution, Forest and Wild life; Environmental Impact Assessment."
        },
        {
          title: "UNIT - IV",
          desc: "Human Population and Environment: Population Growth, Human Rights, Family Welfare Programmes, Environment and Human Health, HIV/AIDS, Women and Child Welfare, Role of IT."
        }
      ],
      "Human Values and Professional Ethics": [
        {
          title: "UNIT - I",
          desc: "Human Values: Morals, Values, Ethics, Integrity, Work ethics, Service learning, Virtues, Respect for others, Living peacefully, Caring, Sharing, Honesty, Courage, Valuing time, Cooperation, Commitment, Empathy, Self-confidence, Challenges in the workplace, Spirituality"
        },
        {
          title: "UNIT - II",
          desc: "Engineering Ethics: Senses of engineering ethics, Variety of moral issues, Types of inquiries, Moral dilemma, Moral autonomy, Moral development (theories), Consensus and controversy, Profession, Models of professional roles, Responsibility, Theories about right action (Ethical theories), Self-control, Self-interest, Customs, Religion, Self-respect, Case study: Choice of the theory Engineering as experimentation, Engineers as responsible experimenters, Codes of ethics, Industrial standards, A balanced outlook on law, Case study: The challenger"
        },
        {
          title: "UNIT - III",
          desc: "Safety definition, Safety and risk, Risk analysis, Assessment of safety and risk, Safe exit, Risk-benefit analysis, Safety lessons from ‘the challenger’, Case study: Power plants, Collegiality and loyalty, Collective bargaining, Confidentiality, Conflict of interests, Occupational crime, Human rights, Employee rights, Whistleblowing, Intellectual property rights."
        },
        {
          title: "UNIT - IV",
          desc: "Globalization, Multinational corporations, Environmental ethics, Computer ethics, Weapons development, Engineers as managers, Consulting engineers, Engineers as expert witness, Engineers as advisors in planning and policymaking, Moral leadership, Codes of ethics, Engineering council of India, Codes of ethics in Business Organizations"
        }
      ],
      "Indian Constitution": [
        {
          title: "UNIT - I",
          desc: "Introduction to Constitution of India: Definition, Source and Framing of the Constitution of India. Salient Features of the Indian Constitution. Preamble of the Constitution."
        },
        {
          title: "UNIT - II",
          desc: "Fundamental Rights and Duties: Rights To Equality (Article 14-18), Rights to Freedom (Article 19-22), Right against Exploitation (Article 23-24), Rights to Religion and Cultural and Educational Rights of Minorities (Article 25-30). The Directive Principles of State Policy – Its significance and application. Fundamental Duties – Necessary obligations and its nature, legal status and significance."
        },
        {
          title: "UNIT - III",
          desc: "Executives and Judiciary: Office of President, Vice President and Governor: Power and Functions, Parliament, Emergency Provisions, President Rule; Union Judiciary: Appointment of Judges, Jurisdiction of the Supreme Court, State Judiciary: Power and functions, Writ Jurisdiction."
        },
        {
          title: "UNIT - IV",
          desc: "Centre-States Relation: Is Indian Constitution Federal in Nature, Legislative relations between Union and States, Administrative Relations between Union and States, Financial Relations between Union and States."
        }
      ],
      "Programming in C": [
        {
          title: "UNIT - I",
          desc: "Introduction to Programming: Computer system, components of a computer system, computing environments, computer languages, creating and running programs, Preprocessor, Compilation process, role of linker, idea of invocation and execution of a programme. Algorithms: Representation using flowcharts, pseudocode. Introduction to C language: History of C, basic structure of C programs, process of compiling and running a C program, C tokens, keywords, identifiers, constants, strings, special symbols, variables, data types, I/O statements. Interconversion of variables. Operators and expressions: Operators, arithmetic, relational and logical, assignment operators, increment and decrement operators, bitwise and conditional operators, special operators, operator precedence and associativity, evaluation of expressions, type conversions in expressions."
        },
        {
          title: "UNIT - II",
          desc: "Control structures: Decision statements; if and switch statement; Loop control statements: while, for and do while loops, jump statements, break, continue, goto statements. Arrays: Concepts, One dimensional array, declaration and initialization of one dimensional arrays, two dimensional arrays, initialization and accessing, multi dimensional arrays. Functions: User defined and built-in Functions, storage classes, Parameter passing in functions, call by value, Passing arrays to functions: idea of call by reference, Recursion. Strings: Arrays of characters, variable length character strings, inputting character strings, character library functions, string handling functions."
        },
        {
          title: "UNIT - III",
          desc: "Pointers: Pointer basics, pointer arithmetic, pointers to pointers, generic pointers, array of pointers, functions returning pointers, Dynamic memory allocation. Pointers to functions. Pointers and Strings Structures and unions: Structure definition, initialization, accessing structures, nested structures, arrays of structures, structures and functions, self referential structures, unions, typedef, enumerations. File handling: command line arguments, File modes, basic file operations read, write and append. Scope and life of variables, multi-file programming."
        },
        {
          title: "UNIT - IV",
          desc: "C99 extensions. 'C' Standard Libraries: stdio.h, stdlib.h, assert.h, math.h, time.h, ctype.h, setjmp.h, string.h, stdarg.h, unistd.h Basic Algorithms: Finding Factorial, Fibonacci series, Linear and Binary Searching, Basic Sorting Algorithms- Bubble sort, Insertion sort and Selection sort. Find the square root of a number, array order reversal, reversal of a string"
        }
      ]
    }
  };

  const { subjects, units } = semesterData;
  const subjectUnits = units[selectedSubject] || [];

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="bg-[#f1436c] py-6 text-white text-center text-4xl font-bold">
        CSE - 1st Semester
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