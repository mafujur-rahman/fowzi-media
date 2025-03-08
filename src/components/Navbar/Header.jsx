'use client';
import { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi"; 


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-5 lg:px-20">
      <img
        className="w-16 h-auto cursor-pointer"
        src="/assets/img/logo/icon 2.png"
        alt="Fowzi Media Logo"
      />

      {/* Menu Button for Mobile */}
      <div className="lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={` top-16 left-0 px-4 w-full bg-[#424242] text-white text-2xl rounded-2xl fixed lg:flex lg:relative lg:top-0 lg:w-auto gap-4 items-center lg:px-0 shadow-lg lg:shadow-none transition-all duration-300 ${isOpen ? "block" : "hidden"
          } lg:flex`}
        
          style={{ fontFamily: 'Glacial Indifference' }}
      >
        {["HOME", "SERVICES", "ABOUT", "PORTFOLIO", "CASE STUDIES", "CONTACT"].map((item) => (
          <li key={item} className="text-lg p-3 cursor-pointer">
            {item}
          </li>
        ))}
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex gap-3">
        <button className="text-xl bg-gray-200 rounded-full p-3 hover:bg-black hover:text-[#FF0101] hover:delay-100"><FaTwitter /></button>
        <button className="text-xl bg-gray-200 rounded-full p-3 hover:bg-black hover:text-[#FF0101] hover:delay-100"><FaFacebook /></button>
        <button className="text-xl bg-gray-200 rounded-full p-3 hover:bg-black hover:text-[#FF0101] hover:delay-100"><FaInstagram /></button>
      </div>
    </nav>
  );
}