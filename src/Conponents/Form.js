import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Form = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    username: '',
    phonenumber: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('data=>', formData);
    try {
      const response = await axios.post(
        'http://localhost:5000/submit',
        formData
      );
      console.log('Form submitted successfully:', response.data);
      if (response.data.message === 'User registered successfully') {
        navigate('/log');
      } else {
        alert('Registration failed.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // alert('Failed to sign up.');
    }
  };

  return (
    <div className="bg-[#37beb0] min-h-screen w-screen items-center flex justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#dbf5f0] mt-32 shadow-md p-4 rounded-lg w-full max-w-md hover:p-5"
      >
        <h1 className="text-3xl font-bold mb-4 text-center text-[#0c6170]">
          Sign <span className="text-[#0c6170]">in</span>
        </h1>
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Enter your Full Name"
            name="fullname"
            onChange={handleChange}
            className="w-full p-2 border border-yellow-600 rounded-md focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 hover:border-yellow-800 transition duration-300"
            required
          />
          <input
            type="text"
            placeholder="Enter username"
            name="username"
            onChange={handleChange}
            className="w-full p-2 border border-yellow-600 rounded-md focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 hover:border-yellow-800 transition duration-300"
            required
          />
          <input
            type="number"
            placeholder="Enter your Phone Number"
            name="phonenumber"
            onChange={handleChange}
            className="w-full p-2 border border-yellow-600 rounded-md focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 hover:border-yellow-800 transition duration-300"
            required
          />
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            onChange={handleChange}
            className="w-full p-2 border border-yellow-600 rounded-md focus:border-yellow-500 focus:ring-1 focus:ring-yellow-700 hover:border-yellow-800 transition duration-300"
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            onChange={handleChange}
            className="w-full p-2 border border-yellow-600 rounded-md focus:border-yellow-500 focus:ring-1 focus:ring-yellow-700 hover:border-yellow-800 transition duration-300"
            required
          />
          <button
            type="submit"
            className="w-full py-3 px-4 bg-[#0c6170] text-[#dbf5f0] font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition duration-300"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
