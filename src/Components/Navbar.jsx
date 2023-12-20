import React, { useState } from "react";
import { IoReorderFourOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className=" flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white ">
      <h1 className="text-3xl font-bold text-[#00df9a] w-full">VBEK.</h1>
      <ul className=" hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Portfolio</li>
        <li className="p-4">Experience</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? (
          <AiOutlineClose size={25} />
        ) : (
          <IoReorderFourOutline size={25} />
        )}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="text-3xl font-bold text-[#00df9a] w-full m-4">VBEK.</h1>
        <ul className=" uppercase p-4">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Portfolio</li>
          <li className="p-4 border-b border-gray-600">Experience</li>
          <li className="p-4 border-b border-gray-600">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
