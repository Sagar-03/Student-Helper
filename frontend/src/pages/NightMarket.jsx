// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import BackButton from "../components/BackButton";

// export default function NightMarket() {
//   const navigate = useNavigate();

//   const handleSellClick = () => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       // Not logged in → redirect to login first
//       navigate("/login", { state: { from: "/seller-dashboard" } });
//     } else {
//       // Already logged in → go to Seller Dashboard
//       navigate("/seller-dashboard");
//     }
//   };

//   const handleBuyClick = () => {
//     // No login check needed for buying, proceed directly
//     navigate("/all-products");
//   };

//   const topLinks = [
//     { to: "/dashboard", label: "Dashboard" },
//     { to: "/marketplace", label: "Marketplace" },
//   ];

//   // Features of the night marketplace
//   const features = [
//     {
//       title: "Night Owl Study Materials",
//       description: "Access high-quality resources designed for late-night study sessions",
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
//         </svg>
//       )
//     },
//     {
//       title: "Midnight Market Deals",
//       description: "Special discounts and offers exclusively available in our night marketplace",
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//         </svg>
//       )
//     },
//     {
//       title: "Connect After Hours",
//       description: "Meet fellow night owls and collaborate on late-night study sessions",
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//         </svg>
//       )
//     },
//     {
//       title: "Exclusive After-Dark Content",
//       description: "Find specialized resources available only during night market hours",
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
//         </svg>
//       )
//     }
//   ];

//   // Night owl testimonials
//   const testimonials = [
//     {
//       name: "Jamie L.",
//       role: "Night Owl Coder",
//       quote: "The Night Market helped me find resources perfect for my late-night coding sessions!",
//       avatar: "J"
//     },
//     {
//       name: "Nisha P.",
//       role: "Medical Student",
//       quote: "I do my best studying after midnight, and this marketplace understands that lifestyle.",
//       avatar: "N"
//     },
//     {
//       name: "Leo T.",
//       role: "Design Major",
//       quote: "Found amazing creative resources that sparked my late-night inspiration sessions.",
//       avatar: "L"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-gray-100">
//       <div className="w-full bg-black bg-opacity-50 shadow-md sticky top-0 z-10 backdrop-filter backdrop-blur-sm">
//         <Navbar links={topLinks} />
//       </div>
      
//       {/* Back Button */}
//       <div className="container mx-auto px-4">
//         <BackButton />
//       </div>

//       {/* Hero Section */}
//       <div className="relative overflow-hidden">
//         {/* Decorative elements - animated stars */}
//         <div className="absolute top-32 left-1/4 w-1 h-1 bg-blue-400 rounded-full opacity-70 animate-pulse"></div>
//         <div className="absolute top-40 left-1/3 w-2 h-2 bg-purple-400 rounded-full opacity-60 animate-pulse animation-delay-2000"></div>
//         <div className="absolute bottom-32 left-2/3 w-1 h-1 bg-indigo-400 rounded-full opacity-80 animate-pulse animation-delay-1000"></div>
//         <div className="absolute top-60 right-1/4 w-1 h-1 bg-cyan-400 rounded-full opacity-70 animate-pulse animation-delay-3000"></div>
//         <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-purple-400 rounded-full opacity-60 animate-pulse animation-delay-4000"></div>
//         <div className="absolute top-20 right-1/3 w-1 h-1 bg-blue-400 rounded-full opacity-70 animate-pulse animation-delay-2500"></div>
        
//         <div className="container mx-auto px-4 py-16 text-center relative z-10">
//           <h1 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400">
//             Night Market
//           </h1>
//           <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
//             The after-hours marketplace for night owl students.
//             Discover resources, connect with fellow late-night learners, and find exactly what you need.
//           </p>
          
//           <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 mb-12">
//             <button
//               onClick={handleSellClick}
//               className="group bg-gradient-to-r from-purple-600 to-indigo-700 text-white px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 text-xl font-medium"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//               </svg>
//               Start Selling
//             </button>

//             <button
//               onClick={handleBuyClick}
//               className="group bg-gradient-to-r from-cyan-600 to-blue-700 text-white px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 text-xl font-medium"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
//               </svg>
//               Browse Products
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="bg-gray-900 py-16">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">Night Owl Advantages</h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {features.map((feature, index) => (
//               <div key={index} className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl hover:shadow-purple-500/10 transition-shadow border border-gray-700 hover:border-indigo-700 transform hover:-translate-y-1 transition-transform duration-300">
//                 <div className="text-cyan-400 mb-4">
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2 text-gray-100">{feature.title}</h3>
//                 <p className="text-gray-400">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* How It Works */}
//       <div className="bg-gradient-to-br from-gray-900 to-indigo-950 py-16">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">How The Night Market Works</h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//             <div className="flex flex-col items-center text-center">
//               <div className="w-16 h-16 bg-indigo-900 rounded-full flex items-center justify-center mb-4">
//                 <span className="text-2xl font-bold text-cyan-400">1</span>
//               </div>
//               <h3 className="text-xl font-semibold mb-2 text-gray-100">Join After Hours</h3>
//               <p className="text-gray-400">Sign in with your credentials to access night market features</p>
//             </div>
            
//             <div className="flex flex-col items-center text-center">
//               <div className="w-16 h-16 bg-indigo-900 rounded-full flex items-center justify-center mb-4">
//                 <span className="text-2xl font-bold text-cyan-400">2</span>
//               </div>
//               <h3 className="text-xl font-semibold mb-2 text-gray-100">Explore Midnight Deals</h3>
//               <p className="text-gray-400">Browse special late-night offerings or list your own items</p>
//             </div>
            
//             <div className="flex flex-col items-center text-center">
//               <div className="w-16 h-16 bg-indigo-900 rounded-full flex items-center justify-center mb-4">
//                 <span className="text-2xl font-bold text-cyan-400">3</span>
//               </div>
//               <h3 className="text-xl font-semibold mb-2 text-gray-100">Night Owl Exchange</h3>
//               <p className="text-gray-400">Connect with other late-night learners and complete your transaction</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Testimonials */}
//       <div className="bg-gray-900 py-16">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12 text-purple-400">Night Owl Stories</h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//             {testimonials.map((testimonial, index) => (
//               <div key={index} className="bg-gradient-to-br from-indigo-900 to-purple-900 p-1 rounded-xl">
//                 <div className="bg-gray-800 h-full p-6 rounded-lg shadow-md flex flex-col">
//                   <div className="flex items-center mb-4">
//                     <div className="w-10 h-10 rounded-full bg-indigo-700 flex items-center justify-center text-white font-semibold mr-3">
//                       {testimonial.avatar}
//                     </div>
//                     <div>
//                       <h4 className="font-medium text-gray-100">{testimonial.name}</h4>
//                       <p className="text-sm text-gray-400">{testimonial.role}</p>
//                     </div>
//                   </div>
//                   <p className="text-gray-300 italic flex-1">"{testimonial.quote}"</p>
//                   <div className="mt-4 flex">
//                     {[...Array(5)].map((_, i) => (
//                       <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400" viewBox="0 0 20 20" fill="currentColor">
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                       </svg>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Call to Action */}
//       <div className="bg-gradient-to-r from-indigo-900 to-purple-900 py-16 text-center">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-white mb-6">Join the Night Market</h2>
//           <p className="text-blue-200 mb-8 max-w-2xl mx-auto">Connect with fellow night owls and discover resources specially designed for after-hours studying</p>
          
//           <div className="flex flex-col sm:flex-row gap-6 justify-center">
//             <button
//               onClick={handleSellClick}
//               className="bg-cyan-600 text-white px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition font-medium"
//             >
//               Start Selling
//             </button>

//             <button
//               onClick={handleBuyClick}
//               className="bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-cyan-500/20 hover:bg-cyan-900 hover:bg-opacity-20 transition font-medium"
//             >
//               Browse Products
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
