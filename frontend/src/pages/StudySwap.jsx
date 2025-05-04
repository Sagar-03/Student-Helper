import React, { useState } from "react";
import Navbar from "../components/Navbar";
import BackButton from "../components/BackButton";

// Mock implementation of components instead of importing

const topLinks = [];

const handleBuyClick = () => {
  navigate("/all-products");
};

export default function StudySwap() {
  // State to track login status instead of using localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Mock navigation function instead of using useNavigate from react-router-dom
  const navigateTo = (path) => {
    console.log(`Navigating to: ${path}`);
    // In a real app, this would change the route
  };

  const handleWriterClick = () => {
    if (!isLoggedIn) {
      navigateTo("/login");
      // For demo purposes, let's toggle login state
      setIsLoggedIn(true);
    } else {
      navigateTo("/writer-dashboard");
    }
  };

  const handleClientClick = () => {
    navigateTo("/all-services");
  };

  // Features of the StudySwap marketplace
  const features = [
    {
      title: "Academic Writing Assistance",
      description:
        "Connect with skilled student writers for your research papers and assignments",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
    {
      title: "Peer-to-Peer Exchange",
      description:
        "Fair pricing and direct communication between student writers and clients",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Subject Specialists",
      description:
        "Find writers with expertise in your specific course or subject area",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: "Secure Transactions",
      description:
        "Safe payment system with satisfaction guarantee for both parties",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-blue-50 to-indigo-100">
      <div className="w-full">
        <Navbar links={topLinks} />
      </div>

      <div className="container mx-auto px-4">
        <BackButton />
      </div>

      {/* Hero Section */}
      <div className="container mx-auto pb-6 px-4 py-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 pb-8 pt-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600">
          StudySwap
        </h1>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          The student-to-student marketplace for academic writing services.
          Connect with talented writers or find clients for your writing skills.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={handleWriterClick}
            className="group bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
            Writer
          </button>

          <button
            onClick={handleClientClick}
            className="group bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Client
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
            StudySwap Benefits
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow border border-gray-100 hover:border-blue-300 transition-shadow"
              >
                <div className="text-blue-600 mb-2">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-1 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-gradient-to-br from-blue-50 to-teal-100 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
            How StudySwap Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3 border-2 border-blue-500">
                <span className="text-xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-1 text-gray-800">
                Create Your Profile
              </h3>
              <p className="text-sm text-gray-600">
                Sign up as a writer or client to get started
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3 border-2 border-blue-500">
                <span className="text-xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-1 text-gray-800">
                Connect & Communicate
              </h3>
              <p className="text-sm text-gray-600">
                Browse services or post your writing skills
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3 border-2 border-blue-500">
                <span className="text-xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-1 text-gray-800">
                Complete Assignment
              </h3>
              <p className="text-sm text-gray-600">
                Submit work, receive payment, and provide feedback
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
            StudySwap Community Impact
          </h2>
          <p className="text-center text-gray-700 max-w-2xl mx-auto mb-8">
            Join thousands of students who have already discovered a better way
            to collaborate on academic assignments
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-blue-600">5000+</h3>
              <p className="mt-2 text-lg font-medium text-gray-700">
                Completed Assignments
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-600">3000+</h3>
              <p className="mt-2 text-lg font-medium text-gray-700">
                Student Writers
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-600">98%</h3>
              <p className="mt-2 text-lg font-medium text-gray-700">
                Satisfaction Rate
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-teal-500 to-blue-600 py-8 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-3">
            Join StudySwap Today
          </h2>
          <p className="text-blue-100 mb-5 max-w-xl mx-auto text-sm">
            Connect with fellow students and exchange academic writing services
            in a safe and supportive environment
          </p>

          <div className="flex flex-row gap-4 justify-center">
            <button
              onClick={handleWriterClick}
              className="bg-white text-blue-600 px-5 py-2 rounded-lg hover:shadow-lg transition font-medium text-sm"
            >
              Writer
            </button>

            <button
              onClick={handleClientClick}
              className="bg-transparent border border-white text-white px-5 py-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition font-medium text-sm"
            >
              Client
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
