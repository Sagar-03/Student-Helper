import React, { useState } from "react";
import Navbar from "../components/Navbar";
import BackButton from "../components/BackButton";

const topLinks = [];

const handleBuyClick = () => {
  navigate("/all-products");
};

export default function StudySwap() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigateTo = (path) => {
    console.log(`Navigating to: ${path}`);
  };

  const handleWriterClick = () => {
    if (!isLoggedIn) {
      navigateTo("/login");
      setIsLoggedIn(true);
    } else {
      navigateTo("/writer-dashboard");
    }
  };

  const handleClientClick = () => {
    navigateTo("/all-services");
  };

  const features = [
    {
      title: "Professional Academic Writing",
      description:
        "Get help with research papers, essays, case studies, and dissertations from qualified student writers",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
        </svg>
      ),
    },
    {
      title: "Peer-Reviewed Assignments",
      description:
        "Connect with top-performing students in your field who understand your course requirements",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Subject Matter Experts",
      description:
        "Find specialized writers across all academic disciplines from STEM to humanities",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      title: "Guaranteed Quality",
      description:
        "All work is checked for plagiarism and meets academic standards with revision options",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
  ];

  const testimonials = [
    {
      name: "Alex Chen",
      role: "Engineering Major",
      content: "StudySwap helped me balance my heavy course load with part-time work. The writer I connected with delivered an excellent research paper that earned me an A.",
      avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    },
    {
      name: "Sarah Johnson",
      role: "Psychology Student",
      content: "As someone who struggles with technical writing, finding a peer who could help with my statistics assignment was a game-changer. Highly recommend!",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Miguel Torres",
      role: "Business Major",
      content: "The quality of work I received exceeded my expectations. Clear communication throughout the process and delivered ahead of deadline.",
      avatar: "https://randomuser.me/api/portraits/men/35.jpg",
    }
  ];

  const faqItems = [
    {
      question: "How does StudySwap ensure academic integrity?",
      answer: "StudySwap provides writing assistance as a learning aid. Our writers help students understand complex topics and demonstrate proper formatting and research methods. All final submissions should be used as reference material only."
    },
    {
      question: "What types of assignments can I get help with?",
      answer: "Our student writers can assist with essays, research papers, case studies, literature reviews, lab reports, presentations, and more across virtually all academic disciplines."
    },
    {
      question: "How are prices determined?",
      answer: "Pricing is based on factors including assignment complexity, word count, deadline, and academic level. Writers set their own rates, allowing you to find options that fit your budget."
    },
    {
      question: "What if I'm not satisfied with the work?",
      answer: "StudySwap includes a revision policy where you can request changes if the assignment doesn't meet the agreed specifications. We aim for 100% satisfaction with every project."
    }
  ];

  const quickActions = [
    {
      title: "Research Papers",
      description: "Professional academic research assistance with proper citations and references",
      icon: "📑",
      color: "from-blue-600 to-blue-400"
    },
    {
      title: "Essay Writing",
      description: "Well-structured essays with compelling arguments and clear thesis statements",
      icon: "✏️",
      color: "from-purple-600 to-purple-400"
    },
    {
      title: "Technical Reports",
      description: "Detailed analysis and presentation of technical data and findings",
      icon: "📊",
      color: "from-indigo-600 to-indigo-400"
    },
    {
      title: "Thesis Support",
      description: "Comprehensive assistance with thesis planning, research, and writing",
      icon: "🎓",
      color: "from-teal-600 to-teal-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="w-full shadow-sm bg-white bg-opacity-90 sticky top-0 z-10">
        <Navbar links={topLinks} />
      </div>

      <div className="container mx-auto px-4 pt-4">
        <BackButton />
      </div>

      {/* Hero Section - Centered without image */}
      <div className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-5"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700">
              Academic Excellence Made Accessible
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
              Connect with skilled student writers who understand your assignments. Get quality papers, essays, and research help tailored to your academic needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button
                onClick={handleWriterClick}
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-10 py-5 rounded-xl shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-3 font-bold text-lg"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute -inset-x-2 bottom-0 h-1 bg-blue-300 opacity-50 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
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
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span>Find a Writer</span>
                </span>
              </button>
            </div>
          </div>
          
          {/* Quick Action Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {quickActions.map((action, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-xl p-6 shadow-lg border border-indigo-100 hover:shadow-xl transition-all hover:transform hover:-translate-y-1 group"
              >
                <div className={`w-14 h-14 mb-4 rounded-lg bg-gradient-to-r ${action.color} flex items-center justify-center text-2xl`}>
                  {action.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-indigo-700 transition-colors">
                  {action.title}
                </h3>
                <p className="text-gray-600">
                  {action.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 text-gray-800">
            Academic Support for Every Need
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Our platform connects you with skilled writers who can help with various assignment types
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-6xl mx-auto">
            {[
              {icon: "📝", name: "Essays & Papers"}, 
              {icon: "📊", name: "Research Projects"},
              {icon: "📚", name: "Literature Reviews"},
              {icon: "🧪", name: "Lab Reports"},
              {icon: "📈", name: "Case Studies"},
              {icon: "🎭", name: "Creative Writing"},
              {icon: "🔬", name: "Technical Papers"},
              {icon: "📋", name: "Thesis Support"}
            ].map((item, i) => (
              <div key={i} className="bg-indigo-50/50 rounded-xl p-6 hover:bg-indigo-100/80 transition-all hover:shadow-md">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-gray-800 text-lg">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 bg-gradient-to-b from-white to-indigo-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 text-gray-800">
            Why Students Choose StudySwap
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Our platform is designed specifically for students, by students, with features that address your academic needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md border border-indigo-100 hover:shadow-lg transition-all hover:border-indigo-300 flex flex-col h-full"
              >
                <div className="text-indigo-600 mb-6 bg-indigo-50 p-4 rounded-lg inline-block">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-lg flex-grow">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            How StudySwap Works
          </h2>
          <p className="text-center text-indigo-100 mb-16 max-w-3xl mx-auto text-lg">
            Getting academic help has never been easier with our streamlined process
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto relative">
            <div className="hidden md:block absolute top-1/3 left-0 right-0 h-2 bg-indigo-500/60 -translate-y-1/2 z-0 rounded-full"></div>
            
            <div className="bg-white text-gray-800 rounded-xl p-8 shadow-xl relative z-10 transform hover:-translate-y-2 transition-transform">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-blue-500 rounded-full flex items-center justify-center mb-8 mx-auto text-white font-bold text-2xl shadow-lg">1</div>
              <h3 className="text-xl font-bold mb-4 text-center text-indigo-800">
                Submit Your Requirements
              </h3>
              <p className="text-gray-600 text-center">
                Share your assignment details, deadline, and specific instructions to find the right match
              </p>
            </div>

            <div className="bg-white text-gray-800 rounded-xl p-8 shadow-xl relative z-10 transform hover:-translate-y-2 transition-transform">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-blue-500 rounded-full flex items-center justify-center mb-8 mx-auto text-white font-bold text-2xl shadow-lg">2</div>
              <h3 className="text-xl font-bold mb-4 text-center text-indigo-800">
                Connect With Writers
              </h3>
              <p className="text-gray-600 text-center">
                Review profiles, qualifications, and ratings to select the perfect writer for your subject
              </p>
            </div>

            <div className="bg-white text-gray-800 rounded-xl p-8 shadow-xl relative z-10 transform hover:-translate-y-2 transition-transform">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-blue-500 rounded-full flex items-center justify-center mb-8 mx-auto text-white font-bold text-2xl shadow-lg">3</div>
              <h3 className="text-xl font-bold mb-4 text-center text-indigo-800">
                Receive Quality Work
              </h3>
              <p className="text-gray-600 text-center">
                Get your completed assignment with time for review and any needed revisions before your deadline
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 text-gray-800">
            What Students Are Saying
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Join thousands of satisfied students who have improved their academic performance with StudySwap
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <div 
                key={idx} 
                className="bg-gradient-to-br from-gray-50 to-indigo-50/30 p-8 rounded-xl shadow-sm border border-indigo-100 hover:shadow-md transition-all"
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full mr-4 border-2 border-indigo-300 shadow-sm"
                  />
                  <div>
                    <h4 className="font-bold text-lg text-gray-800">{testimonial.name}</h4>
                    <p className="text-indigo-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic text-lg leading-relaxed">"{testimonial.content}"</p>
                <div className="mt-6 flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 bg-indigo-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 text-gray-800">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Get answers to common questions about our academic services
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqItems.map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-sm p-6 border border-indigo-100">
                <h3 className="text-lg font-semibold text-indigo-800 mb-2">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Academic Impact
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-5xl font-bold text-white mb-2">15,000+</h3>
              <p className="text-lg opacity-90">Completed Assignments</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-5xl font-bold text-white mb-2">97%</h3>
              <p className="text-lg opacity-90">Satisfaction Rate</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-5xl font-bold text-white mb-2">4,500+</h3>
              <p className="text-lg opacity-90">Student Writers</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-5xl font-bold text-white mb-2">50+</h3>
              <p className="text-lg opacity-90">Academic Disciplines</p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white py-20 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-white rounded-full"></div>
              <div className="absolute top-20 right-10 w-24 h-24 bg-white rounded-full"></div>
              <div className="absolute bottom-10 left-1/3 w-32 h-32 bg-white rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Excel in Your Academic Journey?
              </h2>
              <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg">
                Join StudySwap today and connect with student writers who understand your academic challenges
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button
                  onClick={handleWriterClick}
                  className="bg-white text-indigo-600 px-8 py-4 rounded-lg hover:shadow-lg transition font-bold text-lg"
                >
                  Become a Writer
                </button>

                <button
                  onClick={handleClientClick}
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition font-bold text-lg"
                >
                  Find Academic Help
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
