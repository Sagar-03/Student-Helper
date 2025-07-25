import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const topLinks = [];

export default function StudySwap() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [apiAvailable, setApiAvailable] = useState(true);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    // Check if API endpoints are available
    const checkApiEndpoints = async () => {
      if (isLoggedIn) {
        setLoading(true);
        try {
          // Just check if the endpoint can be reached
          await axios.get("/studyswap/health-check");
          setApiAvailable(true);

          // If API is available, fetch the real data
          try {
            const [writersResponse, requestsResponse] = await Promise.all([
              axios.get("/studyswap/writers"),
              axios.get("/studyswap/requests"),
            ]);

            if (writersResponse.data && writersResponse.data.length > 0) {
              setWriterServices(writersResponse.data);
            }

            if (requestsResponse.data && requestsResponse.data.length > 0) {
              setAssignmentRequests(requestsResponse.data);
            }
          } catch (dataError) {
            console.log("Using sample data due to fetch error:", dataError);
            // Keep using the sample data
          }
        } catch (err) {
          console.log("API not available, using sample data");
          setApiAvailable(false);
        } finally {
          setLoading(false);
        }
      }
    };

    checkApiEndpoints();
  }, [isLoggedIn]);

  const handleWriterClick = () => {
    if (!isLoggedIn) {
      sessionStorage.setItem("redirectAfterLogin", "/become-writer");
      navigate("/login");
    } else {
      navigate("/become-writer");
    }
  };

  const handleClientClick = () => {
    if (!isLoggedIn) {
      sessionStorage.setItem("redirectAfterLogin", "/find-writer");
      navigate("/login");
    } else {
      navigate("/find-writer");
    }
  };

  const quickActions = [
    {
      title: "Research Papers",
      description:
        "Professional academic research assistance with proper citations and references",
      icon: "📑",
      color: "from-blue-600 to-blue-400",
    },
    {
      title: "Essay Writing",
      description:
        "Well-structured essays with compelling arguments and clear thesis statements",
      icon: "✏️",
      color: "from-purple-600 to-purple-400",
    },
    {
      title: "Technical Reports",
      description:
        "Detailed analysis and presentation of technical data and findings",
      icon: "📊",
      color: "from-indigo-600 to-indigo-400",
    },
    {
      title: "Thesis Support",
      description:
        "Comprehensive assistance with thesis planning, research, and writing",
      icon: "🎓",
      color: "from-teal-600 to-teal-400",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 absolute inset-0 -z-10" />
      <Navbar links={topLinks} />

      <div className="container pt-0 -mt-6">
        <BackButton />
      </div>

      <div className="relative overflow-hidden pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-5"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700">
              Academic Excellence Made Accessible
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
              Connect with skilled student writers who understand your
              assignments. Get quality papers, essays, and research help
              tailored to your academic needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button
                onClick={handleWriterClick}
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-10 py-5 rounded-xl shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-3 font-bold text-lg"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute -inset-x-2 bottom-0 h-1 bg-blue-300 opacity-50 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
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
                  <span>Become a Writer</span>
                </span>
              </button>

              <button
                onClick={handleClientClick}
                className="group relative overflow-hidden bg-white border-3 border-indigo-600 text-indigo-700 px-10 py-5 rounded-xl shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-3 font-bold text-lg"
              >
                <span className="absolute inset-0 bg-indigo-50 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300"></span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                <span className="relative flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <span>Find a Writer</span>
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {quickActions.map((action, idx) => (
              <div
                key={idx}
                className="rounded-xl p-6 shadow-lg border border-indigo-100 hover:shadow-xl transition-all hover:transform hover:-translate-y-1 group"
              >
                <div
                  className={`w-14 h-14 mb-4 rounded-lg bg-gradient-to-r ${action.color} flex items-center justify-center text-2xl`}
                >
                  {action.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-indigo-700 transition-colors">
                  {action.title}
                </h3>
                <p className="text-gray-600">{action.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-4 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          {!apiAvailable && (
            <p className="text-sm text-gray-500">
              Note: Demo mode active. Backend API not connected.
            </p>
          )}
        </div>
      </div>
    </>
  );
}
