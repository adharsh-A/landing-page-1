
import { MenuIcon, MoveUpRight, UserSearch } from "lucide-react";
import React from "react"
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (

    <div className="z-50 w-full pt-10 stickytop-1 lg:pt-0 ">
      <div className="flex justify-between px-1 py-1  lg:px-4 lg:py-4 backdrop-blur-lg">
        {/* logo */}
        <div className="ml-0 text-sm font-extrabold text-transparent bg-gradient-to-r from-purple-300 to-pink-200 bg-clip-text lg:text-2xl lg:ml-10">
          Web <span className="absolute bottom-0 text-sm text-transparent bg-gradient-to-r from-orange-300 to-pink-200 bg-clip-text lg:bottom-2 lg:text-2xl">O3</span>
        </div>
        {/* bar */}

        <div className="flex justify-center">
        <div className="flex space-x-4 text-sm  lg:space-x-10 lg:text-base">
          <Link to="/" className="text-gray-400 hover:text-gray-200">
            Home
          </Link>
          <Link to="/about" className="text-gray-400 hover:text-gray-200">
            About
          </Link>
          <Link to="/contact" className="text-gray-400 hover:text-gray-200">
            Contact
          </Link>
          <Link to="/contact" className="text-gray-400 hover:text-gray-200">
            Services
            </Link>
            <Link to="https://www.linkedin.com/in/adharsh-boddul-6847a3235/"><UserSearch color="#f9e1e1" strokeWidth={1.25} absoluteStrokeWidth className="block mr-2 md:hidden"/></Link>


        </div>
        </div>
        <div className="hidden mr-10 lg:flex ">
          <Link to="https://www.linkedin.com/in/adharsh-boddul-6847a3235/"><UserSearch color="#f9e1e1" strokeWidth={1.25} absoluteStrokeWidth className="mr-2"/></Link>
          {/* <Link to="https://github.com/adharsh-A" ><FaGithub size={24} className="mr-4"/></Link> */}
          Register Now <MoveUpRight size={22} strokeWidth={2} />
          </div>
      </div>
    </div>
  )
};

export default Navbar;
