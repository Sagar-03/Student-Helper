import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import NavbarSide from '../components/NavbarSide';
import BackButton from '../components/BackButton';
import axios from '../axiosConfig';

export default function GoogleClassroom() {
  const navigate = useNavigate();
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  const topLinks = [
    { to: "/dashboard", label: "Dashboard" },
    { to: "/marketplace", label: "Marketplace" },
  ];

  const sideLinks = [
    { to: "/upload", label: "Upload File" },
    { to: "/purchases", label: "My Purchases" },
    { to: "/sells", label: "My Sells" },
    { to: "/all-products", label: "Browse Products" },
  ];

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/googleclassroom/classes', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setClasses(response.data.classes || []);
      } catch (error) {
        console.error('Failed to fetch classes', error);
        if (error.response?.status === 401) {
          navigate('/login', { state: { from: '/googleclassroom' } });
        }
      } finally {
        setLoading(false);
      }
    };

    fetchClasses();
  }, [navigate]);

  return (
    <>
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <div className="w-64 bg-gray-100">
          <NavbarSide links={sideLinks} />
        </div>

        {/* Main content */}
        <div className="flex flex-col flex-1">
          {/* Top Navbar */}
          <div className="w-full bg-gray-100">
            <Navbar links={topLinks} />
          </div>

          {/* Back Button */}
          <BackButton />

          <div className="min-h-screen bg-gray-100 pt-20 p-8">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-3xl font-bold text-purple-700 mb-6 text-center">
                🎓 Google Classroom
              </h1>

              {loading ? (
                <div className="flex justify-center items-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
                </div>
              ) : classes.length === 0 ? (
                <div className="text-center text-gray-500">No classes available.</div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {classes.map((classroom, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition"
                    >
                      <h2 className="text-xl font-bold text-gray-800 mb-2">{classroom.name}</h2>
                      <p className="text-gray-600 mb-4">{classroom.section}</p>
                      <a
                        href={classroom.alternateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        Open Classroom
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
