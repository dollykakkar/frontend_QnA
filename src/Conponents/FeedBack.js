import React from 'react'
import { useState } from 'react';
import axios from 'axios';
const FeedBcak = () => {
  const [feedbackData , setfeedbackData] = useState({
    username: "",
    message: ""
  });

  const handleChange = (e) => {
    setfeedbackData({
      ...feedbackData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("data=>",feedbackData)
    try {
      const response = await axios.post(
        "http://localhost:5000/feedback",
        feedbackData
      );
      console.log(" submitted successfully:", response.data);

      alert("THANKYOU");

      setfeedbackData({
        username: "",
        message: "",
      });

    } catch (error) {
      console.error("Error", error);
      alert("There was an error submitting your feedback.please sign in first");
    }
  };
  return (
    <>
      <div className="bg-[#37beb0] min-h-screen w-screen flex items-center justify-center p-4">
        <div className="bg-[#dbf5f0] mt-32 shadow-md  p-4 rounded-lg w-full max-w-md hover:p-5">
          <h1 className="text-3xl font-bold mb-4 text-center text-[#0c6170]">
            Feedback <span className="text-[#0c6170]">Form</span>
          </h1>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="enter your UserName"
              name="username"
              value={ feedbackData.username }
              onChange={handleChange}
              className="w-full p-2 border border-yellow-600 rounded-md focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 hover:border-yellow-800 transition duration-300"
              required
            />
            <textarea
            id="message"
            name="message"
            onChange={handleChange}
            value={feedbackData.message}
            placeholder="Message"
            className='w-full p-2 border border-yellow-600 rounded-md focus:border-yellow-500 focus:ring-1 focus:ring-yellow-700 hover:border-yellow-800 transition duration-300'
            rows="3"
            required
          />
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full py-3 px-4 bg-[#0c6170] text-[#dbf5f0] font-semibold rounded-md  focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition duration-300"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeedBcak
