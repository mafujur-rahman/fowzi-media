'use client';
import  {useState}  from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi"; 

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close menu on mobile after clickingF
    }
  };

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
        className={`top-16 left-0 px-4 w-full bg-[#424242] text-white text-2xl rounded-2xl fixed lg:flex lg:relative lg:top-0 lg:w-auto gap-4 items-center lg:px-0 shadow-lg lg:shadow-none transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        } lg:flex`}
        style={{ fontFamily: 'Glacial Indifference' }}
      >
        <li className="text-lg p-3 cursor-pointer">
          <a href="/" onClick={() => handleScroll("/")}>HOME</a>
        </li>
        <li className="text-lg p-3 cursor-pointer">
          <a href="/services" onClick={() => handleScroll("services")}>SERVICES</a>
        </li>
        <li className="text-lg p-3 cursor-pointer">
          <a href="/about-us" onClick={() => handleScroll("about")}>ABOUT</a>
        </li>
        <li className="text-lg p-3 cursor-pointer">
          <a href="/portfolio" onClick={() => handleScroll("portfolio")}>PORTFOLIO</a>
        </li>
        <li className="text-lg p-3 cursor-pointer">
          <a href="#" onClick={() => handleScroll("case-studies")}>CASE STUDIES</a>
        </li>
        <li className="text-lg p-3 cursor-pointer">
          <a href="/contact" onClick={() => handleScroll("contact")}>CONTACT</a>
        </li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex gap-3">
        <a href="#" className="text-xl bg-gray-200 rounded-full p-3 hover:bg-black hover:text-[#FF0101] hover:delay-100"><FaTwitter /></a>
        <a href="#" className="text-xl bg-gray-200 rounded-full p-3 hover:bg-black hover:text-[#FF0101] hover:delay-100"><FaFacebook /></a>
        <a href="#" className="text-xl bg-gray-200 rounded-full p-3 hover:bg-black hover:text-[#FF0101] hover:delay-100"><FaInstagram /></a>
      </div>
    </nav>
  );
}