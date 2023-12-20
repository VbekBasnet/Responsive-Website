import React from "react";
import laptop from "../Assets/laptop.jpg";

const Analystics = () => {
  return (
    <div className=" w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
        <img className=" w-[500px] mx-auto my-4" src={laptop} alt="/" />
        <div className="uppercase flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">Data Analystics dashboard</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage data Analystics Centerally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            laborum debitis deserunt veritatis, nulla asperiores in excepturi
            quibusdam! Officia laborum blanditiis soluta recusandae libero
            tenetur labore vitae rerum? Et, sunt!
          </p>
          <button className="bg-[#000000] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analystics;
