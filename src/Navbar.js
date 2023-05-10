import React from "react";

const Navbar = () => {
  return (
    <div className="absolute z-[100] w-full flex justify-between p-4">
      <h1 className="text-4xl text-red-600 font-bold cursor-pointer">
        NETFLIX
      </h1>
      <div className=" text-white flex gap-2">
        <button className="px-4 py-2">Sign In</button>
        <button className="bg-red-600 px-4 py-2 rounded-md">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
