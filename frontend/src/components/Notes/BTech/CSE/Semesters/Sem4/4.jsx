import React, { useState } from "react";
import { useParams } from "react-router-dom";

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
      // Other subjects and their units...
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
        <h1 className="text-3xl font-bold text-white text-center relative z-10">CSE - 4th Semester</h1>
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