
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-[#121212] text-white py-10" style={{ fontFamily: 'Glacial Indifference' }}>
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-start">
        {/* Website Map */}
        <div className="mb-8 lg:w-1/3" >
          <img className="w-16 h-auto mb-10" src="/assets/img/logo/icon 1.png" alt="" />
          <ul className=" text-gray-300">
            <li><a className="text-xl mb-2">1729 N 2nd St Studio</a></li>
            <li><a className="text-xl li-position">204A,Minneapolis, MN 55411</a></li>
            <li><a className="text-xl mb-2">hello@fowzimedia.com</a></li>
            <li><a className="text-xl mb-2">Tel: (612)466-4688</a></li>
            <div className="mt-10">
              <h3 className="text-3xl font-bold mb-2">Social Media</h3>
              <ul className="flex gap-5 justify-center sm:justify-start">
                <li className="bg-[#121212] text-white border p-2 hover:bg-white hover:text-black rounded-3xl">
                  <FaTwitter />
                </li>
                <li className="bg-[#121212] text-white border p-2 hover:bg-white hover:text-black rounded-3xl">
                  <FaFacebook />
                </li>
                <li className="bg-[#121212] text-white border p-2 hover:bg-white hover:text-black rounded-3xl">
                  <FaInstagram />
                </li>
                <li className="bg-[#121212] text-white border p-2 hover:bg-white hover:text-black rounded-3xl">
                  <FaLinkedin />
                </li>
              </ul>
            </div>
          </ul>
        </div>

        {/* Center Text */}
        <div className="md:mt-28 lg:w-1/3" >
          <h1 className="text-3xl mb-8">Information</h1>
          <ul className=" text-gray-300 cursor-pointer">
            <li><a className="text-xl mb-2">Home</a></li>
            <li><a className="text-xl ">Services</a></li>
            <li><a className="text-xl mb-2">Portfolio</a></li>
            <li><a className="text-xl mb-2">Blogs</a></li>
          </ul>
        </div>


        {/* Center Text */}
        <div className="md:mt-28 lg:w-1/3" >
          <h1 className="text-3xl mb-8">Help Center</h1>
          <ul className=" text-gray-300 cursor-pointer">
            <li><a className="text-xl mb-2">Supports</a></li>
            <li><a className="text-xl ">Terms and Conditions</a></li>
            <li><a className="text-xl mb-2">Privacy Policy</a></li>
          </ul>
        </div>


        {/* Contact Information */}
        <div className="md:mt-28 lg:w-1/3">
          <h1 className="text-3xl mb-8">Opening Hours</h1>
          <ul className="text-gray-300">
            <li><a className="text-xl mb-2">Monday - Thursday</a></li>
            <li><a className="text-xl mb-2">9 am - 6 pm</a></li>
            <li><a className="text-xl mb-5">Friday</a></li>
            <li><a className="text-xl mb-2">9 am - 12.30 pm</a></li>
            <li><a className="text-xl mb-5">Weekend Closed</a></li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
