import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-pink-500  to-purple-600 h-[15vh] flex items-center px-8 shadow-md">
      <h1 className="text-white text-2xl font-bold tracking-wide">
        🪄 Anjali’s Wizardry
      </h1>
      <ul className="ml-auto flex space-x-6 text-white font-medium">
        <li className="hover:underline cursor-pointer">Home</li>
        <li className="hover:underline cursor-pointer">About</li>
        <li className="hover:underline cursor-pointer">Projects</li>
        <li className="hover:underline cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};
export default Navbar;
