import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const topLinks = [];

// Sample writer services data
const sampleWriterServices = [
  {
    name: "Alex Rahman",
    title: "Research Paper Writing",
    expertise: ["Computer Science", "Data Analysis", "Machine Learning"],
    rate: "$15/page",
    rating: 4.8,
    contact: "+1234567890",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    description: "Experienced writer specializing in technical and research papers. Masters in Computer Science with 5+ years of academic writing experience."
  },
  {
    name: "Jessica Chen",
    title: "Essay Writing & Editing",
    expertise: ["Literature", "History", "Psychology"],
    rate: "$12/page",
    rating: 4.9,
    contact: "+1234567891",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    description: "Professional essay writer with background in literature and psychology. I can help with essay structure, argumentation, and polishing your writing."
  },
  {
    name: "Michael Torres",
    title: "Technical Report Writing",
    expertise: ["Engineering", "Physics", "Mathematics"],
    rate: "$18/page",
    rating: 4.7,
    contact: "+1234567892",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
    description: "Engineering graduate with expertise in creating technical reports, papers, and documentation. Strong background in physics and mathematics."
  },
  {
    name: "Sarah Johnson",
    title: "Creative Writing & Essays",
    expertise: ["English Literature", "Creative Writing", "Journalism"],
    rate: "$14/page",
    rating: 4.6,
    contact: "+1234567893",
    image: "https://randomuser.me/api/portraits/women/35.jpg",
    description: "Published author with a Master's in Creative Writing. I can help with essays, stories, and creative assignments that require engaging content."
  }
];

export default function FindWriter() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [writerServices, setWriterServices] = useState(sampleWriterServices);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [apiAvailable, setApiAvailable] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterExpertise, setFilterExpertise] = useState("");
  const [sortBy, setSortBy] = useState("rating");

  // Assignment request form state
  const [assignmentForm, setAssignmentForm] = useState({
    title: "",
    subject: "",
    deadline: "",
    budget: "",
    pages: "",
    requirements: "",
    contact: ""
  });

  // Check authentication status
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  // Fetch writer services
  useEffect(() => {
    if (isLoggedIn) {
      const fetchWriters = async () => {
        setLoading(true);
        try {
          const response = await axios.get("/api/studyswap/writers");
          if (response.data && Array.isArray(response.data) && response.data.length > 0) {
            setWriterServices(response.data);
          }
          setApiAvailable(true);
        } catch (err) {
          console.log("API not available, using sample data");
          setApiAvailable(false);
        } finally {
          setLoading(false);
        }
      };

      fetchWriters();
    }
  }, [isLoggedIn]);

  // Handle assignment request submission
  const handleAssignmentSubmit = async (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      // Store redirect path for after login
      sessionStorage.setItem("redirectAfterLogin", "/find-writer");
      return navigate("/login");
    }

    try {
      setLoading(true);

      // If API is not available, simulate success
      if (!apiAvailable) {
        setTimeout(() => {
          alert("Your assignment request has been posted successfully! (Demo Mode)");
          setAssignmentForm({
            title: "",
            subject: "",
            deadline: "",
            budget: "",
            pages: "",
            requirements: "",
            contact: ""
          });
          setLoading(false);
        }, 1000);
        return;
      }

      // If API is available, make the actual request
      const response = await axios.post("/api/studyswap/requests", assignmentForm);

      alert("Your assignment request has been posted successfully!");

      // Reset form after successful submission
      setAssignmentForm({
        title: "",
        subject: "",
        deadline: "",
        budget: "",
        pages: "",
        requirements: "",
        contact: ""
      });

    } catch (err) {
      console.error("Error posting assignment request:", err);
      setError("Failed to post your assignment request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Filter and sort writers with safety check
  const filteredWriters = Array.isArray(writerServices)
    ? writerServices
        .filter(writer => {
          const matchesSearch = writer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             writer.title.toLowerCase().includes(searchTerm.toLowerCase());

          let matchesExpertise = true;
          if (filterExpertise) {
            matchesExpertise = Array.isArray(writer.expertise) && writer.expertise.some(exp =>
              exp.toLowerCase().includes(filterExpertise.toLowerCase())
            );
          }

          return matchesSearch && matchesExpertise;
        })
        .sort((a, b) => {
          if (sortBy === "rating") return b.rating - a.rating;
          if (sortBy === "price-low") {
            const aPrice = parseFloat(a.rate.replace(/[^\d.]/g, ''));
            const bPrice = parseFloat(b.rate.replace(/[^\d.]/g, ''));
            return aPrice - bPrice;
          }
          if (sortBy === "price-high") {
            const aPrice = parseFloat(a.rate.replace(/[^\d.]/g, ''));
            const bPrice = parseFloat(b.rate.replace(/[^\d.]/g, ''));
            return bPrice - aPrice;
          }
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
          Find a Writer
        </h1>
        <p className="text-lg text-center text-gray-600 mb-10 max-w-3xl mx-auto">
          Post your assignment request and find skilled writers who can help with your academic needs.
          Browse our writers' profiles to find the perfect match for your assignment.
        </p>

        {!isLoggedIn && (
          <div className="bg-white p-8 rounded-xl shadow-md text-center max-w-md mx-auto mb-10">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Sign In to Continue</h3>
            <p className="text-gray-600 mb-6">You need to be signed in to post assignment requests and contact writers.</p>
            <button
              onClick={() => navigate("/login", { state: { from: "/find-writer" } })}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              Sign In / Sign Up
            </button>
          </div>
        )}

        {isLoggedIn && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Assignment Request Form */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Post an Assignment Request</h2>

                {error && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    <span>{error}</span>
                    <button className="float-right font-bold" onClick={() => setError("")}>&times;</button>
                  </div>
                )}

                <form onSubmit={handleAssignmentSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Assignment Title</label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="e.g. Research Paper on Climate Change"
                      value={assignmentForm.title}
                      onChange={(e) => setAssignmentForm({ ...assignmentForm, title: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="e.g. Environmental Science"
                      value={assignmentForm.subject}
                      onChange={(e) => setAssignmentForm({ ...assignmentForm, subject: e.target.value })}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Deadline</label>
                      <input
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="e.g. 7 days"
                        value={assignmentForm.deadline}
                        onChange={(e) => setAssignmentForm({ ...assignmentForm, deadline: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Budget</label>
                      <input
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="e.g. $150"
                        value={assignmentForm.budget}
                        onChange={(e) => setAssignmentForm({ ...assignmentForm, budget: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Number of Pages</label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="e.g. 10"
                      value={assignmentForm.pages}
                      onChange={(e) => setAssignmentForm({ ...assignmentForm, pages: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Assignment Requirements</label>
                    <textarea
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 h-32"
                      placeholder="Describe your assignment requirements in detail..."
                      value={assignmentForm.requirements}
                      onChange={(e) => setAssignmentForm({ ...assignmentForm, requirements: e.target.value })}
                      required
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contact Information</label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Phone number or email"
                      value={assignmentForm.contact}
                      onChange={(e) => setAssignmentForm({ ...assignmentForm, contact: e.target.value })}
                      required
                    />
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
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Posting Request...
                      </>
                    ) : (
                      "Post Assignment Request"
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Writer Listings */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                <h2 className="text-xl font-semibold mb-6 text-gray-800">Available Writers</h2>

                {/* Search and Filters */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Search Writers</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      placeholder="Search by name or title..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Expertise</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      placeholder="e.g. Computer Science"
                      value={filterExpertise}
                      onChange={(e) => setFilterExpertise(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
                    <select
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                    >
                      <option value="rating">Top Rated</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
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
                ) : filteredWriters.length === 0 ? (
                  <div className="bg-gray-50 rounded-lg p-8 text-center">
                    <p className="text-gray-600 mb-2">No writers found matching your criteria.</p>
                    <p className="text-gray-500 text-sm">Try adjusting your search or filters.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredWriters.map((writer, idx) => (
                      <div key={idx} className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow">
                        <div className="flex items-center mb-4">
                          {writer.image ? (
                            <img
                              src={writer.image}
                              alt={writer.name}
                              className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-indigo-100"
                            />
                          ) : (
                            <div className="w-16 h-16 rounded-full mr-4 bg-indigo-100 flex items-center justify-center text-indigo-500 font-bold text-xl">
                              {writer.name.charAt(0)}
                            </div>
                          )}
                          <div>
                            <h3 className="font-semibold text-gray-800">{writer.name}</h3>
                            <div className="flex items-center">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <svg
                                  key={star}
                                  className={`h-4 w-4 ${
                                    star <= Math.round(writer.rating) ? "text-yellow-400" : "text-gray-300"
                                  }`}
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                              <span className="ml-1 text-sm text-gray-600">{writer.rating.toFixed(1)}</span>
                            </div>
                          </div>
                        </div>

                        <h4 className="text-lg font-medium text-indigo-700 mb-2">{writer.title}</h4>

                        <p className="text-gray-600 text-sm mb-3">
                          {writer.description || "Experienced writer available for academic assignments."}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-3">
                          {writer.expertise.map((exp, i) => (
                            <span key={i} className="bg-indigo-50 text-indigo-700 px-2 py-0.5 text-xs rounded-full">
                              {exp}
                            </span>
                          ))}
                        </div>

                        <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                          <span className="text-green-600 font-semibold">{writer.rate}</span>
                          <a
                            href={`tel:${writer.contact}`}
                            className="inline-flex items-center bg-indigo-50 text-indigo-700 px-4 py-2 rounded-lg font-medium hover:bg-indigo-100"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Contact
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
