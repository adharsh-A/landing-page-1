
import { MenuIcon, MoveUpRight, UserSearch } from "lucide-react";
import React from "react"
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (

    <div className="stickytop-1 z-50 w-full pt-10 lg:pt-0 ">
      <div className=" flex  lg:px-4 lg:py-4 py-1 px-1 justify-between backdrop-blur-lg  ">
        {/* logo */}
        <div className="bg-gradient-to-r from-purple-300 to-pink-200 bg-clip-text text-transparent font-extrabold lg:text-2xl text-sm lg:ml-10 ml-0">
          Web <span className="absolute bg-gradient-to-r from-orange-300 to-pink-200 bg-clip-text text-transparent lg:bottom-2 bottom-0 lg:text-2xl text-sm">O3</span>
        </div>
        {/* bar */}

        <div className="flex justify-center">
        <div className=" flex lg:space-x-10 space-x-4 lg:text-base text-sm">
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
            <Link to="https://www.linkedin.com/in/adharsh-boddul-6847a3235/"><UserSearch color="#f9e1e1" strokeWidth={1.25} absoluteStrokeWidth className="mr-2 block md:hidden"/></Link>


        </div>
        </div>
        <div className="lg:flex mr-10 hidden ">
          <Link to="https://www.linkedin.com/in/adharsh-boddul-6847a3235/"><UserSearch color="#f9e1e1" strokeWidth={1.25} absoluteStrokeWidth className="mr-2"/></Link>
          <Link to="https://github.com/adharsh-A" ><FaGithub size={24} className="mr-4"/></Link>
          Register Now <MoveUpRight size={22} strokeWidth={2} />
          </div>
      </div>
    </div>
  )
};

export default Navbar;
