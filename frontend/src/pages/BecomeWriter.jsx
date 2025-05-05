import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const topLinks = [];

// Sample assignment requests data for initial display
const sampleAssignmentRequests = [
  {
    title: "10-page Research Paper on Machine Learning",
    subject: "Computer Science",
    deadline: "7 days",
    budget: "$150",
    pages: 10,
    requirements: "Must include at least 15 scholarly sources, APA format",
    contact: "+1987654320"
  },
  {
    title: "Case Study Analysis for Marketing Course",
    subject: "Business",
    deadline: "4 days",
    budget: "$85",
    pages: 5,
    requirements: "Analyze the provided case study with SWOT analysis and recommendations",
    contact: "+1987654321"
  },
  {
    title: "Literature Review on Climate Change Effects",
    subject: "Environmental Science",
    deadline: "10 days",
    budget: "$200",
    pages: 12,
    requirements: "Need comprehensive analysis of 20+ peer-reviewed articles from last 5 years",
    contact: "+1987654322"
  }
];

export default function BecomeWriter() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [assignmentRequests, setAssignmentRequests] = useState(sampleAssignmentRequests);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [apiAvailable, setApiAvailable] = useState(true);
  const [filterSubject, setFilterSubject] = useState("");
  const [sortBy, setSortBy] = useState("latest");
  
  // Form state
  const [writerForm, setWriterForm] = useState({
    name: "",
    title: "",
    expertise: "",
    rate: "",
    contact: "",
    description: ""
  });

  // Check authentication status
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      // Redirect to login with a return path
      // Uncomment this if you want automatic redirect
      // navigate("/auth", { state: { from: "/become-writer" } });
    }
  }, [navigate]);

  // Fetch existing assignment requests
  useEffect(() => {
    // Only fetch if logged in
    if (isLoggedIn) {
      const fetchAssignmentRequests = async () => {
        setLoading(true);
        try {
          const response = await axios.get("/api/studyswap/requests");
          if (response.data && Array.isArray(response.data) && response.data.length > 0) {
            setAssignmentRequests(response.data);
          }
          setApiAvailable(true);
        } catch (err) {
          console.log("API not available, using sample data");
          setApiAvailable(false);
        } finally {
          setLoading(false);
        }
      };
      
      fetchAssignmentRequests();
    }
  }, [isLoggedIn]);

  // Handle writer profile form submission
  const handleWriterFormSubmit = async (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      // Store the current page as the redirect destination after login
      sessionStorage.setItem("redirectAfterLogin", "/become-writer");
      // Changed from "/auth" to "/login" since we need to ensure this route exists
      return navigate("/login");
    }
    
    try {
      setLoading(true);
      
      // If API is not available, simulate success with sample data
      if (!apiAvailable) {
        // Convert comma-separated expertise to array - prepare for API
        const expertiseArray = writerForm.expertise.split(',').map(item => item.trim());
        
        // Create a modified form with the array instead of string
        const formattedData = {
          ...writerForm,
          expertise: expertiseArray
        };
        
        setTimeout(() => {
          alert("Your writer profile has been created successfully! (Demo Mode)");
          setWriterForm({
            name: "",
            title: "",
            expertise: "",
            rate: "",
            contact: "",
            description: ""
          });
          setLoading(false);
        }, 1000);
        return;
      }
      
      // If API is available, format the expertise as array before sending
      const formDataToSubmit = {
        ...writerForm,
        expertise: writerForm.expertise.split(',').map(item => item.trim())
      };
      
      // Make the API request with properly formatted data
      const response = await axios.post("/api/studyswap/writers", formDataToSubmit);
      
      alert("Your writer profile has been posted successfully!");
      
      // Reset form after successful submission
      setWriterForm({
        name: "",
        title: "",
        expertise: "",
        rate: "",
        contact: "",
        description: ""
      });
      
    } catch (err) {
      console.error("Error posting writer profile:", err);
      setError("Failed to post your profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Filter and sort the assignment requests
  // Added safety check to ensure assignmentRequests is an array before calling filter
  const filteredRequests = Array.isArray(assignmentRequests) 
    ? assignmentRequests
        .filter(request => !filterSubject || request.subject.toLowerCase().includes(filterSubject.toLowerCase()))
        .sort((a, b) => {
          if (sortBy === "budget-high") {
            return parseFloat(b.budget.replace("$", "")) - parseFloat(a.budget.replace("$", ""));
          } else if (sortBy === "budget-low") {
            return parseFloat(a.budget.replace("$", "")) - parseFloat(b.budget.replace("$", ""));
          } else if (sortBy === "deadline") {
            // Simple sorting by deadline text
            return a.deadline.localeCompare(b.deadline);
          }
          // Default sorting (latest)
          return 0;
        })
    : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="w-full shadow-sm bg-white bg-opacity-90 sticky top-0 z-10">
        <Navbar links={topLinks} />
      </div>

      <div className="container mx-auto px-4 pt-4">
        <BackButton />
      </div>
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">
          Become a Writer
        </h1>
        <p className="text-lg text-center text-gray-600 mb-10 max-w-3xl mx-auto">
          Create your writer profile and start offering your writing services to students. 
          Browse available assignment requests that match your expertise.
        </p>
        
        {!isLoggedIn && (
          <div className="bg-white p-8 rounded-xl shadow-md text-center max-w-md mx-auto mb-10">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Sign In to Continue</h3>
            <p className="text-gray-600 mb-6">You need to be signed in to create a writer profile and view assignment requests.</p>
            <button
              onClick={() => navigate("/login", { state: { from: "/become-writer" } })}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              Sign In / Sign Up
            </button>
          </div>
        )}
        
        {isLoggedIn && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Writer Profile Form */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Create Your Writer Profile</h2>
                
                {error && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    <span>{error}</span>
                    <button className="float-right font-bold" onClick={() => setError("")}>&times;</button>
                  </div>
                )}
                
                <form onSubmit={handleWriterFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Your full name"
                      value={writerForm.name}
                      onChange={(e) => setWriterForm({ ...writerForm, name: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Service Title</label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="e.g. Research Paper Writing Specialist"
                      value={writerForm.title}
                      onChange={(e) => setWriterForm({ ...writerForm, title: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Areas of Expertise (comma separated)</label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="e.g. Computer Science, Psychology, Literature"
                      value={writerForm.expertise}
                      onChange={(e) => setWriterForm({ ...writerForm, expertise: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Rate</label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="e.g. $15/page or $25/hour"
                      value={writerForm.rate}
                      onChange={(e) => setWriterForm({ ...writerForm, rate: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contact Information</label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Phone number or email"
                      value={writerForm.contact}
                      onChange={(e) => setWriterForm({ ...writerForm, contact: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description of Services</label>
                    <textarea
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 h-32"
                      placeholder="Describe your writing services, experience, and qualifications..."
                      value={writerForm.description}
                      onChange={(e) => setWriterForm({ ...writerForm, description: e.target.value })}
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full ${
                      loading ? "bg-indigo-400" : "bg-indigo-600 hover:bg-indigo-700"
                    } text-white py-3 px-4 rounded-lg transition-colors flex items-center justify-center`}
                  >
                    {loading ? (
                      <>
                        <svg 
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" 
                          xmlns="http://www.w3.org/2000/svg" 
                          fill="none" 
                          viewBox="0 0 24 24"
                        >
                          <circle 
                            className="opacity-25" 
                            cx="12" 
                            cy="12" 
                            r="10" 
                            stroke="currentColor" 
                            strokeWidth="4"
                          ></circle>
                          <path 
                            className="opacity-75" 
                            fill="currentColor" 
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        <span>Creating Profile...</span>
                      </>
                    ) : (
                      "Create Writer Profile"
                    )}
                  </button>
                </form>
              </div>
            </div>
            
            {/* Assignment Requests */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                <h2 className="text-xl font-semibold mb-6 text-gray-800">Available Assignment Requests</h2>
                
                {/* Filters */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Subject</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      placeholder="Enter subject..."
                      value={filterSubject}
                      onChange={(e) => setFilterSubject(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
                    <select
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                    >
                      <option value="latest">Latest</option>
                      <option value="budget-high">Budget: High to Low</option>
                      <option value="budget-low">Budget: Low to High</option>
                      <option value="deadline">Deadline</option>
                    </select>
                  </div>
                </div>
                
                {loading ? (
                  <div className="flex justify-center py-12">
                    <svg className="animate-spin h-10 w-10 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </div>
                ) : filteredRequests.length === 0 ? (
                  <div className="bg-gray-50 rounded-lg p-8 text-center">
                    <p className="text-gray-600 mb-2">No assignment requests found matching your criteria.</p>
                    <p className="text-gray-500 text-sm">Try adjusting your filter or check back later.</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {filteredRequests.map((request, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-semibold text-gray-800">{request.title}</h3>
                          <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                            {request.budget}
                          </span>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            {request.subject}
                          </span>
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            Deadline: {request.deadline}
                          </span>
                          <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            {request.pages} pages
                          </span>
                        </div>
                        
                        <p className="text-gray-600 mb-4">{request.requirements}</p>
                        
                        <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                          <span className="text-sm text-gray-500">Contact to apply</span>
                          <a
                            href={`tel:${request.contact}`}
                            className="inline-flex items-center bg-indigo-50 text-indigo-700 px-4 py-2 rounded-lg font-medium hover:bg-indigo-100"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            {request.contact}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* API status indicator */}
      <div className="py-4 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          {!apiAvailable && (
            <p className="text-sm text-gray-500">
              Note: Demo mode active. Backend API not connected.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
