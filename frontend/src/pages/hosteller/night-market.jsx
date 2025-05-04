import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import BackButton from "../../components/BackButton";

export default function NightMarket() {
  const navigate = useNavigate();

  const handleSellClick = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login", { state: { from: "/seller-dashboard" } });
    } else {
      navigate("/seller-dashboard");
    }
  };

  const handleBuyClick = () => {
    navigate("/all-products");
  };

  const topLinks = [
    
  ];

  // Features of the night marketplace
  const features = [
    {
      title: "Night Owl Study Materials",
      description:
        "Access high-quality resources designed for late-night study sessions",
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
      title: "Midnight Market Deals",
      description:
        "Special discounts and offers exclusively available in our night marketplace",
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
      title: "Connect After Hours",
      description:
        "Meet fellow night owls and collaborate on late-night study sessions",
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
      title: "Exclusive After-Dark Content",
      description:
        "Find specialized resources available only during night market hours",
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

  // Night owl testimonials

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-100">
      <div className="w-full">
        <Navbar links={topLinks} />
      </div>

      <div className="container mx-auto px-4">
        <BackButton />
      </div>

      {/* Hero Section - Simplified */}
      <div className="container mx-auto pb-6 px-4 py-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 pb-8 pt-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600">
          Night Market
        </h1>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          The after-hours marketplace for night owl students. Discover
          resources, connect with fellow late-night learners.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={handleSellClick}
            className="group bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
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
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Start Selling
          </button>

          <button
            onClick={handleBuyClick}
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
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            Browse Products
          </button>
        </div>
      </div>

      {/* Features Section - More Compact */}
      <div className="bg-white py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Night Owl Advantages
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow border border-gray-100 hover:border-indigo-300 transition-shadow"
              >
                <div className="text-indigo-600 mb-2">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-1 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works - More Compact */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-100 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            How The Night Market Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-3 border-2 border-indigo-500">
                <span className="text-xl font-bold text-indigo-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-1 text-gray-800">
                Join After Hours
              </h3>
              <p className="text-sm text-gray-600">
                Sign in to access night market features
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-3 border-2 border-indigo-500">
                <span className="text-xl font-bold text-indigo-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-1 text-gray-800">
                Explore Deals
              </h3>
              <p className="text-sm text-gray-600">
                Browse special offerings or list your items
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-3 border-2 border-indigo-500">
                <span className="text-xl font-bold text-indigo-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-1 text-gray-800">
                Complete Exchange
              </h3>
              <p className="text-sm text-gray-600">
                Connect with others and finish your transaction
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Night Market Community Impact
          </h2>
          <p className="text-center text-gray-700 max-w-2xl mx-auto mb-8">
            Join thousands of night owls who have already discovered a better
            way to learn after hours
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

      {/* Call to Action - More Compact */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 py-8 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-3">
            Join the Night Market
          </h2>
          <p className="text-blue-100 mb-5 max-w-xl mx-auto text-sm">
            Connect with fellow night owls and discover resources specially
            designed for after-hours studying
          </p>

          <div className="flex flex-row gap-4 justify-center">
            <button
              onClick={handleSellClick}
              className="bg-white text-indigo-600 px-5 py-2 rounded-lg hover:shadow-lg transition font-medium text-sm"
            >
              Start Selling
            </button>

            <button
              onClick={handleBuyClick}
              className="bg-transparent border border-white text-white px-5 py-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition font-medium text-sm"
            >
              Browse Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
