import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from '../axiosConfig';
import BackButton from '../components/BackButton';
import Navbar from '../components/Navbar';

export default function GoogleClassroom() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [googleAuth, setGoogleAuth] = useState(null);
  const [courses, setCourses] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('courses');
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  // Check for URL params on initial load - useful for handling redirects
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const token = query.get('token');
    const error = query.get('error');
    
    if (token) {
      // Store the token and clear URL parameters
      localStorage.setItem('googleToken', token);
      window.history.replaceState({}, document.title, '/googleclassroom');
      
      // Proceed with authentication
      handleAuthentication(token);
    } else if (error) {
      // Handle error from OAuth
      setError({
        type: 'GENERAL',
        message: decodeURIComponent(error)
      });
      window.history.replaceState({}, document.title, '/googleclassroom');
    } else {
      // Check if user is already authenticated with Google
      checkGoogleAuth();
    }
  }, [location.search]);

  const checkGoogleAuth = async () => {
    try {
      const token = localStorage.getItem('googleToken');
      if (token) {
        // Verify token validity
        setLoading(true);
        const response = await axios.post('/google/verify-token', { token });
        if (response.data.valid) {
          setGoogleAuth({
            token,
            user: response.data.user
          });
          setIsLoggedIn(true);
          fetchClassroomData(token);
        } else {
          // Token expired, clear it
          localStorage.removeItem('googleToken');
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    } catch (err) {
      console.error("Error checking Google auth:", err);
      localStorage.removeItem('googleToken');
      setLoading(false);
    }
  };

  const handleAuthentication = async (token) => {
    setLoading(true);
    try {
      const response = await axios.post('/google/verify-token', { token });
      if (response.data.valid) {
        setGoogleAuth({
          token,
          user: response.data.user
        });
        setIsLoggedIn(true);
        fetchClassroomData(token);
        
        // Show success message
        const notification = new Notification("Google Classroom Connected", {
          body: "Successfully connected to Google Classroom",
          icon: "/favicon.ico"
        });
      } else {
        setError({
          type: 'GENERAL',
          message: "Authentication failed. Please try again."
        });
        localStorage.removeItem('googleToken');
        setLoading(false);
      }
    } catch (err) {
      console.error("Error during authentication:", err);
      setError({
        type: 'GENERAL',
        message: "Authentication error. Please try again."
      });
      localStorage.removeItem('googleToken');
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setError(null);
      
      // Get the correct API URL for the current environment
      const isDevelopment = import.meta.env.MODE === 'development';
      const apiUrl = isDevelopment 
        ? 'http://localhost:5000'
        : 'https://student-helper-b5j4.onrender.com';
      
      // Remove any trailing slash and ensure we don't duplicate /api
      const baseUrl = apiUrl.replace(/\/$/, '');
      const authUrl = `${baseUrl}/api/google/auth?source=classroom`;
      
      console.log('Environment:', import.meta.env.MODE);
      console.log('Is Development:', isDevelopment);
      console.log('API URL:', apiUrl);
      console.log('Redirecting to Google OAuth:', authUrl);
      
      // Open in same window to avoid popup blockers
      window.location.href = authUrl;
    } catch (err) {
      setError({
        type: 'GENERAL',
        message: "Failed to authenticate with Google. Please try again."
      });
      console.error("Google login error:", err);
    }
  };

  const fetchClassroomData = async (token) => {
    setLoading(true);
    try {
      // Get courses
      const coursesResponse = await axios.get('/google/courses', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setCourses(coursesResponse.data);

      // Get all assignments from all courses
      const allAssignments = [];
      for (const course of coursesResponse.data) {
        try {
          const assignmentsResponse = await axios.get(`/google/courses/${course.id}/assignments`, {
            headers: { Authorization: `Bearer ${token}` }
          });
          
          // Add course information to each assignment
          const courseAssignments = assignmentsResponse.data.map(assignment => ({
            ...assignment,
            courseName: course.name,
            courseId: course.id
          }));
          
          allAssignments.push(...courseAssignments);
        } catch (err) {
          console.error(`Failed to fetch assignments for course ${course.id}:`, err);
        }
      }
      
      // Sort assignments by due date
      allAssignments.sort((a, b) => {
        if (!a.dueDate) return 1;
        if (!b.dueDate) return -1;
        return new Date(a.dueDate) - new Date(b.dueDate);
      });
      
      setAssignments(allAssignments);
      
      // Check notification status - TODO: implement notification status endpoint
      /*
      try {
        const notifResponse = await axios.get('/google/notifications/status', {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        setNotificationsEnabled(notifResponse.data.enabled);
      } catch (err) {
        console.error("Failed to check notification status:", err);
      }
      */
      
    } catch (err) {
      console.error("Google Classroom data fetch error:", err);
      
      // Check if it's an API not enabled error
      if (err.response?.status === 403 && err.response?.data?.error === 'API_NOT_ENABLED') {
        setError({
          type: 'API_NOT_ENABLED',
          message: err.response.data.message,
          enableUrl: err.response.data.enableUrl
        });
      } else {
        setError({
          type: 'GENERAL',
          message: "Failed to fetch Google Classroom data. Please try again."
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const enableNotifications = async () => {
    try {
      if (!('Notification' in window)) {
        alert("This browser does not support desktop notifications");
        return;
      }

      const permission = await Notification.requestPermission();
      
      if (permission === "granted") {
        setNotificationsEnabled(true);
        // Register for notifications on the backend
        await axios.post('/google/notifications/enable', {
          userId: googleAuth.user.email,
          token: googleAuth.token
        });
        
        // Show success notification
        new Notification("Student Helper", {
          body: "You will now receive assignment reminders before deadlines!",
          icon: "/logo.png"
        });
      } else {
        alert("Permission for notifications was denied");
      }
    } catch (err) {
      console.error("Error enabling notifications:", err);
      setError({
        type: 'GENERAL',
        message: "Failed to enable notifications. Please try again."
      });
    }
  };

  const formatDueDate = (dueDate) => {
    if (!dueDate) return "No due date";
    const date = new Date(dueDate);
    const now = new Date();
    
    // Calculate days difference
    const diffTime = date.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    // Date formatter
    const formatter = new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
    // Time formatter
    const timeFormatter = new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
    
    if (date < now) {
      return `Overdue - ${formatter.format(date)}`;
    } else if (diffDays === 0) {
      return `Due today at ${timeFormatter.format(date)}`;
    } else if (diffDays === 1) {
      return `Due tomorrow at ${timeFormatter.format(date)}`;
    } else if (diffDays < 7) {
      return `Due in ${diffDays} days - ${formatter.format(date).split(',')[0]}`;
    } else {
      return `Due on ${formatter.format(date)}`;
    }
  };

  const getDueDateClass = (dueDate) => {
    if (!dueDate) return "text-gray-500";
    const date = new Date(dueDate);
    const now = new Date();
    
    // Calculate days difference
    const diffTime = date.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (date < now) {
      return "text-red-600 font-semibold";
    } else if (diffDays <= 2) {
      return "text-orange-600 font-semibold";
    } else {
      return "text-green-600";
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('googleToken');
    setGoogleAuth(null);
    setIsLoggedIn(false);
    setCourses([]);
    setAssignments([]);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-indigo-100">
      {/* Main content area */}
      <div className="flex flex-col flex-1">
        {/* Top Navbar */}
        <div className="w-full">
          <Navbar 
            isLoggedIn={isLoggedIn} 
            links={[
              { to: "/dashboard", label: "Dashboard" },
              { to: "/notes", label: "Notes" }
            ]}
          />
        </div>

        {/* Back Button */}
        <BackButton />

        {/* Google Classroom content */}
        <div className="flex flex-col items-center justify-center flex-1 py-8 px-6">
          {/* Decorative elements */}
          <div className="absolute top-32 left-1/4 w-24 h-24 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-32 right-1/4 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-32 left-1/3 w-36 h-36 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
          
          <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg p-8 rounded-2xl shadow-xl z-10 w-full max-w-6xl">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Google Classroom
              </h1>

              {isLoggedIn && googleAuth?.user && (
                <div className="flex items-center">
                  <img 
                    src={googleAuth.user.picture} 
                    alt={googleAuth.user.name}
                    className="h-10 w-10 rounded-full mr-3" 
                  />
                  <div>
                    <p className="text-gray-800 font-medium">{googleAuth.user.name}</p>
                    <p className="text-gray-500 text-sm">{googleAuth.user.email}</p>
                  </div>
                  <button 
                    onClick={handleLogout}
                    className="ml-4 px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-lg transition-colors"
                  >
                    Log out
                  </button>
                </div>
              )}
            </div>

            {error && (
              <div className={`border-l-4 p-4 mb-6 rounded ${
                error.type === 'API_NOT_ENABLED' 
                  ? 'bg-yellow-100 border-yellow-500 text-yellow-700' 
                  : 'bg-red-100 border-red-500 text-red-700'
              }`}>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    {error.type === 'API_NOT_ENABLED' ? (
                      <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">
                      {error.type === 'API_NOT_ENABLED' ? 'Google Classroom API not enabled' : 'Error'}
                    </p>
                    <p className="mt-1">
                      {typeof error === 'string' ? error : error.message}
                    </p>
                    {error.type === 'API_NOT_ENABLED' && error.enableUrl && (
                      <div className="mt-3">
                        <a 
                          href={error.enableUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-yellow-700 bg-yellow-200 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                        >
                          Enable Google Classroom API
                          <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                        <p className="mt-2 text-sm">
                          After enabling the API, wait a few minutes and then try again.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {!isLoggedIn && !loading ? (
              <div className="text-center py-12">
                <div className="mx-auto w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5-9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Connect with Google Classroom</h2>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  Sign in with your Google account to see your classes, assignments and get deadline reminders.
                </p>
                <button
                  onClick={handleGoogleLogin}
                  className="px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center justify-center border border-gray-300"
                >
                  <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" className="w-6 h-6 mr-3" />
                  <span className="font-medium text-gray-700">Sign in with Google</span>
                </button>
              </div>
            ) : loading ? (
              <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
              </div>
            ) : (
              <>
                {/* Tab navigation */}
                <div className="flex border-b border-gray-200 mb-6">
                  <button
                    className={`py-2 px-4 font-medium text-sm border-b-2 mr-4 ${
                      activeTab === 'courses'
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => setActiveTab('courses')}
                  >
                    My Courses
                  </button>
                  <button
                    className={`py-2 px-4 font-medium text-sm border-b-2 mr-4 ${
                      activeTab === 'assignments'
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => setActiveTab('assignments')}
                  >
                    Assignments
                  </button>
                  <button
                    className={`py-2 px-4 font-medium text-sm border-b-2 ${
                      activeTab === 'notifications'
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => setActiveTab('notifications')}
                  >
                    Notifications
                  </button>
                </div>

                {/* Tab content */}
                {activeTab === 'courses' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {courses.length > 0 ? (
                      courses.map(course => (
                        <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                          <div 
                            className="h-3"
                            style={{ 
                              backgroundColor: course.courseState === 'ACTIVE' ? '#4CAF50' : '#9E9E9E' 
                            }} 
                          />
                          <div className="p-4">
                            <h3 className="font-semibold text-lg text-gray-800 mb-1">{course.name}</h3>
                            <p className="text-gray-600 text-sm mb-2">{course.section || 'No section'}</p>
                            <p className="text-gray-500 text-sm">{course.teacherNames?.join(', ') || 'No teacher listed'}</p>
                            
                            <div className="mt-4 flex justify-between items-center">
                              <span className={`text-xs px-2 py-1 rounded-full ${
                                course.courseState === 'ACTIVE' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-gray-100 text-gray-800'
                              }`}>
                                {course.courseState}
                              </span>
                              
                              <a 
                                href={course.alternateLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-600 text-sm hover:underline"
                              >
                                Open in Classroom
                              </a>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="col-span-3 text-center py-10 bg-gray-50 rounded-lg">
                        <p className="text-gray-600">No courses found</p>
                        <p className="text-gray-500 text-sm mt-1">You don't have any Google Classroom courses</p>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'assignments' && (
                  <div className="space-y-4">
                    {assignments.length > 0 ? (
                      assignments.map(assignment => (
                        <div key={assignment.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
                          <div className="p-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-semibold text-lg text-gray-800 mb-1">{assignment.title}</h3>
                                <p className="text-blue-600 text-sm mb-2">{assignment.courseName}</p>
                              </div>
                              <span className={`text-sm ${getDueDateClass(assignment.dueDate)}`}>
                                {formatDueDate(assignment.dueDate)}
                              </span>
                            </div>
                            
                            {assignment.description && (
                              <div className="mt-2 text-sm text-gray-600 border-l-2 border-gray-200 pl-3">
                                {assignment.description.length > 200 
                                  ? `${assignment.description.substring(0, 200)}...` 
                                  : assignment.description
                                }
                              </div>
                            )}
                            
                            <div className="mt-3 flex justify-between items-center">
                              <div className="flex items-center">
                                <span className={`px-2 py-1 text-xs rounded-full ${
                                  assignment.state === 'TURNED_IN' 
                                    ? 'bg-blue-100 text-blue-800' 
                                    : assignment.state === 'RETURNED'
                                      ? 'bg-green-100 text-green-800'
                                      : 'bg-yellow-100 text-yellow-800'
                                }`}>
                                  {assignment.state || 'ASSIGNED'}
                                </span>
                                
                                {assignment.maxPoints && (
                                  <span className="ml-2 text-xs text-gray-600">
                                    {assignment.maxPoints} points
                                  </span>
                                )}
                              </div>
                              <a 
                                href={assignment.alternateLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-600 text-sm hover:underline"
                              >
                                Open assignment
                              </a>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-10 bg-gray-50 rounded-lg">
                        <p className="text-gray-600">No assignments found</p>
                        <p className="text-gray-500 text-sm mt-1">You don't have any assignments in your courses</p>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'notifications' && (
                  <div className="bg-white rounded-lg p-6 border border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Assignment Reminders</h3>
                    
                    <p className="text-gray-600 mb-6">
                      Get notified before your assignments are due. We'll send you reminders so you never miss a deadline.
                    </p>
                    
                    {notificationsEnabled ? (
                      <div className="bg-green-100 text-green-800 p-4 rounded-lg flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <p className="font-medium">Notifications enabled</p>
                          <p className="text-sm mt-1">You'll receive reminders for upcoming assignment deadlines</p>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="bg-yellow-50 text-yellow-800 p-4 rounded-lg">
                          <p className="font-medium">Notifications are currently disabled</p>
                          <p className="text-sm mt-1">Enable notifications to get reminders before deadlines</p>
                        </div>
                        <button
                          onClick={enableNotifications}
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                          </svg>
                          Enable Notifications
                        </button>
                      </div>
                    )}
                    
                    <div className="mt-8">
                      <h4 className="font-medium text-gray-800 mb-3">Notification Settings</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-gray-800">Reminder 24 hours before deadline</p>
                            <p className="text-gray-500 text-sm">Get notified a day before assignments are due</p>
                          </div>
                          <label className="flex items-center cursor-pointer">
                            <div className="relative">
                              <input 
                                type="checkbox" 
                                className="sr-only" 
                                defaultChecked={notificationsEnabled} 
                                disabled={!notificationsEnabled}
                              />
                              <div className={`w-10 h-5 ${notificationsEnabled ? 'bg-blue-600' : 'bg-gray-300'} rounded-full shadow-inner`}></div>
                              <div className={`dot absolute w-4 h-4 bg-white rounded-full shadow -top-0.5 transition ${notificationsEnabled ? 'right-0.5' : 'left-0.5'}`}></div>
                            </div>
                          </label>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-gray-800">Reminder on due date</p>
                            <p className="text-gray-500 text-sm">Get notified on the day assignments are due</p>
                          </div>
                          <label className="flex items-center cursor-pointer">
                            <div className="relative">
                              <input 
                                type="checkbox" 
                                className="sr-only" 
                                defaultChecked={notificationsEnabled} 
                                disabled={!notificationsEnabled}
                              />
                              <div className={`w-10 h-5 ${notificationsEnabled ? 'bg-blue-600' : 'bg-gray-300'} rounded-full shadow-inner`}></div>
                              <div className={`dot absolute w-4 h-4 bg-white rounded-full shadow -top-0.5 transition ${notificationsEnabled ? 'right-0.5' : 'left-0.5'}`}></div>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
        
        <div className="py-6 text-center text-gray-500 text-sm">
          <p>© 2025 Student Helper | Connected with Google Classroom</p>
        </div>
      </div>
    </div>
  );
}
