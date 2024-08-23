import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    const username = document.querySelector('input[name="username"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;

    if (username && email && password) {
      setIsAuthenticated(true);
      navigate('/addque');
    } else {
      alert('Please enter all required fields');
    }
  };

  return (
    <div className="bg-[#37beb0] min-h-screen w-screen items-center flex justify-center p-4">
      <div className="bg-[#dbf5f0] mt-32 shadow-md p-4 rounded-lg w-full max-w-md hover:p-5">
        <h1 className="text-3xl font-bold mb-4 text-center text-[#0c6170]">
          Log <span className="text-[#0c6170]">in</span>
        </h1>
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Enter username"
            name="username"
            className="w-full p-2 border border-yellow-600 rounded-md focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 hover:border-yellow-800 transition duration-300"
            required
          />
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            className="w-full p-2 border border-yellow-600 rounded-md focus:border-yellow-500 focus:ring-1 focus:ring-yellow-700 hover:border-yellow-800 transition duration-300"
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            className="w-full p-2 border border-yellow-600 rounded-md focus:border-yellow-500 focus:ring-1 focus:ring-yellow-700 hover:border-yellow-800 transition duration-300"
            required
          />
          <button
            type="submit"
            onClick={handleLogin}
            className="w-full py-3 px-4 bg-[#0c6170] text-[#dbf5f0] font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition duration-300"
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
