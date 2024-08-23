import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const DisplayQuestion = () => {
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/question");
        console.log('Fetched data:', response.data);

        setQuestions(response.data.Que);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleAddNewQuestionClick = () => {
    navigate('/log'); 
  };


  return (
    <>
      <div className="bg-[#37beb0] min-h-screen w-full flex items-center justify-center p-4">
      <div className="flex flex-col items-center w-full max-w-lg">
          <div className=" w-full flex justify-center bg-[#37beb0] mt-28">
            <button className="bg-[#0c6170] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#084d59] transition duration-300 ease-in-out" onClick={handleAddNewQuestionClick}>
              ADD New Questions
            </button>
          </div>
        <div className="bg-[#dbf5f0] mt-4 h-auto shadow-md p-4 rounded-lg max-w-lg">
          {questions.length > 0 ? (
            questions.map((questionObj, index) => (
              <div key={index} className="mb-8">
                <div className="flex">
                  <p className="text-[#0c6170] font-bold text-2xl">Question:</p>
                  <p className="text-[#0c6170] font-bold text-lg ml-2">{questionObj.question}</p>
                </div>
                <div className="flex mt-4">
                  <p className="text-[#0c6170] font-bold text-2xl">Answer:</p>
                  <p className="text-[#0c6170] font-bold text-lg ml-2 text-justify">{questionObj.answer}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-[#0c6170] font-bold text-lg">Loading...</p>
          )}
        </div>
      </div>
      </div>
    </>
  );
};

export default DisplayQuestion;
