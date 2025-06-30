import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axiosConfig";

export default function FindWriter() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // General request form state
  const [form, setForm] = useState({
    title: "",
    category: "",
    deadline: "",
    budget: "",
    pages: "",
    details: "",
    contact: ""
  });
  const [file, setFile] = useState(null);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  // Handle general request submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    try {
      setLoading(true);
      setError("");
      let response;
      if (file) {
        // Use FormData for file upload
        const formData = new FormData();
        Object.entries(form).forEach(([key, value]) => formData.append(key, value));
        formData.append("file", file);
        response = await axiosInstance.post("/studyswap/requests", formData, {
          headers: { "Content-Type": "multipart/form-data" }
        });
      } else {
        response = await axiosInstance.post("/studyswap/requests", form);
      }
      setSuccessMessage("Your request has been posted successfully! Helpers can now see it.");
      setForm({
        title: "",
        category: "",
        deadline: "",
        budget: "",
        pages: "",
        details: "",
        contact: ""
      });
      setFile(null);
      setTimeout(() => setSuccessMessage(""), 5000);
    } catch (err) {
      setError("Failed to post your request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="w-full shadow-sm bg-white bg-opacity-90 sticky top-0 z-10">
        <Navbar links={[]} />
      </div>
      <div className="container mx-auto px-4 pt-4">
        <BackButton />
      </div>
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">
          Post Your Request (Assignment or File)
        </h1>
        <p className="text-lg text-center text-gray-600 mb-10 max-w-3xl mx-auto">
          Need help with an assignment or want to share/request a file? Post your requirements here and helpers will be able to see them and contact you.
        </p>
        {!isLoggedIn ? (
          <div className="bg-white p-8 rounded-xl shadow-md text-center max-w-md mx-auto">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Sign In to Continue</h3>
            <p className="text-gray-600 mb-6">You need to be signed in to post requests.</p>
            <button
              onClick={() => navigate("/login")}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              Sign In / Sign Up
            </button>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">Post Your Request</h2>
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                  <span>{error}</span>
                  <button className="float-right font-bold" onClick={() => setError("")}>×</button>
                </div>
              )}
              {successMessage && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  <span>{successMessage}</span>
                  <button className="float-right font-bold" onClick={() => setSuccessMessage("")}>×</button>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Request Title *</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="e.g. Need help with project report or Need previous year paper"
                    value={form.title}
                    onChange={e => setForm({ ...form, title: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category / Subject *</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="e.g. Computer Science, Mathematics, General"
                    value={form.category}
                    onChange={e => setForm({ ...form, category: e.target.value })}
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Deadline</label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="e.g. 7 days or ASAP"
                      value={form.deadline}
                      onChange={e => setForm({ ...form, deadline: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Budget</label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="e.g. $50 or Free"
                      value={form.budget}
                      onChange={e => setForm({ ...form, budget: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pages</label>
                    <input
                      type="number"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="e.g. 10"
                      value={form.pages}
                      onChange={e => setForm({ ...form, pages: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Details / Requirements *</label>
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 h-40"
                    placeholder="Describe your request in detail. Include any specific instructions, requirements, or context."
                    value={form.details}
                    onChange={e => setForm({ ...form, details: e.target.value })}
                    required
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Attach File (optional)</label>
                  <input
                    type="file"
                    className="w-full"
                    onChange={e => setFile(e.target.files[0])}
                  />
                  {file && <p className="text-xs text-gray-500 mt-1">Selected: {file.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Contact Information *</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Phone number or email for helpers to contact you"
                    value={form.contact}
                    onChange={e => setForm({ ...form, contact: e.target.value })}
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full ${loading ? "bg-indigo-400" : "bg-indigo-600 hover:bg-indigo-700"} text-white py-4 px-6 rounded-lg font-medium text-lg transition-colors flex items-center justify-center`}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Posting Your Request...
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                      </svg>
                      Post Request
                    </>
                  )}
                </button>
                <p className="text-sm text-gray-500 text-center">
                  After posting, helpers will be able to see your request and contact you directly.
                </p>
              </form>
            </div>
            {/* Info Section */}
            <div className="mt-8 bg-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">How it works:</h3>
              <div className="space-y-2 text-blue-800">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center mr-3 text-sm font-bold">1</div>
                  <span>Post your request with all details and (optionally) attach a file</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center mr-3 text-sm font-bold">2</div>
                  <span>Helpers will see your request in the "Become a Writer" section</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center mr-3 text-sm font-bold">3</div>
                  <span>Interested helpers will contact you directly</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center mr-3 text-sm font-bold">4</div>
                  <span>Choose the best helper for your request</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
