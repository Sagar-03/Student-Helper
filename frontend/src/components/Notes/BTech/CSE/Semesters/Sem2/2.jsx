import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function Semester2() {
  const [selectedSubject, setSelectedSubject] = useState("Applied Mathematics II");
  const [activeTab, setActiveTab] = useState("Syllabus");
  const { semesterId } = useParams();

  const semesterData = {
    subjects: [
      "Applied Mathematics II",
      "Applied Physics II",
      "Communication Skills",
      "Engineering Graphics",
      "Engineering Mechanics",
      "Electrical Science",
      "Environmental Science",
      "Human Values and Professional Ethics",
      "Indian Constitution",
      "Manufacturing Processes",
      "Programming in C",
      "Workshop Practice"
    ],
    units: {
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
      "Applied Mathematics II": [
        { 
          title: "UNIT - I",
          desc: "Complex Analysis – I : Complex Numbers and Their Geometric Representation, Polar Form of Complex Numbers. Powers and Roots, Derivative. Analytic Function, Cauchy–Riemann Equations. Laplace’s Equation, Exponential Function, Trigonometric and Hyperbolic Functions. Euler’s Formula, de’Moivre’s theorem (without proof), Logarithm. General Power. Principal Value. Singularities and Zeros. Infinity," 
        },
        { 
          title: "UNIT - II",
          desc: "Complex Analysis – II: Laurent Series, Residue Integration Method. Residue Integration of Real Integrals, Geometry of Analytic Functions: Conformal Mapping, Linear Fractional Transformations (Möbius Transformations), Special Linear Fractional Transformations, Conformal Mapping by Other Functions, Applications: Electrostatic Fields, Use of Conformal Mapping. Modeling, Heat Problems, Fluid Flow. Poisson’s Integral Formula for Potentials" 
        },
        { 
          title: "UNIT - III",
          desc: "Laplace Transforms: Definitions and existence (without proof), properties, First Shifting Theorem (s-Shifting), Transform of Derivatives and Integrals and ODEs, Unit Step Function (Heaviside Function). Second Shifting Theorem (t-Shifting), Short Impulses. Dirac’s Delta Function. Partial Fractions, Convolution. Integral Equations, Differentiation and Integration of Transforms. Solution of ODEs with Variable Coefficients, Solution of Systems of ODEs. Inverse Laplace transform and its properties. Fourier Analysis: Fourier Series, Arbitrary Period. Even and Odd Functions. Half-Range Expansions, Sturm–Liouville Problems. Fourier Integral, Fourier Cosine and Sine Transforms, Fourier Transform. Usage of fourier analysis for solution of ODEs. Inverse Fourier transform and its properties." 
        },
        { 
          title: "UNIT - IV",
          desc: "Partial Differential Equations (PDEs): Basic Concepts of PDEs. Modeling: Vibrating String, Wave Equation. Solution by Separating Variables. Use of Fourier Series. D’Alembert’s Solution of the Wave Equation. Characteristics. Modeling: Heat Flow from a Body in Space. Heat Equation: Solution by Fourier Series. Steady Two-Dimensional Heat Problems. Dirichlet Problem. Heat Equation: Modeling Very Long Bars. Solution by Fourier Integrals and Transforms. Modeling: Membrane, Two-Dimensional Wave Equation. Rectangular Membrane. Laplacian in Polar Coordinates. Circular Membrane. Laplace’s Equation in Cylindrical and Spherical Coordinates. Potential. Solution of PDEs by Laplace Transforms." 
        }
      ],
      "Applied Physics II": [
        { 
          title: "UNIT - I",
          desc: "Quantum Mechanics: Introduction: Wave particle duality, de Broglie waves, the experiment of Davisson and Germer, electron diffraction, physical interpretation of the wave function, properties, the wave packet, group and phase velocity, the uncertainty principle. The Schrödinger wave equation (1D), Eigen values and Eigen functions, expectation values, simple Eigen value problems – solutions of the Schrödinger’s equations for the free particle, the infinite well, the finite well, tunneling effect, the scanning electron microscope, the quantum simple harmonic oscillator (qualitative), zero point energy." 
        },
        { 
          title: "UNIT - II",
          desc: "Quantum Statistics: The need for statistics, statistical distributions: Maxwell Boltzmann, Bose-Einstein and Fermi-Dirac statistics, their comparisons, Fermions and Bosons, Applications of quantum statistics: 1. Molecular speed and energies in an ideal gas; 2. The Black body spectrum, the failure of classical statistics to give the correct explanations – Bose-Einstein statistics applied to the Black Body radiation spectrum; Fermi-Dirac distribution, free electron theory, electronic specific heats, Fermi energy and average energy; Dying stars." 
        },
        { 
          title: "UNIT - III",
          desc: "Crystal Structure: Types of solids, Unit cell, Types of crystals, Translation vectors, Lattice planes, Miller indices, Simple crystal structures, Interplaner spacing, Crystal structure analysis: Bragg’s law, Laue method, Point defects: Schottcky and Frankel defects." 
        },
        { 
          title: "UNIT - IV",
          desc: "Band Theory of Solids: Origin of energy bands in solids, motion of electrons in a periodic potential – the Kronig–Penny model (Qualitative). Brillouin zones, effective mass, metals, semi-conductors and insulators and their energy band structures. Extrinsic and Intrinsic semiconductors, doping – Fermi energy for doped and undoped semiconductors, the p-n junction (energy band diagrams with Fermi energy), the unbiased diode, forward and reverse biased diodes – tunnel diodes, zener diode, photo diode its characteristics, LED" 
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
      ],
      "Workshop Practice": [
        {
          title: "UNIT - I",
          desc: "Safety, precautions and maintenance: Safety in shop, safety devices, safety and precautions - moving machine and equipment parts, electrical parts and connections, fire, various driving systems like chain, belt and ropes, electrical accidents, an overview of predictive, preventive and scheduled maintenance, standard guidelines to be followed in shop."
        },
        {
          title: "UNIT - II",
          desc: "Introduction to machine shop: Introduction to Lathe, Milling, shaper, Planer, grinder, drilling and overview of operations performed on these machines by making some jobs."
        },
        {
          title: "UNIT - III",
          desc: "Introduction to welding shop: Welding, types of welding, tools and applications, gas welding and arc welding, edge preparation, various joints formation by gas welding and electric arc welding."
        },
        {
          title: "UNIT - IV",
          desc: "Introduction to sheet metal shop: Sheet metal tools and operations, formation of a box using sheet. Introduction to fitting shop: Introduction to fitting, tools and applications, some jobs in fitting shop."
        }
      ]
    }
  };

  const { subjects, units } = semesterData;
  const subjectUnits = units[selectedSubject] || [];

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="bg-[#f1436c] py-6 text-white text-center text-4xl font-bold">
        CSE - 2nd Semester
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