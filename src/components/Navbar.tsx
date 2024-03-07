import { NavLink } from "react-router-dom"
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { FaHome } from "react-icons/fa";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
        <>
     
     <div className="px-4">
        <div className="h-16 flex justify-between md:justify-center items-center">
          <div className="flex space-x-4">
              <div className="flex items-center text-white text-lg">
                  <NavLink to="/"><FaHome className="md:hidden text-3xl"/></NavLink>
                </div>

              <div className="navbar hidden md:flex justify-between mx-4 my-7 md:gap-8 lg:gap-14">
                <div className="item js-reveal-1 flex justify-center items-center">
                <NavLink to="/" className="no-underline text-lg font-semibold text-shadow-23 relative">Hem</NavLink>
                </div>
                <div className="item js-reveal-1">
                <NavLink to="/portfolio" className="no-underline text-lg font-semibold text-shadow-23 relative">Portfolio</NavLink>
                </div>
                <div className="item js-reveal-2">
                    <NavLink to="/education" className="no-underline text-lg font-semibold text-shadow-23 relative">Utbildning</NavLink>
                </div>
                <div className="item js-reveal-3">
                    <NavLink to="/experience" className="no-underline text-lg font-semibold text-shadow-23 relative">Erfarenhet</NavLink>
                </div>
                <div className="item js-reveal-3">
                    <NavLink to="/about" className="no-underline text-lg font-semibold text-shadow-23 relative">Om mig</NavLink>
                </div>
              </div>
          </div>

        {/* Mobilmenyknapp */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <IoClose className="text-3xl" /> : <IoMenu className="text-3xl" />}
              </button>
            </div>
          </div>

        </div>
 

      {/* Mobilmeny */}
      <div className={`md:hidden ${isOpen ? 'flex' : 'hidden'} flex-col justify-end items-end pr-4`}>
        <NavLink to="/" className="no-underline text-lg font-semibold text-shadow-23 relative">Hem</NavLink>
        <NavLink to="/portfolio" className="no-underline text-lg font-semibold text-shadow-23 relative">Portfolio</NavLink>
        <NavLink to="/education" className="no-underline text-lg font-semibold text-shadow-23 relative">Utbildning</NavLink>
        <NavLink to="/experience" className="no-underline text-lg font-semibold text-shadow-23 relative">Erfarenhet</NavLink>
        <NavLink to="/about" className="no-underline text-lg font-semibold text-shadow-23 relative">Om mig</NavLink>
      
      </div>
 
      </>
  )
}
