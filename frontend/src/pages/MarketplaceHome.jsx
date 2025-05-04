import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import BackButton from "../components/BackButton";

export default function MarketplaceHome() {
  const navigate = useNavigate();

  const handleSellClick = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      // Not logged in → redirect to login first
      navigate("/login", { state: { from: "/seller-dashboard" } });
    } else {
      // Already logged in → go to Seller Dashboard
      navigate("/seller-dashboard");
    }
  };

  const handleBuyClick = () => {
    // No login check needed for buying, proceed directly
    navigate("/all-products");
  };

  const topLinks = [];

  // Features of the marketplace
  const features = [
    {
      title: "Buy Study Materials",
      description:
        "Access high-quality notes, textbooks, and study guides from fellow students",
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
      title: "Sell Your Materials",
      description:
        "Make extra money by selling your notes, projects and academic resources",
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
      title: "Connect With Peers",
      description:
        "Discover resources from students who've taken the same courses",
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
      title: "Budget-Friendly",
      description:
        "Find affordable academic resources that fit your student budget",
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

  {
    /* Stats Section */
  }
  <section className="bg-gray-100 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
        Night Market Community Impact
      </h2>
      <p className="text-center text-gray-700 max-w-2xl mx-auto mb-8">
        Join thousands of night owls who have already discovered a better way to
        learn after hours
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="text-4xl font-bold text-indigo-600">1000+</h3>
          <p className="mt-2 text-lg font-medium text-gray-700">
            Positive Impacts
          </p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-indigo-600">1000+</h3>
          <p className="mt-2 text-lg font-medium text-gray-700">
            Student Success Stories
          </p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-indigo-600">1000+</h3>
          <p className="mt-2 text-lg font-medium text-gray-700">
            Lives Changed
          </p>
        </div>
      </div>
    </div>
  </section>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      <div className="w-full bg-white shadow-sm sticky top-0 z-10">
        <Navbar links={topLinks} />
      </div>

      {/* Back Button */}
      <div className="container mx-auto px-4">
        <BackButton />
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-32 left-1/4 w-24 h-24 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
        <div className="absolute top-32 right-1/4 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-32 left-1/3 w-36 h-36 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>

        <div className="container mx-auto px-4 py-16 text-center relative z-10">
          <h1 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
            Student Marketplace
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Buy and sell academic resources directly from fellow students. Save
            money, help others, and find exactly what you need for your courses.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 mb-12">
            <button
              onClick={handleSellClick}
              className="group bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-blue-300/50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 text-xl font-medium"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 group-hover:animate-pulse"
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
              Start Selling
            </button>

            <button
              onClick={handleBuyClick}
              className="group bg-gradient-to-r from-emerald-600 to-green-700 text-white px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-green-300/50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 text-xl font-medium"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 group-hover:animate-pulse"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              Browse Products
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Use Student Marketplace?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 hover:border-blue-100 transform hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Create Account</h3>
              <p className="text-gray-600">
                Sign up with your student credentials to get started
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Browse or List</h3>
              <p className="text-gray-600">
                Look for resources or upload your own items for sale
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect & Exchange</h3>
              <p className="text-gray-600">
                Communicate with buyers/sellers and complete your transaction
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            MarketPlace Community Impact
          </h2>
          <p className="text-center text-gray-700 max-w-2xl mx-auto mb-8">
            Join thousands of learners exchanging knowledge and resources in our
            academic marketplace
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-indigo-600">1000+</h3>
              <p className="mt-2 text-lg font-medium text-gray-700">
                Positive Impacts
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-indigo-600">1000+</h3>
              <p className="mt-2 text-lg font-medium text-gray-700">
                Student Success Stories
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-indigo-600">1000+</h3>
              <p className="mt-2 text-lg font-medium text-gray-700">
                Lives Changed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students already saving money and earning extra
            cash with our student marketplace
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={handleSellClick}
              className="bg-white text-blue-700 px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-blue-800/30 transition font-medium"
            >
              Start Selling
            </button>

            <button
              onClick={handleBuyClick}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-blue-800/30 hover:bg-white hover:bg-opacity-10 transition font-medium"
            >
              Browse Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
