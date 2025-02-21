import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../assets/Logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="flex items-center justify-between p-6 md:p-8 md:px-24 flex-wrap">
        <div className="flex items-center gap-10 md:gap-40">
          <a
            href="/"
            className="flex items-center gap-3 md:gap-5 text-[21px] font-[600] text-[#6C5FBC] font-[poppins]"
          >
            <img src={Logo} alt="Logo" className="w-8 md:w-auto" />
            eatly
          </a>
        </div>

        <nav className="hidden md:flex gap-8 md:gap-16">
          <Link className="text-[17.83px] text-[#606060] transition-all duration-200 hover:text-blue-800" to="/menu">Menu</Link>
          <Link className="text-[17.83px] text-[#606060] transition-all duration-200 hover:text-blue-800" to="/blog">Blog</Link>
          <Link className="text-[17.83px] text-[#606060] transition-all duration-200 hover:text-blue-800" to="/pricing">Pricing</Link>
          <Link className="text-[17.83px] text-[#606060] transition-all duration-200 hover:text-blue-800" to="/contact">Contact</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4 md:gap-8">
          <Link className="text-[18px] text-[#606060] font-[700] font-[poppins]" to="/login">Login</Link>
          <Link to="/signup" className="bg-[#6C5FBC] h-12 px-6 rounded-2xl text-cyan-50 text-lg font-medium flex justify-center items-center">Sign up</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl text-[#6C5FBC]">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}> 
        <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-3xl text-[#6C5FBC]">
          <FiX />
        </button>
        <Link onClick={() => setMenuOpen(false)} className="text-2xl text-[#606060] my-4" to="/menu">Menu</Link>
        <Link onClick={() => setMenuOpen(false)} className="text-2xl text-[#606060] my-4" to="/blog">Blog</Link>
        <Link onClick={() => setMenuOpen(false)} className="text-2xl text-[#606060] my-4" to="/pricing">pricing</Link>
        <Link onClick={() => setMenuOpen(false)} className="text-2xl text-[#606060] my-4" to="/Contact">Contact</Link>
        <Link onClick={() => setMenuOpen(false)} className="text-2xl text-[#606060] my-4" to="/login">Login</Link>
        <Link onClick={() => setMenuOpen(false)} to="/signup" className="bg-[#6C5FBC] px-6 py-2 rounded-2xl text-white text-lg font-medium my-4">Sign up</Link>
      </div>
    </header>
  );
}

export default Navbar;