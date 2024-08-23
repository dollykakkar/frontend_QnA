import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const AddQuestion = () => {

  const [addData, setAddData] = useState({
    question: '',
    answer: '',
    example: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setAddData({
      ...addData, [e.target.name]: e.target.value,
    });
  };

  const handleAddQuestion = async (e) => {
    e.preventDefault();
    console.log("data=", addData);

    try {
      const response = await axios.post('http://localhost:5000/addquestions', addData);
      console.log("question added successfully", response.data);
      if (response.data.message === 'data added successfully') {
        navigate('/learn');
      } else {
        alert("failed");
      }
    } catch (error) {
      console.error("error adding question:", error);
    }
  };

  return (
    <div className="bg-[#37beb0] min-h-screen w-screen flex items-center justify-center p-4">
      <div className="bg-[#dbf5f0] mt-32 shadow-md p-6 rounded-lg w-full max-w-md">
        <div className="mb-4">
          <input 
            type="text" 
            name="question"  
            placeholder="Enter question" 
            onChange={handleChange}
            className="w-full truncate p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#37beb0]"
          />
        </div>
        <div className="mb-4">
          <textarea 
            name="answer"  
            placeholder="Enter answer"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#37beb0]"
          />
        </div>
        <div className="mb-4">
          <textarea 
            name="example"  
            placeholder="Enter code example"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#37beb0]"
          />
        </div>
        {addData.example && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Code Example:</h3>
            <SyntaxHighlighter language="javascript" style={dark}>
              {addData.example}
            </SyntaxHighlighter>
          </div>
        )}
        <button 
          className="w-full bg-[#37beb0] text-white p-2 rounded-md hover:bg-[#2aa297] transition-colors"
          type="submit" 
          onClick={handleAddQuestion} 
        >
          Add Question
        </button>
      </div>
    </div>
  );
};

export default AddQuestion;
