import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axiosConfig";

export default function BecomeWriter() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [assignmentRequests, setAssignmentRequests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filterSubject, setFilterSubject] = useState("");
  const [sortBy, setSortBy] = useState("latest");

  // Check authentication status
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  // Fetch assignment requests when user is logged in
  useEffect(() => {
    if (isLoggedIn) {
      fetchAssignmentRequests();
    }
  }, [isLoggedIn]);

  const fetchAssignmentRequests = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get("/studyswap/requests");
      setAssignmentRequests(response.data);
    } catch (err) {
      console.error("Error fetching assignment requests:", err);
      setError("Failed to load assignment requests. Using sample data.");
      // Fallback sample data
      setAssignmentRequests([
        {
          _id: "1",
          title: "10-page Research Paper on Machine Learning",
          subject: "Computer Science",
          deadline: "7 days",
          budget: "$150",
          pages: 10,
          requirements: "Must include at least 15 scholarly sources, APA format",
          contact: "+1987654320",
          createdAt: new Date().toISOString()
        },
        {
          _id: "2",
          title: "Case Study Analysis for Marketing Course",
          subject: "Business",
          deadline: "4 days",
          budget: "$85",
          pages: 5,
          requirements: "Analyze the provided case study with SWOT analysis and recommendations",
          contact: "+1987654321",
          createdAt: new Date().toISOString()
        },
        {
          _id: "3",
          title: "Literature Review on Climate Change Effects",
          subject: "Environmental Science",
          deadline: "10 days",
          budget: "$200",
          pages: 12,
          requirements: "Need comprehensive analysis of 20+ peer-reviewed articles from last 5 years",
          contact: "+1987654322",
          createdAt: new Date().toISOString()
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Filter and sort assignment requests
  const filteredRequests = Array.isArray(assignmentRequests)
    ? assignmentRequests
        .filter(request => !filterSubject || request.subject.toLowerCase().includes(filterSubject.toLowerCase()))
        .sort((a, b) => {
          if (sortBy === "latest") {
            return new Date(b.createdAt) - new Date(a.createdAt);
          } else if (sortBy === "budget-high") {
            const aBudget = parseFloat(a.budget.replace(/[^\d.]/g, ''));
            const bBudget = parseFloat(b.budget.replace(/[^\d.]/g, ''));
            return bBudget - aBudget;
          } else if (sortBy === "budget-low") {
            const aBudget = parseFloat(a.budget.replace(/[^\d.]/g, ''));
            const bBudget = parseFloat(b.budget.replace(/[^\d.]/g, ''));
            return aBudget - bBudget;
          }
          return 0;
        })
    : [];

  const handleContactStudent = (contact) => {
    if (contact.includes('@')) {
      window.open(`mailto:${contact}`, '_blank');
    } else {
      window.open(`tel:${contact}`, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <div className="w-full shadow-sm bg-white bg-opacity-90 sticky top-0 z-10">
        <Navbar links={[]} />
      </div>

      <div className="container mx-auto px-4 pt-4">
        <BackButton />
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-700">
          Assignment Opportunities for Writers
        </h1>
        <p className="text-lg text-center text-gray-600 mb-10 max-w-3xl mx-auto">
          Browse assignment requests from students who need your writing expertise. Connect directly with students and help them succeed with their academic goals.
        </p>

        {!isLoggedIn ? (
          <div className="bg-white p-8 rounded-xl shadow-md text-center max-w-md mx-auto">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Sign In to Continue</h3>
            <p className="text-gray-600 mb-6">You need to be signed in to view assignment requests and contact students.</p>
            <button
              onClick={() => navigate("/login")}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
            >
              Sign In / Sign Up
            </button>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            {/* Filters and Search */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Find Assignment Opportunities</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Subject</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="e.g. Computer Science, Business, etc."
                    value={filterSubject}
                    onChange={(e) => setFilterSubject(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                  <select
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="latest">Latest Posted</option>
                    <option value="budget-high">Budget: High to Low</option>
                    <option value="budget-low">Budget: Low to High</option>
                  </select>
                </div>
              </div>
            </div>

            {error && (
              <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-6">
                <span>{error}</span>
                <button className="float-right font-bold" onClick={() => setError("")}>&times;</button>
              </div>
            )}

            {/* Assignment Requests */}
            {loading ? (
              <div className="flex justify-center py-12">
                <svg className="animate-spin h-10 w-10 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </div>
            ) : filteredRequests.length === 0 ? (
              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Assignment Requests Found</h3>
                <p className="text-gray-600 mb-4">
                  {filterSubject ? "No assignments match your current filter." : "No new assignment requests available at the moment."}
                </p>
                {filterSubject && (
                  <button
                    onClick={() => setFilterSubject("")}
                    className="text-purple-600 hover:text-purple-700 font-medium"
                  >
                    Clear filter to see all assignments
                  </button>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRequests.map((request) => (
                  <div key={request._id || request.id} className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="mb-4">
                      <div className="flex justify-between items-start mb-2">
                        <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          {request.subject}
                        </span>
                        <span className="text-green-600 font-bold text-lg">{request.budget}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                        {request.title}
                      </h3>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-medium">Deadline:</span> {request.deadline}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="font-medium">Pages:</span> {request.pages}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Requirements:</h4>
                      <p className="text-sm text-gray-600 line-clamp-3">
                        {request.requirements}
                      </p>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <button
                        onClick={() => handleContactStudent(request.contact)}
                        className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center justify-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Contact Student
                      </button>
                      <p className="text-xs text-gray-500 text-center mt-2">
                        {request.contact.includes('@') ? 'Email' : 'Phone'}: {request.contact}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Instructions Section */}
            <div className="mt-12 bg-purple-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">How to Get Started as a Writer</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center mr-3 text-sm font-bold text-purple-700">1</div>
                    <div>
                      <h4 className="font-medium text-purple-900">Browse Assignments</h4>
                      <p className="text-purple-700 text-sm">Look through available assignment requests and find ones that match your expertise.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center mr-3 text-sm font-bold text-purple-700">2</div>
                    <div>
                      <h4 className="font-medium text-purple-900">Contact Students</h4>
                      <p className="text-purple-700 text-sm">Reach out to students directly via phone or email to discuss their requirements.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center mr-3 text-sm font-bold text-purple-700">3</div>
                    <div>
                      <h4 className="font-medium text-purple-900">Negotiate Terms</h4>
                      <p className="text-purple-700 text-sm">Discuss pricing, deadlines, and specific requirements with the student.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center mr-3 text-sm font-bold text-purple-700">4</div>
                    <div>
                      <h4 className="font-medium text-purple-900">Deliver Quality Work</h4>
                      <p className="text-purple-700 text-sm">Complete the assignment according to the agreed specifications and timeline.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
