import React from "react";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-gray-700 flex flex-col justify-center items-center">
      <div className="flex py-6 px-6 text-gray-400">
        <FaCopyright className="" />
        <p className="px-2">2023 BIBEK BASNET</p>
      </div>
    </div>
  );
};

export default Footer;
