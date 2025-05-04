import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../axiosConfig';
import Navbar from '../components/Navbar';
import NavbarSide from '../components/NavbarSide';
import BackButton from '../components/BackButton';

export default function Upload() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: '',
    description: '',
    price: '',
    sellerName: '',
    whatsappNumber: ''
  });
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Check if user is logged in
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      // Redirect to login page if not logged in
      navigate('/login', { state: { from: '/upload' } });
    }
  }, [navigate]);

  const topLinks = [
    
  ];

  const sideLinks = [
    { to: "/upload", label: "Upload File" },
    { to: "/purchases", label: "My Purchases" },
    { to: "/sells", label: "My Sells" },
    { to: "/all-products", label: "Browse Products" },
  ];

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      
      // Create a preview URL for the selected image
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPreviewUrl(fileReader.result);
      };
      fileReader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    const formData = new FormData();
    for (const key in data) formData.append(key, data[key]);
    formData.append('image', file);

    try {
      await axios.post('/product/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setSuccess('Product uploaded successfully!');
      // Reset form after successful upload
      setData({
        title: '',
        description: '',
        price: '',
        sellerName: '',
        whatsappNumber: ''
      });
      setFile(null);
      setPreviewUrl(null);
      
      // Navigate to sells page after 2 seconds
      setTimeout(() => {
        navigate('/sells');
      }, 2000);
    } catch (error) {
      setError('Upload failed: ' + (error.response?.data?.msg || error.message));
      console.error('Upload Error:', error.response?.data || error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-indigo-100">
      {/* Sidebar */}
      <div className="w-64 shadow-md">
        <NavbarSide links={sideLinks} />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <div className="w-full">
          <Navbar links={topLinks} />
        </div>
        
        {/* Back Button */}
        <BackButton />

        {/* Form Section */}
        <div className="flex-1 flex items-center justify-center p-6">
          {/* Decorative elements */}
          <div className="absolute top-32 left-1/4 w-24 h-24 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-32 right-1/4 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-32 left-1/3 w-36 h-36 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
          
          <div className="bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-2xl">
            <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent mb-6">
              Upload Your Product
            </h2>
            
            {error && (
              <div className="p-4 mb-6 bg-red-100 text-red-700 rounded-lg text-center">
                {error}
              </div>
            )}
            
            {success && (
              <div className="p-4 mb-6 bg-green-100 text-green-700 rounded-lg text-center">
                {success}
              </div>
            )}

            <form className="flex flex-col md:flex-row gap-6" onSubmit={handleSubmit}>
              {/* Left side - Form fields */}
              <div className="flex-1 flex flex-col gap-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input
                    className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder='Product Title'
                    value={data.title}
                    onChange={(e) => setData({ ...data, title: e.target.value })}
                    required
                  />
                </div>
                
                <div className="relative">
                  <div className="absolute top-3 left-3 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <textarea
                    className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder='Description'
                    rows={3}
                    value={data.description}
                    onChange={(e) => setData({ ...data, description: e.target.value })}
                    required
                  />
                </div>
                
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input
                    className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder='Price (₹)'
                    type='number'
                    value={data.price}
                    onChange={(e) => setData({ ...data, price: e.target.value })}
                    required
                  />
                </div>
                
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input
                    className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder='Your Name'
                    value={data.sellerName}
                    onChange={(e) => setData({ ...data, sellerName: e.target.value })}
                    required
                  />
                </div>
                
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input
                    className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder='WhatsApp Number'
                    value={data.whatsappNumber}
                    onChange={(e) => setData({ ...data, whatsappNumber: e.target.value })}
                    required
                  />
                </div>
              </div>
              
              {/* Right side - Image preview and upload */}
              <div className="flex-1 flex flex-col justify-between gap-4">
                <div className="border-2 border-dashed border-blue-300 rounded-lg p-4 flex flex-col items-center justify-center bg-blue-50 h-48 md:h-auto transition-all hover:border-blue-500">
                  {previewUrl ? (
                    <img src={previewUrl} alt="Preview" className="max-h-32 md:max-h-48 object-contain" />
                  ) : (
                    <div className="text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm text-gray-500 mt-2">Product image preview will appear here</p>
                    </div>
                  )}
                </div>
                
                <div className="relative">
                  <input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                    accept="image/*"
                    required={!file}
                  />
                  <label
                    htmlFor="file-upload"
                    className="w-full flex items-center justify-center gap-2 p-3 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors cursor-pointer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    {file ? 'Change Image' : 'Upload Image'}
                  </label>
                  {file && (
                    <p className="mt-2 text-xs text-gray-500 truncate text-center">
                      {file.name}
                    </p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className="p-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 font-medium"
                >
                  {isLoading ? (
                    <div className="flex justify-center items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Uploading...
                    </div>
                  ) : 'Upload Product'}
                </button>
              </div>
            </form>
            
            {/* Tips Section */}
            <div className="mt-8 bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-800 mb-2">Product Upload Tips</h4>
              <ul className="text-sm text-blue-700 ml-5 list-disc">
                <li>Add a clear and descriptive title</li>
                <li>Include detailed information about the condition</li>
                <li>Set a reasonable price for fellow students</li>
                <li>Upload a clear, well-lit photo of the product</li>
                <li>Provide accurate contact information</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
