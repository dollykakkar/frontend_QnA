import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom'
const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <nav className="bg-[#dbf5f0] p-3 fixed w-screen ">
      <div className="container mx-auto flex items-center ">
        <div className="text-[#0c6170] font-bold text-3xl  -ml-4 w-32">
          LeaRn wiTh uS
        </div>
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-[#0c6170]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'} lg:block`}>
          <div className=" text-lg lg:flex-grow">
            <Link to='/home' className=" text-lg font-bold block mt-4 lg:inline-block lg:mt-0  text-[#0c6170] hover:text-[#37beb0] ml-48 ">
              Home
            </Link>
            <Link to='/learn' className="text-lg font-bold block mt-4 lg:inline-block lg:mt-0 ml-8 text-[#0c6170] hover:text-[#37beb0] mr-4">
              Learn JS
            </Link>
            <Link to='/question' className="font-bold block mt-4 lg:inline-block lg:mt-0 ml-4 text-[#0c6170] hover:text-[#37beb0]">
            Learn React
            </Link>
            <Link to='/feedback' className=" font-bold block mt-4 lg:inline-block lg:mt-0 ml-8 text-[#0c6170] hover:text-[#37beb0]">
              Feedback
            </Link>
            <Link to='/sign' className="border-2 border-black font-bold block mt-4 lg:inline-block lg:mt-0 ml-4 text-[#0c6170] hover:text-[#37beb0] w-24">
            Sign in 
            </Link>
            <Link to='/log' className="border-2 border-black font-bold block ml-3 lg:inline-block lg:mt-0 text-[#0c6170] hover:text-[#37beb0] w-24 ">
            Log in 
            </Link>
          </div>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default NavBar

